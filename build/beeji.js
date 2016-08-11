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

	var _templates = __webpack_require__(1);

	var _editor = __webpack_require__(51);

	var _editor2 = _interopRequireDefault(_editor);

	var _pluginsManager = __webpack_require__(2);

	var _pluginsManager2 = _interopRequireDefault(_pluginsManager);

	var _basicUnorderedList = __webpack_require__(38);

	var _basicUnorderedList2 = _interopRequireDefault(_basicUnorderedList);

	var _basicOrderedList = __webpack_require__(39);

	var _basicOrderedList2 = _interopRequireDefault(_basicOrderedList);

	var _basicIndentDecrease = __webpack_require__(40);

	var _basicIndentDecrease2 = _interopRequireDefault(_basicIndentDecrease);

	var _basicIndentIncrease = __webpack_require__(41);

	var _basicIndentIncrease2 = _interopRequireDefault(_basicIndentIncrease);

	var _basicBold = __webpack_require__(42);

	var _basicBold2 = _interopRequireDefault(_basicBold);

	var _basicItalic = __webpack_require__(43);

	var _basicItalic2 = _interopRequireDefault(_basicItalic);

	var _basicStrikethrough = __webpack_require__(44);

	var _basicStrikethrough2 = _interopRequireDefault(_basicStrikethrough);

	var _basicUnderline = __webpack_require__(45);

	var _basicUnderline2 = _interopRequireDefault(_basicUnderline);

	var _basicParagraphCenter = __webpack_require__(46);

	var _basicParagraphCenter2 = _interopRequireDefault(_basicParagraphCenter);

	var _basicParagraphLeft = __webpack_require__(47);

	var _basicParagraphLeft2 = _interopRequireDefault(_basicParagraphLeft);

	var _basicParagraphRight = __webpack_require__(48);

	var _basicParagraphRight2 = _interopRequireDefault(_basicParagraphRight);

	var _insertImage = __webpack_require__(49);

	var _insertImage2 = _interopRequireDefault(_insertImage);

	var _combineFont = __webpack_require__(50);

	var _combineFont2 = _interopRequireDefault(_combineFont);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	//import CustomizeSub from './plugins/custom-sub';


	//require('vconsole/dist/vconsole.min.js');
	var beeji = {
	  version: '0.0.1'
	};

	var init = {
	  clickMode: function clickMode(domObj) {
	    var divs = document.getElementsByClassName(domObj.className);

	    var _loop = function _loop(i, len) {
	      divs[i].addEventListener('click', function () {
	        domObj.content = this.innerHTML;
	        domObj.index = i;
	        var objBee = new _editor2.default(domObj);
	        objBee.addEventListener();
	        objBee.focus();
	      });
	    };

	    for (var i = 0, len = divs.length; i < len; i++) {
	      _loop(i, len);
	    }
	  }
	};

	window.beeji = beeji;

	beeji.PluginManager = (0, _pluginsManager2.default)();
	beeji.PluginManager.addPlugin('unorderedlist', _basicUnorderedList2.default);
	beeji.PluginManager.addPlugin('insertimage', _insertImage2.default);
	beeji.PluginManager.addPlugin('orderedlist', _basicOrderedList2.default);
	beeji.PluginManager.addPlugin('indentdecrease', _basicIndentDecrease2.default);
	beeji.PluginManager.addPlugin('indentincrease', _basicIndentIncrease2.default);
	beeji.PluginManager.addPlugin('bold', _basicBold2.default);
	beeji.PluginManager.addPlugin('italic', _basicItalic2.default);
	beeji.PluginManager.addPlugin('strikethrough', _basicStrikethrough2.default);
	beeji.PluginManager.addPlugin('underline', _basicUnderline2.default);
	beeji.PluginManager.addPlugin('paragraphcenter', _basicParagraphCenter2.default);
	beeji.PluginManager.addPlugin('paragraphleft', _basicParagraphLeft2.default);
	beeji.PluginManager.addPlugin('paragraphright', _basicParagraphRight2.default);
	beeji.PluginManager.addPlugin('font', _combineFont2.default);
	//beeji.PluginManager.addPlugin('customizesub', CustomizeSub);

	beeji.fly = function (initParams) {
	  switch (initParams.type) {
	    case 'click':
	      init.clickMode(initParams);
	      break;
	  }
	};

	// insert svg sprite
	var frag = document.createElement('div');
	frag.className = 'svg-sprite';
	frag.innerHTML = _templates.svgSpriteContainer;
	document.body.insertBefore(frag, document.body.childNodes[0]);

