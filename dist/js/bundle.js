/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/bundle.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/aos/dist/aos.js":
/*!**************************************!*\
  !*** ./node_modules/aos/dist/aos.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function (e, t) {
   true ? module.exports = t() : undefined;
}(this, function () {
  return function (e) {
    function t(o) {
      if (n[o]) return n[o].exports;
      var i = n[o] = {
        exports: {},
        id: o,
        loaded: !1
      };
      return e[o].call(i.exports, i, i.exports, t), i.loaded = !0, i.exports;
    }

    var n = {};
    return t.m = e, t.c = n, t.p = "dist/", t(0);
  }([function (e, t, n) {
    "use strict";

    function o(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    var i = Object.assign || function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];

        for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
      }

      return e;
    },
        r = n(1),
        a = (o(r), n(6)),
        u = o(a),
        c = n(7),
        s = o(c),
        f = n(8),
        d = o(f),
        l = n(9),
        p = o(l),
        m = n(10),
        b = o(m),
        v = n(11),
        y = o(v),
        g = n(14),
        h = o(g),
        w = [],
        k = !1,
        x = {
      offset: 120,
      delay: 0,
      easing: "ease",
      duration: 400,
      disable: !1,
      once: !1,
      startEvent: "DOMContentLoaded",
      throttleDelay: 99,
      debounceDelay: 50,
      disableMutationObserver: !1
    },
        j = function () {
      var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
      if (e && (k = !0), k) return w = (0, y.default)(w, x), (0, b.default)(w, x.once), w;
    },
        O = function () {
      w = (0, h.default)(), j();
    },
        M = function () {
      w.forEach(function (e, t) {
        e.node.removeAttribute("data-aos"), e.node.removeAttribute("data-aos-easing"), e.node.removeAttribute("data-aos-duration"), e.node.removeAttribute("data-aos-delay");
      });
    },
        S = function (e) {
      return e === !0 || "mobile" === e && p.default.mobile() || "phone" === e && p.default.phone() || "tablet" === e && p.default.tablet() || "function" == typeof e && e() === !0;
    },
        _ = function (e) {
      x = i(x, e), w = (0, h.default)();
      var t = document.all && !window.atob;
      return S(x.disable) || t ? M() : (x.disableMutationObserver || d.default.isSupported() || (console.info('\n      aos: MutationObserver is not supported on this browser,\n      code mutations observing has been disabled.\n      You may have to call "refreshHard()" by yourself.\n    '), x.disableMutationObserver = !0), document.querySelector("body").setAttribute("data-aos-easing", x.easing), document.querySelector("body").setAttribute("data-aos-duration", x.duration), document.querySelector("body").setAttribute("data-aos-delay", x.delay), "DOMContentLoaded" === x.startEvent && ["complete", "interactive"].indexOf(document.readyState) > -1 ? j(!0) : "load" === x.startEvent ? window.addEventListener(x.startEvent, function () {
        j(!0);
      }) : document.addEventListener(x.startEvent, function () {
        j(!0);
      }), window.addEventListener("resize", (0, s.default)(j, x.debounceDelay, !0)), window.addEventListener("orientationchange", (0, s.default)(j, x.debounceDelay, !0)), window.addEventListener("scroll", (0, u.default)(function () {
        (0, b.default)(w, x.once);
      }, x.throttleDelay)), x.disableMutationObserver || d.default.ready("[data-aos]", O), w);
    };

    e.exports = {
      init: _,
      refresh: j,
      refreshHard: O
    };
  }, function (e, t) {},,,,, function (e, t) {
    (function (t) {
      "use strict";

      function n(e, t, n) {
        function o(t) {
          var n = b,
              o = v;
          return b = v = void 0, k = t, g = e.apply(o, n);
        }

        function r(e) {
          return k = e, h = setTimeout(f, t), M ? o(e) : g;
        }

        function a(e) {
          var n = e - w,
              o = e - k,
              i = t - n;
          return S ? j(i, y - o) : i;
        }

        function c(e) {
          var n = e - w,
              o = e - k;
          return void 0 === w || n >= t || n < 0 || S && o >= y;
        }

        function f() {
          var e = O();
          return c(e) ? d(e) : void (h = setTimeout(f, a(e)));
        }

        function d(e) {
          return h = void 0, _ && b ? o(e) : (b = v = void 0, g);
        }

        function l() {
          void 0 !== h && clearTimeout(h), k = 0, b = w = v = h = void 0;
        }

        function p() {
          return void 0 === h ? g : d(O());
        }

        function m() {
          var e = O(),
              n = c(e);

          if (b = arguments, v = this, w = e, n) {
            if (void 0 === h) return r(w);
            if (S) return h = setTimeout(f, t), o(w);
          }

          return void 0 === h && (h = setTimeout(f, t)), g;
        }

        var b,
            v,
            y,
            g,
            h,
            w,
            k = 0,
            M = !1,
            S = !1,
            _ = !0;

        if ("function" != typeof e) throw new TypeError(s);
        return t = u(t) || 0, i(n) && (M = !!n.leading, S = "maxWait" in n, y = S ? x(u(n.maxWait) || 0, t) : y, _ = "trailing" in n ? !!n.trailing : _), m.cancel = l, m.flush = p, m;
      }

      function o(e, t, o) {
        var r = !0,
            a = !0;
        if ("function" != typeof e) throw new TypeError(s);
        return i(o) && (r = "leading" in o ? !!o.leading : r, a = "trailing" in o ? !!o.trailing : a), n(e, t, {
          leading: r,
          maxWait: t,
          trailing: a
        });
      }

      function i(e) {
        var t = "undefined" == typeof e ? "undefined" : c(e);
        return !!e && ("object" == t || "function" == t);
      }

      function r(e) {
        return !!e && "object" == ("undefined" == typeof e ? "undefined" : c(e));
      }

      function a(e) {
        return "symbol" == ("undefined" == typeof e ? "undefined" : c(e)) || r(e) && k.call(e) == d;
      }

      function u(e) {
        if ("number" == typeof e) return e;
        if (a(e)) return f;

        if (i(e)) {
          var t = "function" == typeof e.valueOf ? e.valueOf() : e;
          e = i(t) ? t + "" : t;
        }

        if ("string" != typeof e) return 0 === e ? e : +e;
        e = e.replace(l, "");
        var n = m.test(e);
        return n || b.test(e) ? v(e.slice(2), n ? 2 : 8) : p.test(e) ? f : +e;
      }

      var c = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
        return typeof e;
      } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
      },
          s = "Expected a function",
          f = NaN,
          d = "[object Symbol]",
          l = /^\s+|\s+$/g,
          p = /^[-+]0x[0-9a-f]+$/i,
          m = /^0b[01]+$/i,
          b = /^0o[0-7]+$/i,
          v = parseInt,
          y = "object" == ("undefined" == typeof t ? "undefined" : c(t)) && t && t.Object === Object && t,
          g = "object" == ("undefined" == typeof self ? "undefined" : c(self)) && self && self.Object === Object && self,
          h = y || g || Function("return this")(),
          w = Object.prototype,
          k = w.toString,
          x = Math.max,
          j = Math.min,
          O = function () {
        return h.Date.now();
      };

      e.exports = o;
    }).call(t, function () {
      return this;
    }());
  }, function (e, t) {
    (function (t) {
      "use strict";

      function n(e, t, n) {
        function i(t) {
          var n = b,
              o = v;
          return b = v = void 0, O = t, g = e.apply(o, n);
        }

        function r(e) {
          return O = e, h = setTimeout(f, t), M ? i(e) : g;
        }

        function u(e) {
          var n = e - w,
              o = e - O,
              i = t - n;
          return S ? x(i, y - o) : i;
        }

        function s(e) {
          var n = e - w,
              o = e - O;
          return void 0 === w || n >= t || n < 0 || S && o >= y;
        }

        function f() {
          var e = j();
          return s(e) ? d(e) : void (h = setTimeout(f, u(e)));
        }

        function d(e) {
          return h = void 0, _ && b ? i(e) : (b = v = void 0, g);
        }

        function l() {
          void 0 !== h && clearTimeout(h), O = 0, b = w = v = h = void 0;
        }

        function p() {
          return void 0 === h ? g : d(j());
        }

        function m() {
          var e = j(),
              n = s(e);

          if (b = arguments, v = this, w = e, n) {
            if (void 0 === h) return r(w);
            if (S) return h = setTimeout(f, t), i(w);
          }

          return void 0 === h && (h = setTimeout(f, t)), g;
        }

        var b,
            v,
            y,
            g,
            h,
            w,
            O = 0,
            M = !1,
            S = !1,
            _ = !0;

        if ("function" != typeof e) throw new TypeError(c);
        return t = a(t) || 0, o(n) && (M = !!n.leading, S = "maxWait" in n, y = S ? k(a(n.maxWait) || 0, t) : y, _ = "trailing" in n ? !!n.trailing : _), m.cancel = l, m.flush = p, m;
      }

      function o(e) {
        var t = "undefined" == typeof e ? "undefined" : u(e);
        return !!e && ("object" == t || "function" == t);
      }

      function i(e) {
        return !!e && "object" == ("undefined" == typeof e ? "undefined" : u(e));
      }

      function r(e) {
        return "symbol" == ("undefined" == typeof e ? "undefined" : u(e)) || i(e) && w.call(e) == f;
      }

      function a(e) {
        if ("number" == typeof e) return e;
        if (r(e)) return s;

        if (o(e)) {
          var t = "function" == typeof e.valueOf ? e.valueOf() : e;
          e = o(t) ? t + "" : t;
        }

        if ("string" != typeof e) return 0 === e ? e : +e;
        e = e.replace(d, "");
        var n = p.test(e);
        return n || m.test(e) ? b(e.slice(2), n ? 2 : 8) : l.test(e) ? s : +e;
      }

      var u = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
        return typeof e;
      } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
      },
          c = "Expected a function",
          s = NaN,
          f = "[object Symbol]",
          d = /^\s+|\s+$/g,
          l = /^[-+]0x[0-9a-f]+$/i,
          p = /^0b[01]+$/i,
          m = /^0o[0-7]+$/i,
          b = parseInt,
          v = "object" == ("undefined" == typeof t ? "undefined" : u(t)) && t && t.Object === Object && t,
          y = "object" == ("undefined" == typeof self ? "undefined" : u(self)) && self && self.Object === Object && self,
          g = v || y || Function("return this")(),
          h = Object.prototype,
          w = h.toString,
          k = Math.max,
          x = Math.min,
          j = function () {
        return g.Date.now();
      };

      e.exports = n;
    }).call(t, function () {
      return this;
    }());
  }, function (e, t) {
    "use strict";

    function n(e) {
      var t = void 0,
          o = void 0,
          i = void 0;

      for (t = 0; t < e.length; t += 1) {
        if (o = e[t], o.dataset && o.dataset.aos) return !0;
        if (i = o.children && n(o.children)) return !0;
      }

      return !1;
    }

    function o() {
      return window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
    }

    function i() {
      return !!o();
    }

    function r(e, t) {
      var n = window.document,
          i = o(),
          r = new i(a);
      u = t, r.observe(n.documentElement, {
        childList: !0,
        subtree: !0,
        removedNodes: !0
      });
    }

    function a(e) {
      e && e.forEach(function (e) {
        var t = Array.prototype.slice.call(e.addedNodes),
            o = Array.prototype.slice.call(e.removedNodes),
            i = t.concat(o);
        if (n(i)) return u();
      });
    }

    Object.defineProperty(t, "__esModule", {
      value: !0
    });

    var u = function () {};

    t.default = {
      isSupported: i,
      ready: r
    };
  }, function (e, t) {
    "use strict";

    function n(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }

    function o() {
      return navigator.userAgent || navigator.vendor || window.opera || "";
    }

    Object.defineProperty(t, "__esModule", {
      value: !0
    });

    var i = function () {
      function e(e, t) {
        for (var n = 0; n < t.length; n++) {
          var o = t[n];
          o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o);
        }
      }

      return function (t, n, o) {
        return n && e(t.prototype, n), o && e(t, o), t;
      };
    }(),
        r = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,
        a = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
        u = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,
        c = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
        s = function () {
      function e() {
        n(this, e);
      }

      return i(e, [{
        key: "phone",
        value: function () {
          var e = o();
          return !(!r.test(e) && !a.test(e.substr(0, 4)));
        }
      }, {
        key: "mobile",
        value: function () {
          var e = o();
          return !(!u.test(e) && !c.test(e.substr(0, 4)));
        }
      }, {
        key: "tablet",
        value: function () {
          return this.mobile() && !this.phone();
        }
      }]), e;
    }();

    t.default = new s();
  }, function (e, t) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    });

    var n = function (e, t, n) {
      var o = e.node.getAttribute("data-aos-once");
      t > e.position ? e.node.classList.add("aos-animate") : "undefined" != typeof o && ("false" === o || !n && "true" !== o) && e.node.classList.remove("aos-animate");
    },
        o = function (e, t) {
      var o = window.pageYOffset,
          i = window.innerHeight;
      e.forEach(function (e, r) {
        n(e, i + o, t);
      });
    };

    t.default = o;
  }, function (e, t, n) {
    "use strict";

    function o(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    Object.defineProperty(t, "__esModule", {
      value: !0
    });

    var i = n(12),
        r = o(i),
        a = function (e, t) {
      return e.forEach(function (e, n) {
        e.node.classList.add("aos-init"), e.position = (0, r.default)(e.node, t.offset);
      }), e;
    };

    t.default = a;
  }, function (e, t, n) {
    "use strict";

    function o(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    Object.defineProperty(t, "__esModule", {
      value: !0
    });

    var i = n(13),
        r = o(i),
        a = function (e, t) {
      var n = 0,
          o = 0,
          i = window.innerHeight,
          a = {
        offset: e.getAttribute("data-aos-offset"),
        anchor: e.getAttribute("data-aos-anchor"),
        anchorPlacement: e.getAttribute("data-aos-anchor-placement")
      };

      switch (a.offset && !isNaN(a.offset) && (o = parseInt(a.offset)), a.anchor && document.querySelectorAll(a.anchor) && (e = document.querySelectorAll(a.anchor)[0]), n = (0, r.default)(e).top, a.anchorPlacement) {
        case "top-bottom":
          break;

        case "center-bottom":
          n += e.offsetHeight / 2;
          break;

        case "bottom-bottom":
          n += e.offsetHeight;
          break;

        case "top-center":
          n += i / 2;
          break;

        case "bottom-center":
          n += i / 2 + e.offsetHeight;
          break;

        case "center-center":
          n += i / 2 + e.offsetHeight / 2;
          break;

        case "top-top":
          n += i;
          break;

        case "bottom-top":
          n += e.offsetHeight + i;
          break;

        case "center-top":
          n += e.offsetHeight / 2 + i;
      }

      return a.anchorPlacement || a.offset || isNaN(t) || (o = t), n + o;
    };

    t.default = a;
  }, function (e, t) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    });

    var n = function (e) {
      for (var t = 0, n = 0; e && !isNaN(e.offsetLeft) && !isNaN(e.offsetTop);) t += e.offsetLeft - ("BODY" != e.tagName ? e.scrollLeft : 0), n += e.offsetTop - ("BODY" != e.tagName ? e.scrollTop : 0), e = e.offsetParent;

      return {
        top: n,
        left: t
      };
    };

    t.default = n;
  }, function (e, t) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    });

    var n = function (e) {
      return e = e || document.querySelectorAll("[data-aos]"), Array.prototype.map.call(e, function (e) {
        return {
          node: e
        };
      });
    };

    t.default = n;
  }]);
});

/***/ }),

