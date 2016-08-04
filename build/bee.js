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

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var bee = {
	  version: '0.0.1'
	};

	bee.fly = function (initParams) {
	  switch (initParams.type) {
	    case 'click':
	      _init2.default.clickMode(initParams);
	      break;
	  }
	};

	window.bee = bee;

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

	var _view = __webpack_require__(29);

	var _view2 = _interopRequireDefault(_view);

	var _utility = __webpack_require__(30);

	var _utility2 = _interopRequireDefault(_utility);

	var _dom = __webpack_require__(31);

	var _dom2 = _interopRequireDefault(_dom);

	var _selection = __webpack_require__(32);

	var _selection2 = _interopRequireDefault(_selection);

	var _image = __webpack_require__(33);

	var _image2 = _interopRequireDefault(_image);

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
	  }

	  (0, _createClass3.default)(Bee, [{
	    key: 'addEventListener',
	    value: function addEventListener() {
	      var _this = this;

	      this.modal.querySelector('div.bee-modal').addEventListener('click', function (event) {
	        _utility2.default.stopPropagation(event);
	      });

	      this.modal.querySelector('button.bee-btn-cancel').addEventListener('click', function (event) {
	        _utility2.default.stopPropagation(event);
	        _utility2.default.destroy(_this.modal);
	      });

	      this.modal.querySelector('button.bee-btn-ok').addEventListener('click', function (event) {
	        _utility2.default.stopPropagation(event);
	        var modifiedHTML = _this.editor.innerHTML;
	        _this.config.okCallback(modifiedHTML, _this.config.index);
	        _utility2.default.destroy(_this.modal);
	      });

	      this.modal.querySelector('div#bee-editor-content').addEventListener('blur', function () {
	        console.log('blur...');
	        if (_selection2.default.getRangeAt && _selection2.default.rangeCount) {
	          _dom2.default.range = _selection2.default.getRangeAt(0);
	          //domObj.anchorNode = selection.anchorNode;
	        }

	        //domObj.anchorNode = selection.anchorNode;
	        //console.log(domObj.anchorNode);
	      }, true);

	      this.modal.querySelector('input.upload-image').addEventListener('change', function () {
	        (0, _image2.default)(this.files, this._range);
	      });

	      this.modal.querySelector('li.handwriting').addEventListener('click', function () {
	        var classNameStr = _this.className;
	        if (classNameStr.indexOf('active') === -1) {
	          _this.className = classNameStr + ' active';
	          _this.openHandWritingPanel();
	        } else {
	          _this.className = classNameStr.replace(/\bactive\b/, '');
	          _this.removeHandWritingPanel();
	        }
	      });
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
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var view = {
	  getClickerModalHTML: function getClickerModalHTML(options) {
	    return ['<div class="bee-modal">', '<div class="bee-modal-header">', '<button class="bee-btn bee-btn-cancel">', options.cancelText, '</button>', '<button class="bee-btn bee-btn-ok">', options.okText, '</button>', '</div>', '<div class="bee-modal-body">', '<div id="bee-editor-content" class="bee-modal-content" contentEditable="true">', options.content, '</div>', '</div>', '<div class="bee-modal-footer">', '<ul>', '<li>', '<label class="upload-label">', '<input class="upload-image" type="file"/>', '<span>上传图片</span>', '</label>', '</li>', '<li class="handwriting">', '<a>手写</a>', '</li>', '<li><a>涂鸦</a></li>', '<li data-toggle="dropdown">', '<a>插入</a>', '<ul class="bee-dropdown-menu"><li>二维码</li><li>日期</li><li>链接</li></ul>', '</li>', '</ul>', '</div>', '</div>'].join('');
	  },
	  getHandWritingHTML: function getHandWritingHTML() {
	    return ['<div class="bee-handwriting-panel">', '<canvas id="handwring-canvas"></canvas>', '</div>'].join('');
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
	//console.log('selection!!!::', selection);
	exports.default = selection;

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _dom = __webpack_require__(31);

	var _dom2 = _interopRequireDefault(_dom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var insertImage = function insertImage(files) {

	  var reader = new FileReader();
	  var image = new Image();
	  reader.readAsDataURL(files[0]);
	  reader.onload = function (_file) {

	    //var anchor = document.getSelection().anchorNode;
	    //anchor.parentNode.insertBefore(document.createTextNode('test'),anchor);
	    //var anchor = getSelection().anchorNode;
	    //anchor.parentNode.insertBefore(document.createTextNode('test'),anchor.nextSibling);

	    image.src = _file.target.result;
	    //var anchor = domObj.selection.anchorNode;
	    //var anchor = domObj.anchorNode;
	    //console.log(anchor);
	    //anchor.parentNode.insertBefore(image, anchor.nextSibling);

	    if (_dom2.default.range !== undefined) {
	      _dom2.default.range.insertNode(image);
	    }
	  };
	};

	exports.default = insertImage;

/***/ }
/******/ ]);