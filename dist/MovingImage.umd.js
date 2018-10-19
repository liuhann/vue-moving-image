(function webpackUniversalModuleDefinition (root, factory) {
  if (typeof exports === 'object' && typeof module === 'object') { module.exports = factory() } else if (typeof define === 'function' && define.amd) { define([], factory) } else if (typeof exports === 'object') { exports['MovingImage'] = factory() } else { root['MovingImage'] = factory() }
})((typeof self !== 'undefined' ? self : this), function () {
  return /******/ (function (modules) { // webpackBootstrap
    /******/ 	// The module cache
    /******/ 	var installedModules = {}
    /******/
    /******/ 	// The require function
    /******/ 	function __webpack_require__ (moduleId) {
      /******/
      /******/ 		// Check if module is in cache
      /******/ 		if (installedModules[moduleId]) {
        /******/ 			return installedModules[moduleId].exports
        /******/ 		}
      /******/ 		// Create a new module (and put it into the cache)
      /******/ 		var module = installedModules[moduleId] = {
        /******/ 			i: moduleId,
        /******/ 			l: false,
        /******/ 			exports: {}
        /******/ 		}
      /******/
      /******/ 		// Execute the module function
      /******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__)
      /******/
      /******/ 		// Flag the module as loaded
      /******/ 		module.l = true
      /******/
      /******/ 		// Return the exports of the module
      /******/ 		return module.exports
      /******/ 	}
    /******/
    /******/
    /******/ 	// expose the modules object (__webpack_modules__)
    /******/ 	__webpack_require__.m = modules
    /******/
    /******/ 	// expose the module cache
    /******/ 	__webpack_require__.c = installedModules
    /******/
    /******/ 	// define getter function for harmony exports
    /******/ 	__webpack_require__.d = function (exports, name, getter) {
      /******/ 		if (!__webpack_require__.o(exports, name)) {
        /******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter })
        /******/ 		}
      /******/ 	}
    /******/
    /******/ 	// define __esModule on exports
    /******/ 	__webpack_require__.r = function (exports) {
      /******/ 		if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
        /******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' })
        /******/ 		}
      /******/ 		Object.defineProperty(exports, '__esModule', { value: true })
      /******/ 	}
    /******/
    /******/ 	// create a fake namespace object
    /******/ 	// mode & 1: value is a module id, require it
    /******/ 	// mode & 2: merge all properties of value into the ns
    /******/ 	// mode & 4: return value when already ns object
    /******/ 	// mode & 8|1: behave like require
    /******/ 	__webpack_require__.t = function (value, mode) {
      /******/ 		if (mode & 1) value = __webpack_require__(value)
      /******/ 		if (mode & 8) return value
      /******/ 		if ((mode & 4) && typeof value === 'object' && value && value.__esModule) return value
      /******/ 		var ns = Object.create(null)
      /******/ 		__webpack_require__.r(ns)
      /******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value })
      /******/ 		if (mode & 2 && typeof value !== 'string') for (var key in value) __webpack_require__.d(ns, key, function (key) { return value[key] }.bind(null, key))
      /******/ 		return ns
      /******/ 	}
    /******/
    /******/ 	// getDefaultExport function for compatibility with non-harmony modules
    /******/ 	__webpack_require__.n = function (module) {
      /******/ 		var getter = module && module.__esModule
      /******/ 			? function getDefault () { return module['default'] }
      /******/ 			: function getModuleExports () { return module }
      /******/ 		__webpack_require__.d(getter, 'a', getter)
      /******/ 		return getter
      /******/ 	}
    /******/
    /******/ 	// Object.prototype.hasOwnProperty.call
    /******/ 	__webpack_require__.o = function (object, property) { return Object.prototype.hasOwnProperty.call(object, property) }
    /******/
    /******/ 	// __webpack_public_path__
    /******/ 	__webpack_require__.p = ''
    /******/
    /******/
    /******/ 	// Load entry module and return exports
    /******/ 	return __webpack_require__(__webpack_require__.s = 'fb15')
    /******/ })
  /************************************************************************/
  /******/ ({

    /***/ '0d58':
    /***/ function (module, exports, __webpack_require__) {
      // 19.1.2.14 / 15.2.3.14 Object.keys(O)
      var $keys = __webpack_require__('ce10')
      var enumBugKeys = __webpack_require__('e11e')

      module.exports = Object.keys || function keys (O) {
        return $keys(O, enumBugKeys)
      }
      /***/ },

    /***/ '11c9':
    /***/ function (module, exports, __webpack_require__) {
      var Mexp = __webpack_require__('7fb3')

      Mexp.prototype.toPostfix = function () {
        'use strict'
        var post = [], elem, popped, prep, pre, ele
    	var stack = [{ value: '(', type: 4, pre: 0 }]
        var arr = this.value
        for (var i = 1; i < arr.length; i++) {
          if (arr[i].type === 1 || arr[i].type === 3 || arr[i].type === 13) {	// if token is number,constant,or n(which is also a special constant in our case)
            if (arr[i].type === 1) { arr[i].value = Number(arr[i].value) }
            post.push(arr[i])
          } else if (arr[i].type === 4) {
            stack.push(arr[i])
          } else if (arr[i].type === 5) {
            while ((popped = stack.pop()).type !== 4) {
              post.push(popped)
            }
          } else if (arr[i].type === 11) {
            while ((popped = stack.pop()).type !== 4) {
              post.push(popped)
            }
            stack.push(popped)
          } else {
            elem = arr[i]
            pre = elem.pre
            ele = stack[stack.length - 1]
            prep = ele.pre
            var flag = ele.value == 'Math.pow' && elem.value == 'Math.pow'
            if (pre > prep)stack.push(elem)
            else {
              while (prep >= pre && !flag || flag && pre < prep) {
                popped = stack.pop()
                ele = stack[stack.length - 1]
                post.push(popped)
                prep = ele.pre
                flag = elem.value == 'Math.pow' && ele.value == 'Math.pow'
              }
              stack.push(elem)
            }
          }
        }
        return new Mexp(post)
      }
      module.exports = Mexp
      /***/ },

    /***/ '11e9':
    /***/ function (module, exports, __webpack_require__) {
      var pIE = __webpack_require__('52a7')
      var createDesc = __webpack_require__('4630')
      var toIObject = __webpack_require__('6821')
      var toPrimitive = __webpack_require__('6a99')
      var has = __webpack_require__('69a8')
      var IE8_DOM_DEFINE = __webpack_require__('c69a')
      var gOPD = Object.getOwnPropertyDescriptor

      exports.f = __webpack_require__('9e1e') ? gOPD : function getOwnPropertyDescriptor (O, P) {
        O = toIObject(O)
        P = toPrimitive(P, true)
        if (IE8_DOM_DEFINE) {
          try {
            return gOPD(O, P)
          } catch (e) { /* empty */ }
        }
        if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P])
      }
      /***/ },

    /***/ '1495':
    /***/ function (module, exports, __webpack_require__) {
      var dP = __webpack_require__('86cc')
      var anObject = __webpack_require__('cb7c')
      var getKeys = __webpack_require__('0d58')

      module.exports = __webpack_require__('9e1e') ? Object.defineProperties : function defineProperties (O, Properties) {
        anObject(O)
        var keys = getKeys(Properties)
        var length = keys.length
        var i = 0
        var P
        while (length > i) dP.f(O, P = keys[i++], Properties[P])
        return O
      }
      /***/ },

    /***/ '214f':
    /***/ function (module, exports, __webpack_require__) {
      'use strict'

      var hide = __webpack_require__('32e9')
      var redefine = __webpack_require__('2aba')
      var fails = __webpack_require__('79e5')
      var defined = __webpack_require__('be13')
      var wks = __webpack_require__('2b4c')

      module.exports = function (KEY, length, exec) {
        var SYMBOL = wks(KEY)
        var fns = exec(defined, SYMBOL, ''[KEY])
        var strfn = fns[0]
        var rxfn = fns[1]
        if (fails(function () {
          var O = {}
          O[SYMBOL] = function () { return 7 }
          return ''[KEY](O) != 7
        })) {
          redefine(String.prototype, KEY, strfn)
          hide(RegExp.prototype, SYMBOL, length == 2
          // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
          // 21.2.5.11 RegExp.prototype[@@split](string, limit)
            ? function (string, arg) { return rxfn.call(string, this, arg) }
          // 21.2.5.6 RegExp.prototype[@@match](string)
          // 21.2.5.9 RegExp.prototype[@@search](string)
            : function (string) { return rxfn.call(string, this) }
          )
        }
      }
      /***/ },

    /***/ '230e':
    /***/ function (module, exports, __webpack_require__) {
      var isObject = __webpack_require__('d3f4')
      var document = __webpack_require__('7726').document
      // typeof document.createElement is 'object' in old IE
      var is = isObject(document) && isObject(document.createElement)
      module.exports = function (it) {
        return is ? document.createElement(it) : {}
      }
      /***/ },

    /***/ '2621':
    /***/ function (module, exports) {
      exports.f = Object.getOwnPropertySymbols
      /***/ },

    /***/ '2aba':
    /***/ function (module, exports, __webpack_require__) {
      var global = __webpack_require__('7726')
      var hide = __webpack_require__('32e9')
      var has = __webpack_require__('69a8')
      var SRC = __webpack_require__('ca5a')('src')
      var TO_STRING = 'toString'
      var $toString = Function[TO_STRING]
      var TPL = ('' + $toString).split(TO_STRING)

      __webpack_require__('8378').inspectSource = function (it) {
        return $toString.call(it)
      };

      (module.exports = function (O, key, val, safe) {
        var isFunction = typeof val === 'function'
        if (isFunction) has(val, 'name') || hide(val, 'name', key)
        if (O[key] === val) return
        if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)))
        if (O === global) {
          O[key] = val
        } else if (!safe) {
          delete O[key]
          hide(O, key, val)
        } else if (O[key]) {
          O[key] = val
        } else {
          hide(O, key, val)
        }
        // add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
      })(Function.prototype, TO_STRING, function toString () {
        return typeof this === 'function' && this[SRC] || $toString.call(this)
      })
      /***/ },

    /***/ '2aeb':
    /***/ function (module, exports, __webpack_require__) {
      // 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
      var anObject = __webpack_require__('cb7c')
      var dPs = __webpack_require__('1495')
      var enumBugKeys = __webpack_require__('e11e')
      var IE_PROTO = __webpack_require__('613b')('IE_PROTO')
      var Empty = function () { /* empty */ }
      var PROTOTYPE = 'prototype'

      // Create object with fake `null` prototype: use iframe Object with cleared prototype
      var createDict = function () {
        // Thrash, waste and sodomy: IE GC bug
        var iframe = __webpack_require__('230e')('iframe')
        var i = enumBugKeys.length
        var lt = '<'
        var gt = '>'
        var iframeDocument
        iframe.style.display = 'none'
        __webpack_require__('fab2').appendChild(iframe)
        iframe.src = 'javascript:' // eslint-disable-line no-script-url
        // createDict = iframe.contentWindow.Object;
        // html.removeChild(iframe);
        iframeDocument = iframe.contentWindow.document
        iframeDocument.open()
        iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt)
        iframeDocument.close()
        createDict = iframeDocument.F
        while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]]
        return createDict()
      }

      module.exports = Object.create || function create (O, Properties) {
        var result
        if (O !== null) {
          Empty[PROTOTYPE] = anObject(O)
          result = new Empty()
          Empty[PROTOTYPE] = null
          // add "__proto__" for Object.getPrototypeOf polyfill
          result[IE_PROTO] = O
        } else result = createDict()
        return Properties === undefined ? result : dPs(result, Properties)
      }
      /***/ },

    /***/ '2b4c':
    /***/ function (module, exports, __webpack_require__) {
      var store = __webpack_require__('5537')('wks')
      var uid = __webpack_require__('ca5a')
      var Symbol = __webpack_require__('7726').Symbol
      var USE_SYMBOL = typeof Symbol === 'function'

      var $exports = module.exports = function (name) {
        return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name))
      }

      $exports.store = store
      /***/ },

    /***/ '2d00':
    /***/ function (module, exports) {
      module.exports = false
      /***/ },

    /***/ '2d95':
    /***/ function (module, exports) {
      var toString = {}.toString

      module.exports = function (it) {
        return toString.call(it).slice(8, -1)
      }
      /***/ },

    /***/ '32e9':
    /***/ function (module, exports, __webpack_require__) {
      var dP = __webpack_require__('86cc')
      var createDesc = __webpack_require__('4630')
      module.exports = __webpack_require__('9e1e') ? function (object, key, value) {
        return dP.f(object, key, createDesc(1, value))
      } : function (object, key, value) {
        object[key] = value
        return object
      }
      /***/ },

    /***/ '41ff':
    /***/ function (module, __webpack_exports__, __webpack_require__) {
      'use strict'
      /* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MovingImage_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('e4a0')
      /* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MovingImage_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /* #__PURE__ */__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MovingImage_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__)
      /* unused harmony reexport * */
      /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MovingImage_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a)
      /***/ },

    /***/ '4588':
    /***/ function (module, exports) {
      // 7.1.4 ToInteger
      var ceil = Math.ceil
      var floor = Math.floor
      module.exports = function (it) {
        return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it)
      }
      /***/ },

    /***/ '4630':
    /***/ function (module, exports) {
      module.exports = function (bitmap, value) {
        return {
          enumerable: !(bitmap & 1),
          configurable: !(bitmap & 2),
          writable: !(bitmap & 4),
          value: value
        }
      }
      /***/ },

    /***/ '4bf8':
    /***/ function (module, exports, __webpack_require__) {
      // 7.1.13 ToObject(argument)
      var defined = __webpack_require__('be13')
      module.exports = function (it) {
        return Object(defined(it))
      }
      /***/ },

    /***/ '52a7':
    /***/ function (module, exports) {
      exports.f = {}.propertyIsEnumerable
      /***/ },

    /***/ '5537':
    /***/ function (module, exports, __webpack_require__) {
      var core = __webpack_require__('8378')
      var global = __webpack_require__('7726')
      var SHARED = '__core-js_shared__'
      var store = global[SHARED] || (global[SHARED] = {});

      (module.exports = function (key, value) {
        return store[key] || (store[key] = value !== undefined ? value : {})
      })('versions', []).push({
        version: core.version,
        mode: __webpack_require__('2d00') ? 'pure' : 'global',
        copyright: '© 2018 Denis Pushkarev (zloirock.ru)'
      })
      /***/ },

    /***/ '5a72':
    /***/ function (module, exports, __webpack_require__) {
      /* WEBPACK VAR INJECTION */(function (global) {
        var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__/*
 2017 Julian Garnier
 Released under the MIT license
*/
        var $jscomp = { scope: {} }; $jscomp.defineProperty = typeof Object.defineProperties === 'function' ? Object.defineProperty : function (e, r, p) { if (p.get || p.set) throw new TypeError('ES3 does not support getters and setters.'); e != Array.prototype && e != Object.prototype && (e[r] = p.value) }; $jscomp.getGlobal = function (e) { return typeof window !== 'undefined' && window === e ? e : typeof global !== 'undefined' && global != null ? global : e }; $jscomp.global = $jscomp.getGlobal(this); $jscomp.SYMBOL_PREFIX = 'jscomp_symbol_'
        $jscomp.initSymbol = function () { $jscomp.initSymbol = function () {}; $jscomp.global.Symbol || ($jscomp.global.Symbol = $jscomp.Symbol) }; $jscomp.symbolCounter_ = 0; $jscomp.Symbol = function (e) { return $jscomp.SYMBOL_PREFIX + (e || '') + $jscomp.symbolCounter_++ }
        $jscomp.initSymbolIterator = function () { $jscomp.initSymbol(); var e = $jscomp.global.Symbol.iterator; e || (e = $jscomp.global.Symbol.iterator = $jscomp.global.Symbol('iterator')); typeof Array.prototype[e] !== 'function' && $jscomp.defineProperty(Array.prototype, e, { configurable: !0, writable: !0, value: function () { return $jscomp.arrayIterator(this) } }); $jscomp.initSymbolIterator = function () {} }; $jscomp.arrayIterator = function (e) { var r = 0; return $jscomp.iteratorPrototype(function () { return r < e.length ? { done: !1, value: e[r++] } : { done: !0 } }) }
        $jscomp.iteratorPrototype = function (e) { $jscomp.initSymbolIterator(); e = { next: e }; e[$jscomp.global.Symbol.iterator] = function () { return this }; return e }; $jscomp.array = $jscomp.array || {}; $jscomp.iteratorFromArray = function (e, r) { $jscomp.initSymbolIterator(); e instanceof String && (e += ''); var p = 0, m = { next: function () { if (p < e.length) { var u = p++; return { value: r(u, e[u]), done: !1 } }m.next = function () { return { done: !0, value: void 0 } }; return m.next() } }; m[Symbol.iterator] = function () { return m }; return m }
        $jscomp.polyfill = function (e, r, p, m) { if (r) { p = $jscomp.global; e = e.split('.'); for (m = 0; m < e.length - 1; m++) { var u = e[m]; u in p || (p[u] = {}); p = p[u] }e = e[e.length - 1]; m = p[e]; r = r(m); r != m && r != null && $jscomp.defineProperty(p, e, { configurable: !0, writable: !0, value: r }) } }; $jscomp.polyfill('Array.prototype.keys', function (e) { return e || function () { return $jscomp.iteratorFromArray(this, function (e) { return e }) } }, 'es6-impl', 'es3'); var $jscomp$this = this;
        (function (e, r) {
          true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (r),
          __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function'
            ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
          __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined
        })(this, function () {
          function e (a) { if (!h.col(a)) try { return document.querySelectorAll(a) } catch (c) {} } function r (a, c) { for (var d = a.length, b = arguments.length >= 2 ? arguments[1] : void 0, f = [], n = 0; n < d; n++) if (n in a) { var k = a[n]; c.call(b, k, n, a) && f.push(k) } return f } function p (a) { return a.reduce(function (a, d) { return a.concat(h.arr(d) ? p(d) : d) }, []) } function m (a) {
            if (h.arr(a)) return a
            h.str(a) && (a = e(a) || a); return a instanceof NodeList || a instanceof HTMLCollection ? [].slice.call(a) : [a]
          } function u (a, c) { return a.some(function (a) { return a === c }) } function C (a) { var c = {}, d; for (d in a)c[d] = a[d]; return c } function D (a, c) { var d = C(a), b; for (b in a)d[b] = c.hasOwnProperty(b) ? c[b] : a[b]; return d } function z (a, c) { var d = C(a), b; for (b in c)d[b] = h.und(a[b]) ? c[b] : a[b]; return d } function T (a) {
            a = a.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, function (a, c, d, k) { return c + c + d + d + k + k }); var c = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(a)
            a = parseInt(c[1], 16); var d = parseInt(c[2], 16), c = parseInt(c[3], 16); return 'rgba(' + a + ',' + d + ',' + c + ',1)'
          } function U (a) {
            function c (a, c, b) { b < 0 && (b += 1); b > 1 && --b; return b < 1 / 6 ? a + 6 * (c - a) * b : b < 0.5 ? c : b < 2 / 3 ? a + (c - a) * (2 / 3 - b) * 6 : a } var d = /hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(a) || /hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(a); a = parseInt(d[1]) / 360; var b = parseInt(d[2]) / 100, f = parseInt(d[3]) / 100, d = d[4] || 1; if (b == 0)f = b = a = f; else { var n = f < 0.5 ? f * (1 + b) : f + b - f * b, k = 2 * f - n, f = c(k, n, a + 1 / 3), b = c(k, n, a); a = c(k, n, a - 1 / 3) } return 'rgba(' +
255 * f + ',' + 255 * b + ',' + 255 * a + ',' + d + ')'
          } function y (a) { if (a = /([\+\-]?[0-9#\.]+)(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(a)) return a[2] } function V (a) { if (a.indexOf('translate') > -1 || a === 'perspective') return 'px'; if (a.indexOf('rotate') > -1 || a.indexOf('skew') > -1) return 'deg' } function I (a, c) { return h.fnc(a) ? a(c.target, c.id, c.total) : a } function E (a, c) { if (c in a.style) return getComputedStyle(a).getPropertyValue(c.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase()) || '0' } function J (a, c) {
            if (h.dom(a) &&
u(W, c)) return 'transform'; if (h.dom(a) && (a.getAttribute(c) || h.svg(a) && a[c])) return 'attribute'; if (h.dom(a) && c !== 'transform' && E(a, c)) return 'css'; if (a[c] != null) return 'object'
          } function X (a, c) { var d = V(c), d = c.indexOf('scale') > -1 ? 1 : 0 + d; a = a.style.transform; if (!a) return d; for (var b = [], f = [], n = [], k = /(\w+)\((.+?)\)/g; b = k.exec(a);)f.push(b[1]), n.push(b[2]); a = r(n, function (a, b) { return f[b] === c }); return a.length ? a[0] : d } function K (a, c) {
            switch (J(a, c)) { case 'transform':return X(a, c); case 'css':return E(a, c); case 'attribute':return a.getAttribute(c) } return a[c] ||
0
          } function L (a, c) { var d = /^(\*=|\+=|-=)/.exec(a); if (!d) return a; var b = y(a) || 0; c = parseFloat(c); a = parseFloat(a.replace(d[0], '')); switch (d[0][0]) { case '+':return c + a + b; case '-':return c - a + b; case '*':return c * a + b } } function F (a, c) { return Math.sqrt(Math.pow(c.x - a.x, 2) + Math.pow(c.y - a.y, 2)) } function M (a) { a = a.points; for (var c = 0, d, b = 0; b < a.numberOfItems; b++) { var f = a.getItem(b); b > 0 && (c += F(d, f)); d = f } return c } function N (a) {
            if (a.getTotalLength) return a.getTotalLength(); switch (a.tagName.toLowerCase()) {
              case 'circle':return 2 *
Math.PI * a.getAttribute('r'); case 'rect':return 2 * a.getAttribute('width') + 2 * a.getAttribute('height'); case 'line':return F({ x: a.getAttribute('x1'), y: a.getAttribute('y1') }, { x: a.getAttribute('x2'), y: a.getAttribute('y2') }); case 'polyline':return M(a); case 'polygon':var c = a.points; return M(a) + F(c.getItem(c.numberOfItems - 1), c.getItem(0))
            }
          } function Y (a, c) {
            function d (b) { b = void 0 === b ? 0 : b; return a.el.getPointAtLength(c + b >= 1 ? c + b : 0) } var b = d(), f = d(-1), n = d(1); switch (a.property) {
              case 'x':return b.x; case 'y':return b.y
              case 'angle':return 180 * Math.atan2(n.y - f.y, n.x - f.x) / Math.PI
            }
          } function O (a, c) { var d = /-?\d*\.?\d+/g, b; b = h.pth(a) ? a.totalLength : a; if (h.col(b)) if (h.rgb(b)) { var f = /rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec(b); b = f ? 'rgba(' + f[1] + ',1)' : b } else b = h.hex(b) ? T(b) : h.hsl(b) ? U(b) : void 0; else f = (f = y(b)) ? b.substr(0, b.length - f.length) : b, b = c && !/\s/g.test(b) ? f + c : f; b += ''; return { original: b, numbers: b.match(d) ? b.match(d).map(Number) : [0], strings: h.str(a) || c ? b.split(d) : [] } } function P (a) {
            a = a ? p(h.arr(a) ? a.map(m) : m(a)) : []; return r(a,
              function (a, d, b) { return b.indexOf(a) === d })
          } function Z (a) { var c = P(a); return c.map(function (a, b) { return { target: a, id: b, total: c.length } }) } function aa (a, c) { var d = C(c); if (h.arr(a)) { var b = a.length; b !== 2 || h.obj(a[0]) ? h.fnc(c.duration) || (d.duration = c.duration / b) : a = { value: a } } return m(a).map(function (a, b) { b = b ? 0 : c.delay; a = h.obj(a) && !h.pth(a) ? a : { value: a }; h.und(a.delay) && (a.delay = b); return a }).map(function (a) { return z(a, d) }) } function ba (a, c) {
            var d = {}, b; for (b in a) {
              var f = I(a[b], c); h.arr(f) && (f = f.map(function (a) {
                return I(a,
                  c)
              }), f.length === 1 && (f = f[0])); d[b] = f
            }d.duration = parseFloat(d.duration); d.delay = parseFloat(d.delay); return d
          } function ca (a) { return h.arr(a) ? A.apply(this, a) : Q[a] } function da (a, c) {
            var d; return a.tweens.map(function (b) {
              b = ba(b, c); var f = b.value, e = K(c.target, a.name), k = d ? d.to.original : e, k = h.arr(f) ? f[0] : k, w = L(h.arr(f) ? f[1] : f, k), e = y(w) || y(k) || y(e); b.from = O(k, e); b.to = O(w, e); b.start = d ? d.end : a.offset; b.end = b.start + b.delay + b.duration; b.easing = ca(b.easing); b.elasticity = (1E3 - Math.min(Math.max(b.elasticity, 1), 999)) /
1E3; b.isPath = h.pth(f); b.isColor = h.col(b.from.original); b.isColor && (b.round = 1); return d = b
            })
          } function ea (a, c) { return r(p(a.map(function (a) { return c.map(function (b) { var c = J(a.target, b.name); if (c) { var d = da(b, a); b = { type: c, property: b.name, animatable: a, tweens: d, duration: d[d.length - 1].end, delay: d[0].delay } } else b = void 0; return b }) })), function (a) { return !h.und(a) }) } function R (a, c, d, b) {
            var f = a === 'delay'; return c.length ? (f ? Math.min : Math.max).apply(Math, c.map(function (b) { return b[a] })) : f ? b.delay : d.offset + b.delay +
b.duration
          } function fa (a) { var c = D(ga, a), d = D(S, a), b = Z(a.targets), f = [], e = z(c, d), k; for (k in a)e.hasOwnProperty(k) || k === 'targets' || f.push({ name: k, offset: e.offset, tweens: aa(a[k], d) }); a = ea(b, f); return z(c, { children: [], animatables: b, animations: a, duration: R('duration', a, c, d), delay: R('delay', a, c, d) }) } function q (a) {
            function c () { return window.Promise && new Promise(function (resolve) { return p = a }) } function d (a) { return g.reversed ? g.duration - a : a } function b (a) {
              for (var b = 0, c = {}, d = g.animations, f = d.length; b < f;) {
                var e = d[b],
                  k = e.animatable, h = e.tweens, n = h.length - 1, l = h[n]; n && (l = r(h, function (b) { return a < b.end })[0] || l); for (var h = Math.min(Math.max(a - l.start - l.delay, 0), l.duration) / l.duration, w = isNaN(h) ? 1 : l.easing(h, l.elasticity), h = l.to.strings, p = l.round, n = [], m = void 0, m = l.to.numbers.length, t = 0; t < m; t++) { var x = void 0, x = l.to.numbers[t], q = l.from.numbers[t], x = l.isPath ? Y(l.value, w * x) : q + w * (x - q); p && (l.isColor && t > 2 || (x = Math.round(x * p) / p)); n.push(x) } if (l = h.length) for (m = h[0], w = 0; w < l; w++)p = h[w + 1], t = n[w], isNaN(t) || (m = p ? m + (t + p) : m + (t + ' '))
                else m = n[0]; ha[e.type](k.target, e.property, m, c, k.id); e.currentValue = m; b++
              } if (b = Object.keys(c).length) for (d = 0; d < b; d++)H || (H = E(document.body, 'transform') ? 'transform' : '-webkit-transform'), g.animatables[d].target.style[H] = c[d].join(' '); g.currentTime = a; g.progress = a / g.duration * 100
            } function f (a) { if (g[a])g[a](g) } function e () { g.remaining && !0 !== g.remaining && g.remaining-- } function k (a) {
              var k = g.duration, n = g.offset, w = n + g.delay, r = g.currentTime, x = g.reversed, q = d(a); if (g.children.length) {
                var u = g.children, v = u.length
                if (q >= g.currentTime) for (var G = 0; G < v; G++)u[G].seek(q); else for (;v--;)u[v].seek(q)
              } if (q >= w || !k)g.began || (g.began = !0, f('begin')), f('run'); if (q > n && q < k)b(q); else if (q <= n && r !== 0 && (b(0), x && e()), q >= k && r !== k || !k)b(k), x || e(); f('update'); a >= k && (g.remaining ? (t = h, g.direction === 'alternate' && (g.reversed = !g.reversed)) : (g.pause(), g.completed || (g.completed = !0, f('complete'), 'Promise' in window && (p(), m = c()))), l = 0)
            }a = void 0 === a ? {} : a; var h, t, l = 0, p = null, m = c(), g = fa(a); g.reset = function () {
              var a = g.direction, c = g.loop; g.currentTime =
0; g.progress = 0; g.paused = !0; g.began = !1; g.completed = !1; g.reversed = a === 'reverse'; g.remaining = a === 'alternate' && c === 1 ? 2 : c; b(0); for (a = g.children.length; a--;)g.children[a].reset()
            }; g.tick = function (a) { h = a; t || (t = h); k((l + h - t) * q.speed) }; g.seek = function (a) { k(d(a)) }; g.pause = function () { var a = v.indexOf(g); a > -1 && v.splice(a, 1); g.paused = !0 }; g.play = function () { g.paused && (g.paused = !1, t = 0, l = d(g.currentTime), v.push(g), B || ia()) }; g.reverse = function () { g.reversed = !g.reversed; t = 0; l = d(g.currentTime) }; g.restart = function () {
              g.pause()
              g.reset(); g.play()
            }; g.finished = m; g.reset(); g.autoplay && g.play(); return g
          } var ga = { update: void 0, begin: void 0, run: void 0, complete: void 0, loop: 1, direction: 'normal', autoplay: !0, offset: 0 }, S = { duration: 1E3, delay: 0, easing: 'easeOutElastic', elasticity: 500, round: 0 }, W = 'translateX translateY translateZ rotate rotateX rotateY rotateZ scale scaleX scaleY scaleZ skewX skewY perspective'.split(' '), H, h = { arr: function (a) { return Array.isArray(a) },
              obj: function (a) { return Object.prototype.toString.call(a).indexOf('Object') > -1 },
              pth: function (a) { return h.obj(a) && a.hasOwnProperty('totalLength') },
              svg: function (a) { return a instanceof SVGElement },
              dom: function (a) { return a.nodeType || h.svg(a) },
              str: function (a) { return typeof a === 'string' },
              fnc: function (a) { return typeof a === 'function' },
              und: function (a) { return typeof a === 'undefined' },
              hex: function (a) { return /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(a) },
              rgb: function (a) { return /^rgb/.test(a) },
              hsl: function (a) { return /^hsl/.test(a) },
              col: function (a) { return h.hex(a) || h.rgb(a) || h.hsl(a) } }, A = (function () {
              function a (a,
                d, b) { return (((1 - 3 * b + 3 * d) * a + (3 * b - 6 * d)) * a + 3 * d) * a } return function (c, d, b, f) {
                if (c >= 0 && c <= 1 && b >= 0 && b <= 1) {
                  var e = new Float32Array(11); if (c !== d || b !== f) for (var k = 0; k < 11; ++k)e[k] = a(0.1 * k, c, b); return function (k) {
                    if (c === d && b === f) return k; if (k === 0) return 0; if (k === 1) return 1; for (var h = 0, l = 1; l !== 10 && e[l] <= k; ++l)h += 0.1; --l; var l = h + (k - e[l]) / (e[l + 1] - e[l]) * 0.1, n = 3 * (1 - 3 * b + 3 * c) * l * l + 2 * (3 * b - 6 * c) * l + 3 * c; if (n >= 0.001) { for (h = 0; h < 4; ++h) { n = 3 * (1 - 3 * b + 3 * c) * l * l + 2 * (3 * b - 6 * c) * l + 3 * c; if (n === 0) break; var m = a(l, c, b) - k, l = l - m / n }k = l } else if (n ===
0)k = l; else { var l = h, h = h + 0.1, g = 0; do m = l + (h - l) / 2, n = a(m, c, b) - k, n > 0 ? h = m : l = m; while (Math.abs(n) > 1e-7 && ++g < 10);k = m } return a(k, d, f)
                  }
                }
              }
            }()), Q = (function () {
              function a (a, b) { return a === 0 || a === 1 ? a : -Math.pow(2, 10 * (a - 1)) * Math.sin(2 * (a - 1 - b / (2 * Math.PI) * Math.asin(1)) * Math.PI / b) } var c = 'Quad Cubic Quart Quint Sine Expo Circ Back Elastic'.split(' '), d = { In: [[0.55, 0.085, 0.68, 0.53], [0.55, 0.055, 0.675, 0.19], [0.895, 0.03, 0.685, 0.22], [0.755, 0.05, 0.855, 0.06], [0.47, 0, 0.745, 0.715], [0.95, 0.05, 0.795, 0.035], [0.6, 0.04, 0.98, 0.335], [0.6, -0.28, 0.735, 0.045], a],
                  Out: [[0.25,
                    0.46, 0.45, 0.94], [0.215, 0.61, 0.355, 1], [0.165, 0.84, 0.44, 1], [0.23, 1, 0.32, 1], [0.39, 0.575, 0.565, 1], [0.19, 1, 0.22, 1], [0.075, 0.82, 0.165, 1], [0.175, 0.885, 0.32, 1.275], function (b, c) { return 1 - a(1 - b, c) }],
                  InOut: [[0.455, 0.03, 0.515, 0.955], [0.645, 0.045, 0.355, 1], [0.77, 0, 0.175, 1], [0.86, 0, 0.07, 1], [0.445, 0.05, 0.55, 0.95], [1, 0, 0, 1], [0.785, 0.135, 0.15, 0.86], [0.68, -0.55, 0.265, 1.55], function (b, c) { return b < 0.5 ? a(2 * b, c) / 2 : 1 - a(-2 * b + 2, c) / 2 }] }, b = { linear: A(0.25, 0.25, 0.75, 0.75) }, f = {}, e; for (e in d) {
                f.type = e, d[f.type].forEach(function (a) {
                  return function (d, f) {
                    b['ease' + a.type + c[f]] = h.fnc(d)
                      ? d : A.apply($jscomp$this, d)
                  }
                }(f)), f = { type: f.type }
              } return b
            }()), ha = { css: function (a, c, d) { return a.style[c] = d }, attribute: function (a, c, d) { return a.setAttribute(c, d) }, object: function (a, c, d) { return a[c] = d }, transform: function (a, c, d, b, f) { b[f] || (b[f] = []); b[f].push(c + '(' + d + ')') } }, v = [], B = 0, ia = (function () { function a () { B = requestAnimationFrame(c) } function c (c) { var b = v.length; if (b) { for (var d = 0; d < b;)v[d] && v[d].tick(c), d++; a() } else cancelAnimationFrame(B), B = 0 } return a }()); q.version = '2.2.0'; q.speed = 1; q.running = v; q.remove =
function (a) { a = P(a); for (var c = v.length; c--;) for (var d = v[c], b = d.animations, f = b.length; f--;)u(a, b[f].animatable.target) && (b.splice(f, 1), b.length || d.pause()) }; q.getValue = K; q.path = function (a, c) { var d = h.str(a) ? e(a)[0] : a, b = c || 100; return function (a) { return { el: d, property: a, totalLength: N(d) * (b / 100) } } }; q.setDashoffset = function (a) { var c = N(a); a.setAttribute('stroke-dasharray', c); return c }; q.bezier = A; q.easings = Q; q.timeline = function (a) {
            var c = q(a); c.pause(); c.duration = 0; c.add = function (d) {
              c.children.forEach(function (a) {
                a.began =
!0; a.completed = !0
              }); m(d).forEach(function (b) { var d = z(b, D(S, a || {})); d.targets = d.targets || a.targets; b = c.duration; var e = d.offset; d.autoplay = !1; d.direction = c.direction; d.offset = h.und(e) ? b : L(e, b); c.began = !0; c.completed = !0; c.seek(d.offset); d = q(d); d.began = !0; d.completed = !0; d.duration > b && (c.duration = d.duration); c.children.push(d) }); c.seek(0); c.reset(); c.autoplay && c.restart(); return c
            }; return c
          }; q.random = function (a, c) { return Math.floor(Math.random() * (c - a + 1)) + a }; return q
        })
        /* WEBPACK VAR INJECTION */ }.call(this, __webpack_require__('c8ba')))
      /***/ },

    /***/ '5ca1':
    /***/ function (module, exports, __webpack_require__) {
      var global = __webpack_require__('7726')
      var core = __webpack_require__('8378')
      var hide = __webpack_require__('32e9')
      var redefine = __webpack_require__('2aba')
      var ctx = __webpack_require__('9b43')
      var PROTOTYPE = 'prototype'

      var $export = function (type, name, source) {
        var IS_FORCED = type & $export.F
        var IS_GLOBAL = type & $export.G
        var IS_STATIC = type & $export.S
        var IS_PROTO = type & $export.P
        var IS_BIND = type & $export.B
        var target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE]
        var exports = IS_GLOBAL ? core : core[name] || (core[name] = {})
        var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {})
        var key, own, out, exp
        if (IS_GLOBAL) source = name
        for (key in source) {
          // contains in native
          own = !IS_FORCED && target && target[key] !== undefined
          // export native or passed
          out = (own ? target : source)[key]
          // bind timers to global for call from export context
          exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out === 'function' ? ctx(Function.call, out) : out
          // extend global
          if (target) redefine(target, key, out, type & $export.U)
          // export
          if (exports[key] != out) hide(exports, key, exp)
          if (IS_PROTO && expProto[key] != out) expProto[key] = out
        }
      }
      global.core = core
      // type bitmap
      $export.F = 1 // forced
      $export.G = 2 // global
      $export.S = 4 // static
      $export.P = 8 // proto
      $export.B = 16 // bind
      $export.W = 32 // wrap
      $export.U = 64 // safe
      $export.R = 128 // real proto method for `library`
      module.exports = $export
      /***/ },

    /***/ '5dbc':
    /***/ function (module, exports, __webpack_require__) {
      var isObject = __webpack_require__('d3f4')
      var setPrototypeOf = __webpack_require__('8b97').set
      module.exports = function (that, target, C) {
        var S = target.constructor
        var P
        if (S !== C && typeof S === 'function' && (P = S.prototype) !== C.prototype && isObject(P) && setPrototypeOf) {
          setPrototypeOf(that, P)
        } return that
      }
      /***/ },

    /***/ '613b':
    /***/ function (module, exports, __webpack_require__) {
      var shared = __webpack_require__('5537')('keys')
      var uid = __webpack_require__('ca5a')
      module.exports = function (key) {
        return shared[key] || (shared[key] = uid(key))
      }
      /***/ },

    /***/ '626a':
    /***/ function (module, exports, __webpack_require__) {
      // fallback for non-array-like ES3 and non-enumerable old V8 strings
      var cof = __webpack_require__('2d95')
      // eslint-disable-next-line no-prototype-builtins
      module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
        return cof(it) == 'String' ? it.split('') : Object(it)
      }
      /***/ },

    /***/ '64a2':
    /***/ function (module, exports) {
      var Mexp = function (parsed) {
        this.value = parsed
      }

      Mexp.math = {
        isDegree: true, // mode of calculator
        acos: function (x) {
          return (Mexp.math.isDegree ? 180 / Math.PI * Math.acos(x) : Math.acos(x))
        },
        add: function (a, b) {
          return a + b
        },
        asin: function (x) {
          return (Mexp.math.isDegree ? 180 / Math.PI * Math.asin(x) : Math.asin(x))
        },
        atan: function (x) {
          return (Mexp.math.isDegree ? 180 / Math.PI * Math.atan(x) : Math.atan(x))
        },
        acosh: function (x) {
          return Math.log(x + Math.sqrt(x * x - 1))
        },
        asinh: function (x) {
          return Math.log(x + Math.sqrt(x * x + 1))
        },
        atanh: function (x) {
          return Math.log((1 + x) / (1 - x))
        },
        C: function (n, r) {
          var pro = 1, other = n - r, choice = r
          if (choice < other) {
            choice = other
            other = r
          }
          for (var i = choice + 1; i <= n; i++) { pro *= i }
          return pro / Mexp.math.fact(other)
        },
        changeSign: function (x) {
          return -x
        },
        cos: function (x) {
          if (Mexp.math.isDegree)x = Mexp.math.toRadian(x)
          return Math.cos(x)
        },
        cosh: function (x) {
          return (Math.pow(Math.E, x) + Math.pow(Math.E, -1 * x)) / 2
        },
        div: function (a, b) {
          return a / b
        },
        fact: function (n) {
          if (n % 1 !== 0) return 'NAN'
          var pro = 1
          for (var i = 2; i <= n; i++) { pro *= i }
          return pro
        },
        inverse: function (x) {
          return 1 / x
        },
        log: function (i) {
          return Math.log(i) / Math.log(10)
        },
        mod: function (a, b) {
          return a % b
        },
        mul: function (a, b) {
          return a * b
        },
        P: function (n, r) {
          var pro = 1
			 for (var i = Math.floor(n) - Math.floor(r) + 1; i <= Math.floor(n); i++) { pro *= i }
          return pro
        },
        Pi: function (low, high, ex) {
          var pro = 1
          for (var i = low; i <= high; i++) {
            pro *= Number(ex.postfixEval({ n: i }))
          }
          return pro
        },
        pow10x: function (e) {
          var x = 1
          while (e--) { x *= 10 }
          return x
        },
        sigma: function (low, high, ex) {
          var sum = 0
          for (var i = low; i <= high; i++) {
            sum += Number(ex.postfixEval({ n: i }))
          }
          return sum
        },
        sin: function (x) {
          if (Mexp.math.isDegree)x = Mexp.math.toRadian(x)
          return Math.sin(x)
        },
        sinh: function (x) {
          return (Math.pow(Math.E, x) - Math.pow(Math.E, -1 * x)) / 2
        },
        sub: function (a, b) {
          return a - b
        },
        tan: function (x) {
          if (Mexp.math.isDegree)x = Mexp.math.toRadian(x)
          return Math.tan(x)
        },
        tanh: function (x) {
          return Mexp.sinha(x) / Mexp.cosha(x)
        },
        toRadian: function (x) {
          return x * Math.PI / 180
        }
      }
      Mexp.exception = function (message) {
        this.message = message
      }
      module.exports = Mexp
      /***/ },

    /***/ '64f6':
    /***/ function (module, exports, __webpack_require__) {
      var Mexp = __webpack_require__('11c9')
      Mexp.prototype.postfixEval = function (UserDefined) {
        'use strict'
        UserDefined = UserDefined || {}
        UserDefined.PI = Math.PI
        UserDefined.E = Math.E
        var stack = [], pop1, pop2, pop3
        var disp = []
        var temp = ''
        var arr = this.value
        var bool = (typeof UserDefined.n !== 'undefined')
        for (var i = 0; i < arr.length; i++) {
          if (arr[i].type === 1) {
            stack.push({ value: arr[i].value, type: 1 })
          } else if (arr[i].type === 3) {
            stack.push({ value: UserDefined[arr[i].value], type: 1 })
          } else if (arr[i].type === 0) {
            if (typeof stack[stack.length - 1].type === 'undefined') {
              stack[stack.length - 1].value.push(arr[i])
            } else stack[stack.length - 1].value = arr[i].value(stack[stack.length - 1].value)
          } else if (arr[i].type === 7) {
            if (typeof stack[stack.length - 1].type === 'undefined') {
              stack[stack.length - 1].value.push(arr[i])
            } else stack[stack.length - 1].value = arr[i].value(stack[stack.length - 1].value)
          } else if (arr[i].type === 8) {
            pop1 = stack.pop()
            pop2 = stack.pop()
            stack.push({ type: 1, value: arr[i].value(pop2.value, pop1.value) })
          } else if (arr[i].type === 10) {
            pop1 = stack.pop()
            pop2 = stack.pop()
            if (typeof pop2.type === 'undefined') {
              pop2.value = pop2.concat(pop1)
              pop2.value.push(arr[i])
              stack.push(pop2)
            } else if (typeof pop1.type === 'undefined') {
              pop1.unshift(pop2)
              pop1.push(arr[i])
              stack.push(pop1)
            } else {
              stack.push({ type: 1, value: arr[i].value(pop2.value, pop1.value) })
            }
          } else if (arr[i].type === 2 || arr[i].type === 9) {
            pop1 = stack.pop()
            pop2 = stack.pop()
            if (typeof pop2.type === 'undefined') {
              console.log(pop2)
              pop2 = pop2.concat(pop1)
              pop2.push(arr[i])
              stack.push(pop2)
            } else if (typeof pop1.type === 'undefined') {
              pop1.unshift(pop2)
              pop1.push(arr[i])
              stack.push(pop1)
            } else {
              stack.push({ type: 1, value: arr[i].value(pop2.value, pop1.value) })
            }
          } else if (arr[i].type === 12) {
            pop1 = stack.pop()
            if (typeof pop1.type !== 'undefined') {
              pop1 = [pop1]
            }
            pop2 = stack.pop()
            pop3 = stack.pop()
            stack.push({ type: 1, value: arr[i].value(pop3.value, pop2.value, new Mexp(pop1)) })
          } else if (arr[i].type === 13) {
            if (bool) {
              stack.push({ value: UserDefined[arr[i].value], type: 3 })
            } else stack.push([arr[i]])
          }
        }
        if (stack.length > 1) {
          throw (new Mexp.exception('Uncaught Syntax error'))
        }
        return stack[0].value > 1000000000000000 ? 'Infinity' : parseFloat(stack[0].value.toFixed(15))
      }
      Mexp.eval = function (str, tokens, obj) {
        if (typeof tokens === 'undefined') {
          return this.lex(str).toPostfix().postfixEval()
        } else if (typeof obj === 'undefined') {
          if (typeof tokens.length !== 'undefined') { return this.lex(str, tokens).toPostfix().postfixEval() } else { return this.lex(str).toPostfix().postfixEval(tokens) }
        } else { return this.lex(str, tokens).toPostfix().postfixEval(obj) }
      }
      module.exports = Mexp
      /***/ },

    /***/ '6821':
    /***/ function (module, exports, __webpack_require__) {
      // to indexed object, toObject with fallback for non-array-like ES3 strings
      var IObject = __webpack_require__('626a')
      var defined = __webpack_require__('be13')
      module.exports = function (it) {
        return IObject(defined(it))
      }
      /***/ },

    /***/ '69a8':
    /***/ function (module, exports) {
      var hasOwnProperty = {}.hasOwnProperty
      module.exports = function (it, key) {
        return hasOwnProperty.call(it, key)
      }
      /***/ },

    /***/ '6a99':
    /***/ function (module, exports, __webpack_require__) {
      // 7.1.1 ToPrimitive(input [, PreferredType])
      var isObject = __webpack_require__('d3f4')
      // instead of the ES6 spec version, we didn't implement @@toPrimitive case
      // and the second argument - flag - preferred type is a string
      module.exports = function (it, S) {
        if (!isObject(it)) return it
        var fn, val
        if (S && typeof (fn = it.toString) === 'function' && !isObject(val = fn.call(it))) return val
        if (typeof (fn = it.valueOf) === 'function' && !isObject(val = fn.call(it))) return val
        if (!S && typeof (fn = it.toString) === 'function' && !isObject(val = fn.call(it))) return val
        throw TypeError("Can't convert object to primitive value")
      }
      /***/ },

    /***/ '7333':
    /***/ function (module, exports, __webpack_require__) {
      'use strict'

      // 19.1.2.1 Object.assign(target, source, ...)
      var getKeys = __webpack_require__('0d58')
      var gOPS = __webpack_require__('2621')
      var pIE = __webpack_require__('52a7')
      var toObject = __webpack_require__('4bf8')
      var IObject = __webpack_require__('626a')
      var $assign = Object.assign

      // should work with symbols and should have deterministic property order (V8 bug)
      module.exports = !$assign || __webpack_require__('79e5')(function () {
        var A = {}
        var B = {}
        // eslint-disable-next-line no-undef
        var S = Symbol()
        var K = 'abcdefghijklmnopqrst'
        A[S] = 7
        K.split('').forEach(function (k) { B[k] = k })
        return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K
      }) ? function assign (target, source) { // eslint-disable-line no-unused-vars
          var T = toObject(target)
          var aLen = arguments.length
          var index = 1
          var getSymbols = gOPS.f
          var isEnum = pIE.f
          while (aLen > index) {
            var S = IObject(arguments[index++])
            var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S)
            var length = keys.length
            var j = 0
            var key
            while (length > j) if (isEnum.call(S, key = keys[j++])) T[key] = S[key]
          } return T
        } : $assign
      /***/ },

    /***/ '7726':
    /***/ function (module, exports) {
      // https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
      var global = module.exports = typeof window !== 'undefined' && window.Math == Math
        ? window : typeof self !== 'undefined' && self.Math == Math ? self
        // eslint-disable-next-line no-new-func
          : Function('return this')()
      if (typeof __g === 'number') __g = global // eslint-disable-line no-undef
      /***/ },

    /***/ '77f1':
    /***/ function (module, exports, __webpack_require__) {
      var toInteger = __webpack_require__('4588')
      var max = Math.max
      var min = Math.min
      module.exports = function (index, length) {
        index = toInteger(index)
        return index < 0 ? max(index + length, 0) : min(index, length)
      }
      /***/ },

    /***/ '79e5':
    /***/ function (module, exports) {
      module.exports = function (exec) {
        try {
          return !!exec()
        } catch (e) {
          return true
        }
      }
      /***/ },

    /***/ '7fb3':
    /***/ function (module, exports, __webpack_require__) {
      var Mexp = __webpack_require__('64a2')
      function inc (arr, val) {
        for (var i = 0; i < arr.length; i++) { arr[i] += val }
        return arr
      }
      var token = ['sin', 'cos', 'tan', 'pi', '(', ')', 'P', 'C',
		  'asin', 'acos', 'atan', '7', '8', '9', 'int',
		  'cosh', 'acosh', 'ln', '^', 'root', '4', '5', '6', '/', '!',
		  'tanh', 'atanh', 'Mod', '1', '2', '3', '*',
		  'sinh', 'asinh', 'e', 'log', '0', '.', '+', '-', ',', 'Sigma', 'n', 'Pi', 'pow']
      var show = ['sin', 'cos', 'tan', '&pi;', '(', ')', 'P', 'C',
        'asin', 'acos', 'atan', '7', '8', '9', 'Int',
        'cosh', 'acosh', ' ln', '^', 'root', '4', '5', '6', '&divide;', '!',
        'tanh', 'atanh', ' Mod ', '1', '2', '3', '&times;',
        'sinh', 'asinh', 'e', ' log', '0', '.', '+', '-', ',', '&Sigma;', 'n', '&Pi;', 'pow']
      var eva = [Mexp.math.sin, Mexp.math.cos, Mexp.math.tan, 'PI', '(', ')', Mexp.math.P, Mexp.math.C,
        Mexp.math.asin, Mexp.math.acos, Mexp.math.atan, '7', '8', '9', Math.floor,
        Mexp.math.cosh, Mexp.math.acosh, Math.log, Math.pow, Math.sqrt, '4', '5', '6', Mexp.math.div, Mexp.math.fact,
        Mexp.math.tanh, Mexp.math.atanh, Mexp.math.mod, '1', '2', '3', Mexp.math.mul,
        Mexp.math.sinh, Mexp.math.asinh, 'E', Mexp.math.log, '0', '.', Mexp.math.add, Mexp.math.sub, ',', Mexp.math.sigma, 'n', Mexp.math.Pi, Math.pow]
      var preced = { 0: 11, 1: 0, 2: 3, 3: 0, 4: 0, 5: 0, 6: 0, 7: 11, 8: 11, 9: 1, 10: 10, 11: 0, 12: 11, 13: 0 }
      var type = [0, 0, 0, 3, 4, 5, 10, 10,
        0, 0, 0, 1, 1, 1, 0,
        0, 0, 0, 10, 0, 1, 1, 1, 2, 7,
        0, 0, 2, 1, 1, 1, 2,
        0, 0, 3, 0, 1, 6, 9, 9, 11, 12, 13, 12, 8]
	 /*
	0 : function with syntax function_name(Maths_exp)
	1 : numbers
	2 : binary operators like * / Mod left associate and same precedence
	3 : Math constant values like e,pi,Cruncher ans
	4 : opening bracket
	5 : closing bracket
	6 : decimal
	7 : function with syntax (Math_exp)function_name
	8: function with syntax function_name(Math_exp1,Math_exp2)
	9 : binary operator like +,-
	10: binary operator like P C or ^
	11: ,
	12: function with , seperated three parameters
	13: variable of Sigma function
	 */
      var type0 = { 0: true, 1: true, 3: true, 4: true, 6: true, 8: true, 9: true, 12: true, 13: true }, // type2:true,type4:true,type9:true,type11:true,type21:true,type22
        type1 = { 0: true, 1: true, 2: true, 3: true, 4: true, 5: true, 6: true, 7: true, 8: true, 9: true, 10: true, 11: true, 12: true, 13: true }, // type3:true,type5:true,type7:true,type23
        type_1 = { 0: true, 3: true, 4: true, 8: true, 12: true, 13: true },
        empty = {},
        type_3 = { 0: true, 1: true, 3: true, 4: true, 6: true, 8: true, 12: true, 13: true }, // type_5:true,type_7:true,type_23
        type6 = { 1: true },
        newAr = [[],
          ['1', '2', '3', '7', '8', '9', '4', '5', '6', '+', '-', '*', '/', '(', ')', '^', '!', 'P', 'C', 'e', '0', '.', ',', 'n'],
          ['pi', 'ln', 'Pi'],
          ['sin', 'cos', 'tan', 'Del', 'int', 'Mod', 'log', 'pow'],
          ['asin', 'acos', 'atan', 'cosh', 'root', 'tanh', 'sinh'],
          ['acosh', 'atanh', 'asinh', 'Sigma']]
      function match (str1, str2, i, x) {
        for (var f = 0; f < x; f++) {
          if (str1[i + f] !== str2[f]) { return false }
        }
        return true
      }
      Mexp.addToken = function (tokens) {
        for (i = 0; i < tokens.length; i++) {
          x = tokens[i].token.length
          var temp = -1

          // newAr is a specially designed data structure in which 1D array at location one of 2d array has all string with length 1 2 with 2 and so on

          if (x < newAr.length)	// match to check if token is really huge and not existing
          // if not checked it will break in next line as undefined index
          {
            for (y = 0; y < newAr[x].length; y++) {
              if (tokens[i].token === newAr[x][y]) {
                temp = token.indexOf(newAr[x][y])
                break
              }
            }
          }
          if (temp === -1) {
            token.push(tokens[i].token)
            type.push(tokens[i].type)
            if (newAr.length <= tokens[i].token.length) { newAr[tokens[i].token.length] = [] }
            newAr[tokens[i].token.length].push(tokens[i].token)
            eva.push(tokens[i].value)
            show.push(tokens[i].show)
          } else {
            token[temp] = tokens[i].token
            type[temp] = tokens[i].type
            eva[temp] = tokens[i].value
            show[temp] = tokens[i].show
          }
        }
      }
      Mexp.lex = function (inp, tokens) {
        'use strict'
        var str = [{ type: 4, value: '(', show: '(', pre: 0 }]
        var ptc = []	// Parenthesis to close at the beginning is after one token
        var inpStr = inp
        var key
        var pcounter = 0
        var allowed = type0
        var bracToClose = 0
        var asterick = empty
        var prevKey = ''
        var i, x, y
        if (typeof tokens !== 'undefined') { Mexp.addToken(tokens) }
        var obj = {}
        for (i = 0; i < inpStr.length; i++) {
          if (inpStr[i] == ' ') {
            continue
          }
          key = ''
          sec:for (x = (inpStr.length - i > (newAr.length - 2) ? newAr.length - 1 : inpStr.length - i); x > 0; x--) {
            for (y = 0; y < newAr[x].length; y++) {
              if (match(inpStr, newAr[x][y], i, x)) {
                key = newAr[x][y]
                break sec
              }
            }
          }
          i += key.length - 1
          if (key === '') {
            throw (new Mexp.exception("Can't understand after " + inpStr.slice(i)))
          }
          var index = token.indexOf(key)
          var cToken = key
          var cType = type[index]
          var cEv = eva[index]
          var cPre = preced[cType]
          var	cShow = show[index]
          var pre = str[str.length - 1]
          for (j = ptc.length; j--;) {	// loop over ptc
            if (ptc[j] === 0) {
              if ([0, 2, 3, 5, 9, 11, 12, 13].indexOf(cType) !== -1) {
                if (allowed[cType] !== true) {
                  throw (new Mexp.exception(key + ' is not allowed after ' + prevKey))
                }
                str.push({ value: ')', type: 5, pre: 0, show: ')' })
                allowed = type1
                asterick = type_3
                inc(ptc, -1).pop()
              }
            }
          }
          if (allowed[cType] !== true) {
            throw (new Mexp.exception(key + ' is not allowed after ' + prevKey))
          }
          if (asterick[cType] === true) {
            cType = 2
            cEv = Mexp.math.mul
            cShow = '&times;'
            cPre = 3
            i = i - key.length
		 	}
          obj = { value: cEv, type: cType, pre: cPre, show: cShow }
          if (cType === 0) {
            allowed = type0
            asterick = empty
            inc(ptc, 2).push(2)
            str.push(obj)
            str.push({ value: '(', type: 4, pre: 0, show: '(' })
          } else if (cType === 1) {
            if (pre.type === 1) {
              pre.value += cEv
              inc(ptc, 1)
            } else {
              str.push(obj)
            }
            allowed = type1
            asterick = type_1
          } else if (cType === 2) {
            allowed = type0
            asterick = empty
            inc(ptc, 2)
            str.push(obj)
          } else if (cType === 3) { // constant
            str.push(obj)
            allowed = type1
            asterick = type_3
          } else if (cType === 4) {
            pcounter += ptc.length
            ptc = []
            bracToClose++
            allowed = type0
            asterick = empty
            str.push(obj)
          } else if (cType === 5) {
            if (!bracToClose) {
              throw (new Mexp.exception('Closing parenthesis are more than opening one, wait What!!!'))
            }
            while (pcounter--) {	// loop over ptc
    						str.push({ value: ')', type: 5, pre: 0, show: ')' })
    			}
            pcounter = 0
            bracToClose--
            allowed = type1
            asterick = type_3
            str.push(obj)
          } else if (cType === 6) {
            if (pre.hasDec) {
              throw (new Mexp.exception('Two decimals are not allowed in one number'))
            }
            if (pre.type !== 1) {
              pre = { value: 0, type: 1, pre: 0 }	// pre needs to be changed as it will the last value now to be safe in later code
              str.push(pre)
              inc(ptc, -1)
            }
            allowed = type6
            inc(ptc, 1)
            asterick = empty
            pre.value += cEv
            pre.hasDec = true
          } else if (cType === 7) {
            allowed = type1
            asterick = type_3
            inc(ptc, 1)
            str.push(obj)
          }
          if (cType === 8) {
            allowed = type0
            asterick = empty
            inc(ptc, 4).push(4)
            str.push(obj)
            str.push({ value: '(', type: 4, pre: 0, show: '(' })
          } else if (cType === 9) {
            if (pre.type === 9) {
              if (pre.value === Mexp.math.add) {
                pre.value = cEv
                pre.show = cShow
                inc(ptc, 1)
              } else if (pre.value === Mexp.math.sub && cShow === '-') {
                pre.value = Mexp.math.add
                pre.show = '+'
                inc(ptc, 1)
              }
            } else if (pre.type !== 5 && pre.type !== 7 && pre.type !== 1 && pre.type !== 3 && pre.type !== 13) { // changesign only when negative is found
              if (cToken === '-') { // do nothing for + token
                // don't add with the above if statement as that will run the else statement of parent if on Ctoken +
                allowed = type0
                asterick = empty
                inc(ptc, 2).push(2)
                str.push({ value: Mexp.math.changeSign, type: 0, pre: 21, show: '-' })
                str.push({ value: '(', type: 4, pre: 0, show: '(' })
              }
            } else {
              str.push(obj)
              inc(ptc, 2)
            }
            allowed = type0
            asterick = empty
          } else if (cType === 10) {
            allowed = type0
            asterick = empty
            inc(ptc, 2)
            str.push(obj)
          } else if (cType === 11) {
            allowed = type0
            asterick = empty
            str.push(obj)
          } else if (cType === 12) {
            allowed = type0
            asterick = empty
            inc(ptc, 6).push(6)
            str.push(obj)
            str.push({ value: '(', type: 4, pre: 0 })
          } else if (cType === 13) {
            allowed = type1
            asterick = type_3
            str.push(obj)
          }
          inc(ptc, -1)
          prevKey = key
        }
        for (var j = ptc.length; j--;) {	// loop over ptc
          if (ptc[j] === 0) {
            str.push({ value: ')', show: ')', type: 5, pre: 3 })
            inc(ptc, -1).pop()
          }
        }
        if (allowed[5] !== true) {
          throw (new Mexp.exception('complete the expression'))
        }
        while (bracToClose--) { str.push({ value: ')', show: ')', type: 5, pre: 3 }) }

        str.push({ type: 5, value: ')', show: ')', pre: 0 })
        //        console.log(str);
        return new Mexp(str)
      }
      module.exports = Mexp
      /***/ },

    /***/ '8378':
    /***/ function (module, exports) {
      var core = module.exports = { version: '2.5.7' }
      if (typeof __e === 'number') __e = core // eslint-disable-line no-undef
      /***/ },

    /***/ '86cc':
    /***/ function (module, exports, __webpack_require__) {
      var anObject = __webpack_require__('cb7c')
      var IE8_DOM_DEFINE = __webpack_require__('c69a')
      var toPrimitive = __webpack_require__('6a99')
      var dP = Object.defineProperty

      exports.f = __webpack_require__('9e1e') ? Object.defineProperty : function defineProperty (O, P, Attributes) {
        anObject(O)
        P = toPrimitive(P, true)
        anObject(Attributes)
        if (IE8_DOM_DEFINE) {
          try {
            return dP(O, P, Attributes)
          } catch (e) { /* empty */ }
        }
        if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!')
        if ('value' in Attributes) O[P] = Attributes.value
        return O
      }
      /***/ },

    /***/ '8b97':
    /***/ function (module, exports, __webpack_require__) {
      // Works with __proto__ only. Old v8 can't work with null proto objects.
      /* eslint-disable no-proto */
      var isObject = __webpack_require__('d3f4')
      var anObject = __webpack_require__('cb7c')
      var check = function (O, proto) {
        anObject(O)
        if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!")
      }
      module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
          (function (test, buggy, set) {
            try {
              set = __webpack_require__('9b43')(Function.call, __webpack_require__('11e9').f(Object.prototype, '__proto__').set, 2)
              set(test, [])
              buggy = !(test instanceof Array)
            } catch (e) { buggy = true }
            return function setPrototypeOf (O, proto) {
              check(O, proto)
              if (buggy) O.__proto__ = proto
              else set(O, proto)
              return O
            }
          }({}, false)) : undefined),
        check: check
      }
      /***/ },

    /***/ '9093':
    /***/ function (module, exports, __webpack_require__) {
      // 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
      var $keys = __webpack_require__('ce10')
      var hiddenKeys = __webpack_require__('e11e').concat('length', 'prototype')

      exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames (O) {
        return $keys(O, hiddenKeys)
      }
      /***/ },

    /***/ '9b43':
    /***/ function (module, exports, __webpack_require__) {
      // optional / simple context binding
      var aFunction = __webpack_require__('d8e8')
      module.exports = function (fn, that, length) {
        aFunction(fn)
        if (that === undefined) return fn
        switch (length) {
          case 1: return function (a) {
            return fn.call(that, a)
          }
          case 2: return function (a, b) {
            return fn.call(that, a, b)
          }
          case 3: return function (a, b, c) {
            return fn.call(that, a, b, c)
          }
        }
        return function (/* ...args */) {
          return fn.apply(that, arguments)
        }
      }
      /***/ },

    /***/ '9def':
    /***/ function (module, exports, __webpack_require__) {
      // 7.1.15 ToLength
      var toInteger = __webpack_require__('4588')
      var min = Math.min
      module.exports = function (it) {
        return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0 // pow(2, 53) - 1 == 9007199254740991
      }
      /***/ },

    /***/ '9e1e':
    /***/ function (module, exports, __webpack_require__) {
      // Thank's IE8 for his funny defineProperty
      module.exports = !__webpack_require__('79e5')(function () {
        return Object.defineProperty({}, 'a', { get: function () { return 7 } }).a != 7
      })
      /***/ },

    /***/ '9f8f':
    /***/ function (module, exports, __webpack_require__) {
      var Mexp = __webpack_require__('64f6')
      Mexp.prototype.formulaEval = function () {
        'use strict'
        var stack = [], pop1, pop2, pop3
        var disp = []
        var temp = ''
        var arr = this.value
        for (var i = 0; i < arr.length; i++) {
          if (arr[i].type === 1 || arr[i].type === 3) {
            disp.push({ value: arr[i].type === 3 ? arr[i].show : arr[i].value, type: 1 })
          } else if (arr[i].type === 13) {
            disp.push({ value: arr[i].show, type: 1 })
          } else if (arr[i].type === 0) {
            disp[disp.length - 1] = { value: arr[i].show + (arr[i].show != '-' ? '(' : '') + disp[disp.length - 1].value + (arr[i].show != '-' ? ')' : ''), type: 0 }
          } else if (arr[i].type === 7) {
            disp[disp.length - 1] = { value: (disp[disp.length - 1].type != 1 ? '(' : '') + disp[disp.length - 1].value + (disp[disp.length - 1].type != 1 ? ')' : '') + arr[i].show, type: 7 }
          } else if (arr[i].type === 10) {
            pop1 = disp.pop()
            pop2 = disp.pop()
            if (arr[i].show === 'P' || arr[i].show === 'C')disp.push({ value: '<sup>' + pop2.value + '</sup>' + arr[i].show + '<sub>' + pop1.value + '</sub>', type: 10 })
            else disp.push({ value: (pop2.type != 1 ? '(' : '') + pop2.value + (pop2.type != 1 ? ')' : '') + '<sup>' + pop1.value + '</sup>', type: 1 })
          } else if (arr[i].type === 2 || arr[i].type === 9) {
            pop1 = disp.pop()
            pop2 = disp.pop()
            disp.push({ value: (pop2.type != 1 ? '(' : '') + pop2.value + (pop2.type != 1 ? ')' : '') + arr[i].show + (pop1.type != 1 ? '(' : '') + pop1.value + (pop1.type != 1 ? ')' : ''), type: arr[i].type })
          } else if (arr[i].type === 12) {
            pop1 = disp.pop()
            pop2 = disp.pop()
            pop3 = disp.pop()
            disp.push({ value: arr[i].show + '(' + pop3.value + ',' + pop2.value + ',' + pop1.value + ')', type: 12 })
          }
        }
        return disp[0].value
      }
      module.exports = Mexp
      /***/ },

    /***/ 'a481':
    /***/ function (module, exports, __webpack_require__) {
      // @@replace logic
      __webpack_require__('214f')('replace', 2, function (defined, REPLACE, $replace) {
        // 21.1.3.14 String.prototype.replace(searchValue, replaceValue)
        return [function replace (searchValue, replaceValue) {
          'use strict'
          var O = defined(this)
          var fn = searchValue == undefined ? undefined : searchValue[REPLACE]
          return fn !== undefined
            ? fn.call(searchValue, O, replaceValue)
            : $replace.call(String(O), searchValue, replaceValue)
        }, $replace]
      })
      /***/ },

    /***/ 'aa77':
    /***/ function (module, exports, __webpack_require__) {
      var $export = __webpack_require__('5ca1')
      var defined = __webpack_require__('be13')
      var fails = __webpack_require__('79e5')
      var spaces = __webpack_require__('fdef')
      var space = '[' + spaces + ']'
      var non = '\u200b\u0085'
      var ltrim = RegExp('^' + space + space + '*')
      var rtrim = RegExp(space + space + '*$')

      var exporter = function (KEY, exec, ALIAS) {
        var exp = {}
        var FORCE = fails(function () {
          return !!spaces[KEY]() || non[KEY]() != non
        })
        var fn = exp[KEY] = FORCE ? exec(trim) : spaces[KEY]
        if (ALIAS) exp[ALIAS] = fn
        $export($export.P + $export.F * FORCE, 'String', exp)
      }

      // 1 -> String#trimLeft
      // 2 -> String#trimRight
      // 3 -> String#trim
      var trim = exporter.trim = function (string, TYPE) {
        string = String(defined(string))
        if (TYPE & 1) string = string.replace(ltrim, '')
        if (TYPE & 2) string = string.replace(rtrim, '')
        return string
      }

      module.exports = exporter
      /***/ },

    /***/ 'be13':
    /***/ function (module, exports) {
      // 7.2.1 RequireObjectCoercible(argument)
      module.exports = function (it) {
        if (it == undefined) throw TypeError("Can't call method on  " + it)
        return it
      }
      /***/ },

    /***/ 'c366':
    /***/ function (module, exports, __webpack_require__) {
      // false -> Array#indexOf
      // true  -> Array#includes
      var toIObject = __webpack_require__('6821')
      var toLength = __webpack_require__('9def')
      var toAbsoluteIndex = __webpack_require__('77f1')
      module.exports = function (IS_INCLUDES) {
        return function ($this, el, fromIndex) {
          var O = toIObject($this)
          var length = toLength(O.length)
          var index = toAbsoluteIndex(fromIndex, length)
          var value
          // Array#includes uses SameValueZero equality algorithm
          // eslint-disable-next-line no-self-compare
          if (IS_INCLUDES && el != el) {
            while (length > index) {
              value = O[index++]
              // eslint-disable-next-line no-self-compare
              if (value != value) return true
            // Array#indexOf ignores holes, Array#includes - not
            }
          } else {
            for (;length > index; index++) {
              if (IS_INCLUDES || index in O) {
                if (O[index] === el) return IS_INCLUDES || index || 0
              }
            }
          } return !IS_INCLUDES && -1
        }
      }
      /***/ },

    /***/ 'c5f6':
    /***/ function (module, exports, __webpack_require__) {
      'use strict'

      var global = __webpack_require__('7726')
      var has = __webpack_require__('69a8')
      var cof = __webpack_require__('2d95')
      var inheritIfRequired = __webpack_require__('5dbc')
      var toPrimitive = __webpack_require__('6a99')
      var fails = __webpack_require__('79e5')
      var gOPN = __webpack_require__('9093').f
      var gOPD = __webpack_require__('11e9').f
      var dP = __webpack_require__('86cc').f
      var $trim = __webpack_require__('aa77').trim
      var NUMBER = 'Number'
      var $Number = global[NUMBER]
      var Base = $Number
      var proto = $Number.prototype
      // Opera ~12 has broken Object#toString
      var BROKEN_COF = cof(__webpack_require__('2aeb')(proto)) == NUMBER
      var TRIM = 'trim' in String.prototype

      // 7.1.3 ToNumber(argument)
      var toNumber = function (argument) {
        var it = toPrimitive(argument, false)
        if (typeof it === 'string' && it.length > 2) {
          it = TRIM ? it.trim() : $trim(it, 3)
          var first = it.charCodeAt(0)
          var third, radix, maxCode
          if (first === 43 || first === 45) {
            third = it.charCodeAt(2)
            if (third === 88 || third === 120) return NaN // Number('+0x1') should be NaN, old V8 fix
          } else if (first === 48) {
            switch (it.charCodeAt(1)) {
              case 66: case 98: radix = 2; maxCode = 49; break // fast equal /^0b[01]+$/i
              case 79: case 111: radix = 8; maxCode = 55; break // fast equal /^0o[0-7]+$/i
              default: return +it
            }
            for (var digits = it.slice(2), i = 0, l = digits.length, code; i < l; i++) {
              code = digits.charCodeAt(i)
              // parseInt parses a string to a first unavailable symbol
              // but ToNumber should return NaN if a string contains unavailable symbols
              if (code < 48 || code > maxCode) return NaN
            } return parseInt(digits, radix)
          }
        } return +it
      }

      if (!$Number(' 0o1') || !$Number('0b1') || $Number('+0x1')) {
        $Number = function Number (value) {
          var it = arguments.length < 1 ? 0 : value
          var that = this
          return that instanceof $Number &&
      // check on 1..constructor(foo) case
      (BROKEN_COF ? fails(function () { proto.valueOf.call(that) }) : cof(that) != NUMBER)
            ? inheritIfRequired(new Base(toNumber(it)), that, $Number) : toNumber(it)
        }
        for (var keys = __webpack_require__('9e1e') ? gOPN(Base) : (
          // ES3:
            'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,' +
    // ES6 (in case, if modules with ES6 Number statics required before):
    'EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,' +
    'MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger'
          ).split(','), j = 0, key; keys.length > j; j++) {
          if (has(Base, key = keys[j]) && !has($Number, key)) {
            dP($Number, key, gOPD(Base, key))
          }
        }
        $Number.prototype = proto
        proto.constructor = $Number
        __webpack_require__('2aba')(global, NUMBER, $Number)
      }
      /***/ },

    /***/ 'c69a':
    /***/ function (module, exports, __webpack_require__) {
      module.exports = !__webpack_require__('9e1e') && !__webpack_require__('79e5')(function () {
        return Object.defineProperty(__webpack_require__('230e')('div'), 'a', { get: function () { return 7 } }).a != 7
      })
      /***/ },

    /***/ 'c8ba':
    /***/ function (module, exports) {
      var g

      // This works in non-strict mode
      g = (function () {
        return this
      })()

      try {
        // This works if eval is allowed (see CSP)
        g = g || Function('return this')() || (1, eval)('this')
      } catch (e) {
        // This works if the window reference is available
        if (typeof window === 'object') g = window
      }

      // g can still be undefined, but nothing to do about it...
      // We return undefined, instead of nothing here, so it's
      // easier to handle this case. if(!global) { ...}

      module.exports = g
      /***/ },

    /***/ 'ca5a':
    /***/ function (module, exports) {
      var id = 0
      var px = Math.random()
      module.exports = function (key) {
        return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36))
      }
      /***/ },

    /***/ 'cb7c':
    /***/ function (module, exports, __webpack_require__) {
      var isObject = __webpack_require__('d3f4')
      module.exports = function (it) {
        if (!isObject(it)) throw TypeError(it + ' is not an object!')
        return it
      }
      /***/ },

    /***/ 'ce10':
    /***/ function (module, exports, __webpack_require__) {
      var has = __webpack_require__('69a8')
      var toIObject = __webpack_require__('6821')
      var arrayIndexOf = __webpack_require__('c366')(false)
      var IE_PROTO = __webpack_require__('613b')('IE_PROTO')

      module.exports = function (object, names) {
        var O = toIObject(object)
        var i = 0
        var result = []
        var key
        for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key)
        // Don't enum bug & hidden keys
        while (names.length > i) {
          if (has(O, key = names[i++])) {
            ~arrayIndexOf(result, key) || result.push(key)
          }
        }
        return result
      }
      /***/ },

    /***/ 'd3f4':
    /***/ function (module, exports) {
      module.exports = function (it) {
        return typeof it === 'object' ? it !== null : typeof it === 'function'
      }
      /***/ },

    /***/ 'd8e8':
    /***/ function (module, exports) {
      module.exports = function (it) {
        if (typeof it !== 'function') throw TypeError(it + ' is not a function!')
        return it
      }
      /***/ },

    /***/ 'e11e':
    /***/ function (module, exports) {
      // IE 8- don't enum bug keys
      module.exports = (
        'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
      ).split(',')
      /***/ },

    /***/ 'e4a0':
    /***/ function (module, exports, __webpack_require__) {

      // extracted by mini-css-extract-plugin

      /***/ },

    /***/ 'f751':
    /***/ function (module, exports, __webpack_require__) {
      // 19.1.3.1 Object.assign(target, source)
      var $export = __webpack_require__('5ca1')

      $export($export.S + $export.F, 'Object', { assign: __webpack_require__('7333') })
      /***/ },

    /***/ 'fab2':
    /***/ function (module, exports, __webpack_require__) {
      var document = __webpack_require__('7726').document
      module.exports = document && document.documentElement
      /***/ },

    /***/ 'fb15':
    /***/ function (module, __webpack_exports__, __webpack_require__) {
      'use strict'
      __webpack_require__.r(__webpack_exports__)

      // CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
      // This file is imported into lib/wc client bundles.

      if (typeof window !== 'undefined') {
        var i
        if ((i = window.document.currentScript) && (i = i.src.match(/(.+\/)[^/]+\.js$/))) {
    __webpack_require__.p = i[1] // eslint-disable-line
        }
      }

      // Indicate to webpack that this file can be concatenated
      /* harmony default export */ var setPublicPath = (null)

      // CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules//.cache//vue-loader","cacheIdentifier":"545da000-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/MovingImage.vue?vue&type=template&id=14848f3e&
      var render = function () { var _vm = this; var _h = _vm.$createElement; var _c = _vm._self._c || _h; return _c('div', { staticClass: 'moving-image', style: (_vm.containerStyle) }, [_c('vue-anime', { ref: 'image', style: (_vm.initStyle), attrs: { 'tag': 'img', 'src': _vm.url, 'playing': _vm.playing, 'duration': _vm.duration, 'easing': _vm.easing, 'loop': true, 'direction': _vm.direction, 'animate': _vm.animate }, on: { 'load': _vm.imageLoaded } })], 1) }
      var staticRenderFns = []

      // CONCATENATED MODULE: ./src/components/MovingImage.vue?vue&type=template&id=14848f3e&

      // EXTERNAL MODULE: ./node_modules/core-js/modules/es6.regexp.replace.js
      var es6_regexp_replace = __webpack_require__('a481')

      // EXTERNAL MODULE: ./node_modules/core-js/modules/es6.object.assign.js
      var es6_object_assign = __webpack_require__('f751')

      // EXTERNAL MODULE: ./node_modules/core-js/modules/es6.number.constructor.js
      var es6_number_constructor = __webpack_require__('c5f6')

      // CONCATENATED MODULE: ./node_modules/vue-anime/src/anime-prop.js
      /* harmony default export */ var anime_prop = ({
        duration: {
          type: [Number, Function],
          default: function () {
            return 1000
          }
        },
        delay: {
          type: [Number, Function],
          default: 0
        },
        offset: {
          type: [Number, String]
        },
        easing: {
          type: [String, Array],
          default: 'easeOutElastic'
        },
        elasticity: {
          type: [Number, Function],
          default: 500
        },
        direction: {
          type: String,
          default: () => 'normal'
        },
        loop: {
          type: [Boolean, Number],
          default: false
        },
        seek: {
          type: Number
        },
        from: {
          type: Object,
          default: function () {
            return {}
          }
        },
        animate: {
          type: Object,
          default: function () {
            return {}
          }
        },
        object: {
          type: Object
        },
        objectProps: {
          type: Object
        },
        tag: {
          type: String,
          default: 'div'
        },
        playing: {
          type: Boolean,
          default: true
        }
      })

      // EXTERNAL MODULE: ./node_modules/animejs/anime.min.js
      var anime_min = __webpack_require__('5a72')
      var anime_min_default = /* #__PURE__ */__webpack_require__.n(anime_min)

      // CONCATENATED MODULE: ./node_modules/vue-anime/src/is.js
      /* global SVGElement:true */
      function stringContains (str, text) {
        return str.indexOf(text) > -1
      }
      const is = {
        arr: a => Array.isArray(a),
        obj: a => stringContains(Object.prototype.toString.call(a), 'Object'),
        pth: a => is.obj(a) && a.hasOwnProperty('totalLength'),
        svg: a => a instanceof SVGElement,
        dom: a => a.nodeType || is.svg(a),
        str: a => typeof a === 'string',
        fnc: a => typeof a === 'function',
        und: a => typeof a === 'undefined',
        hex: a => /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(a),
        rgb: a => /^rgb/.test(a),
        hsl: a => /^hsl/.test(a),
        col: a => (is.hex(a) || is.rgb(a) || is.hsl(a))
      }

      // CONCATENATED MODULE: ./node_modules/vue-anime/src/anime-mixin.js

      const validTransforms = ['translateX', 'translateY', 'translateZ', 'rotate', 'rotateX', 'rotateY', 'rotateZ', 'scale', 'scaleX', 'scaleY', 'scaleZ', 'skewX', 'skewY', 'perspective']

      /* harmony default export */ var anime_mixin = ({
        props: anime_prop,

        data () {
          return {
          }
        },

        computed: {
          hasUpdateListener () {
            return this.$listeners && this.$listeners.update
          }
        },

        mounted () {
          if (is.fnc(this.$parent.addAnime)) {
            this.$parent.addAnime(this)
          } else {
            this.initAnime()
          }
        },

        watch: {
          'playing': function (value) {
            if (value) {
              this.play()
            } else {
              this.pause()
            }
          },
          'seek': function (value) {
            this.anime.seek(value)
          }
        },

        methods: {
          initAnime () {
            this.anime = anime_min_default()(this.getAnimeConfig())
            if (this.playing === true) {
              this.play()
            }
            if (this.hasUpdateListener) {
              this.anime.update = (anim) => {
                this.$emit('update', anim)
              }
            }
            this.anime.begin = (anim) => {
              this.$emit('begin', anim)
            }
            this.anime.complete = (anim) => {
              this.$emit('complete', anim)
            }
            if (this.animate && this.animate.__ob__) {
              this.$watch('animate', () => {
                debugger
                this.reset()
              })
            }
          },

          reset () {
            // pause to remove from anime loop list
            this.anime.pause()
            this.initAnime()
          },

          getAnimeConfig (inherit) {
            const animeConfig = {}
            if (inherit) {
              Object.assign(animeConfig, inherit)
            }
            // prepare animejs options
            Object.assign(animeConfig, this.animate, {
              duration: this.duration,
              delay: this.delay,
              easing: this.easing,
              elasticity: this.elasticity,
              autoplay: false,
              direction: this.direction,
              loop: this.loop
            })
            if (this.offset || this.offset === 0) {
              animeConfig.offset = this.offset
            }
            // object numeric value animates
            if (this.object) {
              Object.assign(animeConfig, this.objectProps)
            }
            animeConfig.targets = this.getTargets()
            this.setFromProperties(animeConfig)
            return animeConfig
          },

          pause () {
            this.anime.pause()
          },

          play () {
            this.anime.play()
          },
          restart () {
            this.anime.restart()
          },
          setFromProperties (animeConfig) {
            const transforms = []
            for (let key in this.from) {
              if (validTransforms.includes(key)) {
                const transformValue = is.str(this.from[key]) ? this.from[key] : `${this.from[key]}${this.getTransformUnit(key)}`
                transforms.push(`${key}(${transformValue})`)
              } else {
                if (is.arr(animeConfig.targets)) {
                  animeConfig.targets.forEach(el => {
                    el.style[key] = this.from[key]
                  })
                } else {
                  animeConfig.targets.style[key] = this.from[key]
                }
              }
            }
            if (transforms.length) {
              const transfromStr = transforms.join(' ')
              if (is.arr(animeConfig.targets)) {
                animeConfig.targets.forEach(el => {
                  el.style.transform = transfromStr
                })
              } else {
                animeConfig.targets.style.transform = transfromStr
              }
            }
          },

          // copy from animejs
          getTransformUnit (propName) {
            if (propName.indexOf('translate') > -1 || propName.indexOf('perspective') > -1) return 'px'
            if (propName.indexOf('rotate') > -1 || propName.indexOf('skew') > -1) return 'deg'
          },

          getTargets () {
            return this.object || this.$el
          }
        }
      })

      // CONCATENATED MODULE: ./node_modules/vue-anime/src/vue-anime.js

      /* harmony default export */ var vue_anime = ({
        name: 'vue-anime',
        mixins: [anime_mixin],

        render (h) {
          const slots = this.$slots.default
          let children = slots
          const { footer } = this.$slots
          if (footer) {
            children = slots ? [...slots, ...footer] : [...footer]
          }
          return h(this.tag, Object.assign({
            class: '_vue-anime',
            on: this.$listeners
          }, this.$attrs), children)
        },

        methods: {

        }
      })

      // CONCATENATED MODULE: ./node_modules/vue-anime/src/vue-anime-group.js

      /* harmony default export */ var vue_anime_group = ({
        name: 'vue-anime-group',
        mixins: [anime_mixin],

        data () {
          return {
            animes: []
          }
        },
        render (h) {
          const slots = this.$slots.default
          let children = slots
          return h(this.tag, Object.assign({
            class: '_vue-anime-group',
            on: this.$listeners
          }, this.$attrs), children)
        },

        methods: {
          getTargets () {
            const targets = []
            for (let anime of this.animes) {
              targets.push(anime.$el)
            }
            return targets
          },

          addAnime (anime) {
            this.animes.push(anime)
          }
        }
      })

      // CONCATENATED MODULE: ./node_modules/vue-anime/src/vue-anime-timeline.js

      /* harmony default export */ var vue_anime_timeline = ({
        name: 'vue-anime-timeline',
        props: Object.assign(anime_prop, {
          timelines: {
            type: Array
          }
        }),

        data () {
          return {
            animeInstance: null,
            animes: []
          }
        },

        computed: {
          hasUpdateListener () {
            return this.$listeners && this.$listeners.update
          }
        },

        render (h) {
          const slots = this.$slots.default
          let children = slots
          return h(this.tag, this.$attrs, children)
        },

        mounted () {
          this.initAnimeTimeLine()
        },

        watch: {
          'playing': function (value) {
            if (value) {
              this.play()
            } else {
              this.pause()
            }
          },
          'seek': function (value) {
            this.animeInstance.seek(value)
          }
        },

        methods: {
          initAnimeTimeLine () {
            this.animeInstance = anime_min_default.a.timeline({
              direction: this.direction,
              loop: this.loop,
              delay: this.delay, // adding delay for the case of group time line
              autoplay: false
            })

            if (this.timelines) {
              // time frame for one or group
              for (let timeline of this.timelines) {
                timeline.targets = this.getTargets()
                this.animeInstance.add(timeline)
              }
            } else {
              // add each time line with different target
              for (let i = 0; i < this.animes.length; i++) {
                this.animeInstance.add(this.animes[i].getAnimeConfig(this.$props))
              }
            }
            if (this.hasUpdateListener) {
              this.animeInstance.update = (anim) => {
                this.$emit('update', anim)
              }
            }
            this.animeInstance.begin = (anim) => {
              this.$emit('begin', anim)
            }
            this.animeInstance.complete = (anim) => {
              this.$emit('complete', anim)
            }

            if (this.playing) {
              this.animeInstance.play()
            }
          },

          getTargets () {
            const targets = []
            for (let anime of this.animes) {
              targets.push(anime.$el)
            }
            return targets
          },

          play () {
            this.animeInstance.play()
          },
          pause () {
            this.animeInstance.pause()
          },
          restart () {
            this.animeInstance.restart()
          },

          addAnime (anime) {
            this.animes.push(anime)
          }
        }
      })

      // CONCATENATED MODULE: ./node_modules/vue-anime/src/index.js

      // EXTERNAL MODULE: ./node_modules/math-expression-evaluator/src/formula_evaluator.js
      var formula_evaluator = __webpack_require__('9f8f')
      var formula_evaluator_default = /* #__PURE__ */__webpack_require__.n(formula_evaluator)

      // CONCATENATED MODULE: ./src/components/movings.js
      /* harmony default export */ var movings = ({
        landscape: {
          from: {},
          to: {
            translateX: function translateX (size) {
              return -(size.actualImage.width - size.container.width)
            }
          }
        },
        portrait: {
          from: {},
          to: {
            translateY: function translateY (size) {
              return -(size.actualImage.height - size.container.height)
            }
          }
        },
        bottomRight: {
          from: {},
          to: {
            translateY: function translateY (size) {
              return -(size.actualImage.height - size.container.height)
            },
            translateX: function translateX (size) {
              return -(size.actualImage.width - size.container.width)
            }
          }
        },
        zoom: {
          from: {},
          to: {
            scale: '1.2'
          }
        }
      })
      // CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/MovingImage.vue?vue&type=script&lang=js&

      //
      //
      //
      //
      //
      //
      //
      //
      //

      /* harmony default export */ var MovingImagevue_type_script_lang_js_ = ({
        name: 'MovingImage',
        components: {
          VueAnime: vue_anime
        },
        props: {
          url: {
            type: String
          },
          sizing: {
            type: [Object],
            default: function _default () {
              return {}
            }
          },
          moving: {
            type: String
          },
          delay: {
            type: Number,
            default: 0
          },
          duration: {
            type: Number,
            default: 4000
          },
          easing: {
            type: String,
            default: 'linear'
          },
          direction: {
            type: String,
            default: 'alternate'
          }
        },
        data: function data () {
          return {
            scaleDirection: '',
            //
            playing: false,
            container: {
              width: 100,
              height: 100
            },
            initStyle: {
              width: 'auto',
              height: 'auto',
              transform: '',
              opacity: ''
            },
            animate: {},
            actualImage: {
              width: 0,
              height: 0
            }
          }
        },
        computed: {
          imageStyle: function imageStyle () {
            var style = Object.assign({}, this.initStyle)
            console.log('style', style)
            return style
          },
          containerStyle: function containerStyle () {
            return {
              overflow: 'hidden',
              width: this.container.width + 'px',
              height: this.container.height + 'px'
            }
          }
        },
        mounted: function mounted () {},
        methods: {
          imageLoaded: function imageLoaded () {
            this.zoomImage()
          },
          zoomImage: function zoomImage () {
            var _this = this

            // set the image container
            this.container.width = this.$el.parentElement.offsetWidth
            this.container.height = this.$el.parentElement.offsetHeight // re-cal image size

            var isSet = false

            if (this.isWidthSet()) {
              isSet = true
              this.scaleDirection = 'height'
              this.initStyle.width = formula_evaluator_default.a.eval(this.sizing.width.replace(/width/g, this.container.width).replace(/height/g, this.container.height)) + 'px'
            }

            if (this.isHeightSet()) {
              isSet = true
              this.scaleDirection = 'width'
              this.initStyle.height = formula_evaluator_default.a.eval(this.sizing.height.replace(/width/g, this.container.width).replace(/height/g, this.container.height)) + 'px'
            }

            if (!isSet) {
              var imageWidth = this.$refs.image.$el.offsetWidth
              var imageHeight = this.$refs.image.$el.offsetHeight
              var testHeight = this.container.width * imageHeight / imageWidth

              if (testHeight < this.container.height) {
                // scale by height
                this.scaleDirection = 'width'
                this.initStyle.height = this.container.height + 'px'
              } else {
                this.scaleDirection = 'height'
                this.initStyle.width = this.container.width + 'px'
              }
            }

            this.$nextTick(function () {
              _this.play()
            })
          },
          isWidthSet: function isWidthSet () {
            return this.sizing.width && this.sizing.width !== 'auto'
          },
          isHeightSet: function isHeightSet () {
            return this.sizing.height && this.sizing.height !== 'auto'
          },
          play: function play () {
            var _this2 = this

            this.actualImage.width = this.$refs.image.$el.offsetWidth
            this.actualImage.height = this.$refs.image.$el.offsetHeight // set the moving-from

            var buildIn = this.getAnimation()

            if (buildIn && buildIn.from) {
              for (var key in buildIn.from) {
                if (buildIn.from[key]) {
                  this.initStyle[key] = this.eval(buildIn.from[key])
                }
              }
            } // set the moving-to (use vue-anime to render)

            this.$nextTick(function () {
              if (buildIn && buildIn.to) {
                for (var _key in buildIn.to) {
                  if (buildIn.to[_key]) {
                    _this2.animate[_key] = _this2.eval(buildIn.to[_key])
                  }
                }
              }

              _this2.playing = true // begin to play

              _this2.$refs.image.reset()
            })
          },
          getAnimation: function getAnimation () {
            var buildIn = null

            if (typeof this.moving === 'string') {
              buildIn = movings[this.moving]
            } else if (typeof this.moving === 'function') {
              buildIn = this.moving()
            } else {
              if (this.scaleDirection === 'width') {
                buildIn = movings['landscape']
              } else {
                buildIn = movings['portrait']
              }
            }

            return buildIn
          },
          eval: function _eval (expr) {
            if (typeof expr === 'string') {
              return expr
            } else if (typeof expr === 'function') {
              return expr(this.$data)
            }
          }
        }
      })
      // CONCATENATED MODULE: ./src/components/MovingImage.vue?vue&type=script&lang=js&
      /* harmony default export */ var components_MovingImagevue_type_script_lang_js_ = (MovingImagevue_type_script_lang_js_)
      // EXTERNAL MODULE: ./src/components/MovingImage.vue?vue&type=style&index=0&lang=css&
      var MovingImagevue_type_style_index_0_lang_css_ = __webpack_require__('41ff')

      // CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
      /* globals __VUE_SSR_CONTEXT__ */

      // IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
      // This module is a runtime utility for cleaner component module output and will
      // be included in the final webpack user bundle.

      function normalizeComponent (
        scriptExports,
        render,
        staticRenderFns,
        functionalTemplate,
        injectStyles,
        scopeId,
        moduleIdentifier, /* server only */
        shadowMode /* vue-cli only */
      ) {
        // Vue.extend constructor export interop
        var options = typeof scriptExports === 'function'
          ? scriptExports.options
          : scriptExports

        // render functions
        if (render) {
          options.render = render
          options.staticRenderFns = staticRenderFns
          options._compiled = true
        }

        // functional template
        if (functionalTemplate) {
          options.functional = true
        }

        // scopedId
        if (scopeId) {
          options._scopeId = 'data-v-' + scopeId
        }

        var hook
        if (moduleIdentifier) { // server build
          hook = function (context) {
            // 2.3 injection
            context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
            // 2.2 with runInNewContext: true
            if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
              context = __VUE_SSR_CONTEXT__
            }
            // inject component styles
            if (injectStyles) {
              injectStyles.call(this, context)
            }
            // register component module identifier for async chunk inferrence
            if (context && context._registeredComponents) {
              context._registeredComponents.add(moduleIdentifier)
            }
          }
          // used by ssr in case component is cached and beforeCreate
          // never gets called
          options._ssrRegister = hook
        } else if (injectStyles) {
          hook = shadowMode
            ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
            : injectStyles
        }

        if (hook) {
          if (options.functional) {
            // for template-only hot-reload because in that case the render fn doesn't
            // go through the normalizer
            options._injectStyles = hook
            // register for functioal component in vue file
            var originalRender = options.render
            options.render = function renderWithStyleInjection (h, context) {
              hook.call(context)
              return originalRender(h, context)
            }
          } else {
            // inject component registration as beforeCreate hook
            var existing = options.beforeCreate
            options.beforeCreate = existing
              ? [].concat(existing, hook)
              : [hook]
          }
        }

        return {
          exports: scriptExports,
          options: options
        }
      }

      // CONCATENATED MODULE: ./src/components/MovingImage.vue

      /* normalize component */

      var component = normalizeComponent(
        components_MovingImagevue_type_script_lang_js_,
        render,
        staticRenderFns,
        false,
        null,
        null,
        null

      )

      component.options.__file = 'MovingImage.vue'
      /* harmony default export */ var MovingImage = (component.exports)
      // CONCATENATED MODULE: ./src/index.js

      /* harmony default export */ var src = (MovingImage)

      // CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js
      /* concated harmony reexport MovingImage */__webpack_require__.d(__webpack_exports__, 'MovingImage', function () { return MovingImage })

      /* harmony default export */ var entry_lib = __webpack_exports__['default'] = (src)
      /***/ },

    /***/ 'fdef':
    /***/ function (module, exports) {
      module.exports = '\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003' +
  '\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF'
      /***/ }

    /******/ })
})
// # sourceMappingURL=MovingImage.umd.js.map
