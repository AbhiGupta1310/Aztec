"use strict";
(() => {
  var a = "fs-attributes";
  var m = "autovideo";
  var E = "cmsattribute";
  var y = async (...o) => {
    var i;
    let e = [];
    for (let s of o) {
      let t = await ((i = window.fsAttributes[s]) == null ? void 0 : i.loading);
      e.push(t);
    }
    return e;
  };
  var l = () => {};
  function b(o, e, i, s) {
    return o
      ? (o.addEventListener(e, i, s), () => o.removeEventListener(e, i, s))
      : l;
  }
  function x(o, e, i) {
    var t;
    let s = window.fsAttributes[o];
    return (s.destroy = i || l), (t = s.resolve) == null || t.call(s, e), e;
  }
  var g = `${a}-support`,
    B =
      "https://cdn.jsdelivr.net/npm/@finsweet/attributes-support@1/support.js",
    R = async () => {
      let { fsAttributes: o, location: e } = window,
        { host: i, searchParams: s } = new URL(e.href);
      o.support || (o.support = {});
      let { support: t } = o;
      if (!i.includes("webflow.io") || !s.has(g)) return !1;
      if (t.import) return t.import;
      try {
        t.import = new Promise((r, n) => {
          let c = document.createElement("script");
          (c.src = B),
            (c.onload = () => r(!0)),
            (c.onerror = n),
            document.head.append(c);
        });
      } catch (r) {
        return !1;
      }
      return t.import;
    };
  var I = (o) => {
    let e = (s, t, r) => {
      let n = o[s],
        { key: c, values: A } = n,
        u;
      if (!t) return `[${c}]`;
      let d = A == null ? void 0 : A[t];
      typeof d == "string"
        ? (u = d)
        : (u = d(r && "instanceIndex" in r ? r.instanceIndex : void 0));
      let T = r && "caseInsensitive" in r && r.caseInsensitive ? "i" : "";
      if (!(r != null && r.operator)) return `[${c}="${u}"${T}]`;
      switch (r.operator) {
        case "prefixed":
          return `[${c}^="${u}"${T}]`;
        case "suffixed":
          return `[${c}$="${u}"${T}]`;
        case "contains":
          return `[${c}*="${u}"${T}]`;
      }
    };
    function i(s, t) {
      let r = e("element", s, t),
        n = (t == null ? void 0 : t.scope) || document;
      return t != null && t.all
        ? [...n.querySelectorAll(r)]
        : n.querySelector(r);
    }
    return [e, i];
  };
  var p = {
      preventLoad: { key: `${a}-preventload` },
      debugMode: { key: `${a}-debug` },
      src: { key: "src", values: { finsweet: "@finsweet/attributes" } },
      dev: { key: `${a}-dev` },
    },
    [f, z] = I(p);
  var _ = (o) => {
    let { currentScript: e } = document,
      i = {};
    if (!e) return { attributes: i, preventsLoad: !1 };
    let t = {
      preventsLoad: typeof e.getAttribute(p.preventLoad.key) == "string",
      attributes: i,
    };
    for (let r in o) {
      let n = e.getAttribute(o[r]);
      t.attributes[r] = n;
    }
    return t;
  };
  var v = ({ scriptAttributes: o, attributeKey: e, version: i, init: s }) => {
      var c;
      V(), (c = window.fsAttributes)[e] || (c[e] = {});
      let { preventsLoad: t, attributes: r } = _(o),
        n = window.fsAttributes[e];
      (n.version = i),
        (n.init = s),
        t ||
          (window.Webflow || (window.Webflow = []),
          window.Webflow.push(() => s(r)));
    },
    V = () => {
      let o = h();
      if (window.fsAttributes && !Array.isArray(window.fsAttributes)) {
        S(window.fsAttributes, o);
        return;
      }
      let e = {
        cms: {},
        push(...i) {
          var s, t;
          for (let [r, n] of i)
            (t = (s = this[r]) == null ? void 0 : s.loading) == null ||
              t.then(n);
        },
        destroy() {
          var i, s;
          for (let t of o)
            (s = (i = window.fsAttributes[t]) == null ? void 0 : i.destroy) ==
              null || s.call(i);
        },
      };
      S(e, o),
        C(e),
        (window.fsAttributes = e),
        (window.FsAttributes = window.fsAttributes),
        R();
    },
    h = () => {
      let o = f("src", "finsweet", { operator: "contains" }),
        e = f("dev");
      return [...document.querySelectorAll(`script${o}, script${e}`)].reduce(
        (t, r) => {
          var c;
          let n =
            r.getAttribute(p.dev.key) ||
            ((c = r.src.match(/[\w-. ]+(?=(\.js)$)/)) == null ? void 0 : c[0]);
          return n && !t.includes(n) && t.push(n), t;
        },
        []
      );
    },
    S = (o, e) => {
      for (let i of e) {
        if (o[i]) continue;
        o[i] = {};
        let s = o[i];
        s.loading = new Promise((t) => {
          s.resolve = (r) => {
            t(r), delete s.resolve;
          };
        });
      }
    },
    C = (o) => {
      let e = Array.isArray(window.fsAttributes) ? window.fsAttributes : [];
      o.push(...e);
    };
  var w = "1.5.0";
  var U = async () => {
    await y(E);
    let o = document.querySelectorAll("video");
    if (!o.length) return;
    let e = new Map(),
      i = new IntersectionObserver((t) => {
        for (let { target: r, isIntersecting: n } of t)
          r instanceof HTMLVideoElement &&
            (n ? r.play() : r.pause(), e.set(r, n));
      }, {});
    for (let t of o) (t.autoplay = !1), e.set(t, null), i.observe(t);
    let s = b(document, "visibilitychange", () => {
      for (let [t, r] of e) document.hidden || !r ? t.pause() : t.play();
    });
    return x(m, e, () => {
      i.disconnect(), s();
    });
  };
  v({ init: U, version: w, attributeKey: m });
})();
