(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[177],{8972:(e,t,n)=>{Promise.resolve().then(n.bind(n,9796)),Promise.resolve().then(n.t.bind(n,4415,23)),Promise.resolve().then(n.t.bind(n,2494,23)),Promise.resolve().then(n.t.bind(n,9324,23))},9796:(e,t,n)=>{"use strict";n.d(t,{BaiDuAnalytics:()=>i});var r=n(5155),a=n(3704),l=n.n(a);function i(){return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(l(),{id:"baidu-tongji",strategy:"afterInteractive",dangerouslySetInnerHTML:{__html:'\n          var _hmt = _hmt || [];\n          (function() {\n            var hm = document.createElement("script");\n            hm.src = "https://hm.baidu.com/hm.js?c3b72d9ef2fed07e7402555c4c6c4d87";\n            var s = document.getElementsByTagName("script")[0]; \n            s.parentNode.insertBefore(hm, s);\n          })();\n          '}})})}},8571:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{cancelIdleCallback:function(){return r},requestIdleCallback:function(){return n}});let n="undefined"!=typeof self&&self.requestIdleCallback&&self.requestIdleCallback.bind(window)||function(e){let t=Date.now();return self.setTimeout(function(){e({didTimeout:!1,timeRemaining:function(){return Math.max(0,50-(Date.now()-t))}})},1)},r="undefined"!=typeof self&&self.cancelIdleCallback&&self.cancelIdleCallback.bind(window)||function(e){return clearTimeout(e)};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},3704:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{default:function(){return h},handleClientScriptLoad:function(){return y},initScriptLoader:function(){return b}});let r=n(306),a=n(9955),l=n(5155),i=r._(n(7650)),s=a._(n(2115)),o=n(1147),c=n(2815),u=n(8571),d=new Map,f=new Set,p=e=>{if(i.default.preinit){e.forEach(e=>{i.default.preinit(e,{as:"style"})});return}if("undefined"!=typeof window){let t=document.head;e.forEach(e=>{let n=document.createElement("link");n.type="text/css",n.rel="stylesheet",n.href=e,t.appendChild(n)})}},_=e=>{let{src:t,id:n,onLoad:r=()=>{},onReady:a=null,dangerouslySetInnerHTML:l,children:i="",strategy:s="afterInteractive",onError:o,stylesheets:u}=e,_=n||t;if(_&&f.has(_))return;if(d.has(t)){f.add(_),d.get(t).then(r,o);return}let y=()=>{a&&a(),f.add(_)},b=document.createElement("script"),m=new Promise((e,t)=>{b.addEventListener("load",function(t){e(),r&&r.call(this,t),y()}),b.addEventListener("error",function(e){t(e)})}).catch(function(e){o&&o(e)});l?(b.innerHTML=l.__html||"",y()):i?(b.textContent="string"==typeof i?i:Array.isArray(i)?i.join(""):"",y()):t&&(b.src=t,d.set(t,m)),(0,c.setAttributesFromProps)(b,e),"worker"===s&&b.setAttribute("type","text/partytown"),b.setAttribute("data-nscript",s),u&&p(u),document.body.appendChild(b)};function y(e){let{strategy:t="afterInteractive"}=e;"lazyOnload"===t?window.addEventListener("load",()=>{(0,u.requestIdleCallback)(()=>_(e))}):_(e)}function b(e){e.forEach(y),[...document.querySelectorAll('[data-nscript="beforeInteractive"]'),...document.querySelectorAll('[data-nscript="beforePageRender"]')].forEach(e=>{let t=e.id||e.getAttribute("src");f.add(t)})}function m(e){let{id:t,src:n="",onLoad:r=()=>{},onReady:a=null,strategy:c="afterInteractive",onError:d,stylesheets:p,...y}=e,{updateScripts:b,scripts:m,getIsSsr:h,appDir:g,nonce:v}=(0,s.useContext)(o.HeadManagerContext),O=(0,s.useRef)(!1);(0,s.useEffect)(()=>{let e=t||n;O.current||(a&&e&&f.has(e)&&a(),O.current=!0)},[a,t,n]);let I=(0,s.useRef)(!1);if((0,s.useEffect)(()=>{!I.current&&("afterInteractive"===c?_(e):"lazyOnload"===c&&("complete"===document.readyState?(0,u.requestIdleCallback)(()=>_(e)):window.addEventListener("load",()=>{(0,u.requestIdleCallback)(()=>_(e))})),I.current=!0)},[e,c]),("beforeInteractive"===c||"worker"===c)&&(b?(m[c]=(m[c]||[]).concat([{id:t,src:n,onLoad:r,onReady:a,onError:d,...y}]),b(m)):h&&h()?f.add(t||n):h&&!h()&&_(e)),g){if(p&&p.forEach(e=>{i.default.preinit(e,{as:"style"})}),"beforeInteractive"===c)return n?(i.default.preload(n,y.integrity?{as:"script",integrity:y.integrity,nonce:v,crossOrigin:y.crossOrigin}:{as:"script",nonce:v,crossOrigin:y.crossOrigin}),(0,l.jsx)("script",{nonce:v,dangerouslySetInnerHTML:{__html:"(self.__next_s=self.__next_s||[]).push("+JSON.stringify([n,{...y,id:t}])+")"}})):(y.dangerouslySetInnerHTML&&(y.children=y.dangerouslySetInnerHTML.__html,delete y.dangerouslySetInnerHTML),(0,l.jsx)("script",{nonce:v,dangerouslySetInnerHTML:{__html:"(self.__next_s=self.__next_s||[]).push("+JSON.stringify([0,{...y,id:t}])+")"}}));"afterInteractive"===c&&n&&i.default.preload(n,y.integrity?{as:"script",integrity:y.integrity,nonce:v,crossOrigin:y.crossOrigin}:{as:"script",nonce:v,crossOrigin:y.crossOrigin})}return null}Object.defineProperty(m,"__nextScript",{value:!0});let h=m;("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},2815:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"setAttributesFromProps",{enumerable:!0,get:function(){return l}});let n={acceptCharset:"accept-charset",className:"class",htmlFor:"for",httpEquiv:"http-equiv",noModule:"noModule"},r=["onLoad","onReady","dangerouslySetInnerHTML","children","onError","strategy","stylesheets"];function a(e){return["async","defer","noModule"].includes(e)}function l(e,t){for(let[l,i]of Object.entries(t)){if(!t.hasOwnProperty(l)||r.includes(l)||void 0===i)continue;let s=n[l]||l.toLowerCase();"SCRIPT"===e.tagName&&a(s)?e[s]=!!i:e.setAttribute(s,String(i)),(!1===i||"SCRIPT"===e.tagName&&a(s)&&(!i||"false"===i))&&(e.setAttribute(s,""),e.removeAttribute(s))}}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},9324:()=>{},2494:e=>{e.exports={style:{fontFamily:"'geistMono', 'geistMono Fallback'"},className:"__className_c3aa02",variable:"__variable_c3aa02"}},4415:e=>{e.exports={style:{fontFamily:"'geistSans', 'geistSans Fallback'"},className:"__className_1e4310",variable:"__variable_1e4310"}}},e=>{var t=t=>e(e.s=t);e.O(0,[30,441,517,358],()=>t(8972)),_N_E=e.O()}]);