/***/ },
/* 1 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.generateClickerModalHTML = generateClickerModalHTML;
	function generateClickerModalHTML(options) {
	  return "\n    <div class=\"bee-modal\">\n      <div class=\"bee-modal-header\">\n        <button class=\"bee-btn bee-btn-cancel\">\n          " + options.cancelText + "\n        </button>\n        <button class=\"bee-btn bee-btn-ok\">\n          " + options.okText + "\n        </button>\n      </div>\n      <div class=\"bee-modal-body\">\n        <div id=\"bee-editor-content\" class=\"bee-modal-content\" contentEditable=\"true\">\n          " + options.content + "\n        </div>\n      </div>\n      <div class=\"bee-modal-footer\">\n        <ul class=\"bee-modal-footer-menu\">\n        </ul>\n        <div id=\"more-button\">\n          <div id=\"arrow-left\">\n            <svg class=\"icon\"><use xlink:href=\"#icon-arrow-left2\"></use></svg>\n          </div>\n          <div id=\"arrow-right\">\n            <svg class=\"icon\"><use xlink:href=\"#icon-arrow-right2\"></use></svg>\n          </div>\n        </div>\n      </div>\n    </div>\n  ";
	}

	var svgSpriteContainer = exports.svgSpriteContainer = "\n  <svg style=\"position: absolute; width: 0; height: 0; overflow: hidden;\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\n    <defs>\n      <symbol id=\"icon-arrow-right2\" viewBox=\"0 0 32 32\">\n      <title>arrow-right2</title>\n      <path class=\"path1\" d=\"M19.414 27.414l10-10c0.781-0.781 0.781-2.047 0-2.828l-10-10c-0.781-0.781-2.047-0.781-2.828 0s-0.781 2.047 0 2.828l6.586 6.586h-19.172c-1.105 0-2 0.895-2 2s0.895 2 2 2h19.172l-6.586 6.586c-0.39 0.39-0.586 0.902-0.586 1.414s0.195 1.024 0.586 1.414c0.781 0.781 2.047 0.781 2.828 0z\"></path>\n      </symbol>\n      <symbol id=\"icon-arrow-left2\" viewBox=\"0 0 32 32\">\n      <title>arrow-left2</title>\n      <path class=\"path1\" d=\"M12.586 27.414l-10-10c-0.781-0.781-0.781-2.047 0-2.828l10-10c0.781-0.781 2.047-0.781 2.828 0s0.781 2.047 0 2.828l-6.586 6.586h19.172c1.105 0 2 0.895 2 2s-0.895 2-2 2h-19.172l6.586 6.586c0.39 0.39 0.586 0.902 0.586 1.414s-0.195 1.024-0.586 1.414c-0.781 0.781-2.047 0.781-2.828 0z\"></path>\n      </symbol>\n    </defs>\n  </svg>\n";

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _keys = __webpack_require__(3);

	var _keys2 = _interopRequireDefault(_keys);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var PluginsManager = function PluginsManager() {
	  var plugins = {};

	  return {
	    getPlugin: function getPlugin(name) {
	      return plugins[name];
	    },
	    addPlugin: function addPlugin(name, plugin) {
	      plugins[name] = plugin;
	    },
	    gettotalPlugins: function gettotalPlugins() {
	      return plugins;
	    },
	    getPluginsCount: function getPluginsCount() {
	      return (0, _keys2.default)(plugins).length;
	    }
	  };
	};

	exports.default = PluginsManager;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(4), __esModule: true };

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(5);
	module.exports = __webpack_require__(25).Object.keys;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.14 Object.keys(O)
	var toObject = __webpack_require__(6)
	  , $keys    = __webpack_require__(8);

	__webpack_require__(23)('keys', function(){
	  return function keys(it){
	    return $keys(toObject(it));
	  };
	});

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.13 ToObject(argument)
	var defined = __webpack_require__(7);
	module.exports = function(it){
	  return Object(defined(it));
	};

/***/ },
/* 7 */
/***/ function(module, exports) {

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function(it){
	  if(it == undefined)throw TypeError("Can't call method on  " + it);
	  return it;
	};

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.14 / 15.2.3.14 Object.keys(O)
	var $keys       = __webpack_require__(9)
	  , enumBugKeys = __webpack_require__(22);

	module.exports = Object.keys || function keys(O){
	  return $keys(O, enumBugKeys);
	};

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	var has          = __webpack_require__(10)
	  , toIObject    = __webpack_require__(11)
	  , arrayIndexOf = __webpack_require__(14)(false)
	  , IE_PROTO     = __webpack_require__(18)('IE_PROTO');

	module.exports = function(object, names){
	  var O      = toIObject(object)
	    , i      = 0
	    , result = []
	    , key;
	  for(key in O)if(key != IE_PROTO)has(O, key) && result.push(key);
	  // Don't enum bug & hidden keys
	  while(names.length > i)if(has(O, key = names[i++])){
	    ~arrayIndexOf(result, key) || result.push(key);
	  }
	  return result;
	};

/***/ },
/* 10 */
/***/ function(module, exports) {

	var hasOwnProperty = {}.hasOwnProperty;
	module.exports = function(it, key){
	  return hasOwnProperty.call(it, key);
	};

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	// to indexed object, toObject with fallback for non-array-like ES3 strings
	var IObject = __webpack_require__(12)
	  , defined = __webpack_require__(7);
	module.exports = function(it){
	  return IObject(defined(it));
	};

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var cof = __webpack_require__(13);
	module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};

