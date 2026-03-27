(function(){const E=document.createElement("link").relList;if(E&&E.supports&&E.supports("modulepreload"))return;for(const D of document.querySelectorAll('link[rel="modulepreload"]'))m(D);new MutationObserver(D=>{for(const B of D)if(B.type==="childList")for(const w of B.addedNodes)w.tagName==="LINK"&&w.rel==="modulepreload"&&m(w)}).observe(document,{childList:!0,subtree:!0});function _(D){const B={};return D.integrity&&(B.integrity=D.integrity),D.referrerPolicy&&(B.referrerPolicy=D.referrerPolicy),D.crossOrigin==="use-credentials"?B.credentials="include":D.crossOrigin==="anonymous"?B.credentials="omit":B.credentials="same-origin",B}function m(D){if(D.ep)return;D.ep=!0;const B=_(D);fetch(D.href,B)}})();var of={exports:{}},zn={};var zd;function sh(){if(zd)return zn;zd=1;var z=Symbol.for("react.transitional.element"),E=Symbol.for("react.fragment");function _(m,D,B){var w=null;if(B!==void 0&&(w=""+B),D.key!==void 0&&(w=""+D.key),"key"in D){B={};for(var at in D)at!=="key"&&(B[at]=D[at])}else B=D;return D=B.ref,{$$typeof:z,type:m,key:w,ref:D!==void 0?D:null,props:B}}return zn.Fragment=E,zn.jsx=_,zn.jsxs=_,zn}var Ad;function rh(){return Ad||(Ad=1,of.exports=sh()),of.exports}var f=rh(),sf={exports:{}},G={};var jd;function dh(){if(jd)return G;jd=1;var z=Symbol.for("react.transitional.element"),E=Symbol.for("react.portal"),_=Symbol.for("react.fragment"),m=Symbol.for("react.strict_mode"),D=Symbol.for("react.profiler"),B=Symbol.for("react.consumer"),w=Symbol.for("react.context"),at=Symbol.for("react.forward_ref"),M=Symbol.for("react.suspense"),A=Symbol.for("react.memo"),Q=Symbol.for("react.lazy"),H=Symbol.for("react.activity"),F=Symbol.iterator;function Ft(r){return r===null||typeof r!="object"?null:(r=F&&r[F]||r["@@iterator"],typeof r=="function"?r:null)}var wt={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Bt=Object.assign,De={};function $t(r,j,N){this.props=r,this.context=j,this.refs=De,this.updater=N||wt}$t.prototype.isReactComponent={},$t.prototype.setState=function(r,j){if(typeof r!="object"&&typeof r!="function"&&r!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,r,j,"setState")},$t.prototype.forceUpdate=function(r){this.updater.enqueueForceUpdate(this,r,"forceUpdate")};function $e(){}$e.prototype=$t.prototype;function Ct(r,j,N){this.props=r,this.context=j,this.refs=De,this.updater=N||wt}var fe=Ct.prototype=new $e;fe.constructor=Ct,Bt(fe,$t.prototype),fe.isPureReactComponent=!0;var Ae=Array.isArray;function Gt(){}var $={H:null,A:null,T:null,S:null},Xt=Object.prototype.hasOwnProperty;function je(r,j,N){var U=N.ref;return{$$typeof:z,type:r,key:j,ref:U!==void 0?U:null,props:N}}function Ql(r,j){return je(r.type,j,r.props)}function Ee(r){return typeof r=="object"&&r!==null&&r.$$typeof===z}function Lt(r){var j={"=":"=0",":":"=2"};return"$"+r.replace(/[=:]/g,function(N){return j[N]})}var Al=/\/+/g;function Ue(r,j){return typeof r=="object"&&r!==null&&r.key!=null?Lt(""+r.key):j.toString(36)}function be(r){switch(r.status){case"fulfilled":return r.value;case"rejected":throw r.reason;default:switch(typeof r.status=="string"?r.then(Gt,Gt):(r.status="pending",r.then(function(j){r.status==="pending"&&(r.status="fulfilled",r.value=j)},function(j){r.status==="pending"&&(r.status="rejected",r.reason=j)})),r.status){case"fulfilled":return r.value;case"rejected":throw r.reason}}throw r}function b(r,j,N,U,X){var V=typeof r;(V==="undefined"||V==="boolean")&&(r=null);var lt=!1;if(r===null)lt=!0;else switch(V){case"bigint":case"string":case"number":lt=!0;break;case"object":switch(r.$$typeof){case z:case E:lt=!0;break;case Q:return lt=r._init,b(lt(r._payload),j,N,U,X)}}if(lt)return X=X(r),lt=U===""?"."+Ue(r,0):U,Ae(X)?(N="",lt!=null&&(N=lt.replace(Al,"$&/")+"/"),b(X,j,N,"",function(_a){return _a})):X!=null&&(Ee(X)&&(X=Ql(X,N+(X.key==null||r&&r.key===X.key?"":(""+X.key).replace(Al,"$&/")+"/")+lt)),j.push(X)),1;lt=0;var qt=U===""?".":U+":";if(Ae(r))for(var vt=0;vt<r.length;vt++)U=r[vt],V=qt+Ue(U,vt),lt+=b(U,j,N,V,X);else if(vt=Ft(r),typeof vt=="function")for(r=vt.call(r),vt=0;!(U=r.next()).done;)U=U.value,V=qt+Ue(U,vt++),lt+=b(U,j,N,V,X);else if(V==="object"){if(typeof r.then=="function")return b(be(r),j,N,U,X);throw j=String(r),Error("Objects are not valid as a React child (found: "+(j==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":j)+"). If you meant to render a collection of children, use an array instead.")}return lt}function T(r,j,N){if(r==null)return r;var U=[],X=0;return b(r,U,"","",function(V){return j.call(N,V,X++)}),U}function Y(r){if(r._status===-1){var j=r._result;j=j(),j.then(function(N){(r._status===0||r._status===-1)&&(r._status=1,r._result=N)},function(N){(r._status===0||r._status===-1)&&(r._status=2,r._result=N)}),r._status===-1&&(r._status=0,r._result=j)}if(r._status===1)return r._result.default;throw r._result}var ut=typeof reportError=="function"?reportError:function(r){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var j=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof r=="object"&&r!==null&&typeof r.message=="string"?String(r.message):String(r),error:r});if(!window.dispatchEvent(j))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",r);return}console.error(r)},st={map:T,forEach:function(r,j,N){T(r,function(){j.apply(this,arguments)},N)},count:function(r){var j=0;return T(r,function(){j++}),j},toArray:function(r){return T(r,function(j){return j})||[]},only:function(r){if(!Ee(r))throw Error("React.Children.only expected to receive a single React element child.");return r}};return G.Activity=H,G.Children=st,G.Component=$t,G.Fragment=_,G.Profiler=D,G.PureComponent=Ct,G.StrictMode=m,G.Suspense=M,G.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=$,G.__COMPILER_RUNTIME={__proto__:null,c:function(r){return $.H.useMemoCache(r)}},G.cache=function(r){return function(){return r.apply(null,arguments)}},G.cacheSignal=function(){return null},G.cloneElement=function(r,j,N){if(r==null)throw Error("The argument must be a React element, but you passed "+r+".");var U=Bt({},r.props),X=r.key;if(j!=null)for(V in j.key!==void 0&&(X=""+j.key),j)!Xt.call(j,V)||V==="key"||V==="__self"||V==="__source"||V==="ref"&&j.ref===void 0||(U[V]=j[V]);var V=arguments.length-2;if(V===1)U.children=N;else if(1<V){for(var lt=Array(V),qt=0;qt<V;qt++)lt[qt]=arguments[qt+2];U.children=lt}return je(r.type,X,U)},G.createContext=function(r){return r={$$typeof:w,_currentValue:r,_currentValue2:r,_threadCount:0,Provider:null,Consumer:null},r.Provider=r,r.Consumer={$$typeof:B,_context:r},r},G.createElement=function(r,j,N){var U,X={},V=null;if(j!=null)for(U in j.key!==void 0&&(V=""+j.key),j)Xt.call(j,U)&&U!=="key"&&U!=="__self"&&U!=="__source"&&(X[U]=j[U]);var lt=arguments.length-2;if(lt===1)X.children=N;else if(1<lt){for(var qt=Array(lt),vt=0;vt<lt;vt++)qt[vt]=arguments[vt+2];X.children=qt}if(r&&r.defaultProps)for(U in lt=r.defaultProps,lt)X[U]===void 0&&(X[U]=lt[U]);return je(r,V,X)},G.createRef=function(){return{current:null}},G.forwardRef=function(r){return{$$typeof:at,render:r}},G.isValidElement=Ee,G.lazy=function(r){return{$$typeof:Q,_payload:{_status:-1,_result:r},_init:Y}},G.memo=function(r,j){return{$$typeof:A,type:r,compare:j===void 0?null:j}},G.startTransition=function(r){var j=$.T,N={};$.T=N;try{var U=r(),X=$.S;X!==null&&X(N,U),typeof U=="object"&&U!==null&&typeof U.then=="function"&&U.then(Gt,ut)}catch(V){ut(V)}finally{j!==null&&N.types!==null&&(j.types=N.types),$.T=j}},G.unstable_useCacheRefresh=function(){return $.H.useCacheRefresh()},G.use=function(r){return $.H.use(r)},G.useActionState=function(r,j,N){return $.H.useActionState(r,j,N)},G.useCallback=function(r,j){return $.H.useCallback(r,j)},G.useContext=function(r){return $.H.useContext(r)},G.useDebugValue=function(){},G.useDeferredValue=function(r,j){return $.H.useDeferredValue(r,j)},G.useEffect=function(r,j){return $.H.useEffect(r,j)},G.useEffectEvent=function(r){return $.H.useEffectEvent(r)},G.useId=function(){return $.H.useId()},G.useImperativeHandle=function(r,j,N){return $.H.useImperativeHandle(r,j,N)},G.useInsertionEffect=function(r,j){return $.H.useInsertionEffect(r,j)},G.useLayoutEffect=function(r,j){return $.H.useLayoutEffect(r,j)},G.useMemo=function(r,j){return $.H.useMemo(r,j)},G.useOptimistic=function(r,j){return $.H.useOptimistic(r,j)},G.useReducer=function(r,j,N){return $.H.useReducer(r,j,N)},G.useRef=function(r){return $.H.useRef(r)},G.useState=function(r){return $.H.useState(r)},G.useSyncExternalStore=function(r,j,N){return $.H.useSyncExternalStore(r,j,N)},G.useTransition=function(){return $.H.useTransition()},G.version="19.2.3",G}var Ed;function vf(){return Ed||(Ed=1,sf.exports=dh()),sf.exports}var Rt=vf(),rf={exports:{}},An={},df={exports:{}},mf={};var Td;function mh(){return Td||(Td=1,(function(z){function E(b,T){var Y=b.length;b.push(T);t:for(;0<Y;){var ut=Y-1>>>1,st=b[ut];if(0<D(st,T))b[ut]=T,b[Y]=st,Y=ut;else break t}}function _(b){return b.length===0?null:b[0]}function m(b){if(b.length===0)return null;var T=b[0],Y=b.pop();if(Y!==T){b[0]=Y;t:for(var ut=0,st=b.length,r=st>>>1;ut<r;){var j=2*(ut+1)-1,N=b[j],U=j+1,X=b[U];if(0>D(N,Y))U<st&&0>D(X,N)?(b[ut]=X,b[U]=Y,ut=U):(b[ut]=N,b[j]=Y,ut=j);else if(U<st&&0>D(X,Y))b[ut]=X,b[U]=Y,ut=U;else break t}}return T}function D(b,T){var Y=b.sortIndex-T.sortIndex;return Y!==0?Y:b.id-T.id}if(z.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var B=performance;z.unstable_now=function(){return B.now()}}else{var w=Date,at=w.now();z.unstable_now=function(){return w.now()-at}}var M=[],A=[],Q=1,H=null,F=3,Ft=!1,wt=!1,Bt=!1,De=!1,$t=typeof setTimeout=="function"?setTimeout:null,$e=typeof clearTimeout=="function"?clearTimeout:null,Ct=typeof setImmediate<"u"?setImmediate:null;function fe(b){for(var T=_(A);T!==null;){if(T.callback===null)m(A);else if(T.startTime<=b)m(A),T.sortIndex=T.expirationTime,E(M,T);else break;T=_(A)}}function Ae(b){if(Bt=!1,fe(b),!wt)if(_(M)!==null)wt=!0,Gt||(Gt=!0,Lt());else{var T=_(A);T!==null&&be(Ae,T.startTime-b)}}var Gt=!1,$=-1,Xt=5,je=-1;function Ql(){return De?!0:!(z.unstable_now()-je<Xt)}function Ee(){if(De=!1,Gt){var b=z.unstable_now();je=b;var T=!0;try{t:{wt=!1,Bt&&(Bt=!1,$e($),$=-1),Ft=!0;var Y=F;try{e:{for(fe(b),H=_(M);H!==null&&!(H.expirationTime>b&&Ql());){var ut=H.callback;if(typeof ut=="function"){H.callback=null,F=H.priorityLevel;var st=ut(H.expirationTime<=b);if(b=z.unstable_now(),typeof st=="function"){H.callback=st,fe(b),T=!0;break e}H===_(M)&&m(M),fe(b)}else m(M);H=_(M)}if(H!==null)T=!0;else{var r=_(A);r!==null&&be(Ae,r.startTime-b),T=!1}}break t}finally{H=null,F=Y,Ft=!1}T=void 0}}finally{T?Lt():Gt=!1}}}var Lt;if(typeof Ct=="function")Lt=function(){Ct(Ee)};else if(typeof MessageChannel<"u"){var Al=new MessageChannel,Ue=Al.port2;Al.port1.onmessage=Ee,Lt=function(){Ue.postMessage(null)}}else Lt=function(){$t(Ee,0)};function be(b,T){$=$t(function(){b(z.unstable_now())},T)}z.unstable_IdlePriority=5,z.unstable_ImmediatePriority=1,z.unstable_LowPriority=4,z.unstable_NormalPriority=3,z.unstable_Profiling=null,z.unstable_UserBlockingPriority=2,z.unstable_cancelCallback=function(b){b.callback=null},z.unstable_forceFrameRate=function(b){0>b||125<b?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Xt=0<b?Math.floor(1e3/b):5},z.unstable_getCurrentPriorityLevel=function(){return F},z.unstable_next=function(b){switch(F){case 1:case 2:case 3:var T=3;break;default:T=F}var Y=F;F=T;try{return b()}finally{F=Y}},z.unstable_requestPaint=function(){De=!0},z.unstable_runWithPriority=function(b,T){switch(b){case 1:case 2:case 3:case 4:case 5:break;default:b=3}var Y=F;F=b;try{return T()}finally{F=Y}},z.unstable_scheduleCallback=function(b,T,Y){var ut=z.unstable_now();switch(typeof Y=="object"&&Y!==null?(Y=Y.delay,Y=typeof Y=="number"&&0<Y?ut+Y:ut):Y=ut,b){case 1:var st=-1;break;case 2:st=250;break;case 5:st=1073741823;break;case 4:st=1e4;break;default:st=5e3}return st=Y+st,b={id:Q++,callback:T,priorityLevel:b,startTime:Y,expirationTime:st,sortIndex:-1},Y>ut?(b.sortIndex=Y,E(A,b),_(M)===null&&b===_(A)&&(Bt?($e($),$=-1):Bt=!0,be(Ae,Y-ut))):(b.sortIndex=st,E(M,b),wt||Ft||(wt=!0,Gt||(Gt=!0,Lt()))),b},z.unstable_shouldYield=Ql,z.unstable_wrapCallback=function(b){var T=F;return function(){var Y=F;F=T;try{return b.apply(this,arguments)}finally{F=Y}}}})(mf)),mf}var Nd;function hh(){return Nd||(Nd=1,df.exports=mh()),df.exports}var hf={exports:{}},Ht={};var _d;function gh(){if(_d)return Ht;_d=1;var z=vf();function E(M){var A="https://react.dev/errors/"+M;if(1<arguments.length){A+="?args[]="+encodeURIComponent(arguments[1]);for(var Q=2;Q<arguments.length;Q++)A+="&args[]="+encodeURIComponent(arguments[Q])}return"Minified React error #"+M+"; visit "+A+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function _(){}var m={d:{f:_,r:function(){throw Error(E(522))},D:_,C:_,L:_,m:_,X:_,S:_,M:_},p:0,findDOMNode:null},D=Symbol.for("react.portal");function B(M,A,Q){var H=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:D,key:H==null?null:""+H,children:M,containerInfo:A,implementation:Q}}var w=z.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function at(M,A){if(M==="font")return"";if(typeof A=="string")return A==="use-credentials"?A:""}return Ht.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=m,Ht.createPortal=function(M,A){var Q=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!A||A.nodeType!==1&&A.nodeType!==9&&A.nodeType!==11)throw Error(E(299));return B(M,A,null,Q)},Ht.flushSync=function(M){var A=w.T,Q=m.p;try{if(w.T=null,m.p=2,M)return M()}finally{w.T=A,m.p=Q,m.d.f()}},Ht.preconnect=function(M,A){typeof M=="string"&&(A?(A=A.crossOrigin,A=typeof A=="string"?A==="use-credentials"?A:"":void 0):A=null,m.d.C(M,A))},Ht.prefetchDNS=function(M){typeof M=="string"&&m.d.D(M)},Ht.preinit=function(M,A){if(typeof M=="string"&&A&&typeof A.as=="string"){var Q=A.as,H=at(Q,A.crossOrigin),F=typeof A.integrity=="string"?A.integrity:void 0,Ft=typeof A.fetchPriority=="string"?A.fetchPriority:void 0;Q==="style"?m.d.S(M,typeof A.precedence=="string"?A.precedence:void 0,{crossOrigin:H,integrity:F,fetchPriority:Ft}):Q==="script"&&m.d.X(M,{crossOrigin:H,integrity:F,fetchPriority:Ft,nonce:typeof A.nonce=="string"?A.nonce:void 0})}},Ht.preinitModule=function(M,A){if(typeof M=="string")if(typeof A=="object"&&A!==null){if(A.as==null||A.as==="script"){var Q=at(A.as,A.crossOrigin);m.d.M(M,{crossOrigin:Q,integrity:typeof A.integrity=="string"?A.integrity:void 0,nonce:typeof A.nonce=="string"?A.nonce:void 0})}}else A==null&&m.d.M(M)},Ht.preload=function(M,A){if(typeof M=="string"&&typeof A=="object"&&A!==null&&typeof A.as=="string"){var Q=A.as,H=at(Q,A.crossOrigin);m.d.L(M,Q,{crossOrigin:H,integrity:typeof A.integrity=="string"?A.integrity:void 0,nonce:typeof A.nonce=="string"?A.nonce:void 0,type:typeof A.type=="string"?A.type:void 0,fetchPriority:typeof A.fetchPriority=="string"?A.fetchPriority:void 0,referrerPolicy:typeof A.referrerPolicy=="string"?A.referrerPolicy:void 0,imageSrcSet:typeof A.imageSrcSet=="string"?A.imageSrcSet:void 0,imageSizes:typeof A.imageSizes=="string"?A.imageSizes:void 0,media:typeof A.media=="string"?A.media:void 0})}},Ht.preloadModule=function(M,A){if(typeof M=="string")if(A){var Q=at(A.as,A.crossOrigin);m.d.m(M,{as:typeof A.as=="string"&&A.as!=="script"?A.as:void 0,crossOrigin:Q,integrity:typeof A.integrity=="string"?A.integrity:void 0})}else m.d.m(M)},Ht.requestFormReset=function(M){m.d.r(M)},Ht.unstable_batchedUpdates=function(M,A){return M(A)},Ht.useFormState=function(M,A,Q){return w.H.useFormState(M,A,Q)},Ht.useFormStatus=function(){return w.H.useHostTransitionStatus()},Ht.version="19.2.3",Ht}var Md;function ph(){if(Md)return hf.exports;Md=1;function z(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(z)}catch(E){console.error(E)}}return z(),hf.exports=gh(),hf.exports}var Od;function yh(){if(Od)return An;Od=1;var z=hh(),E=vf(),_=ph();function m(t){var e="https://react.dev/errors/"+t;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var l=2;l<arguments.length;l++)e+="&args[]="+encodeURIComponent(arguments[l])}return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function D(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function B(t){var e=t,l=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,(e.flags&4098)!==0&&(l=e.return),t=e.return;while(t)}return e.tag===3?l:null}function w(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function at(t){if(t.tag===31){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function M(t){if(B(t)!==t)throw Error(m(188))}function A(t){var e=t.alternate;if(!e){if(e=B(t),e===null)throw Error(m(188));return e!==t?null:t}for(var l=t,a=e;;){var n=l.return;if(n===null)break;var i=n.alternate;if(i===null){if(a=n.return,a!==null){l=a;continue}break}if(n.child===i.child){for(i=n.child;i;){if(i===l)return M(n),t;if(i===a)return M(n),e;i=i.sibling}throw Error(m(188))}if(l.return!==a.return)l=n,a=i;else{for(var u=!1,c=n.child;c;){if(c===l){u=!0,l=n,a=i;break}if(c===a){u=!0,a=n,l=i;break}c=c.sibling}if(!u){for(c=i.child;c;){if(c===l){u=!0,l=i,a=n;break}if(c===a){u=!0,a=i,l=n;break}c=c.sibling}if(!u)throw Error(m(189))}}if(l.alternate!==a)throw Error(m(190))}if(l.tag!==3)throw Error(m(188));return l.stateNode.current===l?t:e}function Q(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t;for(t=t.child;t!==null;){if(e=Q(t),e!==null)return e;t=t.sibling}return null}var H=Object.assign,F=Symbol.for("react.element"),Ft=Symbol.for("react.transitional.element"),wt=Symbol.for("react.portal"),Bt=Symbol.for("react.fragment"),De=Symbol.for("react.strict_mode"),$t=Symbol.for("react.profiler"),$e=Symbol.for("react.consumer"),Ct=Symbol.for("react.context"),fe=Symbol.for("react.forward_ref"),Ae=Symbol.for("react.suspense"),Gt=Symbol.for("react.suspense_list"),$=Symbol.for("react.memo"),Xt=Symbol.for("react.lazy"),je=Symbol.for("react.activity"),Ql=Symbol.for("react.memo_cache_sentinel"),Ee=Symbol.iterator;function Lt(t){return t===null||typeof t!="object"?null:(t=Ee&&t[Ee]||t["@@iterator"],typeof t=="function"?t:null)}var Al=Symbol.for("react.client.reference");function Ue(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===Al?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Bt:return"Fragment";case $t:return"Profiler";case De:return"StrictMode";case Ae:return"Suspense";case Gt:return"SuspenseList";case je:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case wt:return"Portal";case Ct:return t.displayName||"Context";case $e:return(t._context.displayName||"Context")+".Consumer";case fe:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case $:return e=t.displayName||null,e!==null?e:Ue(t.type)||"Memo";case Xt:e=t._payload,t=t._init;try{return Ue(t(e))}catch{}}return null}var be=Array.isArray,b=E.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,T=_.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Y={pending:!1,data:null,method:null,action:null},ut=[],st=-1;function r(t){return{current:t}}function j(t){0>st||(t.current=ut[st],ut[st]=null,st--)}function N(t,e){st++,ut[st]=t.current,t.current=e}var U=r(null),X=r(null),V=r(null),lt=r(null);function qt(t,e){switch(N(V,e),N(X,t),N(U,null),e.nodeType){case 9:case 11:t=(t=e.documentElement)&&(t=t.namespaceURI)?Vr(t):0;break;default:if(t=e.tagName,e=e.namespaceURI)e=Vr(e),t=Kr(e,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}j(U),N(U,t)}function vt(){j(U),j(X),j(V)}function _a(t){t.memoizedState!==null&&N(lt,t);var e=U.current,l=Kr(e,t.type);e!==l&&(N(X,t),N(U,l))}function jn(t){X.current===t&&(j(U),j(X)),lt.current===t&&(j(lt),vn._currentValue=Y)}var Zi,xf;function jl(t){if(Zi===void 0)try{throw Error()}catch(l){var e=l.stack.trim().match(/\n( *(at )?)/);Zi=e&&e[1]||"",xf=-1<l.stack.indexOf(`
    at`)?" (<anonymous>)":-1<l.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Zi+t+xf}var Vi=!1;function Ki(t,e){if(!t||Vi)return"";Vi=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var a={DetermineComponentFrameRoot:function(){try{if(e){var S=function(){throw Error()};if(Object.defineProperty(S.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(S,[])}catch(y){var p=y}Reflect.construct(t,[],S)}else{try{S.call()}catch(y){p=y}t.call(S.prototype)}}else{try{throw Error()}catch(y){p=y}(S=t())&&typeof S.catch=="function"&&S.catch(function(){})}}catch(y){if(y&&p&&typeof y.stack=="string")return[y.stack,p.stack]}return[null,null]}};a.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var n=Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot,"name");n&&n.configurable&&Object.defineProperty(a.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var i=a.DetermineComponentFrameRoot(),u=i[0],c=i[1];if(u&&c){var o=u.split(`
`),g=c.split(`
`);for(n=a=0;a<o.length&&!o[a].includes("DetermineComponentFrameRoot");)a++;for(;n<g.length&&!g[n].includes("DetermineComponentFrameRoot");)n++;if(a===o.length||n===g.length)for(a=o.length-1,n=g.length-1;1<=a&&0<=n&&o[a]!==g[n];)n--;for(;1<=a&&0<=n;a--,n--)if(o[a]!==g[n]){if(a!==1||n!==1)do if(a--,n--,0>n||o[a]!==g[n]){var v=`
`+o[a].replace(" at new "," at ");return t.displayName&&v.includes("<anonymous>")&&(v=v.replace("<anonymous>",t.displayName)),v}while(1<=a&&0<=n);break}}}finally{Vi=!1,Error.prepareStackTrace=l}return(l=t?t.displayName||t.name:"")?jl(l):""}function Xd(t,e){switch(t.tag){case 26:case 27:case 5:return jl(t.type);case 16:return jl("Lazy");case 13:return t.child!==e&&e!==null?jl("Suspense Fallback"):jl("Suspense");case 19:return jl("SuspenseList");case 0:case 15:return Ki(t.type,!1);case 11:return Ki(t.type.render,!1);case 1:return Ki(t.type,!0);case 31:return jl("Activity");default:return""}}function Sf(t){try{var e="",l=null;do e+=Xd(t,l),l=t,t=t.return;while(t);return e}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}var ki=Object.prototype.hasOwnProperty,Ji=z.unstable_scheduleCallback,Wi=z.unstable_cancelCallback,Ld=z.unstable_shouldYield,Qd=z.unstable_requestPaint,It=z.unstable_now,Zd=z.unstable_getCurrentPriorityLevel,zf=z.unstable_ImmediatePriority,Af=z.unstable_UserBlockingPriority,En=z.unstable_NormalPriority,Vd=z.unstable_LowPriority,jf=z.unstable_IdlePriority,Kd=z.log,kd=z.unstable_setDisableYieldValue,Ma=null,Pt=null;function Ie(t){if(typeof Kd=="function"&&kd(t),Pt&&typeof Pt.setStrictMode=="function")try{Pt.setStrictMode(Ma,t)}catch{}}var te=Math.clz32?Math.clz32:Fd,Jd=Math.log,Wd=Math.LN2;function Fd(t){return t>>>=0,t===0?32:31-(Jd(t)/Wd|0)|0}var Tn=256,Nn=262144,_n=4194304;function El(t){var e=t&42;if(e!==0)return e;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function Mn(t,e,l){var a=t.pendingLanes;if(a===0)return 0;var n=0,i=t.suspendedLanes,u=t.pingedLanes;t=t.warmLanes;var c=a&134217727;return c!==0?(a=c&~i,a!==0?n=El(a):(u&=c,u!==0?n=El(u):l||(l=c&~t,l!==0&&(n=El(l))))):(c=a&~i,c!==0?n=El(c):u!==0?n=El(u):l||(l=a&~t,l!==0&&(n=El(l)))),n===0?0:e!==0&&e!==n&&(e&i)===0&&(i=n&-n,l=e&-e,i>=l||i===32&&(l&4194048)!==0)?e:n}function Oa(t,e){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&e)===0}function $d(t,e){switch(t){case 1:case 2:case 4:case 8:case 64:return e+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ef(){var t=_n;return _n<<=1,(_n&62914560)===0&&(_n=4194304),t}function Fi(t){for(var e=[],l=0;31>l;l++)e.push(t);return e}function Da(t,e){t.pendingLanes|=e,e!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Id(t,e,l,a,n,i){var u=t.pendingLanes;t.pendingLanes=l,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=l,t.entangledLanes&=l,t.errorRecoveryDisabledLanes&=l,t.shellSuspendCounter=0;var c=t.entanglements,o=t.expirationTimes,g=t.hiddenUpdates;for(l=u&~l;0<l;){var v=31-te(l),S=1<<v;c[v]=0,o[v]=-1;var p=g[v];if(p!==null)for(g[v]=null,v=0;v<p.length;v++){var y=p[v];y!==null&&(y.lane&=-536870913)}l&=~S}a!==0&&Tf(t,a,0),i!==0&&n===0&&t.tag!==0&&(t.suspendedLanes|=i&~(u&~e))}function Tf(t,e,l){t.pendingLanes|=e,t.suspendedLanes&=~e;var a=31-te(e);t.entangledLanes|=e,t.entanglements[a]=t.entanglements[a]|1073741824|l&261930}function Nf(t,e){var l=t.entangledLanes|=e;for(t=t.entanglements;l;){var a=31-te(l),n=1<<a;n&e|t[a]&e&&(t[a]|=e),l&=~n}}function _f(t,e){var l=e&-e;return l=(l&42)!==0?1:$i(l),(l&(t.suspendedLanes|e))!==0?0:l}function $i(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Ii(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Mf(){var t=T.p;return t!==0?t:(t=window.event,t===void 0?32:gd(t.type))}function Of(t,e){var l=T.p;try{return T.p=t,e()}finally{T.p=l}}var Pe=Math.random().toString(36).slice(2),_t="__reactFiber$"+Pe,Qt="__reactProps$"+Pe,Zl="__reactContainer$"+Pe,Pi="__reactEvents$"+Pe,Pd="__reactListeners$"+Pe,t0="__reactHandles$"+Pe,Df="__reactResources$"+Pe,Ua="__reactMarker$"+Pe;function tu(t){delete t[_t],delete t[Qt],delete t[Pi],delete t[Pd],delete t[t0]}function Vl(t){var e=t[_t];if(e)return e;for(var l=t.parentNode;l;){if(e=l[Zl]||l[_t]){if(l=e.alternate,e.child!==null||l!==null&&l.child!==null)for(t=Pr(t);t!==null;){if(l=t[_t])return l;t=Pr(t)}return e}t=l,l=t.parentNode}return null}function Kl(t){if(t=t[_t]||t[Zl]){var e=t.tag;if(e===5||e===6||e===13||e===31||e===26||e===27||e===3)return t}return null}function Ca(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t.stateNode;throw Error(m(33))}function kl(t){var e=t[Df];return e||(e=t[Df]={hoistableStyles:new Map,hoistableScripts:new Map}),e}function Tt(t){t[Ua]=!0}var Uf=new Set,Cf={};function Tl(t,e){Jl(t,e),Jl(t+"Capture",e)}function Jl(t,e){for(Cf[t]=e,t=0;t<e.length;t++)Uf.add(e[t])}var e0=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Hf={},Rf={};function l0(t){return ki.call(Rf,t)?!0:ki.call(Hf,t)?!1:e0.test(t)?Rf[t]=!0:(Hf[t]=!0,!1)}function On(t,e,l){if(l0(e))if(l===null)t.removeAttribute(e);else{switch(typeof l){case"undefined":case"function":case"symbol":t.removeAttribute(e);return;case"boolean":var a=e.toLowerCase().slice(0,5);if(a!=="data-"&&a!=="aria-"){t.removeAttribute(e);return}}t.setAttribute(e,""+l)}}function Dn(t,e,l){if(l===null)t.removeAttribute(e);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(e);return}t.setAttribute(e,""+l)}}function Ce(t,e,l,a){if(a===null)t.removeAttribute(l);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(l);return}t.setAttributeNS(e,l,""+a)}}function oe(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Bf(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function a0(t,e,l){var a=Object.getOwnPropertyDescriptor(t.constructor.prototype,e);if(!t.hasOwnProperty(e)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var n=a.get,i=a.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return n.call(this)},set:function(u){l=""+u,i.call(this,u)}}),Object.defineProperty(t,e,{enumerable:a.enumerable}),{getValue:function(){return l},setValue:function(u){l=""+u},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function eu(t){if(!t._valueTracker){var e=Bf(t)?"checked":"value";t._valueTracker=a0(t,e,""+t[e])}}function qf(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var l=e.getValue(),a="";return t&&(a=Bf(t)?t.checked?"true":"false":t.value),t=a,t!==l?(e.setValue(t),!0):!1}function Un(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var n0=/[\n"\\]/g;function se(t){return t.replace(n0,function(e){return"\\"+e.charCodeAt(0).toString(16)+" "})}function lu(t,e,l,a,n,i,u,c){t.name="",u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"?t.type=u:t.removeAttribute("type"),e!=null?u==="number"?(e===0&&t.value===""||t.value!=e)&&(t.value=""+oe(e)):t.value!==""+oe(e)&&(t.value=""+oe(e)):u!=="submit"&&u!=="reset"||t.removeAttribute("value"),e!=null?au(t,u,oe(e)):l!=null?au(t,u,oe(l)):a!=null&&t.removeAttribute("value"),n==null&&i!=null&&(t.defaultChecked=!!i),n!=null&&(t.checked=n&&typeof n!="function"&&typeof n!="symbol"),c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"?t.name=""+oe(c):t.removeAttribute("name")}function Yf(t,e,l,a,n,i,u,c){if(i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(t.type=i),e!=null||l!=null){if(!(i!=="submit"&&i!=="reset"||e!=null)){eu(t);return}l=l!=null?""+oe(l):"",e=e!=null?""+oe(e):l,c||e===t.value||(t.value=e),t.defaultValue=e}a=a??n,a=typeof a!="function"&&typeof a!="symbol"&&!!a,t.checked=c?t.checked:!!a,t.defaultChecked=!!a,u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"&&(t.name=u),eu(t)}function au(t,e,l){e==="number"&&Un(t.ownerDocument)===t||t.defaultValue===""+l||(t.defaultValue=""+l)}function Wl(t,e,l,a){if(t=t.options,e){e={};for(var n=0;n<l.length;n++)e["$"+l[n]]=!0;for(l=0;l<t.length;l++)n=e.hasOwnProperty("$"+t[l].value),t[l].selected!==n&&(t[l].selected=n),n&&a&&(t[l].defaultSelected=!0)}else{for(l=""+oe(l),e=null,n=0;n<t.length;n++){if(t[n].value===l){t[n].selected=!0,a&&(t[n].defaultSelected=!0);return}e!==null||t[n].disabled||(e=t[n])}e!==null&&(e.selected=!0)}}function wf(t,e,l){if(e!=null&&(e=""+oe(e),e!==t.value&&(t.value=e),l==null)){t.defaultValue!==e&&(t.defaultValue=e);return}t.defaultValue=l!=null?""+oe(l):""}function Gf(t,e,l,a){if(e==null){if(a!=null){if(l!=null)throw Error(m(92));if(be(a)){if(1<a.length)throw Error(m(93));a=a[0]}l=a}l==null&&(l=""),e=l}l=oe(e),t.defaultValue=l,a=t.textContent,a===l&&a!==""&&a!==null&&(t.value=a),eu(t)}function Fl(t,e){if(e){var l=t.firstChild;if(l&&l===t.lastChild&&l.nodeType===3){l.nodeValue=e;return}}t.textContent=e}var i0=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Xf(t,e,l){var a=e.indexOf("--")===0;l==null||typeof l=="boolean"||l===""?a?t.setProperty(e,""):e==="float"?t.cssFloat="":t[e]="":a?t.setProperty(e,l):typeof l!="number"||l===0||i0.has(e)?e==="float"?t.cssFloat=l:t[e]=(""+l).trim():t[e]=l+"px"}function Lf(t,e,l){if(e!=null&&typeof e!="object")throw Error(m(62));if(t=t.style,l!=null){for(var a in l)!l.hasOwnProperty(a)||e!=null&&e.hasOwnProperty(a)||(a.indexOf("--")===0?t.setProperty(a,""):a==="float"?t.cssFloat="":t[a]="");for(var n in e)a=e[n],e.hasOwnProperty(n)&&l[n]!==a&&Xf(t,n,a)}else for(var i in e)e.hasOwnProperty(i)&&Xf(t,i,e[i])}function nu(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var u0=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),c0=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Cn(t){return c0.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function He(){}var iu=null;function uu(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var $l=null,Il=null;function Qf(t){var e=Kl(t);if(e&&(t=e.stateNode)){var l=t[Qt]||null;t:switch(t=e.stateNode,e.type){case"input":if(lu(t,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name),e=l.name,l.type==="radio"&&e!=null){for(l=t;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll('input[name="'+se(""+e)+'"][type="radio"]'),e=0;e<l.length;e++){var a=l[e];if(a!==t&&a.form===t.form){var n=a[Qt]||null;if(!n)throw Error(m(90));lu(a,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name)}}for(e=0;e<l.length;e++)a=l[e],a.form===t.form&&qf(a)}break t;case"textarea":wf(t,l.value,l.defaultValue);break t;case"select":e=l.value,e!=null&&Wl(t,!!l.multiple,e,!1)}}}var cu=!1;function Zf(t,e,l){if(cu)return t(e,l);cu=!0;try{var a=t(e);return a}finally{if(cu=!1,($l!==null||Il!==null)&&(xi(),$l&&(e=$l,t=Il,Il=$l=null,Qf(e),t)))for(e=0;e<t.length;e++)Qf(t[e])}}function Ha(t,e){var l=t.stateNode;if(l===null)return null;var a=l[Qt]||null;if(a===null)return null;l=a[e];t:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(t=t.type,a=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!a;break t;default:t=!1}if(t)return null;if(l&&typeof l!="function")throw Error(m(231,e,typeof l));return l}var Re=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),fu=!1;if(Re)try{var Ra={};Object.defineProperty(Ra,"passive",{get:function(){fu=!0}}),window.addEventListener("test",Ra,Ra),window.removeEventListener("test",Ra,Ra)}catch{fu=!1}var tl=null,ou=null,Hn=null;function Vf(){if(Hn)return Hn;var t,e=ou,l=e.length,a,n="value"in tl?tl.value:tl.textContent,i=n.length;for(t=0;t<l&&e[t]===n[t];t++);var u=l-t;for(a=1;a<=u&&e[l-a]===n[i-a];a++);return Hn=n.slice(t,1<a?1-a:void 0)}function Rn(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Bn(){return!0}function Kf(){return!1}function Zt(t){function e(l,a,n,i,u){this._reactName=l,this._targetInst=n,this.type=a,this.nativeEvent=i,this.target=u,this.currentTarget=null;for(var c in t)t.hasOwnProperty(c)&&(l=t[c],this[c]=l?l(i):i[c]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Bn:Kf,this.isPropagationStopped=Kf,this}return H(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=Bn)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=Bn)},persist:function(){},isPersistent:Bn}),e}var Nl={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},qn=Zt(Nl),Ba=H({},Nl,{view:0,detail:0}),f0=Zt(Ba),su,ru,qa,Yn=H({},Ba,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:mu,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==qa&&(qa&&t.type==="mousemove"?(su=t.screenX-qa.screenX,ru=t.screenY-qa.screenY):ru=su=0,qa=t),su)},movementY:function(t){return"movementY"in t?t.movementY:ru}}),kf=Zt(Yn),o0=H({},Yn,{dataTransfer:0}),s0=Zt(o0),r0=H({},Ba,{relatedTarget:0}),du=Zt(r0),d0=H({},Nl,{animationName:0,elapsedTime:0,pseudoElement:0}),m0=Zt(d0),h0=H({},Nl,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),g0=Zt(h0),p0=H({},Nl,{data:0}),Jf=Zt(p0),y0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},v0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},b0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function x0(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=b0[t])?!!e[t]:!1}function mu(){return x0}var S0=H({},Ba,{key:function(t){if(t.key){var e=y0[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Rn(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?v0[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:mu,charCode:function(t){return t.type==="keypress"?Rn(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Rn(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),z0=Zt(S0),A0=H({},Yn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Wf=Zt(A0),j0=H({},Ba,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:mu}),E0=Zt(j0),T0=H({},Nl,{propertyName:0,elapsedTime:0,pseudoElement:0}),N0=Zt(T0),_0=H({},Yn,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),M0=Zt(_0),O0=H({},Nl,{newState:0,oldState:0}),D0=Zt(O0),U0=[9,13,27,32],hu=Re&&"CompositionEvent"in window,Ya=null;Re&&"documentMode"in document&&(Ya=document.documentMode);var C0=Re&&"TextEvent"in window&&!Ya,Ff=Re&&(!hu||Ya&&8<Ya&&11>=Ya),$f=" ",If=!1;function Pf(t,e){switch(t){case"keyup":return U0.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function to(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Pl=!1;function H0(t,e){switch(t){case"compositionend":return to(e);case"keypress":return e.which!==32?null:(If=!0,$f);case"textInput":return t=e.data,t===$f&&If?null:t;default:return null}}function R0(t,e){if(Pl)return t==="compositionend"||!hu&&Pf(t,e)?(t=Vf(),Hn=ou=tl=null,Pl=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Ff&&e.locale!=="ko"?null:e.data;default:return null}}var B0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function eo(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!B0[t.type]:e==="textarea"}function lo(t,e,l,a){$l?Il?Il.push(a):Il=[a]:$l=a,e=Ni(e,"onChange"),0<e.length&&(l=new qn("onChange","change",null,l,a),t.push({event:l,listeners:e}))}var wa=null,Ga=null;function q0(t){wr(t,0)}function wn(t){var e=Ca(t);if(qf(e))return t}function ao(t,e){if(t==="change")return e}var no=!1;if(Re){var gu;if(Re){var pu="oninput"in document;if(!pu){var io=document.createElement("div");io.setAttribute("oninput","return;"),pu=typeof io.oninput=="function"}gu=pu}else gu=!1;no=gu&&(!document.documentMode||9<document.documentMode)}function uo(){wa&&(wa.detachEvent("onpropertychange",co),Ga=wa=null)}function co(t){if(t.propertyName==="value"&&wn(Ga)){var e=[];lo(e,Ga,t,uu(t)),Zf(q0,e)}}function Y0(t,e,l){t==="focusin"?(uo(),wa=e,Ga=l,wa.attachEvent("onpropertychange",co)):t==="focusout"&&uo()}function w0(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return wn(Ga)}function G0(t,e){if(t==="click")return wn(e)}function X0(t,e){if(t==="input"||t==="change")return wn(e)}function L0(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var ee=typeof Object.is=="function"?Object.is:L0;function Xa(t,e){if(ee(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var l=Object.keys(t),a=Object.keys(e);if(l.length!==a.length)return!1;for(a=0;a<l.length;a++){var n=l[a];if(!ki.call(e,n)||!ee(t[n],e[n]))return!1}return!0}function fo(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function oo(t,e){var l=fo(t);t=0;for(var a;l;){if(l.nodeType===3){if(a=t+l.textContent.length,t<=e&&a>=e)return{node:l,offset:e-t};t=a}t:{for(;l;){if(l.nextSibling){l=l.nextSibling;break t}l=l.parentNode}l=void 0}l=fo(l)}}function so(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?so(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function ro(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var e=Un(t.document);e instanceof t.HTMLIFrameElement;){try{var l=typeof e.contentWindow.location.href=="string"}catch{l=!1}if(l)t=e.contentWindow;else break;e=Un(t.document)}return e}function yu(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}var Q0=Re&&"documentMode"in document&&11>=document.documentMode,ta=null,vu=null,La=null,bu=!1;function mo(t,e,l){var a=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;bu||ta==null||ta!==Un(a)||(a=ta,"selectionStart"in a&&yu(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),La&&Xa(La,a)||(La=a,a=Ni(vu,"onSelect"),0<a.length&&(e=new qn("onSelect","select",null,e,l),t.push({event:e,listeners:a}),e.target=ta)))}function _l(t,e){var l={};return l[t.toLowerCase()]=e.toLowerCase(),l["Webkit"+t]="webkit"+e,l["Moz"+t]="moz"+e,l}var ea={animationend:_l("Animation","AnimationEnd"),animationiteration:_l("Animation","AnimationIteration"),animationstart:_l("Animation","AnimationStart"),transitionrun:_l("Transition","TransitionRun"),transitionstart:_l("Transition","TransitionStart"),transitioncancel:_l("Transition","TransitionCancel"),transitionend:_l("Transition","TransitionEnd")},xu={},ho={};Re&&(ho=document.createElement("div").style,"AnimationEvent"in window||(delete ea.animationend.animation,delete ea.animationiteration.animation,delete ea.animationstart.animation),"TransitionEvent"in window||delete ea.transitionend.transition);function Ml(t){if(xu[t])return xu[t];if(!ea[t])return t;var e=ea[t],l;for(l in e)if(e.hasOwnProperty(l)&&l in ho)return xu[t]=e[l];return t}var go=Ml("animationend"),po=Ml("animationiteration"),yo=Ml("animationstart"),Z0=Ml("transitionrun"),V0=Ml("transitionstart"),K0=Ml("transitioncancel"),vo=Ml("transitionend"),bo=new Map,Su="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Su.push("scrollEnd");function xe(t,e){bo.set(t,e),Tl(e,[t])}var Gn=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},re=[],la=0,zu=0;function Xn(){for(var t=la,e=zu=la=0;e<t;){var l=re[e];re[e++]=null;var a=re[e];re[e++]=null;var n=re[e];re[e++]=null;var i=re[e];if(re[e++]=null,a!==null&&n!==null){var u=a.pending;u===null?n.next=n:(n.next=u.next,u.next=n),a.pending=n}i!==0&&xo(l,n,i)}}function Ln(t,e,l,a){re[la++]=t,re[la++]=e,re[la++]=l,re[la++]=a,zu|=a,t.lanes|=a,t=t.alternate,t!==null&&(t.lanes|=a)}function Au(t,e,l,a){return Ln(t,e,l,a),Qn(t)}function Ol(t,e){return Ln(t,null,null,e),Qn(t)}function xo(t,e,l){t.lanes|=l;var a=t.alternate;a!==null&&(a.lanes|=l);for(var n=!1,i=t.return;i!==null;)i.childLanes|=l,a=i.alternate,a!==null&&(a.childLanes|=l),i.tag===22&&(t=i.stateNode,t===null||t._visibility&1||(n=!0)),t=i,i=i.return;return t.tag===3?(i=t.stateNode,n&&e!==null&&(n=31-te(l),t=i.hiddenUpdates,a=t[n],a===null?t[n]=[e]:a.push(e),e.lane=l|536870912),i):null}function Qn(t){if(50<rn)throw rn=0,Uc=null,Error(m(185));for(var e=t.return;e!==null;)t=e,e=t.return;return t.tag===3?t.stateNode:null}var aa={};function k0(t,e,l,a){this.tag=t,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function le(t,e,l,a){return new k0(t,e,l,a)}function ju(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Be(t,e){var l=t.alternate;return l===null?(l=le(t.tag,e,t.key,t.mode),l.elementType=t.elementType,l.type=t.type,l.stateNode=t.stateNode,l.alternate=t,t.alternate=l):(l.pendingProps=e,l.type=t.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=t.flags&65011712,l.childLanes=t.childLanes,l.lanes=t.lanes,l.child=t.child,l.memoizedProps=t.memoizedProps,l.memoizedState=t.memoizedState,l.updateQueue=t.updateQueue,e=t.dependencies,l.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},l.sibling=t.sibling,l.index=t.index,l.ref=t.ref,l.refCleanup=t.refCleanup,l}function So(t,e){t.flags&=65011714;var l=t.alternate;return l===null?(t.childLanes=0,t.lanes=e,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=l.childLanes,t.lanes=l.lanes,t.child=l.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=l.memoizedProps,t.memoizedState=l.memoizedState,t.updateQueue=l.updateQueue,t.type=l.type,e=l.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t}function Zn(t,e,l,a,n,i){var u=0;if(a=t,typeof t=="function")ju(t)&&(u=1);else if(typeof t=="string")u=Im(t,l,U.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case je:return t=le(31,l,e,n),t.elementType=je,t.lanes=i,t;case Bt:return Dl(l.children,n,i,e);case De:u=8,n|=24;break;case $t:return t=le(12,l,e,n|2),t.elementType=$t,t.lanes=i,t;case Ae:return t=le(13,l,e,n),t.elementType=Ae,t.lanes=i,t;case Gt:return t=le(19,l,e,n),t.elementType=Gt,t.lanes=i,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Ct:u=10;break t;case $e:u=9;break t;case fe:u=11;break t;case $:u=14;break t;case Xt:u=16,a=null;break t}u=29,l=Error(m(130,t===null?"null":typeof t,"")),a=null}return e=le(u,l,e,n),e.elementType=t,e.type=a,e.lanes=i,e}function Dl(t,e,l,a){return t=le(7,t,a,e),t.lanes=l,t}function Eu(t,e,l){return t=le(6,t,null,e),t.lanes=l,t}function zo(t){var e=le(18,null,null,0);return e.stateNode=t,e}function Tu(t,e,l){return e=le(4,t.children!==null?t.children:[],t.key,e),e.lanes=l,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}var Ao=new WeakMap;function de(t,e){if(typeof t=="object"&&t!==null){var l=Ao.get(t);return l!==void 0?l:(e={value:t,source:e,stack:Sf(e)},Ao.set(t,e),e)}return{value:t,source:e,stack:Sf(e)}}var na=[],ia=0,Vn=null,Qa=0,me=[],he=0,el=null,Te=1,Ne="";function qe(t,e){na[ia++]=Qa,na[ia++]=Vn,Vn=t,Qa=e}function jo(t,e,l){me[he++]=Te,me[he++]=Ne,me[he++]=el,el=t;var a=Te;t=Ne;var n=32-te(a)-1;a&=~(1<<n),l+=1;var i=32-te(e)+n;if(30<i){var u=n-n%5;i=(a&(1<<u)-1).toString(32),a>>=u,n-=u,Te=1<<32-te(e)+n|l<<n|a,Ne=i+t}else Te=1<<i|l<<n|a,Ne=t}function Nu(t){t.return!==null&&(qe(t,1),jo(t,1,0))}function _u(t){for(;t===Vn;)Vn=na[--ia],na[ia]=null,Qa=na[--ia],na[ia]=null;for(;t===el;)el=me[--he],me[he]=null,Ne=me[--he],me[he]=null,Te=me[--he],me[he]=null}function Eo(t,e){me[he++]=Te,me[he++]=Ne,me[he++]=el,Te=e.id,Ne=e.overflow,el=t}var Mt=null,dt=null,I=!1,ll=null,ge=!1,Mu=Error(m(519));function al(t){var e=Error(m(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Za(de(e,t)),Mu}function To(t){var e=t.stateNode,l=t.type,a=t.memoizedProps;switch(e[_t]=t,e[Qt]=a,l){case"dialog":k("cancel",e),k("close",e);break;case"iframe":case"object":case"embed":k("load",e);break;case"video":case"audio":for(l=0;l<mn.length;l++)k(mn[l],e);break;case"source":k("error",e);break;case"img":case"image":case"link":k("error",e),k("load",e);break;case"details":k("toggle",e);break;case"input":k("invalid",e),Yf(e,a.value,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name,!0);break;case"select":k("invalid",e);break;case"textarea":k("invalid",e),Gf(e,a.value,a.defaultValue,a.children)}l=a.children,typeof l!="string"&&typeof l!="number"&&typeof l!="bigint"||e.textContent===""+l||a.suppressHydrationWarning===!0||Qr(e.textContent,l)?(a.popover!=null&&(k("beforetoggle",e),k("toggle",e)),a.onScroll!=null&&k("scroll",e),a.onScrollEnd!=null&&k("scrollend",e),a.onClick!=null&&(e.onclick=He),e=!0):e=!1,e||al(t,!0)}function No(t){for(Mt=t.return;Mt;)switch(Mt.tag){case 5:case 31:case 13:ge=!1;return;case 27:case 3:ge=!0;return;default:Mt=Mt.return}}function ua(t){if(t!==Mt)return!1;if(!I)return No(t),I=!0,!1;var e=t.tag,l;if((l=e!==3&&e!==27)&&((l=e===5)&&(l=t.type,l=!(l!=="form"&&l!=="button")||kc(t.type,t.memoizedProps)),l=!l),l&&dt&&al(t),No(t),e===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(m(317));dt=Ir(t)}else if(e===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(m(317));dt=Ir(t)}else e===27?(e=dt,yl(t.type)?(t=Ic,Ic=null,dt=t):dt=e):dt=Mt?ye(t.stateNode.nextSibling):null;return!0}function Ul(){dt=Mt=null,I=!1}function Ou(){var t=ll;return t!==null&&(Jt===null?Jt=t:Jt.push.apply(Jt,t),ll=null),t}function Za(t){ll===null?ll=[t]:ll.push(t)}var Du=r(null),Cl=null,Ye=null;function nl(t,e,l){N(Du,e._currentValue),e._currentValue=l}function we(t){t._currentValue=Du.current,j(Du)}function Uu(t,e,l){for(;t!==null;){var a=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,a!==null&&(a.childLanes|=e)):a!==null&&(a.childLanes&e)!==e&&(a.childLanes|=e),t===l)break;t=t.return}}function Cu(t,e,l,a){var n=t.child;for(n!==null&&(n.return=t);n!==null;){var i=n.dependencies;if(i!==null){var u=n.child;i=i.firstContext;t:for(;i!==null;){var c=i;i=n;for(var o=0;o<e.length;o++)if(c.context===e[o]){i.lanes|=l,c=i.alternate,c!==null&&(c.lanes|=l),Uu(i.return,l,t),a||(u=null);break t}i=c.next}}else if(n.tag===18){if(u=n.return,u===null)throw Error(m(341));u.lanes|=l,i=u.alternate,i!==null&&(i.lanes|=l),Uu(u,l,t),u=null}else u=n.child;if(u!==null)u.return=n;else for(u=n;u!==null;){if(u===t){u=null;break}if(n=u.sibling,n!==null){n.return=u.return,u=n;break}u=u.return}n=u}}function ca(t,e,l,a){t=null;for(var n=e,i=!1;n!==null;){if(!i){if((n.flags&524288)!==0)i=!0;else if((n.flags&262144)!==0)break}if(n.tag===10){var u=n.alternate;if(u===null)throw Error(m(387));if(u=u.memoizedProps,u!==null){var c=n.type;ee(n.pendingProps.value,u.value)||(t!==null?t.push(c):t=[c])}}else if(n===lt.current){if(u=n.alternate,u===null)throw Error(m(387));u.memoizedState.memoizedState!==n.memoizedState.memoizedState&&(t!==null?t.push(vn):t=[vn])}n=n.return}t!==null&&Cu(e,t,l,a),e.flags|=262144}function Kn(t){for(t=t.firstContext;t!==null;){if(!ee(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Hl(t){Cl=t,Ye=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Ot(t){return _o(Cl,t)}function kn(t,e){return Cl===null&&Hl(t),_o(t,e)}function _o(t,e){var l=e._currentValue;if(e={context:e,memoizedValue:l,next:null},Ye===null){if(t===null)throw Error(m(308));Ye=e,t.dependencies={lanes:0,firstContext:e},t.flags|=524288}else Ye=Ye.next=e;return l}var J0=typeof AbortController<"u"?AbortController:function(){var t=[],e=this.signal={aborted:!1,addEventListener:function(l,a){t.push(a)}};this.abort=function(){e.aborted=!0,t.forEach(function(l){return l()})}},W0=z.unstable_scheduleCallback,F0=z.unstable_NormalPriority,St={$$typeof:Ct,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Hu(){return{controller:new J0,data:new Map,refCount:0}}function Va(t){t.refCount--,t.refCount===0&&W0(F0,function(){t.controller.abort()})}var Ka=null,Ru=0,fa=0,oa=null;function $0(t,e){if(Ka===null){var l=Ka=[];Ru=0,fa=Yc(),oa={status:"pending",value:void 0,then:function(a){l.push(a)}}}return Ru++,e.then(Mo,Mo),e}function Mo(){if(--Ru===0&&Ka!==null){oa!==null&&(oa.status="fulfilled");var t=Ka;Ka=null,fa=0,oa=null;for(var e=0;e<t.length;e++)(0,t[e])()}}function I0(t,e){var l=[],a={status:"pending",value:null,reason:null,then:function(n){l.push(n)}};return t.then(function(){a.status="fulfilled",a.value=e;for(var n=0;n<l.length;n++)(0,l[n])(e)},function(n){for(a.status="rejected",a.reason=n,n=0;n<l.length;n++)(0,l[n])(void 0)}),a}var Oo=b.S;b.S=function(t,e){mr=It(),typeof e=="object"&&e!==null&&typeof e.then=="function"&&$0(t,e),Oo!==null&&Oo(t,e)};var Rl=r(null);function Bu(){var t=Rl.current;return t!==null?t:rt.pooledCache}function Jn(t,e){e===null?N(Rl,Rl.current):N(Rl,e.pool)}function Do(){var t=Bu();return t===null?null:{parent:St._currentValue,pool:t}}var sa=Error(m(460)),qu=Error(m(474)),Wn=Error(m(542)),Fn={then:function(){}};function Uo(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Co(t,e,l){switch(l=t[l],l===void 0?t.push(e):l!==e&&(e.then(He,He),e=l),e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,Ro(t),t;default:if(typeof e.status=="string")e.then(He,He);else{if(t=rt,t!==null&&100<t.shellSuspendCounter)throw Error(m(482));t=e,t.status="pending",t.then(function(a){if(e.status==="pending"){var n=e;n.status="fulfilled",n.value=a}},function(a){if(e.status==="pending"){var n=e;n.status="rejected",n.reason=a}})}switch(e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,Ro(t),t}throw ql=e,sa}}function Bl(t){try{var e=t._init;return e(t._payload)}catch(l){throw l!==null&&typeof l=="object"&&typeof l.then=="function"?(ql=l,sa):l}}var ql=null;function Ho(){if(ql===null)throw Error(m(459));var t=ql;return ql=null,t}function Ro(t){if(t===sa||t===Wn)throw Error(m(483))}var ra=null,ka=0;function $n(t){var e=ka;return ka+=1,ra===null&&(ra=[]),Co(ra,t,e)}function Ja(t,e){e=e.props.ref,t.ref=e!==void 0?e:null}function In(t,e){throw e.$$typeof===F?Error(m(525)):(t=Object.prototype.toString.call(e),Error(m(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)))}function Bo(t){function e(d,s){if(t){var h=d.deletions;h===null?(d.deletions=[s],d.flags|=16):h.push(s)}}function l(d,s){if(!t)return null;for(;s!==null;)e(d,s),s=s.sibling;return null}function a(d){for(var s=new Map;d!==null;)d.key!==null?s.set(d.key,d):s.set(d.index,d),d=d.sibling;return s}function n(d,s){return d=Be(d,s),d.index=0,d.sibling=null,d}function i(d,s,h){return d.index=h,t?(h=d.alternate,h!==null?(h=h.index,h<s?(d.flags|=67108866,s):h):(d.flags|=67108866,s)):(d.flags|=1048576,s)}function u(d){return t&&d.alternate===null&&(d.flags|=67108866),d}function c(d,s,h,x){return s===null||s.tag!==6?(s=Eu(h,d.mode,x),s.return=d,s):(s=n(s,h),s.return=d,s)}function o(d,s,h,x){var R=h.type;return R===Bt?v(d,s,h.props.children,x,h.key):s!==null&&(s.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===Xt&&Bl(R)===s.type)?(s=n(s,h.props),Ja(s,h),s.return=d,s):(s=Zn(h.type,h.key,h.props,null,d.mode,x),Ja(s,h),s.return=d,s)}function g(d,s,h,x){return s===null||s.tag!==4||s.stateNode.containerInfo!==h.containerInfo||s.stateNode.implementation!==h.implementation?(s=Tu(h,d.mode,x),s.return=d,s):(s=n(s,h.children||[]),s.return=d,s)}function v(d,s,h,x,R){return s===null||s.tag!==7?(s=Dl(h,d.mode,x,R),s.return=d,s):(s=n(s,h),s.return=d,s)}function S(d,s,h){if(typeof s=="string"&&s!==""||typeof s=="number"||typeof s=="bigint")return s=Eu(""+s,d.mode,h),s.return=d,s;if(typeof s=="object"&&s!==null){switch(s.$$typeof){case Ft:return h=Zn(s.type,s.key,s.props,null,d.mode,h),Ja(h,s),h.return=d,h;case wt:return s=Tu(s,d.mode,h),s.return=d,s;case Xt:return s=Bl(s),S(d,s,h)}if(be(s)||Lt(s))return s=Dl(s,d.mode,h,null),s.return=d,s;if(typeof s.then=="function")return S(d,$n(s),h);if(s.$$typeof===Ct)return S(d,kn(d,s),h);In(d,s)}return null}function p(d,s,h,x){var R=s!==null?s.key:null;if(typeof h=="string"&&h!==""||typeof h=="number"||typeof h=="bigint")return R!==null?null:c(d,s,""+h,x);if(typeof h=="object"&&h!==null){switch(h.$$typeof){case Ft:return h.key===R?o(d,s,h,x):null;case wt:return h.key===R?g(d,s,h,x):null;case Xt:return h=Bl(h),p(d,s,h,x)}if(be(h)||Lt(h))return R!==null?null:v(d,s,h,x,null);if(typeof h.then=="function")return p(d,s,$n(h),x);if(h.$$typeof===Ct)return p(d,s,kn(d,h),x);In(d,h)}return null}function y(d,s,h,x,R){if(typeof x=="string"&&x!==""||typeof x=="number"||typeof x=="bigint")return d=d.get(h)||null,c(s,d,""+x,R);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Ft:return d=d.get(x.key===null?h:x.key)||null,o(s,d,x,R);case wt:return d=d.get(x.key===null?h:x.key)||null,g(s,d,x,R);case Xt:return x=Bl(x),y(d,s,h,x,R)}if(be(x)||Lt(x))return d=d.get(h)||null,v(s,d,x,R,null);if(typeof x.then=="function")return y(d,s,h,$n(x),R);if(x.$$typeof===Ct)return y(d,s,h,kn(s,x),R);In(s,x)}return null}function O(d,s,h,x){for(var R=null,P=null,C=s,Z=s=0,W=null;C!==null&&Z<h.length;Z++){C.index>Z?(W=C,C=null):W=C.sibling;var tt=p(d,C,h[Z],x);if(tt===null){C===null&&(C=W);break}t&&C&&tt.alternate===null&&e(d,C),s=i(tt,s,Z),P===null?R=tt:P.sibling=tt,P=tt,C=W}if(Z===h.length)return l(d,C),I&&qe(d,Z),R;if(C===null){for(;Z<h.length;Z++)C=S(d,h[Z],x),C!==null&&(s=i(C,s,Z),P===null?R=C:P.sibling=C,P=C);return I&&qe(d,Z),R}for(C=a(C);Z<h.length;Z++)W=y(C,d,Z,h[Z],x),W!==null&&(t&&W.alternate!==null&&C.delete(W.key===null?Z:W.key),s=i(W,s,Z),P===null?R=W:P.sibling=W,P=W);return t&&C.forEach(function(zl){return e(d,zl)}),I&&qe(d,Z),R}function q(d,s,h,x){if(h==null)throw Error(m(151));for(var R=null,P=null,C=s,Z=s=0,W=null,tt=h.next();C!==null&&!tt.done;Z++,tt=h.next()){C.index>Z?(W=C,C=null):W=C.sibling;var zl=p(d,C,tt.value,x);if(zl===null){C===null&&(C=W);break}t&&C&&zl.alternate===null&&e(d,C),s=i(zl,s,Z),P===null?R=zl:P.sibling=zl,P=zl,C=W}if(tt.done)return l(d,C),I&&qe(d,Z),R;if(C===null){for(;!tt.done;Z++,tt=h.next())tt=S(d,tt.value,x),tt!==null&&(s=i(tt,s,Z),P===null?R=tt:P.sibling=tt,P=tt);return I&&qe(d,Z),R}for(C=a(C);!tt.done;Z++,tt=h.next())tt=y(C,d,Z,tt.value,x),tt!==null&&(t&&tt.alternate!==null&&C.delete(tt.key===null?Z:tt.key),s=i(tt,s,Z),P===null?R=tt:P.sibling=tt,P=tt);return t&&C.forEach(function(oh){return e(d,oh)}),I&&qe(d,Z),R}function ot(d,s,h,x){if(typeof h=="object"&&h!==null&&h.type===Bt&&h.key===null&&(h=h.props.children),typeof h=="object"&&h!==null){switch(h.$$typeof){case Ft:t:{for(var R=h.key;s!==null;){if(s.key===R){if(R=h.type,R===Bt){if(s.tag===7){l(d,s.sibling),x=n(s,h.props.children),x.return=d,d=x;break t}}else if(s.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===Xt&&Bl(R)===s.type){l(d,s.sibling),x=n(s,h.props),Ja(x,h),x.return=d,d=x;break t}l(d,s);break}else e(d,s);s=s.sibling}h.type===Bt?(x=Dl(h.props.children,d.mode,x,h.key),x.return=d,d=x):(x=Zn(h.type,h.key,h.props,null,d.mode,x),Ja(x,h),x.return=d,d=x)}return u(d);case wt:t:{for(R=h.key;s!==null;){if(s.key===R)if(s.tag===4&&s.stateNode.containerInfo===h.containerInfo&&s.stateNode.implementation===h.implementation){l(d,s.sibling),x=n(s,h.children||[]),x.return=d,d=x;break t}else{l(d,s);break}else e(d,s);s=s.sibling}x=Tu(h,d.mode,x),x.return=d,d=x}return u(d);case Xt:return h=Bl(h),ot(d,s,h,x)}if(be(h))return O(d,s,h,x);if(Lt(h)){if(R=Lt(h),typeof R!="function")throw Error(m(150));return h=R.call(h),q(d,s,h,x)}if(typeof h.then=="function")return ot(d,s,$n(h),x);if(h.$$typeof===Ct)return ot(d,s,kn(d,h),x);In(d,h)}return typeof h=="string"&&h!==""||typeof h=="number"||typeof h=="bigint"?(h=""+h,s!==null&&s.tag===6?(l(d,s.sibling),x=n(s,h),x.return=d,d=x):(l(d,s),x=Eu(h,d.mode,x),x.return=d,d=x),u(d)):l(d,s)}return function(d,s,h,x){try{ka=0;var R=ot(d,s,h,x);return ra=null,R}catch(C){if(C===sa||C===Wn)throw C;var P=le(29,C,null,d.mode);return P.lanes=x,P.return=d,P}}}var Yl=Bo(!0),qo=Bo(!1),il=!1;function Yu(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function wu(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function ul(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function cl(t,e,l){var a=t.updateQueue;if(a===null)return null;if(a=a.shared,(et&2)!==0){var n=a.pending;return n===null?e.next=e:(e.next=n.next,n.next=e),a.pending=e,e=Qn(t),xo(t,null,l),e}return Ln(t,a,e,l),Qn(t)}function Wa(t,e,l){if(e=e.updateQueue,e!==null&&(e=e.shared,(l&4194048)!==0)){var a=e.lanes;a&=t.pendingLanes,l|=a,e.lanes=l,Nf(t,l)}}function Gu(t,e){var l=t.updateQueue,a=t.alternate;if(a!==null&&(a=a.updateQueue,l===a)){var n=null,i=null;if(l=l.firstBaseUpdate,l!==null){do{var u={lane:l.lane,tag:l.tag,payload:l.payload,callback:null,next:null};i===null?n=i=u:i=i.next=u,l=l.next}while(l!==null);i===null?n=i=e:i=i.next=e}else n=i=e;l={baseState:a.baseState,firstBaseUpdate:n,lastBaseUpdate:i,shared:a.shared,callbacks:a.callbacks},t.updateQueue=l;return}t=l.lastBaseUpdate,t===null?l.firstBaseUpdate=e:t.next=e,l.lastBaseUpdate=e}var Xu=!1;function Fa(){if(Xu){var t=oa;if(t!==null)throw t}}function $a(t,e,l,a){Xu=!1;var n=t.updateQueue;il=!1;var i=n.firstBaseUpdate,u=n.lastBaseUpdate,c=n.shared.pending;if(c!==null){n.shared.pending=null;var o=c,g=o.next;o.next=null,u===null?i=g:u.next=g,u=o;var v=t.alternate;v!==null&&(v=v.updateQueue,c=v.lastBaseUpdate,c!==u&&(c===null?v.firstBaseUpdate=g:c.next=g,v.lastBaseUpdate=o))}if(i!==null){var S=n.baseState;u=0,v=g=o=null,c=i;do{var p=c.lane&-536870913,y=p!==c.lane;if(y?(J&p)===p:(a&p)===p){p!==0&&p===fa&&(Xu=!0),v!==null&&(v=v.next={lane:0,tag:c.tag,payload:c.payload,callback:null,next:null});t:{var O=t,q=c;p=e;var ot=l;switch(q.tag){case 1:if(O=q.payload,typeof O=="function"){S=O.call(ot,S,p);break t}S=O;break t;case 3:O.flags=O.flags&-65537|128;case 0:if(O=q.payload,p=typeof O=="function"?O.call(ot,S,p):O,p==null)break t;S=H({},S,p);break t;case 2:il=!0}}p=c.callback,p!==null&&(t.flags|=64,y&&(t.flags|=8192),y=n.callbacks,y===null?n.callbacks=[p]:y.push(p))}else y={lane:p,tag:c.tag,payload:c.payload,callback:c.callback,next:null},v===null?(g=v=y,o=S):v=v.next=y,u|=p;if(c=c.next,c===null){if(c=n.shared.pending,c===null)break;y=c,c=y.next,y.next=null,n.lastBaseUpdate=y,n.shared.pending=null}}while(!0);v===null&&(o=S),n.baseState=o,n.firstBaseUpdate=g,n.lastBaseUpdate=v,i===null&&(n.shared.lanes=0),dl|=u,t.lanes=u,t.memoizedState=S}}function Yo(t,e){if(typeof t!="function")throw Error(m(191,t));t.call(e)}function wo(t,e){var l=t.callbacks;if(l!==null)for(t.callbacks=null,t=0;t<l.length;t++)Yo(l[t],e)}var da=r(null),Pn=r(0);function Go(t,e){t=Je,N(Pn,t),N(da,e),Je=t|e.baseLanes}function Lu(){N(Pn,Je),N(da,da.current)}function Qu(){Je=Pn.current,j(da),j(Pn)}var ae=r(null),pe=null;function fl(t){var e=t.alternate;N(bt,bt.current&1),N(ae,t),pe===null&&(e===null||da.current!==null||e.memoizedState!==null)&&(pe=t)}function Zu(t){N(bt,bt.current),N(ae,t),pe===null&&(pe=t)}function Xo(t){t.tag===22?(N(bt,bt.current),N(ae,t),pe===null&&(pe=t)):ol()}function ol(){N(bt,bt.current),N(ae,ae.current)}function ne(t){j(ae),pe===t&&(pe=null),j(bt)}var bt=r(0);function ti(t){for(var e=t;e!==null;){if(e.tag===13){var l=e.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||Fc(l)||$c(l)))return e}else if(e.tag===19&&(e.memoizedProps.revealOrder==="forwards"||e.memoizedProps.revealOrder==="backwards"||e.memoizedProps.revealOrder==="unstable_legacy-backwards"||e.memoizedProps.revealOrder==="together")){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Ge=0,L=null,ct=null,zt=null,ei=!1,ma=!1,wl=!1,li=0,Ia=0,ha=null,P0=0;function pt(){throw Error(m(321))}function Vu(t,e){if(e===null)return!1;for(var l=0;l<e.length&&l<t.length;l++)if(!ee(t[l],e[l]))return!1;return!0}function Ku(t,e,l,a,n,i){return Ge=i,L=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,b.H=t===null||t.memoizedState===null?js:cc,wl=!1,i=l(a,n),wl=!1,ma&&(i=Qo(e,l,a,n)),Lo(t),i}function Lo(t){b.H=en;var e=ct!==null&&ct.next!==null;if(Ge=0,zt=ct=L=null,ei=!1,Ia=0,ha=null,e)throw Error(m(300));t===null||At||(t=t.dependencies,t!==null&&Kn(t)&&(At=!0))}function Qo(t,e,l,a){L=t;var n=0;do{if(ma&&(ha=null),Ia=0,ma=!1,25<=n)throw Error(m(301));if(n+=1,zt=ct=null,t.updateQueue!=null){var i=t.updateQueue;i.lastEffect=null,i.events=null,i.stores=null,i.memoCache!=null&&(i.memoCache.index=0)}b.H=Es,i=e(l,a)}while(ma);return i}function tm(){var t=b.H,e=t.useState()[0];return e=typeof e.then=="function"?Pa(e):e,t=t.useState()[0],(ct!==null?ct.memoizedState:null)!==t&&(L.flags|=1024),e}function ku(){var t=li!==0;return li=0,t}function Ju(t,e,l){e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~l}function Wu(t){if(ei){for(t=t.memoizedState;t!==null;){var e=t.queue;e!==null&&(e.pending=null),t=t.next}ei=!1}Ge=0,zt=ct=L=null,ma=!1,Ia=li=0,ha=null}function Yt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return zt===null?L.memoizedState=zt=t:zt=zt.next=t,zt}function xt(){if(ct===null){var t=L.alternate;t=t!==null?t.memoizedState:null}else t=ct.next;var e=zt===null?L.memoizedState:zt.next;if(e!==null)zt=e,ct=t;else{if(t===null)throw L.alternate===null?Error(m(467)):Error(m(310));ct=t,t={memoizedState:ct.memoizedState,baseState:ct.baseState,baseQueue:ct.baseQueue,queue:ct.queue,next:null},zt===null?L.memoizedState=zt=t:zt=zt.next=t}return zt}function ai(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Pa(t){var e=Ia;return Ia+=1,ha===null&&(ha=[]),t=Co(ha,t,e),e=L,(zt===null?e.memoizedState:zt.next)===null&&(e=e.alternate,b.H=e===null||e.memoizedState===null?js:cc),t}function ni(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return Pa(t);if(t.$$typeof===Ct)return Ot(t)}throw Error(m(438,String(t)))}function Fu(t){var e=null,l=L.updateQueue;if(l!==null&&(e=l.memoCache),e==null){var a=L.alternate;a!==null&&(a=a.updateQueue,a!==null&&(a=a.memoCache,a!=null&&(e={data:a.data.map(function(n){return n.slice()}),index:0})))}if(e==null&&(e={data:[],index:0}),l===null&&(l=ai(),L.updateQueue=l),l.memoCache=e,l=e.data[e.index],l===void 0)for(l=e.data[e.index]=Array(t),a=0;a<t;a++)l[a]=Ql;return e.index++,l}function Xe(t,e){return typeof e=="function"?e(t):e}function ii(t){var e=xt();return $u(e,ct,t)}function $u(t,e,l){var a=t.queue;if(a===null)throw Error(m(311));a.lastRenderedReducer=l;var n=t.baseQueue,i=a.pending;if(i!==null){if(n!==null){var u=n.next;n.next=i.next,i.next=u}e.baseQueue=n=i,a.pending=null}if(i=t.baseState,n===null)t.memoizedState=i;else{e=n.next;var c=u=null,o=null,g=e,v=!1;do{var S=g.lane&-536870913;if(S!==g.lane?(J&S)===S:(Ge&S)===S){var p=g.revertLane;if(p===0)o!==null&&(o=o.next={lane:0,revertLane:0,gesture:null,action:g.action,hasEagerState:g.hasEagerState,eagerState:g.eagerState,next:null}),S===fa&&(v=!0);else if((Ge&p)===p){g=g.next,p===fa&&(v=!0);continue}else S={lane:0,revertLane:g.revertLane,gesture:null,action:g.action,hasEagerState:g.hasEagerState,eagerState:g.eagerState,next:null},o===null?(c=o=S,u=i):o=o.next=S,L.lanes|=p,dl|=p;S=g.action,wl&&l(i,S),i=g.hasEagerState?g.eagerState:l(i,S)}else p={lane:S,revertLane:g.revertLane,gesture:g.gesture,action:g.action,hasEagerState:g.hasEagerState,eagerState:g.eagerState,next:null},o===null?(c=o=p,u=i):o=o.next=p,L.lanes|=S,dl|=S;g=g.next}while(g!==null&&g!==e);if(o===null?u=i:o.next=c,!ee(i,t.memoizedState)&&(At=!0,v&&(l=oa,l!==null)))throw l;t.memoizedState=i,t.baseState=u,t.baseQueue=o,a.lastRenderedState=i}return n===null&&(a.lanes=0),[t.memoizedState,a.dispatch]}function Iu(t){var e=xt(),l=e.queue;if(l===null)throw Error(m(311));l.lastRenderedReducer=t;var a=l.dispatch,n=l.pending,i=e.memoizedState;if(n!==null){l.pending=null;var u=n=n.next;do i=t(i,u.action),u=u.next;while(u!==n);ee(i,e.memoizedState)||(At=!0),e.memoizedState=i,e.baseQueue===null&&(e.baseState=i),l.lastRenderedState=i}return[i,a]}function Zo(t,e,l){var a=L,n=xt(),i=I;if(i){if(l===void 0)throw Error(m(407));l=l()}else l=e();var u=!ee((ct||n).memoizedState,l);if(u&&(n.memoizedState=l,At=!0),n=n.queue,ec(ko.bind(null,a,n,t),[t]),n.getSnapshot!==e||u||zt!==null&&zt.memoizedState.tag&1){if(a.flags|=2048,ga(9,{destroy:void 0},Ko.bind(null,a,n,l,e),null),rt===null)throw Error(m(349));i||(Ge&127)!==0||Vo(a,e,l)}return l}function Vo(t,e,l){t.flags|=16384,t={getSnapshot:e,value:l},e=L.updateQueue,e===null?(e=ai(),L.updateQueue=e,e.stores=[t]):(l=e.stores,l===null?e.stores=[t]:l.push(t))}function Ko(t,e,l,a){e.value=l,e.getSnapshot=a,Jo(e)&&Wo(t)}function ko(t,e,l){return l(function(){Jo(e)&&Wo(t)})}function Jo(t){var e=t.getSnapshot;t=t.value;try{var l=e();return!ee(t,l)}catch{return!0}}function Wo(t){var e=Ol(t,2);e!==null&&Wt(e,t,2)}function Pu(t){var e=Yt();if(typeof t=="function"){var l=t;if(t=l(),wl){Ie(!0);try{l()}finally{Ie(!1)}}}return e.memoizedState=e.baseState=t,e.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Xe,lastRenderedState:t},e}function Fo(t,e,l,a){return t.baseState=l,$u(t,ct,typeof a=="function"?a:Xe)}function em(t,e,l,a,n){if(fi(t))throw Error(m(485));if(t=e.action,t!==null){var i={payload:n,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(u){i.listeners.push(u)}};b.T!==null?l(!0):i.isTransition=!1,a(i),l=e.pending,l===null?(i.next=e.pending=i,$o(e,i)):(i.next=l.next,e.pending=l.next=i)}}function $o(t,e){var l=e.action,a=e.payload,n=t.state;if(e.isTransition){var i=b.T,u={};b.T=u;try{var c=l(n,a),o=b.S;o!==null&&o(u,c),Io(t,e,c)}catch(g){tc(t,e,g)}finally{i!==null&&u.types!==null&&(i.types=u.types),b.T=i}}else try{i=l(n,a),Io(t,e,i)}catch(g){tc(t,e,g)}}function Io(t,e,l){l!==null&&typeof l=="object"&&typeof l.then=="function"?l.then(function(a){Po(t,e,a)},function(a){return tc(t,e,a)}):Po(t,e,l)}function Po(t,e,l){e.status="fulfilled",e.value=l,ts(e),t.state=l,e=t.pending,e!==null&&(l=e.next,l===e?t.pending=null:(l=l.next,e.next=l,$o(t,l)))}function tc(t,e,l){var a=t.pending;if(t.pending=null,a!==null){a=a.next;do e.status="rejected",e.reason=l,ts(e),e=e.next;while(e!==a)}t.action=null}function ts(t){t=t.listeners;for(var e=0;e<t.length;e++)(0,t[e])()}function es(t,e){return e}function ls(t,e){if(I){var l=rt.formState;if(l!==null){t:{var a=L;if(I){if(dt){e:{for(var n=dt,i=ge;n.nodeType!==8;){if(!i){n=null;break e}if(n=ye(n.nextSibling),n===null){n=null;break e}}i=n.data,n=i==="F!"||i==="F"?n:null}if(n){dt=ye(n.nextSibling),a=n.data==="F!";break t}}al(a)}a=!1}a&&(e=l[0])}}return l=Yt(),l.memoizedState=l.baseState=e,a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:es,lastRenderedState:e},l.queue=a,l=Ss.bind(null,L,a),a.dispatch=l,a=Pu(!1),i=uc.bind(null,L,!1,a.queue),a=Yt(),n={state:e,dispatch:null,action:t,pending:null},a.queue=n,l=em.bind(null,L,n,i,l),n.dispatch=l,a.memoizedState=t,[e,l,!1]}function as(t){var e=xt();return ns(e,ct,t)}function ns(t,e,l){if(e=$u(t,e,es)[0],t=ii(Xe)[0],typeof e=="object"&&e!==null&&typeof e.then=="function")try{var a=Pa(e)}catch(u){throw u===sa?Wn:u}else a=e;e=xt();var n=e.queue,i=n.dispatch;return l!==e.memoizedState&&(L.flags|=2048,ga(9,{destroy:void 0},lm.bind(null,n,l),null)),[a,i,t]}function lm(t,e){t.action=e}function is(t){var e=xt(),l=ct;if(l!==null)return ns(e,l,t);xt(),e=e.memoizedState,l=xt();var a=l.queue.dispatch;return l.memoizedState=t,[e,a,!1]}function ga(t,e,l,a){return t={tag:t,create:l,deps:a,inst:e,next:null},e=L.updateQueue,e===null&&(e=ai(),L.updateQueue=e),l=e.lastEffect,l===null?e.lastEffect=t.next=t:(a=l.next,l.next=t,t.next=a,e.lastEffect=t),t}function us(){return xt().memoizedState}function ui(t,e,l,a){var n=Yt();L.flags|=t,n.memoizedState=ga(1|e,{destroy:void 0},l,a===void 0?null:a)}function ci(t,e,l,a){var n=xt();a=a===void 0?null:a;var i=n.memoizedState.inst;ct!==null&&a!==null&&Vu(a,ct.memoizedState.deps)?n.memoizedState=ga(e,i,l,a):(L.flags|=t,n.memoizedState=ga(1|e,i,l,a))}function cs(t,e){ui(8390656,8,t,e)}function ec(t,e){ci(2048,8,t,e)}function am(t){L.flags|=4;var e=L.updateQueue;if(e===null)e=ai(),L.updateQueue=e,e.events=[t];else{var l=e.events;l===null?e.events=[t]:l.push(t)}}function fs(t){var e=xt().memoizedState;return am({ref:e,nextImpl:t}),function(){if((et&2)!==0)throw Error(m(440));return e.impl.apply(void 0,arguments)}}function os(t,e){return ci(4,2,t,e)}function ss(t,e){return ci(4,4,t,e)}function rs(t,e){if(typeof e=="function"){t=t();var l=e(t);return function(){typeof l=="function"?l():e(null)}}if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function ds(t,e,l){l=l!=null?l.concat([t]):null,ci(4,4,rs.bind(null,e,t),l)}function lc(){}function ms(t,e){var l=xt();e=e===void 0?null:e;var a=l.memoizedState;return e!==null&&Vu(e,a[1])?a[0]:(l.memoizedState=[t,e],t)}function hs(t,e){var l=xt();e=e===void 0?null:e;var a=l.memoizedState;if(e!==null&&Vu(e,a[1]))return a[0];if(a=t(),wl){Ie(!0);try{t()}finally{Ie(!1)}}return l.memoizedState=[a,e],a}function ac(t,e,l){return l===void 0||(Ge&1073741824)!==0&&(J&261930)===0?t.memoizedState=e:(t.memoizedState=l,t=gr(),L.lanes|=t,dl|=t,l)}function gs(t,e,l,a){return ee(l,e)?l:da.current!==null?(t=ac(t,l,a),ee(t,e)||(At=!0),t):(Ge&42)===0||(Ge&1073741824)!==0&&(J&261930)===0?(At=!0,t.memoizedState=l):(t=gr(),L.lanes|=t,dl|=t,e)}function ps(t,e,l,a,n){var i=T.p;T.p=i!==0&&8>i?i:8;var u=b.T,c={};b.T=c,uc(t,!1,e,l);try{var o=n(),g=b.S;if(g!==null&&g(c,o),o!==null&&typeof o=="object"&&typeof o.then=="function"){var v=I0(o,a);tn(t,e,v,ce(t))}else tn(t,e,a,ce(t))}catch(S){tn(t,e,{then:function(){},status:"rejected",reason:S},ce())}finally{T.p=i,u!==null&&c.types!==null&&(u.types=c.types),b.T=u}}function nm(){}function nc(t,e,l,a){if(t.tag!==5)throw Error(m(476));var n=ys(t).queue;ps(t,n,e,Y,l===null?nm:function(){return vs(t),l(a)})}function ys(t){var e=t.memoizedState;if(e!==null)return e;e={memoizedState:Y,baseState:Y,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Xe,lastRenderedState:Y},next:null};var l={};return e.next={memoizedState:l,baseState:l,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Xe,lastRenderedState:l},next:null},t.memoizedState=e,t=t.alternate,t!==null&&(t.memoizedState=e),e}function vs(t){var e=ys(t);e.next===null&&(e=t.alternate.memoizedState),tn(t,e.next.queue,{},ce())}function ic(){return Ot(vn)}function bs(){return xt().memoizedState}function xs(){return xt().memoizedState}function im(t){for(var e=t.return;e!==null;){switch(e.tag){case 24:case 3:var l=ce();t=ul(l);var a=cl(e,t,l);a!==null&&(Wt(a,e,l),Wa(a,e,l)),e={cache:Hu()},t.payload=e;return}e=e.return}}function um(t,e,l){var a=ce();l={lane:a,revertLane:0,gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},fi(t)?zs(e,l):(l=Au(t,e,l,a),l!==null&&(Wt(l,t,a),As(l,e,a)))}function Ss(t,e,l){var a=ce();tn(t,e,l,a)}function tn(t,e,l,a){var n={lane:a,revertLane:0,gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null};if(fi(t))zs(e,n);else{var i=t.alternate;if(t.lanes===0&&(i===null||i.lanes===0)&&(i=e.lastRenderedReducer,i!==null))try{var u=e.lastRenderedState,c=i(u,l);if(n.hasEagerState=!0,n.eagerState=c,ee(c,u))return Ln(t,e,n,0),rt===null&&Xn(),!1}catch{}if(l=Au(t,e,n,a),l!==null)return Wt(l,t,a),As(l,e,a),!0}return!1}function uc(t,e,l,a){if(a={lane:2,revertLane:Yc(),gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},fi(t)){if(e)throw Error(m(479))}else e=Au(t,l,a,2),e!==null&&Wt(e,t,2)}function fi(t){var e=t.alternate;return t===L||e!==null&&e===L}function zs(t,e){ma=ei=!0;var l=t.pending;l===null?e.next=e:(e.next=l.next,l.next=e),t.pending=e}function As(t,e,l){if((l&4194048)!==0){var a=e.lanes;a&=t.pendingLanes,l|=a,e.lanes=l,Nf(t,l)}}var en={readContext:Ot,use:ni,useCallback:pt,useContext:pt,useEffect:pt,useImperativeHandle:pt,useLayoutEffect:pt,useInsertionEffect:pt,useMemo:pt,useReducer:pt,useRef:pt,useState:pt,useDebugValue:pt,useDeferredValue:pt,useTransition:pt,useSyncExternalStore:pt,useId:pt,useHostTransitionStatus:pt,useFormState:pt,useActionState:pt,useOptimistic:pt,useMemoCache:pt,useCacheRefresh:pt};en.useEffectEvent=pt;var js={readContext:Ot,use:ni,useCallback:function(t,e){return Yt().memoizedState=[t,e===void 0?null:e],t},useContext:Ot,useEffect:cs,useImperativeHandle:function(t,e,l){l=l!=null?l.concat([t]):null,ui(4194308,4,rs.bind(null,e,t),l)},useLayoutEffect:function(t,e){return ui(4194308,4,t,e)},useInsertionEffect:function(t,e){ui(4,2,t,e)},useMemo:function(t,e){var l=Yt();e=e===void 0?null:e;var a=t();if(wl){Ie(!0);try{t()}finally{Ie(!1)}}return l.memoizedState=[a,e],a},useReducer:function(t,e,l){var a=Yt();if(l!==void 0){var n=l(e);if(wl){Ie(!0);try{l(e)}finally{Ie(!1)}}}else n=e;return a.memoizedState=a.baseState=n,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:n},a.queue=t,t=t.dispatch=um.bind(null,L,t),[a.memoizedState,t]},useRef:function(t){var e=Yt();return t={current:t},e.memoizedState=t},useState:function(t){t=Pu(t);var e=t.queue,l=Ss.bind(null,L,e);return e.dispatch=l,[t.memoizedState,l]},useDebugValue:lc,useDeferredValue:function(t,e){var l=Yt();return ac(l,t,e)},useTransition:function(){var t=Pu(!1);return t=ps.bind(null,L,t.queue,!0,!1),Yt().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,e,l){var a=L,n=Yt();if(I){if(l===void 0)throw Error(m(407));l=l()}else{if(l=e(),rt===null)throw Error(m(349));(J&127)!==0||Vo(a,e,l)}n.memoizedState=l;var i={value:l,getSnapshot:e};return n.queue=i,cs(ko.bind(null,a,i,t),[t]),a.flags|=2048,ga(9,{destroy:void 0},Ko.bind(null,a,i,l,e),null),l},useId:function(){var t=Yt(),e=rt.identifierPrefix;if(I){var l=Ne,a=Te;l=(a&~(1<<32-te(a)-1)).toString(32)+l,e="_"+e+"R_"+l,l=li++,0<l&&(e+="H"+l.toString(32)),e+="_"}else l=P0++,e="_"+e+"r_"+l.toString(32)+"_";return t.memoizedState=e},useHostTransitionStatus:ic,useFormState:ls,useActionState:ls,useOptimistic:function(t){var e=Yt();e.memoizedState=e.baseState=t;var l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return e.queue=l,e=uc.bind(null,L,!0,l),l.dispatch=e,[t,e]},useMemoCache:Fu,useCacheRefresh:function(){return Yt().memoizedState=im.bind(null,L)},useEffectEvent:function(t){var e=Yt(),l={impl:t};return e.memoizedState=l,function(){if((et&2)!==0)throw Error(m(440));return l.impl.apply(void 0,arguments)}}},cc={readContext:Ot,use:ni,useCallback:ms,useContext:Ot,useEffect:ec,useImperativeHandle:ds,useInsertionEffect:os,useLayoutEffect:ss,useMemo:hs,useReducer:ii,useRef:us,useState:function(){return ii(Xe)},useDebugValue:lc,useDeferredValue:function(t,e){var l=xt();return gs(l,ct.memoizedState,t,e)},useTransition:function(){var t=ii(Xe)[0],e=xt().memoizedState;return[typeof t=="boolean"?t:Pa(t),e]},useSyncExternalStore:Zo,useId:bs,useHostTransitionStatus:ic,useFormState:as,useActionState:as,useOptimistic:function(t,e){var l=xt();return Fo(l,ct,t,e)},useMemoCache:Fu,useCacheRefresh:xs};cc.useEffectEvent=fs;var Es={readContext:Ot,use:ni,useCallback:ms,useContext:Ot,useEffect:ec,useImperativeHandle:ds,useInsertionEffect:os,useLayoutEffect:ss,useMemo:hs,useReducer:Iu,useRef:us,useState:function(){return Iu(Xe)},useDebugValue:lc,useDeferredValue:function(t,e){var l=xt();return ct===null?ac(l,t,e):gs(l,ct.memoizedState,t,e)},useTransition:function(){var t=Iu(Xe)[0],e=xt().memoizedState;return[typeof t=="boolean"?t:Pa(t),e]},useSyncExternalStore:Zo,useId:bs,useHostTransitionStatus:ic,useFormState:is,useActionState:is,useOptimistic:function(t,e){var l=xt();return ct!==null?Fo(l,ct,t,e):(l.baseState=t,[t,l.queue.dispatch])},useMemoCache:Fu,useCacheRefresh:xs};Es.useEffectEvent=fs;function fc(t,e,l,a){e=t.memoizedState,l=l(a,e),l=l==null?e:H({},e,l),t.memoizedState=l,t.lanes===0&&(t.updateQueue.baseState=l)}var oc={enqueueSetState:function(t,e,l){t=t._reactInternals;var a=ce(),n=ul(a);n.payload=e,l!=null&&(n.callback=l),e=cl(t,n,a),e!==null&&(Wt(e,t,a),Wa(e,t,a))},enqueueReplaceState:function(t,e,l){t=t._reactInternals;var a=ce(),n=ul(a);n.tag=1,n.payload=e,l!=null&&(n.callback=l),e=cl(t,n,a),e!==null&&(Wt(e,t,a),Wa(e,t,a))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var l=ce(),a=ul(l);a.tag=2,e!=null&&(a.callback=e),e=cl(t,a,l),e!==null&&(Wt(e,t,l),Wa(e,t,l))}};function Ts(t,e,l,a,n,i,u){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(a,i,u):e.prototype&&e.prototype.isPureReactComponent?!Xa(l,a)||!Xa(n,i):!0}function Ns(t,e,l,a){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(l,a),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(l,a),e.state!==t&&oc.enqueueReplaceState(e,e.state,null)}function Gl(t,e){var l=e;if("ref"in e){l={};for(var a in e)a!=="ref"&&(l[a]=e[a])}if(t=t.defaultProps){l===e&&(l=H({},l));for(var n in t)l[n]===void 0&&(l[n]=t[n])}return l}function _s(t){Gn(t)}function Ms(t){console.error(t)}function Os(t){Gn(t)}function oi(t,e){try{var l=t.onUncaughtError;l(e.value,{componentStack:e.stack})}catch(a){setTimeout(function(){throw a})}}function Ds(t,e,l){try{var a=t.onCaughtError;a(l.value,{componentStack:l.stack,errorBoundary:e.tag===1?e.stateNode:null})}catch(n){setTimeout(function(){throw n})}}function sc(t,e,l){return l=ul(l),l.tag=3,l.payload={element:null},l.callback=function(){oi(t,e)},l}function Us(t){return t=ul(t),t.tag=3,t}function Cs(t,e,l,a){var n=l.type.getDerivedStateFromError;if(typeof n=="function"){var i=a.value;t.payload=function(){return n(i)},t.callback=function(){Ds(e,l,a)}}var u=l.stateNode;u!==null&&typeof u.componentDidCatch=="function"&&(t.callback=function(){Ds(e,l,a),typeof n!="function"&&(ml===null?ml=new Set([this]):ml.add(this));var c=a.stack;this.componentDidCatch(a.value,{componentStack:c!==null?c:""})})}function cm(t,e,l,a,n){if(l.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){if(e=l.alternate,e!==null&&ca(e,l,n,!0),l=ae.current,l!==null){switch(l.tag){case 31:case 13:return pe===null?Si():l.alternate===null&&yt===0&&(yt=3),l.flags&=-257,l.flags|=65536,l.lanes=n,a===Fn?l.flags|=16384:(e=l.updateQueue,e===null?l.updateQueue=new Set([a]):e.add(a),Rc(t,a,n)),!1;case 22:return l.flags|=65536,a===Fn?l.flags|=16384:(e=l.updateQueue,e===null?(e={transitions:null,markerInstances:null,retryQueue:new Set([a])},l.updateQueue=e):(l=e.retryQueue,l===null?e.retryQueue=new Set([a]):l.add(a)),Rc(t,a,n)),!1}throw Error(m(435,l.tag))}return Rc(t,a,n),Si(),!1}if(I)return e=ae.current,e!==null?((e.flags&65536)===0&&(e.flags|=256),e.flags|=65536,e.lanes=n,a!==Mu&&(t=Error(m(422),{cause:a}),Za(de(t,l)))):(a!==Mu&&(e=Error(m(423),{cause:a}),Za(de(e,l))),t=t.current.alternate,t.flags|=65536,n&=-n,t.lanes|=n,a=de(a,l),n=sc(t.stateNode,a,n),Gu(t,n),yt!==4&&(yt=2)),!1;var i=Error(m(520),{cause:a});if(i=de(i,l),sn===null?sn=[i]:sn.push(i),yt!==4&&(yt=2),e===null)return!0;a=de(a,l),l=e;do{switch(l.tag){case 3:return l.flags|=65536,t=n&-n,l.lanes|=t,t=sc(l.stateNode,a,t),Gu(l,t),!1;case 1:if(e=l.type,i=l.stateNode,(l.flags&128)===0&&(typeof e.getDerivedStateFromError=="function"||i!==null&&typeof i.componentDidCatch=="function"&&(ml===null||!ml.has(i))))return l.flags|=65536,n&=-n,l.lanes|=n,n=Us(n),Cs(n,t,l,a),Gu(l,n),!1}l=l.return}while(l!==null);return!1}var rc=Error(m(461)),At=!1;function Dt(t,e,l,a){e.child=t===null?qo(e,null,l,a):Yl(e,t.child,l,a)}function Hs(t,e,l,a,n){l=l.render;var i=e.ref;if("ref"in a){var u={};for(var c in a)c!=="ref"&&(u[c]=a[c])}else u=a;return Hl(e),a=Ku(t,e,l,u,i,n),c=ku(),t!==null&&!At?(Ju(t,e,n),Le(t,e,n)):(I&&c&&Nu(e),e.flags|=1,Dt(t,e,a,n),e.child)}function Rs(t,e,l,a,n){if(t===null){var i=l.type;return typeof i=="function"&&!ju(i)&&i.defaultProps===void 0&&l.compare===null?(e.tag=15,e.type=i,Bs(t,e,i,a,n)):(t=Zn(l.type,null,a,e,e.mode,n),t.ref=e.ref,t.return=e,e.child=t)}if(i=t.child,!bc(t,n)){var u=i.memoizedProps;if(l=l.compare,l=l!==null?l:Xa,l(u,a)&&t.ref===e.ref)return Le(t,e,n)}return e.flags|=1,t=Be(i,a),t.ref=e.ref,t.return=e,e.child=t}function Bs(t,e,l,a,n){if(t!==null){var i=t.memoizedProps;if(Xa(i,a)&&t.ref===e.ref)if(At=!1,e.pendingProps=a=i,bc(t,n))(t.flags&131072)!==0&&(At=!0);else return e.lanes=t.lanes,Le(t,e,n)}return dc(t,e,l,a,n)}function qs(t,e,l,a){var n=a.children,i=t!==null?t.memoizedState:null;if(t===null&&e.stateNode===null&&(e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),a.mode==="hidden"){if((e.flags&128)!==0){if(i=i!==null?i.baseLanes|l:l,t!==null){for(a=e.child=t.child,n=0;a!==null;)n=n|a.lanes|a.childLanes,a=a.sibling;a=n&~i}else a=0,e.child=null;return Ys(t,e,i,l,a)}if((l&536870912)!==0)e.memoizedState={baseLanes:0,cachePool:null},t!==null&&Jn(e,i!==null?i.cachePool:null),i!==null?Go(e,i):Lu(),Xo(e);else return a=e.lanes=536870912,Ys(t,e,i!==null?i.baseLanes|l:l,l,a)}else i!==null?(Jn(e,i.cachePool),Go(e,i),ol(),e.memoizedState=null):(t!==null&&Jn(e,null),Lu(),ol());return Dt(t,e,n,l),e.child}function ln(t,e){return t!==null&&t.tag===22||e.stateNode!==null||(e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),e.sibling}function Ys(t,e,l,a,n){var i=Bu();return i=i===null?null:{parent:St._currentValue,pool:i},e.memoizedState={baseLanes:l,cachePool:i},t!==null&&Jn(e,null),Lu(),Xo(e),t!==null&&ca(t,e,a,!0),e.childLanes=n,null}function si(t,e){return e=di({mode:e.mode,children:e.children},t.mode),e.ref=t.ref,t.child=e,e.return=t,e}function ws(t,e,l){return Yl(e,t.child,null,l),t=si(e,e.pendingProps),t.flags|=2,ne(e),e.memoizedState=null,t}function fm(t,e,l){var a=e.pendingProps,n=(e.flags&128)!==0;if(e.flags&=-129,t===null){if(I){if(a.mode==="hidden")return t=si(e,a),e.lanes=536870912,ln(null,t);if(Zu(e),(t=dt)?(t=$r(t,ge),t=t!==null&&t.data==="&"?t:null,t!==null&&(e.memoizedState={dehydrated:t,treeContext:el!==null?{id:Te,overflow:Ne}:null,retryLane:536870912,hydrationErrors:null},l=zo(t),l.return=e,e.child=l,Mt=e,dt=null)):t=null,t===null)throw al(e);return e.lanes=536870912,null}return si(e,a)}var i=t.memoizedState;if(i!==null){var u=i.dehydrated;if(Zu(e),n)if(e.flags&256)e.flags&=-257,e=ws(t,e,l);else if(e.memoizedState!==null)e.child=t.child,e.flags|=128,e=null;else throw Error(m(558));else if(At||ca(t,e,l,!1),n=(l&t.childLanes)!==0,At||n){if(a=rt,a!==null&&(u=_f(a,l),u!==0&&u!==i.retryLane))throw i.retryLane=u,Ol(t,u),Wt(a,t,u),rc;Si(),e=ws(t,e,l)}else t=i.treeContext,dt=ye(u.nextSibling),Mt=e,I=!0,ll=null,ge=!1,t!==null&&Eo(e,t),e=si(e,a),e.flags|=4096;return e}return t=Be(t.child,{mode:a.mode,children:a.children}),t.ref=e.ref,e.child=t,t.return=e,t}function ri(t,e){var l=e.ref;if(l===null)t!==null&&t.ref!==null&&(e.flags|=4194816);else{if(typeof l!="function"&&typeof l!="object")throw Error(m(284));(t===null||t.ref!==l)&&(e.flags|=4194816)}}function dc(t,e,l,a,n){return Hl(e),l=Ku(t,e,l,a,void 0,n),a=ku(),t!==null&&!At?(Ju(t,e,n),Le(t,e,n)):(I&&a&&Nu(e),e.flags|=1,Dt(t,e,l,n),e.child)}function Gs(t,e,l,a,n,i){return Hl(e),e.updateQueue=null,l=Qo(e,a,l,n),Lo(t),a=ku(),t!==null&&!At?(Ju(t,e,i),Le(t,e,i)):(I&&a&&Nu(e),e.flags|=1,Dt(t,e,l,i),e.child)}function Xs(t,e,l,a,n){if(Hl(e),e.stateNode===null){var i=aa,u=l.contextType;typeof u=="object"&&u!==null&&(i=Ot(u)),i=new l(a,i),e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=oc,e.stateNode=i,i._reactInternals=e,i=e.stateNode,i.props=a,i.state=e.memoizedState,i.refs={},Yu(e),u=l.contextType,i.context=typeof u=="object"&&u!==null?Ot(u):aa,i.state=e.memoizedState,u=l.getDerivedStateFromProps,typeof u=="function"&&(fc(e,l,u,a),i.state=e.memoizedState),typeof l.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(u=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),u!==i.state&&oc.enqueueReplaceState(i,i.state,null),$a(e,a,i,n),Fa(),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308),a=!0}else if(t===null){i=e.stateNode;var c=e.memoizedProps,o=Gl(l,c);i.props=o;var g=i.context,v=l.contextType;u=aa,typeof v=="object"&&v!==null&&(u=Ot(v));var S=l.getDerivedStateFromProps;v=typeof S=="function"||typeof i.getSnapshotBeforeUpdate=="function",c=e.pendingProps!==c,v||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(c||g!==u)&&Ns(e,i,a,u),il=!1;var p=e.memoizedState;i.state=p,$a(e,a,i,n),Fa(),g=e.memoizedState,c||p!==g||il?(typeof S=="function"&&(fc(e,l,S,a),g=e.memoizedState),(o=il||Ts(e,l,o,a,p,g,u))?(v||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(e.flags|=4194308)):(typeof i.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=a,e.memoizedState=g),i.props=a,i.state=g,i.context=u,a=o):(typeof i.componentDidMount=="function"&&(e.flags|=4194308),a=!1)}else{i=e.stateNode,wu(t,e),u=e.memoizedProps,v=Gl(l,u),i.props=v,S=e.pendingProps,p=i.context,g=l.contextType,o=aa,typeof g=="object"&&g!==null&&(o=Ot(g)),c=l.getDerivedStateFromProps,(g=typeof c=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(u!==S||p!==o)&&Ns(e,i,a,o),il=!1,p=e.memoizedState,i.state=p,$a(e,a,i,n),Fa();var y=e.memoizedState;u!==S||p!==y||il||t!==null&&t.dependencies!==null&&Kn(t.dependencies)?(typeof c=="function"&&(fc(e,l,c,a),y=e.memoizedState),(v=il||Ts(e,l,v,a,p,y,o)||t!==null&&t.dependencies!==null&&Kn(t.dependencies))?(g||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(a,y,o),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(a,y,o)),typeof i.componentDidUpdate=="function"&&(e.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof i.componentDidUpdate!="function"||u===t.memoizedProps&&p===t.memoizedState||(e.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||u===t.memoizedProps&&p===t.memoizedState||(e.flags|=1024),e.memoizedProps=a,e.memoizedState=y),i.props=a,i.state=y,i.context=o,a=v):(typeof i.componentDidUpdate!="function"||u===t.memoizedProps&&p===t.memoizedState||(e.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||u===t.memoizedProps&&p===t.memoizedState||(e.flags|=1024),a=!1)}return i=a,ri(t,e),a=(e.flags&128)!==0,i||a?(i=e.stateNode,l=a&&typeof l.getDerivedStateFromError!="function"?null:i.render(),e.flags|=1,t!==null&&a?(e.child=Yl(e,t.child,null,n),e.child=Yl(e,null,l,n)):Dt(t,e,l,n),e.memoizedState=i.state,t=e.child):t=Le(t,e,n),t}function Ls(t,e,l,a){return Ul(),e.flags|=256,Dt(t,e,l,a),e.child}var mc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function hc(t){return{baseLanes:t,cachePool:Do()}}function gc(t,e,l){return t=t!==null?t.childLanes&~l:0,e&&(t|=ue),t}function Qs(t,e,l){var a=e.pendingProps,n=!1,i=(e.flags&128)!==0,u;if((u=i)||(u=t!==null&&t.memoizedState===null?!1:(bt.current&2)!==0),u&&(n=!0,e.flags&=-129),u=(e.flags&32)!==0,e.flags&=-33,t===null){if(I){if(n?fl(e):ol(),(t=dt)?(t=$r(t,ge),t=t!==null&&t.data!=="&"?t:null,t!==null&&(e.memoizedState={dehydrated:t,treeContext:el!==null?{id:Te,overflow:Ne}:null,retryLane:536870912,hydrationErrors:null},l=zo(t),l.return=e,e.child=l,Mt=e,dt=null)):t=null,t===null)throw al(e);return $c(t)?e.lanes=32:e.lanes=536870912,null}var c=a.children;return a=a.fallback,n?(ol(),n=e.mode,c=di({mode:"hidden",children:c},n),a=Dl(a,n,l,null),c.return=e,a.return=e,c.sibling=a,e.child=c,a=e.child,a.memoizedState=hc(l),a.childLanes=gc(t,u,l),e.memoizedState=mc,ln(null,a)):(fl(e),pc(e,c))}var o=t.memoizedState;if(o!==null&&(c=o.dehydrated,c!==null)){if(i)e.flags&256?(fl(e),e.flags&=-257,e=yc(t,e,l)):e.memoizedState!==null?(ol(),e.child=t.child,e.flags|=128,e=null):(ol(),c=a.fallback,n=e.mode,a=di({mode:"visible",children:a.children},n),c=Dl(c,n,l,null),c.flags|=2,a.return=e,c.return=e,a.sibling=c,e.child=a,Yl(e,t.child,null,l),a=e.child,a.memoizedState=hc(l),a.childLanes=gc(t,u,l),e.memoizedState=mc,e=ln(null,a));else if(fl(e),$c(c)){if(u=c.nextSibling&&c.nextSibling.dataset,u)var g=u.dgst;u=g,a=Error(m(419)),a.stack="",a.digest=u,Za({value:a,source:null,stack:null}),e=yc(t,e,l)}else if(At||ca(t,e,l,!1),u=(l&t.childLanes)!==0,At||u){if(u=rt,u!==null&&(a=_f(u,l),a!==0&&a!==o.retryLane))throw o.retryLane=a,Ol(t,a),Wt(u,t,a),rc;Fc(c)||Si(),e=yc(t,e,l)}else Fc(c)?(e.flags|=192,e.child=t.child,e=null):(t=o.treeContext,dt=ye(c.nextSibling),Mt=e,I=!0,ll=null,ge=!1,t!==null&&Eo(e,t),e=pc(e,a.children),e.flags|=4096);return e}return n?(ol(),c=a.fallback,n=e.mode,o=t.child,g=o.sibling,a=Be(o,{mode:"hidden",children:a.children}),a.subtreeFlags=o.subtreeFlags&65011712,g!==null?c=Be(g,c):(c=Dl(c,n,l,null),c.flags|=2),c.return=e,a.return=e,a.sibling=c,e.child=a,ln(null,a),a=e.child,c=t.child.memoizedState,c===null?c=hc(l):(n=c.cachePool,n!==null?(o=St._currentValue,n=n.parent!==o?{parent:o,pool:o}:n):n=Do(),c={baseLanes:c.baseLanes|l,cachePool:n}),a.memoizedState=c,a.childLanes=gc(t,u,l),e.memoizedState=mc,ln(t.child,a)):(fl(e),l=t.child,t=l.sibling,l=Be(l,{mode:"visible",children:a.children}),l.return=e,l.sibling=null,t!==null&&(u=e.deletions,u===null?(e.deletions=[t],e.flags|=16):u.push(t)),e.child=l,e.memoizedState=null,l)}function pc(t,e){return e=di({mode:"visible",children:e},t.mode),e.return=t,t.child=e}function di(t,e){return t=le(22,t,null,e),t.lanes=0,t}function yc(t,e,l){return Yl(e,t.child,null,l),t=pc(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Zs(t,e,l){t.lanes|=e;var a=t.alternate;a!==null&&(a.lanes|=e),Uu(t.return,e,l)}function vc(t,e,l,a,n,i){var u=t.memoizedState;u===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:a,tail:l,tailMode:n,treeForkCount:i}:(u.isBackwards=e,u.rendering=null,u.renderingStartTime=0,u.last=a,u.tail=l,u.tailMode=n,u.treeForkCount=i)}function Vs(t,e,l){var a=e.pendingProps,n=a.revealOrder,i=a.tail;a=a.children;var u=bt.current,c=(u&2)!==0;if(c?(u=u&1|2,e.flags|=128):u&=1,N(bt,u),Dt(t,e,a,l),a=I?Qa:0,!c&&t!==null&&(t.flags&128)!==0)t:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Zs(t,l,e);else if(t.tag===19)Zs(t,l,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break t;for(;t.sibling===null;){if(t.return===null||t.return===e)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(n){case"forwards":for(l=e.child,n=null;l!==null;)t=l.alternate,t!==null&&ti(t)===null&&(n=l),l=l.sibling;l=n,l===null?(n=e.child,e.child=null):(n=l.sibling,l.sibling=null),vc(e,!1,n,l,i,a);break;case"backwards":case"unstable_legacy-backwards":for(l=null,n=e.child,e.child=null;n!==null;){if(t=n.alternate,t!==null&&ti(t)===null){e.child=n;break}t=n.sibling,n.sibling=l,l=n,n=t}vc(e,!0,l,null,i,a);break;case"together":vc(e,!1,null,null,void 0,a);break;default:e.memoizedState=null}return e.child}function Le(t,e,l){if(t!==null&&(e.dependencies=t.dependencies),dl|=e.lanes,(l&e.childLanes)===0)if(t!==null){if(ca(t,e,l,!1),(l&e.childLanes)===0)return null}else return null;if(t!==null&&e.child!==t.child)throw Error(m(153));if(e.child!==null){for(t=e.child,l=Be(t,t.pendingProps),e.child=l,l.return=e;t.sibling!==null;)t=t.sibling,l=l.sibling=Be(t,t.pendingProps),l.return=e;l.sibling=null}return e.child}function bc(t,e){return(t.lanes&e)!==0?!0:(t=t.dependencies,!!(t!==null&&Kn(t)))}function om(t,e,l){switch(e.tag){case 3:qt(e,e.stateNode.containerInfo),nl(e,St,t.memoizedState.cache),Ul();break;case 27:case 5:_a(e);break;case 4:qt(e,e.stateNode.containerInfo);break;case 10:nl(e,e.type,e.memoizedProps.value);break;case 31:if(e.memoizedState!==null)return e.flags|=128,Zu(e),null;break;case 13:var a=e.memoizedState;if(a!==null)return a.dehydrated!==null?(fl(e),e.flags|=128,null):(l&e.child.childLanes)!==0?Qs(t,e,l):(fl(e),t=Le(t,e,l),t!==null?t.sibling:null);fl(e);break;case 19:var n=(t.flags&128)!==0;if(a=(l&e.childLanes)!==0,a||(ca(t,e,l,!1),a=(l&e.childLanes)!==0),n){if(a)return Vs(t,e,l);e.flags|=128}if(n=e.memoizedState,n!==null&&(n.rendering=null,n.tail=null,n.lastEffect=null),N(bt,bt.current),a)break;return null;case 22:return e.lanes=0,qs(t,e,l,e.pendingProps);case 24:nl(e,St,t.memoizedState.cache)}return Le(t,e,l)}function Ks(t,e,l){if(t!==null)if(t.memoizedProps!==e.pendingProps)At=!0;else{if(!bc(t,l)&&(e.flags&128)===0)return At=!1,om(t,e,l);At=(t.flags&131072)!==0}else At=!1,I&&(e.flags&1048576)!==0&&jo(e,Qa,e.index);switch(e.lanes=0,e.tag){case 16:t:{var a=e.pendingProps;if(t=Bl(e.elementType),e.type=t,typeof t=="function")ju(t)?(a=Gl(t,a),e.tag=1,e=Xs(null,e,t,a,l)):(e.tag=0,e=dc(null,e,t,a,l));else{if(t!=null){var n=t.$$typeof;if(n===fe){e.tag=11,e=Hs(null,e,t,a,l);break t}else if(n===$){e.tag=14,e=Rs(null,e,t,a,l);break t}}throw e=Ue(t)||t,Error(m(306,e,""))}}return e;case 0:return dc(t,e,e.type,e.pendingProps,l);case 1:return a=e.type,n=Gl(a,e.pendingProps),Xs(t,e,a,n,l);case 3:t:{if(qt(e,e.stateNode.containerInfo),t===null)throw Error(m(387));a=e.pendingProps;var i=e.memoizedState;n=i.element,wu(t,e),$a(e,a,null,l);var u=e.memoizedState;if(a=u.cache,nl(e,St,a),a!==i.cache&&Cu(e,[St],l,!0),Fa(),a=u.element,i.isDehydrated)if(i={element:a,isDehydrated:!1,cache:u.cache},e.updateQueue.baseState=i,e.memoizedState=i,e.flags&256){e=Ls(t,e,a,l);break t}else if(a!==n){n=de(Error(m(424)),e),Za(n),e=Ls(t,e,a,l);break t}else for(t=e.stateNode.containerInfo,t.nodeType===9?t=t.body:t=t.nodeName==="HTML"?t.ownerDocument.body:t,dt=ye(t.firstChild),Mt=e,I=!0,ll=null,ge=!0,l=qo(e,null,a,l),e.child=l;l;)l.flags=l.flags&-3|4096,l=l.sibling;else{if(Ul(),a===n){e=Le(t,e,l);break t}Dt(t,e,a,l)}e=e.child}return e;case 26:return ri(t,e),t===null?(l=ad(e.type,null,e.pendingProps,null))?e.memoizedState=l:I||(l=e.type,t=e.pendingProps,a=_i(V.current).createElement(l),a[_t]=e,a[Qt]=t,Ut(a,l,t),Tt(a),e.stateNode=a):e.memoizedState=ad(e.type,t.memoizedProps,e.pendingProps,t.memoizedState),null;case 27:return _a(e),t===null&&I&&(a=e.stateNode=td(e.type,e.pendingProps,V.current),Mt=e,ge=!0,n=dt,yl(e.type)?(Ic=n,dt=ye(a.firstChild)):dt=n),Dt(t,e,e.pendingProps.children,l),ri(t,e),t===null&&(e.flags|=4194304),e.child;case 5:return t===null&&I&&((n=a=dt)&&(a=wm(a,e.type,e.pendingProps,ge),a!==null?(e.stateNode=a,Mt=e,dt=ye(a.firstChild),ge=!1,n=!0):n=!1),n||al(e)),_a(e),n=e.type,i=e.pendingProps,u=t!==null?t.memoizedProps:null,a=i.children,kc(n,i)?a=null:u!==null&&kc(n,u)&&(e.flags|=32),e.memoizedState!==null&&(n=Ku(t,e,tm,null,null,l),vn._currentValue=n),ri(t,e),Dt(t,e,a,l),e.child;case 6:return t===null&&I&&((t=l=dt)&&(l=Gm(l,e.pendingProps,ge),l!==null?(e.stateNode=l,Mt=e,dt=null,t=!0):t=!1),t||al(e)),null;case 13:return Qs(t,e,l);case 4:return qt(e,e.stateNode.containerInfo),a=e.pendingProps,t===null?e.child=Yl(e,null,a,l):Dt(t,e,a,l),e.child;case 11:return Hs(t,e,e.type,e.pendingProps,l);case 7:return Dt(t,e,e.pendingProps,l),e.child;case 8:return Dt(t,e,e.pendingProps.children,l),e.child;case 12:return Dt(t,e,e.pendingProps.children,l),e.child;case 10:return a=e.pendingProps,nl(e,e.type,a.value),Dt(t,e,a.children,l),e.child;case 9:return n=e.type._context,a=e.pendingProps.children,Hl(e),n=Ot(n),a=a(n),e.flags|=1,Dt(t,e,a,l),e.child;case 14:return Rs(t,e,e.type,e.pendingProps,l);case 15:return Bs(t,e,e.type,e.pendingProps,l);case 19:return Vs(t,e,l);case 31:return fm(t,e,l);case 22:return qs(t,e,l,e.pendingProps);case 24:return Hl(e),a=Ot(St),t===null?(n=Bu(),n===null&&(n=rt,i=Hu(),n.pooledCache=i,i.refCount++,i!==null&&(n.pooledCacheLanes|=l),n=i),e.memoizedState={parent:a,cache:n},Yu(e),nl(e,St,n)):((t.lanes&l)!==0&&(wu(t,e),$a(e,null,null,l),Fa()),n=t.memoizedState,i=e.memoizedState,n.parent!==a?(n={parent:a,cache:a},e.memoizedState=n,e.lanes===0&&(e.memoizedState=e.updateQueue.baseState=n),nl(e,St,a)):(a=i.cache,nl(e,St,a),a!==n.cache&&Cu(e,[St],l,!0))),Dt(t,e,e.pendingProps.children,l),e.child;case 29:throw e.pendingProps}throw Error(m(156,e.tag))}function Qe(t){t.flags|=4}function xc(t,e,l,a,n){if((e=(t.mode&32)!==0)&&(e=!1),e){if(t.flags|=16777216,(n&335544128)===n)if(t.stateNode.complete)t.flags|=8192;else if(br())t.flags|=8192;else throw ql=Fn,qu}else t.flags&=-16777217}function ks(t,e){if(e.type!=="stylesheet"||(e.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!fd(e))if(br())t.flags|=8192;else throw ql=Fn,qu}function mi(t,e){e!==null&&(t.flags|=4),t.flags&16384&&(e=t.tag!==22?Ef():536870912,t.lanes|=e,ba|=e)}function an(t,e){if(!I)switch(t.tailMode){case"hidden":e=t.tail;for(var l=null;e!==null;)e.alternate!==null&&(l=e),e=e.sibling;l===null?t.tail=null:l.sibling=null;break;case"collapsed":l=t.tail;for(var a=null;l!==null;)l.alternate!==null&&(a=l),l=l.sibling;a===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:a.sibling=null}}function mt(t){var e=t.alternate!==null&&t.alternate.child===t.child,l=0,a=0;if(e)for(var n=t.child;n!==null;)l|=n.lanes|n.childLanes,a|=n.subtreeFlags&65011712,a|=n.flags&65011712,n.return=t,n=n.sibling;else for(n=t.child;n!==null;)l|=n.lanes|n.childLanes,a|=n.subtreeFlags,a|=n.flags,n.return=t,n=n.sibling;return t.subtreeFlags|=a,t.childLanes=l,e}function sm(t,e,l){var a=e.pendingProps;switch(_u(e),e.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return mt(e),null;case 1:return mt(e),null;case 3:return l=e.stateNode,a=null,t!==null&&(a=t.memoizedState.cache),e.memoizedState.cache!==a&&(e.flags|=2048),we(St),vt(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(t===null||t.child===null)&&(ua(e)?Qe(e):t===null||t.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,Ou())),mt(e),null;case 26:var n=e.type,i=e.memoizedState;return t===null?(Qe(e),i!==null?(mt(e),ks(e,i)):(mt(e),xc(e,n,null,a,l))):i?i!==t.memoizedState?(Qe(e),mt(e),ks(e,i)):(mt(e),e.flags&=-16777217):(t=t.memoizedProps,t!==a&&Qe(e),mt(e),xc(e,n,t,a,l)),null;case 27:if(jn(e),l=V.current,n=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==a&&Qe(e);else{if(!a){if(e.stateNode===null)throw Error(m(166));return mt(e),null}t=U.current,ua(e)?To(e):(t=td(n,a,l),e.stateNode=t,Qe(e))}return mt(e),null;case 5:if(jn(e),n=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==a&&Qe(e);else{if(!a){if(e.stateNode===null)throw Error(m(166));return mt(e),null}if(i=U.current,ua(e))To(e);else{var u=_i(V.current);switch(i){case 1:i=u.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:i=u.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":i=u.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":i=u.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":i=u.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild);break;case"select":i=typeof a.is=="string"?u.createElement("select",{is:a.is}):u.createElement("select"),a.multiple?i.multiple=!0:a.size&&(i.size=a.size);break;default:i=typeof a.is=="string"?u.createElement(n,{is:a.is}):u.createElement(n)}}i[_t]=e,i[Qt]=a;t:for(u=e.child;u!==null;){if(u.tag===5||u.tag===6)i.appendChild(u.stateNode);else if(u.tag!==4&&u.tag!==27&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===e)break t;for(;u.sibling===null;){if(u.return===null||u.return===e)break t;u=u.return}u.sibling.return=u.return,u=u.sibling}e.stateNode=i;t:switch(Ut(i,n,a),n){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break t;case"img":a=!0;break t;default:a=!1}a&&Qe(e)}}return mt(e),xc(e,e.type,t===null?null:t.memoizedProps,e.pendingProps,l),null;case 6:if(t&&e.stateNode!=null)t.memoizedProps!==a&&Qe(e);else{if(typeof a!="string"&&e.stateNode===null)throw Error(m(166));if(t=V.current,ua(e)){if(t=e.stateNode,l=e.memoizedProps,a=null,n=Mt,n!==null)switch(n.tag){case 27:case 5:a=n.memoizedProps}t[_t]=e,t=!!(t.nodeValue===l||a!==null&&a.suppressHydrationWarning===!0||Qr(t.nodeValue,l)),t||al(e,!0)}else t=_i(t).createTextNode(a),t[_t]=e,e.stateNode=t}return mt(e),null;case 31:if(l=e.memoizedState,t===null||t.memoizedState!==null){if(a=ua(e),l!==null){if(t===null){if(!a)throw Error(m(318));if(t=e.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(m(557));t[_t]=e}else Ul(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;mt(e),t=!1}else l=Ou(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=l),t=!0;if(!t)return e.flags&256?(ne(e),e):(ne(e),null);if((e.flags&128)!==0)throw Error(m(558))}return mt(e),null;case 13:if(a=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(n=ua(e),a!==null&&a.dehydrated!==null){if(t===null){if(!n)throw Error(m(318));if(n=e.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(m(317));n[_t]=e}else Ul(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;mt(e),n=!1}else n=Ou(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=n),n=!0;if(!n)return e.flags&256?(ne(e),e):(ne(e),null)}return ne(e),(e.flags&128)!==0?(e.lanes=l,e):(l=a!==null,t=t!==null&&t.memoizedState!==null,l&&(a=e.child,n=null,a.alternate!==null&&a.alternate.memoizedState!==null&&a.alternate.memoizedState.cachePool!==null&&(n=a.alternate.memoizedState.cachePool.pool),i=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(i=a.memoizedState.cachePool.pool),i!==n&&(a.flags|=2048)),l!==t&&l&&(e.child.flags|=8192),mi(e,e.updateQueue),mt(e),null);case 4:return vt(),t===null&&Lc(e.stateNode.containerInfo),mt(e),null;case 10:return we(e.type),mt(e),null;case 19:if(j(bt),a=e.memoizedState,a===null)return mt(e),null;if(n=(e.flags&128)!==0,i=a.rendering,i===null)if(n)an(a,!1);else{if(yt!==0||t!==null&&(t.flags&128)!==0)for(t=e.child;t!==null;){if(i=ti(t),i!==null){for(e.flags|=128,an(a,!1),t=i.updateQueue,e.updateQueue=t,mi(e,t),e.subtreeFlags=0,t=l,l=e.child;l!==null;)So(l,t),l=l.sibling;return N(bt,bt.current&1|2),I&&qe(e,a.treeForkCount),e.child}t=t.sibling}a.tail!==null&&It()>vi&&(e.flags|=128,n=!0,an(a,!1),e.lanes=4194304)}else{if(!n)if(t=ti(i),t!==null){if(e.flags|=128,n=!0,t=t.updateQueue,e.updateQueue=t,mi(e,t),an(a,!0),a.tail===null&&a.tailMode==="hidden"&&!i.alternate&&!I)return mt(e),null}else 2*It()-a.renderingStartTime>vi&&l!==536870912&&(e.flags|=128,n=!0,an(a,!1),e.lanes=4194304);a.isBackwards?(i.sibling=e.child,e.child=i):(t=a.last,t!==null?t.sibling=i:e.child=i,a.last=i)}return a.tail!==null?(t=a.tail,a.rendering=t,a.tail=t.sibling,a.renderingStartTime=It(),t.sibling=null,l=bt.current,N(bt,n?l&1|2:l&1),I&&qe(e,a.treeForkCount),t):(mt(e),null);case 22:case 23:return ne(e),Qu(),a=e.memoizedState!==null,t!==null?t.memoizedState!==null!==a&&(e.flags|=8192):a&&(e.flags|=8192),a?(l&536870912)!==0&&(e.flags&128)===0&&(mt(e),e.subtreeFlags&6&&(e.flags|=8192)):mt(e),l=e.updateQueue,l!==null&&mi(e,l.retryQueue),l=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(l=t.memoizedState.cachePool.pool),a=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),a!==l&&(e.flags|=2048),t!==null&&j(Rl),null;case 24:return l=null,t!==null&&(l=t.memoizedState.cache),e.memoizedState.cache!==l&&(e.flags|=2048),we(St),mt(e),null;case 25:return null;case 30:return null}throw Error(m(156,e.tag))}function rm(t,e){switch(_u(e),e.tag){case 1:return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return we(St),vt(),t=e.flags,(t&65536)!==0&&(t&128)===0?(e.flags=t&-65537|128,e):null;case 26:case 27:case 5:return jn(e),null;case 31:if(e.memoizedState!==null){if(ne(e),e.alternate===null)throw Error(m(340));Ul()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 13:if(ne(e),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(m(340));Ul()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return j(bt),null;case 4:return vt(),null;case 10:return we(e.type),null;case 22:case 23:return ne(e),Qu(),t!==null&&j(Rl),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 24:return we(St),null;case 25:return null;default:return null}}function Js(t,e){switch(_u(e),e.tag){case 3:we(St),vt();break;case 26:case 27:case 5:jn(e);break;case 4:vt();break;case 31:e.memoizedState!==null&&ne(e);break;case 13:ne(e);break;case 19:j(bt);break;case 10:we(e.type);break;case 22:case 23:ne(e),Qu(),t!==null&&j(Rl);break;case 24:we(St)}}function nn(t,e){try{var l=e.updateQueue,a=l!==null?l.lastEffect:null;if(a!==null){var n=a.next;l=n;do{if((l.tag&t)===t){a=void 0;var i=l.create,u=l.inst;a=i(),u.destroy=a}l=l.next}while(l!==n)}}catch(c){it(e,e.return,c)}}function sl(t,e,l){try{var a=e.updateQueue,n=a!==null?a.lastEffect:null;if(n!==null){var i=n.next;a=i;do{if((a.tag&t)===t){var u=a.inst,c=u.destroy;if(c!==void 0){u.destroy=void 0,n=e;var o=l,g=c;try{g()}catch(v){it(n,o,v)}}}a=a.next}while(a!==i)}}catch(v){it(e,e.return,v)}}function Ws(t){var e=t.updateQueue;if(e!==null){var l=t.stateNode;try{wo(e,l)}catch(a){it(t,t.return,a)}}}function Fs(t,e,l){l.props=Gl(t.type,t.memoizedProps),l.state=t.memoizedState;try{l.componentWillUnmount()}catch(a){it(t,e,a)}}function un(t,e){try{var l=t.ref;if(l!==null){switch(t.tag){case 26:case 27:case 5:var a=t.stateNode;break;case 30:a=t.stateNode;break;default:a=t.stateNode}typeof l=="function"?t.refCleanup=l(a):l.current=a}}catch(n){it(t,e,n)}}function _e(t,e){var l=t.ref,a=t.refCleanup;if(l!==null)if(typeof a=="function")try{a()}catch(n){it(t,e,n)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof l=="function")try{l(null)}catch(n){it(t,e,n)}else l.current=null}function $s(t){var e=t.type,l=t.memoizedProps,a=t.stateNode;try{t:switch(e){case"button":case"input":case"select":case"textarea":l.autoFocus&&a.focus();break t;case"img":l.src?a.src=l.src:l.srcSet&&(a.srcset=l.srcSet)}}catch(n){it(t,t.return,n)}}function Sc(t,e,l){try{var a=t.stateNode;Cm(a,t.type,l,e),a[Qt]=e}catch(n){it(t,t.return,n)}}function Is(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&yl(t.type)||t.tag===4}function zc(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||Is(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&yl(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Ac(t,e,l){var a=t.tag;if(a===5||a===6)t=t.stateNode,e?(l.nodeType===9?l.body:l.nodeName==="HTML"?l.ownerDocument.body:l).insertBefore(t,e):(e=l.nodeType===9?l.body:l.nodeName==="HTML"?l.ownerDocument.body:l,e.appendChild(t),l=l._reactRootContainer,l!=null||e.onclick!==null||(e.onclick=He));else if(a!==4&&(a===27&&yl(t.type)&&(l=t.stateNode,e=null),t=t.child,t!==null))for(Ac(t,e,l),t=t.sibling;t!==null;)Ac(t,e,l),t=t.sibling}function hi(t,e,l){var a=t.tag;if(a===5||a===6)t=t.stateNode,e?l.insertBefore(t,e):l.appendChild(t);else if(a!==4&&(a===27&&yl(t.type)&&(l=t.stateNode),t=t.child,t!==null))for(hi(t,e,l),t=t.sibling;t!==null;)hi(t,e,l),t=t.sibling}function Ps(t){var e=t.stateNode,l=t.memoizedProps;try{for(var a=t.type,n=e.attributes;n.length;)e.removeAttributeNode(n[0]);Ut(e,a,l),e[_t]=t,e[Qt]=l}catch(i){it(t,t.return,i)}}var Ze=!1,jt=!1,jc=!1,tr=typeof WeakSet=="function"?WeakSet:Set,Nt=null;function dm(t,e){if(t=t.containerInfo,Vc=Ri,t=ro(t),yu(t)){if("selectionStart"in t)var l={start:t.selectionStart,end:t.selectionEnd};else t:{l=(l=t.ownerDocument)&&l.defaultView||window;var a=l.getSelection&&l.getSelection();if(a&&a.rangeCount!==0){l=a.anchorNode;var n=a.anchorOffset,i=a.focusNode;a=a.focusOffset;try{l.nodeType,i.nodeType}catch{l=null;break t}var u=0,c=-1,o=-1,g=0,v=0,S=t,p=null;e:for(;;){for(var y;S!==l||n!==0&&S.nodeType!==3||(c=u+n),S!==i||a!==0&&S.nodeType!==3||(o=u+a),S.nodeType===3&&(u+=S.nodeValue.length),(y=S.firstChild)!==null;)p=S,S=y;for(;;){if(S===t)break e;if(p===l&&++g===n&&(c=u),p===i&&++v===a&&(o=u),(y=S.nextSibling)!==null)break;S=p,p=S.parentNode}S=y}l=c===-1||o===-1?null:{start:c,end:o}}else l=null}l=l||{start:0,end:0}}else l=null;for(Kc={focusedElem:t,selectionRange:l},Ri=!1,Nt=e;Nt!==null;)if(e=Nt,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Nt=t;else for(;Nt!==null;){switch(e=Nt,i=e.alternate,t=e.flags,e.tag){case 0:if((t&4)!==0&&(t=e.updateQueue,t=t!==null?t.events:null,t!==null))for(l=0;l<t.length;l++)n=t[l],n.ref.impl=n.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&i!==null){t=void 0,l=e,n=i.memoizedProps,i=i.memoizedState,a=l.stateNode;try{var O=Gl(l.type,n);t=a.getSnapshotBeforeUpdate(O,i),a.__reactInternalSnapshotBeforeUpdate=t}catch(q){it(l,l.return,q)}}break;case 3:if((t&1024)!==0){if(t=e.stateNode.containerInfo,l=t.nodeType,l===9)Wc(t);else if(l===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Wc(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(m(163))}if(t=e.sibling,t!==null){t.return=e.return,Nt=t;break}Nt=e.return}}function er(t,e,l){var a=l.flags;switch(l.tag){case 0:case 11:case 15:Ke(t,l),a&4&&nn(5,l);break;case 1:if(Ke(t,l),a&4)if(t=l.stateNode,e===null)try{t.componentDidMount()}catch(u){it(l,l.return,u)}else{var n=Gl(l.type,e.memoizedProps);e=e.memoizedState;try{t.componentDidUpdate(n,e,t.__reactInternalSnapshotBeforeUpdate)}catch(u){it(l,l.return,u)}}a&64&&Ws(l),a&512&&un(l,l.return);break;case 3:if(Ke(t,l),a&64&&(t=l.updateQueue,t!==null)){if(e=null,l.child!==null)switch(l.child.tag){case 27:case 5:e=l.child.stateNode;break;case 1:e=l.child.stateNode}try{wo(t,e)}catch(u){it(l,l.return,u)}}break;case 27:e===null&&a&4&&Ps(l);case 26:case 5:Ke(t,l),e===null&&a&4&&$s(l),a&512&&un(l,l.return);break;case 12:Ke(t,l);break;case 31:Ke(t,l),a&4&&nr(t,l);break;case 13:Ke(t,l),a&4&&ir(t,l),a&64&&(t=l.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(l=Sm.bind(null,l),Xm(t,l))));break;case 22:if(a=l.memoizedState!==null||Ze,!a){e=e!==null&&e.memoizedState!==null||jt,n=Ze;var i=jt;Ze=a,(jt=e)&&!i?ke(t,l,(l.subtreeFlags&8772)!==0):Ke(t,l),Ze=n,jt=i}break;case 30:break;default:Ke(t,l)}}function lr(t){var e=t.alternate;e!==null&&(t.alternate=null,lr(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&tu(e)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var gt=null,Vt=!1;function Ve(t,e,l){for(l=l.child;l!==null;)ar(t,e,l),l=l.sibling}function ar(t,e,l){if(Pt&&typeof Pt.onCommitFiberUnmount=="function")try{Pt.onCommitFiberUnmount(Ma,l)}catch{}switch(l.tag){case 26:jt||_e(l,e),Ve(t,e,l),l.memoizedState?l.memoizedState.count--:l.stateNode&&(l=l.stateNode,l.parentNode.removeChild(l));break;case 27:jt||_e(l,e);var a=gt,n=Vt;yl(l.type)&&(gt=l.stateNode,Vt=!1),Ve(t,e,l),gn(l.stateNode),gt=a,Vt=n;break;case 5:jt||_e(l,e);case 6:if(a=gt,n=Vt,gt=null,Ve(t,e,l),gt=a,Vt=n,gt!==null)if(Vt)try{(gt.nodeType===9?gt.body:gt.nodeName==="HTML"?gt.ownerDocument.body:gt).removeChild(l.stateNode)}catch(i){it(l,e,i)}else try{gt.removeChild(l.stateNode)}catch(i){it(l,e,i)}break;case 18:gt!==null&&(Vt?(t=gt,Wr(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,l.stateNode),Na(t)):Wr(gt,l.stateNode));break;case 4:a=gt,n=Vt,gt=l.stateNode.containerInfo,Vt=!0,Ve(t,e,l),gt=a,Vt=n;break;case 0:case 11:case 14:case 15:sl(2,l,e),jt||sl(4,l,e),Ve(t,e,l);break;case 1:jt||(_e(l,e),a=l.stateNode,typeof a.componentWillUnmount=="function"&&Fs(l,e,a)),Ve(t,e,l);break;case 21:Ve(t,e,l);break;case 22:jt=(a=jt)||l.memoizedState!==null,Ve(t,e,l),jt=a;break;default:Ve(t,e,l)}}function nr(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{Na(t)}catch(l){it(e,e.return,l)}}}function ir(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Na(t)}catch(l){it(e,e.return,l)}}function mm(t){switch(t.tag){case 31:case 13:case 19:var e=t.stateNode;return e===null&&(e=t.stateNode=new tr),e;case 22:return t=t.stateNode,e=t._retryCache,e===null&&(e=t._retryCache=new tr),e;default:throw Error(m(435,t.tag))}}function gi(t,e){var l=mm(t);e.forEach(function(a){if(!l.has(a)){l.add(a);var n=zm.bind(null,t,a);a.then(n,n)}})}function Kt(t,e){var l=e.deletions;if(l!==null)for(var a=0;a<l.length;a++){var n=l[a],i=t,u=e,c=u;t:for(;c!==null;){switch(c.tag){case 27:if(yl(c.type)){gt=c.stateNode,Vt=!1;break t}break;case 5:gt=c.stateNode,Vt=!1;break t;case 3:case 4:gt=c.stateNode.containerInfo,Vt=!0;break t}c=c.return}if(gt===null)throw Error(m(160));ar(i,u,n),gt=null,Vt=!1,i=n.alternate,i!==null&&(i.return=null),n.return=null}if(e.subtreeFlags&13886)for(e=e.child;e!==null;)ur(e,t),e=e.sibling}var Se=null;function ur(t,e){var l=t.alternate,a=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Kt(e,t),kt(t),a&4&&(sl(3,t,t.return),nn(3,t),sl(5,t,t.return));break;case 1:Kt(e,t),kt(t),a&512&&(jt||l===null||_e(l,l.return)),a&64&&Ze&&(t=t.updateQueue,t!==null&&(a=t.callbacks,a!==null&&(l=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=l===null?a:l.concat(a))));break;case 26:var n=Se;if(Kt(e,t),kt(t),a&512&&(jt||l===null||_e(l,l.return)),a&4){var i=l!==null?l.memoizedState:null;if(a=t.memoizedState,l===null)if(a===null)if(t.stateNode===null){t:{a=t.type,l=t.memoizedProps,n=n.ownerDocument||n;e:switch(a){case"title":i=n.getElementsByTagName("title")[0],(!i||i[Ua]||i[_t]||i.namespaceURI==="http://www.w3.org/2000/svg"||i.hasAttribute("itemprop"))&&(i=n.createElement(a),n.head.insertBefore(i,n.querySelector("head > title"))),Ut(i,a,l),i[_t]=t,Tt(i),a=i;break t;case"link":var u=ud("link","href",n).get(a+(l.href||""));if(u){for(var c=0;c<u.length;c++)if(i=u[c],i.getAttribute("href")===(l.href==null||l.href===""?null:l.href)&&i.getAttribute("rel")===(l.rel==null?null:l.rel)&&i.getAttribute("title")===(l.title==null?null:l.title)&&i.getAttribute("crossorigin")===(l.crossOrigin==null?null:l.crossOrigin)){u.splice(c,1);break e}}i=n.createElement(a),Ut(i,a,l),n.head.appendChild(i);break;case"meta":if(u=ud("meta","content",n).get(a+(l.content||""))){for(c=0;c<u.length;c++)if(i=u[c],i.getAttribute("content")===(l.content==null?null:""+l.content)&&i.getAttribute("name")===(l.name==null?null:l.name)&&i.getAttribute("property")===(l.property==null?null:l.property)&&i.getAttribute("http-equiv")===(l.httpEquiv==null?null:l.httpEquiv)&&i.getAttribute("charset")===(l.charSet==null?null:l.charSet)){u.splice(c,1);break e}}i=n.createElement(a),Ut(i,a,l),n.head.appendChild(i);break;default:throw Error(m(468,a))}i[_t]=t,Tt(i),a=i}t.stateNode=a}else cd(n,t.type,t.stateNode);else t.stateNode=id(n,a,t.memoizedProps);else i!==a?(i===null?l.stateNode!==null&&(l=l.stateNode,l.parentNode.removeChild(l)):i.count--,a===null?cd(n,t.type,t.stateNode):id(n,a,t.memoizedProps)):a===null&&t.stateNode!==null&&Sc(t,t.memoizedProps,l.memoizedProps)}break;case 27:Kt(e,t),kt(t),a&512&&(jt||l===null||_e(l,l.return)),l!==null&&a&4&&Sc(t,t.memoizedProps,l.memoizedProps);break;case 5:if(Kt(e,t),kt(t),a&512&&(jt||l===null||_e(l,l.return)),t.flags&32){n=t.stateNode;try{Fl(n,"")}catch(O){it(t,t.return,O)}}a&4&&t.stateNode!=null&&(n=t.memoizedProps,Sc(t,n,l!==null?l.memoizedProps:n)),a&1024&&(jc=!0);break;case 6:if(Kt(e,t),kt(t),a&4){if(t.stateNode===null)throw Error(m(162));a=t.memoizedProps,l=t.stateNode;try{l.nodeValue=a}catch(O){it(t,t.return,O)}}break;case 3:if(Di=null,n=Se,Se=Mi(e.containerInfo),Kt(e,t),Se=n,kt(t),a&4&&l!==null&&l.memoizedState.isDehydrated)try{Na(e.containerInfo)}catch(O){it(t,t.return,O)}jc&&(jc=!1,cr(t));break;case 4:a=Se,Se=Mi(t.stateNode.containerInfo),Kt(e,t),kt(t),Se=a;break;case 12:Kt(e,t),kt(t);break;case 31:Kt(e,t),kt(t),a&4&&(a=t.updateQueue,a!==null&&(t.updateQueue=null,gi(t,a)));break;case 13:Kt(e,t),kt(t),t.child.flags&8192&&t.memoizedState!==null!=(l!==null&&l.memoizedState!==null)&&(yi=It()),a&4&&(a=t.updateQueue,a!==null&&(t.updateQueue=null,gi(t,a)));break;case 22:n=t.memoizedState!==null;var o=l!==null&&l.memoizedState!==null,g=Ze,v=jt;if(Ze=g||n,jt=v||o,Kt(e,t),jt=v,Ze=g,kt(t),a&8192)t:for(e=t.stateNode,e._visibility=n?e._visibility&-2:e._visibility|1,n&&(l===null||o||Ze||jt||Xl(t)),l=null,e=t;;){if(e.tag===5||e.tag===26){if(l===null){o=l=e;try{if(i=o.stateNode,n)u=i.style,typeof u.setProperty=="function"?u.setProperty("display","none","important"):u.display="none";else{c=o.stateNode;var S=o.memoizedProps.style,p=S!=null&&S.hasOwnProperty("display")?S.display:null;c.style.display=p==null||typeof p=="boolean"?"":(""+p).trim()}}catch(O){it(o,o.return,O)}}}else if(e.tag===6){if(l===null){o=e;try{o.stateNode.nodeValue=n?"":o.memoizedProps}catch(O){it(o,o.return,O)}}}else if(e.tag===18){if(l===null){o=e;try{var y=o.stateNode;n?Fr(y,!0):Fr(o.stateNode,!1)}catch(O){it(o,o.return,O)}}}else if((e.tag!==22&&e.tag!==23||e.memoizedState===null||e===t)&&e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break t;for(;e.sibling===null;){if(e.return===null||e.return===t)break t;l===e&&(l=null),e=e.return}l===e&&(l=null),e.sibling.return=e.return,e=e.sibling}a&4&&(a=t.updateQueue,a!==null&&(l=a.retryQueue,l!==null&&(a.retryQueue=null,gi(t,l))));break;case 19:Kt(e,t),kt(t),a&4&&(a=t.updateQueue,a!==null&&(t.updateQueue=null,gi(t,a)));break;case 30:break;case 21:break;default:Kt(e,t),kt(t)}}function kt(t){var e=t.flags;if(e&2){try{for(var l,a=t.return;a!==null;){if(Is(a)){l=a;break}a=a.return}if(l==null)throw Error(m(160));switch(l.tag){case 27:var n=l.stateNode,i=zc(t);hi(t,i,n);break;case 5:var u=l.stateNode;l.flags&32&&(Fl(u,""),l.flags&=-33);var c=zc(t);hi(t,c,u);break;case 3:case 4:var o=l.stateNode.containerInfo,g=zc(t);Ac(t,g,o);break;default:throw Error(m(161))}}catch(v){it(t,t.return,v)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function cr(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var e=t;cr(e),e.tag===5&&e.flags&1024&&e.stateNode.reset(),t=t.sibling}}function Ke(t,e){if(e.subtreeFlags&8772)for(e=e.child;e!==null;)er(t,e.alternate,e),e=e.sibling}function Xl(t){for(t=t.child;t!==null;){var e=t;switch(e.tag){case 0:case 11:case 14:case 15:sl(4,e,e.return),Xl(e);break;case 1:_e(e,e.return);var l=e.stateNode;typeof l.componentWillUnmount=="function"&&Fs(e,e.return,l),Xl(e);break;case 27:gn(e.stateNode);case 26:case 5:_e(e,e.return),Xl(e);break;case 22:e.memoizedState===null&&Xl(e);break;case 30:Xl(e);break;default:Xl(e)}t=t.sibling}}function ke(t,e,l){for(l=l&&(e.subtreeFlags&8772)!==0,e=e.child;e!==null;){var a=e.alternate,n=t,i=e,u=i.flags;switch(i.tag){case 0:case 11:case 15:ke(n,i,l),nn(4,i);break;case 1:if(ke(n,i,l),a=i,n=a.stateNode,typeof n.componentDidMount=="function")try{n.componentDidMount()}catch(g){it(a,a.return,g)}if(a=i,n=a.updateQueue,n!==null){var c=a.stateNode;try{var o=n.shared.hiddenCallbacks;if(o!==null)for(n.shared.hiddenCallbacks=null,n=0;n<o.length;n++)Yo(o[n],c)}catch(g){it(a,a.return,g)}}l&&u&64&&Ws(i),un(i,i.return);break;case 27:Ps(i);case 26:case 5:ke(n,i,l),l&&a===null&&u&4&&$s(i),un(i,i.return);break;case 12:ke(n,i,l);break;case 31:ke(n,i,l),l&&u&4&&nr(n,i);break;case 13:ke(n,i,l),l&&u&4&&ir(n,i);break;case 22:i.memoizedState===null&&ke(n,i,l),un(i,i.return);break;case 30:break;default:ke(n,i,l)}e=e.sibling}}function Ec(t,e){var l=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(l=t.memoizedState.cachePool.pool),t=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),t!==l&&(t!=null&&t.refCount++,l!=null&&Va(l))}function Tc(t,e){t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&Va(t))}function ze(t,e,l,a){if(e.subtreeFlags&10256)for(e=e.child;e!==null;)fr(t,e,l,a),e=e.sibling}function fr(t,e,l,a){var n=e.flags;switch(e.tag){case 0:case 11:case 15:ze(t,e,l,a),n&2048&&nn(9,e);break;case 1:ze(t,e,l,a);break;case 3:ze(t,e,l,a),n&2048&&(t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&Va(t)));break;case 12:if(n&2048){ze(t,e,l,a),t=e.stateNode;try{var i=e.memoizedProps,u=i.id,c=i.onPostCommit;typeof c=="function"&&c(u,e.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(o){it(e,e.return,o)}}else ze(t,e,l,a);break;case 31:ze(t,e,l,a);break;case 13:ze(t,e,l,a);break;case 23:break;case 22:i=e.stateNode,u=e.alternate,e.memoizedState!==null?i._visibility&2?ze(t,e,l,a):cn(t,e):i._visibility&2?ze(t,e,l,a):(i._visibility|=2,pa(t,e,l,a,(e.subtreeFlags&10256)!==0||!1)),n&2048&&Ec(u,e);break;case 24:ze(t,e,l,a),n&2048&&Tc(e.alternate,e);break;default:ze(t,e,l,a)}}function pa(t,e,l,a,n){for(n=n&&((e.subtreeFlags&10256)!==0||!1),e=e.child;e!==null;){var i=t,u=e,c=l,o=a,g=u.flags;switch(u.tag){case 0:case 11:case 15:pa(i,u,c,o,n),nn(8,u);break;case 23:break;case 22:var v=u.stateNode;u.memoizedState!==null?v._visibility&2?pa(i,u,c,o,n):cn(i,u):(v._visibility|=2,pa(i,u,c,o,n)),n&&g&2048&&Ec(u.alternate,u);break;case 24:pa(i,u,c,o,n),n&&g&2048&&Tc(u.alternate,u);break;default:pa(i,u,c,o,n)}e=e.sibling}}function cn(t,e){if(e.subtreeFlags&10256)for(e=e.child;e!==null;){var l=t,a=e,n=a.flags;switch(a.tag){case 22:cn(l,a),n&2048&&Ec(a.alternate,a);break;case 24:cn(l,a),n&2048&&Tc(a.alternate,a);break;default:cn(l,a)}e=e.sibling}}var fn=8192;function ya(t,e,l){if(t.subtreeFlags&fn)for(t=t.child;t!==null;)or(t,e,l),t=t.sibling}function or(t,e,l){switch(t.tag){case 26:ya(t,e,l),t.flags&fn&&t.memoizedState!==null&&Pm(l,Se,t.memoizedState,t.memoizedProps);break;case 5:ya(t,e,l);break;case 3:case 4:var a=Se;Se=Mi(t.stateNode.containerInfo),ya(t,e,l),Se=a;break;case 22:t.memoizedState===null&&(a=t.alternate,a!==null&&a.memoizedState!==null?(a=fn,fn=16777216,ya(t,e,l),fn=a):ya(t,e,l));break;default:ya(t,e,l)}}function sr(t){var e=t.alternate;if(e!==null&&(t=e.child,t!==null)){e.child=null;do e=t.sibling,t.sibling=null,t=e;while(t!==null)}}function on(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var l=0;l<e.length;l++){var a=e[l];Nt=a,dr(a,t)}sr(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)rr(t),t=t.sibling}function rr(t){switch(t.tag){case 0:case 11:case 15:on(t),t.flags&2048&&sl(9,t,t.return);break;case 3:on(t);break;case 12:on(t);break;case 22:var e=t.stateNode;t.memoizedState!==null&&e._visibility&2&&(t.return===null||t.return.tag!==13)?(e._visibility&=-3,pi(t)):on(t);break;default:on(t)}}function pi(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var l=0;l<e.length;l++){var a=e[l];Nt=a,dr(a,t)}sr(t)}for(t=t.child;t!==null;){switch(e=t,e.tag){case 0:case 11:case 15:sl(8,e,e.return),pi(e);break;case 22:l=e.stateNode,l._visibility&2&&(l._visibility&=-3,pi(e));break;default:pi(e)}t=t.sibling}}function dr(t,e){for(;Nt!==null;){var l=Nt;switch(l.tag){case 0:case 11:case 15:sl(8,l,e);break;case 23:case 22:if(l.memoizedState!==null&&l.memoizedState.cachePool!==null){var a=l.memoizedState.cachePool.pool;a!=null&&a.refCount++}break;case 24:Va(l.memoizedState.cache)}if(a=l.child,a!==null)a.return=l,Nt=a;else t:for(l=t;Nt!==null;){a=Nt;var n=a.sibling,i=a.return;if(lr(a),a===l){Nt=null;break t}if(n!==null){n.return=i,Nt=n;break t}Nt=i}}}var hm={getCacheForType:function(t){var e=Ot(St),l=e.data.get(t);return l===void 0&&(l=t(),e.data.set(t,l)),l},cacheSignal:function(){return Ot(St).controller.signal}},gm=typeof WeakMap=="function"?WeakMap:Map,et=0,rt=null,K=null,J=0,nt=0,ie=null,rl=!1,va=!1,Nc=!1,Je=0,yt=0,dl=0,Ll=0,_c=0,ue=0,ba=0,sn=null,Jt=null,Mc=!1,yi=0,mr=0,vi=1/0,bi=null,ml=null,Et=0,hl=null,xa=null,We=0,Oc=0,Dc=null,hr=null,rn=0,Uc=null;function ce(){return(et&2)!==0&&J!==0?J&-J:b.T!==null?Yc():Mf()}function gr(){if(ue===0)if((J&536870912)===0||I){var t=Nn;Nn<<=1,(Nn&3932160)===0&&(Nn=262144),ue=t}else ue=536870912;return t=ae.current,t!==null&&(t.flags|=32),ue}function Wt(t,e,l){(t===rt&&(nt===2||nt===9)||t.cancelPendingCommit!==null)&&(Sa(t,0),gl(t,J,ue,!1)),Da(t,l),((et&2)===0||t!==rt)&&(t===rt&&((et&2)===0&&(Ll|=l),yt===4&&gl(t,J,ue,!1)),Me(t))}function pr(t,e,l){if((et&6)!==0)throw Error(m(327));var a=!l&&(e&127)===0&&(e&t.expiredLanes)===0||Oa(t,e),n=a?vm(t,e):Hc(t,e,!0),i=a;do{if(n===0){va&&!a&&gl(t,e,0,!1);break}else{if(l=t.current.alternate,i&&!pm(l)){n=Hc(t,e,!1),i=!1;continue}if(n===2){if(i=e,t.errorRecoveryDisabledLanes&i)var u=0;else u=t.pendingLanes&-536870913,u=u!==0?u:u&536870912?536870912:0;if(u!==0){e=u;t:{var c=t;n=sn;var o=c.current.memoizedState.isDehydrated;if(o&&(Sa(c,u).flags|=256),u=Hc(c,u,!1),u!==2){if(Nc&&!o){c.errorRecoveryDisabledLanes|=i,Ll|=i,n=4;break t}i=Jt,Jt=n,i!==null&&(Jt===null?Jt=i:Jt.push.apply(Jt,i))}n=u}if(i=!1,n!==2)continue}}if(n===1){Sa(t,0),gl(t,e,0,!0);break}t:{switch(a=t,i=n,i){case 0:case 1:throw Error(m(345));case 4:if((e&4194048)!==e)break;case 6:gl(a,e,ue,!rl);break t;case 2:Jt=null;break;case 3:case 5:break;default:throw Error(m(329))}if((e&62914560)===e&&(n=yi+300-It(),10<n)){if(gl(a,e,ue,!rl),Mn(a,0,!0)!==0)break t;We=e,a.timeoutHandle=kr(yr.bind(null,a,l,Jt,bi,Mc,e,ue,Ll,ba,rl,i,"Throttled",-0,0),n);break t}yr(a,l,Jt,bi,Mc,e,ue,Ll,ba,rl,i,null,-0,0)}}break}while(!0);Me(t)}function yr(t,e,l,a,n,i,u,c,o,g,v,S,p,y){if(t.timeoutHandle=-1,S=e.subtreeFlags,S&8192||(S&16785408)===16785408){S={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:He},or(e,i,S);var O=(i&62914560)===i?yi-It():(i&4194048)===i?mr-It():0;if(O=th(S,O),O!==null){We=i,t.cancelPendingCommit=O(Er.bind(null,t,e,i,l,a,n,u,c,o,v,S,null,p,y)),gl(t,i,u,!g);return}}Er(t,e,i,l,a,n,u,c,o)}function pm(t){for(var e=t;;){var l=e.tag;if((l===0||l===11||l===15)&&e.flags&16384&&(l=e.updateQueue,l!==null&&(l=l.stores,l!==null)))for(var a=0;a<l.length;a++){var n=l[a],i=n.getSnapshot;n=n.value;try{if(!ee(i(),n))return!1}catch{return!1}}if(l=e.child,e.subtreeFlags&16384&&l!==null)l.return=e,e=l;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function gl(t,e,l,a){e&=~_c,e&=~Ll,t.suspendedLanes|=e,t.pingedLanes&=~e,a&&(t.warmLanes|=e),a=t.expirationTimes;for(var n=e;0<n;){var i=31-te(n),u=1<<i;a[i]=-1,n&=~u}l!==0&&Tf(t,l,e)}function xi(){return(et&6)===0?(dn(0),!1):!0}function Cc(){if(K!==null){if(nt===0)var t=K.return;else t=K,Ye=Cl=null,Wu(t),ra=null,ka=0,t=K;for(;t!==null;)Js(t.alternate,t),t=t.return;K=null}}function Sa(t,e){var l=t.timeoutHandle;l!==-1&&(t.timeoutHandle=-1,Bm(l)),l=t.cancelPendingCommit,l!==null&&(t.cancelPendingCommit=null,l()),We=0,Cc(),rt=t,K=l=Be(t.current,null),J=e,nt=0,ie=null,rl=!1,va=Oa(t,e),Nc=!1,ba=ue=_c=Ll=dl=yt=0,Jt=sn=null,Mc=!1,(e&8)!==0&&(e|=e&32);var a=t.entangledLanes;if(a!==0)for(t=t.entanglements,a&=e;0<a;){var n=31-te(a),i=1<<n;e|=t[n],a&=~i}return Je=e,Xn(),l}function vr(t,e){L=null,b.H=en,e===sa||e===Wn?(e=Ho(),nt=3):e===qu?(e=Ho(),nt=4):nt=e===rc?8:e!==null&&typeof e=="object"&&typeof e.then=="function"?6:1,ie=e,K===null&&(yt=1,oi(t,de(e,t.current)))}function br(){var t=ae.current;return t===null?!0:(J&4194048)===J?pe===null:(J&62914560)===J||(J&536870912)!==0?t===pe:!1}function xr(){var t=b.H;return b.H=en,t===null?en:t}function Sr(){var t=b.A;return b.A=hm,t}function Si(){yt=4,rl||(J&4194048)!==J&&ae.current!==null||(va=!0),(dl&134217727)===0&&(Ll&134217727)===0||rt===null||gl(rt,J,ue,!1)}function Hc(t,e,l){var a=et;et|=2;var n=xr(),i=Sr();(rt!==t||J!==e)&&(bi=null,Sa(t,e)),e=!1;var u=yt;t:do try{if(nt!==0&&K!==null){var c=K,o=ie;switch(nt){case 8:Cc(),u=6;break t;case 3:case 2:case 9:case 6:ae.current===null&&(e=!0);var g=nt;if(nt=0,ie=null,za(t,c,o,g),l&&va){u=0;break t}break;default:g=nt,nt=0,ie=null,za(t,c,o,g)}}ym(),u=yt;break}catch(v){vr(t,v)}while(!0);return e&&t.shellSuspendCounter++,Ye=Cl=null,et=a,b.H=n,b.A=i,K===null&&(rt=null,J=0,Xn()),u}function ym(){for(;K!==null;)zr(K)}function vm(t,e){var l=et;et|=2;var a=xr(),n=Sr();rt!==t||J!==e?(bi=null,vi=It()+500,Sa(t,e)):va=Oa(t,e);t:do try{if(nt!==0&&K!==null){e=K;var i=ie;e:switch(nt){case 1:nt=0,ie=null,za(t,e,i,1);break;case 2:case 9:if(Uo(i)){nt=0,ie=null,Ar(e);break}e=function(){nt!==2&&nt!==9||rt!==t||(nt=7),Me(t)},i.then(e,e);break t;case 3:nt=7;break t;case 4:nt=5;break t;case 7:Uo(i)?(nt=0,ie=null,Ar(e)):(nt=0,ie=null,za(t,e,i,7));break;case 5:var u=null;switch(K.tag){case 26:u=K.memoizedState;case 5:case 27:var c=K;if(u?fd(u):c.stateNode.complete){nt=0,ie=null;var o=c.sibling;if(o!==null)K=o;else{var g=c.return;g!==null?(K=g,zi(g)):K=null}break e}}nt=0,ie=null,za(t,e,i,5);break;case 6:nt=0,ie=null,za(t,e,i,6);break;case 8:Cc(),yt=6;break t;default:throw Error(m(462))}}bm();break}catch(v){vr(t,v)}while(!0);return Ye=Cl=null,b.H=a,b.A=n,et=l,K!==null?0:(rt=null,J=0,Xn(),yt)}function bm(){for(;K!==null&&!Ld();)zr(K)}function zr(t){var e=Ks(t.alternate,t,Je);t.memoizedProps=t.pendingProps,e===null?zi(t):K=e}function Ar(t){var e=t,l=e.alternate;switch(e.tag){case 15:case 0:e=Gs(l,e,e.pendingProps,e.type,void 0,J);break;case 11:e=Gs(l,e,e.pendingProps,e.type.render,e.ref,J);break;case 5:Wu(e);default:Js(l,e),e=K=So(e,Je),e=Ks(l,e,Je)}t.memoizedProps=t.pendingProps,e===null?zi(t):K=e}function za(t,e,l,a){Ye=Cl=null,Wu(e),ra=null,ka=0;var n=e.return;try{if(cm(t,n,e,l,J)){yt=1,oi(t,de(l,t.current)),K=null;return}}catch(i){if(n!==null)throw K=n,i;yt=1,oi(t,de(l,t.current)),K=null;return}e.flags&32768?(I||a===1?t=!0:va||(J&536870912)!==0?t=!1:(rl=t=!0,(a===2||a===9||a===3||a===6)&&(a=ae.current,a!==null&&a.tag===13&&(a.flags|=16384))),jr(e,t)):zi(e)}function zi(t){var e=t;do{if((e.flags&32768)!==0){jr(e,rl);return}t=e.return;var l=sm(e.alternate,e,Je);if(l!==null){K=l;return}if(e=e.sibling,e!==null){K=e;return}K=e=t}while(e!==null);yt===0&&(yt=5)}function jr(t,e){do{var l=rm(t.alternate,t);if(l!==null){l.flags&=32767,K=l;return}if(l=t.return,l!==null&&(l.flags|=32768,l.subtreeFlags=0,l.deletions=null),!e&&(t=t.sibling,t!==null)){K=t;return}K=t=l}while(t!==null);yt=6,K=null}function Er(t,e,l,a,n,i,u,c,o){t.cancelPendingCommit=null;do Ai();while(Et!==0);if((et&6)!==0)throw Error(m(327));if(e!==null){if(e===t.current)throw Error(m(177));if(i=e.lanes|e.childLanes,i|=zu,Id(t,l,i,u,c,o),t===rt&&(K=rt=null,J=0),xa=e,hl=t,We=l,Oc=i,Dc=n,hr=a,(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,Am(En,function(){return Or(),null})):(t.callbackNode=null,t.callbackPriority=0),a=(e.flags&13878)!==0,(e.subtreeFlags&13878)!==0||a){a=b.T,b.T=null,n=T.p,T.p=2,u=et,et|=4;try{dm(t,e,l)}finally{et=u,T.p=n,b.T=a}}Et=1,Tr(),Nr(),_r()}}function Tr(){if(Et===1){Et=0;var t=hl,e=xa,l=(e.flags&13878)!==0;if((e.subtreeFlags&13878)!==0||l){l=b.T,b.T=null;var a=T.p;T.p=2;var n=et;et|=4;try{ur(e,t);var i=Kc,u=ro(t.containerInfo),c=i.focusedElem,o=i.selectionRange;if(u!==c&&c&&c.ownerDocument&&so(c.ownerDocument.documentElement,c)){if(o!==null&&yu(c)){var g=o.start,v=o.end;if(v===void 0&&(v=g),"selectionStart"in c)c.selectionStart=g,c.selectionEnd=Math.min(v,c.value.length);else{var S=c.ownerDocument||document,p=S&&S.defaultView||window;if(p.getSelection){var y=p.getSelection(),O=c.textContent.length,q=Math.min(o.start,O),ot=o.end===void 0?q:Math.min(o.end,O);!y.extend&&q>ot&&(u=ot,ot=q,q=u);var d=oo(c,q),s=oo(c,ot);if(d&&s&&(y.rangeCount!==1||y.anchorNode!==d.node||y.anchorOffset!==d.offset||y.focusNode!==s.node||y.focusOffset!==s.offset)){var h=S.createRange();h.setStart(d.node,d.offset),y.removeAllRanges(),q>ot?(y.addRange(h),y.extend(s.node,s.offset)):(h.setEnd(s.node,s.offset),y.addRange(h))}}}}for(S=[],y=c;y=y.parentNode;)y.nodeType===1&&S.push({element:y,left:y.scrollLeft,top:y.scrollTop});for(typeof c.focus=="function"&&c.focus(),c=0;c<S.length;c++){var x=S[c];x.element.scrollLeft=x.left,x.element.scrollTop=x.top}}Ri=!!Vc,Kc=Vc=null}finally{et=n,T.p=a,b.T=l}}t.current=e,Et=2}}function Nr(){if(Et===2){Et=0;var t=hl,e=xa,l=(e.flags&8772)!==0;if((e.subtreeFlags&8772)!==0||l){l=b.T,b.T=null;var a=T.p;T.p=2;var n=et;et|=4;try{er(t,e.alternate,e)}finally{et=n,T.p=a,b.T=l}}Et=3}}function _r(){if(Et===4||Et===3){Et=0,Qd();var t=hl,e=xa,l=We,a=hr;(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?Et=5:(Et=0,xa=hl=null,Mr(t,t.pendingLanes));var n=t.pendingLanes;if(n===0&&(ml=null),Ii(l),e=e.stateNode,Pt&&typeof Pt.onCommitFiberRoot=="function")try{Pt.onCommitFiberRoot(Ma,e,void 0,(e.current.flags&128)===128)}catch{}if(a!==null){e=b.T,n=T.p,T.p=2,b.T=null;try{for(var i=t.onRecoverableError,u=0;u<a.length;u++){var c=a[u];i(c.value,{componentStack:c.stack})}}finally{b.T=e,T.p=n}}(We&3)!==0&&Ai(),Me(t),n=t.pendingLanes,(l&261930)!==0&&(n&42)!==0?t===Uc?rn++:(rn=0,Uc=t):rn=0,dn(0)}}function Mr(t,e){(t.pooledCacheLanes&=e)===0&&(e=t.pooledCache,e!=null&&(t.pooledCache=null,Va(e)))}function Ai(){return Tr(),Nr(),_r(),Or()}function Or(){if(Et!==5)return!1;var t=hl,e=Oc;Oc=0;var l=Ii(We),a=b.T,n=T.p;try{T.p=32>l?32:l,b.T=null,l=Dc,Dc=null;var i=hl,u=We;if(Et=0,xa=hl=null,We=0,(et&6)!==0)throw Error(m(331));var c=et;if(et|=4,rr(i.current),fr(i,i.current,u,l),et=c,dn(0,!1),Pt&&typeof Pt.onPostCommitFiberRoot=="function")try{Pt.onPostCommitFiberRoot(Ma,i)}catch{}return!0}finally{T.p=n,b.T=a,Mr(t,e)}}function Dr(t,e,l){e=de(l,e),e=sc(t.stateNode,e,2),t=cl(t,e,2),t!==null&&(Da(t,2),Me(t))}function it(t,e,l){if(t.tag===3)Dr(t,t,l);else for(;e!==null;){if(e.tag===3){Dr(e,t,l);break}else if(e.tag===1){var a=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(ml===null||!ml.has(a))){t=de(l,t),l=Us(2),a=cl(e,l,2),a!==null&&(Cs(l,a,e,t),Da(a,2),Me(a));break}}e=e.return}}function Rc(t,e,l){var a=t.pingCache;if(a===null){a=t.pingCache=new gm;var n=new Set;a.set(e,n)}else n=a.get(e),n===void 0&&(n=new Set,a.set(e,n));n.has(l)||(Nc=!0,n.add(l),t=xm.bind(null,t,e,l),e.then(t,t))}function xm(t,e,l){var a=t.pingCache;a!==null&&a.delete(e),t.pingedLanes|=t.suspendedLanes&l,t.warmLanes&=~l,rt===t&&(J&l)===l&&(yt===4||yt===3&&(J&62914560)===J&&300>It()-yi?(et&2)===0&&Sa(t,0):_c|=l,ba===J&&(ba=0)),Me(t)}function Ur(t,e){e===0&&(e=Ef()),t=Ol(t,e),t!==null&&(Da(t,e),Me(t))}function Sm(t){var e=t.memoizedState,l=0;e!==null&&(l=e.retryLane),Ur(t,l)}function zm(t,e){var l=0;switch(t.tag){case 31:case 13:var a=t.stateNode,n=t.memoizedState;n!==null&&(l=n.retryLane);break;case 19:a=t.stateNode;break;case 22:a=t.stateNode._retryCache;break;default:throw Error(m(314))}a!==null&&a.delete(e),Ur(t,l)}function Am(t,e){return Ji(t,e)}var ji=null,Aa=null,Bc=!1,Ei=!1,qc=!1,pl=0;function Me(t){t!==Aa&&t.next===null&&(Aa===null?ji=Aa=t:Aa=Aa.next=t),Ei=!0,Bc||(Bc=!0,Em())}function dn(t,e){if(!qc&&Ei){qc=!0;do for(var l=!1,a=ji;a!==null;){if(t!==0){var n=a.pendingLanes;if(n===0)var i=0;else{var u=a.suspendedLanes,c=a.pingedLanes;i=(1<<31-te(42|t)+1)-1,i&=n&~(u&~c),i=i&201326741?i&201326741|1:i?i|2:0}i!==0&&(l=!0,Br(a,i))}else i=J,i=Mn(a,a===rt?i:0,a.cancelPendingCommit!==null||a.timeoutHandle!==-1),(i&3)===0||Oa(a,i)||(l=!0,Br(a,i));a=a.next}while(l);qc=!1}}function jm(){Cr()}function Cr(){Ei=Bc=!1;var t=0;pl!==0&&Rm()&&(t=pl);for(var e=It(),l=null,a=ji;a!==null;){var n=a.next,i=Hr(a,e);i===0?(a.next=null,l===null?ji=n:l.next=n,n===null&&(Aa=l)):(l=a,(t!==0||(i&3)!==0)&&(Ei=!0)),a=n}Et!==0&&Et!==5||dn(t),pl!==0&&(pl=0)}function Hr(t,e){for(var l=t.suspendedLanes,a=t.pingedLanes,n=t.expirationTimes,i=t.pendingLanes&-62914561;0<i;){var u=31-te(i),c=1<<u,o=n[u];o===-1?((c&l)===0||(c&a)!==0)&&(n[u]=$d(c,e)):o<=e&&(t.expiredLanes|=c),i&=~c}if(e=rt,l=J,l=Mn(t,t===e?l:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),a=t.callbackNode,l===0||t===e&&(nt===2||nt===9)||t.cancelPendingCommit!==null)return a!==null&&a!==null&&Wi(a),t.callbackNode=null,t.callbackPriority=0;if((l&3)===0||Oa(t,l)){if(e=l&-l,e===t.callbackPriority)return e;switch(a!==null&&Wi(a),Ii(l)){case 2:case 8:l=Af;break;case 32:l=En;break;case 268435456:l=jf;break;default:l=En}return a=Rr.bind(null,t),l=Ji(l,a),t.callbackPriority=e,t.callbackNode=l,e}return a!==null&&a!==null&&Wi(a),t.callbackPriority=2,t.callbackNode=null,2}function Rr(t,e){if(Et!==0&&Et!==5)return t.callbackNode=null,t.callbackPriority=0,null;var l=t.callbackNode;if(Ai()&&t.callbackNode!==l)return null;var a=J;return a=Mn(t,t===rt?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),a===0?null:(pr(t,a,e),Hr(t,It()),t.callbackNode!=null&&t.callbackNode===l?Rr.bind(null,t):null)}function Br(t,e){if(Ai())return null;pr(t,e,!0)}function Em(){qm(function(){(et&6)!==0?Ji(zf,jm):Cr()})}function Yc(){if(pl===0){var t=fa;t===0&&(t=Tn,Tn<<=1,(Tn&261888)===0&&(Tn=256)),pl=t}return pl}function qr(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Cn(""+t)}function Yr(t,e){var l=e.ownerDocument.createElement("input");return l.name=e.name,l.value=e.value,t.id&&l.setAttribute("form",t.id),e.parentNode.insertBefore(l,e),t=new FormData(t),l.parentNode.removeChild(l),t}function Tm(t,e,l,a,n){if(e==="submit"&&l&&l.stateNode===n){var i=qr((n[Qt]||null).action),u=a.submitter;u&&(e=(e=u[Qt]||null)?qr(e.formAction):u.getAttribute("formAction"),e!==null&&(i=e,u=null));var c=new qn("action","action",null,a,n);t.push({event:c,listeners:[{instance:null,listener:function(){if(a.defaultPrevented){if(pl!==0){var o=u?Yr(n,u):new FormData(n);nc(l,{pending:!0,data:o,method:n.method,action:i},null,o)}}else typeof i=="function"&&(c.preventDefault(),o=u?Yr(n,u):new FormData(n),nc(l,{pending:!0,data:o,method:n.method,action:i},i,o))},currentTarget:n}]})}}for(var wc=0;wc<Su.length;wc++){var Gc=Su[wc],Nm=Gc.toLowerCase(),_m=Gc[0].toUpperCase()+Gc.slice(1);xe(Nm,"on"+_m)}xe(go,"onAnimationEnd"),xe(po,"onAnimationIteration"),xe(yo,"onAnimationStart"),xe("dblclick","onDoubleClick"),xe("focusin","onFocus"),xe("focusout","onBlur"),xe(Z0,"onTransitionRun"),xe(V0,"onTransitionStart"),xe(K0,"onTransitionCancel"),xe(vo,"onTransitionEnd"),Jl("onMouseEnter",["mouseout","mouseover"]),Jl("onMouseLeave",["mouseout","mouseover"]),Jl("onPointerEnter",["pointerout","pointerover"]),Jl("onPointerLeave",["pointerout","pointerover"]),Tl("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Tl("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Tl("onBeforeInput",["compositionend","keypress","textInput","paste"]),Tl("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Tl("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Tl("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var mn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Mm=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(mn));function wr(t,e){e=(e&4)!==0;for(var l=0;l<t.length;l++){var a=t[l],n=a.event;a=a.listeners;t:{var i=void 0;if(e)for(var u=a.length-1;0<=u;u--){var c=a[u],o=c.instance,g=c.currentTarget;if(c=c.listener,o!==i&&n.isPropagationStopped())break t;i=c,n.currentTarget=g;try{i(n)}catch(v){Gn(v)}n.currentTarget=null,i=o}else for(u=0;u<a.length;u++){if(c=a[u],o=c.instance,g=c.currentTarget,c=c.listener,o!==i&&n.isPropagationStopped())break t;i=c,n.currentTarget=g;try{i(n)}catch(v){Gn(v)}n.currentTarget=null,i=o}}}}function k(t,e){var l=e[Pi];l===void 0&&(l=e[Pi]=new Set);var a=t+"__bubble";l.has(a)||(Gr(e,t,2,!1),l.add(a))}function Xc(t,e,l){var a=0;e&&(a|=4),Gr(l,t,a,e)}var Ti="_reactListening"+Math.random().toString(36).slice(2);function Lc(t){if(!t[Ti]){t[Ti]=!0,Uf.forEach(function(l){l!=="selectionchange"&&(Mm.has(l)||Xc(l,!1,t),Xc(l,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Ti]||(e[Ti]=!0,Xc("selectionchange",!1,e))}}function Gr(t,e,l,a){switch(gd(e)){case 2:var n=ah;break;case 8:n=nh;break;default:n=af}l=n.bind(null,e,l,t),n=void 0,!fu||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(n=!0),a?n!==void 0?t.addEventListener(e,l,{capture:!0,passive:n}):t.addEventListener(e,l,!0):n!==void 0?t.addEventListener(e,l,{passive:n}):t.addEventListener(e,l,!1)}function Qc(t,e,l,a,n){var i=a;if((e&1)===0&&(e&2)===0&&a!==null)t:for(;;){if(a===null)return;var u=a.tag;if(u===3||u===4){var c=a.stateNode.containerInfo;if(c===n)break;if(u===4)for(u=a.return;u!==null;){var o=u.tag;if((o===3||o===4)&&u.stateNode.containerInfo===n)return;u=u.return}for(;c!==null;){if(u=Vl(c),u===null)return;if(o=u.tag,o===5||o===6||o===26||o===27){a=i=u;continue t}c=c.parentNode}}a=a.return}Zf(function(){var g=i,v=uu(l),S=[];t:{var p=bo.get(t);if(p!==void 0){var y=qn,O=t;switch(t){case"keypress":if(Rn(l)===0)break t;case"keydown":case"keyup":y=z0;break;case"focusin":O="focus",y=du;break;case"focusout":O="blur",y=du;break;case"beforeblur":case"afterblur":y=du;break;case"click":if(l.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=kf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=s0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=E0;break;case go:case po:case yo:y=m0;break;case vo:y=N0;break;case"scroll":case"scrollend":y=f0;break;case"wheel":y=M0;break;case"copy":case"cut":case"paste":y=g0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=Wf;break;case"toggle":case"beforetoggle":y=D0}var q=(e&4)!==0,ot=!q&&(t==="scroll"||t==="scrollend"),d=q?p!==null?p+"Capture":null:p;q=[];for(var s=g,h;s!==null;){var x=s;if(h=x.stateNode,x=x.tag,x!==5&&x!==26&&x!==27||h===null||d===null||(x=Ha(s,d),x!=null&&q.push(hn(s,x,h))),ot)break;s=s.return}0<q.length&&(p=new y(p,O,null,l,v),S.push({event:p,listeners:q}))}}if((e&7)===0){t:{if(p=t==="mouseover"||t==="pointerover",y=t==="mouseout"||t==="pointerout",p&&l!==iu&&(O=l.relatedTarget||l.fromElement)&&(Vl(O)||O[Zl]))break t;if((y||p)&&(p=v.window===v?v:(p=v.ownerDocument)?p.defaultView||p.parentWindow:window,y?(O=l.relatedTarget||l.toElement,y=g,O=O?Vl(O):null,O!==null&&(ot=B(O),q=O.tag,O!==ot||q!==5&&q!==27&&q!==6)&&(O=null)):(y=null,O=g),y!==O)){if(q=kf,x="onMouseLeave",d="onMouseEnter",s="mouse",(t==="pointerout"||t==="pointerover")&&(q=Wf,x="onPointerLeave",d="onPointerEnter",s="pointer"),ot=y==null?p:Ca(y),h=O==null?p:Ca(O),p=new q(x,s+"leave",y,l,v),p.target=ot,p.relatedTarget=h,x=null,Vl(v)===g&&(q=new q(d,s+"enter",O,l,v),q.target=h,q.relatedTarget=ot,x=q),ot=x,y&&O)e:{for(q=Om,d=y,s=O,h=0,x=d;x;x=q(x))h++;x=0;for(var R=s;R;R=q(R))x++;for(;0<h-x;)d=q(d),h--;for(;0<x-h;)s=q(s),x--;for(;h--;){if(d===s||s!==null&&d===s.alternate){q=d;break e}d=q(d),s=q(s)}q=null}else q=null;y!==null&&Xr(S,p,y,q,!1),O!==null&&ot!==null&&Xr(S,ot,O,q,!0)}}t:{if(p=g?Ca(g):window,y=p.nodeName&&p.nodeName.toLowerCase(),y==="select"||y==="input"&&p.type==="file")var P=ao;else if(eo(p))if(no)P=X0;else{P=w0;var C=Y0}else y=p.nodeName,!y||y.toLowerCase()!=="input"||p.type!=="checkbox"&&p.type!=="radio"?g&&nu(g.elementType)&&(P=ao):P=G0;if(P&&(P=P(t,g))){lo(S,P,l,v);break t}C&&C(t,p,g),t==="focusout"&&g&&p.type==="number"&&g.memoizedProps.value!=null&&au(p,"number",p.value)}switch(C=g?Ca(g):window,t){case"focusin":(eo(C)||C.contentEditable==="true")&&(ta=C,vu=g,La=null);break;case"focusout":La=vu=ta=null;break;case"mousedown":bu=!0;break;case"contextmenu":case"mouseup":case"dragend":bu=!1,mo(S,l,v);break;case"selectionchange":if(Q0)break;case"keydown":case"keyup":mo(S,l,v)}var Z;if(hu)t:{switch(t){case"compositionstart":var W="onCompositionStart";break t;case"compositionend":W="onCompositionEnd";break t;case"compositionupdate":W="onCompositionUpdate";break t}W=void 0}else Pl?Pf(t,l)&&(W="onCompositionEnd"):t==="keydown"&&l.keyCode===229&&(W="onCompositionStart");W&&(Ff&&l.locale!=="ko"&&(Pl||W!=="onCompositionStart"?W==="onCompositionEnd"&&Pl&&(Z=Vf()):(tl=v,ou="value"in tl?tl.value:tl.textContent,Pl=!0)),C=Ni(g,W),0<C.length&&(W=new Jf(W,t,null,l,v),S.push({event:W,listeners:C}),Z?W.data=Z:(Z=to(l),Z!==null&&(W.data=Z)))),(Z=C0?H0(t,l):R0(t,l))&&(W=Ni(g,"onBeforeInput"),0<W.length&&(C=new Jf("onBeforeInput","beforeinput",null,l,v),S.push({event:C,listeners:W}),C.data=Z)),Tm(S,t,g,l,v)}wr(S,e)})}function hn(t,e,l){return{instance:t,listener:e,currentTarget:l}}function Ni(t,e){for(var l=e+"Capture",a=[];t!==null;){var n=t,i=n.stateNode;if(n=n.tag,n!==5&&n!==26&&n!==27||i===null||(n=Ha(t,l),n!=null&&a.unshift(hn(t,n,i)),n=Ha(t,e),n!=null&&a.push(hn(t,n,i))),t.tag===3)return a;t=t.return}return[]}function Om(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function Xr(t,e,l,a,n){for(var i=e._reactName,u=[];l!==null&&l!==a;){var c=l,o=c.alternate,g=c.stateNode;if(c=c.tag,o!==null&&o===a)break;c!==5&&c!==26&&c!==27||g===null||(o=g,n?(g=Ha(l,i),g!=null&&u.unshift(hn(l,g,o))):n||(g=Ha(l,i),g!=null&&u.push(hn(l,g,o)))),l=l.return}u.length!==0&&t.push({event:e,listeners:u})}var Dm=/\r\n?/g,Um=/\u0000|\uFFFD/g;function Lr(t){return(typeof t=="string"?t:""+t).replace(Dm,`
`).replace(Um,"")}function Qr(t,e){return e=Lr(e),Lr(t)===e}function ft(t,e,l,a,n,i){switch(l){case"children":typeof a=="string"?e==="body"||e==="textarea"&&a===""||Fl(t,a):(typeof a=="number"||typeof a=="bigint")&&e!=="body"&&Fl(t,""+a);break;case"className":Dn(t,"class",a);break;case"tabIndex":Dn(t,"tabindex",a);break;case"dir":case"role":case"viewBox":case"width":case"height":Dn(t,l,a);break;case"style":Lf(t,a,i);break;case"data":if(e!=="object"){Dn(t,"data",a);break}case"src":case"href":if(a===""&&(e!=="a"||l!=="href")){t.removeAttribute(l);break}if(a==null||typeof a=="function"||typeof a=="symbol"||typeof a=="boolean"){t.removeAttribute(l);break}a=Cn(""+a),t.setAttribute(l,a);break;case"action":case"formAction":if(typeof a=="function"){t.setAttribute(l,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof i=="function"&&(l==="formAction"?(e!=="input"&&ft(t,e,"name",n.name,n,null),ft(t,e,"formEncType",n.formEncType,n,null),ft(t,e,"formMethod",n.formMethod,n,null),ft(t,e,"formTarget",n.formTarget,n,null)):(ft(t,e,"encType",n.encType,n,null),ft(t,e,"method",n.method,n,null),ft(t,e,"target",n.target,n,null)));if(a==null||typeof a=="symbol"||typeof a=="boolean"){t.removeAttribute(l);break}a=Cn(""+a),t.setAttribute(l,a);break;case"onClick":a!=null&&(t.onclick=He);break;case"onScroll":a!=null&&k("scroll",t);break;case"onScrollEnd":a!=null&&k("scrollend",t);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(m(61));if(l=a.__html,l!=null){if(n.children!=null)throw Error(m(60));t.innerHTML=l}}break;case"multiple":t.multiple=a&&typeof a!="function"&&typeof a!="symbol";break;case"muted":t.muted=a&&typeof a!="function"&&typeof a!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(a==null||typeof a=="function"||typeof a=="boolean"||typeof a=="symbol"){t.removeAttribute("xlink:href");break}l=Cn(""+a),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",l);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":a!=null&&typeof a!="function"&&typeof a!="symbol"?t.setAttribute(l,""+a):t.removeAttribute(l);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":a&&typeof a!="function"&&typeof a!="symbol"?t.setAttribute(l,""):t.removeAttribute(l);break;case"capture":case"download":a===!0?t.setAttribute(l,""):a!==!1&&a!=null&&typeof a!="function"&&typeof a!="symbol"?t.setAttribute(l,a):t.removeAttribute(l);break;case"cols":case"rows":case"size":case"span":a!=null&&typeof a!="function"&&typeof a!="symbol"&&!isNaN(a)&&1<=a?t.setAttribute(l,a):t.removeAttribute(l);break;case"rowSpan":case"start":a==null||typeof a=="function"||typeof a=="symbol"||isNaN(a)?t.removeAttribute(l):t.setAttribute(l,a);break;case"popover":k("beforetoggle",t),k("toggle",t),On(t,"popover",a);break;case"xlinkActuate":Ce(t,"http://www.w3.org/1999/xlink","xlink:actuate",a);break;case"xlinkArcrole":Ce(t,"http://www.w3.org/1999/xlink","xlink:arcrole",a);break;case"xlinkRole":Ce(t,"http://www.w3.org/1999/xlink","xlink:role",a);break;case"xlinkShow":Ce(t,"http://www.w3.org/1999/xlink","xlink:show",a);break;case"xlinkTitle":Ce(t,"http://www.w3.org/1999/xlink","xlink:title",a);break;case"xlinkType":Ce(t,"http://www.w3.org/1999/xlink","xlink:type",a);break;case"xmlBase":Ce(t,"http://www.w3.org/XML/1998/namespace","xml:base",a);break;case"xmlLang":Ce(t,"http://www.w3.org/XML/1998/namespace","xml:lang",a);break;case"xmlSpace":Ce(t,"http://www.w3.org/XML/1998/namespace","xml:space",a);break;case"is":On(t,"is",a);break;case"innerText":case"textContent":break;default:(!(2<l.length)||l[0]!=="o"&&l[0]!=="O"||l[1]!=="n"&&l[1]!=="N")&&(l=u0.get(l)||l,On(t,l,a))}}function Zc(t,e,l,a,n,i){switch(l){case"style":Lf(t,a,i);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(m(61));if(l=a.__html,l!=null){if(n.children!=null)throw Error(m(60));t.innerHTML=l}}break;case"children":typeof a=="string"?Fl(t,a):(typeof a=="number"||typeof a=="bigint")&&Fl(t,""+a);break;case"onScroll":a!=null&&k("scroll",t);break;case"onScrollEnd":a!=null&&k("scrollend",t);break;case"onClick":a!=null&&(t.onclick=He);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Cf.hasOwnProperty(l))t:{if(l[0]==="o"&&l[1]==="n"&&(n=l.endsWith("Capture"),e=l.slice(2,n?l.length-7:void 0),i=t[Qt]||null,i=i!=null?i[l]:null,typeof i=="function"&&t.removeEventListener(e,i,n),typeof a=="function")){typeof i!="function"&&i!==null&&(l in t?t[l]=null:t.hasAttribute(l)&&t.removeAttribute(l)),t.addEventListener(e,a,n);break t}l in t?t[l]=a:a===!0?t.setAttribute(l,""):On(t,l,a)}}}function Ut(t,e,l){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":k("error",t),k("load",t);var a=!1,n=!1,i;for(i in l)if(l.hasOwnProperty(i)){var u=l[i];if(u!=null)switch(i){case"src":a=!0;break;case"srcSet":n=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(m(137,e));default:ft(t,e,i,u,l,null)}}n&&ft(t,e,"srcSet",l.srcSet,l,null),a&&ft(t,e,"src",l.src,l,null);return;case"input":k("invalid",t);var c=i=u=n=null,o=null,g=null;for(a in l)if(l.hasOwnProperty(a)){var v=l[a];if(v!=null)switch(a){case"name":n=v;break;case"type":u=v;break;case"checked":o=v;break;case"defaultChecked":g=v;break;case"value":i=v;break;case"defaultValue":c=v;break;case"children":case"dangerouslySetInnerHTML":if(v!=null)throw Error(m(137,e));break;default:ft(t,e,a,v,l,null)}}Yf(t,i,c,o,g,u,n,!1);return;case"select":k("invalid",t),a=u=i=null;for(n in l)if(l.hasOwnProperty(n)&&(c=l[n],c!=null))switch(n){case"value":i=c;break;case"defaultValue":u=c;break;case"multiple":a=c;default:ft(t,e,n,c,l,null)}e=i,l=u,t.multiple=!!a,e!=null?Wl(t,!!a,e,!1):l!=null&&Wl(t,!!a,l,!0);return;case"textarea":k("invalid",t),i=n=a=null;for(u in l)if(l.hasOwnProperty(u)&&(c=l[u],c!=null))switch(u){case"value":a=c;break;case"defaultValue":n=c;break;case"children":i=c;break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(m(91));break;default:ft(t,e,u,c,l,null)}Gf(t,a,n,i);return;case"option":for(o in l)l.hasOwnProperty(o)&&(a=l[o],a!=null)&&(o==="selected"?t.selected=a&&typeof a!="function"&&typeof a!="symbol":ft(t,e,o,a,l,null));return;case"dialog":k("beforetoggle",t),k("toggle",t),k("cancel",t),k("close",t);break;case"iframe":case"object":k("load",t);break;case"video":case"audio":for(a=0;a<mn.length;a++)k(mn[a],t);break;case"image":k("error",t),k("load",t);break;case"details":k("toggle",t);break;case"embed":case"source":case"link":k("error",t),k("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(g in l)if(l.hasOwnProperty(g)&&(a=l[g],a!=null))switch(g){case"children":case"dangerouslySetInnerHTML":throw Error(m(137,e));default:ft(t,e,g,a,l,null)}return;default:if(nu(e)){for(v in l)l.hasOwnProperty(v)&&(a=l[v],a!==void 0&&Zc(t,e,v,a,l,void 0));return}}for(c in l)l.hasOwnProperty(c)&&(a=l[c],a!=null&&ft(t,e,c,a,l,null))}function Cm(t,e,l,a){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var n=null,i=null,u=null,c=null,o=null,g=null,v=null;for(y in l){var S=l[y];if(l.hasOwnProperty(y)&&S!=null)switch(y){case"checked":break;case"value":break;case"defaultValue":o=S;default:a.hasOwnProperty(y)||ft(t,e,y,null,a,S)}}for(var p in a){var y=a[p];if(S=l[p],a.hasOwnProperty(p)&&(y!=null||S!=null))switch(p){case"type":i=y;break;case"name":n=y;break;case"checked":g=y;break;case"defaultChecked":v=y;break;case"value":u=y;break;case"defaultValue":c=y;break;case"children":case"dangerouslySetInnerHTML":if(y!=null)throw Error(m(137,e));break;default:y!==S&&ft(t,e,p,y,a,S)}}lu(t,u,c,o,g,v,i,n);return;case"select":y=u=c=p=null;for(i in l)if(o=l[i],l.hasOwnProperty(i)&&o!=null)switch(i){case"value":break;case"multiple":y=o;default:a.hasOwnProperty(i)||ft(t,e,i,null,a,o)}for(n in a)if(i=a[n],o=l[n],a.hasOwnProperty(n)&&(i!=null||o!=null))switch(n){case"value":p=i;break;case"defaultValue":c=i;break;case"multiple":u=i;default:i!==o&&ft(t,e,n,i,a,o)}e=c,l=u,a=y,p!=null?Wl(t,!!l,p,!1):!!a!=!!l&&(e!=null?Wl(t,!!l,e,!0):Wl(t,!!l,l?[]:"",!1));return;case"textarea":y=p=null;for(c in l)if(n=l[c],l.hasOwnProperty(c)&&n!=null&&!a.hasOwnProperty(c))switch(c){case"value":break;case"children":break;default:ft(t,e,c,null,a,n)}for(u in a)if(n=a[u],i=l[u],a.hasOwnProperty(u)&&(n!=null||i!=null))switch(u){case"value":p=n;break;case"defaultValue":y=n;break;case"children":break;case"dangerouslySetInnerHTML":if(n!=null)throw Error(m(91));break;default:n!==i&&ft(t,e,u,n,a,i)}wf(t,p,y);return;case"option":for(var O in l)p=l[O],l.hasOwnProperty(O)&&p!=null&&!a.hasOwnProperty(O)&&(O==="selected"?t.selected=!1:ft(t,e,O,null,a,p));for(o in a)p=a[o],y=l[o],a.hasOwnProperty(o)&&p!==y&&(p!=null||y!=null)&&(o==="selected"?t.selected=p&&typeof p!="function"&&typeof p!="symbol":ft(t,e,o,p,a,y));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var q in l)p=l[q],l.hasOwnProperty(q)&&p!=null&&!a.hasOwnProperty(q)&&ft(t,e,q,null,a,p);for(g in a)if(p=a[g],y=l[g],a.hasOwnProperty(g)&&p!==y&&(p!=null||y!=null))switch(g){case"children":case"dangerouslySetInnerHTML":if(p!=null)throw Error(m(137,e));break;default:ft(t,e,g,p,a,y)}return;default:if(nu(e)){for(var ot in l)p=l[ot],l.hasOwnProperty(ot)&&p!==void 0&&!a.hasOwnProperty(ot)&&Zc(t,e,ot,void 0,a,p);for(v in a)p=a[v],y=l[v],!a.hasOwnProperty(v)||p===y||p===void 0&&y===void 0||Zc(t,e,v,p,a,y);return}}for(var d in l)p=l[d],l.hasOwnProperty(d)&&p!=null&&!a.hasOwnProperty(d)&&ft(t,e,d,null,a,p);for(S in a)p=a[S],y=l[S],!a.hasOwnProperty(S)||p===y||p==null&&y==null||ft(t,e,S,p,a,y)}function Zr(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Hm(){if(typeof performance.getEntriesByType=="function"){for(var t=0,e=0,l=performance.getEntriesByType("resource"),a=0;a<l.length;a++){var n=l[a],i=n.transferSize,u=n.initiatorType,c=n.duration;if(i&&c&&Zr(u)){for(u=0,c=n.responseEnd,a+=1;a<l.length;a++){var o=l[a],g=o.startTime;if(g>c)break;var v=o.transferSize,S=o.initiatorType;v&&Zr(S)&&(o=o.responseEnd,u+=v*(o<c?1:(c-g)/(o-g)))}if(--a,e+=8*(i+u)/(n.duration/1e3),t++,10<t)break}}if(0<t)return e/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var Vc=null,Kc=null;function _i(t){return t.nodeType===9?t:t.ownerDocument}function Vr(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Kr(t,e){if(t===0)switch(e){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&e==="foreignObject"?0:t}function kc(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.children=="bigint"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Jc=null;function Rm(){var t=window.event;return t&&t.type==="popstate"?t===Jc?!1:(Jc=t,!0):(Jc=null,!1)}var kr=typeof setTimeout=="function"?setTimeout:void 0,Bm=typeof clearTimeout=="function"?clearTimeout:void 0,Jr=typeof Promise=="function"?Promise:void 0,qm=typeof queueMicrotask=="function"?queueMicrotask:typeof Jr<"u"?function(t){return Jr.resolve(null).then(t).catch(Ym)}:kr;function Ym(t){setTimeout(function(){throw t})}function yl(t){return t==="head"}function Wr(t,e){var l=e,a=0;do{var n=l.nextSibling;if(t.removeChild(l),n&&n.nodeType===8)if(l=n.data,l==="/$"||l==="/&"){if(a===0){t.removeChild(n),Na(e);return}a--}else if(l==="$"||l==="$?"||l==="$~"||l==="$!"||l==="&")a++;else if(l==="html")gn(t.ownerDocument.documentElement);else if(l==="head"){l=t.ownerDocument.head,gn(l);for(var i=l.firstChild;i;){var u=i.nextSibling,c=i.nodeName;i[Ua]||c==="SCRIPT"||c==="STYLE"||c==="LINK"&&i.rel.toLowerCase()==="stylesheet"||l.removeChild(i),i=u}}else l==="body"&&gn(t.ownerDocument.body);l=n}while(l);Na(e)}function Fr(t,e){var l=t;t=0;do{var a=l.nextSibling;if(l.nodeType===1?e?(l._stashedDisplay=l.style.display,l.style.display="none"):(l.style.display=l._stashedDisplay||"",l.getAttribute("style")===""&&l.removeAttribute("style")):l.nodeType===3&&(e?(l._stashedText=l.nodeValue,l.nodeValue=""):l.nodeValue=l._stashedText||""),a&&a.nodeType===8)if(l=a.data,l==="/$"){if(t===0)break;t--}else l!=="$"&&l!=="$?"&&l!=="$~"&&l!=="$!"||t++;l=a}while(l)}function Wc(t){var e=t.firstChild;for(e&&e.nodeType===10&&(e=e.nextSibling);e;){var l=e;switch(e=e.nextSibling,l.nodeName){case"HTML":case"HEAD":case"BODY":Wc(l),tu(l);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(l.rel.toLowerCase()==="stylesheet")continue}t.removeChild(l)}}function wm(t,e,l,a){for(;t.nodeType===1;){var n=l;if(t.nodeName.toLowerCase()!==e.toLowerCase()){if(!a&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(a){if(!t[Ua])switch(e){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(i=t.getAttribute("rel"),i==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(i!==n.rel||t.getAttribute("href")!==(n.href==null||n.href===""?null:n.href)||t.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin)||t.getAttribute("title")!==(n.title==null?null:n.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(i=t.getAttribute("src"),(i!==(n.src==null?null:n.src)||t.getAttribute("type")!==(n.type==null?null:n.type)||t.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin))&&i&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(e==="input"&&t.type==="hidden"){var i=n.name==null?null:""+n.name;if(n.type==="hidden"&&t.getAttribute("name")===i)return t}else return t;if(t=ye(t.nextSibling),t===null)break}return null}function Gm(t,e,l){if(e==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!l||(t=ye(t.nextSibling),t===null))return null;return t}function $r(t,e){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!e||(t=ye(t.nextSibling),t===null))return null;return t}function Fc(t){return t.data==="$?"||t.data==="$~"}function $c(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function Xm(t,e){var l=t.ownerDocument;if(t.data==="$~")t._reactRetry=e;else if(t.data!=="$?"||l.readyState!=="loading")e();else{var a=function(){e(),l.removeEventListener("DOMContentLoaded",a)};l.addEventListener("DOMContentLoaded",a),t._reactRetry=a}}function ye(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?"||e==="$~"||e==="&"||e==="F!"||e==="F")break;if(e==="/$"||e==="/&")return null}}return t}var Ic=null;function Ir(t){t=t.nextSibling;for(var e=0;t;){if(t.nodeType===8){var l=t.data;if(l==="/$"||l==="/&"){if(e===0)return ye(t.nextSibling);e--}else l!=="$"&&l!=="$!"&&l!=="$?"&&l!=="$~"&&l!=="&"||e++}t=t.nextSibling}return null}function Pr(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var l=t.data;if(l==="$"||l==="$!"||l==="$?"||l==="$~"||l==="&"){if(e===0)return t;e--}else l!=="/$"&&l!=="/&"||e++}t=t.previousSibling}return null}function td(t,e,l){switch(e=_i(l),t){case"html":if(t=e.documentElement,!t)throw Error(m(452));return t;case"head":if(t=e.head,!t)throw Error(m(453));return t;case"body":if(t=e.body,!t)throw Error(m(454));return t;default:throw Error(m(451))}}function gn(t){for(var e=t.attributes;e.length;)t.removeAttributeNode(e[0]);tu(t)}var ve=new Map,ed=new Set;function Mi(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var Fe=T.d;T.d={f:Lm,r:Qm,D:Zm,C:Vm,L:Km,m:km,X:Wm,S:Jm,M:Fm};function Lm(){var t=Fe.f(),e=xi();return t||e}function Qm(t){var e=Kl(t);e!==null&&e.tag===5&&e.type==="form"?vs(e):Fe.r(t)}var ja=typeof document>"u"?null:document;function ld(t,e,l){var a=ja;if(a&&typeof e=="string"&&e){var n=se(e);n='link[rel="'+t+'"][href="'+n+'"]',typeof l=="string"&&(n+='[crossorigin="'+l+'"]'),ed.has(n)||(ed.add(n),t={rel:t,crossOrigin:l,href:e},a.querySelector(n)===null&&(e=a.createElement("link"),Ut(e,"link",t),Tt(e),a.head.appendChild(e)))}}function Zm(t){Fe.D(t),ld("dns-prefetch",t,null)}function Vm(t,e){Fe.C(t,e),ld("preconnect",t,e)}function Km(t,e,l){Fe.L(t,e,l);var a=ja;if(a&&t&&e){var n='link[rel="preload"][as="'+se(e)+'"]';e==="image"&&l&&l.imageSrcSet?(n+='[imagesrcset="'+se(l.imageSrcSet)+'"]',typeof l.imageSizes=="string"&&(n+='[imagesizes="'+se(l.imageSizes)+'"]')):n+='[href="'+se(t)+'"]';var i=n;switch(e){case"style":i=Ea(t);break;case"script":i=Ta(t)}ve.has(i)||(t=H({rel:"preload",href:e==="image"&&l&&l.imageSrcSet?void 0:t,as:e},l),ve.set(i,t),a.querySelector(n)!==null||e==="style"&&a.querySelector(pn(i))||e==="script"&&a.querySelector(yn(i))||(e=a.createElement("link"),Ut(e,"link",t),Tt(e),a.head.appendChild(e)))}}function km(t,e){Fe.m(t,e);var l=ja;if(l&&t){var a=e&&typeof e.as=="string"?e.as:"script",n='link[rel="modulepreload"][as="'+se(a)+'"][href="'+se(t)+'"]',i=n;switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":i=Ta(t)}if(!ve.has(i)&&(t=H({rel:"modulepreload",href:t},e),ve.set(i,t),l.querySelector(n)===null)){switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(l.querySelector(yn(i)))return}a=l.createElement("link"),Ut(a,"link",t),Tt(a),l.head.appendChild(a)}}}function Jm(t,e,l){Fe.S(t,e,l);var a=ja;if(a&&t){var n=kl(a).hoistableStyles,i=Ea(t);e=e||"default";var u=n.get(i);if(!u){var c={loading:0,preload:null};if(u=a.querySelector(pn(i)))c.loading=5;else{t=H({rel:"stylesheet",href:t,"data-precedence":e},l),(l=ve.get(i))&&Pc(t,l);var o=u=a.createElement("link");Tt(o),Ut(o,"link",t),o._p=new Promise(function(g,v){o.onload=g,o.onerror=v}),o.addEventListener("load",function(){c.loading|=1}),o.addEventListener("error",function(){c.loading|=2}),c.loading|=4,Oi(u,e,a)}u={type:"stylesheet",instance:u,count:1,state:c},n.set(i,u)}}}function Wm(t,e){Fe.X(t,e);var l=ja;if(l&&t){var a=kl(l).hoistableScripts,n=Ta(t),i=a.get(n);i||(i=l.querySelector(yn(n)),i||(t=H({src:t,async:!0},e),(e=ve.get(n))&&tf(t,e),i=l.createElement("script"),Tt(i),Ut(i,"link",t),l.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},a.set(n,i))}}function Fm(t,e){Fe.M(t,e);var l=ja;if(l&&t){var a=kl(l).hoistableScripts,n=Ta(t),i=a.get(n);i||(i=l.querySelector(yn(n)),i||(t=H({src:t,async:!0,type:"module"},e),(e=ve.get(n))&&tf(t,e),i=l.createElement("script"),Tt(i),Ut(i,"link",t),l.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},a.set(n,i))}}function ad(t,e,l,a){var n=(n=V.current)?Mi(n):null;if(!n)throw Error(m(446));switch(t){case"meta":case"title":return null;case"style":return typeof l.precedence=="string"&&typeof l.href=="string"?(e=Ea(l.href),l=kl(n).hoistableStyles,a=l.get(e),a||(a={type:"style",instance:null,count:0,state:null},l.set(e,a)),a):{type:"void",instance:null,count:0,state:null};case"link":if(l.rel==="stylesheet"&&typeof l.href=="string"&&typeof l.precedence=="string"){t=Ea(l.href);var i=kl(n).hoistableStyles,u=i.get(t);if(u||(n=n.ownerDocument||n,u={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},i.set(t,u),(i=n.querySelector(pn(t)))&&!i._p&&(u.instance=i,u.state.loading=5),ve.has(t)||(l={rel:"preload",as:"style",href:l.href,crossOrigin:l.crossOrigin,integrity:l.integrity,media:l.media,hrefLang:l.hrefLang,referrerPolicy:l.referrerPolicy},ve.set(t,l),i||$m(n,t,l,u.state))),e&&a===null)throw Error(m(528,""));return u}if(e&&a!==null)throw Error(m(529,""));return null;case"script":return e=l.async,l=l.src,typeof l=="string"&&e&&typeof e!="function"&&typeof e!="symbol"?(e=Ta(l),l=kl(n).hoistableScripts,a=l.get(e),a||(a={type:"script",instance:null,count:0,state:null},l.set(e,a)),a):{type:"void",instance:null,count:0,state:null};default:throw Error(m(444,t))}}function Ea(t){return'href="'+se(t)+'"'}function pn(t){return'link[rel="stylesheet"]['+t+"]"}function nd(t){return H({},t,{"data-precedence":t.precedence,precedence:null})}function $m(t,e,l,a){t.querySelector('link[rel="preload"][as="style"]['+e+"]")?a.loading=1:(e=t.createElement("link"),a.preload=e,e.addEventListener("load",function(){return a.loading|=1}),e.addEventListener("error",function(){return a.loading|=2}),Ut(e,"link",l),Tt(e),t.head.appendChild(e))}function Ta(t){return'[src="'+se(t)+'"]'}function yn(t){return"script[async]"+t}function id(t,e,l){if(e.count++,e.instance===null)switch(e.type){case"style":var a=t.querySelector('style[data-href~="'+se(l.href)+'"]');if(a)return e.instance=a,Tt(a),a;var n=H({},l,{"data-href":l.href,"data-precedence":l.precedence,href:null,precedence:null});return a=(t.ownerDocument||t).createElement("style"),Tt(a),Ut(a,"style",n),Oi(a,l.precedence,t),e.instance=a;case"stylesheet":n=Ea(l.href);var i=t.querySelector(pn(n));if(i)return e.state.loading|=4,e.instance=i,Tt(i),i;a=nd(l),(n=ve.get(n))&&Pc(a,n),i=(t.ownerDocument||t).createElement("link"),Tt(i);var u=i;return u._p=new Promise(function(c,o){u.onload=c,u.onerror=o}),Ut(i,"link",a),e.state.loading|=4,Oi(i,l.precedence,t),e.instance=i;case"script":return i=Ta(l.src),(n=t.querySelector(yn(i)))?(e.instance=n,Tt(n),n):(a=l,(n=ve.get(i))&&(a=H({},l),tf(a,n)),t=t.ownerDocument||t,n=t.createElement("script"),Tt(n),Ut(n,"link",a),t.head.appendChild(n),e.instance=n);case"void":return null;default:throw Error(m(443,e.type))}else e.type==="stylesheet"&&(e.state.loading&4)===0&&(a=e.instance,e.state.loading|=4,Oi(a,l.precedence,t));return e.instance}function Oi(t,e,l){for(var a=l.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),n=a.length?a[a.length-1]:null,i=n,u=0;u<a.length;u++){var c=a[u];if(c.dataset.precedence===e)i=c;else if(i!==n)break}i?i.parentNode.insertBefore(t,i.nextSibling):(e=l.nodeType===9?l.head:l,e.insertBefore(t,e.firstChild))}function Pc(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.title==null&&(t.title=e.title)}function tf(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.integrity==null&&(t.integrity=e.integrity)}var Di=null;function ud(t,e,l){if(Di===null){var a=new Map,n=Di=new Map;n.set(l,a)}else n=Di,a=n.get(l),a||(a=new Map,n.set(l,a));if(a.has(t))return a;for(a.set(t,null),l=l.getElementsByTagName(t),n=0;n<l.length;n++){var i=l[n];if(!(i[Ua]||i[_t]||t==="link"&&i.getAttribute("rel")==="stylesheet")&&i.namespaceURI!=="http://www.w3.org/2000/svg"){var u=i.getAttribute(e)||"";u=t+u;var c=a.get(u);c?c.push(i):a.set(u,[i])}}return a}function cd(t,e,l){t=t.ownerDocument||t,t.head.insertBefore(l,e==="title"?t.querySelector("head > title"):null)}function Im(t,e,l){if(l===1||e.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof e.precedence!="string"||typeof e.href!="string"||e.href==="")break;return!0;case"link":if(typeof e.rel!="string"||typeof e.href!="string"||e.href===""||e.onLoad||e.onError)break;return e.rel==="stylesheet"?(t=e.disabled,typeof e.precedence=="string"&&t==null):!0;case"script":if(e.async&&typeof e.async!="function"&&typeof e.async!="symbol"&&!e.onLoad&&!e.onError&&e.src&&typeof e.src=="string")return!0}return!1}function fd(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function Pm(t,e,l,a){if(l.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(l.state.loading&4)===0){if(l.instance===null){var n=Ea(a.href),i=e.querySelector(pn(n));if(i){e=i._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(t.count++,t=Ui.bind(t),e.then(t,t)),l.state.loading|=4,l.instance=i,Tt(i);return}i=e.ownerDocument||e,a=nd(a),(n=ve.get(n))&&Pc(a,n),i=i.createElement("link"),Tt(i);var u=i;u._p=new Promise(function(c,o){u.onload=c,u.onerror=o}),Ut(i,"link",a),l.instance=i}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(l,e),(e=l.state.preload)&&(l.state.loading&3)===0&&(t.count++,l=Ui.bind(t),e.addEventListener("load",l),e.addEventListener("error",l))}}var ef=0;function th(t,e){return t.stylesheets&&t.count===0&&Hi(t,t.stylesheets),0<t.count||0<t.imgCount?function(l){var a=setTimeout(function(){if(t.stylesheets&&Hi(t,t.stylesheets),t.unsuspend){var i=t.unsuspend;t.unsuspend=null,i()}},6e4+e);0<t.imgBytes&&ef===0&&(ef=62500*Hm());var n=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&Hi(t,t.stylesheets),t.unsuspend)){var i=t.unsuspend;t.unsuspend=null,i()}},(t.imgBytes>ef?50:800)+e);return t.unsuspend=l,function(){t.unsuspend=null,clearTimeout(a),clearTimeout(n)}}:null}function Ui(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Hi(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Ci=null;function Hi(t,e){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Ci=new Map,e.forEach(eh,t),Ci=null,Ui.call(t))}function eh(t,e){if(!(e.state.loading&4)){var l=Ci.get(t);if(l)var a=l.get(null);else{l=new Map,Ci.set(t,l);for(var n=t.querySelectorAll("link[data-precedence],style[data-precedence]"),i=0;i<n.length;i++){var u=n[i];(u.nodeName==="LINK"||u.getAttribute("media")!=="not all")&&(l.set(u.dataset.precedence,u),a=u)}a&&l.set(null,a)}n=e.instance,u=n.getAttribute("data-precedence"),i=l.get(u)||a,i===a&&l.set(null,n),l.set(u,n),this.count++,a=Ui.bind(this),n.addEventListener("load",a),n.addEventListener("error",a),i?i.parentNode.insertBefore(n,i.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(n,t.firstChild)),e.state.loading|=4}}var vn={$$typeof:Ct,Provider:null,Consumer:null,_currentValue:Y,_currentValue2:Y,_threadCount:0};function lh(t,e,l,a,n,i,u,c,o){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Fi(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Fi(0),this.hiddenUpdates=Fi(null),this.identifierPrefix=a,this.onUncaughtError=n,this.onCaughtError=i,this.onRecoverableError=u,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=o,this.incompleteTransitions=new Map}function od(t,e,l,a,n,i,u,c,o,g,v,S){return t=new lh(t,e,l,u,o,g,v,S,c),e=1,i===!0&&(e|=24),i=le(3,null,null,e),t.current=i,i.stateNode=t,e=Hu(),e.refCount++,t.pooledCache=e,e.refCount++,i.memoizedState={element:a,isDehydrated:l,cache:e},Yu(i),t}function sd(t){return t?(t=aa,t):aa}function rd(t,e,l,a,n,i){n=sd(n),a.context===null?a.context=n:a.pendingContext=n,a=ul(e),a.payload={element:l},i=i===void 0?null:i,i!==null&&(a.callback=i),l=cl(t,a,e),l!==null&&(Wt(l,t,e),Wa(l,t,e))}function dd(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var l=t.retryLane;t.retryLane=l!==0&&l<e?l:e}}function lf(t,e){dd(t,e),(t=t.alternate)&&dd(t,e)}function md(t){if(t.tag===13||t.tag===31){var e=Ol(t,67108864);e!==null&&Wt(e,t,67108864),lf(t,67108864)}}function hd(t){if(t.tag===13||t.tag===31){var e=ce();e=$i(e);var l=Ol(t,e);l!==null&&Wt(l,t,e),lf(t,e)}}var Ri=!0;function ah(t,e,l,a){var n=b.T;b.T=null;var i=T.p;try{T.p=2,af(t,e,l,a)}finally{T.p=i,b.T=n}}function nh(t,e,l,a){var n=b.T;b.T=null;var i=T.p;try{T.p=8,af(t,e,l,a)}finally{T.p=i,b.T=n}}function af(t,e,l,a){if(Ri){var n=nf(a);if(n===null)Qc(t,e,a,Bi,l),pd(t,a);else if(uh(n,t,e,l,a))a.stopPropagation();else if(pd(t,a),e&4&&-1<ih.indexOf(t)){for(;n!==null;){var i=Kl(n);if(i!==null)switch(i.tag){case 3:if(i=i.stateNode,i.current.memoizedState.isDehydrated){var u=El(i.pendingLanes);if(u!==0){var c=i;for(c.pendingLanes|=2,c.entangledLanes|=2;u;){var o=1<<31-te(u);c.entanglements[1]|=o,u&=~o}Me(i),(et&6)===0&&(vi=It()+500,dn(0))}}break;case 31:case 13:c=Ol(i,2),c!==null&&Wt(c,i,2),xi(),lf(i,2)}if(i=nf(a),i===null&&Qc(t,e,a,Bi,l),i===n)break;n=i}n!==null&&a.stopPropagation()}else Qc(t,e,a,null,l)}}function nf(t){return t=uu(t),uf(t)}var Bi=null;function uf(t){if(Bi=null,t=Vl(t),t!==null){var e=B(t);if(e===null)t=null;else{var l=e.tag;if(l===13){if(t=w(e),t!==null)return t;t=null}else if(l===31){if(t=at(e),t!==null)return t;t=null}else if(l===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null)}}return Bi=t,null}function gd(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Zd()){case zf:return 2;case Af:return 8;case En:case Vd:return 32;case jf:return 268435456;default:return 32}default:return 32}}var cf=!1,vl=null,bl=null,xl=null,bn=new Map,xn=new Map,Sl=[],ih="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function pd(t,e){switch(t){case"focusin":case"focusout":vl=null;break;case"dragenter":case"dragleave":bl=null;break;case"mouseover":case"mouseout":xl=null;break;case"pointerover":case"pointerout":bn.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":xn.delete(e.pointerId)}}function Sn(t,e,l,a,n,i){return t===null||t.nativeEvent!==i?(t={blockedOn:e,domEventName:l,eventSystemFlags:a,nativeEvent:i,targetContainers:[n]},e!==null&&(e=Kl(e),e!==null&&md(e)),t):(t.eventSystemFlags|=a,e=t.targetContainers,n!==null&&e.indexOf(n)===-1&&e.push(n),t)}function uh(t,e,l,a,n){switch(e){case"focusin":return vl=Sn(vl,t,e,l,a,n),!0;case"dragenter":return bl=Sn(bl,t,e,l,a,n),!0;case"mouseover":return xl=Sn(xl,t,e,l,a,n),!0;case"pointerover":var i=n.pointerId;return bn.set(i,Sn(bn.get(i)||null,t,e,l,a,n)),!0;case"gotpointercapture":return i=n.pointerId,xn.set(i,Sn(xn.get(i)||null,t,e,l,a,n)),!0}return!1}function yd(t){var e=Vl(t.target);if(e!==null){var l=B(e);if(l!==null){if(e=l.tag,e===13){if(e=w(l),e!==null){t.blockedOn=e,Of(t.priority,function(){hd(l)});return}}else if(e===31){if(e=at(l),e!==null){t.blockedOn=e,Of(t.priority,function(){hd(l)});return}}else if(e===3&&l.stateNode.current.memoizedState.isDehydrated){t.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}t.blockedOn=null}function qi(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var l=nf(t.nativeEvent);if(l===null){l=t.nativeEvent;var a=new l.constructor(l.type,l);iu=a,l.target.dispatchEvent(a),iu=null}else return e=Kl(l),e!==null&&md(e),t.blockedOn=l,!1;e.shift()}return!0}function vd(t,e,l){qi(t)&&l.delete(e)}function ch(){cf=!1,vl!==null&&qi(vl)&&(vl=null),bl!==null&&qi(bl)&&(bl=null),xl!==null&&qi(xl)&&(xl=null),bn.forEach(vd),xn.forEach(vd)}function Yi(t,e){t.blockedOn===e&&(t.blockedOn=null,cf||(cf=!0,z.unstable_scheduleCallback(z.unstable_NormalPriority,ch)))}var wi=null;function bd(t){wi!==t&&(wi=t,z.unstable_scheduleCallback(z.unstable_NormalPriority,function(){wi===t&&(wi=null);for(var e=0;e<t.length;e+=3){var l=t[e],a=t[e+1],n=t[e+2];if(typeof a!="function"){if(uf(a||l)===null)continue;break}var i=Kl(l);i!==null&&(t.splice(e,3),e-=3,nc(i,{pending:!0,data:n,method:l.method,action:a},a,n))}}))}function Na(t){function e(o){return Yi(o,t)}vl!==null&&Yi(vl,t),bl!==null&&Yi(bl,t),xl!==null&&Yi(xl,t),bn.forEach(e),xn.forEach(e);for(var l=0;l<Sl.length;l++){var a=Sl[l];a.blockedOn===t&&(a.blockedOn=null)}for(;0<Sl.length&&(l=Sl[0],l.blockedOn===null);)yd(l),l.blockedOn===null&&Sl.shift();if(l=(t.ownerDocument||t).$$reactFormReplay,l!=null)for(a=0;a<l.length;a+=3){var n=l[a],i=l[a+1],u=n[Qt]||null;if(typeof i=="function")u||bd(l);else if(u){var c=null;if(i&&i.hasAttribute("formAction")){if(n=i,u=i[Qt]||null)c=u.formAction;else if(uf(n)!==null)continue}else c=u.action;typeof c=="function"?l[a+1]=c:(l.splice(a,3),a-=3),bd(l)}}}function xd(){function t(i){i.canIntercept&&i.info==="react-transition"&&i.intercept({handler:function(){return new Promise(function(u){return n=u})},focusReset:"manual",scroll:"manual"})}function e(){n!==null&&(n(),n=null),a||setTimeout(l,20)}function l(){if(!a&&!navigation.transition){var i=navigation.currentEntry;i&&i.url!=null&&navigation.navigate(i.url,{state:i.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var a=!1,n=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",e),navigation.addEventListener("navigateerror",e),setTimeout(l,100),function(){a=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",e),navigation.removeEventListener("navigateerror",e),n!==null&&(n(),n=null)}}}function ff(t){this._internalRoot=t}Gi.prototype.render=ff.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(m(409));var l=e.current,a=ce();rd(l,a,t,e,null,null)},Gi.prototype.unmount=ff.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;rd(t.current,2,null,t,null,null),xi(),e[Zl]=null}};function Gi(t){this._internalRoot=t}Gi.prototype.unstable_scheduleHydration=function(t){if(t){var e=Mf();t={blockedOn:null,target:t,priority:e};for(var l=0;l<Sl.length&&e!==0&&e<Sl[l].priority;l++);Sl.splice(l,0,t),l===0&&yd(t)}};var Sd=E.version;if(Sd!=="19.2.3")throw Error(m(527,Sd,"19.2.3"));T.findDOMNode=function(t){var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(m(188)):(t=Object.keys(t).join(","),Error(m(268,t)));return t=A(e),t=t!==null?Q(t):null,t=t===null?null:t.stateNode,t};var fh={bundleType:0,version:"19.2.3",rendererPackageName:"react-dom",currentDispatcherRef:b,reconcilerVersion:"19.2.3"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Xi=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Xi.isDisabled&&Xi.supportsFiber)try{Ma=Xi.inject(fh),Pt=Xi}catch{}}return An.createRoot=function(t,e){if(!D(t))throw Error(m(299));var l=!1,a="",n=_s,i=Ms,u=Os;return e!=null&&(e.unstable_strictMode===!0&&(l=!0),e.identifierPrefix!==void 0&&(a=e.identifierPrefix),e.onUncaughtError!==void 0&&(n=e.onUncaughtError),e.onCaughtError!==void 0&&(i=e.onCaughtError),e.onRecoverableError!==void 0&&(u=e.onRecoverableError)),e=od(t,1,!1,null,null,l,a,null,n,i,u,xd),t[Zl]=e.current,Lc(t),new ff(e)},An.hydrateRoot=function(t,e,l){if(!D(t))throw Error(m(299));var a=!1,n="",i=_s,u=Ms,c=Os,o=null;return l!=null&&(l.unstable_strictMode===!0&&(a=!0),l.identifierPrefix!==void 0&&(n=l.identifierPrefix),l.onUncaughtError!==void 0&&(i=l.onUncaughtError),l.onCaughtError!==void 0&&(u=l.onCaughtError),l.onRecoverableError!==void 0&&(c=l.onRecoverableError),l.formState!==void 0&&(o=l.formState)),e=od(t,1,!0,e,l??null,a,n,o,i,u,c,xd),e.context=sd(null),l=e.current,a=ce(),a=$i(a),n=ul(a),n.callback=null,cl(l,n,a),l=a,e.current.lanes=l,Da(e,l),Me(e),t[Zl]=e.current,Lc(t),new Gi(e)},An.version="19.2.3",An}var Dd;function vh(){if(Dd)return rf.exports;Dd=1;function z(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(z)}catch(E){console.error(E)}}return z(),rf.exports=yh(),rf.exports}var bh=vh();const xh=z=>z.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Sh=z=>z.replace(/^([A-Z])|[\s-_]+(\w)/g,(E,_,m)=>m?m.toUpperCase():_.toLowerCase()),Ud=z=>{const E=Sh(z);return E.charAt(0).toUpperCase()+E.slice(1)},Bd=(...z)=>z.filter((E,_,m)=>!!E&&E.trim()!==""&&m.indexOf(E)===_).join(" ").trim(),zh=z=>{for(const E in z)if(E.startsWith("aria-")||E==="role"||E==="title")return!0};var Ah={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const jh=Rt.forwardRef(({color:z="currentColor",size:E=24,strokeWidth:_=2,absoluteStrokeWidth:m,className:D="",children:B,iconNode:w,...at},M)=>Rt.createElement("svg",{ref:M,...Ah,width:E,height:E,stroke:z,strokeWidth:m?Number(_)*24/Number(E):_,className:Bd("lucide",D),...!B&&!zh(at)&&{"aria-hidden":"true"},...at},[...w.map(([A,Q])=>Rt.createElement(A,Q)),...Array.isArray(B)?B:[B]]));const ht=(z,E)=>{const _=Rt.forwardRef(({className:m,...D},B)=>Rt.createElement(jh,{ref:B,iconNode:E,className:Bd(`lucide-${xh(Ud(z))}`,`lucide-${z}`,m),...D}));return _.displayName=Ud(z),_};const Eh=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],Cd=ht("arrow-right",Eh);const Th=[["path",{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",key:"1yiouv"}],["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}]],bf=ht("award",Th);const Nh=[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]],_h=ht("book-open",Nh);const Mh=[["path",{d:"M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16",key:"jecpp"}],["rect",{width:"20",height:"14",x:"2",y:"6",rx:"2",key:"i6l2r4"}]],qd=ht("briefcase",Mh);const Oh=[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]],Dh=ht("calendar",Oh);const Uh=[["path",{d:"M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z",key:"18u6gg"}],["circle",{cx:"12",cy:"13",r:"3",key:"1vg3eu"}]],Ch=ht("camera",Uh);const Hh=[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]],Rh=ht("chevron-left",Hh);const Bh=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],qh=ht("chevron-right",Bh);const Yh=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],wh=ht("circle-alert",Yh);const Gh=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],Xh=ht("circle-check-big",Gh);const Lh=[["path",{d:"m16 18 6-6-6-6",key:"eg8j8"}],["path",{d:"m8 6-6 6 6 6",key:"ppft3o"}]],Hd=ht("code",Lh);const Qh=[["path",{d:"M12 15V3",key:"m9g1x1"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["path",{d:"m7 10 5 5 5-5",key:"brsn70"}]],yf=ht("download",Qh);const Zh=[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]],Yd=ht("external-link",Zh);const Vh=[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]],Kh=ht("github",Vh);const kh=[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]],Jh=ht("linkedin",kh);const Wh=[["path",{d:"M21.2 8.4c.5.38.8.97.8 1.6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 .8-1.6l8-6a2 2 0 0 1 2.4 0l8 6Z",key:"1jhwl8"}],["path",{d:"m22 10-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 10",key:"1qfld7"}]],Fh=ht("mail-open",Wh);const $h=[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]],wd=ht("map-pin",$h);const Ih=[["path",{d:"M4 5h16",key:"1tepv9"}],["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 19h16",key:"1djgab"}]],Ph=ht("menu",Ih);const t1=[["path",{d:"M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",key:"9njp5v"}]],e1=ht("phone",t1);const l1=[["path",{d:"M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z",key:"m3kijz"}],["path",{d:"m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z",key:"1fmvmk"}],["path",{d:"M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0",key:"1f8sc4"}],["path",{d:"M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5",key:"qeys4"}]],a1=ht("rocket",l1);const n1=[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]],i1=ht("send",n1);const u1=[["path",{d:"M11 2v2",key:"1539x4"}],["path",{d:"M5 2v2",key:"1yf1q8"}],["path",{d:"M5 3H4a2 2 0 0 0-2 2v4a6 6 0 0 0 12 0V5a2 2 0 0 0-2-2h-1",key:"rb5t3r"}],["path",{d:"M8 15a6 6 0 0 0 12 0v-3",key:"x18d4x"}],["circle",{cx:"20",cy:"10",r:"2",key:"ts1r5v"}]],c1=ht("stethoscope",u1);const f1=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744",key:"16gr8j"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]],o1=ht("users",f1);const s1=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],r1=ht("x",s1);const d1=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]],Gd=ht("zap",d1),gf=[{id:6,title:"Visualize Algorithms!",subtitle:"Learn Faster, Code Smarter An interactive tool for students, educators, and developers.",date:"March 27, 2026",description:"Data Structure & Algorithm Visualization Tool, Welcome to our interactive visualization tool for data structures and algorithms! This tool provides a dynamic, visual way to understand how various data structures work and how algorithms manipulate them.",imageUrl:"stay_icon.png",redirectionLinks:["https://staying.fun/en/docs/getting-started"]},{id:5,title:"Hello, SwiftUI",subtitle:"Get to know Xcode, Swift, and SwiftUI",date:"March 26, 2026",description:"You will build Chat Prototype, a chat conversation using text views. The text and colors in the project are just suggestions, so feel free to make it your own by changing the words and style.",imageUrl:"swiftui-256x256_2x.png",redirectionLinks:["https://developer.apple.com/tutorials/develop-in-swift/hello-swiftui"]},{id:4,title:"Flutter Learning Resources",subtitle:"A catalog of tutorials, samples, and workshops",date:"March 25, 2026",description:"An extensive collection of curated learning materials including guided Codelabs, feature-rich demo applications, instructor-led workshops, and quick-solution recipes for common development challenges.",imageUrl:"Flutter_learning_resources_dashatar.png",redirectionLinks:["https://docs.flutter.dev/learn/learning-resources"]},{id:3,title:"Take Kotlin Tour",subtitle:"Kotlin is a modern language that's concise, multiplatform, and interoperable with Java and other languages.",date:"March 25, 2026",description:"Understand the fundamentals of Kotlin and Jetpack Compose, Build basic Android apps, Use Jetpack libraries and modern Android development practices, Create adaptive layouts optimized for different display sizes",imageUrl:"Kotlin_Icon.png",redirectionLinks:["https://developer.android.com/courses/android-basics-compose/course","https://kotlinlang.org/docs/getting-started.html"]},{id:2,title:"Flutter Tutorial",subtitle:"Build pixel-perfect applications from scratch",date:"March 24, 2026",description:"A comprehensive guide to building Flutter apps for mobile, desktop, and web. Starting from a blank canvas, you'll build several small applications to master critical framework features. Note: Requires a Flutter environment and basic Dart knowledge.",imageUrl:"Flutter_tutorial.png",redirectionLinks:["https://docs.flutter.dev/learn/pathway/tutorial","https://www.youtube.com/playlist?list=PL4cUxeGkcC9jLYyp2Aoh6hcWuxFDX6PBJ"]},{id:1,title:"A Swift Tour",subtitle:"Explore the features and syntax of Swift",date:"March 24, 2026",description:"Get started with Apple's powerful and intuitive programming language. This guide provides a comprehensive overview of Swift's core features, from simple values and control flow to functions, closures, and object-oriented patterns. Perfect for developers looking to master the fundamentals of pure Swift through practical, hands-on examples.",imageUrl:"swift-256x256_2x.png",redirectionLinks:["https://docs.swift.org/swift-book/documentation/the-swift-programming-language/guidedtour/"]}],m1=()=>{const[z,E]=Rt.useState({x:0,y:0}),[_,m]=Rt.useState(!1);return Rt.useEffect(()=>{let D,B=0,w=0,at=0,M=0;const A=F=>{at=F.clientX,M=F.clientY},Q=()=>{B+=(at-B)*.15,w+=(M-w)*.15,E({x:B,y:w}),D=requestAnimationFrame(Q)},H=F=>{F.target.closest("a, button, input, textarea")?m(!0):m(!1)};return window.addEventListener("mousemove",A),window.addEventListener("mouseover",H),D=requestAnimationFrame(Q),()=>{window.removeEventListener("mousemove",A),window.removeEventListener("mouseover",H),cancelAnimationFrame(D)}},[]),f.jsx("div",{className:"custom-cursor",style:{left:`${z.x}px`,top:`${z.y}px`,transform:`translate(-50%, -50%) scale(${_?1.5:1})`}})},Oe=({children:z,className:E="",hover:_=!1})=>f.jsx("div",{className:`glass-card ${_?"glass-card-hover":""} ${E}`,children:z}),Li=({children:z,icon:E})=>f.jsxs("span",{className:"tag",children:[E&&f.jsx(E,{size:14}),z]}),Qi=({icon:z,number:E,label:_})=>f.jsxs("div",{className:"stat-card",children:[f.jsx(z,{className:"stat-icon",size:32}),f.jsx("div",{className:"stat-number",children:E}),f.jsx("div",{className:"stat-label",children:_})]}),h1=({currentPage:z,setCurrentPage:E,mobileMenuOpen:_,setMobileMenuOpen:m})=>{const D=["home","about","experience","projects","contributions","contact"];return f.jsx("nav",{className:"navbar",children:f.jsxs("div",{className:"nav-content",children:[f.jsxs("div",{className:"nav-brand",onClick:()=>E("home"),children:[f.jsx("img",{src:"/nav-logo.png",alt:"Logo",className:"nav-logo"}),"Abhay Korat"]}),f.jsx("button",{className:"mobile-menu-btn",onClick:()=>m(!_),children:_?f.jsx(r1,{size:24}):f.jsx(Ph,{size:24})}),f.jsx("div",{className:`nav-links ${_?"nav-links-open":""}`,children:D.map(B=>f.jsx("a",{onClick:()=>{E(B),m(!1)},className:z===B?"active":"",children:B.charAt(0).toUpperCase()+B.slice(1)},B))})]})})},Rd=({setCurrentPage:z})=>f.jsx("div",{className:"page home-page",children:f.jsxs(Oe,{className:"hero-card",children:[f.jsxs("div",{className:"profile-container",children:[f.jsx("div",{className:"star-field"}),f.jsx("div",{className:"cyber-orbit orbit-1"}),f.jsx("div",{className:"cyber-orbit orbit-2"}),f.jsx("div",{className:"cyber-orbit orbit-3"}),f.jsxs("div",{className:"profile-image-wrapper",children:[f.jsx("img",{src:"/spaceprofile.png",alt:"Abhay Korat",className:"profile-image"}),f.jsx("div",{className:"hologram-overlay"})]})]}),f.jsx("h1",{className:"hero-title",children:"Abhay Korat"}),f.jsx("h2",{className:"hero-subtitle",children:"Lead Software Engineer | Mobile Architecture"}),f.jsx("p",{className:"hero-tagline",children:"Flutter & Native (iOS/Android) Expert • 11+ Years Building Scalable Fintech & Enterprise Solutions"}),f.jsxs("div",{className:"hero-buttons",children:[f.jsx("button",{className:"btn btn-primary",onClick:()=>z("projects"),children:"View Projects"}),f.jsx("button",{className:"btn btn-secondary",onClick:()=>z("contact"),children:"Get In Touch"})]}),f.jsxs("div",{className:"hero-tags",children:[f.jsx(Li,{icon:Hd,children:"Flutter · Dart · Swift · Kotlin"}),f.jsx(Li,{icon:Gd,children:"Clean Architecture · BLoC · MVVM"}),f.jsx(Li,{icon:Ch,children:"CI/CD · Fastlane · Firebase"}),f.jsx(Li,{icon:qd,children:"Fintech · Enterprise · White-Label"})]}),f.jsxs("div",{className:"stats-grid",children:[f.jsx(Qi,{icon:bf,number:"11+",label:"Years Experience"}),f.jsx(Qi,{icon:Hd,number:"50+",label:"Apps works"}),f.jsx(Qi,{icon:o1,number:"12+",label:"Team Members Led"}),f.jsx(Qi,{icon:a1,number:"40%",label:"Faster Releases"})]}),f.jsxs("div",{className:"download-section",style:{marginTop:"3rem",display:"flex",gap:"1rem",justifyContent:"center",flexWrap:"wrap"},children:[f.jsxs("a",{href:"/Abhay_Korat_Lead_Engineer.pdf",download:!0,className:"btn btn-primary",style:{display:"flex",alignItems:"center",gap:"0.5rem"},children:[f.jsx(yf,{size:18})," Download CV"]}),f.jsxs("a",{href:"/Cover_letter_Mobile_Engineer.pdf",download:!0,className:"btn-view",style:{display:"flex",alignItems:"center",gap:"0.5rem"},children:[f.jsx(yf,{size:18})," Download Cover Letter"]})]})]})}),g1=()=>{const z=[{category:"Mobile Development",skills:["Flutter","Dart","Swift","Objective-C","Kotlin","Java","iOS SDK","Android SDK"]},{category:"Architecture & Patterns",skills:["Clean Architecture","MVVM","BLoC/Cubit","Provider","Modular Architecture","Dependency Injection"]},{category:"State Management",skills:["BLoC","Cubit","Provider","Riverpod","GetX"]},{category:"CI/CD & DevOps",skills:["GitLab CI/CD","Fastlane","GitHub Actions","CodeMagic","Firebase App Distribution"]},{category:"Backend & Cloud",skills:["Firebase","REST APIs","GraphQL","Socket.io","Payment Gateways","Local Storage"]},{category:"Tools & Testing",skills:["Jira","Postman","Charles Proxy","XCTest","Flutter Integration Tests"]}];return f.jsxs("div",{className:"page about-page",children:[f.jsxs(Oe,{children:[f.jsx("h2",{className:"section-title",children:"Professional Summary"}),f.jsx("p",{className:"section-text",children:"Results-driven Lead Software Engineer with 11+ years of experience designing and delivering scalable, secure, high-traffic mobile applications in Fintech and Enterprise domains. Expert in Flutter, Dart, Swift, Kotlin, and end-to-end mobile architecture (Clean Architecture, MVVM, BLoC, modularization, dynamic theming, CI/CD). Proven track record leading engineering teams, mentoring developers, establishing coding standards, and driving on-time delivery of complex, multi-platform products."})]}),f.jsxs(Oe,{children:[f.jsx("h2",{className:"section-title",children:"Core Competencies"}),f.jsxs("ul",{className:"feature-list",children:[f.jsx("li",{children:"Architecting scalable mobile platforms supporting high-volume user onboarding and secure payment processing"}),f.jsx("li",{children:"Designing white-label Flutter architectures for multi-brand deployment with dynamic theming and configurations"}),f.jsx("li",{children:"Leading cross-functional teams of 12+ engineers with code reviews, sprint planning, and technical mentorship"}),f.jsx("li",{children:"Implementing CI/CD pipelines reducing release cycles by 40% and improving deployment efficiency"}),f.jsx("li",{children:"Optimizing app performance with 25% size reduction and 35% faster startup times"}),f.jsx("li",{children:"Establishing engineering standards, reusable component libraries, and modular architecture patterns"})]})]}),f.jsxs(Oe,{children:[f.jsx("h2",{className:"section-title",children:"Technical Skills"}),f.jsx("div",{className:"skills-section",children:z.map((E,_)=>f.jsxs("div",{className:"skill-category",children:[f.jsx("h3",{className:"skill-category-title",children:E.category}),f.jsx("div",{className:"skills-grid",children:E.skills.map(m=>f.jsx("div",{className:"skill-tag",children:m},m))})]},_))})]}),f.jsxs(Oe,{children:[f.jsx("h2",{className:"section-title",children:"Domain Expertise"}),f.jsxs("div",{className:"domain-grid",children:[f.jsxs("div",{className:"domain-card",children:[f.jsx(bf,{size:32,className:"domain-icon"}),f.jsx("h3",{children:"Fintech"}),f.jsx("p",{children:"KYC/AML verification, Payment workflows, Secure authentication, Trading platforms"})]}),f.jsxs("div",{className:"domain-card",children:[f.jsx(qd,{size:32,className:"domain-icon"}),f.jsx("h3",{children:"Enterprise"}),f.jsx("p",{children:"Multi-tenancy, White-label apps, Role-based access, Offline-first architecture"})]}),f.jsxs("div",{className:"domain-card",children:[f.jsx(c1,{size:32,className:"domain-icon"}),f.jsx("h3",{children:"Healthcare & Insurance"}),f.jsx("p",{children:"Real-time data feeds, Health & Fitness, Routine, inventory, Appointments, notifier streaming, High-volume coredata"})]}),f.jsxs("div",{className:"domain-card",children:[f.jsx(Gd,{size:32,className:"domain-icon"}),f.jsx("h3",{children:"High-Performance"}),f.jsx("p",{children:"Real-time data feeds, Socket integration, Market streaming, High-volume transactions"})]})]})]}),f.jsxs(Oe,{children:[f.jsx("h2",{className:"section-title",children:"Education"}),f.jsxs("div",{className:"education-section",children:[f.jsxs("div",{className:"education-item",children:[f.jsx("h3",{children:"Bachelor of Engineering – Computer Science & Engineering"}),f.jsx("p",{className:"education-detail",children:"Dr. Subhash University, Junagadh | 2012 – 2014"})]}),f.jsxs("div",{className:"education-item",children:[f.jsx("h3",{children:"Diploma in Computer Engineering"}),f.jsx("p",{className:"education-detail",children:"R.N.G. Patel Institute of Technology, Bardoli | 2008 – 2011"})]})]})]})]})},p1=()=>{const z=[{company:"Finoux Solutions Private Limited",location:"Mumbai, Maharashtra",role:"Lead Software Engineer",period:"Jul 2024 – Present",achievements:["Architecting next-gen Fintech & Enterprise mobile platforms supporting high-volume user onboarding, KYC/AML verification, and payment processing","Designed white-label Flutter architecture enabling single codebase deployment across multiple brands and environments","Established modular architecture and CI/CD pipelines using GitHub Actions + CodeMagic, reducing release cycles by 40%","Mentoring team of 12+ engineers, conducting code reviews, and driving sprint planning"]},{company:"Sunflower Lab",location:"Vadodara, Gujarat",role:"Senior Flutter Developer",period:"Jun 2022 – May 2024",achievements:["Led development of large-scale Flutter applications using BLoC, Flavors, and clean architecture patterns","Reduced app size by 25% and improved startup time by 35% through performance optimization","Implemented automated CI/CD pipelines with Fastlane and Firebase App Distribution","Mentored junior developers and conducted architecture reviews"]},{company:"Knackit",location:"Bengaluru, Karnataka",role:"Founding Engineer – iOS & Flutter Expert",period:"Sep 2020 – May 2022",achievements:["Built core product from scratch using Flutter and native iOS/Android modules as founding member","Established reusable component library and architecture patterns adopted company-wide","Collaborated with founders to define technical roadmap and prioritize features","Reduced app size by 50+ MB by replacing FFmpeg with native background method channels"]},{company:"CoderKube Technologies",location:"Surat, Gujarat",role:"Team Lead",period:"Apr 2019 – Aug 2020",achievements:["Led end-to-end delivery of multiple client projects with task allocation and quality management","Drove adoption of cross-platform Flutter strategy, reducing duplicate code by 60%","Managed project timelines and coordinated with stakeholders"]},{company:"BlueBell Apps",location:"Copenhagen, Denmark",role:"Mobile Application Developer",period:"Feb 2017 – Mar 2019",achievements:["Contract-based iOS development with continuous integration and delivery","Integrated Bank Verification, dynamic forms UI, multipart data handling","Implemented In-App Purchases, AdMob, and social media authentication"]},{company:"IBL Infotech",location:"Surat, Gujarat",role:"Senior iOS Developer",period:"Apr 2014 – Jan 2017",achievements:["Delivered 15+ production iOS apps using Swift and Objective-C","Integrated VOIP (CallKit), video streaming, and push notifications","Implemented In-App Purchases, AdMob, and Facebook Graph Auth"]}];return f.jsxs("div",{className:"page experience-page",children:[f.jsx("h1",{className:"page-title",children:"Professional Experience"}),f.jsx("div",{className:"timeline",children:z.map((E,_)=>f.jsxs(Oe,{hover:!0,className:"experience-card",children:[f.jsx("div",{className:"experience-header",children:f.jsxs("div",{children:[f.jsx("h3",{className:"experience-role",children:E.role}),f.jsx("h4",{className:"experience-company",children:E.company}),f.jsxs("div",{className:"experience-meta",children:[f.jsxs("span",{className:"experience-location",children:[f.jsx(wd,{size:16}),E.location]}),f.jsx("span",{className:"experience-period",children:E.period})]})]})}),f.jsx("ul",{className:"achievement-list",children:E.achievements.map((m,D)=>f.jsx("li",{children:m},D))})]},_))})]})},y1=()=>{const z=[{title:"XTSApp",description:"Enterprise trading platform with dynamic theming, white-label branding, and real-time market feeds via multiple socket channels.",features:["Buy/Sell engine with portfolio management and watchlist","Real-time order updates with streaming mechanisms","Encrypted local storage + secure session management","Advanced charting and holdings/positions tracking"],tags:["Flutter",".NET","MySQL","Sockets","Firebase","Clean Architecture","BLoC"],link:"https://symphonyfintech.com/xts/"},{title:"BullForce",description:"Comprehensive fintech platform with KYC/AML onboarding, trading capabilities, and payment processing.",features:["Aadhar/PAN/Bank verification for onboarding","UPI/NetBanking/SIP/SWP workflows","Advanced scanners and dynamic market insights","Real-time positions, watchlists, and order book"],tags:["Flutter",".NET","MySQL","Sockets","CI/CD","BLoC","Payment Gateways"],link:"https://bullforce.co"},{title:"Spark - IRISH",description:"Dynamic page rendering engine with multi-platform secure authentication and responsive UI/UX.",features:["Conditional routing with dynamic page rendering","Microsoft Auth + deep link implementation","Single-space UI layout for multiple device form factors","Code obfuscation and platform-specific security hardening"],tags:["Flutter","JavaScript","React","Swift","Kotlin","CI/CD","MVVM","GetX"],link:"https://play.google.com/store/apps/details?id=com.wealthspectrum.app.spark&pcampaignid=web_share"},{title:"AlleyData",description:"Universal health and fitness application with comprehensive data synchronization and offline capabilities.",features:["Health tracking, routine management, and appointments","CoreData synchronization with API responses","Secure session management with notifiers","Universal UI for iPhone and iPad"],tags:["iOS","Swift","CoreData","RxSwift","Coredata","MVVM","CI/CD"],link:"https://alleydata.com/"},{title:"Knackit",description:"Founding member project with wallet, rewards, and multi-language support.",features:["Reduced app size by 50+ MB with native background methods","Wallet, Rewards, Coins, and Transactional modules","Localization for 12 Indian languages","Reusable component library adopted across teams"],tags:["Flutter","Swift","Kotlin","Laravel","MongoDB","CI/CD","Payment Gateways"],highlight:"Founders raised $1.5M funding",link:"https://www.crunchbase.com/organization/knackit"},{title:"Agrimedia",description:"Award-winning application in agriculture sector of India 2019.",features:["News module with dynamic images, videos, and deep links","Multilingual support (Hindi, English, Gujarati)","Q&A module for farmers to post and resolve issues","Analytics pipeline for user interactions"],tags:["Swift","MVC","PHP","MySQL"],highlight:"Award-winning app 2019",link:"https://apps.apple.com/in/app/agrimedia/id1434653553"},{title:"Legacy Vault",description:"Location-based service with real-time tracking and social features.",features:["Dynamic map annotations with Google Maps SDK","Offline location tracking with periodic sync","Google Places API check-in/out system","Real-time chat with Socket.io"],tags:["Flutter","Swift","Kotlin","Java","MySQL","Firebase","CI/CD"],link:"https://www.legacyvaultapp.com"},{title:"Benefact4",description:"Social donation platform with timeline feeds and media sharing.",features:["Donation feed with timeline and multi-layer filters","Widget-based social sharing with screenshot composer","Multipart uploads for media content","Subscription management and analytics tracking"],tags:["Flutter","Java","MySQL","Firebase","CI/CD","Payment Gateways"],link:"https://www.heeythere.com"},{title:"Baby led weaning guide recipes",description:"Social donation platform with timeline feeds and media sharing.",features:["Multi-language localization (DE, FR, EN, IT)","Universal UI for iPhone + iPad","WebKit rendering for WHO nutrition content","In-App Purchases for premium content","Payment processing with Subscription plans (iOS + Android)"],tags:["Swift","Localization","Auto-layout","In-app purchase","WebKit","Alamofire","Coredata"],link:"https://www.babyledrecipes.com/apps.html"}];return f.jsxs("div",{className:"page projects-page",children:[f.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"2rem",flexWrap:"wrap",gap:"1rem"},children:[f.jsx("h1",{className:"page-title",style:{marginBottom:0},children:"Featured Projects"}),f.jsxs("a",{href:"/Portfolio_Abhay_Korat.pdf",download:!0,className:"btn-view",style:{display:"flex",alignItems:"center",gap:"0.5rem"},children:[f.jsx(yf,{size:18})," Download Portfolio"]})]}),f.jsx("div",{className:"projects-grid",children:z.map((E,_)=>f.jsxs(Oe,{hover:!0,className:"project-card",children:[f.jsxs("div",{className:"project-header",children:[f.jsx("div",{className:"project-title-row",children:f.jsx("h3",{className:"project-title",children:E.title})}),E.link&&f.jsxs("a",{href:E.link,target:"_blank",rel:"noopener noreferrer",className:"btn-view",children:["View ",f.jsx(Yd,{size:14})]}),E.highlight&&f.jsxs("span",{className:"project-highlight",children:[f.jsx(bf,{size:16}),E.highlight]})]}),f.jsx("p",{className:"project-description",children:E.description}),f.jsxs("div",{className:"project-features",children:[f.jsx("h4",{children:"Key Features:"}),f.jsx("ul",{children:E.features.map((m,D)=>f.jsx("li",{children:m},D))})]}),f.jsx("div",{className:"project-tags",children:E.tags.map(m=>f.jsx("span",{className:"project-tag",children:m},m))})]},_))})]})},v1=()=>{const[z,E]=Rt.useState({name:"",email:"",mobile:"",message:""}),[_,m]=Rt.useState({type:"",message:""}),[D,B]=Rt.useState(!1),w=async M=>{M.preventDefault(),B(!0),m({type:"",message:""});try{const A=M.target;if((await fetch("https://formsubmit.co/koratabhaym@gmail.com",{method:"POST",body:new FormData(A),headers:{Accept:"application/json"}})).ok)m({type:"success",message:"Message transmitted successfully! I'll reach back through the cosmos soon. 🚀"}),E({name:"",email:"",mobile:"",message:""});else throw new Error("Failed to send")}catch{m({type:"error",message:"Transmission failed. Please use the direct contact links above or try again."})}finally{B(!1)}},at=M=>{E({...z,[M.target.name]:M.target.value})};return f.jsxs("div",{className:"page contact-page",children:[f.jsx("div",{className:"contact-particles",children:[...Array(20)].map((M,A)=>f.jsx("div",{className:"particle",style:{left:`${Math.random()*100}%`,animationDelay:`${Math.random()*5}s`,animationDuration:`${5+Math.random()*10}s`}},A))}),f.jsx("div",{className:"contact-container",children:f.jsxs("div",{className:"contact-grid",children:[f.jsxs(Oe,{className:"contact-content",children:[f.jsx("div",{className:"neural-network",children:f.jsxs("svg",{viewBox:"0 0 400 400",className:"neural-svg",children:[f.jsx("defs",{children:f.jsxs("linearGradient",{id:"neuralGradient",x1:"0%",y1:"0%",x2:"100%",y2:"100%",children:[f.jsx("stop",{offset:"0%",stopColor:"#06b6d4",stopOpacity:"0.4"}),f.jsx("stop",{offset:"100%",stopColor:"#2563eb",stopOpacity:"0.4"})]})}),f.jsx("circle",{cx:"50",cy:"50",r:"4",fill:"#06b6d4",className:"neural-node"}),f.jsx("circle",{cx:"120",cy:"80",r:"4",fill:"#06b6d4",className:"neural-node"}),f.jsx("circle",{cx:"200",cy:"60",r:"4",fill:"#06b6d4",className:"neural-node"}),f.jsx("circle",{cx:"280",cy:"90",r:"4",fill:"#06b6d4",className:"neural-node"}),f.jsx("circle",{cx:"350",cy:"50",r:"4",fill:"#06b6d4",className:"neural-node"}),f.jsx("line",{x1:"50",y1:"50",x2:"120",y2:"80",stroke:"url(#neuralGradient)",strokeWidth:"1",className:"neural-line"}),f.jsx("line",{x1:"120",y1:"80",x2:"200",y2:"60",stroke:"url(#neuralGradient)",strokeWidth:"1",className:"neural-line"}),f.jsx("line",{x1:"200",y1:"60",x2:"280",y2:"90",stroke:"url(#neuralGradient)",strokeWidth:"1",className:"neural-line"}),f.jsx("line",{x1:"280",y1:"90",x2:"350",y2:"50",stroke:"url(#neuralGradient)",strokeWidth:"1",className:"neural-line"})]})}),f.jsx("h2",{className:"section-title",children:"Get In Touch"}),f.jsxs("div",{className:"contact-info",children:[f.jsxs("div",{className:"contact-item",children:[f.jsx(wd,{size:20}),f.jsx("span",{children:"Surat, Gujarat, India"})]}),f.jsxs("div",{className:"contact-item",children:[f.jsx(e1,{size:20}),f.jsx("a",{href:"tel:+919998529350",children:"+91 9998529350"})]}),f.jsxs("div",{className:"contact-item",children:[f.jsx(Fh,{size:20}),f.jsx("a",{href:"mailto:koratabhaym@gmail.com",children:"koratabhaym@gmail.com"})]}),f.jsxs("div",{className:"contact-item",children:[f.jsx(Jh,{size:20}),f.jsx("a",{href:"https://linkedin.com/in/abhaykorat",target:"_blank",rel:"noopener noreferrer",children:"linkedin.com/in/abhaykorat"})]}),f.jsxs("div",{className:"contact-item",children:[f.jsx(Kh,{size:20}),f.jsx("a",{href:"https://github.com/abhuzz",target:"_blank",rel:"noopener noreferrer",children:"github.com/abhuzz"})]})]}),f.jsxs("form",{className:"contact-form",onSubmit:w,children:[f.jsx("input",{type:"hidden",name:"_subject",value:"New Contact from Portfolio"}),f.jsx("input",{type:"hidden",name:"_captcha",value:"false"}),f.jsx("input",{type:"hidden",name:"_template",value:"table"}),f.jsxs("div",{className:"form-group",children:[f.jsx("label",{htmlFor:"name",children:"Name *"}),f.jsxs("div",{className:"holographic-input-wrapper",children:[f.jsx("input",{id:"name",type:"text",name:"name",value:z.name,onChange:at,required:!0,placeholder:"Enter your name",disabled:D,className:"holographic-input"}),f.jsx("div",{className:"scan-line"})]})]}),f.jsxs("div",{className:"form-group",children:[f.jsx("label",{htmlFor:"email",children:"Email *"}),f.jsxs("div",{className:"holographic-input-wrapper",children:[f.jsx("input",{id:"email",type:"email",name:"email",value:z.email,onChange:at,required:!0,placeholder:"your.email@example.com",disabled:D,className:"holographic-input"}),f.jsx("div",{className:"scan-line"})]})]}),f.jsxs("div",{className:"form-group",children:[f.jsx("label",{htmlFor:"mobile",children:"Mobile"}),f.jsxs("div",{className:"holographic-input-wrapper",children:[f.jsx("input",{id:"mobile",type:"tel",name:"mobile",value:z.mobile,onChange:at,placeholder:"+91-XXXXXXXXXX",disabled:D,className:"holographic-input"}),f.jsx("div",{className:"scan-line"})]})]}),f.jsxs("div",{className:"form-group",children:[f.jsx("label",{htmlFor:"message",children:"Message *"}),f.jsxs("div",{className:"holographic-input-wrapper",children:[f.jsx("textarea",{id:"message",name:"message",value:z.message,onChange:at,required:!0,rows:5,placeholder:"Your message or project inquiry...",disabled:D,className:"holographic-input"}),f.jsx("div",{className:"scan-line"})]})]}),_.message&&f.jsxs("div",{className:`status-message ${_.type}`,children:[_.type==="success"?f.jsx(Xh,{size:20}):f.jsx(wh,{size:20}),_.message]}),f.jsxs("button",{type:"submit",className:"btn btn-primary cosmic-button",disabled:D||!z.name||!z.email||!z.message,children:[D?f.jsxs(f.Fragment,{children:[f.jsxs("div",{className:"orbital-spinner",children:[f.jsx("div",{className:"orbit"}),f.jsx("div",{className:"orbit"}),f.jsx("div",{className:"orbit"})]}),f.jsx("span",{children:"Transmitting..."})]}):f.jsxs(f.Fragment,{children:[f.jsx(i1,{size:18}),f.jsx("span",{children:"Send Message"})]}),f.jsx("div",{className:"button-glow"})]})]})]}),f.jsx("div",{className:"contact-visual",children:f.jsxs("div",{className:"astronaut-wrapper",children:[f.jsx("img",{src:"/contact_us.png",alt:"Abhay in Space",className:"astronaut-image"}),f.jsx("div",{className:"visual-glow"})]})})]})})]})},pf=10,b1=()=>{const[z,E]=Rt.useState(1),_=Math.ceil(gf.length/pf),m=(z-1)*pf,D=gf.slice(m,m+pf),B=w=>{w>=1&&w<=_&&(E(w),window.scrollTo({top:0,behavior:"smooth"}))};return f.jsxs("div",{className:"page contributions-page",children:[f.jsx("div",{className:"contributions-header",children:f.jsxs("div",{className:"contributions-header-content",children:[f.jsx(_h,{size:40,className:"contributions-header-icon"}),f.jsxs("div",{children:[f.jsx("h1",{className:"page-title",style:{marginBottom:"0.25rem"},children:"Contribute to Learn as Much as You CAN"}),f.jsx("p",{className:"contributions-subtitle",children:"Curated resources, guides, and insights for continuous learning"})]})]})}),f.jsx("div",{className:"contributions-list",children:D.map(w=>{const at=w.redirectionLinks.length>1,M=Q=>{try{const H=new URL(Q).hostname.replace("www.","");if(H.includes("youtube"))return"YouTube";if(H.includes("github"))return"GitHub";const F=H.split(".");return F.length>1?F.slice(0,-1).join("."):H}catch{return"Link"}},A=f.jsxs(Oe,{hover:!0,className:"contribution-card",children:[f.jsx("div",{className:"contribution-image-wrapper",children:f.jsx("img",{src:`/${w.imageUrl}`,alt:w.title,className:"contribution-image"})}),f.jsxs("div",{className:"contribution-content",children:[f.jsx("div",{className:"contribution-meta",children:f.jsxs("span",{className:"contribution-date",children:[f.jsx(Dh,{size:14}),w.date]})}),f.jsx("h3",{className:"contribution-title",children:w.title}),f.jsx("p",{className:"contribution-card-subtitle",children:w.subtitle}),f.jsx("p",{className:"contribution-description",children:w.description}),at?f.jsx("div",{className:"contribution-links",children:w.redirectionLinks.map((Q,H)=>f.jsxs("a",{href:Q,target:"_blank",rel:"noopener noreferrer",className:"contribution-link-btn",onClick:F=>F.stopPropagation(),children:[f.jsx(Yd,{size:14}),M(Q),f.jsx(Cd,{size:14})]},H))}):f.jsxs("span",{className:"contribution-read-more",children:["Read More ",f.jsx(Cd,{size:16})]})]})]});return at?f.jsx("div",{className:"contribution-card-link",children:A},w.id):f.jsx("a",{href:w.redirectionLinks[0],target:"_blank",rel:"noopener noreferrer",className:"contribution-card-link",children:A},w.id)})}),_>1&&f.jsxs("div",{className:"pagination-controls",children:[f.jsxs("button",{className:"pagination-btn",onClick:()=>B(z-1),disabled:z===1,children:[f.jsx(Rh,{size:20})," Previous"]}),f.jsxs("span",{className:"pagination-info",children:["Page ",z," of ",_]}),f.jsxs("button",{className:"pagination-btn",onClick:()=>B(z+1),disabled:z===_,children:["Next ",f.jsx(qh,{size:20})]})]}),_<=1&&gf.length>0&&f.jsx("div",{className:"pagination-controls",children:f.jsx("span",{className:"pagination-info",children:"Page 1 of 1"})})]})},x1=()=>{const[z,E]=Rt.useState("home"),[_,m]=Rt.useState(!1);Rt.useEffect(()=>{window.scrollTo(0,0)},[z]);const D=()=>{switch(z){case"home":return f.jsx(Rd,{setCurrentPage:E});case"about":return f.jsx(g1,{});case"experience":return f.jsx(p1,{});case"projects":return f.jsx(y1,{});case"contributions":return f.jsx(b1,{});case"contact":return f.jsx(v1,{});default:return f.jsx(Rd,{setCurrentPage:E})}};return f.jsxs("div",{className:"app",children:[f.jsx(m1,{}),f.jsx("div",{className:"animated-bg"}),f.jsx(h1,{currentPage:z,setCurrentPage:E,mobileMenuOpen:_,setMobileMenuOpen:m}),f.jsx("main",{className:"main-content",children:D()}),f.jsxs("footer",{className:"footer",children:[f.jsx("p",{children:"© 2026 Abhay Korat. Lead Software Engineer | Mobile Architecture Specialist"}),f.jsx("p",{className:"footer-tagline",children:"Building scalable mobile solutions • Flutter • iOS • Android"})]}),f.jsx("style",{children:`
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

        /* Multi-link buttons */
        .contribution-links {
          display: flex;
          flex-wrap: wrap;
          gap: 0.6rem;
          margin-top: auto;
          padding-top: 0.75rem;
        }

        .contribution-link-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          padding: 0.45rem 1rem;
          border-radius: 10px;
          border: 1px solid rgba(6, 182, 212, 0.3);
          background: rgba(6, 182, 212, 0.08);
          color: #06b6d4;
          font-size: 0.82rem;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.3s ease;
          white-space: nowrap;
        }

        .contribution-link-btn:hover {
          background: rgba(6, 182, 212, 0.2);
          border-color: rgba(6, 182, 212, 0.5);
          box-shadow: 0 4px 15px rgba(6, 182, 212, 0.15);
          color: #22d3ee;
          transform: translateY(-1px);
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
      `})]})};bh.createRoot(document.getElementById("root")).render(f.jsx(Rt.StrictMode,{children:f.jsx(x1,{})}));
