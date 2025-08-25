import ke, { useState as re, useMemo as vr, useEffect as pr } from "react";
var q = { exports: {} }, W = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var je;
function mr() {
  if (je) return W;
  je = 1;
  var p = ke, h = Symbol.for("react.element"), s = Symbol.for("react.fragment"), u = Object.prototype.hasOwnProperty, m = p.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, c = { key: !0, ref: !0, __self: !0, __source: !0 };
  function i(v, f, S) {
    var _, w = {}, x = null, P = null;
    S !== void 0 && (x = "" + S), f.key !== void 0 && (x = "" + f.key), f.ref !== void 0 && (P = f.ref);
    for (_ in f) u.call(f, _) && !c.hasOwnProperty(_) && (w[_] = f[_]);
    if (v && v.defaultProps) for (_ in f = v.defaultProps, f) w[_] === void 0 && (w[_] = f[_]);
    return { $$typeof: h, type: v, key: x, ref: P, props: w, _owner: m.current };
  }
  return W.Fragment = s, W.jsx = i, W.jsxs = i, W;
}
var Y = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var xe;
function br() {
  return xe || (xe = 1, process.env.NODE_ENV !== "production" && function() {
    var p = ke, h = Symbol.for("react.element"), s = Symbol.for("react.portal"), u = Symbol.for("react.fragment"), m = Symbol.for("react.strict_mode"), c = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), v = Symbol.for("react.context"), f = Symbol.for("react.forward_ref"), S = Symbol.for("react.suspense"), _ = Symbol.for("react.suspense_list"), w = Symbol.for("react.memo"), x = Symbol.for("react.lazy"), P = Symbol.for("react.offscreen"), V = Symbol.iterator, O = "@@iterator";
    function R(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = V && e[V] || e[O];
      return typeof r == "function" ? r : null;
    }
    var A = p.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function E(e) {
      {
        for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), t = 1; t < r; t++)
          n[t - 1] = arguments[t];
        De("error", e, n);
      }
    }
    function De(e, r, n) {
      {
        var t = A.ReactDebugCurrentFrame, l = t.getStackAddendum();
        l !== "" && (r += "%s", n = n.concat([l]));
        var d = n.map(function(o) {
          return String(o);
        });
        d.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, d);
      }
    }
    var Fe = !1, Ae = !1, $e = !1, Ie = !1, Ve = !1, ne;
    ne = Symbol.for("react.module.reference");
    function Me(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === u || e === c || Ve || e === m || e === S || e === _ || Ie || e === P || Fe || Ae || $e || typeof e == "object" && e !== null && (e.$$typeof === x || e.$$typeof === w || e.$$typeof === i || e.$$typeof === v || e.$$typeof === f || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === ne || e.getModuleId !== void 0));
    }
    function Ne(e, r, n) {
      var t = e.displayName;
      if (t)
        return t;
      var l = r.displayName || r.name || "";
      return l !== "" ? n + "(" + l + ")" : n;
    }
    function te(e) {
      return e.displayName || "Context";
    }
    function k(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && E("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case u:
          return "Fragment";
        case s:
          return "Portal";
        case c:
          return "Profiler";
        case m:
          return "StrictMode";
        case S:
          return "Suspense";
        case _:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case v:
            var r = e;
            return te(r) + ".Consumer";
          case i:
            var n = e;
            return te(n._context) + ".Provider";
          case f:
            return Ne(e, e.render, "ForwardRef");
          case w:
            var t = e.displayName || null;
            return t !== null ? t : k(e.type) || "Memo";
          case x: {
            var l = e, d = l._payload, o = l._init;
            try {
              return k(o(d));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var D = Object.assign, M = 0, ae, oe, ie, se, ue, ce, le;
    function fe() {
    }
    fe.__reactDisabledLog = !0;
    function We() {
      {
        if (M === 0) {
          ae = console.log, oe = console.info, ie = console.warn, se = console.error, ue = console.group, ce = console.groupCollapsed, le = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: fe,
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
        M++;
      }
    }
    function Ye() {
      {
        if (M--, M === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: D({}, e, {
              value: ae
            }),
            info: D({}, e, {
              value: oe
            }),
            warn: D({}, e, {
              value: ie
            }),
            error: D({}, e, {
              value: se
            }),
            group: D({}, e, {
              value: ue
            }),
            groupCollapsed: D({}, e, {
              value: ce
            }),
            groupEnd: D({}, e, {
              value: le
            })
          });
        }
        M < 0 && E("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var K = A.ReactCurrentDispatcher, G;
    function U(e, r, n) {
      {
        if (G === void 0)
          try {
            throw Error();
          } catch (l) {
            var t = l.stack.trim().match(/\n( *(at )?)/);
            G = t && t[1] || "";
          }
        return `
` + G + e;
      }
    }
    var z = !1, L;
    {
      var Ue = typeof WeakMap == "function" ? WeakMap : Map;
      L = new Ue();
    }
    function de(e, r) {
      if (!e || z)
        return "";
      {
        var n = L.get(e);
        if (n !== void 0)
          return n;
      }
      var t;
      z = !0;
      var l = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var d;
      d = K.current, K.current = null, We();
      try {
        if (r) {
          var o = function() {
            throw Error();
          };
          if (Object.defineProperty(o.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(o, []);
            } catch (T) {
              t = T;
            }
            Reflect.construct(e, [], o);
          } else {
            try {
              o.call();
            } catch (T) {
              t = T;
            }
            e.call(o.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (T) {
            t = T;
          }
          e();
        }
      } catch (T) {
        if (T && t && typeof T.stack == "string") {
          for (var a = T.stack.split(`
`), y = t.stack.split(`
`), b = a.length - 1, g = y.length - 1; b >= 1 && g >= 0 && a[b] !== y[g]; )
            g--;
          for (; b >= 1 && g >= 0; b--, g--)
            if (a[b] !== y[g]) {
              if (b !== 1 || g !== 1)
                do
                  if (b--, g--, g < 0 || a[b] !== y[g]) {
                    var j = `
` + a[b].replace(" at new ", " at ");
                    return e.displayName && j.includes("<anonymous>") && (j = j.replace("<anonymous>", e.displayName)), typeof e == "function" && L.set(e, j), j;
                  }
                while (b >= 1 && g >= 0);
              break;
            }
        }
      } finally {
        z = !1, K.current = d, Ye(), Error.prepareStackTrace = l;
      }
      var I = e ? e.displayName || e.name : "", F = I ? U(I) : "";
      return typeof e == "function" && L.set(e, F), F;
    }
    function Le(e, r, n) {
      return de(e, !1);
    }
    function Be(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function B(e, r, n) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return de(e, Be(e));
      if (typeof e == "string")
        return U(e);
      switch (e) {
        case S:
          return U("Suspense");
        case _:
          return U("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case f:
            return Le(e.render);
          case w:
            return B(e.type, r, n);
          case x: {
            var t = e, l = t._payload, d = t._init;
            try {
              return B(d(l), r, n);
            } catch {
            }
          }
        }
      return "";
    }
    var N = Object.prototype.hasOwnProperty, ve = {}, pe = A.ReactDebugCurrentFrame;
    function J(e) {
      if (e) {
        var r = e._owner, n = B(e.type, e._source, r ? r.type : null);
        pe.setExtraStackFrame(n);
      } else
        pe.setExtraStackFrame(null);
    }
    function Je(e, r, n, t, l) {
      {
        var d = Function.call.bind(N);
        for (var o in e)
          if (d(e, o)) {
            var a = void 0;
            try {
              if (typeof e[o] != "function") {
                var y = Error((t || "React class") + ": " + n + " type `" + o + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[o] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw y.name = "Invariant Violation", y;
              }
              a = e[o](r, o, t, n, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (b) {
              a = b;
            }
            a && !(a instanceof Error) && (J(l), E("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", t || "React class", n, o, typeof a), J(null)), a instanceof Error && !(a.message in ve) && (ve[a.message] = !0, J(l), E("Failed %s type: %s", n, a.message), J(null));
          }
      }
    }
    var qe = Array.isArray;
    function X(e) {
      return qe(e);
    }
    function Ke(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, n = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return n;
      }
    }
    function Ge(e) {
      try {
        return me(e), !1;
      } catch {
        return !0;
      }
    }
    function me(e) {
      return "" + e;
    }
    function be(e) {
      if (Ge(e))
        return E("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Ke(e)), me(e);
    }
    var ge = A.ReactCurrentOwner, ze = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, he, _e;
    function Xe(e) {
      if (N.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function He(e) {
      if (N.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function Ze(e, r) {
      typeof e.ref == "string" && ge.current;
    }
    function Qe(e, r) {
      {
        var n = function() {
          he || (he = !0, E("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        n.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: n,
          configurable: !0
        });
      }
    }
    function er(e, r) {
      {
        var n = function() {
          _e || (_e = !0, E("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        n.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: n,
          configurable: !0
        });
      }
    }
    var rr = function(e, r, n, t, l, d, o) {
      var a = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: h,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: n,
        props: o,
        // Record the component responsible for creating this element.
        _owner: d
      };
      return a._store = {}, Object.defineProperty(a._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(a, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: t
      }), Object.defineProperty(a, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: l
      }), Object.freeze && (Object.freeze(a.props), Object.freeze(a)), a;
    };
    function nr(e, r, n, t, l) {
      {
        var d, o = {}, a = null, y = null;
        n !== void 0 && (be(n), a = "" + n), He(r) && (be(r.key), a = "" + r.key), Xe(r) && (y = r.ref, Ze(r, l));
        for (d in r)
          N.call(r, d) && !ze.hasOwnProperty(d) && (o[d] = r[d]);
        if (e && e.defaultProps) {
          var b = e.defaultProps;
          for (d in b)
            o[d] === void 0 && (o[d] = b[d]);
        }
        if (a || y) {
          var g = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          a && Qe(o, g), y && er(o, g);
        }
        return rr(e, a, y, l, t, ge.current, o);
      }
    }
    var H = A.ReactCurrentOwner, Re = A.ReactDebugCurrentFrame;
    function $(e) {
      if (e) {
        var r = e._owner, n = B(e.type, e._source, r ? r.type : null);
        Re.setExtraStackFrame(n);
      } else
        Re.setExtraStackFrame(null);
    }
    var Z;
    Z = !1;
    function Q(e) {
      return typeof e == "object" && e !== null && e.$$typeof === h;
    }
    function Ee() {
      {
        if (H.current) {
          var e = k(H.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function tr(e) {
      return "";
    }
    var ye = {};
    function ar(e) {
      {
        var r = Ee();
        if (!r) {
          var n = typeof e == "string" ? e : e.displayName || e.name;
          n && (r = `

Check the top-level render call using <` + n + ">.");
        }
        return r;
      }
    }
    function Te(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var n = ar(r);
        if (ye[n])
          return;
        ye[n] = !0;
        var t = "";
        e && e._owner && e._owner !== H.current && (t = " It was passed a child from " + k(e._owner.type) + "."), $(e), E('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', n, t), $(null);
      }
    }
    function Ce(e, r) {
      {
        if (typeof e != "object")
          return;
        if (X(e))
          for (var n = 0; n < e.length; n++) {
            var t = e[n];
            Q(t) && Te(t, r);
          }
        else if (Q(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var l = R(e);
          if (typeof l == "function" && l !== e.entries)
            for (var d = l.call(e), o; !(o = d.next()).done; )
              Q(o.value) && Te(o.value, r);
        }
      }
    }
    function or(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var n;
        if (typeof r == "function")
          n = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === f || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === w))
          n = r.propTypes;
        else
          return;
        if (n) {
          var t = k(r);
          Je(n, e.props, "prop", t, e);
        } else if (r.PropTypes !== void 0 && !Z) {
          Z = !0;
          var l = k(r);
          E("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", l || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && E("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function ir(e) {
      {
        for (var r = Object.keys(e.props), n = 0; n < r.length; n++) {
          var t = r[n];
          if (t !== "children" && t !== "key") {
            $(e), E("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", t), $(null);
            break;
          }
        }
        e.ref !== null && ($(e), E("Invalid attribute `ref` supplied to `React.Fragment`."), $(null));
      }
    }
    var we = {};
    function Oe(e, r, n, t, l, d) {
      {
        var o = Me(e);
        if (!o) {
          var a = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (a += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var y = tr();
          y ? a += y : a += Ee();
          var b;
          e === null ? b = "null" : X(e) ? b = "array" : e !== void 0 && e.$$typeof === h ? (b = "<" + (k(e.type) || "Unknown") + " />", a = " Did you accidentally export a JSX literal instead of a component?") : b = typeof e, E("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", b, a);
        }
        var g = nr(e, r, n, l, d);
        if (g == null)
          return g;
        if (o) {
          var j = r.children;
          if (j !== void 0)
            if (t)
              if (X(j)) {
                for (var I = 0; I < j.length; I++)
                  Ce(j[I], e);
                Object.freeze && Object.freeze(j);
              } else
                E("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Ce(j, e);
        }
        if (N.call(r, "key")) {
          var F = k(e), T = Object.keys(r).filter(function(dr) {
            return dr !== "key";
          }), ee = T.length > 0 ? "{key: someKey, " + T.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!we[F + ee]) {
            var fr = T.length > 0 ? "{" + T.join(": ..., ") + ": ...}" : "{}";
            E(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, ee, F, fr, F), we[F + ee] = !0;
          }
        }
        return e === u ? ir(g) : or(g), g;
      }
    }
    function sr(e, r, n) {
      return Oe(e, r, n, !0);
    }
    function ur(e, r, n) {
      return Oe(e, r, n, !1);
    }
    var cr = ur, lr = sr;
    Y.Fragment = u, Y.jsx = cr, Y.jsxs = lr;
  }()), Y;
}
var Se;
function gr() {
  return Se || (Se = 1, process.env.NODE_ENV === "production" ? q.exports = mr() : q.exports = br()), q.exports;
}
var C = gr();
const hr = {
  Transports: "#c6dbef",
  Résidentiel: "#fdb462",
  Tertiaire: "#ffed6f",
  Industrie: "#fb8072",
  Agriculture: "#b3de69",
  Déchets: "#bebada",
  UTCATF: "#d9d9d9",
  Cultures: "#F7DC6F"
}, wr = [
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
function _r(p, h) {
  const s = { sectors: [] };
  console.log("epciData:", p), console.log("leverPercentages:", h);
  for (const u of p.sectors) {
    const m = h.sectors.find(
      (v) => v.sector_snbc === u.name
    );
    if (!m) {
      console.warn(`Sector "${u.name}" not found in CSV data`);
      continue;
    }
    const c = [];
    let i = 0;
    switch (u.calculation_method) {
      case "difference_repartition":
        i = Rr(
          u,
          m,
          p.region,
          c
        );
        break;
      case "transposition_directe":
        i = Er(
          u,
          m,
          p.region,
          c
        );
        break;
      case "sum_transposition":
        i = yr(
          u,
          m,
          p,
          c
        );
        break;
      case "national_repartition":
        i = Tr(u, m, c);
        break;
      default:
        console.error(
          `Unknown calculation method: ${u.calculation_method}`
        );
    }
    console.log("levers:", c), c.length > 0 && s.sectors.push({
      name: u.name,
      total: i,
      levers: c
    });
  }
  return s;
}
function Rr(p, h, s, u) {
  const m = p.value2019 - p.target2030;
  let c = 0;
  for (const i of h.levers) {
    const v = i.regional_percentages[s];
    if (v === void 0) {
      console.warn(`Region "${s}" not found for lever "${i.name}"`);
      continue;
    }
    const f = m * (v / 100);
    u.push({
      name: i.name,
      contribution: f,
      color: i.color || void 0
    }), c += f;
  }
  return c;
}
function Er(p, h, s, u) {
  let m = 0;
  for (const c of h.levers) {
    const i = c.regional_percentages[s];
    if (i === void 0) {
      console.warn(`Region "${s}" not found for lever "${c.name}"`);
      continue;
    }
    const v = p.target2030 * (i / 100);
    u.push({
      name: c.name,
      contribution: v,
      color: c.color || void 0
    }), m += v;
  }
  return m;
}
function yr(p, h, s, u) {
  if (!p.source_sectors)
    return console.error(`Missing source_sectors for sector "${p.name}"`), 0;
  let m = 0;
  for (const i of p.source_sectors) {
    const v = s.sectors.find((f) => f.name === i);
    v && (m += v.target2030);
  }
  let c = 0;
  for (const i of h.levers) {
    const v = i.regional_percentages[s.region];
    if (v === void 0) {
      console.warn(
        `Region "${s.region}" not found for lever "${i.name}"`
      );
      continue;
    }
    const f = m * (v / 100);
    u.push({
      name: i.name,
      contribution: f,
      color: i.color || void 0
    }), c += f;
  }
  return c;
}
function Tr(p, h, s) {
  const u = p.value2019 - p.target2030;
  let m = 0;
  for (const c of h.levers) {
    const i = Object.values(c.regional_percentages)[0];
    if (i === void 0) {
      console.warn(`No percentage found for lever "${c.name}"`);
      continue;
    }
    const v = u * (i / 100);
    s.push({
      name: c.name,
      contribution: v,
      color: c.color || void 0
    }), m += v;
  }
  return m;
}
const Pe = "#74B9FF", Or = ({
  epciData: p,
  leverPercentages: h,
  selectedSector: s,
  selectedLever: u,
  resetZoom: m,
  className: c = "",
  style: i = {}
}) => {
  const [v, f] = re([]), [S, _] = re(
    "overview"
  ), [w, x] = re(null), P = hr, V = vr(() => {
    try {
      return x(null), _r(p, h);
    } catch (O) {
      return x(O?.message ?? "Unknown error"), console.error("Error processing Mondrian data:", O), { sectors: [] };
    }
  }, [p, h]);
  return pr(() => {
    if (!s) {
      _("overview"), f([]);
      return;
    }
    const O = V.sectors.find(
      (R) => R.name === s
    );
    O && (u ? (f([
      {
        name: s,
        value: Math.abs(O.total),
        realValue: O.total,
        children: O.levers.map((R) => ({
          name: R.name,
          value: Math.abs(R.contribution),
          realValue: R.contribution,
          sector: s,
          lever: R.name,
          contribution: R.contribution,
          color: R.color || P[s] || Pe,
          selected: R.name === u
        }))
      }
    ]), _("sector")) : (f([
      {
        name: s,
        value: Math.abs(O.total),
        realValue: O.total,
        children: O.levers.map((R) => ({
          name: R.name,
          value: Math.abs(R.contribution),
          realValue: R.contribution,
          sector: s,
          lever: R.name,
          contribution: R.contribution,
          color: R.color || P[s] || Pe
        }))
      }
    ]), _("sector")));
  }, [s, u, V, P]), w ? /* @__PURE__ */ C.jsxs("div", { className: "mondrian-error", children: [
    /* @__PURE__ */ C.jsx("h4", { children: "Data processing error" }),
    /* @__PURE__ */ C.jsx("p", { children: w }),
    /* @__PURE__ */ C.jsx("p", { className: "mondrian-error-hint", children: "Please verify the mapping between EPCI sectors and lever percentages." })
  ] }) : /* @__PURE__ */ C.jsxs(
    "div",
    {
      className: `mondrian-treemap mondrian-treemap-container ${c}`,
      style: i,
      children: [
        (S === "sector" || s) && /* @__PURE__ */ C.jsxs("div", { className: "mondrian-breadcrumb", children: [
          /* @__PURE__ */ C.jsx(
            "span",
            {
              className: "mondrian-breadcrumb-item clickable",
              onClick: () => {
                _("overview"), f([]), m?.();
              },
              children: "Overview"
            }
          ),
          /* @__PURE__ */ C.jsx("span", { className: "mondrian-breadcrumb-separator", children: "›" }),
          /* @__PURE__ */ C.jsx("span", { className: "mondrian-breadcrumb-item", children: s }),
          u && /* @__PURE__ */ C.jsxs(C.Fragment, { children: [
            /* @__PURE__ */ C.jsx("span", { className: "mondrian-breadcrumb-separator", children: "›" }),
            /* @__PURE__ */ C.jsx("span", { className: "mondrian-breadcrumb-item", children: u })
          ] })
        ] }),
        /* @__PURE__ */ C.jsx("div", { children: "Mondrian Treemap" })
      ]
    }
  );
};
export {
  wr as LEVER_COLORS,
  Or as MondrianTreemap,
  hr as SECTOR_COLORS,
  _r as calculateSNBCData
};
