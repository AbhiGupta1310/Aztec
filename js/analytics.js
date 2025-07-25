!(function () {
  "use strict";
  var p = function (c, o) {
      for (var i = 0; i < c.length; i++) o(c[i]);
    },
    b =
      Object.assign ||
      function (c) {
        for (var o, i = 1, a = arguments.length; i < a; i++) {
          o = arguments[i];
          for (var d in o)
            Object.prototype.hasOwnProperty.call(o, d) && (c[d] = o[d]);
        }
        return c;
      },
    y = window.location,
    l = window.document.currentScript,
    M = l.getAttribute("data-instance") || "AhrefsAnalytics",
    E = l.getAttribute("data-api") || new URL(l.src).origin + "/api/event",
    T = l.getAttribute("data-error") || new URL(l.src).origin + "/api/error",
    $ = l.getAttribute("data-track-visibility") != null,
    D = l.getAttribute("data-no-pageview-on-load") != null;
  function J(c, o, i) {
    var a = new XMLHttpRequest();
    a.open("POST", c, !0),
      a.setRequestHeader("Content-Type", "text/plain"),
      a.send(o),
      (a.onreadystatechange = function () {
        a.readyState === 4 && i != null && i();
      });
  }
  function f(c) {
    try {
      c();
    } catch (i) {
      if (i instanceof Error)
        J(T, JSON.stringify({ message: i.message, stack: i.stack }));
      else {
        var o = "cannot-stringify-error";
        try {
          o = String(i);
        } catch (a) {}
        J(T, JSON.stringify({ message: o, stack: null }));
      }
      throw i;
    }
  }
  f(function () {
    function c(t, e) {
      t && console.warn("Ignoring Event: " + t),
        e && e.callback && e.callback();
    }
    function o(t, e) {
      if (
        /^localhost$|^127(\.[0-9]+){0,2}\.[0-9]+$|^\[::1?\]$/.test(
          y.hostname
        ) ||
        y.protocol === "file:"
      )
        return c("localhost", e);
      if (
        (window._phantom ||
          window.__nightmare ||
          window.navigator.webdriver ||
          window.Cypress) &&
        !window.__web_analytics
      )
        return c(null, e);
      var n = l.getAttribute("data-key"),
        r = l.getAttribute("data-domain");
      if (n == null && r == null) return c("missing data-key", e);
      var u;
      try {
        u =
          window.navigator.languages ||
          window.navigator.language ||
          window.navigator.browserLanguage ||
          window.navigator.userLanguage ||
          window.navigator.systemLanguage;
      } catch (h) {}
      var v = {},
        m = !1;
      try {
        for (var q = 0; q < l.attributes.length; q++) {
          var C = l.attributes[q];
          if (C.name.startsWith("data-prop-")) {
            var X = C.name.substring(10),
              I = C.value;
            X && I && ((v[X] = I), (m = !0));
          }
        }
      } catch (h) {}
      var N = null;
      try {
        N = document.title;
      } catch (h) {}
      var s = {};
      (s.n = t),
        (s.u = y.href),
        u != null && (s.l = u),
        r != null && (s.d = r),
        n != null && (s.k = n),
        (s.r = window.document.referrer || null),
        e && e.meta && (s.m = JSON.stringify(e.meta)),
        ((e && e.props) || m) &&
          (s.p = JSON.stringify(b({}, v, e == null ? void 0 : e.props)));
      var R;
      try {
        R = window.screen.width;
      } catch (h) {}
      R != null && (s.sw = R);
      var _;
      try {
        _ = window.screen.height;
      } catch (h) {}
      _ != null && (s.sh = _);
      var H;
      try {
        H = window.devicePixelRatio;
      } catch (h) {}
      return H != null && (s.sr = H), N != null && (s.t = N), s;
    }
    function i(t, e) {
      var n = o(t, e);
      if (n != null) {
        var r = new XMLHttpRequest();
        r.open("POST", E, !0),
          r.setRequestHeader("Content-Type", "text/plain"),
          r.send(JSON.stringify(n)),
          (r.onreadystatechange = function () {
            r.readyState === 4 &&
              e &&
              e.callback &&
              e.callback({ status: r.status });
          });
      }
    }
    function a(t, e) {
      var n = navigator.sendBeacon != null,
        r = o(t, e);
      if (r != null) {
        var u = JSON.stringify(r);
        if (n) {
          var v = new Blob([u], { type: "text/plain" });
          navigator.sendBeacon(E, v);
        } else {
          var m = new XMLHttpRequest();
          m.open("POST", E, !0),
            m.setRequestHeader("Content-Type", "text/plain"),
            m.send(u);
        }
      }
    }
    window[M] = {
      sendEvent: function () {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
        f(function () {
          i.apply(void 0, t);
        });
      },
    };
    var d;
    function w() {
      f(function () {
        d !== y.pathname && ((d = y.pathname), i("pageview"));
      });
    }
    var S = window.history;
    if (S.pushState) {
      var V = S.pushState;
      (S.pushState = function () {
        V.apply(this, arguments), w();
      }),
        window.addEventListener("popstate", w);
    }
    D ||
      (window.document.visibilityState === "prerender"
        ? window.document.addEventListener("visibilitychange", function () {
            d || window.document.visibilityState !== "visible" || w();
          })
        : w()),
      $ &&
        (document.addEventListener("visibilitychange", function () {
          f(function () {
            if (d == null) {
              var t = document.visibilityState;
              t === "hidden"
                ? a("x-visibilitychange-hidden")
                : t === "visible" && a("x-visibilitychange-visible");
            }
          });
        }),
        document.addEventListener("pagehide", function () {
          f(function () {
            return a("x-pagehide");
          });
        }));
    var K = /\bAhrefsAnalytics\-prop\-([^\s\-]+)\-([^\s]+)/g;
    function k(t) {
      if (t) {
        var e = t.className;
        if (e) {
          var n = {};
          K.lastIndex = 0;
          for (var r = null; (r = K.exec(e)); ) {
            var u = r[1],
              v = r[2];
            !u || !v || (n[u] = v);
          }
          if (Object.keys(n).length !== 0) return n;
        }
      }
    }
    function F(t, e) {
      if (
        !(e != null && e.defaultPrevented) &&
        !(e != null && e.type === "auxclick" && e.button !== 1) &&
        t &&
        t.href &&
        !(
          t.protocol === "data:" ||
          t.protocol === "blob:" ||
          t.protocol === "javascript:"
        )
      ) {
        var n = k(t);
        a("x-link-click", {
          props: b({}, n, { href: t.href }),
          meta: {
            metaKey: String(!!(e != null && e.metaKey)),
            ctrlKey: String(!!(e != null && e.ctrlKey)),
            shiftKey: String(!!(e != null && e.shiftKey)),
          },
        });
      }
    }
    function z(t) {
      return !!t && t instanceof HTMLAnchorElement && !!t.href;
    }
    function G(t, e) {
      if (!(e != null && e.defaultPrevented) && t && t.action) {
        var n = k(t);
        a("x-form-submit", { props: b({}, n, { action: t.action }) });
      }
    }
    function j(t) {
      return !!t && t instanceof HTMLFormElement && !!t.action;
    }
    function B(t, e) {
      var n = k(e);
      a(t, { props: n });
    }
    var U = '*[class^="AhrefsAnalytics-event-"]',
      W = /\bAhrefsAnalytics\-event\-([^\s]+)/g;
    function A(t) {
      if (!t || !(t instanceof HTMLElement) || !t.className) return [];
      var e = null,
        n = [];
      for (W.lastIndex = 0; (e = W.exec(t.className)); ) {
        var r = e[1];
        r && n.push(r);
      }
      return n;
    }
    function Q(t) {
      return A(t).length > 0;
    }
    if (window.MutationObserver != null) {
      var L = function (t) {
          if (!t.ahrefsAnalytics_click_tracked) {
            t.ahrefsWebAnalytics_click_tracked = !0;
            var e = function (n) {
              return f(function () {
                return F(t, n);
              });
            };
            t.addEventListener("click", e), t.addEventListener("auxclick", e);
          }
        },
        O = function (t) {
          if (!t.ahrefsAnalytics_submit_tracked) {
            t.ahrefsWebAnalytics_submit_tracked = !0;
            var e = function (n) {
              return f(function () {
                G(t, n);
                for (var r = 0, u = A(t); r < u.length; r++) {
                  var v = u[r];
                  B(v, t);
                }
              });
            };
            t.addEventListener("submit", e);
          }
        },
        x = function (t) {
          if (!j(t) && !t.ahrefsAnalytics_event_tracked) {
            t.ahrefsWebAnalytics_event_tracked = !0;
            var e = function () {
              f(function () {
                for (var n = 0, r = A(t); n < r.length; n++) {
                  var u = r[n];
                  B(u, t);
                }
              });
            };
            t.addEventListener("click", e);
          }
        },
        Y = new MutationObserver(function (t) {
          f(function () {
            t.forEach(function (e) {
              e.type === "childList" &&
                p(e.addedNodes, function (n) {
                  n.nodeType === Node.ELEMENT_NODE &&
                    (z(n)
                      ? L(n)
                      : n.querySelectorAll != null &&
                        p(n.querySelectorAll("a"), L),
                    j(n)
                      ? O(n)
                      : n.querySelectorAll != null &&
                        p(n.querySelectorAll("form"), O),
                    Q(n)
                      ? x(n)
                      : n.querySelectorAll != null &&
                        p(n.querySelectorAll(U), x));
                });
            });
          });
        });
      window.addEventListener("DOMContentLoaded", function () {
        f(function () {
          p(document.querySelectorAll("a"), L),
            p(document.querySelectorAll("form"), O),
            p(document.querySelectorAll(U), x),
            Y.observe(document.body, { childList: !0, subtree: !0 });
        });
      });
    }
    {
      var g = void 0,
        P = M + "-ready";
      typeof CustomEvent == "function"
        ? (g = new CustomEvent(P, {
            detail: null,
            bubbles: !0,
            cancelable: !0,
          }))
        : typeof document != "undefined" &&
          document.createEvent &&
          ((g = document.createEvent("CustomEvent")),
          g.initCustomEvent(P, !0, !0, null)),
        g != null &&
          typeof document != "undefined" &&
          (document.dispatchEvent
            ? document.dispatchEvent(g)
            : "fireEvent" in document && document.fireEvent("on" + P, g));
    }
  });
})();
