!function(e){var t={};function n(o){if(t[o])return t[o].exports;var i=t[o]={i:o,l:!1,exports:{}};return e[o].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(o,i,function(t){return e[t]}.bind(null,i));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=12)}([function(e,t,n){"use strict";var o,i=function(){return void 0===o&&(o=Boolean(window&&document&&document.all&&!window.atob)),o},r=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),a=[];function c(e){for(var t=-1,n=0;n<a.length;n++)if(a[n].identifier===e){t=n;break}return t}function d(e,t){for(var n={},o=[],i=0;i<e.length;i++){var r=e[i],d=t.base?r[0]+t.base:r[0],s=n[d]||0,p="".concat(d," ").concat(s);n[d]=s+1;var l=c(p),u={css:r[1],media:r[2],sourceMap:r[3]};-1!==l?(a[l].references++,a[l].updater(u)):a.push({identifier:p,updater:h(u,t),references:1}),o.push(p)}return o}function s(e){var t=document.createElement("style"),o=e.attributes||{};if(void 0===o.nonce){var i=n.nc;i&&(o.nonce=i)}if(Object.keys(o).forEach((function(e){t.setAttribute(e,o[e])})),"function"==typeof e.insert)e.insert(t);else{var a=r(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}return t}var p,l=(p=[],function(e,t){return p[e]=t,p.filter(Boolean).join("\n")});function u(e,t,n,o){var i=n?"":o.media?"@media ".concat(o.media," {").concat(o.css,"}"):o.css;if(e.styleSheet)e.styleSheet.cssText=l(t,i);else{var r=document.createTextNode(i),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(r,a[t]):e.appendChild(r)}}function f(e,t,n){var o=n.css,i=n.media,r=n.sourceMap;if(i?e.setAttribute("media",i):e.removeAttribute("media"),r&&btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),e.styleSheet)e.styleSheet.cssText=o;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(o))}}var m=null,g=0;function h(e,t){var n,o,i;if(t.singleton){var r=g++;n=m||(m=s(t)),o=u.bind(null,n,r,!1),i=u.bind(null,n,r,!0)}else n=s(t),o=f.bind(null,n,t),i=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return o(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;o(e=t)}else i()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=i());var n=d(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var o=0;o<n.length;o++){var i=c(n[o]);a[i].references--}for(var r=d(e,t),s=0;s<n.length;s++){var p=c(n[s]);0===a[p].references&&(a[p].updater(),a.splice(p,1))}n=r}}}},function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n=e[1]||"",o=e[3];if(!o)return n;if(t&&"function"==typeof btoa){var i=(a=o,c=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),d="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),"/*# ".concat(d," */")),r=o.sources.map((function(e){return"/*# sourceURL=".concat(o.sourceRoot||"").concat(e," */")}));return[n].concat(r).concat([i]).join("\n")}var a,c,d;return[n].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,o){"string"==typeof e&&(e=[[null,e,""]]);var i={};if(o)for(var r=0;r<this.length;r++){var a=this[r][0];null!=a&&(i[a]=!0)}for(var c=0;c<e.length;c++){var d=[].concat(e[c]);o&&i[d[0]]||(n&&(d[2]?d[2]="".concat(n," and ").concat(d[2]):d[2]=n),t.push(d))}},t}},function(e,t,n){var o=n(0),i=n(3);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[e.i,i,""]]);var r={insert:"head",singleton:!1};o(i,r);e.exports=i.locals||{}},function(e,t,n){(t=n(1)(!1)).push([e.i,'@media (min-width: 500px) and (max-width: 768px){.modal-content .content{padding-top:20px;font-family:"Comic Sans MS", cursive, sans-serif}#des_d{text-transform:capitalize}#fromPixabay{max-width:300px;max-height:200px}.bg-modal{width:100%;height:100%;background-color:rgba(0,0,0,0.7);position:absolute;top:0;display:flex;justify-content:center;align-items:center;display:none}.modal-content{display:flex;flex-direction:column;justify-content:center;align-items:center;width:400px;height:500px;background-color:white;border-radius:4px;position:relative}.close{position:absolute;top:0;right:14px;font-size:42px;transform:rotate(45deg);cursor:pointer}#btn{font-family:fantasy;border-radius:15px;font-size:14px;padding:8px 20px;background:white}#btn:hover{background-image:linear-gradient(to right, #E7484F, #E7484F 16.65%, #F68B1D 16.65%, #F68B1D 33.3%, #FCED00 33.3%, #FCED00 49.95%, #009E4F 49.95%, #009E4F 66.6%, #00AAC3 66.6%, #00AAC3 83.25%, #732982 83.25%, #732982 100%, #E7484F 100%);animation:slidebg 2s linear infinite}@keyframes slidebg{to{background-position:20vw}}}@media (min-width: 769px){.modal-content .content{padding-top:30px;font-family:"Comic Sans MS", cursive, sans-serif}#des_d{text-transform:capitalize}#fromPixabay{max-width:500px;max-height:300px}.bg-modal{width:100%;height:100%;background-color:rgba(0,0,0,0.7);position:absolute;top:0;display:flex;justify-content:center;align-items:center;display:none}.modal-content{display:flex;flex-direction:column;justify-content:center;align-items:center;width:600px;height:600px;background-color:white;border-radius:4px;position:relative}.close{position:absolute;top:0;right:14px;font-size:42px;transform:rotate(45deg);cursor:pointer}#btn{font-family:fantasy;border-radius:15px;font-size:14px;padding:8px 20px;background:white;position:center}#btn:hover{background-image:linear-gradient(to right, #E7484F, #E7484F 16.65%, #F68B1D 16.65%, #F68B1D 33.3%, #FCED00 33.3%, #FCED00 49.95%, #009E4F 49.95%, #009E4F 66.6%, #00AAC3 66.6%, #00AAC3 83.25%, #732982 83.25%, #732982 100%, #E7484F 100%);animation:slidebg 2s linear infinite}@keyframes slidebg{to{background-position:20vw}}}\n',""]),e.exports=t},function(e,t,n){var o=n(0),i=n(5);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[e.i,i,""]]);var r={insert:"head",singleton:!1};o(i,r);e.exports=i.locals||{}},function(e,t,n){(t=n(1)(!1)).push([e.i,"@media only screen and (min-width: 500px) and (max-width: 768px){.entry{background:rgba(206,200,200,0.651);text-align:center;padding-top:30px;font-family:cursive;font-size:25px;text-align:center;width:400px;height:400px;margin-top:20px}label{margin:100px}input{border-top-style:hidden;border-right-style:hidden;border-left-style:hidden;border-bottom-style:hidden;background-color:rgba(206,200,200,0.651);font-size:25px}#generate{font-family:fantasy;border-radius:12px;font-size:15px;padding:10px 18px}#generate:hover{background-color:#9c9a9a}}@media (min-width: 769px){.entry{background:rgba(206,200,200,0.651);margin-top:5px;text-align:center;padding-top:40px;font-family:cursive;font-size:30px;text-align:center;width:600px;margin-top:20px}input{border-top-style:hidden;border-right-style:hidden;border-left-style:hidden;border-bottom-style:hidden;background-color:rgba(206,200,200,0.651);font-size:30px}#generate{font-family:fantasy;border-radius:12px;font-size:15px;padding:10px 18px}#generate:hover{background-color:#9c9a9a}}\n",""]),e.exports=t},function(e,t,n){var o=n(0),i=n(7);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[e.i,i,""]]);var r={insert:"head",singleton:!1};o(i,r);e.exports=i.locals||{}},function(e,t,n){(t=n(1)(!1)).push([e.i,"@media only screen and (min-width: 500px) and (max-width: 768px){.footer{grid-area:ft;background:white;font-family:cursive;width:400px;padding-left:10px}}@media (min-width: 769px){.footer{grid-area:ft;background:white;font-family:cursive;width:600px;padding-left:10px}}\n",""]),e.exports=t},function(e,t,n){var o=n(0),i=n(9);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[e.i,i,""]]);var r={insert:"head",singleton:!1};o(i,r);e.exports=i.locals||{}},function(e,t,n){(t=n(1)(!1)).push([e.i,"@media only screen and (min-width: 500px) and (max-width: 768px){.header{font-family:fantasy;font-size:30px;text-align:start;background-color:#676b70;padding-top:10px;padding-left:10px;width:400px}}@media (min-width: 769px){.header{font-family:fantasy;font-size:30px;text-align:start;background-color:#676b70;padding-top:10px;padding-left:10px;width:600px}}\n",""]),e.exports=t},function(e,t,n){var o=n(0),i=n(11);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[e.i,i,""]]);var r={insert:"head",singleton:!1};o(i,r);e.exports=i.locals||{}},function(e,t,n){(t=n(1)(!1)).push([e.i,"@media only screen and (min-width: 500px) and (max-width: 768px){.container{display:flex;flex-direction:column;align-items:center;margin-top:80px}}@media (min-width: 769px){.container{display:flex;flex-direction:column;align-items:center;margin-top:80px}}@media (min-width: 1200px){.container{display:flex;flex-direction:column;align-items:center;margin-top:80px}}\n",""]),e.exports=t},function(e,t,n){"use strict";n.r(t),n.d(t,"getGeoLocation",(function(){return o})),n.d(t,"performAction",(function(){return a})),n.d(t,"getWeather",(function(){return r})),n.d(t,"postData",(function(){return c})),n.d(t,"updateUI",(function(){return d})),n.d(t,"countDown",(function(){return i}));const o=async e=>{const t=`http://api.geonames.org/searchJSON?q=${e}&maxRows=10&username=elaine_20`,n=await fetch(t);try{const e={},t=await n.json();return e.latitude=t.geonames[0].lat,e.longitude=t.geonames[0].lng,e.countryName=t.geonames[0].countryName,e}catch(e){console.log(e)}},i=async e=>{const t=Date.now()/1e3,n=new Date(e).getTime()/1e3;return Math.ceil((n-t)/86400)};console.log(duration);const r=async(e,t,n)=>{const o=`http://api.weatherbit.io/v2.0/forecast/daily?lat=${e}&lon=${t}&key=a4ab190fd16842df9929c2c348d316a6`,i=await fetch(o);try{const e={},t=await i.json();return console.log(t),e.city=t.city_name,e.temp=t.data[n].temp,e.description=t.data[n].weather.description,e.icon=t.data[n].weather.icon,console.log(e),e}catch(e){console.log("error",e),alert("Weatherforcast is only available withnin 16 days!")}};async function a(e){const t=document.getElementById("des").value,n=document.getElementById("dep_date").value,a=await o(t),s=await i(n),p=await r(a.latitude,a.longitude,s),l=await(async e=>{const t=`https://pixabay.com/api/?key=17196217-36220e0e453b52a1af9fb3b09&q=${e}&image_type=photo&pretty=true&category=places`,n=await fetch(t);try{const e=await n.json();return e.hits[0].largeImageURL}catch(e){console.log("error",e)}})(t),u=await c("http://localhost:8081/add",{destination:t,country:a.countryName,date:n,temp:p.temp,description:p.description,icon:p.icon,url:l,duration:s});await d(u);document.querySelector(".bg-modal").style.display="flex",document.querySelector(".close").addEventListener("click",()=>{document.querySelector(".bg-modal").style.display="none"})}async function c(e="",t={}){const n=await fetch(e,{method:"POST",credentials:"same-origin",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});try{return await n.json()}catch(e){console.log("error",e)}}async function d(e){console.log("data",e);try{document.getElementById("des_d").innerHTML=e.destination,document.getElementById("country").innerHTML=e.country,document.getElementById("date_d").innerHTML=e.dep_date,document.getElementById("duration").innerHTML=e.duration,document.getElementById("temp").innerHTML=e.temp,document.getElementById("description").innerHTML=e.description,document.getElementById("icon").innerHTML=`<img src="src/client/media/icons/${e.icon}.png">`,document.getElementById("fromPixabay").src=e.url}catch(e){console.log("error",e)}}document.getElementById("generate").addEventListener("click",a);n(2),n(4),n(6),n(8),n(10),n.p,n.p,n.p,n.p,n.p,n.p,n.p,n.p,n.p,n.p,n.p,n.p,n.p,n.p,n.p,n.p,n.p,n.p,n.p,n.p,n.p,n.p,n.p,n.p,n.p,n.p,n.p,n.p,n.p,n.p,n.p,n.p,n.p,n.p,n.p,n.p,n.p,n.p,n.p,n.p,n.p,n.p,n.p,n.p,n.p,n.p,n.p,n.p,n.p,n.p,n.p,n.p,n.p,n.p,n.p,n.p,n.p,n.p,n.p,n.p,n.p,n.p,n.p}]);