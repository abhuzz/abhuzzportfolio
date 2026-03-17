(function(){const T=document.createElement("link").relList;if(T&&T.supports&&T.supports("modulepreload"))return;for(const C of document.querySelectorAll('link[rel="modulepreload"]'))m(C);new MutationObserver(C=>{for(const R of C)if(R.type==="childList")for(const et of R.addedNodes)et.tagName==="LINK"&&et.rel==="modulepreload"&&m(et)}).observe(document,{childList:!0,subtree:!0});function D(C){const R={};return C.integrity&&(R.integrity=C.integrity),C.referrerPolicy&&(R.referrerPolicy=C.referrerPolicy),C.crossOrigin==="use-credentials"?R.credentials="include":C.crossOrigin==="anonymous"?R.credentials="omit":R.credentials="same-origin",R}function m(C){if(C.ep)return;C.ep=!0;const R=D(C);fetch(C.href,R)}})();var sf={exports:{}},zn={};var Sd;function ih(){if(Sd)return zn;Sd=1;var E=Symbol.for("react.transitional.element"),T=Symbol.for("react.fragment");function D(m,C,R){var et=null;if(R!==void 0&&(et=""+R),C.key!==void 0&&(et=""+C.key),"key"in C){R={};for(var rt in C)rt!=="key"&&(R[rt]=C[rt])}else R=C;return C=R.ref,{$$typeof:E,type:m,key:et,ref:C!==void 0?C:null,props:R}}return zn.Fragment=T,zn.jsx=D,zn.jsxs=D,zn}var xd;function ch(){return xd||(xd=1,sf.exports=ih()),sf.exports}var f=ch(),of={exports:{}},G={};var zd;function fh(){if(zd)return G;zd=1;var E=Symbol.for("react.transitional.element"),T=Symbol.for("react.portal"),D=Symbol.for("react.fragment"),m=Symbol.for("react.strict_mode"),C=Symbol.for("react.profiler"),R=Symbol.for("react.consumer"),et=Symbol.for("react.context"),rt=Symbol.for("react.forward_ref"),_=Symbol.for("react.suspense"),A=Symbol.for("react.memo"),K=Symbol.for("react.lazy"),B=Symbol.for("react.activity"),tt=Symbol.iterator;function Ft(r){return r===null||typeof r!="object"?null:(r=tt&&r[tt]||r["@@iterator"],typeof r=="function"?r:null)}var Gt={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Rt=Object.assign,Ol={};function $t(r,z,M){this.props=r,this.context=z,this.refs=Ol,this.updater=M||Gt}$t.prototype.isReactComponent={},$t.prototype.setState=function(r,z){if(typeof r!="object"&&typeof r!="function"&&r!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,r,z,"setState")},$t.prototype.forceUpdate=function(r){this.updater.enqueueForceUpdate(this,r,"forceUpdate")};function $l(){}$l.prototype=$t.prototype;function Ct(r,z,M){this.props=r,this.context=z,this.refs=Ol,this.updater=M||Gt}var fl=Ct.prototype=new $l;fl.constructor=Ct,Rt(fl,$t.prototype),fl.isPureReactComponent=!0;var Al=Array.isArray;function Xt(){}var W={H:null,A:null,T:null,S:null},Qt=Object.prototype.hasOwnProperty;function El(r,z,M){var O=M.ref;return{$$typeof:E,type:r,key:z,ref:O!==void 0?O:null,props:M}}function Ze(r,z){return El(r.type,z,r.props)}function Tl(r){return typeof r=="object"&&r!==null&&r.$$typeof===E}function Lt(r){var z={"=":"=0",":":"=2"};return"$"+r.replace(/[=:]/g,function(M){return z[M]})}var Ae=/\/+/g;function Dl(r,z){return typeof r=="object"&&r!==null&&r.key!=null?Lt(""+r.key):z.toString(36)}function bl(r){switch(r.status){case"fulfilled":return r.value;case"rejected":throw r.reason;default:switch(typeof r.status=="string"?r.then(Xt,Xt):(r.status="pending",r.then(function(z){r.status==="pending"&&(r.status="fulfilled",r.value=z)},function(z){r.status==="pending"&&(r.status="rejected",r.reason=z)})),r.status){case"fulfilled":return r.value;case"rejected":throw r.reason}}throw r}function b(r,z,M,O,X){var Z=typeof r;(Z==="undefined"||Z==="boolean")&&(r=null);var lt=!1;if(r===null)lt=!0;else switch(Z){case"bigint":case"string":case"number":lt=!0;break;case"object":switch(r.$$typeof){case E:case T:lt=!0;break;case K:return lt=r._init,b(lt(r._payload),z,M,O,X)}}if(lt)return X=X(r),lt=O===""?"."+Dl(r,0):O,Al(X)?(M="",lt!=null&&(M=lt.replace(Ae,"$&/")+"/"),b(X,z,M,"",function(_a){return _a})):X!=null&&(Tl(X)&&(X=Ze(X,M+(X.key==null||r&&r.key===X.key?"":(""+X.key).replace(Ae,"$&/")+"/")+lt)),z.push(X)),1;lt=0;var Bt=O===""?".":O+":";if(Al(r))for(var vt=0;vt<r.length;vt++)O=r[vt],Z=Bt+Dl(O,vt),lt+=b(O,z,M,Z,X);else if(vt=Ft(r),typeof vt=="function")for(r=vt.call(r),vt=0;!(O=r.next()).done;)O=O.value,Z=Bt+Dl(O,vt++),lt+=b(O,z,M,Z,X);else if(Z==="object"){if(typeof r.then=="function")return b(bl(r),z,M,O,X);throw z=String(r),Error("Objects are not valid as a React child (found: "+(z==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":z)+"). If you meant to render a collection of children, use an array instead.")}return lt}function j(r,z,M){if(r==null)return r;var O=[],X=0;return b(r,O,"","",function(Z){return z.call(M,Z,X++)}),O}function Y(r){if(r._status===-1){var z=r._result;z=z(),z.then(function(M){(r._status===0||r._status===-1)&&(r._status=1,r._result=M)},function(M){(r._status===0||r._status===-1)&&(r._status=2,r._result=M)}),r._status===-1&&(r._status=0,r._result=z)}if(r._status===1)return r._result.default;throw r._result}var ut=typeof reportError=="function"?reportError:function(r){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var z=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof r=="object"&&r!==null&&typeof r.message=="string"?String(r.message):String(r),error:r});if(!window.dispatchEvent(z))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",r);return}console.error(r)},st={map:j,forEach:function(r,z,M){j(r,function(){z.apply(this,arguments)},M)},count:function(r){var z=0;return j(r,function(){z++}),z},toArray:function(r){return j(r,function(z){return z})||[]},only:function(r){if(!Tl(r))throw Error("React.Children.only expected to receive a single React element child.");return r}};return G.Activity=B,G.Children=st,G.Component=$t,G.Fragment=D,G.Profiler=C,G.PureComponent=Ct,G.StrictMode=m,G.Suspense=_,G.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=W,G.__COMPILER_RUNTIME={__proto__:null,c:function(r){return W.H.useMemoCache(r)}},G.cache=function(r){return function(){return r.apply(null,arguments)}},G.cacheSignal=function(){return null},G.cloneElement=function(r,z,M){if(r==null)throw Error("The argument must be a React element, but you passed "+r+".");var O=Rt({},r.props),X=r.key;if(z!=null)for(Z in z.key!==void 0&&(X=""+z.key),z)!Qt.call(z,Z)||Z==="key"||Z==="__self"||Z==="__source"||Z==="ref"&&z.ref===void 0||(O[Z]=z[Z]);var Z=arguments.length-2;if(Z===1)O.children=M;else if(1<Z){for(var lt=Array(Z),Bt=0;Bt<Z;Bt++)lt[Bt]=arguments[Bt+2];O.children=lt}return El(r.type,X,O)},G.createContext=function(r){return r={$$typeof:et,_currentValue:r,_currentValue2:r,_threadCount:0,Provider:null,Consumer:null},r.Provider=r,r.Consumer={$$typeof:R,_context:r},r},G.createElement=function(r,z,M){var O,X={},Z=null;if(z!=null)for(O in z.key!==void 0&&(Z=""+z.key),z)Qt.call(z,O)&&O!=="key"&&O!=="__self"&&O!=="__source"&&(X[O]=z[O]);var lt=arguments.length-2;if(lt===1)X.children=M;else if(1<lt){for(var Bt=Array(lt),vt=0;vt<lt;vt++)Bt[vt]=arguments[vt+2];X.children=Bt}if(r&&r.defaultProps)for(O in lt=r.defaultProps,lt)X[O]===void 0&&(X[O]=lt[O]);return El(r,Z,X)},G.createRef=function(){return{current:null}},G.forwardRef=function(r){return{$$typeof:rt,render:r}},G.isValidElement=Tl,G.lazy=function(r){return{$$typeof:K,_payload:{_status:-1,_result:r},_init:Y}},G.memo=function(r,z){return{$$typeof:A,type:r,compare:z===void 0?null:z}},G.startTransition=function(r){var z=W.T,M={};W.T=M;try{var O=r(),X=W.S;X!==null&&X(M,O),typeof O=="object"&&O!==null&&typeof O.then=="function"&&O.then(Xt,ut)}catch(Z){ut(Z)}finally{z!==null&&M.types!==null&&(z.types=M.types),W.T=z}},G.unstable_useCacheRefresh=function(){return W.H.useCacheRefresh()},G.use=function(r){return W.H.use(r)},G.useActionState=function(r,z,M){return W.H.useActionState(r,z,M)},G.useCallback=function(r,z){return W.H.useCallback(r,z)},G.useContext=function(r){return W.H.useContext(r)},G.useDebugValue=function(){},G.useDeferredValue=function(r,z){return W.H.useDeferredValue(r,z)},G.useEffect=function(r,z){return W.H.useEffect(r,z)},G.useEffectEvent=function(r){return W.H.useEffectEvent(r)},G.useId=function(){return W.H.useId()},G.useImperativeHandle=function(r,z,M){return W.H.useImperativeHandle(r,z,M)},G.useInsertionEffect=function(r,z){return W.H.useInsertionEffect(r,z)},G.useLayoutEffect=function(r,z){return W.H.useLayoutEffect(r,z)},G.useMemo=function(r,z){return W.H.useMemo(r,z)},G.useOptimistic=function(r,z){return W.H.useOptimistic(r,z)},G.useReducer=function(r,z,M){return W.H.useReducer(r,z,M)},G.useRef=function(r){return W.H.useRef(r)},G.useState=function(r){return W.H.useState(r)},G.useSyncExternalStore=function(r,z,M){return W.H.useSyncExternalStore(r,z,M)},G.useTransition=function(){return W.H.useTransition()},G.version="19.2.3",G}var Ad;function yf(){return Ad||(Ad=1,of.exports=fh()),of.exports}var Yt=yf(),rf={exports:{}},An={},df={exports:{}},mf={};var Ed;function sh(){return Ed||(Ed=1,(function(E){function T(b,j){var Y=b.length;b.push(j);t:for(;0<Y;){var ut=Y-1>>>1,st=b[ut];if(0<C(st,j))b[ut]=j,b[Y]=st,Y=ut;else break t}}function D(b){return b.length===0?null:b[0]}function m(b){if(b.length===0)return null;var j=b[0],Y=b.pop();if(Y!==j){b[0]=Y;t:for(var ut=0,st=b.length,r=st>>>1;ut<r;){var z=2*(ut+1)-1,M=b[z],O=z+1,X=b[O];if(0>C(M,Y))O<st&&0>C(X,M)?(b[ut]=X,b[O]=Y,ut=O):(b[ut]=M,b[z]=Y,ut=z);else if(O<st&&0>C(X,Y))b[ut]=X,b[O]=Y,ut=O;else break t}}return j}function C(b,j){var Y=b.sortIndex-j.sortIndex;return Y!==0?Y:b.id-j.id}if(E.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var R=performance;E.unstable_now=function(){return R.now()}}else{var et=Date,rt=et.now();E.unstable_now=function(){return et.now()-rt}}var _=[],A=[],K=1,B=null,tt=3,Ft=!1,Gt=!1,Rt=!1,Ol=!1,$t=typeof setTimeout=="function"?setTimeout:null,$l=typeof clearTimeout=="function"?clearTimeout:null,Ct=typeof setImmediate<"u"?setImmediate:null;function fl(b){for(var j=D(A);j!==null;){if(j.callback===null)m(A);else if(j.startTime<=b)m(A),j.sortIndex=j.expirationTime,T(_,j);else break;j=D(A)}}function Al(b){if(Rt=!1,fl(b),!Gt)if(D(_)!==null)Gt=!0,Xt||(Xt=!0,Lt());else{var j=D(A);j!==null&&bl(Al,j.startTime-b)}}var Xt=!1,W=-1,Qt=5,El=-1;function Ze(){return Ol?!0:!(E.unstable_now()-El<Qt)}function Tl(){if(Ol=!1,Xt){var b=E.unstable_now();El=b;var j=!0;try{t:{Gt=!1,Rt&&(Rt=!1,$l(W),W=-1),Ft=!0;var Y=tt;try{l:{for(fl(b),B=D(_);B!==null&&!(B.expirationTime>b&&Ze());){var ut=B.callback;if(typeof ut=="function"){B.callback=null,tt=B.priorityLevel;var st=ut(B.expirationTime<=b);if(b=E.unstable_now(),typeof st=="function"){B.callback=st,fl(b),j=!0;break l}B===D(_)&&m(_),fl(b)}else m(_);B=D(_)}if(B!==null)j=!0;else{var r=D(A);r!==null&&bl(Al,r.startTime-b),j=!1}}break t}finally{B=null,tt=Y,Ft=!1}j=void 0}}finally{j?Lt():Xt=!1}}}var Lt;if(typeof Ct=="function")Lt=function(){Ct(Tl)};else if(typeof MessageChannel<"u"){var Ae=new MessageChannel,Dl=Ae.port2;Ae.port1.onmessage=Tl,Lt=function(){Dl.postMessage(null)}}else Lt=function(){$t(Tl,0)};function bl(b,j){W=$t(function(){b(E.unstable_now())},j)}E.unstable_IdlePriority=5,E.unstable_ImmediatePriority=1,E.unstable_LowPriority=4,E.unstable_NormalPriority=3,E.unstable_Profiling=null,E.unstable_UserBlockingPriority=2,E.unstable_cancelCallback=function(b){b.callback=null},E.unstable_forceFrameRate=function(b){0>b||125<b?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Qt=0<b?Math.floor(1e3/b):5},E.unstable_getCurrentPriorityLevel=function(){return tt},E.unstable_next=function(b){switch(tt){case 1:case 2:case 3:var j=3;break;default:j=tt}var Y=tt;tt=j;try{return b()}finally{tt=Y}},E.unstable_requestPaint=function(){Ol=!0},E.unstable_runWithPriority=function(b,j){switch(b){case 1:case 2:case 3:case 4:case 5:break;default:b=3}var Y=tt;tt=b;try{return j()}finally{tt=Y}},E.unstable_scheduleCallback=function(b,j,Y){var ut=E.unstable_now();switch(typeof Y=="object"&&Y!==null?(Y=Y.delay,Y=typeof Y=="number"&&0<Y?ut+Y:ut):Y=ut,b){case 1:var st=-1;break;case 2:st=250;break;case 5:st=1073741823;break;case 4:st=1e4;break;default:st=5e3}return st=Y+st,b={id:K++,callback:j,priorityLevel:b,startTime:Y,expirationTime:st,sortIndex:-1},Y>ut?(b.sortIndex=Y,T(A,b),D(_)===null&&b===D(A)&&(Rt?($l(W),W=-1):Rt=!0,bl(Al,Y-ut))):(b.sortIndex=st,T(_,b),Gt||Ft||(Gt=!0,Xt||(Xt=!0,Lt()))),b},E.unstable_shouldYield=Ze,E.unstable_wrapCallback=function(b){var j=tt;return function(){var Y=tt;tt=j;try{return b.apply(this,arguments)}finally{tt=Y}}}})(mf)),mf}var Td;function oh(){return Td||(Td=1,df.exports=sh()),df.exports}var hf={exports:{}},Ht={};var jd;function rh(){if(jd)return Ht;jd=1;var E=yf();function T(_){var A="https://react.dev/errors/"+_;if(1<arguments.length){A+="?args[]="+encodeURIComponent(arguments[1]);for(var K=2;K<arguments.length;K++)A+="&args[]="+encodeURIComponent(arguments[K])}return"Minified React error #"+_+"; visit "+A+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function D(){}var m={d:{f:D,r:function(){throw Error(T(522))},D,C:D,L:D,m:D,X:D,S:D,M:D},p:0,findDOMNode:null},C=Symbol.for("react.portal");function R(_,A,K){var B=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:C,key:B==null?null:""+B,children:_,containerInfo:A,implementation:K}}var et=E.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function rt(_,A){if(_==="font")return"";if(typeof A=="string")return A==="use-credentials"?A:""}return Ht.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=m,Ht.createPortal=function(_,A){var K=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!A||A.nodeType!==1&&A.nodeType!==9&&A.nodeType!==11)throw Error(T(299));return R(_,A,null,K)},Ht.flushSync=function(_){var A=et.T,K=m.p;try{if(et.T=null,m.p=2,_)return _()}finally{et.T=A,m.p=K,m.d.f()}},Ht.preconnect=function(_,A){typeof _=="string"&&(A?(A=A.crossOrigin,A=typeof A=="string"?A==="use-credentials"?A:"":void 0):A=null,m.d.C(_,A))},Ht.prefetchDNS=function(_){typeof _=="string"&&m.d.D(_)},Ht.preinit=function(_,A){if(typeof _=="string"&&A&&typeof A.as=="string"){var K=A.as,B=rt(K,A.crossOrigin),tt=typeof A.integrity=="string"?A.integrity:void 0,Ft=typeof A.fetchPriority=="string"?A.fetchPriority:void 0;K==="style"?m.d.S(_,typeof A.precedence=="string"?A.precedence:void 0,{crossOrigin:B,integrity:tt,fetchPriority:Ft}):K==="script"&&m.d.X(_,{crossOrigin:B,integrity:tt,fetchPriority:Ft,nonce:typeof A.nonce=="string"?A.nonce:void 0})}},Ht.preinitModule=function(_,A){if(typeof _=="string")if(typeof A=="object"&&A!==null){if(A.as==null||A.as==="script"){var K=rt(A.as,A.crossOrigin);m.d.M(_,{crossOrigin:K,integrity:typeof A.integrity=="string"?A.integrity:void 0,nonce:typeof A.nonce=="string"?A.nonce:void 0})}}else A==null&&m.d.M(_)},Ht.preload=function(_,A){if(typeof _=="string"&&typeof A=="object"&&A!==null&&typeof A.as=="string"){var K=A.as,B=rt(K,A.crossOrigin);m.d.L(_,K,{crossOrigin:B,integrity:typeof A.integrity=="string"?A.integrity:void 0,nonce:typeof A.nonce=="string"?A.nonce:void 0,type:typeof A.type=="string"?A.type:void 0,fetchPriority:typeof A.fetchPriority=="string"?A.fetchPriority:void 0,referrerPolicy:typeof A.referrerPolicy=="string"?A.referrerPolicy:void 0,imageSrcSet:typeof A.imageSrcSet=="string"?A.imageSrcSet:void 0,imageSizes:typeof A.imageSizes=="string"?A.imageSizes:void 0,media:typeof A.media=="string"?A.media:void 0})}},Ht.preloadModule=function(_,A){if(typeof _=="string")if(A){var K=rt(A.as,A.crossOrigin);m.d.m(_,{as:typeof A.as=="string"&&A.as!=="script"?A.as:void 0,crossOrigin:K,integrity:typeof A.integrity=="string"?A.integrity:void 0})}else m.d.m(_)},Ht.requestFormReset=function(_){m.d.r(_)},Ht.unstable_batchedUpdates=function(_,A){return _(A)},Ht.useFormState=function(_,A,K){return et.H.useFormState(_,A,K)},Ht.useFormStatus=function(){return et.H.useHostTransitionStatus()},Ht.version="19.2.3",Ht}var Md;function dh(){if(Md)return hf.exports;Md=1;function E(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(E)}catch(T){console.error(T)}}return E(),hf.exports=rh(),hf.exports}var _d;function mh(){if(_d)return An;_d=1;var E=oh(),T=yf(),D=dh();function m(t){var l="https://react.dev/errors/"+t;if(1<arguments.length){l+="?args[]="+encodeURIComponent(arguments[1]);for(var e=2;e<arguments.length;e++)l+="&args[]="+encodeURIComponent(arguments[e])}return"Minified React error #"+t+"; visit "+l+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function C(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function R(t){var l=t,e=t;if(t.alternate)for(;l.return;)l=l.return;else{t=l;do l=t,(l.flags&4098)!==0&&(e=l.return),t=l.return;while(t)}return l.tag===3?e:null}function et(t){if(t.tag===13){var l=t.memoizedState;if(l===null&&(t=t.alternate,t!==null&&(l=t.memoizedState)),l!==null)return l.dehydrated}return null}function rt(t){if(t.tag===31){var l=t.memoizedState;if(l===null&&(t=t.alternate,t!==null&&(l=t.memoizedState)),l!==null)return l.dehydrated}return null}function _(t){if(R(t)!==t)throw Error(m(188))}function A(t){var l=t.alternate;if(!l){if(l=R(t),l===null)throw Error(m(188));return l!==t?null:t}for(var e=t,a=l;;){var n=e.return;if(n===null)break;var u=n.alternate;if(u===null){if(a=n.return,a!==null){e=a;continue}break}if(n.child===u.child){for(u=n.child;u;){if(u===e)return _(n),t;if(u===a)return _(n),l;u=u.sibling}throw Error(m(188))}if(e.return!==a.return)e=n,a=u;else{for(var i=!1,c=n.child;c;){if(c===e){i=!0,e=n,a=u;break}if(c===a){i=!0,a=n,e=u;break}c=c.sibling}if(!i){for(c=u.child;c;){if(c===e){i=!0,e=u,a=n;break}if(c===a){i=!0,a=u,e=n;break}c=c.sibling}if(!i)throw Error(m(189))}}if(e.alternate!==a)throw Error(m(190))}if(e.tag!==3)throw Error(m(188));return e.stateNode.current===e?t:l}function K(t){var l=t.tag;if(l===5||l===26||l===27||l===6)return t;for(t=t.child;t!==null;){if(l=K(t),l!==null)return l;t=t.sibling}return null}var B=Object.assign,tt=Symbol.for("react.element"),Ft=Symbol.for("react.transitional.element"),Gt=Symbol.for("react.portal"),Rt=Symbol.for("react.fragment"),Ol=Symbol.for("react.strict_mode"),$t=Symbol.for("react.profiler"),$l=Symbol.for("react.consumer"),Ct=Symbol.for("react.context"),fl=Symbol.for("react.forward_ref"),Al=Symbol.for("react.suspense"),Xt=Symbol.for("react.suspense_list"),W=Symbol.for("react.memo"),Qt=Symbol.for("react.lazy"),El=Symbol.for("react.activity"),Ze=Symbol.for("react.memo_cache_sentinel"),Tl=Symbol.iterator;function Lt(t){return t===null||typeof t!="object"?null:(t=Tl&&t[Tl]||t["@@iterator"],typeof t=="function"?t:null)}var Ae=Symbol.for("react.client.reference");function Dl(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===Ae?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Rt:return"Fragment";case $t:return"Profiler";case Ol:return"StrictMode";case Al:return"Suspense";case Xt:return"SuspenseList";case El:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case Gt:return"Portal";case Ct:return t.displayName||"Context";case $l:return(t._context.displayName||"Context")+".Consumer";case fl:var l=t.render;return t=t.displayName,t||(t=l.displayName||l.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case W:return l=t.displayName||null,l!==null?l:Dl(t.type)||"Memo";case Qt:l=t._payload,t=t._init;try{return Dl(t(l))}catch{}}return null}var bl=Array.isArray,b=T.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,j=D.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Y={pending:!1,data:null,method:null,action:null},ut=[],st=-1;function r(t){return{current:t}}function z(t){0>st||(t.current=ut[st],ut[st]=null,st--)}function M(t,l){st++,ut[st]=t.current,t.current=l}var O=r(null),X=r(null),Z=r(null),lt=r(null);function Bt(t,l){switch(M(Z,l),M(X,t),M(O,null),l.nodeType){case 9:case 11:t=(t=l.documentElement)&&(t=t.namespaceURI)?Zr(t):0;break;default:if(t=l.tagName,l=l.namespaceURI)l=Zr(l),t=wr(l,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}z(O),M(O,t)}function vt(){z(O),z(X),z(Z)}function _a(t){t.memoizedState!==null&&M(lt,t);var l=O.current,e=wr(l,t.type);l!==e&&(M(X,t),M(O,e))}function En(t){X.current===t&&(z(O),z(X)),lt.current===t&&(z(lt),pn._currentValue=Y)}var wu,pf;function Ee(t){if(wu===void 0)try{throw Error()}catch(e){var l=e.stack.trim().match(/\n( *(at )?)/);wu=l&&l[1]||"",pf=-1<e.stack.indexOf(`
    at`)?" (<anonymous>)":-1<e.stack.indexOf("@")?"@unknown:0:0":""}return`
`+wu+t+pf}var Vu=!1;function Ku(t,l){if(!t||Vu)return"";Vu=!0;var e=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var a={DetermineComponentFrameRoot:function(){try{if(l){var x=function(){throw Error()};if(Object.defineProperty(x.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(x,[])}catch(v){var y=v}Reflect.construct(t,[],x)}else{try{x.call()}catch(v){y=v}t.call(x.prototype)}}else{try{throw Error()}catch(v){y=v}(x=t())&&typeof x.catch=="function"&&x.catch(function(){})}}catch(v){if(v&&y&&typeof v.stack=="string")return[v.stack,y.stack]}return[null,null]}};a.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var n=Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot,"name");n&&n.configurable&&Object.defineProperty(a.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var u=a.DetermineComponentFrameRoot(),i=u[0],c=u[1];if(i&&c){var s=i.split(`
`),g=c.split(`
`);for(n=a=0;a<s.length&&!s[a].includes("DetermineComponentFrameRoot");)a++;for(;n<g.length&&!g[n].includes("DetermineComponentFrameRoot");)n++;if(a===s.length||n===g.length)for(a=s.length-1,n=g.length-1;1<=a&&0<=n&&s[a]!==g[n];)n--;for(;1<=a&&0<=n;a--,n--)if(s[a]!==g[n]){if(a!==1||n!==1)do if(a--,n--,0>n||s[a]!==g[n]){var p=`
`+s[a].replace(" at new "," at ");return t.displayName&&p.includes("<anonymous>")&&(p=p.replace("<anonymous>",t.displayName)),p}while(1<=a&&0<=n);break}}}finally{Vu=!1,Error.prepareStackTrace=e}return(e=t?t.displayName||t.name:"")?Ee(e):""}function qd(t,l){switch(t.tag){case 26:case 27:case 5:return Ee(t.type);case 16:return Ee("Lazy");case 13:return t.child!==l&&l!==null?Ee("Suspense Fallback"):Ee("Suspense");case 19:return Ee("SuspenseList");case 0:case 15:return Ku(t.type,!1);case 11:return Ku(t.type.render,!1);case 1:return Ku(t.type,!0);case 31:return Ee("Activity");default:return""}}function bf(t){try{var l="",e=null;do l+=qd(t,e),e=t,t=t.return;while(t);return l}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}var Ju=Object.prototype.hasOwnProperty,ku=E.unstable_scheduleCallback,Wu=E.unstable_cancelCallback,Yd=E.unstable_shouldYield,Gd=E.unstable_requestPaint,It=E.unstable_now,Xd=E.unstable_getCurrentPriorityLevel,Sf=E.unstable_ImmediatePriority,xf=E.unstable_UserBlockingPriority,Tn=E.unstable_NormalPriority,Qd=E.unstable_LowPriority,zf=E.unstable_IdlePriority,Ld=E.log,Zd=E.unstable_setDisableYieldValue,Na=null,Pt=null;function Il(t){if(typeof Ld=="function"&&Zd(t),Pt&&typeof Pt.setStrictMode=="function")try{Pt.setStrictMode(Na,t)}catch{}}var tl=Math.clz32?Math.clz32:Kd,wd=Math.log,Vd=Math.LN2;function Kd(t){return t>>>=0,t===0?32:31-(wd(t)/Vd|0)|0}var jn=256,Mn=262144,_n=4194304;function Te(t){var l=t&42;if(l!==0)return l;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function Nn(t,l,e){var a=t.pendingLanes;if(a===0)return 0;var n=0,u=t.suspendedLanes,i=t.pingedLanes;t=t.warmLanes;var c=a&134217727;return c!==0?(a=c&~u,a!==0?n=Te(a):(i&=c,i!==0?n=Te(i):e||(e=c&~t,e!==0&&(n=Te(e))))):(c=a&~u,c!==0?n=Te(c):i!==0?n=Te(i):e||(e=a&~t,e!==0&&(n=Te(e)))),n===0?0:l!==0&&l!==n&&(l&u)===0&&(u=n&-n,e=l&-l,u>=e||u===32&&(e&4194048)!==0)?l:n}function Oa(t,l){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&l)===0}function Jd(t,l){switch(t){case 1:case 2:case 4:case 8:case 64:return l+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return l+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Af(){var t=_n;return _n<<=1,(_n&62914560)===0&&(_n=4194304),t}function Fu(t){for(var l=[],e=0;31>e;e++)l.push(t);return l}function Da(t,l){t.pendingLanes|=l,l!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function kd(t,l,e,a,n,u){var i=t.pendingLanes;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=e,t.entangledLanes&=e,t.errorRecoveryDisabledLanes&=e,t.shellSuspendCounter=0;var c=t.entanglements,s=t.expirationTimes,g=t.hiddenUpdates;for(e=i&~e;0<e;){var p=31-tl(e),x=1<<p;c[p]=0,s[p]=-1;var y=g[p];if(y!==null)for(g[p]=null,p=0;p<y.length;p++){var v=y[p];v!==null&&(v.lane&=-536870913)}e&=~x}a!==0&&Ef(t,a,0),u!==0&&n===0&&t.tag!==0&&(t.suspendedLanes|=u&~(i&~l))}function Ef(t,l,e){t.pendingLanes|=l,t.suspendedLanes&=~l;var a=31-tl(l);t.entangledLanes|=l,t.entanglements[a]=t.entanglements[a]|1073741824|e&261930}function Tf(t,l){var e=t.entangledLanes|=l;for(t=t.entanglements;e;){var a=31-tl(e),n=1<<a;n&l|t[a]&l&&(t[a]|=l),e&=~n}}function jf(t,l){var e=l&-l;return e=(e&42)!==0?1:$u(e),(e&(t.suspendedLanes|l))!==0?0:e}function $u(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Iu(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Mf(){var t=j.p;return t!==0?t:(t=window.event,t===void 0?32:md(t.type))}function _f(t,l){var e=j.p;try{return j.p=t,l()}finally{j.p=e}}var Pl=Math.random().toString(36).slice(2),_t="__reactFiber$"+Pl,Zt="__reactProps$"+Pl,we="__reactContainer$"+Pl,Pu="__reactEvents$"+Pl,Wd="__reactListeners$"+Pl,Fd="__reactHandles$"+Pl,Nf="__reactResources$"+Pl,Ua="__reactMarker$"+Pl;function ti(t){delete t[_t],delete t[Zt],delete t[Pu],delete t[Wd],delete t[Fd]}function Ve(t){var l=t[_t];if(l)return l;for(var e=t.parentNode;e;){if(l=e[we]||e[_t]){if(e=l.alternate,l.child!==null||e!==null&&e.child!==null)for(t=$r(t);t!==null;){if(e=t[_t])return e;t=$r(t)}return l}t=e,e=t.parentNode}return null}function Ke(t){if(t=t[_t]||t[we]){var l=t.tag;if(l===5||l===6||l===13||l===31||l===26||l===27||l===3)return t}return null}function Ca(t){var l=t.tag;if(l===5||l===26||l===27||l===6)return t.stateNode;throw Error(m(33))}function Je(t){var l=t[Nf];return l||(l=t[Nf]={hoistableStyles:new Map,hoistableScripts:new Map}),l}function jt(t){t[Ua]=!0}var Of=new Set,Df={};function je(t,l){ke(t,l),ke(t+"Capture",l)}function ke(t,l){for(Df[t]=l,t=0;t<l.length;t++)Of.add(l[t])}var $d=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Uf={},Cf={};function Id(t){return Ju.call(Cf,t)?!0:Ju.call(Uf,t)?!1:$d.test(t)?Cf[t]=!0:(Uf[t]=!0,!1)}function On(t,l,e){if(Id(l))if(e===null)t.removeAttribute(l);else{switch(typeof e){case"undefined":case"function":case"symbol":t.removeAttribute(l);return;case"boolean":var a=l.toLowerCase().slice(0,5);if(a!=="data-"&&a!=="aria-"){t.removeAttribute(l);return}}t.setAttribute(l,""+e)}}function Dn(t,l,e){if(e===null)t.removeAttribute(l);else{switch(typeof e){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(l);return}t.setAttribute(l,""+e)}}function Ul(t,l,e,a){if(a===null)t.removeAttribute(e);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(e);return}t.setAttributeNS(l,e,""+a)}}function sl(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Hf(t){var l=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(l==="checkbox"||l==="radio")}function Pd(t,l,e){var a=Object.getOwnPropertyDescriptor(t.constructor.prototype,l);if(!t.hasOwnProperty(l)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var n=a.get,u=a.set;return Object.defineProperty(t,l,{configurable:!0,get:function(){return n.call(this)},set:function(i){e=""+i,u.call(this,i)}}),Object.defineProperty(t,l,{enumerable:a.enumerable}),{getValue:function(){return e},setValue:function(i){e=""+i},stopTracking:function(){t._valueTracker=null,delete t[l]}}}}function li(t){if(!t._valueTracker){var l=Hf(t)?"checked":"value";t._valueTracker=Pd(t,l,""+t[l])}}function Rf(t){if(!t)return!1;var l=t._valueTracker;if(!l)return!0;var e=l.getValue(),a="";return t&&(a=Hf(t)?t.checked?"true":"false":t.value),t=a,t!==e?(l.setValue(t),!0):!1}function Un(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var t0=/[\n"\\]/g;function ol(t){return t.replace(t0,function(l){return"\\"+l.charCodeAt(0).toString(16)+" "})}function ei(t,l,e,a,n,u,i,c){t.name="",i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"?t.type=i:t.removeAttribute("type"),l!=null?i==="number"?(l===0&&t.value===""||t.value!=l)&&(t.value=""+sl(l)):t.value!==""+sl(l)&&(t.value=""+sl(l)):i!=="submit"&&i!=="reset"||t.removeAttribute("value"),l!=null?ai(t,i,sl(l)):e!=null?ai(t,i,sl(e)):a!=null&&t.removeAttribute("value"),n==null&&u!=null&&(t.defaultChecked=!!u),n!=null&&(t.checked=n&&typeof n!="function"&&typeof n!="symbol"),c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"?t.name=""+sl(c):t.removeAttribute("name")}function Bf(t,l,e,a,n,u,i,c){if(u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"&&(t.type=u),l!=null||e!=null){if(!(u!=="submit"&&u!=="reset"||l!=null)){li(t);return}e=e!=null?""+sl(e):"",l=l!=null?""+sl(l):e,c||l===t.value||(t.value=l),t.defaultValue=l}a=a??n,a=typeof a!="function"&&typeof a!="symbol"&&!!a,t.checked=c?t.checked:!!a,t.defaultChecked=!!a,i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(t.name=i),li(t)}function ai(t,l,e){l==="number"&&Un(t.ownerDocument)===t||t.defaultValue===""+e||(t.defaultValue=""+e)}function We(t,l,e,a){if(t=t.options,l){l={};for(var n=0;n<e.length;n++)l["$"+e[n]]=!0;for(e=0;e<t.length;e++)n=l.hasOwnProperty("$"+t[e].value),t[e].selected!==n&&(t[e].selected=n),n&&a&&(t[e].defaultSelected=!0)}else{for(e=""+sl(e),l=null,n=0;n<t.length;n++){if(t[n].value===e){t[n].selected=!0,a&&(t[n].defaultSelected=!0);return}l!==null||t[n].disabled||(l=t[n])}l!==null&&(l.selected=!0)}}function qf(t,l,e){if(l!=null&&(l=""+sl(l),l!==t.value&&(t.value=l),e==null)){t.defaultValue!==l&&(t.defaultValue=l);return}t.defaultValue=e!=null?""+sl(e):""}function Yf(t,l,e,a){if(l==null){if(a!=null){if(e!=null)throw Error(m(92));if(bl(a)){if(1<a.length)throw Error(m(93));a=a[0]}e=a}e==null&&(e=""),l=e}e=sl(l),t.defaultValue=e,a=t.textContent,a===e&&a!==""&&a!==null&&(t.value=a),li(t)}function Fe(t,l){if(l){var e=t.firstChild;if(e&&e===t.lastChild&&e.nodeType===3){e.nodeValue=l;return}}t.textContent=l}var l0=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Gf(t,l,e){var a=l.indexOf("--")===0;e==null||typeof e=="boolean"||e===""?a?t.setProperty(l,""):l==="float"?t.cssFloat="":t[l]="":a?t.setProperty(l,e):typeof e!="number"||e===0||l0.has(l)?l==="float"?t.cssFloat=e:t[l]=(""+e).trim():t[l]=e+"px"}function Xf(t,l,e){if(l!=null&&typeof l!="object")throw Error(m(62));if(t=t.style,e!=null){for(var a in e)!e.hasOwnProperty(a)||l!=null&&l.hasOwnProperty(a)||(a.indexOf("--")===0?t.setProperty(a,""):a==="float"?t.cssFloat="":t[a]="");for(var n in l)a=l[n],l.hasOwnProperty(n)&&e[n]!==a&&Gf(t,n,a)}else for(var u in l)l.hasOwnProperty(u)&&Gf(t,u,l[u])}function ni(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var e0=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),a0=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Cn(t){return a0.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function Cl(){}var ui=null;function ii(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var $e=null,Ie=null;function Qf(t){var l=Ke(t);if(l&&(t=l.stateNode)){var e=t[Zt]||null;t:switch(t=l.stateNode,l.type){case"input":if(ei(t,e.value,e.defaultValue,e.defaultValue,e.checked,e.defaultChecked,e.type,e.name),l=e.name,e.type==="radio"&&l!=null){for(e=t;e.parentNode;)e=e.parentNode;for(e=e.querySelectorAll('input[name="'+ol(""+l)+'"][type="radio"]'),l=0;l<e.length;l++){var a=e[l];if(a!==t&&a.form===t.form){var n=a[Zt]||null;if(!n)throw Error(m(90));ei(a,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name)}}for(l=0;l<e.length;l++)a=e[l],a.form===t.form&&Rf(a)}break t;case"textarea":qf(t,e.value,e.defaultValue);break t;case"select":l=e.value,l!=null&&We(t,!!e.multiple,l,!1)}}}var ci=!1;function Lf(t,l,e){if(ci)return t(l,e);ci=!0;try{var a=t(l);return a}finally{if(ci=!1,($e!==null||Ie!==null)&&(Su(),$e&&(l=$e,t=Ie,Ie=$e=null,Qf(l),t)))for(l=0;l<t.length;l++)Qf(t[l])}}function Ha(t,l){var e=t.stateNode;if(e===null)return null;var a=e[Zt]||null;if(a===null)return null;e=a[l];t:switch(l){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(t=t.type,a=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!a;break t;default:t=!1}if(t)return null;if(e&&typeof e!="function")throw Error(m(231,l,typeof e));return e}var Hl=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),fi=!1;if(Hl)try{var Ra={};Object.defineProperty(Ra,"passive",{get:function(){fi=!0}}),window.addEventListener("test",Ra,Ra),window.removeEventListener("test",Ra,Ra)}catch{fi=!1}var te=null,si=null,Hn=null;function Zf(){if(Hn)return Hn;var t,l=si,e=l.length,a,n="value"in te?te.value:te.textContent,u=n.length;for(t=0;t<e&&l[t]===n[t];t++);var i=e-t;for(a=1;a<=i&&l[e-a]===n[u-a];a++);return Hn=n.slice(t,1<a?1-a:void 0)}function Rn(t){var l=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&l===13&&(t=13)):t=l,t===10&&(t=13),32<=t||t===13?t:0}function Bn(){return!0}function wf(){return!1}function wt(t){function l(e,a,n,u,i){this._reactName=e,this._targetInst=n,this.type=a,this.nativeEvent=u,this.target=i,this.currentTarget=null;for(var c in t)t.hasOwnProperty(c)&&(e=t[c],this[c]=e?e(u):u[c]);return this.isDefaultPrevented=(u.defaultPrevented!=null?u.defaultPrevented:u.returnValue===!1)?Bn:wf,this.isPropagationStopped=wf,this}return B(l.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():typeof e.returnValue!="unknown"&&(e.returnValue=!1),this.isDefaultPrevented=Bn)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():typeof e.cancelBubble!="unknown"&&(e.cancelBubble=!0),this.isPropagationStopped=Bn)},persist:function(){},isPersistent:Bn}),l}var Me={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},qn=wt(Me),Ba=B({},Me,{view:0,detail:0}),n0=wt(Ba),oi,ri,qa,Yn=B({},Ba,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:mi,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==qa&&(qa&&t.type==="mousemove"?(oi=t.screenX-qa.screenX,ri=t.screenY-qa.screenY):ri=oi=0,qa=t),oi)},movementY:function(t){return"movementY"in t?t.movementY:ri}}),Vf=wt(Yn),u0=B({},Yn,{dataTransfer:0}),i0=wt(u0),c0=B({},Ba,{relatedTarget:0}),di=wt(c0),f0=B({},Me,{animationName:0,elapsedTime:0,pseudoElement:0}),s0=wt(f0),o0=B({},Me,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),r0=wt(o0),d0=B({},Me,{data:0}),Kf=wt(d0),m0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},h0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},g0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function y0(t){var l=this.nativeEvent;return l.getModifierState?l.getModifierState(t):(t=g0[t])?!!l[t]:!1}function mi(){return y0}var v0=B({},Ba,{key:function(t){if(t.key){var l=m0[t.key]||t.key;if(l!=="Unidentified")return l}return t.type==="keypress"?(t=Rn(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?h0[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:mi,charCode:function(t){return t.type==="keypress"?Rn(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Rn(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),p0=wt(v0),b0=B({},Yn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Jf=wt(b0),S0=B({},Ba,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:mi}),x0=wt(S0),z0=B({},Me,{propertyName:0,elapsedTime:0,pseudoElement:0}),A0=wt(z0),E0=B({},Yn,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),T0=wt(E0),j0=B({},Me,{newState:0,oldState:0}),M0=wt(j0),_0=[9,13,27,32],hi=Hl&&"CompositionEvent"in window,Ya=null;Hl&&"documentMode"in document&&(Ya=document.documentMode);var N0=Hl&&"TextEvent"in window&&!Ya,kf=Hl&&(!hi||Ya&&8<Ya&&11>=Ya),Wf=" ",Ff=!1;function $f(t,l){switch(t){case"keyup":return _0.indexOf(l.keyCode)!==-1;case"keydown":return l.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function If(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Pe=!1;function O0(t,l){switch(t){case"compositionend":return If(l);case"keypress":return l.which!==32?null:(Ff=!0,Wf);case"textInput":return t=l.data,t===Wf&&Ff?null:t;default:return null}}function D0(t,l){if(Pe)return t==="compositionend"||!hi&&$f(t,l)?(t=Zf(),Hn=si=te=null,Pe=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(l.ctrlKey||l.altKey||l.metaKey)||l.ctrlKey&&l.altKey){if(l.char&&1<l.char.length)return l.char;if(l.which)return String.fromCharCode(l.which)}return null;case"compositionend":return kf&&l.locale!=="ko"?null:l.data;default:return null}}var U0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Pf(t){var l=t&&t.nodeName&&t.nodeName.toLowerCase();return l==="input"?!!U0[t.type]:l==="textarea"}function ts(t,l,e,a){$e?Ie?Ie.push(a):Ie=[a]:$e=a,l=Mu(l,"onChange"),0<l.length&&(e=new qn("onChange","change",null,e,a),t.push({event:e,listeners:l}))}var Ga=null,Xa=null;function C0(t){qr(t,0)}function Gn(t){var l=Ca(t);if(Rf(l))return t}function ls(t,l){if(t==="change")return l}var es=!1;if(Hl){var gi;if(Hl){var yi="oninput"in document;if(!yi){var as=document.createElement("div");as.setAttribute("oninput","return;"),yi=typeof as.oninput=="function"}gi=yi}else gi=!1;es=gi&&(!document.documentMode||9<document.documentMode)}function ns(){Ga&&(Ga.detachEvent("onpropertychange",us),Xa=Ga=null)}function us(t){if(t.propertyName==="value"&&Gn(Xa)){var l=[];ts(l,Xa,t,ii(t)),Lf(C0,l)}}function H0(t,l,e){t==="focusin"?(ns(),Ga=l,Xa=e,Ga.attachEvent("onpropertychange",us)):t==="focusout"&&ns()}function R0(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Gn(Xa)}function B0(t,l){if(t==="click")return Gn(l)}function q0(t,l){if(t==="input"||t==="change")return Gn(l)}function Y0(t,l){return t===l&&(t!==0||1/t===1/l)||t!==t&&l!==l}var ll=typeof Object.is=="function"?Object.is:Y0;function Qa(t,l){if(ll(t,l))return!0;if(typeof t!="object"||t===null||typeof l!="object"||l===null)return!1;var e=Object.keys(t),a=Object.keys(l);if(e.length!==a.length)return!1;for(a=0;a<e.length;a++){var n=e[a];if(!Ju.call(l,n)||!ll(t[n],l[n]))return!1}return!0}function is(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function cs(t,l){var e=is(t);t=0;for(var a;e;){if(e.nodeType===3){if(a=t+e.textContent.length,t<=l&&a>=l)return{node:e,offset:l-t};t=a}t:{for(;e;){if(e.nextSibling){e=e.nextSibling;break t}e=e.parentNode}e=void 0}e=is(e)}}function fs(t,l){return t&&l?t===l?!0:t&&t.nodeType===3?!1:l&&l.nodeType===3?fs(t,l.parentNode):"contains"in t?t.contains(l):t.compareDocumentPosition?!!(t.compareDocumentPosition(l)&16):!1:!1}function ss(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var l=Un(t.document);l instanceof t.HTMLIFrameElement;){try{var e=typeof l.contentWindow.location.href=="string"}catch{e=!1}if(e)t=l.contentWindow;else break;l=Un(t.document)}return l}function vi(t){var l=t&&t.nodeName&&t.nodeName.toLowerCase();return l&&(l==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||l==="textarea"||t.contentEditable==="true")}var G0=Hl&&"documentMode"in document&&11>=document.documentMode,ta=null,pi=null,La=null,bi=!1;function os(t,l,e){var a=e.window===e?e.document:e.nodeType===9?e:e.ownerDocument;bi||ta==null||ta!==Un(a)||(a=ta,"selectionStart"in a&&vi(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),La&&Qa(La,a)||(La=a,a=Mu(pi,"onSelect"),0<a.length&&(l=new qn("onSelect","select",null,l,e),t.push({event:l,listeners:a}),l.target=ta)))}function _e(t,l){var e={};return e[t.toLowerCase()]=l.toLowerCase(),e["Webkit"+t]="webkit"+l,e["Moz"+t]="moz"+l,e}var la={animationend:_e("Animation","AnimationEnd"),animationiteration:_e("Animation","AnimationIteration"),animationstart:_e("Animation","AnimationStart"),transitionrun:_e("Transition","TransitionRun"),transitionstart:_e("Transition","TransitionStart"),transitioncancel:_e("Transition","TransitionCancel"),transitionend:_e("Transition","TransitionEnd")},Si={},rs={};Hl&&(rs=document.createElement("div").style,"AnimationEvent"in window||(delete la.animationend.animation,delete la.animationiteration.animation,delete la.animationstart.animation),"TransitionEvent"in window||delete la.transitionend.transition);function Ne(t){if(Si[t])return Si[t];if(!la[t])return t;var l=la[t],e;for(e in l)if(l.hasOwnProperty(e)&&e in rs)return Si[t]=l[e];return t}var ds=Ne("animationend"),ms=Ne("animationiteration"),hs=Ne("animationstart"),X0=Ne("transitionrun"),Q0=Ne("transitionstart"),L0=Ne("transitioncancel"),gs=Ne("transitionend"),ys=new Map,xi="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");xi.push("scrollEnd");function Sl(t,l){ys.set(t,l),je(l,[t])}var Xn=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var l=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(l))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},rl=[],ea=0,zi=0;function Qn(){for(var t=ea,l=zi=ea=0;l<t;){var e=rl[l];rl[l++]=null;var a=rl[l];rl[l++]=null;var n=rl[l];rl[l++]=null;var u=rl[l];if(rl[l++]=null,a!==null&&n!==null){var i=a.pending;i===null?n.next=n:(n.next=i.next,i.next=n),a.pending=n}u!==0&&vs(e,n,u)}}function Ln(t,l,e,a){rl[ea++]=t,rl[ea++]=l,rl[ea++]=e,rl[ea++]=a,zi|=a,t.lanes|=a,t=t.alternate,t!==null&&(t.lanes|=a)}function Ai(t,l,e,a){return Ln(t,l,e,a),Zn(t)}function Oe(t,l){return Ln(t,null,null,l),Zn(t)}function vs(t,l,e){t.lanes|=e;var a=t.alternate;a!==null&&(a.lanes|=e);for(var n=!1,u=t.return;u!==null;)u.childLanes|=e,a=u.alternate,a!==null&&(a.childLanes|=e),u.tag===22&&(t=u.stateNode,t===null||t._visibility&1||(n=!0)),t=u,u=u.return;return t.tag===3?(u=t.stateNode,n&&l!==null&&(n=31-tl(e),t=u.hiddenUpdates,a=t[n],a===null?t[n]=[l]:a.push(l),l.lane=e|536870912),u):null}function Zn(t){if(50<rn)throw rn=0,Uc=null,Error(m(185));for(var l=t.return;l!==null;)t=l,l=t.return;return t.tag===3?t.stateNode:null}var aa={};function Z0(t,l,e,a){this.tag=t,this.key=e,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=l,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function el(t,l,e,a){return new Z0(t,l,e,a)}function Ei(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Rl(t,l){var e=t.alternate;return e===null?(e=el(t.tag,l,t.key,t.mode),e.elementType=t.elementType,e.type=t.type,e.stateNode=t.stateNode,e.alternate=t,t.alternate=e):(e.pendingProps=l,e.type=t.type,e.flags=0,e.subtreeFlags=0,e.deletions=null),e.flags=t.flags&65011712,e.childLanes=t.childLanes,e.lanes=t.lanes,e.child=t.child,e.memoizedProps=t.memoizedProps,e.memoizedState=t.memoizedState,e.updateQueue=t.updateQueue,l=t.dependencies,e.dependencies=l===null?null:{lanes:l.lanes,firstContext:l.firstContext},e.sibling=t.sibling,e.index=t.index,e.ref=t.ref,e.refCleanup=t.refCleanup,e}function ps(t,l){t.flags&=65011714;var e=t.alternate;return e===null?(t.childLanes=0,t.lanes=l,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,t.type=e.type,l=e.dependencies,t.dependencies=l===null?null:{lanes:l.lanes,firstContext:l.firstContext}),t}function wn(t,l,e,a,n,u){var i=0;if(a=t,typeof t=="function")Ei(t)&&(i=1);else if(typeof t=="string")i=km(t,e,O.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case El:return t=el(31,e,l,n),t.elementType=El,t.lanes=u,t;case Rt:return De(e.children,n,u,l);case Ol:i=8,n|=24;break;case $t:return t=el(12,e,l,n|2),t.elementType=$t,t.lanes=u,t;case Al:return t=el(13,e,l,n),t.elementType=Al,t.lanes=u,t;case Xt:return t=el(19,e,l,n),t.elementType=Xt,t.lanes=u,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Ct:i=10;break t;case $l:i=9;break t;case fl:i=11;break t;case W:i=14;break t;case Qt:i=16,a=null;break t}i=29,e=Error(m(130,t===null?"null":typeof t,"")),a=null}return l=el(i,e,l,n),l.elementType=t,l.type=a,l.lanes=u,l}function De(t,l,e,a){return t=el(7,t,a,l),t.lanes=e,t}function Ti(t,l,e){return t=el(6,t,null,l),t.lanes=e,t}function bs(t){var l=el(18,null,null,0);return l.stateNode=t,l}function ji(t,l,e){return l=el(4,t.children!==null?t.children:[],t.key,l),l.lanes=e,l.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},l}var Ss=new WeakMap;function dl(t,l){if(typeof t=="object"&&t!==null){var e=Ss.get(t);return e!==void 0?e:(l={value:t,source:l,stack:bf(l)},Ss.set(t,l),l)}return{value:t,source:l,stack:bf(l)}}var na=[],ua=0,Vn=null,Za=0,ml=[],hl=0,le=null,jl=1,Ml="";function Bl(t,l){na[ua++]=Za,na[ua++]=Vn,Vn=t,Za=l}function xs(t,l,e){ml[hl++]=jl,ml[hl++]=Ml,ml[hl++]=le,le=t;var a=jl;t=Ml;var n=32-tl(a)-1;a&=~(1<<n),e+=1;var u=32-tl(l)+n;if(30<u){var i=n-n%5;u=(a&(1<<i)-1).toString(32),a>>=i,n-=i,jl=1<<32-tl(l)+n|e<<n|a,Ml=u+t}else jl=1<<u|e<<n|a,Ml=t}function Mi(t){t.return!==null&&(Bl(t,1),xs(t,1,0))}function _i(t){for(;t===Vn;)Vn=na[--ua],na[ua]=null,Za=na[--ua],na[ua]=null;for(;t===le;)le=ml[--hl],ml[hl]=null,Ml=ml[--hl],ml[hl]=null,jl=ml[--hl],ml[hl]=null}function zs(t,l){ml[hl++]=jl,ml[hl++]=Ml,ml[hl++]=le,jl=l.id,Ml=l.overflow,le=t}var Nt=null,dt=null,F=!1,ee=null,gl=!1,Ni=Error(m(519));function ae(t){var l=Error(m(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw wa(dl(l,t)),Ni}function As(t){var l=t.stateNode,e=t.type,a=t.memoizedProps;switch(l[_t]=t,l[Zt]=a,e){case"dialog":V("cancel",l),V("close",l);break;case"iframe":case"object":case"embed":V("load",l);break;case"video":case"audio":for(e=0;e<mn.length;e++)V(mn[e],l);break;case"source":V("error",l);break;case"img":case"image":case"link":V("error",l),V("load",l);break;case"details":V("toggle",l);break;case"input":V("invalid",l),Bf(l,a.value,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name,!0);break;case"select":V("invalid",l);break;case"textarea":V("invalid",l),Yf(l,a.value,a.defaultValue,a.children)}e=a.children,typeof e!="string"&&typeof e!="number"&&typeof e!="bigint"||l.textContent===""+e||a.suppressHydrationWarning===!0||Qr(l.textContent,e)?(a.popover!=null&&(V("beforetoggle",l),V("toggle",l)),a.onScroll!=null&&V("scroll",l),a.onScrollEnd!=null&&V("scrollend",l),a.onClick!=null&&(l.onclick=Cl),l=!0):l=!1,l||ae(t,!0)}function Es(t){for(Nt=t.return;Nt;)switch(Nt.tag){case 5:case 31:case 13:gl=!1;return;case 27:case 3:gl=!0;return;default:Nt=Nt.return}}function ia(t){if(t!==Nt)return!1;if(!F)return Es(t),F=!0,!1;var l=t.tag,e;if((e=l!==3&&l!==27)&&((e=l===5)&&(e=t.type,e=!(e!=="form"&&e!=="button")||Jc(t.type,t.memoizedProps)),e=!e),e&&dt&&ae(t),Es(t),l===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(m(317));dt=Fr(t)}else if(l===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(m(317));dt=Fr(t)}else l===27?(l=dt,ve(t.type)?(t=Ic,Ic=null,dt=t):dt=l):dt=Nt?vl(t.stateNode.nextSibling):null;return!0}function Ue(){dt=Nt=null,F=!1}function Oi(){var t=ee;return t!==null&&(kt===null?kt=t:kt.push.apply(kt,t),ee=null),t}function wa(t){ee===null?ee=[t]:ee.push(t)}var Di=r(null),Ce=null,ql=null;function ne(t,l,e){M(Di,l._currentValue),l._currentValue=e}function Yl(t){t._currentValue=Di.current,z(Di)}function Ui(t,l,e){for(;t!==null;){var a=t.alternate;if((t.childLanes&l)!==l?(t.childLanes|=l,a!==null&&(a.childLanes|=l)):a!==null&&(a.childLanes&l)!==l&&(a.childLanes|=l),t===e)break;t=t.return}}function Ci(t,l,e,a){var n=t.child;for(n!==null&&(n.return=t);n!==null;){var u=n.dependencies;if(u!==null){var i=n.child;u=u.firstContext;t:for(;u!==null;){var c=u;u=n;for(var s=0;s<l.length;s++)if(c.context===l[s]){u.lanes|=e,c=u.alternate,c!==null&&(c.lanes|=e),Ui(u.return,e,t),a||(i=null);break t}u=c.next}}else if(n.tag===18){if(i=n.return,i===null)throw Error(m(341));i.lanes|=e,u=i.alternate,u!==null&&(u.lanes|=e),Ui(i,e,t),i=null}else i=n.child;if(i!==null)i.return=n;else for(i=n;i!==null;){if(i===t){i=null;break}if(n=i.sibling,n!==null){n.return=i.return,i=n;break}i=i.return}n=i}}function ca(t,l,e,a){t=null;for(var n=l,u=!1;n!==null;){if(!u){if((n.flags&524288)!==0)u=!0;else if((n.flags&262144)!==0)break}if(n.tag===10){var i=n.alternate;if(i===null)throw Error(m(387));if(i=i.memoizedProps,i!==null){var c=n.type;ll(n.pendingProps.value,i.value)||(t!==null?t.push(c):t=[c])}}else if(n===lt.current){if(i=n.alternate,i===null)throw Error(m(387));i.memoizedState.memoizedState!==n.memoizedState.memoizedState&&(t!==null?t.push(pn):t=[pn])}n=n.return}t!==null&&Ci(l,t,e,a),l.flags|=262144}function Kn(t){for(t=t.firstContext;t!==null;){if(!ll(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function He(t){Ce=t,ql=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Ot(t){return Ts(Ce,t)}function Jn(t,l){return Ce===null&&He(t),Ts(t,l)}function Ts(t,l){var e=l._currentValue;if(l={context:l,memoizedValue:e,next:null},ql===null){if(t===null)throw Error(m(308));ql=l,t.dependencies={lanes:0,firstContext:l},t.flags|=524288}else ql=ql.next=l;return e}var w0=typeof AbortController<"u"?AbortController:function(){var t=[],l=this.signal={aborted:!1,addEventListener:function(e,a){t.push(a)}};this.abort=function(){l.aborted=!0,t.forEach(function(e){return e()})}},V0=E.unstable_scheduleCallback,K0=E.unstable_NormalPriority,St={$$typeof:Ct,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Hi(){return{controller:new w0,data:new Map,refCount:0}}function Va(t){t.refCount--,t.refCount===0&&V0(K0,function(){t.controller.abort()})}var Ka=null,Ri=0,fa=0,sa=null;function J0(t,l){if(Ka===null){var e=Ka=[];Ri=0,fa=Yc(),sa={status:"pending",value:void 0,then:function(a){e.push(a)}}}return Ri++,l.then(js,js),l}function js(){if(--Ri===0&&Ka!==null){sa!==null&&(sa.status="fulfilled");var t=Ka;Ka=null,fa=0,sa=null;for(var l=0;l<t.length;l++)(0,t[l])()}}function k0(t,l){var e=[],a={status:"pending",value:null,reason:null,then:function(n){e.push(n)}};return t.then(function(){a.status="fulfilled",a.value=l;for(var n=0;n<e.length;n++)(0,e[n])(l)},function(n){for(a.status="rejected",a.reason=n,n=0;n<e.length;n++)(0,e[n])(void 0)}),a}var Ms=b.S;b.S=function(t,l){rr=It(),typeof l=="object"&&l!==null&&typeof l.then=="function"&&J0(t,l),Ms!==null&&Ms(t,l)};var Re=r(null);function Bi(){var t=Re.current;return t!==null?t:ot.pooledCache}function kn(t,l){l===null?M(Re,Re.current):M(Re,l.pool)}function _s(){var t=Bi();return t===null?null:{parent:St._currentValue,pool:t}}var oa=Error(m(460)),qi=Error(m(474)),Wn=Error(m(542)),Fn={then:function(){}};function Ns(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Os(t,l,e){switch(e=t[e],e===void 0?t.push(l):e!==l&&(l.then(Cl,Cl),l=e),l.status){case"fulfilled":return l.value;case"rejected":throw t=l.reason,Us(t),t;default:if(typeof l.status=="string")l.then(Cl,Cl);else{if(t=ot,t!==null&&100<t.shellSuspendCounter)throw Error(m(482));t=l,t.status="pending",t.then(function(a){if(l.status==="pending"){var n=l;n.status="fulfilled",n.value=a}},function(a){if(l.status==="pending"){var n=l;n.status="rejected",n.reason=a}})}switch(l.status){case"fulfilled":return l.value;case"rejected":throw t=l.reason,Us(t),t}throw qe=l,oa}}function Be(t){try{var l=t._init;return l(t._payload)}catch(e){throw e!==null&&typeof e=="object"&&typeof e.then=="function"?(qe=e,oa):e}}var qe=null;function Ds(){if(qe===null)throw Error(m(459));var t=qe;return qe=null,t}function Us(t){if(t===oa||t===Wn)throw Error(m(483))}var ra=null,Ja=0;function $n(t){var l=Ja;return Ja+=1,ra===null&&(ra=[]),Os(ra,t,l)}function ka(t,l){l=l.props.ref,t.ref=l!==void 0?l:null}function In(t,l){throw l.$$typeof===tt?Error(m(525)):(t=Object.prototype.toString.call(l),Error(m(31,t==="[object Object]"?"object with keys {"+Object.keys(l).join(", ")+"}":t)))}function Cs(t){function l(d,o){if(t){var h=d.deletions;h===null?(d.deletions=[o],d.flags|=16):h.push(o)}}function e(d,o){if(!t)return null;for(;o!==null;)l(d,o),o=o.sibling;return null}function a(d){for(var o=new Map;d!==null;)d.key!==null?o.set(d.key,d):o.set(d.index,d),d=d.sibling;return o}function n(d,o){return d=Rl(d,o),d.index=0,d.sibling=null,d}function u(d,o,h){return d.index=h,t?(h=d.alternate,h!==null?(h=h.index,h<o?(d.flags|=67108866,o):h):(d.flags|=67108866,o)):(d.flags|=1048576,o)}function i(d){return t&&d.alternate===null&&(d.flags|=67108866),d}function c(d,o,h,S){return o===null||o.tag!==6?(o=Ti(h,d.mode,S),o.return=d,o):(o=n(o,h),o.return=d,o)}function s(d,o,h,S){var H=h.type;return H===Rt?p(d,o,h.props.children,S,h.key):o!==null&&(o.elementType===H||typeof H=="object"&&H!==null&&H.$$typeof===Qt&&Be(H)===o.type)?(o=n(o,h.props),ka(o,h),o.return=d,o):(o=wn(h.type,h.key,h.props,null,d.mode,S),ka(o,h),o.return=d,o)}function g(d,o,h,S){return o===null||o.tag!==4||o.stateNode.containerInfo!==h.containerInfo||o.stateNode.implementation!==h.implementation?(o=ji(h,d.mode,S),o.return=d,o):(o=n(o,h.children||[]),o.return=d,o)}function p(d,o,h,S,H){return o===null||o.tag!==7?(o=De(h,d.mode,S,H),o.return=d,o):(o=n(o,h),o.return=d,o)}function x(d,o,h){if(typeof o=="string"&&o!==""||typeof o=="number"||typeof o=="bigint")return o=Ti(""+o,d.mode,h),o.return=d,o;if(typeof o=="object"&&o!==null){switch(o.$$typeof){case Ft:return h=wn(o.type,o.key,o.props,null,d.mode,h),ka(h,o),h.return=d,h;case Gt:return o=ji(o,d.mode,h),o.return=d,o;case Qt:return o=Be(o),x(d,o,h)}if(bl(o)||Lt(o))return o=De(o,d.mode,h,null),o.return=d,o;if(typeof o.then=="function")return x(d,$n(o),h);if(o.$$typeof===Ct)return x(d,Jn(d,o),h);In(d,o)}return null}function y(d,o,h,S){var H=o!==null?o.key:null;if(typeof h=="string"&&h!==""||typeof h=="number"||typeof h=="bigint")return H!==null?null:c(d,o,""+h,S);if(typeof h=="object"&&h!==null){switch(h.$$typeof){case Ft:return h.key===H?s(d,o,h,S):null;case Gt:return h.key===H?g(d,o,h,S):null;case Qt:return h=Be(h),y(d,o,h,S)}if(bl(h)||Lt(h))return H!==null?null:p(d,o,h,S,null);if(typeof h.then=="function")return y(d,o,$n(h),S);if(h.$$typeof===Ct)return y(d,o,Jn(d,h),S);In(d,h)}return null}function v(d,o,h,S,H){if(typeof S=="string"&&S!==""||typeof S=="number"||typeof S=="bigint")return d=d.get(h)||null,c(o,d,""+S,H);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Ft:return d=d.get(S.key===null?h:S.key)||null,s(o,d,S,H);case Gt:return d=d.get(S.key===null?h:S.key)||null,g(o,d,S,H);case Qt:return S=Be(S),v(d,o,h,S,H)}if(bl(S)||Lt(S))return d=d.get(h)||null,p(o,d,S,H,null);if(typeof S.then=="function")return v(d,o,h,$n(S),H);if(S.$$typeof===Ct)return v(d,o,h,Jn(o,S),H);In(o,S)}return null}function N(d,o,h,S){for(var H=null,$=null,U=o,L=o=0,k=null;U!==null&&L<h.length;L++){U.index>L?(k=U,U=null):k=U.sibling;var I=y(d,U,h[L],S);if(I===null){U===null&&(U=k);break}t&&U&&I.alternate===null&&l(d,U),o=u(I,o,L),$===null?H=I:$.sibling=I,$=I,U=k}if(L===h.length)return e(d,U),F&&Bl(d,L),H;if(U===null){for(;L<h.length;L++)U=x(d,h[L],S),U!==null&&(o=u(U,o,L),$===null?H=U:$.sibling=U,$=U);return F&&Bl(d,L),H}for(U=a(U);L<h.length;L++)k=v(U,d,L,h[L],S),k!==null&&(t&&k.alternate!==null&&U.delete(k.key===null?L:k.key),o=u(k,o,L),$===null?H=k:$.sibling=k,$=k);return t&&U.forEach(function(ze){return l(d,ze)}),F&&Bl(d,L),H}function q(d,o,h,S){if(h==null)throw Error(m(151));for(var H=null,$=null,U=o,L=o=0,k=null,I=h.next();U!==null&&!I.done;L++,I=h.next()){U.index>L?(k=U,U=null):k=U.sibling;var ze=y(d,U,I.value,S);if(ze===null){U===null&&(U=k);break}t&&U&&ze.alternate===null&&l(d,U),o=u(ze,o,L),$===null?H=ze:$.sibling=ze,$=ze,U=k}if(I.done)return e(d,U),F&&Bl(d,L),H;if(U===null){for(;!I.done;L++,I=h.next())I=x(d,I.value,S),I!==null&&(o=u(I,o,L),$===null?H=I:$.sibling=I,$=I);return F&&Bl(d,L),H}for(U=a(U);!I.done;L++,I=h.next())I=v(U,d,L,I.value,S),I!==null&&(t&&I.alternate!==null&&U.delete(I.key===null?L:I.key),o=u(I,o,L),$===null?H=I:$.sibling=I,$=I);return t&&U.forEach(function(uh){return l(d,uh)}),F&&Bl(d,L),H}function ft(d,o,h,S){if(typeof h=="object"&&h!==null&&h.type===Rt&&h.key===null&&(h=h.props.children),typeof h=="object"&&h!==null){switch(h.$$typeof){case Ft:t:{for(var H=h.key;o!==null;){if(o.key===H){if(H=h.type,H===Rt){if(o.tag===7){e(d,o.sibling),S=n(o,h.props.children),S.return=d,d=S;break t}}else if(o.elementType===H||typeof H=="object"&&H!==null&&H.$$typeof===Qt&&Be(H)===o.type){e(d,o.sibling),S=n(o,h.props),ka(S,h),S.return=d,d=S;break t}e(d,o);break}else l(d,o);o=o.sibling}h.type===Rt?(S=De(h.props.children,d.mode,S,h.key),S.return=d,d=S):(S=wn(h.type,h.key,h.props,null,d.mode,S),ka(S,h),S.return=d,d=S)}return i(d);case Gt:t:{for(H=h.key;o!==null;){if(o.key===H)if(o.tag===4&&o.stateNode.containerInfo===h.containerInfo&&o.stateNode.implementation===h.implementation){e(d,o.sibling),S=n(o,h.children||[]),S.return=d,d=S;break t}else{e(d,o);break}else l(d,o);o=o.sibling}S=ji(h,d.mode,S),S.return=d,d=S}return i(d);case Qt:return h=Be(h),ft(d,o,h,S)}if(bl(h))return N(d,o,h,S);if(Lt(h)){if(H=Lt(h),typeof H!="function")throw Error(m(150));return h=H.call(h),q(d,o,h,S)}if(typeof h.then=="function")return ft(d,o,$n(h),S);if(h.$$typeof===Ct)return ft(d,o,Jn(d,h),S);In(d,h)}return typeof h=="string"&&h!==""||typeof h=="number"||typeof h=="bigint"?(h=""+h,o!==null&&o.tag===6?(e(d,o.sibling),S=n(o,h),S.return=d,d=S):(e(d,o),S=Ti(h,d.mode,S),S.return=d,d=S),i(d)):e(d,o)}return function(d,o,h,S){try{Ja=0;var H=ft(d,o,h,S);return ra=null,H}catch(U){if(U===oa||U===Wn)throw U;var $=el(29,U,null,d.mode);return $.lanes=S,$.return=d,$}}}var Ye=Cs(!0),Hs=Cs(!1),ue=!1;function Yi(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Gi(t,l){t=t.updateQueue,l.updateQueue===t&&(l.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function ie(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function ce(t,l,e){var a=t.updateQueue;if(a===null)return null;if(a=a.shared,(P&2)!==0){var n=a.pending;return n===null?l.next=l:(l.next=n.next,n.next=l),a.pending=l,l=Zn(t),vs(t,null,e),l}return Ln(t,a,l,e),Zn(t)}function Wa(t,l,e){if(l=l.updateQueue,l!==null&&(l=l.shared,(e&4194048)!==0)){var a=l.lanes;a&=t.pendingLanes,e|=a,l.lanes=e,Tf(t,e)}}function Xi(t,l){var e=t.updateQueue,a=t.alternate;if(a!==null&&(a=a.updateQueue,e===a)){var n=null,u=null;if(e=e.firstBaseUpdate,e!==null){do{var i={lane:e.lane,tag:e.tag,payload:e.payload,callback:null,next:null};u===null?n=u=i:u=u.next=i,e=e.next}while(e!==null);u===null?n=u=l:u=u.next=l}else n=u=l;e={baseState:a.baseState,firstBaseUpdate:n,lastBaseUpdate:u,shared:a.shared,callbacks:a.callbacks},t.updateQueue=e;return}t=e.lastBaseUpdate,t===null?e.firstBaseUpdate=l:t.next=l,e.lastBaseUpdate=l}var Qi=!1;function Fa(){if(Qi){var t=sa;if(t!==null)throw t}}function $a(t,l,e,a){Qi=!1;var n=t.updateQueue;ue=!1;var u=n.firstBaseUpdate,i=n.lastBaseUpdate,c=n.shared.pending;if(c!==null){n.shared.pending=null;var s=c,g=s.next;s.next=null,i===null?u=g:i.next=g,i=s;var p=t.alternate;p!==null&&(p=p.updateQueue,c=p.lastBaseUpdate,c!==i&&(c===null?p.firstBaseUpdate=g:c.next=g,p.lastBaseUpdate=s))}if(u!==null){var x=n.baseState;i=0,p=g=s=null,c=u;do{var y=c.lane&-536870913,v=y!==c.lane;if(v?(J&y)===y:(a&y)===y){y!==0&&y===fa&&(Qi=!0),p!==null&&(p=p.next={lane:0,tag:c.tag,payload:c.payload,callback:null,next:null});t:{var N=t,q=c;y=l;var ft=e;switch(q.tag){case 1:if(N=q.payload,typeof N=="function"){x=N.call(ft,x,y);break t}x=N;break t;case 3:N.flags=N.flags&-65537|128;case 0:if(N=q.payload,y=typeof N=="function"?N.call(ft,x,y):N,y==null)break t;x=B({},x,y);break t;case 2:ue=!0}}y=c.callback,y!==null&&(t.flags|=64,v&&(t.flags|=8192),v=n.callbacks,v===null?n.callbacks=[y]:v.push(y))}else v={lane:y,tag:c.tag,payload:c.payload,callback:c.callback,next:null},p===null?(g=p=v,s=x):p=p.next=v,i|=y;if(c=c.next,c===null){if(c=n.shared.pending,c===null)break;v=c,c=v.next,v.next=null,n.lastBaseUpdate=v,n.shared.pending=null}}while(!0);p===null&&(s=x),n.baseState=s,n.firstBaseUpdate=g,n.lastBaseUpdate=p,u===null&&(n.shared.lanes=0),de|=i,t.lanes=i,t.memoizedState=x}}function Rs(t,l){if(typeof t!="function")throw Error(m(191,t));t.call(l)}function Bs(t,l){var e=t.callbacks;if(e!==null)for(t.callbacks=null,t=0;t<e.length;t++)Rs(e[t],l)}var da=r(null),Pn=r(0);function qs(t,l){t=Jl,M(Pn,t),M(da,l),Jl=t|l.baseLanes}function Li(){M(Pn,Jl),M(da,da.current)}function Zi(){Jl=Pn.current,z(da),z(Pn)}var al=r(null),yl=null;function fe(t){var l=t.alternate;M(pt,pt.current&1),M(al,t),yl===null&&(l===null||da.current!==null||l.memoizedState!==null)&&(yl=t)}function wi(t){M(pt,pt.current),M(al,t),yl===null&&(yl=t)}function Ys(t){t.tag===22?(M(pt,pt.current),M(al,t),yl===null&&(yl=t)):se()}function se(){M(pt,pt.current),M(al,al.current)}function nl(t){z(al),yl===t&&(yl=null),z(pt)}var pt=r(0);function tu(t){for(var l=t;l!==null;){if(l.tag===13){var e=l.memoizedState;if(e!==null&&(e=e.dehydrated,e===null||Fc(e)||$c(e)))return l}else if(l.tag===19&&(l.memoizedProps.revealOrder==="forwards"||l.memoizedProps.revealOrder==="backwards"||l.memoizedProps.revealOrder==="unstable_legacy-backwards"||l.memoizedProps.revealOrder==="together")){if((l.flags&128)!==0)return l}else if(l.child!==null){l.child.return=l,l=l.child;continue}if(l===t)break;for(;l.sibling===null;){if(l.return===null||l.return===t)return null;l=l.return}l.sibling.return=l.return,l=l.sibling}return null}var Gl=0,Q=null,it=null,xt=null,lu=!1,ma=!1,Ge=!1,eu=0,Ia=0,ha=null,W0=0;function gt(){throw Error(m(321))}function Vi(t,l){if(l===null)return!1;for(var e=0;e<l.length&&e<t.length;e++)if(!ll(t[e],l[e]))return!1;return!0}function Ki(t,l,e,a,n,u){return Gl=u,Q=l,l.memoizedState=null,l.updateQueue=null,l.lanes=0,b.H=t===null||t.memoizedState===null?zo:cc,Ge=!1,u=e(a,n),Ge=!1,ma&&(u=Xs(l,e,a,n)),Gs(t),u}function Gs(t){b.H=ln;var l=it!==null&&it.next!==null;if(Gl=0,xt=it=Q=null,lu=!1,Ia=0,ha=null,l)throw Error(m(300));t===null||zt||(t=t.dependencies,t!==null&&Kn(t)&&(zt=!0))}function Xs(t,l,e,a){Q=t;var n=0;do{if(ma&&(ha=null),Ia=0,ma=!1,25<=n)throw Error(m(301));if(n+=1,xt=it=null,t.updateQueue!=null){var u=t.updateQueue;u.lastEffect=null,u.events=null,u.stores=null,u.memoCache!=null&&(u.memoCache.index=0)}b.H=Ao,u=l(e,a)}while(ma);return u}function F0(){var t=b.H,l=t.useState()[0];return l=typeof l.then=="function"?Pa(l):l,t=t.useState()[0],(it!==null?it.memoizedState:null)!==t&&(Q.flags|=1024),l}function Ji(){var t=eu!==0;return eu=0,t}function ki(t,l,e){l.updateQueue=t.updateQueue,l.flags&=-2053,t.lanes&=~e}function Wi(t){if(lu){for(t=t.memoizedState;t!==null;){var l=t.queue;l!==null&&(l.pending=null),t=t.next}lu=!1}Gl=0,xt=it=Q=null,ma=!1,Ia=eu=0,ha=null}function qt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return xt===null?Q.memoizedState=xt=t:xt=xt.next=t,xt}function bt(){if(it===null){var t=Q.alternate;t=t!==null?t.memoizedState:null}else t=it.next;var l=xt===null?Q.memoizedState:xt.next;if(l!==null)xt=l,it=t;else{if(t===null)throw Q.alternate===null?Error(m(467)):Error(m(310));it=t,t={memoizedState:it.memoizedState,baseState:it.baseState,baseQueue:it.baseQueue,queue:it.queue,next:null},xt===null?Q.memoizedState=xt=t:xt=xt.next=t}return xt}function au(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Pa(t){var l=Ia;return Ia+=1,ha===null&&(ha=[]),t=Os(ha,t,l),l=Q,(xt===null?l.memoizedState:xt.next)===null&&(l=l.alternate,b.H=l===null||l.memoizedState===null?zo:cc),t}function nu(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return Pa(t);if(t.$$typeof===Ct)return Ot(t)}throw Error(m(438,String(t)))}function Fi(t){var l=null,e=Q.updateQueue;if(e!==null&&(l=e.memoCache),l==null){var a=Q.alternate;a!==null&&(a=a.updateQueue,a!==null&&(a=a.memoCache,a!=null&&(l={data:a.data.map(function(n){return n.slice()}),index:0})))}if(l==null&&(l={data:[],index:0}),e===null&&(e=au(),Q.updateQueue=e),e.memoCache=l,e=l.data[l.index],e===void 0)for(e=l.data[l.index]=Array(t),a=0;a<t;a++)e[a]=Ze;return l.index++,e}function Xl(t,l){return typeof l=="function"?l(t):l}function uu(t){var l=bt();return $i(l,it,t)}function $i(t,l,e){var a=t.queue;if(a===null)throw Error(m(311));a.lastRenderedReducer=e;var n=t.baseQueue,u=a.pending;if(u!==null){if(n!==null){var i=n.next;n.next=u.next,u.next=i}l.baseQueue=n=u,a.pending=null}if(u=t.baseState,n===null)t.memoizedState=u;else{l=n.next;var c=i=null,s=null,g=l,p=!1;do{var x=g.lane&-536870913;if(x!==g.lane?(J&x)===x:(Gl&x)===x){var y=g.revertLane;if(y===0)s!==null&&(s=s.next={lane:0,revertLane:0,gesture:null,action:g.action,hasEagerState:g.hasEagerState,eagerState:g.eagerState,next:null}),x===fa&&(p=!0);else if((Gl&y)===y){g=g.next,y===fa&&(p=!0);continue}else x={lane:0,revertLane:g.revertLane,gesture:null,action:g.action,hasEagerState:g.hasEagerState,eagerState:g.eagerState,next:null},s===null?(c=s=x,i=u):s=s.next=x,Q.lanes|=y,de|=y;x=g.action,Ge&&e(u,x),u=g.hasEagerState?g.eagerState:e(u,x)}else y={lane:x,revertLane:g.revertLane,gesture:g.gesture,action:g.action,hasEagerState:g.hasEagerState,eagerState:g.eagerState,next:null},s===null?(c=s=y,i=u):s=s.next=y,Q.lanes|=x,de|=x;g=g.next}while(g!==null&&g!==l);if(s===null?i=u:s.next=c,!ll(u,t.memoizedState)&&(zt=!0,p&&(e=sa,e!==null)))throw e;t.memoizedState=u,t.baseState=i,t.baseQueue=s,a.lastRenderedState=u}return n===null&&(a.lanes=0),[t.memoizedState,a.dispatch]}function Ii(t){var l=bt(),e=l.queue;if(e===null)throw Error(m(311));e.lastRenderedReducer=t;var a=e.dispatch,n=e.pending,u=l.memoizedState;if(n!==null){e.pending=null;var i=n=n.next;do u=t(u,i.action),i=i.next;while(i!==n);ll(u,l.memoizedState)||(zt=!0),l.memoizedState=u,l.baseQueue===null&&(l.baseState=u),e.lastRenderedState=u}return[u,a]}function Qs(t,l,e){var a=Q,n=bt(),u=F;if(u){if(e===void 0)throw Error(m(407));e=e()}else e=l();var i=!ll((it||n).memoizedState,e);if(i&&(n.memoizedState=e,zt=!0),n=n.queue,lc(ws.bind(null,a,n,t),[t]),n.getSnapshot!==l||i||xt!==null&&xt.memoizedState.tag&1){if(a.flags|=2048,ga(9,{destroy:void 0},Zs.bind(null,a,n,e,l),null),ot===null)throw Error(m(349));u||(Gl&127)!==0||Ls(a,l,e)}return e}function Ls(t,l,e){t.flags|=16384,t={getSnapshot:l,value:e},l=Q.updateQueue,l===null?(l=au(),Q.updateQueue=l,l.stores=[t]):(e=l.stores,e===null?l.stores=[t]:e.push(t))}function Zs(t,l,e,a){l.value=e,l.getSnapshot=a,Vs(l)&&Ks(t)}function ws(t,l,e){return e(function(){Vs(l)&&Ks(t)})}function Vs(t){var l=t.getSnapshot;t=t.value;try{var e=l();return!ll(t,e)}catch{return!0}}function Ks(t){var l=Oe(t,2);l!==null&&Wt(l,t,2)}function Pi(t){var l=qt();if(typeof t=="function"){var e=t;if(t=e(),Ge){Il(!0);try{e()}finally{Il(!1)}}}return l.memoizedState=l.baseState=t,l.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Xl,lastRenderedState:t},l}function Js(t,l,e,a){return t.baseState=e,$i(t,it,typeof a=="function"?a:Xl)}function $0(t,l,e,a,n){if(fu(t))throw Error(m(485));if(t=l.action,t!==null){var u={payload:n,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(i){u.listeners.push(i)}};b.T!==null?e(!0):u.isTransition=!1,a(u),e=l.pending,e===null?(u.next=l.pending=u,ks(l,u)):(u.next=e.next,l.pending=e.next=u)}}function ks(t,l){var e=l.action,a=l.payload,n=t.state;if(l.isTransition){var u=b.T,i={};b.T=i;try{var c=e(n,a),s=b.S;s!==null&&s(i,c),Ws(t,l,c)}catch(g){tc(t,l,g)}finally{u!==null&&i.types!==null&&(u.types=i.types),b.T=u}}else try{u=e(n,a),Ws(t,l,u)}catch(g){tc(t,l,g)}}function Ws(t,l,e){e!==null&&typeof e=="object"&&typeof e.then=="function"?e.then(function(a){Fs(t,l,a)},function(a){return tc(t,l,a)}):Fs(t,l,e)}function Fs(t,l,e){l.status="fulfilled",l.value=e,$s(l),t.state=e,l=t.pending,l!==null&&(e=l.next,e===l?t.pending=null:(e=e.next,l.next=e,ks(t,e)))}function tc(t,l,e){var a=t.pending;if(t.pending=null,a!==null){a=a.next;do l.status="rejected",l.reason=e,$s(l),l=l.next;while(l!==a)}t.action=null}function $s(t){t=t.listeners;for(var l=0;l<t.length;l++)(0,t[l])()}function Is(t,l){return l}function Ps(t,l){if(F){var e=ot.formState;if(e!==null){t:{var a=Q;if(F){if(dt){l:{for(var n=dt,u=gl;n.nodeType!==8;){if(!u){n=null;break l}if(n=vl(n.nextSibling),n===null){n=null;break l}}u=n.data,n=u==="F!"||u==="F"?n:null}if(n){dt=vl(n.nextSibling),a=n.data==="F!";break t}}ae(a)}a=!1}a&&(l=e[0])}}return e=qt(),e.memoizedState=e.baseState=l,a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Is,lastRenderedState:l},e.queue=a,e=bo.bind(null,Q,a),a.dispatch=e,a=Pi(!1),u=ic.bind(null,Q,!1,a.queue),a=qt(),n={state:l,dispatch:null,action:t,pending:null},a.queue=n,e=$0.bind(null,Q,n,u,e),n.dispatch=e,a.memoizedState=t,[l,e,!1]}function to(t){var l=bt();return lo(l,it,t)}function lo(t,l,e){if(l=$i(t,l,Is)[0],t=uu(Xl)[0],typeof l=="object"&&l!==null&&typeof l.then=="function")try{var a=Pa(l)}catch(i){throw i===oa?Wn:i}else a=l;l=bt();var n=l.queue,u=n.dispatch;return e!==l.memoizedState&&(Q.flags|=2048,ga(9,{destroy:void 0},I0.bind(null,n,e),null)),[a,u,t]}function I0(t,l){t.action=l}function eo(t){var l=bt(),e=it;if(e!==null)return lo(l,e,t);bt(),l=l.memoizedState,e=bt();var a=e.queue.dispatch;return e.memoizedState=t,[l,a,!1]}function ga(t,l,e,a){return t={tag:t,create:e,deps:a,inst:l,next:null},l=Q.updateQueue,l===null&&(l=au(),Q.updateQueue=l),e=l.lastEffect,e===null?l.lastEffect=t.next=t:(a=e.next,e.next=t,t.next=a,l.lastEffect=t),t}function ao(){return bt().memoizedState}function iu(t,l,e,a){var n=qt();Q.flags|=t,n.memoizedState=ga(1|l,{destroy:void 0},e,a===void 0?null:a)}function cu(t,l,e,a){var n=bt();a=a===void 0?null:a;var u=n.memoizedState.inst;it!==null&&a!==null&&Vi(a,it.memoizedState.deps)?n.memoizedState=ga(l,u,e,a):(Q.flags|=t,n.memoizedState=ga(1|l,u,e,a))}function no(t,l){iu(8390656,8,t,l)}function lc(t,l){cu(2048,8,t,l)}function P0(t){Q.flags|=4;var l=Q.updateQueue;if(l===null)l=au(),Q.updateQueue=l,l.events=[t];else{var e=l.events;e===null?l.events=[t]:e.push(t)}}function uo(t){var l=bt().memoizedState;return P0({ref:l,nextImpl:t}),function(){if((P&2)!==0)throw Error(m(440));return l.impl.apply(void 0,arguments)}}function io(t,l){return cu(4,2,t,l)}function co(t,l){return cu(4,4,t,l)}function fo(t,l){if(typeof l=="function"){t=t();var e=l(t);return function(){typeof e=="function"?e():l(null)}}if(l!=null)return t=t(),l.current=t,function(){l.current=null}}function so(t,l,e){e=e!=null?e.concat([t]):null,cu(4,4,fo.bind(null,l,t),e)}function ec(){}function oo(t,l){var e=bt();l=l===void 0?null:l;var a=e.memoizedState;return l!==null&&Vi(l,a[1])?a[0]:(e.memoizedState=[t,l],t)}function ro(t,l){var e=bt();l=l===void 0?null:l;var a=e.memoizedState;if(l!==null&&Vi(l,a[1]))return a[0];if(a=t(),Ge){Il(!0);try{t()}finally{Il(!1)}}return e.memoizedState=[a,l],a}function ac(t,l,e){return e===void 0||(Gl&1073741824)!==0&&(J&261930)===0?t.memoizedState=l:(t.memoizedState=e,t=mr(),Q.lanes|=t,de|=t,e)}function mo(t,l,e,a){return ll(e,l)?e:da.current!==null?(t=ac(t,e,a),ll(t,l)||(zt=!0),t):(Gl&42)===0||(Gl&1073741824)!==0&&(J&261930)===0?(zt=!0,t.memoizedState=e):(t=mr(),Q.lanes|=t,de|=t,l)}function ho(t,l,e,a,n){var u=j.p;j.p=u!==0&&8>u?u:8;var i=b.T,c={};b.T=c,ic(t,!1,l,e);try{var s=n(),g=b.S;if(g!==null&&g(c,s),s!==null&&typeof s=="object"&&typeof s.then=="function"){var p=k0(s,a);tn(t,l,p,cl(t))}else tn(t,l,a,cl(t))}catch(x){tn(t,l,{then:function(){},status:"rejected",reason:x},cl())}finally{j.p=u,i!==null&&c.types!==null&&(i.types=c.types),b.T=i}}function tm(){}function nc(t,l,e,a){if(t.tag!==5)throw Error(m(476));var n=go(t).queue;ho(t,n,l,Y,e===null?tm:function(){return yo(t),e(a)})}function go(t){var l=t.memoizedState;if(l!==null)return l;l={memoizedState:Y,baseState:Y,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Xl,lastRenderedState:Y},next:null};var e={};return l.next={memoizedState:e,baseState:e,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Xl,lastRenderedState:e},next:null},t.memoizedState=l,t=t.alternate,t!==null&&(t.memoizedState=l),l}function yo(t){var l=go(t);l.next===null&&(l=t.alternate.memoizedState),tn(t,l.next.queue,{},cl())}function uc(){return Ot(pn)}function vo(){return bt().memoizedState}function po(){return bt().memoizedState}function lm(t){for(var l=t.return;l!==null;){switch(l.tag){case 24:case 3:var e=cl();t=ie(e);var a=ce(l,t,e);a!==null&&(Wt(a,l,e),Wa(a,l,e)),l={cache:Hi()},t.payload=l;return}l=l.return}}function em(t,l,e){var a=cl();e={lane:a,revertLane:0,gesture:null,action:e,hasEagerState:!1,eagerState:null,next:null},fu(t)?So(l,e):(e=Ai(t,l,e,a),e!==null&&(Wt(e,t,a),xo(e,l,a)))}function bo(t,l,e){var a=cl();tn(t,l,e,a)}function tn(t,l,e,a){var n={lane:a,revertLane:0,gesture:null,action:e,hasEagerState:!1,eagerState:null,next:null};if(fu(t))So(l,n);else{var u=t.alternate;if(t.lanes===0&&(u===null||u.lanes===0)&&(u=l.lastRenderedReducer,u!==null))try{var i=l.lastRenderedState,c=u(i,e);if(n.hasEagerState=!0,n.eagerState=c,ll(c,i))return Ln(t,l,n,0),ot===null&&Qn(),!1}catch{}if(e=Ai(t,l,n,a),e!==null)return Wt(e,t,a),xo(e,l,a),!0}return!1}function ic(t,l,e,a){if(a={lane:2,revertLane:Yc(),gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},fu(t)){if(l)throw Error(m(479))}else l=Ai(t,e,a,2),l!==null&&Wt(l,t,2)}function fu(t){var l=t.alternate;return t===Q||l!==null&&l===Q}function So(t,l){ma=lu=!0;var e=t.pending;e===null?l.next=l:(l.next=e.next,e.next=l),t.pending=l}function xo(t,l,e){if((e&4194048)!==0){var a=l.lanes;a&=t.pendingLanes,e|=a,l.lanes=e,Tf(t,e)}}var ln={readContext:Ot,use:nu,useCallback:gt,useContext:gt,useEffect:gt,useImperativeHandle:gt,useLayoutEffect:gt,useInsertionEffect:gt,useMemo:gt,useReducer:gt,useRef:gt,useState:gt,useDebugValue:gt,useDeferredValue:gt,useTransition:gt,useSyncExternalStore:gt,useId:gt,useHostTransitionStatus:gt,useFormState:gt,useActionState:gt,useOptimistic:gt,useMemoCache:gt,useCacheRefresh:gt};ln.useEffectEvent=gt;var zo={readContext:Ot,use:nu,useCallback:function(t,l){return qt().memoizedState=[t,l===void 0?null:l],t},useContext:Ot,useEffect:no,useImperativeHandle:function(t,l,e){e=e!=null?e.concat([t]):null,iu(4194308,4,fo.bind(null,l,t),e)},useLayoutEffect:function(t,l){return iu(4194308,4,t,l)},useInsertionEffect:function(t,l){iu(4,2,t,l)},useMemo:function(t,l){var e=qt();l=l===void 0?null:l;var a=t();if(Ge){Il(!0);try{t()}finally{Il(!1)}}return e.memoizedState=[a,l],a},useReducer:function(t,l,e){var a=qt();if(e!==void 0){var n=e(l);if(Ge){Il(!0);try{e(l)}finally{Il(!1)}}}else n=l;return a.memoizedState=a.baseState=n,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:n},a.queue=t,t=t.dispatch=em.bind(null,Q,t),[a.memoizedState,t]},useRef:function(t){var l=qt();return t={current:t},l.memoizedState=t},useState:function(t){t=Pi(t);var l=t.queue,e=bo.bind(null,Q,l);return l.dispatch=e,[t.memoizedState,e]},useDebugValue:ec,useDeferredValue:function(t,l){var e=qt();return ac(e,t,l)},useTransition:function(){var t=Pi(!1);return t=ho.bind(null,Q,t.queue,!0,!1),qt().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,l,e){var a=Q,n=qt();if(F){if(e===void 0)throw Error(m(407));e=e()}else{if(e=l(),ot===null)throw Error(m(349));(J&127)!==0||Ls(a,l,e)}n.memoizedState=e;var u={value:e,getSnapshot:l};return n.queue=u,no(ws.bind(null,a,u,t),[t]),a.flags|=2048,ga(9,{destroy:void 0},Zs.bind(null,a,u,e,l),null),e},useId:function(){var t=qt(),l=ot.identifierPrefix;if(F){var e=Ml,a=jl;e=(a&~(1<<32-tl(a)-1)).toString(32)+e,l="_"+l+"R_"+e,e=eu++,0<e&&(l+="H"+e.toString(32)),l+="_"}else e=W0++,l="_"+l+"r_"+e.toString(32)+"_";return t.memoizedState=l},useHostTransitionStatus:uc,useFormState:Ps,useActionState:Ps,useOptimistic:function(t){var l=qt();l.memoizedState=l.baseState=t;var e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return l.queue=e,l=ic.bind(null,Q,!0,e),e.dispatch=l,[t,l]},useMemoCache:Fi,useCacheRefresh:function(){return qt().memoizedState=lm.bind(null,Q)},useEffectEvent:function(t){var l=qt(),e={impl:t};return l.memoizedState=e,function(){if((P&2)!==0)throw Error(m(440));return e.impl.apply(void 0,arguments)}}},cc={readContext:Ot,use:nu,useCallback:oo,useContext:Ot,useEffect:lc,useImperativeHandle:so,useInsertionEffect:io,useLayoutEffect:co,useMemo:ro,useReducer:uu,useRef:ao,useState:function(){return uu(Xl)},useDebugValue:ec,useDeferredValue:function(t,l){var e=bt();return mo(e,it.memoizedState,t,l)},useTransition:function(){var t=uu(Xl)[0],l=bt().memoizedState;return[typeof t=="boolean"?t:Pa(t),l]},useSyncExternalStore:Qs,useId:vo,useHostTransitionStatus:uc,useFormState:to,useActionState:to,useOptimistic:function(t,l){var e=bt();return Js(e,it,t,l)},useMemoCache:Fi,useCacheRefresh:po};cc.useEffectEvent=uo;var Ao={readContext:Ot,use:nu,useCallback:oo,useContext:Ot,useEffect:lc,useImperativeHandle:so,useInsertionEffect:io,useLayoutEffect:co,useMemo:ro,useReducer:Ii,useRef:ao,useState:function(){return Ii(Xl)},useDebugValue:ec,useDeferredValue:function(t,l){var e=bt();return it===null?ac(e,t,l):mo(e,it.memoizedState,t,l)},useTransition:function(){var t=Ii(Xl)[0],l=bt().memoizedState;return[typeof t=="boolean"?t:Pa(t),l]},useSyncExternalStore:Qs,useId:vo,useHostTransitionStatus:uc,useFormState:eo,useActionState:eo,useOptimistic:function(t,l){var e=bt();return it!==null?Js(e,it,t,l):(e.baseState=t,[t,e.queue.dispatch])},useMemoCache:Fi,useCacheRefresh:po};Ao.useEffectEvent=uo;function fc(t,l,e,a){l=t.memoizedState,e=e(a,l),e=e==null?l:B({},l,e),t.memoizedState=e,t.lanes===0&&(t.updateQueue.baseState=e)}var sc={enqueueSetState:function(t,l,e){t=t._reactInternals;var a=cl(),n=ie(a);n.payload=l,e!=null&&(n.callback=e),l=ce(t,n,a),l!==null&&(Wt(l,t,a),Wa(l,t,a))},enqueueReplaceState:function(t,l,e){t=t._reactInternals;var a=cl(),n=ie(a);n.tag=1,n.payload=l,e!=null&&(n.callback=e),l=ce(t,n,a),l!==null&&(Wt(l,t,a),Wa(l,t,a))},enqueueForceUpdate:function(t,l){t=t._reactInternals;var e=cl(),a=ie(e);a.tag=2,l!=null&&(a.callback=l),l=ce(t,a,e),l!==null&&(Wt(l,t,e),Wa(l,t,e))}};function Eo(t,l,e,a,n,u,i){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(a,u,i):l.prototype&&l.prototype.isPureReactComponent?!Qa(e,a)||!Qa(n,u):!0}function To(t,l,e,a){t=l.state,typeof l.componentWillReceiveProps=="function"&&l.componentWillReceiveProps(e,a),typeof l.UNSAFE_componentWillReceiveProps=="function"&&l.UNSAFE_componentWillReceiveProps(e,a),l.state!==t&&sc.enqueueReplaceState(l,l.state,null)}function Xe(t,l){var e=l;if("ref"in l){e={};for(var a in l)a!=="ref"&&(e[a]=l[a])}if(t=t.defaultProps){e===l&&(e=B({},e));for(var n in t)e[n]===void 0&&(e[n]=t[n])}return e}function jo(t){Xn(t)}function Mo(t){console.error(t)}function _o(t){Xn(t)}function su(t,l){try{var e=t.onUncaughtError;e(l.value,{componentStack:l.stack})}catch(a){setTimeout(function(){throw a})}}function No(t,l,e){try{var a=t.onCaughtError;a(e.value,{componentStack:e.stack,errorBoundary:l.tag===1?l.stateNode:null})}catch(n){setTimeout(function(){throw n})}}function oc(t,l,e){return e=ie(e),e.tag=3,e.payload={element:null},e.callback=function(){su(t,l)},e}function Oo(t){return t=ie(t),t.tag=3,t}function Do(t,l,e,a){var n=e.type.getDerivedStateFromError;if(typeof n=="function"){var u=a.value;t.payload=function(){return n(u)},t.callback=function(){No(l,e,a)}}var i=e.stateNode;i!==null&&typeof i.componentDidCatch=="function"&&(t.callback=function(){No(l,e,a),typeof n!="function"&&(me===null?me=new Set([this]):me.add(this));var c=a.stack;this.componentDidCatch(a.value,{componentStack:c!==null?c:""})})}function am(t,l,e,a,n){if(e.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){if(l=e.alternate,l!==null&&ca(l,e,n,!0),e=al.current,e!==null){switch(e.tag){case 31:case 13:return yl===null?xu():e.alternate===null&&yt===0&&(yt=3),e.flags&=-257,e.flags|=65536,e.lanes=n,a===Fn?e.flags|=16384:(l=e.updateQueue,l===null?e.updateQueue=new Set([a]):l.add(a),Rc(t,a,n)),!1;case 22:return e.flags|=65536,a===Fn?e.flags|=16384:(l=e.updateQueue,l===null?(l={transitions:null,markerInstances:null,retryQueue:new Set([a])},e.updateQueue=l):(e=l.retryQueue,e===null?l.retryQueue=new Set([a]):e.add(a)),Rc(t,a,n)),!1}throw Error(m(435,e.tag))}return Rc(t,a,n),xu(),!1}if(F)return l=al.current,l!==null?((l.flags&65536)===0&&(l.flags|=256),l.flags|=65536,l.lanes=n,a!==Ni&&(t=Error(m(422),{cause:a}),wa(dl(t,e)))):(a!==Ni&&(l=Error(m(423),{cause:a}),wa(dl(l,e))),t=t.current.alternate,t.flags|=65536,n&=-n,t.lanes|=n,a=dl(a,e),n=oc(t.stateNode,a,n),Xi(t,n),yt!==4&&(yt=2)),!1;var u=Error(m(520),{cause:a});if(u=dl(u,e),on===null?on=[u]:on.push(u),yt!==4&&(yt=2),l===null)return!0;a=dl(a,e),e=l;do{switch(e.tag){case 3:return e.flags|=65536,t=n&-n,e.lanes|=t,t=oc(e.stateNode,a,t),Xi(e,t),!1;case 1:if(l=e.type,u=e.stateNode,(e.flags&128)===0&&(typeof l.getDerivedStateFromError=="function"||u!==null&&typeof u.componentDidCatch=="function"&&(me===null||!me.has(u))))return e.flags|=65536,n&=-n,e.lanes|=n,n=Oo(n),Do(n,t,e,a),Xi(e,n),!1}e=e.return}while(e!==null);return!1}var rc=Error(m(461)),zt=!1;function Dt(t,l,e,a){l.child=t===null?Hs(l,null,e,a):Ye(l,t.child,e,a)}function Uo(t,l,e,a,n){e=e.render;var u=l.ref;if("ref"in a){var i={};for(var c in a)c!=="ref"&&(i[c]=a[c])}else i=a;return He(l),a=Ki(t,l,e,i,u,n),c=Ji(),t!==null&&!zt?(ki(t,l,n),Ql(t,l,n)):(F&&c&&Mi(l),l.flags|=1,Dt(t,l,a,n),l.child)}function Co(t,l,e,a,n){if(t===null){var u=e.type;return typeof u=="function"&&!Ei(u)&&u.defaultProps===void 0&&e.compare===null?(l.tag=15,l.type=u,Ho(t,l,u,a,n)):(t=wn(e.type,null,a,l,l.mode,n),t.ref=l.ref,t.return=l,l.child=t)}if(u=t.child,!bc(t,n)){var i=u.memoizedProps;if(e=e.compare,e=e!==null?e:Qa,e(i,a)&&t.ref===l.ref)return Ql(t,l,n)}return l.flags|=1,t=Rl(u,a),t.ref=l.ref,t.return=l,l.child=t}function Ho(t,l,e,a,n){if(t!==null){var u=t.memoizedProps;if(Qa(u,a)&&t.ref===l.ref)if(zt=!1,l.pendingProps=a=u,bc(t,n))(t.flags&131072)!==0&&(zt=!0);else return l.lanes=t.lanes,Ql(t,l,n)}return dc(t,l,e,a,n)}function Ro(t,l,e,a){var n=a.children,u=t!==null?t.memoizedState:null;if(t===null&&l.stateNode===null&&(l.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),a.mode==="hidden"){if((l.flags&128)!==0){if(u=u!==null?u.baseLanes|e:e,t!==null){for(a=l.child=t.child,n=0;a!==null;)n=n|a.lanes|a.childLanes,a=a.sibling;a=n&~u}else a=0,l.child=null;return Bo(t,l,u,e,a)}if((e&536870912)!==0)l.memoizedState={baseLanes:0,cachePool:null},t!==null&&kn(l,u!==null?u.cachePool:null),u!==null?qs(l,u):Li(),Ys(l);else return a=l.lanes=536870912,Bo(t,l,u!==null?u.baseLanes|e:e,e,a)}else u!==null?(kn(l,u.cachePool),qs(l,u),se(),l.memoizedState=null):(t!==null&&kn(l,null),Li(),se());return Dt(t,l,n,e),l.child}function en(t,l){return t!==null&&t.tag===22||l.stateNode!==null||(l.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.sibling}function Bo(t,l,e,a,n){var u=Bi();return u=u===null?null:{parent:St._currentValue,pool:u},l.memoizedState={baseLanes:e,cachePool:u},t!==null&&kn(l,null),Li(),Ys(l),t!==null&&ca(t,l,a,!0),l.childLanes=n,null}function ou(t,l){return l=du({mode:l.mode,children:l.children},t.mode),l.ref=t.ref,t.child=l,l.return=t,l}function qo(t,l,e){return Ye(l,t.child,null,e),t=ou(l,l.pendingProps),t.flags|=2,nl(l),l.memoizedState=null,t}function nm(t,l,e){var a=l.pendingProps,n=(l.flags&128)!==0;if(l.flags&=-129,t===null){if(F){if(a.mode==="hidden")return t=ou(l,a),l.lanes=536870912,en(null,t);if(wi(l),(t=dt)?(t=Wr(t,gl),t=t!==null&&t.data==="&"?t:null,t!==null&&(l.memoizedState={dehydrated:t,treeContext:le!==null?{id:jl,overflow:Ml}:null,retryLane:536870912,hydrationErrors:null},e=bs(t),e.return=l,l.child=e,Nt=l,dt=null)):t=null,t===null)throw ae(l);return l.lanes=536870912,null}return ou(l,a)}var u=t.memoizedState;if(u!==null){var i=u.dehydrated;if(wi(l),n)if(l.flags&256)l.flags&=-257,l=qo(t,l,e);else if(l.memoizedState!==null)l.child=t.child,l.flags|=128,l=null;else throw Error(m(558));else if(zt||ca(t,l,e,!1),n=(e&t.childLanes)!==0,zt||n){if(a=ot,a!==null&&(i=jf(a,e),i!==0&&i!==u.retryLane))throw u.retryLane=i,Oe(t,i),Wt(a,t,i),rc;xu(),l=qo(t,l,e)}else t=u.treeContext,dt=vl(i.nextSibling),Nt=l,F=!0,ee=null,gl=!1,t!==null&&zs(l,t),l=ou(l,a),l.flags|=4096;return l}return t=Rl(t.child,{mode:a.mode,children:a.children}),t.ref=l.ref,l.child=t,t.return=l,t}function ru(t,l){var e=l.ref;if(e===null)t!==null&&t.ref!==null&&(l.flags|=4194816);else{if(typeof e!="function"&&typeof e!="object")throw Error(m(284));(t===null||t.ref!==e)&&(l.flags|=4194816)}}function dc(t,l,e,a,n){return He(l),e=Ki(t,l,e,a,void 0,n),a=Ji(),t!==null&&!zt?(ki(t,l,n),Ql(t,l,n)):(F&&a&&Mi(l),l.flags|=1,Dt(t,l,e,n),l.child)}function Yo(t,l,e,a,n,u){return He(l),l.updateQueue=null,e=Xs(l,a,e,n),Gs(t),a=Ji(),t!==null&&!zt?(ki(t,l,u),Ql(t,l,u)):(F&&a&&Mi(l),l.flags|=1,Dt(t,l,e,u),l.child)}function Go(t,l,e,a,n){if(He(l),l.stateNode===null){var u=aa,i=e.contextType;typeof i=="object"&&i!==null&&(u=Ot(i)),u=new e(a,u),l.memoizedState=u.state!==null&&u.state!==void 0?u.state:null,u.updater=sc,l.stateNode=u,u._reactInternals=l,u=l.stateNode,u.props=a,u.state=l.memoizedState,u.refs={},Yi(l),i=e.contextType,u.context=typeof i=="object"&&i!==null?Ot(i):aa,u.state=l.memoizedState,i=e.getDerivedStateFromProps,typeof i=="function"&&(fc(l,e,i,a),u.state=l.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof u.getSnapshotBeforeUpdate=="function"||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(i=u.state,typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount(),i!==u.state&&sc.enqueueReplaceState(u,u.state,null),$a(l,a,u,n),Fa(),u.state=l.memoizedState),typeof u.componentDidMount=="function"&&(l.flags|=4194308),a=!0}else if(t===null){u=l.stateNode;var c=l.memoizedProps,s=Xe(e,c);u.props=s;var g=u.context,p=e.contextType;i=aa,typeof p=="object"&&p!==null&&(i=Ot(p));var x=e.getDerivedStateFromProps;p=typeof x=="function"||typeof u.getSnapshotBeforeUpdate=="function",c=l.pendingProps!==c,p||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(c||g!==i)&&To(l,u,a,i),ue=!1;var y=l.memoizedState;u.state=y,$a(l,a,u,n),Fa(),g=l.memoizedState,c||y!==g||ue?(typeof x=="function"&&(fc(l,e,x,a),g=l.memoizedState),(s=ue||Eo(l,e,s,a,y,g,i))?(p||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount()),typeof u.componentDidMount=="function"&&(l.flags|=4194308)):(typeof u.componentDidMount=="function"&&(l.flags|=4194308),l.memoizedProps=a,l.memoizedState=g),u.props=a,u.state=g,u.context=i,a=s):(typeof u.componentDidMount=="function"&&(l.flags|=4194308),a=!1)}else{u=l.stateNode,Gi(t,l),i=l.memoizedProps,p=Xe(e,i),u.props=p,x=l.pendingProps,y=u.context,g=e.contextType,s=aa,typeof g=="object"&&g!==null&&(s=Ot(g)),c=e.getDerivedStateFromProps,(g=typeof c=="function"||typeof u.getSnapshotBeforeUpdate=="function")||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(i!==x||y!==s)&&To(l,u,a,s),ue=!1,y=l.memoizedState,u.state=y,$a(l,a,u,n),Fa();var v=l.memoizedState;i!==x||y!==v||ue||t!==null&&t.dependencies!==null&&Kn(t.dependencies)?(typeof c=="function"&&(fc(l,e,c,a),v=l.memoizedState),(p=ue||Eo(l,e,p,a,y,v,s)||t!==null&&t.dependencies!==null&&Kn(t.dependencies))?(g||typeof u.UNSAFE_componentWillUpdate!="function"&&typeof u.componentWillUpdate!="function"||(typeof u.componentWillUpdate=="function"&&u.componentWillUpdate(a,v,s),typeof u.UNSAFE_componentWillUpdate=="function"&&u.UNSAFE_componentWillUpdate(a,v,s)),typeof u.componentDidUpdate=="function"&&(l.flags|=4),typeof u.getSnapshotBeforeUpdate=="function"&&(l.flags|=1024)):(typeof u.componentDidUpdate!="function"||i===t.memoizedProps&&y===t.memoizedState||(l.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||i===t.memoizedProps&&y===t.memoizedState||(l.flags|=1024),l.memoizedProps=a,l.memoizedState=v),u.props=a,u.state=v,u.context=s,a=p):(typeof u.componentDidUpdate!="function"||i===t.memoizedProps&&y===t.memoizedState||(l.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||i===t.memoizedProps&&y===t.memoizedState||(l.flags|=1024),a=!1)}return u=a,ru(t,l),a=(l.flags&128)!==0,u||a?(u=l.stateNode,e=a&&typeof e.getDerivedStateFromError!="function"?null:u.render(),l.flags|=1,t!==null&&a?(l.child=Ye(l,t.child,null,n),l.child=Ye(l,null,e,n)):Dt(t,l,e,n),l.memoizedState=u.state,t=l.child):t=Ql(t,l,n),t}function Xo(t,l,e,a){return Ue(),l.flags|=256,Dt(t,l,e,a),l.child}var mc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function hc(t){return{baseLanes:t,cachePool:_s()}}function gc(t,l,e){return t=t!==null?t.childLanes&~e:0,l&&(t|=il),t}function Qo(t,l,e){var a=l.pendingProps,n=!1,u=(l.flags&128)!==0,i;if((i=u)||(i=t!==null&&t.memoizedState===null?!1:(pt.current&2)!==0),i&&(n=!0,l.flags&=-129),i=(l.flags&32)!==0,l.flags&=-33,t===null){if(F){if(n?fe(l):se(),(t=dt)?(t=Wr(t,gl),t=t!==null&&t.data!=="&"?t:null,t!==null&&(l.memoizedState={dehydrated:t,treeContext:le!==null?{id:jl,overflow:Ml}:null,retryLane:536870912,hydrationErrors:null},e=bs(t),e.return=l,l.child=e,Nt=l,dt=null)):t=null,t===null)throw ae(l);return $c(t)?l.lanes=32:l.lanes=536870912,null}var c=a.children;return a=a.fallback,n?(se(),n=l.mode,c=du({mode:"hidden",children:c},n),a=De(a,n,e,null),c.return=l,a.return=l,c.sibling=a,l.child=c,a=l.child,a.memoizedState=hc(e),a.childLanes=gc(t,i,e),l.memoizedState=mc,en(null,a)):(fe(l),yc(l,c))}var s=t.memoizedState;if(s!==null&&(c=s.dehydrated,c!==null)){if(u)l.flags&256?(fe(l),l.flags&=-257,l=vc(t,l,e)):l.memoizedState!==null?(se(),l.child=t.child,l.flags|=128,l=null):(se(),c=a.fallback,n=l.mode,a=du({mode:"visible",children:a.children},n),c=De(c,n,e,null),c.flags|=2,a.return=l,c.return=l,a.sibling=c,l.child=a,Ye(l,t.child,null,e),a=l.child,a.memoizedState=hc(e),a.childLanes=gc(t,i,e),l.memoizedState=mc,l=en(null,a));else if(fe(l),$c(c)){if(i=c.nextSibling&&c.nextSibling.dataset,i)var g=i.dgst;i=g,a=Error(m(419)),a.stack="",a.digest=i,wa({value:a,source:null,stack:null}),l=vc(t,l,e)}else if(zt||ca(t,l,e,!1),i=(e&t.childLanes)!==0,zt||i){if(i=ot,i!==null&&(a=jf(i,e),a!==0&&a!==s.retryLane))throw s.retryLane=a,Oe(t,a),Wt(i,t,a),rc;Fc(c)||xu(),l=vc(t,l,e)}else Fc(c)?(l.flags|=192,l.child=t.child,l=null):(t=s.treeContext,dt=vl(c.nextSibling),Nt=l,F=!0,ee=null,gl=!1,t!==null&&zs(l,t),l=yc(l,a.children),l.flags|=4096);return l}return n?(se(),c=a.fallback,n=l.mode,s=t.child,g=s.sibling,a=Rl(s,{mode:"hidden",children:a.children}),a.subtreeFlags=s.subtreeFlags&65011712,g!==null?c=Rl(g,c):(c=De(c,n,e,null),c.flags|=2),c.return=l,a.return=l,a.sibling=c,l.child=a,en(null,a),a=l.child,c=t.child.memoizedState,c===null?c=hc(e):(n=c.cachePool,n!==null?(s=St._currentValue,n=n.parent!==s?{parent:s,pool:s}:n):n=_s(),c={baseLanes:c.baseLanes|e,cachePool:n}),a.memoizedState=c,a.childLanes=gc(t,i,e),l.memoizedState=mc,en(t.child,a)):(fe(l),e=t.child,t=e.sibling,e=Rl(e,{mode:"visible",children:a.children}),e.return=l,e.sibling=null,t!==null&&(i=l.deletions,i===null?(l.deletions=[t],l.flags|=16):i.push(t)),l.child=e,l.memoizedState=null,e)}function yc(t,l){return l=du({mode:"visible",children:l},t.mode),l.return=t,t.child=l}function du(t,l){return t=el(22,t,null,l),t.lanes=0,t}function vc(t,l,e){return Ye(l,t.child,null,e),t=yc(l,l.pendingProps.children),t.flags|=2,l.memoizedState=null,t}function Lo(t,l,e){t.lanes|=l;var a=t.alternate;a!==null&&(a.lanes|=l),Ui(t.return,l,e)}function pc(t,l,e,a,n,u){var i=t.memoizedState;i===null?t.memoizedState={isBackwards:l,rendering:null,renderingStartTime:0,last:a,tail:e,tailMode:n,treeForkCount:u}:(i.isBackwards=l,i.rendering=null,i.renderingStartTime=0,i.last=a,i.tail=e,i.tailMode=n,i.treeForkCount=u)}function Zo(t,l,e){var a=l.pendingProps,n=a.revealOrder,u=a.tail;a=a.children;var i=pt.current,c=(i&2)!==0;if(c?(i=i&1|2,l.flags|=128):i&=1,M(pt,i),Dt(t,l,a,e),a=F?Za:0,!c&&t!==null&&(t.flags&128)!==0)t:for(t=l.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Lo(t,e,l);else if(t.tag===19)Lo(t,e,l);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===l)break t;for(;t.sibling===null;){if(t.return===null||t.return===l)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(n){case"forwards":for(e=l.child,n=null;e!==null;)t=e.alternate,t!==null&&tu(t)===null&&(n=e),e=e.sibling;e=n,e===null?(n=l.child,l.child=null):(n=e.sibling,e.sibling=null),pc(l,!1,n,e,u,a);break;case"backwards":case"unstable_legacy-backwards":for(e=null,n=l.child,l.child=null;n!==null;){if(t=n.alternate,t!==null&&tu(t)===null){l.child=n;break}t=n.sibling,n.sibling=e,e=n,n=t}pc(l,!0,e,null,u,a);break;case"together":pc(l,!1,null,null,void 0,a);break;default:l.memoizedState=null}return l.child}function Ql(t,l,e){if(t!==null&&(l.dependencies=t.dependencies),de|=l.lanes,(e&l.childLanes)===0)if(t!==null){if(ca(t,l,e,!1),(e&l.childLanes)===0)return null}else return null;if(t!==null&&l.child!==t.child)throw Error(m(153));if(l.child!==null){for(t=l.child,e=Rl(t,t.pendingProps),l.child=e,e.return=l;t.sibling!==null;)t=t.sibling,e=e.sibling=Rl(t,t.pendingProps),e.return=l;e.sibling=null}return l.child}function bc(t,l){return(t.lanes&l)!==0?!0:(t=t.dependencies,!!(t!==null&&Kn(t)))}function um(t,l,e){switch(l.tag){case 3:Bt(l,l.stateNode.containerInfo),ne(l,St,t.memoizedState.cache),Ue();break;case 27:case 5:_a(l);break;case 4:Bt(l,l.stateNode.containerInfo);break;case 10:ne(l,l.type,l.memoizedProps.value);break;case 31:if(l.memoizedState!==null)return l.flags|=128,wi(l),null;break;case 13:var a=l.memoizedState;if(a!==null)return a.dehydrated!==null?(fe(l),l.flags|=128,null):(e&l.child.childLanes)!==0?Qo(t,l,e):(fe(l),t=Ql(t,l,e),t!==null?t.sibling:null);fe(l);break;case 19:var n=(t.flags&128)!==0;if(a=(e&l.childLanes)!==0,a||(ca(t,l,e,!1),a=(e&l.childLanes)!==0),n){if(a)return Zo(t,l,e);l.flags|=128}if(n=l.memoizedState,n!==null&&(n.rendering=null,n.tail=null,n.lastEffect=null),M(pt,pt.current),a)break;return null;case 22:return l.lanes=0,Ro(t,l,e,l.pendingProps);case 24:ne(l,St,t.memoizedState.cache)}return Ql(t,l,e)}function wo(t,l,e){if(t!==null)if(t.memoizedProps!==l.pendingProps)zt=!0;else{if(!bc(t,e)&&(l.flags&128)===0)return zt=!1,um(t,l,e);zt=(t.flags&131072)!==0}else zt=!1,F&&(l.flags&1048576)!==0&&xs(l,Za,l.index);switch(l.lanes=0,l.tag){case 16:t:{var a=l.pendingProps;if(t=Be(l.elementType),l.type=t,typeof t=="function")Ei(t)?(a=Xe(t,a),l.tag=1,l=Go(null,l,t,a,e)):(l.tag=0,l=dc(null,l,t,a,e));else{if(t!=null){var n=t.$$typeof;if(n===fl){l.tag=11,l=Uo(null,l,t,a,e);break t}else if(n===W){l.tag=14,l=Co(null,l,t,a,e);break t}}throw l=Dl(t)||t,Error(m(306,l,""))}}return l;case 0:return dc(t,l,l.type,l.pendingProps,e);case 1:return a=l.type,n=Xe(a,l.pendingProps),Go(t,l,a,n,e);case 3:t:{if(Bt(l,l.stateNode.containerInfo),t===null)throw Error(m(387));a=l.pendingProps;var u=l.memoizedState;n=u.element,Gi(t,l),$a(l,a,null,e);var i=l.memoizedState;if(a=i.cache,ne(l,St,a),a!==u.cache&&Ci(l,[St],e,!0),Fa(),a=i.element,u.isDehydrated)if(u={element:a,isDehydrated:!1,cache:i.cache},l.updateQueue.baseState=u,l.memoizedState=u,l.flags&256){l=Xo(t,l,a,e);break t}else if(a!==n){n=dl(Error(m(424)),l),wa(n),l=Xo(t,l,a,e);break t}else for(t=l.stateNode.containerInfo,t.nodeType===9?t=t.body:t=t.nodeName==="HTML"?t.ownerDocument.body:t,dt=vl(t.firstChild),Nt=l,F=!0,ee=null,gl=!0,e=Hs(l,null,a,e),l.child=e;e;)e.flags=e.flags&-3|4096,e=e.sibling;else{if(Ue(),a===n){l=Ql(t,l,e);break t}Dt(t,l,a,e)}l=l.child}return l;case 26:return ru(t,l),t===null?(e=ld(l.type,null,l.pendingProps,null))?l.memoizedState=e:F||(e=l.type,t=l.pendingProps,a=_u(Z.current).createElement(e),a[_t]=l,a[Zt]=t,Ut(a,e,t),jt(a),l.stateNode=a):l.memoizedState=ld(l.type,t.memoizedProps,l.pendingProps,t.memoizedState),null;case 27:return _a(l),t===null&&F&&(a=l.stateNode=Ir(l.type,l.pendingProps,Z.current),Nt=l,gl=!0,n=dt,ve(l.type)?(Ic=n,dt=vl(a.firstChild)):dt=n),Dt(t,l,l.pendingProps.children,e),ru(t,l),t===null&&(l.flags|=4194304),l.child;case 5:return t===null&&F&&((n=a=dt)&&(a=Rm(a,l.type,l.pendingProps,gl),a!==null?(l.stateNode=a,Nt=l,dt=vl(a.firstChild),gl=!1,n=!0):n=!1),n||ae(l)),_a(l),n=l.type,u=l.pendingProps,i=t!==null?t.memoizedProps:null,a=u.children,Jc(n,u)?a=null:i!==null&&Jc(n,i)&&(l.flags|=32),l.memoizedState!==null&&(n=Ki(t,l,F0,null,null,e),pn._currentValue=n),ru(t,l),Dt(t,l,a,e),l.child;case 6:return t===null&&F&&((t=e=dt)&&(e=Bm(e,l.pendingProps,gl),e!==null?(l.stateNode=e,Nt=l,dt=null,t=!0):t=!1),t||ae(l)),null;case 13:return Qo(t,l,e);case 4:return Bt(l,l.stateNode.containerInfo),a=l.pendingProps,t===null?l.child=Ye(l,null,a,e):Dt(t,l,a,e),l.child;case 11:return Uo(t,l,l.type,l.pendingProps,e);case 7:return Dt(t,l,l.pendingProps,e),l.child;case 8:return Dt(t,l,l.pendingProps.children,e),l.child;case 12:return Dt(t,l,l.pendingProps.children,e),l.child;case 10:return a=l.pendingProps,ne(l,l.type,a.value),Dt(t,l,a.children,e),l.child;case 9:return n=l.type._context,a=l.pendingProps.children,He(l),n=Ot(n),a=a(n),l.flags|=1,Dt(t,l,a,e),l.child;case 14:return Co(t,l,l.type,l.pendingProps,e);case 15:return Ho(t,l,l.type,l.pendingProps,e);case 19:return Zo(t,l,e);case 31:return nm(t,l,e);case 22:return Ro(t,l,e,l.pendingProps);case 24:return He(l),a=Ot(St),t===null?(n=Bi(),n===null&&(n=ot,u=Hi(),n.pooledCache=u,u.refCount++,u!==null&&(n.pooledCacheLanes|=e),n=u),l.memoizedState={parent:a,cache:n},Yi(l),ne(l,St,n)):((t.lanes&e)!==0&&(Gi(t,l),$a(l,null,null,e),Fa()),n=t.memoizedState,u=l.memoizedState,n.parent!==a?(n={parent:a,cache:a},l.memoizedState=n,l.lanes===0&&(l.memoizedState=l.updateQueue.baseState=n),ne(l,St,a)):(a=u.cache,ne(l,St,a),a!==n.cache&&Ci(l,[St],e,!0))),Dt(t,l,l.pendingProps.children,e),l.child;case 29:throw l.pendingProps}throw Error(m(156,l.tag))}function Ll(t){t.flags|=4}function Sc(t,l,e,a,n){if((l=(t.mode&32)!==0)&&(l=!1),l){if(t.flags|=16777216,(n&335544128)===n)if(t.stateNode.complete)t.flags|=8192;else if(vr())t.flags|=8192;else throw qe=Fn,qi}else t.flags&=-16777217}function Vo(t,l){if(l.type!=="stylesheet"||(l.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!id(l))if(vr())t.flags|=8192;else throw qe=Fn,qi}function mu(t,l){l!==null&&(t.flags|=4),t.flags&16384&&(l=t.tag!==22?Af():536870912,t.lanes|=l,ba|=l)}function an(t,l){if(!F)switch(t.tailMode){case"hidden":l=t.tail;for(var e=null;l!==null;)l.alternate!==null&&(e=l),l=l.sibling;e===null?t.tail=null:e.sibling=null;break;case"collapsed":e=t.tail;for(var a=null;e!==null;)e.alternate!==null&&(a=e),e=e.sibling;a===null?l||t.tail===null?t.tail=null:t.tail.sibling=null:a.sibling=null}}function mt(t){var l=t.alternate!==null&&t.alternate.child===t.child,e=0,a=0;if(l)for(var n=t.child;n!==null;)e|=n.lanes|n.childLanes,a|=n.subtreeFlags&65011712,a|=n.flags&65011712,n.return=t,n=n.sibling;else for(n=t.child;n!==null;)e|=n.lanes|n.childLanes,a|=n.subtreeFlags,a|=n.flags,n.return=t,n=n.sibling;return t.subtreeFlags|=a,t.childLanes=e,l}function im(t,l,e){var a=l.pendingProps;switch(_i(l),l.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return mt(l),null;case 1:return mt(l),null;case 3:return e=l.stateNode,a=null,t!==null&&(a=t.memoizedState.cache),l.memoizedState.cache!==a&&(l.flags|=2048),Yl(St),vt(),e.pendingContext&&(e.context=e.pendingContext,e.pendingContext=null),(t===null||t.child===null)&&(ia(l)?Ll(l):t===null||t.memoizedState.isDehydrated&&(l.flags&256)===0||(l.flags|=1024,Oi())),mt(l),null;case 26:var n=l.type,u=l.memoizedState;return t===null?(Ll(l),u!==null?(mt(l),Vo(l,u)):(mt(l),Sc(l,n,null,a,e))):u?u!==t.memoizedState?(Ll(l),mt(l),Vo(l,u)):(mt(l),l.flags&=-16777217):(t=t.memoizedProps,t!==a&&Ll(l),mt(l),Sc(l,n,t,a,e)),null;case 27:if(En(l),e=Z.current,n=l.type,t!==null&&l.stateNode!=null)t.memoizedProps!==a&&Ll(l);else{if(!a){if(l.stateNode===null)throw Error(m(166));return mt(l),null}t=O.current,ia(l)?As(l):(t=Ir(n,a,e),l.stateNode=t,Ll(l))}return mt(l),null;case 5:if(En(l),n=l.type,t!==null&&l.stateNode!=null)t.memoizedProps!==a&&Ll(l);else{if(!a){if(l.stateNode===null)throw Error(m(166));return mt(l),null}if(u=O.current,ia(l))As(l);else{var i=_u(Z.current);switch(u){case 1:u=i.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:u=i.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":u=i.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":u=i.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":u=i.createElement("div"),u.innerHTML="<script><\/script>",u=u.removeChild(u.firstChild);break;case"select":u=typeof a.is=="string"?i.createElement("select",{is:a.is}):i.createElement("select"),a.multiple?u.multiple=!0:a.size&&(u.size=a.size);break;default:u=typeof a.is=="string"?i.createElement(n,{is:a.is}):i.createElement(n)}}u[_t]=l,u[Zt]=a;t:for(i=l.child;i!==null;){if(i.tag===5||i.tag===6)u.appendChild(i.stateNode);else if(i.tag!==4&&i.tag!==27&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===l)break t;for(;i.sibling===null;){if(i.return===null||i.return===l)break t;i=i.return}i.sibling.return=i.return,i=i.sibling}l.stateNode=u;t:switch(Ut(u,n,a),n){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break t;case"img":a=!0;break t;default:a=!1}a&&Ll(l)}}return mt(l),Sc(l,l.type,t===null?null:t.memoizedProps,l.pendingProps,e),null;case 6:if(t&&l.stateNode!=null)t.memoizedProps!==a&&Ll(l);else{if(typeof a!="string"&&l.stateNode===null)throw Error(m(166));if(t=Z.current,ia(l)){if(t=l.stateNode,e=l.memoizedProps,a=null,n=Nt,n!==null)switch(n.tag){case 27:case 5:a=n.memoizedProps}t[_t]=l,t=!!(t.nodeValue===e||a!==null&&a.suppressHydrationWarning===!0||Qr(t.nodeValue,e)),t||ae(l,!0)}else t=_u(t).createTextNode(a),t[_t]=l,l.stateNode=t}return mt(l),null;case 31:if(e=l.memoizedState,t===null||t.memoizedState!==null){if(a=ia(l),e!==null){if(t===null){if(!a)throw Error(m(318));if(t=l.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(m(557));t[_t]=l}else Ue(),(l.flags&128)===0&&(l.memoizedState=null),l.flags|=4;mt(l),t=!1}else e=Oi(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=e),t=!0;if(!t)return l.flags&256?(nl(l),l):(nl(l),null);if((l.flags&128)!==0)throw Error(m(558))}return mt(l),null;case 13:if(a=l.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(n=ia(l),a!==null&&a.dehydrated!==null){if(t===null){if(!n)throw Error(m(318));if(n=l.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(m(317));n[_t]=l}else Ue(),(l.flags&128)===0&&(l.memoizedState=null),l.flags|=4;mt(l),n=!1}else n=Oi(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=n),n=!0;if(!n)return l.flags&256?(nl(l),l):(nl(l),null)}return nl(l),(l.flags&128)!==0?(l.lanes=e,l):(e=a!==null,t=t!==null&&t.memoizedState!==null,e&&(a=l.child,n=null,a.alternate!==null&&a.alternate.memoizedState!==null&&a.alternate.memoizedState.cachePool!==null&&(n=a.alternate.memoizedState.cachePool.pool),u=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(u=a.memoizedState.cachePool.pool),u!==n&&(a.flags|=2048)),e!==t&&e&&(l.child.flags|=8192),mu(l,l.updateQueue),mt(l),null);case 4:return vt(),t===null&&Lc(l.stateNode.containerInfo),mt(l),null;case 10:return Yl(l.type),mt(l),null;case 19:if(z(pt),a=l.memoizedState,a===null)return mt(l),null;if(n=(l.flags&128)!==0,u=a.rendering,u===null)if(n)an(a,!1);else{if(yt!==0||t!==null&&(t.flags&128)!==0)for(t=l.child;t!==null;){if(u=tu(t),u!==null){for(l.flags|=128,an(a,!1),t=u.updateQueue,l.updateQueue=t,mu(l,t),l.subtreeFlags=0,t=e,e=l.child;e!==null;)ps(e,t),e=e.sibling;return M(pt,pt.current&1|2),F&&Bl(l,a.treeForkCount),l.child}t=t.sibling}a.tail!==null&&It()>pu&&(l.flags|=128,n=!0,an(a,!1),l.lanes=4194304)}else{if(!n)if(t=tu(u),t!==null){if(l.flags|=128,n=!0,t=t.updateQueue,l.updateQueue=t,mu(l,t),an(a,!0),a.tail===null&&a.tailMode==="hidden"&&!u.alternate&&!F)return mt(l),null}else 2*It()-a.renderingStartTime>pu&&e!==536870912&&(l.flags|=128,n=!0,an(a,!1),l.lanes=4194304);a.isBackwards?(u.sibling=l.child,l.child=u):(t=a.last,t!==null?t.sibling=u:l.child=u,a.last=u)}return a.tail!==null?(t=a.tail,a.rendering=t,a.tail=t.sibling,a.renderingStartTime=It(),t.sibling=null,e=pt.current,M(pt,n?e&1|2:e&1),F&&Bl(l,a.treeForkCount),t):(mt(l),null);case 22:case 23:return nl(l),Zi(),a=l.memoizedState!==null,t!==null?t.memoizedState!==null!==a&&(l.flags|=8192):a&&(l.flags|=8192),a?(e&536870912)!==0&&(l.flags&128)===0&&(mt(l),l.subtreeFlags&6&&(l.flags|=8192)):mt(l),e=l.updateQueue,e!==null&&mu(l,e.retryQueue),e=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),a=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(a=l.memoizedState.cachePool.pool),a!==e&&(l.flags|=2048),t!==null&&z(Re),null;case 24:return e=null,t!==null&&(e=t.memoizedState.cache),l.memoizedState.cache!==e&&(l.flags|=2048),Yl(St),mt(l),null;case 25:return null;case 30:return null}throw Error(m(156,l.tag))}function cm(t,l){switch(_i(l),l.tag){case 1:return t=l.flags,t&65536?(l.flags=t&-65537|128,l):null;case 3:return Yl(St),vt(),t=l.flags,(t&65536)!==0&&(t&128)===0?(l.flags=t&-65537|128,l):null;case 26:case 27:case 5:return En(l),null;case 31:if(l.memoizedState!==null){if(nl(l),l.alternate===null)throw Error(m(340));Ue()}return t=l.flags,t&65536?(l.flags=t&-65537|128,l):null;case 13:if(nl(l),t=l.memoizedState,t!==null&&t.dehydrated!==null){if(l.alternate===null)throw Error(m(340));Ue()}return t=l.flags,t&65536?(l.flags=t&-65537|128,l):null;case 19:return z(pt),null;case 4:return vt(),null;case 10:return Yl(l.type),null;case 22:case 23:return nl(l),Zi(),t!==null&&z(Re),t=l.flags,t&65536?(l.flags=t&-65537|128,l):null;case 24:return Yl(St),null;case 25:return null;default:return null}}function Ko(t,l){switch(_i(l),l.tag){case 3:Yl(St),vt();break;case 26:case 27:case 5:En(l);break;case 4:vt();break;case 31:l.memoizedState!==null&&nl(l);break;case 13:nl(l);break;case 19:z(pt);break;case 10:Yl(l.type);break;case 22:case 23:nl(l),Zi(),t!==null&&z(Re);break;case 24:Yl(St)}}function nn(t,l){try{var e=l.updateQueue,a=e!==null?e.lastEffect:null;if(a!==null){var n=a.next;e=n;do{if((e.tag&t)===t){a=void 0;var u=e.create,i=e.inst;a=u(),i.destroy=a}e=e.next}while(e!==n)}}catch(c){nt(l,l.return,c)}}function oe(t,l,e){try{var a=l.updateQueue,n=a!==null?a.lastEffect:null;if(n!==null){var u=n.next;a=u;do{if((a.tag&t)===t){var i=a.inst,c=i.destroy;if(c!==void 0){i.destroy=void 0,n=l;var s=e,g=c;try{g()}catch(p){nt(n,s,p)}}}a=a.next}while(a!==u)}}catch(p){nt(l,l.return,p)}}function Jo(t){var l=t.updateQueue;if(l!==null){var e=t.stateNode;try{Bs(l,e)}catch(a){nt(t,t.return,a)}}}function ko(t,l,e){e.props=Xe(t.type,t.memoizedProps),e.state=t.memoizedState;try{e.componentWillUnmount()}catch(a){nt(t,l,a)}}function un(t,l){try{var e=t.ref;if(e!==null){switch(t.tag){case 26:case 27:case 5:var a=t.stateNode;break;case 30:a=t.stateNode;break;default:a=t.stateNode}typeof e=="function"?t.refCleanup=e(a):e.current=a}}catch(n){nt(t,l,n)}}function _l(t,l){var e=t.ref,a=t.refCleanup;if(e!==null)if(typeof a=="function")try{a()}catch(n){nt(t,l,n)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof e=="function")try{e(null)}catch(n){nt(t,l,n)}else e.current=null}function Wo(t){var l=t.type,e=t.memoizedProps,a=t.stateNode;try{t:switch(l){case"button":case"input":case"select":case"textarea":e.autoFocus&&a.focus();break t;case"img":e.src?a.src=e.src:e.srcSet&&(a.srcset=e.srcSet)}}catch(n){nt(t,t.return,n)}}function xc(t,l,e){try{var a=t.stateNode;Nm(a,t.type,e,l),a[Zt]=l}catch(n){nt(t,t.return,n)}}function Fo(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&ve(t.type)||t.tag===4}function zc(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||Fo(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&ve(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Ac(t,l,e){var a=t.tag;if(a===5||a===6)t=t.stateNode,l?(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e).insertBefore(t,l):(l=e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,l.appendChild(t),e=e._reactRootContainer,e!=null||l.onclick!==null||(l.onclick=Cl));else if(a!==4&&(a===27&&ve(t.type)&&(e=t.stateNode,l=null),t=t.child,t!==null))for(Ac(t,l,e),t=t.sibling;t!==null;)Ac(t,l,e),t=t.sibling}function hu(t,l,e){var a=t.tag;if(a===5||a===6)t=t.stateNode,l?e.insertBefore(t,l):e.appendChild(t);else if(a!==4&&(a===27&&ve(t.type)&&(e=t.stateNode),t=t.child,t!==null))for(hu(t,l,e),t=t.sibling;t!==null;)hu(t,l,e),t=t.sibling}function $o(t){var l=t.stateNode,e=t.memoizedProps;try{for(var a=t.type,n=l.attributes;n.length;)l.removeAttributeNode(n[0]);Ut(l,a,e),l[_t]=t,l[Zt]=e}catch(u){nt(t,t.return,u)}}var Zl=!1,At=!1,Ec=!1,Io=typeof WeakSet=="function"?WeakSet:Set,Mt=null;function fm(t,l){if(t=t.containerInfo,Vc=Ru,t=ss(t),vi(t)){if("selectionStart"in t)var e={start:t.selectionStart,end:t.selectionEnd};else t:{e=(e=t.ownerDocument)&&e.defaultView||window;var a=e.getSelection&&e.getSelection();if(a&&a.rangeCount!==0){e=a.anchorNode;var n=a.anchorOffset,u=a.focusNode;a=a.focusOffset;try{e.nodeType,u.nodeType}catch{e=null;break t}var i=0,c=-1,s=-1,g=0,p=0,x=t,y=null;l:for(;;){for(var v;x!==e||n!==0&&x.nodeType!==3||(c=i+n),x!==u||a!==0&&x.nodeType!==3||(s=i+a),x.nodeType===3&&(i+=x.nodeValue.length),(v=x.firstChild)!==null;)y=x,x=v;for(;;){if(x===t)break l;if(y===e&&++g===n&&(c=i),y===u&&++p===a&&(s=i),(v=x.nextSibling)!==null)break;x=y,y=x.parentNode}x=v}e=c===-1||s===-1?null:{start:c,end:s}}else e=null}e=e||{start:0,end:0}}else e=null;for(Kc={focusedElem:t,selectionRange:e},Ru=!1,Mt=l;Mt!==null;)if(l=Mt,t=l.child,(l.subtreeFlags&1028)!==0&&t!==null)t.return=l,Mt=t;else for(;Mt!==null;){switch(l=Mt,u=l.alternate,t=l.flags,l.tag){case 0:if((t&4)!==0&&(t=l.updateQueue,t=t!==null?t.events:null,t!==null))for(e=0;e<t.length;e++)n=t[e],n.ref.impl=n.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&u!==null){t=void 0,e=l,n=u.memoizedProps,u=u.memoizedState,a=e.stateNode;try{var N=Xe(e.type,n);t=a.getSnapshotBeforeUpdate(N,u),a.__reactInternalSnapshotBeforeUpdate=t}catch(q){nt(e,e.return,q)}}break;case 3:if((t&1024)!==0){if(t=l.stateNode.containerInfo,e=t.nodeType,e===9)Wc(t);else if(e===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Wc(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(m(163))}if(t=l.sibling,t!==null){t.return=l.return,Mt=t;break}Mt=l.return}}function Po(t,l,e){var a=e.flags;switch(e.tag){case 0:case 11:case 15:Vl(t,e),a&4&&nn(5,e);break;case 1:if(Vl(t,e),a&4)if(t=e.stateNode,l===null)try{t.componentDidMount()}catch(i){nt(e,e.return,i)}else{var n=Xe(e.type,l.memoizedProps);l=l.memoizedState;try{t.componentDidUpdate(n,l,t.__reactInternalSnapshotBeforeUpdate)}catch(i){nt(e,e.return,i)}}a&64&&Jo(e),a&512&&un(e,e.return);break;case 3:if(Vl(t,e),a&64&&(t=e.updateQueue,t!==null)){if(l=null,e.child!==null)switch(e.child.tag){case 27:case 5:l=e.child.stateNode;break;case 1:l=e.child.stateNode}try{Bs(t,l)}catch(i){nt(e,e.return,i)}}break;case 27:l===null&&a&4&&$o(e);case 26:case 5:Vl(t,e),l===null&&a&4&&Wo(e),a&512&&un(e,e.return);break;case 12:Vl(t,e);break;case 31:Vl(t,e),a&4&&er(t,e);break;case 13:Vl(t,e),a&4&&ar(t,e),a&64&&(t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(e=vm.bind(null,e),qm(t,e))));break;case 22:if(a=e.memoizedState!==null||Zl,!a){l=l!==null&&l.memoizedState!==null||At,n=Zl;var u=At;Zl=a,(At=l)&&!u?Kl(t,e,(e.subtreeFlags&8772)!==0):Vl(t,e),Zl=n,At=u}break;case 30:break;default:Vl(t,e)}}function tr(t){var l=t.alternate;l!==null&&(t.alternate=null,tr(l)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(l=t.stateNode,l!==null&&ti(l)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var ht=null,Vt=!1;function wl(t,l,e){for(e=e.child;e!==null;)lr(t,l,e),e=e.sibling}function lr(t,l,e){if(Pt&&typeof Pt.onCommitFiberUnmount=="function")try{Pt.onCommitFiberUnmount(Na,e)}catch{}switch(e.tag){case 26:At||_l(e,l),wl(t,l,e),e.memoizedState?e.memoizedState.count--:e.stateNode&&(e=e.stateNode,e.parentNode.removeChild(e));break;case 27:At||_l(e,l);var a=ht,n=Vt;ve(e.type)&&(ht=e.stateNode,Vt=!1),wl(t,l,e),gn(e.stateNode),ht=a,Vt=n;break;case 5:At||_l(e,l);case 6:if(a=ht,n=Vt,ht=null,wl(t,l,e),ht=a,Vt=n,ht!==null)if(Vt)try{(ht.nodeType===9?ht.body:ht.nodeName==="HTML"?ht.ownerDocument.body:ht).removeChild(e.stateNode)}catch(u){nt(e,l,u)}else try{ht.removeChild(e.stateNode)}catch(u){nt(e,l,u)}break;case 18:ht!==null&&(Vt?(t=ht,Jr(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,e.stateNode),Ma(t)):Jr(ht,e.stateNode));break;case 4:a=ht,n=Vt,ht=e.stateNode.containerInfo,Vt=!0,wl(t,l,e),ht=a,Vt=n;break;case 0:case 11:case 14:case 15:oe(2,e,l),At||oe(4,e,l),wl(t,l,e);break;case 1:At||(_l(e,l),a=e.stateNode,typeof a.componentWillUnmount=="function"&&ko(e,l,a)),wl(t,l,e);break;case 21:wl(t,l,e);break;case 22:At=(a=At)||e.memoizedState!==null,wl(t,l,e),At=a;break;default:wl(t,l,e)}}function er(t,l){if(l.memoizedState===null&&(t=l.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{Ma(t)}catch(e){nt(l,l.return,e)}}}function ar(t,l){if(l.memoizedState===null&&(t=l.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Ma(t)}catch(e){nt(l,l.return,e)}}function sm(t){switch(t.tag){case 31:case 13:case 19:var l=t.stateNode;return l===null&&(l=t.stateNode=new Io),l;case 22:return t=t.stateNode,l=t._retryCache,l===null&&(l=t._retryCache=new Io),l;default:throw Error(m(435,t.tag))}}function gu(t,l){var e=sm(t);l.forEach(function(a){if(!e.has(a)){e.add(a);var n=pm.bind(null,t,a);a.then(n,n)}})}function Kt(t,l){var e=l.deletions;if(e!==null)for(var a=0;a<e.length;a++){var n=e[a],u=t,i=l,c=i;t:for(;c!==null;){switch(c.tag){case 27:if(ve(c.type)){ht=c.stateNode,Vt=!1;break t}break;case 5:ht=c.stateNode,Vt=!1;break t;case 3:case 4:ht=c.stateNode.containerInfo,Vt=!0;break t}c=c.return}if(ht===null)throw Error(m(160));lr(u,i,n),ht=null,Vt=!1,u=n.alternate,u!==null&&(u.return=null),n.return=null}if(l.subtreeFlags&13886)for(l=l.child;l!==null;)nr(l,t),l=l.sibling}var xl=null;function nr(t,l){var e=t.alternate,a=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Kt(l,t),Jt(t),a&4&&(oe(3,t,t.return),nn(3,t),oe(5,t,t.return));break;case 1:Kt(l,t),Jt(t),a&512&&(At||e===null||_l(e,e.return)),a&64&&Zl&&(t=t.updateQueue,t!==null&&(a=t.callbacks,a!==null&&(e=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=e===null?a:e.concat(a))));break;case 26:var n=xl;if(Kt(l,t),Jt(t),a&512&&(At||e===null||_l(e,e.return)),a&4){var u=e!==null?e.memoizedState:null;if(a=t.memoizedState,e===null)if(a===null)if(t.stateNode===null){t:{a=t.type,e=t.memoizedProps,n=n.ownerDocument||n;l:switch(a){case"title":u=n.getElementsByTagName("title")[0],(!u||u[Ua]||u[_t]||u.namespaceURI==="http://www.w3.org/2000/svg"||u.hasAttribute("itemprop"))&&(u=n.createElement(a),n.head.insertBefore(u,n.querySelector("head > title"))),Ut(u,a,e),u[_t]=t,jt(u),a=u;break t;case"link":var i=nd("link","href",n).get(a+(e.href||""));if(i){for(var c=0;c<i.length;c++)if(u=i[c],u.getAttribute("href")===(e.href==null||e.href===""?null:e.href)&&u.getAttribute("rel")===(e.rel==null?null:e.rel)&&u.getAttribute("title")===(e.title==null?null:e.title)&&u.getAttribute("crossorigin")===(e.crossOrigin==null?null:e.crossOrigin)){i.splice(c,1);break l}}u=n.createElement(a),Ut(u,a,e),n.head.appendChild(u);break;case"meta":if(i=nd("meta","content",n).get(a+(e.content||""))){for(c=0;c<i.length;c++)if(u=i[c],u.getAttribute("content")===(e.content==null?null:""+e.content)&&u.getAttribute("name")===(e.name==null?null:e.name)&&u.getAttribute("property")===(e.property==null?null:e.property)&&u.getAttribute("http-equiv")===(e.httpEquiv==null?null:e.httpEquiv)&&u.getAttribute("charset")===(e.charSet==null?null:e.charSet)){i.splice(c,1);break l}}u=n.createElement(a),Ut(u,a,e),n.head.appendChild(u);break;default:throw Error(m(468,a))}u[_t]=t,jt(u),a=u}t.stateNode=a}else ud(n,t.type,t.stateNode);else t.stateNode=ad(n,a,t.memoizedProps);else u!==a?(u===null?e.stateNode!==null&&(e=e.stateNode,e.parentNode.removeChild(e)):u.count--,a===null?ud(n,t.type,t.stateNode):ad(n,a,t.memoizedProps)):a===null&&t.stateNode!==null&&xc(t,t.memoizedProps,e.memoizedProps)}break;case 27:Kt(l,t),Jt(t),a&512&&(At||e===null||_l(e,e.return)),e!==null&&a&4&&xc(t,t.memoizedProps,e.memoizedProps);break;case 5:if(Kt(l,t),Jt(t),a&512&&(At||e===null||_l(e,e.return)),t.flags&32){n=t.stateNode;try{Fe(n,"")}catch(N){nt(t,t.return,N)}}a&4&&t.stateNode!=null&&(n=t.memoizedProps,xc(t,n,e!==null?e.memoizedProps:n)),a&1024&&(Ec=!0);break;case 6:if(Kt(l,t),Jt(t),a&4){if(t.stateNode===null)throw Error(m(162));a=t.memoizedProps,e=t.stateNode;try{e.nodeValue=a}catch(N){nt(t,t.return,N)}}break;case 3:if(Du=null,n=xl,xl=Nu(l.containerInfo),Kt(l,t),xl=n,Jt(t),a&4&&e!==null&&e.memoizedState.isDehydrated)try{Ma(l.containerInfo)}catch(N){nt(t,t.return,N)}Ec&&(Ec=!1,ur(t));break;case 4:a=xl,xl=Nu(t.stateNode.containerInfo),Kt(l,t),Jt(t),xl=a;break;case 12:Kt(l,t),Jt(t);break;case 31:Kt(l,t),Jt(t),a&4&&(a=t.updateQueue,a!==null&&(t.updateQueue=null,gu(t,a)));break;case 13:Kt(l,t),Jt(t),t.child.flags&8192&&t.memoizedState!==null!=(e!==null&&e.memoizedState!==null)&&(vu=It()),a&4&&(a=t.updateQueue,a!==null&&(t.updateQueue=null,gu(t,a)));break;case 22:n=t.memoizedState!==null;var s=e!==null&&e.memoizedState!==null,g=Zl,p=At;if(Zl=g||n,At=p||s,Kt(l,t),At=p,Zl=g,Jt(t),a&8192)t:for(l=t.stateNode,l._visibility=n?l._visibility&-2:l._visibility|1,n&&(e===null||s||Zl||At||Qe(t)),e=null,l=t;;){if(l.tag===5||l.tag===26){if(e===null){s=e=l;try{if(u=s.stateNode,n)i=u.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none";else{c=s.stateNode;var x=s.memoizedProps.style,y=x!=null&&x.hasOwnProperty("display")?x.display:null;c.style.display=y==null||typeof y=="boolean"?"":(""+y).trim()}}catch(N){nt(s,s.return,N)}}}else if(l.tag===6){if(e===null){s=l;try{s.stateNode.nodeValue=n?"":s.memoizedProps}catch(N){nt(s,s.return,N)}}}else if(l.tag===18){if(e===null){s=l;try{var v=s.stateNode;n?kr(v,!0):kr(s.stateNode,!1)}catch(N){nt(s,s.return,N)}}}else if((l.tag!==22&&l.tag!==23||l.memoizedState===null||l===t)&&l.child!==null){l.child.return=l,l=l.child;continue}if(l===t)break t;for(;l.sibling===null;){if(l.return===null||l.return===t)break t;e===l&&(e=null),l=l.return}e===l&&(e=null),l.sibling.return=l.return,l=l.sibling}a&4&&(a=t.updateQueue,a!==null&&(e=a.retryQueue,e!==null&&(a.retryQueue=null,gu(t,e))));break;case 19:Kt(l,t),Jt(t),a&4&&(a=t.updateQueue,a!==null&&(t.updateQueue=null,gu(t,a)));break;case 30:break;case 21:break;default:Kt(l,t),Jt(t)}}function Jt(t){var l=t.flags;if(l&2){try{for(var e,a=t.return;a!==null;){if(Fo(a)){e=a;break}a=a.return}if(e==null)throw Error(m(160));switch(e.tag){case 27:var n=e.stateNode,u=zc(t);hu(t,u,n);break;case 5:var i=e.stateNode;e.flags&32&&(Fe(i,""),e.flags&=-33);var c=zc(t);hu(t,c,i);break;case 3:case 4:var s=e.stateNode.containerInfo,g=zc(t);Ac(t,g,s);break;default:throw Error(m(161))}}catch(p){nt(t,t.return,p)}t.flags&=-3}l&4096&&(t.flags&=-4097)}function ur(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var l=t;ur(l),l.tag===5&&l.flags&1024&&l.stateNode.reset(),t=t.sibling}}function Vl(t,l){if(l.subtreeFlags&8772)for(l=l.child;l!==null;)Po(t,l.alternate,l),l=l.sibling}function Qe(t){for(t=t.child;t!==null;){var l=t;switch(l.tag){case 0:case 11:case 14:case 15:oe(4,l,l.return),Qe(l);break;case 1:_l(l,l.return);var e=l.stateNode;typeof e.componentWillUnmount=="function"&&ko(l,l.return,e),Qe(l);break;case 27:gn(l.stateNode);case 26:case 5:_l(l,l.return),Qe(l);break;case 22:l.memoizedState===null&&Qe(l);break;case 30:Qe(l);break;default:Qe(l)}t=t.sibling}}function Kl(t,l,e){for(e=e&&(l.subtreeFlags&8772)!==0,l=l.child;l!==null;){var a=l.alternate,n=t,u=l,i=u.flags;switch(u.tag){case 0:case 11:case 15:Kl(n,u,e),nn(4,u);break;case 1:if(Kl(n,u,e),a=u,n=a.stateNode,typeof n.componentDidMount=="function")try{n.componentDidMount()}catch(g){nt(a,a.return,g)}if(a=u,n=a.updateQueue,n!==null){var c=a.stateNode;try{var s=n.shared.hiddenCallbacks;if(s!==null)for(n.shared.hiddenCallbacks=null,n=0;n<s.length;n++)Rs(s[n],c)}catch(g){nt(a,a.return,g)}}e&&i&64&&Jo(u),un(u,u.return);break;case 27:$o(u);case 26:case 5:Kl(n,u,e),e&&a===null&&i&4&&Wo(u),un(u,u.return);break;case 12:Kl(n,u,e);break;case 31:Kl(n,u,e),e&&i&4&&er(n,u);break;case 13:Kl(n,u,e),e&&i&4&&ar(n,u);break;case 22:u.memoizedState===null&&Kl(n,u,e),un(u,u.return);break;case 30:break;default:Kl(n,u,e)}l=l.sibling}}function Tc(t,l){var e=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),t=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(t=l.memoizedState.cachePool.pool),t!==e&&(t!=null&&t.refCount++,e!=null&&Va(e))}function jc(t,l){t=null,l.alternate!==null&&(t=l.alternate.memoizedState.cache),l=l.memoizedState.cache,l!==t&&(l.refCount++,t!=null&&Va(t))}function zl(t,l,e,a){if(l.subtreeFlags&10256)for(l=l.child;l!==null;)ir(t,l,e,a),l=l.sibling}function ir(t,l,e,a){var n=l.flags;switch(l.tag){case 0:case 11:case 15:zl(t,l,e,a),n&2048&&nn(9,l);break;case 1:zl(t,l,e,a);break;case 3:zl(t,l,e,a),n&2048&&(t=null,l.alternate!==null&&(t=l.alternate.memoizedState.cache),l=l.memoizedState.cache,l!==t&&(l.refCount++,t!=null&&Va(t)));break;case 12:if(n&2048){zl(t,l,e,a),t=l.stateNode;try{var u=l.memoizedProps,i=u.id,c=u.onPostCommit;typeof c=="function"&&c(i,l.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(s){nt(l,l.return,s)}}else zl(t,l,e,a);break;case 31:zl(t,l,e,a);break;case 13:zl(t,l,e,a);break;case 23:break;case 22:u=l.stateNode,i=l.alternate,l.memoizedState!==null?u._visibility&2?zl(t,l,e,a):cn(t,l):u._visibility&2?zl(t,l,e,a):(u._visibility|=2,ya(t,l,e,a,(l.subtreeFlags&10256)!==0||!1)),n&2048&&Tc(i,l);break;case 24:zl(t,l,e,a),n&2048&&jc(l.alternate,l);break;default:zl(t,l,e,a)}}function ya(t,l,e,a,n){for(n=n&&((l.subtreeFlags&10256)!==0||!1),l=l.child;l!==null;){var u=t,i=l,c=e,s=a,g=i.flags;switch(i.tag){case 0:case 11:case 15:ya(u,i,c,s,n),nn(8,i);break;case 23:break;case 22:var p=i.stateNode;i.memoizedState!==null?p._visibility&2?ya(u,i,c,s,n):cn(u,i):(p._visibility|=2,ya(u,i,c,s,n)),n&&g&2048&&Tc(i.alternate,i);break;case 24:ya(u,i,c,s,n),n&&g&2048&&jc(i.alternate,i);break;default:ya(u,i,c,s,n)}l=l.sibling}}function cn(t,l){if(l.subtreeFlags&10256)for(l=l.child;l!==null;){var e=t,a=l,n=a.flags;switch(a.tag){case 22:cn(e,a),n&2048&&Tc(a.alternate,a);break;case 24:cn(e,a),n&2048&&jc(a.alternate,a);break;default:cn(e,a)}l=l.sibling}}var fn=8192;function va(t,l,e){if(t.subtreeFlags&fn)for(t=t.child;t!==null;)cr(t,l,e),t=t.sibling}function cr(t,l,e){switch(t.tag){case 26:va(t,l,e),t.flags&fn&&t.memoizedState!==null&&Wm(e,xl,t.memoizedState,t.memoizedProps);break;case 5:va(t,l,e);break;case 3:case 4:var a=xl;xl=Nu(t.stateNode.containerInfo),va(t,l,e),xl=a;break;case 22:t.memoizedState===null&&(a=t.alternate,a!==null&&a.memoizedState!==null?(a=fn,fn=16777216,va(t,l,e),fn=a):va(t,l,e));break;default:va(t,l,e)}}function fr(t){var l=t.alternate;if(l!==null&&(t=l.child,t!==null)){l.child=null;do l=t.sibling,t.sibling=null,t=l;while(t!==null)}}function sn(t){var l=t.deletions;if((t.flags&16)!==0){if(l!==null)for(var e=0;e<l.length;e++){var a=l[e];Mt=a,or(a,t)}fr(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)sr(t),t=t.sibling}function sr(t){switch(t.tag){case 0:case 11:case 15:sn(t),t.flags&2048&&oe(9,t,t.return);break;case 3:sn(t);break;case 12:sn(t);break;case 22:var l=t.stateNode;t.memoizedState!==null&&l._visibility&2&&(t.return===null||t.return.tag!==13)?(l._visibility&=-3,yu(t)):sn(t);break;default:sn(t)}}function yu(t){var l=t.deletions;if((t.flags&16)!==0){if(l!==null)for(var e=0;e<l.length;e++){var a=l[e];Mt=a,or(a,t)}fr(t)}for(t=t.child;t!==null;){switch(l=t,l.tag){case 0:case 11:case 15:oe(8,l,l.return),yu(l);break;case 22:e=l.stateNode,e._visibility&2&&(e._visibility&=-3,yu(l));break;default:yu(l)}t=t.sibling}}function or(t,l){for(;Mt!==null;){var e=Mt;switch(e.tag){case 0:case 11:case 15:oe(8,e,l);break;case 23:case 22:if(e.memoizedState!==null&&e.memoizedState.cachePool!==null){var a=e.memoizedState.cachePool.pool;a!=null&&a.refCount++}break;case 24:Va(e.memoizedState.cache)}if(a=e.child,a!==null)a.return=e,Mt=a;else t:for(e=t;Mt!==null;){a=Mt;var n=a.sibling,u=a.return;if(tr(a),a===e){Mt=null;break t}if(n!==null){n.return=u,Mt=n;break t}Mt=u}}}var om={getCacheForType:function(t){var l=Ot(St),e=l.data.get(t);return e===void 0&&(e=t(),l.data.set(t,e)),e},cacheSignal:function(){return Ot(St).controller.signal}},rm=typeof WeakMap=="function"?WeakMap:Map,P=0,ot=null,w=null,J=0,at=0,ul=null,re=!1,pa=!1,Mc=!1,Jl=0,yt=0,de=0,Le=0,_c=0,il=0,ba=0,on=null,kt=null,Nc=!1,vu=0,rr=0,pu=1/0,bu=null,me=null,Tt=0,he=null,Sa=null,kl=0,Oc=0,Dc=null,dr=null,rn=0,Uc=null;function cl(){return(P&2)!==0&&J!==0?J&-J:b.T!==null?Yc():Mf()}function mr(){if(il===0)if((J&536870912)===0||F){var t=Mn;Mn<<=1,(Mn&3932160)===0&&(Mn=262144),il=t}else il=536870912;return t=al.current,t!==null&&(t.flags|=32),il}function Wt(t,l,e){(t===ot&&(at===2||at===9)||t.cancelPendingCommit!==null)&&(xa(t,0),ge(t,J,il,!1)),Da(t,e),((P&2)===0||t!==ot)&&(t===ot&&((P&2)===0&&(Le|=e),yt===4&&ge(t,J,il,!1)),Nl(t))}function hr(t,l,e){if((P&6)!==0)throw Error(m(327));var a=!e&&(l&127)===0&&(l&t.expiredLanes)===0||Oa(t,l),n=a?hm(t,l):Hc(t,l,!0),u=a;do{if(n===0){pa&&!a&&ge(t,l,0,!1);break}else{if(e=t.current.alternate,u&&!dm(e)){n=Hc(t,l,!1),u=!1;continue}if(n===2){if(u=l,t.errorRecoveryDisabledLanes&u)var i=0;else i=t.pendingLanes&-536870913,i=i!==0?i:i&536870912?536870912:0;if(i!==0){l=i;t:{var c=t;n=on;var s=c.current.memoizedState.isDehydrated;if(s&&(xa(c,i).flags|=256),i=Hc(c,i,!1),i!==2){if(Mc&&!s){c.errorRecoveryDisabledLanes|=u,Le|=u,n=4;break t}u=kt,kt=n,u!==null&&(kt===null?kt=u:kt.push.apply(kt,u))}n=i}if(u=!1,n!==2)continue}}if(n===1){xa(t,0),ge(t,l,0,!0);break}t:{switch(a=t,u=n,u){case 0:case 1:throw Error(m(345));case 4:if((l&4194048)!==l)break;case 6:ge(a,l,il,!re);break t;case 2:kt=null;break;case 3:case 5:break;default:throw Error(m(329))}if((l&62914560)===l&&(n=vu+300-It(),10<n)){if(ge(a,l,il,!re),Nn(a,0,!0)!==0)break t;kl=l,a.timeoutHandle=Vr(gr.bind(null,a,e,kt,bu,Nc,l,il,Le,ba,re,u,"Throttled",-0,0),n);break t}gr(a,e,kt,bu,Nc,l,il,Le,ba,re,u,null,-0,0)}}break}while(!0);Nl(t)}function gr(t,l,e,a,n,u,i,c,s,g,p,x,y,v){if(t.timeoutHandle=-1,x=l.subtreeFlags,x&8192||(x&16785408)===16785408){x={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Cl},cr(l,u,x);var N=(u&62914560)===u?vu-It():(u&4194048)===u?rr-It():0;if(N=Fm(x,N),N!==null){kl=u,t.cancelPendingCommit=N(Ar.bind(null,t,l,u,e,a,n,i,c,s,p,x,null,y,v)),ge(t,u,i,!g);return}}Ar(t,l,u,e,a,n,i,c,s)}function dm(t){for(var l=t;;){var e=l.tag;if((e===0||e===11||e===15)&&l.flags&16384&&(e=l.updateQueue,e!==null&&(e=e.stores,e!==null)))for(var a=0;a<e.length;a++){var n=e[a],u=n.getSnapshot;n=n.value;try{if(!ll(u(),n))return!1}catch{return!1}}if(e=l.child,l.subtreeFlags&16384&&e!==null)e.return=l,l=e;else{if(l===t)break;for(;l.sibling===null;){if(l.return===null||l.return===t)return!0;l=l.return}l.sibling.return=l.return,l=l.sibling}}return!0}function ge(t,l,e,a){l&=~_c,l&=~Le,t.suspendedLanes|=l,t.pingedLanes&=~l,a&&(t.warmLanes|=l),a=t.expirationTimes;for(var n=l;0<n;){var u=31-tl(n),i=1<<u;a[u]=-1,n&=~i}e!==0&&Ef(t,e,l)}function Su(){return(P&6)===0?(dn(0),!1):!0}function Cc(){if(w!==null){if(at===0)var t=w.return;else t=w,ql=Ce=null,Wi(t),ra=null,Ja=0,t=w;for(;t!==null;)Ko(t.alternate,t),t=t.return;w=null}}function xa(t,l){var e=t.timeoutHandle;e!==-1&&(t.timeoutHandle=-1,Um(e)),e=t.cancelPendingCommit,e!==null&&(t.cancelPendingCommit=null,e()),kl=0,Cc(),ot=t,w=e=Rl(t.current,null),J=l,at=0,ul=null,re=!1,pa=Oa(t,l),Mc=!1,ba=il=_c=Le=de=yt=0,kt=on=null,Nc=!1,(l&8)!==0&&(l|=l&32);var a=t.entangledLanes;if(a!==0)for(t=t.entanglements,a&=l;0<a;){var n=31-tl(a),u=1<<n;l|=t[n],a&=~u}return Jl=l,Qn(),e}function yr(t,l){Q=null,b.H=ln,l===oa||l===Wn?(l=Ds(),at=3):l===qi?(l=Ds(),at=4):at=l===rc?8:l!==null&&typeof l=="object"&&typeof l.then=="function"?6:1,ul=l,w===null&&(yt=1,su(t,dl(l,t.current)))}function vr(){var t=al.current;return t===null?!0:(J&4194048)===J?yl===null:(J&62914560)===J||(J&536870912)!==0?t===yl:!1}function pr(){var t=b.H;return b.H=ln,t===null?ln:t}function br(){var t=b.A;return b.A=om,t}function xu(){yt=4,re||(J&4194048)!==J&&al.current!==null||(pa=!0),(de&134217727)===0&&(Le&134217727)===0||ot===null||ge(ot,J,il,!1)}function Hc(t,l,e){var a=P;P|=2;var n=pr(),u=br();(ot!==t||J!==l)&&(bu=null,xa(t,l)),l=!1;var i=yt;t:do try{if(at!==0&&w!==null){var c=w,s=ul;switch(at){case 8:Cc(),i=6;break t;case 3:case 2:case 9:case 6:al.current===null&&(l=!0);var g=at;if(at=0,ul=null,za(t,c,s,g),e&&pa){i=0;break t}break;default:g=at,at=0,ul=null,za(t,c,s,g)}}mm(),i=yt;break}catch(p){yr(t,p)}while(!0);return l&&t.shellSuspendCounter++,ql=Ce=null,P=a,b.H=n,b.A=u,w===null&&(ot=null,J=0,Qn()),i}function mm(){for(;w!==null;)Sr(w)}function hm(t,l){var e=P;P|=2;var a=pr(),n=br();ot!==t||J!==l?(bu=null,pu=It()+500,xa(t,l)):pa=Oa(t,l);t:do try{if(at!==0&&w!==null){l=w;var u=ul;l:switch(at){case 1:at=0,ul=null,za(t,l,u,1);break;case 2:case 9:if(Ns(u)){at=0,ul=null,xr(l);break}l=function(){at!==2&&at!==9||ot!==t||(at=7),Nl(t)},u.then(l,l);break t;case 3:at=7;break t;case 4:at=5;break t;case 7:Ns(u)?(at=0,ul=null,xr(l)):(at=0,ul=null,za(t,l,u,7));break;case 5:var i=null;switch(w.tag){case 26:i=w.memoizedState;case 5:case 27:var c=w;if(i?id(i):c.stateNode.complete){at=0,ul=null;var s=c.sibling;if(s!==null)w=s;else{var g=c.return;g!==null?(w=g,zu(g)):w=null}break l}}at=0,ul=null,za(t,l,u,5);break;case 6:at=0,ul=null,za(t,l,u,6);break;case 8:Cc(),yt=6;break t;default:throw Error(m(462))}}gm();break}catch(p){yr(t,p)}while(!0);return ql=Ce=null,b.H=a,b.A=n,P=e,w!==null?0:(ot=null,J=0,Qn(),yt)}function gm(){for(;w!==null&&!Yd();)Sr(w)}function Sr(t){var l=wo(t.alternate,t,Jl);t.memoizedProps=t.pendingProps,l===null?zu(t):w=l}function xr(t){var l=t,e=l.alternate;switch(l.tag){case 15:case 0:l=Yo(e,l,l.pendingProps,l.type,void 0,J);break;case 11:l=Yo(e,l,l.pendingProps,l.type.render,l.ref,J);break;case 5:Wi(l);default:Ko(e,l),l=w=ps(l,Jl),l=wo(e,l,Jl)}t.memoizedProps=t.pendingProps,l===null?zu(t):w=l}function za(t,l,e,a){ql=Ce=null,Wi(l),ra=null,Ja=0;var n=l.return;try{if(am(t,n,l,e,J)){yt=1,su(t,dl(e,t.current)),w=null;return}}catch(u){if(n!==null)throw w=n,u;yt=1,su(t,dl(e,t.current)),w=null;return}l.flags&32768?(F||a===1?t=!0:pa||(J&536870912)!==0?t=!1:(re=t=!0,(a===2||a===9||a===3||a===6)&&(a=al.current,a!==null&&a.tag===13&&(a.flags|=16384))),zr(l,t)):zu(l)}function zu(t){var l=t;do{if((l.flags&32768)!==0){zr(l,re);return}t=l.return;var e=im(l.alternate,l,Jl);if(e!==null){w=e;return}if(l=l.sibling,l!==null){w=l;return}w=l=t}while(l!==null);yt===0&&(yt=5)}function zr(t,l){do{var e=cm(t.alternate,t);if(e!==null){e.flags&=32767,w=e;return}if(e=t.return,e!==null&&(e.flags|=32768,e.subtreeFlags=0,e.deletions=null),!l&&(t=t.sibling,t!==null)){w=t;return}w=t=e}while(t!==null);yt=6,w=null}function Ar(t,l,e,a,n,u,i,c,s){t.cancelPendingCommit=null;do Au();while(Tt!==0);if((P&6)!==0)throw Error(m(327));if(l!==null){if(l===t.current)throw Error(m(177));if(u=l.lanes|l.childLanes,u|=zi,kd(t,e,u,i,c,s),t===ot&&(w=ot=null,J=0),Sa=l,he=t,kl=e,Oc=u,Dc=n,dr=a,(l.subtreeFlags&10256)!==0||(l.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,bm(Tn,function(){return _r(),null})):(t.callbackNode=null,t.callbackPriority=0),a=(l.flags&13878)!==0,(l.subtreeFlags&13878)!==0||a){a=b.T,b.T=null,n=j.p,j.p=2,i=P,P|=4;try{fm(t,l,e)}finally{P=i,j.p=n,b.T=a}}Tt=1,Er(),Tr(),jr()}}function Er(){if(Tt===1){Tt=0;var t=he,l=Sa,e=(l.flags&13878)!==0;if((l.subtreeFlags&13878)!==0||e){e=b.T,b.T=null;var a=j.p;j.p=2;var n=P;P|=4;try{nr(l,t);var u=Kc,i=ss(t.containerInfo),c=u.focusedElem,s=u.selectionRange;if(i!==c&&c&&c.ownerDocument&&fs(c.ownerDocument.documentElement,c)){if(s!==null&&vi(c)){var g=s.start,p=s.end;if(p===void 0&&(p=g),"selectionStart"in c)c.selectionStart=g,c.selectionEnd=Math.min(p,c.value.length);else{var x=c.ownerDocument||document,y=x&&x.defaultView||window;if(y.getSelection){var v=y.getSelection(),N=c.textContent.length,q=Math.min(s.start,N),ft=s.end===void 0?q:Math.min(s.end,N);!v.extend&&q>ft&&(i=ft,ft=q,q=i);var d=cs(c,q),o=cs(c,ft);if(d&&o&&(v.rangeCount!==1||v.anchorNode!==d.node||v.anchorOffset!==d.offset||v.focusNode!==o.node||v.focusOffset!==o.offset)){var h=x.createRange();h.setStart(d.node,d.offset),v.removeAllRanges(),q>ft?(v.addRange(h),v.extend(o.node,o.offset)):(h.setEnd(o.node,o.offset),v.addRange(h))}}}}for(x=[],v=c;v=v.parentNode;)v.nodeType===1&&x.push({element:v,left:v.scrollLeft,top:v.scrollTop});for(typeof c.focus=="function"&&c.focus(),c=0;c<x.length;c++){var S=x[c];S.element.scrollLeft=S.left,S.element.scrollTop=S.top}}Ru=!!Vc,Kc=Vc=null}finally{P=n,j.p=a,b.T=e}}t.current=l,Tt=2}}function Tr(){if(Tt===2){Tt=0;var t=he,l=Sa,e=(l.flags&8772)!==0;if((l.subtreeFlags&8772)!==0||e){e=b.T,b.T=null;var a=j.p;j.p=2;var n=P;P|=4;try{Po(t,l.alternate,l)}finally{P=n,j.p=a,b.T=e}}Tt=3}}function jr(){if(Tt===4||Tt===3){Tt=0,Gd();var t=he,l=Sa,e=kl,a=dr;(l.subtreeFlags&10256)!==0||(l.flags&10256)!==0?Tt=5:(Tt=0,Sa=he=null,Mr(t,t.pendingLanes));var n=t.pendingLanes;if(n===0&&(me=null),Iu(e),l=l.stateNode,Pt&&typeof Pt.onCommitFiberRoot=="function")try{Pt.onCommitFiberRoot(Na,l,void 0,(l.current.flags&128)===128)}catch{}if(a!==null){l=b.T,n=j.p,j.p=2,b.T=null;try{for(var u=t.onRecoverableError,i=0;i<a.length;i++){var c=a[i];u(c.value,{componentStack:c.stack})}}finally{b.T=l,j.p=n}}(kl&3)!==0&&Au(),Nl(t),n=t.pendingLanes,(e&261930)!==0&&(n&42)!==0?t===Uc?rn++:(rn=0,Uc=t):rn=0,dn(0)}}function Mr(t,l){(t.pooledCacheLanes&=l)===0&&(l=t.pooledCache,l!=null&&(t.pooledCache=null,Va(l)))}function Au(){return Er(),Tr(),jr(),_r()}function _r(){if(Tt!==5)return!1;var t=he,l=Oc;Oc=0;var e=Iu(kl),a=b.T,n=j.p;try{j.p=32>e?32:e,b.T=null,e=Dc,Dc=null;var u=he,i=kl;if(Tt=0,Sa=he=null,kl=0,(P&6)!==0)throw Error(m(331));var c=P;if(P|=4,sr(u.current),ir(u,u.current,i,e),P=c,dn(0,!1),Pt&&typeof Pt.onPostCommitFiberRoot=="function")try{Pt.onPostCommitFiberRoot(Na,u)}catch{}return!0}finally{j.p=n,b.T=a,Mr(t,l)}}function Nr(t,l,e){l=dl(e,l),l=oc(t.stateNode,l,2),t=ce(t,l,2),t!==null&&(Da(t,2),Nl(t))}function nt(t,l,e){if(t.tag===3)Nr(t,t,e);else for(;l!==null;){if(l.tag===3){Nr(l,t,e);break}else if(l.tag===1){var a=l.stateNode;if(typeof l.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(me===null||!me.has(a))){t=dl(e,t),e=Oo(2),a=ce(l,e,2),a!==null&&(Do(e,a,l,t),Da(a,2),Nl(a));break}}l=l.return}}function Rc(t,l,e){var a=t.pingCache;if(a===null){a=t.pingCache=new rm;var n=new Set;a.set(l,n)}else n=a.get(l),n===void 0&&(n=new Set,a.set(l,n));n.has(e)||(Mc=!0,n.add(e),t=ym.bind(null,t,l,e),l.then(t,t))}function ym(t,l,e){var a=t.pingCache;a!==null&&a.delete(l),t.pingedLanes|=t.suspendedLanes&e,t.warmLanes&=~e,ot===t&&(J&e)===e&&(yt===4||yt===3&&(J&62914560)===J&&300>It()-vu?(P&2)===0&&xa(t,0):_c|=e,ba===J&&(ba=0)),Nl(t)}function Or(t,l){l===0&&(l=Af()),t=Oe(t,l),t!==null&&(Da(t,l),Nl(t))}function vm(t){var l=t.memoizedState,e=0;l!==null&&(e=l.retryLane),Or(t,e)}function pm(t,l){var e=0;switch(t.tag){case 31:case 13:var a=t.stateNode,n=t.memoizedState;n!==null&&(e=n.retryLane);break;case 19:a=t.stateNode;break;case 22:a=t.stateNode._retryCache;break;default:throw Error(m(314))}a!==null&&a.delete(l),Or(t,e)}function bm(t,l){return ku(t,l)}var Eu=null,Aa=null,Bc=!1,Tu=!1,qc=!1,ye=0;function Nl(t){t!==Aa&&t.next===null&&(Aa===null?Eu=Aa=t:Aa=Aa.next=t),Tu=!0,Bc||(Bc=!0,xm())}function dn(t,l){if(!qc&&Tu){qc=!0;do for(var e=!1,a=Eu;a!==null;){if(t!==0){var n=a.pendingLanes;if(n===0)var u=0;else{var i=a.suspendedLanes,c=a.pingedLanes;u=(1<<31-tl(42|t)+1)-1,u&=n&~(i&~c),u=u&201326741?u&201326741|1:u?u|2:0}u!==0&&(e=!0,Hr(a,u))}else u=J,u=Nn(a,a===ot?u:0,a.cancelPendingCommit!==null||a.timeoutHandle!==-1),(u&3)===0||Oa(a,u)||(e=!0,Hr(a,u));a=a.next}while(e);qc=!1}}function Sm(){Dr()}function Dr(){Tu=Bc=!1;var t=0;ye!==0&&Dm()&&(t=ye);for(var l=It(),e=null,a=Eu;a!==null;){var n=a.next,u=Ur(a,l);u===0?(a.next=null,e===null?Eu=n:e.next=n,n===null&&(Aa=e)):(e=a,(t!==0||(u&3)!==0)&&(Tu=!0)),a=n}Tt!==0&&Tt!==5||dn(t),ye!==0&&(ye=0)}function Ur(t,l){for(var e=t.suspendedLanes,a=t.pingedLanes,n=t.expirationTimes,u=t.pendingLanes&-62914561;0<u;){var i=31-tl(u),c=1<<i,s=n[i];s===-1?((c&e)===0||(c&a)!==0)&&(n[i]=Jd(c,l)):s<=l&&(t.expiredLanes|=c),u&=~c}if(l=ot,e=J,e=Nn(t,t===l?e:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),a=t.callbackNode,e===0||t===l&&(at===2||at===9)||t.cancelPendingCommit!==null)return a!==null&&a!==null&&Wu(a),t.callbackNode=null,t.callbackPriority=0;if((e&3)===0||Oa(t,e)){if(l=e&-e,l===t.callbackPriority)return l;switch(a!==null&&Wu(a),Iu(e)){case 2:case 8:e=xf;break;case 32:e=Tn;break;case 268435456:e=zf;break;default:e=Tn}return a=Cr.bind(null,t),e=ku(e,a),t.callbackPriority=l,t.callbackNode=e,l}return a!==null&&a!==null&&Wu(a),t.callbackPriority=2,t.callbackNode=null,2}function Cr(t,l){if(Tt!==0&&Tt!==5)return t.callbackNode=null,t.callbackPriority=0,null;var e=t.callbackNode;if(Au()&&t.callbackNode!==e)return null;var a=J;return a=Nn(t,t===ot?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),a===0?null:(hr(t,a,l),Ur(t,It()),t.callbackNode!=null&&t.callbackNode===e?Cr.bind(null,t):null)}function Hr(t,l){if(Au())return null;hr(t,l,!0)}function xm(){Cm(function(){(P&6)!==0?ku(Sf,Sm):Dr()})}function Yc(){if(ye===0){var t=fa;t===0&&(t=jn,jn<<=1,(jn&261888)===0&&(jn=256)),ye=t}return ye}function Rr(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Cn(""+t)}function Br(t,l){var e=l.ownerDocument.createElement("input");return e.name=l.name,e.value=l.value,t.id&&e.setAttribute("form",t.id),l.parentNode.insertBefore(e,l),t=new FormData(t),e.parentNode.removeChild(e),t}function zm(t,l,e,a,n){if(l==="submit"&&e&&e.stateNode===n){var u=Rr((n[Zt]||null).action),i=a.submitter;i&&(l=(l=i[Zt]||null)?Rr(l.formAction):i.getAttribute("formAction"),l!==null&&(u=l,i=null));var c=new qn("action","action",null,a,n);t.push({event:c,listeners:[{instance:null,listener:function(){if(a.defaultPrevented){if(ye!==0){var s=i?Br(n,i):new FormData(n);nc(e,{pending:!0,data:s,method:n.method,action:u},null,s)}}else typeof u=="function"&&(c.preventDefault(),s=i?Br(n,i):new FormData(n),nc(e,{pending:!0,data:s,method:n.method,action:u},u,s))},currentTarget:n}]})}}for(var Gc=0;Gc<xi.length;Gc++){var Xc=xi[Gc],Am=Xc.toLowerCase(),Em=Xc[0].toUpperCase()+Xc.slice(1);Sl(Am,"on"+Em)}Sl(ds,"onAnimationEnd"),Sl(ms,"onAnimationIteration"),Sl(hs,"onAnimationStart"),Sl("dblclick","onDoubleClick"),Sl("focusin","onFocus"),Sl("focusout","onBlur"),Sl(X0,"onTransitionRun"),Sl(Q0,"onTransitionStart"),Sl(L0,"onTransitionCancel"),Sl(gs,"onTransitionEnd"),ke("onMouseEnter",["mouseout","mouseover"]),ke("onMouseLeave",["mouseout","mouseover"]),ke("onPointerEnter",["pointerout","pointerover"]),ke("onPointerLeave",["pointerout","pointerover"]),je("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),je("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),je("onBeforeInput",["compositionend","keypress","textInput","paste"]),je("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),je("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),je("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var mn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Tm=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(mn));function qr(t,l){l=(l&4)!==0;for(var e=0;e<t.length;e++){var a=t[e],n=a.event;a=a.listeners;t:{var u=void 0;if(l)for(var i=a.length-1;0<=i;i--){var c=a[i],s=c.instance,g=c.currentTarget;if(c=c.listener,s!==u&&n.isPropagationStopped())break t;u=c,n.currentTarget=g;try{u(n)}catch(p){Xn(p)}n.currentTarget=null,u=s}else for(i=0;i<a.length;i++){if(c=a[i],s=c.instance,g=c.currentTarget,c=c.listener,s!==u&&n.isPropagationStopped())break t;u=c,n.currentTarget=g;try{u(n)}catch(p){Xn(p)}n.currentTarget=null,u=s}}}}function V(t,l){var e=l[Pu];e===void 0&&(e=l[Pu]=new Set);var a=t+"__bubble";e.has(a)||(Yr(l,t,2,!1),e.add(a))}function Qc(t,l,e){var a=0;l&&(a|=4),Yr(e,t,a,l)}var ju="_reactListening"+Math.random().toString(36).slice(2);function Lc(t){if(!t[ju]){t[ju]=!0,Of.forEach(function(e){e!=="selectionchange"&&(Tm.has(e)||Qc(e,!1,t),Qc(e,!0,t))});var l=t.nodeType===9?t:t.ownerDocument;l===null||l[ju]||(l[ju]=!0,Qc("selectionchange",!1,l))}}function Yr(t,l,e,a){switch(md(l)){case 2:var n=Pm;break;case 8:n=th;break;default:n=af}e=n.bind(null,l,e,t),n=void 0,!fi||l!=="touchstart"&&l!=="touchmove"&&l!=="wheel"||(n=!0),a?n!==void 0?t.addEventListener(l,e,{capture:!0,passive:n}):t.addEventListener(l,e,!0):n!==void 0?t.addEventListener(l,e,{passive:n}):t.addEventListener(l,e,!1)}function Zc(t,l,e,a,n){var u=a;if((l&1)===0&&(l&2)===0&&a!==null)t:for(;;){if(a===null)return;var i=a.tag;if(i===3||i===4){var c=a.stateNode.containerInfo;if(c===n)break;if(i===4)for(i=a.return;i!==null;){var s=i.tag;if((s===3||s===4)&&i.stateNode.containerInfo===n)return;i=i.return}for(;c!==null;){if(i=Ve(c),i===null)return;if(s=i.tag,s===5||s===6||s===26||s===27){a=u=i;continue t}c=c.parentNode}}a=a.return}Lf(function(){var g=u,p=ii(e),x=[];t:{var y=ys.get(t);if(y!==void 0){var v=qn,N=t;switch(t){case"keypress":if(Rn(e)===0)break t;case"keydown":case"keyup":v=p0;break;case"focusin":N="focus",v=di;break;case"focusout":N="blur",v=di;break;case"beforeblur":case"afterblur":v=di;break;case"click":if(e.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=Vf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=i0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=x0;break;case ds:case ms:case hs:v=s0;break;case gs:v=A0;break;case"scroll":case"scrollend":v=n0;break;case"wheel":v=T0;break;case"copy":case"cut":case"paste":v=r0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=Jf;break;case"toggle":case"beforetoggle":v=M0}var q=(l&4)!==0,ft=!q&&(t==="scroll"||t==="scrollend"),d=q?y!==null?y+"Capture":null:y;q=[];for(var o=g,h;o!==null;){var S=o;if(h=S.stateNode,S=S.tag,S!==5&&S!==26&&S!==27||h===null||d===null||(S=Ha(o,d),S!=null&&q.push(hn(o,S,h))),ft)break;o=o.return}0<q.length&&(y=new v(y,N,null,e,p),x.push({event:y,listeners:q}))}}if((l&7)===0){t:{if(y=t==="mouseover"||t==="pointerover",v=t==="mouseout"||t==="pointerout",y&&e!==ui&&(N=e.relatedTarget||e.fromElement)&&(Ve(N)||N[we]))break t;if((v||y)&&(y=p.window===p?p:(y=p.ownerDocument)?y.defaultView||y.parentWindow:window,v?(N=e.relatedTarget||e.toElement,v=g,N=N?Ve(N):null,N!==null&&(ft=R(N),q=N.tag,N!==ft||q!==5&&q!==27&&q!==6)&&(N=null)):(v=null,N=g),v!==N)){if(q=Vf,S="onMouseLeave",d="onMouseEnter",o="mouse",(t==="pointerout"||t==="pointerover")&&(q=Jf,S="onPointerLeave",d="onPointerEnter",o="pointer"),ft=v==null?y:Ca(v),h=N==null?y:Ca(N),y=new q(S,o+"leave",v,e,p),y.target=ft,y.relatedTarget=h,S=null,Ve(p)===g&&(q=new q(d,o+"enter",N,e,p),q.target=h,q.relatedTarget=ft,S=q),ft=S,v&&N)l:{for(q=jm,d=v,o=N,h=0,S=d;S;S=q(S))h++;S=0;for(var H=o;H;H=q(H))S++;for(;0<h-S;)d=q(d),h--;for(;0<S-h;)o=q(o),S--;for(;h--;){if(d===o||o!==null&&d===o.alternate){q=d;break l}d=q(d),o=q(o)}q=null}else q=null;v!==null&&Gr(x,y,v,q,!1),N!==null&&ft!==null&&Gr(x,ft,N,q,!0)}}t:{if(y=g?Ca(g):window,v=y.nodeName&&y.nodeName.toLowerCase(),v==="select"||v==="input"&&y.type==="file")var $=ls;else if(Pf(y))if(es)$=q0;else{$=R0;var U=H0}else v=y.nodeName,!v||v.toLowerCase()!=="input"||y.type!=="checkbox"&&y.type!=="radio"?g&&ni(g.elementType)&&($=ls):$=B0;if($&&($=$(t,g))){ts(x,$,e,p);break t}U&&U(t,y,g),t==="focusout"&&g&&y.type==="number"&&g.memoizedProps.value!=null&&ai(y,"number",y.value)}switch(U=g?Ca(g):window,t){case"focusin":(Pf(U)||U.contentEditable==="true")&&(ta=U,pi=g,La=null);break;case"focusout":La=pi=ta=null;break;case"mousedown":bi=!0;break;case"contextmenu":case"mouseup":case"dragend":bi=!1,os(x,e,p);break;case"selectionchange":if(G0)break;case"keydown":case"keyup":os(x,e,p)}var L;if(hi)t:{switch(t){case"compositionstart":var k="onCompositionStart";break t;case"compositionend":k="onCompositionEnd";break t;case"compositionupdate":k="onCompositionUpdate";break t}k=void 0}else Pe?$f(t,e)&&(k="onCompositionEnd"):t==="keydown"&&e.keyCode===229&&(k="onCompositionStart");k&&(kf&&e.locale!=="ko"&&(Pe||k!=="onCompositionStart"?k==="onCompositionEnd"&&Pe&&(L=Zf()):(te=p,si="value"in te?te.value:te.textContent,Pe=!0)),U=Mu(g,k),0<U.length&&(k=new Kf(k,t,null,e,p),x.push({event:k,listeners:U}),L?k.data=L:(L=If(e),L!==null&&(k.data=L)))),(L=N0?O0(t,e):D0(t,e))&&(k=Mu(g,"onBeforeInput"),0<k.length&&(U=new Kf("onBeforeInput","beforeinput",null,e,p),x.push({event:U,listeners:k}),U.data=L)),zm(x,t,g,e,p)}qr(x,l)})}function hn(t,l,e){return{instance:t,listener:l,currentTarget:e}}function Mu(t,l){for(var e=l+"Capture",a=[];t!==null;){var n=t,u=n.stateNode;if(n=n.tag,n!==5&&n!==26&&n!==27||u===null||(n=Ha(t,e),n!=null&&a.unshift(hn(t,n,u)),n=Ha(t,l),n!=null&&a.push(hn(t,n,u))),t.tag===3)return a;t=t.return}return[]}function jm(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function Gr(t,l,e,a,n){for(var u=l._reactName,i=[];e!==null&&e!==a;){var c=e,s=c.alternate,g=c.stateNode;if(c=c.tag,s!==null&&s===a)break;c!==5&&c!==26&&c!==27||g===null||(s=g,n?(g=Ha(e,u),g!=null&&i.unshift(hn(e,g,s))):n||(g=Ha(e,u),g!=null&&i.push(hn(e,g,s)))),e=e.return}i.length!==0&&t.push({event:l,listeners:i})}var Mm=/\r\n?/g,_m=/\u0000|\uFFFD/g;function Xr(t){return(typeof t=="string"?t:""+t).replace(Mm,`
`).replace(_m,"")}function Qr(t,l){return l=Xr(l),Xr(t)===l}function ct(t,l,e,a,n,u){switch(e){case"children":typeof a=="string"?l==="body"||l==="textarea"&&a===""||Fe(t,a):(typeof a=="number"||typeof a=="bigint")&&l!=="body"&&Fe(t,""+a);break;case"className":Dn(t,"class",a);break;case"tabIndex":Dn(t,"tabindex",a);break;case"dir":case"role":case"viewBox":case"width":case"height":Dn(t,e,a);break;case"style":Xf(t,a,u);break;case"data":if(l!=="object"){Dn(t,"data",a);break}case"src":case"href":if(a===""&&(l!=="a"||e!=="href")){t.removeAttribute(e);break}if(a==null||typeof a=="function"||typeof a=="symbol"||typeof a=="boolean"){t.removeAttribute(e);break}a=Cn(""+a),t.setAttribute(e,a);break;case"action":case"formAction":if(typeof a=="function"){t.setAttribute(e,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof u=="function"&&(e==="formAction"?(l!=="input"&&ct(t,l,"name",n.name,n,null),ct(t,l,"formEncType",n.formEncType,n,null),ct(t,l,"formMethod",n.formMethod,n,null),ct(t,l,"formTarget",n.formTarget,n,null)):(ct(t,l,"encType",n.encType,n,null),ct(t,l,"method",n.method,n,null),ct(t,l,"target",n.target,n,null)));if(a==null||typeof a=="symbol"||typeof a=="boolean"){t.removeAttribute(e);break}a=Cn(""+a),t.setAttribute(e,a);break;case"onClick":a!=null&&(t.onclick=Cl);break;case"onScroll":a!=null&&V("scroll",t);break;case"onScrollEnd":a!=null&&V("scrollend",t);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(m(61));if(e=a.__html,e!=null){if(n.children!=null)throw Error(m(60));t.innerHTML=e}}break;case"multiple":t.multiple=a&&typeof a!="function"&&typeof a!="symbol";break;case"muted":t.muted=a&&typeof a!="function"&&typeof a!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(a==null||typeof a=="function"||typeof a=="boolean"||typeof a=="symbol"){t.removeAttribute("xlink:href");break}e=Cn(""+a),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",e);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":a!=null&&typeof a!="function"&&typeof a!="symbol"?t.setAttribute(e,""+a):t.removeAttribute(e);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":a&&typeof a!="function"&&typeof a!="symbol"?t.setAttribute(e,""):t.removeAttribute(e);break;case"capture":case"download":a===!0?t.setAttribute(e,""):a!==!1&&a!=null&&typeof a!="function"&&typeof a!="symbol"?t.setAttribute(e,a):t.removeAttribute(e);break;case"cols":case"rows":case"size":case"span":a!=null&&typeof a!="function"&&typeof a!="symbol"&&!isNaN(a)&&1<=a?t.setAttribute(e,a):t.removeAttribute(e);break;case"rowSpan":case"start":a==null||typeof a=="function"||typeof a=="symbol"||isNaN(a)?t.removeAttribute(e):t.setAttribute(e,a);break;case"popover":V("beforetoggle",t),V("toggle",t),On(t,"popover",a);break;case"xlinkActuate":Ul(t,"http://www.w3.org/1999/xlink","xlink:actuate",a);break;case"xlinkArcrole":Ul(t,"http://www.w3.org/1999/xlink","xlink:arcrole",a);break;case"xlinkRole":Ul(t,"http://www.w3.org/1999/xlink","xlink:role",a);break;case"xlinkShow":Ul(t,"http://www.w3.org/1999/xlink","xlink:show",a);break;case"xlinkTitle":Ul(t,"http://www.w3.org/1999/xlink","xlink:title",a);break;case"xlinkType":Ul(t,"http://www.w3.org/1999/xlink","xlink:type",a);break;case"xmlBase":Ul(t,"http://www.w3.org/XML/1998/namespace","xml:base",a);break;case"xmlLang":Ul(t,"http://www.w3.org/XML/1998/namespace","xml:lang",a);break;case"xmlSpace":Ul(t,"http://www.w3.org/XML/1998/namespace","xml:space",a);break;case"is":On(t,"is",a);break;case"innerText":case"textContent":break;default:(!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(e=e0.get(e)||e,On(t,e,a))}}function wc(t,l,e,a,n,u){switch(e){case"style":Xf(t,a,u);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(m(61));if(e=a.__html,e!=null){if(n.children!=null)throw Error(m(60));t.innerHTML=e}}break;case"children":typeof a=="string"?Fe(t,a):(typeof a=="number"||typeof a=="bigint")&&Fe(t,""+a);break;case"onScroll":a!=null&&V("scroll",t);break;case"onScrollEnd":a!=null&&V("scrollend",t);break;case"onClick":a!=null&&(t.onclick=Cl);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Df.hasOwnProperty(e))t:{if(e[0]==="o"&&e[1]==="n"&&(n=e.endsWith("Capture"),l=e.slice(2,n?e.length-7:void 0),u=t[Zt]||null,u=u!=null?u[e]:null,typeof u=="function"&&t.removeEventListener(l,u,n),typeof a=="function")){typeof u!="function"&&u!==null&&(e in t?t[e]=null:t.hasAttribute(e)&&t.removeAttribute(e)),t.addEventListener(l,a,n);break t}e in t?t[e]=a:a===!0?t.setAttribute(e,""):On(t,e,a)}}}function Ut(t,l,e){switch(l){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":V("error",t),V("load",t);var a=!1,n=!1,u;for(u in e)if(e.hasOwnProperty(u)){var i=e[u];if(i!=null)switch(u){case"src":a=!0;break;case"srcSet":n=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(m(137,l));default:ct(t,l,u,i,e,null)}}n&&ct(t,l,"srcSet",e.srcSet,e,null),a&&ct(t,l,"src",e.src,e,null);return;case"input":V("invalid",t);var c=u=i=n=null,s=null,g=null;for(a in e)if(e.hasOwnProperty(a)){var p=e[a];if(p!=null)switch(a){case"name":n=p;break;case"type":i=p;break;case"checked":s=p;break;case"defaultChecked":g=p;break;case"value":u=p;break;case"defaultValue":c=p;break;case"children":case"dangerouslySetInnerHTML":if(p!=null)throw Error(m(137,l));break;default:ct(t,l,a,p,e,null)}}Bf(t,u,c,s,g,i,n,!1);return;case"select":V("invalid",t),a=i=u=null;for(n in e)if(e.hasOwnProperty(n)&&(c=e[n],c!=null))switch(n){case"value":u=c;break;case"defaultValue":i=c;break;case"multiple":a=c;default:ct(t,l,n,c,e,null)}l=u,e=i,t.multiple=!!a,l!=null?We(t,!!a,l,!1):e!=null&&We(t,!!a,e,!0);return;case"textarea":V("invalid",t),u=n=a=null;for(i in e)if(e.hasOwnProperty(i)&&(c=e[i],c!=null))switch(i){case"value":a=c;break;case"defaultValue":n=c;break;case"children":u=c;break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(m(91));break;default:ct(t,l,i,c,e,null)}Yf(t,a,n,u);return;case"option":for(s in e)e.hasOwnProperty(s)&&(a=e[s],a!=null)&&(s==="selected"?t.selected=a&&typeof a!="function"&&typeof a!="symbol":ct(t,l,s,a,e,null));return;case"dialog":V("beforetoggle",t),V("toggle",t),V("cancel",t),V("close",t);break;case"iframe":case"object":V("load",t);break;case"video":case"audio":for(a=0;a<mn.length;a++)V(mn[a],t);break;case"image":V("error",t),V("load",t);break;case"details":V("toggle",t);break;case"embed":case"source":case"link":V("error",t),V("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(g in e)if(e.hasOwnProperty(g)&&(a=e[g],a!=null))switch(g){case"children":case"dangerouslySetInnerHTML":throw Error(m(137,l));default:ct(t,l,g,a,e,null)}return;default:if(ni(l)){for(p in e)e.hasOwnProperty(p)&&(a=e[p],a!==void 0&&wc(t,l,p,a,e,void 0));return}}for(c in e)e.hasOwnProperty(c)&&(a=e[c],a!=null&&ct(t,l,c,a,e,null))}function Nm(t,l,e,a){switch(l){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var n=null,u=null,i=null,c=null,s=null,g=null,p=null;for(v in e){var x=e[v];if(e.hasOwnProperty(v)&&x!=null)switch(v){case"checked":break;case"value":break;case"defaultValue":s=x;default:a.hasOwnProperty(v)||ct(t,l,v,null,a,x)}}for(var y in a){var v=a[y];if(x=e[y],a.hasOwnProperty(y)&&(v!=null||x!=null))switch(y){case"type":u=v;break;case"name":n=v;break;case"checked":g=v;break;case"defaultChecked":p=v;break;case"value":i=v;break;case"defaultValue":c=v;break;case"children":case"dangerouslySetInnerHTML":if(v!=null)throw Error(m(137,l));break;default:v!==x&&ct(t,l,y,v,a,x)}}ei(t,i,c,s,g,p,u,n);return;case"select":v=i=c=y=null;for(u in e)if(s=e[u],e.hasOwnProperty(u)&&s!=null)switch(u){case"value":break;case"multiple":v=s;default:a.hasOwnProperty(u)||ct(t,l,u,null,a,s)}for(n in a)if(u=a[n],s=e[n],a.hasOwnProperty(n)&&(u!=null||s!=null))switch(n){case"value":y=u;break;case"defaultValue":c=u;break;case"multiple":i=u;default:u!==s&&ct(t,l,n,u,a,s)}l=c,e=i,a=v,y!=null?We(t,!!e,y,!1):!!a!=!!e&&(l!=null?We(t,!!e,l,!0):We(t,!!e,e?[]:"",!1));return;case"textarea":v=y=null;for(c in e)if(n=e[c],e.hasOwnProperty(c)&&n!=null&&!a.hasOwnProperty(c))switch(c){case"value":break;case"children":break;default:ct(t,l,c,null,a,n)}for(i in a)if(n=a[i],u=e[i],a.hasOwnProperty(i)&&(n!=null||u!=null))switch(i){case"value":y=n;break;case"defaultValue":v=n;break;case"children":break;case"dangerouslySetInnerHTML":if(n!=null)throw Error(m(91));break;default:n!==u&&ct(t,l,i,n,a,u)}qf(t,y,v);return;case"option":for(var N in e)y=e[N],e.hasOwnProperty(N)&&y!=null&&!a.hasOwnProperty(N)&&(N==="selected"?t.selected=!1:ct(t,l,N,null,a,y));for(s in a)y=a[s],v=e[s],a.hasOwnProperty(s)&&y!==v&&(y!=null||v!=null)&&(s==="selected"?t.selected=y&&typeof y!="function"&&typeof y!="symbol":ct(t,l,s,y,a,v));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var q in e)y=e[q],e.hasOwnProperty(q)&&y!=null&&!a.hasOwnProperty(q)&&ct(t,l,q,null,a,y);for(g in a)if(y=a[g],v=e[g],a.hasOwnProperty(g)&&y!==v&&(y!=null||v!=null))switch(g){case"children":case"dangerouslySetInnerHTML":if(y!=null)throw Error(m(137,l));break;default:ct(t,l,g,y,a,v)}return;default:if(ni(l)){for(var ft in e)y=e[ft],e.hasOwnProperty(ft)&&y!==void 0&&!a.hasOwnProperty(ft)&&wc(t,l,ft,void 0,a,y);for(p in a)y=a[p],v=e[p],!a.hasOwnProperty(p)||y===v||y===void 0&&v===void 0||wc(t,l,p,y,a,v);return}}for(var d in e)y=e[d],e.hasOwnProperty(d)&&y!=null&&!a.hasOwnProperty(d)&&ct(t,l,d,null,a,y);for(x in a)y=a[x],v=e[x],!a.hasOwnProperty(x)||y===v||y==null&&v==null||ct(t,l,x,y,a,v)}function Lr(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Om(){if(typeof performance.getEntriesByType=="function"){for(var t=0,l=0,e=performance.getEntriesByType("resource"),a=0;a<e.length;a++){var n=e[a],u=n.transferSize,i=n.initiatorType,c=n.duration;if(u&&c&&Lr(i)){for(i=0,c=n.responseEnd,a+=1;a<e.length;a++){var s=e[a],g=s.startTime;if(g>c)break;var p=s.transferSize,x=s.initiatorType;p&&Lr(x)&&(s=s.responseEnd,i+=p*(s<c?1:(c-g)/(s-g)))}if(--a,l+=8*(u+i)/(n.duration/1e3),t++,10<t)break}}if(0<t)return l/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var Vc=null,Kc=null;function _u(t){return t.nodeType===9?t:t.ownerDocument}function Zr(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function wr(t,l){if(t===0)switch(l){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&l==="foreignObject"?0:t}function Jc(t,l){return t==="textarea"||t==="noscript"||typeof l.children=="string"||typeof l.children=="number"||typeof l.children=="bigint"||typeof l.dangerouslySetInnerHTML=="object"&&l.dangerouslySetInnerHTML!==null&&l.dangerouslySetInnerHTML.__html!=null}var kc=null;function Dm(){var t=window.event;return t&&t.type==="popstate"?t===kc?!1:(kc=t,!0):(kc=null,!1)}var Vr=typeof setTimeout=="function"?setTimeout:void 0,Um=typeof clearTimeout=="function"?clearTimeout:void 0,Kr=typeof Promise=="function"?Promise:void 0,Cm=typeof queueMicrotask=="function"?queueMicrotask:typeof Kr<"u"?function(t){return Kr.resolve(null).then(t).catch(Hm)}:Vr;function Hm(t){setTimeout(function(){throw t})}function ve(t){return t==="head"}function Jr(t,l){var e=l,a=0;do{var n=e.nextSibling;if(t.removeChild(e),n&&n.nodeType===8)if(e=n.data,e==="/$"||e==="/&"){if(a===0){t.removeChild(n),Ma(l);return}a--}else if(e==="$"||e==="$?"||e==="$~"||e==="$!"||e==="&")a++;else if(e==="html")gn(t.ownerDocument.documentElement);else if(e==="head"){e=t.ownerDocument.head,gn(e);for(var u=e.firstChild;u;){var i=u.nextSibling,c=u.nodeName;u[Ua]||c==="SCRIPT"||c==="STYLE"||c==="LINK"&&u.rel.toLowerCase()==="stylesheet"||e.removeChild(u),u=i}}else e==="body"&&gn(t.ownerDocument.body);e=n}while(e);Ma(l)}function kr(t,l){var e=t;t=0;do{var a=e.nextSibling;if(e.nodeType===1?l?(e._stashedDisplay=e.style.display,e.style.display="none"):(e.style.display=e._stashedDisplay||"",e.getAttribute("style")===""&&e.removeAttribute("style")):e.nodeType===3&&(l?(e._stashedText=e.nodeValue,e.nodeValue=""):e.nodeValue=e._stashedText||""),a&&a.nodeType===8)if(e=a.data,e==="/$"){if(t===0)break;t--}else e!=="$"&&e!=="$?"&&e!=="$~"&&e!=="$!"||t++;e=a}while(e)}function Wc(t){var l=t.firstChild;for(l&&l.nodeType===10&&(l=l.nextSibling);l;){var e=l;switch(l=l.nextSibling,e.nodeName){case"HTML":case"HEAD":case"BODY":Wc(e),ti(e);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(e.rel.toLowerCase()==="stylesheet")continue}t.removeChild(e)}}function Rm(t,l,e,a){for(;t.nodeType===1;){var n=e;if(t.nodeName.toLowerCase()!==l.toLowerCase()){if(!a&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(a){if(!t[Ua])switch(l){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(u=t.getAttribute("rel"),u==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(u!==n.rel||t.getAttribute("href")!==(n.href==null||n.href===""?null:n.href)||t.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin)||t.getAttribute("title")!==(n.title==null?null:n.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(u=t.getAttribute("src"),(u!==(n.src==null?null:n.src)||t.getAttribute("type")!==(n.type==null?null:n.type)||t.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin))&&u&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(l==="input"&&t.type==="hidden"){var u=n.name==null?null:""+n.name;if(n.type==="hidden"&&t.getAttribute("name")===u)return t}else return t;if(t=vl(t.nextSibling),t===null)break}return null}function Bm(t,l,e){if(l==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!e||(t=vl(t.nextSibling),t===null))return null;return t}function Wr(t,l){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!l||(t=vl(t.nextSibling),t===null))return null;return t}function Fc(t){return t.data==="$?"||t.data==="$~"}function $c(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function qm(t,l){var e=t.ownerDocument;if(t.data==="$~")t._reactRetry=l;else if(t.data!=="$?"||e.readyState!=="loading")l();else{var a=function(){l(),e.removeEventListener("DOMContentLoaded",a)};e.addEventListener("DOMContentLoaded",a),t._reactRetry=a}}function vl(t){for(;t!=null;t=t.nextSibling){var l=t.nodeType;if(l===1||l===3)break;if(l===8){if(l=t.data,l==="$"||l==="$!"||l==="$?"||l==="$~"||l==="&"||l==="F!"||l==="F")break;if(l==="/$"||l==="/&")return null}}return t}var Ic=null;function Fr(t){t=t.nextSibling;for(var l=0;t;){if(t.nodeType===8){var e=t.data;if(e==="/$"||e==="/&"){if(l===0)return vl(t.nextSibling);l--}else e!=="$"&&e!=="$!"&&e!=="$?"&&e!=="$~"&&e!=="&"||l++}t=t.nextSibling}return null}function $r(t){t=t.previousSibling;for(var l=0;t;){if(t.nodeType===8){var e=t.data;if(e==="$"||e==="$!"||e==="$?"||e==="$~"||e==="&"){if(l===0)return t;l--}else e!=="/$"&&e!=="/&"||l++}t=t.previousSibling}return null}function Ir(t,l,e){switch(l=_u(e),t){case"html":if(t=l.documentElement,!t)throw Error(m(452));return t;case"head":if(t=l.head,!t)throw Error(m(453));return t;case"body":if(t=l.body,!t)throw Error(m(454));return t;default:throw Error(m(451))}}function gn(t){for(var l=t.attributes;l.length;)t.removeAttributeNode(l[0]);ti(t)}var pl=new Map,Pr=new Set;function Nu(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var Wl=j.d;j.d={f:Ym,r:Gm,D:Xm,C:Qm,L:Lm,m:Zm,X:Vm,S:wm,M:Km};function Ym(){var t=Wl.f(),l=Su();return t||l}function Gm(t){var l=Ke(t);l!==null&&l.tag===5&&l.type==="form"?yo(l):Wl.r(t)}var Ea=typeof document>"u"?null:document;function td(t,l,e){var a=Ea;if(a&&typeof l=="string"&&l){var n=ol(l);n='link[rel="'+t+'"][href="'+n+'"]',typeof e=="string"&&(n+='[crossorigin="'+e+'"]'),Pr.has(n)||(Pr.add(n),t={rel:t,crossOrigin:e,href:l},a.querySelector(n)===null&&(l=a.createElement("link"),Ut(l,"link",t),jt(l),a.head.appendChild(l)))}}function Xm(t){Wl.D(t),td("dns-prefetch",t,null)}function Qm(t,l){Wl.C(t,l),td("preconnect",t,l)}function Lm(t,l,e){Wl.L(t,l,e);var a=Ea;if(a&&t&&l){var n='link[rel="preload"][as="'+ol(l)+'"]';l==="image"&&e&&e.imageSrcSet?(n+='[imagesrcset="'+ol(e.imageSrcSet)+'"]',typeof e.imageSizes=="string"&&(n+='[imagesizes="'+ol(e.imageSizes)+'"]')):n+='[href="'+ol(t)+'"]';var u=n;switch(l){case"style":u=Ta(t);break;case"script":u=ja(t)}pl.has(u)||(t=B({rel:"preload",href:l==="image"&&e&&e.imageSrcSet?void 0:t,as:l},e),pl.set(u,t),a.querySelector(n)!==null||l==="style"&&a.querySelector(yn(u))||l==="script"&&a.querySelector(vn(u))||(l=a.createElement("link"),Ut(l,"link",t),jt(l),a.head.appendChild(l)))}}function Zm(t,l){Wl.m(t,l);var e=Ea;if(e&&t){var a=l&&typeof l.as=="string"?l.as:"script",n='link[rel="modulepreload"][as="'+ol(a)+'"][href="'+ol(t)+'"]',u=n;switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":u=ja(t)}if(!pl.has(u)&&(t=B({rel:"modulepreload",href:t},l),pl.set(u,t),e.querySelector(n)===null)){switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(e.querySelector(vn(u)))return}a=e.createElement("link"),Ut(a,"link",t),jt(a),e.head.appendChild(a)}}}function wm(t,l,e){Wl.S(t,l,e);var a=Ea;if(a&&t){var n=Je(a).hoistableStyles,u=Ta(t);l=l||"default";var i=n.get(u);if(!i){var c={loading:0,preload:null};if(i=a.querySelector(yn(u)))c.loading=5;else{t=B({rel:"stylesheet",href:t,"data-precedence":l},e),(e=pl.get(u))&&Pc(t,e);var s=i=a.createElement("link");jt(s),Ut(s,"link",t),s._p=new Promise(function(g,p){s.onload=g,s.onerror=p}),s.addEventListener("load",function(){c.loading|=1}),s.addEventListener("error",function(){c.loading|=2}),c.loading|=4,Ou(i,l,a)}i={type:"stylesheet",instance:i,count:1,state:c},n.set(u,i)}}}function Vm(t,l){Wl.X(t,l);var e=Ea;if(e&&t){var a=Je(e).hoistableScripts,n=ja(t),u=a.get(n);u||(u=e.querySelector(vn(n)),u||(t=B({src:t,async:!0},l),(l=pl.get(n))&&tf(t,l),u=e.createElement("script"),jt(u),Ut(u,"link",t),e.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},a.set(n,u))}}function Km(t,l){Wl.M(t,l);var e=Ea;if(e&&t){var a=Je(e).hoistableScripts,n=ja(t),u=a.get(n);u||(u=e.querySelector(vn(n)),u||(t=B({src:t,async:!0,type:"module"},l),(l=pl.get(n))&&tf(t,l),u=e.createElement("script"),jt(u),Ut(u,"link",t),e.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},a.set(n,u))}}function ld(t,l,e,a){var n=(n=Z.current)?Nu(n):null;if(!n)throw Error(m(446));switch(t){case"meta":case"title":return null;case"style":return typeof e.precedence=="string"&&typeof e.href=="string"?(l=Ta(e.href),e=Je(n).hoistableStyles,a=e.get(l),a||(a={type:"style",instance:null,count:0,state:null},e.set(l,a)),a):{type:"void",instance:null,count:0,state:null};case"link":if(e.rel==="stylesheet"&&typeof e.href=="string"&&typeof e.precedence=="string"){t=Ta(e.href);var u=Je(n).hoistableStyles,i=u.get(t);if(i||(n=n.ownerDocument||n,i={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},u.set(t,i),(u=n.querySelector(yn(t)))&&!u._p&&(i.instance=u,i.state.loading=5),pl.has(t)||(e={rel:"preload",as:"style",href:e.href,crossOrigin:e.crossOrigin,integrity:e.integrity,media:e.media,hrefLang:e.hrefLang,referrerPolicy:e.referrerPolicy},pl.set(t,e),u||Jm(n,t,e,i.state))),l&&a===null)throw Error(m(528,""));return i}if(l&&a!==null)throw Error(m(529,""));return null;case"script":return l=e.async,e=e.src,typeof e=="string"&&l&&typeof l!="function"&&typeof l!="symbol"?(l=ja(e),e=Je(n).hoistableScripts,a=e.get(l),a||(a={type:"script",instance:null,count:0,state:null},e.set(l,a)),a):{type:"void",instance:null,count:0,state:null};default:throw Error(m(444,t))}}function Ta(t){return'href="'+ol(t)+'"'}function yn(t){return'link[rel="stylesheet"]['+t+"]"}function ed(t){return B({},t,{"data-precedence":t.precedence,precedence:null})}function Jm(t,l,e,a){t.querySelector('link[rel="preload"][as="style"]['+l+"]")?a.loading=1:(l=t.createElement("link"),a.preload=l,l.addEventListener("load",function(){return a.loading|=1}),l.addEventListener("error",function(){return a.loading|=2}),Ut(l,"link",e),jt(l),t.head.appendChild(l))}function ja(t){return'[src="'+ol(t)+'"]'}function vn(t){return"script[async]"+t}function ad(t,l,e){if(l.count++,l.instance===null)switch(l.type){case"style":var a=t.querySelector('style[data-href~="'+ol(e.href)+'"]');if(a)return l.instance=a,jt(a),a;var n=B({},e,{"data-href":e.href,"data-precedence":e.precedence,href:null,precedence:null});return a=(t.ownerDocument||t).createElement("style"),jt(a),Ut(a,"style",n),Ou(a,e.precedence,t),l.instance=a;case"stylesheet":n=Ta(e.href);var u=t.querySelector(yn(n));if(u)return l.state.loading|=4,l.instance=u,jt(u),u;a=ed(e),(n=pl.get(n))&&Pc(a,n),u=(t.ownerDocument||t).createElement("link"),jt(u);var i=u;return i._p=new Promise(function(c,s){i.onload=c,i.onerror=s}),Ut(u,"link",a),l.state.loading|=4,Ou(u,e.precedence,t),l.instance=u;case"script":return u=ja(e.src),(n=t.querySelector(vn(u)))?(l.instance=n,jt(n),n):(a=e,(n=pl.get(u))&&(a=B({},e),tf(a,n)),t=t.ownerDocument||t,n=t.createElement("script"),jt(n),Ut(n,"link",a),t.head.appendChild(n),l.instance=n);case"void":return null;default:throw Error(m(443,l.type))}else l.type==="stylesheet"&&(l.state.loading&4)===0&&(a=l.instance,l.state.loading|=4,Ou(a,e.precedence,t));return l.instance}function Ou(t,l,e){for(var a=e.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),n=a.length?a[a.length-1]:null,u=n,i=0;i<a.length;i++){var c=a[i];if(c.dataset.precedence===l)u=c;else if(u!==n)break}u?u.parentNode.insertBefore(t,u.nextSibling):(l=e.nodeType===9?e.head:e,l.insertBefore(t,l.firstChild))}function Pc(t,l){t.crossOrigin==null&&(t.crossOrigin=l.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=l.referrerPolicy),t.title==null&&(t.title=l.title)}function tf(t,l){t.crossOrigin==null&&(t.crossOrigin=l.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=l.referrerPolicy),t.integrity==null&&(t.integrity=l.integrity)}var Du=null;function nd(t,l,e){if(Du===null){var a=new Map,n=Du=new Map;n.set(e,a)}else n=Du,a=n.get(e),a||(a=new Map,n.set(e,a));if(a.has(t))return a;for(a.set(t,null),e=e.getElementsByTagName(t),n=0;n<e.length;n++){var u=e[n];if(!(u[Ua]||u[_t]||t==="link"&&u.getAttribute("rel")==="stylesheet")&&u.namespaceURI!=="http://www.w3.org/2000/svg"){var i=u.getAttribute(l)||"";i=t+i;var c=a.get(i);c?c.push(u):a.set(i,[u])}}return a}function ud(t,l,e){t=t.ownerDocument||t,t.head.insertBefore(e,l==="title"?t.querySelector("head > title"):null)}function km(t,l,e){if(e===1||l.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof l.precedence!="string"||typeof l.href!="string"||l.href==="")break;return!0;case"link":if(typeof l.rel!="string"||typeof l.href!="string"||l.href===""||l.onLoad||l.onError)break;return l.rel==="stylesheet"?(t=l.disabled,typeof l.precedence=="string"&&t==null):!0;case"script":if(l.async&&typeof l.async!="function"&&typeof l.async!="symbol"&&!l.onLoad&&!l.onError&&l.src&&typeof l.src=="string")return!0}return!1}function id(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function Wm(t,l,e,a){if(e.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(e.state.loading&4)===0){if(e.instance===null){var n=Ta(a.href),u=l.querySelector(yn(n));if(u){l=u._p,l!==null&&typeof l=="object"&&typeof l.then=="function"&&(t.count++,t=Uu.bind(t),l.then(t,t)),e.state.loading|=4,e.instance=u,jt(u);return}u=l.ownerDocument||l,a=ed(a),(n=pl.get(n))&&Pc(a,n),u=u.createElement("link"),jt(u);var i=u;i._p=new Promise(function(c,s){i.onload=c,i.onerror=s}),Ut(u,"link",a),e.instance=u}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(e,l),(l=e.state.preload)&&(e.state.loading&3)===0&&(t.count++,e=Uu.bind(t),l.addEventListener("load",e),l.addEventListener("error",e))}}var lf=0;function Fm(t,l){return t.stylesheets&&t.count===0&&Hu(t,t.stylesheets),0<t.count||0<t.imgCount?function(e){var a=setTimeout(function(){if(t.stylesheets&&Hu(t,t.stylesheets),t.unsuspend){var u=t.unsuspend;t.unsuspend=null,u()}},6e4+l);0<t.imgBytes&&lf===0&&(lf=62500*Om());var n=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&Hu(t,t.stylesheets),t.unsuspend)){var u=t.unsuspend;t.unsuspend=null,u()}},(t.imgBytes>lf?50:800)+l);return t.unsuspend=e,function(){t.unsuspend=null,clearTimeout(a),clearTimeout(n)}}:null}function Uu(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Hu(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Cu=null;function Hu(t,l){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Cu=new Map,l.forEach($m,t),Cu=null,Uu.call(t))}function $m(t,l){if(!(l.state.loading&4)){var e=Cu.get(t);if(e)var a=e.get(null);else{e=new Map,Cu.set(t,e);for(var n=t.querySelectorAll("link[data-precedence],style[data-precedence]"),u=0;u<n.length;u++){var i=n[u];(i.nodeName==="LINK"||i.getAttribute("media")!=="not all")&&(e.set(i.dataset.precedence,i),a=i)}a&&e.set(null,a)}n=l.instance,i=n.getAttribute("data-precedence"),u=e.get(i)||a,u===a&&e.set(null,n),e.set(i,n),this.count++,a=Uu.bind(this),n.addEventListener("load",a),n.addEventListener("error",a),u?u.parentNode.insertBefore(n,u.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(n,t.firstChild)),l.state.loading|=4}}var pn={$$typeof:Ct,Provider:null,Consumer:null,_currentValue:Y,_currentValue2:Y,_threadCount:0};function Im(t,l,e,a,n,u,i,c,s){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Fu(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Fu(0),this.hiddenUpdates=Fu(null),this.identifierPrefix=a,this.onUncaughtError=n,this.onCaughtError=u,this.onRecoverableError=i,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=s,this.incompleteTransitions=new Map}function cd(t,l,e,a,n,u,i,c,s,g,p,x){return t=new Im(t,l,e,i,s,g,p,x,c),l=1,u===!0&&(l|=24),u=el(3,null,null,l),t.current=u,u.stateNode=t,l=Hi(),l.refCount++,t.pooledCache=l,l.refCount++,u.memoizedState={element:a,isDehydrated:e,cache:l},Yi(u),t}function fd(t){return t?(t=aa,t):aa}function sd(t,l,e,a,n,u){n=fd(n),a.context===null?a.context=n:a.pendingContext=n,a=ie(l),a.payload={element:e},u=u===void 0?null:u,u!==null&&(a.callback=u),e=ce(t,a,l),e!==null&&(Wt(e,t,l),Wa(e,t,l))}function od(t,l){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var e=t.retryLane;t.retryLane=e!==0&&e<l?e:l}}function ef(t,l){od(t,l),(t=t.alternate)&&od(t,l)}function rd(t){if(t.tag===13||t.tag===31){var l=Oe(t,67108864);l!==null&&Wt(l,t,67108864),ef(t,67108864)}}function dd(t){if(t.tag===13||t.tag===31){var l=cl();l=$u(l);var e=Oe(t,l);e!==null&&Wt(e,t,l),ef(t,l)}}var Ru=!0;function Pm(t,l,e,a){var n=b.T;b.T=null;var u=j.p;try{j.p=2,af(t,l,e,a)}finally{j.p=u,b.T=n}}function th(t,l,e,a){var n=b.T;b.T=null;var u=j.p;try{j.p=8,af(t,l,e,a)}finally{j.p=u,b.T=n}}function af(t,l,e,a){if(Ru){var n=nf(a);if(n===null)Zc(t,l,a,Bu,e),hd(t,a);else if(eh(n,t,l,e,a))a.stopPropagation();else if(hd(t,a),l&4&&-1<lh.indexOf(t)){for(;n!==null;){var u=Ke(n);if(u!==null)switch(u.tag){case 3:if(u=u.stateNode,u.current.memoizedState.isDehydrated){var i=Te(u.pendingLanes);if(i!==0){var c=u;for(c.pendingLanes|=2,c.entangledLanes|=2;i;){var s=1<<31-tl(i);c.entanglements[1]|=s,i&=~s}Nl(u),(P&6)===0&&(pu=It()+500,dn(0))}}break;case 31:case 13:c=Oe(u,2),c!==null&&Wt(c,u,2),Su(),ef(u,2)}if(u=nf(a),u===null&&Zc(t,l,a,Bu,e),u===n)break;n=u}n!==null&&a.stopPropagation()}else Zc(t,l,a,null,e)}}function nf(t){return t=ii(t),uf(t)}var Bu=null;function uf(t){if(Bu=null,t=Ve(t),t!==null){var l=R(t);if(l===null)t=null;else{var e=l.tag;if(e===13){if(t=et(l),t!==null)return t;t=null}else if(e===31){if(t=rt(l),t!==null)return t;t=null}else if(e===3){if(l.stateNode.current.memoizedState.isDehydrated)return l.tag===3?l.stateNode.containerInfo:null;t=null}else l!==t&&(t=null)}}return Bu=t,null}function md(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Xd()){case Sf:return 2;case xf:return 8;case Tn:case Qd:return 32;case zf:return 268435456;default:return 32}default:return 32}}var cf=!1,pe=null,be=null,Se=null,bn=new Map,Sn=new Map,xe=[],lh="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function hd(t,l){switch(t){case"focusin":case"focusout":pe=null;break;case"dragenter":case"dragleave":be=null;break;case"mouseover":case"mouseout":Se=null;break;case"pointerover":case"pointerout":bn.delete(l.pointerId);break;case"gotpointercapture":case"lostpointercapture":Sn.delete(l.pointerId)}}function xn(t,l,e,a,n,u){return t===null||t.nativeEvent!==u?(t={blockedOn:l,domEventName:e,eventSystemFlags:a,nativeEvent:u,targetContainers:[n]},l!==null&&(l=Ke(l),l!==null&&rd(l)),t):(t.eventSystemFlags|=a,l=t.targetContainers,n!==null&&l.indexOf(n)===-1&&l.push(n),t)}function eh(t,l,e,a,n){switch(l){case"focusin":return pe=xn(pe,t,l,e,a,n),!0;case"dragenter":return be=xn(be,t,l,e,a,n),!0;case"mouseover":return Se=xn(Se,t,l,e,a,n),!0;case"pointerover":var u=n.pointerId;return bn.set(u,xn(bn.get(u)||null,t,l,e,a,n)),!0;case"gotpointercapture":return u=n.pointerId,Sn.set(u,xn(Sn.get(u)||null,t,l,e,a,n)),!0}return!1}function gd(t){var l=Ve(t.target);if(l!==null){var e=R(l);if(e!==null){if(l=e.tag,l===13){if(l=et(e),l!==null){t.blockedOn=l,_f(t.priority,function(){dd(e)});return}}else if(l===31){if(l=rt(e),l!==null){t.blockedOn=l,_f(t.priority,function(){dd(e)});return}}else if(l===3&&e.stateNode.current.memoizedState.isDehydrated){t.blockedOn=e.tag===3?e.stateNode.containerInfo:null;return}}}t.blockedOn=null}function qu(t){if(t.blockedOn!==null)return!1;for(var l=t.targetContainers;0<l.length;){var e=nf(t.nativeEvent);if(e===null){e=t.nativeEvent;var a=new e.constructor(e.type,e);ui=a,e.target.dispatchEvent(a),ui=null}else return l=Ke(e),l!==null&&rd(l),t.blockedOn=e,!1;l.shift()}return!0}function yd(t,l,e){qu(t)&&e.delete(l)}function ah(){cf=!1,pe!==null&&qu(pe)&&(pe=null),be!==null&&qu(be)&&(be=null),Se!==null&&qu(Se)&&(Se=null),bn.forEach(yd),Sn.forEach(yd)}function Yu(t,l){t.blockedOn===l&&(t.blockedOn=null,cf||(cf=!0,E.unstable_scheduleCallback(E.unstable_NormalPriority,ah)))}var Gu=null;function vd(t){Gu!==t&&(Gu=t,E.unstable_scheduleCallback(E.unstable_NormalPriority,function(){Gu===t&&(Gu=null);for(var l=0;l<t.length;l+=3){var e=t[l],a=t[l+1],n=t[l+2];if(typeof a!="function"){if(uf(a||e)===null)continue;break}var u=Ke(e);u!==null&&(t.splice(l,3),l-=3,nc(u,{pending:!0,data:n,method:e.method,action:a},a,n))}}))}function Ma(t){function l(s){return Yu(s,t)}pe!==null&&Yu(pe,t),be!==null&&Yu(be,t),Se!==null&&Yu(Se,t),bn.forEach(l),Sn.forEach(l);for(var e=0;e<xe.length;e++){var a=xe[e];a.blockedOn===t&&(a.blockedOn=null)}for(;0<xe.length&&(e=xe[0],e.blockedOn===null);)gd(e),e.blockedOn===null&&xe.shift();if(e=(t.ownerDocument||t).$$reactFormReplay,e!=null)for(a=0;a<e.length;a+=3){var n=e[a],u=e[a+1],i=n[Zt]||null;if(typeof u=="function")i||vd(e);else if(i){var c=null;if(u&&u.hasAttribute("formAction")){if(n=u,i=u[Zt]||null)c=i.formAction;else if(uf(n)!==null)continue}else c=i.action;typeof c=="function"?e[a+1]=c:(e.splice(a,3),a-=3),vd(e)}}}function pd(){function t(u){u.canIntercept&&u.info==="react-transition"&&u.intercept({handler:function(){return new Promise(function(i){return n=i})},focusReset:"manual",scroll:"manual"})}function l(){n!==null&&(n(),n=null),a||setTimeout(e,20)}function e(){if(!a&&!navigation.transition){var u=navigation.currentEntry;u&&u.url!=null&&navigation.navigate(u.url,{state:u.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var a=!1,n=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",l),navigation.addEventListener("navigateerror",l),setTimeout(e,100),function(){a=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",l),navigation.removeEventListener("navigateerror",l),n!==null&&(n(),n=null)}}}function ff(t){this._internalRoot=t}Xu.prototype.render=ff.prototype.render=function(t){var l=this._internalRoot;if(l===null)throw Error(m(409));var e=l.current,a=cl();sd(e,a,t,l,null,null)},Xu.prototype.unmount=ff.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var l=t.containerInfo;sd(t.current,2,null,t,null,null),Su(),l[we]=null}};function Xu(t){this._internalRoot=t}Xu.prototype.unstable_scheduleHydration=function(t){if(t){var l=Mf();t={blockedOn:null,target:t,priority:l};for(var e=0;e<xe.length&&l!==0&&l<xe[e].priority;e++);xe.splice(e,0,t),e===0&&gd(t)}};var bd=T.version;if(bd!=="19.2.3")throw Error(m(527,bd,"19.2.3"));j.findDOMNode=function(t){var l=t._reactInternals;if(l===void 0)throw typeof t.render=="function"?Error(m(188)):(t=Object.keys(t).join(","),Error(m(268,t)));return t=A(l),t=t!==null?K(t):null,t=t===null?null:t.stateNode,t};var nh={bundleType:0,version:"19.2.3",rendererPackageName:"react-dom",currentDispatcherRef:b,reconcilerVersion:"19.2.3"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Qu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Qu.isDisabled&&Qu.supportsFiber)try{Na=Qu.inject(nh),Pt=Qu}catch{}}return An.createRoot=function(t,l){if(!C(t))throw Error(m(299));var e=!1,a="",n=jo,u=Mo,i=_o;return l!=null&&(l.unstable_strictMode===!0&&(e=!0),l.identifierPrefix!==void 0&&(a=l.identifierPrefix),l.onUncaughtError!==void 0&&(n=l.onUncaughtError),l.onCaughtError!==void 0&&(u=l.onCaughtError),l.onRecoverableError!==void 0&&(i=l.onRecoverableError)),l=cd(t,1,!1,null,null,e,a,null,n,u,i,pd),t[we]=l.current,Lc(t),new ff(l)},An.hydrateRoot=function(t,l,e){if(!C(t))throw Error(m(299));var a=!1,n="",u=jo,i=Mo,c=_o,s=null;return e!=null&&(e.unstable_strictMode===!0&&(a=!0),e.identifierPrefix!==void 0&&(n=e.identifierPrefix),e.onUncaughtError!==void 0&&(u=e.onUncaughtError),e.onCaughtError!==void 0&&(i=e.onCaughtError),e.onRecoverableError!==void 0&&(c=e.onRecoverableError),e.formState!==void 0&&(s=e.formState)),l=cd(t,1,!0,l,e??null,a,n,s,u,i,c,pd),l.context=fd(null),e=l.current,a=cl(),a=$u(a),n=ie(a),n.callback=null,ce(e,n,a),e=a,l.current.lanes=e,Da(l,e),Nl(l),t[we]=l.current,Lc(t),new Xu(l)},An.version="19.2.3",An}var Nd;function hh(){if(Nd)return rf.exports;Nd=1;function E(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(E)}catch(T){console.error(T)}}return E(),rf.exports=mh(),rf.exports}var gh=hh();const yh=E=>E.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),vh=E=>E.replace(/^([A-Z])|[\s-_]+(\w)/g,(T,D,m)=>m?m.toUpperCase():D.toLowerCase()),Od=E=>{const T=vh(E);return T.charAt(0).toUpperCase()+T.slice(1)},Cd=(...E)=>E.filter((T,D,m)=>!!T&&T.trim()!==""&&m.indexOf(T)===D).join(" ").trim(),ph=E=>{for(const T in E)if(T.startsWith("aria-")||T==="role"||T==="title")return!0};var bh={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const Sh=Yt.forwardRef(({color:E="currentColor",size:T=24,strokeWidth:D=2,absoluteStrokeWidth:m,className:C="",children:R,iconNode:et,...rt},_)=>Yt.createElement("svg",{ref:_,...bh,width:T,height:T,stroke:E,strokeWidth:m?Number(D)*24/Number(T):D,className:Cd("lucide",C),...!R&&!ph(rt)&&{"aria-hidden":"true"},...rt},[...et.map(([A,K])=>Yt.createElement(A,K)),...Array.isArray(R)?R:[R]]));const Et=(E,T)=>{const D=Yt.forwardRef(({className:m,...C},R)=>Yt.createElement(Sh,{ref:R,iconNode:T,className:Cd(`lucide-${yh(Od(E))}`,`lucide-${E}`,m),...C}));return D.displayName=Od(E),D};const xh=[["path",{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",key:"1yiouv"}],["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}]],vf=Et("award",xh);const zh=[["path",{d:"M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16",key:"jecpp"}],["rect",{width:"20",height:"14",x:"2",y:"6",rx:"2",key:"i6l2r4"}]],Hd=Et("briefcase",zh);const Ah=[["path",{d:"M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z",key:"18u6gg"}],["circle",{cx:"12",cy:"13",r:"3",key:"1vg3eu"}]],Eh=Et("camera",Ah);const Th=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],jh=Et("circle-alert",Th);const Mh=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],_h=Et("circle-check-big",Mh);const Nh=[["path",{d:"m16 18 6-6-6-6",key:"eg8j8"}],["path",{d:"m8 6-6 6 6 6",key:"ppft3o"}]],Dd=Et("code",Nh);const Oh=[["path",{d:"M12 15V3",key:"m9g1x1"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["path",{d:"m7 10 5 5 5-5",key:"brsn70"}]],gf=Et("download",Oh);const Dh=[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]],Uh=Et("external-link",Dh);const Ch=[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]],Hh=Et("github",Ch);const Rh=[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]],Bh=Et("linkedin",Rh);const qh=[["path",{d:"M21.2 8.4c.5.38.8.97.8 1.6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 .8-1.6l8-6a2 2 0 0 1 2.4 0l8 6Z",key:"1jhwl8"}],["path",{d:"m22 10-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 10",key:"1qfld7"}]],Yh=Et("mail-open",qh);const Gh=[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]],Rd=Et("map-pin",Gh);const Xh=[["path",{d:"M4 5h16",key:"1tepv9"}],["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 19h16",key:"1djgab"}]],Qh=Et("menu",Xh);const Lh=[["path",{d:"M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",key:"9njp5v"}]],Zh=Et("phone",Lh);const wh=[["path",{d:"M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z",key:"m3kijz"}],["path",{d:"m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z",key:"1fmvmk"}],["path",{d:"M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0",key:"1f8sc4"}],["path",{d:"M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5",key:"qeys4"}]],Vh=Et("rocket",wh);const Kh=[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]],Jh=Et("send",Kh);const kh=[["path",{d:"M11 2v2",key:"1539x4"}],["path",{d:"M5 2v2",key:"1yf1q8"}],["path",{d:"M5 3H4a2 2 0 0 0-2 2v4a6 6 0 0 0 12 0V5a2 2 0 0 0-2-2h-1",key:"rb5t3r"}],["path",{d:"M8 15a6 6 0 0 0 12 0v-3",key:"x18d4x"}],["circle",{cx:"20",cy:"10",r:"2",key:"ts1r5v"}]],Wh=Et("stethoscope",kh);const Fh=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744",key:"16gr8j"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]],$h=Et("users",Fh);const Ih=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],Ph=Et("x",Ih);const t1=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]],Bd=Et("zap",t1),l1=()=>{const[E,T]=Yt.useState({x:0,y:0}),[D,m]=Yt.useState(!1);return Yt.useEffect(()=>{let C,R=0,et=0,rt=0,_=0;const A=tt=>{rt=tt.clientX,_=tt.clientY},K=()=>{R+=(rt-R)*.15,et+=(_-et)*.15,T({x:R,y:et}),C=requestAnimationFrame(K)},B=tt=>{tt.target.closest("a, button, input, textarea")?m(!0):m(!1)};return window.addEventListener("mousemove",A),window.addEventListener("mouseover",B),C=requestAnimationFrame(K),()=>{window.removeEventListener("mousemove",A),window.removeEventListener("mouseover",B),cancelAnimationFrame(C)}},[]),f.jsx("div",{className:"custom-cursor",style:{left:`${E.x}px`,top:`${E.y}px`,transform:`translate(-50%, -50%) scale(${D?1.5:1})`}})},Fl=({children:E,className:T="",hover:D=!1})=>f.jsx("div",{className:`glass-card ${D?"glass-card-hover":""} ${T}`,children:E}),Lu=({children:E,icon:T})=>f.jsxs("span",{className:"tag",children:[T&&f.jsx(T,{size:14}),E]}),Zu=({icon:E,number:T,label:D})=>f.jsxs("div",{className:"stat-card",children:[f.jsx(E,{className:"stat-icon",size:32}),f.jsx("div",{className:"stat-number",children:T}),f.jsx("div",{className:"stat-label",children:D})]}),e1=({currentPage:E,setCurrentPage:T,mobileMenuOpen:D,setMobileMenuOpen:m})=>{const C=["home","about","experience","projects","contact"];return f.jsx("nav",{className:"navbar",children:f.jsxs("div",{className:"nav-content",children:[f.jsxs("div",{className:"nav-brand",onClick:()=>T("home"),children:[f.jsx("img",{src:"/nav-logo.png",alt:"Logo",className:"nav-logo"}),"Abhay Korat"]}),f.jsx("button",{className:"mobile-menu-btn",onClick:()=>m(!D),children:D?f.jsx(Ph,{size:24}):f.jsx(Qh,{size:24})}),f.jsx("div",{className:`nav-links ${D?"nav-links-open":""}`,children:C.map(R=>f.jsx("a",{onClick:()=>{T(R),m(!1)},className:E===R?"active":"",children:R.charAt(0).toUpperCase()+R.slice(1)},R))})]})})},Ud=({setCurrentPage:E})=>f.jsx("div",{className:"page home-page",children:f.jsxs(Fl,{className:"hero-card",children:[f.jsxs("div",{className:"profile-container",children:[f.jsx("div",{className:"star-field"}),f.jsx("div",{className:"cyber-orbit orbit-1"}),f.jsx("div",{className:"cyber-orbit orbit-2"}),f.jsx("div",{className:"cyber-orbit orbit-3"}),f.jsxs("div",{className:"profile-image-wrapper",children:[f.jsx("img",{src:"/spaceprofile.png",alt:"Abhay Korat",className:"profile-image"}),f.jsx("div",{className:"hologram-overlay"})]})]}),f.jsx("h1",{className:"hero-title",children:"Abhay Korat"}),f.jsx("h2",{className:"hero-subtitle",children:"Lead Software Engineer | Mobile Architecture"}),f.jsx("p",{className:"hero-tagline",children:"Flutter & Native (iOS/Android) Expert • 11+ Years Building Scalable Fintech & Enterprise Solutions"}),f.jsxs("div",{className:"hero-buttons",children:[f.jsx("button",{className:"btn btn-primary",onClick:()=>E("projects"),children:"View Projects"}),f.jsx("button",{className:"btn btn-secondary",onClick:()=>E("contact"),children:"Get In Touch"})]}),f.jsxs("div",{className:"hero-tags",children:[f.jsx(Lu,{icon:Dd,children:"Flutter · Dart · Swift · Kotlin"}),f.jsx(Lu,{icon:Bd,children:"Clean Architecture · BLoC · MVVM"}),f.jsx(Lu,{icon:Eh,children:"CI/CD · Fastlane · Firebase"}),f.jsx(Lu,{icon:Hd,children:"Fintech · Enterprise · White-Label"})]}),f.jsxs("div",{className:"stats-grid",children:[f.jsx(Zu,{icon:vf,number:"11+",label:"Years Experience"}),f.jsx(Zu,{icon:Dd,number:"50+",label:"Apps works"}),f.jsx(Zu,{icon:$h,number:"12+",label:"Team Members Led"}),f.jsx(Zu,{icon:Vh,number:"40%",label:"Faster Releases"})]}),f.jsxs("div",{className:"download-section",style:{marginTop:"3rem",display:"flex",gap:"1rem",justifyContent:"center",flexWrap:"wrap"},children:[f.jsxs("a",{href:"/Abhay_Korat_Lead_Engineer.pdf",download:!0,className:"btn btn-primary",style:{display:"flex",alignItems:"center",gap:"0.5rem"},children:[f.jsx(gf,{size:18})," Download CV"]}),f.jsxs("a",{href:"/Cover_letter_Mobile_Engineer.pdf",download:!0,className:"btn-view",style:{display:"flex",alignItems:"center",gap:"0.5rem"},children:[f.jsx(gf,{size:18})," Download Cover Letter"]})]})]})}),a1=()=>{const E=[{category:"Mobile Development",skills:["Flutter","Dart","Swift","Objective-C","Kotlin","Java","iOS SDK","Android SDK"]},{category:"Architecture & Patterns",skills:["Clean Architecture","MVVM","BLoC/Cubit","Provider","Modular Architecture","Dependency Injection"]},{category:"State Management",skills:["BLoC","Cubit","Provider","Riverpod","GetX"]},{category:"CI/CD & DevOps",skills:["GitLab CI/CD","Fastlane","GitHub Actions","CodeMagic","Firebase App Distribution"]},{category:"Backend & Cloud",skills:["Firebase","REST APIs","GraphQL","Socket.io","Payment Gateways","Local Storage"]},{category:"Tools & Testing",skills:["Jira","Postman","Charles Proxy","XCTest","Flutter Integration Tests"]}];return f.jsxs("div",{className:"page about-page",children:[f.jsxs(Fl,{children:[f.jsx("h2",{className:"section-title",children:"Professional Summary"}),f.jsx("p",{className:"section-text",children:"Results-driven Lead Software Engineer with 11+ years of experience designing and delivering scalable, secure, high-traffic mobile applications in Fintech and Enterprise domains. Expert in Flutter, Dart, Swift, Kotlin, and end-to-end mobile architecture (Clean Architecture, MVVM, BLoC, modularization, dynamic theming, CI/CD). Proven track record leading engineering teams, mentoring developers, establishing coding standards, and driving on-time delivery of complex, multi-platform products."})]}),f.jsxs(Fl,{children:[f.jsx("h2",{className:"section-title",children:"Core Competencies"}),f.jsxs("ul",{className:"feature-list",children:[f.jsx("li",{children:"Architecting scalable mobile platforms supporting high-volume user onboarding and secure payment processing"}),f.jsx("li",{children:"Designing white-label Flutter architectures for multi-brand deployment with dynamic theming and configurations"}),f.jsx("li",{children:"Leading cross-functional teams of 12+ engineers with code reviews, sprint planning, and technical mentorship"}),f.jsx("li",{children:"Implementing CI/CD pipelines reducing release cycles by 40% and improving deployment efficiency"}),f.jsx("li",{children:"Optimizing app performance with 25% size reduction and 35% faster startup times"}),f.jsx("li",{children:"Establishing engineering standards, reusable component libraries, and modular architecture patterns"})]})]}),f.jsxs(Fl,{children:[f.jsx("h2",{className:"section-title",children:"Technical Skills"}),f.jsx("div",{className:"skills-section",children:E.map((T,D)=>f.jsxs("div",{className:"skill-category",children:[f.jsx("h3",{className:"skill-category-title",children:T.category}),f.jsx("div",{className:"skills-grid",children:T.skills.map(m=>f.jsx("div",{className:"skill-tag",children:m},m))})]},D))})]}),f.jsxs(Fl,{children:[f.jsx("h2",{className:"section-title",children:"Domain Expertise"}),f.jsxs("div",{className:"domain-grid",children:[f.jsxs("div",{className:"domain-card",children:[f.jsx(vf,{size:32,className:"domain-icon"}),f.jsx("h3",{children:"Fintech"}),f.jsx("p",{children:"KYC/AML verification, Payment workflows, Secure authentication, Trading platforms"})]}),f.jsxs("div",{className:"domain-card",children:[f.jsx(Hd,{size:32,className:"domain-icon"}),f.jsx("h3",{children:"Enterprise"}),f.jsx("p",{children:"Multi-tenancy, White-label apps, Role-based access, Offline-first architecture"})]}),f.jsxs("div",{className:"domain-card",children:[f.jsx(Wh,{size:32,className:"domain-icon"}),f.jsx("h3",{children:"Healthcare & Insurance"}),f.jsx("p",{children:"Real-time data feeds, Health & Fitness, Routine, inventory, Appointments, notifier streaming, High-volume coredata"})]}),f.jsxs("div",{className:"domain-card",children:[f.jsx(Bd,{size:32,className:"domain-icon"}),f.jsx("h3",{children:"High-Performance"}),f.jsx("p",{children:"Real-time data feeds, Socket integration, Market streaming, High-volume transactions"})]})]})]}),f.jsxs(Fl,{children:[f.jsx("h2",{className:"section-title",children:"Education"}),f.jsxs("div",{className:"education-section",children:[f.jsxs("div",{className:"education-item",children:[f.jsx("h3",{children:"Bachelor of Engineering – Computer Science & Engineering"}),f.jsx("p",{className:"education-detail",children:"Dr. Subhash University, Junagadh | 2012 – 2014"})]}),f.jsxs("div",{className:"education-item",children:[f.jsx("h3",{children:"Diploma in Computer Engineering"}),f.jsx("p",{className:"education-detail",children:"R.N.G. Patel Institute of Technology, Bardoli | 2008 – 2011"})]})]})]})]})},n1=()=>{const E=[{company:"Finoux Solutions Private Limited",location:"Mumbai, Maharashtra",role:"Lead Software Engineer",period:"Jul 2024 – Present",achievements:["Architecting next-gen Fintech & Enterprise mobile platforms supporting high-volume user onboarding, KYC/AML verification, and payment processing","Designed white-label Flutter architecture enabling single codebase deployment across multiple brands and environments","Established modular architecture and CI/CD pipelines using GitHub Actions + CodeMagic, reducing release cycles by 40%","Mentoring team of 12+ engineers, conducting code reviews, and driving sprint planning"]},{company:"Sunflower Lab",location:"Vadodara, Gujarat",role:"Senior Flutter Developer",period:"Jun 2022 – May 2024",achievements:["Led development of large-scale Flutter applications using BLoC, Flavors, and clean architecture patterns","Reduced app size by 25% and improved startup time by 35% through performance optimization","Implemented automated CI/CD pipelines with Fastlane and Firebase App Distribution","Mentored junior developers and conducted architecture reviews"]},{company:"Knackit",location:"Bengaluru, Karnataka",role:"Founding Engineer – iOS & Flutter Expert",period:"Sep 2020 – May 2022",achievements:["Built core product from scratch using Flutter and native iOS/Android modules as founding member","Established reusable component library and architecture patterns adopted company-wide","Collaborated with founders to define technical roadmap and prioritize features","Reduced app size by 50+ MB by replacing FFmpeg with native background method channels"]},{company:"CoderKube Technologies",location:"Surat, Gujarat",role:"Team Lead",period:"Apr 2019 – Aug 2020",achievements:["Led end-to-end delivery of multiple client projects with task allocation and quality management","Drove adoption of cross-platform Flutter strategy, reducing duplicate code by 60%","Managed project timelines and coordinated with stakeholders"]},{company:"BlueBell Apps",location:"Copenhagen, Denmark",role:"Mobile Application Developer",period:"Feb 2017 – Mar 2019",achievements:["Contract-based iOS development with continuous integration and delivery","Integrated Bank Verification, dynamic forms UI, multipart data handling","Implemented In-App Purchases, AdMob, and social media authentication"]},{company:"IBL Infotech",location:"Surat, Gujarat",role:"Senior iOS Developer",period:"Apr 2014 – Jan 2017",achievements:["Delivered 15+ production iOS apps using Swift and Objective-C","Integrated VOIP (CallKit), video streaming, and push notifications","Implemented In-App Purchases, AdMob, and Facebook Graph Auth"]}];return f.jsxs("div",{className:"page experience-page",children:[f.jsx("h1",{className:"page-title",children:"Professional Experience"}),f.jsx("div",{className:"timeline",children:E.map((T,D)=>f.jsxs(Fl,{hover:!0,className:"experience-card",children:[f.jsx("div",{className:"experience-header",children:f.jsxs("div",{children:[f.jsx("h3",{className:"experience-role",children:T.role}),f.jsx("h4",{className:"experience-company",children:T.company}),f.jsxs("div",{className:"experience-meta",children:[f.jsxs("span",{className:"experience-location",children:[f.jsx(Rd,{size:16}),T.location]}),f.jsx("span",{className:"experience-period",children:T.period})]})]})}),f.jsx("ul",{className:"achievement-list",children:T.achievements.map((m,C)=>f.jsx("li",{children:m},C))})]},D))})]})},u1=()=>{const E=[{title:"XTSApp",description:"Enterprise trading platform with dynamic theming, white-label branding, and real-time market feeds via multiple socket channels.",features:["Buy/Sell engine with portfolio management and watchlist","Real-time order updates with streaming mechanisms","Encrypted local storage + secure session management","Advanced charting and holdings/positions tracking"],tags:["Flutter",".NET","MySQL","Sockets","Firebase","Clean Architecture","BLoC"],link:"https://symphonyfintech.com/xts/"},{title:"BullForce",description:"Comprehensive fintech platform with KYC/AML onboarding, trading capabilities, and payment processing.",features:["Aadhar/PAN/Bank verification for onboarding","UPI/NetBanking/SIP/SWP workflows","Advanced scanners and dynamic market insights","Real-time positions, watchlists, and order book"],tags:["Flutter",".NET","MySQL","Sockets","CI/CD","BLoC","Payment Gateways"],link:"https://bullforce.co"},{title:"Spark - IRISH",description:"Dynamic page rendering engine with multi-platform secure authentication and responsive UI/UX.",features:["Conditional routing with dynamic page rendering","Microsoft Auth + deep link implementation","Single-space UI layout for multiple device form factors","Code obfuscation and platform-specific security hardening"],tags:["Flutter","JavaScript","React","Swift","Kotlin","CI/CD","MVVM","GetX"],link:"https://play.google.com/store/apps/details?id=com.wealthspectrum.app.spark&pcampaignid=web_share"},{title:"AlleyData",description:"Universal health and fitness application with comprehensive data synchronization and offline capabilities.",features:["Health tracking, routine management, and appointments","CoreData synchronization with API responses","Secure session management with notifiers","Universal UI for iPhone and iPad"],tags:["iOS","Swift","CoreData","RxSwift","Coredata","MVVM","CI/CD"],link:"https://alleydata.com/"},{title:"Knackit",description:"Founding member project with wallet, rewards, and multi-language support.",features:["Reduced app size by 50+ MB with native background methods","Wallet, Rewards, Coins, and Transactional modules","Localization for 12 Indian languages","Reusable component library adopted across teams"],tags:["Flutter","Swift","Kotlin","Laravel","MongoDB","CI/CD","Payment Gateways"],highlight:"Founders raised $1.5M funding",link:"https://www.crunchbase.com/organization/knackit"},{title:"Agrimedia",description:"Award-winning application in agriculture sector of India 2019.",features:["News module with dynamic images, videos, and deep links","Multilingual support (Hindi, English, Gujarati)","Q&A module for farmers to post and resolve issues","Analytics pipeline for user interactions"],tags:["Swift","MVC","PHP","MySQL"],highlight:"Award-winning app 2019",link:"https://apps.apple.com/in/app/agrimedia/id1434653553"},{title:"Legacy Vault",description:"Location-based service with real-time tracking and social features.",features:["Dynamic map annotations with Google Maps SDK","Offline location tracking with periodic sync","Google Places API check-in/out system","Real-time chat with Socket.io"],tags:["Flutter","Swift","Kotlin","Java","MySQL","Firebase","CI/CD"],link:"https://www.legacyvaultapp.com"},{title:"Benefact4",description:"Social donation platform with timeline feeds and media sharing.",features:["Donation feed with timeline and multi-layer filters","Widget-based social sharing with screenshot composer","Multipart uploads for media content","Subscription management and analytics tracking"],tags:["Flutter","Java","MySQL","Firebase","CI/CD","Payment Gateways"],link:"https://www.heeythere.com"},{title:"Baby led weaning guide recipes",description:"Social donation platform with timeline feeds and media sharing.",features:["Multi-language localization (DE, FR, EN, IT)","Universal UI for iPhone + iPad","WebKit rendering for WHO nutrition content","In-App Purchases for premium content","Payment processing with Subscription plans (iOS + Android)"],tags:["Swift","Localization","Auto-layout","In-app purchase","WebKit","Alamofire","Coredata"],link:"https://www.babyledrecipes.com/apps.html"}];return f.jsxs("div",{className:"page projects-page",children:[f.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"2rem",flexWrap:"wrap",gap:"1rem"},children:[f.jsx("h1",{className:"page-title",style:{marginBottom:0},children:"Featured Projects"}),f.jsxs("a",{href:"/Portfolio_Abhay_Korat.pdf",download:!0,className:"btn-view",style:{display:"flex",alignItems:"center",gap:"0.5rem"},children:[f.jsx(gf,{size:18})," Download Portfolio"]})]}),f.jsx("div",{className:"projects-grid",children:E.map((T,D)=>f.jsxs(Fl,{hover:!0,className:"project-card",children:[f.jsxs("div",{className:"project-header",children:[f.jsx("div",{className:"project-title-row",children:f.jsx("h3",{className:"project-title",children:T.title})}),T.link&&f.jsxs("a",{href:T.link,target:"_blank",rel:"noopener noreferrer",className:"btn-view",children:["View ",f.jsx(Uh,{size:14})]}),T.highlight&&f.jsxs("span",{className:"project-highlight",children:[f.jsx(vf,{size:16}),T.highlight]})]}),f.jsx("p",{className:"project-description",children:T.description}),f.jsxs("div",{className:"project-features",children:[f.jsx("h4",{children:"Key Features:"}),f.jsx("ul",{children:T.features.map((m,C)=>f.jsx("li",{children:m},C))})]}),f.jsx("div",{className:"project-tags",children:T.tags.map(m=>f.jsx("span",{className:"project-tag",children:m},m))})]},D))})]})},i1=()=>{const[E,T]=Yt.useState({name:"",email:"",mobile:"",message:""}),[D,m]=Yt.useState({type:"",message:""}),[C,R]=Yt.useState(!1),et=async _=>{_.preventDefault(),R(!0),m({type:"",message:""});try{const A=_.target;if((await fetch("https://formsubmit.co/koratabhaym@gmail.com",{method:"POST",body:new FormData(A),headers:{Accept:"application/json"}})).ok)m({type:"success",message:"Message transmitted successfully! I'll reach back through the cosmos soon. 🚀"}),T({name:"",email:"",mobile:"",message:""});else throw new Error("Failed to send")}catch{m({type:"error",message:"Transmission failed. Please use the direct contact links above or try again."})}finally{R(!1)}},rt=_=>{T({...E,[_.target.name]:_.target.value})};return f.jsxs("div",{className:"page contact-page",children:[f.jsx("div",{className:"contact-particles",children:[...Array(20)].map((_,A)=>f.jsx("div",{className:"particle",style:{left:`${Math.random()*100}%`,animationDelay:`${Math.random()*5}s`,animationDuration:`${5+Math.random()*10}s`}},A))}),f.jsx("div",{className:"contact-container",children:f.jsxs("div",{className:"contact-grid",children:[f.jsxs(Fl,{className:"contact-content",children:[f.jsx("div",{className:"neural-network",children:f.jsxs("svg",{viewBox:"0 0 400 400",className:"neural-svg",children:[f.jsx("defs",{children:f.jsxs("linearGradient",{id:"neuralGradient",x1:"0%",y1:"0%",x2:"100%",y2:"100%",children:[f.jsx("stop",{offset:"0%",stopColor:"#06b6d4",stopOpacity:"0.4"}),f.jsx("stop",{offset:"100%",stopColor:"#2563eb",stopOpacity:"0.4"})]})}),f.jsx("circle",{cx:"50",cy:"50",r:"4",fill:"#06b6d4",className:"neural-node"}),f.jsx("circle",{cx:"120",cy:"80",r:"4",fill:"#06b6d4",className:"neural-node"}),f.jsx("circle",{cx:"200",cy:"60",r:"4",fill:"#06b6d4",className:"neural-node"}),f.jsx("circle",{cx:"280",cy:"90",r:"4",fill:"#06b6d4",className:"neural-node"}),f.jsx("circle",{cx:"350",cy:"50",r:"4",fill:"#06b6d4",className:"neural-node"}),f.jsx("line",{x1:"50",y1:"50",x2:"120",y2:"80",stroke:"url(#neuralGradient)",strokeWidth:"1",className:"neural-line"}),f.jsx("line",{x1:"120",y1:"80",x2:"200",y2:"60",stroke:"url(#neuralGradient)",strokeWidth:"1",className:"neural-line"}),f.jsx("line",{x1:"200",y1:"60",x2:"280",y2:"90",stroke:"url(#neuralGradient)",strokeWidth:"1",className:"neural-line"}),f.jsx("line",{x1:"280",y1:"90",x2:"350",y2:"50",stroke:"url(#neuralGradient)",strokeWidth:"1",className:"neural-line"})]})}),f.jsx("h2",{className:"section-title",children:"Get In Touch"}),f.jsxs("div",{className:"contact-info",children:[f.jsxs("div",{className:"contact-item",children:[f.jsx(Rd,{size:20}),f.jsx("span",{children:"Surat, Gujarat, India"})]}),f.jsxs("div",{className:"contact-item",children:[f.jsx(Zh,{size:20}),f.jsx("a",{href:"tel:+919998529350",children:"+91 9998529350"})]}),f.jsxs("div",{className:"contact-item",children:[f.jsx(Yh,{size:20}),f.jsx("a",{href:"mailto:koratabhaym@gmail.com",children:"koratabhaym@gmail.com"})]}),f.jsxs("div",{className:"contact-item",children:[f.jsx(Bh,{size:20}),f.jsx("a",{href:"https://linkedin.com/in/abhaykorat",target:"_blank",rel:"noopener noreferrer",children:"linkedin.com/in/abhaykorat"})]}),f.jsxs("div",{className:"contact-item",children:[f.jsx(Hh,{size:20}),f.jsx("a",{href:"https://github.com/abhuzz",target:"_blank",rel:"noopener noreferrer",children:"github.com/abhuzz"})]})]}),f.jsxs("form",{className:"contact-form",onSubmit:et,children:[f.jsx("input",{type:"hidden",name:"_subject",value:"New Contact from Portfolio"}),f.jsx("input",{type:"hidden",name:"_captcha",value:"false"}),f.jsx("input",{type:"hidden",name:"_template",value:"table"}),f.jsxs("div",{className:"form-group",children:[f.jsx("label",{htmlFor:"name",children:"Name *"}),f.jsxs("div",{className:"holographic-input-wrapper",children:[f.jsx("input",{id:"name",type:"text",name:"name",value:E.name,onChange:rt,required:!0,placeholder:"Enter your name",disabled:C,className:"holographic-input"}),f.jsx("div",{className:"scan-line"})]})]}),f.jsxs("div",{className:"form-group",children:[f.jsx("label",{htmlFor:"email",children:"Email *"}),f.jsxs("div",{className:"holographic-input-wrapper",children:[f.jsx("input",{id:"email",type:"email",name:"email",value:E.email,onChange:rt,required:!0,placeholder:"your.email@example.com",disabled:C,className:"holographic-input"}),f.jsx("div",{className:"scan-line"})]})]}),f.jsxs("div",{className:"form-group",children:[f.jsx("label",{htmlFor:"mobile",children:"Mobile"}),f.jsxs("div",{className:"holographic-input-wrapper",children:[f.jsx("input",{id:"mobile",type:"tel",name:"mobile",value:E.mobile,onChange:rt,placeholder:"+91-XXXXXXXXXX",disabled:C,className:"holographic-input"}),f.jsx("div",{className:"scan-line"})]})]}),f.jsxs("div",{className:"form-group",children:[f.jsx("label",{htmlFor:"message",children:"Message *"}),f.jsxs("div",{className:"holographic-input-wrapper",children:[f.jsx("textarea",{id:"message",name:"message",value:E.message,onChange:rt,required:!0,rows:5,placeholder:"Your message or project inquiry...",disabled:C,className:"holographic-input"}),f.jsx("div",{className:"scan-line"})]})]}),D.message&&f.jsxs("div",{className:`status-message ${D.type}`,children:[D.type==="success"?f.jsx(_h,{size:20}):f.jsx(jh,{size:20}),D.message]}),f.jsxs("button",{type:"submit",className:"btn btn-primary cosmic-button",disabled:C||!E.name||!E.email||!E.message,children:[C?f.jsxs(f.Fragment,{children:[f.jsxs("div",{className:"orbital-spinner",children:[f.jsx("div",{className:"orbit"}),f.jsx("div",{className:"orbit"}),f.jsx("div",{className:"orbit"})]}),f.jsx("span",{children:"Transmitting..."})]}):f.jsxs(f.Fragment,{children:[f.jsx(Jh,{size:18}),f.jsx("span",{children:"Send Message"})]}),f.jsx("div",{className:"button-glow"})]})]})]}),f.jsx("div",{className:"contact-visual",children:f.jsxs("div",{className:"astronaut-wrapper",children:[f.jsx("img",{src:"/contact_us.png",alt:"Abhay in Space",className:"astronaut-image"}),f.jsx("div",{className:"visual-glow"})]})})]})})]})},c1=()=>{const[E,T]=Yt.useState("home"),[D,m]=Yt.useState(!1);Yt.useEffect(()=>{window.scrollTo(0,0)},[E]);const C=()=>{switch(E){case"home":return f.jsx(Ud,{setCurrentPage:T});case"about":return f.jsx(a1,{});case"experience":return f.jsx(n1,{});case"projects":return f.jsx(u1,{});case"contact":return f.jsx(i1,{});default:return f.jsx(Ud,{setCurrentPage:T})}};return f.jsxs("div",{className:"app",children:[f.jsx(l1,{}),f.jsx("div",{className:"animated-bg"}),f.jsx(e1,{currentPage:E,setCurrentPage:T,mobileMenuOpen:D,setMobileMenuOpen:m}),f.jsx("main",{className:"main-content",children:C()}),f.jsxs("footer",{className:"footer",children:[f.jsx("p",{children:"© 2026 Abhay Korat. Lead Software Engineer | Mobile Architecture Specialist"}),f.jsx("p",{className:"footer-tagline",children:"Building scalable mobile solutions • Flutter • iOS • Android"})]}),f.jsx("style",{children:`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          cursor: none;
        }

        body {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
          color: #e2e8f0;
          overflow-x: hidden;
        }

        .app {
          min-height: 100vh;
          position: relative;
        }

        .animated-bg {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: -1;
          background: linear-gradient(135deg, #0f172a 0%, #1e293b 25%, #0c4a6e 50%, #312e81 75%, #0f172a 100%);
          background-size: 400% 400%;
          animation: gradientShift 15s ease infinite;
        }

        @keyframes gradientShift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        .custom-cursor {
          position: fixed;
          width: 20px;
          height: 20px;
          border: 2px solid #2563eb;
          border-radius: 50%;
          pointer-events: none;
          z-index: 9999;
          transition: transform 0.15s ease, border-color 0.2s ease;
          box-shadow: 0 0 15px rgba(37, 99, 235, 0.5);
        }

        .glass-card {
          background: rgba(15, 23, 42, 0.4);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(148, 163, 184, 0.1);
          border-radius: 16px;
          padding: 2rem;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
          transition: all 0.3s ease;
        }

        .glass-card-hover:hover {
          transform: translateY(-4px);
          border-color: rgba(37, 99, 235, 0.3);
          box-shadow: 0 12px 40px rgba(37, 99, 235, 0.2);
        }

        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          background: rgba(15, 23, 42, 0.8);
          backdrop-filter: blur(12px);
          border-bottom: 1px solid rgba(148, 163, 184, 0.1);
        }

        .nav-content {
          max-width: 1600px;
          width: 90%;
          margin: 0 auto;
          padding: 1rem 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .nav-brand {
          font-size: 1.5rem;
          font-weight: 700;
          background: linear-gradient(135deg, #2563eb, #06b6d4);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          display: flex;
          align-items: center;
          gap: 0.75rem;
          cursor: pointer;
        }

        .nav-logo {
          width: 35px;
          height: 35px;
          object-fit: contain;
        }

        .nav-links {
          display: flex;
          gap: 2rem;
        }

        .nav-links a {
          color: #cbd5e1;
          text-decoration: none;
          font-weight: 500;
          transition: all 0.3s ease;
          position: relative;
        }

        .nav-links a:hover,
        .nav-links a.active {
          color: #2563eb;
        }

        .nav-links a::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 0;
          height: 2px;
          background: #2563eb;
          transition: width 0.3s ease;
        }

        .nav-links a:hover::after,
        .nav-links a.active::after {
          width: 100%;
        }

        .mobile-menu-btn {
          display: none;
          background: none;
          border: none;
          color: #e2e8f0;
          font-size: 1.5rem;
        }

        .main-content {
          max-width: 1600px;
          width: 90%;
          margin: 0 auto;
          padding: 6rem 2rem 4rem;
          min-height: calc(100vh - 150px);
        }

        @media (max-width: 768px) {
          .main-content {
            width: 100%;
            padding: 5rem 1rem 3rem;
          }
          
          .glass-card {
            padding: 1.25rem;
            border-radius: 12px;
          }
        }

        .page {
          animation: fadeIn 0.5s ease;
          width: 100%;
        }

        .home-page {
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: calc(100vh - 200px);
          width: 100%;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .hero-card {
          text-align: center;
          max-width: 900px;
          width: 100%;
          margin: 0 auto;
          position: relative;
          overflow: visible;
        }

        .profile-container {
          position: relative;
          width: 320px;
          height: 320px;
          margin: 0 auto -1.75rem; /* Negative margin to cover half the title height */
          display: flex;
          justify-content: center;
          align-items: center;
          overflow: visible;
          z-index: 10;
        }

        .star-field {
          position: absolute;
          width: 400px;
          height: 400px;
          background-image: 
            radial-gradient(1px 1px at 25px 35px, #fff, rgba(0,0,0,0)),
            radial-gradient(1px 1px at 50px 80px, #fff, rgba(0,0,0,0)),
            radial-gradient(1.5px 1.5px at 80px 120px, #fff, rgba(0,0,0,0)),
            radial-gradient(2px 2px at 130px 40px, #fff, rgba(0,0,0,0)),
            radial-gradient(1px 1px at 190px 70px, #fff, rgba(0,0,0,0)),
            radial-gradient(1.5px 1.5px at 210px 160px, #fff, rgba(0,0,0,0)),
            radial-gradient(1px 1px at 150px 210px, #fff, rgba(0,0,0,0)),
            radial-gradient(2px 2px at 40px 190px, #fff, rgba(0,0,0,0));
          background-size: 250px 250px;
          animation: flicker 4s ease-in-out infinite;
          opacity: 0.4;
          z-index: 1;
        }

        .cyber-orbit {
          position: absolute;
          border: 1px dashed rgba(6, 182, 212, 0.3);
          border-radius: 50%;
          z-index: 1;
        }

        .orbit-1 {
          width: 280px;
          height: 280px;
          animation: rotateOrbit 12s linear infinite;
        }

        .orbit-2 {
          width: 320px;
          height: 320px;
          animation: rotateOrbit 18s linear infinite reverse;
          border-color: rgba(37, 99, 235, 0.2);
        }

        .orbit-3 {
          width: 380px;
          height: 380px;
          animation: rotateOrbit 25s linear infinite;
          border-width: 2px;
          border-style: dotted;
          opacity: 0.5;
        }

        .profile-image-wrapper {
          position: relative;
          z-index: 2;
          width: 260px;
          height: 260px;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .profile-image {
          position: relative;
          width: 100%;
          height: 100%;
          object-fit: contain;
          filter: drop-shadow(0 0 20px rgba(6, 182, 212, 0.4));
          animation: float 6s ease-in-out infinite;
        }

        .hologram-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            transparent 0%,
            rgba(6, 182, 212, 0.1) 50%,
            transparent 100%
          );
          background-size: 100% 4px;
          pointer-events: none;
          animation: scanline 8s linear infinite;
          opacity: 0.3;
        }

        @keyframes flicker {
          0%, 100% { opacity: 0.4; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.05); }
        }

        @keyframes rotateOrbit {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes scanline {
          0% { background-position: 0 0; }
          100% { background-position: 0 100%; }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }

        .hero-title {
          font-size: 3.5rem;
          font-weight: 700;
          margin-bottom: 0.5rem;
          background: linear-gradient(135deg, #e2e8f0, #06b6d4);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .hero-subtitle {
          font-size: 1.75rem;
          font-weight: 600;
          color: #94a3b8;
          margin-bottom: 1rem;
        }

        .hero-tagline {
          font-size: 1.1rem;
          color: #94a3b8;
          margin-bottom: 2rem;
          line-height: 1.6;
        }

        .hero-buttons {
          display: flex;
          gap: 1rem;
          justify-content: center;
          margin-bottom: 2rem;
        }

        .hero-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem;
          justify-content: center;
          margin-bottom: 3rem;
        }

        .tag {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(37, 99, 235, 0.1);
          border: 1px solid rgba(37, 99, 235, 0.3);
          padding: 0.5rem 1rem;
          border-radius: 20px;
          font-size: 0.875rem;
          color: #93c5fd;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
          gap: 1.5rem;
          margin-top: 3rem;
        }

        .stat-card {
          text-align: center;
          padding: 1.5rem;
          background: rgba(37, 99, 235, 0.05);
          border: 1px solid rgba(37, 99, 235, 0.2);
          border-radius: 12px;
          transition: all 0.3s ease;
        }

        .stat-card:hover {
          background: rgba(37, 99, 235, 0.1);
          border-color: rgba(37, 99, 235, 0.4);
          transform: translateY(-4px);
        }

        .stat-icon {
          color: #2563eb;
          margin-bottom: 0.75rem;
        }

        .stat-number {
          font-size: 2rem;
          font-weight: 700;
          color: #e2e8f0;
          margin-bottom: 0.25rem;
        }

        .stat-label {
          font-size: 0.875rem;
          color: #94a3b8;
        }

        .btn {
          padding: 0.75rem 2rem;
          border-radius: 8px;
          font-weight: 600;
          font-size: 1rem;
          border: none;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          transition: all 0.3s ease;
        }

        .btn:hover {
          transform: scale(1.05);
        }

        .btn-primary {
          background: linear-gradient(135deg, #2563eb, #1d4ed8);
          color: white;
          box-shadow: 0 4px 20px rgba(37, 99, 235, 0.4);
        }

        .btn-primary:hover {
          box-shadow: 0 6px 30px rgba(37, 99, 235, 0.6);
        }

        .btn-secondary {
          background: rgba(37, 99, 235, 0.1);
          color: #3b82f6;
          border: 2px solid #2563eb;
        }

        .about-page {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .section-title {
          font-size: 2rem;
          font-weight: 700;
          margin-bottom: 1rem;
          color: #e2e8f0;
        }

        .section-text {
          font-size: 1.1rem;
          line-height: 1.8;
          color: #cbd5e1;
        }

        .feature-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .feature-list li {
          padding-left: 1.5rem;
          position: relative;
          line-height: 1.6;
          color: #cbd5e1;
        }

        .feature-list li::before {
          content: '→';
          position: absolute;
          left: 0;
          color: #2563eb;
          font-weight: bold;
        }

        .skills-section {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .skill-category-title {
          font-size: 1.25rem;
          font-weight: 600;
          color: #3b82f6;
          margin-bottom: 1rem;
        }

        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
          gap: 0.75rem;
        }

        .skill-tag {
          background: rgba(37, 99, 235, 0.1);
          border: 1px solid rgba(37, 99, 235, 0.3);
          padding: 0.5rem 0.75rem;
          border-radius: 8px;
          text-align: center;
          color: #93c5fd;
          font-size: 0.875rem;
          font-weight: 500;
          transition: all 0.3s ease;
        }

        .skill-tag:hover {
          background: rgba(37, 99, 235, 0.2);
          border-color: rgba(37, 99, 235, 0.5);
          transform: translateY(-2px);
        }

        .domain-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 1.5rem;
        }

        .domain-card {
          padding: 1.5rem;
          background: rgba(34, 197, 94, 0.05);
          border: 1px solid rgba(34, 197, 94, 0.2);
          border-radius: 12px;
          transition: all 0.3s ease;
        }

        .domain-card:hover {
          background: rgba(34, 197, 94, 0.1);
          border-color: rgba(34, 197, 94, 0.4);
          transform: translateY(-4px);
        }

        .domain-icon {
          color: #22c55e;
          margin-bottom: 1rem;
        }

        .domain-card h3 {
          font-size: 1.25rem;
          color: #e2e8f0;
          margin-bottom: 0.5rem;
        }

        .domain-card p {
          color: #94a3b8;
          line-height: 1.6;
        }

        .education-section {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .education-item h3 {
          font-size: 1.1rem;
          color: #e2e8f0;
          margin-bottom: 0.5rem;
        }

        .education-detail {
          color: #94a3b8;
          font-size: 0.95rem;
        }

        .page-title {
          font-size: 2.5rem;
          font-weight: 700;
          margin-bottom: 2rem;
          text-align: center;
        }

        .timeline {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .experience-card {
          position: relative;
        }

        .experience-header {
          margin-bottom: 1.5rem;
        }

        .experience-role {
          font-size: 1.5rem;
          font-weight: 700;
          color: #e2e8f0;
          margin-bottom: 0.5rem;
        }

        .experience-company {
          font-size: 1.25rem;
          font-weight: 600;
          color: #3b82f6;
          margin-bottom: 0.75rem;
        }

        .experience-meta {
          display: flex;
          gap: 1.5rem;
          flex-wrap: wrap;
          font-size: 0.9rem;
        }

        .experience-location {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: #94a3b8;
        }

        .experience-period {
          color: #22c55e;
          font-weight: 500;
        }

        .achievement-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .achievement-list li {
          padding-left: 1.5rem;
          position: relative;
          line-height: 1.6;
          color: #cbd5e1;
        }

        .achievement-list li::before {
          content: '•';
          position: absolute;
          left: 0;
          color: #2563eb;
          font-weight: bold;
          font-size: 1.5rem;
        }

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(380px, 1fr));
          gap: 2rem;
        }

        .project-card {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .project-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 1rem;
          margin-bottom: 0.5rem;
          flex-wrap: wrap;
        }

        .project-title-row {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .btn-view {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.5rem 1rem;
          background: rgba(37, 99, 235, 0.1);
          border: 1px solid rgba(37, 99, 235, 0.3);
          border-radius: 8px;
          color: #60a5fa;
          font-size: 0.875rem;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .btn-view:hover {
          background: rgba(37, 99, 235, 0.2);
          border-color: #60a5fa;
          color: #e2e8f0;
          box-shadow: 0 0 15px rgba(96, 165, 250, 0.6);
          transform: translateY(-2px);
        }

        .project-title {
          font-size: 1.5rem;
          font-weight: 700;
          color: #e2e8f0;
        }

        .project-highlight {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(249, 115, 22, 0.1);
          border: 1px solid rgba(249, 115, 22, 0.3);
          color: #fb923c;
          padding: 0.25rem 0.75rem;
          border-radius: 12px;
          font-size: 0.75rem;
          font-weight: 600;
          white-space: nowrap;
        }

        .project-description {
          color: #cbd5e1;
          line-height: 1.6;
        }

        .project-features {
          flex: 1;
        }

        .project-features h4 {
          font-size: 1rem;
          color: #3b82f6;
          margin-bottom: 0.75rem;
        }

        .project-features ul {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .project-features li {
          padding-left: 1.25rem;
          position: relative;
          font-size: 0.9rem;
          color: #94a3b8;
          line-height: 1.5;
        }

        .project-features li::before {
          content: '✓';
          position: absolute;
          left: 0;
          color: #22c55e;
          font-weight: bold;
        }

        .project-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-top: auto;
        }

        .project-tag {
          background: rgba(34, 197, 94, 0.1);
          border: 1px solid rgba(34, 197, 94, 0.3);
          color: #86efac;
          padding: 0.25rem 0.75rem;
          border-radius: 12px;
          font-size: 0.75rem;
        }

        .contact-container {
          max-width: 1300px;
          margin: 0 auto;
          overflow: visible;
        }

        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2rem;
          align-items: center;
          min-height: 600px;
        }

        .contact-content {
          order: 1; /* Form on the left */
        }

        .contact-visual {
          position: relative;
          background: transparent;
          display: flex;
          justify-content: center;
          align-items: center;
          overflow: visible;
          order: 2; /* Astronaut on the right */
        }

        .astronaut-wrapper {
          position: relative;
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .astronaut-image {
          width: 100%;
          max-height: 550px;
          object-fit: contain;
          border-radius: 0;
          box-shadow: none;
          filter: drop-shadow(0 0 30px rgba(6, 182, 212, 0.3));
          animation: float 10s ease-in-out infinite;
          mix-blend-mode: lighten;
          opacity: 0.95;
        }

        .visual-overlay {
          display: none;
        }

        .visual-glow {
          position: absolute;
          width: 120%;
          height: 120%;
          background: radial-gradient(circle, rgba(6, 182, 212, 0.15) 0%, transparent 70%);
          pointer-events: none;
          animation: pulse 6s ease-in-out infinite;
          z-index: -1;
        }

        @media (max-width: 1024px) {
          .contact-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
          .contact-visual {
            order: -1;
            height: 350px;
          }
          .contact-content {
            padding: 1.5rem !important;
          }
        }

        .contact-particles {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          overflow: hidden;
          pointer-events: none;
          opacity: 0.6;
          z-index: 0;
        }

        .particle {
          position: absolute;
          width: 3px;
          height: 3px;
          background: linear-gradient(135deg, #06b6d4, #2563eb);
          border-radius: 50%;
          box-shadow: 0 0 10px rgba(6, 182, 212, 0.8), 0 0 20px rgba(37, 99, 235, 0.4);
          animation: floatParticle 10s linear infinite;
        }

        @keyframes floatParticle {
          0% {
            transform: translateY(100vh) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateY(-100px) rotate(360deg);
            opacity: 0;
          }
        }

        .neural-network {
          position: absolute;
          top: -10px;
          right: -10px;
          width: 150px;
          height: 150px;
          opacity: 0.2;
          pointer-events: none;
        }

        @media (max-width: 768px) {
          .neural-network {
            width: 100px;
            height: 100px;
            opacity: 0.15;
          }
        }

        .neural-svg {
          width: 100%;
          height: 100%;
        }

        .neural-node {
          animation: pulse 2s ease-in-out infinite;
        }

        .neural-line {
          stroke-dasharray: 200;
          stroke-dashoffset: 200;
          animation: drawLine 4s ease-in-out infinite;
        }

        @keyframes drawLine {
          0%, 100% { stroke-dashoffset: 200; opacity: 0.4; }
          50% { stroke-dashoffset: 0; opacity: 1; }
        }

        .holographic-input-wrapper {
          position: relative;
        }

        .holographic-input {
          background: rgba(15, 23, 42, 0.6) !important;
          border: 2px solid rgba(148, 163, 184, 0.2) !important;
          border-radius: 8px !important;
          padding: 0.75rem 1rem !important;
          color: #e2e8f0 !important;
          font-size: 1rem !important;
          transition: all 0.3s ease !important;
          position: relative;
          z-index: 1;
          
          width: 100%;
          max-width: 320px;
          
          @media (min-width: 768px) {
            width: 100%;
            max-width: 500px;
          }

          @media (min-width: 1024px) {
            width: 100%;
            max-width: 600px;
          }
        }

        .holographic-input:focus {
          outline: none !important;
          border-color: #06b6d4 !important;
          box-shadow: 0 0 0 3px rgba(6, 182, 212, 0.1), 
                      0 0 20px rgba(6, 182, 212, 0.3) !important;
          background: rgba(15, 23, 42, 0.8) !important;
        }

        .holographic-input::placeholder {
          color: rgba(148, 163, 184, 0.5);
          animation: pulsePlaceholder 3s ease-in-out infinite;
        }

        @keyframes pulsePlaceholder {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 0.8; }
        }

        .scan-line {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 2px;
          background: linear-gradient(90deg, 
            transparent, 
            rgba(6, 182, 212, 0.8), 
            transparent);
          opacity: 0;
          transition: opacity 0.3s ease;
          pointer-events: none;
        }

        .holographic-input:focus + .scan-line {
          opacity: 1;
          animation: scanLine 2s linear infinite;
        }

        @keyframes scanLine {
          0% { transform: translateY(0); }
          100% { transform: translateY(calc(100% + 60px)); }
        }

        .cosmic-button {
          position: relative;
          overflow: hidden;
          padding: 0.875rem 2.5rem !important;
          font-weight: 600 !important;
          transition: all 0.3s ease !important;
        }

        .cosmic-button:hover:not(:disabled) {
          transform: scale(1.05) !important;
          box-shadow: 0 6px 30px rgba(6, 182, 212, 0.6),
                      0 0 40px rgba(37, 99, 235, 0.4) !important;
        }

        .cosmic-button:active:not(:disabled) {
          transform: scale(0.98) !important;
        }

        .button-glow {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 100px;
          height: 100px;
          background: radial-gradient(circle, 
            rgba(6, 182, 212, 0.4) 0%, 
            transparent 70%);
          transform: translate(-50%, -50%);
          pointer-events: none;
          animation: buttonPulse 2s ease-in-out infinite;
        }

        @keyframes buttonPulse {
          0%, 100% { opacity: 0.5; transform: translate(-50%, -50%) scale(1); }
          50% { opacity: 1; transform: translate(-50%, -50%) scale(1.2); }
        }

        .orbital-spinner {
          position: relative;
          width: 24px;
          height: 24px;
          margin-right: 0.5rem;
        }

        .orbit {
          position: absolute;
          border: 2px solid transparent;
          border-top-color: #06b6d4;
          border-radius: 50%;
          animation: spin 1.5s linear infinite;
        }

        .orbit:nth-child(1) {
          width: 24px;
          height: 24px;
          top: 0;
          left: 0;
        }

        .orbit:nth-child(2) {
          width: 18px;
          height: 18px;
          top: 3px;
          left: 3px;
          border-top-color: #2563eb;
          animation-duration: 1s;
          animation-direction: reverse;
        }

        .orbit:nth-child(3) {
          width: 12px;
          height: 12px;
          top: 6px;
          left: 6px;
          border-top-color: #06b6d4;
          animation-duration: 0.75s;
        }

        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .contact-info {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 1.25rem;
          margin-bottom: 2.5rem;
        }

        .contact-item {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          color: #94a3b8;
        }

        .contact-item a {
          color: #3b82f6;
          text-decoration: none;
          transition: color 0.3s ease;
        }

        .contact-item a:hover {
          color: #2563eb;
        }

        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .form-group label {
          font-weight: 600;
          color: #cbd5e1;
        }

        .form-group input,
        .form-group textarea {
          background: rgba(15, 23, 42, 0.5);
          border: 1px solid rgba(148, 163, 184, 0.2);
          border-radius: 8px;
          padding: 0.75rem 1rem;
          color: #e2e8f0;
          font-size: 1rem;
          transition: all 0.3s ease;
        }

        .form-group input:focus,
        .form-group textarea:focus {
          outline: none;
          border-color: #2563eb;
          box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);
        }

        .status-message {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 1rem;
          border-radius: 8px;
          font-weight: 500;
        }

        .status-message.success {
          background: rgba(34, 197, 94, 0.1);
          border: 1px solid rgba(34, 197, 94, 0.3);
          color: #86efac;
        }

        .status-message.error {
          background: rgba(239, 68, 68, 0.1);
          border: 1px solid rgba(239, 68, 68, 0.3);
          color: #fca5a5;
        }

        .footer {
          text-align: center;
          padding: 2rem;
          color: #64748b;
          border-top: 1px solid rgba(148, 163, 184, 0.1);
        }

        .footer-tagline {
          margin-top: 0.5rem;
          font-size: 0.875rem;
          color: #475569;
        }

        @media (max-width: 768px) {
          .custom-cursor {
            display: none;
          }

          * {
            cursor: auto !important;
          }

          .mobile-menu-btn {
            display: block;
          }

          .nav-content {
            width: 100%;
            padding: 1rem;
          }

          .nav-links {
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            flex-direction: column;
            background: rgba(15, 23, 42, 0.95);
            backdrop-filter: blur(12px);
            padding: 1rem 2rem;
            gap: 1rem;
            transform: translateY(-100%);
            opacity: 0;
            pointer-events: none;
            transition: all 0.3s ease;
          }

          .nav-links-open {
            transform: translateY(0);
            opacity: 1;
            pointer-events: all;
          }

          .hero-title {
            font-size: 2rem;
          }

          .hero-subtitle {
            font-size: 1.15rem;
          }

          .hero-tagline {
            font-size: 1rem;
          }

          .profile-container {
            width: 260px;
            height: 260px;
          }

          .profile-image-wrapper {
            width: 200px;
            height: 200px;
          }

          .orbit-1 { width: 220px; height: 220px; }
          .orbit-2 { width: 260px; height: 260px; }
          .orbit-3 { width: 300px; height: 300px; }

          .hero-buttons {
            flex-direction: column;
            width: 100%;
          }

          .hero-buttons .btn {
            width: 100%;
            justify-content: center;
          }

          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 1rem;
          }

          .stat-card {
            padding: 1rem;
          }

          .stat-number {
            font-size: 1.5rem;
          }

          .projects-grid {
            grid-template-columns: 1fr;
          }

          .skills-grid {
            grid-template-columns: repeat(auto-fill, minmax(110px, 1fr));
          }

          .domain-grid {
            grid-template-columns: 1fr;
          }

          .section-title {
            font-size: 1.5rem;
          }

          .experience-role {
            font-size: 1.25rem;
          }

          .experience-company {
            font-size: 1.1rem;
          }
        }
      `})]})};gh.createRoot(document.getElementById("root")).render(f.jsx(Yt.StrictMode,{children:f.jsx(c1,{})}));
