/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _init = __webpack_require__(1);

	var _init2 = _interopRequireDefault(_init);

	var _svg = __webpack_require__(33);

	var _svg2 = _interopRequireDefault(_svg);

	var _plugins = __webpack_require__(34);

	var _plugins2 = _interopRequireDefault(_plugins);

	var _basicUnorderedList = __webpack_require__(35);

	var _basicUnorderedList2 = _interopRequireDefault(_basicUnorderedList);

	var _basicOrderedList = __webpack_require__(36);

	var _basicOrderedList2 = _interopRequireDefault(_basicOrderedList);

	var _basicIndentDecrease = __webpack_require__(37);

	var _basicIndentDecrease2 = _interopRequireDefault(_basicIndentDecrease);

	var _basicIndentIncrease = __webpack_require__(38);

	var _basicIndentIncrease2 = _interopRequireDefault(_basicIndentIncrease);

	var _insertImage = __webpack_require__(39);

	var _insertImage2 = _interopRequireDefault(_insertImage);

	var _font = __webpack_require__(40);

	var _font2 = _interopRequireDefault(_font);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var bee = {
	  version: '0.0.1'
	}; //require('vconsole/dist/vconsole.min.js');


	window.bee = bee;

	bee.PluginManager = (0, _plugins2.default)();
	bee.PluginManager.addPlugin(_basicUnorderedList2.default);
	bee.PluginManager.addPlugin(_insertImage2.default);
	bee.PluginManager.addPlugin(_basicOrderedList2.default);
	bee.PluginManager.addPlugin(_basicIndentDecrease2.default);
	bee.PluginManager.addPlugin(_basicIndentIncrease2.default);
	bee.PluginManager.addPlugin(_font2.default);

	bee.fly = function (initParams) {
	  switch (initParams.type) {
	    case 'click':
	      _init2.default.clickMode(initParams);
	      break;
	  }
	};

	// insert svg sprite
	var frag = document.createElement('div');
	frag.className = 'svg-sprite';
	frag.innerHTML = _svg2.default;
	document.body.insertBefore(frag, document.body.childNodes[0]);

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _bee = __webpack_require__(2);

	var _bee2 = _interopRequireDefault(_bee);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var init = {
	  clickMode: function clickMode(domObj) {
	    var divs = document.getElementsByClassName(domObj.className);

	    var _loop = function _loop(i, len) {
	      divs[i].addEventListener('click', function () {
	        domObj.content = this.innerHTML;
	        domObj.index = i;
	        var objBee = new _bee2.default(domObj);
	        objBee.addEventListener();
	        objBee.focus();
	      });
	    };

	    for (var i = 0, len = divs.length; i < len; i++) {
	      _loop(i, len);
	    }
	  }
	};

	exports.default = init;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _classCallCheck2 = __webpack_require__(3);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(4);

	var _createClass3 = _interopRequireDefault(_createClass2);

	__webpack_require__(23);

	__webpack_require__(27);

	var _view = __webpack_require__(29);

	var _view2 = _interopRequireDefault(_view);

	var _utility = __webpack_require__(30);

	var _utility2 = _interopRequireDefault(_utility);

	var _dom = __webpack_require__(31);

	var _dom2 = _interopRequireDefault(_dom);

	var _selection = __webpack_require__(32);

	var _selection2 = _interopRequireDefault(_selection);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Bee = function () {
	  function Bee(config) {
	    (0, _classCallCheck3.default)(this, Bee);

	    var divModal = document.createElement('div');
	    divModal.className = 'bee-backdrop';
	    divModal.innerHTML = _view2.default.getClickerModalHTML(config);
	    document.body.appendChild(divModal);

	    this.modal = divModal;

	    this.config = config;
	    this.editor = this.modal.querySelector('div#bee-editor-content');

	    this.initPlugins();
	  }

	  (0, _createClass3.default)(Bee, [{
	    key: 'initPlugins',
	    value: function initPlugins() {
	      var _this = this;

	      var docfrag = document.createDocumentFragment();
	      var plugins = window.bee.PluginManager.getPlugins();
	      plugins.forEach(function (plugin) {
	        var li = document.createElement('li');
	        li.className = plugin.className;
	        if (plugin.icon) {
	          li.innerHTML = '\n          <svg class="icon ' + plugin.icon + '"><use xlink:href="#' + plugin.icon + '"></use></svg>\n        ';
	        } else if (plugin.template) {
	          li.innerHTML = plugin.template;
	        }

	        if (plugin.svg) {
	          var svgSprite = document.body.querySelector('.svg-sprite symbol');
	          svgSprite.insertAdjacentHTML('beforebegin', plugin.svg);
	        }

	        docfrag.appendChild(li);

	        var target = docfrag.querySelector(plugin.eventSelector);
	        target.addEventListener(plugin.eventType, plugin.eventCallback(_this));

	        if (plugin.stylesheet) {
	          var style = document.createElement('style');
	          style.appendChild(document.createTextNode(plugin.stylesheet));
	          document.head.appendChild(style);
	        }
	      });
	      this.modal.querySelector('ul.bee-modal-footer-menu').appendChild(docfrag);
	    }
	  }, {
	    key: 'addEventListener',
	    value: function addEventListener() {
	      var _this2 = this;

	      this.modal.querySelector('div.bee-modal').addEventListener('click', function (event) {
	        _utility2.default.stopPropagation(event);
	      });

	      this.modal.querySelector('button.bee-btn-cancel').addEventListener('click', function (event) {
	        _utility2.default.stopPropagation(event);
	        _utility2.default.destroy(_this2.modal);
	      });

	      this.modal.querySelector('button.bee-btn-ok').addEventListener('click', function (event) {
	        _utility2.default.stopPropagation(event);
	        var modifiedHTML = _this2.editor.innerHTML;
	        _this2.config.okCallback(modifiedHTML, _this2.config.index);
	        _utility2.default.destroy(_this2.modal);
	      });

	      this.modal.querySelector('div#bee-editor-content').addEventListener('blur', function () {
	        console.log('xxx::', _selection2.default);
	        if (_selection2.default.getRangeAt && _selection2.default.rangeCount) {
	          //domObj.range = selection.getRangeAt(0);
	          //domObj.anchorNode = selection.anchorNode;

	          _this2.setRange(_selection2.default.getRangeAt(0));
	        }

	        //domObj.anchorNode = selection.anchorNode;
	        //console.log('12312#::', domObj.anchorNode);
	      }, true);

	      //this.modal.querySelector('li.handwriting').addEventListener('click', () => {
	      //  var classNameStr = this.className;
	      //  if (classNameStr.indexOf('active') === -1) {
	      //    this.className = classNameStr + ' active';
	      //    this.openHandWritingPanel();
	      //  } else {
	      //    this.className = classNameStr.replace(/\bactive\b/,'');
	      //    this.removeHandWritingPanel();
	      //  }
	      //});
	    }
	  }, {
	    key: 'focus',
	    value: function focus(focusStart) {
	      if (!focusStart) this.setRange();
	      this.editor.focus();
	      return this;
	    }
	  }, {
	    key: 'setRange',
	    value: function setRange(range) {
	      range = range || this._range;
	      if (!range) {
	        range = this.getRange();
	        range.collapse(false); // set to end
	      }
	      try {
	        _selection2.default.removeAllRanges();
	        _selection2.default.addRange(range);
	      } catch (e) {/* IE throws error sometimes*/}
	      return this;
	    }
	  }, {
	    key: 'getRange',
	    value: function getRange() {
	      var editor = this.editor,
	          range = _selection2.default.rangeCount && _selection2.default.getRangeAt(0);
	      if (!range) range = document.createRange();
	      if (!_utility2.default.containsNode(editor, range.commonAncestorContainer)) {
	        range.selectNodeContents(editor);
	        range.collapse(false);
	      }
	      return range;
	    }
	  }]);
	  return Bee;
	}();

	exports.default = Bee;

