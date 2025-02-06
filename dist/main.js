(()=>{"use strict";var n={208:(n,e,t)=>{t.d(e,{A:()=>m});var r=t(601),o=t.n(r),i=t(314),a=t.n(i),p=t(417),d=t.n(p),c=new URL(t(60),t.b),s=new URL(t(175),t.b),l=new URL(t(141),t.b),x=new URL(t(798),t.b),f=a()(o()),u=d()(c),g=d()(s),b=d()(l),h=d()(x);f.push([n.id,`html,\nbody {\n    color: white;\n    margin: 0px;\n    padding: 0px;\n    background-color: rgb(0, 0, 0);\n    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif\n}\n\nbody {\n    display: flex;\n    flex-direction: column;\n    min-height: 100vh;\n    justify-content: center;\n}\n\n\na {\n    color: white;\n    text-decoration: none;\n}\n\na:visited {\n    color: white;\n}\n\na:hover {\n    color: rgb(75, 159, 107);\n}\n\nhtml {\n    display: flex;\n    flex-direction: column;\n}\n\nnav {\n    background-color: black;\n    display: flex;\n    justify-content: space-evenly;\n    align-items: center;\n    padding-bottom: 10px;\n    margin-top: -10px;\n    border-bottom: solid 3px rgb(75, 159, 107);\n\n}\n\n.main {\n    flex: 1;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n.selected {\n    color: rgb(75, 159, 107);\n    border-bottom: solid 2px rgb(75, 159, 107);\n}\n\n\n\n#mainLogo {\n    width: 100vw;\n\n\n}\n\n.mainHeader {\n    position: relative;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 100vw;\n    height: 300px;\n    color: white;\n    border-radius: 0 0 20% 20%;\n    border-bottom: 2px solid rgb(75, 159, 107);\n    border-top: 2px solid rgb(75, 159, 107);\n    overflow: hidden; /* Ensures video doesn’t overflow */\n}\n\n/* Background Video */\n.background-video{\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n\n    height: 100%;\n    width: 100%;\n    object-fit: cover; /* Makes sure the video covers the entire header */\n}\n\n.contactHeader {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 100vw;\n    color: white;\n    height: 300px;\n    background-image: url(${u});\n    background-position: center;\n    background-size: cover;\n\n    background-repeat: no-repeat;\n\n    border-bottom: 2px solid rgb(75, 159, 107);\n    border-top: 2px solid rgb(75, 159, 107);\n    border-radius: 0 0 20% 20%;\n\n}\n\n.showsHeader {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 100vw;\n    color: white;\n    height: 350px;\n    background-image: url(${g});\n    background-position: center;\n    background-size: cover;\n    font-size: 40px;\n\n    background-repeat: no-repeat;\n\n    border-bottom: 2px solid rgb(75, 159, 107);\n    border-top: 2px solid rgb(75, 159, 107);\n    border-radius: 0 0 20% 20%;\n}\n\n\n#screenTop {\n    position: sticky;\n    top: 0;\n    z-index: 9999;\n\n}\n\n\n#contentMainText {\n    font-size: 20px;\n    text-shadow: 2px 2px black;\n    padding: 0 30px 0 30px;\n}\n\n\n.infoSection {\n    background-color: rgb(0, 0, 0);\n    width: 70%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n    padding: 40px 30px 40px 30px;\n    border-bottom: 2px solid rgb(75, 159, 107);\n    max-width: 1100px;\n\n}\n\n.subheading {\n    color: rgb(105, 173, 200);\n}\n\n.bandMember {\n    width: 70%;\n    margin-bottom: 40px;\n}\n\n.bandMemberName {\n    color: rgb(75, 159, 107);\n    font-size: 20px;\n}\n\n.bandmemberImg {\n    height: 200px;\n    width: 200px;\n    border-radius: 50%;\n    border: 3px solid rgb(75, 159, 107);\n    object-fit: cover;\n    box-shadow: 0px 0px 20px rgb(75, 159, 107);\n}\n\n#KeithImg {\n    object-position: 0 5px;\n}\n\n#BarryImg {\n    object-position: -10px;\n}\n\n\nfooter {\n    height: 55px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n    padding: 5px 20px 5px 0;\n    background-color: rgb(0, 0, 0);\n    border-top: 2px solid rgb(75, 159, 107);\n    position: sticky;\n    bottom: 0;\n}\n\n.Eliza {\n    font-size: 12px;\n}\n\n.Fraser{\n    color: rgb(75, 159, 107);\n}\n\n.contactPage {\n    height: inherit;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    margin: 30px;\n    max-width: 1000px;\n}\n\n#formcaveats {\n    background-color: rgb(75, 159, 107, 0.6);\n    height: 200px;\n    font-size: 14px;\n    padding: 15px;\n    margin: 25px 25px 50px 25px;\n    border: 3px solid rgb(75, 159, 107);\n    box-shadow: 0px 0px 10px rgb(75, 159, 107);\n    border-radius: 10px;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-evenly;\n\n}\n\n#contactPageText {\n    margin: 20px;\n}\n\n#emailLink {\n    color: rgb(75, 159, 107);\n    font-weight: 800;\n}\n\n#enquiryForm {\n    display: flex;\n    flex-direction: column;\n    padding: 20px;\n    height: 500px;\n    width: 80vw;\n    justify-content: space-between;\n    align-items: center;\n    border: 2px solid rgb(75, 159, 107);\n    box-shadow: 0px 0px 10px rgb(75, 159, 107);\n    border-radius: 10px;\n    max-width: 600px;\n    overflow: hidden;\n}\n\n#Name,\n#Number,\n#Email {\n    width: 200px;\n}\n\n\n#Info {\n    max-height: 200px;\n    min-height: 200px;\n    min-width: 280px;\n    max-width: 281px;\n}\n\niframe{\n    margin: 30px;\n}\n\n#mediaPage {\n    flex: 1;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    flex-wrap: wrap;\n}\n\n.promoVidWrapper{\n    display: flex; \n    flex-wrap: wrap;\n    justify-content: center;\n}\n\n.titleVideoWrapper{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n}\n\n.YTVid {\n    border: 2px solid rgb(75, 159, 107);\n    border-radius: 10px;\n    box-shadow: 0px 0px 20px rgb(75, 159, 107);\n    margin-bottom: 60px;\n    height: 315px;\n    width: 560px;\n}\n\n.YTVidVert {\n    border: 2px solid rgb(75, 159, 107);\n    border-radius: 10px;\n    box-shadow: 0px 0px 20px rgb(75, 159, 107);\n    margin-bottom: 60px;\n    width: 315px;\n}\n\n#showsPage {\n    padding: 0;\n    flex: 1;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-evenly;\n    align-items: flex-start;\n    max-width: 700px;\n}\n\n.showYear {\n    font-weight: 800;\n    font-size: 22px;\n    padding-top: 40px;\n}\n\n.showMonth {\n    width: 320px;\n    font-size: 20px;\n    color: rgb(75, 159, 107);\n    font-weight: 600;\n    border-bottom: 2px solid rgb(255, 255, 255);\n}\n\n\n#gigItem {\n    width: 270px;\n    border: 2px solid rgb(75, 159, 107);\n    border-radius: 10px;\n    margin: 10px;\n    padding: 20px;\n    background-color: rgba(12, 48, 64, 0.5);\n    box-shadow: 0px 0px 10px rgb(75, 159, 107);\n\n}\n\n.venueHolder {\n    color: rgb(75, 159, 107);\n    font-weight: 800;\n}\n\n\n\n\n@keyframes flyInLeft {\n    from {\n        transform: translateX(-100%);\n        opacity: 0;\n    }\n\n    to {\n        transform: translateX(0);\n        opacity: 1;\n    }\n}\n\n.fly-in-left {\n    animation: flyInLeft 1.9s ease forwards;\n}\n\n\n\n@media (max-width: 600px) {\n    #mainLogo {\n        content: url(${b});\n    }\n\n    .mainHeader,\n    .contactHeader,\n    .showsHeader {\n        height: 200px;\n    }\n\n    #contentMainText {\n        font-size: 20px;\n    }\n\n    .YTVid {\n        width: 300px;\n        height: 169px;\n    }\n\n    .YTVidVert {\n        width: 300px;\n    }\n\n    .bandMember {\n        width: 300px;\n    }\n\n}\n\n@media (min-width: 601px) and (max-width: 1000px) {\n    #mainLogo {\n        content: url(${h});\n        max-height: 200px;\n    }\n\n\n\n\n    nav {\n        padding: 0 100px 10px 100px;\n    }\n}\n\n@media (min-width: 1001px) {\n\n    nav {\n        padding: 0 200px 10px 200px;\n\n    }\n\n    #mainLogo {\n        max-height: 200px;\n    }\n\n\n\n    header {\n        background-position: 0 -65px;\n        \n    }\n\n    .mainHeader{\n        height: 500px;\n    }\n\n}`,""]);const m=f},314:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,i){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(r)for(var p=0;p<this.length;p++){var d=this[p][0];null!=d&&(a[d]=!0)}for(var c=0;c<n.length;c++){var s=[].concat(n[c]);r&&a[s[0]]||(void 0!==i&&(void 0===s[5]||(s[1]="@layer".concat(s[5].length>0?" ".concat(s[5]):""," {").concat(s[1],"}")),s[5]=i),t&&(s[2]?(s[1]="@media ".concat(s[2]," {").concat(s[1],"}"),s[2]=t):s[2]=t),o&&(s[4]?(s[1]="@supports (".concat(s[4],") {").concat(s[1],"}"),s[4]=o):s[4]="".concat(o)),e.push(s))}},e}},417:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},601:n=>{n.exports=function(n){return n[1]}},72:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var i={},a=[],p=0;p<n.length;p++){var d=n[p],c=r.base?d[0]+r.base:d[0],s=i[c]||0,l="".concat(c," ").concat(s);i[c]=s+1;var x=t(l),f={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==x)e[x].references++,e[x].updater(f);else{var u=o(f,r);r.byIndex=p,e.splice(p,0,{identifier:l,updater:u,references:1})}a.push(l)}return a}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var i=r(n=n||[],o=o||{});return function(n){n=n||[];for(var a=0;a<i.length;a++){var p=t(i[a]);e[p].references--}for(var d=r(n,o),c=0;c<i.length;c++){var s=t(i[c]);0===e[s].references&&(e[s].updater(),e.splice(s,1))}i=d}}},659:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},540:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},56:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},113:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},60:(n,e,t)=>{n.exports=t.p+"a34ff81fe9efc5f60e01.jpeg"},798:(n,e,t)=>{n.exports=t.p+"73c2c7f2a8c72bbf0390.jpg"},141:(n,e,t)=>{n.exports=t.p+"0193e99629e38bbfd11f.jpg"},175:(n,e,t)=>{n.exports=t.p+"3d7652d038f4010fe410.jpeg"}},e={};function t(r){var o=e[r];if(void 0!==o)return o.exports;var i=e[r]={id:r,exports:{}};return n[r](i,i.exports,t),i.exports}t.m=n,t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var r=e.getElementsByTagName("script");if(r.length)for(var o=r.length-1;o>-1&&(!n||!/^http(s?):/.test(n));)n=r[o--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.b=document.baseURI||self.location.href,t.nc=void 0;var r=t(72),o=t.n(r),i=t(825),a=t.n(i),p=t(659),d=t.n(p),c=t(56),s=t.n(c),l=t(540),x=t.n(l),f=t(113),u=t.n(f),g=t(208),b={};b.styleTagTransform=u(),b.setAttributes=s(),b.insert=d().bind(null,"head"),b.domAPI=a(),b.insertStyleElement=x(),o()(g.A,b),g.A&&g.A.locals&&g.A.locals})();