/***/ },
/* 13 */
/***/ function(module, exports) {

	var toString = {}.toString;

	module.exports = function(it){
	  return toString.call(it).slice(8, -1);
	};

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	// false -> Array#indexOf
	// true  -> Array#includes
	var toIObject = __webpack_require__(11)
	  , toLength  = __webpack_require__(15)
	  , toIndex   = __webpack_require__(17);
	module.exports = function(IS_INCLUDES){
	  return function($this, el, fromIndex){
	    var O      = toIObject($this)
	      , length = toLength(O.length)
	      , index  = toIndex(fromIndex, length)
	      , value;
	    // Array#includes uses SameValueZero equality algorithm
	    if(IS_INCLUDES && el != el)while(length > index){
	      value = O[index++];
	      if(value != value)return true;
	    // Array#toIndex ignores holes, Array#includes - not
	    } else for(;length > index; index++)if(IS_INCLUDES || index in O){
	      if(O[index] === el)return IS_INCLUDES || index || 0;
	    } return !IS_INCLUDES && -1;
	  };
	};

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.15 ToLength
	var toInteger = __webpack_require__(16)
	  , min       = Math.min;
	module.exports = function(it){
	  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	};

/***/ },
/* 16 */
/***/ function(module, exports) {

	// 7.1.4 ToInteger
	var ceil  = Math.ceil
	  , floor = Math.floor;
	module.exports = function(it){
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	};

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(16)
	  , max       = Math.max
	  , min       = Math.min;
	module.exports = function(index, length){
	  index = toInteger(index);
	  return index < 0 ? max(index + length, 0) : min(index, length);
	};

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	var shared = __webpack_require__(19)('keys')
	  , uid    = __webpack_require__(21);
	module.exports = function(key){
	  return shared[key] || (shared[key] = uid(key));
	};

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	var global = __webpack_require__(20)
	  , SHARED = '__core-js_shared__'
	  , store  = global[SHARED] || (global[SHARED] = {});
	module.exports = function(key){
	  return store[key] || (store[key] = {});
	};

/***/ },
/* 20 */
/***/ function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ },
/* 21 */
/***/ function(module, exports) {

	var id = 0
	  , px = Math.random();
	module.exports = function(key){
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};

/***/ },
/* 22 */
/***/ function(module, exports) {

	// IE 8- don't enum bug keys
	module.exports = (
	  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
	).split(',');

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	// most Object methods by ES6 should accept primitives
	var $export = __webpack_require__(24)
	  , core    = __webpack_require__(25)
	  , fails   = __webpack_require__(34);
	module.exports = function(KEY, exec){
	  var fn  = (core.Object || {})[KEY] || Object[KEY]
	    , exp = {};
	  exp[KEY] = exec(fn);
	  $export($export.S + $export.F * fails(function(){ fn(1); }), 'Object', exp);
	};

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(20)
	  , core      = __webpack_require__(25)
	  , ctx       = __webpack_require__(26)
	  , hide      = __webpack_require__(28)
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
/* 25 */
/***/ function(module, exports) {

	var core = module.exports = {version: '2.4.0'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(27);
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
/* 27 */
/***/ function(module, exports) {

	module.exports = function(it){
	  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	var dP         = __webpack_require__(29)
	  , createDesc = __webpack_require__(37);
	module.exports = __webpack_require__(33) ? function(object, key, value){
	  return dP.f(object, key, createDesc(1, value));
	} : function(object, key, value){
	  object[key] = value;
	  return object;
	};

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	var anObject       = __webpack_require__(30)
	  , IE8_DOM_DEFINE = __webpack_require__(32)
	  , toPrimitive    = __webpack_require__(36)
	  , dP             = Object.defineProperty;

	exports.f = __webpack_require__(33) ? Object.defineProperty : function defineProperty(O, P, Attributes){
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
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(31);
	module.exports = function(it){
	  if(!isObject(it))throw TypeError(it + ' is not an object!');
	  return it;
	};

/***/ },
/* 31 */
/***/ function(module, exports) {

	module.exports = function(it){
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = !__webpack_require__(33) && !__webpack_require__(34)(function(){
	  return Object.defineProperty(__webpack_require__(35)('div'), 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(34)(function(){
	  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 34 */
/***/ function(module, exports) {

	module.exports = function(exec){
	  try {
	    return !!exec();
	  } catch(e){
	    return true;
	  }
	};

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(31)
	  , document = __webpack_require__(20).document
	  // in old IE typeof document.createElement is 'object'
	  , is = isObject(document) && isObject(document.createElement);
	module.exports = function(it){
	  return is ? document.createElement(it) : {};
	};

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.1 ToPrimitive(input [, PreferredType])
	var isObject = __webpack_require__(31);
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
/* 37 */
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
/* 38 */
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
/* 39 */
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
/* 40 */
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
/* 41 */
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
/* 42 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var Bold = {
	  className: 'font-bold',
	  eventType: 'click',
	  icon: 'icon-bold',
	  eventSelector: '.font-bold',
	  eventCallback: function eventCallback(editor) {
	    return function (e) {
	      alert('bold');
	    };
	  },
	  svg: '\n    <symbol id="icon-bold" viewBox="0 0 32 32">\n      <path class="path1" d="M22.121 15.145c1.172-1.392 1.879-3.188 1.879-5.145 0-4.411-3.589-8-8-8h-10v28h12c4.411 0 8-3.589 8-8 0-2.905-1.556-5.453-3.879-6.855zM12 6h3.172c1.749 0 3.172 1.794 3.172 4s-1.423 4-3.172 4h-3.172v-8zM16.969 26h-4.969v-8h4.969c1.827 0 3.313 1.794 3.313 4s-1.486 4-3.313 4z"></path>\n    </symbol>\n  '
	};

	exports.default = Bold;

/***/ },
/* 43 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var Italic = {
	  className: 'font-italic',
	  eventType: 'click',
	  icon: 'icon-italic',
	  eventSelector: '.font-italic',
	  eventCallback: function eventCallback(editor) {
	    return function (e) {
	      alert('italic');
	    };
	  },
	  svg: '\n    <symbol id="icon-italic" viewBox="0 0 32 32">\n      <title>italic</title>\n      <path class="path1" d="M28 2v2h-4l-10 24h4v2h-14v-2h4l10-24h-4v-2z"></path>\n    </symbol>\n  '
	};

	exports.default = Italic;

/***/ },
/* 44 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var Strikethrough = {
	  className: 'font-strikethrough',
	  eventType: 'click',
	  icon: 'icon-strikethrough',
	  eventSelector: '.font-strikethrough',
	  eventCallback: function eventCallback(editor) {
	    return function (e) {
	      alert('strikethrough');
	    };
	  },
	  svg: '\n    <symbol id="icon-strikethrough" viewBox="0 0 32 32">\n      <title>strikethrough</title>\n      <path class="path1" d="M32 16v2h-7.328c0.86 1.203 1.328 2.584 1.328 4 0 2.215-1.146 4.345-3.143 5.843-1.855 1.391-4.29 2.157-6.857 2.157s-5.002-0.766-6.857-2.157c-1.998-1.498-3.143-3.628-3.143-5.843h4c0 2.168 2.748 4 6 4s6-1.832 6-4c0-2.168-2.748-4-6-4h-16v-2h9.36c-0.073-0.052-0.146-0.104-0.217-0.157-1.998-1.498-3.143-3.628-3.143-5.843s1.146-4.345 3.143-5.843c1.855-1.391 4.29-2.157 6.857-2.157s5.002 0.766 6.857 2.157c1.997 1.498 3.143 3.628 3.143 5.843h-4c0-2.168-2.748-4-6-4s-6 1.832-6 4c0 2.168 2.748 4 6 4 2.468 0 4.814 0.709 6.64 2h9.36z"></path>\n    </symbol>\n  '
	};

	exports.default = Strikethrough;

/***/ },
/* 45 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var Underline = {
	  className: 'font-underline',
	  eventType: 'click',
	  icon: 'icon-underline',
	  eventSelector: '.font-underline',
	  eventCallback: function eventCallback(editor) {
	    return function (e) {
	      alert('underline');
	    };
	  },
	  svg: '\n    <symbol id="icon-underline" viewBox="0 0 32 32">\n      <path class="path1" d="M22 2h4v13c0 4.971-4.477 9-10 9s-10-4.029-10-9v-13h4v13c0 1.255 0.57 2.459 1.605 3.391 1.153 1.038 2.714 1.609 4.395 1.609s3.242-0.572 4.395-1.609c1.035-0.931 1.605-2.136 1.605-3.391v-13zM6 26h20v4h-20z"></path>\n    </symbol>\n  '
	};

	exports.default = Underline;

/***/ },
/* 46 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var Bold = {
	  className: 'paragraph-center',
	  eventType: 'click',
	  icon: 'icon-paragraph-center',
	  eventSelector: '.paragraph-center',
	  eventCallback: function eventCallback(editor) {
	    return function (e) {
	      alert('paragraph-center');
	    };
	  },
	  svg: '\n    <symbol id="icon-paragraph-center" viewBox="0 0 32 32">\n      <title>paragraph-center</title>\n      <path class="path1" d="M0 2h32v4h-32zM6 8h20v4h-20zM6 20h20v4h-20zM0 14h32v4h-32zM0 26h32v4h-32z"></path>\n    </symbol>\n  '
	};

	exports.default = Bold;

/***/ },
/* 47 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var Bold = {
	  className: 'paragraph-left',
	  eventType: 'click',
	  icon: 'icon-paragraph-left',
	  eventSelector: '.paragraph-left',
	  eventCallback: function eventCallback(editor) {
	    return function (e) {
	      alert('paragraph-left');
	    };
	  },
	  svg: '\n    <symbol id="icon-paragraph-left" viewBox="0 0 32 32">\n      <title>paragraph-left</title>\n      <path class="path1" d="M0 2h32v4h-32zM0 8h20v4h-20zM0 20h20v4h-20zM0 14h32v4h-32zM0 26h32v4h-32z"></path>\n    </symbol>\n  '
	};

	exports.default = Bold;

/***/ },
/* 48 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var Bold = {
	  className: 'paragraph-right',
	  eventType: 'click',
	  icon: 'icon-paragraph-right',
	  eventSelector: '.paragraph-right',
	  eventCallback: function eventCallback(editor) {
	    return function (e) {
	      alert('paragraph-right');
	    };
	  },
	  svg: '\n    <symbol id="icon-paragraph-right" viewBox="0 0 32 32">\n      <title>paragraph-right</title>\n      <path class="path1" d="M0 2h32v4h-32zM12 8h20v4h-20zM12 20h20v4h-20zM0 14h32v4h-32zM0 26h32v4h-32z"></path>\n    </symbol>\n  '
	};

	exports.default = Bold;

/***/ },
/* 49 */
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
	  className: 'upload-image',
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
/* 50 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var Font = {
	  className: 'combine-font',
	  eventType: 'click',
	  icon: 'icon-text-color',
	  eventSelector: '.combine-font',
	  subMenus: {
	    toggleClass: 'test-toggle-class',
	    plugins: [['bold', 'italic', 'underline', 'strikethrough'], ['paragraphleft', 'paragraphcenter', 'paragraphright'], ['unorderedlist'], ['insertimage']]
	  },
	  svg: '\n    <symbol id="icon-text-color" viewBox="0 0 32 32">\n      <path class="path1" d="M10.063 26l1.8-6h8.274l1.8 6h3.551l-6-20h-6.976l-6 20h3.551zM14.863 10h2.274l1.8 6h-5.874l1.8-6z"></path>\n    </symbol>\n  '
	};

	exports.default = Font;

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _classCallCheck2 = __webpack_require__(52);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(53);

	var _createClass3 = _interopRequireDefault(_createClass2);

	__webpack_require__(57);

	var _templates = __webpack_require__(1);

	var _utility = __webpack_require__(61);

	var _utility2 = _interopRequireDefault(_utility);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var selection = document.getSelection();

	var Editor = function () {
	  function Editor(config) {
	    (0, _classCallCheck3.default)(this, Editor);

	    var divModal = document.createElement('div');
	    divModal.className = 'bee-backdrop';
	    divModal.innerHTML = (0, _templates.generateClickerModalHTML)(config);
	    document.body.appendChild(divModal);

	    this.modal = divModal;

	    this.config = config;
	    this.editor = this.modal.querySelector('div#bee-editor-content');

	    this.pluginManager = window.beeji.PluginManager;
	    this.initPlugins(config.plugins);
	  }

	  (0, _createClass3.default)(Editor, [{
	    key: 'initPlugins',
	    value: function initPlugins(plugins) {
	      var _this = this;

	      var pluginsLength = plugins.length;
	      var defaultMenuItemWidth = 100 / pluginsLength;
	      var docfrag = document.createDocumentFragment();

	      plugins.forEach(function (pluginKey) {
	        var plugin = _this.pluginManager.getPlugin(pluginKey);
	        if (!plugin) {
	          console.log(pluginKey + ' is not existed.');
	          return;
	        }

	        var liElement = void 0;
	        liElement = pluginsLength <= 6 ? _this._pluginToLiElement(plugin, defaultMenuItemWidth) : _this._pluginToLiElement(plugin);
	        docfrag.appendChild(liElement);

	        if (plugin.svg) _this._insertSvgSymbol(plugin.svg);
	        if (plugin.eventSelector && plugin.eventType && plugin.eventCallback && !plugin.subMenus) _this._listenPluginEvent(docfrag, plugin);else if (plugin.subMenus) {
	          var subMenuContainerSelector = '.bee-modal-footer .' + plugin.subMenus.toggleClass;
	          liElement.addEventListener('click', function () {
	            var subMenuContainer = _this.modal.querySelector(subMenuContainerSelector);
	            var footerContainer = _this.modal.querySelector('.bee-modal-footer');

	            if (subMenuContainer.classList.contains('show-sub-menus')) {
	              footerContainer.style.height = '44px';
	              footerContainer.style.lineHeight = '44px';
	            } else {
	              footerContainer.style.height = 44 + plugin.subMenus.plugins.length * 50 + 'px';
	              footerContainer.style.lineHeight = 'normal';
	            }

	            subMenuContainer.classList.toggle('show-sub-menus');
	          }, false);
	        }

	        if (plugin.stylesheet) _this._insertStylesheet(plugin.stylesheet);
	        if (plugin.subMenus) _this._generateSubMenus(plugin.subMenus);
	      });

	      var footMenuList = this.modal.querySelector('ul.bee-modal-footer-menu');
	      footMenuList.appendChild(docfrag);

	      if (pluginsLength > 6) {
	        footMenuList.style.width = window.innerWidth - 80 + 'px';
	        this.modal.querySelector('.bee-modal-footer').classList.toggle('show-more-button');
	      }
	    }
	  }, {
	    key: '_generateSubMenus',
	    value: function _generateSubMenus(subMenus) {
	      var _this2 = this;

	      var plugins = subMenus.plugins;
	      var subMenuHeight = plugins.length * 50;
	      var subMenuItem = document.createElement('ul');
	      subMenuItem.className = subMenus.toggleClass + ' sub-container';
	      subMenuItem.style.height = subMenuHeight + 'px';

	      plugins.forEach(function (pluginLine) {
	        var pluginLineLiElement = document.createElement('li');
	        pluginLineLiElement.className = 'sub-menus';

	        var subMenuListElement = document.createElement('ul');

	        var defaultMenuItemWidth = 100 / pluginLine.length;
	        pluginLine.forEach(function (pluginKey) {
	          var plugin = _this2.pluginManager.getPlugin(pluginKey);
	          if (!plugin) {
	            console.log(pluginKey + ' is not existed.');
	            return;
	          }

	          subMenuListElement.appendChild(_this2._pluginToLiElement(plugin, defaultMenuItemWidth));
	          if (plugin.svg) _this2._insertSvgSymbol(plugin.svg);
	          if (plugin.eventSelector && plugin.eventType && plugin.eventCallback) _this2._listenPluginEvent(subMenuListElement, plugin);
	          if (plugin.stylesheet) _this2._insertStylesheet(plugin.stylesheet);
	        });

	        pluginLineLiElement.appendChild(subMenuListElement);

	        subMenuItem.appendChild(pluginLineLiElement);
	      });

	      var footMenuList = this.modal.querySelector('.bee-modal-footer');
	      footMenuList.appendChild(subMenuItem);
	    }
	  }, {
	    key: '_insertStylesheet',
	    value: function _insertStylesheet(stylesheet) {
	      var style = document.createElement('style');
	      style.appendChild(document.createTextNode(stylesheet));
	      document.head.appendChild(style);
	    }
	  }, {
	    key: '_listenPluginEvent',
	    value: function _listenPluginEvent(docfrag, plugin) {
	      var target = docfrag.querySelector(plugin.eventSelector);
	      target.addEventListener(plugin.eventType, plugin.eventCallback(this));
	    }
	  }, {
	    key: '_insertSvgSymbol',
	    value: function _insertSvgSymbol(svg) {
	      var svgSprite = document.body.querySelector('.svg-sprite symbol');
	      svgSprite.insertAdjacentHTML('beforebegin', svg);
	    }
	  }, {
	    key: '_pluginToLiElement',
	    value: function _pluginToLiElement(plugin, width) {
	      var li = document.createElement('li');
	      li.className = plugin.className + ' menu-item';
	      if (width) li.style.width = width + '%';

	      if (plugin.icon) {
	        li.innerHTML = '\n          <svg class="icon ' + plugin.icon + '"><use xlink:href="#' + plugin.icon + '"></use></svg>\n        ';
	      } else if (plugin.template) {
	        li.innerHTML = plugin.template;
	      }

	      return li;
	    }
	  }, {
	    key: 'addEventListener',
	    value: function addEventListener() {
	      var _this3 = this;

	      this.modal.querySelector('div.bee-modal').addEventListener('click', function (event) {
	        _utility2.default.stopPropagation(event);
	      });

	      this.modal.querySelector('button.bee-btn-cancel').addEventListener('click', function (event) {
	        _utility2.default.stopPropagation(event);
	        _utility2.default.destroy(_this3.modal);
	      });

	      this.modal.querySelector('button.bee-btn-ok').addEventListener('click', function (event) {
	        _utility2.default.stopPropagation(event);
	        var modifiedHTML = _this3.editor.innerHTML;
	        _this3.config.okCallback(modifiedHTML, _this3.config.index);
	        _utility2.default.destroy(_this3.modal);
	      });

	      this.modal.querySelector('div#bee-editor-content').addEventListener('blur', function () {
	        if (selection.getRangeAt && selection.rangeCount) {
	          _this3.setRange(selection.getRangeAt(0));
	        }
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
	      if (!range) {
	        range = this.getRange();
	        range.collapse(false); // set to end
	      }
	      try {
	        selection.removeAllRanges();
	        selection.addRange(range);
	      } catch (e) {/* IE throws error sometimes*/}
	      return this;
	    }
	  }, {
	    key: 'getRange',
	    value: function getRange() {
	      var editor = this.editor,
	          range = selection.rangeCount && selection.getRangeAt(0);
	      if (!range) range = document.createRange();
	      if (!_utility2.default.containsNode(editor, range.commonAncestorContainer)) {
	        range.selectNodeContents(editor);
	        range.collapse(false);
	      }
	      return range;
	    }
	  }]);
	  return Editor;
	}();

	exports.default = Editor;

/***/ },
/* 52 */
/***/ function(module, exports) {

	"use strict";

	exports.__esModule = true;

	exports.default = function (instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	};

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _defineProperty = __webpack_require__(54);

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
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(55), __esModule: true };

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(56);
	var $Object = __webpack_require__(25).Object;
	module.exports = function defineProperty(it, key, desc){
	  return $Object.defineProperty(it, key, desc);
	};

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(24);
	// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
	$export($export.S + $export.F * !__webpack_require__(33), 'Object', {defineProperty: __webpack_require__(29).f});

/***/ },
/* 57 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */
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
	    document.body.removeChild(node);
	  },
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

/***/ }
/******/ ]);