/***/ },
/* 3 */
/***/ function(module, exports) {

	"use strict";

	exports.__esModule = true;

	exports.default = function (instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	};

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _defineProperty = __webpack_require__(5);

	var _defineProperty2 = _interopRequireDefault(_defineProperty);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];
	      descriptor.enumerable = descriptor.enumerable || false;
	      descriptor.configurable = true;
	      if ("value" in descriptor) descriptor.writable = true;
	      (0, _defineProperty2.default)(target, descriptor.key, descriptor);
	    }
	  }

	  return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);
	    if (staticProps) defineProperties(Constructor, staticProps);
	    return Constructor;
	  };
	}();

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(6), __esModule: true };

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(7);
	var $Object = __webpack_require__(10).Object;
	module.exports = function defineProperty(it, key, desc){
	  return $Object.defineProperty(it, key, desc);
	};

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(8);
	// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
	$export($export.S + $export.F * !__webpack_require__(18), 'Object', {defineProperty: __webpack_require__(14).f});

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(9)
	  , core      = __webpack_require__(10)
	  , ctx       = __webpack_require__(11)
	  , hide      = __webpack_require__(13)
	  , PROTOTYPE = 'prototype';

	var $export = function(type, name, source){
	  var IS_FORCED = type & $export.F
	    , IS_GLOBAL = type & $export.G
	    , IS_STATIC = type & $export.S
	    , IS_PROTO  = type & $export.P
	    , IS_BIND   = type & $export.B
	    , IS_WRAP   = type & $export.W
	    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
	    , expProto  = exports[PROTOTYPE]
	    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
	    , key, own, out;
	  if(IS_GLOBAL)source = name;
	  for(key in source){
	    // contains in native
	    own = !IS_FORCED && target && target[key] !== undefined;
	    if(own && key in exports)continue;
	    // export native or passed
	    out = own ? target[key] : source[key];
	    // prevent global pollution for namespaces
	    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
	    // bind timers to global for call from export context
	    : IS_BIND && own ? ctx(out, global)
	    // wrap global constructors for prevent change them in library
	    : IS_WRAP && target[key] == out ? (function(C){
	      var F = function(a, b, c){
	        if(this instanceof C){
	          switch(arguments.length){
	            case 0: return new C;
	            case 1: return new C(a);
	            case 2: return new C(a, b);
	          } return new C(a, b, c);
	        } return C.apply(this, arguments);
	      };
	      F[PROTOTYPE] = C[PROTOTYPE];
	      return F;
	    // make static versions for prototype methods
	    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
	    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
	    if(IS_PROTO){
	      (exports.virtual || (exports.virtual = {}))[key] = out;
	      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
	      if(type & $export.R && expProto && !expProto[key])hide(expProto, key, out);
	    }
	  }
	};
	// type bitmap
	$export.F = 1;   // forced
	$export.G = 2;   // global
	$export.S = 4;   // static
	$export.P = 8;   // proto
	$export.B = 16;  // bind
	$export.W = 32;  // wrap
	$export.U = 64;  // safe
	$export.R = 128; // real proto method for `library` 
	module.exports = $export;

/***/ },
/* 9 */
/***/ function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ },
/* 10 */
/***/ function(module, exports) {

	var core = module.exports = {version: '2.4.0'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(12);
	module.exports = function(fn, that, length){
	  aFunction(fn);
	  if(that === undefined)return fn;
	  switch(length){
	    case 1: return function(a){
	      return fn.call(that, a);
	    };
	    case 2: return function(a, b){
	      return fn.call(that, a, b);
	    };
	    case 3: return function(a, b, c){
	      return fn.call(that, a, b, c);
	    };
	  }
	  return function(/* ...args */){
	    return fn.apply(that, arguments);
	  };
	};

/***/ },
/* 12 */
/***/ function(module, exports) {

	module.exports = function(it){
	  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	var dP         = __webpack_require__(14)
	  , createDesc = __webpack_require__(22);
	module.exports = __webpack_require__(18) ? function(object, key, value){
	  return dP.f(object, key, createDesc(1, value));
	} : function(object, key, value){
	  object[key] = value;
	  return object;
	};

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	var anObject       = __webpack_require__(15)
	  , IE8_DOM_DEFINE = __webpack_require__(17)
	  , toPrimitive    = __webpack_require__(21)
	  , dP             = Object.defineProperty;

	exports.f = __webpack_require__(18) ? Object.defineProperty : function defineProperty(O, P, Attributes){
	  anObject(O);
	  P = toPrimitive(P, true);
	  anObject(Attributes);
	  if(IE8_DOM_DEFINE)try {
	    return dP(O, P, Attributes);
	  } catch(e){ /* empty */ }
	  if('get' in Attributes || 'set' in Attributes)throw TypeError('Accessors not supported!');
	  if('value' in Attributes)O[P] = Attributes.value;
	  return O;
	};

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(16);
	module.exports = function(it){
	  if(!isObject(it))throw TypeError(it + ' is not an object!');
	  return it;
	};

/***/ },
/* 16 */
/***/ function(module, exports) {

	module.exports = function(it){
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = !__webpack_require__(18) && !__webpack_require__(19)(function(){
	  return Object.defineProperty(__webpack_require__(20)('div'), 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(19)(function(){
	  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 19 */
/***/ function(module, exports) {

	module.exports = function(exec){
	  try {
	    return !!exec();
	  } catch(e){
	    return true;
	  }
	};

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(16)
	  , document = __webpack_require__(9).document
	  // in old IE typeof document.createElement is 'object'
	  , is = isObject(document) && isObject(document.createElement);
	module.exports = function(it){
	  return is ? document.createElement(it) : {};
	};

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.1 ToPrimitive(input [, PreferredType])
	var isObject = __webpack_require__(16);
	// instead of the ES6 spec version, we didn't implement @@toPrimitive case
	// and the second argument - flag - preferred type is a string
	module.exports = function(it, S){
	  if(!isObject(it))return it;
	  var fn, val;
	  if(S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  throw TypeError("Can't convert object to primitive value");
	};

/***/ },
/* 22 */
/***/ function(module, exports) {

	module.exports = function(bitmap, value){
	  return {
	    enumerable  : !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable    : !(bitmap & 4),
	    value       : value
	  };
	};

/***/ },
/* 23 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 28 */,
/* 29 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var view = {
	  getClickerModalHTML: function getClickerModalHTML(options) {
	    return "\n      <div class=\"bee-modal\">\n        <div class=\"bee-modal-header\">\n          <button class=\"bee-btn bee-btn-cancel\">\n            " + options.cancelText + "\n          </button>\n          <button class=\"bee-btn bee-btn-ok\">\n            " + options.okText + "\n          </button>\n        </div>\n        <div class=\"bee-modal-body\">\n          <div id=\"bee-editor-content\" class=\"bee-modal-content\" contentEditable=\"true\">\n            " + options.content + "\n          </div>\n        </div>\n        <div class=\"bee-modal-footer\">\n          <ul class=\"bee-modal-footer-menu\">\n          </ul>\n        </div>\n      </div>\n    ";
	  }
	};

	exports.default = view;

/***/ },
/* 30 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var utility = {
	  stopPropagation: function stopPropagation(e) {
	    e.stopPropagation();
	  },
	  destroy: function destroy(node) {
	    //objBee = null;
	    document.body.removeChild(node);
	  },
	  extend: function extend(src, dest) {},
	  containsNode: function containsNode(parent, child) {
	    if (parent === child) return true;
	    child = child.parentNode;
	    while (child) {
	      if (child === parent) return true;
	      child = child.parentNode;
	    }
	    return false;
	  }
	};

	exports.default = utility;

/***/ },
/* 31 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var domObj = {
	  selection: document.getSelection(),
	  range: document.createRange(),
	  anchorNode: null
	};

	exports.default = domObj;

/***/ },
/* 32 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var selection = document.getSelection();
	exports.default = selection;

/***/ },
/* 33 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = "\n  <svg style=\"position: absolute; width: 0; height: 0; overflow: hidden;\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\n  <defs>\n  <symbol id=\"icon-bold\" viewBox=\"0 0 32 32\">\n  <title>bold</title>\n  <path class=\"path1\" d=\"M22.121 15.145c1.172-1.392 1.879-3.188 1.879-5.145 0-4.411-3.589-8-8-8h-10v28h12c4.411 0 8-3.589 8-8 0-2.905-1.556-5.453-3.879-6.855zM12 6h3.172c1.749 0 3.172 1.794 3.172 4s-1.423 4-3.172 4h-3.172v-8zM16.969 26h-4.969v-8h4.969c1.827 0 3.313 1.794 3.313 4s-1.486 4-3.313 4z\"></path>\n  </symbol>\n  <symbol id=\"icon-underline\" viewBox=\"0 0 32 32\">\n  <title>underline</title>\n  <path class=\"path1\" d=\"M22 2h4v13c0 4.971-4.477 9-10 9s-10-4.029-10-9v-13h4v13c0 1.255 0.57 2.459 1.605 3.391 1.153 1.038 2.714 1.609 4.395 1.609s3.242-0.572 4.395-1.609c1.035-0.931 1.605-2.136 1.605-3.391v-13zM6 26h20v4h-20z\"></path>\n  </symbol>\n  <symbol id=\"icon-italic\" viewBox=\"0 0 32 32\">\n  <title>italic</title>\n  <path class=\"path1\" d=\"M28 2v2h-4l-10 24h4v2h-14v-2h4l10-24h-4v-2z\"></path>\n  </symbol>\n  <symbol id=\"icon-strikethrough\" viewBox=\"0 0 32 32\">\n  <title>strikethrough</title>\n  <path class=\"path1\" d=\"M32 16v2h-7.328c0.86 1.203 1.328 2.584 1.328 4 0 2.215-1.146 4.345-3.143 5.843-1.855 1.391-4.29 2.157-6.857 2.157s-5.002-0.766-6.857-2.157c-1.998-1.498-3.143-3.628-3.143-5.843h4c0 2.168 2.748 4 6 4s6-1.832 6-4c0-2.168-2.748-4-6-4h-16v-2h9.36c-0.073-0.052-0.146-0.104-0.217-0.157-1.998-1.498-3.143-3.628-3.143-5.843s1.146-4.345 3.143-5.843c1.855-1.391 4.29-2.157 6.857-2.157s5.002 0.766 6.857 2.157c1.997 1.498 3.143 3.628 3.143 5.843h-4c0-2.168-2.748-4-6-4s-6 1.832-6 4c0 2.168 2.748 4 6 4 2.468 0 4.814 0.709 6.64 2h9.36z\"></path>\n  </symbol>\n  <symbol id=\"icon-text-color\" viewBox=\"0 0 32 32\">\n  <title>text-color</title>\n  <path class=\"path1\" d=\"M10.063 26l1.8-6h8.274l1.8 6h3.551l-6-20h-6.976l-6 20h3.551zM14.863 10h2.274l1.8 6h-5.874l1.8-6z\"></path>\n  </symbol>\n  <symbol id=\"icon-paragraph-left\" viewBox=\"0 0 32 32\">\n  <title>paragraph-left</title>\n  <path class=\"path1\" d=\"M0 2h32v4h-32zM0 8h20v4h-20zM0 20h20v4h-20zM0 14h32v4h-32zM0 26h32v4h-32z\"></path>\n  </symbol>\n  <symbol id=\"icon-paragraph-center\" viewBox=\"0 0 32 32\">\n  <title>paragraph-center</title>\n  <path class=\"path1\" d=\"M0 2h32v4h-32zM6 8h20v4h-20zM6 20h20v4h-20zM0 14h32v4h-32zM0 26h32v4h-32z\"></path>\n  </symbol>\n  <symbol id=\"icon-paragraph-right\" viewBox=\"0 0 32 32\">\n  <title>paragraph-right</title>\n  <path class=\"path1\" d=\"M0 2h32v4h-32zM12 8h20v4h-20zM12 20h20v4h-20zM0 14h32v4h-32zM0 26h32v4h-32z\"></path>\n  </symbol>\n\n  </defs>\n  </svg>\n";

/***/ },
/* 34 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var PluginsManager = function PluginsManager() {
	  var plugins = [];

	  return {
	    getPlugins: function getPlugins() {
	      return plugins;
	    },
	    addPlugin: function addPlugin(plugin) {
	      plugins.push(plugin);
	    }
	  };
	};

	exports.default = PluginsManager;

/***/ },
/* 35 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	function switchToListElement(type, appendTo, node2Append) {
	  var ulElement = document.createElement(type);
	  var liElement = document.createElement('li');
	  liElement.appendChild(node2Append);
	  ulElement.appendChild(liElement);
	  appendTo.appendChild(ulElement);
	}

	var UnorderedList = {
	  className: 'unordered-list',
	  eventType: 'click',
	  icon: 'icon-list2',
	  eventSelector: 'li.unordered-list',
	  eventCallback: function eventCallback(editor) {
	    return function (e) {
	      var currentRange = editor.getRange();
	      var element2Transfer = currentRange.commonAncestorContainer.firstElementChild;
	      if (element2Transfer) {
	        currentRange.commonAncestorContainer.removeChild(currentRange.commonAncestorContainer.firstElementChild);
	        switchToListElement('ul', currentRange.commonAncestorContainer, element2Transfer);
	      } else {
	        var parentNode = currentRange.commonAncestorContainer.parentNode;
	        element2Transfer = currentRange.commonAncestorContainer;
	        parentNode.removeChild(currentRange.commonAncestorContainer);
	        switchToListElement('ul', parentNode, element2Transfer);
	      }
	    };
	  },
	  svg: '\n    <symbol id="icon-list2" viewBox="0 0 32 32">\n      <title>list2</title>\n      <path class="path1" d="M12 2h20v4h-20v-4zM12 14h20v4h-20v-4zM12 26h20v4h-20v-4zM0 4c0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.209-1.791 4-4 4s-4-1.791-4-4zM0 16c0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.209-1.791 4-4 4s-4-1.791-4-4zM0 28c0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.209-1.791 4-4 4s-4-1.791-4-4z"></path>\n    </symbol>\n  '
	};

	exports.default = UnorderedList;

/***/ },
/* 36 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	function switchToListElement(type, appendTo, node2Append) {
	  var ulElement = document.createElement(type);
	  var liElement = document.createElement('li');
	  liElement.appendChild(node2Append);
	  ulElement.appendChild(liElement);
	  appendTo.appendChild(ulElement);
	}

	var OrderedList = {
	  className: 'ordered-list',
	  eventType: 'click',
	  icon: 'icon-list-numbered',
	  eventSelector: 'li.ordered-list',
	  eventCallback: function eventCallback(editor) {
	    return function (e) {
	      var currentRange = editor.getRange();
	      var element2Transfer = currentRange.commonAncestorContainer.firstElementChild;
	      if (element2Transfer) {
	        currentRange.commonAncestorContainer.removeChild(currentRange.commonAncestorContainer.firstElementChild);
	        switchToListElement('ol', currentRange.commonAncestorContainer, element2Transfer);
	      } else {
	        var parentNode = currentRange.commonAncestorContainer.parentNode;
	        element2Transfer = currentRange.commonAncestorContainer;
	        parentNode.removeChild(currentRange.commonAncestorContainer);
	        switchToListElement('ol', parentNode, element2Transfer);
	      }
	    };
	  },
	  svg: '\n    <symbol id="icon-list-numbered" viewBox="0 0 32 32">\n      <title>list-numbered</title>\n      <path class="path1" d="M12 26h20v4h-20zM12 14h20v4h-20zM12 2h20v4h-20zM6 0v8h-2v-6h-2v-2zM4 16.438v1.563h4v2h-6v-4.563l4-1.875v-1.563h-4v-2h6v4.563zM8 22v10h-6v-2h4v-2h-4v-2h4v-2h-4v-2z"></path>\n    </symbol>\n  '
	};

	exports.default = OrderedList;

/***/ },
/* 37 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var IndentDecrease = {
	  className: 'indent-decrease',
	  eventType: 'click',
	  icon: 'icon-indent-decrease',
	  eventSelector: '.indent-decrease',
	  eventCallback: function eventCallback(editor) {
	    return function (e) {
	      var currentRange = editor.getRange();
	      if (currentRange.commonAncestorContainer && currentRange.commonAncestorContainer.parentNode) {
	        currentRange.commonAncestorContainer.parentNode.style.textIndent = '0em';
	      }
	    };
	  },
	  svg: '\n    <symbol id="icon-indent-decrease" viewBox="0 0 32 32">\n      <title>indent-decrease</title>\n      <path class="path1" d="M0 2h32v4h-32zM12 8h20v4h-20zM12 14h20v4h-20zM12 20h20v4h-20zM0 26h32v4h-32zM8 10v12l-8-6z"></path>\n    </symbol>\n  '
	};

	exports.default = IndentDecrease;

/***/ },
/* 38 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var IndentIncrease = {
	  className: 'indent-increase',
	  eventType: 'click',
	  icon: 'icon-indent-increase',
	  eventSelector: '.indent-increase',
	  eventCallback: function eventCallback(editor) {
	    return function (e) {
	      var currentRange = editor.getRange();
	      if (currentRange.commonAncestorContainer && currentRange.commonAncestorContainer.parentNode) {
	        currentRange.commonAncestorContainer.parentNode.style.textIndent = '2em';
	      }
	    };
	  },
	  svg: '\n    <symbol id="icon-indent-increase" viewBox="0 0 32 32">\n      <title>indent-increase</title>\n      <path class="path1" d="M0 2h32v4h-32zM12 8h20v4h-20zM12 14h20v4h-20zM12 20h20v4h-20zM0 26h32v4h-32zM0 22v-12l8 6z"></path>\n    </symbol>\n  '
	};

	exports.default = IndentIncrease;

/***/ },
/* 39 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var style = '\n  label.upload-label input[type="file"] {\n    position: fixed;\n    top: -1000px;\n  }\n\n  .upload-label {\n    display: inline-block;\n    height: 44px;\n    line-height: 44px;\n    padding: 0;\n    margin: 0;\n    width:100%;\n    cursor: pointer;\n  }\n  .upload-label:hover {\n    background: #CCC;\n  }\n  .upload-label:active {\n    background: #CCF;\n    background: #DDD;\n  }\n  .upload-label :invalid + span {\n    color: #A44;\n  }\n  .upload-label :valid + span {\n    color: #333333;\n  }\n';

	var insertImage = function insertImage(files, range) {
	  var reader = new FileReader();
	  var image = new Image();
	  image.style.maxWidth = '100%';
	  reader.readAsDataURL(files[0]);
	  reader.onload = function (_file) {

	    image.src = _file.target.result;

	    if (range !== undefined) {
	      range.insertNode(image);
	    }
	  };
	};

	var InsetImage = {
	  stylesheet: style,
	  eventSelector: 'input.upload-image',
	  eventType: 'change',
	  svg: '\n    <symbol id="icon-image" viewBox="0 0 32 32">\n      <title>image</title>\n      <path class="path1" d="M29.996 4c0.001 0.001 0.003 0.002 0.004 0.004v23.993c-0.001 0.001-0.002 0.003-0.004 0.004h-27.993c-0.001-0.001-0.003-0.002-0.004-0.004v-23.993c0.001-0.001 0.002-0.003 0.004-0.004h27.993zM30 2h-28c-1.1 0-2 0.9-2 2v24c0 1.1 0.9 2 2 2h28c1.1 0 2-0.9 2-2v-24c0-1.1-0.9-2-2-2v0z"></path>\n      <path class="path2" d="M26 9c0 1.657-1.343 3-3 3s-3-1.343-3-3 1.343-3 3-3 3 1.343 3 3z"></path>\n      <path class="path3" d="M28 26h-24v-4l7-12 8 10h2l7-6z"></path>\n    </symbol>\n  ',
	  template: '\n    <label class="upload-label">\n      <input class="upload-image" type="file"/>\n      <span>\n        <svg class="icon icon-image"><use xlink:href="#icon-image"></use></svg>\n      </span>\n    </label>\n  ',
	  eventCallback: function eventCallback(editor) {
	    return function (e) {
	      var files = e.srcElement.files;
	      var currentRange = editor.getRange();
	      insertImage(files, currentRange);
	    };
	  }
	};

	exports.default = InsetImage;

/***/ },
/* 40 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var subTemplate = '\n  <ul class="bee-modal-footer-font">\n    <li>\n      <ul class="font-normal">\n        <li>\n          <svg class="icon icon-bold"><use xlink:href="#icon-bold"></use></svg>\n        </li>\n        <li>\n          <svg class="icon icon-italic"><use xlink:href="#icon-italic"></use></svg>\n        </li>\n        <li>\n          <svg class="icon icon-underline"><use xlink:href="#icon-underline"></use></svg>\n        </li>\n        <li>\n          <svg class="icon icon-strikethrough"><use xlink:href="#icon-strikethrough"></use></svg>\n        </li>\n        <li>\n          <a>abc</a>\n        </li>\n      </ul>\n    </li>\n    <li>\n      <ul class="font-align">\n        <li>\n          <svg class="icon icon-paragraph-left"><use xlink:href="#icon-paragraph-left"></use></svg>\n        </li>\n        <li>\n          <svg class="icon icon-paragraph-center"><use xlink:href="#icon-paragraph-center"></use></svg>\n        </li>\n        <li>\n          <svg class="icon icon-paragraph-right"><use xlink:href="#icon-paragraph-right"></use></svg>\n        </li>\n      </ul>\n    </li>\n    <li>\n      sjalkdjals\n    </li>\n    <li>\n      adsasdas\n    </li>\n  </ul>\n';

	var style = '\n.bee-modal .bee-modal-footer ul.bee-modal-footer-font {\n  background: #fff;\n  list-style: none;\n  margin: 0;\n  padding: 0 10px;\n}\n\n.bee-modal .bee-modal-footer ul.bee-modal-footer-font > li {\n  height: 50px;\n  line-height: 50px;\n  border-bottom: 1px solid #eee;\n}\n\n.bee-modal .bee-modal-footer ul.bee-modal-footer-font > li > ul {\n  list-style: none;\n  margin: 0 auto;\n  padding: 0;\n  font-size: 0;\n}\n\n.bee-modal .bee-modal-footer ul.bee-modal-footer-font > li > ul > li {\n  display: inline-block;\n  text-align: center;\n  cursor: pointer;\n  font-size: 16px;\n  height: 50px;\n  line-height: 50px;\n}\n\n.bee-modal .bee-modal-footer ul.bee-modal-footer-font > li > ul.font-normal > li {\n  width: 20%;\n}\n\n.bee-modal .bee-modal-footer ul.bee-modal-footer-font > li > ul.font-align > li {\n  width: 33.33%;\n}\n\n.bee-modal .bee-modal-footer.show-font-detail {\n  height: 244px;\n  line-height: normal;\n}\n';

	var Font = {
	  className: 'font',
	  stylesheet: style,
	  eventType: 'click',
	  icon: 'icon-text-color',
	  eventSelector: '.font',
	  eventCallback: function eventCallback(editor) {
	    var modalFooter = editor.modal.querySelector('.bee-modal-footer-menu');
	    modalFooter.insertAdjacentHTML('afterend', subTemplate);

	    return function (e) {
	      editor.modal.querySelector('.bee-modal-footer').classList.toggle('show-font-detail');
	    };
	  }
	};

	exports.default = Font;

/***/ }
/******/ ]);