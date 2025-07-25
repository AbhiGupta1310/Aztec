"use strict";
(self.webpackChunk = self.webpackChunk || []).push([
  ["577"],
  {
    9904: function () {
      !(function () {
        if ("undefined" == typeof window) return;
        let e = window.navigator.userAgent.match(/Edge\/(\d{2})\./),
          t = !!e && parseInt(e[1], 10) >= 16;
        if ("objectFit" in document.documentElement.style != !1 && !t) {
          window.objectFitPolyfill = function () {
            return !1;
          };
          return;
        }
        let n = function (e) {
            let t = window.getComputedStyle(e, null),
              n = t.getPropertyValue("position"),
              i = t.getPropertyValue("overflow"),
              o = t.getPropertyValue("display");
            (n && "static" !== n) || (e.style.position = "relative"),
              "hidden" !== i && (e.style.overflow = "hidden"),
              (o && "inline" !== o) || (e.style.display = "block"),
              0 === e.clientHeight && (e.style.height = "100%"),
              -1 === e.className.indexOf("object-fit-polyfill") &&
                (e.className += " object-fit-polyfill");
          },
          i = function (e) {
            let t = window.getComputedStyle(e, null),
              n = {
                "max-width": "none",
                "max-height": "none",
                "min-width": "0px",
                "min-height": "0px",
                top: "auto",
                right: "auto",
                bottom: "auto",
                left: "auto",
                "margin-top": "0px",
                "margin-right": "0px",
                "margin-bottom": "0px",
                "margin-left": "0px",
              };
            for (let i in n)
              t.getPropertyValue(i) !== n[i] && (e.style[i] = n[i]);
          },
          o = function (e) {
            let t = e.parentNode;
            n(t),
              i(e),
              (e.style.position = "absolute"),
              (e.style.height = "100%"),
              (e.style.width = "auto"),
              e.clientWidth > t.clientWidth
                ? ((e.style.top = "0"),
                  (e.style.marginTop = "0"),
                  (e.style.left = "50%"),
                  (e.style.marginLeft = -(e.clientWidth / 2) + "px"))
                : ((e.style.width = "100%"),
                  (e.style.height = "auto"),
                  (e.style.left = "0"),
                  (e.style.marginLeft = "0"),
                  (e.style.top = "50%"),
                  (e.style.marginTop = -(e.clientHeight / 2) + "px"));
          },
          l = function (e) {
            if (void 0 === e || e instanceof Event)
              e = document.querySelectorAll("[data-object-fit]");
            else if (e && e.nodeName) e = [e];
            else if ("object" != typeof e || !e.length || !e[0].nodeName)
              return !1;
            for (let n = 0; n < e.length; n++) {
              if (!e[n].nodeName) continue;
              let i = e[n].nodeName.toLowerCase();
              if ("img" === i) {
                if (t) continue;
                e[n].complete
                  ? o(e[n])
                  : e[n].addEventListener("load", function () {
                      o(this);
                    });
              } else
                "video" === i
                  ? e[n].readyState > 0
                    ? o(e[n])
                    : e[n].addEventListener("loadedmetadata", function () {
                        o(this);
                      })
                  : o(e[n]);
            }
            return !0;
          };
        "loading" === document.readyState
          ? document.addEventListener("DOMContentLoaded", l)
          : l(),
          window.addEventListener("resize", l),
          (window.objectFitPolyfill = l);
      })();
    },
    1724: function () {
      function e(e) {
        Webflow.env("design") ||
          ($("video").each(function () {
            e && $(this).prop("autoplay") ? this.play() : this.pause();
          }),
          $(".w-background-video--control").each(function () {
            e ? n($(this)) : t($(this));
          }));
      }
      function t(e) {
        e.find("> span").each(function (e) {
          $(this).prop("hidden", () => 0 === e);
        });
      }
      function n(e) {
        e.find("> span").each(function (e) {
          $(this).prop("hidden", () => 1 === e);
        });
      }
      "undefined" != typeof window &&
        $(document).ready(() => {
          let i = window.matchMedia("(prefers-reduced-motion: reduce)");
          i.addEventListener("change", (t) => {
            e(!t.matches);
          }),
            i.matches && e(!1),
            $("video:not([autoplay])").each(function () {
              $(this)
                .parent()
                .find(".w-background-video--control")
                .each(function () {
                  t($(this));
                });
            }),
            $(document).on(
              "click",
              ".w-background-video--control",
              function (e) {
                if (Webflow.env("design")) return;
                let i = $(e.currentTarget),
                  o = $(`video#${i.attr("aria-controls")}`).get(0);
                if (o)
                  if (o.paused) {
                    let e = o.play();
                    n(i),
                      e &&
                        "function" == typeof e.catch &&
                        e.catch(() => {
                          t(i);
                        });
                  } else o.pause(), t(i);
              }
            );
        });
    },
  },
]);
