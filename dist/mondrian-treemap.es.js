import { jsxs as f, jsx as m, Fragment as C } from "react/jsx-runtime";
import { useState as v, useMemo as D, useEffect as F } from "react";
const N = {
  Transports: "#c6dbef",
  Résidentiel: "#fdb462",
  Tertiaire: "#ffed6f",
  Industrie: "#fb8072",
  Agriculture: "#b3de69",
  Déchets: "#bebada",
  UTCATF: "#d9d9d9",
  Cultures: "#F7DC6F"
}, O = [
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
function $(t, i) {
  const e = { sectors: [] };
  console.log("epciData:", t), console.log("leverPercentages:", i);
  for (const r of t.sectors) {
    const a = i.sectors.find(
      (c) => c.sector_snbc === r.name
    );
    if (!a) {
      console.warn(`Sector "${r.name}" not found in CSV data`);
      continue;
    }
    const n = [];
    let o = 0;
    switch (r.calculation_method) {
      case "difference_repartition":
        o = R(
          r,
          a,
          t.region,
          n
        );
        break;
      case "transposition_directe":
        o = T(
          r,
          a,
          t.region,
          n
        );
        break;
      case "sum_transposition":
        o = M(
          r,
          a,
          t,
          n
        );
        break;
      case "national_repartition":
        o = V(r, a, n);
        break;
      default:
        console.error(
          `Unknown calculation method: ${r.calculation_method}`
        );
    }
    console.log("levers:", n), n.length > 0 && e.sectors.push({
      name: r.name,
      total: o,
      levers: n
    });
  }
  return e;
}
function R(t, i, e, r) {
  const a = t.value2019 - t.target2030;
  let n = 0;
  for (const o of i.levers) {
    const c = o.regional_percentages[e];
    if (c === void 0) {
      console.warn(`Region "${e}" not found for lever "${o.name}"`);
      continue;
    }
    const l = a * (c / 100);
    r.push({
      name: o.name,
      contribution: l,
      color: o.color || void 0
    }), n += l;
  }
  return n;
}
function T(t, i, e, r) {
  let a = 0;
  for (const n of i.levers) {
    const o = n.regional_percentages[e];
    if (o === void 0) {
      console.warn(`Region "${e}" not found for lever "${n.name}"`);
      continue;
    }
    const c = t.target2030 * (o / 100);
    r.push({
      name: n.name,
      contribution: c,
      color: n.color || void 0
    }), a += c;
  }
  return a;
}
function M(t, i, e, r) {
  if (!t.source_sectors)
    return console.error(`Missing source_sectors for sector "${t.name}"`), 0;
  let a = 0;
  for (const o of t.source_sectors) {
    const c = e.sectors.find((l) => l.name === o);
    c && (a += c.target2030);
  }
  let n = 0;
  for (const o of i.levers) {
    const c = o.regional_percentages[e.region];
    if (c === void 0) {
      console.warn(
        `Region "${e.region}" not found for lever "${o.name}"`
      );
      continue;
    }
    const l = a * (c / 100);
    r.push({
      name: o.name,
      contribution: l,
      color: o.color || void 0
    }), n += l;
  }
  return n;
}
function V(t, i, e) {
  const r = t.value2019 - t.target2030;
  let a = 0;
  for (const n of i.levers) {
    const o = Object.values(n.regional_percentages)[0];
    if (o === void 0) {
      console.warn(`No percentage found for lever "${n.name}"`);
      continue;
    }
    const c = r * (o / 100);
    e.push({
      name: n.name,
      contribution: c,
      color: n.color || void 0
    }), a += c;
  }
  return a;
}
const _ = "#74B9FF", B = ({
  epciData: t,
  leverPercentages: i,
  selectedSector: e,
  selectedLever: r,
  resetZoom: a,
  className: n = "",
  style: o = {}
}) => {
  const [c, l] = v([]), [w, d] = v(
    "overview"
  ), [p, g] = v(null), b = N, h = D(() => {
    try {
      return g(null), $(t, i);
    } catch (u) {
      return g(u?.message ?? "Unknown error"), console.error("Error processing Mondrian data:", u), { sectors: [] };
    }
  }, [t, i]);
  return F(() => {
    if (!e) {
      d("overview"), l([]);
      return;
    }
    const u = h.sectors.find(
      (s) => s.name === e
    );
    u && (r ? (l([
      {
        name: e,
        value: Math.abs(u.total),
        realValue: u.total,
        children: u.levers.map((s) => ({
          name: s.name,
          value: Math.abs(s.contribution),
          realValue: s.contribution,
          sector: e,
          lever: s.name,
          contribution: s.contribution,
          color: s.color || b[e] || _,
          selected: s.name === r
        }))
      }
    ]), d("sector")) : (l([
      {
        name: e,
        value: Math.abs(u.total),
        realValue: u.total,
        children: u.levers.map((s) => ({
          name: s.name,
          value: Math.abs(s.contribution),
          realValue: s.contribution,
          sector: e,
          lever: s.name,
          contribution: s.contribution,
          color: s.color || b[e] || _
        }))
      }
    ]), d("sector")));
  }, [e, r, h, b]), p ? /* @__PURE__ */ f("div", { className: "mondrian-error", children: [
    /* @__PURE__ */ m("h4", { children: "Data processing error" }),
    /* @__PURE__ */ m("p", { children: p }),
    /* @__PURE__ */ m("p", { className: "mondrian-error-hint", children: "Please verify the mapping between EPCI sectors and lever percentages." })
  ] }) : /* @__PURE__ */ f(
    "div",
    {
      className: `mondrian-treemap mondrian-treemap-container ${n}`,
      style: o,
      children: [
        (w === "sector" || e) && /* @__PURE__ */ f("div", { className: "mondrian-breadcrumb", children: [
          /* @__PURE__ */ m(
            "span",
            {
              className: "mondrian-breadcrumb-item clickable",
              onClick: () => {
                d("overview"), l([]), a?.();
              },
              children: "Overview"
            }
          ),
          /* @__PURE__ */ m("span", { className: "mondrian-breadcrumb-separator", children: "›" }),
          /* @__PURE__ */ m("span", { className: "mondrian-breadcrumb-item", children: e }),
          r && /* @__PURE__ */ f(C, { children: [
            /* @__PURE__ */ m("span", { className: "mondrian-breadcrumb-separator", children: "›" }),
            /* @__PURE__ */ m("span", { className: "mondrian-breadcrumb-item", children: r })
          ] })
        ] }),
        /* @__PURE__ */ m("div", { children: "Mondrian Treemap" })
      ]
    }
  );
};
export {
  O as LEVER_COLORS,
  B as MondrianTreemap,
  N as SECTOR_COLORS,
  $ as calculateSNBCData
};
