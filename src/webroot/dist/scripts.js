!function(n){"undefined"==typeof Promise&&function(){"use strict";function e(t){var n=this.constructor;return this.then(function(e){return n.resolve(t()).then(function(){return e})},function(e){return n.resolve(t()).then(function(){return n.reject(e)})})}function r(){}function i(e){if(!(this instanceof i))throw new TypeError("Promises must be constructed via new");if("function"!=typeof e)throw new TypeError("not a function");this._state=0,this._handled=!1,this._value=void 0,this._deferreds=[],l(e,this)}function o(n,r){for(;3===n._state;)n=n._value;0!==n._state?(n._handled=!0,i._immediateFn(function(){var e=1===n._state?r.onFulfilled:r.onRejected;if(null!==e){var t;try{t=e(n._value)}catch(e){return void f(r.promise,e)}u(r.promise,t)}else(1===n._state?u:f)(r.promise,n._value)})):n._deferreds.push(r)}function u(t,e){try{if(e===t)throw new TypeError("A promise cannot be resolved with itself.");if(e&&("object"==typeof e||"function"==typeof e)){var n=e.then;if(e instanceof i)return t._state=3,t._value=e,void c(t);if("function"==typeof n)return void l(function(e,t){return function(){e.apply(t,arguments)}}(n,e),t)}t._state=1,t._value=e,c(t)}catch(e){f(t,e)}}function f(e,t){e._state=2,e._value=t,c(e)}function c(e){2===e._state&&0===e._deferreds.length&&i._immediateFn(function(){e._handled||i._unhandledRejectionFn(e._value)});for(var t=0,n=e._deferreds.length;t<n;t++)o(e,e._deferreds[t]);e._deferreds=null}function l(e,t){var n=!1;try{e(function(e){n||(n=!0,u(t,e))},function(e){n||(n=!0,f(t,e))})}catch(e){if(n)return;n=!0,f(t,e)}}var t=setTimeout;i.prototype.catch=function(e){return this.then(null,e)},i.prototype.then=function(e,t){var n=new this.constructor(r);return o(this,new function(e,t,n){this.onFulfilled="function"==typeof e?e:null,this.onRejected="function"==typeof t?t:null,this.promise=n}(e,t,n)),n},i.prototype.finally=e,i.all=function(t){return new i(function(r,o){function i(t,e){try{if(e&&("object"==typeof e||"function"==typeof e)){var n=e.then;if("function"==typeof n)return void n.call(e,function(e){i(t,e)},o)}u[t]=e,0==--f&&r(u)}catch(e){o(e)}}if(!t||"undefined"==typeof t.length)throw new TypeError("Promise.all accepts an array");var u=Array.prototype.slice.call(t);if(0===u.length)return r([]);for(var f=u.length,e=0;u.length>e;e++)i(e,u[e])})},i.resolve=function(t){return t&&"object"==typeof t&&t.constructor===i?t:new i(function(e){e(t)})},i.reject=function(n){return new i(function(e,t){t(n)})},i.race=function(o){return new i(function(e,t){for(var n=0,r=o.length;n<r;n++)o[n].then(e,t)})},i._immediateFn="function"==typeof setImmediate&&function(e){setImmediate(e)}||function(e){t(e,0)},i._unhandledRejectionFn=function(e){void 0!==console&&console&&console.warn("Possible Unhandled Promise Rejection:",e)};var n=function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if("undefined"!=typeof global)return global;throw Error("unable to locate global object")}();"Promise"in n?n.Promise.prototype.finally||(n.Promise.prototype.finally=e):n.Promise=i}();var r={};function o(e){if(r[e])return r[e].exports;var t=r[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,o),t.l=!0,t.exports}o.m=n,o.c=r,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(n,r,function(e){return t[e]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="","function"!=typeof o.e&&(o.e=function(e){return Promise.resolve(e)}),o(o.s=0)}([function(e,t,n){"use strict";n.r(t);n(1)},function(e,t){document.addEventListener("DOMContentLoaded",function(){var n={$mailAddress:document.getElementById("mail"),$phoneNumber:document.getElementById("phone")},e={decrypter:{clickableMail:function(){if(0===n.$mailAddress.querySelectorAll("a").length){var e=n.$mailAddress.innerHTML;e=e.replace(/#at#/,"@").replace(/#dot#/,".");var t=document.createElement("a");t.setAttribute("href","mailto:"+e),t.textContent=e,n.$mailAddress.replaceWith(t)}},phoneNumber:function(){n.$phoneNumber.innerHTML=n.$phoneNumber.innerHTML.replace(/#/gi," ")}},init:function(){e.decrypter.clickableMail(),e.decrypter.phoneNumber()}};e.init()},!1)}]);
//# sourceMappingURL=setEntry-3379746751ffa1334aa0f97db7a41826.js.map