(()=>{"use strict";var n,e,t,r,o,a,i,c,s,p,u,l,d,f,m={208:(n,e,t)=>{t.d(e,{A:()=>g});var r=t(601),o=t.n(r),a=t(314),i=t.n(a),c=t(417),s=t.n(c),p=new URL(t(245),t.b),u=new URL(t(745),t.b),l=new URL(t(453),t.b),d=i()(o()),f=s()(p),m=s()(u),h=s()(l);d.push([n.id,`html, body {\n    color: white;\n    margin: 0px;\n    padding: 0px;\n    background-color: rgb(0, 0, 0);\n    font-family:Verdana, Geneva, Tahoma, sans-serif\n}\n\nhtml{\n    display: flex;\n    flex-direction: column;\n}\n\n#mainLogo{\n    width: 100vw;\n}\n\nheader{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    padding: 20px;\n\n    color: white;\n    height: 400px;\n    background-image: url(${f});\n    background-size: cover;\n    background-repeat: no-repeat;\n    border-bottom: 2px solid rgb(75, 159, 107);\n    border-top: 2px solid rgb(75, 159, 107);\n\n}\n\n#contentMainText{\n    font-size: 50px;\n    text-shadow: 2px 2px black;\n}\n\n@keyframes flyInLeft {\n    from {\n        transform: translateX(-100%);\n        opacity: 0;\n    }\n    to {\n        transform: translateX(0);\n        opacity: 1;\n    }\n}\n\n.fly-in-left {\n    animation: flyInLeft 1.9s ease forwards;\n}\n\n.infoSection{\n    background-color: rgb(0, 0, 0);\n   display: flex;\n   justify-content: center;\n   align-items: center;\n   flex-direction: column;\n   padding: 10px;\n    border-bottom: 2px solid rgb(75, 159, 107);\n    border-radius: 5px;\n\n}\n\n@media (max-width: 600px) {\n    #mainLogo {\n        content: url(${m});\n    }\n\n    header{\n        height: 200px;\n    }\n\n    #contentMainText{\n        font-size: 30px;\n    }\n}\n\n@media (min-width: 601px) and (max-width: 1000px) {\n    #mainLogo {\n        content: url(${h});\n    }\n}\n\n`,""]);const g=d},314:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var p=0;p<n.length;p++){var u=[].concat(n[p]);r&&i[u[0]]||(void 0!==a&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=a),t&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=t):u[2]=t),o&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=o):u[4]="".concat(o)),e.push(u))}},e}},417:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},601:n=>{n.exports=function(n){return n[1]}},72:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var a={},i=[],c=0;c<n.length;c++){var s=n[c],p=r.base?s[0]+r.base:s[0],u=a[p]||0,l="".concat(p," ").concat(u);a[p]=u+1;var d=t(l),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==d)e[d].references++,e[d].updater(f);else{var m=o(f,r);r.byIndex=c,e.splice(c,0,{identifier:l,updater:m,references:1})}i.push(l)}return i}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var a=r(n=n||[],o=o||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var c=t(a[i]);e[c].references--}for(var s=r(n,o),p=0;p<a.length;p++){var u=t(a[p]);0===e[u].references&&(e[u].updater(),e.splice(u,1))}a=s}}},659:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},540:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},56:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},113:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},245:(n,e,t)=>{n.exports=t.p+"8183654d66f8c573f583.jpg"},453:(n,e,t)=>{n.exports=t.p+"73c2c7f2a8c72bbf0390.jpg"},745:(n,e,t)=>{n.exports=t.p+"0193e99629e38bbfd11f.jpg"}},h={};function g(n){var e=h[n];if(void 0!==e)return e.exports;var t=h[n]={id:n,exports:{}};return m[n](t,t.exports,g),t.exports}g.m=m,g.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return g.d(e,{a:e}),e},g.d=(n,e)=>{for(var t in e)g.o(e,t)&&!g.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:e[t]})},g.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),g.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;g.g.importScripts&&(n=g.g.location+"");var e=g.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var t=e.getElementsByTagName("script");if(t.length)for(var r=t.length-1;r>-1&&(!n||!/^http(s?):/.test(n));)n=t[r--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),g.p=n})(),g.b=document.baseURI||self.location.href,g.nc=void 0,n=g(72),e=g.n(n),t=g(825),r=g.n(t),o=g(659),a=g.n(o),i=g(56),c=g.n(i),s=g(540),p=g.n(s),u=g(113),l=g.n(u),d=g(208),(f={}).styleTagTransform=l(),f.setAttributes=c(),f.insert=a().bind(null,"head"),f.domAPI=r(),f.insertStyleElement=p(),e()(d.A,f),d.A&&d.A.locals&&d.A.locals,document.getElementById("fav").setAttribute("href","../src/img/soundwalkFavicon.jpg")})();