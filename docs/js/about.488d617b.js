"use strict";(self["webpackChunktest_case_valera"]=self["webpackChunktest_case_valera"]||[]).push([[443],{294:function(a,n,e){e.r(n),e.d(n,{default:function(){return w}});var t=e(3396);const r=(0,t._)("div",null,"Map",-1);function o(a,n,e,o,s,i){const p=(0,t.up)("AppYaMap");return(0,t.wg)(),(0,t.iD)(t.HY,null,[r,(0,t.Wm)(p)],64)}const s={id:"yamaps",ref:"yamaps",style:{width:"400xp",height:"400px"}};function i(a,n,e,r,o,i){return(0,t.wg)(),(0,t.iD)("div",null,[(0,t._)("div",s,null,512)])}var p=e(4870);function d(a){const{el:n,coordinate:e,zoom:t,markerCoordinate:r}=a,o=async()=>{await ymaps3.ready;const{YMapZoomControl:a,YMapGeolocationControl:o}=await ymaps3.import("@yandex/ymaps3-controls@0.0.1"),{YMapDefaultMarker:s}=await ymaps3.import("@yandex/ymaps3-markers@0.0.1"),i=new ymaps3.YMap(n,{location:{center:e,zoom:t}});i.addChild(new ymaps3.YMapDefaultSchemeLayer({})),i.addChild(new ymaps3.YMapDefaultFeaturesLayer({})),i.addChild(new ymaps3.YMapControls({position:"right"}).addChild(new a({})).addChild(new o({}))),i.addChild(new s({coordinates:r}))};return{initYandexMap:o}}var c=(0,t.aZ)({setup(){const a=(0,p.iH)(null),n=async()=>{const n={el:a.value,coordinate:[76.67697540222169,66.08869000789291],zoom:13,markerCoordinate:[76.67697540222169,66.08869000789291]},{initYandexMap:e}=d(n);await e()};return(0,t.bv)(n),{yamaps:a}}}),u=e(89);const l=(0,u.Z)(c,[["render",i]]);var m=l,y=(0,t.aZ)({setup(){return{}},components:{AppYaMap:m}});const v=(0,u.Z)(y,[["render",o]]);var w=v},5138:function(a,n,e){e.r(n),e.d(n,{default:function(){return h}});var t=e(3396);const r=(0,t._)("div",null,"Время нахождения на сайте",-1);function o(a,n,e,o,s,i){const p=(0,t.up)("AppTimer");return(0,t.wg)(),(0,t.iD)(t.HY,null,[r,(0,t.Wm)(p)],64)}var s=e(7139),i=e(4870),p=e(5715),d=e(1020);function c(){const a=(0,p.G)(),{time:n}=(0,d.Jk)(a),{reset:e}=a;return{time:n,reset:e}}const u={class:"mb-2"};var l=(0,t.aZ)({__name:"AppTimer",setup(a){const{time:n,reset:e}=c();return(a,r)=>((0,t.wg)(),(0,t.iD)(t.HY,null,[(0,t._)("div",u,"Вы на сайте уже "+(0,s.zw)((0,i.SU)(n))+" секунд",1),(0,t._)("button",{onClick:r[0]||(r[0]=(...a)=>(0,i.SU)(e)&&(0,i.SU)(e)(...a)),class:"px-6 py-1 border rounded-md border-gray-800"}," Reset ")],64))}});const m=l;var y=m,v=(0,t.aZ)({components:{AppTimer:y}}),w=e(89);const f=(0,w.Z)(v,[["render",o]]);var h=f}}]);
//# sourceMappingURL=about.488d617b.js.map