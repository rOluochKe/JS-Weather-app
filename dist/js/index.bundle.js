!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);const o=document.querySelector(".ajax-section .cities");var r=(e,t,n,r,c,s,a)=>{const i=document.createElement("li");i.classList.add("city");const l=`\n    <h2 class="city-name" data-name="${t},${n.country}">\n      <span>${t}</span>\n      <sup>${n.country}</sup>\n    </h2>\n    <div class="city-temp celc">${Math.round(e.temp)}<sup>°C</sup></div>\n    <div class="city-temp faren d-none">${a}<sup>°F</sup></div>\n    <button class="toggle-me">°C - °F</button>\n    <figure>\n      <img class="city-icon" src="${c}" alt="${r[0].description}">\n      <figcaption>${r[0].description}</figcaption>\n    </figure>\n  `;i.innerHTML=l,o.appendChild(i),document.querySelectorAll(".toggle-me").forEach(e=>{e.addEventListener("click",e=>{const t=e.target.parentNode,n=t.querySelector(".celc"),o=t.querySelector(".faren");n.classList.contains("d-none")?(n.classList.remove("d-none"),n.classList.add("d-block"),o.classList.remove("d-block"),o.classList.add("d-none")):o.classList.contains("d-none")&&(n.classList.remove("d-block"),n.classList.add("d-none"),o.classList.remove("d-none"),o.classList.add("d-block"))})})};const c=document.querySelector(".top-banner .msg");var s=e=>{fetch(`https://api.openweathermap.org/data/2.5/weather?q=${e}&appid=b9d786489eff73f5cec702d51ff7bba6&units=metric`).then(e=>e.json()).then(e=>{const{main:t,name:n,sys:o,weather:c}=e,s=`https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${c[0].icon}.svg`,a=t.temp;r(t,n,o,c,s,a,""+Math.round(1.8*a+32))}).catch(()=>{c.textContent="Please search for a valid city 😩"})};const a=document.querySelector(".top-banner form"),i=document.querySelector(".top-banner input"),l=document.querySelector(".top-banner .msg"),u=document.querySelector(".ajax-section .cities");(()=>{a.addEventListener("submit",e=>{e.preventDefault();let t=i.value;const n=u.querySelectorAll(".ajax-section .city"),o=Array.from(n);if(o.length>0){const e=o.filter(e=>{let n="";return t.includes(",")?t.split(",")[1].length>2?(t=t.split(",")[0],n=e.querySelector(".city-name span").textContent.toLowerCase()):n=e.querySelector(".city-name").dataset.name.toLowerCase():n=e.querySelector(".city-name span").textContent.toLowerCase(),n===t.toLowerCase()});e.length>0&&(l.textContent=`You already know the weather for ${e[0].querySelector(".city-name span").textContent} ...otherwise be more specific by providing the country code as well 😉`,a.reset(),i.focus())}s(t),l.textContent="",a.reset(),i.focus()})})()}]);