/***/ "./src/js/bundle.js":
/*!**************************!*\
  !*** ./src/js/bundle.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_hello_world__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/hello-world */ "./src/js/components/hello-world.js");
/* harmony import */ var _components_hello_world__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_components_hello_world__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_aosImport__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/aosImport */ "./src/js/components/aosImport.js");
// Use this file to import all needed JS files into one.
 // import './components/mobileMenu';
// Import AOS for entry animations if you so desire.

 // import jQuery and add $ as global variable if needed
// import './components/jQueryLoad';

/***/ }),

/***/ "./src/js/components/aosImport.js":
/*!****************************************!*\
  !*** ./src/js/components/aosImport.js ***!
  \****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aos */ "./node_modules/aos/dist/aos.js");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_0__);
// import AOS
 // initialize AOS and add any config if needed. I've set AOS to animate elements only once, when scrolling down.

aos__WEBPACK_IMPORTED_MODULE_0___default.a.init({
  once: true
});

/***/ }),

/***/ "./src/js/components/hello-world.js":
/*!******************************************!*\
  !*** ./src/js/components/hello-world.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// this serves as an example to test importing and bundling a file
console.log('hello world!');

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Fvcy9kaXN0L2Fvcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvYnVuZGxlLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb21wb25lbnRzL2Fvc0ltcG9ydC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9oZWxsby13b3JsZC5qcyJdLCJuYW1lcyI6WyJlIiwidCIsIm1vZHVsZSIsImV4cG9ydHMiLCJvIiwibiIsImkiLCJpZCIsImxvYWRlZCIsImNhbGwiLCJtIiwiYyIsInAiLCJfX2VzTW9kdWxlIiwiZGVmYXVsdCIsIk9iamVjdCIsImFzc2lnbiIsImFyZ3VtZW50cyIsImxlbmd0aCIsInByb3RvdHlwZSIsImhhc093blByb3BlcnR5IiwiciIsImEiLCJ1IiwicyIsImYiLCJkIiwibCIsImIiLCJ2IiwieSIsImciLCJoIiwidyIsImsiLCJ4Iiwib2Zmc2V0IiwiZGVsYXkiLCJlYXNpbmciLCJkdXJhdGlvbiIsImRpc2FibGUiLCJvbmNlIiwic3RhcnRFdmVudCIsInRocm90dGxlRGVsYXkiLCJkZWJvdW5jZURlbGF5IiwiZGlzYWJsZU11dGF0aW9uT2JzZXJ2ZXIiLCJqIiwiTyIsIk0iLCJmb3JFYWNoIiwibm9kZSIsInJlbW92ZUF0dHJpYnV0ZSIsIlMiLCJtb2JpbGUiLCJwaG9uZSIsInRhYmxldCIsIl8iLCJkb2N1bWVudCIsImFsbCIsIndpbmRvdyIsImF0b2IiLCJpc1N1cHBvcnRlZCIsImNvbnNvbGUiLCJpbmZvIiwicXVlcnlTZWxlY3RvciIsInNldEF0dHJpYnV0ZSIsImluZGV4T2YiLCJyZWFkeVN0YXRlIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlYWR5IiwiaW5pdCIsInJlZnJlc2giLCJyZWZyZXNoSGFyZCIsImFwcGx5Iiwic2V0VGltZW91dCIsImNsZWFyVGltZW91dCIsIlR5cGVFcnJvciIsImxlYWRpbmciLCJtYXhXYWl0IiwidHJhaWxpbmciLCJjYW5jZWwiLCJmbHVzaCIsInZhbHVlT2YiLCJyZXBsYWNlIiwidGVzdCIsInNsaWNlIiwiU3ltYm9sIiwiaXRlcmF0b3IiLCJjb25zdHJ1Y3RvciIsIk5hTiIsInBhcnNlSW50Iiwic2VsZiIsIkZ1bmN0aW9uIiwidG9TdHJpbmciLCJNYXRoIiwibWF4IiwibWluIiwiRGF0ZSIsIm5vdyIsImRhdGFzZXQiLCJhb3MiLCJjaGlsZHJlbiIsIk11dGF0aW9uT2JzZXJ2ZXIiLCJXZWJLaXRNdXRhdGlvbk9ic2VydmVyIiwiTW96TXV0YXRpb25PYnNlcnZlciIsIm9ic2VydmUiLCJkb2N1bWVudEVsZW1lbnQiLCJjaGlsZExpc3QiLCJzdWJ0cmVlIiwicmVtb3ZlZE5vZGVzIiwiQXJyYXkiLCJhZGRlZE5vZGVzIiwiY29uY2F0IiwiZGVmaW5lUHJvcGVydHkiLCJ2YWx1ZSIsIm5hdmlnYXRvciIsInVzZXJBZ2VudCIsInZlbmRvciIsIm9wZXJhIiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIiwia2V5Iiwic3Vic3RyIiwiZ2V0QXR0cmlidXRlIiwicG9zaXRpb24iLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmUiLCJwYWdlWU9mZnNldCIsImlubmVySGVpZ2h0IiwiYW5jaG9yIiwiYW5jaG9yUGxhY2VtZW50IiwiaXNOYU4iLCJxdWVyeVNlbGVjdG9yQWxsIiwidG9wIiwib2Zmc2V0SGVpZ2h0Iiwib2Zmc2V0TGVmdCIsIm9mZnNldFRvcCIsInRhZ05hbWUiLCJzY3JvbGxMZWZ0Iiwic2Nyb2xsVG9wIiwib2Zmc2V0UGFyZW50IiwibGVmdCIsIm1hcCIsIkFPUyIsImxvZyJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7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LENBQVQsRUFBVztBQUFDLGFBQU9BLENBQUMsR0FBQ0EsQ0FBQyxJQUFFeUQsUUFBUSxDQUFDNkUsZ0JBQVQsQ0FBMEIsWUFBMUIsQ0FBTCxFQUE2Q3hCLEtBQUssQ0FBQzNGLFNBQU4sQ0FBZ0I2SCxHQUFoQixDQUFvQnZJLElBQXBCLENBQXlCVCxDQUF6QixFQUEyQixVQUFTQSxDQUFULEVBQVc7QUFBQyxlQUFNO0FBQUNrRCxjQUFJLEVBQUNsRDtBQUFOLFNBQU47QUFBZSxPQUF0RCxDQUFwRDtBQUE0RyxLQUE5SDs7QUFBK0hDLEtBQUMsQ0FBQ2EsT0FBRixHQUFVVCxDQUFWO0FBQVksR0FBaDhiLENBQTNNLENBQVA7QUFBcXBjLENBQS8xYyxDQUFELEM7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Q0FJQTtBQUVBOztDQUdBO0FBQ0Esb0M7Ozs7Ozs7Ozs7OztBQ1ZBO0FBQUE7QUFBQTtBQUFBO0NBR0E7O0FBQ0E0SSwwQ0FBRyxDQUFDM0UsSUFBSixDQUFTO0FBQ1A3QixNQUFJLEVBQUU7QUFEQyxDQUFULEU7Ozs7Ozs7Ozs7O0FDSkE7QUFDQXFCLE9BQU8sQ0FBQ29GLEdBQVIsQ0FBWSxjQUFaLEUiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvanMvYnVuZGxlLmpzXCIpO1xuIiwiIWZ1bmN0aW9uKGUsdCl7XCJvYmplY3RcIj09dHlwZW9mIGV4cG9ydHMmJlwib2JqZWN0XCI9PXR5cGVvZiBtb2R1bGU/bW9kdWxlLmV4cG9ydHM9dCgpOlwiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZD9kZWZpbmUoW10sdCk6XCJvYmplY3RcIj09dHlwZW9mIGV4cG9ydHM/ZXhwb3J0cy5BT1M9dCgpOmUuQU9TPXQoKX0odGhpcyxmdW5jdGlvbigpe3JldHVybiBmdW5jdGlvbihlKXtmdW5jdGlvbiB0KG8pe2lmKG5bb10pcmV0dXJuIG5bb10uZXhwb3J0czt2YXIgaT1uW29dPXtleHBvcnRzOnt9LGlkOm8sbG9hZGVkOiExfTtyZXR1cm4gZVtvXS5jYWxsKGkuZXhwb3J0cyxpLGkuZXhwb3J0cyx0KSxpLmxvYWRlZD0hMCxpLmV4cG9ydHN9dmFyIG49e307cmV0dXJuIHQubT1lLHQuYz1uLHQucD1cImRpc3QvXCIsdCgwKX0oW2Z1bmN0aW9uKGUsdCxuKXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiBvKGUpe3JldHVybiBlJiZlLl9fZXNNb2R1bGU/ZTp7ZGVmYXVsdDplfX12YXIgaT1PYmplY3QuYXNzaWdufHxmdW5jdGlvbihlKXtmb3IodmFyIHQ9MTt0PGFyZ3VtZW50cy5sZW5ndGg7dCsrKXt2YXIgbj1hcmd1bWVudHNbdF07Zm9yKHZhciBvIGluIG4pT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG4sbykmJihlW29dPW5bb10pfXJldHVybiBlfSxyPW4oMSksYT0obyhyKSxuKDYpKSx1PW8oYSksYz1uKDcpLHM9byhjKSxmPW4oOCksZD1vKGYpLGw9big5KSxwPW8obCksbT1uKDEwKSxiPW8obSksdj1uKDExKSx5PW8odiksZz1uKDE0KSxoPW8oZyksdz1bXSxrPSExLHg9e29mZnNldDoxMjAsZGVsYXk6MCxlYXNpbmc6XCJlYXNlXCIsZHVyYXRpb246NDAwLGRpc2FibGU6ITEsb25jZTohMSxzdGFydEV2ZW50OlwiRE9NQ29udGVudExvYWRlZFwiLHRocm90dGxlRGVsYXk6OTksZGVib3VuY2VEZWxheTo1MCxkaXNhYmxlTXV0YXRpb25PYnNlcnZlcjohMX0saj1mdW5jdGlvbigpe3ZhciBlPWFyZ3VtZW50cy5sZW5ndGg+MCYmdm9pZCAwIT09YXJndW1lbnRzWzBdJiZhcmd1bWVudHNbMF07aWYoZSYmKGs9ITApLGspcmV0dXJuIHc9KDAseS5kZWZhdWx0KSh3LHgpLCgwLGIuZGVmYXVsdCkodyx4Lm9uY2UpLHd9LE89ZnVuY3Rpb24oKXt3PSgwLGguZGVmYXVsdCkoKSxqKCl9LE09ZnVuY3Rpb24oKXt3LmZvckVhY2goZnVuY3Rpb24oZSx0KXtlLm5vZGUucmVtb3ZlQXR0cmlidXRlKFwiZGF0YS1hb3NcIiksZS5ub2RlLnJlbW92ZUF0dHJpYnV0ZShcImRhdGEtYW9zLWVhc2luZ1wiKSxlLm5vZGUucmVtb3ZlQXR0cmlidXRlKFwiZGF0YS1hb3MtZHVyYXRpb25cIiksZS5ub2RlLnJlbW92ZUF0dHJpYnV0ZShcImRhdGEtYW9zLWRlbGF5XCIpfSl9LFM9ZnVuY3Rpb24oZSl7cmV0dXJuIGU9PT0hMHx8XCJtb2JpbGVcIj09PWUmJnAuZGVmYXVsdC5tb2JpbGUoKXx8XCJwaG9uZVwiPT09ZSYmcC5kZWZhdWx0LnBob25lKCl8fFwidGFibGV0XCI9PT1lJiZwLmRlZmF1bHQudGFibGV0KCl8fFwiZnVuY3Rpb25cIj09dHlwZW9mIGUmJmUoKT09PSEwfSxfPWZ1bmN0aW9uKGUpe3g9aSh4LGUpLHc9KDAsaC5kZWZhdWx0KSgpO3ZhciB0PWRvY3VtZW50LmFsbCYmIXdpbmRvdy5hdG9iO3JldHVybiBTKHguZGlzYWJsZSl8fHQ/TSgpOih4LmRpc2FibGVNdXRhdGlvbk9ic2VydmVyfHxkLmRlZmF1bHQuaXNTdXBwb3J0ZWQoKXx8KGNvbnNvbGUuaW5mbygnXFxuICAgICAgYW9zOiBNdXRhdGlvbk9ic2VydmVyIGlzIG5vdCBzdXBwb3J0ZWQgb24gdGhpcyBicm93c2VyLFxcbiAgICAgIGNvZGUgbXV0YXRpb25zIG9ic2VydmluZyBoYXMgYmVlbiBkaXNhYmxlZC5cXG4gICAgICBZb3UgbWF5IGhhdmUgdG8gY2FsbCBcInJlZnJlc2hIYXJkKClcIiBieSB5b3Vyc2VsZi5cXG4gICAgJykseC5kaXNhYmxlTXV0YXRpb25PYnNlcnZlcj0hMCksZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIikuc2V0QXR0cmlidXRlKFwiZGF0YS1hb3MtZWFzaW5nXCIseC5lYXNpbmcpLGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpLnNldEF0dHJpYnV0ZShcImRhdGEtYW9zLWR1cmF0aW9uXCIseC5kdXJhdGlvbiksZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIikuc2V0QXR0cmlidXRlKFwiZGF0YS1hb3MtZGVsYXlcIix4LmRlbGF5KSxcIkRPTUNvbnRlbnRMb2FkZWRcIj09PXguc3RhcnRFdmVudCYmW1wiY29tcGxldGVcIixcImludGVyYWN0aXZlXCJdLmluZGV4T2YoZG9jdW1lbnQucmVhZHlTdGF0ZSk+LTE/aighMCk6XCJsb2FkXCI9PT14LnN0YXJ0RXZlbnQ/d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoeC5zdGFydEV2ZW50LGZ1bmN0aW9uKCl7aighMCl9KTpkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKHguc3RhcnRFdmVudCxmdW5jdGlvbigpe2ooITApfSksd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwoMCxzLmRlZmF1bHQpKGoseC5kZWJvdW5jZURlbGF5LCEwKSksd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJvcmllbnRhdGlvbmNoYW5nZVwiLCgwLHMuZGVmYXVsdCkoaix4LmRlYm91bmNlRGVsYXksITApKSx3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCgwLHUuZGVmYXVsdCkoZnVuY3Rpb24oKXsoMCxiLmRlZmF1bHQpKHcseC5vbmNlKX0seC50aHJvdHRsZURlbGF5KSkseC5kaXNhYmxlTXV0YXRpb25PYnNlcnZlcnx8ZC5kZWZhdWx0LnJlYWR5KFwiW2RhdGEtYW9zXVwiLE8pLHcpfTtlLmV4cG9ydHM9e2luaXQ6XyxyZWZyZXNoOmoscmVmcmVzaEhhcmQ6T319LGZ1bmN0aW9uKGUsdCl7fSwsLCwsZnVuY3Rpb24oZSx0KXsoZnVuY3Rpb24odCl7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gbihlLHQsbil7ZnVuY3Rpb24gbyh0KXt2YXIgbj1iLG89djtyZXR1cm4gYj12PXZvaWQgMCxrPXQsZz1lLmFwcGx5KG8sbil9ZnVuY3Rpb24gcihlKXtyZXR1cm4gaz1lLGg9c2V0VGltZW91dChmLHQpLE0/byhlKTpnfWZ1bmN0aW9uIGEoZSl7dmFyIG49ZS13LG89ZS1rLGk9dC1uO3JldHVybiBTP2ooaSx5LW8pOml9ZnVuY3Rpb24gYyhlKXt2YXIgbj1lLXcsbz1lLWs7cmV0dXJuIHZvaWQgMD09PXd8fG4+PXR8fG48MHx8UyYmbz49eX1mdW5jdGlvbiBmKCl7dmFyIGU9TygpO3JldHVybiBjKGUpP2QoZSk6dm9pZChoPXNldFRpbWVvdXQoZixhKGUpKSl9ZnVuY3Rpb24gZChlKXtyZXR1cm4gaD12b2lkIDAsXyYmYj9vKGUpOihiPXY9dm9pZCAwLGcpfWZ1bmN0aW9uIGwoKXt2b2lkIDAhPT1oJiZjbGVhclRpbWVvdXQoaCksaz0wLGI9dz12PWg9dm9pZCAwfWZ1bmN0aW9uIHAoKXtyZXR1cm4gdm9pZCAwPT09aD9nOmQoTygpKX1mdW5jdGlvbiBtKCl7dmFyIGU9TygpLG49YyhlKTtpZihiPWFyZ3VtZW50cyx2PXRoaXMsdz1lLG4pe2lmKHZvaWQgMD09PWgpcmV0dXJuIHIodyk7aWYoUylyZXR1cm4gaD1zZXRUaW1lb3V0KGYsdCksbyh3KX1yZXR1cm4gdm9pZCAwPT09aCYmKGg9c2V0VGltZW91dChmLHQpKSxnfXZhciBiLHYseSxnLGgsdyxrPTAsTT0hMSxTPSExLF89ITA7aWYoXCJmdW5jdGlvblwiIT10eXBlb2YgZSl0aHJvdyBuZXcgVHlwZUVycm9yKHMpO3JldHVybiB0PXUodCl8fDAsaShuKSYmKE09ISFuLmxlYWRpbmcsUz1cIm1heFdhaXRcImluIG4seT1TP3godShuLm1heFdhaXQpfHwwLHQpOnksXz1cInRyYWlsaW5nXCJpbiBuPyEhbi50cmFpbGluZzpfKSxtLmNhbmNlbD1sLG0uZmx1c2g9cCxtfWZ1bmN0aW9uIG8oZSx0LG8pe3ZhciByPSEwLGE9ITA7aWYoXCJmdW5jdGlvblwiIT10eXBlb2YgZSl0aHJvdyBuZXcgVHlwZUVycm9yKHMpO3JldHVybiBpKG8pJiYocj1cImxlYWRpbmdcImluIG8/ISFvLmxlYWRpbmc6cixhPVwidHJhaWxpbmdcImluIG8/ISFvLnRyYWlsaW5nOmEpLG4oZSx0LHtsZWFkaW5nOnIsbWF4V2FpdDp0LHRyYWlsaW5nOmF9KX1mdW5jdGlvbiBpKGUpe3ZhciB0PVwidW5kZWZpbmVkXCI9PXR5cGVvZiBlP1widW5kZWZpbmVkXCI6YyhlKTtyZXR1cm4hIWUmJihcIm9iamVjdFwiPT10fHxcImZ1bmN0aW9uXCI9PXQpfWZ1bmN0aW9uIHIoZSl7cmV0dXJuISFlJiZcIm9iamVjdFwiPT0oXCJ1bmRlZmluZWRcIj09dHlwZW9mIGU/XCJ1bmRlZmluZWRcIjpjKGUpKX1mdW5jdGlvbiBhKGUpe3JldHVyblwic3ltYm9sXCI9PShcInVuZGVmaW5lZFwiPT10eXBlb2YgZT9cInVuZGVmaW5lZFwiOmMoZSkpfHxyKGUpJiZrLmNhbGwoZSk9PWR9ZnVuY3Rpb24gdShlKXtpZihcIm51bWJlclwiPT10eXBlb2YgZSlyZXR1cm4gZTtpZihhKGUpKXJldHVybiBmO2lmKGkoZSkpe3ZhciB0PVwiZnVuY3Rpb25cIj09dHlwZW9mIGUudmFsdWVPZj9lLnZhbHVlT2YoKTplO2U9aSh0KT90K1wiXCI6dH1pZihcInN0cmluZ1wiIT10eXBlb2YgZSlyZXR1cm4gMD09PWU/ZTorZTtlPWUucmVwbGFjZShsLFwiXCIpO3ZhciBuPW0udGVzdChlKTtyZXR1cm4gbnx8Yi50ZXN0KGUpP3YoZS5zbGljZSgyKSxuPzI6OCk6cC50ZXN0KGUpP2Y6K2V9dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgU3ltYm9sJiZcInN5bWJvbFwiPT10eXBlb2YgU3ltYm9sLml0ZXJhdG9yP2Z1bmN0aW9uKGUpe3JldHVybiB0eXBlb2YgZX06ZnVuY3Rpb24oZSl7cmV0dXJuIGUmJlwiZnVuY3Rpb25cIj09dHlwZW9mIFN5bWJvbCYmZS5jb25zdHJ1Y3Rvcj09PVN5bWJvbCYmZSE9PVN5bWJvbC5wcm90b3R5cGU/XCJzeW1ib2xcIjp0eXBlb2YgZX0scz1cIkV4cGVjdGVkIGEgZnVuY3Rpb25cIixmPU5hTixkPVwiW29iamVjdCBTeW1ib2xdXCIsbD0vXlxccyt8XFxzKyQvZyxwPS9eWy0rXTB4WzAtOWEtZl0rJC9pLG09L14wYlswMV0rJC9pLGI9L14wb1swLTddKyQvaSx2PXBhcnNlSW50LHk9XCJvYmplY3RcIj09KFwidW5kZWZpbmVkXCI9PXR5cGVvZiB0P1widW5kZWZpbmVkXCI6Yyh0KSkmJnQmJnQuT2JqZWN0PT09T2JqZWN0JiZ0LGc9XCJvYmplY3RcIj09KFwidW5kZWZpbmVkXCI9PXR5cGVvZiBzZWxmP1widW5kZWZpbmVkXCI6YyhzZWxmKSkmJnNlbGYmJnNlbGYuT2JqZWN0PT09T2JqZWN0JiZzZWxmLGg9eXx8Z3x8RnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpLHc9T2JqZWN0LnByb3RvdHlwZSxrPXcudG9TdHJpbmcseD1NYXRoLm1heCxqPU1hdGgubWluLE89ZnVuY3Rpb24oKXtyZXR1cm4gaC5EYXRlLm5vdygpfTtlLmV4cG9ydHM9b30pLmNhbGwodCxmdW5jdGlvbigpe3JldHVybiB0aGlzfSgpKX0sZnVuY3Rpb24oZSx0KXsoZnVuY3Rpb24odCl7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gbihlLHQsbil7ZnVuY3Rpb24gaSh0KXt2YXIgbj1iLG89djtyZXR1cm4gYj12PXZvaWQgMCxPPXQsZz1lLmFwcGx5KG8sbil9ZnVuY3Rpb24gcihlKXtyZXR1cm4gTz1lLGg9c2V0VGltZW91dChmLHQpLE0/aShlKTpnfWZ1bmN0aW9uIHUoZSl7dmFyIG49ZS13LG89ZS1PLGk9dC1uO3JldHVybiBTP3goaSx5LW8pOml9ZnVuY3Rpb24gcyhlKXt2YXIgbj1lLXcsbz1lLU87cmV0dXJuIHZvaWQgMD09PXd8fG4+PXR8fG48MHx8UyYmbz49eX1mdW5jdGlvbiBmKCl7dmFyIGU9aigpO3JldHVybiBzKGUpP2QoZSk6dm9pZChoPXNldFRpbWVvdXQoZix1KGUpKSl9ZnVuY3Rpb24gZChlKXtyZXR1cm4gaD12b2lkIDAsXyYmYj9pKGUpOihiPXY9dm9pZCAwLGcpfWZ1bmN0aW9uIGwoKXt2b2lkIDAhPT1oJiZjbGVhclRpbWVvdXQoaCksTz0wLGI9dz12PWg9dm9pZCAwfWZ1bmN0aW9uIHAoKXtyZXR1cm4gdm9pZCAwPT09aD9nOmQoaigpKX1mdW5jdGlvbiBtKCl7dmFyIGU9aigpLG49cyhlKTtpZihiPWFyZ3VtZW50cyx2PXRoaXMsdz1lLG4pe2lmKHZvaWQgMD09PWgpcmV0dXJuIHIodyk7aWYoUylyZXR1cm4gaD1zZXRUaW1lb3V0KGYsdCksaSh3KX1yZXR1cm4gdm9pZCAwPT09aCYmKGg9c2V0VGltZW91dChmLHQpKSxnfXZhciBiLHYseSxnLGgsdyxPPTAsTT0hMSxTPSExLF89ITA7aWYoXCJmdW5jdGlvblwiIT10eXBlb2YgZSl0aHJvdyBuZXcgVHlwZUVycm9yKGMpO3JldHVybiB0PWEodCl8fDAsbyhuKSYmKE09ISFuLmxlYWRpbmcsUz1cIm1heFdhaXRcImluIG4seT1TP2soYShuLm1heFdhaXQpfHwwLHQpOnksXz1cInRyYWlsaW5nXCJpbiBuPyEhbi50cmFpbGluZzpfKSxtLmNhbmNlbD1sLG0uZmx1c2g9cCxtfWZ1bmN0aW9uIG8oZSl7dmFyIHQ9XCJ1bmRlZmluZWRcIj09dHlwZW9mIGU/XCJ1bmRlZmluZWRcIjp1KGUpO3JldHVybiEhZSYmKFwib2JqZWN0XCI9PXR8fFwiZnVuY3Rpb25cIj09dCl9ZnVuY3Rpb24gaShlKXtyZXR1cm4hIWUmJlwib2JqZWN0XCI9PShcInVuZGVmaW5lZFwiPT10eXBlb2YgZT9cInVuZGVmaW5lZFwiOnUoZSkpfWZ1bmN0aW9uIHIoZSl7cmV0dXJuXCJzeW1ib2xcIj09KFwidW5kZWZpbmVkXCI9PXR5cGVvZiBlP1widW5kZWZpbmVkXCI6dShlKSl8fGkoZSkmJncuY2FsbChlKT09Zn1mdW5jdGlvbiBhKGUpe2lmKFwibnVtYmVyXCI9PXR5cGVvZiBlKXJldHVybiBlO2lmKHIoZSkpcmV0dXJuIHM7aWYobyhlKSl7dmFyIHQ9XCJmdW5jdGlvblwiPT10eXBlb2YgZS52YWx1ZU9mP2UudmFsdWVPZigpOmU7ZT1vKHQpP3QrXCJcIjp0fWlmKFwic3RyaW5nXCIhPXR5cGVvZiBlKXJldHVybiAwPT09ZT9lOitlO2U9ZS5yZXBsYWNlKGQsXCJcIik7dmFyIG49cC50ZXN0KGUpO3JldHVybiBufHxtLnRlc3QoZSk/YihlLnNsaWNlKDIpLG4/Mjo4KTpsLnRlc3QoZSk/czorZX12YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiBTeW1ib2wmJlwic3ltYm9sXCI9PXR5cGVvZiBTeW1ib2wuaXRlcmF0b3I/ZnVuY3Rpb24oZSl7cmV0dXJuIHR5cGVvZiBlfTpmdW5jdGlvbihlKXtyZXR1cm4gZSYmXCJmdW5jdGlvblwiPT10eXBlb2YgU3ltYm9sJiZlLmNvbnN0cnVjdG9yPT09U3ltYm9sJiZlIT09U3ltYm9sLnByb3RvdHlwZT9cInN5bWJvbFwiOnR5cGVvZiBlfSxjPVwiRXhwZWN0ZWQgYSBmdW5jdGlvblwiLHM9TmFOLGY9XCJbb2JqZWN0IFN5bWJvbF1cIixkPS9eXFxzK3xcXHMrJC9nLGw9L15bLStdMHhbMC05YS1mXSskL2kscD0vXjBiWzAxXSskL2ksbT0vXjBvWzAtN10rJC9pLGI9cGFyc2VJbnQsdj1cIm9iamVjdFwiPT0oXCJ1bmRlZmluZWRcIj09dHlwZW9mIHQ/XCJ1bmRlZmluZWRcIjp1KHQpKSYmdCYmdC5PYmplY3Q9PT1PYmplY3QmJnQseT1cIm9iamVjdFwiPT0oXCJ1bmRlZmluZWRcIj09dHlwZW9mIHNlbGY/XCJ1bmRlZmluZWRcIjp1KHNlbGYpKSYmc2VsZiYmc2VsZi5PYmplY3Q9PT1PYmplY3QmJnNlbGYsZz12fHx5fHxGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKCksaD1PYmplY3QucHJvdG90eXBlLHc9aC50b1N0cmluZyxrPU1hdGgubWF4LHg9TWF0aC5taW4saj1mdW5jdGlvbigpe3JldHVybiBnLkRhdGUubm93KCl9O2UuZXhwb3J0cz1ufSkuY2FsbCh0LGZ1bmN0aW9uKCl7cmV0dXJuIHRoaXN9KCkpfSxmdW5jdGlvbihlLHQpe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIG4oZSl7dmFyIHQ9dm9pZCAwLG89dm9pZCAwLGk9dm9pZCAwO2Zvcih0PTA7dDxlLmxlbmd0aDt0Kz0xKXtpZihvPWVbdF0sby5kYXRhc2V0JiZvLmRhdGFzZXQuYW9zKXJldHVybiEwO2lmKGk9by5jaGlsZHJlbiYmbihvLmNoaWxkcmVuKSlyZXR1cm4hMH1yZXR1cm4hMX1mdW5jdGlvbiBvKCl7cmV0dXJuIHdpbmRvdy5NdXRhdGlvbk9ic2VydmVyfHx3aW5kb3cuV2ViS2l0TXV0YXRpb25PYnNlcnZlcnx8d2luZG93Lk1vek11dGF0aW9uT2JzZXJ2ZXJ9ZnVuY3Rpb24gaSgpe3JldHVybiEhbygpfWZ1bmN0aW9uIHIoZSx0KXt2YXIgbj13aW5kb3cuZG9jdW1lbnQsaT1vKCkscj1uZXcgaShhKTt1PXQsci5vYnNlcnZlKG4uZG9jdW1lbnRFbGVtZW50LHtjaGlsZExpc3Q6ITAsc3VidHJlZTohMCxyZW1vdmVkTm9kZXM6ITB9KX1mdW5jdGlvbiBhKGUpe2UmJmUuZm9yRWFjaChmdW5jdGlvbihlKXt2YXIgdD1BcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChlLmFkZGVkTm9kZXMpLG89QXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoZS5yZW1vdmVkTm9kZXMpLGk9dC5jb25jYXQobyk7aWYobihpKSlyZXR1cm4gdSgpfSl9T2JqZWN0LmRlZmluZVByb3BlcnR5KHQsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSk7dmFyIHU9ZnVuY3Rpb24oKXt9O3QuZGVmYXVsdD17aXNTdXBwb3J0ZWQ6aSxyZWFkeTpyfX0sZnVuY3Rpb24oZSx0KXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiBuKGUsdCl7aWYoIShlIGluc3RhbmNlb2YgdCkpdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKX1mdW5jdGlvbiBvKCl7cmV0dXJuIG5hdmlnYXRvci51c2VyQWdlbnR8fG5hdmlnYXRvci52ZW5kb3J8fHdpbmRvdy5vcGVyYXx8XCJcIn1PYmplY3QuZGVmaW5lUHJvcGVydHkodCxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KTt2YXIgaT1mdW5jdGlvbigpe2Z1bmN0aW9uIGUoZSx0KXtmb3IodmFyIG49MDtuPHQubGVuZ3RoO24rKyl7dmFyIG89dFtuXTtvLmVudW1lcmFibGU9by5lbnVtZXJhYmxlfHwhMSxvLmNvbmZpZ3VyYWJsZT0hMCxcInZhbHVlXCJpbiBvJiYoby53cml0YWJsZT0hMCksT2JqZWN0LmRlZmluZVByb3BlcnR5KGUsby5rZXksbyl9fXJldHVybiBmdW5jdGlvbih0LG4sbyl7cmV0dXJuIG4mJmUodC5wcm90b3R5cGUsbiksbyYmZSh0LG8pLHR9fSgpLHI9LyhhbmRyb2lkfGJiXFxkK3xtZWVnbykuK21vYmlsZXxhdmFudGdvfGJhZGFcXC98YmxhY2tiZXJyeXxibGF6ZXJ8Y29tcGFsfGVsYWluZXxmZW5uZWN8aGlwdG9wfGllbW9iaWxlfGlwKGhvbmV8b2QpfGlyaXN8a2luZGxlfGxnZSB8bWFlbW98bWlkcHxtbXB8bW9iaWxlLitmaXJlZm94fG5ldGZyb250fG9wZXJhIG0ob2J8aW4paXxwYWxtKCBvcyk/fHBob25lfHAoaXhpfHJlKVxcL3xwbHVja2VyfHBvY2tldHxwc3B8c2VyaWVzKDR8NikwfHN5bWJpYW58dHJlb3x1cFxcLihicm93c2VyfGxpbmspfHZvZGFmb25lfHdhcHx3aW5kb3dzIGNlfHhkYXx4aWluby9pLGE9LzEyMDd8NjMxMHw2NTkwfDNnc298NHRocHw1MFsxLTZdaXw3NzBzfDgwMnN8YSB3YXxhYmFjfGFjKGVyfG9vfHNcXC0pfGFpKGtvfHJuKXxhbChhdnxjYXxjbyl8YW1vaXxhbihleHxueXx5dyl8YXB0dXxhcihjaHxnbyl8YXModGV8dXMpfGF0dHd8YXUoZGl8XFwtbXxyIHxzICl8YXZhbnxiZShja3xsbHxucSl8YmkobGJ8cmQpfGJsKGFjfGF6KXxicihlfHYpd3xidW1ifGJ3XFwtKG58dSl8YzU1XFwvfGNhcGl8Y2N3YXxjZG1cXC18Y2VsbHxjaHRtfGNsZGN8Y21kXFwtfGNvKG1wfG5kKXxjcmF3fGRhKGl0fGxsfG5nKXxkYnRlfGRjXFwtc3xkZXZpfGRpY2F8ZG1vYnxkbyhjfHApb3xkcygxMnxcXC1kKXxlbCg0OXxhaSl8ZW0obDJ8dWwpfGVyKGljfGswKXxlc2w4fGV6KFs0LTddMHxvc3x3YXx6ZSl8ZmV0Y3xmbHkoXFwtfF8pfGcxIHV8ZzU2MHxnZW5lfGdmXFwtNXxnXFwtbW98Z28oXFwud3xvZCl8Z3IoYWR8dW4pfGhhaWV8aGNpdHxoZFxcLShtfHB8dCl8aGVpXFwtfGhpKHB0fHRhKXxocCggaXxpcCl8aHNcXC1jfGh0KGMoXFwtfCB8X3xhfGd8cHxzfHQpfHRwKXxodShhd3x0Yyl8aVxcLSgyMHxnb3xtYSl8aTIzMHxpYWMoIHxcXC18XFwvKXxpYnJvfGlkZWF8aWcwMXxpa29tfGltMWt8aW5ub3xpcGFxfGlyaXN8amEodHx2KWF8amJyb3xqZW11fGppZ3N8a2RkaXxrZWppfGtndCggfFxcLyl8a2xvbnxrcHQgfGt3Y1xcLXxreW8oY3xrKXxsZShub3x4aSl8bGcoIGd8XFwvKGt8bHx1KXw1MHw1NHxcXC1bYS13XSl8bGlid3xseW54fG0xXFwtd3xtM2dhfG01MFxcL3xtYSh0ZXx1aXx4byl8bWMoMDF8MjF8Y2EpfG1cXC1jcnxtZShyY3xyaSl8bWkobzh8b2F8dHMpfG1tZWZ8bW8oMDF8MDJ8Yml8ZGV8ZG98dChcXC18IHxvfHYpfHp6KXxtdCg1MHxwMXx2ICl8bXdicHxteXdhfG4xMFswLTJdfG4yMFsyLTNdfG4zMCgwfDIpfG41MCgwfDJ8NSl8bjcoMCgwfDEpfDEwKXxuZSgoY3xtKVxcLXxvbnx0Znx3Znx3Z3x3dCl8bm9rKDZ8aSl8bnpwaHxvMmltfG9wKHRpfHd2KXxvcmFufG93ZzF8cDgwMHxwYW4oYXxkfHQpfHBkeGd8cGcoMTN8XFwtKFsxLThdfGMpKXxwaGlsfHBpcmV8cGwoYXl8dWMpfHBuXFwtMnxwbyhja3xydHxzZSl8cHJveHxwc2lvfHB0XFwtZ3xxYVxcLWF8cWMoMDd8MTJ8MjF8MzJ8NjB8XFwtWzItN118aVxcLSl8cXRla3xyMzgwfHI2MDB8cmFrc3xyaW05fHJvKHZlfHpvKXxzNTVcXC98c2EoZ2V8bWF8bW18bXN8bnl8dmEpfHNjKDAxfGhcXC18b298cFxcLSl8c2RrXFwvfHNlKGMoXFwtfDB8MSl8NDd8bWN8bmR8cmkpfHNnaFxcLXxzaGFyfHNpZShcXC18bSl8c2tcXC0wfHNsKDQ1fGlkKXxzbShhbHxhcnxiM3xpdHx0NSl8c28oZnR8bnkpfHNwKDAxfGhcXC18dlxcLXx2ICl8c3koMDF8bWIpfHQyKDE4fDUwKXx0NigwMHwxMHwxOCl8dGEoZ3R8bGspfHRjbFxcLXx0ZGdcXC18dGVsKGl8bSl8dGltXFwtfHRcXC1tb3x0byhwbHxzaCl8dHMoNzB8bVxcLXxtM3xtNSl8dHhcXC05fHVwKFxcLmJ8ZzF8c2kpfHV0c3R8djQwMHx2NzUwfHZlcml8dmkocmd8dGUpfHZrKDQwfDVbMC0zXXxcXC12KXx2bTQwfHZvZGF8dnVsY3x2eCg1Mnw1M3w2MHw2MXw3MHw4MHw4MXw4M3w4NXw5OCl8dzNjKFxcLXwgKXx3ZWJjfHdoaXR8d2koZyB8bmN8bncpfHdtbGJ8d29udXx4NzAwfHlhc1xcLXx5b3VyfHpldG98enRlXFwtL2ksdT0vKGFuZHJvaWR8YmJcXGQrfG1lZWdvKS4rbW9iaWxlfGF2YW50Z298YmFkYVxcL3xibGFja2JlcnJ5fGJsYXplcnxjb21wYWx8ZWxhaW5lfGZlbm5lY3xoaXB0b3B8aWVtb2JpbGV8aXAoaG9uZXxvZCl8aXJpc3xraW5kbGV8bGdlIHxtYWVtb3xtaWRwfG1tcHxtb2JpbGUuK2ZpcmVmb3h8bmV0ZnJvbnR8b3BlcmEgbShvYnxpbilpfHBhbG0oIG9zKT98cGhvbmV8cChpeGl8cmUpXFwvfHBsdWNrZXJ8cG9ja2V0fHBzcHxzZXJpZXMoNHw2KTB8c3ltYmlhbnx0cmVvfHVwXFwuKGJyb3dzZXJ8bGluayl8dm9kYWZvbmV8d2FwfHdpbmRvd3MgY2V8eGRhfHhpaW5vfGFuZHJvaWR8aXBhZHxwbGF5Ym9va3xzaWxrL2ksYz0vMTIwN3w2MzEwfDY1OTB8M2dzb3w0dGhwfDUwWzEtNl1pfDc3MHN8ODAyc3xhIHdhfGFiYWN8YWMoZXJ8b298c1xcLSl8YWkoa298cm4pfGFsKGF2fGNhfGNvKXxhbW9pfGFuKGV4fG55fHl3KXxhcHR1fGFyKGNofGdvKXxhcyh0ZXx1cyl8YXR0d3xhdShkaXxcXC1tfHIgfHMgKXxhdmFufGJlKGNrfGxsfG5xKXxiaShsYnxyZCl8YmwoYWN8YXopfGJyKGV8dil3fGJ1bWJ8YndcXC0obnx1KXxjNTVcXC98Y2FwaXxjY3dhfGNkbVxcLXxjZWxsfGNodG18Y2xkY3xjbWRcXC18Y28obXB8bmQpfGNyYXd8ZGEoaXR8bGx8bmcpfGRidGV8ZGNcXC1zfGRldml8ZGljYXxkbW9ifGRvKGN8cClvfGRzKDEyfFxcLWQpfGVsKDQ5fGFpKXxlbShsMnx1bCl8ZXIoaWN8azApfGVzbDh8ZXooWzQtN10wfG9zfHdhfHplKXxmZXRjfGZseShcXC18Xyl8ZzEgdXxnNTYwfGdlbmV8Z2ZcXC01fGdcXC1tb3xnbyhcXC53fG9kKXxncihhZHx1bil8aGFpZXxoY2l0fGhkXFwtKG18cHx0KXxoZWlcXC18aGkocHR8dGEpfGhwKCBpfGlwKXxoc1xcLWN8aHQoYyhcXC18IHxffGF8Z3xwfHN8dCl8dHApfGh1KGF3fHRjKXxpXFwtKDIwfGdvfG1hKXxpMjMwfGlhYyggfFxcLXxcXC8pfGlicm98aWRlYXxpZzAxfGlrb218aW0xa3xpbm5vfGlwYXF8aXJpc3xqYSh0fHYpYXxqYnJvfGplbXV8amlnc3xrZGRpfGtlaml8a2d0KCB8XFwvKXxrbG9ufGtwdCB8a3djXFwtfGt5byhjfGspfGxlKG5vfHhpKXxsZyggZ3xcXC8oa3xsfHUpfDUwfDU0fFxcLVthLXddKXxsaWJ3fGx5bnh8bTFcXC13fG0zZ2F8bTUwXFwvfG1hKHRlfHVpfHhvKXxtYygwMXwyMXxjYSl8bVxcLWNyfG1lKHJjfHJpKXxtaShvOHxvYXx0cyl8bW1lZnxtbygwMXwwMnxiaXxkZXxkb3x0KFxcLXwgfG98dil8enopfG10KDUwfHAxfHYgKXxtd2JwfG15d2F8bjEwWzAtMl18bjIwWzItM118bjMwKDB8Mil8bjUwKDB8Mnw1KXxuNygwKDB8MSl8MTApfG5lKChjfG0pXFwtfG9ufHRmfHdmfHdnfHd0KXxub2soNnxpKXxuenBofG8yaW18b3AodGl8d3YpfG9yYW58b3dnMXxwODAwfHBhbihhfGR8dCl8cGR4Z3xwZygxM3xcXC0oWzEtOF18YykpfHBoaWx8cGlyZXxwbChheXx1Yyl8cG5cXC0yfHBvKGNrfHJ0fHNlKXxwcm94fHBzaW98cHRcXC1nfHFhXFwtYXxxYygwN3wxMnwyMXwzMnw2MHxcXC1bMi03XXxpXFwtKXxxdGVrfHIzODB8cjYwMHxyYWtzfHJpbTl8cm8odmV8em8pfHM1NVxcL3xzYShnZXxtYXxtbXxtc3xueXx2YSl8c2MoMDF8aFxcLXxvb3xwXFwtKXxzZGtcXC98c2UoYyhcXC18MHwxKXw0N3xtY3xuZHxyaSl8c2doXFwtfHNoYXJ8c2llKFxcLXxtKXxza1xcLTB8c2woNDV8aWQpfHNtKGFsfGFyfGIzfGl0fHQ1KXxzbyhmdHxueSl8c3AoMDF8aFxcLXx2XFwtfHYgKXxzeSgwMXxtYil8dDIoMTh8NTApfHQ2KDAwfDEwfDE4KXx0YShndHxsayl8dGNsXFwtfHRkZ1xcLXx0ZWwoaXxtKXx0aW1cXC18dFxcLW1vfHRvKHBsfHNoKXx0cyg3MHxtXFwtfG0zfG01KXx0eFxcLTl8dXAoXFwuYnxnMXxzaSl8dXRzdHx2NDAwfHY3NTB8dmVyaXx2aShyZ3x0ZSl8dmsoNDB8NVswLTNdfFxcLXYpfHZtNDB8dm9kYXx2dWxjfHZ4KDUyfDUzfDYwfDYxfDcwfDgwfDgxfDgzfDg1fDk4KXx3M2MoXFwtfCApfHdlYmN8d2hpdHx3aShnIHxuY3xudyl8d21sYnx3b251fHg3MDB8eWFzXFwtfHlvdXJ8emV0b3x6dGVcXC0vaSxzPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gZSgpe24odGhpcyxlKX1yZXR1cm4gaShlLFt7a2V5OlwicGhvbmVcIix2YWx1ZTpmdW5jdGlvbigpe3ZhciBlPW8oKTtyZXR1cm4hKCFyLnRlc3QoZSkmJiFhLnRlc3QoZS5zdWJzdHIoMCw0KSkpfX0se2tleTpcIm1vYmlsZVwiLHZhbHVlOmZ1bmN0aW9uKCl7dmFyIGU9bygpO3JldHVybiEoIXUudGVzdChlKSYmIWMudGVzdChlLnN1YnN0cigwLDQpKSl9fSx7a2V5OlwidGFibGV0XCIsdmFsdWU6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5tb2JpbGUoKSYmIXRoaXMucGhvbmUoKX19XSksZX0oKTt0LmRlZmF1bHQ9bmV3IHN9LGZ1bmN0aW9uKGUsdCl7XCJ1c2Ugc3RyaWN0XCI7T2JqZWN0LmRlZmluZVByb3BlcnR5KHQsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSk7dmFyIG49ZnVuY3Rpb24oZSx0LG4pe3ZhciBvPWUubm9kZS5nZXRBdHRyaWJ1dGUoXCJkYXRhLWFvcy1vbmNlXCIpO3Q+ZS5wb3NpdGlvbj9lLm5vZGUuY2xhc3NMaXN0LmFkZChcImFvcy1hbmltYXRlXCIpOlwidW5kZWZpbmVkXCIhPXR5cGVvZiBvJiYoXCJmYWxzZVwiPT09b3x8IW4mJlwidHJ1ZVwiIT09bykmJmUubm9kZS5jbGFzc0xpc3QucmVtb3ZlKFwiYW9zLWFuaW1hdGVcIil9LG89ZnVuY3Rpb24oZSx0KXt2YXIgbz13aW5kb3cucGFnZVlPZmZzZXQsaT13aW5kb3cuaW5uZXJIZWlnaHQ7ZS5mb3JFYWNoKGZ1bmN0aW9uKGUscil7bihlLGkrbyx0KX0pfTt0LmRlZmF1bHQ9b30sZnVuY3Rpb24oZSx0LG4pe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIG8oZSl7cmV0dXJuIGUmJmUuX19lc01vZHVsZT9lOntkZWZhdWx0OmV9fU9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pO3ZhciBpPW4oMTIpLHI9byhpKSxhPWZ1bmN0aW9uKGUsdCl7cmV0dXJuIGUuZm9yRWFjaChmdW5jdGlvbihlLG4pe2Uubm9kZS5jbGFzc0xpc3QuYWRkKFwiYW9zLWluaXRcIiksZS5wb3NpdGlvbj0oMCxyLmRlZmF1bHQpKGUubm9kZSx0Lm9mZnNldCl9KSxlfTt0LmRlZmF1bHQ9YX0sZnVuY3Rpb24oZSx0LG4pe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIG8oZSl7cmV0dXJuIGUmJmUuX19lc01vZHVsZT9lOntkZWZhdWx0OmV9fU9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pO3ZhciBpPW4oMTMpLHI9byhpKSxhPWZ1bmN0aW9uKGUsdCl7dmFyIG49MCxvPTAsaT13aW5kb3cuaW5uZXJIZWlnaHQsYT17b2Zmc2V0OmUuZ2V0QXR0cmlidXRlKFwiZGF0YS1hb3Mtb2Zmc2V0XCIpLGFuY2hvcjplLmdldEF0dHJpYnV0ZShcImRhdGEtYW9zLWFuY2hvclwiKSxhbmNob3JQbGFjZW1lbnQ6ZS5nZXRBdHRyaWJ1dGUoXCJkYXRhLWFvcy1hbmNob3ItcGxhY2VtZW50XCIpfTtzd2l0Y2goYS5vZmZzZXQmJiFpc05hTihhLm9mZnNldCkmJihvPXBhcnNlSW50KGEub2Zmc2V0KSksYS5hbmNob3ImJmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYS5hbmNob3IpJiYoZT1kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGEuYW5jaG9yKVswXSksbj0oMCxyLmRlZmF1bHQpKGUpLnRvcCxhLmFuY2hvclBsYWNlbWVudCl7Y2FzZVwidG9wLWJvdHRvbVwiOmJyZWFrO2Nhc2VcImNlbnRlci1ib3R0b21cIjpuKz1lLm9mZnNldEhlaWdodC8yO2JyZWFrO2Nhc2VcImJvdHRvbS1ib3R0b21cIjpuKz1lLm9mZnNldEhlaWdodDticmVhaztjYXNlXCJ0b3AtY2VudGVyXCI6bis9aS8yO2JyZWFrO2Nhc2VcImJvdHRvbS1jZW50ZXJcIjpuKz1pLzIrZS5vZmZzZXRIZWlnaHQ7YnJlYWs7Y2FzZVwiY2VudGVyLWNlbnRlclwiOm4rPWkvMitlLm9mZnNldEhlaWdodC8yO2JyZWFrO2Nhc2VcInRvcC10b3BcIjpuKz1pO2JyZWFrO2Nhc2VcImJvdHRvbS10b3BcIjpuKz1lLm9mZnNldEhlaWdodCtpO2JyZWFrO2Nhc2VcImNlbnRlci10b3BcIjpuKz1lLm9mZnNldEhlaWdodC8yK2l9cmV0dXJuIGEuYW5jaG9yUGxhY2VtZW50fHxhLm9mZnNldHx8aXNOYU4odCl8fChvPXQpLG4rb307dC5kZWZhdWx0PWF9LGZ1bmN0aW9uKGUsdCl7XCJ1c2Ugc3RyaWN0XCI7T2JqZWN0LmRlZmluZVByb3BlcnR5KHQsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSk7dmFyIG49ZnVuY3Rpb24oZSl7Zm9yKHZhciB0PTAsbj0wO2UmJiFpc05hTihlLm9mZnNldExlZnQpJiYhaXNOYU4oZS5vZmZzZXRUb3ApOyl0Kz1lLm9mZnNldExlZnQtKFwiQk9EWVwiIT1lLnRhZ05hbWU/ZS5zY3JvbGxMZWZ0OjApLG4rPWUub2Zmc2V0VG9wLShcIkJPRFlcIiE9ZS50YWdOYW1lP2Uuc2Nyb2xsVG9wOjApLGU9ZS5vZmZzZXRQYXJlbnQ7cmV0dXJue3RvcDpuLGxlZnQ6dH19O3QuZGVmYXVsdD1ufSxmdW5jdGlvbihlLHQpe1widXNlIHN0cmljdFwiO09iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pO3ZhciBuPWZ1bmN0aW9uKGUpe3JldHVybiBlPWV8fGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJbZGF0YS1hb3NdXCIpLEFycmF5LnByb3RvdHlwZS5tYXAuY2FsbChlLGZ1bmN0aW9uKGUpe3JldHVybntub2RlOmV9fSl9O3QuZGVmYXVsdD1ufV0pfSk7IiwiLy8gVXNlIHRoaXMgZmlsZSB0byBpbXBvcnQgYWxsIG5lZWRlZCBKUyBmaWxlcyBpbnRvIG9uZS5cblxuaW1wb3J0ICcuL2NvbXBvbmVudHMvaGVsbG8td29ybGQnO1xuXG4vLyBpbXBvcnQgJy4vY29tcG9uZW50cy9tb2JpbGVNZW51JztcblxuLy8gSW1wb3J0IEFPUyBmb3IgZW50cnkgYW5pbWF0aW9ucyBpZiB5b3Ugc28gZGVzaXJlLlxuaW1wb3J0ICcuL2NvbXBvbmVudHMvYW9zSW1wb3J0JztcblxuLy8gaW1wb3J0IGpRdWVyeSBhbmQgYWRkICQgYXMgZ2xvYmFsIHZhcmlhYmxlIGlmIG5lZWRlZFxuLy8gaW1wb3J0ICcuL2NvbXBvbmVudHMvalF1ZXJ5TG9hZCc7XG4iLCIvLyBpbXBvcnQgQU9TXG5pbXBvcnQgQU9TIGZyb20gJ2Fvcyc7XG5cbi8vIGluaXRpYWxpemUgQU9TIGFuZCBhZGQgYW55IGNvbmZpZyBpZiBuZWVkZWQuIEkndmUgc2V0IEFPUyB0byBhbmltYXRlIGVsZW1lbnRzIG9ubHkgb25jZSwgd2hlbiBzY3JvbGxpbmcgZG93bi5cbkFPUy5pbml0KHtcbiAgb25jZTogdHJ1ZSxcbn0pO1xuIiwiLy8gdGhpcyBzZXJ2ZXMgYXMgYW4gZXhhbXBsZSB0byB0ZXN0IGltcG9ydGluZyBhbmQgYnVuZGxpbmcgYSBmaWxlXG5jb25zb2xlLmxvZygnaGVsbG8gd29ybGQhJyk7XG4iXSwic291cmNlUm9vdCI6IiJ9