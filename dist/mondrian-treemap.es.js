import { jsxs as j, jsx as O, Fragment as ae } from "react/jsx-runtime";
import ie, { PureComponent as se, useState as N, useMemo as ce, useCallback as F, useEffect as ue } from "react";
import * as le from "echarts";
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
var k = function(o, t) {
  return k = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e, r) {
    e.__proto__ = r;
  } || function(e, r) {
    for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
  }, k(o, t);
};
function te(o, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
  k(o, t);
  function e() {
    this.constructor = o;
  }
  o.prototype = t === null ? Object.create(t) : (e.prototype = t.prototype, new e());
}
var P = function() {
  return P = Object.assign || function(t) {
    for (var e, r = 1, n = arguments.length; r < n; r++) {
      e = arguments[r];
      for (var a in e) Object.prototype.hasOwnProperty.call(e, a) && (t[a] = e[a]);
    }
    return t;
  }, P.apply(this, arguments);
};
function de(o) {
  return o && o.__esModule && Object.prototype.hasOwnProperty.call(o, "default") ? o.default : o;
}
var C = {}, w = {}, $ = {}, U;
function fe() {
  return U || (U = 1, function(o) {
    Object.defineProperty(o, "__esModule", {
      value: !0
    }), o.default = void 0;
    var t = 1, e = function() {
      return "".concat(t++);
    };
    o.default = e;
  }($)), $;
}
var M = {}, q = {}, x = {}, W;
function re() {
  return W || (W = 1, function(o) {
    Object.defineProperty(o, "__esModule", {
      value: !0
    }), o.default = void 0;
    var t = function(r) {
      var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 60, a = null;
      return function() {
        for (var i = this, s = arguments.length, c = new Array(s), v = 0; v < s; v++)
          c[v] = arguments[v];
        clearTimeout(a), a = setTimeout(function() {
          r.apply(i, c);
        }, n);
      };
    };
    o.default = t;
  }(x)), x;
}
var E = {}, K;
function L() {
  if (K) return E;
  K = 1, Object.defineProperty(E, "__esModule", {
    value: !0
  }), E.SizeSensorId = E.SensorTabIndex = E.SensorClassName = void 0;
  var o = "size-sensor-id";
  E.SizeSensorId = o;
  var t = "size-sensor-object";
  E.SensorClassName = t;
  var e = "-1";
  return E.SensorTabIndex = e, E;
}
var G;
function ve() {
  if (G) return q;
  G = 1, Object.defineProperty(q, "__esModule", {
    value: !0
  }), q.createSensor = void 0;
  var o = e(re()), t = L();
  function e(n) {
    return n && n.__esModule ? n : { default: n };
  }
  var r = function(a, i) {
    var s = void 0, c = [], v = function() {
      getComputedStyle(a).position === "static" && (a.style.position = "relative");
      var u = document.createElement("object");
      return u.onload = function() {
        u.contentDocument.defaultView.addEventListener("resize", h), h();
      }, u.style.display = "block", u.style.position = "absolute", u.style.top = "0", u.style.left = "0", u.style.height = "100%", u.style.width = "100%", u.style.overflow = "hidden", u.style.pointerEvents = "none", u.style.zIndex = "-1", u.style.opacity = "0", u.setAttribute("class", t.SensorClassName), u.setAttribute("tabindex", t.SensorTabIndex), u.type = "text/html", a.appendChild(u), u.data = "about:blank", u;
    }, h = (0, o.default)(function() {
      c.forEach(function(y) {
        y(a);
      });
    }), b = function(u) {
      s || (s = v()), c.indexOf(u) === -1 && c.push(u);
    }, g = function() {
      s && s.parentNode && (s.contentDocument && s.contentDocument.defaultView.removeEventListener("resize", h), s.parentNode.removeChild(s), a.removeAttribute(t.SizeSensorId), s = void 0, c = [], i && i());
    }, D = function(u) {
      var _ = c.indexOf(u);
      _ !== -1 && c.splice(_, 1), c.length === 0 && s && g();
    };
    return {
      element: a,
      bind: b,
      destroy: g,
      unbind: D
    };
  };
  return q.createSensor = r, q;
}
var I = {}, H;
function he() {
  if (H) return I;
  H = 1, Object.defineProperty(I, "__esModule", {
    value: !0
  }), I.createSensor = void 0;
  var o = L(), t = e(re());
  function e(n) {
    return n && n.__esModule ? n : { default: n };
  }
  var r = function(a, i) {
    var s = void 0, c = [], v = (0, t.default)(function() {
      c.forEach(function(y) {
        y(a);
      });
    }), h = function() {
      var u = new ResizeObserver(v);
      return u.observe(a), v(), u;
    }, b = function(u) {
      s || (s = h()), c.indexOf(u) === -1 && c.push(u);
    }, g = function() {
      s.disconnect(), c = [], s = void 0, a.removeAttribute(o.SizeSensorId), i && i();
    }, D = function(u) {
      var _ = c.indexOf(u);
      _ !== -1 && c.splice(_, 1), c.length === 0 && s && g();
    };
    return {
      element: a,
      bind: b,
      destroy: g,
      unbind: D
    };
  };
  return I.createSensor = r, I;
}
var J;
function pe() {
  if (J) return M;
  J = 1, Object.defineProperty(M, "__esModule", {
    value: !0
  }), M.createSensor = void 0;
  var o = ve(), t = he(), e = typeof ResizeObserver < "u" ? t.createSensor : o.createSensor;
  return M.createSensor = e, M;
}
var Q;
function me() {
  if (Q) return w;
  Q = 1, Object.defineProperty(w, "__esModule", {
    value: !0
  }), w.removeSensor = w.getSensor = w.Sensors = void 0;
  var o = r(fe()), t = pe(), e = L();
  function r(c) {
    return c && c.__esModule ? c : { default: c };
  }
  var n = {};
  w.Sensors = n;
  function a(c) {
    c && n[c] && delete n[c];
  }
  var i = function(v) {
    var h = v.getAttribute(e.SizeSensorId);
    if (h && n[h])
      return n[h];
    var b = (0, o.default)();
    v.setAttribute(e.SizeSensorId, b);
    var g = (0, t.createSensor)(v, function() {
      return a(b);
    });
    return n[b] = g, g;
  };
  w.getSensor = i;
  var s = function(v) {
    var h = v.element.getAttribute(e.SizeSensorId);
    v.destroy(), a(h);
  };
  return w.removeSensor = s, w;
}
var X;
function be() {
  if (X) return C;
  X = 1, Object.defineProperty(C, "__esModule", {
    value: !0
  }), C.ver = C.clear = C.bind = void 0;
  var o = me(), t = function(a, i) {
    var s = (0, o.getSensor)(a);
    return s.bind(i), function() {
      s.unbind(i);
    };
  };
  C.bind = t;
  var e = function(a) {
    var i = (0, o.getSensor)(a);
    (0, o.removeSensor)(i);
  };
  C.clear = e;
  var r = "1.0.2";
  return C.ver = r, C;
}
var Y = be();
function Z(o, t) {
  var e = {};
  return t.forEach(function(r) {
    e[r] = o[r];
  }), e;
}
function T(o) {
  return typeof o == "function";
}
function ge(o) {
  return typeof o == "string";
}
var A, ee;
function ye() {
  return ee || (ee = 1, A = function o(t, e) {
    if (t === e) return !0;
    if (t && e && typeof t == "object" && typeof e == "object") {
      if (t.constructor !== e.constructor) return !1;
      var r, n, a;
      if (Array.isArray(t)) {
        if (r = t.length, r != e.length) return !1;
        for (n = r; n-- !== 0; )
          if (!o(t[n], e[n])) return !1;
        return !0;
      }
      if (t.constructor === RegExp) return t.source === e.source && t.flags === e.flags;
      if (t.valueOf !== Object.prototype.valueOf) return t.valueOf() === e.valueOf();
      if (t.toString !== Object.prototype.toString) return t.toString() === e.toString();
      if (a = Object.keys(t), r = a.length, r !== Object.keys(e).length) return !1;
      for (n = r; n-- !== 0; )
        if (!Object.prototype.hasOwnProperty.call(e, a[n])) return !1;
      for (n = r; n-- !== 0; ) {
        var i = a[n];
        if (!o(t[i], e[i])) return !1;
      }
      return !0;
    }
    return t !== t && e !== e;
  }), A;
}
var _e = ye();
const z = /* @__PURE__ */ de(_e);
var Se = (
  /** @class */
  function(o) {
    te(t, o);
    function t(e) {
      var r = o.call(this, e) || this;
      return r.echarts = e.echarts, r.ele = null, r.isInitialResize = !0, r;
    }
    return t.prototype.componentDidMount = function() {
      this.renderNewEcharts();
    }, t.prototype.componentDidUpdate = function(e) {
      var r = this.props.shouldSetOption;
      if (!(T(r) && !r(e, this.props))) {
        if (!z(e.theme, this.props.theme) || !z(e.opts, this.props.opts) || !z(e.onEvents, this.props.onEvents)) {
          this.dispose(), this.renderNewEcharts();
          return;
        }
        var n = ["option", "notMerge", "lazyUpdate", "showLoading", "loadingOption"];
        z(Z(this.props, n), Z(e, n)) || this.updateEChartsOption(), (!z(e.style, this.props.style) || !z(e.className, this.props.className)) && this.resize();
      }
    }, t.prototype.componentWillUnmount = function() {
      this.dispose();
    }, t.prototype.getEchartsInstance = function() {
      return this.echarts.getInstanceByDom(this.ele) || this.echarts.init(this.ele, this.props.theme, this.props.opts);
    }, t.prototype.dispose = function() {
      if (this.ele) {
        try {
          Y.clear(this.ele);
        } catch (e) {
          console.warn(e);
        }
        this.echarts.dispose(this.ele);
      }
    }, t.prototype.renderNewEcharts = function() {
      var e = this, r = this.props, n = r.onEvents, a = r.onChartReady, i = this.updateEChartsOption();
      this.bindEvents(i, n || {}), T(a) && a(i), this.ele && Y.bind(this.ele, function() {
        e.resize();
      });
    }, t.prototype.bindEvents = function(e, r) {
      function n(i, s) {
        ge(i) && T(s) && e.on(i, function(c) {
          s(c, e);
        });
      }
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && n(a, r[a]);
    }, t.prototype.updateEChartsOption = function() {
      var e = this.props, r = e.option, n = e.notMerge, a = n === void 0 ? !1 : n, i = e.lazyUpdate, s = i === void 0 ? !1 : i, c = e.showLoading, v = e.loadingOption, h = v === void 0 ? null : v, b = this.getEchartsInstance();
      return b.setOption(r, a, s), c ? b.showLoading(h) : b.hideLoading(), b;
    }, t.prototype.resize = function() {
      var e = this.getEchartsInstance();
      if (!this.isInitialResize)
        try {
          e.resize();
        } catch (r) {
          console.warn(r);
        }
      this.isInitialResize = !1;
    }, t.prototype.render = function() {
      var e = this, r = this.props, n = r.style, a = r.className, i = a === void 0 ? "" : a, s = P({ height: 300 }, n);
      return ie.createElement("div", { ref: function(c) {
        e.ele = c;
      }, style: s, className: "echarts-for-react " + i });
    }, t;
  }(se)
), Oe = (
  /** @class */
  function(o) {
    te(t, o);
    function t(e) {
      var r = o.call(this, e) || this;
      return r.echarts = le, r;
    }
    return t;
  }(Se)
);
const Ce = {
  Transports: "#c6dbef",
  Résidentiel: "#fdb462",
  Tertiaire: "#ffed6f",
  Industrie: "#fb8072",
  Agriculture: "#b3de69",
  Déchets: "#bebada",
  UTCATF: "#d9d9d9",
  Cultures: "#F7DC6F"
}, Ie = [
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
function we(o, t) {
  const e = { sectors: [] };
  console.log("epciData:", o), console.log("leverPercentages:", t);
  for (const r of o.sectors) {
    const n = t.sectors.find(
      (s) => s.sector_snbc === r.name
    );
    if (!n) {
      console.warn(`Sector "${r.name}" not found in CSV data`);
      continue;
    }
    const a = [];
    let i = 0;
    switch (r.calculation_method) {
      case "difference_repartition":
        i = Ee(
          r,
          n,
          o.region,
          a
        );
        break;
      case "transposition_directe":
        i = Re(
          r,
          n,
          o.region,
          a
        );
        break;
      case "sum_transposition":
        i = De(
          r,
          n,
          o,
          a
        );
        break;
      case "national_repartition":
        i = ze(r, n, a);
        break;
      default:
        console.error(
          `Unknown calculation method: ${r.calculation_method}`
        );
    }
    console.log("levers:", a), a.length > 0 && e.sectors.push({
      name: r.name,
      total: i,
      levers: a
    });
  }
  return e;
}
function Ee(o, t, e, r) {
  const n = o.value2019 - o.target2030;
  let a = 0;
  for (const i of t.levers) {
    const s = i.regional_percentages[e];
    if (s === void 0) {
      console.warn(`Region "${e}" not found for lever "${i.name}"`);
      continue;
    }
    const c = n * (s / 100);
    r.push({
      name: i.name,
      contribution: c,
      color: i.color || void 0
    }), a += c;
  }
  return a;
}
function Re(o, t, e, r) {
  let n = 0;
  for (const a of t.levers) {
    const i = a.regional_percentages[e];
    if (i === void 0) {
      console.warn(`Region "${e}" not found for lever "${a.name}"`);
      continue;
    }
    const s = o.target2030 * (i / 100);
    r.push({
      name: a.name,
      contribution: s,
      color: a.color || void 0
    }), n += s;
  }
  return n;
}
function De(o, t, e, r) {
  if (!o.source_sectors)
    return console.error(`Missing source_sectors for sector "${o.name}"`), 0;
  let n = 0;
  for (const i of o.source_sectors) {
    const s = e.sectors.find((c) => c.name === i);
    s && (n += s.target2030);
  }
  let a = 0;
  for (const i of t.levers) {
    const s = i.regional_percentages[e.region];
    if (s === void 0) {
      console.warn(
        `Region "${e.region}" not found for lever "${i.name}"`
      );
      continue;
    }
    const c = n * (s / 100);
    r.push({
      name: i.name,
      contribution: c,
      color: i.color || void 0
    }), a += c;
  }
  return a;
}
function ze(o, t, e) {
  const r = o.value2019 - o.target2030;
  let n = 0;
  for (const a of t.levers) {
    const i = Object.values(a.regional_percentages)[0];
    if (i === void 0) {
      console.warn(`No percentage found for lever "${a.name}"`);
      continue;
    }
    const s = r * (i / 100);
    e.push({
      name: a.name,
      contribution: s,
      color: a.color || void 0
    }), n += s;
  }
  return n;
}
const R = "#74B9FF", Ve = ({
  epciData: o,
  leverPercentages: t,
  selectedSector: e,
  selectedLever: r,
  onLeverSelected: n,
  onSectorSelected: a,
  resetZoom: i,
  className: s = "",
  style: c = {}
}) => {
  const [v, h] = N([]), [b, g] = N(
    "overview"
  ), [D, y] = N(null), u = Ce, _ = ce(() => {
    try {
      return y(null), we(o, t);
    } catch (d) {
      return y(d?.message ?? "Unknown error"), console.error("Error processing Mondrian data:", d), { sectors: [] };
    }
  }, [o, t]), B = F(() => b === "sector" && v.length > 0 ? v : _.sectors.map((d) => ({
    name: d.name,
    value: Math.abs(d.total),
    realValue: d.total,
    itemStyle: { color: u[d.name] || R },
    children: d.levers.map((l) => ({
      name: l.name,
      value: Math.abs(l.contribution),
      realValue: l.contribution,
      sector: d.name,
      lever: l.name,
      contribution: l.contribution,
      color: l.color || u[d.name] || R,
      itemStyle: {
        color: l.color || u[d.name] || R
      }
    }))
  })), [_, b, v, u]);
  ue(() => {
    if (!e) {
      g("overview"), h([]);
      return;
    }
    const d = _.sectors.find(
      (l) => l.name === e
    );
    d && (r ? (h([
      {
        name: e,
        value: Math.abs(d.total),
        realValue: d.total,
        children: d.levers.map((l) => ({
          name: l.name,
          value: Math.abs(l.contribution),
          realValue: l.contribution,
          sector: e,
          lever: l.name,
          contribution: l.contribution,
          color: l.color || u[e] || R,
          selected: l.name === r
        }))
      }
    ]), g("sector")) : (h([
      {
        name: e,
        value: Math.abs(d.total),
        realValue: d.total,
        children: d.levers.map((l) => ({
          name: l.name,
          value: Math.abs(l.contribution),
          realValue: l.contribution,
          sector: e,
          lever: l.name,
          contribution: l.contribution,
          color: l.color || u[e] || R
        }))
      }
    ]), g("sector")));
  }, [e, r, _, u]);
  const ne = F(
    (d) => {
      if (d?.data?.sector && d?.data?.lever) {
        const l = d.data.sector, S = d.data.lever, p = d.data.contribution, f = _.sectors.find(
          (m) => m.name === l
        );
        if (!f) return;
        h([
          {
            name: l,
            value: Math.abs(f.total),
            realValue: f.total,
            children: f.levers.map((m) => ({
              name: m.name,
              value: Math.abs(m.contribution),
              realValue: m.contribution,
              sector: l,
              lever: m.name,
              contribution: m.contribution,
              color: m.color || u[l] || R,
              selected: m.name === S
            }))
          }
        ]), g("sector"), n?.(l, S, p);
      } else if (d?.data?.name && !d?.data?.sector) {
        const l = d.data.name, S = _.sectors.find(
          (p) => p.name === l
        );
        h([
          {
            name: l,
            value: Math.abs(S?.total ?? 0),
            realValue: S?.total ?? 0,
            children: S?.levers.map((p) => ({
              name: p.name,
              value: Math.abs(p.contribution),
              realValue: p.contribution,
              sector: l,
              lever: p.name,
              contribution: p.contribution,
              color: p.color || u[l] || R
            })) ?? []
          }
        ]), g("sector"), a?.(l);
      }
    },
    [_, n, a, u]
  ), oe = F(() => {
    const d = B();
    function l(p) {
      return p.map((f) => f.children ? { ...f, children: l(f.children) } : f.selected ? {
        ...f,
        itemStyle: {
          ...f.itemStyle,
          borderColor: "#90caf9",
          borderWidth: 1,
          shadowColor: "#90caf9",
          shadowBlur: 12
        },
        opacity: 1
      } : { ...f, opacity: 0.5 });
    }
    let S = d;
    return d.length === 1 && d[0].children && d[0].children.some((p) => p.selected) && (S = [
      {
        ...d[0],
        children: l(d[0].children)
      }
    ]), {
      tooltip: {
        formatter: function(p) {
          const f = p.data;
          let m = "";
          if (f.sector && f.lever) {
            m += `<strong>${f.sector}</strong><br/>`, m += `<strong>${f.lever}</strong><br/>`;
            const V = f.realValue !== void 0 ? f.realValue : f.contribution;
            V !== void 0 && f.realValue !== 0 && (m += `Target: ${V.toFixed(1)} ktCO₂e`);
          } else
            m += `<strong>${f.name}</strong><br/>`, f.realValue !== void 0 && (m += `Total: ${f.realValue.toFixed(1)} ktCO₂e`);
          return m;
        },
        backgroundColor: "rgba(255, 255, 255, 0.95)",
        borderColor: "#ccc",
        borderWidth: 1,
        textStyle: { color: "#333" }
      },
      series: [
        {
          type: "treemap",
          data: S,
          roam: !1,
          nodeClick: "drillDown",
          label: {
            show: !0,
            formatter: function(p) {
              const f = p.data;
              if (f.sector && f.lever) {
                const V = f.realValue !== void 0 ? f.realValue : f.contribution;
                return `${f.lever}

${V.toFixed(1)} ktCO₂e`;
              }
              const m = f.realValue !== void 0 ? f.realValue : f.value;
              return `${f.name}

${m.toFixed(1)} ktCO₂e`;
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
  }, [B]);
  return D ? /* @__PURE__ */ j("div", { className: "mondrian-error", children: [
    /* @__PURE__ */ O("h4", { children: "Data processing error" }),
    /* @__PURE__ */ O("p", { children: D }),
    /* @__PURE__ */ O("p", { className: "mondrian-error-hint", children: "Please verify the mapping between EPCI sectors and lever percentages." })
  ] }) : /* @__PURE__ */ j(
    "div",
    {
      className: `mondrian-treemap mondrian-treemap-container ${s}`,
      style: c,
      children: [
        (b === "sector" || e) && /* @__PURE__ */ j("div", { className: "mondrian-breadcrumb", children: [
          /* @__PURE__ */ O(
            "span",
            {
              className: "mondrian-breadcrumb-item clickable",
              onClick: () => {
                g("overview"), h([]), i?.();
              },
              children: "Overview"
            }
          ),
          /* @__PURE__ */ O("span", { className: "mondrian-breadcrumb-separator", children: "›" }),
          /* @__PURE__ */ O("span", { className: "mondrian-breadcrumb-item", children: e }),
          r && /* @__PURE__ */ j(ae, { children: [
            /* @__PURE__ */ O("span", { className: "mondrian-breadcrumb-separator", children: "›" }),
            /* @__PURE__ */ O("span", { className: "mondrian-breadcrumb-item", children: r })
          ] })
        ] }),
        /* @__PURE__ */ O(
          Oe,
          {
            option: oe(),
            className: `mondrian-treemap-chart ${b !== "overview" ? "with-breadcrumb" : ""}`,
            style: { height: "100%", width: "100%" },
            onEvents: {
              click: ne
            }
          }
        )
      ]
    }
  );
};
export {
  Ie as LEVER_COLORS,
  Ve as MondrianTreemap,
  Ce as SECTOR_COLORS,
  we as calculateSNBCData
};
