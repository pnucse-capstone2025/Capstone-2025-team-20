(function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))s(c);new MutationObserver(c=>{for(const f of c)if(f.type==="childList")for(const d of f.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&s(d)}).observe(document,{childList:!0,subtree:!0});function r(c){const f={};return c.integrity&&(f.integrity=c.integrity),c.referrerPolicy&&(f.referrerPolicy=c.referrerPolicy),c.crossOrigin==="use-credentials"?f.credentials="include":c.crossOrigin==="anonymous"?f.credentials="omit":f.credentials="same-origin",f}function s(c){if(c.ep)return;c.ep=!0;const f=r(c);fetch(c.href,f)}})();function W1(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var mc={exports:{}},Nl={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var j0;function I1(){if(j0)return Nl;j0=1;var n=Symbol.for("react.transitional.element"),l=Symbol.for("react.fragment");function r(s,c,f){var d=null;if(f!==void 0&&(d=""+f),c.key!==void 0&&(d=""+c.key),"key"in c){f={};for(var m in c)m!=="key"&&(f[m]=c[m])}else f=c;return c=f.ref,{$$typeof:n,type:s,key:d,ref:c!==void 0?c:null,props:f}}return Nl.Fragment=l,Nl.jsx=r,Nl.jsxs=r,Nl}var z0;function eb(){return z0||(z0=1,mc.exports=I1()),mc.exports}var g=eb(),gc={exports:{}},fe={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var D0;function tb(){if(D0)return fe;D0=1;var n=Symbol.for("react.transitional.element"),l=Symbol.for("react.portal"),r=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),c=Symbol.for("react.profiler"),f=Symbol.for("react.consumer"),d=Symbol.for("react.context"),m=Symbol.for("react.forward_ref"),y=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),x=Symbol.iterator;function T(E){return E===null||typeof E!="object"?null:(E=x&&E[x]||E["@@iterator"],typeof E=="function"?E:null)}var D={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},R=Object.assign,z={};function C(E,G,V){this.props=E,this.context=G,this.refs=z,this.updater=V||D}C.prototype.isReactComponent={},C.prototype.setState=function(E,G){if(typeof E!="object"&&typeof E!="function"&&E!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,E,G,"setState")},C.prototype.forceUpdate=function(E){this.updater.enqueueForceUpdate(this,E,"forceUpdate")};function k(){}k.prototype=C.prototype;function L(E,G,V){this.props=E,this.context=G,this.refs=z,this.updater=V||D}var $=L.prototype=new k;$.constructor=L,R($,C.prototype),$.isPureReactComponent=!0;var J=Array.isArray,X={H:null,A:null,T:null,S:null,V:null},P=Object.prototype.hasOwnProperty;function K(E,G,V,F,te,ye){return V=ye.ref,{$$typeof:n,type:E,key:G,ref:V!==void 0?V:null,props:ye}}function ue(E,G){return K(E.type,G,void 0,void 0,void 0,E.props)}function me(E){return typeof E=="object"&&E!==null&&E.$$typeof===n}function se(E){var G={"=":"=0",":":"=2"};return"$"+E.replace(/[=:]/g,function(V){return G[V]})}var oe=/\/+/g;function ze(E,G){return typeof E=="object"&&E!==null&&E.key!=null?se(""+E.key):G.toString(36)}function zt(){}function un(E){switch(E.status){case"fulfilled":return E.value;case"rejected":throw E.reason;default:switch(typeof E.status=="string"?E.then(zt,zt):(E.status="pending",E.then(function(G){E.status==="pending"&&(E.status="fulfilled",E.value=G)},function(G){E.status==="pending"&&(E.status="rejected",E.reason=G)})),E.status){case"fulfilled":return E.value;case"rejected":throw E.reason}}throw E}function Ze(E,G,V,F,te){var ye=typeof E;(ye==="undefined"||ye==="boolean")&&(E=null);var ie=!1;if(E===null)ie=!0;else switch(ye){case"bigint":case"string":case"number":ie=!0;break;case"object":switch(E.$$typeof){case n:case l:ie=!0;break;case v:return ie=E._init,Ze(ie(E._payload),G,V,F,te)}}if(ie)return te=te(E),ie=F===""?"."+ze(E,0):F,J(te)?(V="",ie!=null&&(V=ie.replace(oe,"$&/")+"/"),Ze(te,G,V,"",function(it){return it})):te!=null&&(me(te)&&(te=ue(te,V+(te.key==null||E&&E.key===te.key?"":(""+te.key).replace(oe,"$&/")+"/")+ie)),G.push(te)),1;ie=0;var Fe=F===""?".":F+":";if(J(E))for(var Ee=0;Ee<E.length;Ee++)F=E[Ee],ye=Fe+ze(F,Ee),ie+=Ze(F,G,V,ye,te);else if(Ee=T(E),typeof Ee=="function")for(E=Ee.call(E),Ee=0;!(F=E.next()).done;)F=F.value,ye=Fe+ze(F,Ee++),ie+=Ze(F,G,V,ye,te);else if(ye==="object"){if(typeof E.then=="function")return Ze(un(E),G,V,F,te);throw G=String(E),Error("Objects are not valid as a React child (found: "+(G==="[object Object]"?"object with keys {"+Object.keys(E).join(", ")+"}":G)+"). If you meant to render a collection of children, use an array instead.")}return ie}function q(E,G,V){if(E==null)return E;var F=[],te=0;return Ze(E,F,"","",function(ye){return G.call(V,ye,te++)}),F}function Z(E){if(E._status===-1){var G=E._result;G=G(),G.then(function(V){(E._status===0||E._status===-1)&&(E._status=1,E._result=V)},function(V){(E._status===0||E._status===-1)&&(E._status=2,E._result=V)}),E._status===-1&&(E._status=0,E._result=G)}if(E._status===1)return E._result.default;throw E._result}var ne=typeof reportError=="function"?reportError:function(E){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var G=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof E=="object"&&E!==null&&typeof E.message=="string"?String(E.message):String(E),error:E});if(!window.dispatchEvent(G))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",E);return}console.error(E)};function ge(){}return fe.Children={map:q,forEach:function(E,G,V){q(E,function(){G.apply(this,arguments)},V)},count:function(E){var G=0;return q(E,function(){G++}),G},toArray:function(E){return q(E,function(G){return G})||[]},only:function(E){if(!me(E))throw Error("React.Children.only expected to receive a single React element child.");return E}},fe.Component=C,fe.Fragment=r,fe.Profiler=c,fe.PureComponent=L,fe.StrictMode=s,fe.Suspense=y,fe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=X,fe.__COMPILER_RUNTIME={__proto__:null,c:function(E){return X.H.useMemoCache(E)}},fe.cache=function(E){return function(){return E.apply(null,arguments)}},fe.cloneElement=function(E,G,V){if(E==null)throw Error("The argument must be a React element, but you passed "+E+".");var F=R({},E.props),te=E.key,ye=void 0;if(G!=null)for(ie in G.ref!==void 0&&(ye=void 0),G.key!==void 0&&(te=""+G.key),G)!P.call(G,ie)||ie==="key"||ie==="__self"||ie==="__source"||ie==="ref"&&G.ref===void 0||(F[ie]=G[ie]);var ie=arguments.length-2;if(ie===1)F.children=V;else if(1<ie){for(var Fe=Array(ie),Ee=0;Ee<ie;Ee++)Fe[Ee]=arguments[Ee+2];F.children=Fe}return K(E.type,te,void 0,void 0,ye,F)},fe.createContext=function(E){return E={$$typeof:d,_currentValue:E,_currentValue2:E,_threadCount:0,Provider:null,Consumer:null},E.Provider=E,E.Consumer={$$typeof:f,_context:E},E},fe.createElement=function(E,G,V){var F,te={},ye=null;if(G!=null)for(F in G.key!==void 0&&(ye=""+G.key),G)P.call(G,F)&&F!=="key"&&F!=="__self"&&F!=="__source"&&(te[F]=G[F]);var ie=arguments.length-2;if(ie===1)te.children=V;else if(1<ie){for(var Fe=Array(ie),Ee=0;Ee<ie;Ee++)Fe[Ee]=arguments[Ee+2];te.children=Fe}if(E&&E.defaultProps)for(F in ie=E.defaultProps,ie)te[F]===void 0&&(te[F]=ie[F]);return K(E,ye,void 0,void 0,null,te)},fe.createRef=function(){return{current:null}},fe.forwardRef=function(E){return{$$typeof:m,render:E}},fe.isValidElement=me,fe.lazy=function(E){return{$$typeof:v,_payload:{_status:-1,_result:E},_init:Z}},fe.memo=function(E,G){return{$$typeof:p,type:E,compare:G===void 0?null:G}},fe.startTransition=function(E){var G=X.T,V={};X.T=V;try{var F=E(),te=X.S;te!==null&&te(V,F),typeof F=="object"&&F!==null&&typeof F.then=="function"&&F.then(ge,ne)}catch(ye){ne(ye)}finally{X.T=G}},fe.unstable_useCacheRefresh=function(){return X.H.useCacheRefresh()},fe.use=function(E){return X.H.use(E)},fe.useActionState=function(E,G,V){return X.H.useActionState(E,G,V)},fe.useCallback=function(E,G){return X.H.useCallback(E,G)},fe.useContext=function(E){return X.H.useContext(E)},fe.useDebugValue=function(){},fe.useDeferredValue=function(E,G){return X.H.useDeferredValue(E,G)},fe.useEffect=function(E,G,V){var F=X.H;if(typeof V=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return F.useEffect(E,G)},fe.useId=function(){return X.H.useId()},fe.useImperativeHandle=function(E,G,V){return X.H.useImperativeHandle(E,G,V)},fe.useInsertionEffect=function(E,G){return X.H.useInsertionEffect(E,G)},fe.useLayoutEffect=function(E,G){return X.H.useLayoutEffect(E,G)},fe.useMemo=function(E,G){return X.H.useMemo(E,G)},fe.useOptimistic=function(E,G){return X.H.useOptimistic(E,G)},fe.useReducer=function(E,G,V){return X.H.useReducer(E,G,V)},fe.useRef=function(E){return X.H.useRef(E)},fe.useState=function(E){return X.H.useState(E)},fe.useSyncExternalStore=function(E,G,V){return X.H.useSyncExternalStore(E,G,V)},fe.useTransition=function(){return X.H.useTransition()},fe.version="19.1.1",fe}var M0;function cf(){return M0||(M0=1,gc.exports=tb()),gc.exports}var w=cf();const sn=W1(w);var yc={exports:{}},Bl={},vc={exports:{}},bc={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _0;function nb(){return _0||(_0=1,(function(n){function l(q,Z){var ne=q.length;q.push(Z);e:for(;0<ne;){var ge=ne-1>>>1,E=q[ge];if(0<c(E,Z))q[ge]=Z,q[ne]=E,ne=ge;else break e}}function r(q){return q.length===0?null:q[0]}function s(q){if(q.length===0)return null;var Z=q[0],ne=q.pop();if(ne!==Z){q[0]=ne;e:for(var ge=0,E=q.length,G=E>>>1;ge<G;){var V=2*(ge+1)-1,F=q[V],te=V+1,ye=q[te];if(0>c(F,ne))te<E&&0>c(ye,F)?(q[ge]=ye,q[te]=ne,ge=te):(q[ge]=F,q[V]=ne,ge=V);else if(te<E&&0>c(ye,ne))q[ge]=ye,q[te]=ne,ge=te;else break e}}return Z}function c(q,Z){var ne=q.sortIndex-Z.sortIndex;return ne!==0?ne:q.id-Z.id}if(n.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var f=performance;n.unstable_now=function(){return f.now()}}else{var d=Date,m=d.now();n.unstable_now=function(){return d.now()-m}}var y=[],p=[],v=1,x=null,T=3,D=!1,R=!1,z=!1,C=!1,k=typeof setTimeout=="function"?setTimeout:null,L=typeof clearTimeout=="function"?clearTimeout:null,$=typeof setImmediate<"u"?setImmediate:null;function J(q){for(var Z=r(p);Z!==null;){if(Z.callback===null)s(p);else if(Z.startTime<=q)s(p),Z.sortIndex=Z.expirationTime,l(y,Z);else break;Z=r(p)}}function X(q){if(z=!1,J(q),!R)if(r(y)!==null)R=!0,P||(P=!0,ze());else{var Z=r(p);Z!==null&&Ze(X,Z.startTime-q)}}var P=!1,K=-1,ue=5,me=-1;function se(){return C?!0:!(n.unstable_now()-me<ue)}function oe(){if(C=!1,P){var q=n.unstable_now();me=q;var Z=!0;try{e:{R=!1,z&&(z=!1,L(K),K=-1),D=!0;var ne=T;try{t:{for(J(q),x=r(y);x!==null&&!(x.expirationTime>q&&se());){var ge=x.callback;if(typeof ge=="function"){x.callback=null,T=x.priorityLevel;var E=ge(x.expirationTime<=q);if(q=n.unstable_now(),typeof E=="function"){x.callback=E,J(q),Z=!0;break t}x===r(y)&&s(y),J(q)}else s(y);x=r(y)}if(x!==null)Z=!0;else{var G=r(p);G!==null&&Ze(X,G.startTime-q),Z=!1}}break e}finally{x=null,T=ne,D=!1}Z=void 0}}finally{Z?ze():P=!1}}}var ze;if(typeof $=="function")ze=function(){$(oe)};else if(typeof MessageChannel<"u"){var zt=new MessageChannel,un=zt.port2;zt.port1.onmessage=oe,ze=function(){un.postMessage(null)}}else ze=function(){k(oe,0)};function Ze(q,Z){K=k(function(){q(n.unstable_now())},Z)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(q){q.callback=null},n.unstable_forceFrameRate=function(q){0>q||125<q?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ue=0<q?Math.floor(1e3/q):5},n.unstable_getCurrentPriorityLevel=function(){return T},n.unstable_next=function(q){switch(T){case 1:case 2:case 3:var Z=3;break;default:Z=T}var ne=T;T=Z;try{return q()}finally{T=ne}},n.unstable_requestPaint=function(){C=!0},n.unstable_runWithPriority=function(q,Z){switch(q){case 1:case 2:case 3:case 4:case 5:break;default:q=3}var ne=T;T=q;try{return Z()}finally{T=ne}},n.unstable_scheduleCallback=function(q,Z,ne){var ge=n.unstable_now();switch(typeof ne=="object"&&ne!==null?(ne=ne.delay,ne=typeof ne=="number"&&0<ne?ge+ne:ge):ne=ge,q){case 1:var E=-1;break;case 2:E=250;break;case 5:E=1073741823;break;case 4:E=1e4;break;default:E=5e3}return E=ne+E,q={id:v++,callback:Z,priorityLevel:q,startTime:ne,expirationTime:E,sortIndex:-1},ne>ge?(q.sortIndex=ne,l(p,q),r(y)===null&&q===r(p)&&(z?(L(K),K=-1):z=!0,Ze(X,ne-ge))):(q.sortIndex=E,l(y,q),R||D||(R=!0,P||(P=!0,ze()))),q},n.unstable_shouldYield=se,n.unstable_wrapCallback=function(q){var Z=T;return function(){var ne=T;T=Z;try{return q.apply(this,arguments)}finally{T=ne}}}})(bc)),bc}var U0;function ab(){return U0||(U0=1,vc.exports=nb()),vc.exports}var xc={exports:{}},st={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var N0;function ib(){if(N0)return st;N0=1;var n=cf();function l(y){var p="https://react.dev/errors/"+y;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var v=2;v<arguments.length;v++)p+="&args[]="+encodeURIComponent(arguments[v])}return"Minified React error #"+y+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function r(){}var s={d:{f:r,r:function(){throw Error(l(522))},D:r,C:r,L:r,m:r,X:r,S:r,M:r},p:0,findDOMNode:null},c=Symbol.for("react.portal");function f(y,p,v){var x=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:c,key:x==null?null:""+x,children:y,containerInfo:p,implementation:v}}var d=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function m(y,p){if(y==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return st.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,st.createPortal=function(y,p){var v=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(l(299));return f(y,p,null,v)},st.flushSync=function(y){var p=d.T,v=s.p;try{if(d.T=null,s.p=2,y)return y()}finally{d.T=p,s.p=v,s.d.f()}},st.preconnect=function(y,p){typeof y=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,s.d.C(y,p))},st.prefetchDNS=function(y){typeof y=="string"&&s.d.D(y)},st.preinit=function(y,p){if(typeof y=="string"&&p&&typeof p.as=="string"){var v=p.as,x=m(v,p.crossOrigin),T=typeof p.integrity=="string"?p.integrity:void 0,D=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;v==="style"?s.d.S(y,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:x,integrity:T,fetchPriority:D}):v==="script"&&s.d.X(y,{crossOrigin:x,integrity:T,fetchPriority:D,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},st.preinitModule=function(y,p){if(typeof y=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var v=m(p.as,p.crossOrigin);s.d.M(y,{crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&s.d.M(y)},st.preload=function(y,p){if(typeof y=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var v=p.as,x=m(v,p.crossOrigin);s.d.L(y,v,{crossOrigin:x,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},st.preloadModule=function(y,p){if(typeof y=="string")if(p){var v=m(p.as,p.crossOrigin);s.d.m(y,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else s.d.m(y)},st.requestFormReset=function(y){s.d.r(y)},st.unstable_batchedUpdates=function(y,p){return y(p)},st.useFormState=function(y,p,v){return d.H.useFormState(y,p,v)},st.useFormStatus=function(){return d.H.useHostTransitionStatus()},st.version="19.1.1",st}var B0;function lb(){if(B0)return xc.exports;B0=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(l){console.error(l)}}return n(),xc.exports=ib(),xc.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var L0;function rb(){if(L0)return Bl;L0=1;var n=ab(),l=cf(),r=lb();function s(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)t+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function c(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function f(e){var t=e,a=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(a=t.return),e=t.return;while(e)}return t.tag===3?a:null}function d(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function m(e){if(f(e)!==e)throw Error(s(188))}function y(e){var t=e.alternate;if(!t){if(t=f(e),t===null)throw Error(s(188));return t!==e?null:e}for(var a=e,i=t;;){var u=a.return;if(u===null)break;var o=u.alternate;if(o===null){if(i=u.return,i!==null){a=i;continue}break}if(u.child===o.child){for(o=u.child;o;){if(o===a)return m(u),e;if(o===i)return m(u),t;o=o.sibling}throw Error(s(188))}if(a.return!==i.return)a=u,i=o;else{for(var h=!1,b=u.child;b;){if(b===a){h=!0,a=u,i=o;break}if(b===i){h=!0,i=u,a=o;break}b=b.sibling}if(!h){for(b=o.child;b;){if(b===a){h=!0,a=o,i=u;break}if(b===i){h=!0,i=o,a=u;break}b=b.sibling}if(!h)throw Error(s(189))}}if(a.alternate!==i)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?e:t}function p(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=p(e),t!==null)return t;e=e.sibling}return null}var v=Object.assign,x=Symbol.for("react.element"),T=Symbol.for("react.transitional.element"),D=Symbol.for("react.portal"),R=Symbol.for("react.fragment"),z=Symbol.for("react.strict_mode"),C=Symbol.for("react.profiler"),k=Symbol.for("react.provider"),L=Symbol.for("react.consumer"),$=Symbol.for("react.context"),J=Symbol.for("react.forward_ref"),X=Symbol.for("react.suspense"),P=Symbol.for("react.suspense_list"),K=Symbol.for("react.memo"),ue=Symbol.for("react.lazy"),me=Symbol.for("react.activity"),se=Symbol.for("react.memo_cache_sentinel"),oe=Symbol.iterator;function ze(e){return e===null||typeof e!="object"?null:(e=oe&&e[oe]||e["@@iterator"],typeof e=="function"?e:null)}var zt=Symbol.for("react.client.reference");function un(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===zt?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case R:return"Fragment";case C:return"Profiler";case z:return"StrictMode";case X:return"Suspense";case P:return"SuspenseList";case me:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case D:return"Portal";case $:return(e.displayName||"Context")+".Provider";case L:return(e._context.displayName||"Context")+".Consumer";case J:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case K:return t=e.displayName||null,t!==null?t:un(e.type)||"Memo";case ue:t=e._payload,e=e._init;try{return un(e(t))}catch{}}return null}var Ze=Array.isArray,q=l.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Z=r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ne={pending:!1,data:null,method:null,action:null},ge=[],E=-1;function G(e){return{current:e}}function V(e){0>E||(e.current=ge[E],ge[E]=null,E--)}function F(e,t){E++,ge[E]=e.current,e.current=t}var te=G(null),ye=G(null),ie=G(null),Fe=G(null);function Ee(e,t){switch(F(ie,t),F(ye,e),F(te,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?a0(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=a0(t),e=i0(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}V(te),F(te,e)}function it(){V(te),V(ye),V(ie)}function na(e){e.memoizedState!==null&&F(Fe,e);var t=te.current,a=i0(t,e.type);t!==a&&(F(ye,e),F(te,a))}function on(e){ye.current===e&&(V(te),V(ye)),Fe.current===e&&(V(Fe),zl._currentValue=ne)}var Dt=Object.prototype.hasOwnProperty,tu=n.unstable_scheduleCallback,nu=n.unstable_cancelCallback,zy=n.unstable_shouldYield,Dy=n.unstable_requestPaint,Wt=n.unstable_now,My=n.unstable_getCurrentPriorityLevel,Lf=n.unstable_ImmediatePriority,qf=n.unstable_UserBlockingPriority,Il=n.unstable_NormalPriority,_y=n.unstable_LowPriority,Hf=n.unstable_IdlePriority,Uy=n.log,Ny=n.unstable_setDisableYieldValue,qi=null,bt=null;function jn(e){if(typeof Uy=="function"&&Ny(e),bt&&typeof bt.setStrictMode=="function")try{bt.setStrictMode(qi,e)}catch{}}var xt=Math.clz32?Math.clz32:qy,By=Math.log,Ly=Math.LN2;function qy(e){return e>>>=0,e===0?32:31-(By(e)/Ly|0)|0}var er=256,tr=4194304;function aa(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function nr(e,t,a){var i=e.pendingLanes;if(i===0)return 0;var u=0,o=e.suspendedLanes,h=e.pingedLanes;e=e.warmLanes;var b=i&134217727;return b!==0?(i=b&~o,i!==0?u=aa(i):(h&=b,h!==0?u=aa(h):a||(a=b&~e,a!==0&&(u=aa(a))))):(b=i&~o,b!==0?u=aa(b):h!==0?u=aa(h):a||(a=i&~e,a!==0&&(u=aa(a)))),u===0?0:t!==0&&t!==u&&(t&o)===0&&(o=u&-u,a=t&-t,o>=a||o===32&&(a&4194048)!==0)?t:u}function Hi(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function Hy(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function kf(){var e=er;return er<<=1,(er&4194048)===0&&(er=256),e}function Yf(){var e=tr;return tr<<=1,(tr&62914560)===0&&(tr=4194304),e}function au(e){for(var t=[],a=0;31>a;a++)t.push(e);return t}function ki(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function ky(e,t,a,i,u,o){var h=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var b=e.entanglements,S=e.expirationTimes,_=e.hiddenUpdates;for(a=h&~a;0<a;){var H=31-xt(a),Q=1<<H;b[H]=0,S[H]=-1;var U=_[H];if(U!==null)for(_[H]=null,H=0;H<U.length;H++){var N=U[H];N!==null&&(N.lane&=-536870913)}a&=~Q}i!==0&&Qf(e,i,0),o!==0&&u===0&&e.tag!==0&&(e.suspendedLanes|=o&~(h&~t))}function Qf(e,t,a){e.pendingLanes|=t,e.suspendedLanes&=~t;var i=31-xt(t);e.entangledLanes|=t,e.entanglements[i]=e.entanglements[i]|1073741824|a&4194090}function Gf(e,t){var a=e.entangledLanes|=t;for(e=e.entanglements;a;){var i=31-xt(a),u=1<<i;u&t|e[i]&t&&(e[i]|=t),a&=~u}}function iu(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function lu(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function $f(){var e=Z.p;return e!==0?e:(e=window.event,e===void 0?32:E0(e.type))}function Yy(e,t){var a=Z.p;try{return Z.p=e,t()}finally{Z.p=a}}var zn=Math.random().toString(36).slice(2),lt="__reactFiber$"+zn,dt="__reactProps$"+zn,Da="__reactContainer$"+zn,ru="__reactEvents$"+zn,Qy="__reactListeners$"+zn,Gy="__reactHandles$"+zn,Xf="__reactResources$"+zn,Yi="__reactMarker$"+zn;function su(e){delete e[lt],delete e[dt],delete e[ru],delete e[Qy],delete e[Gy]}function Ma(e){var t=e[lt];if(t)return t;for(var a=e.parentNode;a;){if(t=a[Da]||a[lt]){if(a=t.alternate,t.child!==null||a!==null&&a.child!==null)for(e=u0(e);e!==null;){if(a=e[lt])return a;e=u0(e)}return t}e=a,a=e.parentNode}return null}function _a(e){if(e=e[lt]||e[Da]){var t=e.tag;if(t===5||t===6||t===13||t===26||t===27||t===3)return e}return null}function Qi(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(s(33))}function Ua(e){var t=e[Xf];return t||(t=e[Xf]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Je(e){e[Yi]=!0}var Kf=new Set,Vf={};function ia(e,t){Na(e,t),Na(e+"Capture",t)}function Na(e,t){for(Vf[e]=t,e=0;e<t.length;e++)Kf.add(t[e])}var $y=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Zf={},Ff={};function Xy(e){return Dt.call(Ff,e)?!0:Dt.call(Zf,e)?!1:$y.test(e)?Ff[e]=!0:(Zf[e]=!0,!1)}function ar(e,t,a){if(Xy(t))if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var i=t.toLowerCase().slice(0,5);if(i!=="data-"&&i!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+a)}}function ir(e,t,a){if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+a)}}function cn(e,t,a,i){if(i===null)e.removeAttribute(a);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(t,a,""+i)}}var uu,Jf;function Ba(e){if(uu===void 0)try{throw Error()}catch(a){var t=a.stack.trim().match(/\n( *(at )?)/);uu=t&&t[1]||"",Jf=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+uu+e+Jf}var ou=!1;function cu(e,t){if(!e||ou)return"";ou=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var i={DetermineComponentFrameRoot:function(){try{if(t){var Q=function(){throw Error()};if(Object.defineProperty(Q.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Q,[])}catch(N){var U=N}Reflect.construct(e,[],Q)}else{try{Q.call()}catch(N){U=N}e.call(Q.prototype)}}else{try{throw Error()}catch(N){U=N}(Q=e())&&typeof Q.catch=="function"&&Q.catch(function(){})}}catch(N){if(N&&U&&typeof N.stack=="string")return[N.stack,U.stack]}return[null,null]}};i.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(i.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(i.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var o=i.DetermineComponentFrameRoot(),h=o[0],b=o[1];if(h&&b){var S=h.split(`
`),_=b.split(`
`);for(u=i=0;i<S.length&&!S[i].includes("DetermineComponentFrameRoot");)i++;for(;u<_.length&&!_[u].includes("DetermineComponentFrameRoot");)u++;if(i===S.length||u===_.length)for(i=S.length-1,u=_.length-1;1<=i&&0<=u&&S[i]!==_[u];)u--;for(;1<=i&&0<=u;i--,u--)if(S[i]!==_[u]){if(i!==1||u!==1)do if(i--,u--,0>u||S[i]!==_[u]){var H=`
`+S[i].replace(" at new "," at ");return e.displayName&&H.includes("<anonymous>")&&(H=H.replace("<anonymous>",e.displayName)),H}while(1<=i&&0<=u);break}}}finally{ou=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?Ba(a):""}function Ky(e){switch(e.tag){case 26:case 27:case 5:return Ba(e.type);case 16:return Ba("Lazy");case 13:return Ba("Suspense");case 19:return Ba("SuspenseList");case 0:case 15:return cu(e.type,!1);case 11:return cu(e.type.render,!1);case 1:return cu(e.type,!0);case 31:return Ba("Activity");default:return""}}function Pf(e){try{var t="";do t+=Ky(e),e=e.return;while(e);return t}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function Mt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Wf(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Vy(e){var t=Wf(e)?"checked":"value",a=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),i=""+e[t];if(!e.hasOwnProperty(t)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var u=a.get,o=a.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return u.call(this)},set:function(h){i=""+h,o.call(this,h)}}),Object.defineProperty(e,t,{enumerable:a.enumerable}),{getValue:function(){return i},setValue:function(h){i=""+h},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function lr(e){e._valueTracker||(e._valueTracker=Vy(e))}function If(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var a=t.getValue(),i="";return e&&(i=Wf(e)?e.checked?"true":"false":e.value),e=i,e!==a?(t.setValue(e),!0):!1}function rr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Zy=/[\n"\\]/g;function _t(e){return e.replace(Zy,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function fu(e,t,a,i,u,o,h,b){e.name="",h!=null&&typeof h!="function"&&typeof h!="symbol"&&typeof h!="boolean"?e.type=h:e.removeAttribute("type"),t!=null?h==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+Mt(t)):e.value!==""+Mt(t)&&(e.value=""+Mt(t)):h!=="submit"&&h!=="reset"||e.removeAttribute("value"),t!=null?du(e,h,Mt(t)):a!=null?du(e,h,Mt(a)):i!=null&&e.removeAttribute("value"),u==null&&o!=null&&(e.defaultChecked=!!o),u!=null&&(e.checked=u&&typeof u!="function"&&typeof u!="symbol"),b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"?e.name=""+Mt(b):e.removeAttribute("name")}function ed(e,t,a,i,u,o,h,b){if(o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"&&(e.type=o),t!=null||a!=null){if(!(o!=="submit"&&o!=="reset"||t!=null))return;a=a!=null?""+Mt(a):"",t=t!=null?""+Mt(t):a,b||t===e.value||(e.value=t),e.defaultValue=t}i=i??u,i=typeof i!="function"&&typeof i!="symbol"&&!!i,e.checked=b?e.checked:!!i,e.defaultChecked=!!i,h!=null&&typeof h!="function"&&typeof h!="symbol"&&typeof h!="boolean"&&(e.name=h)}function du(e,t,a){t==="number"&&rr(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function La(e,t,a,i){if(e=e.options,t){t={};for(var u=0;u<a.length;u++)t["$"+a[u]]=!0;for(a=0;a<e.length;a++)u=t.hasOwnProperty("$"+e[a].value),e[a].selected!==u&&(e[a].selected=u),u&&i&&(e[a].defaultSelected=!0)}else{for(a=""+Mt(a),t=null,u=0;u<e.length;u++){if(e[u].value===a){e[u].selected=!0,i&&(e[u].defaultSelected=!0);return}t!==null||e[u].disabled||(t=e[u])}t!==null&&(t.selected=!0)}}function td(e,t,a){if(t!=null&&(t=""+Mt(t),t!==e.value&&(e.value=t),a==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=a!=null?""+Mt(a):""}function nd(e,t,a,i){if(t==null){if(i!=null){if(a!=null)throw Error(s(92));if(Ze(i)){if(1<i.length)throw Error(s(93));i=i[0]}a=i}a==null&&(a=""),t=a}a=Mt(t),e.defaultValue=a,i=e.textContent,i===a&&i!==""&&i!==null&&(e.value=i)}function qa(e,t){if(t){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=t;return}}e.textContent=t}var Fy=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function ad(e,t,a){var i=t.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?i?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":i?e.setProperty(t,a):typeof a!="number"||a===0||Fy.has(t)?t==="float"?e.cssFloat=a:e[t]=(""+a).trim():e[t]=a+"px"}function id(e,t,a){if(t!=null&&typeof t!="object")throw Error(s(62));if(e=e.style,a!=null){for(var i in a)!a.hasOwnProperty(i)||t!=null&&t.hasOwnProperty(i)||(i.indexOf("--")===0?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="");for(var u in t)i=t[u],t.hasOwnProperty(u)&&a[u]!==i&&ad(e,u,i)}else for(var o in t)t.hasOwnProperty(o)&&ad(e,o,t[o])}function hu(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Jy=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Py=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function sr(e){return Py.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var pu=null;function mu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ha=null,ka=null;function ld(e){var t=_a(e);if(t&&(e=t.stateNode)){var a=e[dt]||null;e:switch(e=t.stateNode,t.type){case"input":if(fu(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),t=a.name,a.type==="radio"&&t!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+_t(""+t)+'"][type="radio"]'),t=0;t<a.length;t++){var i=a[t];if(i!==e&&i.form===e.form){var u=i[dt]||null;if(!u)throw Error(s(90));fu(i,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(t=0;t<a.length;t++)i=a[t],i.form===e.form&&If(i)}break e;case"textarea":td(e,a.value,a.defaultValue);break e;case"select":t=a.value,t!=null&&La(e,!!a.multiple,t,!1)}}}var gu=!1;function rd(e,t,a){if(gu)return e(t,a);gu=!0;try{var i=e(t);return i}finally{if(gu=!1,(Ha!==null||ka!==null)&&(Kr(),Ha&&(t=Ha,e=ka,ka=Ha=null,ld(t),e)))for(t=0;t<e.length;t++)ld(e[t])}}function Gi(e,t){var a=e.stateNode;if(a===null)return null;var i=a[dt]||null;if(i===null)return null;a=i[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(e=e.type,i=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!i;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(s(231,t,typeof a));return a}var fn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),yu=!1;if(fn)try{var $i={};Object.defineProperty($i,"passive",{get:function(){yu=!0}}),window.addEventListener("test",$i,$i),window.removeEventListener("test",$i,$i)}catch{yu=!1}var Dn=null,vu=null,ur=null;function sd(){if(ur)return ur;var e,t=vu,a=t.length,i,u="value"in Dn?Dn.value:Dn.textContent,o=u.length;for(e=0;e<a&&t[e]===u[e];e++);var h=a-e;for(i=1;i<=h&&t[a-i]===u[o-i];i++);return ur=u.slice(e,1<i?1-i:void 0)}function or(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function cr(){return!0}function ud(){return!1}function ht(e){function t(a,i,u,o,h){this._reactName=a,this._targetInst=u,this.type=i,this.nativeEvent=o,this.target=h,this.currentTarget=null;for(var b in e)e.hasOwnProperty(b)&&(a=e[b],this[b]=a?a(o):o[b]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?cr:ud,this.isPropagationStopped=ud,this}return v(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=cr)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=cr)},persist:function(){},isPersistent:cr}),t}var la={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},fr=ht(la),Xi=v({},la,{view:0,detail:0}),Wy=ht(Xi),bu,xu,Ki,dr=v({},Xi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:wu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ki&&(Ki&&e.type==="mousemove"?(bu=e.screenX-Ki.screenX,xu=e.screenY-Ki.screenY):xu=bu=0,Ki=e),bu)},movementY:function(e){return"movementY"in e?e.movementY:xu}}),od=ht(dr),Iy=v({},dr,{dataTransfer:0}),ev=ht(Iy),tv=v({},Xi,{relatedTarget:0}),Su=ht(tv),nv=v({},la,{animationName:0,elapsedTime:0,pseudoElement:0}),av=ht(nv),iv=v({},la,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),lv=ht(iv),rv=v({},la,{data:0}),cd=ht(rv),sv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},uv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ov={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function cv(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=ov[e])?!!t[e]:!1}function wu(){return cv}var fv=v({},Xi,{key:function(e){if(e.key){var t=sv[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=or(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?uv[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:wu,charCode:function(e){return e.type==="keypress"?or(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?or(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),dv=ht(fv),hv=v({},dr,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),fd=ht(hv),pv=v({},Xi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:wu}),mv=ht(pv),gv=v({},la,{propertyName:0,elapsedTime:0,pseudoElement:0}),yv=ht(gv),vv=v({},dr,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),bv=ht(vv),xv=v({},la,{newState:0,oldState:0}),Sv=ht(xv),wv=[9,13,27,32],Eu=fn&&"CompositionEvent"in window,Vi=null;fn&&"documentMode"in document&&(Vi=document.documentMode);var Ev=fn&&"TextEvent"in window&&!Vi,dd=fn&&(!Eu||Vi&&8<Vi&&11>=Vi),hd=" ",pd=!1;function md(e,t){switch(e){case"keyup":return wv.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function gd(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ya=!1;function Rv(e,t){switch(e){case"compositionend":return gd(t);case"keypress":return t.which!==32?null:(pd=!0,hd);case"textInput":return e=t.data,e===hd&&pd?null:e;default:return null}}function Tv(e,t){if(Ya)return e==="compositionend"||!Eu&&md(e,t)?(e=sd(),ur=vu=Dn=null,Ya=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return dd&&t.locale!=="ko"?null:t.data;default:return null}}var Ov={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function yd(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Ov[e.type]:t==="textarea"}function vd(e,t,a,i){Ha?ka?ka.push(i):ka=[i]:Ha=i,t=Wr(t,"onChange"),0<t.length&&(a=new fr("onChange","change",null,a,i),e.push({event:a,listeners:t}))}var Zi=null,Fi=null;function Av(e){Wp(e,0)}function hr(e){var t=Qi(e);if(If(t))return e}function bd(e,t){if(e==="change")return t}var xd=!1;if(fn){var Ru;if(fn){var Tu="oninput"in document;if(!Tu){var Sd=document.createElement("div");Sd.setAttribute("oninput","return;"),Tu=typeof Sd.oninput=="function"}Ru=Tu}else Ru=!1;xd=Ru&&(!document.documentMode||9<document.documentMode)}function wd(){Zi&&(Zi.detachEvent("onpropertychange",Ed),Fi=Zi=null)}function Ed(e){if(e.propertyName==="value"&&hr(Fi)){var t=[];vd(t,Fi,e,mu(e)),rd(Av,t)}}function Cv(e,t,a){e==="focusin"?(wd(),Zi=t,Fi=a,Zi.attachEvent("onpropertychange",Ed)):e==="focusout"&&wd()}function jv(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return hr(Fi)}function zv(e,t){if(e==="click")return hr(t)}function Dv(e,t){if(e==="input"||e==="change")return hr(t)}function Mv(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var St=typeof Object.is=="function"?Object.is:Mv;function Ji(e,t){if(St(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var a=Object.keys(e),i=Object.keys(t);if(a.length!==i.length)return!1;for(i=0;i<a.length;i++){var u=a[i];if(!Dt.call(t,u)||!St(e[u],t[u]))return!1}return!0}function Rd(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Td(e,t){var a=Rd(e);e=0;for(var i;a;){if(a.nodeType===3){if(i=e+a.textContent.length,e<=t&&i>=t)return{node:a,offset:t-e};e=i}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Rd(a)}}function Od(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Od(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Ad(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=rr(e.document);t instanceof e.HTMLIFrameElement;){try{var a=typeof t.contentWindow.location.href=="string"}catch{a=!1}if(a)e=t.contentWindow;else break;t=rr(e.document)}return t}function Ou(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var _v=fn&&"documentMode"in document&&11>=document.documentMode,Qa=null,Au=null,Pi=null,Cu=!1;function Cd(e,t,a){var i=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Cu||Qa==null||Qa!==rr(i)||(i=Qa,"selectionStart"in i&&Ou(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Pi&&Ji(Pi,i)||(Pi=i,i=Wr(Au,"onSelect"),0<i.length&&(t=new fr("onSelect","select",null,t,a),e.push({event:t,listeners:i}),t.target=Qa)))}function ra(e,t){var a={};return a[e.toLowerCase()]=t.toLowerCase(),a["Webkit"+e]="webkit"+t,a["Moz"+e]="moz"+t,a}var Ga={animationend:ra("Animation","AnimationEnd"),animationiteration:ra("Animation","AnimationIteration"),animationstart:ra("Animation","AnimationStart"),transitionrun:ra("Transition","TransitionRun"),transitionstart:ra("Transition","TransitionStart"),transitioncancel:ra("Transition","TransitionCancel"),transitionend:ra("Transition","TransitionEnd")},ju={},jd={};fn&&(jd=document.createElement("div").style,"AnimationEvent"in window||(delete Ga.animationend.animation,delete Ga.animationiteration.animation,delete Ga.animationstart.animation),"TransitionEvent"in window||delete Ga.transitionend.transition);function sa(e){if(ju[e])return ju[e];if(!Ga[e])return e;var t=Ga[e],a;for(a in t)if(t.hasOwnProperty(a)&&a in jd)return ju[e]=t[a];return e}var zd=sa("animationend"),Dd=sa("animationiteration"),Md=sa("animationstart"),Uv=sa("transitionrun"),Nv=sa("transitionstart"),Bv=sa("transitioncancel"),_d=sa("transitionend"),Ud=new Map,zu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");zu.push("scrollEnd");function $t(e,t){Ud.set(e,t),ia(t,[e])}var Nd=new WeakMap;function Ut(e,t){if(typeof e=="object"&&e!==null){var a=Nd.get(e);return a!==void 0?a:(t={value:e,source:t,stack:Pf(t)},Nd.set(e,t),t)}return{value:e,source:t,stack:Pf(t)}}var Nt=[],$a=0,Du=0;function pr(){for(var e=$a,t=Du=$a=0;t<e;){var a=Nt[t];Nt[t++]=null;var i=Nt[t];Nt[t++]=null;var u=Nt[t];Nt[t++]=null;var o=Nt[t];if(Nt[t++]=null,i!==null&&u!==null){var h=i.pending;h===null?u.next=u:(u.next=h.next,h.next=u),i.pending=u}o!==0&&Bd(a,u,o)}}function mr(e,t,a,i){Nt[$a++]=e,Nt[$a++]=t,Nt[$a++]=a,Nt[$a++]=i,Du|=i,e.lanes|=i,e=e.alternate,e!==null&&(e.lanes|=i)}function Mu(e,t,a,i){return mr(e,t,a,i),gr(e)}function Xa(e,t){return mr(e,null,null,t),gr(e)}function Bd(e,t,a){e.lanes|=a;var i=e.alternate;i!==null&&(i.lanes|=a);for(var u=!1,o=e.return;o!==null;)o.childLanes|=a,i=o.alternate,i!==null&&(i.childLanes|=a),o.tag===22&&(e=o.stateNode,e===null||e._visibility&1||(u=!0)),e=o,o=o.return;return e.tag===3?(o=e.stateNode,u&&t!==null&&(u=31-xt(a),e=o.hiddenUpdates,i=e[u],i===null?e[u]=[t]:i.push(t),t.lane=a|536870912),o):null}function gr(e){if(50<wl)throw wl=0,Ho=null,Error(s(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var Ka={};function Lv(e,t,a,i){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function wt(e,t,a,i){return new Lv(e,t,a,i)}function _u(e){return e=e.prototype,!(!e||!e.isReactComponent)}function dn(e,t){var a=e.alternate;return a===null?(a=wt(e.tag,t,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=t,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,t=e.dependencies,a.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function Ld(e,t){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,t=a.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function yr(e,t,a,i,u,o){var h=0;if(i=e,typeof e=="function")_u(e)&&(h=1);else if(typeof e=="string")h=H1(e,a,te.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case me:return e=wt(31,a,t,u),e.elementType=me,e.lanes=o,e;case R:return ua(a.children,u,o,t);case z:h=8,u|=24;break;case C:return e=wt(12,a,t,u|2),e.elementType=C,e.lanes=o,e;case X:return e=wt(13,a,t,u),e.elementType=X,e.lanes=o,e;case P:return e=wt(19,a,t,u),e.elementType=P,e.lanes=o,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case k:case $:h=10;break e;case L:h=9;break e;case J:h=11;break e;case K:h=14;break e;case ue:h=16,i=null;break e}h=29,a=Error(s(130,e===null?"null":typeof e,"")),i=null}return t=wt(h,a,t,u),t.elementType=e,t.type=i,t.lanes=o,t}function ua(e,t,a,i){return e=wt(7,e,i,t),e.lanes=a,e}function Uu(e,t,a){return e=wt(6,e,null,t),e.lanes=a,e}function Nu(e,t,a){return t=wt(4,e.children!==null?e.children:[],e.key,t),t.lanes=a,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Va=[],Za=0,vr=null,br=0,Bt=[],Lt=0,oa=null,hn=1,pn="";function ca(e,t){Va[Za++]=br,Va[Za++]=vr,vr=e,br=t}function qd(e,t,a){Bt[Lt++]=hn,Bt[Lt++]=pn,Bt[Lt++]=oa,oa=e;var i=hn;e=pn;var u=32-xt(i)-1;i&=~(1<<u),a+=1;var o=32-xt(t)+u;if(30<o){var h=u-u%5;o=(i&(1<<h)-1).toString(32),i>>=h,u-=h,hn=1<<32-xt(t)+u|a<<u|i,pn=o+e}else hn=1<<o|a<<u|i,pn=e}function Bu(e){e.return!==null&&(ca(e,1),qd(e,1,0))}function Lu(e){for(;e===vr;)vr=Va[--Za],Va[Za]=null,br=Va[--Za],Va[Za]=null;for(;e===oa;)oa=Bt[--Lt],Bt[Lt]=null,pn=Bt[--Lt],Bt[Lt]=null,hn=Bt[--Lt],Bt[Lt]=null}var ct=null,qe=null,we=!1,fa=null,It=!1,qu=Error(s(519));function da(e){var t=Error(s(418,""));throw el(Ut(t,e)),qu}function Hd(e){var t=e.stateNode,a=e.type,i=e.memoizedProps;switch(t[lt]=e,t[dt]=i,a){case"dialog":be("cancel",t),be("close",t);break;case"iframe":case"object":case"embed":be("load",t);break;case"video":case"audio":for(a=0;a<Rl.length;a++)be(Rl[a],t);break;case"source":be("error",t);break;case"img":case"image":case"link":be("error",t),be("load",t);break;case"details":be("toggle",t);break;case"input":be("invalid",t),ed(t,i.value,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name,!0),lr(t);break;case"select":be("invalid",t);break;case"textarea":be("invalid",t),nd(t,i.value,i.defaultValue,i.children),lr(t)}a=i.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||t.textContent===""+a||i.suppressHydrationWarning===!0||n0(t.textContent,a)?(i.popover!=null&&(be("beforetoggle",t),be("toggle",t)),i.onScroll!=null&&be("scroll",t),i.onScrollEnd!=null&&be("scrollend",t),i.onClick!=null&&(t.onclick=Ir),t=!0):t=!1,t||da(e)}function kd(e){for(ct=e.return;ct;)switch(ct.tag){case 5:case 13:It=!1;return;case 27:case 3:It=!0;return;default:ct=ct.return}}function Wi(e){if(e!==ct)return!1;if(!we)return kd(e),we=!0,!1;var t=e.tag,a;if((a=t!==3&&t!==27)&&((a=t===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||tc(e.type,e.memoizedProps)),a=!a),a&&qe&&da(e),kd(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8)if(a=e.data,a==="/$"){if(t===0){qe=Kt(e.nextSibling);break e}t--}else a!=="$"&&a!=="$!"&&a!=="$?"||t++;e=e.nextSibling}qe=null}}else t===27?(t=qe,Vn(e.type)?(e=lc,lc=null,qe=e):qe=t):qe=ct?Kt(e.stateNode.nextSibling):null;return!0}function Ii(){qe=ct=null,we=!1}function Yd(){var e=fa;return e!==null&&(gt===null?gt=e:gt.push.apply(gt,e),fa=null),e}function el(e){fa===null?fa=[e]:fa.push(e)}var Hu=G(null),ha=null,mn=null;function Mn(e,t,a){F(Hu,t._currentValue),t._currentValue=a}function gn(e){e._currentValue=Hu.current,V(Hu)}function ku(e,t,a){for(;e!==null;){var i=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,i!==null&&(i.childLanes|=t)):i!==null&&(i.childLanes&t)!==t&&(i.childLanes|=t),e===a)break;e=e.return}}function Yu(e,t,a,i){var u=e.child;for(u!==null&&(u.return=e);u!==null;){var o=u.dependencies;if(o!==null){var h=u.child;o=o.firstContext;e:for(;o!==null;){var b=o;o=u;for(var S=0;S<t.length;S++)if(b.context===t[S]){o.lanes|=a,b=o.alternate,b!==null&&(b.lanes|=a),ku(o.return,a,e),i||(h=null);break e}o=b.next}}else if(u.tag===18){if(h=u.return,h===null)throw Error(s(341));h.lanes|=a,o=h.alternate,o!==null&&(o.lanes|=a),ku(h,a,e),h=null}else h=u.child;if(h!==null)h.return=u;else for(h=u;h!==null;){if(h===e){h=null;break}if(u=h.sibling,u!==null){u.return=h.return,h=u;break}h=h.return}u=h}}function tl(e,t,a,i){e=null;for(var u=t,o=!1;u!==null;){if(!o){if((u.flags&524288)!==0)o=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var h=u.alternate;if(h===null)throw Error(s(387));if(h=h.memoizedProps,h!==null){var b=u.type;St(u.pendingProps.value,h.value)||(e!==null?e.push(b):e=[b])}}else if(u===Fe.current){if(h=u.alternate,h===null)throw Error(s(387));h.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(e!==null?e.push(zl):e=[zl])}u=u.return}e!==null&&Yu(t,e,a,i),t.flags|=262144}function xr(e){for(e=e.firstContext;e!==null;){if(!St(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function pa(e){ha=e,mn=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function rt(e){return Qd(ha,e)}function Sr(e,t){return ha===null&&pa(e),Qd(e,t)}function Qd(e,t){var a=t._currentValue;if(t={context:t,memoizedValue:a,next:null},mn===null){if(e===null)throw Error(s(308));mn=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else mn=mn.next=t;return a}var qv=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(a,i){e.push(i)}};this.abort=function(){t.aborted=!0,e.forEach(function(a){return a()})}},Hv=n.unstable_scheduleCallback,kv=n.unstable_NormalPriority,Xe={$$typeof:$,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Qu(){return{controller:new qv,data:new Map,refCount:0}}function nl(e){e.refCount--,e.refCount===0&&Hv(kv,function(){e.controller.abort()})}var al=null,Gu=0,Fa=0,Ja=null;function Yv(e,t){if(al===null){var a=al=[];Gu=0,Fa=Ko(),Ja={status:"pending",value:void 0,then:function(i){a.push(i)}}}return Gu++,t.then(Gd,Gd),t}function Gd(){if(--Gu===0&&al!==null){Ja!==null&&(Ja.status="fulfilled");var e=al;al=null,Fa=0,Ja=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Qv(e,t){var a=[],i={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return e.then(function(){i.status="fulfilled",i.value=t;for(var u=0;u<a.length;u++)(0,a[u])(t)},function(u){for(i.status="rejected",i.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),i}var $d=q.S;q.S=function(e,t){typeof t=="object"&&t!==null&&typeof t.then=="function"&&Yv(e,t),$d!==null&&$d(e,t)};var ma=G(null);function $u(){var e=ma.current;return e!==null?e:Me.pooledCache}function wr(e,t){t===null?F(ma,ma.current):F(ma,t.pool)}function Xd(){var e=$u();return e===null?null:{parent:Xe._currentValue,pool:e}}var il=Error(s(460)),Kd=Error(s(474)),Er=Error(s(542)),Xu={then:function(){}};function Vd(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Rr(){}function Zd(e,t,a){switch(a=e[a],a===void 0?e.push(t):a!==t&&(t.then(Rr,Rr),t=a),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Jd(e),e;default:if(typeof t.status=="string")t.then(Rr,Rr);else{if(e=Me,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=t,e.status="pending",e.then(function(i){if(t.status==="pending"){var u=t;u.status="fulfilled",u.value=i}},function(i){if(t.status==="pending"){var u=t;u.status="rejected",u.reason=i}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Jd(e),e}throw ll=t,il}}var ll=null;function Fd(){if(ll===null)throw Error(s(459));var e=ll;return ll=null,e}function Jd(e){if(e===il||e===Er)throw Error(s(483))}var _n=!1;function Ku(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Vu(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Un(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Nn(e,t,a){var i=e.updateQueue;if(i===null)return null;if(i=i.shared,(Te&2)!==0){var u=i.pending;return u===null?t.next=t:(t.next=u.next,u.next=t),i.pending=t,t=gr(e),Bd(e,null,a),t}return mr(e,i,t,a),gr(e)}function rl(e,t,a){if(t=t.updateQueue,t!==null&&(t=t.shared,(a&4194048)!==0)){var i=t.lanes;i&=e.pendingLanes,a|=i,t.lanes=a,Gf(e,a)}}function Zu(e,t){var a=e.updateQueue,i=e.alternate;if(i!==null&&(i=i.updateQueue,a===i)){var u=null,o=null;if(a=a.firstBaseUpdate,a!==null){do{var h={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};o===null?u=o=h:o=o.next=h,a=a.next}while(a!==null);o===null?u=o=t:o=o.next=t}else u=o=t;a={baseState:i.baseState,firstBaseUpdate:u,lastBaseUpdate:o,shared:i.shared,callbacks:i.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=t:e.next=t,a.lastBaseUpdate=t}var Fu=!1;function sl(){if(Fu){var e=Ja;if(e!==null)throw e}}function ul(e,t,a,i){Fu=!1;var u=e.updateQueue;_n=!1;var o=u.firstBaseUpdate,h=u.lastBaseUpdate,b=u.shared.pending;if(b!==null){u.shared.pending=null;var S=b,_=S.next;S.next=null,h===null?o=_:h.next=_,h=S;var H=e.alternate;H!==null&&(H=H.updateQueue,b=H.lastBaseUpdate,b!==h&&(b===null?H.firstBaseUpdate=_:b.next=_,H.lastBaseUpdate=S))}if(o!==null){var Q=u.baseState;h=0,H=_=S=null,b=o;do{var U=b.lane&-536870913,N=U!==b.lane;if(N?(xe&U)===U:(i&U)===U){U!==0&&U===Fa&&(Fu=!0),H!==null&&(H=H.next={lane:0,tag:b.tag,payload:b.payload,callback:null,next:null});e:{var re=e,ae=b;U=t;var je=a;switch(ae.tag){case 1:if(re=ae.payload,typeof re=="function"){Q=re.call(je,Q,U);break e}Q=re;break e;case 3:re.flags=re.flags&-65537|128;case 0:if(re=ae.payload,U=typeof re=="function"?re.call(je,Q,U):re,U==null)break e;Q=v({},Q,U);break e;case 2:_n=!0}}U=b.callback,U!==null&&(e.flags|=64,N&&(e.flags|=8192),N=u.callbacks,N===null?u.callbacks=[U]:N.push(U))}else N={lane:U,tag:b.tag,payload:b.payload,callback:b.callback,next:null},H===null?(_=H=N,S=Q):H=H.next=N,h|=U;if(b=b.next,b===null){if(b=u.shared.pending,b===null)break;N=b,b=N.next,N.next=null,u.lastBaseUpdate=N,u.shared.pending=null}}while(!0);H===null&&(S=Q),u.baseState=S,u.firstBaseUpdate=_,u.lastBaseUpdate=H,o===null&&(u.shared.lanes=0),Gn|=h,e.lanes=h,e.memoizedState=Q}}function Pd(e,t){if(typeof e!="function")throw Error(s(191,e));e.call(t)}function Wd(e,t){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)Pd(a[e],t)}var Pa=G(null),Tr=G(0);function Id(e,t){e=En,F(Tr,e),F(Pa,t),En=e|t.baseLanes}function Ju(){F(Tr,En),F(Pa,Pa.current)}function Pu(){En=Tr.current,V(Pa),V(Tr)}var Bn=0,he=null,Ae=null,Qe=null,Or=!1,Wa=!1,ga=!1,Ar=0,ol=0,Ia=null,Gv=0;function ke(){throw Error(s(321))}function Wu(e,t){if(t===null)return!1;for(var a=0;a<t.length&&a<e.length;a++)if(!St(e[a],t[a]))return!1;return!0}function Iu(e,t,a,i,u,o){return Bn=o,he=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,q.H=e===null||e.memoizedState===null?Bh:Lh,ga=!1,o=a(i,u),ga=!1,Wa&&(o=th(t,a,i,u)),eh(e),o}function eh(e){q.H=_r;var t=Ae!==null&&Ae.next!==null;if(Bn=0,Qe=Ae=he=null,Or=!1,ol=0,Ia=null,t)throw Error(s(300));e===null||Pe||(e=e.dependencies,e!==null&&xr(e)&&(Pe=!0))}function th(e,t,a,i){he=e;var u=0;do{if(Wa&&(Ia=null),ol=0,Wa=!1,25<=u)throw Error(s(301));if(u+=1,Qe=Ae=null,e.updateQueue!=null){var o=e.updateQueue;o.lastEffect=null,o.events=null,o.stores=null,o.memoCache!=null&&(o.memoCache.index=0)}q.H=Jv,o=t(a,i)}while(Wa);return o}function $v(){var e=q.H,t=e.useState()[0];return t=typeof t.then=="function"?cl(t):t,e=e.useState()[0],(Ae!==null?Ae.memoizedState:null)!==e&&(he.flags|=1024),t}function eo(){var e=Ar!==0;return Ar=0,e}function to(e,t,a){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a}function no(e){if(Or){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Or=!1}Bn=0,Qe=Ae=he=null,Wa=!1,ol=Ar=0,Ia=null}function pt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Qe===null?he.memoizedState=Qe=e:Qe=Qe.next=e,Qe}function Ge(){if(Ae===null){var e=he.alternate;e=e!==null?e.memoizedState:null}else e=Ae.next;var t=Qe===null?he.memoizedState:Qe.next;if(t!==null)Qe=t,Ae=e;else{if(e===null)throw he.alternate===null?Error(s(467)):Error(s(310));Ae=e,e={memoizedState:Ae.memoizedState,baseState:Ae.baseState,baseQueue:Ae.baseQueue,queue:Ae.queue,next:null},Qe===null?he.memoizedState=Qe=e:Qe=Qe.next=e}return Qe}function ao(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function cl(e){var t=ol;return ol+=1,Ia===null&&(Ia=[]),e=Zd(Ia,e,t),t=he,(Qe===null?t.memoizedState:Qe.next)===null&&(t=t.alternate,q.H=t===null||t.memoizedState===null?Bh:Lh),e}function Cr(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return cl(e);if(e.$$typeof===$)return rt(e)}throw Error(s(438,String(e)))}function io(e){var t=null,a=he.updateQueue;if(a!==null&&(t=a.memoCache),t==null){var i=he.alternate;i!==null&&(i=i.updateQueue,i!==null&&(i=i.memoCache,i!=null&&(t={data:i.data.map(function(u){return u.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),a===null&&(a=ao(),he.updateQueue=a),a.memoCache=t,a=t.data[t.index],a===void 0)for(a=t.data[t.index]=Array(e),i=0;i<e;i++)a[i]=se;return t.index++,a}function yn(e,t){return typeof t=="function"?t(e):t}function jr(e){var t=Ge();return lo(t,Ae,e)}function lo(e,t,a){var i=e.queue;if(i===null)throw Error(s(311));i.lastRenderedReducer=a;var u=e.baseQueue,o=i.pending;if(o!==null){if(u!==null){var h=u.next;u.next=o.next,o.next=h}t.baseQueue=u=o,i.pending=null}if(o=e.baseState,u===null)e.memoizedState=o;else{t=u.next;var b=h=null,S=null,_=t,H=!1;do{var Q=_.lane&-536870913;if(Q!==_.lane?(xe&Q)===Q:(Bn&Q)===Q){var U=_.revertLane;if(U===0)S!==null&&(S=S.next={lane:0,revertLane:0,action:_.action,hasEagerState:_.hasEagerState,eagerState:_.eagerState,next:null}),Q===Fa&&(H=!0);else if((Bn&U)===U){_=_.next,U===Fa&&(H=!0);continue}else Q={lane:0,revertLane:_.revertLane,action:_.action,hasEagerState:_.hasEagerState,eagerState:_.eagerState,next:null},S===null?(b=S=Q,h=o):S=S.next=Q,he.lanes|=U,Gn|=U;Q=_.action,ga&&a(o,Q),o=_.hasEagerState?_.eagerState:a(o,Q)}else U={lane:Q,revertLane:_.revertLane,action:_.action,hasEagerState:_.hasEagerState,eagerState:_.eagerState,next:null},S===null?(b=S=U,h=o):S=S.next=U,he.lanes|=Q,Gn|=Q;_=_.next}while(_!==null&&_!==t);if(S===null?h=o:S.next=b,!St(o,e.memoizedState)&&(Pe=!0,H&&(a=Ja,a!==null)))throw a;e.memoizedState=o,e.baseState=h,e.baseQueue=S,i.lastRenderedState=o}return u===null&&(i.lanes=0),[e.memoizedState,i.dispatch]}function ro(e){var t=Ge(),a=t.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=e;var i=a.dispatch,u=a.pending,o=t.memoizedState;if(u!==null){a.pending=null;var h=u=u.next;do o=e(o,h.action),h=h.next;while(h!==u);St(o,t.memoizedState)||(Pe=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),a.lastRenderedState=o}return[o,i]}function nh(e,t,a){var i=he,u=Ge(),o=we;if(o){if(a===void 0)throw Error(s(407));a=a()}else a=t();var h=!St((Ae||u).memoizedState,a);h&&(u.memoizedState=a,Pe=!0),u=u.queue;var b=lh.bind(null,i,u,e);if(fl(2048,8,b,[e]),u.getSnapshot!==t||h||Qe!==null&&Qe.memoizedState.tag&1){if(i.flags|=2048,ei(9,zr(),ih.bind(null,i,u,a,t),null),Me===null)throw Error(s(349));o||(Bn&124)!==0||ah(i,t,a)}return a}function ah(e,t,a){e.flags|=16384,e={getSnapshot:t,value:a},t=he.updateQueue,t===null?(t=ao(),he.updateQueue=t,t.stores=[e]):(a=t.stores,a===null?t.stores=[e]:a.push(e))}function ih(e,t,a,i){t.value=a,t.getSnapshot=i,rh(t)&&sh(e)}function lh(e,t,a){return a(function(){rh(t)&&sh(e)})}function rh(e){var t=e.getSnapshot;e=e.value;try{var a=t();return!St(e,a)}catch{return!0}}function sh(e){var t=Xa(e,2);t!==null&&At(t,e,2)}function so(e){var t=pt();if(typeof e=="function"){var a=e;if(e=a(),ga){jn(!0);try{a()}finally{jn(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:yn,lastRenderedState:e},t}function uh(e,t,a,i){return e.baseState=a,lo(e,Ae,typeof i=="function"?i:yn)}function Xv(e,t,a,i,u){if(Mr(e))throw Error(s(485));if(e=t.action,e!==null){var o={payload:u,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(h){o.listeners.push(h)}};q.T!==null?a(!0):o.isTransition=!1,i(o),a=t.pending,a===null?(o.next=t.pending=o,oh(t,o)):(o.next=a.next,t.pending=a.next=o)}}function oh(e,t){var a=t.action,i=t.payload,u=e.state;if(t.isTransition){var o=q.T,h={};q.T=h;try{var b=a(u,i),S=q.S;S!==null&&S(h,b),ch(e,t,b)}catch(_){uo(e,t,_)}finally{q.T=o}}else try{o=a(u,i),ch(e,t,o)}catch(_){uo(e,t,_)}}function ch(e,t,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(i){fh(e,t,i)},function(i){return uo(e,t,i)}):fh(e,t,a)}function fh(e,t,a){t.status="fulfilled",t.value=a,dh(t),e.state=a,t=e.pending,t!==null&&(a=t.next,a===t?e.pending=null:(a=a.next,t.next=a,oh(e,a)))}function uo(e,t,a){var i=e.pending;if(e.pending=null,i!==null){i=i.next;do t.status="rejected",t.reason=a,dh(t),t=t.next;while(t!==i)}e.action=null}function dh(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function hh(e,t){return t}function ph(e,t){if(we){var a=Me.formState;if(a!==null){e:{var i=he;if(we){if(qe){t:{for(var u=qe,o=It;u.nodeType!==8;){if(!o){u=null;break t}if(u=Kt(u.nextSibling),u===null){u=null;break t}}o=u.data,u=o==="F!"||o==="F"?u:null}if(u){qe=Kt(u.nextSibling),i=u.data==="F!";break e}}da(i)}i=!1}i&&(t=a[0])}}return a=pt(),a.memoizedState=a.baseState=t,i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:hh,lastRenderedState:t},a.queue=i,a=_h.bind(null,he,i),i.dispatch=a,i=so(!1),o=po.bind(null,he,!1,i.queue),i=pt(),u={state:t,dispatch:null,action:e,pending:null},i.queue=u,a=Xv.bind(null,he,u,o,a),u.dispatch=a,i.memoizedState=e,[t,a,!1]}function mh(e){var t=Ge();return gh(t,Ae,e)}function gh(e,t,a){if(t=lo(e,t,hh)[0],e=jr(yn)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var i=cl(t)}catch(h){throw h===il?Er:h}else i=t;t=Ge();var u=t.queue,o=u.dispatch;return a!==t.memoizedState&&(he.flags|=2048,ei(9,zr(),Kv.bind(null,u,a),null)),[i,o,e]}function Kv(e,t){e.action=t}function yh(e){var t=Ge(),a=Ae;if(a!==null)return gh(t,a,e);Ge(),t=t.memoizedState,a=Ge();var i=a.queue.dispatch;return a.memoizedState=e,[t,i,!1]}function ei(e,t,a,i){return e={tag:e,create:a,deps:i,inst:t,next:null},t=he.updateQueue,t===null&&(t=ao(),he.updateQueue=t),a=t.lastEffect,a===null?t.lastEffect=e.next=e:(i=a.next,a.next=e,e.next=i,t.lastEffect=e),e}function zr(){return{destroy:void 0,resource:void 0}}function vh(){return Ge().memoizedState}function Dr(e,t,a,i){var u=pt();i=i===void 0?null:i,he.flags|=e,u.memoizedState=ei(1|t,zr(),a,i)}function fl(e,t,a,i){var u=Ge();i=i===void 0?null:i;var o=u.memoizedState.inst;Ae!==null&&i!==null&&Wu(i,Ae.memoizedState.deps)?u.memoizedState=ei(t,o,a,i):(he.flags|=e,u.memoizedState=ei(1|t,o,a,i))}function bh(e,t){Dr(8390656,8,e,t)}function xh(e,t){fl(2048,8,e,t)}function Sh(e,t){return fl(4,2,e,t)}function wh(e,t){return fl(4,4,e,t)}function Eh(e,t){if(typeof t=="function"){e=e();var a=t(e);return function(){typeof a=="function"?a():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Rh(e,t,a){a=a!=null?a.concat([e]):null,fl(4,4,Eh.bind(null,t,e),a)}function oo(){}function Th(e,t){var a=Ge();t=t===void 0?null:t;var i=a.memoizedState;return t!==null&&Wu(t,i[1])?i[0]:(a.memoizedState=[e,t],e)}function Oh(e,t){var a=Ge();t=t===void 0?null:t;var i=a.memoizedState;if(t!==null&&Wu(t,i[1]))return i[0];if(i=e(),ga){jn(!0);try{e()}finally{jn(!1)}}return a.memoizedState=[i,t],i}function co(e,t,a){return a===void 0||(Bn&1073741824)!==0?e.memoizedState=t:(e.memoizedState=a,e=jp(),he.lanes|=e,Gn|=e,a)}function Ah(e,t,a,i){return St(a,t)?a:Pa.current!==null?(e=co(e,a,i),St(e,t)||(Pe=!0),e):(Bn&42)===0?(Pe=!0,e.memoizedState=a):(e=jp(),he.lanes|=e,Gn|=e,t)}function Ch(e,t,a,i,u){var o=Z.p;Z.p=o!==0&&8>o?o:8;var h=q.T,b={};q.T=b,po(e,!1,t,a);try{var S=u(),_=q.S;if(_!==null&&_(b,S),S!==null&&typeof S=="object"&&typeof S.then=="function"){var H=Qv(S,i);dl(e,t,H,Ot(e))}else dl(e,t,i,Ot(e))}catch(Q){dl(e,t,{then:function(){},status:"rejected",reason:Q},Ot())}finally{Z.p=o,q.T=h}}function Vv(){}function fo(e,t,a,i){if(e.tag!==5)throw Error(s(476));var u=jh(e).queue;Ch(e,u,t,ne,a===null?Vv:function(){return zh(e),a(i)})}function jh(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:ne,baseState:ne,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:yn,lastRenderedState:ne},next:null};var a={};return t.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:yn,lastRenderedState:a},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function zh(e){var t=jh(e).next.queue;dl(e,t,{},Ot())}function ho(){return rt(zl)}function Dh(){return Ge().memoizedState}function Mh(){return Ge().memoizedState}function Zv(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var a=Ot();e=Un(a);var i=Nn(t,e,a);i!==null&&(At(i,t,a),rl(i,t,a)),t={cache:Qu()},e.payload=t;return}t=t.return}}function Fv(e,t,a){var i=Ot();a={lane:i,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},Mr(e)?Uh(t,a):(a=Mu(e,t,a,i),a!==null&&(At(a,e,i),Nh(a,t,i)))}function _h(e,t,a){var i=Ot();dl(e,t,a,i)}function dl(e,t,a,i){var u={lane:i,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(Mr(e))Uh(t,u);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var h=t.lastRenderedState,b=o(h,a);if(u.hasEagerState=!0,u.eagerState=b,St(b,h))return mr(e,t,u,0),Me===null&&pr(),!1}catch{}finally{}if(a=Mu(e,t,u,i),a!==null)return At(a,e,i),Nh(a,t,i),!0}return!1}function po(e,t,a,i){if(i={lane:2,revertLane:Ko(),action:i,hasEagerState:!1,eagerState:null,next:null},Mr(e)){if(t)throw Error(s(479))}else t=Mu(e,a,i,2),t!==null&&At(t,e,2)}function Mr(e){var t=e.alternate;return e===he||t!==null&&t===he}function Uh(e,t){Wa=Or=!0;var a=e.pending;a===null?t.next=t:(t.next=a.next,a.next=t),e.pending=t}function Nh(e,t,a){if((a&4194048)!==0){var i=t.lanes;i&=e.pendingLanes,a|=i,t.lanes=a,Gf(e,a)}}var _r={readContext:rt,use:Cr,useCallback:ke,useContext:ke,useEffect:ke,useImperativeHandle:ke,useLayoutEffect:ke,useInsertionEffect:ke,useMemo:ke,useReducer:ke,useRef:ke,useState:ke,useDebugValue:ke,useDeferredValue:ke,useTransition:ke,useSyncExternalStore:ke,useId:ke,useHostTransitionStatus:ke,useFormState:ke,useActionState:ke,useOptimistic:ke,useMemoCache:ke,useCacheRefresh:ke},Bh={readContext:rt,use:Cr,useCallback:function(e,t){return pt().memoizedState=[e,t===void 0?null:t],e},useContext:rt,useEffect:bh,useImperativeHandle:function(e,t,a){a=a!=null?a.concat([e]):null,Dr(4194308,4,Eh.bind(null,t,e),a)},useLayoutEffect:function(e,t){return Dr(4194308,4,e,t)},useInsertionEffect:function(e,t){Dr(4,2,e,t)},useMemo:function(e,t){var a=pt();t=t===void 0?null:t;var i=e();if(ga){jn(!0);try{e()}finally{jn(!1)}}return a.memoizedState=[i,t],i},useReducer:function(e,t,a){var i=pt();if(a!==void 0){var u=a(t);if(ga){jn(!0);try{a(t)}finally{jn(!1)}}}else u=t;return i.memoizedState=i.baseState=u,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:u},i.queue=e,e=e.dispatch=Fv.bind(null,he,e),[i.memoizedState,e]},useRef:function(e){var t=pt();return e={current:e},t.memoizedState=e},useState:function(e){e=so(e);var t=e.queue,a=_h.bind(null,he,t);return t.dispatch=a,[e.memoizedState,a]},useDebugValue:oo,useDeferredValue:function(e,t){var a=pt();return co(a,e,t)},useTransition:function(){var e=so(!1);return e=Ch.bind(null,he,e.queue,!0,!1),pt().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,a){var i=he,u=pt();if(we){if(a===void 0)throw Error(s(407));a=a()}else{if(a=t(),Me===null)throw Error(s(349));(xe&124)!==0||ah(i,t,a)}u.memoizedState=a;var o={value:a,getSnapshot:t};return u.queue=o,bh(lh.bind(null,i,o,e),[e]),i.flags|=2048,ei(9,zr(),ih.bind(null,i,o,a,t),null),a},useId:function(){var e=pt(),t=Me.identifierPrefix;if(we){var a=pn,i=hn;a=(i&~(1<<32-xt(i)-1)).toString(32)+a,t="«"+t+"R"+a,a=Ar++,0<a&&(t+="H"+a.toString(32)),t+="»"}else a=Gv++,t="«"+t+"r"+a.toString(32)+"»";return e.memoizedState=t},useHostTransitionStatus:ho,useFormState:ph,useActionState:ph,useOptimistic:function(e){var t=pt();t.memoizedState=t.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=a,t=po.bind(null,he,!0,a),a.dispatch=t,[e,t]},useMemoCache:io,useCacheRefresh:function(){return pt().memoizedState=Zv.bind(null,he)}},Lh={readContext:rt,use:Cr,useCallback:Th,useContext:rt,useEffect:xh,useImperativeHandle:Rh,useInsertionEffect:Sh,useLayoutEffect:wh,useMemo:Oh,useReducer:jr,useRef:vh,useState:function(){return jr(yn)},useDebugValue:oo,useDeferredValue:function(e,t){var a=Ge();return Ah(a,Ae.memoizedState,e,t)},useTransition:function(){var e=jr(yn)[0],t=Ge().memoizedState;return[typeof e=="boolean"?e:cl(e),t]},useSyncExternalStore:nh,useId:Dh,useHostTransitionStatus:ho,useFormState:mh,useActionState:mh,useOptimistic:function(e,t){var a=Ge();return uh(a,Ae,e,t)},useMemoCache:io,useCacheRefresh:Mh},Jv={readContext:rt,use:Cr,useCallback:Th,useContext:rt,useEffect:xh,useImperativeHandle:Rh,useInsertionEffect:Sh,useLayoutEffect:wh,useMemo:Oh,useReducer:ro,useRef:vh,useState:function(){return ro(yn)},useDebugValue:oo,useDeferredValue:function(e,t){var a=Ge();return Ae===null?co(a,e,t):Ah(a,Ae.memoizedState,e,t)},useTransition:function(){var e=ro(yn)[0],t=Ge().memoizedState;return[typeof e=="boolean"?e:cl(e),t]},useSyncExternalStore:nh,useId:Dh,useHostTransitionStatus:ho,useFormState:yh,useActionState:yh,useOptimistic:function(e,t){var a=Ge();return Ae!==null?uh(a,Ae,e,t):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:io,useCacheRefresh:Mh},ti=null,hl=0;function Ur(e){var t=hl;return hl+=1,ti===null&&(ti=[]),Zd(ti,e,t)}function pl(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function Nr(e,t){throw t.$$typeof===x?Error(s(525)):(e=Object.prototype.toString.call(t),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function qh(e){var t=e._init;return t(e._payload)}function Hh(e){function t(j,A){if(e){var M=j.deletions;M===null?(j.deletions=[A],j.flags|=16):M.push(A)}}function a(j,A){if(!e)return null;for(;A!==null;)t(j,A),A=A.sibling;return null}function i(j){for(var A=new Map;j!==null;)j.key!==null?A.set(j.key,j):A.set(j.index,j),j=j.sibling;return A}function u(j,A){return j=dn(j,A),j.index=0,j.sibling=null,j}function o(j,A,M){return j.index=M,e?(M=j.alternate,M!==null?(M=M.index,M<A?(j.flags|=67108866,A):M):(j.flags|=67108866,A)):(j.flags|=1048576,A)}function h(j){return e&&j.alternate===null&&(j.flags|=67108866),j}function b(j,A,M,Y){return A===null||A.tag!==6?(A=Uu(M,j.mode,Y),A.return=j,A):(A=u(A,M),A.return=j,A)}function S(j,A,M,Y){var W=M.type;return W===R?H(j,A,M.props.children,Y,M.key):A!==null&&(A.elementType===W||typeof W=="object"&&W!==null&&W.$$typeof===ue&&qh(W)===A.type)?(A=u(A,M.props),pl(A,M),A.return=j,A):(A=yr(M.type,M.key,M.props,null,j.mode,Y),pl(A,M),A.return=j,A)}function _(j,A,M,Y){return A===null||A.tag!==4||A.stateNode.containerInfo!==M.containerInfo||A.stateNode.implementation!==M.implementation?(A=Nu(M,j.mode,Y),A.return=j,A):(A=u(A,M.children||[]),A.return=j,A)}function H(j,A,M,Y,W){return A===null||A.tag!==7?(A=ua(M,j.mode,Y,W),A.return=j,A):(A=u(A,M),A.return=j,A)}function Q(j,A,M){if(typeof A=="string"&&A!==""||typeof A=="number"||typeof A=="bigint")return A=Uu(""+A,j.mode,M),A.return=j,A;if(typeof A=="object"&&A!==null){switch(A.$$typeof){case T:return M=yr(A.type,A.key,A.props,null,j.mode,M),pl(M,A),M.return=j,M;case D:return A=Nu(A,j.mode,M),A.return=j,A;case ue:var Y=A._init;return A=Y(A._payload),Q(j,A,M)}if(Ze(A)||ze(A))return A=ua(A,j.mode,M,null),A.return=j,A;if(typeof A.then=="function")return Q(j,Ur(A),M);if(A.$$typeof===$)return Q(j,Sr(j,A),M);Nr(j,A)}return null}function U(j,A,M,Y){var W=A!==null?A.key:null;if(typeof M=="string"&&M!==""||typeof M=="number"||typeof M=="bigint")return W!==null?null:b(j,A,""+M,Y);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case T:return M.key===W?S(j,A,M,Y):null;case D:return M.key===W?_(j,A,M,Y):null;case ue:return W=M._init,M=W(M._payload),U(j,A,M,Y)}if(Ze(M)||ze(M))return W!==null?null:H(j,A,M,Y,null);if(typeof M.then=="function")return U(j,A,Ur(M),Y);if(M.$$typeof===$)return U(j,A,Sr(j,M),Y);Nr(j,M)}return null}function N(j,A,M,Y,W){if(typeof Y=="string"&&Y!==""||typeof Y=="number"||typeof Y=="bigint")return j=j.get(M)||null,b(A,j,""+Y,W);if(typeof Y=="object"&&Y!==null){switch(Y.$$typeof){case T:return j=j.get(Y.key===null?M:Y.key)||null,S(A,j,Y,W);case D:return j=j.get(Y.key===null?M:Y.key)||null,_(A,j,Y,W);case ue:var pe=Y._init;return Y=pe(Y._payload),N(j,A,M,Y,W)}if(Ze(Y)||ze(Y))return j=j.get(M)||null,H(A,j,Y,W,null);if(typeof Y.then=="function")return N(j,A,M,Ur(Y),W);if(Y.$$typeof===$)return N(j,A,M,Sr(A,Y),W);Nr(A,Y)}return null}function re(j,A,M,Y){for(var W=null,pe=null,I=A,le=A=0,Ie=null;I!==null&&le<M.length;le++){I.index>le?(Ie=I,I=null):Ie=I.sibling;var Se=U(j,I,M[le],Y);if(Se===null){I===null&&(I=Ie);break}e&&I&&Se.alternate===null&&t(j,I),A=o(Se,A,le),pe===null?W=Se:pe.sibling=Se,pe=Se,I=Ie}if(le===M.length)return a(j,I),we&&ca(j,le),W;if(I===null){for(;le<M.length;le++)I=Q(j,M[le],Y),I!==null&&(A=o(I,A,le),pe===null?W=I:pe.sibling=I,pe=I);return we&&ca(j,le),W}for(I=i(I);le<M.length;le++)Ie=N(I,j,le,M[le],Y),Ie!==null&&(e&&Ie.alternate!==null&&I.delete(Ie.key===null?le:Ie.key),A=o(Ie,A,le),pe===null?W=Ie:pe.sibling=Ie,pe=Ie);return e&&I.forEach(function(Wn){return t(j,Wn)}),we&&ca(j,le),W}function ae(j,A,M,Y){if(M==null)throw Error(s(151));for(var W=null,pe=null,I=A,le=A=0,Ie=null,Se=M.next();I!==null&&!Se.done;le++,Se=M.next()){I.index>le?(Ie=I,I=null):Ie=I.sibling;var Wn=U(j,I,Se.value,Y);if(Wn===null){I===null&&(I=Ie);break}e&&I&&Wn.alternate===null&&t(j,I),A=o(Wn,A,le),pe===null?W=Wn:pe.sibling=Wn,pe=Wn,I=Ie}if(Se.done)return a(j,I),we&&ca(j,le),W;if(I===null){for(;!Se.done;le++,Se=M.next())Se=Q(j,Se.value,Y),Se!==null&&(A=o(Se,A,le),pe===null?W=Se:pe.sibling=Se,pe=Se);return we&&ca(j,le),W}for(I=i(I);!Se.done;le++,Se=M.next())Se=N(I,j,le,Se.value,Y),Se!==null&&(e&&Se.alternate!==null&&I.delete(Se.key===null?le:Se.key),A=o(Se,A,le),pe===null?W=Se:pe.sibling=Se,pe=Se);return e&&I.forEach(function(P1){return t(j,P1)}),we&&ca(j,le),W}function je(j,A,M,Y){if(typeof M=="object"&&M!==null&&M.type===R&&M.key===null&&(M=M.props.children),typeof M=="object"&&M!==null){switch(M.$$typeof){case T:e:{for(var W=M.key;A!==null;){if(A.key===W){if(W=M.type,W===R){if(A.tag===7){a(j,A.sibling),Y=u(A,M.props.children),Y.return=j,j=Y;break e}}else if(A.elementType===W||typeof W=="object"&&W!==null&&W.$$typeof===ue&&qh(W)===A.type){a(j,A.sibling),Y=u(A,M.props),pl(Y,M),Y.return=j,j=Y;break e}a(j,A);break}else t(j,A);A=A.sibling}M.type===R?(Y=ua(M.props.children,j.mode,Y,M.key),Y.return=j,j=Y):(Y=yr(M.type,M.key,M.props,null,j.mode,Y),pl(Y,M),Y.return=j,j=Y)}return h(j);case D:e:{for(W=M.key;A!==null;){if(A.key===W)if(A.tag===4&&A.stateNode.containerInfo===M.containerInfo&&A.stateNode.implementation===M.implementation){a(j,A.sibling),Y=u(A,M.children||[]),Y.return=j,j=Y;break e}else{a(j,A);break}else t(j,A);A=A.sibling}Y=Nu(M,j.mode,Y),Y.return=j,j=Y}return h(j);case ue:return W=M._init,M=W(M._payload),je(j,A,M,Y)}if(Ze(M))return re(j,A,M,Y);if(ze(M)){if(W=ze(M),typeof W!="function")throw Error(s(150));return M=W.call(M),ae(j,A,M,Y)}if(typeof M.then=="function")return je(j,A,Ur(M),Y);if(M.$$typeof===$)return je(j,A,Sr(j,M),Y);Nr(j,M)}return typeof M=="string"&&M!==""||typeof M=="number"||typeof M=="bigint"?(M=""+M,A!==null&&A.tag===6?(a(j,A.sibling),Y=u(A,M),Y.return=j,j=Y):(a(j,A),Y=Uu(M,j.mode,Y),Y.return=j,j=Y),h(j)):a(j,A)}return function(j,A,M,Y){try{hl=0;var W=je(j,A,M,Y);return ti=null,W}catch(I){if(I===il||I===Er)throw I;var pe=wt(29,I,null,j.mode);return pe.lanes=Y,pe.return=j,pe}finally{}}}var ni=Hh(!0),kh=Hh(!1),qt=G(null),en=null;function Ln(e){var t=e.alternate;F(Ke,Ke.current&1),F(qt,e),en===null&&(t===null||Pa.current!==null||t.memoizedState!==null)&&(en=e)}function Yh(e){if(e.tag===22){if(F(Ke,Ke.current),F(qt,e),en===null){var t=e.alternate;t!==null&&t.memoizedState!==null&&(en=e)}}else qn()}function qn(){F(Ke,Ke.current),F(qt,qt.current)}function vn(e){V(qt),en===e&&(en=null),V(Ke)}var Ke=G(0);function Br(e){for(var t=e;t!==null;){if(t.tag===13){var a=t.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||ic(a)))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}function mo(e,t,a,i){t=e.memoizedState,a=a(i,t),a=a==null?t:v({},t,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var go={enqueueSetState:function(e,t,a){e=e._reactInternals;var i=Ot(),u=Un(i);u.payload=t,a!=null&&(u.callback=a),t=Nn(e,u,i),t!==null&&(At(t,e,i),rl(t,e,i))},enqueueReplaceState:function(e,t,a){e=e._reactInternals;var i=Ot(),u=Un(i);u.tag=1,u.payload=t,a!=null&&(u.callback=a),t=Nn(e,u,i),t!==null&&(At(t,e,i),rl(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var a=Ot(),i=Un(a);i.tag=2,t!=null&&(i.callback=t),t=Nn(e,i,a),t!==null&&(At(t,e,a),rl(t,e,a))}};function Qh(e,t,a,i,u,o,h){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(i,o,h):t.prototype&&t.prototype.isPureReactComponent?!Ji(a,i)||!Ji(u,o):!0}function Gh(e,t,a,i){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(a,i),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(a,i),t.state!==e&&go.enqueueReplaceState(t,t.state,null)}function ya(e,t){var a=t;if("ref"in t){a={};for(var i in t)i!=="ref"&&(a[i]=t[i])}if(e=e.defaultProps){a===t&&(a=v({},a));for(var u in e)a[u]===void 0&&(a[u]=e[u])}return a}var Lr=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function $h(e){Lr(e)}function Xh(e){console.error(e)}function Kh(e){Lr(e)}function qr(e,t){try{var a=e.onUncaughtError;a(t.value,{componentStack:t.stack})}catch(i){setTimeout(function(){throw i})}}function Vh(e,t,a){try{var i=e.onCaughtError;i(a.value,{componentStack:a.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function yo(e,t,a){return a=Un(a),a.tag=3,a.payload={element:null},a.callback=function(){qr(e,t)},a}function Zh(e){return e=Un(e),e.tag=3,e}function Fh(e,t,a,i){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var o=i.value;e.payload=function(){return u(o)},e.callback=function(){Vh(t,a,i)}}var h=a.stateNode;h!==null&&typeof h.componentDidCatch=="function"&&(e.callback=function(){Vh(t,a,i),typeof u!="function"&&($n===null?$n=new Set([this]):$n.add(this));var b=i.stack;this.componentDidCatch(i.value,{componentStack:b!==null?b:""})})}function Pv(e,t,a,i,u){if(a.flags|=32768,i!==null&&typeof i=="object"&&typeof i.then=="function"){if(t=a.alternate,t!==null&&tl(t,a,u,!0),a=qt.current,a!==null){switch(a.tag){case 13:return en===null?Yo():a.alternate===null&&He===0&&(He=3),a.flags&=-257,a.flags|=65536,a.lanes=u,i===Xu?a.flags|=16384:(t=a.updateQueue,t===null?a.updateQueue=new Set([i]):t.add(i),Go(e,i,u)),!1;case 22:return a.flags|=65536,i===Xu?a.flags|=16384:(t=a.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([i])},a.updateQueue=t):(a=t.retryQueue,a===null?t.retryQueue=new Set([i]):a.add(i)),Go(e,i,u)),!1}throw Error(s(435,a.tag))}return Go(e,i,u),Yo(),!1}if(we)return t=qt.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=u,i!==qu&&(e=Error(s(422),{cause:i}),el(Ut(e,a)))):(i!==qu&&(t=Error(s(423),{cause:i}),el(Ut(t,a))),e=e.current.alternate,e.flags|=65536,u&=-u,e.lanes|=u,i=Ut(i,a),u=yo(e.stateNode,i,u),Zu(e,u),He!==4&&(He=2)),!1;var o=Error(s(520),{cause:i});if(o=Ut(o,a),Sl===null?Sl=[o]:Sl.push(o),He!==4&&(He=2),t===null)return!0;i=Ut(i,a),a=t;do{switch(a.tag){case 3:return a.flags|=65536,e=u&-u,a.lanes|=e,e=yo(a.stateNode,i,e),Zu(a,e),!1;case 1:if(t=a.type,o=a.stateNode,(a.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||o!==null&&typeof o.componentDidCatch=="function"&&($n===null||!$n.has(o))))return a.flags|=65536,u&=-u,a.lanes|=u,u=Zh(u),Fh(u,e,a,i),Zu(a,u),!1}a=a.return}while(a!==null);return!1}var Jh=Error(s(461)),Pe=!1;function tt(e,t,a,i){t.child=e===null?kh(t,null,a,i):ni(t,e.child,a,i)}function Ph(e,t,a,i,u){a=a.render;var o=t.ref;if("ref"in i){var h={};for(var b in i)b!=="ref"&&(h[b]=i[b])}else h=i;return pa(t),i=Iu(e,t,a,h,o,u),b=eo(),e!==null&&!Pe?(to(e,t,u),bn(e,t,u)):(we&&b&&Bu(t),t.flags|=1,tt(e,t,i,u),t.child)}function Wh(e,t,a,i,u){if(e===null){var o=a.type;return typeof o=="function"&&!_u(o)&&o.defaultProps===void 0&&a.compare===null?(t.tag=15,t.type=o,Ih(e,t,o,i,u)):(e=yr(a.type,null,i,t,t.mode,u),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!To(e,u)){var h=o.memoizedProps;if(a=a.compare,a=a!==null?a:Ji,a(h,i)&&e.ref===t.ref)return bn(e,t,u)}return t.flags|=1,e=dn(o,i),e.ref=t.ref,e.return=t,t.child=e}function Ih(e,t,a,i,u){if(e!==null){var o=e.memoizedProps;if(Ji(o,i)&&e.ref===t.ref)if(Pe=!1,t.pendingProps=i=o,To(e,u))(e.flags&131072)!==0&&(Pe=!0);else return t.lanes=e.lanes,bn(e,t,u)}return vo(e,t,a,i,u)}function ep(e,t,a){var i=t.pendingProps,u=i.children,o=e!==null?e.memoizedState:null;if(i.mode==="hidden"){if((t.flags&128)!==0){if(i=o!==null?o.baseLanes|a:a,e!==null){for(u=t.child=e.child,o=0;u!==null;)o=o|u.lanes|u.childLanes,u=u.sibling;t.childLanes=o&~i}else t.childLanes=0,t.child=null;return tp(e,t,i,a)}if((a&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&wr(t,o!==null?o.cachePool:null),o!==null?Id(t,o):Ju(),Yh(t);else return t.lanes=t.childLanes=536870912,tp(e,t,o!==null?o.baseLanes|a:a,a)}else o!==null?(wr(t,o.cachePool),Id(t,o),qn(),t.memoizedState=null):(e!==null&&wr(t,null),Ju(),qn());return tt(e,t,u,a),t.child}function tp(e,t,a,i){var u=$u();return u=u===null?null:{parent:Xe._currentValue,pool:u},t.memoizedState={baseLanes:a,cachePool:u},e!==null&&wr(t,null),Ju(),Yh(t),e!==null&&tl(e,t,i,!0),null}function Hr(e,t){var a=t.ref;if(a===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(e===null||e.ref!==a)&&(t.flags|=4194816)}}function vo(e,t,a,i,u){return pa(t),a=Iu(e,t,a,i,void 0,u),i=eo(),e!==null&&!Pe?(to(e,t,u),bn(e,t,u)):(we&&i&&Bu(t),t.flags|=1,tt(e,t,a,u),t.child)}function np(e,t,a,i,u,o){return pa(t),t.updateQueue=null,a=th(t,i,a,u),eh(e),i=eo(),e!==null&&!Pe?(to(e,t,o),bn(e,t,o)):(we&&i&&Bu(t),t.flags|=1,tt(e,t,a,o),t.child)}function ap(e,t,a,i,u){if(pa(t),t.stateNode===null){var o=Ka,h=a.contextType;typeof h=="object"&&h!==null&&(o=rt(h)),o=new a(i,o),t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,o.updater=go,t.stateNode=o,o._reactInternals=t,o=t.stateNode,o.props=i,o.state=t.memoizedState,o.refs={},Ku(t),h=a.contextType,o.context=typeof h=="object"&&h!==null?rt(h):Ka,o.state=t.memoizedState,h=a.getDerivedStateFromProps,typeof h=="function"&&(mo(t,a,h,i),o.state=t.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(h=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),h!==o.state&&go.enqueueReplaceState(o,o.state,null),ul(t,i,o,u),sl(),o.state=t.memoizedState),typeof o.componentDidMount=="function"&&(t.flags|=4194308),i=!0}else if(e===null){o=t.stateNode;var b=t.memoizedProps,S=ya(a,b);o.props=S;var _=o.context,H=a.contextType;h=Ka,typeof H=="object"&&H!==null&&(h=rt(H));var Q=a.getDerivedStateFromProps;H=typeof Q=="function"||typeof o.getSnapshotBeforeUpdate=="function",b=t.pendingProps!==b,H||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(b||_!==h)&&Gh(t,o,i,h),_n=!1;var U=t.memoizedState;o.state=U,ul(t,i,o,u),sl(),_=t.memoizedState,b||U!==_||_n?(typeof Q=="function"&&(mo(t,a,Q,i),_=t.memoizedState),(S=_n||Qh(t,a,S,i,U,_,h))?(H||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=i,t.memoizedState=_),o.props=i,o.state=_,o.context=h,i=S):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),i=!1)}else{o=t.stateNode,Vu(e,t),h=t.memoizedProps,H=ya(a,h),o.props=H,Q=t.pendingProps,U=o.context,_=a.contextType,S=Ka,typeof _=="object"&&_!==null&&(S=rt(_)),b=a.getDerivedStateFromProps,(_=typeof b=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(h!==Q||U!==S)&&Gh(t,o,i,S),_n=!1,U=t.memoizedState,o.state=U,ul(t,i,o,u),sl();var N=t.memoizedState;h!==Q||U!==N||_n||e!==null&&e.dependencies!==null&&xr(e.dependencies)?(typeof b=="function"&&(mo(t,a,b,i),N=t.memoizedState),(H=_n||Qh(t,a,H,i,U,N,S)||e!==null&&e.dependencies!==null&&xr(e.dependencies))?(_||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,N,S),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,N,S)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||h===e.memoizedProps&&U===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||h===e.memoizedProps&&U===e.memoizedState||(t.flags|=1024),t.memoizedProps=i,t.memoizedState=N),o.props=i,o.state=N,o.context=S,i=H):(typeof o.componentDidUpdate!="function"||h===e.memoizedProps&&U===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||h===e.memoizedProps&&U===e.memoizedState||(t.flags|=1024),i=!1)}return o=i,Hr(e,t),i=(t.flags&128)!==0,o||i?(o=t.stateNode,a=i&&typeof a.getDerivedStateFromError!="function"?null:o.render(),t.flags|=1,e!==null&&i?(t.child=ni(t,e.child,null,u),t.child=ni(t,null,a,u)):tt(e,t,a,u),t.memoizedState=o.state,e=t.child):e=bn(e,t,u),e}function ip(e,t,a,i){return Ii(),t.flags|=256,tt(e,t,a,i),t.child}var bo={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function xo(e){return{baseLanes:e,cachePool:Xd()}}function So(e,t,a){return e=e!==null?e.childLanes&~a:0,t&&(e|=Ht),e}function lp(e,t,a){var i=t.pendingProps,u=!1,o=(t.flags&128)!==0,h;if((h=o)||(h=e!==null&&e.memoizedState===null?!1:(Ke.current&2)!==0),h&&(u=!0,t.flags&=-129),h=(t.flags&32)!==0,t.flags&=-33,e===null){if(we){if(u?Ln(t):qn(),we){var b=qe,S;if(S=b){e:{for(S=b,b=It;S.nodeType!==8;){if(!b){b=null;break e}if(S=Kt(S.nextSibling),S===null){b=null;break e}}b=S}b!==null?(t.memoizedState={dehydrated:b,treeContext:oa!==null?{id:hn,overflow:pn}:null,retryLane:536870912,hydrationErrors:null},S=wt(18,null,null,0),S.stateNode=b,S.return=t,t.child=S,ct=t,qe=null,S=!0):S=!1}S||da(t)}if(b=t.memoizedState,b!==null&&(b=b.dehydrated,b!==null))return ic(b)?t.lanes=32:t.lanes=536870912,null;vn(t)}return b=i.children,i=i.fallback,u?(qn(),u=t.mode,b=kr({mode:"hidden",children:b},u),i=ua(i,u,a,null),b.return=t,i.return=t,b.sibling=i,t.child=b,u=t.child,u.memoizedState=xo(a),u.childLanes=So(e,h,a),t.memoizedState=bo,i):(Ln(t),wo(t,b))}if(S=e.memoizedState,S!==null&&(b=S.dehydrated,b!==null)){if(o)t.flags&256?(Ln(t),t.flags&=-257,t=Eo(e,t,a)):t.memoizedState!==null?(qn(),t.child=e.child,t.flags|=128,t=null):(qn(),u=i.fallback,b=t.mode,i=kr({mode:"visible",children:i.children},b),u=ua(u,b,a,null),u.flags|=2,i.return=t,u.return=t,i.sibling=u,t.child=i,ni(t,e.child,null,a),i=t.child,i.memoizedState=xo(a),i.childLanes=So(e,h,a),t.memoizedState=bo,t=u);else if(Ln(t),ic(b)){if(h=b.nextSibling&&b.nextSibling.dataset,h)var _=h.dgst;h=_,i=Error(s(419)),i.stack="",i.digest=h,el({value:i,source:null,stack:null}),t=Eo(e,t,a)}else if(Pe||tl(e,t,a,!1),h=(a&e.childLanes)!==0,Pe||h){if(h=Me,h!==null&&(i=a&-a,i=(i&42)!==0?1:iu(i),i=(i&(h.suspendedLanes|a))!==0?0:i,i!==0&&i!==S.retryLane))throw S.retryLane=i,Xa(e,i),At(h,e,i),Jh;b.data==="$?"||Yo(),t=Eo(e,t,a)}else b.data==="$?"?(t.flags|=192,t.child=e.child,t=null):(e=S.treeContext,qe=Kt(b.nextSibling),ct=t,we=!0,fa=null,It=!1,e!==null&&(Bt[Lt++]=hn,Bt[Lt++]=pn,Bt[Lt++]=oa,hn=e.id,pn=e.overflow,oa=t),t=wo(t,i.children),t.flags|=4096);return t}return u?(qn(),u=i.fallback,b=t.mode,S=e.child,_=S.sibling,i=dn(S,{mode:"hidden",children:i.children}),i.subtreeFlags=S.subtreeFlags&65011712,_!==null?u=dn(_,u):(u=ua(u,b,a,null),u.flags|=2),u.return=t,i.return=t,i.sibling=u,t.child=i,i=u,u=t.child,b=e.child.memoizedState,b===null?b=xo(a):(S=b.cachePool,S!==null?(_=Xe._currentValue,S=S.parent!==_?{parent:_,pool:_}:S):S=Xd(),b={baseLanes:b.baseLanes|a,cachePool:S}),u.memoizedState=b,u.childLanes=So(e,h,a),t.memoizedState=bo,i):(Ln(t),a=e.child,e=a.sibling,a=dn(a,{mode:"visible",children:i.children}),a.return=t,a.sibling=null,e!==null&&(h=t.deletions,h===null?(t.deletions=[e],t.flags|=16):h.push(e)),t.child=a,t.memoizedState=null,a)}function wo(e,t){return t=kr({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function kr(e,t){return e=wt(22,e,null,t),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function Eo(e,t,a){return ni(t,e.child,null,a),e=wo(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function rp(e,t,a){e.lanes|=t;var i=e.alternate;i!==null&&(i.lanes|=t),ku(e.return,t,a)}function Ro(e,t,a,i,u){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:i,tail:a,tailMode:u}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=i,o.tail=a,o.tailMode=u)}function sp(e,t,a){var i=t.pendingProps,u=i.revealOrder,o=i.tail;if(tt(e,t,i.children,a),i=Ke.current,(i&2)!==0)i=i&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&rp(e,a,t);else if(e.tag===19)rp(e,a,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}i&=1}switch(F(Ke,i),u){case"forwards":for(a=t.child,u=null;a!==null;)e=a.alternate,e!==null&&Br(e)===null&&(u=a),a=a.sibling;a=u,a===null?(u=t.child,t.child=null):(u=a.sibling,a.sibling=null),Ro(t,!1,u,a,o);break;case"backwards":for(a=null,u=t.child,t.child=null;u!==null;){if(e=u.alternate,e!==null&&Br(e)===null){t.child=u;break}e=u.sibling,u.sibling=a,a=u,u=e}Ro(t,!0,a,null,o);break;case"together":Ro(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function bn(e,t,a){if(e!==null&&(t.dependencies=e.dependencies),Gn|=t.lanes,(a&t.childLanes)===0)if(e!==null){if(tl(e,t,a,!1),(a&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(s(153));if(t.child!==null){for(e=t.child,a=dn(e,e.pendingProps),t.child=a,a.return=t;e.sibling!==null;)e=e.sibling,a=a.sibling=dn(e,e.pendingProps),a.return=t;a.sibling=null}return t.child}function To(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&xr(e)))}function Wv(e,t,a){switch(t.tag){case 3:Ee(t,t.stateNode.containerInfo),Mn(t,Xe,e.memoizedState.cache),Ii();break;case 27:case 5:na(t);break;case 4:Ee(t,t.stateNode.containerInfo);break;case 10:Mn(t,t.type,t.memoizedProps.value);break;case 13:var i=t.memoizedState;if(i!==null)return i.dehydrated!==null?(Ln(t),t.flags|=128,null):(a&t.child.childLanes)!==0?lp(e,t,a):(Ln(t),e=bn(e,t,a),e!==null?e.sibling:null);Ln(t);break;case 19:var u=(e.flags&128)!==0;if(i=(a&t.childLanes)!==0,i||(tl(e,t,a,!1),i=(a&t.childLanes)!==0),u){if(i)return sp(e,t,a);t.flags|=128}if(u=t.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),F(Ke,Ke.current),i)break;return null;case 22:case 23:return t.lanes=0,ep(e,t,a);case 24:Mn(t,Xe,e.memoizedState.cache)}return bn(e,t,a)}function up(e,t,a){if(e!==null)if(e.memoizedProps!==t.pendingProps)Pe=!0;else{if(!To(e,a)&&(t.flags&128)===0)return Pe=!1,Wv(e,t,a);Pe=(e.flags&131072)!==0}else Pe=!1,we&&(t.flags&1048576)!==0&&qd(t,br,t.index);switch(t.lanes=0,t.tag){case 16:e:{e=t.pendingProps;var i=t.elementType,u=i._init;if(i=u(i._payload),t.type=i,typeof i=="function")_u(i)?(e=ya(i,e),t.tag=1,t=ap(null,t,i,e,a)):(t.tag=0,t=vo(null,t,i,e,a));else{if(i!=null){if(u=i.$$typeof,u===J){t.tag=11,t=Ph(null,t,i,e,a);break e}else if(u===K){t.tag=14,t=Wh(null,t,i,e,a);break e}}throw t=un(i)||i,Error(s(306,t,""))}}return t;case 0:return vo(e,t,t.type,t.pendingProps,a);case 1:return i=t.type,u=ya(i,t.pendingProps),ap(e,t,i,u,a);case 3:e:{if(Ee(t,t.stateNode.containerInfo),e===null)throw Error(s(387));i=t.pendingProps;var o=t.memoizedState;u=o.element,Vu(e,t),ul(t,i,null,a);var h=t.memoizedState;if(i=h.cache,Mn(t,Xe,i),i!==o.cache&&Yu(t,[Xe],a,!0),sl(),i=h.element,o.isDehydrated)if(o={element:i,isDehydrated:!1,cache:h.cache},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){t=ip(e,t,i,a);break e}else if(i!==u){u=Ut(Error(s(424)),t),el(u),t=ip(e,t,i,a);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(qe=Kt(e.firstChild),ct=t,we=!0,fa=null,It=!0,a=kh(t,null,i,a),t.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(Ii(),i===u){t=bn(e,t,a);break e}tt(e,t,i,a)}t=t.child}return t;case 26:return Hr(e,t),e===null?(a=d0(t.type,null,t.pendingProps,null))?t.memoizedState=a:we||(a=t.type,e=t.pendingProps,i=es(ie.current).createElement(a),i[lt]=t,i[dt]=e,at(i,a,e),Je(i),t.stateNode=i):t.memoizedState=d0(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return na(t),e===null&&we&&(i=t.stateNode=o0(t.type,t.pendingProps,ie.current),ct=t,It=!0,u=qe,Vn(t.type)?(lc=u,qe=Kt(i.firstChild)):qe=u),tt(e,t,t.pendingProps.children,a),Hr(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&we&&((u=i=qe)&&(i=O1(i,t.type,t.pendingProps,It),i!==null?(t.stateNode=i,ct=t,qe=Kt(i.firstChild),It=!1,u=!0):u=!1),u||da(t)),na(t),u=t.type,o=t.pendingProps,h=e!==null?e.memoizedProps:null,i=o.children,tc(u,o)?i=null:h!==null&&tc(u,h)&&(t.flags|=32),t.memoizedState!==null&&(u=Iu(e,t,$v,null,null,a),zl._currentValue=u),Hr(e,t),tt(e,t,i,a),t.child;case 6:return e===null&&we&&((e=a=qe)&&(a=A1(a,t.pendingProps,It),a!==null?(t.stateNode=a,ct=t,qe=null,e=!0):e=!1),e||da(t)),null;case 13:return lp(e,t,a);case 4:return Ee(t,t.stateNode.containerInfo),i=t.pendingProps,e===null?t.child=ni(t,null,i,a):tt(e,t,i,a),t.child;case 11:return Ph(e,t,t.type,t.pendingProps,a);case 7:return tt(e,t,t.pendingProps,a),t.child;case 8:return tt(e,t,t.pendingProps.children,a),t.child;case 12:return tt(e,t,t.pendingProps.children,a),t.child;case 10:return i=t.pendingProps,Mn(t,t.type,i.value),tt(e,t,i.children,a),t.child;case 9:return u=t.type._context,i=t.pendingProps.children,pa(t),u=rt(u),i=i(u),t.flags|=1,tt(e,t,i,a),t.child;case 14:return Wh(e,t,t.type,t.pendingProps,a);case 15:return Ih(e,t,t.type,t.pendingProps,a);case 19:return sp(e,t,a);case 31:return i=t.pendingProps,a=t.mode,i={mode:i.mode,children:i.children},e===null?(a=kr(i,a),a.ref=t.ref,t.child=a,a.return=t,t=a):(a=dn(e.child,i),a.ref=t.ref,t.child=a,a.return=t,t=a),t;case 22:return ep(e,t,a);case 24:return pa(t),i=rt(Xe),e===null?(u=$u(),u===null&&(u=Me,o=Qu(),u.pooledCache=o,o.refCount++,o!==null&&(u.pooledCacheLanes|=a),u=o),t.memoizedState={parent:i,cache:u},Ku(t),Mn(t,Xe,u)):((e.lanes&a)!==0&&(Vu(e,t),ul(t,null,null,a),sl()),u=e.memoizedState,o=t.memoizedState,u.parent!==i?(u={parent:i,cache:i},t.memoizedState=u,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=u),Mn(t,Xe,i)):(i=o.cache,Mn(t,Xe,i),i!==u.cache&&Yu(t,[Xe],a,!0))),tt(e,t,t.pendingProps.children,a),t.child;case 29:throw t.pendingProps}throw Error(s(156,t.tag))}function xn(e){e.flags|=4}function op(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!y0(t)){if(t=qt.current,t!==null&&((xe&4194048)===xe?en!==null:(xe&62914560)!==xe&&(xe&536870912)===0||t!==en))throw ll=Xu,Kd;e.flags|=8192}}function Yr(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?Yf():536870912,e.lanes|=t,ri|=t)}function ml(e,t){if(!we)switch(e.tailMode){case"hidden":t=e.tail;for(var a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var i=null;a!==null;)a.alternate!==null&&(i=a),a=a.sibling;i===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:i.sibling=null}}function Le(e){var t=e.alternate!==null&&e.alternate.child===e.child,a=0,i=0;if(t)for(var u=e.child;u!==null;)a|=u.lanes|u.childLanes,i|=u.subtreeFlags&65011712,i|=u.flags&65011712,u.return=e,u=u.sibling;else for(u=e.child;u!==null;)a|=u.lanes|u.childLanes,i|=u.subtreeFlags,i|=u.flags,u.return=e,u=u.sibling;return e.subtreeFlags|=i,e.childLanes=a,t}function Iv(e,t,a){var i=t.pendingProps;switch(Lu(t),t.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Le(t),null;case 1:return Le(t),null;case 3:return a=t.stateNode,i=null,e!==null&&(i=e.memoizedState.cache),t.memoizedState.cache!==i&&(t.flags|=2048),gn(Xe),it(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Wi(t)?xn(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Yd())),Le(t),null;case 26:return a=t.memoizedState,e===null?(xn(t),a!==null?(Le(t),op(t,a)):(Le(t),t.flags&=-16777217)):a?a!==e.memoizedState?(xn(t),Le(t),op(t,a)):(Le(t),t.flags&=-16777217):(e.memoizedProps!==i&&xn(t),Le(t),t.flags&=-16777217),null;case 27:on(t),a=ie.current;var u=t.type;if(e!==null&&t.stateNode!=null)e.memoizedProps!==i&&xn(t);else{if(!i){if(t.stateNode===null)throw Error(s(166));return Le(t),null}e=te.current,Wi(t)?Hd(t):(e=o0(u,i,a),t.stateNode=e,xn(t))}return Le(t),null;case 5:if(on(t),a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&xn(t);else{if(!i){if(t.stateNode===null)throw Error(s(166));return Le(t),null}if(e=te.current,Wi(t))Hd(t);else{switch(u=es(ie.current),e){case 1:e=u.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:e=u.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":e=u.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":e=u.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":e=u.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof i.is=="string"?u.createElement("select",{is:i.is}):u.createElement("select"),i.multiple?e.multiple=!0:i.size&&(e.size=i.size);break;default:e=typeof i.is=="string"?u.createElement(a,{is:i.is}):u.createElement(a)}}e[lt]=t,e[dt]=i;e:for(u=t.child;u!==null;){if(u.tag===5||u.tag===6)e.appendChild(u.stateNode);else if(u.tag!==4&&u.tag!==27&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===t)break e;for(;u.sibling===null;){if(u.return===null||u.return===t)break e;u=u.return}u.sibling.return=u.return,u=u.sibling}t.stateNode=e;e:switch(at(e,a,i),a){case"button":case"input":case"select":case"textarea":e=!!i.autoFocus;break e;case"img":e=!0;break e;default:e=!1}e&&xn(t)}}return Le(t),t.flags&=-16777217,null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==i&&xn(t);else{if(typeof i!="string"&&t.stateNode===null)throw Error(s(166));if(e=ie.current,Wi(t)){if(e=t.stateNode,a=t.memoizedProps,i=null,u=ct,u!==null)switch(u.tag){case 27:case 5:i=u.memoizedProps}e[lt]=t,e=!!(e.nodeValue===a||i!==null&&i.suppressHydrationWarning===!0||n0(e.nodeValue,a)),e||da(t)}else e=es(e).createTextNode(i),e[lt]=t,t.stateNode=e}return Le(t),null;case 13:if(i=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(u=Wi(t),i!==null&&i.dehydrated!==null){if(e===null){if(!u)throw Error(s(318));if(u=t.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(s(317));u[lt]=t}else Ii(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Le(t),u=!1}else u=Yd(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=u),u=!0;if(!u)return t.flags&256?(vn(t),t):(vn(t),null)}if(vn(t),(t.flags&128)!==0)return t.lanes=a,t;if(a=i!==null,e=e!==null&&e.memoizedState!==null,a){i=t.child,u=null,i.alternate!==null&&i.alternate.memoizedState!==null&&i.alternate.memoizedState.cachePool!==null&&(u=i.alternate.memoizedState.cachePool.pool);var o=null;i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(o=i.memoizedState.cachePool.pool),o!==u&&(i.flags|=2048)}return a!==e&&a&&(t.child.flags|=8192),Yr(t,t.updateQueue),Le(t),null;case 4:return it(),e===null&&Jo(t.stateNode.containerInfo),Le(t),null;case 10:return gn(t.type),Le(t),null;case 19:if(V(Ke),u=t.memoizedState,u===null)return Le(t),null;if(i=(t.flags&128)!==0,o=u.rendering,o===null)if(i)ml(u,!1);else{if(He!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(o=Br(e),o!==null){for(t.flags|=128,ml(u,!1),e=o.updateQueue,t.updateQueue=e,Yr(t,e),t.subtreeFlags=0,e=a,a=t.child;a!==null;)Ld(a,e),a=a.sibling;return F(Ke,Ke.current&1|2),t.child}e=e.sibling}u.tail!==null&&Wt()>$r&&(t.flags|=128,i=!0,ml(u,!1),t.lanes=4194304)}else{if(!i)if(e=Br(o),e!==null){if(t.flags|=128,i=!0,e=e.updateQueue,t.updateQueue=e,Yr(t,e),ml(u,!0),u.tail===null&&u.tailMode==="hidden"&&!o.alternate&&!we)return Le(t),null}else 2*Wt()-u.renderingStartTime>$r&&a!==536870912&&(t.flags|=128,i=!0,ml(u,!1),t.lanes=4194304);u.isBackwards?(o.sibling=t.child,t.child=o):(e=u.last,e!==null?e.sibling=o:t.child=o,u.last=o)}return u.tail!==null?(t=u.tail,u.rendering=t,u.tail=t.sibling,u.renderingStartTime=Wt(),t.sibling=null,e=Ke.current,F(Ke,i?e&1|2:e&1),t):(Le(t),null);case 22:case 23:return vn(t),Pu(),i=t.memoizedState!==null,e!==null?e.memoizedState!==null!==i&&(t.flags|=8192):i&&(t.flags|=8192),i?(a&536870912)!==0&&(t.flags&128)===0&&(Le(t),t.subtreeFlags&6&&(t.flags|=8192)):Le(t),a=t.updateQueue,a!==null&&Yr(t,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),i=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(i=t.memoizedState.cachePool.pool),i!==a&&(t.flags|=2048),e!==null&&V(ma),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),gn(Xe),Le(t),null;case 25:return null;case 30:return null}throw Error(s(156,t.tag))}function e1(e,t){switch(Lu(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return gn(Xe),it(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return on(t),null;case 13:if(vn(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(s(340));Ii()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return V(Ke),null;case 4:return it(),null;case 10:return gn(t.type),null;case 22:case 23:return vn(t),Pu(),e!==null&&V(ma),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return gn(Xe),null;case 25:return null;default:return null}}function cp(e,t){switch(Lu(t),t.tag){case 3:gn(Xe),it();break;case 26:case 27:case 5:on(t);break;case 4:it();break;case 13:vn(t);break;case 19:V(Ke);break;case 10:gn(t.type);break;case 22:case 23:vn(t),Pu(),e!==null&&V(ma);break;case 24:gn(Xe)}}function gl(e,t){try{var a=t.updateQueue,i=a!==null?a.lastEffect:null;if(i!==null){var u=i.next;a=u;do{if((a.tag&e)===e){i=void 0;var o=a.create,h=a.inst;i=o(),h.destroy=i}a=a.next}while(a!==u)}}catch(b){De(t,t.return,b)}}function Hn(e,t,a){try{var i=t.updateQueue,u=i!==null?i.lastEffect:null;if(u!==null){var o=u.next;i=o;do{if((i.tag&e)===e){var h=i.inst,b=h.destroy;if(b!==void 0){h.destroy=void 0,u=t;var S=a,_=b;try{_()}catch(H){De(u,S,H)}}}i=i.next}while(i!==o)}}catch(H){De(t,t.return,H)}}function fp(e){var t=e.updateQueue;if(t!==null){var a=e.stateNode;try{Wd(t,a)}catch(i){De(e,e.return,i)}}}function dp(e,t,a){a.props=ya(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(i){De(e,t,i)}}function yl(e,t){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var i=e.stateNode;break;case 30:i=e.stateNode;break;default:i=e.stateNode}typeof a=="function"?e.refCleanup=a(i):a.current=i}}catch(u){De(e,t,u)}}function tn(e,t){var a=e.ref,i=e.refCleanup;if(a!==null)if(typeof i=="function")try{i()}catch(u){De(e,t,u)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){De(e,t,u)}else a.current=null}function hp(e){var t=e.type,a=e.memoizedProps,i=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":a.autoFocus&&i.focus();break e;case"img":a.src?i.src=a.src:a.srcSet&&(i.srcset=a.srcSet)}}catch(u){De(e,e.return,u)}}function Oo(e,t,a){try{var i=e.stateNode;S1(i,e.type,a,t),i[dt]=t}catch(u){De(e,e.return,u)}}function pp(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Vn(e.type)||e.tag===4}function Ao(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||pp(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Vn(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Co(e,t,a){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,t):(t=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,t.appendChild(e),a=a._reactRootContainer,a!=null||t.onclick!==null||(t.onclick=Ir));else if(i!==4&&(i===27&&Vn(e.type)&&(a=e.stateNode,t=null),e=e.child,e!==null))for(Co(e,t,a),e=e.sibling;e!==null;)Co(e,t,a),e=e.sibling}function Qr(e,t,a){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?a.insertBefore(e,t):a.appendChild(e);else if(i!==4&&(i===27&&Vn(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(Qr(e,t,a),e=e.sibling;e!==null;)Qr(e,t,a),e=e.sibling}function mp(e){var t=e.stateNode,a=e.memoizedProps;try{for(var i=e.type,u=t.attributes;u.length;)t.removeAttributeNode(u[0]);at(t,i,a),t[lt]=e,t[dt]=a}catch(o){De(e,e.return,o)}}var Sn=!1,Ye=!1,jo=!1,gp=typeof WeakSet=="function"?WeakSet:Set,We=null;function t1(e,t){if(e=e.containerInfo,Io=rs,e=Ad(e),Ou(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var i=a.getSelection&&a.getSelection();if(i&&i.rangeCount!==0){a=i.anchorNode;var u=i.anchorOffset,o=i.focusNode;i=i.focusOffset;try{a.nodeType,o.nodeType}catch{a=null;break e}var h=0,b=-1,S=-1,_=0,H=0,Q=e,U=null;t:for(;;){for(var N;Q!==a||u!==0&&Q.nodeType!==3||(b=h+u),Q!==o||i!==0&&Q.nodeType!==3||(S=h+i),Q.nodeType===3&&(h+=Q.nodeValue.length),(N=Q.firstChild)!==null;)U=Q,Q=N;for(;;){if(Q===e)break t;if(U===a&&++_===u&&(b=h),U===o&&++H===i&&(S=h),(N=Q.nextSibling)!==null)break;Q=U,U=Q.parentNode}Q=N}a=b===-1||S===-1?null:{start:b,end:S}}else a=null}a=a||{start:0,end:0}}else a=null;for(ec={focusedElem:e,selectionRange:a},rs=!1,We=t;We!==null;)if(t=We,e=t.child,(t.subtreeFlags&1024)!==0&&e!==null)e.return=t,We=e;else for(;We!==null;){switch(t=We,o=t.alternate,e=t.flags,t.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&o!==null){e=void 0,a=t,u=o.memoizedProps,o=o.memoizedState,i=a.stateNode;try{var re=ya(a.type,u,a.elementType===a.type);e=i.getSnapshotBeforeUpdate(re,o),i.__reactInternalSnapshotBeforeUpdate=e}catch(ae){De(a,a.return,ae)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,a=e.nodeType,a===9)ac(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":ac(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(s(163))}if(e=t.sibling,e!==null){e.return=t.return,We=e;break}We=t.return}}function yp(e,t,a){var i=a.flags;switch(a.tag){case 0:case 11:case 15:kn(e,a),i&4&&gl(5,a);break;case 1:if(kn(e,a),i&4)if(e=a.stateNode,t===null)try{e.componentDidMount()}catch(h){De(a,a.return,h)}else{var u=ya(a.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(u,t,e.__reactInternalSnapshotBeforeUpdate)}catch(h){De(a,a.return,h)}}i&64&&fp(a),i&512&&yl(a,a.return);break;case 3:if(kn(e,a),i&64&&(e=a.updateQueue,e!==null)){if(t=null,a.child!==null)switch(a.child.tag){case 27:case 5:t=a.child.stateNode;break;case 1:t=a.child.stateNode}try{Wd(e,t)}catch(h){De(a,a.return,h)}}break;case 27:t===null&&i&4&&mp(a);case 26:case 5:kn(e,a),t===null&&i&4&&hp(a),i&512&&yl(a,a.return);break;case 12:kn(e,a);break;case 13:kn(e,a),i&4&&xp(e,a),i&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=c1.bind(null,a),C1(e,a))));break;case 22:if(i=a.memoizedState!==null||Sn,!i){t=t!==null&&t.memoizedState!==null||Ye,u=Sn;var o=Ye;Sn=i,(Ye=t)&&!o?Yn(e,a,(a.subtreeFlags&8772)!==0):kn(e,a),Sn=u,Ye=o}break;case 30:break;default:kn(e,a)}}function vp(e){var t=e.alternate;t!==null&&(e.alternate=null,vp(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&su(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Ne=null,mt=!1;function wn(e,t,a){for(a=a.child;a!==null;)bp(e,t,a),a=a.sibling}function bp(e,t,a){if(bt&&typeof bt.onCommitFiberUnmount=="function")try{bt.onCommitFiberUnmount(qi,a)}catch{}switch(a.tag){case 26:Ye||tn(a,t),wn(e,t,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Ye||tn(a,t);var i=Ne,u=mt;Vn(a.type)&&(Ne=a.stateNode,mt=!1),wn(e,t,a),Ol(a.stateNode),Ne=i,mt=u;break;case 5:Ye||tn(a,t);case 6:if(i=Ne,u=mt,Ne=null,wn(e,t,a),Ne=i,mt=u,Ne!==null)if(mt)try{(Ne.nodeType===9?Ne.body:Ne.nodeName==="HTML"?Ne.ownerDocument.body:Ne).removeChild(a.stateNode)}catch(o){De(a,t,o)}else try{Ne.removeChild(a.stateNode)}catch(o){De(a,t,o)}break;case 18:Ne!==null&&(mt?(e=Ne,s0(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),Ul(e)):s0(Ne,a.stateNode));break;case 4:i=Ne,u=mt,Ne=a.stateNode.containerInfo,mt=!0,wn(e,t,a),Ne=i,mt=u;break;case 0:case 11:case 14:case 15:Ye||Hn(2,a,t),Ye||Hn(4,a,t),wn(e,t,a);break;case 1:Ye||(tn(a,t),i=a.stateNode,typeof i.componentWillUnmount=="function"&&dp(a,t,i)),wn(e,t,a);break;case 21:wn(e,t,a);break;case 22:Ye=(i=Ye)||a.memoizedState!==null,wn(e,t,a),Ye=i;break;default:wn(e,t,a)}}function xp(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Ul(e)}catch(a){De(t,t.return,a)}}function n1(e){switch(e.tag){case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new gp),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new gp),t;default:throw Error(s(435,e.tag))}}function zo(e,t){var a=n1(e);t.forEach(function(i){var u=f1.bind(null,e,i);a.has(i)||(a.add(i),i.then(u,u))})}function Et(e,t){var a=t.deletions;if(a!==null)for(var i=0;i<a.length;i++){var u=a[i],o=e,h=t,b=h;e:for(;b!==null;){switch(b.tag){case 27:if(Vn(b.type)){Ne=b.stateNode,mt=!1;break e}break;case 5:Ne=b.stateNode,mt=!1;break e;case 3:case 4:Ne=b.stateNode.containerInfo,mt=!0;break e}b=b.return}if(Ne===null)throw Error(s(160));bp(o,h,u),Ne=null,mt=!1,o=u.alternate,o!==null&&(o.return=null),u.return=null}if(t.subtreeFlags&13878)for(t=t.child;t!==null;)Sp(t,e),t=t.sibling}var Xt=null;function Sp(e,t){var a=e.alternate,i=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Et(t,e),Rt(e),i&4&&(Hn(3,e,e.return),gl(3,e),Hn(5,e,e.return));break;case 1:Et(t,e),Rt(e),i&512&&(Ye||a===null||tn(a,a.return)),i&64&&Sn&&(e=e.updateQueue,e!==null&&(i=e.callbacks,i!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?i:a.concat(i))));break;case 26:var u=Xt;if(Et(t,e),Rt(e),i&512&&(Ye||a===null||tn(a,a.return)),i&4){var o=a!==null?a.memoizedState:null;if(i=e.memoizedState,a===null)if(i===null)if(e.stateNode===null){e:{i=e.type,a=e.memoizedProps,u=u.ownerDocument||u;t:switch(i){case"title":o=u.getElementsByTagName("title")[0],(!o||o[Yi]||o[lt]||o.namespaceURI==="http://www.w3.org/2000/svg"||o.hasAttribute("itemprop"))&&(o=u.createElement(i),u.head.insertBefore(o,u.querySelector("head > title"))),at(o,i,a),o[lt]=e,Je(o),i=o;break e;case"link":var h=m0("link","href",u).get(i+(a.href||""));if(h){for(var b=0;b<h.length;b++)if(o=h[b],o.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&o.getAttribute("rel")===(a.rel==null?null:a.rel)&&o.getAttribute("title")===(a.title==null?null:a.title)&&o.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){h.splice(b,1);break t}}o=u.createElement(i),at(o,i,a),u.head.appendChild(o);break;case"meta":if(h=m0("meta","content",u).get(i+(a.content||""))){for(b=0;b<h.length;b++)if(o=h[b],o.getAttribute("content")===(a.content==null?null:""+a.content)&&o.getAttribute("name")===(a.name==null?null:a.name)&&o.getAttribute("property")===(a.property==null?null:a.property)&&o.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&o.getAttribute("charset")===(a.charSet==null?null:a.charSet)){h.splice(b,1);break t}}o=u.createElement(i),at(o,i,a),u.head.appendChild(o);break;default:throw Error(s(468,i))}o[lt]=e,Je(o),i=o}e.stateNode=i}else g0(u,e.type,e.stateNode);else e.stateNode=p0(u,i,e.memoizedProps);else o!==i?(o===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):o.count--,i===null?g0(u,e.type,e.stateNode):p0(u,i,e.memoizedProps)):i===null&&e.stateNode!==null&&Oo(e,e.memoizedProps,a.memoizedProps)}break;case 27:Et(t,e),Rt(e),i&512&&(Ye||a===null||tn(a,a.return)),a!==null&&i&4&&Oo(e,e.memoizedProps,a.memoizedProps);break;case 5:if(Et(t,e),Rt(e),i&512&&(Ye||a===null||tn(a,a.return)),e.flags&32){u=e.stateNode;try{qa(u,"")}catch(N){De(e,e.return,N)}}i&4&&e.stateNode!=null&&(u=e.memoizedProps,Oo(e,u,a!==null?a.memoizedProps:u)),i&1024&&(jo=!0);break;case 6:if(Et(t,e),Rt(e),i&4){if(e.stateNode===null)throw Error(s(162));i=e.memoizedProps,a=e.stateNode;try{a.nodeValue=i}catch(N){De(e,e.return,N)}}break;case 3:if(as=null,u=Xt,Xt=ts(t.containerInfo),Et(t,e),Xt=u,Rt(e),i&4&&a!==null&&a.memoizedState.isDehydrated)try{Ul(t.containerInfo)}catch(N){De(e,e.return,N)}jo&&(jo=!1,wp(e));break;case 4:i=Xt,Xt=ts(e.stateNode.containerInfo),Et(t,e),Rt(e),Xt=i;break;case 12:Et(t,e),Rt(e);break;case 13:Et(t,e),Rt(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Bo=Wt()),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,zo(e,i)));break;case 22:u=e.memoizedState!==null;var S=a!==null&&a.memoizedState!==null,_=Sn,H=Ye;if(Sn=_||u,Ye=H||S,Et(t,e),Ye=H,Sn=_,Rt(e),i&8192)e:for(t=e.stateNode,t._visibility=u?t._visibility&-2:t._visibility|1,u&&(a===null||S||Sn||Ye||va(e)),a=null,t=e;;){if(t.tag===5||t.tag===26){if(a===null){S=a=t;try{if(o=S.stateNode,u)h=o.style,typeof h.setProperty=="function"?h.setProperty("display","none","important"):h.display="none";else{b=S.stateNode;var Q=S.memoizedProps.style,U=Q!=null&&Q.hasOwnProperty("display")?Q.display:null;b.style.display=U==null||typeof U=="boolean"?"":(""+U).trim()}}catch(N){De(S,S.return,N)}}}else if(t.tag===6){if(a===null){S=t;try{S.stateNode.nodeValue=u?"":S.memoizedProps}catch(N){De(S,S.return,N)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;a===t&&(a=null),t=t.return}a===t&&(a=null),t.sibling.return=t.return,t=t.sibling}i&4&&(i=e.updateQueue,i!==null&&(a=i.retryQueue,a!==null&&(i.retryQueue=null,zo(e,a))));break;case 19:Et(t,e),Rt(e),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,zo(e,i)));break;case 30:break;case 21:break;default:Et(t,e),Rt(e)}}function Rt(e){var t=e.flags;if(t&2){try{for(var a,i=e.return;i!==null;){if(pp(i)){a=i;break}i=i.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var u=a.stateNode,o=Ao(e);Qr(e,o,u);break;case 5:var h=a.stateNode;a.flags&32&&(qa(h,""),a.flags&=-33);var b=Ao(e);Qr(e,b,h);break;case 3:case 4:var S=a.stateNode.containerInfo,_=Ao(e);Co(e,_,S);break;default:throw Error(s(161))}}catch(H){De(e,e.return,H)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function wp(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;wp(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function kn(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)yp(e,t.alternate,t),t=t.sibling}function va(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Hn(4,t,t.return),va(t);break;case 1:tn(t,t.return);var a=t.stateNode;typeof a.componentWillUnmount=="function"&&dp(t,t.return,a),va(t);break;case 27:Ol(t.stateNode);case 26:case 5:tn(t,t.return),va(t);break;case 22:t.memoizedState===null&&va(t);break;case 30:va(t);break;default:va(t)}e=e.sibling}}function Yn(e,t,a){for(a=a&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var i=t.alternate,u=e,o=t,h=o.flags;switch(o.tag){case 0:case 11:case 15:Yn(u,o,a),gl(4,o);break;case 1:if(Yn(u,o,a),i=o,u=i.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(_){De(i,i.return,_)}if(i=o,u=i.updateQueue,u!==null){var b=i.stateNode;try{var S=u.shared.hiddenCallbacks;if(S!==null)for(u.shared.hiddenCallbacks=null,u=0;u<S.length;u++)Pd(S[u],b)}catch(_){De(i,i.return,_)}}a&&h&64&&fp(o),yl(o,o.return);break;case 27:mp(o);case 26:case 5:Yn(u,o,a),a&&i===null&&h&4&&hp(o),yl(o,o.return);break;case 12:Yn(u,o,a);break;case 13:Yn(u,o,a),a&&h&4&&xp(u,o);break;case 22:o.memoizedState===null&&Yn(u,o,a),yl(o,o.return);break;case 30:break;default:Yn(u,o,a)}t=t.sibling}}function Do(e,t){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&nl(a))}function Mo(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&nl(e))}function nn(e,t,a,i){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Ep(e,t,a,i),t=t.sibling}function Ep(e,t,a,i){var u=t.flags;switch(t.tag){case 0:case 11:case 15:nn(e,t,a,i),u&2048&&gl(9,t);break;case 1:nn(e,t,a,i);break;case 3:nn(e,t,a,i),u&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&nl(e)));break;case 12:if(u&2048){nn(e,t,a,i),e=t.stateNode;try{var o=t.memoizedProps,h=o.id,b=o.onPostCommit;typeof b=="function"&&b(h,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(S){De(t,t.return,S)}}else nn(e,t,a,i);break;case 13:nn(e,t,a,i);break;case 23:break;case 22:o=t.stateNode,h=t.alternate,t.memoizedState!==null?o._visibility&2?nn(e,t,a,i):vl(e,t):o._visibility&2?nn(e,t,a,i):(o._visibility|=2,ai(e,t,a,i,(t.subtreeFlags&10256)!==0)),u&2048&&Do(h,t);break;case 24:nn(e,t,a,i),u&2048&&Mo(t.alternate,t);break;default:nn(e,t,a,i)}}function ai(e,t,a,i,u){for(u=u&&(t.subtreeFlags&10256)!==0,t=t.child;t!==null;){var o=e,h=t,b=a,S=i,_=h.flags;switch(h.tag){case 0:case 11:case 15:ai(o,h,b,S,u),gl(8,h);break;case 23:break;case 22:var H=h.stateNode;h.memoizedState!==null?H._visibility&2?ai(o,h,b,S,u):vl(o,h):(H._visibility|=2,ai(o,h,b,S,u)),u&&_&2048&&Do(h.alternate,h);break;case 24:ai(o,h,b,S,u),u&&_&2048&&Mo(h.alternate,h);break;default:ai(o,h,b,S,u)}t=t.sibling}}function vl(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var a=e,i=t,u=i.flags;switch(i.tag){case 22:vl(a,i),u&2048&&Do(i.alternate,i);break;case 24:vl(a,i),u&2048&&Mo(i.alternate,i);break;default:vl(a,i)}t=t.sibling}}var bl=8192;function ii(e){if(e.subtreeFlags&bl)for(e=e.child;e!==null;)Rp(e),e=e.sibling}function Rp(e){switch(e.tag){case 26:ii(e),e.flags&bl&&e.memoizedState!==null&&Y1(Xt,e.memoizedState,e.memoizedProps);break;case 5:ii(e);break;case 3:case 4:var t=Xt;Xt=ts(e.stateNode.containerInfo),ii(e),Xt=t;break;case 22:e.memoizedState===null&&(t=e.alternate,t!==null&&t.memoizedState!==null?(t=bl,bl=16777216,ii(e),bl=t):ii(e));break;default:ii(e)}}function Tp(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function xl(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var i=t[a];We=i,Ap(i,e)}Tp(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Op(e),e=e.sibling}function Op(e){switch(e.tag){case 0:case 11:case 15:xl(e),e.flags&2048&&Hn(9,e,e.return);break;case 3:xl(e);break;case 12:xl(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Gr(e)):xl(e);break;default:xl(e)}}function Gr(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var i=t[a];We=i,Ap(i,e)}Tp(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Hn(8,t,t.return),Gr(t);break;case 22:a=t.stateNode,a._visibility&2&&(a._visibility&=-3,Gr(t));break;default:Gr(t)}e=e.sibling}}function Ap(e,t){for(;We!==null;){var a=We;switch(a.tag){case 0:case 11:case 15:Hn(8,a,t);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var i=a.memoizedState.cachePool.pool;i!=null&&i.refCount++}break;case 24:nl(a.memoizedState.cache)}if(i=a.child,i!==null)i.return=a,We=i;else e:for(a=e;We!==null;){i=We;var u=i.sibling,o=i.return;if(vp(i),i===a){We=null;break e}if(u!==null){u.return=o,We=u;break e}We=o}}}var a1={getCacheForType:function(e){var t=rt(Xe),a=t.data.get(e);return a===void 0&&(a=e(),t.data.set(e,a)),a}},i1=typeof WeakMap=="function"?WeakMap:Map,Te=0,Me=null,ve=null,xe=0,Oe=0,Tt=null,Qn=!1,li=!1,_o=!1,En=0,He=0,Gn=0,ba=0,Uo=0,Ht=0,ri=0,Sl=null,gt=null,No=!1,Bo=0,$r=1/0,Xr=null,$n=null,nt=0,Xn=null,si=null,ui=0,Lo=0,qo=null,Cp=null,wl=0,Ho=null;function Ot(){if((Te&2)!==0&&xe!==0)return xe&-xe;if(q.T!==null){var e=Fa;return e!==0?e:Ko()}return $f()}function jp(){Ht===0&&(Ht=(xe&536870912)===0||we?kf():536870912);var e=qt.current;return e!==null&&(e.flags|=32),Ht}function At(e,t,a){(e===Me&&(Oe===2||Oe===9)||e.cancelPendingCommit!==null)&&(oi(e,0),Kn(e,xe,Ht,!1)),ki(e,a),((Te&2)===0||e!==Me)&&(e===Me&&((Te&2)===0&&(ba|=a),He===4&&Kn(e,xe,Ht,!1)),an(e))}function zp(e,t,a){if((Te&6)!==0)throw Error(s(327));var i=!a&&(t&124)===0&&(t&e.expiredLanes)===0||Hi(e,t),u=i?s1(e,t):Qo(e,t,!0),o=i;do{if(u===0){li&&!i&&Kn(e,t,0,!1);break}else{if(a=e.current.alternate,o&&!l1(a)){u=Qo(e,t,!1),o=!1;continue}if(u===2){if(o=t,e.errorRecoveryDisabledLanes&o)var h=0;else h=e.pendingLanes&-536870913,h=h!==0?h:h&536870912?536870912:0;if(h!==0){t=h;e:{var b=e;u=Sl;var S=b.current.memoizedState.isDehydrated;if(S&&(oi(b,h).flags|=256),h=Qo(b,h,!1),h!==2){if(_o&&!S){b.errorRecoveryDisabledLanes|=o,ba|=o,u=4;break e}o=gt,gt=u,o!==null&&(gt===null?gt=o:gt.push.apply(gt,o))}u=h}if(o=!1,u!==2)continue}}if(u===1){oi(e,0),Kn(e,t,0,!0);break}e:{switch(i=e,o=u,o){case 0:case 1:throw Error(s(345));case 4:if((t&4194048)!==t)break;case 6:Kn(i,t,Ht,!Qn);break e;case 2:gt=null;break;case 3:case 5:break;default:throw Error(s(329))}if((t&62914560)===t&&(u=Bo+300-Wt(),10<u)){if(Kn(i,t,Ht,!Qn),nr(i,0,!0)!==0)break e;i.timeoutHandle=l0(Dp.bind(null,i,a,gt,Xr,No,t,Ht,ba,ri,Qn,o,2,-0,0),u);break e}Dp(i,a,gt,Xr,No,t,Ht,ba,ri,Qn,o,0,-0,0)}}break}while(!0);an(e)}function Dp(e,t,a,i,u,o,h,b,S,_,H,Q,U,N){if(e.timeoutHandle=-1,Q=t.subtreeFlags,(Q&8192||(Q&16785408)===16785408)&&(jl={stylesheets:null,count:0,unsuspend:k1},Rp(t),Q=Q1(),Q!==null)){e.cancelPendingCommit=Q(qp.bind(null,e,t,o,a,i,u,h,b,S,H,1,U,N)),Kn(e,o,h,!_);return}qp(e,t,o,a,i,u,h,b,S)}function l1(e){for(var t=e;;){var a=t.tag;if((a===0||a===11||a===15)&&t.flags&16384&&(a=t.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var i=0;i<a.length;i++){var u=a[i],o=u.getSnapshot;u=u.value;try{if(!St(o(),u))return!1}catch{return!1}}if(a=t.child,t.subtreeFlags&16384&&a!==null)a.return=t,t=a;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Kn(e,t,a,i){t&=~Uo,t&=~ba,e.suspendedLanes|=t,e.pingedLanes&=~t,i&&(e.warmLanes|=t),i=e.expirationTimes;for(var u=t;0<u;){var o=31-xt(u),h=1<<o;i[o]=-1,u&=~h}a!==0&&Qf(e,a,t)}function Kr(){return(Te&6)===0?(El(0),!1):!0}function ko(){if(ve!==null){if(Oe===0)var e=ve.return;else e=ve,mn=ha=null,no(e),ti=null,hl=0,e=ve;for(;e!==null;)cp(e.alternate,e),e=e.return;ve=null}}function oi(e,t){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,E1(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),ko(),Me=e,ve=a=dn(e.current,null),xe=t,Oe=0,Tt=null,Qn=!1,li=Hi(e,t),_o=!1,ri=Ht=Uo=ba=Gn=He=0,gt=Sl=null,No=!1,(t&8)!==0&&(t|=t&32);var i=e.entangledLanes;if(i!==0)for(e=e.entanglements,i&=t;0<i;){var u=31-xt(i),o=1<<u;t|=e[u],i&=~o}return En=t,pr(),a}function Mp(e,t){he=null,q.H=_r,t===il||t===Er?(t=Fd(),Oe=3):t===Kd?(t=Fd(),Oe=4):Oe=t===Jh?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,Tt=t,ve===null&&(He=1,qr(e,Ut(t,e.current)))}function _p(){var e=q.H;return q.H=_r,e===null?_r:e}function Up(){var e=q.A;return q.A=a1,e}function Yo(){He=4,Qn||(xe&4194048)!==xe&&qt.current!==null||(li=!0),(Gn&134217727)===0&&(ba&134217727)===0||Me===null||Kn(Me,xe,Ht,!1)}function Qo(e,t,a){var i=Te;Te|=2;var u=_p(),o=Up();(Me!==e||xe!==t)&&(Xr=null,oi(e,t)),t=!1;var h=He;e:do try{if(Oe!==0&&ve!==null){var b=ve,S=Tt;switch(Oe){case 8:ko(),h=6;break e;case 3:case 2:case 9:case 6:qt.current===null&&(t=!0);var _=Oe;if(Oe=0,Tt=null,ci(e,b,S,_),a&&li){h=0;break e}break;default:_=Oe,Oe=0,Tt=null,ci(e,b,S,_)}}r1(),h=He;break}catch(H){Mp(e,H)}while(!0);return t&&e.shellSuspendCounter++,mn=ha=null,Te=i,q.H=u,q.A=o,ve===null&&(Me=null,xe=0,pr()),h}function r1(){for(;ve!==null;)Np(ve)}function s1(e,t){var a=Te;Te|=2;var i=_p(),u=Up();Me!==e||xe!==t?(Xr=null,$r=Wt()+500,oi(e,t)):li=Hi(e,t);e:do try{if(Oe!==0&&ve!==null){t=ve;var o=Tt;t:switch(Oe){case 1:Oe=0,Tt=null,ci(e,t,o,1);break;case 2:case 9:if(Vd(o)){Oe=0,Tt=null,Bp(t);break}t=function(){Oe!==2&&Oe!==9||Me!==e||(Oe=7),an(e)},o.then(t,t);break e;case 3:Oe=7;break e;case 4:Oe=5;break e;case 7:Vd(o)?(Oe=0,Tt=null,Bp(t)):(Oe=0,Tt=null,ci(e,t,o,7));break;case 5:var h=null;switch(ve.tag){case 26:h=ve.memoizedState;case 5:case 27:var b=ve;if(!h||y0(h)){Oe=0,Tt=null;var S=b.sibling;if(S!==null)ve=S;else{var _=b.return;_!==null?(ve=_,Vr(_)):ve=null}break t}}Oe=0,Tt=null,ci(e,t,o,5);break;case 6:Oe=0,Tt=null,ci(e,t,o,6);break;case 8:ko(),He=6;break e;default:throw Error(s(462))}}u1();break}catch(H){Mp(e,H)}while(!0);return mn=ha=null,q.H=i,q.A=u,Te=a,ve!==null?0:(Me=null,xe=0,pr(),He)}function u1(){for(;ve!==null&&!zy();)Np(ve)}function Np(e){var t=up(e.alternate,e,En);e.memoizedProps=e.pendingProps,t===null?Vr(e):ve=t}function Bp(e){var t=e,a=t.alternate;switch(t.tag){case 15:case 0:t=np(a,t,t.pendingProps,t.type,void 0,xe);break;case 11:t=np(a,t,t.pendingProps,t.type.render,t.ref,xe);break;case 5:no(t);default:cp(a,t),t=ve=Ld(t,En),t=up(a,t,En)}e.memoizedProps=e.pendingProps,t===null?Vr(e):ve=t}function ci(e,t,a,i){mn=ha=null,no(t),ti=null,hl=0;var u=t.return;try{if(Pv(e,u,t,a,xe)){He=1,qr(e,Ut(a,e.current)),ve=null;return}}catch(o){if(u!==null)throw ve=u,o;He=1,qr(e,Ut(a,e.current)),ve=null;return}t.flags&32768?(we||i===1?e=!0:li||(xe&536870912)!==0?e=!1:(Qn=e=!0,(i===2||i===9||i===3||i===6)&&(i=qt.current,i!==null&&i.tag===13&&(i.flags|=16384))),Lp(t,e)):Vr(t)}function Vr(e){var t=e;do{if((t.flags&32768)!==0){Lp(t,Qn);return}e=t.return;var a=Iv(t.alternate,t,En);if(a!==null){ve=a;return}if(t=t.sibling,t!==null){ve=t;return}ve=t=e}while(t!==null);He===0&&(He=5)}function Lp(e,t){do{var a=e1(e.alternate,e);if(a!==null){a.flags&=32767,ve=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!t&&(e=e.sibling,e!==null)){ve=e;return}ve=e=a}while(e!==null);He=6,ve=null}function qp(e,t,a,i,u,o,h,b,S){e.cancelPendingCommit=null;do Zr();while(nt!==0);if((Te&6)!==0)throw Error(s(327));if(t!==null){if(t===e.current)throw Error(s(177));if(o=t.lanes|t.childLanes,o|=Du,ky(e,a,o,h,b,S),e===Me&&(ve=Me=null,xe=0),si=t,Xn=e,ui=a,Lo=o,qo=u,Cp=i,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,d1(Il,function(){return Gp(),null})):(e.callbackNode=null,e.callbackPriority=0),i=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||i){i=q.T,q.T=null,u=Z.p,Z.p=2,h=Te,Te|=4;try{t1(e,t,a)}finally{Te=h,Z.p=u,q.T=i}}nt=1,Hp(),kp(),Yp()}}function Hp(){if(nt===1){nt=0;var e=Xn,t=si,a=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||a){a=q.T,q.T=null;var i=Z.p;Z.p=2;var u=Te;Te|=4;try{Sp(t,e);var o=ec,h=Ad(e.containerInfo),b=o.focusedElem,S=o.selectionRange;if(h!==b&&b&&b.ownerDocument&&Od(b.ownerDocument.documentElement,b)){if(S!==null&&Ou(b)){var _=S.start,H=S.end;if(H===void 0&&(H=_),"selectionStart"in b)b.selectionStart=_,b.selectionEnd=Math.min(H,b.value.length);else{var Q=b.ownerDocument||document,U=Q&&Q.defaultView||window;if(U.getSelection){var N=U.getSelection(),re=b.textContent.length,ae=Math.min(S.start,re),je=S.end===void 0?ae:Math.min(S.end,re);!N.extend&&ae>je&&(h=je,je=ae,ae=h);var j=Td(b,ae),A=Td(b,je);if(j&&A&&(N.rangeCount!==1||N.anchorNode!==j.node||N.anchorOffset!==j.offset||N.focusNode!==A.node||N.focusOffset!==A.offset)){var M=Q.createRange();M.setStart(j.node,j.offset),N.removeAllRanges(),ae>je?(N.addRange(M),N.extend(A.node,A.offset)):(M.setEnd(A.node,A.offset),N.addRange(M))}}}}for(Q=[],N=b;N=N.parentNode;)N.nodeType===1&&Q.push({element:N,left:N.scrollLeft,top:N.scrollTop});for(typeof b.focus=="function"&&b.focus(),b=0;b<Q.length;b++){var Y=Q[b];Y.element.scrollLeft=Y.left,Y.element.scrollTop=Y.top}}rs=!!Io,ec=Io=null}finally{Te=u,Z.p=i,q.T=a}}e.current=t,nt=2}}function kp(){if(nt===2){nt=0;var e=Xn,t=si,a=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||a){a=q.T,q.T=null;var i=Z.p;Z.p=2;var u=Te;Te|=4;try{yp(e,t.alternate,t)}finally{Te=u,Z.p=i,q.T=a}}nt=3}}function Yp(){if(nt===4||nt===3){nt=0,Dy();var e=Xn,t=si,a=ui,i=Cp;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?nt=5:(nt=0,si=Xn=null,Qp(e,e.pendingLanes));var u=e.pendingLanes;if(u===0&&($n=null),lu(a),t=t.stateNode,bt&&typeof bt.onCommitFiberRoot=="function")try{bt.onCommitFiberRoot(qi,t,void 0,(t.current.flags&128)===128)}catch{}if(i!==null){t=q.T,u=Z.p,Z.p=2,q.T=null;try{for(var o=e.onRecoverableError,h=0;h<i.length;h++){var b=i[h];o(b.value,{componentStack:b.stack})}}finally{q.T=t,Z.p=u}}(ui&3)!==0&&Zr(),an(e),u=e.pendingLanes,(a&4194090)!==0&&(u&42)!==0?e===Ho?wl++:(wl=0,Ho=e):wl=0,El(0)}}function Qp(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,nl(t)))}function Zr(e){return Hp(),kp(),Yp(),Gp()}function Gp(){if(nt!==5)return!1;var e=Xn,t=Lo;Lo=0;var a=lu(ui),i=q.T,u=Z.p;try{Z.p=32>a?32:a,q.T=null,a=qo,qo=null;var o=Xn,h=ui;if(nt=0,si=Xn=null,ui=0,(Te&6)!==0)throw Error(s(331));var b=Te;if(Te|=4,Op(o.current),Ep(o,o.current,h,a),Te=b,El(0,!1),bt&&typeof bt.onPostCommitFiberRoot=="function")try{bt.onPostCommitFiberRoot(qi,o)}catch{}return!0}finally{Z.p=u,q.T=i,Qp(e,t)}}function $p(e,t,a){t=Ut(a,t),t=yo(e.stateNode,t,2),e=Nn(e,t,2),e!==null&&(ki(e,2),an(e))}function De(e,t,a){if(e.tag===3)$p(e,e,a);else for(;t!==null;){if(t.tag===3){$p(t,e,a);break}else if(t.tag===1){var i=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&($n===null||!$n.has(i))){e=Ut(a,e),a=Zh(2),i=Nn(t,a,2),i!==null&&(Fh(a,i,t,e),ki(i,2),an(i));break}}t=t.return}}function Go(e,t,a){var i=e.pingCache;if(i===null){i=e.pingCache=new i1;var u=new Set;i.set(t,u)}else u=i.get(t),u===void 0&&(u=new Set,i.set(t,u));u.has(a)||(_o=!0,u.add(a),e=o1.bind(null,e,t,a),t.then(e,e))}function o1(e,t,a){var i=e.pingCache;i!==null&&i.delete(t),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,Me===e&&(xe&a)===a&&(He===4||He===3&&(xe&62914560)===xe&&300>Wt()-Bo?(Te&2)===0&&oi(e,0):Uo|=a,ri===xe&&(ri=0)),an(e)}function Xp(e,t){t===0&&(t=Yf()),e=Xa(e,t),e!==null&&(ki(e,t),an(e))}function c1(e){var t=e.memoizedState,a=0;t!==null&&(a=t.retryLane),Xp(e,a)}function f1(e,t){var a=0;switch(e.tag){case 13:var i=e.stateNode,u=e.memoizedState;u!==null&&(a=u.retryLane);break;case 19:i=e.stateNode;break;case 22:i=e.stateNode._retryCache;break;default:throw Error(s(314))}i!==null&&i.delete(t),Xp(e,a)}function d1(e,t){return tu(e,t)}var Fr=null,fi=null,$o=!1,Jr=!1,Xo=!1,xa=0;function an(e){e!==fi&&e.next===null&&(fi===null?Fr=fi=e:fi=fi.next=e),Jr=!0,$o||($o=!0,p1())}function El(e,t){if(!Xo&&Jr){Xo=!0;do for(var a=!1,i=Fr;i!==null;){if(e!==0){var u=i.pendingLanes;if(u===0)var o=0;else{var h=i.suspendedLanes,b=i.pingedLanes;o=(1<<31-xt(42|e)+1)-1,o&=u&~(h&~b),o=o&201326741?o&201326741|1:o?o|2:0}o!==0&&(a=!0,Fp(i,o))}else o=xe,o=nr(i,i===Me?o:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),(o&3)===0||Hi(i,o)||(a=!0,Fp(i,o));i=i.next}while(a);Xo=!1}}function h1(){Kp()}function Kp(){Jr=$o=!1;var e=0;xa!==0&&(w1()&&(e=xa),xa=0);for(var t=Wt(),a=null,i=Fr;i!==null;){var u=i.next,o=Vp(i,t);o===0?(i.next=null,a===null?Fr=u:a.next=u,u===null&&(fi=a)):(a=i,(e!==0||(o&3)!==0)&&(Jr=!0)),i=u}El(e)}function Vp(e,t){for(var a=e.suspendedLanes,i=e.pingedLanes,u=e.expirationTimes,o=e.pendingLanes&-62914561;0<o;){var h=31-xt(o),b=1<<h,S=u[h];S===-1?((b&a)===0||(b&i)!==0)&&(u[h]=Hy(b,t)):S<=t&&(e.expiredLanes|=b),o&=~b}if(t=Me,a=xe,a=nr(e,e===t?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i=e.callbackNode,a===0||e===t&&(Oe===2||Oe===9)||e.cancelPendingCommit!==null)return i!==null&&i!==null&&nu(i),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Hi(e,a)){if(t=a&-a,t===e.callbackPriority)return t;switch(i!==null&&nu(i),lu(a)){case 2:case 8:a=qf;break;case 32:a=Il;break;case 268435456:a=Hf;break;default:a=Il}return i=Zp.bind(null,e),a=tu(a,i),e.callbackPriority=t,e.callbackNode=a,t}return i!==null&&i!==null&&nu(i),e.callbackPriority=2,e.callbackNode=null,2}function Zp(e,t){if(nt!==0&&nt!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(Zr()&&e.callbackNode!==a)return null;var i=xe;return i=nr(e,e===Me?i:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i===0?null:(zp(e,i,t),Vp(e,Wt()),e.callbackNode!=null&&e.callbackNode===a?Zp.bind(null,e):null)}function Fp(e,t){if(Zr())return null;zp(e,t,!0)}function p1(){R1(function(){(Te&6)!==0?tu(Lf,h1):Kp()})}function Ko(){return xa===0&&(xa=kf()),xa}function Jp(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:sr(""+e)}function Pp(e,t){var a=t.ownerDocument.createElement("input");return a.name=t.name,a.value=t.value,e.id&&a.setAttribute("form",e.id),t.parentNode.insertBefore(a,t),e=new FormData(e),a.parentNode.removeChild(a),e}function m1(e,t,a,i,u){if(t==="submit"&&a&&a.stateNode===u){var o=Jp((u[dt]||null).action),h=i.submitter;h&&(t=(t=h[dt]||null)?Jp(t.formAction):h.getAttribute("formAction"),t!==null&&(o=t,h=null));var b=new fr("action","action",null,i,u);e.push({event:b,listeners:[{instance:null,listener:function(){if(i.defaultPrevented){if(xa!==0){var S=h?Pp(u,h):new FormData(u);fo(a,{pending:!0,data:S,method:u.method,action:o},null,S)}}else typeof o=="function"&&(b.preventDefault(),S=h?Pp(u,h):new FormData(u),fo(a,{pending:!0,data:S,method:u.method,action:o},o,S))},currentTarget:u}]})}}for(var Vo=0;Vo<zu.length;Vo++){var Zo=zu[Vo],g1=Zo.toLowerCase(),y1=Zo[0].toUpperCase()+Zo.slice(1);$t(g1,"on"+y1)}$t(zd,"onAnimationEnd"),$t(Dd,"onAnimationIteration"),$t(Md,"onAnimationStart"),$t("dblclick","onDoubleClick"),$t("focusin","onFocus"),$t("focusout","onBlur"),$t(Uv,"onTransitionRun"),$t(Nv,"onTransitionStart"),$t(Bv,"onTransitionCancel"),$t(_d,"onTransitionEnd"),Na("onMouseEnter",["mouseout","mouseover"]),Na("onMouseLeave",["mouseout","mouseover"]),Na("onPointerEnter",["pointerout","pointerover"]),Na("onPointerLeave",["pointerout","pointerover"]),ia("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),ia("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),ia("onBeforeInput",["compositionend","keypress","textInput","paste"]),ia("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),ia("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),ia("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Rl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),v1=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Rl));function Wp(e,t){t=(t&4)!==0;for(var a=0;a<e.length;a++){var i=e[a],u=i.event;i=i.listeners;e:{var o=void 0;if(t)for(var h=i.length-1;0<=h;h--){var b=i[h],S=b.instance,_=b.currentTarget;if(b=b.listener,S!==o&&u.isPropagationStopped())break e;o=b,u.currentTarget=_;try{o(u)}catch(H){Lr(H)}u.currentTarget=null,o=S}else for(h=0;h<i.length;h++){if(b=i[h],S=b.instance,_=b.currentTarget,b=b.listener,S!==o&&u.isPropagationStopped())break e;o=b,u.currentTarget=_;try{o(u)}catch(H){Lr(H)}u.currentTarget=null,o=S}}}}function be(e,t){var a=t[ru];a===void 0&&(a=t[ru]=new Set);var i=e+"__bubble";a.has(i)||(Ip(t,e,2,!1),a.add(i))}function Fo(e,t,a){var i=0;t&&(i|=4),Ip(a,e,i,t)}var Pr="_reactListening"+Math.random().toString(36).slice(2);function Jo(e){if(!e[Pr]){e[Pr]=!0,Kf.forEach(function(a){a!=="selectionchange"&&(v1.has(a)||Fo(a,!1,e),Fo(a,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Pr]||(t[Pr]=!0,Fo("selectionchange",!1,t))}}function Ip(e,t,a,i){switch(E0(t)){case 2:var u=X1;break;case 8:u=K1;break;default:u=cc}a=u.bind(null,t,a,e),u=void 0,!yu||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(u=!0),i?u!==void 0?e.addEventListener(t,a,{capture:!0,passive:u}):e.addEventListener(t,a,!0):u!==void 0?e.addEventListener(t,a,{passive:u}):e.addEventListener(t,a,!1)}function Po(e,t,a,i,u){var o=i;if((t&1)===0&&(t&2)===0&&i!==null)e:for(;;){if(i===null)return;var h=i.tag;if(h===3||h===4){var b=i.stateNode.containerInfo;if(b===u)break;if(h===4)for(h=i.return;h!==null;){var S=h.tag;if((S===3||S===4)&&h.stateNode.containerInfo===u)return;h=h.return}for(;b!==null;){if(h=Ma(b),h===null)return;if(S=h.tag,S===5||S===6||S===26||S===27){i=o=h;continue e}b=b.parentNode}}i=i.return}rd(function(){var _=o,H=mu(a),Q=[];e:{var U=Ud.get(e);if(U!==void 0){var N=fr,re=e;switch(e){case"keypress":if(or(a)===0)break e;case"keydown":case"keyup":N=dv;break;case"focusin":re="focus",N=Su;break;case"focusout":re="blur",N=Su;break;case"beforeblur":case"afterblur":N=Su;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":N=od;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":N=ev;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":N=mv;break;case zd:case Dd:case Md:N=av;break;case _d:N=yv;break;case"scroll":case"scrollend":N=Wy;break;case"wheel":N=bv;break;case"copy":case"cut":case"paste":N=lv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":N=fd;break;case"toggle":case"beforetoggle":N=Sv}var ae=(t&4)!==0,je=!ae&&(e==="scroll"||e==="scrollend"),j=ae?U!==null?U+"Capture":null:U;ae=[];for(var A=_,M;A!==null;){var Y=A;if(M=Y.stateNode,Y=Y.tag,Y!==5&&Y!==26&&Y!==27||M===null||j===null||(Y=Gi(A,j),Y!=null&&ae.push(Tl(A,Y,M))),je)break;A=A.return}0<ae.length&&(U=new N(U,re,null,a,H),Q.push({event:U,listeners:ae}))}}if((t&7)===0){e:{if(U=e==="mouseover"||e==="pointerover",N=e==="mouseout"||e==="pointerout",U&&a!==pu&&(re=a.relatedTarget||a.fromElement)&&(Ma(re)||re[Da]))break e;if((N||U)&&(U=H.window===H?H:(U=H.ownerDocument)?U.defaultView||U.parentWindow:window,N?(re=a.relatedTarget||a.toElement,N=_,re=re?Ma(re):null,re!==null&&(je=f(re),ae=re.tag,re!==je||ae!==5&&ae!==27&&ae!==6)&&(re=null)):(N=null,re=_),N!==re)){if(ae=od,Y="onMouseLeave",j="onMouseEnter",A="mouse",(e==="pointerout"||e==="pointerover")&&(ae=fd,Y="onPointerLeave",j="onPointerEnter",A="pointer"),je=N==null?U:Qi(N),M=re==null?U:Qi(re),U=new ae(Y,A+"leave",N,a,H),U.target=je,U.relatedTarget=M,Y=null,Ma(H)===_&&(ae=new ae(j,A+"enter",re,a,H),ae.target=M,ae.relatedTarget=je,Y=ae),je=Y,N&&re)t:{for(ae=N,j=re,A=0,M=ae;M;M=di(M))A++;for(M=0,Y=j;Y;Y=di(Y))M++;for(;0<A-M;)ae=di(ae),A--;for(;0<M-A;)j=di(j),M--;for(;A--;){if(ae===j||j!==null&&ae===j.alternate)break t;ae=di(ae),j=di(j)}ae=null}else ae=null;N!==null&&e0(Q,U,N,ae,!1),re!==null&&je!==null&&e0(Q,je,re,ae,!0)}}e:{if(U=_?Qi(_):window,N=U.nodeName&&U.nodeName.toLowerCase(),N==="select"||N==="input"&&U.type==="file")var W=bd;else if(yd(U))if(xd)W=Dv;else{W=jv;var pe=Cv}else N=U.nodeName,!N||N.toLowerCase()!=="input"||U.type!=="checkbox"&&U.type!=="radio"?_&&hu(_.elementType)&&(W=bd):W=zv;if(W&&(W=W(e,_))){vd(Q,W,a,H);break e}pe&&pe(e,U,_),e==="focusout"&&_&&U.type==="number"&&_.memoizedProps.value!=null&&du(U,"number",U.value)}switch(pe=_?Qi(_):window,e){case"focusin":(yd(pe)||pe.contentEditable==="true")&&(Qa=pe,Au=_,Pi=null);break;case"focusout":Pi=Au=Qa=null;break;case"mousedown":Cu=!0;break;case"contextmenu":case"mouseup":case"dragend":Cu=!1,Cd(Q,a,H);break;case"selectionchange":if(_v)break;case"keydown":case"keyup":Cd(Q,a,H)}var I;if(Eu)e:{switch(e){case"compositionstart":var le="onCompositionStart";break e;case"compositionend":le="onCompositionEnd";break e;case"compositionupdate":le="onCompositionUpdate";break e}le=void 0}else Ya?md(e,a)&&(le="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(le="onCompositionStart");le&&(dd&&a.locale!=="ko"&&(Ya||le!=="onCompositionStart"?le==="onCompositionEnd"&&Ya&&(I=sd()):(Dn=H,vu="value"in Dn?Dn.value:Dn.textContent,Ya=!0)),pe=Wr(_,le),0<pe.length&&(le=new cd(le,e,null,a,H),Q.push({event:le,listeners:pe}),I?le.data=I:(I=gd(a),I!==null&&(le.data=I)))),(I=Ev?Rv(e,a):Tv(e,a))&&(le=Wr(_,"onBeforeInput"),0<le.length&&(pe=new cd("onBeforeInput","beforeinput",null,a,H),Q.push({event:pe,listeners:le}),pe.data=I)),m1(Q,e,_,a,H)}Wp(Q,t)})}function Tl(e,t,a){return{instance:e,listener:t,currentTarget:a}}function Wr(e,t){for(var a=t+"Capture",i=[];e!==null;){var u=e,o=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||o===null||(u=Gi(e,a),u!=null&&i.unshift(Tl(e,u,o)),u=Gi(e,t),u!=null&&i.push(Tl(e,u,o))),e.tag===3)return i;e=e.return}return[]}function di(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function e0(e,t,a,i,u){for(var o=t._reactName,h=[];a!==null&&a!==i;){var b=a,S=b.alternate,_=b.stateNode;if(b=b.tag,S!==null&&S===i)break;b!==5&&b!==26&&b!==27||_===null||(S=_,u?(_=Gi(a,o),_!=null&&h.unshift(Tl(a,_,S))):u||(_=Gi(a,o),_!=null&&h.push(Tl(a,_,S)))),a=a.return}h.length!==0&&e.push({event:t,listeners:h})}var b1=/\r\n?/g,x1=/\u0000|\uFFFD/g;function t0(e){return(typeof e=="string"?e:""+e).replace(b1,`
`).replace(x1,"")}function n0(e,t){return t=t0(t),t0(e)===t}function Ir(){}function Ce(e,t,a,i,u,o){switch(a){case"children":typeof i=="string"?t==="body"||t==="textarea"&&i===""||qa(e,i):(typeof i=="number"||typeof i=="bigint")&&t!=="body"&&qa(e,""+i);break;case"className":ir(e,"class",i);break;case"tabIndex":ir(e,"tabindex",i);break;case"dir":case"role":case"viewBox":case"width":case"height":ir(e,a,i);break;case"style":id(e,i,o);break;case"data":if(t!=="object"){ir(e,"data",i);break}case"src":case"href":if(i===""&&(t!=="a"||a!=="href")){e.removeAttribute(a);break}if(i==null||typeof i=="function"||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(a);break}i=sr(""+i),e.setAttribute(a,i);break;case"action":case"formAction":if(typeof i=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof o=="function"&&(a==="formAction"?(t!=="input"&&Ce(e,t,"name",u.name,u,null),Ce(e,t,"formEncType",u.formEncType,u,null),Ce(e,t,"formMethod",u.formMethod,u,null),Ce(e,t,"formTarget",u.formTarget,u,null)):(Ce(e,t,"encType",u.encType,u,null),Ce(e,t,"method",u.method,u,null),Ce(e,t,"target",u.target,u,null)));if(i==null||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(a);break}i=sr(""+i),e.setAttribute(a,i);break;case"onClick":i!=null&&(e.onclick=Ir);break;case"onScroll":i!=null&&be("scroll",e);break;case"onScrollEnd":i!=null&&be("scrollend",e);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(s(61));if(a=i.__html,a!=null){if(u.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"multiple":e.multiple=i&&typeof i!="function"&&typeof i!="symbol";break;case"muted":e.muted=i&&typeof i!="function"&&typeof i!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(i==null||typeof i=="function"||typeof i=="boolean"||typeof i=="symbol"){e.removeAttribute("xlink:href");break}a=sr(""+i),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(a,""+i):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":i&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":i===!0?e.setAttribute(a,""):i!==!1&&i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(a,i):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":i!=null&&typeof i!="function"&&typeof i!="symbol"&&!isNaN(i)&&1<=i?e.setAttribute(a,i):e.removeAttribute(a);break;case"rowSpan":case"start":i==null||typeof i=="function"||typeof i=="symbol"||isNaN(i)?e.removeAttribute(a):e.setAttribute(a,i);break;case"popover":be("beforetoggle",e),be("toggle",e),ar(e,"popover",i);break;case"xlinkActuate":cn(e,"http://www.w3.org/1999/xlink","xlink:actuate",i);break;case"xlinkArcrole":cn(e,"http://www.w3.org/1999/xlink","xlink:arcrole",i);break;case"xlinkRole":cn(e,"http://www.w3.org/1999/xlink","xlink:role",i);break;case"xlinkShow":cn(e,"http://www.w3.org/1999/xlink","xlink:show",i);break;case"xlinkTitle":cn(e,"http://www.w3.org/1999/xlink","xlink:title",i);break;case"xlinkType":cn(e,"http://www.w3.org/1999/xlink","xlink:type",i);break;case"xmlBase":cn(e,"http://www.w3.org/XML/1998/namespace","xml:base",i);break;case"xmlLang":cn(e,"http://www.w3.org/XML/1998/namespace","xml:lang",i);break;case"xmlSpace":cn(e,"http://www.w3.org/XML/1998/namespace","xml:space",i);break;case"is":ar(e,"is",i);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Jy.get(a)||a,ar(e,a,i))}}function Wo(e,t,a,i,u,o){switch(a){case"style":id(e,i,o);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(s(61));if(a=i.__html,a!=null){if(u.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"children":typeof i=="string"?qa(e,i):(typeof i=="number"||typeof i=="bigint")&&qa(e,""+i);break;case"onScroll":i!=null&&be("scroll",e);break;case"onScrollEnd":i!=null&&be("scrollend",e);break;case"onClick":i!=null&&(e.onclick=Ir);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Vf.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),t=a.slice(2,u?a.length-7:void 0),o=e[dt]||null,o=o!=null?o[a]:null,typeof o=="function"&&e.removeEventListener(t,o,u),typeof i=="function")){typeof o!="function"&&o!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(t,i,u);break e}a in e?e[a]=i:i===!0?e.setAttribute(a,""):ar(e,a,i)}}}function at(e,t,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":be("error",e),be("load",e);var i=!1,u=!1,o;for(o in a)if(a.hasOwnProperty(o)){var h=a[o];if(h!=null)switch(o){case"src":i=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,t));default:Ce(e,t,o,h,a,null)}}u&&Ce(e,t,"srcSet",a.srcSet,a,null),i&&Ce(e,t,"src",a.src,a,null);return;case"input":be("invalid",e);var b=o=h=u=null,S=null,_=null;for(i in a)if(a.hasOwnProperty(i)){var H=a[i];if(H!=null)switch(i){case"name":u=H;break;case"type":h=H;break;case"checked":S=H;break;case"defaultChecked":_=H;break;case"value":o=H;break;case"defaultValue":b=H;break;case"children":case"dangerouslySetInnerHTML":if(H!=null)throw Error(s(137,t));break;default:Ce(e,t,i,H,a,null)}}ed(e,o,b,S,_,h,u,!1),lr(e);return;case"select":be("invalid",e),i=h=o=null;for(u in a)if(a.hasOwnProperty(u)&&(b=a[u],b!=null))switch(u){case"value":o=b;break;case"defaultValue":h=b;break;case"multiple":i=b;default:Ce(e,t,u,b,a,null)}t=o,a=h,e.multiple=!!i,t!=null?La(e,!!i,t,!1):a!=null&&La(e,!!i,a,!0);return;case"textarea":be("invalid",e),o=u=i=null;for(h in a)if(a.hasOwnProperty(h)&&(b=a[h],b!=null))switch(h){case"value":i=b;break;case"defaultValue":u=b;break;case"children":o=b;break;case"dangerouslySetInnerHTML":if(b!=null)throw Error(s(91));break;default:Ce(e,t,h,b,a,null)}nd(e,i,u,o),lr(e);return;case"option":for(S in a)if(a.hasOwnProperty(S)&&(i=a[S],i!=null))switch(S){case"selected":e.selected=i&&typeof i!="function"&&typeof i!="symbol";break;default:Ce(e,t,S,i,a,null)}return;case"dialog":be("beforetoggle",e),be("toggle",e),be("cancel",e),be("close",e);break;case"iframe":case"object":be("load",e);break;case"video":case"audio":for(i=0;i<Rl.length;i++)be(Rl[i],e);break;case"image":be("error",e),be("load",e);break;case"details":be("toggle",e);break;case"embed":case"source":case"link":be("error",e),be("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(_ in a)if(a.hasOwnProperty(_)&&(i=a[_],i!=null))switch(_){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,t));default:Ce(e,t,_,i,a,null)}return;default:if(hu(t)){for(H in a)a.hasOwnProperty(H)&&(i=a[H],i!==void 0&&Wo(e,t,H,i,a,void 0));return}}for(b in a)a.hasOwnProperty(b)&&(i=a[b],i!=null&&Ce(e,t,b,i,a,null))}function S1(e,t,a,i){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,o=null,h=null,b=null,S=null,_=null,H=null;for(N in a){var Q=a[N];if(a.hasOwnProperty(N)&&Q!=null)switch(N){case"checked":break;case"value":break;case"defaultValue":S=Q;default:i.hasOwnProperty(N)||Ce(e,t,N,null,i,Q)}}for(var U in i){var N=i[U];if(Q=a[U],i.hasOwnProperty(U)&&(N!=null||Q!=null))switch(U){case"type":o=N;break;case"name":u=N;break;case"checked":_=N;break;case"defaultChecked":H=N;break;case"value":h=N;break;case"defaultValue":b=N;break;case"children":case"dangerouslySetInnerHTML":if(N!=null)throw Error(s(137,t));break;default:N!==Q&&Ce(e,t,U,N,i,Q)}}fu(e,h,b,S,_,H,o,u);return;case"select":N=h=b=U=null;for(o in a)if(S=a[o],a.hasOwnProperty(o)&&S!=null)switch(o){case"value":break;case"multiple":N=S;default:i.hasOwnProperty(o)||Ce(e,t,o,null,i,S)}for(u in i)if(o=i[u],S=a[u],i.hasOwnProperty(u)&&(o!=null||S!=null))switch(u){case"value":U=o;break;case"defaultValue":b=o;break;case"multiple":h=o;default:o!==S&&Ce(e,t,u,o,i,S)}t=b,a=h,i=N,U!=null?La(e,!!a,U,!1):!!i!=!!a&&(t!=null?La(e,!!a,t,!0):La(e,!!a,a?[]:"",!1));return;case"textarea":N=U=null;for(b in a)if(u=a[b],a.hasOwnProperty(b)&&u!=null&&!i.hasOwnProperty(b))switch(b){case"value":break;case"children":break;default:Ce(e,t,b,null,i,u)}for(h in i)if(u=i[h],o=a[h],i.hasOwnProperty(h)&&(u!=null||o!=null))switch(h){case"value":U=u;break;case"defaultValue":N=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(s(91));break;default:u!==o&&Ce(e,t,h,u,i,o)}td(e,U,N);return;case"option":for(var re in a)if(U=a[re],a.hasOwnProperty(re)&&U!=null&&!i.hasOwnProperty(re))switch(re){case"selected":e.selected=!1;break;default:Ce(e,t,re,null,i,U)}for(S in i)if(U=i[S],N=a[S],i.hasOwnProperty(S)&&U!==N&&(U!=null||N!=null))switch(S){case"selected":e.selected=U&&typeof U!="function"&&typeof U!="symbol";break;default:Ce(e,t,S,U,i,N)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ae in a)U=a[ae],a.hasOwnProperty(ae)&&U!=null&&!i.hasOwnProperty(ae)&&Ce(e,t,ae,null,i,U);for(_ in i)if(U=i[_],N=a[_],i.hasOwnProperty(_)&&U!==N&&(U!=null||N!=null))switch(_){case"children":case"dangerouslySetInnerHTML":if(U!=null)throw Error(s(137,t));break;default:Ce(e,t,_,U,i,N)}return;default:if(hu(t)){for(var je in a)U=a[je],a.hasOwnProperty(je)&&U!==void 0&&!i.hasOwnProperty(je)&&Wo(e,t,je,void 0,i,U);for(H in i)U=i[H],N=a[H],!i.hasOwnProperty(H)||U===N||U===void 0&&N===void 0||Wo(e,t,H,U,i,N);return}}for(var j in a)U=a[j],a.hasOwnProperty(j)&&U!=null&&!i.hasOwnProperty(j)&&Ce(e,t,j,null,i,U);for(Q in i)U=i[Q],N=a[Q],!i.hasOwnProperty(Q)||U===N||U==null&&N==null||Ce(e,t,Q,U,i,N)}var Io=null,ec=null;function es(e){return e.nodeType===9?e:e.ownerDocument}function a0(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function i0(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function tc(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var nc=null;function w1(){var e=window.event;return e&&e.type==="popstate"?e===nc?!1:(nc=e,!0):(nc=null,!1)}var l0=typeof setTimeout=="function"?setTimeout:void 0,E1=typeof clearTimeout=="function"?clearTimeout:void 0,r0=typeof Promise=="function"?Promise:void 0,R1=typeof queueMicrotask=="function"?queueMicrotask:typeof r0<"u"?function(e){return r0.resolve(null).then(e).catch(T1)}:l0;function T1(e){setTimeout(function(){throw e})}function Vn(e){return e==="head"}function s0(e,t){var a=t,i=0,u=0;do{var o=a.nextSibling;if(e.removeChild(a),o&&o.nodeType===8)if(a=o.data,a==="/$"){if(0<i&&8>i){a=i;var h=e.ownerDocument;if(a&1&&Ol(h.documentElement),a&2&&Ol(h.body),a&4)for(a=h.head,Ol(a),h=a.firstChild;h;){var b=h.nextSibling,S=h.nodeName;h[Yi]||S==="SCRIPT"||S==="STYLE"||S==="LINK"&&h.rel.toLowerCase()==="stylesheet"||a.removeChild(h),h=b}}if(u===0){e.removeChild(o),Ul(t);return}u--}else a==="$"||a==="$?"||a==="$!"?u++:i=a.charCodeAt(0)-48;else i=0;a=o}while(a);Ul(t)}function ac(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var a=t;switch(t=t.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":ac(a),su(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function O1(e,t,a,i){for(;e.nodeType===1;){var u=a;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!i&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(i){if(!e[Yi])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(o=e.getAttribute("rel"),o==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(o!==u.rel||e.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||e.getAttribute("title")!==(u.title==null?null:u.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(o=e.getAttribute("src"),(o!==(u.src==null?null:u.src)||e.getAttribute("type")!==(u.type==null?null:u.type)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&o&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var o=u.name==null?null:""+u.name;if(u.type==="hidden"&&e.getAttribute("name")===o)return e}else return e;if(e=Kt(e.nextSibling),e===null)break}return null}function A1(e,t,a){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=Kt(e.nextSibling),e===null))return null;return e}function ic(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function C1(e,t){var a=e.ownerDocument;if(e.data!=="$?"||a.readyState==="complete")t();else{var i=function(){t(),a.removeEventListener("DOMContentLoaded",i)};a.addEventListener("DOMContentLoaded",i),e._reactRetry=i}}function Kt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="F!"||t==="F")break;if(t==="/$")return null}}return e}var lc=null;function u0(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"){if(t===0)return e;t--}else a==="/$"&&t++}e=e.previousSibling}return null}function o0(e,t,a){switch(t=es(a),e){case"html":if(e=t.documentElement,!e)throw Error(s(452));return e;case"head":if(e=t.head,!e)throw Error(s(453));return e;case"body":if(e=t.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function Ol(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);su(e)}var kt=new Map,c0=new Set;function ts(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Rn=Z.d;Z.d={f:j1,r:z1,D:D1,C:M1,L:_1,m:U1,X:B1,S:N1,M:L1};function j1(){var e=Rn.f(),t=Kr();return e||t}function z1(e){var t=_a(e);t!==null&&t.tag===5&&t.type==="form"?zh(t):Rn.r(e)}var hi=typeof document>"u"?null:document;function f0(e,t,a){var i=hi;if(i&&typeof t=="string"&&t){var u=_t(t);u='link[rel="'+e+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),c0.has(u)||(c0.add(u),e={rel:e,crossOrigin:a,href:t},i.querySelector(u)===null&&(t=i.createElement("link"),at(t,"link",e),Je(t),i.head.appendChild(t)))}}function D1(e){Rn.D(e),f0("dns-prefetch",e,null)}function M1(e,t){Rn.C(e,t),f0("preconnect",e,t)}function _1(e,t,a){Rn.L(e,t,a);var i=hi;if(i&&e&&t){var u='link[rel="preload"][as="'+_t(t)+'"]';t==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+_t(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+_t(a.imageSizes)+'"]')):u+='[href="'+_t(e)+'"]';var o=u;switch(t){case"style":o=pi(e);break;case"script":o=mi(e)}kt.has(o)||(e=v({rel:"preload",href:t==="image"&&a&&a.imageSrcSet?void 0:e,as:t},a),kt.set(o,e),i.querySelector(u)!==null||t==="style"&&i.querySelector(Al(o))||t==="script"&&i.querySelector(Cl(o))||(t=i.createElement("link"),at(t,"link",e),Je(t),i.head.appendChild(t)))}}function U1(e,t){Rn.m(e,t);var a=hi;if(a&&e){var i=t&&typeof t.as=="string"?t.as:"script",u='link[rel="modulepreload"][as="'+_t(i)+'"][href="'+_t(e)+'"]',o=u;switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":o=mi(e)}if(!kt.has(o)&&(e=v({rel:"modulepreload",href:e},t),kt.set(o,e),a.querySelector(u)===null)){switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Cl(o)))return}i=a.createElement("link"),at(i,"link",e),Je(i),a.head.appendChild(i)}}}function N1(e,t,a){Rn.S(e,t,a);var i=hi;if(i&&e){var u=Ua(i).hoistableStyles,o=pi(e);t=t||"default";var h=u.get(o);if(!h){var b={loading:0,preload:null};if(h=i.querySelector(Al(o)))b.loading=5;else{e=v({rel:"stylesheet",href:e,"data-precedence":t},a),(a=kt.get(o))&&rc(e,a);var S=h=i.createElement("link");Je(S),at(S,"link",e),S._p=new Promise(function(_,H){S.onload=_,S.onerror=H}),S.addEventListener("load",function(){b.loading|=1}),S.addEventListener("error",function(){b.loading|=2}),b.loading|=4,ns(h,t,i)}h={type:"stylesheet",instance:h,count:1,state:b},u.set(o,h)}}}function B1(e,t){Rn.X(e,t);var a=hi;if(a&&e){var i=Ua(a).hoistableScripts,u=mi(e),o=i.get(u);o||(o=a.querySelector(Cl(u)),o||(e=v({src:e,async:!0},t),(t=kt.get(u))&&sc(e,t),o=a.createElement("script"),Je(o),at(o,"link",e),a.head.appendChild(o)),o={type:"script",instance:o,count:1,state:null},i.set(u,o))}}function L1(e,t){Rn.M(e,t);var a=hi;if(a&&e){var i=Ua(a).hoistableScripts,u=mi(e),o=i.get(u);o||(o=a.querySelector(Cl(u)),o||(e=v({src:e,async:!0,type:"module"},t),(t=kt.get(u))&&sc(e,t),o=a.createElement("script"),Je(o),at(o,"link",e),a.head.appendChild(o)),o={type:"script",instance:o,count:1,state:null},i.set(u,o))}}function d0(e,t,a,i){var u=(u=ie.current)?ts(u):null;if(!u)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(t=pi(a.href),a=Ua(u).hoistableStyles,i=a.get(t),i||(i={type:"style",instance:null,count:0,state:null},a.set(t,i)),i):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=pi(a.href);var o=Ua(u).hoistableStyles,h=o.get(e);if(h||(u=u.ownerDocument||u,h={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},o.set(e,h),(o=u.querySelector(Al(e)))&&!o._p&&(h.instance=o,h.state.loading=5),kt.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},kt.set(e,a),o||q1(u,e,a,h.state))),t&&i===null)throw Error(s(528,""));return h}if(t&&i!==null)throw Error(s(529,""));return null;case"script":return t=a.async,a=a.src,typeof a=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=mi(a),a=Ua(u).hoistableScripts,i=a.get(t),i||(i={type:"script",instance:null,count:0,state:null},a.set(t,i)),i):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function pi(e){return'href="'+_t(e)+'"'}function Al(e){return'link[rel="stylesheet"]['+e+"]"}function h0(e){return v({},e,{"data-precedence":e.precedence,precedence:null})}function q1(e,t,a,i){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?i.loading=1:(t=e.createElement("link"),i.preload=t,t.addEventListener("load",function(){return i.loading|=1}),t.addEventListener("error",function(){return i.loading|=2}),at(t,"link",a),Je(t),e.head.appendChild(t))}function mi(e){return'[src="'+_t(e)+'"]'}function Cl(e){return"script[async]"+e}function p0(e,t,a){if(t.count++,t.instance===null)switch(t.type){case"style":var i=e.querySelector('style[data-href~="'+_t(a.href)+'"]');if(i)return t.instance=i,Je(i),i;var u=v({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return i=(e.ownerDocument||e).createElement("style"),Je(i),at(i,"style",u),ns(i,a.precedence,e),t.instance=i;case"stylesheet":u=pi(a.href);var o=e.querySelector(Al(u));if(o)return t.state.loading|=4,t.instance=o,Je(o),o;i=h0(a),(u=kt.get(u))&&rc(i,u),o=(e.ownerDocument||e).createElement("link"),Je(o);var h=o;return h._p=new Promise(function(b,S){h.onload=b,h.onerror=S}),at(o,"link",i),t.state.loading|=4,ns(o,a.precedence,e),t.instance=o;case"script":return o=mi(a.src),(u=e.querySelector(Cl(o)))?(t.instance=u,Je(u),u):(i=a,(u=kt.get(o))&&(i=v({},a),sc(i,u)),e=e.ownerDocument||e,u=e.createElement("script"),Je(u),at(u,"link",i),e.head.appendChild(u),t.instance=u);case"void":return null;default:throw Error(s(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(i=t.instance,t.state.loading|=4,ns(i,a.precedence,e));return t.instance}function ns(e,t,a){for(var i=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=i.length?i[i.length-1]:null,o=u,h=0;h<i.length;h++){var b=i[h];if(b.dataset.precedence===t)o=b;else if(o!==u)break}o?o.parentNode.insertBefore(e,o.nextSibling):(t=a.nodeType===9?a.head:a,t.insertBefore(e,t.firstChild))}function rc(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function sc(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var as=null;function m0(e,t,a){if(as===null){var i=new Map,u=as=new Map;u.set(a,i)}else u=as,i=u.get(a),i||(i=new Map,u.set(a,i));if(i.has(e))return i;for(i.set(e,null),a=a.getElementsByTagName(e),u=0;u<a.length;u++){var o=a[u];if(!(o[Yi]||o[lt]||e==="link"&&o.getAttribute("rel")==="stylesheet")&&o.namespaceURI!=="http://www.w3.org/2000/svg"){var h=o.getAttribute(t)||"";h=e+h;var b=i.get(h);b?b.push(o):i.set(h,[o])}}return i}function g0(e,t,a){e=e.ownerDocument||e,e.head.insertBefore(a,t==="title"?e.querySelector("head > title"):null)}function H1(e,t,a){if(a===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function y0(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var jl=null;function k1(){}function Y1(e,t,a){if(jl===null)throw Error(s(475));var i=jl;if(t.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(t.state.loading&4)===0){if(t.instance===null){var u=pi(a.href),o=e.querySelector(Al(u));if(o){e=o._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(i.count++,i=is.bind(i),e.then(i,i)),t.state.loading|=4,t.instance=o,Je(o);return}o=e.ownerDocument||e,a=h0(a),(u=kt.get(u))&&rc(a,u),o=o.createElement("link"),Je(o);var h=o;h._p=new Promise(function(b,S){h.onload=b,h.onerror=S}),at(o,"link",a),t.instance=o}i.stylesheets===null&&(i.stylesheets=new Map),i.stylesheets.set(t,e),(e=t.state.preload)&&(t.state.loading&3)===0&&(i.count++,t=is.bind(i),e.addEventListener("load",t),e.addEventListener("error",t))}}function Q1(){if(jl===null)throw Error(s(475));var e=jl;return e.stylesheets&&e.count===0&&uc(e,e.stylesheets),0<e.count?function(t){var a=setTimeout(function(){if(e.stylesheets&&uc(e,e.stylesheets),e.unsuspend){var i=e.unsuspend;e.unsuspend=null,i()}},6e4);return e.unsuspend=t,function(){e.unsuspend=null,clearTimeout(a)}}:null}function is(){if(this.count--,this.count===0){if(this.stylesheets)uc(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var ls=null;function uc(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,ls=new Map,t.forEach(G1,e),ls=null,is.call(e))}function G1(e,t){if(!(t.state.loading&4)){var a=ls.get(e);if(a)var i=a.get(null);else{a=new Map,ls.set(e,a);for(var u=e.querySelectorAll("link[data-precedence],style[data-precedence]"),o=0;o<u.length;o++){var h=u[o];(h.nodeName==="LINK"||h.getAttribute("media")!=="not all")&&(a.set(h.dataset.precedence,h),i=h)}i&&a.set(null,i)}u=t.instance,h=u.getAttribute("data-precedence"),o=a.get(h)||i,o===i&&a.set(null,u),a.set(h,u),this.count++,i=is.bind(this),u.addEventListener("load",i),u.addEventListener("error",i),o?o.parentNode.insertBefore(u,o.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(u,e.firstChild)),t.state.loading|=4}}var zl={$$typeof:$,Provider:null,Consumer:null,_currentValue:ne,_currentValue2:ne,_threadCount:0};function $1(e,t,a,i,u,o,h,b){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=au(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=au(0),this.hiddenUpdates=au(null),this.identifierPrefix=i,this.onUncaughtError=u,this.onCaughtError=o,this.onRecoverableError=h,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=b,this.incompleteTransitions=new Map}function v0(e,t,a,i,u,o,h,b,S,_,H,Q){return e=new $1(e,t,a,h,b,S,_,Q),t=1,o===!0&&(t|=24),o=wt(3,null,null,t),e.current=o,o.stateNode=e,t=Qu(),t.refCount++,e.pooledCache=t,t.refCount++,o.memoizedState={element:i,isDehydrated:a,cache:t},Ku(o),e}function b0(e){return e?(e=Ka,e):Ka}function x0(e,t,a,i,u,o){u=b0(u),i.context===null?i.context=u:i.pendingContext=u,i=Un(t),i.payload={element:a},o=o===void 0?null:o,o!==null&&(i.callback=o),a=Nn(e,i,t),a!==null&&(At(a,e,t),rl(a,e,t))}function S0(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<t?a:t}}function oc(e,t){S0(e,t),(e=e.alternate)&&S0(e,t)}function w0(e){if(e.tag===13){var t=Xa(e,67108864);t!==null&&At(t,e,67108864),oc(e,67108864)}}var rs=!0;function X1(e,t,a,i){var u=q.T;q.T=null;var o=Z.p;try{Z.p=2,cc(e,t,a,i)}finally{Z.p=o,q.T=u}}function K1(e,t,a,i){var u=q.T;q.T=null;var o=Z.p;try{Z.p=8,cc(e,t,a,i)}finally{Z.p=o,q.T=u}}function cc(e,t,a,i){if(rs){var u=fc(i);if(u===null)Po(e,t,i,ss,a),R0(e,i);else if(Z1(u,e,t,a,i))i.stopPropagation();else if(R0(e,i),t&4&&-1<V1.indexOf(e)){for(;u!==null;){var o=_a(u);if(o!==null)switch(o.tag){case 3:if(o=o.stateNode,o.current.memoizedState.isDehydrated){var h=aa(o.pendingLanes);if(h!==0){var b=o;for(b.pendingLanes|=2,b.entangledLanes|=2;h;){var S=1<<31-xt(h);b.entanglements[1]|=S,h&=~S}an(o),(Te&6)===0&&($r=Wt()+500,El(0))}}break;case 13:b=Xa(o,2),b!==null&&At(b,o,2),Kr(),oc(o,2)}if(o=fc(i),o===null&&Po(e,t,i,ss,a),o===u)break;u=o}u!==null&&i.stopPropagation()}else Po(e,t,i,null,a)}}function fc(e){return e=mu(e),dc(e)}var ss=null;function dc(e){if(ss=null,e=Ma(e),e!==null){var t=f(e);if(t===null)e=null;else{var a=t.tag;if(a===13){if(e=d(t),e!==null)return e;e=null}else if(a===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return ss=e,null}function E0(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(My()){case Lf:return 2;case qf:return 8;case Il:case _y:return 32;case Hf:return 268435456;default:return 32}default:return 32}}var hc=!1,Zn=null,Fn=null,Jn=null,Dl=new Map,Ml=new Map,Pn=[],V1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function R0(e,t){switch(e){case"focusin":case"focusout":Zn=null;break;case"dragenter":case"dragleave":Fn=null;break;case"mouseover":case"mouseout":Jn=null;break;case"pointerover":case"pointerout":Dl.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ml.delete(t.pointerId)}}function _l(e,t,a,i,u,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:a,eventSystemFlags:i,nativeEvent:o,targetContainers:[u]},t!==null&&(t=_a(t),t!==null&&w0(t)),e):(e.eventSystemFlags|=i,t=e.targetContainers,u!==null&&t.indexOf(u)===-1&&t.push(u),e)}function Z1(e,t,a,i,u){switch(t){case"focusin":return Zn=_l(Zn,e,t,a,i,u),!0;case"dragenter":return Fn=_l(Fn,e,t,a,i,u),!0;case"mouseover":return Jn=_l(Jn,e,t,a,i,u),!0;case"pointerover":var o=u.pointerId;return Dl.set(o,_l(Dl.get(o)||null,e,t,a,i,u)),!0;case"gotpointercapture":return o=u.pointerId,Ml.set(o,_l(Ml.get(o)||null,e,t,a,i,u)),!0}return!1}function T0(e){var t=Ma(e.target);if(t!==null){var a=f(t);if(a!==null){if(t=a.tag,t===13){if(t=d(a),t!==null){e.blockedOn=t,Yy(e.priority,function(){if(a.tag===13){var i=Ot();i=iu(i);var u=Xa(a,i);u!==null&&At(u,a,i),oc(a,i)}});return}}else if(t===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function us(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var a=fc(e.nativeEvent);if(a===null){a=e.nativeEvent;var i=new a.constructor(a.type,a);pu=i,a.target.dispatchEvent(i),pu=null}else return t=_a(a),t!==null&&w0(t),e.blockedOn=a,!1;t.shift()}return!0}function O0(e,t,a){us(e)&&a.delete(t)}function F1(){hc=!1,Zn!==null&&us(Zn)&&(Zn=null),Fn!==null&&us(Fn)&&(Fn=null),Jn!==null&&us(Jn)&&(Jn=null),Dl.forEach(O0),Ml.forEach(O0)}function os(e,t){e.blockedOn===t&&(e.blockedOn=null,hc||(hc=!0,n.unstable_scheduleCallback(n.unstable_NormalPriority,F1)))}var cs=null;function A0(e){cs!==e&&(cs=e,n.unstable_scheduleCallback(n.unstable_NormalPriority,function(){cs===e&&(cs=null);for(var t=0;t<e.length;t+=3){var a=e[t],i=e[t+1],u=e[t+2];if(typeof i!="function"){if(dc(i||a)===null)continue;break}var o=_a(a);o!==null&&(e.splice(t,3),t-=3,fo(o,{pending:!0,data:u,method:a.method,action:i},i,u))}}))}function Ul(e){function t(S){return os(S,e)}Zn!==null&&os(Zn,e),Fn!==null&&os(Fn,e),Jn!==null&&os(Jn,e),Dl.forEach(t),Ml.forEach(t);for(var a=0;a<Pn.length;a++){var i=Pn[a];i.blockedOn===e&&(i.blockedOn=null)}for(;0<Pn.length&&(a=Pn[0],a.blockedOn===null);)T0(a),a.blockedOn===null&&Pn.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(i=0;i<a.length;i+=3){var u=a[i],o=a[i+1],h=u[dt]||null;if(typeof o=="function")h||A0(a);else if(h){var b=null;if(o&&o.hasAttribute("formAction")){if(u=o,h=o[dt]||null)b=h.formAction;else if(dc(u)!==null)continue}else b=h.action;typeof b=="function"?a[i+1]=b:(a.splice(i,3),i-=3),A0(a)}}}function pc(e){this._internalRoot=e}fs.prototype.render=pc.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(s(409));var a=t.current,i=Ot();x0(a,i,e,t,null,null)},fs.prototype.unmount=pc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;x0(e.current,2,null,e,null,null),Kr(),t[Da]=null}};function fs(e){this._internalRoot=e}fs.prototype.unstable_scheduleHydration=function(e){if(e){var t=$f();e={blockedOn:null,target:e,priority:t};for(var a=0;a<Pn.length&&t!==0&&t<Pn[a].priority;a++);Pn.splice(a,0,e),a===0&&T0(e)}};var C0=l.version;if(C0!=="19.1.1")throw Error(s(527,C0,"19.1.1"));Z.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=y(t),e=e!==null?p(e):null,e=e===null?null:e.stateNode,e};var J1={bundleType:0,version:"19.1.1",rendererPackageName:"react-dom",currentDispatcherRef:q,reconcilerVersion:"19.1.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ds=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ds.isDisabled&&ds.supportsFiber)try{qi=ds.inject(J1),bt=ds}catch{}}return Bl.createRoot=function(e,t){if(!c(e))throw Error(s(299));var a=!1,i="",u=$h,o=Xh,h=Kh,b=null;return t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onUncaughtError!==void 0&&(u=t.onUncaughtError),t.onCaughtError!==void 0&&(o=t.onCaughtError),t.onRecoverableError!==void 0&&(h=t.onRecoverableError),t.unstable_transitionCallbacks!==void 0&&(b=t.unstable_transitionCallbacks)),t=v0(e,1,!1,null,null,a,i,u,o,h,b,null),e[Da]=t.current,Jo(e),new pc(t)},Bl.hydrateRoot=function(e,t,a){if(!c(e))throw Error(s(299));var i=!1,u="",o=$h,h=Xh,b=Kh,S=null,_=null;return a!=null&&(a.unstable_strictMode===!0&&(i=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(o=a.onUncaughtError),a.onCaughtError!==void 0&&(h=a.onCaughtError),a.onRecoverableError!==void 0&&(b=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(S=a.unstable_transitionCallbacks),a.formState!==void 0&&(_=a.formState)),t=v0(e,1,!0,t,a??null,i,u,o,h,b,S,_),t.context=b0(null),a=t.current,i=Ot(),i=iu(i),u=Un(i),u.callback=null,Nn(a,u,i),a=i,t.current.lanes=a,ki(t,a),an(t),e[Da]=t.current,Jo(e),new fs(t)},Bl.version="19.1.1",Bl}var q0;function sb(){if(q0)return yc.exports;q0=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(l){console.error(l)}}return n(),yc.exports=rb(),yc.exports}var ub=sb();/**
 * react-router v7.8.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var H0="popstate";function ob(n={}){function l(s,c){let{pathname:f,search:d,hash:m}=s.location;return Hc("",{pathname:f,search:d,hash:m},c.state&&c.state.usr||null,c.state&&c.state.key||"default")}function r(s,c){return typeof c=="string"?c:Yl(c)}return fb(l,r,null,n)}function Be(n,l){if(n===!1||n===null||typeof n>"u")throw new Error(l)}function Zt(n,l){if(!n){typeof console<"u"&&console.warn(l);try{throw new Error(l)}catch{}}}function cb(){return Math.random().toString(36).substring(2,10)}function k0(n,l){return{usr:n.state,key:n.key,idx:l}}function Hc(n,l,r=null,s){return{pathname:typeof n=="string"?n:n.pathname,search:"",hash:"",...typeof l=="string"?Ai(l):l,state:r,key:l&&l.key||s||cb()}}function Yl({pathname:n="/",search:l="",hash:r=""}){return l&&l!=="?"&&(n+=l.charAt(0)==="?"?l:"?"+l),r&&r!=="#"&&(n+=r.charAt(0)==="#"?r:"#"+r),n}function Ai(n){let l={};if(n){let r=n.indexOf("#");r>=0&&(l.hash=n.substring(r),n=n.substring(0,r));let s=n.indexOf("?");s>=0&&(l.search=n.substring(s),n=n.substring(0,s)),n&&(l.pathname=n)}return l}function fb(n,l,r,s={}){let{window:c=document.defaultView,v5Compat:f=!1}=s,d=c.history,m="POP",y=null,p=v();p==null&&(p=0,d.replaceState({...d.state,idx:p},""));function v(){return(d.state||{idx:null}).idx}function x(){m="POP";let C=v(),k=C==null?null:C-p;p=C,y&&y({action:m,location:z.location,delta:k})}function T(C,k){m="PUSH";let L=Hc(z.location,C,k);p=v()+1;let $=k0(L,p),J=z.createHref(L);try{d.pushState($,"",J)}catch(X){if(X instanceof DOMException&&X.name==="DataCloneError")throw X;c.location.assign(J)}f&&y&&y({action:m,location:z.location,delta:1})}function D(C,k){m="REPLACE";let L=Hc(z.location,C,k);p=v();let $=k0(L,p),J=z.createHref(L);d.replaceState($,"",J),f&&y&&y({action:m,location:z.location,delta:0})}function R(C){return db(C)}let z={get action(){return m},get location(){return n(c,d)},listen(C){if(y)throw new Error("A history only accepts one active listener");return c.addEventListener(H0,x),y=C,()=>{c.removeEventListener(H0,x),y=null}},createHref(C){return l(c,C)},createURL:R,encodeLocation(C){let k=R(C);return{pathname:k.pathname,search:k.search,hash:k.hash}},push:T,replace:D,go(C){return d.go(C)}};return z}function db(n,l=!1){let r="http://localhost";typeof window<"u"&&(r=window.location.origin!=="null"?window.location.origin:window.location.href),Be(r,"No window.location.(origin|href) available to create URL");let s=typeof n=="string"?n:Yl(n);return s=s.replace(/ $/,"%20"),!l&&s.startsWith("//")&&(s=r+s),new URL(s,r)}function Ym(n,l,r="/"){return hb(n,l,r,!1)}function hb(n,l,r,s){let c=typeof l=="string"?Ai(l):l,f=Cn(c.pathname||"/",r);if(f==null)return null;let d=Qm(n);pb(d);let m=null;for(let y=0;m==null&&y<d.length;++y){let p=Tb(f);m=Eb(d[y],p,s)}return m}function Qm(n,l=[],r=[],s="",c=!1){let f=(d,m,y=c,p)=>{let v={relativePath:p===void 0?d.path||"":p,caseSensitive:d.caseSensitive===!0,childrenIndex:m,route:d};if(v.relativePath.startsWith("/")){if(!v.relativePath.startsWith(s)&&y)return;Be(v.relativePath.startsWith(s),`Absolute route path "${v.relativePath}" nested under path "${s}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),v.relativePath=v.relativePath.slice(s.length)}let x=An([s,v.relativePath]),T=r.concat(v);d.children&&d.children.length>0&&(Be(d.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${x}".`),Qm(d.children,l,T,x,y)),!(d.path==null&&!d.index)&&l.push({path:x,score:Sb(x,d.index),routesMeta:T})};return n.forEach((d,m)=>{if(d.path===""||!d.path?.includes("?"))f(d,m);else for(let y of Gm(d.path))f(d,m,!0,y)}),l}function Gm(n){let l=n.split("/");if(l.length===0)return[];let[r,...s]=l,c=r.endsWith("?"),f=r.replace(/\?$/,"");if(s.length===0)return c?[f,""]:[f];let d=Gm(s.join("/")),m=[];return m.push(...d.map(y=>y===""?f:[f,y].join("/"))),c&&m.push(...d),m.map(y=>n.startsWith("/")&&y===""?"/":y)}function pb(n){n.sort((l,r)=>l.score!==r.score?r.score-l.score:wb(l.routesMeta.map(s=>s.childrenIndex),r.routesMeta.map(s=>s.childrenIndex)))}var mb=/^:[\w-]+$/,gb=3,yb=2,vb=1,bb=10,xb=-2,Y0=n=>n==="*";function Sb(n,l){let r=n.split("/"),s=r.length;return r.some(Y0)&&(s+=xb),l&&(s+=yb),r.filter(c=>!Y0(c)).reduce((c,f)=>c+(mb.test(f)?gb:f===""?vb:bb),s)}function wb(n,l){return n.length===l.length&&n.slice(0,-1).every((s,c)=>s===l[c])?n[n.length-1]-l[l.length-1]:0}function Eb(n,l,r=!1){let{routesMeta:s}=n,c={},f="/",d=[];for(let m=0;m<s.length;++m){let y=s[m],p=m===s.length-1,v=f==="/"?l:l.slice(f.length)||"/",x=Cs({path:y.relativePath,caseSensitive:y.caseSensitive,end:p},v),T=y.route;if(!x&&p&&r&&!s[s.length-1].route.index&&(x=Cs({path:y.relativePath,caseSensitive:y.caseSensitive,end:!1},v)),!x)return null;Object.assign(c,x.params),d.push({params:c,pathname:An([f,x.pathname]),pathnameBase:jb(An([f,x.pathnameBase])),route:T}),x.pathnameBase!=="/"&&(f=An([f,x.pathnameBase]))}return d}function Cs(n,l){typeof n=="string"&&(n={path:n,caseSensitive:!1,end:!0});let[r,s]=Rb(n.path,n.caseSensitive,n.end),c=l.match(r);if(!c)return null;let f=c[0],d=f.replace(/(.)\/+$/,"$1"),m=c.slice(1);return{params:s.reduce((p,{paramName:v,isOptional:x},T)=>{if(v==="*"){let R=m[T]||"";d=f.slice(0,f.length-R.length).replace(/(.)\/+$/,"$1")}const D=m[T];return x&&!D?p[v]=void 0:p[v]=(D||"").replace(/%2F/g,"/"),p},{}),pathname:f,pathnameBase:d,pattern:n}}function Rb(n,l=!1,r=!0){Zt(n==="*"||!n.endsWith("*")||n.endsWith("/*"),`Route path "${n}" will be treated as if it were "${n.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${n.replace(/\*$/,"/*")}".`);let s=[],c="^"+n.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(d,m,y)=>(s.push({paramName:m,isOptional:y!=null}),y?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return n.endsWith("*")?(s.push({paramName:"*"}),c+=n==="*"||n==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):r?c+="\\/*$":n!==""&&n!=="/"&&(c+="(?:(?=\\/|$))"),[new RegExp(c,l?void 0:"i"),s]}function Tb(n){try{return n.split("/").map(l=>decodeURIComponent(l).replace(/\//g,"%2F")).join("/")}catch(l){return Zt(!1,`The URL path "${n}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${l}).`),n}}function Cn(n,l){if(l==="/")return n;if(!n.toLowerCase().startsWith(l.toLowerCase()))return null;let r=l.endsWith("/")?l.length-1:l.length,s=n.charAt(r);return s&&s!=="/"?null:n.slice(r)||"/"}function Ob(n,l="/"){let{pathname:r,search:s="",hash:c=""}=typeof n=="string"?Ai(n):n;return{pathname:r?r.startsWith("/")?r:Ab(r,l):l,search:zb(s),hash:Db(c)}}function Ab(n,l){let r=l.replace(/\/+$/,"").split("/");return n.split("/").forEach(c=>{c===".."?r.length>1&&r.pop():c!=="."&&r.push(c)}),r.length>1?r.join("/"):"/"}function Sc(n,l,r,s){return`Cannot include a '${n}' character in a manually specified \`to.${l}\` field [${JSON.stringify(s)}].  Please separate it out to the \`to.${r}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Cb(n){return n.filter((l,r)=>r===0||l.route.path&&l.route.path.length>0)}function ff(n){let l=Cb(n);return l.map((r,s)=>s===l.length-1?r.pathname:r.pathnameBase)}function df(n,l,r,s=!1){let c;typeof n=="string"?c=Ai(n):(c={...n},Be(!c.pathname||!c.pathname.includes("?"),Sc("?","pathname","search",c)),Be(!c.pathname||!c.pathname.includes("#"),Sc("#","pathname","hash",c)),Be(!c.search||!c.search.includes("#"),Sc("#","search","hash",c)));let f=n===""||c.pathname==="",d=f?"/":c.pathname,m;if(d==null)m=r;else{let x=l.length-1;if(!s&&d.startsWith("..")){let T=d.split("/");for(;T[0]==="..";)T.shift(),x-=1;c.pathname=T.join("/")}m=x>=0?l[x]:"/"}let y=Ob(c,m),p=d&&d!=="/"&&d.endsWith("/"),v=(f||d===".")&&r.endsWith("/");return!y.pathname.endsWith("/")&&(p||v)&&(y.pathname+="/"),y}var An=n=>n.join("/").replace(/\/\/+/g,"/"),jb=n=>n.replace(/\/+$/,"").replace(/^\/*/,"/"),zb=n=>!n||n==="?"?"":n.startsWith("?")?n:"?"+n,Db=n=>!n||n==="#"?"":n.startsWith("#")?n:"#"+n;function Mb(n){return n!=null&&typeof n.status=="number"&&typeof n.statusText=="string"&&typeof n.internal=="boolean"&&"data"in n}var $m=["POST","PUT","PATCH","DELETE"];new Set($m);var _b=["GET",...$m];new Set(_b);var Ci=w.createContext(null);Ci.displayName="DataRouter";var Hs=w.createContext(null);Hs.displayName="DataRouterState";w.createContext(!1);var Xm=w.createContext({isTransitioning:!1});Xm.displayName="ViewTransition";var Ub=w.createContext(new Map);Ub.displayName="Fetchers";var Nb=w.createContext(null);Nb.displayName="Await";var Ft=w.createContext(null);Ft.displayName="Navigation";var Xl=w.createContext(null);Xl.displayName="Location";var Jt=w.createContext({outlet:null,matches:[],isDataRoute:!1});Jt.displayName="Route";var hf=w.createContext(null);hf.displayName="RouteError";function Bb(n,{relative:l}={}){Be(ji(),"useHref() may be used only in the context of a <Router> component.");let{basename:r,navigator:s}=w.useContext(Ft),{hash:c,pathname:f,search:d}=Kl(n,{relative:l}),m=f;return r!=="/"&&(m=f==="/"?r:An([r,f])),s.createHref({pathname:m,search:d,hash:c})}function ji(){return w.useContext(Xl)!=null}function Gt(){return Be(ji(),"useLocation() may be used only in the context of a <Router> component."),w.useContext(Xl).location}var Km="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Vm(n){w.useContext(Ft).static||w.useLayoutEffect(n)}function jt(){let{isDataRoute:n}=w.useContext(Jt);return n?Fb():Lb()}function Lb(){Be(ji(),"useNavigate() may be used only in the context of a <Router> component.");let n=w.useContext(Ci),{basename:l,navigator:r}=w.useContext(Ft),{matches:s}=w.useContext(Jt),{pathname:c}=Gt(),f=JSON.stringify(ff(s)),d=w.useRef(!1);return Vm(()=>{d.current=!0}),w.useCallback((y,p={})=>{if(Zt(d.current,Km),!d.current)return;if(typeof y=="number"){r.go(y);return}let v=df(y,JSON.parse(f),c,p.relative==="path");n==null&&l!=="/"&&(v.pathname=v.pathname==="/"?l:An([l,v.pathname])),(p.replace?r.replace:r.push)(v,p.state,p)},[l,r,f,c,n])}w.createContext(null);function Zm(){let{matches:n}=w.useContext(Jt),l=n[n.length-1];return l?l.params:{}}function Kl(n,{relative:l}={}){let{matches:r}=w.useContext(Jt),{pathname:s}=Gt(),c=JSON.stringify(ff(r));return w.useMemo(()=>df(n,JSON.parse(c),s,l==="path"),[n,c,s,l])}function qb(n,l){return Fm(n,l)}function Fm(n,l,r,s,c){Be(ji(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:f}=w.useContext(Ft),{matches:d}=w.useContext(Jt),m=d[d.length-1],y=m?m.params:{},p=m?m.pathname:"/",v=m?m.pathnameBase:"/",x=m&&m.route;{let L=x&&x.path||"";Jm(p,!x||L.endsWith("*")||L.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${p}" (under <Route path="${L}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${L}"> to <Route path="${L==="/"?"*":`${L}/*`}">.`)}let T=Gt(),D;if(l){let L=typeof l=="string"?Ai(l):l;Be(v==="/"||L.pathname?.startsWith(v),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${v}" but pathname "${L.pathname}" was given in the \`location\` prop.`),D=L}else D=T;let R=D.pathname||"/",z=R;if(v!=="/"){let L=v.replace(/^\//,"").split("/");z="/"+R.replace(/^\//,"").split("/").slice(L.length).join("/")}let C=Ym(n,{pathname:z});Zt(x||C!=null,`No routes matched location "${D.pathname}${D.search}${D.hash}" `),Zt(C==null||C[C.length-1].route.element!==void 0||C[C.length-1].route.Component!==void 0||C[C.length-1].route.lazy!==void 0,`Matched leaf route at location "${D.pathname}${D.search}${D.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let k=Gb(C&&C.map(L=>Object.assign({},L,{params:Object.assign({},y,L.params),pathname:An([v,f.encodeLocation?f.encodeLocation(L.pathname).pathname:L.pathname]),pathnameBase:L.pathnameBase==="/"?v:An([v,f.encodeLocation?f.encodeLocation(L.pathnameBase).pathname:L.pathnameBase])})),d,r,s,c);return l&&k?w.createElement(Xl.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...D},navigationType:"POP"}},k):k}function Hb(){let n=Zb(),l=Mb(n)?`${n.status} ${n.statusText}`:n instanceof Error?n.message:JSON.stringify(n),r=n instanceof Error?n.stack:null,s="rgba(200,200,200, 0.5)",c={padding:"0.5rem",backgroundColor:s},f={padding:"2px 4px",backgroundColor:s},d=null;return console.error("Error handled by React Router default ErrorBoundary:",n),d=w.createElement(w.Fragment,null,w.createElement("p",null,"💿 Hey developer 👋"),w.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",w.createElement("code",{style:f},"ErrorBoundary")," or"," ",w.createElement("code",{style:f},"errorElement")," prop on your route.")),w.createElement(w.Fragment,null,w.createElement("h2",null,"Unexpected Application Error!"),w.createElement("h3",{style:{fontStyle:"italic"}},l),r?w.createElement("pre",{style:c},r):null,d)}var kb=w.createElement(Hb,null),Yb=class extends w.Component{constructor(n){super(n),this.state={location:n.location,revalidation:n.revalidation,error:n.error}}static getDerivedStateFromError(n){return{error:n}}static getDerivedStateFromProps(n,l){return l.location!==n.location||l.revalidation!=="idle"&&n.revalidation==="idle"?{error:n.error,location:n.location,revalidation:n.revalidation}:{error:n.error!==void 0?n.error:l.error,location:l.location,revalidation:n.revalidation||l.revalidation}}componentDidCatch(n,l){this.props.unstable_onError?this.props.unstable_onError(n,l):console.error("React Router caught the following error during render",n)}render(){return this.state.error!==void 0?w.createElement(Jt.Provider,{value:this.props.routeContext},w.createElement(hf.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function Qb({routeContext:n,match:l,children:r}){let s=w.useContext(Ci);return s&&s.static&&s.staticContext&&(l.route.errorElement||l.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=l.route.id),w.createElement(Jt.Provider,{value:n},r)}function Gb(n,l=[],r=null,s=null,c=null){if(n==null){if(!r)return null;if(r.errors)n=r.matches;else if(l.length===0&&!r.initialized&&r.matches.length>0)n=r.matches;else return null}let f=n,d=r?.errors;if(d!=null){let p=f.findIndex(v=>v.route.id&&d?.[v.route.id]!==void 0);Be(p>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(d).join(",")}`),f=f.slice(0,Math.min(f.length,p+1))}let m=!1,y=-1;if(r)for(let p=0;p<f.length;p++){let v=f[p];if((v.route.HydrateFallback||v.route.hydrateFallbackElement)&&(y=p),v.route.id){let{loaderData:x,errors:T}=r,D=v.route.loader&&!x.hasOwnProperty(v.route.id)&&(!T||T[v.route.id]===void 0);if(v.route.lazy||D){m=!0,y>=0?f=f.slice(0,y+1):f=[f[0]];break}}}return f.reduceRight((p,v,x)=>{let T,D=!1,R=null,z=null;r&&(T=d&&v.route.id?d[v.route.id]:void 0,R=v.route.errorElement||kb,m&&(y<0&&x===0?(Jm("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),D=!0,z=null):y===x&&(D=!0,z=v.route.hydrateFallbackElement||null)));let C=l.concat(f.slice(0,x+1)),k=()=>{let L;return T?L=R:D?L=z:v.route.Component?L=w.createElement(v.route.Component,null):v.route.element?L=v.route.element:L=p,w.createElement(Qb,{match:v,routeContext:{outlet:p,matches:C,isDataRoute:r!=null},children:L})};return r&&(v.route.ErrorBoundary||v.route.errorElement||x===0)?w.createElement(Yb,{location:r.location,revalidation:r.revalidation,component:R,error:T,children:k(),routeContext:{outlet:null,matches:C,isDataRoute:!0},unstable_onError:s}):k()},null)}function pf(n){return`${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function $b(n){let l=w.useContext(Ci);return Be(l,pf(n)),l}function Xb(n){let l=w.useContext(Hs);return Be(l,pf(n)),l}function Kb(n){let l=w.useContext(Jt);return Be(l,pf(n)),l}function mf(n){let l=Kb(n),r=l.matches[l.matches.length-1];return Be(r.route.id,`${n} can only be used on routes that contain a unique "id"`),r.route.id}function Vb(){return mf("useRouteId")}function Zb(){let n=w.useContext(hf),l=Xb("useRouteError"),r=mf("useRouteError");return n!==void 0?n:l.errors?.[r]}function Fb(){let{router:n}=$b("useNavigate"),l=mf("useNavigate"),r=w.useRef(!1);return Vm(()=>{r.current=!0}),w.useCallback(async(c,f={})=>{Zt(r.current,Km),r.current&&(typeof c=="number"?n.navigate(c):await n.navigate(c,{fromRouteId:l,...f}))},[n,l])}var Q0={};function Jm(n,l,r){!l&&!Q0[n]&&(Q0[n]=!0,Zt(!1,r))}w.memo(Jb);function Jb({routes:n,future:l,state:r,unstable_onError:s}){return Fm(n,void 0,r,s,l)}function Pb({to:n,replace:l,state:r,relative:s}){Be(ji(),"<Navigate> may be used only in the context of a <Router> component.");let{static:c}=w.useContext(Ft);Zt(!c,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:f}=w.useContext(Jt),{pathname:d}=Gt(),m=jt(),y=df(n,ff(f),d,s==="path"),p=JSON.stringify(y);return w.useEffect(()=>{m(JSON.parse(p),{replace:l,state:r,relative:s})},[m,p,s,l,r]),null}function Tn(n){Be(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function Wb({basename:n="/",children:l=null,location:r,navigationType:s="POP",navigator:c,static:f=!1}){Be(!ji(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let d=n.replace(/^\/*/,"/"),m=w.useMemo(()=>({basename:d,navigator:c,static:f,future:{}}),[d,c,f]);typeof r=="string"&&(r=Ai(r));let{pathname:y="/",search:p="",hash:v="",state:x=null,key:T="default"}=r,D=w.useMemo(()=>{let R=Cn(y,d);return R==null?null:{location:{pathname:R,search:p,hash:v,state:x,key:T},navigationType:s}},[d,y,p,v,x,T,s]);return Zt(D!=null,`<Router basename="${d}"> is not able to match the URL "${y}${p}${v}" because it does not start with the basename, so the <Router> won't render anything.`),D==null?null:w.createElement(Ft.Provider,{value:m},w.createElement(Xl.Provider,{children:l,value:D}))}function Ib({children:n,location:l}){return qb(kc(n),l)}function kc(n,l=[]){let r=[];return w.Children.forEach(n,(s,c)=>{if(!w.isValidElement(s))return;let f=[...l,c];if(s.type===w.Fragment){r.push.apply(r,kc(s.props.children,f));return}Be(s.type===Tn,`[${typeof s.type=="string"?s.type:s.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Be(!s.props.index||!s.props.children,"An index route cannot have child routes.");let d={id:s.props.id||f.join("-"),caseSensitive:s.props.caseSensitive,element:s.props.element,Component:s.props.Component,index:s.props.index,path:s.props.path,loader:s.props.loader,action:s.props.action,hydrateFallbackElement:s.props.hydrateFallbackElement,HydrateFallback:s.props.HydrateFallback,errorElement:s.props.errorElement,ErrorBoundary:s.props.ErrorBoundary,hasErrorBoundary:s.props.hasErrorBoundary===!0||s.props.ErrorBoundary!=null||s.props.errorElement!=null,shouldRevalidate:s.props.shouldRevalidate,handle:s.props.handle,lazy:s.props.lazy};s.props.children&&(d.children=kc(s.props.children,f)),r.push(d)}),r}var vs="get",bs="application/x-www-form-urlencoded";function ks(n){return n!=null&&typeof n.tagName=="string"}function ex(n){return ks(n)&&n.tagName.toLowerCase()==="button"}function tx(n){return ks(n)&&n.tagName.toLowerCase()==="form"}function nx(n){return ks(n)&&n.tagName.toLowerCase()==="input"}function ax(n){return!!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)}function ix(n,l){return n.button===0&&(!l||l==="_self")&&!ax(n)}var hs=null;function lx(){if(hs===null)try{new FormData(document.createElement("form"),0),hs=!1}catch{hs=!0}return hs}var rx=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function wc(n){return n!=null&&!rx.has(n)?(Zt(!1,`"${n}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${bs}"`),null):n}function sx(n,l){let r,s,c,f,d;if(tx(n)){let m=n.getAttribute("action");s=m?Cn(m,l):null,r=n.getAttribute("method")||vs,c=wc(n.getAttribute("enctype"))||bs,f=new FormData(n)}else if(ex(n)||nx(n)&&(n.type==="submit"||n.type==="image")){let m=n.form;if(m==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let y=n.getAttribute("formaction")||m.getAttribute("action");if(s=y?Cn(y,l):null,r=n.getAttribute("formmethod")||m.getAttribute("method")||vs,c=wc(n.getAttribute("formenctype"))||wc(m.getAttribute("enctype"))||bs,f=new FormData(m,n),!lx()){let{name:p,type:v,value:x}=n;if(v==="image"){let T=p?`${p}.`:"";f.append(`${T}x`,"0"),f.append(`${T}y`,"0")}else p&&f.append(p,x)}}else{if(ks(n))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');r=vs,s=null,c=bs,d=n}return f&&c==="text/plain"&&(d=f,f=void 0),{action:s,method:r.toLowerCase(),encType:c,formData:f,body:d}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function gf(n,l){if(n===!1||n===null||typeof n>"u")throw new Error(l)}function ux(n,l,r){let s=typeof n=="string"?new URL(n,typeof window>"u"?"server://singlefetch/":window.location.origin):n;return s.pathname==="/"?s.pathname=`_root.${r}`:l&&Cn(s.pathname,l)==="/"?s.pathname=`${l.replace(/\/$/,"")}/_root.${r}`:s.pathname=`${s.pathname.replace(/\/$/,"")}.${r}`,s}async function ox(n,l){if(n.id in l)return l[n.id];try{let r=await import(n.module);return l[n.id]=r,r}catch(r){return console.error(`Error loading route module \`${n.module}\`, reloading page...`),console.error(r),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function cx(n){return n==null?!1:n.href==null?n.rel==="preload"&&typeof n.imageSrcSet=="string"&&typeof n.imageSizes=="string":typeof n.rel=="string"&&typeof n.href=="string"}async function fx(n,l,r){let s=await Promise.all(n.map(async c=>{let f=l.routes[c.route.id];if(f){let d=await ox(f,r);return d.links?d.links():[]}return[]}));return mx(s.flat(1).filter(cx).filter(c=>c.rel==="stylesheet"||c.rel==="preload").map(c=>c.rel==="stylesheet"?{...c,rel:"prefetch",as:"style"}:{...c,rel:"prefetch"}))}function G0(n,l,r,s,c,f){let d=(y,p)=>r[p]?y.route.id!==r[p].route.id:!0,m=(y,p)=>r[p].pathname!==y.pathname||r[p].route.path?.endsWith("*")&&r[p].params["*"]!==y.params["*"];return f==="assets"?l.filter((y,p)=>d(y,p)||m(y,p)):f==="data"?l.filter((y,p)=>{let v=s.routes[y.route.id];if(!v||!v.hasLoader)return!1;if(d(y,p)||m(y,p))return!0;if(y.route.shouldRevalidate){let x=y.route.shouldRevalidate({currentUrl:new URL(c.pathname+c.search+c.hash,window.origin),currentParams:r[0]?.params||{},nextUrl:new URL(n,window.origin),nextParams:y.params,defaultShouldRevalidate:!0});if(typeof x=="boolean")return x}return!0}):[]}function dx(n,l,{includeHydrateFallback:r}={}){return hx(n.map(s=>{let c=l.routes[s.route.id];if(!c)return[];let f=[c.module];return c.clientActionModule&&(f=f.concat(c.clientActionModule)),c.clientLoaderModule&&(f=f.concat(c.clientLoaderModule)),r&&c.hydrateFallbackModule&&(f=f.concat(c.hydrateFallbackModule)),c.imports&&(f=f.concat(c.imports)),f}).flat(1))}function hx(n){return[...new Set(n)]}function px(n){let l={},r=Object.keys(n).sort();for(let s of r)l[s]=n[s];return l}function mx(n,l){let r=new Set;return new Set(l),n.reduce((s,c)=>{let f=JSON.stringify(px(c));return r.has(f)||(r.add(f),s.push({key:f,link:c})),s},[])}function Pm(){let n=w.useContext(Ci);return gf(n,"You must render this element inside a <DataRouterContext.Provider> element"),n}function gx(){let n=w.useContext(Hs);return gf(n,"You must render this element inside a <DataRouterStateContext.Provider> element"),n}var yf=w.createContext(void 0);yf.displayName="FrameworkContext";function Wm(){let n=w.useContext(yf);return gf(n,"You must render this element inside a <HydratedRouter> element"),n}function yx(n,l){let r=w.useContext(yf),[s,c]=w.useState(!1),[f,d]=w.useState(!1),{onFocus:m,onBlur:y,onMouseEnter:p,onMouseLeave:v,onTouchStart:x}=l,T=w.useRef(null);w.useEffect(()=>{if(n==="render"&&d(!0),n==="viewport"){let z=k=>{k.forEach(L=>{d(L.isIntersecting)})},C=new IntersectionObserver(z,{threshold:.5});return T.current&&C.observe(T.current),()=>{C.disconnect()}}},[n]),w.useEffect(()=>{if(s){let z=setTimeout(()=>{d(!0)},100);return()=>{clearTimeout(z)}}},[s]);let D=()=>{c(!0)},R=()=>{c(!1),d(!1)};return r?n!=="intent"?[f,T,{}]:[f,T,{onFocus:Ll(m,D),onBlur:Ll(y,R),onMouseEnter:Ll(p,D),onMouseLeave:Ll(v,R),onTouchStart:Ll(x,D)}]:[!1,T,{}]}function Ll(n,l){return r=>{n&&n(r),r.defaultPrevented||l(r)}}function vx({page:n,...l}){let{router:r}=Pm(),s=w.useMemo(()=>Ym(r.routes,n,r.basename),[r.routes,n,r.basename]);return s?w.createElement(xx,{page:n,matches:s,...l}):null}function bx(n){let{manifest:l,routeModules:r}=Wm(),[s,c]=w.useState([]);return w.useEffect(()=>{let f=!1;return fx(n,l,r).then(d=>{f||c(d)}),()=>{f=!0}},[n,l,r]),s}function xx({page:n,matches:l,...r}){let s=Gt(),{manifest:c,routeModules:f}=Wm(),{basename:d}=Pm(),{loaderData:m,matches:y}=gx(),p=w.useMemo(()=>G0(n,l,y,c,s,"data"),[n,l,y,c,s]),v=w.useMemo(()=>G0(n,l,y,c,s,"assets"),[n,l,y,c,s]),x=w.useMemo(()=>{if(n===s.pathname+s.search+s.hash)return[];let R=new Set,z=!1;if(l.forEach(k=>{let L=c.routes[k.route.id];!L||!L.hasLoader||(!p.some($=>$.route.id===k.route.id)&&k.route.id in m&&f[k.route.id]?.shouldRevalidate||L.hasClientLoader?z=!0:R.add(k.route.id))}),R.size===0)return[];let C=ux(n,d,"data");return z&&R.size>0&&C.searchParams.set("_routes",l.filter(k=>R.has(k.route.id)).map(k=>k.route.id).join(",")),[C.pathname+C.search]},[d,m,s,c,p,l,n,f]),T=w.useMemo(()=>dx(v,c),[v,c]),D=bx(v);return w.createElement(w.Fragment,null,x.map(R=>w.createElement("link",{key:R,rel:"prefetch",as:"fetch",href:R,...r})),T.map(R=>w.createElement("link",{key:R,rel:"modulepreload",href:R,...r})),D.map(({key:R,link:z})=>w.createElement("link",{key:R,nonce:r.nonce,...z})))}function Sx(...n){return l=>{n.forEach(r=>{typeof r=="function"?r(l):r!=null&&(r.current=l)})}}var Im=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Im&&(window.__reactRouterVersion="7.8.2")}catch{}function wx({basename:n,children:l,window:r}){let s=w.useRef();s.current==null&&(s.current=ob({window:r,v5Compat:!0}));let c=s.current,[f,d]=w.useState({action:c.action,location:c.location}),m=w.useCallback(y=>{w.startTransition(()=>d(y))},[d]);return w.useLayoutEffect(()=>c.listen(m),[c,m]),w.createElement(Wb,{basename:n,children:l,location:f.location,navigationType:f.action,navigator:c})}var eg=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,tg=w.forwardRef(function({onClick:l,discover:r="render",prefetch:s="none",relative:c,reloadDocument:f,replace:d,state:m,target:y,to:p,preventScrollReset:v,viewTransition:x,...T},D){let{basename:R}=w.useContext(Ft),z=typeof p=="string"&&eg.test(p),C,k=!1;if(typeof p=="string"&&z&&(C=p,Im))try{let me=new URL(window.location.href),se=p.startsWith("//")?new URL(me.protocol+p):new URL(p),oe=Cn(se.pathname,R);se.origin===me.origin&&oe!=null?p=oe+se.search+se.hash:k=!0}catch{Zt(!1,`<Link to="${p}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let L=Bb(p,{relative:c}),[$,J,X]=yx(s,T),P=Ox(p,{replace:d,state:m,target:y,preventScrollReset:v,relative:c,viewTransition:x});function K(me){l&&l(me),me.defaultPrevented||P(me)}let ue=w.createElement("a",{...T,...X,href:C||L,onClick:k||f?l:K,ref:Sx(D,J),target:y,"data-discover":!z&&r==="render"?"true":void 0});return $&&!z?w.createElement(w.Fragment,null,ue,w.createElement(vx,{page:L})):ue});tg.displayName="Link";var Ex=w.forwardRef(function({"aria-current":l="page",caseSensitive:r=!1,className:s="",end:c=!1,style:f,to:d,viewTransition:m,children:y,...p},v){let x=Kl(d,{relative:p.relative}),T=Gt(),D=w.useContext(Hs),{navigator:R,basename:z}=w.useContext(Ft),C=D!=null&&Dx(x)&&m===!0,k=R.encodeLocation?R.encodeLocation(x).pathname:x.pathname,L=T.pathname,$=D&&D.navigation&&D.navigation.location?D.navigation.location.pathname:null;r||(L=L.toLowerCase(),$=$?$.toLowerCase():null,k=k.toLowerCase()),$&&z&&($=Cn($,z)||$);const J=k!=="/"&&k.endsWith("/")?k.length-1:k.length;let X=L===k||!c&&L.startsWith(k)&&L.charAt(J)==="/",P=$!=null&&($===k||!c&&$.startsWith(k)&&$.charAt(k.length)==="/"),K={isActive:X,isPending:P,isTransitioning:C},ue=X?l:void 0,me;typeof s=="function"?me=s(K):me=[s,X?"active":null,P?"pending":null,C?"transitioning":null].filter(Boolean).join(" ");let se=typeof f=="function"?f(K):f;return w.createElement(tg,{...p,"aria-current":ue,className:me,ref:v,style:se,to:d,viewTransition:m},typeof y=="function"?y(K):y)});Ex.displayName="NavLink";var Rx=w.forwardRef(({discover:n="render",fetcherKey:l,navigate:r,reloadDocument:s,replace:c,state:f,method:d=vs,action:m,onSubmit:y,relative:p,preventScrollReset:v,viewTransition:x,...T},D)=>{let R=jx(),z=zx(m,{relative:p}),C=d.toLowerCase()==="get"?"get":"post",k=typeof m=="string"&&eg.test(m),L=$=>{if(y&&y($),$.defaultPrevented)return;$.preventDefault();let J=$.nativeEvent.submitter,X=J?.getAttribute("formmethod")||d;R(J||$.currentTarget,{fetcherKey:l,method:X,navigate:r,replace:c,state:f,relative:p,preventScrollReset:v,viewTransition:x})};return w.createElement("form",{ref:D,method:C,action:z,onSubmit:s?y:L,...T,"data-discover":!k&&n==="render"?"true":void 0})});Rx.displayName="Form";function Tx(n){return`${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function ng(n){let l=w.useContext(Ci);return Be(l,Tx(n)),l}function Ox(n,{target:l,replace:r,state:s,preventScrollReset:c,relative:f,viewTransition:d}={}){let m=jt(),y=Gt(),p=Kl(n,{relative:f});return w.useCallback(v=>{if(ix(v,l)){v.preventDefault();let x=r!==void 0?r:Yl(y)===Yl(p);m(n,{replace:x,state:s,preventScrollReset:c,relative:f,viewTransition:d})}},[y,m,p,r,s,l,n,c,f,d])}var Ax=0,Cx=()=>`__${String(++Ax)}__`;function jx(){let{router:n}=ng("useSubmit"),{basename:l}=w.useContext(Ft),r=Vb();return w.useCallback(async(s,c={})=>{let{action:f,method:d,encType:m,formData:y,body:p}=sx(s,l);if(c.navigate===!1){let v=c.fetcherKey||Cx();await n.fetch(v,r,c.action||f,{preventScrollReset:c.preventScrollReset,formData:y,body:p,formMethod:c.method||d,formEncType:c.encType||m,flushSync:c.flushSync})}else await n.navigate(c.action||f,{preventScrollReset:c.preventScrollReset,formData:y,body:p,formMethod:c.method||d,formEncType:c.encType||m,replace:c.replace,state:c.state,fromRouteId:r,flushSync:c.flushSync,viewTransition:c.viewTransition})},[n,l,r])}function zx(n,{relative:l}={}){let{basename:r}=w.useContext(Ft),s=w.useContext(Jt);Be(s,"useFormAction must be used inside a RouteContext");let[c]=s.matches.slice(-1),f={...Kl(n||".",{relative:l})},d=Gt();if(n==null){f.search=d.search;let m=new URLSearchParams(f.search),y=m.getAll("index");if(y.some(v=>v==="")){m.delete("index"),y.filter(x=>x).forEach(x=>m.append("index",x));let v=m.toString();f.search=v?`?${v}`:""}}return(!n||n===".")&&c.route.index&&(f.search=f.search?f.search.replace(/^\?/,"?index&"):"?index"),r!=="/"&&(f.pathname=f.pathname==="/"?r:An([r,f.pathname])),Yl(f)}function Dx(n,{relative:l}={}){let r=w.useContext(Xm);Be(r!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:s}=ng("useViewTransitionState"),c=Kl(n,{relative:l});if(!r.isTransitioning)return!1;let f=Cn(r.currentLocation.pathname,s)||r.currentLocation.pathname,d=Cn(r.nextLocation.pathname,s)||r.nextLocation.pathname;return Cs(c.pathname,d)!=null||Cs(c.pathname,f)!=null}const Mx="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='32'%20height='32'%20viewBox='0%200%2024%2024'%20fill='none'%20stroke='%239e9e9e'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'%20class='feather%20feather-search'%3e%3ccircle%20cx='11'%20cy='11'%20r='8'%3e%3c/circle%3e%3cline%20x1='21'%20y1='21'%20x2='16.65'%20y2='16.65'%3e%3c/line%3e%3c/svg%3e",_x="/static/img/user.svg",Ux="/static/img/menu.svg";var ot=function(){return ot=Object.assign||function(l){for(var r,s=1,c=arguments.length;s<c;s++){r=arguments[s];for(var f in r)Object.prototype.hasOwnProperty.call(r,f)&&(l[f]=r[f])}return l},ot.apply(this,arguments)};function bi(n,l,r){if(r||arguments.length===2)for(var s=0,c=l.length,f;s<c;s++)(f||!(s in l))&&(f||(f=Array.prototype.slice.call(l,0,s)),f[s]=l[s]);return n.concat(f||Array.prototype.slice.call(l))}var Ue="-ms-",kl="-moz-",Re="-webkit-",ag="comm",Ys="rule",vf="decl",Nx="@import",ig="@keyframes",Bx="@layer",lg=Math.abs,bf=String.fromCharCode,Yc=Object.assign;function Lx(n,l){return et(n,0)^45?(((l<<2^et(n,0))<<2^et(n,1))<<2^et(n,2))<<2^et(n,3):0}function rg(n){return n.trim()}function On(n,l){return(n=l.exec(n))?n[0]:n}function de(n,l,r){return n.replace(l,r)}function xs(n,l,r){return n.indexOf(l,r)}function et(n,l){return n.charCodeAt(l)|0}function xi(n,l,r){return n.slice(l,r)}function rn(n){return n.length}function sg(n){return n.length}function Hl(n,l){return l.push(n),n}function qx(n,l){return n.map(l).join("")}function $0(n,l){return n.filter(function(r){return!On(r,l)})}var Qs=1,Si=1,ug=0,Qt=0,$e=0,zi="";function Gs(n,l,r,s,c,f,d,m){return{value:n,root:l,parent:r,type:s,props:c,children:f,line:Qs,column:Si,length:d,return:"",siblings:m}}function In(n,l){return Yc(Gs("",null,null,"",null,null,0,n.siblings),n,{length:-n.length},l)}function gi(n){for(;n.root;)n=In(n.root,{children:[n]});Hl(n,n.siblings)}function Hx(){return $e}function kx(){return $e=Qt>0?et(zi,--Qt):0,Si--,$e===10&&(Si=1,Qs--),$e}function Vt(){return $e=Qt<ug?et(zi,Qt++):0,Si++,$e===10&&(Si=1,Qs++),$e}function Ra(){return et(zi,Qt)}function Ss(){return Qt}function $s(n,l){return xi(zi,n,l)}function Qc(n){switch(n){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Yx(n){return Qs=Si=1,ug=rn(zi=n),Qt=0,[]}function Qx(n){return zi="",n}function Ec(n){return rg($s(Qt-1,Gc(n===91?n+2:n===40?n+1:n)))}function Gx(n){for(;($e=Ra())&&$e<33;)Vt();return Qc(n)>2||Qc($e)>3?"":" "}function $x(n,l){for(;--l&&Vt()&&!($e<48||$e>102||$e>57&&$e<65||$e>70&&$e<97););return $s(n,Ss()+(l<6&&Ra()==32&&Vt()==32))}function Gc(n){for(;Vt();)switch($e){case n:return Qt;case 34:case 39:n!==34&&n!==39&&Gc($e);break;case 40:n===41&&Gc(n);break;case 92:Vt();break}return Qt}function Xx(n,l){for(;Vt()&&n+$e!==57;)if(n+$e===84&&Ra()===47)break;return"/*"+$s(l,Qt-1)+"*"+bf(n===47?n:Vt())}function Kx(n){for(;!Qc(Ra());)Vt();return $s(n,Qt)}function Vx(n){return Qx(ws("",null,null,null,[""],n=Yx(n),0,[0],n))}function ws(n,l,r,s,c,f,d,m,y){for(var p=0,v=0,x=d,T=0,D=0,R=0,z=1,C=1,k=1,L=0,$="",J=c,X=f,P=s,K=$;C;)switch(R=L,L=Vt()){case 40:if(R!=108&&et(K,x-1)==58){xs(K+=de(Ec(L),"&","&\f"),"&\f",lg(p?m[p-1]:0))!=-1&&(k=-1);break}case 34:case 39:case 91:K+=Ec(L);break;case 9:case 10:case 13:case 32:K+=Gx(R);break;case 92:K+=$x(Ss()-1,7);continue;case 47:switch(Ra()){case 42:case 47:Hl(Zx(Xx(Vt(),Ss()),l,r,y),y);break;default:K+="/"}break;case 123*z:m[p++]=rn(K)*k;case 125*z:case 59:case 0:switch(L){case 0:case 125:C=0;case 59+v:k==-1&&(K=de(K,/\f/g,"")),D>0&&rn(K)-x&&Hl(D>32?K0(K+";",s,r,x-1,y):K0(de(K," ","")+";",s,r,x-2,y),y);break;case 59:K+=";";default:if(Hl(P=X0(K,l,r,p,v,c,m,$,J=[],X=[],x,f),f),L===123)if(v===0)ws(K,l,P,P,J,f,x,m,X);else switch(T===99&&et(K,3)===110?100:T){case 100:case 108:case 109:case 115:ws(n,P,P,s&&Hl(X0(n,P,P,0,0,c,m,$,c,J=[],x,X),X),c,X,x,m,s?J:X);break;default:ws(K,P,P,P,[""],X,0,m,X)}}p=v=D=0,z=k=1,$=K="",x=d;break;case 58:x=1+rn(K),D=R;default:if(z<1){if(L==123)--z;else if(L==125&&z++==0&&kx()==125)continue}switch(K+=bf(L),L*z){case 38:k=v>0?1:(K+="\f",-1);break;case 44:m[p++]=(rn(K)-1)*k,k=1;break;case 64:Ra()===45&&(K+=Ec(Vt())),T=Ra(),v=x=rn($=K+=Kx(Ss())),L++;break;case 45:R===45&&rn(K)==2&&(z=0)}}return f}function X0(n,l,r,s,c,f,d,m,y,p,v,x){for(var T=c-1,D=c===0?f:[""],R=sg(D),z=0,C=0,k=0;z<s;++z)for(var L=0,$=xi(n,T+1,T=lg(C=d[z])),J=n;L<R;++L)(J=rg(C>0?D[L]+" "+$:de($,/&\f/g,D[L])))&&(y[k++]=J);return Gs(n,l,r,c===0?Ys:m,y,p,v,x)}function Zx(n,l,r,s){return Gs(n,l,r,ag,bf(Hx()),xi(n,2,-2),0,s)}function K0(n,l,r,s,c){return Gs(n,l,r,vf,xi(n,0,s),xi(n,s+1,-1),s,c)}function og(n,l,r){switch(Lx(n,l)){case 5103:return Re+"print-"+n+n;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return Re+n+n;case 4789:return kl+n+n;case 5349:case 4246:case 4810:case 6968:case 2756:return Re+n+kl+n+Ue+n+n;case 5936:switch(et(n,l+11)){case 114:return Re+n+Ue+de(n,/[svh]\w+-[tblr]{2}/,"tb")+n;case 108:return Re+n+Ue+de(n,/[svh]\w+-[tblr]{2}/,"tb-rl")+n;case 45:return Re+n+Ue+de(n,/[svh]\w+-[tblr]{2}/,"lr")+n}case 6828:case 4268:case 2903:return Re+n+Ue+n+n;case 6165:return Re+n+Ue+"flex-"+n+n;case 5187:return Re+n+de(n,/(\w+).+(:[^]+)/,Re+"box-$1$2"+Ue+"flex-$1$2")+n;case 5443:return Re+n+Ue+"flex-item-"+de(n,/flex-|-self/g,"")+(On(n,/flex-|baseline/)?"":Ue+"grid-row-"+de(n,/flex-|-self/g,""))+n;case 4675:return Re+n+Ue+"flex-line-pack"+de(n,/align-content|flex-|-self/g,"")+n;case 5548:return Re+n+Ue+de(n,"shrink","negative")+n;case 5292:return Re+n+Ue+de(n,"basis","preferred-size")+n;case 6060:return Re+"box-"+de(n,"-grow","")+Re+n+Ue+de(n,"grow","positive")+n;case 4554:return Re+de(n,/([^-])(transform)/g,"$1"+Re+"$2")+n;case 6187:return de(de(de(n,/(zoom-|grab)/,Re+"$1"),/(image-set)/,Re+"$1"),n,"")+n;case 5495:case 3959:return de(n,/(image-set\([^]*)/,Re+"$1$`$1");case 4968:return de(de(n,/(.+:)(flex-)?(.*)/,Re+"box-pack:$3"+Ue+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+Re+n+n;case 4200:if(!On(n,/flex-|baseline/))return Ue+"grid-column-align"+xi(n,l)+n;break;case 2592:case 3360:return Ue+de(n,"template-","")+n;case 4384:case 3616:return r&&r.some(function(s,c){return l=c,On(s.props,/grid-\w+-end/)})?~xs(n+(r=r[l].value),"span",0)?n:Ue+de(n,"-start","")+n+Ue+"grid-row-span:"+(~xs(r,"span",0)?On(r,/\d+/):+On(r,/\d+/)-+On(n,/\d+/))+";":Ue+de(n,"-start","")+n;case 4896:case 4128:return r&&r.some(function(s){return On(s.props,/grid-\w+-start/)})?n:Ue+de(de(n,"-end","-span"),"span ","")+n;case 4095:case 3583:case 4068:case 2532:return de(n,/(.+)-inline(.+)/,Re+"$1$2")+n;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(rn(n)-1-l>6)switch(et(n,l+1)){case 109:if(et(n,l+4)!==45)break;case 102:return de(n,/(.+:)(.+)-([^]+)/,"$1"+Re+"$2-$3$1"+kl+(et(n,l+3)==108?"$3":"$2-$3"))+n;case 115:return~xs(n,"stretch",0)?og(de(n,"stretch","fill-available"),l,r)+n:n}break;case 5152:case 5920:return de(n,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(s,c,f,d,m,y,p){return Ue+c+":"+f+p+(d?Ue+c+"-span:"+(m?y:+y-+f)+p:"")+n});case 4949:if(et(n,l+6)===121)return de(n,":",":"+Re)+n;break;case 6444:switch(et(n,et(n,14)===45?18:11)){case 120:return de(n,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+Re+(et(n,14)===45?"inline-":"")+"box$3$1"+Re+"$2$3$1"+Ue+"$2box$3")+n;case 100:return de(n,":",":"+Ue)+n}break;case 5719:case 2647:case 2135:case 3927:case 2391:return de(n,"scroll-","scroll-snap-")+n}return n}function js(n,l){for(var r="",s=0;s<n.length;s++)r+=l(n[s],s,n,l)||"";return r}function Fx(n,l,r,s){switch(n.type){case Bx:if(n.children.length)break;case Nx:case vf:return n.return=n.return||n.value;case ag:return"";case ig:return n.return=n.value+"{"+js(n.children,s)+"}";case Ys:if(!rn(n.value=n.props.join(",")))return""}return rn(r=js(n.children,s))?n.return=n.value+"{"+r+"}":""}function Jx(n){var l=sg(n);return function(r,s,c,f){for(var d="",m=0;m<l;m++)d+=n[m](r,s,c,f)||"";return d}}function Px(n){return function(l){l.root||(l=l.return)&&n(l)}}function Wx(n,l,r,s){if(n.length>-1&&!n.return)switch(n.type){case vf:n.return=og(n.value,n.length,r);return;case ig:return js([In(n,{value:de(n.value,"@","@"+Re)})],s);case Ys:if(n.length)return qx(r=n.props,function(c){switch(On(c,s=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":gi(In(n,{props:[de(c,/:(read-\w+)/,":"+kl+"$1")]})),gi(In(n,{props:[c]})),Yc(n,{props:$0(r,s)});break;case"::placeholder":gi(In(n,{props:[de(c,/:(plac\w+)/,":"+Re+"input-$1")]})),gi(In(n,{props:[de(c,/:(plac\w+)/,":"+kl+"$1")]})),gi(In(n,{props:[de(c,/:(plac\w+)/,Ue+"input-$1")]})),gi(In(n,{props:[c]})),Yc(n,{props:$0(r,s)});break}return""})}}var Ix={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Ct={},wi=typeof process<"u"&&Ct!==void 0&&(Ct.REACT_APP_SC_ATTR||Ct.SC_ATTR)||"data-styled",cg="active",fg="data-styled-version",Xs="6.1.19",xf=`/*!sc*/
`,zs=typeof window<"u"&&typeof document<"u",eS=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&Ct!==void 0&&Ct.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Ct.REACT_APP_SC_DISABLE_SPEEDY!==""?Ct.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Ct.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&Ct!==void 0&&Ct.SC_DISABLE_SPEEDY!==void 0&&Ct.SC_DISABLE_SPEEDY!==""&&Ct.SC_DISABLE_SPEEDY!=="false"&&Ct.SC_DISABLE_SPEEDY),tS={},Ks=Object.freeze([]),Ei=Object.freeze({});function dg(n,l,r){return r===void 0&&(r=Ei),n.theme!==r.theme&&n.theme||l||r.theme}var hg=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),nS=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,aS=/(^-|-$)/g;function V0(n){return n.replace(nS,"-").replace(aS,"")}var iS=/(a)(d)/gi,ps=52,Z0=function(n){return String.fromCharCode(n+(n>25?39:97))};function $c(n){var l,r="";for(l=Math.abs(n);l>ps;l=l/ps|0)r=Z0(l%ps)+r;return(Z0(l%ps)+r).replace(iS,"$1-$2")}var Rc,pg=5381,vi=function(n,l){for(var r=l.length;r;)n=33*n^l.charCodeAt(--r);return n},mg=function(n){return vi(pg,n)};function Sf(n){return $c(mg(n)>>>0)}function lS(n){return n.displayName||n.name||"Component"}function Tc(n){return typeof n=="string"&&!0}var gg=typeof Symbol=="function"&&Symbol.for,yg=gg?Symbol.for("react.memo"):60115,rS=gg?Symbol.for("react.forward_ref"):60112,sS={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},uS={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},vg={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},oS=((Rc={})[rS]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Rc[yg]=vg,Rc);function F0(n){return("type"in(l=n)&&l.type.$$typeof)===yg?vg:"$$typeof"in n?oS[n.$$typeof]:sS;var l}var cS=Object.defineProperty,fS=Object.getOwnPropertyNames,J0=Object.getOwnPropertySymbols,dS=Object.getOwnPropertyDescriptor,hS=Object.getPrototypeOf,P0=Object.prototype;function bg(n,l,r){if(typeof l!="string"){if(P0){var s=hS(l);s&&s!==P0&&bg(n,s,r)}var c=fS(l);J0&&(c=c.concat(J0(l)));for(var f=F0(n),d=F0(l),m=0;m<c.length;++m){var y=c[m];if(!(y in uS||r&&r[y]||d&&y in d||f&&y in f)){var p=dS(l,y);try{cS(n,y,p)}catch{}}}}return n}function Ri(n){return typeof n=="function"}function wf(n){return typeof n=="object"&&"styledComponentId"in n}function Sa(n,l){return n&&l?"".concat(n," ").concat(l):n||l||""}function Ds(n,l){if(n.length===0)return"";for(var r=n[0],s=1;s<n.length;s++)r+=n[s];return r}function Ql(n){return n!==null&&typeof n=="object"&&n.constructor.name===Object.name&&!("props"in n&&n.$$typeof)}function Xc(n,l,r){if(r===void 0&&(r=!1),!r&&!Ql(n)&&!Array.isArray(n))return l;if(Array.isArray(l))for(var s=0;s<l.length;s++)n[s]=Xc(n[s],l[s]);else if(Ql(l))for(var s in l)n[s]=Xc(n[s],l[s]);return n}function Ef(n,l){Object.defineProperty(n,"toString",{value:l})}function Vl(n){for(var l=[],r=1;r<arguments.length;r++)l[r-1]=arguments[r];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(n," for more information.").concat(l.length>0?" Args: ".concat(l.join(", ")):""))}var pS=(function(){function n(l){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=l}return n.prototype.indexOfGroup=function(l){for(var r=0,s=0;s<l;s++)r+=this.groupSizes[s];return r},n.prototype.insertRules=function(l,r){if(l>=this.groupSizes.length){for(var s=this.groupSizes,c=s.length,f=c;l>=f;)if((f<<=1)<0)throw Vl(16,"".concat(l));this.groupSizes=new Uint32Array(f),this.groupSizes.set(s),this.length=f;for(var d=c;d<f;d++)this.groupSizes[d]=0}for(var m=this.indexOfGroup(l+1),y=(d=0,r.length);d<y;d++)this.tag.insertRule(m,r[d])&&(this.groupSizes[l]++,m++)},n.prototype.clearGroup=function(l){if(l<this.length){var r=this.groupSizes[l],s=this.indexOfGroup(l),c=s+r;this.groupSizes[l]=0;for(var f=s;f<c;f++)this.tag.deleteRule(s)}},n.prototype.getGroup=function(l){var r="";if(l>=this.length||this.groupSizes[l]===0)return r;for(var s=this.groupSizes[l],c=this.indexOfGroup(l),f=c+s,d=c;d<f;d++)r+="".concat(this.tag.getRule(d)).concat(xf);return r},n})(),Es=new Map,Ms=new Map,Rs=1,ms=function(n){if(Es.has(n))return Es.get(n);for(;Ms.has(Rs);)Rs++;var l=Rs++;return Es.set(n,l),Ms.set(l,n),l},mS=function(n,l){Rs=l+1,Es.set(n,l),Ms.set(l,n)},gS="style[".concat(wi,"][").concat(fg,'="').concat(Xs,'"]'),yS=new RegExp("^".concat(wi,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),vS=function(n,l,r){for(var s,c=r.split(","),f=0,d=c.length;f<d;f++)(s=c[f])&&n.registerName(l,s)},bS=function(n,l){for(var r,s=((r=l.textContent)!==null&&r!==void 0?r:"").split(xf),c=[],f=0,d=s.length;f<d;f++){var m=s[f].trim();if(m){var y=m.match(yS);if(y){var p=0|parseInt(y[1],10),v=y[2];p!==0&&(mS(v,p),vS(n,v,y[3]),n.getTag().insertRules(p,c)),c.length=0}else c.push(m)}}},W0=function(n){for(var l=document.querySelectorAll(gS),r=0,s=l.length;r<s;r++){var c=l[r];c&&c.getAttribute(wi)!==cg&&(bS(n,c),c.parentNode&&c.parentNode.removeChild(c))}};function xS(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var xg=function(n){var l=document.head,r=n||l,s=document.createElement("style"),c=(function(m){var y=Array.from(m.querySelectorAll("style[".concat(wi,"]")));return y[y.length-1]})(r),f=c!==void 0?c.nextSibling:null;s.setAttribute(wi,cg),s.setAttribute(fg,Xs);var d=xS();return d&&s.setAttribute("nonce",d),r.insertBefore(s,f),s},SS=(function(){function n(l){this.element=xg(l),this.element.appendChild(document.createTextNode("")),this.sheet=(function(r){if(r.sheet)return r.sheet;for(var s=document.styleSheets,c=0,f=s.length;c<f;c++){var d=s[c];if(d.ownerNode===r)return d}throw Vl(17)})(this.element),this.length=0}return n.prototype.insertRule=function(l,r){try{return this.sheet.insertRule(r,l),this.length++,!0}catch{return!1}},n.prototype.deleteRule=function(l){this.sheet.deleteRule(l),this.length--},n.prototype.getRule=function(l){var r=this.sheet.cssRules[l];return r&&r.cssText?r.cssText:""},n})(),wS=(function(){function n(l){this.element=xg(l),this.nodes=this.element.childNodes,this.length=0}return n.prototype.insertRule=function(l,r){if(l<=this.length&&l>=0){var s=document.createTextNode(r);return this.element.insertBefore(s,this.nodes[l]||null),this.length++,!0}return!1},n.prototype.deleteRule=function(l){this.element.removeChild(this.nodes[l]),this.length--},n.prototype.getRule=function(l){return l<this.length?this.nodes[l].textContent:""},n})(),ES=(function(){function n(l){this.rules=[],this.length=0}return n.prototype.insertRule=function(l,r){return l<=this.length&&(this.rules.splice(l,0,r),this.length++,!0)},n.prototype.deleteRule=function(l){this.rules.splice(l,1),this.length--},n.prototype.getRule=function(l){return l<this.length?this.rules[l]:""},n})(),I0=zs,RS={isServer:!zs,useCSSOMInjection:!eS},_s=(function(){function n(l,r,s){l===void 0&&(l=Ei),r===void 0&&(r={});var c=this;this.options=ot(ot({},RS),l),this.gs=r,this.names=new Map(s),this.server=!!l.isServer,!this.server&&zs&&I0&&(I0=!1,W0(this)),Ef(this,function(){return(function(f){for(var d=f.getTag(),m=d.length,y="",p=function(x){var T=(function(k){return Ms.get(k)})(x);if(T===void 0)return"continue";var D=f.names.get(T),R=d.getGroup(x);if(D===void 0||!D.size||R.length===0)return"continue";var z="".concat(wi,".g").concat(x,'[id="').concat(T,'"]'),C="";D!==void 0&&D.forEach(function(k){k.length>0&&(C+="".concat(k,","))}),y+="".concat(R).concat(z,'{content:"').concat(C,'"}').concat(xf)},v=0;v<m;v++)p(v);return y})(c)})}return n.registerId=function(l){return ms(l)},n.prototype.rehydrate=function(){!this.server&&zs&&W0(this)},n.prototype.reconstructWithOptions=function(l,r){return r===void 0&&(r=!0),new n(ot(ot({},this.options),l),this.gs,r&&this.names||void 0)},n.prototype.allocateGSInstance=function(l){return this.gs[l]=(this.gs[l]||0)+1},n.prototype.getTag=function(){return this.tag||(this.tag=(l=(function(r){var s=r.useCSSOMInjection,c=r.target;return r.isServer?new ES(c):s?new SS(c):new wS(c)})(this.options),new pS(l)));var l},n.prototype.hasNameForId=function(l,r){return this.names.has(l)&&this.names.get(l).has(r)},n.prototype.registerName=function(l,r){if(ms(l),this.names.has(l))this.names.get(l).add(r);else{var s=new Set;s.add(r),this.names.set(l,s)}},n.prototype.insertRules=function(l,r,s){this.registerName(l,r),this.getTag().insertRules(ms(l),s)},n.prototype.clearNames=function(l){this.names.has(l)&&this.names.get(l).clear()},n.prototype.clearRules=function(l){this.getTag().clearGroup(ms(l)),this.clearNames(l)},n.prototype.clearTag=function(){this.tag=void 0},n})(),TS=/&/g,OS=/^\s*\/\/.*$/gm;function Sg(n,l){return n.map(function(r){return r.type==="rule"&&(r.value="".concat(l," ").concat(r.value),r.value=r.value.replaceAll(",",",".concat(l," ")),r.props=r.props.map(function(s){return"".concat(l," ").concat(s)})),Array.isArray(r.children)&&r.type!=="@keyframes"&&(r.children=Sg(r.children,l)),r})}function AS(n){var l,r,s,c=Ei,f=c.options,d=f===void 0?Ei:f,m=c.plugins,y=m===void 0?Ks:m,p=function(T,D,R){return R.startsWith(r)&&R.endsWith(r)&&R.replaceAll(r,"").length>0?".".concat(l):T},v=y.slice();v.push(function(T){T.type===Ys&&T.value.includes("&")&&(T.props[0]=T.props[0].replace(TS,r).replace(s,p))}),d.prefix&&v.push(Wx),v.push(Fx);var x=function(T,D,R,z){D===void 0&&(D=""),R===void 0&&(R=""),z===void 0&&(z="&"),l=z,r=D,s=new RegExp("\\".concat(r,"\\b"),"g");var C=T.replace(OS,""),k=Vx(R||D?"".concat(R," ").concat(D," { ").concat(C," }"):C);d.namespace&&(k=Sg(k,d.namespace));var L=[];return js(k,Jx(v.concat(Px(function($){return L.push($)})))),L};return x.hash=y.length?y.reduce(function(T,D){return D.name||Vl(15),vi(T,D.name)},pg).toString():"",x}var CS=new _s,Kc=AS(),wg=sn.createContext({shouldForwardProp:void 0,styleSheet:CS,stylis:Kc});wg.Consumer;sn.createContext(void 0);function Vc(){return w.useContext(wg)}var Eg=(function(){function n(l,r){var s=this;this.inject=function(c,f){f===void 0&&(f=Kc);var d=s.name+f.hash;c.hasNameForId(s.id,d)||c.insertRules(s.id,d,f(s.rules,d,"@keyframes"))},this.name=l,this.id="sc-keyframes-".concat(l),this.rules=r,Ef(this,function(){throw Vl(12,String(s.name))})}return n.prototype.getName=function(l){return l===void 0&&(l=Kc),this.name+l.hash},n})(),jS=function(n){return n>="A"&&n<="Z"};function em(n){for(var l="",r=0;r<n.length;r++){var s=n[r];if(r===1&&s==="-"&&n[0]==="-")return n;jS(s)?l+="-"+s.toLowerCase():l+=s}return l.startsWith("ms-")?"-"+l:l}var Rg=function(n){return n==null||n===!1||n===""},Tg=function(n){var l,r,s=[];for(var c in n){var f=n[c];n.hasOwnProperty(c)&&!Rg(f)&&(Array.isArray(f)&&f.isCss||Ri(f)?s.push("".concat(em(c),":"),f,";"):Ql(f)?s.push.apply(s,bi(bi(["".concat(c," {")],Tg(f),!1),["}"],!1)):s.push("".concat(em(c),": ").concat((l=c,(r=f)==null||typeof r=="boolean"||r===""?"":typeof r!="number"||r===0||l in Ix||l.startsWith("--")?String(r).trim():"".concat(r,"px")),";")))}return s};function ea(n,l,r,s){if(Rg(n))return[];if(wf(n))return[".".concat(n.styledComponentId)];if(Ri(n)){if(!Ri(f=n)||f.prototype&&f.prototype.isReactComponent||!l)return[n];var c=n(l);return ea(c,l,r,s)}var f;return n instanceof Eg?r?(n.inject(r,s),[n.getName(s)]):[n]:Ql(n)?Tg(n):Array.isArray(n)?Array.prototype.concat.apply(Ks,n.map(function(d){return ea(d,l,r,s)})):[n.toString()]}function Og(n){for(var l=0;l<n.length;l+=1){var r=n[l];if(Ri(r)&&!wf(r))return!1}return!0}var zS=mg(Xs),DS=(function(){function n(l,r,s){this.rules=l,this.staticRulesId="",this.isStatic=(s===void 0||s.isStatic)&&Og(l),this.componentId=r,this.baseHash=vi(zS,r),this.baseStyle=s,_s.registerId(r)}return n.prototype.generateAndInjectStyles=function(l,r,s){var c=this.baseStyle?this.baseStyle.generateAndInjectStyles(l,r,s):"";if(this.isStatic&&!s.hash)if(this.staticRulesId&&r.hasNameForId(this.componentId,this.staticRulesId))c=Sa(c,this.staticRulesId);else{var f=Ds(ea(this.rules,l,r,s)),d=$c(vi(this.baseHash,f)>>>0);if(!r.hasNameForId(this.componentId,d)){var m=s(f,".".concat(d),void 0,this.componentId);r.insertRules(this.componentId,d,m)}c=Sa(c,d),this.staticRulesId=d}else{for(var y=vi(this.baseHash,s.hash),p="",v=0;v<this.rules.length;v++){var x=this.rules[v];if(typeof x=="string")p+=x;else if(x){var T=Ds(ea(x,l,r,s));y=vi(y,T+v),p+=T}}if(p){var D=$c(y>>>0);r.hasNameForId(this.componentId,D)||r.insertRules(this.componentId,D,s(p,".".concat(D),void 0,this.componentId)),c=Sa(c,D)}}return c},n})(),Rf=sn.createContext(void 0);Rf.Consumer;var Oc={};function MS(n,l,r){var s=wf(n),c=n,f=!Tc(n),d=l.attrs,m=d===void 0?Ks:d,y=l.componentId,p=y===void 0?(function(J,X){var P=typeof J!="string"?"sc":V0(J);Oc[P]=(Oc[P]||0)+1;var K="".concat(P,"-").concat(Sf(Xs+P+Oc[P]));return X?"".concat(X,"-").concat(K):K})(l.displayName,l.parentComponentId):y,v=l.displayName,x=v===void 0?(function(J){return Tc(J)?"styled.".concat(J):"Styled(".concat(lS(J),")")})(n):v,T=l.displayName&&l.componentId?"".concat(V0(l.displayName),"-").concat(l.componentId):l.componentId||p,D=s&&c.attrs?c.attrs.concat(m).filter(Boolean):m,R=l.shouldForwardProp;if(s&&c.shouldForwardProp){var z=c.shouldForwardProp;if(l.shouldForwardProp){var C=l.shouldForwardProp;R=function(J,X){return z(J,X)&&C(J,X)}}else R=z}var k=new DS(r,T,s?c.componentStyle:void 0);function L(J,X){return(function(P,K,ue){var me=P.attrs,se=P.componentStyle,oe=P.defaultProps,ze=P.foldedComponentIds,zt=P.styledComponentId,un=P.target,Ze=sn.useContext(Rf),q=Vc(),Z=P.shouldForwardProp||q.shouldForwardProp,ne=dg(K,Ze,oe)||Ei,ge=(function(ye,ie,Fe){for(var Ee,it=ot(ot({},ie),{className:void 0,theme:Fe}),na=0;na<ye.length;na+=1){var on=Ri(Ee=ye[na])?Ee(it):Ee;for(var Dt in on)it[Dt]=Dt==="className"?Sa(it[Dt],on[Dt]):Dt==="style"?ot(ot({},it[Dt]),on[Dt]):on[Dt]}return ie.className&&(it.className=Sa(it.className,ie.className)),it})(me,K,ne),E=ge.as||un,G={};for(var V in ge)ge[V]===void 0||V[0]==="$"||V==="as"||V==="theme"&&ge.theme===ne||(V==="forwardedAs"?G.as=ge.forwardedAs:Z&&!Z(V,E)||(G[V]=ge[V]));var F=(function(ye,ie){var Fe=Vc(),Ee=ye.generateAndInjectStyles(ie,Fe.styleSheet,Fe.stylis);return Ee})(se,ge),te=Sa(ze,zt);return F&&(te+=" "+F),ge.className&&(te+=" "+ge.className),G[Tc(E)&&!hg.has(E)?"class":"className"]=te,ue&&(G.ref=ue),w.createElement(E,G)})($,J,X)}L.displayName=x;var $=sn.forwardRef(L);return $.attrs=D,$.componentStyle=k,$.displayName=x,$.shouldForwardProp=R,$.foldedComponentIds=s?Sa(c.foldedComponentIds,c.styledComponentId):"",$.styledComponentId=T,$.target=s?c.target:n,Object.defineProperty($,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(J){this._foldedDefaultProps=s?(function(X){for(var P=[],K=1;K<arguments.length;K++)P[K-1]=arguments[K];for(var ue=0,me=P;ue<me.length;ue++)Xc(X,me[ue],!0);return X})({},c.defaultProps,J):J}}),Ef($,function(){return".".concat($.styledComponentId)}),f&&bg($,n,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),$}function tm(n,l){for(var r=[n[0]],s=0,c=l.length;s<c;s+=1)r.push(l[s],n[s+1]);return r}var nm=function(n){return Object.assign(n,{isCss:!0})};function Tf(n){for(var l=[],r=1;r<arguments.length;r++)l[r-1]=arguments[r];if(Ri(n)||Ql(n))return nm(ea(tm(Ks,bi([n],l,!0))));var s=n;return l.length===0&&s.length===1&&typeof s[0]=="string"?ea(s):nm(ea(tm(s,l)))}function Zc(n,l,r){if(r===void 0&&(r=Ei),!l)throw Vl(1,l);var s=function(c){for(var f=[],d=1;d<arguments.length;d++)f[d-1]=arguments[d];return n(l,r,Tf.apply(void 0,bi([c],f,!1)))};return s.attrs=function(c){return Zc(n,l,ot(ot({},r),{attrs:Array.prototype.concat(r.attrs,c).filter(Boolean)}))},s.withConfig=function(c){return Zc(n,l,ot(ot({},r),c))},s}var Ag=function(n){return Zc(MS,n)},O=Ag;hg.forEach(function(n){O[n]=Ag(n)});var _S=(function(){function n(l,r){this.rules=l,this.componentId=r,this.isStatic=Og(l),_s.registerId(this.componentId+1)}return n.prototype.createStyles=function(l,r,s,c){var f=c(Ds(ea(this.rules,r,s,c)),""),d=this.componentId+l;s.insertRules(d,d,f)},n.prototype.removeStyles=function(l,r){r.clearRules(this.componentId+l)},n.prototype.renderStyles=function(l,r,s,c){l>2&&_s.registerId(this.componentId+l),this.removeStyles(l,s),this.createStyles(l,r,s,c)},n})();function US(n){for(var l=[],r=1;r<arguments.length;r++)l[r-1]=arguments[r];var s=Tf.apply(void 0,bi([n],l,!1)),c="sc-global-".concat(Sf(JSON.stringify(s))),f=new _S(s,c),d=function(y){var p=Vc(),v=sn.useContext(Rf),x=sn.useRef(p.styleSheet.allocateGSInstance(c)).current;return p.styleSheet.server&&m(x,y,p.styleSheet,v,p.stylis),sn.useLayoutEffect(function(){if(!p.styleSheet.server)return m(x,y,p.styleSheet,v,p.stylis),function(){return f.removeStyles(x,p.styleSheet)}},[x,y,p.styleSheet,v,p.stylis]),null};function m(y,p,v,x,T){if(f.isStatic)f.renderStyles(y,tS,v,T);else{var D=ot(ot({},p),{theme:dg(p,x,d.defaultProps)});f.renderStyles(y,D,v,T)}}return sn.memo(d)}function Di(n){for(var l=[],r=1;r<arguments.length;r++)l[r-1]=arguments[r];var s=Ds(Tf.apply(void 0,bi([n],l,!1))),c=Sf(s);return new Eg(c,s)}const ee={primary:"rgba(28, 118, 207, 1)",secondary:"#fafafa;",accent:"#282828",mainBlue:"rgb(34, 132, 229)",mainDeepBlue:"rgba(28, 118, 207, 1);",mainLightBlue:"#0084ffff"},NS=O.nav`
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

`,BS=O.div`
  display: flex;
  align-items: center;
  flex: 1;
  justify-content: flex-start;
  gap: 12px;
`,LS=O.div`
  display: flex;
  align-items: center;
  flex: 1;
  justify-content: flex-end;
  gap: 48px;
`,Ac=O.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.2s;
  &:hover {
    transform: scale(1.2);
  }
`,qS=O.p`
  font-size: 28px;
  font-weight: 900;
  color: ${ee.primary};
  margin: 0;
  cursor: pointer;
`,Cc=O.img`
  width: 24px;
  height: 24px;
`,HS=O.div`
  display: flex;
  align-items: center;
  position: relative;
  gap: 16px; /* 아이콘과 검색창 사이 간격 */
`,kS=O.input`
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
`,YS=O.div`
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
`,am=O.div`
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
    color: ${ee.mainBlue};
  }
  
  &:active {
    background-color: #e9ecef;
  }
`,Mi=O.div`
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
`,QS=O.div`
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
`,GS=O.div`
    width: 100%;
    padding: 20px;
`;O.div`
    display: flex;
    flex-direction: row;
`;O.div`
    height: 100px;
    width: 10px;
`;const Ta=O.div.withConfig({shouldForwardProp:n=>!["h","w"].includes(n)})`
  height: ${({h:n})=>n?`${n}px`:"0"};
  width: ${({w:n})=>n?`${n}px`:"0"};
`,Vs=O.div`
  width: 100%;
  height: 100%;
  position: relative;
  z-index: 10;
`,_i=O.footer`
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
`;const XS=O.div`
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
`,KS=O.div`
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
`,VS=O.div`
  flex: 1;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.4;
  word-break: break-word;
`,ZS=O.button`
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
`,FS=O.div`
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 9999;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`,JS=({id:n,message:l,type:r,duration:s=3e3,onClose:c})=>(w.useEffect(()=>{const f=setTimeout(()=>{c(n)},s);return()=>clearTimeout(f)},[n,s,c]),g.jsxs(XS,{$type:r,children:[g.jsxs(KS,{$type:r,children:[r==="success"&&"✓",r==="error"&&"✕",r==="warning"&&"⚠",r==="info"&&"ℹ"]}),g.jsx(VS,{children:l}),g.jsx(ZS,{onClick:()=>c(n),children:"×"})]})),Cg=w.createContext(void 0),PS=({children:n})=>{const[l,r]=w.useState([]),s=w.useCallback(v=>{r(x=>x.filter(T=>T.id!==v))},[]),c=w.useCallback((v,x,T)=>{const R={id:Math.random().toString(36).substr(2,9),message:v,type:x,duration:T};r(z=>[...z,R])},[]),f=w.useCallback((v,x)=>{c(v,"success",x)},[c]),d=w.useCallback((v,x)=>{c(v,"error",x)},[c]),m=w.useCallback((v,x)=>{c(v,"warning",x)},[c]),y=w.useCallback((v,x)=>{c(v,"info",x)},[c]),p={showToast:c,showSuccess:f,showError:d,showWarning:m,showInfo:y};return g.jsxs(Cg.Provider,{value:p,children:[n,g.jsx(FS,{children:l.map(v=>g.jsx(JS,{id:v.id,message:v.message,type:v.type,duration:v.duration,onClose:s},v.id))})]})},Zl=()=>{const n=w.useContext(Cg);if(n===void 0)throw new Error("useToast must be used within a ToastProvider");return n},WS=()=>{const n=jt(),[l,r]=w.useState(!1),[s,c]=w.useState(""),[f,d]=w.useState(!1),m=w.useRef(null),{showToast:y}=Zl(),p=()=>{s&&(n(`/static/SearchPage/${s}`),c(""),r(!1))},v=R=>{R.key==="Enter"&&p()},x=()=>{d(R=>!R)},T=async()=>{const R="hcan1223@pusan.ac.kr";try{await navigator.clipboard.writeText(R),y("이메일 주소가 클립보드에 복사되었습니다","success")}catch{y(`버그 제보 이메일: ${R}`,"info")}d(!1)},D=()=>{window.open("https://github.com/patkrdj/Capstone","_blank"),d(!1)};return w.useEffect(()=>{const R=z=>{m.current&&!m.current.contains(z.target)&&d(!1)};return f&&document.addEventListener("mousedown",R),()=>{document.removeEventListener("mousedown",R)}},[f]),g.jsx(Mi,{children:g.jsxs(NS,{children:[g.jsx(BS,{children:g.jsx(qS,{onClick:()=>n("/static/"),children:"L.B"})}),g.jsxs(LS,{children:[g.jsxs(HS,{children:[g.jsx(kS,{type:"text",value:s,onChange:R=>c(R.target.value),placeholder:"검색어 입력 후 Enter",onKeyDown:v,open:l}),g.jsx(Ac,{onClick:()=>r(R=>!R),children:g.jsx(Cc,{src:Mx,alt:"search"})})]}),g.jsx(Ac,{onClick:()=>n("/static/My"),children:g.jsx(Cc,{src:_x,alt:"my"})}),g.jsxs(Ac,{ref:m,onClick:x,style:{position:"relative"},children:[g.jsx(Cc,{src:Ux,alt:"menu"}),f&&g.jsxs(YS,{children:[g.jsx(am,{onClick:T,children:"버그 제보하기"}),g.jsx(am,{onClick:D,children:"깃허브 페이지"})]})]})]})]})})},jg=O.div`
  position: relative;
  width: 100%;
  padding: 10px;
`,zg=O.div`
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
`,Us=O.button.withConfig({shouldForwardProp:n=>!["left","disabled"].includes(n)})`
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
  color: ${ee.mainBlue};
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
`,Dg=O.div`
  padding : 0px 5px;

`,Mg=O.button`
  background: white;
  color: ${ee.mainBlue};
  font-size: 16px;
  font-weight: 600;
  padding: 8px 18px;
  border: 2.5px solid ${ee.mainBlue};
  border-radius: 25px 30% 24px 52%; 
  cursor: pointer;
  transition: all 0.25s ease;

  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: ${ee.mainBlue};
    color: white;
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08);
  }
`,Ti=O.div`
  background-color: white;
  width: 100%;
  display: flex;
  flex-direction: column; /* 세로 정렬 */
  align-items: center;    /* 가운데 정렬 */
  gap: 16px;              /* 버튼 사이 간격 */
  justify-content: center;/* 화면 세로 가운데 */
  padding: 30px;
`,_g=O.div`
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
`;O.div`
  position: absolute;
  top: -50px;
  left: 0;
  background: red;
  color: white;
  padding: 10px;
  font-size: 14px;
  z-index: 9999;
  border: 2px solid blue;
`;O.span`
  margin-right: 4px;
  font-size: 14px;
`;O.span`
  font-weight: 500;
`;const Ug=O.div`
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
`,IS=O.div`
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

  &:hover ${Ug} {
    transform: translateY(0);
    opacity: 1;
  }

`,e2=O.div`
  width: 100%;
  position: relative;
  padding-top: 150%; /* 1:1 비율 */
  overflow: hidden;
`,t2=O.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.25s ease;

`,n2=O.h3`
  font-size: 14px;
  font-weight: 500;
  margin: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: #fff;
`,a2=O.span`
  font-size: 16px;
  font-weight: bold;
  color: #fff;
`,i2=O.span`
  font-size: 12px;
  color: #fff;
`,l2=O.span`
  font-size: 12px;
  color: #ddd;
`,r2=O.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`,s2=O.span`
  font-size: 12px;
  color: #999;
  text-decoration: line-through;
`;O.div`
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
`;function Ng({product:n,recommendReason:l=null}){const r=jt(),[s,c]=w.useState(!1),[f,d]=w.useState(!1),m=()=>{r(`/static/DetailPage/${n.movieId}`,{state:{product:n}})},y=p=>{p.stopPropagation(),c(!s)};return g.jsxs(IS,{onClick:m,onMouseEnter:()=>d(!0),onMouseLeave:()=>d(!1),style:{position:"relative"},children:[g.jsx(e2,{children:g.jsx(t2,{src:n.imageLink??"",alt:n.blurayTitle??""})}),g.jsxs(Ug,{children:[g.jsx(n2,{children:n.blurayTitle}),g.jsxs(r2,{children:[g.jsxs(a2,{children:[n.price?.toLocaleString(),"원"]}),g.jsxs(i2,{children:[" 해상도 : ",n.quality]})]}),n.isLimitedEdition&&g.jsx(s2,{children:"한정판!"}),g.jsx(l2,{children:n.siteName})]}),f&&l&&g.jsx("button",{onClick:y,style:{position:"absolute",top:"8px",right:"8px",background:"rgba(255, 215, 0, 0.9)",color:"#000",border:"none",borderRadius:"50%",width:"32px",height:"32px",fontSize:"16px",fontWeight:"bold",cursor:"pointer",zIndex:20,display:"flex",alignItems:"center",justifyContent:"center",boxShadow:"0 2px 8px rgba(0, 0, 0, 0.3)",transition:"all 0.2s ease",backdropFilter:"blur(4px)"},onMouseEnter:p=>{p.currentTarget.style.background="rgba(255, 215, 0, 1)",p.currentTarget.style.transform="scale(1.1)"},onMouseLeave:p=>{p.currentTarget.style.background="rgba(255, 215, 0, 0.9)",p.currentTarget.style.transform="scale(1)"},children:"💡"}),s&&l&&g.jsxs("div",{style:{position:"absolute",top:"0",left:"0",right:"0",bottom:"0",background:"rgba(0, 0, 0, 0.95)",color:"white",padding:"16px",borderRadius:"12px",fontSize:"13px",fontWeight:"500",zIndex:15,display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",textAlign:"center",lineHeight:"1.4",backdropFilter:"blur(4px)",border:"2px solid rgba(255, 215, 0, 0.3)",animation:"fadeIn 0.2s ease"},children:[g.jsxs("div",{style:{fontWeight:"700",marginBottom:"8px",color:"#ffd700",fontSize:"14px",display:"flex",alignItems:"center",gap:"6px"},children:[g.jsx("span",{children:"💡"}),g.jsx("span",{children:"추천 이유"})]}),g.jsx("div",{style:{fontSize:"12px",lineHeight:"1.3",color:"#f0f0f0"},children:l}),g.jsx("button",{onClick:p=>{p.stopPropagation(),c(!1)},style:{position:"absolute",top:"8px",right:"8px",background:"rgba(255, 255, 255, 0.2)",color:"white",border:"none",borderRadius:"50%",width:"24px",height:"24px",fontSize:"14px",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center"},children:"×"})]})]})}var Ui=class{constructor(){this.listeners=new Set,this.subscribe=this.subscribe.bind(this)}subscribe(n){return this.listeners.add(n),this.onSubscribe(),()=>{this.listeners.delete(n),this.onUnsubscribe()}}hasListeners(){return this.listeners.size>0}onSubscribe(){}onUnsubscribe(){}},u2={setTimeout:(n,l)=>setTimeout(n,l),clearTimeout:n=>clearTimeout(n),setInterval:(n,l)=>setInterval(n,l),clearInterval:n=>clearInterval(n)},o2=class{#e=u2;#t=!1;setTimeoutProvider(n){this.#e=n}setTimeout(n,l){return this.#e.setTimeout(n,l)}clearTimeout(n){this.#e.clearTimeout(n)}setInterval(n,l){return this.#e.setInterval(n,l)}clearInterval(n){this.#e.clearInterval(n)}},wa=new o2;function c2(n){setTimeout(n,0)}var Aa=typeof window>"u"||"Deno"in globalThis;function ft(){}function f2(n,l){return typeof n=="function"?n(l):n}function Fc(n){return typeof n=="number"&&n>=0&&n!==1/0}function Bg(n,l){return Math.max(n+(l||0)-Date.now(),0)}function ta(n,l){return typeof n=="function"?n(l):n}function Yt(n,l){return typeof n=="function"?n(l):n}function im(n,l){const{type:r="all",exact:s,fetchStatus:c,predicate:f,queryKey:d,stale:m}=n;if(d){if(s){if(l.queryHash!==Of(d,l.options))return!1}else if(!Gl(l.queryKey,d))return!1}if(r!=="all"){const y=l.isActive();if(r==="active"&&!y||r==="inactive"&&y)return!1}return!(typeof m=="boolean"&&l.isStale()!==m||c&&c!==l.state.fetchStatus||f&&!f(l))}function lm(n,l){const{exact:r,status:s,predicate:c,mutationKey:f}=n;if(f){if(!l.options.mutationKey)return!1;if(r){if(Ca(l.options.mutationKey)!==Ca(f))return!1}else if(!Gl(l.options.mutationKey,f))return!1}return!(s&&l.state.status!==s||c&&!c(l))}function Of(n,l){return(l?.queryKeyHashFn||Ca)(n)}function Ca(n){return JSON.stringify(n,(l,r)=>Jc(r)?Object.keys(r).sort().reduce((s,c)=>(s[c]=r[c],s),{}):r)}function Gl(n,l){return n===l?!0:typeof n!=typeof l?!1:n&&l&&typeof n=="object"&&typeof l=="object"?Object.keys(l).every(r=>Gl(n[r],l[r])):!1}var d2=Object.prototype.hasOwnProperty;function Lg(n,l){if(n===l)return n;const r=rm(n)&&rm(l);if(!r&&!(Jc(n)&&Jc(l)))return l;const c=(r?n:Object.keys(n)).length,f=r?l:Object.keys(l),d=f.length,m=r?new Array(d):{};let y=0;for(let p=0;p<d;p++){const v=r?p:f[p],x=n[v],T=l[v];if(x===T){m[v]=x,(r?p<c:d2.call(n,v))&&y++;continue}if(x===null||T===null||typeof x!="object"||typeof T!="object"){m[v]=T;continue}const D=Lg(x,T);m[v]=D,D===x&&y++}return c===d&&y===c?n:m}function Ns(n,l){if(!l||Object.keys(n).length!==Object.keys(l).length)return!1;for(const r in n)if(n[r]!==l[r])return!1;return!0}function rm(n){return Array.isArray(n)&&n.length===Object.keys(n).length}function Jc(n){if(!sm(n))return!1;const l=n.constructor;if(l===void 0)return!0;const r=l.prototype;return!(!sm(r)||!r.hasOwnProperty("isPrototypeOf")||Object.getPrototypeOf(n)!==Object.prototype)}function sm(n){return Object.prototype.toString.call(n)==="[object Object]"}function h2(n){return new Promise(l=>{wa.setTimeout(l,n)})}function Pc(n,l,r){return typeof r.structuralSharing=="function"?r.structuralSharing(n,l):r.structuralSharing!==!1?Lg(n,l):l}function p2(n,l,r=0){const s=[...n,l];return r&&s.length>r?s.slice(1):s}function m2(n,l,r=0){const s=[l,...n];return r&&s.length>r?s.slice(0,-1):s}var Af=Symbol();function qg(n,l){return!n.queryFn&&l?.initialPromise?()=>l.initialPromise:!n.queryFn||n.queryFn===Af?()=>Promise.reject(new Error(`Missing queryFn: '${n.queryHash}'`)):n.queryFn}function Hg(n,l){return typeof n=="function"?n(...l):!!n}var g2=class extends Ui{#e;#t;#n;constructor(){super(),this.#n=n=>{if(!Aa&&window.addEventListener){const l=()=>n();return window.addEventListener("visibilitychange",l,!1),()=>{window.removeEventListener("visibilitychange",l)}}}}onSubscribe(){this.#t||this.setEventListener(this.#n)}onUnsubscribe(){this.hasListeners()||(this.#t?.(),this.#t=void 0)}setEventListener(n){this.#n=n,this.#t?.(),this.#t=n(l=>{typeof l=="boolean"?this.setFocused(l):this.onFocus()})}setFocused(n){this.#e!==n&&(this.#e=n,this.onFocus())}onFocus(){const n=this.isFocused();this.listeners.forEach(l=>{l(n)})}isFocused(){return typeof this.#e=="boolean"?this.#e:globalThis.document?.visibilityState!=="hidden"}},Cf=new g2;function Wc(){let n,l;const r=new Promise((c,f)=>{n=c,l=f});r.status="pending",r.catch(()=>{});function s(c){Object.assign(r,c),delete r.resolve,delete r.reject}return r.resolve=c=>{s({status:"fulfilled",value:c}),n(c)},r.reject=c=>{s({status:"rejected",reason:c}),l(c)},r}var y2=c2;function v2(){let n=[],l=0,r=m=>{m()},s=m=>{m()},c=y2;const f=m=>{l?n.push(m):c(()=>{r(m)})},d=()=>{const m=n;n=[],m.length&&c(()=>{s(()=>{m.forEach(y=>{r(y)})})})};return{batch:m=>{let y;l++;try{y=m()}finally{l--,l||d()}return y},batchCalls:m=>(...y)=>{f(()=>{m(...y)})},schedule:f,setNotifyFunction:m=>{r=m},setBatchNotifyFunction:m=>{s=m},setScheduler:m=>{c=m}}}var Ve=v2(),b2=class extends Ui{#e=!0;#t;#n;constructor(){super(),this.#n=n=>{if(!Aa&&window.addEventListener){const l=()=>n(!0),r=()=>n(!1);return window.addEventListener("online",l,!1),window.addEventListener("offline",r,!1),()=>{window.removeEventListener("online",l),window.removeEventListener("offline",r)}}}}onSubscribe(){this.#t||this.setEventListener(this.#n)}onUnsubscribe(){this.hasListeners()||(this.#t?.(),this.#t=void 0)}setEventListener(n){this.#n=n,this.#t?.(),this.#t=n(this.setOnline.bind(this))}setOnline(n){this.#e!==n&&(this.#e=n,this.listeners.forEach(r=>{r(n)}))}isOnline(){return this.#e}},Bs=new b2;function x2(n){return Math.min(1e3*2**n,3e4)}function kg(n){return(n??"online")==="online"?Bs.isOnline():!0}var Ic=class extends Error{constructor(n){super("CancelledError"),this.revert=n?.revert,this.silent=n?.silent}};function Yg(n){let l=!1,r=0,s;const c=Wc(),f=()=>c.status!=="pending",d=z=>{if(!f()){const C=new Ic(z);T(C),n.onCancel?.(C)}},m=()=>{l=!0},y=()=>{l=!1},p=()=>Cf.isFocused()&&(n.networkMode==="always"||Bs.isOnline())&&n.canRun(),v=()=>kg(n.networkMode)&&n.canRun(),x=z=>{f()||(s?.(),c.resolve(z))},T=z=>{f()||(s?.(),c.reject(z))},D=()=>new Promise(z=>{s=C=>{(f()||p())&&z(C)},n.onPause?.()}).then(()=>{s=void 0,f()||n.onContinue?.()}),R=()=>{if(f())return;let z;const C=r===0?n.initialPromise:void 0;try{z=C??n.fn()}catch(k){z=Promise.reject(k)}Promise.resolve(z).then(x).catch(k=>{if(f())return;const L=n.retry??(Aa?0:3),$=n.retryDelay??x2,J=typeof $=="function"?$(r,k):$,X=L===!0||typeof L=="number"&&r<L||typeof L=="function"&&L(r,k);if(l||!X){T(k);return}r++,n.onFail?.(r,k),h2(J).then(()=>p()?void 0:D()).then(()=>{l?T(k):R()})})};return{promise:c,status:()=>c.status,cancel:d,continue:()=>(s?.(),c),cancelRetry:m,continueRetry:y,canStart:v,start:()=>(v()?R():D().then(R),c)}}var Qg=class{#e;destroy(){this.clearGcTimeout()}scheduleGc(){this.clearGcTimeout(),Fc(this.gcTime)&&(this.#e=wa.setTimeout(()=>{this.optionalRemove()},this.gcTime))}updateGcTime(n){this.gcTime=Math.max(this.gcTime||0,n??(Aa?1/0:300*1e3))}clearGcTimeout(){this.#e&&(wa.clearTimeout(this.#e),this.#e=void 0)}},S2=class extends Qg{#e;#t;#n;#a;#i;#r;#s;constructor(n){super(),this.#s=!1,this.#r=n.defaultOptions,this.setOptions(n.options),this.observers=[],this.#a=n.client,this.#n=this.#a.getQueryCache(),this.queryKey=n.queryKey,this.queryHash=n.queryHash,this.#e=um(this.options),this.state=n.state??this.#e,this.scheduleGc()}get meta(){return this.options.meta}get promise(){return this.#i?.promise}setOptions(n){if(this.options={...this.#r,...n},this.updateGcTime(this.options.gcTime),this.state&&this.state.data===void 0){const l=um(this.options);l.data!==void 0&&(this.setData(l.data,{updatedAt:l.dataUpdatedAt,manual:!0}),this.#e=l)}}optionalRemove(){!this.observers.length&&this.state.fetchStatus==="idle"&&this.#n.remove(this)}setData(n,l){const r=Pc(this.state.data,n,this.options);return this.#l({data:r,type:"success",dataUpdatedAt:l?.updatedAt,manual:l?.manual}),r}setState(n,l){this.#l({type:"setState",state:n,setStateOptions:l})}cancel(n){const l=this.#i?.promise;return this.#i?.cancel(n),l?l.then(ft).catch(ft):Promise.resolve()}destroy(){super.destroy(),this.cancel({silent:!0})}reset(){this.destroy(),this.setState(this.#e)}isActive(){return this.observers.some(n=>Yt(n.options.enabled,this)!==!1)}isDisabled(){return this.getObserversCount()>0?!this.isActive():this.options.queryFn===Af||this.state.dataUpdateCount+this.state.errorUpdateCount===0}isStatic(){return this.getObserversCount()>0?this.observers.some(n=>ta(n.options.staleTime,this)==="static"):!1}isStale(){return this.getObserversCount()>0?this.observers.some(n=>n.getCurrentResult().isStale):this.state.data===void 0||this.state.isInvalidated}isStaleByTime(n=0){return this.state.data===void 0?!0:n==="static"?!1:this.state.isInvalidated?!0:!Bg(this.state.dataUpdatedAt,n)}onFocus(){this.observers.find(l=>l.shouldFetchOnWindowFocus())?.refetch({cancelRefetch:!1}),this.#i?.continue()}onOnline(){this.observers.find(l=>l.shouldFetchOnReconnect())?.refetch({cancelRefetch:!1}),this.#i?.continue()}addObserver(n){this.observers.includes(n)||(this.observers.push(n),this.clearGcTimeout(),this.#n.notify({type:"observerAdded",query:this,observer:n}))}removeObserver(n){this.observers.includes(n)&&(this.observers=this.observers.filter(l=>l!==n),this.observers.length||(this.#i&&(this.#s?this.#i.cancel({revert:!0}):this.#i.cancelRetry()),this.scheduleGc()),this.#n.notify({type:"observerRemoved",query:this,observer:n}))}getObserversCount(){return this.observers.length}invalidate(){this.state.isInvalidated||this.#l({type:"invalidate"})}async fetch(n,l){if(this.state.fetchStatus!=="idle"&&this.#i?.status()!=="rejected"){if(this.state.data!==void 0&&l?.cancelRefetch)this.cancel({silent:!0});else if(this.#i)return this.#i.continueRetry(),this.#i.promise}if(n&&this.setOptions(n),!this.options.queryFn){const m=this.observers.find(y=>y.options.queryFn);m&&this.setOptions(m.options)}const r=new AbortController,s=m=>{Object.defineProperty(m,"signal",{enumerable:!0,get:()=>(this.#s=!0,r.signal)})},c=()=>{const m=qg(this.options,l),p=(()=>{const v={client:this.#a,queryKey:this.queryKey,meta:this.meta};return s(v),v})();return this.#s=!1,this.options.persister?this.options.persister(m,p,this):m(p)},d=(()=>{const m={fetchOptions:l,options:this.options,queryKey:this.queryKey,client:this.#a,state:this.state,fetchFn:c};return s(m),m})();this.options.behavior?.onFetch(d,this),this.#t=this.state,(this.state.fetchStatus==="idle"||this.state.fetchMeta!==d.fetchOptions?.meta)&&this.#l({type:"fetch",meta:d.fetchOptions?.meta}),this.#i=Yg({initialPromise:l?.initialPromise,fn:d.fetchFn,onCancel:m=>{m instanceof Ic&&m.revert&&this.setState({...this.#t,fetchStatus:"idle"}),r.abort()},onFail:(m,y)=>{this.#l({type:"failed",failureCount:m,error:y})},onPause:()=>{this.#l({type:"pause"})},onContinue:()=>{this.#l({type:"continue"})},retry:d.options.retry,retryDelay:d.options.retryDelay,networkMode:d.options.networkMode,canRun:()=>!0});try{const m=await this.#i.start();if(m===void 0)throw new Error(`${this.queryHash} data is undefined`);return this.setData(m),this.#n.config.onSuccess?.(m,this),this.#n.config.onSettled?.(m,this.state.error,this),m}catch(m){if(m instanceof Ic){if(m.silent)return this.#i.promise;if(m.revert){if(this.state.data===void 0)throw m;return this.state.data}}throw this.#l({type:"error",error:m}),this.#n.config.onError?.(m,this),this.#n.config.onSettled?.(this.state.data,m,this),m}finally{this.scheduleGc()}}#l(n){const l=r=>{switch(n.type){case"failed":return{...r,fetchFailureCount:n.failureCount,fetchFailureReason:n.error};case"pause":return{...r,fetchStatus:"paused"};case"continue":return{...r,fetchStatus:"fetching"};case"fetch":return{...r,...Gg(r.data,this.options),fetchMeta:n.meta??null};case"success":const s={...r,data:n.data,dataUpdateCount:r.dataUpdateCount+1,dataUpdatedAt:n.dataUpdatedAt??Date.now(),error:null,isInvalidated:!1,status:"success",...!n.manual&&{fetchStatus:"idle",fetchFailureCount:0,fetchFailureReason:null}};return this.#t=n.manual?s:void 0,s;case"error":const c=n.error;return{...r,error:c,errorUpdateCount:r.errorUpdateCount+1,errorUpdatedAt:Date.now(),fetchFailureCount:r.fetchFailureCount+1,fetchFailureReason:c,fetchStatus:"idle",status:"error"};case"invalidate":return{...r,isInvalidated:!0};case"setState":return{...r,...n.state}}};this.state=l(this.state),Ve.batch(()=>{this.observers.forEach(r=>{r.onQueryUpdate()}),this.#n.notify({query:this,type:"updated",action:n})})}};function Gg(n,l){return{fetchFailureCount:0,fetchFailureReason:null,fetchStatus:kg(l.networkMode)?"fetching":"paused",...n===void 0&&{error:null,status:"pending"}}}function um(n){const l=typeof n.initialData=="function"?n.initialData():n.initialData,r=l!==void 0,s=r?typeof n.initialDataUpdatedAt=="function"?n.initialDataUpdatedAt():n.initialDataUpdatedAt:0;return{data:l,dataUpdateCount:0,dataUpdatedAt:r?s??Date.now():0,error:null,errorUpdateCount:0,errorUpdatedAt:0,fetchFailureCount:0,fetchFailureReason:null,fetchMeta:null,isInvalidated:!1,status:r?"success":"pending",fetchStatus:"idle"}}var $g=class extends Ui{constructor(n,l){super(),this.options=l,this.#e=n,this.#l=null,this.#s=Wc(),this.bindMethods(),this.setOptions(l)}#e;#t=void 0;#n=void 0;#a=void 0;#i;#r;#s;#l;#m;#d;#h;#o;#c;#u;#p=new Set;bindMethods(){this.refetch=this.refetch.bind(this)}onSubscribe(){this.listeners.size===1&&(this.#t.addObserver(this),om(this.#t,this.options)?this.#f():this.updateResult(),this.#b())}onUnsubscribe(){this.hasListeners()||this.destroy()}shouldFetchOnReconnect(){return ef(this.#t,this.options,this.options.refetchOnReconnect)}shouldFetchOnWindowFocus(){return ef(this.#t,this.options,this.options.refetchOnWindowFocus)}destroy(){this.listeners=new Set,this.#x(),this.#S(),this.#t.removeObserver(this)}setOptions(n){const l=this.options,r=this.#t;if(this.options=this.#e.defaultQueryOptions(n),this.options.enabled!==void 0&&typeof this.options.enabled!="boolean"&&typeof this.options.enabled!="function"&&typeof Yt(this.options.enabled,this.#t)!="boolean")throw new Error("Expected enabled to be a boolean or a callback that returns a boolean");this.#w(),this.#t.setOptions(this.options),l._defaulted&&!Ns(this.options,l)&&this.#e.getQueryCache().notify({type:"observerOptionsUpdated",query:this.#t,observer:this});const s=this.hasListeners();s&&cm(this.#t,r,this.options,l)&&this.#f(),this.updateResult(),s&&(this.#t!==r||Yt(this.options.enabled,this.#t)!==Yt(l.enabled,this.#t)||ta(this.options.staleTime,this.#t)!==ta(l.staleTime,this.#t))&&this.#g();const c=this.#y();s&&(this.#t!==r||Yt(this.options.enabled,this.#t)!==Yt(l.enabled,this.#t)||c!==this.#u)&&this.#v(c)}getOptimisticResult(n){const l=this.#e.getQueryCache().build(this.#e,n),r=this.createResult(l,n);return E2(this,r)&&(this.#a=r,this.#r=this.options,this.#i=this.#t.state),r}getCurrentResult(){return this.#a}trackResult(n,l){return new Proxy(n,{get:(r,s)=>(this.trackProp(s),l?.(s),s==="promise"&&!this.options.experimental_prefetchInRender&&this.#s.status==="pending"&&this.#s.reject(new Error("experimental_prefetchInRender feature flag is not enabled")),Reflect.get(r,s))})}trackProp(n){this.#p.add(n)}getCurrentQuery(){return this.#t}refetch({...n}={}){return this.fetch({...n})}fetchOptimistic(n){const l=this.#e.defaultQueryOptions(n),r=this.#e.getQueryCache().build(this.#e,l);return r.fetch().then(()=>this.createResult(r,l))}fetch(n){return this.#f({...n,cancelRefetch:n.cancelRefetch??!0}).then(()=>(this.updateResult(),this.#a))}#f(n){this.#w();let l=this.#t.fetch(this.options,n);return n?.throwOnError||(l=l.catch(ft)),l}#g(){this.#x();const n=ta(this.options.staleTime,this.#t);if(Aa||this.#a.isStale||!Fc(n))return;const r=Bg(this.#a.dataUpdatedAt,n)+1;this.#o=wa.setTimeout(()=>{this.#a.isStale||this.updateResult()},r)}#y(){return(typeof this.options.refetchInterval=="function"?this.options.refetchInterval(this.#t):this.options.refetchInterval)??!1}#v(n){this.#S(),this.#u=n,!(Aa||Yt(this.options.enabled,this.#t)===!1||!Fc(this.#u)||this.#u===0)&&(this.#c=wa.setInterval(()=>{(this.options.refetchIntervalInBackground||Cf.isFocused())&&this.#f()},this.#u))}#b(){this.#g(),this.#v(this.#y())}#x(){this.#o&&(wa.clearTimeout(this.#o),this.#o=void 0)}#S(){this.#c&&(wa.clearInterval(this.#c),this.#c=void 0)}createResult(n,l){const r=this.#t,s=this.options,c=this.#a,f=this.#i,d=this.#r,y=n!==r?n.state:this.#n,{state:p}=n;let v={...p},x=!1,T;if(l._optimisticResults){const ue=this.hasListeners(),me=!ue&&om(n,l),se=ue&&cm(n,r,l,s);(me||se)&&(v={...v,...Gg(p.data,n.options)}),l._optimisticResults==="isRestoring"&&(v.fetchStatus="idle")}let{error:D,errorUpdatedAt:R,status:z}=v;T=v.data;let C=!1;if(l.placeholderData!==void 0&&T===void 0&&z==="pending"){let ue;c?.isPlaceholderData&&l.placeholderData===d?.placeholderData?(ue=c.data,C=!0):ue=typeof l.placeholderData=="function"?l.placeholderData(this.#h?.state.data,this.#h):l.placeholderData,ue!==void 0&&(z="success",T=Pc(c?.data,ue,l),x=!0)}if(l.select&&T!==void 0&&!C)if(c&&T===f?.data&&l.select===this.#m)T=this.#d;else try{this.#m=l.select,T=l.select(T),T=Pc(c?.data,T,l),this.#d=T,this.#l=null}catch(ue){this.#l=ue}this.#l&&(D=this.#l,T=this.#d,R=Date.now(),z="error");const k=v.fetchStatus==="fetching",L=z==="pending",$=z==="error",J=L&&k,X=T!==void 0,K={status:z,fetchStatus:v.fetchStatus,isPending:L,isSuccess:z==="success",isError:$,isInitialLoading:J,isLoading:J,data:T,dataUpdatedAt:v.dataUpdatedAt,error:D,errorUpdatedAt:R,failureCount:v.fetchFailureCount,failureReason:v.fetchFailureReason,errorUpdateCount:v.errorUpdateCount,isFetched:v.dataUpdateCount>0||v.errorUpdateCount>0,isFetchedAfterMount:v.dataUpdateCount>y.dataUpdateCount||v.errorUpdateCount>y.errorUpdateCount,isFetching:k,isRefetching:k&&!L,isLoadingError:$&&!X,isPaused:v.fetchStatus==="paused",isPlaceholderData:x,isRefetchError:$&&X,isStale:jf(n,l),refetch:this.refetch,promise:this.#s,isEnabled:Yt(l.enabled,n)!==!1};if(this.options.experimental_prefetchInRender){const ue=oe=>{K.status==="error"?oe.reject(K.error):K.data!==void 0&&oe.resolve(K.data)},me=()=>{const oe=this.#s=K.promise=Wc();ue(oe)},se=this.#s;switch(se.status){case"pending":n.queryHash===r.queryHash&&ue(se);break;case"fulfilled":(K.status==="error"||K.data!==se.value)&&me();break;case"rejected":(K.status!=="error"||K.error!==se.reason)&&me();break}}return K}updateResult(){const n=this.#a,l=this.createResult(this.#t,this.options);if(this.#i=this.#t.state,this.#r=this.options,this.#i.data!==void 0&&(this.#h=this.#t),Ns(l,n))return;this.#a=l;const r=()=>{if(!n)return!0;const{notifyOnChangeProps:s}=this.options,c=typeof s=="function"?s():s;if(c==="all"||!c&&!this.#p.size)return!0;const f=new Set(c??this.#p);return this.options.throwOnError&&f.add("error"),Object.keys(this.#a).some(d=>{const m=d;return this.#a[m]!==n[m]&&f.has(m)})};this.#E({listeners:r()})}#w(){const n=this.#e.getQueryCache().build(this.#e,this.options);if(n===this.#t)return;const l=this.#t;this.#t=n,this.#n=n.state,this.hasListeners()&&(l?.removeObserver(this),n.addObserver(this))}onQueryUpdate(){this.updateResult(),this.hasListeners()&&this.#b()}#E(n){Ve.batch(()=>{n.listeners&&this.listeners.forEach(l=>{l(this.#a)}),this.#e.getQueryCache().notify({query:this.#t,type:"observerResultsUpdated"})})}};function w2(n,l){return Yt(l.enabled,n)!==!1&&n.state.data===void 0&&!(n.state.status==="error"&&l.retryOnMount===!1)}function om(n,l){return w2(n,l)||n.state.data!==void 0&&ef(n,l,l.refetchOnMount)}function ef(n,l,r){if(Yt(l.enabled,n)!==!1&&ta(l.staleTime,n)!=="static"){const s=typeof r=="function"?r(n):r;return s==="always"||s!==!1&&jf(n,l)}return!1}function cm(n,l,r,s){return(n!==l||Yt(s.enabled,n)===!1)&&(!r.suspense||n.state.status!=="error")&&jf(n,r)}function jf(n,l){return Yt(l.enabled,n)!==!1&&n.isStaleByTime(ta(l.staleTime,n))}function E2(n,l){return!Ns(n.getCurrentResult(),l)}function fm(n){return{onFetch:(l,r)=>{const s=l.options,c=l.fetchOptions?.meta?.fetchMore?.direction,f=l.state.data?.pages||[],d=l.state.data?.pageParams||[];let m={pages:[],pageParams:[]},y=0;const p=async()=>{let v=!1;const x=R=>{Object.defineProperty(R,"signal",{enumerable:!0,get:()=>(l.signal.aborted?v=!0:l.signal.addEventListener("abort",()=>{v=!0}),l.signal)})},T=qg(l.options,l.fetchOptions),D=async(R,z,C)=>{if(v)return Promise.reject();if(z==null&&R.pages.length)return Promise.resolve(R);const L=(()=>{const P={client:l.client,queryKey:l.queryKey,pageParam:z,direction:C?"backward":"forward",meta:l.options.meta};return x(P),P})(),$=await T(L),{maxPages:J}=l.options,X=C?m2:p2;return{pages:X(R.pages,$,J),pageParams:X(R.pageParams,z,J)}};if(c&&f.length){const R=c==="backward",z=R?R2:dm,C={pages:f,pageParams:d},k=z(s,C);m=await D(C,k,R)}else{const R=n??f.length;do{const z=y===0?d[0]??s.initialPageParam:dm(s,m);if(y>0&&z==null)break;m=await D(m,z),y++}while(y<R)}return m};l.options.persister?l.fetchFn=()=>l.options.persister?.(p,{client:l.client,queryKey:l.queryKey,meta:l.options.meta,signal:l.signal},r):l.fetchFn=p}}}function dm(n,{pages:l,pageParams:r}){const s=l.length-1;return l.length>0?n.getNextPageParam(l[s],l,r[s],r):void 0}function R2(n,{pages:l,pageParams:r}){return l.length>0?n.getPreviousPageParam?.(l[0],l,r[0],r):void 0}var T2=class extends Qg{#e;#t;#n;constructor(n){super(),this.mutationId=n.mutationId,this.#t=n.mutationCache,this.#e=[],this.state=n.state||Xg(),this.setOptions(n.options),this.scheduleGc()}setOptions(n){this.options=n,this.updateGcTime(this.options.gcTime)}get meta(){return this.options.meta}addObserver(n){this.#e.includes(n)||(this.#e.push(n),this.clearGcTimeout(),this.#t.notify({type:"observerAdded",mutation:this,observer:n}))}removeObserver(n){this.#e=this.#e.filter(l=>l!==n),this.scheduleGc(),this.#t.notify({type:"observerRemoved",mutation:this,observer:n})}optionalRemove(){this.#e.length||(this.state.status==="pending"?this.scheduleGc():this.#t.remove(this))}continue(){return this.#n?.continue()??this.execute(this.state.variables)}async execute(n){const l=()=>{this.#a({type:"continue"})};this.#n=Yg({fn:()=>this.options.mutationFn?this.options.mutationFn(n):Promise.reject(new Error("No mutationFn found")),onFail:(c,f)=>{this.#a({type:"failed",failureCount:c,error:f})},onPause:()=>{this.#a({type:"pause"})},onContinue:l,retry:this.options.retry??0,retryDelay:this.options.retryDelay,networkMode:this.options.networkMode,canRun:()=>this.#t.canRun(this)});const r=this.state.status==="pending",s=!this.#n.canStart();try{if(r)l();else{this.#a({type:"pending",variables:n,isPaused:s}),await this.#t.config.onMutate?.(n,this);const f=await this.options.onMutate?.(n);f!==this.state.context&&this.#a({type:"pending",context:f,variables:n,isPaused:s})}const c=await this.#n.start();return await this.#t.config.onSuccess?.(c,n,this.state.context,this),await this.options.onSuccess?.(c,n,this.state.context),await this.#t.config.onSettled?.(c,null,this.state.variables,this.state.context,this),await this.options.onSettled?.(c,null,n,this.state.context),this.#a({type:"success",data:c}),c}catch(c){try{throw await this.#t.config.onError?.(c,n,this.state.context,this),await this.options.onError?.(c,n,this.state.context),await this.#t.config.onSettled?.(void 0,c,this.state.variables,this.state.context,this),await this.options.onSettled?.(void 0,c,n,this.state.context),c}finally{this.#a({type:"error",error:c})}}finally{this.#t.runNext(this)}}#a(n){const l=r=>{switch(n.type){case"failed":return{...r,failureCount:n.failureCount,failureReason:n.error};case"pause":return{...r,isPaused:!0};case"continue":return{...r,isPaused:!1};case"pending":return{...r,context:n.context,data:void 0,failureCount:0,failureReason:null,error:null,isPaused:n.isPaused,status:"pending",variables:n.variables,submittedAt:Date.now()};case"success":return{...r,data:n.data,failureCount:0,failureReason:null,error:null,status:"success",isPaused:!1};case"error":return{...r,data:void 0,error:n.error,failureCount:r.failureCount+1,failureReason:n.error,isPaused:!1,status:"error"}}};this.state=l(this.state),Ve.batch(()=>{this.#e.forEach(r=>{r.onMutationUpdate(n)}),this.#t.notify({mutation:this,type:"updated",action:n})})}};function Xg(){return{context:void 0,data:void 0,error:null,failureCount:0,failureReason:null,isPaused:!1,status:"idle",variables:void 0,submittedAt:0}}var O2=class extends Ui{constructor(n={}){super(),this.config=n,this.#e=new Set,this.#t=new Map,this.#n=0}#e;#t;#n;build(n,l,r){const s=new T2({mutationCache:this,mutationId:++this.#n,options:n.defaultMutationOptions(l),state:r});return this.add(s),s}add(n){this.#e.add(n);const l=gs(n);if(typeof l=="string"){const r=this.#t.get(l);r?r.push(n):this.#t.set(l,[n])}this.notify({type:"added",mutation:n})}remove(n){if(this.#e.delete(n)){const l=gs(n);if(typeof l=="string"){const r=this.#t.get(l);if(r)if(r.length>1){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}else r[0]===n&&this.#t.delete(l)}}this.notify({type:"removed",mutation:n})}canRun(n){const l=gs(n);if(typeof l=="string"){const s=this.#t.get(l)?.find(c=>c.state.status==="pending");return!s||s===n}else return!0}runNext(n){const l=gs(n);return typeof l=="string"?this.#t.get(l)?.find(s=>s!==n&&s.state.isPaused)?.continue()??Promise.resolve():Promise.resolve()}clear(){Ve.batch(()=>{this.#e.forEach(n=>{this.notify({type:"removed",mutation:n})}),this.#e.clear(),this.#t.clear()})}getAll(){return Array.from(this.#e)}find(n){const l={exact:!0,...n};return this.getAll().find(r=>lm(l,r))}findAll(n={}){return this.getAll().filter(l=>lm(n,l))}notify(n){Ve.batch(()=>{this.listeners.forEach(l=>{l(n)})})}resumePausedMutations(){const n=this.getAll().filter(l=>l.state.isPaused);return Ve.batch(()=>Promise.all(n.map(l=>l.continue().catch(ft))))}};function gs(n){return n.options.scope?.id}var A2=class extends Ui{#e;#t=void 0;#n;#a;constructor(l,r){super(),this.#e=l,this.setOptions(r),this.bindMethods(),this.#i()}bindMethods(){this.mutate=this.mutate.bind(this),this.reset=this.reset.bind(this)}setOptions(l){const r=this.options;this.options=this.#e.defaultMutationOptions(l),Ns(this.options,r)||this.#e.getMutationCache().notify({type:"observerOptionsUpdated",mutation:this.#n,observer:this}),r?.mutationKey&&this.options.mutationKey&&Ca(r.mutationKey)!==Ca(this.options.mutationKey)?this.reset():this.#n?.state.status==="pending"&&this.#n.setOptions(this.options)}onUnsubscribe(){this.hasListeners()||this.#n?.removeObserver(this)}onMutationUpdate(l){this.#i(),this.#r(l)}getCurrentResult(){return this.#t}reset(){this.#n?.removeObserver(this),this.#n=void 0,this.#i(),this.#r()}mutate(l,r){return this.#a=r,this.#n?.removeObserver(this),this.#n=this.#e.getMutationCache().build(this.#e,this.options),this.#n.addObserver(this),this.#n.execute(l)}#i(){const l=this.#n?.state??Xg();this.#t={...l,isPending:l.status==="pending",isSuccess:l.status==="success",isError:l.status==="error",isIdle:l.status==="idle",mutate:this.mutate,reset:this.reset}}#r(l){Ve.batch(()=>{if(this.#a&&this.hasListeners()){const r=this.#t.variables,s=this.#t.context;l?.type==="success"?(this.#a.onSuccess?.(l.data,r,s),this.#a.onSettled?.(l.data,null,r,s)):l?.type==="error"&&(this.#a.onError?.(l.error,r,s),this.#a.onSettled?.(void 0,l.error,r,s))}this.listeners.forEach(r=>{r(this.#t)})})}},C2=class extends Ui{constructor(n={}){super(),this.config=n,this.#e=new Map}#e;build(n,l,r){const s=l.queryKey,c=l.queryHash??Of(s,l);let f=this.get(c);return f||(f=new S2({client:n,queryKey:s,queryHash:c,options:n.defaultQueryOptions(l),state:r,defaultOptions:n.getQueryDefaults(s)}),this.add(f)),f}add(n){this.#e.has(n.queryHash)||(this.#e.set(n.queryHash,n),this.notify({type:"added",query:n}))}remove(n){const l=this.#e.get(n.queryHash);l&&(n.destroy(),l===n&&this.#e.delete(n.queryHash),this.notify({type:"removed",query:n}))}clear(){Ve.batch(()=>{this.getAll().forEach(n=>{this.remove(n)})})}get(n){return this.#e.get(n)}getAll(){return[...this.#e.values()]}find(n){const l={exact:!0,...n};return this.getAll().find(r=>im(l,r))}findAll(n={}){const l=this.getAll();return Object.keys(n).length>0?l.filter(r=>im(n,r)):l}notify(n){Ve.batch(()=>{this.listeners.forEach(l=>{l(n)})})}onFocus(){Ve.batch(()=>{this.getAll().forEach(n=>{n.onFocus()})})}onOnline(){Ve.batch(()=>{this.getAll().forEach(n=>{n.onOnline()})})}},j2=class{#e;#t;#n;#a;#i;#r;#s;#l;constructor(n={}){this.#e=n.queryCache||new C2,this.#t=n.mutationCache||new O2,this.#n=n.defaultOptions||{},this.#a=new Map,this.#i=new Map,this.#r=0}mount(){this.#r++,this.#r===1&&(this.#s=Cf.subscribe(async n=>{n&&(await this.resumePausedMutations(),this.#e.onFocus())}),this.#l=Bs.subscribe(async n=>{n&&(await this.resumePausedMutations(),this.#e.onOnline())}))}unmount(){this.#r--,this.#r===0&&(this.#s?.(),this.#s=void 0,this.#l?.(),this.#l=void 0)}isFetching(n){return this.#e.findAll({...n,fetchStatus:"fetching"}).length}isMutating(n){return this.#t.findAll({...n,status:"pending"}).length}getQueryData(n){const l=this.defaultQueryOptions({queryKey:n});return this.#e.get(l.queryHash)?.state.data}ensureQueryData(n){const l=this.defaultQueryOptions(n),r=this.#e.build(this,l),s=r.state.data;return s===void 0?this.fetchQuery(n):(n.revalidateIfStale&&r.isStaleByTime(ta(l.staleTime,r))&&this.prefetchQuery(l),Promise.resolve(s))}getQueriesData(n){return this.#e.findAll(n).map(({queryKey:l,state:r})=>{const s=r.data;return[l,s]})}setQueryData(n,l,r){const s=this.defaultQueryOptions({queryKey:n}),f=this.#e.get(s.queryHash)?.state.data,d=f2(l,f);if(d!==void 0)return this.#e.build(this,s).setData(d,{...r,manual:!0})}setQueriesData(n,l,r){return Ve.batch(()=>this.#e.findAll(n).map(({queryKey:s})=>[s,this.setQueryData(s,l,r)]))}getQueryState(n){const l=this.defaultQueryOptions({queryKey:n});return this.#e.get(l.queryHash)?.state}removeQueries(n){const l=this.#e;Ve.batch(()=>{l.findAll(n).forEach(r=>{l.remove(r)})})}resetQueries(n,l){const r=this.#e;return Ve.batch(()=>(r.findAll(n).forEach(s=>{s.reset()}),this.refetchQueries({type:"active",...n},l)))}cancelQueries(n,l={}){const r={revert:!0,...l},s=Ve.batch(()=>this.#e.findAll(n).map(c=>c.cancel(r)));return Promise.all(s).then(ft).catch(ft)}invalidateQueries(n,l={}){return Ve.batch(()=>(this.#e.findAll(n).forEach(r=>{r.invalidate()}),n?.refetchType==="none"?Promise.resolve():this.refetchQueries({...n,type:n?.refetchType??n?.type??"active"},l)))}refetchQueries(n,l={}){const r={...l,cancelRefetch:l.cancelRefetch??!0},s=Ve.batch(()=>this.#e.findAll(n).filter(c=>!c.isDisabled()&&!c.isStatic()).map(c=>{let f=c.fetch(void 0,r);return r.throwOnError||(f=f.catch(ft)),c.state.fetchStatus==="paused"?Promise.resolve():f}));return Promise.all(s).then(ft)}fetchQuery(n){const l=this.defaultQueryOptions(n);l.retry===void 0&&(l.retry=!1);const r=this.#e.build(this,l);return r.isStaleByTime(ta(l.staleTime,r))?r.fetch(l):Promise.resolve(r.state.data)}prefetchQuery(n){return this.fetchQuery(n).then(ft).catch(ft)}fetchInfiniteQuery(n){return n.behavior=fm(n.pages),this.fetchQuery(n)}prefetchInfiniteQuery(n){return this.fetchInfiniteQuery(n).then(ft).catch(ft)}ensureInfiniteQueryData(n){return n.behavior=fm(n.pages),this.ensureQueryData(n)}resumePausedMutations(){return Bs.isOnline()?this.#t.resumePausedMutations():Promise.resolve()}getQueryCache(){return this.#e}getMutationCache(){return this.#t}getDefaultOptions(){return this.#n}setDefaultOptions(n){this.#n=n}setQueryDefaults(n,l){this.#a.set(Ca(n),{queryKey:n,defaultOptions:l})}getQueryDefaults(n){const l=[...this.#a.values()],r={};return l.forEach(s=>{Gl(n,s.queryKey)&&Object.assign(r,s.defaultOptions)}),r}setMutationDefaults(n,l){this.#i.set(Ca(n),{mutationKey:n,defaultOptions:l})}getMutationDefaults(n){const l=[...this.#i.values()],r={};return l.forEach(s=>{Gl(n,s.mutationKey)&&Object.assign(r,s.defaultOptions)}),r}defaultQueryOptions(n){if(n._defaulted)return n;const l={...this.#n.queries,...this.getQueryDefaults(n.queryKey),...n,_defaulted:!0};return l.queryHash||(l.queryHash=Of(l.queryKey,l)),l.refetchOnReconnect===void 0&&(l.refetchOnReconnect=l.networkMode!=="always"),l.throwOnError===void 0&&(l.throwOnError=!!l.suspense),!l.networkMode&&l.persister&&(l.networkMode="offlineFirst"),l.queryFn===Af&&(l.enabled=!1),l}defaultMutationOptions(n){return n?._defaulted?n:{...this.#n.mutations,...n?.mutationKey&&this.getMutationDefaults(n.mutationKey),...n,_defaulted:!0}}clear(){this.#e.clear(),this.#t.clear()}},Kg=w.createContext(void 0),zf=n=>{const l=w.useContext(Kg);if(!l)throw new Error("No QueryClient set, use QueryClientProvider to set one");return l},z2=({client:n,children:l})=>(w.useEffect(()=>(n.mount(),()=>{n.unmount()}),[n]),g.jsx(Kg.Provider,{value:n,children:l})),Vg=w.createContext(!1),D2=()=>w.useContext(Vg);Vg.Provider;function M2(){let n=!1;return{clearReset:()=>{n=!1},reset:()=>{n=!0},isReset:()=>n}}var _2=w.createContext(M2()),U2=()=>w.useContext(_2),N2=(n,l)=>{(n.suspense||n.throwOnError||n.experimental_prefetchInRender)&&(l.isReset()||(n.retryOnMount=!1))},B2=n=>{w.useEffect(()=>{n.clearReset()},[n])},L2=({result:n,errorResetBoundary:l,throwOnError:r,query:s,suspense:c})=>n.isError&&!l.isReset()&&!n.isFetching&&s&&(c&&n.data===void 0||Hg(r,[n.error,s])),q2=(n,l)=>l.state.data===void 0,H2=n=>{if(n.suspense){const r=c=>c==="static"?c:Math.max(c??1e3,1e3),s=n.staleTime;n.staleTime=typeof s=="function"?(...c)=>r(s(...c)):r(s),typeof n.gcTime=="number"&&(n.gcTime=Math.max(n.gcTime,1e3))}},k2=(n,l)=>n.isLoading&&n.isFetching&&!l,Y2=(n,l)=>n?.suspense&&l.isPending,hm=(n,l,r)=>l.fetchOptimistic(n).catch(()=>{r.clearReset()});function Zg(n,l,r){const s=D2(),c=U2(),f=zf(),d=f.defaultQueryOptions(n);f.getDefaultOptions().queries?._experimental_beforeQuery?.(d),d._optimisticResults=s?"isRestoring":"optimistic",H2(d),N2(d,c),B2(c);const m=!f.getQueryCache().get(d.queryHash),[y]=w.useState(()=>new l(f,d)),p=y.getOptimisticResult(d),v=!s&&n.subscribed!==!1;if(w.useSyncExternalStore(w.useCallback(x=>{const T=v?y.subscribe(Ve.batchCalls(x)):ft;return y.updateResult(),T},[y,v]),()=>y.getCurrentResult(),()=>y.getCurrentResult()),w.useEffect(()=>{y.setOptions(d)},[d,y]),Y2(d,p))throw hm(d,y,c);if(L2({result:p,errorResetBoundary:c,throwOnError:d.throwOnError,query:f.getQueryCache().get(d.queryHash),suspense:d.suspense}))throw p.error;return f.getDefaultOptions().queries?._experimental_afterQuery?.(d,p),d.experimental_prefetchInRender&&!Aa&&k2(p,s)&&(m?hm(d,y,c):f.getQueryCache().get(d.queryHash)?.promise)?.catch(ft).finally(()=>{y.updateResult()}),d.notifyOnChangeProps?p:y.trackResult(p)}function Df(n,l){return Zg(n,$g)}function Zs(n,l){return Zg({...n,enabled:!0,suspense:!0,throwOnError:q2,placeholderData:void 0},$g)}function Q2(n,l){const r=zf(),[s]=w.useState(()=>new A2(r,n));w.useEffect(()=>{s.setOptions(n)},[s,n]);const c=w.useSyncExternalStore(w.useCallback(d=>s.subscribe(Ve.batchCalls(d)),[s]),()=>s.getCurrentResult(),()=>s.getCurrentResult()),f=w.useCallback((d,m)=>{s.mutate(d,m).catch(ft)},[s]);if(c.error&&Hg(s.options.throwOnError,[c.error]))throw c.error;return{...c,mutate:f,mutateAsync:c.mutate}}async function Ni(n,l){const r=await fetch(`/api${n}`,{headers:{"Content-Type":"application/json"},...l});if(!r.ok)throw new Error(`API 요청 실패: ${r.status}`);return r.json()}async function Mf(n){return await Ni(`/sales/${n}`)}async function G2(n){const l=new URLSearchParams({query:n}).toString();return await Ni(`/sales/search?${l}`)}async function Fg(n,l,r=5){try{const s=await fetch("/api/recommendations/run",{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${l}`},body:JSON.stringify({userId:n,topN:r})});if(!s.ok)throw new Error(`추천 API 오류: ${s.status}`);return await s.json()}catch(s){throw console.error("추천 API 호출 실패:",s),s}}async function $2(n){return await Ni(`/movies/${n}`)}async function Jg(n=10){return await Ni(`/movies/popular?limit=${n}`)}function Pg(n){return Zs({queryKey:["SearchSale",n],queryFn:()=>G2(n),staleTime:300*1e3})}function X2(n){return Zs({queryKey:["PopularSales",n],queryFn:async()=>(await Jg(n)).flatMap(s=>s.salesInfo),staleTime:300*1e3})}function K2(n=20){return Zs({queryKey:["InfinitePopularSales"],queryFn:async()=>(await Jg(100)).flatMap(s=>s.salesInfo),staleTime:300*1e3})}function V2(){const{data:n}=K2(20),[l,r]=w.useState(20),s=w.useRef(null),c=w.useMemo(()=>n.slice(0,l),[n,l]),f=d=>{if(s.current){const m=s.current.clientWidth,y=s.current.scrollLeft,p=s.current.scrollWidth-s.current.clientWidth;if(d==="right"&&y>=p-10&&l<n.length){r(v=>Math.min(v+10,n.length)),setTimeout(()=>{s.current&&s.current.scrollBy({left:m,behavior:"smooth"})},100);return}s.current.scrollBy({left:d==="right"?m:-m,behavior:"smooth"})}};return g.jsx(_g,{children:g.jsxs(jg,{children:[g.jsx(Us,{left:!0,onClick:()=>f("left"),children:"◀"}),g.jsx(Dg,{children:g.jsx(zg,{ref:s,children:c.map(d=>g.jsx(Ng,{product:d},d.id))})}),g.jsx(Us,{onClick:()=>f("right"),children:"▶"})]})})}O.div`
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
`;const pm=O.p`
  font-size: 24px;            /* 메인보다는 살짝 작은 크기 */
  font-weight: 500;            /* 적당히 강조 */
  color: ${ee.mainDeepBlue};                 /* 부드러운 다크 그레이 */
  text-align: left;            /* 왼쪽 정렬 */
  margin: 0 0 16px 0;          /* 아래 여백으로 카드와 분리 */
  line-height: 1.5;            /* 읽기 좋은 줄 높이 */
  letter-spacing: 0.2px;       /* 서브 타이틀 느낌 강조 */
  padding-left : 20px
`;O.section`
  background: linear-gradient(135deg, ${ee.mainBlue} 0%, ${ee.mainDeepBlue} 100%);
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
`;O.div`
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
`;O.h1`
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
`;O.p`
  font-size: 1.25rem;
  font-weight: 400;
  margin: 0 0 32px 0;
  opacity: 0.9;
  line-height: 1.6;
  
  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;O.div`
  display: flex;
  gap: 32px;
  flex-wrap: wrap;
  
  @media (max-width: 768px) {
    gap: 20px;
  }
`;O.div`
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
`;O.span`
  font-size: 1.5rem;
`;O.span`
  font-weight: 500;
  font-size: 0.9rem;
`;const mm=O.div`
  height: 1px;
  background: linear-gradient(90deg, transparent, ${ee.mainBlue}20, transparent);
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
    background: ${ee.mainBlue};
    border-radius: 2px;
  }
`;O.div`
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  
  &:hover {
    transform: translateY(-8px) scale(1.02);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
  }
`;const Z2=O.div`
  position: relative;
  z-index: 10;
  height: 500px;
  width: 100vw;
  background-color: ${ee.mainBlue};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  transition: clip-path 0.2s ease-out;
`,F2=O.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 48px;
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
`,J2=O.div`
  display: flex;
  align-items: center;
  gap: 12px;
`,P2=O.div`
  display: flex;
  align-items: center;
  gap: 48px;
`,jc=O.div`
  cursor: pointer;
  transition: transform 0.2s;
  &:hover {
    transform: scale(1.2);
  }
`,W2=O.h1`
  font-size: 28px;
  color: white;
  font-weight: 900;
  margin: 0;
  cursor: pointer;
`,zc=O.img`
  width: 24px;
  height: 24px;
`,I2=O.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
  padding: 0 48px;
  margin-top: 24px;
`,ew=O.div`
  width: 100%;
  color: white;
`,tw=O.h2`
  font-size: 40px;
  font-weight: 800;
  margin: 0 0 8px 0;
  line-height: 1.1;
`,nw=O.p`
  font-size: 14px;
  font-weight: 300;
  color: white;
  margin: 0 0 16px 0;
`,aw=O.div`
  display: flex;
  align-items: center;
  gap: 8px;
`,iw=O.input`
  flex: 1;
  height: 48px;
  padding: 0 16px;
  border-radius: 24px;
  border: none;
  outline: none;
  font-size: 16px;
  box-shadow: inset 0 2px 6px rgba(0, 0, 0, 0.1);
`,lw=O.div`
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
`,rw=O.img`
  width: 24px;
  height: 24px;
`,sw=O.div`
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
`,gm=O.div`
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
    color: ${ee.mainBlue};
  }
  
  &:active {
    background-color: #e9ecef;
  }
`,uw="/static/img/search_w.svg",ow="/static/img/user_w.svg",cw="/static/img/menu_w.svg",fw="/static/img/heart_w.svg",dw=()=>{const n=jt(),[l,r]=w.useState(""),[s,c]=w.useState(!1),f=w.useRef(null),d=w.useRef(null),{showToast:m}=Zl(),y=w.useRef({x:48,y:0}),p=w.useRef({x:48,y:0});w.useEffect(()=>{const z=L=>{const{innerWidth:$,innerHeight:J}=window,X=40+L.clientX/$*20,P=L.clientY/J*10;p.current={x:X,y:P}};window.addEventListener("mousemove",z);let C;const k=()=>{y.current.x+=(p.current.x-y.current.x)*.08,y.current.y+=(p.current.y-y.current.y)*.08,f.current&&(f.current.style.clipPath=`ellipse(100% 80% at ${y.current.x}% ${y.current.y}%)`),C=requestAnimationFrame(k)};return k(),()=>{cancelAnimationFrame(C),window.removeEventListener("mousemove",z)}},[]);const v=()=>{n(`/static/SearchPage/${l}`)},x=z=>{z.key==="Enter"&&v()},T=()=>{c(z=>!z)},D=async()=>{const z="hcan1223@pusan.ac.kr";try{await navigator.clipboard.writeText(z),m("이메일 주소가 클립보드에 복사되었습니다","success")}catch{m(`버그 제보 이메일: ${z}`,"info")}c(!1)},R=()=>{window.open("https://github.com/patkrdj/Capstone","_blank"),c(!1)};return w.useEffect(()=>{const z=C=>{d.current&&!d.current.contains(C.target)&&c(!1)};return s&&document.addEventListener("mousedown",z),()=>{document.removeEventListener("mousedown",z)}},[s]),g.jsx(Z2,{ref:f,children:g.jsxs(Mi,{children:[g.jsxs(F2,{children:[g.jsx(J2,{children:g.jsx(W2,{onClick:()=>n("/static/"),children:"L.B"})}),g.jsxs(P2,{children:[g.jsx(jc,{onClick:()=>n("/static/onboarding"),children:g.jsx(zc,{src:fw,alt:"my"})}),g.jsx(jc,{onClick:()=>n("/static/My"),children:g.jsx(zc,{src:ow,alt:"my"})}),g.jsxs(jc,{ref:d,onClick:T,style:{position:"relative"},children:[g.jsx(zc,{src:cw,alt:"menu"}),s&&g.jsxs(sw,{children:[g.jsx(gm,{onClick:D,children:"버그 제보하기"}),g.jsx(gm,{onClick:R,children:"깃허브 페이지"})]})]})]})]}),g.jsx(I2,{children:g.jsxs(ew,{children:[g.jsx(tw,{children:"블루레이 추천"}),g.jsx(nw,{children:"당신의 인생영화를 찾아보세요!"}),g.jsxs(aw,{children:[g.jsx(iw,{value:l,onChange:z=>r(z.target.value),onKeyDown:x,placeholder:"상품명 검색"}),g.jsx(lw,{onClick:v,children:g.jsx(rw,{src:uw,alt:"search"})})]})]})})]})})},hw=w.createContext(null),Dc={didCatch:!1,error:null};class tf extends w.Component{constructor(l){super(l),this.resetErrorBoundary=this.resetErrorBoundary.bind(this),this.state=Dc}static getDerivedStateFromError(l){return{didCatch:!0,error:l}}resetErrorBoundary(){const{error:l}=this.state;if(l!==null){for(var r,s,c=arguments.length,f=new Array(c),d=0;d<c;d++)f[d]=arguments[d];(r=(s=this.props).onReset)===null||r===void 0||r.call(s,{args:f,reason:"imperative-api"}),this.setState(Dc)}}componentDidCatch(l,r){var s,c;(s=(c=this.props).onError)===null||s===void 0||s.call(c,l,r)}componentDidUpdate(l,r){const{didCatch:s}=this.state,{resetKeys:c}=this.props;if(s&&r.error!==null&&pw(l.resetKeys,c)){var f,d;(f=(d=this.props).onReset)===null||f===void 0||f.call(d,{next:c,prev:l.resetKeys,reason:"keys"}),this.setState(Dc)}}render(){const{children:l,fallbackRender:r,FallbackComponent:s,fallback:c}=this.props,{didCatch:f,error:d}=this.state;let m=l;if(f){const y={error:d,resetErrorBoundary:this.resetErrorBoundary};if(typeof r=="function")m=r(y);else if(s)m=w.createElement(s,y);else if(c!==void 0)m=c;else throw d}return w.createElement(hw.Provider,{value:{didCatch:f,error:d,resetErrorBoundary:this.resetErrorBoundary}},m)}}function pw(){let n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[];return n.length!==l.length||n.some((r,s)=>!Object.is(r,l[s]))}const ym=O.div`
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
`;O.div`
  border: 3px solid #f0f0f0;
  border-top: 3px solid #007bff;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: ${mw} 1s linear infinite;
`;const vm=O.div`
  font-size: 16px;
  color: #666;
  text-align: center;
  animation: ${gw} 2s ease-in-out infinite;
`,bm=O.div`
  display: flex;
  gap: 4px;
  margin-top: 10px;
`,yi=O.div`
  width: 8px;
  height: 8px;
  background-color: ${ee.mainBlue};
  border-radius: 50%;
  animation: ${yw} 1.4s ease-in-out infinite;
  animation-delay: ${n=>n.$delay}s;
`,bw=O.div`
  width: 200px;
  height: 4px;
  background-color: #f0f0f0;
  border-radius: 2px;
  overflow: hidden;
  margin-top: 10px;
`,xw=O.div`
  height: 100%;
  background: linear-gradient(90deg,${ee.mainBlue},${ee.mainDeepBlue},${ee.mainBlue});
  background-size: 200px 100%;
  animation: ${vw} 5s linear infinite;
  width: ${n=>n.$progress}%;
  transition: width 0.3s ease;
`,Oi=({loading:n=!0,message:l="로딩 중...",showProgress:r=!1,type:s="default"})=>{const[c,f]=w.useState(0),[d,m]=w.useState(l);return w.useEffect(()=>{if(n){if(r){const y=setInterval(()=>{f(p=>p>=90?p:p+Math.random()*10)},200);return()=>clearInterval(y)}if(r){const y=["데이터를 분석하고 있어요...","맞춤 추천을 찾고 있어요...","최적의 상품을 선별하고 있어요..."];let p=0;const v=setInterval(()=>{m(y[p%y.length]),p++},3e3);return()=>clearInterval(v)}}},[n,r]),n?s==="enhanced"?g.jsxs(ym,{children:[g.jsx(vm,{children:d}),r&&g.jsx(bw,{children:g.jsx(xw,{$progress:c})}),g.jsxs(bm,{children:[g.jsx(yi,{$delay:0}),g.jsx(yi,{$delay:.2}),g.jsx(yi,{$delay:.4})]})]}):g.jsxs(ym,{children:[g.jsx(vm,{children:l}),g.jsxs(bm,{children:[g.jsx(yi,{$delay:0}),g.jsx(yi,{$delay:.2}),g.jsx(yi,{$delay:.4})]})]}):null};function Wg(n,l){return function(){return n.apply(l,arguments)}}const{toString:Sw}=Object.prototype,{getPrototypeOf:_f}=Object,{iterator:Fs,toStringTag:Ig}=Symbol,Js=(n=>l=>{const r=Sw.call(l);return n[r]||(n[r]=r.slice(8,-1).toLowerCase())})(Object.create(null)),Pt=n=>(n=n.toLowerCase(),l=>Js(l)===n),Ps=n=>l=>typeof l===n,{isArray:Bi}=Array,$l=Ps("undefined");function Fl(n){return n!==null&&!$l(n)&&n.constructor!==null&&!$l(n.constructor)&&yt(n.constructor.isBuffer)&&n.constructor.isBuffer(n)}const ey=Pt("ArrayBuffer");function ww(n){let l;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?l=ArrayBuffer.isView(n):l=n&&n.buffer&&ey(n.buffer),l}const Ew=Ps("string"),yt=Ps("function"),ty=Ps("number"),Jl=n=>n!==null&&typeof n=="object",Rw=n=>n===!0||n===!1,Ts=n=>{if(Js(n)!=="object")return!1;const l=_f(n);return(l===null||l===Object.prototype||Object.getPrototypeOf(l)===null)&&!(Ig in n)&&!(Fs in n)},Tw=n=>{if(!Jl(n)||Fl(n))return!1;try{return Object.keys(n).length===0&&Object.getPrototypeOf(n)===Object.prototype}catch{return!1}},Ow=Pt("Date"),Aw=Pt("File"),Cw=Pt("Blob"),jw=Pt("FileList"),zw=n=>Jl(n)&&yt(n.pipe),Dw=n=>{let l;return n&&(typeof FormData=="function"&&n instanceof FormData||yt(n.append)&&((l=Js(n))==="formdata"||l==="object"&&yt(n.toString)&&n.toString()==="[object FormData]"))},Mw=Pt("URLSearchParams"),[_w,Uw,Nw,Bw]=["ReadableStream","Request","Response","Headers"].map(Pt),Lw=n=>n.trim?n.trim():n.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function Pl(n,l,{allOwnKeys:r=!1}={}){if(n===null||typeof n>"u")return;let s,c;if(typeof n!="object"&&(n=[n]),Bi(n))for(s=0,c=n.length;s<c;s++)l.call(null,n[s],s,n);else{if(Fl(n))return;const f=r?Object.getOwnPropertyNames(n):Object.keys(n),d=f.length;let m;for(s=0;s<d;s++)m=f[s],l.call(null,n[m],m,n)}}function ny(n,l){if(Fl(n))return null;l=l.toLowerCase();const r=Object.keys(n);let s=r.length,c;for(;s-- >0;)if(c=r[s],l===c.toLowerCase())return c;return null}const Ea=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,ay=n=>!$l(n)&&n!==Ea;function nf(){const{caseless:n}=ay(this)&&this||{},l={},r=(s,c)=>{const f=n&&ny(l,c)||c;Ts(l[f])&&Ts(s)?l[f]=nf(l[f],s):Ts(s)?l[f]=nf({},s):Bi(s)?l[f]=s.slice():l[f]=s};for(let s=0,c=arguments.length;s<c;s++)arguments[s]&&Pl(arguments[s],r);return l}const qw=(n,l,r,{allOwnKeys:s}={})=>(Pl(l,(c,f)=>{r&&yt(c)?n[f]=Wg(c,r):n[f]=c},{allOwnKeys:s}),n),Hw=n=>(n.charCodeAt(0)===65279&&(n=n.slice(1)),n),kw=(n,l,r,s)=>{n.prototype=Object.create(l.prototype,s),n.prototype.constructor=n,Object.defineProperty(n,"super",{value:l.prototype}),r&&Object.assign(n.prototype,r)},Yw=(n,l,r,s)=>{let c,f,d;const m={};if(l=l||{},n==null)return l;do{for(c=Object.getOwnPropertyNames(n),f=c.length;f-- >0;)d=c[f],(!s||s(d,n,l))&&!m[d]&&(l[d]=n[d],m[d]=!0);n=r!==!1&&_f(n)}while(n&&(!r||r(n,l))&&n!==Object.prototype);return l},Qw=(n,l,r)=>{n=String(n),(r===void 0||r>n.length)&&(r=n.length),r-=l.length;const s=n.indexOf(l,r);return s!==-1&&s===r},Gw=n=>{if(!n)return null;if(Bi(n))return n;let l=n.length;if(!ty(l))return null;const r=new Array(l);for(;l-- >0;)r[l]=n[l];return r},$w=(n=>l=>n&&l instanceof n)(typeof Uint8Array<"u"&&_f(Uint8Array)),Xw=(n,l)=>{const s=(n&&n[Fs]).call(n);let c;for(;(c=s.next())&&!c.done;){const f=c.value;l.call(n,f[0],f[1])}},Kw=(n,l)=>{let r;const s=[];for(;(r=n.exec(l))!==null;)s.push(r);return s},Vw=Pt("HTMLFormElement"),Zw=n=>n.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(r,s,c){return s.toUpperCase()+c}),xm=(({hasOwnProperty:n})=>(l,r)=>n.call(l,r))(Object.prototype),Fw=Pt("RegExp"),iy=(n,l)=>{const r=Object.getOwnPropertyDescriptors(n),s={};Pl(r,(c,f)=>{let d;(d=l(c,f,n))!==!1&&(s[f]=d||c)}),Object.defineProperties(n,s)},Jw=n=>{iy(n,(l,r)=>{if(yt(n)&&["arguments","caller","callee"].indexOf(r)!==-1)return!1;const s=n[r];if(yt(s)){if(l.enumerable=!1,"writable"in l){l.writable=!1;return}l.set||(l.set=()=>{throw Error("Can not rewrite read-only method '"+r+"'")})}})},Pw=(n,l)=>{const r={},s=c=>{c.forEach(f=>{r[f]=!0})};return Bi(n)?s(n):s(String(n).split(l)),r},Ww=()=>{},Iw=(n,l)=>n!=null&&Number.isFinite(n=+n)?n:l;function eE(n){return!!(n&&yt(n.append)&&n[Ig]==="FormData"&&n[Fs])}const tE=n=>{const l=new Array(10),r=(s,c)=>{if(Jl(s)){if(l.indexOf(s)>=0)return;if(Fl(s))return s;if(!("toJSON"in s)){l[c]=s;const f=Bi(s)?[]:{};return Pl(s,(d,m)=>{const y=r(d,c+1);!$l(y)&&(f[m]=y)}),l[c]=void 0,f}}return s};return r(n,0)},nE=Pt("AsyncFunction"),aE=n=>n&&(Jl(n)||yt(n))&&yt(n.then)&&yt(n.catch),ly=((n,l)=>n?setImmediate:l?((r,s)=>(Ea.addEventListener("message",({source:c,data:f})=>{c===Ea&&f===r&&s.length&&s.shift()()},!1),c=>{s.push(c),Ea.postMessage(r,"*")}))(`axios@${Math.random()}`,[]):r=>setTimeout(r))(typeof setImmediate=="function",yt(Ea.postMessage)),iE=typeof queueMicrotask<"u"?queueMicrotask.bind(Ea):typeof process<"u"&&process.nextTick||ly,lE=n=>n!=null&&yt(n[Fs]),B={isArray:Bi,isArrayBuffer:ey,isBuffer:Fl,isFormData:Dw,isArrayBufferView:ww,isString:Ew,isNumber:ty,isBoolean:Rw,isObject:Jl,isPlainObject:Ts,isEmptyObject:Tw,isReadableStream:_w,isRequest:Uw,isResponse:Nw,isHeaders:Bw,isUndefined:$l,isDate:Ow,isFile:Aw,isBlob:Cw,isRegExp:Fw,isFunction:yt,isStream:zw,isURLSearchParams:Mw,isTypedArray:$w,isFileList:jw,forEach:Pl,merge:nf,extend:qw,trim:Lw,stripBOM:Hw,inherits:kw,toFlatObject:Yw,kindOf:Js,kindOfTest:Pt,endsWith:Qw,toArray:Gw,forEachEntry:Xw,matchAll:Kw,isHTMLForm:Vw,hasOwnProperty:xm,hasOwnProp:xm,reduceDescriptors:iy,freezeMethods:Jw,toObjectSet:Pw,toCamelCase:Zw,noop:Ww,toFiniteNumber:Iw,findKey:ny,global:Ea,isContextDefined:ay,isSpecCompliantForm:eE,toJSONObject:tE,isAsyncFn:nE,isThenable:aE,setImmediate:ly,asap:iE,isIterable:lE};function ce(n,l,r,s,c){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=n,this.name="AxiosError",l&&(this.code=l),r&&(this.config=r),s&&(this.request=s),c&&(this.response=c,this.status=c.status?c.status:null)}B.inherits(ce,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:B.toJSONObject(this.config),code:this.code,status:this.status}}});const ry=ce.prototype,sy={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(n=>{sy[n]={value:n}});Object.defineProperties(ce,sy);Object.defineProperty(ry,"isAxiosError",{value:!0});ce.from=(n,l,r,s,c,f)=>{const d=Object.create(ry);return B.toFlatObject(n,d,function(y){return y!==Error.prototype},m=>m!=="isAxiosError"),ce.call(d,n.message,l,r,s,c),d.cause=n,d.name=n.name,f&&Object.assign(d,f),d};const rE=null;function af(n){return B.isPlainObject(n)||B.isArray(n)}function uy(n){return B.endsWith(n,"[]")?n.slice(0,-2):n}function Sm(n,l,r){return n?n.concat(l).map(function(c,f){return c=uy(c),!r&&f?"["+c+"]":c}).join(r?".":""):l}function sE(n){return B.isArray(n)&&!n.some(af)}const uE=B.toFlatObject(B,{},null,function(l){return/^is[A-Z]/.test(l)});function Ws(n,l,r){if(!B.isObject(n))throw new TypeError("target must be an object");l=l||new FormData,r=B.toFlatObject(r,{metaTokens:!0,dots:!1,indexes:!1},!1,function(z,C){return!B.isUndefined(C[z])});const s=r.metaTokens,c=r.visitor||v,f=r.dots,d=r.indexes,y=(r.Blob||typeof Blob<"u"&&Blob)&&B.isSpecCompliantForm(l);if(!B.isFunction(c))throw new TypeError("visitor must be a function");function p(R){if(R===null)return"";if(B.isDate(R))return R.toISOString();if(B.isBoolean(R))return R.toString();if(!y&&B.isBlob(R))throw new ce("Blob is not supported. Use a Buffer instead.");return B.isArrayBuffer(R)||B.isTypedArray(R)?y&&typeof Blob=="function"?new Blob([R]):Buffer.from(R):R}function v(R,z,C){let k=R;if(R&&!C&&typeof R=="object"){if(B.endsWith(z,"{}"))z=s?z:z.slice(0,-2),R=JSON.stringify(R);else if(B.isArray(R)&&sE(R)||(B.isFileList(R)||B.endsWith(z,"[]"))&&(k=B.toArray(R)))return z=uy(z),k.forEach(function($,J){!(B.isUndefined($)||$===null)&&l.append(d===!0?Sm([z],J,f):d===null?z:z+"[]",p($))}),!1}return af(R)?!0:(l.append(Sm(C,z,f),p(R)),!1)}const x=[],T=Object.assign(uE,{defaultVisitor:v,convertValue:p,isVisitable:af});function D(R,z){if(!B.isUndefined(R)){if(x.indexOf(R)!==-1)throw Error("Circular reference detected in "+z.join("."));x.push(R),B.forEach(R,function(k,L){(!(B.isUndefined(k)||k===null)&&c.call(l,k,B.isString(L)?L.trim():L,z,T))===!0&&D(k,z?z.concat(L):[L])}),x.pop()}}if(!B.isObject(n))throw new TypeError("data must be an object");return D(n),l}function wm(n){const l={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(n).replace(/[!'()~]|%20|%00/g,function(s){return l[s]})}function Uf(n,l){this._pairs=[],n&&Ws(n,this,l)}const oy=Uf.prototype;oy.append=function(l,r){this._pairs.push([l,r])};oy.toString=function(l){const r=l?function(s){return l.call(this,s,wm)}:wm;return this._pairs.map(function(c){return r(c[0])+"="+r(c[1])},"").join("&")};function oE(n){return encodeURIComponent(n).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function cy(n,l,r){if(!l)return n;const s=r&&r.encode||oE;B.isFunction(r)&&(r={serialize:r});const c=r&&r.serialize;let f;if(c?f=c(l,r):f=B.isURLSearchParams(l)?l.toString():new Uf(l,r).toString(s),f){const d=n.indexOf("#");d!==-1&&(n=n.slice(0,d)),n+=(n.indexOf("?")===-1?"?":"&")+f}return n}class Em{constructor(){this.handlers=[]}use(l,r,s){return this.handlers.push({fulfilled:l,rejected:r,synchronous:s?s.synchronous:!1,runWhen:s?s.runWhen:null}),this.handlers.length-1}eject(l){this.handlers[l]&&(this.handlers[l]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(l){B.forEach(this.handlers,function(s){s!==null&&l(s)})}}const fy={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},cE=typeof URLSearchParams<"u"?URLSearchParams:Uf,fE=typeof FormData<"u"?FormData:null,dE=typeof Blob<"u"?Blob:null,hE={isBrowser:!0,classes:{URLSearchParams:cE,FormData:fE,Blob:dE},protocols:["http","https","file","blob","url","data"]},Nf=typeof window<"u"&&typeof document<"u",lf=typeof navigator=="object"&&navigator||void 0,pE=Nf&&(!lf||["ReactNative","NativeScript","NS"].indexOf(lf.product)<0),mE=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",gE=Nf&&window.location.href||"http://localhost",yE=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:Nf,hasStandardBrowserEnv:pE,hasStandardBrowserWebWorkerEnv:mE,navigator:lf,origin:gE},Symbol.toStringTag,{value:"Module"})),ut={...yE,...hE};function vE(n,l){return Ws(n,new ut.classes.URLSearchParams,{visitor:function(r,s,c,f){return ut.isNode&&B.isBuffer(r)?(this.append(s,r.toString("base64")),!1):f.defaultVisitor.apply(this,arguments)},...l})}function bE(n){return B.matchAll(/\w+|\[(\w*)]/g,n).map(l=>l[0]==="[]"?"":l[1]||l[0])}function xE(n){const l={},r=Object.keys(n);let s;const c=r.length;let f;for(s=0;s<c;s++)f=r[s],l[f]=n[f];return l}function dy(n){function l(r,s,c,f){let d=r[f++];if(d==="__proto__")return!0;const m=Number.isFinite(+d),y=f>=r.length;return d=!d&&B.isArray(c)?c.length:d,y?(B.hasOwnProp(c,d)?c[d]=[c[d],s]:c[d]=s,!m):((!c[d]||!B.isObject(c[d]))&&(c[d]=[]),l(r,s,c[d],f)&&B.isArray(c[d])&&(c[d]=xE(c[d])),!m)}if(B.isFormData(n)&&B.isFunction(n.entries)){const r={};return B.forEachEntry(n,(s,c)=>{l(bE(s),c,r,0)}),r}return null}function SE(n,l,r){if(B.isString(n))try{return(l||JSON.parse)(n),B.trim(n)}catch(s){if(s.name!=="SyntaxError")throw s}return(r||JSON.stringify)(n)}const Wl={transitional:fy,adapter:["xhr","http","fetch"],transformRequest:[function(l,r){const s=r.getContentType()||"",c=s.indexOf("application/json")>-1,f=B.isObject(l);if(f&&B.isHTMLForm(l)&&(l=new FormData(l)),B.isFormData(l))return c?JSON.stringify(dy(l)):l;if(B.isArrayBuffer(l)||B.isBuffer(l)||B.isStream(l)||B.isFile(l)||B.isBlob(l)||B.isReadableStream(l))return l;if(B.isArrayBufferView(l))return l.buffer;if(B.isURLSearchParams(l))return r.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),l.toString();let m;if(f){if(s.indexOf("application/x-www-form-urlencoded")>-1)return vE(l,this.formSerializer).toString();if((m=B.isFileList(l))||s.indexOf("multipart/form-data")>-1){const y=this.env&&this.env.FormData;return Ws(m?{"files[]":l}:l,y&&new y,this.formSerializer)}}return f||c?(r.setContentType("application/json",!1),SE(l)):l}],transformResponse:[function(l){const r=this.transitional||Wl.transitional,s=r&&r.forcedJSONParsing,c=this.responseType==="json";if(B.isResponse(l)||B.isReadableStream(l))return l;if(l&&B.isString(l)&&(s&&!this.responseType||c)){const d=!(r&&r.silentJSONParsing)&&c;try{return JSON.parse(l)}catch(m){if(d)throw m.name==="SyntaxError"?ce.from(m,ce.ERR_BAD_RESPONSE,this,null,this.response):m}}return l}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:ut.classes.FormData,Blob:ut.classes.Blob},validateStatus:function(l){return l>=200&&l<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};B.forEach(["delete","get","head","post","put","patch"],n=>{Wl.headers[n]={}});const wE=B.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),EE=n=>{const l={};let r,s,c;return n&&n.split(`
`).forEach(function(d){c=d.indexOf(":"),r=d.substring(0,c).trim().toLowerCase(),s=d.substring(c+1).trim(),!(!r||l[r]&&wE[r])&&(r==="set-cookie"?l[r]?l[r].push(s):l[r]=[s]:l[r]=l[r]?l[r]+", "+s:s)}),l},Rm=Symbol("internals");function ql(n){return n&&String(n).trim().toLowerCase()}function Os(n){return n===!1||n==null?n:B.isArray(n)?n.map(Os):String(n)}function RE(n){const l=Object.create(null),r=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let s;for(;s=r.exec(n);)l[s[1]]=s[2];return l}const TE=n=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(n.trim());function Mc(n,l,r,s,c){if(B.isFunction(s))return s.call(this,l,r);if(c&&(l=r),!!B.isString(l)){if(B.isString(s))return l.indexOf(s)!==-1;if(B.isRegExp(s))return s.test(l)}}function OE(n){return n.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(l,r,s)=>r.toUpperCase()+s)}function AE(n,l){const r=B.toCamelCase(" "+l);["get","set","has"].forEach(s=>{Object.defineProperty(n,s+r,{value:function(c,f,d){return this[s].call(this,l,c,f,d)},configurable:!0})})}let vt=class{constructor(l){l&&this.set(l)}set(l,r,s){const c=this;function f(m,y,p){const v=ql(y);if(!v)throw new Error("header name must be a non-empty string");const x=B.findKey(c,v);(!x||c[x]===void 0||p===!0||p===void 0&&c[x]!==!1)&&(c[x||y]=Os(m))}const d=(m,y)=>B.forEach(m,(p,v)=>f(p,v,y));if(B.isPlainObject(l)||l instanceof this.constructor)d(l,r);else if(B.isString(l)&&(l=l.trim())&&!TE(l))d(EE(l),r);else if(B.isObject(l)&&B.isIterable(l)){let m={},y,p;for(const v of l){if(!B.isArray(v))throw TypeError("Object iterator must return a key-value pair");m[p=v[0]]=(y=m[p])?B.isArray(y)?[...y,v[1]]:[y,v[1]]:v[1]}d(m,r)}else l!=null&&f(r,l,s);return this}get(l,r){if(l=ql(l),l){const s=B.findKey(this,l);if(s){const c=this[s];if(!r)return c;if(r===!0)return RE(c);if(B.isFunction(r))return r.call(this,c,s);if(B.isRegExp(r))return r.exec(c);throw new TypeError("parser must be boolean|regexp|function")}}}has(l,r){if(l=ql(l),l){const s=B.findKey(this,l);return!!(s&&this[s]!==void 0&&(!r||Mc(this,this[s],s,r)))}return!1}delete(l,r){const s=this;let c=!1;function f(d){if(d=ql(d),d){const m=B.findKey(s,d);m&&(!r||Mc(s,s[m],m,r))&&(delete s[m],c=!0)}}return B.isArray(l)?l.forEach(f):f(l),c}clear(l){const r=Object.keys(this);let s=r.length,c=!1;for(;s--;){const f=r[s];(!l||Mc(this,this[f],f,l,!0))&&(delete this[f],c=!0)}return c}normalize(l){const r=this,s={};return B.forEach(this,(c,f)=>{const d=B.findKey(s,f);if(d){r[d]=Os(c),delete r[f];return}const m=l?OE(f):String(f).trim();m!==f&&delete r[f],r[m]=Os(c),s[m]=!0}),this}concat(...l){return this.constructor.concat(this,...l)}toJSON(l){const r=Object.create(null);return B.forEach(this,(s,c)=>{s!=null&&s!==!1&&(r[c]=l&&B.isArray(s)?s.join(", "):s)}),r}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([l,r])=>l+": "+r).join(`
`)}getSetCookie(){return this.get("set-cookie")||[]}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(l){return l instanceof this?l:new this(l)}static concat(l,...r){const s=new this(l);return r.forEach(c=>s.set(c)),s}static accessor(l){const s=(this[Rm]=this[Rm]={accessors:{}}).accessors,c=this.prototype;function f(d){const m=ql(d);s[m]||(AE(c,d),s[m]=!0)}return B.isArray(l)?l.forEach(f):f(l),this}};vt.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);B.reduceDescriptors(vt.prototype,({value:n},l)=>{let r=l[0].toUpperCase()+l.slice(1);return{get:()=>n,set(s){this[r]=s}}});B.freezeMethods(vt);function _c(n,l){const r=this||Wl,s=l||r,c=vt.from(s.headers);let f=s.data;return B.forEach(n,function(m){f=m.call(r,f,c.normalize(),l?l.status:void 0)}),c.normalize(),f}function hy(n){return!!(n&&n.__CANCEL__)}function Li(n,l,r){ce.call(this,n??"canceled",ce.ERR_CANCELED,l,r),this.name="CanceledError"}B.inherits(Li,ce,{__CANCEL__:!0});function py(n,l,r){const s=r.config.validateStatus;!r.status||!s||s(r.status)?n(r):l(new ce("Request failed with status code "+r.status,[ce.ERR_BAD_REQUEST,ce.ERR_BAD_RESPONSE][Math.floor(r.status/100)-4],r.config,r.request,r))}function CE(n){const l=/^([-+\w]{1,25})(:?\/\/|:)/.exec(n);return l&&l[1]||""}function jE(n,l){n=n||10;const r=new Array(n),s=new Array(n);let c=0,f=0,d;return l=l!==void 0?l:1e3,function(y){const p=Date.now(),v=s[f];d||(d=p),r[c]=y,s[c]=p;let x=f,T=0;for(;x!==c;)T+=r[x++],x=x%n;if(c=(c+1)%n,c===f&&(f=(f+1)%n),p-d<l)return;const D=v&&p-v;return D?Math.round(T*1e3/D):void 0}}function zE(n,l){let r=0,s=1e3/l,c,f;const d=(p,v=Date.now())=>{r=v,c=null,f&&(clearTimeout(f),f=null),n(...p)};return[(...p)=>{const v=Date.now(),x=v-r;x>=s?d(p,v):(c=p,f||(f=setTimeout(()=>{f=null,d(c)},s-x)))},()=>c&&d(c)]}const Ls=(n,l,r=3)=>{let s=0;const c=jE(50,250);return zE(f=>{const d=f.loaded,m=f.lengthComputable?f.total:void 0,y=d-s,p=c(y),v=d<=m;s=d;const x={loaded:d,total:m,progress:m?d/m:void 0,bytes:y,rate:p||void 0,estimated:p&&m&&v?(m-d)/p:void 0,event:f,lengthComputable:m!=null,[l?"download":"upload"]:!0};n(x)},r)},Tm=(n,l)=>{const r=n!=null;return[s=>l[0]({lengthComputable:r,total:n,loaded:s}),l[1]]},Om=n=>(...l)=>B.asap(()=>n(...l)),DE=ut.hasStandardBrowserEnv?((n,l)=>r=>(r=new URL(r,ut.origin),n.protocol===r.protocol&&n.host===r.host&&(l||n.port===r.port)))(new URL(ut.origin),ut.navigator&&/(msie|trident)/i.test(ut.navigator.userAgent)):()=>!0,ME=ut.hasStandardBrowserEnv?{write(n,l,r,s,c,f){const d=[n+"="+encodeURIComponent(l)];B.isNumber(r)&&d.push("expires="+new Date(r).toGMTString()),B.isString(s)&&d.push("path="+s),B.isString(c)&&d.push("domain="+c),f===!0&&d.push("secure"),document.cookie=d.join("; ")},read(n){const l=document.cookie.match(new RegExp("(^|;\\s*)("+n+")=([^;]*)"));return l?decodeURIComponent(l[3]):null},remove(n){this.write(n,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function _E(n){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(n)}function UE(n,l){return l?n.replace(/\/?\/$/,"")+"/"+l.replace(/^\/+/,""):n}function my(n,l,r){let s=!_E(l);return n&&(s||r==!1)?UE(n,l):l}const Am=n=>n instanceof vt?{...n}:n;function ja(n,l){l=l||{};const r={};function s(p,v,x,T){return B.isPlainObject(p)&&B.isPlainObject(v)?B.merge.call({caseless:T},p,v):B.isPlainObject(v)?B.merge({},v):B.isArray(v)?v.slice():v}function c(p,v,x,T){if(B.isUndefined(v)){if(!B.isUndefined(p))return s(void 0,p,x,T)}else return s(p,v,x,T)}function f(p,v){if(!B.isUndefined(v))return s(void 0,v)}function d(p,v){if(B.isUndefined(v)){if(!B.isUndefined(p))return s(void 0,p)}else return s(void 0,v)}function m(p,v,x){if(x in l)return s(p,v);if(x in n)return s(void 0,p)}const y={url:f,method:f,data:f,baseURL:d,transformRequest:d,transformResponse:d,paramsSerializer:d,timeout:d,timeoutMessage:d,withCredentials:d,withXSRFToken:d,adapter:d,responseType:d,xsrfCookieName:d,xsrfHeaderName:d,onUploadProgress:d,onDownloadProgress:d,decompress:d,maxContentLength:d,maxBodyLength:d,beforeRedirect:d,transport:d,httpAgent:d,httpsAgent:d,cancelToken:d,socketPath:d,responseEncoding:d,validateStatus:m,headers:(p,v,x)=>c(Am(p),Am(v),x,!0)};return B.forEach(Object.keys({...n,...l}),function(v){const x=y[v]||c,T=x(n[v],l[v],v);B.isUndefined(T)&&x!==m||(r[v]=T)}),r}const gy=n=>{const l=ja({},n);let{data:r,withXSRFToken:s,xsrfHeaderName:c,xsrfCookieName:f,headers:d,auth:m}=l;l.headers=d=vt.from(d),l.url=cy(my(l.baseURL,l.url,l.allowAbsoluteUrls),n.params,n.paramsSerializer),m&&d.set("Authorization","Basic "+btoa((m.username||"")+":"+(m.password?unescape(encodeURIComponent(m.password)):"")));let y;if(B.isFormData(r)){if(ut.hasStandardBrowserEnv||ut.hasStandardBrowserWebWorkerEnv)d.setContentType(void 0);else if((y=d.getContentType())!==!1){const[p,...v]=y?y.split(";").map(x=>x.trim()).filter(Boolean):[];d.setContentType([p||"multipart/form-data",...v].join("; "))}}if(ut.hasStandardBrowserEnv&&(s&&B.isFunction(s)&&(s=s(l)),s||s!==!1&&DE(l.url))){const p=c&&f&&ME.read(f);p&&d.set(c,p)}return l},NE=typeof XMLHttpRequest<"u",BE=NE&&function(n){return new Promise(function(r,s){const c=gy(n);let f=c.data;const d=vt.from(c.headers).normalize();let{responseType:m,onUploadProgress:y,onDownloadProgress:p}=c,v,x,T,D,R;function z(){D&&D(),R&&R(),c.cancelToken&&c.cancelToken.unsubscribe(v),c.signal&&c.signal.removeEventListener("abort",v)}let C=new XMLHttpRequest;C.open(c.method.toUpperCase(),c.url,!0),C.timeout=c.timeout;function k(){if(!C)return;const $=vt.from("getAllResponseHeaders"in C&&C.getAllResponseHeaders()),X={data:!m||m==="text"||m==="json"?C.responseText:C.response,status:C.status,statusText:C.statusText,headers:$,config:n,request:C};py(function(K){r(K),z()},function(K){s(K),z()},X),C=null}"onloadend"in C?C.onloadend=k:C.onreadystatechange=function(){!C||C.readyState!==4||C.status===0&&!(C.responseURL&&C.responseURL.indexOf("file:")===0)||setTimeout(k)},C.onabort=function(){C&&(s(new ce("Request aborted",ce.ECONNABORTED,n,C)),C=null)},C.onerror=function(){s(new ce("Network Error",ce.ERR_NETWORK,n,C)),C=null},C.ontimeout=function(){let J=c.timeout?"timeout of "+c.timeout+"ms exceeded":"timeout exceeded";const X=c.transitional||fy;c.timeoutErrorMessage&&(J=c.timeoutErrorMessage),s(new ce(J,X.clarifyTimeoutError?ce.ETIMEDOUT:ce.ECONNABORTED,n,C)),C=null},f===void 0&&d.setContentType(null),"setRequestHeader"in C&&B.forEach(d.toJSON(),function(J,X){C.setRequestHeader(X,J)}),B.isUndefined(c.withCredentials)||(C.withCredentials=!!c.withCredentials),m&&m!=="json"&&(C.responseType=c.responseType),p&&([T,R]=Ls(p,!0),C.addEventListener("progress",T)),y&&C.upload&&([x,D]=Ls(y),C.upload.addEventListener("progress",x),C.upload.addEventListener("loadend",D)),(c.cancelToken||c.signal)&&(v=$=>{C&&(s(!$||$.type?new Li(null,n,C):$),C.abort(),C=null)},c.cancelToken&&c.cancelToken.subscribe(v),c.signal&&(c.signal.aborted?v():c.signal.addEventListener("abort",v)));const L=CE(c.url);if(L&&ut.protocols.indexOf(L)===-1){s(new ce("Unsupported protocol "+L+":",ce.ERR_BAD_REQUEST,n));return}C.send(f||null)})},LE=(n,l)=>{const{length:r}=n=n?n.filter(Boolean):[];if(l||r){let s=new AbortController,c;const f=function(p){if(!c){c=!0,m();const v=p instanceof Error?p:this.reason;s.abort(v instanceof ce?v:new Li(v instanceof Error?v.message:v))}};let d=l&&setTimeout(()=>{d=null,f(new ce(`timeout ${l} of ms exceeded`,ce.ETIMEDOUT))},l);const m=()=>{n&&(d&&clearTimeout(d),d=null,n.forEach(p=>{p.unsubscribe?p.unsubscribe(f):p.removeEventListener("abort",f)}),n=null)};n.forEach(p=>p.addEventListener("abort",f));const{signal:y}=s;return y.unsubscribe=()=>B.asap(m),y}},qE=function*(n,l){let r=n.byteLength;if(r<l){yield n;return}let s=0,c;for(;s<r;)c=s+l,yield n.slice(s,c),s=c},HE=async function*(n,l){for await(const r of kE(n))yield*qE(r,l)},kE=async function*(n){if(n[Symbol.asyncIterator]){yield*n;return}const l=n.getReader();try{for(;;){const{done:r,value:s}=await l.read();if(r)break;yield s}}finally{await l.cancel()}},Cm=(n,l,r,s)=>{const c=HE(n,l);let f=0,d,m=y=>{d||(d=!0,s&&s(y))};return new ReadableStream({async pull(y){try{const{done:p,value:v}=await c.next();if(p){m(),y.close();return}let x=v.byteLength;if(r){let T=f+=x;r(T)}y.enqueue(new Uint8Array(v))}catch(p){throw m(p),p}},cancel(y){return m(y),c.return()}},{highWaterMark:2})},Is=typeof fetch=="function"&&typeof Request=="function"&&typeof Response=="function",yy=Is&&typeof ReadableStream=="function",YE=Is&&(typeof TextEncoder=="function"?(n=>l=>n.encode(l))(new TextEncoder):async n=>new Uint8Array(await new Response(n).arrayBuffer())),vy=(n,...l)=>{try{return!!n(...l)}catch{return!1}},QE=yy&&vy(()=>{let n=!1;const l=new Request(ut.origin,{body:new ReadableStream,method:"POST",get duplex(){return n=!0,"half"}}).headers.has("Content-Type");return n&&!l}),jm=64*1024,rf=yy&&vy(()=>B.isReadableStream(new Response("").body)),qs={stream:rf&&(n=>n.body)};Is&&(n=>{["text","arrayBuffer","blob","formData","stream"].forEach(l=>{!qs[l]&&(qs[l]=B.isFunction(n[l])?r=>r[l]():(r,s)=>{throw new ce(`Response type '${l}' is not supported`,ce.ERR_NOT_SUPPORT,s)})})})(new Response);const GE=async n=>{if(n==null)return 0;if(B.isBlob(n))return n.size;if(B.isSpecCompliantForm(n))return(await new Request(ut.origin,{method:"POST",body:n}).arrayBuffer()).byteLength;if(B.isArrayBufferView(n)||B.isArrayBuffer(n))return n.byteLength;if(B.isURLSearchParams(n)&&(n=n+""),B.isString(n))return(await YE(n)).byteLength},$E=async(n,l)=>{const r=B.toFiniteNumber(n.getContentLength());return r??GE(l)},XE=Is&&(async n=>{let{url:l,method:r,data:s,signal:c,cancelToken:f,timeout:d,onDownloadProgress:m,onUploadProgress:y,responseType:p,headers:v,withCredentials:x="same-origin",fetchOptions:T}=gy(n);p=p?(p+"").toLowerCase():"text";let D=LE([c,f&&f.toAbortSignal()],d),R;const z=D&&D.unsubscribe&&(()=>{D.unsubscribe()});let C;try{if(y&&QE&&r!=="get"&&r!=="head"&&(C=await $E(v,s))!==0){let X=new Request(l,{method:"POST",body:s,duplex:"half"}),P;if(B.isFormData(s)&&(P=X.headers.get("content-type"))&&v.setContentType(P),X.body){const[K,ue]=Tm(C,Ls(Om(y)));s=Cm(X.body,jm,K,ue)}}B.isString(x)||(x=x?"include":"omit");const k="credentials"in Request.prototype;R=new Request(l,{...T,signal:D,method:r.toUpperCase(),headers:v.normalize().toJSON(),body:s,duplex:"half",credentials:k?x:void 0});let L=await fetch(R,T);const $=rf&&(p==="stream"||p==="response");if(rf&&(m||$&&z)){const X={};["status","statusText","headers"].forEach(me=>{X[me]=L[me]});const P=B.toFiniteNumber(L.headers.get("content-length")),[K,ue]=m&&Tm(P,Ls(Om(m),!0))||[];L=new Response(Cm(L.body,jm,K,()=>{ue&&ue(),z&&z()}),X)}p=p||"text";let J=await qs[B.findKey(qs,p)||"text"](L,n);return!$&&z&&z(),await new Promise((X,P)=>{py(X,P,{data:J,headers:vt.from(L.headers),status:L.status,statusText:L.statusText,config:n,request:R})})}catch(k){throw z&&z(),k&&k.name==="TypeError"&&/Load failed|fetch/i.test(k.message)?Object.assign(new ce("Network Error",ce.ERR_NETWORK,n,R),{cause:k.cause||k}):ce.from(k,k&&k.code,n,R)}}),sf={http:rE,xhr:BE,fetch:XE};B.forEach(sf,(n,l)=>{if(n){try{Object.defineProperty(n,"name",{value:l})}catch{}Object.defineProperty(n,"adapterName",{value:l})}});const zm=n=>`- ${n}`,KE=n=>B.isFunction(n)||n===null||n===!1,by={getAdapter:n=>{n=B.isArray(n)?n:[n];const{length:l}=n;let r,s;const c={};for(let f=0;f<l;f++){r=n[f];let d;if(s=r,!KE(r)&&(s=sf[(d=String(r)).toLowerCase()],s===void 0))throw new ce(`Unknown adapter '${d}'`);if(s)break;c[d||"#"+f]=s}if(!s){const f=Object.entries(c).map(([m,y])=>`adapter ${m} `+(y===!1?"is not supported by the environment":"is not available in the build"));let d=l?f.length>1?`since :
`+f.map(zm).join(`
`):" "+zm(f[0]):"as no adapter specified";throw new ce("There is no suitable adapter to dispatch the request "+d,"ERR_NOT_SUPPORT")}return s},adapters:sf};function Uc(n){if(n.cancelToken&&n.cancelToken.throwIfRequested(),n.signal&&n.signal.aborted)throw new Li(null,n)}function Dm(n){return Uc(n),n.headers=vt.from(n.headers),n.data=_c.call(n,n.transformRequest),["post","put","patch"].indexOf(n.method)!==-1&&n.headers.setContentType("application/x-www-form-urlencoded",!1),by.getAdapter(n.adapter||Wl.adapter)(n).then(function(s){return Uc(n),s.data=_c.call(n,n.transformResponse,s),s.headers=vt.from(s.headers),s},function(s){return hy(s)||(Uc(n),s&&s.response&&(s.response.data=_c.call(n,n.transformResponse,s.response),s.response.headers=vt.from(s.response.headers))),Promise.reject(s)})}const xy="1.11.0",eu={};["object","boolean","number","function","string","symbol"].forEach((n,l)=>{eu[n]=function(s){return typeof s===n||"a"+(l<1?"n ":" ")+n}});const Mm={};eu.transitional=function(l,r,s){function c(f,d){return"[Axios v"+xy+"] Transitional option '"+f+"'"+d+(s?". "+s:"")}return(f,d,m)=>{if(l===!1)throw new ce(c(d," has been removed"+(r?" in "+r:"")),ce.ERR_DEPRECATED);return r&&!Mm[d]&&(Mm[d]=!0,console.warn(c(d," has been deprecated since v"+r+" and will be removed in the near future"))),l?l(f,d,m):!0}};eu.spelling=function(l){return(r,s)=>(console.warn(`${s} is likely a misspelling of ${l}`),!0)};function VE(n,l,r){if(typeof n!="object")throw new ce("options must be an object",ce.ERR_BAD_OPTION_VALUE);const s=Object.keys(n);let c=s.length;for(;c-- >0;){const f=s[c],d=l[f];if(d){const m=n[f],y=m===void 0||d(m,f,n);if(y!==!0)throw new ce("option "+f+" must be "+y,ce.ERR_BAD_OPTION_VALUE);continue}if(r!==!0)throw new ce("Unknown option "+f,ce.ERR_BAD_OPTION)}}const As={assertOptions:VE,validators:eu},ln=As.validators;let Oa=class{constructor(l){this.defaults=l||{},this.interceptors={request:new Em,response:new Em}}async request(l,r){try{return await this._request(l,r)}catch(s){if(s instanceof Error){let c={};Error.captureStackTrace?Error.captureStackTrace(c):c=new Error;const f=c.stack?c.stack.replace(/^.+\n/,""):"";try{s.stack?f&&!String(s.stack).endsWith(f.replace(/^.+\n.+\n/,""))&&(s.stack+=`
`+f):s.stack=f}catch{}}throw s}}_request(l,r){typeof l=="string"?(r=r||{},r.url=l):r=l||{},r=ja(this.defaults,r);const{transitional:s,paramsSerializer:c,headers:f}=r;s!==void 0&&As.assertOptions(s,{silentJSONParsing:ln.transitional(ln.boolean),forcedJSONParsing:ln.transitional(ln.boolean),clarifyTimeoutError:ln.transitional(ln.boolean)},!1),c!=null&&(B.isFunction(c)?r.paramsSerializer={serialize:c}:As.assertOptions(c,{encode:ln.function,serialize:ln.function},!0)),r.allowAbsoluteUrls!==void 0||(this.defaults.allowAbsoluteUrls!==void 0?r.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:r.allowAbsoluteUrls=!0),As.assertOptions(r,{baseUrl:ln.spelling("baseURL"),withXsrfToken:ln.spelling("withXSRFToken")},!0),r.method=(r.method||this.defaults.method||"get").toLowerCase();let d=f&&B.merge(f.common,f[r.method]);f&&B.forEach(["delete","get","head","post","put","patch","common"],R=>{delete f[R]}),r.headers=vt.concat(d,f);const m=[];let y=!0;this.interceptors.request.forEach(function(z){typeof z.runWhen=="function"&&z.runWhen(r)===!1||(y=y&&z.synchronous,m.unshift(z.fulfilled,z.rejected))});const p=[];this.interceptors.response.forEach(function(z){p.push(z.fulfilled,z.rejected)});let v,x=0,T;if(!y){const R=[Dm.bind(this),void 0];for(R.unshift(...m),R.push(...p),T=R.length,v=Promise.resolve(r);x<T;)v=v.then(R[x++],R[x++]);return v}T=m.length;let D=r;for(x=0;x<T;){const R=m[x++],z=m[x++];try{D=R(D)}catch(C){z.call(this,C);break}}try{v=Dm.call(this,D)}catch(R){return Promise.reject(R)}for(x=0,T=p.length;x<T;)v=v.then(p[x++],p[x++]);return v}getUri(l){l=ja(this.defaults,l);const r=my(l.baseURL,l.url,l.allowAbsoluteUrls);return cy(r,l.params,l.paramsSerializer)}};B.forEach(["delete","get","head","options"],function(l){Oa.prototype[l]=function(r,s){return this.request(ja(s||{},{method:l,url:r,data:(s||{}).data}))}});B.forEach(["post","put","patch"],function(l){function r(s){return function(f,d,m){return this.request(ja(m||{},{method:l,headers:s?{"Content-Type":"multipart/form-data"}:{},url:f,data:d}))}}Oa.prototype[l]=r(),Oa.prototype[l+"Form"]=r(!0)});let ZE=class Sy{constructor(l){if(typeof l!="function")throw new TypeError("executor must be a function.");let r;this.promise=new Promise(function(f){r=f});const s=this;this.promise.then(c=>{if(!s._listeners)return;let f=s._listeners.length;for(;f-- >0;)s._listeners[f](c);s._listeners=null}),this.promise.then=c=>{let f;const d=new Promise(m=>{s.subscribe(m),f=m}).then(c);return d.cancel=function(){s.unsubscribe(f)},d},l(function(f,d,m){s.reason||(s.reason=new Li(f,d,m),r(s.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(l){if(this.reason){l(this.reason);return}this._listeners?this._listeners.push(l):this._listeners=[l]}unsubscribe(l){if(!this._listeners)return;const r=this._listeners.indexOf(l);r!==-1&&this._listeners.splice(r,1)}toAbortSignal(){const l=new AbortController,r=s=>{l.abort(s)};return this.subscribe(r),l.signal.unsubscribe=()=>this.unsubscribe(r),l.signal}static source(){let l;return{token:new Sy(function(c){l=c}),cancel:l}}};function FE(n){return function(r){return n.apply(null,r)}}function JE(n){return B.isObject(n)&&n.isAxiosError===!0}const uf={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(uf).forEach(([n,l])=>{uf[l]=n});function wy(n){const l=new Oa(n),r=Wg(Oa.prototype.request,l);return B.extend(r,Oa.prototype,l,{allOwnKeys:!0}),B.extend(r,l,null,{allOwnKeys:!0}),r.create=function(c){return wy(ja(n,c))},r}const _e=wy(Wl);_e.Axios=Oa;_e.CanceledError=Li;_e.CancelToken=ZE;_e.isCancel=hy;_e.VERSION=xy;_e.toFormData=Ws;_e.AxiosError=ce;_e.Cancel=_e.CanceledError;_e.all=function(l){return Promise.all(l)};_e.spread=FE;_e.isAxiosError=JE;_e.mergeConfig=ja;_e.AxiosHeaders=vt;_e.formToJSON=n=>dy(B.isHTMLForm(n)?new FormData(n):n);_e.getAdapter=by.getAdapter;_e.HttpStatusCode=uf;_e.default=_e;const{Axios:cT,AxiosError:fT,CanceledError:dT,isCancel:hT,CancelToken:pT,VERSION:mT,all:gT,Cancel:yT,isAxiosError:vT,spread:bT,toFormData:xT,AxiosHeaders:ST,HttpStatusCode:wT,formToJSON:ET,getAdapter:RT,mergeConfig:TT}=_e,PE=_e.create({baseURL:"/api",headers:{"Content-Type":"application/json"}});async function WE(n,l){try{return(await PE.post("/login",{usernameOrEmail:n,password:l})).data}catch(r){throw _e.isAxiosError(r)?new Error(r.response?.data?.message??"로그인 실패"):new Error("알수없는 에러")}}_e.defaults.headers.common.Accept="application/json";const IE=async(n,l,r)=>{try{const{data:s}=await _e.post("/api/signup",{username:n,email:l,password:r},{headers:{"Content-Type":"application/json"}});return s}catch(s){throw console.error("회원가입 에러:",s.response||s),s}},Ey=async n=>{try{const{data:l}=await _e.get("/api/me",{headers:{Authorization:`Bearer ${n}`}});return l}catch(l){throw console.error("/me 조회 에러:",l.response||l),l}},ys="user";function eR(){const[n,l]=w.useState(null),[r,s]=w.useState(null),[c,f]=w.useState(!1),[d,m]=w.useState(null);w.useEffect(()=>{const x=localStorage.getItem(ys);if(x)try{const T=JSON.parse(x);l(T),T.accessToken&&y(T.accessToken)}catch{localStorage.removeItem(ys)}},[]);const y=w.useCallback(async x=>{try{const T=await Ey(x);s(T)}catch(T){console.error("사용자 정보 가져오기 실패:",T),s(null)}},[]),p=w.useCallback(async(x,T)=>{f(!0),m(null);try{const D=await WE(x,T);l(D),localStorage.setItem(ys,JSON.stringify(D)),await y(D.accessToken)}catch(D){throw new Error(D.message)}finally{f(!1)}},[y]),v=w.useCallback(()=>{l(null),s(null),localStorage.removeItem(ys)},[]);return{user:n,me:r,token:n?.accessToken||null,logIn:p,logOut:v,loading:c,error:d}}const Ry=w.createContext(void 0),Ty=({children:n})=>{const l=eR();return g.jsx(Ry.Provider,{value:l,children:n})},za=()=>{const n=w.useContext(Ry);if(!n)throw new Error("useAuth는 <AuthProvider> 안에서 사용되어야 합니다.");return n},tR=async(n,l)=>{const r=[];for(const s of n.results)if(s.saleId)try{const c=await Mf(s.saleId);r.push({product:c,reason:s.reason||null})}catch(c){console.warn(`Sale ID ${s.saleId}를 가져올 수 없습니다:`,c)}return r};function nR(n,l){return Df({queryKey:["infiniteRecommendations",n],queryFn:async()=>{if(!n||!l)throw new Error("사용자 ID 또는 토큰이 없습니다");const r=await Fg(n,l,5),s=await tR(r);return{recommendations:r,productsWithReasons:s}},enabled:!!n&&!!l,staleTime:300*1e3,gcTime:600*1e3})}async function aR(n,l){try{const r=await fetch("/api/reviews",{method:"POST",headers:{Authorization:`Bearer ${l}`,"Content-Type":"application/json"},body:JSON.stringify(n)});if(!r.ok){const c=await r.text();throw new Error(`서버 에러 (${r.status}): ${c}`)}const s=r.headers.get("content-type");if(s&&s.includes("application/json")){const c=await r.text();if(c.trim())return JSON.parse(c)}return}catch(r){throw r}}async function iR(n){return await Ni(`/reviews?salesId=${encodeURIComponent(n)}`)}async function lR(n){return await Ni(`/reviews?userId=${encodeURIComponent(n)}`)}const rR=async(n,l)=>{const r=await lR(n),s=[];for(const c of r)if(c.salesId)try{const f=await Mf(c.salesId);s.push({review:c,product:f})}catch(f){console.warn(`Sale ID ${c.salesId}를 가져올 수 없습니다:`,f)}return s};function Oy(n,l){return Df({queryKey:["userReviews",n],queryFn:()=>rR(n),staleTime:120*1e3,gcTime:300*1e3,enabled:n>0&&!!l})}const sR=({userId:n,token:l})=>{const{data:r,error:s,isLoading:c}=nR(n,l),[f,d]=w.useState([]),[m,y]=w.useState(!1),p=w.useRef(null);w.useEffect(()=>{r?.productsWithReasons&&f.length===0&&d(r.productsWithReasons)},[r?.productsWithReasons,f.length]);const v=w.useMemo(()=>f.map(D=>({product:D.product,recommendReason:D.reason})),[f]),x=w.useCallback(async()=>{if(!m){y(!0);try{const D=f.length+5,z=(await Fg(n,l,D)).results.slice(f.length),k=(await Promise.all(z.map(async L=>{if(L.saleId)try{return{product:await Mf(L.saleId),reason:L.reason||null}}catch($){return console.warn(`Sale ID ${L.saleId}를 가져올 수 없습니다:`,$),null}return null}))).filter(Boolean);d(L=>[...L,...k])}catch(D){console.error("추가 상품 로딩 실패:",D)}finally{y(!1)}}},[f.length,m,n,l]),T=D=>{if(p.current){const R=p.current.clientWidth,z=p.current.scrollLeft,C=p.current.scrollWidth-p.current.clientWidth;if(D==="right"&&z>=C-10){x();return}p.current.scrollBy({left:D==="right"?R:-R,behavior:"smooth"})}};if(c)return g.jsx("div",{style:{width:"100%"},children:g.jsx(Ti,{children:g.jsx(Oi,{type:"enhanced",message:"추천 상품을 불러오는 중..."})})});if(s)throw s instanceof Error?s:new Error("추천 데이터를 불러오는 중 오류가 발생했습니다.");return!r?.productsWithReasons||r.productsWithReasons.length===0?g.jsx("div",{style:{width:"100%"},children:g.jsx(Ti,{children:"추천 결과가 없습니다"})}):g.jsx(_g,{children:g.jsxs(jg,{children:[g.jsx(Us,{left:!0,onClick:()=>T("left"),children:"◀"}),g.jsx(Dg,{children:g.jsxs(zg,{ref:p,children:[v.map(({product:D,recommendReason:R})=>g.jsx(Ng,{product:D,recommendReason:R},D.id)),m&&g.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",minWidth:"200px",height:"300px",background:"rgba(255, 255, 255, 0.1)",borderRadius:"12px",margin:"0 8px"},children:g.jsx(Oi,{type:"default",message:"더 많은 추천을 불러오는 중..."})})]})}),g.jsx(Us,{onClick:()=>T("right"),disabled:m,children:"▶"})]})})},uR=({userId:n,token:l})=>{const{data:r,isLoading:s}=Oy(n,l),c=jt();return s?g.jsx("div",{style:{width:"100%"},children:g.jsx(Ti,{children:g.jsx(Oi,{type:"enhanced",message:"리뷰 데이터를 불러오는 중..."})})}):(r?.length??0)<5?g.jsx("div",{style:{width:"100%"},children:g.jsxs(Ti,{children:["추천을 위해 상품 리뷰 또는 온보딩을 진행해 주세요",g.jsx(Mg,{onClick:()=>c("/static/Onboarding"),children:"Onboarding"}),g.jsx("p",{style:{fontSize:"12px",color:"#888"},children:"(온보딩을 완료했는데도 이 메세지가 나온다면 새로고침을 눌러주세요)"})]})}):g.jsx(sR,{userId:n,token:l})},oR=()=>{const{token:n,me:l}=za(),r=jt(),s=Gt();return!n||!l?g.jsx("div",{style:{width:"100%"},children:g.jsxs(Ti,{children:["로그인하고 맞춤 추천을 받아보세요!",g.jsx(Mg,{onClick:()=>r("/static/Login",{state:{from:s.pathname}}),children:"login"})]})}):g.jsx(uR,{userId:l.userId,token:n})},cR=()=>g.jsxs(g.Fragment,{children:[g.jsx(QS,{}),g.jsx(dw,{}),g.jsx(Ta,{h:48}),g.jsxs(Mi,{children:[g.jsx("div",{style:{width:"100%"},children:g.jsx(pm,{children:"추천 상품"})}),g.jsx(tf,{fallback:g.jsx("div",{children:"상품을 불러오는중 오류가 발생했습니다"}),children:g.jsx(oR,{})}),g.jsx(mm,{}),g.jsx("div",{style:{width:"100%"},children:g.jsx(pm,{children:"인기순"})}),g.jsx(tf,{fallback:g.jsx("div",{children:"상품을 불러오는중 오류가 발생했습니다"}),children:g.jsx(w.Suspense,{fallback:g.jsx(Ti,{children:g.jsx(Oi,{type:"enhanced",message:"인기 상품을 불러오고 있어요..."})}),children:g.jsx(V2,{})})}),g.jsx(mm,{})]}),g.jsx(_i,{children:"© 2025 pusan national university capstone project Blu-ray Recommender"})]}),fR=US`

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
    background-color: ${ee.secondary};
  }


  body {
    margin: 0;

  }

  *{
    box-sizing: border-box;
    color:${ee.accent};
  }

  h2{
    color:${ee.primary}
  }
`,dR=O.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #cfcfcfff;
  position: relative;
`;O.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 20vh;
  width: 100%;
  background-color: #cfcfcfff;
  position: relative;
  top: 0;
`;O.div`
  background: url("/chair-blur.jpg") no-repeat center;
  background-size: cover;
  opacity: 0.2;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;const hR=O.div`
  position: relative;
  z-index: 1;
  background: transparent;
  display: flex;
  flex-direction: column;
  width: 320px;
`,pR=O.h1`
  font-size: 32px;
  font-weight: bold;
  color: white;
  margin-bottom: 20px;
`,_m=O.input`
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
    border-color: ${ee.mainDeepBlue}; /* 클릭/포커스 시 강조 */
    transform: scale(0.98);
  }
`,mR=O.button`
  height: 48px;
  background-color: ${ee.mainLightBlue};
  color: white;
  font-size: 16px;
  border: none;
  border-radius: 4px;
  margin-bottom: 20px;
  cursor: pointer;
  &:hover {
    background-color: #0a77e5ff;
  }
`,gR=O.div`
  text-align: center;
  color: white;
  font-size: 14px;
  margin-bottom: 20px;
`,yR=O.div`
  display: flex;
  justify-content: center;
  gap: 16px;
  margin-top: 8px;

  img {
    width: 40px;
    height: 40px;
    cursor: pointer;
  }
`,vR=O.div`
  display: flex;
  justify-content: center;
  gap: 8px;
  font-size: 12px;
  color: #dcdcdc;
`;O.span`
  color: #aaa;
`;const bR=O.span`
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;O.pre`
  background: #f4f4f4;
  border: 1px dashed #bbb;
  padding: 12px;
  border-radius: 6px;
  margin-top: 12px;
  font-size: 12px;
  white-space: pre-wrap;
`;const xR=O.form`
  display: contents;
`;O.p`
  color: #ef4444;
  font-size: 14px;
  text-align: center;
  margin: 10px 0;
  padding: 8px;
  background: #fef2f2;
  border-radius: 4px;
  border: 1px solid #fecaca;
`;const SR=O.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: ${ee.secondary};
  position: relative;
`,Ay=O.h1`
  position: absolute;
  top: 0px;
  left: 30px;
  padding: 20px;
  font-weight: 900;
  text-align: left;
  margin-bottom: 20px;
  cursor: pointer;
  color: ${ee.mainLightBlue};
  font-size: 32px;
`,wR=O.h1`
  text-align: center;
  margin-bottom: 20px;
  color: #333;
`,ER=O.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
`,Nc=O.label`
  display: flex;
  flex-direction: column;
  font-size: 14px;
  color: #444;
`,Bc=O.input`
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
    border-color: ${ee.mainDeepBlue}; /* 포커스 시 강조 */
  }

  &:active {
    transform: scale(0.98); /* 클릭 감각 */
  }
`,RR=O.button`
  margin-top: 25px;
  background: ${ee.mainBlue};
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
`;O.div`
  margin-top: 20px;
  font-weight: bold;
  text-align: center;
  color: ${({$type:n})=>n==="success"?"green":n==="error"?"red":"black"};
`;const TR=()=>{const[n,l]=w.useState(""),[r,s]=w.useState(""),[c,f]=w.useState(""),d=jt(),m=Gt(),y=za(),p=Zl();w.useEffect(()=>{if(y.token&&y.me){const x=m.state?.from||"/static/";d(x,{replace:!0})}},[y.token,y.me,d,m.state]);const v=async x=>{x.preventDefault(),f("");try{await y.logIn(n,r),p.showSuccess("로그인에 성공했습니다!"),setTimeout(()=>{const T=m.state?.from||"/static/";d(T,{replace:!0})},1e3)}catch(T){console.log("에러"),console.log(T.message),p.showError("로그인에 실패했습니다. 아이디와 비밀번호를 확인해주세요.")}};return g.jsx(Vs,{children:g.jsxs(dR,{children:[g.jsx(Ay,{onClick:()=>d("/static/"),children:"L.B"}),g.jsxs(hR,{children:[g.jsx(pR,{children:"LOGIN"}),g.jsxs(xR,{onSubmit:v,children:[g.jsx(_m,{type:"text",placeholder:"아이디 또는 이메일",value:n,onChange:x=>l(x.target.value),required:!0}),g.jsx(_m,{type:"password",placeholder:"비밀번호",value:r,onChange:x=>s(x.target.value),required:!0}),g.jsx(mR,{type:"submit",disabled:y.loading,children:y.loading?"로그인 중...":"로그인"})]}),g.jsxs(gR,{children:["간편하게 시작하기",g.jsx(yR,{})]}),g.jsx(vR,{children:g.jsx(bR,{onClick:()=>d("/static/Signup"),children:"회원가입"})})]})]})})};function OR(){const{logIn:n,token:l,me:r}=za(),[s,c]=w.useState("admin"),[f,d]=w.useState("admin@naver.com"),[m,y]=w.useState("password"),[p,v]=w.useState(""),[x,T]=w.useState(""),D=async()=>{v("⏳ 로그인 중..."),T("");try{await n(s,m),v("✅ 로그인 성공"),T(JSON.stringify({token:l,me:r},null,2))}catch(C){v("❌ 로그인 실패"),T(C?.message||String(C))}},R=async()=>{v("⏳ 회원가입 중..."),T("");try{const C=await IE(s,f,m);v("✅ 회원가입 성공"),T(JSON.stringify(C,null,2))}catch(C){v("❌ 회원가입 실패"),T(C?.response?.data?JSON.stringify(C.response.data,null,2):String(C))}},z=async()=>{v("⏳ /me 조회 중..."),T("");try{if(!l){v("❗ 토큰 없음. 로그인 먼저");return}const C=await Ey(l);v("✅ /me 성공"),T(JSON.stringify(C,null,2))}catch(C){v("❌ /me 실패"),T(C?.response?.data?JSON.stringify(C.response.data,null,2):String(C))}};return g.jsxs("div",{style:{maxWidth:420,margin:"40px auto",padding:20,border:"1px solid #e5e7eb",borderRadius:10,background:"#fff"},children:[g.jsx("h1",{children:"로그인"}),g.jsx("input",{value:s,onChange:C=>c(C.target.value),placeholder:"아이디",style:{width:"100%",padding:10,marginBottom:10}}),g.jsx("input",{value:f,onChange:C=>d(C.target.value),placeholder:"이메일",style:{width:"100%",padding:10,marginBottom:10}}),g.jsx("input",{value:m,onChange:C=>y(C.target.value),placeholder:"비밀번호",type:"password",style:{width:"100%",padding:10,marginBottom:10}}),g.jsxs("div",{style:{display:"flex",gap:8},children:[g.jsx("button",{onClick:D,style:{flex:1,padding:10,background:"#6366f1",color:"#fff"},children:"로그인"}),g.jsx("button",{onClick:R,style:{flex:1,padding:10,background:"#0ea5e9",color:"#fff"},children:"회원가입"}),g.jsx("button",{onClick:z,style:{flex:1,padding:10,background:"#0ea5e9",color:"#fff"},children:"/me 조회"})]}),g.jsx("p",{children:p}),g.jsx("pre",{style:{background:"#0b1020",color:"#d1d5db",padding:10,borderRadius:6,overflow:"auto"},children:x})]})}const AR=O.div`
    width: 100%;
    padding: 16px;
    display: flex;
    flex-direction: column;
    gap: 0;
`,CR=O.div`
  margin: 5px;
`,jR=O.div`
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
`,zR=O.div`
  flex: 0 0 120px;
  height: 160px;
  margin-right: 16px;
  overflow: hidden;
  border-radius: 8px;

  @media (max-width: 768px) {
    flex: 0 0 100px;
    height: 140px;
  }

`,DR=O.img`
  width: 100%;
  height: 100%;
  object-fit: cover;

`,MR=O.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 6px;
`,_R=O.div`
  font-size: 16px;
  font-weight: 700;
  color: #333;
  line-height: 1.3;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`,Lc=O.div`
  font-size: 14px;
  color: #555;
`,UR=O.span`
  font-size: 20px;
  font-weight: bold;
  color: ${ee.mainDeepBlue};
`,Um=O.div`
  position: absolute;
  top: 20px;
  right: 20px;
  width: 80px;
  height: calc(100% - 40px);
  border-left: 1px solid #e4e4e4;
  display: flex;
  align-items: center;
  justify-content: center;
`,NR=O.span`
  font-size: 13px;
  color: #555;
`;O.span`
  font-size: 11px;
  color: #fff;
  background: #ef4444;
  padding: 2px 6px;
  border-radius: 4px;
`;O.span`
  img {
    height: 16px;
  }
`;function BR({product:n}){const l=jt(),r=()=>{l(`/static/DetailPage/${n.movieId}`,{state:{product:n}})},s={U:"-",B:"BluRay (1080, FHD)",3:"3D-BluRay",4:"4kBluRay (UHD)"};return g.jsx(CR,{children:g.jsxs(jR,{onClick:r,children:[g.jsx(zR,{children:g.jsx(DR,{src:n.imageLink??void 0})}),g.jsxs(MR,{children:[g.jsx(_R,{children:n.blurayTitle}),g.jsxs(UR,{children:[n.price,"원"]}),g.jsx(Ta,{h:20}),g.jsxs(Lc,{children:[" 해상도 : ",s[n.quality??""]||n.quality]}),g.jsxs(Lc,{children:[" 지역 코드 : ",n.regionCode?n.regionCode:"-"]}),n.isLimitedEdition&&g.jsx(Lc,{children:"한정판!"})]}),g.jsx(Um,{}),g.jsx(Um,{children:g.jsx(NR,{children:n.siteName})})]})})}function LR(){const{keyWord:n}=Zm();if(n===void 0)return g.jsx("div",{children:"Invalid ID"});const{data:l}=Pg(n),r=l||[];return console.log(r.length),r.length===0?g.jsx("div",{children:"검색 결과가 없습니다"}):g.jsx(AR,{children:r.map(s=>g.jsx(BR,{product:s},s.id))})}function qR(){return g.jsxs(g.Fragment,{children:[g.jsxs(Mi,{children:[g.jsx(Ta,{h:70}),g.jsx(tf,{fallback:g.jsx("div",{children:" 오류 발생"}),children:g.jsx(w.Suspense,{fallback:g.jsx(Oi,{}),children:g.jsx(LR,{})})})]}),g.jsx(_i,{children:"© 2025 pusan national university capstone project Blu-ray Recommender"})]})}const HR=O.div`
  max-width: 1200px;
  width: 100%;
  padding: 40px;
  background-color: white;
  border-radius: 20px;
  margin: 0 auto;
`,kR=O.img`
  width: 100%;
  height: auto;
  object-fit: cover;
`,YR=O.div`
  display: flex;
  gap: 50px;
  margin-bottom: 60px;
  padding: 30px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
  }
`,QR=O.div`
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
`,GR=O.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding-left: 30px;
  
  @media (max-width: 768px) {
    padding-left: 0;
  }
`,Nm=O.h1`
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 20px;
  color: #1a202c;
  line-height: 1.3;
`,$R=O.div`
  display: flex;
  align-items: baseline;

`,XR=O.span`
  font-size: 24px;
  font-weight: 700;
  color: ${ee.mainBlue};
`,KR=O.span`
  font-size: 14px;
  color: #64748b;
  background: #f1f5f9;
  padding: 6px 12px;
  border-radius: 12px;
  cursor: pointer;
`,qc=O.section`
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
`,Bm=O.div`
  font-size: 14px;
  color: #4a5568;
  line-height: 1.6;
  background: #f8fafc;
  padding: 20px;
  border-radius: 12px;

`,VR=O.table`
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
`,ZR=O.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 24px;
  padding: 24px;
  background: white;
  border-radius: 12px;
  border: 1px solid #e2e8f0;
`,FR=O.textarea`
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
    border-color: ${ee.mainBlue};
  }

  &::placeholder {
    color: #94a3b8;
  }
`,JR=O.button`
  background: white;
  color: ${ee.mainBlue};
  border: none;
  padding: 10px;
  border-radius: 39% 20px 30% 36%;
  cursor: pointer;
  font-size: 14px;
  font-weight: 600;
  align-self: flex-start;
  transition: all 0.2s ease;

  &:hover {
    background: ${ee.mainBlue};
    color: white;
  }

  &:disabled {
    background: #94a3b8;
    cursor: not-allowed;
    transform: none;
  }
`,PR=O.div`
  margin-bottom: 12px;
  padding: 8px;
  border-bottom: 1px solid #eee;
  border-radius: 4px;
`,WR=O.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 4px;
`,IR=O.span`
  font-weight: bold;
`,e4=O.div`
  margin-bottom: 4px;
`,t4=O.div`
  font-size: 12px;
  color: #999;
`,n4=O.div`
  padding: 16px;
  background: #f5f5f5;
  border-radius: 8px;
  color: #666;
`,a4=O.div`
  display: flex;
  align-items: center;
  gap: 12px;
`,i4=O.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;O.span`
  font-size: 20px;
  color: ${n=>n.filled?"#fbbf24":"#e2e8f0"};
  cursor: pointer;
  transition: color 0.2s ease;
`;const l4=O.span`
  font-size: 12px;
  color: #64748b;
`;function r4(n){return Zs({queryKey:["getMovie",n],queryFn:()=>$2(n)})}function s4(n){return Df({queryKey:["reviews","salesId",n],queryFn:()=>iR(n),staleTime:120*1e3,gcTime:300*1e3})}function Cy(){const n=zf();return Q2({mutationFn:({review:l,token:r})=>aR(l,r),onSuccess:(l,r)=>{n.invalidateQueries({queryKey:["reviews","salesId",r.review.salesId]})}})}const jy=({rating:n,size:l="medium",showScore:r=!0})=>{const c={small:"14px",medium:"16px",large:"18px"}[l],f=d=>n>=d?g.jsx("span",{style:{color:"#fbbf24",fontSize:c},children:"★"},d):n>=d-.5?g.jsxs("span",{style:{color:"#e2e8f0",fontSize:c,position:"relative",display:"inline-block"},children:["★",g.jsx("span",{style:{position:"absolute",left:"0",top:"0",width:"50%",overflow:"hidden",color:"#fbbf24"},children:"★"})]},d):g.jsx("span",{style:{color:"#e2e8f0",fontSize:c},children:"★"},d);return g.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[g.jsx("div",{style:{display:"flex",alignItems:"center",gap:"2px"},children:[1,2,3,4,5].map(f)}),r&&g.jsxs("span",{style:{fontSize:"11px",color:"#64748b",fontWeight:"600",background:"#f1f5f9",padding:"2px 6px",borderRadius:"6px"},children:[n.toFixed(1),"점"]})]})};function u4(){const n=Gt();jt();const l=n.state?.product,{parm:r}=Zm(),{token:s,me:c}=za();if(!l)return g.jsx("div",{children:"상품 정보를 불러올 수 없습니다."});const{data:f}=r4(l.movieId??0),{data:d,isLoading:m}=s4(l.id),y=Cy(),[p,v]=w.useState(0),[x,T]=w.useState(""),D=async R=>{if(R.preventDefault(),!s){alert("로그인이 필요합니다.");return}if(p===0){alert("별점을 선택해주세요.");return}try{await y.mutateAsync({review:{salesId:l.id,rating:p,reviewComment:x||null},token:s}),alert("리뷰가 등록되었습니다!"),v(0),T("")}catch(z){let C="리뷰 등록에 실패했습니다.";z instanceof Error&&(C+=`
에러: ${z.message}`),alert(C)}};return g.jsxs(g.Fragment,{children:[g.jsxs(Mi,{children:[g.jsx(Ta,{h:70}),g.jsxs(HR,{children:[g.jsxs(YR,{children:[g.jsx(QR,{children:g.jsx(kR,{src:l.imageLink??""})}),g.jsxs(GR,{children:[g.jsx(Nm,{children:l.blurayTitle}),g.jsx(Nm,{children:f.title}),g.jsx($R,{children:g.jsxs(XR,{children:[l.price,"원"]})}),g.jsx(Ta,{h:4}),g.jsx(KR,{onClick:()=>window.open(String(l.siteUrl),"_blank"),children:l.siteName})]})]}),g.jsxs(qc,{children:[g.jsx("h2",{children:"작품 상세정보"}),g.jsx(VR,{children:g.jsxs("tbody",{children:[g.jsxs("tr",{children:[g.jsx("th",{children:"러닝타임"}),g.jsx("td",{children:f.runningTime||"-"})]}),g.jsxs("tr",{children:[g.jsx("th",{children:"감독"}),g.jsx("td",{children:f.director||"-"})]}),g.jsxs("tr",{children:[g.jsx("th",{children:"해상도"}),g.jsx("td",{children:l.quality||"-"})]}),g.jsxs("tr",{children:[g.jsx("th",{children:"지역코드"}),g.jsx("td",{children:l.regionCode||"-"})]})]})})]}),g.jsxs(qc,{children:[g.jsx("h2",{children:"리뷰"}),s?g.jsxs(ZR,{onSubmit:D,children:[g.jsxs(a4,{children:[g.jsx("label",{style:{fontSize:"14px",fontWeight:"600"},children:"별점:"}),g.jsx(i4,{children:[1,2,3,4,5].map(R=>g.jsxs("span",{onClick:()=>{p===R?v(R-.5):(R-.5,v(R))},style:{fontSize:"20px",cursor:"pointer",transition:"all 0.2s ease",position:"relative",display:"inline-block"},children:[g.jsx("span",{style:{color:"#e2e8f0"},children:"★"}),p>=R?g.jsx("span",{style:{position:"absolute",left:"0",top:"0",color:"#fbbf24"},children:"★"}):p>=R-.5?g.jsx("span",{style:{position:"absolute",left:"0",top:"0",width:"50%",overflow:"hidden",color:"#fbbf24"},children:"★"}):null]},R))}),g.jsx(l4,{children:p>0?`${p}점`:"별점을 선택해주세요"})]}),g.jsx(FR,{placeholder:"리뷰를 작성해주세요...",value:x,onChange:R=>T(R.target.value)}),g.jsx(JR,{type:"submit",disabled:y.isPending,children:y.isPending?"등록 중...":"리뷰 등록"})]}):g.jsx(n4,{children:"리뷰를 작성하려면 로그인이 필요합니다."}),g.jsx(Ta,{h:20}),g.jsx(Bm,{children:m?g.jsx("div",{children:"리뷰를 불러오는 중..."}):d&&d.length>0?g.jsx("div",{children:d.map((R,z)=>g.jsxs(PR,{children:[g.jsxs(WR,{children:[g.jsx(IR,{children:R.username||`사용자${R.userId}`}),g.jsx(jy,{rating:R.rating||0,size:"small",showScore:!0})]}),R.reviewComment&&g.jsx(e4,{children:R.reviewComment}),g.jsx(t4,{children:R.createdAt?new Date(R.createdAt).toLocaleString("ko-KR"):""})]},z))}):"아직 등록된 리뷰가 없습니다."})]}),g.jsxs(qc,{children:[g.jsx("h2",{children:"외부 링크"}),g.jsx(Bm,{children:g.jsxs("div",{style:{display:"flex",gap:8,flexWrap:"wrap"},children:[g.jsx("a",{className:"button",href:"#",target:"_blank",rel:"noopener noreferrer",children:"YES24"}),g.jsx("a",{className:"button",href:"#",target:"_blank",rel:"noopener noreferrer",children:"Aladin"}),g.jsx("a",{className:"button",href:"#",target:"_blank",rel:"noopener noreferrer",children:"Amazon JP"}),g.jsx("a",{className:"button",href:"#",target:"_blank",rel:"noopener noreferrer",children:"공식 사이트"})]})})]})]})]}),g.jsx(_i,{children:"© 2025 pusan national university capstone project Blu-ray Recommender"})]})}const o4=({children:n})=>{const{token:l}=za();return l?n:g.jsx(Pb,{to:"/static/Login",replace:!0})};O.header`
  padding: 20px 0;
  background: #fafafa;
`;O.nav`
  display: flex;
  align-items: center;
  gap: 16px;
`;O.a`
  color: ${ee.mainDeepBlue};
  text-decoration: none;
  font-weight: 500;
  transition: color 0.2s ease;

  &:hover {
    color: ${ee.mainBlue};
    text-decoration: underline;
  }
`;const Lm=O.section`
  margin: 32px 0;
  width: 100%;
  max-width: 1200px;
  padding: 0 20px;
`,c4=O.h2`
  font-size: 24px;
  font-weight: 500;
  color: ${ee.mainDeepBlue};
  margin: 0 0 16px 0;
  line-height: 1.5;
  letter-spacing: 0.2px;
  padding-left: 20px;
`,f4=O.div`
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
    border-color: ${ee.mainBlue}40;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08);
  }
`,d4=O.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: ${ee.mainBlue};
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 36px;
  font-weight: 600;
  transition: background-color 0.2s ease;
  border: 2px solid ${ee.mainBlue}20;
  box-shadow: 0 2px 4px rgba(28, 118, 207, 0.15);

  &:hover {
    background: ${ee.mainDeepBlue};
  }
`,h4=O.div`
  flex: 1;
  
  h1 {
    font-size: 28px;
    font-weight: 700;
    color: ${ee.mainDeepBlue};
    margin: 0 0 8px 0;
    line-height: 1.3;
  }
  
  .email {
    color: #666;
    font-size: 16px;
    margin-bottom: 16px;
  }
`,p4=O.div`
  display: flex;
  gap: 12px;
  margin-top: 16px;
`,m4=O.button`
  padding: 12px 20px;
  border: 2px solid ${ee.mainBlue};
  background: ${ee.mainBlue};
  color: white;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 500;
  font-size: 14px;
  transition: all 0.2s ease;

  &:hover {
    background: white;
    color: ${ee.mainBlue};
  }
`;O.div`
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
`;O.div`
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
    border-color: ${ee.mainBlue}40;
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
    color: ${ee.mainBlue};
  }

  .card-text {
    font-size: 14px;
    font-weight: 500;
    text-align: center;
  }
`;const qm=O.div`
  background: #fff;
  border-radius: 8px;
  padding: 24px;
  color: #666;
  border: 1px solid #f1f5f9;
  transition: all 0.2s ease;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);

  &:hover {
    background: #fafafa;
    border-color: ${ee.mainBlue}40;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08);
  }

  h3 {
    color: ${ee.mainDeepBlue};
    font-size: 18px;
    font-weight: 600;
    margin: 0 0 12px 0;
  }

  p {
    line-height: 1.6;
    margin: 0;
  }
`,g4=O.div`
  position: relative;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 10px;
  background-color: white;
  border-radius: 12px;
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
    box-shadow: 10px 10px 40px rgba(28, 118, 207, 0.09);
    transform: translateY(-2px);
    
    &::before {
      left: 100%;
    }
  }
`,y4=O.div`
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
    background: ${ee.mainBlue};
    border-radius: 2px;
    transition: background 0.2s ease;
  }
  
  &::-webkit-scrollbar-thumb:hover {
    background: ${ee.mainDeepBlue};
  }

  @media (max-width: 768px) {
    gap: 16px;
  }

  @media (max-width: 480px) {
    gap: 12px;
  }
`,Hm=O.button.withConfig({shouldForwardProp:n=>!["left"].includes(n)})`
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
  color: ${ee.mainBlue};
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
`,v4=O.div`
  position: relative;
  overflow: hidden;
  height: 200px;
  width: 100%;
`,b4=O.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 12px 12px 0 0;
  transition: transform 0.3s ease;
`,x4=O.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.1) 100%);
  border-radius: 12px 12px 0 0;
`,S4=O.div`
  padding: 16px;
  flex: 1;
`,w4=O.div`
  font-size: 15px;
  font-weight: 700;
  margin-bottom: 12px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: #1a202c;
  line-height: 1.3;
`,E4=O.div`
  margin-bottom: 12px;
  display: flex;
  align-items: center;
  gap: 6px;
`,R4=O.span`
  font-size: 12px;
  font-weight: 600;
  color: #64748b;
`,T4=O.div`
  font-size: 13px;
  color: #64748b;
  line-height: 1.4;
  margin-bottom: 8px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`,O4=O.div`
  font-size: 11px;
  color: #94a3b8;
  text-align: right;
  font-weight: 500;
  margin-top: auto;
`,A4=O.div`
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
    border-color: ${ee.mainBlue}40;
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
    color: ${ee.mainBlue};
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
`;O.div`
  text-align: center;
  padding: 60px 20px;
  background: #f8fafc;
  border-radius: 12px;
  border: 1px solid #e2e8f0;
`;O.h2`
  color: #64748b;
  margin-bottom: 16px;
`;O.p`
  color: #94a3b8;
  margin-bottom: 24px;
`;const C4=O.div`
  font-size: 12px;
  color: #64748b;
  margin-top: 4px;
`,j4=O.div`
  text-align: center;
  padding: 20px;
  color: #64748b;
`,z4=()=>{const{logOut:n,me:l,token:r}=za(),s=jt(),c=w.useRef(null);l?.userId;const{data:f,isLoading:d}=Oy(l?.userId||0,r||""),m=()=>{n(),s("/static/login")},y=p=>{if(c.current){const v=c.current.clientWidth;c.current.scrollBy({left:p==="right"?v:-v,behavior:"smooth"})}};return g.jsxs(g.Fragment,{children:[g.jsxs(Mi,{children:[g.jsx(Ta,{h:48}),g.jsxs(GS,{children:[g.jsx(Lm,{children:g.jsxs(f4,{children:[g.jsx(d4,{children:(l?.username||l?.usernameOrEmail||"사용자").charAt(0).toUpperCase()}),g.jsxs(h4,{children:[g.jsx("h1",{children:l?.username||l?.usernameOrEmail||"사용자"}),g.jsx("div",{className:"email",children:l?.email||""}),g.jsx(C4,{children:l?.role||"일반 사용자"}),g.jsx(p4,{children:g.jsx(m4,{onClick:m,children:"로그아웃"})})]})]})}),g.jsxs(Lm,{children:[g.jsx(c4,{children:"내가 리뷰한 상품"}),d?g.jsx(qm,{children:g.jsx(j4,{children:"리뷰를 불러오는 중..."})}):f&&f.length>0?g.jsxs(g4,{children:[g.jsx(Hm,{left:!0,onClick:()=>y("left"),children:"◀"}),g.jsx(y4,{ref:c,children:f.map((p,v)=>g.jsxs(A4,{onClick:()=>s(`/static/DetailPage/${p.product.id}`,{state:{product:p.product}}),children:[g.jsxs(v4,{children:[g.jsx(b4,{src:p.product.imageLink||"",alt:p.product.blurayTitle||""}),g.jsx(x4,{})]}),g.jsxs(S4,{children:[g.jsx(w4,{children:p.product.blurayTitle}),g.jsxs(E4,{children:[g.jsx(R4,{children:"내 평점:"}),g.jsx(jy,{rating:p.review.rating||0,size:"medium",showScore:!0})]}),p.review.reviewComment&&g.jsxs(T4,{children:['"',p.review.reviewComment,'"']}),g.jsx(O4,{children:p.review.createdAt?new Date(p.review.createdAt).toLocaleDateString("ko-KR"):""})]})]},v))}),g.jsx(Hm,{onClick:()=>y("right"),children:"▶"})]}):g.jsxs(qm,{children:[g.jsx("h3",{children:"아직 리뷰한 상품이 없습니다"}),g.jsx("p",{children:"상품에 리뷰를 남기면 여기에 표시됩니다."})]})]})]})]}),g.jsx(_i,{children:"© 2025 pusan national university capstone project Blu-ray Recommender"})]})},D4=()=>{const[n,l]=w.useState(""),[r,s]=w.useState(""),[c,f]=w.useState(""),[d,m]=w.useState(""),[y,p]=w.useState(""),v=jt(),x=Zl(),T=async D=>{D.preventDefault(),m(""),p("");try{const R=await _e.post("/api/signup",{username:n,email:r,password:c});x.showSuccess(R.data||"회원가입이 완료되었습니다!"),setTimeout(()=>{v("/static/Login")},2e3)}catch(R){R.response&&R.response.data?x.showError(`에러: ${R.response.data}`):x.showError("회원가입 중 오류가 발생했습니다.")}};return g.jsxs(Vs,{children:[g.jsxs(SR,{children:[g.jsx(Ay,{onClick:()=>v("/static/"),children:"L.B"}),g.jsx(wR,{children:"회원가입"}),g.jsxs(ER,{onSubmit:T,children:[g.jsxs(Nc,{children:["사용자명",g.jsx(Bc,{type:"text",value:n,onChange:D=>l(D.target.value),required:!0})]}),g.jsxs(Nc,{children:["이메일",g.jsx(Bc,{type:"email",value:r,onChange:D=>s(D.target.value),required:!0})]}),g.jsxs(Nc,{children:["비밀번호",g.jsx(Bc,{type:"password",value:c,onChange:D=>f(D.target.value),required:!0})]}),g.jsx(RR,{type:"submit",children:"회원가입"})]})]}),g.jsx(_i,{children:"© 2025 pusan national university capstone project Blu-ray Recommender"})]})},M4=O.div`
  padding: 2rem;
  text-align: center;
  background-color: #fafafa;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`,_4=O.h2`
  margin-bottom: 1rem;
  font-size: 1.5rem;
  color: ${ee.mainBlue};
  font-weight: 600;
`,U4=O.div`
  margin-bottom: 2rem;
  font-size: 1rem;
  color: #666;
  font-weight: 500;
`,N4=O.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 30px;
  overflow: hidden;
  position: relative;
  background-color: white;
  border-radius: 20px;
`,B4=O.div`
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
`,L4=O.button`
  margin-top: 2rem;
  padding: 1rem 3rem;
  background-color: white;
  border: 3px solid ${ee.mainBlue};
  color: ${ee.mainBlue};
  border-radius: 25px 38% 24px 22%;
  cursor: pointer;
  font-size: 1.1rem;
  font-weight: 600;
  transition: all 0.25s ease;
  min-width: 200px;
  
  &:hover{
    background-color: ${ee.mainBlue};
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
`,q4=O.div`
  margin-top: 3rem;
  margin-bottom: 2rem;
  background: white;
  border-radius: 20px;
  width: 100%;
  max-width: 1200px;
  overflow: hidden;
`,H4=O.div`
  padding: 3rem 2rem;
  background-color: ${ee.mainBlue};
  width: 100%;
  position: relative;
`,k4=O.h3`
  font-size: 2.5rem;
  font-weight: 800;
  color: white;
  margin-bottom: 0.5rem;
  text-align: center;
  line-height: 1.1;
`,Y4=O.p`
  font-size: 1rem;
  font-weight: 300;
  color: rgba(255, 255, 255, 0.9);
  margin: 0 0 2rem 0;
  text-align: center;
`,Q4=O.div`
  display: flex;
  align-items: center;
  gap: 8px;
  max-width: 600px;
  margin: 0 auto 2rem;
`,G4=O.input`
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
`,$4=O.button`
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
`;O.img`
  width: 24px;
  height: 24px;
`;const X4=O.div`
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
`,K4=O.h4`
  font-size: 1.4rem;
  font-weight: 700;
  color: #374151;
  margin-bottom: 1.5rem;
  text-align: center;
`,V4=O.div`
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
`,km=O.div`
  text-align: center;
  color: #6b7280;
  font-size: 1.2rem;
  padding: 3rem 2rem;
  background: #f9fafb;
  border-radius: 12px;
  border: 2px dashed #e5e7eb;
  font-weight: 500;
`,Bf=O.div`
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

`,Z4=O.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-radius: 12px;
`,F4=O.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
  
  ${Bf}:hover & {
    transform: scale(1.1);
  }
`,J4=O.div`
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
`,P4=O.div`
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

  ${Bf}:hover & {
    background: linear-gradient(transparent, rgba(0, 132, 255, 0.6));
  }
`,W4=O.h3`
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
`,I4=O.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`,eT=O.span`
  font-size: 16px;
  font-weight: 700;
  color: #ffffff;
`,tT=O.span`
  font-size: 12px;
  color: #e5e7eb;
  font-weight: 500;
`,nT=O.div`
  position: absolute;
  top: 12px;
  right: 12px;
  background: ${ee.mainBlue};
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
`,of=sn.memo(({product:n,isSelected:l,onClick:r,animationDelay:s=0})=>{const c=w.useRef(null);return w.useEffect(()=>{const f=setTimeout(()=>{c.current&&c.current.classList.add("animation-complete")},s*1e3+600);return()=>clearTimeout(f)},[s]),g.jsxs(Bf,{ref:c,isSelected:l,onClick:r,animationDelay:s,children:[g.jsxs(Z4,{children:[g.jsx(F4,{src:n.imageLink??"",alt:n.blurayTitle??""}),l&&g.jsx(J4,{})]}),g.jsxs(P4,{children:[g.jsx(W4,{children:n.blurayTitle}),g.jsxs(I4,{children:[g.jsxs(eT,{children:[n.price?.toLocaleString(),"원"]}),g.jsxs(tT,{children:["해상도: ",n.quality]})]})]}),l&&g.jsx(nT,{children:"✓"})]})});of.displayName="OnboardingCard";const aT=()=>{const{data:n}=X2(60),[l,r]=w.useState([]),s=jt(),c=Gt();w.useRef(null);const[f,d]=w.useState(!0),{token:m,me:y}=za(),p=Cy(),[v,x]=w.useState(!1),{showToast:T}=Zl(),[D,R]=w.useState(""),[z,C]=w.useState(""),[k,L]=w.useState(!1);w.useEffect(()=>{const se=setTimeout(()=>{C(D)},500);return()=>clearTimeout(se)},[D]);const{data:$}=Pg(z&&k?z:""),J=w.useMemo(()=>{if(!n||n.length===0)return[];const se=[];for(let oe=0;oe<n.length;oe+=6)se.push(n.slice(oe,oe+6));return se.map((oe,ze)=>({products:[...oe,...oe,...oe,...oe,...oe,...oe,...oe,...oe],direction:ze%2===0?"right":"left"}))},[n]),X=w.useCallback(se=>{r(oe=>oe.includes(se)?oe.filter(ze=>ze!==se):oe.length<5?[...oe,se]:oe)},[]),P=w.useCallback(()=>{if(!D.trim()){L(!1);return}L(!0)},[D]),K=w.useCallback(se=>{se.key==="Enter"&&P()},[P]),ue=w.useCallback(se=>{R(se.target.value),se.target.value.trim()||L(!1)},[]),me=async()=>{if(!m||!y){T("로그인이 필요합니다.","error"),s("/static/Login",{state:{from:c.pathname}});return}if(l.length<5){T("최소 5개의 영화를 선택해주세요.","warning");return}x(!0);try{const se=l.map(oe=>p.mutateAsync({review:{salesId:oe,rating:5,reviewComment:null},token:m}));await Promise.all(se),T("선호 영화가 등록되었습니다! 이제 맞춤 추천을 받아보세요.","success"),s("/static")}catch{T("리뷰 생성 중 오류가 발생했습니다. 다시 시도해주세요.","error")}finally{x(!1)}};return g.jsxs(Vs,{children:[g.jsxs(M4,{children:[g.jsx(_4,{children:"좋아하는 영화를 선택해주세요 (최소 5개)"}),g.jsxs(U4,{children:[l.length,"/5 선택됨"]}),g.jsxs(q4,{children:[g.jsxs(H4,{children:[g.jsx(k4,{children:"원하는 영화를 검색해보세요"}),g.jsx(Y4,{children:"당신의 인생영화를 찾아보세요!"}),g.jsxs(Q4,{children:[g.jsx(G4,{type:"text",value:D,onChange:ue,placeholder:"영화 제목을 입력하세요",onKeyDown:K}),g.jsx($4,{onClick:P})]})]}),k&&g.jsxs(X4,{children:[g.jsx(K4,{children:"검색 결과"}),$?$.length===0?g.jsx(km,{children:"검색 결과가 없습니다"}):g.jsx(V4,{children:$.map(se=>g.jsx(of,{product:se,isSelected:l.includes(se.id),onClick:()=>X(se.id)},se.id))}):g.jsx(km,{children:"검색 중..."})]})]}),g.jsx(N4,{children:J.map((se,oe)=>g.jsx(B4,{direction:se.direction,rowIndex:oe,children:se.products.map((ze,zt)=>g.jsx(of,{product:ze,isSelected:l.includes(ze.id),onClick:()=>X(ze.id),animationDelay:oe*.6+zt%6*.1},`${ze.id}-${zt}`))},oe))}),g.jsx(L4,{disabled:l.length<5||v,onClick:me,children:v?"리뷰 생성 중...":`완료 (${l.length}/5)`})]}),g.jsx(_i,{children:"© 2025 pusan national university capstone project Blu-ray Recommender"})]})};function iT(){return g.jsx(w.Suspense,{fallback:g.jsx(Vs,{children:g.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh",backgroundColor:"#fafafa"},children:g.jsx(Oi,{type:"enhanced",message:"온보딩을 준비하고 있어요...",showProgress:!0})})}),children:g.jsx(aT,{})})}function lT(){return g.jsx(Ty,{children:g.jsx(PS,{children:g.jsxs(wx,{children:[g.jsx(fR,{}),g.jsx(WS,{}),g.jsxs(Ib,{children:[g.jsx(Tn,{path:"/static",element:g.jsx(cR,{})}),g.jsx(Tn,{path:"/static/Login",element:g.jsx(TR,{})}),g.jsx(Tn,{path:"/static/My",element:g.jsx(o4,{children:g.jsx(z4,{})})}),g.jsx(Tn,{path:"/static/LoginPage",element:g.jsx(OR,{})}),g.jsx(Tn,{path:"/static/Signup",element:g.jsx(D4,{})}),g.jsx(Tn,{path:"/static/SearchPage/:keyWord",element:g.jsx(qR,{})}),g.jsx(Tn,{path:"/static/DetailPage/:id",element:g.jsx(u4,{})}),g.jsx(Tn,{path:"/static/Onboarding",element:g.jsx(iT,{})})]})]})})})}const rT=new j2;ub.createRoot(document.getElementById("root")).render(g.jsx(w.StrictMode,{children:g.jsx(z2,{client:rT,children:g.jsx(Ty,{children:g.jsx(lT,{})})})}));
//# sourceMappingURL=index-Q0ATGqMi.js.map
