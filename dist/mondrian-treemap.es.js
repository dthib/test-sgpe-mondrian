import Ce, { PureComponent as Nr, useState as be, useMemo as Wr, useCallback as ge, useEffect as Lr } from "react";
import * as Ur from "echarts";
function Yr(i) {
  return i && i.__esModule && Object.prototype.hasOwnProperty.call(i, "default") ? i.default : i;
}
var se = { exports: {} }, Z = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var He;
function Br() {
  if (He) return Z;
  He = 1;
  var i = Ce, n = Symbol.for("react.element"), r = Symbol.for("react.fragment"), o = Object.prototype.hasOwnProperty, a = i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, s = { key: !0, ref: !0, __self: !0, __source: !0 };
  function l(f, c, _) {
    var g, R = {}, O = null, M = null;
    _ !== void 0 && (O = "" + _), c.key !== void 0 && (O = "" + c.key), c.ref !== void 0 && (M = c.ref);
    for (g in c) o.call(c, g) && !s.hasOwnProperty(g) && (R[g] = c[g]);
    if (f && f.defaultProps) for (g in c = f.defaultProps, c) R[g] === void 0 && (R[g] = c[g]);
    return { $$typeof: n, type: f, key: O, ref: M, props: R, _owner: a.current };
  }
  return Z.Fragment = r, Z.jsx = l, Z.jsxs = l, Z;
}
var Q = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ze;
function Jr() {
  return Ze || (Ze = 1, process.env.NODE_ENV !== "production" && function() {
    var i = Ce, n = Symbol.for("react.element"), r = Symbol.for("react.portal"), o = Symbol.for("react.fragment"), a = Symbol.for("react.strict_mode"), s = Symbol.for("react.profiler"), l = Symbol.for("react.provider"), f = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), _ = Symbol.for("react.suspense"), g = Symbol.for("react.suspense_list"), R = Symbol.for("react.memo"), O = Symbol.for("react.lazy"), M = Symbol.for("react.offscreen"), x = Symbol.iterator, v = "@@iterator";
    function P(e) {
      if (e === null || typeof e != "object")
        return null;
      var t = x && e[x] || e[v];
      return typeof t == "function" ? t : null;
    }
    var V = i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function D(e) {
      {
        for (var t = arguments.length, u = new Array(t > 1 ? t - 1 : 0), d = 1; d < t; d++)
          u[d - 1] = arguments[d];
        ue("error", e, u);
      }
    }
    function ue(e, t, u) {
      {
        var d = V.ReactDebugCurrentFrame, E = d.getStackAddendum();
        E !== "" && (t += "%s", u = u.concat([E]));
        var S = u.map(function(y) {
          return String(y);
        });
        S.unshift("Warning: " + t), Function.prototype.apply.call(console[e], console, S);
      }
    }
    var h = !1, p = !1, $ = !1, T = !1, m = !1, C;
    C = Symbol.for("react.module.reference");
    function B(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === o || e === s || m || e === a || e === _ || e === g || T || e === M || h || p || $ || typeof e == "object" && e !== null && (e.$$typeof === O || e.$$typeof === R || e.$$typeof === l || e.$$typeof === f || e.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === C || e.getModuleId !== void 0));
    }
    function vr(e, t, u) {
      var d = e.displayName;
      if (d)
        return d;
      var E = t.displayName || t.name || "";
      return E !== "" ? u + "(" + E + ")" : u;
    }
    function Te(e) {
      return e.displayName || "Context";
    }
    function W(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && D("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case o:
          return "Fragment";
        case r:
          return "Portal";
        case s:
          return "Profiler";
        case a:
          return "StrictMode";
        case _:
          return "Suspense";
        case g:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case f:
            var t = e;
            return Te(t) + ".Consumer";
          case l:
            var u = e;
            return Te(u._context) + ".Provider";
          case c:
            return vr(e, e.render, "ForwardRef");
          case R:
            var d = e.displayName || null;
            return d !== null ? d : W(e.type) || "Memo";
          case O: {
            var E = e, S = E._payload, y = E._init;
            try {
              return W(y(S));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var L = Object.assign, X = 0, je, xe, De, Pe, ke, Fe, Ie;
    function Ae() {
    }
    Ae.__reactDisabledLog = !0;
    function pr() {
      {
        if (X === 0) {
          je = console.log, xe = console.info, De = console.warn, Pe = console.error, ke = console.group, Fe = console.groupCollapsed, Ie = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: Ae,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        X++;
      }
    }
    function hr() {
      {
        if (X--, X === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: L({}, e, {
              value: je
            }),
            info: L({}, e, {
              value: xe
            }),
            warn: L({}, e, {
              value: De
            }),
            error: L({}, e, {
              value: Pe
            }),
            group: L({}, e, {
              value: ke
            }),
            groupCollapsed: L({}, e, {
              value: Fe
            }),
            groupEnd: L({}, e, {
              value: Ie
            })
          });
        }
        X < 0 && D("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ce = V.ReactCurrentDispatcher, le;
    function ne(e, t, u) {
      {
        if (le === void 0)
          try {
            throw Error();
          } catch (E) {
            var d = E.stack.trim().match(/\n( *(at )?)/);
            le = d && d[1] || "";
          }
        return `
` + le + e;
      }
    }
    var fe = !1, oe;
    {
      var mr = typeof WeakMap == "function" ? WeakMap : Map;
      oe = new mr();
    }
    function Me(e, t) {
      if (!e || fe)
        return "";
      {
        var u = oe.get(e);
        if (u !== void 0)
          return u;
      }
      var d;
      fe = !0;
      var E = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var S;
      S = ce.current, ce.current = null, pr();
      try {
        if (t) {
          var y = function() {
            throw Error();
          };
          if (Object.defineProperty(y.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(y, []);
            } catch (F) {
              d = F;
            }
            Reflect.construct(e, [], y);
          } else {
            try {
              y.call();
            } catch (F) {
              d = F;
            }
            e.call(y.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (F) {
            d = F;
          }
          e();
        }
      } catch (F) {
        if (F && d && typeof F.stack == "string") {
          for (var b = F.stack.split(`
`), k = d.stack.split(`
`), w = b.length - 1, j = k.length - 1; w >= 1 && j >= 0 && b[w] !== k[j]; )
            j--;
          for (; w >= 1 && j >= 0; w--, j--)
            if (b[w] !== k[j]) {
              if (w !== 1 || j !== 1)
                do
                  if (w--, j--, j < 0 || b[w] !== k[j]) {
                    var A = `
` + b[w].replace(" at new ", " at ");
                    return e.displayName && A.includes("<anonymous>") && (A = A.replace("<anonymous>", e.displayName)), typeof e == "function" && oe.set(e, A), A;
                  }
                while (w >= 1 && j >= 0);
              break;
            }
        }
      } finally {
        fe = !1, ce.current = S, hr(), Error.prepareStackTrace = E;
      }
      var K = e ? e.displayName || e.name : "", U = K ? ne(K) : "";
      return typeof e == "function" && oe.set(e, U), U;
    }
    function br(e, t, u) {
      return Me(e, !1);
    }
    function gr(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function ae(e, t, u) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return Me(e, gr(e));
      if (typeof e == "string")
        return ne(e);
      switch (e) {
        case _:
          return ne("Suspense");
        case g:
          return ne("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case c:
            return br(e.render);
          case R:
            return ae(e.type, t, u);
          case O: {
            var d = e, E = d._payload, S = d._init;
            try {
              return ae(S(E), t, u);
            } catch {
            }
          }
        }
      return "";
    }
    var H = Object.prototype.hasOwnProperty, $e = {}, Ve = V.ReactDebugCurrentFrame;
    function ie(e) {
      if (e) {
        var t = e._owner, u = ae(e.type, e._source, t ? t.type : null);
        Ve.setExtraStackFrame(u);
      } else
        Ve.setExtraStackFrame(null);
    }
    function yr(e, t, u, d, E) {
      {
        var S = Function.call.bind(H);
        for (var y in e)
          if (S(e, y)) {
            var b = void 0;
            try {
              if (typeof e[y] != "function") {
                var k = Error((d || "React class") + ": " + u + " type `" + y + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[y] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw k.name = "Invariant Violation", k;
              }
              b = e[y](t, y, d, u, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (w) {
              b = w;
            }
            b && !(b instanceof Error) && (ie(E), D("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", d || "React class", u, y, typeof b), ie(null)), b instanceof Error && !(b.message in $e) && ($e[b.message] = !0, ie(E), D("Failed %s type: %s", u, b.message), ie(null));
          }
      }
    }
    var _r = Array.isArray;
    function de(e) {
      return _r(e);
    }
    function Er(e) {
      {
        var t = typeof Symbol == "function" && Symbol.toStringTag, u = t && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return u;
      }
    }
    function Rr(e) {
      try {
        return qe(e), !1;
      } catch {
        return !0;
      }
    }
    function qe(e) {
      return "" + e;
    }
    function ze(e) {
      if (Rr(e))
        return D("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Er(e)), qe(e);
    }
    var Ne = V.ReactCurrentOwner, Sr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, We, Le;
    function Or(e) {
      if (H.call(e, "ref")) {
        var t = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (t && t.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function Cr(e) {
      if (H.call(e, "key")) {
        var t = Object.getOwnPropertyDescriptor(e, "key").get;
        if (t && t.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function wr(e, t) {
      typeof e.ref == "string" && Ne.current;
    }
    function Tr(e, t) {
      {
        var u = function() {
          We || (We = !0, D("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", t));
        };
        u.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: u,
          configurable: !0
        });
      }
    }
    function jr(e, t) {
      {
        var u = function() {
          Le || (Le = !0, D("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", t));
        };
        u.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: u,
          configurable: !0
        });
      }
    }
    var xr = function(e, t, u, d, E, S, y) {
      var b = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: n,
        // Built-in properties that belong on the element
        type: e,
        key: t,
        ref: u,
        props: y,
        // Record the component responsible for creating this element.
        _owner: S
      };
      return b._store = {}, Object.defineProperty(b._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(b, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: d
      }), Object.defineProperty(b, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: E
      }), Object.freeze && (Object.freeze(b.props), Object.freeze(b)), b;
    };
    function Dr(e, t, u, d, E) {
      {
        var S, y = {}, b = null, k = null;
        u !== void 0 && (ze(u), b = "" + u), Cr(t) && (ze(t.key), b = "" + t.key), Or(t) && (k = t.ref, wr(t, E));
        for (S in t)
          H.call(t, S) && !Sr.hasOwnProperty(S) && (y[S] = t[S]);
        if (e && e.defaultProps) {
          var w = e.defaultProps;
          for (S in w)
            y[S] === void 0 && (y[S] = w[S]);
        }
        if (b || k) {
          var j = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          b && Tr(y, j), k && jr(y, j);
        }
        return xr(e, b, k, E, d, Ne.current, y);
      }
    }
    var ve = V.ReactCurrentOwner, Ue = V.ReactDebugCurrentFrame;
    function J(e) {
      if (e) {
        var t = e._owner, u = ae(e.type, e._source, t ? t.type : null);
        Ue.setExtraStackFrame(u);
      } else
        Ue.setExtraStackFrame(null);
    }
    var pe;
    pe = !1;
    function he(e) {
      return typeof e == "object" && e !== null && e.$$typeof === n;
    }
    function Ye() {
      {
        if (ve.current) {
          var e = W(ve.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function Pr(e) {
      return "";
    }
    var Be = {};
    function kr(e) {
      {
        var t = Ye();
        if (!t) {
          var u = typeof e == "string" ? e : e.displayName || e.name;
          u && (t = `

Check the top-level render call using <` + u + ">.");
        }
        return t;
      }
    }
    function Je(e, t) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var u = kr(t);
        if (Be[u])
          return;
        Be[u] = !0;
        var d = "";
        e && e._owner && e._owner !== ve.current && (d = " It was passed a child from " + W(e._owner.type) + "."), J(e), D('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', u, d), J(null);
      }
    }
    function Ke(e, t) {
      {
        if (typeof e != "object")
          return;
        if (de(e))
          for (var u = 0; u < e.length; u++) {
            var d = e[u];
            he(d) && Je(d, t);
          }
        else if (he(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var E = P(e);
          if (typeof E == "function" && E !== e.entries)
            for (var S = E.call(e), y; !(y = S.next()).done; )
              he(y.value) && Je(y.value, t);
        }
      }
    }
    function Fr(e) {
      {
        var t = e.type;
        if (t == null || typeof t == "string")
          return;
        var u;
        if (typeof t == "function")
          u = t.propTypes;
        else if (typeof t == "object" && (t.$$typeof === c || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        t.$$typeof === R))
          u = t.propTypes;
        else
          return;
        if (u) {
          var d = W(t);
          yr(u, e.props, "prop", d, e);
        } else if (t.PropTypes !== void 0 && !pe) {
          pe = !0;
          var E = W(t);
          D("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", E || "Unknown");
        }
        typeof t.getDefaultProps == "function" && !t.getDefaultProps.isReactClassApproved && D("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Ir(e) {
      {
        for (var t = Object.keys(e.props), u = 0; u < t.length; u++) {
          var d = t[u];
          if (d !== "children" && d !== "key") {
            J(e), D("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", d), J(null);
            break;
          }
        }
        e.ref !== null && (J(e), D("Invalid attribute `ref` supplied to `React.Fragment`."), J(null));
      }
    }
    var Ge = {};
    function Xe(e, t, u, d, E, S) {
      {
        var y = B(e);
        if (!y) {
          var b = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (b += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var k = Pr();
          k ? b += k : b += Ye();
          var w;
          e === null ? w = "null" : de(e) ? w = "array" : e !== void 0 && e.$$typeof === n ? (w = "<" + (W(e.type) || "Unknown") + " />", b = " Did you accidentally export a JSX literal instead of a component?") : w = typeof e, D("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", w, b);
        }
        var j = Dr(e, t, u, E, S);
        if (j == null)
          return j;
        if (y) {
          var A = t.children;
          if (A !== void 0)
            if (d)
              if (de(A)) {
                for (var K = 0; K < A.length; K++)
                  Ke(A[K], e);
                Object.freeze && Object.freeze(A);
              } else
                D("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Ke(A, e);
        }
        if (H.call(t, "key")) {
          var U = W(e), F = Object.keys(t).filter(function(zr) {
            return zr !== "key";
          }), me = F.length > 0 ? "{key: someKey, " + F.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Ge[U + me]) {
            var qr = F.length > 0 ? "{" + F.join(": ..., ") + ": ...}" : "{}";
            D(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, me, U, qr, U), Ge[U + me] = !0;
          }
        }
        return e === o ? Ir(j) : Fr(j), j;
      }
    }
    function Ar(e, t, u) {
      return Xe(e, t, u, !0);
    }
    function Mr(e, t, u) {
      return Xe(e, t, u, !1);
    }
    var $r = Mr, Vr = Ar;
    Q.Fragment = o, Q.jsx = $r, Q.jsxs = Vr;
  }()), Q;
}
var Qe;
function Kr() {
  return Qe || (Qe = 1, process.env.NODE_ENV === "production" ? se.exports = Br() : se.exports = Jr()), se.exports;
}
var I = Kr();
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
var Se = function(i, n) {
  return Se = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(r, o) {
    r.__proto__ = o;
  } || function(r, o) {
    for (var a in o) Object.prototype.hasOwnProperty.call(o, a) && (r[a] = o[a]);
  }, Se(i, n);
};
function fr(i, n) {
  if (typeof n != "function" && n !== null)
    throw new TypeError("Class extends value " + String(n) + " is not a constructor or null");
  Se(i, n);
  function r() {
    this.constructor = i;
  }
  i.prototype = n === null ? Object.create(n) : (r.prototype = n.prototype, new r());
}
var Oe = function() {
  return Oe = Object.assign || function(n) {
    for (var r, o = 1, a = arguments.length; o < a; o++) {
      r = arguments[o];
      for (var s in r) Object.prototype.hasOwnProperty.call(r, s) && (n[s] = r[s]);
    }
    return n;
  }, Oe.apply(this, arguments);
}, q = {}, z = {}, ye = {}, er;
function Gr() {
  return er || (er = 1, function(i) {
    Object.defineProperty(i, "__esModule", {
      value: !0
    }), i.default = void 0;
    var n = 1, r = function() {
      return "".concat(n++);
    };
    i.default = r;
  }(ye)), ye;
}
var ee = {}, re = {}, _e = {}, rr;
function dr() {
  return rr || (rr = 1, function(i) {
    Object.defineProperty(i, "__esModule", {
      value: !0
    }), i.default = void 0;
    var n = function(o) {
      var a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 60, s = null;
      return function() {
        for (var l = this, f = arguments.length, c = new Array(f), _ = 0; _ < f; _++)
          c[_] = arguments[_];
        clearTimeout(s), s = setTimeout(function() {
          o.apply(l, c);
        }, a);
      };
    };
    i.default = n;
  }(_e)), _e;
}
var N = {}, tr;
function we() {
  if (tr) return N;
  tr = 1, Object.defineProperty(N, "__esModule", {
    value: !0
  }), N.SizeSensorId = N.SensorTabIndex = N.SensorClassName = void 0;
  var i = "size-sensor-id";
  N.SizeSensorId = i;
  var n = "size-sensor-object";
  N.SensorClassName = n;
  var r = "-1";
  return N.SensorTabIndex = r, N;
}
var nr;
function Xr() {
  if (nr) return re;
  nr = 1, Object.defineProperty(re, "__esModule", {
    value: !0
  }), re.createSensor = void 0;
  var i = r(dr()), n = we();
  function r(a) {
    return a && a.__esModule ? a : { default: a };
  }
  var o = function(s, l) {
    var f = void 0, c = [], _ = function() {
      getComputedStyle(s).position === "static" && (s.style.position = "relative");
      var v = document.createElement("object");
      return v.onload = function() {
        v.contentDocument.defaultView.addEventListener("resize", g), g();
      }, v.style.display = "block", v.style.position = "absolute", v.style.top = "0", v.style.left = "0", v.style.height = "100%", v.style.width = "100%", v.style.overflow = "hidden", v.style.pointerEvents = "none", v.style.zIndex = "-1", v.style.opacity = "0", v.setAttribute("class", n.SensorClassName), v.setAttribute("tabindex", n.SensorTabIndex), v.type = "text/html", s.appendChild(v), v.data = "about:blank", v;
    }, g = (0, i.default)(function() {
      c.forEach(function(x) {
        x(s);
      });
    }), R = function(v) {
      f || (f = _()), c.indexOf(v) === -1 && c.push(v);
    }, O = function() {
      f && f.parentNode && (f.contentDocument && f.contentDocument.defaultView.removeEventListener("resize", g), f.parentNode.removeChild(f), s.removeAttribute(n.SizeSensorId), f = void 0, c = [], l && l());
    }, M = function(v) {
      var P = c.indexOf(v);
      P !== -1 && c.splice(P, 1), c.length === 0 && f && O();
    };
    return {
      element: s,
      bind: R,
      destroy: O,
      unbind: M
    };
  };
  return re.createSensor = o, re;
}
var te = {}, or;
function Hr() {
  if (or) return te;
  or = 1, Object.defineProperty(te, "__esModule", {
    value: !0
  }), te.createSensor = void 0;
  var i = we(), n = r(dr());
  function r(a) {
    return a && a.__esModule ? a : { default: a };
  }
  var o = function(s, l) {
    var f = void 0, c = [], _ = (0, n.default)(function() {
      c.forEach(function(x) {
        x(s);
      });
    }), g = function() {
      var v = new ResizeObserver(_);
      return v.observe(s), _(), v;
    }, R = function(v) {
      f || (f = g()), c.indexOf(v) === -1 && c.push(v);
    }, O = function() {
      f.disconnect(), c = [], f = void 0, s.removeAttribute(i.SizeSensorId), l && l();
    }, M = function(v) {
      var P = c.indexOf(v);
      P !== -1 && c.splice(P, 1), c.length === 0 && f && O();
    };
    return {
      element: s,
      bind: R,
      destroy: O,
      unbind: M
    };
  };
  return te.createSensor = o, te;
}
var ar;
function Zr() {
  if (ar) return ee;
  ar = 1, Object.defineProperty(ee, "__esModule", {
    value: !0
  }), ee.createSensor = void 0;
  var i = Xr(), n = Hr(), r = typeof ResizeObserver < "u" ? n.createSensor : i.createSensor;
  return ee.createSensor = r, ee;
}
var ir;
function Qr() {
  if (ir) return z;
  ir = 1, Object.defineProperty(z, "__esModule", {
    value: !0
  }), z.removeSensor = z.getSensor = z.Sensors = void 0;
  var i = o(Gr()), n = Zr(), r = we();
  function o(c) {
    return c && c.__esModule ? c : { default: c };
  }
  var a = {};
  z.Sensors = a;
  function s(c) {
    c && a[c] && delete a[c];
  }
  var l = function(_) {
    var g = _.getAttribute(r.SizeSensorId);
    if (g && a[g])
      return a[g];
    var R = (0, i.default)();
    _.setAttribute(r.SizeSensorId, R);
    var O = (0, n.createSensor)(_, function() {
      return s(R);
    });
    return a[R] = O, O;
  };
  z.getSensor = l;
  var f = function(_) {
    var g = _.element.getAttribute(r.SizeSensorId);
    _.destroy(), s(g);
  };
  return z.removeSensor = f, z;
}
var sr;
function et() {
  if (sr) return q;
  sr = 1, Object.defineProperty(q, "__esModule", {
    value: !0
  }), q.ver = q.clear = q.bind = void 0;
  var i = Qr(), n = function(s, l) {
    var f = (0, i.getSensor)(s);
    return f.bind(l), function() {
      f.unbind(l);
    };
  };
  q.bind = n;
  var r = function(s) {
    var l = (0, i.getSensor)(s);
    (0, i.removeSensor)(l);
  };
  q.clear = r;
  var o = "1.0.2";
  return q.ver = o, q;
}
var ur = et();
function cr(i, n) {
  var r = {};
  return n.forEach(function(o) {
    r[o] = i[o];
  }), r;
}
function Ee(i) {
  return typeof i == "function";
}
function rt(i) {
  return typeof i == "string";
}
var Re, lr;
function tt() {
  return lr || (lr = 1, Re = function i(n, r) {
    if (n === r) return !0;
    if (n && r && typeof n == "object" && typeof r == "object") {
      if (n.constructor !== r.constructor) return !1;
      var o, a, s;
      if (Array.isArray(n)) {
        if (o = n.length, o != r.length) return !1;
        for (a = o; a-- !== 0; )
          if (!i(n[a], r[a])) return !1;
        return !0;
      }
      if (n.constructor === RegExp) return n.source === r.source && n.flags === r.flags;
      if (n.valueOf !== Object.prototype.valueOf) return n.valueOf() === r.valueOf();
      if (n.toString !== Object.prototype.toString) return n.toString() === r.toString();
      if (s = Object.keys(n), o = s.length, o !== Object.keys(r).length) return !1;
      for (a = o; a-- !== 0; )
        if (!Object.prototype.hasOwnProperty.call(r, s[a])) return !1;
      for (a = o; a-- !== 0; ) {
        var l = s[a];
        if (!i(n[l], r[l])) return !1;
      }
      return !0;
    }
    return n !== n && r !== r;
  }), Re;
}
var nt = tt();
const G = /* @__PURE__ */ Yr(nt);
var ot = (
  /** @class */
  function(i) {
    fr(n, i);
    function n(r) {
      var o = i.call(this, r) || this;
      return o.echarts = r.echarts, o.ele = null, o.isInitialResize = !0, o;
    }
    return n.prototype.componentDidMount = function() {
      this.renderNewEcharts();
    }, n.prototype.componentDidUpdate = function(r) {
      var o = this.props.shouldSetOption;
      if (!(Ee(o) && !o(r, this.props))) {
        if (!G(r.theme, this.props.theme) || !G(r.opts, this.props.opts) || !G(r.onEvents, this.props.onEvents)) {
          this.dispose(), this.renderNewEcharts();
          return;
        }
        var a = ["option", "notMerge", "lazyUpdate", "showLoading", "loadingOption"];
        G(cr(this.props, a), cr(r, a)) || this.updateEChartsOption(), (!G(r.style, this.props.style) || !G(r.className, this.props.className)) && this.resize();
      }
    }, n.prototype.componentWillUnmount = function() {
      this.dispose();
    }, n.prototype.getEchartsInstance = function() {
      return this.echarts.getInstanceByDom(this.ele) || this.echarts.init(this.ele, this.props.theme, this.props.opts);
    }, n.prototype.dispose = function() {
      if (this.ele) {
        try {
          ur.clear(this.ele);
        } catch (r) {
          console.warn(r);
        }
        this.echarts.dispose(this.ele);
      }
    }, n.prototype.renderNewEcharts = function() {
      var r = this, o = this.props, a = o.onEvents, s = o.onChartReady, l = this.updateEChartsOption();
      this.bindEvents(l, a || {}), Ee(s) && s(l), this.ele && ur.bind(this.ele, function() {
        r.resize();
      });
    }, n.prototype.bindEvents = function(r, o) {
      function a(l, f) {
        rt(l) && Ee(f) && r.on(l, function(c) {
          f(c, r);
        });
      }
      for (var s in o)
        Object.prototype.hasOwnProperty.call(o, s) && a(s, o[s]);
    }, n.prototype.updateEChartsOption = function() {
      var r = this.props, o = r.option, a = r.notMerge, s = a === void 0 ? !1 : a, l = r.lazyUpdate, f = l === void 0 ? !1 : l, c = r.showLoading, _ = r.loadingOption, g = _ === void 0 ? null : _, R = this.getEchartsInstance();
      return R.setOption(o, s, f), c ? R.showLoading(g) : R.hideLoading(), R;
    }, n.prototype.resize = function() {
      var r = this.getEchartsInstance();
      if (!this.isInitialResize)
        try {
          r.resize();
        } catch (o) {
          console.warn(o);
        }
      this.isInitialResize = !1;
    }, n.prototype.render = function() {
      var r = this, o = this.props, a = o.style, s = o.className, l = s === void 0 ? "" : s, f = Oe({ height: 300 }, a);
      return Ce.createElement("div", { ref: function(c) {
        r.ele = c;
      }, style: f, className: "echarts-for-react " + l });
    }, n;
  }(Nr)
), at = (
  /** @class */
  function(i) {
    fr(n, i);
    function n(r) {
      var o = i.call(this, r) || this;
      return o.echarts = Ur, o;
    }
    return n;
  }(ot)
);
const it = {
  Transports: "#c6dbef",
  Résidentiel: "#fdb462",
  Tertiaire: "#ffed6f",
  Industrie: "#fb8072",
  Agriculture: "#b3de69",
  Déchets: "#bebada",
  UTCATF: "#d9d9d9",
  Cultures: "#F7DC6F"
}, vt = [
  "#FF6B35",
  "#4ECDC4",
  "#45B7D1",
  "#96CEB4",
  "#FFEAA7",
  "#DDA0DD",
  "#98D8C8",
  "#F7DC6F",
  "#E17055",
  "#74B9FF"
];
function st(i, n) {
  const r = { sectors: [] };
  console.log("epciData:", i), console.log("leverPercentages:", n);
  for (const o of i.sectors) {
    const a = n.sectors.find(
      (f) => f.sector_snbc === o.name
    );
    if (!a) {
      console.warn(`Sector "${o.name}" not found in CSV data`);
      continue;
    }
    const s = [];
    let l = 0;
    switch (o.calculation_method) {
      case "difference_repartition":
        l = ut(
          o,
          a,
          i.region,
          s
        );
        break;
      case "transposition_directe":
        l = ct(
          o,
          a,
          i.region,
          s
        );
        break;
      case "sum_transposition":
        l = lt(
          o,
          a,
          i,
          s
        );
        break;
      case "national_repartition":
        l = ft(o, a, s);
        break;
      default:
        console.error(
          `Unknown calculation method: ${o.calculation_method}`
        );
    }
    console.log("levers:", s), s.length > 0 && r.sectors.push({
      name: o.name,
      total: l,
      levers: s
    });
  }
  return r;
}
function ut(i, n, r, o) {
  const a = i.value2019 - i.target2030;
  let s = 0;
  for (const l of n.levers) {
    const f = l.regional_percentages[r];
    if (f === void 0) {
      console.warn(`Region "${r}" not found for lever "${l.name}"`);
      continue;
    }
    const c = a * (f / 100);
    o.push({
      name: l.name,
      contribution: c,
      color: l.color || void 0
    }), s += c;
  }
  return s;
}
function ct(i, n, r, o) {
  let a = 0;
  for (const s of n.levers) {
    const l = s.regional_percentages[r];
    if (l === void 0) {
      console.warn(`Region "${r}" not found for lever "${s.name}"`);
      continue;
    }
    const f = i.target2030 * (l / 100);
    o.push({
      name: s.name,
      contribution: f,
      color: s.color || void 0
    }), a += f;
  }
  return a;
}
function lt(i, n, r, o) {
  if (!i.source_sectors)
    return console.error(`Missing source_sectors for sector "${i.name}"`), 0;
  let a = 0;
  for (const l of i.source_sectors) {
    const f = r.sectors.find((c) => c.name === l);
    f && (a += f.target2030);
  }
  let s = 0;
  for (const l of n.levers) {
    const f = l.regional_percentages[r.region];
    if (f === void 0) {
      console.warn(
        `Region "${r.region}" not found for lever "${l.name}"`
      );
      continue;
    }
    const c = a * (f / 100);
    o.push({
      name: l.name,
      contribution: c,
      color: l.color || void 0
    }), s += c;
  }
  return s;
}
function ft(i, n, r) {
  const o = i.value2019 - i.target2030;
  let a = 0;
  for (const s of n.levers) {
    const l = Object.values(s.regional_percentages)[0];
    if (l === void 0) {
      console.warn(`No percentage found for lever "${s.name}"`);
      continue;
    }
    const f = o * (l / 100);
    r.push({
      name: s.name,
      contribution: f,
      color: s.color || void 0
    }), a += f;
  }
  return a;
}
const Y = "#74B9FF", pt = ({
  epciData: i,
  leverPercentages: n,
  selectedSector: r,
  selectedLever: o,
  onLeverSelected: a,
  onSectorSelected: s,
  resetZoom: l,
  className: f = "",
  style: c = {}
}) => {
  const [_, g] = be([]), [R, O] = be(
    "overview"
  ), [M, x] = be(null), v = it, P = Wr(() => {
    try {
      return x(null), st(i, n);
    } catch (h) {
      return x(h?.message ?? "Unknown error"), console.error("Error processing Mondrian data:", h), { sectors: [] };
    }
  }, [i, n]), V = ge(() => R === "sector" && _.length > 0 ? _ : P.sectors.map((h) => ({
    name: h.name,
    value: Math.abs(h.total),
    realValue: h.total,
    itemStyle: { color: v[h.name] || Y },
    children: h.levers.map((p) => ({
      name: p.name,
      value: Math.abs(p.contribution),
      realValue: p.contribution,
      sector: h.name,
      lever: p.name,
      contribution: p.contribution,
      color: p.color || v[h.name] || Y,
      itemStyle: {
        color: p.color || v[h.name] || Y
      }
    }))
  })), [P, R, _, v]);
  Lr(() => {
    if (!r) {
      O("overview"), g([]);
      return;
    }
    const h = P.sectors.find(
      (p) => p.name === r
    );
    h && (o ? (g([
      {
        name: r,
        value: Math.abs(h.total),
        realValue: h.total,
        children: h.levers.map((p) => ({
          name: p.name,
          value: Math.abs(p.contribution),
          realValue: p.contribution,
          sector: r,
          lever: p.name,
          contribution: p.contribution,
          color: p.color || v[r] || Y,
          selected: p.name === o
        }))
      }
    ]), O("sector")) : (g([
      {
        name: r,
        value: Math.abs(h.total),
        realValue: h.total,
        children: h.levers.map((p) => ({
          name: p.name,
          value: Math.abs(p.contribution),
          realValue: p.contribution,
          sector: r,
          lever: p.name,
          contribution: p.contribution,
          color: p.color || v[r] || Y
        }))
      }
    ]), O("sector")));
  }, [r, o, P, v]);
  const D = ge(
    (h) => {
      if (h?.data?.sector && h?.data?.lever) {
        const p = h.data.sector, $ = h.data.lever, T = h.data.contribution, m = P.sectors.find(
          (C) => C.name === p
        );
        if (!m) return;
        g([
          {
            name: p,
            value: Math.abs(m.total),
            realValue: m.total,
            children: m.levers.map((C) => ({
              name: C.name,
              value: Math.abs(C.contribution),
              realValue: C.contribution,
              sector: p,
              lever: C.name,
              contribution: C.contribution,
              color: C.color || v[p] || Y,
              selected: C.name === $
            }))
          }
        ]), O("sector"), a?.(p, $, T);
      } else if (h?.data?.name && !h?.data?.sector) {
        const p = h.data.name, $ = P.sectors.find(
          (T) => T.name === p
        );
        g([
          {
            name: p,
            value: Math.abs($?.total ?? 0),
            realValue: $?.total ?? 0,
            children: $?.levers.map((T) => ({
              name: T.name,
              value: Math.abs(T.contribution),
              realValue: T.contribution,
              sector: p,
              lever: T.name,
              contribution: T.contribution,
              color: T.color || v[p] || Y
            })) ?? []
          }
        ]), O("sector"), s?.(p);
      }
    },
    [P, a, s, v]
  ), ue = ge(() => {
    const h = V();
    function p(T) {
      return T.map((m) => m.children ? { ...m, children: p(m.children) } : m.selected ? {
        ...m,
        itemStyle: {
          ...m.itemStyle,
          borderColor: "#90caf9",
          borderWidth: 1,
          shadowColor: "#90caf9",
          shadowBlur: 12
        },
        opacity: 1
      } : { ...m, opacity: 0.5 });
    }
    let $ = h;
    return h.length === 1 && h[0].children && h[0].children.some((T) => T.selected) && ($ = [
      {
        ...h[0],
        children: p(h[0].children)
      }
    ]), {
      tooltip: {
        formatter: function(T) {
          const m = T.data;
          let C = "";
          if (m.sector && m.lever) {
            C += `<strong>${m.sector}</strong><br/>`, C += `<strong>${m.lever}</strong><br/>`;
            const B = m.realValue !== void 0 ? m.realValue : m.contribution;
            B !== void 0 && m.realValue !== 0 && (C += `Target: ${B.toFixed(1)} ktCO₂e`);
          } else
            C += `<strong>${m.name}</strong><br/>`, m.realValue !== void 0 && (C += `Total: ${m.realValue.toFixed(1)} ktCO₂e`);
          return C;
        },
        backgroundColor: "rgba(255, 255, 255, 0.95)",
        borderColor: "#ccc",
        borderWidth: 1,
        textStyle: { color: "#333" }
      },
      series: [
        {
          type: "treemap",
          data: $,
          roam: !1,
          nodeClick: "drillDown",
          label: {
            show: !0,
            formatter: function(T) {
              const m = T.data;
              if (m.sector && m.lever) {
                const B = m.realValue !== void 0 ? m.realValue : m.contribution;
                return `${m.lever}

${B.toFixed(1)} ktCO₂e`;
              }
              const C = m.realValue !== void 0 ? m.realValue : m.value;
              return `${m.name}

${C.toFixed(1)} ktCO₂e`;
            },
            fontSize: 12,
            color: "#111"
          },
          breadcrumb: {
            show: !1
            // hide breadcrumb by default temporary, to be implemented in the future
          },
          itemStyle: { borderColor: "#fff", borderWidth: 2 },
          levels: [
            {
              itemStyle: {
                borderColor: "#fff",
                borderWidth: 2,
                gapWidth: 2
              }
            },
            {
              itemStyle: {
                borderColor: "#fff",
                borderWidth: 1,
                gapWidth: 1
              }
            }
          ]
        }
      ]
    };
  }, [V]);
  return M ? /* @__PURE__ */ I.jsxs("div", { className: "mondrian-error", children: [
    /* @__PURE__ */ I.jsx("h4", { children: "Data processing error" }),
    /* @__PURE__ */ I.jsx("p", { children: M }),
    /* @__PURE__ */ I.jsx("p", { className: "mondrian-error-hint", children: "Please verify the mapping between EPCI sectors and lever percentages." })
  ] }) : /* @__PURE__ */ I.jsxs(
    "div",
    {
      className: `mondrian-treemap mondrian-treemap-container ${f}`,
      style: c,
      children: [
        (R === "sector" || r) && /* @__PURE__ */ I.jsxs("div", { className: "mondrian-breadcrumb", children: [
          /* @__PURE__ */ I.jsx(
            "span",
            {
              className: "mondrian-breadcrumb-item clickable",
              onClick: () => {
                O("overview"), g([]), l?.();
              },
              children: "Overview"
            }
          ),
          /* @__PURE__ */ I.jsx("span", { className: "mondrian-breadcrumb-separator", children: "›" }),
          /* @__PURE__ */ I.jsx("span", { className: "mondrian-breadcrumb-item", children: r }),
          o && /* @__PURE__ */ I.jsxs(I.Fragment, { children: [
            /* @__PURE__ */ I.jsx("span", { className: "mondrian-breadcrumb-separator", children: "›" }),
            /* @__PURE__ */ I.jsx("span", { className: "mondrian-breadcrumb-item", children: o })
          ] })
        ] }),
        /* @__PURE__ */ I.jsx(
          at,
          {
            option: ue(),
            className: `mondrian-treemap-chart ${R !== "overview" ? "with-breadcrumb" : ""}`,
            style: { height: "100%", width: "100%" },
            onEvents: {
              click: D
            }
          }
        )
      ]
    }
  );
};
export {
  vt as LEVER_COLORS,
  pt as MondrianTreemap,
  it as SECTOR_COLORS,
  st as calculateSNBCData
};
