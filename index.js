!function(e){function t(t){for(var n,o,i=t[0],a=t[1],c=0,u=[];c<i.length;c++)o=i[c],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&u.push(r[o][0]),r[o]=0;for(n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n]);for(l&&l(t);u.length;)u.shift()()}var n={},r={0:0};var o={};var i={2:function(){return{"./index_bg.js":{__wbindgen_string_new:function(e,t){return n[1].exports.g(e,t)},__wbg_log_8c015365353ccd49:function(e){return n[1].exports.a(e)},__wbindgen_object_drop_ref:function(e){return n[1].exports.e(e)},__wbindgen_json_parse:function(e,t){return n[1].exports.d(e,t)},__wbg_new_6b6f346b4912cdae:function(){return n[1].exports.b()},__wbg_push_f353108e20ec67a0:function(e,t){return n[1].exports.c(e,t)},__wbindgen_throw:function(e,t){return n[1].exports.h(e,t)},__wbindgen_rethrow:function(e){return n[1].exports.f(e)}}}}};function a(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,a),r.l=!0,r.exports}a.e=function(e){var t=[],n=r[e];if(0!==n)if(n)t.push(n[2]);else{var c=new Promise((function(t,o){n=r[e]=[t,o]}));t.push(n[2]=c);var u,s=document.createElement("script");s.charset="utf-8",s.timeout=120,a.nc&&s.setAttribute("nonce",a.nc),s.src=function(e){return a.p+""+({}[e]||e)+".js"}(e);var l=new Error;u=function(t){s.onerror=s.onload=null,clearTimeout(d);var n=r[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+o+": "+i+")",l.name="ChunkLoadError",l.type=o,l.request=i,n[1](l)}r[e]=void 0}};var d=setTimeout((function(){u({type:"timeout",target:s})}),12e4);s.onerror=s.onload=u,document.head.appendChild(s)}return({1:[2]}[e]||[]).forEach((function(e){var n=o[e];if(n)t.push(n);else{var r,c=i[e](),u=fetch(a.p+""+{2:"e0f96d4524dbc4ca1299"}[e]+".module.wasm");if(c instanceof Promise&&"function"==typeof WebAssembly.compileStreaming)r=Promise.all([WebAssembly.compileStreaming(u),c]).then((function(e){return WebAssembly.instantiate(e[0],e[1])}));else if("function"==typeof WebAssembly.instantiateStreaming)r=WebAssembly.instantiateStreaming(u,c);else{r=u.then((function(e){return e.arrayBuffer()})).then((function(e){return WebAssembly.instantiate(e,c)}))}t.push(o[e]=r.then((function(t){return a.w[e]=(t.instance||t).exports})))}})),Promise.all(t)},a.m=e,a.c=n,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(n,r,function(t){return e[t]}.bind(null,r));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="",a.oe=function(e){throw console.error(e),e},a.w={};var c=window.webpackJsonp=window.webpackJsonp||[],u=c.push.bind(c);c.push=t,c=c.slice();for(var s=0;s<c.length;s++)t(c[s]);var l=u;a(a.s=0)}([function(e,t,n){"use strict";n.r(t);const r=(...e)=>{const t=document.createElement("div");e.forEach(e=>{t.appendChild(e)}),document.body.appendChild(t)},o=(e,t)=>{const n=document.createElement("button");return n.appendChild(document.createTextNode(e)),n.addEventListener("click",t),n},i=(e,t,n,r)=>{const o=document.createElement("label");o.appendChild(document.createTextNode(e));const i=document.createElement("input");return i.setAttribute("type",t),i.addEventListener(n,r),o.appendChild(i),o};(async()=>{const e=await n.e(1).then(n.bind(null,4));r(o("Hello from C",()=>{const t=e.greet_c(99);alert(t)})),window.AudioContext=window.AudioContext||window.webkitAudioContext;const t=new AudioContext,a=t.sampleRate;let c;r(o("Audio start",()=>{const n=e.synth(440,1,a),r=t.createBuffer(2,1*a,a);r.getChannelData(0).set(n),r.getChannelData(1).set(n),c=t.createBufferSource(),c.buffer=r,c.connect(t.destination),c.start()}),o("Audio stop",()=>{c&&c.stop()})),r(i("Load image and modify","file","change",t=>{const n=t.target.files;if(!n)return;const o=n[0],i=new FileReader;i.onload=()=>{const t=new Uint8Array(i.result),n=e.process(t),o=n.width,a=n.height,c=document.createElement("canvas");c.setAttribute("width",o),c.setAttribute("height",a),r(c);const u=c.getContext("2d"),s=u.createImageData(o,a);s.data.set(n.pixels),u.putImageData(s,0,0)},i.readAsArrayBuffer(o)}));const u=document.createElement("span");r(i("Tokenize Japanese","text","input",t=>{const n=e.tokenize(t.target.value);u.innerHTML=n}),u),r(i("Archive file","file","change",t=>{const n=t.target.files;if(!n)return;const r=n[0],o=new FileReader;o.onload=()=>{const t=new Uint8Array(o.result),n=e.archive(t),i=new File([n],r.name+".gz",{type:"application/gzip"}),a=document.createElement("a");a.setAttribute("href",URL.createObjectURL(i)),a.setAttribute("download",i.name),a.click()},o.readAsArrayBuffer(r)}))})()}]);