function e(e,t,n,r){Object.defineProperty(e,t,{get:n,set:r,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var n,r,a,i,o,s,l,u,c,f,d,p,h,y,m,g,v,b,w,k,E,S,x,_=globalThis;function P(e,t){return Object.keys(t).forEach(function(n){"default"===n||"__esModule"===n||e.hasOwnProperty(n)||Object.defineProperty(e,n,{enumerable:!0,get:function(){return t[n]}})}),e}var C={},I={},O=_.parcelRequire1ecf;null==O&&((O=function(e){if(e in C)return C[e].exports;if(e in I){var t=I[e];delete I[e];var n={id:e,exports:{}};return C[e]=n,t.call(n.exports,n,n.exports),n.exports}var r=Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){I[e]=t},_.parcelRequire1ecf=O);var N=O.register;N("1b2ls",function(t,n){e(t.exports,"Fragment",()=>r,e=>r=e),e(t.exports,"jsx",()=>a,e=>a=e),e(t.exports,"jsxs",()=>i,e=>i=e);var r,a,i,o=O("acw62"),s=Symbol.for("react.element"),l=Symbol.for("react.fragment"),u=Object.prototype.hasOwnProperty,c=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,f={key:!0,ref:!0,__self:!0,__source:!0};function d(e,t,n){var r,a={},i=null,o=null;for(r in void 0!==n&&(i=""+n),void 0!==t.key&&(i=""+t.key),void 0!==t.ref&&(o=t.ref),t)u.call(t,r)&&!f.hasOwnProperty(r)&&(a[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===a[r]&&(a[r]=t[r]);return{$$typeof:s,type:e,key:i,ref:o,props:a,_owner:c.current}}r=l,a=d,i=d}),N("acw62",function(e,t){e.exports=O("2pUnB")}),N("2pUnB",function(t,n){e(t.exports,"Children",()=>r,e=>r=e),e(t.exports,"Component",()=>a,e=>a=e),e(t.exports,"Fragment",()=>i,e=>i=e),e(t.exports,"Profiler",()=>o,e=>o=e),e(t.exports,"PureComponent",()=>s,e=>s=e),e(t.exports,"StrictMode",()=>l,e=>l=e),e(t.exports,"Suspense",()=>u,e=>u=e),e(t.exports,"__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED",()=>c,e=>c=e),e(t.exports,"cloneElement",()=>f,e=>f=e),e(t.exports,"createContext",()=>d,e=>d=e),e(t.exports,"createElement",()=>p,e=>p=e),e(t.exports,"createFactory",()=>h,e=>h=e),e(t.exports,"createRef",()=>y,e=>y=e),e(t.exports,"forwardRef",()=>m,e=>m=e),e(t.exports,"isValidElement",()=>g,e=>g=e),e(t.exports,"lazy",()=>v,e=>v=e),e(t.exports,"memo",()=>b,e=>b=e),e(t.exports,"startTransition",()=>w,e=>w=e),e(t.exports,"unstable_act",()=>k,e=>k=e),e(t.exports,"useCallback",()=>E,e=>E=e),e(t.exports,"useContext",()=>S,e=>S=e),e(t.exports,"useDebugValue",()=>x,e=>x=e),e(t.exports,"useDeferredValue",()=>_,e=>_=e),e(t.exports,"useEffect",()=>P,e=>P=e),e(t.exports,"useId",()=>C,e=>C=e),e(t.exports,"useImperativeHandle",()=>I,e=>I=e),e(t.exports,"useInsertionEffect",()=>O,e=>O=e),e(t.exports,"useLayoutEffect",()=>N,e=>N=e),e(t.exports,"useMemo",()=>D,e=>D=e),e(t.exports,"useReducer",()=>M,e=>M=e),e(t.exports,"useRef",()=>T,e=>T=e),e(t.exports,"useState",()=>A,e=>A=e),e(t.exports,"useSyncExternalStore",()=>R,e=>R=e),e(t.exports,"useTransition",()=>L,e=>L=e),e(t.exports,"version",()=>B,e=>B=e);var r,a,i,o,s,l,u,c,f,d,p,h,y,m,g,v,b,w,k,E,S,x,_,P,C,I,O,N,D,M,T,A,R,L,B,j=Symbol.for("react.element"),U=Symbol.for("react.portal"),z=Symbol.for("react.fragment"),F=Symbol.for("react.strict_mode"),$=Symbol.for("react.profiler"),G=Symbol.for("react.provider"),V=Symbol.for("react.context"),H=Symbol.for("react.forward_ref"),q=Symbol.for("react.suspense"),W=Symbol.for("react.memo"),K=Symbol.for("react.lazy"),Q=Symbol.iterator,Y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},J=Object.assign,X={};function Z(e,t,n){this.props=e,this.context=t,this.refs=X,this.updater=n||Y}function ee(){}function et(e,t,n){this.props=e,this.context=t,this.refs=X,this.updater=n||Y}Z.prototype.isReactComponent={},Z.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},Z.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},ee.prototype=Z.prototype;var en=et.prototype=new ee;en.constructor=et,J(en,Z.prototype),en.isPureReactComponent=!0;var er=Array.isArray,ea=Object.prototype.hasOwnProperty,ei={current:null},eo={key:!0,ref:!0,__self:!0,__source:!0};function es(e,t,n){var r,a={},i=null,o=null;if(null!=t)for(r in void 0!==t.ref&&(o=t.ref),void 0!==t.key&&(i=""+t.key),t)ea.call(t,r)&&!eo.hasOwnProperty(r)&&(a[r]=t[r]);var s=arguments.length-2;if(1===s)a.children=n;else if(1<s){for(var l=Array(s),u=0;u<s;u++)l[u]=arguments[u+2];a.children=l}if(e&&e.defaultProps)for(r in s=e.defaultProps)void 0===a[r]&&(a[r]=s[r]);return{$$typeof:j,type:e,key:i,ref:o,props:a,_owner:ei.current}}function el(e){return"object"==typeof e&&null!==e&&e.$$typeof===j}var eu=/\/+/g;function ec(e,t){var n,r;return"object"==typeof e&&null!==e&&null!=e.key?(n=""+e.key,r={"=":"=0",":":"=2"},"$"+n.replace(/[=:]/g,function(e){return r[e]})):t.toString(36)}function ef(e,t,n){if(null==e)return e;var r=[],a=0;return function e(t,n,r,a,i){var o,s,l,u=typeof t;("undefined"===u||"boolean"===u)&&(t=null);var c=!1;if(null===t)c=!0;else switch(u){case"string":case"number":c=!0;break;case"object":switch(t.$$typeof){case j:case U:c=!0}}if(c)return i=i(c=t),t=""===a?"."+ec(c,0):a,er(i)?(r="",null!=t&&(r=t.replace(eu,"$&/")+"/"),e(i,n,r,"",function(e){return e})):null!=i&&(el(i)&&(o=i,s=r+(!i.key||c&&c.key===i.key?"":(""+i.key).replace(eu,"$&/")+"/")+t,i={$$typeof:j,type:o.type,key:s,ref:o.ref,props:o.props,_owner:o._owner}),n.push(i)),1;if(c=0,a=""===a?".":a+":",er(t))for(var f=0;f<t.length;f++){var d=a+ec(u=t[f],f);c+=e(u,n,r,d,i)}else if("function"==typeof(d=null===(l=t)||"object"!=typeof l?null:"function"==typeof(l=Q&&l[Q]||l["@@iterator"])?l:null))for(t=d.call(t),f=0;!(u=t.next()).done;)d=a+ec(u=u.value,f++),c+=e(u,n,r,d,i);else if("object"===u)throw Error("Objects are not valid as a React child (found: "+("[object Object]"===(n=String(t))?"object with keys {"+Object.keys(t).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return c}(e,r,"","",function(e){return t.call(n,e,a++)}),r}function ed(e){if(-1===e._status){var t=e._result;(t=t()).then(function(t){(0===e._status||-1===e._status)&&(e._status=1,e._result=t)},function(t){(0===e._status||-1===e._status)&&(e._status=2,e._result=t)}),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var ep={current:null},eh={transition:null};r={map:ef,forEach:function(e,t,n){ef(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return ef(e,function(){t++}),t},toArray:function(e){return ef(e,function(e){return e})||[]},only:function(e){if(!el(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},a=Z,i=z,o=$,s=et,l=F,u=q,c={ReactCurrentDispatcher:ep,ReactCurrentBatchConfig:eh,ReactCurrentOwner:ei},f=function(e,t,n){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=J({},e.props),a=e.key,i=e.ref,o=e._owner;if(null!=t){if(void 0!==t.ref&&(i=t.ref,o=ei.current),void 0!==t.key&&(a=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(l in t)ea.call(t,l)&&!eo.hasOwnProperty(l)&&(r[l]=void 0===t[l]&&void 0!==s?s[l]:t[l])}var l=arguments.length-2;if(1===l)r.children=n;else if(1<l){s=Array(l);for(var u=0;u<l;u++)s[u]=arguments[u+2];r.children=s}return{$$typeof:j,type:e.type,key:a,ref:i,props:r,_owner:o}},d=function(e){return(e={$$typeof:V,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:G,_context:e},e.Consumer=e},p=es,h=function(e){var t=es.bind(null,e);return t.type=e,t},y=function(){return{current:null}},m=function(e){return{$$typeof:H,render:e}},g=el,v=function(e){return{$$typeof:K,_payload:{_status:-1,_result:e},_init:ed}},b=function(e,t){return{$$typeof:W,type:e,compare:void 0===t?null:t}},w=function(e){var t=eh.transition;eh.transition={};try{e()}finally{eh.transition=t}},k=function(){throw Error("act(...) is not supported in production builds of React.")},E=function(e,t){return ep.current.useCallback(e,t)},S=function(e){return ep.current.useContext(e)},x=function(){},_=function(e){return ep.current.useDeferredValue(e)},P=function(e,t){return ep.current.useEffect(e,t)},C=function(){return ep.current.useId()},I=function(e,t,n){return ep.current.useImperativeHandle(e,t,n)},O=function(e,t){return ep.current.useInsertionEffect(e,t)},N=function(e,t){return ep.current.useLayoutEffect(e,t)},D=function(e,t){return ep.current.useMemo(e,t)},M=function(e,t,n){return ep.current.useReducer(e,t,n)},T=function(e){return ep.current.useRef(e)},A=function(e){return ep.current.useState(e)},R=function(e,t,n){return ep.current.useSyncExternalStore(e,t,n)},L=function(){return ep.current.useTransition()},B="18.2.0"}),N("Xw6Mv",function(t,n){e(t.exports,"__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED",()=>G,e=>G=e),e(t.exports,"createPortal",()=>V,e=>V=e),e(t.exports,"createRoot",()=>H,e=>H=e),e(t.exports,"findDOMNode",()=>q,e=>q=e),e(t.exports,"flushSync",()=>W,e=>W=e),e(t.exports,"hydrate",()=>K,e=>K=e),e(t.exports,"hydrateRoot",()=>Q,e=>Q=e),e(t.exports,"render",()=>Y,e=>Y=e),e(t.exports,"unmountComponentAtNode",()=>J,e=>J=e),e(t.exports,"unstable_batchedUpdates",()=>X,e=>X=e),e(t.exports,"unstable_renderSubtreeIntoContainer",()=>Z,e=>Z=e),e(t.exports,"version",()=>ee,e=>ee=e);var r,a,i,o,s,l,u=O("acw62"),c=O("fO90s");function f(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var d=new Set,p={};function h(e,t){y(e,t),y(e+"Capture",t)}function y(e,t){for(p[e]=t,e=0;e<t.length;e++)d.add(t[e])}var m=!("undefined"==typeof window||void 0===window.document||void 0===window.document.createElement),g=Object.prototype.hasOwnProperty,v=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,b={},w={};function k(e,t,n,r,a,i,o){this.acceptsBooleans=2===t||3===t||4===t,this.attributeName=r,this.attributeNamespace=a,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=o}var E={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){E[e]=new k(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];E[t]=new k(t,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){E[e]=new k(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){E[e]=new k(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){E[e]=new k(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){E[e]=new k(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){E[e]=new k(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){E[e]=new k(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){E[e]=new k(e,5,!1,e.toLowerCase(),null,!1,!1)});var S=/[\-:]([a-z])/g;function x(e){return e[1].toUpperCase()}function _(e,t,n,r){var a,i=E.hasOwnProperty(t)?E[t]:null;(null!==i?0!==i.type:r||!(2<t.length)||"o"!==t[0]&&"O"!==t[0]||"n"!==t[1]&&"N"!==t[1])&&(function(e,t,n,r){if(null==t||function(e,t,n,r){if(null!==n&&0===n.type)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":if(r)return!1;if(null!==n)return!n.acceptsBooleans;return"data-"!==(e=e.toLowerCase().slice(0,5))&&"aria-"!==e;default:return!1}}(e,t,n,r))return!0;if(r)return!1;if(null!==n)switch(n.type){case 3:return!t;case 4:return!1===t;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}(t,n,i,r)&&(n=null),r||null===i?(a=t,(!!g.call(w,a)||!g.call(b,a)&&(v.test(a)?w[a]=!0:(b[a]=!0,!1)))&&(null===n?e.removeAttribute(t):e.setAttribute(t,""+n))):i.mustUseProperty?e[i.propertyName]=null===n?3!==i.type&&"":n:(t=i.attributeName,r=i.attributeNamespace,null===n?e.removeAttribute(t):(n=3===(i=i.type)||4===i&&!0===n?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(S,x);E[t]=new k(t,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(S,x);E[t]=new k(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(S,x);E[t]=new k(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){E[e]=new k(e,1,!1,e.toLowerCase(),null,!1,!1)}),E.xlinkHref=new k("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){E[e]=new k(e,1,!1,e.toLowerCase(),null,!0,!0)});var P=u.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,C=Symbol.for("react.element"),I=Symbol.for("react.portal"),N=Symbol.for("react.fragment"),D=Symbol.for("react.strict_mode"),M=Symbol.for("react.profiler"),T=Symbol.for("react.provider"),A=Symbol.for("react.context"),R=Symbol.for("react.forward_ref"),L=Symbol.for("react.suspense"),B=Symbol.for("react.suspense_list"),j=Symbol.for("react.memo"),U=Symbol.for("react.lazy");Symbol.for("react.scope"),Symbol.for("react.debug_trace_mode");var z=Symbol.for("react.offscreen");Symbol.for("react.legacy_hidden"),Symbol.for("react.cache"),Symbol.for("react.tracing_marker");var F=Symbol.iterator;function $(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=F&&e[F]||e["@@iterator"])?e:null}var G,V,H,q,W,K,Q,Y,J,X,Z,ee,et,en=Object.assign;function er(e){if(void 0===et)try{throw Error()}catch(e){var t=e.stack.trim().match(/\n( *(at )?)/);et=t&&t[1]||""}return"\n"+et+e}var ea=!1;function ei(e,t){if(!e||ea)return"";ea=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t){if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),"object"==typeof Reflect&&Reflect.construct){try{Reflect.construct(t,[])}catch(e){var r=e}Reflect.construct(e,[],t)}else{try{t.call()}catch(e){r=e}e.call(t.prototype)}}else{try{throw Error()}catch(e){r=e}e()}}catch(t){if(t&&r&&"string"==typeof t.stack){for(var a=t.stack.split("\n"),i=r.stack.split("\n"),o=a.length-1,s=i.length-1;1<=o&&0<=s&&a[o]!==i[s];)s--;for(;1<=o&&0<=s;o--,s--)if(a[o]!==i[s]){if(1!==o||1!==s)do if(o--,0>--s||a[o]!==i[s]){var l="\n"+a[o].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=o&&0<=s)break}}}finally{ea=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?er(e):""}function eo(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":case"object":return e;default:return""}}function es(e){var t=e.type;return(e=e.nodeName)&&"input"===e.toLowerCase()&&("checkbox"===t||"radio"===t)}function el(e){e._valueTracker||(e._valueTracker=function(e){var t=es(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&void 0!==n&&"function"==typeof n.get&&"function"==typeof n.set){var a=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return a.call(this)},set:function(e){r=""+e,i.call(this,e)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(e){r=""+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}(e))}function eu(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=es(e)?e.checked?"true":"false":e.value),(e=r)!==n&&(t.setValue(e),!0)}function ec(e){if(void 0===(e=e||("undefined"!=typeof document?document:void 0)))return null;try{return e.activeElement||e.body}catch(t){return e.body}}function ef(e,t){var n=t.checked;return en({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:null!=n?n:e._wrapperState.initialChecked})}function ed(e,t){var n=null==t.defaultValue?"":t.defaultValue,r=null!=t.checked?t.checked:t.defaultChecked;n=eo(null!=t.value?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:"checkbox"===t.type||"radio"===t.type?null!=t.checked:null!=t.value}}function ep(e,t){null!=(t=t.checked)&&_(e,"checked",t,!1)}function eh(e,t){ep(e,t);var n=eo(t.value),r=t.type;if(null!=n)"number"===r?(0===n&&""===e.value||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if("submit"===r||"reset"===r){e.removeAttribute("value");return}t.hasOwnProperty("value")?em(e,t.type,n):t.hasOwnProperty("defaultValue")&&em(e,t.type,eo(t.defaultValue)),null==t.checked&&null!=t.defaultChecked&&(e.defaultChecked=!!t.defaultChecked)}function ey(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!("submit"!==r&&"reset"!==r||void 0!==t.value&&null!==t.value))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}""!==(n=e.name)&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,""!==n&&(e.name=n)}function em(e,t,n){("number"!==t||ec(e.ownerDocument)!==e)&&(null==n?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var eg=Array.isArray;function ev(e,t,n,r){if(e=e.options,t){t={};for(var a=0;a<n.length;a++)t["$"+n[a]]=!0;for(n=0;n<e.length;n++)a=t.hasOwnProperty("$"+e[n].value),e[n].selected!==a&&(e[n].selected=a),a&&r&&(e[n].defaultSelected=!0)}else{for(a=0,n=""+eo(n),t=null;a<e.length;a++){if(e[a].value===n){e[a].selected=!0,r&&(e[a].defaultSelected=!0);return}null!==t||e[a].disabled||(t=e[a])}null!==t&&(t.selected=!0)}}function eb(e,t){if(null!=t.dangerouslySetInnerHTML)throw Error(f(91));return en({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function ew(e,t){var n=t.value;if(null==n){if(n=t.children,t=t.defaultValue,null!=n){if(null!=t)throw Error(f(92));if(eg(n)){if(1<n.length)throw Error(f(93));n=n[0]}t=n}null==t&&(t=""),n=t}e._wrapperState={initialValue:eo(n)}}function ek(e,t){var n=eo(t.value),r=eo(t.defaultValue);null!=n&&((n=""+n)!==e.value&&(e.value=n),null==t.defaultValue&&e.defaultValue!==n&&(e.defaultValue=n)),null!=r&&(e.defaultValue=""+r)}function eE(e){var t=e.textContent;t===e._wrapperState.initialValue&&""!==t&&null!==t&&(e.value=t)}function eS(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ex(e,t){return null==e||"http://www.w3.org/1999/xhtml"===e?eS(t):"http://www.w3.org/2000/svg"===e&&"foreignObject"===t?"http://www.w3.org/1999/xhtml":e}var e_,eP,eC=(e_=function(e,t){if("http://www.w3.org/2000/svg"!==e.namespaceURI||"innerHTML"in e)e.innerHTML=t;else{for((eP=eP||document.createElement("div")).innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=eP.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}},"undefined"!=typeof MSApp&&MSApp.execUnsafeLocalFunction?function(e,t,n,r){MSApp.execUnsafeLocalFunction(function(){return e_(e,t,n,r)})}:e_);function eI(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&3===n.nodeType){n.nodeValue=t;return}}e.textContent=t}var eO={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},eN=["Webkit","ms","Moz","O"];function eD(e,t,n){return null==t||"boolean"==typeof t||""===t?"":n||"number"!=typeof t||0===t||eO.hasOwnProperty(e)&&eO[e]?(""+t).trim():t+"px"}function eM(e,t){for(var n in e=e.style,t)if(t.hasOwnProperty(n)){var r=0===n.indexOf("--"),a=eD(n,t[n],r);"float"===n&&(n="cssFloat"),r?e.setProperty(n,a):e[n]=a}}Object.keys(eO).forEach(function(e){eN.forEach(function(t){eO[t=t+e.charAt(0).toUpperCase()+e.substring(1)]=eO[e]})});var eT=en({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function eA(e,t){if(t){if(eT[e]&&(null!=t.children||null!=t.dangerouslySetInnerHTML))throw Error(f(137,e));if(null!=t.dangerouslySetInnerHTML){if(null!=t.children)throw Error(f(60));if("object"!=typeof t.dangerouslySetInnerHTML||!("__html"in t.dangerouslySetInnerHTML))throw Error(f(61))}if(null!=t.style&&"object"!=typeof t.style)throw Error(f(62))}}function eR(e,t){if(-1===e.indexOf("-"))return"string"==typeof t.is;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var eL=null;function eB(e){return(e=e.target||e.srcElement||window).correspondingUseElement&&(e=e.correspondingUseElement),3===e.nodeType?e.parentNode:e}var ej=null,eU=null,ez=null;function eF(e){if(e=rQ(e)){if("function"!=typeof ej)throw Error(f(280));var t=e.stateNode;t&&(t=rJ(t),ej(e.stateNode,e.type,t))}}function e$(e){eU?ez?ez.push(e):ez=[e]:eU=e}function eG(){if(eU){var e=eU,t=ez;if(ez=eU=null,eF(e),t)for(e=0;e<t.length;e++)eF(t[e])}}function eV(e,t){return e(t)}function eH(){}var eq=!1;function eW(e,t,n){if(eq)return e(t,n);eq=!0;try{return eV(e,t,n)}finally{eq=!1,(null!==eU||null!==ez)&&(eH(),eG())}}function eK(e,t){var n=e.stateNode;if(null===n)return null;var r=rJ(n);if(null===r)return null;switch(n=r[t],t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(r=!("button"===(e=e.type)||"input"===e||"select"===e||"textarea"===e)),e=!r;break;default:e=!1}if(e)return null;if(n&&"function"!=typeof n)throw Error(f(231,t,typeof n));return n}var eQ=!1;if(m)try{var eY={};Object.defineProperty(eY,"passive",{get:function(){eQ=!0}}),window.addEventListener("test",eY,eY),window.removeEventListener("test",eY,eY)}catch(e){eQ=!1}function eJ(e,t,n,r,a,i,o,s,l){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(e){this.onError(e)}}var eX=!1,eZ=null,e0=!1,e1=null,e2={onError:function(e){eX=!0,eZ=e}};function e3(e,t,n,r,a,i,o,s,l){eX=!1,eZ=null,eJ.apply(e2,arguments)}function e4(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do 0!=(4098&(t=e).flags)&&(n=t.return),e=t.return;while(e)}return 3===t.tag?n:null}function e6(e){if(13===e.tag){var t=e.memoizedState;if(null===t&&null!==(e=e.alternate)&&(t=e.memoizedState),null!==t)return t.dehydrated}return null}function e8(e){if(e4(e)!==e)throw Error(f(188))}function e5(e){return null!==(e=function(e){var t=e.alternate;if(!t){if(null===(t=e4(e)))throw Error(f(188));return t!==e?null:e}for(var n=e,r=t;;){var a=n.return;if(null===a)break;var i=a.alternate;if(null===i){if(null!==(r=a.return)){n=r;continue}break}if(a.child===i.child){for(i=a.child;i;){if(i===n)return e8(a),e;if(i===r)return e8(a),t;i=i.sibling}throw Error(f(188))}if(n.return!==r.return)n=a,r=i;else{for(var o=!1,s=a.child;s;){if(s===n){o=!0,n=a,r=i;break}if(s===r){o=!0,r=a,n=i;break}s=s.sibling}if(!o){for(s=i.child;s;){if(s===n){o=!0,n=i,r=a;break}if(s===r){o=!0,r=i,n=a;break}s=s.sibling}if(!o)throw Error(f(189))}}if(n.alternate!==r)throw Error(f(190))}if(3!==n.tag)throw Error(f(188));return n.stateNode.current===n?e:t}(e))?function e(t){if(5===t.tag||6===t.tag)return t;for(t=t.child;null!==t;){var n=e(t);if(null!==n)return n;t=t.sibling}return null}(e):null}var e7=c.unstable_scheduleCallback,e9=c.unstable_cancelCallback,te=c.unstable_shouldYield,tt=c.unstable_requestPaint,tn=c.unstable_now,tr=c.unstable_getCurrentPriorityLevel,ta=c.unstable_ImmediatePriority,ti=c.unstable_UserBlockingPriority,to=c.unstable_NormalPriority,ts=c.unstable_LowPriority,tl=c.unstable_IdlePriority,tu=null,tc=null,tf=Math.clz32?Math.clz32:function(e){return 0==(e>>>=0)?32:31-(td(e)/tp|0)|0},td=Math.log,tp=Math.LN2,th=64,ty=4194304;function tm(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return 4194240&e;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return 130023424&e;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function tg(e,t){var n=e.pendingLanes;if(0===n)return 0;var r=0,a=e.suspendedLanes,i=e.pingedLanes,o=268435455&n;if(0!==o){var s=o&~a;0!==s?r=tm(s):0!=(i&=o)&&(r=tm(i))}else 0!=(o=n&~a)?r=tm(o):0!==i&&(r=tm(i));if(0===r)return 0;if(0!==t&&t!==r&&0==(t&a)&&((a=r&-r)>=(i=t&-t)||16===a&&0!=(4194240&i)))return t;if(0!=(4&r)&&(r|=16&n),0!==(t=e.entangledLanes))for(e=e.entanglements,t&=r;0<t;)a=1<<(n=31-tf(t)),r|=e[n],t&=~a;return r}function tv(e){return 0!=(e=-1073741825&e.pendingLanes)?e:1073741824&e?1073741824:0}function tb(){var e=th;return 0==(4194240&(th<<=1))&&(th=64),e}function tw(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function tk(e,t,n){e.pendingLanes|=t,536870912!==t&&(e.suspendedLanes=0,e.pingedLanes=0),(e=e.eventTimes)[t=31-tf(t)]=n}function tE(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-tf(n),a=1<<r;a&t|e[r]&t&&(e[r]|=t),n&=~a}}var tS=0;function tx(e){return 1<(e&=-e)?4<e?0!=(268435455&e)?16:536870912:4:1}var t_,tP,tC,tI,tO,tN=!1,tD=[],tM=null,tT=null,tA=null,tR=new Map,tL=new Map,tB=[],tj="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function tU(e,t){switch(e){case"focusin":case"focusout":tM=null;break;case"dragenter":case"dragleave":tT=null;break;case"mouseover":case"mouseout":tA=null;break;case"pointerover":case"pointerout":tR.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":tL.delete(t.pointerId)}}function tz(e,t,n,r,a,i){return null===e||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[a]},null!==t&&null!==(t=rQ(t))&&tP(t)):(e.eventSystemFlags|=r,t=e.targetContainers,null!==a&&-1===t.indexOf(a)&&t.push(a)),e}function tF(e){var t=rK(e.target);if(null!==t){var n=e4(t);if(null!==n){if(13===(t=n.tag)){if(null!==(t=e6(n))){e.blockedOn=t,tO(e.priority,function(){tC(n)});return}}else if(3===t&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=3===n.tag?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function t$(e){if(null!==e.blockedOn)return!1;for(var t=e.targetContainers;0<t.length;){var n=tZ(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(null!==n)return null!==(t=rQ(n))&&tP(t),e.blockedOn=n,!1;var r=new(n=e.nativeEvent).constructor(n.type,n);eL=r,n.target.dispatchEvent(r),eL=null,t.shift()}return!0}function tG(e,t,n){t$(e)&&n.delete(t)}function tV(){tN=!1,null!==tM&&t$(tM)&&(tM=null),null!==tT&&t$(tT)&&(tT=null),null!==tA&&t$(tA)&&(tA=null),tR.forEach(tG),tL.forEach(tG)}function tH(e,t){e.blockedOn===t&&(e.blockedOn=null,tN||(tN=!0,c.unstable_scheduleCallback(c.unstable_NormalPriority,tV)))}function tq(e){function t(t){return tH(t,e)}if(0<tD.length){tH(tD[0],e);for(var n=1;n<tD.length;n++){var r=tD[n];r.blockedOn===e&&(r.blockedOn=null)}}for(null!==tM&&tH(tM,e),null!==tT&&tH(tT,e),null!==tA&&tH(tA,e),tR.forEach(t),tL.forEach(t),n=0;n<tB.length;n++)(r=tB[n]).blockedOn===e&&(r.blockedOn=null);for(;0<tB.length&&null===(n=tB[0]).blockedOn;)tF(n),null===n.blockedOn&&tB.shift()}var tW=P.ReactCurrentBatchConfig,tK=!0;function tQ(e,t,n,r){var a=tS,i=tW.transition;tW.transition=null;try{tS=1,tJ(e,t,n,r)}finally{tS=a,tW.transition=i}}function tY(e,t,n,r){var a=tS,i=tW.transition;tW.transition=null;try{tS=4,tJ(e,t,n,r)}finally{tS=a,tW.transition=i}}function tJ(e,t,n,r){if(tK){var a=tZ(e,t,n,r);if(null===a)rw(e,t,r,tX,n),tU(e,r);else if(function(e,t,n,r,a){switch(t){case"focusin":return tM=tz(tM,e,t,n,r,a),!0;case"dragenter":return tT=tz(tT,e,t,n,r,a),!0;case"mouseover":return tA=tz(tA,e,t,n,r,a),!0;case"pointerover":var i=a.pointerId;return tR.set(i,tz(tR.get(i)||null,e,t,n,r,a)),!0;case"gotpointercapture":return i=a.pointerId,tL.set(i,tz(tL.get(i)||null,e,t,n,r,a)),!0}return!1}(a,e,t,n,r))r.stopPropagation();else if(tU(e,r),4&t&&-1<tj.indexOf(e)){for(;null!==a;){var i=rQ(a);if(null!==i&&t_(i),null===(i=tZ(e,t,n,r))&&rw(e,t,r,tX,n),i===a)break;a=i}null!==a&&r.stopPropagation()}else rw(e,t,r,null,n)}}var tX=null;function tZ(e,t,n,r){if(tX=null,null!==(e=rK(e=eB(r)))){if(null===(t=e4(e)))e=null;else if(13===(n=t.tag)){if(null!==(e=e6(t)))return e;e=null}else if(3===n){if(t.stateNode.current.memoizedState.isDehydrated)return 3===t.tag?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}return tX=e,null}function t0(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(tr()){case ta:return 1;case ti:return 4;case to:case ts:return 16;case tl:return 536870912;default:return 16}default:return 16}}var t1=null,t2=null,t3=null;function t4(){if(t3)return t3;var e,t,n=t2,r=n.length,a="value"in t1?t1.value:t1.textContent,i=a.length;for(e=0;e<r&&n[e]===a[e];e++);var o=r-e;for(t=1;t<=o&&n[r-t]===a[i-t];t++);return t3=a.slice(e,1<t?1-t:void 0)}function t6(e){var t=e.keyCode;return"charCode"in e?0===(e=e.charCode)&&13===t&&(e=13):e=t,10===e&&(e=13),32<=e||13===e?e:0}function t8(){return!0}function t5(){return!1}function t7(e){function t(t,n,r,a,i){for(var o in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=a,this.target=i,this.currentTarget=null,e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(a):a[o]);return this.isDefaultPrevented=(null!=a.defaultPrevented?a.defaultPrevented:!1===a.returnValue)?t8:t5,this.isPropagationStopped=t5,this}return en(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():"unknown"!=typeof e.returnValue&&(e.returnValue=!1),this.isDefaultPrevented=t8)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():"unknown"!=typeof e.cancelBubble&&(e.cancelBubble=!0),this.isPropagationStopped=t8)},persist:function(){},isPersistent:t8}),t}var t9,ne,nt,nn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},nr=t7(nn),na=en({},nn,{view:0,detail:0}),ni=t7(na),no=en({},na,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ng,button:0,buttons:0,relatedTarget:function(e){return void 0===e.relatedTarget?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==nt&&(nt&&"mousemove"===e.type?(t9=e.screenX-nt.screenX,ne=e.screenY-nt.screenY):ne=t9=0,nt=e),t9)},movementY:function(e){return"movementY"in e?e.movementY:ne}}),ns=t7(no),nl=t7(en({},no,{dataTransfer:0})),nu=t7(en({},na,{relatedTarget:0})),nc=t7(en({},nn,{animationName:0,elapsedTime:0,pseudoElement:0})),nf=t7(en({},nn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}})),nd=t7(en({},nn,{data:0})),np={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},nh={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ny={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function nm(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):!!(e=ny[e])&&!!t[e]}function ng(){return nm}var nv=t7(en({},na,{key:function(e){if(e.key){var t=np[e.key]||e.key;if("Unidentified"!==t)return t}return"keypress"===e.type?13===(e=t6(e))?"Enter":String.fromCharCode(e):"keydown"===e.type||"keyup"===e.type?nh[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ng,charCode:function(e){return"keypress"===e.type?t6(e):0},keyCode:function(e){return"keydown"===e.type||"keyup"===e.type?e.keyCode:0},which:function(e){return"keypress"===e.type?t6(e):"keydown"===e.type||"keyup"===e.type?e.keyCode:0}})),nb=t7(en({},no,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),nw=t7(en({},na,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ng})),nk=t7(en({},nn,{propertyName:0,elapsedTime:0,pseudoElement:0})),nE=t7(en({},no,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0})),nS=[9,13,27,32],nx=m&&"CompositionEvent"in window,n_=null;m&&"documentMode"in document&&(n_=document.documentMode);var nP=m&&"TextEvent"in window&&!n_,nC=m&&(!nx||n_&&8<n_&&11>=n_),nI=!1;function nO(e,t){switch(e){case"keyup":return -1!==nS.indexOf(t.keyCode);case"keydown":return 229!==t.keyCode;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function nN(e){return"object"==typeof(e=e.detail)&&"data"in e?e.data:null}var nD=!1,nM={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function nT(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return"input"===t?!!nM[e.type]:"textarea"===t}function nA(e,t,n,r){e$(r),0<(t=rE(t,"onChange")).length&&(n=new nr("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var nR=null,nL=null;function nB(e){rh(e,0)}function nj(e){if(eu(rY(e)))return e}function nU(e,t){if("change"===e)return t}var nz=!1;if(m){if(m){var nF="oninput"in document;if(!nF){var n$=document.createElement("div");n$.setAttribute("oninput","return;"),nF="function"==typeof n$.oninput}r=nF}else r=!1;nz=r&&(!document.documentMode||9<document.documentMode)}function nG(){nR&&(nR.detachEvent("onpropertychange",nV),nL=nR=null)}function nV(e){if("value"===e.propertyName&&nj(nL)){var t=[];nA(t,nL,e,eB(e)),eW(nB,t)}}function nH(e,t,n){"focusin"===e?(nG(),nR=t,nL=n,nR.attachEvent("onpropertychange",nV)):"focusout"===e&&nG()}function nq(e){if("selectionchange"===e||"keyup"===e||"keydown"===e)return nj(nL)}function nW(e,t){if("click"===e)return nj(t)}function nK(e,t){if("input"===e||"change"===e)return nj(t)}var nQ="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t};function nY(e,t){if(nQ(e,t))return!0;if("object"!=typeof e||null===e||"object"!=typeof t||null===t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var a=n[r];if(!g.call(t,a)||!nQ(e[a],t[a]))return!1}return!0}function nJ(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function nX(e,t){var n,r=nJ(e);for(e=0;r;){if(3===r.nodeType){if(n=e+r.textContent.length,e<=t&&n>=t)return{node:r,offset:t-e};e=n}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=nJ(r)}}function nZ(){for(var e=window,t=ec();t instanceof e.HTMLIFrameElement;){try{var n="string"==typeof t.contentWindow.location.href}catch(e){n=!1}if(n)e=t.contentWindow;else break;t=ec(e.document)}return t}function n0(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&("input"===t&&("text"===e.type||"search"===e.type||"tel"===e.type||"url"===e.type||"password"===e.type)||"textarea"===t||"true"===e.contentEditable)}var n1=m&&"documentMode"in document&&11>=document.documentMode,n2=null,n3=null,n4=null,n6=!1;function n8(e,t,n){var r=n.window===n?n.document:9===n.nodeType?n:n.ownerDocument;n6||null==n2||n2!==ec(r)||(r="selectionStart"in(r=n2)&&n0(r)?{start:r.selectionStart,end:r.selectionEnd}:{anchorNode:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection()).anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset},n4&&nY(n4,r)||(n4=r,0<(r=rE(n3,"onSelect")).length&&(t=new nr("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=n2)))}function n5(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var n7={animationend:n5("Animation","AnimationEnd"),animationiteration:n5("Animation","AnimationIteration"),animationstart:n5("Animation","AnimationStart"),transitionend:n5("Transition","TransitionEnd")},n9={},re={};function rt(e){if(n9[e])return n9[e];if(!n7[e])return e;var t,n=n7[e];for(t in n)if(n.hasOwnProperty(t)&&t in re)return n9[e]=n[t];return e}m&&(re=document.createElement("div").style,"AnimationEvent"in window||(delete n7.animationend.animation,delete n7.animationiteration.animation,delete n7.animationstart.animation),"TransitionEvent"in window||delete n7.transitionend.transition);var rn=rt("animationend"),rr=rt("animationiteration"),ra=rt("animationstart"),ri=rt("transitionend"),ro=new Map,rs="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function rl(e,t){ro.set(e,t),h(t,[e])}for(var ru=0;ru<rs.length;ru++){var rc=rs[ru];rl(rc.toLowerCase(),"on"+(rc[0].toUpperCase()+rc.slice(1)))}rl(rn,"onAnimationEnd"),rl(rr,"onAnimationIteration"),rl(ra,"onAnimationStart"),rl("dblclick","onDoubleClick"),rl("focusin","onFocus"),rl("focusout","onBlur"),rl(ri,"onTransitionEnd"),y("onMouseEnter",["mouseout","mouseover"]),y("onMouseLeave",["mouseout","mouseover"]),y("onPointerEnter",["pointerout","pointerover"]),y("onPointerLeave",["pointerout","pointerover"]),h("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),h("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),h("onBeforeInput",["compositionend","keypress","textInput","paste"]),h("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),h("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),h("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var rf="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),rd=new Set("cancel close invalid load scroll toggle".split(" ").concat(rf));function rp(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,function(e,t,n,r,a,i,o,s,l){if(e3.apply(this,arguments),eX){if(eX){var u=eZ;eX=!1,eZ=null}else throw Error(f(198));e0||(e0=!0,e1=u)}}(r,t,void 0,e),e.currentTarget=null}function rh(e,t){t=0!=(4&t);for(var n=0;n<e.length;n++){var r=e[n],a=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],l=s.instance,u=s.currentTarget;if(s=s.listener,l!==i&&a.isPropagationStopped())break e;rp(a,s,u),i=l}else for(o=0;o<r.length;o++){if(l=(s=r[o]).instance,u=s.currentTarget,s=s.listener,l!==i&&a.isPropagationStopped())break e;rp(a,s,u),i=l}}}if(e0)throw e=e1,e0=!1,e1=null,e}function ry(e,t){var n=t[rH];void 0===n&&(n=t[rH]=new Set);var r=e+"__bubble";n.has(r)||(rb(t,e,2,!1),n.add(r))}function rm(e,t,n){var r=0;t&&(r|=4),rb(n,e,r,t)}var rg="_reactListening"+Math.random().toString(36).slice(2);function rv(e){if(!e[rg]){e[rg]=!0,d.forEach(function(t){"selectionchange"!==t&&(rd.has(t)||rm(t,!1,e),rm(t,!0,e))});var t=9===e.nodeType?e:e.ownerDocument;null===t||t[rg]||(t[rg]=!0,rm("selectionchange",!1,t))}}function rb(e,t,n,r){switch(t0(t)){case 1:var a=tQ;break;case 4:a=tY;break;default:a=tJ}n=a.bind(null,t,n,e),a=void 0,eQ&&("touchstart"===t||"touchmove"===t||"wheel"===t)&&(a=!0),r?void 0!==a?e.addEventListener(t,n,{capture:!0,passive:a}):e.addEventListener(t,n,!0):void 0!==a?e.addEventListener(t,n,{passive:a}):e.addEventListener(t,n,!1)}function rw(e,t,n,r,a){var i=r;if(0==(1&t)&&0==(2&t)&&null!==r)e:for(;;){if(null===r)return;var o=r.tag;if(3===o||4===o){var s=r.stateNode.containerInfo;if(s===a||8===s.nodeType&&s.parentNode===a)break;if(4===o)for(o=r.return;null!==o;){var l=o.tag;if((3===l||4===l)&&((l=o.stateNode.containerInfo)===a||8===l.nodeType&&l.parentNode===a))return;o=o.return}for(;null!==s;){if(null===(o=rK(s)))return;if(5===(l=o.tag)||6===l){r=i=o;continue e}s=s.parentNode}}r=r.return}eW(function(){var r=i,a=eB(n),o=[];e:{var s=ro.get(e);if(void 0!==s){var l=nr,u=e;switch(e){case"keypress":if(0===t6(n))break e;case"keydown":case"keyup":l=nv;break;case"focusin":u="focus",l=nu;break;case"focusout":u="blur",l=nu;break;case"beforeblur":case"afterblur":l=nu;break;case"click":if(2===n.button)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":l=ns;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":l=nl;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":l=nw;break;case rn:case rr:case ra:l=nc;break;case ri:l=nk;break;case"scroll":l=ni;break;case"wheel":l=nE;break;case"copy":case"cut":case"paste":l=nf;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":l=nb}var c=0!=(4&t),f=!c&&"scroll"===e,d=c?null!==s?s+"Capture":null:s;c=[];for(var p,h=r;null!==h;){var y=(p=h).stateNode;if(5===p.tag&&null!==y&&(p=y,null!==d&&null!=(y=eK(h,d))&&c.push(rk(h,y,p))),f)break;h=h.return}0<c.length&&(s=new l(s,u,null,n,a),o.push({event:s,listeners:c}))}}if(0==(7&t)){if(s="mouseover"===e||"pointerover"===e,l="mouseout"===e||"pointerout"===e,!(s&&n!==eL&&(u=n.relatedTarget||n.fromElement)&&(rK(u)||u[rV]))&&(l||s)&&(s=a.window===a?a:(s=a.ownerDocument)?s.defaultView||s.parentWindow:window,l?(u=n.relatedTarget||n.toElement,l=r,null!==(u=u?rK(u):null)&&(f=e4(u),u!==f||5!==u.tag&&6!==u.tag)&&(u=null)):(l=null,u=r),l!==u)){if(c=ns,y="onMouseLeave",d="onMouseEnter",h="mouse",("pointerout"===e||"pointerover"===e)&&(c=nb,y="onPointerLeave",d="onPointerEnter",h="pointer"),f=null==l?s:rY(l),p=null==u?s:rY(u),(s=new c(y,h+"leave",l,n,a)).target=f,s.relatedTarget=p,y=null,rK(a)===r&&((c=new c(d,h+"enter",u,n,a)).target=p,c.relatedTarget=f,y=c),f=y,l&&u)t:{for(c=l,d=u,h=0,p=c;p;p=rS(p))h++;for(p=0,y=d;y;y=rS(y))p++;for(;0<h-p;)c=rS(c),h--;for(;0<p-h;)d=rS(d),p--;for(;h--;){if(c===d||null!==d&&c===d.alternate)break t;c=rS(c),d=rS(d)}c=null}else c=null;null!==l&&rx(o,s,l,c,!1),null!==u&&null!==f&&rx(o,f,u,c,!0)}e:{if("select"===(l=(s=r?rY(r):window).nodeName&&s.nodeName.toLowerCase())||"input"===l&&"file"===s.type)var m,g=nU;else if(nT(s)){if(nz)g=nK;else{g=nq;var v=nH}}else(l=s.nodeName)&&"input"===l.toLowerCase()&&("checkbox"===s.type||"radio"===s.type)&&(g=nW);if(g&&(g=g(e,r))){nA(o,g,n,a);break e}v&&v(e,s,r),"focusout"===e&&(v=s._wrapperState)&&v.controlled&&"number"===s.type&&em(s,"number",s.value)}switch(v=r?rY(r):window,e){case"focusin":(nT(v)||"true"===v.contentEditable)&&(n2=v,n3=r,n4=null);break;case"focusout":n4=n3=n2=null;break;case"mousedown":n6=!0;break;case"contextmenu":case"mouseup":case"dragend":n6=!1,n8(o,n,a);break;case"selectionchange":if(n1)break;case"keydown":case"keyup":n8(o,n,a)}if(nx)t:{switch(e){case"compositionstart":var b="onCompositionStart";break t;case"compositionend":b="onCompositionEnd";break t;case"compositionupdate":b="onCompositionUpdate";break t}b=void 0}else nD?nO(e,n)&&(b="onCompositionEnd"):"keydown"===e&&229===n.keyCode&&(b="onCompositionStart");b&&(nC&&"ko"!==n.locale&&(nD||"onCompositionStart"!==b?"onCompositionEnd"===b&&nD&&(m=t4()):(t2="value"in(t1=a)?t1.value:t1.textContent,nD=!0)),0<(v=rE(r,b)).length&&(b=new nd(b,e,null,n,a),o.push({event:b,listeners:v}),m?b.data=m:null!==(m=nN(n))&&(b.data=m))),(m=nP?function(e,t){switch(e){case"compositionend":return nN(t);case"keypress":if(32!==t.which)return null;return nI=!0," ";case"textInput":return" "===(e=t.data)&&nI?null:e;default:return null}}(e,n):function(e,t){if(nD)return"compositionend"===e||!nx&&nO(e,t)?(e=t4(),t3=t2=t1=null,nD=!1,e):null;switch(e){case"paste":default:return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return nC&&"ko"!==t.locale?null:t.data}}(e,n))&&0<(r=rE(r,"onBeforeInput")).length&&(a=new nd("onBeforeInput","beforeinput",null,n,a),o.push({event:a,listeners:r}),a.data=m)}rh(o,t)})}function rk(e,t,n){return{instance:e,listener:t,currentTarget:n}}function rE(e,t){for(var n=t+"Capture",r=[];null!==e;){var a=e,i=a.stateNode;5===a.tag&&null!==i&&(a=i,null!=(i=eK(e,n))&&r.unshift(rk(e,i,a)),null!=(i=eK(e,t))&&r.push(rk(e,i,a))),e=e.return}return r}function rS(e){if(null===e)return null;do e=e.return;while(e&&5!==e.tag)return e||null}function rx(e,t,n,r,a){for(var i=t._reactName,o=[];null!==n&&n!==r;){var s=n,l=s.alternate,u=s.stateNode;if(null!==l&&l===r)break;5===s.tag&&null!==u&&(s=u,a?null!=(l=eK(n,i))&&o.unshift(rk(n,l,s)):a||null!=(l=eK(n,i))&&o.push(rk(n,l,s))),n=n.return}0!==o.length&&e.push({event:t,listeners:o})}var r_=/\r\n?/g,rP=/\u0000|\uFFFD/g;function rC(e){return("string"==typeof e?e:""+e).replace(r_,"\n").replace(rP,"")}function rI(e,t,n){if(t=rC(t),rC(e)!==t&&n)throw Error(f(425))}function rO(){}var rN=null,rD=null;function rM(e,t){return"textarea"===e||"noscript"===e||"string"==typeof t.children||"number"==typeof t.children||"object"==typeof t.dangerouslySetInnerHTML&&null!==t.dangerouslySetInnerHTML&&null!=t.dangerouslySetInnerHTML.__html}var rT="function"==typeof setTimeout?setTimeout:void 0,rA="function"==typeof clearTimeout?clearTimeout:void 0,rR="function"==typeof Promise?Promise:void 0,rL="function"==typeof queueMicrotask?queueMicrotask:void 0!==rR?function(e){return rR.resolve(null).then(e).catch(rB)}:rT;function rB(e){setTimeout(function(){throw e})}function rj(e,t){var n=t,r=0;do{var a=n.nextSibling;if(e.removeChild(n),a&&8===a.nodeType){if("/$"===(n=a.data)){if(0===r){e.removeChild(a),tq(t);return}r--}else"$"!==n&&"$?"!==n&&"$!"!==n||r++}n=a}while(n)tq(t)}function rU(e){for(;null!=e;e=e.nextSibling){var t=e.nodeType;if(1===t||3===t)break;if(8===t){if("$"===(t=e.data)||"$!"===t||"$?"===t)break;if("/$"===t)return null}}return e}function rz(e){e=e.previousSibling;for(var t=0;e;){if(8===e.nodeType){var n=e.data;if("$"===n||"$!"===n||"$?"===n){if(0===t)return e;t--}else"/$"===n&&t++}e=e.previousSibling}return null}var rF=Math.random().toString(36).slice(2),r$="__reactFiber$"+rF,rG="__reactProps$"+rF,rV="__reactContainer$"+rF,rH="__reactEvents$"+rF,rq="__reactListeners$"+rF,rW="__reactHandles$"+rF;function rK(e){var t=e[r$];if(t)return t;for(var n=e.parentNode;n;){if(t=n[rV]||n[r$]){if(n=t.alternate,null!==t.child||null!==n&&null!==n.child)for(e=rz(e);null!==e;){if(n=e[r$])return n;e=rz(e)}return t}n=(e=n).parentNode}return null}function rQ(e){return(e=e[r$]||e[rV])&&(5===e.tag||6===e.tag||13===e.tag||3===e.tag)?e:null}function rY(e){if(5===e.tag||6===e.tag)return e.stateNode;throw Error(f(33))}function rJ(e){return e[rG]||null}var rX=[],rZ=-1;function r0(e){return{current:e}}function r1(e){0>rZ||(e.current=rX[rZ],rX[rZ]=null,rZ--)}function r2(e,t){rX[++rZ]=e.current,e.current=t}var r3={},r4=r0(r3),r6=r0(!1),r8=r3;function r5(e,t){var n=e.type.contextTypes;if(!n)return r3;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var a,i={};for(a in n)i[a]=t[a];return r&&((e=e.stateNode).__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function r7(e){return null!=(e=e.childContextTypes)}function r9(){r1(r6),r1(r4)}function ae(e,t,n){if(r4.current!==r3)throw Error(f(168));r2(r4,t),r2(r6,n)}function at(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,"function"!=typeof r.getChildContext)return n;for(var a in r=r.getChildContext())if(!(a in t))throw Error(f(108,function(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=(e=t.render).displayName||e.name||"",t.displayName||(""!==e?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return function e(t){if(null==t)return null;if("function"==typeof t)return t.displayName||t.name||null;if("string"==typeof t)return t;switch(t){case N:return"Fragment";case I:return"Portal";case M:return"Profiler";case D:return"StrictMode";case L:return"Suspense";case B:return"SuspenseList"}if("object"==typeof t)switch(t.$$typeof){case A:return(t.displayName||"Context")+".Consumer";case T:return(t._context.displayName||"Context")+".Provider";case R:var n=t.render;return(t=t.displayName)||(t=""!==(t=n.displayName||n.name||"")?"ForwardRef("+t+")":"ForwardRef"),t;case j:return null!==(n=t.displayName||null)?n:e(t.type)||"Memo";case U:n=t._payload,t=t._init;try{return e(t(n))}catch(e){}}return null}(t);case 8:return t===D?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if("function"==typeof t)return t.displayName||t.name||null;if("string"==typeof t)return t}return null}(e)||"Unknown",a));return en({},n,r)}function an(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||r3,r8=r4.current,r2(r4,e),r2(r6,r6.current),!0}function ar(e,t,n){var r=e.stateNode;if(!r)throw Error(f(169));n?(e=at(e,t,r8),r.__reactInternalMemoizedMergedChildContext=e,r1(r6),r1(r4),r2(r4,e)):r1(r6),r2(r6,n)}var aa=null,ai=!1,ao=!1;function as(e){null===aa?aa=[e]:aa.push(e)}function al(){if(!ao&&null!==aa){ao=!0;var e=0,t=tS;try{var n=aa;for(tS=1;e<n.length;e++){var r=n[e];do r=r(!0);while(null!==r)}aa=null,ai=!1}catch(t){throw null!==aa&&(aa=aa.slice(e+1)),e7(ta,al),t}finally{tS=t,ao=!1}}return null}var au=[],ac=0,af=null,ad=0,ap=[],ah=0,ay=null,am=1,ag="";function av(e,t){au[ac++]=ad,au[ac++]=af,af=e,ad=t}function ab(e,t,n){ap[ah++]=am,ap[ah++]=ag,ap[ah++]=ay,ay=e;var r=am;e=ag;var a=32-tf(r)-1;r&=~(1<<a),n+=1;var i=32-tf(t)+a;if(30<i){var o=a-a%5;i=(r&(1<<o)-1).toString(32),r>>=o,a-=o,am=1<<32-tf(t)+a|n<<a|r,ag=i+e}else am=1<<i|n<<a|r,ag=e}function aw(e){null!==e.return&&(av(e,1),ab(e,1,0))}function ak(e){for(;e===af;)af=au[--ac],au[ac]=null,ad=au[--ac],au[ac]=null;for(;e===ay;)ay=ap[--ah],ap[ah]=null,ag=ap[--ah],ap[ah]=null,am=ap[--ah],ap[ah]=null}var aE=null,aS=null,ax=!1,a_=null;function aP(e,t){var n=s7(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,null===(t=e.deletions)?(e.deletions=[n],e.flags|=16):t.push(n)}function aC(e,t){switch(e.tag){case 5:var n=e.type;return null!==(t=1!==t.nodeType||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t)&&(e.stateNode=t,aE=e,aS=rU(t.firstChild),!0);case 6:return null!==(t=""===e.pendingProps||3!==t.nodeType?null:t)&&(e.stateNode=t,aE=e,aS=null,!0);case 13:return null!==(t=8!==t.nodeType?null:t)&&(n=null!==ay?{id:am,overflow:ag}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},(n=s7(18,null,null,0)).stateNode=t,n.return=e,e.child=n,aE=e,aS=null,!0);default:return!1}}function aI(e){return 0!=(1&e.mode)&&0==(128&e.flags)}function aO(e){if(ax){var t=aS;if(t){var n=t;if(!aC(e,t)){if(aI(e))throw Error(f(418));t=rU(n.nextSibling);var r=aE;t&&aC(e,t)?aP(r,n):(e.flags=-4097&e.flags|2,ax=!1,aE=e)}}else{if(aI(e))throw Error(f(418));e.flags=-4097&e.flags|2,ax=!1,aE=e}}}function aN(e){for(e=e.return;null!==e&&5!==e.tag&&3!==e.tag&&13!==e.tag;)e=e.return;aE=e}function aD(e){if(e!==aE)return!1;if(!ax)return aN(e),ax=!0,!1;if((t=3!==e.tag)&&!(t=5!==e.tag)&&(t="head"!==(t=e.type)&&"body"!==t&&!rM(e.type,e.memoizedProps)),t&&(t=aS)){if(aI(e))throw aM(),Error(f(418));for(;t;)aP(e,t),t=rU(t.nextSibling)}if(aN(e),13===e.tag){if(!(e=null!==(e=e.memoizedState)?e.dehydrated:null))throw Error(f(317));e:{for(t=0,e=e.nextSibling;e;){if(8===e.nodeType){var t,n=e.data;if("/$"===n){if(0===t){aS=rU(e.nextSibling);break e}t--}else"$"!==n&&"$!"!==n&&"$?"!==n||t++}e=e.nextSibling}aS=null}}else aS=aE?rU(e.stateNode.nextSibling):null;return!0}function aM(){for(var e=aS;e;)e=rU(e.nextSibling)}function aT(){aS=aE=null,ax=!1}function aA(e){null===a_?a_=[e]:a_.push(e)}var aR=P.ReactCurrentBatchConfig;function aL(e,t){if(e&&e.defaultProps)for(var n in t=en({},t),e=e.defaultProps)void 0===t[n]&&(t[n]=e[n]);return t}var aB=r0(null),aj=null,aU=null,az=null;function aF(){az=aU=aj=null}function a$(e){var t=aB.current;r1(aB),e._currentValue=t}function aG(e,t,n){for(;null!==e;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,null!==r&&(r.childLanes|=t)):null!==r&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function aV(e,t){aj=e,az=aU=null,null!==(e=e.dependencies)&&null!==e.firstContext&&(0!=(e.lanes&t)&&(ok=!0),e.firstContext=null)}function aH(e){var t=e._currentValue;if(az!==e){if(e={context:e,memoizedValue:t,next:null},null===aU){if(null===aj)throw Error(f(308));aU=e,aj.dependencies={lanes:0,firstContext:e}}else aU=aU.next=e}return t}var aq=null;function aW(e){null===aq?aq=[e]:aq.push(e)}function aK(e,t,n,r){var a=t.interleaved;return null===a?(n.next=n,aW(t)):(n.next=a.next,a.next=n),t.interleaved=n,aQ(e,r)}function aQ(e,t){e.lanes|=t;var n=e.alternate;for(null!==n&&(n.lanes|=t),n=e,e=e.return;null!==e;)e.childLanes|=t,null!==(n=e.alternate)&&(n.childLanes|=t),n=e,e=e.return;return 3===n.tag?n.stateNode:null}var aY=!1;function aJ(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function aX(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function aZ(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function a0(e,t,n){var r=e.updateQueue;if(null===r)return null;if(r=r.shared,0!=(2&sl)){var a=r.pending;return null===a?t.next=t:(t.next=a.next,a.next=t),r.pending=t,aQ(e,n)}return null===(a=r.interleaved)?(t.next=t,aW(r)):(t.next=a.next,a.next=t),r.interleaved=t,aQ(e,n)}function a1(e,t,n){if(null!==(t=t.updateQueue)&&(t=t.shared,0!=(4194240&n))){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,tE(e,n)}}function a2(e,t){var n=e.updateQueue,r=e.alternate;if(null!==r&&n===(r=r.updateQueue)){var a=null,i=null;if(null!==(n=n.firstBaseUpdate)){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};null===i?a=i=o:i=i.next=o,n=n.next}while(null!==n)null===i?a=i=t:i=i.next=t}else a=i=t;n={baseState:r.baseState,firstBaseUpdate:a,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}null===(e=n.lastBaseUpdate)?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function a3(e,t,n,r){var a=e.updateQueue;aY=!1;var i=a.firstBaseUpdate,o=a.lastBaseUpdate,s=a.shared.pending;if(null!==s){a.shared.pending=null;var l=s,u=l.next;l.next=null,null===o?i=u:o.next=u,o=l;var c=e.alternate;null!==c&&(s=(c=c.updateQueue).lastBaseUpdate)!==o&&(null===s?c.firstBaseUpdate=u:s.next=u,c.lastBaseUpdate=l)}if(null!==i){var f=a.baseState;for(o=0,c=u=l=null,s=i;;){var d=s.lane,p=s.eventTime;if((r&d)===d){null!==c&&(c=c.next={eventTime:p,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var h=e,y=s;switch(d=t,p=n,y.tag){case 1:if("function"==typeof(h=y.payload)){f=h.call(p,f,d);break e}f=h;break e;case 3:h.flags=-65537&h.flags|128;case 0:if(null==(d="function"==typeof(h=y.payload)?h.call(p,f,d):h))break e;f=en({},f,d);break e;case 2:aY=!0}}null!==s.callback&&0!==s.lane&&(e.flags|=64,null===(d=a.effects)?a.effects=[s]:d.push(s))}else p={eventTime:p,lane:d,tag:s.tag,payload:s.payload,callback:s.callback,next:null},null===c?(u=c=p,l=f):c=c.next=p,o|=d;if(null===(s=s.next)){if(null===(s=a.shared.pending))break;s=(d=s).next,d.next=null,a.lastBaseUpdate=d,a.shared.pending=null}}if(null===c&&(l=f),a.baseState=l,a.firstBaseUpdate=u,a.lastBaseUpdate=c,null!==(t=a.shared.interleaved)){a=t;do o|=a.lane,a=a.next;while(a!==t)}else null===i&&(a.shared.lanes=0);sm|=o,e.lanes=o,e.memoizedState=f}}function a4(e,t,n){if(e=t.effects,t.effects=null,null!==e)for(t=0;t<e.length;t++){var r=e[t],a=r.callback;if(null!==a){if(r.callback=null,r=n,"function"!=typeof a)throw Error(f(191,a));a.call(r)}}}var a6=(new u.Component).refs;function a8(e,t,n,r){n=null==(n=n(r,t=e.memoizedState))?t:en({},t,n),e.memoizedState=n,0===e.lanes&&(e.updateQueue.baseState=n)}var a5={isMounted:function(e){return!!(e=e._reactInternals)&&e4(e)===e},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=sA(),a=sR(e),i=aZ(r,a);i.payload=t,null!=n&&(i.callback=n),null!==(t=a0(e,i,a))&&(sL(t,e,a,r),a1(t,e,a))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=sA(),a=sR(e),i=aZ(r,a);i.tag=1,i.payload=t,null!=n&&(i.callback=n),null!==(t=a0(e,i,a))&&(sL(t,e,a,r),a1(t,e,a))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=sA(),r=sR(e),a=aZ(n,r);a.tag=2,null!=t&&(a.callback=t),null!==(t=a0(e,a,r))&&(sL(t,e,r,n),a1(t,e,r))}};function a7(e,t,n,r,a,i,o){return"function"==typeof(e=e.stateNode).shouldComponentUpdate?e.shouldComponentUpdate(r,i,o):!t.prototype||!t.prototype.isPureReactComponent||!nY(n,r)||!nY(a,i)}function a9(e,t,n){var r=!1,a=r3,i=t.contextType;return"object"==typeof i&&null!==i?i=aH(i):(a=r7(t)?r8:r4.current,i=(r=null!=(r=t.contextTypes))?r5(e,a):r3),t=new t(n,i),e.memoizedState=null!==t.state&&void 0!==t.state?t.state:null,t.updater=a5,e.stateNode=t,t._reactInternals=e,r&&((e=e.stateNode).__reactInternalMemoizedUnmaskedChildContext=a,e.__reactInternalMemoizedMaskedChildContext=i),t}function ie(e,t,n,r){e=t.state,"function"==typeof t.componentWillReceiveProps&&t.componentWillReceiveProps(n,r),"function"==typeof t.UNSAFE_componentWillReceiveProps&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&a5.enqueueReplaceState(t,t.state,null)}function it(e,t,n,r){var a=e.stateNode;a.props=n,a.state=e.memoizedState,a.refs=a6,aJ(e);var i=t.contextType;"object"==typeof i&&null!==i?a.context=aH(i):(i=r7(t)?r8:r4.current,a.context=r5(e,i)),a.state=e.memoizedState,"function"==typeof(i=t.getDerivedStateFromProps)&&(a8(e,t,i,n),a.state=e.memoizedState),"function"==typeof t.getDerivedStateFromProps||"function"==typeof a.getSnapshotBeforeUpdate||"function"!=typeof a.UNSAFE_componentWillMount&&"function"!=typeof a.componentWillMount||(t=a.state,"function"==typeof a.componentWillMount&&a.componentWillMount(),"function"==typeof a.UNSAFE_componentWillMount&&a.UNSAFE_componentWillMount(),t!==a.state&&a5.enqueueReplaceState(a,a.state,null),a3(e,n,a,r),a.state=e.memoizedState),"function"==typeof a.componentDidMount&&(e.flags|=4194308)}function ir(e,t,n){if(null!==(e=n.ref)&&"function"!=typeof e&&"object"!=typeof e){if(n._owner){if(n=n._owner){if(1!==n.tag)throw Error(f(309));var r=n.stateNode}if(!r)throw Error(f(147,e));var a=r,i=""+e;return null!==t&&null!==t.ref&&"function"==typeof t.ref&&t.ref._stringRef===i?t.ref:((t=function(e){var t=a.refs;t===a6&&(t=a.refs={}),null===e?delete t[i]:t[i]=e})._stringRef=i,t)}if("string"!=typeof e)throw Error(f(284));if(!n._owner)throw Error(f(290,e))}return e}function ia(e,t){throw Error(f(31,"[object Object]"===(e=Object.prototype.toString.call(t))?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function ii(e){return(0,e._init)(e._payload)}function io(e){function t(t,n){if(e){var r=t.deletions;null===r?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;null!==r;)t(n,r),r=r.sibling;return null}function r(e,t){for(e=new Map;null!==t;)null!==t.key?e.set(t.key,t):e.set(t.index,t),t=t.sibling;return e}function a(e,t){return(e=le(e,t)).index=0,e.sibling=null,e}function i(t,n,r){return(t.index=r,e)?null!==(r=t.alternate)?(r=r.index)<n?(t.flags|=2,n):r:(t.flags|=2,n):(t.flags|=1048576,n)}function o(t){return e&&null===t.alternate&&(t.flags|=2),t}function s(e,t,n,r){return null===t||6!==t.tag?(t=la(n,e.mode,r)).return=e:(t=a(t,n)).return=e,t}function l(e,t,n,r){var i=n.type;return i===N?c(e,t,n.props.children,r,n.key):(null!==t&&(t.elementType===i||"object"==typeof i&&null!==i&&i.$$typeof===U&&ii(i)===t.type)?(r=a(t,n.props)).ref=ir(e,t,n):(r=lt(n.type,n.key,n.props,null,e.mode,r)).ref=ir(e,t,n),r.return=e,r)}function u(e,t,n,r){return null===t||4!==t.tag||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?(t=li(n,e.mode,r)).return=e:(t=a(t,n.children||[])).return=e,t}function c(e,t,n,r,i){return null===t||7!==t.tag?(t=ln(n,e.mode,r,i)).return=e:(t=a(t,n)).return=e,t}function d(e,t,n){if("string"==typeof t&&""!==t||"number"==typeof t)return(t=la(""+t,e.mode,n)).return=e,t;if("object"==typeof t&&null!==t){switch(t.$$typeof){case C:return(n=lt(t.type,t.key,t.props,null,e.mode,n)).ref=ir(e,null,t),n.return=e,n;case I:return(t=li(t,e.mode,n)).return=e,t;case U:return d(e,(0,t._init)(t._payload),n)}if(eg(t)||$(t))return(t=ln(t,e.mode,n,null)).return=e,t;ia(e,t)}return null}function p(e,t,n,r){var a=null!==t?t.key:null;if("string"==typeof n&&""!==n||"number"==typeof n)return null!==a?null:s(e,t,""+n,r);if("object"==typeof n&&null!==n){switch(n.$$typeof){case C:return n.key===a?l(e,t,n,r):null;case I:return n.key===a?u(e,t,n,r):null;case U:return p(e,t,(a=n._init)(n._payload),r)}if(eg(n)||$(n))return null!==a?null:c(e,t,n,r,null);ia(e,n)}return null}function h(e,t,n,r,a){if("string"==typeof r&&""!==r||"number"==typeof r)return s(t,e=e.get(n)||null,""+r,a);if("object"==typeof r&&null!==r){switch(r.$$typeof){case C:return l(t,e=e.get(null===r.key?n:r.key)||null,r,a);case I:return u(t,e=e.get(null===r.key?n:r.key)||null,r,a);case U:return h(e,t,n,(0,r._init)(r._payload),a)}if(eg(r)||$(r))return c(t,e=e.get(n)||null,r,a,null);ia(t,r)}return null}return function s(l,u,c,y){if("object"==typeof c&&null!==c&&c.type===N&&null===c.key&&(c=c.props.children),"object"==typeof c&&null!==c){switch(c.$$typeof){case C:e:{for(var m=c.key,g=u;null!==g;){if(g.key===m){if((m=c.type)===N){if(7===g.tag){n(l,g.sibling),(u=a(g,c.props.children)).return=l,l=u;break e}}else if(g.elementType===m||"object"==typeof m&&null!==m&&m.$$typeof===U&&ii(m)===g.type){n(l,g.sibling),(u=a(g,c.props)).ref=ir(l,g,c),u.return=l,l=u;break e}n(l,g);break}t(l,g),g=g.sibling}c.type===N?((u=ln(c.props.children,l.mode,y,c.key)).return=l,l=u):((y=lt(c.type,c.key,c.props,null,l.mode,y)).ref=ir(l,u,c),y.return=l,l=y)}return o(l);case I:e:{for(g=c.key;null!==u;){if(u.key===g){if(4===u.tag&&u.stateNode.containerInfo===c.containerInfo&&u.stateNode.implementation===c.implementation){n(l,u.sibling),(u=a(u,c.children||[])).return=l,l=u;break e}n(l,u);break}t(l,u),u=u.sibling}(u=li(c,l.mode,y)).return=l,l=u}return o(l);case U:return s(l,u,(g=c._init)(c._payload),y)}if(eg(c))return function(a,o,s,l){for(var u=null,c=null,f=o,y=o=0,m=null;null!==f&&y<s.length;y++){f.index>y?(m=f,f=null):m=f.sibling;var g=p(a,f,s[y],l);if(null===g){null===f&&(f=m);break}e&&f&&null===g.alternate&&t(a,f),o=i(g,o,y),null===c?u=g:c.sibling=g,c=g,f=m}if(y===s.length)return n(a,f),ax&&av(a,y),u;if(null===f){for(;y<s.length;y++)null!==(f=d(a,s[y],l))&&(o=i(f,o,y),null===c?u=f:c.sibling=f,c=f);return ax&&av(a,y),u}for(f=r(a,f);y<s.length;y++)null!==(m=h(f,a,y,s[y],l))&&(e&&null!==m.alternate&&f.delete(null===m.key?y:m.key),o=i(m,o,y),null===c?u=m:c.sibling=m,c=m);return e&&f.forEach(function(e){return t(a,e)}),ax&&av(a,y),u}(l,u,c,y);if($(c))return function(a,o,s,l){var u=$(s);if("function"!=typeof u)throw Error(f(150));if(null==(s=u.call(s)))throw Error(f(151));for(var c=u=null,y=o,m=o=0,g=null,v=s.next();null!==y&&!v.done;m++,v=s.next()){y.index>m?(g=y,y=null):g=y.sibling;var b=p(a,y,v.value,l);if(null===b){null===y&&(y=g);break}e&&y&&null===b.alternate&&t(a,y),o=i(b,o,m),null===c?u=b:c.sibling=b,c=b,y=g}if(v.done)return n(a,y),ax&&av(a,m),u;if(null===y){for(;!v.done;m++,v=s.next())null!==(v=d(a,v.value,l))&&(o=i(v,o,m),null===c?u=v:c.sibling=v,c=v);return ax&&av(a,m),u}for(y=r(a,y);!v.done;m++,v=s.next())null!==(v=h(y,a,m,v.value,l))&&(e&&null!==v.alternate&&y.delete(null===v.key?m:v.key),o=i(v,o,m),null===c?u=v:c.sibling=v,c=v);return e&&y.forEach(function(e){return t(a,e)}),ax&&av(a,m),u}(l,u,c,y);ia(l,c)}return"string"==typeof c&&""!==c||"number"==typeof c?(c=""+c,null!==u&&6===u.tag?(n(l,u.sibling),(u=a(u,c)).return=l):(n(l,u),(u=la(c,l.mode,y)).return=l),o(l=u)):n(l,u)}}var is=io(!0),il=io(!1),iu={},ic=r0(iu),id=r0(iu),ip=r0(iu);function ih(e){if(e===iu)throw Error(f(174));return e}function iy(e,t){switch(r2(ip,t),r2(id,e),r2(ic,iu),e=t.nodeType){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:ex(null,"");break;default:t=ex(t=(e=8===e?t.parentNode:t).namespaceURI||null,e=e.tagName)}r1(ic),r2(ic,t)}function im(){r1(ic),r1(id),r1(ip)}function ig(e){ih(ip.current);var t=ih(ic.current),n=ex(t,e.type);t!==n&&(r2(id,e),r2(ic,n))}function iv(e){id.current===e&&(r1(ic),r1(id))}var ib=r0(0);function iw(e){for(var t=e;null!==t;){if(13===t.tag){var n=t.memoizedState;if(null!==n&&(null===(n=n.dehydrated)||"$?"===n.data||"$!"===n.data))return t}else if(19===t.tag&&void 0!==t.memoizedProps.revealOrder){if(0!=(128&t.flags))return t}else if(null!==t.child){t.child.return=t,t=t.child;continue}if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ik=[];function iE(){for(var e=0;e<ik.length;e++)ik[e]._workInProgressVersionPrimary=null;ik.length=0}var iS=P.ReactCurrentDispatcher,ix=P.ReactCurrentBatchConfig,i_=0,iP=null,iC=null,iI=null,iO=!1,iN=!1,iD=0,iM=0;function iT(){throw Error(f(321))}function iA(e,t){if(null===t)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!nQ(e[n],t[n]))return!1;return!0}function iR(e,t,n,r,a,i){if(i_=i,iP=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,iS.current=null===e||null===e.memoizedState?ol:ou,e=n(r,a),iN){i=0;do{if(iN=!1,iD=0,25<=i)throw Error(f(301));i+=1,iI=iC=null,t.updateQueue=null,iS.current=oc,e=n(r,a)}while(iN)}if(iS.current=os,t=null!==iC&&null!==iC.next,i_=0,iI=iC=iP=null,iO=!1,t)throw Error(f(300));return e}function iL(){var e=0!==iD;return iD=0,e}function iB(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return null===iI?iP.memoizedState=iI=e:iI=iI.next=e,iI}function ij(){if(null===iC){var e=iP.alternate;e=null!==e?e.memoizedState:null}else e=iC.next;var t=null===iI?iP.memoizedState:iI.next;if(null!==t)iI=t,iC=e;else{if(null===e)throw Error(f(310));e={memoizedState:(iC=e).memoizedState,baseState:iC.baseState,baseQueue:iC.baseQueue,queue:iC.queue,next:null},null===iI?iP.memoizedState=iI=e:iI=iI.next=e}return iI}function iU(e,t){return"function"==typeof t?t(e):t}function iz(e){var t=ij(),n=t.queue;if(null===n)throw Error(f(311));n.lastRenderedReducer=e;var r=iC,a=r.baseQueue,i=n.pending;if(null!==i){if(null!==a){var o=a.next;a.next=i.next,i.next=o}r.baseQueue=a=i,n.pending=null}if(null!==a){i=a.next,r=r.baseState;var s=o=null,l=null,u=i;do{var c=u.lane;if((i_&c)===c)null!==l&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var d={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};null===l?(s=l=d,o=r):l=l.next=d,iP.lanes|=c,sm|=c}u=u.next}while(null!==u&&u!==i)null===l?o=r:l.next=s,nQ(r,t.memoizedState)||(ok=!0),t.memoizedState=r,t.baseState=o,t.baseQueue=l,n.lastRenderedState=r}if(null!==(e=n.interleaved)){a=e;do i=a.lane,iP.lanes|=i,sm|=i,a=a.next;while(a!==e)}else null===a&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function iF(e){var t=ij(),n=t.queue;if(null===n)throw Error(f(311));n.lastRenderedReducer=e;var r=n.dispatch,a=n.pending,i=t.memoizedState;if(null!==a){n.pending=null;var o=a=a.next;do i=e(i,o.action),o=o.next;while(o!==a)nQ(i,t.memoizedState)||(ok=!0),t.memoizedState=i,null===t.baseQueue&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function i$(){}function iG(e,t){var n=iP,r=ij(),a=t(),i=!nQ(r.memoizedState,a);if(i&&(r.memoizedState=a,ok=!0),r=r.queue,i1(iq.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||null!==iI&&1&iI.memoizedState.tag){if(n.flags|=2048,iY(9,iH.bind(null,n,r,a,t),void 0,null),null===su)throw Error(f(349));0!=(30&i_)||iV(n,t,a)}return a}function iV(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},null===(t=iP.updateQueue)?(t={lastEffect:null,stores:null},iP.updateQueue=t,t.stores=[e]):null===(n=t.stores)?t.stores=[e]:n.push(e)}function iH(e,t,n,r){t.value=n,t.getSnapshot=r,iW(t)&&iK(e)}function iq(e,t,n){return n(function(){iW(t)&&iK(e)})}function iW(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!nQ(e,n)}catch(e){return!0}}function iK(e){var t=aQ(e,1);null!==t&&sL(t,e,1,-1)}function iQ(e){var t=iB();return"function"==typeof e&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:iU,lastRenderedState:e},t.queue=e,e=e.dispatch=or.bind(null,iP,e),[t.memoizedState,e]}function iY(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},null===(t=iP.updateQueue)?(t={lastEffect:null,stores:null},iP.updateQueue=t,t.lastEffect=e.next=e):null===(n=t.lastEffect)?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function iJ(){return ij().memoizedState}function iX(e,t,n,r){var a=iB();iP.flags|=e,a.memoizedState=iY(1|t,n,void 0,void 0===r?null:r)}function iZ(e,t,n,r){var a=ij();r=void 0===r?null:r;var i=void 0;if(null!==iC){var o=iC.memoizedState;if(i=o.destroy,null!==r&&iA(r,o.deps)){a.memoizedState=iY(t,n,i,r);return}}iP.flags|=e,a.memoizedState=iY(1|t,n,i,r)}function i0(e,t){return iX(8390656,8,e,t)}function i1(e,t){return iZ(2048,8,e,t)}function i2(e,t){return iZ(4,2,e,t)}function i3(e,t){return iZ(4,4,e,t)}function i4(e,t){return"function"==typeof t?(t(e=e()),function(){t(null)}):null!=t?(e=e(),t.current=e,function(){t.current=null}):void 0}function i6(e,t,n){return n=null!=n?n.concat([e]):null,iZ(4,4,i4.bind(null,t,e),n)}function i8(){}function i5(e,t){var n=ij();t=void 0===t?null:t;var r=n.memoizedState;return null!==r&&null!==t&&iA(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function i7(e,t){var n=ij();t=void 0===t?null:t;var r=n.memoizedState;return null!==r&&null!==t&&iA(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function i9(e,t,n){return 0==(21&i_)?(e.baseState&&(e.baseState=!1,ok=!0),e.memoizedState=n):(nQ(n,t)||(n=tb(),iP.lanes|=n,sm|=n,e.baseState=!0),t)}function oe(e,t){var n=tS;tS=0!==n&&4>n?n:4,e(!0);var r=ix.transition;ix.transition={};try{e(!1),t()}finally{tS=n,ix.transition=r}}function ot(){return ij().memoizedState}function on(e,t,n){var r=sR(e);n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},oa(e)?oi(t,n):null!==(n=aK(e,t,n,r))&&(sL(n,e,r,sA()),oo(n,t,r))}function or(e,t,n){var r=sR(e),a={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(oa(e))oi(t,a);else{var i=e.alternate;if(0===e.lanes&&(null===i||0===i.lanes)&&null!==(i=t.lastRenderedReducer))try{var o=t.lastRenderedState,s=i(o,n);if(a.hasEagerState=!0,a.eagerState=s,nQ(s,o)){var l=t.interleaved;null===l?(a.next=a,aW(t)):(a.next=l.next,l.next=a),t.interleaved=a;return}}catch(e){}finally{}null!==(n=aK(e,t,a,r))&&(sL(n,e,r,a=sA()),oo(n,t,r))}}function oa(e){var t=e.alternate;return e===iP||null!==t&&t===iP}function oi(e,t){iN=iO=!0;var n=e.pending;null===n?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function oo(e,t,n){if(0!=(4194240&n)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,tE(e,n)}}var os={readContext:aH,useCallback:iT,useContext:iT,useEffect:iT,useImperativeHandle:iT,useInsertionEffect:iT,useLayoutEffect:iT,useMemo:iT,useReducer:iT,useRef:iT,useState:iT,useDebugValue:iT,useDeferredValue:iT,useTransition:iT,useMutableSource:iT,useSyncExternalStore:iT,useId:iT,unstable_isNewReconciler:!1},ol={readContext:aH,useCallback:function(e,t){return iB().memoizedState=[e,void 0===t?null:t],e},useContext:aH,useEffect:i0,useImperativeHandle:function(e,t,n){return n=null!=n?n.concat([e]):null,iX(4194308,4,i4.bind(null,t,e),n)},useLayoutEffect:function(e,t){return iX(4194308,4,e,t)},useInsertionEffect:function(e,t){return iX(4,2,e,t)},useMemo:function(e,t){var n=iB();return t=void 0===t?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=iB();return t=void 0!==n?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=on.bind(null,iP,e),[r.memoizedState,e]},useRef:function(e){return e={current:e},iB().memoizedState=e},useState:iQ,useDebugValue:i8,useDeferredValue:function(e){return iB().memoizedState=e},useTransition:function(){var e=iQ(!1),t=e[0];return e=oe.bind(null,e[1]),iB().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=iP,a=iB();if(ax){if(void 0===n)throw Error(f(407));n=n()}else{if(n=t(),null===su)throw Error(f(349));0!=(30&i_)||iV(r,t,n)}a.memoizedState=n;var i={value:n,getSnapshot:t};return a.queue=i,i0(iq.bind(null,r,i,e),[e]),r.flags|=2048,iY(9,iH.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=iB(),t=su.identifierPrefix;if(ax){var n=ag,r=am;t=":"+t+"R"+(n=(r&~(1<<32-tf(r)-1)).toString(32)+n),0<(n=iD++)&&(t+="H"+n.toString(32)),t+=":"}else t=":"+t+"r"+(n=iM++).toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},ou={readContext:aH,useCallback:i5,useContext:aH,useEffect:i1,useImperativeHandle:i6,useInsertionEffect:i2,useLayoutEffect:i3,useMemo:i7,useReducer:iz,useRef:iJ,useState:function(){return iz(iU)},useDebugValue:i8,useDeferredValue:function(e){return i9(ij(),iC.memoizedState,e)},useTransition:function(){return[iz(iU)[0],ij().memoizedState]},useMutableSource:i$,useSyncExternalStore:iG,useId:ot,unstable_isNewReconciler:!1},oc={readContext:aH,useCallback:i5,useContext:aH,useEffect:i1,useImperativeHandle:i6,useInsertionEffect:i2,useLayoutEffect:i3,useMemo:i7,useReducer:iF,useRef:iJ,useState:function(){return iF(iU)},useDebugValue:i8,useDeferredValue:function(e){var t=ij();return null===iC?t.memoizedState=e:i9(t,iC.memoizedState,e)},useTransition:function(){return[iF(iU)[0],ij().memoizedState]},useMutableSource:i$,useSyncExternalStore:iG,useId:ot,unstable_isNewReconciler:!1};function of(e,t){try{var n="",r=t;do n+=function(e){switch(e.tag){case 5:return er(e.type);case 16:return er("Lazy");case 13:return er("Suspense");case 19:return er("SuspenseList");case 0:case 2:case 15:return e=ei(e.type,!1);case 11:return e=ei(e.type.render,!1);case 1:return e=ei(e.type,!0);default:return""}}(r),r=r.return;while(r)var a=n}catch(e){a="\nError generating stack: "+e.message+"\n"+e.stack}return{value:e,source:t,stack:a,digest:null}}function od(e,t,n){return{value:e,source:null,stack:null!=n?n:null,digest:null!=t?t:null}}function op(e,t){try{console.error(t.value)}catch(e){setTimeout(function(){throw e})}}var oh="function"==typeof WeakMap?WeakMap:Map;function oy(e,t,n){(n=aZ(-1,n)).tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){sx||(sx=!0,s_=r),op(e,t)},n}function om(e,t,n){(n=aZ(-1,n)).tag=3;var r=e.type.getDerivedStateFromError;if("function"==typeof r){var a=t.value;n.payload=function(){return r(a)},n.callback=function(){op(e,t)}}var i=e.stateNode;return null!==i&&"function"==typeof i.componentDidCatch&&(n.callback=function(){op(e,t),"function"!=typeof r&&(null===sP?sP=new Set([this]):sP.add(this));var n=t.stack;this.componentDidCatch(t.value,{componentStack:null!==n?n:""})}),n}function og(e,t,n){var r=e.pingCache;if(null===r){r=e.pingCache=new oh;var a=new Set;r.set(t,a)}else void 0===(a=r.get(t))&&(a=new Set,r.set(t,a));a.has(n)||(a.add(n),e=s3.bind(null,e,t,n),t.then(e,e))}function ov(e){do{var t;if((t=13===e.tag)&&(t=null===(t=e.memoizedState)||null!==t.dehydrated),t)return e;e=e.return}while(null!==e)return null}function ob(e,t,n,r,a){return 0==(1&e.mode)?e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,1===n.tag&&(null===n.alternate?n.tag=17:((t=aZ(-1,1)).tag=2,a0(n,t,1))),n.lanes|=1):(e.flags|=65536,e.lanes=a),e}var ow=P.ReactCurrentOwner,ok=!1;function oE(e,t,n,r){t.child=null===e?il(t,null,n,r):is(t,e.child,n,r)}function oS(e,t,n,r,a){n=n.render;var i=t.ref;return(aV(t,a),r=iR(e,t,n,r,i,a),n=iL(),null===e||ok)?(ax&&n&&aw(t),t.flags|=1,oE(e,t,r,a),t.child):(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,o$(e,t,a))}function ox(e,t,n,r,a){if(null===e){var i=n.type;return"function"!=typeof i||s9(i)||void 0!==i.defaultProps||null!==n.compare||void 0!==n.defaultProps?((e=lt(n.type,null,r,t,t.mode,a)).ref=t.ref,e.return=t,t.child=e):(t.tag=15,t.type=i,o_(e,t,i,r,a))}if(i=e.child,0==(e.lanes&a)){var o=i.memoizedProps;if((n=null!==(n=n.compare)?n:nY)(o,r)&&e.ref===t.ref)return o$(e,t,a)}return t.flags|=1,(e=le(i,r)).ref=t.ref,e.return=t,t.child=e}function o_(e,t,n,r,a){if(null!==e){var i=e.memoizedProps;if(nY(i,r)&&e.ref===t.ref){if(ok=!1,t.pendingProps=r=i,0==(e.lanes&a))return t.lanes=e.lanes,o$(e,t,a);0!=(131072&e.flags)&&(ok=!0)}}return oI(e,t,n,r,a)}function oP(e,t,n){var r=t.pendingProps,a=r.children,i=null!==e?e.memoizedState:null;if("hidden"===r.mode){if(0==(1&t.mode))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r2(sp,sd),sd|=n;else{if(0==(1073741824&n))return e=null!==i?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,r2(sp,sd),sd|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=null!==i?i.baseLanes:n,r2(sp,sd),sd|=r}}else null!==i?(r=i.baseLanes|n,t.memoizedState=null):r=n,r2(sp,sd),sd|=r;return oE(e,t,a,n),t.child}function oC(e,t){var n=t.ref;(null===e&&null!==n||null!==e&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function oI(e,t,n,r,a){var i=r7(n)?r8:r4.current;return(i=r5(t,i),aV(t,a),n=iR(e,t,n,r,i,a),r=iL(),null===e||ok)?(ax&&r&&aw(t),t.flags|=1,oE(e,t,n,a),t.child):(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,o$(e,t,a))}function oO(e,t,n,r,a){if(r7(n)){var i=!0;an(t)}else i=!1;if(aV(t,a),null===t.stateNode)oF(e,t),a9(t,n,r),it(t,n,r,a),r=!0;else if(null===e){var o=t.stateNode,s=t.memoizedProps;o.props=s;var l=o.context,u=n.contextType;u="object"==typeof u&&null!==u?aH(u):r5(t,u=r7(n)?r8:r4.current);var c=n.getDerivedStateFromProps,f="function"==typeof c||"function"==typeof o.getSnapshotBeforeUpdate;f||"function"!=typeof o.UNSAFE_componentWillReceiveProps&&"function"!=typeof o.componentWillReceiveProps||(s!==r||l!==u)&&ie(t,o,r,u),aY=!1;var d=t.memoizedState;o.state=d,a3(t,r,o,a),l=t.memoizedState,s!==r||d!==l||r6.current||aY?("function"==typeof c&&(a8(t,n,c,r),l=t.memoizedState),(s=aY||a7(t,n,s,r,d,l,u))?(f||"function"!=typeof o.UNSAFE_componentWillMount&&"function"!=typeof o.componentWillMount||("function"==typeof o.componentWillMount&&o.componentWillMount(),"function"==typeof o.UNSAFE_componentWillMount&&o.UNSAFE_componentWillMount()),"function"==typeof o.componentDidMount&&(t.flags|=4194308)):("function"==typeof o.componentDidMount&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),o.props=r,o.state=l,o.context=u,r=s):("function"==typeof o.componentDidMount&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,aX(e,t),s=t.memoizedProps,u=t.type===t.elementType?s:aL(t.type,s),o.props=u,f=t.pendingProps,d=o.context,l="object"==typeof(l=n.contextType)&&null!==l?aH(l):r5(t,l=r7(n)?r8:r4.current);var p=n.getDerivedStateFromProps;(c="function"==typeof p||"function"==typeof o.getSnapshotBeforeUpdate)||"function"!=typeof o.UNSAFE_componentWillReceiveProps&&"function"!=typeof o.componentWillReceiveProps||(s!==f||d!==l)&&ie(t,o,r,l),aY=!1,d=t.memoizedState,o.state=d,a3(t,r,o,a);var h=t.memoizedState;s!==f||d!==h||r6.current||aY?("function"==typeof p&&(a8(t,n,p,r),h=t.memoizedState),(u=aY||a7(t,n,u,r,d,h,l)||!1)?(c||"function"!=typeof o.UNSAFE_componentWillUpdate&&"function"!=typeof o.componentWillUpdate||("function"==typeof o.componentWillUpdate&&o.componentWillUpdate(r,h,l),"function"==typeof o.UNSAFE_componentWillUpdate&&o.UNSAFE_componentWillUpdate(r,h,l)),"function"==typeof o.componentDidUpdate&&(t.flags|=4),"function"==typeof o.getSnapshotBeforeUpdate&&(t.flags|=1024)):("function"!=typeof o.componentDidUpdate||s===e.memoizedProps&&d===e.memoizedState||(t.flags|=4),"function"!=typeof o.getSnapshotBeforeUpdate||s===e.memoizedProps&&d===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=h),o.props=r,o.state=h,o.context=l,r=u):("function"!=typeof o.componentDidUpdate||s===e.memoizedProps&&d===e.memoizedState||(t.flags|=4),"function"!=typeof o.getSnapshotBeforeUpdate||s===e.memoizedProps&&d===e.memoizedState||(t.flags|=1024),r=!1)}return oN(e,t,n,r,i,a)}function oN(e,t,n,r,a,i){oC(e,t);var o=0!=(128&t.flags);if(!r&&!o)return a&&ar(t,n,!1),o$(e,t,i);r=t.stateNode,ow.current=t;var s=o&&"function"!=typeof n.getDerivedStateFromError?null:r.render();return t.flags|=1,null!==e&&o?(t.child=is(t,e.child,null,i),t.child=is(t,null,s,i)):oE(e,t,s,i),t.memoizedState=r.state,a&&ar(t,n,!0),t.child}function oD(e){var t=e.stateNode;t.pendingContext?ae(e,t.pendingContext,t.pendingContext!==t.context):t.context&&ae(e,t.context,!1),iy(e,t.containerInfo)}function oM(e,t,n,r,a){return aT(),aA(a),t.flags|=256,oE(e,t,n,r),t.child}var oT={dehydrated:null,treeContext:null,retryLane:0};function oA(e){return{baseLanes:e,cachePool:null,transitions:null}}function oR(e,t,n){var r,a=t.pendingProps,i=ib.current,o=!1,s=0!=(128&t.flags);if((r=s)||(r=(null===e||null!==e.memoizedState)&&0!=(2&i)),r?(o=!0,t.flags&=-129):(null===e||null!==e.memoizedState)&&(i|=1),r2(ib,1&i),null===e)return(aO(t),null!==(e=t.memoizedState)&&null!==(e=e.dehydrated))?(0==(1&t.mode)?t.lanes=1:"$!"===e.data?t.lanes=8:t.lanes=1073741824,null):(s=a.children,e=a.fallback,o?(a=t.mode,o=t.child,s={mode:"hidden",children:s},0==(1&a)&&null!==o?(o.childLanes=0,o.pendingProps=s):o=lr(s,a,0,null),e=ln(e,a,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=oA(n),t.memoizedState=oT,e):oL(t,s));if(null!==(i=e.memoizedState)&&null!==(r=i.dehydrated))return function(e,t,n,r,a,i,o){if(n)return 256&t.flags?(t.flags&=-257,oB(e,t,o,r=od(Error(f(422))))):null!==t.memoizedState?(t.child=e.child,t.flags|=128,null):(i=r.fallback,a=t.mode,r=lr({mode:"visible",children:r.children},a,0,null),i=ln(i,a,o,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,0!=(1&t.mode)&&is(t,e.child,null,o),t.child.memoizedState=oA(o),t.memoizedState=oT,i);if(0==(1&t.mode))return oB(e,t,o,null);if("$!"===a.data){if(r=a.nextSibling&&a.nextSibling.dataset)var s=r.dgst;return r=s,oB(e,t,o,r=od(i=Error(f(419)),r,void 0))}if(s=0!=(o&e.childLanes),ok||s){if(null!==(r=su)){switch(o&-o){case 4:a=2;break;case 16:a=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:a=32;break;case 536870912:a=268435456;break;default:a=0}0!==(a=0!=(a&(r.suspendedLanes|o))?0:a)&&a!==i.retryLane&&(i.retryLane=a,aQ(e,a),sL(r,e,a,-1))}return sQ(),oB(e,t,o,r=od(Error(f(421))))}return"$?"===a.data?(t.flags|=128,t.child=e.child,t=s6.bind(null,e),a._reactRetry=t,null):(e=i.treeContext,aS=rU(a.nextSibling),aE=t,ax=!0,a_=null,null!==e&&(ap[ah++]=am,ap[ah++]=ag,ap[ah++]=ay,am=e.id,ag=e.overflow,ay=t),t=oL(t,r.children),t.flags|=4096,t)}(e,t,s,a,r,i,n);if(o){o=a.fallback,s=t.mode,r=(i=e.child).sibling;var l={mode:"hidden",children:a.children};return 0==(1&s)&&t.child!==i?((a=t.child).childLanes=0,a.pendingProps=l,t.deletions=null):(a=le(i,l)).subtreeFlags=14680064&i.subtreeFlags,null!==r?o=le(r,o):(o=ln(o,s,n,null),o.flags|=2),o.return=t,a.return=t,a.sibling=o,t.child=a,a=o,o=t.child,s=null===(s=e.child.memoizedState)?oA(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},o.memoizedState=s,o.childLanes=e.childLanes&~n,t.memoizedState=oT,a}return e=(o=e.child).sibling,a=le(o,{mode:"visible",children:a.children}),0==(1&t.mode)&&(a.lanes=n),a.return=t,a.sibling=null,null!==e&&(null===(n=t.deletions)?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=a,t.memoizedState=null,a}function oL(e,t){return(t=lr({mode:"visible",children:t},e.mode,0,null)).return=e,e.child=t}function oB(e,t,n,r){return null!==r&&aA(r),is(t,e.child,null,n),e=oL(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function oj(e,t,n){e.lanes|=t;var r=e.alternate;null!==r&&(r.lanes|=t),aG(e.return,t,n)}function oU(e,t,n,r,a){var i=e.memoizedState;null===i?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:a}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=a)}function oz(e,t,n){var r=t.pendingProps,a=r.revealOrder,i=r.tail;if(oE(e,t,r.children,n),0!=(2&(r=ib.current)))r=1&r|2,t.flags|=128;else{if(null!==e&&0!=(128&e.flags))e:for(e=t.child;null!==e;){if(13===e.tag)null!==e.memoizedState&&oj(e,n,t);else if(19===e.tag)oj(e,n,t);else if(null!==e.child){e.child.return=e,e=e.child;continue}if(e===t)break;for(;null===e.sibling;){if(null===e.return||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(r2(ib,r),0==(1&t.mode))t.memoizedState=null;else switch(a){case"forwards":for(a=null,n=t.child;null!==n;)null!==(e=n.alternate)&&null===iw(e)&&(a=n),n=n.sibling;null===(n=a)?(a=t.child,t.child=null):(a=n.sibling,n.sibling=null),oU(t,!1,a,n,i);break;case"backwards":for(n=null,a=t.child,t.child=null;null!==a;){if(null!==(e=a.alternate)&&null===iw(e)){t.child=a;break}e=a.sibling,a.sibling=n,n=a,a=e}oU(t,!0,n,null,i);break;case"together":oU(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function oF(e,t){0==(1&t.mode)&&null!==e&&(e.alternate=null,t.alternate=null,t.flags|=2)}function o$(e,t,n){if(null!==e&&(t.dependencies=e.dependencies),sm|=t.lanes,0==(n&t.childLanes))return null;if(null!==e&&t.child!==e.child)throw Error(f(153));if(null!==t.child){for(n=le(e=t.child,e.pendingProps),t.child=n,n.return=t;null!==e.sibling;)e=e.sibling,(n=n.sibling=le(e,e.pendingProps)).return=t;n.sibling=null}return t.child}function oG(e,t){if(!ax)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;null!==t;)null!==t.alternate&&(n=t),t=t.sibling;null===n?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;null!==n;)null!==n.alternate&&(r=n),n=n.sibling;null===r?t||null===e.tail?e.tail=null:e.tail.sibling=null:r.sibling=null}}function oV(e){var t=null!==e.alternate&&e.alternate.child===e.child,n=0,r=0;if(t)for(var a=e.child;null!==a;)n|=a.lanes|a.childLanes,r|=14680064&a.subtreeFlags,r|=14680064&a.flags,a.return=e,a=a.sibling;else for(a=e.child;null!==a;)n|=a.lanes|a.childLanes,r|=a.subtreeFlags,r|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}a=function(e,t){for(var n=t.child;null!==n;){if(5===n.tag||6===n.tag)e.appendChild(n.stateNode);else if(4!==n.tag&&null!==n.child){n.child.return=n,n=n.child;continue}if(n===t)break;for(;null===n.sibling;){if(null===n.return||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},i=function(){},o=function(e,t,n,r){var a=e.memoizedProps;if(a!==r){e=t.stateNode,ih(ic.current);var i,o=null;switch(n){case"input":a=ef(e,a),r=ef(e,r),o=[];break;case"select":a=en({},a,{value:void 0}),r=en({},r,{value:void 0}),o=[];break;case"textarea":a=eb(e,a),r=eb(e,r),o=[];break;default:"function"!=typeof a.onClick&&"function"==typeof r.onClick&&(e.onclick=rO)}for(u in eA(n,r),n=null,a)if(!r.hasOwnProperty(u)&&a.hasOwnProperty(u)&&null!=a[u]){if("style"===u){var s=a[u];for(i in s)s.hasOwnProperty(i)&&(n||(n={}),n[i]="")}else"dangerouslySetInnerHTML"!==u&&"children"!==u&&"suppressContentEditableWarning"!==u&&"suppressHydrationWarning"!==u&&"autoFocus"!==u&&(p.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null))}for(u in r){var l=r[u];if(s=null!=a?a[u]:void 0,r.hasOwnProperty(u)&&l!==s&&(null!=l||null!=s)){if("style"===u){if(s){for(i in s)!s.hasOwnProperty(i)||l&&l.hasOwnProperty(i)||(n||(n={}),n[i]="");for(i in l)l.hasOwnProperty(i)&&s[i]!==l[i]&&(n||(n={}),n[i]=l[i])}else n||(o||(o=[]),o.push(u,n)),n=l}else"dangerouslySetInnerHTML"===u?(l=l?l.__html:void 0,s=s?s.__html:void 0,null!=l&&s!==l&&(o=o||[]).push(u,l)):"children"===u?"string"!=typeof l&&"number"!=typeof l||(o=o||[]).push(u,""+l):"suppressContentEditableWarning"!==u&&"suppressHydrationWarning"!==u&&(p.hasOwnProperty(u)?(null!=l&&"onScroll"===u&&ry("scroll",e),o||s===l||(o=[])):(o=o||[]).push(u,l))}}n&&(o=o||[]).push("style",n);var u=o;(t.updateQueue=u)&&(t.flags|=4)}},s=function(e,t,n,r){n!==r&&(t.flags|=4)};var oH=!1,oq=!1,oW="function"==typeof WeakSet?WeakSet:Set,oK=null;function oQ(e,t){var n=e.ref;if(null!==n){if("function"==typeof n)try{n(null)}catch(n){s2(e,t,n)}else n.current=null}}function oY(e,t,n){try{n()}catch(n){s2(e,t,n)}}var oJ=!1;function oX(e,t,n){var r=t.updateQueue;if(null!==(r=null!==r?r.lastEffect:null)){var a=r=r.next;do{if((a.tag&e)===e){var i=a.destroy;a.destroy=void 0,void 0!==i&&oY(t,n,i)}a=a.next}while(a!==r)}}function oZ(e,t){if(null!==(t=null!==(t=t.updateQueue)?t.lastEffect:null)){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function o0(e){var t=e.ref;if(null!==t){var n=e.stateNode;e.tag,e=n,"function"==typeof t?t(e):t.current=e}}function o1(e){return 5===e.tag||3===e.tag||4===e.tag}function o2(e){e:for(;;){for(;null===e.sibling;){if(null===e.return||o1(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;5!==e.tag&&6!==e.tag&&18!==e.tag;){if(2&e.flags||null===e.child||4===e.tag)continue e;e.child.return=e,e=e.child}if(!(2&e.flags))return e.stateNode}}var o3=null,o4=!1;function o6(e,t,n){for(n=n.child;null!==n;)o8(e,t,n),n=n.sibling}function o8(e,t,n){if(tc&&"function"==typeof tc.onCommitFiberUnmount)try{tc.onCommitFiberUnmount(tu,n)}catch(e){}switch(n.tag){case 5:oq||oQ(n,t);case 6:var r=o3,a=o4;o3=null,o6(e,t,n),o3=r,o4=a,null!==o3&&(o4?(e=o3,n=n.stateNode,8===e.nodeType?e.parentNode.removeChild(n):e.removeChild(n)):o3.removeChild(n.stateNode));break;case 18:null!==o3&&(o4?(e=o3,n=n.stateNode,8===e.nodeType?rj(e.parentNode,n):1===e.nodeType&&rj(e,n),tq(e)):rj(o3,n.stateNode));break;case 4:r=o3,a=o4,o3=n.stateNode.containerInfo,o4=!0,o6(e,t,n),o3=r,o4=a;break;case 0:case 11:case 14:case 15:if(!oq&&null!==(r=n.updateQueue)&&null!==(r=r.lastEffect)){a=r=r.next;do{var i=a,o=i.destroy;i=i.tag,void 0!==o&&(0!=(2&i)?oY(n,t,o):0!=(4&i)&&oY(n,t,o)),a=a.next}while(a!==r)}o6(e,t,n);break;case 1:if(!oq&&(oQ(n,t),"function"==typeof(r=n.stateNode).componentWillUnmount))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(e){s2(n,t,e)}o6(e,t,n);break;case 21:default:o6(e,t,n);break;case 22:1&n.mode?(oq=(r=oq)||null!==n.memoizedState,o6(e,t,n),oq=r):o6(e,t,n)}}function o5(e){var t=e.updateQueue;if(null!==t){e.updateQueue=null;var n=e.stateNode;null===n&&(n=e.stateNode=new oW),t.forEach(function(t){var r=s8.bind(null,e,t);n.has(t)||(n.add(t),t.then(r,r))})}}function o7(e,t){var n=t.deletions;if(null!==n)for(var r=0;r<n.length;r++){var a=n[r];try{var i=t,o=i;e:for(;null!==o;){switch(o.tag){case 5:o3=o.stateNode,o4=!1;break e;case 3:case 4:o3=o.stateNode.containerInfo,o4=!0;break e}o=o.return}if(null===o3)throw Error(f(160));o8(e,i,a),o3=null,o4=!1;var s=a.alternate;null!==s&&(s.return=null),a.return=null}catch(e){s2(a,t,e)}}if(12854&t.subtreeFlags)for(t=t.child;null!==t;)o9(t,e),t=t.sibling}function o9(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(o7(t,e),se(e),4&r){try{oX(3,e,e.return),oZ(3,e)}catch(t){s2(e,e.return,t)}try{oX(5,e,e.return)}catch(t){s2(e,e.return,t)}}break;case 1:o7(t,e),se(e),512&r&&null!==n&&oQ(n,n.return);break;case 5:if(o7(t,e),se(e),512&r&&null!==n&&oQ(n,n.return),32&e.flags){var a=e.stateNode;try{eI(a,"")}catch(t){s2(e,e.return,t)}}if(4&r&&null!=(a=e.stateNode)){var i=e.memoizedProps,o=null!==n?n.memoizedProps:i,s=e.type,l=e.updateQueue;if(e.updateQueue=null,null!==l)try{"input"===s&&"radio"===i.type&&null!=i.name&&ep(a,i),eR(s,o);var u=eR(s,i);for(o=0;o<l.length;o+=2){var c=l[o],d=l[o+1];"style"===c?eM(a,d):"dangerouslySetInnerHTML"===c?eC(a,d):"children"===c?eI(a,d):_(a,c,d,u)}switch(s){case"input":eh(a,i);break;case"textarea":ek(a,i);break;case"select":var p=a._wrapperState.wasMultiple;a._wrapperState.wasMultiple=!!i.multiple;var h=i.value;null!=h?ev(a,!!i.multiple,h,!1):!!i.multiple!==p&&(null!=i.defaultValue?ev(a,!!i.multiple,i.defaultValue,!0):ev(a,!!i.multiple,i.multiple?[]:"",!1))}a[rG]=i}catch(t){s2(e,e.return,t)}}break;case 6:if(o7(t,e),se(e),4&r){if(null===e.stateNode)throw Error(f(162));a=e.stateNode,i=e.memoizedProps;try{a.nodeValue=i}catch(t){s2(e,e.return,t)}}break;case 3:if(o7(t,e),se(e),4&r&&null!==n&&n.memoizedState.isDehydrated)try{tq(t.containerInfo)}catch(t){s2(e,e.return,t)}break;case 4:default:o7(t,e),se(e);break;case 13:o7(t,e),se(e),8192&(a=e.child).flags&&(i=null!==a.memoizedState,a.stateNode.isHidden=i,i&&(null===a.alternate||null===a.alternate.memoizedState)&&(sk=tn())),4&r&&o5(e);break;case 22:if(c=null!==n&&null!==n.memoizedState,1&e.mode?(oq=(u=oq)||c,o7(t,e),oq=u):o7(t,e),se(e),8192&r){if(u=null!==e.memoizedState,(e.stateNode.isHidden=u)&&!c&&0!=(1&e.mode))for(oK=e,c=e.child;null!==c;){for(d=oK=c;null!==oK;){switch(h=(p=oK).child,p.tag){case 0:case 11:case 14:case 15:oX(4,p,p.return);break;case 1:oQ(p,p.return);var y=p.stateNode;if("function"==typeof y.componentWillUnmount){r=p,n=p.return;try{t=r,y.props=t.memoizedProps,y.state=t.memoizedState,y.componentWillUnmount()}catch(e){s2(r,n,e)}}break;case 5:oQ(p,p.return);break;case 22:if(null!==p.memoizedState){sn(d);continue}}null!==h?(h.return=p,oK=h):sn(d)}c=c.sibling}e:for(c=null,d=e;;){if(5===d.tag){if(null===c){c=d;try{a=d.stateNode,u?(i=a.style,"function"==typeof i.setProperty?i.setProperty("display","none","important"):i.display="none"):(s=d.stateNode,o=null!=(l=d.memoizedProps.style)&&l.hasOwnProperty("display")?l.display:null,s.style.display=eD("display",o))}catch(t){s2(e,e.return,t)}}}else if(6===d.tag){if(null===c)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(t){s2(e,e.return,t)}}else if((22!==d.tag&&23!==d.tag||null===d.memoizedState||d===e)&&null!==d.child){d.child.return=d,d=d.child;continue}if(d===e)break;for(;null===d.sibling;){if(null===d.return||d.return===e)break e;c===d&&(c=null),d=d.return}c===d&&(c=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:o7(t,e),se(e),4&r&&o5(e);case 21:}}function se(e){var t=e.flags;if(2&t){try{e:{for(var n=e.return;null!==n;){if(o1(n)){var r=n;break e}n=n.return}throw Error(f(160))}switch(r.tag){case 5:var a=r.stateNode;32&r.flags&&(eI(a,""),r.flags&=-33);var i=o2(e);!function e(t,n,r){var a=t.tag;if(5===a||6===a)t=t.stateNode,n?r.insertBefore(t,n):r.appendChild(t);else if(4!==a&&null!==(t=t.child))for(e(t,n,r),t=t.sibling;null!==t;)e(t,n,r),t=t.sibling}(e,i,a);break;case 3:case 4:var o=r.stateNode.containerInfo,s=o2(e);!function e(t,n,r){var a=t.tag;if(5===a||6===a)t=t.stateNode,n?8===r.nodeType?r.parentNode.insertBefore(t,n):r.insertBefore(t,n):(8===r.nodeType?(n=r.parentNode).insertBefore(t,r):(n=r).appendChild(t),null!=(r=r._reactRootContainer)||null!==n.onclick||(n.onclick=rO));else if(4!==a&&null!==(t=t.child))for(e(t,n,r),t=t.sibling;null!==t;)e(t,n,r),t=t.sibling}(e,s,o);break;default:throw Error(f(161))}}catch(t){s2(e,e.return,t)}e.flags&=-3}4096&t&&(e.flags&=-4097)}function st(e){for(;null!==oK;){var t=oK;if(0!=(8772&t.flags)){var n=t.alternate;try{if(0!=(8772&t.flags))switch(t.tag){case 0:case 11:case 15:oq||oZ(5,t);break;case 1:var r=t.stateNode;if(4&t.flags&&!oq){if(null===n)r.componentDidMount();else{var a=t.elementType===t.type?n.memoizedProps:aL(t.type,n.memoizedProps);r.componentDidUpdate(a,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}}var i=t.updateQueue;null!==i&&a4(t,i,r);break;case 3:var o=t.updateQueue;if(null!==o){if(n=null,null!==t.child)switch(t.child.tag){case 5:case 1:n=t.child.stateNode}a4(t,o,n)}break;case 5:var s=t.stateNode;if(null===n&&4&t.flags){n=s;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:case 4:case 12:case 19:case 17:case 21:case 22:case 23:case 25:break;case 13:if(null===t.memoizedState){var u=t.alternate;if(null!==u){var c=u.memoizedState;if(null!==c){var d=c.dehydrated;null!==d&&tq(d)}}}break;default:throw Error(f(163))}oq||512&t.flags&&o0(t)}catch(e){s2(t,t.return,e)}}if(t===e){oK=null;break}if(null!==(n=t.sibling)){n.return=t.return,oK=n;break}oK=t.return}}function sn(e){for(;null!==oK;){var t=oK;if(t===e){oK=null;break}var n=t.sibling;if(null!==n){n.return=t.return,oK=n;break}oK=t.return}}function sr(e){for(;null!==oK;){var t=oK;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{oZ(4,t)}catch(e){s2(t,n,e)}break;case 1:var r=t.stateNode;if("function"==typeof r.componentDidMount){var a=t.return;try{r.componentDidMount()}catch(e){s2(t,a,e)}}var i=t.return;try{o0(t)}catch(e){s2(t,i,e)}break;case 5:var o=t.return;try{o0(t)}catch(e){s2(t,o,e)}}}catch(e){s2(t,t.return,e)}if(t===e){oK=null;break}var s=t.sibling;if(null!==s){s.return=t.return,oK=s;break}oK=t.return}}var sa=Math.ceil,si=P.ReactCurrentDispatcher,so=P.ReactCurrentOwner,ss=P.ReactCurrentBatchConfig,sl=0,su=null,sc=null,sf=0,sd=0,sp=r0(0),sh=0,sy=null,sm=0,sg=0,sv=0,sb=null,sw=null,sk=0,sE=1/0,sS=null,sx=!1,s_=null,sP=null,sC=!1,sI=null,sO=0,sN=0,sD=null,sM=-1,sT=0;function sA(){return 0!=(6&sl)?tn():-1!==sM?sM:sM=tn()}function sR(e){return 0==(1&e.mode)?1:0!=(2&sl)&&0!==sf?sf&-sf:null!==aR.transition?(0===sT&&(sT=tb()),sT):0!==(e=tS)?e:e=void 0===(e=window.event)?16:t0(e.type)}function sL(e,t,n,r){if(50<sN)throw sN=0,sD=null,Error(f(185));tk(e,n,r),(0==(2&sl)||e!==su)&&(e===su&&(0==(2&sl)&&(sg|=n),4===sh&&sF(e,sf)),sB(e,r),1===n&&0===sl&&0==(1&t.mode)&&(sE=tn()+500,ai&&al()))}function sB(e,t){var n,r,a,i=e.callbackNode;!function(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,a=e.expirationTimes,i=e.pendingLanes;0<i;){var o=31-tf(i),s=1<<o,l=a[o];-1===l?(0==(s&n)||0!=(s&r))&&(a[o]=function(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;default:return -1}}(s,t)):l<=t&&(e.expiredLanes|=s),i&=~s}}(e,t);var o=tg(e,e===su?sf:0);if(0===o)null!==i&&e9(i),e.callbackNode=null,e.callbackPriority=0;else if(t=o&-o,e.callbackPriority!==t){if(null!=i&&e9(i),1===t)0===e.tag?(a=s$.bind(null,e),ai=!0,as(a)):as(s$.bind(null,e)),rL(function(){0==(6&sl)&&al()}),i=null;else{switch(tx(o)){case 1:i=ta;break;case 4:i=ti;break;case 16:default:i=to;break;case 536870912:i=tl}i=e7(i,sj.bind(null,e))}e.callbackPriority=t,e.callbackNode=i}}function sj(e,t){if(sM=-1,sT=0,0!=(6&sl))throw Error(f(327));var n=e.callbackNode;if(s0()&&e.callbackNode!==n)return null;var r=tg(e,e===su?sf:0);if(0===r)return null;if(0!=(30&r)||0!=(r&e.expiredLanes)||t)t=sY(e,r);else{t=r;var a=sl;sl|=2;var i=sK();for((su!==e||sf!==t)&&(sS=null,sE=tn()+500,sq(e,t));;)try{(function(){for(;null!==sc&&!te();)sJ(sc)})();break}catch(t){sW(e,t)}aF(),si.current=i,sl=a,null!==sc?t=0:(su=null,sf=0,t=sh)}if(0!==t){if(2===t&&0!==(a=tv(e))&&(r=a,t=sU(e,a)),1===t)throw n=sy,sq(e,0),sF(e,r),sB(e,tn()),n;if(6===t)sF(e,r);else{if(a=e.current.alternate,0==(30&r)&&!function(e){for(var t=e;;){if(16384&t.flags){var n=t.updateQueue;if(null!==n&&null!==(n=n.stores))for(var r=0;r<n.length;r++){var a=n[r],i=a.getSnapshot;a=a.value;try{if(!nQ(i(),a))return!1}catch(e){return!1}}}if(n=t.child,16384&t.subtreeFlags&&null!==n)n.return=t,t=n;else{if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}(a)&&(2===(t=sY(e,r))&&0!==(i=tv(e))&&(r=i,t=sU(e,i)),1===t))throw n=sy,sq(e,0),sF(e,r),sB(e,tn()),n;switch(e.finishedWork=a,e.finishedLanes=r,t){case 0:case 1:throw Error(f(345));case 2:case 5:sZ(e,sw,sS);break;case 3:if(sF(e,r),(130023424&r)===r&&10<(t=sk+500-tn())){if(0!==tg(e,0))break;if(((a=e.suspendedLanes)&r)!==r){sA(),e.pingedLanes|=e.suspendedLanes&a;break}e.timeoutHandle=rT(sZ.bind(null,e,sw,sS),t);break}sZ(e,sw,sS);break;case 4:if(sF(e,r),(4194240&r)===r)break;for(a=-1,t=e.eventTimes;0<r;){var o=31-tf(r);i=1<<o,(o=t[o])>a&&(a=o),r&=~i}if(r=a,10<(r=(120>(r=tn()-r)?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*sa(r/1960))-r)){e.timeoutHandle=rT(sZ.bind(null,e,sw,sS),r);break}sZ(e,sw,sS);break;default:throw Error(f(329))}}}return sB(e,tn()),e.callbackNode===n?sj.bind(null,e):null}function sU(e,t){var n=sb;return e.current.memoizedState.isDehydrated&&(sq(e,t).flags|=256),2!==(e=sY(e,t))&&(t=sw,sw=n,null!==t&&sz(t)),e}function sz(e){null===sw?sw=e:sw.push.apply(sw,e)}function sF(e,t){for(t&=~sv,t&=~sg,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-tf(t),r=1<<n;e[n]=-1,t&=~r}}function s$(e){if(0!=(6&sl))throw Error(f(327));s0();var t=tg(e,0);if(0==(1&t))return sB(e,tn()),null;var n=sY(e,t);if(0!==e.tag&&2===n){var r=tv(e);0!==r&&(t=r,n=sU(e,r))}if(1===n)throw n=sy,sq(e,0),sF(e,t),sB(e,tn()),n;if(6===n)throw Error(f(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,sZ(e,sw,sS),sB(e,tn()),null}function sG(e,t){var n=sl;sl|=1;try{return e(t)}finally{0===(sl=n)&&(sE=tn()+500,ai&&al())}}function sV(e){null!==sI&&0===sI.tag&&0==(6&sl)&&s0();var t=sl;sl|=1;var n=ss.transition,r=tS;try{if(ss.transition=null,tS=1,e)return e()}finally{tS=r,ss.transition=n,0==(6&(sl=t))&&al()}}function sH(){sd=sp.current,r1(sp)}function sq(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(-1!==n&&(e.timeoutHandle=-1,rA(n)),null!==sc)for(n=sc.return;null!==n;){var r=n;switch(ak(r),r.tag){case 1:null!=(r=r.type.childContextTypes)&&r9();break;case 3:im(),r1(r6),r1(r4),iE();break;case 5:iv(r);break;case 4:im();break;case 13:case 19:r1(ib);break;case 10:a$(r.type._context);break;case 22:case 23:sH()}n=n.return}if(su=e,sc=e=le(e.current,null),sf=sd=t,sh=0,sy=null,sv=sg=sm=0,sw=sb=null,null!==aq){for(t=0;t<aq.length;t++)if(null!==(r=(n=aq[t]).interleaved)){n.interleaved=null;var a=r.next,i=n.pending;if(null!==i){var o=i.next;i.next=a,r.next=o}n.pending=r}aq=null}return e}function sW(e,t){for(;;){var n=sc;try{if(aF(),iS.current=os,iO){for(var r=iP.memoizedState;null!==r;){var a=r.queue;null!==a&&(a.pending=null),r=r.next}iO=!1}if(i_=0,iI=iC=iP=null,iN=!1,iD=0,so.current=null,null===n||null===n.return){sh=1,sy=t,sc=null;break}e:{var i=e,o=n.return,s=n,l=t;if(t=sf,s.flags|=32768,null!==l&&"object"==typeof l&&"function"==typeof l.then){var u=l,c=s,d=c.tag;if(0==(1&c.mode)&&(0===d||11===d||15===d)){var p=c.alternate;p?(c.updateQueue=p.updateQueue,c.memoizedState=p.memoizedState,c.lanes=p.lanes):(c.updateQueue=null,c.memoizedState=null)}var h=ov(o);if(null!==h){h.flags&=-257,ob(h,o,s,i,t),1&h.mode&&og(i,u,t),t=h,l=u;var y=t.updateQueue;if(null===y){var m=new Set;m.add(l),t.updateQueue=m}else y.add(l);break e}if(0==(1&t)){og(i,u,t),sQ();break e}l=Error(f(426))}else if(ax&&1&s.mode){var g=ov(o);if(null!==g){0==(65536&g.flags)&&(g.flags|=256),ob(g,o,s,i,t),aA(of(l,s));break e}}i=l=of(l,s),4!==sh&&(sh=2),null===sb?sb=[i]:sb.push(i),i=o;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var v=oy(i,l,t);a2(i,v);break e;case 1:s=l;var b=i.type,w=i.stateNode;if(0==(128&i.flags)&&("function"==typeof b.getDerivedStateFromError||null!==w&&"function"==typeof w.componentDidCatch&&(null===sP||!sP.has(w)))){i.flags|=65536,t&=-t,i.lanes|=t;var k=om(i,s,t);a2(i,k);break e}}i=i.return}while(null!==i)}sX(n)}catch(e){t=e,sc===n&&null!==n&&(sc=n=n.return);continue}break}}function sK(){var e=si.current;return si.current=os,null===e?os:e}function sQ(){(0===sh||3===sh||2===sh)&&(sh=4),null===su||0==(268435455&sm)&&0==(268435455&sg)||sF(su,sf)}function sY(e,t){var n=sl;sl|=2;var r=sK();for((su!==e||sf!==t)&&(sS=null,sq(e,t));;)try{(function(){for(;null!==sc;)sJ(sc)})();break}catch(t){sW(e,t)}if(aF(),sl=n,si.current=r,null!==sc)throw Error(f(261));return su=null,sf=0,sh}function sJ(e){var t=l(e.alternate,e,sd);e.memoizedProps=e.pendingProps,null===t?sX(e):sc=t,so.current=null}function sX(e){var t=e;do{var n=t.alternate;if(e=t.return,0==(32768&t.flags)){if(null!==(n=function(e,t,n){var r=t.pendingProps;switch(ak(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return oV(t),null;case 1:case 17:return r7(t.type)&&r9(),oV(t),null;case 3:return r=t.stateNode,im(),r1(r6),r1(r4),iE(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(null===e||null===e.child)&&(aD(t)?t.flags|=4:null===e||e.memoizedState.isDehydrated&&0==(256&t.flags)||(t.flags|=1024,null!==a_&&(sz(a_),a_=null))),i(e,t),oV(t),null;case 5:iv(t);var l=ih(ip.current);if(n=t.type,null!==e&&null!=t.stateNode)o(e,t,n,r,l),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(null===t.stateNode)throw Error(f(166));return oV(t),null}if(e=ih(ic.current),aD(t)){r=t.stateNode,n=t.type;var u=t.memoizedProps;switch(r[r$]=t,r[rG]=u,e=0!=(1&t.mode),n){case"dialog":ry("cancel",r),ry("close",r);break;case"iframe":case"object":case"embed":ry("load",r);break;case"video":case"audio":for(l=0;l<rf.length;l++)ry(rf[l],r);break;case"source":ry("error",r);break;case"img":case"image":case"link":ry("error",r),ry("load",r);break;case"details":ry("toggle",r);break;case"input":ed(r,u),ry("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!u.multiple},ry("invalid",r);break;case"textarea":ew(r,u),ry("invalid",r)}for(var c in eA(n,u),l=null,u)if(u.hasOwnProperty(c)){var d=u[c];"children"===c?"string"==typeof d?r.textContent!==d&&(!0!==u.suppressHydrationWarning&&rI(r.textContent,d,e),l=["children",d]):"number"==typeof d&&r.textContent!==""+d&&(!0!==u.suppressHydrationWarning&&rI(r.textContent,d,e),l=["children",""+d]):p.hasOwnProperty(c)&&null!=d&&"onScroll"===c&&ry("scroll",r)}switch(n){case"input":el(r),ey(r,u,!0);break;case"textarea":el(r),eE(r);break;case"select":case"option":break;default:"function"==typeof u.onClick&&(r.onclick=rO)}r=l,t.updateQueue=r,null!==r&&(t.flags|=4)}else{c=9===l.nodeType?l:l.ownerDocument,"http://www.w3.org/1999/xhtml"===e&&(e=eS(n)),"http://www.w3.org/1999/xhtml"===e?"script"===n?((e=c.createElement("div")).innerHTML="<script></script>",e=e.removeChild(e.firstChild)):"string"==typeof r.is?e=c.createElement(n,{is:r.is}):(e=c.createElement(n),"select"===n&&(c=e,r.multiple?c.multiple=!0:r.size&&(c.size=r.size))):e=c.createElementNS(e,n),e[r$]=t,e[rG]=r,a(e,t,!1,!1),t.stateNode=e;e:{switch(c=eR(n,r),n){case"dialog":ry("cancel",e),ry("close",e),l=r;break;case"iframe":case"object":case"embed":ry("load",e),l=r;break;case"video":case"audio":for(l=0;l<rf.length;l++)ry(rf[l],e);l=r;break;case"source":ry("error",e),l=r;break;case"img":case"image":case"link":ry("error",e),ry("load",e),l=r;break;case"details":ry("toggle",e),l=r;break;case"input":ed(e,r),l=ef(e,r),ry("invalid",e);break;case"option":default:l=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},l=en({},r,{value:void 0}),ry("invalid",e);break;case"textarea":ew(e,r),l=eb(e,r),ry("invalid",e)}for(u in eA(n,l),d=l)if(d.hasOwnProperty(u)){var h=d[u];"style"===u?eM(e,h):"dangerouslySetInnerHTML"===u?null!=(h=h?h.__html:void 0)&&eC(e,h):"children"===u?"string"==typeof h?("textarea"!==n||""!==h)&&eI(e,h):"number"==typeof h&&eI(e,""+h):"suppressContentEditableWarning"!==u&&"suppressHydrationWarning"!==u&&"autoFocus"!==u&&(p.hasOwnProperty(u)?null!=h&&"onScroll"===u&&ry("scroll",e):null!=h&&_(e,u,h,c))}switch(n){case"input":el(e),ey(e,r,!1);break;case"textarea":el(e),eE(e);break;case"option":null!=r.value&&e.setAttribute("value",""+eo(r.value));break;case"select":e.multiple=!!r.multiple,null!=(u=r.value)?ev(e,!!r.multiple,u,!1):null!=r.defaultValue&&ev(e,!!r.multiple,r.defaultValue,!0);break;default:"function"==typeof l.onClick&&(e.onclick=rO)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}null!==t.ref&&(t.flags|=512,t.flags|=2097152)}return oV(t),null;case 6:if(e&&null!=t.stateNode)s(e,t,e.memoizedProps,r);else{if("string"!=typeof r&&null===t.stateNode)throw Error(f(166));if(n=ih(ip.current),ih(ic.current),aD(t)){if(r=t.stateNode,n=t.memoizedProps,r[r$]=t,(u=r.nodeValue!==n)&&null!==(e=aE))switch(e.tag){case 3:rI(r.nodeValue,n,0!=(1&e.mode));break;case 5:!0!==e.memoizedProps.suppressHydrationWarning&&rI(r.nodeValue,n,0!=(1&e.mode))}u&&(t.flags|=4)}else(r=(9===n.nodeType?n:n.ownerDocument).createTextNode(r))[r$]=t,t.stateNode=r}return oV(t),null;case 13:if(r1(ib),r=t.memoizedState,null===e||null!==e.memoizedState&&null!==e.memoizedState.dehydrated){if(ax&&null!==aS&&0!=(1&t.mode)&&0==(128&t.flags))aM(),aT(),t.flags|=98560,u=!1;else if(u=aD(t),null!==r&&null!==r.dehydrated){if(null===e){if(!u)throw Error(f(318));if(!(u=null!==(u=t.memoizedState)?u.dehydrated:null))throw Error(f(317));u[r$]=t}else aT(),0==(128&t.flags)&&(t.memoizedState=null),t.flags|=4;oV(t),u=!1}else null!==a_&&(sz(a_),a_=null),u=!0;if(!u)return 65536&t.flags?t:null}if(0!=(128&t.flags))return t.lanes=n,t;return(r=null!==r)!=(null!==e&&null!==e.memoizedState)&&r&&(t.child.flags|=8192,0!=(1&t.mode)&&(null===e||0!=(1&ib.current)?0===sh&&(sh=3):sQ())),null!==t.updateQueue&&(t.flags|=4),oV(t),null;case 4:return im(),i(e,t),null===e&&rv(t.stateNode.containerInfo),oV(t),null;case 10:return a$(t.type._context),oV(t),null;case 19:if(r1(ib),null===(u=t.memoizedState))return oV(t),null;if(r=0!=(128&t.flags),null===(c=u.rendering)){if(r)oG(u,!1);else{if(0!==sh||null!==e&&0!=(128&e.flags))for(e=t.child;null!==e;){if(null!==(c=iw(e))){for(t.flags|=128,oG(u,!1),null!==(r=c.updateQueue)&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;null!==n;)u=n,e=r,u.flags&=14680066,null===(c=u.alternate)?(u.childLanes=0,u.lanes=e,u.child=null,u.subtreeFlags=0,u.memoizedProps=null,u.memoizedState=null,u.updateQueue=null,u.dependencies=null,u.stateNode=null):(u.childLanes=c.childLanes,u.lanes=c.lanes,u.child=c.child,u.subtreeFlags=0,u.deletions=null,u.memoizedProps=c.memoizedProps,u.memoizedState=c.memoizedState,u.updateQueue=c.updateQueue,u.type=c.type,e=c.dependencies,u.dependencies=null===e?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return r2(ib,1&ib.current|2),t.child}e=e.sibling}null!==u.tail&&tn()>sE&&(t.flags|=128,r=!0,oG(u,!1),t.lanes=4194304)}}else{if(!r){if(null!==(e=iw(c))){if(t.flags|=128,r=!0,null!==(n=e.updateQueue)&&(t.updateQueue=n,t.flags|=4),oG(u,!0),null===u.tail&&"hidden"===u.tailMode&&!c.alternate&&!ax)return oV(t),null}else 2*tn()-u.renderingStartTime>sE&&1073741824!==n&&(t.flags|=128,r=!0,oG(u,!1),t.lanes=4194304)}u.isBackwards?(c.sibling=t.child,t.child=c):(null!==(n=u.last)?n.sibling=c:t.child=c,u.last=c)}if(null!==u.tail)return t=u.tail,u.rendering=t,u.tail=t.sibling,u.renderingStartTime=tn(),t.sibling=null,n=ib.current,r2(ib,r?1&n|2:1&n),t;return oV(t),null;case 22:case 23:return sH(),r=null!==t.memoizedState,null!==e&&null!==e.memoizedState!==r&&(t.flags|=8192),r&&0!=(1&t.mode)?0!=(1073741824&sd)&&(oV(t),6&t.subtreeFlags&&(t.flags|=8192)):oV(t),null;case 24:case 25:return null}throw Error(f(156,t.tag))}(n,t,sd))){sc=n;return}}else{if(null!==(n=function(e,t){switch(ak(t),t.tag){case 1:return r7(t.type)&&r9(),65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 3:return im(),r1(r6),r1(r4),iE(),0!=(65536&(e=t.flags))&&0==(128&e)?(t.flags=-65537&e|128,t):null;case 5:return iv(t),null;case 13:if(r1(ib),null!==(e=t.memoizedState)&&null!==e.dehydrated){if(null===t.alternate)throw Error(f(340));aT()}return 65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 19:return r1(ib),null;case 4:return im(),null;case 10:return a$(t.type._context),null;case 22:case 23:return sH(),null;default:return null}}(n,t))){n.flags&=32767,sc=n;return}if(null!==e)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{sh=6,sc=null;return}}if(null!==(t=t.sibling)){sc=t;return}sc=t=e}while(null!==t)0===sh&&(sh=5)}function sZ(e,t,n){var r=tS,a=ss.transition;try{ss.transition=null,tS=1,function(e,t,n,r){do s0();while(null!==sI)if(0!=(6&sl))throw Error(f(327));n=e.finishedWork;var a=e.finishedLanes;if(null!==n){if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(f(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(function(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var a=31-tf(n),i=1<<a;t[a]=0,r[a]=-1,e[a]=-1,n&=~i}}(e,i),e===su&&(sc=su=null,sf=0),0==(2064&n.subtreeFlags)&&0==(2064&n.flags)||sC||(sC=!0,o=to,s=function(){return s0(),null},e7(o,s)),i=0!=(15990&n.flags),0!=(15990&n.subtreeFlags)||i){i=ss.transition,ss.transition=null;var o,s,l,u,c,d=tS;tS=1;var p=sl;sl|=4,so.current=null,function(e,t){if(rN=tK,n0(e=nZ())){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{var r=(n=(n=e.ownerDocument)&&n.defaultView||window).getSelection&&n.getSelection();if(r&&0!==r.rangeCount){n=r.anchorNode;var a,i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch(e){n=null;break e}var s=0,l=-1,u=-1,c=0,d=0,p=e,h=null;t:for(;;){for(;p!==n||0!==i&&3!==p.nodeType||(l=s+i),p!==o||0!==r&&3!==p.nodeType||(u=s+r),3===p.nodeType&&(s+=p.nodeValue.length),null!==(a=p.firstChild);)h=p,p=a;for(;;){if(p===e)break t;if(h===n&&++c===i&&(l=s),h===o&&++d===r&&(u=s),null!==(a=p.nextSibling))break;h=(p=h).parentNode}p=a}n=-1===l||-1===u?null:{start:l,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(rD={focusedElem:e,selectionRange:n},tK=!1,oK=t;null!==oK;)if(e=(t=oK).child,0!=(1028&t.subtreeFlags)&&null!==e)e.return=t,oK=e;else for(;null!==oK;){t=oK;try{var y=t.alternate;if(0!=(1024&t.flags))switch(t.tag){case 0:case 11:case 15:case 5:case 6:case 4:case 17:break;case 1:if(null!==y){var m=y.memoizedProps,g=y.memoizedState,v=t.stateNode,b=v.getSnapshotBeforeUpdate(t.elementType===t.type?m:aL(t.type,m),g);v.__reactInternalSnapshotBeforeUpdate=b}break;case 3:var w=t.stateNode.containerInfo;1===w.nodeType?w.textContent="":9===w.nodeType&&w.documentElement&&w.removeChild(w.documentElement);break;default:throw Error(f(163))}}catch(e){s2(t,t.return,e)}if(null!==(e=t.sibling)){e.return=t.return,oK=e;break}oK=t.return}y=oJ,oJ=!1}(e,n),o9(n,e),function(e){var t=nZ(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&function e(t,n){return!!t&&!!n&&(t===n||(!t||3!==t.nodeType)&&(n&&3===n.nodeType?e(t,n.parentNode):"contains"in t?t.contains(n):!!t.compareDocumentPosition&&!!(16&t.compareDocumentPosition(n))))}(n.ownerDocument.documentElement,n)){if(null!==r&&n0(n)){if(t=r.start,void 0===(e=r.end)&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if((e=(t=n.ownerDocument||document)&&t.defaultView||window).getSelection){e=e.getSelection();var a=n.textContent.length,i=Math.min(r.start,a);r=void 0===r.end?i:Math.min(r.end,a),!e.extend&&i>r&&(a=r,r=i,i=a),a=nX(n,i);var o=nX(n,r);a&&o&&(1!==e.rangeCount||e.anchorNode!==a.node||e.anchorOffset!==a.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&((t=t.createRange()).setStart(a.node,a.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)1===e.nodeType&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for("function"==typeof n.focus&&n.focus(),n=0;n<t.length;n++)(e=t[n]).element.scrollLeft=e.left,e.element.scrollTop=e.top}}(rD),tK=!!rN,rD=rN=null,e.current=n,l=n,u=e,c=a,oK=l,function e(t,n,r){for(var a=0!=(1&t.mode);null!==oK;){var i=oK,o=i.child;if(22===i.tag&&a){var s=null!==i.memoizedState||oH;if(!s){var l=i.alternate,u=null!==l&&null!==l.memoizedState||oq;l=oH;var c=oq;if(oH=s,(oq=u)&&!c)for(oK=i;null!==oK;)u=(s=oK).child,22===s.tag&&null!==s.memoizedState?sr(i):null!==u?(u.return=s,oK=u):sr(i);for(;null!==o;)oK=o,e(o,n,r),o=o.sibling;oK=i,oH=l,oq=c}st(t,n,r)}else 0!=(8772&i.subtreeFlags)&&null!==o?(o.return=i,oK=o):st(t,n,r)}}(l,u,c),tt(),sl=p,tS=d,ss.transition=i}else e.current=n;if(sC&&(sC=!1,sI=e,sO=a),0===(i=e.pendingLanes)&&(sP=null),function(e){if(tc&&"function"==typeof tc.onCommitFiberRoot)try{tc.onCommitFiberRoot(tu,e,void 0,128==(128&e.current.flags))}catch(e){}}(n.stateNode,r),sB(e,tn()),null!==t)for(r=e.onRecoverableError,n=0;n<t.length;n++)r((a=t[n]).value,{componentStack:a.stack,digest:a.digest});if(sx)throw sx=!1,e=s_,s_=null,e;0!=(1&sO)&&0!==e.tag&&s0(),0!=(1&(i=e.pendingLanes))?e===sD?sN++:(sN=0,sD=e):sN=0,al()}}(e,t,n,r)}finally{ss.transition=a,tS=r}return null}function s0(){if(null!==sI){var e=tx(sO),t=ss.transition,n=tS;try{if(ss.transition=null,tS=16>e?16:e,null===sI)var r=!1;else{if(e=sI,sI=null,sO=0,0!=(6&sl))throw Error(f(331));var a=sl;for(sl|=4,oK=e.current;null!==oK;){var i=oK,o=i.child;if(0!=(16&oK.flags)){var s=i.deletions;if(null!==s){for(var l=0;l<s.length;l++){var u=s[l];for(oK=u;null!==oK;){var c=oK;switch(c.tag){case 0:case 11:case 15:oX(8,c,i)}var d=c.child;if(null!==d)d.return=c,oK=d;else for(;null!==oK;){var p=(c=oK).sibling,h=c.return;if(function e(t){var n=t.alternate;null!==n&&(t.alternate=null,e(n)),t.child=null,t.deletions=null,t.sibling=null,5===t.tag&&null!==(n=t.stateNode)&&(delete n[r$],delete n[rG],delete n[rH],delete n[rq],delete n[rW]),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}(c),c===u){oK=null;break}if(null!==p){p.return=h,oK=p;break}oK=h}}}var y=i.alternate;if(null!==y){var m=y.child;if(null!==m){y.child=null;do{var g=m.sibling;m.sibling=null,m=g}while(null!==m)}}oK=i}}if(0!=(2064&i.subtreeFlags)&&null!==o)o.return=i,oK=o;else for(;null!==oK;){if(i=oK,0!=(2048&i.flags))switch(i.tag){case 0:case 11:case 15:oX(9,i,i.return)}var v=i.sibling;if(null!==v){v.return=i.return,oK=v;break}oK=i.return}}var b=e.current;for(oK=b;null!==oK;){var w=(o=oK).child;if(0!=(2064&o.subtreeFlags)&&null!==w)w.return=o,oK=w;else for(o=b;null!==oK;){if(s=oK,0!=(2048&s.flags))try{switch(s.tag){case 0:case 11:case 15:oZ(9,s)}}catch(e){s2(s,s.return,e)}if(s===o){oK=null;break}var k=s.sibling;if(null!==k){k.return=s.return,oK=k;break}oK=s.return}}if(sl=a,al(),tc&&"function"==typeof tc.onPostCommitFiberRoot)try{tc.onPostCommitFiberRoot(tu,e)}catch(e){}r=!0}return r}finally{tS=n,ss.transition=t}}return!1}function s1(e,t,n){t=oy(e,t=of(n,t),1),e=a0(e,t,1),t=sA(),null!==e&&(tk(e,1,t),sB(e,t))}function s2(e,t,n){if(3===e.tag)s1(e,e,n);else for(;null!==t;){if(3===t.tag){s1(t,e,n);break}if(1===t.tag){var r=t.stateNode;if("function"==typeof t.type.getDerivedStateFromError||"function"==typeof r.componentDidCatch&&(null===sP||!sP.has(r))){e=om(t,e=of(n,e),1),t=a0(t,e,1),e=sA(),null!==t&&(tk(t,1,e),sB(t,e));break}}t=t.return}}function s3(e,t,n){var r=e.pingCache;null!==r&&r.delete(t),t=sA(),e.pingedLanes|=e.suspendedLanes&n,su===e&&(sf&n)===n&&(4===sh||3===sh&&(130023424&sf)===sf&&500>tn()-sk?sq(e,0):sv|=n),sB(e,t)}function s4(e,t){0===t&&(0==(1&e.mode)?t=1:(t=ty,0==(130023424&(ty<<=1))&&(ty=4194304)));var n=sA();null!==(e=aQ(e,t))&&(tk(e,t,n),sB(e,n))}function s6(e){var t=e.memoizedState,n=0;null!==t&&(n=t.retryLane),s4(e,n)}function s8(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,a=e.memoizedState;null!==a&&(n=a.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(f(314))}null!==r&&r.delete(t),s4(e,n)}function s5(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function s7(e,t,n,r){return new s5(e,t,n,r)}function s9(e){return!(!(e=e.prototype)||!e.isReactComponent)}function le(e,t){var n=e.alternate;return null===n?((n=s7(e.tag,t,e.key,e.mode)).elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=14680064&e.flags,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=null===t?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function lt(e,t,n,r,a,i){var o=2;if(r=e,"function"==typeof e)s9(e)&&(o=1);else if("string"==typeof e)o=5;else e:switch(e){case N:return ln(n.children,a,i,t);case D:o=8,a|=8;break;case M:return(e=s7(12,n,t,2|a)).elementType=M,e.lanes=i,e;case L:return(e=s7(13,n,t,a)).elementType=L,e.lanes=i,e;case B:return(e=s7(19,n,t,a)).elementType=B,e.lanes=i,e;case z:return lr(n,a,i,t);default:if("object"==typeof e&&null!==e)switch(e.$$typeof){case T:o=10;break e;case A:o=9;break e;case R:o=11;break e;case j:o=14;break e;case U:o=16,r=null;break e}throw Error(f(130,null==e?e:typeof e,""))}return(t=s7(o,n,t,a)).elementType=e,t.type=r,t.lanes=i,t}function ln(e,t,n,r){return(e=s7(7,e,r,t)).lanes=n,e}function lr(e,t,n,r){return(e=s7(22,e,r,t)).elementType=z,e.lanes=n,e.stateNode={isHidden:!1},e}function la(e,t,n){return(e=s7(6,e,null,t)).lanes=n,e}function li(e,t,n){return(t=s7(4,null!==e.children?e.children:[],e.key,t)).lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function lo(e,t,n,r,a){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=tw(0),this.expirationTimes=tw(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=tw(0),this.identifierPrefix=r,this.onRecoverableError=a,this.mutableSourceEagerHydrationData=null}function ls(e,t,n,r,a,i,o,s,l){return e=new lo(e,t,n,s,l),1===t?(t=1,!0===i&&(t|=8)):t=0,i=s7(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},aJ(i),e}function ll(e){if(!e)return r3;e=e._reactInternals;e:{if(e4(e)!==e||1!==e.tag)throw Error(f(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(r7(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(null!==t)throw Error(f(171))}if(1===e.tag){var n=e.type;if(r7(n))return at(e,n,t)}return t}function lu(e,t,n,r,a,i,o,s,l){return(e=ls(n,r,!0,e,a,i,o,s,l)).context=ll(null),n=e.current,(i=aZ(r=sA(),a=sR(n))).callback=null!=t?t:null,a0(n,i,a),e.current.lanes=a,tk(e,a,r),sB(e,r),e}function lc(e,t,n,r){var a=t.current,i=sA(),o=sR(a);return n=ll(n),null===t.context?t.context=n:t.pendingContext=n,(t=aZ(i,o)).payload={element:e},null!==(r=void 0===r?null:r)&&(t.callback=r),null!==(e=a0(a,t,o))&&(sL(e,a,o,i),a1(e,a,o)),o}function lf(e){return(e=e.current).child?(e.child.tag,e.child.stateNode):null}function ld(e,t){if(null!==(e=e.memoizedState)&&null!==e.dehydrated){var n=e.retryLane;e.retryLane=0!==n&&n<t?n:t}}function lp(e,t){ld(e,t),(e=e.alternate)&&ld(e,t)}l=function(e,t,n){if(null!==e){if(e.memoizedProps!==t.pendingProps||r6.current)ok=!0;else{if(0==(e.lanes&n)&&0==(128&t.flags))return ok=!1,function(e,t,n){switch(t.tag){case 3:oD(t),aT();break;case 5:ig(t);break;case 1:r7(t.type)&&an(t);break;case 4:iy(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,a=t.memoizedProps.value;r2(aB,r._currentValue),r._currentValue=a;break;case 13:if(null!==(r=t.memoizedState)){if(null!==r.dehydrated)return r2(ib,1&ib.current),t.flags|=128,null;if(0!=(n&t.child.childLanes))return oR(e,t,n);return r2(ib,1&ib.current),null!==(e=o$(e,t,n))?e.sibling:null}r2(ib,1&ib.current);break;case 19:if(r=0!=(n&t.childLanes),0!=(128&e.flags)){if(r)return oz(e,t,n);t.flags|=128}if(null!==(a=t.memoizedState)&&(a.rendering=null,a.tail=null,a.lastEffect=null),r2(ib,ib.current),!r)return null;break;case 22:case 23:return t.lanes=0,oP(e,t,n)}return o$(e,t,n)}(e,t,n);ok=0!=(131072&e.flags)}}else ok=!1,ax&&0!=(1048576&t.flags)&&ab(t,ad,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;oF(e,t),e=t.pendingProps;var a=r5(t,r4.current);aV(t,n),a=iR(null,t,r,e,a,n);var i=iL();return t.flags|=1,"object"==typeof a&&null!==a&&"function"==typeof a.render&&void 0===a.$$typeof?(t.tag=1,t.memoizedState=null,t.updateQueue=null,r7(r)?(i=!0,an(t)):i=!1,t.memoizedState=null!==a.state&&void 0!==a.state?a.state:null,aJ(t),a.updater=a5,t.stateNode=a,a._reactInternals=t,it(t,r,e,n),t=oN(null,t,r,!0,i,n)):(t.tag=0,ax&&i&&aw(t),oE(null,t,a,n),t=t.child),t;case 16:r=t.elementType;e:{switch(oF(e,t),e=t.pendingProps,r=(a=r._init)(r._payload),t.type=r,a=t.tag=function(e){if("function"==typeof e)return s9(e)?1:0;if(null!=e){if((e=e.$$typeof)===R)return 11;if(e===j)return 14}return 2}(r),e=aL(r,e),a){case 0:t=oI(null,t,r,e,n);break e;case 1:t=oO(null,t,r,e,n);break e;case 11:t=oS(null,t,r,e,n);break e;case 14:t=ox(null,t,r,aL(r.type,e),n);break e}throw Error(f(306,r,""))}return t;case 0:return r=t.type,a=t.pendingProps,a=t.elementType===r?a:aL(r,a),oI(e,t,r,a,n);case 1:return r=t.type,a=t.pendingProps,a=t.elementType===r?a:aL(r,a),oO(e,t,r,a,n);case 3:e:{if(oD(t),null===e)throw Error(f(387));r=t.pendingProps,a=(i=t.memoizedState).element,aX(e,t),a3(t,r,null,n);var o=t.memoizedState;if(r=o.element,i.isDehydrated){if(i={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=i,t.memoizedState=i,256&t.flags){a=of(Error(f(423)),t),t=oM(e,t,r,n,a);break e}if(r!==a){a=of(Error(f(424)),t),t=oM(e,t,r,n,a);break e}for(aS=rU(t.stateNode.containerInfo.firstChild),aE=t,ax=!0,a_=null,n=il(t,null,r,n),t.child=n;n;)n.flags=-3&n.flags|4096,n=n.sibling}else{if(aT(),r===a){t=o$(e,t,n);break e}oE(e,t,r,n)}t=t.child}return t;case 5:return ig(t),null===e&&aO(t),r=t.type,a=t.pendingProps,i=null!==e?e.memoizedProps:null,o=a.children,rM(r,a)?o=null:null!==i&&rM(r,i)&&(t.flags|=32),oC(e,t),oE(e,t,o,n),t.child;case 6:return null===e&&aO(t),null;case 13:return oR(e,t,n);case 4:return iy(t,t.stateNode.containerInfo),r=t.pendingProps,null===e?t.child=is(t,null,r,n):oE(e,t,r,n),t.child;case 11:return r=t.type,a=t.pendingProps,a=t.elementType===r?a:aL(r,a),oS(e,t,r,a,n);case 7:return oE(e,t,t.pendingProps,n),t.child;case 8:case 12:return oE(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,a=t.pendingProps,i=t.memoizedProps,o=a.value,r2(aB,r._currentValue),r._currentValue=o,null!==i){if(nQ(i.value,o)){if(i.children===a.children&&!r6.current){t=o$(e,t,n);break e}}else for(null!==(i=t.child)&&(i.return=t);null!==i;){var s=i.dependencies;if(null!==s){o=i.child;for(var l=s.firstContext;null!==l;){if(l.context===r){if(1===i.tag){(l=aZ(-1,n&-n)).tag=2;var u=i.updateQueue;if(null!==u){var c=(u=u.shared).pending;null===c?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}i.lanes|=n,null!==(l=i.alternate)&&(l.lanes|=n),aG(i.return,n,t),s.lanes|=n;break}l=l.next}}else if(10===i.tag)o=i.type===t.type?null:i.child;else if(18===i.tag){if(null===(o=i.return))throw Error(f(341));o.lanes|=n,null!==(s=o.alternate)&&(s.lanes|=n),aG(o,n,t),o=i.sibling}else o=i.child;if(null!==o)o.return=i;else for(o=i;null!==o;){if(o===t){o=null;break}if(null!==(i=o.sibling)){i.return=o.return,o=i;break}o=o.return}i=o}}oE(e,t,a.children,n),t=t.child}return t;case 9:return a=t.type,r=t.pendingProps.children,aV(t,n),r=r(a=aH(a)),t.flags|=1,oE(e,t,r,n),t.child;case 14:return a=aL(r=t.type,t.pendingProps),a=aL(r.type,a),ox(e,t,r,a,n);case 15:return o_(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,a=t.pendingProps,a=t.elementType===r?a:aL(r,a),oF(e,t),t.tag=1,r7(r)?(e=!0,an(t)):e=!1,aV(t,n),a9(t,r,a),it(t,r,a,n),oN(null,t,r,!0,e,n);case 19:return oz(e,t,n);case 22:return oP(e,t,n)}throw Error(f(156,t.tag))};var lh="function"==typeof reportError?reportError:function(e){console.error(e)};function ly(e){this._internalRoot=e}function lm(e){this._internalRoot=e}function lg(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType)}function lv(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType&&(8!==e.nodeType||" react-mount-point-unstable "!==e.nodeValue))}function lb(){}function lw(e,t,n,r,a){var i=n._reactRootContainer;if(i){var o=i;if("function"==typeof a){var s=a;a=function(){var e=lf(o);s.call(e)}}lc(t,o,e,a)}else o=function(e,t,n,r,a){if(a){if("function"==typeof r){var i=r;r=function(){var e=lf(o);i.call(e)}}var o=lu(t,r,e,0,null,!1,!1,"",lb);return e._reactRootContainer=o,e[rV]=o.current,rv(8===e.nodeType?e.parentNode:e),sV(),o}for(;a=e.lastChild;)e.removeChild(a);if("function"==typeof r){var s=r;r=function(){var e=lf(l);s.call(e)}}var l=ls(e,0,!1,null,null,!1,!1,"",lb);return e._reactRootContainer=l,e[rV]=l.current,rv(8===e.nodeType?e.parentNode:e),sV(function(){lc(t,l,n,r)}),l}(n,t,e,a,r);return lf(o)}lm.prototype.render=ly.prototype.render=function(e){var t=this._internalRoot;if(null===t)throw Error(f(409));lc(e,t,null,null)},lm.prototype.unmount=ly.prototype.unmount=function(){var e=this._internalRoot;if(null!==e){this._internalRoot=null;var t=e.containerInfo;sV(function(){lc(null,e,null,null)}),t[rV]=null}},lm.prototype.unstable_scheduleHydration=function(e){if(e){var t=tI();e={blockedOn:null,target:e,priority:t};for(var n=0;n<tB.length&&0!==t&&t<tB[n].priority;n++);tB.splice(n,0,e),0===n&&tF(e)}},t_=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=tm(t.pendingLanes);0!==n&&(tE(t,1|n),sB(t,tn()),0==(6&sl)&&(sE=tn()+500,al()))}break;case 13:sV(function(){var t=aQ(e,1);null!==t&&sL(t,e,1,sA())}),lp(e,1)}},tP=function(e){if(13===e.tag){var t=aQ(e,134217728);null!==t&&sL(t,e,134217728,sA()),lp(e,134217728)}},tC=function(e){if(13===e.tag){var t=sR(e),n=aQ(e,t);null!==n&&sL(n,e,t,sA()),lp(e,t)}},tI=function(){return tS},tO=function(e,t){var n=tS;try{return tS=e,t()}finally{tS=n}},ej=function(e,t,n){switch(t){case"input":if(eh(e,n),t=n.name,"radio"===n.type&&null!=t){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var a=rJ(r);if(!a)throw Error(f(90));eu(r),eh(r,a)}}}break;case"textarea":ek(e,n);break;case"select":null!=(t=n.value)&&ev(e,!!n.multiple,t,!1)}},eV=sG,eH=sV;var lk={findFiberByHostInstance:rK,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},lE={bundleType:lk.bundleType,version:lk.version,rendererPackageName:lk.rendererPackageName,rendererConfig:lk.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:P.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return null===(e=e5(e))?null:e.stateNode},findFiberByHostInstance:lk.findFiberByHostInstance||function(){return null},findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if("undefined"!=typeof __REACT_DEVTOOLS_GLOBAL_HOOK__){var lS=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!lS.isDisabled&&lS.supportsFiber)try{tu=lS.inject(lE),tc=lS}catch(e){}}G={usingClientEntryPoint:!1,Events:[rQ,rY,rJ,e$,eG,sG]},V=function(e,t){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;if(!lg(t))throw Error(f(200));return function(e,t,n){var r=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:I,key:null==r?null:""+r,children:e,containerInfo:t,implementation:null}}(e,t,null,n)},H=function(e,t){if(!lg(e))throw Error(f(299));var n=!1,r="",a=lh;return null!=t&&(!0===t.unstable_strictMode&&(n=!0),void 0!==t.identifierPrefix&&(r=t.identifierPrefix),void 0!==t.onRecoverableError&&(a=t.onRecoverableError)),t=ls(e,1,!1,null,null,n,!1,r,a),e[rV]=t.current,rv(8===e.nodeType?e.parentNode:e),new ly(t)},q=function(e){if(null==e)return null;if(1===e.nodeType)return e;var t=e._reactInternals;if(void 0===t){if("function"==typeof e.render)throw Error(f(188));throw Error(f(268,e=Object.keys(e).join(",")))}return e=null===(e=e5(t))?null:e.stateNode},W=function(e){return sV(e)},K=function(e,t,n){if(!lv(t))throw Error(f(200));return lw(null,e,t,!0,n)},Q=function(e,t,n){if(!lg(e))throw Error(f(405));var r=null!=n&&n.hydratedSources||null,a=!1,i="",o=lh;if(null!=n&&(!0===n.unstable_strictMode&&(a=!0),void 0!==n.identifierPrefix&&(i=n.identifierPrefix),void 0!==n.onRecoverableError&&(o=n.onRecoverableError)),t=lu(t,null,e,1,null!=n?n:null,a,!1,i,o),e[rV]=t.current,rv(e),r)for(e=0;e<r.length;e++)a=(a=(n=r[e])._getVersion)(n._source),null==t.mutableSourceEagerHydrationData?t.mutableSourceEagerHydrationData=[n,a]:t.mutableSourceEagerHydrationData.push(n,a);return new lm(t)},Y=function(e,t,n){if(!lv(t))throw Error(f(200));return lw(null,e,t,!1,n)},J=function(e){if(!lv(e))throw Error(f(40));return!!e._reactRootContainer&&(sV(function(){lw(null,null,e,!1,function(){e._reactRootContainer=null,e[rV]=null})}),!0)},X=sG,Z=function(e,t,n,r){if(!lv(n))throw Error(f(200));if(null==e||void 0===e._reactInternals)throw Error(f(38));return lw(e,t,n,!1,r)},ee="18.2.0-next-9e3b772b8-20220608"}),N("fO90s",function(e,t){e.exports=O("gcnCG")}),N("gcnCG",function(t,n){function r(e,t){var n=e.length;for(e.push(t);0<n;){var r=n-1>>>1,a=e[r];if(0<o(a,t))e[r]=t,e[n]=a,n=r;else break}}function a(e){return 0===e.length?null:e[0]}function i(e){if(0===e.length)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;for(var r=0,a=e.length,i=a>>>1;r<i;){var s=2*(r+1)-1,l=e[s],u=s+1,c=e[u];if(0>o(l,n))u<a&&0>o(c,l)?(e[r]=c,e[u]=n,r=u):(e[r]=l,e[s]=n,r=s);else if(u<a&&0>o(c,n))e[r]=c,e[u]=n,r=u;else break}}return t}function o(e,t){var n=e.sortIndex-t.sortIndex;return 0!==n?n:e.id-t.id}if(e(t.exports,"unstable_now",()=>s,e=>s=e),e(t.exports,"unstable_IdlePriority",()=>l,e=>l=e),e(t.exports,"unstable_ImmediatePriority",()=>u,e=>u=e),e(t.exports,"unstable_LowPriority",()=>c,e=>c=e),e(t.exports,"unstable_NormalPriority",()=>f,e=>f=e),e(t.exports,"unstable_Profiling",()=>d,e=>d=e),e(t.exports,"unstable_UserBlockingPriority",()=>p,e=>p=e),e(t.exports,"unstable_cancelCallback",()=>h,e=>h=e),e(t.exports,"unstable_continueExecution",()=>y,e=>y=e),e(t.exports,"unstable_forceFrameRate",()=>m,e=>m=e),e(t.exports,"unstable_getCurrentPriorityLevel",()=>g,e=>g=e),e(t.exports,"unstable_getFirstCallbackNode",()=>v,e=>v=e),e(t.exports,"unstable_next",()=>b,e=>b=e),e(t.exports,"unstable_pauseExecution",()=>w,e=>w=e),e(t.exports,"unstable_requestPaint",()=>k,e=>k=e),e(t.exports,"unstable_runWithPriority",()=>E,e=>E=e),e(t.exports,"unstable_scheduleCallback",()=>S,e=>S=e),e(t.exports,"unstable_shouldYield",()=>x,e=>x=e),e(t.exports,"unstable_wrapCallback",()=>_,e=>_=e),"object"==typeof performance&&"function"==typeof performance.now){var s,l,u,c,f,d,p,h,y,m,g,v,b,w,k,E,S,x,_,P,C=performance;s=function(){return C.now()}}else{var I=Date,O=I.now();s=function(){return I.now()-O}}var N=[],D=[],M=1,T=null,A=3,R=!1,L=!1,B=!1,j="function"==typeof setTimeout?setTimeout:null,U="function"==typeof clearTimeout?clearTimeout:null,z="undefined"!=typeof setImmediate?setImmediate:null;function F(e){for(var t=a(D);null!==t;){if(null===t.callback)i(D);else if(t.startTime<=e)i(D),t.sortIndex=t.expirationTime,r(N,t);else break;t=a(D)}}function $(e){if(B=!1,F(e),!L){if(null!==a(N))L=!0,Z(G);else{var t=a(D);null!==t&&ee($,t.startTime-e)}}}function G(e,t){L=!1,B&&(B=!1,U(q),q=-1),R=!0;var n=A;try{for(F(t),T=a(N);null!==T&&(!(T.expirationTime>t)||e&&!Q());){var r=T.callback;if("function"==typeof r){T.callback=null,A=T.priorityLevel;var o=r(T.expirationTime<=t);t=s(),"function"==typeof o?T.callback=o:T===a(N)&&i(N),F(t)}else i(N);T=a(N)}if(null!==T)var l=!0;else{var u=a(D);null!==u&&ee($,u.startTime-t),l=!1}return l}finally{T=null,A=n,R=!1}}"undefined"!=typeof navigator&&void 0!==navigator.scheduling&&void 0!==navigator.scheduling.isInputPending&&navigator.scheduling.isInputPending.bind(navigator.scheduling);var V=!1,H=null,q=-1,W=5,K=-1;function Q(){return!(s()-K<W)}function Y(){if(null!==H){var e=s();K=e;var t=!0;try{t=H(!0,e)}finally{t?P():(V=!1,H=null)}}else V=!1}if("function"==typeof z)P=function(){z(Y)};else if("undefined"!=typeof MessageChannel){var J=new MessageChannel,X=J.port2;J.port1.onmessage=Y,P=function(){X.postMessage(null)}}else P=function(){j(Y,0)};function Z(e){H=e,V||(V=!0,P())}function ee(e,t){q=j(function(){e(s())},t)}l=5,u=1,c=4,f=3,d=null,p=2,h=function(e){e.callback=null},y=function(){L||R||(L=!0,Z(G))},m=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):W=0<e?Math.floor(1e3/e):5},g=function(){return A},v=function(){return a(N)},b=function(e){switch(A){case 1:case 2:case 3:var t=3;break;default:t=A}var n=A;A=t;try{return e()}finally{A=n}},w=function(){},k=function(){},E=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=A;A=e;try{return t()}finally{A=n}},S=function(e,t,n){var i=s();switch(n="object"==typeof n&&null!==n&&"number"==typeof(n=n.delay)&&0<n?i+n:i,e){case 1:var o=-1;break;case 2:o=250;break;case 5:o=1073741823;break;case 4:o=1e4;break;default:o=5e3}return o=n+o,e={id:M++,callback:t,priorityLevel:e,startTime:n,expirationTime:o,sortIndex:-1},n>i?(e.sortIndex=n,r(D,e),null===a(N)&&e===a(D)&&(B?(U(q),q=-1):B=!0,ee($,n-i))):(e.sortIndex=o,r(N,e),L||R||(L=!0,Z(G))),e},x=Q,_=function(e){var t=A;return function(){var n=A;A=t;try{return e.apply(this,arguments)}finally{A=n}}}}),N("hOzOt",function(e,t){var n=O("kZO5c");function r(){}function a(){}a.resetWarningCache=r,e.exports=function(){function e(e,t,r,a,i,o){if(o!==n){var s=Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function t(){return e}e.isRequired=e;// Important!
// Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
var i={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:a,resetWarningCache:r};return i.PropTypes=i,i}}),N("kZO5c",function(e,t){e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"});var D={};D=O("1b2ls");var M=O("acw62"),T={};!// DCE check should happen before ReactDOM bundle executes so that
// DevTools can report bad minification during injection.
function e(){/* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */if("undefined"!=typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)try{// Verify that the code above has been dead code eliminated (DCE'd).
__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(e){// DevTools shouldn't crash React, no matter what.
// We should still report in case we break this code.
console.error(e)}}(),eZ=(T=O("Xw6Mv")).createRoot,T.hydrateRoot;let A=(e=21)=>{let t="",n=e;for(;n--;)t+="useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict"[64*Math.random()|0];return t};/** Used for built-in method references. */var R=Object.prototype,L=Function.prototype.toString;R.hasOwnProperty,L.call(Object),R.toString;/** Built-in value references. */var B={};Object.defineProperty(B,"__esModule",{value:!0}),B.createTests=B.createPatch=B.applyPatch=void 0;var j={};/**
Unescape token part of a JSON Pointer string

`token` should *not* contain any '/' characters.

> Evaluation of each reference token begins by decoding any escaped
> character sequence.  This is performed by first transforming any
> occurrence of the sequence '~1' to '/', and then transforming any
> occurrence of the sequence '~0' to '~'.  By performing the
> substitutions in this order, an implementation avoids the error of
> turning '~01' first into '~1' and then into '/', which would be
> incorrect (the string '~01' correctly becomes '~1' after
> transformation).

Here's my take:

~1 is unescaped with higher priority than ~0 because it is a lower-order escape character.
I say "lower order" because '/' needs escaping due to the JSON Pointer serialization technique.
Whereas, '~' is escaped because escaping '/' uses the '~' character.
*/function U(e){return e.replace(/~1/g,"/").replace(/~0/g,"~")}/** Escape token part of a JSON Pointer string

> '~' needs to be encoded as '~0' and '/'
> needs to be encoded as '~1' when these characters appear in a
> reference token.

This is the exact inverse of `unescape()`, so the reverse replacements must take place in reverse order.
*/function z(e){return e.replace(/~/g,"~0").replace(/\//g,"~1")}Object.defineProperty(j,"__esModule",{value:!0}),j.Pointer=void 0;/**
JSON Pointer representation
*/var F=/** @class */function(){function e(e){void 0===e&&(e=[""]),this.tokens=e}return(/**
    `path` *must* be a properly escaped string.
    */e.fromJSON=function(t){var n=t.split("/").map(U);if(""!==n[0])throw Error("Invalid JSON Pointer: "+t);return new e(n)},e.prototype.toString=function(){return this.tokens.map(z).join("/")},/**
    Returns an object with 'parent', 'key', and 'value' properties.
    In the special case that this Pointer's path == "",
    this object will be {parent: null, key: '', value: object}.
    Otherwise, parent and key will have the property such that parent[key] == value.
    */e.prototype.evaluate=function(e){for(var t=null,n="",r=e,a=1,i=this.tokens.length;a<i;a++)t=r,"__proto__"!=(n=this.tokens[a])&&"constructor"!=n&&"prototype"!=n&&// not sure if this the best way to handle non-existant paths...
(r=(t||{})[n]);return{parent:t,key:n,value:r}},e.prototype.get=function(e){return this.evaluate(e).value},e.prototype.set=function(e,t){for(var n=e,r=1,a=this.tokens.length-1,i=this.tokens[r];r<a;r++)n=(n||{})[i];n&&(n[this.tokens[this.tokens.length-1]]=t)},e.prototype.push=function(e){// mutable
this.tokens.push(e)},/**
    `token` should be a String. It'll be coerced to one anyway.
  
    immutable (shallowly)
    */e.prototype.add=function(t){var n=this.tokens.concat(String(t));return new e(n)},e)}();j.Pointer=F;var $={},G=$&&$.__extends||(eX=function(e,t){return(eX=Object.setPrototypeOf||({__proto__:[]})instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])})(e,t)},function(e,t){if("function"!=typeof t&&null!==t)throw TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}eX(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)});Object.defineProperty($,"__esModule",{value:!0}),$.apply=$.InvalidOperationError=$.test=$.copy=$.move=$.replace=$.remove=$.add=$.TestError=$.MissingError=void 0;var V={};Object.defineProperty(V,"__esModule",{value:!0}),V.clone=V.objectType=V.hasOwnProperty=void 0,V.hasOwnProperty=Object.prototype.hasOwnProperty,V.objectType=function(e){return void 0===e?"undefined":null===e?"null":Array.isArray(e)?"array":typeof e},V.clone=/**
Recursively copy a value.

@param source - should be a JavaScript primitive, Array, Date, or (plain old) Object.
@returns copy of source where every Array and Object have been recursively
         reconstructed from their constituent elements
*/function e(t){if(!(null!=t&&"object"==typeof t))return t;// x.constructor == Array is the fastest way to check if x is an Array
if(t.constructor==Array){for(var n=t.length,r=Array(n),a=0;a<n;a++)r[a]=e(t[a]);return r}// Date
if(t.constructor==Date)return new Date(+t);// Object
var i={};// declaring the variable (with const) inside the loop is faster
for(var o in t)// using a global helper is MUCH faster than calling source.hasOwnProperty(key)
V.hasOwnProperty.call(t,o)&&(i[o]=e(t[o]));return i};var H={};/**
List the keys in `minuend` that are not in `subtrahend`.

A key is only considered if it is both 1) an own-property (o.hasOwnProperty(k))
of the object, and 2) has a value that is not undefined. This is to match JSON
semantics, where JSON object serialization drops keys with undefined values.

@param minuend Object of interest
@param subtrahend Object of comparison
@returns Array of keys that are in `minuend` but not in `subtrahend`.
*/function q(e,t){// initialize empty object; we only care about the keys, the values can be anything
var n={};// build up obj with all the properties of minuend
for(var r in e)V.hasOwnProperty.call(e,r)&&void 0!==e[r]&&(n[r]=1);// now delete all the properties of subtrahend from obj
// (deleting a missing key has no effect)
for(var a in t)V.hasOwnProperty.call(t,a)&&void 0!==t[a]&&delete n[a];// finally, extract whatever keys remain in obj
return Object.keys(n)}/**
List the keys that shared by all `objects`.

The semantics of what constitutes a "key" is described in {@link subtract}.

@param objects Array of objects to compare
@returns Array of keys that are in ("own-properties" of) every object in `objects`.
*/function W(e){// go through each object and increment the counter for each key in that object
for(var t=e.length,n={},r=0;r<t;r++){var a=e[r];for(var i in a)V.hasOwnProperty.call(a,i)&&void 0!==a[i]&&(n[i]=(n[i]||0)+1)}// now delete all keys from the counter that were not seen in every object
for(var i in n)n[i]<t&&delete n[i];// finally, extract whatever keys remain in the counter
return Object.keys(n)}function K(e,t){return{// the new operation must be pushed on the end
operations:e.operations.concat(t),cost:e.cost+1}}/**
Calculate the shortest sequence of operations to get from `input` to `output`,
using a dynamic programming implementation of the Levenshtein distance algorithm.

To get from the input ABC to the output AZ we could just delete all the input
and say "insert A, insert Z" and be done with it. That's what we do if the
input is empty. But we can be smarter.

          output
               A   Z
               -   -
          [0]  1   2
input A |  1  [0]  1
      B |  2  [1]  1
      C |  3   2  [2]

1) start at 0,0 (+0)
2) keep A (+0)
3) remove B (+1)
4) replace C with Z (+1)

If the `input` (source) is empty, they'll all be in the top row, resulting in an
array of 'add' operations.
If the `output` (target) is empty, everything will be in the left column,
resulting in an array of 'remove' operations.

@returns A list of add/remove/replace operations.
*/function Q(e,t,n,r){void 0===r&&(r=J);// set up cost matrix (very simple initialization: just a map)
var a={"0,0":{operations:[],cost:0}},i=isNaN(e.length)||e.length<=0?0:e.length;return(/**
    Calculate the cheapest sequence of operations required to get from
    input.slice(0, i) to output.slice(0, j).
    There may be other valid sequences with the same cost, but none cheaper.
  
    @param i The row in the layout above
    @param j The column in the layout above
    @returns An object containing a list of operations, along with the total cost
             of applying them (+1 for each add/remove/replace operation)
    */(function i(o,s){// memoized
var l=o+","+s,u=a[l];if(void 0===u){// TODO: this !diff(...).length usage could/should be lazy
if(o>0&&s>0&&!r(e[o-1],t[s-1],n.add(String(o-1))).length)u=i(o-1,s-1);else{var c=[];if(o>0){// NOT topmost row
var f=i(o-1,s);c.push(K(f,{op:"remove",index:o-1}))}if(s>0){// NOT leftmost column
var d=i(o,s-1),p={op:"add",index:o-1,value:t[s-1]};c.push(K(d,p))}if(o>0&&s>0){// TABLE MIDDLE
// supposing we replaced it, compute the rest of the costs:
var h=i(o-1,s-1),y={op:"replace",index:o-1,original:e[o-1],value:t[s-1]};c.push(K(h,y))}u=c.sort(function(e,t){return e.cost-t.cost})[0]}a[l]=u}return u})(i,isNaN(t.length)||t.length<=0?0:t.length).operations.reduce(function(e,t){var a=e[0],o=e[1];if("add"===t.op){var s=t.index+1+o,l=s<i+o?String(s):"-",u={op:t.op,path:n.add(l).toString(),value:t.value};// padding++ // maybe only if array_operation.index > -1 ?
return[a.concat(u),o+1]}if("remove"===t.op){var u={op:t.op,path:n.add(String(t.index+o)).toString()};// padding--
return[a.concat(u),o-1]}var c=n.add(String(t.index+o)),f=r(t.original,t.value,c);return[a.concat.apply(a,f),o]},[[],0])[0])}function Y(e,t,n,r){void 0===r&&(r=J);// if a key is in input but not output -> remove it
var a=[];return q(e,t).forEach(function(e){a.push({op:"remove",path:n.add(e).toString()})}),// if a key is in output but not input -> add it
q(t,e).forEach(function(e){a.push({op:"add",path:n.add(e).toString(),value:t[e]})}),// if a key is in both, diff it recursively
W([e,t]).forEach(function(i){a.push.apply(a,r(e[i],t[i],n.add(i)))}),a}/**
`diffAny()` returns an empty array if `input` and `output` are materially equal
(i.e., would produce equivalent JSON); otherwise it produces an array of patches
that would transform `input` into `output`.

> Here, "equal" means that the value at the target location and the
> value conveyed by "value" are of the same JSON type, and that they
> are considered equal by the following rules for that type:
> o  strings: are considered equal if they contain the same number of
>    Unicode characters and their code points are byte-by-byte equal.
> o  numbers: are considered equal if their values are numerically
>    equal.
> o  arrays: are considered equal if they contain the same number of
>    values, and if each value can be considered equal to the value at
>    the corresponding position in the other array, using this list of
>    type-specific rules.
> o  objects: are considered equal if they contain the same number of
>    members, and if each member can be considered equal to a member in
>    the other object, by comparing their keys (as strings) and their
>    values (using this list of type-specific rules).
> o  literals (false, true, and null): are considered equal if they are
>    the same.
*/function J(e,t,n,r){// strict equality handles literals, numbers, and strings (a sufficient but not necessary cause)
if(void 0===r&&(r=J),e===t)return[];var a=V.objectType(e),i=V.objectType(t);return"array"==a&&"array"==i?Q(e,t,n,r):"object"==a&&"object"==i?Y(e,t,n,r):[{op:"replace",path:n.toString(),value:t}]}Object.defineProperty(H,"__esModule",{value:!0}),H.diffAny=H.diffObjects=H.diffArrays=H.intersection=H.subtract=H.isDestructive=void 0,H.isDestructive=function(e){var t=e.op;return"remove"===t||"replace"===t||"copy"===t||"move"===t},H.subtract=q,H.intersection=W,H.diffArrays=Q,H.diffObjects=Y,H.diffAny=J;var X=/** @class */function(e){function t(t){var n=e.call(this,"Value required at path: "+t)||this;return n.path=t,n.name="MissingError",n}return G(t,e),t}(Error);$.MissingError=X;var Z=/** @class */function(e){function t(t,n){var r=e.call(this,"Test failed: "+t+" != "+n)||this;return r.actual=t,r.expected=n,r.name="TestError",r}return G(t,e),t}(Error);function ee(e,t,n){if(Array.isArray(e)){// `key` must be an index
if("-"==t)e.push(n);else{var r=parseInt(t,10);e.splice(r,0,n)}}else e[t]=n}function et(e,t){if(Array.isArray(e)){// '-' syntax doesn't make sense when removing
var n=parseInt(t,10);e.splice(n,1)}else delete e[t]}/**
>  o  If the target location specifies an array index, a new value is
>     inserted into the array at the specified index.
>  o  If the target location specifies an object member that does not
>     already exist, a new member is added to the object.
>  o  If the target location specifies an object member that does exist,
>     that member's value is replaced.
*/function en(e,t){var n=j.Pointer.fromJSON(t.path).evaluate(e);return(// it's not exactly a "MissingError" in the same way that `remove` is -- more like a MissingParent, or something
void 0===n.parent?new X(t.path):(ee(n.parent,n.key,V.clone(t.value)),null))}/**
> The "remove" operation removes the value at the target location.
> The target location MUST exist for the operation to be successful.
*/function er(e,t){// endpoint has parent, key, and value properties
var n=j.Pointer.fromJSON(t.path).evaluate(e);return void 0===n.value?new X(t.path):(// not sure what the proper behavior is when path = ''
et(n.parent,n.key),null)}/**
> The "replace" operation replaces the value at the target location
> with a new value.  The operation object MUST contain a "value" member
> whose content specifies the replacement value.
> The target location MUST exist for the operation to be successful.

> This operation is functionally identical to a "remove" operation for
> a value, followed immediately by an "add" operation at the same
> location with the replacement value.

Even more simply, it's like the add operation with an existence check.
*/function ea(e,t){var n=j.Pointer.fromJSON(t.path).evaluate(e);if(null===n.parent)return new X(t.path);// this existence check treats arrays as a special case
if(Array.isArray(n.parent)){if(parseInt(n.key,10)>=n.parent.length)return new X(t.path)}else if(void 0===n.value)return new X(t.path);return n.parent[n.key]=t.value,null}/**
> The "move" operation removes the value at a specified location and
> adds it to the target location.
> The operation object MUST contain a "from" member, which is a string
> containing a JSON Pointer value that references the location in the
> target document to move the value from.
> This operation is functionally identical to a "remove" operation on
> the "from" location, followed immediately by an "add" operation at
> the target location with the value that was just removed.

> The "from" location MUST NOT be a proper prefix of the "path"
> location; i.e., a location cannot be moved into one of its children.

TODO: throw if the check described in the previous paragraph fails.
*/function ei(e,t){var n=j.Pointer.fromJSON(t.from).evaluate(e);if(void 0===n.value)return new X(t.from);var r=j.Pointer.fromJSON(t.path).evaluate(e);return void 0===r.parent?new X(t.path):(et(n.parent,n.key),ee(r.parent,r.key,n.value),null)}/**
> The "copy" operation copies the value at a specified location to the
> target location.
> The operation object MUST contain a "from" member, which is a string
> containing a JSON Pointer value that references the location in the
> target document to copy the value from.
> The "from" location MUST exist for the operation to be successful.

> This operation is functionally identical to an "add" operation at the
> target location using the value specified in the "from" member.

Alternatively, it's like 'move' without the 'remove'.
*/function eo(e,t){var n=j.Pointer.fromJSON(t.from).evaluate(e);if(void 0===n.value)return new X(t.from);var r=j.Pointer.fromJSON(t.path).evaluate(e);return void 0===r.parent?new X(t.path):(ee(r.parent,r.key,V.clone(n.value)),null)}/**
> The "test" operation tests that a value at the target location is
> equal to a specified value.
> The operation object MUST contain a "value" member that conveys the
> value to be compared to the target location's value.
> The target location MUST be equal to the "value" value for the
> operation to be considered successful.
*/function es(e,t){var n=j.Pointer.fromJSON(t.path).evaluate(e);return(// TODO: this diffAny(...).length usage could/should be lazy
H.diffAny(n.value,t.value,new j.Pointer).length?new Z(n.value,t.value):null)}$.TestError=Z,$.add=en,$.remove=er,$.replace=ea,$.move=ei,$.copy=eo,$.test=es;var el=/** @class */function(e){function t(t){var n=e.call(this,"Invalid operation: "+t.op)||this;return n.operation=t,n.name="InvalidOperationError",n}return G(t,e),t}(Error);/**
Create a test operation based on `input`'s current evaluation of the JSON
Pointer `path`; if such a pointer cannot be resolved, returns undefined.
*/function eu(e,t){var n=j.Pointer.fromJSON(t).evaluate(e);if(void 0!==n)return{op:"test",path:t,value:n.value}}function ec(e){return(ec="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function ef(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function ed(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ef(Object(n),!0).forEach(function(t){!function(e,t,n){var r;r=function(e,t){if("object"!==ec(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!==ec(r))return r;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(t,"string"),(t="symbol"===ec(r)?r:String(r))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n}(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ef(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}/**
 * Adapted from React: https://github.com/facebook/react/blob/master/packages/shared/formatProdErrorMessage.js
 *
 * Do not require this module directly! Use normal throw error calls. These messages will be replaced with error codes
 * during build.
 * @param {number} code
 */function ep(e){return"Minified Redux error #"+e+"; visit https://redux.js.org/Errors?code="+e+" for the full message or use the non-minified dev environment for full errors. "}$.InvalidOperationError=el,$.apply=/**
Switch on `operation.op`, applying the corresponding patch function for each
case to `object`.
*/function(e,t){// not sure why TypeScript can't infer typesafety of:
//   {add, remove, replace, move, copy, test}[operation.op](object, operation)
// (seems like a bug)
switch(t.op){case"add":return en(e,t);case"remove":return er(e,t);case"replace":return ea(e,t);case"move":return ei(e,t);case"copy":return eo(e,t);case"test":return es(e,t)}return new el(t)},B.applyPatch=/**
Apply a 'application/json-patch+json'-type patch to an object.

`patch` *must* be an array of operations.

> Operation objects MUST have exactly one "op" member, whose value
> indicates the operation to perform.  Its value MUST be one of "add",
> "remove", "replace", "move", "copy", or "test"; other values are
> errors.

This method mutates the target object in-place.

@returns list of results, one for each operation: `null` indicated success,
         otherwise, the result will be an instance of one of the Error classes:
         MissingError, InvalidOperationError, or TestError.
*/function(e,t){return t.map(function(t){return $.apply(e,t)})},B.createPatch=/**
Produce a 'application/json-patch+json'-type patch to get from one object to
another.

This does not alter `input` or `output` unless they have a property getter with
side-effects (which is not a good idea anyway).

`diff` is called on each pair of comparable non-primitive nodes in the
`input`/`output` object trees, producing nested patches. Return `undefined`
to fall back to default behaviour.

Returns list of operations to perform on `input` to produce `output`.
*/function(e,t,n){var r=new j.Pointer;// a new Pointer gets a default path of [''] if not specified
return(n?function e(t,r,a){var i=n(t,r,a);// ensure an array is always returned
return Array.isArray(i)?i:H.diffAny(t,r,a,e)}:H.diffAny)(e,t,r)},B.createTests=/**
Produce an 'application/json-patch+json'-type list of tests, to verify that
existing values in an object are identical to the those captured at some
checkpoint (whenever this function is called).

This does not alter `input` or `output` unless they have a property getter with
side-effects (which is not a good idea anyway).

Returns list of test operations.
*/function(e,t){var n=[];return t.filter(H.isDestructive).forEach(function(t){var r=eu(e,t.path);if(r&&n.push(r),"from"in t){var a=eu(e,t.from);a&&n.push(a)}}),n};// Inlined version of the `symbol-observable` polyfill
var eh="function"==typeof Symbol&&Symbol.observable||"@@observable",ey=function(){return Math.random().toString(36).substring(7).split("").join(".")},em={INIT:"@@redux/INIT"+ey(),REPLACE:"@@redux/REPLACE"+ey(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+ey()}};/**
 * @deprecated
 *
 * **We recommend using the `configureStore` method
 * of the `@reduxjs/toolkit` package**, which replaces `createStore`.
 *
 * Redux Toolkit is our recommended approach for writing Redux logic today,
 * including store setup, reducers, data fetching, and more.
 *
 * **For more details, please read this Redux docs page:**
 * **https://redux.js.org/introduction/why-rtk-is-redux-today**
 *
 * `configureStore` from Redux Toolkit is an improved version of `createStore` that
 * simplifies setup and helps avoid common bugs.
 *
 * You should not be using the `redux` core package by itself today, except for learning purposes.
 * The `createStore` method from the core `redux` package will not be removed, but we encourage
 * all users to migrate to using Redux Toolkit for all Redux code.
 *
 * If you want to use `createStore` without this visual deprecation warning, use
 * the `legacy_createStore` import instead:
 *
 * `import { legacy_createStore as createStore} from 'redux'`
 *
 */function eg(e,t,n){if("function"==typeof t&&"function"==typeof n||"function"==typeof n&&"function"==typeof arguments[3])throw Error(ep(0));if("function"==typeof t&&void 0===n&&(n=t,t=void 0),void 0!==n){if("function"!=typeof n)throw Error(ep(1));return n(eg)(e,t)}if("function"!=typeof e)throw Error(ep(2));var r,a=e,i=t,o=[],s=o,l=!1;/**
   * This makes a shallow copy of currentListeners so we can use
   * nextListeners as a temporary list while dispatching.
   *
   * This prevents any bugs around consumers calling
   * subscribe/unsubscribe in the middle of a dispatch.
   */function u(){s===o&&(s=o.slice())}/**
   * Reads the state tree managed by the store.
   *
   * @returns {any} The current state tree of your application.
   */function c(){if(l)throw Error(ep(3));return i}/**
   * Adds a change listener. It will be called any time an action is dispatched,
   * and some part of the state tree may potentially have changed. You may then
   * call `getState()` to read the current state tree inside the callback.
   *
   * You may call `dispatch()` from a change listener, with the following
   * caveats:
   *
   * 1. The subscriptions are snapshotted just before every `dispatch()` call.
   * If you subscribe or unsubscribe while the listeners are being invoked, this
   * will not have any effect on the `dispatch()` that is currently in progress.
   * However, the next `dispatch()` call, whether nested or not, will use a more
   * recent snapshot of the subscription list.
   *
   * 2. The listener should not expect to see all state changes, as the state
   * might have been updated multiple times during a nested `dispatch()` before
   * the listener is called. It is, however, guaranteed that all subscribers
   * registered before the `dispatch()` started will be called with the latest
   * state by the time it exits.
   *
   * @param {Function} listener A callback to be invoked on every dispatch.
   * @returns {Function} A function to remove this change listener.
   */function f(e){if("function"!=typeof e)throw Error(ep(4));if(l)throw Error(ep(5));var t=!0;return u(),s.push(e),function(){if(t){if(l)throw Error(ep(6));t=!1,u();var n=s.indexOf(e);s.splice(n,1),o=null}}}/**
   * Dispatches an action. It is the only way to trigger a state change.
   *
   * The `reducer` function, used to create the store, will be called with the
   * current state tree and the given `action`. Its return value will
   * be considered the **next** state of the tree, and the change listeners
   * will be notified.
   *
   * The base implementation only supports plain object actions. If you want to
   * dispatch a Promise, an Observable, a thunk, or something else, you need to
   * wrap your store creating function into the corresponding middleware. For
   * example, see the documentation for the `redux-thunk` package. Even the
   * middleware will eventually dispatch plain object actions using this method.
   *
   * @param {Object} action A plain object representing “what changed”. It is
   * a good idea to keep actions serializable so you can record and replay user
   * sessions, or use the time travelling `redux-devtools`. An action must have
   * a `type` property which may not be `undefined`. It is a good idea to use
   * string constants for action types.
   *
   * @returns {Object} For convenience, the same action object you dispatched.
   *
   * Note that, if you use a custom middleware, it may wrap `dispatch()` to
   * return something else (for example, a Promise you can await).
   */function d(e){if(!/**
 * @param {any} obj The object to inspect.
 * @returns {boolean} True if the argument appears to be a plain object.
 */function(e){if("object"!=typeof e||null===e)return!1;for(var t=e;null!==Object.getPrototypeOf(t);)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t}(e))throw Error(ep(7));if(void 0===e.type)throw Error(ep(8));if(l)throw Error(ep(9));try{l=!0,i=a(i,e)}finally{l=!1}for(var t=o=s,n=0;n<t.length;n++)(0,t[n])();return e}return(// reducer returns their initial state. This effectively populates
// the initial state tree.
d({type:em.INIT}),(r={dispatch:d,subscribe:f,getState:c,replaceReducer:/**
   * Replaces the reducer currently used by the store to calculate the state.
   *
   * You might need this if your app implements code splitting and you want to
   * load some of the reducers dynamically. You might also need this if you
   * implement a hot reloading mechanism for Redux.
   *
   * @param {Function} nextReducer The reducer for the store to use instead.
   * @returns {void}
   */function(e){if("function"!=typeof e)throw Error(ep(10));a=e,// Any reducers that existed in both the new and old rootReducer
// will receive the previous state. This effectively populates
// the new state tree with any relevant data from the old one.
d({type:em.REPLACE})}})[eh]=/**
   * Interoperability point for observable/reactive libraries.
   * @returns {observable} A minimal observable of state changes.
   * For more information, see the observable proposal:
   * https://github.com/tc39/proposal-observable
   */function(){var e;return(e={/**
       * The minimal observable subscription method.
       * @param {Object} observer Any object that can be used as an observer.
       * The observer object should have a `next` method.
       * @returns {subscription} An object with an `unsubscribe` method that can
       * be used to unsubscribe the observable from the store, and prevent further
       * emission of values from the observable.
       */subscribe:function(e){if("object"!=typeof e||null===e)throw Error(ep(11));function t(){e.next&&e.next(c())}return t(),{unsubscribe:f(t)}}})[eh]=function(){return this},e}// When a store is created, an "INIT" action is dispatched so that every
,r)}/**
 * Composes single-argument functions from right to left. The rightmost
 * function can take multiple arguments as it provides the signature for
 * the resulting composite function.
 *
 * @param {...Function} funcs The functions to compose.
 * @returns {Function} A function obtained by composing the argument functions
 * from right to left. For example, compose(f, g, h) is identical to doing
 * (...args) => f(g(h(...args))).
 */function ev(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return 0===t.length?function(e){return e}:1===t.length?t[0]:t.reduce(function(e,t){return function(){return e(t.apply(void 0,arguments))}})}/**
 * Creates a store enhancer that applies middleware to the dispatch method
 * of the Redux store. This is handy for a variety of tasks, such as expressing
 * asynchronous actions in a concise manner, or logging every action payload.
 *
 * See `redux-thunk` package as an example of the Redux middleware.
 *
 * Because middleware is potentially asynchronous, this should be the first
 * store enhancer in the composition chain.
 *
 * Note that each middleware will be given the `dispatch` and `getState` functions
 * as named arguments.
 *
 * @param {...Function} middlewares The middleware chain to be applied.
 * @returns {Function} A store enhancer applying the middleware.
 */function eb(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){return function(){var n=e.apply(void 0,arguments),r=function(){throw Error(ep(15))},a={getState:n.getState,dispatch:function(){return r.apply(void 0,arguments)}},i=t.map(function(e){return e(a)});return r=ev.apply(void 0,i)(n.dispatch),ed(ed({},n),{},{dispatch:r})}}}function ew(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];throw Error("[Immer] minified error nr: "+e+(n.length?" "+n.map(function(e){return"'"+e+"'"}).join(","):"")+". Find the full error at: https://bit.ly/3cXEKWf")}function ek(e){return!!e&&!!e[e7]}function eE(e){var t;return!!e&&(function(e){if(!e||"object"!=typeof e)return!1;var t=Object.getPrototypeOf(e);if(null===t)return!0;var n=Object.hasOwnProperty.call(t,"constructor")&&t.constructor;return n===Object||"function"==typeof n&&Function.toString.call(n)===e9}(e)||Array.isArray(e)||!!e[e5]||!!(null===(t=e.constructor)||void 0===t?void 0:t[e5])||eC(e)||eI(e))}function eS(e,t,n){void 0===n&&(n=!1),0===ex(e)?(n?Object.keys:te)(e).forEach(function(r){n&&"symbol"==typeof r||t(r,e[r],e)}):e.forEach(function(n,r){return t(r,n,e)})}function ex(e){var t=e[e7];return t?t.i>3?t.i-4:t.i:Array.isArray(e)?1:eC(e)?2:eI(e)?3:0}function e_(e,t){return 2===ex(e)?e.has(t):Object.prototype.hasOwnProperty.call(e,t)}function eP(e,t,n){var r=ex(e);2===r?e.set(t,n):3===r?e.add(n):e[t]=n}function eC(e){return e3&&e instanceof Map}function eI(e){return e4&&e instanceof Set}function eO(e){return e.o||e.t}function eN(e){if(Array.isArray(e))return Array.prototype.slice.call(e);var t=tt(e);delete t[e7];for(var n=te(t),r=0;r<n.length;r++){var a=n[r],i=t[a];!1===i.writable&&(i.writable=!0,i.configurable=!0),(i.get||i.set)&&(t[a]={configurable:!0,writable:!0,enumerable:i.enumerable,value:e[a]})}return Object.create(Object.getPrototypeOf(e),t)}function eD(e,t){return void 0===t&&(t=!1),eT(e)||ek(e)||!eE(e)||(ex(e)>1&&(e.set=e.add=e.clear=e.delete=eM),Object.freeze(e),t&&eS(e,function(e,t){return eD(t,!0)},!0)),e}function eM(){ew(2)}function eT(e){return null==e||"object"!=typeof e||Object.isFrozen(e)}function eA(e){var t=tn[e];return t||ew(18,e),t}function eR(e,t){t&&(eA("Patches"),e.u=[],e.s=[],e.v=t)}function eL(e){eB(e),e.p.forEach(eU),e.p=null}function eB(e){e===e1&&(e1=e.l)}function ej(e){return e1={p:[],l:e1,h:e,m:!0,_:0}}function eU(e){var t=e[e7];0===t.i||1===t.i?t.j():t.O=!0}function ez(e,t){t._=t.p.length;var n=t.p[0],r=void 0!==e&&e!==n;return t.h.g||eA("ES5").S(t,e,r),r?(n[e7].P&&(eL(t),ew(4)),eE(e)&&(e=eF(t,e),t.l||eG(t,e)),t.u&&eA("Patches").M(n[e7].t,e,t.u,t.s)):e=eF(t,n,[]),eL(t),t.u&&t.v(t.u,t.s),e!==e8?e:void 0}function eF(e,t,n){if(eT(t))return t;var r=t[e7];if(!r)return eS(t,function(a,i){return e$(e,r,t,a,i,n)},!0),t;if(r.A!==e)return t;if(!r.P)return eG(e,r.t,!0),r.t;if(!r.I){r.I=!0,r.A._--;var a=4===r.i||5===r.i?r.o=eN(r.k):r.o,i=a,o=!1;3===r.i&&(i=new Set(a),a.clear(),o=!0),eS(i,function(t,i){return e$(e,r,a,t,i,n,o)}),eG(e,a,!1),n&&e.u&&eA("Patches").N(r,n,e.u,e.s)}return r.o}function e$(e,t,n,r,a,i,o){if(ek(a)){var s=eF(e,a,i&&t&&3!==t.i&&!e_(t.R,r)?i.concat(r):void 0);if(eP(n,r,s),!ek(s))return;e.m=!1}else o&&n.add(a);if(eE(a)&&!eT(a)){if(!e.h.D&&e._<1)return;eF(e,a),t&&t.A.l||eG(e,a)}}function eG(e,t,n){void 0===n&&(n=!1),!e.l&&e.h.D&&e.m&&eD(t,n)}function eV(e,t){var n=e[e7];return(n?eO(n):e)[t]}function eH(e,t){if(t in e)for(var n=Object.getPrototypeOf(e);n;){var r=Object.getOwnPropertyDescriptor(n,t);if(r)return r;n=Object.getPrototypeOf(n)}}function eq(e){e.P||(e.P=!0,e.l&&eq(e.l))}function eW(e){e.o||(e.o=eN(e.t))}function eK(e,t,n){var r,a,i,o,s,l,u,c=eC(t)?eA("MapSet").F(t,n):eI(t)?eA("MapSet").T(t,n):e.g?(i=a={i:(r=Array.isArray(t))?1:0,A:n?n.A:e1,P:!1,I:!1,R:{},l:n,t:t,k:null,o:null,j:null,C:!1},o=tr,r&&(i=[a],o=ta),l=(s=Proxy.revocable(i,o)).revoke,u=s.proxy,a.k=u,a.j=l,u):eA("ES5").J(t,n);return(n?n.A:e1).p.push(c),c}function eQ(e,t){switch(t){case 2:return new Map(e);case 3:return Array.from(e)}return eN(e)}var eY,eJ,eX,eZ,e0,e1,e2="undefined"!=typeof Symbol&&"symbol"==typeof Symbol("x"),e3="undefined"!=typeof Map,e4="undefined"!=typeof Set,e6="undefined"!=typeof Proxy&&void 0!==Proxy.revocable&&"undefined"!=typeof Reflect,e8=e2?Symbol.for("immer-nothing"):((e0={})["immer-nothing"]=!0,e0),e5=e2?Symbol.for("immer-draftable"):"__$immer_draftable",e7=e2?Symbol.for("immer-state"):"__$immer_state",e9=""+Object.prototype.constructor,te="undefined"!=typeof Reflect&&Reflect.ownKeys?Reflect.ownKeys:void 0!==Object.getOwnPropertySymbols?function(e){return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))}:Object.getOwnPropertyNames,tt=Object.getOwnPropertyDescriptors||function(e){var t={};return te(e).forEach(function(n){t[n]=Object.getOwnPropertyDescriptor(e,n)}),t},tn={},tr={get:function(e,t){if(t===e7)return e;var n,r,a=eO(e);if(!e_(a,t))return(r=eH(a,t))?"value"in r?r.value:null===(n=r.get)||void 0===n?void 0:n.call(e.k):void 0;var i=a[t];return e.I||!eE(i)?i:i===eV(e.t,t)?(eW(e),e.o[t]=eK(e.A.h,i,e)):i},has:function(e,t){return t in eO(e)},ownKeys:function(e){return Reflect.ownKeys(eO(e))},set:function(e,t,n){var r=eH(eO(e),t);if(null==r?void 0:r.set)return r.set.call(e.k,n),!0;if(!e.P){var a=eV(eO(e),t),i=null==a?void 0:a[e7];if(i&&i.t===n)return e.o[t]=n,e.R[t]=!1,!0;if((n===a?0!==n||1/n==1/a:n!=n&&a!=a)&&(void 0!==n||e_(e.t,t)))return!0;eW(e),eq(e)}return e.o[t]===n&&(void 0!==n||t in e.o)||Number.isNaN(n)&&Number.isNaN(e.o[t])||(e.o[t]=n,e.R[t]=!0),!0},deleteProperty:function(e,t){return void 0!==eV(e.t,t)||t in e.t?(e.R[t]=!1,eW(e),eq(e)):delete e.R[t],e.o&&delete e.o[t],!0},getOwnPropertyDescriptor:function(e,t){var n=eO(e),r=Reflect.getOwnPropertyDescriptor(n,t);return r?{writable:!0,configurable:1!==e.i||"length"!==t,enumerable:r.enumerable,value:n[t]}:r},defineProperty:function(){ew(11)},getPrototypeOf:function(e){return Object.getPrototypeOf(e.t)},setPrototypeOf:function(){ew(12)}},ta={};eS(tr,function(e,t){ta[e]=function(){return arguments[0]=arguments[0][0],t.apply(this,arguments)}}),ta.deleteProperty=function(e,t){return ta.set.call(this,e,t,void 0)},ta.set=function(e,t,n){return tr.set.call(this,e[0],t,n,e[0])};var ti=new(function(){function e(e){var t=this;this.g=e6,this.D=!0,this.produce=function(e,n,r){if("function"==typeof e&&"function"!=typeof n){var a,i=n;return n=e,function(e){var r=this;void 0===e&&(e=i);for(var a=arguments.length,o=Array(a>1?a-1:0),s=1;s<a;s++)o[s-1]=arguments[s];return t.produce(e,function(e){var t;return(t=n).call.apply(t,[r,e].concat(o))})}}if("function"!=typeof n&&ew(6),void 0!==r&&"function"!=typeof r&&ew(7),eE(e)){var o=ej(t),s=eK(t,e,void 0),l=!0;try{a=n(s),l=!1}finally{l?eL(o):eB(o)}return"undefined"!=typeof Promise&&a instanceof Promise?a.then(function(e){return eR(o,r),ez(e,o)},function(e){throw eL(o),e}):(eR(o,r),ez(a,o))}if(!e||"object"!=typeof e){if(void 0===(a=n(e))&&(a=e),a===e8&&(a=void 0),t.D&&eD(a,!0),r){var u=[],c=[];eA("Patches").M(e,a,u,c),r(u,c)}return a}ew(21,e)},this.produceWithPatches=function(e,n){if("function"==typeof e)return function(n){for(var r=arguments.length,a=Array(r>1?r-1:0),i=1;i<r;i++)a[i-1]=arguments[i];return t.produceWithPatches(n,function(t){return e.apply(void 0,[t].concat(a))})};var r,a,i=t.produce(e,n,function(e,t){r=e,a=t});return"undefined"!=typeof Promise&&i instanceof Promise?i.then(function(e){return[e,r,a]}):[i,r,a]},"boolean"==typeof(null==e?void 0:e.useProxies)&&this.setUseProxies(e.useProxies),"boolean"==typeof(null==e?void 0:e.autoFreeze)&&this.setAutoFreeze(e.autoFreeze)}var t=e.prototype;return t.createDraft=function(e){eE(e)||ew(8),ek(e)&&(ek(t=e)||ew(22,t),e=function e(t){if(!eE(t))return t;var n,r=t[e7],a=ex(t);if(r){if(!r.P&&(r.i<4||!eA("ES5").K(r)))return r.t;r.I=!0,n=eQ(t,a),r.I=!1}else n=eQ(t,a);return eS(n,function(t,a){var i;r&&(2===ex(i=r.t)?i.get(t):i[t])===a||eP(n,t,e(a))}),3===a?new Set(n):n}(t));var t,n=ej(this),r=eK(this,e,void 0);return r[e7].C=!0,eB(n),r},t.finishDraft=function(e,t){var n=(e&&e[e7]).A;return eR(n,t),ez(void 0,n)},t.setAutoFreeze=function(e){this.D=e},t.setUseProxies=function(e){e&&!e6&&ew(20),this.g=e},t.applyPatches=function(e,t){for(n=t.length-1;n>=0;n--){var n,r=t[n];if(0===r.path.length&&"replace"===r.op){e=r.value;break}}n>-1&&(t=t.slice(n+1));var a=eA("Patches").$;return ek(e)?a(e,t):this.produce(e,function(e){return a(e,t)})},e}()),to=ti.produce;ti.produceWithPatches.bind(ti),ti.setAutoFreeze.bind(ti),ti.setUseProxies.bind(ti),ti.applyPatches.bind(ti),ti.createDraft.bind(ti),ti.finishDraft.bind(ti);// Inlined version of Alea from https://github.com/davidbau/seedrandom.
// Converted to Typescript October 2020.
class ts{constructor(e){let t;let n=(t=4022871197,function(e){let n=e.toString();for(let e=0;e<n.length;e++){let r=.02519603282416938*(t+=n.charCodeAt(e));t=r>>>0,r-=t,r*=t,t=r>>>0,r-=t,t+=4294967296*r}return(t>>>0)*23283064365386963e-26;// 2^-32
});// Apply the seeding algorithm from Baagoe.
this.c=1,this.s0=n(" "),this.s1=n(" "),this.s2=n(" "),this.s0-=n(e),this.s0<0&&(this.s0+=1),this.s1-=n(e),this.s1<0&&(this.s1+=1),this.s2-=n(e),this.s2<0&&(this.s2+=1)}next(){let e=2091639*this.s0+23283064365386963e-26*this.c;// 2^-32
return this.s0=this.s1,this.s1=this.s2,this.s2=e-(this.c=Math.trunc(e))}}function tl(e,t){return t.c=e.c,t.s0=e.s0,t.s1=e.s1,t.s2=e.s2,t}function tu(e,t){let n=new ts(e),r=n.next.bind(n);return t&&tl(t,n),r.state=()=>tl(n,{}),r}/*
 * Copyright 2017 The boardgame.io Authors
 *
 * Use of this source code is governed by a MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 *//**
 * Random
 *
 * Calls that require a pseudorandom number generator.
 * Uses a seed from ctx, and also persists the PRNG
 * state in ctx so that moves can stay pure.
 */class tc{/**
     * constructor
     * @param {object} ctx - The ctx object to initialize from.
     */constructor(e){// If we are on the client, the seed is not present.
// Just use a temporary seed to execute the move without
// crashing it. The move state itself is discarded,
// so the actual value doesn't matter.
this.state=e||{seed:"0"},this.used=!1}/**
     * Generates a new seed from the current date / time.
     */static seed(){return Date.now().toString(36).slice(-10)}isUsed(){return this.used}getState(){return this.state}/**
     * Generate a random number.
     */_random(){this.used=!0;let e=this.state,t=e.prngstate?"":e.seed,n=tu(t,e.prngstate),r=n();return this.state={...e,prngstate:n.state()},r}api(){let e=this._random.bind(this),t={D4:4,D6:6,D8:8,D10:10,D12:12,D20:20},n={};for(let r in t){let a=t[r];n[r]=t=>void 0===t?Math.floor(e()*a)+1:Array.from({length:t}).map(()=>Math.floor(e()*a)+1)}return{/**
             * Similar to Die below, but with fixed spot values.
             * Supports passing a diceCount
             *    if not defined, defaults to 1 and returns the value directly.
             *    if defined, returns an array containing the random dice values.
             *
             * D4: (diceCount) => value
             * D6: (diceCount) => value
             * D8: (diceCount) => value
             * D10: (diceCount) => value
             * D12: (diceCount) => value
             * D20: (diceCount) => value
             */...n,Die:function(t=6,n){return void 0===n?Math.floor(e()*t)+1:Array.from({length:n}).map(()=>Math.floor(e()*t)+1)},/**
             * Generate a random number between 0 and 1.
             */Number:()=>e(),/**
             * Shuffle an array.
             *
             * @param {Array} deck - The array to shuffle. Does not mutate
             *                       the input, but returns the shuffled array.
             */Shuffle:t=>{let n=[...t],r=t.length,a=0,i=Array.from({length:r});for(;r;){let t=Math.trunc(r*e());i[a++]=n[t],n[t]=n[--r]}return i},_private:this}}}/*
 * Copyright 2017 The boardgame.io Authors
 *
 * Use of this source code is governed by a MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 */const tf="MAKE_MOVE",td="GAME_EVENT",tp="REDO",th="RESET",ty="SYNC",tm="UNDO",tg="UPDATE",tv="PATCH",tb="PLUGIN",tw="STRIP_TRANSIENTS",tk=(e,t,n,r)=>({type:tf,payload:{type:e,args:t,playerID:n,credentials:r}}),tE=(e,t,n,r)=>({type:td,payload:{type:e,args:t,playerID:n,credentials:r}}),tS=(e,t,n,r)=>({type:td,payload:{type:e,args:t,playerID:n,credentials:r},automatic:!0}),tx=e=>({type:ty,state:e.state,log:e.log,initialState:e.initialState,clientOnly:!0}),t_=(e,t,n,r)=>({type:tv,prevStateID:e,stateID:t,patch:n,deltalog:r,clientOnly:!0}),tP=(e,t)=>({type:tg,state:e,deltalog:t,clientOnly:!0}),tC=e=>({type:th,state:e,clientOnly:!0}),tI=(e,t)=>({type:tm,payload:{type:null,args:null,playerID:e,credentials:t}}),tO=(e,t)=>({type:tp,payload:{type:null,args:null,playerID:e,credentials:t}}),tN=()=>({type:tw});var tD=/*#__PURE__*/Object.freeze({__proto__:null,makeMove:tk,gameEvent:tE,automaticGameEvent:tS,sync:tx,patch:t_,update:tP,reset:tC,undo:tI,redo:tO,plugin:(e,t,n,r)=>({type:tb,payload:{type:e,args:t,playerID:n,credentials:r}}),stripTransients:tN});/**
 * Moves can return this when they want to indicate
 * that the combination of arguments is illegal and
 * the move ought to be discarded.
 */const tM="INVALID_MOVE";(n=u||(u={})).MOVE="MOVE",n.GAME_ON_END="GAME_ON_END",n.PHASE_ON_BEGIN="PHASE_ON_BEGIN",n.PHASE_ON_END="PHASE_ON_END",n.TURN_ON_BEGIN="TURN_ON_BEGIN",n.TURN_ON_MOVE="TURN_ON_MOVE",n.TURN_ON_END="TURN_ON_END",(r=c||(c={})).CalledOutsideHook="Events must be called from moves or the `onBegin`, `onEnd`, and `onMove` hooks.\nThis error probably means you called an event from other game code, like an `endIf` trigger or one of the `turn.order` methods.",r.EndTurnInOnEnd="`endTurn` is disallowed in `onEnd` hooks — the turn is already ending.",r.MaxTurnEndings="Maximum number of turn endings exceeded for this update.\nThis likely means game code is triggering an infinite loop.",r.PhaseEventInOnEnd="`setPhase` & `endPhase` are disallowed in a phase’s `onEnd` hook — the phase is already ending.\nIf you’re trying to dynamically choose the next phase when a phase ends, use the phase’s `next` trigger.",r.StageEventInOnEnd="`setStage`, `endStage` & `setActivePlayers` are disallowed in `onEnd` hooks.",r.StageEventInPhaseBegin="`setStage`, `endStage` & `setActivePlayers` are disallowed in a phase’s `onBegin` hook.\nUse `setActivePlayers` in a `turn.onBegin` hook or declare stages with `turn.activePlayers` instead.",r.StageEventInTurnBegin="`setStage` & `endStage` are disallowed in `turn.onBegin`.\nUse `setActivePlayers` or declare stages with `turn.activePlayers` instead.";/**
 * Events
 */class tT{constructor(e,t,n){this.flow=e,this.playerID=n,this.dispatch=[],this.initialTurn=t.turn,this.updateTurnContext(t,void 0),// This is an arbitrarily large upper threshold, which could be made
// configurable via a game option if the need arises.
this.maxEndedTurnsPerAction=100*t.numPlayers}api(){let e={_private:this};for(let t of this.flow.eventNames)e[t]=(...e)=>{this.dispatch.push({type:t,args:e,phase:this.currentPhase,turn:this.currentTurn,calledFrom:this.currentMethod,// Used to capture a stack trace in case it is needed later.
error:Error("Events Plugin Error")})};return e}isUsed(){return this.dispatch.length>0}updateTurnContext(e,t){this.currentPhase=e.phase,this.currentTurn=e.turn,this.currentMethod=t}unsetCurrentMethod(){this.currentMethod=void 0}/**
     * Updates ctx with the triggered events.
     * @param {object} state - The state object { G, ctx }.
     */update(e){let t=e,n=({stack:e},n)=>({...t,plugins:{...t.plugins,events:{...t.plugins.events,data:{error:n+"\n"+e}}}});for(let t=0;t<this.dispatch.length;t++){let r=this.dispatch[t],a=r.turn!==e.ctx.turn,i=this.currentTurn-this.initialTurn;if(i>=this.maxEndedTurnsPerAction)return n(r.error,c.MaxTurnEndings);if(void 0===r.calledFrom)return n(r.error,c.CalledOutsideHook);// Stop processing events once the game has finished.
if(e.ctx.gameover)break;switch(r.type){case"endStage":case"setStage":case"setActivePlayers":switch(r.calledFrom){// Disallow all stage events in onEnd and phase.onBegin hooks.
case u.TURN_ON_END:case u.PHASE_ON_END:return n(r.error,c.StageEventInOnEnd);case u.PHASE_ON_BEGIN:return n(r.error,c.StageEventInPhaseBegin);// Disallow setStage & endStage in turn.onBegin hooks.
case u.TURN_ON_BEGIN:if("setActivePlayers"===r.type)break;return n(r.error,c.StageEventInTurnBegin)}// If the turn already ended, don't try to process stage events.
if(a)continue;break;case"endTurn":if(r.calledFrom===u.TURN_ON_END||r.calledFrom===u.PHASE_ON_END)return n(r.error,c.EndTurnInOnEnd);// If the turn already ended some other way,
// don't try to end the turn again.
if(a)continue;break;case"endPhase":case"setPhase":if(r.calledFrom===u.PHASE_ON_END)return n(r.error,c.PhaseEventInOnEnd);// If the phase already ended some other way,
// don't try to end the phase again.
if(r.phase!==e.ctx.phase)continue}let o=tS(r.type,r.args,this.playerID);e=this.flow.processEvent(e,o)}return e}}/*
 * Copyright 2020 The boardgame.io Authors
 *
 * Use of this source code is governed by a MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 */const tA={name:"events",noClient:({api:e})=>e._private.isUsed(),isInvalid:({data:e})=>e.error||!1,// Update the events plugin’s internal turn context each time a move
// or hook is called. This allows events called after turn or phase
// endings to dispatch the current turn and phase correctly.
fnWrap:(e,t)=>(n,...r)=>{let a=n.events;a&&a._private.updateTurnContext(n.ctx,t);let i=e(n,...r);return a&&a._private.unsetCurrentMethod(),i},dangerouslyFlushRawState:({state:e,api:t})=>t._private.update(e),api:({game:e,ctx:t,playerID:n})=>new tT(e.flow,t,n).api()},tR=()=>{},tL=(...e)=>console.error(...e);function tB(e){tR(`INFO: ${e}`)}function tj(e){tL("ERROR:",e)}/*
 * Copyright 2018 The boardgame.io Authors
 *
 * Use of this source code is governed by a MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 *//**
 * List of plugins that are always added.
 */const tU=[{name:"plugin-immer",fnWrap:e=>(t,...n)=>{let r=!1,a=to(t.G,a=>{let i=e({...t,G:a},...n);if(i===tM){r=!0;return}return i});return r?tM:a}},{name:"random",noClient:({api:e})=>e._private.isUsed(),flush:({api:e})=>e._private.getState(),api:({data:e})=>{let t=new tc(e);return t.api()},setup:({game:e})=>{let{seed:t}=e;return void 0===t&&(t=tc.seed()),{seed:t}},playerView:()=>void 0},{name:"log",flush:()=>({}),api:({data:e})=>({setMetadata:t=>{e.metadata=t}}),setup:()=>({})},{name:"plugin-serializable",fnWrap:e=>(t,...n)=>{let r=e(t,...n);return r}}],tz=[...tU,tA],tF=(e,t,n)=>(// TODO(#723): Extend error handling to plugins.
    n.game.plugins.filter(e=>void 0!==e.action).filter(e=>e.name===t.payload.type).forEach(n=>{let r=n.name,a=e.plugins[r]||{data:{}},i=n.action(a.data,t.payload);e={...e,plugins:{...e.plugins,[r]:{...a,data:i}}}}),e),t$=({plugins:e})=>Object.entries(e||{}).reduce((e,[t,{api:n}])=>(e[t]=n,e),{}),tG=(e,t,n)=>[...tU,...n,tA].filter(e=>void 0!==e.fnWrap).reduce((e,{fnWrap:n})=>n(e,t),e),tV=(e,t)=>([...tz,...t.game.plugins].filter(e=>void 0!==e.setup).forEach(n=>{let r=n.name,a=n.setup({G:e.G,ctx:e.ctx,game:t.game});e={...e,plugins:{...e.plugins,[r]:{data:a}}}}),e),tH=(e,t)=>([...tz,...t.game.plugins].filter(e=>void 0!==e.api).forEach(n=>{let r=n.name,a=e.plugins[r]||{data:{}},i=n.api({G:e.G,ctx:e.ctx,data:a.data,game:t.game,playerID:t.playerID});e={...e,plugins:{...e.plugins,[r]:{...a,api:i}}}}),e),tq=(e,t)=>(// We flush the events plugin first, then custom plugins and the core plugins.
    // This means custom plugins cannot use the events API but will be available in event hooks.
    // Note that plugins are flushed in reverse, to allow custom plugins calling each other.
    [...tU,...t.game.plugins,tA].reverse().forEach(n=>{let r=n.name,a=e.plugins[r]||{data:{}};if(n.flush){let r=n.flush({G:e.G,ctx:e.ctx,game:t.game,api:a.api,data:a.data});e={...e,plugins:{...e.plugins,[n.name]:{data:r}}}}else if(n.dangerouslyFlushRawState){e=n.dangerouslyFlushRawState({state:e,game:t.game,api:a.api,data:a.data});// Remove everything other than data.
    let i=e.plugins[r].data;e={...e,plugins:{...e.plugins,[n.name]:{data:i}}}}}),e),tW=(e,t)=>[...tz,...t.game.plugins].filter(e=>void 0!==e.noClient).map(n=>{let r=n.name,a=e.plugins[r];return!!a&&n.noClient({G:e.G,ctx:e.ctx,game:t.game,api:a.api,data:a.data})}).includes(!0),tK=(e,t)=>{let n=[...tz,...t.game.plugins].filter(e=>void 0!==e.isInvalid).map(n=>{let{name:r}=n,a=e.plugins[r],i=n.isInvalid({G:e.G,ctx:e.ctx,game:t.game,data:a&&a.data});return!!i&&{plugin:r,message:i}}).find(e=>e);return n||!1},tQ=(e,t)=>{let n=tq(e,t),r=tK(n,t);if(!r)return[n];let{plugin:a,message:i}=r;return tj(`${a} plugin declared action invalid:
${i}`),[e,r]},tY=({G:e,ctx:t,plugins:n={}},{game:r,playerID:a})=>([...tz,...r.plugins].forEach(({name:i,playerView:o})=>{if(!o)return;let{data:s}=n[i]||{data:{}},l=o({G:e,ctx:t,game:r,data:s,playerID:a});n={...n,[i]:{data:l}}}),n);/**
 * Adjust the given options to use the new minMoves/maxMoves if a legacy moveLimit was given
 * @param options The options object to apply backwards compatibility to
 * @param enforceMinMoves Use moveLimit to set both minMoves and maxMoves
 */function tJ(e,t=!1){e.moveLimit&&(t&&(e.minMoves=e.moveLimit),e.maxMoves=e.moveLimit,delete e.moveLimit)}/*
 * Copyright 2017 The boardgame.io Authors
 *
 * Use of this source code is governed by a MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 */function tX(e,t){let n={},r=[],a=null,i={},o={};if(Array.isArray(t)){// support a simple array of player IDs as active players
let e={};t.forEach(t=>e[t]=t1.NULL),n=e}else{if(// process active players argument object
// stages previously did not enforce minMoves, this behaviour is kept intentionally
tJ(t),t.next&&(a=t.next),t.revert&&(r=[...e._prevActivePlayers,{activePlayers:e.activePlayers,_activePlayersMinMoves:e._activePlayersMinMoves,_activePlayersMaxMoves:e._activePlayersMaxMoves,_activePlayersNumMoves:e._activePlayersNumMoves}]),void 0!==t.currentPlayer&&tZ(n,i,o,e.currentPlayer,t.currentPlayer),void 0!==t.others)for(let r=0;r<e.playOrder.length;r++){let a=e.playOrder[r];a!==e.currentPlayer&&tZ(n,i,o,a,t.others)}if(void 0!==t.all)for(let r=0;r<e.playOrder.length;r++){let a=e.playOrder[r];tZ(n,i,o,a,t.all)}if(t.value)for(let e in t.value)tZ(n,i,o,e,t.value[e]);if(t.minMoves)for(let e in n)void 0===i[e]&&(i[e]=t.minMoves);if(t.maxMoves)for(let e in n)void 0===o[e]&&(o[e]=t.maxMoves)}0===Object.keys(n).length&&(n=null),0===Object.keys(i).length&&(i=null),0===Object.keys(o).length&&(o=null);let s={};for(let e in n)s[e]=0;return{...e,activePlayers:n,_activePlayersMinMoves:i,_activePlayersMaxMoves:o,_activePlayersNumMoves:s,_prevActivePlayers:r,_nextActivePlayers:a}}/**
 * Apply an active player argument to the given player ID
 * @param {Object} activePlayers
 * @param {Object} _activePlayersMinMoves
 * @param {Object} _activePlayersMaxMoves
 * @param {String} playerID The player to apply the parameter to
 * @param {(String|Object)} arg An active player argument
 */function tZ(e,t,n,r,a){("object"!=typeof a||a===t1.NULL)&&(a={stage:a}),void 0!==a.stage&&(// stages previously did not enforce minMoves, this behaviour is kept intentionally
tJ(a),e[r]=a.stage,a.minMoves&&(t[r]=a.minMoves),a.maxMoves&&(n[r]=a.maxMoves))}/**
 * Set of different turn orders possible in a phase.
 * These are meant to be passed to the `turn` setting
 * in the flow objects.
 *
 * Each object defines the first player when the phase / game
 * begins, and also a function `next` to determine who the
 * next player is when the turn ends.
 *
 * The phase ends if next() returns undefined.
 */const t0={/**
     * DEFAULT
     *
     * The default round-robin turn order.
     */DEFAULT:{first:({ctx:e})=>0===e.turn?e.playOrderPos:(e.playOrderPos+1)%e.playOrder.length,next:({ctx:e})=>(e.playOrderPos+1)%e.playOrder.length}},t1={NULL:null};/**
 * Helper to generate the game move reducer. The returned
 * reducer has the following signature:
 *
 * (G, action, ctx) => {}
 *
 * You can roll your own if you like, or use any Redux
 * addon to generate such a reducer.
 *
 * The convention used in this framework is to
 * have action.type contain the name of the move, and
 * action.args contain any additional arguments as an
 * Array.
 */function t2(e){// The Game() function has already been called on this
// config object, so just pass it through.
if(void 0!==e.processMove)return e;if(void 0===e.name&&(e.name="default"),void 0===e.deltaState&&(e.deltaState=!1),void 0===e.disableUndo&&(e.disableUndo=!1),void 0===e.setup&&(e.setup=()=>({})),void 0===e.moves&&(e.moves={}),void 0===e.playerView&&(e.playerView=({G:e})=>e),void 0===e.plugins&&(e.plugins=[]),e.plugins.forEach(e=>{if(void 0===e.name)throw Error("Plugin missing name attribute");if(e.name.includes(" "))throw Error(e.name+": Plugin name must not include spaces")}),e.name.includes(" "))throw Error(e.name+": Game name must not include spaces");let t=/*
 * Copyright 2017 The boardgame.io Authors
 *
 * Use of this source code is governed by a MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 *//**
 * Flow
 *
 * Creates a reducer that updates ctx (analogous to how moves update G).
 */function({moves:e,phases:t,endIf:n,onEnd:r,turn:a,events:i,plugins:o}){void 0===e&&(e={}),void 0===i&&(i={}),void 0===o&&(o=[]),void 0===t&&(t={}),n||(n=()=>void 0),r||(r=({G:e})=>e),a||(a={});let s={...t};""in s&&tj("cannot specify phase with empty name"),s[""]={};let l={},c=new Set,f=null;Object.keys(e).forEach(e=>c.add(e));let d=(e,t)=>{let n=tG(e,t,o);return e=>{let t=t$(e);return n({...t,G:e.G,ctx:e.ctx,playerID:e.playerID})}},p=e=>t=>{let n=t$(t);return e({...n,G:t.G,ctx:t.ctx})},h={onEnd:d(r,u.GAME_ON_END),endIf:p(n)};for(let e in s){let t=s[e];if(!0===t.start&&(f=e),void 0!==t.moves)for(let n of Object.keys(t.moves))l[e+"."+n]=t.moves[n],c.add(n);for(let n in void 0===t.endIf&&(t.endIf=()=>void 0),void 0===t.onBegin&&(t.onBegin=({G:e})=>e),void 0===t.onEnd&&(t.onEnd=({G:e})=>e),void 0===t.turn&&(t.turn=a),void 0===t.turn.order&&(t.turn.order=t0.DEFAULT),void 0===t.turn.onBegin&&(t.turn.onBegin=({G:e})=>e),void 0===t.turn.onEnd&&(t.turn.onEnd=({G:e})=>e),void 0===t.turn.endIf&&(t.turn.endIf=()=>!1),void 0===t.turn.onMove&&(t.turn.onMove=({G:e})=>e),void 0===t.turn.stages&&(t.turn.stages={}),tJ(t.turn,!0),t.turn.stages){let r=t.turn.stages[n],a=r.moves||{};for(let t of Object.keys(a)){let r=e+"."+n+"."+t;l[r]=a[t],c.add(t)}}if(t.wrapped={onBegin:d(t.onBegin,u.PHASE_ON_BEGIN),onEnd:d(t.onEnd,u.PHASE_ON_END),endIf:p(t.endIf)},t.turn.wrapped={onMove:d(t.turn.onMove,u.TURN_ON_MOVE),onBegin:d(t.turn.onBegin,u.TURN_ON_BEGIN),onEnd:d(t.turn.onEnd,u.TURN_ON_END),endIf:p(t.turn.endIf)},"function"!=typeof t.next){let{next:e}=t;t.next=()=>e||null}t.wrapped.next=p(t.next)}function y(e){return e.phase?s[e.phase]:s[""]}function m(e){return e}function g(e,t){let n=new Set,r=new Set;for(let i=0;i<t.length;i++){var a;let{fn:o,arg:s,...l}=t[i];// Detect a loop of EndPhase calls.
// This could potentially even be an infinite loop
// if the endIf condition of each phase blindly
// returns true. The moment we detect a single
// loop, we just bail out of all phases.
if(o===P){r.clear();let t=e.ctx.phase;if(n.has(t)){let t={...e.ctx,phase:null};return{...e,ctx:t}}n.add(t)}// Process event.
let u=[];if(e=o(e,{...l,arg:s,next:u}),o===_)break;// Check if we should end the game.
let c=(a=e,h.endIf(a));if(c){t.push({fn:_,arg:c,turn:e.ctx.turn,phase:e.ctx.phase,automatic:!0});continue}// Check if we should end the phase.
let f=function(e){let t=y(e.ctx);return t.wrapped.endIf(e)}(e);if(f){t.push({fn:P,arg:f,turn:e.ctx.turn,phase:e.ctx.phase,automatic:!0});continue}// Check if we should end the turn.
if([m,S,x].includes(o)){let n=function(e){let t=y(e.ctx),n=e.ctx.numMoves||0;return!!t.turn.maxMoves&&n>=t.turn.maxMoves||t.turn.wrapped.endIf(e)}(e);if(n){t.push({fn:C,arg:n,turn:e.ctx.turn,phase:e.ctx.phase,automatic:!0});continue}}t.push(...u)}return e}///////////
// Start //
///////////
function v(e,{next:t}){return t.push({fn:b}),e}function b(e,{next:t}){let{G:n,ctx:r}=e,a=y(r);return(// Run any phase setup code provided by the user.
n=a.wrapped.onBegin(e),t.push({fn:w}),{...e,G:n,ctx:r})}function w(e,{currentPlayer:t}){let{ctx:n}=e,r=y(n);// Initialize the turn order state.
t?(n={...n,currentPlayer:t},r.turn.activePlayers&&(n=tX(n,r.turn.activePlayers))):// when there is no currentPlayer yet.
n=/**
 * Called at the start of a turn to initialize turn order state.
 *
 * TODO: This is called inside StartTurn, which is called from
 * both UpdateTurn and StartPhase (so it's called at the beginning
 * of a new phase as well as between turns). We should probably
 * split it into two.
 */function(e,t){let{G:n,ctx:r}=e,{numPlayers:a}=r,i=t$(e),o={...i,G:n,ctx:r},s=t.order,l=[...Array.from({length:a})].map((e,t)=>t+"");void 0!==s.playOrder&&(l=s.playOrder(o));let u=s.first(o),c=typeof u;"number"!==c&&tj(`invalid value returned by turn.order.first \u{2014} expected number got ${c} \u{201C}${u}\u{201D}.`);let f=l[u]+"";return tX(r={...r,currentPlayer:f,playOrderPos:u,playOrder:l},t.activePlayers||{})}(e,r.turn);let a=n.turn+1;n={...n,turn:a,numMoves:0,_prevActivePlayers:[]};let i=r.turn.wrapped.onBegin({...e,ctx:n});return{...e,G:i,ctx:n,_undo:[],_redo:[]}}////////////
// Update //
////////////
function k(e,{arg:t,next:n,phase:r}){let a=y({phase:r}),{ctx:i}=e;if(t&&t.next){if(!(t.next in s))return tj("invalid phase: "+t.next),e;i={...i,phase:t.next}}else i={...i,phase:a.wrapped.next(e)||null};return e={...e,ctx:i},// Start the new phase.
n.push({fn:b}),e}function E(e,{arg:t,currentPlayer:n,next:r}){let{G:a,ctx:i}=e,o=y(i),{endPhase:s,ctx:l}=/**
 * Called at the end of each turn to update the turn order state.
 * @param {object} G - The game object G.
 * @param {object} ctx - The game object ctx.
 * @param {object} turn - A turn object for this phase.
 * @param {string} endTurnArg - An optional argument to endTurn that
                                may specify the next player.
 */function(e,t,n,r){let a=n.order,{G:i,ctx:o}=e,s=o.playOrderPos,l=!1;if(r&&!0!==r)"object"!=typeof r&&tj(`invalid argument to endTurn: ${r}`),Object.keys(r).forEach(e=>{switch(e){case"remove":t=o.playOrder[s]+"";break;case"next":s=o.playOrder.indexOf(r.next),t=r.next;break;default:tj(`invalid argument to endTurn: ${e}`)}});else{let n=t$(e),r={...n,G:i,ctx:o},u=a.next(r),c=typeof u;(void 0!==u&&"number"!==c&&tj(`invalid value returned by turn.order.next \u{2014} expected number or undefined got ${c} \u{201C}${u}\u{201D}.`),void 0===u)?l=!0:(s=u,t=o.playOrder[s]+"")}return{endPhase:l,ctx:o={...o,playOrderPos:s,currentPlayer:t}}}(e,n,o.turn,t);return i=l,e={...e,G:a,ctx:i},s?r.push({fn:P,turn:i.turn,phase:i.phase}):r.push({fn:w,currentPlayer:i.currentPlayer}),e}function S(e,{arg:t,playerID:n}){if(("string"==typeof t||t===t1.NULL)&&(t={stage:t}),"object"!=typeof t)return e;tJ(t);let{ctx:r}=e,{activePlayers:a,_activePlayersMinMoves:i,_activePlayersMaxMoves:o,_activePlayersNumMoves:s}=r;return void 0!==t.stage&&(null===a&&(a={}),a[n]=t.stage,s[n]=0,t.minMoves&&(null===i&&(i={}),i[n]=t.minMoves),t.maxMoves&&(null===o&&(o={}),o[n]=t.maxMoves)),r={...r,activePlayers:a,_activePlayersMinMoves:i,_activePlayersMaxMoves:o,_activePlayersNumMoves:s},{...e,ctx:r}}function x(e,{arg:t}){return{...e,ctx:tX(e.ctx,t)}}/////////
// End //
/////////
function _(e,{arg:t,phase:n}){e=P(e,{phase:n}),void 0===t&&(t=!0),e={...e,ctx:{...e.ctx,gameover:t}};// Run game end hook.
let r=h.onEnd(e);return{...e,G:r}}function P(e,{arg:t,next:n,turn:r,automatic:a}){// End the turn first.
e=C(e,{turn:r,force:!0,automatic:!0});let{phase:i,turn:o}=e.ctx;// If we aren't in a phase, there is nothing else to do.
if(n&&n.push({fn:k,arg:t,phase:i}),null===i)return e;// Run any cleanup code for the phase that is about to end.
let s=y(e.ctx),l=s.wrapped.onEnd(e),u={...e.ctx,phase:null},c=tE("endPhase",t),{_stateID:f}=e,d={action:c,_stateID:f,turn:o,phase:i};a&&(d.automatic=!0);let p=[...e.deltalog||[],d];return{...e,G:l,ctx:u,deltalog:p}}function C(e,{arg:t,next:n,turn:r,force:a,automatic:i,playerID:o}){// This is not the turn that EndTurn was originally
// called for. The turn was probably ended some other way.
if(r!==e.ctx.turn)return e;let{currentPlayer:s,numMoves:l,phase:u,turn:c}=e.ctx,f=y(e.ctx);if(!a&&f.turn.minMoves&&(l||0)<f.turn.minMoves)return tB(`cannot end turn before making ${f.turn.minMoves} moves`),e;// Run turn-end triggers.
let d=f.turn.wrapped.onEnd(e);n&&n.push({fn:E,arg:t,currentPlayer:s});// Reset activePlayers.
let p={...e.ctx,activePlayers:null};// Remove player from playerOrder
if(t&&t.remove){o=o||s;let t=p.playOrder.filter(e=>e!=o),r=p.playOrderPos>t.length-1?0:p.playOrderPos;if(p={...p,playOrder:t,playOrderPos:r},0===t.length)return n.push({fn:P,turn:c,phase:u}),e}// Create log entry.
let h=tE("endTurn",t),{_stateID:m}=e,g={action:h,_stateID:m,turn:c,phase:u};i&&(g.automatic=!0);let v=[...e.deltalog||[],g];return{...e,G:d,ctx:p,deltalog:v,_undo:[],_redo:[]}}function I(e,{arg:t,next:n,automatic:r,playerID:a}){a=a||e.ctx.currentPlayer;let{ctx:i,_stateID:o}=e,{activePlayers:s,_activePlayersNumMoves:l,_activePlayersMinMoves:u,_activePlayersMaxMoves:c,phase:f,turn:d}=i,p=null!==s&&a in s,h=y(i);if(!t&&p){let e=h.turn.stages[s[a]];e&&e.next&&(t=e.next)}// If player isn’t in a stage, there is nothing else to do.
if(n&&n.push({fn:S,arg:t,playerID:a}),!p)return e;// Prevent ending the stage if minMoves haven't been reached.
let m=l[a]||0;if(u&&u[a]&&m<u[a])return tB(`cannot end stage before making ${u[a]} moves`),e;// Remove player from activePlayers.
s={...s},delete s[a],u&&(// Remove player from _activePlayersMinMoves.
u={...u},delete u[a]),c&&(// Remove player from _activePlayersMaxMoves.
c={...c},delete c[a]),i=/**
 * Update activePlayers, setting it to previous, next or null values
 * when it becomes empty.
 * @param ctx
 */function(e){let{activePlayers:t,_activePlayersMinMoves:n,_activePlayersMaxMoves:r,_activePlayersNumMoves:a,_prevActivePlayers:i,_nextActivePlayers:o}=e;if(t&&0===Object.keys(t).length){if(o)e=tX(e,o),{activePlayers:t,_activePlayersMinMoves:n,_activePlayersMaxMoves:r,_activePlayersNumMoves:a,_prevActivePlayers:i}=e;else if(i.length>0){let e=i.length-1;({activePlayers:t,_activePlayersMinMoves:n,_activePlayersMaxMoves:r,_activePlayersNumMoves:a}=i[e]),i=i.slice(0,e)}else t=null,n=null,r=null}return{...e,activePlayers:t,_activePlayersMinMoves:n,_activePlayersMaxMoves:r,_activePlayersNumMoves:a,_prevActivePlayers:i}}({...i,activePlayers:s,_activePlayersMinMoves:u,_activePlayersMaxMoves:c});// Create log entry.
let g=tE("endStage",t),v={action:g,_stateID:o,turn:d,phase:f};r&&(v.automatic=!0);let b=[...e.deltalog||[],v];return{...e,ctx:i,deltalog:b}}/**
     * Retrieves the relevant move that can be played by playerID.
     *
     * If ctx.activePlayers is set (i.e. one or more players are in some stage),
     * then it attempts to find the move inside the stages config for
     * that turn. If the stage for a player is '', then the player is
     * allowed to make a move (as determined by the phase config), but
     * isn't restricted to a particular set as defined in the stage config.
     *
     * If not, it then looks for the move inside the phase.
     *
     * If it doesn't find the move there, it looks at the global move definition.
     *
     * @param {object} ctx
     * @param {string} name
     * @param {string} playerID
     */function O(t,n,r){let a=y(t),i=a.turn.stages,{activePlayers:o}=t;if(o&&void 0!==o[r]&&o[r]!==t1.NULL&&void 0!==i[o[r]]&&void 0!==i[o[r]].moves){// Check if moves are defined for the player's stage.
let e=i[o[r]],t=e.moves;if(n in t)return t[n]}else if(a.moves)// Check if moves are defined for the current phase.
{if(n in a.moves)return a.moves[n]}else if(n in e)return e[n];return null}let N={endStage:function(e,t){return g(e,[{fn:I,playerID:t}])},setStage:function(e,t,n){return g(e,[{fn:I,arg:n,playerID:t}])},endTurn:function(e,t,n){return g(e,[{fn:C,turn:e.ctx.turn,phase:e.ctx.phase,arg:n}])},pass:function(e,t,n){return g(e,[{fn:C,turn:e.ctx.turn,phase:e.ctx.phase,force:!0,arg:n}])},endPhase:function(e){return g(e,[{fn:P,phase:e.ctx.phase,turn:e.ctx.turn}])},setPhase:function(e,t,n){return g(e,[{fn:P,phase:e.ctx.phase,turn:e.ctx.turn,arg:{next:n}}])},endGame:function(e,t,n){return g(e,[{fn:_,turn:e.ctx.turn,phase:e.ctx.phase,arg:n}])},setActivePlayers:function(e,t,n){return g(e,[{fn:x,arg:n}])}},D=[];return!1!==i.endTurn&&D.push("endTurn"),!1!==i.pass&&D.push("pass"),!1!==i.endPhase&&D.push("endPhase"),!1!==i.setPhase&&D.push("setPhase"),!1!==i.endGame&&D.push("endGame"),!1!==i.setActivePlayers&&D.push("setActivePlayers"),!1!==i.endStage&&D.push("endStage"),!1!==i.setStage&&D.push("setStage"),{ctx:e=>({numPlayers:e,turn:0,currentPlayer:"0",playOrder:[...Array.from({length:e})].map((e,t)=>t+""),playOrderPos:0,phase:f,activePlayers:null}),init:e=>g(e,[{fn:v}]),isPlayerActive:function(e,t,n){return t.activePlayers?n in t.activePlayers:t.currentPlayer===n},eventHandlers:N,eventNames:Object.keys(N),enabledEventNames:D,moveMap:l,moveNames:[...c.values()],processMove:function(e,t){let{playerID:n,type:r}=t,{currentPlayer:a,activePlayers:i,_activePlayersMaxMoves:o}=e.ctx,s=O(e.ctx,r,n),l=!s||"function"==typeof s||!0!==s.noLimit,{numMoves:u,_activePlayersNumMoves:c}=e.ctx;l&&(n===a&&u++,i&&c[n]++),e={...e,ctx:{...e.ctx,numMoves:u,_activePlayersNumMoves:c}},o&&c[n]>=o[n]&&(e=I(e,{playerID:n,automatic:!0}));let f=y(e.ctx),d=f.turn.wrapped.onMove({...e,playerID:n});e={...e,G:d};let p=[{fn:m}];return g(e,p)},processEvent:function(e,t){let{type:n,playerID:r,args:a}=t.payload;return"function"!=typeof N[n]?e:N[n](e,r,...Array.isArray(a)?a:[a])},getMove:O}}(e);return{...e,flow:t,moveNames:t.moveNames,pluginNames:e.plugins.map(e=>e.name),processMove:(n,r)=>{let a=t.getMove(n.ctx,r.type,r.playerID);if(t3(a)&&(a=a.move),a instanceof Function){let t=tG(a,u.MOVE,e.plugins),i=[];void 0!==r.args&&(i=Array.isArray(r.args)?r.args:[r.args]);let o={...t$(n),G:n.G,ctx:n.ctx,playerID:r.playerID};return t(o,...i)}return tj(`invalid move object: ${r.type}`),n.G}}}function t3(e){return e instanceof Object&&void 0!==e.move}t1.NULL,t1.NULL,t1.NULL,t1.NULL,// The action’s credentials were missing or invalid
(a=f||(f={})).UnauthorizedAction="update/unauthorized_action",// The action’s matchID was not found
a.MatchNotFound="update/match_not_found",// Could not apply Patch operation (rfc6902).
a.PatchFailed="update/patch_failed",// The action contained a stale state ID
(i=d||(d={})).StaleStateId="action/stale_state_id",// The requested move is unknown or not currently available
i.UnavailableMove="action/unavailable_move",// The move declared it was invalid (INVALID_MOVE constant)
i.InvalidMove="action/invalid_move",// The player making the action is not currently active
i.InactivePlayer="action/inactive_player",// The game has finished
i.GameOver="action/gameover",// The requested action is disabled (e.g. undo/redo, events)
i.ActionDisabled="action/action_disabled",// The requested action is not currently possible
i.ActionInvalid="action/action_invalid",// The requested action was declared invalid by a plugin
i.PluginActionInvalid="action/plugin_invalid";/*
 * Copyright 2017 The boardgame.io Authors
 *
 * Use of this source code is governed by a MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 *//**
 * Check if the payload for the passed action contains a playerID.
 */const t4=e=>null!==e.payload.playerID&&void 0!==e.payload.playerID,t6=(e,t,n)=>void 0===n.undoable||(n.undoable instanceof Function?n.undoable({G:e,ctx:t}):n.undoable);/**
 * Update the undo and redo stacks for a move or event.
 */function t8(e,t){if(t.game.disableUndo)return e;let n={G:e.G,ctx:e.ctx,plugins:e.plugins,playerID:t.action.payload.playerID||e.ctx.currentPlayer};return"MAKE_MOVE"===t.action.type&&(n.moveType=t.action.payload.type),{...e,_undo:[...e._undo,n],// Always reset redo stack when making a move or event
_redo:[]}}/**
 * Process state, adding the initial deltalog for this action.
 */function t5(e,t,n){// Create a log entry for this action.
let r={action:t,_stateID:e._stateID,turn:e.ctx.turn,phase:e.ctx.phase},a=e.plugins.log.data.metadata;return void 0!==a&&(r.metadata=a),"object"==typeof n&&!0===n.redact?r.redact=!0:"object"==typeof n&&n.redact instanceof Function&&(r.redact=n.redact({G:e.G,ctx:e.ctx})),{...e,deltalog:[r]}}/**
 * Update plugin state after move/event & check if plugins consider the action to be valid.
 * @param state Current version of state in the reducer.
 * @param oldState State to revert to in case of error.
 * @param pluginOpts Plugin configuration options.
 * @returns Tuple of the new state updated after flushing plugins and the old
 * state augmented with an error if a plugin declared the action invalid.
 */function t7(e,t,n){let[r,a]=tQ(e,n);return a?[r,ne(t,d.PluginActionInvalid,a)]:[r]}/**
 * ExtractTransientsFromState
 *
 * Split out transients from the a TransientState
 */function t9(e){if(!e)// field should be undefined if not present to be consistent with the
// code path below.
return[null,void 0];let{transients:t,...n}=e;return[n,t]}/**
 * WithError
 *
 * Augment a State instance with transient error information.
 */function ne(e,t,n){return{...e,transients:{error:{type:t,payload:n}}}}/**
 * Middleware for processing TransientState associated with the reducer
 * returned by CreateGameReducer.
 * This should pretty much be used everywhere you want realistic state
 * transitions and error handling.
 */const nt=e=>t=>n=>{let r=t(n);if(n.type===tw)return r;{let[,t]=t9(e.getState());return void 0!==t?(e.dispatch(tN()),{...r,transients:t}):r}};/**
 * CreateGameReducer
 *
 * Creates the main game state reducer.
 */function nn({game:e,isClient:t}){/**
     * GameReducer
     *
     * Redux reducer that maintains the overall game state.
     * @param {object} state - The state before the action.
     * @param {object} action - A Redux action.
     */return e=t2(e),(n=null,r)=>{let[a/*, transients */]=t9(n);switch(r.type){case tw:// This action indicates that transient metadata in the state has been
// consumed and should now be stripped from the state..
return a;case td:{let n;// Process game events only on the server.
// These events like `endTurn` typically
// contain code that may rely on secret state
// and cannot be computed on the client.
if(a={...a,deltalog:[]},t)return a;// Disallow events once the game is over.
if(void 0!==a.ctx.gameover)return tj("cannot call event after game end"),ne(a,d.GameOver);// Ignore the event if the player isn't active.
if(t4(r)&&!e.flow.isPlayerActive(a.G,a.ctx,r.payload.playerID))return tj(`disallowed event: ${r.payload.type}`),ne(a,d.InactivePlayer);// Execute plugins.
a=tH(a,{game:e,isClient:!1,playerID:r.payload.playerID});// Process event.
let i=e.flow.processEvent(a,r);if([i,n]=t7(i,a,{game:e,isClient:!1}),n)return n;return{...// Update undo / redo state.
i=t8(i,{game:e,action:r}),_stateID:a._stateID+1}}case tf:{let n;let i=a={...a,deltalog:[]},o=e.flow.getMove(a.ctx,r.payload.type,r.payload.playerID||a.ctx.currentPlayer);if(null===o)return tj(`disallowed move: ${r.payload.type}`),ne(a,d.UnavailableMove);// Don't run move on client if move says so.
if(t&&!1===o.client)return a;// Disallow moves once the game is over.
if(void 0!==a.ctx.gameover)return tj("cannot make move after game end"),ne(a,d.GameOver);// Ignore the move if the player isn't active.
if(t4(r)&&!e.flow.isPlayerActive(a.G,a.ctx,r.payload.playerID))return tj(`disallowed move: ${r.payload.type}`),ne(a,d.InactivePlayer);// Execute plugins.
a=tH(a,{game:e,isClient:t,playerID:r.payload.playerID});// Process the move.
let s=e.processMove(a,r.payload);// The game declared the move as invalid.
if(s===tM)// TODO(#723): Marshal a nice error payload with the processed move.
return tj(`invalid move: ${r.payload.type} args: ${r.payload.args}`),ne(a,d.InvalidMove);let l={...a,G:s};// Some plugin indicated that it is not suitable to be
// materialized on the client (and must wait for the server
// response instead).
if(t&&tW(l,{game:e}))return a;// If we're on the client, just process the move
// and no triggers in multiplayer mode.
// These will be processed on the server, which
// will send back a state update.
if(a=l,t){let t;if([a,t]=t7(a,i,{game:e,isClient:!0}),t)return t;return{...a,_stateID:a._stateID+1}}if(// On the server, construct the deltalog.
a=t5(a,r,o),// Allow the flow reducer to process any triggers that happen after moves.
a=e.flow.processMove(a,r.payload),[a,n]=t7(a,i,{game:e}),n)return n;return{...// Update undo / redo state.
a=t8(a,{game:e,action:r}),_stateID:a._stateID+1}}case th:case tg:case ty:return r.state;case tm:{if(a={...a,deltalog:[]},e.disableUndo)return tj("Undo is not enabled"),ne(a,d.ActionDisabled);let{G:t,ctx:n,_undo:i,_redo:o,_stateID:s}=a;if(i.length<2)return tj("No moves to undo"),ne(a,d.ActionInvalid);let l=i[i.length-1],u=i[i.length-2];// Only allow players to undo their own moves.
if(t4(r)&&r.payload.playerID!==l.playerID)return tj("Cannot undo other players' moves"),ne(a,d.ActionInvalid);// If undoing a move, check it is undoable.
if(l.moveType){let r=e.flow.getMove(u.ctx,l.moveType,l.playerID);if(!t6(t,n,r))return tj("Move cannot be undone"),ne(a,d.ActionInvalid)}return{...a=t5(a,r),G:u.G,ctx:u.ctx,plugins:u.plugins,_stateID:s+1,_undo:i.slice(0,-1),_redo:[l,...o]}}case tp:{if(a={...a,deltalog:[]},e.disableUndo)return tj("Redo is not enabled"),ne(a,d.ActionDisabled);let{_undo:t,_redo:n,_stateID:i}=a;if(0===n.length)return tj("No moves to redo"),ne(a,d.ActionInvalid);let o=n[0];// Only allow players to redo their own undos.
if(t4(r)&&r.payload.playerID!==o.playerID)return tj("Cannot redo other players' moves"),ne(a,d.ActionInvalid);return{...a=t5(a,r),G:o.G,ctx:o.ctx,plugins:o.plugins,_stateID:i+1,_undo:[...t,o],_redo:n.slice(1)}}case tb:// TODO(#723): Expose error semantics to plugin processing.
return tF(a,r,{game:e});case tv:{let e=a,t=JSON.parse(JSON.stringify(e)),n=(0,B.applyPatch)(t,r.patch),i=n.some(e=>null!==e);if(i)return tj(`Patch ${JSON.stringify(r.patch)} apply failed`),ne(e,f.PatchFailed,n);return t}default:return a}}}/*
 * Copyright 2020 The boardgame.io Authors
 *
 * Use of this source code is governed by a MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 *//**
 * Creates the initial game state.
 */function nr({game:e,numPlayers:t,setupData:n}){e=t2(e),t||(t=2);let r=e.flow.ctx(t),a={// User managed state.
G:{},ctx:r,// Plugin related state.
plugins:{}};a=tH(// Run plugins over initial state.
a=tV(a,{game:e}),{game:e,playerID:void 0});let i=t$(a);a.G=e.setup({...i,ctx:a.ctx},n);let o={...a,// List of {G, ctx} pairs that can be undone.
_undo:[],// List of {G, ctx} pairs that can be redone.
_redo:[],// A monotonically non-decreasing ID to ensure that
// state updates are only allowed from clients that
// are at the same version that the server.
_stateID:0};return o=e.flow.init(o),[o]=tQ(o,{game:e}),e.disableUndo||(o._undo=[{G:o.G,ctx:o.ctx,plugins:o.plugins}]),o}/*
 * Copyright 2017 The boardgame.io Authors
 *
 * Use of this source code is governed by a MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 */class na{constructor({transportDataCallback:e,gameName:t,playerID:n,matchID:r,credentials:a,numPlayers:i}){/** Callback to let the client know when the connection status has changed. */this.connectionStatusCallback=()=>{},this.isConnected=!1,this.transportDataCallback=e,this.gameName=t||"default",this.playerID=n||null,this.matchID=r||"default",this.credentials=a,this.numPlayers=i||2}/** Subscribe to connection state changes. */subscribeToConnectionStatus(e){this.connectionStatusCallback=e}/** Transport implementations should call this when they connect/disconnect. */setConnectionStatus(e){this.isConnected=e,this.connectionStatusCallback()}/** Transport implementations should call this when they receive data from a master. */notifyClient(e){this.transportDataCallback(e)}}/**
 * This class doesn’t do anything, but simplifies the client class by providing
 * dummy functions to call, so we don’t need to mock them in the client.
 */class ni extends na{connect(){}disconnect(){}sendAction(){}sendChatMessage(){}requestSync(){}updateCredentials(){}updateMatchID(){}updatePlayerID(){}}const no=e=>new ni(e),ns=new /**
 * Class to manage boardgame.io clients and limit debug panel rendering.
 */class{constructor(){this.debugPanel=null,this.currentClient=null,this.clients=new Map,this.subscribers=new Map}/**
     * Register a client with the client manager.
     */register(e){// Add client to clients map.
this.clients.set(e,e),// Mount debug for this client (no-op if another debug is already mounted).
this.mountDebug(e),this.notifySubscribers()}/**
     * Unregister a client from the client manager.
     */unregister(e){if(// Remove client from clients map.
this.clients.delete(e),this.currentClient===e)// Mount debug panel for next available client.
for(let[e]of(// If the removed client owned the debug panel, unmount it.
this.unmountDebug(),this.clients)){if(this.debugPanel)break;this.mountDebug(e)}this.notifySubscribers()}/**
     * Subscribe to the client manager state.
     * Calls the passed callback each time the current client changes or a client
     * registers/unregisters.
     * Returns a function to unsubscribe from the state updates.
     */subscribe(e){let t=Symbol();return this.subscribers.set(t,e),e(this.getState()),()=>{this.subscribers.delete(t)}}/**
     * Switch to a client with a matching playerID.
     */switchPlayerID(e){// For multiplayer clients, try switching control to a different client
// that is using the same transport layer.
if(this.currentClient.multiplayer){for(let[t]of this.clients)if(t.playerID===e&&!1!==t.debugOpt&&t.multiplayer===this.currentClient.multiplayer){this.switchToClient(t);return}}// If no client matches, update the playerID for the current client.
this.currentClient.updatePlayerID(e),this.notifySubscribers()}/**
     * Set the passed client as the active client for debugging.
     */switchToClient(e){e!==this.currentClient&&(this.unmountDebug(),this.mountDebug(e),this.notifySubscribers())}/**
     * Notify all subscribers of changes to the client manager state.
     */notifySubscribers(){let e=this.getState();this.subscribers.forEach(t=>{t(e)})}/**
     * Get the client manager state.
     */getState(){return{client:this.currentClient,debuggableClients:this.getDebuggableClients()}}/**
     * Get an array of the registered clients that haven’t disabled the debug panel.
     */getDebuggableClients(){return[...this.clients.values()].filter(e=>!1!==e.debugOpt)}/**
     * Mount the debug panel using the passed client.
     */mountDebug(e){let t;if(!1===e.debugOpt||null!==this.debugPanel||"undefined"==typeof document)return;let n=document.body;e.debugOpt&&!0!==e.debugOpt&&(t=e.debugOpt.impl||t,n=e.debugOpt.target||n),t&&(this.currentClient=e,this.debugPanel=new t({target:n,props:{clientManager:this}}))}/**
     * Unmount the debug panel.
     */unmountDebug(){this.debugPanel.$destroy(),this.debugPanel=null,this.currentClient=null}};/**
 * Standardise the passed playerID, using currentPlayer if appropriate.
 */function nl(e,t,n){// In singleplayer mode, if the client does not have a playerID
// associated with it, we attach the currentPlayer as playerID.
if(!n&&null==e){let n=t.getState();e=n.ctx.currentPlayer}return e}/**
 * createDispatchers
 *
 * Create action dispatcher wrappers with bound playerID and credentials
 */function nu(e,t,n,r,a,i){let o={};for(let s of t)o[s]=(...t)=>{let o=tD[e](s,t,nl(r,n,i),a);n.dispatch(o)};return o}// Creates a set of dispatchers to make moves.
const nc=nu.bind(null,"makeMove"),nf=nu.bind(null,"gameEvent"),nd=nu.bind(null,"plugin");/**
 * Implementation of Client (see below).
 */class np{constructor({game:e,debug:t,numPlayers:n,multiplayer:r,matchID:a,playerID:i,credentials:o,enhancer:s}){this.game=t2(e),this.playerID=i,this.matchID=a||"default",this.credentials=o,this.multiplayer=r,this.debugOpt=t,this.manager=ns,this.gameStateOverride=null,this.subscribers={},this._running=!1,this.reducer=nn({game:this.game,isClient:void 0!==r}),this.initialState=null,r||(this.initialState=nr({game:this.game,numPlayers:n})),this.reset=()=>{this.store.dispatch(tC(this.initialState))},this.undo=()=>{let e=tI(nl(this.playerID,this.store,this.multiplayer),this.credentials);this.store.dispatch(e)},this.redo=()=>{let e=tO(nl(this.playerID,this.store,this.multiplayer),this.credentials);this.store.dispatch(e)},this.log=[];let l=eb(nt,()=>e=>t=>{let n=e(t);return this.notifySubscribers(),n},e=>t=>n=>{let r=e.getState(),a=t(n);return"clientOnly"in n||n.type===tw||this.transport.sendAction(r,n),a},e=>t=>n=>{let r=t(n),a=e.getState();switch(n.type){case tf:case td:case tm:case tp:{let e=a.deltalog;this.log=[...this.log,...e];break}case th:this.log=[];break;case tv:case tg:{let e=-1;this.log.length>0&&(e=this.log[this.log.length-1]._stateID);let t=n.deltalog||[];// Filter out actions that are already present
        // in the current log. This may occur when the
        // client adds an entry to the log followed by
        // the update from the master here.
        t=t.filter(t=>t._stateID>e),this.log=[...this.log,...t];break}case ty:this.initialState=n.initialState,this.log=n.log||[]}return r});s=void 0!==s?ev(l,s):l,this.store=eg(this.reducer,this.initialState,s),r||(r=no),this.transport=r({transportDataCallback:e=>this.receiveTransportData(e),gameKey:e,game:this.game,matchID:a,playerID:i,credentials:o,gameName:this.game.name,numPlayers:n}),this.createDispatchers(),this.chatMessages=[],this.sendChatMessage=e=>{this.transport.sendChatMessage(this.matchID,{id:A(7),sender:this.playerID,payload:e})}}/** Handle incoming match data from a multiplayer transport. */receiveMatchData(e){this.matchData=e,this.notifySubscribers()}/** Handle an incoming chat message from a multiplayer transport. */receiveChatMessage(e){this.chatMessages=[...this.chatMessages,e],this.notifySubscribers()}/** Handle all incoming updates from a multiplayer transport. */receiveTransportData(e){let[t]=e.args;if(t===this.matchID)switch(e.type){case"sync":{let[,t]=e.args,n=tx(t);this.receiveMatchData(t.filteredMetadata),this.store.dispatch(n);break}case"update":{let[,t,n]=e.args,r=this.store.getState();if(t._stateID>=r._stateID){let e=tP(t,n);this.store.dispatch(e)}break}case"patch":{let[,t,n,r,a]=e.args,i=this.store.getState()._stateID;if(t!==i)break;let o=t_(t,n,r,a);this.store.dispatch(o),this.store.getState()._stateID===i&&this.transport.requestSync();break}case"matchData":{let[,t]=e.args;this.receiveMatchData(t);break}case"chat":{let[,t]=e.args;this.receiveChatMessage(t)}}}notifySubscribers(){Object.values(this.subscribers).forEach(e=>e(this.getState()))}overrideGameState(e){this.gameStateOverride=e,this.notifySubscribers()}start(){this.transport.connect(),this._running=!0,this.manager.register(this)}stop(){this.transport.disconnect(),this._running=!1,this.manager.unregister(this)}subscribe(e){let t=Object.keys(this.subscribers).length;// Return a handle that allows the caller to unsubscribe.
return this.subscribers[t]=e,this.transport.subscribeToConnectionStatus(()=>this.notifySubscribers()),(this._running||!this.multiplayer)&&e(this.getState()),()=>{delete this.subscribers[t]}}getInitialState(){return this.initialState}getState(){let e=this.store.getState();// This is the state before a sync with the game master.
if(null!==this.gameStateOverride&&(e=this.gameStateOverride),null===e)return e;// isActive.
let t=!0,n=this.game.flow.isPlayerActive(e.G,e.ctx,this.playerID);// Combine into return value.
return this.multiplayer&&!n&&(t=!1),this.multiplayer||null===this.playerID||void 0===this.playerID||n||(t=!1),void 0!==e.ctx.gameover&&(t=!1),this.multiplayer||(e={...e,G:this.game.playerView({G:e.G,ctx:e.ctx,playerID:this.playerID}),plugins:tY(e,this)}),{...e,log:this.log,isActive:t,isConnected:this.transport.isConnected}}createDispatchers(){this.moves=nc(this.game.moveNames,this.store,this.playerID,this.credentials,this.multiplayer),this.events=nf(this.game.flow.enabledEventNames,this.store,this.playerID,this.credentials,this.multiplayer),this.plugins=nd(this.game.pluginNames,this.store,this.playerID,this.credentials,this.multiplayer)}updatePlayerID(e){this.playerID=e,this.createDispatchers(),this.transport.updatePlayerID(e),this.notifySubscribers()}updateMatchID(e){this.matchID=e,this.createDispatchers(),this.transport.updateMatchID(e),this.notifySubscribers()}updateCredentials(e){this.credentials=e,this.createDispatchers(),this.transport.updateCredentials(e),this.notifySubscribers()}}/*! (c) 2020 Andrea Giammarchi */const{parse:nh,stringify:ny}=JSON,{keys:nm}=Object;var ng={},nv=ng={};function nb(){throw Error("setTimeout has not been defined")}function nw(){throw Error("clearTimeout has not been defined")}function nk(e){if(p===setTimeout)return setTimeout(e,0);// if setTimeout wasn't available but was latter defined
if((p===nb||!p)&&setTimeout)return p=setTimeout,setTimeout(e,0);try{// when when somebody has screwed with setTimeout but no I.E. maddness
return p(e,0)}catch(t){try{// When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
return p.call(null,e,0)}catch(t){// same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
return p.call(this,e,0)}}}!function(){try{p="function"==typeof setTimeout?setTimeout:nb}catch(e){p=nb}try{h="function"==typeof clearTimeout?clearTimeout:nw}catch(e){h=nw}}();var nE=[],nS=!1,nx=-1;function n_(){nS&&y&&(nS=!1,y.length?nE=y.concat(nE):nx=-1,nE.length&&nP())}function nP(){if(!nS){var e=nk(n_);nS=!0;for(var t=nE.length;t;){for(y=nE,nE=[];++nx<t;)y&&y[nx].run();nx=-1,t=nE.length}y=null,nS=!1,function(e){if(h===clearTimeout)return clearTimeout(e);// if clearTimeout wasn't available but was latter defined
if((h===nw||!h)&&clearTimeout)return h=clearTimeout,clearTimeout(e);try{// when when somebody has screwed with setTimeout but no I.E. maddness
h(e)}catch(t){try{// When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
return h.call(null,e)}catch(t){// same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
// Some versions of I.E. have different rules for clearTimeout vs setTimeout
return h.call(this,e)}}}(e)}}// v8 likes predictible objects
function nC(e,t){this.fun=e,this.array=t}function nI(){}nv.nextTick=function(e){var t=Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];nE.push(new nC(e,t)),1!==nE.length||nS||nk(nP)},nC.prototype.run=function(){this.fun.apply(null,this.array)},nv.title="browser",nv.browser=!0,nv.env={},nv.argv=[],nv.version="",nv.versions={},nv.on=nI,nv.addListener=nI,nv.once=nI,nv.off=nI,nv.removeListener=nI,nv.removeAllListeners=nI,nv.emit=nI,nv.prependListener=nI,nv.prependOnceListener=nI,nv.listeners=function(e){return[]},nv.binding=function(e){throw Error("process.binding is not supported")},nv.cwd=function(){return"/"},nv.chdir=function(e){throw Error("process.chdir is not supported")},nv.umask=function(){return 0},function(e,t){if(!e.setImmediate){var n,r,a,i,o,s=1,l={},u=!1,c=e.document,f=Object.getPrototypeOf&&Object.getPrototypeOf(e);// Spec says greater than zero
f=f&&f.setTimeout?f:e,"[object process]"===({}).toString.call(e.process)?o=function(e){ng.nextTick(function(){p(e)})}:function(){// The test against `importScripts` prevents this implementation from being installed inside a web worker,
// where `global.postMessage` means something completely different and can't be used for this purpose.
if(e.postMessage&&!e.importScripts){var t=!0,n=e.onmessage;return e.onmessage=function(){t=!1},e.postMessage("","*"),e.onmessage=n,t}}()?(n="setImmediate$"+Math.random()+"$",r=function(t){t.source===e&&"string"==typeof t.data&&0===t.data.indexOf(n)&&p(+t.data.slice(n.length))},e.addEventListener?e.addEventListener("message",r,!1):e.attachEvent("onmessage",r),o=function(t){e.postMessage(n+t,"*")}):e.MessageChannel?((a=new MessageChannel).port1.onmessage=function(e){p(e.data)},o=function(e){a.port2.postMessage(e)}):c&&"onreadystatechange"in c.createElement("script")?(i=c.documentElement,o=function(e){// Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
// into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
var t=c.createElement("script");t.onreadystatechange=function(){p(e),t.onreadystatechange=null,i.removeChild(t),t=null},i.appendChild(t)}):o=function(e){setTimeout(p,0,e)},f.setImmediate=function(e){"function"!=typeof e&&(e=Function(""+e));for(var t=Array(arguments.length-1),n=0;n<t.length;n++)t[n]=arguments[n+1];// Copy function arguments
var r={callback:e,args:t};return l[s]=r,o(s),s++},f.clearImmediate=d}function d(e){delete l[e]}function p(e){// From the spec: "Wait until any invocations of this algorithm started before this one have completed."
// So if we're currently running a task, we'll need to delay this invocation.
if(u)// "too much recursion" error.
setTimeout(p,0,e);else{var t=l[e];if(t){u=!0;try{!function(e){var t=e.callback,n=e.args;switch(n.length){case 0:t();break;case 1:t(n[0]);break;case 2:t(n[0],n[1]);break;case 3:t(n[0],n[1],n[2]);break;default:t.apply(void 0,n)}}(t)}finally{d(e),u=!1}}}}}("undefined"==typeof self?void 0===_?{}:_:self);/*
 * Copyright 2018 The boardgame.io Authors
 *
 * Use of this source code is governed by a MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 *//**
 * Base class that bots can extend.
 */class nO{constructor({enumerate:e,seed:t}){this.enumerateFn=e,this.seed=t,this.iterationCounter=0,this._opts={}}addOpt({key:e,range:t,initial:n}){this._opts[e]={range:t,value:n}}getOpt(e){return this._opts[e].value}setOpt(e,t){e in this._opts&&(this._opts[e].value=t)}opts(){return this._opts}enumerate(e,t,n){let r=this.enumerateFn(e,t,n);return r.map(e=>"payload"in e?e:"move"in e?tk(e.move,e.args,n):"event"in e?tE(e.event,e.args,n):void 0)}random(e){let t;if(void 0!==this.seed){let e=this.prngstate?"":this.seed,n=tu(e,this.prngstate);t=n(),this.prngstate=n.state()}else t=Math.random();if(e){if(!Array.isArray(e))return Math.floor(t*e);{let n=Math.floor(t*e.length);return e[n]}}return t}}/**
 * Bot that uses Monte-Carlo Tree Search to find promising moves.
 */class nN extends nO{constructor({enumerate:e,seed:t,objectives:n,game:r,iterations:a,playoutDepth:i,iterationCallback:o}){super({enumerate:e,seed:t}),void 0===n&&(n=()=>({})),this.objectives=n,this.iterationCallback=o||(()=>{}),this.reducer=nn({game:r}),this.iterations=a,this.playoutDepth=i,this.addOpt({key:"async",initial:!1}),this.addOpt({key:"iterations",initial:"number"==typeof a?a:1e3,range:{min:1,max:2e3}}),this.addOpt({key:"playoutDepth",initial:"number"==typeof i?i:50,range:{min:1,max:100}})}createNode({state:e,parentAction:t,parent:n,playerID:r}){let{G:a,ctx:i}=e,o=[],s=[];if(void 0!==r)o=this.enumerate(a,i,r),s=this.objectives(a,i,r);else if(i.activePlayers)for(let e in i.activePlayers)o.push(...this.enumerate(a,i,e)),s.push(this.objectives(a,i,e));else o=this.enumerate(a,i,i.currentPlayer),s=this.objectives(a,i,i.currentPlayer);return{state:e,parent:n,parentAction:t,actions:o,objectives:s,children:[],visits:0,value:0}}select(e){// This node has unvisited children.
if(e.actions.length>0||0===e.children.length)return e;let t=null,n=0;for(let r of e.children){let a=r.visits+Number.EPSILON,i=r.value/a+Math.sqrt(2*Math.log(e.visits)/a);(null==t||i>n)&&(n=i,t=r)}return this.select(t)}expand(e){let t=e.actions;if(0===t.length||void 0!==e.state.ctx.gameover)return e;let n=this.random(t.length),r=t[n];e.actions.splice(n,1);let a=this.reducer(e.state,r),i=this.createNode({state:a,parentAction:r,parent:e});return e.children.push(i),i}playout({state:e}){let t=this.getOpt("playoutDepth");"function"==typeof this.playoutDepth&&(t=this.playoutDepth(e.G,e.ctx));for(let n=0;n<t&&void 0===e.ctx.gameover;n++){let{G:t,ctx:n}=e,r=n.currentPlayer;n.activePlayers&&(r=Object.keys(n.activePlayers)[0]);let a=this.enumerate(t,n,r),i=this.objectives(t,n,r),o=Object.keys(i).reduce((e,r)=>{let a=i[r];return a.checker(t,n)?e+a.weight:e},0);// If so, stop and return the score.
if(o>0)return{score:o};if(!a||0===a.length)return;let s=this.random(a.length),l=this.reducer(e,a[s]);e=l}return e.ctx.gameover}backpropagate(e,t={}){e.visits++,void 0!==t.score&&(e.value+=t.score),!0===t.draw&&(e.value+=.5),e.parentAction&&t.winner===e.parentAction.payload.playerID&&e.value++,e.parent&&this.backpropagate(e.parent,t)}play(e,t){let n=this.createNode({state:e,playerID:t}),r=this.getOpt("iterations");"function"==typeof this.iterations&&(r=this.iterations(e.G,e.ctx));let a=()=>{let e=null;for(let t of n.children)(null==e||t.visits>e.visits)&&(e=t);let t=e&&e.parentAction;return{action:t,metadata:n}};return new Promise(e=>{let t=()=>{for(let e=0;e<25&&this.iterationCounter<r;e++){let e=this.select(n),t=this.expand(e),r=this.playout(t);this.backpropagate(t,r),this.iterationCounter++}this.iterationCallback({iterationCounter:this.iterationCounter,numIterations:r,metadata:n})};if(this.iterationCounter=0,this.getOpt("async")){let n=()=>{this.iterationCounter<r?(t(),setImmediate(n)):e(a())};n()}else{for(;this.iterationCounter<r;)t();e(a())}})}}const nD=(e,t)=>{if(!e||"string"!=typeof e)throw Error(`Expected ${t} string, got "${e}".`)},nM=e=>nD(e,"game name"),nT=e=>nD(e,"match ID"),nA=(e,t)=>{if(!e)throw Error(`Expected body, got \u{201C}${e}\u{201D}.`);for(let n in t){let r=t[n],a=Array.isArray(r)?r:[r],i=e[n];if(!a.includes(typeof i)){let e=a.join("|");throw TypeError(`Expected body.${n} to be of type ${e}, got \u{201C}${i}\u{201D}.`)}}};class nR extends Error{constructor(e,t){super(e),this.details=t}}/**
 * Create a boardgame.io Lobby API client.
 * @param server The API’s base URL, e.g. `http://localhost:8000`.
 */class nL{constructor({server:e=""}={}){// strip trailing slash if passed
this.server=e.replace(/\/$/,"")}async request(e,t){let n=await fetch(this.server+e,t);if(!n.ok){let e;try{e=await n.clone().json()}catch{try{e=await n.text()}catch(t){e=t.message}}throw new nR(`HTTP status ${n.status}`,e)}return n.json()}async post(e,t){let n={method:"post",body:JSON.stringify(t.body),headers:{"Content-Type":"application/json"}};return t.init&&(n={...n,...t.init,headers:{...n.headers,...t.init.headers}}),this.request(e,n)}/**
     * Get a list of the game names available on this server.
     * @param  init Optional RequestInit interface to override defaults.
     * @return Array of game names.
     *
     * @example
     * lobbyClient.listGames()
     *   .then(console.log); // => ['chess', 'tic-tac-toe']
     */async listGames(e){return this.request("/games",e)}/**
     * Get a list of the matches for a specific game type on the server.
     * @param  gameName The game to list for, e.g. 'tic-tac-toe'.
     * @param  where    Options to filter matches by update time or gameover state
     * @param  init     Optional RequestInit interface to override defaults.
     * @return Array of match metadata objects.
     *
     * @example
     * lobbyClient.listMatches('tic-tac-toe', where: { isGameover: false })
     *   .then(data => console.log(data.matches));
     * // => [
     * //   {
     * //     matchID: 'xyz',
     * //     gameName: 'tic-tac-toe',
     * //     players: [{ id: 0, name: 'Alice' }, { id: 1 }]
     * //   },
     * //   ...
     * // ]
     */async listMatches(e,t,n){nM(e);let r="";if(t){let e=[],{isGameover:n,updatedBefore:a,updatedAfter:i}=t;void 0!==n&&e.push(`isGameover=${n}`),a&&e.push(`updatedBefore=${a}`),i&&e.push(`updatedAfter=${i}`),e.length>0&&(r="?"+e.join("&"))}return this.request(`/games/${e}${r}`,n)}/**
     * Get metadata for a specific match.
     * @param  gameName The match’s game type, e.g. 'tic-tac-toe'.
     * @param  matchID  Match ID for the match to fetch.
     * @param  init     Optional RequestInit interface to override defaults.
     * @return A match metadata object.
     *
     * @example
     * lobbyClient.getMatch('tic-tac-toe', 'xyz').then(console.log);
     * // => {
     * //   matchID: 'xyz',
     * //   gameName: 'tic-tac-toe',
     * //   players: [{ id: 0, name: 'Alice' }, { id: 1 }]
     * // }
     */async getMatch(e,t,n){return nM(e),nT(t),this.request(`/games/${e}/${t}`,n)}/**
     * Create a new match for a specific game type.
     * @param  gameName The game to create a match for, e.g. 'tic-tac-toe'.
     * @param  body     Options required to configure match creation.
     * @param  init     Optional RequestInit interface to override defaults.
     * @return An object containing the created `matchID`.
     *
     * @example
     * lobbyClient.createMatch('tic-tac-toe', { numPlayers: 2 })
     *   .then(console.log);
     * // => { matchID: 'xyz' }
     */async createMatch(e,t,n){return nM(e),nA(t,{numPlayers:"number"}),this.post(`/games/${e}/create`,{body:t,init:n})}/**
     * Join a match using its matchID.
     * @param  gameName The match’s game type, e.g. 'tic-tac-toe'.
     * @param  matchID  Match ID for the match to join.
     * @param  body     Options required to join match.
     * @param  init     Optional RequestInit interface to override defaults.
     * @return Object containing `playerCredentials` for the player who joined.
     *
     * @example
     * lobbyClient.joinMatch('tic-tac-toe', 'xyz', {
     *   playerID: '1',
     *   playerName: 'Bob',
     * }).then(console.log);
     * // => { playerID: '1', playerCredentials: 'random-string' }
     */async joinMatch(e,t,n,r){return nM(e),nT(t),nA(n,{playerID:["string","undefined"],playerName:"string"}),this.post(`/games/${e}/${t}/join`,{body:n,init:r})}/**
     * Leave a previously joined match.
     * @param  gameName The match’s game type, e.g. 'tic-tac-toe'.
     * @param  matchID  Match ID for the match to leave.
     * @param  body     Options required to leave match.
     * @param  init     Optional RequestInit interface to override defaults.
     * @return Promise resolves if successful.
     *
     * @example
     * lobbyClient.leaveMatch('tic-tac-toe', 'xyz', {
     *   playerID: '1',
     *   credentials: 'credentials-returned-when-joining',
     * })
     *   .then(() => console.log('Left match.'))
     *   .catch(error => console.error('Error leaving match', error));
     */async leaveMatch(e,t,n,r){nM(e),nT(t),nA(n,{playerID:"string",credentials:"string"}),await this.post(`/games/${e}/${t}/leave`,{body:n,init:r})}/**
     * Update a player’s name or custom metadata.
     * @param  gameName The match’s game type, e.g. 'tic-tac-toe'.
     * @param  matchID  Match ID for the match to update.
     * @param  body     Options required to update player.
     * @param  init     Optional RequestInit interface to override defaults.
     * @return Promise resolves if successful.
     *
     * @example
     * lobbyClient.updatePlayer('tic-tac-toe', 'xyz', {
     *   playerID: '0',
     *   credentials: 'credentials-returned-when-joining',
     *   newName: 'Al',
     * })
     *   .then(() => console.log('Updated player data.'))
     *   .catch(error => console.error('Error updating data', error));
     */async updatePlayer(e,t,n,r){nM(e),nT(t),nA(n,{playerID:"string",credentials:"string"}),await this.post(`/games/${e}/${t}/update`,{body:n,init:r})}/**
     * Create a new match based on the configuration of the current match.
     * @param  gameName The match’s game type, e.g. 'tic-tac-toe'.
     * @param  matchID  Match ID for the match to play again.
     * @param  body     Options required to configure match.
     * @param  init     Optional RequestInit interface to override defaults.
     * @return Object containing `nextMatchID`.
     *
     * @example
     * lobbyClient.playAgain('tic-tac-toe', 'xyz', {
     *   playerID: '0',
     *   credentials: 'credentials-returned-when-joining',
     * })
     *   .then(({ nextMatchID }) => {
     *     return lobbyClient.joinMatch('tic-tac-toe', nextMatchID, {
     *       playerID: '0',
     *       playerName: 'Al',
     *     })
     *   })
     *   .then({ playerCredentials } => {
     *     console.log(playerCredentials);
     *   })
     *   .catch(console.error);
     */async playAgain(e,t,n,r){return nM(e),nT(t),nA(n,{playerID:"string",credentials:"string"}),this.post(`/games/${e}/${t}/playAgain`,{body:n,init:r})}}var M=O("acw62"),nB={};// By explicitly using `prop-types` you are opting into new production behavior.
// http://fb.me/prop-types-in-prod
nB=O("hOzOt")();var nj={};Object.defineProperty(nj,"__esModule",{value:!0});var nU="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};nj.load=n1,nj.loadAll=n2,nj.select=n3,nj.save=n4,nj.remove=n6,nj.setRawCookie=n8,nj.plugToRequest=n5;var nz={};e(nz,"parse",()=>m,e=>m=e),e(nz,"serialize",()=>g,e=>g=e),m=/**
 * Parse a cookie header.
 *
 * Parse the given cookie header string into an object
 * The object has the various cookies as keys(names) => values
 *
 * @param {string} str
 * @param {object} [options]
 * @return {object}
 * @public
 */function(e,t){if("string"!=typeof e)throw TypeError("argument str must be a string");for(var n={},r=e.split(nG),a=(t||{}).decode||nF,i=0;i<r.length;i++){var o=r[i],s=o.indexOf("=");// skip things that don't look like key=value
if(!(s<0)){var l=o.substr(0,s).trim(),u=o.substr(++s,o.length).trim();'"'==u[0]&&(u=u.slice(1,-1)),void 0==n[l]&&(n[l]=/**
 * Try decoding a string using a decoding function.
 *
 * @param {string} str
 * @param {function} decode
 * @private
 */function(e,t){try{return t(e)}catch(t){return e}}(u,a))}}return n},g=/**
 * Serialize data into a cookie header.
 *
 * Serialize the a name value pair into a cookie string suitable for
 * http headers. An optional options object specified cookie parameters.
 *
 * serialize('foo', 'bar', { httpOnly: true })
 *   => "foo=bar; httpOnly"
 *
 * @param {string} name
 * @param {string} val
 * @param {object} [options]
 * @return {string}
 * @public
 */function(e,t,n){var r=n||{},a=r.encode||n$;if("function"!=typeof a)throw TypeError("option encode is invalid");if(!nV.test(e))throw TypeError("argument name is invalid");var i=a(t);if(i&&!nV.test(i))throw TypeError("argument val is invalid");var o=e+"="+i;if(null!=r.maxAge){var s=r.maxAge-0;if(isNaN(s))throw Error("maxAge should be a Number");o+="; Max-Age="+Math.floor(s)}if(r.domain){if(!nV.test(r.domain))throw TypeError("option domain is invalid");o+="; Domain="+r.domain}if(r.path){if(!nV.test(r.path))throw TypeError("option path is invalid");o+="; Path="+r.path}if(r.expires){if("function"!=typeof r.expires.toUTCString)throw TypeError("option expires is invalid");o+="; Expires="+r.expires.toUTCString()}if(r.httpOnly&&(o+="; HttpOnly"),r.secure&&(o+="; Secure"),r.sameSite)switch("string"==typeof r.sameSite?r.sameSite.toLowerCase():r.sameSite){case!0:case"strict":o+="; SameSite=Strict";break;case"lax":o+="; SameSite=Lax";break;default:throw TypeError("option sameSite is invalid")}return o};/**
 * Module variables.
 * @private
 */var nF=decodeURIComponent,n$=encodeURIComponent,nG=/; */,nV=/^[\u0009\u0020-\u007e\u0080-\u00ff]+$/,nH=nY(nz),nq=Object.getOwnPropertySymbols,nW=Object.prototype.hasOwnProperty,nK=Object.prototype.propertyIsEnumerable,nQ=nY(!function(){try{if(!Object.assign)return!1;// Detect buggy property enumeration order in older V8 versions.
// https://bugs.chromium.org/p/v8/issues/detail?id=4118
var e=new String("abc");// eslint-disable-line no-new-wrappers
if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;// https://bugs.chromium.org/p/v8/issues/detail?id=3056
var r=Object.getOwnPropertyNames(t).map(function(e){return t[e]});if("0123456789"!==r.join(""))return!1;// https://bugs.chromium.org/p/v8/issues/detail?id=3056
var a={};if("abcdefghijklmnopqrst".split("").forEach(function(e){a[e]=e}),"abcdefghijklmnopqrst"!==Object.keys(Object.assign({},a)).join(""))return!1;return!0}catch(e){// We don't expect any of the above to throw, but better to be safe.
return!1}}()?function(e,t){for(var n,r,a=function(e){if(null==e)throw TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),i=1;i<arguments.length;i++){for(var o in n=Object(arguments[i]))nW.call(n,o)&&(a[o]=n[o]);if(nq){r=nq(n);for(var s=0;s<r.length;s++)nK.call(n,r[s])&&(a[r[s]]=n[r[s]])}}return a}:Object.assign);function nY(e){return e&&e.__esModule?e:{default:e}}var nJ="undefined"==typeof document||void 0!==ng&&ng.env&&!1,nX={},nZ=void 0;function n0(){return nZ&&!nZ.headersSent}function n1(e,t){var n=nJ?nX:nH.default.parse(document.cookie),r=n&&n[e];if(void 0===t&&(t=!r||"{"!==r[0]&&"["!==r[0]),!t)try{r=JSON.parse(r)}catch(e){// Not serialized object
}return r}function n2(e){var t=nJ?nX:nH.default.parse(document.cookie);if(void 0===e&&(e=!t||"{"!==t[0]&&"["!==t[0]),!e)try{t=JSON.parse(t)}catch(e){// Not serialized object
}return t}function n3(e){var t=nJ?nX:nH.default.parse(document.cookie);return t?e?Object.keys(t).reduce(function(n,r){if(!e.test(r))return n;var a={};return a[r]=t[r],(0,nQ.default)({},n,a)},{}):t:{}}function n4(e,t,n){nX[e]=t,(void 0===t?"undefined":nU(t))==="object"&&(nX[e]=JSON.stringify(t)),nJ||(document.cookie=nH.default.serialize(e,nX[e],n)),n0()&&nZ.cookie&&nZ.cookie(e,t,n)}function n6(e,t){delete nX[e],t=void 0===t?{}:"string"==typeof t?{path:t}:(0,nQ.default)({},t),"undefined"!=typeof document&&(t.expires=new Date(1970,1,1,0,0,1),t.maxAge=0,document.cookie=nH.default.serialize(e,"",t)),n0()&&nZ.clearCookie&&nZ.clearCookie(e,t)}function n8(e){nX=e?nH.default.parse(e):{}}function n5(e,t){return e.cookie?nX=e.cookie:e.cookies?nX=e.cookies:e.headers&&e.headers.cookie?n8(e.headers.cookie):nX={},nZ=t,function(){nZ=null,nX={}}}/**
 * Type guard that checks if a storage implementation is synchronous.
 */function n7(e){return e.type()===v.SYNC}nj.default={setRawCookie:n8,load:n1,loadAll:n2,select:n3,save:n4,remove:n6,plugToRequest:n5},(o=v||(v={}))[o.SYNC=0]="SYNC",o[o.ASYNC=1]="ASYNC";class n9{type(){return v.SYNC}/**
     * Connect.
     */connect(){}/**
     * Create a new match.
     *
     * This might just need to call setState and setMetadata in
     * most implementations.
     *
     * However, it exists as a separate call so that the
     * implementation can provision things differently when
     * a match is created.  For example, it might stow away the
     * initial match state in a separate field for easier retrieval.
     *//* istanbul ignore next */createMatch(e,t){if(this.createGame)return console.warn("The database connector does not implement a createMatch method.","\nUsing the deprecated createGame method instead."),this.createGame(e,t);console.error("The database connector does not implement a createMatch method.")}/**
     * Return all matches.
     *//* istanbul ignore next */listMatches(e){if(this.listGames)return console.warn("The database connector does not implement a listMatches method.","\nUsing the deprecated listGames method instead."),this.listGames(e);console.error("The database connector does not implement a listMatches method.")}}/**
 * Creates a new match metadata object.
 */const re=({game:e,unlisted:t,setupData:n,numPlayers:r})=>{let a={gameName:e.name,unlisted:!!t,players:{},createdAt:Date.now(),updatedAt:Date.now()};void 0!==n&&(a.setupData=n);for(let e=0;e<r;e++)a.players[e]={id:e};return a},rt=({game:e,numPlayers:t,setupData:n,unlisted:r})=>{t&&"number"==typeof t||(t=2);let a=e.validateSetupData&&e.validateSetupData(n,t);if(void 0!==a)return{setupDataError:a};let i=re({game:e,numPlayers:t,setupData:n,unlisted:r}),o=nr({game:e,numPlayers:t,setupData:n});return{metadata:i,initialState:o}},rn=e=>Object.values(e.players).map(e=>{let{credentials:t,...n}=e;return n}),rr=e=>{let{credentials:t,...n}=e.payload;return{...e,payload:n}};/**
 * Master
 *
 * Class that runs the game and maintains the authoritative state.
 * It uses the transportAPI to communicate with clients and the
 * storageAPI to communicate with the database.
 */class ra{constructor(e,t,n,r){this.game=t2(e),this.storageAPI=t,this.transportAPI=n,this.subscribeCallback=()=>{},this.auth=r}subscribe(e){this.subscribeCallback=e}/**
     * Called on each move / event made by the client.
     * Computes the new value of the game state and returns it
     * along with a deltalog.
     */async onUpdate(e,t,n,r){let a,i,o;if(!e||!e.payload)return{error:"missing action or action payload"};if(n7(this.storageAPI)?{metadata:a}=this.storageAPI.fetch(n,{metadata:!0}):{metadata:a}=await this.storageAPI.fetch(n,{metadata:!0}),this.auth){let t=await this.auth.authenticateCredentials({playerID:r,credentials:e.payload.credentials,metadata:a});if(!t)return{error:"unauthorized action"}}let s=rr(e);if(n7(this.storageAPI)?{state:i}=this.storageAPI.fetch(n,{state:!0}):{state:i}=await this.storageAPI.fetch(n,{state:!0}),void 0===i)return tj(`game not found, matchID=[${n}]`),{error:"game not found"};if(void 0!==i.ctx.gameover){tj(`game over - matchID=[${n}] - playerID=[${r}] - action[${s.payload.type}]`);return}let l=nn({game:this.game}),u=eb(nt),c=eg(l,i,u);// Only allow UNDO / REDO if there is exactly one player
// that can make moves right now and the person doing the
// action is that player.
if(s.type==tm||s.type==tp){let e=null!==i.ctx.activePlayers,t=i.ctx.currentPlayer===r;if(!e&&!t||// If player is not active or multiple players are active, can’t undo.
e&&(void 0===i.ctx.activePlayers[r]||Object.keys(i.ctx.activePlayers).length>1)){tj(`playerID=[${r}] cannot undo / redo right now`);return}}// Check whether the player is active.
if(!this.game.flow.isPlayerActive(i.G,i.ctx,r)){tj(`player not active - playerID=[${r}] - action[${s.payload.type}]`);return}// Get move for further checks
let f=s.type==tf?this.game.flow.getMove(i.ctx,s.payload.type,r):null;// Check whether the player is allowed to make the move.
if(s.type==tf&&!f){tj(`move not processed - canPlayerMakeMove=false - playerID=[${r}] - action[${s.payload.type}]`);return}// Check if action's stateID is different than store's stateID
// and if move does not have ignoreStaleStateID truthy.
if(i._stateID!==t&&!(f&&t3(f)&&f.ignoreStaleStateID)){tj(`invalid stateID, was=[${t}], expected=[${i._stateID}] - playerID=[${r}] - action[${s.payload.type}]`);return}let d=c.getState();// Update server's version of the store.
c.dispatch(s),i=c.getState(),this.subscribeCallback({state:i,action:s,matchID:n}),this.game.deltaState?this.transportAPI.sendAll({type:"patch",args:[n,t,d,i]}):this.transportAPI.sendAll({type:"update",args:[n,i]});let{deltalog:p,...h}=i;if(a&&(void 0===a.gameover||null===a.gameover)&&(o={...a,updatedAt:Date.now()},void 0!==i.ctx.gameover&&(o.gameover=i.ctx.gameover)),n7(this.storageAPI))this.storageAPI.setState(n,h,p),o&&this.storageAPI.setMetadata(n,o);else{let e=[this.storageAPI.setState(n,h,p)];o&&e.push(this.storageAPI.setMetadata(n,o)),await Promise.all(e)}}/**
     * Called when the client connects / reconnects.
     * Returns the latest game state and the entire log.
     */async onSync(e,t,n,r=2){let a={state:!0,metadata:!0,log:!0,initialState:!0},i=n7(this.storageAPI)?this.storageAPI.fetch(e,a):await this.storageAPI.fetch(e,a),{state:o,initialState:s,log:l,metadata:u}=i;if(this.auth&&null!=t){let e=await this.auth.authenticateCredentials({playerID:t,credentials:n,metadata:u});if(!e)return{error:"unauthorized"}}// If the game doesn't exist, then create one on demand.
// TODO: Move this out of the sync call.
if(void 0===o){let t=rt({game:this.game,unlisted:!0,numPlayers:r,setupData:void 0});if("setupDataError"in t)return{error:"game requires setupData"};s=o=t.initialState,u=t.metadata,this.subscribeCallback({state:o,matchID:e}),n7(this.storageAPI)?this.storageAPI.createMatch(e,{initialState:s,metadata:u}):await this.storageAPI.createMatch(e,{initialState:s,metadata:u})}let c=u?rn(u):void 0,f={state:o,log:l,filteredMetadata:c,initialState:s};this.transportAPI.send({playerID:t,type:"sync",args:[e,f]})}/**
     * Called when a client connects or disconnects.
     * Updates and sends out metadata to reflect the player’s connection status.
     */async onConnectionChange(e,t,n,r){let a;// Ignore changes for clients without a playerID, e.g. spectators.
if(null==t)return;if(n7(this.storageAPI)?{metadata:a}=this.storageAPI.fetch(e,{metadata:!0}):{metadata:a}=await this.storageAPI.fetch(e,{metadata:!0}),void 0===a)return tj(`metadata not found for matchID=[${e}]`),{error:"metadata not found"};if(void 0===a.players[t])return tj(`Player not in the match, matchID=[${e}] playerID=[${t}]`),{error:"player not in the match"};if(this.auth){let e=await this.auth.authenticateCredentials({playerID:t,credentials:n,metadata:a});if(!e)return{error:"unauthorized"}}a.players[t].isConnected=r;let i=rn(a);this.transportAPI.sendAll({type:"matchData",args:[e,i]}),n7(this.storageAPI)?this.storageAPI.setMetadata(e,a):await this.storageAPI.setMetadata(e,a)}async onChatMessage(e,t,n){if(this.auth){let{metadata:r}=await this.storageAPI.fetch(e,{metadata:!0});if(!(t&&"string"==typeof t.sender))return{error:"unauthorized"};let a=await this.auth.authenticateCredentials({playerID:t.sender,credentials:n,metadata:r});if(!a)return{error:"unauthorized"}}this.transportAPI.sendAll({type:"chat",args:[e,t]})}}const ri=(e,t,n)=>({...n,G:e.playerView({G:n.G,ctx:n.ctx,playerID:t}),plugins:tY(n,{playerID:t,game:e}),deltalog:void 0,_undo:[],_redo:[]}),ro=e=>(t,n)=>{switch(n.type){case"patch":{let[r,a,i,o]=n.args,s=rs(o.deltalog,t),l=ri(e,t,o),u=o._stateID,c=ri(e,t,i),f=(0,B.createPatch)(c,l);return{type:"patch",args:[r,a,u,f,s]}}case"update":{let[r,a]=n.args,i=rs(a.deltalog,t),o=ri(e,t,a);return{type:"update",args:[r,o,i]}}case"sync":{let[r,a]=n.args,i=ri(e,t,a.state),o=rs(a.log,t),s={...a,state:i,log:o};return{type:"sync",args:[r,s]}}default:return n}};/**
 * Redact the log.
 *
 * @param {Array} log - The game log (or deltalog).
 * @param {String} playerID - The playerID that this log is
 *                            to be sent to.
 */function rs(e,t){return void 0===e?e:e.map(e=>{// filter for all other players and spectators.
if(null!==t&&+t==+e.action.payload.playerID||!0!==e.redact)return e;let n={...e.action.payload,args:null},r={...e,action:{...e.action,payload:n}},{redact:a,...i}=r;return i})}const rl=Object.create(null);// no Map = no polyfill
rl.open="0",rl.close="1",rl.ping="2",rl.pong="3",rl.message="4",rl.upgrade="5",rl.noop="6";const ru=Object.create(null);Object.keys(rl).forEach(e=>{ru[rl[e]]=e});const rc={type:"error",data:"parser error"},rf="function"==typeof Blob||"undefined"!=typeof Blob&&"[object BlobConstructor]"===Object.prototype.toString.call(Blob),rd="function"==typeof ArrayBuffer,rp=e=>"function"==typeof ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer instanceof ArrayBuffer,rh=(e,t)=>{let n=new FileReader;return n.onload=function(){let e=n.result.split(",")[1];t("b"+(e||""))},n.readAsDataURL(e)};var ry=({type:e,data:t},n,r)=>rf&&t instanceof Blob?n?r(t):rh(t,r):rd&&(t instanceof ArrayBuffer||rp(t))?n?r(t):rh(new Blob([t]),r):r(rl[e]+(t||""));// imported from https://github.com/socketio/base64-arraybuffer
const rm="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",rg="undefined"==typeof Uint8Array?[]:new Uint8Array(256);for(let e=0;e<rm.length;e++)rg[rm.charCodeAt(e)]=e;const rv=e=>{let t=.75*e.length,n=e.length,r,a=0,i,o,s,l;"="===e[e.length-1]&&(t--,"="===e[e.length-2]&&t--);let u=new ArrayBuffer(t),c=new Uint8Array(u);for(r=0;r<n;r+=4)i=rg[e.charCodeAt(r)],o=rg[e.charCodeAt(r+1)],s=rg[e.charCodeAt(r+2)],l=rg[e.charCodeAt(r+3)],c[a++]=i<<2|o>>4,c[a++]=(15&o)<<4|s>>2,c[a++]=(3&s)<<6|63&l;return u},rb="function"==typeof ArrayBuffer,rw=(e,t)=>{if(!rb)return{base64:!0,data:e};// fallback for old browsers
{let n=rv(e);return rk(n,t)}},rk=(e,t)=>"blob"===t&&e instanceof ArrayBuffer?new Blob([e]):e;var rE=(e,t)=>{if("string"!=typeof e)return{type:"message",data:rk(e,t)};let n=e.charAt(0);if("b"===n)return{type:"message",data:rw(e.substring(1),t)};let r=ru[n];return r?e.length>1?{type:ru[n],data:e.substring(1)}:{type:ru[n]}:rc};const rS=(e,t)=>{// some packets may be added to the array while encoding, so the initial length must be saved
let n=e.length,r=Array(n),a=0;e.forEach((e,i)=>{ry(e,!1,e=>{r[i]=e,++a===n&&t(r.join("\x1e"))})})},rx=(e,t)=>{let n=e.split("\x1e"),r=[];for(let e=0;e<n.length;e++){let a=rE(n[e],t);if(r.push(a),"error"===a.type)break}return r};/**
 * Initialize a new `Emitter`.
 *
 * @api public
 */function r_(e){if(e)return(/**
 * Mixin the emitter properties.
 *
 * @param {Object} obj
 * @return {Object}
 * @api private
 */function(e){for(var t in r_.prototype)e[t]=r_.prototype[t];return e}(e))}function rP(e,...t){return t.reduce((t,n)=>(e.hasOwnProperty(n)&&(t[n]=e[n]),t),{})}/**
 * Listen on the given `event` with `fn`.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */r_.prototype.on=r_.prototype.addEventListener=function(e,t){return this._callbacks=this._callbacks||{},(this._callbacks["$"+e]=this._callbacks["$"+e]||[]).push(t),this},/**
 * Adds an `event` listener that will be invoked a single
 * time then automatically removed.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */r_.prototype.once=function(e,t){function n(){this.off(e,n),t.apply(this,arguments)}return n.fn=t,this.on(e,n),this},/**
 * Remove the given callback for `event` or all
 * registered callbacks.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */r_.prototype.off=r_.prototype.removeListener=r_.prototype.removeAllListeners=r_.prototype.removeEventListener=function(e,t){// all
if(this._callbacks=this._callbacks||{},0==arguments.length)return this._callbacks={},this;// specific event
var n,r=this._callbacks["$"+e];if(!r)return this;// remove all handlers
if(1==arguments.length)return delete this._callbacks["$"+e],this;for(var a=0;a<r.length;a++)if((n=r[a])===t||n.fn===t){r.splice(a,1);break}return 0===r.length&&delete this._callbacks["$"+e],this},/**
 * Emit `event` with the given args.
 *
 * @param {String} event
 * @param {Mixed} ...
 * @return {Emitter}
 */r_.prototype.emit=function(e){this._callbacks=this._callbacks||{};for(var t=Array(arguments.length-1),n=this._callbacks["$"+e],r=1;r<arguments.length;r++)t[r-1]=arguments[r];if(n){n=n.slice(0);for(var r=0,a=n.length;r<a;++r)n[r].apply(this,t)}return this},// alias used for reserved events (protected method)
r_.prototype.emitReserved=r_.prototype.emit,/**
 * Return array of callbacks for `event`.
 *
 * @param {String} event
 * @return {Array}
 * @api public
 */r_.prototype.listeners=function(e){return this._callbacks=this._callbacks||{},this._callbacks["$"+e]||[]},/**
 * Check if this emitter has `event` handlers.
 *
 * @param {String} event
 * @return {Boolean}
 * @api public
 */r_.prototype.hasListeners=function(e){return!!this.listeners(e).length},"undefined"!=typeof self?self:"undefined"!=typeof window?window:Function("return this")();// Keep a reference to the real timeout functions so they can be used when overridden
const rC=setTimeout,rI=clearTimeout;function rO(e,t){t.useNativeTimers?(e.setTimeoutFn=rC.bind(globalThis),e.clearTimeoutFn=rI.bind(globalThis)):(e.setTimeoutFn=setTimeout.bind(globalThis),e.clearTimeoutFn=clearTimeout.bind(globalThis))}class rN extends Error{constructor(e,t,n){super(e),this.description=t,this.context=n,this.type="TransportError"}}class rD extends r_{/**
     * Transport abstract constructor.
     *
     * @param {Object} options.
     * @api private
     */constructor(e){super(),this.writable=!1,rO(this,e),this.opts=e,this.query=e.query,this.readyState="",this.socket=e.socket}/**
     * Emits an error.
     *
     * @param {String} reason
     * @param description
     * @param context - the error context
     * @return {Transport} for chaining
     * @api protected
     */onError(e,t,n){return super.emitReserved("error",new rN(e,t,n)),this}/**
     * Opens the transport.
     *
     * @api public
     */open(){return("closed"===this.readyState||""===this.readyState)&&(this.readyState="opening",this.doOpen()),this}/**
     * Closes the transport.
     *
     * @api public
     */close(){return("opening"===this.readyState||"open"===this.readyState)&&(this.doClose(),this.onClose()),this}/**
     * Sends multiple packets.
     *
     * @param {Array} packets
     * @api public
     */send(e){"open"===this.readyState&&this.write(e)}/**
     * Called upon open
     *
     * @api protected
     */onOpen(){this.readyState="open",this.writable=!0,super.emitReserved("open")}/**
     * Called with data.
     *
     * @param {String} data
     * @api protected
     */onData(e){let t=rE(e,this.socket.binaryType);this.onPacket(t)}/**
     * Called with a decoded packet.
     *
     * @api protected
     */onPacket(e){super.emitReserved("packet",e)}/**
     * Called upon close.
     *
     * @api protected
     */onClose(e){this.readyState="closed",super.emitReserved("close",e)}}const rM="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_".split(""),rT={};let rA=0,rR=0,rL;function rB(e){let t="";do t=rM[e%64]+t,e=Math.floor(e/64);while(e>0)return t}function rj(){let e=rB(+new Date);return e!==rL?(rA=0,rL=e):e+"."+rB(rA++)}//
// Map each character to its index.
//
for(;rR<64;rR++)rT[rM[rR]]=rR;// imported from https://github.com/galkn/querystring
/**
 * Compiles a querystring
 * Returns string representation of the object
 *
 * @param {Object}
 * @api private
 */function rU(e){let t="";for(let n in e)e.hasOwnProperty(n)&&(t.length&&(t+="&"),t+=encodeURIComponent(n)+"="+encodeURIComponent(e[n]));return t}// browser shim for xmlhttprequest module
// imported from https://github.com/component/has-cors
let rz=!1;try{rz="undefined"!=typeof XMLHttpRequest&&"withCredentials"in new XMLHttpRequest}catch(e){// if XMLHttp support is disabled in IE then it will throw
// when trying to create
}const rF=rz;function r$(e){let t=e.xdomain;// XMLHttpRequest can be disabled on IE
try{if("undefined"!=typeof XMLHttpRequest&&(!t||rF))return new XMLHttpRequest}catch(e){}if(!t)try{return new globalThis[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP")}catch(e){}}function rG(){}const rV=function(){let e=new r$({xdomain:!1});return null!=e.responseType}();class rH extends r_{/**
     * Request constructor
     *
     * @param {Object} options
     * @api public
     */constructor(e,t){super(),rO(this,t),this.opts=t,this.method=t.method||"GET",this.uri=e,this.async=!1!==t.async,this.data=void 0!==t.data?t.data:null,this.create()}/**
     * Creates the XHR object and sends the request.
     *
     * @api private
     */create(){let e=rP(this.opts,"agent","pfx","key","passphrase","cert","ca","ciphers","rejectUnauthorized","autoUnref");e.xdomain=!!this.opts.xd,e.xscheme=!!this.opts.xs;let t=this.xhr=new r$(e);try{t.open(this.method,this.uri,this.async);try{if(this.opts.extraHeaders)for(let e in t.setDisableHeaderCheck&&t.setDisableHeaderCheck(!0),this.opts.extraHeaders)this.opts.extraHeaders.hasOwnProperty(e)&&t.setRequestHeader(e,this.opts.extraHeaders[e])}catch(e){}if("POST"===this.method)try{t.setRequestHeader("Content-type","text/plain;charset=UTF-8")}catch(e){}try{t.setRequestHeader("Accept","*/*")}catch(e){}"withCredentials"in t&&(t.withCredentials=this.opts.withCredentials),this.opts.requestTimeout&&(t.timeout=this.opts.requestTimeout),t.onreadystatechange=()=>{4===t.readyState&&(200===t.status||1223===t.status?this.onLoad():// does not throw in the same tick and gets caught here
this.setTimeoutFn(()=>{this.onError("number"==typeof t.status?t.status:0)},0))},t.send(this.data)}catch(e){// Need to defer since .create() is called directly from the constructor
// and thus the 'error' event can only be only bound *after* this exception
// occurs.  Therefore, also, we cannot throw here at all.
this.setTimeoutFn(()=>{this.onError(e)},0);return}"undefined"!=typeof document&&(this.index=rH.requestsCount++,rH.requests[this.index]=this)}/**
     * Called upon error.
     *
     * @api private
     */onError(e){this.emitReserved("error",e,this.xhr),this.cleanup(!0)}/**
     * Cleans up house.
     *
     * @api private
     */cleanup(e){if(void 0!==this.xhr&&null!==this.xhr){if(this.xhr.onreadystatechange=rG,e)try{this.xhr.abort()}catch(e){}"undefined"!=typeof document&&delete rH.requests[this.index],this.xhr=null}}/**
     * Called upon load.
     *
     * @api private
     */onLoad(){let e=this.xhr.responseText;null!==e&&(this.emitReserved("data",e),this.emitReserved("success"),this.cleanup())}/**
     * Aborts the request.
     *
     * @api public
     */abort(){this.cleanup()}}/**
 * Aborts pending requests when unloading the window. This is needed to prevent
 * memory leaks (e.g. when using IE) and to ensure that no spurious error is
 * emitted.
 */if(rH.requestsCount=0,rH.requests={},"undefined"!=typeof document){// @ts-ignore
if("function"==typeof attachEvent)attachEvent("onunload",rq);else if("function"==typeof addEventListener){let e="onpagehide"in globalThis?"pagehide":"unload";addEventListener(e,rq,!1)}}function rq(){for(let e in rH.requests)rH.requests.hasOwnProperty(e)&&rH.requests[e].abort()}const rW=(()=>{let e="function"==typeof Promise&&"function"==typeof Promise.resolve;return e?e=>Promise.resolve().then(e):(e,t)=>t(e,0)})(),rK=globalThis.WebSocket||globalThis.MozWebSocket;b=function(e){// go through the array every three bytes, we'll deal with trailing stuff later
for(var t,n=e.length,r=n%3// if we have 1 byte left, pad 2 bytes
,a=[],i=0,o=n-r;i<o;i+=16383// must be multiple of 3
)a.push(function(e,t,n){for(var r,a=[],i=t;i<n;i+=3)a.push(rQ[(r=(e[i]<<16&16711680)+(e[i+1]<<8&65280)+(255&e[i+2]))>>18&63]+rQ[r>>12&63]+rQ[r>>6&63]+rQ[63&r]);return a.join("")}(e,i,i+16383>o?o:i+16383));return 1===r?a.push(rQ[(t=e[n-1])>>2]+rQ[t<<4&63]+"=="):2===r&&a.push(rQ[(t=(e[n-2]<<8)+e[n-1])>>10]+rQ[t>>4&63]+rQ[t<<2&63]+"="),a.join("")};for(var rQ=[],rY=[],rJ="undefined"!=typeof Uint8Array?Uint8Array:Array,rX="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",rZ=0,r0=rX.length;rZ<r0;++rZ)rQ[rZ]=rX[rZ],rY[rX.charCodeAt(rZ)]=rZ;// Support decoding URL-safe base64 strings, as Node.js does.
// See: https://en.wikipedia.org/wiki/Base64#URL_applications
rY["-".charCodeAt(0)]=62,rY["_".charCodeAt(0)]=63,w=function(e,t,n,r,a){var i,o,s=8*a-r-1,l=(1<<s)-1,u=l>>1,c=-7,f=n?a-1:0,d=n?-1:1,p=e[t+f];for(f+=d,i=p&(1<<-c)-1,p>>=-c,c+=s;c>0;i=256*i+e[t+f],f+=d,c-=8);for(o=i&(1<<-c)-1,i>>=-c,c+=r;c>0;o=256*o+e[t+f],f+=d,c-=8);if(0===i)i=1-u;else{if(i===l)return o?NaN:(p?-1:1)*(1/0);o+=Math.pow(2,r),i-=u}return(p?-1:1)*o*Math.pow(2,i-r)},k=function(e,t,n,r,a,i){var o,s,l,u=8*i-a-1,c=(1<<u)-1,f=c>>1,d=23===a?5960464477539062e-23:0,p=r?0:i-1,h=r?1:-1,y=t<0||0===t&&1/t<0?1:0;for(isNaN(t=Math.abs(t))||t===1/0?(s=isNaN(t)?1:0,o=c):(o=Math.floor(Math.log(t)/Math.LN2),t*(l=Math.pow(2,-o))<1&&(o--,l*=2),o+f>=1?t+=d/l:t+=d*Math.pow(2,1-f),t*l>=2&&(o++,l/=2),o+f>=c?(s=0,o=c):o+f>=1?(s=(t*l-1)*Math.pow(2,a),o+=f):(s=t*Math.pow(2,f-1)*Math.pow(2,a),o=0));a>=8;e[n+p]=255&s,p+=h,s/=256,a-=8);for(o=o<<a|s,u+=a;u>0;e[n+p]=255&o,p+=h,o/=256,u-=8);e[n+p-h]|=128*y};const r1="function"==typeof Symbol&&"function"// eslint-disable-line dot-notation
==typeof Symbol.for?Symbol.for("nodejs.util.inspect.custom")// eslint-disable-line dot-notation
:null;function r2(e){if(e>2147483647)throw RangeError('The value "'+e+'" is invalid for option "size"');// Return an augmented `Uint8Array` instance
let t=new Uint8Array(e);return Object.setPrototypeOf(t,r3.prototype),t}/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */function r3(e,t,n){// Common case.
if("number"==typeof e){if("string"==typeof t)throw TypeError('The "string" argument must be of type string. Received type number');return r8(e)}return r4(e,t,n)}function r4(e,t,n){if("string"==typeof e)return function(e,t){if(("string"!=typeof t||""===t)&&(t="utf8"),!r3.isEncoding(t))throw TypeError("Unknown encoding: "+t);let n=0|ae(e,t),r=r2(n),a=r.write(e,t);return a!==n&&// cause everything after the first invalid character to be ignored. (e.g.
// 'abxxcd' will be treated as 'ab')
(r=r.slice(0,a)),r}(e,t);if(ArrayBuffer.isView(e))return function(e){if(aS(e,Uint8Array)){let t=new Uint8Array(e);return r7(t.buffer,t.byteOffset,t.byteLength)}return r5(e)}(e);if(null==e)throw TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e);if(aS(e,ArrayBuffer)||e&&aS(e.buffer,ArrayBuffer)||"undefined"!=typeof SharedArrayBuffer&&(aS(e,SharedArrayBuffer)||e&&aS(e.buffer,SharedArrayBuffer)))return r7(e,t,n);if("number"==typeof e)throw TypeError('The "value" argument must not be of type number. Received type number');let r=e.valueOf&&e.valueOf();if(null!=r&&r!==e)return r3.from(r,t,n);let a=function(e){var t;if(r3.isBuffer(e)){let t=0|r9(e.length),n=r2(t);return 0===n.length||e.copy(n,0,0,t),n}return void 0!==e.length?"number"!=typeof e.length||(t=e.length)!=t// eslint-disable-line no-self-compare
?r2(0):r5(e):"Buffer"===e.type&&Array.isArray(e.data)?r5(e.data):void 0}(e);if(a)return a;if("undefined"!=typeof Symbol&&null!=Symbol.toPrimitive&&"function"==typeof e[Symbol.toPrimitive])return r3.from(e[Symbol.toPrimitive]("string"),t,n);throw TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e)}function r6(e){if("number"!=typeof e)throw TypeError('"size" argument must be of type number');if(e<0)throw RangeError('The value "'+e+'" is invalid for option "size"')}function r8(e){return r6(e),r2(e<0?0:0|r9(e))}function r5(e){let t=e.length<0?0:0|r9(e.length),n=r2(t);for(let r=0;r<t;r+=1)n[r]=255&e[r];return n}function r7(e,t,n){let r;if(t<0||e.byteLength<t)throw RangeError('"offset" is outside of buffer bounds');if(e.byteLength<t+(n||0))throw RangeError('"length" is outside of buffer bounds');return(// Return an augmented `Uint8Array` instance
Object.setPrototypeOf(r=void 0===t&&void 0===n?new Uint8Array(e):void 0===n?new Uint8Array(e,t):new Uint8Array(e,t,n),r3.prototype),r)}function r9(e){// Note: cannot use `length < K_MAX_LENGTH` here because that fails when
// length is NaN (which is otherwise coerced to zero.)
if(e>=2147483647)throw RangeError("Attempt to allocate Buffer larger than maximum size: 0x7fffffff bytes");return 0|e}function ae(e,t){if(r3.isBuffer(e))return e.length;if(ArrayBuffer.isView(e)||aS(e,ArrayBuffer))return e.byteLength;if("string"!=typeof e)throw TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof e);let n=e.length,r=arguments.length>2&&!0===arguments[2];if(!r&&0===n)return 0;// Use a for loop to avoid recursion
let a=!1;for(;;)switch(t){case"ascii":case"latin1":case"binary":return n;case"utf8":case"utf-8":return aw(e).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*n;case"hex":return n>>>1;case"base64":return ak(e).length;default:if(a)return r?-1:aw(e).length// assume utf8
;t=(""+t).toLowerCase(),a=!0}}function at(e,t,n){let r=!1;// Return early if start > this.length. Done here to prevent potential uint32
// coercion fail below.
if((void 0===t||t<0)&&(t=0),t>this.length||((void 0===n||n>this.length)&&(n=this.length),n<=0||// Force coercion to uint32. This will also coerce falsey/NaN values to 0.
(n>>>=0)<=(t>>>=0)))return"";for(e||(e="utf8");;)switch(e){case"hex":return function(e,t,n){let r=e.length;(!t||t<0)&&(t=0),(!n||n<0||n>r)&&(n=r);let a="";for(let r=t;r<n;++r)a+=ax[e[r]];return a}(this,t,n);case"utf8":case"utf-8":return ai(this,t,n);case"ascii":return function(e,t,n){let r="";n=Math.min(e.length,n);for(let a=t;a<n;++a)r+=String.fromCharCode(127&e[a]);return r}(this,t,n);case"latin1":case"binary":return function(e,t,n){let r="";n=Math.min(e.length,n);for(let a=t;a<n;++a)r+=String.fromCharCode(e[a]);return r}(this,t,n);case"base64":var a,i;return a=t,i=n,0===a&&i===this.length?b(this):b(this.slice(a,i));case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return function(e,t,n){let r=e.slice(t,n),a="";// If bytes.length is odd, the last 8 bits must be ignored (same as node.js)
for(let e=0;e<r.length-1;e+=2)a+=String.fromCharCode(r[e]+256*r[e+1]);return a}(this,t,n);default:if(r)throw TypeError("Unknown encoding: "+e);e=(e+"").toLowerCase(),r=!0}}function an(e,t,n){let r=e[t];e[t]=e[n],e[n]=r}// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function ar(e,t,n,r,a){var i;// Empty buffer means no match
if(0===e.length)return -1;if("string"==typeof n?(r=n,n=0):n>2147483647?n=2147483647:n<-2147483648&&(n=-2147483648),(i=n=+n// Coerce to Number.
)!=i&&(n=a?0:e.length-1),n<0&&(n=e.length+n),n>=e.length){if(a)return -1;n=e.length-1}else if(n<0){if(!a)return -1;n=0}// Finally, search either indexOf (if dir is true) or lastIndexOf
if("string"==typeof t&&(t=r3.from(t,r)),r3.isBuffer(t))return(// Special case: looking for empty string/buffer always fails
0===t.length?-1:aa(e,t,n,r,a));if("number"==typeof t)return(t&=255// Search for a byte value [0-255]
,"function"==typeof Uint8Array.prototype.indexOf)?a?Uint8Array.prototype.indexOf.call(e,t,n):Uint8Array.prototype.lastIndexOf.call(e,t,n):aa(e,[t],n,r,a);throw TypeError("val must be string, number or Buffer")}function aa(e,t,n,r,a){let i,o=1,s=e.length,l=t.length;if(void 0!==r&&("ucs2"===(r=String(r).toLowerCase())||"ucs-2"===r||"utf16le"===r||"utf-16le"===r)){if(e.length<2||t.length<2)return -1;o=2,s/=2,l/=2,n/=2}function u(e,t){return 1===o?e[t]:e.readUInt16BE(t*o)}if(a){let r=-1;for(i=n;i<s;i++)if(u(e,i)===u(t,-1===r?0:i-r)){if(-1===r&&(r=i),i-r+1===l)return r*o}else -1!==r&&(i-=i-r),r=-1}else for(n+l>s&&(n=s-l),i=n;i>=0;i--){let n=!0;for(let r=0;r<l;r++)if(u(e,i+r)!==u(t,r)){n=!1;break}if(n)return i}return -1}function ai(e,t,n){n=Math.min(e.length,n);let r=[],a=t;for(;a<n;){let t=e[a],i=null,o=t>239?4:t>223?3:t>191?2:1;if(a+o<=n){let n,r,s,l;switch(o){case 1:t<128&&(i=t);break;case 2:(192&(n=e[a+1]))==128&&(l=(31&t)<<6|63&n)>127&&(i=l);break;case 3:n=e[a+1],r=e[a+2],(192&n)==128&&(192&r)==128&&(l=(15&t)<<12|(63&n)<<6|63&r)>2047&&(l<55296||l>57343)&&(i=l);break;case 4:n=e[a+1],r=e[a+2],s=e[a+3],(192&n)==128&&(192&r)==128&&(192&s)==128&&(l=(15&t)<<18|(63&n)<<12|(63&r)<<6|63&s)>65535&&l<1114112&&(i=l)}}null===i?(// we did not generate a valid codePoint so insert a
// replacement char (U+FFFD) and advance only 1 byte
i=65533,o=1):i>65535&&(// encode to utf16 (surrogate pair dance)
i-=65536,r.push(i>>>10&1023|55296),i=56320|1023&i),r.push(i),a+=o}return function(e){let t=e.length;if(t<=4096)return String.fromCharCode.apply(String,e)// avoid extra slice()
;// Decode in chunks to avoid "call stack size exceeded".
let n="",r=0;for(;r<t;)n+=String.fromCharCode.apply(String,e.slice(r,r+=4096));return n}(r)}/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */function ao(e,t,n){if(e%1!=0||e<0)throw RangeError("offset is not uint");if(e+t>n)throw RangeError("Trying to access beyond buffer length")}function as(e,t,n,r,a,i){if(!r3.isBuffer(e))throw TypeError('"buffer" argument must be a Buffer instance');if(t>a||t<i)throw RangeError('"value" argument is out of bounds');if(n+r>e.length)throw RangeError("Index out of range")}function al(e,t,n,r,a){am(t,r,a,e,n,7);let i=Number(t&BigInt(4294967295));e[n++]=i,i>>=8,e[n++]=i,i>>=8,e[n++]=i,i>>=8,e[n++]=i;let o=Number(t>>BigInt(32)&BigInt(4294967295));return e[n++]=o,o>>=8,e[n++]=o,o>>=8,e[n++]=o,o>>=8,e[n++]=o,n}function au(e,t,n,r,a){am(t,r,a,e,n,7);let i=Number(t&BigInt(4294967295));e[n+7]=i,i>>=8,e[n+6]=i,i>>=8,e[n+5]=i,i>>=8,e[n+4]=i;let o=Number(t>>BigInt(32)&BigInt(4294967295));return e[n+3]=o,o>>=8,e[n+2]=o,o>>=8,e[n+1]=o,o>>=8,e[n]=o,n+8}function ac(e,t,n,r,a,i){if(n+r>e.length||n<0)throw RangeError("Index out of range")}function af(e,t,n,r,a){return t=+t,n>>>=0,a||ac(e,t,n,4,34028234663852886e22,-34028234663852886e22),k(e,t,n,r,23,4),n+4}function ad(e,t,n,r,a){return t=+t,n>>>=0,a||ac(e,t,n,8,17976931348623157e292,-17976931348623157e292),k(e,t,n,r,52,8),n+8}/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Print warning and recommend using `buffer` v4.x which has an Object
 *               implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * We report that the browser does not support typed arrays if the are not subclassable
 * using __proto__. Firefox 4-29 lacks support for adding new properties to `Uint8Array`
 * (See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438). IE 10 lacks support
 * for __proto__ and has a buggy typed array implementation.
 */r3.TYPED_ARRAY_SUPPORT=function(){// Can typed array instances can be augmented?
try{let e=new Uint8Array(1),t={foo:function(){return 42}};return Object.setPrototypeOf(t,Uint8Array.prototype),Object.setPrototypeOf(e,t),42===e.foo()}catch(e){return!1}}(),r3.TYPED_ARRAY_SUPPORT||"undefined"==typeof console||"function"!=typeof console.error||console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."),Object.defineProperty(r3.prototype,"parent",{enumerable:!0,get:function(){if(r3.isBuffer(this))return this.buffer}}),Object.defineProperty(r3.prototype,"offset",{enumerable:!0,get:function(){if(r3.isBuffer(this))return this.byteOffset}}),r3.poolSize=8192// not used by this implementation
,/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/r3.from=function(e,t,n){return r4(e,t,n)},// Note: Change prototype *after* Buffer.from is defined to workaround Chrome bug:
// https://github.com/feross/buffer/pull/148
Object.setPrototypeOf(r3.prototype,Uint8Array.prototype),Object.setPrototypeOf(r3,Uint8Array),/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/r3.alloc=function(e,t,n){return(r6(e),e<=0)?r2(e):void 0!==t?"string"==typeof n?r2(e).fill(t,n):r2(e).fill(t):r2(e)},/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */r3.allocUnsafe=function(e){return r8(e)},/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */r3.allocUnsafeSlow=function(e){return r8(e)},r3.isBuffer=function(e){return null!=e&&!0===e._isBuffer&&e!==r3.prototype// so Buffer.isBuffer(Buffer.prototype) will be false
},r3.compare=function(e,t){if(aS(e,Uint8Array)&&(e=r3.from(e,e.offset,e.byteLength)),aS(t,Uint8Array)&&(t=r3.from(t,t.offset,t.byteLength)),!r3.isBuffer(e)||!r3.isBuffer(t))throw TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(e===t)return 0;let n=e.length,r=t.length;for(let a=0,i=Math.min(n,r);a<i;++a)if(e[a]!==t[a]){n=e[a],r=t[a];break}return n<r?-1:r<n?1:0},r3.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},r3.concat=function(e,t){let n;if(!Array.isArray(e))throw TypeError('"list" argument must be an Array of Buffers');if(0===e.length)return r3.alloc(0);if(void 0===t)for(n=0,t=0;n<e.length;++n)t+=e[n].length;let r=r3.allocUnsafe(t),a=0;for(n=0;n<e.length;++n){let t=e[n];if(aS(t,Uint8Array))a+t.length>r.length?(r3.isBuffer(t)||(t=r3.from(t)),t.copy(r,a)):Uint8Array.prototype.set.call(r,t,a);else if(r3.isBuffer(t))t.copy(r,a);else throw TypeError('"list" argument must be an Array of Buffers');a+=t.length}return r},r3.byteLength=ae,// This property is used by `Buffer.isBuffer` (and the `is-buffer` npm package)
// to detect a Buffer instance. It's not possible to use `instanceof Buffer`
// reliably in a browserify context because there could be multiple different
// copies of the 'buffer' package in use. This method works even for Buffer
// instances that were created from another copy of the `buffer` package.
// See: https://github.com/feross/buffer/issues/154
r3.prototype._isBuffer=!0,r3.prototype.swap16=function(){let e=this.length;if(e%2!=0)throw RangeError("Buffer size must be a multiple of 16-bits");for(let t=0;t<e;t+=2)an(this,t,t+1);return this},r3.prototype.swap32=function(){let e=this.length;if(e%4!=0)throw RangeError("Buffer size must be a multiple of 32-bits");for(let t=0;t<e;t+=4)an(this,t,t+3),an(this,t+1,t+2);return this},r3.prototype.swap64=function(){let e=this.length;if(e%8!=0)throw RangeError("Buffer size must be a multiple of 64-bits");for(let t=0;t<e;t+=8)an(this,t,t+7),an(this,t+1,t+6),an(this,t+2,t+5),an(this,t+3,t+4);return this},r3.prototype.toString=function(){let e=this.length;return 0===e?"":0==arguments.length?ai(this,0,e):at.apply(this,arguments)},r3.prototype.toLocaleString=r3.prototype.toString,r3.prototype.equals=function(e){if(!r3.isBuffer(e))throw TypeError("Argument must be a Buffer");return this===e||0===r3.compare(this,e)},r3.prototype.inspect=function(){let e="";return e=this.toString("hex",0,50).replace(/(.{2})/g,"$1 ").trim(),this.length>50&&(e+=" ... "),"<Buffer "+e+">"},r1&&(r3.prototype[r1]=r3.prototype.inspect),r3.prototype.compare=function(e,t,n,r,a){if(aS(e,Uint8Array)&&(e=r3.from(e,e.offset,e.byteLength)),!r3.isBuffer(e))throw TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof e);if(void 0===t&&(t=0),void 0===n&&(n=e?e.length:0),void 0===r&&(r=0),void 0===a&&(a=this.length),t<0||n>e.length||r<0||a>this.length)throw RangeError("out of range index");if(r>=a&&t>=n)return 0;if(r>=a)return -1;if(t>=n)return 1;if(t>>>=0,n>>>=0,r>>>=0,a>>>=0,this===e)return 0;let i=a-r,o=n-t,s=Math.min(i,o),l=this.slice(r,a),u=e.slice(t,n);for(let e=0;e<s;++e)if(l[e]!==u[e]){i=l[e],o=u[e];break}return i<o?-1:o<i?1:0},r3.prototype.includes=function(e,t,n){return -1!==this.indexOf(e,t,n)},r3.prototype.indexOf=function(e,t,n){return ar(this,e,t,n,!0)},r3.prototype.lastIndexOf=function(e,t,n){return ar(this,e,t,n,!1)},r3.prototype.write=function(e,t,n,r){var a,i,o,s,l,u,c,f;// Buffer#write(string)
if(void 0===t)r="utf8",n=this.length,t=0;else if(void 0===n&&"string"==typeof t)r=t,n=this.length,t=0;else if(isFinite(t))t>>>=0,isFinite(n)?(n>>>=0,void 0===r&&(r="utf8")):(r=n,n=void 0);else throw Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");let d=this.length-t;if((void 0===n||n>d)&&(n=d),e.length>0&&(n<0||t<0)||t>this.length)throw RangeError("Attempt to write outside buffer bounds");r||(r="utf8");let p=!1;for(;;)switch(r){case"hex":return function(e,t,n,r){let a;n=Number(n)||0;let i=e.length-n;r?(r=Number(r))>i&&(r=i):r=i;let o=t.length;for(r>o/2&&(r=o/2),a=0;a<r;++a){let r=parseInt(t.substr(2*a,2),16);if(r!=r)break;e[n+a]=r}return a}(this,e,t,n);case"utf8":case"utf-8":return a=t,i=n,aE(aw(e,this.length-a),this,a,i);case"ascii":case"latin1":case"binary":return o=t,s=n,aE(function(e){let t=[];for(let n=0;n<e.length;++n)t.push(255&e.charCodeAt(n));return t}(e),this,o,s);case"base64":// Warning: maxLength not taken into account in base64Write
return l=t,u=n,aE(ak(e),this,l,u);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return c=t,f=n,aE(function(e,t){let n,r;let a=[];for(let i=0;i<e.length&&!((t-=2)<0);++i)r=(n=e.charCodeAt(i))>>8,a.push(n%256),a.push(r);return a}(e,this.length-c),this,c,f);default:if(p)throw TypeError("Unknown encoding: "+r);r=(""+r).toLowerCase(),p=!0}},r3.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}},r3.prototype.slice=function(e,t){let n=this.length;e=~~e,t=void 0===t?n:~~t,e<0?(e+=n)<0&&(e=0):e>n&&(e=n),t<0?(t+=n)<0&&(t=0):t>n&&(t=n),t<e&&(t=e);let r=this.subarray(e,t);return(// Return an augmented `Uint8Array` instance
Object.setPrototypeOf(r,r3.prototype),r)},r3.prototype.readUintLE=r3.prototype.readUIntLE=function(e,t,n){e>>>=0,t>>>=0,n||ao(e,t,this.length);let r=this[e],a=1,i=0;for(;++i<t&&(a*=256);)r+=this[e+i]*a;return r},r3.prototype.readUintBE=r3.prototype.readUIntBE=function(e,t,n){e>>>=0,t>>>=0,n||ao(e,t,this.length);let r=this[e+--t],a=1;for(;t>0&&(a*=256);)r+=this[e+--t]*a;return r},r3.prototype.readUint8=r3.prototype.readUInt8=function(e,t){return e>>>=0,t||ao(e,1,this.length),this[e]},r3.prototype.readUint16LE=r3.prototype.readUInt16LE=function(e,t){return e>>>=0,t||ao(e,2,this.length),this[e]|this[e+1]<<8},r3.prototype.readUint16BE=r3.prototype.readUInt16BE=function(e,t){return e>>>=0,t||ao(e,2,this.length),this[e]<<8|this[e+1]},r3.prototype.readUint32LE=r3.prototype.readUInt32LE=function(e,t){return e>>>=0,t||ao(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+16777216*this[e+3]},r3.prototype.readUint32BE=r3.prototype.readUInt32BE=function(e,t){return e>>>=0,t||ao(e,4,this.length),16777216*this[e]+(this[e+1]<<16|this[e+2]<<8|this[e+3])},r3.prototype.readBigUInt64LE=a_(function(e){ag(e>>>=0,"offset");let t=this[e],n=this[e+7];(void 0===t||void 0===n)&&av(e,this.length-8);let r=t+256*this[++e]+65536*this[++e]+16777216*this[++e],a=this[++e]+256*this[++e]+65536*this[++e]+16777216*n;return BigInt(r)+(BigInt(a)<<BigInt(32))}),r3.prototype.readBigUInt64BE=a_(function(e){ag(e>>>=0,"offset");let t=this[e],n=this[e+7];(void 0===t||void 0===n)&&av(e,this.length-8);let r=16777216*t+65536*this[++e]+256*this[++e]+this[++e],a=16777216*this[++e]+65536*this[++e]+256*this[++e]+n;return(BigInt(r)<<BigInt(32))+BigInt(a)}),r3.prototype.readIntLE=function(e,t,n){e>>>=0,t>>>=0,n||ao(e,t,this.length);let r=this[e],a=1,i=0;for(;++i<t&&(a*=256);)r+=this[e+i]*a;return r>=(a*=128)&&(r-=Math.pow(2,8*t)),r},r3.prototype.readIntBE=function(e,t,n){e>>>=0,t>>>=0,n||ao(e,t,this.length);let r=t,a=1,i=this[e+--r];for(;r>0&&(a*=256);)i+=this[e+--r]*a;return i>=(a*=128)&&(i-=Math.pow(2,8*t)),i},r3.prototype.readInt8=function(e,t){return(e>>>=0,t||ao(e,1,this.length),128&this[e])?-((255-this[e]+1)*1):this[e]},r3.prototype.readInt16LE=function(e,t){e>>>=0,t||ao(e,2,this.length);let n=this[e]|this[e+1]<<8;return 32768&n?4294901760|n:n},r3.prototype.readInt16BE=function(e,t){e>>>=0,t||ao(e,2,this.length);let n=this[e+1]|this[e]<<8;return 32768&n?4294901760|n:n},r3.prototype.readInt32LE=function(e,t){return e>>>=0,t||ao(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24},r3.prototype.readInt32BE=function(e,t){return e>>>=0,t||ao(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]},r3.prototype.readBigInt64LE=a_(function(e){ag(e>>>=0,"offset");let t=this[e],n=this[e+7];(void 0===t||void 0===n)&&av(e,this.length-8);let r=this[e+4]+256*this[e+5]+65536*this[e+6]+(n<<24// Overflow
);return(BigInt(r)<<BigInt(32))+BigInt(t+256*this[++e]+65536*this[++e]+16777216*this[++e])}),r3.prototype.readBigInt64BE=a_(function(e){ag(e>>>=0,"offset");let t=this[e],n=this[e+7];(void 0===t||void 0===n)&&av(e,this.length-8);let r=(t<<24)+// Overflow
65536*this[++e]+256*this[++e]+this[++e];return(BigInt(r)<<BigInt(32))+BigInt(16777216*this[++e]+65536*this[++e]+256*this[++e]+n)}),r3.prototype.readFloatLE=function(e,t){return e>>>=0,t||ao(e,4,this.length),w(this,e,!0,23,4)},r3.prototype.readFloatBE=function(e,t){return e>>>=0,t||ao(e,4,this.length),w(this,e,!1,23,4)},r3.prototype.readDoubleLE=function(e,t){return e>>>=0,t||ao(e,8,this.length),w(this,e,!0,52,8)},r3.prototype.readDoubleBE=function(e,t){return e>>>=0,t||ao(e,8,this.length),w(this,e,!1,52,8)},r3.prototype.writeUintLE=r3.prototype.writeUIntLE=function(e,t,n,r){if(e=+e,t>>>=0,n>>>=0,!r){let r=Math.pow(2,8*n)-1;as(this,e,t,n,r,0)}let a=1,i=0;for(this[t]=255&e;++i<n&&(a*=256);)this[t+i]=e/a&255;return t+n},r3.prototype.writeUintBE=r3.prototype.writeUIntBE=function(e,t,n,r){if(e=+e,t>>>=0,n>>>=0,!r){let r=Math.pow(2,8*n)-1;as(this,e,t,n,r,0)}let a=n-1,i=1;for(this[t+a]=255&e;--a>=0&&(i*=256);)this[t+a]=e/i&255;return t+n},r3.prototype.writeUint8=r3.prototype.writeUInt8=function(e,t,n){return e=+e,t>>>=0,n||as(this,e,t,1,255,0),this[t]=255&e,t+1},r3.prototype.writeUint16LE=r3.prototype.writeUInt16LE=function(e,t,n){return e=+e,t>>>=0,n||as(this,e,t,2,65535,0),this[t]=255&e,this[t+1]=e>>>8,t+2},r3.prototype.writeUint16BE=r3.prototype.writeUInt16BE=function(e,t,n){return e=+e,t>>>=0,n||as(this,e,t,2,65535,0),this[t]=e>>>8,this[t+1]=255&e,t+2},r3.prototype.writeUint32LE=r3.prototype.writeUInt32LE=function(e,t,n){return e=+e,t>>>=0,n||as(this,e,t,4,4294967295,0),this[t+3]=e>>>24,this[t+2]=e>>>16,this[t+1]=e>>>8,this[t]=255&e,t+4},r3.prototype.writeUint32BE=r3.prototype.writeUInt32BE=function(e,t,n){return e=+e,t>>>=0,n||as(this,e,t,4,4294967295,0),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e,t+4},r3.prototype.writeBigUInt64LE=a_(function(e,t=0){return al(this,e,t,BigInt(0),BigInt("0xffffffffffffffff"))}),r3.prototype.writeBigUInt64BE=a_(function(e,t=0){return au(this,e,t,BigInt(0),BigInt("0xffffffffffffffff"))}),r3.prototype.writeIntLE=function(e,t,n,r){if(e=+e,t>>>=0,!r){let r=Math.pow(2,8*n-1);as(this,e,t,n,r-1,-r)}let a=0,i=1,o=0;for(this[t]=255&e;++a<n&&(i*=256);)e<0&&0===o&&0!==this[t+a-1]&&(o=1),this[t+a]=(e/i>>0)-o&255;return t+n},r3.prototype.writeIntBE=function(e,t,n,r){if(e=+e,t>>>=0,!r){let r=Math.pow(2,8*n-1);as(this,e,t,n,r-1,-r)}let a=n-1,i=1,o=0;for(this[t+a]=255&e;--a>=0&&(i*=256);)e<0&&0===o&&0!==this[t+a+1]&&(o=1),this[t+a]=(e/i>>0)-o&255;return t+n},r3.prototype.writeInt8=function(e,t,n){return e=+e,t>>>=0,n||as(this,e,t,1,127,-128),e<0&&(e=255+e+1),this[t]=255&e,t+1},r3.prototype.writeInt16LE=function(e,t,n){return e=+e,t>>>=0,n||as(this,e,t,2,32767,-32768),this[t]=255&e,this[t+1]=e>>>8,t+2},r3.prototype.writeInt16BE=function(e,t,n){return e=+e,t>>>=0,n||as(this,e,t,2,32767,-32768),this[t]=e>>>8,this[t+1]=255&e,t+2},r3.prototype.writeInt32LE=function(e,t,n){return e=+e,t>>>=0,n||as(this,e,t,4,2147483647,-2147483648),this[t]=255&e,this[t+1]=e>>>8,this[t+2]=e>>>16,this[t+3]=e>>>24,t+4},r3.prototype.writeInt32BE=function(e,t,n){return e=+e,t>>>=0,n||as(this,e,t,4,2147483647,-2147483648),e<0&&(e=4294967295+e+1),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e,t+4},r3.prototype.writeBigInt64LE=a_(function(e,t=0){return al(this,e,t,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))}),r3.prototype.writeBigInt64BE=a_(function(e,t=0){return au(this,e,t,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))}),r3.prototype.writeFloatLE=function(e,t,n){return af(this,e,t,!0,n)},r3.prototype.writeFloatBE=function(e,t,n){return af(this,e,t,!1,n)},r3.prototype.writeDoubleLE=function(e,t,n){return ad(this,e,t,!0,n)},r3.prototype.writeDoubleBE=function(e,t,n){return ad(this,e,t,!1,n)},// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
r3.prototype.copy=function(e,t,n,r){if(!r3.isBuffer(e))throw TypeError("argument should be a Buffer");// Copy 0 bytes; we're done
if(n||(n=0),r||0===r||(r=this.length),t>=e.length&&(t=e.length),t||(t=0),r>0&&r<n&&(r=n),r===n||0===e.length||0===this.length)return 0;// Fatal error conditions
if(t<0)throw RangeError("targetStart out of bounds");if(n<0||n>=this.length)throw RangeError("Index out of range");if(r<0)throw RangeError("sourceEnd out of bounds");r>this.length&&(r=this.length),e.length-t<r-n&&(r=e.length-t+n);let a=r-n;return this===e&&"function"==typeof Uint8Array.prototype.copyWithin?this.copyWithin(t,n,r):Uint8Array.prototype.set.call(e,this.subarray(n,r),t),a},// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
r3.prototype.fill=function(e,t,n,r){let a;// Handle string cases:
if("string"==typeof e){if("string"==typeof t?(r=t,t=0,n=this.length):"string"==typeof n&&(r=n,n=this.length),void 0!==r&&"string"!=typeof r)throw TypeError("encoding must be a string");if("string"==typeof r&&!r3.isEncoding(r))throw TypeError("Unknown encoding: "+r);if(1===e.length){let t=e.charCodeAt(0);("utf8"===r&&t<128||"latin1"===r)&&(e=t)}}else"number"==typeof e?e&=255:"boolean"==typeof e&&(e=Number(e));// Invalid ranges are not set to a default, so can range check early.
if(t<0||this.length<t||this.length<n)throw RangeError("Out of range index");if(n<=t)return this;if(t>>>=0,n=void 0===n?this.length:n>>>0,e||(e=0),"number"==typeof e)for(a=t;a<n;++a)this[a]=e;else{let i=r3.isBuffer(e)?e:r3.from(e,r),o=i.length;if(0===o)throw TypeError('The value "'+e+'" is invalid for argument "value"');for(a=0;a<n-t;++a)this[a+t]=i[a%o]}return this};// CUSTOM ERRORS
// =============
// Simplified versions from Node, changed for Buffer-only usage
const ap={};function ah(e,t,n){ap[e]=class extends n{constructor(){super(),Object.defineProperty(this,"message",{value:t.apply(this,arguments),writable:!0,configurable:!0}),// Add the error code to the name to include it in the stack trace.
this.name=`${this.name} [${e}]`,// Access the stack to generate the error message including the error code
// from the name.
this.stack// eslint-disable-line no-unused-expressions
,// Reset the name to the actual name.
delete this.name}get code(){return e}set code(e){Object.defineProperty(this,"code",{configurable:!0,enumerable:!0,value:e,writable:!0})}toString(){return`${this.name} [${e}]: ${this.message}`}}}function ay(e){let t="",n=e.length,r="-"===e[0]?1:0;for(;n>=r+4;n-=3)t=`_${e.slice(n-3,n)}${t}`;return`${e.slice(0,n)}${t}`}function am(e,t,n,r,a,i){if(e>n||e<t){let r;let a="bigint"==typeof t?"n":"";throw r=i>3?0===t||t===BigInt(0)?`>= 0${a} and < 2${a} ** ${(i+1)*8}${a}`:`>= -(2${a} ** ${(i+1)*8-1}${a}) and < 2 ** ${(i+1)*8-1}${a}`:`>= ${t}${a} and <= ${n}${a}`,new ap.ERR_OUT_OF_RANGE("value",r,e)}ag(a,"offset"),(void 0===r[a]||void 0===r[a+i])&&av(a,r.length-(i+1))}function ag(e,t){if("number"!=typeof e)throw new ap.ERR_INVALID_ARG_TYPE(t,"number",e)}function av(e,t,n){if(Math.floor(e)!==e)throw ag(e,n),new ap.ERR_OUT_OF_RANGE(n||"offset","an integer",e);if(t<0)throw new ap.ERR_BUFFER_OUT_OF_BOUNDS;throw new ap.ERR_OUT_OF_RANGE(n||"offset",`>= ${n?1:0} and <= ${t}`,e)}ah("ERR_BUFFER_OUT_OF_BOUNDS",function(e){return e?`${e} is outside of buffer bounds`:"Attempt to access memory outside buffer bounds"},RangeError),ah("ERR_INVALID_ARG_TYPE",function(e,t){return`The "${e}" argument must be of type number. Received type ${typeof t}`},TypeError),ah("ERR_OUT_OF_RANGE",function(e,t,n){let r=`The value of "${e}" is out of range.`,a=n;return Number.isInteger(n)&&Math.abs(n)>4294967296?a=ay(String(n)):"bigint"==typeof n&&(a=String(n),(n>BigInt(2)**BigInt(32)||n<-(BigInt(2)**BigInt(32)))&&(a=ay(a)),a+="n"),r+=` It must be ${t}. Received ${a}`},RangeError);// HELPER FUNCTIONS
// ================
const ab=/[^+/0-9A-Za-z-_]/g;function aw(e,t){let n;t=t||1/0;let r=e.length,a=null,i=[];for(let o=0;o<r;++o){// is surrogate component
if((n=e.charCodeAt(o))>55295&&n<57344){// last char was a lead
if(!a){// no lead yet
if(n>56319||o+1===r){// unexpected trail
(t-=3)>-1&&i.push(239,191,189);continue}// valid lead
a=n;continue}// 2 leads in a row
if(n<56320){(t-=3)>-1&&i.push(239,191,189),a=n;continue}// valid surrogate pair
n=(a-55296<<10|n-56320)+65536}else a&&(t-=3)>-1&&i.push(239,191,189);// encode utf8
if(a=null,n<128){if((t-=1)<0)break;i.push(n)}else if(n<2048){if((t-=2)<0)break;i.push(n>>6|192,63&n|128)}else if(n<65536){if((t-=3)<0)break;i.push(n>>12|224,n>>6&63|128,63&n|128)}else if(n<1114112){if((t-=4)<0)break;i.push(n>>18|240,n>>12&63|128,n>>6&63|128,63&n|128)}else throw Error("Invalid code point")}return i}function ak(e){return function(e){var t,n,r=function(e){var t=e.length;if(t%4>0)throw Error("Invalid string. Length must be a multiple of 4");// Trim off extra bytes after placeholder bytes are found
// See: https://github.com/beatgammit/base64-js/issues/42
var n=e.indexOf("=");-1===n&&(n=t);var r=n===t?0:4-n%4;return[n,r]}(e),a=r[0],i=r[1],o=new rJ((a+i)*3/4-i),s=0,l=i>0?a-4:a;for(n=0;n<l;n+=4)t=rY[e.charCodeAt(n)]<<18|rY[e.charCodeAt(n+1)]<<12|rY[e.charCodeAt(n+2)]<<6|rY[e.charCodeAt(n+3)],o[s++]=t>>16&255,o[s++]=t>>8&255,o[s++]=255&t;return 2===i&&(t=rY[e.charCodeAt(n)]<<2|rY[e.charCodeAt(n+1)]>>4,o[s++]=255&t),1===i&&(t=rY[e.charCodeAt(n)]<<10|rY[e.charCodeAt(n+1)]<<4|rY[e.charCodeAt(n+2)]>>2,o[s++]=t>>8&255,o[s++]=255&t),o}(function(e){// Node converts strings with length < 2 to ''
if(// Node strips out invalid characters like \n and \t from the string, base64-js does not
(e=// Node takes equal signs as end of the Base64 encoding
(e=e.split("=")[0]).trim().replace(ab,"")).length<2)return"";// Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
for(;e.length%4!=0;)e+="=";return e}(e))}function aE(e,t,n,r){let a;for(a=0;a<r&&!(a+n>=t.length)&&!(a>=e.length);++a)t[a+n]=e[a];return a}// ArrayBuffer or Uint8Array objects from other contexts (i.e. iframes) do not pass
// the `instanceof` check but they should be treated as of that type.
// See: https://github.com/feross/buffer/issues/166
function aS(e,t){return e instanceof t||null!=e&&null!=e.constructor&&null!=e.constructor.name&&e.constructor.name===t.name}// Create lookup table for `toString('hex')`
// See: https://github.com/feross/buffer/issues/219
const ax=function(){let e="0123456789abcdef",t=Array(256);for(let n=0;n<16;++n){let r=16*n;for(let a=0;a<16;++a)t[r+a]=e[n]+e[a]}return t}();// Return not function with Error if BigInt not supported
function a_(e){return"undefined"==typeof BigInt?aP:e}function aP(){throw Error("BigInt not supported")}// detect ReactNative environment
const aC="undefined"!=typeof navigator&&"string"==typeof navigator.product&&"reactnative"===navigator.product.toLowerCase(),aI={websocket:class extends rD{/**
     * WebSocket transport constructor.
     *
     * @api {Object} connection options
     * @api public
     */constructor(e){super(e),this.supportsBinary=!e.forceBase64}/**
     * Transport name.
     *
     * @api public
     */get name(){return"websocket"}/**
     * Opens socket.
     *
     * @api private
     */doOpen(){if(!this.check())return;let e=this.uri(),t=this.opts.protocols,n=aC?{}:rP(this.opts,"agent","perMessageDeflate","pfx","key","passphrase","cert","ca","ciphers","rejectUnauthorized","localAddress","protocolVersion","origin","maxPayload","family","checkServerIdentity");this.opts.extraHeaders&&(n.headers=this.opts.extraHeaders);try{this.ws=aC?new rK(e,t,n):t?new rK(e,t):new rK(e)}catch(e){return this.emitReserved("error",e)}this.ws.binaryType=this.socket.binaryType||"arraybuffer",this.addEventListeners()}/**
     * Adds event listeners to the socket
     *
     * @api private
     */addEventListeners(){this.ws.onopen=()=>{this.opts.autoUnref&&this.ws._socket.unref(),this.onOpen()},this.ws.onclose=e=>this.onClose({description:"websocket connection closed",context:e}),this.ws.onmessage=e=>this.onData(e.data),this.ws.onerror=e=>this.onError("websocket error",e)}/**
     * Writes data to socket.
     *
     * @param {Array} array of packets.
     * @api private
     */write(e){this.writable=!1;// encodePacket efficient as it uses WS framing
// no need for encodePayload
for(let t=0;t<e.length;t++){let n=e[t],r=t===e.length-1;ry(n,this.supportsBinary,e=>{// Sometimes the websocket has already been closed but the browser didn't
// have a chance of informing us about it yet, in that case send will
// throw an error
try{this.ws.send(e)}catch(e){}r&&rW(()=>{this.writable=!0,this.emitReserved("drain")},this.setTimeoutFn)})}}/**
     * Closes socket.
     *
     * @api private
     */doClose(){void 0!==this.ws&&(this.ws.close(),this.ws=null)}/**
     * Generates uri for connection.
     *
     * @api private
     */uri(){let e=this.query||{},t=this.opts.secure?"wss":"ws",n="";this.opts.port&&("wss"===t&&443!==Number(this.opts.port)||"ws"===t&&80!==Number(this.opts.port))&&(n=":"+this.opts.port),this.opts.timestampRequests&&(e[this.opts.timestampParam]=rj()),this.supportsBinary||(e.b64=1);let r=rU(e),a=-1!==this.opts.hostname.indexOf(":");return t+"://"+(a?"["+this.opts.hostname+"]":this.opts.hostname)+n+this.opts.path+(r.length?"?"+r:"")}/**
     * Feature detection for WebSocket.
     *
     * @return {Boolean} whether this transport is available.
     * @api public
     */check(){return!!rK}},polling:class extends rD{/**
     * XHR Polling constructor.
     *
     * @param {Object} opts
     * @api public
     */constructor(e){if(super(e),this.polling=!1,"undefined"!=typeof location){let t="https:"===location.protocol,n=location.port;n||(n=t?"443":"80"),this.xd="undefined"!=typeof location&&e.hostname!==location.hostname||n!==e.port,this.xs=e.secure!==t}/**
         * XHR supports binary
         */let t=e&&e.forceBase64;this.supportsBinary=rV&&!t}/**
     * Transport name.
     */get name(){return"polling"}/**
     * Opens the socket (triggers polling). We write a PING message to determine
     * when the transport is open.
     *
     * @api private
     */doOpen(){this.poll()}/**
     * Pauses polling.
     *
     * @param {Function} callback upon buffers are flushed and transport is paused
     * @api private
     */pause(e){this.readyState="pausing";let t=()=>{this.readyState="paused",e()};if(this.polling||!this.writable){let e=0;this.polling&&(e++,this.once("pollComplete",function(){--e||t()})),this.writable||(e++,this.once("drain",function(){--e||t()}))}else t()}/**
     * Starts polling cycle.
     *
     * @api public
     */poll(){this.polling=!0,this.doPoll(),this.emitReserved("poll")}/**
     * Overloads onData to detect payloads.
     *
     * @api private
     */onData(e){rx(e,this.socket.binaryType).forEach(e=>{// if its a close packet, we close the ongoing requests
if("opening"===this.readyState&&"open"===e.type&&this.onOpen(),"close"===e.type)return this.onClose({description:"transport closed by the server"}),!1;// otherwise bypass onData and handle the message
this.onPacket(e)}),"closed"!==this.readyState&&(// if we got data we're not polling
this.polling=!1,this.emitReserved("pollComplete"),"open"===this.readyState&&this.poll())}/**
     * For polling, send a close packet.
     *
     * @api private
     */doClose(){let e=()=>{this.write([{type:"close"}])};"open"===this.readyState?e():// handshaking is in progress (GH-164)
this.once("open",e)}/**
     * Writes a packets payload.
     *
     * @param {Array} data packets
     * @param {Function} drain callback
     * @api private
     */write(e){this.writable=!1,rS(e,e=>{this.doWrite(e,()=>{this.writable=!0,this.emitReserved("drain")})})}/**
     * Generates uri for connection.
     *
     * @api private
     */uri(){let e=this.query||{},t=this.opts.secure?"https":"http",n="";!1!==this.opts.timestampRequests&&(e[this.opts.timestampParam]=rj()),this.supportsBinary||e.sid||(e.b64=1),this.opts.port&&("https"===t&&443!==Number(this.opts.port)||"http"===t&&80!==Number(this.opts.port))&&(n=":"+this.opts.port);let r=rU(e),a=-1!==this.opts.hostname.indexOf(":");return t+"://"+(a?"["+this.opts.hostname+"]":this.opts.hostname)+n+this.opts.path+(r.length?"?"+r:"")}/**
     * Creates a request.
     *
     * @param {String} method
     * @api private
     */request(e={}){return Object.assign(e,{xd:this.xd,xs:this.xs},this.opts),new rH(this.uri(),e)}/**
     * Sends data.
     *
     * @param {String} data to send.
     * @param {Function} called upon flush.
     * @api private
     */doWrite(e,t){let n=this.request({method:"POST",data:e});n.on("success",t),n.on("error",(e,t)=>{this.onError("xhr post error",e,t)})}/**
     * Starts a poll cycle.
     *
     * @api private
     */doPoll(){let e=this.request();e.on("data",this.onData.bind(this)),e.on("error",(e,t)=>{this.onError("xhr poll error",e,t)}),this.pollXhr=e}}},aO=/^(?:(?![^:@]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,aN=["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"];function aD(e){let t=e,n=e.indexOf("["),r=e.indexOf("]");-1!=n&&-1!=r&&(e=e.substring(0,n)+e.substring(n,r).replace(/:/g,";")+e.substring(r,e.length));let a=aO.exec(e||""),i={},o=14;for(;o--;)i[aN[o]]=a[o]||"";return -1!=n&&-1!=r&&(i.source=t,i.host=i.host.substring(1,i.host.length-1).replace(/;/g,":"),i.authority=i.authority.replace("[","").replace("]","").replace(/;/g,":"),i.ipv6uri=!0),i.pathNames=function(e,t){let n=t.replace(/\/{2,9}/g,"/").split("/");return("/"==t.slice(0,1)||0===t.length)&&n.splice(0,1),"/"==t.slice(-1)&&n.splice(n.length-1,1),n}(0,i.path),i.queryKey=function(e,t){let n={};return t.replace(/(?:^|&)([^&=]*)=?([^&]*)/g,function(e,t,r){t&&(n[t]=r)}),n}(0,i.query),i}class aM extends r_{/**
     * Socket constructor.
     *
     * @param {String|Object} uri or options
     * @param {Object} opts - options
     * @api public
     */constructor(e,t={}){super(),e&&"object"==typeof e&&(t=e,e=null),e?(e=aD(e),t.hostname=e.host,t.secure="https"===e.protocol||"wss"===e.protocol,t.port=e.port,e.query&&(t.query=e.query)):t.host&&(t.hostname=aD(t.host).host),rO(this,t),this.secure=null!=t.secure?t.secure:"undefined"!=typeof location&&"https:"===location.protocol,t.hostname&&!t.port&&(t.port=this.secure?"443":"80"),this.hostname=t.hostname||("undefined"!=typeof location?location.hostname:"localhost"),this.port=t.port||("undefined"!=typeof location&&location.port?location.port:this.secure?"443":"80"),this.transports=t.transports||["polling","websocket"],this.readyState="",this.writeBuffer=[],this.prevBufferLen=0,this.opts=Object.assign({path:"/engine.io",agent:!1,withCredentials:!1,upgrade:!0,timestampParam:"t",rememberUpgrade:!1,rejectUnauthorized:!0,perMessageDeflate:{threshold:1024},transportOptions:{},closeOnBeforeunload:!0},t),this.opts.path=this.opts.path.replace(/\/$/,"")+"/","string"==typeof this.opts.query&&(this.opts.query=function(e){let t={},n=e.split("&");for(let e=0,r=n.length;e<r;e++){let r=n[e].split("=");t[decodeURIComponent(r[0])]=decodeURIComponent(r[1])}return t}(this.opts.query)),// set on handshake
this.id=null,this.upgrades=null,this.pingInterval=null,this.pingTimeout=null,// set on heartbeat
this.pingTimeoutTimer=null,"function"==typeof addEventListener&&(this.opts.closeOnBeforeunload&&(// Firefox closes the connection when the "beforeunload" event is emitted but not Chrome. This event listener
// ensures every browser behaves the same (no "disconnect" event at the Socket.IO level when the page is
// closed/reloaded)
this.beforeunloadEventListener=()=>{this.transport&&(// silently close the transport
this.transport.removeAllListeners(),this.transport.close())},addEventListener("beforeunload",this.beforeunloadEventListener,!1)),"localhost"!==this.hostname&&(this.offlineEventListener=()=>{this.onClose("transport close",{description:"network connection lost"})},addEventListener("offline",this.offlineEventListener,!1))),this.open()}/**
     * Creates transport of the given type.
     *
     * @param {String} transport name
     * @return {Transport}
     * @api private
     */createTransport(e){let t=Object.assign({},this.opts.query);// append engine.io protocol identifier
t.EIO=4,// transport name
t.transport=e,this.id&&(t.sid=this.id);let n=Object.assign({},this.opts.transportOptions[e],this.opts,{query:t,socket:this,hostname:this.hostname,secure:this.secure,port:this.port});return new aI[e](n)}/**
     * Initializes transport to use and starts probe.
     *
     * @api private
     */open(){let e;if(this.opts.rememberUpgrade&&aM.priorWebsocketSuccess&&-1!==this.transports.indexOf("websocket"))e="websocket";else if(0===this.transports.length){// Emit error on next tick so it can be listened to
this.setTimeoutFn(()=>{this.emitReserved("error","No transports available")},0);return}else e=this.transports[0];this.readyState="opening";// Retry with the next transport if the transport is disabled (jsonp: false)
try{e=this.createTransport(e)}catch(e){this.transports.shift(),this.open();return}e.open(),this.setTransport(e)}/**
     * Sets the current transport. Disables the existing one (if any).
     *
     * @api private
     */setTransport(e){this.transport&&this.transport.removeAllListeners(),// set up transport
this.transport=e,// set up transport listeners
e.on("drain",this.onDrain.bind(this)).on("packet",this.onPacket.bind(this)).on("error",this.onError.bind(this)).on("close",e=>this.onClose("transport close",e))}/**
     * Probes a transport.
     *
     * @param {String} transport name
     * @api private
     */probe(e){let t=this.createTransport(e),n=!1;aM.priorWebsocketSuccess=!1;let r=()=>{n||(t.send([{type:"ping",data:"probe"}]),t.once("packet",e=>{if(!n){if("pong"===e.type&&"probe"===e.data)this.upgrading=!0,this.emitReserved("upgrading",t),t&&(aM.priorWebsocketSuccess="websocket"===t.name,this.transport.pause(()=>{n||"closed"===this.readyState||(u(),this.setTransport(t),t.send([{type:"upgrade"}]),this.emitReserved("upgrade",t),t=null,this.upgrading=!1,this.flush())}));else{let e=Error("probe error");// @ts-ignore
e.transport=t.name,this.emitReserved("upgradeError",e)}}}))};function a(){n||(// Any callback called by transport should be ignored since now
n=!0,u(),t.close(),t=null)}// Handle any error that happens while probing
let i=e=>{let n=Error("probe error: "+e);// @ts-ignore
n.transport=t.name,a(),this.emitReserved("upgradeError",n)};function o(){i("transport closed")}// When the socket is closed while we're probing
function s(){i("socket closed")}// When the socket is upgraded while we're probing
function l(e){t&&e.name!==t.name&&a()}// Remove all listeners on the transport and on self
let u=()=>{t.removeListener("open",r),t.removeListener("error",i),t.removeListener("close",o),this.off("close",s),this.off("upgrading",l)};t.once("open",r),t.once("error",i),t.once("close",o),this.once("close",s),this.once("upgrading",l),t.open()}/**
     * Called when connection is deemed open.
     *
     * @api private
     */onOpen(){// we check for `readyState` in case an `open`
// listener already closed the socket
if(this.readyState="open",aM.priorWebsocketSuccess="websocket"===this.transport.name,this.emitReserved("open"),this.flush(),"open"===this.readyState&&this.opts.upgrade&&this.transport.pause){let e=0,t=this.upgrades.length;for(;e<t;e++)this.probe(this.upgrades[e])}}/**
     * Handles a packet.
     *
     * @api private
     */onPacket(e){if("opening"===this.readyState||"open"===this.readyState||"closing"===this.readyState)switch(this.emitReserved("packet",e),// Socket is live - any packet counts
this.emitReserved("heartbeat"),e.type){case"open":this.onHandshake(JSON.parse(e.data));break;case"ping":this.resetPingTimeout(),this.sendPacket("pong"),this.emitReserved("ping"),this.emitReserved("pong");break;case"error":let t=Error("server error");// @ts-ignore
t.code=e.data,this.onError(t);break;case"message":this.emitReserved("data",e.data),this.emitReserved("message",e.data)}}/**
     * Called upon handshake completion.
     *
     * @param {Object} data - handshake obj
     * @api private
     */onHandshake(e){this.emitReserved("handshake",e),this.id=e.sid,this.transport.query.sid=e.sid,this.upgrades=this.filterUpgrades(e.upgrades),this.pingInterval=e.pingInterval,this.pingTimeout=e.pingTimeout,this.maxPayload=e.maxPayload,this.onOpen(),"closed"!==this.readyState&&this.resetPingTimeout()}/**
     * Sets and resets ping timeout timer based on server pings.
     *
     * @api private
     */resetPingTimeout(){this.clearTimeoutFn(this.pingTimeoutTimer),this.pingTimeoutTimer=this.setTimeoutFn(()=>{this.onClose("ping timeout")},this.pingInterval+this.pingTimeout),this.opts.autoUnref&&this.pingTimeoutTimer.unref()}/**
     * Called on `drain` event
     *
     * @api private
     */onDrain(){this.writeBuffer.splice(0,this.prevBufferLen),// setting prevBufferLen = 0 is very important
// for example, when upgrading, upgrade packet is sent over,
// and a nonzero prevBufferLen could cause problems on `drain`
this.prevBufferLen=0,0===this.writeBuffer.length?this.emitReserved("drain"):this.flush()}/**
     * Flush write buffers.
     *
     * @api private
     */flush(){if("closed"!==this.readyState&&this.transport.writable&&!this.upgrading&&this.writeBuffer.length){let e=this.getWritablePackets();this.transport.send(e),// keep track of current length of writeBuffer
// splice writeBuffer and callbackBuffer on `drain`
this.prevBufferLen=e.length,this.emitReserved("flush")}}/**
     * Ensure the encoded size of the writeBuffer is below the maxPayload value sent by the server (only for HTTP
     * long-polling)
     *
     * @private
     */getWritablePackets(){let e=this.maxPayload&&"polling"===this.transport.name&&this.writeBuffer.length>1;if(!e)return this.writeBuffer;let t=1;// first packet type
for(let e=0;e<this.writeBuffer.length;e++){let n=this.writeBuffer[e].data;if(n&&(t+="string"==typeof n?function(e){let t=0,n=0;for(let r=0,a=e.length;r<a;r++)(t=e.charCodeAt(r))<128?n+=1:t<2048?n+=2:t<55296||t>=57344?n+=3:(r++,n+=4);return n}(n):Math.ceil(1.33*(n.byteLength||n.size))),e>0&&t>this.maxPayload)return this.writeBuffer.slice(0,e);t+=2}return this.writeBuffer}/**
     * Sends a message.
     *
     * @param {String} message.
     * @param {Function} callback function.
     * @param {Object} options.
     * @return {Socket} for chaining.
     * @api public
     */write(e,t,n){return this.sendPacket("message",e,t,n),this}send(e,t,n){return this.sendPacket("message",e,t,n),this}/**
     * Sends a packet.
     *
     * @param {String} packet type.
     * @param {String} data.
     * @param {Object} options.
     * @param {Function} callback function.
     * @api private
     */sendPacket(e,t,n,r){if("function"==typeof t&&(r=t,t=void 0),"function"==typeof n&&(r=n,n=null),"closing"===this.readyState||"closed"===this.readyState)return;(n=n||{}).compress=!1!==n.compress;let a={type:e,data:t,options:n};this.emitReserved("packetCreate",a),this.writeBuffer.push(a),r&&this.once("flush",r),this.flush()}/**
     * Closes the connection.
     *
     * @api public
     */close(){let e=()=>{this.onClose("forced close"),this.transport.close()},t=()=>{this.off("upgrade",t),this.off("upgradeError",t),e()},n=()=>{// wait for upgrade to finish since we can't send packets while pausing a transport
this.once("upgrade",t),this.once("upgradeError",t)};return("opening"===this.readyState||"open"===this.readyState)&&(this.readyState="closing",this.writeBuffer.length?this.once("drain",()=>{this.upgrading?n():e()}):this.upgrading?n():e()),this}/**
     * Called upon transport error
     *
     * @api private
     */onError(e){aM.priorWebsocketSuccess=!1,this.emitReserved("error",e),this.onClose("transport error",e)}/**
     * Called upon transport close.
     *
     * @api private
     */onClose(e,t){("opening"===this.readyState||"open"===this.readyState||"closing"===this.readyState)&&(// clear timers
this.clearTimeoutFn(this.pingTimeoutTimer),// stop event from firing again for transport
this.transport.removeAllListeners("close"),// ensure transport won't stay open
this.transport.close(),// ignore further transport communication
this.transport.removeAllListeners(),"function"==typeof removeEventListener&&(removeEventListener("beforeunload",this.beforeunloadEventListener,!1),removeEventListener("offline",this.offlineEventListener,!1)),// set ready state
this.readyState="closed",// clear session id
this.id=null,// emit close event
this.emitReserved("close",e,t),// clean buffers after, so users can still
// grab the buffers on `close` event
this.writeBuffer=[],this.prevBufferLen=0)}/**
     * Filters upgrades, returning only those matching client transports.
     *
     * @param {Array} server upgrades
     * @api private
     *
     */filterUpgrades(e){let t=[],n=0,r=e.length;for(;n<r;n++)~this.transports.indexOf(e[n])&&t.push(e[n]);return t}}aM.protocol=4,aM.protocol;var aT={};e(aT,"protocol",()=>az),e(aT,"PacketType",()=>E),e(aT,"Encoder",()=>aF),e(aT,"Decoder",()=>a$);const aA="function"==typeof ArrayBuffer,aR=e=>"function"==typeof ArrayBuffer.isView?ArrayBuffer.isView(e):e.buffer instanceof ArrayBuffer,aL=Object.prototype.toString,aB="function"==typeof Blob||"undefined"!=typeof Blob&&"[object BlobConstructor]"===aL.call(Blob),aj="function"==typeof File||"undefined"!=typeof File&&"[object FileConstructor]"===aL.call(File);function aU(e){return aA&&(e instanceof ArrayBuffer||aR(e))||aB&&e instanceof Blob||aj&&e instanceof File}const az=5;(s=E||(E={}))[s.CONNECT=0]="CONNECT",s[s.DISCONNECT=1]="DISCONNECT",s[s.EVENT=2]="EVENT",s[s.ACK=3]="ACK",s[s.CONNECT_ERROR=4]="CONNECT_ERROR",s[s.BINARY_EVENT=5]="BINARY_EVENT",s[s.BINARY_ACK=6]="BINARY_ACK";class aF{/**
     * Encoder constructor
     *
     * @param {function} replacer - custom replacer to pass down to JSON.parse
     */constructor(e){this.replacer=e}/**
     * Encode a packet as a single string if non-binary, or as a
     * buffer sequence, depending on packet type.
     *
     * @param {Object} obj - packet object
     */encode(e){return(e.type===E.EVENT||e.type===E.ACK)&&function e(t,n){if(!t||"object"!=typeof t)return!1;if(Array.isArray(t)){for(let n=0,r=t.length;n<r;n++)if(e(t[n]))return!0;return!1}if(aU(t))return!0;if(t.toJSON&&"function"==typeof t.toJSON&&1==arguments.length)return e(t.toJSON(),!0);for(let n in t)if(Object.prototype.hasOwnProperty.call(t,n)&&e(t[n]))return!0;return!1}(e)?this.encodeAsBinary({type:e.type===E.EVENT?E.BINARY_EVENT:E.BINARY_ACK,nsp:e.nsp,data:e.data,id:e.id}):[this.encodeAsString(e)]}/**
     * Encode packet as string.
     */encodeAsString(e){// first is type
let t=""+e.type;return(e.type===E.BINARY_EVENT||e.type===E.BINARY_ACK)&&(t+=e.attachments+"-"),e.nsp&&"/"!==e.nsp&&(t+=e.nsp+","),null!=e.id&&(t+=e.id),null!=e.data&&(t+=JSON.stringify(e.data,this.replacer)),t}/**
     * Encode packet as 'buffer sequence' by removing blobs, and
     * deconstructing packet into object with placeholders and
     * a list of buffers.
     */encodeAsBinary(e){let t=function(e){let t=[],n=e.data;return e.data=function e(t,n){if(!t)return t;if(aU(t)){let e={_placeholder:!0,num:n.length};return n.push(t),e}if(Array.isArray(t)){let r=Array(t.length);for(let a=0;a<t.length;a++)r[a]=e(t[a],n);return r}if("object"==typeof t&&!(t instanceof Date)){let r={};for(let a in t)Object.prototype.hasOwnProperty.call(t,a)&&(r[a]=e(t[a],n));return r}return t}(n,t),e.attachments=t.length,{packet:e,buffers:t}}(e),n=this.encodeAsString(t.packet),r=t.buffers;return r.unshift(n),r;// write all the buffers
}}class a$ extends r_{/**
     * Decoder constructor
     *
     * @param {function} reviver - custom reviver to pass down to JSON.stringify
     */constructor(e){super(),this.reviver=e}/**
     * Decodes an encoded packet string into packet JSON.
     *
     * @param {String} obj - encoded packet
     */add(e){let t;if("string"==typeof e){if(this.reconstructor)throw Error("got plaintext data when reconstructing a packet");t=this.decodeString(e);let n=t.type===E.BINARY_EVENT;n||t.type===E.BINARY_ACK?(t.type=n?E.EVENT:E.ACK,// binary packet's json
this.reconstructor=new aG(t),0===t.attachments&&super.emitReserved("decoded",t)):super.emitReserved("decoded",t)}else if(aU(e)||e.base64){// raw binary data
if(this.reconstructor)(t=this.reconstructor.takeBinaryData(e))&&(// received final buffer
this.reconstructor=null,super.emitReserved("decoded",t));else throw Error("got binary data when not reconstructing a packet")}else throw Error("Unknown type: "+e)}/**
     * Decode a packet String (JSON data)
     *
     * @param {String} str
     * @return {Object} packet
     */decodeString(e){let t=0,n={type:Number(e.charAt(0))};if(void 0===E[n.type])throw Error("unknown packet type "+n.type);// look up attachments if type binary
if(n.type===E.BINARY_EVENT||n.type===E.BINARY_ACK){let r=t+1;for(;"-"!==e.charAt(++t)&&t!=e.length;);let a=e.substring(r,t);if(a!=Number(a)||"-"!==e.charAt(t))throw Error("Illegal attachments");n.attachments=Number(a)}// look up namespace (if any)
if("/"===e.charAt(t+1)){let r=t+1;for(;++t;){let n=e.charAt(t);if(","===n||t===e.length)break}n.nsp=e.substring(r,t)}else n.nsp="/";// look up id
let r=e.charAt(t+1);if(""!==r&&Number(r)==r){let r=t+1;for(;++t;){let n=e.charAt(t);if(null==n||Number(n)!=n){--t;break}if(t===e.length)break}n.id=Number(e.substring(r,t+1))}// look up json data
if(e.charAt(++t)){let r=this.tryParse(e.substr(t));if(a$.isPayloadValid(n.type,r))n.data=r;else throw Error("invalid payload")}return n}tryParse(e){try{return JSON.parse(e,this.reviver)}catch(e){return!1}}static isPayloadValid(e,t){switch(e){case E.CONNECT:return"object"==typeof t;case E.DISCONNECT:return void 0===t;case E.CONNECT_ERROR:return"string"==typeof t||"object"==typeof t;case E.EVENT:case E.BINARY_EVENT:return Array.isArray(t)&&t.length>0;case E.ACK:case E.BINARY_ACK:return Array.isArray(t)}}/**
     * Deallocates a parser's resources
     */destroy(){this.reconstructor&&(this.reconstructor.finishedReconstruction(),this.reconstructor=null)}}/**
 * A manager of a binary event's 'buffer sequence'. Should
 * be constructed whenever a packet of type BINARY_EVENT is
 * decoded.
 *
 * @param {Object} packet
 * @return {BinaryReconstructor} initialized reconstructor
 */class aG{constructor(e){this.packet=e,this.buffers=[],this.reconPack=e}/**
     * Method to be called when binary data received from connection
     * after a BINARY_EVENT packet.
     *
     * @param {Buffer | ArrayBuffer} binData - the raw binary data received
     * @return {null | Object} returns null if more binary data is expected or
     *   a reconstructed packet object if all buffers have been received.
     */takeBinaryData(e){if(this.buffers.push(e),this.buffers.length===this.reconPack.attachments){var t,n;// done with buffer list
let e=(t=this.reconPack,n=this.buffers,t.data=function e(t,n){if(!t)return t;if(t&&!0===t._placeholder){let e="number"==typeof t.num&&t.num>=0&&t.num<n.length;if(e)return n[t.num];// appropriate buffer (should be natural order anyway)
throw Error("illegal attachments")}if(Array.isArray(t))for(let r=0;r<t.length;r++)t[r]=e(t[r],n);else if("object"==typeof t)for(let r in t)Object.prototype.hasOwnProperty.call(t,r)&&(t[r]=e(t[r],n));return t}(t.data,n),delete t.attachments,t);return this.finishedReconstruction(),e}return null}/**
     * Cleans up binary packet reconstruction variables.
     */finishedReconstruction(){this.reconPack=null,this.buffers=[]}}function aV(e,t,n){return e.on(t,n),function(){e.off(t,n)}}/**
 * Internal events.
 * These events can't be emitted by the user.
 */const aH=Object.freeze({connect:1,connect_error:1,disconnect:1,disconnecting:1,// EventEmitter reserved events: https://nodejs.org/api/events.html#events_event_newlistener
newListener:1,removeListener:1});class aq extends r_{/**
     * `Socket` constructor.
     */constructor(e,t,n){super(),/**
         * Whether the socket is currently connected to the server.
         *
         * @example
         * const socket = io();
         *
         * socket.on("connect", () => {
         *   console.log(socket.connected); // true
         * });
         *
         * socket.on("disconnect", () => {
         *   console.log(socket.connected); // false
         * });
         */this.connected=!1,/**
         * Buffer for packets received before the CONNECT packet
         */this.receiveBuffer=[],/**
         * Buffer for packets that will be sent once the socket is connected
         */this.sendBuffer=[],this.ids=0,this.acks={},this.flags={},this.io=e,this.nsp=t,n&&n.auth&&(this.auth=n.auth),this.io._autoConnect&&this.open()}/**
     * Whether the socket is currently disconnected
     *
     * @example
     * const socket = io();
     *
     * socket.on("connect", () => {
     *   console.log(socket.disconnected); // false
     * });
     *
     * socket.on("disconnect", () => {
     *   console.log(socket.disconnected); // true
     * });
     */get disconnected(){return!this.connected}/**
     * Subscribe to open, close and packet events
     *
     * @private
     */subEvents(){if(this.subs)return;let e=this.io;this.subs=[aV(e,"open",this.onopen.bind(this)),aV(e,"packet",this.onpacket.bind(this)),aV(e,"error",this.onerror.bind(this)),aV(e,"close",this.onclose.bind(this))]}/**
     * Whether the Socket will try to reconnect when its Manager connects or reconnects.
     *
     * @example
     * const socket = io();
     *
     * console.log(socket.active); // true
     *
     * socket.on("disconnect", (reason) => {
     *   if (reason === "io server disconnect") {
     *     // the disconnection was initiated by the server, you need to manually reconnect
     *     console.log(socket.active); // false
     *   }
     *   // else the socket will automatically try to reconnect
     *   console.log(socket.active); // true
     * });
     */get active(){return!!this.subs}/**
     * "Opens" the socket.
     *
     * @example
     * const socket = io({
     *   autoConnect: false
     * });
     *
     * socket.connect();
     */connect(){return this.connected||(this.subEvents(),this.io._reconnecting||this.io.open(),"open"===this.io._readyState&&this.onopen()),this}/**
     * Alias for {@link connect()}.
     */open(){return this.connect()}/**
     * Sends a `message` event.
     *
     * This method mimics the WebSocket.send() method.
     *
     * @see https://developer.mozilla.org/en-US/docs/Web/API/WebSocket/send
     *
     * @example
     * socket.send("hello");
     *
     * // this is equivalent to
     * socket.emit("message", "hello");
     *
     * @return self
     */send(...e){return e.unshift("message"),this.emit.apply(this,e),this}/**
     * Override `emit`.
     * If the event is in `events`, it's emitted normally.
     *
     * @example
     * socket.emit("hello", "world");
     *
     * // all serializable datastructures are supported (no need to call JSON.stringify)
     * socket.emit("hello", 1, "2", { 3: ["4"], 5: Uint8Array.from([6]) });
     *
     * // with an acknowledgement from the server
     * socket.emit("hello", "world", (val) => {
     *   // ...
     * });
     *
     * @return self
     */emit(e,...t){if(aH.hasOwnProperty(e))throw Error('"'+e.toString()+'" is a reserved event name');t.unshift(e);let n={type:E.EVENT,data:t};// event ack callback
if(n.options={},n.options.compress=!1!==this.flags.compress,"function"==typeof t[t.length-1]){let e=this.ids++,r=t.pop();this._registerAckCallback(e,r),n.id=e}let r=this.io.engine&&this.io.engine.transport&&this.io.engine.transport.writable,a=this.flags.volatile&&(!r||!this.connected);return a||(this.connected?(this.notifyOutgoingListeners(n),this.packet(n)):this.sendBuffer.push(n)),this.flags={},this}/**
     * @private
     */_registerAckCallback(e,t){let n=this.flags.timeout;if(void 0===n){this.acks[e]=t;return}// @ts-ignore
let r=this.io.setTimeoutFn(()=>{delete this.acks[e];for(let t=0;t<this.sendBuffer.length;t++)this.sendBuffer[t].id===e&&this.sendBuffer.splice(t,1);t.call(this,Error("operation has timed out"))},n);this.acks[e]=(...e)=>{// @ts-ignore
this.io.clearTimeoutFn(r),t.apply(this,[null,...e])}}/**
     * Sends a packet.
     *
     * @param packet
     * @private
     */packet(e){e.nsp=this.nsp,this.io._packet(e)}/**
     * Called upon engine `open`.
     *
     * @private
     */onopen(){"function"==typeof this.auth?this.auth(e=>{this.packet({type:E.CONNECT,data:e})}):this.packet({type:E.CONNECT,data:this.auth})}/**
     * Called upon engine or manager `error`.
     *
     * @param err
     * @private
     */onerror(e){this.connected||this.emitReserved("connect_error",e)}/**
     * Called upon engine `close`.
     *
     * @param reason
     * @param description
     * @private
     */onclose(e,t){this.connected=!1,delete this.id,this.emitReserved("disconnect",e,t)}/**
     * Called with socket packet.
     *
     * @param packet
     * @private
     */onpacket(e){let t=e.nsp===this.nsp;if(t)switch(e.type){case E.CONNECT:if(e.data&&e.data.sid){let t=e.data.sid;this.onconnect(t)}else this.emitReserved("connect_error",Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));break;case E.EVENT:case E.BINARY_EVENT:this.onevent(e);break;case E.ACK:case E.BINARY_ACK:this.onack(e);break;case E.DISCONNECT:this.ondisconnect();break;case E.CONNECT_ERROR:this.destroy();let n=Error(e.data.message);// @ts-ignore
n.data=e.data.data,this.emitReserved("connect_error",n)}}/**
     * Called upon a server event.
     *
     * @param packet
     * @private
     */onevent(e){let t=e.data||[];null!=e.id&&t.push(this.ack(e.id)),this.connected?this.emitEvent(t):this.receiveBuffer.push(Object.freeze(t))}emitEvent(e){if(this._anyListeners&&this._anyListeners.length){let t=this._anyListeners.slice();for(let n of t)n.apply(this,e)}super.emit.apply(this,e)}/**
     * Produces an ack callback to emit with an event.
     *
     * @private
     */ack(e){let t=this,n=!1;return function(...r){// prevent double callbacks
n||(n=!0,t.packet({type:E.ACK,id:e,data:r}))}}/**
     * Called upon a server acknowlegement.
     *
     * @param packet
     * @private
     */onack(e){let t=this.acks[e.id];"function"==typeof t&&(t.apply(this,e.data),delete this.acks[e.id])}/**
     * Called upon server connect.
     *
     * @private
     */onconnect(e){this.id=e,this.connected=!0,this.emitBuffered(),this.emitReserved("connect")}/**
     * Emit buffered events (received and emitted).
     *
     * @private
     */emitBuffered(){this.receiveBuffer.forEach(e=>this.emitEvent(e)),this.receiveBuffer=[],this.sendBuffer.forEach(e=>{this.notifyOutgoingListeners(e),this.packet(e)}),this.sendBuffer=[]}/**
     * Called upon server disconnect.
     *
     * @private
     */ondisconnect(){this.destroy(),this.onclose("io server disconnect")}/**
     * Called upon forced client/server side disconnections,
     * this method ensures the manager stops tracking us and
     * that reconnections don't get triggered for this.
     *
     * @private
     */destroy(){this.subs&&(// clean subscriptions to avoid reconnections
this.subs.forEach(e=>e()),this.subs=void 0),this.io._destroy(this)}/**
     * Disconnects the socket manually. In that case, the socket will not try to reconnect.
     *
     * If this is the last active Socket instance of the {@link Manager}, the low-level connection will be closed.
     *
     * @example
     * const socket = io();
     *
     * socket.on("disconnect", (reason) => {
     *   // console.log(reason); prints "io client disconnect"
     * });
     *
     * socket.disconnect();
     *
     * @return self
     */disconnect(){return this.connected&&this.packet({type:E.DISCONNECT}),// remove socket from pool
this.destroy(),this.connected&&this.onclose("io client disconnect"),this}/**
     * Alias for {@link disconnect()}.
     *
     * @return self
     */close(){return this.disconnect()}/**
     * Sets the compress flag.
     *
     * @example
     * socket.compress(false).emit("hello");
     *
     * @param compress - if `true`, compresses the sending data
     * @return self
     */compress(e){return this.flags.compress=e,this}/**
     * Sets a modifier for a subsequent event emission that the event message will be dropped when this socket is not
     * ready to send messages.
     *
     * @example
     * socket.volatile.emit("hello"); // the server may or may not receive it
     *
     * @returns self
     */get volatile(){return this.flags.volatile=!0,this}/**
     * Sets a modifier for a subsequent event emission that the callback will be called with an error when the
     * given number of milliseconds have elapsed without an acknowledgement from the server:
     *
     * @example
     * socket.timeout(5000).emit("my-event", (err) => {
     *   if (err) {
     *     // the server did not acknowledge the event in the given delay
     *   }
     * });
     *
     * @returns self
     */timeout(e){return this.flags.timeout=e,this}/**
     * Adds a listener that will be fired when any event is emitted. The event name is passed as the first argument to the
     * callback.
     *
     * @example
     * socket.onAny((event, ...args) => {
     *   console.log(`got ${event}`);
     * });
     *
     * @param listener
     */onAny(e){return this._anyListeners=this._anyListeners||[],this._anyListeners.push(e),this}/**
     * Adds a listener that will be fired when any event is emitted. The event name is passed as the first argument to the
     * callback. The listener is added to the beginning of the listeners array.
     *
     * @example
     * socket.prependAny((event, ...args) => {
     *   console.log(`got event ${event}`);
     * });
     *
     * @param listener
     */prependAny(e){return this._anyListeners=this._anyListeners||[],this._anyListeners.unshift(e),this}/**
     * Removes the listener that will be fired when any event is emitted.
     *
     * @example
     * const catchAllListener = (event, ...args) => {
     *   console.log(`got event ${event}`);
     * }
     *
     * socket.onAny(catchAllListener);
     *
     * // remove a specific listener
     * socket.offAny(catchAllListener);
     *
     * // or remove all listeners
     * socket.offAny();
     *
     * @param listener
     */offAny(e){if(!this._anyListeners)return this;if(e){let t=this._anyListeners;for(let n=0;n<t.length;n++)if(e===t[n]){t.splice(n,1);break}}else this._anyListeners=[];return this}/**
     * Returns an array of listeners that are listening for any event that is specified. This array can be manipulated,
     * e.g. to remove listeners.
     */listenersAny(){return this._anyListeners||[]}/**
     * Adds a listener that will be fired when any event is emitted. The event name is passed as the first argument to the
     * callback.
     *
     * Note: acknowledgements sent to the server are not included.
     *
     * @example
     * socket.onAnyOutgoing((event, ...args) => {
     *   console.log(`sent event ${event}`);
     * });
     *
     * @param listener
     */onAnyOutgoing(e){return this._anyOutgoingListeners=this._anyOutgoingListeners||[],this._anyOutgoingListeners.push(e),this}/**
     * Adds a listener that will be fired when any event is emitted. The event name is passed as the first argument to the
     * callback. The listener is added to the beginning of the listeners array.
     *
     * Note: acknowledgements sent to the server are not included.
     *
     * @example
     * socket.prependAnyOutgoing((event, ...args) => {
     *   console.log(`sent event ${event}`);
     * });
     *
     * @param listener
     */prependAnyOutgoing(e){return this._anyOutgoingListeners=this._anyOutgoingListeners||[],this._anyOutgoingListeners.unshift(e),this}/**
     * Removes the listener that will be fired when any event is emitted.
     *
     * @example
     * const catchAllListener = (event, ...args) => {
     *   console.log(`sent event ${event}`);
     * }
     *
     * socket.onAnyOutgoing(catchAllListener);
     *
     * // remove a specific listener
     * socket.offAnyOutgoing(catchAllListener);
     *
     * // or remove all listeners
     * socket.offAnyOutgoing();
     *
     * @param [listener] - the catch-all listener (optional)
     */offAnyOutgoing(e){if(!this._anyOutgoingListeners)return this;if(e){let t=this._anyOutgoingListeners;for(let n=0;n<t.length;n++)if(e===t[n]){t.splice(n,1);break}}else this._anyOutgoingListeners=[];return this}/**
     * Returns an array of listeners that are listening for any event that is specified. This array can be manipulated,
     * e.g. to remove listeners.
     */listenersAnyOutgoing(){return this._anyOutgoingListeners||[]}/**
     * Notify the listeners for each packet sent
     *
     * @param packet
     *
     * @private
     */notifyOutgoingListeners(e){if(this._anyOutgoingListeners&&this._anyOutgoingListeners.length){let t=this._anyOutgoingListeners.slice();for(let n of t)n.apply(this,e.data)}}}/**
 * Initialize backoff timer with `opts`.
 *
 * - `min` initial timeout in milliseconds [100]
 * - `max` max timeout [10000]
 * - `jitter` [0]
 * - `factor` [2]
 *
 * @param {Object} opts
 * @api public
 */function aW(e){e=e||{},this.ms=e.min||100,this.max=e.max||1e4,this.factor=e.factor||2,this.jitter=e.jitter>0&&e.jitter<=1?e.jitter:0,this.attempts=0}/**
 * Return the backoff duration.
 *
 * @return {Number}
 * @api public
 */aW.prototype.duration=function(){var e=this.ms*Math.pow(this.factor,this.attempts++);if(this.jitter){var t=Math.random(),n=Math.floor(t*this.jitter*e);e=(1&Math.floor(10*t))==0?e-n:e+n}return 0|Math.min(e,this.max)},/**
 * Reset the number of attempts.
 *
 * @api public
 */aW.prototype.reset=function(){this.attempts=0},/**
 * Set the minimum duration
 *
 * @api public
 */aW.prototype.setMin=function(e){this.ms=e},/**
 * Set the maximum duration
 *
 * @api public
 */aW.prototype.setMax=function(e){this.max=e},/**
 * Set the jitter
 *
 * @api public
 */aW.prototype.setJitter=function(e){this.jitter=e};class aK extends r_{constructor(e,t){var n;super(),this.nsps={},this.subs=[],e&&"object"==typeof e&&(t=e,e=void 0),(t=t||{}).path=t.path||"/socket.io",this.opts=t,rO(this,t),this.reconnection(!1!==t.reconnection),this.reconnectionAttempts(t.reconnectionAttempts||1/0),this.reconnectionDelay(t.reconnectionDelay||1e3),this.reconnectionDelayMax(t.reconnectionDelayMax||5e3),this.randomizationFactor(null!==(n=t.randomizationFactor)&&void 0!==n?n:.5),this.backoff=new aW({min:this.reconnectionDelay(),max:this.reconnectionDelayMax(),jitter:this.randomizationFactor()}),this.timeout(null==t.timeout?2e4:t.timeout),this._readyState="closed",this.uri=e;let r=t.parser||aT;this.encoder=new r.Encoder,this.decoder=new r.Decoder,this._autoConnect=!1!==t.autoConnect,this._autoConnect&&this.open()}reconnection(e){return arguments.length?(this._reconnection=!!e,this):this._reconnection}reconnectionAttempts(e){return void 0===e?this._reconnectionAttempts:(this._reconnectionAttempts=e,this)}reconnectionDelay(e){var t;return void 0===e?this._reconnectionDelay:(this._reconnectionDelay=e,null===(t=this.backoff)||void 0===t||t.setMin(e),this)}randomizationFactor(e){var t;return void 0===e?this._randomizationFactor:(this._randomizationFactor=e,null===(t=this.backoff)||void 0===t||t.setJitter(e),this)}reconnectionDelayMax(e){var t;return void 0===e?this._reconnectionDelayMax:(this._reconnectionDelayMax=e,null===(t=this.backoff)||void 0===t||t.setMax(e),this)}timeout(e){return arguments.length?(this._timeout=e,this):this._timeout}/**
     * Starts trying to reconnect if reconnection is enabled and we have not
     * started reconnecting yet
     *
     * @private
     */maybeReconnectOnOpen(){// Only try to reconnect if it's the first time we're connecting
!this._reconnecting&&this._reconnection&&0===this.backoff.attempts&&this.reconnect()}/**
     * Sets the current transport `socket`.
     *
     * @param {Function} fn - optional, callback
     * @return self
     * @public
     */open(e){if(~this._readyState.indexOf("open"))return this;this.engine=new aM(this.uri,this.opts);let t=this.engine,n=this;this._readyState="opening",this.skipReconnect=!1;// emit `open`
let r=aV(t,"open",function(){n.onopen(),e&&e()}),a=aV(t,"error",t=>{n.cleanup(),n._readyState="closed",this.emitReserved("error",t),e?e(t):n.maybeReconnectOnOpen()});if(!1!==this._timeout){let e=this._timeout;0===e&&r();// set timer
let n=this.setTimeoutFn(()=>{r(),t.close(),// @ts-ignore
t.emit("error",Error("timeout"))},e);this.opts.autoUnref&&n.unref(),this.subs.push(function(){clearTimeout(n)})}return this.subs.push(r),this.subs.push(a),this}/**
     * Alias for open()
     *
     * @return self
     * @public
     */connect(e){return this.open(e)}/**
     * Called upon transport open.
     *
     * @private
     */onopen(){// clear old subs
this.cleanup(),// mark as open
this._readyState="open",this.emitReserved("open");// add new subs
let e=this.engine;this.subs.push(aV(e,"ping",this.onping.bind(this)),aV(e,"data",this.ondata.bind(this)),aV(e,"error",this.onerror.bind(this)),aV(e,"close",this.onclose.bind(this)),aV(this.decoder,"decoded",this.ondecoded.bind(this)))}/**
     * Called upon a ping.
     *
     * @private
     */onping(){this.emitReserved("ping")}/**
     * Called with data.
     *
     * @private
     */ondata(e){try{this.decoder.add(e)}catch(e){this.onclose("parse error",e)}}/**
     * Called when parser fully decodes a packet.
     *
     * @private
     */ondecoded(e){rW(()=>{this.emitReserved("packet",e)},this.setTimeoutFn)}/**
     * Called upon socket error.
     *
     * @private
     */onerror(e){this.emitReserved("error",e)}/**
     * Creates a new socket for the given `nsp`.
     *
     * @return {Socket}
     * @public
     */socket(e,t){let n=this.nsps[e];return n||(n=new aq(this,e,t),this.nsps[e]=n),n}/**
     * Called upon a socket close.
     *
     * @param socket
     * @private
     */_destroy(e){let t=Object.keys(this.nsps);for(let e of t){let t=this.nsps[e];if(t.active)return}this._close()}/**
     * Writes a packet.
     *
     * @param packet
     * @private
     */_packet(e){let t=this.encoder.encode(e);for(let n=0;n<t.length;n++)this.engine.write(t[n],e.options)}/**
     * Clean up transport subscriptions and packet buffer.
     *
     * @private
     */cleanup(){this.subs.forEach(e=>e()),this.subs.length=0,this.decoder.destroy()}/**
     * Close the current socket.
     *
     * @private
     */_close(){this.skipReconnect=!0,this._reconnecting=!1,this.onclose("forced close"),this.engine&&this.engine.close()}/**
     * Alias for close()
     *
     * @private
     */disconnect(){return this._close()}/**
     * Called upon engine close.
     *
     * @private
     */onclose(e,t){this.cleanup(),this.backoff.reset(),this._readyState="closed",this.emitReserved("close",e,t),this._reconnection&&!this.skipReconnect&&this.reconnect()}/**
     * Attempt a reconnection.
     *
     * @private
     */reconnect(){if(this._reconnecting||this.skipReconnect)return this;let e=this;if(this.backoff.attempts>=this._reconnectionAttempts)this.backoff.reset(),this.emitReserved("reconnect_failed"),this._reconnecting=!1;else{let t=this.backoff.duration();this._reconnecting=!0;let n=this.setTimeoutFn(()=>{!e.skipReconnect&&(this.emitReserved("reconnect_attempt",e.backoff.attempts),e.skipReconnect||e.open(t=>{t?(e._reconnecting=!1,e.reconnect(),this.emitReserved("reconnect_error",t)):e.onreconnect()}))},t);this.opts.autoUnref&&n.unref(),this.subs.push(function(){clearTimeout(n)})}}/**
     * Called upon successful reconnect.
     *
     * @private
     */onreconnect(){let e=this.backoff.attempts;this._reconnecting=!1,this.backoff.reset(),this.emitReserved("reconnect",e)}}/**
 * Managers cache.
 */const aQ={};function aY(e,t){let n;"object"==typeof e&&(t=e,e=void 0),t=t||{};let r=function(e,t="",n){let r=e;// default to window.location
n=n||"undefined"!=typeof location&&location,null==e&&(e=n.protocol+"//"+n.host),"string"==typeof e&&("/"===e.charAt(0)&&(e="/"===e.charAt(1)?n.protocol+e:n.host+e),/^(https?|wss?):\/\//.test(e)||(e=void 0!==n?n.protocol+"//"+e:"https://"+e),// parse
r=aD(e)),!r.port&&(/^(http|ws)$/.test(r.protocol)?r.port="80":/^(http|ws)s$/.test(r.protocol)&&(r.port="443")),r.path=r.path||"/";let a=-1!==r.host.indexOf(":"),i=a?"["+r.host+"]":r.host;return(// define unique id
r.id=r.protocol+"://"+i+":"+r.port+t,// define href
r.href=r.protocol+"://"+i+(n&&n.port===r.port?"":":"+r.port),r)}(e,t.path||"/socket.io"),a=r.source,i=r.id,o=r.path,s=aQ[i]&&o in aQ[i].nsps,l=t.forceNew||t["force new connection"]||!1===t.multiplex||s;return l?n=new aK(a,t):(aQ[i]||(aQ[i]=new aK(a,t)),n=aQ[i]),r.query&&!t.query&&(t.query=r.queryKey),n.socket(r.path,t)}// so that "lookup" can be used both as a function (e.g. `io(...)`) and as a
// namespace (e.g. `io.connect(...)`), for backward compatibility
Object.assign(aY,{Manager:aK,Socket:aq,io:aY,connect:aY});/*
 * Copyright 2017 The boardgame.io Authors
 *
 * Use of this source code is governed by a MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 *//**
 * InMemory data storage.
 */class aJ extends n9{/**
     * Creates a new InMemory storage.
     */constructor(){super(),this.state=new Map,this.initial=new Map,this.metadata=new Map,this.log=new Map}/**
     * Create a new match.
     *
     * @override
     */createMatch(e,t){this.initial.set(e,t.initialState),this.setState(e,t.initialState),this.setMetadata(e,t.metadata)}/**
     * Write the match metadata to the in-memory object.
     */setMetadata(e,t){this.metadata.set(e,t)}/**
     * Write the match state to the in-memory object.
     */setState(e,t,n){if(n&&n.length>0){let t=this.log.get(e)||[];this.log.set(e,[...t,...n])}this.state.set(e,t)}/**
     * Fetches state for a particular matchID.
     */fetch(e,t){let n={};return t.state&&(n.state=this.state.get(e)),t.metadata&&(n.metadata=this.metadata.get(e)),t.log&&(n.log=this.log.get(e)||[]),t.initialState&&(n.initialState=this.initial.get(e)),n}/**
     * Remove the match state from the in-memory object.
     */wipe(e){this.state.delete(e),this.metadata.delete(e)}/**
     * Return all keys.
     *
     * @override
     */listMatches(e){return[...this.metadata.entries()].filter(([,t])=>{if(!e)return!0;if(void 0!==e.gameName&&t.gameName!==e.gameName)return!1;if(void 0!==e.where){if(void 0!==e.where.isGameover){let n=void 0!==t.gameover;if(n!==e.where.isGameover)return!1}if(void 0!==e.where.updatedBefore&&t.updatedAt>=e.where.updatedBefore||void 0!==e.where.updatedAfter&&t.updatedAt<=e.where.updatedAfter)return!1}return!0}).map(([e])=>e)}}class aX extends Map{constructor(e){super(),this.key=e;let t=JSON.parse(localStorage.getItem(this.key))||[];t.forEach(e=>this.set(...e))}sync(){let e=[...this.entries()];localStorage.setItem(this.key,JSON.stringify(e))}set(e,t){return super.set(e,t),this.sync(),this}delete(e){let t=super.delete(e);return this.sync(),t}}/**
 * locaStorage data storage.
 */class aZ extends aJ{constructor(e="bgio"){super();let t=t=>new aX(`${e}_${t}`);this.state=t("state"),this.initial=t("initial"),this.metadata=t("metadata"),this.log=t("log")}}/**
 * Creates a local version of the master that the client
 * can interact with.
 */class a0 extends ra{constructor({game:e,bots:t,storageKey:n,persist:r}){let a={},i={};if(e&&e.ai&&t)for(let n in t){let r=t[n];i[n]=new r({game:e,enumerate:e.ai.enumerate,seed:e.seed})}let o=({playerID:e,...t})=>{let n=a[e];void 0!==n&&n(s(e,t))},s=ro(e),l=r?new aZ(n):new aJ;super(e,l,{send:o,sendAll:e=>{for(let t in a)o({playerID:t,...e})}}),this.connect=(e,t)=>{a[e]=t},this.subscribe(({state:e,matchID:n})=>{if(!t)return;let r=/*
 * Copyright 2018 The boardgame.io Authors
 *
 * Use of this source code is governed by a MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 *//**
 * Returns null if it is not a bot's turn.
 * Otherwise, returns a playerID of a bot that may play now.
 */function(e,t){if(void 0!==e.ctx.gameover)return null;if(e.ctx.activePlayers){for(let n of Object.keys(t))if(n in e.ctx.activePlayers)return n}else if(e.ctx.currentPlayer in t)return e.ctx.currentPlayer;return null}(e,i);null!==r&&setTimeout(async()=>{let t=await i[r].play(e,r);await this.onUpdate(t.action,e._stateID,n,t.action.payload.playerID)},100)})}}/**
 * Local
 *
 * Transport interface that embeds a GameMaster within it
 * that you can connect multiple clients to.
 */class a1 extends na{/**
     * Creates a new Mutiplayer instance.
     * @param {string} matchID - The game ID to connect to.
     * @param {string} playerID - The player ID associated with this client.
     * @param {string} gameName - The game type (the `name` field in `Game`).
     * @param {string} numPlayers - The number of players.
     */constructor({master:e,...t}){super(t),this.master=e}sendChatMessage(e,t){let n=[e,t,this.credentials];this.master.onChatMessage(...n)}sendAction(e,t){this.master.onUpdate(t,e._stateID,this.matchID,this.playerID)}requestSync(){this.master.onSync(this.matchID,this.playerID,this.credentials,this.numPlayers)}connect(){this.setConnectionStatus(!0),this.master.connect(this.playerID,e=>this.notifyClient(e)),this.requestSync()}disconnect(){this.setConnectionStatus(!1)}updateMatchID(e){this.matchID=e,this.connect()}updatePlayerID(e){this.playerID=e,this.connect()}updateCredentials(e){this.credentials=e,this.connect()}}/**
 * Global map storing local master instances.
 */const a2=new Map;/**
 * SocketIO
 *
 * Transport interface that interacts with the Master via socket.io.
 */class a3 extends na{/**
     * Creates a new Multiplayer instance.
     * @param {object} socket - Override for unit tests.
     * @param {object} socketOpts - Options to pass to socket.io.
     * @param {object} store - Redux store
     * @param {string} matchID - The game ID to connect to.
     * @param {string} playerID - The player ID associated with this client.
     * @param {string} credentials - Authentication credentials
     * @param {string} gameName - The game type (the `name` field in `Game`).
     * @param {string} numPlayers - The number of players.
     * @param {string} server - The game server in the form of 'hostname:port'. Defaults to the server serving the client if not provided.
     */constructor({socket:e,socketOpts:t,server:n,...r}){super(r),this.server=n,this.socket=e,this.socketOpts=t}sendAction(e,t){let n=[t,e._stateID,this.matchID,this.playerID];this.socket.emit("update",...n)}sendChatMessage(e,t){let n=[e,t,this.credentials];this.socket.emit("chat",...n)}connect(){if(!this.socket){if(this.server){let e=this.server;-1==e.search(/^https?:\/\//)&&(e="http://"+this.server),"/"!=e.slice(-1)&&(e+="/"),this.socket=aY(e+this.gameName,this.socketOpts)}else this.socket=aY("/"+this.gameName,this.socketOpts)}// Called when another player makes a move and the
// master broadcasts the update as a patch to other clients (including
// this one).
this.socket.on("patch",(e,t,n,r,a)=>{this.notifyClient({type:"patch",args:[e,t,n,r,a]})}),// Called when another player makes a move and the
// master broadcasts the update to other clients (including
// this one).
this.socket.on("update",(e,t,n)=>{this.notifyClient({type:"update",args:[e,t,n]})}),// Called when the client first connects to the master
// and requests the current game state.
this.socket.on("sync",(e,t)=>{this.notifyClient({type:"sync",args:[e,t]})}),// Called when new player joins the match or changes
// it's connection status
this.socket.on("matchData",(e,t)=>{this.notifyClient({type:"matchData",args:[e,t]})}),this.socket.on("chat",(e,t)=>{this.notifyClient({type:"chat",args:[e,t]})}),// Keep track of connection status.
this.socket.on("connect",()=>{// Initial sync to get game state.
this.requestSync(),this.setConnectionStatus(!0)}),this.socket.on("disconnect",()=>{this.setConnectionStatus(!1)})}disconnect(){this.socket.close(),this.socket=null,this.setConnectionStatus(!1)}requestSync(){if(this.socket){let e=[this.matchID,this.playerID,this.credentials,this.numPlayers];this.socket.emit("sync",...e)}}updateMatchID(e){this.matchID=e,this.requestSync()}updatePlayerID(e){this.playerID=e,this.requestSync()}updateCredentials(e){this.credentials=e,this.requestSync()}}function a4({server:e,socketOpts:t}={}){return n=>new a3({server:e,socketOpts:t,...n})}/*
 * Copyright 2017 The boardgame.io Authors
 *
 * Use of this source code is governed by a MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 *//**
 * Client
 *
 * boardgame.io React client.
 *
 * @param {...object} game - The return value of `Game`.
 * @param {...object} numPlayers - The number of players.
 * @param {...object} board - The React component for the game.
 * @param {...object} loading - (optional) The React component for the loading state.
 * @param {...object} multiplayer - Set to a falsy value or a transportFactory, e.g., SocketIO()
 * @param {...object} debug - Enables the Debug UI.
 * @param {...object} enhancer - Optional enhancer to send to the Redux store
 *
 * Returns:
 *   A React component that wraps board and provides an
 *   API through props for it to interact with the framework
 *   and dispatch actions such as MAKE_MOVE, GAME_EVENT, RESET,
 *   UNDO and REDO.
 */function a6(e){var n;let{game:r,numPlayers:a,board:i,multiplayer:o,enhancer:s}=e,{loading:l,debug:u}=e;/*
     * WrappedBoard
     *
     * The main React component that wraps the passed in
     * board component and adds the API to its props.
     */return void 0===l&&(l=()=>/*@__PURE__*/t(M).createElement("div",{className:"bgio-loading"},"connecting...")),(n=class extends /*@__PURE__*/t(M).Component{constructor(e){var t;super(e),void 0===u&&(u=e.debug),this.client=(t={game:r,debug:u,numPlayers:a,multiplayer:o,matchID:e.matchID,playerID:e.playerID,credentials:e.credentials,enhancer:s},new np(t))}componentDidMount(){this.unsubscribe=this.client.subscribe(()=>this.forceUpdate()),this.client.start()}componentWillUnmount(){this.client.stop(),this.unsubscribe()}componentDidUpdate(e){this.props.matchID!=e.matchID&&this.client.updateMatchID(this.props.matchID),this.props.playerID!=e.playerID&&this.client.updatePlayerID(this.props.playerID),this.props.credentials!=e.credentials&&this.client.updateCredentials(this.props.credentials)}render(){let e=this.client.getState();if(null===e)return /*@__PURE__*/t(M).createElement(l);let n=null;return i&&(n=/*@__PURE__*/t(M).createElement(i,{...e,...this.props,isMultiplayer:!!o,moves:this.client.moves,events:this.client.events,matchID:this.client.matchID,playerID:this.client.playerID,reset:this.client.reset,undo:this.client.undo,redo:this.client.redo,log:this.client.log,matchData:this.client.matchData,sendChatMessage:this.client.sendChatMessage,chatMessages:this.client.chatMessages})),/*@__PURE__*/t(M).createElement("div",{className:"bgio-client"},n)}}).propTypes={// The ID of a game to connect to.
// Only relevant in multiplayer.
matchID:/*@__PURE__*/t(nB).string,// The ID of the player associated with this client.
// Only relevant in multiplayer.
playerID:/*@__PURE__*/t(nB).string,// This client's authentication credentials.
// Only relevant in multiplayer.
credentials:/*@__PURE__*/t(nB).string,// Enable / disable the Debug UI.
debug:/*@__PURE__*/t(nB).any},n.defaultProps={matchID:"default",playerID:null,credentials:null,debug:!0},n}/*
 * Copyright 2018 The boardgame.io Authors
 *
 * Use of this source code is governed by a MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 */class a8{constructor({server:e,gameComponents:t,playerName:n,playerCredentials:r}){this.client=new nL({server:e}),this.gameComponents=t,this.playerName=n||"Visitor",this.playerCredentials=r,this.matches=[]}async refresh(){try{this.matches=[];let e=await this.client.listGames();for(let t of e){if(!this._getGameComponents(t))continue;let{matches:e}=await this.client.listMatches(t);this.matches.push(...e)}}catch(e){throw Error("failed to retrieve list of matches ("+e+")")}}_getMatchInstance(e){for(let t of this.matches)if(t.matchID===e)return t}_getGameComponents(e){for(let t of this.gameComponents)if(t.game.name===e)return t}_findPlayer(e){for(let t of this.matches)if(t.players.some(t=>t.name===e))return t}async join(e,t,n){try{let r=this._findPlayer(this.playerName);if(r)throw Error("player has already joined "+r.matchID);if(!(r=this._getMatchInstance(t)))throw Error("game instance "+t+" not found");let a=await this.client.joinMatch(e,t,{playerID:n,playerName:this.playerName});r.players[Number.parseInt(n)].name=this.playerName,this.playerCredentials=a.playerCredentials}catch(e){throw Error("failed to join match "+t+" ("+e+")")}}async leave(e,t){try{let n=this._getMatchInstance(t);if(!n)throw Error("match instance not found");for(let r of n.players)if(r.name===this.playerName){await this.client.leaveMatch(e,t,{playerID:r.id.toString(),credentials:this.playerCredentials}),delete r.name,delete this.playerCredentials;return}throw Error("player not found in match")}catch(e){throw Error("failed to leave match "+t+" ("+e+")")}}async disconnect(){let e=this._findPlayer(this.playerName);e&&await this.leave(e.gameName,e.matchID),this.matches=[],this.playerName="Visitor"}async create(e,t){try{let n=this._getGameComponents(e);if(!n)throw Error("game not found");if(t<n.game.minPlayers||t>n.game.maxPlayers)throw Error("invalid number of players "+t);await this.client.createMatch(e,{numPlayers:t})}catch(t){throw Error("failed to create match for "+e+" ("+t+")")}}}/*
 * Copyright 2018 The boardgame.io Authors.
 *
 * Use of this source code is governed by a MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 */class a5 extends /*@__PURE__*/t(M).Component{constructor(){super(...arguments),this.state={playerName:this.props.playerName,nameErrorMsg:""},this.onClickEnter=()=>{""!==this.state.playerName&&this.props.onEnter(this.state.playerName)},this.onKeyPress=e=>{"Enter"===e.key&&this.onClickEnter()},this.onChangePlayerName=e=>{let t=e.target.value.trim();this.setState({playerName:t,nameErrorMsg:t.length>0?"":"empty player name"})}}render(){return /*@__PURE__*/t(M).createElement("div",null,/*@__PURE__*/t(M).createElement("p",{className:"phase-title"},"Choose a player name:"),/*@__PURE__*/t(M).createElement("input",{type:"text",value:this.state.playerName,onChange:this.onChangePlayerName,onKeyPress:this.onKeyPress}),/*@__PURE__*/t(M).createElement("span",{className:"buttons"},/*@__PURE__*/t(M).createElement("button",{className:"buttons",onClick:this.onClickEnter},"Enter")),/*@__PURE__*/t(M).createElement("br",null),/*@__PURE__*/t(M).createElement("span",{className:"error-msg"},this.state.nameErrorMsg,/*@__PURE__*/t(M).createElement("br",null)))}}a5.defaultProps={playerName:""};/*
 * Copyright 2018 The boardgame.io Authors.
 *
 * Use of this source code is governed by a MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 */class a7 extends /*@__PURE__*/t(M).Component{constructor(){super(...arguments),this._createSeat=e=>e.name||"[free]",this._createButtonJoin=(e,n)=>/*@__PURE__*/t(M).createElement("button",{key:"button-join-"+e.matchID,onClick:()=>this.props.onClickJoin(e.gameName,e.matchID,""+n)},"Join"),this._createButtonLeave=e=>/*@__PURE__*/t(M).createElement("button",{key:"button-leave-"+e.matchID,onClick:()=>this.props.onClickLeave(e.gameName,e.matchID)},"Leave"),this._createButtonPlay=(e,n)=>/*@__PURE__*/t(M).createElement("button",{key:"button-play-"+e.matchID,onClick:()=>this.props.onClickPlay(e.gameName,{matchID:e.matchID,playerID:""+n,numPlayers:e.players.length})},"Play"),this._createButtonSpectate=e=>/*@__PURE__*/t(M).createElement("button",{key:"button-spectate-"+e.matchID,onClick:()=>this.props.onClickPlay(e.gameName,{matchID:e.matchID,numPlayers:e.players.length})},"Spectate"),this._createInstanceButtons=e=>{let n=e.players.find(e=>e.name===this.props.playerName),r=e.players.find(e=>!e.name);return n&&r?this._createButtonLeave(e):r?this._createButtonJoin(e,r.id):n?/*@__PURE__*/t(M).createElement("div",null,[this._createButtonPlay(e,n.id),this._createButtonLeave(e)]):this._createButtonSpectate(e)}}render(){let e=this.props.match,n="OPEN";return e.players.some(e=>!e.name)||(n="RUNNING"),/*@__PURE__*/t(M).createElement("tr",{key:"line-"+e.matchID},/*@__PURE__*/t(M).createElement("td",{key:"cell-name-"+e.matchID},e.gameName),/*@__PURE__*/t(M).createElement("td",{key:"cell-status-"+e.matchID},n),/*@__PURE__*/t(M).createElement("td",{key:"cell-seats-"+e.matchID},e.players.map(e=>this._createSeat(e)).join(", ")),/*@__PURE__*/t(M).createElement("td",{key:"cell-buttons-"+e.matchID},this._createInstanceButtons(e)))}}/*
 * Copyright 2018 The boardgame.io Authors.
 *
 * Use of this source code is governed by a MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 */class a9 extends /*@__PURE__*/t(M).Component{constructor(e){/* fix min and max number of players */for(let n of(super(e),this.state={selectedGame:0,numPlayers:2},this._createGameNameOption=(e,n)=>/*@__PURE__*/t(M).createElement("option",{key:"name-option-"+n,value:n},e.game.name),this._createNumPlayersOption=e=>/*@__PURE__*/t(M).createElement("option",{key:"num-option-"+e,value:e},e),this._createNumPlayersRange=e=>Array.from({length:e.maxPlayers+1}).map((e,t)=>t).slice(e.minPlayers),this.onChangeNumPlayers=e=>{this.setState({numPlayers:Number.parseInt(e.target.value)})},this.onChangeSelectedGame=e=>{let t=Number.parseInt(e.target.value);this.setState({selectedGame:t,numPlayers:this.props.games[t].game.minPlayers})},this.onClickCreate=()=>{this.props.createMatch(this.props.games[this.state.selectedGame].game.name,this.state.numPlayers)},e.games)){let e=n.game;e.minPlayers||(e.minPlayers=1),e.maxPlayers||(e.maxPlayers=4),console.assert(e.maxPlayers>=e.minPlayers)}this.state={selectedGame:0,numPlayers:e.games[0].game.minPlayers}}render(){return /*@__PURE__*/t(M).createElement("div",null,/*@__PURE__*/t(M).createElement("select",{value:this.state.selectedGame,onChange:e=>this.onChangeSelectedGame(e)},this.props.games.map((e,t)=>this._createGameNameOption(e,t))),/*@__PURE__*/t(M).createElement("span",null,"Players:"),/*@__PURE__*/t(M).createElement("select",{value:this.state.numPlayers,onChange:this.onChangeNumPlayers},this._createNumPlayersRange(this.props.games[this.state.selectedGame].game).map(e=>this._createNumPlayersOption(e))),/*@__PURE__*/t(M).createElement("span",{className:"buttons"},/*@__PURE__*/t(M).createElement("button",{onClick:this.onClickCreate},"Create")))}}(l=S||(S={})).ENTER="enter",l.PLAY="play",l.LIST="list";/**
 * Lobby
 *
 * React lobby component.
 *
 * @param {Array}  gameComponents - An array of Board and Game objects for the supported games.
 * @param {string} lobbyServer - Address of the lobby server (for example 'localhost:8000').
 *                               If not set, defaults to the server that served the page.
 * @param {string} gameServer - Address of the game server (for example 'localhost:8001').
 *                              If not set, defaults to the server that served the page.
 * @param {function} clientFactory - Function that is used to create the game clients.
 * @param {number} refreshInterval - Interval between server updates (default: 2000ms).
 * @param {bool}   debug - Enable debug information (default: false).
 *
 * Returns:
 *   A React component that provides a UI to create, list, join, leave, play or
 *   spectate matches (game instances).
 */class ie extends /*@__PURE__*/t(M).Component{constructor(e){super(e),this.state={phase:S.ENTER,playerName:"Visitor",runningMatch:null,errorMsg:"",credentialStore:{}},this._createConnection=e=>{var t;let n=this.state.playerName;this.connection=(t={server:e.lobbyServer,gameComponents:e.gameComponents,playerName:n,playerCredentials:this.state.credentialStore[n]},new a8(t))},this._updateCredentials=(e,t)=>{this.setState(n=>{// clone store or componentDidUpdate will not be triggered
let r=Object.assign({},n.credentialStore);return r[e]=t,{credentialStore:r}})},this._updateConnection=async()=>{await this.connection.refresh(),this.forceUpdate()},this._enterLobby=e=>{this._startRefreshInterval(),this.setState({playerName:e,phase:S.LIST})},this._exitLobby=async()=>{this._clearRefreshInterval(),await this.connection.disconnect(),this.setState({phase:S.ENTER,errorMsg:""})},this._createMatch=async(e,t)=>{try{await this.connection.create(e,t),await this.connection.refresh(),// rerender
this.setState({})}catch(e){this.setState({errorMsg:e.message})}},this._joinMatch=async(e,t,n)=>{try{await this.connection.join(e,t,n),await this.connection.refresh(),this._updateCredentials(this.connection.playerName,this.connection.playerCredentials)}catch(e){this.setState({errorMsg:e.message})}},this._leaveMatch=async(e,t)=>{try{await this.connection.leave(e,t),await this.connection.refresh(),this._updateCredentials(this.connection.playerName,this.connection.playerCredentials)}catch(e){this.setState({errorMsg:e.message})}},this._startMatch=(e,t)=>{let n;let r=this.connection._getGameComponents(e);if(!r){this.setState({errorMsg:"game "+e+" not supported"});return}if(t.numPlayers>1&&(n=this.props.gameServer?a4({server:this.props.gameServer}):a4()),1==t.numPlayers){let e=r.game.maxPlayers,t={};for(let n=1;n<e;n++)t[n+""]=nN;n=/**
 * Create a local transport.
 */function({bots:e,persist:t,storageKey:n}={}){return r=>{let a;let{gameKey:i,game:o}=r,s=a2.get(i);return s&&s.bots===e&&s.storageKey===n&&s.persist===t&&(a=s.master),a||(a=new a0({game:o,bots:e,persist:t,storageKey:n}),a2.set(i,{master:a,bots:e,persist:t,storageKey:n})),new a1({master:a,...r})}}({bots:t})}let a=this.props.clientFactory({game:r.game,board:r.board,debug:this.props.debug,multiplayer:n}),i={app:a,matchID:t.matchID,playerID:t.numPlayers>1?t.playerID:"0",credentials:this.connection.playerCredentials};this._clearRefreshInterval(),this.setState({phase:S.PLAY,runningMatch:i})},this._exitMatch=()=>{this._startRefreshInterval(),this.setState({phase:S.LIST,runningMatch:null})},this._getPhaseVisibility=e=>this.state.phase!==e?"hidden":"phase",this.renderMatches=(e,n)=>e.map(e=>{let{matchID:r,gameName:a,players:i}=e;return /*@__PURE__*/t(M).createElement(a7,{key:"instance-"+r,match:{matchID:r,gameName:a,players:Object.values(i)},playerName:n,onClickJoin:this._joinMatch,onClickLeave:this._leaveMatch,onClickPlay:this._startMatch})}),this._createConnection(this.props)}componentDidMount(){let e=/*@__PURE__*/t(nj).load("lobbyState")||{};e.phase&&e.phase===S.PLAY&&(e.phase=S.LIST),e.phase&&e.phase!==S.ENTER&&this._startRefreshInterval(),this.setState({phase:e.phase||S.ENTER,playerName:e.playerName||"Visitor",credentialStore:e.credentialStore||{}})}componentDidUpdate(e,n){let r=this.state.playerName,a=this.state.credentialStore[r];if(n.phase!==this.state.phase||n.credentialStore[r]!==a||n.playerName!==r){this._createConnection(this.props),this._updateConnection();let e={phase:this.state.phase,playerName:r,credentialStore:this.state.credentialStore};/*@__PURE__*/t(nj).save("lobbyState",e,{path:"/"})}e.refreshInterval!==this.props.refreshInterval&&this._startRefreshInterval()}componentWillUnmount(){this._clearRefreshInterval()}_startRefreshInterval(){this._clearRefreshInterval(),this._currentInterval=setInterval(this._updateConnection,this.props.refreshInterval)}_clearRefreshInterval(){clearInterval(this._currentInterval)}render(){let{gameComponents:e,renderer:n}=this.props,{errorMsg:r,playerName:a,phase:i,runningMatch:o}=this.state;return n?n({errorMsg:r,gameComponents:e,matches:this.connection.matches,phase:i,playerName:a,runningMatch:o,handleEnterLobby:this._enterLobby,handleExitLobby:this._exitLobby,handleCreateMatch:this._createMatch,handleJoinMatch:this._joinMatch,handleLeaveMatch:this._leaveMatch,handleExitMatch:this._exitMatch,handleRefreshMatches:this._updateConnection,handleStartMatch:this._startMatch}):/*@__PURE__*/t(M).createElement("div",{id:"lobby-view",style:{padding:50}},/*@__PURE__*/t(M).createElement("div",{className:this._getPhaseVisibility(S.ENTER)},/*@__PURE__*/t(M).createElement(a5,{key:a,playerName:a,onEnter:this._enterLobby})),/*@__PURE__*/t(M).createElement("div",{className:this._getPhaseVisibility(S.LIST)},/*@__PURE__*/t(M).createElement("p",null,"Welcome, ",a),/*@__PURE__*/t(M).createElement("div",{className:"phase-title",id:"match-creation"},/*@__PURE__*/t(M).createElement("span",null,"Create a match:"),/*@__PURE__*/t(M).createElement(a9,{games:e,createMatch:this._createMatch})),/*@__PURE__*/t(M).createElement("p",{className:"phase-title"},"Join a match:"),/*@__PURE__*/t(M).createElement("div",{id:"instances"},/*@__PURE__*/t(M).createElement("table",null,/*@__PURE__*/t(M).createElement("tbody",null,this.renderMatches(this.connection.matches,a))),/*@__PURE__*/t(M).createElement("span",{className:"error-msg"},r,/*@__PURE__*/t(M).createElement("br",null))),/*@__PURE__*/t(M).createElement("p",{className:"phase-title"},"Matches that become empty are automatically deleted.")),/*@__PURE__*/t(M).createElement("div",{className:this._getPhaseVisibility(S.PLAY)},o&&/*@__PURE__*/t(M).createElement(o.app,{matchID:o.matchID,playerID:o.playerID,credentials:o.credentials}),/*@__PURE__*/t(M).createElement("div",{className:"buttons",id:"match-exit"},/*@__PURE__*/t(M).createElement("button",{onClick:this._exitMatch},"Exit match"))),/*@__PURE__*/t(M).createElement("div",{className:"buttons",id:"lobby-exit"},/*@__PURE__*/t(M).createElement("button",{onClick:this._exitLobby},"Exit lobby")))}}ie.propTypes={gameComponents:/*@__PURE__*/t(nB).array.isRequired,lobbyServer:/*@__PURE__*/t(nB).string,gameServer:/*@__PURE__*/t(nB).string,debug:/*@__PURE__*/t(nB).bool,clientFactory:/*@__PURE__*/t(nB).func,refreshInterval:/*@__PURE__*/t(nB).number},ie.defaultProps={debug:!1,clientFactory:a6,refreshInterval:2e3};var it={},ir={};e(ir,"ai",()=>io);var ia={};e(ia,"Move",()=>x),e(ia,"moves",()=>ii),(x||(x={})).ClickCell="clickCell";const ii={clickCell:function({G:e,playerID:t},n){if(null!==e.cells[n])return tM;e.cells[n]=t}},io={enumerate:function(e,t){let n=[];for(let t=0;t<9;t++)null===e.cells[t]&&n.push({move:x.ClickCell,args:[t]});return n}};var is={};function il({G:e,ctx:t}){var n;return(n=e.cells,[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]].map(e=>{let t=e.map(e=>n[e]);return t.every(e=>null!==e&&e===t[0])}).some(e=>!0===e))?{winner:t.currentPlayer}:0===e.cells.filter(e=>null===e).length?{draw:!0}:void 0}e(is,"endIf",()=>il);var iu={};function ic(){return{cells:[null,null,null,null,null,null,null,null,null]}}e(iu,"setup",()=>ic);var id={};e(id,"turn",()=>ip);const ip={minMoves:1,maxMoves:1};P(it,ir),P(it,is),P(it,ia),P(it,iu),P(it,id);const ih={border:"1px solid #555",fontFamily:"Helvetica, Arial",width:"50px",height:"50px",lineHeight:"50px",textAlign:"center"},iy={0:"O",1:"X"};function im(e){let t;return t=null===e.children?/*#__PURE__*/(0,D.jsx)("button",{style:ih,onClick:e.onClick,disabled:e.disabled}):/*#__PURE__*/(0,D.jsx)("div",{style:ih,children:iy[e.children]}),/*#__PURE__*/(0,D.jsx)("td",{children:t})}function ig({ctx:e,G:t,moves:n}){let r=[];for(let a=0;a<3;a++){let i=[];for(let r=0;r<3;r++){let o=3*a+r;i.push(/*#__PURE__*/(0,D.jsx)(im,{disabled:!!e.gameover,onClick:()=>n[x.ClickCell](o),children:t.cells[o]},o))}r.push(/*#__PURE__*/(0,D.jsx)("tr",{children:i},a))}return/*#__PURE__*/(0,D.jsx)("table",{children:/*#__PURE__*/(0,D.jsx)("tbody",{children:r})})}const iv=a6({game:it,board:function(e){let t=/*#__PURE__*/(0,D.jsx)(D.Fragment,{});return e.ctx.gameover&&(t=void 0!==e.ctx.gameover.winner?/*#__PURE__*/(0,D.jsxs)("p",{children:["Winner: ",e.ctx.gameover.winner]}):/*#__PURE__*/(0,D.jsx)("p",{children:"Draw!"})),/*#__PURE__*/(0,D.jsxs)(D.Fragment,{children:[/*#__PURE__*/(0,D.jsx)(ig,{...e}),t]})}}),ib=eZ(document.getElementById("root"));ib.render(/*#__PURE__*/(0,D.jsx)(M.StrictMode,{children:/*#__PURE__*/(0,D.jsx)(iv,{})}));//# sourceMappingURL=index.c9cdc04b.js.map

//# sourceMappingURL=index.c9cdc04b.js.map
