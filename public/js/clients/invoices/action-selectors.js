/*! For license information please see action-selectors.js.LICENSE.txt */
!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s=5)}({5:function(e,t,n){e.exports=n("Boob")},Boob:function(e,t){function n(e,t){var n;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var o=0,c=function(){};return{s:c,n:function(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}},e:function(e){throw e},f:c}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var u,i=!0,l=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return i=e.done,e},e:function(e){l=!0,u=e},f:function(){try{i||null==n.return||n.return()}finally{if(l)throw u}}}}function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}(new(function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.parentElement=document.querySelector(".form-check-parent"),this.parentForm=document.getElementById("bulkActions")}var t,r,c;return t=e,(r=[{key:"watchCheckboxes",value:function(e){var t=this;document.querySelectorAll(".child-hidden-input").forEach((function(e){return e.remove()})),document.querySelectorAll(".form-check-child").forEach((function(n){e.checked?(n.checked=e.checked,t.processChildItem(n,document.getElementById("bulkActions"))):(n.checked=!1,document.querySelectorAll(".child-hidden-input").forEach((function(e){return e.remove()})))}))}},{key:"processChildItem",value:function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(r.hasOwnProperty("single")&&document.querySelectorAll(".child-hidden-input").forEach((function(e){return e.remove()})),!1!==e.checked){var o=document.createElement("INPUT");o.setAttribute("name","invoices[]"),o.setAttribute("value",e.dataset.value),o.setAttribute("class","child-hidden-input"),o.hidden=!0,t.append(o)}else{var c,u=document.querySelectorAll("input.child-hidden-input"),i=n(u);try{for(i.s();!(c=i.n()).done;){var l=c.value;l.value==e.dataset.value&&l.remove()}}catch(e){i.e(e)}finally{i.f()}}}},{key:"handle",value:function(){var e=this;this.parentElement.addEventListener("click",(function(){e.watchCheckboxes(e.parentElement)}));var t,r=n(document.querySelectorAll(".form-check-child"));try{var o=function(){var n=t.value;n.addEventListener("click",(function(){e.processChildItem(n,e.parentForm)}))};for(r.s();!(t=r.n()).done;)o()}catch(e){r.e(e)}finally{r.f()}}}])&&o(t.prototype,r),c&&o(t,c),e}())).handle()}});