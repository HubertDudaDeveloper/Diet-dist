if(!self.define){let e,i={};const s=(s,t)=>(s=new URL(s+".js",t).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(t,r)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(i[n])return;let o={};const c=e=>s(e,n),l={module:{uri:n},exports:o,require:c};i[n]=Promise.all(t.map((e=>l[e]||c(e)))).then((e=>(r(...e),o)))}}define(["./workbox-db5fc017"],(function(e){"use strict";e.setCacheNameDetails({prefix:"diet-vue"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"/Diet-dist/css/app.fce1f1c2.css",revision:null},{url:"/Diet-dist/css/chunk-vendors.45761422.css",revision:null},{url:"/Diet-dist/img/hero.4858c1dd.jpg",revision:null},{url:"/Diet-dist/index.html",revision:"5ec3a6761c70484c09e0a04141991277"},{url:"/Diet-dist/js/about.4cffc812.js",revision:null},{url:"/Diet-dist/js/app.af11334a.js",revision:null},{url:"/Diet-dist/js/chunk-vendors.390911a6.js",revision:null},{url:"/Diet-dist/manifest.json",revision:"c6395820283534cbefb964df571686b7"},{url:"/Diet-dist/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map
