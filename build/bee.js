!function(e){function n(o){if(t[o])return t[o].exports;var i=t[o]={exports:{},id:o,loaded:!1};return e[o].call(i.exports,i,i.exports,n),i.loaded=!0,i.exports}var t={};return n.m=e,n.c=t,n.p="",n(0)}([function(e,n,t){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}var i=t(1),r=o(i),a=t(34),c=o(a),l={version:"0.0.1"};l.fly=function(e){switch(e.type){case"click":r["default"].clickMode(e)}},window.bee=l;var s=document.createRange(),u=s.createContextualFragment(c["default"]);document.body.insertBefore(u,document.body.childNodes[0])},function(e,n,t){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(n,"__esModule",{value:!0});var i=t(2),r=o(i),a={clickMode:function(e){for(var n=document.getElementsByClassName(e.className),t=function(t,o){n[t].addEventListener("click",function(){e.content=this.innerHTML,e.index=t;var n=new r["default"](e);n.addEventListener(),n.focus()})},o=0,i=n.length;o<i;o++)t(o,i)}};n["default"]=a},function(e,n,t){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(n,"__esModule",{value:!0});var i=t(3),r=o(i),a=t(4),c=o(a);t(23),t(27);var l=t(29),s=o(l),u=t(30),d=o(u),f=t(31),v=(o(f),t(32)),h=o(v),p=t(33),m=o(p),g=function(){function e(n){(0,r["default"])(this,e);var t=document.createElement("div");t.className="bee-backdrop",t.innerHTML=s["default"].getClickerModalHTML(n),document.body.appendChild(t),this.modal=t,this.config=n,this.editor=this.modal.querySelector("div#bee-editor-content")}return(0,c["default"])(e,[{key:"addEventListener",value:function(){var e=this;this.modal.querySelector("div.bee-modal").addEventListener("click",function(e){d["default"].stopPropagation(e)}),this.modal.querySelector("button.bee-btn-cancel").addEventListener("click",function(n){d["default"].stopPropagation(n),d["default"].destroy(e.modal)}),this.modal.querySelector("button.bee-btn-ok").addEventListener("click",function(n){d["default"].stopPropagation(n);var t=e.editor.innerHTML;e.config.okCallback(t,e.config.index),d["default"].destroy(e.modal)}),this.modal.querySelector("div#bee-editor-content").addEventListener("blur",function(){console.log("xxx::",h["default"]),h["default"].getRangeAt&&h["default"].rangeCount&&e.setRange(h["default"].getRangeAt(0))},!0),this.modal.querySelector("input.upload-image").addEventListener("change",function(){(0,m["default"])(this.files,this._range)});var n=this.modal.querySelector("li.unordered-list");n&&n.addEventListener("click",function(){var n=e.getRange(),t=n.commonAncestorContainer.firstElementChild;if(t)n.commonAncestorContainer.removeChild(n.commonAncestorContainer.firstElementChild),e.switchToListElement("ul",n.commonAncestorContainer,t);else{var o=n.commonAncestorContainer.parentNode;t=n.commonAncestorContainer,o.removeChild(n.commonAncestorContainer),e.switchToListElement("ul",o,t)}});var t=this.modal.querySelector("li.ordered-list");t&&t.addEventListener("click",function(){var n=e.getRange(),t=n.commonAncestorContainer.firstElementChild;if(t)n.commonAncestorContainer.removeChild(n.commonAncestorContainer.firstElementChild),e.switchToListElement("ol",n.commonAncestorContainer,t);else{var o=n.commonAncestorContainer.parentNode;t=n.commonAncestorContainer,o.removeChild(n.commonAncestorContainer),e.switchToListElement("ol",o,t)}})}},{key:"switchToListElement",value:function(e,n,t){var o=document.createElement(e),i=document.createElement("li");i.appendChild(t),o.appendChild(i),n.appendChild(o)}},{key:"focus",value:function(e){return e||this.setRange(),this.editor.focus(),this}},{key:"setRange",value:function(e){e=e||this._range,e||(e=this.getRange(),e.collapse(!1));try{h["default"].removeAllRanges(),h["default"].addRange(e)}catch(n){}return this}},{key:"getRange",value:function(){var e=this.editor,n=h["default"].rangeCount&&h["default"].getRangeAt(0);return n||(n=document.createRange()),d["default"].containsNode(e,n.commonAncestorContainer)||(n.selectNodeContents(e),n.collapse(!1)),n}}]),e}();n["default"]=g},function(e,n){"use strict";n.__esModule=!0,n["default"]=function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}},function(e,n,t){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}n.__esModule=!0;var i=t(5),r=o(i);n["default"]=function(){function e(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),(0,r["default"])(e,o.key,o)}}return function(n,t,o){return t&&e(n.prototype,t),o&&e(n,o),n}}()},function(e,n,t){e.exports={"default":t(6),__esModule:!0}},function(e,n,t){t(7);var o=t(10).Object;e.exports=function(e,n,t){return o.defineProperty(e,n,t)}},function(e,n,t){var o=t(8);o(o.S+o.F*!t(18),"Object",{defineProperty:t(14).f})},function(e,n,t){var o=t(9),i=t(10),r=t(11),a=t(13),c="prototype",l=function(e,n,t){var s,u,d,f=e&l.F,v=e&l.G,h=e&l.S,p=e&l.P,m=e&l.B,g=e&l.W,b=v?i:i[n]||(i[n]={}),y=b[c],M=v?o:h?o[n]:(o[n]||{})[c];v&&(t=n);for(s in t)u=!f&&M&&void 0!==M[s],u&&s in b||(d=u?M[s]:t[s],b[s]=v&&"function"!=typeof M[s]?t[s]:m&&u?r(d,o):g&&M[s]==d?function(e){var n=function(n,t,o){if(this instanceof e){switch(arguments.length){case 0:return new e;case 1:return new e(n);case 2:return new e(n,t)}return new e(n,t,o)}return e.apply(this,arguments)};return n[c]=e[c],n}(d):p&&"function"==typeof d?r(Function.call,d):d,p&&((b.virtual||(b.virtual={}))[s]=d,e&l.R&&y&&!y[s]&&a(y,s,d)))};l.F=1,l.G=2,l.S=4,l.P=8,l.B=16,l.W=32,l.U=64,l.R=128,e.exports=l},function(e,n){var t=e.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=t)},function(e,n){var t=e.exports={version:"2.4.0"};"number"==typeof __e&&(__e=t)},function(e,n,t){var o=t(12);e.exports=function(e,n,t){if(o(e),void 0===n)return e;switch(t){case 1:return function(t){return e.call(n,t)};case 2:return function(t,o){return e.call(n,t,o)};case 3:return function(t,o,i){return e.call(n,t,o,i)}}return function(){return e.apply(n,arguments)}}},function(e,n){e.exports=function(e){if("function"!=typeof e)throw TypeError(e+" is not a function!");return e}},function(e,n,t){var o=t(14),i=t(22);e.exports=t(18)?function(e,n,t){return o.f(e,n,i(1,t))}:function(e,n,t){return e[n]=t,e}},function(e,n,t){var o=t(15),i=t(17),r=t(21),a=Object.defineProperty;n.f=t(18)?Object.defineProperty:function(e,n,t){if(o(e),n=r(n,!0),o(t),i)try{return a(e,n,t)}catch(c){}if("get"in t||"set"in t)throw TypeError("Accessors not supported!");return"value"in t&&(e[n]=t.value),e}},function(e,n,t){var o=t(16);e.exports=function(e){if(!o(e))throw TypeError(e+" is not an object!");return e}},function(e,n){e.exports=function(e){return"object"==typeof e?null!==e:"function"==typeof e}},function(e,n,t){e.exports=!t(18)&&!t(19)(function(){return 7!=Object.defineProperty(t(20)("div"),"a",{get:function(){return 7}}).a})},function(e,n,t){e.exports=!t(19)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(e,n){e.exports=function(e){try{return!!e()}catch(n){return!0}}},function(e,n,t){var o=t(16),i=t(9).document,r=o(i)&&o(i.createElement);e.exports=function(e){return r?i.createElement(e):{}}},function(e,n,t){var o=t(16);e.exports=function(e,n){if(!o(e))return e;var t,i;if(n&&"function"==typeof(t=e.toString)&&!o(i=t.call(e)))return i;if("function"==typeof(t=e.valueOf)&&!o(i=t.call(e)))return i;if(!n&&"function"==typeof(t=e.toString)&&!o(i=t.call(e)))return i;throw TypeError("Can't convert object to primitive value")}},function(e,n){e.exports=function(e,n){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:n}}},function(e,n){},,,,function(e,n){},,function(e,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var t={getClickerModalHTML:function(e){return'\n      <div class="bee-modal">\n        <div class="bee-modal-header">\n          <button class="bee-btn bee-btn-cancel">\n            '+e.cancelText+'\n          </button>\n          <button class="bee-btn bee-btn-ok">\n            '+e.okText+'\n          </button>\n        </div>\n        <div class="bee-modal-body">\n          <div id="bee-editor-content" class="bee-modal-content" contentEditable="true">\n            '+e.content+'\n          </div>\n        </div>\n        <div class="bee-modal-footer">\n          <ul>\n            <li class="unordered-list">\n              <svg class="icon icon-list2"><use xlink:href="#icon-list2"></use></svg>\n            </li>\n            <li class="ordered-list">\n              <svg class="icon icon-list-numbered"><use xlink:href="#icon-list-numbered"></use></svg>\n            </li>\n            <li>\n              <svg class="icon icon-indent-decrease"><use xlink:href="#icon-indent-decrease"></use></svg>\n            </li>\n            <li>\n              <svg class="icon icon-indent-increase"><use xlink:href="#icon-indent-increase"></use></svg>\n            </li>\n            <li>\n              <label class="upload-label">\n                <input class="upload-image" type="file"/>\n                <span>\n                  <svg class="icon icon-image"><use xlink:href="#icon-image"></use></svg>\n                </span>\n              </label>\n            </li>\n            <li>\n              <svg class="icon icon-text-color"><use xlink:href="#icon-text-color"></use></svg>\n            </li>\n            <!--<li class="handwriting">-->\n              <!--<a>手写</a>-->\n            <!--</li>-->\n            <!--<li>-->\n              <!--<a>涂鸦</a>-->\n            <!--</li>-->\n            <!--<li data-toggle="dropdown">-->\n              <!--<a>插入</a>-->\n              <!--<ul class="bee-dropdown-menu">-->\n                <!--<li>二维码</li>-->\n                <!--<li>日期</li>-->\n                <!--<li>链接</li>-->\n              <!--</ul>-->\n            <!--</li>-->\n          </ul>\n        </div>\n      </div>\n    '},getHandWritingHTML:function(){return'\n      <div class="bee-handwriting-panel">\n        <canvas id="handwring-canvas"></canvas>\n      </div>\n    '}};n["default"]=t},function(e,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var t={stopPropagation:function(e){e.stopPropagation()},destroy:function(e){document.body.removeChild(e)},extend:function(e,n){},containsNode:function(e,n){if(e===n)return!0;for(n=n.parentNode;n;){if(n===e)return!0;n=n.parentNode}return!1}};n["default"]=t},function(e,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var t={selection:document.getSelection(),range:document.createRange(),anchorNode:null};n["default"]=t},function(e,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var t=document.getSelection();n["default"]=t},function(e,n,t){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(n,"__esModule",{value:!0});var i=t(31),r=o(i),a=function(e){var n=new FileReader,t=new Image;n.readAsDataURL(e[0]),n.onload=function(e){t.src=e.target.result,void 0!==r["default"].range&&r["default"].range.insertNode(t)}};n["default"]=a},function(e,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n["default"]='\n  <svg style="position: absolute; width: 0; height: 0; overflow: hidden;" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n  <defs>\n  <symbol id="icon-image" viewBox="0 0 32 32">\n  <title>image</title>\n  <path class="path1" d="M29.996 4c0.001 0.001 0.003 0.002 0.004 0.004v23.993c-0.001 0.001-0.002 0.003-0.004 0.004h-27.993c-0.001-0.001-0.003-0.002-0.004-0.004v-23.993c0.001-0.001 0.002-0.003 0.004-0.004h27.993zM30 2h-28c-1.1 0-2 0.9-2 2v24c0 1.1 0.9 2 2 2h28c1.1 0 2-0.9 2-2v-24c0-1.1-0.9-2-2-2v0z"></path>\n  <path class="path2" d="M26 9c0 1.657-1.343 3-3 3s-3-1.343-3-3 1.343-3 3-3 3 1.343 3 3z"></path>\n  <path class="path3" d="M28 26h-24v-4l7-12 8 10h2l7-6z"></path>\n  </symbol>\n  <symbol id="icon-list-numbered" viewBox="0 0 32 32">\n  <title>list-numbered</title>\n  <path class="path1" d="M12 26h20v4h-20zM12 14h20v4h-20zM12 2h20v4h-20zM6 0v8h-2v-6h-2v-2zM4 16.438v1.563h4v2h-6v-4.563l4-1.875v-1.563h-4v-2h6v4.563zM8 22v10h-6v-2h4v-2h-4v-2h4v-2h-4v-2z"></path>\n  </symbol>\n  <symbol id="icon-list2" viewBox="0 0 32 32">\n  <title>list2</title>\n  <path class="path1" d="M12 2h20v4h-20v-4zM12 14h20v4h-20v-4zM12 26h20v4h-20v-4zM0 4c0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.209-1.791 4-4 4s-4-1.791-4-4zM0 16c0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.209-1.791 4-4 4s-4-1.791-4-4zM0 28c0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.209-1.791 4-4 4s-4-1.791-4-4z"></path>\n  </symbol>\n  <symbol id="icon-text-color" viewBox="0 0 32 32">\n  <title>text-color</title>\n  <path class="path1" d="M10.063 26l1.8-6h8.274l1.8 6h3.551l-6-20h-6.976l-6 20h3.551zM14.863 10h2.274l1.8 6h-5.874l1.8-6z"></path>\n  </symbol>\n  <symbol id="icon-indent-increase" viewBox="0 0 32 32">\n  <title>indent-increase</title>\n  <path class="path1" d="M0 2h32v4h-32zM12 8h20v4h-20zM12 14h20v4h-20zM12 20h20v4h-20zM0 26h32v4h-32zM0 22v-12l8 6z"></path>\n  </symbol>\n  <symbol id="icon-indent-decrease" viewBox="0 0 32 32">\n  <title>indent-decrease</title>\n  <path class="path1" d="M0 2h32v4h-32zM12 8h20v4h-20zM12 14h20v4h-20zM12 20h20v4h-20zM0 26h32v4h-32zM8 10v12l-8-6z"></path>\n  </symbol>\n  </defs>\n  </svg>\n'}]);