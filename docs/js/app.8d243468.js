(function(){"use strict";var e={6211:function(e,t,n){var r=n(9242),o=n(3396);const a={class:"container mx-auto my-4"};function i(e,t,n,r,i,u){const c=(0,o.up)("AppNav"),s=(0,o.up)("RouterView");return(0,o.wg)(),(0,o.iD)("div",null,[(0,o.Wm)(c),(0,o._)("div",a,[(0,o.Wm)(s)])])}const u=e=>((0,o.dD)("data-v-1d4aa7ae"),e=e(),(0,o.Cn)(),e),c={class:"shadow-md"},s={class:"h-[50px] flex justify-between items-center px-6 py-2 bg-gray-800 text-white"},l=u((()=>(0,o._)("div",{class:"font-bold"},"Тестовое задание",-1))),f={class:"flex flex-row space-x-2"};function d(e,t,n,r,a,i){const u=(0,o.up)("RouterLink");return(0,o.wg)(),(0,o.iD)("header",c,[(0,o._)("nav",s,[l,(0,o._)("ul",f,[(0,o._)("li",null,[(0,o.Wm)(u,{to:"/",class:"btn"},{default:(0,o.w5)((()=>[(0,o.Uk)("Home")])),_:1})]),(0,o._)("li",null,[(0,o.Wm)(u,{to:"/map",class:"btn"},{default:(0,o.w5)((()=>[(0,o.Uk)("Map")])),_:1})]),(0,o._)("li",null,[(0,o.Wm)(u,{to:"/timer-page",class:"btn"},{default:(0,o.w5)((()=>[(0,o.Uk)("Timer")])),_:1})])])])])}var p=(0,o.aZ)({setup(){return{}}}),v=n(89);const m=(0,v.Z)(p,[["render",d],["__scopeId","data-v-1d4aa7ae"]]);var h=m,b=n(5715),g=(0,o.aZ)({components:{AppNav:h},setup(){const e=(0,b.G)();return e.startTimer(),{}}});const w=(0,v.Z)(g,[["render",i]]);var y=w,_=n(2483);const O=[{path:"/",name:"home",component:()=>n.e(177).then(n.bind(n,2152))},{path:"/map",name:"map",component:()=>n.e(443).then(n.bind(n,1097))},{path:"/timer-page",name:"timer-page",component:()=>n.e(443).then(n.bind(n,5138))}],k=(0,_.p7)({history:(0,_.PO)("/TestCaseValera/"),routes:O});var T=k,j=n(1020),x={install:e=>{e.component("AppTest",S)}};const S=(0,o.aZ)({name:"AppTest",setup(){return()=>(0,o.h)("div",{class:"test"},["test"])}}),C=(0,j.WB)(),A=(0,r.ri)(y);A.use(T),A.use(C),A.use(x),A.mount("#app")},5715:function(e,t,n){n.d(t,{G:function(){return a}});var r=n(4870),o=n(1020);const a=(0,o.Q_)("timer",(()=>{const e="times",t=(0,r.iH)(0),n=(0,r.iH)(!1),o=()=>{a(),u(),setInterval((()=>{t.value++,c()}),1e3)},a=()=>{try{void 0===window.localStorage&&(n.value=!0)}catch(e){n.value=!0}},i=()=>{t.value=0,n.value||window.localStorage.removeItem(e)},u=()=>{if(n.value)return;const r=JSON.parse(window.localStorage.getItem(e)??"0");t.value=r},c=()=>{n.value||window.localStorage.setItem(e,JSON.stringify(t.value))};return{time:t,startTimer:o,reset:i}}))}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={exports:{}};return e[r](a,a.exports,n),a.exports}n.m=e,function(){var e=[];n.O=function(t,r,o,a){if(!r){var i=1/0;for(l=0;l<e.length;l++){r=e[l][0],o=e[l][1],a=e[l][2];for(var u=!0,c=0;c<r.length;c++)(!1&a||i>=a)&&Object.keys(n.O).every((function(e){return n.O[e](r[c])}))?r.splice(c--,1):(u=!1,a<i&&(i=a));if(u){e.splice(l--,1);var s=o();void 0!==s&&(t=s)}}return t}a=a||0;for(var l=e.length;l>0&&e[l-1][2]>a;l--)e[l]=e[l-1];e[l]=[r,o,a]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,r){return n.f[r](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+{177:"home",443:"about"}[e]+"."+{177:"3a1be738",443:"1b53e3d6"}[e]+".js"}}(),function(){n.miniCssF=function(e){}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="test-case-valera:";n.l=function(r,o,a,i){if(e[r])e[r].push(o);else{var u,c;if(void 0!==a)for(var s=document.getElementsByTagName("script"),l=0;l<s.length;l++){var f=s[l];if(f.getAttribute("src")==r||f.getAttribute("data-webpack")==t+a){u=f;break}}u||(c=!0,u=document.createElement("script"),u.charset="utf-8",u.timeout=120,n.nc&&u.setAttribute("nonce",n.nc),u.setAttribute("data-webpack",t+a),u.src=r),e[r]=[o];var d=function(t,n){u.onerror=u.onload=null,clearTimeout(p);var o=e[r];if(delete e[r],u.parentNode&&u.parentNode.removeChild(u),o&&o.forEach((function(e){return e(n)})),t)return t(n)},p=setTimeout(d.bind(null,void 0,{type:"timeout",target:u}),12e4);u.onerror=d.bind(null,u.onerror),u.onload=d.bind(null,u.onload),c&&document.head.appendChild(u)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/TestCaseValera/"}(),function(){var e={143:0};n.f.j=function(t,r){var o=n.o(e,t)?e[t]:void 0;if(0!==o)if(o)r.push(o[2]);else{var a=new Promise((function(n,r){o=e[t]=[n,r]}));r.push(o[2]=a);var i=n.p+n.u(t),u=new Error,c=function(r){if(n.o(e,t)&&(o=e[t],0!==o&&(e[t]=void 0),o)){var a=r&&("load"===r.type?"missing":r.type),i=r&&r.target&&r.target.src;u.message="Loading chunk "+t+" failed.\n("+a+": "+i+")",u.name="ChunkLoadError",u.type=a,u.request=i,o[1](u)}};n.l(i,c,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,r){var o,a,i=r[0],u=r[1],c=r[2],s=0;if(i.some((function(t){return 0!==e[t]}))){for(o in u)n.o(u,o)&&(n.m[o]=u[o]);if(c)var l=c(n)}for(t&&t(r);s<i.length;s++)a=i[s],n.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return n.O(l)},r=self["webpackChunktest_case_valera"]=self["webpackChunktest_case_valera"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(6211)}));r=n.O(r)})();
//# sourceMappingURL=app.8d243468.js.map