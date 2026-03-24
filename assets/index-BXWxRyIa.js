(function(){const j=document.createElement("link").relList;if(j&&j.supports&&j.supports("modulepreload"))return;for(const D of document.querySelectorAll('link[rel="modulepreload"]'))m(D);new MutationObserver(D=>{for(const R of D)if(R.type==="childList")for(const w of R.addedNodes)w.tagName==="LINK"&&w.rel==="modulepreload"&&m(w)}).observe(document,{childList:!0,subtree:!0});function _(D){const R={};return D.integrity&&(R.integrity=D.integrity),D.referrerPolicy&&(R.referrerPolicy=D.referrerPolicy),D.crossOrigin==="use-credentials"?R.credentials="include":D.crossOrigin==="anonymous"?R.credentials="omit":R.credentials="same-origin",R}function m(D){if(D.ep)return;D.ep=!0;const R=_(D);fetch(D.href,R)}})();var of={exports:{}},zn={};var zd;function fh(){if(zd)return zn;zd=1;var z=Symbol.for("react.transitional.element"),j=Symbol.for("react.fragment");function _(m,D,R){var w=null;if(R!==void 0&&(w=""+R),D.key!==void 0&&(w=""+D.key),"key"in D){R={};for(var rt in D)rt!=="key"&&(R[rt]=D[rt])}else R=D;return D=R.ref,{$$typeof:z,type:m,key:w,ref:D!==void 0?D:null,props:R}}return zn.Fragment=j,zn.jsx=_,zn.jsxs=_,zn}var Ad;function oh(){return Ad||(Ad=1,of.exports=fh()),of.exports}var f=oh(),sf={exports:{}},G={};var Ed;function sh(){if(Ed)return G;Ed=1;var z=Symbol.for("react.transitional.element"),j=Symbol.for("react.portal"),_=Symbol.for("react.fragment"),m=Symbol.for("react.strict_mode"),D=Symbol.for("react.profiler"),R=Symbol.for("react.consumer"),w=Symbol.for("react.context"),rt=Symbol.for("react.forward_ref"),M=Symbol.for("react.suspense"),E=Symbol.for("react.memo"),J=Symbol.for("react.lazy"),B=Symbol.for("react.activity"),lt=Symbol.iterator;function $t(r){return r===null||typeof r!="object"?null:(r=lt&&r[lt]||r["@@iterator"],typeof r=="function"?r:null)}var Gt={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Bt=Object.assign,Dl={};function Ft(r,A,N){this.props=r,this.context=A,this.refs=Dl,this.updater=N||Gt}Ft.prototype.isReactComponent={},Ft.prototype.setState=function(r,A){if(typeof r!="object"&&typeof r!="function"&&r!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,r,A,"setState")},Ft.prototype.forceUpdate=function(r){this.updater.enqueueForceUpdate(this,r,"forceUpdate")};function Fl(){}Fl.prototype=Ft.prototype;function Ut(r,A,N){this.props=r,this.context=A,this.refs=Dl,this.updater=N||Gt}var fl=Ut.prototype=new Fl;fl.constructor=Ut,Bt(fl,Ft.prototype),fl.isPureReactComponent=!0;var Al=Array.isArray;function wt(){}var $={H:null,A:null,T:null,S:null},Xt=Object.prototype.hasOwnProperty;function El(r,A,N){var C=N.ref;return{$$typeof:z,type:r,key:A,ref:C!==void 0?C:null,props:N}}function Le(r,A){return El(r.type,A,r.props)}function jl(r){return typeof r=="object"&&r!==null&&r.$$typeof===z}function Qt(r){var A={"=":"=0",":":"=2"};return"$"+r.replace(/[=:]/g,function(N){return A[N]})}var Ae=/\/+/g;function Cl(r,A){return typeof r=="object"&&r!==null&&r.key!=null?Qt(""+r.key):A.toString(36)}function bl(r){switch(r.status){case"fulfilled":return r.value;case"rejected":throw r.reason;default:switch(typeof r.status=="string"?r.then(wt,wt):(r.status="pending",r.then(function(A){r.status==="pending"&&(r.status="fulfilled",r.value=A)},function(A){r.status==="pending"&&(r.status="rejected",r.reason=A)})),r.status){case"fulfilled":return r.value;case"rejected":throw r.reason}}throw r}function b(r,A,N,C,X){var Z=typeof r;(Z==="undefined"||Z==="boolean")&&(r=null);var et=!1;if(r===null)et=!0;else switch(Z){case"bigint":case"string":case"number":et=!0;break;case"object":switch(r.$$typeof){case z:case j:et=!0;break;case J:return et=r._init,b(et(r._payload),A,N,C,X)}}if(et)return X=X(r),et=C===""?"."+Cl(r,0):C,Al(X)?(N="",et!=null&&(N=et.replace(Ae,"$&/")+"/"),b(X,A,N,"",function(_a){return _a})):X!=null&&(jl(X)&&(X=Le(X,N+(X.key==null||r&&r.key===X.key?"":(""+X.key).replace(Ae,"$&/")+"/")+et)),A.push(X)),1;et=0;var qt=C===""?".":C+":";if(Al(r))for(var vt=0;vt<r.length;vt++)C=r[vt],Z=qt+Cl(C,vt),et+=b(C,A,N,Z,X);else if(vt=$t(r),typeof vt=="function")for(r=vt.call(r),vt=0;!(C=r.next()).done;)C=C.value,Z=qt+Cl(C,vt++),et+=b(C,A,N,Z,X);else if(Z==="object"){if(typeof r.then=="function")return b(bl(r),A,N,C,X);throw A=String(r),Error("Objects are not valid as a React child (found: "+(A==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":A)+"). If you meant to render a collection of children, use an array instead.")}return et}function T(r,A,N){if(r==null)return r;var C=[],X=0;return b(r,C,"","",function(Z){return A.call(N,Z,X++)}),C}function Y(r){if(r._status===-1){var A=r._result;A=A(),A.then(function(N){(r._status===0||r._status===-1)&&(r._status=1,r._result=N)},function(N){(r._status===0||r._status===-1)&&(r._status=2,r._result=N)}),r._status===-1&&(r._status=0,r._result=A)}if(r._status===1)return r._result.default;throw r._result}var it=typeof reportError=="function"?reportError:function(r){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var A=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof r=="object"&&r!==null&&typeof r.message=="string"?String(r.message):String(r),error:r});if(!window.dispatchEvent(A))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",r);return}console.error(r)},ot={map:T,forEach:function(r,A,N){T(r,function(){A.apply(this,arguments)},N)},count:function(r){var A=0;return T(r,function(){A++}),A},toArray:function(r){return T(r,function(A){return A})||[]},only:function(r){if(!jl(r))throw Error("React.Children.only expected to receive a single React element child.");return r}};return G.Activity=B,G.Children=ot,G.Component=Ft,G.Fragment=_,G.Profiler=D,G.PureComponent=Ut,G.StrictMode=m,G.Suspense=M,G.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=$,G.__COMPILER_RUNTIME={__proto__:null,c:function(r){return $.H.useMemoCache(r)}},G.cache=function(r){return function(){return r.apply(null,arguments)}},G.cacheSignal=function(){return null},G.cloneElement=function(r,A,N){if(r==null)throw Error("The argument must be a React element, but you passed "+r+".");var C=Bt({},r.props),X=r.key;if(A!=null)for(Z in A.key!==void 0&&(X=""+A.key),A)!Xt.call(A,Z)||Z==="key"||Z==="__self"||Z==="__source"||Z==="ref"&&A.ref===void 0||(C[Z]=A[Z]);var Z=arguments.length-2;if(Z===1)C.children=N;else if(1<Z){for(var et=Array(Z),qt=0;qt<Z;qt++)et[qt]=arguments[qt+2];C.children=et}return El(r.type,X,C)},G.createContext=function(r){return r={$$typeof:w,_currentValue:r,_currentValue2:r,_threadCount:0,Provider:null,Consumer:null},r.Provider=r,r.Consumer={$$typeof:R,_context:r},r},G.createElement=function(r,A,N){var C,X={},Z=null;if(A!=null)for(C in A.key!==void 0&&(Z=""+A.key),A)Xt.call(A,C)&&C!=="key"&&C!=="__self"&&C!=="__source"&&(X[C]=A[C]);var et=arguments.length-2;if(et===1)X.children=N;else if(1<et){for(var qt=Array(et),vt=0;vt<et;vt++)qt[vt]=arguments[vt+2];X.children=qt}if(r&&r.defaultProps)for(C in et=r.defaultProps,et)X[C]===void 0&&(X[C]=et[C]);return El(r,Z,X)},G.createRef=function(){return{current:null}},G.forwardRef=function(r){return{$$typeof:rt,render:r}},G.isValidElement=jl,G.lazy=function(r){return{$$typeof:J,_payload:{_status:-1,_result:r},_init:Y}},G.memo=function(r,A){return{$$typeof:E,type:r,compare:A===void 0?null:A}},G.startTransition=function(r){var A=$.T,N={};$.T=N;try{var C=r(),X=$.S;X!==null&&X(N,C),typeof C=="object"&&C!==null&&typeof C.then=="function"&&C.then(wt,it)}catch(Z){it(Z)}finally{A!==null&&N.types!==null&&(A.types=N.types),$.T=A}},G.unstable_useCacheRefresh=function(){return $.H.useCacheRefresh()},G.use=function(r){return $.H.use(r)},G.useActionState=function(r,A,N){return $.H.useActionState(r,A,N)},G.useCallback=function(r,A){return $.H.useCallback(r,A)},G.useContext=function(r){return $.H.useContext(r)},G.useDebugValue=function(){},G.useDeferredValue=function(r,A){return $.H.useDeferredValue(r,A)},G.useEffect=function(r,A){return $.H.useEffect(r,A)},G.useEffectEvent=function(r){return $.H.useEffectEvent(r)},G.useId=function(){return $.H.useId()},G.useImperativeHandle=function(r,A,N){return $.H.useImperativeHandle(r,A,N)},G.useInsertionEffect=function(r,A){return $.H.useInsertionEffect(r,A)},G.useLayoutEffect=function(r,A){return $.H.useLayoutEffect(r,A)},G.useMemo=function(r,A){return $.H.useMemo(r,A)},G.useOptimistic=function(r,A){return $.H.useOptimistic(r,A)},G.useReducer=function(r,A,N){return $.H.useReducer(r,A,N)},G.useRef=function(r){return $.H.useRef(r)},G.useState=function(r){return $.H.useState(r)},G.useSyncExternalStore=function(r,A,N){return $.H.useSyncExternalStore(r,A,N)},G.useTransition=function(){return $.H.useTransition()},G.version="19.2.3",G}var jd;function vf(){return jd||(jd=1,sf.exports=sh()),sf.exports}var Rt=vf(),rf={exports:{}},An={},df={exports:{}},mf={};var Td;function rh(){return Td||(Td=1,(function(z){function j(b,T){var Y=b.length;b.push(T);t:for(;0<Y;){var it=Y-1>>>1,ot=b[it];if(0<D(ot,T))b[it]=T,b[Y]=ot,Y=it;else break t}}function _(b){return b.length===0?null:b[0]}function m(b){if(b.length===0)return null;var T=b[0],Y=b.pop();if(Y!==T){b[0]=Y;t:for(var it=0,ot=b.length,r=ot>>>1;it<r;){var A=2*(it+1)-1,N=b[A],C=A+1,X=b[C];if(0>D(N,Y))C<ot&&0>D(X,N)?(b[it]=X,b[C]=Y,it=C):(b[it]=N,b[A]=Y,it=A);else if(C<ot&&0>D(X,Y))b[it]=X,b[C]=Y,it=C;else break t}}return T}function D(b,T){var Y=b.sortIndex-T.sortIndex;return Y!==0?Y:b.id-T.id}if(z.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var R=performance;z.unstable_now=function(){return R.now()}}else{var w=Date,rt=w.now();z.unstable_now=function(){return w.now()-rt}}var M=[],E=[],J=1,B=null,lt=3,$t=!1,Gt=!1,Bt=!1,Dl=!1,Ft=typeof setTimeout=="function"?setTimeout:null,Fl=typeof clearTimeout=="function"?clearTimeout:null,Ut=typeof setImmediate<"u"?setImmediate:null;function fl(b){for(var T=_(E);T!==null;){if(T.callback===null)m(E);else if(T.startTime<=b)m(E),T.sortIndex=T.expirationTime,j(M,T);else break;T=_(E)}}function Al(b){if(Bt=!1,fl(b),!Gt)if(_(M)!==null)Gt=!0,wt||(wt=!0,Qt());else{var T=_(E);T!==null&&bl(Al,T.startTime-b)}}var wt=!1,$=-1,Xt=5,El=-1;function Le(){return Dl?!0:!(z.unstable_now()-El<Xt)}function jl(){if(Dl=!1,wt){var b=z.unstable_now();El=b;var T=!0;try{t:{Gt=!1,Bt&&(Bt=!1,Fl($),$=-1),$t=!0;var Y=lt;try{l:{for(fl(b),B=_(M);B!==null&&!(B.expirationTime>b&&Le());){var it=B.callback;if(typeof it=="function"){B.callback=null,lt=B.priorityLevel;var ot=it(B.expirationTime<=b);if(b=z.unstable_now(),typeof ot=="function"){B.callback=ot,fl(b),T=!0;break l}B===_(M)&&m(M),fl(b)}else m(M);B=_(M)}if(B!==null)T=!0;else{var r=_(E);r!==null&&bl(Al,r.startTime-b),T=!1}}break t}finally{B=null,lt=Y,$t=!1}T=void 0}}finally{T?Qt():wt=!1}}}var Qt;if(typeof Ut=="function")Qt=function(){Ut(jl)};else if(typeof MessageChannel<"u"){var Ae=new MessageChannel,Cl=Ae.port2;Ae.port1.onmessage=jl,Qt=function(){Cl.postMessage(null)}}else Qt=function(){Ft(jl,0)};function bl(b,T){$=Ft(function(){b(z.unstable_now())},T)}z.unstable_IdlePriority=5,z.unstable_ImmediatePriority=1,z.unstable_LowPriority=4,z.unstable_NormalPriority=3,z.unstable_Profiling=null,z.unstable_UserBlockingPriority=2,z.unstable_cancelCallback=function(b){b.callback=null},z.unstable_forceFrameRate=function(b){0>b||125<b?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Xt=0<b?Math.floor(1e3/b):5},z.unstable_getCurrentPriorityLevel=function(){return lt},z.unstable_next=function(b){switch(lt){case 1:case 2:case 3:var T=3;break;default:T=lt}var Y=lt;lt=T;try{return b()}finally{lt=Y}},z.unstable_requestPaint=function(){Dl=!0},z.unstable_runWithPriority=function(b,T){switch(b){case 1:case 2:case 3:case 4:case 5:break;default:b=3}var Y=lt;lt=b;try{return T()}finally{lt=Y}},z.unstable_scheduleCallback=function(b,T,Y){var it=z.unstable_now();switch(typeof Y=="object"&&Y!==null?(Y=Y.delay,Y=typeof Y=="number"&&0<Y?it+Y:it):Y=it,b){case 1:var ot=-1;break;case 2:ot=250;break;case 5:ot=1073741823;break;case 4:ot=1e4;break;default:ot=5e3}return ot=Y+ot,b={id:J++,callback:T,priorityLevel:b,startTime:Y,expirationTime:ot,sortIndex:-1},Y>it?(b.sortIndex=Y,j(E,b),_(M)===null&&b===_(E)&&(Bt?(Fl($),$=-1):Bt=!0,bl(Al,Y-it))):(b.sortIndex=ot,j(M,b),Gt||$t||(Gt=!0,wt||(wt=!0,Qt()))),b},z.unstable_shouldYield=Le,z.unstable_wrapCallback=function(b){var T=lt;return function(){var Y=lt;lt=T;try{return b.apply(this,arguments)}finally{lt=Y}}}})(mf)),mf}var Nd;function dh(){return Nd||(Nd=1,df.exports=rh()),df.exports}var hf={exports:{}},Ht={};var _d;function mh(){if(_d)return Ht;_d=1;var z=vf();function j(M){var E="https://react.dev/errors/"+M;if(1<arguments.length){E+="?args[]="+encodeURIComponent(arguments[1]);for(var J=2;J<arguments.length;J++)E+="&args[]="+encodeURIComponent(arguments[J])}return"Minified React error #"+M+"; visit "+E+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function _(){}var m={d:{f:_,r:function(){throw Error(j(522))},D:_,C:_,L:_,m:_,X:_,S:_,M:_},p:0,findDOMNode:null},D=Symbol.for("react.portal");function R(M,E,J){var B=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:D,key:B==null?null:""+B,children:M,containerInfo:E,implementation:J}}var w=z.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function rt(M,E){if(M==="font")return"";if(typeof E=="string")return E==="use-credentials"?E:""}return Ht.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=m,Ht.createPortal=function(M,E){var J=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!E||E.nodeType!==1&&E.nodeType!==9&&E.nodeType!==11)throw Error(j(299));return R(M,E,null,J)},Ht.flushSync=function(M){var E=w.T,J=m.p;try{if(w.T=null,m.p=2,M)return M()}finally{w.T=E,m.p=J,m.d.f()}},Ht.preconnect=function(M,E){typeof M=="string"&&(E?(E=E.crossOrigin,E=typeof E=="string"?E==="use-credentials"?E:"":void 0):E=null,m.d.C(M,E))},Ht.prefetchDNS=function(M){typeof M=="string"&&m.d.D(M)},Ht.preinit=function(M,E){if(typeof M=="string"&&E&&typeof E.as=="string"){var J=E.as,B=rt(J,E.crossOrigin),lt=typeof E.integrity=="string"?E.integrity:void 0,$t=typeof E.fetchPriority=="string"?E.fetchPriority:void 0;J==="style"?m.d.S(M,typeof E.precedence=="string"?E.precedence:void 0,{crossOrigin:B,integrity:lt,fetchPriority:$t}):J==="script"&&m.d.X(M,{crossOrigin:B,integrity:lt,fetchPriority:$t,nonce:typeof E.nonce=="string"?E.nonce:void 0})}},Ht.preinitModule=function(M,E){if(typeof M=="string")if(typeof E=="object"&&E!==null){if(E.as==null||E.as==="script"){var J=rt(E.as,E.crossOrigin);m.d.M(M,{crossOrigin:J,integrity:typeof E.integrity=="string"?E.integrity:void 0,nonce:typeof E.nonce=="string"?E.nonce:void 0})}}else E==null&&m.d.M(M)},Ht.preload=function(M,E){if(typeof M=="string"&&typeof E=="object"&&E!==null&&typeof E.as=="string"){var J=E.as,B=rt(J,E.crossOrigin);m.d.L(M,J,{crossOrigin:B,integrity:typeof E.integrity=="string"?E.integrity:void 0,nonce:typeof E.nonce=="string"?E.nonce:void 0,type:typeof E.type=="string"?E.type:void 0,fetchPriority:typeof E.fetchPriority=="string"?E.fetchPriority:void 0,referrerPolicy:typeof E.referrerPolicy=="string"?E.referrerPolicy:void 0,imageSrcSet:typeof E.imageSrcSet=="string"?E.imageSrcSet:void 0,imageSizes:typeof E.imageSizes=="string"?E.imageSizes:void 0,media:typeof E.media=="string"?E.media:void 0})}},Ht.preloadModule=function(M,E){if(typeof M=="string")if(E){var J=rt(E.as,E.crossOrigin);m.d.m(M,{as:typeof E.as=="string"&&E.as!=="script"?E.as:void 0,crossOrigin:J,integrity:typeof E.integrity=="string"?E.integrity:void 0})}else m.d.m(M)},Ht.requestFormReset=function(M){m.d.r(M)},Ht.unstable_batchedUpdates=function(M,E){return M(E)},Ht.useFormState=function(M,E,J){return w.H.useFormState(M,E,J)},Ht.useFormStatus=function(){return w.H.useHostTransitionStatus()},Ht.version="19.2.3",Ht}var Md;function hh(){if(Md)return hf.exports;Md=1;function z(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(z)}catch(j){console.error(j)}}return z(),hf.exports=mh(),hf.exports}var Od;function gh(){if(Od)return An;Od=1;var z=dh(),j=vf(),_=hh();function m(t){var l="https://react.dev/errors/"+t;if(1<arguments.length){l+="?args[]="+encodeURIComponent(arguments[1]);for(var e=2;e<arguments.length;e++)l+="&args[]="+encodeURIComponent(arguments[e])}return"Minified React error #"+t+"; visit "+l+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function D(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function R(t){var l=t,e=t;if(t.alternate)for(;l.return;)l=l.return;else{t=l;do l=t,(l.flags&4098)!==0&&(e=l.return),t=l.return;while(t)}return l.tag===3?e:null}function w(t){if(t.tag===13){var l=t.memoizedState;if(l===null&&(t=t.alternate,t!==null&&(l=t.memoizedState)),l!==null)return l.dehydrated}return null}function rt(t){if(t.tag===31){var l=t.memoizedState;if(l===null&&(t=t.alternate,t!==null&&(l=t.memoizedState)),l!==null)return l.dehydrated}return null}function M(t){if(R(t)!==t)throw Error(m(188))}function E(t){var l=t.alternate;if(!l){if(l=R(t),l===null)throw Error(m(188));return l!==t?null:t}for(var e=t,a=l;;){var n=e.return;if(n===null)break;var i=n.alternate;if(i===null){if(a=n.return,a!==null){e=a;continue}break}if(n.child===i.child){for(i=n.child;i;){if(i===e)return M(n),t;if(i===a)return M(n),l;i=i.sibling}throw Error(m(188))}if(e.return!==a.return)e=n,a=i;else{for(var u=!1,c=n.child;c;){if(c===e){u=!0,e=n,a=i;break}if(c===a){u=!0,a=n,e=i;break}c=c.sibling}if(!u){for(c=i.child;c;){if(c===e){u=!0,e=i,a=n;break}if(c===a){u=!0,a=i,e=n;break}c=c.sibling}if(!u)throw Error(m(189))}}if(e.alternate!==a)throw Error(m(190))}if(e.tag!==3)throw Error(m(188));return e.stateNode.current===e?t:l}function J(t){var l=t.tag;if(l===5||l===26||l===27||l===6)return t;for(t=t.child;t!==null;){if(l=J(t),l!==null)return l;t=t.sibling}return null}var B=Object.assign,lt=Symbol.for("react.element"),$t=Symbol.for("react.transitional.element"),Gt=Symbol.for("react.portal"),Bt=Symbol.for("react.fragment"),Dl=Symbol.for("react.strict_mode"),Ft=Symbol.for("react.profiler"),Fl=Symbol.for("react.consumer"),Ut=Symbol.for("react.context"),fl=Symbol.for("react.forward_ref"),Al=Symbol.for("react.suspense"),wt=Symbol.for("react.suspense_list"),$=Symbol.for("react.memo"),Xt=Symbol.for("react.lazy"),El=Symbol.for("react.activity"),Le=Symbol.for("react.memo_cache_sentinel"),jl=Symbol.iterator;function Qt(t){return t===null||typeof t!="object"?null:(t=jl&&t[jl]||t["@@iterator"],typeof t=="function"?t:null)}var Ae=Symbol.for("react.client.reference");function Cl(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===Ae?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Bt:return"Fragment";case Ft:return"Profiler";case Dl:return"StrictMode";case Al:return"Suspense";case wt:return"SuspenseList";case El:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case Gt:return"Portal";case Ut:return t.displayName||"Context";case Fl:return(t._context.displayName||"Context")+".Consumer";case fl:var l=t.render;return t=t.displayName,t||(t=l.displayName||l.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case $:return l=t.displayName||null,l!==null?l:Cl(t.type)||"Memo";case Xt:l=t._payload,t=t._init;try{return Cl(t(l))}catch{}}return null}var bl=Array.isArray,b=j.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,T=_.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Y={pending:!1,data:null,method:null,action:null},it=[],ot=-1;function r(t){return{current:t}}function A(t){0>ot||(t.current=it[ot],it[ot]=null,ot--)}function N(t,l){ot++,it[ot]=t.current,t.current=l}var C=r(null),X=r(null),Z=r(null),et=r(null);function qt(t,l){switch(N(Z,l),N(X,t),N(C,null),l.nodeType){case 9:case 11:t=(t=l.documentElement)&&(t=t.namespaceURI)?Vr(t):0;break;default:if(t=l.tagName,l=l.namespaceURI)l=Vr(l),t=Kr(l,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}A(C),N(C,t)}function vt(){A(C),A(X),A(Z)}function _a(t){t.memoizedState!==null&&N(et,t);var l=C.current,e=Kr(l,t.type);l!==e&&(N(X,t),N(C,e))}function En(t){X.current===t&&(A(C),A(X)),et.current===t&&(A(et),vn._currentValue=Y)}var Zi,xf;function Ee(t){if(Zi===void 0)try{throw Error()}catch(e){var l=e.stack.trim().match(/\n( *(at )?)/);Zi=l&&l[1]||"",xf=-1<e.stack.indexOf(`
    at`)?" (<anonymous>)":-1<e.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Zi+t+xf}var Vi=!1;function Ki(t,l){if(!t||Vi)return"";Vi=!0;var e=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var a={DetermineComponentFrameRoot:function(){try{if(l){var S=function(){throw Error()};if(Object.defineProperty(S.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(S,[])}catch(y){var p=y}Reflect.construct(t,[],S)}else{try{S.call()}catch(y){p=y}t.call(S.prototype)}}else{try{throw Error()}catch(y){p=y}(S=t())&&typeof S.catch=="function"&&S.catch(function(){})}}catch(y){if(y&&p&&typeof y.stack=="string")return[y.stack,p.stack]}return[null,null]}};a.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var n=Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot,"name");n&&n.configurable&&Object.defineProperty(a.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var i=a.DetermineComponentFrameRoot(),u=i[0],c=i[1];if(u&&c){var o=u.split(`
`),g=c.split(`
`);for(n=a=0;a<o.length&&!o[a].includes("DetermineComponentFrameRoot");)a++;for(;n<g.length&&!g[n].includes("DetermineComponentFrameRoot");)n++;if(a===o.length||n===g.length)for(a=o.length-1,n=g.length-1;1<=a&&0<=n&&o[a]!==g[n];)n--;for(;1<=a&&0<=n;a--,n--)if(o[a]!==g[n]){if(a!==1||n!==1)do if(a--,n--,0>n||o[a]!==g[n]){var v=`
`+o[a].replace(" at new "," at ");return t.displayName&&v.includes("<anonymous>")&&(v=v.replace("<anonymous>",t.displayName)),v}while(1<=a&&0<=n);break}}}finally{Vi=!1,Error.prepareStackTrace=e}return(e=t?t.displayName||t.name:"")?Ee(e):""}function Gd(t,l){switch(t.tag){case 26:case 27:case 5:return Ee(t.type);case 16:return Ee("Lazy");case 13:return t.child!==l&&l!==null?Ee("Suspense Fallback"):Ee("Suspense");case 19:return Ee("SuspenseList");case 0:case 15:return Ki(t.type,!1);case 11:return Ki(t.type.render,!1);case 1:return Ki(t.type,!0);case 31:return Ee("Activity");default:return""}}function Sf(t){try{var l="",e=null;do l+=Gd(t,e),e=t,t=t.return;while(t);return l}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}var Ji=Object.prototype.hasOwnProperty,ki=z.unstable_scheduleCallback,Wi=z.unstable_cancelCallback,wd=z.unstable_shouldYield,Xd=z.unstable_requestPaint,It=z.unstable_now,Qd=z.unstable_getCurrentPriorityLevel,zf=z.unstable_ImmediatePriority,Af=z.unstable_UserBlockingPriority,jn=z.unstable_NormalPriority,Ld=z.unstable_LowPriority,Ef=z.unstable_IdlePriority,Zd=z.log,Vd=z.unstable_setDisableYieldValue,Ma=null,Pt=null;function Il(t){if(typeof Zd=="function"&&Vd(t),Pt&&typeof Pt.setStrictMode=="function")try{Pt.setStrictMode(Ma,t)}catch{}}var tl=Math.clz32?Math.clz32:kd,Kd=Math.log,Jd=Math.LN2;function kd(t){return t>>>=0,t===0?32:31-(Kd(t)/Jd|0)|0}var Tn=256,Nn=262144,_n=4194304;function je(t){var l=t&42;if(l!==0)return l;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function Mn(t,l,e){var a=t.pendingLanes;if(a===0)return 0;var n=0,i=t.suspendedLanes,u=t.pingedLanes;t=t.warmLanes;var c=a&134217727;return c!==0?(a=c&~i,a!==0?n=je(a):(u&=c,u!==0?n=je(u):e||(e=c&~t,e!==0&&(n=je(e))))):(c=a&~i,c!==0?n=je(c):u!==0?n=je(u):e||(e=a&~t,e!==0&&(n=je(e)))),n===0?0:l!==0&&l!==n&&(l&i)===0&&(i=n&-n,e=l&-l,i>=e||i===32&&(e&4194048)!==0)?l:n}function Oa(t,l){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&l)===0}function Wd(t,l){switch(t){case 1:case 2:case 4:case 8:case 64:return l+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return l+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function jf(){var t=_n;return _n<<=1,(_n&62914560)===0&&(_n=4194304),t}function $i(t){for(var l=[],e=0;31>e;e++)l.push(t);return l}function Da(t,l){t.pendingLanes|=l,l!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function $d(t,l,e,a,n,i){var u=t.pendingLanes;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=e,t.entangledLanes&=e,t.errorRecoveryDisabledLanes&=e,t.shellSuspendCounter=0;var c=t.entanglements,o=t.expirationTimes,g=t.hiddenUpdates;for(e=u&~e;0<e;){var v=31-tl(e),S=1<<v;c[v]=0,o[v]=-1;var p=g[v];if(p!==null)for(g[v]=null,v=0;v<p.length;v++){var y=p[v];y!==null&&(y.lane&=-536870913)}e&=~S}a!==0&&Tf(t,a,0),i!==0&&n===0&&t.tag!==0&&(t.suspendedLanes|=i&~(u&~l))}function Tf(t,l,e){t.pendingLanes|=l,t.suspendedLanes&=~l;var a=31-tl(l);t.entangledLanes|=l,t.entanglements[a]=t.entanglements[a]|1073741824|e&261930}function Nf(t,l){var e=t.entangledLanes|=l;for(t=t.entanglements;e;){var a=31-tl(e),n=1<<a;n&l|t[a]&l&&(t[a]|=l),e&=~n}}function _f(t,l){var e=l&-l;return e=(e&42)!==0?1:Fi(e),(e&(t.suspendedLanes|l))!==0?0:e}function Fi(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Ii(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Mf(){var t=T.p;return t!==0?t:(t=window.event,t===void 0?32:gd(t.type))}function Of(t,l){var e=T.p;try{return T.p=t,l()}finally{T.p=e}}var Pl=Math.random().toString(36).slice(2),_t="__reactFiber$"+Pl,Lt="__reactProps$"+Pl,Ze="__reactContainer$"+Pl,Pi="__reactEvents$"+Pl,Fd="__reactListeners$"+Pl,Id="__reactHandles$"+Pl,Df="__reactResources$"+Pl,Ca="__reactMarker$"+Pl;function tu(t){delete t[_t],delete t[Lt],delete t[Pi],delete t[Fd],delete t[Id]}function Ve(t){var l=t[_t];if(l)return l;for(var e=t.parentNode;e;){if(l=e[Ze]||e[_t]){if(e=l.alternate,l.child!==null||e!==null&&e.child!==null)for(t=Pr(t);t!==null;){if(e=t[_t])return e;t=Pr(t)}return l}t=e,e=t.parentNode}return null}function Ke(t){if(t=t[_t]||t[Ze]){var l=t.tag;if(l===5||l===6||l===13||l===31||l===26||l===27||l===3)return t}return null}function Ua(t){var l=t.tag;if(l===5||l===26||l===27||l===6)return t.stateNode;throw Error(m(33))}function Je(t){var l=t[Df];return l||(l=t[Df]={hoistableStyles:new Map,hoistableScripts:new Map}),l}function Tt(t){t[Ca]=!0}var Cf=new Set,Uf={};function Te(t,l){ke(t,l),ke(t+"Capture",l)}function ke(t,l){for(Uf[t]=l,t=0;t<l.length;t++)Cf.add(l[t])}var Pd=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Hf={},Rf={};function t0(t){return Ji.call(Rf,t)?!0:Ji.call(Hf,t)?!1:Pd.test(t)?Rf[t]=!0:(Hf[t]=!0,!1)}function On(t,l,e){if(t0(l))if(e===null)t.removeAttribute(l);else{switch(typeof e){case"undefined":case"function":case"symbol":t.removeAttribute(l);return;case"boolean":var a=l.toLowerCase().slice(0,5);if(a!=="data-"&&a!=="aria-"){t.removeAttribute(l);return}}t.setAttribute(l,""+e)}}function Dn(t,l,e){if(e===null)t.removeAttribute(l);else{switch(typeof e){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(l);return}t.setAttribute(l,""+e)}}function Ul(t,l,e,a){if(a===null)t.removeAttribute(e);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(e);return}t.setAttributeNS(l,e,""+a)}}function ol(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Bf(t){var l=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(l==="checkbox"||l==="radio")}function l0(t,l,e){var a=Object.getOwnPropertyDescriptor(t.constructor.prototype,l);if(!t.hasOwnProperty(l)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var n=a.get,i=a.set;return Object.defineProperty(t,l,{configurable:!0,get:function(){return n.call(this)},set:function(u){e=""+u,i.call(this,u)}}),Object.defineProperty(t,l,{enumerable:a.enumerable}),{getValue:function(){return e},setValue:function(u){e=""+u},stopTracking:function(){t._valueTracker=null,delete t[l]}}}}function lu(t){if(!t._valueTracker){var l=Bf(t)?"checked":"value";t._valueTracker=l0(t,l,""+t[l])}}function qf(t){if(!t)return!1;var l=t._valueTracker;if(!l)return!0;var e=l.getValue(),a="";return t&&(a=Bf(t)?t.checked?"true":"false":t.value),t=a,t!==e?(l.setValue(t),!0):!1}function Cn(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var e0=/[\n"\\]/g;function sl(t){return t.replace(e0,function(l){return"\\"+l.charCodeAt(0).toString(16)+" "})}function eu(t,l,e,a,n,i,u,c){t.name="",u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"?t.type=u:t.removeAttribute("type"),l!=null?u==="number"?(l===0&&t.value===""||t.value!=l)&&(t.value=""+ol(l)):t.value!==""+ol(l)&&(t.value=""+ol(l)):u!=="submit"&&u!=="reset"||t.removeAttribute("value"),l!=null?au(t,u,ol(l)):e!=null?au(t,u,ol(e)):a!=null&&t.removeAttribute("value"),n==null&&i!=null&&(t.defaultChecked=!!i),n!=null&&(t.checked=n&&typeof n!="function"&&typeof n!="symbol"),c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"?t.name=""+ol(c):t.removeAttribute("name")}function Yf(t,l,e,a,n,i,u,c){if(i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(t.type=i),l!=null||e!=null){if(!(i!=="submit"&&i!=="reset"||l!=null)){lu(t);return}e=e!=null?""+ol(e):"",l=l!=null?""+ol(l):e,c||l===t.value||(t.value=l),t.defaultValue=l}a=a??n,a=typeof a!="function"&&typeof a!="symbol"&&!!a,t.checked=c?t.checked:!!a,t.defaultChecked=!!a,u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"&&(t.name=u),lu(t)}function au(t,l,e){l==="number"&&Cn(t.ownerDocument)===t||t.defaultValue===""+e||(t.defaultValue=""+e)}function We(t,l,e,a){if(t=t.options,l){l={};for(var n=0;n<e.length;n++)l["$"+e[n]]=!0;for(e=0;e<t.length;e++)n=l.hasOwnProperty("$"+t[e].value),t[e].selected!==n&&(t[e].selected=n),n&&a&&(t[e].defaultSelected=!0)}else{for(e=""+ol(e),l=null,n=0;n<t.length;n++){if(t[n].value===e){t[n].selected=!0,a&&(t[n].defaultSelected=!0);return}l!==null||t[n].disabled||(l=t[n])}l!==null&&(l.selected=!0)}}function Gf(t,l,e){if(l!=null&&(l=""+ol(l),l!==t.value&&(t.value=l),e==null)){t.defaultValue!==l&&(t.defaultValue=l);return}t.defaultValue=e!=null?""+ol(e):""}function wf(t,l,e,a){if(l==null){if(a!=null){if(e!=null)throw Error(m(92));if(bl(a)){if(1<a.length)throw Error(m(93));a=a[0]}e=a}e==null&&(e=""),l=e}e=ol(l),t.defaultValue=e,a=t.textContent,a===e&&a!==""&&a!==null&&(t.value=a),lu(t)}function $e(t,l){if(l){var e=t.firstChild;if(e&&e===t.lastChild&&e.nodeType===3){e.nodeValue=l;return}}t.textContent=l}var a0=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Xf(t,l,e){var a=l.indexOf("--")===0;e==null||typeof e=="boolean"||e===""?a?t.setProperty(l,""):l==="float"?t.cssFloat="":t[l]="":a?t.setProperty(l,e):typeof e!="number"||e===0||a0.has(l)?l==="float"?t.cssFloat=e:t[l]=(""+e).trim():t[l]=e+"px"}function Qf(t,l,e){if(l!=null&&typeof l!="object")throw Error(m(62));if(t=t.style,e!=null){for(var a in e)!e.hasOwnProperty(a)||l!=null&&l.hasOwnProperty(a)||(a.indexOf("--")===0?t.setProperty(a,""):a==="float"?t.cssFloat="":t[a]="");for(var n in l)a=l[n],l.hasOwnProperty(n)&&e[n]!==a&&Xf(t,n,a)}else for(var i in l)l.hasOwnProperty(i)&&Xf(t,i,l[i])}function nu(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var n0=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),i0=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Un(t){return i0.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function Hl(){}var iu=null;function uu(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Fe=null,Ie=null;function Lf(t){var l=Ke(t);if(l&&(t=l.stateNode)){var e=t[Lt]||null;t:switch(t=l.stateNode,l.type){case"input":if(eu(t,e.value,e.defaultValue,e.defaultValue,e.checked,e.defaultChecked,e.type,e.name),l=e.name,e.type==="radio"&&l!=null){for(e=t;e.parentNode;)e=e.parentNode;for(e=e.querySelectorAll('input[name="'+sl(""+l)+'"][type="radio"]'),l=0;l<e.length;l++){var a=e[l];if(a!==t&&a.form===t.form){var n=a[Lt]||null;if(!n)throw Error(m(90));eu(a,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name)}}for(l=0;l<e.length;l++)a=e[l],a.form===t.form&&qf(a)}break t;case"textarea":Gf(t,e.value,e.defaultValue);break t;case"select":l=e.value,l!=null&&We(t,!!e.multiple,l,!1)}}}var cu=!1;function Zf(t,l,e){if(cu)return t(l,e);cu=!0;try{var a=t(l);return a}finally{if(cu=!1,(Fe!==null||Ie!==null)&&(xi(),Fe&&(l=Fe,t=Ie,Ie=Fe=null,Lf(l),t)))for(l=0;l<t.length;l++)Lf(t[l])}}function Ha(t,l){var e=t.stateNode;if(e===null)return null;var a=e[Lt]||null;if(a===null)return null;e=a[l];t:switch(l){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(t=t.type,a=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!a;break t;default:t=!1}if(t)return null;if(e&&typeof e!="function")throw Error(m(231,l,typeof e));return e}var Rl=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),fu=!1;if(Rl)try{var Ra={};Object.defineProperty(Ra,"passive",{get:function(){fu=!0}}),window.addEventListener("test",Ra,Ra),window.removeEventListener("test",Ra,Ra)}catch{fu=!1}var te=null,ou=null,Hn=null;function Vf(){if(Hn)return Hn;var t,l=ou,e=l.length,a,n="value"in te?te.value:te.textContent,i=n.length;for(t=0;t<e&&l[t]===n[t];t++);var u=e-t;for(a=1;a<=u&&l[e-a]===n[i-a];a++);return Hn=n.slice(t,1<a?1-a:void 0)}function Rn(t){var l=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&l===13&&(t=13)):t=l,t===10&&(t=13),32<=t||t===13?t:0}function Bn(){return!0}function Kf(){return!1}function Zt(t){function l(e,a,n,i,u){this._reactName=e,this._targetInst=n,this.type=a,this.nativeEvent=i,this.target=u,this.currentTarget=null;for(var c in t)t.hasOwnProperty(c)&&(e=t[c],this[c]=e?e(i):i[c]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Bn:Kf,this.isPropagationStopped=Kf,this}return B(l.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():typeof e.returnValue!="unknown"&&(e.returnValue=!1),this.isDefaultPrevented=Bn)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():typeof e.cancelBubble!="unknown"&&(e.cancelBubble=!0),this.isPropagationStopped=Bn)},persist:function(){},isPersistent:Bn}),l}var Ne={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},qn=Zt(Ne),Ba=B({},Ne,{view:0,detail:0}),u0=Zt(Ba),su,ru,qa,Yn=B({},Ba,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:mu,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==qa&&(qa&&t.type==="mousemove"?(su=t.screenX-qa.screenX,ru=t.screenY-qa.screenY):ru=su=0,qa=t),su)},movementY:function(t){return"movementY"in t?t.movementY:ru}}),Jf=Zt(Yn),c0=B({},Yn,{dataTransfer:0}),f0=Zt(c0),o0=B({},Ba,{relatedTarget:0}),du=Zt(o0),s0=B({},Ne,{animationName:0,elapsedTime:0,pseudoElement:0}),r0=Zt(s0),d0=B({},Ne,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),m0=Zt(d0),h0=B({},Ne,{data:0}),kf=Zt(h0),g0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},p0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},y0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function v0(t){var l=this.nativeEvent;return l.getModifierState?l.getModifierState(t):(t=y0[t])?!!l[t]:!1}function mu(){return v0}var b0=B({},Ba,{key:function(t){if(t.key){var l=g0[t.key]||t.key;if(l!=="Unidentified")return l}return t.type==="keypress"?(t=Rn(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?p0[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:mu,charCode:function(t){return t.type==="keypress"?Rn(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Rn(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),x0=Zt(b0),S0=B({},Yn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Wf=Zt(S0),z0=B({},Ba,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:mu}),A0=Zt(z0),E0=B({},Ne,{propertyName:0,elapsedTime:0,pseudoElement:0}),j0=Zt(E0),T0=B({},Yn,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),N0=Zt(T0),_0=B({},Ne,{newState:0,oldState:0}),M0=Zt(_0),O0=[9,13,27,32],hu=Rl&&"CompositionEvent"in window,Ya=null;Rl&&"documentMode"in document&&(Ya=document.documentMode);var D0=Rl&&"TextEvent"in window&&!Ya,$f=Rl&&(!hu||Ya&&8<Ya&&11>=Ya),Ff=" ",If=!1;function Pf(t,l){switch(t){case"keyup":return O0.indexOf(l.keyCode)!==-1;case"keydown":return l.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function to(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Pe=!1;function C0(t,l){switch(t){case"compositionend":return to(l);case"keypress":return l.which!==32?null:(If=!0,Ff);case"textInput":return t=l.data,t===Ff&&If?null:t;default:return null}}function U0(t,l){if(Pe)return t==="compositionend"||!hu&&Pf(t,l)?(t=Vf(),Hn=ou=te=null,Pe=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(l.ctrlKey||l.altKey||l.metaKey)||l.ctrlKey&&l.altKey){if(l.char&&1<l.char.length)return l.char;if(l.which)return String.fromCharCode(l.which)}return null;case"compositionend":return $f&&l.locale!=="ko"?null:l.data;default:return null}}var H0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function lo(t){var l=t&&t.nodeName&&t.nodeName.toLowerCase();return l==="input"?!!H0[t.type]:l==="textarea"}function eo(t,l,e,a){Fe?Ie?Ie.push(a):Ie=[a]:Fe=a,l=Ni(l,"onChange"),0<l.length&&(e=new qn("onChange","change",null,e,a),t.push({event:e,listeners:l}))}var Ga=null,wa=null;function R0(t){Gr(t,0)}function Gn(t){var l=Ua(t);if(qf(l))return t}function ao(t,l){if(t==="change")return l}var no=!1;if(Rl){var gu;if(Rl){var pu="oninput"in document;if(!pu){var io=document.createElement("div");io.setAttribute("oninput","return;"),pu=typeof io.oninput=="function"}gu=pu}else gu=!1;no=gu&&(!document.documentMode||9<document.documentMode)}function uo(){Ga&&(Ga.detachEvent("onpropertychange",co),wa=Ga=null)}function co(t){if(t.propertyName==="value"&&Gn(wa)){var l=[];eo(l,wa,t,uu(t)),Zf(R0,l)}}function B0(t,l,e){t==="focusin"?(uo(),Ga=l,wa=e,Ga.attachEvent("onpropertychange",co)):t==="focusout"&&uo()}function q0(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Gn(wa)}function Y0(t,l){if(t==="click")return Gn(l)}function G0(t,l){if(t==="input"||t==="change")return Gn(l)}function w0(t,l){return t===l&&(t!==0||1/t===1/l)||t!==t&&l!==l}var ll=typeof Object.is=="function"?Object.is:w0;function Xa(t,l){if(ll(t,l))return!0;if(typeof t!="object"||t===null||typeof l!="object"||l===null)return!1;var e=Object.keys(t),a=Object.keys(l);if(e.length!==a.length)return!1;for(a=0;a<e.length;a++){var n=e[a];if(!Ji.call(l,n)||!ll(t[n],l[n]))return!1}return!0}function fo(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function oo(t,l){var e=fo(t);t=0;for(var a;e;){if(e.nodeType===3){if(a=t+e.textContent.length,t<=l&&a>=l)return{node:e,offset:l-t};t=a}t:{for(;e;){if(e.nextSibling){e=e.nextSibling;break t}e=e.parentNode}e=void 0}e=fo(e)}}function so(t,l){return t&&l?t===l?!0:t&&t.nodeType===3?!1:l&&l.nodeType===3?so(t,l.parentNode):"contains"in t?t.contains(l):t.compareDocumentPosition?!!(t.compareDocumentPosition(l)&16):!1:!1}function ro(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var l=Cn(t.document);l instanceof t.HTMLIFrameElement;){try{var e=typeof l.contentWindow.location.href=="string"}catch{e=!1}if(e)t=l.contentWindow;else break;l=Cn(t.document)}return l}function yu(t){var l=t&&t.nodeName&&t.nodeName.toLowerCase();return l&&(l==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||l==="textarea"||t.contentEditable==="true")}var X0=Rl&&"documentMode"in document&&11>=document.documentMode,ta=null,vu=null,Qa=null,bu=!1;function mo(t,l,e){var a=e.window===e?e.document:e.nodeType===9?e:e.ownerDocument;bu||ta==null||ta!==Cn(a)||(a=ta,"selectionStart"in a&&yu(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),Qa&&Xa(Qa,a)||(Qa=a,a=Ni(vu,"onSelect"),0<a.length&&(l=new qn("onSelect","select",null,l,e),t.push({event:l,listeners:a}),l.target=ta)))}function _e(t,l){var e={};return e[t.toLowerCase()]=l.toLowerCase(),e["Webkit"+t]="webkit"+l,e["Moz"+t]="moz"+l,e}var la={animationend:_e("Animation","AnimationEnd"),animationiteration:_e("Animation","AnimationIteration"),animationstart:_e("Animation","AnimationStart"),transitionrun:_e("Transition","TransitionRun"),transitionstart:_e("Transition","TransitionStart"),transitioncancel:_e("Transition","TransitionCancel"),transitionend:_e("Transition","TransitionEnd")},xu={},ho={};Rl&&(ho=document.createElement("div").style,"AnimationEvent"in window||(delete la.animationend.animation,delete la.animationiteration.animation,delete la.animationstart.animation),"TransitionEvent"in window||delete la.transitionend.transition);function Me(t){if(xu[t])return xu[t];if(!la[t])return t;var l=la[t],e;for(e in l)if(l.hasOwnProperty(e)&&e in ho)return xu[t]=l[e];return t}var go=Me("animationend"),po=Me("animationiteration"),yo=Me("animationstart"),Q0=Me("transitionrun"),L0=Me("transitionstart"),Z0=Me("transitioncancel"),vo=Me("transitionend"),bo=new Map,Su="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Su.push("scrollEnd");function xl(t,l){bo.set(t,l),Te(l,[t])}var wn=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var l=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(l))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},rl=[],ea=0,zu=0;function Xn(){for(var t=ea,l=zu=ea=0;l<t;){var e=rl[l];rl[l++]=null;var a=rl[l];rl[l++]=null;var n=rl[l];rl[l++]=null;var i=rl[l];if(rl[l++]=null,a!==null&&n!==null){var u=a.pending;u===null?n.next=n:(n.next=u.next,u.next=n),a.pending=n}i!==0&&xo(e,n,i)}}function Qn(t,l,e,a){rl[ea++]=t,rl[ea++]=l,rl[ea++]=e,rl[ea++]=a,zu|=a,t.lanes|=a,t=t.alternate,t!==null&&(t.lanes|=a)}function Au(t,l,e,a){return Qn(t,l,e,a),Ln(t)}function Oe(t,l){return Qn(t,null,null,l),Ln(t)}function xo(t,l,e){t.lanes|=e;var a=t.alternate;a!==null&&(a.lanes|=e);for(var n=!1,i=t.return;i!==null;)i.childLanes|=e,a=i.alternate,a!==null&&(a.childLanes|=e),i.tag===22&&(t=i.stateNode,t===null||t._visibility&1||(n=!0)),t=i,i=i.return;return t.tag===3?(i=t.stateNode,n&&l!==null&&(n=31-tl(e),t=i.hiddenUpdates,a=t[n],a===null?t[n]=[l]:a.push(l),l.lane=e|536870912),i):null}function Ln(t){if(50<rn)throw rn=0,Cc=null,Error(m(185));for(var l=t.return;l!==null;)t=l,l=t.return;return t.tag===3?t.stateNode:null}var aa={};function V0(t,l,e,a){this.tag=t,this.key=e,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=l,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function el(t,l,e,a){return new V0(t,l,e,a)}function Eu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Bl(t,l){var e=t.alternate;return e===null?(e=el(t.tag,l,t.key,t.mode),e.elementType=t.elementType,e.type=t.type,e.stateNode=t.stateNode,e.alternate=t,t.alternate=e):(e.pendingProps=l,e.type=t.type,e.flags=0,e.subtreeFlags=0,e.deletions=null),e.flags=t.flags&65011712,e.childLanes=t.childLanes,e.lanes=t.lanes,e.child=t.child,e.memoizedProps=t.memoizedProps,e.memoizedState=t.memoizedState,e.updateQueue=t.updateQueue,l=t.dependencies,e.dependencies=l===null?null:{lanes:l.lanes,firstContext:l.firstContext},e.sibling=t.sibling,e.index=t.index,e.ref=t.ref,e.refCleanup=t.refCleanup,e}function So(t,l){t.flags&=65011714;var e=t.alternate;return e===null?(t.childLanes=0,t.lanes=l,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,t.type=e.type,l=e.dependencies,t.dependencies=l===null?null:{lanes:l.lanes,firstContext:l.firstContext}),t}function Zn(t,l,e,a,n,i){var u=0;if(a=t,typeof t=="function")Eu(t)&&(u=1);else if(typeof t=="string")u=$m(t,e,C.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case El:return t=el(31,e,l,n),t.elementType=El,t.lanes=i,t;case Bt:return De(e.children,n,i,l);case Dl:u=8,n|=24;break;case Ft:return t=el(12,e,l,n|2),t.elementType=Ft,t.lanes=i,t;case Al:return t=el(13,e,l,n),t.elementType=Al,t.lanes=i,t;case wt:return t=el(19,e,l,n),t.elementType=wt,t.lanes=i,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Ut:u=10;break t;case Fl:u=9;break t;case fl:u=11;break t;case $:u=14;break t;case Xt:u=16,a=null;break t}u=29,e=Error(m(130,t===null?"null":typeof t,"")),a=null}return l=el(u,e,l,n),l.elementType=t,l.type=a,l.lanes=i,l}function De(t,l,e,a){return t=el(7,t,a,l),t.lanes=e,t}function ju(t,l,e){return t=el(6,t,null,l),t.lanes=e,t}function zo(t){var l=el(18,null,null,0);return l.stateNode=t,l}function Tu(t,l,e){return l=el(4,t.children!==null?t.children:[],t.key,l),l.lanes=e,l.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},l}var Ao=new WeakMap;function dl(t,l){if(typeof t=="object"&&t!==null){var e=Ao.get(t);return e!==void 0?e:(l={value:t,source:l,stack:Sf(l)},Ao.set(t,l),l)}return{value:t,source:l,stack:Sf(l)}}var na=[],ia=0,Vn=null,La=0,ml=[],hl=0,le=null,Tl=1,Nl="";function ql(t,l){na[ia++]=La,na[ia++]=Vn,Vn=t,La=l}function Eo(t,l,e){ml[hl++]=Tl,ml[hl++]=Nl,ml[hl++]=le,le=t;var a=Tl;t=Nl;var n=32-tl(a)-1;a&=~(1<<n),e+=1;var i=32-tl(l)+n;if(30<i){var u=n-n%5;i=(a&(1<<u)-1).toString(32),a>>=u,n-=u,Tl=1<<32-tl(l)+n|e<<n|a,Nl=i+t}else Tl=1<<i|e<<n|a,Nl=t}function Nu(t){t.return!==null&&(ql(t,1),Eo(t,1,0))}function _u(t){for(;t===Vn;)Vn=na[--ia],na[ia]=null,La=na[--ia],na[ia]=null;for(;t===le;)le=ml[--hl],ml[hl]=null,Nl=ml[--hl],ml[hl]=null,Tl=ml[--hl],ml[hl]=null}function jo(t,l){ml[hl++]=Tl,ml[hl++]=Nl,ml[hl++]=le,Tl=l.id,Nl=l.overflow,le=t}var Mt=null,dt=null,F=!1,ee=null,gl=!1,Mu=Error(m(519));function ae(t){var l=Error(m(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Za(dl(l,t)),Mu}function To(t){var l=t.stateNode,e=t.type,a=t.memoizedProps;switch(l[_t]=t,l[Lt]=a,e){case"dialog":K("cancel",l),K("close",l);break;case"iframe":case"object":case"embed":K("load",l);break;case"video":case"audio":for(e=0;e<mn.length;e++)K(mn[e],l);break;case"source":K("error",l);break;case"img":case"image":case"link":K("error",l),K("load",l);break;case"details":K("toggle",l);break;case"input":K("invalid",l),Yf(l,a.value,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name,!0);break;case"select":K("invalid",l);break;case"textarea":K("invalid",l),wf(l,a.value,a.defaultValue,a.children)}e=a.children,typeof e!="string"&&typeof e!="number"&&typeof e!="bigint"||l.textContent===""+e||a.suppressHydrationWarning===!0||Lr(l.textContent,e)?(a.popover!=null&&(K("beforetoggle",l),K("toggle",l)),a.onScroll!=null&&K("scroll",l),a.onScrollEnd!=null&&K("scrollend",l),a.onClick!=null&&(l.onclick=Hl),l=!0):l=!1,l||ae(t,!0)}function No(t){for(Mt=t.return;Mt;)switch(Mt.tag){case 5:case 31:case 13:gl=!1;return;case 27:case 3:gl=!0;return;default:Mt=Mt.return}}function ua(t){if(t!==Mt)return!1;if(!F)return No(t),F=!0,!1;var l=t.tag,e;if((e=l!==3&&l!==27)&&((e=l===5)&&(e=t.type,e=!(e!=="form"&&e!=="button")||Jc(t.type,t.memoizedProps)),e=!e),e&&dt&&ae(t),No(t),l===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(m(317));dt=Ir(t)}else if(l===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(m(317));dt=Ir(t)}else l===27?(l=dt,ye(t.type)?(t=Ic,Ic=null,dt=t):dt=l):dt=Mt?yl(t.stateNode.nextSibling):null;return!0}function Ce(){dt=Mt=null,F=!1}function Ou(){var t=ee;return t!==null&&(kt===null?kt=t:kt.push.apply(kt,t),ee=null),t}function Za(t){ee===null?ee=[t]:ee.push(t)}var Du=r(null),Ue=null,Yl=null;function ne(t,l,e){N(Du,l._currentValue),l._currentValue=e}function Gl(t){t._currentValue=Du.current,A(Du)}function Cu(t,l,e){for(;t!==null;){var a=t.alternate;if((t.childLanes&l)!==l?(t.childLanes|=l,a!==null&&(a.childLanes|=l)):a!==null&&(a.childLanes&l)!==l&&(a.childLanes|=l),t===e)break;t=t.return}}function Uu(t,l,e,a){var n=t.child;for(n!==null&&(n.return=t);n!==null;){var i=n.dependencies;if(i!==null){var u=n.child;i=i.firstContext;t:for(;i!==null;){var c=i;i=n;for(var o=0;o<l.length;o++)if(c.context===l[o]){i.lanes|=e,c=i.alternate,c!==null&&(c.lanes|=e),Cu(i.return,e,t),a||(u=null);break t}i=c.next}}else if(n.tag===18){if(u=n.return,u===null)throw Error(m(341));u.lanes|=e,i=u.alternate,i!==null&&(i.lanes|=e),Cu(u,e,t),u=null}else u=n.child;if(u!==null)u.return=n;else for(u=n;u!==null;){if(u===t){u=null;break}if(n=u.sibling,n!==null){n.return=u.return,u=n;break}u=u.return}n=u}}function ca(t,l,e,a){t=null;for(var n=l,i=!1;n!==null;){if(!i){if((n.flags&524288)!==0)i=!0;else if((n.flags&262144)!==0)break}if(n.tag===10){var u=n.alternate;if(u===null)throw Error(m(387));if(u=u.memoizedProps,u!==null){var c=n.type;ll(n.pendingProps.value,u.value)||(t!==null?t.push(c):t=[c])}}else if(n===et.current){if(u=n.alternate,u===null)throw Error(m(387));u.memoizedState.memoizedState!==n.memoizedState.memoizedState&&(t!==null?t.push(vn):t=[vn])}n=n.return}t!==null&&Uu(l,t,e,a),l.flags|=262144}function Kn(t){for(t=t.firstContext;t!==null;){if(!ll(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function He(t){Ue=t,Yl=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Ot(t){return _o(Ue,t)}function Jn(t,l){return Ue===null&&He(t),_o(t,l)}function _o(t,l){var e=l._currentValue;if(l={context:l,memoizedValue:e,next:null},Yl===null){if(t===null)throw Error(m(308));Yl=l,t.dependencies={lanes:0,firstContext:l},t.flags|=524288}else Yl=Yl.next=l;return e}var K0=typeof AbortController<"u"?AbortController:function(){var t=[],l=this.signal={aborted:!1,addEventListener:function(e,a){t.push(a)}};this.abort=function(){l.aborted=!0,t.forEach(function(e){return e()})}},J0=z.unstable_scheduleCallback,k0=z.unstable_NormalPriority,St={$$typeof:Ut,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Hu(){return{controller:new K0,data:new Map,refCount:0}}function Va(t){t.refCount--,t.refCount===0&&J0(k0,function(){t.controller.abort()})}var Ka=null,Ru=0,fa=0,oa=null;function W0(t,l){if(Ka===null){var e=Ka=[];Ru=0,fa=Yc(),oa={status:"pending",value:void 0,then:function(a){e.push(a)}}}return Ru++,l.then(Mo,Mo),l}function Mo(){if(--Ru===0&&Ka!==null){oa!==null&&(oa.status="fulfilled");var t=Ka;Ka=null,fa=0,oa=null;for(var l=0;l<t.length;l++)(0,t[l])()}}function $0(t,l){var e=[],a={status:"pending",value:null,reason:null,then:function(n){e.push(n)}};return t.then(function(){a.status="fulfilled",a.value=l;for(var n=0;n<e.length;n++)(0,e[n])(l)},function(n){for(a.status="rejected",a.reason=n,n=0;n<e.length;n++)(0,e[n])(void 0)}),a}var Oo=b.S;b.S=function(t,l){mr=It(),typeof l=="object"&&l!==null&&typeof l.then=="function"&&W0(t,l),Oo!==null&&Oo(t,l)};var Re=r(null);function Bu(){var t=Re.current;return t!==null?t:st.pooledCache}function kn(t,l){l===null?N(Re,Re.current):N(Re,l.pool)}function Do(){var t=Bu();return t===null?null:{parent:St._currentValue,pool:t}}var sa=Error(m(460)),qu=Error(m(474)),Wn=Error(m(542)),$n={then:function(){}};function Co(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Uo(t,l,e){switch(e=t[e],e===void 0?t.push(l):e!==l&&(l.then(Hl,Hl),l=e),l.status){case"fulfilled":return l.value;case"rejected":throw t=l.reason,Ro(t),t;default:if(typeof l.status=="string")l.then(Hl,Hl);else{if(t=st,t!==null&&100<t.shellSuspendCounter)throw Error(m(482));t=l,t.status="pending",t.then(function(a){if(l.status==="pending"){var n=l;n.status="fulfilled",n.value=a}},function(a){if(l.status==="pending"){var n=l;n.status="rejected",n.reason=a}})}switch(l.status){case"fulfilled":return l.value;case"rejected":throw t=l.reason,Ro(t),t}throw qe=l,sa}}function Be(t){try{var l=t._init;return l(t._payload)}catch(e){throw e!==null&&typeof e=="object"&&typeof e.then=="function"?(qe=e,sa):e}}var qe=null;function Ho(){if(qe===null)throw Error(m(459));var t=qe;return qe=null,t}function Ro(t){if(t===sa||t===Wn)throw Error(m(483))}var ra=null,Ja=0;function Fn(t){var l=Ja;return Ja+=1,ra===null&&(ra=[]),Uo(ra,t,l)}function ka(t,l){l=l.props.ref,t.ref=l!==void 0?l:null}function In(t,l){throw l.$$typeof===lt?Error(m(525)):(t=Object.prototype.toString.call(l),Error(m(31,t==="[object Object]"?"object with keys {"+Object.keys(l).join(", ")+"}":t)))}function Bo(t){function l(d,s){if(t){var h=d.deletions;h===null?(d.deletions=[s],d.flags|=16):h.push(s)}}function e(d,s){if(!t)return null;for(;s!==null;)l(d,s),s=s.sibling;return null}function a(d){for(var s=new Map;d!==null;)d.key!==null?s.set(d.key,d):s.set(d.index,d),d=d.sibling;return s}function n(d,s){return d=Bl(d,s),d.index=0,d.sibling=null,d}function i(d,s,h){return d.index=h,t?(h=d.alternate,h!==null?(h=h.index,h<s?(d.flags|=67108866,s):h):(d.flags|=67108866,s)):(d.flags|=1048576,s)}function u(d){return t&&d.alternate===null&&(d.flags|=67108866),d}function c(d,s,h,x){return s===null||s.tag!==6?(s=ju(h,d.mode,x),s.return=d,s):(s=n(s,h),s.return=d,s)}function o(d,s,h,x){var H=h.type;return H===Bt?v(d,s,h.props.children,x,h.key):s!==null&&(s.elementType===H||typeof H=="object"&&H!==null&&H.$$typeof===Xt&&Be(H)===s.type)?(s=n(s,h.props),ka(s,h),s.return=d,s):(s=Zn(h.type,h.key,h.props,null,d.mode,x),ka(s,h),s.return=d,s)}function g(d,s,h,x){return s===null||s.tag!==4||s.stateNode.containerInfo!==h.containerInfo||s.stateNode.implementation!==h.implementation?(s=Tu(h,d.mode,x),s.return=d,s):(s=n(s,h.children||[]),s.return=d,s)}function v(d,s,h,x,H){return s===null||s.tag!==7?(s=De(h,d.mode,x,H),s.return=d,s):(s=n(s,h),s.return=d,s)}function S(d,s,h){if(typeof s=="string"&&s!==""||typeof s=="number"||typeof s=="bigint")return s=ju(""+s,d.mode,h),s.return=d,s;if(typeof s=="object"&&s!==null){switch(s.$$typeof){case $t:return h=Zn(s.type,s.key,s.props,null,d.mode,h),ka(h,s),h.return=d,h;case Gt:return s=Tu(s,d.mode,h),s.return=d,s;case Xt:return s=Be(s),S(d,s,h)}if(bl(s)||Qt(s))return s=De(s,d.mode,h,null),s.return=d,s;if(typeof s.then=="function")return S(d,Fn(s),h);if(s.$$typeof===Ut)return S(d,Jn(d,s),h);In(d,s)}return null}function p(d,s,h,x){var H=s!==null?s.key:null;if(typeof h=="string"&&h!==""||typeof h=="number"||typeof h=="bigint")return H!==null?null:c(d,s,""+h,x);if(typeof h=="object"&&h!==null){switch(h.$$typeof){case $t:return h.key===H?o(d,s,h,x):null;case Gt:return h.key===H?g(d,s,h,x):null;case Xt:return h=Be(h),p(d,s,h,x)}if(bl(h)||Qt(h))return H!==null?null:v(d,s,h,x,null);if(typeof h.then=="function")return p(d,s,Fn(h),x);if(h.$$typeof===Ut)return p(d,s,Jn(d,h),x);In(d,h)}return null}function y(d,s,h,x,H){if(typeof x=="string"&&x!==""||typeof x=="number"||typeof x=="bigint")return d=d.get(h)||null,c(s,d,""+x,H);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case $t:return d=d.get(x.key===null?h:x.key)||null,o(s,d,x,H);case Gt:return d=d.get(x.key===null?h:x.key)||null,g(s,d,x,H);case Xt:return x=Be(x),y(d,s,h,x,H)}if(bl(x)||Qt(x))return d=d.get(h)||null,v(s,d,x,H,null);if(typeof x.then=="function")return y(d,s,h,Fn(x),H);if(x.$$typeof===Ut)return y(d,s,h,Jn(s,x),H);In(s,x)}return null}function O(d,s,h,x){for(var H=null,I=null,U=s,L=s=0,W=null;U!==null&&L<h.length;L++){U.index>L?(W=U,U=null):W=U.sibling;var P=p(d,U,h[L],x);if(P===null){U===null&&(U=W);break}t&&U&&P.alternate===null&&l(d,U),s=i(P,s,L),I===null?H=P:I.sibling=P,I=P,U=W}if(L===h.length)return e(d,U),F&&ql(d,L),H;if(U===null){for(;L<h.length;L++)U=S(d,h[L],x),U!==null&&(s=i(U,s,L),I===null?H=U:I.sibling=U,I=U);return F&&ql(d,L),H}for(U=a(U);L<h.length;L++)W=y(U,d,L,h[L],x),W!==null&&(t&&W.alternate!==null&&U.delete(W.key===null?L:W.key),s=i(W,s,L),I===null?H=W:I.sibling=W,I=W);return t&&U.forEach(function(ze){return l(d,ze)}),F&&ql(d,L),H}function q(d,s,h,x){if(h==null)throw Error(m(151));for(var H=null,I=null,U=s,L=s=0,W=null,P=h.next();U!==null&&!P.done;L++,P=h.next()){U.index>L?(W=U,U=null):W=U.sibling;var ze=p(d,U,P.value,x);if(ze===null){U===null&&(U=W);break}t&&U&&ze.alternate===null&&l(d,U),s=i(ze,s,L),I===null?H=ze:I.sibling=ze,I=ze,U=W}if(P.done)return e(d,U),F&&ql(d,L),H;if(U===null){for(;!P.done;L++,P=h.next())P=S(d,P.value,x),P!==null&&(s=i(P,s,L),I===null?H=P:I.sibling=P,I=P);return F&&ql(d,L),H}for(U=a(U);!P.done;L++,P=h.next())P=y(U,d,L,P.value,x),P!==null&&(t&&P.alternate!==null&&U.delete(P.key===null?L:P.key),s=i(P,s,L),I===null?H=P:I.sibling=P,I=P);return t&&U.forEach(function(ch){return l(d,ch)}),F&&ql(d,L),H}function ft(d,s,h,x){if(typeof h=="object"&&h!==null&&h.type===Bt&&h.key===null&&(h=h.props.children),typeof h=="object"&&h!==null){switch(h.$$typeof){case $t:t:{for(var H=h.key;s!==null;){if(s.key===H){if(H=h.type,H===Bt){if(s.tag===7){e(d,s.sibling),x=n(s,h.props.children),x.return=d,d=x;break t}}else if(s.elementType===H||typeof H=="object"&&H!==null&&H.$$typeof===Xt&&Be(H)===s.type){e(d,s.sibling),x=n(s,h.props),ka(x,h),x.return=d,d=x;break t}e(d,s);break}else l(d,s);s=s.sibling}h.type===Bt?(x=De(h.props.children,d.mode,x,h.key),x.return=d,d=x):(x=Zn(h.type,h.key,h.props,null,d.mode,x),ka(x,h),x.return=d,d=x)}return u(d);case Gt:t:{for(H=h.key;s!==null;){if(s.key===H)if(s.tag===4&&s.stateNode.containerInfo===h.containerInfo&&s.stateNode.implementation===h.implementation){e(d,s.sibling),x=n(s,h.children||[]),x.return=d,d=x;break t}else{e(d,s);break}else l(d,s);s=s.sibling}x=Tu(h,d.mode,x),x.return=d,d=x}return u(d);case Xt:return h=Be(h),ft(d,s,h,x)}if(bl(h))return O(d,s,h,x);if(Qt(h)){if(H=Qt(h),typeof H!="function")throw Error(m(150));return h=H.call(h),q(d,s,h,x)}if(typeof h.then=="function")return ft(d,s,Fn(h),x);if(h.$$typeof===Ut)return ft(d,s,Jn(d,h),x);In(d,h)}return typeof h=="string"&&h!==""||typeof h=="number"||typeof h=="bigint"?(h=""+h,s!==null&&s.tag===6?(e(d,s.sibling),x=n(s,h),x.return=d,d=x):(e(d,s),x=ju(h,d.mode,x),x.return=d,d=x),u(d)):e(d,s)}return function(d,s,h,x){try{Ja=0;var H=ft(d,s,h,x);return ra=null,H}catch(U){if(U===sa||U===Wn)throw U;var I=el(29,U,null,d.mode);return I.lanes=x,I.return=d,I}}}var Ye=Bo(!0),qo=Bo(!1),ie=!1;function Yu(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Gu(t,l){t=t.updateQueue,l.updateQueue===t&&(l.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function ue(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function ce(t,l,e){var a=t.updateQueue;if(a===null)return null;if(a=a.shared,(tt&2)!==0){var n=a.pending;return n===null?l.next=l:(l.next=n.next,n.next=l),a.pending=l,l=Ln(t),xo(t,null,e),l}return Qn(t,a,l,e),Ln(t)}function Wa(t,l,e){if(l=l.updateQueue,l!==null&&(l=l.shared,(e&4194048)!==0)){var a=l.lanes;a&=t.pendingLanes,e|=a,l.lanes=e,Nf(t,e)}}function wu(t,l){var e=t.updateQueue,a=t.alternate;if(a!==null&&(a=a.updateQueue,e===a)){var n=null,i=null;if(e=e.firstBaseUpdate,e!==null){do{var u={lane:e.lane,tag:e.tag,payload:e.payload,callback:null,next:null};i===null?n=i=u:i=i.next=u,e=e.next}while(e!==null);i===null?n=i=l:i=i.next=l}else n=i=l;e={baseState:a.baseState,firstBaseUpdate:n,lastBaseUpdate:i,shared:a.shared,callbacks:a.callbacks},t.updateQueue=e;return}t=e.lastBaseUpdate,t===null?e.firstBaseUpdate=l:t.next=l,e.lastBaseUpdate=l}var Xu=!1;function $a(){if(Xu){var t=oa;if(t!==null)throw t}}function Fa(t,l,e,a){Xu=!1;var n=t.updateQueue;ie=!1;var i=n.firstBaseUpdate,u=n.lastBaseUpdate,c=n.shared.pending;if(c!==null){n.shared.pending=null;var o=c,g=o.next;o.next=null,u===null?i=g:u.next=g,u=o;var v=t.alternate;v!==null&&(v=v.updateQueue,c=v.lastBaseUpdate,c!==u&&(c===null?v.firstBaseUpdate=g:c.next=g,v.lastBaseUpdate=o))}if(i!==null){var S=n.baseState;u=0,v=g=o=null,c=i;do{var p=c.lane&-536870913,y=p!==c.lane;if(y?(k&p)===p:(a&p)===p){p!==0&&p===fa&&(Xu=!0),v!==null&&(v=v.next={lane:0,tag:c.tag,payload:c.payload,callback:null,next:null});t:{var O=t,q=c;p=l;var ft=e;switch(q.tag){case 1:if(O=q.payload,typeof O=="function"){S=O.call(ft,S,p);break t}S=O;break t;case 3:O.flags=O.flags&-65537|128;case 0:if(O=q.payload,p=typeof O=="function"?O.call(ft,S,p):O,p==null)break t;S=B({},S,p);break t;case 2:ie=!0}}p=c.callback,p!==null&&(t.flags|=64,y&&(t.flags|=8192),y=n.callbacks,y===null?n.callbacks=[p]:y.push(p))}else y={lane:p,tag:c.tag,payload:c.payload,callback:c.callback,next:null},v===null?(g=v=y,o=S):v=v.next=y,u|=p;if(c=c.next,c===null){if(c=n.shared.pending,c===null)break;y=c,c=y.next,y.next=null,n.lastBaseUpdate=y,n.shared.pending=null}}while(!0);v===null&&(o=S),n.baseState=o,n.firstBaseUpdate=g,n.lastBaseUpdate=v,i===null&&(n.shared.lanes=0),de|=u,t.lanes=u,t.memoizedState=S}}function Yo(t,l){if(typeof t!="function")throw Error(m(191,t));t.call(l)}function Go(t,l){var e=t.callbacks;if(e!==null)for(t.callbacks=null,t=0;t<e.length;t++)Yo(e[t],l)}var da=r(null),Pn=r(0);function wo(t,l){t=kl,N(Pn,t),N(da,l),kl=t|l.baseLanes}function Qu(){N(Pn,kl),N(da,da.current)}function Lu(){kl=Pn.current,A(da),A(Pn)}var al=r(null),pl=null;function fe(t){var l=t.alternate;N(bt,bt.current&1),N(al,t),pl===null&&(l===null||da.current!==null||l.memoizedState!==null)&&(pl=t)}function Zu(t){N(bt,bt.current),N(al,t),pl===null&&(pl=t)}function Xo(t){t.tag===22?(N(bt,bt.current),N(al,t),pl===null&&(pl=t)):oe()}function oe(){N(bt,bt.current),N(al,al.current)}function nl(t){A(al),pl===t&&(pl=null),A(bt)}var bt=r(0);function ti(t){for(var l=t;l!==null;){if(l.tag===13){var e=l.memoizedState;if(e!==null&&(e=e.dehydrated,e===null||$c(e)||Fc(e)))return l}else if(l.tag===19&&(l.memoizedProps.revealOrder==="forwards"||l.memoizedProps.revealOrder==="backwards"||l.memoizedProps.revealOrder==="unstable_legacy-backwards"||l.memoizedProps.revealOrder==="together")){if((l.flags&128)!==0)return l}else if(l.child!==null){l.child.return=l,l=l.child;continue}if(l===t)break;for(;l.sibling===null;){if(l.return===null||l.return===t)return null;l=l.return}l.sibling.return=l.return,l=l.sibling}return null}var wl=0,Q=null,ut=null,zt=null,li=!1,ma=!1,Ge=!1,ei=0,Ia=0,ha=null,F0=0;function pt(){throw Error(m(321))}function Vu(t,l){if(l===null)return!1;for(var e=0;e<l.length&&e<t.length;e++)if(!ll(t[e],l[e]))return!1;return!0}function Ku(t,l,e,a,n,i){return wl=i,Q=l,l.memoizedState=null,l.updateQueue=null,l.lanes=0,b.H=t===null||t.memoizedState===null?Es:cc,Ge=!1,i=e(a,n),Ge=!1,ma&&(i=Lo(l,e,a,n)),Qo(t),i}function Qo(t){b.H=ln;var l=ut!==null&&ut.next!==null;if(wl=0,zt=ut=Q=null,li=!1,Ia=0,ha=null,l)throw Error(m(300));t===null||At||(t=t.dependencies,t!==null&&Kn(t)&&(At=!0))}function Lo(t,l,e,a){Q=t;var n=0;do{if(ma&&(ha=null),Ia=0,ma=!1,25<=n)throw Error(m(301));if(n+=1,zt=ut=null,t.updateQueue!=null){var i=t.updateQueue;i.lastEffect=null,i.events=null,i.stores=null,i.memoCache!=null&&(i.memoCache.index=0)}b.H=js,i=l(e,a)}while(ma);return i}function I0(){var t=b.H,l=t.useState()[0];return l=typeof l.then=="function"?Pa(l):l,t=t.useState()[0],(ut!==null?ut.memoizedState:null)!==t&&(Q.flags|=1024),l}function Ju(){var t=ei!==0;return ei=0,t}function ku(t,l,e){l.updateQueue=t.updateQueue,l.flags&=-2053,t.lanes&=~e}function Wu(t){if(li){for(t=t.memoizedState;t!==null;){var l=t.queue;l!==null&&(l.pending=null),t=t.next}li=!1}wl=0,zt=ut=Q=null,ma=!1,Ia=ei=0,ha=null}function Yt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return zt===null?Q.memoizedState=zt=t:zt=zt.next=t,zt}function xt(){if(ut===null){var t=Q.alternate;t=t!==null?t.memoizedState:null}else t=ut.next;var l=zt===null?Q.memoizedState:zt.next;if(l!==null)zt=l,ut=t;else{if(t===null)throw Q.alternate===null?Error(m(467)):Error(m(310));ut=t,t={memoizedState:ut.memoizedState,baseState:ut.baseState,baseQueue:ut.baseQueue,queue:ut.queue,next:null},zt===null?Q.memoizedState=zt=t:zt=zt.next=t}return zt}function ai(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Pa(t){var l=Ia;return Ia+=1,ha===null&&(ha=[]),t=Uo(ha,t,l),l=Q,(zt===null?l.memoizedState:zt.next)===null&&(l=l.alternate,b.H=l===null||l.memoizedState===null?Es:cc),t}function ni(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return Pa(t);if(t.$$typeof===Ut)return Ot(t)}throw Error(m(438,String(t)))}function $u(t){var l=null,e=Q.updateQueue;if(e!==null&&(l=e.memoCache),l==null){var a=Q.alternate;a!==null&&(a=a.updateQueue,a!==null&&(a=a.memoCache,a!=null&&(l={data:a.data.map(function(n){return n.slice()}),index:0})))}if(l==null&&(l={data:[],index:0}),e===null&&(e=ai(),Q.updateQueue=e),e.memoCache=l,e=l.data[l.index],e===void 0)for(e=l.data[l.index]=Array(t),a=0;a<t;a++)e[a]=Le;return l.index++,e}function Xl(t,l){return typeof l=="function"?l(t):l}function ii(t){var l=xt();return Fu(l,ut,t)}function Fu(t,l,e){var a=t.queue;if(a===null)throw Error(m(311));a.lastRenderedReducer=e;var n=t.baseQueue,i=a.pending;if(i!==null){if(n!==null){var u=n.next;n.next=i.next,i.next=u}l.baseQueue=n=i,a.pending=null}if(i=t.baseState,n===null)t.memoizedState=i;else{l=n.next;var c=u=null,o=null,g=l,v=!1;do{var S=g.lane&-536870913;if(S!==g.lane?(k&S)===S:(wl&S)===S){var p=g.revertLane;if(p===0)o!==null&&(o=o.next={lane:0,revertLane:0,gesture:null,action:g.action,hasEagerState:g.hasEagerState,eagerState:g.eagerState,next:null}),S===fa&&(v=!0);else if((wl&p)===p){g=g.next,p===fa&&(v=!0);continue}else S={lane:0,revertLane:g.revertLane,gesture:null,action:g.action,hasEagerState:g.hasEagerState,eagerState:g.eagerState,next:null},o===null?(c=o=S,u=i):o=o.next=S,Q.lanes|=p,de|=p;S=g.action,Ge&&e(i,S),i=g.hasEagerState?g.eagerState:e(i,S)}else p={lane:S,revertLane:g.revertLane,gesture:g.gesture,action:g.action,hasEagerState:g.hasEagerState,eagerState:g.eagerState,next:null},o===null?(c=o=p,u=i):o=o.next=p,Q.lanes|=S,de|=S;g=g.next}while(g!==null&&g!==l);if(o===null?u=i:o.next=c,!ll(i,t.memoizedState)&&(At=!0,v&&(e=oa,e!==null)))throw e;t.memoizedState=i,t.baseState=u,t.baseQueue=o,a.lastRenderedState=i}return n===null&&(a.lanes=0),[t.memoizedState,a.dispatch]}function Iu(t){var l=xt(),e=l.queue;if(e===null)throw Error(m(311));e.lastRenderedReducer=t;var a=e.dispatch,n=e.pending,i=l.memoizedState;if(n!==null){e.pending=null;var u=n=n.next;do i=t(i,u.action),u=u.next;while(u!==n);ll(i,l.memoizedState)||(At=!0),l.memoizedState=i,l.baseQueue===null&&(l.baseState=i),e.lastRenderedState=i}return[i,a]}function Zo(t,l,e){var a=Q,n=xt(),i=F;if(i){if(e===void 0)throw Error(m(407));e=e()}else e=l();var u=!ll((ut||n).memoizedState,e);if(u&&(n.memoizedState=e,At=!0),n=n.queue,lc(Jo.bind(null,a,n,t),[t]),n.getSnapshot!==l||u||zt!==null&&zt.memoizedState.tag&1){if(a.flags|=2048,ga(9,{destroy:void 0},Ko.bind(null,a,n,e,l),null),st===null)throw Error(m(349));i||(wl&127)!==0||Vo(a,l,e)}return e}function Vo(t,l,e){t.flags|=16384,t={getSnapshot:l,value:e},l=Q.updateQueue,l===null?(l=ai(),Q.updateQueue=l,l.stores=[t]):(e=l.stores,e===null?l.stores=[t]:e.push(t))}function Ko(t,l,e,a){l.value=e,l.getSnapshot=a,ko(l)&&Wo(t)}function Jo(t,l,e){return e(function(){ko(l)&&Wo(t)})}function ko(t){var l=t.getSnapshot;t=t.value;try{var e=l();return!ll(t,e)}catch{return!0}}function Wo(t){var l=Oe(t,2);l!==null&&Wt(l,t,2)}function Pu(t){var l=Yt();if(typeof t=="function"){var e=t;if(t=e(),Ge){Il(!0);try{e()}finally{Il(!1)}}}return l.memoizedState=l.baseState=t,l.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Xl,lastRenderedState:t},l}function $o(t,l,e,a){return t.baseState=e,Fu(t,ut,typeof a=="function"?a:Xl)}function P0(t,l,e,a,n){if(fi(t))throw Error(m(485));if(t=l.action,t!==null){var i={payload:n,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(u){i.listeners.push(u)}};b.T!==null?e(!0):i.isTransition=!1,a(i),e=l.pending,e===null?(i.next=l.pending=i,Fo(l,i)):(i.next=e.next,l.pending=e.next=i)}}function Fo(t,l){var e=l.action,a=l.payload,n=t.state;if(l.isTransition){var i=b.T,u={};b.T=u;try{var c=e(n,a),o=b.S;o!==null&&o(u,c),Io(t,l,c)}catch(g){tc(t,l,g)}finally{i!==null&&u.types!==null&&(i.types=u.types),b.T=i}}else try{i=e(n,a),Io(t,l,i)}catch(g){tc(t,l,g)}}function Io(t,l,e){e!==null&&typeof e=="object"&&typeof e.then=="function"?e.then(function(a){Po(t,l,a)},function(a){return tc(t,l,a)}):Po(t,l,e)}function Po(t,l,e){l.status="fulfilled",l.value=e,ts(l),t.state=e,l=t.pending,l!==null&&(e=l.next,e===l?t.pending=null:(e=e.next,l.next=e,Fo(t,e)))}function tc(t,l,e){var a=t.pending;if(t.pending=null,a!==null){a=a.next;do l.status="rejected",l.reason=e,ts(l),l=l.next;while(l!==a)}t.action=null}function ts(t){t=t.listeners;for(var l=0;l<t.length;l++)(0,t[l])()}function ls(t,l){return l}function es(t,l){if(F){var e=st.formState;if(e!==null){t:{var a=Q;if(F){if(dt){l:{for(var n=dt,i=gl;n.nodeType!==8;){if(!i){n=null;break l}if(n=yl(n.nextSibling),n===null){n=null;break l}}i=n.data,n=i==="F!"||i==="F"?n:null}if(n){dt=yl(n.nextSibling),a=n.data==="F!";break t}}ae(a)}a=!1}a&&(l=e[0])}}return e=Yt(),e.memoizedState=e.baseState=l,a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ls,lastRenderedState:l},e.queue=a,e=Ss.bind(null,Q,a),a.dispatch=e,a=Pu(!1),i=uc.bind(null,Q,!1,a.queue),a=Yt(),n={state:l,dispatch:null,action:t,pending:null},a.queue=n,e=P0.bind(null,Q,n,i,e),n.dispatch=e,a.memoizedState=t,[l,e,!1]}function as(t){var l=xt();return ns(l,ut,t)}function ns(t,l,e){if(l=Fu(t,l,ls)[0],t=ii(Xl)[0],typeof l=="object"&&l!==null&&typeof l.then=="function")try{var a=Pa(l)}catch(u){throw u===sa?Wn:u}else a=l;l=xt();var n=l.queue,i=n.dispatch;return e!==l.memoizedState&&(Q.flags|=2048,ga(9,{destroy:void 0},tm.bind(null,n,e),null)),[a,i,t]}function tm(t,l){t.action=l}function is(t){var l=xt(),e=ut;if(e!==null)return ns(l,e,t);xt(),l=l.memoizedState,e=xt();var a=e.queue.dispatch;return e.memoizedState=t,[l,a,!1]}function ga(t,l,e,a){return t={tag:t,create:e,deps:a,inst:l,next:null},l=Q.updateQueue,l===null&&(l=ai(),Q.updateQueue=l),e=l.lastEffect,e===null?l.lastEffect=t.next=t:(a=e.next,e.next=t,t.next=a,l.lastEffect=t),t}function us(){return xt().memoizedState}function ui(t,l,e,a){var n=Yt();Q.flags|=t,n.memoizedState=ga(1|l,{destroy:void 0},e,a===void 0?null:a)}function ci(t,l,e,a){var n=xt();a=a===void 0?null:a;var i=n.memoizedState.inst;ut!==null&&a!==null&&Vu(a,ut.memoizedState.deps)?n.memoizedState=ga(l,i,e,a):(Q.flags|=t,n.memoizedState=ga(1|l,i,e,a))}function cs(t,l){ui(8390656,8,t,l)}function lc(t,l){ci(2048,8,t,l)}function lm(t){Q.flags|=4;var l=Q.updateQueue;if(l===null)l=ai(),Q.updateQueue=l,l.events=[t];else{var e=l.events;e===null?l.events=[t]:e.push(t)}}function fs(t){var l=xt().memoizedState;return lm({ref:l,nextImpl:t}),function(){if((tt&2)!==0)throw Error(m(440));return l.impl.apply(void 0,arguments)}}function os(t,l){return ci(4,2,t,l)}function ss(t,l){return ci(4,4,t,l)}function rs(t,l){if(typeof l=="function"){t=t();var e=l(t);return function(){typeof e=="function"?e():l(null)}}if(l!=null)return t=t(),l.current=t,function(){l.current=null}}function ds(t,l,e){e=e!=null?e.concat([t]):null,ci(4,4,rs.bind(null,l,t),e)}function ec(){}function ms(t,l){var e=xt();l=l===void 0?null:l;var a=e.memoizedState;return l!==null&&Vu(l,a[1])?a[0]:(e.memoizedState=[t,l],t)}function hs(t,l){var e=xt();l=l===void 0?null:l;var a=e.memoizedState;if(l!==null&&Vu(l,a[1]))return a[0];if(a=t(),Ge){Il(!0);try{t()}finally{Il(!1)}}return e.memoizedState=[a,l],a}function ac(t,l,e){return e===void 0||(wl&1073741824)!==0&&(k&261930)===0?t.memoizedState=l:(t.memoizedState=e,t=gr(),Q.lanes|=t,de|=t,e)}function gs(t,l,e,a){return ll(e,l)?e:da.current!==null?(t=ac(t,e,a),ll(t,l)||(At=!0),t):(wl&42)===0||(wl&1073741824)!==0&&(k&261930)===0?(At=!0,t.memoizedState=e):(t=gr(),Q.lanes|=t,de|=t,l)}function ps(t,l,e,a,n){var i=T.p;T.p=i!==0&&8>i?i:8;var u=b.T,c={};b.T=c,uc(t,!1,l,e);try{var o=n(),g=b.S;if(g!==null&&g(c,o),o!==null&&typeof o=="object"&&typeof o.then=="function"){var v=$0(o,a);tn(t,l,v,cl(t))}else tn(t,l,a,cl(t))}catch(S){tn(t,l,{then:function(){},status:"rejected",reason:S},cl())}finally{T.p=i,u!==null&&c.types!==null&&(u.types=c.types),b.T=u}}function em(){}function nc(t,l,e,a){if(t.tag!==5)throw Error(m(476));var n=ys(t).queue;ps(t,n,l,Y,e===null?em:function(){return vs(t),e(a)})}function ys(t){var l=t.memoizedState;if(l!==null)return l;l={memoizedState:Y,baseState:Y,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Xl,lastRenderedState:Y},next:null};var e={};return l.next={memoizedState:e,baseState:e,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Xl,lastRenderedState:e},next:null},t.memoizedState=l,t=t.alternate,t!==null&&(t.memoizedState=l),l}function vs(t){var l=ys(t);l.next===null&&(l=t.alternate.memoizedState),tn(t,l.next.queue,{},cl())}function ic(){return Ot(vn)}function bs(){return xt().memoizedState}function xs(){return xt().memoizedState}function am(t){for(var l=t.return;l!==null;){switch(l.tag){case 24:case 3:var e=cl();t=ue(e);var a=ce(l,t,e);a!==null&&(Wt(a,l,e),Wa(a,l,e)),l={cache:Hu()},t.payload=l;return}l=l.return}}function nm(t,l,e){var a=cl();e={lane:a,revertLane:0,gesture:null,action:e,hasEagerState:!1,eagerState:null,next:null},fi(t)?zs(l,e):(e=Au(t,l,e,a),e!==null&&(Wt(e,t,a),As(e,l,a)))}function Ss(t,l,e){var a=cl();tn(t,l,e,a)}function tn(t,l,e,a){var n={lane:a,revertLane:0,gesture:null,action:e,hasEagerState:!1,eagerState:null,next:null};if(fi(t))zs(l,n);else{var i=t.alternate;if(t.lanes===0&&(i===null||i.lanes===0)&&(i=l.lastRenderedReducer,i!==null))try{var u=l.lastRenderedState,c=i(u,e);if(n.hasEagerState=!0,n.eagerState=c,ll(c,u))return Qn(t,l,n,0),st===null&&Xn(),!1}catch{}if(e=Au(t,l,n,a),e!==null)return Wt(e,t,a),As(e,l,a),!0}return!1}function uc(t,l,e,a){if(a={lane:2,revertLane:Yc(),gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},fi(t)){if(l)throw Error(m(479))}else l=Au(t,e,a,2),l!==null&&Wt(l,t,2)}function fi(t){var l=t.alternate;return t===Q||l!==null&&l===Q}function zs(t,l){ma=li=!0;var e=t.pending;e===null?l.next=l:(l.next=e.next,e.next=l),t.pending=l}function As(t,l,e){if((e&4194048)!==0){var a=l.lanes;a&=t.pendingLanes,e|=a,l.lanes=e,Nf(t,e)}}var ln={readContext:Ot,use:ni,useCallback:pt,useContext:pt,useEffect:pt,useImperativeHandle:pt,useLayoutEffect:pt,useInsertionEffect:pt,useMemo:pt,useReducer:pt,useRef:pt,useState:pt,useDebugValue:pt,useDeferredValue:pt,useTransition:pt,useSyncExternalStore:pt,useId:pt,useHostTransitionStatus:pt,useFormState:pt,useActionState:pt,useOptimistic:pt,useMemoCache:pt,useCacheRefresh:pt};ln.useEffectEvent=pt;var Es={readContext:Ot,use:ni,useCallback:function(t,l){return Yt().memoizedState=[t,l===void 0?null:l],t},useContext:Ot,useEffect:cs,useImperativeHandle:function(t,l,e){e=e!=null?e.concat([t]):null,ui(4194308,4,rs.bind(null,l,t),e)},useLayoutEffect:function(t,l){return ui(4194308,4,t,l)},useInsertionEffect:function(t,l){ui(4,2,t,l)},useMemo:function(t,l){var e=Yt();l=l===void 0?null:l;var a=t();if(Ge){Il(!0);try{t()}finally{Il(!1)}}return e.memoizedState=[a,l],a},useReducer:function(t,l,e){var a=Yt();if(e!==void 0){var n=e(l);if(Ge){Il(!0);try{e(l)}finally{Il(!1)}}}else n=l;return a.memoizedState=a.baseState=n,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:n},a.queue=t,t=t.dispatch=nm.bind(null,Q,t),[a.memoizedState,t]},useRef:function(t){var l=Yt();return t={current:t},l.memoizedState=t},useState:function(t){t=Pu(t);var l=t.queue,e=Ss.bind(null,Q,l);return l.dispatch=e,[t.memoizedState,e]},useDebugValue:ec,useDeferredValue:function(t,l){var e=Yt();return ac(e,t,l)},useTransition:function(){var t=Pu(!1);return t=ps.bind(null,Q,t.queue,!0,!1),Yt().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,l,e){var a=Q,n=Yt();if(F){if(e===void 0)throw Error(m(407));e=e()}else{if(e=l(),st===null)throw Error(m(349));(k&127)!==0||Vo(a,l,e)}n.memoizedState=e;var i={value:e,getSnapshot:l};return n.queue=i,cs(Jo.bind(null,a,i,t),[t]),a.flags|=2048,ga(9,{destroy:void 0},Ko.bind(null,a,i,e,l),null),e},useId:function(){var t=Yt(),l=st.identifierPrefix;if(F){var e=Nl,a=Tl;e=(a&~(1<<32-tl(a)-1)).toString(32)+e,l="_"+l+"R_"+e,e=ei++,0<e&&(l+="H"+e.toString(32)),l+="_"}else e=F0++,l="_"+l+"r_"+e.toString(32)+"_";return t.memoizedState=l},useHostTransitionStatus:ic,useFormState:es,useActionState:es,useOptimistic:function(t){var l=Yt();l.memoizedState=l.baseState=t;var e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return l.queue=e,l=uc.bind(null,Q,!0,e),e.dispatch=l,[t,l]},useMemoCache:$u,useCacheRefresh:function(){return Yt().memoizedState=am.bind(null,Q)},useEffectEvent:function(t){var l=Yt(),e={impl:t};return l.memoizedState=e,function(){if((tt&2)!==0)throw Error(m(440));return e.impl.apply(void 0,arguments)}}},cc={readContext:Ot,use:ni,useCallback:ms,useContext:Ot,useEffect:lc,useImperativeHandle:ds,useInsertionEffect:os,useLayoutEffect:ss,useMemo:hs,useReducer:ii,useRef:us,useState:function(){return ii(Xl)},useDebugValue:ec,useDeferredValue:function(t,l){var e=xt();return gs(e,ut.memoizedState,t,l)},useTransition:function(){var t=ii(Xl)[0],l=xt().memoizedState;return[typeof t=="boolean"?t:Pa(t),l]},useSyncExternalStore:Zo,useId:bs,useHostTransitionStatus:ic,useFormState:as,useActionState:as,useOptimistic:function(t,l){var e=xt();return $o(e,ut,t,l)},useMemoCache:$u,useCacheRefresh:xs};cc.useEffectEvent=fs;var js={readContext:Ot,use:ni,useCallback:ms,useContext:Ot,useEffect:lc,useImperativeHandle:ds,useInsertionEffect:os,useLayoutEffect:ss,useMemo:hs,useReducer:Iu,useRef:us,useState:function(){return Iu(Xl)},useDebugValue:ec,useDeferredValue:function(t,l){var e=xt();return ut===null?ac(e,t,l):gs(e,ut.memoizedState,t,l)},useTransition:function(){var t=Iu(Xl)[0],l=xt().memoizedState;return[typeof t=="boolean"?t:Pa(t),l]},useSyncExternalStore:Zo,useId:bs,useHostTransitionStatus:ic,useFormState:is,useActionState:is,useOptimistic:function(t,l){var e=xt();return ut!==null?$o(e,ut,t,l):(e.baseState=t,[t,e.queue.dispatch])},useMemoCache:$u,useCacheRefresh:xs};js.useEffectEvent=fs;function fc(t,l,e,a){l=t.memoizedState,e=e(a,l),e=e==null?l:B({},l,e),t.memoizedState=e,t.lanes===0&&(t.updateQueue.baseState=e)}var oc={enqueueSetState:function(t,l,e){t=t._reactInternals;var a=cl(),n=ue(a);n.payload=l,e!=null&&(n.callback=e),l=ce(t,n,a),l!==null&&(Wt(l,t,a),Wa(l,t,a))},enqueueReplaceState:function(t,l,e){t=t._reactInternals;var a=cl(),n=ue(a);n.tag=1,n.payload=l,e!=null&&(n.callback=e),l=ce(t,n,a),l!==null&&(Wt(l,t,a),Wa(l,t,a))},enqueueForceUpdate:function(t,l){t=t._reactInternals;var e=cl(),a=ue(e);a.tag=2,l!=null&&(a.callback=l),l=ce(t,a,e),l!==null&&(Wt(l,t,e),Wa(l,t,e))}};function Ts(t,l,e,a,n,i,u){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(a,i,u):l.prototype&&l.prototype.isPureReactComponent?!Xa(e,a)||!Xa(n,i):!0}function Ns(t,l,e,a){t=l.state,typeof l.componentWillReceiveProps=="function"&&l.componentWillReceiveProps(e,a),typeof l.UNSAFE_componentWillReceiveProps=="function"&&l.UNSAFE_componentWillReceiveProps(e,a),l.state!==t&&oc.enqueueReplaceState(l,l.state,null)}function we(t,l){var e=l;if("ref"in l){e={};for(var a in l)a!=="ref"&&(e[a]=l[a])}if(t=t.defaultProps){e===l&&(e=B({},e));for(var n in t)e[n]===void 0&&(e[n]=t[n])}return e}function _s(t){wn(t)}function Ms(t){console.error(t)}function Os(t){wn(t)}function oi(t,l){try{var e=t.onUncaughtError;e(l.value,{componentStack:l.stack})}catch(a){setTimeout(function(){throw a})}}function Ds(t,l,e){try{var a=t.onCaughtError;a(e.value,{componentStack:e.stack,errorBoundary:l.tag===1?l.stateNode:null})}catch(n){setTimeout(function(){throw n})}}function sc(t,l,e){return e=ue(e),e.tag=3,e.payload={element:null},e.callback=function(){oi(t,l)},e}function Cs(t){return t=ue(t),t.tag=3,t}function Us(t,l,e,a){var n=e.type.getDerivedStateFromError;if(typeof n=="function"){var i=a.value;t.payload=function(){return n(i)},t.callback=function(){Ds(l,e,a)}}var u=e.stateNode;u!==null&&typeof u.componentDidCatch=="function"&&(t.callback=function(){Ds(l,e,a),typeof n!="function"&&(me===null?me=new Set([this]):me.add(this));var c=a.stack;this.componentDidCatch(a.value,{componentStack:c!==null?c:""})})}function im(t,l,e,a,n){if(e.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){if(l=e.alternate,l!==null&&ca(l,e,n,!0),e=al.current,e!==null){switch(e.tag){case 31:case 13:return pl===null?Si():e.alternate===null&&yt===0&&(yt=3),e.flags&=-257,e.flags|=65536,e.lanes=n,a===$n?e.flags|=16384:(l=e.updateQueue,l===null?e.updateQueue=new Set([a]):l.add(a),Rc(t,a,n)),!1;case 22:return e.flags|=65536,a===$n?e.flags|=16384:(l=e.updateQueue,l===null?(l={transitions:null,markerInstances:null,retryQueue:new Set([a])},e.updateQueue=l):(e=l.retryQueue,e===null?l.retryQueue=new Set([a]):e.add(a)),Rc(t,a,n)),!1}throw Error(m(435,e.tag))}return Rc(t,a,n),Si(),!1}if(F)return l=al.current,l!==null?((l.flags&65536)===0&&(l.flags|=256),l.flags|=65536,l.lanes=n,a!==Mu&&(t=Error(m(422),{cause:a}),Za(dl(t,e)))):(a!==Mu&&(l=Error(m(423),{cause:a}),Za(dl(l,e))),t=t.current.alternate,t.flags|=65536,n&=-n,t.lanes|=n,a=dl(a,e),n=sc(t.stateNode,a,n),wu(t,n),yt!==4&&(yt=2)),!1;var i=Error(m(520),{cause:a});if(i=dl(i,e),sn===null?sn=[i]:sn.push(i),yt!==4&&(yt=2),l===null)return!0;a=dl(a,e),e=l;do{switch(e.tag){case 3:return e.flags|=65536,t=n&-n,e.lanes|=t,t=sc(e.stateNode,a,t),wu(e,t),!1;case 1:if(l=e.type,i=e.stateNode,(e.flags&128)===0&&(typeof l.getDerivedStateFromError=="function"||i!==null&&typeof i.componentDidCatch=="function"&&(me===null||!me.has(i))))return e.flags|=65536,n&=-n,e.lanes|=n,n=Cs(n),Us(n,t,e,a),wu(e,n),!1}e=e.return}while(e!==null);return!1}var rc=Error(m(461)),At=!1;function Dt(t,l,e,a){l.child=t===null?qo(l,null,e,a):Ye(l,t.child,e,a)}function Hs(t,l,e,a,n){e=e.render;var i=l.ref;if("ref"in a){var u={};for(var c in a)c!=="ref"&&(u[c]=a[c])}else u=a;return He(l),a=Ku(t,l,e,u,i,n),c=Ju(),t!==null&&!At?(ku(t,l,n),Ql(t,l,n)):(F&&c&&Nu(l),l.flags|=1,Dt(t,l,a,n),l.child)}function Rs(t,l,e,a,n){if(t===null){var i=e.type;return typeof i=="function"&&!Eu(i)&&i.defaultProps===void 0&&e.compare===null?(l.tag=15,l.type=i,Bs(t,l,i,a,n)):(t=Zn(e.type,null,a,l,l.mode,n),t.ref=l.ref,t.return=l,l.child=t)}if(i=t.child,!bc(t,n)){var u=i.memoizedProps;if(e=e.compare,e=e!==null?e:Xa,e(u,a)&&t.ref===l.ref)return Ql(t,l,n)}return l.flags|=1,t=Bl(i,a),t.ref=l.ref,t.return=l,l.child=t}function Bs(t,l,e,a,n){if(t!==null){var i=t.memoizedProps;if(Xa(i,a)&&t.ref===l.ref)if(At=!1,l.pendingProps=a=i,bc(t,n))(t.flags&131072)!==0&&(At=!0);else return l.lanes=t.lanes,Ql(t,l,n)}return dc(t,l,e,a,n)}function qs(t,l,e,a){var n=a.children,i=t!==null?t.memoizedState:null;if(t===null&&l.stateNode===null&&(l.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),a.mode==="hidden"){if((l.flags&128)!==0){if(i=i!==null?i.baseLanes|e:e,t!==null){for(a=l.child=t.child,n=0;a!==null;)n=n|a.lanes|a.childLanes,a=a.sibling;a=n&~i}else a=0,l.child=null;return Ys(t,l,i,e,a)}if((e&536870912)!==0)l.memoizedState={baseLanes:0,cachePool:null},t!==null&&kn(l,i!==null?i.cachePool:null),i!==null?wo(l,i):Qu(),Xo(l);else return a=l.lanes=536870912,Ys(t,l,i!==null?i.baseLanes|e:e,e,a)}else i!==null?(kn(l,i.cachePool),wo(l,i),oe(),l.memoizedState=null):(t!==null&&kn(l,null),Qu(),oe());return Dt(t,l,n,e),l.child}function en(t,l){return t!==null&&t.tag===22||l.stateNode!==null||(l.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.sibling}function Ys(t,l,e,a,n){var i=Bu();return i=i===null?null:{parent:St._currentValue,pool:i},l.memoizedState={baseLanes:e,cachePool:i},t!==null&&kn(l,null),Qu(),Xo(l),t!==null&&ca(t,l,a,!0),l.childLanes=n,null}function si(t,l){return l=di({mode:l.mode,children:l.children},t.mode),l.ref=t.ref,t.child=l,l.return=t,l}function Gs(t,l,e){return Ye(l,t.child,null,e),t=si(l,l.pendingProps),t.flags|=2,nl(l),l.memoizedState=null,t}function um(t,l,e){var a=l.pendingProps,n=(l.flags&128)!==0;if(l.flags&=-129,t===null){if(F){if(a.mode==="hidden")return t=si(l,a),l.lanes=536870912,en(null,t);if(Zu(l),(t=dt)?(t=Fr(t,gl),t=t!==null&&t.data==="&"?t:null,t!==null&&(l.memoizedState={dehydrated:t,treeContext:le!==null?{id:Tl,overflow:Nl}:null,retryLane:536870912,hydrationErrors:null},e=zo(t),e.return=l,l.child=e,Mt=l,dt=null)):t=null,t===null)throw ae(l);return l.lanes=536870912,null}return si(l,a)}var i=t.memoizedState;if(i!==null){var u=i.dehydrated;if(Zu(l),n)if(l.flags&256)l.flags&=-257,l=Gs(t,l,e);else if(l.memoizedState!==null)l.child=t.child,l.flags|=128,l=null;else throw Error(m(558));else if(At||ca(t,l,e,!1),n=(e&t.childLanes)!==0,At||n){if(a=st,a!==null&&(u=_f(a,e),u!==0&&u!==i.retryLane))throw i.retryLane=u,Oe(t,u),Wt(a,t,u),rc;Si(),l=Gs(t,l,e)}else t=i.treeContext,dt=yl(u.nextSibling),Mt=l,F=!0,ee=null,gl=!1,t!==null&&jo(l,t),l=si(l,a),l.flags|=4096;return l}return t=Bl(t.child,{mode:a.mode,children:a.children}),t.ref=l.ref,l.child=t,t.return=l,t}function ri(t,l){var e=l.ref;if(e===null)t!==null&&t.ref!==null&&(l.flags|=4194816);else{if(typeof e!="function"&&typeof e!="object")throw Error(m(284));(t===null||t.ref!==e)&&(l.flags|=4194816)}}function dc(t,l,e,a,n){return He(l),e=Ku(t,l,e,a,void 0,n),a=Ju(),t!==null&&!At?(ku(t,l,n),Ql(t,l,n)):(F&&a&&Nu(l),l.flags|=1,Dt(t,l,e,n),l.child)}function ws(t,l,e,a,n,i){return He(l),l.updateQueue=null,e=Lo(l,a,e,n),Qo(t),a=Ju(),t!==null&&!At?(ku(t,l,i),Ql(t,l,i)):(F&&a&&Nu(l),l.flags|=1,Dt(t,l,e,i),l.child)}function Xs(t,l,e,a,n){if(He(l),l.stateNode===null){var i=aa,u=e.contextType;typeof u=="object"&&u!==null&&(i=Ot(u)),i=new e(a,i),l.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=oc,l.stateNode=i,i._reactInternals=l,i=l.stateNode,i.props=a,i.state=l.memoizedState,i.refs={},Yu(l),u=e.contextType,i.context=typeof u=="object"&&u!==null?Ot(u):aa,i.state=l.memoizedState,u=e.getDerivedStateFromProps,typeof u=="function"&&(fc(l,e,u,a),i.state=l.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(u=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),u!==i.state&&oc.enqueueReplaceState(i,i.state,null),Fa(l,a,i,n),$a(),i.state=l.memoizedState),typeof i.componentDidMount=="function"&&(l.flags|=4194308),a=!0}else if(t===null){i=l.stateNode;var c=l.memoizedProps,o=we(e,c);i.props=o;var g=i.context,v=e.contextType;u=aa,typeof v=="object"&&v!==null&&(u=Ot(v));var S=e.getDerivedStateFromProps;v=typeof S=="function"||typeof i.getSnapshotBeforeUpdate=="function",c=l.pendingProps!==c,v||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(c||g!==u)&&Ns(l,i,a,u),ie=!1;var p=l.memoizedState;i.state=p,Fa(l,a,i,n),$a(),g=l.memoizedState,c||p!==g||ie?(typeof S=="function"&&(fc(l,e,S,a),g=l.memoizedState),(o=ie||Ts(l,e,o,a,p,g,u))?(v||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(l.flags|=4194308)):(typeof i.componentDidMount=="function"&&(l.flags|=4194308),l.memoizedProps=a,l.memoizedState=g),i.props=a,i.state=g,i.context=u,a=o):(typeof i.componentDidMount=="function"&&(l.flags|=4194308),a=!1)}else{i=l.stateNode,Gu(t,l),u=l.memoizedProps,v=we(e,u),i.props=v,S=l.pendingProps,p=i.context,g=e.contextType,o=aa,typeof g=="object"&&g!==null&&(o=Ot(g)),c=e.getDerivedStateFromProps,(g=typeof c=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(u!==S||p!==o)&&Ns(l,i,a,o),ie=!1,p=l.memoizedState,i.state=p,Fa(l,a,i,n),$a();var y=l.memoizedState;u!==S||p!==y||ie||t!==null&&t.dependencies!==null&&Kn(t.dependencies)?(typeof c=="function"&&(fc(l,e,c,a),y=l.memoizedState),(v=ie||Ts(l,e,v,a,p,y,o)||t!==null&&t.dependencies!==null&&Kn(t.dependencies))?(g||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(a,y,o),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(a,y,o)),typeof i.componentDidUpdate=="function"&&(l.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(l.flags|=1024)):(typeof i.componentDidUpdate!="function"||u===t.memoizedProps&&p===t.memoizedState||(l.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||u===t.memoizedProps&&p===t.memoizedState||(l.flags|=1024),l.memoizedProps=a,l.memoizedState=y),i.props=a,i.state=y,i.context=o,a=v):(typeof i.componentDidUpdate!="function"||u===t.memoizedProps&&p===t.memoizedState||(l.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||u===t.memoizedProps&&p===t.memoizedState||(l.flags|=1024),a=!1)}return i=a,ri(t,l),a=(l.flags&128)!==0,i||a?(i=l.stateNode,e=a&&typeof e.getDerivedStateFromError!="function"?null:i.render(),l.flags|=1,t!==null&&a?(l.child=Ye(l,t.child,null,n),l.child=Ye(l,null,e,n)):Dt(t,l,e,n),l.memoizedState=i.state,t=l.child):t=Ql(t,l,n),t}function Qs(t,l,e,a){return Ce(),l.flags|=256,Dt(t,l,e,a),l.child}var mc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function hc(t){return{baseLanes:t,cachePool:Do()}}function gc(t,l,e){return t=t!==null?t.childLanes&~e:0,l&&(t|=ul),t}function Ls(t,l,e){var a=l.pendingProps,n=!1,i=(l.flags&128)!==0,u;if((u=i)||(u=t!==null&&t.memoizedState===null?!1:(bt.current&2)!==0),u&&(n=!0,l.flags&=-129),u=(l.flags&32)!==0,l.flags&=-33,t===null){if(F){if(n?fe(l):oe(),(t=dt)?(t=Fr(t,gl),t=t!==null&&t.data!=="&"?t:null,t!==null&&(l.memoizedState={dehydrated:t,treeContext:le!==null?{id:Tl,overflow:Nl}:null,retryLane:536870912,hydrationErrors:null},e=zo(t),e.return=l,l.child=e,Mt=l,dt=null)):t=null,t===null)throw ae(l);return Fc(t)?l.lanes=32:l.lanes=536870912,null}var c=a.children;return a=a.fallback,n?(oe(),n=l.mode,c=di({mode:"hidden",children:c},n),a=De(a,n,e,null),c.return=l,a.return=l,c.sibling=a,l.child=c,a=l.child,a.memoizedState=hc(e),a.childLanes=gc(t,u,e),l.memoizedState=mc,en(null,a)):(fe(l),pc(l,c))}var o=t.memoizedState;if(o!==null&&(c=o.dehydrated,c!==null)){if(i)l.flags&256?(fe(l),l.flags&=-257,l=yc(t,l,e)):l.memoizedState!==null?(oe(),l.child=t.child,l.flags|=128,l=null):(oe(),c=a.fallback,n=l.mode,a=di({mode:"visible",children:a.children},n),c=De(c,n,e,null),c.flags|=2,a.return=l,c.return=l,a.sibling=c,l.child=a,Ye(l,t.child,null,e),a=l.child,a.memoizedState=hc(e),a.childLanes=gc(t,u,e),l.memoizedState=mc,l=en(null,a));else if(fe(l),Fc(c)){if(u=c.nextSibling&&c.nextSibling.dataset,u)var g=u.dgst;u=g,a=Error(m(419)),a.stack="",a.digest=u,Za({value:a,source:null,stack:null}),l=yc(t,l,e)}else if(At||ca(t,l,e,!1),u=(e&t.childLanes)!==0,At||u){if(u=st,u!==null&&(a=_f(u,e),a!==0&&a!==o.retryLane))throw o.retryLane=a,Oe(t,a),Wt(u,t,a),rc;$c(c)||Si(),l=yc(t,l,e)}else $c(c)?(l.flags|=192,l.child=t.child,l=null):(t=o.treeContext,dt=yl(c.nextSibling),Mt=l,F=!0,ee=null,gl=!1,t!==null&&jo(l,t),l=pc(l,a.children),l.flags|=4096);return l}return n?(oe(),c=a.fallback,n=l.mode,o=t.child,g=o.sibling,a=Bl(o,{mode:"hidden",children:a.children}),a.subtreeFlags=o.subtreeFlags&65011712,g!==null?c=Bl(g,c):(c=De(c,n,e,null),c.flags|=2),c.return=l,a.return=l,a.sibling=c,l.child=a,en(null,a),a=l.child,c=t.child.memoizedState,c===null?c=hc(e):(n=c.cachePool,n!==null?(o=St._currentValue,n=n.parent!==o?{parent:o,pool:o}:n):n=Do(),c={baseLanes:c.baseLanes|e,cachePool:n}),a.memoizedState=c,a.childLanes=gc(t,u,e),l.memoizedState=mc,en(t.child,a)):(fe(l),e=t.child,t=e.sibling,e=Bl(e,{mode:"visible",children:a.children}),e.return=l,e.sibling=null,t!==null&&(u=l.deletions,u===null?(l.deletions=[t],l.flags|=16):u.push(t)),l.child=e,l.memoizedState=null,e)}function pc(t,l){return l=di({mode:"visible",children:l},t.mode),l.return=t,t.child=l}function di(t,l){return t=el(22,t,null,l),t.lanes=0,t}function yc(t,l,e){return Ye(l,t.child,null,e),t=pc(l,l.pendingProps.children),t.flags|=2,l.memoizedState=null,t}function Zs(t,l,e){t.lanes|=l;var a=t.alternate;a!==null&&(a.lanes|=l),Cu(t.return,l,e)}function vc(t,l,e,a,n,i){var u=t.memoizedState;u===null?t.memoizedState={isBackwards:l,rendering:null,renderingStartTime:0,last:a,tail:e,tailMode:n,treeForkCount:i}:(u.isBackwards=l,u.rendering=null,u.renderingStartTime=0,u.last=a,u.tail=e,u.tailMode=n,u.treeForkCount=i)}function Vs(t,l,e){var a=l.pendingProps,n=a.revealOrder,i=a.tail;a=a.children;var u=bt.current,c=(u&2)!==0;if(c?(u=u&1|2,l.flags|=128):u&=1,N(bt,u),Dt(t,l,a,e),a=F?La:0,!c&&t!==null&&(t.flags&128)!==0)t:for(t=l.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Zs(t,e,l);else if(t.tag===19)Zs(t,e,l);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===l)break t;for(;t.sibling===null;){if(t.return===null||t.return===l)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(n){case"forwards":for(e=l.child,n=null;e!==null;)t=e.alternate,t!==null&&ti(t)===null&&(n=e),e=e.sibling;e=n,e===null?(n=l.child,l.child=null):(n=e.sibling,e.sibling=null),vc(l,!1,n,e,i,a);break;case"backwards":case"unstable_legacy-backwards":for(e=null,n=l.child,l.child=null;n!==null;){if(t=n.alternate,t!==null&&ti(t)===null){l.child=n;break}t=n.sibling,n.sibling=e,e=n,n=t}vc(l,!0,e,null,i,a);break;case"together":vc(l,!1,null,null,void 0,a);break;default:l.memoizedState=null}return l.child}function Ql(t,l,e){if(t!==null&&(l.dependencies=t.dependencies),de|=l.lanes,(e&l.childLanes)===0)if(t!==null){if(ca(t,l,e,!1),(e&l.childLanes)===0)return null}else return null;if(t!==null&&l.child!==t.child)throw Error(m(153));if(l.child!==null){for(t=l.child,e=Bl(t,t.pendingProps),l.child=e,e.return=l;t.sibling!==null;)t=t.sibling,e=e.sibling=Bl(t,t.pendingProps),e.return=l;e.sibling=null}return l.child}function bc(t,l){return(t.lanes&l)!==0?!0:(t=t.dependencies,!!(t!==null&&Kn(t)))}function cm(t,l,e){switch(l.tag){case 3:qt(l,l.stateNode.containerInfo),ne(l,St,t.memoizedState.cache),Ce();break;case 27:case 5:_a(l);break;case 4:qt(l,l.stateNode.containerInfo);break;case 10:ne(l,l.type,l.memoizedProps.value);break;case 31:if(l.memoizedState!==null)return l.flags|=128,Zu(l),null;break;case 13:var a=l.memoizedState;if(a!==null)return a.dehydrated!==null?(fe(l),l.flags|=128,null):(e&l.child.childLanes)!==0?Ls(t,l,e):(fe(l),t=Ql(t,l,e),t!==null?t.sibling:null);fe(l);break;case 19:var n=(t.flags&128)!==0;if(a=(e&l.childLanes)!==0,a||(ca(t,l,e,!1),a=(e&l.childLanes)!==0),n){if(a)return Vs(t,l,e);l.flags|=128}if(n=l.memoizedState,n!==null&&(n.rendering=null,n.tail=null,n.lastEffect=null),N(bt,bt.current),a)break;return null;case 22:return l.lanes=0,qs(t,l,e,l.pendingProps);case 24:ne(l,St,t.memoizedState.cache)}return Ql(t,l,e)}function Ks(t,l,e){if(t!==null)if(t.memoizedProps!==l.pendingProps)At=!0;else{if(!bc(t,e)&&(l.flags&128)===0)return At=!1,cm(t,l,e);At=(t.flags&131072)!==0}else At=!1,F&&(l.flags&1048576)!==0&&Eo(l,La,l.index);switch(l.lanes=0,l.tag){case 16:t:{var a=l.pendingProps;if(t=Be(l.elementType),l.type=t,typeof t=="function")Eu(t)?(a=we(t,a),l.tag=1,l=Xs(null,l,t,a,e)):(l.tag=0,l=dc(null,l,t,a,e));else{if(t!=null){var n=t.$$typeof;if(n===fl){l.tag=11,l=Hs(null,l,t,a,e);break t}else if(n===$){l.tag=14,l=Rs(null,l,t,a,e);break t}}throw l=Cl(t)||t,Error(m(306,l,""))}}return l;case 0:return dc(t,l,l.type,l.pendingProps,e);case 1:return a=l.type,n=we(a,l.pendingProps),Xs(t,l,a,n,e);case 3:t:{if(qt(l,l.stateNode.containerInfo),t===null)throw Error(m(387));a=l.pendingProps;var i=l.memoizedState;n=i.element,Gu(t,l),Fa(l,a,null,e);var u=l.memoizedState;if(a=u.cache,ne(l,St,a),a!==i.cache&&Uu(l,[St],e,!0),$a(),a=u.element,i.isDehydrated)if(i={element:a,isDehydrated:!1,cache:u.cache},l.updateQueue.baseState=i,l.memoizedState=i,l.flags&256){l=Qs(t,l,a,e);break t}else if(a!==n){n=dl(Error(m(424)),l),Za(n),l=Qs(t,l,a,e);break t}else for(t=l.stateNode.containerInfo,t.nodeType===9?t=t.body:t=t.nodeName==="HTML"?t.ownerDocument.body:t,dt=yl(t.firstChild),Mt=l,F=!0,ee=null,gl=!0,e=qo(l,null,a,e),l.child=e;e;)e.flags=e.flags&-3|4096,e=e.sibling;else{if(Ce(),a===n){l=Ql(t,l,e);break t}Dt(t,l,a,e)}l=l.child}return l;case 26:return ri(t,l),t===null?(e=ad(l.type,null,l.pendingProps,null))?l.memoizedState=e:F||(e=l.type,t=l.pendingProps,a=_i(Z.current).createElement(e),a[_t]=l,a[Lt]=t,Ct(a,e,t),Tt(a),l.stateNode=a):l.memoizedState=ad(l.type,t.memoizedProps,l.pendingProps,t.memoizedState),null;case 27:return _a(l),t===null&&F&&(a=l.stateNode=td(l.type,l.pendingProps,Z.current),Mt=l,gl=!0,n=dt,ye(l.type)?(Ic=n,dt=yl(a.firstChild)):dt=n),Dt(t,l,l.pendingProps.children,e),ri(t,l),t===null&&(l.flags|=4194304),l.child;case 5:return t===null&&F&&((n=a=dt)&&(a=qm(a,l.type,l.pendingProps,gl),a!==null?(l.stateNode=a,Mt=l,dt=yl(a.firstChild),gl=!1,n=!0):n=!1),n||ae(l)),_a(l),n=l.type,i=l.pendingProps,u=t!==null?t.memoizedProps:null,a=i.children,Jc(n,i)?a=null:u!==null&&Jc(n,u)&&(l.flags|=32),l.memoizedState!==null&&(n=Ku(t,l,I0,null,null,e),vn._currentValue=n),ri(t,l),Dt(t,l,a,e),l.child;case 6:return t===null&&F&&((t=e=dt)&&(e=Ym(e,l.pendingProps,gl),e!==null?(l.stateNode=e,Mt=l,dt=null,t=!0):t=!1),t||ae(l)),null;case 13:return Ls(t,l,e);case 4:return qt(l,l.stateNode.containerInfo),a=l.pendingProps,t===null?l.child=Ye(l,null,a,e):Dt(t,l,a,e),l.child;case 11:return Hs(t,l,l.type,l.pendingProps,e);case 7:return Dt(t,l,l.pendingProps,e),l.child;case 8:return Dt(t,l,l.pendingProps.children,e),l.child;case 12:return Dt(t,l,l.pendingProps.children,e),l.child;case 10:return a=l.pendingProps,ne(l,l.type,a.value),Dt(t,l,a.children,e),l.child;case 9:return n=l.type._context,a=l.pendingProps.children,He(l),n=Ot(n),a=a(n),l.flags|=1,Dt(t,l,a,e),l.child;case 14:return Rs(t,l,l.type,l.pendingProps,e);case 15:return Bs(t,l,l.type,l.pendingProps,e);case 19:return Vs(t,l,e);case 31:return um(t,l,e);case 22:return qs(t,l,e,l.pendingProps);case 24:return He(l),a=Ot(St),t===null?(n=Bu(),n===null&&(n=st,i=Hu(),n.pooledCache=i,i.refCount++,i!==null&&(n.pooledCacheLanes|=e),n=i),l.memoizedState={parent:a,cache:n},Yu(l),ne(l,St,n)):((t.lanes&e)!==0&&(Gu(t,l),Fa(l,null,null,e),$a()),n=t.memoizedState,i=l.memoizedState,n.parent!==a?(n={parent:a,cache:a},l.memoizedState=n,l.lanes===0&&(l.memoizedState=l.updateQueue.baseState=n),ne(l,St,a)):(a=i.cache,ne(l,St,a),a!==n.cache&&Uu(l,[St],e,!0))),Dt(t,l,l.pendingProps.children,e),l.child;case 29:throw l.pendingProps}throw Error(m(156,l.tag))}function Ll(t){t.flags|=4}function xc(t,l,e,a,n){if((l=(t.mode&32)!==0)&&(l=!1),l){if(t.flags|=16777216,(n&335544128)===n)if(t.stateNode.complete)t.flags|=8192;else if(br())t.flags|=8192;else throw qe=$n,qu}else t.flags&=-16777217}function Js(t,l){if(l.type!=="stylesheet"||(l.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!fd(l))if(br())t.flags|=8192;else throw qe=$n,qu}function mi(t,l){l!==null&&(t.flags|=4),t.flags&16384&&(l=t.tag!==22?jf():536870912,t.lanes|=l,ba|=l)}function an(t,l){if(!F)switch(t.tailMode){case"hidden":l=t.tail;for(var e=null;l!==null;)l.alternate!==null&&(e=l),l=l.sibling;e===null?t.tail=null:e.sibling=null;break;case"collapsed":e=t.tail;for(var a=null;e!==null;)e.alternate!==null&&(a=e),e=e.sibling;a===null?l||t.tail===null?t.tail=null:t.tail.sibling=null:a.sibling=null}}function mt(t){var l=t.alternate!==null&&t.alternate.child===t.child,e=0,a=0;if(l)for(var n=t.child;n!==null;)e|=n.lanes|n.childLanes,a|=n.subtreeFlags&65011712,a|=n.flags&65011712,n.return=t,n=n.sibling;else for(n=t.child;n!==null;)e|=n.lanes|n.childLanes,a|=n.subtreeFlags,a|=n.flags,n.return=t,n=n.sibling;return t.subtreeFlags|=a,t.childLanes=e,l}function fm(t,l,e){var a=l.pendingProps;switch(_u(l),l.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return mt(l),null;case 1:return mt(l),null;case 3:return e=l.stateNode,a=null,t!==null&&(a=t.memoizedState.cache),l.memoizedState.cache!==a&&(l.flags|=2048),Gl(St),vt(),e.pendingContext&&(e.context=e.pendingContext,e.pendingContext=null),(t===null||t.child===null)&&(ua(l)?Ll(l):t===null||t.memoizedState.isDehydrated&&(l.flags&256)===0||(l.flags|=1024,Ou())),mt(l),null;case 26:var n=l.type,i=l.memoizedState;return t===null?(Ll(l),i!==null?(mt(l),Js(l,i)):(mt(l),xc(l,n,null,a,e))):i?i!==t.memoizedState?(Ll(l),mt(l),Js(l,i)):(mt(l),l.flags&=-16777217):(t=t.memoizedProps,t!==a&&Ll(l),mt(l),xc(l,n,t,a,e)),null;case 27:if(En(l),e=Z.current,n=l.type,t!==null&&l.stateNode!=null)t.memoizedProps!==a&&Ll(l);else{if(!a){if(l.stateNode===null)throw Error(m(166));return mt(l),null}t=C.current,ua(l)?To(l):(t=td(n,a,e),l.stateNode=t,Ll(l))}return mt(l),null;case 5:if(En(l),n=l.type,t!==null&&l.stateNode!=null)t.memoizedProps!==a&&Ll(l);else{if(!a){if(l.stateNode===null)throw Error(m(166));return mt(l),null}if(i=C.current,ua(l))To(l);else{var u=_i(Z.current);switch(i){case 1:i=u.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:i=u.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":i=u.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":i=u.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":i=u.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild);break;case"select":i=typeof a.is=="string"?u.createElement("select",{is:a.is}):u.createElement("select"),a.multiple?i.multiple=!0:a.size&&(i.size=a.size);break;default:i=typeof a.is=="string"?u.createElement(n,{is:a.is}):u.createElement(n)}}i[_t]=l,i[Lt]=a;t:for(u=l.child;u!==null;){if(u.tag===5||u.tag===6)i.appendChild(u.stateNode);else if(u.tag!==4&&u.tag!==27&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===l)break t;for(;u.sibling===null;){if(u.return===null||u.return===l)break t;u=u.return}u.sibling.return=u.return,u=u.sibling}l.stateNode=i;t:switch(Ct(i,n,a),n){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break t;case"img":a=!0;break t;default:a=!1}a&&Ll(l)}}return mt(l),xc(l,l.type,t===null?null:t.memoizedProps,l.pendingProps,e),null;case 6:if(t&&l.stateNode!=null)t.memoizedProps!==a&&Ll(l);else{if(typeof a!="string"&&l.stateNode===null)throw Error(m(166));if(t=Z.current,ua(l)){if(t=l.stateNode,e=l.memoizedProps,a=null,n=Mt,n!==null)switch(n.tag){case 27:case 5:a=n.memoizedProps}t[_t]=l,t=!!(t.nodeValue===e||a!==null&&a.suppressHydrationWarning===!0||Lr(t.nodeValue,e)),t||ae(l,!0)}else t=_i(t).createTextNode(a),t[_t]=l,l.stateNode=t}return mt(l),null;case 31:if(e=l.memoizedState,t===null||t.memoizedState!==null){if(a=ua(l),e!==null){if(t===null){if(!a)throw Error(m(318));if(t=l.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(m(557));t[_t]=l}else Ce(),(l.flags&128)===0&&(l.memoizedState=null),l.flags|=4;mt(l),t=!1}else e=Ou(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=e),t=!0;if(!t)return l.flags&256?(nl(l),l):(nl(l),null);if((l.flags&128)!==0)throw Error(m(558))}return mt(l),null;case 13:if(a=l.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(n=ua(l),a!==null&&a.dehydrated!==null){if(t===null){if(!n)throw Error(m(318));if(n=l.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(m(317));n[_t]=l}else Ce(),(l.flags&128)===0&&(l.memoizedState=null),l.flags|=4;mt(l),n=!1}else n=Ou(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=n),n=!0;if(!n)return l.flags&256?(nl(l),l):(nl(l),null)}return nl(l),(l.flags&128)!==0?(l.lanes=e,l):(e=a!==null,t=t!==null&&t.memoizedState!==null,e&&(a=l.child,n=null,a.alternate!==null&&a.alternate.memoizedState!==null&&a.alternate.memoizedState.cachePool!==null&&(n=a.alternate.memoizedState.cachePool.pool),i=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(i=a.memoizedState.cachePool.pool),i!==n&&(a.flags|=2048)),e!==t&&e&&(l.child.flags|=8192),mi(l,l.updateQueue),mt(l),null);case 4:return vt(),t===null&&Qc(l.stateNode.containerInfo),mt(l),null;case 10:return Gl(l.type),mt(l),null;case 19:if(A(bt),a=l.memoizedState,a===null)return mt(l),null;if(n=(l.flags&128)!==0,i=a.rendering,i===null)if(n)an(a,!1);else{if(yt!==0||t!==null&&(t.flags&128)!==0)for(t=l.child;t!==null;){if(i=ti(t),i!==null){for(l.flags|=128,an(a,!1),t=i.updateQueue,l.updateQueue=t,mi(l,t),l.subtreeFlags=0,t=e,e=l.child;e!==null;)So(e,t),e=e.sibling;return N(bt,bt.current&1|2),F&&ql(l,a.treeForkCount),l.child}t=t.sibling}a.tail!==null&&It()>vi&&(l.flags|=128,n=!0,an(a,!1),l.lanes=4194304)}else{if(!n)if(t=ti(i),t!==null){if(l.flags|=128,n=!0,t=t.updateQueue,l.updateQueue=t,mi(l,t),an(a,!0),a.tail===null&&a.tailMode==="hidden"&&!i.alternate&&!F)return mt(l),null}else 2*It()-a.renderingStartTime>vi&&e!==536870912&&(l.flags|=128,n=!0,an(a,!1),l.lanes=4194304);a.isBackwards?(i.sibling=l.child,l.child=i):(t=a.last,t!==null?t.sibling=i:l.child=i,a.last=i)}return a.tail!==null?(t=a.tail,a.rendering=t,a.tail=t.sibling,a.renderingStartTime=It(),t.sibling=null,e=bt.current,N(bt,n?e&1|2:e&1),F&&ql(l,a.treeForkCount),t):(mt(l),null);case 22:case 23:return nl(l),Lu(),a=l.memoizedState!==null,t!==null?t.memoizedState!==null!==a&&(l.flags|=8192):a&&(l.flags|=8192),a?(e&536870912)!==0&&(l.flags&128)===0&&(mt(l),l.subtreeFlags&6&&(l.flags|=8192)):mt(l),e=l.updateQueue,e!==null&&mi(l,e.retryQueue),e=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),a=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(a=l.memoizedState.cachePool.pool),a!==e&&(l.flags|=2048),t!==null&&A(Re),null;case 24:return e=null,t!==null&&(e=t.memoizedState.cache),l.memoizedState.cache!==e&&(l.flags|=2048),Gl(St),mt(l),null;case 25:return null;case 30:return null}throw Error(m(156,l.tag))}function om(t,l){switch(_u(l),l.tag){case 1:return t=l.flags,t&65536?(l.flags=t&-65537|128,l):null;case 3:return Gl(St),vt(),t=l.flags,(t&65536)!==0&&(t&128)===0?(l.flags=t&-65537|128,l):null;case 26:case 27:case 5:return En(l),null;case 31:if(l.memoizedState!==null){if(nl(l),l.alternate===null)throw Error(m(340));Ce()}return t=l.flags,t&65536?(l.flags=t&-65537|128,l):null;case 13:if(nl(l),t=l.memoizedState,t!==null&&t.dehydrated!==null){if(l.alternate===null)throw Error(m(340));Ce()}return t=l.flags,t&65536?(l.flags=t&-65537|128,l):null;case 19:return A(bt),null;case 4:return vt(),null;case 10:return Gl(l.type),null;case 22:case 23:return nl(l),Lu(),t!==null&&A(Re),t=l.flags,t&65536?(l.flags=t&-65537|128,l):null;case 24:return Gl(St),null;case 25:return null;default:return null}}function ks(t,l){switch(_u(l),l.tag){case 3:Gl(St),vt();break;case 26:case 27:case 5:En(l);break;case 4:vt();break;case 31:l.memoizedState!==null&&nl(l);break;case 13:nl(l);break;case 19:A(bt);break;case 10:Gl(l.type);break;case 22:case 23:nl(l),Lu(),t!==null&&A(Re);break;case 24:Gl(St)}}function nn(t,l){try{var e=l.updateQueue,a=e!==null?e.lastEffect:null;if(a!==null){var n=a.next;e=n;do{if((e.tag&t)===t){a=void 0;var i=e.create,u=e.inst;a=i(),u.destroy=a}e=e.next}while(e!==n)}}catch(c){nt(l,l.return,c)}}function se(t,l,e){try{var a=l.updateQueue,n=a!==null?a.lastEffect:null;if(n!==null){var i=n.next;a=i;do{if((a.tag&t)===t){var u=a.inst,c=u.destroy;if(c!==void 0){u.destroy=void 0,n=l;var o=e,g=c;try{g()}catch(v){nt(n,o,v)}}}a=a.next}while(a!==i)}}catch(v){nt(l,l.return,v)}}function Ws(t){var l=t.updateQueue;if(l!==null){var e=t.stateNode;try{Go(l,e)}catch(a){nt(t,t.return,a)}}}function $s(t,l,e){e.props=we(t.type,t.memoizedProps),e.state=t.memoizedState;try{e.componentWillUnmount()}catch(a){nt(t,l,a)}}function un(t,l){try{var e=t.ref;if(e!==null){switch(t.tag){case 26:case 27:case 5:var a=t.stateNode;break;case 30:a=t.stateNode;break;default:a=t.stateNode}typeof e=="function"?t.refCleanup=e(a):e.current=a}}catch(n){nt(t,l,n)}}function _l(t,l){var e=t.ref,a=t.refCleanup;if(e!==null)if(typeof a=="function")try{a()}catch(n){nt(t,l,n)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof e=="function")try{e(null)}catch(n){nt(t,l,n)}else e.current=null}function Fs(t){var l=t.type,e=t.memoizedProps,a=t.stateNode;try{t:switch(l){case"button":case"input":case"select":case"textarea":e.autoFocus&&a.focus();break t;case"img":e.src?a.src=e.src:e.srcSet&&(a.srcset=e.srcSet)}}catch(n){nt(t,t.return,n)}}function Sc(t,l,e){try{var a=t.stateNode;Dm(a,t.type,e,l),a[Lt]=l}catch(n){nt(t,t.return,n)}}function Is(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&ye(t.type)||t.tag===4}function zc(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||Is(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&ye(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Ac(t,l,e){var a=t.tag;if(a===5||a===6)t=t.stateNode,l?(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e).insertBefore(t,l):(l=e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,l.appendChild(t),e=e._reactRootContainer,e!=null||l.onclick!==null||(l.onclick=Hl));else if(a!==4&&(a===27&&ye(t.type)&&(e=t.stateNode,l=null),t=t.child,t!==null))for(Ac(t,l,e),t=t.sibling;t!==null;)Ac(t,l,e),t=t.sibling}function hi(t,l,e){var a=t.tag;if(a===5||a===6)t=t.stateNode,l?e.insertBefore(t,l):e.appendChild(t);else if(a!==4&&(a===27&&ye(t.type)&&(e=t.stateNode),t=t.child,t!==null))for(hi(t,l,e),t=t.sibling;t!==null;)hi(t,l,e),t=t.sibling}function Ps(t){var l=t.stateNode,e=t.memoizedProps;try{for(var a=t.type,n=l.attributes;n.length;)l.removeAttributeNode(n[0]);Ct(l,a,e),l[_t]=t,l[Lt]=e}catch(i){nt(t,t.return,i)}}var Zl=!1,Et=!1,Ec=!1,tr=typeof WeakSet=="function"?WeakSet:Set,Nt=null;function sm(t,l){if(t=t.containerInfo,Vc=Ri,t=ro(t),yu(t)){if("selectionStart"in t)var e={start:t.selectionStart,end:t.selectionEnd};else t:{e=(e=t.ownerDocument)&&e.defaultView||window;var a=e.getSelection&&e.getSelection();if(a&&a.rangeCount!==0){e=a.anchorNode;var n=a.anchorOffset,i=a.focusNode;a=a.focusOffset;try{e.nodeType,i.nodeType}catch{e=null;break t}var u=0,c=-1,o=-1,g=0,v=0,S=t,p=null;l:for(;;){for(var y;S!==e||n!==0&&S.nodeType!==3||(c=u+n),S!==i||a!==0&&S.nodeType!==3||(o=u+a),S.nodeType===3&&(u+=S.nodeValue.length),(y=S.firstChild)!==null;)p=S,S=y;for(;;){if(S===t)break l;if(p===e&&++g===n&&(c=u),p===i&&++v===a&&(o=u),(y=S.nextSibling)!==null)break;S=p,p=S.parentNode}S=y}e=c===-1||o===-1?null:{start:c,end:o}}else e=null}e=e||{start:0,end:0}}else e=null;for(Kc={focusedElem:t,selectionRange:e},Ri=!1,Nt=l;Nt!==null;)if(l=Nt,t=l.child,(l.subtreeFlags&1028)!==0&&t!==null)t.return=l,Nt=t;else for(;Nt!==null;){switch(l=Nt,i=l.alternate,t=l.flags,l.tag){case 0:if((t&4)!==0&&(t=l.updateQueue,t=t!==null?t.events:null,t!==null))for(e=0;e<t.length;e++)n=t[e],n.ref.impl=n.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&i!==null){t=void 0,e=l,n=i.memoizedProps,i=i.memoizedState,a=e.stateNode;try{var O=we(e.type,n);t=a.getSnapshotBeforeUpdate(O,i),a.__reactInternalSnapshotBeforeUpdate=t}catch(q){nt(e,e.return,q)}}break;case 3:if((t&1024)!==0){if(t=l.stateNode.containerInfo,e=t.nodeType,e===9)Wc(t);else if(e===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Wc(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(m(163))}if(t=l.sibling,t!==null){t.return=l.return,Nt=t;break}Nt=l.return}}function lr(t,l,e){var a=e.flags;switch(e.tag){case 0:case 11:case 15:Kl(t,e),a&4&&nn(5,e);break;case 1:if(Kl(t,e),a&4)if(t=e.stateNode,l===null)try{t.componentDidMount()}catch(u){nt(e,e.return,u)}else{var n=we(e.type,l.memoizedProps);l=l.memoizedState;try{t.componentDidUpdate(n,l,t.__reactInternalSnapshotBeforeUpdate)}catch(u){nt(e,e.return,u)}}a&64&&Ws(e),a&512&&un(e,e.return);break;case 3:if(Kl(t,e),a&64&&(t=e.updateQueue,t!==null)){if(l=null,e.child!==null)switch(e.child.tag){case 27:case 5:l=e.child.stateNode;break;case 1:l=e.child.stateNode}try{Go(t,l)}catch(u){nt(e,e.return,u)}}break;case 27:l===null&&a&4&&Ps(e);case 26:case 5:Kl(t,e),l===null&&a&4&&Fs(e),a&512&&un(e,e.return);break;case 12:Kl(t,e);break;case 31:Kl(t,e),a&4&&nr(t,e);break;case 13:Kl(t,e),a&4&&ir(t,e),a&64&&(t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(e=bm.bind(null,e),Gm(t,e))));break;case 22:if(a=e.memoizedState!==null||Zl,!a){l=l!==null&&l.memoizedState!==null||Et,n=Zl;var i=Et;Zl=a,(Et=l)&&!i?Jl(t,e,(e.subtreeFlags&8772)!==0):Kl(t,e),Zl=n,Et=i}break;case 30:break;default:Kl(t,e)}}function er(t){var l=t.alternate;l!==null&&(t.alternate=null,er(l)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(l=t.stateNode,l!==null&&tu(l)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var gt=null,Vt=!1;function Vl(t,l,e){for(e=e.child;e!==null;)ar(t,l,e),e=e.sibling}function ar(t,l,e){if(Pt&&typeof Pt.onCommitFiberUnmount=="function")try{Pt.onCommitFiberUnmount(Ma,e)}catch{}switch(e.tag){case 26:Et||_l(e,l),Vl(t,l,e),e.memoizedState?e.memoizedState.count--:e.stateNode&&(e=e.stateNode,e.parentNode.removeChild(e));break;case 27:Et||_l(e,l);var a=gt,n=Vt;ye(e.type)&&(gt=e.stateNode,Vt=!1),Vl(t,l,e),gn(e.stateNode),gt=a,Vt=n;break;case 5:Et||_l(e,l);case 6:if(a=gt,n=Vt,gt=null,Vl(t,l,e),gt=a,Vt=n,gt!==null)if(Vt)try{(gt.nodeType===9?gt.body:gt.nodeName==="HTML"?gt.ownerDocument.body:gt).removeChild(e.stateNode)}catch(i){nt(e,l,i)}else try{gt.removeChild(e.stateNode)}catch(i){nt(e,l,i)}break;case 18:gt!==null&&(Vt?(t=gt,Wr(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,e.stateNode),Na(t)):Wr(gt,e.stateNode));break;case 4:a=gt,n=Vt,gt=e.stateNode.containerInfo,Vt=!0,Vl(t,l,e),gt=a,Vt=n;break;case 0:case 11:case 14:case 15:se(2,e,l),Et||se(4,e,l),Vl(t,l,e);break;case 1:Et||(_l(e,l),a=e.stateNode,typeof a.componentWillUnmount=="function"&&$s(e,l,a)),Vl(t,l,e);break;case 21:Vl(t,l,e);break;case 22:Et=(a=Et)||e.memoizedState!==null,Vl(t,l,e),Et=a;break;default:Vl(t,l,e)}}function nr(t,l){if(l.memoizedState===null&&(t=l.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{Na(t)}catch(e){nt(l,l.return,e)}}}function ir(t,l){if(l.memoizedState===null&&(t=l.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Na(t)}catch(e){nt(l,l.return,e)}}function rm(t){switch(t.tag){case 31:case 13:case 19:var l=t.stateNode;return l===null&&(l=t.stateNode=new tr),l;case 22:return t=t.stateNode,l=t._retryCache,l===null&&(l=t._retryCache=new tr),l;default:throw Error(m(435,t.tag))}}function gi(t,l){var e=rm(t);l.forEach(function(a){if(!e.has(a)){e.add(a);var n=xm.bind(null,t,a);a.then(n,n)}})}function Kt(t,l){var e=l.deletions;if(e!==null)for(var a=0;a<e.length;a++){var n=e[a],i=t,u=l,c=u;t:for(;c!==null;){switch(c.tag){case 27:if(ye(c.type)){gt=c.stateNode,Vt=!1;break t}break;case 5:gt=c.stateNode,Vt=!1;break t;case 3:case 4:gt=c.stateNode.containerInfo,Vt=!0;break t}c=c.return}if(gt===null)throw Error(m(160));ar(i,u,n),gt=null,Vt=!1,i=n.alternate,i!==null&&(i.return=null),n.return=null}if(l.subtreeFlags&13886)for(l=l.child;l!==null;)ur(l,t),l=l.sibling}var Sl=null;function ur(t,l){var e=t.alternate,a=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Kt(l,t),Jt(t),a&4&&(se(3,t,t.return),nn(3,t),se(5,t,t.return));break;case 1:Kt(l,t),Jt(t),a&512&&(Et||e===null||_l(e,e.return)),a&64&&Zl&&(t=t.updateQueue,t!==null&&(a=t.callbacks,a!==null&&(e=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=e===null?a:e.concat(a))));break;case 26:var n=Sl;if(Kt(l,t),Jt(t),a&512&&(Et||e===null||_l(e,e.return)),a&4){var i=e!==null?e.memoizedState:null;if(a=t.memoizedState,e===null)if(a===null)if(t.stateNode===null){t:{a=t.type,e=t.memoizedProps,n=n.ownerDocument||n;l:switch(a){case"title":i=n.getElementsByTagName("title")[0],(!i||i[Ca]||i[_t]||i.namespaceURI==="http://www.w3.org/2000/svg"||i.hasAttribute("itemprop"))&&(i=n.createElement(a),n.head.insertBefore(i,n.querySelector("head > title"))),Ct(i,a,e),i[_t]=t,Tt(i),a=i;break t;case"link":var u=ud("link","href",n).get(a+(e.href||""));if(u){for(var c=0;c<u.length;c++)if(i=u[c],i.getAttribute("href")===(e.href==null||e.href===""?null:e.href)&&i.getAttribute("rel")===(e.rel==null?null:e.rel)&&i.getAttribute("title")===(e.title==null?null:e.title)&&i.getAttribute("crossorigin")===(e.crossOrigin==null?null:e.crossOrigin)){u.splice(c,1);break l}}i=n.createElement(a),Ct(i,a,e),n.head.appendChild(i);break;case"meta":if(u=ud("meta","content",n).get(a+(e.content||""))){for(c=0;c<u.length;c++)if(i=u[c],i.getAttribute("content")===(e.content==null?null:""+e.content)&&i.getAttribute("name")===(e.name==null?null:e.name)&&i.getAttribute("property")===(e.property==null?null:e.property)&&i.getAttribute("http-equiv")===(e.httpEquiv==null?null:e.httpEquiv)&&i.getAttribute("charset")===(e.charSet==null?null:e.charSet)){u.splice(c,1);break l}}i=n.createElement(a),Ct(i,a,e),n.head.appendChild(i);break;default:throw Error(m(468,a))}i[_t]=t,Tt(i),a=i}t.stateNode=a}else cd(n,t.type,t.stateNode);else t.stateNode=id(n,a,t.memoizedProps);else i!==a?(i===null?e.stateNode!==null&&(e=e.stateNode,e.parentNode.removeChild(e)):i.count--,a===null?cd(n,t.type,t.stateNode):id(n,a,t.memoizedProps)):a===null&&t.stateNode!==null&&Sc(t,t.memoizedProps,e.memoizedProps)}break;case 27:Kt(l,t),Jt(t),a&512&&(Et||e===null||_l(e,e.return)),e!==null&&a&4&&Sc(t,t.memoizedProps,e.memoizedProps);break;case 5:if(Kt(l,t),Jt(t),a&512&&(Et||e===null||_l(e,e.return)),t.flags&32){n=t.stateNode;try{$e(n,"")}catch(O){nt(t,t.return,O)}}a&4&&t.stateNode!=null&&(n=t.memoizedProps,Sc(t,n,e!==null?e.memoizedProps:n)),a&1024&&(Ec=!0);break;case 6:if(Kt(l,t),Jt(t),a&4){if(t.stateNode===null)throw Error(m(162));a=t.memoizedProps,e=t.stateNode;try{e.nodeValue=a}catch(O){nt(t,t.return,O)}}break;case 3:if(Di=null,n=Sl,Sl=Mi(l.containerInfo),Kt(l,t),Sl=n,Jt(t),a&4&&e!==null&&e.memoizedState.isDehydrated)try{Na(l.containerInfo)}catch(O){nt(t,t.return,O)}Ec&&(Ec=!1,cr(t));break;case 4:a=Sl,Sl=Mi(t.stateNode.containerInfo),Kt(l,t),Jt(t),Sl=a;break;case 12:Kt(l,t),Jt(t);break;case 31:Kt(l,t),Jt(t),a&4&&(a=t.updateQueue,a!==null&&(t.updateQueue=null,gi(t,a)));break;case 13:Kt(l,t),Jt(t),t.child.flags&8192&&t.memoizedState!==null!=(e!==null&&e.memoizedState!==null)&&(yi=It()),a&4&&(a=t.updateQueue,a!==null&&(t.updateQueue=null,gi(t,a)));break;case 22:n=t.memoizedState!==null;var o=e!==null&&e.memoizedState!==null,g=Zl,v=Et;if(Zl=g||n,Et=v||o,Kt(l,t),Et=v,Zl=g,Jt(t),a&8192)t:for(l=t.stateNode,l._visibility=n?l._visibility&-2:l._visibility|1,n&&(e===null||o||Zl||Et||Xe(t)),e=null,l=t;;){if(l.tag===5||l.tag===26){if(e===null){o=e=l;try{if(i=o.stateNode,n)u=i.style,typeof u.setProperty=="function"?u.setProperty("display","none","important"):u.display="none";else{c=o.stateNode;var S=o.memoizedProps.style,p=S!=null&&S.hasOwnProperty("display")?S.display:null;c.style.display=p==null||typeof p=="boolean"?"":(""+p).trim()}}catch(O){nt(o,o.return,O)}}}else if(l.tag===6){if(e===null){o=l;try{o.stateNode.nodeValue=n?"":o.memoizedProps}catch(O){nt(o,o.return,O)}}}else if(l.tag===18){if(e===null){o=l;try{var y=o.stateNode;n?$r(y,!0):$r(o.stateNode,!1)}catch(O){nt(o,o.return,O)}}}else if((l.tag!==22&&l.tag!==23||l.memoizedState===null||l===t)&&l.child!==null){l.child.return=l,l=l.child;continue}if(l===t)break t;for(;l.sibling===null;){if(l.return===null||l.return===t)break t;e===l&&(e=null),l=l.return}e===l&&(e=null),l.sibling.return=l.return,l=l.sibling}a&4&&(a=t.updateQueue,a!==null&&(e=a.retryQueue,e!==null&&(a.retryQueue=null,gi(t,e))));break;case 19:Kt(l,t),Jt(t),a&4&&(a=t.updateQueue,a!==null&&(t.updateQueue=null,gi(t,a)));break;case 30:break;case 21:break;default:Kt(l,t),Jt(t)}}function Jt(t){var l=t.flags;if(l&2){try{for(var e,a=t.return;a!==null;){if(Is(a)){e=a;break}a=a.return}if(e==null)throw Error(m(160));switch(e.tag){case 27:var n=e.stateNode,i=zc(t);hi(t,i,n);break;case 5:var u=e.stateNode;e.flags&32&&($e(u,""),e.flags&=-33);var c=zc(t);hi(t,c,u);break;case 3:case 4:var o=e.stateNode.containerInfo,g=zc(t);Ac(t,g,o);break;default:throw Error(m(161))}}catch(v){nt(t,t.return,v)}t.flags&=-3}l&4096&&(t.flags&=-4097)}function cr(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var l=t;cr(l),l.tag===5&&l.flags&1024&&l.stateNode.reset(),t=t.sibling}}function Kl(t,l){if(l.subtreeFlags&8772)for(l=l.child;l!==null;)lr(t,l.alternate,l),l=l.sibling}function Xe(t){for(t=t.child;t!==null;){var l=t;switch(l.tag){case 0:case 11:case 14:case 15:se(4,l,l.return),Xe(l);break;case 1:_l(l,l.return);var e=l.stateNode;typeof e.componentWillUnmount=="function"&&$s(l,l.return,e),Xe(l);break;case 27:gn(l.stateNode);case 26:case 5:_l(l,l.return),Xe(l);break;case 22:l.memoizedState===null&&Xe(l);break;case 30:Xe(l);break;default:Xe(l)}t=t.sibling}}function Jl(t,l,e){for(e=e&&(l.subtreeFlags&8772)!==0,l=l.child;l!==null;){var a=l.alternate,n=t,i=l,u=i.flags;switch(i.tag){case 0:case 11:case 15:Jl(n,i,e),nn(4,i);break;case 1:if(Jl(n,i,e),a=i,n=a.stateNode,typeof n.componentDidMount=="function")try{n.componentDidMount()}catch(g){nt(a,a.return,g)}if(a=i,n=a.updateQueue,n!==null){var c=a.stateNode;try{var o=n.shared.hiddenCallbacks;if(o!==null)for(n.shared.hiddenCallbacks=null,n=0;n<o.length;n++)Yo(o[n],c)}catch(g){nt(a,a.return,g)}}e&&u&64&&Ws(i),un(i,i.return);break;case 27:Ps(i);case 26:case 5:Jl(n,i,e),e&&a===null&&u&4&&Fs(i),un(i,i.return);break;case 12:Jl(n,i,e);break;case 31:Jl(n,i,e),e&&u&4&&nr(n,i);break;case 13:Jl(n,i,e),e&&u&4&&ir(n,i);break;case 22:i.memoizedState===null&&Jl(n,i,e),un(i,i.return);break;case 30:break;default:Jl(n,i,e)}l=l.sibling}}function jc(t,l){var e=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),t=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(t=l.memoizedState.cachePool.pool),t!==e&&(t!=null&&t.refCount++,e!=null&&Va(e))}function Tc(t,l){t=null,l.alternate!==null&&(t=l.alternate.memoizedState.cache),l=l.memoizedState.cache,l!==t&&(l.refCount++,t!=null&&Va(t))}function zl(t,l,e,a){if(l.subtreeFlags&10256)for(l=l.child;l!==null;)fr(t,l,e,a),l=l.sibling}function fr(t,l,e,a){var n=l.flags;switch(l.tag){case 0:case 11:case 15:zl(t,l,e,a),n&2048&&nn(9,l);break;case 1:zl(t,l,e,a);break;case 3:zl(t,l,e,a),n&2048&&(t=null,l.alternate!==null&&(t=l.alternate.memoizedState.cache),l=l.memoizedState.cache,l!==t&&(l.refCount++,t!=null&&Va(t)));break;case 12:if(n&2048){zl(t,l,e,a),t=l.stateNode;try{var i=l.memoizedProps,u=i.id,c=i.onPostCommit;typeof c=="function"&&c(u,l.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(o){nt(l,l.return,o)}}else zl(t,l,e,a);break;case 31:zl(t,l,e,a);break;case 13:zl(t,l,e,a);break;case 23:break;case 22:i=l.stateNode,u=l.alternate,l.memoizedState!==null?i._visibility&2?zl(t,l,e,a):cn(t,l):i._visibility&2?zl(t,l,e,a):(i._visibility|=2,pa(t,l,e,a,(l.subtreeFlags&10256)!==0||!1)),n&2048&&jc(u,l);break;case 24:zl(t,l,e,a),n&2048&&Tc(l.alternate,l);break;default:zl(t,l,e,a)}}function pa(t,l,e,a,n){for(n=n&&((l.subtreeFlags&10256)!==0||!1),l=l.child;l!==null;){var i=t,u=l,c=e,o=a,g=u.flags;switch(u.tag){case 0:case 11:case 15:pa(i,u,c,o,n),nn(8,u);break;case 23:break;case 22:var v=u.stateNode;u.memoizedState!==null?v._visibility&2?pa(i,u,c,o,n):cn(i,u):(v._visibility|=2,pa(i,u,c,o,n)),n&&g&2048&&jc(u.alternate,u);break;case 24:pa(i,u,c,o,n),n&&g&2048&&Tc(u.alternate,u);break;default:pa(i,u,c,o,n)}l=l.sibling}}function cn(t,l){if(l.subtreeFlags&10256)for(l=l.child;l!==null;){var e=t,a=l,n=a.flags;switch(a.tag){case 22:cn(e,a),n&2048&&jc(a.alternate,a);break;case 24:cn(e,a),n&2048&&Tc(a.alternate,a);break;default:cn(e,a)}l=l.sibling}}var fn=8192;function ya(t,l,e){if(t.subtreeFlags&fn)for(t=t.child;t!==null;)or(t,l,e),t=t.sibling}function or(t,l,e){switch(t.tag){case 26:ya(t,l,e),t.flags&fn&&t.memoizedState!==null&&Fm(e,Sl,t.memoizedState,t.memoizedProps);break;case 5:ya(t,l,e);break;case 3:case 4:var a=Sl;Sl=Mi(t.stateNode.containerInfo),ya(t,l,e),Sl=a;break;case 22:t.memoizedState===null&&(a=t.alternate,a!==null&&a.memoizedState!==null?(a=fn,fn=16777216,ya(t,l,e),fn=a):ya(t,l,e));break;default:ya(t,l,e)}}function sr(t){var l=t.alternate;if(l!==null&&(t=l.child,t!==null)){l.child=null;do l=t.sibling,t.sibling=null,t=l;while(t!==null)}}function on(t){var l=t.deletions;if((t.flags&16)!==0){if(l!==null)for(var e=0;e<l.length;e++){var a=l[e];Nt=a,dr(a,t)}sr(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)rr(t),t=t.sibling}function rr(t){switch(t.tag){case 0:case 11:case 15:on(t),t.flags&2048&&se(9,t,t.return);break;case 3:on(t);break;case 12:on(t);break;case 22:var l=t.stateNode;t.memoizedState!==null&&l._visibility&2&&(t.return===null||t.return.tag!==13)?(l._visibility&=-3,pi(t)):on(t);break;default:on(t)}}function pi(t){var l=t.deletions;if((t.flags&16)!==0){if(l!==null)for(var e=0;e<l.length;e++){var a=l[e];Nt=a,dr(a,t)}sr(t)}for(t=t.child;t!==null;){switch(l=t,l.tag){case 0:case 11:case 15:se(8,l,l.return),pi(l);break;case 22:e=l.stateNode,e._visibility&2&&(e._visibility&=-3,pi(l));break;default:pi(l)}t=t.sibling}}function dr(t,l){for(;Nt!==null;){var e=Nt;switch(e.tag){case 0:case 11:case 15:se(8,e,l);break;case 23:case 22:if(e.memoizedState!==null&&e.memoizedState.cachePool!==null){var a=e.memoizedState.cachePool.pool;a!=null&&a.refCount++}break;case 24:Va(e.memoizedState.cache)}if(a=e.child,a!==null)a.return=e,Nt=a;else t:for(e=t;Nt!==null;){a=Nt;var n=a.sibling,i=a.return;if(er(a),a===e){Nt=null;break t}if(n!==null){n.return=i,Nt=n;break t}Nt=i}}}var dm={getCacheForType:function(t){var l=Ot(St),e=l.data.get(t);return e===void 0&&(e=t(),l.data.set(t,e)),e},cacheSignal:function(){return Ot(St).controller.signal}},mm=typeof WeakMap=="function"?WeakMap:Map,tt=0,st=null,V=null,k=0,at=0,il=null,re=!1,va=!1,Nc=!1,kl=0,yt=0,de=0,Qe=0,_c=0,ul=0,ba=0,sn=null,kt=null,Mc=!1,yi=0,mr=0,vi=1/0,bi=null,me=null,jt=0,he=null,xa=null,Wl=0,Oc=0,Dc=null,hr=null,rn=0,Cc=null;function cl(){return(tt&2)!==0&&k!==0?k&-k:b.T!==null?Yc():Mf()}function gr(){if(ul===0)if((k&536870912)===0||F){var t=Nn;Nn<<=1,(Nn&3932160)===0&&(Nn=262144),ul=t}else ul=536870912;return t=al.current,t!==null&&(t.flags|=32),ul}function Wt(t,l,e){(t===st&&(at===2||at===9)||t.cancelPendingCommit!==null)&&(Sa(t,0),ge(t,k,ul,!1)),Da(t,e),((tt&2)===0||t!==st)&&(t===st&&((tt&2)===0&&(Qe|=e),yt===4&&ge(t,k,ul,!1)),Ml(t))}function pr(t,l,e){if((tt&6)!==0)throw Error(m(327));var a=!e&&(l&127)===0&&(l&t.expiredLanes)===0||Oa(t,l),n=a?pm(t,l):Hc(t,l,!0),i=a;do{if(n===0){va&&!a&&ge(t,l,0,!1);break}else{if(e=t.current.alternate,i&&!hm(e)){n=Hc(t,l,!1),i=!1;continue}if(n===2){if(i=l,t.errorRecoveryDisabledLanes&i)var u=0;else u=t.pendingLanes&-536870913,u=u!==0?u:u&536870912?536870912:0;if(u!==0){l=u;t:{var c=t;n=sn;var o=c.current.memoizedState.isDehydrated;if(o&&(Sa(c,u).flags|=256),u=Hc(c,u,!1),u!==2){if(Nc&&!o){c.errorRecoveryDisabledLanes|=i,Qe|=i,n=4;break t}i=kt,kt=n,i!==null&&(kt===null?kt=i:kt.push.apply(kt,i))}n=u}if(i=!1,n!==2)continue}}if(n===1){Sa(t,0),ge(t,l,0,!0);break}t:{switch(a=t,i=n,i){case 0:case 1:throw Error(m(345));case 4:if((l&4194048)!==l)break;case 6:ge(a,l,ul,!re);break t;case 2:kt=null;break;case 3:case 5:break;default:throw Error(m(329))}if((l&62914560)===l&&(n=yi+300-It(),10<n)){if(ge(a,l,ul,!re),Mn(a,0,!0)!==0)break t;Wl=l,a.timeoutHandle=Jr(yr.bind(null,a,e,kt,bi,Mc,l,ul,Qe,ba,re,i,"Throttled",-0,0),n);break t}yr(a,e,kt,bi,Mc,l,ul,Qe,ba,re,i,null,-0,0)}}break}while(!0);Ml(t)}function yr(t,l,e,a,n,i,u,c,o,g,v,S,p,y){if(t.timeoutHandle=-1,S=l.subtreeFlags,S&8192||(S&16785408)===16785408){S={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Hl},or(l,i,S);var O=(i&62914560)===i?yi-It():(i&4194048)===i?mr-It():0;if(O=Im(S,O),O!==null){Wl=i,t.cancelPendingCommit=O(jr.bind(null,t,l,i,e,a,n,u,c,o,v,S,null,p,y)),ge(t,i,u,!g);return}}jr(t,l,i,e,a,n,u,c,o)}function hm(t){for(var l=t;;){var e=l.tag;if((e===0||e===11||e===15)&&l.flags&16384&&(e=l.updateQueue,e!==null&&(e=e.stores,e!==null)))for(var a=0;a<e.length;a++){var n=e[a],i=n.getSnapshot;n=n.value;try{if(!ll(i(),n))return!1}catch{return!1}}if(e=l.child,l.subtreeFlags&16384&&e!==null)e.return=l,l=e;else{if(l===t)break;for(;l.sibling===null;){if(l.return===null||l.return===t)return!0;l=l.return}l.sibling.return=l.return,l=l.sibling}}return!0}function ge(t,l,e,a){l&=~_c,l&=~Qe,t.suspendedLanes|=l,t.pingedLanes&=~l,a&&(t.warmLanes|=l),a=t.expirationTimes;for(var n=l;0<n;){var i=31-tl(n),u=1<<i;a[i]=-1,n&=~u}e!==0&&Tf(t,e,l)}function xi(){return(tt&6)===0?(dn(0),!1):!0}function Uc(){if(V!==null){if(at===0)var t=V.return;else t=V,Yl=Ue=null,Wu(t),ra=null,Ja=0,t=V;for(;t!==null;)ks(t.alternate,t),t=t.return;V=null}}function Sa(t,l){var e=t.timeoutHandle;e!==-1&&(t.timeoutHandle=-1,Hm(e)),e=t.cancelPendingCommit,e!==null&&(t.cancelPendingCommit=null,e()),Wl=0,Uc(),st=t,V=e=Bl(t.current,null),k=l,at=0,il=null,re=!1,va=Oa(t,l),Nc=!1,ba=ul=_c=Qe=de=yt=0,kt=sn=null,Mc=!1,(l&8)!==0&&(l|=l&32);var a=t.entangledLanes;if(a!==0)for(t=t.entanglements,a&=l;0<a;){var n=31-tl(a),i=1<<n;l|=t[n],a&=~i}return kl=l,Xn(),e}function vr(t,l){Q=null,b.H=ln,l===sa||l===Wn?(l=Ho(),at=3):l===qu?(l=Ho(),at=4):at=l===rc?8:l!==null&&typeof l=="object"&&typeof l.then=="function"?6:1,il=l,V===null&&(yt=1,oi(t,dl(l,t.current)))}function br(){var t=al.current;return t===null?!0:(k&4194048)===k?pl===null:(k&62914560)===k||(k&536870912)!==0?t===pl:!1}function xr(){var t=b.H;return b.H=ln,t===null?ln:t}function Sr(){var t=b.A;return b.A=dm,t}function Si(){yt=4,re||(k&4194048)!==k&&al.current!==null||(va=!0),(de&134217727)===0&&(Qe&134217727)===0||st===null||ge(st,k,ul,!1)}function Hc(t,l,e){var a=tt;tt|=2;var n=xr(),i=Sr();(st!==t||k!==l)&&(bi=null,Sa(t,l)),l=!1;var u=yt;t:do try{if(at!==0&&V!==null){var c=V,o=il;switch(at){case 8:Uc(),u=6;break t;case 3:case 2:case 9:case 6:al.current===null&&(l=!0);var g=at;if(at=0,il=null,za(t,c,o,g),e&&va){u=0;break t}break;default:g=at,at=0,il=null,za(t,c,o,g)}}gm(),u=yt;break}catch(v){vr(t,v)}while(!0);return l&&t.shellSuspendCounter++,Yl=Ue=null,tt=a,b.H=n,b.A=i,V===null&&(st=null,k=0,Xn()),u}function gm(){for(;V!==null;)zr(V)}function pm(t,l){var e=tt;tt|=2;var a=xr(),n=Sr();st!==t||k!==l?(bi=null,vi=It()+500,Sa(t,l)):va=Oa(t,l);t:do try{if(at!==0&&V!==null){l=V;var i=il;l:switch(at){case 1:at=0,il=null,za(t,l,i,1);break;case 2:case 9:if(Co(i)){at=0,il=null,Ar(l);break}l=function(){at!==2&&at!==9||st!==t||(at=7),Ml(t)},i.then(l,l);break t;case 3:at=7;break t;case 4:at=5;break t;case 7:Co(i)?(at=0,il=null,Ar(l)):(at=0,il=null,za(t,l,i,7));break;case 5:var u=null;switch(V.tag){case 26:u=V.memoizedState;case 5:case 27:var c=V;if(u?fd(u):c.stateNode.complete){at=0,il=null;var o=c.sibling;if(o!==null)V=o;else{var g=c.return;g!==null?(V=g,zi(g)):V=null}break l}}at=0,il=null,za(t,l,i,5);break;case 6:at=0,il=null,za(t,l,i,6);break;case 8:Uc(),yt=6;break t;default:throw Error(m(462))}}ym();break}catch(v){vr(t,v)}while(!0);return Yl=Ue=null,b.H=a,b.A=n,tt=e,V!==null?0:(st=null,k=0,Xn(),yt)}function ym(){for(;V!==null&&!wd();)zr(V)}function zr(t){var l=Ks(t.alternate,t,kl);t.memoizedProps=t.pendingProps,l===null?zi(t):V=l}function Ar(t){var l=t,e=l.alternate;switch(l.tag){case 15:case 0:l=ws(e,l,l.pendingProps,l.type,void 0,k);break;case 11:l=ws(e,l,l.pendingProps,l.type.render,l.ref,k);break;case 5:Wu(l);default:ks(e,l),l=V=So(l,kl),l=Ks(e,l,kl)}t.memoizedProps=t.pendingProps,l===null?zi(t):V=l}function za(t,l,e,a){Yl=Ue=null,Wu(l),ra=null,Ja=0;var n=l.return;try{if(im(t,n,l,e,k)){yt=1,oi(t,dl(e,t.current)),V=null;return}}catch(i){if(n!==null)throw V=n,i;yt=1,oi(t,dl(e,t.current)),V=null;return}l.flags&32768?(F||a===1?t=!0:va||(k&536870912)!==0?t=!1:(re=t=!0,(a===2||a===9||a===3||a===6)&&(a=al.current,a!==null&&a.tag===13&&(a.flags|=16384))),Er(l,t)):zi(l)}function zi(t){var l=t;do{if((l.flags&32768)!==0){Er(l,re);return}t=l.return;var e=fm(l.alternate,l,kl);if(e!==null){V=e;return}if(l=l.sibling,l!==null){V=l;return}V=l=t}while(l!==null);yt===0&&(yt=5)}function Er(t,l){do{var e=om(t.alternate,t);if(e!==null){e.flags&=32767,V=e;return}if(e=t.return,e!==null&&(e.flags|=32768,e.subtreeFlags=0,e.deletions=null),!l&&(t=t.sibling,t!==null)){V=t;return}V=t=e}while(t!==null);yt=6,V=null}function jr(t,l,e,a,n,i,u,c,o){t.cancelPendingCommit=null;do Ai();while(jt!==0);if((tt&6)!==0)throw Error(m(327));if(l!==null){if(l===t.current)throw Error(m(177));if(i=l.lanes|l.childLanes,i|=zu,$d(t,e,i,u,c,o),t===st&&(V=st=null,k=0),xa=l,he=t,Wl=e,Oc=i,Dc=n,hr=a,(l.subtreeFlags&10256)!==0||(l.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,Sm(jn,function(){return Or(),null})):(t.callbackNode=null,t.callbackPriority=0),a=(l.flags&13878)!==0,(l.subtreeFlags&13878)!==0||a){a=b.T,b.T=null,n=T.p,T.p=2,u=tt,tt|=4;try{sm(t,l,e)}finally{tt=u,T.p=n,b.T=a}}jt=1,Tr(),Nr(),_r()}}function Tr(){if(jt===1){jt=0;var t=he,l=xa,e=(l.flags&13878)!==0;if((l.subtreeFlags&13878)!==0||e){e=b.T,b.T=null;var a=T.p;T.p=2;var n=tt;tt|=4;try{ur(l,t);var i=Kc,u=ro(t.containerInfo),c=i.focusedElem,o=i.selectionRange;if(u!==c&&c&&c.ownerDocument&&so(c.ownerDocument.documentElement,c)){if(o!==null&&yu(c)){var g=o.start,v=o.end;if(v===void 0&&(v=g),"selectionStart"in c)c.selectionStart=g,c.selectionEnd=Math.min(v,c.value.length);else{var S=c.ownerDocument||document,p=S&&S.defaultView||window;if(p.getSelection){var y=p.getSelection(),O=c.textContent.length,q=Math.min(o.start,O),ft=o.end===void 0?q:Math.min(o.end,O);!y.extend&&q>ft&&(u=ft,ft=q,q=u);var d=oo(c,q),s=oo(c,ft);if(d&&s&&(y.rangeCount!==1||y.anchorNode!==d.node||y.anchorOffset!==d.offset||y.focusNode!==s.node||y.focusOffset!==s.offset)){var h=S.createRange();h.setStart(d.node,d.offset),y.removeAllRanges(),q>ft?(y.addRange(h),y.extend(s.node,s.offset)):(h.setEnd(s.node,s.offset),y.addRange(h))}}}}for(S=[],y=c;y=y.parentNode;)y.nodeType===1&&S.push({element:y,left:y.scrollLeft,top:y.scrollTop});for(typeof c.focus=="function"&&c.focus(),c=0;c<S.length;c++){var x=S[c];x.element.scrollLeft=x.left,x.element.scrollTop=x.top}}Ri=!!Vc,Kc=Vc=null}finally{tt=n,T.p=a,b.T=e}}t.current=l,jt=2}}function Nr(){if(jt===2){jt=0;var t=he,l=xa,e=(l.flags&8772)!==0;if((l.subtreeFlags&8772)!==0||e){e=b.T,b.T=null;var a=T.p;T.p=2;var n=tt;tt|=4;try{lr(t,l.alternate,l)}finally{tt=n,T.p=a,b.T=e}}jt=3}}function _r(){if(jt===4||jt===3){jt=0,Xd();var t=he,l=xa,e=Wl,a=hr;(l.subtreeFlags&10256)!==0||(l.flags&10256)!==0?jt=5:(jt=0,xa=he=null,Mr(t,t.pendingLanes));var n=t.pendingLanes;if(n===0&&(me=null),Ii(e),l=l.stateNode,Pt&&typeof Pt.onCommitFiberRoot=="function")try{Pt.onCommitFiberRoot(Ma,l,void 0,(l.current.flags&128)===128)}catch{}if(a!==null){l=b.T,n=T.p,T.p=2,b.T=null;try{for(var i=t.onRecoverableError,u=0;u<a.length;u++){var c=a[u];i(c.value,{componentStack:c.stack})}}finally{b.T=l,T.p=n}}(Wl&3)!==0&&Ai(),Ml(t),n=t.pendingLanes,(e&261930)!==0&&(n&42)!==0?t===Cc?rn++:(rn=0,Cc=t):rn=0,dn(0)}}function Mr(t,l){(t.pooledCacheLanes&=l)===0&&(l=t.pooledCache,l!=null&&(t.pooledCache=null,Va(l)))}function Ai(){return Tr(),Nr(),_r(),Or()}function Or(){if(jt!==5)return!1;var t=he,l=Oc;Oc=0;var e=Ii(Wl),a=b.T,n=T.p;try{T.p=32>e?32:e,b.T=null,e=Dc,Dc=null;var i=he,u=Wl;if(jt=0,xa=he=null,Wl=0,(tt&6)!==0)throw Error(m(331));var c=tt;if(tt|=4,rr(i.current),fr(i,i.current,u,e),tt=c,dn(0,!1),Pt&&typeof Pt.onPostCommitFiberRoot=="function")try{Pt.onPostCommitFiberRoot(Ma,i)}catch{}return!0}finally{T.p=n,b.T=a,Mr(t,l)}}function Dr(t,l,e){l=dl(e,l),l=sc(t.stateNode,l,2),t=ce(t,l,2),t!==null&&(Da(t,2),Ml(t))}function nt(t,l,e){if(t.tag===3)Dr(t,t,e);else for(;l!==null;){if(l.tag===3){Dr(l,t,e);break}else if(l.tag===1){var a=l.stateNode;if(typeof l.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(me===null||!me.has(a))){t=dl(e,t),e=Cs(2),a=ce(l,e,2),a!==null&&(Us(e,a,l,t),Da(a,2),Ml(a));break}}l=l.return}}function Rc(t,l,e){var a=t.pingCache;if(a===null){a=t.pingCache=new mm;var n=new Set;a.set(l,n)}else n=a.get(l),n===void 0&&(n=new Set,a.set(l,n));n.has(e)||(Nc=!0,n.add(e),t=vm.bind(null,t,l,e),l.then(t,t))}function vm(t,l,e){var a=t.pingCache;a!==null&&a.delete(l),t.pingedLanes|=t.suspendedLanes&e,t.warmLanes&=~e,st===t&&(k&e)===e&&(yt===4||yt===3&&(k&62914560)===k&&300>It()-yi?(tt&2)===0&&Sa(t,0):_c|=e,ba===k&&(ba=0)),Ml(t)}function Cr(t,l){l===0&&(l=jf()),t=Oe(t,l),t!==null&&(Da(t,l),Ml(t))}function bm(t){var l=t.memoizedState,e=0;l!==null&&(e=l.retryLane),Cr(t,e)}function xm(t,l){var e=0;switch(t.tag){case 31:case 13:var a=t.stateNode,n=t.memoizedState;n!==null&&(e=n.retryLane);break;case 19:a=t.stateNode;break;case 22:a=t.stateNode._retryCache;break;default:throw Error(m(314))}a!==null&&a.delete(l),Cr(t,e)}function Sm(t,l){return ki(t,l)}var Ei=null,Aa=null,Bc=!1,ji=!1,qc=!1,pe=0;function Ml(t){t!==Aa&&t.next===null&&(Aa===null?Ei=Aa=t:Aa=Aa.next=t),ji=!0,Bc||(Bc=!0,Am())}function dn(t,l){if(!qc&&ji){qc=!0;do for(var e=!1,a=Ei;a!==null;){if(t!==0){var n=a.pendingLanes;if(n===0)var i=0;else{var u=a.suspendedLanes,c=a.pingedLanes;i=(1<<31-tl(42|t)+1)-1,i&=n&~(u&~c),i=i&201326741?i&201326741|1:i?i|2:0}i!==0&&(e=!0,Br(a,i))}else i=k,i=Mn(a,a===st?i:0,a.cancelPendingCommit!==null||a.timeoutHandle!==-1),(i&3)===0||Oa(a,i)||(e=!0,Br(a,i));a=a.next}while(e);qc=!1}}function zm(){Ur()}function Ur(){ji=Bc=!1;var t=0;pe!==0&&Um()&&(t=pe);for(var l=It(),e=null,a=Ei;a!==null;){var n=a.next,i=Hr(a,l);i===0?(a.next=null,e===null?Ei=n:e.next=n,n===null&&(Aa=e)):(e=a,(t!==0||(i&3)!==0)&&(ji=!0)),a=n}jt!==0&&jt!==5||dn(t),pe!==0&&(pe=0)}function Hr(t,l){for(var e=t.suspendedLanes,a=t.pingedLanes,n=t.expirationTimes,i=t.pendingLanes&-62914561;0<i;){var u=31-tl(i),c=1<<u,o=n[u];o===-1?((c&e)===0||(c&a)!==0)&&(n[u]=Wd(c,l)):o<=l&&(t.expiredLanes|=c),i&=~c}if(l=st,e=k,e=Mn(t,t===l?e:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),a=t.callbackNode,e===0||t===l&&(at===2||at===9)||t.cancelPendingCommit!==null)return a!==null&&a!==null&&Wi(a),t.callbackNode=null,t.callbackPriority=0;if((e&3)===0||Oa(t,e)){if(l=e&-e,l===t.callbackPriority)return l;switch(a!==null&&Wi(a),Ii(e)){case 2:case 8:e=Af;break;case 32:e=jn;break;case 268435456:e=Ef;break;default:e=jn}return a=Rr.bind(null,t),e=ki(e,a),t.callbackPriority=l,t.callbackNode=e,l}return a!==null&&a!==null&&Wi(a),t.callbackPriority=2,t.callbackNode=null,2}function Rr(t,l){if(jt!==0&&jt!==5)return t.callbackNode=null,t.callbackPriority=0,null;var e=t.callbackNode;if(Ai()&&t.callbackNode!==e)return null;var a=k;return a=Mn(t,t===st?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),a===0?null:(pr(t,a,l),Hr(t,It()),t.callbackNode!=null&&t.callbackNode===e?Rr.bind(null,t):null)}function Br(t,l){if(Ai())return null;pr(t,l,!0)}function Am(){Rm(function(){(tt&6)!==0?ki(zf,zm):Ur()})}function Yc(){if(pe===0){var t=fa;t===0&&(t=Tn,Tn<<=1,(Tn&261888)===0&&(Tn=256)),pe=t}return pe}function qr(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Un(""+t)}function Yr(t,l){var e=l.ownerDocument.createElement("input");return e.name=l.name,e.value=l.value,t.id&&e.setAttribute("form",t.id),l.parentNode.insertBefore(e,l),t=new FormData(t),e.parentNode.removeChild(e),t}function Em(t,l,e,a,n){if(l==="submit"&&e&&e.stateNode===n){var i=qr((n[Lt]||null).action),u=a.submitter;u&&(l=(l=u[Lt]||null)?qr(l.formAction):u.getAttribute("formAction"),l!==null&&(i=l,u=null));var c=new qn("action","action",null,a,n);t.push({event:c,listeners:[{instance:null,listener:function(){if(a.defaultPrevented){if(pe!==0){var o=u?Yr(n,u):new FormData(n);nc(e,{pending:!0,data:o,method:n.method,action:i},null,o)}}else typeof i=="function"&&(c.preventDefault(),o=u?Yr(n,u):new FormData(n),nc(e,{pending:!0,data:o,method:n.method,action:i},i,o))},currentTarget:n}]})}}for(var Gc=0;Gc<Su.length;Gc++){var wc=Su[Gc],jm=wc.toLowerCase(),Tm=wc[0].toUpperCase()+wc.slice(1);xl(jm,"on"+Tm)}xl(go,"onAnimationEnd"),xl(po,"onAnimationIteration"),xl(yo,"onAnimationStart"),xl("dblclick","onDoubleClick"),xl("focusin","onFocus"),xl("focusout","onBlur"),xl(Q0,"onTransitionRun"),xl(L0,"onTransitionStart"),xl(Z0,"onTransitionCancel"),xl(vo,"onTransitionEnd"),ke("onMouseEnter",["mouseout","mouseover"]),ke("onMouseLeave",["mouseout","mouseover"]),ke("onPointerEnter",["pointerout","pointerover"]),ke("onPointerLeave",["pointerout","pointerover"]),Te("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Te("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Te("onBeforeInput",["compositionend","keypress","textInput","paste"]),Te("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Te("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Te("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var mn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Nm=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(mn));function Gr(t,l){l=(l&4)!==0;for(var e=0;e<t.length;e++){var a=t[e],n=a.event;a=a.listeners;t:{var i=void 0;if(l)for(var u=a.length-1;0<=u;u--){var c=a[u],o=c.instance,g=c.currentTarget;if(c=c.listener,o!==i&&n.isPropagationStopped())break t;i=c,n.currentTarget=g;try{i(n)}catch(v){wn(v)}n.currentTarget=null,i=o}else for(u=0;u<a.length;u++){if(c=a[u],o=c.instance,g=c.currentTarget,c=c.listener,o!==i&&n.isPropagationStopped())break t;i=c,n.currentTarget=g;try{i(n)}catch(v){wn(v)}n.currentTarget=null,i=o}}}}function K(t,l){var e=l[Pi];e===void 0&&(e=l[Pi]=new Set);var a=t+"__bubble";e.has(a)||(wr(l,t,2,!1),e.add(a))}function Xc(t,l,e){var a=0;l&&(a|=4),wr(e,t,a,l)}var Ti="_reactListening"+Math.random().toString(36).slice(2);function Qc(t){if(!t[Ti]){t[Ti]=!0,Cf.forEach(function(e){e!=="selectionchange"&&(Nm.has(e)||Xc(e,!1,t),Xc(e,!0,t))});var l=t.nodeType===9?t:t.ownerDocument;l===null||l[Ti]||(l[Ti]=!0,Xc("selectionchange",!1,l))}}function wr(t,l,e,a){switch(gd(l)){case 2:var n=lh;break;case 8:n=eh;break;default:n=af}e=n.bind(null,l,e,t),n=void 0,!fu||l!=="touchstart"&&l!=="touchmove"&&l!=="wheel"||(n=!0),a?n!==void 0?t.addEventListener(l,e,{capture:!0,passive:n}):t.addEventListener(l,e,!0):n!==void 0?t.addEventListener(l,e,{passive:n}):t.addEventListener(l,e,!1)}function Lc(t,l,e,a,n){var i=a;if((l&1)===0&&(l&2)===0&&a!==null)t:for(;;){if(a===null)return;var u=a.tag;if(u===3||u===4){var c=a.stateNode.containerInfo;if(c===n)break;if(u===4)for(u=a.return;u!==null;){var o=u.tag;if((o===3||o===4)&&u.stateNode.containerInfo===n)return;u=u.return}for(;c!==null;){if(u=Ve(c),u===null)return;if(o=u.tag,o===5||o===6||o===26||o===27){a=i=u;continue t}c=c.parentNode}}a=a.return}Zf(function(){var g=i,v=uu(e),S=[];t:{var p=bo.get(t);if(p!==void 0){var y=qn,O=t;switch(t){case"keypress":if(Rn(e)===0)break t;case"keydown":case"keyup":y=x0;break;case"focusin":O="focus",y=du;break;case"focusout":O="blur",y=du;break;case"beforeblur":case"afterblur":y=du;break;case"click":if(e.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=Jf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=f0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=A0;break;case go:case po:case yo:y=r0;break;case vo:y=j0;break;case"scroll":case"scrollend":y=u0;break;case"wheel":y=N0;break;case"copy":case"cut":case"paste":y=m0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=Wf;break;case"toggle":case"beforetoggle":y=M0}var q=(l&4)!==0,ft=!q&&(t==="scroll"||t==="scrollend"),d=q?p!==null?p+"Capture":null:p;q=[];for(var s=g,h;s!==null;){var x=s;if(h=x.stateNode,x=x.tag,x!==5&&x!==26&&x!==27||h===null||d===null||(x=Ha(s,d),x!=null&&q.push(hn(s,x,h))),ft)break;s=s.return}0<q.length&&(p=new y(p,O,null,e,v),S.push({event:p,listeners:q}))}}if((l&7)===0){t:{if(p=t==="mouseover"||t==="pointerover",y=t==="mouseout"||t==="pointerout",p&&e!==iu&&(O=e.relatedTarget||e.fromElement)&&(Ve(O)||O[Ze]))break t;if((y||p)&&(p=v.window===v?v:(p=v.ownerDocument)?p.defaultView||p.parentWindow:window,y?(O=e.relatedTarget||e.toElement,y=g,O=O?Ve(O):null,O!==null&&(ft=R(O),q=O.tag,O!==ft||q!==5&&q!==27&&q!==6)&&(O=null)):(y=null,O=g),y!==O)){if(q=Jf,x="onMouseLeave",d="onMouseEnter",s="mouse",(t==="pointerout"||t==="pointerover")&&(q=Wf,x="onPointerLeave",d="onPointerEnter",s="pointer"),ft=y==null?p:Ua(y),h=O==null?p:Ua(O),p=new q(x,s+"leave",y,e,v),p.target=ft,p.relatedTarget=h,x=null,Ve(v)===g&&(q=new q(d,s+"enter",O,e,v),q.target=h,q.relatedTarget=ft,x=q),ft=x,y&&O)l:{for(q=_m,d=y,s=O,h=0,x=d;x;x=q(x))h++;x=0;for(var H=s;H;H=q(H))x++;for(;0<h-x;)d=q(d),h--;for(;0<x-h;)s=q(s),x--;for(;h--;){if(d===s||s!==null&&d===s.alternate){q=d;break l}d=q(d),s=q(s)}q=null}else q=null;y!==null&&Xr(S,p,y,q,!1),O!==null&&ft!==null&&Xr(S,ft,O,q,!0)}}t:{if(p=g?Ua(g):window,y=p.nodeName&&p.nodeName.toLowerCase(),y==="select"||y==="input"&&p.type==="file")var I=ao;else if(lo(p))if(no)I=G0;else{I=q0;var U=B0}else y=p.nodeName,!y||y.toLowerCase()!=="input"||p.type!=="checkbox"&&p.type!=="radio"?g&&nu(g.elementType)&&(I=ao):I=Y0;if(I&&(I=I(t,g))){eo(S,I,e,v);break t}U&&U(t,p,g),t==="focusout"&&g&&p.type==="number"&&g.memoizedProps.value!=null&&au(p,"number",p.value)}switch(U=g?Ua(g):window,t){case"focusin":(lo(U)||U.contentEditable==="true")&&(ta=U,vu=g,Qa=null);break;case"focusout":Qa=vu=ta=null;break;case"mousedown":bu=!0;break;case"contextmenu":case"mouseup":case"dragend":bu=!1,mo(S,e,v);break;case"selectionchange":if(X0)break;case"keydown":case"keyup":mo(S,e,v)}var L;if(hu)t:{switch(t){case"compositionstart":var W="onCompositionStart";break t;case"compositionend":W="onCompositionEnd";break t;case"compositionupdate":W="onCompositionUpdate";break t}W=void 0}else Pe?Pf(t,e)&&(W="onCompositionEnd"):t==="keydown"&&e.keyCode===229&&(W="onCompositionStart");W&&($f&&e.locale!=="ko"&&(Pe||W!=="onCompositionStart"?W==="onCompositionEnd"&&Pe&&(L=Vf()):(te=v,ou="value"in te?te.value:te.textContent,Pe=!0)),U=Ni(g,W),0<U.length&&(W=new kf(W,t,null,e,v),S.push({event:W,listeners:U}),L?W.data=L:(L=to(e),L!==null&&(W.data=L)))),(L=D0?C0(t,e):U0(t,e))&&(W=Ni(g,"onBeforeInput"),0<W.length&&(U=new kf("onBeforeInput","beforeinput",null,e,v),S.push({event:U,listeners:W}),U.data=L)),Em(S,t,g,e,v)}Gr(S,l)})}function hn(t,l,e){return{instance:t,listener:l,currentTarget:e}}function Ni(t,l){for(var e=l+"Capture",a=[];t!==null;){var n=t,i=n.stateNode;if(n=n.tag,n!==5&&n!==26&&n!==27||i===null||(n=Ha(t,e),n!=null&&a.unshift(hn(t,n,i)),n=Ha(t,l),n!=null&&a.push(hn(t,n,i))),t.tag===3)return a;t=t.return}return[]}function _m(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function Xr(t,l,e,a,n){for(var i=l._reactName,u=[];e!==null&&e!==a;){var c=e,o=c.alternate,g=c.stateNode;if(c=c.tag,o!==null&&o===a)break;c!==5&&c!==26&&c!==27||g===null||(o=g,n?(g=Ha(e,i),g!=null&&u.unshift(hn(e,g,o))):n||(g=Ha(e,i),g!=null&&u.push(hn(e,g,o)))),e=e.return}u.length!==0&&t.push({event:l,listeners:u})}var Mm=/\r\n?/g,Om=/\u0000|\uFFFD/g;function Qr(t){return(typeof t=="string"?t:""+t).replace(Mm,`
`).replace(Om,"")}function Lr(t,l){return l=Qr(l),Qr(t)===l}function ct(t,l,e,a,n,i){switch(e){case"children":typeof a=="string"?l==="body"||l==="textarea"&&a===""||$e(t,a):(typeof a=="number"||typeof a=="bigint")&&l!=="body"&&$e(t,""+a);break;case"className":Dn(t,"class",a);break;case"tabIndex":Dn(t,"tabindex",a);break;case"dir":case"role":case"viewBox":case"width":case"height":Dn(t,e,a);break;case"style":Qf(t,a,i);break;case"data":if(l!=="object"){Dn(t,"data",a);break}case"src":case"href":if(a===""&&(l!=="a"||e!=="href")){t.removeAttribute(e);break}if(a==null||typeof a=="function"||typeof a=="symbol"||typeof a=="boolean"){t.removeAttribute(e);break}a=Un(""+a),t.setAttribute(e,a);break;case"action":case"formAction":if(typeof a=="function"){t.setAttribute(e,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof i=="function"&&(e==="formAction"?(l!=="input"&&ct(t,l,"name",n.name,n,null),ct(t,l,"formEncType",n.formEncType,n,null),ct(t,l,"formMethod",n.formMethod,n,null),ct(t,l,"formTarget",n.formTarget,n,null)):(ct(t,l,"encType",n.encType,n,null),ct(t,l,"method",n.method,n,null),ct(t,l,"target",n.target,n,null)));if(a==null||typeof a=="symbol"||typeof a=="boolean"){t.removeAttribute(e);break}a=Un(""+a),t.setAttribute(e,a);break;case"onClick":a!=null&&(t.onclick=Hl);break;case"onScroll":a!=null&&K("scroll",t);break;case"onScrollEnd":a!=null&&K("scrollend",t);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(m(61));if(e=a.__html,e!=null){if(n.children!=null)throw Error(m(60));t.innerHTML=e}}break;case"multiple":t.multiple=a&&typeof a!="function"&&typeof a!="symbol";break;case"muted":t.muted=a&&typeof a!="function"&&typeof a!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(a==null||typeof a=="function"||typeof a=="boolean"||typeof a=="symbol"){t.removeAttribute("xlink:href");break}e=Un(""+a),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",e);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":a!=null&&typeof a!="function"&&typeof a!="symbol"?t.setAttribute(e,""+a):t.removeAttribute(e);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":a&&typeof a!="function"&&typeof a!="symbol"?t.setAttribute(e,""):t.removeAttribute(e);break;case"capture":case"download":a===!0?t.setAttribute(e,""):a!==!1&&a!=null&&typeof a!="function"&&typeof a!="symbol"?t.setAttribute(e,a):t.removeAttribute(e);break;case"cols":case"rows":case"size":case"span":a!=null&&typeof a!="function"&&typeof a!="symbol"&&!isNaN(a)&&1<=a?t.setAttribute(e,a):t.removeAttribute(e);break;case"rowSpan":case"start":a==null||typeof a=="function"||typeof a=="symbol"||isNaN(a)?t.removeAttribute(e):t.setAttribute(e,a);break;case"popover":K("beforetoggle",t),K("toggle",t),On(t,"popover",a);break;case"xlinkActuate":Ul(t,"http://www.w3.org/1999/xlink","xlink:actuate",a);break;case"xlinkArcrole":Ul(t,"http://www.w3.org/1999/xlink","xlink:arcrole",a);break;case"xlinkRole":Ul(t,"http://www.w3.org/1999/xlink","xlink:role",a);break;case"xlinkShow":Ul(t,"http://www.w3.org/1999/xlink","xlink:show",a);break;case"xlinkTitle":Ul(t,"http://www.w3.org/1999/xlink","xlink:title",a);break;case"xlinkType":Ul(t,"http://www.w3.org/1999/xlink","xlink:type",a);break;case"xmlBase":Ul(t,"http://www.w3.org/XML/1998/namespace","xml:base",a);break;case"xmlLang":Ul(t,"http://www.w3.org/XML/1998/namespace","xml:lang",a);break;case"xmlSpace":Ul(t,"http://www.w3.org/XML/1998/namespace","xml:space",a);break;case"is":On(t,"is",a);break;case"innerText":case"textContent":break;default:(!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(e=n0.get(e)||e,On(t,e,a))}}function Zc(t,l,e,a,n,i){switch(e){case"style":Qf(t,a,i);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(m(61));if(e=a.__html,e!=null){if(n.children!=null)throw Error(m(60));t.innerHTML=e}}break;case"children":typeof a=="string"?$e(t,a):(typeof a=="number"||typeof a=="bigint")&&$e(t,""+a);break;case"onScroll":a!=null&&K("scroll",t);break;case"onScrollEnd":a!=null&&K("scrollend",t);break;case"onClick":a!=null&&(t.onclick=Hl);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Uf.hasOwnProperty(e))t:{if(e[0]==="o"&&e[1]==="n"&&(n=e.endsWith("Capture"),l=e.slice(2,n?e.length-7:void 0),i=t[Lt]||null,i=i!=null?i[e]:null,typeof i=="function"&&t.removeEventListener(l,i,n),typeof a=="function")){typeof i!="function"&&i!==null&&(e in t?t[e]=null:t.hasAttribute(e)&&t.removeAttribute(e)),t.addEventListener(l,a,n);break t}e in t?t[e]=a:a===!0?t.setAttribute(e,""):On(t,e,a)}}}function Ct(t,l,e){switch(l){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":K("error",t),K("load",t);var a=!1,n=!1,i;for(i in e)if(e.hasOwnProperty(i)){var u=e[i];if(u!=null)switch(i){case"src":a=!0;break;case"srcSet":n=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(m(137,l));default:ct(t,l,i,u,e,null)}}n&&ct(t,l,"srcSet",e.srcSet,e,null),a&&ct(t,l,"src",e.src,e,null);return;case"input":K("invalid",t);var c=i=u=n=null,o=null,g=null;for(a in e)if(e.hasOwnProperty(a)){var v=e[a];if(v!=null)switch(a){case"name":n=v;break;case"type":u=v;break;case"checked":o=v;break;case"defaultChecked":g=v;break;case"value":i=v;break;case"defaultValue":c=v;break;case"children":case"dangerouslySetInnerHTML":if(v!=null)throw Error(m(137,l));break;default:ct(t,l,a,v,e,null)}}Yf(t,i,c,o,g,u,n,!1);return;case"select":K("invalid",t),a=u=i=null;for(n in e)if(e.hasOwnProperty(n)&&(c=e[n],c!=null))switch(n){case"value":i=c;break;case"defaultValue":u=c;break;case"multiple":a=c;default:ct(t,l,n,c,e,null)}l=i,e=u,t.multiple=!!a,l!=null?We(t,!!a,l,!1):e!=null&&We(t,!!a,e,!0);return;case"textarea":K("invalid",t),i=n=a=null;for(u in e)if(e.hasOwnProperty(u)&&(c=e[u],c!=null))switch(u){case"value":a=c;break;case"defaultValue":n=c;break;case"children":i=c;break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(m(91));break;default:ct(t,l,u,c,e,null)}wf(t,a,n,i);return;case"option":for(o in e)e.hasOwnProperty(o)&&(a=e[o],a!=null)&&(o==="selected"?t.selected=a&&typeof a!="function"&&typeof a!="symbol":ct(t,l,o,a,e,null));return;case"dialog":K("beforetoggle",t),K("toggle",t),K("cancel",t),K("close",t);break;case"iframe":case"object":K("load",t);break;case"video":case"audio":for(a=0;a<mn.length;a++)K(mn[a],t);break;case"image":K("error",t),K("load",t);break;case"details":K("toggle",t);break;case"embed":case"source":case"link":K("error",t),K("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(g in e)if(e.hasOwnProperty(g)&&(a=e[g],a!=null))switch(g){case"children":case"dangerouslySetInnerHTML":throw Error(m(137,l));default:ct(t,l,g,a,e,null)}return;default:if(nu(l)){for(v in e)e.hasOwnProperty(v)&&(a=e[v],a!==void 0&&Zc(t,l,v,a,e,void 0));return}}for(c in e)e.hasOwnProperty(c)&&(a=e[c],a!=null&&ct(t,l,c,a,e,null))}function Dm(t,l,e,a){switch(l){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var n=null,i=null,u=null,c=null,o=null,g=null,v=null;for(y in e){var S=e[y];if(e.hasOwnProperty(y)&&S!=null)switch(y){case"checked":break;case"value":break;case"defaultValue":o=S;default:a.hasOwnProperty(y)||ct(t,l,y,null,a,S)}}for(var p in a){var y=a[p];if(S=e[p],a.hasOwnProperty(p)&&(y!=null||S!=null))switch(p){case"type":i=y;break;case"name":n=y;break;case"checked":g=y;break;case"defaultChecked":v=y;break;case"value":u=y;break;case"defaultValue":c=y;break;case"children":case"dangerouslySetInnerHTML":if(y!=null)throw Error(m(137,l));break;default:y!==S&&ct(t,l,p,y,a,S)}}eu(t,u,c,o,g,v,i,n);return;case"select":y=u=c=p=null;for(i in e)if(o=e[i],e.hasOwnProperty(i)&&o!=null)switch(i){case"value":break;case"multiple":y=o;default:a.hasOwnProperty(i)||ct(t,l,i,null,a,o)}for(n in a)if(i=a[n],o=e[n],a.hasOwnProperty(n)&&(i!=null||o!=null))switch(n){case"value":p=i;break;case"defaultValue":c=i;break;case"multiple":u=i;default:i!==o&&ct(t,l,n,i,a,o)}l=c,e=u,a=y,p!=null?We(t,!!e,p,!1):!!a!=!!e&&(l!=null?We(t,!!e,l,!0):We(t,!!e,e?[]:"",!1));return;case"textarea":y=p=null;for(c in e)if(n=e[c],e.hasOwnProperty(c)&&n!=null&&!a.hasOwnProperty(c))switch(c){case"value":break;case"children":break;default:ct(t,l,c,null,a,n)}for(u in a)if(n=a[u],i=e[u],a.hasOwnProperty(u)&&(n!=null||i!=null))switch(u){case"value":p=n;break;case"defaultValue":y=n;break;case"children":break;case"dangerouslySetInnerHTML":if(n!=null)throw Error(m(91));break;default:n!==i&&ct(t,l,u,n,a,i)}Gf(t,p,y);return;case"option":for(var O in e)p=e[O],e.hasOwnProperty(O)&&p!=null&&!a.hasOwnProperty(O)&&(O==="selected"?t.selected=!1:ct(t,l,O,null,a,p));for(o in a)p=a[o],y=e[o],a.hasOwnProperty(o)&&p!==y&&(p!=null||y!=null)&&(o==="selected"?t.selected=p&&typeof p!="function"&&typeof p!="symbol":ct(t,l,o,p,a,y));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var q in e)p=e[q],e.hasOwnProperty(q)&&p!=null&&!a.hasOwnProperty(q)&&ct(t,l,q,null,a,p);for(g in a)if(p=a[g],y=e[g],a.hasOwnProperty(g)&&p!==y&&(p!=null||y!=null))switch(g){case"children":case"dangerouslySetInnerHTML":if(p!=null)throw Error(m(137,l));break;default:ct(t,l,g,p,a,y)}return;default:if(nu(l)){for(var ft in e)p=e[ft],e.hasOwnProperty(ft)&&p!==void 0&&!a.hasOwnProperty(ft)&&Zc(t,l,ft,void 0,a,p);for(v in a)p=a[v],y=e[v],!a.hasOwnProperty(v)||p===y||p===void 0&&y===void 0||Zc(t,l,v,p,a,y);return}}for(var d in e)p=e[d],e.hasOwnProperty(d)&&p!=null&&!a.hasOwnProperty(d)&&ct(t,l,d,null,a,p);for(S in a)p=a[S],y=e[S],!a.hasOwnProperty(S)||p===y||p==null&&y==null||ct(t,l,S,p,a,y)}function Zr(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Cm(){if(typeof performance.getEntriesByType=="function"){for(var t=0,l=0,e=performance.getEntriesByType("resource"),a=0;a<e.length;a++){var n=e[a],i=n.transferSize,u=n.initiatorType,c=n.duration;if(i&&c&&Zr(u)){for(u=0,c=n.responseEnd,a+=1;a<e.length;a++){var o=e[a],g=o.startTime;if(g>c)break;var v=o.transferSize,S=o.initiatorType;v&&Zr(S)&&(o=o.responseEnd,u+=v*(o<c?1:(c-g)/(o-g)))}if(--a,l+=8*(i+u)/(n.duration/1e3),t++,10<t)break}}if(0<t)return l/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var Vc=null,Kc=null;function _i(t){return t.nodeType===9?t:t.ownerDocument}function Vr(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Kr(t,l){if(t===0)switch(l){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&l==="foreignObject"?0:t}function Jc(t,l){return t==="textarea"||t==="noscript"||typeof l.children=="string"||typeof l.children=="number"||typeof l.children=="bigint"||typeof l.dangerouslySetInnerHTML=="object"&&l.dangerouslySetInnerHTML!==null&&l.dangerouslySetInnerHTML.__html!=null}var kc=null;function Um(){var t=window.event;return t&&t.type==="popstate"?t===kc?!1:(kc=t,!0):(kc=null,!1)}var Jr=typeof setTimeout=="function"?setTimeout:void 0,Hm=typeof clearTimeout=="function"?clearTimeout:void 0,kr=typeof Promise=="function"?Promise:void 0,Rm=typeof queueMicrotask=="function"?queueMicrotask:typeof kr<"u"?function(t){return kr.resolve(null).then(t).catch(Bm)}:Jr;function Bm(t){setTimeout(function(){throw t})}function ye(t){return t==="head"}function Wr(t,l){var e=l,a=0;do{var n=e.nextSibling;if(t.removeChild(e),n&&n.nodeType===8)if(e=n.data,e==="/$"||e==="/&"){if(a===0){t.removeChild(n),Na(l);return}a--}else if(e==="$"||e==="$?"||e==="$~"||e==="$!"||e==="&")a++;else if(e==="html")gn(t.ownerDocument.documentElement);else if(e==="head"){e=t.ownerDocument.head,gn(e);for(var i=e.firstChild;i;){var u=i.nextSibling,c=i.nodeName;i[Ca]||c==="SCRIPT"||c==="STYLE"||c==="LINK"&&i.rel.toLowerCase()==="stylesheet"||e.removeChild(i),i=u}}else e==="body"&&gn(t.ownerDocument.body);e=n}while(e);Na(l)}function $r(t,l){var e=t;t=0;do{var a=e.nextSibling;if(e.nodeType===1?l?(e._stashedDisplay=e.style.display,e.style.display="none"):(e.style.display=e._stashedDisplay||"",e.getAttribute("style")===""&&e.removeAttribute("style")):e.nodeType===3&&(l?(e._stashedText=e.nodeValue,e.nodeValue=""):e.nodeValue=e._stashedText||""),a&&a.nodeType===8)if(e=a.data,e==="/$"){if(t===0)break;t--}else e!=="$"&&e!=="$?"&&e!=="$~"&&e!=="$!"||t++;e=a}while(e)}function Wc(t){var l=t.firstChild;for(l&&l.nodeType===10&&(l=l.nextSibling);l;){var e=l;switch(l=l.nextSibling,e.nodeName){case"HTML":case"HEAD":case"BODY":Wc(e),tu(e);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(e.rel.toLowerCase()==="stylesheet")continue}t.removeChild(e)}}function qm(t,l,e,a){for(;t.nodeType===1;){var n=e;if(t.nodeName.toLowerCase()!==l.toLowerCase()){if(!a&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(a){if(!t[Ca])switch(l){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(i=t.getAttribute("rel"),i==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(i!==n.rel||t.getAttribute("href")!==(n.href==null||n.href===""?null:n.href)||t.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin)||t.getAttribute("title")!==(n.title==null?null:n.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(i=t.getAttribute("src"),(i!==(n.src==null?null:n.src)||t.getAttribute("type")!==(n.type==null?null:n.type)||t.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin))&&i&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(l==="input"&&t.type==="hidden"){var i=n.name==null?null:""+n.name;if(n.type==="hidden"&&t.getAttribute("name")===i)return t}else return t;if(t=yl(t.nextSibling),t===null)break}return null}function Ym(t,l,e){if(l==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!e||(t=yl(t.nextSibling),t===null))return null;return t}function Fr(t,l){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!l||(t=yl(t.nextSibling),t===null))return null;return t}function $c(t){return t.data==="$?"||t.data==="$~"}function Fc(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function Gm(t,l){var e=t.ownerDocument;if(t.data==="$~")t._reactRetry=l;else if(t.data!=="$?"||e.readyState!=="loading")l();else{var a=function(){l(),e.removeEventListener("DOMContentLoaded",a)};e.addEventListener("DOMContentLoaded",a),t._reactRetry=a}}function yl(t){for(;t!=null;t=t.nextSibling){var l=t.nodeType;if(l===1||l===3)break;if(l===8){if(l=t.data,l==="$"||l==="$!"||l==="$?"||l==="$~"||l==="&"||l==="F!"||l==="F")break;if(l==="/$"||l==="/&")return null}}return t}var Ic=null;function Ir(t){t=t.nextSibling;for(var l=0;t;){if(t.nodeType===8){var e=t.data;if(e==="/$"||e==="/&"){if(l===0)return yl(t.nextSibling);l--}else e!=="$"&&e!=="$!"&&e!=="$?"&&e!=="$~"&&e!=="&"||l++}t=t.nextSibling}return null}function Pr(t){t=t.previousSibling;for(var l=0;t;){if(t.nodeType===8){var e=t.data;if(e==="$"||e==="$!"||e==="$?"||e==="$~"||e==="&"){if(l===0)return t;l--}else e!=="/$"&&e!=="/&"||l++}t=t.previousSibling}return null}function td(t,l,e){switch(l=_i(e),t){case"html":if(t=l.documentElement,!t)throw Error(m(452));return t;case"head":if(t=l.head,!t)throw Error(m(453));return t;case"body":if(t=l.body,!t)throw Error(m(454));return t;default:throw Error(m(451))}}function gn(t){for(var l=t.attributes;l.length;)t.removeAttributeNode(l[0]);tu(t)}var vl=new Map,ld=new Set;function Mi(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var $l=T.d;T.d={f:wm,r:Xm,D:Qm,C:Lm,L:Zm,m:Vm,X:Jm,S:Km,M:km};function wm(){var t=$l.f(),l=xi();return t||l}function Xm(t){var l=Ke(t);l!==null&&l.tag===5&&l.type==="form"?vs(l):$l.r(t)}var Ea=typeof document>"u"?null:document;function ed(t,l,e){var a=Ea;if(a&&typeof l=="string"&&l){var n=sl(l);n='link[rel="'+t+'"][href="'+n+'"]',typeof e=="string"&&(n+='[crossorigin="'+e+'"]'),ld.has(n)||(ld.add(n),t={rel:t,crossOrigin:e,href:l},a.querySelector(n)===null&&(l=a.createElement("link"),Ct(l,"link",t),Tt(l),a.head.appendChild(l)))}}function Qm(t){$l.D(t),ed("dns-prefetch",t,null)}function Lm(t,l){$l.C(t,l),ed("preconnect",t,l)}function Zm(t,l,e){$l.L(t,l,e);var a=Ea;if(a&&t&&l){var n='link[rel="preload"][as="'+sl(l)+'"]';l==="image"&&e&&e.imageSrcSet?(n+='[imagesrcset="'+sl(e.imageSrcSet)+'"]',typeof e.imageSizes=="string"&&(n+='[imagesizes="'+sl(e.imageSizes)+'"]')):n+='[href="'+sl(t)+'"]';var i=n;switch(l){case"style":i=ja(t);break;case"script":i=Ta(t)}vl.has(i)||(t=B({rel:"preload",href:l==="image"&&e&&e.imageSrcSet?void 0:t,as:l},e),vl.set(i,t),a.querySelector(n)!==null||l==="style"&&a.querySelector(pn(i))||l==="script"&&a.querySelector(yn(i))||(l=a.createElement("link"),Ct(l,"link",t),Tt(l),a.head.appendChild(l)))}}function Vm(t,l){$l.m(t,l);var e=Ea;if(e&&t){var a=l&&typeof l.as=="string"?l.as:"script",n='link[rel="modulepreload"][as="'+sl(a)+'"][href="'+sl(t)+'"]',i=n;switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":i=Ta(t)}if(!vl.has(i)&&(t=B({rel:"modulepreload",href:t},l),vl.set(i,t),e.querySelector(n)===null)){switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(e.querySelector(yn(i)))return}a=e.createElement("link"),Ct(a,"link",t),Tt(a),e.head.appendChild(a)}}}function Km(t,l,e){$l.S(t,l,e);var a=Ea;if(a&&t){var n=Je(a).hoistableStyles,i=ja(t);l=l||"default";var u=n.get(i);if(!u){var c={loading:0,preload:null};if(u=a.querySelector(pn(i)))c.loading=5;else{t=B({rel:"stylesheet",href:t,"data-precedence":l},e),(e=vl.get(i))&&Pc(t,e);var o=u=a.createElement("link");Tt(o),Ct(o,"link",t),o._p=new Promise(function(g,v){o.onload=g,o.onerror=v}),o.addEventListener("load",function(){c.loading|=1}),o.addEventListener("error",function(){c.loading|=2}),c.loading|=4,Oi(u,l,a)}u={type:"stylesheet",instance:u,count:1,state:c},n.set(i,u)}}}function Jm(t,l){$l.X(t,l);var e=Ea;if(e&&t){var a=Je(e).hoistableScripts,n=Ta(t),i=a.get(n);i||(i=e.querySelector(yn(n)),i||(t=B({src:t,async:!0},l),(l=vl.get(n))&&tf(t,l),i=e.createElement("script"),Tt(i),Ct(i,"link",t),e.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},a.set(n,i))}}function km(t,l){$l.M(t,l);var e=Ea;if(e&&t){var a=Je(e).hoistableScripts,n=Ta(t),i=a.get(n);i||(i=e.querySelector(yn(n)),i||(t=B({src:t,async:!0,type:"module"},l),(l=vl.get(n))&&tf(t,l),i=e.createElement("script"),Tt(i),Ct(i,"link",t),e.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},a.set(n,i))}}function ad(t,l,e,a){var n=(n=Z.current)?Mi(n):null;if(!n)throw Error(m(446));switch(t){case"meta":case"title":return null;case"style":return typeof e.precedence=="string"&&typeof e.href=="string"?(l=ja(e.href),e=Je(n).hoistableStyles,a=e.get(l),a||(a={type:"style",instance:null,count:0,state:null},e.set(l,a)),a):{type:"void",instance:null,count:0,state:null};case"link":if(e.rel==="stylesheet"&&typeof e.href=="string"&&typeof e.precedence=="string"){t=ja(e.href);var i=Je(n).hoistableStyles,u=i.get(t);if(u||(n=n.ownerDocument||n,u={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},i.set(t,u),(i=n.querySelector(pn(t)))&&!i._p&&(u.instance=i,u.state.loading=5),vl.has(t)||(e={rel:"preload",as:"style",href:e.href,crossOrigin:e.crossOrigin,integrity:e.integrity,media:e.media,hrefLang:e.hrefLang,referrerPolicy:e.referrerPolicy},vl.set(t,e),i||Wm(n,t,e,u.state))),l&&a===null)throw Error(m(528,""));return u}if(l&&a!==null)throw Error(m(529,""));return null;case"script":return l=e.async,e=e.src,typeof e=="string"&&l&&typeof l!="function"&&typeof l!="symbol"?(l=Ta(e),e=Je(n).hoistableScripts,a=e.get(l),a||(a={type:"script",instance:null,count:0,state:null},e.set(l,a)),a):{type:"void",instance:null,count:0,state:null};default:throw Error(m(444,t))}}function ja(t){return'href="'+sl(t)+'"'}function pn(t){return'link[rel="stylesheet"]['+t+"]"}function nd(t){return B({},t,{"data-precedence":t.precedence,precedence:null})}function Wm(t,l,e,a){t.querySelector('link[rel="preload"][as="style"]['+l+"]")?a.loading=1:(l=t.createElement("link"),a.preload=l,l.addEventListener("load",function(){return a.loading|=1}),l.addEventListener("error",function(){return a.loading|=2}),Ct(l,"link",e),Tt(l),t.head.appendChild(l))}function Ta(t){return'[src="'+sl(t)+'"]'}function yn(t){return"script[async]"+t}function id(t,l,e){if(l.count++,l.instance===null)switch(l.type){case"style":var a=t.querySelector('style[data-href~="'+sl(e.href)+'"]');if(a)return l.instance=a,Tt(a),a;var n=B({},e,{"data-href":e.href,"data-precedence":e.precedence,href:null,precedence:null});return a=(t.ownerDocument||t).createElement("style"),Tt(a),Ct(a,"style",n),Oi(a,e.precedence,t),l.instance=a;case"stylesheet":n=ja(e.href);var i=t.querySelector(pn(n));if(i)return l.state.loading|=4,l.instance=i,Tt(i),i;a=nd(e),(n=vl.get(n))&&Pc(a,n),i=(t.ownerDocument||t).createElement("link"),Tt(i);var u=i;return u._p=new Promise(function(c,o){u.onload=c,u.onerror=o}),Ct(i,"link",a),l.state.loading|=4,Oi(i,e.precedence,t),l.instance=i;case"script":return i=Ta(e.src),(n=t.querySelector(yn(i)))?(l.instance=n,Tt(n),n):(a=e,(n=vl.get(i))&&(a=B({},e),tf(a,n)),t=t.ownerDocument||t,n=t.createElement("script"),Tt(n),Ct(n,"link",a),t.head.appendChild(n),l.instance=n);case"void":return null;default:throw Error(m(443,l.type))}else l.type==="stylesheet"&&(l.state.loading&4)===0&&(a=l.instance,l.state.loading|=4,Oi(a,e.precedence,t));return l.instance}function Oi(t,l,e){for(var a=e.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),n=a.length?a[a.length-1]:null,i=n,u=0;u<a.length;u++){var c=a[u];if(c.dataset.precedence===l)i=c;else if(i!==n)break}i?i.parentNode.insertBefore(t,i.nextSibling):(l=e.nodeType===9?e.head:e,l.insertBefore(t,l.firstChild))}function Pc(t,l){t.crossOrigin==null&&(t.crossOrigin=l.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=l.referrerPolicy),t.title==null&&(t.title=l.title)}function tf(t,l){t.crossOrigin==null&&(t.crossOrigin=l.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=l.referrerPolicy),t.integrity==null&&(t.integrity=l.integrity)}var Di=null;function ud(t,l,e){if(Di===null){var a=new Map,n=Di=new Map;n.set(e,a)}else n=Di,a=n.get(e),a||(a=new Map,n.set(e,a));if(a.has(t))return a;for(a.set(t,null),e=e.getElementsByTagName(t),n=0;n<e.length;n++){var i=e[n];if(!(i[Ca]||i[_t]||t==="link"&&i.getAttribute("rel")==="stylesheet")&&i.namespaceURI!=="http://www.w3.org/2000/svg"){var u=i.getAttribute(l)||"";u=t+u;var c=a.get(u);c?c.push(i):a.set(u,[i])}}return a}function cd(t,l,e){t=t.ownerDocument||t,t.head.insertBefore(e,l==="title"?t.querySelector("head > title"):null)}function $m(t,l,e){if(e===1||l.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof l.precedence!="string"||typeof l.href!="string"||l.href==="")break;return!0;case"link":if(typeof l.rel!="string"||typeof l.href!="string"||l.href===""||l.onLoad||l.onError)break;return l.rel==="stylesheet"?(t=l.disabled,typeof l.precedence=="string"&&t==null):!0;case"script":if(l.async&&typeof l.async!="function"&&typeof l.async!="symbol"&&!l.onLoad&&!l.onError&&l.src&&typeof l.src=="string")return!0}return!1}function fd(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function Fm(t,l,e,a){if(e.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(e.state.loading&4)===0){if(e.instance===null){var n=ja(a.href),i=l.querySelector(pn(n));if(i){l=i._p,l!==null&&typeof l=="object"&&typeof l.then=="function"&&(t.count++,t=Ci.bind(t),l.then(t,t)),e.state.loading|=4,e.instance=i,Tt(i);return}i=l.ownerDocument||l,a=nd(a),(n=vl.get(n))&&Pc(a,n),i=i.createElement("link"),Tt(i);var u=i;u._p=new Promise(function(c,o){u.onload=c,u.onerror=o}),Ct(i,"link",a),e.instance=i}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(e,l),(l=e.state.preload)&&(e.state.loading&3)===0&&(t.count++,e=Ci.bind(t),l.addEventListener("load",e),l.addEventListener("error",e))}}var lf=0;function Im(t,l){return t.stylesheets&&t.count===0&&Hi(t,t.stylesheets),0<t.count||0<t.imgCount?function(e){var a=setTimeout(function(){if(t.stylesheets&&Hi(t,t.stylesheets),t.unsuspend){var i=t.unsuspend;t.unsuspend=null,i()}},6e4+l);0<t.imgBytes&&lf===0&&(lf=62500*Cm());var n=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&Hi(t,t.stylesheets),t.unsuspend)){var i=t.unsuspend;t.unsuspend=null,i()}},(t.imgBytes>lf?50:800)+l);return t.unsuspend=e,function(){t.unsuspend=null,clearTimeout(a),clearTimeout(n)}}:null}function Ci(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Hi(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Ui=null;function Hi(t,l){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Ui=new Map,l.forEach(Pm,t),Ui=null,Ci.call(t))}function Pm(t,l){if(!(l.state.loading&4)){var e=Ui.get(t);if(e)var a=e.get(null);else{e=new Map,Ui.set(t,e);for(var n=t.querySelectorAll("link[data-precedence],style[data-precedence]"),i=0;i<n.length;i++){var u=n[i];(u.nodeName==="LINK"||u.getAttribute("media")!=="not all")&&(e.set(u.dataset.precedence,u),a=u)}a&&e.set(null,a)}n=l.instance,u=n.getAttribute("data-precedence"),i=e.get(u)||a,i===a&&e.set(null,n),e.set(u,n),this.count++,a=Ci.bind(this),n.addEventListener("load",a),n.addEventListener("error",a),i?i.parentNode.insertBefore(n,i.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(n,t.firstChild)),l.state.loading|=4}}var vn={$$typeof:Ut,Provider:null,Consumer:null,_currentValue:Y,_currentValue2:Y,_threadCount:0};function th(t,l,e,a,n,i,u,c,o){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=$i(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=$i(0),this.hiddenUpdates=$i(null),this.identifierPrefix=a,this.onUncaughtError=n,this.onCaughtError=i,this.onRecoverableError=u,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=o,this.incompleteTransitions=new Map}function od(t,l,e,a,n,i,u,c,o,g,v,S){return t=new th(t,l,e,u,o,g,v,S,c),l=1,i===!0&&(l|=24),i=el(3,null,null,l),t.current=i,i.stateNode=t,l=Hu(),l.refCount++,t.pooledCache=l,l.refCount++,i.memoizedState={element:a,isDehydrated:e,cache:l},Yu(i),t}function sd(t){return t?(t=aa,t):aa}function rd(t,l,e,a,n,i){n=sd(n),a.context===null?a.context=n:a.pendingContext=n,a=ue(l),a.payload={element:e},i=i===void 0?null:i,i!==null&&(a.callback=i),e=ce(t,a,l),e!==null&&(Wt(e,t,l),Wa(e,t,l))}function dd(t,l){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var e=t.retryLane;t.retryLane=e!==0&&e<l?e:l}}function ef(t,l){dd(t,l),(t=t.alternate)&&dd(t,l)}function md(t){if(t.tag===13||t.tag===31){var l=Oe(t,67108864);l!==null&&Wt(l,t,67108864),ef(t,67108864)}}function hd(t){if(t.tag===13||t.tag===31){var l=cl();l=Fi(l);var e=Oe(t,l);e!==null&&Wt(e,t,l),ef(t,l)}}var Ri=!0;function lh(t,l,e,a){var n=b.T;b.T=null;var i=T.p;try{T.p=2,af(t,l,e,a)}finally{T.p=i,b.T=n}}function eh(t,l,e,a){var n=b.T;b.T=null;var i=T.p;try{T.p=8,af(t,l,e,a)}finally{T.p=i,b.T=n}}function af(t,l,e,a){if(Ri){var n=nf(a);if(n===null)Lc(t,l,a,Bi,e),pd(t,a);else if(nh(n,t,l,e,a))a.stopPropagation();else if(pd(t,a),l&4&&-1<ah.indexOf(t)){for(;n!==null;){var i=Ke(n);if(i!==null)switch(i.tag){case 3:if(i=i.stateNode,i.current.memoizedState.isDehydrated){var u=je(i.pendingLanes);if(u!==0){var c=i;for(c.pendingLanes|=2,c.entangledLanes|=2;u;){var o=1<<31-tl(u);c.entanglements[1]|=o,u&=~o}Ml(i),(tt&6)===0&&(vi=It()+500,dn(0))}}break;case 31:case 13:c=Oe(i,2),c!==null&&Wt(c,i,2),xi(),ef(i,2)}if(i=nf(a),i===null&&Lc(t,l,a,Bi,e),i===n)break;n=i}n!==null&&a.stopPropagation()}else Lc(t,l,a,null,e)}}function nf(t){return t=uu(t),uf(t)}var Bi=null;function uf(t){if(Bi=null,t=Ve(t),t!==null){var l=R(t);if(l===null)t=null;else{var e=l.tag;if(e===13){if(t=w(l),t!==null)return t;t=null}else if(e===31){if(t=rt(l),t!==null)return t;t=null}else if(e===3){if(l.stateNode.current.memoizedState.isDehydrated)return l.tag===3?l.stateNode.containerInfo:null;t=null}else l!==t&&(t=null)}}return Bi=t,null}function gd(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Qd()){case zf:return 2;case Af:return 8;case jn:case Ld:return 32;case Ef:return 268435456;default:return 32}default:return 32}}var cf=!1,ve=null,be=null,xe=null,bn=new Map,xn=new Map,Se=[],ah="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function pd(t,l){switch(t){case"focusin":case"focusout":ve=null;break;case"dragenter":case"dragleave":be=null;break;case"mouseover":case"mouseout":xe=null;break;case"pointerover":case"pointerout":bn.delete(l.pointerId);break;case"gotpointercapture":case"lostpointercapture":xn.delete(l.pointerId)}}function Sn(t,l,e,a,n,i){return t===null||t.nativeEvent!==i?(t={blockedOn:l,domEventName:e,eventSystemFlags:a,nativeEvent:i,targetContainers:[n]},l!==null&&(l=Ke(l),l!==null&&md(l)),t):(t.eventSystemFlags|=a,l=t.targetContainers,n!==null&&l.indexOf(n)===-1&&l.push(n),t)}function nh(t,l,e,a,n){switch(l){case"focusin":return ve=Sn(ve,t,l,e,a,n),!0;case"dragenter":return be=Sn(be,t,l,e,a,n),!0;case"mouseover":return xe=Sn(xe,t,l,e,a,n),!0;case"pointerover":var i=n.pointerId;return bn.set(i,Sn(bn.get(i)||null,t,l,e,a,n)),!0;case"gotpointercapture":return i=n.pointerId,xn.set(i,Sn(xn.get(i)||null,t,l,e,a,n)),!0}return!1}function yd(t){var l=Ve(t.target);if(l!==null){var e=R(l);if(e!==null){if(l=e.tag,l===13){if(l=w(e),l!==null){t.blockedOn=l,Of(t.priority,function(){hd(e)});return}}else if(l===31){if(l=rt(e),l!==null){t.blockedOn=l,Of(t.priority,function(){hd(e)});return}}else if(l===3&&e.stateNode.current.memoizedState.isDehydrated){t.blockedOn=e.tag===3?e.stateNode.containerInfo:null;return}}}t.blockedOn=null}function qi(t){if(t.blockedOn!==null)return!1;for(var l=t.targetContainers;0<l.length;){var e=nf(t.nativeEvent);if(e===null){e=t.nativeEvent;var a=new e.constructor(e.type,e);iu=a,e.target.dispatchEvent(a),iu=null}else return l=Ke(e),l!==null&&md(l),t.blockedOn=e,!1;l.shift()}return!0}function vd(t,l,e){qi(t)&&e.delete(l)}function ih(){cf=!1,ve!==null&&qi(ve)&&(ve=null),be!==null&&qi(be)&&(be=null),xe!==null&&qi(xe)&&(xe=null),bn.forEach(vd),xn.forEach(vd)}function Yi(t,l){t.blockedOn===l&&(t.blockedOn=null,cf||(cf=!0,z.unstable_scheduleCallback(z.unstable_NormalPriority,ih)))}var Gi=null;function bd(t){Gi!==t&&(Gi=t,z.unstable_scheduleCallback(z.unstable_NormalPriority,function(){Gi===t&&(Gi=null);for(var l=0;l<t.length;l+=3){var e=t[l],a=t[l+1],n=t[l+2];if(typeof a!="function"){if(uf(a||e)===null)continue;break}var i=Ke(e);i!==null&&(t.splice(l,3),l-=3,nc(i,{pending:!0,data:n,method:e.method,action:a},a,n))}}))}function Na(t){function l(o){return Yi(o,t)}ve!==null&&Yi(ve,t),be!==null&&Yi(be,t),xe!==null&&Yi(xe,t),bn.forEach(l),xn.forEach(l);for(var e=0;e<Se.length;e++){var a=Se[e];a.blockedOn===t&&(a.blockedOn=null)}for(;0<Se.length&&(e=Se[0],e.blockedOn===null);)yd(e),e.blockedOn===null&&Se.shift();if(e=(t.ownerDocument||t).$$reactFormReplay,e!=null)for(a=0;a<e.length;a+=3){var n=e[a],i=e[a+1],u=n[Lt]||null;if(typeof i=="function")u||bd(e);else if(u){var c=null;if(i&&i.hasAttribute("formAction")){if(n=i,u=i[Lt]||null)c=u.formAction;else if(uf(n)!==null)continue}else c=u.action;typeof c=="function"?e[a+1]=c:(e.splice(a,3),a-=3),bd(e)}}}function xd(){function t(i){i.canIntercept&&i.info==="react-transition"&&i.intercept({handler:function(){return new Promise(function(u){return n=u})},focusReset:"manual",scroll:"manual"})}function l(){n!==null&&(n(),n=null),a||setTimeout(e,20)}function e(){if(!a&&!navigation.transition){var i=navigation.currentEntry;i&&i.url!=null&&navigation.navigate(i.url,{state:i.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var a=!1,n=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",l),navigation.addEventListener("navigateerror",l),setTimeout(e,100),function(){a=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",l),navigation.removeEventListener("navigateerror",l),n!==null&&(n(),n=null)}}}function ff(t){this._internalRoot=t}wi.prototype.render=ff.prototype.render=function(t){var l=this._internalRoot;if(l===null)throw Error(m(409));var e=l.current,a=cl();rd(e,a,t,l,null,null)},wi.prototype.unmount=ff.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var l=t.containerInfo;rd(t.current,2,null,t,null,null),xi(),l[Ze]=null}};function wi(t){this._internalRoot=t}wi.prototype.unstable_scheduleHydration=function(t){if(t){var l=Mf();t={blockedOn:null,target:t,priority:l};for(var e=0;e<Se.length&&l!==0&&l<Se[e].priority;e++);Se.splice(e,0,t),e===0&&yd(t)}};var Sd=j.version;if(Sd!=="19.2.3")throw Error(m(527,Sd,"19.2.3"));T.findDOMNode=function(t){var l=t._reactInternals;if(l===void 0)throw typeof t.render=="function"?Error(m(188)):(t=Object.keys(t).join(","),Error(m(268,t)));return t=E(l),t=t!==null?J(t):null,t=t===null?null:t.stateNode,t};var uh={bundleType:0,version:"19.2.3",rendererPackageName:"react-dom",currentDispatcherRef:b,reconcilerVersion:"19.2.3"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Xi=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Xi.isDisabled&&Xi.supportsFiber)try{Ma=Xi.inject(uh),Pt=Xi}catch{}}return An.createRoot=function(t,l){if(!D(t))throw Error(m(299));var e=!1,a="",n=_s,i=Ms,u=Os;return l!=null&&(l.unstable_strictMode===!0&&(e=!0),l.identifierPrefix!==void 0&&(a=l.identifierPrefix),l.onUncaughtError!==void 0&&(n=l.onUncaughtError),l.onCaughtError!==void 0&&(i=l.onCaughtError),l.onRecoverableError!==void 0&&(u=l.onRecoverableError)),l=od(t,1,!1,null,null,e,a,null,n,i,u,xd),t[Ze]=l.current,Qc(t),new ff(l)},An.hydrateRoot=function(t,l,e){if(!D(t))throw Error(m(299));var a=!1,n="",i=_s,u=Ms,c=Os,o=null;return e!=null&&(e.unstable_strictMode===!0&&(a=!0),e.identifierPrefix!==void 0&&(n=e.identifierPrefix),e.onUncaughtError!==void 0&&(i=e.onUncaughtError),e.onCaughtError!==void 0&&(u=e.onCaughtError),e.onRecoverableError!==void 0&&(c=e.onRecoverableError),e.formState!==void 0&&(o=e.formState)),l=od(t,1,!0,l,e??null,a,n,o,i,u,c,xd),l.context=sd(null),e=l.current,a=cl(),a=Fi(a),n=ue(a),n.callback=null,ce(e,n,a),e=a,l.current.lanes=e,Da(l,e),Ml(l),t[Ze]=l.current,Qc(t),new wi(l)},An.version="19.2.3",An}var Dd;function ph(){if(Dd)return rf.exports;Dd=1;function z(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(z)}catch(j){console.error(j)}}return z(),rf.exports=gh(),rf.exports}var yh=ph();const vh=z=>z.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),bh=z=>z.replace(/^([A-Z])|[\s-_]+(\w)/g,(j,_,m)=>m?m.toUpperCase():_.toLowerCase()),Cd=z=>{const j=bh(z);return j.charAt(0).toUpperCase()+j.slice(1)},Rd=(...z)=>z.filter((j,_,m)=>!!j&&j.trim()!==""&&m.indexOf(j)===_).join(" ").trim(),xh=z=>{for(const j in z)if(j.startsWith("aria-")||j==="role"||j==="title")return!0};var Sh={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const zh=Rt.forwardRef(({color:z="currentColor",size:j=24,strokeWidth:_=2,absoluteStrokeWidth:m,className:D="",children:R,iconNode:w,...rt},M)=>Rt.createElement("svg",{ref:M,...Sh,width:j,height:j,stroke:z,strokeWidth:m?Number(_)*24/Number(j):_,className:Rd("lucide",D),...!R&&!xh(rt)&&{"aria-hidden":"true"},...rt},[...w.map(([E,J])=>Rt.createElement(E,J)),...Array.isArray(R)?R:[R]]));const ht=(z,j)=>{const _=Rt.forwardRef(({className:m,...D},R)=>Rt.createElement(zh,{ref:R,iconNode:j,className:Rd(`lucide-${vh(Cd(z))}`,`lucide-${z}`,m),...D}));return _.displayName=Cd(z),_};const Ah=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],Eh=ht("arrow-right",Ah);const jh=[["path",{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",key:"1yiouv"}],["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}]],bf=ht("award",jh);const Th=[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]],Nh=ht("book-open",Th);const _h=[["path",{d:"M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16",key:"jecpp"}],["rect",{width:"20",height:"14",x:"2",y:"6",rx:"2",key:"i6l2r4"}]],Bd=ht("briefcase",_h);const Mh=[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]],Oh=ht("calendar",Mh);const Dh=[["path",{d:"M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z",key:"18u6gg"}],["circle",{cx:"12",cy:"13",r:"3",key:"1vg3eu"}]],Ch=ht("camera",Dh);const Uh=[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]],Hh=ht("chevron-left",Uh);const Rh=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],Bh=ht("chevron-right",Rh);const qh=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],Yh=ht("circle-alert",qh);const Gh=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],wh=ht("circle-check-big",Gh);const Xh=[["path",{d:"m16 18 6-6-6-6",key:"eg8j8"}],["path",{d:"m8 6-6 6 6 6",key:"ppft3o"}]],Ud=ht("code",Xh);const Qh=[["path",{d:"M12 15V3",key:"m9g1x1"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["path",{d:"m7 10 5 5 5-5",key:"brsn70"}]],yf=ht("download",Qh);const Lh=[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]],Zh=ht("external-link",Lh);const Vh=[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]],Kh=ht("github",Vh);const Jh=[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]],kh=ht("linkedin",Jh);const Wh=[["path",{d:"M21.2 8.4c.5.38.8.97.8 1.6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 .8-1.6l8-6a2 2 0 0 1 2.4 0l8 6Z",key:"1jhwl8"}],["path",{d:"m22 10-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 10",key:"1qfld7"}]],$h=ht("mail-open",Wh);const Fh=[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]],qd=ht("map-pin",Fh);const Ih=[["path",{d:"M4 5h16",key:"1tepv9"}],["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 19h16",key:"1djgab"}]],Ph=ht("menu",Ih);const t1=[["path",{d:"M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",key:"9njp5v"}]],l1=ht("phone",t1);const e1=[["path",{d:"M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z",key:"m3kijz"}],["path",{d:"m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z",key:"1fmvmk"}],["path",{d:"M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0",key:"1f8sc4"}],["path",{d:"M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5",key:"qeys4"}]],a1=ht("rocket",e1);const n1=[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]],i1=ht("send",n1);const u1=[["path",{d:"M11 2v2",key:"1539x4"}],["path",{d:"M5 2v2",key:"1yf1q8"}],["path",{d:"M5 3H4a2 2 0 0 0-2 2v4a6 6 0 0 0 12 0V5a2 2 0 0 0-2-2h-1",key:"rb5t3r"}],["path",{d:"M8 15a6 6 0 0 0 12 0v-3",key:"x18d4x"}],["circle",{cx:"20",cy:"10",r:"2",key:"ts1r5v"}]],c1=ht("stethoscope",u1);const f1=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744",key:"16gr8j"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]],o1=ht("users",f1);const s1=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],r1=ht("x",s1);const d1=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]],Yd=ht("zap",d1),gf=[{id:1,title:"A Swift Tour",subtitle:"Explore the features and syntax of Swift",date:"March 24, 2026",description:"Get started with Apple's powerful and intuitive programming language. This guide provides a comprehensive overview of Swift's core features, from simple values and control flow to functions, closures, and object-oriented patterns. Perfect for developers looking to master the fundamentals of pure Swift through practical, hands-on examples.",imageUrl:"swift-256x256_2x.png",redirectionLink:"https://docs.swift.org/swift-book/documentation/the-swift-programming-language/guidedtour/"}],m1=()=>{const[z,j]=Rt.useState({x:0,y:0}),[_,m]=Rt.useState(!1);return Rt.useEffect(()=>{let D,R=0,w=0,rt=0,M=0;const E=lt=>{rt=lt.clientX,M=lt.clientY},J=()=>{R+=(rt-R)*.15,w+=(M-w)*.15,j({x:R,y:w}),D=requestAnimationFrame(J)},B=lt=>{lt.target.closest("a, button, input, textarea")?m(!0):m(!1)};return window.addEventListener("mousemove",E),window.addEventListener("mouseover",B),D=requestAnimationFrame(J),()=>{window.removeEventListener("mousemove",E),window.removeEventListener("mouseover",B),cancelAnimationFrame(D)}},[]),f.jsx("div",{className:"custom-cursor",style:{left:`${z.x}px`,top:`${z.y}px`,transform:`translate(-50%, -50%) scale(${_?1.5:1})`}})},Ol=({children:z,className:j="",hover:_=!1})=>f.jsx("div",{className:`glass-card ${_?"glass-card-hover":""} ${j}`,children:z}),Qi=({children:z,icon:j})=>f.jsxs("span",{className:"tag",children:[j&&f.jsx(j,{size:14}),z]}),Li=({icon:z,number:j,label:_})=>f.jsxs("div",{className:"stat-card",children:[f.jsx(z,{className:"stat-icon",size:32}),f.jsx("div",{className:"stat-number",children:j}),f.jsx("div",{className:"stat-label",children:_})]}),h1=({currentPage:z,setCurrentPage:j,mobileMenuOpen:_,setMobileMenuOpen:m})=>{const D=["home","about","experience","projects","contributions","contact"];return f.jsx("nav",{className:"navbar",children:f.jsxs("div",{className:"nav-content",children:[f.jsxs("div",{className:"nav-brand",onClick:()=>j("home"),children:[f.jsx("img",{src:"/nav-logo.png",alt:"Logo",className:"nav-logo"}),"Abhay Korat"]}),f.jsx("button",{className:"mobile-menu-btn",onClick:()=>m(!_),children:_?f.jsx(r1,{size:24}):f.jsx(Ph,{size:24})}),f.jsx("div",{className:`nav-links ${_?"nav-links-open":""}`,children:D.map(R=>f.jsx("a",{onClick:()=>{j(R),m(!1)},className:z===R?"active":"",children:R.charAt(0).toUpperCase()+R.slice(1)},R))})]})})},Hd=({setCurrentPage:z})=>f.jsx("div",{className:"page home-page",children:f.jsxs(Ol,{className:"hero-card",children:[f.jsxs("div",{className:"profile-container",children:[f.jsx("div",{className:"star-field"}),f.jsx("div",{className:"cyber-orbit orbit-1"}),f.jsx("div",{className:"cyber-orbit orbit-2"}),f.jsx("div",{className:"cyber-orbit orbit-3"}),f.jsxs("div",{className:"profile-image-wrapper",children:[f.jsx("img",{src:"/spaceprofile.png",alt:"Abhay Korat",className:"profile-image"}),f.jsx("div",{className:"hologram-overlay"})]})]}),f.jsx("h1",{className:"hero-title",children:"Abhay Korat"}),f.jsx("h2",{className:"hero-subtitle",children:"Lead Software Engineer | Mobile Architecture"}),f.jsx("p",{className:"hero-tagline",children:"Flutter & Native (iOS/Android) Expert • 11+ Years Building Scalable Fintech & Enterprise Solutions"}),f.jsxs("div",{className:"hero-buttons",children:[f.jsx("button",{className:"btn btn-primary",onClick:()=>z("projects"),children:"View Projects"}),f.jsx("button",{className:"btn btn-secondary",onClick:()=>z("contact"),children:"Get In Touch"})]}),f.jsxs("div",{className:"hero-tags",children:[f.jsx(Qi,{icon:Ud,children:"Flutter · Dart · Swift · Kotlin"}),f.jsx(Qi,{icon:Yd,children:"Clean Architecture · BLoC · MVVM"}),f.jsx(Qi,{icon:Ch,children:"CI/CD · Fastlane · Firebase"}),f.jsx(Qi,{icon:Bd,children:"Fintech · Enterprise · White-Label"})]}),f.jsxs("div",{className:"stats-grid",children:[f.jsx(Li,{icon:bf,number:"11+",label:"Years Experience"}),f.jsx(Li,{icon:Ud,number:"50+",label:"Apps works"}),f.jsx(Li,{icon:o1,number:"12+",label:"Team Members Led"}),f.jsx(Li,{icon:a1,number:"40%",label:"Faster Releases"})]}),f.jsxs("div",{className:"download-section",style:{marginTop:"3rem",display:"flex",gap:"1rem",justifyContent:"center",flexWrap:"wrap"},children:[f.jsxs("a",{href:"/Abhay_Korat_Lead_Engineer.pdf",download:!0,className:"btn btn-primary",style:{display:"flex",alignItems:"center",gap:"0.5rem"},children:[f.jsx(yf,{size:18})," Download CV"]}),f.jsxs("a",{href:"/Cover_letter_Mobile_Engineer.pdf",download:!0,className:"btn-view",style:{display:"flex",alignItems:"center",gap:"0.5rem"},children:[f.jsx(yf,{size:18})," Download Cover Letter"]})]})]})}),g1=()=>{const z=[{category:"Mobile Development",skills:["Flutter","Dart","Swift","Objective-C","Kotlin","Java","iOS SDK","Android SDK"]},{category:"Architecture & Patterns",skills:["Clean Architecture","MVVM","BLoC/Cubit","Provider","Modular Architecture","Dependency Injection"]},{category:"State Management",skills:["BLoC","Cubit","Provider","Riverpod","GetX"]},{category:"CI/CD & DevOps",skills:["GitLab CI/CD","Fastlane","GitHub Actions","CodeMagic","Firebase App Distribution"]},{category:"Backend & Cloud",skills:["Firebase","REST APIs","GraphQL","Socket.io","Payment Gateways","Local Storage"]},{category:"Tools & Testing",skills:["Jira","Postman","Charles Proxy","XCTest","Flutter Integration Tests"]}];return f.jsxs("div",{className:"page about-page",children:[f.jsxs(Ol,{children:[f.jsx("h2",{className:"section-title",children:"Professional Summary"}),f.jsx("p",{className:"section-text",children:"Results-driven Lead Software Engineer with 11+ years of experience designing and delivering scalable, secure, high-traffic mobile applications in Fintech and Enterprise domains. Expert in Flutter, Dart, Swift, Kotlin, and end-to-end mobile architecture (Clean Architecture, MVVM, BLoC, modularization, dynamic theming, CI/CD). Proven track record leading engineering teams, mentoring developers, establishing coding standards, and driving on-time delivery of complex, multi-platform products."})]}),f.jsxs(Ol,{children:[f.jsx("h2",{className:"section-title",children:"Core Competencies"}),f.jsxs("ul",{className:"feature-list",children:[f.jsx("li",{children:"Architecting scalable mobile platforms supporting high-volume user onboarding and secure payment processing"}),f.jsx("li",{children:"Designing white-label Flutter architectures for multi-brand deployment with dynamic theming and configurations"}),f.jsx("li",{children:"Leading cross-functional teams of 12+ engineers with code reviews, sprint planning, and technical mentorship"}),f.jsx("li",{children:"Implementing CI/CD pipelines reducing release cycles by 40% and improving deployment efficiency"}),f.jsx("li",{children:"Optimizing app performance with 25% size reduction and 35% faster startup times"}),f.jsx("li",{children:"Establishing engineering standards, reusable component libraries, and modular architecture patterns"})]})]}),f.jsxs(Ol,{children:[f.jsx("h2",{className:"section-title",children:"Technical Skills"}),f.jsx("div",{className:"skills-section",children:z.map((j,_)=>f.jsxs("div",{className:"skill-category",children:[f.jsx("h3",{className:"skill-category-title",children:j.category}),f.jsx("div",{className:"skills-grid",children:j.skills.map(m=>f.jsx("div",{className:"skill-tag",children:m},m))})]},_))})]}),f.jsxs(Ol,{children:[f.jsx("h2",{className:"section-title",children:"Domain Expertise"}),f.jsxs("div",{className:"domain-grid",children:[f.jsxs("div",{className:"domain-card",children:[f.jsx(bf,{size:32,className:"domain-icon"}),f.jsx("h3",{children:"Fintech"}),f.jsx("p",{children:"KYC/AML verification, Payment workflows, Secure authentication, Trading platforms"})]}),f.jsxs("div",{className:"domain-card",children:[f.jsx(Bd,{size:32,className:"domain-icon"}),f.jsx("h3",{children:"Enterprise"}),f.jsx("p",{children:"Multi-tenancy, White-label apps, Role-based access, Offline-first architecture"})]}),f.jsxs("div",{className:"domain-card",children:[f.jsx(c1,{size:32,className:"domain-icon"}),f.jsx("h3",{children:"Healthcare & Insurance"}),f.jsx("p",{children:"Real-time data feeds, Health & Fitness, Routine, inventory, Appointments, notifier streaming, High-volume coredata"})]}),f.jsxs("div",{className:"domain-card",children:[f.jsx(Yd,{size:32,className:"domain-icon"}),f.jsx("h3",{children:"High-Performance"}),f.jsx("p",{children:"Real-time data feeds, Socket integration, Market streaming, High-volume transactions"})]})]})]}),f.jsxs(Ol,{children:[f.jsx("h2",{className:"section-title",children:"Education"}),f.jsxs("div",{className:"education-section",children:[f.jsxs("div",{className:"education-item",children:[f.jsx("h3",{children:"Bachelor of Engineering – Computer Science & Engineering"}),f.jsx("p",{className:"education-detail",children:"Dr. Subhash University, Junagadh | 2012 – 2014"})]}),f.jsxs("div",{className:"education-item",children:[f.jsx("h3",{children:"Diploma in Computer Engineering"}),f.jsx("p",{className:"education-detail",children:"R.N.G. Patel Institute of Technology, Bardoli | 2008 – 2011"})]})]})]})]})},p1=()=>{const z=[{company:"Finoux Solutions Private Limited",location:"Mumbai, Maharashtra",role:"Lead Software Engineer",period:"Jul 2024 – Present",achievements:["Architecting next-gen Fintech & Enterprise mobile platforms supporting high-volume user onboarding, KYC/AML verification, and payment processing","Designed white-label Flutter architecture enabling single codebase deployment across multiple brands and environments","Established modular architecture and CI/CD pipelines using GitHub Actions + CodeMagic, reducing release cycles by 40%","Mentoring team of 12+ engineers, conducting code reviews, and driving sprint planning"]},{company:"Sunflower Lab",location:"Vadodara, Gujarat",role:"Senior Flutter Developer",period:"Jun 2022 – May 2024",achievements:["Led development of large-scale Flutter applications using BLoC, Flavors, and clean architecture patterns","Reduced app size by 25% and improved startup time by 35% through performance optimization","Implemented automated CI/CD pipelines with Fastlane and Firebase App Distribution","Mentored junior developers and conducted architecture reviews"]},{company:"Knackit",location:"Bengaluru, Karnataka",role:"Founding Engineer – iOS & Flutter Expert",period:"Sep 2020 – May 2022",achievements:["Built core product from scratch using Flutter and native iOS/Android modules as founding member","Established reusable component library and architecture patterns adopted company-wide","Collaborated with founders to define technical roadmap and prioritize features","Reduced app size by 50+ MB by replacing FFmpeg with native background method channels"]},{company:"CoderKube Technologies",location:"Surat, Gujarat",role:"Team Lead",period:"Apr 2019 – Aug 2020",achievements:["Led end-to-end delivery of multiple client projects with task allocation and quality management","Drove adoption of cross-platform Flutter strategy, reducing duplicate code by 60%","Managed project timelines and coordinated with stakeholders"]},{company:"BlueBell Apps",location:"Copenhagen, Denmark",role:"Mobile Application Developer",period:"Feb 2017 – Mar 2019",achievements:["Contract-based iOS development with continuous integration and delivery","Integrated Bank Verification, dynamic forms UI, multipart data handling","Implemented In-App Purchases, AdMob, and social media authentication"]},{company:"IBL Infotech",location:"Surat, Gujarat",role:"Senior iOS Developer",period:"Apr 2014 – Jan 2017",achievements:["Delivered 15+ production iOS apps using Swift and Objective-C","Integrated VOIP (CallKit), video streaming, and push notifications","Implemented In-App Purchases, AdMob, and Facebook Graph Auth"]}];return f.jsxs("div",{className:"page experience-page",children:[f.jsx("h1",{className:"page-title",children:"Professional Experience"}),f.jsx("div",{className:"timeline",children:z.map((j,_)=>f.jsxs(Ol,{hover:!0,className:"experience-card",children:[f.jsx("div",{className:"experience-header",children:f.jsxs("div",{children:[f.jsx("h3",{className:"experience-role",children:j.role}),f.jsx("h4",{className:"experience-company",children:j.company}),f.jsxs("div",{className:"experience-meta",children:[f.jsxs("span",{className:"experience-location",children:[f.jsx(qd,{size:16}),j.location]}),f.jsx("span",{className:"experience-period",children:j.period})]})]})}),f.jsx("ul",{className:"achievement-list",children:j.achievements.map((m,D)=>f.jsx("li",{children:m},D))})]},_))})]})},y1=()=>{const z=[{title:"XTSApp",description:"Enterprise trading platform with dynamic theming, white-label branding, and real-time market feeds via multiple socket channels.",features:["Buy/Sell engine with portfolio management and watchlist","Real-time order updates with streaming mechanisms","Encrypted local storage + secure session management","Advanced charting and holdings/positions tracking"],tags:["Flutter",".NET","MySQL","Sockets","Firebase","Clean Architecture","BLoC"],link:"https://symphonyfintech.com/xts/"},{title:"BullForce",description:"Comprehensive fintech platform with KYC/AML onboarding, trading capabilities, and payment processing.",features:["Aadhar/PAN/Bank verification for onboarding","UPI/NetBanking/SIP/SWP workflows","Advanced scanners and dynamic market insights","Real-time positions, watchlists, and order book"],tags:["Flutter",".NET","MySQL","Sockets","CI/CD","BLoC","Payment Gateways"],link:"https://bullforce.co"},{title:"Spark - IRISH",description:"Dynamic page rendering engine with multi-platform secure authentication and responsive UI/UX.",features:["Conditional routing with dynamic page rendering","Microsoft Auth + deep link implementation","Single-space UI layout for multiple device form factors","Code obfuscation and platform-specific security hardening"],tags:["Flutter","JavaScript","React","Swift","Kotlin","CI/CD","MVVM","GetX"],link:"https://play.google.com/store/apps/details?id=com.wealthspectrum.app.spark&pcampaignid=web_share"},{title:"AlleyData",description:"Universal health and fitness application with comprehensive data synchronization and offline capabilities.",features:["Health tracking, routine management, and appointments","CoreData synchronization with API responses","Secure session management with notifiers","Universal UI for iPhone and iPad"],tags:["iOS","Swift","CoreData","RxSwift","Coredata","MVVM","CI/CD"],link:"https://alleydata.com/"},{title:"Knackit",description:"Founding member project with wallet, rewards, and multi-language support.",features:["Reduced app size by 50+ MB with native background methods","Wallet, Rewards, Coins, and Transactional modules","Localization for 12 Indian languages","Reusable component library adopted across teams"],tags:["Flutter","Swift","Kotlin","Laravel","MongoDB","CI/CD","Payment Gateways"],highlight:"Founders raised $1.5M funding",link:"https://www.crunchbase.com/organization/knackit"},{title:"Agrimedia",description:"Award-winning application in agriculture sector of India 2019.",features:["News module with dynamic images, videos, and deep links","Multilingual support (Hindi, English, Gujarati)","Q&A module for farmers to post and resolve issues","Analytics pipeline for user interactions"],tags:["Swift","MVC","PHP","MySQL"],highlight:"Award-winning app 2019",link:"https://apps.apple.com/in/app/agrimedia/id1434653553"},{title:"Legacy Vault",description:"Location-based service with real-time tracking and social features.",features:["Dynamic map annotations with Google Maps SDK","Offline location tracking with periodic sync","Google Places API check-in/out system","Real-time chat with Socket.io"],tags:["Flutter","Swift","Kotlin","Java","MySQL","Firebase","CI/CD"],link:"https://www.legacyvaultapp.com"},{title:"Benefact4",description:"Social donation platform with timeline feeds and media sharing.",features:["Donation feed with timeline and multi-layer filters","Widget-based social sharing with screenshot composer","Multipart uploads for media content","Subscription management and analytics tracking"],tags:["Flutter","Java","MySQL","Firebase","CI/CD","Payment Gateways"],link:"https://www.heeythere.com"},{title:"Baby led weaning guide recipes",description:"Social donation platform with timeline feeds and media sharing.",features:["Multi-language localization (DE, FR, EN, IT)","Universal UI for iPhone + iPad","WebKit rendering for WHO nutrition content","In-App Purchases for premium content","Payment processing with Subscription plans (iOS + Android)"],tags:["Swift","Localization","Auto-layout","In-app purchase","WebKit","Alamofire","Coredata"],link:"https://www.babyledrecipes.com/apps.html"}];return f.jsxs("div",{className:"page projects-page",children:[f.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"2rem",flexWrap:"wrap",gap:"1rem"},children:[f.jsx("h1",{className:"page-title",style:{marginBottom:0},children:"Featured Projects"}),f.jsxs("a",{href:"/Portfolio_Abhay_Korat.pdf",download:!0,className:"btn-view",style:{display:"flex",alignItems:"center",gap:"0.5rem"},children:[f.jsx(yf,{size:18})," Download Portfolio"]})]}),f.jsx("div",{className:"projects-grid",children:z.map((j,_)=>f.jsxs(Ol,{hover:!0,className:"project-card",children:[f.jsxs("div",{className:"project-header",children:[f.jsx("div",{className:"project-title-row",children:f.jsx("h3",{className:"project-title",children:j.title})}),j.link&&f.jsxs("a",{href:j.link,target:"_blank",rel:"noopener noreferrer",className:"btn-view",children:["View ",f.jsx(Zh,{size:14})]}),j.highlight&&f.jsxs("span",{className:"project-highlight",children:[f.jsx(bf,{size:16}),j.highlight]})]}),f.jsx("p",{className:"project-description",children:j.description}),f.jsxs("div",{className:"project-features",children:[f.jsx("h4",{children:"Key Features:"}),f.jsx("ul",{children:j.features.map((m,D)=>f.jsx("li",{children:m},D))})]}),f.jsx("div",{className:"project-tags",children:j.tags.map(m=>f.jsx("span",{className:"project-tag",children:m},m))})]},_))})]})},v1=()=>{const[z,j]=Rt.useState({name:"",email:"",mobile:"",message:""}),[_,m]=Rt.useState({type:"",message:""}),[D,R]=Rt.useState(!1),w=async M=>{M.preventDefault(),R(!0),m({type:"",message:""});try{const E=M.target;if((await fetch("https://formsubmit.co/koratabhaym@gmail.com",{method:"POST",body:new FormData(E),headers:{Accept:"application/json"}})).ok)m({type:"success",message:"Message transmitted successfully! I'll reach back through the cosmos soon. 🚀"}),j({name:"",email:"",mobile:"",message:""});else throw new Error("Failed to send")}catch{m({type:"error",message:"Transmission failed. Please use the direct contact links above or try again."})}finally{R(!1)}},rt=M=>{j({...z,[M.target.name]:M.target.value})};return f.jsxs("div",{className:"page contact-page",children:[f.jsx("div",{className:"contact-particles",children:[...Array(20)].map((M,E)=>f.jsx("div",{className:"particle",style:{left:`${Math.random()*100}%`,animationDelay:`${Math.random()*5}s`,animationDuration:`${5+Math.random()*10}s`}},E))}),f.jsx("div",{className:"contact-container",children:f.jsxs("div",{className:"contact-grid",children:[f.jsxs(Ol,{className:"contact-content",children:[f.jsx("div",{className:"neural-network",children:f.jsxs("svg",{viewBox:"0 0 400 400",className:"neural-svg",children:[f.jsx("defs",{children:f.jsxs("linearGradient",{id:"neuralGradient",x1:"0%",y1:"0%",x2:"100%",y2:"100%",children:[f.jsx("stop",{offset:"0%",stopColor:"#06b6d4",stopOpacity:"0.4"}),f.jsx("stop",{offset:"100%",stopColor:"#2563eb",stopOpacity:"0.4"})]})}),f.jsx("circle",{cx:"50",cy:"50",r:"4",fill:"#06b6d4",className:"neural-node"}),f.jsx("circle",{cx:"120",cy:"80",r:"4",fill:"#06b6d4",className:"neural-node"}),f.jsx("circle",{cx:"200",cy:"60",r:"4",fill:"#06b6d4",className:"neural-node"}),f.jsx("circle",{cx:"280",cy:"90",r:"4",fill:"#06b6d4",className:"neural-node"}),f.jsx("circle",{cx:"350",cy:"50",r:"4",fill:"#06b6d4",className:"neural-node"}),f.jsx("line",{x1:"50",y1:"50",x2:"120",y2:"80",stroke:"url(#neuralGradient)",strokeWidth:"1",className:"neural-line"}),f.jsx("line",{x1:"120",y1:"80",x2:"200",y2:"60",stroke:"url(#neuralGradient)",strokeWidth:"1",className:"neural-line"}),f.jsx("line",{x1:"200",y1:"60",x2:"280",y2:"90",stroke:"url(#neuralGradient)",strokeWidth:"1",className:"neural-line"}),f.jsx("line",{x1:"280",y1:"90",x2:"350",y2:"50",stroke:"url(#neuralGradient)",strokeWidth:"1",className:"neural-line"})]})}),f.jsx("h2",{className:"section-title",children:"Get In Touch"}),f.jsxs("div",{className:"contact-info",children:[f.jsxs("div",{className:"contact-item",children:[f.jsx(qd,{size:20}),f.jsx("span",{children:"Surat, Gujarat, India"})]}),f.jsxs("div",{className:"contact-item",children:[f.jsx(l1,{size:20}),f.jsx("a",{href:"tel:+919998529350",children:"+91 9998529350"})]}),f.jsxs("div",{className:"contact-item",children:[f.jsx($h,{size:20}),f.jsx("a",{href:"mailto:koratabhaym@gmail.com",children:"koratabhaym@gmail.com"})]}),f.jsxs("div",{className:"contact-item",children:[f.jsx(kh,{size:20}),f.jsx("a",{href:"https://linkedin.com/in/abhaykorat",target:"_blank",rel:"noopener noreferrer",children:"linkedin.com/in/abhaykorat"})]}),f.jsxs("div",{className:"contact-item",children:[f.jsx(Kh,{size:20}),f.jsx("a",{href:"https://github.com/abhuzz",target:"_blank",rel:"noopener noreferrer",children:"github.com/abhuzz"})]})]}),f.jsxs("form",{className:"contact-form",onSubmit:w,children:[f.jsx("input",{type:"hidden",name:"_subject",value:"New Contact from Portfolio"}),f.jsx("input",{type:"hidden",name:"_captcha",value:"false"}),f.jsx("input",{type:"hidden",name:"_template",value:"table"}),f.jsxs("div",{className:"form-group",children:[f.jsx("label",{htmlFor:"name",children:"Name *"}),f.jsxs("div",{className:"holographic-input-wrapper",children:[f.jsx("input",{id:"name",type:"text",name:"name",value:z.name,onChange:rt,required:!0,placeholder:"Enter your name",disabled:D,className:"holographic-input"}),f.jsx("div",{className:"scan-line"})]})]}),f.jsxs("div",{className:"form-group",children:[f.jsx("label",{htmlFor:"email",children:"Email *"}),f.jsxs("div",{className:"holographic-input-wrapper",children:[f.jsx("input",{id:"email",type:"email",name:"email",value:z.email,onChange:rt,required:!0,placeholder:"your.email@example.com",disabled:D,className:"holographic-input"}),f.jsx("div",{className:"scan-line"})]})]}),f.jsxs("div",{className:"form-group",children:[f.jsx("label",{htmlFor:"mobile",children:"Mobile"}),f.jsxs("div",{className:"holographic-input-wrapper",children:[f.jsx("input",{id:"mobile",type:"tel",name:"mobile",value:z.mobile,onChange:rt,placeholder:"+91-XXXXXXXXXX",disabled:D,className:"holographic-input"}),f.jsx("div",{className:"scan-line"})]})]}),f.jsxs("div",{className:"form-group",children:[f.jsx("label",{htmlFor:"message",children:"Message *"}),f.jsxs("div",{className:"holographic-input-wrapper",children:[f.jsx("textarea",{id:"message",name:"message",value:z.message,onChange:rt,required:!0,rows:5,placeholder:"Your message or project inquiry...",disabled:D,className:"holographic-input"}),f.jsx("div",{className:"scan-line"})]})]}),_.message&&f.jsxs("div",{className:`status-message ${_.type}`,children:[_.type==="success"?f.jsx(wh,{size:20}):f.jsx(Yh,{size:20}),_.message]}),f.jsxs("button",{type:"submit",className:"btn btn-primary cosmic-button",disabled:D||!z.name||!z.email||!z.message,children:[D?f.jsxs(f.Fragment,{children:[f.jsxs("div",{className:"orbital-spinner",children:[f.jsx("div",{className:"orbit"}),f.jsx("div",{className:"orbit"}),f.jsx("div",{className:"orbit"})]}),f.jsx("span",{children:"Transmitting..."})]}):f.jsxs(f.Fragment,{children:[f.jsx(i1,{size:18}),f.jsx("span",{children:"Send Message"})]}),f.jsx("div",{className:"button-glow"})]})]})]}),f.jsx("div",{className:"contact-visual",children:f.jsxs("div",{className:"astronaut-wrapper",children:[f.jsx("img",{src:"/contact_us.png",alt:"Abhay in Space",className:"astronaut-image"}),f.jsx("div",{className:"visual-glow"})]})})]})})]})},pf=10,b1=()=>{const[z,j]=Rt.useState(1),_=Math.ceil(gf.length/pf),m=(z-1)*pf,D=gf.slice(m,m+pf),R=w=>{w>=1&&w<=_&&(j(w),window.scrollTo({top:0,behavior:"smooth"}))};return f.jsxs("div",{className:"page contributions-page",children:[f.jsx("div",{className:"contributions-header",children:f.jsxs("div",{className:"contributions-header-content",children:[f.jsx(Nh,{size:40,className:"contributions-header-icon"}),f.jsxs("div",{children:[f.jsx("h1",{className:"page-title",style:{marginBottom:"0.25rem"},children:"Contribute to Learn as Much as You CAN"}),f.jsx("p",{className:"contributions-subtitle",children:"Curated resources, guides, and insights for continuous learning"})]})]})}),f.jsx("div",{className:"contributions-list",children:D.map(w=>f.jsx("a",{href:w.redirectionLink,target:"_blank",rel:"noopener noreferrer",className:"contribution-card-link",children:f.jsxs(Ol,{hover:!0,className:"contribution-card",children:[f.jsx("div",{className:"contribution-image-wrapper",children:f.jsx("img",{src:`/${w.imageUrl}`,alt:w.title,className:"contribution-image"})}),f.jsxs("div",{className:"contribution-content",children:[f.jsx("div",{className:"contribution-meta",children:f.jsxs("span",{className:"contribution-date",children:[f.jsx(Oh,{size:14}),w.date]})}),f.jsx("h3",{className:"contribution-title",children:w.title}),f.jsx("p",{className:"contribution-card-subtitle",children:w.subtitle}),f.jsx("p",{className:"contribution-description",children:w.description}),f.jsxs("span",{className:"contribution-read-more",children:["Read More ",f.jsx(Eh,{size:16})]})]})]})},w.id))}),_>1&&f.jsxs("div",{className:"pagination-controls",children:[f.jsxs("button",{className:"pagination-btn",onClick:()=>R(z-1),disabled:z===1,children:[f.jsx(Hh,{size:20})," Previous"]}),f.jsxs("span",{className:"pagination-info",children:["Page ",z," of ",_]}),f.jsxs("button",{className:"pagination-btn",onClick:()=>R(z+1),disabled:z===_,children:["Next ",f.jsx(Bh,{size:20})]})]}),_<=1&&gf.length>0&&f.jsx("div",{className:"pagination-controls",children:f.jsx("span",{className:"pagination-info",children:"Page 1 of 1"})})]})},x1=()=>{const[z,j]=Rt.useState("home"),[_,m]=Rt.useState(!1);Rt.useEffect(()=>{window.scrollTo(0,0)},[z]);const D=()=>{switch(z){case"home":return f.jsx(Hd,{setCurrentPage:j});case"about":return f.jsx(g1,{});case"experience":return f.jsx(p1,{});case"projects":return f.jsx(y1,{});case"contributions":return f.jsx(b1,{});case"contact":return f.jsx(v1,{});default:return f.jsx(Hd,{setCurrentPage:j})}};return f.jsxs("div",{className:"app",children:[f.jsx(m1,{}),f.jsx("div",{className:"animated-bg"}),f.jsx(h1,{currentPage:z,setCurrentPage:j,mobileMenuOpen:_,setMobileMenuOpen:m}),f.jsx("main",{className:"main-content",children:D()}),f.jsxs("footer",{className:"footer",children:[f.jsx("p",{children:"© 2026 Abhay Korat. Lead Software Engineer | Mobile Architecture Specialist"}),f.jsx("p",{className:"footer-tagline",children:"Building scalable mobile solutions • Flutter • iOS • Android"})]}),f.jsx("style",{children:`
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

        /* ========== Contributions Page Styles ========== */
        .contributions-page {
          max-width: 900px;
          margin: 0 auto;
        }

        .contributions-header {
          margin-bottom: 2.5rem;
        }

        .contributions-header-content {
          display: flex;
          align-items: center;
          gap: 1.25rem;
        }

        .contributions-header-icon {
          color: #06b6d4;
          flex-shrink: 0;
        }

        .contributions-subtitle {
          color: #94a3b8;
          font-size: 1rem;
          margin-top: 0.25rem;
        }

        .contributions-list {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .contribution-card-link {
          text-decoration: none;
          color: inherit;
          display: block;
        }

        .contribution-card {
          display: flex;
          flex-direction: row;
          overflow: hidden;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .contribution-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 20px 40px rgba(6, 182, 212, 0.15);
          border-color: rgba(6, 182, 212, 0.4);
        }

        .contribution-image-wrapper {
          width: 220px;
          min-width: 220px;
          max-width: 220px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, rgba(6, 182, 212, 0.08), rgba(37, 99, 235, 0.08));
          padding: 1.5rem;
          flex-shrink: 0;
        }

        .contribution-image {
          width: 100%;
          max-width: 140px;
          height: auto;
          object-fit: contain;
          border-radius: 16px;
          filter: drop-shadow(0 4px 12px rgba(0, 0, 0, 0.3));
          transition: transform 0.3s ease;
        }

        .contribution-card:hover .contribution-image {
          transform: scale(1.08);
        }

        .contribution-content {
          flex: 1;
          padding: 1.5rem 1.75rem;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .contribution-meta {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .contribution-date {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          color: #06b6d4;
          font-size: 0.85rem;
          font-weight: 500;
        }

        .contribution-title {
          font-size: 1.35rem;
          font-weight: 700;
          background: linear-gradient(135deg, #e2e8f0, #06b6d4);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin: 0;
        }

        .contribution-card-subtitle {
          font-size: 0.95rem;
          color: #94a3b8;
          font-weight: 500;
          margin: 0;
        }

        .contribution-description {
          font-size: 0.9rem;
          color: #cbd5e1;
          line-height: 1.6;
          margin: 0.25rem 0 0;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .contribution-read-more {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          color: #06b6d4;
          font-size: 0.9rem;
          font-weight: 600;
          margin-top: auto;
          padding-top: 0.5rem;
          transition: gap 0.3s ease, color 0.3s ease;
        }

        .contribution-card:hover .contribution-read-more {
          gap: 0.75rem;
          color: #22d3ee;
        }

        /* Pagination */
        .pagination-controls {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1.5rem;
          margin-top: 2.5rem;
          padding: 1rem;
        }

        .pagination-btn {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          padding: 0.6rem 1.25rem;
          border-radius: 12px;
          border: 1px solid rgba(6, 182, 212, 0.3);
          background: rgba(6, 182, 212, 0.08);
          color: #06b6d4;
          font-size: 0.9rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .pagination-btn:hover:not(:disabled) {
          background: rgba(6, 182, 212, 0.2);
          border-color: rgba(6, 182, 212, 0.5);
          box-shadow: 0 4px 15px rgba(6, 182, 212, 0.15);
        }

        .pagination-btn:disabled {
          opacity: 0.35;
          cursor: not-allowed;
        }

        .pagination-info {
          color: #94a3b8;
          font-size: 0.9rem;
          font-weight: 500;
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

          .contribution-card {
            flex-direction: column !important;
          }

          .contribution-image-wrapper {
            width: 100% !important;
            min-width: unset !important;
            max-width: unset !important;
            height: 200px !important;
          }

          .contribution-content {
            padding: 1.25rem !important;
          }

          .pagination-controls {
            flex-direction: row;
            gap: 0.75rem;
          }
        }
      `})]})};yh.createRoot(document.getElementById("root")).render(f.jsx(Rt.StrictMode,{children:f.jsx(x1,{})}));
