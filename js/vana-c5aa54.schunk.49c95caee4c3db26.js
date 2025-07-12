(self.webpackChunk = self.webpackChunk || []).push([
  ["799"],
  {
    5487: function () {
      "use strict";
      window.tram = (function (e) {
        function t(e, t) {
          return new D.Bare().init(e, t);
        }
        function n(e) {
          var t = parseInt(e.slice(1), 16);
          return [(t >> 16) & 255, (t >> 8) & 255, 255 & t];
        }
        function i(e, t, n) {
          return (
            "#" + (0x1000000 | (e << 16) | (t << 8) | n).toString(16).slice(1)
          );
        }
        function a() {}
        function r(e, t, n) {
          if ((void 0 !== t && (n = t), void 0 === e)) return n;
          var i = n;
          return (
            Q.test(e) || !q.test(e)
              ? (i = parseInt(e, 10))
              : q.test(e) && (i = 1e3 * parseFloat(e)),
            0 > i && (i = 0),
            i == i ? i : n
          );
        }
        function o(e) {
          j.debug && window && window.console.warn(e);
        }
        var l,
          c,
          u,
          s = (function (e, t, n) {
            function i(e) {
              return "object" == typeof e;
            }
            function a(e) {
              return "function" == typeof e;
            }
            function r() {}
            return function o(l, c) {
              function u() {
                var e = new s();
                return a(e.init) && e.init.apply(e, arguments), e;
              }
              function s() {}
              c === n && ((c = l), (l = Object)), (u.Bare = s);
              var d,
                f = (r[e] = l[e]),
                p = (s[e] = u[e] = new r());
              return (
                (p.constructor = u),
                (u.mixin = function (t) {
                  return (s[e] = u[e] = o(u, t)[e]), u;
                }),
                (u.open = function (e) {
                  if (
                    ((d = {}),
                    a(e) ? (d = e.call(u, p, f, u, l)) : i(e) && (d = e),
                    i(d))
                  )
                    for (var n in d) t.call(d, n) && (p[n] = d[n]);
                  return a(p.init) || (p.init = l), u;
                }),
                u.open(c)
              );
            };
          })("prototype", {}.hasOwnProperty),
          d = {
            ease: [
              "ease",
              function (e, t, n, i) {
                var a = (e /= i) * e,
                  r = a * e;
                return (
                  t +
                  n *
                    (-2.75 * r * a + 11 * a * a + -15.5 * r + 8 * a + 0.25 * e)
                );
              },
            ],
            "ease-in": [
              "ease-in",
              function (e, t, n, i) {
                var a = (e /= i) * e,
                  r = a * e;
                return t + n * (-1 * r * a + 3 * a * a + -3 * r + 2 * a);
              },
            ],
            "ease-out": [
              "ease-out",
              function (e, t, n, i) {
                var a = (e /= i) * e,
                  r = a * e;
                return (
                  t +
                  n *
                    (0.3 * r * a + -1.6 * a * a + 2.2 * r + -1.8 * a + 1.9 * e)
                );
              },
            ],
            "ease-in-out": [
              "ease-in-out",
              function (e, t, n, i) {
                var a = (e /= i) * e,
                  r = a * e;
                return t + n * (2 * r * a + -5 * a * a + 2 * r + 2 * a);
              },
            ],
            linear: [
              "linear",
              function (e, t, n, i) {
                return (n * e) / i + t;
              },
            ],
            "ease-in-quad": [
              "cubic-bezier(0.550, 0.085, 0.680, 0.530)",
              function (e, t, n, i) {
                return n * (e /= i) * e + t;
              },
            ],
            "ease-out-quad": [
              "cubic-bezier(0.250, 0.460, 0.450, 0.940)",
              function (e, t, n, i) {
                return -n * (e /= i) * (e - 2) + t;
              },
            ],
            "ease-in-out-quad": [
              "cubic-bezier(0.455, 0.030, 0.515, 0.955)",
              function (e, t, n, i) {
                return (e /= i / 2) < 1
                  ? (n / 2) * e * e + t
                  : (-n / 2) * (--e * (e - 2) - 1) + t;
              },
            ],
            "ease-in-cubic": [
              "cubic-bezier(0.550, 0.055, 0.675, 0.190)",
              function (e, t, n, i) {
                return n * (e /= i) * e * e + t;
              },
            ],
            "ease-out-cubic": [
              "cubic-bezier(0.215, 0.610, 0.355, 1)",
              function (e, t, n, i) {
                return n * ((e = e / i - 1) * e * e + 1) + t;
              },
            ],
            "ease-in-out-cubic": [
              "cubic-bezier(0.645, 0.045, 0.355, 1)",
              function (e, t, n, i) {
                return (e /= i / 2) < 1
                  ? (n / 2) * e * e * e + t
                  : (n / 2) * ((e -= 2) * e * e + 2) + t;
              },
            ],
            "ease-in-quart": [
              "cubic-bezier(0.895, 0.030, 0.685, 0.220)",
              function (e, t, n, i) {
                return n * (e /= i) * e * e * e + t;
              },
            ],
            "ease-out-quart": [
              "cubic-bezier(0.165, 0.840, 0.440, 1)",
              function (e, t, n, i) {
                return -n * ((e = e / i - 1) * e * e * e - 1) + t;
              },
            ],
            "ease-in-out-quart": [
              "cubic-bezier(0.770, 0, 0.175, 1)",
              function (e, t, n, i) {
                return (e /= i / 2) < 1
                  ? (n / 2) * e * e * e * e + t
                  : (-n / 2) * ((e -= 2) * e * e * e - 2) + t;
              },
            ],
            "ease-in-quint": [
              "cubic-bezier(0.755, 0.050, 0.855, 0.060)",
              function (e, t, n, i) {
                return n * (e /= i) * e * e * e * e + t;
              },
            ],
            "ease-out-quint": [
              "cubic-bezier(0.230, 1, 0.320, 1)",
              function (e, t, n, i) {
                return n * ((e = e / i - 1) * e * e * e * e + 1) + t;
              },
            ],
            "ease-in-out-quint": [
              "cubic-bezier(0.860, 0, 0.070, 1)",
              function (e, t, n, i) {
                return (e /= i / 2) < 1
                  ? (n / 2) * e * e * e * e * e + t
                  : (n / 2) * ((e -= 2) * e * e * e * e + 2) + t;
              },
            ],
            "ease-in-sine": [
              "cubic-bezier(0.470, 0, 0.745, 0.715)",
              function (e, t, n, i) {
                return -n * Math.cos((e / i) * (Math.PI / 2)) + n + t;
              },
            ],
            "ease-out-sine": [
              "cubic-bezier(0.390, 0.575, 0.565, 1)",
              function (e, t, n, i) {
                return n * Math.sin((e / i) * (Math.PI / 2)) + t;
              },
            ],
            "ease-in-out-sine": [
              "cubic-bezier(0.445, 0.050, 0.550, 0.950)",
              function (e, t, n, i) {
                return (-n / 2) * (Math.cos((Math.PI * e) / i) - 1) + t;
              },
            ],
            "ease-in-expo": [
              "cubic-bezier(0.950, 0.050, 0.795, 0.035)",
              function (e, t, n, i) {
                return 0 === e ? t : n * Math.pow(2, 10 * (e / i - 1)) + t;
              },
            ],
            "ease-out-expo": [
              "cubic-bezier(0.190, 1, 0.220, 1)",
              function (e, t, n, i) {
                return e === i
                  ? t + n
                  : n * (-Math.pow(2, (-10 * e) / i) + 1) + t;
              },
            ],
            "ease-in-out-expo": [
              "cubic-bezier(1, 0, 0, 1)",
              function (e, t, n, i) {
                return 0 === e
                  ? t
                  : e === i
                  ? t + n
                  : (e /= i / 2) < 1
                  ? (n / 2) * Math.pow(2, 10 * (e - 1)) + t
                  : (n / 2) * (-Math.pow(2, -10 * --e) + 2) + t;
              },
            ],
            "ease-in-circ": [
              "cubic-bezier(0.600, 0.040, 0.980, 0.335)",
              function (e, t, n, i) {
                return -n * (Math.sqrt(1 - (e /= i) * e) - 1) + t;
              },
            ],
            "ease-out-circ": [
              "cubic-bezier(0.075, 0.820, 0.165, 1)",
              function (e, t, n, i) {
                return n * Math.sqrt(1 - (e = e / i - 1) * e) + t;
              },
            ],
            "ease-in-out-circ": [
              "cubic-bezier(0.785, 0.135, 0.150, 0.860)",
              function (e, t, n, i) {
                return (e /= i / 2) < 1
                  ? (-n / 2) * (Math.sqrt(1 - e * e) - 1) + t
                  : (n / 2) * (Math.sqrt(1 - (e -= 2) * e) + 1) + t;
              },
            ],
            "ease-in-back": [
              "cubic-bezier(0.600, -0.280, 0.735, 0.045)",
              function (e, t, n, i, a) {
                return (
                  void 0 === a && (a = 1.70158),
                  n * (e /= i) * e * ((a + 1) * e - a) + t
                );
              },
            ],
            "ease-out-back": [
              "cubic-bezier(0.175, 0.885, 0.320, 1.275)",
              function (e, t, n, i, a) {
                return (
                  void 0 === a && (a = 1.70158),
                  n * ((e = e / i - 1) * e * ((a + 1) * e + a) + 1) + t
                );
              },
            ],
            "ease-in-out-back": [
              "cubic-bezier(0.680, -0.550, 0.265, 1.550)",
              function (e, t, n, i, a) {
                return (
                  void 0 === a && (a = 1.70158),
                  (e /= i / 2) < 1
                    ? (n / 2) * e * e * (((a *= 1.525) + 1) * e - a) + t
                    : (n / 2) *
                        ((e -= 2) * e * (((a *= 1.525) + 1) * e + a) + 2) +
                      t
                );
              },
            ],
          },
          f = {
            "ease-in-back": "cubic-bezier(0.600, 0, 0.735, 0.045)",
            "ease-out-back": "cubic-bezier(0.175, 0.885, 0.320, 1)",
            "ease-in-out-back": "cubic-bezier(0.680, 0, 0.265, 1)",
          },
          p = window,
          g = "bkwld-tram",
          E = /[\-\.0-9]/g,
          m = /[A-Z]/,
          y = "number",
          I = /^(rgb|#)/,
          b = /(em|cm|mm|in|pt|pc|px)$/,
          h = /(em|cm|mm|in|pt|pc|px|%)$/,
          T = /(deg|rad|turn)$/,
          v = "unitless",
          O = /(all|none) 0s ease 0s/,
          _ = /^(width|height)$/,
          R = document.createElement("a"),
          A = ["Webkit", "Moz", "O", "ms"],
          w = ["-webkit-", "-moz-", "-o-", "-ms-"],
          N = function (e) {
            if (e in R.style) return { dom: e, css: e };
            var t,
              n,
              i = "",
              a = e.split("-");
            for (t = 0; t < a.length; t++)
              i += a[t].charAt(0).toUpperCase() + a[t].slice(1);
            for (t = 0; t < A.length; t++)
              if ((n = A[t] + i) in R.style) return { dom: n, css: w[t] + e };
          },
          L = (t.support = {
            bind: Function.prototype.bind,
            transform: N("transform"),
            transition: N("transition"),
            backface: N("backface-visibility"),
            timing: N("transition-timing-function"),
          });
        if (L.transition) {
          var S = L.timing.dom;
          if (((R.style[S] = d["ease-in-back"][0]), !R.style[S]))
            for (var C in f) d[C][0] = f[C];
        }
        var P = (t.frame =
            (l =
              p.requestAnimationFrame ||
              p.webkitRequestAnimationFrame ||
              p.mozRequestAnimationFrame ||
              p.oRequestAnimationFrame ||
              p.msRequestAnimationFrame) && L.bind
              ? l.bind(p)
              : function (e) {
                  p.setTimeout(e, 16);
                }),
          M = (t.now =
            (u =
              (c = p.performance) &&
              (c.now || c.webkitNow || c.msNow || c.mozNow)) && L.bind
              ? u.bind(c)
              : Date.now ||
                function () {
                  return +new Date();
                }),
          F = s(function (t) {
            function n(e, t) {
              var n = (function (e) {
                  for (var t = -1, n = e ? e.length : 0, i = []; ++t < n; ) {
                    var a = e[t];
                    a && i.push(a);
                  }
                  return i;
                })(("" + e).split(" ")),
                i = n[0];
              t = t || {};
              var a = Y[i];
              if (!a) return o("Unsupported property: " + i);
              if (!t.weak || !this.props[i]) {
                var r = a[0],
                  l = this.props[i];
                return (
                  l || (l = this.props[i] = new r.Bare()),
                  l.init(this.$el, n, a, t),
                  l
                );
              }
            }
            function i(e, t, i) {
              if (e) {
                var o = typeof e;
                if (
                  (t ||
                    (this.timer && this.timer.destroy(),
                    (this.queue = []),
                    (this.active = !1)),
                  "number" == o && t)
                )
                  return (
                    (this.timer = new B({
                      duration: e,
                      context: this,
                      complete: a,
                    })),
                    void (this.active = !0)
                  );
                if ("string" == o && t) {
                  switch (e) {
                    case "hide":
                      c.call(this);
                      break;
                    case "stop":
                      l.call(this);
                      break;
                    case "redraw":
                      u.call(this);
                      break;
                    default:
                      n.call(this, e, i && i[1]);
                  }
                  return a.call(this);
                }
                if ("function" == o) return void e.call(this, this);
                if ("object" == o) {
                  var f = 0;
                  d.call(
                    this,
                    e,
                    function (e, t) {
                      e.span > f && (f = e.span), e.stop(), e.animate(t);
                    },
                    function (e) {
                      "wait" in e && (f = r(e.wait, 0));
                    }
                  ),
                    s.call(this),
                    f > 0 &&
                      ((this.timer = new B({ duration: f, context: this })),
                      (this.active = !0),
                      t && (this.timer.complete = a));
                  var p = this,
                    g = !1,
                    E = {};
                  P(function () {
                    d.call(p, e, function (e) {
                      e.active && ((g = !0), (E[e.name] = e.nextStyle));
                    }),
                      g && p.$el.css(E);
                  });
                }
              }
            }
            function a() {
              if (
                (this.timer && this.timer.destroy(),
                (this.active = !1),
                this.queue.length)
              ) {
                var e = this.queue.shift();
                i.call(this, e.options, !0, e.args);
              }
            }
            function l(e) {
              var t;
              this.timer && this.timer.destroy(),
                (this.queue = []),
                (this.active = !1),
                "string" == typeof e
                  ? ((t = {})[e] = 1)
                  : (t = "object" == typeof e && null != e ? e : this.props),
                d.call(this, t, f),
                s.call(this);
            }
            function c() {
              l.call(this), (this.el.style.display = "none");
            }
            function u() {
              this.el.offsetHeight;
            }
            function s() {
              var e,
                t,
                n = [];
              for (e in (this.upstream && n.push(this.upstream), this.props))
                (t = this.props[e]).active && n.push(t.string);
              (n = n.join(",")),
                this.style !== n &&
                  ((this.style = n), (this.el.style[L.transition.dom] = n));
            }
            function d(e, t, i) {
              var a,
                r,
                o,
                l,
                c = t !== f,
                u = {};
              for (a in e)
                (o = e[a]),
                  a in $
                    ? (u.transform || (u.transform = {}), (u.transform[a] = o))
                    : (m.test(a) &&
                        (a = a.replace(/[A-Z]/g, function (e) {
                          return "-" + e.toLowerCase();
                        })),
                      a in Y ? (u[a] = o) : (l || (l = {}), (l[a] = o)));
              for (a in u) {
                if (((o = u[a]), !(r = this.props[a]))) {
                  if (!c) continue;
                  r = n.call(this, a);
                }
                t.call(this, r, o);
              }
              i && l && i.call(this, l);
            }
            function f(e) {
              e.stop();
            }
            function p(e, t) {
              e.set(t);
            }
            function E(e) {
              this.$el.css(e);
            }
            function y(e, n) {
              t[e] = function () {
                return this.children
                  ? I.call(this, n, arguments)
                  : (this.el && n.apply(this, arguments), this);
              };
            }
            function I(e, t) {
              var n,
                i = this.children.length;
              for (n = 0; i > n; n++) e.apply(this.children[n], t);
              return this;
            }
            (t.init = function (t) {
              if (
                ((this.$el = e(t)),
                (this.el = this.$el[0]),
                (this.props = {}),
                (this.queue = []),
                (this.style = ""),
                (this.active = !1),
                j.keepInherited && !j.fallback)
              ) {
                var n = W(this.el, "transition");
                n && !O.test(n) && (this.upstream = n);
              }
              L.backface &&
                j.hideBackface &&
                H(this.el, L.backface.css, "hidden");
            }),
              y("add", n),
              y("start", i),
              y("wait", function (e) {
                (e = r(e, 0)),
                  this.active
                    ? this.queue.push({ options: e })
                    : ((this.timer = new B({
                        duration: e,
                        context: this,
                        complete: a,
                      })),
                      (this.active = !0));
              }),
              y("then", function (e) {
                return this.active
                  ? (this.queue.push({ options: e, args: arguments }),
                    void (this.timer.complete = a))
                  : o(
                      "No active transition timer. Use start() or wait() before then()."
                    );
              }),
              y("next", a),
              y("stop", l),
              y("set", function (e) {
                l.call(this, e), d.call(this, e, p, E);
              }),
              y("show", function (e) {
                "string" != typeof e && (e = "block"),
                  (this.el.style.display = e);
              }),
              y("hide", c),
              y("redraw", u),
              y("destroy", function () {
                l.call(this),
                  e.removeData(this.el, g),
                  (this.$el = this.el = null);
              });
          }),
          D = s(F, function (t) {
            function n(t, n) {
              var i = e.data(t, g) || e.data(t, g, new F.Bare());
              return i.el || i.init(t), n ? i.start(n) : i;
            }
            t.init = function (t, i) {
              var a = e(t);
              if (!a.length) return this;
              if (1 === a.length) return n(a[0], i);
              var r = [];
              return (
                a.each(function (e, t) {
                  r.push(n(t, i));
                }),
                (this.children = r),
                this
              );
            };
          }),
          G = s(function (e) {
            function t() {
              var e = this.get();
              this.update("auto");
              var t = this.get();
              return this.update(e), t;
            }
            (e.init = function (e, t, n, i) {
              (this.$el = e), (this.el = e[0]);
              var a,
                o,
                l,
                c = t[0];
              n[2] && (c = n[2]),
                z[c] && (c = z[c]),
                (this.name = c),
                (this.type = n[1]),
                (this.duration = r(t[1], this.duration, 500)),
                (this.ease =
                  ((a = t[2]),
                  (o = this.ease),
                  (l = "ease"),
                  void 0 !== o && (l = o),
                  a in d ? a : l)),
                (this.delay = r(t[3], this.delay, 0)),
                (this.span = this.duration + this.delay),
                (this.active = !1),
                (this.nextStyle = null),
                (this.auto = _.test(this.name)),
                (this.unit = i.unit || this.unit || j.defaultUnit),
                (this.angle = i.angle || this.angle || j.defaultAngle),
                j.fallback || i.fallback
                  ? (this.animate = this.fallback)
                  : ((this.animate = this.transition),
                    (this.string =
                      this.name +
                      " " +
                      this.duration +
                      "ms" +
                      ("ease" != this.ease ? " " + d[this.ease][0] : "") +
                      (this.delay ? " " + this.delay + "ms" : "")));
            }),
              (e.set = function (e) {
                (e = this.convert(e, this.type)), this.update(e), this.redraw();
              }),
              (e.transition = function (e) {
                (this.active = !0),
                  (e = this.convert(e, this.type)),
                  this.auto &&
                    ("auto" == this.el.style[this.name] &&
                      (this.update(this.get()), this.redraw()),
                    "auto" == e && (e = t.call(this))),
                  (this.nextStyle = e);
              }),
              (e.fallback = function (e) {
                var n =
                  this.el.style[this.name] ||
                  this.convert(this.get(), this.type);
                (e = this.convert(e, this.type)),
                  this.auto &&
                    ("auto" == n && (n = this.convert(this.get(), this.type)),
                    "auto" == e && (e = t.call(this))),
                  (this.tween = new V({
                    from: n,
                    to: e,
                    duration: this.duration,
                    delay: this.delay,
                    ease: this.ease,
                    update: this.update,
                    context: this,
                  }));
              }),
              (e.get = function () {
                return W(this.el, this.name);
              }),
              (e.update = function (e) {
                H(this.el, this.name, e);
              }),
              (e.stop = function () {
                (this.active || this.nextStyle) &&
                  ((this.active = !1),
                  (this.nextStyle = null),
                  H(this.el, this.name, this.get()));
                var e = this.tween;
                e && e.context && e.destroy();
              }),
              (e.convert = function (e, t) {
                if ("auto" == e && this.auto) return e;
                var n,
                  a,
                  r = "number" == typeof e,
                  l = "string" == typeof e;
                switch (t) {
                  case y:
                    if (r) return e;
                    if (l && "" === e.replace(E, "")) return +e;
                    a = "number(unitless)";
                    break;
                  case I:
                    if (l) {
                      if ("" === e && this.original) return this.original;
                      if (t.test(e))
                        return "#" == e.charAt(0) && 7 == e.length
                          ? e
                          : ((n = /rgba?\((\d+),\s*(\d+),\s*(\d+)/.exec(e))
                              ? i(n[1], n[2], n[3])
                              : e
                            ).replace(/#(\w)(\w)(\w)$/, "#$1$1$2$2$3$3");
                    }
                    a = "hex or rgb string";
                    break;
                  case b:
                    if (r) return e + this.unit;
                    if (l && t.test(e)) return e;
                    a = "number(px) or string(unit)";
                    break;
                  case h:
                    if (r) return e + this.unit;
                    if (l && t.test(e)) return e;
                    a = "number(px) or string(unit or %)";
                    break;
                  case T:
                    if (r) return e + this.angle;
                    if (l && t.test(e)) return e;
                    a = "number(deg) or string(angle)";
                    break;
                  case v:
                    if (r || (l && h.test(e))) return e;
                    a = "number(unitless) or string(unit or %)";
                }
                return (
                  o(
                    "Type warning: Expected: [" +
                      a +
                      "] Got: [" +
                      typeof e +
                      "] " +
                      e
                  ),
                  e
                );
              }),
              (e.redraw = function () {
                this.el.offsetHeight;
              });
          }),
          x = s(G, function (e, t) {
            e.init = function () {
              t.init.apply(this, arguments),
                this.original || (this.original = this.convert(this.get(), I));
            };
          }),
          U = s(G, function (e, t) {
            (e.init = function () {
              t.init.apply(this, arguments), (this.animate = this.fallback);
            }),
              (e.get = function () {
                return this.$el[this.name]();
              }),
              (e.update = function (e) {
                this.$el[this.name](e);
              });
          }),
          k = s(G, function (e, t) {
            function n(e, t) {
              var n, i, a, r, o;
              for (n in e)
                (a = (r = $[n])[0]),
                  (i = r[1] || n),
                  (o = this.convert(e[n], a)),
                  t.call(this, i, o, a);
            }
            (e.init = function () {
              t.init.apply(this, arguments),
                this.current ||
                  ((this.current = {}),
                  $.perspective &&
                    j.perspective &&
                    ((this.current.perspective = j.perspective),
                    H(this.el, this.name, this.style(this.current)),
                    this.redraw()));
            }),
              (e.set = function (e) {
                n.call(this, e, function (e, t) {
                  this.current[e] = t;
                }),
                  H(this.el, this.name, this.style(this.current)),
                  this.redraw();
              }),
              (e.transition = function (e) {
                var t = this.values(e);
                this.tween = new X({
                  current: this.current,
                  values: t,
                  duration: this.duration,
                  delay: this.delay,
                  ease: this.ease,
                });
                var n,
                  i = {};
                for (n in this.current) i[n] = n in t ? t[n] : this.current[n];
                (this.active = !0), (this.nextStyle = this.style(i));
              }),
              (e.fallback = function (e) {
                var t = this.values(e);
                this.tween = new X({
                  current: this.current,
                  values: t,
                  duration: this.duration,
                  delay: this.delay,
                  ease: this.ease,
                  update: this.update,
                  context: this,
                });
              }),
              (e.update = function () {
                H(this.el, this.name, this.style(this.current));
              }),
              (e.style = function (e) {
                var t,
                  n = "";
                for (t in e) n += t + "(" + e[t] + ") ";
                return n;
              }),
              (e.values = function (e) {
                var t,
                  i = {};
                return (
                  n.call(this, e, function (e, n, a) {
                    (i[e] = n),
                      void 0 === this.current[e] &&
                        ((t = 0),
                        ~e.indexOf("scale") && (t = 1),
                        (this.current[e] = this.convert(t, a)));
                  }),
                  i
                );
              });
          }),
          V = s(function (t) {
            function r() {
              var e,
                t,
                n,
                i = c.length;
              if (i)
                for (P(r), t = M(), e = i; e--; ) (n = c[e]) && n.render(t);
            }
            var l = { ease: d.ease[1], from: 0, to: 1 };
            (t.init = function (e) {
              (this.duration = e.duration || 0), (this.delay = e.delay || 0);
              var t = e.ease || l.ease;
              d[t] && (t = d[t][1]),
                "function" != typeof t && (t = l.ease),
                (this.ease = t),
                (this.update = e.update || a),
                (this.complete = e.complete || a),
                (this.context = e.context || this),
                (this.name = e.name);
              var n = e.from,
                i = e.to;
              void 0 === n && (n = l.from),
                void 0 === i && (i = l.to),
                (this.unit = e.unit || ""),
                "number" == typeof n && "number" == typeof i
                  ? ((this.begin = n), (this.change = i - n))
                  : this.format(i, n),
                (this.value = this.begin + this.unit),
                (this.start = M()),
                !1 !== e.autoplay && this.play();
            }),
              (t.play = function () {
                this.active ||
                  (this.start || (this.start = M()),
                  (this.active = !0),
                  1 === c.push(this) && P(r));
              }),
              (t.stop = function () {
                var t, n;
                this.active &&
                  ((this.active = !1),
                  (n = e.inArray(this, c)) >= 0 &&
                    ((t = c.slice(n + 1)),
                    (c.length = n),
                    t.length && (c = c.concat(t))));
              }),
              (t.render = function (e) {
                var t,
                  n = e - this.start;
                if (this.delay) {
                  if (n <= this.delay) return;
                  n -= this.delay;
                }
                if (n < this.duration) {
                  var a,
                    r,
                    o = this.ease(n, 0, 1, this.duration);
                  return (
                    (t = this.startRGB
                      ? ((a = this.startRGB),
                        (r = this.endRGB),
                        i(
                          a[0] + o * (r[0] - a[0]),
                          a[1] + o * (r[1] - a[1]),
                          a[2] + o * (r[2] - a[2])
                        ))
                      : Math.round((this.begin + o * this.change) * u) / u),
                    (this.value = t + this.unit),
                    void this.update.call(this.context, this.value)
                  );
                }
                (t = this.endHex || this.begin + this.change),
                  (this.value = t + this.unit),
                  this.update.call(this.context, this.value),
                  this.complete.call(this.context),
                  this.destroy();
              }),
              (t.format = function (e, t) {
                if (((t += ""), "#" == (e += "").charAt(0)))
                  return (
                    (this.startRGB = n(t)),
                    (this.endRGB = n(e)),
                    (this.endHex = e),
                    (this.begin = 0),
                    void (this.change = 1)
                  );
                if (!this.unit) {
                  var i = t.replace(E, "");
                  i !== e.replace(E, "") &&
                    o("Units do not match [tween]: " + t + ", " + e),
                    (this.unit = i);
                }
                (t = parseFloat(t)),
                  (e = parseFloat(e)),
                  (this.begin = this.value = t),
                  (this.change = e - t);
              }),
              (t.destroy = function () {
                this.stop(),
                  (this.context = null),
                  (this.ease = this.update = this.complete = a);
              });
            var c = [],
              u = 1e3;
          }),
          B = s(V, function (e) {
            (e.init = function (e) {
              (this.duration = e.duration || 0),
                (this.complete = e.complete || a),
                (this.context = e.context),
                this.play();
            }),
              (e.render = function (e) {
                e - this.start < this.duration ||
                  (this.complete.call(this.context), this.destroy());
              });
          }),
          X = s(V, function (e, t) {
            (e.init = function (e) {
              var t, n;
              for (t in ((this.context = e.context),
              (this.update = e.update),
              (this.tweens = []),
              (this.current = e.current),
              e.values))
                (n = e.values[t]),
                  this.current[t] !== n &&
                    this.tweens.push(
                      new V({
                        name: t,
                        from: this.current[t],
                        to: n,
                        duration: e.duration,
                        delay: e.delay,
                        ease: e.ease,
                        autoplay: !1,
                      })
                    );
              this.play();
            }),
              (e.render = function (e) {
                var t,
                  n,
                  i = this.tweens.length,
                  a = !1;
                for (t = i; t--; )
                  (n = this.tweens[t]).context &&
                    (n.render(e), (this.current[n.name] = n.value), (a = !0));
                return a
                  ? void (this.update && this.update.call(this.context))
                  : this.destroy();
              }),
              (e.destroy = function () {
                if ((t.destroy.call(this), this.tweens)) {
                  var e;
                  for (e = this.tweens.length; e--; ) this.tweens[e].destroy();
                  (this.tweens = null), (this.current = null);
                }
              });
          }),
          j = (t.config = {
            debug: !1,
            defaultUnit: "px",
            defaultAngle: "deg",
            keepInherited: !1,
            hideBackface: !1,
            perspective: "",
            fallback: !L.transition,
            agentTests: [],
          });
        (t.fallback = function (e) {
          if (!L.transition) return (j.fallback = !0);
          j.agentTests.push("(" + e + ")");
          var t = RegExp(j.agentTests.join("|"), "i");
          j.fallback = t.test(navigator.userAgent);
        }),
          t.fallback("6.0.[2-5] Safari"),
          (t.tween = function (e) {
            return new V(e);
          }),
          (t.delay = function (e, t, n) {
            return new B({ complete: t, duration: e, context: n });
          }),
          (e.fn.tram = function (e) {
            return t.call(null, this, e);
          });
        var H = e.style,
          W = e.css,
          z = { transform: L.transform && L.transform.css },
          Y = {
            color: [x, I],
            background: [x, I, "background-color"],
            "outline-color": [x, I],
            "border-color": [x, I],
            "border-top-color": [x, I],
            "border-right-color": [x, I],
            "border-bottom-color": [x, I],
            "border-left-color": [x, I],
            "border-width": [G, b],
            "border-top-width": [G, b],
            "border-right-width": [G, b],
            "border-bottom-width": [G, b],
            "border-left-width": [G, b],
            "border-spacing": [G, b],
            "letter-spacing": [G, b],
            margin: [G, b],
            "margin-top": [G, b],
            "margin-right": [G, b],
            "margin-bottom": [G, b],
            "margin-left": [G, b],
            padding: [G, b],
            "padding-top": [G, b],
            "padding-right": [G, b],
            "padding-bottom": [G, b],
            "padding-left": [G, b],
            "outline-width": [G, b],
            opacity: [G, y],
            top: [G, h],
            right: [G, h],
            bottom: [G, h],
            left: [G, h],
            "font-size": [G, h],
            "text-indent": [G, h],
            "word-spacing": [G, h],
            width: [G, h],
            "min-width": [G, h],
            "max-width": [G, h],
            height: [G, h],
            "min-height": [G, h],
            "max-height": [G, h],
            "line-height": [G, v],
            "scroll-top": [U, y, "scrollTop"],
            "scroll-left": [U, y, "scrollLeft"],
          },
          $ = {};
        L.transform &&
          ((Y.transform = [k]),
          ($ = {
            x: [h, "translateX"],
            y: [h, "translateY"],
            rotate: [T],
            rotateX: [T],
            rotateY: [T],
            scale: [y],
            scaleX: [y],
            scaleY: [y],
            skew: [T],
            skewX: [T],
            skewY: [T],
          })),
          L.transform &&
            L.backface &&
            (($.z = [h, "translateZ"]),
            ($.rotateZ = [T]),
            ($.scaleZ = [y]),
            ($.perspective = [b]));
        var Q = /ms/,
          q = /s|\./;
        return (e.tram = t);
      })(window.jQuery);
    },
    5756: function (e, t, n) {
      "use strict";
      var i,
        a,
        r,
        o,
        l,
        c,
        u,
        s,
        d,
        f,
        p,
        g,
        E,
        m,
        y,
        I,
        b,
        h,
        T,
        v,
        O = window.$,
        _ = n(5487) && O.tram;
      ((i = {}).VERSION = "1.6.0-Webflow"),
        (a = {}),
        (r = Array.prototype),
        (o = Object.prototype),
        (l = Function.prototype),
        r.push,
        (c = r.slice),
        r.concat,
        o.toString,
        (u = o.hasOwnProperty),
        (s = r.forEach),
        (d = r.map),
        r.reduce,
        r.reduceRight,
        (f = r.filter),
        r.every,
        (p = r.some),
        (g = r.indexOf),
        r.lastIndexOf,
        (E = Object.keys),
        l.bind,
        (m =
          i.each =
          i.forEach =
            function (e, t, n) {
              if (null == e) return e;
              if (s && e.forEach === s) e.forEach(t, n);
              else if (e.length === +e.length) {
                for (var r = 0, o = e.length; r < o; r++)
                  if (t.call(n, e[r], r, e) === a) return;
              } else
                for (var l = i.keys(e), r = 0, o = l.length; r < o; r++)
                  if (t.call(n, e[l[r]], l[r], e) === a) return;
              return e;
            }),
        (i.map = i.collect =
          function (e, t, n) {
            var i = [];
            return null == e
              ? i
              : d && e.map === d
              ? e.map(t, n)
              : (m(e, function (e, a, r) {
                  i.push(t.call(n, e, a, r));
                }),
                i);
          }),
        (i.find = i.detect =
          function (e, t, n) {
            var i;
            return (
              y(e, function (e, a, r) {
                if (t.call(n, e, a, r)) return (i = e), !0;
              }),
              i
            );
          }),
        (i.filter = i.select =
          function (e, t, n) {
            var i = [];
            return null == e
              ? i
              : f && e.filter === f
              ? e.filter(t, n)
              : (m(e, function (e, a, r) {
                  t.call(n, e, a, r) && i.push(e);
                }),
                i);
          }),
        (y =
          i.some =
          i.any =
            function (e, t, n) {
              t || (t = i.identity);
              var r = !1;
              return null == e
                ? r
                : p && e.some === p
                ? e.some(t, n)
                : (m(e, function (e, i, o) {
                    if (r || (r = t.call(n, e, i, o))) return a;
                  }),
                  !!r);
            }),
        (i.contains = i.include =
          function (e, t) {
            return (
              null != e &&
              (g && e.indexOf === g
                ? -1 != e.indexOf(t)
                : y(e, function (e) {
                    return e === t;
                  }))
            );
          }),
        (i.delay = function (e, t) {
          var n = c.call(arguments, 2);
          return setTimeout(function () {
            return e.apply(null, n);
          }, t);
        }),
        (i.defer = function (e) {
          return i.delay.apply(i, [e, 1].concat(c.call(arguments, 1)));
        }),
        (i.throttle = function (e) {
          var t, n, i;
          return function () {
            t ||
              ((t = !0),
              (n = arguments),
              (i = this),
              _.frame(function () {
                (t = !1), e.apply(i, n);
              }));
          };
        }),
        (i.debounce = function (e, t, n) {
          var a,
            r,
            o,
            l,
            c,
            u = function () {
              var s = i.now() - l;
              s < t
                ? (a = setTimeout(u, t - s))
                : ((a = null), n || ((c = e.apply(o, r)), (o = r = null)));
            };
          return function () {
            (o = this), (r = arguments), (l = i.now());
            var s = n && !a;
            return (
              a || (a = setTimeout(u, t)),
              s && ((c = e.apply(o, r)), (o = r = null)),
              c
            );
          };
        }),
        (i.defaults = function (e) {
          if (!i.isObject(e)) return e;
          for (var t = 1, n = arguments.length; t < n; t++) {
            var a = arguments[t];
            for (var r in a) void 0 === e[r] && (e[r] = a[r]);
          }
          return e;
        }),
        (i.keys = function (e) {
          if (!i.isObject(e)) return [];
          if (E) return E(e);
          var t = [];
          for (var n in e) i.has(e, n) && t.push(n);
          return t;
        }),
        (i.has = function (e, t) {
          return u.call(e, t);
        }),
        (i.isObject = function (e) {
          return e === Object(e);
        }),
        (i.now =
          Date.now ||
          function () {
            return new Date().getTime();
          }),
        (i.templateSettings = {
          evaluate: /<%([\s\S]+?)%>/g,
          interpolate: /<%=([\s\S]+?)%>/g,
          escape: /<%-([\s\S]+?)%>/g,
        }),
        (I = /(.)^/),
        (b = {
          "'": "'",
          "\\": "\\",
          "\r": "r",
          "\n": "n",
          "\u2028": "u2028",
          "\u2029": "u2029",
        }),
        (h = /\\|'|\r|\n|\u2028|\u2029/g),
        (T = function (e) {
          return "\\" + b[e];
        }),
        (v = /^\s*(\w|\$)+\s*$/),
        (i.template = function (e, t, n) {
          !t && n && (t = n);
          var a,
            r = RegExp(
              [
                ((t = i.defaults({}, t, i.templateSettings)).escape || I)
                  .source,
                (t.interpolate || I).source,
                (t.evaluate || I).source,
              ].join("|") + "|$",
              "g"
            ),
            o = 0,
            l = "__p+='";
          e.replace(r, function (t, n, i, a, r) {
            return (
              (l += e.slice(o, r).replace(h, T)),
              (o = r + t.length),
              n
                ? (l += "'+\n((__t=(" + n + "))==null?'':_.escape(__t))+\n'")
                : i
                ? (l += "'+\n((__t=(" + i + "))==null?'':__t)+\n'")
                : a && (l += "';\n" + a + "\n__p+='"),
              t
            );
          }),
            (l += "';\n");
          var c = t.variable;
          if (c) {
            if (!v.test(c))
              throw Error("variable is not a bare identifier: " + c);
          } else (l = "with(obj||{}){\n" + l + "}\n"), (c = "obj");
          l =
            "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" +
            l +
            "return __p;\n";
          try {
            a = Function(t.variable || "obj", "_", l);
          } catch (e) {
            throw ((e.source = l), e);
          }
          var u = function (e) {
            return a.call(this, e, i);
          };
          return (u.source = "function(" + c + "){\n" + l + "}"), u;
        }),
        (e.exports = i);
    },
    9461: function (e, t, n) {
      "use strict";
      var i = n(3949);
      i.define(
        "brand",
        (e.exports = function (e) {
          var t,
            n = {},
            a = document,
            r = e("html"),
            o = e("body"),
            l = window.location,
            c = /PhantomJS/i.test(navigator.userAgent),
            u =
              "fullscreenchange webkitfullscreenchange mozfullscreenchange msfullscreenchange";
          function s() {
            var n =
              a.fullScreen ||
              a.mozFullScreen ||
              a.webkitIsFullScreen ||
              a.msFullscreenElement ||
              !!a.webkitFullscreenElement;
            e(t).attr("style", n ? "display: none !important;" : "");
          }
          function d() {
            var e = o.children(".w-webflow-badge"),
              n = e.length && e.get(0) === t,
              a = i.env("editor");
            if (n) {
              a && e.remove();
              return;
            }
            e.length && e.remove(), a || o.append(t);
          }
          return (
            (n.ready = function () {
              var n,
                i,
                o,
                f = r.attr("data-wf-status"),
                p = r.attr("data-wf-domain") || "";
              /\.webflow\.io$/i.test(p) && l.hostname !== p && (f = !0),
                f &&
                  !c &&
                  ((t =
                    t ||
                    ((n = e('<a class="w-webflow-badge"></a>').attr(
                      "href",
                      "https://webflow.com?utm_campaign=brandjs"
                    )),
                    (i = e("<img>")
                      .attr(
                        "src",
                        "https://d3e54v103j8qbb.cloudfront.net/img/webflow-badge-icon-d2.89e12c322e.svg"
                      )
                      .attr("alt", "")
                      .css({ marginRight: "4px", width: "26px" })),
                    (o = e("<img>")
                      .attr(
                        "src",
                        "https://d3e54v103j8qbb.cloudfront.net/img/webflow-badge-text-d2.c82cec3b78.svg"
                      )
                      .attr("alt", "Made in Webflow")),
                    n.append(i, o),
                    n[0])),
                  d(),
                  setTimeout(d, 500),
                  e(a).off(u, s).on(u, s));
            }),
            n
          );
        })
      );
    },
    322: function (e, t, n) {
      "use strict";
      var i = n(3949);
      i.define(
        "edit",
        (e.exports = function (e, t, n) {
          if (
            ((n = n || {}),
            (i.env("test") || i.env("frame")) &&
              !n.fixture &&
              !(function () {
                try {
                  return !!(window.top.__Cypress__ || window.PLAYWRIGHT_TEST);
                } catch (e) {
                  return !1;
                }
              })())
          )
            return { exit: 1 };
          var a,
            r = e(window),
            o = e(document.documentElement),
            l = document.location,
            c = "hashchange",
            u =
              n.load ||
              function () {
                var t, n, i;
                (a = !0),
                  (window.WebflowEditor = !0),
                  r.off(c, d),
                  (t = function (t) {
                    var n;
                    e.ajax({
                      url: p("https://editor-api.webflow.com/api/editor/view"),
                      data: { siteId: o.attr("data-wf-site") },
                      xhrFields: { withCredentials: !0 },
                      dataType: "json",
                      crossDomain: !0,
                      success:
                        ((n = t),
                        function (t) {
                          var i, a, r;
                          if (!t)
                            return void console.error(
                              "Could not load editor data"
                            );
                          (t.thirdPartyCookiesSupported = n),
                            (a =
                              (i = t.scriptPath).indexOf("//") >= 0
                                ? i
                                : p("https://editor-api.webflow.com" + i)),
                            (r = function () {
                              window.WebflowEditor(t);
                            }),
                            e
                              .ajax({
                                type: "GET",
                                url: a,
                                dataType: "script",
                                cache: !0,
                              })
                              .then(r, f);
                        }),
                    });
                  }),
                  ((n = window.document.createElement("iframe")).src =
                    "https://webflow.com/site/third-party-cookie-check.html"),
                  (n.style.display = "none"),
                  (n.sandbox = "allow-scripts allow-same-origin"),
                  (i = function (e) {
                    "WF_third_party_cookies_unsupported" === e.data
                      ? (g(n, i), t(!1))
                      : "WF_third_party_cookies_supported" === e.data &&
                        (g(n, i), t(!0));
                  }),
                  (n.onerror = function () {
                    g(n, i), t(!1);
                  }),
                  window.addEventListener("message", i, !1),
                  window.document.body.appendChild(n);
              },
            s = !1;
          try {
            s =
              localStorage &&
              localStorage.getItem &&
              localStorage.getItem("WebflowEditor");
          } catch (e) {}
          function d() {
            !a && /\?edit/.test(l.hash) && u();
          }
          function f(e, t, n) {
            throw (console.error("Could not load editor script: " + t), n);
          }
          function p(e) {
            return e.replace(/([^:])\/\//g, "$1/");
          }
          function g(e, t) {
            window.removeEventListener("message", t, !1), e.remove();
          }
          return (
            s
              ? u()
              : l.search
              ? (/[?&](edit)(?:[=&?]|$)/.test(l.search) ||
                  /\?edit$/.test(l.href)) &&
                u()
              : r.on(c, d).triggerHandler(c),
            {}
          );
        })
      );
    },
    2338: function (e, t, n) {
      "use strict";
      n(3949).define(
        "focus-visible",
        (e.exports = function () {
          return {
            ready: function () {
              if ("undefined" != typeof document)
                try {
                  document.querySelector(":focus-visible");
                } catch (e) {
                  !(function (e) {
                    var t = !0,
                      n = !1,
                      i = null,
                      a = {
                        text: !0,
                        search: !0,
                        url: !0,
                        tel: !0,
                        email: !0,
                        password: !0,
                        number: !0,
                        date: !0,
                        month: !0,
                        week: !0,
                        time: !0,
                        datetime: !0,
                        "datetime-local": !0,
                      };
                    function r(e) {
                      return (
                        !!e &&
                        e !== document &&
                        "HTML" !== e.nodeName &&
                        "BODY" !== e.nodeName &&
                        "classList" in e &&
                        "contains" in e.classList
                      );
                    }
                    function o(e) {
                      e.getAttribute("data-wf-focus-visible") ||
                        e.setAttribute("data-wf-focus-visible", "true");
                    }
                    function l() {
                      t = !1;
                    }
                    function c() {
                      document.addEventListener("mousemove", u),
                        document.addEventListener("mousedown", u),
                        document.addEventListener("mouseup", u),
                        document.addEventListener("pointermove", u),
                        document.addEventListener("pointerdown", u),
                        document.addEventListener("pointerup", u),
                        document.addEventListener("touchmove", u),
                        document.addEventListener("touchstart", u),
                        document.addEventListener("touchend", u);
                    }
                    function u(e) {
                      (e.target.nodeName &&
                        "html" === e.target.nodeName.toLowerCase()) ||
                        ((t = !1),
                        document.removeEventListener("mousemove", u),
                        document.removeEventListener("mousedown", u),
                        document.removeEventListener("mouseup", u),
                        document.removeEventListener("pointermove", u),
                        document.removeEventListener("pointerdown", u),
                        document.removeEventListener("pointerup", u),
                        document.removeEventListener("touchmove", u),
                        document.removeEventListener("touchstart", u),
                        document.removeEventListener("touchend", u));
                    }
                    document.addEventListener(
                      "keydown",
                      function (n) {
                        n.metaKey ||
                          n.altKey ||
                          n.ctrlKey ||
                          (r(e.activeElement) && o(e.activeElement), (t = !0));
                      },
                      !0
                    ),
                      document.addEventListener("mousedown", l, !0),
                      document.addEventListener("pointerdown", l, !0),
                      document.addEventListener("touchstart", l, !0),
                      document.addEventListener(
                        "visibilitychange",
                        function () {
                          "hidden" === document.visibilityState &&
                            (n && (t = !0), c());
                        },
                        !0
                      ),
                      c(),
                      e.addEventListener(
                        "focus",
                        function (e) {
                          if (r(e.target)) {
                            var n, i, l;
                            (t ||
                              ((i = (n = e.target).type),
                              ("INPUT" === (l = n.tagName) &&
                                a[i] &&
                                !n.readOnly) ||
                                ("TEXTAREA" === l && !n.readOnly) ||
                                n.isContentEditable ||
                                0)) &&
                              o(e.target);
                          }
                        },
                        !0
                      ),
                      e.addEventListener(
                        "blur",
                        function (e) {
                          if (
                            r(e.target) &&
                            e.target.hasAttribute("data-wf-focus-visible")
                          ) {
                            var t;
                            (n = !0),
                              window.clearTimeout(i),
                              (i = window.setTimeout(function () {
                                n = !1;
                              }, 100)),
                              (t = e.target).getAttribute(
                                "data-wf-focus-visible"
                              ) && t.removeAttribute("data-wf-focus-visible");
                          }
                        },
                        !0
                      );
                  })(document);
                }
            },
          };
        })
      );
    },
    8334: function (e, t, n) {
      "use strict";
      var i = n(3949);
      i.define(
        "focus",
        (e.exports = function () {
          var e = [],
            t = !1;
          function n(n) {
            t &&
              (n.preventDefault(),
              n.stopPropagation(),
              n.stopImmediatePropagation(),
              e.unshift(n));
          }
          function a(n) {
            var i, a;
            (a = (i = n.target).tagName),
              ((/^a$/i.test(a) && null != i.href) ||
                (/^(button|textarea)$/i.test(a) && !0 !== i.disabled) ||
                (/^input$/i.test(a) &&
                  /^(button|reset|submit|radio|checkbox)$/i.test(i.type) &&
                  !i.disabled) ||
                (!/^(button|input|textarea|select|a)$/i.test(a) &&
                  !Number.isNaN(Number.parseFloat(i.tabIndex))) ||
                /^audio$/i.test(a) ||
                (/^video$/i.test(a) && !0 === i.controls)) &&
                ((t = !0),
                setTimeout(() => {
                  for (t = !1, n.target.focus(); e.length > 0; ) {
                    var i = e.pop();
                    i.target.dispatchEvent(new MouseEvent(i.type, i));
                  }
                }, 0));
          }
          return {
            ready: function () {
              "undefined" != typeof document &&
                document.body.hasAttribute("data-wf-focus-within") &&
                i.env.safari &&
                (document.addEventListener("mousedown", a, !0),
                document.addEventListener("mouseup", n, !0),
                document.addEventListener("click", n, !0));
            },
          };
        })
      );
    },
    7199: function (e) {
      "use strict";
      var t = window.jQuery,
        n = {},
        i = [],
        a = ".w-ix",
        r = {
          reset: function (e, t) {
            t.__wf_intro = null;
          },
          intro: function (e, i) {
            i.__wf_intro ||
              ((i.__wf_intro = !0), t(i).triggerHandler(n.types.INTRO));
          },
          outro: function (e, i) {
            i.__wf_intro &&
              ((i.__wf_intro = null), t(i).triggerHandler(n.types.OUTRO));
          },
        };
      (n.triggers = {}),
        (n.types = { INTRO: "w-ix-intro" + a, OUTRO: "w-ix-outro" + a }),
        (n.init = function () {
          for (var e = i.length, a = 0; a < e; a++) {
            var o = i[a];
            o[0](0, o[1]);
          }
          (i = []), t.extend(n.triggers, r);
        }),
        (n.async = function () {
          for (var e in r) {
            var t = r[e];
            r.hasOwnProperty(e) &&
              (n.triggers[e] = function (e, n) {
                i.push([t, n]);
              });
          }
        }),
        n.async(),
        (e.exports = n);
    },
    5134: function (e, t, n) {
      "use strict";
      var i = n(7199);
      function a(e, t) {
        var n = document.createEvent("CustomEvent");
        n.initCustomEvent(t, !0, !0, null), e.dispatchEvent(n);
      }
      var r = window.jQuery,
        o = {},
        l = ".w-ix";
      (o.triggers = {}),
        (o.types = { INTRO: "w-ix-intro" + l, OUTRO: "w-ix-outro" + l }),
        r.extend(o.triggers, {
          reset: function (e, t) {
            i.triggers.reset(e, t);
          },
          intro: function (e, t) {
            i.triggers.intro(e, t), a(t, "COMPONENT_ACTIVE");
          },
          outro: function (e, t) {
            i.triggers.outro(e, t), a(t, "COMPONENT_INACTIVE");
          },
        }),
        (e.exports = o);
    },
    941: function (e, t, n) {
      "use strict";
      var i = n(3949),
        a = n(6011);
      a.setEnv(i.env),
        i.define(
          "ix2",
          (e.exports = function () {
            return a;
          })
        );
    },
    3949: function (e, t, n) {
      "use strict";
      var i,
        a,
        r = {},
        o = {},
        l = [],
        c = window.Webflow || [],
        u = window.jQuery,
        s = u(window),
        d = u(document),
        f = u.isFunction,
        p = (r._ = n(5756)),
        g = (r.tram = n(5487) && u.tram),
        E = !1,
        m = !1;
      function y(e) {
        r.env() &&
          (f(e.design) && s.on("__wf_design", e.design),
          f(e.preview) && s.on("__wf_preview", e.preview)),
          f(e.destroy) && s.on("__wf_destroy", e.destroy),
          e.ready &&
            f(e.ready) &&
            (function (e) {
              if (E) return e.ready();
              p.contains(l, e.ready) || l.push(e.ready);
            })(e);
      }
      function I(e) {
        var t;
        f(e.design) && s.off("__wf_design", e.design),
          f(e.preview) && s.off("__wf_preview", e.preview),
          f(e.destroy) && s.off("__wf_destroy", e.destroy),
          e.ready &&
            f(e.ready) &&
            ((t = e),
            (l = p.filter(l, function (e) {
              return e !== t.ready;
            })));
      }
      (g.config.hideBackface = !1),
        (g.config.keepInherited = !0),
        (r.define = function (e, t, n) {
          o[e] && I(o[e]);
          var i = (o[e] = t(u, p, n) || {});
          return y(i), i;
        }),
        (r.require = function (e) {
          return o[e];
        }),
        (r.push = function (e) {
          if (E) {
            f(e) && e();
            return;
          }
          c.push(e);
        }),
        (r.env = function (e) {
          var t = window.__wf_design,
            n = void 0 !== t;
          return e
            ? "design" === e
              ? n && t
              : "preview" === e
              ? n && !t
              : "slug" === e
              ? n && window.__wf_slug
              : "editor" === e
              ? window.WebflowEditor
              : "test" === e
              ? window.__wf_test
              : "frame" === e
              ? window !== window.top
              : void 0
            : n;
        });
      var b = navigator.userAgent.toLowerCase(),
        h = (r.env.touch =
          "ontouchstart" in window ||
          (window.DocumentTouch && document instanceof window.DocumentTouch)),
        T = (r.env.chrome =
          /chrome/.test(b) &&
          /Google/.test(navigator.vendor) &&
          parseInt(b.match(/chrome\/(\d+)\./)[1], 10)),
        v = (r.env.ios = /(ipod|iphone|ipad)/.test(b));
      (r.env.safari = /safari/.test(b) && !T && !v),
        h &&
          d.on("touchstart mousedown", function (e) {
            i = e.target;
          }),
        (r.validClick = h
          ? function (e) {
              return e === i || u.contains(e, i);
            }
          : function () {
              return !0;
            });
      var O = "resize.webflow orientationchange.webflow load.webflow",
        _ = "scroll.webflow " + O;
      function R(e, t) {
        var n = [],
          i = {};
        return (
          (i.up = p.throttle(function (e) {
            p.each(n, function (t) {
              t(e);
            });
          })),
          e && t && e.on(t, i.up),
          (i.on = function (e) {
            "function" == typeof e && (p.contains(n, e) || n.push(e));
          }),
          (i.off = function (e) {
            if (!arguments.length) {
              n = [];
              return;
            }
            n = p.filter(n, function (t) {
              return t !== e;
            });
          }),
          i
        );
      }
      function A(e) {
        f(e) && e();
      }
      function w() {
        a && (a.reject(), s.off("load", a.resolve)),
          (a = new u.Deferred()),
          s.on("load", a.resolve);
      }
      (r.resize = R(s, O)),
        (r.scroll = R(s, _)),
        (r.redraw = R()),
        (r.location = function (e) {
          window.location = e;
        }),
        r.env() && (r.location = function () {}),
        (r.ready = function () {
          (E = !0),
            m ? ((m = !1), p.each(o, y)) : p.each(l, A),
            p.each(c, A),
            r.resize.up();
        }),
        (r.load = function (e) {
          a.then(e);
        }),
        (r.destroy = function (e) {
          (e = e || {}),
            (m = !0),
            s.triggerHandler("__wf_destroy"),
            null != e.domready && (E = e.domready),
            p.each(o, I),
            r.resize.off(),
            r.scroll.off(),
            r.redraw.off(),
            (l = []),
            (c = []),
            "pending" === a.state() && w();
        }),
        u(r.ready),
        w(),
        (e.exports = window.Webflow = r);
    },
    7624: function (e, t, n) {
      "use strict";
      var i = n(3949);
      i.define(
        "links",
        (e.exports = function (e, t) {
          var n,
            a,
            r,
            o = {},
            l = e(window),
            c = i.env(),
            u = window.location,
            s = document.createElement("a"),
            d = "w--current",
            f = /index\.(html|php)$/,
            p = /\/$/;
          function g() {
            var e = l.scrollTop(),
              n = l.height();
            t.each(a, function (t) {
              if (!t.link.attr("hreflang")) {
                var i = t.link,
                  a = t.sec,
                  r = a.offset().top,
                  o = a.outerHeight(),
                  l = 0.5 * n,
                  c = a.is(":visible") && r + o - l >= e && r + l <= e + n;
                t.active !== c && ((t.active = c), E(i, d, c));
              }
            });
          }
          function E(e, t, n) {
            var i = e.hasClass(t);
            (!n || !i) && (n || i) && (n ? e.addClass(t) : e.removeClass(t));
          }
          return (
            (o.ready =
              o.design =
              o.preview =
                function () {
                  (n = c && i.env("design")),
                    (r = i.env("slug") || u.pathname || ""),
                    i.scroll.off(g),
                    (a = []);
                  for (var t = document.links, o = 0; o < t.length; ++o)
                    !(function (t) {
                      if (!t.getAttribute("hreflang")) {
                        var i =
                          (n && t.getAttribute("href-disabled")) ||
                          t.getAttribute("href");
                        if (((s.href = i), !(i.indexOf(":") >= 0))) {
                          var o = e(t);
                          if (
                            s.hash.length > 1 &&
                            s.host + s.pathname === u.host + u.pathname
                          ) {
                            if (!/^#[a-zA-Z0-9\-\_]+$/.test(s.hash)) return;
                            var l = e(s.hash);
                            l.length && a.push({ link: o, sec: l, active: !1 });
                            return;
                          }
                          "#" !== i &&
                            "" !== i &&
                            E(
                              o,
                              d,
                              s.href === u.href ||
                                i === r ||
                                (f.test(i) && p.test(r))
                            );
                        }
                      }
                    })(t[o]);
                  a.length && (i.scroll.on(g), g());
                }),
            o
          );
        })
      );
    },
    286: function (e, t, n) {
      "use strict";
      var i = n(3949);
      i.define(
        "scroll",
        (e.exports = function (e) {
          var t = {
              WF_CLICK_EMPTY: "click.wf-empty-link",
              WF_CLICK_SCROLL: "click.wf-scroll",
            },
            n = window.location,
            a = !(function () {
              try {
                return !!window.frameElement;
              } catch (e) {
                return !0;
              }
            })()
              ? window.history
              : null,
            r = e(window),
            o = e(document),
            l = e(document.body),
            c =
              window.requestAnimationFrame ||
              window.mozRequestAnimationFrame ||
              window.webkitRequestAnimationFrame ||
              function (e) {
                window.setTimeout(e, 15);
              },
            u = i.env("editor") ? ".w-editor-body" : "body",
            s =
              "header, " +
              u +
              " > .header, " +
              u +
              " > .w-nav:not([data-no-scroll])",
            d = 'a[href="#"]',
            f = 'a[href*="#"]:not(.w-tab-link):not(' + d + ")",
            p = document.createElement("style");
          p.appendChild(
            document.createTextNode(
              '.wf-force-outline-none[tabindex="-1"]:focus{outline:none;}'
            )
          );
          var g = /^#[a-zA-Z0-9][\w:.-]*$/;
          let E =
            "function" == typeof window.matchMedia &&
            window.matchMedia("(prefers-reduced-motion: reduce)");
          function m(e, t) {
            var n;
            switch (t) {
              case "add":
                (n = e.attr("tabindex"))
                  ? e.attr("data-wf-tabindex-swap", n)
                  : e.attr("tabindex", "-1");
                break;
              case "remove":
                (n = e.attr("data-wf-tabindex-swap"))
                  ? (e.attr("tabindex", n),
                    e.removeAttr("data-wf-tabindex-swap"))
                  : e.removeAttr("tabindex");
            }
            e.toggleClass("wf-force-outline-none", "add" === t);
          }
          function y(t) {
            var o = t.currentTarget;
            if (
              !(
                i.env("design") ||
                (window.$.mobile && /(?:^|\s)ui-link(?:$|\s)/.test(o.className))
              )
            ) {
              var u =
                g.test(o.hash) && o.host + o.pathname === n.host + n.pathname
                  ? o.hash
                  : "";
              if ("" !== u) {
                var d,
                  f = e(u);
                f.length &&
                  (t && (t.preventDefault(), t.stopPropagation()),
                  (d = u),
                  n.hash !== d &&
                    a &&
                    a.pushState &&
                    !(i.env.chrome && "file:" === n.protocol) &&
                    (a.state && a.state.hash) !== d &&
                    a.pushState({ hash: d }, "", d),
                  window.setTimeout(function () {
                    !(function (t, n) {
                      var i = r.scrollTop(),
                        a = (function (t) {
                          var n = e(s),
                            i =
                              "fixed" === n.css("position")
                                ? n.outerHeight()
                                : 0,
                            a = t.offset().top - i;
                          if ("mid" === t.data("scroll")) {
                            var o = r.height() - i,
                              l = t.outerHeight();
                            l < o && (a -= Math.round((o - l) / 2));
                          }
                          return a;
                        })(t);
                      if (i !== a) {
                        var o = (function (e, t, n) {
                            if (
                              "none" ===
                                document.body.getAttribute(
                                  "data-wf-scroll-motion"
                                ) ||
                              E.matches
                            )
                              return 0;
                            var i = 1;
                            return (
                              l.add(e).each(function (e, t) {
                                var n = parseFloat(
                                  t.getAttribute("data-scroll-time")
                                );
                                !isNaN(n) && n >= 0 && (i = n);
                              }),
                              (472.143 * Math.log(Math.abs(t - n) + 125) -
                                2e3) *
                                i
                            );
                          })(t, i, a),
                          u = Date.now(),
                          d = function () {
                            var e,
                              t,
                              r,
                              l,
                              s,
                              f = Date.now() - u;
                            window.scroll(
                              0,
                              ((e = i),
                              (t = a),
                              (r = f) > (l = o)
                                ? t
                                : e +
                                  (t - e) *
                                    ((s = r / l) < 0.5
                                      ? 4 * s * s * s
                                      : (s - 1) * (2 * s - 2) * (2 * s - 2) +
                                        1))
                            ),
                              f <= o ? c(d) : "function" == typeof n && n();
                          };
                        c(d);
                      }
                    })(f, function () {
                      m(f, "add"),
                        f.get(0).focus({ preventScroll: !0 }),
                        m(f, "remove");
                    });
                  }, 300 * !t));
              }
            }
          }
          return {
            ready: function () {
              var { WF_CLICK_EMPTY: e, WF_CLICK_SCROLL: n } = t;
              o.on(n, f, y),
                o.on(e, d, function (e) {
                  e.preventDefault();
                }),
                document.head.insertBefore(p, document.head.firstChild);
            },
          };
        })
      );
    },
    3695: function (e, t, n) {
      "use strict";
      n(3949).define(
        "touch",
        (e.exports = function (e) {
          var t = {},
            n = window.getSelection;
          function i(t) {
            var i,
              a,
              r = !1,
              o = !1,
              l = Math.min(Math.round(0.04 * window.innerWidth), 40);
            function c(e) {
              var t = e.touches;
              (t && t.length > 1) ||
                ((r = !0),
                t ? ((o = !0), (i = t[0].clientX)) : (i = e.clientX),
                (a = i));
            }
            function u(t) {
              if (r) {
                if (o && "mousemove" === t.type) {
                  t.preventDefault(), t.stopPropagation();
                  return;
                }
                var i,
                  c,
                  u,
                  s,
                  f = t.touches,
                  p = f ? f[0].clientX : t.clientX,
                  g = p - a;
                (a = p),
                  Math.abs(g) > l &&
                    n &&
                    "" === String(n()) &&
                    ((i = "swipe"),
                    (c = t),
                    (u = { direction: g > 0 ? "right" : "left" }),
                    (s = e.Event(i, { originalEvent: c })),
                    e(c.target).trigger(s, u),
                    d());
              }
            }
            function s(e) {
              if (r && ((r = !1), o && "mouseup" === e.type)) {
                e.preventDefault(), e.stopPropagation(), (o = !1);
                return;
              }
            }
            function d() {
              r = !1;
            }
            t.addEventListener("touchstart", c, !1),
              t.addEventListener("touchmove", u, !1),
              t.addEventListener("touchend", s, !1),
              t.addEventListener("touchcancel", d, !1),
              t.addEventListener("mousedown", c, !1),
              t.addEventListener("mousemove", u, !1),
              t.addEventListener("mouseup", s, !1),
              t.addEventListener("mouseout", d, !1),
              (this.destroy = function () {
                t.removeEventListener("touchstart", c, !1),
                  t.removeEventListener("touchmove", u, !1),
                  t.removeEventListener("touchend", s, !1),
                  t.removeEventListener("touchcancel", d, !1),
                  t.removeEventListener("mousedown", c, !1),
                  t.removeEventListener("mousemove", u, !1),
                  t.removeEventListener("mouseup", s, !1),
                  t.removeEventListener("mouseout", d, !1),
                  (t = null);
              });
          }
          return (
            (e.event.special.tap = {
              bindType: "click",
              delegateType: "click",
            }),
            (t.init = function (t) {
              return (t = "string" == typeof t ? e(t).get(0) : t)
                ? new i(t)
                : null;
            }),
            (t.instance = t.init(document)),
            t
          );
        })
      );
    },
    9858: function (e, t, n) {
      "use strict";
      var i = n(3949),
        a = n(5134);
      let r = {
          ARROW_LEFT: 37,
          ARROW_UP: 38,
          ARROW_RIGHT: 39,
          ARROW_DOWN: 40,
          ESCAPE: 27,
          SPACE: 32,
          ENTER: 13,
          HOME: 36,
          END: 35,
        },
        o = /^#[a-zA-Z0-9\-_]+$/;
      i.define(
        "dropdown",
        (e.exports = function (e, t) {
          var n,
            l,
            c = t.debounce,
            u = {},
            s = i.env(),
            d = !1,
            f = i.env.touch,
            p = ".w-dropdown",
            g = "w--open",
            E = a.triggers,
            m = "focusout" + p,
            y = "keydown" + p,
            I = "mouseenter" + p,
            b = "mousemove" + p,
            h = "mouseleave" + p,
            T = (f ? "click" : "mouseup") + p,
            v = "w-close" + p,
            O = "setting" + p,
            _ = e(document);
          function R() {
            (n = s && i.env("design")), (l = _.find(p)).each(A);
          }
          function A(t, a) {
            var l,
              u,
              d,
              f,
              E,
              b,
              h,
              R,
              A,
              P,
              M = e(a),
              F = e.data(a, p);
            F ||
              (F = e.data(a, p, {
                open: !1,
                el: M,
                config: {},
                selectedIdx: -1,
              })),
              (F.toggle = F.el.children(".w-dropdown-toggle")),
              (F.list = F.el.children(".w-dropdown-list")),
              (F.links = F.list.find("a:not(.w-dropdown .w-dropdown a)")),
              (F.complete =
                ((l = F),
                function () {
                  l.list.removeClass(g),
                    l.toggle.removeClass(g),
                    l.manageZ && l.el.css("z-index", "");
                })),
              (F.mouseLeave =
                ((u = F),
                function () {
                  (u.hovering = !1), u.links.is(":focus") || S(u);
                })),
              (F.mouseUpOutside =
                ((d = F).mouseUpOutside && _.off(T, d.mouseUpOutside),
                c(function (t) {
                  if (d.open) {
                    var n = e(t.target);
                    if (!n.closest(".w-dropdown-toggle").length) {
                      var a = -1 === e.inArray(d.el[0], n.parents(p)),
                        r = i.env("editor");
                      if (a) {
                        if (r) {
                          var o =
                              1 === n.parents().length &&
                              1 === n.parents("svg").length,
                            l = n.parents(
                              ".w-editor-bem-EditorHoverControls"
                            ).length;
                          if (o || l) return;
                        }
                        S(d);
                      }
                    }
                  }
                }))),
              (F.mouseMoveOutside =
                ((f = F),
                c(function (t) {
                  if (f.open) {
                    var n = e(t.target);
                    if (-1 === e.inArray(f.el[0], n.parents(p))) {
                      var i = n.parents(
                          ".w-editor-bem-EditorHoverControls"
                        ).length,
                        a = n.parents(".w-editor-bem-RTToolbar").length,
                        r = e(".w-editor-bem-EditorOverlay"),
                        o =
                          r.find(".w-editor-edit-outline").length ||
                          r.find(".w-editor-bem-RTToolbar").length;
                      if (i || a || o) return;
                      (f.hovering = !1), S(f);
                    }
                  }
                }))),
              w(F);
            var D = F.toggle.attr("id"),
              G = F.list.attr("id");
            D || (D = "w-dropdown-toggle-" + t),
              G || (G = "w-dropdown-list-" + t),
              F.toggle.attr("id", D),
              F.toggle.attr("aria-controls", G),
              F.toggle.attr("aria-haspopup", "menu"),
              F.toggle.attr("aria-expanded", "false"),
              F.toggle
                .find(".w-icon-dropdown-toggle")
                .attr("aria-hidden", "true"),
              "BUTTON" !== F.toggle.prop("tagName") &&
                (F.toggle.attr("role", "button"),
                F.toggle.attr("tabindex") || F.toggle.attr("tabindex", "0")),
              F.list.attr("id", G),
              F.list.attr("aria-labelledby", D),
              F.links.each(function (e, t) {
                t.hasAttribute("tabindex") || t.setAttribute("tabindex", "0"),
                  o.test(t.hash) &&
                    t.addEventListener("click", S.bind(null, F));
              }),
              F.el.off(p),
              F.toggle.off(p),
              F.nav && F.nav.off(p);
            var x = N(F, !0);
            n &&
              F.el.on(
                O,
                ((E = F),
                function (e, t) {
                  (t = t || {}),
                    w(E),
                    !0 === t.open && L(E),
                    !1 === t.open && S(E, { immediate: !0 });
                })
              ),
              n ||
                (s && ((F.hovering = !1), S(F)),
                F.config.hover &&
                  F.toggle.on(
                    I,
                    ((b = F),
                    function () {
                      (b.hovering = !0), L(b);
                    })
                  ),
                F.el.on(v, x),
                F.el.on(
                  y,
                  ((h = F),
                  function (e) {
                    if (!n && h.open)
                      switch (
                        ((h.selectedIdx = h.links.index(
                          document.activeElement
                        )),
                        e.keyCode)
                      ) {
                        case r.HOME:
                          if (!h.open) return;
                          return (h.selectedIdx = 0), C(h), e.preventDefault();
                        case r.END:
                          if (!h.open) return;
                          return (
                            (h.selectedIdx = h.links.length - 1),
                            C(h),
                            e.preventDefault()
                          );
                        case r.ESCAPE:
                          return S(h), h.toggle.focus(), e.stopPropagation();
                        case r.ARROW_RIGHT:
                        case r.ARROW_DOWN:
                          return (
                            (h.selectedIdx = Math.min(
                              h.links.length - 1,
                              h.selectedIdx + 1
                            )),
                            C(h),
                            e.preventDefault()
                          );
                        case r.ARROW_LEFT:
                        case r.ARROW_UP:
                          return (
                            (h.selectedIdx = Math.max(-1, h.selectedIdx - 1)),
                            C(h),
                            e.preventDefault()
                          );
                      }
                  })
                ),
                F.el.on(
                  m,
                  ((R = F),
                  c(function (e) {
                    var { relatedTarget: t, target: n } = e,
                      i = R.el[0];
                    return (
                      i.contains(t) || i.contains(n) || S(R),
                      e.stopPropagation()
                    );
                  }))
                ),
                F.toggle.on(T, x),
                F.toggle.on(
                  y,
                  ((P = N((A = F), !0)),
                  function (e) {
                    if (!n) {
                      if (!A.open)
                        switch (e.keyCode) {
                          case r.ARROW_UP:
                          case r.ARROW_DOWN:
                            return e.stopPropagation();
                        }
                      switch (e.keyCode) {
                        case r.SPACE:
                        case r.ENTER:
                          return P(), e.stopPropagation(), e.preventDefault();
                      }
                    }
                  })
                ),
                (F.nav = F.el.closest(".w-nav")),
                F.nav.on(v, x));
          }
          function w(e) {
            var t = Number(e.el.css("z-index"));
            (e.manageZ = 900 === t || 901 === t),
              (e.config = {
                hover: "true" === e.el.attr("data-hover") && !f,
                delay: e.el.attr("data-delay"),
              });
          }
          function N(e, t) {
            return c(function (n) {
              if (e.open || (n && "w-close" === n.type))
                return S(e, { forceClose: t });
              L(e);
            });
          }
          function L(t) {
            if (!t.open) {
              (a = t.el[0]),
                l.each(function (t, n) {
                  var i = e(n);
                  i.is(a) || i.has(a).length || i.triggerHandler(v);
                }),
                (t.open = !0),
                t.list.addClass(g),
                t.toggle.addClass(g),
                t.toggle.attr("aria-expanded", "true"),
                E.intro(0, t.el[0]),
                i.redraw.up(),
                t.manageZ && t.el.css("z-index", 901);
              var a,
                r = i.env("editor");
              n || _.on(T, t.mouseUpOutside),
                t.hovering && !r && t.el.on(h, t.mouseLeave),
                t.hovering && r && _.on(b, t.mouseMoveOutside),
                window.clearTimeout(t.delayId);
            }
          }
          function S(e, { immediate: t, forceClose: n } = {}) {
            if (e.open && (!e.config.hover || !e.hovering || n)) {
              e.toggle.attr("aria-expanded", "false"), (e.open = !1);
              var i = e.config;
              if (
                (E.outro(0, e.el[0]),
                _.off(T, e.mouseUpOutside),
                _.off(b, e.mouseMoveOutside),
                e.el.off(h, e.mouseLeave),
                window.clearTimeout(e.delayId),
                !i.delay || t)
              )
                return e.complete();
              e.delayId = window.setTimeout(e.complete, i.delay);
            }
          }
          function C(e) {
            e.links[e.selectedIdx] && e.links[e.selectedIdx].focus();
          }
          return (
            (u.ready = R),
            (u.design = function () {
              d &&
                _.find(p).each(function (t, n) {
                  e(n).triggerHandler(v);
                }),
                (d = !1),
                R();
            }),
            (u.preview = function () {
              (d = !0), R();
            }),
            u
          );
        })
      );
    },
    6524: function (e, t) {
      "use strict";
      function n(e, t, n, i, a, r, o, l, c, u, s, d, f) {
        return function (p) {
          e(p);
          var g = p.form,
            E = {
              name: g.attr("data-name") || g.attr("name") || "Untitled Form",
              pageId: g.attr("data-wf-page-id") || "",
              elementId: g.attr("data-wf-element-id") || "",
              domain: d("html").attr("data-wf-domain") || null,
              source: t.href,
              test: n.env(),
              fields: {},
              fileUploads: {},
              dolphin: /pass[\s-_]?(word|code)|secret|login|credentials/i.test(
                g.html()
              ),
              trackingCookies: i(),
            };
          let m = g.attr("data-wf-flow");
          m && (E.wfFlow = m);
          let y = g.attr("data-wf-locale-id");
          y && (E.localeId = y), a(p);
          var I = r(g, E.fields);
          return I
            ? o(I)
            : ((E.fileUploads = l(g)), c(p), u)
            ? void d
                .ajax({
                  url: f,
                  type: "POST",
                  data: E,
                  dataType: "json",
                  crossDomain: !0,
                })
                .done(function (e) {
                  e && 200 === e.code && (p.success = !0), s(p);
                })
                .fail(function () {
                  s(p);
                })
            : void s(p);
        };
      }
      Object.defineProperty(t, "default", {
        enumerable: !0,
        get: function () {
          return n;
        },
      });
    },
    7527: function (e, t, n) {
      "use strict";
      var i = n(3949);
      let a = (e, t, n, i) => {
        let a = document.createElement("div");
        t.appendChild(a),
          turnstile.render(a, {
            sitekey: e,
            callback: function (e) {
              n(e);
            },
            "error-callback": function () {
              i();
            },
          });
      };
      i.define(
        "forms",
        (e.exports = function (e, t) {
          let r,
            o = "TURNSTILE_LOADED";
          var l,
            c,
            u,
            s,
            d,
            f = {},
            p = e(document),
            g = window.location,
            E = window.XDomainRequest && !window.atob,
            m = ".w-form",
            y = /e(-)?mail/i,
            I = /^\S+@\S+$/,
            b = window.alert,
            h = i.env();
          let T = p.find("[data-turnstile-sitekey]").data("turnstile-sitekey");
          var v = /list-manage[1-9]?.com/i,
            O = t.debounce(function () {
              b(
                "Oops! This page has improperly configured forms. Please contact your website administrator to fix this issue."
              );
            }, 100);
          function _(t, r) {
            var l = e(r),
              u = e.data(r, m);
            u || (u = e.data(r, m, { form: l })), R(u);
            var f = l.closest("div.w-form");
            (u.done = f.find("> .w-form-done")),
              (u.fail = f.find("> .w-form-fail")),
              (u.fileUploads = f.find(".w-file-upload")),
              u.fileUploads.each(function (t) {
                !(function (t, n) {
                  if (n.fileUploads && n.fileUploads[t]) {
                    var i,
                      a = e(n.fileUploads[t]),
                      r = a.find("> .w-file-upload-default"),
                      o = a.find("> .w-file-upload-uploading"),
                      l = a.find("> .w-file-upload-success"),
                      c = a.find("> .w-file-upload-error"),
                      u = r.find(".w-file-upload-input"),
                      s = r.find(".w-file-upload-label"),
                      f = s.children(),
                      p = c.find(".w-file-upload-error-msg"),
                      g = l.find(".w-file-upload-file"),
                      E = l.find(".w-file-remove-link"),
                      m = g.find(".w-file-upload-file-name"),
                      y = p.attr("data-w-size-error"),
                      I = p.attr("data-w-type-error"),
                      b = p.attr("data-w-generic-error");
                    if (
                      (h ||
                        s.on("click keydown", function (e) {
                          ("keydown" !== e.type ||
                            13 === e.which ||
                            32 === e.which) &&
                            (e.preventDefault(), u.click());
                        }),
                      s
                        .find(".w-icon-file-upload-icon")
                        .attr("aria-hidden", "true"),
                      E.find(".w-icon-file-upload-remove").attr(
                        "aria-hidden",
                        "true"
                      ),
                      h)
                    )
                      u.on("click", function (e) {
                        e.preventDefault();
                      }),
                        s.on("click", function (e) {
                          e.preventDefault();
                        }),
                        f.on("click", function (e) {
                          e.preventDefault();
                        });
                    else {
                      E.on("click keydown", function (e) {
                        if ("keydown" === e.type) {
                          if (13 !== e.which && 32 !== e.which) return;
                          e.preventDefault();
                        }
                        u.removeAttr("data-value"),
                          u.val(""),
                          m.html(""),
                          r.toggle(!0),
                          l.toggle(!1),
                          s.focus();
                      }),
                        u.on("change", function (a) {
                          var l, u, s;
                          (i =
                            a.target && a.target.files && a.target.files[0]) &&
                            (r.toggle(!1),
                            c.toggle(!1),
                            o.toggle(!0),
                            o.focus(),
                            m.text(i.name),
                            w() || A(n),
                            (n.fileUploads[t].uploading = !0),
                            (l = i),
                            (u = O),
                            (s = new URLSearchParams({
                              name: l.name,
                              size: l.size,
                            })),
                            e
                              .ajax({
                                type: "GET",
                                url: `${d}?${s}`,
                                crossDomain: !0,
                              })
                              .done(function (e) {
                                u(null, e);
                              })
                              .fail(function (e) {
                                u(e);
                              }));
                        });
                      var T = s.outerHeight();
                      u.height(T), u.width(1);
                    }
                  }
                  function v(e) {
                    var i = e.responseJSON && e.responseJSON.msg,
                      a = b;
                    "string" == typeof i &&
                    0 === i.indexOf("InvalidFileTypeError")
                      ? (a = I)
                      : "string" == typeof i &&
                        0 === i.indexOf("MaxFileSizeError") &&
                        (a = y),
                      p.text(a),
                      u.removeAttr("data-value"),
                      u.val(""),
                      o.toggle(!1),
                      r.toggle(!0),
                      c.toggle(!0),
                      c.focus(),
                      (n.fileUploads[t].uploading = !1),
                      w() || R(n);
                  }
                  function O(t, n) {
                    if (t) return v(t);
                    var a = n.fileName,
                      r = n.postData,
                      o = n.fileId,
                      l = n.s3Url;
                    u.attr("data-value", o),
                      (function (t, n, i, a, r) {
                        var o = new FormData();
                        for (var l in n) o.append(l, n[l]);
                        o.append("file", i, a),
                          e
                            .ajax({
                              type: "POST",
                              url: t,
                              data: o,
                              processData: !1,
                              contentType: !1,
                            })
                            .done(function () {
                              r(null);
                            })
                            .fail(function (e) {
                              r(e);
                            });
                      })(l, r, i, a, _);
                  }
                  function _(e) {
                    if (e) return v(e);
                    o.toggle(!1),
                      l.css("display", "inline-block"),
                      l.focus(),
                      (n.fileUploads[t].uploading = !1),
                      w() || R(n);
                  }
                  function w() {
                    return (
                      (n.fileUploads && n.fileUploads.toArray()) ||
                      []
                    ).some(function (e) {
                      return e.uploading;
                    });
                  }
                })(t, u);
              }),
              T &&
                ((function (e) {
                  let t = e.btn || e.form.find(':input[type="submit"]');
                  e.btn || (e.btn = t),
                    t.prop("disabled", !0),
                    t.addClass("w-form-loading");
                })(u),
                w(l, !0),
                p.on(
                  "undefined" != typeof turnstile ? "ready" : o,
                  function () {
                    a(
                      T,
                      r,
                      (e) => {
                        (u.turnstileToken = e), R(u), w(l, !1);
                      },
                      () => {
                        R(u), u.btn && u.btn.prop("disabled", !0), w(l, !1);
                      }
                    );
                  }
                ));
            var E =
              u.form.attr("aria-label") || u.form.attr("data-name") || "Form";
            u.done.attr("aria-label") || u.form.attr("aria-label", E),
              u.done.attr("tabindex", "-1"),
              u.done.attr("role", "region"),
              u.done.attr("aria-label") ||
                u.done.attr("aria-label", E + " success"),
              u.fail.attr("tabindex", "-1"),
              u.fail.attr("role", "region"),
              u.fail.attr("aria-label") ||
                u.fail.attr("aria-label", E + " failure");
            var y = (u.action = l.attr("action"));
            if (
              ((u.handler = null),
              (u.redirect = l.attr("data-redirect")),
              v.test(y))
            ) {
              u.handler = P;
              return;
            }
            if (!y) {
              if (c) {
                u.handler = (0, n(6524).default)(
                  R,
                  g,
                  i,
                  C,
                  F,
                  N,
                  b,
                  L,
                  A,
                  c,
                  M,
                  e,
                  s
                );
                return;
              }
              O();
            }
          }
          function R(e) {
            var t = (e.btn = e.form.find(':input[type="submit"]'));
            (e.wait = e.btn.attr("data-wait") || null), (e.success = !1);
            let n = !!(T && !e.turnstileToken);
            t.prop("disabled", n),
              t.removeClass("w-form-loading"),
              e.label && t.val(e.label);
          }
          function A(e) {
            var t = e.btn,
              n = e.wait;
            t.prop("disabled", !0), n && ((e.label = t.val()), t.val(n));
          }
          function w(e, t) {
            let n = e.closest(".w-form");
            t ? n.addClass("w-form-loading") : n.removeClass("w-form-loading");
          }
          function N(t, n) {
            var i = null;
            return (
              (n = n || {}),
              t
                .find(
                  ':input:not([type="submit"]):not([type="file"]):not([type="button"])'
                )
                .each(function (a, r) {
                  var o,
                    l,
                    c,
                    u,
                    s,
                    d = e(r),
                    f = d.attr("type"),
                    p =
                      d.attr("data-name") ||
                      d.attr("name") ||
                      "Field " + (a + 1);
                  p = encodeURIComponent(p);
                  var g = d.val();
                  if ("checkbox" === f) g = d.is(":checked");
                  else if ("radio" === f) {
                    if (null === n[p] || "string" == typeof n[p]) return;
                    g =
                      t
                        .find('input[name="' + d.attr("name") + '"]:checked')
                        .val() || null;
                  }
                  "string" == typeof g && (g = e.trim(g)),
                    (n[p] = g),
                    (i =
                      i ||
                      ((o = d),
                      (l = f),
                      (c = p),
                      (u = g),
                      (s = null),
                      "password" === l
                        ? (s = "Passwords cannot be submitted.")
                        : o.attr("required")
                        ? u
                          ? y.test(o.attr("type")) &&
                            !I.test(u) &&
                            (s = "Please enter a valid email address for: " + c)
                          : (s = "Please fill out the required field: " + c)
                        : "g-recaptcha-response" !== c ||
                          u ||
                          (s = "Please confirm you're not a robot."),
                      s));
                }),
              i
            );
          }
          function L(t) {
            var n = {};
            return (
              t.find(':input[type="file"]').each(function (t, i) {
                var a = e(i),
                  r =
                    a.attr("data-name") || a.attr("name") || "File " + (t + 1),
                  o = a.attr("data-value");
                "string" == typeof o && (o = e.trim(o)), (n[r] = o);
              }),
              n
            );
          }
          f.ready =
            f.design =
            f.preview =
              function () {
                T &&
                  (((r = document.createElement("script")).src =
                    "https://challenges.cloudflare.com/turnstile/v0/api.js"),
                  document.head.appendChild(r),
                  (r.onload = () => {
                    p.trigger(o);
                  })),
                  (s =
                    "https://webflow.com/api/v1/form/" +
                    (c = e("html").attr("data-wf-site"))),
                  E &&
                    s.indexOf("https://webflow.com") >= 0 &&
                    (s = s.replace(
                      "https://webflow.com",
                      "https://formdata.webflow.com"
                    )),
                  (d = `${s}/signFile`),
                  (l = e(m + " form")).length && l.each(_),
                  (!h || i.env("preview")) &&
                    !u &&
                    (function () {
                      (u = !0),
                        p.on("submit", m + " form", function (t) {
                          var n = e.data(this, m);
                          n.handler && ((n.evt = t), n.handler(n));
                        });
                      let t = ".w-checkbox-input",
                        n = ".w-radio-input",
                        i = "w--redirected-checked",
                        a = "w--redirected-focus",
                        r = "w--redirected-focus-visible",
                        o = [
                          ["checkbox", t],
                          ["radio", n],
                        ];
                      p.on(
                        "change",
                        m + ' form input[type="checkbox"]:not(' + t + ")",
                        (n) => {
                          e(n.target).siblings(t).toggleClass(i);
                        }
                      ),
                        p.on("change", m + ' form input[type="radio"]', (a) => {
                          e(`input[name="${a.target.name}"]:not(${t})`).map(
                            (t, a) => e(a).siblings(n).removeClass(i)
                          );
                          let r = e(a.target);
                          r.hasClass("w-radio-input") ||
                            r.siblings(n).addClass(i);
                        }),
                        o.forEach(([t, n]) => {
                          p.on(
                            "focus",
                            m + ` form input[type="${t}"]:not(` + n + ")",
                            (t) => {
                              e(t.target).siblings(n).addClass(a),
                                e(t.target)
                                  .filter(
                                    ":focus-visible, [data-wf-focus-visible]"
                                  )
                                  .siblings(n)
                                  .addClass(r);
                            }
                          ),
                            p.on(
                              "blur",
                              m + ` form input[type="${t}"]:not(` + n + ")",
                              (t) => {
                                e(t.target)
                                  .siblings(n)
                                  .removeClass(`${a} ${r}`);
                              }
                            );
                        });
                    })();
              };
          let S = { _mkto_trk: "marketo" };
          function C() {
            return document.cookie.split("; ").reduce(function (e, t) {
              let n = t.split("="),
                i = n[0];
              if (i in S) {
                let t = S[i],
                  a = n.slice(1).join("=");
                e[t] = a;
              }
              return e;
            }, {});
          }
          function P(n) {
            R(n);
            var i,
              a = n.form,
              r = {};
            if (/^https/.test(g.href) && !/^https/.test(n.action))
              return void a.attr("method", "post");
            F(n);
            var o = N(a, r);
            if (o) return b(o);
            A(n),
              t.each(r, function (e, t) {
                y.test(t) && (r.EMAIL = e),
                  /^((full[ _-]?)?name)$/i.test(t) && (i = e),
                  /^(first[ _-]?name)$/i.test(t) && (r.FNAME = e),
                  /^(last[ _-]?name)$/i.test(t) && (r.LNAME = e);
              }),
              i &&
                !r.FNAME &&
                ((r.FNAME = (i = i.split(" "))[0]),
                (r.LNAME = r.LNAME || i[1]));
            var l = n.action.replace("/post?", "/post-json?") + "&c=?",
              c = l.indexOf("u=") + 2;
            c = l.substring(c, l.indexOf("&", c));
            var u = l.indexOf("id=") + 3;
            (r["b_" + c + "_" + (u = l.substring(u, l.indexOf("&", u)))] = ""),
              e
                .ajax({ url: l, data: r, dataType: "jsonp" })
                .done(function (e) {
                  (n.success = "success" === e.result || /already/.test(e.msg)),
                    n.success || console.info("MailChimp error: " + e.msg),
                    M(n);
                })
                .fail(function () {
                  M(n);
                });
          }
          function M(e) {
            var t = e.form,
              n = e.redirect,
              a = e.success;
            if (a && n) return void i.location(n);
            e.done.toggle(a),
              e.fail.toggle(!a),
              a ? e.done.focus() : e.fail.focus(),
              t.toggle(!a),
              R(e);
          }
          function F(e) {
            e.evt && e.evt.preventDefault(), (e.evt = null);
          }
          return f;
        })
      );
    },
    1655: function (e, t, n) {
      "use strict";
      var i = n(3949),
        a = n(5134);
      let r = {
        ARROW_LEFT: 37,
        ARROW_UP: 38,
        ARROW_RIGHT: 39,
        ARROW_DOWN: 40,
        ESCAPE: 27,
        SPACE: 32,
        ENTER: 13,
        HOME: 36,
        END: 35,
      };
      i.define(
        "navbar",
        (e.exports = function (e, t) {
          var n,
            o,
            l,
            c,
            u = {},
            s = e.tram,
            d = e(window),
            f = e(document),
            p = t.debounce,
            g = i.env(),
            E = ".w-nav",
            m = "w--open",
            y = "w--nav-dropdown-open",
            I = "w--nav-dropdown-toggle-open",
            b = "w--nav-dropdown-list-open",
            h = "w--nav-link-open",
            T = a.triggers,
            v = e();
          function O() {
            i.resize.off(_);
          }
          function _() {
            o.each(F);
          }
          function R(n, i) {
            var a,
              o,
              u,
              s,
              p,
              g = e(i),
              m = e.data(i, E);
            m ||
              (m = e.data(i, E, {
                open: !1,
                el: g,
                config: {},
                selectedIdx: -1,
              })),
              (m.menu = g.find(".w-nav-menu")),
              (m.links = m.menu.find(".w-nav-link")),
              (m.dropdowns = m.menu.find(".w-dropdown")),
              (m.dropdownToggle = m.menu.find(".w-dropdown-toggle")),
              (m.dropdownList = m.menu.find(".w-dropdown-list")),
              (m.button = g.find(".w-nav-button")),
              (m.container = g.find(".w-container")),
              (m.overlayContainerId = "w-nav-overlay-" + n),
              (m.outside =
                ((a = m).outside && f.off("click" + E, a.outside),
                function (t) {
                  var n = e(t.target);
                  (c && n.closest(".w-editor-bem-EditorOverlay").length) ||
                    M(a, n);
                }));
            var y = g.find(".w-nav-brand");
            y &&
              "/" === y.attr("href") &&
              null == y.attr("aria-label") &&
              y.attr("aria-label", "home"),
              m.button.attr("style", "-webkit-user-select: text;"),
              null == m.button.attr("aria-label") &&
                m.button.attr("aria-label", "menu"),
              m.button.attr("role", "button"),
              m.button.attr("tabindex", "0"),
              m.button.attr("aria-controls", m.overlayContainerId),
              m.button.attr("aria-haspopup", "menu"),
              m.button.attr("aria-expanded", "false"),
              m.el.off(E),
              m.button.off(E),
              m.menu.off(E),
              N(m),
              l
                ? (w(m),
                  m.el.on(
                    "setting" + E,
                    ((o = m),
                    function (e, n) {
                      n = n || {};
                      var i = d.width();
                      N(o),
                        !0 === n.open && U(o, !0),
                        !1 === n.open && V(o, !0),
                        o.open &&
                          t.defer(function () {
                            i !== d.width() && S(o);
                          });
                    })
                  ))
                : ((u = m).overlay ||
                    ((u.overlay = e(
                      '<div class="w-nav-overlay" data-wf-ignore />'
                    ).appendTo(u.el)),
                    u.overlay.attr("id", u.overlayContainerId),
                    (u.parent = u.menu.parent()),
                    V(u, !0)),
                  m.button.on("click" + E, C(m)),
                  m.menu.on("click" + E, "a", P(m)),
                  m.button.on(
                    "keydown" + E,
                    ((s = m),
                    function (e) {
                      switch (e.keyCode) {
                        case r.SPACE:
                        case r.ENTER:
                          return (
                            C(s)(), e.preventDefault(), e.stopPropagation()
                          );
                        case r.ESCAPE:
                          return V(s), e.preventDefault(), e.stopPropagation();
                        case r.ARROW_RIGHT:
                        case r.ARROW_DOWN:
                        case r.HOME:
                        case r.END:
                          if (!s.open)
                            return e.preventDefault(), e.stopPropagation();
                          return (
                            e.keyCode === r.END
                              ? (s.selectedIdx = s.links.length - 1)
                              : (s.selectedIdx = 0),
                            L(s),
                            e.preventDefault(),
                            e.stopPropagation()
                          );
                      }
                    })
                  ),
                  m.el.on(
                    "keydown" + E,
                    ((p = m),
                    function (e) {
                      if (p.open)
                        switch (
                          ((p.selectedIdx = p.links.index(
                            document.activeElement
                          )),
                          e.keyCode)
                        ) {
                          case r.HOME:
                          case r.END:
                            return (
                              e.keyCode === r.END
                                ? (p.selectedIdx = p.links.length - 1)
                                : (p.selectedIdx = 0),
                              L(p),
                              e.preventDefault(),
                              e.stopPropagation()
                            );
                          case r.ESCAPE:
                            return (
                              V(p),
                              p.button.focus(),
                              e.preventDefault(),
                              e.stopPropagation()
                            );
                          case r.ARROW_LEFT:
                          case r.ARROW_UP:
                            return (
                              (p.selectedIdx = Math.max(-1, p.selectedIdx - 1)),
                              L(p),
                              e.preventDefault(),
                              e.stopPropagation()
                            );
                          case r.ARROW_RIGHT:
                          case r.ARROW_DOWN:
                            return (
                              (p.selectedIdx = Math.min(
                                p.links.length - 1,
                                p.selectedIdx + 1
                              )),
                              L(p),
                              e.preventDefault(),
                              e.stopPropagation()
                            );
                        }
                    })
                  )),
              F(n, i);
          }
          function A(t, n) {
            var i = e.data(n, E);
            i && (w(i), e.removeData(n, E));
          }
          function w(e) {
            e.overlay && (V(e, !0), e.overlay.remove(), (e.overlay = null));
          }
          function N(e) {
            var n = {},
              i = e.config || {},
              a = (n.animation = e.el.attr("data-animation") || "default");
            (n.animOver = /^over/.test(a)),
              (n.animDirect = /left$/.test(a) ? -1 : 1),
              i.animation !== a && e.open && t.defer(S, e),
              (n.easing = e.el.attr("data-easing") || "ease"),
              (n.easing2 = e.el.attr("data-easing2") || "ease");
            var r = e.el.attr("data-duration");
            (n.duration = null != r ? Number(r) : 400),
              (n.docHeight = e.el.attr("data-doc-height")),
              (e.config = n);
          }
          function L(e) {
            if (e.links[e.selectedIdx]) {
              var t = e.links[e.selectedIdx];
              t.focus(), P(t);
            }
          }
          function S(e) {
            e.open && (V(e, !0), U(e, !0));
          }
          function C(e) {
            return p(function () {
              e.open ? V(e) : U(e);
            });
          }
          function P(t) {
            return function (n) {
              var a = e(this).attr("href");
              if (!i.validClick(n.currentTarget))
                return void n.preventDefault();
              a && 0 === a.indexOf("#") && t.open && V(t);
            };
          }
          (u.ready =
            u.design =
            u.preview =
              function () {
                (l = g && i.env("design")),
                  (c = i.env("editor")),
                  (n = e(document.body)),
                  (o = f.find(E)).length && (o.each(R), O(), i.resize.on(_));
              }),
            (u.destroy = function () {
              (v = e()), O(), o && o.length && o.each(A);
            });
          var M = p(function (e, t) {
            if (e.open) {
              var n = t.closest(".w-nav-menu");
              e.menu.is(n) || V(e);
            }
          });
          function F(t, n) {
            var i = e.data(n, E),
              a = (i.collapsed = "none" !== i.button.css("display"));
            if ((!i.open || a || l || V(i, !0), i.container.length)) {
              var r,
                o =
                  ("none" === (r = i.container.css(D)) && (r = ""),
                  function (t, n) {
                    (n = e(n)).css(D, ""), "none" === n.css(D) && n.css(D, r);
                  });
              i.links.each(o), i.dropdowns.each(o);
            }
            i.open && k(i);
          }
          var D = "max-width";
          function G(e, t) {
            t.setAttribute("data-nav-menu-open", "");
          }
          function x(e, t) {
            t.removeAttribute("data-nav-menu-open");
          }
          function U(e, t) {
            if (!e.open) {
              (e.open = !0),
                e.menu.each(G),
                e.links.addClass(h),
                e.dropdowns.addClass(y),
                e.dropdownToggle.addClass(I),
                e.dropdownList.addClass(b),
                e.button.addClass(m);
              var n = e.config;
              ("none" === n.animation ||
                !s.support.transform ||
                n.duration <= 0) &&
                (t = !0);
              var a = k(e),
                r = e.menu.outerHeight(!0),
                o = e.menu.outerWidth(!0),
                c = e.el.height(),
                u = e.el[0];
              if (
                (F(0, u),
                T.intro(0, u),
                i.redraw.up(),
                l || f.on("click" + E, e.outside),
                t)
              )
                return void p();
              var d = "transform " + n.duration + "ms " + n.easing;
              if (
                (e.overlay &&
                  ((v = e.menu.prev()), e.overlay.show().append(e.menu)),
                n.animOver)
              ) {
                s(e.menu)
                  .add(d)
                  .set({ x: n.animDirect * o, height: a })
                  .start({ x: 0 })
                  .then(p),
                  e.overlay && e.overlay.width(o);
                return;
              }
              s(e.menu)
                .add(d)
                .set({ y: -(c + r) })
                .start({ y: 0 })
                .then(p);
            }
            function p() {
              e.button.attr("aria-expanded", "true");
            }
          }
          function k(e) {
            var t = e.config,
              i = t.docHeight ? f.height() : n.height();
            return (
              t.animOver
                ? e.menu.height(i)
                : "fixed" !== e.el.css("position") &&
                  (i -= e.el.outerHeight(!0)),
              e.overlay && e.overlay.height(i),
              i
            );
          }
          function V(e, t) {
            if (e.open) {
              (e.open = !1), e.button.removeClass(m);
              var n = e.config;
              if (
                (("none" === n.animation ||
                  !s.support.transform ||
                  n.duration <= 0) &&
                  (t = !0),
                T.outro(0, e.el[0]),
                f.off("click" + E, e.outside),
                t)
              ) {
                s(e.menu).stop(), l();
                return;
              }
              var i = "transform " + n.duration + "ms " + n.easing2,
                a = e.menu.outerHeight(!0),
                r = e.menu.outerWidth(!0),
                o = e.el.height();
              if (n.animOver)
                return void s(e.menu)
                  .add(i)
                  .start({ x: r * n.animDirect })
                  .then(l);
              s(e.menu)
                .add(i)
                .start({ y: -(o + a) })
                .then(l);
            }
            function l() {
              e.menu.height(""),
                s(e.menu).set({ x: 0, y: 0 }),
                e.menu.each(x),
                e.links.removeClass(h),
                e.dropdowns.removeClass(y),
                e.dropdownToggle.removeClass(I),
                e.dropdownList.removeClass(b),
                e.overlay &&
                  e.overlay.children().length &&
                  (v.length
                    ? e.menu.insertAfter(v)
                    : e.menu.prependTo(e.parent),
                  e.overlay.attr("style", "").hide()),
                e.el.triggerHandler("w-close"),
                e.button.attr("aria-expanded", "false");
            }
          }
          return u;
        })
      );
    },
    3946: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var i = {
        actionListPlaybackChanged: function () {
          return W;
        },
        animationFrameChanged: function () {
          return k;
        },
        clearRequested: function () {
          return D;
        },
        elementStateChanged: function () {
          return H;
        },
        eventListenerAdded: function () {
          return G;
        },
        eventStateChanged: function () {
          return U;
        },
        instanceAdded: function () {
          return B;
        },
        instanceRemoved: function () {
          return j;
        },
        instanceStarted: function () {
          return X;
        },
        mediaQueriesDefined: function () {
          return Y;
        },
        parameterChanged: function () {
          return V;
        },
        playbackRequested: function () {
          return M;
        },
        previewRequested: function () {
          return P;
        },
        rawDataImported: function () {
          return N;
        },
        sessionInitialized: function () {
          return L;
        },
        sessionStarted: function () {
          return S;
        },
        sessionStopped: function () {
          return C;
        },
        stopRequested: function () {
          return F;
        },
        testFrameRendered: function () {
          return x;
        },
        viewportWidthChanged: function () {
          return z;
        },
      };
      for (var a in i)
        Object.defineProperty(t, a, { enumerable: !0, get: i[a] });
      let r = n(7087),
        o = n(9468),
        {
          IX2_RAW_DATA_IMPORTED: l,
          IX2_SESSION_INITIALIZED: c,
          IX2_SESSION_STARTED: u,
          IX2_SESSION_STOPPED: s,
          IX2_PREVIEW_REQUESTED: d,
          IX2_PLAYBACK_REQUESTED: f,
          IX2_STOP_REQUESTED: p,
          IX2_CLEAR_REQUESTED: g,
          IX2_EVENT_LISTENER_ADDED: E,
          IX2_TEST_FRAME_RENDERED: m,
          IX2_EVENT_STATE_CHANGED: y,
          IX2_ANIMATION_FRAME_CHANGED: I,
          IX2_PARAMETER_CHANGED: b,
          IX2_INSTANCE_ADDED: h,
          IX2_INSTANCE_STARTED: T,
          IX2_INSTANCE_REMOVED: v,
          IX2_ELEMENT_STATE_CHANGED: O,
          IX2_ACTION_LIST_PLAYBACK_CHANGED: _,
          IX2_VIEWPORT_WIDTH_CHANGED: R,
          IX2_MEDIA_QUERIES_DEFINED: A,
        } = r.IX2EngineActionTypes,
        { reifyState: w } = o.IX2VanillaUtils,
        N = (e) => ({ type: l, payload: { ...w(e) } }),
        L = ({ hasBoundaryNodes: e, reducedMotion: t }) => ({
          type: c,
          payload: { hasBoundaryNodes: e, reducedMotion: t },
        }),
        S = () => ({ type: u }),
        C = () => ({ type: s }),
        P = ({ rawData: e, defer: t }) => ({
          type: d,
          payload: { defer: t, rawData: e },
        }),
        M = ({
          actionTypeId: e = r.ActionTypeConsts.GENERAL_START_ACTION,
          actionListId: t,
          actionItemId: n,
          eventId: i,
          allowEvents: a,
          immediate: o,
          testManual: l,
          verbose: c,
          rawData: u,
        }) => ({
          type: f,
          payload: {
            actionTypeId: e,
            actionListId: t,
            actionItemId: n,
            testManual: l,
            eventId: i,
            allowEvents: a,
            immediate: o,
            verbose: c,
            rawData: u,
          },
        }),
        F = (e) => ({ type: p, payload: { actionListId: e } }),
        D = () => ({ type: g }),
        G = (e, t) => ({ type: E, payload: { target: e, listenerParams: t } }),
        x = (e = 1) => ({ type: m, payload: { step: e } }),
        U = (e, t) => ({ type: y, payload: { stateKey: e, newState: t } }),
        k = (e, t) => ({ type: I, payload: { now: e, parameters: t } }),
        V = (e, t) => ({ type: b, payload: { key: e, value: t } }),
        B = (e) => ({ type: h, payload: { ...e } }),
        X = (e, t) => ({ type: T, payload: { instanceId: e, time: t } }),
        j = (e) => ({ type: v, payload: { instanceId: e } }),
        H = (e, t, n, i) => ({
          type: O,
          payload: { elementId: e, actionTypeId: t, current: n, actionItem: i },
        }),
        W = ({ actionListId: e, isPlaying: t }) => ({
          type: _,
          payload: { actionListId: e, isPlaying: t },
        }),
        z = ({ width: e, mediaQueries: t }) => ({
          type: R,
          payload: { width: e, mediaQueries: t },
        }),
        Y = () => ({ type: A });
    },
    6011: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var i,
        a = {
          actions: function () {
            return u;
          },
          destroy: function () {
            return g;
          },
          init: function () {
            return p;
          },
          setEnv: function () {
            return f;
          },
          store: function () {
            return d;
          },
        };
      for (var r in a)
        Object.defineProperty(t, r, { enumerable: !0, get: a[r] });
      let o = n(9516),
        l = (i = n(7243)) && i.__esModule ? i : { default: i },
        c = n(1970),
        u = (function (e, t) {
          if (e && e.__esModule) return e;
          if (null === e || ("object" != typeof e && "function" != typeof e))
            return { default: e };
          var n = s(t);
          if (n && n.has(e)) return n.get(e);
          var i = { __proto__: null },
            a = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var r in e)
            if ("default" !== r && Object.prototype.hasOwnProperty.call(e, r)) {
              var o = a ? Object.getOwnPropertyDescriptor(e, r) : null;
              o && (o.get || o.set)
                ? Object.defineProperty(i, r, o)
                : (i[r] = e[r]);
            }
          return (i.default = e), n && n.set(e, i), i;
        })(n(3946));
      function s(e) {
        if ("function" != typeof WeakMap) return null;
        var t = new WeakMap(),
          n = new WeakMap();
        return (s = function (e) {
          return e ? n : t;
        })(e);
      }
      let d = (0, o.createStore)(l.default);
      function f(e) {
        e() && (0, c.observeRequests)(d);
      }
      function p(e) {
        g(), (0, c.startEngine)({ store: d, rawData: e, allowEvents: !0 });
      }
      function g() {
        (0, c.stopEngine)(d);
      }
    },
    5012: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var i = {
        elementContains: function () {
          return b;
        },
        getChildElements: function () {
          return T;
        },
        getClosestElement: function () {
          return O;
        },
        getProperty: function () {
          return g;
        },
        getQuerySelector: function () {
          return m;
        },
        getRefType: function () {
          return _;
        },
        getSiblingElements: function () {
          return v;
        },
        getStyle: function () {
          return p;
        },
        getValidDocument: function () {
          return y;
        },
        isSiblingNode: function () {
          return h;
        },
        matchSelector: function () {
          return E;
        },
        queryDocument: function () {
          return I;
        },
        setStyle: function () {
          return f;
        },
      };
      for (var a in i)
        Object.defineProperty(t, a, { enumerable: !0, get: i[a] });
      let r = n(9468),
        o = n(7087),
        { ELEMENT_MATCHES: l } = r.IX2BrowserSupport,
        {
          IX2_ID_DELIMITER: c,
          HTML_ELEMENT: u,
          PLAIN_OBJECT: s,
          WF_PAGE: d,
        } = o.IX2EngineConstants;
      function f(e, t, n) {
        e.style[t] = n;
      }
      function p(e, t) {
        return t.startsWith("--")
          ? window
              .getComputedStyle(document.documentElement)
              .getPropertyValue(t)
          : e.style instanceof CSSStyleDeclaration
          ? e.style[t]
          : void 0;
      }
      function g(e, t) {
        return e[t];
      }
      function E(e) {
        return (t) => t[l](e);
      }
      function m({ id: e, selector: t }) {
        if (e) {
          let t = e;
          if (-1 !== e.indexOf(c)) {
            let n = e.split(c),
              i = n[0];
            if (((t = n[1]), i !== document.documentElement.getAttribute(d)))
              return null;
          }
          return `[data-w-id="${t}"], [data-w-id^="${t}_instance"]`;
        }
        return t;
      }
      function y(e) {
        return null == e || e === document.documentElement.getAttribute(d)
          ? document
          : null;
      }
      function I(e, t) {
        return Array.prototype.slice.call(
          document.querySelectorAll(t ? e + " " + t : e)
        );
      }
      function b(e, t) {
        return e.contains(t);
      }
      function h(e, t) {
        return e !== t && e.parentNode === t.parentNode;
      }
      function T(e) {
        let t = [];
        for (let n = 0, { length: i } = e || []; n < i; n++) {
          let { children: i } = e[n],
            { length: a } = i;
          if (a) for (let e = 0; e < a; e++) t.push(i[e]);
        }
        return t;
      }
      function v(e = []) {
        let t = [],
          n = [];
        for (let i = 0, { length: a } = e; i < a; i++) {
          let { parentNode: a } = e[i];
          if (!a || !a.children || !a.children.length || -1 !== n.indexOf(a))
            continue;
          n.push(a);
          let r = a.firstElementChild;
          for (; null != r; )
            -1 === e.indexOf(r) && t.push(r), (r = r.nextElementSibling);
        }
        return t;
      }
      let O = Element.prototype.closest
        ? (e, t) => (document.documentElement.contains(e) ? e.closest(t) : null)
        : (e, t) => {
            if (!document.documentElement.contains(e)) return null;
            let n = e;
            do {
              if (n[l] && n[l](t)) return n;
              n = n.parentNode;
            } while (null != n);
            return null;
          };
      function _(e) {
        return null != e && "object" == typeof e
          ? e instanceof Element
            ? u
            : s
          : null;
      }
    },
    1970: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var i = {
        observeRequests: function () {
          return K;
        },
        startActionGroup: function () {
          return eg;
        },
        startEngine: function () {
          return ei;
        },
        stopActionGroup: function () {
          return ep;
        },
        stopAllActionGroups: function () {
          return ef;
        },
        stopEngine: function () {
          return ea;
        },
      };
      for (var a in i)
        Object.defineProperty(t, a, { enumerable: !0, get: i[a] });
      let r = I(n(9777)),
        o = I(n(4738)),
        l = I(n(4659)),
        c = I(n(3452)),
        u = I(n(6633)),
        s = I(n(3729)),
        d = I(n(2397)),
        f = I(n(5082)),
        p = n(7087),
        g = n(9468),
        E = n(3946),
        m = (function (e, t) {
          if (e && e.__esModule) return e;
          if (null === e || ("object" != typeof e && "function" != typeof e))
            return { default: e };
          var n = b(t);
          if (n && n.has(e)) return n.get(e);
          var i = { __proto__: null },
            a = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var r in e)
            if ("default" !== r && Object.prototype.hasOwnProperty.call(e, r)) {
              var o = a ? Object.getOwnPropertyDescriptor(e, r) : null;
              o && (o.get || o.set)
                ? Object.defineProperty(i, r, o)
                : (i[r] = e[r]);
            }
          return (i.default = e), n && n.set(e, i), i;
        })(n(5012)),
        y = I(n(8955));
      function I(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function b(e) {
        if ("function" != typeof WeakMap) return null;
        var t = new WeakMap(),
          n = new WeakMap();
        return (b = function (e) {
          return e ? n : t;
        })(e);
      }
      let h = Object.keys(p.QuickEffectIds),
        T = (e) => h.includes(e),
        {
          COLON_DELIMITER: v,
          BOUNDARY_SELECTOR: O,
          HTML_ELEMENT: _,
          RENDER_GENERAL: R,
          W_MOD_IX: A,
        } = p.IX2EngineConstants,
        {
          getAffectedElements: w,
          getElementId: N,
          getDestinationValues: L,
          observeStore: S,
          getInstanceId: C,
          renderHTMLElement: P,
          clearAllStyles: M,
          getMaxDurationItemIndex: F,
          getComputedStyle: D,
          getInstanceOrigin: G,
          reduceListToGroup: x,
          shouldNamespaceEventParameter: U,
          getNamespacedParameterId: k,
          shouldAllowMediaQuery: V,
          cleanupHTMLElement: B,
          clearObjectCache: X,
          stringifyTarget: j,
          mediaQueriesEqual: H,
          shallowEqual: W,
        } = g.IX2VanillaUtils,
        {
          isPluginType: z,
          createPluginInstance: Y,
          getPluginDuration: $,
        } = g.IX2VanillaPlugins,
        Q = navigator.userAgent,
        q = Q.match(/iPad/i) || Q.match(/iPhone/);
      function K(e) {
        S({ store: e, select: ({ ixRequest: e }) => e.preview, onChange: Z }),
          S({
            store: e,
            select: ({ ixRequest: e }) => e.playback,
            onChange: ee,
          }),
          S({ store: e, select: ({ ixRequest: e }) => e.stop, onChange: et }),
          S({ store: e, select: ({ ixRequest: e }) => e.clear, onChange: en });
      }
      function Z({ rawData: e, defer: t }, n) {
        let i = () => {
          ei({ store: n, rawData: e, allowEvents: !0 }), J();
        };
        t ? setTimeout(i, 0) : i();
      }
      function J() {
        document.dispatchEvent(new CustomEvent("IX2_PAGE_UPDATE"));
      }
      function ee(e, t) {
        let {
            actionTypeId: n,
            actionListId: i,
            actionItemId: a,
            eventId: r,
            allowEvents: o,
            immediate: l,
            testManual: c,
            verbose: u = !0,
          } = e,
          { rawData: s } = e;
        if (i && a && s && l) {
          let e = s.actionLists[i];
          e && (s = x({ actionList: e, actionItemId: a, rawData: s }));
        }
        if (
          (ei({ store: t, rawData: s, allowEvents: o, testManual: c }),
          (i && n === p.ActionTypeConsts.GENERAL_START_ACTION) || T(n))
        ) {
          ep({ store: t, actionListId: i }),
            ed({ store: t, actionListId: i, eventId: r });
          let e = eg({
            store: t,
            eventId: r,
            actionListId: i,
            immediate: l,
            verbose: u,
          });
          u &&
            e &&
            t.dispatch(
              (0, E.actionListPlaybackChanged)({
                actionListId: i,
                isPlaying: !l,
              })
            );
        }
      }
      function et({ actionListId: e }, t) {
        e ? ep({ store: t, actionListId: e }) : ef({ store: t }), ea(t);
      }
      function en(e, t) {
        ea(t), M({ store: t, elementApi: m });
      }
      function ei({ store: e, rawData: t, allowEvents: n, testManual: i }) {
        let { ixSession: a } = e.getState();
        if ((t && e.dispatch((0, E.rawDataImported)(t)), !a.active)) {
          (e.dispatch(
            (0, E.sessionInitialized)({
              hasBoundaryNodes: !!document.querySelector(O),
              reducedMotion:
                document.body.hasAttribute("data-wf-ix-vacation") &&
                window.matchMedia("(prefers-reduced-motion)").matches,
            })
          ),
          n) &&
            ((function (e) {
              let { ixData: t } = e.getState(),
                { eventTypeMap: n } = t;
              el(e),
                (0, d.default)(n, (t, n) => {
                  let i = y.default[n];
                  if (!i)
                    return void console.warn(
                      `IX2 event type not configured: ${n}`
                    );
                  !(function ({ logic: e, store: t, events: n }) {
                    !(function (e) {
                      if (!q) return;
                      let t = {},
                        n = "";
                      for (let i in e) {
                        let { eventTypeId: a, target: r } = e[i],
                          o = m.getQuerySelector(r);
                        t[o] ||
                          ((a === p.EventTypeConsts.MOUSE_CLICK ||
                            a === p.EventTypeConsts.MOUSE_SECOND_CLICK) &&
                            ((t[o] = !0),
                            (n +=
                              o +
                              "{cursor: pointer;touch-action: manipulation;}")));
                      }
                      if (n) {
                        let e = document.createElement("style");
                        (e.textContent = n), document.body.appendChild(e);
                      }
                    })(n);
                    let { types: i, handler: a } = e,
                      { ixData: c } = t.getState(),
                      { actionLists: u } = c,
                      s = ec(n, es);
                    if (!(0, l.default)(s)) return;
                    (0, d.default)(s, (e, i) => {
                      let a = n[i],
                        {
                          action: l,
                          id: s,
                          mediaQueries: d = c.mediaQueryKeys,
                        } = a,
                        { actionListId: f } = l.config;
                      H(d, c.mediaQueryKeys) ||
                        t.dispatch((0, E.mediaQueriesDefined)()),
                        l.actionTypeId ===
                          p.ActionTypeConsts.GENERAL_CONTINUOUS_ACTION &&
                          (Array.isArray(a.config)
                            ? a.config
                            : [a.config]
                          ).forEach((n) => {
                            let { continuousParameterGroupId: i } = n,
                              a = (0, o.default)(
                                u,
                                `${f}.continuousParameterGroups`,
                                []
                              ),
                              l = (0, r.default)(a, ({ id: e }) => e === i),
                              c = (n.smoothing || 0) / 100,
                              d = (n.restingState || 0) / 100;
                            l &&
                              e.forEach((e, i) => {
                                !(function ({
                                  store: e,
                                  eventStateKey: t,
                                  eventTarget: n,
                                  eventId: i,
                                  eventConfig: a,
                                  actionListId: r,
                                  parameterGroup: l,
                                  smoothing: c,
                                  restingValue: u,
                                }) {
                                  let { ixData: s, ixSession: d } =
                                      e.getState(),
                                    { events: f } = s,
                                    g = f[i],
                                    { eventTypeId: E } = g,
                                    y = {},
                                    I = {},
                                    b = [],
                                    { continuousActionGroups: h } = l,
                                    { id: T } = l;
                                  U(E, a) && (T = k(t, T));
                                  let _ =
                                    d.hasBoundaryNodes && n
                                      ? m.getClosestElement(n, O)
                                      : null;
                                  h.forEach((e) => {
                                    let { keyframe: t, actionItems: i } = e;
                                    i.forEach((e) => {
                                      let { actionTypeId: i } = e,
                                        { target: a } = e.config;
                                      if (!a) return;
                                      let r = a.boundaryMode ? _ : null,
                                        o = j(a) + v + i;
                                      if (
                                        ((I[o] = (function (e = [], t, n) {
                                          let i,
                                            a = [...e];
                                          return (
                                            a.some(
                                              (e, n) =>
                                                e.keyframe === t &&
                                                ((i = n), !0)
                                            ),
                                            null == i &&
                                              ((i = a.length),
                                              a.push({
                                                keyframe: t,
                                                actionItems: [],
                                              })),
                                            a[i].actionItems.push(n),
                                            a
                                          );
                                        })(I[o], t, e)),
                                        !y[o])
                                      ) {
                                        y[o] = !0;
                                        let { config: t } = e;
                                        w({
                                          config: t,
                                          event: g,
                                          eventTarget: n,
                                          elementRoot: r,
                                          elementApi: m,
                                        }).forEach((e) => {
                                          b.push({ element: e, key: o });
                                        });
                                      }
                                    });
                                  }),
                                    b.forEach(({ element: t, key: n }) => {
                                      let a = I[n],
                                        l = (0, o.default)(
                                          a,
                                          "[0].actionItems[0]",
                                          {}
                                        ),
                                        { actionTypeId: s } = l,
                                        d = (
                                          s === p.ActionTypeConsts.PLUGIN_RIVE
                                            ? 0 ===
                                              (
                                                l.config?.target
                                                  ?.selectorGuids || []
                                              ).length
                                            : z(s)
                                        )
                                          ? Y(s)?.(t, l)
                                          : null,
                                        f = L(
                                          {
                                            element: t,
                                            actionItem: l,
                                            elementApi: m,
                                          },
                                          d
                                        );
                                      eE({
                                        store: e,
                                        element: t,
                                        eventId: i,
                                        actionListId: r,
                                        actionItem: l,
                                        destination: f,
                                        continuous: !0,
                                        parameterId: T,
                                        actionGroups: a,
                                        smoothing: c,
                                        restingValue: u,
                                        pluginInstance: d,
                                      });
                                    });
                                })({
                                  store: t,
                                  eventStateKey: s + v + i,
                                  eventTarget: e,
                                  eventId: s,
                                  eventConfig: n,
                                  actionListId: f,
                                  parameterGroup: l,
                                  smoothing: c,
                                  restingValue: d,
                                });
                              });
                          }),
                        (l.actionTypeId ===
                          p.ActionTypeConsts.GENERAL_START_ACTION ||
                          T(l.actionTypeId)) &&
                          ed({ store: t, actionListId: f, eventId: s });
                    });
                    let g = (e) => {
                        let { ixSession: i } = t.getState();
                        eu(s, (r, o, l) => {
                          let u = n[o],
                            s = i.eventState[l],
                            { action: d, mediaQueries: f = c.mediaQueryKeys } =
                              u;
                          if (!V(f, i.mediaQueryKey)) return;
                          let g = (n = {}) => {
                            let i = a(
                              {
                                store: t,
                                element: r,
                                event: u,
                                eventConfig: n,
                                nativeEvent: e,
                                eventStateKey: l,
                              },
                              s
                            );
                            W(i, s) ||
                              t.dispatch((0, E.eventStateChanged)(l, i));
                          };
                          d.actionTypeId ===
                          p.ActionTypeConsts.GENERAL_CONTINUOUS_ACTION
                            ? (Array.isArray(u.config)
                                ? u.config
                                : [u.config]
                              ).forEach(g)
                            : g();
                        });
                      },
                      y = (0, f.default)(g, 12),
                      I = ({ target: e = document, types: n, throttle: i }) => {
                        n.split(" ")
                          .filter(Boolean)
                          .forEach((n) => {
                            let a = i ? y : g;
                            e.addEventListener(n, a),
                              t.dispatch((0, E.eventListenerAdded)(e, [n, a]));
                          });
                      };
                    Array.isArray(i)
                      ? i.forEach(I)
                      : "string" == typeof i && I(e);
                  })({ logic: i, store: e, events: t });
                });
              let { ixSession: i } = e.getState();
              i.eventListeners.length &&
                (function (e) {
                  let t = () => {
                    el(e);
                  };
                  eo.forEach((n) => {
                    window.addEventListener(n, t),
                      e.dispatch((0, E.eventListenerAdded)(window, [n, t]));
                  }),
                    t();
                })(e);
            })(e),
            (function () {
              let { documentElement: e } = document;
              -1 === e.className.indexOf(A) && (e.className += ` ${A}`);
            })(),
            e.getState().ixSession.hasDefinedMediaQueries &&
              S({
                store: e,
                select: ({ ixSession: e }) => e.mediaQueryKey,
                onChange: () => {
                  ea(e),
                    M({ store: e, elementApi: m }),
                    ei({ store: e, allowEvents: !0 }),
                    J();
                },
              }));
          e.dispatch((0, E.sessionStarted)()),
            (function (e, t) {
              let n = (i) => {
                let { ixSession: a, ixParameters: r } = e.getState();
                if (a.active)
                  if ((e.dispatch((0, E.animationFrameChanged)(i, r)), t)) {
                    let t = S({
                      store: e,
                      select: ({ ixSession: e }) => e.tick,
                      onChange: (e) => {
                        n(e), t();
                      },
                    });
                  } else requestAnimationFrame(n);
              };
              n(window.performance.now());
            })(e, i);
        }
      }
      function ea(e) {
        let { ixSession: t } = e.getState();
        if (t.active) {
          let { eventListeners: n } = t;
          n.forEach(er), X(), e.dispatch((0, E.sessionStopped)());
        }
      }
      function er({ target: e, listenerParams: t }) {
        e.removeEventListener.apply(e, t);
      }
      let eo = ["resize", "orientationchange"];
      function el(e) {
        let { ixSession: t, ixData: n } = e.getState(),
          i = window.innerWidth;
        if (i !== t.viewportWidth) {
          let { mediaQueries: t } = n;
          e.dispatch(
            (0, E.viewportWidthChanged)({ width: i, mediaQueries: t })
          );
        }
      }
      let ec = (e, t) => (0, c.default)((0, s.default)(e, t), u.default),
        eu = (e, t) => {
          (0, d.default)(e, (e, n) => {
            e.forEach((e, i) => {
              t(e, n, n + v + i);
            });
          });
        },
        es = (e) =>
          w({
            config: { target: e.target, targets: e.targets },
            elementApi: m,
          });
      function ed({ store: e, actionListId: t, eventId: n }) {
        let { ixData: i, ixSession: a } = e.getState(),
          { actionLists: r, events: l } = i,
          c = l[n],
          u = r[t];
        if (u && u.useFirstGroupAsInitialState) {
          let r = (0, o.default)(u, "actionItemGroups[0].actionItems", []);
          if (
            !V(
              (0, o.default)(c, "mediaQueries", i.mediaQueryKeys),
              a.mediaQueryKey
            )
          )
            return;
          r.forEach((i) => {
            let { config: a, actionTypeId: r } = i,
              o = w({
                config:
                  a?.target?.useEventTarget === !0 &&
                  a?.target?.objectId == null
                    ? { target: c.target, targets: c.targets }
                    : a,
                event: c,
                elementApi: m,
              }),
              l = z(r);
            o.forEach((a) => {
              let o = l ? Y(r)?.(a, i) : null;
              eE({
                destination: L({ element: a, actionItem: i, elementApi: m }, o),
                immediate: !0,
                store: e,
                element: a,
                eventId: n,
                actionItem: i,
                actionListId: t,
                pluginInstance: o,
              });
            });
          });
        }
      }
      function ef({ store: e }) {
        let { ixInstances: t } = e.getState();
        (0, d.default)(t, (t) => {
          if (!t.continuous) {
            let { actionListId: n, verbose: i } = t;
            em(t, e),
              i &&
                e.dispatch(
                  (0, E.actionListPlaybackChanged)({
                    actionListId: n,
                    isPlaying: !1,
                  })
                );
          }
        });
      }
      function ep({
        store: e,
        eventId: t,
        eventTarget: n,
        eventStateKey: i,
        actionListId: a,
      }) {
        let { ixInstances: r, ixSession: l } = e.getState(),
          c = l.hasBoundaryNodes && n ? m.getClosestElement(n, O) : null;
        (0, d.default)(r, (n) => {
          let r = (0, o.default)(n, "actionItem.config.target.boundaryMode"),
            l = !i || n.eventStateKey === i;
          if (n.actionListId === a && n.eventId === t && l) {
            if (c && r && !m.elementContains(c, n.element)) return;
            em(n, e),
              n.verbose &&
                e.dispatch(
                  (0, E.actionListPlaybackChanged)({
                    actionListId: a,
                    isPlaying: !1,
                  })
                );
          }
        });
      }
      function eg({
        store: e,
        eventId: t,
        eventTarget: n,
        eventStateKey: i,
        actionListId: a,
        groupIndex: r = 0,
        immediate: l,
        verbose: c,
      }) {
        let { ixData: u, ixSession: s } = e.getState(),
          { events: d } = u,
          f = d[t] || {},
          { mediaQueries: p = u.mediaQueryKeys } = f,
          { actionItemGroups: g, useFirstGroupAsInitialState: E } = (0,
          o.default)(u, `actionLists.${a}`, {});
        if (!g || !g.length) return !1;
        r >= g.length && (0, o.default)(f, "config.loop") && (r = 0),
          0 === r && E && r++;
        let y =
            (0 === r || (1 === r && E)) && T(f.action?.actionTypeId)
              ? f.config.delay
              : void 0,
          I = (0, o.default)(g, [r, "actionItems"], []);
        if (!I.length || !V(p, s.mediaQueryKey)) return !1;
        let b = s.hasBoundaryNodes && n ? m.getClosestElement(n, O) : null,
          h = F(I),
          v = !1;
        return (
          I.forEach((o, u) => {
            let { config: s, actionTypeId: d } = o,
              p = z(d),
              { target: g } = s;
            g &&
              w({
                config: s,
                event: f,
                eventTarget: n,
                elementRoot: g.boundaryMode ? b : null,
                elementApi: m,
              }).forEach((s, f) => {
                let g = p ? Y(d)?.(s, o) : null,
                  E = p ? $(d)(s, o) : null;
                v = !0;
                let I = D({ element: s, actionItem: o }),
                  b = L({ element: s, actionItem: o, elementApi: m }, g);
                eE({
                  store: e,
                  element: s,
                  actionItem: o,
                  eventId: t,
                  eventTarget: n,
                  eventStateKey: i,
                  actionListId: a,
                  groupIndex: r,
                  isCarrier: h === u && 0 === f,
                  computedStyle: I,
                  destination: b,
                  immediate: l,
                  verbose: c,
                  pluginInstance: g,
                  pluginDuration: E,
                  instanceDelay: y,
                });
              });
          }),
          v
        );
      }
      function eE(e) {
        let t,
          { store: n, computedStyle: i, ...a } = e,
          {
            element: r,
            actionItem: o,
            immediate: l,
            pluginInstance: c,
            continuous: u,
            restingValue: s,
            eventId: d,
          } = a,
          f = C(),
          { ixElements: g, ixSession: y, ixData: I } = n.getState(),
          b = N(g, r),
          { refState: h } = g[b] || {},
          T = m.getRefType(r),
          v = y.reducedMotion && p.ReducedMotionTypes[o.actionTypeId];
        if (v && u)
          switch (I.events[d]?.eventTypeId) {
            case p.EventTypeConsts.MOUSE_MOVE:
            case p.EventTypeConsts.MOUSE_MOVE_IN_VIEWPORT:
              t = s;
              break;
            default:
              t = 0.5;
          }
        let O = G(r, h, i, o, m, c);
        if (
          (n.dispatch(
            (0, E.instanceAdded)({
              instanceId: f,
              elementId: b,
              origin: O,
              refType: T,
              skipMotion: v,
              skipToValue: t,
              ...a,
            })
          ),
          ey(document.body, "ix2-animation-started", f),
          l)
        )
          return void (function (e, t) {
            let { ixParameters: n } = e.getState();
            e.dispatch((0, E.instanceStarted)(t, 0)),
              e.dispatch((0, E.animationFrameChanged)(performance.now(), n));
            let { ixInstances: i } = e.getState();
            eI(i[t], e);
          })(n, f);
        S({ store: n, select: ({ ixInstances: e }) => e[f], onChange: eI }),
          u || n.dispatch((0, E.instanceStarted)(f, y.tick));
      }
      function em(e, t) {
        ey(document.body, "ix2-animation-stopping", {
          instanceId: e.id,
          state: t.getState(),
        });
        let { elementId: n, actionItem: i } = e,
          { ixElements: a } = t.getState(),
          { ref: r, refType: o } = a[n] || {};
        o === _ && B(r, i, m), t.dispatch((0, E.instanceRemoved)(e.id));
      }
      function ey(e, t, n) {
        let i = document.createEvent("CustomEvent");
        i.initCustomEvent(t, !0, !0, n), e.dispatchEvent(i);
      }
      function eI(e, t) {
        let {
            active: n,
            continuous: i,
            complete: a,
            elementId: r,
            actionItem: o,
            actionTypeId: l,
            renderType: c,
            current: u,
            groupIndex: s,
            eventId: d,
            eventTarget: f,
            eventStateKey: p,
            actionListId: g,
            isCarrier: y,
            styleProp: I,
            verbose: b,
            pluginInstance: h,
          } = e,
          { ixData: T, ixSession: v } = t.getState(),
          { events: O } = T,
          { mediaQueries: A = T.mediaQueryKeys } = O && O[d] ? O[d] : {};
        if (V(A, v.mediaQueryKey) && (i || n || a)) {
          if (u || (c === R && a)) {
            t.dispatch((0, E.elementStateChanged)(r, l, u, o));
            let { ixElements: e } = t.getState(),
              { ref: n, refType: i, refState: a } = e[r] || {},
              s = a && a[l];
            (i === _ || z(l)) && P(n, a, s, d, o, I, m, c, h);
          }
          if (a) {
            if (y) {
              let e = eg({
                store: t,
                eventId: d,
                eventTarget: f,
                eventStateKey: p,
                actionListId: g,
                groupIndex: s + 1,
                verbose: b,
              });
              b &&
                !e &&
                t.dispatch(
                  (0, E.actionListPlaybackChanged)({
                    actionListId: g,
                    isPlaying: !1,
                  })
                );
            }
            em(e, t);
          }
        }
      }
    },
    8955: function (e, t, n) {
      "use strict";
      let i;
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "default", {
          enumerable: !0,
          get: function () {
            return ep;
          },
        });
      let a = d(n(5801)),
        r = d(n(4738)),
        o = d(n(3789)),
        l = n(7087),
        c = n(1970),
        u = n(3946),
        s = n(9468);
      function d(e) {
        return e && e.__esModule ? e : { default: e };
      }
      let {
          MOUSE_CLICK: f,
          MOUSE_SECOND_CLICK: p,
          MOUSE_DOWN: g,
          MOUSE_UP: E,
          MOUSE_OVER: m,
          MOUSE_OUT: y,
          DROPDOWN_CLOSE: I,
          DROPDOWN_OPEN: b,
          SLIDER_ACTIVE: h,
          SLIDER_INACTIVE: T,
          TAB_ACTIVE: v,
          TAB_INACTIVE: O,
          NAVBAR_CLOSE: _,
          NAVBAR_OPEN: R,
          MOUSE_MOVE: A,
          PAGE_SCROLL_DOWN: w,
          SCROLL_INTO_VIEW: N,
          SCROLL_OUT_OF_VIEW: L,
          PAGE_SCROLL_UP: S,
          SCROLLING_IN_VIEW: C,
          PAGE_FINISH: P,
          ECOMMERCE_CART_CLOSE: M,
          ECOMMERCE_CART_OPEN: F,
          PAGE_START: D,
          PAGE_SCROLL: G,
        } = l.EventTypeConsts,
        x = "COMPONENT_ACTIVE",
        U = "COMPONENT_INACTIVE",
        { COLON_DELIMITER: k } = l.IX2EngineConstants,
        { getNamespacedParameterId: V } = s.IX2VanillaUtils,
        B = (e) => (t) => !!("object" == typeof t && e(t)) || t,
        X = B(({ element: e, nativeEvent: t }) => e === t.target),
        j = B(({ element: e, nativeEvent: t }) => e.contains(t.target)),
        H = (0, a.default)([X, j]),
        W = (e, t) => {
          if (t) {
            let { ixData: n } = e.getState(),
              { events: i } = n,
              a = i[t];
            if (a && !ee[a.eventTypeId]) return a;
          }
          return null;
        },
        z = ({ store: e, event: t }) => {
          let { action: n } = t,
            { autoStopEventId: i } = n.config;
          return !!W(e, i);
        },
        Y = ({ store: e, event: t, element: n, eventStateKey: i }, a) => {
          let { action: o, id: l } = t,
            { actionListId: u, autoStopEventId: s } = o.config,
            d = W(e, s);
          return (
            d &&
              (0, c.stopActionGroup)({
                store: e,
                eventId: s,
                eventTarget: n,
                eventStateKey: s + k + i.split(k)[1],
                actionListId: (0, r.default)(d, "action.config.actionListId"),
              }),
            (0, c.stopActionGroup)({
              store: e,
              eventId: l,
              eventTarget: n,
              eventStateKey: i,
              actionListId: u,
            }),
            (0, c.startActionGroup)({
              store: e,
              eventId: l,
              eventTarget: n,
              eventStateKey: i,
              actionListId: u,
            }),
            a
          );
        },
        $ = (e, t) => (n, i) => !0 === e(n, i) ? t(n, i) : i,
        Q = { handler: $(H, Y) },
        q = { ...Q, types: [x, U].join(" ") },
        K = [
          { target: window, types: "resize orientationchange", throttle: !0 },
          {
            target: document,
            types: "scroll wheel readystatechange IX2_PAGE_UPDATE",
            throttle: !0,
          },
        ],
        Z = "mouseover mouseout",
        J = { types: K },
        ee = { PAGE_START: D, PAGE_FINISH: P },
        et = (() => {
          let e = void 0 !== window.pageXOffset,
            t =
              "CSS1Compat" === document.compatMode
                ? document.documentElement
                : document.body;
          return () => ({
            scrollLeft: e ? window.pageXOffset : t.scrollLeft,
            scrollTop: e ? window.pageYOffset : t.scrollTop,
            stiffScrollTop: (0, o.default)(
              e ? window.pageYOffset : t.scrollTop,
              0,
              t.scrollHeight - window.innerHeight
            ),
            scrollWidth: t.scrollWidth,
            scrollHeight: t.scrollHeight,
            clientWidth: t.clientWidth,
            clientHeight: t.clientHeight,
            innerWidth: window.innerWidth,
            innerHeight: window.innerHeight,
          });
        })(),
        en = (e, t) =>
          !(
            e.left > t.right ||
            e.right < t.left ||
            e.top > t.bottom ||
            e.bottom < t.top
          ),
        ei = ({ element: e, nativeEvent: t }) => {
          let { type: n, target: i, relatedTarget: a } = t,
            r = e.contains(i);
          if ("mouseover" === n && r) return !0;
          let o = e.contains(a);
          return "mouseout" === n && !!r && !!o;
        },
        ea = (e) => {
          let {
              element: t,
              event: { config: n },
            } = e,
            { clientWidth: i, clientHeight: a } = et(),
            r = n.scrollOffsetValue,
            o = "PX" === n.scrollOffsetUnit ? r : (a * (r || 0)) / 100;
          return en(t.getBoundingClientRect(), {
            left: 0,
            top: o,
            right: i,
            bottom: a - o,
          });
        },
        er = (e) => (t, n) => {
          let { type: i } = t.nativeEvent,
            a = -1 !== [x, U].indexOf(i) ? i === x : n.isActive,
            r = { ...n, isActive: a };
          return ((!n || r.isActive !== n.isActive) && e(t, r)) || r;
        },
        eo = (e) => (t, n) => {
          let i = { elementHovered: ei(t) };
          return (
            ((n ? i.elementHovered !== n.elementHovered : i.elementHovered) &&
              e(t, i)) ||
            i
          );
        },
        el =
          (e) =>
          (t, n = {}) => {
            let i,
              a,
              { stiffScrollTop: r, scrollHeight: o, innerHeight: l } = et(),
              {
                event: { config: c, eventTypeId: u },
              } = t,
              { scrollOffsetValue: s, scrollOffsetUnit: d } = c,
              f = o - l,
              p = Number((r / f).toFixed(2));
            if (n && n.percentTop === p) return n;
            let g = ("PX" === d ? s : (l * (s || 0)) / 100) / f,
              E = 0;
            n &&
              ((i = p > n.percentTop),
              (E = (a = n.scrollingDown !== i) ? p : n.anchorTop));
            let m = u === w ? p >= E + g : p <= E - g,
              y = {
                ...n,
                percentTop: p,
                inBounds: m,
                anchorTop: E,
                scrollingDown: i,
              };
            return (n && m && (a || y.inBounds !== n.inBounds) && e(t, y)) || y;
          },
        ec = (e, t) =>
          e.left > t.left &&
          e.left < t.right &&
          e.top > t.top &&
          e.top < t.bottom,
        eu =
          (e) =>
          (t, n = { clickCount: 0 }) => {
            let i = { clickCount: (n.clickCount % 2) + 1 };
            return (i.clickCount !== n.clickCount && e(t, i)) || i;
          },
        es = (e = !0) => ({
          ...q,
          handler: $(
            e ? H : X,
            er((e, t) => (t.isActive ? Q.handler(e, t) : t))
          ),
        }),
        ed = (e = !0) => ({
          ...q,
          handler: $(
            e ? H : X,
            er((e, t) => (t.isActive ? t : Q.handler(e, t)))
          ),
        }),
        ef = {
          ...J,
          handler:
            ((i = (e, t) => {
              let { elementVisible: n } = t,
                { event: i, store: a } = e,
                { ixData: r } = a.getState(),
                { events: o } = r;
              return !o[i.action.config.autoStopEventId] && t.triggered
                ? t
                : (i.eventTypeId === N) === n
                ? (Y(e), { ...t, triggered: !0 })
                : t;
            }),
            (e, t) => {
              let n = { ...t, elementVisible: ea(e) };
              return (
                ((t
                  ? n.elementVisible !== t.elementVisible
                  : n.elementVisible) &&
                  i(e, n)) ||
                n
              );
            }),
        },
        ep = {
          [h]: es(),
          [T]: ed(),
          [b]: es(),
          [I]: ed(),
          [R]: es(!1),
          [_]: ed(!1),
          [v]: es(),
          [O]: ed(),
          [F]: { types: "ecommerce-cart-open", handler: $(H, Y) },
          [M]: { types: "ecommerce-cart-close", handler: $(H, Y) },
          [f]: {
            types: "click",
            handler: $(
              H,
              eu((e, { clickCount: t }) => {
                z(e) ? 1 === t && Y(e) : Y(e);
              })
            ),
          },
          [p]: {
            types: "click",
            handler: $(
              H,
              eu((e, { clickCount: t }) => {
                2 === t && Y(e);
              })
            ),
          },
          [g]: { ...Q, types: "mousedown" },
          [E]: { ...Q, types: "mouseup" },
          [m]: {
            types: Z,
            handler: $(
              H,
              eo((e, t) => {
                t.elementHovered && Y(e);
              })
            ),
          },
          [y]: {
            types: Z,
            handler: $(
              H,
              eo((e, t) => {
                t.elementHovered || Y(e);
              })
            ),
          },
          [A]: {
            types: "mousemove mouseout scroll",
            handler: (
              {
                store: e,
                element: t,
                eventConfig: n,
                nativeEvent: i,
                eventStateKey: a,
              },
              r = { clientX: 0, clientY: 0, pageX: 0, pageY: 0 }
            ) => {
              let {
                  basedOn: o,
                  selectedAxis: c,
                  continuousParameterGroupId: s,
                  reverse: d,
                  restingState: f = 0,
                } = n,
                {
                  clientX: p = r.clientX,
                  clientY: g = r.clientY,
                  pageX: E = r.pageX,
                  pageY: m = r.pageY,
                } = i,
                y = "X_AXIS" === c,
                I = "mouseout" === i.type,
                b = f / 100,
                h = s,
                T = !1;
              switch (o) {
                case l.EventBasedOn.VIEWPORT:
                  b = y
                    ? Math.min(p, window.innerWidth) / window.innerWidth
                    : Math.min(g, window.innerHeight) / window.innerHeight;
                  break;
                case l.EventBasedOn.PAGE: {
                  let {
                    scrollLeft: e,
                    scrollTop: t,
                    scrollWidth: n,
                    scrollHeight: i,
                  } = et();
                  b = y ? Math.min(e + E, n) / n : Math.min(t + m, i) / i;
                  break;
                }
                case l.EventBasedOn.ELEMENT:
                default: {
                  h = V(a, s);
                  let e = 0 === i.type.indexOf("mouse");
                  if (e && !0 !== H({ element: t, nativeEvent: i })) break;
                  let n = t.getBoundingClientRect(),
                    { left: r, top: o, width: l, height: c } = n;
                  if (!e && !ec({ left: p, top: g }, n)) break;
                  (T = !0), (b = y ? (p - r) / l : (g - o) / c);
                }
              }
              return (
                I && (b > 0.95 || b < 0.05) && (b = Math.round(b)),
                (o !== l.EventBasedOn.ELEMENT || T || T !== r.elementHovered) &&
                  ((b = d ? 1 - b : b),
                  e.dispatch((0, u.parameterChanged)(h, b))),
                {
                  elementHovered: T,
                  clientX: p,
                  clientY: g,
                  pageX: E,
                  pageY: m,
                }
              );
            },
          },
          [G]: {
            types: K,
            handler: ({ store: e, eventConfig: t }) => {
              let { continuousParameterGroupId: n, reverse: i } = t,
                { scrollTop: a, scrollHeight: r, clientHeight: o } = et(),
                l = a / (r - o);
              (l = i ? 1 - l : l), e.dispatch((0, u.parameterChanged)(n, l));
            },
          },
          [C]: {
            types: K,
            handler: (
              { element: e, store: t, eventConfig: n, eventStateKey: i },
              a = { scrollPercent: 0 }
            ) => {
              let {
                  scrollLeft: r,
                  scrollTop: o,
                  scrollWidth: c,
                  scrollHeight: s,
                  clientHeight: d,
                } = et(),
                {
                  basedOn: f,
                  selectedAxis: p,
                  continuousParameterGroupId: g,
                  startsEntering: E,
                  startsExiting: m,
                  addEndOffset: y,
                  addStartOffset: I,
                  addOffsetValue: b = 0,
                  endOffsetValue: h = 0,
                } = n;
              if (f === l.EventBasedOn.VIEWPORT) {
                let e = "X_AXIS" === p ? r / c : o / s;
                return (
                  e !== a.scrollPercent &&
                    t.dispatch((0, u.parameterChanged)(g, e)),
                  { scrollPercent: e }
                );
              }
              {
                let n = V(i, g),
                  r = e.getBoundingClientRect(),
                  o = (I ? b : 0) / 100,
                  l = (y ? h : 0) / 100;
                (o = E ? o : 1 - o), (l = m ? l : 1 - l);
                let c = r.top + Math.min(r.height * o, d),
                  f = Math.min(d + (r.top + r.height * l - c), s),
                  p = Math.min(Math.max(0, d - c), f) / f;
                return (
                  p !== a.scrollPercent &&
                    t.dispatch((0, u.parameterChanged)(n, p)),
                  { scrollPercent: p }
                );
              }
            },
          },
          [N]: ef,
          [L]: ef,
          [w]: {
            ...J,
            handler: el((e, t) => {
              t.scrollingDown && Y(e);
            }),
          },
          [S]: {
            ...J,
            handler: el((e, t) => {
              t.scrollingDown || Y(e);
            }),
          },
          [P]: {
            types: "readystatechange IX2_PAGE_UPDATE",
            handler: $(X, (e, t) => {
              let n = { finished: "complete" === document.readyState };
              return n.finished && !(t && t.finshed) && Y(e), n;
            }),
          },
          [D]: {
            types: "readystatechange IX2_PAGE_UPDATE",
            handler: $(X, (e, t) => (t || Y(e), { started: !0 })),
          },
        };
    },
    4609: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "ixData", {
          enumerable: !0,
          get: function () {
            return a;
          },
        });
      let { IX2_RAW_DATA_IMPORTED: i } = n(7087).IX2EngineActionTypes,
        a = (e = Object.freeze({}), t) =>
          t.type === i ? t.payload.ixData || Object.freeze({}) : e;
    },
    7718: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "ixInstances", {
          enumerable: !0,
          get: function () {
            return T;
          },
        });
      let i = n(7087),
        a = n(9468),
        r = n(1185),
        {
          IX2_RAW_DATA_IMPORTED: o,
          IX2_SESSION_STOPPED: l,
          IX2_INSTANCE_ADDED: c,
          IX2_INSTANCE_STARTED: u,
          IX2_INSTANCE_REMOVED: s,
          IX2_ANIMATION_FRAME_CHANGED: d,
        } = i.IX2EngineActionTypes,
        {
          optimizeFloat: f,
          applyEasing: p,
          createBezierEasing: g,
        } = a.IX2EasingUtils,
        { RENDER_GENERAL: E } = i.IX2EngineConstants,
        {
          getItemConfigByKey: m,
          getRenderType: y,
          getStyleProp: I,
        } = a.IX2VanillaUtils,
        b = (e, t) => {
          let n,
            i,
            a,
            o,
            {
              position: l,
              parameterId: c,
              actionGroups: u,
              destinationKeys: s,
              smoothing: d,
              restingValue: g,
              actionTypeId: E,
              customEasingFn: y,
              skipMotion: I,
              skipToValue: b,
            } = e,
            { parameters: h } = t.payload,
            T = Math.max(1 - d, 0.01),
            v = h[c];
          null == v && ((T = 1), (v = g));
          let O = f((Math.max(v, 0) || 0) - l),
            _ = I ? b : f(l + O * T),
            R = 100 * _;
          if (_ === l && e.current) return e;
          for (let e = 0, { length: t } = u; e < t; e++) {
            let { keyframe: t, actionItems: r } = u[e];
            if ((0 === e && (n = r[0]), R >= t)) {
              n = r[0];
              let l = u[e + 1],
                c = l && R !== t;
              (i = c ? l.actionItems[0] : null),
                c && ((a = t / 100), (o = (l.keyframe - t) / 100));
            }
          }
          let A = {};
          if (n && !i)
            for (let e = 0, { length: t } = s; e < t; e++) {
              let t = s[e];
              A[t] = m(E, t, n.config);
            }
          else if (n && i && void 0 !== a && void 0 !== o) {
            let e = (_ - a) / o,
              t = p(n.config.easing, e, y);
            for (let e = 0, { length: a } = s; e < a; e++) {
              let a = s[e],
                r = m(E, a, n.config),
                o = (m(E, a, i.config) - r) * t + r;
              A[a] = o;
            }
          }
          return (0, r.merge)(e, { position: _, current: A });
        },
        h = (e, t) => {
          let {
              active: n,
              origin: i,
              start: a,
              immediate: o,
              renderType: l,
              verbose: c,
              actionItem: u,
              destination: s,
              destinationKeys: d,
              pluginDuration: g,
              instanceDelay: m,
              customEasingFn: y,
              skipMotion: I,
            } = e,
            b = u.config.easing,
            { duration: h, delay: T } = u.config;
          null != g && (h = g),
            (T = null != m ? m : T),
            l === E ? (h = 0) : (o || I) && (h = T = 0);
          let { now: v } = t.payload;
          if (n && i) {
            let t = v - (a + T);
            if (c) {
              let t = h + T,
                n = f(Math.min(Math.max(0, (v - a) / t), 1));
              e = (0, r.set)(e, "verboseTimeElapsed", t * n);
            }
            if (t < 0) return e;
            let n = f(Math.min(Math.max(0, t / h), 1)),
              o = p(b, n, y),
              l = {},
              u = null;
            return (
              d.length &&
                (u = d.reduce((e, t) => {
                  let n = s[t],
                    a = parseFloat(i[t]) || 0,
                    r = parseFloat(n) - a;
                  return (e[t] = r * o + a), e;
                }, {})),
              (l.current = u),
              (l.position = n),
              1 === n && ((l.active = !1), (l.complete = !0)),
              (0, r.merge)(e, l)
            );
          }
          return e;
        },
        T = (e = Object.freeze({}), t) => {
          switch (t.type) {
            case o:
              return t.payload.ixInstances || Object.freeze({});
            case l:
              return Object.freeze({});
            case c: {
              let {
                  instanceId: n,
                  elementId: i,
                  actionItem: a,
                  eventId: o,
                  eventTarget: l,
                  eventStateKey: c,
                  actionListId: u,
                  groupIndex: s,
                  isCarrier: d,
                  origin: f,
                  destination: p,
                  immediate: E,
                  verbose: m,
                  continuous: b,
                  parameterId: h,
                  actionGroups: T,
                  smoothing: v,
                  restingValue: O,
                  pluginInstance: _,
                  pluginDuration: R,
                  instanceDelay: A,
                  skipMotion: w,
                  skipToValue: N,
                } = t.payload,
                { actionTypeId: L } = a,
                S = y(L),
                C = I(S, L),
                P = Object.keys(p).filter(
                  (e) => null != p[e] && "string" != typeof p[e]
                ),
                { easing: M } = a.config;
              return (0, r.set)(e, n, {
                id: n,
                elementId: i,
                active: !1,
                position: 0,
                start: 0,
                origin: f,
                destination: p,
                destinationKeys: P,
                immediate: E,
                verbose: m,
                current: null,
                actionItem: a,
                actionTypeId: L,
                eventId: o,
                eventTarget: l,
                eventStateKey: c,
                actionListId: u,
                groupIndex: s,
                renderType: S,
                isCarrier: d,
                styleProp: C,
                continuous: b,
                parameterId: h,
                actionGroups: T,
                smoothing: v,
                restingValue: O,
                pluginInstance: _,
                pluginDuration: R,
                instanceDelay: A,
                skipMotion: w,
                skipToValue: N,
                customEasingFn:
                  Array.isArray(M) && 4 === M.length ? g(M) : void 0,
              });
            }
            case u: {
              let { instanceId: n, time: i } = t.payload;
              return (0, r.mergeIn)(e, [n], {
                active: !0,
                complete: !1,
                start: i,
              });
            }
            case s: {
              let { instanceId: n } = t.payload;
              if (!e[n]) return e;
              let i = {},
                a = Object.keys(e),
                { length: r } = a;
              for (let t = 0; t < r; t++) {
                let r = a[t];
                r !== n && (i[r] = e[r]);
              }
              return i;
            }
            case d: {
              let n = e,
                i = Object.keys(e),
                { length: a } = i;
              for (let o = 0; o < a; o++) {
                let a = i[o],
                  l = e[a],
                  c = l.continuous ? b : h;
                n = (0, r.set)(n, a, c(l, t));
              }
              return n;
            }
            default:
              return e;
          }
        };
    },
    1540: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "ixParameters", {
          enumerable: !0,
          get: function () {
            return o;
          },
        });
      let {
          IX2_RAW_DATA_IMPORTED: i,
          IX2_SESSION_STOPPED: a,
          IX2_PARAMETER_CHANGED: r,
        } = n(7087).IX2EngineActionTypes,
        o = (e = {}, t) => {
          switch (t.type) {
            case i:
              return t.payload.ixParameters || {};
            case a:
              return {};
            case r: {
              let { key: n, value: i } = t.payload;
              return (e[n] = i), e;
            }
            default:
              return e;
          }
        };
    },
    7243: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "default", {
          enumerable: !0,
          get: function () {
            return d;
          },
        });
      let i = n(9516),
        a = n(4609),
        r = n(628),
        o = n(5862),
        l = n(9468),
        c = n(7718),
        u = n(1540),
        { ixElements: s } = l.IX2ElementsReducer,
        d = (0, i.combineReducers)({
          ixData: a.ixData,
          ixRequest: r.ixRequest,
          ixSession: o.ixSession,
          ixElements: s,
          ixInstances: c.ixInstances,
          ixParameters: u.ixParameters,
        });
    },
    628: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "ixRequest", {
          enumerable: !0,
          get: function () {
            return d;
          },
        });
      let i = n(7087),
        a = n(1185),
        {
          IX2_PREVIEW_REQUESTED: r,
          IX2_PLAYBACK_REQUESTED: o,
          IX2_STOP_REQUESTED: l,
          IX2_CLEAR_REQUESTED: c,
        } = i.IX2EngineActionTypes,
        u = { preview: {}, playback: {}, stop: {}, clear: {} },
        s = Object.create(null, {
          [r]: { value: "preview" },
          [o]: { value: "playback" },
          [l]: { value: "stop" },
          [c]: { value: "clear" },
        }),
        d = (e = u, t) => {
          if (t.type in s) {
            let n = [s[t.type]];
            return (0, a.setIn)(e, [n], { ...t.payload });
          }
          return e;
        };
    },
    5862: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "ixSession", {
          enumerable: !0,
          get: function () {
            return m;
          },
        });
      let i = n(7087),
        a = n(1185),
        {
          IX2_SESSION_INITIALIZED: r,
          IX2_SESSION_STARTED: o,
          IX2_TEST_FRAME_RENDERED: l,
          IX2_SESSION_STOPPED: c,
          IX2_EVENT_LISTENER_ADDED: u,
          IX2_EVENT_STATE_CHANGED: s,
          IX2_ANIMATION_FRAME_CHANGED: d,
          IX2_ACTION_LIST_PLAYBACK_CHANGED: f,
          IX2_VIEWPORT_WIDTH_CHANGED: p,
          IX2_MEDIA_QUERIES_DEFINED: g,
        } = i.IX2EngineActionTypes,
        E = {
          active: !1,
          tick: 0,
          eventListeners: [],
          eventState: {},
          playbackState: {},
          viewportWidth: 0,
          mediaQueryKey: null,
          hasBoundaryNodes: !1,
          hasDefinedMediaQueries: !1,
          reducedMotion: !1,
        },
        m = (e = E, t) => {
          switch (t.type) {
            case r: {
              let { hasBoundaryNodes: n, reducedMotion: i } = t.payload;
              return (0, a.merge)(e, { hasBoundaryNodes: n, reducedMotion: i });
            }
            case o:
              return (0, a.set)(e, "active", !0);
            case l: {
              let {
                payload: { step: n = 20 },
              } = t;
              return (0, a.set)(e, "tick", e.tick + n);
            }
            case c:
              return E;
            case d: {
              let {
                payload: { now: n },
              } = t;
              return (0, a.set)(e, "tick", n);
            }
            case u: {
              let n = (0, a.addLast)(e.eventListeners, t.payload);
              return (0, a.set)(e, "eventListeners", n);
            }
            case s: {
              let { stateKey: n, newState: i } = t.payload;
              return (0, a.setIn)(e, ["eventState", n], i);
            }
            case f: {
              let { actionListId: n, isPlaying: i } = t.payload;
              return (0, a.setIn)(e, ["playbackState", n], i);
            }
            case p: {
              let { width: n, mediaQueries: i } = t.payload,
                r = i.length,
                o = null;
              for (let e = 0; e < r; e++) {
                let { key: t, min: a, max: r } = i[e];
                if (n >= a && n <= r) {
                  o = t;
                  break;
                }
              }
              return (0, a.merge)(e, { viewportWidth: n, mediaQueryKey: o });
            }
            case g:
              return (0, a.set)(e, "hasDefinedMediaQueries", !0);
            default:
              return e;
          }
        };
    },
    7377: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = {
        clearPlugin: function () {
          return s;
        },
        createPluginInstance: function () {
          return c;
        },
        getPluginConfig: function () {
          return a;
        },
        getPluginDestination: function () {
          return l;
        },
        getPluginDuration: function () {
          return r;
        },
        getPluginOrigin: function () {
          return o;
        },
        renderPlugin: function () {
          return u;
        },
      };
      for (var i in n)
        Object.defineProperty(t, i, { enumerable: !0, get: n[i] });
      let a = (e) => e.value,
        r = (e, t) => {
          if ("auto" !== t.config.duration) return null;
          let n = parseFloat(e.getAttribute("data-duration"));
          return n > 0
            ? 1e3 * n
            : 1e3 * parseFloat(e.getAttribute("data-default-duration"));
        },
        o = (e) => e || { value: 0 },
        l = (e) => ({ value: e.value }),
        c = (e) => {
          let t = window.Webflow.require("lottie");
          if (!t) return null;
          let n = t.createInstance(e);
          return n.stop(), n.setSubframe(!0), n;
        },
        u = (e, t, n) => {
          if (!e) return;
          let i = t[n.actionTypeId].value / 100;
          e.goToFrame(e.frames * i);
        },
        s = (e) => {
          let t = window.Webflow.require("lottie");
          t && t.createInstance(e).stop();
        };
    },
    2570: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = {
        clearPlugin: function () {
          return g;
        },
        createPluginInstance: function () {
          return f;
        },
        getPluginConfig: function () {
          return c;
        },
        getPluginDestination: function () {
          return d;
        },
        getPluginDuration: function () {
          return u;
        },
        getPluginOrigin: function () {
          return s;
        },
        renderPlugin: function () {
          return p;
        },
      };
      for (var i in n)
        Object.defineProperty(t, i, { enumerable: !0, get: n[i] });
      let a = "--wf-rive-fit",
        r = "--wf-rive-alignment",
        o = (e) => document.querySelector(`[data-w-id="${e}"]`),
        l = () => window.Webflow.require("rive"),
        c = (e, t) => e.value.inputs[t],
        u = () => null,
        s = (e, t) => {
          if (e) return e;
          let n = {},
            { inputs: i = {} } = t.config.value;
          for (let e in i) null == i[e] && (n[e] = 0);
          return n;
        },
        d = (e) => e.value.inputs ?? {},
        f = (e, t) => {
          if ((t.config?.target?.selectorGuids || []).length > 0) return e;
          let n = t?.config?.target?.pluginElement;
          return n ? o(n) : null;
        },
        p = (e, { PLUGIN_RIVE: t }, n) => {
          let i = l();
          if (!i) return;
          let o = i.getInstance(e),
            c = i.rive.StateMachineInputType,
            { name: u, inputs: s = {} } = n.config.value || {};
          function d(e) {
            if (e.loaded) n();
            else {
              let t = () => {
                n(), e?.off("load", t);
              };
              e?.on("load", t);
            }
            function n() {
              let n = e.stateMachineInputs(u);
              if (null != n) {
                if ((e.isPlaying || e.play(u, !1), a in s || r in s)) {
                  let t = e.layout,
                    n = s[a] ?? t.fit,
                    i = s[r] ?? t.alignment;
                  (n !== t.fit || i !== t.alignment) &&
                    (e.layout = t.copyWith({ fit: n, alignment: i }));
                }
                for (let e in s) {
                  if (e === a || e === r) continue;
                  let i = n.find((t) => t.name === e);
                  if (null != i)
                    switch (i.type) {
                      case c.Boolean:
                        null != s[e] && (i.value = !!s[e]);
                        break;
                      case c.Number: {
                        let n = t[e];
                        null != n && (i.value = n);
                        break;
                      }
                      case c.Trigger:
                        s[e] && i.fire();
                    }
                }
              }
            }
          }
          o?.rive ? d(o.rive) : i.setLoadHandler(e, d);
        },
        g = (e, t) => null;
    },
    2866: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = {
        clearPlugin: function () {
          return g;
        },
        createPluginInstance: function () {
          return f;
        },
        getPluginConfig: function () {
          return l;
        },
        getPluginDestination: function () {
          return d;
        },
        getPluginDuration: function () {
          return c;
        },
        getPluginOrigin: function () {
          return s;
        },
        renderPlugin: function () {
          return p;
        },
      };
      for (var i in n)
        Object.defineProperty(t, i, { enumerable: !0, get: n[i] });
      let a = (e) => document.querySelector(`[data-w-id="${e}"]`),
        r = () => window.Webflow.require("spline"),
        o = (e, t) => e.filter((e) => !t.includes(e)),
        l = (e, t) => e.value[t],
        c = () => null,
        u = Object.freeze({
          positionX: 0,
          positionY: 0,
          positionZ: 0,
          rotationX: 0,
          rotationY: 0,
          rotationZ: 0,
          scaleX: 1,
          scaleY: 1,
          scaleZ: 1,
        }),
        s = (e, t) => {
          let n = Object.keys(t.config.value);
          if (e) {
            let t = o(n, Object.keys(e));
            return t.length ? t.reduce((e, t) => ((e[t] = u[t]), e), e) : e;
          }
          return n.reduce((e, t) => ((e[t] = u[t]), e), {});
        },
        d = (e) => e.value,
        f = (e, t) => {
          let n = t?.config?.target?.pluginElement;
          return n ? a(n) : null;
        },
        p = (e, t, n) => {
          let i = r();
          if (!i) return;
          let a = i.getInstance(e),
            o = n.config.target.objectId,
            l = (e) => {
              if (!e) throw Error("Invalid spline app passed to renderSpline");
              let n = o && e.findObjectById(o);
              if (!n) return;
              let { PLUGIN_SPLINE: i } = t;
              null != i.positionX && (n.position.x = i.positionX),
                null != i.positionY && (n.position.y = i.positionY),
                null != i.positionZ && (n.position.z = i.positionZ),
                null != i.rotationX && (n.rotation.x = i.rotationX),
                null != i.rotationY && (n.rotation.y = i.rotationY),
                null != i.rotationZ && (n.rotation.z = i.rotationZ),
                null != i.scaleX && (n.scale.x = i.scaleX),
                null != i.scaleY && (n.scale.y = i.scaleY),
                null != i.scaleZ && (n.scale.z = i.scaleZ);
            };
          a ? l(a.spline) : i.setLoadHandler(e, l);
        },
        g = () => null;
    },
    1407: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var i = {
        clearPlugin: function () {
          return p;
        },
        createPluginInstance: function () {
          return s;
        },
        getPluginConfig: function () {
          return o;
        },
        getPluginDestination: function () {
          return u;
        },
        getPluginDuration: function () {
          return l;
        },
        getPluginOrigin: function () {
          return c;
        },
        renderPlugin: function () {
          return f;
        },
      };
      for (var a in i)
        Object.defineProperty(t, a, { enumerable: !0, get: i[a] });
      let r = n(380),
        o = (e, t) => e.value[t],
        l = () => null,
        c = (e, t) => {
          if (e) return e;
          let n = t.config.value,
            i = t.config.target.objectId,
            a = getComputedStyle(document.documentElement).getPropertyValue(i);
          return null != n.size
            ? { size: parseInt(a, 10) }
            : "%" === n.unit || "-" === n.unit
            ? { size: parseFloat(a) }
            : null != n.red && null != n.green && null != n.blue
            ? (0, r.normalizeColor)(a)
            : void 0;
        },
        u = (e) => e.value,
        s = () => null,
        d = {
          color: {
            match: ({ red: e, green: t, blue: n, alpha: i }) =>
              [e, t, n, i].every((e) => null != e),
            getValue: ({ red: e, green: t, blue: n, alpha: i }) =>
              `rgba(${e}, ${t}, ${n}, ${i})`,
          },
          size: {
            match: ({ size: e }) => null != e,
            getValue: ({ size: e }, t) => ("-" === t ? e : `${e}${t}`),
          },
        },
        f = (e, t, n) => {
          let {
              target: { objectId: i },
              value: { unit: a },
            } = n.config,
            r = t.PLUGIN_VARIABLE,
            o = Object.values(d).find((e) => e.match(r, a));
          o && document.documentElement.style.setProperty(i, o.getValue(r, a));
        },
        p = (e, t) => {
          let n = t.config.target.objectId;
          document.documentElement.style.removeProperty(n);
        };
    },
    3690: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "pluginMethodMap", {
          enumerable: !0,
          get: function () {
            return s;
          },
        });
      let i = n(7087),
        a = u(n(7377)),
        r = u(n(2866)),
        o = u(n(2570)),
        l = u(n(1407));
      function c(e) {
        if ("function" != typeof WeakMap) return null;
        var t = new WeakMap(),
          n = new WeakMap();
        return (c = function (e) {
          return e ? n : t;
        })(e);
      }
      function u(e, t) {
        if (!t && e && e.__esModule) return e;
        if (null === e || ("object" != typeof e && "function" != typeof e))
          return { default: e };
        var n = c(t);
        if (n && n.has(e)) return n.get(e);
        var i = { __proto__: null },
          a = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var r in e)
          if ("default" !== r && Object.prototype.hasOwnProperty.call(e, r)) {
            var o = a ? Object.getOwnPropertyDescriptor(e, r) : null;
            o && (o.get || o.set)
              ? Object.defineProperty(i, r, o)
              : (i[r] = e[r]);
          }
        return (i.default = e), n && n.set(e, i), i;
      }
      let s = new Map([
        [i.ActionTypeConsts.PLUGIN_LOTTIE, { ...a }],
        [i.ActionTypeConsts.PLUGIN_SPLINE, { ...r }],
        [i.ActionTypeConsts.PLUGIN_RIVE, { ...o }],
        [i.ActionTypeConsts.PLUGIN_VARIABLE, { ...l }],
      ]);
    },
    8023: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = {
        IX2_ACTION_LIST_PLAYBACK_CHANGED: function () {
          return h;
        },
        IX2_ANIMATION_FRAME_CHANGED: function () {
          return g;
        },
        IX2_CLEAR_REQUESTED: function () {
          return d;
        },
        IX2_ELEMENT_STATE_CHANGED: function () {
          return b;
        },
        IX2_EVENT_LISTENER_ADDED: function () {
          return f;
        },
        IX2_EVENT_STATE_CHANGED: function () {
          return p;
        },
        IX2_INSTANCE_ADDED: function () {
          return m;
        },
        IX2_INSTANCE_REMOVED: function () {
          return I;
        },
        IX2_INSTANCE_STARTED: function () {
          return y;
        },
        IX2_MEDIA_QUERIES_DEFINED: function () {
          return v;
        },
        IX2_PARAMETER_CHANGED: function () {
          return E;
        },
        IX2_PLAYBACK_REQUESTED: function () {
          return u;
        },
        IX2_PREVIEW_REQUESTED: function () {
          return c;
        },
        IX2_RAW_DATA_IMPORTED: function () {
          return a;
        },
        IX2_SESSION_INITIALIZED: function () {
          return r;
        },
        IX2_SESSION_STARTED: function () {
          return o;
        },
        IX2_SESSION_STOPPED: function () {
          return l;
        },
        IX2_STOP_REQUESTED: function () {
          return s;
        },
        IX2_TEST_FRAME_RENDERED: function () {
          return O;
        },
        IX2_VIEWPORT_WIDTH_CHANGED: function () {
          return T;
        },
      };
      for (var i in n)
        Object.defineProperty(t, i, { enumerable: !0, get: n[i] });
      let a = "IX2_RAW_DATA_IMPORTED",
        r = "IX2_SESSION_INITIALIZED",
        o = "IX2_SESSION_STARTED",
        l = "IX2_SESSION_STOPPED",
        c = "IX2_PREVIEW_REQUESTED",
        u = "IX2_PLAYBACK_REQUESTED",
        s = "IX2_STOP_REQUESTED",
        d = "IX2_CLEAR_REQUESTED",
        f = "IX2_EVENT_LISTENER_ADDED",
        p = "IX2_EVENT_STATE_CHANGED",
        g = "IX2_ANIMATION_FRAME_CHANGED",
        E = "IX2_PARAMETER_CHANGED",
        m = "IX2_INSTANCE_ADDED",
        y = "IX2_INSTANCE_STARTED",
        I = "IX2_INSTANCE_REMOVED",
        b = "IX2_ELEMENT_STATE_CHANGED",
        h = "IX2_ACTION_LIST_PLAYBACK_CHANGED",
        T = "IX2_VIEWPORT_WIDTH_CHANGED",
        v = "IX2_MEDIA_QUERIES_DEFINED",
        O = "IX2_TEST_FRAME_RENDERED";
    },
    2686: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = {
        ABSTRACT_NODE: function () {
          return et;
        },
        AUTO: function () {
          return H;
        },
        BACKGROUND: function () {
          return U;
        },
        BACKGROUND_COLOR: function () {
          return x;
        },
        BAR_DELIMITER: function () {
          return Y;
        },
        BORDER_COLOR: function () {
          return k;
        },
        BOUNDARY_SELECTOR: function () {
          return c;
        },
        CHILDREN: function () {
          return $;
        },
        COLON_DELIMITER: function () {
          return z;
        },
        COLOR: function () {
          return V;
        },
        COMMA_DELIMITER: function () {
          return W;
        },
        CONFIG_UNIT: function () {
          return m;
        },
        CONFIG_VALUE: function () {
          return f;
        },
        CONFIG_X_UNIT: function () {
          return p;
        },
        CONFIG_X_VALUE: function () {
          return u;
        },
        CONFIG_Y_UNIT: function () {
          return g;
        },
        CONFIG_Y_VALUE: function () {
          return s;
        },
        CONFIG_Z_UNIT: function () {
          return E;
        },
        CONFIG_Z_VALUE: function () {
          return d;
        },
        DISPLAY: function () {
          return B;
        },
        FILTER: function () {
          return M;
        },
        FLEX: function () {
          return X;
        },
        FONT_VARIATION_SETTINGS: function () {
          return F;
        },
        HEIGHT: function () {
          return G;
        },
        HTML_ELEMENT: function () {
          return J;
        },
        IMMEDIATE_CHILDREN: function () {
          return Q;
        },
        IX2_ID_DELIMITER: function () {
          return a;
        },
        OPACITY: function () {
          return P;
        },
        PARENT: function () {
          return K;
        },
        PLAIN_OBJECT: function () {
          return ee;
        },
        PRESERVE_3D: function () {
          return Z;
        },
        RENDER_GENERAL: function () {
          return ei;
        },
        RENDER_PLUGIN: function () {
          return er;
        },
        RENDER_STYLE: function () {
          return ea;
        },
        RENDER_TRANSFORM: function () {
          return en;
        },
        ROTATE_X: function () {
          return A;
        },
        ROTATE_Y: function () {
          return w;
        },
        ROTATE_Z: function () {
          return N;
        },
        SCALE_3D: function () {
          return R;
        },
        SCALE_X: function () {
          return v;
        },
        SCALE_Y: function () {
          return O;
        },
        SCALE_Z: function () {
          return _;
        },
        SIBLINGS: function () {
          return q;
        },
        SKEW: function () {
          return L;
        },
        SKEW_X: function () {
          return S;
        },
        SKEW_Y: function () {
          return C;
        },
        TRANSFORM: function () {
          return y;
        },
        TRANSLATE_3D: function () {
          return T;
        },
        TRANSLATE_X: function () {
          return I;
        },
        TRANSLATE_Y: function () {
          return b;
        },
        TRANSLATE_Z: function () {
          return h;
        },
        WF_PAGE: function () {
          return r;
        },
        WIDTH: function () {
          return D;
        },
        WILL_CHANGE: function () {
          return j;
        },
        W_MOD_IX: function () {
          return l;
        },
        W_MOD_JS: function () {
          return o;
        },
      };
      for (var i in n)
        Object.defineProperty(t, i, { enumerable: !0, get: n[i] });
      let a = "|",
        r = "data-wf-page",
        o = "w-mod-js",
        l = "w-mod-ix",
        c = ".w-dyn-item",
        u = "xValue",
        s = "yValue",
        d = "zValue",
        f = "value",
        p = "xUnit",
        g = "yUnit",
        E = "zUnit",
        m = "unit",
        y = "transform",
        I = "translateX",
        b = "translateY",
        h = "translateZ",
        T = "translate3d",
        v = "scaleX",
        O = "scaleY",
        _ = "scaleZ",
        R = "scale3d",
        A = "rotateX",
        w = "rotateY",
        N = "rotateZ",
        L = "skew",
        S = "skewX",
        C = "skewY",
        P = "opacity",
        M = "filter",
        F = "font-variation-settings",
        D = "width",
        G = "height",
        x = "backgroundColor",
        U = "background",
        k = "borderColor",
        V = "color",
        B = "display",
        X = "flex",
        j = "willChange",
        H = "AUTO",
        W = ",",
        z = ":",
        Y = "|",
        $ = "CHILDREN",
        Q = "IMMEDIATE_CHILDREN",
        q = "SIBLINGS",
        K = "PARENT",
        Z = "preserve-3d",
        J = "HTML_ELEMENT",
        ee = "PLAIN_OBJECT",
        et = "ABSTRACT_NODE",
        en = "RENDER_TRANSFORM",
        ei = "RENDER_GENERAL",
        ea = "RENDER_STYLE",
        er = "RENDER_PLUGIN";
    },
    262: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = {
        ActionAppliesTo: function () {
          return r;
        },
        ActionTypeConsts: function () {
          return a;
        },
      };
      for (var i in n)
        Object.defineProperty(t, i, { enumerable: !0, get: n[i] });
      let a = {
          TRANSFORM_MOVE: "TRANSFORM_MOVE",
          TRANSFORM_SCALE: "TRANSFORM_SCALE",
          TRANSFORM_ROTATE: "TRANSFORM_ROTATE",
          TRANSFORM_SKEW: "TRANSFORM_SKEW",
          STYLE_OPACITY: "STYLE_OPACITY",
          STYLE_SIZE: "STYLE_SIZE",
          STYLE_FILTER: "STYLE_FILTER",
          STYLE_FONT_VARIATION: "STYLE_FONT_VARIATION",
          STYLE_BACKGROUND_COLOR: "STYLE_BACKGROUND_COLOR",
          STYLE_BORDER: "STYLE_BORDER",
          STYLE_TEXT_COLOR: "STYLE_TEXT_COLOR",
          OBJECT_VALUE: "OBJECT_VALUE",
          PLUGIN_LOTTIE: "PLUGIN_LOTTIE",
          PLUGIN_SPLINE: "PLUGIN_SPLINE",
          PLUGIN_RIVE: "PLUGIN_RIVE",
          PLUGIN_VARIABLE: "PLUGIN_VARIABLE",
          GENERAL_DISPLAY: "GENERAL_DISPLAY",
          GENERAL_START_ACTION: "GENERAL_START_ACTION",
          GENERAL_CONTINUOUS_ACTION: "GENERAL_CONTINUOUS_ACTION",
          GENERAL_COMBO_CLASS: "GENERAL_COMBO_CLASS",
          GENERAL_STOP_ACTION: "GENERAL_STOP_ACTION",
          GENERAL_LOOP: "GENERAL_LOOP",
          STYLE_BOX_SHADOW: "STYLE_BOX_SHADOW",
        },
        r = {
          ELEMENT: "ELEMENT",
          ELEMENT_CLASS: "ELEMENT_CLASS",
          TRIGGER_ELEMENT: "TRIGGER_ELEMENT",
        };
    },
    7087: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var i = {
        ActionTypeConsts: function () {
          return o.ActionTypeConsts;
        },
        IX2EngineActionTypes: function () {
          return l;
        },
        IX2EngineConstants: function () {
          return c;
        },
        QuickEffectIds: function () {
          return r.QuickEffectIds;
        },
      };
      for (var a in i)
        Object.defineProperty(t, a, { enumerable: !0, get: i[a] });
      let r = u(n(1833), t),
        o = u(n(262), t);
      u(n(8704), t), u(n(3213), t);
      let l = d(n(8023)),
        c = d(n(2686));
      function u(e, t) {
        return (
          Object.keys(e).forEach(function (n) {
            "default" === n ||
              Object.prototype.hasOwnProperty.call(t, n) ||
              Object.defineProperty(t, n, {
                enumerable: !0,
                get: function () {
                  return e[n];
                },
              });
          }),
          e
        );
      }
      function s(e) {
        if ("function" != typeof WeakMap) return null;
        var t = new WeakMap(),
          n = new WeakMap();
        return (s = function (e) {
          return e ? n : t;
        })(e);
      }
      function d(e, t) {
        if (!t && e && e.__esModule) return e;
        if (null === e || ("object" != typeof e && "function" != typeof e))
          return { default: e };
        var n = s(t);
        if (n && n.has(e)) return n.get(e);
        var i = { __proto__: null },
          a = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var r in e)
          if ("default" !== r && Object.prototype.hasOwnProperty.call(e, r)) {
            var o = a ? Object.getOwnPropertyDescriptor(e, r) : null;
            o && (o.get || o.set)
              ? Object.defineProperty(i, r, o)
              : (i[r] = e[r]);
          }
        return (i.default = e), n && n.set(e, i), i;
      }
    },
    3213: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "ReducedMotionTypes", {
          enumerable: !0,
          get: function () {
            return s;
          },
        });
      let {
          TRANSFORM_MOVE: i,
          TRANSFORM_SCALE: a,
          TRANSFORM_ROTATE: r,
          TRANSFORM_SKEW: o,
          STYLE_SIZE: l,
          STYLE_FILTER: c,
          STYLE_FONT_VARIATION: u,
        } = n(262).ActionTypeConsts,
        s = { [i]: !0, [a]: !0, [r]: !0, [o]: !0, [l]: !0, [c]: !0, [u]: !0 };
    },
    1833: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = {
        EventAppliesTo: function () {
          return r;
        },
        EventBasedOn: function () {
          return o;
        },
        EventContinuousMouseAxes: function () {
          return l;
        },
        EventLimitAffectedElements: function () {
          return c;
        },
        EventTypeConsts: function () {
          return a;
        },
        QuickEffectDirectionConsts: function () {
          return s;
        },
        QuickEffectIds: function () {
          return u;
        },
      };
      for (var i in n)
        Object.defineProperty(t, i, { enumerable: !0, get: n[i] });
      let a = {
          NAVBAR_OPEN: "NAVBAR_OPEN",
          NAVBAR_CLOSE: "NAVBAR_CLOSE",
          TAB_ACTIVE: "TAB_ACTIVE",
          TAB_INACTIVE: "TAB_INACTIVE",
          SLIDER_ACTIVE: "SLIDER_ACTIVE",
          SLIDER_INACTIVE: "SLIDER_INACTIVE",
          DROPDOWN_OPEN: "DROPDOWN_OPEN",
          DROPDOWN_CLOSE: "DROPDOWN_CLOSE",
          MOUSE_CLICK: "MOUSE_CLICK",
          MOUSE_SECOND_CLICK: "MOUSE_SECOND_CLICK",
          MOUSE_DOWN: "MOUSE_DOWN",
          MOUSE_UP: "MOUSE_UP",
          MOUSE_OVER: "MOUSE_OVER",
          MOUSE_OUT: "MOUSE_OUT",
          MOUSE_MOVE: "MOUSE_MOVE",
          MOUSE_MOVE_IN_VIEWPORT: "MOUSE_MOVE_IN_VIEWPORT",
          SCROLL_INTO_VIEW: "SCROLL_INTO_VIEW",
          SCROLL_OUT_OF_VIEW: "SCROLL_OUT_OF_VIEW",
          SCROLLING_IN_VIEW: "SCROLLING_IN_VIEW",
          ECOMMERCE_CART_OPEN: "ECOMMERCE_CART_OPEN",
          ECOMMERCE_CART_CLOSE: "ECOMMERCE_CART_CLOSE",
          PAGE_START: "PAGE_START",
          PAGE_FINISH: "PAGE_FINISH",
          PAGE_SCROLL_UP: "PAGE_SCROLL_UP",
          PAGE_SCROLL_DOWN: "PAGE_SCROLL_DOWN",
          PAGE_SCROLL: "PAGE_SCROLL",
        },
        r = { ELEMENT: "ELEMENT", CLASS: "CLASS", PAGE: "PAGE" },
        o = { ELEMENT: "ELEMENT", VIEWPORT: "VIEWPORT" },
        l = { X_AXIS: "X_AXIS", Y_AXIS: "Y_AXIS" },
        c = {
          CHILDREN: "CHILDREN",
          SIBLINGS: "SIBLINGS",
          IMMEDIATE_CHILDREN: "IMMEDIATE_CHILDREN",
        },
        u = {
          FADE_EFFECT: "FADE_EFFECT",
          SLIDE_EFFECT: "SLIDE_EFFECT",
          GROW_EFFECT: "GROW_EFFECT",
          SHRINK_EFFECT: "SHRINK_EFFECT",
          SPIN_EFFECT: "SPIN_EFFECT",
          FLY_EFFECT: "FLY_EFFECT",
          POP_EFFECT: "POP_EFFECT",
          FLIP_EFFECT: "FLIP_EFFECT",
          JIGGLE_EFFECT: "JIGGLE_EFFECT",
          PULSE_EFFECT: "PULSE_EFFECT",
          DROP_EFFECT: "DROP_EFFECT",
          BLINK_EFFECT: "BLINK_EFFECT",
          BOUNCE_EFFECT: "BOUNCE_EFFECT",
          FLIP_LEFT_TO_RIGHT_EFFECT: "FLIP_LEFT_TO_RIGHT_EFFECT",
          FLIP_RIGHT_TO_LEFT_EFFECT: "FLIP_RIGHT_TO_LEFT_EFFECT",
          RUBBER_BAND_EFFECT: "RUBBER_BAND_EFFECT",
          JELLO_EFFECT: "JELLO_EFFECT",
          GROW_BIG_EFFECT: "GROW_BIG_EFFECT",
          SHRINK_BIG_EFFECT: "SHRINK_BIG_EFFECT",
          PLUGIN_LOTTIE_EFFECT: "PLUGIN_LOTTIE_EFFECT",
        },
        s = {
          LEFT: "LEFT",
          RIGHT: "RIGHT",
          BOTTOM: "BOTTOM",
          TOP: "TOP",
          BOTTOM_LEFT: "BOTTOM_LEFT",
          BOTTOM_RIGHT: "BOTTOM_RIGHT",
          TOP_RIGHT: "TOP_RIGHT",
          TOP_LEFT: "TOP_LEFT",
          CLOCKWISE: "CLOCKWISE",
          COUNTER_CLOCKWISE: "COUNTER_CLOCKWISE",
        };
    },
    8704: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "InteractionTypeConsts", {
          enumerable: !0,
          get: function () {
            return n;
          },
        });
      let n = {
        MOUSE_CLICK_INTERACTION: "MOUSE_CLICK_INTERACTION",
        MOUSE_HOVER_INTERACTION: "MOUSE_HOVER_INTERACTION",
        MOUSE_MOVE_INTERACTION: "MOUSE_MOVE_INTERACTION",
        SCROLL_INTO_VIEW_INTERACTION: "SCROLL_INTO_VIEW_INTERACTION",
        SCROLLING_IN_VIEW_INTERACTION: "SCROLLING_IN_VIEW_INTERACTION",
        MOUSE_MOVE_IN_VIEWPORT_INTERACTION:
          "MOUSE_MOVE_IN_VIEWPORT_INTERACTION",
        PAGE_IS_SCROLLING_INTERACTION: "PAGE_IS_SCROLLING_INTERACTION",
        PAGE_LOAD_INTERACTION: "PAGE_LOAD_INTERACTION",
        PAGE_SCROLLED_INTERACTION: "PAGE_SCROLLED_INTERACTION",
        NAVBAR_INTERACTION: "NAVBAR_INTERACTION",
        DROPDOWN_INTERACTION: "DROPDOWN_INTERACTION",
        ECOMMERCE_CART_INTERACTION: "ECOMMERCE_CART_INTERACTION",
        TAB_INTERACTION: "TAB_INTERACTION",
        SLIDER_INTERACTION: "SLIDER_INTERACTION",
      };
    },
    380: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "normalizeColor", {
          enumerable: !0,
          get: function () {
            return i;
          },
        });
      let n = {
        aliceblue: "#F0F8FF",
        antiquewhite: "#FAEBD7",
        aqua: "#00FFFF",
        aquamarine: "#7FFFD4",
        azure: "#F0FFFF",
        beige: "#F5F5DC",
        bisque: "#FFE4C4",
        black: "#000000",
        blanchedalmond: "#FFEBCD",
        blue: "#0000FF",
        blueviolet: "#8A2BE2",
        brown: "#A52A2A",
        burlywood: "#DEB887",
        cadetblue: "#5F9EA0",
        chartreuse: "#7FFF00",
        chocolate: "#D2691E",
        coral: "#FF7F50",
        cornflowerblue: "#6495ED",
        cornsilk: "#FFF8DC",
        crimson: "#DC143C",
        cyan: "#00FFFF",
        darkblue: "#00008B",
        darkcyan: "#008B8B",
        darkgoldenrod: "#B8860B",
        darkgray: "#A9A9A9",
        darkgreen: "#006400",
        darkgrey: "#A9A9A9",
        darkkhaki: "#BDB76B",
        darkmagenta: "#8B008B",
        darkolivegreen: "#556B2F",
        darkorange: "#FF8C00",
        darkorchid: "#9932CC",
        darkred: "#8B0000",
        darksalmon: "#E9967A",
        darkseagreen: "#8FBC8F",
        darkslateblue: "#483D8B",
        darkslategray: "#2F4F4F",
        darkslategrey: "#2F4F4F",
        darkturquoise: "#00CED1",
        darkviolet: "#9400D3",
        deeppink: "#FF1493",
        deepskyblue: "#00BFFF",
        dimgray: "#696969",
        dimgrey: "#696969",
        dodgerblue: "#1E90FF",
        firebrick: "#B22222",
        floralwhite: "#FFFAF0",
        forestgreen: "#228B22",
        fuchsia: "#FF00FF",
        gainsboro: "#DCDCDC",
        ghostwhite: "#F8F8FF",
        gold: "#FFD700",
        goldenrod: "#DAA520",
        gray: "#808080",
        green: "#008000",
        greenyellow: "#ADFF2F",
        grey: "#808080",
        honeydew: "#F0FFF0",
        hotpink: "#FF69B4",
        indianred: "#CD5C5C",
        indigo: "#4B0082",
        ivory: "#FFFFF0",
        khaki: "#F0E68C",
        lavender: "#E6E6FA",
        lavenderblush: "#FFF0F5",
        lawngreen: "#7CFC00",
        lemonchiffon: "#FFFACD",
        lightblue: "#ADD8E6",
        lightcoral: "#F08080",
        lightcyan: "#E0FFFF",
        lightgoldenrodyellow: "#FAFAD2",
        lightgray: "#D3D3D3",
        lightgreen: "#90EE90",
        lightgrey: "#D3D3D3",
        lightpink: "#FFB6C1",
        lightsalmon: "#FFA07A",
        lightseagreen: "#20B2AA",
        lightskyblue: "#87CEFA",
        lightslategray: "#778899",
        lightslategrey: "#778899",
        lightsteelblue: "#B0C4DE",
        lightyellow: "#FFFFE0",
        lime: "#00FF00",
        limegreen: "#32CD32",
        linen: "#FAF0E6",
        magenta: "#FF00FF",
        maroon: "#800000",
        mediumaquamarine: "#66CDAA",
        mediumblue: "#0000CD",
        mediumorchid: "#BA55D3",
        mediumpurple: "#9370DB",
        mediumseagreen: "#3CB371",
        mediumslateblue: "#7B68EE",
        mediumspringgreen: "#00FA9A",
        mediumturquoise: "#48D1CC",
        mediumvioletred: "#C71585",
        midnightblue: "#191970",
        mintcream: "#F5FFFA",
        mistyrose: "#FFE4E1",
        moccasin: "#FFE4B5",
        navajowhite: "#FFDEAD",
        navy: "#000080",
        oldlace: "#FDF5E6",
        olive: "#808000",
        olivedrab: "#6B8E23",
        orange: "#FFA500",
        orangered: "#FF4500",
        orchid: "#DA70D6",
        palegoldenrod: "#EEE8AA",
        palegreen: "#98FB98",
        paleturquoise: "#AFEEEE",
        palevioletred: "#DB7093",
        papayawhip: "#FFEFD5",
        peachpuff: "#FFDAB9",
        peru: "#CD853F",
        pink: "#FFC0CB",
        plum: "#DDA0DD",
        powderblue: "#B0E0E6",
        purple: "#800080",
        rebeccapurple: "#663399",
        red: "#FF0000",
        rosybrown: "#BC8F8F",
        royalblue: "#4169E1",
        saddlebrown: "#8B4513",
        salmon: "#FA8072",
        sandybrown: "#F4A460",
        seagreen: "#2E8B57",
        seashell: "#FFF5EE",
        sienna: "#A0522D",
        silver: "#C0C0C0",
        skyblue: "#87CEEB",
        slateblue: "#6A5ACD",
        slategray: "#708090",
        slategrey: "#708090",
        snow: "#FFFAFA",
        springgreen: "#00FF7F",
        steelblue: "#4682B4",
        tan: "#D2B48C",
        teal: "#008080",
        thistle: "#D8BFD8",
        tomato: "#FF6347",
        turquoise: "#40E0D0",
        violet: "#EE82EE",
        wheat: "#F5DEB3",
        white: "#FFFFFF",
        whitesmoke: "#F5F5F5",
        yellow: "#FFFF00",
        yellowgreen: "#9ACD32",
      };
      function i(e) {
        let t,
          i,
          a,
          r = 1,
          o = e.replace(/\s/g, "").toLowerCase(),
          l = ("string" == typeof n[o] ? n[o].toLowerCase() : null) || o;
        if (l.startsWith("#")) {
          let e = l.substring(1);
          3 === e.length || 4 === e.length
            ? ((t = parseInt(e[0] + e[0], 16)),
              (i = parseInt(e[1] + e[1], 16)),
              (a = parseInt(e[2] + e[2], 16)),
              4 === e.length && (r = parseInt(e[3] + e[3], 16) / 255))
            : (6 === e.length || 8 === e.length) &&
              ((t = parseInt(e.substring(0, 2), 16)),
              (i = parseInt(e.substring(2, 4), 16)),
              (a = parseInt(e.substring(4, 6), 16)),
              8 === e.length && (r = parseInt(e.substring(6, 8), 16) / 255));
        } else if (l.startsWith("rgba")) {
          let e = l.match(/rgba\(([^)]+)\)/)[1].split(",");
          (t = parseInt(e[0], 10)),
            (i = parseInt(e[1], 10)),
            (a = parseInt(e[2], 10)),
            (r = parseFloat(e[3]));
        } else if (l.startsWith("rgb")) {
          let e = l.match(/rgb\(([^)]+)\)/)[1].split(",");
          (t = parseInt(e[0], 10)),
            (i = parseInt(e[1], 10)),
            (a = parseInt(e[2], 10));
        } else if (l.startsWith("hsla")) {
          let e,
            n,
            o,
            c = l.match(/hsla\(([^)]+)\)/)[1].split(","),
            u = parseFloat(c[0]),
            s = parseFloat(c[1].replace("%", "")) / 100,
            d = parseFloat(c[2].replace("%", "")) / 100;
          r = parseFloat(c[3]);
          let f = (1 - Math.abs(2 * d - 1)) * s,
            p = f * (1 - Math.abs(((u / 60) % 2) - 1)),
            g = d - f / 2;
          u >= 0 && u < 60
            ? ((e = f), (n = p), (o = 0))
            : u >= 60 && u < 120
            ? ((e = p), (n = f), (o = 0))
            : u >= 120 && u < 180
            ? ((e = 0), (n = f), (o = p))
            : u >= 180 && u < 240
            ? ((e = 0), (n = p), (o = f))
            : u >= 240 && u < 300
            ? ((e = p), (n = 0), (o = f))
            : ((e = f), (n = 0), (o = p)),
            (t = Math.round((e + g) * 255)),
            (i = Math.round((n + g) * 255)),
            (a = Math.round((o + g) * 255));
        } else if (l.startsWith("hsl")) {
          let e,
            n,
            r,
            o = l.match(/hsl\(([^)]+)\)/)[1].split(","),
            c = parseFloat(o[0]),
            u = parseFloat(o[1].replace("%", "")) / 100,
            s = parseFloat(o[2].replace("%", "")) / 100,
            d = (1 - Math.abs(2 * s - 1)) * u,
            f = d * (1 - Math.abs(((c / 60) % 2) - 1)),
            p = s - d / 2;
          c >= 0 && c < 60
            ? ((e = d), (n = f), (r = 0))
            : c >= 60 && c < 120
            ? ((e = f), (n = d), (r = 0))
            : c >= 120 && c < 180
            ? ((e = 0), (n = d), (r = f))
            : c >= 180 && c < 240
            ? ((e = 0), (n = f), (r = d))
            : c >= 240 && c < 300
            ? ((e = f), (n = 0), (r = d))
            : ((e = d), (n = 0), (r = f)),
            (t = Math.round((e + p) * 255)),
            (i = Math.round((n + p) * 255)),
            (a = Math.round((r + p) * 255));
        }
        if (Number.isNaN(t) || Number.isNaN(i) || Number.isNaN(a))
          throw Error(
            `Invalid color in [ix2/shared/utils/normalizeColor.js] '${e}'`
          );
        return { red: t, green: i, blue: a, alpha: r };
      }
    },
    9468: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var i = {
        IX2BrowserSupport: function () {
          return r;
        },
        IX2EasingUtils: function () {
          return l;
        },
        IX2Easings: function () {
          return o;
        },
        IX2ElementsReducer: function () {
          return c;
        },
        IX2VanillaPlugins: function () {
          return u;
        },
        IX2VanillaUtils: function () {
          return s;
        },
      };
      for (var a in i)
        Object.defineProperty(t, a, { enumerable: !0, get: i[a] });
      let r = f(n(2662)),
        o = f(n(8686)),
        l = f(n(3767)),
        c = f(n(5861)),
        u = f(n(1799)),
        s = f(n(4124));
      function d(e) {
        if ("function" != typeof WeakMap) return null;
        var t = new WeakMap(),
          n = new WeakMap();
        return (d = function (e) {
          return e ? n : t;
        })(e);
      }
      function f(e, t) {
        if (!t && e && e.__esModule) return e;
        if (null === e || ("object" != typeof e && "function" != typeof e))
          return { default: e };
        var n = d(t);
        if (n && n.has(e)) return n.get(e);
        var i = { __proto__: null },
          a = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var r in e)
          if ("default" !== r && Object.prototype.hasOwnProperty.call(e, r)) {
            var o = a ? Object.getOwnPropertyDescriptor(e, r) : null;
            o && (o.get || o.set)
              ? Object.defineProperty(i, r, o)
              : (i[r] = e[r]);
          }
        return (i.default = e), n && n.set(e, i), i;
      }
    },
    2662: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var i,
        a = {
          ELEMENT_MATCHES: function () {
            return u;
          },
          FLEX_PREFIXED: function () {
            return s;
          },
          IS_BROWSER_ENV: function () {
            return l;
          },
          TRANSFORM_PREFIXED: function () {
            return d;
          },
          TRANSFORM_STYLE_PREFIXED: function () {
            return p;
          },
          withBrowser: function () {
            return c;
          },
        };
      for (var r in a)
        Object.defineProperty(t, r, { enumerable: !0, get: a[r] });
      let o = (i = n(9777)) && i.__esModule ? i : { default: i },
        l = "undefined" != typeof window,
        c = (e, t) => (l ? e() : t),
        u = c(() =>
          (0, o.default)(
            [
              "matches",
              "matchesSelector",
              "mozMatchesSelector",
              "msMatchesSelector",
              "oMatchesSelector",
              "webkitMatchesSelector",
            ],
            (e) => e in Element.prototype
          )
        ),
        s = c(() => {
          let e = document.createElement("i"),
            t = [
              "flex",
              "-webkit-flex",
              "-ms-flexbox",
              "-moz-box",
              "-webkit-box",
            ];
          try {
            let { length: n } = t;
            for (let i = 0; i < n; i++) {
              let n = t[i];
              if (((e.style.display = n), e.style.display === n)) return n;
            }
            return "";
          } catch (e) {
            return "";
          }
        }, "flex"),
        d = c(() => {
          let e = document.createElement("i");
          if (null == e.style.transform) {
            let t = ["Webkit", "Moz", "ms"],
              { length: n } = t;
            for (let i = 0; i < n; i++) {
              let n = t[i] + "Transform";
              if (void 0 !== e.style[n]) return n;
            }
          }
          return "transform";
        }, "transform"),
        f = d.split("transform")[0],
        p = f ? f + "TransformStyle" : "transformStyle";
    },
    3767: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var i,
        a = {
          applyEasing: function () {
            return d;
          },
          createBezierEasing: function () {
            return s;
          },
          optimizeFloat: function () {
            return u;
          },
        };
      for (var r in a)
        Object.defineProperty(t, r, { enumerable: !0, get: a[r] });
      let o = (function (e, t) {
          if (e && e.__esModule) return e;
          if (null === e || ("object" != typeof e && "function" != typeof e))
            return { default: e };
          var n = c(t);
          if (n && n.has(e)) return n.get(e);
          var i = { __proto__: null },
            a = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var r in e)
            if ("default" !== r && Object.prototype.hasOwnProperty.call(e, r)) {
              var o = a ? Object.getOwnPropertyDescriptor(e, r) : null;
              o && (o.get || o.set)
                ? Object.defineProperty(i, r, o)
                : (i[r] = e[r]);
            }
          return (i.default = e), n && n.set(e, i), i;
        })(n(8686)),
        l = (i = n(1361)) && i.__esModule ? i : { default: i };
      function c(e) {
        if ("function" != typeof WeakMap) return null;
        var t = new WeakMap(),
          n = new WeakMap();
        return (c = function (e) {
          return e ? n : t;
        })(e);
      }
      function u(e, t = 5, n = 10) {
        let i = Math.pow(n, t),
          a = Number(Math.round(e * i) / i);
        return Math.abs(a) > 1e-4 ? a : 0;
      }
      function s(e) {
        return (0, l.default)(...e);
      }
      function d(e, t, n) {
        return 0 === t
          ? 0
          : 1 === t
          ? 1
          : n
          ? u(t > 0 ? n(t) : t)
          : u(t > 0 && e && o[e] ? o[e](t) : t);
      }
    },
    8686: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var i,
        a = {
          bounce: function () {
            return X;
          },
          bouncePast: function () {
            return j;
          },
          ease: function () {
            return l;
          },
          easeIn: function () {
            return c;
          },
          easeInOut: function () {
            return s;
          },
          easeOut: function () {
            return u;
          },
          inBack: function () {
            return M;
          },
          inCirc: function () {
            return L;
          },
          inCubic: function () {
            return g;
          },
          inElastic: function () {
            return G;
          },
          inExpo: function () {
            return A;
          },
          inOutBack: function () {
            return D;
          },
          inOutCirc: function () {
            return C;
          },
          inOutCubic: function () {
            return m;
          },
          inOutElastic: function () {
            return U;
          },
          inOutExpo: function () {
            return N;
          },
          inOutQuad: function () {
            return p;
          },
          inOutQuart: function () {
            return b;
          },
          inOutQuint: function () {
            return v;
          },
          inOutSine: function () {
            return R;
          },
          inQuad: function () {
            return d;
          },
          inQuart: function () {
            return y;
          },
          inQuint: function () {
            return h;
          },
          inSine: function () {
            return O;
          },
          outBack: function () {
            return F;
          },
          outBounce: function () {
            return P;
          },
          outCirc: function () {
            return S;
          },
          outCubic: function () {
            return E;
          },
          outElastic: function () {
            return x;
          },
          outExpo: function () {
            return w;
          },
          outQuad: function () {
            return f;
          },
          outQuart: function () {
            return I;
          },
          outQuint: function () {
            return T;
          },
          outSine: function () {
            return _;
          },
          swingFrom: function () {
            return V;
          },
          swingFromTo: function () {
            return k;
          },
          swingTo: function () {
            return B;
          },
        };
      for (var r in a)
        Object.defineProperty(t, r, { enumerable: !0, get: a[r] });
      let o = (i = n(1361)) && i.__esModule ? i : { default: i },
        l = (0, o.default)(0.25, 0.1, 0.25, 1),
        c = (0, o.default)(0.42, 0, 1, 1),
        u = (0, o.default)(0, 0, 0.58, 1),
        s = (0, o.default)(0.42, 0, 0.58, 1);
      function d(e) {
        return Math.pow(e, 2);
      }
      function f(e) {
        return -(Math.pow(e - 1, 2) - 1);
      }
      function p(e) {
        return (e /= 0.5) < 1
          ? 0.5 * Math.pow(e, 2)
          : -0.5 * ((e -= 2) * e - 2);
      }
      function g(e) {
        return Math.pow(e, 3);
      }
      function E(e) {
        return Math.pow(e - 1, 3) + 1;
      }
      function m(e) {
        return (e /= 0.5) < 1
          ? 0.5 * Math.pow(e, 3)
          : 0.5 * (Math.pow(e - 2, 3) + 2);
      }
      function y(e) {
        return Math.pow(e, 4);
      }
      function I(e) {
        return -(Math.pow(e - 1, 4) - 1);
      }
      function b(e) {
        return (e /= 0.5) < 1
          ? 0.5 * Math.pow(e, 4)
          : -0.5 * ((e -= 2) * Math.pow(e, 3) - 2);
      }
      function h(e) {
        return Math.pow(e, 5);
      }
      function T(e) {
        return Math.pow(e - 1, 5) + 1;
      }
      function v(e) {
        return (e /= 0.5) < 1
          ? 0.5 * Math.pow(e, 5)
          : 0.5 * (Math.pow(e - 2, 5) + 2);
      }
      function O(e) {
        return -Math.cos((Math.PI / 2) * e) + 1;
      }
      function _(e) {
        return Math.sin((Math.PI / 2) * e);
      }
      function R(e) {
        return -0.5 * (Math.cos(Math.PI * e) - 1);
      }
      function A(e) {
        return 0 === e ? 0 : Math.pow(2, 10 * (e - 1));
      }
      function w(e) {
        return 1 === e ? 1 : -Math.pow(2, -10 * e) + 1;
      }
      function N(e) {
        return 0 === e
          ? 0
          : 1 === e
          ? 1
          : (e /= 0.5) < 1
          ? 0.5 * Math.pow(2, 10 * (e - 1))
          : 0.5 * (-Math.pow(2, -10 * --e) + 2);
      }
      function L(e) {
        return -(Math.sqrt(1 - e * e) - 1);
      }
      function S(e) {
        return Math.sqrt(1 - Math.pow(e - 1, 2));
      }
      function C(e) {
        return (e /= 0.5) < 1
          ? -0.5 * (Math.sqrt(1 - e * e) - 1)
          : 0.5 * (Math.sqrt(1 - (e -= 2) * e) + 1);
      }
      function P(e) {
        return e < 1 / 2.75
          ? 7.5625 * e * e
          : e < 2 / 2.75
          ? 7.5625 * (e -= 1.5 / 2.75) * e + 0.75
          : e < 2.5 / 2.75
          ? 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375
          : 7.5625 * (e -= 2.625 / 2.75) * e + 0.984375;
      }
      function M(e) {
        return e * e * (2.70158 * e - 1.70158);
      }
      function F(e) {
        return (e -= 1) * e * (2.70158 * e + 1.70158) + 1;
      }
      function D(e) {
        let t = 1.70158;
        return (e /= 0.5) < 1
          ? 0.5 * (e * e * (((t *= 1.525) + 1) * e - t))
          : 0.5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2);
      }
      function G(e) {
        let t = 1.70158,
          n = 0,
          i = 1;
        return 0 === e
          ? 0
          : 1 === e
          ? 1
          : (n || (n = 0.3),
            i < 1
              ? ((i = 1), (t = n / 4))
              : (t = (n / (2 * Math.PI)) * Math.asin(1 / i)),
            -(
              i *
              Math.pow(2, 10 * (e -= 1)) *
              Math.sin((2 * Math.PI * (e - t)) / n)
            ));
      }
      function x(e) {
        let t = 1.70158,
          n = 0,
          i = 1;
        return 0 === e
          ? 0
          : 1 === e
          ? 1
          : (n || (n = 0.3),
            i < 1
              ? ((i = 1), (t = n / 4))
              : (t = (n / (2 * Math.PI)) * Math.asin(1 / i)),
            i * Math.pow(2, -10 * e) * Math.sin((2 * Math.PI * (e - t)) / n) +
              1);
      }
      function U(e) {
        let t = 1.70158,
          n = 0,
          i = 1;
        return 0 === e
          ? 0
          : 2 == (e /= 0.5)
          ? 1
          : (n || (n = 0.3 * 1.5),
            i < 1
              ? ((i = 1), (t = n / 4))
              : (t = (n / (2 * Math.PI)) * Math.asin(1 / i)),
            e < 1)
          ? -0.5 *
            (i *
              Math.pow(2, 10 * (e -= 1)) *
              Math.sin((2 * Math.PI * (e - t)) / n))
          : i *
              Math.pow(2, -10 * (e -= 1)) *
              Math.sin((2 * Math.PI * (e - t)) / n) *
              0.5 +
            1;
      }
      function k(e) {
        let t = 1.70158;
        return (e /= 0.5) < 1
          ? 0.5 * (e * e * (((t *= 1.525) + 1) * e - t))
          : 0.5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2);
      }
      function V(e) {
        return e * e * (2.70158 * e - 1.70158);
      }
      function B(e) {
        return (e -= 1) * e * (2.70158 * e + 1.70158) + 1;
      }
      function X(e) {
        return e < 1 / 2.75
          ? 7.5625 * e * e
          : e < 2 / 2.75
          ? 7.5625 * (e -= 1.5 / 2.75) * e + 0.75
          : e < 2.5 / 2.75
          ? 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375
          : 7.5625 * (e -= 2.625 / 2.75) * e + 0.984375;
      }
      function j(e) {
        return e < 1 / 2.75
          ? 7.5625 * e * e
          : e < 2 / 2.75
          ? 2 - (7.5625 * (e -= 1.5 / 2.75) * e + 0.75)
          : e < 2.5 / 2.75
          ? 2 - (7.5625 * (e -= 2.25 / 2.75) * e + 0.9375)
          : 2 - (7.5625 * (e -= 2.625 / 2.75) * e + 0.984375);
      }
    },
    1799: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var i = {
        clearPlugin: function () {
          return E;
        },
        createPluginInstance: function () {
          return p;
        },
        getPluginConfig: function () {
          return u;
        },
        getPluginDestination: function () {
          return f;
        },
        getPluginDuration: function () {
          return d;
        },
        getPluginOrigin: function () {
          return s;
        },
        isPluginType: function () {
          return l;
        },
        renderPlugin: function () {
          return g;
        },
      };
      for (var a in i)
        Object.defineProperty(t, a, { enumerable: !0, get: i[a] });
      let r = n(2662),
        o = n(3690);
      function l(e) {
        return o.pluginMethodMap.has(e);
      }
      let c = (e) => (t) => {
          if (!r.IS_BROWSER_ENV) return () => null;
          let n = o.pluginMethodMap.get(t);
          if (!n) throw Error(`IX2 no plugin configured for: ${t}`);
          let i = n[e];
          if (!i) throw Error(`IX2 invalid plugin method: ${e}`);
          return i;
        },
        u = c("getPluginConfig"),
        s = c("getPluginOrigin"),
        d = c("getPluginDuration"),
        f = c("getPluginDestination"),
        p = c("createPluginInstance"),
        g = c("renderPlugin"),
        E = c("clearPlugin");
    },
    4124: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var i = {
        cleanupHTMLElement: function () {
          return eW;
        },
        clearAllStyles: function () {
          return eX;
        },
        clearObjectCache: function () {
          return ed;
        },
        getActionListProgress: function () {
          return eQ;
        },
        getAffectedElements: function () {
          return eh;
        },
        getComputedStyle: function () {
          return eT;
        },
        getDestinationValues: function () {
          return eL;
        },
        getElementId: function () {
          return eE;
        },
        getInstanceId: function () {
          return ep;
        },
        getInstanceOrigin: function () {
          return eR;
        },
        getItemConfigByKey: function () {
          return eN;
        },
        getMaxDurationItemIndex: function () {
          return e$;
        },
        getNamespacedParameterId: function () {
          return eZ;
        },
        getRenderType: function () {
          return eS;
        },
        getStyleProp: function () {
          return eC;
        },
        mediaQueriesEqual: function () {
          return e0;
        },
        observeStore: function () {
          return eI;
        },
        reduceListToGroup: function () {
          return eq;
        },
        reifyState: function () {
          return em;
        },
        renderHTMLElement: function () {
          return eP;
        },
        shallowEqual: function () {
          return s.default;
        },
        shouldAllowMediaQuery: function () {
          return eJ;
        },
        shouldNamespaceEventParameter: function () {
          return eK;
        },
        stringifyTarget: function () {
          return e1;
        },
      };
      for (var a in i)
        Object.defineProperty(t, a, { enumerable: !0, get: i[a] });
      let r = E(n(4075)),
        o = E(n(1455)),
        l = E(n(5720)),
        c = n(1185),
        u = n(7087),
        s = E(n(7164)),
        d = n(3767),
        f = n(380),
        p = n(1799),
        g = n(2662);
      function E(e) {
        return e && e.__esModule ? e : { default: e };
      }
      let {
          BACKGROUND: m,
          TRANSFORM: y,
          TRANSLATE_3D: I,
          SCALE_3D: b,
          ROTATE_X: h,
          ROTATE_Y: T,
          ROTATE_Z: v,
          SKEW: O,
          PRESERVE_3D: _,
          FLEX: R,
          OPACITY: A,
          FILTER: w,
          FONT_VARIATION_SETTINGS: N,
          WIDTH: L,
          HEIGHT: S,
          BACKGROUND_COLOR: C,
          BORDER_COLOR: P,
          COLOR: M,
          CHILDREN: F,
          IMMEDIATE_CHILDREN: D,
          SIBLINGS: G,
          PARENT: x,
          DISPLAY: U,
          WILL_CHANGE: k,
          AUTO: V,
          COMMA_DELIMITER: B,
          COLON_DELIMITER: X,
          BAR_DELIMITER: j,
          RENDER_TRANSFORM: H,
          RENDER_GENERAL: W,
          RENDER_STYLE: z,
          RENDER_PLUGIN: Y,
        } = u.IX2EngineConstants,
        {
          TRANSFORM_MOVE: $,
          TRANSFORM_SCALE: Q,
          TRANSFORM_ROTATE: q,
          TRANSFORM_SKEW: K,
          STYLE_OPACITY: Z,
          STYLE_FILTER: J,
          STYLE_FONT_VARIATION: ee,
          STYLE_SIZE: et,
          STYLE_BACKGROUND_COLOR: en,
          STYLE_BORDER: ei,
          STYLE_TEXT_COLOR: ea,
          GENERAL_DISPLAY: er,
          OBJECT_VALUE: eo,
        } = u.ActionTypeConsts,
        el = (e) => e.trim(),
        ec = Object.freeze({ [en]: C, [ei]: P, [ea]: M }),
        eu = Object.freeze({
          [g.TRANSFORM_PREFIXED]: y,
          [C]: m,
          [A]: A,
          [w]: w,
          [L]: L,
          [S]: S,
          [N]: N,
        }),
        es = new Map();
      function ed() {
        es.clear();
      }
      let ef = 1;
      function ep() {
        return "i" + ef++;
      }
      let eg = 1;
      function eE(e, t) {
        for (let n in e) {
          let i = e[n];
          if (i && i.ref === t) return i.id;
        }
        return "e" + eg++;
      }
      function em({ events: e, actionLists: t, site: n } = {}) {
        let i = (0, o.default)(
            e,
            (e, t) => {
              let { eventTypeId: n } = t;
              return e[n] || (e[n] = {}), (e[n][t.id] = t), e;
            },
            {}
          ),
          a = n && n.mediaQueries,
          r = [];
        return (
          a
            ? (r = a.map((e) => e.key))
            : ((a = []), console.warn("IX2 missing mediaQueries in site data")),
          {
            ixData: {
              events: e,
              actionLists: t,
              eventTypeMap: i,
              mediaQueries: a,
              mediaQueryKeys: r,
            },
          }
        );
      }
      let ey = (e, t) => e === t;
      function eI({ store: e, select: t, onChange: n, comparator: i = ey }) {
        let { getState: a, subscribe: r } = e,
          o = r(function () {
            let r = t(a());
            if (null == r) return void o();
            i(r, l) || n((l = r), e);
          }),
          l = t(a());
        return o;
      }
      function eb(e) {
        let t = typeof e;
        if ("string" === t) return { id: e };
        if (null != e && "object" === t) {
          let {
            id: t,
            objectId: n,
            selector: i,
            selectorGuids: a,
            appliesTo: r,
            useEventTarget: o,
          } = e;
          return {
            id: t,
            objectId: n,
            selector: i,
            selectorGuids: a,
            appliesTo: r,
            useEventTarget: o,
          };
        }
        return {};
      }
      function eh({
        config: e,
        event: t,
        eventTarget: n,
        elementRoot: i,
        elementApi: a,
      }) {
        let r, o, l;
        if (!a) throw Error("IX2 missing elementApi");
        let { targets: c } = e;
        if (Array.isArray(c) && c.length > 0)
          return c.reduce(
            (e, r) =>
              e.concat(
                eh({
                  config: { target: r },
                  event: t,
                  eventTarget: n,
                  elementRoot: i,
                  elementApi: a,
                })
              ),
            []
          );
        let {
            getValidDocument: s,
            getQuerySelector: d,
            queryDocument: f,
            getChildElements: p,
            getSiblingElements: E,
            matchSelector: m,
            elementContains: y,
            isSiblingNode: I,
          } = a,
          { target: b } = e;
        if (!b) return [];
        let {
          id: h,
          objectId: T,
          selector: v,
          selectorGuids: O,
          appliesTo: _,
          useEventTarget: R,
        } = eb(b);
        if (T) return [es.has(T) ? es.get(T) : es.set(T, {}).get(T)];
        if (_ === u.EventAppliesTo.PAGE) {
          let e = s(h);
          return e ? [e] : [];
        }
        let A = (t?.action?.config?.affectedElements ?? {})[h || v] || {},
          w = !!(A.id || A.selector),
          N = t && d(eb(t.target));
        if (
          (w
            ? ((r = A.limitAffectedElements), (o = N), (l = d(A)))
            : (o = l = d({ id: h, selector: v, selectorGuids: O })),
          t && R)
        ) {
          let e = n && (l || !0 === R) ? [n] : f(N);
          if (l) {
            if (R === x) return f(l).filter((t) => e.some((e) => y(t, e)));
            if (R === F) return f(l).filter((t) => e.some((e) => y(e, t)));
            if (R === G) return f(l).filter((t) => e.some((e) => I(e, t)));
          }
          return e;
        }
        return null == o || null == l
          ? []
          : g.IS_BROWSER_ENV && i
          ? f(l).filter((e) => i.contains(e))
          : r === F
          ? f(o, l)
          : r === D
          ? p(f(o)).filter(m(l))
          : r === G
          ? E(f(o)).filter(m(l))
          : f(l);
      }
      function eT({ element: e, actionItem: t }) {
        if (!g.IS_BROWSER_ENV) return {};
        let { actionTypeId: n } = t;
        switch (n) {
          case et:
          case en:
          case ei:
          case ea:
          case er:
            return window.getComputedStyle(e);
          default:
            return {};
        }
      }
      let ev = /px/,
        eO = (e, t) =>
          t.reduce(
            (e, t) => (null == e[t.type] && (e[t.type] = eF[t.type]), e),
            e || {}
          ),
        e_ = (e, t) =>
          t.reduce(
            (e, t) => (
              null == e[t.type] &&
                (e[t.type] = eD[t.type] || t.defaultValue || 0),
              e
            ),
            e || {}
          );
      function eR(e, t = {}, n = {}, i, a) {
        let { getStyle: o } = a,
          { actionTypeId: l } = i;
        if ((0, p.isPluginType)(l)) return (0, p.getPluginOrigin)(l)(t[l], i);
        switch (i.actionTypeId) {
          case $:
          case Q:
          case q:
          case K:
            return t[i.actionTypeId] || eM[i.actionTypeId];
          case J:
            return eO(t[i.actionTypeId], i.config.filters);
          case ee:
            return e_(t[i.actionTypeId], i.config.fontVariations);
          case Z:
            return { value: (0, r.default)(parseFloat(o(e, A)), 1) };
          case et: {
            let t,
              a = o(e, L),
              l = o(e, S);
            return {
              widthValue:
                i.config.widthUnit === V
                  ? ev.test(a)
                    ? parseFloat(a)
                    : parseFloat(n.width)
                  : (0, r.default)(parseFloat(a), parseFloat(n.width)),
              heightValue:
                i.config.heightUnit === V
                  ? ev.test(l)
                    ? parseFloat(l)
                    : parseFloat(n.height)
                  : (0, r.default)(parseFloat(l), parseFloat(n.height)),
            };
          }
          case en:
          case ei:
          case ea:
            return (function ({
              element: e,
              actionTypeId: t,
              computedStyle: n,
              getStyle: i,
            }) {
              let a = ec[t],
                o = i(e, a),
                l = (function (e, t) {
                  let n = e.exec(t);
                  return n ? n[1] : "";
                })(ek, eU.test(o) ? o : n[a]).split(B);
              return {
                rValue: (0, r.default)(parseInt(l[0], 10), 255),
                gValue: (0, r.default)(parseInt(l[1], 10), 255),
                bValue: (0, r.default)(parseInt(l[2], 10), 255),
                aValue: (0, r.default)(parseFloat(l[3]), 1),
              };
            })({
              element: e,
              actionTypeId: i.actionTypeId,
              computedStyle: n,
              getStyle: o,
            });
          case er:
            return { value: (0, r.default)(o(e, U), n.display) };
          case eo:
            return t[i.actionTypeId] || { value: 0 };
          default:
            return;
        }
      }
      let eA = (e, t) => (t && (e[t.type] = t.value || 0), e),
        ew = (e, t) => (t && (e[t.type] = t.value || 0), e),
        eN = (e, t, n) => {
          if ((0, p.isPluginType)(e)) return (0, p.getPluginConfig)(e)(n, t);
          switch (e) {
            case J: {
              let e = (0, l.default)(n.filters, ({ type: e }) => e === t);
              return e ? e.value : 0;
            }
            case ee: {
              let e = (0, l.default)(
                n.fontVariations,
                ({ type: e }) => e === t
              );
              return e ? e.value : 0;
            }
            default:
              return n[t];
          }
        };
      function eL({ element: e, actionItem: t, elementApi: n }) {
        if ((0, p.isPluginType)(t.actionTypeId))
          return (0, p.getPluginDestination)(t.actionTypeId)(t.config);
        switch (t.actionTypeId) {
          case $:
          case Q:
          case q:
          case K: {
            let { xValue: e, yValue: n, zValue: i } = t.config;
            return { xValue: e, yValue: n, zValue: i };
          }
          case et: {
            let { getStyle: i, setStyle: a, getProperty: r } = n,
              { widthUnit: o, heightUnit: l } = t.config,
              { widthValue: c, heightValue: u } = t.config;
            if (!g.IS_BROWSER_ENV) return { widthValue: c, heightValue: u };
            if (o === V) {
              let t = i(e, L);
              a(e, L, ""), (c = r(e, "offsetWidth")), a(e, L, t);
            }
            if (l === V) {
              let t = i(e, S);
              a(e, S, ""), (u = r(e, "offsetHeight")), a(e, S, t);
            }
            return { widthValue: c, heightValue: u };
          }
          case en:
          case ei:
          case ea: {
            let {
              rValue: i,
              gValue: a,
              bValue: r,
              aValue: o,
              globalSwatchId: l,
            } = t.config;
            if (l && l.startsWith("--")) {
              let { getStyle: t } = n,
                i = t(e, l),
                a = (0, f.normalizeColor)(i);
              return {
                rValue: a.red,
                gValue: a.green,
                bValue: a.blue,
                aValue: a.alpha,
              };
            }
            return { rValue: i, gValue: a, bValue: r, aValue: o };
          }
          case J:
            return t.config.filters.reduce(eA, {});
          case ee:
            return t.config.fontVariations.reduce(ew, {});
          default: {
            let { value: e } = t.config;
            return { value: e };
          }
        }
      }
      function eS(e) {
        return /^TRANSFORM_/.test(e)
          ? H
          : /^STYLE_/.test(e)
          ? z
          : /^GENERAL_/.test(e)
          ? W
          : /^PLUGIN_/.test(e)
          ? Y
          : void 0;
      }
      function eC(e, t) {
        return e === z ? t.replace("STYLE_", "").toLowerCase() : null;
      }
      function eP(e, t, n, i, a, r, l, c, u) {
        switch (c) {
          case H:
            var s = e,
              d = t,
              f = n,
              E = a,
              m = l;
            let y = ex
                .map((e) => {
                  let t = eM[e],
                    {
                      xValue: n = t.xValue,
                      yValue: i = t.yValue,
                      zValue: a = t.zValue,
                      xUnit: r = "",
                      yUnit: o = "",
                      zUnit: l = "",
                    } = d[e] || {};
                  switch (e) {
                    case $:
                      return `${I}(${n}${r}, ${i}${o}, ${a}${l})`;
                    case Q:
                      return `${b}(${n}${r}, ${i}${o}, ${a}${l})`;
                    case q:
                      return `${h}(${n}${r}) ${T}(${i}${o}) ${v}(${a}${l})`;
                    case K:
                      return `${O}(${n}${r}, ${i}${o})`;
                    default:
                      return "";
                  }
                })
                .join(" "),
              { setStyle: A } = m;
            eV(s, g.TRANSFORM_PREFIXED, m),
              A(s, g.TRANSFORM_PREFIXED, y),
              (function (
                { actionTypeId: e },
                { xValue: t, yValue: n, zValue: i }
              ) {
                return (
                  (e === $ && void 0 !== i) ||
                  (e === Q && void 0 !== i) ||
                  (e === q && (void 0 !== t || void 0 !== n))
                );
              })(E, f) && A(s, g.TRANSFORM_STYLE_PREFIXED, _);
            return;
          case z:
            return (function (e, t, n, i, a, r) {
              let { setStyle: l } = r;
              switch (i.actionTypeId) {
                case et: {
                  let { widthUnit: t = "", heightUnit: a = "" } = i.config,
                    { widthValue: o, heightValue: c } = n;
                  void 0 !== o &&
                    (t === V && (t = "px"), eV(e, L, r), l(e, L, o + t)),
                    void 0 !== c &&
                      (a === V && (a = "px"), eV(e, S, r), l(e, S, c + a));
                  break;
                }
                case J:
                  var c = i.config;
                  let u = (0, o.default)(
                      n,
                      (e, t, n) => `${e} ${n}(${t}${eG(n, c)})`,
                      ""
                    ),
                    { setStyle: s } = r;
                  eV(e, w, r), s(e, w, u);
                  break;
                case ee:
                  i.config;
                  let d = (0, o.default)(
                      n,
                      (e, t, n) => (e.push(`"${n}" ${t}`), e),
                      []
                    ).join(", "),
                    { setStyle: f } = r;
                  eV(e, N, r), f(e, N, d);
                  break;
                case en:
                case ei:
                case ea: {
                  let t = ec[i.actionTypeId],
                    a = Math.round(n.rValue),
                    o = Math.round(n.gValue),
                    c = Math.round(n.bValue),
                    u = n.aValue;
                  eV(e, t, r),
                    l(
                      e,
                      t,
                      u >= 1
                        ? `rgb(${a},${o},${c})`
                        : `rgba(${a},${o},${c},${u})`
                    );
                  break;
                }
                default: {
                  let { unit: t = "" } = i.config;
                  eV(e, a, r), l(e, a, n.value + t);
                }
              }
            })(e, 0, n, a, r, l);
          case W:
            var C = e,
              P = a,
              M = l;
            let { setStyle: F } = M;
            if (P.actionTypeId === er) {
              let { value: e } = P.config;
              F(C, U, e === R && g.IS_BROWSER_ENV ? g.FLEX_PREFIXED : e);
            }
            return;
          case Y: {
            let { actionTypeId: e } = a;
            if ((0, p.isPluginType)(e)) return (0, p.renderPlugin)(e)(u, t, a);
          }
        }
      }
      let eM = {
          [$]: Object.freeze({ xValue: 0, yValue: 0, zValue: 0 }),
          [Q]: Object.freeze({ xValue: 1, yValue: 1, zValue: 1 }),
          [q]: Object.freeze({ xValue: 0, yValue: 0, zValue: 0 }),
          [K]: Object.freeze({ xValue: 0, yValue: 0 }),
        },
        eF = Object.freeze({
          blur: 0,
          "hue-rotate": 0,
          invert: 0,
          grayscale: 0,
          saturate: 100,
          sepia: 0,
          contrast: 100,
          brightness: 100,
        }),
        eD = Object.freeze({ wght: 0, opsz: 0, wdth: 0, slnt: 0 }),
        eG = (e, t) => {
          let n = (0, l.default)(t.filters, ({ type: t }) => t === e);
          if (n && n.unit) return n.unit;
          switch (e) {
            case "blur":
              return "px";
            case "hue-rotate":
              return "deg";
            default:
              return "%";
          }
        },
        ex = Object.keys(eM),
        eU = /^rgb/,
        ek = RegExp("rgba?\\(([^)]+)\\)");
      function eV(e, t, n) {
        if (!g.IS_BROWSER_ENV) return;
        let i = eu[t];
        if (!i) return;
        let { getStyle: a, setStyle: r } = n,
          o = a(e, k);
        if (!o) return void r(e, k, i);
        let l = o.split(B).map(el);
        -1 === l.indexOf(i) && r(e, k, l.concat(i).join(B));
      }
      function eB(e, t, n) {
        if (!g.IS_BROWSER_ENV) return;
        let i = eu[t];
        if (!i) return;
        let { getStyle: a, setStyle: r } = n,
          o = a(e, k);
        o &&
          -1 !== o.indexOf(i) &&
          r(
            e,
            k,
            o
              .split(B)
              .map(el)
              .filter((e) => e !== i)
              .join(B)
          );
      }
      function eX({ store: e, elementApi: t }) {
        let { ixData: n } = e.getState(),
          { events: i = {}, actionLists: a = {} } = n;
        Object.keys(i).forEach((e) => {
          let n = i[e],
            { config: r } = n.action,
            { actionListId: o } = r,
            l = a[o];
          l && ej({ actionList: l, event: n, elementApi: t });
        }),
          Object.keys(a).forEach((e) => {
            ej({ actionList: a[e], elementApi: t });
          });
      }
      function ej({ actionList: e = {}, event: t, elementApi: n }) {
        let { actionItemGroups: i, continuousParameterGroups: a } = e;
        i &&
          i.forEach((e) => {
            eH({ actionGroup: e, event: t, elementApi: n });
          }),
          a &&
            a.forEach((e) => {
              let { continuousActionGroups: i } = e;
              i.forEach((e) => {
                eH({ actionGroup: e, event: t, elementApi: n });
              });
            });
      }
      function eH({ actionGroup: e, event: t, elementApi: n }) {
        let { actionItems: i } = e;
        i.forEach((e) => {
          let i,
            { actionTypeId: a, config: r } = e;
          (i = (0, p.isPluginType)(a)
            ? (t) => (0, p.clearPlugin)(a)(t, e)
            : ez({ effect: eY, actionTypeId: a, elementApi: n })),
            eh({ config: r, event: t, elementApi: n }).forEach(i);
        });
      }
      function eW(e, t, n) {
        let { setStyle: i, getStyle: a } = n,
          { actionTypeId: r } = t;
        if (r === et) {
          let { config: n } = t;
          n.widthUnit === V && i(e, L, ""), n.heightUnit === V && i(e, S, "");
        }
        a(e, k) && ez({ effect: eB, actionTypeId: r, elementApi: n })(e);
      }
      let ez =
        ({ effect: e, actionTypeId: t, elementApi: n }) =>
        (i) => {
          switch (t) {
            case $:
            case Q:
            case q:
            case K:
              e(i, g.TRANSFORM_PREFIXED, n);
              break;
            case J:
              e(i, w, n);
              break;
            case ee:
              e(i, N, n);
              break;
            case Z:
              e(i, A, n);
              break;
            case et:
              e(i, L, n), e(i, S, n);
              break;
            case en:
            case ei:
            case ea:
              e(i, ec[t], n);
              break;
            case er:
              e(i, U, n);
          }
        };
      function eY(e, t, n) {
        let { setStyle: i } = n;
        eB(e, t, n),
          i(e, t, ""),
          t === g.TRANSFORM_PREFIXED && i(e, g.TRANSFORM_STYLE_PREFIXED, "");
      }
      function e$(e) {
        let t = 0,
          n = 0;
        return (
          e.forEach((e, i) => {
            let { config: a } = e,
              r = a.delay + a.duration;
            r >= t && ((t = r), (n = i));
          }),
          n
        );
      }
      function eQ(e, t) {
        let { actionItemGroups: n, useFirstGroupAsInitialState: i } = e,
          { actionItem: a, verboseTimeElapsed: r = 0 } = t,
          o = 0,
          l = 0;
        return (
          n.forEach((e, t) => {
            if (i && 0 === t) return;
            let { actionItems: n } = e,
              c = n[e$(n)],
              { config: u, actionTypeId: s } = c;
            a.id === c.id && (l = o + r);
            let d = eS(s) === W ? 0 : u.duration;
            o += u.delay + d;
          }),
          o > 0 ? (0, d.optimizeFloat)(l / o) : 0
        );
      }
      function eq({ actionList: e, actionItemId: t, rawData: n }) {
        let { actionItemGroups: i, continuousParameterGroups: a } = e,
          r = [],
          o = (e) => (
            r.push((0, c.mergeIn)(e, ["config"], { delay: 0, duration: 0 })),
            e.id === t
          );
        return (
          i && i.some(({ actionItems: e }) => e.some(o)),
          a &&
            a.some((e) => {
              let { continuousActionGroups: t } = e;
              return t.some(({ actionItems: e }) => e.some(o));
            }),
          (0, c.setIn)(n, ["actionLists"], {
            [e.id]: { id: e.id, actionItemGroups: [{ actionItems: r }] },
          })
        );
      }
      function eK(e, { basedOn: t }) {
        return (
          (e === u.EventTypeConsts.SCROLLING_IN_VIEW &&
            (t === u.EventBasedOn.ELEMENT || null == t)) ||
          (e === u.EventTypeConsts.MOUSE_MOVE && t === u.EventBasedOn.ELEMENT)
        );
      }
      function eZ(e, t) {
        return e + X + t;
      }
      function eJ(e, t) {
        return null == t || -1 !== e.indexOf(t);
      }
      function e0(e, t) {
        return (0, s.default)(e && e.sort(), t && t.sort());
      }
      function e1(e) {
        if ("string" == typeof e) return e;
        if (e.pluginElement && e.objectId)
          return e.pluginElement + j + e.objectId;
        if (e.objectId) return e.objectId;
        let { id: t = "", selector: n = "", useEventTarget: i = "" } = e;
        return t + j + n + j + i;
      }
    },
    7164: function (e, t) {
      "use strict";
      function n(e, t) {
        return e === t
          ? 0 !== e || 0 !== t || 1 / e == 1 / t
          : e != e && t != t;
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "default", {
          enumerable: !0,
          get: function () {
            return i;
          },
        });
      let i = function (e, t) {
        if (n(e, t)) return !0;
        if (
          "object" != typeof e ||
          null === e ||
          "object" != typeof t ||
          null === t
        )
          return !1;
        let i = Object.keys(e),
          a = Object.keys(t);
        if (i.length !== a.length) return !1;
        for (let a = 0; a < i.length; a++)
          if (!Object.hasOwn(t, i[a]) || !n(e[i[a]], t[i[a]])) return !1;
        return !0;
      };
    },
    5861: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var i = {
        createElementState: function () {
          return O;
        },
        ixElements: function () {
          return v;
        },
        mergeActionState: function () {
          return _;
        },
      };
      for (var a in i)
        Object.defineProperty(t, a, { enumerable: !0, get: i[a] });
      let r = n(1185),
        o = n(7087),
        {
          HTML_ELEMENT: l,
          PLAIN_OBJECT: c,
          ABSTRACT_NODE: u,
          CONFIG_X_VALUE: s,
          CONFIG_Y_VALUE: d,
          CONFIG_Z_VALUE: f,
          CONFIG_VALUE: p,
          CONFIG_X_UNIT: g,
          CONFIG_Y_UNIT: E,
          CONFIG_Z_UNIT: m,
          CONFIG_UNIT: y,
        } = o.IX2EngineConstants,
        {
          IX2_SESSION_STOPPED: I,
          IX2_INSTANCE_ADDED: b,
          IX2_ELEMENT_STATE_CHANGED: h,
        } = o.IX2EngineActionTypes,
        T = {},
        v = (e = T, t = {}) => {
          switch (t.type) {
            case I:
              return T;
            case b: {
              let {
                  elementId: n,
                  element: i,
                  origin: a,
                  actionItem: o,
                  refType: l,
                } = t.payload,
                { actionTypeId: c } = o,
                u = e;
              return (
                (0, r.getIn)(u, [n, i]) !== i && (u = O(u, i, l, n, o)),
                _(u, n, c, a, o)
              );
            }
            case h: {
              let {
                elementId: n,
                actionTypeId: i,
                current: a,
                actionItem: r,
              } = t.payload;
              return _(e, n, i, a, r);
            }
            default:
              return e;
          }
        };
      function O(e, t, n, i, a) {
        let o =
          n === c ? (0, r.getIn)(a, ["config", "target", "objectId"]) : null;
        return (0, r.mergeIn)(e, [i], { id: i, ref: t, refId: o, refType: n });
      }
      function _(e, t, n, i, a) {
        let o = (function (e) {
          let { config: t } = e;
          return R.reduce((e, n) => {
            let i = n[0],
              a = n[1],
              r = t[i],
              o = t[a];
            return null != r && null != o && (e[a] = o), e;
          }, {});
        })(a);
        return (0, r.mergeIn)(e, [t, "refState", n], i, o);
      }
      let R = [
        [s, g],
        [d, E],
        [f, m],
        [p, y],
      ];
    },
    2538: function () {
      Webflow.require("ix2").init({
        events: {
          e: {
            id: "e",
            name: "",
            animationType: "custom",
            eventTypeId: "DROPDOWN_OPEN",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-2",
              },
            },
            mediaQueries: ["main"],
            target: {
              selector: ".dropdown",
              originalId:
                "68149b8e91f5ee32067ccb6c|79ee1d7e-579f-7b74-dfcc-f96521a04716",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".dropdown",
                originalId:
                  "68149b8e91f5ee32067ccb6c|79ee1d7e-579f-7b74-dfcc-f96521a04716",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x196aa4690c9,
          },
          "e-2": {
            id: "e-2",
            name: "",
            animationType: "custom",
            eventTypeId: "DROPDOWN_CLOSE",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-2",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e",
              },
            },
            mediaQueries: ["main"],
            target: {
              selector: ".dropdown",
              originalId:
                "68149b8e91f5ee32067ccb6c|79ee1d7e-579f-7b74-dfcc-f96521a04716",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".dropdown",
                originalId:
                  "68149b8e91f5ee32067ccb6c|79ee1d7e-579f-7b74-dfcc-f96521a04716",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x196aa4690c9,
          },
          "e-3": {
            id: "e-3",
            name: "",
            animationType: "custom",
            eventTypeId: "NAVBAR_OPEN",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-5",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-4",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "0a3577fa-d6ce-b724-8221-186f7195a379",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "0a3577fa-d6ce-b724-8221-186f7195a379",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x196aa6b921b,
          },
          "e-4": {
            id: "e-4",
            name: "",
            animationType: "custom",
            eventTypeId: "NAVBAR_CLOSE",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-6",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-3",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "0a3577fa-d6ce-b724-8221-186f7195a379",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "0a3577fa-d6ce-b724-8221-186f7195a379",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x196aa6b921c,
          },
          "e-5": {
            id: "e-5",
            name: "",
            animationType: "custom",
            eventTypeId: "DROPDOWN_OPEN",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-3",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-6",
              },
            },
            mediaQueries: ["medium", "small", "tiny"],
            target: {
              selector: ".dropdown",
              originalId: "0a3577fa-d6ce-b724-8221-186f7195a380",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".dropdown",
                originalId: "0a3577fa-d6ce-b724-8221-186f7195a380",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x196aa6bea85,
          },
          "e-6": {
            id: "e-6",
            name: "",
            animationType: "custom",
            eventTypeId: "DROPDOWN_CLOSE",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-4",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-5",
              },
            },
            mediaQueries: ["medium", "small", "tiny"],
            target: {
              selector: ".dropdown",
              originalId: "0a3577fa-d6ce-b724-8221-186f7195a380",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".dropdown",
                originalId: "0a3577fa-d6ce-b724-8221-186f7195a380",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x196aa6bea85,
          },
          "e-7": {
            id: "e-7",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-7",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-8",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "a12981e2-7316-52f6-a54b-d6b0cb21d68c",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "a12981e2-7316-52f6-a54b-d6b0cb21d68c",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !0,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x196ab3383bb,
          },
          "e-9": {
            id: "e-9",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLLING_IN_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_CONTINUOUS_ACTION",
              config: {
                actionListId: "a-8",
                affectedElements: {},
                duration: 0,
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68149b8e91f5ee32067ccb6c|ffdb9a14-1857-3f2e-acff-efaaeb822702",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68149b8e91f5ee32067ccb6c|ffdb9a14-1857-3f2e-acff-efaaeb822702",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: [
              {
                continuousParameterGroupId: "a-8-p",
                smoothing: 50,
                startsEntering: !0,
                addStartOffset: !1,
                addOffsetValue: 50,
                startsExiting: !1,
                addEndOffset: !1,
                endOffsetValue: 50,
              },
            ],
            createdOn: 0x196ab9e7a28,
          },
          "e-10": {
            id: "e-10",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLLING_IN_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_CONTINUOUS_ACTION",
              config: {
                actionListId: "a-9",
                affectedElements: {},
                duration: 0,
              },
            },
            mediaQueries: ["main"],
            target: {
              id: "68149b8e91f5ee32067ccb6c|e9eef41c-1542-49c2-d348-40c704bbb298",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68149b8e91f5ee32067ccb6c|e9eef41c-1542-49c2-d348-40c704bbb298",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: [
              {
                continuousParameterGroupId: "a-9-p",
                smoothing: 90,
                startsEntering: !0,
                addStartOffset: !1,
                addOffsetValue: 50,
                startsExiting: !1,
                addEndOffset: !1,
                endOffsetValue: 50,
              },
            ],
            createdOn: 0x196abb15ab4,
          },
          "e-13": {
            id: "e-13",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLLING_IN_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_CONTINUOUS_ACTION",
              config: {
                actionListId: "a-12",
                affectedElements: {},
                duration: 0,
              },
            },
            mediaQueries: ["main"],
            target: {
              id: "26dba5f8-d438-81bf-70cd-3f1ed9b78646",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "26dba5f8-d438-81bf-70cd-3f1ed9b78646",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: [
              {
                continuousParameterGroupId: "a-12-p",
                smoothing: 90,
                startsEntering: !0,
                addStartOffset: !1,
                addOffsetValue: 50,
                startsExiting: !1,
                addEndOffset: !1,
                endOffsetValue: 50,
              },
            ],
            createdOn: 0x196abec720b,
          },
          "e-14": {
            id: "e-14",
            name: "",
            animationType: "custom",
            eventTypeId: "PAGE_START",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-13",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-15",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "681c990c592d590a9a535a6d",
              appliesTo: "PAGE",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "681c990c592d590a9a535a6d",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !0,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x196afe93bd0,
          },
          "e-16": {
            id: "e-16",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-14",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-17",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "681f5d6b85b83fc21f977df0|caccad03-ed73-0362-d79e-cf44d6c5f4e7",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "681f5d6b85b83fc21f977df0|caccad03-ed73-0362-d79e-cf44d6c5f4e7",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x196babc8bf4,
          },
          "e-17": {
            id: "e-17",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OUT",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-15",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-16",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "681f5d6b85b83fc21f977df0|caccad03-ed73-0362-d79e-cf44d6c5f4e7",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "681f5d6b85b83fc21f977df0|caccad03-ed73-0362-d79e-cf44d6c5f4e7",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x196babc8bf4,
          },
          "e-18": {
            id: "e-18",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-16",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-19",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "682051f661e4643aadb31bbe|9faff3dc-7cb2-7b1f-79c2-48bf553ce5a5",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "682051f661e4643aadb31bbe|9faff3dc-7cb2-7b1f-79c2-48bf553ce5a5",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x196be61a018,
          },
          "e-19": {
            id: "e-19",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OUT",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-17",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-18",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "682051f661e4643aadb31bbe|9faff3dc-7cb2-7b1f-79c2-48bf553ce5a5",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "682051f661e4643aadb31bbe|9faff3dc-7cb2-7b1f-79c2-48bf553ce5a5",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x196be61a018,
          },
          "e-20": {
            id: "e-20",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-16",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-21",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "682051f661e4643aadb31bbe|d5560bdb-89e4-18d5-c528-2cde56518bde",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "682051f661e4643aadb31bbe|d5560bdb-89e4-18d5-c528-2cde56518bde",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x196be680d43,
          },
          "e-21": {
            id: "e-21",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OUT",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-17",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-20",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "682051f661e4643aadb31bbe|d5560bdb-89e4-18d5-c528-2cde56518bde",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "682051f661e4643aadb31bbe|d5560bdb-89e4-18d5-c528-2cde56518bde",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x196be680d43,
          },
          "e-22": {
            id: "e-22",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-16",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-23",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "6820556b61e4643aadb4c27a|28fb9194-65e8-adc5-7621-0323c5488527",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "6820556b61e4643aadb4c27a|28fb9194-65e8-adc5-7621-0323c5488527",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x196be873d5a,
          },
          "e-23": {
            id: "e-23",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_OUT",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-17",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-22",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "6820556b61e4643aadb4c27a|28fb9194-65e8-adc5-7621-0323c5488527",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "6820556b61e4643aadb4c27a|28fb9194-65e8-adc5-7621-0323c5488527",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x196be873d5a,
          },
          "e-24": {
            id: "e-24",
            name: "",
            animationType: "custom",
            eventTypeId: "PAGE_START",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-18",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-25",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "681f2a6700786ffe998c114b",
              appliesTo: "PAGE",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "681f2a6700786ffe998c114b",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x196bfa120f9,
          },
          "e-28": {
            id: "e-28",
            name: "",
            animationType: "custom",
            eventTypeId: "PAGE_START",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-18",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-29",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "682327492e56da970ce699bc",
              appliesTo: "PAGE",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "682327492e56da970ce699bc",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x196c95e8e1f,
          },
          "e-30": {
            id: "e-30",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_CLICK",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-19",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-31",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".faq-wrap",
              originalId:
                "682327492e56da970ce699bc|8a0fb5d3-f954-cba2-af7c-3813ca2d3f3b",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".faq-wrap",
                originalId:
                  "682327492e56da970ce699bc|8a0fb5d3-f954-cba2-af7c-3813ca2d3f3b",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x196c99670ff,
          },
          "e-31": {
            id: "e-31",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_SECOND_CLICK",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-20",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-30",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".faq-wrap",
              originalId:
                "682327492e56da970ce699bc|8a0fb5d3-f954-cba2-af7c-3813ca2d3f3b",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".faq-wrap",
                originalId:
                  "682327492e56da970ce699bc|8a0fb5d3-f954-cba2-af7c-3813ca2d3f3b",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x196c99670ff,
          },
          "e-32": {
            id: "e-32",
            name: "",
            animationType: "preset",
            eventTypeId: "PAGE_START",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-18",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-33",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "6823bba3052fe8c59e7d7529",
              appliesTo: "PAGE",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "6823bba3052fe8c59e7d7529",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x196cb94fa79,
          },
          "e-34": {
            id: "e-34",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_CLICK",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-21",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-35",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "a65f94ef-cfc5-01ce-3444-2b5889c12ad6",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "a65f94ef-cfc5-01ce-3444-2b5889c12ad6",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x196d38d066f,
          },
          "e-36": {
            id: "e-36",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_CLICK",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-10",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-37",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68149b8e91f5ee32067ccb6c|bc8a60d6-358a-3804-e7d3-68bfc5c97814",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68149b8e91f5ee32067ccb6c|bc8a60d6-358a-3804-e7d3-68bfc5c97814",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x196d3bd0353,
          },
          "e-37": {
            id: "e-37",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_SECOND_CLICK",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-11",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-36",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68149b8e91f5ee32067ccb6c|bc8a60d6-358a-3804-e7d3-68bfc5c97814",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68149b8e91f5ee32067ccb6c|bc8a60d6-358a-3804-e7d3-68bfc5c97814",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x196d3bd0354,
          },
          "e-38": {
            id: "e-38",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_CLICK",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-10",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-39",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "6825f8b9c250452c36fd2e63|9fb427f6-b0ee-8e07-4cfc-ba1779ae2d60",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "6825f8b9c250452c36fd2e63|9fb427f6-b0ee-8e07-4cfc-ba1779ae2d60",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x196d453d21a,
          },
          "e-39": {
            id: "e-39",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_SECOND_CLICK",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-11",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-38",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "6825f8b9c250452c36fd2e63|9fb427f6-b0ee-8e07-4cfc-ba1779ae2d60",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "6825f8b9c250452c36fd2e63|9fb427f6-b0ee-8e07-4cfc-ba1779ae2d60",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x196d453d21a,
          },
          "e-40": {
            id: "e-40",
            name: "",
            animationType: "custom",
            eventTypeId: "PAGE_START",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-22",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-41",
              },
            },
            mediaQueries: ["main", "medium"],
            target: {
              id: "68149b8e91f5ee32067ccb6c",
              appliesTo: "PAGE",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68149b8e91f5ee32067ccb6c",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !0,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x196d4701209,
          },
          "e-42": {
            id: "e-42",
            name: "",
            animationType: "custom",
            eventTypeId: "PAGE_START",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-23",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-43",
              },
            },
            mediaQueries: ["small", "tiny"],
            target: {
              id: "68149b8e91f5ee32067ccb6c",
              appliesTo: "PAGE",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68149b8e91f5ee32067ccb6c",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !0,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x196d4885463,
          },
          "e-44": {
            id: "e-44",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-24",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-45",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68149b8e91f5ee32067ccb6c|d440a80c-da13-da34-1443-565093e8e184",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68149b8e91f5ee32067ccb6c|d440a80c-da13-da34-1443-565093e8e184",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 1747333296e3,
          },
          "e-46": {
            id: "e-46",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-25",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-47",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68149b8e91f5ee32067ccb6c|a29cc051-52c2-f200-0cfd-b60837f2f02c",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68149b8e91f5ee32067ccb6c|a29cc051-52c2-f200-0cfd-b60837f2f02c",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 25,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x196f4516161,
          },
        },
        actionLists: {
          a: {
            id: "a",
            title: "Dropdown [OPEN]",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-n",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: [0.165, 0.84, 0.44, 1],
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".dropdown-list",
                        selectorGuids: ["b4091556-b41f-75ac-4712-b37a6112bd5a"],
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                  {
                    id: "a-n-3",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: [0.165, 0.84, 0.44, 1],
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".dropdown-icon",
                        selectorGuids: ["2a228d96-8f44-39d1-a826-165cddcce636"],
                      },
                      value: 0.16,
                      unit: "",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-n-2",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: [0.165, 0.84, 0.44, 1],
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".dropdown-list",
                        selectorGuids: ["b4091556-b41f-75ac-4712-b37a6112bd5a"],
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                  {
                    id: "a-n-4",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: [0.165, 0.84, 0.44, 1],
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".dropdown-icon",
                        selectorGuids: ["2a228d96-8f44-39d1-a826-165cddcce636"],
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x196aa4699fd,
          },
          "a-2": {
            id: "a-2",
            title: "Dropdown [CLOSE]",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-2-n",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: [0.165, 0.84, 0.44, 1],
                      duration: 400,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".dropdown-list",
                        selectorGuids: ["b4091556-b41f-75ac-4712-b37a6112bd5a"],
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                  {
                    id: "a-2-n-2",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: [0.165, 0.84, 0.44, 1],
                      duration: 400,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".dropdown-icon",
                        selectorGuids: ["2a228d96-8f44-39d1-a826-165cddcce636"],
                      },
                      value: 0.16,
                      unit: "",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x196aa4699fd,
          },
          "a-5": {
            id: "a-5",
            title: "Navbar [OPEN]",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-5-n",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: [0.165, 0.84, 0.44, 1],
                      duration: 350,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".menu-line._1",
                        selectorGuids: [
                          "2637ba55-e9ce-8d93-5473-714251ffc903",
                          "77ec3036-4d71-4b84-6db1-dff11955e8bb",
                        ],
                      },
                      yValue: 4,
                      xUnit: "PX",
                      yUnit: "px",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-5-n-2",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: [0.165, 0.84, 0.44, 1],
                      duration: 350,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".menu-line._2",
                        selectorGuids: [
                          "2637ba55-e9ce-8d93-5473-714251ffc903",
                          "8750f1f3-85fc-3420-156f-203bffcf4067",
                        ],
                      },
                      yValue: -3.5,
                      xUnit: "PX",
                      yUnit: "px",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-5-n-5",
                    actionTypeId: "STYLE_BACKGROUND_COLOR",
                    config: {
                      delay: 0,
                      easing: [0.165, 0.84, 0.44, 1],
                      duration: 350,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".nav-menu-wrapper",
                        selectorGuids: ["7e541b9c-3014-9602-4e80-3b596c22ec96"],
                      },
                      globalSwatchId: "--dark-blue",
                      rValue: 0,
                      bValue: 20,
                      gValue: 0,
                      aValue: 1,
                    },
                  },
                  {
                    id: "a-5-n-6",
                    actionTypeId: "STYLE_BACKGROUND_COLOR",
                    config: {
                      delay: 0,
                      easing: [0.165, 0.84, 0.44, 1],
                      duration: 350,
                      target: {
                        useEventTarget: !0,
                        id: "0a3577fa-d6ce-b724-8221-186f7195a379",
                      },
                      globalSwatchId: "--black",
                      rValue: 22,
                      bValue: 22,
                      gValue: 22,
                      aValue: 1,
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-5-n-3",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: [0.165, 0.84, 0.44, 1],
                      duration: 350,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".menu-line._1",
                        selectorGuids: [
                          "2637ba55-e9ce-8d93-5473-714251ffc903",
                          "77ec3036-4d71-4b84-6db1-dff11955e8bb",
                        ],
                      },
                      zValue: 45,
                      xUnit: "DEG",
                      yUnit: "DEG",
                      zUnit: "deg",
                    },
                  },
                  {
                    id: "a-5-n-4",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: [0.165, 0.84, 0.44, 1],
                      duration: 350,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".menu-line._2",
                        selectorGuids: [
                          "2637ba55-e9ce-8d93-5473-714251ffc903",
                          "8750f1f3-85fc-3420-156f-203bffcf4067",
                        ],
                      },
                      zValue: -45,
                      xUnit: "DEG",
                      yUnit: "DEG",
                      zUnit: "deg",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x196aa6b9b1a,
          },
          "a-6": {
            id: "a-6",
            title: "Navbar [CLOSE]",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-6-n-3",
                    actionTypeId: "STYLE_BACKGROUND_COLOR",
                    config: {
                      delay: 0,
                      easing: [0.165, 0.84, 0.44, 1],
                      duration: 350,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".nav-menu-wrapper",
                        selectorGuids: ["7e541b9c-3014-9602-4e80-3b596c22ec96"],
                      },
                      globalSwatchId: "--black",
                      rValue: 22,
                      bValue: 22,
                      gValue: 22,
                      aValue: 1,
                    },
                  },
                  {
                    id: "a-6-n-4",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: [0.165, 0.84, 0.44, 1],
                      duration: 350,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".menu-line._1",
                        selectorGuids: [
                          "2637ba55-e9ce-8d93-5473-714251ffc903",
                          "77ec3036-4d71-4b84-6db1-dff11955e8bb",
                        ],
                      },
                      zValue: 0,
                      xUnit: "DEG",
                      yUnit: "DEG",
                      zUnit: "deg",
                    },
                  },
                  {
                    id: "a-6-n-5",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: [0.165, 0.84, 0.44, 1],
                      duration: 350,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".menu-line._2",
                        selectorGuids: [
                          "2637ba55-e9ce-8d93-5473-714251ffc903",
                          "8750f1f3-85fc-3420-156f-203bffcf4067",
                        ],
                      },
                      zValue: 0,
                      xUnit: "DEG",
                      yUnit: "DEG",
                      zUnit: "deg",
                    },
                  },
                  {
                    id: "a-6-n-6",
                    actionTypeId: "STYLE_BACKGROUND_COLOR",
                    config: {
                      delay: 0,
                      easing: [0.165, 0.84, 0.44, 1],
                      duration: 350,
                      target: {
                        useEventTarget: !0,
                        id: "0a3577fa-d6ce-b724-8221-186f7195a379",
                      },
                      globalSwatchId: "",
                      rValue: 22,
                      bValue: 22,
                      gValue: 22,
                      aValue: 0,
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-6-n",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: [0.165, 0.84, 0.44, 1],
                      duration: 350,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".menu-line._1",
                        selectorGuids: [
                          "2637ba55-e9ce-8d93-5473-714251ffc903",
                          "77ec3036-4d71-4b84-6db1-dff11955e8bb",
                        ],
                      },
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "px",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-6-n-2",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: [0.165, 0.84, 0.44, 1],
                      duration: 350,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".menu-line._2",
                        selectorGuids: [
                          "2637ba55-e9ce-8d93-5473-714251ffc903",
                          "8750f1f3-85fc-3420-156f-203bffcf4067",
                        ],
                      },
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "px",
                      zUnit: "PX",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x196aa6b9b1a,
          },
          "a-3": {
            id: "a-3",
            title: "Dropdown [OPEN-MOBILE]",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-3-n",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: [0.165, 0.84, 0.44, 1],
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".dropdown-list",
                        selectorGuids: ["b4091556-b41f-75ac-4712-b37a6112bd5a"],
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                  {
                    id: "a-3-n-4",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".nav-menu-item-icon",
                        selectorGuids: ["8356070d-b52e-2a8e-d4b9-7ae99f09c4ea"],
                      },
                      zValue: 0,
                      xUnit: "DEG",
                      yUnit: "DEG",
                      zUnit: "deg",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-3-n-3",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: [0.165, 0.84, 0.44, 1],
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".dropdown-list",
                        selectorGuids: ["b4091556-b41f-75ac-4712-b37a6112bd5a"],
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                  {
                    id: "a-3-n-5",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: [0.165, 0.84, 0.44, 1],
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".nav-menu-item-icon",
                        selectorGuids: ["8356070d-b52e-2a8e-d4b9-7ae99f09c4ea"],
                      },
                      zValue: -145,
                      xUnit: "DEG",
                      yUnit: "DEG",
                      zUnit: "deg",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x196aa4699fd,
          },
          "a-4": {
            id: "a-4",
            title: "Dropdown [CLOSE-MOBILE]",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-4-n-3",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: [0.165, 0.84, 0.44, 1],
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".dropdown-list",
                        selectorGuids: ["b4091556-b41f-75ac-4712-b37a6112bd5a"],
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                  {
                    id: "a-4-n-4",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: [0.165, 0.84, 0.44, 1],
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".nav-menu-item-icon",
                        selectorGuids: ["8356070d-b52e-2a8e-d4b9-7ae99f09c4ea"],
                      },
                      zValue: 0,
                      xUnit: "DEG",
                      yUnit: "DEG",
                      zUnit: "deg",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x196aa4699fd,
          },
          "a-7": {
            id: "a-7",
            title: "Scroll [LINE]",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-7-n",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: [0.165, 0.84, 0.44, 1],
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".scroll-progress-line",
                        selectorGuids: ["3a96a880-0252-76ce-47ae-3b3fbdfd7187"],
                      },
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-7-n-2",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "inOutQuint",
                      duration: 2200,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".scroll-progress-line",
                        selectorGuids: ["3a96a880-0252-76ce-47ae-3b3fbdfd7187"],
                      },
                      yValue: 500,
                      xUnit: "PX",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-7-n-3",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "inOutQuint",
                      duration: 0,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".scroll-progress-line",
                        selectorGuids: ["3a96a880-0252-76ce-47ae-3b3fbdfd7187"],
                      },
                      yValue: -100,
                      xUnit: "PX",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-7-n-4",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "inOutSine",
                      duration: 800,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".scroll-progress-line",
                        selectorGuids: ["3a96a880-0252-76ce-47ae-3b3fbdfd7187"],
                      },
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x196ab3396bf,
          },
          "a-8": {
            id: "a-8",
            title: "Stacking scroll",
            continuousParameterGroups: [
              {
                id: "a-8-p",
                type: "SCROLL_PROGRESS",
                parameterLabel: "Scroll",
                continuousActionGroups: [
                  {
                    keyframe: 62,
                    actionItems: [
                      {
                        id: "a-8-n",
                        actionTypeId: "STYLE_OPACITY",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".comparison-headline-wrap",
                            selectorGuids: [
                              "9e282ecc-adcf-7253-a231-4bdf25c866a8",
                            ],
                          },
                          value: 1,
                          unit: "",
                        },
                      },
                    ],
                  },
                  {
                    keyframe: 67,
                    actionItems: [
                      {
                        id: "a-8-n-2",
                        actionTypeId: "STYLE_OPACITY",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".comparison-headline-wrap",
                            selectorGuids: [
                              "9e282ecc-adcf-7253-a231-4bdf25c866a8",
                            ],
                          },
                          value: 0,
                          unit: "",
                        },
                      },
                    ],
                  },
                ],
              },
            ],
            createdOn: 0x196ab9e857a,
          },
          "a-9": {
            id: "a-9",
            title: "Cards [SCROLL]",
            continuousParameterGroups: [
              {
                id: "a-9-p",
                type: "SCROLL_PROGRESS",
                parameterLabel: "Scroll",
                continuousActionGroups: [
                  {
                    keyframe: 0,
                    actionItems: [
                      {
                        id: "a-9-n",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".card-box.purple-border",
                            selectorGuids: [
                              "811a8bc9-5773-4693-7cb8-1a5cf135eae2",
                              "99b24077-d732-2b76-61df-0baebd488752",
                            ],
                          },
                          yValue: 5.3125,
                          xUnit: "PX",
                          yUnit: "rem",
                          zUnit: "PX",
                        },
                      },
                      {
                        id: "a-9-n-3",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".card-box.green-border",
                            selectorGuids: [
                              "811a8bc9-5773-4693-7cb8-1a5cf135eae2",
                              "0b25ea4e-4b91-e789-77f5-5e85fa7a1b63",
                            ],
                          },
                          yValue: -5.3125,
                          xUnit: "PX",
                          yUnit: "rem",
                          zUnit: "PX",
                        },
                      },
                      {
                        id: "a-9-n-4",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".card-box.pink-border",
                            selectorGuids: [
                              "811a8bc9-5773-4693-7cb8-1a5cf135eae2",
                              "682a1b73-ff9f-a834-740c-bb49a1753390",
                            ],
                          },
                          yValue: 5.3125,
                          xUnit: "PX",
                          yUnit: "rem",
                          zUnit: "PX",
                        },
                      },
                      {
                        id: "a-9-n-5",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".card-box.blue-border",
                            selectorGuids: [
                              "811a8bc9-5773-4693-7cb8-1a5cf135eae2",
                              "af75c823-98ea-892b-bd5b-4af5493ee666",
                            ],
                          },
                          yValue: -5.3125,
                          xUnit: "PX",
                          yUnit: "rem",
                          zUnit: "PX",
                        },
                      },
                    ],
                  },
                  {
                    keyframe: 40,
                    actionItems: [
                      {
                        id: "a-9-n-6",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".card-box.purple-border",
                            selectorGuids: [
                              "811a8bc9-5773-4693-7cb8-1a5cf135eae2",
                              "99b24077-d732-2b76-61df-0baebd488752",
                            ],
                          },
                          yValue: 0,
                          xUnit: "PX",
                          yUnit: "rem",
                          zUnit: "PX",
                        },
                      },
                      {
                        id: "a-9-n-7",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".card-box.green-border",
                            selectorGuids: [
                              "811a8bc9-5773-4693-7cb8-1a5cf135eae2",
                              "0b25ea4e-4b91-e789-77f5-5e85fa7a1b63",
                            ],
                          },
                          yValue: 0,
                          xUnit: "PX",
                          yUnit: "rem",
                          zUnit: "PX",
                        },
                      },
                      {
                        id: "a-9-n-8",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".card-box.pink-border",
                            selectorGuids: [
                              "811a8bc9-5773-4693-7cb8-1a5cf135eae2",
                              "682a1b73-ff9f-a834-740c-bb49a1753390",
                            ],
                          },
                          yValue: 0,
                          xUnit: "PX",
                          yUnit: "rem",
                          zUnit: "PX",
                        },
                      },
                      {
                        id: "a-9-n-9",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".card-box.blue-border",
                            selectorGuids: [
                              "811a8bc9-5773-4693-7cb8-1a5cf135eae2",
                              "af75c823-98ea-892b-bd5b-4af5493ee666",
                            ],
                          },
                          yValue: 0,
                          xUnit: "PX",
                          yUnit: "rem",
                          zUnit: "PX",
                        },
                      },
                    ],
                  },
                ],
              },
            ],
            createdOn: 0x196abb17f9c,
          },
          "a-12": {
            id: "a-12",
            title: "Footer [SCROLL]",
            continuousParameterGroups: [
              {
                id: "a-12-p",
                type: "SCROLL_PROGRESS",
                parameterLabel: "Scroll",
                continuousActionGroups: [
                  {
                    keyframe: 20,
                    actionItems: [
                      {
                        id: "a-12-n",
                        actionTypeId: "STYLE_FILTER",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: !0,
                            id: "26dba5f8-d438-81bf-70cd-3f1ed9b78646",
                          },
                          filters: [
                            {
                              type: "blur",
                              filterId: "e814",
                              value: 5,
                              unit: "px",
                            },
                          ],
                        },
                      },
                    ],
                  },
                  {
                    keyframe: 35,
                    actionItems: [
                      {
                        id: "a-12-n-3",
                        actionTypeId: "STYLE_FILTER",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: !0,
                            id: "26dba5f8-d438-81bf-70cd-3f1ed9b78646",
                          },
                          filters: [
                            {
                              type: "blur",
                              filterId: "e814",
                              value: 0,
                              unit: "px",
                            },
                          ],
                        },
                      },
                    ],
                  },
                ],
              },
            ],
            createdOn: 0x196abec910f,
          },
          "a-13": {
            id: "a-13",
            title: "Stars [ROTATE]",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-13-n",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 35e3,
                      target: {
                        selector: ".star-svg",
                        selectorGuids: ["aba47fb7-6bc6-74f7-f0bb-4829a0bdfc74"],
                      },
                      zValue: 0,
                      xUnit: "DEG",
                      yUnit: "DEG",
                      zUnit: "deg",
                    },
                  },
                  {
                    id: "a-13-n-2",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 35e3,
                      target: {
                        selector: ".star-svg._2",
                        selectorGuids: [
                          "aba47fb7-6bc6-74f7-f0bb-4829a0bdfc74",
                          "8d14c3fa-40d8-42ad-33c1-2984e2cc92bf",
                        ],
                      },
                      zValue: 0,
                      xUnit: "DEG",
                      yUnit: "DEG",
                      zUnit: "deg",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-13-n-3",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 35e3,
                      target: {
                        selector: ".star-svg",
                        selectorGuids: ["aba47fb7-6bc6-74f7-f0bb-4829a0bdfc74"],
                      },
                      zValue: 360,
                      xUnit: "DEG",
                      yUnit: "DEG",
                      zUnit: "deg",
                    },
                  },
                  {
                    id: "a-13-n-4",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 35e3,
                      target: {
                        selector: ".star-svg._2",
                        selectorGuids: [
                          "aba47fb7-6bc6-74f7-f0bb-4829a0bdfc74",
                          "8d14c3fa-40d8-42ad-33c1-2984e2cc92bf",
                        ],
                      },
                      zValue: -360,
                      xUnit: "DEG",
                      yUnit: "DEG",
                      zUnit: "deg",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x196afe94cb9,
          },
          "a-14": {
            id: "a-14",
            title: "Press [HOVER]",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-14-n",
                    actionTypeId: "STYLE_BACKGROUND_COLOR",
                    config: {
                      delay: 0,
                      easing: [0.165, 0.84, 0.44, 1],
                      duration: 350,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".news-arrow-wrap",
                        selectorGuids: ["1669e3cc-9f68-f059-4820-8e4262ce1e38"],
                      },
                      globalSwatchId: "--blue-medium",
                      rValue: 65,
                      bValue: 252,
                      gValue: 65,
                      aValue: 1,
                    },
                  },
                  {
                    id: "a-14-n-2",
                    actionTypeId: "STYLE_TEXT_COLOR",
                    config: {
                      delay: 0,
                      easing: [0.165, 0.84, 0.44, 1],
                      duration: 350,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".news-arrow-wrap",
                        selectorGuids: ["1669e3cc-9f68-f059-4820-8e4262ce1e38"],
                      },
                      globalSwatchId: "--white",
                      rValue: 255,
                      bValue: 255,
                      gValue: 255,
                      aValue: 1,
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x196babc9729,
          },
          "a-15": {
            id: "a-15",
            title: "Press [HOVER-OUT]",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-15-n",
                    actionTypeId: "STYLE_BACKGROUND_COLOR",
                    config: {
                      delay: 0,
                      easing: [0.165, 0.84, 0.44, 1],
                      duration: 350,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".news-arrow-wrap",
                        selectorGuids: ["1669e3cc-9f68-f059-4820-8e4262ce1e38"],
                      },
                      globalSwatchId: "",
                      rValue: 65,
                      bValue: 252,
                      gValue: 65,
                      aValue: 0,
                    },
                  },
                  {
                    id: "a-15-n-2",
                    actionTypeId: "STYLE_TEXT_COLOR",
                    config: {
                      delay: 0,
                      easing: [0.165, 0.84, 0.44, 1],
                      duration: 350,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".news-arrow-wrap",
                        selectorGuids: ["1669e3cc-9f68-f059-4820-8e4262ce1e38"],
                      },
                      globalSwatchId: "--blue-medium",
                      rValue: 65,
                      bValue: 252,
                      gValue: 65,
                      aValue: 1,
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x196babc9729,
          },
          "a-16": {
            id: "a-16",
            title: "Blog [HOVER]",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-16-n",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: [0.165, 0.84, 0.44, 1],
                      duration: 900,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".blog-img",
                        selectorGuids: ["fa9c3aaf-7244-2b15-429f-598ec5850c1a"],
                      },
                      xValue: 1.05,
                      yValue: 1.05,
                      locked: !0,
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x196be61aa20,
          },
          "a-17": {
            id: "a-17",
            title: "Blog [HOVER-OUT]",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-17-n",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: [0.165, 0.84, 0.44, 1],
                      duration: 800,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".blog-img",
                        selectorGuids: ["fa9c3aaf-7244-2b15-429f-598ec5850c1a"],
                      },
                      xValue: 1,
                      yValue: 1,
                      locked: !0,
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x196be61aa20,
          },
          "a-18": {
            id: "a-18",
            title: "Header image [opacity]",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-18-n",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "easeOut",
                      duration: 1e3,
                      target: {
                        selector: ".u-img-cover",
                        selectorGuids: ["c90f4032-6e6b-69d2-3102-53f8e1d0f1ac"],
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-18-n-2",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "easeOut",
                      duration: 1e3,
                      target: {
                        selector: ".u-img-cover",
                        selectorGuids: ["c90f4032-6e6b-69d2-3102-53f8e1d0f1ac"],
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x196bf9ffa11,
          },
          "a-19": {
            id: "a-19",
            title: "FAQ [OPEN]",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-19-n",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".faq-bottom",
                        selectorGuids: ["755ef8d3-92c8-2397-896a-db62421946e1"],
                      },
                      heightValue: 0,
                      widthUnit: "PX",
                      heightUnit: "px",
                      locked: !1,
                    },
                  },
                  {
                    id: "a-19-n-4",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".faq-line.tilted",
                        selectorGuids: [
                          "2321d196-dec0-70c7-5df5-65df5fb9adc8",
                          "1a6175a8-b631-57c7-63cd-3cb820eed9fa",
                        ],
                      },
                      zValue: 90,
                      xUnit: "DEG",
                      yUnit: "DEG",
                      zUnit: "deg",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-19-n-2",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".faq-bottom",
                        selectorGuids: ["755ef8d3-92c8-2397-896a-db62421946e1"],
                      },
                      widthUnit: "PX",
                      heightUnit: "AUTO",
                      locked: !1,
                    },
                  },
                  {
                    id: "a-19-n-3",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".faq-line.tilted",
                        selectorGuids: [
                          "2321d196-dec0-70c7-5df5-65df5fb9adc8",
                          "1a6175a8-b631-57c7-63cd-3cb820eed9fa",
                        ],
                      },
                      zValue: 0,
                      xUnit: "DEG",
                      yUnit: "DEG",
                      zUnit: "deg",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x196c996804e,
          },
          "a-20": {
            id: "a-20",
            title: "FAQ [CLOSE]",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-20-n-2",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".faq-line.tilted",
                        selectorGuids: [
                          "2321d196-dec0-70c7-5df5-65df5fb9adc8",
                          "1a6175a8-b631-57c7-63cd-3cb820eed9fa",
                        ],
                      },
                      zValue: 90,
                      xUnit: "DEG",
                      yUnit: "DEG",
                      zUnit: "deg",
                    },
                  },
                  {
                    id: "a-20-n",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".faq-bottom",
                        selectorGuids: ["755ef8d3-92c8-2397-896a-db62421946e1"],
                      },
                      heightValue: 0,
                      widthUnit: "PX",
                      heightUnit: "px",
                      locked: !1,
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x196c996804e,
          },
          "a-21": {
            id: "a-21",
            title: "Show form",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-21-n",
                    actionTypeId: "GENERAL_DISPLAY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".newsletter-form",
                        selectorGuids: ["633142cb-63dc-742b-bd9d-9c1455a7cd7a"],
                      },
                      value: "none",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-21-n-2",
                    actionTypeId: "GENERAL_DISPLAY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".newsletter-form",
                        selectorGuids: ["633142cb-63dc-742b-bd9d-9c1455a7cd7a"],
                      },
                      value: "flex",
                    },
                  },
                  {
                    id: "a-21-n-3",
                    actionTypeId: "GENERAL_DISPLAY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".showform-btn",
                        selectorGuids: ["23d7abbb-7d83-cc3f-1ecc-f96f7f7f30d2"],
                      },
                      value: "none",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x196d38d0f7a,
          },
          "a-10": {
            id: "a-10",
            title: "Extra Buttons [SHOW]",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-10-n-2",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "easeOut",
                      duration: 500,
                      target: {
                        selector: ".extra-buttons-wrap",
                        selectorGuids: ["be68dba1-8499-58bb-3826-430d4672513d"],
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                  {
                    id: "a-10-n-4",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 0,
                      easing: "easeOut",
                      duration: 500,
                      target: {
                        selector: ".extra-buttons-wrap",
                        selectorGuids: ["be68dba1-8499-58bb-3826-430d4672513d"],
                      },
                      heightValue: 0,
                      widthUnit: "PX",
                      heightUnit: "px",
                      locked: !1,
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-10-n-3",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: [0.165, 0.84, 0.44, 1],
                      duration: 500,
                      target: {
                        selector: ".extra-buttons-wrap",
                        selectorGuids: ["be68dba1-8499-58bb-3826-430d4672513d"],
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                  {
                    id: "a-10-n-5",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 0,
                      easing: [0.165, 0.84, 0.44, 1],
                      duration: 500,
                      target: {
                        selector: ".extra-buttons-wrap",
                        selectorGuids: ["be68dba1-8499-58bb-3826-430d4672513d"],
                      },
                      widthUnit: "PX",
                      heightUnit: "AUTO",
                      locked: !1,
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x196abc5ecd0,
          },
          "a-11": {
            id: "a-11",
            title: "Extra Buttons [HIDE]",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-11-n-3",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: [0.165, 0.84, 0.44, 1],
                      duration: 500,
                      target: {
                        selector: ".extra-buttons-wrap",
                        selectorGuids: ["be68dba1-8499-58bb-3826-430d4672513d"],
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                  {
                    id: "a-11-n-4",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 0,
                      easing: [0.165, 0.84, 0.44, 1],
                      duration: 500,
                      target: {
                        selector: ".extra-buttons-wrap",
                        selectorGuids: ["be68dba1-8499-58bb-3826-430d4672513d"],
                      },
                      heightValue: 0,
                      widthUnit: "PX",
                      heightUnit: "px",
                      locked: !1,
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x196abc5ecd0,
          },
          "a-22": {
            id: "a-22",
            title: "Text Rolling [Desktop]",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-22-n-3",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        selector: ".mover",
                        selectorGuids: ["442d0315-d725-d6ff-c77c-49045b656b79"],
                      },
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "rem",
                      zUnit: "PX",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-22-n-4",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 2e3,
                      easing: "",
                      duration: 1e3,
                      target: {
                        selector: ".mover",
                        selectorGuids: ["442d0315-d725-d6ff-c77c-49045b656b79"],
                      },
                      yValue: -4,
                      xUnit: "PX",
                      yUnit: "rem",
                      zUnit: "PX",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-22-n-6",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 2e3,
                      easing: "",
                      duration: 1e3,
                      target: {
                        selector: ".mover",
                        selectorGuids: ["442d0315-d725-d6ff-c77c-49045b656b79"],
                      },
                      yValue: -8,
                      xUnit: "PX",
                      yUnit: "rem",
                      zUnit: "PX",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-22-n-5",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        selector: ".mover",
                        selectorGuids: ["442d0315-d725-d6ff-c77c-49045b656b79"],
                      },
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "rem",
                      zUnit: "PX",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x196d4701e60,
          },
          "a-23": {
            id: "a-23",
            title: "Text Rolling [Mobile]",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-23-n",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        selector: ".mover",
                        selectorGuids: ["442d0315-d725-d6ff-c77c-49045b656b79"],
                      },
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "rem",
                      zUnit: "PX",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-23-n-2",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 2e3,
                      easing: "",
                      duration: 1e3,
                      target: {
                        selector: ".mover",
                        selectorGuids: ["442d0315-d725-d6ff-c77c-49045b656b79"],
                      },
                      yValue: -2.2,
                      xUnit: "PX",
                      yUnit: "rem",
                      zUnit: "PX",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-23-n-3",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 2e3,
                      easing: "",
                      duration: 1e3,
                      target: {
                        selector: ".mover",
                        selectorGuids: ["442d0315-d725-d6ff-c77c-49045b656b79"],
                      },
                      yValue: -4.4,
                      xUnit: "PX",
                      yUnit: "rem",
                      zUnit: "PX",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-23-n-4",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        selector: ".mover",
                        selectorGuids: ["442d0315-d725-d6ff-c77c-49045b656b79"],
                      },
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "rem",
                      zUnit: "PX",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x196d4701e60,
          },
          "a-24": {
            id: "a-24",
            title: "Lottie [VIEW]",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-24-n",
                    actionTypeId: "PLUGIN_LOTTIE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".lottie-animation._1",
                        selectorGuids: [
                          "a41c701d-329a-c395-bbac-9a10b61b2df1",
                          "ed4c9742-d0f1-8371-fb9a-58a4a382724f",
                        ],
                      },
                      value: 0,
                    },
                  },
                  {
                    id: "a-24-n-2",
                    actionTypeId: "PLUGIN_LOTTIE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".lottie-animation._2",
                        selectorGuids: [
                          "a41c701d-329a-c395-bbac-9a10b61b2df1",
                          "4c704897-43d2-66a1-e1cf-120440c0a4bb",
                        ],
                      },
                      value: 0,
                    },
                  },
                  {
                    id: "a-24-n-3",
                    actionTypeId: "PLUGIN_LOTTIE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".lottie-animation._3",
                        selectorGuids: [
                          "a41c701d-329a-c395-bbac-9a10b61b2df1",
                          "b6c3cfc6-ea6e-b982-7ed3-4d20c925aa10",
                        ],
                      },
                      value: 0,
                    },
                  },
                  {
                    id: "a-24-n-4",
                    actionTypeId: "PLUGIN_LOTTIE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".lottie-animation._4",
                        selectorGuids: [
                          "a41c701d-329a-c395-bbac-9a10b61b2df1",
                          "af1003e0-dce4-ba30-44b6-b25c3c1ba8c7",
                        ],
                      },
                      value: 0,
                    },
                  },
                  {
                    id: "a-24-n-5",
                    actionTypeId: "PLUGIN_LOTTIE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".lottie-animation._5",
                        selectorGuids: [
                          "a41c701d-329a-c395-bbac-9a10b61b2df1",
                          "3dbc1d03-4d21-b9e1-bd73-4feec9dedb5e",
                        ],
                      },
                      value: 0,
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-24-n-6",
                    actionTypeId: "PLUGIN_LOTTIE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 3e3,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".lottie-animation._1",
                        selectorGuids: [
                          "a41c701d-329a-c395-bbac-9a10b61b2df1",
                          "ed4c9742-d0f1-8371-fb9a-58a4a382724f",
                        ],
                      },
                      value: 100,
                    },
                  },
                  {
                    id: "a-24-n-7",
                    actionTypeId: "PLUGIN_LOTTIE",
                    config: {
                      delay: 400,
                      easing: "",
                      duration: 3e3,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".lottie-animation._2",
                        selectorGuids: [
                          "a41c701d-329a-c395-bbac-9a10b61b2df1",
                          "4c704897-43d2-66a1-e1cf-120440c0a4bb",
                        ],
                      },
                      value: 100,
                    },
                  },
                  {
                    id: "a-24-n-8",
                    actionTypeId: "PLUGIN_LOTTIE",
                    config: {
                      delay: 800,
                      easing: "",
                      duration: 3e3,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".lottie-animation._3",
                        selectorGuids: [
                          "a41c701d-329a-c395-bbac-9a10b61b2df1",
                          "b6c3cfc6-ea6e-b982-7ed3-4d20c925aa10",
                        ],
                      },
                      value: 100,
                    },
                  },
                  {
                    id: "a-24-n-9",
                    actionTypeId: "PLUGIN_LOTTIE",
                    config: {
                      delay: 1200,
                      easing: "",
                      duration: 3e3,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".lottie-animation._4",
                        selectorGuids: [
                          "a41c701d-329a-c395-bbac-9a10b61b2df1",
                          "af1003e0-dce4-ba30-44b6-b25c3c1ba8c7",
                        ],
                      },
                      value: 100,
                    },
                  },
                  {
                    id: "a-24-n-10",
                    actionTypeId: "PLUGIN_LOTTIE",
                    config: {
                      delay: 1600,
                      easing: "",
                      duration: 3e3,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".lottie-animation._5",
                        selectorGuids: [
                          "a41c701d-329a-c395-bbac-9a10b61b2df1",
                          "3dbc1d03-4d21-b9e1-bd73-4feec9dedb5e",
                        ],
                      },
                      value: 100,
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x196d52e475e,
          },
          "a-25": {
            id: "a-25",
            title: "Lottie [VIEW-2]",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-25-n",
                    actionTypeId: "PLUGIN_LOTTIE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".lottie-animation-data",
                        selectorGuids: ["93b5c77c-774f-c93b-f25c-85c1ac26d632"],
                      },
                      value: 0,
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-25-n-6",
                    actionTypeId: "PLUGIN_LOTTIE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 3e3,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".lottie-animation-data",
                        selectorGuids: ["93b5c77c-774f-c93b-f25c-85c1ac26d632"],
                      },
                      value: 100,
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x196d52e475e,
          },
        },
        site: {
          mediaQueries: [
            { key: "main", min: 992, max: 1e4 },
            { key: "medium", min: 768, max: 991 },
            { key: "small", min: 480, max: 767 },
            { key: "tiny", min: 0, max: 479 },
          ],
        },
      });
    },
  },
]);
