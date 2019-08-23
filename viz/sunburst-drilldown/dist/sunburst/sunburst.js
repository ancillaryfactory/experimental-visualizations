!(function(t) {
  var n = {};
  function e(r) {
    if (n[r]) return n[r].exports;
    var i = (n[r] = {i: r, l: !1, exports: {}});
    return t[r].call(i.exports, i, i.exports, e), (i.l = !0), i.exports;
  }
  (e.m = t),
    (e.c = n),
    (e.d = function(t, n, r) {
      e.o(t, n) || Object.defineProperty(t, n, {enumerable: !0, get: r});
    }),
    (e.r = function(t) {
      'undefined' != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, {value: 'Module'}),
        Object.defineProperty(t, '__esModule', {value: !0});
    }),
    (e.t = function(t, n) {
      if ((1 & n && (t = e(t)), 8 & n)) return t;
      if (4 & n && 'object' == typeof t && t && t.__esModule) return t;
      var r = Object.create(null);
      if (
        (e.r(r),
        Object.defineProperty(r, 'default', {enumerable: !0, value: t}),
        2 & n && 'string' != typeof t)
      )
        for (var i in t)
          e.d(
            r,
            i,
            function(n) {
              return t[n];
            }.bind(null, i)
          );
      return r;
    }),
    (e.n = function(t) {
      var n =
        t && t.__esModule
          ? function() {
              return t.default;
            }
          : function() {
              return t;
            };
      return e.d(n, 'a', n), n;
    }),
    (e.o = function(t, n) {
      return Object.prototype.hasOwnProperty.call(t, n);
    }),
    (e.p = '/'),
    e((e.s = 24));
})([
  function(t, n, e) {
    'use strict';
    var r = function(t, n, e) {
      (t.prototype = n.prototype = e), (e.constructor = t);
    };
    function i(t, n) {
      var e = Object.create(t.prototype);
      for (var r in n) e[r] = n[r];
      return e;
    }
    function o() {}
    var u = '\\s*([+-]?\\d+)\\s*',
      a = '\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*',
      c = '\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*',
      f = /^#([0-9a-f]{3})$/,
      s = /^#([0-9a-f]{6})$/,
      l = new RegExp('^rgb\\(' + [u, u, u] + '\\)$'),
      h = new RegExp('^rgb\\(' + [c, c, c] + '\\)$'),
      d = new RegExp('^rgba\\(' + [u, u, u, a] + '\\)$'),
      p = new RegExp('^rgba\\(' + [c, c, c, a] + '\\)$'),
      _ = new RegExp('^hsl\\(' + [a, c, c] + '\\)$'),
      v = new RegExp('^hsla\\(' + [a, c, c, a] + '\\)$'),
      g = {
        aliceblue: 15792383,
        antiquewhite: 16444375,
        aqua: 65535,
        aquamarine: 8388564,
        azure: 15794175,
        beige: 16119260,
        bisque: 16770244,
        black: 0,
        blanchedalmond: 16772045,
        blue: 255,
        blueviolet: 9055202,
        brown: 10824234,
        burlywood: 14596231,
        cadetblue: 6266528,
        chartreuse: 8388352,
        chocolate: 13789470,
        coral: 16744272,
        cornflowerblue: 6591981,
        cornsilk: 16775388,
        crimson: 14423100,
        cyan: 65535,
        darkblue: 139,
        darkcyan: 35723,
        darkgoldenrod: 12092939,
        darkgray: 11119017,
        darkgreen: 25600,
        darkgrey: 11119017,
        darkkhaki: 12433259,
        darkmagenta: 9109643,
        darkolivegreen: 5597999,
        darkorange: 16747520,
        darkorchid: 10040012,
        darkred: 9109504,
        darksalmon: 15308410,
        darkseagreen: 9419919,
        darkslateblue: 4734347,
        darkslategray: 3100495,
        darkslategrey: 3100495,
        darkturquoise: 52945,
        darkviolet: 9699539,
        deeppink: 16716947,
        deepskyblue: 49151,
        dimgray: 6908265,
        dimgrey: 6908265,
        dodgerblue: 2003199,
        firebrick: 11674146,
        floralwhite: 16775920,
        forestgreen: 2263842,
        fuchsia: 16711935,
        gainsboro: 14474460,
        ghostwhite: 16316671,
        gold: 16766720,
        goldenrod: 14329120,
        gray: 8421504,
        green: 32768,
        greenyellow: 11403055,
        grey: 8421504,
        honeydew: 15794160,
        hotpink: 16738740,
        indianred: 13458524,
        indigo: 4915330,
        ivory: 16777200,
        khaki: 15787660,
        lavender: 15132410,
        lavenderblush: 16773365,
        lawngreen: 8190976,
        lemonchiffon: 16775885,
        lightblue: 11393254,
        lightcoral: 15761536,
        lightcyan: 14745599,
        lightgoldenrodyellow: 16448210,
        lightgray: 13882323,
        lightgreen: 9498256,
        lightgrey: 13882323,
        lightpink: 16758465,
        lightsalmon: 16752762,
        lightseagreen: 2142890,
        lightskyblue: 8900346,
        lightslategray: 7833753,
        lightslategrey: 7833753,
        lightsteelblue: 11584734,
        lightyellow: 16777184,
        lime: 65280,
        limegreen: 3329330,
        linen: 16445670,
        magenta: 16711935,
        maroon: 8388608,
        mediumaquamarine: 6737322,
        mediumblue: 205,
        mediumorchid: 12211667,
        mediumpurple: 9662683,
        mediumseagreen: 3978097,
        mediumslateblue: 8087790,
        mediumspringgreen: 64154,
        mediumturquoise: 4772300,
        mediumvioletred: 13047173,
        midnightblue: 1644912,
        mintcream: 16121850,
        mistyrose: 16770273,
        moccasin: 16770229,
        navajowhite: 16768685,
        navy: 128,
        oldlace: 16643558,
        olive: 8421376,
        olivedrab: 7048739,
        orange: 16753920,
        orangered: 16729344,
        orchid: 14315734,
        palegoldenrod: 15657130,
        palegreen: 10025880,
        paleturquoise: 11529966,
        palevioletred: 14381203,
        papayawhip: 16773077,
        peachpuff: 16767673,
        peru: 13468991,
        pink: 16761035,
        plum: 14524637,
        powderblue: 11591910,
        purple: 8388736,
        rebeccapurple: 6697881,
        red: 16711680,
        rosybrown: 12357519,
        royalblue: 4286945,
        saddlebrown: 9127187,
        salmon: 16416882,
        sandybrown: 16032864,
        seagreen: 3050327,
        seashell: 16774638,
        sienna: 10506797,
        silver: 12632256,
        skyblue: 8900331,
        slateblue: 6970061,
        slategray: 7372944,
        slategrey: 7372944,
        snow: 16775930,
        springgreen: 65407,
        steelblue: 4620980,
        tan: 13808780,
        teal: 32896,
        thistle: 14204888,
        tomato: 16737095,
        turquoise: 4251856,
        violet: 15631086,
        wheat: 16113331,
        white: 16777215,
        whitesmoke: 16119285,
        yellow: 16776960,
        yellowgreen: 10145074,
      };
    function b(t) {
      var n;
      return (
        (t = (t + '').trim().toLowerCase()),
        (n = f.exec(t))
          ? new C(
              (((n = parseInt(n[1], 16)) >> 8) & 15) | ((n >> 4) & 240),
              ((n >> 4) & 15) | (240 & n),
              ((15 & n) << 4) | (15 & n),
              1
            )
          : (n = s.exec(t))
          ? y(parseInt(n[1], 16))
          : (n = l.exec(t))
          ? new C(n[1], n[2], n[3], 1)
          : (n = h.exec(t))
          ? new C((255 * n[1]) / 100, (255 * n[2]) / 100, (255 * n[3]) / 100, 1)
          : (n = d.exec(t))
          ? m(n[1], n[2], n[3], n[4])
          : (n = p.exec(t))
          ? m((255 * n[1]) / 100, (255 * n[2]) / 100, (255 * n[3]) / 100, n[4])
          : (n = _.exec(t))
          ? R(n[1], n[2] / 100, n[3] / 100, 1)
          : (n = v.exec(t))
          ? R(n[1], n[2] / 100, n[3] / 100, n[4])
          : g.hasOwnProperty(t)
          ? y(g[t])
          : 'transparent' === t
          ? new C(NaN, NaN, NaN, 0)
          : null
      );
    }
    function y(t) {
      return new C((t >> 16) & 255, (t >> 8) & 255, 255 & t, 1);
    }
    function m(t, n, e, r) {
      return r <= 0 && (t = n = e = NaN), new C(t, n, e, r);
    }
    function x(t) {
      return (
        t instanceof o || (t = b(t)),
        t ? new C((t = t.rgb()).r, t.g, t.b, t.opacity) : new C()
      );
    }
    function w(t, n, e, r) {
      return 1 === arguments.length ? x(t) : new C(t, n, e, null == r ? 1 : r);
    }
    function C(t, n, e, r) {
      (this.r = +t), (this.g = +n), (this.b = +e), (this.opacity = +r);
    }
    function M(t) {
      return (
        ((t = Math.max(0, Math.min(255, Math.round(t) || 0))) < 16 ? '0' : '') +
        t.toString(16)
      );
    }
    function R(t, n, e, r) {
      return (
        r <= 0
          ? (t = n = e = NaN)
          : e <= 0 || e >= 1
          ? (t = n = NaN)
          : n <= 0 && (t = NaN),
        new N(t, n, e, r)
      );
    }
    function E(t, n, e, r) {
      return 1 === arguments.length
        ? (function(t) {
            if (t instanceof N) return new N(t.h, t.s, t.l, t.opacity);
            if ((t instanceof o || (t = b(t)), !t)) return new N();
            if (t instanceof N) return t;
            var n = (t = t.rgb()).r / 255,
              e = t.g / 255,
              r = t.b / 255,
              i = Math.min(n, e, r),
              u = Math.max(n, e, r),
              a = NaN,
              c = u - i,
              f = (u + i) / 2;
            return (
              c
                ? ((a =
                    n === u
                      ? (e - r) / c + 6 * (e < r)
                      : e === u
                      ? (r - n) / c + 2
                      : (n - e) / c + 4),
                  (c /= f < 0.5 ? u + i : 2 - u - i),
                  (a *= 60))
                : (c = f > 0 && f < 1 ? 0 : a),
              new N(a, c, f, t.opacity)
            );
          })(t)
        : new N(t, n, e, null == r ? 1 : r);
    }
    function N(t, n, e, r) {
      (this.h = +t), (this.s = +n), (this.l = +e), (this.opacity = +r);
    }
    function T(t, n, e) {
      return (
        255 *
        (t < 60
          ? n + ((e - n) * t) / 60
          : t < 180
          ? e
          : t < 240
          ? n + ((e - n) * (240 - t)) / 60
          : n)
      );
    }
    r(o, b, {
      displayable: function() {
        return this.rgb().displayable();
      },
      hex: function() {
        return this.rgb().hex();
      },
      toString: function() {
        return this.rgb() + '';
      },
    }),
      r(
        C,
        w,
        i(o, {
          brighter: function(t) {
            return (
              (t = null == t ? 1 / 0.7 : Math.pow(1 / 0.7, t)),
              new C(this.r * t, this.g * t, this.b * t, this.opacity)
            );
          },
          darker: function(t) {
            return (
              (t = null == t ? 0.7 : Math.pow(0.7, t)),
              new C(this.r * t, this.g * t, this.b * t, this.opacity)
            );
          },
          rgb: function() {
            return this;
          },
          displayable: function() {
            return (
              -0.5 <= this.r &&
              this.r < 255.5 &&
              -0.5 <= this.g &&
              this.g < 255.5 &&
              -0.5 <= this.b &&
              this.b < 255.5 &&
              0 <= this.opacity &&
              this.opacity <= 1
            );
          },
          hex: function() {
            return '#' + M(this.r) + M(this.g) + M(this.b);
          },
          toString: function() {
            var t = this.opacity;
            return (
              (1 === (t = isNaN(t) ? 1 : Math.max(0, Math.min(1, t)))
                ? 'rgb('
                : 'rgba(') +
              Math.max(0, Math.min(255, Math.round(this.r) || 0)) +
              ', ' +
              Math.max(0, Math.min(255, Math.round(this.g) || 0)) +
              ', ' +
              Math.max(0, Math.min(255, Math.round(this.b) || 0)) +
              (1 === t ? ')' : ', ' + t + ')')
            );
          },
        })
      ),
      r(
        N,
        E,
        i(o, {
          brighter: function(t) {
            return (
              (t = null == t ? 1 / 0.7 : Math.pow(1 / 0.7, t)),
              new N(this.h, this.s, this.l * t, this.opacity)
            );
          },
          darker: function(t) {
            return (
              (t = null == t ? 0.7 : Math.pow(0.7, t)),
              new N(this.h, this.s, this.l * t, this.opacity)
            );
          },
          rgb: function() {
            var t = (this.h % 360) + 360 * (this.h < 0),
              n = isNaN(t) || isNaN(this.s) ? 0 : this.s,
              e = this.l,
              r = e + (e < 0.5 ? e : 1 - e) * n,
              i = 2 * e - r;
            return new C(
              T(t >= 240 ? t - 240 : t + 120, i, r),
              T(t, i, r),
              T(t < 120 ? t + 240 : t - 120, i, r),
              this.opacity
            );
          },
          displayable: function() {
            return (
              ((0 <= this.s && this.s <= 1) || isNaN(this.s)) &&
              0 <= this.l &&
              this.l <= 1 &&
              0 <= this.opacity &&
              this.opacity <= 1
            );
          },
        })
      );
    var A = Math.PI / 180,
      S = 180 / Math.PI,
      O = 0.96422,
      U = 1,
      k = 0.82521,
      D = 4 / 29,
      I = 6 / 29,
      Y = 3 * I * I,
      j = I * I * I;
    function L(t) {
      if (t instanceof B) return new B(t.l, t.a, t.b, t.opacity);
      if (t instanceof G) return V(t);
      t instanceof C || (t = x(t));
      var n,
        e,
        r = q(t.r),
        i = q(t.g),
        o = q(t.b),
        u = F((0.2225045 * r + 0.7168786 * i + 0.0606169 * o) / U);
      return (
        r === i && i === o
          ? (n = e = u)
          : ((n = F((0.4360747 * r + 0.3850649 * i + 0.1430804 * o) / O)),
            (e = F((0.0139322 * r + 0.0971045 * i + 0.7141733 * o) / k))),
        new B(116 * u - 16, 500 * (n - u), 200 * (u - e), t.opacity)
      );
    }
    function P(t, n, e, r) {
      return 1 === arguments.length ? L(t) : new B(t, n, e, null == r ? 1 : r);
    }
    function B(t, n, e, r) {
      (this.l = +t), (this.a = +n), (this.b = +e), (this.opacity = +r);
    }
    function F(t) {
      return t > j ? Math.pow(t, 1 / 3) : t / Y + D;
    }
    function z(t) {
      return t > I ? t * t * t : Y * (t - D);
    }
    function H(t) {
      return (
        255 *
        (t <= 0.0031308 ? 12.92 * t : 1.055 * Math.pow(t, 1 / 2.4) - 0.055)
      );
    }
    function q(t) {
      return (t /= 255) <= 0.04045
        ? t / 12.92
        : Math.pow((t + 0.055) / 1.055, 2.4);
    }
    function $(t) {
      if (t instanceof G) return new G(t.h, t.c, t.l, t.opacity);
      if ((t instanceof B || (t = L(t)), 0 === t.a && 0 === t.b))
        return new G(NaN, 0 < t.l && t.l < 100 ? 0 : NaN, t.l, t.opacity);
      var n = Math.atan2(t.b, t.a) * S;
      return new G(
        n < 0 ? n + 360 : n,
        Math.sqrt(t.a * t.a + t.b * t.b),
        t.l,
        t.opacity
      );
    }
    function W(t, n, e, r) {
      return 1 === arguments.length ? $(t) : new G(t, n, e, null == r ? 1 : r);
    }
    function G(t, n, e, r) {
      (this.h = +t), (this.c = +n), (this.l = +e), (this.opacity = +r);
    }
    function V(t) {
      if (isNaN(t.h)) return new B(t.l, 0, 0, t.opacity);
      var n = t.h * A;
      return new B(t.l, Math.cos(n) * t.c, Math.sin(n) * t.c, t.opacity);
    }
    r(
      B,
      P,
      i(o, {
        brighter: function(t) {
          return new B(
            this.l + 18 * (null == t ? 1 : t),
            this.a,
            this.b,
            this.opacity
          );
        },
        darker: function(t) {
          return new B(
            this.l - 18 * (null == t ? 1 : t),
            this.a,
            this.b,
            this.opacity
          );
        },
        rgb: function() {
          var t = (this.l + 16) / 116,
            n = isNaN(this.a) ? t : t + this.a / 500,
            e = isNaN(this.b) ? t : t - this.b / 200;
          return new C(
            H(
              3.1338561 * (n = O * z(n)) -
                1.6168667 * (t = U * z(t)) -
                0.4906146 * (e = k * z(e))
            ),
            H(-0.9787684 * n + 1.9161415 * t + 0.033454 * e),
            H(0.0719453 * n - 0.2289914 * t + 1.4052427 * e),
            this.opacity
          );
        },
      })
    ),
      r(
        G,
        W,
        i(o, {
          brighter: function(t) {
            return new G(
              this.h,
              this.c,
              this.l + 18 * (null == t ? 1 : t),
              this.opacity
            );
          },
          darker: function(t) {
            return new G(
              this.h,
              this.c,
              this.l - 18 * (null == t ? 1 : t),
              this.opacity
            );
          },
          rgb: function() {
            return V(this).rgb();
          },
        })
      );
    var Z = -0.14861,
      X = 1.78277,
      K = -0.29227,
      J = -0.90649,
      Q = 1.97294,
      tt = Q * J,
      nt = Q * X,
      et = X * K - J * Z;
    function rt(t, n, e, r) {
      return 1 === arguments.length
        ? (function(t) {
            if (t instanceof it) return new it(t.h, t.s, t.l, t.opacity);
            t instanceof C || (t = x(t));
            var n = t.r / 255,
              e = t.g / 255,
              r = t.b / 255,
              i = (et * r + tt * n - nt * e) / (et + tt - nt),
              o = r - i,
              u = (Q * (e - i) - K * o) / J,
              a = Math.sqrt(u * u + o * o) / (Q * i * (1 - i)),
              c = a ? Math.atan2(u, o) * S - 120 : NaN;
            return new it(c < 0 ? c + 360 : c, a, i, t.opacity);
          })(t)
        : new it(t, n, e, null == r ? 1 : r);
    }
    function it(t, n, e, r) {
      (this.h = +t), (this.s = +n), (this.l = +e), (this.opacity = +r);
    }
    r(
      it,
      rt,
      i(o, {
        brighter: function(t) {
          return (
            (t = null == t ? 1 / 0.7 : Math.pow(1 / 0.7, t)),
            new it(this.h, this.s, this.l * t, this.opacity)
          );
        },
        darker: function(t) {
          return (
            (t = null == t ? 0.7 : Math.pow(0.7, t)),
            new it(this.h, this.s, this.l * t, this.opacity)
          );
        },
        rgb: function() {
          var t = isNaN(this.h) ? 0 : (this.h + 120) * A,
            n = +this.l,
            e = isNaN(this.s) ? 0 : this.s * n * (1 - n),
            r = Math.cos(t),
            i = Math.sin(t);
          return new C(
            255 * (n + e * (Z * r + X * i)),
            255 * (n + e * (K * r + J * i)),
            255 * (n + e * (Q * r)),
            this.opacity
          );
        },
      })
    ),
      e.d(n, 'a', function() {
        return b;
      }),
      e.d(n, 'f', function() {
        return w;
      }),
      e.d(n, 'd', function() {
        return E;
      }),
      e.d(n, 'e', function() {
        return P;
      }),
      e.d(n, 'c', function() {
        return W;
      }),
      e.d(n, 'b', function() {
        return rt;
      });
  },
  function(t, n, e) {
    'use strict';
    e.r(n);
    var r = 'http://www.w3.org/1999/xhtml',
      i = {
        svg: 'http://www.w3.org/2000/svg',
        xhtml: r,
        xlink: 'http://www.w3.org/1999/xlink',
        xml: 'http://www.w3.org/XML/1998/namespace',
        xmlns: 'http://www.w3.org/2000/xmlns/',
      },
      o = function(t) {
        var n = (t += ''),
          e = n.indexOf(':');
        return (
          e >= 0 && 'xmlns' !== (n = t.slice(0, e)) && (t = t.slice(e + 1)),
          i.hasOwnProperty(n) ? {space: i[n], local: t} : t
        );
      };
    var u = function(t) {
      var n = o(t);
      return (n.local
        ? function(t) {
            return function() {
              return this.ownerDocument.createElementNS(t.space, t.local);
            };
          }
        : function(t) {
            return function() {
              var n = this.ownerDocument,
                e = this.namespaceURI;
              return e === r && n.documentElement.namespaceURI === r
                ? n.createElement(t)
                : n.createElementNS(e, t);
            };
          })(n);
    };
    function a() {}
    var c = function(t) {
      return null == t
        ? a
        : function() {
            return this.querySelector(t);
          };
    };
    function f() {
      return [];
    }
    var s = function(t) {
        return null == t
          ? f
          : function() {
              return this.querySelectorAll(t);
            };
      },
      l = function(t) {
        return function() {
          return this.matches(t);
        };
      },
      h = function(t) {
        return new Array(t.length);
      };
    function d(t, n) {
      (this.ownerDocument = t.ownerDocument),
        (this.namespaceURI = t.namespaceURI),
        (this._next = null),
        (this._parent = t),
        (this.__data__ = n);
    }
    d.prototype = {
      constructor: d,
      appendChild: function(t) {
        return this._parent.insertBefore(t, this._next);
      },
      insertBefore: function(t, n) {
        return this._parent.insertBefore(t, n);
      },
      querySelector: function(t) {
        return this._parent.querySelector(t);
      },
      querySelectorAll: function(t) {
        return this._parent.querySelectorAll(t);
      },
    };
    var p = '$';
    function _(t, n, e, r, i, o) {
      for (var u, a = 0, c = n.length, f = o.length; a < f; ++a)
        (u = n[a])
          ? ((u.__data__ = o[a]), (r[a] = u))
          : (e[a] = new d(t, o[a]));
      for (; a < c; ++a) (u = n[a]) && (i[a] = u);
    }
    function v(t, n, e, r, i, o, u) {
      var a,
        c,
        f,
        s = {},
        l = n.length,
        h = o.length,
        _ = new Array(l);
      for (a = 0; a < l; ++a)
        (c = n[a]) &&
          ((_[a] = f = p + u.call(c, c.__data__, a, n)),
          f in s ? (i[a] = c) : (s[f] = c));
      for (a = 0; a < h; ++a)
        (c = s[(f = p + u.call(t, o[a], a, o))])
          ? ((r[a] = c), (c.__data__ = o[a]), (s[f] = null))
          : (e[a] = new d(t, o[a]));
      for (a = 0; a < l; ++a) (c = n[a]) && s[_[a]] === c && (i[a] = c);
    }
    function g(t, n) {
      return t < n ? -1 : t > n ? 1 : t >= n ? 0 : NaN;
    }
    function b(t) {
      return function() {
        this.removeAttribute(t);
      };
    }
    function y(t) {
      return function() {
        this.removeAttributeNS(t.space, t.local);
      };
    }
    function m(t, n) {
      return function() {
        this.setAttribute(t, n);
      };
    }
    function x(t, n) {
      return function() {
        this.setAttributeNS(t.space, t.local, n);
      };
    }
    function w(t, n) {
      return function() {
        var e = n.apply(this, arguments);
        null == e ? this.removeAttribute(t) : this.setAttribute(t, e);
      };
    }
    function C(t, n) {
      return function() {
        var e = n.apply(this, arguments);
        null == e
          ? this.removeAttributeNS(t.space, t.local)
          : this.setAttributeNS(t.space, t.local, e);
      };
    }
    var M = function(t) {
      return (
        (t.ownerDocument && t.ownerDocument.defaultView) ||
        (t.document && t) ||
        t.defaultView
      );
    };
    function R(t) {
      return function() {
        this.style.removeProperty(t);
      };
    }
    function E(t, n, e) {
      return function() {
        this.style.setProperty(t, n, e);
      };
    }
    function N(t, n, e) {
      return function() {
        var r = n.apply(this, arguments);
        null == r
          ? this.style.removeProperty(t)
          : this.style.setProperty(t, r, e);
      };
    }
    function T(t, n) {
      return (
        t.style.getPropertyValue(n) ||
        M(t)
          .getComputedStyle(t, null)
          .getPropertyValue(n)
      );
    }
    function A(t) {
      return function() {
        delete this[t];
      };
    }
    function S(t, n) {
      return function() {
        this[t] = n;
      };
    }
    function O(t, n) {
      return function() {
        var e = n.apply(this, arguments);
        null == e ? delete this[t] : (this[t] = e);
      };
    }
    function U(t) {
      return t.trim().split(/^|\s+/);
    }
    function k(t) {
      return t.classList || new D(t);
    }
    function D(t) {
      (this._node = t), (this._names = U(t.getAttribute('class') || ''));
    }
    function I(t, n) {
      for (var e = k(t), r = -1, i = n.length; ++r < i; ) e.add(n[r]);
    }
    function Y(t, n) {
      for (var e = k(t), r = -1, i = n.length; ++r < i; ) e.remove(n[r]);
    }
    function j(t) {
      return function() {
        I(this, t);
      };
    }
    function L(t) {
      return function() {
        Y(this, t);
      };
    }
    function P(t, n) {
      return function() {
        (n.apply(this, arguments) ? I : Y)(this, t);
      };
    }
    D.prototype = {
      add: function(t) {
        this._names.indexOf(t) < 0 &&
          (this._names.push(t),
          this._node.setAttribute('class', this._names.join(' ')));
      },
      remove: function(t) {
        var n = this._names.indexOf(t);
        n >= 0 &&
          (this._names.splice(n, 1),
          this._node.setAttribute('class', this._names.join(' ')));
      },
      contains: function(t) {
        return this._names.indexOf(t) >= 0;
      },
    };
    function B() {
      this.textContent = '';
    }
    function F(t) {
      return function() {
        this.textContent = t;
      };
    }
    function z(t) {
      return function() {
        var n = t.apply(this, arguments);
        this.textContent = null == n ? '' : n;
      };
    }
    function H() {
      this.innerHTML = '';
    }
    function q(t) {
      return function() {
        this.innerHTML = t;
      };
    }
    function $(t) {
      return function() {
        var n = t.apply(this, arguments);
        this.innerHTML = null == n ? '' : n;
      };
    }
    function W() {
      this.nextSibling && this.parentNode.appendChild(this);
    }
    function G() {
      this.previousSibling &&
        this.parentNode.insertBefore(this, this.parentNode.firstChild);
    }
    function V() {
      return null;
    }
    function Z() {
      var t = this.parentNode;
      t && t.removeChild(this);
    }
    function X() {
      return this.parentNode.insertBefore(this.cloneNode(!1), this.nextSibling);
    }
    function K() {
      return this.parentNode.insertBefore(this.cloneNode(!0), this.nextSibling);
    }
    var J = {},
      Q = null;
    'undefined' != typeof document &&
      ('onmouseenter' in document.documentElement ||
        (J = {mouseenter: 'mouseover', mouseleave: 'mouseout'}));
    function tt(t, n, e) {
      return (
        (t = nt(t, n, e)),
        function(n) {
          var e = n.relatedTarget;
          (e && (e === this || 8 & e.compareDocumentPosition(this))) ||
            t.call(this, n);
        }
      );
    }
    function nt(t, n, e) {
      return function(r) {
        var i = Q;
        Q = r;
        try {
          t.call(this, this.__data__, n, e);
        } finally {
          Q = i;
        }
      };
    }
    function et(t) {
      return t
        .trim()
        .split(/^|\s+/)
        .map(function(t) {
          var n = '',
            e = t.indexOf('.');
          return (
            e >= 0 && ((n = t.slice(e + 1)), (t = t.slice(0, e))),
            {type: t, name: n}
          );
        });
    }
    function rt(t) {
      return function() {
        var n = this.__on;
        if (n) {
          for (var e, r = 0, i = -1, o = n.length; r < o; ++r)
            (e = n[r]),
              (t.type && e.type !== t.type) || e.name !== t.name
                ? (n[++i] = e)
                : this.removeEventListener(e.type, e.listener, e.capture);
          ++i ? (n.length = i) : delete this.__on;
        }
      };
    }
    function it(t, n, e) {
      var r = J.hasOwnProperty(t.type) ? tt : nt;
      return function(i, o, u) {
        var a,
          c = this.__on,
          f = r(n, o, u);
        if (c)
          for (var s = 0, l = c.length; s < l; ++s)
            if ((a = c[s]).type === t.type && a.name === t.name)
              return (
                this.removeEventListener(a.type, a.listener, a.capture),
                this.addEventListener(
                  a.type,
                  (a.listener = f),
                  (a.capture = e)
                ),
                void (a.value = n)
              );
        this.addEventListener(t.type, f, e),
          (a = {type: t.type, name: t.name, value: n, listener: f, capture: e}),
          c ? c.push(a) : (this.__on = [a]);
      };
    }
    function ot(t, n, e, r) {
      var i = Q;
      (t.sourceEvent = Q), (Q = t);
      try {
        return n.apply(e, r);
      } finally {
        Q = i;
      }
    }
    function ut(t, n, e) {
      var r = M(t),
        i = r.CustomEvent;
      'function' == typeof i
        ? (i = new i(n, e))
        : ((i = r.document.createEvent('Event')),
          e
            ? (i.initEvent(n, e.bubbles, e.cancelable), (i.detail = e.detail))
            : i.initEvent(n, !1, !1)),
        t.dispatchEvent(i);
    }
    var at = [null];
    function ct(t, n) {
      (this._groups = t), (this._parents = n);
    }
    function ft() {
      return new ct([[document.documentElement]], at);
    }
    ct.prototype = ft.prototype = {
      constructor: ct,
      select: function(t) {
        'function' != typeof t && (t = c(t));
        for (
          var n = this._groups, e = n.length, r = new Array(e), i = 0;
          i < e;
          ++i
        )
          for (
            var o, u, a = n[i], f = a.length, s = (r[i] = new Array(f)), l = 0;
            l < f;
            ++l
          )
            (o = a[l]) &&
              (u = t.call(o, o.__data__, l, a)) &&
              ('__data__' in o && (u.__data__ = o.__data__), (s[l] = u));
        return new ct(r, this._parents);
      },
      selectAll: function(t) {
        'function' != typeof t && (t = s(t));
        for (
          var n = this._groups, e = n.length, r = [], i = [], o = 0;
          o < e;
          ++o
        )
          for (var u, a = n[o], c = a.length, f = 0; f < c; ++f)
            (u = a[f]) && (r.push(t.call(u, u.__data__, f, a)), i.push(u));
        return new ct(r, i);
      },
      filter: function(t) {
        'function' != typeof t && (t = l(t));
        for (
          var n = this._groups, e = n.length, r = new Array(e), i = 0;
          i < e;
          ++i
        )
          for (
            var o, u = n[i], a = u.length, c = (r[i] = []), f = 0;
            f < a;
            ++f
          )
            (o = u[f]) && t.call(o, o.__data__, f, u) && c.push(o);
        return new ct(r, this._parents);
      },
      data: function(t, n) {
        if (!t)
          return (
            (p = new Array(this.size())),
            (s = -1),
            this.each(function(t) {
              p[++s] = t;
            }),
            p
          );
        var e,
          r = n ? v : _,
          i = this._parents,
          o = this._groups;
        'function' != typeof t &&
          ((e = t),
          (t = function() {
            return e;
          }));
        for (
          var u = o.length,
            a = new Array(u),
            c = new Array(u),
            f = new Array(u),
            s = 0;
          s < u;
          ++s
        ) {
          var l = i[s],
            h = o[s],
            d = h.length,
            p = t.call(l, l && l.__data__, s, i),
            g = p.length,
            b = (c[s] = new Array(g)),
            y = (a[s] = new Array(g));
          r(l, h, b, y, (f[s] = new Array(d)), p, n);
          for (var m, x, w = 0, C = 0; w < g; ++w)
            if ((m = b[w])) {
              for (w >= C && (C = w + 1); !(x = y[C]) && ++C < g; );
              m._next = x || null;
            }
        }
        return ((a = new ct(a, i))._enter = c), (a._exit = f), a;
      },
      enter: function() {
        return new ct(this._enter || this._groups.map(h), this._parents);
      },
      exit: function() {
        return new ct(this._exit || this._groups.map(h), this._parents);
      },
      join: function(t, n, e) {
        var r = this.enter(),
          i = this,
          o = this.exit();
        return (
          (r = 'function' == typeof t ? t(r) : r.append(t + '')),
          null != n && (i = n(i)),
          null == e ? o.remove() : e(o),
          r && i ? r.merge(i).order() : i
        );
      },
      merge: function(t) {
        for (
          var n = this._groups,
            e = t._groups,
            r = n.length,
            i = e.length,
            o = Math.min(r, i),
            u = new Array(r),
            a = 0;
          a < o;
          ++a
        )
          for (
            var c,
              f = n[a],
              s = e[a],
              l = f.length,
              h = (u[a] = new Array(l)),
              d = 0;
            d < l;
            ++d
          )
            (c = f[d] || s[d]) && (h[d] = c);
        for (; a < r; ++a) u[a] = n[a];
        return new ct(u, this._parents);
      },
      order: function() {
        for (var t = this._groups, n = -1, e = t.length; ++n < e; )
          for (var r, i = t[n], o = i.length - 1, u = i[o]; --o >= 0; )
            (r = i[o]) &&
              (u &&
                4 ^ r.compareDocumentPosition(u) &&
                u.parentNode.insertBefore(r, u),
              (u = r));
        return this;
      },
      sort: function(t) {
        function n(n, e) {
          return n && e ? t(n.__data__, e.__data__) : !n - !e;
        }
        t || (t = g);
        for (
          var e = this._groups, r = e.length, i = new Array(r), o = 0;
          o < r;
          ++o
        ) {
          for (
            var u, a = e[o], c = a.length, f = (i[o] = new Array(c)), s = 0;
            s < c;
            ++s
          )
            (u = a[s]) && (f[s] = u);
          f.sort(n);
        }
        return new ct(i, this._parents).order();
      },
      call: function() {
        var t = arguments[0];
        return (arguments[0] = this), t.apply(null, arguments), this;
      },
      nodes: function() {
        var t = new Array(this.size()),
          n = -1;
        return (
          this.each(function() {
            t[++n] = this;
          }),
          t
        );
      },
      node: function() {
        for (var t = this._groups, n = 0, e = t.length; n < e; ++n)
          for (var r = t[n], i = 0, o = r.length; i < o; ++i) {
            var u = r[i];
            if (u) return u;
          }
        return null;
      },
      size: function() {
        var t = 0;
        return (
          this.each(function() {
            ++t;
          }),
          t
        );
      },
      empty: function() {
        return !this.node();
      },
      each: function(t) {
        for (var n = this._groups, e = 0, r = n.length; e < r; ++e)
          for (var i, o = n[e], u = 0, a = o.length; u < a; ++u)
            (i = o[u]) && t.call(i, i.__data__, u, o);
        return this;
      },
      attr: function(t, n) {
        var e = o(t);
        if (arguments.length < 2) {
          var r = this.node();
          return e.local
            ? r.getAttributeNS(e.space, e.local)
            : r.getAttribute(e);
        }
        return this.each(
          (null == n
            ? e.local
              ? y
              : b
            : 'function' == typeof n
            ? e.local
              ? C
              : w
            : e.local
            ? x
            : m)(e, n)
        );
      },
      style: function(t, n, e) {
        return arguments.length > 1
          ? this.each(
              (null == n ? R : 'function' == typeof n ? N : E)(
                t,
                n,
                null == e ? '' : e
              )
            )
          : T(this.node(), t);
      },
      property: function(t, n) {
        return arguments.length > 1
          ? this.each((null == n ? A : 'function' == typeof n ? O : S)(t, n))
          : this.node()[t];
      },
      classed: function(t, n) {
        var e = U(t + '');
        if (arguments.length < 2) {
          for (var r = k(this.node()), i = -1, o = e.length; ++i < o; )
            if (!r.contains(e[i])) return !1;
          return !0;
        }
        return this.each(('function' == typeof n ? P : n ? j : L)(e, n));
      },
      text: function(t) {
        return arguments.length
          ? this.each(null == t ? B : ('function' == typeof t ? z : F)(t))
          : this.node().textContent;
      },
      html: function(t) {
        return arguments.length
          ? this.each(null == t ? H : ('function' == typeof t ? $ : q)(t))
          : this.node().innerHTML;
      },
      raise: function() {
        return this.each(W);
      },
      lower: function() {
        return this.each(G);
      },
      append: function(t) {
        var n = 'function' == typeof t ? t : u(t);
        return this.select(function() {
          return this.appendChild(n.apply(this, arguments));
        });
      },
      insert: function(t, n) {
        var e = 'function' == typeof t ? t : u(t),
          r = null == n ? V : 'function' == typeof n ? n : c(n);
        return this.select(function() {
          return this.insertBefore(
            e.apply(this, arguments),
            r.apply(this, arguments) || null
          );
        });
      },
      remove: function() {
        return this.each(Z);
      },
      clone: function(t) {
        return this.select(t ? K : X);
      },
      datum: function(t) {
        return arguments.length
          ? this.property('__data__', t)
          : this.node().__data__;
      },
      on: function(t, n, e) {
        var r,
          i,
          o = et(t + ''),
          u = o.length;
        if (!(arguments.length < 2)) {
          for (a = n ? it : rt, null == e && (e = !1), r = 0; r < u; ++r)
            this.each(a(o[r], n, e));
          return this;
        }
        var a = this.node().__on;
        if (a)
          for (var c, f = 0, s = a.length; f < s; ++f)
            for (r = 0, c = a[f]; r < u; ++r)
              if ((i = o[r]).type === c.type && i.name === c.name)
                return c.value;
      },
      dispatch: function(t, n) {
        return this.each(
          ('function' == typeof n
            ? function(t, n) {
                return function() {
                  return ut(this, t, n.apply(this, arguments));
                };
              }
            : function(t, n) {
                return function() {
                  return ut(this, t, n);
                };
              })(t, n)
        );
      },
    };
    var st = ft,
      lt = function(t) {
        return 'string' == typeof t
          ? new ct([[document.querySelector(t)]], [document.documentElement])
          : new ct([[t]], at);
      },
      ht = function(t) {
        return lt(u(t).call(document.documentElement));
      },
      dt = 0;
    function pt() {
      return new _t();
    }
    function _t() {
      this._ = '@' + (++dt).toString(36);
    }
    _t.prototype = pt.prototype = {
      constructor: _t,
      get: function(t) {
        for (var n = this._; !(n in t); ) if (!(t = t.parentNode)) return;
        return t[n];
      },
      set: function(t, n) {
        return (t[this._] = n);
      },
      remove: function(t) {
        return this._ in t && delete t[this._];
      },
      toString: function() {
        return this._;
      },
    };
    var vt = function() {
        for (var t, n = Q; (t = n.sourceEvent); ) n = t;
        return n;
      },
      gt = function(t, n) {
        var e = t.ownerSVGElement || t;
        if (e.createSVGPoint) {
          var r = e.createSVGPoint();
          return (
            (r.x = n.clientX),
            (r.y = n.clientY),
            [(r = r.matrixTransform(t.getScreenCTM().inverse())).x, r.y]
          );
        }
        var i = t.getBoundingClientRect();
        return [
          n.clientX - i.left - t.clientLeft,
          n.clientY - i.top - t.clientTop,
        ];
      },
      bt = function(t) {
        var n = vt();
        return n.changedTouches && (n = n.changedTouches[0]), gt(t, n);
      },
      yt = function(t) {
        return 'string' == typeof t
          ? new ct([document.querySelectorAll(t)], [document.documentElement])
          : new ct([null == t ? [] : t], at);
      },
      mt = function(t, n, e) {
        arguments.length < 3 && ((e = n), (n = vt().changedTouches));
        for (var r, i = 0, o = n ? n.length : 0; i < o; ++i)
          if ((r = n[i]).identifier === e) return gt(t, r);
        return null;
      },
      xt = function(t, n) {
        null == n && (n = vt().touches);
        for (var e = 0, r = n ? n.length : 0, i = new Array(r); e < r; ++e)
          i[e] = gt(t, n[e]);
        return i;
      };
    e.d(n, 'create', function() {
      return ht;
    }),
      e.d(n, 'creator', function() {
        return u;
      }),
      e.d(n, 'local', function() {
        return pt;
      }),
      e.d(n, 'matcher', function() {
        return l;
      }),
      e.d(n, 'mouse', function() {
        return bt;
      }),
      e.d(n, 'namespace', function() {
        return o;
      }),
      e.d(n, 'namespaces', function() {
        return i;
      }),
      e.d(n, 'clientPoint', function() {
        return gt;
      }),
      e.d(n, 'select', function() {
        return lt;
      }),
      e.d(n, 'selectAll', function() {
        return yt;
      }),
      e.d(n, 'selection', function() {
        return st;
      }),
      e.d(n, 'selector', function() {
        return c;
      }),
      e.d(n, 'selectorAll', function() {
        return s;
      }),
      e.d(n, 'style', function() {
        return T;
      }),
      e.d(n, 'touch', function() {
        return mt;
      }),
      e.d(n, 'touches', function() {
        return xt;
      }),
      e.d(n, 'window', function() {
        return M;
      }),
      e.d(n, 'event', function() {
        return Q;
      }),
      e.d(n, 'customEvent', function() {
        return ot;
      });
  },
  function(t, n, e) {
    'use strict';
    e.r(n);
    var r = e(0);
    function i(t, n, e, r, i) {
      var o = t * t,
        u = o * t;
      return (
        ((1 - 3 * t + 3 * o - u) * n +
          (4 - 6 * o + 3 * u) * e +
          (1 + 3 * t + 3 * o - 3 * u) * r +
          u * i) /
        6
      );
    }
    var o = function(t) {
        var n = t.length - 1;
        return function(e) {
          var r =
              e <= 0 ? (e = 0) : e >= 1 ? ((e = 1), n - 1) : Math.floor(e * n),
            o = t[r],
            u = t[r + 1],
            a = r > 0 ? t[r - 1] : 2 * o - u,
            c = r < n - 1 ? t[r + 2] : 2 * u - o;
          return i((e - r / n) * n, a, o, u, c);
        };
      },
      u = function(t) {
        var n = t.length;
        return function(e) {
          var r = Math.floor(((e %= 1) < 0 ? ++e : e) * n),
            o = t[(r + n - 1) % n],
            u = t[r % n],
            a = t[(r + 1) % n],
            c = t[(r + 2) % n];
          return i((e - r / n) * n, o, u, a, c);
        };
      },
      a = function(t) {
        return function() {
          return t;
        };
      };
    function c(t, n) {
      return function(e) {
        return t + e * n;
      };
    }
    function f(t, n) {
      var e = n - t;
      return e
        ? c(t, e > 180 || e < -180 ? e - 360 * Math.round(e / 360) : e)
        : a(isNaN(t) ? n : t);
    }
    function s(t) {
      return 1 == (t = +t)
        ? l
        : function(n, e) {
            return e - n
              ? (function(t, n, e) {
                  return (
                    (t = Math.pow(t, e)),
                    (n = Math.pow(n, e) - t),
                    (e = 1 / e),
                    function(r) {
                      return Math.pow(t + r * n, e);
                    }
                  );
                })(n, e, t)
              : a(isNaN(n) ? e : n);
          };
    }
    function l(t, n) {
      var e = n - t;
      return e ? c(t, e) : a(isNaN(t) ? n : t);
    }
    var h = (function t(n) {
      var e = s(n);
      function i(t, n) {
        var i = e((t = Object(r.f)(t)).r, (n = Object(r.f)(n)).r),
          o = e(t.g, n.g),
          u = e(t.b, n.b),
          a = l(t.opacity, n.opacity);
        return function(n) {
          return (
            (t.r = i(n)), (t.g = o(n)), (t.b = u(n)), (t.opacity = a(n)), t + ''
          );
        };
      }
      return (i.gamma = t), i;
    })(1);
    function d(t) {
      return function(n) {
        var e,
          i,
          o = n.length,
          u = new Array(o),
          a = new Array(o),
          c = new Array(o);
        for (e = 0; e < o; ++e)
          (i = Object(r.f)(n[e])),
            (u[e] = i.r || 0),
            (a[e] = i.g || 0),
            (c[e] = i.b || 0);
        return (
          (u = t(u)),
          (a = t(a)),
          (c = t(c)),
          (i.opacity = 1),
          function(t) {
            return (i.r = u(t)), (i.g = a(t)), (i.b = c(t)), i + '';
          }
        );
      };
    }
    var p = d(o),
      _ = d(u),
      v = function(t, n) {
        var e,
          r = n ? n.length : 0,
          i = t ? Math.min(r, t.length) : 0,
          o = new Array(i),
          u = new Array(r);
        for (e = 0; e < i; ++e) o[e] = N(t[e], n[e]);
        for (; e < r; ++e) u[e] = n[e];
        return function(t) {
          for (e = 0; e < i; ++e) u[e] = o[e](t);
          return u;
        };
      },
      g = function(t, n) {
        var e = new Date();
        return (
          (n -= t = +t),
          function(r) {
            return e.setTime(t + n * r), e;
          }
        );
      },
      b = function(t, n) {
        return (
          (n -= t = +t),
          function(e) {
            return t + n * e;
          }
        );
      },
      y = function(t, n) {
        var e,
          r = {},
          i = {};
        for (e in ((null !== t && 'object' == typeof t) || (t = {}),
        (null !== n && 'object' == typeof n) || (n = {}),
        n))
          e in t ? (r[e] = N(t[e], n[e])) : (i[e] = n[e]);
        return function(t) {
          for (e in r) i[e] = r[e](t);
          return i;
        };
      },
      m = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
      x = new RegExp(m.source, 'g');
    var w,
      C,
      M,
      R,
      E = function(t, n) {
        var e,
          r,
          i,
          o = (m.lastIndex = x.lastIndex = 0),
          u = -1,
          a = [],
          c = [];
        for (t += '', n += ''; (e = m.exec(t)) && (r = x.exec(n)); )
          (i = r.index) > o &&
            ((i = n.slice(o, i)), a[u] ? (a[u] += i) : (a[++u] = i)),
            (e = e[0]) === (r = r[0])
              ? a[u]
                ? (a[u] += r)
                : (a[++u] = r)
              : ((a[++u] = null), c.push({i: u, x: b(e, r)})),
            (o = x.lastIndex);
        return (
          o < n.length && ((i = n.slice(o)), a[u] ? (a[u] += i) : (a[++u] = i)),
          a.length < 2
            ? c[0]
              ? (function(t) {
                  return function(n) {
                    return t(n) + '';
                  };
                })(c[0].x)
              : (function(t) {
                  return function() {
                    return t;
                  };
                })(n)
            : ((n = c.length),
              function(t) {
                for (var e, r = 0; r < n; ++r) a[(e = c[r]).i] = e.x(t);
                return a.join('');
              })
        );
      },
      N = function(t, n) {
        var e,
          i = typeof n;
        return null == n || 'boolean' === i
          ? a(n)
          : ('number' === i
              ? b
              : 'string' === i
              ? (e = Object(r.a)(n))
                ? ((n = e), h)
                : E
              : n instanceof r.a
              ? h
              : n instanceof Date
              ? g
              : Array.isArray(n)
              ? v
              : ('function' != typeof n.valueOf &&
                  'function' != typeof n.toString) ||
                isNaN(n)
              ? y
              : b)(t, n);
      },
      T = function(t) {
        var n = t.length;
        return function(e) {
          return t[Math.max(0, Math.min(n - 1, Math.floor(e * n)))];
        };
      },
      A = function(t, n) {
        var e = f(+t, +n);
        return function(t) {
          var n = e(t);
          return n - 360 * Math.floor(n / 360);
        };
      },
      S = function(t, n) {
        return (
          (n -= t = +t),
          function(e) {
            return Math.round(t + n * e);
          }
        );
      },
      O = 180 / Math.PI,
      U = {
        translateX: 0,
        translateY: 0,
        rotate: 0,
        skewX: 0,
        scaleX: 1,
        scaleY: 1,
      },
      k = function(t, n, e, r, i, o) {
        var u, a, c;
        return (
          (u = Math.sqrt(t * t + n * n)) && ((t /= u), (n /= u)),
          (c = t * e + n * r) && ((e -= t * c), (r -= n * c)),
          (a = Math.sqrt(e * e + r * r)) && ((e /= a), (r /= a), (c /= a)),
          t * r < n * e && ((t = -t), (n = -n), (c = -c), (u = -u)),
          {
            translateX: i,
            translateY: o,
            rotate: Math.atan2(n, t) * O,
            skewX: Math.atan(c) * O,
            scaleX: u,
            scaleY: a,
          }
        );
      };
    function D(t, n, e, r) {
      function i(t) {
        return t.length ? t.pop() + ' ' : '';
      }
      return function(o, u) {
        var a = [],
          c = [];
        return (
          (o = t(o)),
          (u = t(u)),
          (function(t, r, i, o, u, a) {
            if (t !== i || r !== o) {
              var c = u.push('translate(', null, n, null, e);
              a.push({i: c - 4, x: b(t, i)}, {i: c - 2, x: b(r, o)});
            } else (i || o) && u.push('translate(' + i + n + o + e);
          })(o.translateX, o.translateY, u.translateX, u.translateY, a, c),
          (function(t, n, e, o) {
            t !== n
              ? (t - n > 180 ? (n += 360) : n - t > 180 && (t += 360),
                o.push({i: e.push(i(e) + 'rotate(', null, r) - 2, x: b(t, n)}))
              : n && e.push(i(e) + 'rotate(' + n + r);
          })(o.rotate, u.rotate, a, c),
          (function(t, n, e, o) {
            t !== n
              ? o.push({i: e.push(i(e) + 'skewX(', null, r) - 2, x: b(t, n)})
              : n && e.push(i(e) + 'skewX(' + n + r);
          })(o.skewX, u.skewX, a, c),
          (function(t, n, e, r, o, u) {
            if (t !== e || n !== r) {
              var a = o.push(i(o) + 'scale(', null, ',', null, ')');
              u.push({i: a - 4, x: b(t, e)}, {i: a - 2, x: b(n, r)});
            } else
              (1 === e && 1 === r) ||
                o.push(i(o) + 'scale(' + e + ',' + r + ')');
          })(o.scaleX, o.scaleY, u.scaleX, u.scaleY, a, c),
          (o = u = null),
          function(t) {
            for (var n, e = -1, r = c.length; ++e < r; )
              a[(n = c[e]).i] = n.x(t);
            return a.join('');
          }
        );
      };
    }
    var I = D(
        function(t) {
          return 'none' === t
            ? U
            : (w ||
                ((w = document.createElement('DIV')),
                (C = document.documentElement),
                (M = document.defaultView)),
              (w.style.transform = t),
              (t = M.getComputedStyle(C.appendChild(w), null).getPropertyValue(
                'transform'
              )),
              C.removeChild(w),
              (t = t.slice(7, -1).split(',')),
              k(+t[0], +t[1], +t[2], +t[3], +t[4], +t[5]));
        },
        'px, ',
        'px)',
        'deg)'
      ),
      Y = D(
        function(t) {
          return null == t
            ? U
            : (R ||
                (R = document.createElementNS(
                  'http://www.w3.org/2000/svg',
                  'g'
                )),
              R.setAttribute('transform', t),
              (t = R.transform.baseVal.consolidate())
                ? ((t = t.matrix), k(t.a, t.b, t.c, t.d, t.e, t.f))
                : U);
        },
        ', ',
        ')',
        ')'
      ),
      j = Math.SQRT2;
    function L(t) {
      return ((t = Math.exp(t)) + 1 / t) / 2;
    }
    var P = function(t, n) {
      var e,
        r,
        i = t[0],
        o = t[1],
        u = t[2],
        a = n[0],
        c = n[1],
        f = n[2],
        s = a - i,
        l = c - o,
        h = s * s + l * l;
      if (h < 1e-12)
        (r = Math.log(f / u) / j),
          (e = function(t) {
            return [i + t * s, o + t * l, u * Math.exp(j * t * r)];
          });
      else {
        var d = Math.sqrt(h),
          p = (f * f - u * u + 4 * h) / (2 * u * 2 * d),
          _ = (f * f - u * u - 4 * h) / (2 * f * 2 * d),
          v = Math.log(Math.sqrt(p * p + 1) - p),
          g = Math.log(Math.sqrt(_ * _ + 1) - _);
        (r = (g - v) / j),
          (e = function(t) {
            var n,
              e = t * r,
              a = L(v),
              c =
                (u / (2 * d)) *
                (a * ((n = j * e + v), ((n = Math.exp(2 * n)) - 1) / (n + 1)) -
                  (function(t) {
                    return ((t = Math.exp(t)) - 1 / t) / 2;
                  })(v));
            return [i + c * s, o + c * l, (u * a) / L(j * e + v)];
          });
      }
      return (e.duration = 1e3 * r), e;
    };
    function B(t) {
      return function(n, e) {
        var i = t((n = Object(r.d)(n)).h, (e = Object(r.d)(e)).h),
          o = l(n.s, e.s),
          u = l(n.l, e.l),
          a = l(n.opacity, e.opacity);
        return function(t) {
          return (
            (n.h = i(t)), (n.s = o(t)), (n.l = u(t)), (n.opacity = a(t)), n + ''
          );
        };
      };
    }
    var F = B(f),
      z = B(l);
    function H(t, n) {
      var e = l((t = Object(r.e)(t)).l, (n = Object(r.e)(n)).l),
        i = l(t.a, n.a),
        o = l(t.b, n.b),
        u = l(t.opacity, n.opacity);
      return function(n) {
        return (
          (t.l = e(n)), (t.a = i(n)), (t.b = o(n)), (t.opacity = u(n)), t + ''
        );
      };
    }
    function q(t) {
      return function(n, e) {
        var i = t((n = Object(r.c)(n)).h, (e = Object(r.c)(e)).h),
          o = l(n.c, e.c),
          u = l(n.l, e.l),
          a = l(n.opacity, e.opacity);
        return function(t) {
          return (
            (n.h = i(t)), (n.c = o(t)), (n.l = u(t)), (n.opacity = a(t)), n + ''
          );
        };
      };
    }
    var $ = q(f),
      W = q(l);
    function G(t) {
      return (function n(e) {
        function i(n, i) {
          var o = t((n = Object(r.b)(n)).h, (i = Object(r.b)(i)).h),
            u = l(n.s, i.s),
            a = l(n.l, i.l),
            c = l(n.opacity, i.opacity);
          return function(t) {
            return (
              (n.h = o(t)),
              (n.s = u(t)),
              (n.l = a(Math.pow(t, e))),
              (n.opacity = c(t)),
              n + ''
            );
          };
        }
        return (e = +e), (i.gamma = n), i;
      })(1);
    }
    var V = G(f),
      Z = G(l);
    function X(t, n) {
      for (
        var e = 0, r = n.length - 1, i = n[0], o = new Array(r < 0 ? 0 : r);
        e < r;

      )
        o[e] = t(i, (i = n[++e]));
      return function(t) {
        var n = Math.max(0, Math.min(r - 1, Math.floor((t *= r))));
        return o[n](t - n);
      };
    }
    var K = function(t, n) {
      for (var e = new Array(n), r = 0; r < n; ++r) e[r] = t(r / (n - 1));
      return e;
    };
    e.d(n, 'interpolate', function() {
      return N;
    }),
      e.d(n, 'interpolateArray', function() {
        return v;
      }),
      e.d(n, 'interpolateBasis', function() {
        return o;
      }),
      e.d(n, 'interpolateBasisClosed', function() {
        return u;
      }),
      e.d(n, 'interpolateDate', function() {
        return g;
      }),
      e.d(n, 'interpolateDiscrete', function() {
        return T;
      }),
      e.d(n, 'interpolateHue', function() {
        return A;
      }),
      e.d(n, 'interpolateNumber', function() {
        return b;
      }),
      e.d(n, 'interpolateObject', function() {
        return y;
      }),
      e.d(n, 'interpolateRound', function() {
        return S;
      }),
      e.d(n, 'interpolateString', function() {
        return E;
      }),
      e.d(n, 'interpolateTransformCss', function() {
        return I;
      }),
      e.d(n, 'interpolateTransformSvg', function() {
        return Y;
      }),
      e.d(n, 'interpolateZoom', function() {
        return P;
      }),
      e.d(n, 'interpolateRgb', function() {
        return h;
      }),
      e.d(n, 'interpolateRgbBasis', function() {
        return p;
      }),
      e.d(n, 'interpolateRgbBasisClosed', function() {
        return _;
      }),
      e.d(n, 'interpolateHsl', function() {
        return F;
      }),
      e.d(n, 'interpolateHslLong', function() {
        return z;
      }),
      e.d(n, 'interpolateLab', function() {
        return H;
      }),
      e.d(n, 'interpolateHcl', function() {
        return $;
      }),
      e.d(n, 'interpolateHclLong', function() {
        return W;
      }),
      e.d(n, 'interpolateCubehelix', function() {
        return V;
      }),
      e.d(n, 'interpolateCubehelixLong', function() {
        return Z;
      }),
      e.d(n, 'piecewise', function() {
        return X;
      }),
      e.d(n, 'quantize', function() {
        return K;
      });
  },
  function(t, n, e) {
    'use strict';
    var r = e(4);
    const i = {
      getMaxDimensions(t) {
        const n = {},
          e = document.getElementById(t);
        return (
          (n.w = e.offsetWidth),
          (n.h = e.offsetHeight),
          n.w >= n.h ? (n.max = n.h) : (n.max = n.w),
          n.w >= n.h
            ? (n.direction = 'horizontal')
            : (n.direction = 'vertical'),
          n
        );
      },
      getStyleValue(t, n) {
        const e = t[n].value;
        return 'undefined' === e || void 0 === e ? t[n].defaultValue : e;
      },
      saveLocStorage(t, n, e) {
        (t.locStorage.state[n] = e),
          localStorage.setItem(t.localStorageId, JSON.stringify(t.locStorage));
      },
      renderErrorMessage(t, n, e) {
        const i = t
          .append('div')
          .attr('id', 'error')
          .append('div')
          .attr('class', 'row');
        i
          .append('svg')
          .attr('width', '40')
          .attr('height', '19')
          .attr('viewbox', '0 0 40 19')
          .attr('fill', 'none')
          .append('path')
          .attr('transform', 'scale(0.2)')
          .attr('d', r.e)
          .attr('fill', '#ABAF2C'),
          i
            .append('h2')
            .attr('id', 'title')
            .text(n),
          i
            .append('p')
            .attr('id', 'message')
            .text(e),
          console.log(`### ${n} : ${e} ###`);
      },
      getScreenCoords: (t, n, e) => ({
        x: e.e + t * e.a + n * e.c,
        y: e.f + t * e.b + n * e.d,
      }),
      getScreenCoordsCanvas: (t, n, e) => ({
        x: e.x + t * e.s,
        y: e.y + n * e.s,
      }),
      loadImage: async t =>
        new Promise((n, e) => {
          const r = new Image();
          r.addEventListener('load', () => n(r)),
            r.addEventListener('error', t => e(t)),
            (r.src = t);
        }),
    };
    n.a = i;
  },
  function(t, n, e) {
    'use strict';
    e.d(n, 'b', function() {
      return r;
    }),
      e.d(n, 'f', function() {
        return i;
      }),
      e.d(n, 'd', function() {
        return o;
      }),
      e.d(n, 'c', function() {
        return u;
      }),
      e.d(n, 'g', function() {
        return a;
      }),
      e.d(n, 'a', function() {
        return c;
      }),
      e.d(n, 'e', function() {
        return f;
      });
    const r = 'ERROR',
      i = 'PLEASE RESIZE',
      o = 'LOADING DATA',
      u = 'Something went wrong:',
      a =
        'This visualization deserves more space! Please make your box bigger.',
      c = '...please be patient...',
      f =
        'M0 50.6532C0 42.1596 2.52489 35.7895 7.57468 31.5427C12.6245 26.8712 19.7783 24.7479 28.6155 24.7479C34.0861 24.7479 38.715 25.5972 42.5024 27.2959C45.8689 28.9946 47.973 31.118 47.973 34.5154C47.973 36.2141 47.5522 37.4882 46.7105 38.7622C45.8689 40.0362 45.0273 41.3103 44.6064 41.3103C42.9232 40.4609 41.2399 40.0362 39.1358 39.1869C37.0318 38.7622 34.5069 38.3375 31.5612 38.3375C21.0408 38.3375 15.991 43.8583 15.991 54.8999V93.9702H0.841631C0 94.3949 0 50.6532 0 50.6532ZM100.154 74.0104H74.4844C67.3305 74.0104 62.2807 72.7364 58.4934 70.613C54.706 68.0649 53.0228 64.2428 53.0228 59.1467C53.0228 55.3246 53.8644 51.0778 55.5477 46.8311C57.2309 42.5843 59.335 38.3375 62.2807 34.0907C65.2264 29.844 68.1721 26.0219 71.9595 21.7751C75.7468 17.953 79.5341 14.5556 83.3215 11.5829C87.1088 8.61012 91.317 6.48674 95.1043 4.36335C98.8917 2.66464 102.679 1.81529 105.625 1.81529C108.57 1.81529 111.095 2.23996 112.779 2.66464C114.462 3.514 115.303 3.93867 115.724 3.93867V59.9961H119.932C125.403 59.9961 127.928 62.1194 127.928 66.7909C127.928 68.4896 127.507 70.1883 127.086 71.4623C126.665 72.7364 126.245 73.5857 125.824 74.0104H115.724V94.3949H100.575L100.154 74.0104ZM100.154 59.9961V17.5283C97.2084 19.227 93.8419 21.3504 90.0545 24.3232C86.2672 27.2959 82.9007 30.6933 79.955 34.0907C77.0092 37.4882 74.0635 41.3103 71.9595 45.1324C69.8554 48.9544 69.0137 51.9272 69.0137 54.8999C69.0137 57.0233 69.8554 58.722 71.5386 59.1467C73.2219 59.5714 75.326 59.9961 77.8509 59.9961H100.154ZM134.535 81.0045C135.793 80.1562 137.892 78.8839 140.41 76.7634L149.222 70.4018C152.58 67.8571 155.517 65.7366 158.874 63.192C162.231 60.6473 164.749 58.5268 166.848 56.4062C171.883 51.7411 176.08 47.5 178.598 43.2589C181.535 39.0179 182.794 34.7768 182.794 29.6875C182.794 27.567 182.375 25.4464 181.535 23.75C180.696 21.6295 179.437 19.933 178.178 18.6607C176.5 16.9643 174.821 16.1161 172.303 14.8438C169.785 13.9955 166.848 13.5714 163.49 13.5714C160.133 13.5714 157.196 13.9955 154.678 14.8438C152.16 15.692 150.062 16.9643 148.383 18.2366C146.704 19.5089 145.445 20.7812 144.606 22.4777C143.767 23.75 142.928 25.0223 142.508 25.8705C141.669 25.8705 140.829 25.4464 139.99 25.0223C139.151 24.5982 138.311 24.1741 137.472 23.3259C136.633 22.4777 135.793 21.6295 135.374 20.7812C134.954 19.933 134.535 18.6607 134.535 17.8125C134.535 16.5402 134.954 15.2679 135.374 13.9955C135.793 12.7232 136.633 11.875 137.052 10.6027C137.472 10.1786 138.311 8.90625 139.57 7.63393C140.829 6.36161 142.508 5.08929 145.026 4.24107C147.124 2.96875 150.062 2.12054 153.419 1.27232C156.776 0.424107 160.553 0 165.169 0C170.624 0 175.66 0.848214 179.857 2.12054C184.053 3.81696 187.83 5.51339 190.768 8.05804C193.705 10.6027 195.804 13.5714 197.482 17.3884C199.161 20.7813 199.58 24.5982 199.58 28.8393C199.58 31.808 199.161 34.7768 198.321 37.7455C197.482 40.7143 196.643 42.8348 195.384 45.3795C194.125 47.9241 192.866 49.6205 191.607 51.7411C189.928 53.8616 188.669 55.558 186.991 57.2545C185.312 58.9509 183.214 61.0714 180.696 63.192C178.178 65.7366 175.241 67.8571 172.303 70.4018C169.366 72.9464 166.848 75.067 164.33 76.7634C161.812 78.8839 159.714 80.1562 158.455 81.0045H200V95H134.535V81.0045Z';
  },
  function(t, n, e) {
    'use strict';
    var r =
      (this && this.__assign) ||
      function() {
        return (r =
          Object.assign ||
          function(t) {
            for (var n, e = 1, r = arguments.length; e < r; e++)
              for (var i in (n = arguments[e]))
                Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
            return t;
          }).apply(this, arguments);
      };
    Object.defineProperty(n, '__esModule', {value: !0});
    /*!
  Copyright 2018 Google LLC

  Licensed under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License.
  You may obtain a copy of the License at

  https://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  See the License for the specific language governing permissions and
  limitations under the License.
*/
    var i = e(11),
      o = e(7);
    !(function(t) {
      for (var e in t) n.hasOwnProperty(e) || (n[e] = t[e]);
    })(e(7)),
      (n.getWidth = function() {
        return document.body.clientWidth;
      }),
      (n.getHeight = function() {
        return document.documentElement.clientHeight;
      }),
      (n.getComponentId = function() {
        var t = i(window.location.href, !0).query;
        if (t.dscId) return t.dscId;
        throw new Error(
          'dscId must be in the query parameters. This is a bug in ds-component, please file a bug: https://github.com/googledatastudio/ds-component/issues/new'
        );
      }),
      (n.parseImage = function(t) {
        var n = t.split('  '),
          e = n[0],
          r = n[1];
        return {altText: n[2], originalUrl: e, proxiedUrl: r};
      });
    var u = function(t) {
        return (
          t.type === o.ConfigDataElementType.DIMENSION ||
          t.type === o.ConfigDataElementType.METRIC
        );
      },
      a = function(t) {
        return t === o.ConfigDataElementType.DIMENSION ? -1 : 1;
      },
      c = function(t) {
        var n = [];
        t.config.data.forEach(function(t) {
          t.elements.forEach(function(t) {
            n.push(t);
          });
        });
        var e,
          r = n.filter(u),
          i =
            ((e = function(t, n) {
              return a(t.type) - a(n.type);
            }),
            r
              .map(function(t, n) {
                return {item: t, index: n};
              })
              .sort(function(t, n) {
                return e(t.item, n.item) || t.index - n.index;
              })
              .map(function(t) {
                return t.item;
              })),
          o = [];
        return (
          i.forEach(function(t) {
            t.value.forEach(function() {
              return o.push(t.id);
            });
          }),
          o
        );
      },
      f = function(t) {
        var n,
          e = c(t),
          r = (((n = {})[o.TableType.DEFAULT] = []), n);
        return (
          t.dataResponse.tables.forEach(function(t) {
            var n = t.rows.map(
              (function(t) {
                return function(n) {
                  var e,
                    r,
                    i = {};
                  return (
                    ((e = n),
                    (r = t),
                    e.length < r.length
                      ? e.map(function(t, n) {
                          return [t, r[n]];
                        })
                      : r.map(function(t, n) {
                          return [e[n], t];
                        })).forEach(function(t) {
                      var n = t[0],
                        e = t[1];
                      void 0 === i[e] && (i[e] = []), i[e].push(n);
                    }, {}),
                    i
                  );
                };
              })(e)
            );
            r[t.id] = n;
          }),
          r
        );
      },
      s = function(t) {
        var e,
          i = n.fieldsByConfigId(t),
          u = c(t),
          a = {},
          f = u.map(function(t) {
            void 0 === a[t] ? (a[t] = 0) : a[t]++;
            var n = a[t],
              e = i[t][n];
            return r({}, e, {configId: t});
          }),
          s = (((e = {})[o.TableType.DEFAULT] = {headers: [], rows: []}), e);
        return (
          t.dataResponse.tables.forEach(function(t) {
            s[t.id] = {headers: f, rows: t.rows};
          }),
          s
        );
      };
    n.fieldsByConfigId = function(t) {
      var n = (function(t) {
          return t.fields.reduce(function(t, n) {
            return (t[n.id] = n), t;
          }, {});
        })(t),
        e = {};
      return (
        t.config.data.forEach(function(t) {
          t.elements.forEach(function(t) {
            e[t.id] = t.value.map(function(t) {
              return n[t];
            });
          });
        }),
        e
      );
    };
    var l = function(t) {
        var n = {};
        return (
          (t.config.style || []).forEach(function(t) {
            t.elements.forEach(function(t) {
              if (void 0 !== n[t.id])
                throw new Error(
                  "styleIds must be unique. Your styleId: '" +
                    t.id +
                    "' is used more than once."
                );
              n[t.id] = {value: t.value, defaultValue: t.defaultValue};
            });
          }, {}),
          n
        );
      },
      h = function(t) {
        return t.config.themeStyle;
      },
      d = function(t) {
        switch (t) {
          case o.DSInteractionType.FILTER:
            return o.InteractionType.FILTER;
        }
      },
      p = function(t) {
        var n = t.config.interactions;
        return void 0 === n
          ? {}
          : n.reduce(function(t, n) {
              var e = n.supportedActions.map(d),
                r = {type: d(n.value.type), data: n.value.data};
              return (t[n.id] = {value: r, supportedActions: e}), t;
            }, {});
      };
    (n.tableTransform = function(t) {
      return {
        tables: s(t),
        fields: n.fieldsByConfigId(t),
        style: l(t),
        theme: h(t),
        interactions: p(t),
      };
    }),
      (n.objectTransform = function(t) {
        return {
          tables: f(t),
          fields: n.fieldsByConfigId(t),
          style: l(t),
          theme: h(t),
          interactions: p(t),
        };
      }),
      (n.subscribeToData = function(t, e) {
        if (
          e.transform === n.tableTransform ||
          e.transform === n.objectTransform
        ) {
          var r = function(n) {
            n.data.type === o.MessageType.RENDER
              ? t(e.transform(n.data))
              : console.error(
                  'MessageType: ' +
                    n.data.type +
                    ' is not supported by this version of the library.'
                );
          };
          window.addEventListener('message', r);
          var i = {
            componentId: n.getComponentId(),
            type: o.ToDSMessageType.VIZ_READY,
          };
          return (
            window.parent.postMessage(i, '*'),
            function() {
              return window.removeEventListener('message', r);
            }
          );
        }
        throw new Error('Only the built in transform functions are supported.');
      }),
      (n.sendInteraction = function(t, e, r) {
        var i = n.getComponentId(),
          u = {
            type: o.ToDSMessageType.INTERACTION,
            id: t,
            data: r,
            componentId: i,
          };
        window.parent.postMessage(u, '*');
      }),
      (n.clearInteraction = function(t, e) {
        n.sendInteraction(t, e, void 0);
      });
  },
  function(t, n, e) {
    'use strict';
    e.r(n);
    var r = function(t, n) {
        if (
          (e = (t = n ? t.toExponential(n - 1) : t.toExponential()).indexOf(
            'e'
          )) < 0
        )
          return null;
        var e,
          r = t.slice(0, e);
        return [r.length > 1 ? r[0] + r.slice(2) : r, +t.slice(e + 1)];
      },
      i = function(t) {
        return (t = r(Math.abs(t))) ? t[1] : NaN;
      },
      o = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
    function u(t) {
      return new a(t);
    }
    function a(t) {
      if (!(n = o.exec(t))) throw new Error('invalid format: ' + t);
      var n;
      (this.fill = n[1] || ' '),
        (this.align = n[2] || '>'),
        (this.sign = n[3] || '-'),
        (this.symbol = n[4] || ''),
        (this.zero = !!n[5]),
        (this.width = n[6] && +n[6]),
        (this.comma = !!n[7]),
        (this.precision = n[8] && +n[8].slice(1)),
        (this.trim = !!n[9]),
        (this.type = n[10] || '');
    }
    (u.prototype = a.prototype),
      (a.prototype.toString = function() {
        return (
          this.fill +
          this.align +
          this.sign +
          this.symbol +
          (this.zero ? '0' : '') +
          (null == this.width ? '' : Math.max(1, 0 | this.width)) +
          (this.comma ? ',' : '') +
          (null == this.precision
            ? ''
            : '.' + Math.max(0, 0 | this.precision)) +
          (this.trim ? '~' : '') +
          this.type
        );
      });
    var c,
      f,
      s,
      l,
      h = function(t) {
        t: for (var n, e = t.length, r = 1, i = -1; r < e; ++r)
          switch (t[r]) {
            case '.':
              i = n = r;
              break;
            case '0':
              0 === i && (i = r), (n = r);
              break;
            default:
              if (i > 0) {
                if (!+t[r]) break t;
                i = 0;
              }
          }
        return i > 0 ? t.slice(0, i) + t.slice(n + 1) : t;
      },
      d = function(t, n) {
        var e = r(t, n);
        if (!e) return t + '';
        var i = e[0],
          o = e[1];
        return o < 0
          ? '0.' + new Array(-o).join('0') + i
          : i.length > o + 1
          ? i.slice(0, o + 1) + '.' + i.slice(o + 1)
          : i + new Array(o - i.length + 2).join('0');
      },
      p = {
        '%': function(t, n) {
          return (100 * t).toFixed(n);
        },
        b: function(t) {
          return Math.round(t).toString(2);
        },
        c: function(t) {
          return t + '';
        },
        d: function(t) {
          return Math.round(t).toString(10);
        },
        e: function(t, n) {
          return t.toExponential(n);
        },
        f: function(t, n) {
          return t.toFixed(n);
        },
        g: function(t, n) {
          return t.toPrecision(n);
        },
        o: function(t) {
          return Math.round(t).toString(8);
        },
        p: function(t, n) {
          return d(100 * t, n);
        },
        r: d,
        s: function(t, n) {
          var e = r(t, n);
          if (!e) return t + '';
          var i = e[0],
            o = e[1],
            u = o - (c = 3 * Math.max(-8, Math.min(8, Math.floor(o / 3)))) + 1,
            a = i.length;
          return u === a
            ? i
            : u > a
            ? i + new Array(u - a + 1).join('0')
            : u > 0
            ? i.slice(0, u) + '.' + i.slice(u)
            : '0.' +
              new Array(1 - u).join('0') +
              r(t, Math.max(0, n + u - 1))[0];
        },
        X: function(t) {
          return Math.round(t)
            .toString(16)
            .toUpperCase();
        },
        x: function(t) {
          return Math.round(t).toString(16);
        },
      },
      _ = function(t) {
        return t;
      },
      v = [
        'y',
        'z',
        'a',
        'f',
        'p',
        'n',
        'µ',
        'm',
        '',
        'k',
        'M',
        'G',
        'T',
        'P',
        'E',
        'Z',
        'Y',
      ],
      g = function(t) {
        var n,
          e,
          r =
            t.grouping && t.thousands
              ? ((n = t.grouping),
                (e = t.thousands),
                function(t, r) {
                  for (
                    var i = t.length, o = [], u = 0, a = n[0], c = 0;
                    i > 0 &&
                    a > 0 &&
                    (c + a + 1 > r && (a = Math.max(1, r - c)),
                    o.push(t.substring((i -= a), i + a)),
                    !((c += a + 1) > r));

                  )
                    a = n[(u = (u + 1) % n.length)];
                  return o.reverse().join(e);
                })
              : _,
          o = t.currency,
          a = t.decimal,
          f = t.numerals
            ? (function(t) {
                return function(n) {
                  return n.replace(/[0-9]/g, function(n) {
                    return t[+n];
                  });
                };
              })(t.numerals)
            : _,
          s = t.percent || '%';
        function l(t) {
          var n = (t = u(t)).fill,
            e = t.align,
            i = t.sign,
            l = t.symbol,
            d = t.zero,
            _ = t.width,
            g = t.comma,
            b = t.precision,
            y = t.trim,
            m = t.type;
          'n' === m
            ? ((g = !0), (m = 'g'))
            : p[m] || (null == b && (b = 12), (y = !0), (m = 'g')),
            (d || ('0' === n && '=' === e)) && ((d = !0), (n = '0'), (e = '='));
          var x =
              '$' === l
                ? o[0]
                : '#' === l && /[boxX]/.test(m)
                ? '0' + m.toLowerCase()
                : '',
            w = '$' === l ? o[1] : /[%p]/.test(m) ? s : '',
            C = p[m],
            M = /[defgprs%]/.test(m);
          function R(t) {
            var o,
              u,
              s,
              l = x,
              p = w;
            if ('c' === m) (p = C(t) + p), (t = '');
            else {
              var R = (t = +t) < 0;
              if (
                ((t = C(Math.abs(t), b)),
                y && (t = h(t)),
                R && 0 == +t && (R = !1),
                (l =
                  (R
                    ? '(' === i
                      ? i
                      : '-'
                    : '-' === i || '(' === i
                    ? ''
                    : i) + l),
                (p =
                  ('s' === m ? v[8 + c / 3] : '') +
                  p +
                  (R && '(' === i ? ')' : '')),
                M)
              )
                for (o = -1, u = t.length; ++o < u; )
                  if (48 > (s = t.charCodeAt(o)) || s > 57) {
                    (p = (46 === s ? a + t.slice(o + 1) : t.slice(o)) + p),
                      (t = t.slice(0, o));
                    break;
                  }
            }
            g && !d && (t = r(t, 1 / 0));
            var E = l.length + t.length + p.length,
              N = E < _ ? new Array(_ - E + 1).join(n) : '';
            switch (
              (g &&
                d &&
                ((t = r(N + t, N.length ? _ - p.length : 1 / 0)), (N = '')),
              e)
            ) {
              case '<':
                t = l + t + p + N;
                break;
              case '=':
                t = l + N + t + p;
                break;
              case '^':
                t = N.slice(0, (E = N.length >> 1)) + l + t + p + N.slice(E);
                break;
              default:
                t = N + l + t + p;
            }
            return f(t);
          }
          return (
            (b =
              null == b
                ? 6
                : /[gprs]/.test(m)
                ? Math.max(1, Math.min(21, b))
                : Math.max(0, Math.min(20, b))),
            (R.toString = function() {
              return t + '';
            }),
            R
          );
        }
        return {
          format: l,
          formatPrefix: function(t, n) {
            var e = l((((t = u(t)).type = 'f'), t)),
              r = 3 * Math.max(-8, Math.min(8, Math.floor(i(n) / 3))),
              o = Math.pow(10, -r),
              a = v[8 + r / 3];
            return function(t) {
              return e(o * t) + a;
            };
          },
        };
      };
    function b(t) {
      return (f = g(t)), (s = f.format), (l = f.formatPrefix), f;
    }
    b({decimal: '.', thousands: ',', grouping: [3], currency: ['$', '']});
    var y = function(t) {
        return Math.max(0, -i(Math.abs(t)));
      },
      m = function(t, n) {
        return Math.max(
          0,
          3 * Math.max(-8, Math.min(8, Math.floor(i(n) / 3))) - i(Math.abs(t))
        );
      },
      x = function(t, n) {
        return (
          (t = Math.abs(t)), (n = Math.abs(n) - t), Math.max(0, i(n) - i(t)) + 1
        );
      };
    e.d(n, 'formatDefaultLocale', function() {
      return b;
    }),
      e.d(n, 'format', function() {
        return s;
      }),
      e.d(n, 'formatPrefix', function() {
        return l;
      }),
      e.d(n, 'formatLocale', function() {
        return g;
      }),
      e.d(n, 'formatSpecifier', function() {
        return u;
      }),
      e.d(n, 'precisionFixed', function() {
        return y;
      }),
      e.d(n, 'precisionPrefix', function() {
        return m;
      }),
      e.d(n, 'precisionRound', function() {
        return x;
      });
  },
  function(t, n, e) {
    'use strict';
    Object.defineProperty(n, '__esModule', {value: !0}),
      (function(t) {
        (t.METRIC = 'METRIC'), (t.DIMENSION = 'DIMENSION');
      })(n.ConceptType || (n.ConceptType = {})),
      (function(t) {
        t.RENDER = 'RENDER';
      })(n.MessageType || (n.MessageType = {})),
      (function(t) {
        (t.YEAR = 'YEAR'),
          (t.YEAR_QUARTER = 'YEAR_QUARTER'),
          (t.YEAR_MONTH = 'YEAR_MONTH'),
          (t.YEAR_WEEK = 'YEAR_WEEK'),
          (t.YEAR_MONTH_DAY = 'YEAR_MONTH_DAY'),
          (t.YEAR_MONTH_DAY_HOUR = 'YEAR_MONTH_DAY_HOUR'),
          (t.QUARTER = 'QUARTER'),
          (t.MONTH = 'MONTH'),
          (t.WEEK = 'WEEK'),
          (t.MONTH_DAY = 'MONTH_DAY'),
          (t.DAY_OF_WEEK = 'DAY_OF_WEEK'),
          (t.DAY = 'DAY'),
          (t.HOUR = 'HOUR'),
          (t.MINUTE = 'MINUTE'),
          (t.DURATION = 'DURATION'),
          (t.COUNTRY = 'COUNTRY'),
          (t.COUNTRY_CODE = 'COUNTRY_CODE'),
          (t.CONTINENT = 'CONTINENT'),
          (t.CONTINENT_CODE = 'CONTINENT_CODE'),
          (t.SUB_CONTINENT = 'SUB_CONTINENT'),
          (t.SUB_CONTINENT_CODE = 'SUB_CONTINENT_CODE'),
          (t.REGION = 'REGION'),
          (t.REGION_CODE = 'REGION_CODE'),
          (t.CITY = 'CITY'),
          (t.CITY_CODE = 'CITY_CODE'),
          (t.METRO_CODE = 'METRO_CODE'),
          (t.LATITUDE_LONGITUDE = 'LATITUDE_LONGITUDE'),
          (t.NUMBER = 'NUMBER'),
          (t.PERCENT = 'PERCENT'),
          (t.TEXT = 'TEXT'),
          (t.BOOLEAN = 'BOOLEAN'),
          (t.URL = 'URL'),
          (t.IMAGE = 'IMAGE'),
          (t.CURRENCY_AED = 'CURRENCY_AED'),
          (t.CURRENCY_ALL = 'CURRENCY_ALL'),
          (t.CURRENCY_ARS = 'CURRENCY_ARS'),
          (t.CURRENCY_AUD = 'CURRENCY_AUD'),
          (t.CURRENCY_BDT = 'CURRENCY_BDT'),
          (t.CURRENCY_BGN = 'CURRENCY_BGN'),
          (t.CURRENCY_BOB = 'CURRENCY_BOB'),
          (t.CURRENCY_BRL = 'CURRENCY_BRL'),
          (t.CURRENCY_CAD = 'CURRENCY_CAD'),
          (t.CURRENCY_CDF = 'CURRENCY_CDF'),
          (t.CURRENCY_CHF = 'CURRENCY_CHF'),
          (t.CURRENCY_CLP = 'CURRENCY_CLP'),
          (t.CURRENCY_CNY = 'CURRENCY_CNY'),
          (t.CURRENCY_COP = 'CURRENCY_COP'),
          (t.CURRENCY_CRC = 'CURRENCY_CRC'),
          (t.CURRENCY_CZK = 'CURRENCY_CZK'),
          (t.CURRENCY_DKK = 'CURRENCY_DKK'),
          (t.CURRENCY_DOP = 'CURRENCY_DOP'),
          (t.CURRENCY_EGP = 'CURRENCY_EGP'),
          (t.CURRENCY_ETB = 'CURRENCY_ETB'),
          (t.CURRENCY_EUR = 'CURRENCY_EUR'),
          (t.CURRENCY_GBP = 'CURRENCY_GBP'),
          (t.CURRENCY_HKD = 'CURRENCY_HKD'),
          (t.CURRENCY_HRK = 'CURRENCY_HRK'),
          (t.CURRENCY_HUF = 'CURRENCY_HUF'),
          (t.CURRENCY_IDR = 'CURRENCY_IDR'),
          (t.CURRENCY_ILS = 'CURRENCY_ILS'),
          (t.CURRENCY_INR = 'CURRENCY_INR'),
          (t.CURRENCY_IRR = 'CURRENCY_IRR'),
          (t.CURRENCY_ISK = 'CURRENCY_ISK'),
          (t.CURRENCY_JMD = 'CURRENCY_JMD'),
          (t.CURRENCY_JPY = 'CURRENCY_JPY'),
          (t.CURRENCY_KRW = 'CURRENCY_KRW'),
          (t.CURRENCY_LKR = 'CURRENCY_LKR'),
          (t.CURRENCY_LTL = 'CURRENCY_LTL'),
          (t.CURRENCY_MNT = 'CURRENCY_MNT'),
          (t.CURRENCY_MVR = 'CURRENCY_MVR'),
          (t.CURRENCY_MXN = 'CURRENCY_MXN'),
          (t.CURRENCY_MYR = 'CURRENCY_MYR'),
          (t.CURRENCY_NOK = 'CURRENCY_NOK'),
          (t.CURRENCY_NZD = 'CURRENCY_NZD'),
          (t.CURRENCY_PAB = 'CURRENCY_PAB'),
          (t.CURRENCY_PEN = 'CURRENCY_PEN'),
          (t.CURRENCY_PHP = 'CURRENCY_PHP'),
          (t.CURRENCY_PKR = 'CURRENCY_PKR'),
          (t.CURRENCY_PLN = 'CURRENCY_PLN'),
          (t.CURRENCY_RON = 'CURRENCY_RON'),
          (t.CURRENCY_RSD = 'CURRENCY_RSD'),
          (t.CURRENCY_RUB = 'CURRENCY_RUB'),
          (t.CURRENCY_SAR = 'CURRENCY_SAR'),
          (t.CURRENCY_SEK = 'CURRENCY_SEK'),
          (t.CURRENCY_SGD = 'CURRENCY_SGD'),
          (t.CURRENCY_THB = 'CURRENCY_THB'),
          (t.CURRENCY_TRY = 'CURRENCY_TRY'),
          (t.CURRENCY_TWD = 'CURRENCY_TWD'),
          (t.CURRENCY_TZS = 'CURRENCY_TZS'),
          (t.CURRENCY_UAH = 'CURRENCY_UAH'),
          (t.CURRENCY_USD = 'CURRENCY_USD'),
          (t.CURRENCY_UYU = 'CURRENCY_UYU'),
          (t.CURRENCY_VEF = 'CURRENCY_VEF'),
          (t.CURRENCY_VND = 'CURRENCY_VND'),
          (t.CURRENCY_YER = 'CURRENCY_YER'),
          (t.CURRENCY_ZAR = 'CURRENCY_ZAR');
      })(n.FieldType || (n.FieldType = {})),
      (function(t) {
        (t.DEFAULT = 'DEFAULT'),
          (t.COMPARISON = 'COMPARISON'),
          (t.SUMMARY = 'SUMMARY');
      })(n.TableType || (n.TableType = {})),
      (function(t) {
        (t.METRIC = 'METRIC'),
          (t.DIMENSION = 'DIMENSION'),
          (t.SORT = 'SORT'),
          (t.MAX_RESULTS = 'MAX_RESULTS');
      })(n.ConfigDataElementType || (n.ConfigDataElementType = {})),
      (function(t) {
        (t.TEXTINPUT = 'TEXTINPUT'),
          (t.SELECT_SINGLE = 'SELECT_SINGLE'),
          (t.CHECKBOX = 'CHECKBOX'),
          (t.FONT_COLOR = 'FONT_COLOR'),
          (t.FONT_SIZE = 'FONT_SIZE'),
          (t.FONT_FAMILY = 'FONT_FAMILY'),
          (t.FILL_COLOR = 'FILL_COLOR'),
          (t.BORDER_COLOR = 'BORDER_COLOR'),
          (t.AXIS_COLOR = 'AXIS_COLOR'),
          (t.GRID_COLOR = 'GRID_COLOR'),
          (t.OPACITY = 'OPACITY'),
          (t.LINE_WEIGHT = 'LINE_WEIGHT'),
          (t.LINE_STYLE = 'LINE_STYLE'),
          (t.BORDER_RADIUS = 'BORDER_RADIUS'),
          (t.INTERVAL = 'INTERVAL'),
          (t.SELECT_RADIO = 'SELECT_RADIO');
      })(n.ConfigStyleElementType || (n.ConfigStyleElementType = {})),
      (function(t) {
        t.FILTER = 'FILTER';
      })(n.DSInteractionType || (n.DSInteractionType = {})),
      (function(t) {
        (t.VIZ_READY = 'vizReady'), (t.INTERACTION = 'vizAction');
      })(n.ToDSMessageType || (n.ToDSMessageType = {})),
      (function(t) {
        t.FILTER = 'FILTER';
      })(n.InteractionType || (n.InteractionType = {}));
  },
  function(t, n) {
    var e;
    e = (function() {
      return this;
    })();
    try {
      e = e || new Function('return this')();
    } catch (t) {
      'object' == typeof window && (e = window);
    }
    t.exports = e;
  },
  function(t, n, e) {
    'use strict';
    e.r(n);
    var r = function(t, n) {
        return t < n ? -1 : t > n ? 1 : t >= n ? 0 : NaN;
      },
      i = function(t) {
        var n;
        return (
          1 === t.length &&
            ((n = t),
            (t = function(t, e) {
              return r(n(t), e);
            })),
          {
            left: function(n, e, r, i) {
              for (null == r && (r = 0), null == i && (i = n.length); r < i; ) {
                var o = (r + i) >>> 1;
                t(n[o], e) < 0 ? (r = o + 1) : (i = o);
              }
              return r;
            },
            right: function(n, e, r, i) {
              for (null == r && (r = 0), null == i && (i = n.length); r < i; ) {
                var o = (r + i) >>> 1;
                t(n[o], e) > 0 ? (i = o) : (r = o + 1);
              }
              return r;
            },
          }
        );
      };
    var o = i(r),
      u = o.right,
      a = o.left,
      c = u;
    function f(t, n) {
      let e = 0;
      if (void 0 === n) for (const n of t) null != n && n >= n && ++e;
      else {
        let r = -1;
        for (let i of t) null != (i = n(i, ++r, t)) && i >= i && ++e;
      }
      return e;
    }
    function s(t) {
      return 0 | t.length;
    }
    function l(t) {
      return !(t > 0);
    }
    function h(t) {
      return 'object' != typeof t || 'length' in t ? t : Array.from(t);
    }
    function d(...t) {
      const n =
          'function' == typeof t[t.length - 1] &&
          (function(t) {
            return n => t(...n);
          })(t.pop()),
        e = (t = t.map(h)).map(s),
        r = t.length - 1,
        i = new Array(r + 1).fill(0),
        o = [];
      if (r < 0 || e.some(l)) return o;
      for (;;) {
        o.push(i.map((n, e) => t[e][n]));
        let u = r;
        for (; ++i[u] === e[u]; ) {
          if (0 === u) return n ? o.map(n) : o;
          i[u--] = 0;
        }
      }
    }
    var p = function(t, n) {
      return n < t ? -1 : n > t ? 1 : n >= t ? 0 : NaN;
    };
    function _(t, n) {
      let e,
        r = 0,
        i = 0,
        o = 0;
      if (void 0 === n)
        for (let n of t)
          null != n &&
            (n = +n) >= n &&
            (o += (e = n - i) * (n - (i += e / ++r)));
      else {
        let u = -1;
        for (let a of t)
          null != (a = n(a, ++u, t)) &&
            (a = +a) >= a &&
            (o += (e = a - i) * (a - (i += e / ++r)));
      }
      if (r > 1) return o / (r - 1);
    }
    function v(t, n) {
      const e = _(t, n);
      return e ? Math.sqrt(e) : e;
    }
    var g = function(t, n) {
        let e, r;
        if (void 0 === n)
          for (const n of t)
            null != n &&
              (void 0 === e
                ? n >= n && (e = r = n)
                : (e > n && (e = n), r < n && (r = n)));
        else {
          let i = -1;
          for (let o of t)
            null != (o = n(o, ++i, t)) &&
              (void 0 === e
                ? o >= o && (e = r = o)
                : (e > o && (e = o), r < o && (r = o)));
        }
        return [e, r];
      },
      b = function(t) {
        return t;
      };
    function y(t, ...n) {
      return C(t, b, b, n);
    }
    function m(t, ...n) {
      return C(t, Array.from, b, n);
    }
    function x(t, n, ...e) {
      return C(t, b, n, e);
    }
    function w(t, n, ...e) {
      return C(t, Array.from, n, e);
    }
    function C(t, n, e, r) {
      return (function t(i, o) {
        if (o >= r.length) return e(i);
        const u = new Map(),
          a = r[o++];
        let c = -1;
        for (const t of i) {
          const n = a(t, ++c, i),
            e = u.get(n);
          e ? e.push(t) : u.set(n, [t]);
        }
        for (const [n, e] of u) u.set(n, t(e, o));
        return n(u);
      })(t, 0);
    }
    var M = Array.prototype,
      R = M.slice,
      E = M.map,
      N = function(t) {
        return function() {
          return t;
        };
      },
      T = function(t, n, e) {
        (t = +t),
          (n = +n),
          (e =
            (i = arguments.length) < 2
              ? ((n = t), (t = 0), 1)
              : i < 3
              ? 1
              : +e);
        for (
          var r = -1,
            i = 0 | Math.max(0, Math.ceil((n - t) / e)),
            o = new Array(i);
          ++r < i;

        )
          o[r] = t + r * e;
        return o;
      },
      A = Math.sqrt(50),
      S = Math.sqrt(10),
      O = Math.sqrt(2),
      U = function(t, n, e) {
        var r,
          i,
          o,
          u,
          a = -1;
        if (((e = +e), (t = +t) === (n = +n) && e > 0)) return [t];
        if (
          ((r = n < t) && ((i = t), (t = n), (n = i)),
          0 === (u = k(t, n, e)) || !isFinite(u))
        )
          return [];
        if (u > 0)
          for (
            t = Math.ceil(t / u),
              n = Math.floor(n / u),
              o = new Array((i = Math.ceil(n - t + 1)));
            ++a < i;

          )
            o[a] = (t + a) * u;
        else
          for (
            t = Math.floor(t * u),
              n = Math.ceil(n * u),
              o = new Array((i = Math.ceil(t - n + 1)));
            ++a < i;

          )
            o[a] = (t - a) / u;
        return r && o.reverse(), o;
      };
    function k(t, n, e) {
      var r = (n - t) / Math.max(0, e),
        i = Math.floor(Math.log(r) / Math.LN10),
        o = r / Math.pow(10, i);
      return i >= 0
        ? (o >= A ? 10 : o >= S ? 5 : o >= O ? 2 : 1) * Math.pow(10, i)
        : -Math.pow(10, -i) / (o >= A ? 10 : o >= S ? 5 : o >= O ? 2 : 1);
    }
    function D(t, n, e) {
      var r = Math.abs(n - t) / Math.max(0, e),
        i = Math.pow(10, Math.floor(Math.log(r) / Math.LN10)),
        o = r / i;
      return (
        o >= A ? (i *= 10) : o >= S ? (i *= 5) : o >= O && (i *= 2),
        n < t ? -i : i
      );
    }
    var I = function(t) {
        return Math.ceil(Math.log(t.length) / Math.LN2) + 1;
      },
      Y = function() {
        var t = b,
          n = g,
          e = I;
        function r(r) {
          Array.isArray(r) || (r = Array.from(r));
          var i,
            o,
            u = r.length,
            a = new Array(u);
          for (i = 0; i < u; ++i) a[i] = t(r[i], i, r);
          var f = n(a),
            s = f[0],
            l = f[1],
            h = e(a, s, l);
          Array.isArray(h) ||
            ((h = D(s, l, h)), (h = T(Math.ceil(s / h) * h, l, h)));
          for (var d = h.length; h[0] <= s; ) h.shift(), --d;
          for (; h[d - 1] > l; ) h.pop(), --d;
          var p,
            _ = new Array(d + 1);
          for (i = 0; i <= d; ++i)
            ((p = _[i] = []).x0 = i > 0 ? h[i - 1] : s),
              (p.x1 = i < d ? h[i] : l);
          for (i = 0; i < u; ++i)
            s <= (o = a[i]) && o <= l && _[c(h, o, 0, d)].push(r[i]);
          return _;
        }
        return (
          (r.value = function(n) {
            return arguments.length
              ? ((t = 'function' == typeof n ? n : N(n)), r)
              : t;
          }),
          (r.domain = function(t) {
            return arguments.length
              ? ((n = 'function' == typeof t ? t : N([t[0], t[1]])), r)
              : n;
          }),
          (r.thresholds = function(t) {
            return arguments.length
              ? ((e =
                  'function' == typeof t
                    ? t
                    : Array.isArray(t)
                    ? N(R.call(t))
                    : N(t)),
                r)
              : e;
          }),
          r
        );
      },
      j = function(t) {
        return null === t ? NaN : +t;
      };
    function L(t, n, e = j) {
      if ((r = t.length)) {
        if ((n = +n) <= 0 || r < 2) return +e(t[0], 0, t);
        if (n >= 1) return +e(t[r - 1], r - 1, t);
        var r,
          i = (r - 1) * n,
          o = Math.floor(i),
          u = +e(t[o], o, t);
        return u + (+e(t[o + 1], o + 1, t) - u) * (i - o);
      }
    }
    var P = function(t, n, e) {
        return (
          (t = E.call(t, j).sort(r)),
          Math.ceil(
            (e - n) /
              (2 * (L(t, 0.75) - L(t, 0.25)) * Math.pow(t.length, -1 / 3))
          )
        );
      },
      B = function(t, n, e) {
        return Math.ceil((e - n) / (3.5 * v(t) * Math.pow(t.length, -1 / 3)));
      };
    function F(t, n) {
      let e;
      if (void 0 === n)
        for (const n of t)
          null != n && (e < n || (void 0 === e && n >= n)) && (e = n);
      else {
        let r = -1;
        for (let i of t)
          null != (i = n(i, ++r, t)) &&
            (e < i || (void 0 === e && i >= i)) &&
            (e = i);
      }
      return e;
    }
    function z(t, n) {
      let e,
        r = -1,
        i = -1;
      if (void 0 === n)
        for (const n of t)
          ++i,
            null != n &&
              (e < n || (void 0 === e && n >= n)) &&
              ((e = n), (r = i));
      else
        for (let o of t)
          null != (o = n(o, ++i, t)) &&
            (e < o || (void 0 === e && o >= o)) &&
            ((e = o), (r = i));
      return r;
    }
    function H(t, n) {
      let e = 0,
        r = 0;
      if (void 0 === n)
        for (let n of t) null != n && (n = +n) >= n && (++e, (r += n));
      else {
        let i = -1;
        for (let o of t)
          null != (o = n(o, ++i, t)) && (o = +o) >= o && (++e, (r += o));
      }
      if (e) return r / e;
    }
    function q(t, n, e = 0, i = t.length - 1, o = r) {
      for (; i > e; ) {
        if (i - e > 600) {
          const r = i - e + 1,
            u = n - e + 1,
            a = Math.log(r),
            c = 0.5 * Math.exp((2 * a) / 3),
            f =
              0.5 * Math.sqrt((a * c * (r - c)) / r) * (u - r / 2 < 0 ? -1 : 1);
          q(
            t,
            n,
            Math.max(e, Math.floor(n - (u * c) / r + f)),
            Math.min(i, Math.floor(n + ((r - u) * c) / r + f)),
            o
          );
        }
        const r = t[n];
        let u = e,
          a = i;
        for ($(t, e, n), o(t[i], r) > 0 && $(t, e, i); u < a; ) {
          for ($(t, u, a), ++u, --a; o(t[u], r) < 0; ) ++u;
          for (; o(t[a], r) > 0; ) --a;
        }
        0 === o(t[e], r) ? $(t, e, a) : $(t, ++a, i),
          a <= n && (e = a + 1),
          n <= a && (i = a - 1);
      }
      return t;
    }
    function $(t, n, e) {
      const r = t[n];
      (t[n] = t[e]), (t[e] = r);
    }
    var W = function(t, n) {
      if (
        !(t = Float64Array.from(
          (function*(t, n) {
            if (void 0 === n)
              for (let n of t) null != n && (n = +n) >= n && (yield n);
            else {
              let e = -1;
              for (let r of t)
                null != (r = n(r, ++e, t)) && (r = +r) >= r && (yield r);
            }
          })(t, n)
        )).length
      )
        return;
      const e = t.length,
        r = e >> 1;
      return q(t, r - 1, 0), 0 == (1 & e) && q(t, r, r), L(t, 0.5);
    };
    function G(t) {
      return Array.from(
        (function*(t) {
          for (const n of t) yield* n;
        })(t)
      );
    }
    function V(t, n) {
      let e;
      if (void 0 === n)
        for (const n of t)
          null != n && (e > n || (void 0 === e && n >= n)) && (e = n);
      else {
        let r = -1;
        for (let i of t)
          null != (i = n(i, ++r, t)) &&
            (e > i || (void 0 === e && i >= i)) &&
            (e = i);
      }
      return e;
    }
    function Z(t, n) {
      let e,
        r = -1,
        i = -1;
      if (void 0 === n)
        for (const n of t)
          ++i,
            null != n &&
              (e > n || (void 0 === e && n >= n)) &&
              ((e = n), (r = i));
      else
        for (let o of t)
          null != (o = n(o, ++i, t)) &&
            (e > o || (void 0 === e && o >= o)) &&
            ((e = o), (r = i));
      return r;
    }
    function X(
      t,
      n = function(t, n) {
        return [t, n];
      }
    ) {
      const e = [];
      let r,
        i = !1;
      for (const o of t) i && e.push(n(r, o)), (r = o), (i = !0);
      return e;
    }
    var K = function(t, n) {
      return Array.from(n, n => t[n]);
    };
    function J(t, n = r) {
      let e,
        i = !1;
      if (1 === n.length) {
        let o;
        for (const u of t) {
          const t = n(u);
          (i ? r(t, o) < 0 : 0 === r(t, t)) && ((e = u), (o = t), (i = !0));
        }
      } else
        for (const r of t)
          (i ? n(r, e) < 0 : 0 === n(r, r)) && ((e = r), (i = !0));
      return e;
    }
    function Q(t, n = r) {
      let e,
        i = -1,
        o = -1;
      if (1 === n.length)
        for (const u of t) {
          ++o;
          const t = n(u);
          (i < 0 ? 0 === r(t, t) : r(t, e) < 0) && ((e = t), (i = o));
        }
      else
        for (const r of t)
          ++o, (i < 0 ? 0 === n(r, r) : n(r, e) < 0) && ((e = r), (i = o));
      return i;
    }
    function tt(t, n) {
      const e = Q(t, n);
      return e < 0 ? void 0 : e;
    }
    function nt(t, n = 0, e = t.length) {
      for (var r, i, o = e - (n = +n); o; )
        (i = (Math.random() * o--) | 0),
          (r = t[o + n]),
          (t[o + n] = t[i + n]),
          (t[i + n] = r);
      return t;
    }
    function et(t, n) {
      let e = 0;
      if (void 0 === n) for (let n of t) (n = +n) && (e += n);
      else {
        let r = -1;
        for (let i of t) (i = +n(i, ++r, t)) && (e += i);
      }
      return e;
    }
    var rt = function(t) {
      if (!(i = t.length)) return [];
      for (var n = -1, e = V(t, it), r = new Array(e); ++n < e; )
        for (var i, o = -1, u = (r[n] = new Array(i)); ++o < i; )
          u[o] = t[o][n];
      return r;
    };
    function it(t) {
      return t.length;
    }
    var ot = function() {
      return rt(arguments);
    };
    e.d(n, 'bisect', function() {
      return c;
    }),
      e.d(n, 'bisectRight', function() {
        return u;
      }),
      e.d(n, 'bisectLeft', function() {
        return a;
      }),
      e.d(n, 'ascending', function() {
        return r;
      }),
      e.d(n, 'bisector', function() {
        return i;
      }),
      e.d(n, 'count', function() {
        return f;
      }),
      e.d(n, 'cross', function() {
        return d;
      }),
      e.d(n, 'descending', function() {
        return p;
      }),
      e.d(n, 'deviation', function() {
        return v;
      }),
      e.d(n, 'extent', function() {
        return g;
      }),
      e.d(n, 'group', function() {
        return y;
      }),
      e.d(n, 'groups', function() {
        return m;
      }),
      e.d(n, 'rollup', function() {
        return x;
      }),
      e.d(n, 'rollups', function() {
        return w;
      }),
      e.d(n, 'bin', function() {
        return Y;
      }),
      e.d(n, 'histogram', function() {
        return Y;
      }),
      e.d(n, 'thresholdFreedmanDiaconis', function() {
        return P;
      }),
      e.d(n, 'thresholdScott', function() {
        return B;
      }),
      e.d(n, 'thresholdSturges', function() {
        return I;
      }),
      e.d(n, 'max', function() {
        return F;
      }),
      e.d(n, 'maxIndex', function() {
        return z;
      }),
      e.d(n, 'mean', function() {
        return H;
      }),
      e.d(n, 'median', function() {
        return W;
      }),
      e.d(n, 'merge', function() {
        return G;
      }),
      e.d(n, 'min', function() {
        return V;
      }),
      e.d(n, 'minIndex', function() {
        return Z;
      }),
      e.d(n, 'pairs', function() {
        return X;
      }),
      e.d(n, 'permute', function() {
        return K;
      }),
      e.d(n, 'quantile', function() {
        return L;
      }),
      e.d(n, 'quickselect', function() {
        return q;
      }),
      e.d(n, 'range', function() {
        return T;
      }),
      e.d(n, 'least', function() {
        return J;
      }),
      e.d(n, 'leastIndex', function() {
        return Q;
      }),
      e.d(n, 'scan', function() {
        return tt;
      }),
      e.d(n, 'shuffle', function() {
        return nt;
      }),
      e.d(n, 'sum', function() {
        return et;
      }),
      e.d(n, 'ticks', function() {
        return U;
      }),
      e.d(n, 'tickIncrement', function() {
        return k;
      }),
      e.d(n, 'tickStep', function() {
        return D;
      }),
      e.d(n, 'transpose', function() {
        return rt;
      }),
      e.d(n, 'variance', function() {
        return _;
      }),
      e.d(n, 'zip', function() {
        return ot;
      });
  },
  function(t, n, e) {
    'use strict';
    function r(t) {
      if (!t.ok) throw new Error(t.status + ' ' + t.statusText);
      return t.blob();
    }
    e.r(n);
    var i = function(t, n) {
      return fetch(t, n).then(r);
    };
    function o(t) {
      if (!t.ok) throw new Error(t.status + ' ' + t.statusText);
      return t.arrayBuffer();
    }
    var u = function(t, n) {
        return fetch(t, n).then(o);
      },
      a = {},
      c = {},
      f = 34,
      s = 10,
      l = 13;
    function h(t) {
      return new Function(
        'd',
        'return {' +
          t
            .map(function(t, n) {
              return JSON.stringify(t) + ': d[' + n + ']';
            })
            .join(',') +
          '}'
      );
    }
    function d(t) {
      var n = Object.create(null),
        e = [];
      return (
        t.forEach(function(t) {
          for (var r in t) r in n || e.push((n[r] = r));
        }),
        e
      );
    }
    function p(t, n) {
      var e = t + '',
        r = e.length;
      return r < n ? new Array(n - r + 1).join(0) + e : e;
    }
    function _(t) {
      var n,
        e = t.getUTCHours(),
        r = t.getUTCMinutes(),
        i = t.getUTCSeconds(),
        o = t.getUTCMilliseconds();
      return isNaN(t)
        ? 'Invalid Date'
        : ((n = t.getUTCFullYear()) < 0
            ? '-' + p(-n, 6)
            : n > 9999
            ? '+' + p(n, 6)
            : p(n, 4)) +
            '-' +
            p(t.getUTCMonth() + 1, 2) +
            '-' +
            p(t.getUTCDate(), 2) +
            (o
              ? 'T' +
                p(e, 2) +
                ':' +
                p(r, 2) +
                ':' +
                p(i, 2) +
                '.' +
                p(o, 3) +
                'Z'
              : i
              ? 'T' + p(e, 2) + ':' + p(r, 2) + ':' + p(i, 2) + 'Z'
              : r || e
              ? 'T' + p(e, 2) + ':' + p(r, 2) + 'Z'
              : '');
    }
    var v = function(t) {
        var n = new RegExp('["' + t + '\n\r]'),
          e = t.charCodeAt(0);
        function r(t, n) {
          var r,
            i = [],
            o = t.length,
            u = 0,
            h = 0,
            d = o <= 0,
            p = !1;
          function _() {
            if (d) return c;
            if (p) return (p = !1), a;
            var n,
              r,
              i = u;
            if (t.charCodeAt(i) === f) {
              for (
                ;
                (u++ < o && t.charCodeAt(u) !== f) || t.charCodeAt(++u) === f;

              );
              return (
                (n = u) >= o
                  ? (d = !0)
                  : (r = t.charCodeAt(u++)) === s
                  ? (p = !0)
                  : r === l && ((p = !0), t.charCodeAt(u) === s && ++u),
                t.slice(i + 1, n - 1).replace(/""/g, '"')
              );
            }
            for (; u < o; ) {
              if ((r = t.charCodeAt((n = u++))) === s) p = !0;
              else if (r === l) (p = !0), t.charCodeAt(u) === s && ++u;
              else if (r !== e) continue;
              return t.slice(i, n);
            }
            return (d = !0), t.slice(i, o);
          }
          for (
            t.charCodeAt(o - 1) === s && --o, t.charCodeAt(o - 1) === l && --o;
            (r = _()) !== c;

          ) {
            for (var v = []; r !== a && r !== c; ) v.push(r), (r = _());
            (n && null == (v = n(v, h++))) || i.push(v);
          }
          return i;
        }
        function i(n, e) {
          return n.map(function(n) {
            return e
              .map(function(t) {
                return u(n[t]);
              })
              .join(t);
          });
        }
        function o(n) {
          return n.map(u).join(t);
        }
        function u(t) {
          return null == t
            ? ''
            : t instanceof Date
            ? _(t)
            : n.test((t += ''))
            ? '"' + t.replace(/"/g, '""') + '"'
            : t;
        }
        return {
          parse: function(t, n) {
            var e,
              i,
              o = r(t, function(t, r) {
                if (e) return e(t, r - 1);
                (i = t),
                  (e = n
                    ? (function(t, n) {
                        var e = h(t);
                        return function(r, i) {
                          return n(e(r), i, t);
                        };
                      })(t, n)
                    : h(t));
              });
            return (o.columns = i || []), o;
          },
          parseRows: r,
          format: function(n, e) {
            return (
              null == e && (e = d(n)),
              [e.map(u).join(t)].concat(i(n, e)).join('\n')
            );
          },
          formatBody: function(t, n) {
            return null == n && (n = d(t)), i(t, n).join('\n');
          },
          formatRows: function(t) {
            return t.map(o).join('\n');
          },
        };
      },
      g = v(','),
      b = g.parse,
      y = (g.parseRows, g.format, g.formatBody, g.formatRows, v('\t')),
      m = y.parse;
    y.parseRows, y.format, y.formatBody, y.formatRows;
    function x(t) {
      if (!t.ok) throw new Error(t.status + ' ' + t.statusText);
      return t.text();
    }
    var w = function(t, n) {
      return fetch(t, n).then(x);
    };
    function C(t) {
      return function(n, e, r) {
        return (
          2 === arguments.length &&
            'function' == typeof e &&
            ((r = e), (e = void 0)),
          w(n, e).then(function(n) {
            return t(n, r);
          })
        );
      };
    }
    function M(t, n, e, r) {
      3 === arguments.length &&
        'function' == typeof e &&
        ((r = e), (e = void 0));
      var i = v(t);
      return w(n, e).then(function(t) {
        return i.parse(t, r);
      });
    }
    var R = C(b),
      E = C(m),
      N = function(t, n) {
        return new Promise(function(e, r) {
          var i = new Image();
          for (var o in n) i[o] = n[o];
          (i.onerror = r),
            (i.onload = function() {
              e(i);
            }),
            (i.src = t);
        });
      };
    function T(t) {
      if (!t.ok) throw new Error(t.status + ' ' + t.statusText);
      return t.json();
    }
    var A = function(t, n) {
      return fetch(t, n).then(T);
    };
    function S(t) {
      return function(n, e) {
        return w(n, e).then(function(n) {
          return new DOMParser().parseFromString(n, t);
        });
      };
    }
    var O = S('application/xml'),
      U = S('text/html'),
      k = S('image/svg+xml');
    e.d(n, 'blob', function() {
      return i;
    }),
      e.d(n, 'buffer', function() {
        return u;
      }),
      e.d(n, 'dsv', function() {
        return M;
      }),
      e.d(n, 'csv', function() {
        return R;
      }),
      e.d(n, 'tsv', function() {
        return E;
      }),
      e.d(n, 'image', function() {
        return N;
      }),
      e.d(n, 'json', function() {
        return A;
      }),
      e.d(n, 'text', function() {
        return w;
      }),
      e.d(n, 'xml', function() {
        return O;
      }),
      e.d(n, 'html', function() {
        return U;
      }),
      e.d(n, 'svg', function() {
        return k;
      });
  },
  function(t, n, e) {
    'use strict';
    (function(n) {
      var r = e(12),
        i = e(13),
        o = /^[A-Za-z][A-Za-z0-9+-.]*:\/\//,
        u = /^([a-z][a-z0-9.+-]*:)?(\/\/)?([\S\s]*)/i,
        a = new RegExp(
          '^[\\x09\\x0A\\x0B\\x0C\\x0D\\x20\\xA0\\u1680\\u180E\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200A\\u202F\\u205F\\u3000\\u2028\\u2029\\uFEFF]+'
        );
      function c(t) {
        return (t || '').toString().replace(a, '');
      }
      var f = [
          ['#', 'hash'],
          ['?', 'query'],
          function(t) {
            return t.replace('\\', '/');
          },
          ['/', 'pathname'],
          ['@', 'auth', 1],
          [NaN, 'host', void 0, 1, 1],
          [/:(\d+)$/, 'port', void 0, 1],
          [NaN, 'hostname', void 0, 1, 1],
        ],
        s = {hash: 1, query: 1};
      function l(t) {
        var e,
          r =
            ('undefined' != typeof window
              ? window
              : void 0 !== n
              ? n
              : 'undefined' != typeof self
              ? self
              : {}
            ).location || {},
          i = {},
          u = typeof (t = t || r);
        if ('blob:' === t.protocol) i = new d(unescape(t.pathname), {});
        else if ('string' === u) for (e in ((i = new d(t, {})), s)) delete i[e];
        else if ('object' === u) {
          for (e in t) e in s || (i[e] = t[e]);
          void 0 === i.slashes && (i.slashes = o.test(t.href));
        }
        return i;
      }
      function h(t) {
        t = c(t);
        var n = u.exec(t);
        return {
          protocol: n[1] ? n[1].toLowerCase() : '',
          slashes: !!n[2],
          rest: n[3],
        };
      }
      function d(t, n, e) {
        if (((t = c(t)), !(this instanceof d))) return new d(t, n, e);
        var o,
          u,
          a,
          s,
          p,
          _,
          v = f.slice(),
          g = typeof n,
          b = this,
          y = 0;
        for (
          'object' !== g && 'string' !== g && ((e = n), (n = null)),
            e && 'function' != typeof e && (e = i.parse),
            n = l(n),
            o = !(u = h(t || '')).protocol && !u.slashes,
            b.slashes = u.slashes || (o && n.slashes),
            b.protocol = u.protocol || n.protocol || '',
            t = u.rest,
            u.slashes || (v[3] = [/(.*)/, 'pathname']);
          y < v.length;
          y++
        )
          'function' != typeof (s = v[y])
            ? ((a = s[0]),
              (_ = s[1]),
              a != a
                ? (b[_] = t)
                : 'string' == typeof a
                ? ~(p = t.indexOf(a)) &&
                  ('number' == typeof s[2]
                    ? ((b[_] = t.slice(0, p)), (t = t.slice(p + s[2])))
                    : ((b[_] = t.slice(p)), (t = t.slice(0, p))))
                : (p = a.exec(t)) && ((b[_] = p[1]), (t = t.slice(0, p.index))),
              (b[_] = b[_] || (o && s[3] && n[_]) || ''),
              s[4] && (b[_] = b[_].toLowerCase()))
            : (t = s(t));
        e && (b.query = e(b.query)),
          o &&
            n.slashes &&
            '/' !== b.pathname.charAt(0) &&
            ('' !== b.pathname || '' !== n.pathname) &&
            (b.pathname = (function(t, n) {
              if ('' === t) return n;
              for (
                var e = (n || '/')
                    .split('/')
                    .slice(0, -1)
                    .concat(t.split('/')),
                  r = e.length,
                  i = e[r - 1],
                  o = !1,
                  u = 0;
                r--;

              )
                '.' === e[r]
                  ? e.splice(r, 1)
                  : '..' === e[r]
                  ? (e.splice(r, 1), u++)
                  : u && (0 === r && (o = !0), e.splice(r, 1), u--);
              return (
                o && e.unshift(''),
                ('.' !== i && '..' !== i) || e.push(''),
                e.join('/')
              );
            })(b.pathname, n.pathname)),
          r(b.port, b.protocol) || ((b.host = b.hostname), (b.port = '')),
          (b.username = b.password = ''),
          b.auth &&
            ((s = b.auth.split(':')),
            (b.username = s[0] || ''),
            (b.password = s[1] || '')),
          (b.origin =
            b.protocol && b.host && 'file:' !== b.protocol
              ? b.protocol + '//' + b.host
              : 'null'),
          (b.href = b.toString());
      }
      (d.prototype = {
        set: function(t, n, e) {
          var o = this;
          switch (t) {
            case 'query':
              'string' == typeof n && n.length && (n = (e || i.parse)(n)),
                (o[t] = n);
              break;
            case 'port':
              (o[t] = n),
                r(n, o.protocol)
                  ? n && (o.host = o.hostname + ':' + n)
                  : ((o.host = o.hostname), (o[t] = ''));
              break;
            case 'hostname':
              (o[t] = n), o.port && (n += ':' + o.port), (o.host = n);
              break;
            case 'host':
              (o[t] = n),
                /:\d+$/.test(n)
                  ? ((n = n.split(':')),
                    (o.port = n.pop()),
                    (o.hostname = n.join(':')))
                  : ((o.hostname = n), (o.port = ''));
              break;
            case 'protocol':
              (o.protocol = n.toLowerCase()), (o.slashes = !e);
              break;
            case 'pathname':
            case 'hash':
              if (n) {
                var u = 'pathname' === t ? '/' : '#';
                o[t] = n.charAt(0) !== u ? u + n : n;
              } else o[t] = n;
              break;
            default:
              o[t] = n;
          }
          for (var a = 0; a < f.length; a++) {
            var c = f[a];
            c[4] && (o[c[1]] = o[c[1]].toLowerCase());
          }
          return (
            (o.origin =
              o.protocol && o.host && 'file:' !== o.protocol
                ? o.protocol + '//' + o.host
                : 'null'),
            (o.href = o.toString()),
            o
          );
        },
        toString: function(t) {
          (t && 'function' == typeof t) || (t = i.stringify);
          var n,
            e = this,
            r = e.protocol;
          r && ':' !== r.charAt(r.length - 1) && (r += ':');
          var o = r + (e.slashes ? '//' : '');
          return (
            e.username &&
              ((o += e.username),
              e.password && (o += ':' + e.password),
              (o += '@')),
            (o += e.host + e.pathname),
            (n = 'object' == typeof e.query ? t(e.query) : e.query) &&
              (o += '?' !== n.charAt(0) ? '?' + n : n),
            e.hash && (o += e.hash),
            o
          );
        },
      }),
        (d.extractProtocol = h),
        (d.location = l),
        (d.trimLeft = c),
        (d.qs = i),
        (t.exports = d);
    }.call(this, e(8)));
  },
  function(t, n, e) {
    'use strict';
    t.exports = function(t, n) {
      if (((n = n.split(':')[0]), !(t = +t))) return !1;
      switch (n) {
        case 'http':
        case 'ws':
          return 80 !== t;
        case 'https':
        case 'wss':
          return 443 !== t;
        case 'ftp':
          return 21 !== t;
        case 'gopher':
          return 70 !== t;
        case 'file':
          return !1;
      }
      return 0 !== t;
    };
  },
  function(t, n, e) {
    'use strict';
    var r,
      i = Object.prototype.hasOwnProperty;
    function o(t) {
      try {
        return decodeURIComponent(t.replace(/\+/g, ' '));
      } catch (t) {
        return null;
      }
    }
    (n.stringify = function(t, n) {
      n = n || '';
      var e,
        o,
        u = [];
      for (o in ('string' != typeof n && (n = '?'), t))
        if (i.call(t, o)) {
          if (
            ((e = t[o]) || (null !== e && e !== r && !isNaN(e)) || (e = ''),
            (o = encodeURIComponent(o)),
            (e = encodeURIComponent(e)),
            null === o || null === e)
          )
            continue;
          u.push(o + '=' + e);
        }
      return u.length ? n + u.join('&') : '';
    }),
      (n.parse = function(t) {
        for (var n, e = /([^=?&]+)=?([^&]*)/g, r = {}; (n = e.exec(t)); ) {
          var i = o(n[1]),
            u = o(n[2]);
          null === i || null === u || i in r || (r[i] = u);
        }
        return r;
      });
  },
  function(t, n, e) {
    'use strict';
    e.r(n);
    var r = Math.PI,
      i = 2 * r,
      o = i - 1e-6;
    function u() {
      (this._x0 = this._y0 = this._x1 = this._y1 = null), (this._ = '');
    }
    function a() {
      return new u();
    }
    u.prototype = a.prototype = {
      constructor: u,
      moveTo: function(t, n) {
        this._ +=
          'M' + (this._x0 = this._x1 = +t) + ',' + (this._y0 = this._y1 = +n);
      },
      closePath: function() {
        null !== this._x1 &&
          ((this._x1 = this._x0), (this._y1 = this._y0), (this._ += 'Z'));
      },
      lineTo: function(t, n) {
        this._ += 'L' + (this._x1 = +t) + ',' + (this._y1 = +n);
      },
      quadraticCurveTo: function(t, n, e, r) {
        this._ +=
          'Q' + +t + ',' + +n + ',' + (this._x1 = +e) + ',' + (this._y1 = +r);
      },
      bezierCurveTo: function(t, n, e, r, i, o) {
        this._ +=
          'C' +
          +t +
          ',' +
          +n +
          ',' +
          +e +
          ',' +
          +r +
          ',' +
          (this._x1 = +i) +
          ',' +
          (this._y1 = +o);
      },
      arcTo: function(t, n, e, i, o) {
        (t = +t), (n = +n), (e = +e), (i = +i), (o = +o);
        var u = this._x1,
          a = this._y1,
          c = e - t,
          f = i - n,
          s = u - t,
          l = a - n,
          h = s * s + l * l;
        if (o < 0) throw new Error('negative radius: ' + o);
        if (null === this._x1)
          this._ += 'M' + (this._x1 = t) + ',' + (this._y1 = n);
        else if (h > 1e-6)
          if (Math.abs(l * c - f * s) > 1e-6 && o) {
            var d = e - u,
              p = i - a,
              _ = c * c + f * f,
              v = d * d + p * p,
              g = Math.sqrt(_),
              b = Math.sqrt(h),
              y = o * Math.tan((r - Math.acos((_ + h - v) / (2 * g * b))) / 2),
              m = y / b,
              x = y / g;
            Math.abs(m - 1) > 1e-6 &&
              (this._ += 'L' + (t + m * s) + ',' + (n + m * l)),
              (this._ +=
                'A' +
                o +
                ',' +
                o +
                ',0,0,' +
                +(l * d > s * p) +
                ',' +
                (this._x1 = t + x * c) +
                ',' +
                (this._y1 = n + x * f));
          } else this._ += 'L' + (this._x1 = t) + ',' + (this._y1 = n);
        else;
      },
      arc: function(t, n, e, u, a, c) {
        (t = +t), (n = +n);
        var f = (e = +e) * Math.cos(u),
          s = e * Math.sin(u),
          l = t + f,
          h = n + s,
          d = 1 ^ c,
          p = c ? u - a : a - u;
        if (e < 0) throw new Error('negative radius: ' + e);
        null === this._x1
          ? (this._ += 'M' + l + ',' + h)
          : (Math.abs(this._x1 - l) > 1e-6 || Math.abs(this._y1 - h) > 1e-6) &&
            (this._ += 'L' + l + ',' + h),
          e &&
            (p < 0 && (p = (p % i) + i),
            p > o
              ? (this._ +=
                  'A' +
                  e +
                  ',' +
                  e +
                  ',0,1,' +
                  d +
                  ',' +
                  (t - f) +
                  ',' +
                  (n - s) +
                  'A' +
                  e +
                  ',' +
                  e +
                  ',0,1,' +
                  d +
                  ',' +
                  (this._x1 = l) +
                  ',' +
                  (this._y1 = h))
              : p > 1e-6 &&
                (this._ +=
                  'A' +
                  e +
                  ',' +
                  e +
                  ',0,' +
                  +(p >= r) +
                  ',' +
                  d +
                  ',' +
                  (this._x1 = t + e * Math.cos(a)) +
                  ',' +
                  (this._y1 = n + e * Math.sin(a))));
      },
      rect: function(t, n, e, r) {
        this._ +=
          'M' +
          (this._x0 = this._x1 = +t) +
          ',' +
          (this._y0 = this._y1 = +n) +
          'h' +
          +e +
          'v' +
          +r +
          'h' +
          -e +
          'Z';
      },
      toString: function() {
        return this._;
      },
    };
    var c = a,
      f = function(t) {
        return function() {
          return t;
        };
      },
      s = Math.abs,
      l = Math.atan2,
      h = Math.cos,
      d = Math.max,
      p = Math.min,
      _ = Math.sin,
      v = Math.sqrt,
      g = 1e-12,
      b = Math.PI,
      y = b / 2,
      m = 2 * b;
    function x(t) {
      return t >= 1 ? y : t <= -1 ? -y : Math.asin(t);
    }
    function w(t) {
      return t.innerRadius;
    }
    function C(t) {
      return t.outerRadius;
    }
    function M(t) {
      return t.startAngle;
    }
    function R(t) {
      return t.endAngle;
    }
    function E(t) {
      return t && t.padAngle;
    }
    function N(t, n, e, r, i, o, u) {
      var a = t - e,
        c = n - r,
        f = (u ? o : -o) / v(a * a + c * c),
        s = f * c,
        l = -f * a,
        h = t + s,
        p = n + l,
        _ = e + s,
        g = r + l,
        b = (h + _) / 2,
        y = (p + g) / 2,
        m = _ - h,
        x = g - p,
        w = m * m + x * x,
        C = i - o,
        M = h * g - _ * p,
        R = (x < 0 ? -1 : 1) * v(d(0, C * C * w - M * M)),
        E = (M * x - m * R) / w,
        N = (-M * m - x * R) / w,
        T = (M * x + m * R) / w,
        A = (-M * m + x * R) / w,
        S = E - b,
        O = N - y,
        U = T - b,
        k = A - y;
      return (
        S * S + O * O > U * U + k * k && ((E = T), (N = A)),
        {
          cx: E,
          cy: N,
          x01: -s,
          y01: -l,
          x11: E * (i / C - 1),
          y11: N * (i / C - 1),
        }
      );
    }
    var T = function() {
      var t = w,
        n = C,
        e = f(0),
        r = null,
        i = M,
        o = R,
        u = E,
        a = null;
      function d() {
        var f,
          d,
          w,
          C = +t.apply(this, arguments),
          M = +n.apply(this, arguments),
          R = i.apply(this, arguments) - y,
          E = o.apply(this, arguments) - y,
          T = s(E - R),
          A = E > R;
        if ((a || (a = f = c()), M < C && ((d = M), (M = C), (C = d)), M > g))
          if (T > m - g)
            a.moveTo(M * h(R), M * _(R)),
              a.arc(0, 0, M, R, E, !A),
              C > g && (a.moveTo(C * h(E), C * _(E)), a.arc(0, 0, C, E, R, A));
          else {
            var S,
              O,
              U = R,
              k = E,
              D = R,
              I = E,
              Y = T,
              j = T,
              L = u.apply(this, arguments) / 2,
              P = L > g && (r ? +r.apply(this, arguments) : v(C * C + M * M)),
              B = p(s(M - C) / 2, +e.apply(this, arguments)),
              F = B,
              z = B;
            if (P > g) {
              var H = x((P / C) * _(L)),
                q = x((P / M) * _(L));
              (Y -= 2 * H) > g
                ? ((D += H *= A ? 1 : -1), (I -= H))
                : ((Y = 0), (D = I = (R + E) / 2)),
                (j -= 2 * q) > g
                  ? ((U += q *= A ? 1 : -1), (k -= q))
                  : ((j = 0), (U = k = (R + E) / 2));
            }
            var $ = M * h(U),
              W = M * _(U),
              G = C * h(I),
              V = C * _(I);
            if (B > g) {
              var Z,
                X = M * h(k),
                K = M * _(k),
                J = C * h(D),
                Q = C * _(D);
              if (
                T < b &&
                (Z = (function(t, n, e, r, i, o, u, a) {
                  var c = e - t,
                    f = r - n,
                    s = u - i,
                    l = a - o,
                    h = l * c - s * f;
                  if (!(h * h < g))
                    return [
                      t + (h = (s * (n - o) - l * (t - i)) / h) * c,
                      n + h * f,
                    ];
                })($, W, J, Q, X, K, G, V))
              ) {
                var tt = $ - Z[0],
                  nt = W - Z[1],
                  et = X - Z[0],
                  rt = K - Z[1],
                  it =
                    1 /
                    _(
                      ((w =
                        (tt * et + nt * rt) /
                        (v(tt * tt + nt * nt) * v(et * et + rt * rt))) > 1
                        ? 0
                        : w < -1
                        ? b
                        : Math.acos(w)) / 2
                    ),
                  ot = v(Z[0] * Z[0] + Z[1] * Z[1]);
                (F = p(B, (C - ot) / (it - 1))),
                  (z = p(B, (M - ot) / (it + 1)));
              }
            }
            j > g
              ? z > g
                ? ((S = N(J, Q, $, W, M, z, A)),
                  (O = N(X, K, G, V, M, z, A)),
                  a.moveTo(S.cx + S.x01, S.cy + S.y01),
                  z < B
                    ? a.arc(S.cx, S.cy, z, l(S.y01, S.x01), l(O.y01, O.x01), !A)
                    : (a.arc(
                        S.cx,
                        S.cy,
                        z,
                        l(S.y01, S.x01),
                        l(S.y11, S.x11),
                        !A
                      ),
                      a.arc(
                        0,
                        0,
                        M,
                        l(S.cy + S.y11, S.cx + S.x11),
                        l(O.cy + O.y11, O.cx + O.x11),
                        !A
                      ),
                      a.arc(
                        O.cx,
                        O.cy,
                        z,
                        l(O.y11, O.x11),
                        l(O.y01, O.x01),
                        !A
                      )))
                : (a.moveTo($, W), a.arc(0, 0, M, U, k, !A))
              : a.moveTo($, W),
              C > g && Y > g
                ? F > g
                  ? ((S = N(G, V, X, K, C, -F, A)),
                    (O = N($, W, J, Q, C, -F, A)),
                    a.lineTo(S.cx + S.x01, S.cy + S.y01),
                    F < B
                      ? a.arc(
                          S.cx,
                          S.cy,
                          F,
                          l(S.y01, S.x01),
                          l(O.y01, O.x01),
                          !A
                        )
                      : (a.arc(
                          S.cx,
                          S.cy,
                          F,
                          l(S.y01, S.x01),
                          l(S.y11, S.x11),
                          !A
                        ),
                        a.arc(
                          0,
                          0,
                          C,
                          l(S.cy + S.y11, S.cx + S.x11),
                          l(O.cy + O.y11, O.cx + O.x11),
                          A
                        ),
                        a.arc(
                          O.cx,
                          O.cy,
                          F,
                          l(O.y11, O.x11),
                          l(O.y01, O.x01),
                          !A
                        )))
                  : a.arc(0, 0, C, I, D, A)
                : a.lineTo(G, V);
          }
        else a.moveTo(0, 0);
        if ((a.closePath(), f)) return (a = null), f + '' || null;
      }
      return (
        (d.centroid = function() {
          var e = (+t.apply(this, arguments) + +n.apply(this, arguments)) / 2,
            r =
              (+i.apply(this, arguments) + +o.apply(this, arguments)) / 2 -
              b / 2;
          return [h(r) * e, _(r) * e];
        }),
        (d.innerRadius = function(n) {
          return arguments.length
            ? ((t = 'function' == typeof n ? n : f(+n)), d)
            : t;
        }),
        (d.outerRadius = function(t) {
          return arguments.length
            ? ((n = 'function' == typeof t ? t : f(+t)), d)
            : n;
        }),
        (d.cornerRadius = function(t) {
          return arguments.length
            ? ((e = 'function' == typeof t ? t : f(+t)), d)
            : e;
        }),
        (d.padRadius = function(t) {
          return arguments.length
            ? ((r = null == t ? null : 'function' == typeof t ? t : f(+t)), d)
            : r;
        }),
        (d.startAngle = function(t) {
          return arguments.length
            ? ((i = 'function' == typeof t ? t : f(+t)), d)
            : i;
        }),
        (d.endAngle = function(t) {
          return arguments.length
            ? ((o = 'function' == typeof t ? t : f(+t)), d)
            : o;
        }),
        (d.padAngle = function(t) {
          return arguments.length
            ? ((u = 'function' == typeof t ? t : f(+t)), d)
            : u;
        }),
        (d.context = function(t) {
          return arguments.length ? ((a = null == t ? null : t), d) : a;
        }),
        d
      );
    };
    function A(t) {
      this._context = t;
    }
    A.prototype = {
      areaStart: function() {
        this._line = 0;
      },
      areaEnd: function() {
        this._line = NaN;
      },
      lineStart: function() {
        this._point = 0;
      },
      lineEnd: function() {
        (this._line || (0 !== this._line && 1 === this._point)) &&
          this._context.closePath(),
          (this._line = 1 - this._line);
      },
      point: function(t, n) {
        switch (((t = +t), (n = +n), this._point)) {
          case 0:
            (this._point = 1),
              this._line
                ? this._context.lineTo(t, n)
                : this._context.moveTo(t, n);
            break;
          case 1:
            this._point = 2;
          default:
            this._context.lineTo(t, n);
        }
      },
    };
    var S = function(t) {
      return new A(t);
    };
    function O(t) {
      return t[0];
    }
    function U(t) {
      return t[1];
    }
    var k = function() {
        var t = O,
          n = U,
          e = f(!0),
          r = null,
          i = S,
          o = null;
        function u(u) {
          var a,
            f,
            s,
            l = u.length,
            h = !1;
          for (null == r && (o = i((s = c()))), a = 0; a <= l; ++a)
            !(a < l && e((f = u[a]), a, u)) === h &&
              ((h = !h) ? o.lineStart() : o.lineEnd()),
              h && o.point(+t(f, a, u), +n(f, a, u));
          if (s) return (o = null), s + '' || null;
        }
        return (
          (u.x = function(n) {
            return arguments.length
              ? ((t = 'function' == typeof n ? n : f(+n)), u)
              : t;
          }),
          (u.y = function(t) {
            return arguments.length
              ? ((n = 'function' == typeof t ? t : f(+t)), u)
              : n;
          }),
          (u.defined = function(t) {
            return arguments.length
              ? ((e = 'function' == typeof t ? t : f(!!t)), u)
              : e;
          }),
          (u.curve = function(t) {
            return arguments.length ? ((i = t), null != r && (o = i(r)), u) : i;
          }),
          (u.context = function(t) {
            return arguments.length
              ? (null == t ? (r = o = null) : (o = i((r = t))), u)
              : r;
          }),
          u
        );
      },
      D = function() {
        var t = O,
          n = null,
          e = f(0),
          r = U,
          i = f(!0),
          o = null,
          u = S,
          a = null;
        function s(f) {
          var s,
            l,
            h,
            d,
            p,
            _ = f.length,
            v = !1,
            g = new Array(_),
            b = new Array(_);
          for (null == o && (a = u((p = c()))), s = 0; s <= _; ++s) {
            if (!(s < _ && i((d = f[s]), s, f)) === v)
              if ((v = !v)) (l = s), a.areaStart(), a.lineStart();
              else {
                for (a.lineEnd(), a.lineStart(), h = s - 1; h >= l; --h)
                  a.point(g[h], b[h]);
                a.lineEnd(), a.areaEnd();
              }
            v &&
              ((g[s] = +t(d, s, f)),
              (b[s] = +e(d, s, f)),
              a.point(n ? +n(d, s, f) : g[s], r ? +r(d, s, f) : b[s]));
          }
          if (p) return (a = null), p + '' || null;
        }
        function l() {
          return k()
            .defined(i)
            .curve(u)
            .context(o);
        }
        return (
          (s.x = function(e) {
            return arguments.length
              ? ((t = 'function' == typeof e ? e : f(+e)), (n = null), s)
              : t;
          }),
          (s.x0 = function(n) {
            return arguments.length
              ? ((t = 'function' == typeof n ? n : f(+n)), s)
              : t;
          }),
          (s.x1 = function(t) {
            return arguments.length
              ? ((n = null == t ? null : 'function' == typeof t ? t : f(+t)), s)
              : n;
          }),
          (s.y = function(t) {
            return arguments.length
              ? ((e = 'function' == typeof t ? t : f(+t)), (r = null), s)
              : e;
          }),
          (s.y0 = function(t) {
            return arguments.length
              ? ((e = 'function' == typeof t ? t : f(+t)), s)
              : e;
          }),
          (s.y1 = function(t) {
            return arguments.length
              ? ((r = null == t ? null : 'function' == typeof t ? t : f(+t)), s)
              : r;
          }),
          (s.lineX0 = s.lineY0 = function() {
            return l()
              .x(t)
              .y(e);
          }),
          (s.lineY1 = function() {
            return l()
              .x(t)
              .y(r);
          }),
          (s.lineX1 = function() {
            return l()
              .x(n)
              .y(e);
          }),
          (s.defined = function(t) {
            return arguments.length
              ? ((i = 'function' == typeof t ? t : f(!!t)), s)
              : i;
          }),
          (s.curve = function(t) {
            return arguments.length ? ((u = t), null != o && (a = u(o)), s) : u;
          }),
          (s.context = function(t) {
            return arguments.length
              ? (null == t ? (o = a = null) : (a = u((o = t))), s)
              : o;
          }),
          s
        );
      },
      I = function(t, n) {
        return n < t ? -1 : n > t ? 1 : n >= t ? 0 : NaN;
      },
      Y = function(t) {
        return t;
      },
      j = function() {
        var t = Y,
          n = I,
          e = null,
          r = f(0),
          i = f(m),
          o = f(0);
        function u(u) {
          var a,
            c,
            f,
            s,
            l,
            h = u.length,
            d = 0,
            p = new Array(h),
            _ = new Array(h),
            v = +r.apply(this, arguments),
            g = Math.min(m, Math.max(-m, i.apply(this, arguments) - v)),
            b = Math.min(Math.abs(g) / h, o.apply(this, arguments)),
            y = b * (g < 0 ? -1 : 1);
          for (a = 0; a < h; ++a)
            (l = _[(p[a] = a)] = +t(u[a], a, u)) > 0 && (d += l);
          for (
            null != n
              ? p.sort(function(t, e) {
                  return n(_[t], _[e]);
                })
              : null != e &&
                p.sort(function(t, n) {
                  return e(u[t], u[n]);
                }),
              a = 0,
              f = d ? (g - h * y) / d : 0;
            a < h;
            ++a, v = s
          )
            (c = p[a]),
              (s = v + ((l = _[c]) > 0 ? l * f : 0) + y),
              (_[c] = {
                data: u[c],
                index: a,
                value: l,
                startAngle: v,
                endAngle: s,
                padAngle: b,
              });
          return _;
        }
        return (
          (u.value = function(n) {
            return arguments.length
              ? ((t = 'function' == typeof n ? n : f(+n)), u)
              : t;
          }),
          (u.sortValues = function(t) {
            return arguments.length ? ((n = t), (e = null), u) : n;
          }),
          (u.sort = function(t) {
            return arguments.length ? ((e = t), (n = null), u) : e;
          }),
          (u.startAngle = function(t) {
            return arguments.length
              ? ((r = 'function' == typeof t ? t : f(+t)), u)
              : r;
          }),
          (u.endAngle = function(t) {
            return arguments.length
              ? ((i = 'function' == typeof t ? t : f(+t)), u)
              : i;
          }),
          (u.padAngle = function(t) {
            return arguments.length
              ? ((o = 'function' == typeof t ? t : f(+t)), u)
              : o;
          }),
          u
        );
      },
      L = B(S);
    function P(t) {
      this._curve = t;
    }
    function B(t) {
      function n(n) {
        return new P(t(n));
      }
      return (n._curve = t), n;
    }
    function F(t) {
      var n = t.curve;
      return (
        (t.angle = t.x),
        delete t.x,
        (t.radius = t.y),
        delete t.y,
        (t.curve = function(t) {
          return arguments.length ? n(B(t)) : n()._curve;
        }),
        t
      );
    }
    P.prototype = {
      areaStart: function() {
        this._curve.areaStart();
      },
      areaEnd: function() {
        this._curve.areaEnd();
      },
      lineStart: function() {
        this._curve.lineStart();
      },
      lineEnd: function() {
        this._curve.lineEnd();
      },
      point: function(t, n) {
        this._curve.point(n * Math.sin(t), n * -Math.cos(t));
      },
    };
    var z = function() {
        return F(k().curve(L));
      },
      H = function() {
        var t = D().curve(L),
          n = t.curve,
          e = t.lineX0,
          r = t.lineX1,
          i = t.lineY0,
          o = t.lineY1;
        return (
          (t.angle = t.x),
          delete t.x,
          (t.startAngle = t.x0),
          delete t.x0,
          (t.endAngle = t.x1),
          delete t.x1,
          (t.radius = t.y),
          delete t.y,
          (t.innerRadius = t.y0),
          delete t.y0,
          (t.outerRadius = t.y1),
          delete t.y1,
          (t.lineStartAngle = function() {
            return F(e());
          }),
          delete t.lineX0,
          (t.lineEndAngle = function() {
            return F(r());
          }),
          delete t.lineX1,
          (t.lineInnerRadius = function() {
            return F(i());
          }),
          delete t.lineY0,
          (t.lineOuterRadius = function() {
            return F(o());
          }),
          delete t.lineY1,
          (t.curve = function(t) {
            return arguments.length ? n(B(t)) : n()._curve;
          }),
          t
        );
      },
      q = function(t, n) {
        return [(n = +n) * Math.cos((t -= Math.PI / 2)), n * Math.sin(t)];
      },
      $ = Array.prototype.slice;
    function W(t) {
      return t.source;
    }
    function G(t) {
      return t.target;
    }
    function V(t) {
      var n = W,
        e = G,
        r = O,
        i = U,
        o = null;
      function u() {
        var u,
          a = $.call(arguments),
          f = n.apply(this, a),
          s = e.apply(this, a);
        if (
          (o || (o = u = c()),
          t(
            o,
            +r.apply(this, ((a[0] = f), a)),
            +i.apply(this, a),
            +r.apply(this, ((a[0] = s), a)),
            +i.apply(this, a)
          ),
          u)
        )
          return (o = null), u + '' || null;
      }
      return (
        (u.source = function(t) {
          return arguments.length ? ((n = t), u) : n;
        }),
        (u.target = function(t) {
          return arguments.length ? ((e = t), u) : e;
        }),
        (u.x = function(t) {
          return arguments.length
            ? ((r = 'function' == typeof t ? t : f(+t)), u)
            : r;
        }),
        (u.y = function(t) {
          return arguments.length
            ? ((i = 'function' == typeof t ? t : f(+t)), u)
            : i;
        }),
        (u.context = function(t) {
          return arguments.length ? ((o = null == t ? null : t), u) : o;
        }),
        u
      );
    }
    function Z(t, n, e, r, i) {
      t.moveTo(n, e), t.bezierCurveTo((n = (n + r) / 2), e, n, i, r, i);
    }
    function X(t, n, e, r, i) {
      t.moveTo(n, e), t.bezierCurveTo(n, (e = (e + i) / 2), r, e, r, i);
    }
    function K(t, n, e, r, i) {
      var o = q(n, e),
        u = q(n, (e = (e + i) / 2)),
        a = q(r, e),
        c = q(r, i);
      t.moveTo(o[0], o[1]), t.bezierCurveTo(u[0], u[1], a[0], a[1], c[0], c[1]);
    }
    function J() {
      return V(Z);
    }
    function Q() {
      return V(X);
    }
    function tt() {
      var t = V(K);
      return (t.angle = t.x), delete t.x, (t.radius = t.y), delete t.y, t;
    }
    var nt = {
        draw: function(t, n) {
          var e = Math.sqrt(n / b);
          t.moveTo(e, 0), t.arc(0, 0, e, 0, m);
        },
      },
      et = {
        draw: function(t, n) {
          var e = Math.sqrt(n / 5) / 2;
          t.moveTo(-3 * e, -e),
            t.lineTo(-e, -e),
            t.lineTo(-e, -3 * e),
            t.lineTo(e, -3 * e),
            t.lineTo(e, -e),
            t.lineTo(3 * e, -e),
            t.lineTo(3 * e, e),
            t.lineTo(e, e),
            t.lineTo(e, 3 * e),
            t.lineTo(-e, 3 * e),
            t.lineTo(-e, e),
            t.lineTo(-3 * e, e),
            t.closePath();
        },
      },
      rt = Math.sqrt(1 / 3),
      it = 2 * rt,
      ot = {
        draw: function(t, n) {
          var e = Math.sqrt(n / it),
            r = e * rt;
          t.moveTo(0, -e),
            t.lineTo(r, 0),
            t.lineTo(0, e),
            t.lineTo(-r, 0),
            t.closePath();
        },
      },
      ut = Math.sin(b / 10) / Math.sin((7 * b) / 10),
      at = Math.sin(m / 10) * ut,
      ct = -Math.cos(m / 10) * ut,
      ft = {
        draw: function(t, n) {
          var e = Math.sqrt(0.8908130915292852 * n),
            r = at * e,
            i = ct * e;
          t.moveTo(0, -e), t.lineTo(r, i);
          for (var o = 1; o < 5; ++o) {
            var u = (m * o) / 5,
              a = Math.cos(u),
              c = Math.sin(u);
            t.lineTo(c * e, -a * e), t.lineTo(a * r - c * i, c * r + a * i);
          }
          t.closePath();
        },
      },
      st = {
        draw: function(t, n) {
          var e = Math.sqrt(n),
            r = -e / 2;
          t.rect(r, r, e, e);
        },
      },
      lt = Math.sqrt(3),
      ht = {
        draw: function(t, n) {
          var e = -Math.sqrt(n / (3 * lt));
          t.moveTo(0, 2 * e),
            t.lineTo(-lt * e, -e),
            t.lineTo(lt * e, -e),
            t.closePath();
        },
      },
      dt = Math.sqrt(3) / 2,
      pt = 1 / Math.sqrt(12),
      _t = 3 * (pt / 2 + 1),
      vt = {
        draw: function(t, n) {
          var e = Math.sqrt(n / _t),
            r = e / 2,
            i = e * pt,
            o = r,
            u = e * pt + e,
            a = -o,
            c = u;
          t.moveTo(r, i),
            t.lineTo(o, u),
            t.lineTo(a, c),
            t.lineTo(-0.5 * r - dt * i, dt * r + -0.5 * i),
            t.lineTo(-0.5 * o - dt * u, dt * o + -0.5 * u),
            t.lineTo(-0.5 * a - dt * c, dt * a + -0.5 * c),
            t.lineTo(-0.5 * r + dt * i, -0.5 * i - dt * r),
            t.lineTo(-0.5 * o + dt * u, -0.5 * u - dt * o),
            t.lineTo(-0.5 * a + dt * c, -0.5 * c - dt * a),
            t.closePath();
        },
      },
      gt = [nt, et, ot, st, ft, ht, vt],
      bt = function() {
        var t = f(nt),
          n = f(64),
          e = null;
        function r() {
          var r;
          if (
            (e || (e = r = c()),
            t.apply(this, arguments).draw(e, +n.apply(this, arguments)),
            r)
          )
            return (e = null), r + '' || null;
        }
        return (
          (r.type = function(n) {
            return arguments.length
              ? ((t = 'function' == typeof n ? n : f(n)), r)
              : t;
          }),
          (r.size = function(t) {
            return arguments.length
              ? ((n = 'function' == typeof t ? t : f(+t)), r)
              : n;
          }),
          (r.context = function(t) {
            return arguments.length ? ((e = null == t ? null : t), r) : e;
          }),
          r
        );
      },
      yt = function() {};
    function mt(t, n, e) {
      t._context.bezierCurveTo(
        (2 * t._x0 + t._x1) / 3,
        (2 * t._y0 + t._y1) / 3,
        (t._x0 + 2 * t._x1) / 3,
        (t._y0 + 2 * t._y1) / 3,
        (t._x0 + 4 * t._x1 + n) / 6,
        (t._y0 + 4 * t._y1 + e) / 6
      );
    }
    function xt(t) {
      this._context = t;
    }
    xt.prototype = {
      areaStart: function() {
        this._line = 0;
      },
      areaEnd: function() {
        this._line = NaN;
      },
      lineStart: function() {
        (this._x0 = this._x1 = this._y0 = this._y1 = NaN), (this._point = 0);
      },
      lineEnd: function() {
        switch (this._point) {
          case 3:
            mt(this, this._x1, this._y1);
          case 2:
            this._context.lineTo(this._x1, this._y1);
        }
        (this._line || (0 !== this._line && 1 === this._point)) &&
          this._context.closePath(),
          (this._line = 1 - this._line);
      },
      point: function(t, n) {
        switch (((t = +t), (n = +n), this._point)) {
          case 0:
            (this._point = 1),
              this._line
                ? this._context.lineTo(t, n)
                : this._context.moveTo(t, n);
            break;
          case 1:
            this._point = 2;
            break;
          case 2:
            (this._point = 3),
              this._context.lineTo(
                (5 * this._x0 + this._x1) / 6,
                (5 * this._y0 + this._y1) / 6
              );
          default:
            mt(this, t, n);
        }
        (this._x0 = this._x1),
          (this._x1 = t),
          (this._y0 = this._y1),
          (this._y1 = n);
      },
    };
    var wt = function(t) {
      return new xt(t);
    };
    function Ct(t) {
      this._context = t;
    }
    Ct.prototype = {
      areaStart: yt,
      areaEnd: yt,
      lineStart: function() {
        (this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = NaN),
          (this._point = 0);
      },
      lineEnd: function() {
        switch (this._point) {
          case 1:
            this._context.moveTo(this._x2, this._y2), this._context.closePath();
            break;
          case 2:
            this._context.moveTo(
              (this._x2 + 2 * this._x3) / 3,
              (this._y2 + 2 * this._y3) / 3
            ),
              this._context.lineTo(
                (this._x3 + 2 * this._x2) / 3,
                (this._y3 + 2 * this._y2) / 3
              ),
              this._context.closePath();
            break;
          case 3:
            this.point(this._x2, this._y2),
              this.point(this._x3, this._y3),
              this.point(this._x4, this._y4);
        }
      },
      point: function(t, n) {
        switch (((t = +t), (n = +n), this._point)) {
          case 0:
            (this._point = 1), (this._x2 = t), (this._y2 = n);
            break;
          case 1:
            (this._point = 2), (this._x3 = t), (this._y3 = n);
            break;
          case 2:
            (this._point = 3),
              (this._x4 = t),
              (this._y4 = n),
              this._context.moveTo(
                (this._x0 + 4 * this._x1 + t) / 6,
                (this._y0 + 4 * this._y1 + n) / 6
              );
            break;
          default:
            mt(this, t, n);
        }
        (this._x0 = this._x1),
          (this._x1 = t),
          (this._y0 = this._y1),
          (this._y1 = n);
      },
    };
    var Mt = function(t) {
      return new Ct(t);
    };
    function Rt(t) {
      this._context = t;
    }
    Rt.prototype = {
      areaStart: function() {
        this._line = 0;
      },
      areaEnd: function() {
        this._line = NaN;
      },
      lineStart: function() {
        (this._x0 = this._x1 = this._y0 = this._y1 = NaN), (this._point = 0);
      },
      lineEnd: function() {
        (this._line || (0 !== this._line && 3 === this._point)) &&
          this._context.closePath(),
          (this._line = 1 - this._line);
      },
      point: function(t, n) {
        switch (((t = +t), (n = +n), this._point)) {
          case 0:
            this._point = 1;
            break;
          case 1:
            this._point = 2;
            break;
          case 2:
            this._point = 3;
            var e = (this._x0 + 4 * this._x1 + t) / 6,
              r = (this._y0 + 4 * this._y1 + n) / 6;
            this._line
              ? this._context.lineTo(e, r)
              : this._context.moveTo(e, r);
            break;
          case 3:
            this._point = 4;
          default:
            mt(this, t, n);
        }
        (this._x0 = this._x1),
          (this._x1 = t),
          (this._y0 = this._y1),
          (this._y1 = n);
      },
    };
    var Et = function(t) {
      return new Rt(t);
    };
    function Nt(t, n) {
      (this._basis = new xt(t)), (this._beta = n);
    }
    Nt.prototype = {
      lineStart: function() {
        (this._x = []), (this._y = []), this._basis.lineStart();
      },
      lineEnd: function() {
        var t = this._x,
          n = this._y,
          e = t.length - 1;
        if (e > 0)
          for (
            var r, i = t[0], o = n[0], u = t[e] - i, a = n[e] - o, c = -1;
            ++c <= e;

          )
            (r = c / e),
              this._basis.point(
                this._beta * t[c] + (1 - this._beta) * (i + r * u),
                this._beta * n[c] + (1 - this._beta) * (o + r * a)
              );
        (this._x = this._y = null), this._basis.lineEnd();
      },
      point: function(t, n) {
        this._x.push(+t), this._y.push(+n);
      },
    };
    var Tt = (function t(n) {
      function e(t) {
        return 1 === n ? new xt(t) : new Nt(t, n);
      }
      return (
        (e.beta = function(n) {
          return t(+n);
        }),
        e
      );
    })(0.85);
    function At(t, n, e) {
      t._context.bezierCurveTo(
        t._x1 + t._k * (t._x2 - t._x0),
        t._y1 + t._k * (t._y2 - t._y0),
        t._x2 + t._k * (t._x1 - n),
        t._y2 + t._k * (t._y1 - e),
        t._x2,
        t._y2
      );
    }
    function St(t, n) {
      (this._context = t), (this._k = (1 - n) / 6);
    }
    St.prototype = {
      areaStart: function() {
        this._line = 0;
      },
      areaEnd: function() {
        this._line = NaN;
      },
      lineStart: function() {
        (this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN),
          (this._point = 0);
      },
      lineEnd: function() {
        switch (this._point) {
          case 2:
            this._context.lineTo(this._x2, this._y2);
            break;
          case 3:
            At(this, this._x1, this._y1);
        }
        (this._line || (0 !== this._line && 1 === this._point)) &&
          this._context.closePath(),
          (this._line = 1 - this._line);
      },
      point: function(t, n) {
        switch (((t = +t), (n = +n), this._point)) {
          case 0:
            (this._point = 1),
              this._line
                ? this._context.lineTo(t, n)
                : this._context.moveTo(t, n);
            break;
          case 1:
            (this._point = 2), (this._x1 = t), (this._y1 = n);
            break;
          case 2:
            this._point = 3;
          default:
            At(this, t, n);
        }
        (this._x0 = this._x1),
          (this._x1 = this._x2),
          (this._x2 = t),
          (this._y0 = this._y1),
          (this._y1 = this._y2),
          (this._y2 = n);
      },
    };
    var Ot = (function t(n) {
      function e(t) {
        return new St(t, n);
      }
      return (
        (e.tension = function(n) {
          return t(+n);
        }),
        e
      );
    })(0);
    function Ut(t, n) {
      (this._context = t), (this._k = (1 - n) / 6);
    }
    Ut.prototype = {
      areaStart: yt,
      areaEnd: yt,
      lineStart: function() {
        (this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._x5 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN),
          (this._point = 0);
      },
      lineEnd: function() {
        switch (this._point) {
          case 1:
            this._context.moveTo(this._x3, this._y3), this._context.closePath();
            break;
          case 2:
            this._context.lineTo(this._x3, this._y3), this._context.closePath();
            break;
          case 3:
            this.point(this._x3, this._y3),
              this.point(this._x4, this._y4),
              this.point(this._x5, this._y5);
        }
      },
      point: function(t, n) {
        switch (((t = +t), (n = +n), this._point)) {
          case 0:
            (this._point = 1), (this._x3 = t), (this._y3 = n);
            break;
          case 1:
            (this._point = 2),
              this._context.moveTo((this._x4 = t), (this._y4 = n));
            break;
          case 2:
            (this._point = 3), (this._x5 = t), (this._y5 = n);
            break;
          default:
            At(this, t, n);
        }
        (this._x0 = this._x1),
          (this._x1 = this._x2),
          (this._x2 = t),
          (this._y0 = this._y1),
          (this._y1 = this._y2),
          (this._y2 = n);
      },
    };
    var kt = (function t(n) {
      function e(t) {
        return new Ut(t, n);
      }
      return (
        (e.tension = function(n) {
          return t(+n);
        }),
        e
      );
    })(0);
    function Dt(t, n) {
      (this._context = t), (this._k = (1 - n) / 6);
    }
    Dt.prototype = {
      areaStart: function() {
        this._line = 0;
      },
      areaEnd: function() {
        this._line = NaN;
      },
      lineStart: function() {
        (this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN),
          (this._point = 0);
      },
      lineEnd: function() {
        (this._line || (0 !== this._line && 3 === this._point)) &&
          this._context.closePath(),
          (this._line = 1 - this._line);
      },
      point: function(t, n) {
        switch (((t = +t), (n = +n), this._point)) {
          case 0:
            this._point = 1;
            break;
          case 1:
            this._point = 2;
            break;
          case 2:
            (this._point = 3),
              this._line
                ? this._context.lineTo(this._x2, this._y2)
                : this._context.moveTo(this._x2, this._y2);
            break;
          case 3:
            this._point = 4;
          default:
            At(this, t, n);
        }
        (this._x0 = this._x1),
          (this._x1 = this._x2),
          (this._x2 = t),
          (this._y0 = this._y1),
          (this._y1 = this._y2),
          (this._y2 = n);
      },
    };
    var It = (function t(n) {
      function e(t) {
        return new Dt(t, n);
      }
      return (
        (e.tension = function(n) {
          return t(+n);
        }),
        e
      );
    })(0);
    function Yt(t, n, e) {
      var r = t._x1,
        i = t._y1,
        o = t._x2,
        u = t._y2;
      if (t._l01_a > g) {
        var a = 2 * t._l01_2a + 3 * t._l01_a * t._l12_a + t._l12_2a,
          c = 3 * t._l01_a * (t._l01_a + t._l12_a);
        (r = (r * a - t._x0 * t._l12_2a + t._x2 * t._l01_2a) / c),
          (i = (i * a - t._y0 * t._l12_2a + t._y2 * t._l01_2a) / c);
      }
      if (t._l23_a > g) {
        var f = 2 * t._l23_2a + 3 * t._l23_a * t._l12_a + t._l12_2a,
          s = 3 * t._l23_a * (t._l23_a + t._l12_a);
        (o = (o * f + t._x1 * t._l23_2a - n * t._l12_2a) / s),
          (u = (u * f + t._y1 * t._l23_2a - e * t._l12_2a) / s);
      }
      t._context.bezierCurveTo(r, i, o, u, t._x2, t._y2);
    }
    function jt(t, n) {
      (this._context = t), (this._alpha = n);
    }
    jt.prototype = {
      areaStart: function() {
        this._line = 0;
      },
      areaEnd: function() {
        this._line = NaN;
      },
      lineStart: function() {
        (this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN),
          (this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0);
      },
      lineEnd: function() {
        switch (this._point) {
          case 2:
            this._context.lineTo(this._x2, this._y2);
            break;
          case 3:
            this.point(this._x2, this._y2);
        }
        (this._line || (0 !== this._line && 1 === this._point)) &&
          this._context.closePath(),
          (this._line = 1 - this._line);
      },
      point: function(t, n) {
        if (((t = +t), (n = +n), this._point)) {
          var e = this._x2 - t,
            r = this._y2 - n;
          this._l23_a = Math.sqrt(
            (this._l23_2a = Math.pow(e * e + r * r, this._alpha))
          );
        }
        switch (this._point) {
          case 0:
            (this._point = 1),
              this._line
                ? this._context.lineTo(t, n)
                : this._context.moveTo(t, n);
            break;
          case 1:
            this._point = 2;
            break;
          case 2:
            this._point = 3;
          default:
            Yt(this, t, n);
        }
        (this._l01_a = this._l12_a),
          (this._l12_a = this._l23_a),
          (this._l01_2a = this._l12_2a),
          (this._l12_2a = this._l23_2a),
          (this._x0 = this._x1),
          (this._x1 = this._x2),
          (this._x2 = t),
          (this._y0 = this._y1),
          (this._y1 = this._y2),
          (this._y2 = n);
      },
    };
    var Lt = (function t(n) {
      function e(t) {
        return n ? new jt(t, n) : new St(t, 0);
      }
      return (
        (e.alpha = function(n) {
          return t(+n);
        }),
        e
      );
    })(0.5);
    function Pt(t, n) {
      (this._context = t), (this._alpha = n);
    }
    Pt.prototype = {
      areaStart: yt,
      areaEnd: yt,
      lineStart: function() {
        (this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._x5 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN),
          (this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0);
      },
      lineEnd: function() {
        switch (this._point) {
          case 1:
            this._context.moveTo(this._x3, this._y3), this._context.closePath();
            break;
          case 2:
            this._context.lineTo(this._x3, this._y3), this._context.closePath();
            break;
          case 3:
            this.point(this._x3, this._y3),
              this.point(this._x4, this._y4),
              this.point(this._x5, this._y5);
        }
      },
      point: function(t, n) {
        if (((t = +t), (n = +n), this._point)) {
          var e = this._x2 - t,
            r = this._y2 - n;
          this._l23_a = Math.sqrt(
            (this._l23_2a = Math.pow(e * e + r * r, this._alpha))
          );
        }
        switch (this._point) {
          case 0:
            (this._point = 1), (this._x3 = t), (this._y3 = n);
            break;
          case 1:
            (this._point = 2),
              this._context.moveTo((this._x4 = t), (this._y4 = n));
            break;
          case 2:
            (this._point = 3), (this._x5 = t), (this._y5 = n);
            break;
          default:
            Yt(this, t, n);
        }
        (this._l01_a = this._l12_a),
          (this._l12_a = this._l23_a),
          (this._l01_2a = this._l12_2a),
          (this._l12_2a = this._l23_2a),
          (this._x0 = this._x1),
          (this._x1 = this._x2),
          (this._x2 = t),
          (this._y0 = this._y1),
          (this._y1 = this._y2),
          (this._y2 = n);
      },
    };
    var Bt = (function t(n) {
      function e(t) {
        return n ? new Pt(t, n) : new Ut(t, 0);
      }
      return (
        (e.alpha = function(n) {
          return t(+n);
        }),
        e
      );
    })(0.5);
    function Ft(t, n) {
      (this._context = t), (this._alpha = n);
    }
    Ft.prototype = {
      areaStart: function() {
        this._line = 0;
      },
      areaEnd: function() {
        this._line = NaN;
      },
      lineStart: function() {
        (this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN),
          (this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0);
      },
      lineEnd: function() {
        (this._line || (0 !== this._line && 3 === this._point)) &&
          this._context.closePath(),
          (this._line = 1 - this._line);
      },
      point: function(t, n) {
        if (((t = +t), (n = +n), this._point)) {
          var e = this._x2 - t,
            r = this._y2 - n;
          this._l23_a = Math.sqrt(
            (this._l23_2a = Math.pow(e * e + r * r, this._alpha))
          );
        }
        switch (this._point) {
          case 0:
            this._point = 1;
            break;
          case 1:
            this._point = 2;
            break;
          case 2:
            (this._point = 3),
              this._line
                ? this._context.lineTo(this._x2, this._y2)
                : this._context.moveTo(this._x2, this._y2);
            break;
          case 3:
            this._point = 4;
          default:
            Yt(this, t, n);
        }
        (this._l01_a = this._l12_a),
          (this._l12_a = this._l23_a),
          (this._l01_2a = this._l12_2a),
          (this._l12_2a = this._l23_2a),
          (this._x0 = this._x1),
          (this._x1 = this._x2),
          (this._x2 = t),
          (this._y0 = this._y1),
          (this._y1 = this._y2),
          (this._y2 = n);
      },
    };
    var zt = (function t(n) {
      function e(t) {
        return n ? new Ft(t, n) : new Dt(t, 0);
      }
      return (
        (e.alpha = function(n) {
          return t(+n);
        }),
        e
      );
    })(0.5);
    function Ht(t) {
      this._context = t;
    }
    Ht.prototype = {
      areaStart: yt,
      areaEnd: yt,
      lineStart: function() {
        this._point = 0;
      },
      lineEnd: function() {
        this._point && this._context.closePath();
      },
      point: function(t, n) {
        (t = +t),
          (n = +n),
          this._point
            ? this._context.lineTo(t, n)
            : ((this._point = 1), this._context.moveTo(t, n));
      },
    };
    var qt = function(t) {
      return new Ht(t);
    };
    function $t(t) {
      return t < 0 ? -1 : 1;
    }
    function Wt(t, n, e) {
      var r = t._x1 - t._x0,
        i = n - t._x1,
        o = (t._y1 - t._y0) / (r || (i < 0 && -0)),
        u = (e - t._y1) / (i || (r < 0 && -0)),
        a = (o * i + u * r) / (r + i);
      return (
        ($t(o) + $t(u)) *
          Math.min(Math.abs(o), Math.abs(u), 0.5 * Math.abs(a)) || 0
      );
    }
    function Gt(t, n) {
      var e = t._x1 - t._x0;
      return e ? ((3 * (t._y1 - t._y0)) / e - n) / 2 : n;
    }
    function Vt(t, n, e) {
      var r = t._x0,
        i = t._y0,
        o = t._x1,
        u = t._y1,
        a = (o - r) / 3;
      t._context.bezierCurveTo(r + a, i + a * n, o - a, u - a * e, o, u);
    }
    function Zt(t) {
      this._context = t;
    }
    function Xt(t) {
      this._context = new Kt(t);
    }
    function Kt(t) {
      this._context = t;
    }
    function Jt(t) {
      return new Zt(t);
    }
    function Qt(t) {
      return new Xt(t);
    }
    function tn(t) {
      this._context = t;
    }
    function nn(t) {
      var n,
        e,
        r = t.length - 1,
        i = new Array(r),
        o = new Array(r),
        u = new Array(r);
      for (i[0] = 0, o[0] = 2, u[0] = t[0] + 2 * t[1], n = 1; n < r - 1; ++n)
        (i[n] = 1), (o[n] = 4), (u[n] = 4 * t[n] + 2 * t[n + 1]);
      for (
        i[r - 1] = 2, o[r - 1] = 7, u[r - 1] = 8 * t[r - 1] + t[r], n = 1;
        n < r;
        ++n
      )
        (e = i[n] / o[n - 1]), (o[n] -= e), (u[n] -= e * u[n - 1]);
      for (i[r - 1] = u[r - 1] / o[r - 1], n = r - 2; n >= 0; --n)
        i[n] = (u[n] - i[n + 1]) / o[n];
      for (o[r - 1] = (t[r] + i[r - 1]) / 2, n = 0; n < r - 1; ++n)
        o[n] = 2 * t[n + 1] - i[n + 1];
      return [i, o];
    }
    (Zt.prototype = {
      areaStart: function() {
        this._line = 0;
      },
      areaEnd: function() {
        this._line = NaN;
      },
      lineStart: function() {
        (this._x0 = this._x1 = this._y0 = this._y1 = this._t0 = NaN),
          (this._point = 0);
      },
      lineEnd: function() {
        switch (this._point) {
          case 2:
            this._context.lineTo(this._x1, this._y1);
            break;
          case 3:
            Vt(this, this._t0, Gt(this, this._t0));
        }
        (this._line || (0 !== this._line && 1 === this._point)) &&
          this._context.closePath(),
          (this._line = 1 - this._line);
      },
      point: function(t, n) {
        var e = NaN;
        if (((n = +n), (t = +t) !== this._x1 || n !== this._y1)) {
          switch (this._point) {
            case 0:
              (this._point = 1),
                this._line
                  ? this._context.lineTo(t, n)
                  : this._context.moveTo(t, n);
              break;
            case 1:
              this._point = 2;
              break;
            case 2:
              (this._point = 3), Vt(this, Gt(this, (e = Wt(this, t, n))), e);
              break;
            default:
              Vt(this, this._t0, (e = Wt(this, t, n)));
          }
          (this._x0 = this._x1),
            (this._x1 = t),
            (this._y0 = this._y1),
            (this._y1 = n),
            (this._t0 = e);
        }
      },
    }),
      ((Xt.prototype = Object.create(Zt.prototype)).point = function(t, n) {
        Zt.prototype.point.call(this, n, t);
      }),
      (Kt.prototype = {
        moveTo: function(t, n) {
          this._context.moveTo(n, t);
        },
        closePath: function() {
          this._context.closePath();
        },
        lineTo: function(t, n) {
          this._context.lineTo(n, t);
        },
        bezierCurveTo: function(t, n, e, r, i, o) {
          this._context.bezierCurveTo(n, t, r, e, o, i);
        },
      }),
      (tn.prototype = {
        areaStart: function() {
          this._line = 0;
        },
        areaEnd: function() {
          this._line = NaN;
        },
        lineStart: function() {
          (this._x = []), (this._y = []);
        },
        lineEnd: function() {
          var t = this._x,
            n = this._y,
            e = t.length;
          if (e)
            if (
              (this._line
                ? this._context.lineTo(t[0], n[0])
                : this._context.moveTo(t[0], n[0]),
              2 === e)
            )
              this._context.lineTo(t[1], n[1]);
            else
              for (var r = nn(t), i = nn(n), o = 0, u = 1; u < e; ++o, ++u)
                this._context.bezierCurveTo(
                  r[0][o],
                  i[0][o],
                  r[1][o],
                  i[1][o],
                  t[u],
                  n[u]
                );
          (this._line || (0 !== this._line && 1 === e)) &&
            this._context.closePath(),
            (this._line = 1 - this._line),
            (this._x = this._y = null);
        },
        point: function(t, n) {
          this._x.push(+t), this._y.push(+n);
        },
      });
    var en = function(t) {
      return new tn(t);
    };
    function rn(t, n) {
      (this._context = t), (this._t = n);
    }
    rn.prototype = {
      areaStart: function() {
        this._line = 0;
      },
      areaEnd: function() {
        this._line = NaN;
      },
      lineStart: function() {
        (this._x = this._y = NaN), (this._point = 0);
      },
      lineEnd: function() {
        0 < this._t &&
          this._t < 1 &&
          2 === this._point &&
          this._context.lineTo(this._x, this._y),
          (this._line || (0 !== this._line && 1 === this._point)) &&
            this._context.closePath(),
          this._line >= 0 &&
            ((this._t = 1 - this._t), (this._line = 1 - this._line));
      },
      point: function(t, n) {
        switch (((t = +t), (n = +n), this._point)) {
          case 0:
            (this._point = 1),
              this._line
                ? this._context.lineTo(t, n)
                : this._context.moveTo(t, n);
            break;
          case 1:
            this._point = 2;
          default:
            if (this._t <= 0)
              this._context.lineTo(this._x, n), this._context.lineTo(t, n);
            else {
              var e = this._x * (1 - this._t) + t * this._t;
              this._context.lineTo(e, this._y), this._context.lineTo(e, n);
            }
        }
        (this._x = t), (this._y = n);
      },
    };
    var on = function(t) {
      return new rn(t, 0.5);
    };
    function un(t) {
      return new rn(t, 0);
    }
    function an(t) {
      return new rn(t, 1);
    }
    var cn = function(t, n) {
        if ((i = t.length) > 1)
          for (var e, r, i, o = 1, u = t[n[0]], a = u.length; o < i; ++o)
            for (r = u, u = t[n[o]], e = 0; e < a; ++e)
              u[e][1] += u[e][0] = isNaN(r[e][1]) ? r[e][0] : r[e][1];
      },
      fn = function(t) {
        for (var n = t.length, e = new Array(n); --n >= 0; ) e[n] = n;
        return e;
      };
    function sn(t, n) {
      return t[n];
    }
    var ln = function() {
        var t = f([]),
          n = fn,
          e = cn,
          r = sn;
        function i(i) {
          var o,
            u,
            a = t.apply(this, arguments),
            c = i.length,
            f = a.length,
            s = new Array(f);
          for (o = 0; o < f; ++o) {
            for (var l, h = a[o], d = (s[o] = new Array(c)), p = 0; p < c; ++p)
              (d[p] = l = [0, +r(i[p], h, p, i)]), (l.data = i[p]);
            d.key = h;
          }
          for (o = 0, u = n(s); o < f; ++o) s[u[o]].index = o;
          return e(s, u), s;
        }
        return (
          (i.keys = function(n) {
            return arguments.length
              ? ((t = 'function' == typeof n ? n : f($.call(n))), i)
              : t;
          }),
          (i.value = function(t) {
            return arguments.length
              ? ((r = 'function' == typeof t ? t : f(+t)), i)
              : r;
          }),
          (i.order = function(t) {
            return arguments.length
              ? ((n =
                  null == t ? fn : 'function' == typeof t ? t : f($.call(t))),
                i)
              : n;
          }),
          (i.offset = function(t) {
            return arguments.length ? ((e = null == t ? cn : t), i) : e;
          }),
          i
        );
      },
      hn = function(t, n) {
        if ((r = t.length) > 0) {
          for (var e, r, i, o = 0, u = t[0].length; o < u; ++o) {
            for (i = e = 0; e < r; ++e) i += t[e][o][1] || 0;
            if (i) for (e = 0; e < r; ++e) t[e][o][1] /= i;
          }
          cn(t, n);
        }
      },
      dn = function(t, n) {
        if ((a = t.length) > 0)
          for (var e, r, i, o, u, a, c = 0, f = t[n[0]].length; c < f; ++c)
            for (o = u = 0, e = 0; e < a; ++e)
              (i = (r = t[n[e]][c])[1] - r[0]) >= 0
                ? ((r[0] = o), (r[1] = o += i))
                : i < 0
                ? ((r[1] = u), (r[0] = u += i))
                : (r[0] = o);
      },
      pn = function(t, n) {
        if ((e = t.length) > 0) {
          for (var e, r = 0, i = t[n[0]], o = i.length; r < o; ++r) {
            for (var u = 0, a = 0; u < e; ++u) a += t[u][r][1] || 0;
            i[r][1] += i[r][0] = -a / 2;
          }
          cn(t, n);
        }
      },
      _n = function(t, n) {
        if ((i = t.length) > 0 && (r = (e = t[n[0]]).length) > 0) {
          for (var e, r, i, o = 0, u = 1; u < r; ++u) {
            for (var a = 0, c = 0, f = 0; a < i; ++a) {
              for (
                var s = t[n[a]],
                  l = s[u][1] || 0,
                  h = (l - (s[u - 1][1] || 0)) / 2,
                  d = 0;
                d < a;
                ++d
              ) {
                var p = t[n[d]];
                h += (p[u][1] || 0) - (p[u - 1][1] || 0);
              }
              (c += l), (f += h * l);
            }
            (e[u - 1][1] += e[u - 1][0] = o), c && (o -= f / c);
          }
          (e[u - 1][1] += e[u - 1][0] = o), cn(t, n);
        }
      },
      vn = function(t) {
        var n = t.map(gn);
        return fn(t).sort(function(t, e) {
          return n[t] - n[e];
        });
      };
    function gn(t) {
      for (var n, e = -1, r = 0, i = t.length, o = -1 / 0; ++e < i; )
        (n = +t[e][1]) > o && ((o = n), (r = e));
      return r;
    }
    var bn = function(t) {
      var n = t.map(yn);
      return fn(t).sort(function(t, e) {
        return n[t] - n[e];
      });
    };
    function yn(t) {
      for (var n, e = 0, r = -1, i = t.length; ++r < i; )
        (n = +t[r][1]) && (e += n);
      return e;
    }
    var mn = function(t) {
        return bn(t).reverse();
      },
      xn = function(t) {
        var n,
          e,
          r = t.length,
          i = t.map(yn),
          o = vn(t),
          u = 0,
          a = 0,
          c = [],
          f = [];
        for (n = 0; n < r; ++n)
          (e = o[n]),
            u < a ? ((u += i[e]), c.push(e)) : ((a += i[e]), f.push(e));
        return f.reverse().concat(c);
      },
      wn = function(t) {
        return fn(t).reverse();
      };
    e.d(n, 'arc', function() {
      return T;
    }),
      e.d(n, 'area', function() {
        return D;
      }),
      e.d(n, 'line', function() {
        return k;
      }),
      e.d(n, 'pie', function() {
        return j;
      }),
      e.d(n, 'areaRadial', function() {
        return H;
      }),
      e.d(n, 'radialArea', function() {
        return H;
      }),
      e.d(n, 'lineRadial', function() {
        return z;
      }),
      e.d(n, 'radialLine', function() {
        return z;
      }),
      e.d(n, 'pointRadial', function() {
        return q;
      }),
      e.d(n, 'linkHorizontal', function() {
        return J;
      }),
      e.d(n, 'linkVertical', function() {
        return Q;
      }),
      e.d(n, 'linkRadial', function() {
        return tt;
      }),
      e.d(n, 'symbol', function() {
        return bt;
      }),
      e.d(n, 'symbols', function() {
        return gt;
      }),
      e.d(n, 'symbolCircle', function() {
        return nt;
      }),
      e.d(n, 'symbolCross', function() {
        return et;
      }),
      e.d(n, 'symbolDiamond', function() {
        return ot;
      }),
      e.d(n, 'symbolSquare', function() {
        return st;
      }),
      e.d(n, 'symbolStar', function() {
        return ft;
      }),
      e.d(n, 'symbolTriangle', function() {
        return ht;
      }),
      e.d(n, 'symbolWye', function() {
        return vt;
      }),
      e.d(n, 'curveBasisClosed', function() {
        return Mt;
      }),
      e.d(n, 'curveBasisOpen', function() {
        return Et;
      }),
      e.d(n, 'curveBasis', function() {
        return wt;
      }),
      e.d(n, 'curveBundle', function() {
        return Tt;
      }),
      e.d(n, 'curveCardinalClosed', function() {
        return kt;
      }),
      e.d(n, 'curveCardinalOpen', function() {
        return It;
      }),
      e.d(n, 'curveCardinal', function() {
        return Ot;
      }),
      e.d(n, 'curveCatmullRomClosed', function() {
        return Bt;
      }),
      e.d(n, 'curveCatmullRomOpen', function() {
        return zt;
      }),
      e.d(n, 'curveCatmullRom', function() {
        return Lt;
      }),
      e.d(n, 'curveLinearClosed', function() {
        return qt;
      }),
      e.d(n, 'curveLinear', function() {
        return S;
      }),
      e.d(n, 'curveMonotoneX', function() {
        return Jt;
      }),
      e.d(n, 'curveMonotoneY', function() {
        return Qt;
      }),
      e.d(n, 'curveNatural', function() {
        return en;
      }),
      e.d(n, 'curveStep', function() {
        return on;
      }),
      e.d(n, 'curveStepAfter', function() {
        return an;
      }),
      e.d(n, 'curveStepBefore', function() {
        return un;
      }),
      e.d(n, 'stack', function() {
        return ln;
      }),
      e.d(n, 'stackOffsetExpand', function() {
        return hn;
      }),
      e.d(n, 'stackOffsetDiverging', function() {
        return dn;
      }),
      e.d(n, 'stackOffsetNone', function() {
        return cn;
      }),
      e.d(n, 'stackOffsetSilhouette', function() {
        return pn;
      }),
      e.d(n, 'stackOffsetWiggle', function() {
        return _n;
      }),
      e.d(n, 'stackOrderAppearance', function() {
        return vn;
      }),
      e.d(n, 'stackOrderAscending', function() {
        return bn;
      }),
      e.d(n, 'stackOrderDescending', function() {
        return mn;
      }),
      e.d(n, 'stackOrderInsideOut', function() {
        return xn;
      }),
      e.d(n, 'stackOrderNone', function() {
        return fn;
      }),
      e.d(n, 'stackOrderReverse', function() {
        return wn;
      });
  },
  function(t, n, e) {
    (function(t, r) {
      var i;
      /**
       * @license
       * Lodash <https://lodash.com/>
       * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
       * Released under MIT license <https://lodash.com/license>
       * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
       * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
       */ (function() {
        var o,
          u = 200,
          a = 'Unsupported core-js use. Try https://npms.io/search?q=ponyfill.',
          c = 'Expected a function',
          f = '__lodash_hash_undefined__',
          s = 500,
          l = '__lodash_placeholder__',
          h = 1,
          d = 2,
          p = 4,
          _ = 1,
          v = 2,
          g = 1,
          b = 2,
          y = 4,
          m = 8,
          x = 16,
          w = 32,
          C = 64,
          M = 128,
          R = 256,
          E = 512,
          N = 30,
          T = '...',
          A = 800,
          S = 16,
          O = 1,
          U = 2,
          k = 1 / 0,
          D = 9007199254740991,
          I = 17976931348623157e292,
          Y = NaN,
          j = 4294967295,
          L = j - 1,
          P = j >>> 1,
          B = [
            ['ary', M],
            ['bind', g],
            ['bindKey', b],
            ['curry', m],
            ['curryRight', x],
            ['flip', E],
            ['partial', w],
            ['partialRight', C],
            ['rearg', R],
          ],
          F = '[object Arguments]',
          z = '[object Array]',
          H = '[object AsyncFunction]',
          q = '[object Boolean]',
          $ = '[object Date]',
          W = '[object DOMException]',
          G = '[object Error]',
          V = '[object Function]',
          Z = '[object GeneratorFunction]',
          X = '[object Map]',
          K = '[object Number]',
          J = '[object Null]',
          Q = '[object Object]',
          tt = '[object Proxy]',
          nt = '[object RegExp]',
          et = '[object Set]',
          rt = '[object String]',
          it = '[object Symbol]',
          ot = '[object Undefined]',
          ut = '[object WeakMap]',
          at = '[object WeakSet]',
          ct = '[object ArrayBuffer]',
          ft = '[object DataView]',
          st = '[object Float32Array]',
          lt = '[object Float64Array]',
          ht = '[object Int8Array]',
          dt = '[object Int16Array]',
          pt = '[object Int32Array]',
          _t = '[object Uint8Array]',
          vt = '[object Uint8ClampedArray]',
          gt = '[object Uint16Array]',
          bt = '[object Uint32Array]',
          yt = /\b__p \+= '';/g,
          mt = /\b(__p \+=) '' \+/g,
          xt = /(__e\(.*?\)|\b__t\)) \+\n'';/g,
          wt = /&(?:amp|lt|gt|quot|#39);/g,
          Ct = /[&<>"']/g,
          Mt = RegExp(wt.source),
          Rt = RegExp(Ct.source),
          Et = /<%-([\s\S]+?)%>/g,
          Nt = /<%([\s\S]+?)%>/g,
          Tt = /<%=([\s\S]+?)%>/g,
          At = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
          St = /^\w*$/,
          Ot = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
          Ut = /[\\^$.*+?()[\]{}|]/g,
          kt = RegExp(Ut.source),
          Dt = /^\s+|\s+$/g,
          It = /^\s+/,
          Yt = /\s+$/,
          jt = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,
          Lt = /\{\n\/\* \[wrapped with (.+)\] \*/,
          Pt = /,? & /,
          Bt = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,
          Ft = /\\(\\)?/g,
          zt = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,
          Ht = /\w*$/,
          qt = /^[-+]0x[0-9a-f]+$/i,
          $t = /^0b[01]+$/i,
          Wt = /^\[object .+?Constructor\]$/,
          Gt = /^0o[0-7]+$/i,
          Vt = /^(?:0|[1-9]\d*)$/,
          Zt = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,
          Xt = /($^)/,
          Kt = /['\n\r\u2028\u2029\\]/g,
          Jt = '\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff',
          Qt =
            '\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000',
          tn = '[\\ud800-\\udfff]',
          nn = '[' + Qt + ']',
          en = '[' + Jt + ']',
          rn = '\\d+',
          on = '[\\u2700-\\u27bf]',
          un = '[a-z\\xdf-\\xf6\\xf8-\\xff]',
          an =
            '[^\\ud800-\\udfff' +
            Qt +
            rn +
            '\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde]',
          cn = '\\ud83c[\\udffb-\\udfff]',
          fn = '[^\\ud800-\\udfff]',
          sn = '(?:\\ud83c[\\udde6-\\uddff]){2}',
          ln = '[\\ud800-\\udbff][\\udc00-\\udfff]',
          hn = '[A-Z\\xc0-\\xd6\\xd8-\\xde]',
          dn = '(?:' + un + '|' + an + ')',
          pn = '(?:' + hn + '|' + an + ')',
          _n = '(?:' + en + '|' + cn + ')' + '?',
          vn =
            '[\\ufe0e\\ufe0f]?' +
            _n +
            ('(?:\\u200d(?:' +
              [fn, sn, ln].join('|') +
              ')[\\ufe0e\\ufe0f]?' +
              _n +
              ')*'),
          gn = '(?:' + [on, sn, ln].join('|') + ')' + vn,
          bn = '(?:' + [fn + en + '?', en, sn, ln, tn].join('|') + ')',
          yn = RegExp("['’]", 'g'),
          mn = RegExp(en, 'g'),
          xn = RegExp(cn + '(?=' + cn + ')|' + bn + vn, 'g'),
          wn = RegExp(
            [
              hn +
                '?' +
                un +
                "+(?:['’](?:d|ll|m|re|s|t|ve))?(?=" +
                [nn, hn, '$'].join('|') +
                ')',
              pn +
                "+(?:['’](?:D|LL|M|RE|S|T|VE))?(?=" +
                [nn, hn + dn, '$'].join('|') +
                ')',
              hn + '?' + dn + "+(?:['’](?:d|ll|m|re|s|t|ve))?",
              hn + "+(?:['’](?:D|LL|M|RE|S|T|VE))?",
              '\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])',
              '\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])',
              rn,
              gn,
            ].join('|'),
            'g'
          ),
          Cn = RegExp('[\\u200d\\ud800-\\udfff' + Jt + '\\ufe0e\\ufe0f]'),
          Mn = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,
          Rn = [
            'Array',
            'Buffer',
            'DataView',
            'Date',
            'Error',
            'Float32Array',
            'Float64Array',
            'Function',
            'Int8Array',
            'Int16Array',
            'Int32Array',
            'Map',
            'Math',
            'Object',
            'Promise',
            'RegExp',
            'Set',
            'String',
            'Symbol',
            'TypeError',
            'Uint8Array',
            'Uint8ClampedArray',
            'Uint16Array',
            'Uint32Array',
            'WeakMap',
            '_',
            'clearTimeout',
            'isFinite',
            'parseInt',
            'setTimeout',
          ],
          En = -1,
          Nn = {};
        (Nn[st] = Nn[lt] = Nn[ht] = Nn[dt] = Nn[pt] = Nn[_t] = Nn[vt] = Nn[
          gt
        ] = Nn[bt] = !0),
          (Nn[F] = Nn[z] = Nn[ct] = Nn[q] = Nn[ft] = Nn[$] = Nn[G] = Nn[V] = Nn[
            X
          ] = Nn[K] = Nn[Q] = Nn[nt] = Nn[et] = Nn[rt] = Nn[ut] = !1);
        var Tn = {};
        (Tn[F] = Tn[z] = Tn[ct] = Tn[ft] = Tn[q] = Tn[$] = Tn[st] = Tn[lt] = Tn[
          ht
        ] = Tn[dt] = Tn[pt] = Tn[X] = Tn[K] = Tn[Q] = Tn[nt] = Tn[et] = Tn[
          rt
        ] = Tn[it] = Tn[_t] = Tn[vt] = Tn[gt] = Tn[bt] = !0),
          (Tn[G] = Tn[V] = Tn[ut] = !1);
        var An = {
            '\\': '\\',
            "'": "'",
            '\n': 'n',
            '\r': 'r',
            '\u2028': 'u2028',
            '\u2029': 'u2029',
          },
          Sn = parseFloat,
          On = parseInt,
          Un = 'object' == typeof t && t && t.Object === Object && t,
          kn =
            'object' == typeof self && self && self.Object === Object && self,
          Dn = Un || kn || Function('return this')(),
          In = n && !n.nodeType && n,
          Yn = In && 'object' == typeof r && r && !r.nodeType && r,
          jn = Yn && Yn.exports === In,
          Ln = jn && Un.process,
          Pn = (function() {
            try {
              var t = Yn && Yn.require && Yn.require('util').types;
              return t || (Ln && Ln.binding && Ln.binding('util'));
            } catch (t) {}
          })(),
          Bn = Pn && Pn.isArrayBuffer,
          Fn = Pn && Pn.isDate,
          zn = Pn && Pn.isMap,
          Hn = Pn && Pn.isRegExp,
          qn = Pn && Pn.isSet,
          $n = Pn && Pn.isTypedArray;
        function Wn(t, n, e) {
          switch (e.length) {
            case 0:
              return t.call(n);
            case 1:
              return t.call(n, e[0]);
            case 2:
              return t.call(n, e[0], e[1]);
            case 3:
              return t.call(n, e[0], e[1], e[2]);
          }
          return t.apply(n, e);
        }
        function Gn(t, n, e, r) {
          for (var i = -1, o = null == t ? 0 : t.length; ++i < o; ) {
            var u = t[i];
            n(r, u, e(u), t);
          }
          return r;
        }
        function Vn(t, n) {
          for (
            var e = -1, r = null == t ? 0 : t.length;
            ++e < r && !1 !== n(t[e], e, t);

          );
          return t;
        }
        function Zn(t, n) {
          for (var e = null == t ? 0 : t.length; e-- && !1 !== n(t[e], e, t); );
          return t;
        }
        function Xn(t, n) {
          for (var e = -1, r = null == t ? 0 : t.length; ++e < r; )
            if (!n(t[e], e, t)) return !1;
          return !0;
        }
        function Kn(t, n) {
          for (
            var e = -1, r = null == t ? 0 : t.length, i = 0, o = [];
            ++e < r;

          ) {
            var u = t[e];
            n(u, e, t) && (o[i++] = u);
          }
          return o;
        }
        function Jn(t, n) {
          return !!(null == t ? 0 : t.length) && ce(t, n, 0) > -1;
        }
        function Qn(t, n, e) {
          for (var r = -1, i = null == t ? 0 : t.length; ++r < i; )
            if (e(n, t[r])) return !0;
          return !1;
        }
        function te(t, n) {
          for (
            var e = -1, r = null == t ? 0 : t.length, i = Array(r);
            ++e < r;

          )
            i[e] = n(t[e], e, t);
          return i;
        }
        function ne(t, n) {
          for (var e = -1, r = n.length, i = t.length; ++e < r; )
            t[i + e] = n[e];
          return t;
        }
        function ee(t, n, e, r) {
          var i = -1,
            o = null == t ? 0 : t.length;
          for (r && o && (e = t[++i]); ++i < o; ) e = n(e, t[i], i, t);
          return e;
        }
        function re(t, n, e, r) {
          var i = null == t ? 0 : t.length;
          for (r && i && (e = t[--i]); i--; ) e = n(e, t[i], i, t);
          return e;
        }
        function ie(t, n) {
          for (var e = -1, r = null == t ? 0 : t.length; ++e < r; )
            if (n(t[e], e, t)) return !0;
          return !1;
        }
        var oe = he('length');
        function ue(t, n, e) {
          var r;
          return (
            e(t, function(t, e, i) {
              if (n(t, e, i)) return (r = e), !1;
            }),
            r
          );
        }
        function ae(t, n, e, r) {
          for (var i = t.length, o = e + (r ? 1 : -1); r ? o-- : ++o < i; )
            if (n(t[o], o, t)) return o;
          return -1;
        }
        function ce(t, n, e) {
          return n == n
            ? (function(t, n, e) {
                var r = e - 1,
                  i = t.length;
                for (; ++r < i; ) if (t[r] === n) return r;
                return -1;
              })(t, n, e)
            : ae(t, se, e);
        }
        function fe(t, n, e, r) {
          for (var i = e - 1, o = t.length; ++i < o; ) if (r(t[i], n)) return i;
          return -1;
        }
        function se(t) {
          return t != t;
        }
        function le(t, n) {
          var e = null == t ? 0 : t.length;
          return e ? _e(t, n) / e : Y;
        }
        function he(t) {
          return function(n) {
            return null == n ? o : n[t];
          };
        }
        function de(t) {
          return function(n) {
            return null == t ? o : t[n];
          };
        }
        function pe(t, n, e, r, i) {
          return (
            i(t, function(t, i, o) {
              e = r ? ((r = !1), t) : n(e, t, i, o);
            }),
            e
          );
        }
        function _e(t, n) {
          for (var e, r = -1, i = t.length; ++r < i; ) {
            var u = n(t[r]);
            u !== o && (e = e === o ? u : e + u);
          }
          return e;
        }
        function ve(t, n) {
          for (var e = -1, r = Array(t); ++e < t; ) r[e] = n(e);
          return r;
        }
        function ge(t) {
          return function(n) {
            return t(n);
          };
        }
        function be(t, n) {
          return te(n, function(n) {
            return t[n];
          });
        }
        function ye(t, n) {
          return t.has(n);
        }
        function me(t, n) {
          for (var e = -1, r = t.length; ++e < r && ce(n, t[e], 0) > -1; );
          return e;
        }
        function xe(t, n) {
          for (var e = t.length; e-- && ce(n, t[e], 0) > -1; );
          return e;
        }
        var we = de({
            À: 'A',
            Á: 'A',
            Â: 'A',
            Ã: 'A',
            Ä: 'A',
            Å: 'A',
            à: 'a',
            á: 'a',
            â: 'a',
            ã: 'a',
            ä: 'a',
            å: 'a',
            Ç: 'C',
            ç: 'c',
            Ð: 'D',
            ð: 'd',
            È: 'E',
            É: 'E',
            Ê: 'E',
            Ë: 'E',
            è: 'e',
            é: 'e',
            ê: 'e',
            ë: 'e',
            Ì: 'I',
            Í: 'I',
            Î: 'I',
            Ï: 'I',
            ì: 'i',
            í: 'i',
            î: 'i',
            ï: 'i',
            Ñ: 'N',
            ñ: 'n',
            Ò: 'O',
            Ó: 'O',
            Ô: 'O',
            Õ: 'O',
            Ö: 'O',
            Ø: 'O',
            ò: 'o',
            ó: 'o',
            ô: 'o',
            õ: 'o',
            ö: 'o',
            ø: 'o',
            Ù: 'U',
            Ú: 'U',
            Û: 'U',
            Ü: 'U',
            ù: 'u',
            ú: 'u',
            û: 'u',
            ü: 'u',
            Ý: 'Y',
            ý: 'y',
            ÿ: 'y',
            Æ: 'Ae',
            æ: 'ae',
            Þ: 'Th',
            þ: 'th',
            ß: 'ss',
            Ā: 'A',
            Ă: 'A',
            Ą: 'A',
            ā: 'a',
            ă: 'a',
            ą: 'a',
            Ć: 'C',
            Ĉ: 'C',
            Ċ: 'C',
            Č: 'C',
            ć: 'c',
            ĉ: 'c',
            ċ: 'c',
            č: 'c',
            Ď: 'D',
            Đ: 'D',
            ď: 'd',
            đ: 'd',
            Ē: 'E',
            Ĕ: 'E',
            Ė: 'E',
            Ę: 'E',
            Ě: 'E',
            ē: 'e',
            ĕ: 'e',
            ė: 'e',
            ę: 'e',
            ě: 'e',
            Ĝ: 'G',
            Ğ: 'G',
            Ġ: 'G',
            Ģ: 'G',
            ĝ: 'g',
            ğ: 'g',
            ġ: 'g',
            ģ: 'g',
            Ĥ: 'H',
            Ħ: 'H',
            ĥ: 'h',
            ħ: 'h',
            Ĩ: 'I',
            Ī: 'I',
            Ĭ: 'I',
            Į: 'I',
            İ: 'I',
            ĩ: 'i',
            ī: 'i',
            ĭ: 'i',
            į: 'i',
            ı: 'i',
            Ĵ: 'J',
            ĵ: 'j',
            Ķ: 'K',
            ķ: 'k',
            ĸ: 'k',
            Ĺ: 'L',
            Ļ: 'L',
            Ľ: 'L',
            Ŀ: 'L',
            Ł: 'L',
            ĺ: 'l',
            ļ: 'l',
            ľ: 'l',
            ŀ: 'l',
            ł: 'l',
            Ń: 'N',
            Ņ: 'N',
            Ň: 'N',
            Ŋ: 'N',
            ń: 'n',
            ņ: 'n',
            ň: 'n',
            ŋ: 'n',
            Ō: 'O',
            Ŏ: 'O',
            Ő: 'O',
            ō: 'o',
            ŏ: 'o',
            ő: 'o',
            Ŕ: 'R',
            Ŗ: 'R',
            Ř: 'R',
            ŕ: 'r',
            ŗ: 'r',
            ř: 'r',
            Ś: 'S',
            Ŝ: 'S',
            Ş: 'S',
            Š: 'S',
            ś: 's',
            ŝ: 's',
            ş: 's',
            š: 's',
            Ţ: 'T',
            Ť: 'T',
            Ŧ: 'T',
            ţ: 't',
            ť: 't',
            ŧ: 't',
            Ũ: 'U',
            Ū: 'U',
            Ŭ: 'U',
            Ů: 'U',
            Ű: 'U',
            Ų: 'U',
            ũ: 'u',
            ū: 'u',
            ŭ: 'u',
            ů: 'u',
            ű: 'u',
            ų: 'u',
            Ŵ: 'W',
            ŵ: 'w',
            Ŷ: 'Y',
            ŷ: 'y',
            Ÿ: 'Y',
            Ź: 'Z',
            Ż: 'Z',
            Ž: 'Z',
            ź: 'z',
            ż: 'z',
            ž: 'z',
            Ĳ: 'IJ',
            ĳ: 'ij',
            Œ: 'Oe',
            œ: 'oe',
            ŉ: "'n",
            ſ: 's',
          }),
          Ce = de({
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            '"': '&quot;',
            "'": '&#39;',
          });
        function Me(t) {
          return '\\' + An[t];
        }
        function Re(t) {
          return Cn.test(t);
        }
        function Ee(t) {
          var n = -1,
            e = Array(t.size);
          return (
            t.forEach(function(t, r) {
              e[++n] = [r, t];
            }),
            e
          );
        }
        function Ne(t, n) {
          return function(e) {
            return t(n(e));
          };
        }
        function Te(t, n) {
          for (var e = -1, r = t.length, i = 0, o = []; ++e < r; ) {
            var u = t[e];
            (u !== n && u !== l) || ((t[e] = l), (o[i++] = e));
          }
          return o;
        }
        function Ae(t) {
          var n = -1,
            e = Array(t.size);
          return (
            t.forEach(function(t) {
              e[++n] = t;
            }),
            e
          );
        }
        function Se(t) {
          var n = -1,
            e = Array(t.size);
          return (
            t.forEach(function(t) {
              e[++n] = [t, t];
            }),
            e
          );
        }
        function Oe(t) {
          return Re(t)
            ? (function(t) {
                var n = (xn.lastIndex = 0);
                for (; xn.test(t); ) ++n;
                return n;
              })(t)
            : oe(t);
        }
        function Ue(t) {
          return Re(t)
            ? (function(t) {
                return t.match(xn) || [];
              })(t)
            : (function(t) {
                return t.split('');
              })(t);
        }
        var ke = de({
          '&amp;': '&',
          '&lt;': '<',
          '&gt;': '>',
          '&quot;': '"',
          '&#39;': "'",
        });
        var De = (function t(n) {
          var e,
            r = (n =
              null == n ? Dn : De.defaults(Dn.Object(), n, De.pick(Dn, Rn)))
              .Array,
            i = n.Date,
            Jt = n.Error,
            Qt = n.Function,
            tn = n.Math,
            nn = n.Object,
            en = n.RegExp,
            rn = n.String,
            on = n.TypeError,
            un = r.prototype,
            an = Qt.prototype,
            cn = nn.prototype,
            fn = n['__core-js_shared__'],
            sn = an.toString,
            ln = cn.hasOwnProperty,
            hn = 0,
            dn = (e = /[^.]+$/.exec((fn && fn.keys && fn.keys.IE_PROTO) || ''))
              ? 'Symbol(src)_1.' + e
              : '',
            pn = cn.toString,
            _n = sn.call(nn),
            vn = Dn._,
            gn = en(
              '^' +
                sn
                  .call(ln)
                  .replace(Ut, '\\$&')
                  .replace(
                    /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
                    '$1.*?'
                  ) +
                '$'
            ),
            bn = jn ? n.Buffer : o,
            xn = n.Symbol,
            Cn = n.Uint8Array,
            An = bn ? bn.allocUnsafe : o,
            Un = Ne(nn.getPrototypeOf, nn),
            kn = nn.create,
            In = cn.propertyIsEnumerable,
            Yn = un.splice,
            Ln = xn ? xn.isConcatSpreadable : o,
            Pn = xn ? xn.iterator : o,
            oe = xn ? xn.toStringTag : o,
            de = (function() {
              try {
                var t = Po(nn, 'defineProperty');
                return t({}, '', {}), t;
              } catch (t) {}
            })(),
            Ie = n.clearTimeout !== Dn.clearTimeout && n.clearTimeout,
            Ye = i && i.now !== Dn.Date.now && i.now,
            je = n.setTimeout !== Dn.setTimeout && n.setTimeout,
            Le = tn.ceil,
            Pe = tn.floor,
            Be = nn.getOwnPropertySymbols,
            Fe = bn ? bn.isBuffer : o,
            ze = n.isFinite,
            He = un.join,
            qe = Ne(nn.keys, nn),
            $e = tn.max,
            We = tn.min,
            Ge = i.now,
            Ve = n.parseInt,
            Ze = tn.random,
            Xe = un.reverse,
            Ke = Po(n, 'DataView'),
            Je = Po(n, 'Map'),
            Qe = Po(n, 'Promise'),
            tr = Po(n, 'Set'),
            nr = Po(n, 'WeakMap'),
            er = Po(nn, 'create'),
            rr = nr && new nr(),
            ir = {},
            or = lu(Ke),
            ur = lu(Je),
            ar = lu(Qe),
            cr = lu(tr),
            fr = lu(nr),
            sr = xn ? xn.prototype : o,
            lr = sr ? sr.valueOf : o,
            hr = sr ? sr.toString : o;
          function dr(t) {
            if (Ta(t) && !ga(t) && !(t instanceof gr)) {
              if (t instanceof vr) return t;
              if (ln.call(t, '__wrapped__')) return hu(t);
            }
            return new vr(t);
          }
          var pr = (function() {
            function t() {}
            return function(n) {
              if (!Na(n)) return {};
              if (kn) return kn(n);
              t.prototype = n;
              var e = new t();
              return (t.prototype = o), e;
            };
          })();
          function _r() {}
          function vr(t, n) {
            (this.__wrapped__ = t),
              (this.__actions__ = []),
              (this.__chain__ = !!n),
              (this.__index__ = 0),
              (this.__values__ = o);
          }
          function gr(t) {
            (this.__wrapped__ = t),
              (this.__actions__ = []),
              (this.__dir__ = 1),
              (this.__filtered__ = !1),
              (this.__iteratees__ = []),
              (this.__takeCount__ = j),
              (this.__views__ = []);
          }
          function br(t) {
            var n = -1,
              e = null == t ? 0 : t.length;
            for (this.clear(); ++n < e; ) {
              var r = t[n];
              this.set(r[0], r[1]);
            }
          }
          function yr(t) {
            var n = -1,
              e = null == t ? 0 : t.length;
            for (this.clear(); ++n < e; ) {
              var r = t[n];
              this.set(r[0], r[1]);
            }
          }
          function mr(t) {
            var n = -1,
              e = null == t ? 0 : t.length;
            for (this.clear(); ++n < e; ) {
              var r = t[n];
              this.set(r[0], r[1]);
            }
          }
          function xr(t) {
            var n = -1,
              e = null == t ? 0 : t.length;
            for (this.__data__ = new mr(); ++n < e; ) this.add(t[n]);
          }
          function wr(t) {
            var n = (this.__data__ = new yr(t));
            this.size = n.size;
          }
          function Cr(t, n) {
            var e = ga(t),
              r = !e && va(t),
              i = !e && !r && xa(t),
              o = !e && !r && !i && Ya(t),
              u = e || r || i || o,
              a = u ? ve(t.length, rn) : [],
              c = a.length;
            for (var f in t)
              (!n && !ln.call(t, f)) ||
                (u &&
                  ('length' == f ||
                    (i && ('offset' == f || 'parent' == f)) ||
                    (o &&
                      ('buffer' == f ||
                        'byteLength' == f ||
                        'byteOffset' == f)) ||
                    Wo(f, c))) ||
                a.push(f);
            return a;
          }
          function Mr(t) {
            var n = t.length;
            return n ? t[xi(0, n - 1)] : o;
          }
          function Rr(t, n) {
            return cu(eo(t), Dr(n, 0, t.length));
          }
          function Er(t) {
            return cu(eo(t));
          }
          function Nr(t, n, e) {
            ((e === o || da(t[n], e)) && (e !== o || n in t)) || Ur(t, n, e);
          }
          function Tr(t, n, e) {
            var r = t[n];
            (ln.call(t, n) && da(r, e) && (e !== o || n in t)) || Ur(t, n, e);
          }
          function Ar(t, n) {
            for (var e = t.length; e--; ) if (da(t[e][0], n)) return e;
            return -1;
          }
          function Sr(t, n, e, r) {
            return (
              Pr(t, function(t, i, o) {
                n(r, t, e(t), o);
              }),
              r
            );
          }
          function Or(t, n) {
            return t && ro(n, ic(n), t);
          }
          function Ur(t, n, e) {
            '__proto__' == n && de
              ? de(t, n, {
                  configurable: !0,
                  enumerable: !0,
                  value: e,
                  writable: !0,
                })
              : (t[n] = e);
          }
          function kr(t, n) {
            for (var e = -1, i = n.length, u = r(i), a = null == t; ++e < i; )
              u[e] = a ? o : Qa(t, n[e]);
            return u;
          }
          function Dr(t, n, e) {
            return (
              t == t &&
                (e !== o && (t = t <= e ? t : e),
                n !== o && (t = t >= n ? t : n)),
              t
            );
          }
          function Ir(t, n, e, r, i, u) {
            var a,
              c = n & h,
              f = n & d,
              s = n & p;
            if ((e && (a = i ? e(t, r, i, u) : e(t)), a !== o)) return a;
            if (!Na(t)) return t;
            var l = ga(t);
            if (l) {
              if (
                ((a = (function(t) {
                  var n = t.length,
                    e = new t.constructor(n);
                  return (
                    n &&
                      'string' == typeof t[0] &&
                      ln.call(t, 'index') &&
                      ((e.index = t.index), (e.input = t.input)),
                    e
                  );
                })(t)),
                !c)
              )
                return eo(t, a);
            } else {
              var _ = zo(t),
                v = _ == V || _ == Z;
              if (xa(t)) return Xi(t, c);
              if (_ == Q || _ == F || (v && !i)) {
                if (((a = f || v ? {} : qo(t)), !c))
                  return f
                    ? (function(t, n) {
                        return ro(t, Fo(t), n);
                      })(
                        t,
                        (function(t, n) {
                          return t && ro(n, oc(n), t);
                        })(a, t)
                      )
                    : (function(t, n) {
                        return ro(t, Bo(t), n);
                      })(t, Or(a, t));
              } else {
                if (!Tn[_]) return i ? t : {};
                a = (function(t, n, e) {
                  var r,
                    i = t.constructor;
                  switch (n) {
                    case ct:
                      return Ki(t);
                    case q:
                    case $:
                      return new i(+t);
                    case ft:
                      return (function(t, n) {
                        var e = n ? Ki(t.buffer) : t.buffer;
                        return new t.constructor(e, t.byteOffset, t.byteLength);
                      })(t, e);
                    case st:
                    case lt:
                    case ht:
                    case dt:
                    case pt:
                    case _t:
                    case vt:
                    case gt:
                    case bt:
                      return Ji(t, e);
                    case X:
                      return new i();
                    case K:
                    case rt:
                      return new i(t);
                    case nt:
                      return (function(t) {
                        var n = new t.constructor(t.source, Ht.exec(t));
                        return (n.lastIndex = t.lastIndex), n;
                      })(t);
                    case et:
                      return new i();
                    case it:
                      return (r = t), lr ? nn(lr.call(r)) : {};
                  }
                })(t, _, c);
              }
            }
            u || (u = new wr());
            var g = u.get(t);
            if (g) return g;
            u.set(t, a),
              ka(t)
                ? t.forEach(function(r) {
                    a.add(Ir(r, n, e, r, t, u));
                  })
                : Aa(t) &&
                  t.forEach(function(r, i) {
                    a.set(i, Ir(r, n, e, i, t, u));
                  });
            var b = l ? o : (s ? (f ? Uo : Oo) : f ? oc : ic)(t);
            return (
              Vn(b || t, function(r, i) {
                b && (r = t[(i = r)]), Tr(a, i, Ir(r, n, e, i, t, u));
              }),
              a
            );
          }
          function Yr(t, n, e) {
            var r = e.length;
            if (null == t) return !r;
            for (t = nn(t); r--; ) {
              var i = e[r],
                u = n[i],
                a = t[i];
              if ((a === o && !(i in t)) || !u(a)) return !1;
            }
            return !0;
          }
          function jr(t, n, e) {
            if ('function' != typeof t) throw new on(c);
            return iu(function() {
              t.apply(o, e);
            }, n);
          }
          function Lr(t, n, e, r) {
            var i = -1,
              o = Jn,
              a = !0,
              c = t.length,
              f = [],
              s = n.length;
            if (!c) return f;
            e && (n = te(n, ge(e))),
              r
                ? ((o = Qn), (a = !1))
                : n.length >= u && ((o = ye), (a = !1), (n = new xr(n)));
            t: for (; ++i < c; ) {
              var l = t[i],
                h = null == e ? l : e(l);
              if (((l = r || 0 !== l ? l : 0), a && h == h)) {
                for (var d = s; d--; ) if (n[d] === h) continue t;
                f.push(l);
              } else o(n, h, r) || f.push(l);
            }
            return f;
          }
          (dr.templateSettings = {
            escape: Et,
            evaluate: Nt,
            interpolate: Tt,
            variable: '',
            imports: {_: dr},
          }),
            (dr.prototype = _r.prototype),
            (dr.prototype.constructor = dr),
            (vr.prototype = pr(_r.prototype)),
            (vr.prototype.constructor = vr),
            (gr.prototype = pr(_r.prototype)),
            (gr.prototype.constructor = gr),
            (br.prototype.clear = function() {
              (this.__data__ = er ? er(null) : {}), (this.size = 0);
            }),
            (br.prototype.delete = function(t) {
              var n = this.has(t) && delete this.__data__[t];
              return (this.size -= n ? 1 : 0), n;
            }),
            (br.prototype.get = function(t) {
              var n = this.__data__;
              if (er) {
                var e = n[t];
                return e === f ? o : e;
              }
              return ln.call(n, t) ? n[t] : o;
            }),
            (br.prototype.has = function(t) {
              var n = this.__data__;
              return er ? n[t] !== o : ln.call(n, t);
            }),
            (br.prototype.set = function(t, n) {
              var e = this.__data__;
              return (
                (this.size += this.has(t) ? 0 : 1),
                (e[t] = er && n === o ? f : n),
                this
              );
            }),
            (yr.prototype.clear = function() {
              (this.__data__ = []), (this.size = 0);
            }),
            (yr.prototype.delete = function(t) {
              var n = this.__data__,
                e = Ar(n, t);
              return !(
                e < 0 ||
                (e == n.length - 1 ? n.pop() : Yn.call(n, e, 1), --this.size, 0)
              );
            }),
            (yr.prototype.get = function(t) {
              var n = this.__data__,
                e = Ar(n, t);
              return e < 0 ? o : n[e][1];
            }),
            (yr.prototype.has = function(t) {
              return Ar(this.__data__, t) > -1;
            }),
            (yr.prototype.set = function(t, n) {
              var e = this.__data__,
                r = Ar(e, t);
              return (
                r < 0 ? (++this.size, e.push([t, n])) : (e[r][1] = n), this
              );
            }),
            (mr.prototype.clear = function() {
              (this.size = 0),
                (this.__data__ = {
                  hash: new br(),
                  map: new (Je || yr)(),
                  string: new br(),
                });
            }),
            (mr.prototype.delete = function(t) {
              var n = jo(this, t).delete(t);
              return (this.size -= n ? 1 : 0), n;
            }),
            (mr.prototype.get = function(t) {
              return jo(this, t).get(t);
            }),
            (mr.prototype.has = function(t) {
              return jo(this, t).has(t);
            }),
            (mr.prototype.set = function(t, n) {
              var e = jo(this, t),
                r = e.size;
              return e.set(t, n), (this.size += e.size == r ? 0 : 1), this;
            }),
            (xr.prototype.add = xr.prototype.push = function(t) {
              return this.__data__.set(t, f), this;
            }),
            (xr.prototype.has = function(t) {
              return this.__data__.has(t);
            }),
            (wr.prototype.clear = function() {
              (this.__data__ = new yr()), (this.size = 0);
            }),
            (wr.prototype.delete = function(t) {
              var n = this.__data__,
                e = n.delete(t);
              return (this.size = n.size), e;
            }),
            (wr.prototype.get = function(t) {
              return this.__data__.get(t);
            }),
            (wr.prototype.has = function(t) {
              return this.__data__.has(t);
            }),
            (wr.prototype.set = function(t, n) {
              var e = this.__data__;
              if (e instanceof yr) {
                var r = e.__data__;
                if (!Je || r.length < u - 1)
                  return r.push([t, n]), (this.size = ++e.size), this;
                e = this.__data__ = new mr(r);
              }
              return e.set(t, n), (this.size = e.size), this;
            });
          var Pr = uo(Gr),
            Br = uo(Vr, !0);
          function Fr(t, n) {
            var e = !0;
            return (
              Pr(t, function(t, r, i) {
                return (e = !!n(t, r, i));
              }),
              e
            );
          }
          function zr(t, n, e) {
            for (var r = -1, i = t.length; ++r < i; ) {
              var u = t[r],
                a = n(u);
              if (null != a && (c === o ? a == a && !Ia(a) : e(a, c)))
                var c = a,
                  f = u;
            }
            return f;
          }
          function Hr(t, n) {
            var e = [];
            return (
              Pr(t, function(t, r, i) {
                n(t, r, i) && e.push(t);
              }),
              e
            );
          }
          function qr(t, n, e, r, i) {
            var o = -1,
              u = t.length;
            for (e || (e = $o), i || (i = []); ++o < u; ) {
              var a = t[o];
              n > 0 && e(a)
                ? n > 1
                  ? qr(a, n - 1, e, r, i)
                  : ne(i, a)
                : r || (i[i.length] = a);
            }
            return i;
          }
          var $r = ao(),
            Wr = ao(!0);
          function Gr(t, n) {
            return t && $r(t, n, ic);
          }
          function Vr(t, n) {
            return t && Wr(t, n, ic);
          }
          function Zr(t, n) {
            return Kn(n, function(n) {
              return Ma(t[n]);
            });
          }
          function Xr(t, n) {
            for (var e = 0, r = (n = Wi(n, t)).length; null != t && e < r; )
              t = t[su(n[e++])];
            return e && e == r ? t : o;
          }
          function Kr(t, n, e) {
            var r = n(t);
            return ga(t) ? r : ne(r, e(t));
          }
          function Jr(t) {
            return null == t
              ? t === o
                ? ot
                : J
              : oe && oe in nn(t)
              ? (function(t) {
                  var n = ln.call(t, oe),
                    e = t[oe];
                  try {
                    t[oe] = o;
                    var r = !0;
                  } catch (t) {}
                  var i = pn.call(t);
                  return r && (n ? (t[oe] = e) : delete t[oe]), i;
                })(t)
              : (function(t) {
                  return pn.call(t);
                })(t);
          }
          function Qr(t, n) {
            return t > n;
          }
          function ti(t, n) {
            return null != t && ln.call(t, n);
          }
          function ni(t, n) {
            return null != t && n in nn(t);
          }
          function ei(t, n, e) {
            for (
              var i = e ? Qn : Jn,
                u = t[0].length,
                a = t.length,
                c = a,
                f = r(a),
                s = 1 / 0,
                l = [];
              c--;

            ) {
              var h = t[c];
              c && n && (h = te(h, ge(n))),
                (s = We(h.length, s)),
                (f[c] =
                  !e && (n || (u >= 120 && h.length >= 120))
                    ? new xr(c && h)
                    : o);
            }
            h = t[0];
            var d = -1,
              p = f[0];
            t: for (; ++d < u && l.length < s; ) {
              var _ = h[d],
                v = n ? n(_) : _;
              if (((_ = e || 0 !== _ ? _ : 0), !(p ? ye(p, v) : i(l, v, e)))) {
                for (c = a; --c; ) {
                  var g = f[c];
                  if (!(g ? ye(g, v) : i(t[c], v, e))) continue t;
                }
                p && p.push(v), l.push(_);
              }
            }
            return l;
          }
          function ri(t, n, e) {
            var r = null == (t = nu(t, (n = Wi(n, t)))) ? t : t[su(Cu(n))];
            return null == r ? o : Wn(r, t, e);
          }
          function ii(t) {
            return Ta(t) && Jr(t) == F;
          }
          function oi(t, n, e, r, i) {
            return (
              t === n ||
              (null == t || null == n || (!Ta(t) && !Ta(n))
                ? t != t && n != n
                : (function(t, n, e, r, i, u) {
                    var a = ga(t),
                      c = ga(n),
                      f = a ? z : zo(t),
                      s = c ? z : zo(n),
                      l = (f = f == F ? Q : f) == Q,
                      h = (s = s == F ? Q : s) == Q,
                      d = f == s;
                    if (d && xa(t)) {
                      if (!xa(n)) return !1;
                      (a = !0), (l = !1);
                    }
                    if (d && !l)
                      return (
                        u || (u = new wr()),
                        a || Ya(t)
                          ? Ao(t, n, e, r, i, u)
                          : (function(t, n, e, r, i, o, u) {
                              switch (e) {
                                case ft:
                                  if (
                                    t.byteLength != n.byteLength ||
                                    t.byteOffset != n.byteOffset
                                  )
                                    return !1;
                                  (t = t.buffer), (n = n.buffer);
                                case ct:
                                  return !(
                                    t.byteLength != n.byteLength ||
                                    !o(new Cn(t), new Cn(n))
                                  );
                                case q:
                                case $:
                                case K:
                                  return da(+t, +n);
                                case G:
                                  return (
                                    t.name == n.name && t.message == n.message
                                  );
                                case nt:
                                case rt:
                                  return t == n + '';
                                case X:
                                  var a = Ee;
                                case et:
                                  var c = r & _;
                                  if ((a || (a = Ae), t.size != n.size && !c))
                                    return !1;
                                  var f = u.get(t);
                                  if (f) return f == n;
                                  (r |= v), u.set(t, n);
                                  var s = Ao(a(t), a(n), r, i, o, u);
                                  return u.delete(t), s;
                                case it:
                                  if (lr) return lr.call(t) == lr.call(n);
                              }
                              return !1;
                            })(t, n, f, e, r, i, u)
                      );
                    if (!(e & _)) {
                      var p = l && ln.call(t, '__wrapped__'),
                        g = h && ln.call(n, '__wrapped__');
                      if (p || g) {
                        var b = p ? t.value() : t,
                          y = g ? n.value() : n;
                        return u || (u = new wr()), i(b, y, e, r, u);
                      }
                    }
                    return (
                      !!d &&
                      (u || (u = new wr()),
                      (function(t, n, e, r, i, u) {
                        var a = e & _,
                          c = Oo(t),
                          f = c.length,
                          s = Oo(n).length;
                        if (f != s && !a) return !1;
                        for (var l = f; l--; ) {
                          var h = c[l];
                          if (!(a ? h in n : ln.call(n, h))) return !1;
                        }
                        var d = u.get(t);
                        if (d && u.get(n)) return d == n;
                        var p = !0;
                        u.set(t, n), u.set(n, t);
                        for (var v = a; ++l < f; ) {
                          h = c[l];
                          var g = t[h],
                            b = n[h];
                          if (r)
                            var y = a
                              ? r(b, g, h, n, t, u)
                              : r(g, b, h, t, n, u);
                          if (!(y === o ? g === b || i(g, b, e, r, u) : y)) {
                            p = !1;
                            break;
                          }
                          v || (v = 'constructor' == h);
                        }
                        if (p && !v) {
                          var m = t.constructor,
                            x = n.constructor;
                          m != x &&
                            'constructor' in t &&
                            'constructor' in n &&
                            !(
                              'function' == typeof m &&
                              m instanceof m &&
                              'function' == typeof x &&
                              x instanceof x
                            ) &&
                            (p = !1);
                        }
                        return u.delete(t), u.delete(n), p;
                      })(t, n, e, r, i, u))
                    );
                  })(t, n, e, r, oi, i))
            );
          }
          function ui(t, n, e, r) {
            var i = e.length,
              u = i,
              a = !r;
            if (null == t) return !u;
            for (t = nn(t); i--; ) {
              var c = e[i];
              if (a && c[2] ? c[1] !== t[c[0]] : !(c[0] in t)) return !1;
            }
            for (; ++i < u; ) {
              var f = (c = e[i])[0],
                s = t[f],
                l = c[1];
              if (a && c[2]) {
                if (s === o && !(f in t)) return !1;
              } else {
                var h = new wr();
                if (r) var d = r(s, l, f, t, n, h);
                if (!(d === o ? oi(l, s, _ | v, r, h) : d)) return !1;
              }
            }
            return !0;
          }
          function ai(t) {
            return (
              !(!Na(t) || ((n = t), dn && dn in n)) &&
              (Ma(t) ? gn : Wt).test(lu(t))
            );
            var n;
          }
          function ci(t) {
            return 'function' == typeof t
              ? t
              : null == t
              ? Sc
              : 'object' == typeof t
              ? ga(t)
                ? pi(t[0], t[1])
                : di(t)
              : Pc(t);
          }
          function fi(t) {
            if (!Ko(t)) return qe(t);
            var n = [];
            for (var e in nn(t))
              ln.call(t, e) && 'constructor' != e && n.push(e);
            return n;
          }
          function si(t) {
            if (!Na(t))
              return (function(t) {
                var n = [];
                if (null != t) for (var e in nn(t)) n.push(e);
                return n;
              })(t);
            var n = Ko(t),
              e = [];
            for (var r in t)
              ('constructor' != r || (!n && ln.call(t, r))) && e.push(r);
            return e;
          }
          function li(t, n) {
            return t < n;
          }
          function hi(t, n) {
            var e = -1,
              i = ya(t) ? r(t.length) : [];
            return (
              Pr(t, function(t, r, o) {
                i[++e] = n(t, r, o);
              }),
              i
            );
          }
          function di(t) {
            var n = Lo(t);
            return 1 == n.length && n[0][2]
              ? Qo(n[0][0], n[0][1])
              : function(e) {
                  return e === t || ui(e, t, n);
                };
          }
          function pi(t, n) {
            return Vo(t) && Jo(n)
              ? Qo(su(t), n)
              : function(e) {
                  var r = Qa(e, t);
                  return r === o && r === n ? tc(e, t) : oi(n, r, _ | v);
                };
          }
          function _i(t, n, e, r, i) {
            t !== n &&
              $r(
                n,
                function(u, a) {
                  if ((i || (i = new wr()), Na(u)))
                    !(function(t, n, e, r, i, u, a) {
                      var c = eu(t, e),
                        f = eu(n, e),
                        s = a.get(f);
                      if (s) Nr(t, e, s);
                      else {
                        var l = u ? u(c, f, e + '', t, n, a) : o,
                          h = l === o;
                        if (h) {
                          var d = ga(f),
                            p = !d && xa(f),
                            _ = !d && !p && Ya(f);
                          (l = f),
                            d || p || _
                              ? ga(c)
                                ? (l = c)
                                : ma(c)
                                ? (l = eo(c))
                                : p
                                ? ((h = !1), (l = Xi(f, !0)))
                                : _
                                ? ((h = !1), (l = Ji(f, !0)))
                                : (l = [])
                              : Oa(f) || va(f)
                              ? ((l = c),
                                va(c)
                                  ? (l = qa(c))
                                  : (Na(c) && !Ma(c)) || (l = qo(f)))
                              : (h = !1);
                        }
                        h && (a.set(f, l), i(l, f, r, u, a), a.delete(f)),
                          Nr(t, e, l);
                      }
                    })(t, n, a, e, _i, r, i);
                  else {
                    var c = r ? r(eu(t, a), u, a + '', t, n, i) : o;
                    c === o && (c = u), Nr(t, a, c);
                  }
                },
                oc
              );
          }
          function vi(t, n) {
            var e = t.length;
            if (e) return Wo((n += n < 0 ? e : 0), e) ? t[n] : o;
          }
          function gi(t, n, e) {
            var r = -1;
            return (
              (n = te(n.length ? n : [Sc], ge(Yo()))),
              (function(t, n) {
                var e = t.length;
                for (t.sort(n); e--; ) t[e] = t[e].value;
                return t;
              })(
                hi(t, function(t, e, i) {
                  return {
                    criteria: te(n, function(n) {
                      return n(t);
                    }),
                    index: ++r,
                    value: t,
                  };
                }),
                function(t, n) {
                  return (function(t, n, e) {
                    for (
                      var r = -1,
                        i = t.criteria,
                        o = n.criteria,
                        u = i.length,
                        a = e.length;
                      ++r < u;

                    ) {
                      var c = Qi(i[r], o[r]);
                      if (c) {
                        if (r >= a) return c;
                        var f = e[r];
                        return c * ('desc' == f ? -1 : 1);
                      }
                    }
                    return t.index - n.index;
                  })(t, n, e);
                }
              )
            );
          }
          function bi(t, n, e) {
            for (var r = -1, i = n.length, o = {}; ++r < i; ) {
              var u = n[r],
                a = Xr(t, u);
              e(a, u) && Ei(o, Wi(u, t), a);
            }
            return o;
          }
          function yi(t, n, e, r) {
            var i = r ? fe : ce,
              o = -1,
              u = n.length,
              a = t;
            for (t === n && (n = eo(n)), e && (a = te(t, ge(e))); ++o < u; )
              for (
                var c = 0, f = n[o], s = e ? e(f) : f;
                (c = i(a, s, c, r)) > -1;

              )
                a !== t && Yn.call(a, c, 1), Yn.call(t, c, 1);
            return t;
          }
          function mi(t, n) {
            for (var e = t ? n.length : 0, r = e - 1; e--; ) {
              var i = n[e];
              if (e == r || i !== o) {
                var o = i;
                Wo(i) ? Yn.call(t, i, 1) : Li(t, i);
              }
            }
            return t;
          }
          function xi(t, n) {
            return t + Pe(Ze() * (n - t + 1));
          }
          function wi(t, n) {
            var e = '';
            if (!t || n < 1 || n > D) return e;
            do {
              n % 2 && (e += t), (n = Pe(n / 2)) && (t += t);
            } while (n);
            return e;
          }
          function Ci(t, n) {
            return ou(tu(t, n, Sc), t + '');
          }
          function Mi(t) {
            return Mr(dc(t));
          }
          function Ri(t, n) {
            var e = dc(t);
            return cu(e, Dr(n, 0, e.length));
          }
          function Ei(t, n, e, r) {
            if (!Na(t)) return t;
            for (
              var i = -1, u = (n = Wi(n, t)).length, a = u - 1, c = t;
              null != c && ++i < u;

            ) {
              var f = su(n[i]),
                s = e;
              if (i != a) {
                var l = c[f];
                (s = r ? r(l, f, c) : o) === o &&
                  (s = Na(l) ? l : Wo(n[i + 1]) ? [] : {});
              }
              Tr(c, f, s), (c = c[f]);
            }
            return t;
          }
          var Ni = rr
              ? function(t, n) {
                  return rr.set(t, n), t;
                }
              : Sc,
            Ti = de
              ? function(t, n) {
                  return de(t, 'toString', {
                    configurable: !0,
                    enumerable: !1,
                    value: Nc(n),
                    writable: !0,
                  });
                }
              : Sc;
          function Ai(t) {
            return cu(dc(t));
          }
          function Si(t, n, e) {
            var i = -1,
              o = t.length;
            n < 0 && (n = -n > o ? 0 : o + n),
              (e = e > o ? o : e) < 0 && (e += o),
              (o = n > e ? 0 : (e - n) >>> 0),
              (n >>>= 0);
            for (var u = r(o); ++i < o; ) u[i] = t[i + n];
            return u;
          }
          function Oi(t, n) {
            var e;
            return (
              Pr(t, function(t, r, i) {
                return !(e = n(t, r, i));
              }),
              !!e
            );
          }
          function Ui(t, n, e) {
            var r = 0,
              i = null == t ? r : t.length;
            if ('number' == typeof n && n == n && i <= P) {
              for (; r < i; ) {
                var o = (r + i) >>> 1,
                  u = t[o];
                null !== u && !Ia(u) && (e ? u <= n : u < n)
                  ? (r = o + 1)
                  : (i = o);
              }
              return i;
            }
            return ki(t, n, Sc, e);
          }
          function ki(t, n, e, r) {
            n = e(n);
            for (
              var i = 0,
                u = null == t ? 0 : t.length,
                a = n != n,
                c = null === n,
                f = Ia(n),
                s = n === o;
              i < u;

            ) {
              var l = Pe((i + u) / 2),
                h = e(t[l]),
                d = h !== o,
                p = null === h,
                _ = h == h,
                v = Ia(h);
              if (a) var g = r || _;
              else
                g = s
                  ? _ && (r || d)
                  : c
                  ? _ && d && (r || !p)
                  : f
                  ? _ && d && !p && (r || !v)
                  : !p && !v && (r ? h <= n : h < n);
              g ? (i = l + 1) : (u = l);
            }
            return We(u, L);
          }
          function Di(t, n) {
            for (var e = -1, r = t.length, i = 0, o = []; ++e < r; ) {
              var u = t[e],
                a = n ? n(u) : u;
              if (!e || !da(a, c)) {
                var c = a;
                o[i++] = 0 === u ? 0 : u;
              }
            }
            return o;
          }
          function Ii(t) {
            return 'number' == typeof t ? t : Ia(t) ? Y : +t;
          }
          function Yi(t) {
            if ('string' == typeof t) return t;
            if (ga(t)) return te(t, Yi) + '';
            if (Ia(t)) return hr ? hr.call(t) : '';
            var n = t + '';
            return '0' == n && 1 / t == -k ? '-0' : n;
          }
          function ji(t, n, e) {
            var r = -1,
              i = Jn,
              o = t.length,
              a = !0,
              c = [],
              f = c;
            if (e) (a = !1), (i = Qn);
            else if (o >= u) {
              var s = n ? null : Co(t);
              if (s) return Ae(s);
              (a = !1), (i = ye), (f = new xr());
            } else f = n ? [] : c;
            t: for (; ++r < o; ) {
              var l = t[r],
                h = n ? n(l) : l;
              if (((l = e || 0 !== l ? l : 0), a && h == h)) {
                for (var d = f.length; d--; ) if (f[d] === h) continue t;
                n && f.push(h), c.push(l);
              } else i(f, h, e) || (f !== c && f.push(h), c.push(l));
            }
            return c;
          }
          function Li(t, n) {
            return null == (t = nu(t, (n = Wi(n, t)))) || delete t[su(Cu(n))];
          }
          function Pi(t, n, e, r) {
            return Ei(t, n, e(Xr(t, n)), r);
          }
          function Bi(t, n, e, r) {
            for (
              var i = t.length, o = r ? i : -1;
              (r ? o-- : ++o < i) && n(t[o], o, t);

            );
            return e
              ? Si(t, r ? 0 : o, r ? o + 1 : i)
              : Si(t, r ? o + 1 : 0, r ? i : o);
          }
          function Fi(t, n) {
            var e = t;
            return (
              e instanceof gr && (e = e.value()),
              ee(
                n,
                function(t, n) {
                  return n.func.apply(n.thisArg, ne([t], n.args));
                },
                e
              )
            );
          }
          function zi(t, n, e) {
            var i = t.length;
            if (i < 2) return i ? ji(t[0]) : [];
            for (var o = -1, u = r(i); ++o < i; )
              for (var a = t[o], c = -1; ++c < i; )
                c != o && (u[o] = Lr(u[o] || a, t[c], n, e));
            return ji(qr(u, 1), n, e);
          }
          function Hi(t, n, e) {
            for (var r = -1, i = t.length, u = n.length, a = {}; ++r < i; ) {
              var c = r < u ? n[r] : o;
              e(a, t[r], c);
            }
            return a;
          }
          function qi(t) {
            return ma(t) ? t : [];
          }
          function $i(t) {
            return 'function' == typeof t ? t : Sc;
          }
          function Wi(t, n) {
            return ga(t) ? t : Vo(t, n) ? [t] : fu($a(t));
          }
          var Gi = Ci;
          function Vi(t, n, e) {
            var r = t.length;
            return (e = e === o ? r : e), !n && e >= r ? t : Si(t, n, e);
          }
          var Zi =
            Ie ||
            function(t) {
              return Dn.clearTimeout(t);
            };
          function Xi(t, n) {
            if (n) return t.slice();
            var e = t.length,
              r = An ? An(e) : new t.constructor(e);
            return t.copy(r), r;
          }
          function Ki(t) {
            var n = new t.constructor(t.byteLength);
            return new Cn(n).set(new Cn(t)), n;
          }
          function Ji(t, n) {
            var e = n ? Ki(t.buffer) : t.buffer;
            return new t.constructor(e, t.byteOffset, t.length);
          }
          function Qi(t, n) {
            if (t !== n) {
              var e = t !== o,
                r = null === t,
                i = t == t,
                u = Ia(t),
                a = n !== o,
                c = null === n,
                f = n == n,
                s = Ia(n);
              if (
                (!c && !s && !u && t > n) ||
                (u && a && f && !c && !s) ||
                (r && a && f) ||
                (!e && f) ||
                !i
              )
                return 1;
              if (
                (!r && !u && !s && t < n) ||
                (s && e && i && !r && !u) ||
                (c && e && i) ||
                (!a && i) ||
                !f
              )
                return -1;
            }
            return 0;
          }
          function to(t, n, e, i) {
            for (
              var o = -1,
                u = t.length,
                a = e.length,
                c = -1,
                f = n.length,
                s = $e(u - a, 0),
                l = r(f + s),
                h = !i;
              ++c < f;

            )
              l[c] = n[c];
            for (; ++o < a; ) (h || o < u) && (l[e[o]] = t[o]);
            for (; s--; ) l[c++] = t[o++];
            return l;
          }
          function no(t, n, e, i) {
            for (
              var o = -1,
                u = t.length,
                a = -1,
                c = e.length,
                f = -1,
                s = n.length,
                l = $e(u - c, 0),
                h = r(l + s),
                d = !i;
              ++o < l;

            )
              h[o] = t[o];
            for (var p = o; ++f < s; ) h[p + f] = n[f];
            for (; ++a < c; ) (d || o < u) && (h[p + e[a]] = t[o++]);
            return h;
          }
          function eo(t, n) {
            var e = -1,
              i = t.length;
            for (n || (n = r(i)); ++e < i; ) n[e] = t[e];
            return n;
          }
          function ro(t, n, e, r) {
            var i = !e;
            e || (e = {});
            for (var u = -1, a = n.length; ++u < a; ) {
              var c = n[u],
                f = r ? r(e[c], t[c], c, e, t) : o;
              f === o && (f = t[c]), i ? Ur(e, c, f) : Tr(e, c, f);
            }
            return e;
          }
          function io(t, n) {
            return function(e, r) {
              var i = ga(e) ? Gn : Sr,
                o = n ? n() : {};
              return i(e, t, Yo(r, 2), o);
            };
          }
          function oo(t) {
            return Ci(function(n, e) {
              var r = -1,
                i = e.length,
                u = i > 1 ? e[i - 1] : o,
                a = i > 2 ? e[2] : o;
              for (
                u = t.length > 3 && 'function' == typeof u ? (i--, u) : o,
                  a && Go(e[0], e[1], a) && ((u = i < 3 ? o : u), (i = 1)),
                  n = nn(n);
                ++r < i;

              ) {
                var c = e[r];
                c && t(n, c, r, u);
              }
              return n;
            });
          }
          function uo(t, n) {
            return function(e, r) {
              if (null == e) return e;
              if (!ya(e)) return t(e, r);
              for (
                var i = e.length, o = n ? i : -1, u = nn(e);
                (n ? o-- : ++o < i) && !1 !== r(u[o], o, u);

              );
              return e;
            };
          }
          function ao(t) {
            return function(n, e, r) {
              for (var i = -1, o = nn(n), u = r(n), a = u.length; a--; ) {
                var c = u[t ? a : ++i];
                if (!1 === e(o[c], c, o)) break;
              }
              return n;
            };
          }
          function co(t) {
            return function(n) {
              var e = Re((n = $a(n))) ? Ue(n) : o,
                r = e ? e[0] : n.charAt(0),
                i = e ? Vi(e, 1).join('') : n.slice(1);
              return r[t]() + i;
            };
          }
          function fo(t) {
            return function(n) {
              return ee(Mc(vc(n).replace(yn, '')), t, '');
            };
          }
          function so(t) {
            return function() {
              var n = arguments;
              switch (n.length) {
                case 0:
                  return new t();
                case 1:
                  return new t(n[0]);
                case 2:
                  return new t(n[0], n[1]);
                case 3:
                  return new t(n[0], n[1], n[2]);
                case 4:
                  return new t(n[0], n[1], n[2], n[3]);
                case 5:
                  return new t(n[0], n[1], n[2], n[3], n[4]);
                case 6:
                  return new t(n[0], n[1], n[2], n[3], n[4], n[5]);
                case 7:
                  return new t(n[0], n[1], n[2], n[3], n[4], n[5], n[6]);
              }
              var e = pr(t.prototype),
                r = t.apply(e, n);
              return Na(r) ? r : e;
            };
          }
          function lo(t) {
            return function(n, e, r) {
              var i = nn(n);
              if (!ya(n)) {
                var u = Yo(e, 3);
                (n = ic(n)),
                  (e = function(t) {
                    return u(i[t], t, i);
                  });
              }
              var a = t(n, e, r);
              return a > -1 ? i[u ? n[a] : a] : o;
            };
          }
          function ho(t) {
            return So(function(n) {
              var e = n.length,
                r = e,
                i = vr.prototype.thru;
              for (t && n.reverse(); r--; ) {
                var u = n[r];
                if ('function' != typeof u) throw new on(c);
                if (i && !a && 'wrapper' == Do(u)) var a = new vr([], !0);
              }
              for (r = a ? r : e; ++r < e; ) {
                var f = Do((u = n[r])),
                  s = 'wrapper' == f ? ko(u) : o;
                a =
                  s &&
                  Zo(s[0]) &&
                  s[1] == (M | m | w | R) &&
                  !s[4].length &&
                  1 == s[9]
                    ? a[Do(s[0])].apply(a, s[3])
                    : 1 == u.length && Zo(u)
                    ? a[f]()
                    : a.thru(u);
              }
              return function() {
                var t = arguments,
                  r = t[0];
                if (a && 1 == t.length && ga(r)) return a.plant(r).value();
                for (var i = 0, o = e ? n[i].apply(this, t) : r; ++i < e; )
                  o = n[i].call(this, o);
                return o;
              };
            });
          }
          function po(t, n, e, i, u, a, c, f, s, l) {
            var h = n & M,
              d = n & g,
              p = n & b,
              _ = n & (m | x),
              v = n & E,
              y = p ? o : so(t);
            return function g() {
              for (var b = arguments.length, m = r(b), x = b; x--; )
                m[x] = arguments[x];
              if (_)
                var w = Io(g),
                  C = (function(t, n) {
                    for (var e = t.length, r = 0; e--; ) t[e] === n && ++r;
                    return r;
                  })(m, w);
              if (
                (i && (m = to(m, i, u, _)),
                a && (m = no(m, a, c, _)),
                (b -= C),
                _ && b < l)
              ) {
                var M = Te(m, w);
                return xo(t, n, po, g.placeholder, e, m, M, f, s, l - b);
              }
              var R = d ? e : this,
                E = p ? R[t] : t;
              return (
                (b = m.length),
                f
                  ? (m = (function(t, n) {
                      for (
                        var e = t.length, r = We(n.length, e), i = eo(t);
                        r--;

                      ) {
                        var u = n[r];
                        t[r] = Wo(u, e) ? i[u] : o;
                      }
                      return t;
                    })(m, f))
                  : v && b > 1 && m.reverse(),
                h && s < b && (m.length = s),
                this && this !== Dn && this instanceof g && (E = y || so(E)),
                E.apply(R, m)
              );
            };
          }
          function _o(t, n) {
            return function(e, r) {
              return (function(t, n, e, r) {
                return (
                  Gr(t, function(t, i, o) {
                    n(r, e(t), i, o);
                  }),
                  r
                );
              })(e, t, n(r), {});
            };
          }
          function vo(t, n) {
            return function(e, r) {
              var i;
              if (e === o && r === o) return n;
              if ((e !== o && (i = e), r !== o)) {
                if (i === o) return r;
                'string' == typeof e || 'string' == typeof r
                  ? ((e = Yi(e)), (r = Yi(r)))
                  : ((e = Ii(e)), (r = Ii(r))),
                  (i = t(e, r));
              }
              return i;
            };
          }
          function go(t) {
            return So(function(n) {
              return (
                (n = te(n, ge(Yo()))),
                Ci(function(e) {
                  var r = this;
                  return t(n, function(t) {
                    return Wn(t, r, e);
                  });
                })
              );
            });
          }
          function bo(t, n) {
            var e = (n = n === o ? ' ' : Yi(n)).length;
            if (e < 2) return e ? wi(n, t) : n;
            var r = wi(n, Le(t / Oe(n)));
            return Re(n) ? Vi(Ue(r), 0, t).join('') : r.slice(0, t);
          }
          function yo(t) {
            return function(n, e, i) {
              return (
                i && 'number' != typeof i && Go(n, e, i) && (e = i = o),
                (n = Ba(n)),
                e === o ? ((e = n), (n = 0)) : (e = Ba(e)),
                (function(t, n, e, i) {
                  for (
                    var o = -1, u = $e(Le((n - t) / (e || 1)), 0), a = r(u);
                    u--;

                  )
                    (a[i ? u : ++o] = t), (t += e);
                  return a;
                })(n, e, (i = i === o ? (n < e ? 1 : -1) : Ba(i)), t)
              );
            };
          }
          function mo(t) {
            return function(n, e) {
              return (
                ('string' == typeof n && 'string' == typeof e) ||
                  ((n = Ha(n)), (e = Ha(e))),
                t(n, e)
              );
            };
          }
          function xo(t, n, e, r, i, u, a, c, f, s) {
            var l = n & m;
            (n |= l ? w : C), (n &= ~(l ? C : w)) & y || (n &= ~(g | b));
            var h = [
                t,
                n,
                i,
                l ? u : o,
                l ? a : o,
                l ? o : u,
                l ? o : a,
                c,
                f,
                s,
              ],
              d = e.apply(o, h);
            return Zo(t) && ru(d, h), (d.placeholder = r), uu(d, t, n);
          }
          function wo(t) {
            var n = tn[t];
            return function(t, e) {
              if (
                ((t = Ha(t)), (e = null == e ? 0 : We(Fa(e), 292)) && ze(t))
              ) {
                var r = ($a(t) + 'e').split('e');
                return +(
                  (r = ($a(n(r[0] + 'e' + (+r[1] + e))) + 'e').split('e'))[0] +
                  'e' +
                  (+r[1] - e)
                );
              }
              return n(t);
            };
          }
          var Co =
            tr && 1 / Ae(new tr([, -0]))[1] == k
              ? function(t) {
                  return new tr(t);
                }
              : Ic;
          function Mo(t) {
            return function(n) {
              var e = zo(n);
              return e == X
                ? Ee(n)
                : e == et
                ? Se(n)
                : (function(t, n) {
                    return te(n, function(n) {
                      return [n, t[n]];
                    });
                  })(n, t(n));
            };
          }
          function Ro(t, n, e, i, u, a, f, s) {
            var h = n & b;
            if (!h && 'function' != typeof t) throw new on(c);
            var d = i ? i.length : 0;
            if (
              (d || ((n &= ~(w | C)), (i = u = o)),
              (f = f === o ? f : $e(Fa(f), 0)),
              (s = s === o ? s : Fa(s)),
              (d -= u ? u.length : 0),
              n & C)
            ) {
              var p = i,
                _ = u;
              i = u = o;
            }
            var v = h ? o : ko(t),
              E = [t, n, e, i, u, p, _, a, f, s];
            if (
              (v &&
                (function(t, n) {
                  var e = t[1],
                    r = n[1],
                    i = e | r,
                    o = i < (g | b | M),
                    u =
                      (r == M && e == m) ||
                      (r == M && e == R && t[7].length <= n[8]) ||
                      (r == (M | R) && n[7].length <= n[8] && e == m);
                  if (!o && !u) return t;
                  r & g && ((t[2] = n[2]), (i |= e & g ? 0 : y));
                  var a = n[3];
                  if (a) {
                    var c = t[3];
                    (t[3] = c ? to(c, a, n[4]) : a),
                      (t[4] = c ? Te(t[3], l) : n[4]);
                  }
                  (a = n[5]) &&
                    ((c = t[5]),
                    (t[5] = c ? no(c, a, n[6]) : a),
                    (t[6] = c ? Te(t[5], l) : n[6])),
                    (a = n[7]) && (t[7] = a),
                    r & M && (t[8] = null == t[8] ? n[8] : We(t[8], n[8])),
                    null == t[9] && (t[9] = n[9]),
                    (t[0] = n[0]),
                    (t[1] = i);
                })(E, v),
              (t = E[0]),
              (n = E[1]),
              (e = E[2]),
              (i = E[3]),
              (u = E[4]),
              !(s = E[9] = E[9] === o ? (h ? 0 : t.length) : $e(E[9] - d, 0)) &&
                n & (m | x) &&
                (n &= ~(m | x)),
              n && n != g)
            )
              N =
                n == m || n == x
                  ? (function(t, n, e) {
                      var i = so(t);
                      return function u() {
                        for (
                          var a = arguments.length, c = r(a), f = a, s = Io(u);
                          f--;

                        )
                          c[f] = arguments[f];
                        var l =
                          a < 3 && c[0] !== s && c[a - 1] !== s ? [] : Te(c, s);
                        return (a -= l.length) < e
                          ? xo(t, n, po, u.placeholder, o, c, l, o, o, e - a)
                          : Wn(
                              this && this !== Dn && this instanceof u ? i : t,
                              this,
                              c
                            );
                      };
                    })(t, n, s)
                  : (n != w && n != (g | w)) || u.length
                  ? po.apply(o, E)
                  : (function(t, n, e, i) {
                      var o = n & g,
                        u = so(t);
                      return function n() {
                        for (
                          var a = -1,
                            c = arguments.length,
                            f = -1,
                            s = i.length,
                            l = r(s + c),
                            h =
                              this && this !== Dn && this instanceof n ? u : t;
                          ++f < s;

                        )
                          l[f] = i[f];
                        for (; c--; ) l[f++] = arguments[++a];
                        return Wn(h, o ? e : this, l);
                      };
                    })(t, n, e, i);
            else
              var N = (function(t, n, e) {
                var r = n & g,
                  i = so(t);
                return function n() {
                  return (this && this !== Dn && this instanceof n
                    ? i
                    : t
                  ).apply(r ? e : this, arguments);
                };
              })(t, n, e);
            return uu((v ? Ni : ru)(N, E), t, n);
          }
          function Eo(t, n, e, r) {
            return t === o || (da(t, cn[e]) && !ln.call(r, e)) ? n : t;
          }
          function No(t, n, e, r, i, u) {
            return (
              Na(t) && Na(n) && (u.set(n, t), _i(t, n, o, No, u), u.delete(n)),
              t
            );
          }
          function To(t) {
            return Oa(t) ? o : t;
          }
          function Ao(t, n, e, r, i, u) {
            var a = e & _,
              c = t.length,
              f = n.length;
            if (c != f && !(a && f > c)) return !1;
            var s = u.get(t);
            if (s && u.get(n)) return s == n;
            var l = -1,
              h = !0,
              d = e & v ? new xr() : o;
            for (u.set(t, n), u.set(n, t); ++l < c; ) {
              var p = t[l],
                g = n[l];
              if (r) var b = a ? r(g, p, l, n, t, u) : r(p, g, l, t, n, u);
              if (b !== o) {
                if (b) continue;
                h = !1;
                break;
              }
              if (d) {
                if (
                  !ie(n, function(t, n) {
                    if (!ye(d, n) && (p === t || i(p, t, e, r, u)))
                      return d.push(n);
                  })
                ) {
                  h = !1;
                  break;
                }
              } else if (p !== g && !i(p, g, e, r, u)) {
                h = !1;
                break;
              }
            }
            return u.delete(t), u.delete(n), h;
          }
          function So(t) {
            return ou(tu(t, o, bu), t + '');
          }
          function Oo(t) {
            return Kr(t, ic, Bo);
          }
          function Uo(t) {
            return Kr(t, oc, Fo);
          }
          var ko = rr
            ? function(t) {
                return rr.get(t);
              }
            : Ic;
          function Do(t) {
            for (
              var n = t.name + '', e = ir[n], r = ln.call(ir, n) ? e.length : 0;
              r--;

            ) {
              var i = e[r],
                o = i.func;
              if (null == o || o == t) return i.name;
            }
            return n;
          }
          function Io(t) {
            return (ln.call(dr, 'placeholder') ? dr : t).placeholder;
          }
          function Yo() {
            var t = dr.iteratee || Oc;
            return (
              (t = t === Oc ? ci : t),
              arguments.length ? t(arguments[0], arguments[1]) : t
            );
          }
          function jo(t, n) {
            var e,
              r,
              i = t.__data__;
            return ('string' == (r = typeof (e = n)) ||
            'number' == r ||
            'symbol' == r ||
            'boolean' == r
            ? '__proto__' !== e
            : null === e)
              ? i['string' == typeof n ? 'string' : 'hash']
              : i.map;
          }
          function Lo(t) {
            for (var n = ic(t), e = n.length; e--; ) {
              var r = n[e],
                i = t[r];
              n[e] = [r, i, Jo(i)];
            }
            return n;
          }
          function Po(t, n) {
            var e = (function(t, n) {
              return null == t ? o : t[n];
            })(t, n);
            return ai(e) ? e : o;
          }
          var Bo = Be
              ? function(t) {
                  return null == t
                    ? []
                    : ((t = nn(t)),
                      Kn(Be(t), function(n) {
                        return In.call(t, n);
                      }));
                }
              : zc,
            Fo = Be
              ? function(t) {
                  for (var n = []; t; ) ne(n, Bo(t)), (t = Un(t));
                  return n;
                }
              : zc,
            zo = Jr;
          function Ho(t, n, e) {
            for (var r = -1, i = (n = Wi(n, t)).length, o = !1; ++r < i; ) {
              var u = su(n[r]);
              if (!(o = null != t && e(t, u))) break;
              t = t[u];
            }
            return o || ++r != i
              ? o
              : !!(i = null == t ? 0 : t.length) &&
                  Ea(i) &&
                  Wo(u, i) &&
                  (ga(t) || va(t));
          }
          function qo(t) {
            return 'function' != typeof t.constructor || Ko(t) ? {} : pr(Un(t));
          }
          function $o(t) {
            return ga(t) || va(t) || !!(Ln && t && t[Ln]);
          }
          function Wo(t, n) {
            var e = typeof t;
            return (
              !!(n = null == n ? D : n) &&
              ('number' == e || ('symbol' != e && Vt.test(t))) &&
              t > -1 &&
              t % 1 == 0 &&
              t < n
            );
          }
          function Go(t, n, e) {
            if (!Na(e)) return !1;
            var r = typeof n;
            return (
              !!('number' == r
                ? ya(e) && Wo(n, e.length)
                : 'string' == r && n in e) && da(e[n], t)
            );
          }
          function Vo(t, n) {
            if (ga(t)) return !1;
            var e = typeof t;
            return (
              !(
                'number' != e &&
                'symbol' != e &&
                'boolean' != e &&
                null != t &&
                !Ia(t)
              ) ||
              St.test(t) ||
              !At.test(t) ||
              (null != n && t in nn(n))
            );
          }
          function Zo(t) {
            var n = Do(t),
              e = dr[n];
            if ('function' != typeof e || !(n in gr.prototype)) return !1;
            if (t === e) return !0;
            var r = ko(e);
            return !!r && t === r[0];
          }
          ((Ke && zo(new Ke(new ArrayBuffer(1))) != ft) ||
            (Je && zo(new Je()) != X) ||
            (Qe && '[object Promise]' != zo(Qe.resolve())) ||
            (tr && zo(new tr()) != et) ||
            (nr && zo(new nr()) != ut)) &&
            (zo = function(t) {
              var n = Jr(t),
                e = n == Q ? t.constructor : o,
                r = e ? lu(e) : '';
              if (r)
                switch (r) {
                  case or:
                    return ft;
                  case ur:
                    return X;
                  case ar:
                    return '[object Promise]';
                  case cr:
                    return et;
                  case fr:
                    return ut;
                }
              return n;
            });
          var Xo = fn ? Ma : Hc;
          function Ko(t) {
            var n = t && t.constructor;
            return t === (('function' == typeof n && n.prototype) || cn);
          }
          function Jo(t) {
            return t == t && !Na(t);
          }
          function Qo(t, n) {
            return function(e) {
              return null != e && e[t] === n && (n !== o || t in nn(e));
            };
          }
          function tu(t, n, e) {
            return (
              (n = $e(n === o ? t.length - 1 : n, 0)),
              function() {
                for (
                  var i = arguments, o = -1, u = $e(i.length - n, 0), a = r(u);
                  ++o < u;

                )
                  a[o] = i[n + o];
                o = -1;
                for (var c = r(n + 1); ++o < n; ) c[o] = i[o];
                return (c[n] = e(a)), Wn(t, this, c);
              }
            );
          }
          function nu(t, n) {
            return n.length < 2 ? t : Xr(t, Si(n, 0, -1));
          }
          function eu(t, n) {
            if (
              ('constructor' !== n || 'function' != typeof t[n]) &&
              '__proto__' != n
            )
              return t[n];
          }
          var ru = au(Ni),
            iu =
              je ||
              function(t, n) {
                return Dn.setTimeout(t, n);
              },
            ou = au(Ti);
          function uu(t, n, e) {
            var r = n + '';
            return ou(
              t,
              (function(t, n) {
                var e = n.length;
                if (!e) return t;
                var r = e - 1;
                return (
                  (n[r] = (e > 1 ? '& ' : '') + n[r]),
                  (n = n.join(e > 2 ? ', ' : ' ')),
                  t.replace(jt, '{\n/* [wrapped with ' + n + '] */\n')
                );
              })(
                r,
                (function(t, n) {
                  return (
                    Vn(B, function(e) {
                      var r = '_.' + e[0];
                      n & e[1] && !Jn(t, r) && t.push(r);
                    }),
                    t.sort()
                  );
                })(
                  (function(t) {
                    var n = t.match(Lt);
                    return n ? n[1].split(Pt) : [];
                  })(r),
                  e
                )
              )
            );
          }
          function au(t) {
            var n = 0,
              e = 0;
            return function() {
              var r = Ge(),
                i = S - (r - e);
              if (((e = r), i > 0)) {
                if (++n >= A) return arguments[0];
              } else n = 0;
              return t.apply(o, arguments);
            };
          }
          function cu(t, n) {
            var e = -1,
              r = t.length,
              i = r - 1;
            for (n = n === o ? r : n; ++e < n; ) {
              var u = xi(e, i),
                a = t[u];
              (t[u] = t[e]), (t[e] = a);
            }
            return (t.length = n), t;
          }
          var fu = (function(t) {
            var n = aa(t, function(t) {
                return e.size === s && e.clear(), t;
              }),
              e = n.cache;
            return n;
          })(function(t) {
            var n = [];
            return (
              46 === t.charCodeAt(0) && n.push(''),
              t.replace(Ot, function(t, e, r, i) {
                n.push(r ? i.replace(Ft, '$1') : e || t);
              }),
              n
            );
          });
          function su(t) {
            if ('string' == typeof t || Ia(t)) return t;
            var n = t + '';
            return '0' == n && 1 / t == -k ? '-0' : n;
          }
          function lu(t) {
            if (null != t) {
              try {
                return sn.call(t);
              } catch (t) {}
              try {
                return t + '';
              } catch (t) {}
            }
            return '';
          }
          function hu(t) {
            if (t instanceof gr) return t.clone();
            var n = new vr(t.__wrapped__, t.__chain__);
            return (
              (n.__actions__ = eo(t.__actions__)),
              (n.__index__ = t.__index__),
              (n.__values__ = t.__values__),
              n
            );
          }
          var du = Ci(function(t, n) {
              return ma(t) ? Lr(t, qr(n, 1, ma, !0)) : [];
            }),
            pu = Ci(function(t, n) {
              var e = Cu(n);
              return (
                ma(e) && (e = o), ma(t) ? Lr(t, qr(n, 1, ma, !0), Yo(e, 2)) : []
              );
            }),
            _u = Ci(function(t, n) {
              var e = Cu(n);
              return (
                ma(e) && (e = o), ma(t) ? Lr(t, qr(n, 1, ma, !0), o, e) : []
              );
            });
          function vu(t, n, e) {
            var r = null == t ? 0 : t.length;
            if (!r) return -1;
            var i = null == e ? 0 : Fa(e);
            return i < 0 && (i = $e(r + i, 0)), ae(t, Yo(n, 3), i);
          }
          function gu(t, n, e) {
            var r = null == t ? 0 : t.length;
            if (!r) return -1;
            var i = r - 1;
            return (
              e !== o &&
                ((i = Fa(e)), (i = e < 0 ? $e(r + i, 0) : We(i, r - 1))),
              ae(t, Yo(n, 3), i, !0)
            );
          }
          function bu(t) {
            return null != t && t.length ? qr(t, 1) : [];
          }
          function yu(t) {
            return t && t.length ? t[0] : o;
          }
          var mu = Ci(function(t) {
              var n = te(t, qi);
              return n.length && n[0] === t[0] ? ei(n) : [];
            }),
            xu = Ci(function(t) {
              var n = Cu(t),
                e = te(t, qi);
              return (
                n === Cu(e) ? (n = o) : e.pop(),
                e.length && e[0] === t[0] ? ei(e, Yo(n, 2)) : []
              );
            }),
            wu = Ci(function(t) {
              var n = Cu(t),
                e = te(t, qi);
              return (
                (n = 'function' == typeof n ? n : o) && e.pop(),
                e.length && e[0] === t[0] ? ei(e, o, n) : []
              );
            });
          function Cu(t) {
            var n = null == t ? 0 : t.length;
            return n ? t[n - 1] : o;
          }
          var Mu = Ci(Ru);
          function Ru(t, n) {
            return t && t.length && n && n.length ? yi(t, n) : t;
          }
          var Eu = So(function(t, n) {
            var e = null == t ? 0 : t.length,
              r = kr(t, n);
            return (
              mi(
                t,
                te(n, function(t) {
                  return Wo(t, e) ? +t : t;
                }).sort(Qi)
              ),
              r
            );
          });
          function Nu(t) {
            return null == t ? t : Xe.call(t);
          }
          var Tu = Ci(function(t) {
              return ji(qr(t, 1, ma, !0));
            }),
            Au = Ci(function(t) {
              var n = Cu(t);
              return ma(n) && (n = o), ji(qr(t, 1, ma, !0), Yo(n, 2));
            }),
            Su = Ci(function(t) {
              var n = Cu(t);
              return (
                (n = 'function' == typeof n ? n : o), ji(qr(t, 1, ma, !0), o, n)
              );
            });
          function Ou(t) {
            if (!t || !t.length) return [];
            var n = 0;
            return (
              (t = Kn(t, function(t) {
                if (ma(t)) return (n = $e(t.length, n)), !0;
              })),
              ve(n, function(n) {
                return te(t, he(n));
              })
            );
          }
          function Uu(t, n) {
            if (!t || !t.length) return [];
            var e = Ou(t);
            return null == n
              ? e
              : te(e, function(t) {
                  return Wn(n, o, t);
                });
          }
          var ku = Ci(function(t, n) {
              return ma(t) ? Lr(t, n) : [];
            }),
            Du = Ci(function(t) {
              return zi(Kn(t, ma));
            }),
            Iu = Ci(function(t) {
              var n = Cu(t);
              return ma(n) && (n = o), zi(Kn(t, ma), Yo(n, 2));
            }),
            Yu = Ci(function(t) {
              var n = Cu(t);
              return (n = 'function' == typeof n ? n : o), zi(Kn(t, ma), o, n);
            }),
            ju = Ci(Ou);
          var Lu = Ci(function(t) {
            var n = t.length,
              e = n > 1 ? t[n - 1] : o;
            return (e = 'function' == typeof e ? (t.pop(), e) : o), Uu(t, e);
          });
          function Pu(t) {
            var n = dr(t);
            return (n.__chain__ = !0), n;
          }
          function Bu(t, n) {
            return n(t);
          }
          var Fu = So(function(t) {
            var n = t.length,
              e = n ? t[0] : 0,
              r = this.__wrapped__,
              i = function(n) {
                return kr(n, t);
              };
            return !(n > 1 || this.__actions__.length) &&
              r instanceof gr &&
              Wo(e)
              ? ((r = r.slice(e, +e + (n ? 1 : 0))).__actions__.push({
                  func: Bu,
                  args: [i],
                  thisArg: o,
                }),
                new vr(r, this.__chain__).thru(function(t) {
                  return n && !t.length && t.push(o), t;
                }))
              : this.thru(i);
          });
          var zu = io(function(t, n, e) {
            ln.call(t, e) ? ++t[e] : Ur(t, e, 1);
          });
          var Hu = lo(vu),
            qu = lo(gu);
          function $u(t, n) {
            return (ga(t) ? Vn : Pr)(t, Yo(n, 3));
          }
          function Wu(t, n) {
            return (ga(t) ? Zn : Br)(t, Yo(n, 3));
          }
          var Gu = io(function(t, n, e) {
            ln.call(t, e) ? t[e].push(n) : Ur(t, e, [n]);
          });
          var Vu = Ci(function(t, n, e) {
              var i = -1,
                o = 'function' == typeof n,
                u = ya(t) ? r(t.length) : [];
              return (
                Pr(t, function(t) {
                  u[++i] = o ? Wn(n, t, e) : ri(t, n, e);
                }),
                u
              );
            }),
            Zu = io(function(t, n, e) {
              Ur(t, e, n);
            });
          function Xu(t, n) {
            return (ga(t) ? te : hi)(t, Yo(n, 3));
          }
          var Ku = io(
            function(t, n, e) {
              t[e ? 0 : 1].push(n);
            },
            function() {
              return [[], []];
            }
          );
          var Ju = Ci(function(t, n) {
              if (null == t) return [];
              var e = n.length;
              return (
                e > 1 && Go(t, n[0], n[1])
                  ? (n = [])
                  : e > 2 && Go(n[0], n[1], n[2]) && (n = [n[0]]),
                gi(t, qr(n, 1), [])
              );
            }),
            Qu =
              Ye ||
              function() {
                return Dn.Date.now();
              };
          function ta(t, n, e) {
            return (
              (n = e ? o : n),
              (n = t && null == n ? t.length : n),
              Ro(t, M, o, o, o, o, n)
            );
          }
          function na(t, n) {
            var e;
            if ('function' != typeof n) throw new on(c);
            return (
              (t = Fa(t)),
              function() {
                return (
                  --t > 0 && (e = n.apply(this, arguments)),
                  t <= 1 && (n = o),
                  e
                );
              }
            );
          }
          var ea = Ci(function(t, n, e) {
              var r = g;
              if (e.length) {
                var i = Te(e, Io(ea));
                r |= w;
              }
              return Ro(t, r, n, e, i);
            }),
            ra = Ci(function(t, n, e) {
              var r = g | b;
              if (e.length) {
                var i = Te(e, Io(ra));
                r |= w;
              }
              return Ro(n, r, t, e, i);
            });
          function ia(t, n, e) {
            var r,
              i,
              u,
              a,
              f,
              s,
              l = 0,
              h = !1,
              d = !1,
              p = !0;
            if ('function' != typeof t) throw new on(c);
            function _(n) {
              var e = r,
                u = i;
              return (r = i = o), (l = n), (a = t.apply(u, e));
            }
            function v(t) {
              var e = t - s;
              return s === o || e >= n || e < 0 || (d && t - l >= u);
            }
            function g() {
              var t = Qu();
              if (v(t)) return b(t);
              f = iu(
                g,
                (function(t) {
                  var e = n - (t - s);
                  return d ? We(e, u - (t - l)) : e;
                })(t)
              );
            }
            function b(t) {
              return (f = o), p && r ? _(t) : ((r = i = o), a);
            }
            function y() {
              var t = Qu(),
                e = v(t);
              if (((r = arguments), (i = this), (s = t), e)) {
                if (f === o)
                  return (function(t) {
                    return (l = t), (f = iu(g, n)), h ? _(t) : a;
                  })(s);
                if (d) return Zi(f), (f = iu(g, n)), _(s);
              }
              return f === o && (f = iu(g, n)), a;
            }
            return (
              (n = Ha(n) || 0),
              Na(e) &&
                ((h = !!e.leading),
                (u = (d = 'maxWait' in e) ? $e(Ha(e.maxWait) || 0, n) : u),
                (p = 'trailing' in e ? !!e.trailing : p)),
              (y.cancel = function() {
                f !== o && Zi(f), (l = 0), (r = s = i = f = o);
              }),
              (y.flush = function() {
                return f === o ? a : b(Qu());
              }),
              y
            );
          }
          var oa = Ci(function(t, n) {
              return jr(t, 1, n);
            }),
            ua = Ci(function(t, n, e) {
              return jr(t, Ha(n) || 0, e);
            });
          function aa(t, n) {
            if ('function' != typeof t || (null != n && 'function' != typeof n))
              throw new on(c);
            var e = function() {
              var r = arguments,
                i = n ? n.apply(this, r) : r[0],
                o = e.cache;
              if (o.has(i)) return o.get(i);
              var u = t.apply(this, r);
              return (e.cache = o.set(i, u) || o), u;
            };
            return (e.cache = new (aa.Cache || mr)()), e;
          }
          function ca(t) {
            if ('function' != typeof t) throw new on(c);
            return function() {
              var n = arguments;
              switch (n.length) {
                case 0:
                  return !t.call(this);
                case 1:
                  return !t.call(this, n[0]);
                case 2:
                  return !t.call(this, n[0], n[1]);
                case 3:
                  return !t.call(this, n[0], n[1], n[2]);
              }
              return !t.apply(this, n);
            };
          }
          aa.Cache = mr;
          var fa = Gi(function(t, n) {
              var e = (n =
                1 == n.length && ga(n[0])
                  ? te(n[0], ge(Yo()))
                  : te(qr(n, 1), ge(Yo()))).length;
              return Ci(function(r) {
                for (var i = -1, o = We(r.length, e); ++i < o; )
                  r[i] = n[i].call(this, r[i]);
                return Wn(t, this, r);
              });
            }),
            sa = Ci(function(t, n) {
              var e = Te(n, Io(sa));
              return Ro(t, w, o, n, e);
            }),
            la = Ci(function(t, n) {
              var e = Te(n, Io(la));
              return Ro(t, C, o, n, e);
            }),
            ha = So(function(t, n) {
              return Ro(t, R, o, o, o, n);
            });
          function da(t, n) {
            return t === n || (t != t && n != n);
          }
          var pa = mo(Qr),
            _a = mo(function(t, n) {
              return t >= n;
            }),
            va = ii(
              (function() {
                return arguments;
              })()
            )
              ? ii
              : function(t) {
                  return Ta(t) && ln.call(t, 'callee') && !In.call(t, 'callee');
                },
            ga = r.isArray,
            ba = Bn
              ? ge(Bn)
              : function(t) {
                  return Ta(t) && Jr(t) == ct;
                };
          function ya(t) {
            return null != t && Ea(t.length) && !Ma(t);
          }
          function ma(t) {
            return Ta(t) && ya(t);
          }
          var xa = Fe || Hc,
            wa = Fn
              ? ge(Fn)
              : function(t) {
                  return Ta(t) && Jr(t) == $;
                };
          function Ca(t) {
            if (!Ta(t)) return !1;
            var n = Jr(t);
            return (
              n == G ||
              n == W ||
              ('string' == typeof t.message &&
                'string' == typeof t.name &&
                !Oa(t))
            );
          }
          function Ma(t) {
            if (!Na(t)) return !1;
            var n = Jr(t);
            return n == V || n == Z || n == H || n == tt;
          }
          function Ra(t) {
            return 'number' == typeof t && t == Fa(t);
          }
          function Ea(t) {
            return 'number' == typeof t && t > -1 && t % 1 == 0 && t <= D;
          }
          function Na(t) {
            var n = typeof t;
            return null != t && ('object' == n || 'function' == n);
          }
          function Ta(t) {
            return null != t && 'object' == typeof t;
          }
          var Aa = zn
            ? ge(zn)
            : function(t) {
                return Ta(t) && zo(t) == X;
              };
          function Sa(t) {
            return 'number' == typeof t || (Ta(t) && Jr(t) == K);
          }
          function Oa(t) {
            if (!Ta(t) || Jr(t) != Q) return !1;
            var n = Un(t);
            if (null === n) return !0;
            var e = ln.call(n, 'constructor') && n.constructor;
            return 'function' == typeof e && e instanceof e && sn.call(e) == _n;
          }
          var Ua = Hn
            ? ge(Hn)
            : function(t) {
                return Ta(t) && Jr(t) == nt;
              };
          var ka = qn
            ? ge(qn)
            : function(t) {
                return Ta(t) && zo(t) == et;
              };
          function Da(t) {
            return 'string' == typeof t || (!ga(t) && Ta(t) && Jr(t) == rt);
          }
          function Ia(t) {
            return 'symbol' == typeof t || (Ta(t) && Jr(t) == it);
          }
          var Ya = $n
            ? ge($n)
            : function(t) {
                return Ta(t) && Ea(t.length) && !!Nn[Jr(t)];
              };
          var ja = mo(li),
            La = mo(function(t, n) {
              return t <= n;
            });
          function Pa(t) {
            if (!t) return [];
            if (ya(t)) return Da(t) ? Ue(t) : eo(t);
            if (Pn && t[Pn])
              return (function(t) {
                for (var n, e = []; !(n = t.next()).done; ) e.push(n.value);
                return e;
              })(t[Pn]());
            var n = zo(t);
            return (n == X ? Ee : n == et ? Ae : dc)(t);
          }
          function Ba(t) {
            return t
              ? (t = Ha(t)) === k || t === -k
                ? (t < 0 ? -1 : 1) * I
                : t == t
                ? t
                : 0
              : 0 === t
              ? t
              : 0;
          }
          function Fa(t) {
            var n = Ba(t),
              e = n % 1;
            return n == n ? (e ? n - e : n) : 0;
          }
          function za(t) {
            return t ? Dr(Fa(t), 0, j) : 0;
          }
          function Ha(t) {
            if ('number' == typeof t) return t;
            if (Ia(t)) return Y;
            if (Na(t)) {
              var n = 'function' == typeof t.valueOf ? t.valueOf() : t;
              t = Na(n) ? n + '' : n;
            }
            if ('string' != typeof t) return 0 === t ? t : +t;
            t = t.replace(Dt, '');
            var e = $t.test(t);
            return e || Gt.test(t)
              ? On(t.slice(2), e ? 2 : 8)
              : qt.test(t)
              ? Y
              : +t;
          }
          function qa(t) {
            return ro(t, oc(t));
          }
          function $a(t) {
            return null == t ? '' : Yi(t);
          }
          var Wa = oo(function(t, n) {
              if (Ko(n) || ya(n)) ro(n, ic(n), t);
              else for (var e in n) ln.call(n, e) && Tr(t, e, n[e]);
            }),
            Ga = oo(function(t, n) {
              ro(n, oc(n), t);
            }),
            Va = oo(function(t, n, e, r) {
              ro(n, oc(n), t, r);
            }),
            Za = oo(function(t, n, e, r) {
              ro(n, ic(n), t, r);
            }),
            Xa = So(kr);
          var Ka = Ci(function(t, n) {
              t = nn(t);
              var e = -1,
                r = n.length,
                i = r > 2 ? n[2] : o;
              for (i && Go(n[0], n[1], i) && (r = 1); ++e < r; )
                for (var u = n[e], a = oc(u), c = -1, f = a.length; ++c < f; ) {
                  var s = a[c],
                    l = t[s];
                  (l === o || (da(l, cn[s]) && !ln.call(t, s))) &&
                    (t[s] = u[s]);
                }
              return t;
            }),
            Ja = Ci(function(t) {
              return t.push(o, No), Wn(ac, o, t);
            });
          function Qa(t, n, e) {
            var r = null == t ? o : Xr(t, n);
            return r === o ? e : r;
          }
          function tc(t, n) {
            return null != t && Ho(t, n, ni);
          }
          var nc = _o(function(t, n, e) {
              null != n && 'function' != typeof n.toString && (n = pn.call(n)),
                (t[n] = e);
            }, Nc(Sc)),
            ec = _o(function(t, n, e) {
              null != n && 'function' != typeof n.toString && (n = pn.call(n)),
                ln.call(t, n) ? t[n].push(e) : (t[n] = [e]);
            }, Yo),
            rc = Ci(ri);
          function ic(t) {
            return ya(t) ? Cr(t) : fi(t);
          }
          function oc(t) {
            return ya(t) ? Cr(t, !0) : si(t);
          }
          var uc = oo(function(t, n, e) {
              _i(t, n, e);
            }),
            ac = oo(function(t, n, e, r) {
              _i(t, n, e, r);
            }),
            cc = So(function(t, n) {
              var e = {};
              if (null == t) return e;
              var r = !1;
              (n = te(n, function(n) {
                return (n = Wi(n, t)), r || (r = n.length > 1), n;
              })),
                ro(t, Uo(t), e),
                r && (e = Ir(e, h | d | p, To));
              for (var i = n.length; i--; ) Li(e, n[i]);
              return e;
            });
          var fc = So(function(t, n) {
            return null == t
              ? {}
              : (function(t, n) {
                  return bi(t, n, function(n, e) {
                    return tc(t, e);
                  });
                })(t, n);
          });
          function sc(t, n) {
            if (null == t) return {};
            var e = te(Uo(t), function(t) {
              return [t];
            });
            return (
              (n = Yo(n)),
              bi(t, e, function(t, e) {
                return n(t, e[0]);
              })
            );
          }
          var lc = Mo(ic),
            hc = Mo(oc);
          function dc(t) {
            return null == t ? [] : be(t, ic(t));
          }
          var pc = fo(function(t, n, e) {
            return (n = n.toLowerCase()), t + (e ? _c(n) : n);
          });
          function _c(t) {
            return Cc($a(t).toLowerCase());
          }
          function vc(t) {
            return (t = $a(t)) && t.replace(Zt, we).replace(mn, '');
          }
          var gc = fo(function(t, n, e) {
              return t + (e ? '-' : '') + n.toLowerCase();
            }),
            bc = fo(function(t, n, e) {
              return t + (e ? ' ' : '') + n.toLowerCase();
            }),
            yc = co('toLowerCase');
          var mc = fo(function(t, n, e) {
            return t + (e ? '_' : '') + n.toLowerCase();
          });
          var xc = fo(function(t, n, e) {
            return t + (e ? ' ' : '') + Cc(n);
          });
          var wc = fo(function(t, n, e) {
              return t + (e ? ' ' : '') + n.toUpperCase();
            }),
            Cc = co('toUpperCase');
          function Mc(t, n, e) {
            return (
              (t = $a(t)),
              (n = e ? o : n) === o
                ? (function(t) {
                    return Mn.test(t);
                  })(t)
                  ? (function(t) {
                      return t.match(wn) || [];
                    })(t)
                  : (function(t) {
                      return t.match(Bt) || [];
                    })(t)
                : t.match(n) || []
            );
          }
          var Rc = Ci(function(t, n) {
              try {
                return Wn(t, o, n);
              } catch (t) {
                return Ca(t) ? t : new Jt(t);
              }
            }),
            Ec = So(function(t, n) {
              return (
                Vn(n, function(n) {
                  (n = su(n)), Ur(t, n, ea(t[n], t));
                }),
                t
              );
            });
          function Nc(t) {
            return function() {
              return t;
            };
          }
          var Tc = ho(),
            Ac = ho(!0);
          function Sc(t) {
            return t;
          }
          function Oc(t) {
            return ci('function' == typeof t ? t : Ir(t, h));
          }
          var Uc = Ci(function(t, n) {
              return function(e) {
                return ri(e, t, n);
              };
            }),
            kc = Ci(function(t, n) {
              return function(e) {
                return ri(t, e, n);
              };
            });
          function Dc(t, n, e) {
            var r = ic(n),
              i = Zr(n, r);
            null != e ||
              (Na(n) && (i.length || !r.length)) ||
              ((e = n), (n = t), (t = this), (i = Zr(n, ic(n))));
            var o = !(Na(e) && 'chain' in e && !e.chain),
              u = Ma(t);
            return (
              Vn(i, function(e) {
                var r = n[e];
                (t[e] = r),
                  u &&
                    (t.prototype[e] = function() {
                      var n = this.__chain__;
                      if (o || n) {
                        var e = t(this.__wrapped__),
                          i = (e.__actions__ = eo(this.__actions__));
                        return (
                          i.push({func: r, args: arguments, thisArg: t}),
                          (e.__chain__ = n),
                          e
                        );
                      }
                      return r.apply(t, ne([this.value()], arguments));
                    });
              }),
              t
            );
          }
          function Ic() {}
          var Yc = go(te),
            jc = go(Xn),
            Lc = go(ie);
          function Pc(t) {
            return Vo(t)
              ? he(su(t))
              : (function(t) {
                  return function(n) {
                    return Xr(n, t);
                  };
                })(t);
          }
          var Bc = yo(),
            Fc = yo(!0);
          function zc() {
            return [];
          }
          function Hc() {
            return !1;
          }
          var qc = vo(function(t, n) {
              return t + n;
            }, 0),
            $c = wo('ceil'),
            Wc = vo(function(t, n) {
              return t / n;
            }, 1),
            Gc = wo('floor');
          var Vc,
            Zc = vo(function(t, n) {
              return t * n;
            }, 1),
            Xc = wo('round'),
            Kc = vo(function(t, n) {
              return t - n;
            }, 0);
          return (
            (dr.after = function(t, n) {
              if ('function' != typeof n) throw new on(c);
              return (
                (t = Fa(t)),
                function() {
                  if (--t < 1) return n.apply(this, arguments);
                }
              );
            }),
            (dr.ary = ta),
            (dr.assign = Wa),
            (dr.assignIn = Ga),
            (dr.assignInWith = Va),
            (dr.assignWith = Za),
            (dr.at = Xa),
            (dr.before = na),
            (dr.bind = ea),
            (dr.bindAll = Ec),
            (dr.bindKey = ra),
            (dr.castArray = function() {
              if (!arguments.length) return [];
              var t = arguments[0];
              return ga(t) ? t : [t];
            }),
            (dr.chain = Pu),
            (dr.chunk = function(t, n, e) {
              n = (e ? Go(t, n, e) : n === o) ? 1 : $e(Fa(n), 0);
              var i = null == t ? 0 : t.length;
              if (!i || n < 1) return [];
              for (var u = 0, a = 0, c = r(Le(i / n)); u < i; )
                c[a++] = Si(t, u, (u += n));
              return c;
            }),
            (dr.compact = function(t) {
              for (
                var n = -1, e = null == t ? 0 : t.length, r = 0, i = [];
                ++n < e;

              ) {
                var o = t[n];
                o && (i[r++] = o);
              }
              return i;
            }),
            (dr.concat = function() {
              var t = arguments.length;
              if (!t) return [];
              for (var n = r(t - 1), e = arguments[0], i = t; i--; )
                n[i - 1] = arguments[i];
              return ne(ga(e) ? eo(e) : [e], qr(n, 1));
            }),
            (dr.cond = function(t) {
              var n = null == t ? 0 : t.length,
                e = Yo();
              return (
                (t = n
                  ? te(t, function(t) {
                      if ('function' != typeof t[1]) throw new on(c);
                      return [e(t[0]), t[1]];
                    })
                  : []),
                Ci(function(e) {
                  for (var r = -1; ++r < n; ) {
                    var i = t[r];
                    if (Wn(i[0], this, e)) return Wn(i[1], this, e);
                  }
                })
              );
            }),
            (dr.conforms = function(t) {
              return (function(t) {
                var n = ic(t);
                return function(e) {
                  return Yr(e, t, n);
                };
              })(Ir(t, h));
            }),
            (dr.constant = Nc),
            (dr.countBy = zu),
            (dr.create = function(t, n) {
              var e = pr(t);
              return null == n ? e : Or(e, n);
            }),
            (dr.curry = function t(n, e, r) {
              var i = Ro(n, m, o, o, o, o, o, (e = r ? o : e));
              return (i.placeholder = t.placeholder), i;
            }),
            (dr.curryRight = function t(n, e, r) {
              var i = Ro(n, x, o, o, o, o, o, (e = r ? o : e));
              return (i.placeholder = t.placeholder), i;
            }),
            (dr.debounce = ia),
            (dr.defaults = Ka),
            (dr.defaultsDeep = Ja),
            (dr.defer = oa),
            (dr.delay = ua),
            (dr.difference = du),
            (dr.differenceBy = pu),
            (dr.differenceWith = _u),
            (dr.drop = function(t, n, e) {
              var r = null == t ? 0 : t.length;
              return r
                ? Si(t, (n = e || n === o ? 1 : Fa(n)) < 0 ? 0 : n, r)
                : [];
            }),
            (dr.dropRight = function(t, n, e) {
              var r = null == t ? 0 : t.length;
              return r
                ? Si(t, 0, (n = r - (n = e || n === o ? 1 : Fa(n))) < 0 ? 0 : n)
                : [];
            }),
            (dr.dropRightWhile = function(t, n) {
              return t && t.length ? Bi(t, Yo(n, 3), !0, !0) : [];
            }),
            (dr.dropWhile = function(t, n) {
              return t && t.length ? Bi(t, Yo(n, 3), !0) : [];
            }),
            (dr.fill = function(t, n, e, r) {
              var i = null == t ? 0 : t.length;
              return i
                ? (e &&
                    'number' != typeof e &&
                    Go(t, n, e) &&
                    ((e = 0), (r = i)),
                  (function(t, n, e, r) {
                    var i = t.length;
                    for (
                      (e = Fa(e)) < 0 && (e = -e > i ? 0 : i + e),
                        (r = r === o || r > i ? i : Fa(r)) < 0 && (r += i),
                        r = e > r ? 0 : za(r);
                      e < r;

                    )
                      t[e++] = n;
                    return t;
                  })(t, n, e, r))
                : [];
            }),
            (dr.filter = function(t, n) {
              return (ga(t) ? Kn : Hr)(t, Yo(n, 3));
            }),
            (dr.flatMap = function(t, n) {
              return qr(Xu(t, n), 1);
            }),
            (dr.flatMapDeep = function(t, n) {
              return qr(Xu(t, n), k);
            }),
            (dr.flatMapDepth = function(t, n, e) {
              return (e = e === o ? 1 : Fa(e)), qr(Xu(t, n), e);
            }),
            (dr.flatten = bu),
            (dr.flattenDeep = function(t) {
              return null != t && t.length ? qr(t, k) : [];
            }),
            (dr.flattenDepth = function(t, n) {
              return null != t && t.length
                ? qr(t, (n = n === o ? 1 : Fa(n)))
                : [];
            }),
            (dr.flip = function(t) {
              return Ro(t, E);
            }),
            (dr.flow = Tc),
            (dr.flowRight = Ac),
            (dr.fromPairs = function(t) {
              for (
                var n = -1, e = null == t ? 0 : t.length, r = {};
                ++n < e;

              ) {
                var i = t[n];
                r[i[0]] = i[1];
              }
              return r;
            }),
            (dr.functions = function(t) {
              return null == t ? [] : Zr(t, ic(t));
            }),
            (dr.functionsIn = function(t) {
              return null == t ? [] : Zr(t, oc(t));
            }),
            (dr.groupBy = Gu),
            (dr.initial = function(t) {
              return null != t && t.length ? Si(t, 0, -1) : [];
            }),
            (dr.intersection = mu),
            (dr.intersectionBy = xu),
            (dr.intersectionWith = wu),
            (dr.invert = nc),
            (dr.invertBy = ec),
            (dr.invokeMap = Vu),
            (dr.iteratee = Oc),
            (dr.keyBy = Zu),
            (dr.keys = ic),
            (dr.keysIn = oc),
            (dr.map = Xu),
            (dr.mapKeys = function(t, n) {
              var e = {};
              return (
                (n = Yo(n, 3)),
                Gr(t, function(t, r, i) {
                  Ur(e, n(t, r, i), t);
                }),
                e
              );
            }),
            (dr.mapValues = function(t, n) {
              var e = {};
              return (
                (n = Yo(n, 3)),
                Gr(t, function(t, r, i) {
                  Ur(e, r, n(t, r, i));
                }),
                e
              );
            }),
            (dr.matches = function(t) {
              return di(Ir(t, h));
            }),
            (dr.matchesProperty = function(t, n) {
              return pi(t, Ir(n, h));
            }),
            (dr.memoize = aa),
            (dr.merge = uc),
            (dr.mergeWith = ac),
            (dr.method = Uc),
            (dr.methodOf = kc),
            (dr.mixin = Dc),
            (dr.negate = ca),
            (dr.nthArg = function(t) {
              return (
                (t = Fa(t)),
                Ci(function(n) {
                  return vi(n, t);
                })
              );
            }),
            (dr.omit = cc),
            (dr.omitBy = function(t, n) {
              return sc(t, ca(Yo(n)));
            }),
            (dr.once = function(t) {
              return na(2, t);
            }),
            (dr.orderBy = function(t, n, e, r) {
              return null == t
                ? []
                : (ga(n) || (n = null == n ? [] : [n]),
                  ga((e = r ? o : e)) || (e = null == e ? [] : [e]),
                  gi(t, n, e));
            }),
            (dr.over = Yc),
            (dr.overArgs = fa),
            (dr.overEvery = jc),
            (dr.overSome = Lc),
            (dr.partial = sa),
            (dr.partialRight = la),
            (dr.partition = Ku),
            (dr.pick = fc),
            (dr.pickBy = sc),
            (dr.property = Pc),
            (dr.propertyOf = function(t) {
              return function(n) {
                return null == t ? o : Xr(t, n);
              };
            }),
            (dr.pull = Mu),
            (dr.pullAll = Ru),
            (dr.pullAllBy = function(t, n, e) {
              return t && t.length && n && n.length ? yi(t, n, Yo(e, 2)) : t;
            }),
            (dr.pullAllWith = function(t, n, e) {
              return t && t.length && n && n.length ? yi(t, n, o, e) : t;
            }),
            (dr.pullAt = Eu),
            (dr.range = Bc),
            (dr.rangeRight = Fc),
            (dr.rearg = ha),
            (dr.reject = function(t, n) {
              return (ga(t) ? Kn : Hr)(t, ca(Yo(n, 3)));
            }),
            (dr.remove = function(t, n) {
              var e = [];
              if (!t || !t.length) return e;
              var r = -1,
                i = [],
                o = t.length;
              for (n = Yo(n, 3); ++r < o; ) {
                var u = t[r];
                n(u, r, t) && (e.push(u), i.push(r));
              }
              return mi(t, i), e;
            }),
            (dr.rest = function(t, n) {
              if ('function' != typeof t) throw new on(c);
              return Ci(t, (n = n === o ? n : Fa(n)));
            }),
            (dr.reverse = Nu),
            (dr.sampleSize = function(t, n, e) {
              return (
                (n = (e ? Go(t, n, e) : n === o) ? 1 : Fa(n)),
                (ga(t) ? Rr : Ri)(t, n)
              );
            }),
            (dr.set = function(t, n, e) {
              return null == t ? t : Ei(t, n, e);
            }),
            (dr.setWith = function(t, n, e, r) {
              return (
                (r = 'function' == typeof r ? r : o),
                null == t ? t : Ei(t, n, e, r)
              );
            }),
            (dr.shuffle = function(t) {
              return (ga(t) ? Er : Ai)(t);
            }),
            (dr.slice = function(t, n, e) {
              var r = null == t ? 0 : t.length;
              return r
                ? (e && 'number' != typeof e && Go(t, n, e)
                    ? ((n = 0), (e = r))
                    : ((n = null == n ? 0 : Fa(n)), (e = e === o ? r : Fa(e))),
                  Si(t, n, e))
                : [];
            }),
            (dr.sortBy = Ju),
            (dr.sortedUniq = function(t) {
              return t && t.length ? Di(t) : [];
            }),
            (dr.sortedUniqBy = function(t, n) {
              return t && t.length ? Di(t, Yo(n, 2)) : [];
            }),
            (dr.split = function(t, n, e) {
              return (
                e && 'number' != typeof e && Go(t, n, e) && (n = e = o),
                (e = e === o ? j : e >>> 0)
                  ? (t = $a(t)) &&
                    ('string' == typeof n || (null != n && !Ua(n))) &&
                    !(n = Yi(n)) &&
                    Re(t)
                    ? Vi(Ue(t), 0, e)
                    : t.split(n, e)
                  : []
              );
            }),
            (dr.spread = function(t, n) {
              if ('function' != typeof t) throw new on(c);
              return (
                (n = null == n ? 0 : $e(Fa(n), 0)),
                Ci(function(e) {
                  var r = e[n],
                    i = Vi(e, 0, n);
                  return r && ne(i, r), Wn(t, this, i);
                })
              );
            }),
            (dr.tail = function(t) {
              var n = null == t ? 0 : t.length;
              return n ? Si(t, 1, n) : [];
            }),
            (dr.take = function(t, n, e) {
              return t && t.length
                ? Si(t, 0, (n = e || n === o ? 1 : Fa(n)) < 0 ? 0 : n)
                : [];
            }),
            (dr.takeRight = function(t, n, e) {
              var r = null == t ? 0 : t.length;
              return r
                ? Si(t, (n = r - (n = e || n === o ? 1 : Fa(n))) < 0 ? 0 : n, r)
                : [];
            }),
            (dr.takeRightWhile = function(t, n) {
              return t && t.length ? Bi(t, Yo(n, 3), !1, !0) : [];
            }),
            (dr.takeWhile = function(t, n) {
              return t && t.length ? Bi(t, Yo(n, 3)) : [];
            }),
            (dr.tap = function(t, n) {
              return n(t), t;
            }),
            (dr.throttle = function(t, n, e) {
              var r = !0,
                i = !0;
              if ('function' != typeof t) throw new on(c);
              return (
                Na(e) &&
                  ((r = 'leading' in e ? !!e.leading : r),
                  (i = 'trailing' in e ? !!e.trailing : i)),
                ia(t, n, {leading: r, maxWait: n, trailing: i})
              );
            }),
            (dr.thru = Bu),
            (dr.toArray = Pa),
            (dr.toPairs = lc),
            (dr.toPairsIn = hc),
            (dr.toPath = function(t) {
              return ga(t) ? te(t, su) : Ia(t) ? [t] : eo(fu($a(t)));
            }),
            (dr.toPlainObject = qa),
            (dr.transform = function(t, n, e) {
              var r = ga(t),
                i = r || xa(t) || Ya(t);
              if (((n = Yo(n, 4)), null == e)) {
                var o = t && t.constructor;
                e = i ? (r ? new o() : []) : Na(t) && Ma(o) ? pr(Un(t)) : {};
              }
              return (
                (i ? Vn : Gr)(t, function(t, r, i) {
                  return n(e, t, r, i);
                }),
                e
              );
            }),
            (dr.unary = function(t) {
              return ta(t, 1);
            }),
            (dr.union = Tu),
            (dr.unionBy = Au),
            (dr.unionWith = Su),
            (dr.uniq = function(t) {
              return t && t.length ? ji(t) : [];
            }),
            (dr.uniqBy = function(t, n) {
              return t && t.length ? ji(t, Yo(n, 2)) : [];
            }),
            (dr.uniqWith = function(t, n) {
              return (
                (n = 'function' == typeof n ? n : o),
                t && t.length ? ji(t, o, n) : []
              );
            }),
            (dr.unset = function(t, n) {
              return null == t || Li(t, n);
            }),
            (dr.unzip = Ou),
            (dr.unzipWith = Uu),
            (dr.update = function(t, n, e) {
              return null == t ? t : Pi(t, n, $i(e));
            }),
            (dr.updateWith = function(t, n, e, r) {
              return (
                (r = 'function' == typeof r ? r : o),
                null == t ? t : Pi(t, n, $i(e), r)
              );
            }),
            (dr.values = dc),
            (dr.valuesIn = function(t) {
              return null == t ? [] : be(t, oc(t));
            }),
            (dr.without = ku),
            (dr.words = Mc),
            (dr.wrap = function(t, n) {
              return sa($i(n), t);
            }),
            (dr.xor = Du),
            (dr.xorBy = Iu),
            (dr.xorWith = Yu),
            (dr.zip = ju),
            (dr.zipObject = function(t, n) {
              return Hi(t || [], n || [], Tr);
            }),
            (dr.zipObjectDeep = function(t, n) {
              return Hi(t || [], n || [], Ei);
            }),
            (dr.zipWith = Lu),
            (dr.entries = lc),
            (dr.entriesIn = hc),
            (dr.extend = Ga),
            (dr.extendWith = Va),
            Dc(dr, dr),
            (dr.add = qc),
            (dr.attempt = Rc),
            (dr.camelCase = pc),
            (dr.capitalize = _c),
            (dr.ceil = $c),
            (dr.clamp = function(t, n, e) {
              return (
                e === o && ((e = n), (n = o)),
                e !== o && (e = (e = Ha(e)) == e ? e : 0),
                n !== o && (n = (n = Ha(n)) == n ? n : 0),
                Dr(Ha(t), n, e)
              );
            }),
            (dr.clone = function(t) {
              return Ir(t, p);
            }),
            (dr.cloneDeep = function(t) {
              return Ir(t, h | p);
            }),
            (dr.cloneDeepWith = function(t, n) {
              return Ir(t, h | p, (n = 'function' == typeof n ? n : o));
            }),
            (dr.cloneWith = function(t, n) {
              return Ir(t, p, (n = 'function' == typeof n ? n : o));
            }),
            (dr.conformsTo = function(t, n) {
              return null == n || Yr(t, n, ic(n));
            }),
            (dr.deburr = vc),
            (dr.defaultTo = function(t, n) {
              return null == t || t != t ? n : t;
            }),
            (dr.divide = Wc),
            (dr.endsWith = function(t, n, e) {
              (t = $a(t)), (n = Yi(n));
              var r = t.length,
                i = (e = e === o ? r : Dr(Fa(e), 0, r));
              return (e -= n.length) >= 0 && t.slice(e, i) == n;
            }),
            (dr.eq = da),
            (dr.escape = function(t) {
              return (t = $a(t)) && Rt.test(t) ? t.replace(Ct, Ce) : t;
            }),
            (dr.escapeRegExp = function(t) {
              return (t = $a(t)) && kt.test(t) ? t.replace(Ut, '\\$&') : t;
            }),
            (dr.every = function(t, n, e) {
              var r = ga(t) ? Xn : Fr;
              return e && Go(t, n, e) && (n = o), r(t, Yo(n, 3));
            }),
            (dr.find = Hu),
            (dr.findIndex = vu),
            (dr.findKey = function(t, n) {
              return ue(t, Yo(n, 3), Gr);
            }),
            (dr.findLast = qu),
            (dr.findLastIndex = gu),
            (dr.findLastKey = function(t, n) {
              return ue(t, Yo(n, 3), Vr);
            }),
            (dr.floor = Gc),
            (dr.forEach = $u),
            (dr.forEachRight = Wu),
            (dr.forIn = function(t, n) {
              return null == t ? t : $r(t, Yo(n, 3), oc);
            }),
            (dr.forInRight = function(t, n) {
              return null == t ? t : Wr(t, Yo(n, 3), oc);
            }),
            (dr.forOwn = function(t, n) {
              return t && Gr(t, Yo(n, 3));
            }),
            (dr.forOwnRight = function(t, n) {
              return t && Vr(t, Yo(n, 3));
            }),
            (dr.get = Qa),
            (dr.gt = pa),
            (dr.gte = _a),
            (dr.has = function(t, n) {
              return null != t && Ho(t, n, ti);
            }),
            (dr.hasIn = tc),
            (dr.head = yu),
            (dr.identity = Sc),
            (dr.includes = function(t, n, e, r) {
              (t = ya(t) ? t : dc(t)), (e = e && !r ? Fa(e) : 0);
              var i = t.length;
              return (
                e < 0 && (e = $e(i + e, 0)),
                Da(t) ? e <= i && t.indexOf(n, e) > -1 : !!i && ce(t, n, e) > -1
              );
            }),
            (dr.indexOf = function(t, n, e) {
              var r = null == t ? 0 : t.length;
              if (!r) return -1;
              var i = null == e ? 0 : Fa(e);
              return i < 0 && (i = $e(r + i, 0)), ce(t, n, i);
            }),
            (dr.inRange = function(t, n, e) {
              return (
                (n = Ba(n)),
                e === o ? ((e = n), (n = 0)) : (e = Ba(e)),
                (function(t, n, e) {
                  return t >= We(n, e) && t < $e(n, e);
                })((t = Ha(t)), n, e)
              );
            }),
            (dr.invoke = rc),
            (dr.isArguments = va),
            (dr.isArray = ga),
            (dr.isArrayBuffer = ba),
            (dr.isArrayLike = ya),
            (dr.isArrayLikeObject = ma),
            (dr.isBoolean = function(t) {
              return !0 === t || !1 === t || (Ta(t) && Jr(t) == q);
            }),
            (dr.isBuffer = xa),
            (dr.isDate = wa),
            (dr.isElement = function(t) {
              return Ta(t) && 1 === t.nodeType && !Oa(t);
            }),
            (dr.isEmpty = function(t) {
              if (null == t) return !0;
              if (
                ya(t) &&
                (ga(t) ||
                  'string' == typeof t ||
                  'function' == typeof t.splice ||
                  xa(t) ||
                  Ya(t) ||
                  va(t))
              )
                return !t.length;
              var n = zo(t);
              if (n == X || n == et) return !t.size;
              if (Ko(t)) return !fi(t).length;
              for (var e in t) if (ln.call(t, e)) return !1;
              return !0;
            }),
            (dr.isEqual = function(t, n) {
              return oi(t, n);
            }),
            (dr.isEqualWith = function(t, n, e) {
              var r = (e = 'function' == typeof e ? e : o) ? e(t, n) : o;
              return r === o ? oi(t, n, o, e) : !!r;
            }),
            (dr.isError = Ca),
            (dr.isFinite = function(t) {
              return 'number' == typeof t && ze(t);
            }),
            (dr.isFunction = Ma),
            (dr.isInteger = Ra),
            (dr.isLength = Ea),
            (dr.isMap = Aa),
            (dr.isMatch = function(t, n) {
              return t === n || ui(t, n, Lo(n));
            }),
            (dr.isMatchWith = function(t, n, e) {
              return (e = 'function' == typeof e ? e : o), ui(t, n, Lo(n), e);
            }),
            (dr.isNaN = function(t) {
              return Sa(t) && t != +t;
            }),
            (dr.isNative = function(t) {
              if (Xo(t)) throw new Jt(a);
              return ai(t);
            }),
            (dr.isNil = function(t) {
              return null == t;
            }),
            (dr.isNull = function(t) {
              return null === t;
            }),
            (dr.isNumber = Sa),
            (dr.isObject = Na),
            (dr.isObjectLike = Ta),
            (dr.isPlainObject = Oa),
            (dr.isRegExp = Ua),
            (dr.isSafeInteger = function(t) {
              return Ra(t) && t >= -D && t <= D;
            }),
            (dr.isSet = ka),
            (dr.isString = Da),
            (dr.isSymbol = Ia),
            (dr.isTypedArray = Ya),
            (dr.isUndefined = function(t) {
              return t === o;
            }),
            (dr.isWeakMap = function(t) {
              return Ta(t) && zo(t) == ut;
            }),
            (dr.isWeakSet = function(t) {
              return Ta(t) && Jr(t) == at;
            }),
            (dr.join = function(t, n) {
              return null == t ? '' : He.call(t, n);
            }),
            (dr.kebabCase = gc),
            (dr.last = Cu),
            (dr.lastIndexOf = function(t, n, e) {
              var r = null == t ? 0 : t.length;
              if (!r) return -1;
              var i = r;
              return (
                e !== o && (i = (i = Fa(e)) < 0 ? $e(r + i, 0) : We(i, r - 1)),
                n == n
                  ? (function(t, n, e) {
                      for (var r = e + 1; r--; ) if (t[r] === n) return r;
                      return r;
                    })(t, n, i)
                  : ae(t, se, i, !0)
              );
            }),
            (dr.lowerCase = bc),
            (dr.lowerFirst = yc),
            (dr.lt = ja),
            (dr.lte = La),
            (dr.max = function(t) {
              return t && t.length ? zr(t, Sc, Qr) : o;
            }),
            (dr.maxBy = function(t, n) {
              return t && t.length ? zr(t, Yo(n, 2), Qr) : o;
            }),
            (dr.mean = function(t) {
              return le(t, Sc);
            }),
            (dr.meanBy = function(t, n) {
              return le(t, Yo(n, 2));
            }),
            (dr.min = function(t) {
              return t && t.length ? zr(t, Sc, li) : o;
            }),
            (dr.minBy = function(t, n) {
              return t && t.length ? zr(t, Yo(n, 2), li) : o;
            }),
            (dr.stubArray = zc),
            (dr.stubFalse = Hc),
            (dr.stubObject = function() {
              return {};
            }),
            (dr.stubString = function() {
              return '';
            }),
            (dr.stubTrue = function() {
              return !0;
            }),
            (dr.multiply = Zc),
            (dr.nth = function(t, n) {
              return t && t.length ? vi(t, Fa(n)) : o;
            }),
            (dr.noConflict = function() {
              return Dn._ === this && (Dn._ = vn), this;
            }),
            (dr.noop = Ic),
            (dr.now = Qu),
            (dr.pad = function(t, n, e) {
              t = $a(t);
              var r = (n = Fa(n)) ? Oe(t) : 0;
              if (!n || r >= n) return t;
              var i = (n - r) / 2;
              return bo(Pe(i), e) + t + bo(Le(i), e);
            }),
            (dr.padEnd = function(t, n, e) {
              t = $a(t);
              var r = (n = Fa(n)) ? Oe(t) : 0;
              return n && r < n ? t + bo(n - r, e) : t;
            }),
            (dr.padStart = function(t, n, e) {
              t = $a(t);
              var r = (n = Fa(n)) ? Oe(t) : 0;
              return n && r < n ? bo(n - r, e) + t : t;
            }),
            (dr.parseInt = function(t, n, e) {
              return (
                e || null == n ? (n = 0) : n && (n = +n),
                Ve($a(t).replace(It, ''), n || 0)
              );
            }),
            (dr.random = function(t, n, e) {
              if (
                (e && 'boolean' != typeof e && Go(t, n, e) && (n = e = o),
                e === o &&
                  ('boolean' == typeof n
                    ? ((e = n), (n = o))
                    : 'boolean' == typeof t && ((e = t), (t = o))),
                t === o && n === o
                  ? ((t = 0), (n = 1))
                  : ((t = Ba(t)), n === o ? ((n = t), (t = 0)) : (n = Ba(n))),
                t > n)
              ) {
                var r = t;
                (t = n), (n = r);
              }
              if (e || t % 1 || n % 1) {
                var i = Ze();
                return We(
                  t + i * (n - t + Sn('1e-' + ((i + '').length - 1))),
                  n
                );
              }
              return xi(t, n);
            }),
            (dr.reduce = function(t, n, e) {
              var r = ga(t) ? ee : pe,
                i = arguments.length < 3;
              return r(t, Yo(n, 4), e, i, Pr);
            }),
            (dr.reduceRight = function(t, n, e) {
              var r = ga(t) ? re : pe,
                i = arguments.length < 3;
              return r(t, Yo(n, 4), e, i, Br);
            }),
            (dr.repeat = function(t, n, e) {
              return (
                (n = (e ? Go(t, n, e) : n === o) ? 1 : Fa(n)), wi($a(t), n)
              );
            }),
            (dr.replace = function() {
              var t = arguments,
                n = $a(t[0]);
              return t.length < 3 ? n : n.replace(t[1], t[2]);
            }),
            (dr.result = function(t, n, e) {
              var r = -1,
                i = (n = Wi(n, t)).length;
              for (i || ((i = 1), (t = o)); ++r < i; ) {
                var u = null == t ? o : t[su(n[r])];
                u === o && ((r = i), (u = e)), (t = Ma(u) ? u.call(t) : u);
              }
              return t;
            }),
            (dr.round = Xc),
            (dr.runInContext = t),
            (dr.sample = function(t) {
              return (ga(t) ? Mr : Mi)(t);
            }),
            (dr.size = function(t) {
              if (null == t) return 0;
              if (ya(t)) return Da(t) ? Oe(t) : t.length;
              var n = zo(t);
              return n == X || n == et ? t.size : fi(t).length;
            }),
            (dr.snakeCase = mc),
            (dr.some = function(t, n, e) {
              var r = ga(t) ? ie : Oi;
              return e && Go(t, n, e) && (n = o), r(t, Yo(n, 3));
            }),
            (dr.sortedIndex = function(t, n) {
              return Ui(t, n);
            }),
            (dr.sortedIndexBy = function(t, n, e) {
              return ki(t, n, Yo(e, 2));
            }),
            (dr.sortedIndexOf = function(t, n) {
              var e = null == t ? 0 : t.length;
              if (e) {
                var r = Ui(t, n);
                if (r < e && da(t[r], n)) return r;
              }
              return -1;
            }),
            (dr.sortedLastIndex = function(t, n) {
              return Ui(t, n, !0);
            }),
            (dr.sortedLastIndexBy = function(t, n, e) {
              return ki(t, n, Yo(e, 2), !0);
            }),
            (dr.sortedLastIndexOf = function(t, n) {
              if (null != t && t.length) {
                var e = Ui(t, n, !0) - 1;
                if (da(t[e], n)) return e;
              }
              return -1;
            }),
            (dr.startCase = xc),
            (dr.startsWith = function(t, n, e) {
              return (
                (t = $a(t)),
                (e = null == e ? 0 : Dr(Fa(e), 0, t.length)),
                (n = Yi(n)),
                t.slice(e, e + n.length) == n
              );
            }),
            (dr.subtract = Kc),
            (dr.sum = function(t) {
              return t && t.length ? _e(t, Sc) : 0;
            }),
            (dr.sumBy = function(t, n) {
              return t && t.length ? _e(t, Yo(n, 2)) : 0;
            }),
            (dr.template = function(t, n, e) {
              var r = dr.templateSettings;
              e && Go(t, n, e) && (n = o), (t = $a(t)), (n = Va({}, n, r, Eo));
              var i,
                u,
                a = Va({}, n.imports, r.imports, Eo),
                c = ic(a),
                f = be(a, c),
                s = 0,
                l = n.interpolate || Xt,
                h = "__p += '",
                d = en(
                  (n.escape || Xt).source +
                    '|' +
                    l.source +
                    '|' +
                    (l === Tt ? zt : Xt).source +
                    '|' +
                    (n.evaluate || Xt).source +
                    '|$',
                  'g'
                ),
                p =
                  '//# sourceURL=' +
                  (ln.call(n, 'sourceURL')
                    ? (n.sourceURL + '').replace(/[\r\n]/g, ' ')
                    : 'lodash.templateSources[' + ++En + ']') +
                  '\n';
              t.replace(d, function(n, e, r, o, a, c) {
                return (
                  r || (r = o),
                  (h += t.slice(s, c).replace(Kt, Me)),
                  e && ((i = !0), (h += "' +\n__e(" + e + ") +\n'")),
                  a && ((u = !0), (h += "';\n" + a + ";\n__p += '")),
                  r &&
                    (h += "' +\n((__t = (" + r + ")) == null ? '' : __t) +\n'"),
                  (s = c + n.length),
                  n
                );
              }),
                (h += "';\n");
              var _ = ln.call(n, 'variable') && n.variable;
              _ || (h = 'with (obj) {\n' + h + '\n}\n'),
                (h = (u ? h.replace(yt, '') : h)
                  .replace(mt, '$1')
                  .replace(xt, '$1;')),
                (h =
                  'function(' +
                  (_ || 'obj') +
                  ') {\n' +
                  (_ ? '' : 'obj || (obj = {});\n') +
                  "var __t, __p = ''" +
                  (i ? ', __e = _.escape' : '') +
                  (u
                    ? ", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n"
                    : ';\n') +
                  h +
                  'return __p\n}');
              var v = Rc(function() {
                return Qt(c, p + 'return ' + h).apply(o, f);
              });
              if (((v.source = h), Ca(v))) throw v;
              return v;
            }),
            (dr.times = function(t, n) {
              if ((t = Fa(t)) < 1 || t > D) return [];
              var e = j,
                r = We(t, j);
              (n = Yo(n)), (t -= j);
              for (var i = ve(r, n); ++e < t; ) n(e);
              return i;
            }),
            (dr.toFinite = Ba),
            (dr.toInteger = Fa),
            (dr.toLength = za),
            (dr.toLower = function(t) {
              return $a(t).toLowerCase();
            }),
            (dr.toNumber = Ha),
            (dr.toSafeInteger = function(t) {
              return t ? Dr(Fa(t), -D, D) : 0 === t ? t : 0;
            }),
            (dr.toString = $a),
            (dr.toUpper = function(t) {
              return $a(t).toUpperCase();
            }),
            (dr.trim = function(t, n, e) {
              if ((t = $a(t)) && (e || n === o)) return t.replace(Dt, '');
              if (!t || !(n = Yi(n))) return t;
              var r = Ue(t),
                i = Ue(n);
              return Vi(r, me(r, i), xe(r, i) + 1).join('');
            }),
            (dr.trimEnd = function(t, n, e) {
              if ((t = $a(t)) && (e || n === o)) return t.replace(Yt, '');
              if (!t || !(n = Yi(n))) return t;
              var r = Ue(t);
              return Vi(r, 0, xe(r, Ue(n)) + 1).join('');
            }),
            (dr.trimStart = function(t, n, e) {
              if ((t = $a(t)) && (e || n === o)) return t.replace(It, '');
              if (!t || !(n = Yi(n))) return t;
              var r = Ue(t);
              return Vi(r, me(r, Ue(n))).join('');
            }),
            (dr.truncate = function(t, n) {
              var e = N,
                r = T;
              if (Na(n)) {
                var i = 'separator' in n ? n.separator : i;
                (e = 'length' in n ? Fa(n.length) : e),
                  (r = 'omission' in n ? Yi(n.omission) : r);
              }
              var u = (t = $a(t)).length;
              if (Re(t)) {
                var a = Ue(t);
                u = a.length;
              }
              if (e >= u) return t;
              var c = e - Oe(r);
              if (c < 1) return r;
              var f = a ? Vi(a, 0, c).join('') : t.slice(0, c);
              if (i === o) return f + r;
              if ((a && (c += f.length - c), Ua(i))) {
                if (t.slice(c).search(i)) {
                  var s,
                    l = f;
                  for (
                    i.global || (i = en(i.source, $a(Ht.exec(i)) + 'g')),
                      i.lastIndex = 0;
                    (s = i.exec(l));

                  )
                    var h = s.index;
                  f = f.slice(0, h === o ? c : h);
                }
              } else if (t.indexOf(Yi(i), c) != c) {
                var d = f.lastIndexOf(i);
                d > -1 && (f = f.slice(0, d));
              }
              return f + r;
            }),
            (dr.unescape = function(t) {
              return (t = $a(t)) && Mt.test(t) ? t.replace(wt, ke) : t;
            }),
            (dr.uniqueId = function(t) {
              var n = ++hn;
              return $a(t) + n;
            }),
            (dr.upperCase = wc),
            (dr.upperFirst = Cc),
            (dr.each = $u),
            (dr.eachRight = Wu),
            (dr.first = yu),
            Dc(
              dr,
              ((Vc = {}),
              Gr(dr, function(t, n) {
                ln.call(dr.prototype, n) || (Vc[n] = t);
              }),
              Vc),
              {chain: !1}
            ),
            (dr.VERSION = '4.17.15'),
            Vn(
              [
                'bind',
                'bindKey',
                'curry',
                'curryRight',
                'partial',
                'partialRight',
              ],
              function(t) {
                dr[t].placeholder = dr;
              }
            ),
            Vn(['drop', 'take'], function(t, n) {
              (gr.prototype[t] = function(e) {
                e = e === o ? 1 : $e(Fa(e), 0);
                var r = this.__filtered__ && !n ? new gr(this) : this.clone();
                return (
                  r.__filtered__
                    ? (r.__takeCount__ = We(e, r.__takeCount__))
                    : r.__views__.push({
                        size: We(e, j),
                        type: t + (r.__dir__ < 0 ? 'Right' : ''),
                      }),
                  r
                );
              }),
                (gr.prototype[t + 'Right'] = function(n) {
                  return this.reverse()
                    [t](n)
                    .reverse();
                });
            }),
            Vn(['filter', 'map', 'takeWhile'], function(t, n) {
              var e = n + 1,
                r = e == O || 3 == e;
              gr.prototype[t] = function(t) {
                var n = this.clone();
                return (
                  n.__iteratees__.push({iteratee: Yo(t, 3), type: e}),
                  (n.__filtered__ = n.__filtered__ || r),
                  n
                );
              };
            }),
            Vn(['head', 'last'], function(t, n) {
              var e = 'take' + (n ? 'Right' : '');
              gr.prototype[t] = function() {
                return this[e](1).value()[0];
              };
            }),
            Vn(['initial', 'tail'], function(t, n) {
              var e = 'drop' + (n ? '' : 'Right');
              gr.prototype[t] = function() {
                return this.__filtered__ ? new gr(this) : this[e](1);
              };
            }),
            (gr.prototype.compact = function() {
              return this.filter(Sc);
            }),
            (gr.prototype.find = function(t) {
              return this.filter(t).head();
            }),
            (gr.prototype.findLast = function(t) {
              return this.reverse().find(t);
            }),
            (gr.prototype.invokeMap = Ci(function(t, n) {
              return 'function' == typeof t
                ? new gr(this)
                : this.map(function(e) {
                    return ri(e, t, n);
                  });
            })),
            (gr.prototype.reject = function(t) {
              return this.filter(ca(Yo(t)));
            }),
            (gr.prototype.slice = function(t, n) {
              t = Fa(t);
              var e = this;
              return e.__filtered__ && (t > 0 || n < 0)
                ? new gr(e)
                : (t < 0 ? (e = e.takeRight(-t)) : t && (e = e.drop(t)),
                  n !== o &&
                    (e = (n = Fa(n)) < 0 ? e.dropRight(-n) : e.take(n - t)),
                  e);
            }),
            (gr.prototype.takeRightWhile = function(t) {
              return this.reverse()
                .takeWhile(t)
                .reverse();
            }),
            (gr.prototype.toArray = function() {
              return this.take(j);
            }),
            Gr(gr.prototype, function(t, n) {
              var e = /^(?:filter|find|map|reject)|While$/.test(n),
                r = /^(?:head|last)$/.test(n),
                i = dr[r ? 'take' + ('last' == n ? 'Right' : '') : n],
                u = r || /^find/.test(n);
              i &&
                (dr.prototype[n] = function() {
                  var n = this.__wrapped__,
                    a = r ? [1] : arguments,
                    c = n instanceof gr,
                    f = a[0],
                    s = c || ga(n),
                    l = function(t) {
                      var n = i.apply(dr, ne([t], a));
                      return r && h ? n[0] : n;
                    };
                  s &&
                    e &&
                    'function' == typeof f &&
                    1 != f.length &&
                    (c = s = !1);
                  var h = this.__chain__,
                    d = !!this.__actions__.length,
                    p = u && !h,
                    _ = c && !d;
                  if (!u && s) {
                    n = _ ? n : new gr(this);
                    var v = t.apply(n, a);
                    return (
                      v.__actions__.push({func: Bu, args: [l], thisArg: o}),
                      new vr(v, h)
                    );
                  }
                  return p && _
                    ? t.apply(this, a)
                    : ((v = this.thru(l)),
                      p ? (r ? v.value()[0] : v.value()) : v);
                });
            }),
            Vn(['pop', 'push', 'shift', 'sort', 'splice', 'unshift'], function(
              t
            ) {
              var n = un[t],
                e = /^(?:push|sort|unshift)$/.test(t) ? 'tap' : 'thru',
                r = /^(?:pop|shift)$/.test(t);
              dr.prototype[t] = function() {
                var t = arguments;
                if (r && !this.__chain__) {
                  var i = this.value();
                  return n.apply(ga(i) ? i : [], t);
                }
                return this[e](function(e) {
                  return n.apply(ga(e) ? e : [], t);
                });
              };
            }),
            Gr(gr.prototype, function(t, n) {
              var e = dr[n];
              if (e) {
                var r = e.name + '';
                ln.call(ir, r) || (ir[r] = []), ir[r].push({name: n, func: e});
              }
            }),
            (ir[po(o, b).name] = [{name: 'wrapper', func: o}]),
            (gr.prototype.clone = function() {
              var t = new gr(this.__wrapped__);
              return (
                (t.__actions__ = eo(this.__actions__)),
                (t.__dir__ = this.__dir__),
                (t.__filtered__ = this.__filtered__),
                (t.__iteratees__ = eo(this.__iteratees__)),
                (t.__takeCount__ = this.__takeCount__),
                (t.__views__ = eo(this.__views__)),
                t
              );
            }),
            (gr.prototype.reverse = function() {
              if (this.__filtered__) {
                var t = new gr(this);
                (t.__dir__ = -1), (t.__filtered__ = !0);
              } else (t = this.clone()).__dir__ *= -1;
              return t;
            }),
            (gr.prototype.value = function() {
              var t = this.__wrapped__.value(),
                n = this.__dir__,
                e = ga(t),
                r = n < 0,
                i = e ? t.length : 0,
                o = (function(t, n, e) {
                  for (var r = -1, i = e.length; ++r < i; ) {
                    var o = e[r],
                      u = o.size;
                    switch (o.type) {
                      case 'drop':
                        t += u;
                        break;
                      case 'dropRight':
                        n -= u;
                        break;
                      case 'take':
                        n = We(n, t + u);
                        break;
                      case 'takeRight':
                        t = $e(t, n - u);
                    }
                  }
                  return {start: t, end: n};
                })(0, i, this.__views__),
                u = o.start,
                a = o.end,
                c = a - u,
                f = r ? a : u - 1,
                s = this.__iteratees__,
                l = s.length,
                h = 0,
                d = We(c, this.__takeCount__);
              if (!e || (!r && i == c && d == c))
                return Fi(t, this.__actions__);
              var p = [];
              t: for (; c-- && h < d; ) {
                for (var _ = -1, v = t[(f += n)]; ++_ < l; ) {
                  var g = s[_],
                    b = g.iteratee,
                    y = g.type,
                    m = b(v);
                  if (y == U) v = m;
                  else if (!m) {
                    if (y == O) continue t;
                    break t;
                  }
                }
                p[h++] = v;
              }
              return p;
            }),
            (dr.prototype.at = Fu),
            (dr.prototype.chain = function() {
              return Pu(this);
            }),
            (dr.prototype.commit = function() {
              return new vr(this.value(), this.__chain__);
            }),
            (dr.prototype.next = function() {
              this.__values__ === o && (this.__values__ = Pa(this.value()));
              var t = this.__index__ >= this.__values__.length;
              return {
                done: t,
                value: t ? o : this.__values__[this.__index__++],
              };
            }),
            (dr.prototype.plant = function(t) {
              for (var n, e = this; e instanceof _r; ) {
                var r = hu(e);
                (r.__index__ = 0),
                  (r.__values__ = o),
                  n ? (i.__wrapped__ = r) : (n = r);
                var i = r;
                e = e.__wrapped__;
              }
              return (i.__wrapped__ = t), n;
            }),
            (dr.prototype.reverse = function() {
              var t = this.__wrapped__;
              if (t instanceof gr) {
                var n = t;
                return (
                  this.__actions__.length && (n = new gr(this)),
                  (n = n.reverse()).__actions__.push({
                    func: Bu,
                    args: [Nu],
                    thisArg: o,
                  }),
                  new vr(n, this.__chain__)
                );
              }
              return this.thru(Nu);
            }),
            (dr.prototype.toJSON = dr.prototype.valueOf = dr.prototype.value = function() {
              return Fi(this.__wrapped__, this.__actions__);
            }),
            (dr.prototype.first = dr.prototype.head),
            Pn &&
              (dr.prototype[Pn] = function() {
                return this;
              }),
            dr
          );
        })();
        (Dn._ = De),
          (i = function() {
            return De;
          }.call(n, e, n, r)) === o || (r.exports = i);
      }.call(this));
    }.call(this, e(8), e(17)(t)));
  },
  function(t, n, e) {},
  function(t, n) {
    t.exports = function(t) {
      return (
        t.webpackPolyfill ||
          ((t.deprecate = function() {}),
          (t.paths = []),
          t.children || (t.children = []),
          Object.defineProperty(t, 'loaded', {
            enumerable: !0,
            get: function() {
              return t.l;
            },
          }),
          Object.defineProperty(t, 'id', {
            enumerable: !0,
            get: function() {
              return t.i;
            },
          }),
          (t.webpackPolyfill = 1)),
        t
      );
    };
  },
  ,
  ,
  function(t, n, e) {
    'use strict';
    e.r(n);
    var r = function(t, n) {
        return t < n ? -1 : t > n ? 1 : t >= n ? 0 : NaN;
      },
      i = function(t) {
        var n;
        return (
          1 === t.length &&
            ((n = t),
            (t = function(t, e) {
              return r(n(t), e);
            })),
          {
            left: function(n, e, r, i) {
              for (null == r && (r = 0), null == i && (i = n.length); r < i; ) {
                var o = (r + i) >>> 1;
                t(n[o], e) < 0 ? (r = o + 1) : (i = o);
              }
              return r;
            },
            right: function(n, e, r, i) {
              for (null == r && (r = 0), null == i && (i = n.length); r < i; ) {
                var o = (r + i) >>> 1;
                t(n[o], e) > 0 ? (i = o) : (r = o + 1);
              }
              return r;
            },
          }
        );
      };
    var o = i(r),
      u = o.right,
      a = (o.left, u);
    var c = function(t) {
        return null === t ? NaN : +t;
      },
      f = Array.prototype,
      s =
        (f.slice,
        f.map,
        function(t, n, e) {
          (t = +t),
            (n = +n),
            (e =
              (i = arguments.length) < 2
                ? ((n = t), (t = 0), 1)
                : i < 3
                ? 1
                : +e);
          for (
            var r = -1,
              i = 0 | Math.max(0, Math.ceil((n - t) / e)),
              o = new Array(i);
            ++r < i;

          )
            o[r] = t + r * e;
          return o;
        }),
      l = Math.sqrt(50),
      h = Math.sqrt(10),
      d = Math.sqrt(2),
      p = function(t, n, e) {
        var r,
          i,
          o,
          u,
          a = -1;
        if (((e = +e), (t = +t) === (n = +n) && e > 0)) return [t];
        if (
          ((r = n < t) && ((i = t), (t = n), (n = i)),
          0 === (u = _(t, n, e)) || !isFinite(u))
        )
          return [];
        if (u > 0)
          for (
            t = Math.ceil(t / u),
              n = Math.floor(n / u),
              o = new Array((i = Math.ceil(n - t + 1)));
            ++a < i;

          )
            o[a] = (t + a) * u;
        else
          for (
            t = Math.floor(t * u),
              n = Math.ceil(n * u),
              o = new Array((i = Math.ceil(t - n + 1)));
            ++a < i;

          )
            o[a] = (t - a) / u;
        return r && o.reverse(), o;
      };
    function _(t, n, e) {
      var r = (n - t) / Math.max(0, e),
        i = Math.floor(Math.log(r) / Math.LN10),
        o = r / Math.pow(10, i);
      return i >= 0
        ? (o >= l ? 10 : o >= h ? 5 : o >= d ? 2 : 1) * Math.pow(10, i)
        : -Math.pow(10, -i) / (o >= l ? 10 : o >= h ? 5 : o >= d ? 2 : 1);
    }
    function v(t, n, e) {
      var r = Math.abs(n - t) / Math.max(0, e),
        i = Math.pow(10, Math.floor(Math.log(r) / Math.LN10)),
        o = r / i;
      return (
        o >= l ? (i *= 10) : o >= h ? (i *= 5) : o >= d && (i *= 2),
        n < t ? -i : i
      );
    }
    var g = function(t, n, e) {
      if ((null == e && (e = c), (r = t.length))) {
        if ((n = +n) <= 0 || r < 2) return +e(t[0], 0, t);
        if (n >= 1) return +e(t[r - 1], r - 1, t);
        var r,
          i = (r - 1) * n,
          o = Math.floor(i),
          u = +e(t[o], o, t);
        return u + (+e(t[o + 1], o + 1, t) - u) * (i - o);
      }
    };
    function b(t, n) {
      switch (arguments.length) {
        case 0:
          break;
        case 1:
          this.range(t);
          break;
        default:
          this.range(n).domain(t);
      }
      return this;
    }
    function y(t, n) {
      switch (arguments.length) {
        case 0:
          break;
        case 1:
          this.interpolator(t);
          break;
        default:
          this.interpolator(n).domain(t);
      }
      return this;
    }
    function m() {}
    function x(t, n) {
      var e = new m();
      if (t instanceof m)
        t.each(function(t, n) {
          e.set(n, t);
        });
      else if (Array.isArray(t)) {
        var r,
          i = -1,
          o = t.length;
        if (null == n) for (; ++i < o; ) e.set(i, t[i]);
        else for (; ++i < o; ) e.set(n((r = t[i]), i, t), r);
      } else if (t) for (var u in t) e.set(u, t[u]);
      return e;
    }
    m.prototype = x.prototype = {
      constructor: m,
      has: function(t) {
        return '$' + t in this;
      },
      get: function(t) {
        return this['$' + t];
      },
      set: function(t, n) {
        return (this['$' + t] = n), this;
      },
      remove: function(t) {
        var n = '$' + t;
        return n in this && delete this[n];
      },
      clear: function() {
        for (var t in this) '$' === t[0] && delete this[t];
      },
      keys: function() {
        var t = [];
        for (var n in this) '$' === n[0] && t.push(n.slice(1));
        return t;
      },
      values: function() {
        var t = [];
        for (var n in this) '$' === n[0] && t.push(this[n]);
        return t;
      },
      entries: function() {
        var t = [];
        for (var n in this)
          '$' === n[0] && t.push({key: n.slice(1), value: this[n]});
        return t;
      },
      size: function() {
        var t = 0;
        for (var n in this) '$' === n[0] && ++t;
        return t;
      },
      empty: function() {
        for (var t in this) if ('$' === t[0]) return !1;
        return !0;
      },
      each: function(t) {
        for (var n in this) '$' === n[0] && t(this[n], n.slice(1), this);
      },
    };
    var w = x;
    function C() {}
    var M = w.prototype;
    function R(t, n) {
      var e = new C();
      if (t instanceof C)
        t.each(function(t) {
          e.add(t);
        });
      else if (t) {
        var r = -1,
          i = t.length;
        if (null == n) for (; ++r < i; ) e.add(t[r]);
        else for (; ++r < i; ) e.add(n(t[r], r, t));
      }
      return e;
    }
    C.prototype = R.prototype = {
      constructor: C,
      has: M.has,
      add: function(t) {
        return (this['$' + (t += '')] = t), this;
      },
      remove: M.remove,
      clear: M.clear,
      values: M.keys,
      size: M.size,
      empty: M.empty,
      each: M.each,
    };
    var E = Array.prototype,
      N = E.map,
      T = E.slice,
      A = {name: 'implicit'};
    function S() {
      var t = w(),
        n = [],
        e = [],
        r = A;
      function i(i) {
        var o = i + '',
          u = t.get(o);
        if (!u) {
          if (r !== A) return r;
          t.set(o, (u = n.push(i)));
        }
        return e[(u - 1) % e.length];
      }
      return (
        (i.domain = function(e) {
          if (!arguments.length) return n.slice();
          (n = []), (t = w());
          for (var r, o, u = -1, a = e.length; ++u < a; )
            t.has((o = (r = e[u]) + '')) || t.set(o, n.push(r));
          return i;
        }),
        (i.range = function(t) {
          return arguments.length ? ((e = T.call(t)), i) : e.slice();
        }),
        (i.unknown = function(t) {
          return arguments.length ? ((r = t), i) : r;
        }),
        (i.copy = function() {
          return S(n, e).unknown(r);
        }),
        b.apply(i, arguments),
        i
      );
    }
    function O() {
      var t,
        n,
        e = S().unknown(void 0),
        r = e.domain,
        i = e.range,
        o = [0, 1],
        u = !1,
        a = 0,
        c = 0,
        f = 0.5;
      function l() {
        var e = r().length,
          l = o[1] < o[0],
          h = o[l - 0],
          d = o[1 - l];
        (t = (d - h) / Math.max(1, e - a + 2 * c)),
          u && (t = Math.floor(t)),
          (h += (d - h - t * (e - a)) * f),
          (n = t * (1 - a)),
          u && ((h = Math.round(h)), (n = Math.round(n)));
        var p = s(e).map(function(n) {
          return h + t * n;
        });
        return i(l ? p.reverse() : p);
      }
      return (
        delete e.unknown,
        (e.domain = function(t) {
          return arguments.length ? (r(t), l()) : r();
        }),
        (e.range = function(t) {
          return arguments.length ? ((o = [+t[0], +t[1]]), l()) : o.slice();
        }),
        (e.rangeRound = function(t) {
          return (o = [+t[0], +t[1]]), (u = !0), l();
        }),
        (e.bandwidth = function() {
          return n;
        }),
        (e.step = function() {
          return t;
        }),
        (e.round = function(t) {
          return arguments.length ? ((u = !!t), l()) : u;
        }),
        (e.padding = function(t) {
          return arguments.length ? ((a = Math.min(1, (c = +t))), l()) : a;
        }),
        (e.paddingInner = function(t) {
          return arguments.length ? ((a = Math.min(1, t)), l()) : a;
        }),
        (e.paddingOuter = function(t) {
          return arguments.length ? ((c = +t), l()) : c;
        }),
        (e.align = function(t) {
          return arguments.length
            ? ((f = Math.max(0, Math.min(1, t))), l())
            : f;
        }),
        (e.copy = function() {
          return O(r(), o)
            .round(u)
            .paddingInner(a)
            .paddingOuter(c)
            .align(f);
        }),
        b.apply(l(), arguments)
      );
    }
    function U() {
      return (function t(n) {
        var e = n.copy;
        return (
          (n.padding = n.paddingOuter),
          delete n.paddingInner,
          delete n.paddingOuter,
          (n.copy = function() {
            return t(e());
          }),
          n
        );
      })(O.apply(null, arguments).paddingInner(1));
    }
    var k = e(2),
      D = function(t) {
        return function() {
          return t;
        };
      },
      I = function(t) {
        return +t;
      },
      Y = [0, 1];
    function j(t) {
      return t;
    }
    function L(t, n) {
      return (n -= t = +t)
        ? function(e) {
            return (e - t) / n;
          }
        : D(isNaN(n) ? NaN : 0.5);
    }
    function P(t) {
      var n,
        e = t[0],
        r = t[t.length - 1];
      return (
        e > r && ((n = e), (e = r), (r = n)),
        function(t) {
          return Math.max(e, Math.min(r, t));
        }
      );
    }
    function B(t, n, e) {
      var r = t[0],
        i = t[1],
        o = n[0],
        u = n[1];
      return (
        i < r ? ((r = L(i, r)), (o = e(u, o))) : ((r = L(r, i)), (o = e(o, u))),
        function(t) {
          return o(r(t));
        }
      );
    }
    function F(t, n, e) {
      var r = Math.min(t.length, n.length) - 1,
        i = new Array(r),
        o = new Array(r),
        u = -1;
      for (
        t[r] < t[0] && ((t = t.slice().reverse()), (n = n.slice().reverse()));
        ++u < r;

      )
        (i[u] = L(t[u], t[u + 1])), (o[u] = e(n[u], n[u + 1]));
      return function(n) {
        var e = a(t, n, 1, r) - 1;
        return o[e](i[e](n));
      };
    }
    function z(t, n) {
      return n
        .domain(t.domain())
        .range(t.range())
        .interpolate(t.interpolate())
        .clamp(t.clamp())
        .unknown(t.unknown());
    }
    function H() {
      var t,
        n,
        e,
        r,
        i,
        o,
        u = Y,
        a = Y,
        c = k.interpolate,
        f = j;
      function s() {
        return (
          (r = Math.min(u.length, a.length) > 2 ? F : B), (i = o = null), l
        );
      }
      function l(n) {
        return isNaN((n = +n)) ? e : (i || (i = r(u.map(t), a, c)))(t(f(n)));
      }
      return (
        (l.invert = function(e) {
          return f(n((o || (o = r(a, u.map(t), k.interpolateNumber)))(e)));
        }),
        (l.domain = function(t) {
          return arguments.length
            ? ((u = N.call(t, I)), f === j || (f = P(u)), s())
            : u.slice();
        }),
        (l.range = function(t) {
          return arguments.length ? ((a = T.call(t)), s()) : a.slice();
        }),
        (l.rangeRound = function(t) {
          return (a = T.call(t)), (c = k.interpolateRound), s();
        }),
        (l.clamp = function(t) {
          return arguments.length ? ((f = t ? P(u) : j), l) : f !== j;
        }),
        (l.interpolate = function(t) {
          return arguments.length ? ((c = t), s()) : c;
        }),
        (l.unknown = function(t) {
          return arguments.length ? ((e = t), l) : e;
        }),
        function(e, r) {
          return (t = e), (n = r), s();
        }
      );
    }
    function q(t, n) {
      return H()(t, n);
    }
    var $ = e(6),
      W = function(t, n, e, r) {
        var i,
          o = v(t, n, e);
        switch ((r = Object($.formatSpecifier)(null == r ? ',f' : r)).type) {
          case 's':
            var u = Math.max(Math.abs(t), Math.abs(n));
            return (
              null != r.precision ||
                isNaN((i = Object($.precisionPrefix)(o, u))) ||
                (r.precision = i),
              Object($.formatPrefix)(r, u)
            );
          case '':
          case 'e':
          case 'g':
          case 'p':
          case 'r':
            null != r.precision ||
              isNaN(
                (i = Object($.precisionRound)(
                  o,
                  Math.max(Math.abs(t), Math.abs(n))
                ))
              ) ||
              (r.precision = i - ('e' === r.type));
            break;
          case 'f':
          case '%':
            null != r.precision ||
              isNaN((i = Object($.precisionFixed)(o))) ||
              (r.precision = i - 2 * ('%' === r.type));
        }
        return Object($.format)(r);
      };
    function G(t) {
      var n = t.domain;
      return (
        (t.ticks = function(t) {
          var e = n();
          return p(e[0], e[e.length - 1], null == t ? 10 : t);
        }),
        (t.tickFormat = function(t, e) {
          var r = n();
          return W(r[0], r[r.length - 1], null == t ? 10 : t, e);
        }),
        (t.nice = function(e) {
          null == e && (e = 10);
          var r,
            i = n(),
            o = 0,
            u = i.length - 1,
            a = i[o],
            c = i[u];
          return (
            c < a && ((r = a), (a = c), (c = r), (r = o), (o = u), (u = r)),
            (r = _(a, c, e)) > 0
              ? (r = _(
                  (a = Math.floor(a / r) * r),
                  (c = Math.ceil(c / r) * r),
                  e
                ))
              : r < 0 &&
                (r = _(
                  (a = Math.ceil(a * r) / r),
                  (c = Math.floor(c * r) / r),
                  e
                )),
            r > 0
              ? ((i[o] = Math.floor(a / r) * r),
                (i[u] = Math.ceil(c / r) * r),
                n(i))
              : r < 0 &&
                ((i[o] = Math.ceil(a * r) / r),
                (i[u] = Math.floor(c * r) / r),
                n(i)),
            t
          );
        }),
        t
      );
    }
    function V() {
      var t = q(j, j);
      return (
        (t.copy = function() {
          return z(t, V());
        }),
        b.apply(t, arguments),
        G(t)
      );
    }
    function Z(t) {
      var n;
      function e(t) {
        return isNaN((t = +t)) ? n : t;
      }
      return (
        (e.invert = e),
        (e.domain = e.range = function(n) {
          return arguments.length ? ((t = N.call(n, I)), e) : t.slice();
        }),
        (e.unknown = function(t) {
          return arguments.length ? ((n = t), e) : n;
        }),
        (e.copy = function() {
          return Z(t).unknown(n);
        }),
        (t = arguments.length ? N.call(t, I) : [0, 1]),
        G(e)
      );
    }
    var X = function(t, n) {
      var e,
        r = 0,
        i = (t = t.slice()).length - 1,
        o = t[r],
        u = t[i];
      return (
        u < o && ((e = r), (r = i), (i = e), (e = o), (o = u), (u = e)),
        (t[r] = n.floor(o)),
        (t[i] = n.ceil(u)),
        t
      );
    };
    function K(t) {
      return Math.log(t);
    }
    function J(t) {
      return Math.exp(t);
    }
    function Q(t) {
      return -Math.log(-t);
    }
    function tt(t) {
      return -Math.exp(-t);
    }
    function nt(t) {
      return isFinite(t) ? +('1e' + t) : t < 0 ? 0 : t;
    }
    function et(t) {
      return function(n) {
        return -t(-n);
      };
    }
    function rt(t) {
      var n,
        e,
        r = t(K, J),
        i = r.domain,
        o = 10;
      function u() {
        return (
          (n = (function(t) {
            return t === Math.E
              ? Math.log
              : (10 === t && Math.log10) ||
                  (2 === t && Math.log2) ||
                  ((t = Math.log(t)),
                  function(n) {
                    return Math.log(n) / t;
                  });
          })(o)),
          (e = (function(t) {
            return 10 === t
              ? nt
              : t === Math.E
              ? Math.exp
              : function(n) {
                  return Math.pow(t, n);
                };
          })(o)),
          i()[0] < 0 ? ((n = et(n)), (e = et(e)), t(Q, tt)) : t(K, J),
          r
        );
      }
      return (
        (r.base = function(t) {
          return arguments.length ? ((o = +t), u()) : o;
        }),
        (r.domain = function(t) {
          return arguments.length ? (i(t), u()) : i();
        }),
        (r.ticks = function(t) {
          var r,
            u = i(),
            a = u[0],
            c = u[u.length - 1];
          (r = c < a) && ((h = a), (a = c), (c = h));
          var f,
            s,
            l,
            h = n(a),
            d = n(c),
            _ = null == t ? 10 : +t,
            v = [];
          if (!(o % 1) && d - h < _) {
            if (((h = Math.round(h) - 1), (d = Math.round(d) + 1), a > 0)) {
              for (; h < d; ++h)
                for (s = 1, f = e(h); s < o; ++s)
                  if (!((l = f * s) < a)) {
                    if (l > c) break;
                    v.push(l);
                  }
            } else
              for (; h < d; ++h)
                for (s = o - 1, f = e(h); s >= 1; --s)
                  if (!((l = f * s) < a)) {
                    if (l > c) break;
                    v.push(l);
                  }
          } else v = p(h, d, Math.min(d - h, _)).map(e);
          return r ? v.reverse() : v;
        }),
        (r.tickFormat = function(t, i) {
          if (
            (null == i && (i = 10 === o ? '.0e' : ','),
            'function' != typeof i && (i = Object($.format)(i)),
            t === 1 / 0)
          )
            return i;
          null == t && (t = 10);
          var u = Math.max(1, (o * t) / r.ticks().length);
          return function(t) {
            var r = t / e(Math.round(n(t)));
            return r * o < o - 0.5 && (r *= o), r <= u ? i(t) : '';
          };
        }),
        (r.nice = function() {
          return i(
            X(i(), {
              floor: function(t) {
                return e(Math.floor(n(t)));
              },
              ceil: function(t) {
                return e(Math.ceil(n(t)));
              },
            })
          );
        }),
        r
      );
    }
    function it() {
      var t = rt(H()).domain([1, 10]);
      return (
        (t.copy = function() {
          return z(t, it()).base(t.base());
        }),
        b.apply(t, arguments),
        t
      );
    }
    function ot(t) {
      return function(n) {
        return Math.sign(n) * Math.log1p(Math.abs(n / t));
      };
    }
    function ut(t) {
      return function(n) {
        return Math.sign(n) * Math.expm1(Math.abs(n)) * t;
      };
    }
    function at(t) {
      var n = 1,
        e = t(ot(n), ut(n));
      return (
        (e.constant = function(e) {
          return arguments.length ? t(ot((n = +e)), ut(n)) : n;
        }),
        G(e)
      );
    }
    function ct() {
      var t = at(H());
      return (
        (t.copy = function() {
          return z(t, ct()).constant(t.constant());
        }),
        b.apply(t, arguments)
      );
    }
    function ft(t) {
      return function(n) {
        return n < 0 ? -Math.pow(-n, t) : Math.pow(n, t);
      };
    }
    function st(t) {
      return t < 0 ? -Math.sqrt(-t) : Math.sqrt(t);
    }
    function lt(t) {
      return t < 0 ? -t * t : t * t;
    }
    function ht(t) {
      var n = t(j, j),
        e = 1;
      function r() {
        return 1 === e ? t(j, j) : 0.5 === e ? t(st, lt) : t(ft(e), ft(1 / e));
      }
      return (
        (n.exponent = function(t) {
          return arguments.length ? ((e = +t), r()) : e;
        }),
        G(n)
      );
    }
    function dt() {
      var t = ht(H());
      return (
        (t.copy = function() {
          return z(t, dt()).exponent(t.exponent());
        }),
        b.apply(t, arguments),
        t
      );
    }
    function pt() {
      return dt.apply(null, arguments).exponent(0.5);
    }
    function _t() {
      var t,
        n = [],
        e = [],
        i = [];
      function o() {
        var t = 0,
          r = Math.max(1, e.length);
        for (i = new Array(r - 1); ++t < r; ) i[t - 1] = g(n, t / r);
        return u;
      }
      function u(n) {
        return isNaN((n = +n)) ? t : e[a(i, n)];
      }
      return (
        (u.invertExtent = function(t) {
          var r = e.indexOf(t);
          return r < 0
            ? [NaN, NaN]
            : [r > 0 ? i[r - 1] : n[0], r < i.length ? i[r] : n[n.length - 1]];
        }),
        (u.domain = function(t) {
          if (!arguments.length) return n.slice();
          n = [];
          for (var e, i = 0, u = t.length; i < u; ++i)
            null == (e = t[i]) || isNaN((e = +e)) || n.push(e);
          return n.sort(r), o();
        }),
        (u.range = function(t) {
          return arguments.length ? ((e = T.call(t)), o()) : e.slice();
        }),
        (u.unknown = function(n) {
          return arguments.length ? ((t = n), u) : t;
        }),
        (u.quantiles = function() {
          return i.slice();
        }),
        (u.copy = function() {
          return _t()
            .domain(n)
            .range(e)
            .unknown(t);
        }),
        b.apply(u, arguments)
      );
    }
    function vt() {
      var t,
        n = 0,
        e = 1,
        r = 1,
        i = [0.5],
        o = [0, 1];
      function u(n) {
        return n <= n ? o[a(i, n, 0, r)] : t;
      }
      function c() {
        var t = -1;
        for (i = new Array(r); ++t < r; )
          i[t] = ((t + 1) * e - (t - r) * n) / (r + 1);
        return u;
      }
      return (
        (u.domain = function(t) {
          return arguments.length ? ((n = +t[0]), (e = +t[1]), c()) : [n, e];
        }),
        (u.range = function(t) {
          return arguments.length
            ? ((r = (o = T.call(t)).length - 1), c())
            : o.slice();
        }),
        (u.invertExtent = function(t) {
          var u = o.indexOf(t);
          return u < 0
            ? [NaN, NaN]
            : u < 1
            ? [n, i[0]]
            : u >= r
            ? [i[r - 1], e]
            : [i[u - 1], i[u]];
        }),
        (u.unknown = function(n) {
          return arguments.length ? ((t = n), u) : u;
        }),
        (u.thresholds = function() {
          return i.slice();
        }),
        (u.copy = function() {
          return vt()
            .domain([n, e])
            .range(o)
            .unknown(t);
        }),
        b.apply(G(u), arguments)
      );
    }
    function gt() {
      var t,
        n = [0.5],
        e = [0, 1],
        r = 1;
      function i(i) {
        return i <= i ? e[a(n, i, 0, r)] : t;
      }
      return (
        (i.domain = function(t) {
          return arguments.length
            ? ((n = T.call(t)), (r = Math.min(n.length, e.length - 1)), i)
            : n.slice();
        }),
        (i.range = function(t) {
          return arguments.length
            ? ((e = T.call(t)), (r = Math.min(n.length, e.length - 1)), i)
            : e.slice();
        }),
        (i.invertExtent = function(t) {
          var r = e.indexOf(t);
          return [n[r - 1], n[r]];
        }),
        (i.unknown = function(n) {
          return arguments.length ? ((t = n), i) : t;
        }),
        (i.copy = function() {
          return gt()
            .domain(n)
            .range(e)
            .unknown(t);
        }),
        b.apply(i, arguments)
      );
    }
    var bt = new Date(),
      yt = new Date();
    function mt(t, n, e, r) {
      function i(n) {
        return t((n = new Date(+n))), n;
      }
      return (
        (i.floor = i),
        (i.ceil = function(e) {
          return t((e = new Date(e - 1))), n(e, 1), t(e), e;
        }),
        (i.round = function(t) {
          var n = i(t),
            e = i.ceil(t);
          return t - n < e - t ? n : e;
        }),
        (i.offset = function(t, e) {
          return n((t = new Date(+t)), null == e ? 1 : Math.floor(e)), t;
        }),
        (i.range = function(e, r, o) {
          var u,
            a = [];
          if (
            ((e = i.ceil(e)),
            (o = null == o ? 1 : Math.floor(o)),
            !(e < r && o > 0))
          )
            return a;
          do {
            a.push((u = new Date(+e))), n(e, o), t(e);
          } while (u < e && e < r);
          return a;
        }),
        (i.filter = function(e) {
          return mt(
            function(n) {
              if (n >= n) for (; t(n), !e(n); ) n.setTime(n - 1);
            },
            function(t, r) {
              if (t >= t)
                if (r < 0) for (; ++r <= 0; ) for (; n(t, -1), !e(t); );
                else for (; --r >= 0; ) for (; n(t, 1), !e(t); );
            }
          );
        }),
        e &&
          ((i.count = function(n, r) {
            return (
              bt.setTime(+n),
              yt.setTime(+r),
              t(bt),
              t(yt),
              Math.floor(e(bt, yt))
            );
          }),
          (i.every = function(t) {
            return (
              (t = Math.floor(t)),
              isFinite(t) && t > 0
                ? t > 1
                  ? i.filter(
                      r
                        ? function(n) {
                            return r(n) % t == 0;
                          }
                        : function(n) {
                            return i.count(0, n) % t == 0;
                          }
                    )
                  : i
                : null
            );
          })),
        i
      );
    }
    var xt = mt(
      function() {},
      function(t, n) {
        t.setTime(+t + n);
      },
      function(t, n) {
        return n - t;
      }
    );
    xt.every = function(t) {
      return (
        (t = Math.floor(t)),
        isFinite(t) && t > 0
          ? t > 1
            ? mt(
                function(n) {
                  n.setTime(Math.floor(n / t) * t);
                },
                function(n, e) {
                  n.setTime(+n + e * t);
                },
                function(n, e) {
                  return (e - n) / t;
                }
              )
            : xt
          : null
      );
    };
    var wt = xt,
      Ct = (xt.range, 6e4),
      Mt = 6048e5,
      Rt = mt(
        function(t) {
          t.setTime(t - t.getMilliseconds());
        },
        function(t, n) {
          t.setTime(+t + 1e3 * n);
        },
        function(t, n) {
          return (n - t) / 1e3;
        },
        function(t) {
          return t.getUTCSeconds();
        }
      ),
      Et = Rt,
      Nt =
        (Rt.range,
        mt(
          function(t) {
            t.setTime(t - t.getMilliseconds() - 1e3 * t.getSeconds());
          },
          function(t, n) {
            t.setTime(+t + n * Ct);
          },
          function(t, n) {
            return (n - t) / Ct;
          },
          function(t) {
            return t.getMinutes();
          }
        )),
      Tt = Nt,
      At =
        (Nt.range,
        mt(
          function(t) {
            t.setTime(
              t -
                t.getMilliseconds() -
                1e3 * t.getSeconds() -
                t.getMinutes() * Ct
            );
          },
          function(t, n) {
            t.setTime(+t + 36e5 * n);
          },
          function(t, n) {
            return (n - t) / 36e5;
          },
          function(t) {
            return t.getHours();
          }
        )),
      St = At,
      Ot =
        (At.range,
        mt(
          function(t) {
            t.setHours(0, 0, 0, 0);
          },
          function(t, n) {
            t.setDate(t.getDate() + n);
          },
          function(t, n) {
            return (
              (n - t - (n.getTimezoneOffset() - t.getTimezoneOffset()) * Ct) /
              864e5
            );
          },
          function(t) {
            return t.getDate() - 1;
          }
        )),
      Ut = Ot;
    Ot.range;
    function kt(t) {
      return mt(
        function(n) {
          n.setDate(n.getDate() - ((n.getDay() + 7 - t) % 7)),
            n.setHours(0, 0, 0, 0);
        },
        function(t, n) {
          t.setDate(t.getDate() + 7 * n);
        },
        function(t, n) {
          return (
            (n - t - (n.getTimezoneOffset() - t.getTimezoneOffset()) * Ct) / Mt
          );
        }
      );
    }
    var Dt = kt(0),
      It = kt(1),
      Yt = kt(2),
      jt = kt(3),
      Lt = kt(4),
      Pt = kt(5),
      Bt = kt(6),
      Ft =
        (Dt.range,
        It.range,
        Yt.range,
        jt.range,
        Lt.range,
        Pt.range,
        Bt.range,
        mt(
          function(t) {
            t.setDate(1), t.setHours(0, 0, 0, 0);
          },
          function(t, n) {
            t.setMonth(t.getMonth() + n);
          },
          function(t, n) {
            return (
              n.getMonth() -
              t.getMonth() +
              12 * (n.getFullYear() - t.getFullYear())
            );
          },
          function(t) {
            return t.getMonth();
          }
        )),
      zt = Ft,
      Ht =
        (Ft.range,
        mt(
          function(t) {
            t.setMonth(0, 1), t.setHours(0, 0, 0, 0);
          },
          function(t, n) {
            t.setFullYear(t.getFullYear() + n);
          },
          function(t, n) {
            return n.getFullYear() - t.getFullYear();
          },
          function(t) {
            return t.getFullYear();
          }
        ));
    Ht.every = function(t) {
      return isFinite((t = Math.floor(t))) && t > 0
        ? mt(
            function(n) {
              n.setFullYear(Math.floor(n.getFullYear() / t) * t),
                n.setMonth(0, 1),
                n.setHours(0, 0, 0, 0);
            },
            function(n, e) {
              n.setFullYear(n.getFullYear() + e * t);
            }
          )
        : null;
    };
    var qt = Ht,
      $t =
        (Ht.range,
        mt(
          function(t) {
            t.setUTCSeconds(0, 0);
          },
          function(t, n) {
            t.setTime(+t + n * Ct);
          },
          function(t, n) {
            return (n - t) / Ct;
          },
          function(t) {
            return t.getUTCMinutes();
          }
        )),
      Wt = $t,
      Gt =
        ($t.range,
        mt(
          function(t) {
            t.setUTCMinutes(0, 0, 0);
          },
          function(t, n) {
            t.setTime(+t + 36e5 * n);
          },
          function(t, n) {
            return (n - t) / 36e5;
          },
          function(t) {
            return t.getUTCHours();
          }
        )),
      Vt = Gt,
      Zt =
        (Gt.range,
        mt(
          function(t) {
            t.setUTCHours(0, 0, 0, 0);
          },
          function(t, n) {
            t.setUTCDate(t.getUTCDate() + n);
          },
          function(t, n) {
            return (n - t) / 864e5;
          },
          function(t) {
            return t.getUTCDate() - 1;
          }
        )),
      Xt = Zt;
    Zt.range;
    function Kt(t) {
      return mt(
        function(n) {
          n.setUTCDate(n.getUTCDate() - ((n.getUTCDay() + 7 - t) % 7)),
            n.setUTCHours(0, 0, 0, 0);
        },
        function(t, n) {
          t.setUTCDate(t.getUTCDate() + 7 * n);
        },
        function(t, n) {
          return (n - t) / Mt;
        }
      );
    }
    var Jt = Kt(0),
      Qt = Kt(1),
      tn = Kt(2),
      nn = Kt(3),
      en = Kt(4),
      rn = Kt(5),
      on = Kt(6),
      un =
        (Jt.range,
        Qt.range,
        tn.range,
        nn.range,
        en.range,
        rn.range,
        on.range,
        mt(
          function(t) {
            t.setUTCDate(1), t.setUTCHours(0, 0, 0, 0);
          },
          function(t, n) {
            t.setUTCMonth(t.getUTCMonth() + n);
          },
          function(t, n) {
            return (
              n.getUTCMonth() -
              t.getUTCMonth() +
              12 * (n.getUTCFullYear() - t.getUTCFullYear())
            );
          },
          function(t) {
            return t.getUTCMonth();
          }
        )),
      an = un,
      cn =
        (un.range,
        mt(
          function(t) {
            t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0);
          },
          function(t, n) {
            t.setUTCFullYear(t.getUTCFullYear() + n);
          },
          function(t, n) {
            return n.getUTCFullYear() - t.getUTCFullYear();
          },
          function(t) {
            return t.getUTCFullYear();
          }
        ));
    cn.every = function(t) {
      return isFinite((t = Math.floor(t))) && t > 0
        ? mt(
            function(n) {
              n.setUTCFullYear(Math.floor(n.getUTCFullYear() / t) * t),
                n.setUTCMonth(0, 1),
                n.setUTCHours(0, 0, 0, 0);
            },
            function(n, e) {
              n.setUTCFullYear(n.getUTCFullYear() + e * t);
            }
          )
        : null;
    };
    var fn = cn;
    cn.range;
    function sn(t) {
      if (0 <= t.y && t.y < 100) {
        var n = new Date(-1, t.m, t.d, t.H, t.M, t.S, t.L);
        return n.setFullYear(t.y), n;
      }
      return new Date(t.y, t.m, t.d, t.H, t.M, t.S, t.L);
    }
    function ln(t) {
      if (0 <= t.y && t.y < 100) {
        var n = new Date(Date.UTC(-1, t.m, t.d, t.H, t.M, t.S, t.L));
        return n.setUTCFullYear(t.y), n;
      }
      return new Date(Date.UTC(t.y, t.m, t.d, t.H, t.M, t.S, t.L));
    }
    function hn(t) {
      return {y: t, m: 0, d: 1, H: 0, M: 0, S: 0, L: 0};
    }
    var dn,
      pn,
      _n,
      vn,
      gn = {'-': '', _: ' ', 0: '0'},
      bn = /^\s*\d+/,
      yn = /^%/,
      mn = /[\\^$*+?|[\]().{}]/g;
    function xn(t, n, e) {
      var r = t < 0 ? '-' : '',
        i = (r ? -t : t) + '',
        o = i.length;
      return r + (o < e ? new Array(e - o + 1).join(n) + i : i);
    }
    function wn(t) {
      return t.replace(mn, '\\$&');
    }
    function Cn(t) {
      return new RegExp('^(?:' + t.map(wn).join('|') + ')', 'i');
    }
    function Mn(t) {
      for (var n = {}, e = -1, r = t.length; ++e < r; )
        n[t[e].toLowerCase()] = e;
      return n;
    }
    function Rn(t, n, e) {
      var r = bn.exec(n.slice(e, e + 1));
      return r ? ((t.w = +r[0]), e + r[0].length) : -1;
    }
    function En(t, n, e) {
      var r = bn.exec(n.slice(e, e + 1));
      return r ? ((t.u = +r[0]), e + r[0].length) : -1;
    }
    function Nn(t, n, e) {
      var r = bn.exec(n.slice(e, e + 2));
      return r ? ((t.U = +r[0]), e + r[0].length) : -1;
    }
    function Tn(t, n, e) {
      var r = bn.exec(n.slice(e, e + 2));
      return r ? ((t.V = +r[0]), e + r[0].length) : -1;
    }
    function An(t, n, e) {
      var r = bn.exec(n.slice(e, e + 2));
      return r ? ((t.W = +r[0]), e + r[0].length) : -1;
    }
    function Sn(t, n, e) {
      var r = bn.exec(n.slice(e, e + 4));
      return r ? ((t.y = +r[0]), e + r[0].length) : -1;
    }
    function On(t, n, e) {
      var r = bn.exec(n.slice(e, e + 2));
      return r
        ? ((t.y = +r[0] + (+r[0] > 68 ? 1900 : 2e3)), e + r[0].length)
        : -1;
    }
    function Un(t, n, e) {
      var r = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(n.slice(e, e + 6));
      return r
        ? ((t.Z = r[1] ? 0 : -(r[2] + (r[3] || '00'))), e + r[0].length)
        : -1;
    }
    function kn(t, n, e) {
      var r = bn.exec(n.slice(e, e + 2));
      return r ? ((t.m = r[0] - 1), e + r[0].length) : -1;
    }
    function Dn(t, n, e) {
      var r = bn.exec(n.slice(e, e + 2));
      return r ? ((t.d = +r[0]), e + r[0].length) : -1;
    }
    function In(t, n, e) {
      var r = bn.exec(n.slice(e, e + 3));
      return r ? ((t.m = 0), (t.d = +r[0]), e + r[0].length) : -1;
    }
    function Yn(t, n, e) {
      var r = bn.exec(n.slice(e, e + 2));
      return r ? ((t.H = +r[0]), e + r[0].length) : -1;
    }
    function jn(t, n, e) {
      var r = bn.exec(n.slice(e, e + 2));
      return r ? ((t.M = +r[0]), e + r[0].length) : -1;
    }
    function Ln(t, n, e) {
      var r = bn.exec(n.slice(e, e + 2));
      return r ? ((t.S = +r[0]), e + r[0].length) : -1;
    }
    function Pn(t, n, e) {
      var r = bn.exec(n.slice(e, e + 3));
      return r ? ((t.L = +r[0]), e + r[0].length) : -1;
    }
    function Bn(t, n, e) {
      var r = bn.exec(n.slice(e, e + 6));
      return r ? ((t.L = Math.floor(r[0] / 1e3)), e + r[0].length) : -1;
    }
    function Fn(t, n, e) {
      var r = yn.exec(n.slice(e, e + 1));
      return r ? e + r[0].length : -1;
    }
    function zn(t, n, e) {
      var r = bn.exec(n.slice(e));
      return r ? ((t.Q = +r[0]), e + r[0].length) : -1;
    }
    function Hn(t, n, e) {
      var r = bn.exec(n.slice(e));
      return r ? ((t.Q = 1e3 * +r[0]), e + r[0].length) : -1;
    }
    function qn(t, n) {
      return xn(t.getDate(), n, 2);
    }
    function $n(t, n) {
      return xn(t.getHours(), n, 2);
    }
    function Wn(t, n) {
      return xn(t.getHours() % 12 || 12, n, 2);
    }
    function Gn(t, n) {
      return xn(1 + Ut.count(qt(t), t), n, 3);
    }
    function Vn(t, n) {
      return xn(t.getMilliseconds(), n, 3);
    }
    function Zn(t, n) {
      return Vn(t, n) + '000';
    }
    function Xn(t, n) {
      return xn(t.getMonth() + 1, n, 2);
    }
    function Kn(t, n) {
      return xn(t.getMinutes(), n, 2);
    }
    function Jn(t, n) {
      return xn(t.getSeconds(), n, 2);
    }
    function Qn(t) {
      var n = t.getDay();
      return 0 === n ? 7 : n;
    }
    function te(t, n) {
      return xn(Dt.count(qt(t), t), n, 2);
    }
    function ne(t, n) {
      var e = t.getDay();
      return (
        (t = e >= 4 || 0 === e ? Lt(t) : Lt.ceil(t)),
        xn(Lt.count(qt(t), t) + (4 === qt(t).getDay()), n, 2)
      );
    }
    function ee(t) {
      return t.getDay();
    }
    function re(t, n) {
      return xn(It.count(qt(t), t), n, 2);
    }
    function ie(t, n) {
      return xn(t.getFullYear() % 100, n, 2);
    }
    function oe(t, n) {
      return xn(t.getFullYear() % 1e4, n, 4);
    }
    function ue(t) {
      var n = t.getTimezoneOffset();
      return (
        (n > 0 ? '-' : ((n *= -1), '+')) +
        xn((n / 60) | 0, '0', 2) +
        xn(n % 60, '0', 2)
      );
    }
    function ae(t, n) {
      return xn(t.getUTCDate(), n, 2);
    }
    function ce(t, n) {
      return xn(t.getUTCHours(), n, 2);
    }
    function fe(t, n) {
      return xn(t.getUTCHours() % 12 || 12, n, 2);
    }
    function se(t, n) {
      return xn(1 + Xt.count(fn(t), t), n, 3);
    }
    function le(t, n) {
      return xn(t.getUTCMilliseconds(), n, 3);
    }
    function he(t, n) {
      return le(t, n) + '000';
    }
    function de(t, n) {
      return xn(t.getUTCMonth() + 1, n, 2);
    }
    function pe(t, n) {
      return xn(t.getUTCMinutes(), n, 2);
    }
    function _e(t, n) {
      return xn(t.getUTCSeconds(), n, 2);
    }
    function ve(t) {
      var n = t.getUTCDay();
      return 0 === n ? 7 : n;
    }
    function ge(t, n) {
      return xn(Jt.count(fn(t), t), n, 2);
    }
    function be(t, n) {
      var e = t.getUTCDay();
      return (
        (t = e >= 4 || 0 === e ? en(t) : en.ceil(t)),
        xn(en.count(fn(t), t) + (4 === fn(t).getUTCDay()), n, 2)
      );
    }
    function ye(t) {
      return t.getUTCDay();
    }
    function me(t, n) {
      return xn(Qt.count(fn(t), t), n, 2);
    }
    function xe(t, n) {
      return xn(t.getUTCFullYear() % 100, n, 2);
    }
    function we(t, n) {
      return xn(t.getUTCFullYear() % 1e4, n, 4);
    }
    function Ce() {
      return '+0000';
    }
    function Me() {
      return '%';
    }
    function Re(t) {
      return +t;
    }
    function Ee(t) {
      return Math.floor(+t / 1e3);
    }
    (dn = (function(t) {
      var n = t.dateTime,
        e = t.date,
        r = t.time,
        i = t.periods,
        o = t.days,
        u = t.shortDays,
        a = t.months,
        c = t.shortMonths,
        f = Cn(i),
        s = Mn(i),
        l = Cn(o),
        h = Mn(o),
        d = Cn(u),
        p = Mn(u),
        _ = Cn(a),
        v = Mn(a),
        g = Cn(c),
        b = Mn(c),
        y = {
          a: function(t) {
            return u[t.getDay()];
          },
          A: function(t) {
            return o[t.getDay()];
          },
          b: function(t) {
            return c[t.getMonth()];
          },
          B: function(t) {
            return a[t.getMonth()];
          },
          c: null,
          d: qn,
          e: qn,
          f: Zn,
          H: $n,
          I: Wn,
          j: Gn,
          L: Vn,
          m: Xn,
          M: Kn,
          p: function(t) {
            return i[+(t.getHours() >= 12)];
          },
          Q: Re,
          s: Ee,
          S: Jn,
          u: Qn,
          U: te,
          V: ne,
          w: ee,
          W: re,
          x: null,
          X: null,
          y: ie,
          Y: oe,
          Z: ue,
          '%': Me,
        },
        m = {
          a: function(t) {
            return u[t.getUTCDay()];
          },
          A: function(t) {
            return o[t.getUTCDay()];
          },
          b: function(t) {
            return c[t.getUTCMonth()];
          },
          B: function(t) {
            return a[t.getUTCMonth()];
          },
          c: null,
          d: ae,
          e: ae,
          f: he,
          H: ce,
          I: fe,
          j: se,
          L: le,
          m: de,
          M: pe,
          p: function(t) {
            return i[+(t.getUTCHours() >= 12)];
          },
          Q: Re,
          s: Ee,
          S: _e,
          u: ve,
          U: ge,
          V: be,
          w: ye,
          W: me,
          x: null,
          X: null,
          y: xe,
          Y: we,
          Z: Ce,
          '%': Me,
        },
        x = {
          a: function(t, n, e) {
            var r = d.exec(n.slice(e));
            return r ? ((t.w = p[r[0].toLowerCase()]), e + r[0].length) : -1;
          },
          A: function(t, n, e) {
            var r = l.exec(n.slice(e));
            return r ? ((t.w = h[r[0].toLowerCase()]), e + r[0].length) : -1;
          },
          b: function(t, n, e) {
            var r = g.exec(n.slice(e));
            return r ? ((t.m = b[r[0].toLowerCase()]), e + r[0].length) : -1;
          },
          B: function(t, n, e) {
            var r = _.exec(n.slice(e));
            return r ? ((t.m = v[r[0].toLowerCase()]), e + r[0].length) : -1;
          },
          c: function(t, e, r) {
            return M(t, n, e, r);
          },
          d: Dn,
          e: Dn,
          f: Bn,
          H: Yn,
          I: Yn,
          j: In,
          L: Pn,
          m: kn,
          M: jn,
          p: function(t, n, e) {
            var r = f.exec(n.slice(e));
            return r ? ((t.p = s[r[0].toLowerCase()]), e + r[0].length) : -1;
          },
          Q: zn,
          s: Hn,
          S: Ln,
          u: En,
          U: Nn,
          V: Tn,
          w: Rn,
          W: An,
          x: function(t, n, r) {
            return M(t, e, n, r);
          },
          X: function(t, n, e) {
            return M(t, r, n, e);
          },
          y: On,
          Y: Sn,
          Z: Un,
          '%': Fn,
        };
      function w(t, n) {
        return function(e) {
          var r,
            i,
            o,
            u = [],
            a = -1,
            c = 0,
            f = t.length;
          for (e instanceof Date || (e = new Date(+e)); ++a < f; )
            37 === t.charCodeAt(a) &&
              (u.push(t.slice(c, a)),
              null != (i = gn[(r = t.charAt(++a))])
                ? (r = t.charAt(++a))
                : (i = 'e' === r ? ' ' : '0'),
              (o = n[r]) && (r = o(e, i)),
              u.push(r),
              (c = a + 1));
          return u.push(t.slice(c, a)), u.join('');
        };
      }
      function C(t, n) {
        return function(e) {
          var r,
            i,
            o = hn(1900);
          if (M(o, t, (e += ''), 0) != e.length) return null;
          if ('Q' in o) return new Date(o.Q);
          if (('p' in o && (o.H = (o.H % 12) + 12 * o.p), 'V' in o)) {
            if (o.V < 1 || o.V > 53) return null;
            'w' in o || (o.w = 1),
              'Z' in o
                ? ((i = (r = ln(hn(o.y))).getUTCDay()),
                  (r = i > 4 || 0 === i ? Qt.ceil(r) : Qt(r)),
                  (r = Xt.offset(r, 7 * (o.V - 1))),
                  (o.y = r.getUTCFullYear()),
                  (o.m = r.getUTCMonth()),
                  (o.d = r.getUTCDate() + ((o.w + 6) % 7)))
                : ((i = (r = n(hn(o.y))).getDay()),
                  (r = i > 4 || 0 === i ? It.ceil(r) : It(r)),
                  (r = Ut.offset(r, 7 * (o.V - 1))),
                  (o.y = r.getFullYear()),
                  (o.m = r.getMonth()),
                  (o.d = r.getDate() + ((o.w + 6) % 7)));
          } else
            ('W' in o || 'U' in o) &&
              ('w' in o || (o.w = 'u' in o ? o.u % 7 : 'W' in o ? 1 : 0),
              (i = 'Z' in o ? ln(hn(o.y)).getUTCDay() : n(hn(o.y)).getDay()),
              (o.m = 0),
              (o.d =
                'W' in o
                  ? ((o.w + 6) % 7) + 7 * o.W - ((i + 5) % 7)
                  : o.w + 7 * o.U - ((i + 6) % 7)));
          return 'Z' in o
            ? ((o.H += (o.Z / 100) | 0), (o.M += o.Z % 100), ln(o))
            : n(o);
        };
      }
      function M(t, n, e, r) {
        for (var i, o, u = 0, a = n.length, c = e.length; u < a; ) {
          if (r >= c) return -1;
          if (37 === (i = n.charCodeAt(u++))) {
            if (
              ((i = n.charAt(u++)),
              !(o = x[i in gn ? n.charAt(u++) : i]) || (r = o(t, e, r)) < 0)
            )
              return -1;
          } else if (i != e.charCodeAt(r++)) return -1;
        }
        return r;
      }
      return (
        (y.x = w(e, y)),
        (y.X = w(r, y)),
        (y.c = w(n, y)),
        (m.x = w(e, m)),
        (m.X = w(r, m)),
        (m.c = w(n, m)),
        {
          format: function(t) {
            var n = w((t += ''), y);
            return (
              (n.toString = function() {
                return t;
              }),
              n
            );
          },
          parse: function(t) {
            var n = C((t += ''), sn);
            return (
              (n.toString = function() {
                return t;
              }),
              n
            );
          },
          utcFormat: function(t) {
            var n = w((t += ''), m);
            return (
              (n.toString = function() {
                return t;
              }),
              n
            );
          },
          utcParse: function(t) {
            var n = C(t, ln);
            return (
              (n.toString = function() {
                return t;
              }),
              n
            );
          },
        }
      );
    })({
      dateTime: '%x, %X',
      date: '%-m/%-d/%Y',
      time: '%-I:%M:%S %p',
      periods: ['AM', 'PM'],
      days: [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
      ],
      shortDays: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
      months: [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
      ],
      shortMonths: [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
      ],
    })),
      (pn = dn.format),
      dn.parse,
      (_n = dn.utcFormat),
      (vn = dn.utcParse);
    Date.prototype.toISOString || _n('%Y-%m-%dT%H:%M:%S.%LZ');
    +new Date('2000-01-01T00:00:00.000Z') || vn('%Y-%m-%dT%H:%M:%S.%LZ');
    var Ne = 1e3,
      Te = 60 * Ne,
      Ae = 60 * Te,
      Se = 24 * Ae,
      Oe = 7 * Se,
      Ue = 30 * Se,
      ke = 365 * Se;
    function De(t) {
      return new Date(t);
    }
    function Ie(t) {
      return t instanceof Date ? +t : +new Date(+t);
    }
    function Ye(t, n, e, r, o, u, a, c, f) {
      var s = q(j, j),
        l = s.invert,
        h = s.domain,
        d = f('.%L'),
        p = f(':%S'),
        _ = f('%I:%M'),
        g = f('%I %p'),
        b = f('%a %d'),
        y = f('%b %d'),
        m = f('%B'),
        x = f('%Y'),
        w = [
          [a, 1, Ne],
          [a, 5, 5 * Ne],
          [a, 15, 15 * Ne],
          [a, 30, 30 * Ne],
          [u, 1, Te],
          [u, 5, 5 * Te],
          [u, 15, 15 * Te],
          [u, 30, 30 * Te],
          [o, 1, Ae],
          [o, 3, 3 * Ae],
          [o, 6, 6 * Ae],
          [o, 12, 12 * Ae],
          [r, 1, Se],
          [r, 2, 2 * Se],
          [e, 1, Oe],
          [n, 1, Ue],
          [n, 3, 3 * Ue],
          [t, 1, ke],
        ];
      function C(i) {
        return (a(i) < i
          ? d
          : u(i) < i
          ? p
          : o(i) < i
          ? _
          : r(i) < i
          ? g
          : n(i) < i
          ? e(i) < i
            ? b
            : y
          : t(i) < i
          ? m
          : x)(i);
      }
      function M(n, e, r, o) {
        if ((null == n && (n = 10), 'number' == typeof n)) {
          var u = Math.abs(r - e) / n,
            a = i(function(t) {
              return t[2];
            }).right(w, u);
          a === w.length
            ? ((o = v(e / ke, r / ke, n)), (n = t))
            : a
            ? ((o = (a = w[u / w[a - 1][2] < w[a][2] / u ? a - 1 : a])[1]),
              (n = a[0]))
            : ((o = Math.max(v(e, r, n), 1)), (n = c));
        }
        return null == o ? n : n.every(o);
      }
      return (
        (s.invert = function(t) {
          return new Date(l(t));
        }),
        (s.domain = function(t) {
          return arguments.length ? h(N.call(t, Ie)) : h().map(De);
        }),
        (s.ticks = function(t, n) {
          var e,
            r = h(),
            i = r[0],
            o = r[r.length - 1],
            u = o < i;
          return (
            u && ((e = i), (i = o), (o = e)),
            (e = (e = M(t, i, o, n)) ? e.range(i, o + 1) : []),
            u ? e.reverse() : e
          );
        }),
        (s.tickFormat = function(t, n) {
          return null == n ? C : f(n);
        }),
        (s.nice = function(t, n) {
          var e = h();
          return (t = M(t, e[0], e[e.length - 1], n)) ? h(X(e, t)) : s;
        }),
        (s.copy = function() {
          return z(s, Ye(t, n, e, r, o, u, a, c, f));
        }),
        s
      );
    }
    var je = function() {
        return b.apply(
          Ye(qt, zt, Dt, Ut, St, Tt, Et, wt, pn).domain([
            new Date(2e3, 0, 1),
            new Date(2e3, 0, 2),
          ]),
          arguments
        );
      },
      Le = function() {
        return b.apply(
          Ye(fn, an, Jt, Xt, Vt, Wt, Et, wt, _n).domain([
            Date.UTC(2e3, 0, 1),
            Date.UTC(2e3, 0, 2),
          ]),
          arguments
        );
      };
    function Pe() {
      var t,
        n,
        e,
        r,
        i,
        o = 0,
        u = 1,
        a = j,
        c = !1;
      function f(n) {
        return isNaN((n = +n))
          ? i
          : a(
              0 === e
                ? 0.5
                : ((n = (r(n) - t) * e), c ? Math.max(0, Math.min(1, n)) : n)
            );
      }
      return (
        (f.domain = function(i) {
          return arguments.length
            ? ((t = r((o = +i[0]))),
              (n = r((u = +i[1]))),
              (e = t === n ? 0 : 1 / (n - t)),
              f)
            : [o, u];
        }),
        (f.clamp = function(t) {
          return arguments.length ? ((c = !!t), f) : c;
        }),
        (f.interpolator = function(t) {
          return arguments.length ? ((a = t), f) : a;
        }),
        (f.unknown = function(t) {
          return arguments.length ? ((i = t), f) : i;
        }),
        function(i) {
          return (
            (r = i), (t = i(o)), (n = i(u)), (e = t === n ? 0 : 1 / (n - t)), f
          );
        }
      );
    }
    function Be(t, n) {
      return n
        .domain(t.domain())
        .interpolator(t.interpolator())
        .clamp(t.clamp())
        .unknown(t.unknown());
    }
    function Fe() {
      var t = G(Pe()(j));
      return (
        (t.copy = function() {
          return Be(t, Fe());
        }),
        y.apply(t, arguments)
      );
    }
    function ze() {
      var t = rt(Pe()).domain([1, 10]);
      return (
        (t.copy = function() {
          return Be(t, ze()).base(t.base());
        }),
        y.apply(t, arguments)
      );
    }
    function He() {
      var t = at(Pe());
      return (
        (t.copy = function() {
          return Be(t, He()).constant(t.constant());
        }),
        y.apply(t, arguments)
      );
    }
    function qe() {
      var t = ht(Pe());
      return (
        (t.copy = function() {
          return Be(t, qe()).exponent(t.exponent());
        }),
        y.apply(t, arguments)
      );
    }
    function $e() {
      return qe.apply(null, arguments).exponent(0.5);
    }
    function We() {
      var t = [],
        n = j;
      function e(e) {
        if (!isNaN((e = +e))) return n((a(t, e) - 1) / (t.length - 1));
      }
      return (
        (e.domain = function(n) {
          if (!arguments.length) return t.slice();
          t = [];
          for (var i, o = 0, u = n.length; o < u; ++o)
            null == (i = n[o]) || isNaN((i = +i)) || t.push(i);
          return t.sort(r), e;
        }),
        (e.interpolator = function(t) {
          return arguments.length ? ((n = t), e) : n;
        }),
        (e.copy = function() {
          return We(n).domain(t);
        }),
        y.apply(e, arguments)
      );
    }
    function Ge() {
      var t,
        n,
        e,
        r,
        i,
        o,
        u,
        a = 0,
        c = 0.5,
        f = 1,
        s = j,
        l = !1;
      function h(t) {
        return isNaN((t = +t))
          ? u
          : ((t = 0.5 + ((t = +o(t)) - n) * (t < n ? r : i)),
            s(l ? Math.max(0, Math.min(1, t)) : t));
      }
      return (
        (h.domain = function(u) {
          return arguments.length
            ? ((t = o((a = +u[0]))),
              (n = o((c = +u[1]))),
              (e = o((f = +u[2]))),
              (r = t === n ? 0 : 0.5 / (n - t)),
              (i = n === e ? 0 : 0.5 / (e - n)),
              h)
            : [a, c, f];
        }),
        (h.clamp = function(t) {
          return arguments.length ? ((l = !!t), h) : l;
        }),
        (h.interpolator = function(t) {
          return arguments.length ? ((s = t), h) : s;
        }),
        (h.unknown = function(t) {
          return arguments.length ? ((u = t), h) : u;
        }),
        function(u) {
          return (
            (o = u),
            (t = u(a)),
            (n = u(c)),
            (e = u(f)),
            (r = t === n ? 0 : 0.5 / (n - t)),
            (i = n === e ? 0 : 0.5 / (e - n)),
            h
          );
        }
      );
    }
    function Ve() {
      var t = G(Ge()(j));
      return (
        (t.copy = function() {
          return Be(t, Ve());
        }),
        y.apply(t, arguments)
      );
    }
    function Ze() {
      var t = rt(Ge()).domain([0.1, 1, 10]);
      return (
        (t.copy = function() {
          return Be(t, Ze()).base(t.base());
        }),
        y.apply(t, arguments)
      );
    }
    function Xe() {
      var t = at(Ge());
      return (
        (t.copy = function() {
          return Be(t, Xe()).constant(t.constant());
        }),
        y.apply(t, arguments)
      );
    }
    function Ke() {
      var t = ht(Ge());
      return (
        (t.copy = function() {
          return Be(t, Ke()).exponent(t.exponent());
        }),
        y.apply(t, arguments)
      );
    }
    function Je() {
      return Ke.apply(null, arguments).exponent(0.5);
    }
    e.d(n, 'scaleBand', function() {
      return O;
    }),
      e.d(n, 'scalePoint', function() {
        return U;
      }),
      e.d(n, 'scaleIdentity', function() {
        return Z;
      }),
      e.d(n, 'scaleLinear', function() {
        return V;
      }),
      e.d(n, 'scaleLog', function() {
        return it;
      }),
      e.d(n, 'scaleSymlog', function() {
        return ct;
      }),
      e.d(n, 'scaleOrdinal', function() {
        return S;
      }),
      e.d(n, 'scaleImplicit', function() {
        return A;
      }),
      e.d(n, 'scalePow', function() {
        return dt;
      }),
      e.d(n, 'scaleSqrt', function() {
        return pt;
      }),
      e.d(n, 'scaleQuantile', function() {
        return _t;
      }),
      e.d(n, 'scaleQuantize', function() {
        return vt;
      }),
      e.d(n, 'scaleThreshold', function() {
        return gt;
      }),
      e.d(n, 'scaleTime', function() {
        return je;
      }),
      e.d(n, 'scaleUtc', function() {
        return Le;
      }),
      e.d(n, 'scaleSequential', function() {
        return Fe;
      }),
      e.d(n, 'scaleSequentialLog', function() {
        return ze;
      }),
      e.d(n, 'scaleSequentialPow', function() {
        return qe;
      }),
      e.d(n, 'scaleSequentialSqrt', function() {
        return $e;
      }),
      e.d(n, 'scaleSequentialSymlog', function() {
        return He;
      }),
      e.d(n, 'scaleSequentialQuantile', function() {
        return We;
      }),
      e.d(n, 'scaleDiverging', function() {
        return Ve;
      }),
      e.d(n, 'scaleDivergingLog', function() {
        return Ze;
      }),
      e.d(n, 'scaleDivergingPow', function() {
        return Ke;
      }),
      e.d(n, 'scaleDivergingSqrt', function() {
        return Je;
      }),
      e.d(n, 'scaleDivergingSymlog', function() {
        return Xe;
      }),
      e.d(n, 'tickFormat', function() {
        return W;
      });
  },
  function(t, n, e) {
    'use strict';
    e.r(n);
    var r = e(1),
      i = {value: function() {}};
    function o() {
      for (var t, n = 0, e = arguments.length, r = {}; n < e; ++n) {
        if (!(t = arguments[n] + '') || t in r)
          throw new Error('illegal type: ' + t);
        r[t] = [];
      }
      return new u(r);
    }
    function u(t) {
      this._ = t;
    }
    function a(t, n) {
      return t
        .trim()
        .split(/^|\s+/)
        .map(function(t) {
          var e = '',
            r = t.indexOf('.');
          if (
            (r >= 0 && ((e = t.slice(r + 1)), (t = t.slice(0, r))),
            t && !n.hasOwnProperty(t))
          )
            throw new Error('unknown type: ' + t);
          return {type: t, name: e};
        });
    }
    function c(t, n) {
      for (var e, r = 0, i = t.length; r < i; ++r)
        if ((e = t[r]).name === n) return e.value;
    }
    function f(t, n, e) {
      for (var r = 0, o = t.length; r < o; ++r)
        if (t[r].name === n) {
          (t[r] = i), (t = t.slice(0, r).concat(t.slice(r + 1)));
          break;
        }
      return null != e && t.push({name: n, value: e}), t;
    }
    u.prototype = o.prototype = {
      constructor: u,
      on: function(t, n) {
        var e,
          r = this._,
          i = a(t + '', r),
          o = -1,
          u = i.length;
        if (!(arguments.length < 2)) {
          if (null != n && 'function' != typeof n)
            throw new Error('invalid callback: ' + n);
          for (; ++o < u; )
            if ((e = (t = i[o]).type)) r[e] = f(r[e], t.name, n);
            else if (null == n) for (e in r) r[e] = f(r[e], t.name, null);
          return this;
        }
        for (; ++o < u; )
          if ((e = (t = i[o]).type) && (e = c(r[e], t.name))) return e;
      },
      copy: function() {
        var t = {},
          n = this._;
        for (var e in n) t[e] = n[e].slice();
        return new u(t);
      },
      call: function(t, n) {
        if ((e = arguments.length - 2) > 0)
          for (var e, r, i = new Array(e), o = 0; o < e; ++o)
            i[o] = arguments[o + 2];
        if (!this._.hasOwnProperty(t)) throw new Error('unknown type: ' + t);
        for (o = 0, e = (r = this._[t]).length; o < e; ++o)
          r[o].value.apply(n, i);
      },
      apply: function(t, n, e) {
        if (!this._.hasOwnProperty(t)) throw new Error('unknown type: ' + t);
        for (var r = this._[t], i = 0, o = r.length; i < o; ++i)
          r[i].value.apply(n, e);
      },
    };
    var s,
      l,
      h = o,
      d = 0,
      p = 0,
      _ = 0,
      v = 1e3,
      g = 0,
      b = 0,
      y = 0,
      m =
        'object' == typeof performance && performance.now ? performance : Date,
      x =
        'object' == typeof window && window.requestAnimationFrame
          ? window.requestAnimationFrame.bind(window)
          : function(t) {
              setTimeout(t, 17);
            };
    function w() {
      return b || (x(C), (b = m.now() + y));
    }
    function C() {
      b = 0;
    }
    function M() {
      this._call = this._time = this._next = null;
    }
    function R(t, n, e) {
      var r = new M();
      return r.restart(t, n, e), r;
    }
    function E() {
      (b = (g = m.now()) + y), (d = p = 0);
      try {
        !(function() {
          w(), ++d;
          for (var t, n = s; n; )
            (t = b - n._time) >= 0 && n._call.call(null, t), (n = n._next);
          --d;
        })();
      } finally {
        (d = 0),
          (function() {
            var t,
              n,
              e = s,
              r = 1 / 0;
            for (; e; )
              e._call
                ? (r > e._time && (r = e._time), (t = e), (e = e._next))
                : ((n = e._next),
                  (e._next = null),
                  (e = t ? (t._next = n) : (s = n)));
            (l = t), T(r);
          })(),
          (b = 0);
      }
    }
    function N() {
      var t = m.now(),
        n = t - g;
      n > v && ((y -= n), (g = t));
    }
    function T(t) {
      d ||
        (p && (p = clearTimeout(p)),
        t - b > 24
          ? (t < 1 / 0 && (p = setTimeout(E, t - m.now() - y)),
            _ && (_ = clearInterval(_)))
          : (_ || ((g = m.now()), (_ = setInterval(N, v))), (d = 1), x(E)));
    }
    M.prototype = R.prototype = {
      constructor: M,
      restart: function(t, n, e) {
        if ('function' != typeof t)
          throw new TypeError('callback is not a function');
        (e = (null == e ? w() : +e) + (null == n ? 0 : +n)),
          this._next ||
            l === this ||
            (l ? (l._next = this) : (s = this), (l = this)),
          (this._call = t),
          (this._time = e),
          T();
      },
      stop: function() {
        this._call && ((this._call = null), (this._time = 1 / 0), T());
      },
    };
    var A = function(t, n, e) {
        var r = new M();
        return (
          (n = null == n ? 0 : +n),
          r.restart(
            function(e) {
              r.stop(), t(e + n);
            },
            n,
            e
          ),
          r
        );
      },
      S = h('start', 'end', 'cancel', 'interrupt'),
      O = [],
      U = 0,
      k = 1,
      D = 2,
      I = 3,
      Y = 4,
      j = 5,
      L = 6,
      P = function(t, n, e, r, i, o) {
        var u = t.__transition;
        if (u) {
          if (e in u) return;
        } else t.__transition = {};
        !(function(t, n, e) {
          var r,
            i = t.__transition;
          function o(c) {
            var f, s, l, h;
            if (e.state !== k) return a();
            for (f in i)
              if ((h = i[f]).name === e.name) {
                if (h.state === I) return A(o);
                h.state === Y
                  ? ((h.state = L),
                    h.timer.stop(),
                    h.on.call('interrupt', t, t.__data__, h.index, h.group),
                    delete i[f])
                  : +f < n &&
                    ((h.state = L),
                    h.timer.stop(),
                    h.on.call('cancel', t, t.__data__, h.index, h.group),
                    delete i[f]);
              }
            if (
              (A(function() {
                e.state === I &&
                  ((e.state = Y), e.timer.restart(u, e.delay, e.time), u(c));
              }),
              (e.state = D),
              e.on.call('start', t, t.__data__, e.index, e.group),
              e.state === D)
            ) {
              for (
                e.state = I, r = new Array((l = e.tween.length)), f = 0, s = -1;
                f < l;
                ++f
              )
                (h = e.tween[f].value.call(t, t.__data__, e.index, e.group)) &&
                  (r[++s] = h);
              r.length = s + 1;
            }
          }
          function u(n) {
            for (
              var i =
                  n < e.duration
                    ? e.ease.call(null, n / e.duration)
                    : (e.timer.restart(a), (e.state = j), 1),
                o = -1,
                u = r.length;
              ++o < u;

            )
              r[o].call(t, i);
            e.state === j &&
              (e.on.call('end', t, t.__data__, e.index, e.group), a());
          }
          function a() {
            for (var r in ((e.state = L), e.timer.stop(), delete i[n], i))
              return;
            delete t.__transition;
          }
          (i[n] = e),
            (e.timer = R(
              function(t) {
                (e.state = k),
                  e.timer.restart(o, e.delay, e.time),
                  e.delay <= t && o(t - e.delay);
              },
              0,
              e.time
            ));
        })(t, e, {
          name: n,
          index: r,
          group: i,
          on: S,
          tween: O,
          time: o.time,
          delay: o.delay,
          duration: o.duration,
          ease: o.ease,
          timer: null,
          state: U,
        });
      };
    function B(t, n) {
      var e = z(t, n);
      if (e.state > U) throw new Error('too late; already scheduled');
      return e;
    }
    function F(t, n) {
      var e = z(t, n);
      if (e.state > I) throw new Error('too late; already running');
      return e;
    }
    function z(t, n) {
      var e = t.__transition;
      if (!e || !(e = e[n])) throw new Error('transition not found');
      return e;
    }
    var H = function(t, n) {
        var e,
          r,
          i,
          o = t.__transition,
          u = !0;
        if (o) {
          for (i in ((n = null == n ? null : n + ''), o))
            (e = o[i]).name === n
              ? ((r = e.state > D && e.state < j),
                (e.state = L),
                e.timer.stop(),
                e.on.call(
                  r ? 'interrupt' : 'cancel',
                  t,
                  t.__data__,
                  e.index,
                  e.group
                ),
                delete o[i])
              : (u = !1);
          u && delete t.__transition;
        }
      },
      q = e(2);
    function $(t, n) {
      var e, r;
      return function() {
        var i = F(this, t),
          o = i.tween;
        if (o !== e)
          for (var u = 0, a = (r = e = o).length; u < a; ++u)
            if (r[u].name === n) {
              (r = r.slice()).splice(u, 1);
              break;
            }
        i.tween = r;
      };
    }
    function W(t, n, e) {
      var r, i;
      if ('function' != typeof e) throw new Error();
      return function() {
        var o = F(this, t),
          u = o.tween;
        if (u !== r) {
          i = (r = u).slice();
          for (var a = {name: n, value: e}, c = 0, f = i.length; c < f; ++c)
            if (i[c].name === n) {
              i[c] = a;
              break;
            }
          c === f && i.push(a);
        }
        o.tween = i;
      };
    }
    function G(t, n, e) {
      var r = t._id;
      return (
        t.each(function() {
          var t = F(this, r);
          (t.value || (t.value = {}))[n] = e.apply(this, arguments);
        }),
        function(t) {
          return z(t, r).value[n];
        }
      );
    }
    var V = e(0),
      Z = function(t, n) {
        var e;
        return ('number' == typeof n
          ? q.interpolateNumber
          : n instanceof V.a
          ? q.interpolateRgb
          : (e = Object(V.a)(n))
          ? ((n = e), q.interpolateRgb)
          : q.interpolateString)(t, n);
      };
    function X(t, n) {
      var e, r;
      function i() {
        var i = n.apply(this, arguments);
        return (
          i !== r &&
            (e =
              (r = i) &&
              (function(t, n) {
                return function(e) {
                  this.setAttributeNS(t.space, t.local, n(e));
                };
              })(t, i)),
          e
        );
      }
      return (i._value = n), i;
    }
    function K(t, n) {
      var e, r;
      function i() {
        var i = n.apply(this, arguments);
        return (
          i !== r &&
            (e =
              (r = i) &&
              (function(t, n) {
                return function(e) {
                  this.setAttribute(t, n(e));
                };
              })(t, i)),
          e
        );
      }
      return (i._value = n), i;
    }
    function J(t, n) {
      return function() {
        B(this, t).delay = +n.apply(this, arguments);
      };
    }
    function Q(t, n) {
      return (
        (n = +n),
        function() {
          B(this, t).delay = n;
        }
      );
    }
    function tt(t, n) {
      return function() {
        F(this, t).duration = +n.apply(this, arguments);
      };
    }
    function nt(t, n) {
      return (
        (n = +n),
        function() {
          F(this, t).duration = n;
        }
      );
    }
    function et(t, n) {
      if ('function' != typeof n) throw new Error();
      return function() {
        F(this, t).ease = n;
      };
    }
    function rt(t, n, e) {
      var r,
        i,
        o = (function(t) {
          return (t + '')
            .trim()
            .split(/^|\s+/)
            .every(function(t) {
              var n = t.indexOf('.');
              return n >= 0 && (t = t.slice(0, n)), !t || 'start' === t;
            });
        })(n)
          ? B
          : F;
      return function() {
        var u = o(this, t),
          a = u.on;
        a !== r && (i = (r = a).copy()).on(n, e), (u.on = i);
      };
    }
    var it = r.selection.prototype.constructor;
    function ot(t) {
      return function() {
        this.style.removeProperty(t);
      };
    }
    function ut(t, n, e) {
      var r, i;
      function o() {
        var o = n.apply(this, arguments);
        return (
          o !== i &&
            (r =
              (i = o) &&
              (function(t, n, e) {
                return function(r) {
                  this.style.setProperty(t, n(r), e);
                };
              })(t, o, e)),
          r
        );
      }
      return (o._value = n), o;
    }
    var at = 0;
    function ct(t, n, e, r) {
      (this._groups = t), (this._parents = n), (this._name = e), (this._id = r);
    }
    function ft(t) {
      return Object(r.selection)().transition(t);
    }
    function st() {
      return ++at;
    }
    var lt = r.selection.prototype;
    ct.prototype = ft.prototype = {
      constructor: ct,
      select: function(t) {
        var n = this._name,
          e = this._id;
        'function' != typeof t && (t = Object(r.selector)(t));
        for (
          var i = this._groups, o = i.length, u = new Array(o), a = 0;
          a < o;
          ++a
        )
          for (
            var c, f, s = i[a], l = s.length, h = (u[a] = new Array(l)), d = 0;
            d < l;
            ++d
          )
            (c = s[d]) &&
              (f = t.call(c, c.__data__, d, s)) &&
              ('__data__' in c && (f.__data__ = c.__data__),
              (h[d] = f),
              P(h[d], n, e, d, h, z(c, e)));
        return new ct(u, this._parents, n, e);
      },
      selectAll: function(t) {
        var n = this._name,
          e = this._id;
        'function' != typeof t && (t = Object(r.selectorAll)(t));
        for (
          var i = this._groups, o = i.length, u = [], a = [], c = 0;
          c < o;
          ++c
        )
          for (var f, s = i[c], l = s.length, h = 0; h < l; ++h)
            if ((f = s[h])) {
              for (
                var d,
                  p = t.call(f, f.__data__, h, s),
                  _ = z(f, e),
                  v = 0,
                  g = p.length;
                v < g;
                ++v
              )
                (d = p[v]) && P(d, n, e, v, p, _);
              u.push(p), a.push(f);
            }
        return new ct(u, a, n, e);
      },
      filter: function(t) {
        'function' != typeof t && (t = Object(r.matcher)(t));
        for (
          var n = this._groups, e = n.length, i = new Array(e), o = 0;
          o < e;
          ++o
        )
          for (
            var u, a = n[o], c = a.length, f = (i[o] = []), s = 0;
            s < c;
            ++s
          )
            (u = a[s]) && t.call(u, u.__data__, s, a) && f.push(u);
        return new ct(i, this._parents, this._name, this._id);
      },
      merge: function(t) {
        if (t._id !== this._id) throw new Error();
        for (
          var n = this._groups,
            e = t._groups,
            r = n.length,
            i = e.length,
            o = Math.min(r, i),
            u = new Array(r),
            a = 0;
          a < o;
          ++a
        )
          for (
            var c,
              f = n[a],
              s = e[a],
              l = f.length,
              h = (u[a] = new Array(l)),
              d = 0;
            d < l;
            ++d
          )
            (c = f[d] || s[d]) && (h[d] = c);
        for (; a < r; ++a) u[a] = n[a];
        return new ct(u, this._parents, this._name, this._id);
      },
      selection: function() {
        return new it(this._groups, this._parents);
      },
      transition: function() {
        for (
          var t = this._name,
            n = this._id,
            e = st(),
            r = this._groups,
            i = r.length,
            o = 0;
          o < i;
          ++o
        )
          for (var u, a = r[o], c = a.length, f = 0; f < c; ++f)
            if ((u = a[f])) {
              var s = z(u, n);
              P(u, t, e, f, a, {
                time: s.time + s.delay + s.duration,
                delay: 0,
                duration: s.duration,
                ease: s.ease,
              });
            }
        return new ct(r, this._parents, t, e);
      },
      call: lt.call,
      nodes: lt.nodes,
      node: lt.node,
      size: lt.size,
      empty: lt.empty,
      each: lt.each,
      on: function(t, n) {
        var e = this._id;
        return arguments.length < 2
          ? z(this.node(), e).on.on(t)
          : this.each(rt(e, t, n));
      },
      attr: function(t, n) {
        var e = Object(r.namespace)(t),
          i = 'transform' === e ? q.interpolateTransformSvg : Z;
        return this.attrTween(
          t,
          'function' == typeof n
            ? (e.local
                ? function(t, n, e) {
                    var r, i, o;
                    return function() {
                      var u,
                        a,
                        c = e(this);
                      if (null != c)
                        return (u = this.getAttributeNS(t.space, t.local)) ===
                          (a = c + '')
                          ? null
                          : u === r && a === i
                          ? o
                          : ((i = a), (o = n((r = u), c)));
                      this.removeAttributeNS(t.space, t.local);
                    };
                  }
                : function(t, n, e) {
                    var r, i, o;
                    return function() {
                      var u,
                        a,
                        c = e(this);
                      if (null != c)
                        return (u = this.getAttribute(t)) === (a = c + '')
                          ? null
                          : u === r && a === i
                          ? o
                          : ((i = a), (o = n((r = u), c)));
                      this.removeAttribute(t);
                    };
                  })(e, i, G(this, 'attr.' + t, n))
            : null == n
            ? (e.local
                ? function(t) {
                    return function() {
                      this.removeAttributeNS(t.space, t.local);
                    };
                  }
                : function(t) {
                    return function() {
                      this.removeAttribute(t);
                    };
                  })(e)
            : (e.local
                ? function(t, n, e) {
                    var r,
                      i,
                      o = e + '';
                    return function() {
                      var u = this.getAttributeNS(t.space, t.local);
                      return u === o ? null : u === r ? i : (i = n((r = u), e));
                    };
                  }
                : function(t, n, e) {
                    var r,
                      i,
                      o = e + '';
                    return function() {
                      var u = this.getAttribute(t);
                      return u === o ? null : u === r ? i : (i = n((r = u), e));
                    };
                  })(e, i, n)
        );
      },
      attrTween: function(t, n) {
        var e = 'attr.' + t;
        if (arguments.length < 2) return (e = this.tween(e)) && e._value;
        if (null == n) return this.tween(e, null);
        if ('function' != typeof n) throw new Error();
        var i = Object(r.namespace)(t);
        return this.tween(e, (i.local ? X : K)(i, n));
      },
      style: function(t, n, e) {
        var i = 'transform' == (t += '') ? q.interpolateTransformCss : Z;
        return null == n
          ? this.styleTween(
              t,
              (function(t, n) {
                var e, i, o;
                return function() {
                  var u = Object(r.style)(this, t),
                    a =
                      (this.style.removeProperty(t), Object(r.style)(this, t));
                  return u === a
                    ? null
                    : u === e && a === i
                    ? o
                    : (o = n((e = u), (i = a)));
                };
              })(t, i)
            ).on('end.style.' + t, ot(t))
          : 'function' == typeof n
          ? this.styleTween(
              t,
              (function(t, n, e) {
                var i, o, u;
                return function() {
                  var a = Object(r.style)(this, t),
                    c = e(this),
                    f = c + '';
                  return (
                    null == c &&
                      (this.style.removeProperty(t),
                      (f = c = Object(r.style)(this, t))),
                    a === f
                      ? null
                      : a === i && f === o
                      ? u
                      : ((o = f), (u = n((i = a), c)))
                  );
                };
              })(t, i, G(this, 'style.' + t, n))
            ).each(
              (function(t, n) {
                var e,
                  r,
                  i,
                  o,
                  u = 'style.' + n,
                  a = 'end.' + u;
                return function() {
                  var c = F(this, t),
                    f = c.on,
                    s = null == c.value[u] ? o || (o = ot(n)) : void 0;
                  (f === e && i === s) || (r = (e = f).copy()).on(a, (i = s)),
                    (c.on = r);
                };
              })(this._id, t)
            )
          : this.styleTween(
              t,
              (function(t, n, e) {
                var i,
                  o,
                  u = e + '';
                return function() {
                  var a = Object(r.style)(this, t);
                  return a === u ? null : a === i ? o : (o = n((i = a), e));
                };
              })(t, i, n),
              e
            ).on('end.style.' + t, null);
      },
      styleTween: function(t, n, e) {
        var r = 'style.' + (t += '');
        if (arguments.length < 2) return (r = this.tween(r)) && r._value;
        if (null == n) return this.tween(r, null);
        if ('function' != typeof n) throw new Error();
        return this.tween(r, ut(t, n, null == e ? '' : e));
      },
      text: function(t) {
        return this.tween(
          'text',
          'function' == typeof t
            ? (function(t) {
                return function() {
                  var n = t(this);
                  this.textContent = null == n ? '' : n;
                };
              })(G(this, 'text', t))
            : (function(t) {
                return function() {
                  this.textContent = t;
                };
              })(null == t ? '' : t + '')
        );
      },
      remove: function() {
        return this.on(
          'end.remove',
          ((t = this._id),
          function() {
            var n = this.parentNode;
            for (var e in this.__transition) if (+e !== t) return;
            n && n.removeChild(this);
          })
        );
        var t;
      },
      tween: function(t, n) {
        var e = this._id;
        if (((t += ''), arguments.length < 2)) {
          for (
            var r, i = z(this.node(), e).tween, o = 0, u = i.length;
            o < u;
            ++o
          )
            if ((r = i[o]).name === t) return r.value;
          return null;
        }
        return this.each((null == n ? $ : W)(e, t, n));
      },
      delay: function(t) {
        var n = this._id;
        return arguments.length
          ? this.each(('function' == typeof t ? J : Q)(n, t))
          : z(this.node(), n).delay;
      },
      duration: function(t) {
        var n = this._id;
        return arguments.length
          ? this.each(('function' == typeof t ? tt : nt)(n, t))
          : z(this.node(), n).duration;
      },
      ease: function(t) {
        var n = this._id;
        return arguments.length ? this.each(et(n, t)) : z(this.node(), n).ease;
      },
      end: function() {
        var t,
          n,
          e = this,
          r = e._id,
          i = e.size();
        return new Promise(function(o, u) {
          var a = {value: u},
            c = {
              value: function() {
                0 == --i && o();
              },
            };
          e.each(function() {
            var e = F(this, r),
              i = e.on;
            i !== t &&
              ((n = (t = i).copy())._.cancel.push(a),
              n._.interrupt.push(a),
              n._.end.push(c)),
              (e.on = n);
          });
        });
      },
    };
    (function t(n) {
      function e(t) {
        return Math.pow(t, n);
      }
      return (n = +n), (e.exponent = t), e;
    })(3),
      (function t(n) {
        function e(t) {
          return 1 - Math.pow(1 - t, n);
        }
        return (n = +n), (e.exponent = t), e;
      })(3),
      (function t(n) {
        function e(t) {
          return ((t *= 2) <= 1 ? Math.pow(t, n) : 2 - Math.pow(2 - t, n)) / 2;
        }
        return (n = +n), (e.exponent = t), e;
      })(3),
      Math.PI;
    (function t(n) {
      function e(t) {
        return t * t * ((n + 1) * t - n);
      }
      return (n = +n), (e.overshoot = t), e;
    })(1.70158),
      (function t(n) {
        function e(t) {
          return --t * t * ((n + 1) * t + n) + 1;
        }
        return (n = +n), (e.overshoot = t), e;
      })(1.70158),
      (function t(n) {
        function e(t) {
          return (
            ((t *= 2) < 1
              ? t * t * ((n + 1) * t - n)
              : (t -= 2) * t * ((n + 1) * t + n) + 2) / 2
          );
        }
        return (n = +n), (e.overshoot = t), e;
      })(1.70158);
    var ht = 2 * Math.PI,
      dt =
        ((function t(n, e) {
          var r = Math.asin(1 / (n = Math.max(1, n))) * (e /= ht);
          function i(t) {
            return n * Math.pow(2, 10 * --t) * Math.sin((r - t) / e);
          }
          return (
            (i.amplitude = function(n) {
              return t(n, e * ht);
            }),
            (i.period = function(e) {
              return t(n, e);
            }),
            i
          );
        })(1, 0.3),
        (function t(n, e) {
          var r = Math.asin(1 / (n = Math.max(1, n))) * (e /= ht);
          function i(t) {
            return 1 - n * Math.pow(2, -10 * (t = +t)) * Math.sin((t + r) / e);
          }
          return (
            (i.amplitude = function(n) {
              return t(n, e * ht);
            }),
            (i.period = function(e) {
              return t(n, e);
            }),
            i
          );
        })(1, 0.3),
        (function t(n, e) {
          var r = Math.asin(1 / (n = Math.max(1, n))) * (e /= ht);
          function i(t) {
            return (
              ((t = 2 * t - 1) < 0
                ? n * Math.pow(2, 10 * t) * Math.sin((r - t) / e)
                : 2 - n * Math.pow(2, -10 * t) * Math.sin((r + t) / e)) / 2
            );
          }
          return (
            (i.amplitude = function(n) {
              return t(n, e * ht);
            }),
            (i.period = function(e) {
              return t(n, e);
            }),
            i
          );
        })(1, 0.3),
        {
          time: null,
          delay: 0,
          duration: 250,
          ease: function(t) {
            return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
          },
        });
    function pt(t, n) {
      for (var e; !(e = t.__transition) || !(e = e[n]); )
        if (!(t = t.parentNode)) return (dt.time = w()), dt;
      return e;
    }
    (r.selection.prototype.interrupt = function(t) {
      return this.each(function() {
        H(this, t);
      });
    }),
      (r.selection.prototype.transition = function(t) {
        var n, e;
        t instanceof ct
          ? ((n = t._id), (t = t._name))
          : ((n = st()),
            ((e = dt).time = w()),
            (t = null == t ? null : t + ''));
        for (var r = this._groups, i = r.length, o = 0; o < i; ++o)
          for (var u, a = r[o], c = a.length, f = 0; f < c; ++f)
            (u = a[f]) && P(u, t, n, f, a, e || pt(u, n));
        return new ct(r, this._parents, t, n);
      });
    var _t = [null],
      vt = function(t, n) {
        var e,
          r,
          i = t.__transition;
        if (i)
          for (r in ((n = null == n ? null : n + ''), i))
            if ((e = i[r]).state > k && e.name === n)
              return new ct([[t]], _t, n, +r);
        return null;
      };
    e.d(n, 'transition', function() {
      return ft;
    }),
      e.d(n, 'active', function() {
        return vt;
      }),
      e.d(n, 'interrupt', function() {
        return H;
      });
  },
  function(t, n, e) {
    'use strict';
    e.r(n);
    var r = function(t) {
        for (var n = (t.length / 6) | 0, e = new Array(n), r = 0; r < n; )
          e[r] = '#' + t.slice(6 * r, 6 * ++r);
        return e;
      },
      i = r('1f77b4ff7f0e2ca02cd627289467bd8c564be377c27f7f7fbcbd2217becf'),
      o = r('7fc97fbeaed4fdc086ffff99386cb0f0027fbf5b17666666'),
      u = r('1b9e77d95f027570b3e7298a66a61ee6ab02a6761d666666'),
      a = r(
        'a6cee31f78b4b2df8a33a02cfb9a99e31a1cfdbf6fff7f00cab2d66a3d9affff99b15928'
      ),
      c = r('fbb4aeb3cde3ccebc5decbe4fed9a6ffffcce5d8bdfddaecf2f2f2'),
      f = r('b3e2cdfdcdaccbd5e8f4cae4e6f5c9fff2aef1e2cccccccc'),
      s = r('e41a1c377eb84daf4a984ea3ff7f00ffff33a65628f781bf999999'),
      l = r('66c2a5fc8d628da0cbe78ac3a6d854ffd92fe5c494b3b3b3'),
      h = r(
        '8dd3c7ffffb3bebadafb807280b1d3fdb462b3de69fccde5d9d9d9bc80bdccebc5ffed6f'
      ),
      d = e(2),
      p = function(t) {
        return Object(d.interpolateRgbBasis)(t[t.length - 1]);
      },
      _ = new Array(3)
        .concat(
          'd8b365f5f5f55ab4ac',
          'a6611adfc27d80cdc1018571',
          'a6611adfc27df5f5f580cdc1018571',
          '8c510ad8b365f6e8c3c7eae55ab4ac01665e',
          '8c510ad8b365f6e8c3f5f5f5c7eae55ab4ac01665e',
          '8c510abf812ddfc27df6e8c3c7eae580cdc135978f01665e',
          '8c510abf812ddfc27df6e8c3f5f5f5c7eae580cdc135978f01665e',
          '5430058c510abf812ddfc27df6e8c3c7eae580cdc135978f01665e003c30',
          '5430058c510abf812ddfc27df6e8c3f5f5f5c7eae580cdc135978f01665e003c30'
        )
        .map(r),
      v = p(_),
      g = new Array(3)
        .concat(
          'af8dc3f7f7f77fbf7b',
          '7b3294c2a5cfa6dba0008837',
          '7b3294c2a5cff7f7f7a6dba0008837',
          '762a83af8dc3e7d4e8d9f0d37fbf7b1b7837',
          '762a83af8dc3e7d4e8f7f7f7d9f0d37fbf7b1b7837',
          '762a839970abc2a5cfe7d4e8d9f0d3a6dba05aae611b7837',
          '762a839970abc2a5cfe7d4e8f7f7f7d9f0d3a6dba05aae611b7837',
          '40004b762a839970abc2a5cfe7d4e8d9f0d3a6dba05aae611b783700441b',
          '40004b762a839970abc2a5cfe7d4e8f7f7f7d9f0d3a6dba05aae611b783700441b'
        )
        .map(r),
      b = p(g),
      y = new Array(3)
        .concat(
          'e9a3c9f7f7f7a1d76a',
          'd01c8bf1b6dab8e1864dac26',
          'd01c8bf1b6daf7f7f7b8e1864dac26',
          'c51b7de9a3c9fde0efe6f5d0a1d76a4d9221',
          'c51b7de9a3c9fde0eff7f7f7e6f5d0a1d76a4d9221',
          'c51b7dde77aef1b6dafde0efe6f5d0b8e1867fbc414d9221',
          'c51b7dde77aef1b6dafde0eff7f7f7e6f5d0b8e1867fbc414d9221',
          '8e0152c51b7dde77aef1b6dafde0efe6f5d0b8e1867fbc414d9221276419',
          '8e0152c51b7dde77aef1b6dafde0eff7f7f7e6f5d0b8e1867fbc414d9221276419'
        )
        .map(r),
      m = p(y),
      x = new Array(3)
        .concat(
          '998ec3f7f7f7f1a340',
          '5e3c99b2abd2fdb863e66101',
          '5e3c99b2abd2f7f7f7fdb863e66101',
          '542788998ec3d8daebfee0b6f1a340b35806',
          '542788998ec3d8daebf7f7f7fee0b6f1a340b35806',
          '5427888073acb2abd2d8daebfee0b6fdb863e08214b35806',
          '5427888073acb2abd2d8daebf7f7f7fee0b6fdb863e08214b35806',
          '2d004b5427888073acb2abd2d8daebfee0b6fdb863e08214b358067f3b08',
          '2d004b5427888073acb2abd2d8daebf7f7f7fee0b6fdb863e08214b358067f3b08'
        )
        .map(r),
      w = p(x),
      C = new Array(3)
        .concat(
          'ef8a62f7f7f767a9cf',
          'ca0020f4a58292c5de0571b0',
          'ca0020f4a582f7f7f792c5de0571b0',
          'b2182bef8a62fddbc7d1e5f067a9cf2166ac',
          'b2182bef8a62fddbc7f7f7f7d1e5f067a9cf2166ac',
          'b2182bd6604df4a582fddbc7d1e5f092c5de4393c32166ac',
          'b2182bd6604df4a582fddbc7f7f7f7d1e5f092c5de4393c32166ac',
          '67001fb2182bd6604df4a582fddbc7d1e5f092c5de4393c32166ac053061',
          '67001fb2182bd6604df4a582fddbc7f7f7f7d1e5f092c5de4393c32166ac053061'
        )
        .map(r),
      M = p(C),
      R = new Array(3)
        .concat(
          'ef8a62ffffff999999',
          'ca0020f4a582bababa404040',
          'ca0020f4a582ffffffbababa404040',
          'b2182bef8a62fddbc7e0e0e09999994d4d4d',
          'b2182bef8a62fddbc7ffffffe0e0e09999994d4d4d',
          'b2182bd6604df4a582fddbc7e0e0e0bababa8787874d4d4d',
          'b2182bd6604df4a582fddbc7ffffffe0e0e0bababa8787874d4d4d',
          '67001fb2182bd6604df4a582fddbc7e0e0e0bababa8787874d4d4d1a1a1a',
          '67001fb2182bd6604df4a582fddbc7ffffffe0e0e0bababa8787874d4d4d1a1a1a'
        )
        .map(r),
      E = p(R),
      N = new Array(3)
        .concat(
          'fc8d59ffffbf91bfdb',
          'd7191cfdae61abd9e92c7bb6',
          'd7191cfdae61ffffbfabd9e92c7bb6',
          'd73027fc8d59fee090e0f3f891bfdb4575b4',
          'd73027fc8d59fee090ffffbfe0f3f891bfdb4575b4',
          'd73027f46d43fdae61fee090e0f3f8abd9e974add14575b4',
          'd73027f46d43fdae61fee090ffffbfe0f3f8abd9e974add14575b4',
          'a50026d73027f46d43fdae61fee090e0f3f8abd9e974add14575b4313695',
          'a50026d73027f46d43fdae61fee090ffffbfe0f3f8abd9e974add14575b4313695'
        )
        .map(r),
      T = p(N),
      A = new Array(3)
        .concat(
          'fc8d59ffffbf91cf60',
          'd7191cfdae61a6d96a1a9641',
          'd7191cfdae61ffffbfa6d96a1a9641',
          'd73027fc8d59fee08bd9ef8b91cf601a9850',
          'd73027fc8d59fee08bffffbfd9ef8b91cf601a9850',
          'd73027f46d43fdae61fee08bd9ef8ba6d96a66bd631a9850',
          'd73027f46d43fdae61fee08bffffbfd9ef8ba6d96a66bd631a9850',
          'a50026d73027f46d43fdae61fee08bd9ef8ba6d96a66bd631a9850006837',
          'a50026d73027f46d43fdae61fee08bffffbfd9ef8ba6d96a66bd631a9850006837'
        )
        .map(r),
      S = p(A),
      O = new Array(3)
        .concat(
          'fc8d59ffffbf99d594',
          'd7191cfdae61abdda42b83ba',
          'd7191cfdae61ffffbfabdda42b83ba',
          'd53e4ffc8d59fee08be6f59899d5943288bd',
          'd53e4ffc8d59fee08bffffbfe6f59899d5943288bd',
          'd53e4ff46d43fdae61fee08be6f598abdda466c2a53288bd',
          'd53e4ff46d43fdae61fee08bffffbfe6f598abdda466c2a53288bd',
          '9e0142d53e4ff46d43fdae61fee08be6f598abdda466c2a53288bd5e4fa2',
          '9e0142d53e4ff46d43fdae61fee08bffffbfe6f598abdda466c2a53288bd5e4fa2'
        )
        .map(r),
      U = p(O),
      k = new Array(3)
        .concat(
          'e5f5f999d8c92ca25f',
          'edf8fbb2e2e266c2a4238b45',
          'edf8fbb2e2e266c2a42ca25f006d2c',
          'edf8fbccece699d8c966c2a42ca25f006d2c',
          'edf8fbccece699d8c966c2a441ae76238b45005824',
          'f7fcfde5f5f9ccece699d8c966c2a441ae76238b45005824',
          'f7fcfde5f5f9ccece699d8c966c2a441ae76238b45006d2c00441b'
        )
        .map(r),
      D = p(k),
      I = new Array(3)
        .concat(
          'e0ecf49ebcda8856a7',
          'edf8fbb3cde38c96c688419d',
          'edf8fbb3cde38c96c68856a7810f7c',
          'edf8fbbfd3e69ebcda8c96c68856a7810f7c',
          'edf8fbbfd3e69ebcda8c96c68c6bb188419d6e016b',
          'f7fcfde0ecf4bfd3e69ebcda8c96c68c6bb188419d6e016b',
          'f7fcfde0ecf4bfd3e69ebcda8c96c68c6bb188419d810f7c4d004b'
        )
        .map(r),
      Y = p(I),
      j = new Array(3)
        .concat(
          'e0f3dba8ddb543a2ca',
          'f0f9e8bae4bc7bccc42b8cbe',
          'f0f9e8bae4bc7bccc443a2ca0868ac',
          'f0f9e8ccebc5a8ddb57bccc443a2ca0868ac',
          'f0f9e8ccebc5a8ddb57bccc44eb3d32b8cbe08589e',
          'f7fcf0e0f3dbccebc5a8ddb57bccc44eb3d32b8cbe08589e',
          'f7fcf0e0f3dbccebc5a8ddb57bccc44eb3d32b8cbe0868ac084081'
        )
        .map(r),
      L = p(j),
      P = new Array(3)
        .concat(
          'fee8c8fdbb84e34a33',
          'fef0d9fdcc8afc8d59d7301f',
          'fef0d9fdcc8afc8d59e34a33b30000',
          'fef0d9fdd49efdbb84fc8d59e34a33b30000',
          'fef0d9fdd49efdbb84fc8d59ef6548d7301f990000',
          'fff7ecfee8c8fdd49efdbb84fc8d59ef6548d7301f990000',
          'fff7ecfee8c8fdd49efdbb84fc8d59ef6548d7301fb300007f0000'
        )
        .map(r),
      B = p(P),
      F = new Array(3)
        .concat(
          'ece2f0a6bddb1c9099',
          'f6eff7bdc9e167a9cf02818a',
          'f6eff7bdc9e167a9cf1c9099016c59',
          'f6eff7d0d1e6a6bddb67a9cf1c9099016c59',
          'f6eff7d0d1e6a6bddb67a9cf3690c002818a016450',
          'fff7fbece2f0d0d1e6a6bddb67a9cf3690c002818a016450',
          'fff7fbece2f0d0d1e6a6bddb67a9cf3690c002818a016c59014636'
        )
        .map(r),
      z = p(F),
      H = new Array(3)
        .concat(
          'ece7f2a6bddb2b8cbe',
          'f1eef6bdc9e174a9cf0570b0',
          'f1eef6bdc9e174a9cf2b8cbe045a8d',
          'f1eef6d0d1e6a6bddb74a9cf2b8cbe045a8d',
          'f1eef6d0d1e6a6bddb74a9cf3690c00570b0034e7b',
          'fff7fbece7f2d0d1e6a6bddb74a9cf3690c00570b0034e7b',
          'fff7fbece7f2d0d1e6a6bddb74a9cf3690c00570b0045a8d023858'
        )
        .map(r),
      q = p(H),
      $ = new Array(3)
        .concat(
          'e7e1efc994c7dd1c77',
          'f1eef6d7b5d8df65b0ce1256',
          'f1eef6d7b5d8df65b0dd1c77980043',
          'f1eef6d4b9dac994c7df65b0dd1c77980043',
          'f1eef6d4b9dac994c7df65b0e7298ace125691003f',
          'f7f4f9e7e1efd4b9dac994c7df65b0e7298ace125691003f',
          'f7f4f9e7e1efd4b9dac994c7df65b0e7298ace125698004367001f'
        )
        .map(r),
      W = p($),
      G = new Array(3)
        .concat(
          'fde0ddfa9fb5c51b8a',
          'feebe2fbb4b9f768a1ae017e',
          'feebe2fbb4b9f768a1c51b8a7a0177',
          'feebe2fcc5c0fa9fb5f768a1c51b8a7a0177',
          'feebe2fcc5c0fa9fb5f768a1dd3497ae017e7a0177',
          'fff7f3fde0ddfcc5c0fa9fb5f768a1dd3497ae017e7a0177',
          'fff7f3fde0ddfcc5c0fa9fb5f768a1dd3497ae017e7a017749006a'
        )
        .map(r),
      V = p(G),
      Z = new Array(3)
        .concat(
          'edf8b17fcdbb2c7fb8',
          'ffffcca1dab441b6c4225ea8',
          'ffffcca1dab441b6c42c7fb8253494',
          'ffffccc7e9b47fcdbb41b6c42c7fb8253494',
          'ffffccc7e9b47fcdbb41b6c41d91c0225ea80c2c84',
          'ffffd9edf8b1c7e9b47fcdbb41b6c41d91c0225ea80c2c84',
          'ffffd9edf8b1c7e9b47fcdbb41b6c41d91c0225ea8253494081d58'
        )
        .map(r),
      X = p(Z),
      K = new Array(3)
        .concat(
          'f7fcb9addd8e31a354',
          'ffffccc2e69978c679238443',
          'ffffccc2e69978c67931a354006837',
          'ffffccd9f0a3addd8e78c67931a354006837',
          'ffffccd9f0a3addd8e78c67941ab5d238443005a32',
          'ffffe5f7fcb9d9f0a3addd8e78c67941ab5d238443005a32',
          'ffffe5f7fcb9d9f0a3addd8e78c67941ab5d238443006837004529'
        )
        .map(r),
      J = p(K),
      Q = new Array(3)
        .concat(
          'fff7bcfec44fd95f0e',
          'ffffd4fed98efe9929cc4c02',
          'ffffd4fed98efe9929d95f0e993404',
          'ffffd4fee391fec44ffe9929d95f0e993404',
          'ffffd4fee391fec44ffe9929ec7014cc4c028c2d04',
          'ffffe5fff7bcfee391fec44ffe9929ec7014cc4c028c2d04',
          'ffffe5fff7bcfee391fec44ffe9929ec7014cc4c02993404662506'
        )
        .map(r),
      tt = p(Q),
      nt = new Array(3)
        .concat(
          'ffeda0feb24cf03b20',
          'ffffb2fecc5cfd8d3ce31a1c',
          'ffffb2fecc5cfd8d3cf03b20bd0026',
          'ffffb2fed976feb24cfd8d3cf03b20bd0026',
          'ffffb2fed976feb24cfd8d3cfc4e2ae31a1cb10026',
          'ffffccffeda0fed976feb24cfd8d3cfc4e2ae31a1cb10026',
          'ffffccffeda0fed976feb24cfd8d3cfc4e2ae31a1cbd0026800026'
        )
        .map(r),
      et = p(nt),
      rt = new Array(3)
        .concat(
          'deebf79ecae13182bd',
          'eff3ffbdd7e76baed62171b5',
          'eff3ffbdd7e76baed63182bd08519c',
          'eff3ffc6dbef9ecae16baed63182bd08519c',
          'eff3ffc6dbef9ecae16baed64292c62171b5084594',
          'f7fbffdeebf7c6dbef9ecae16baed64292c62171b5084594',
          'f7fbffdeebf7c6dbef9ecae16baed64292c62171b508519c08306b'
        )
        .map(r),
      it = p(rt),
      ot = new Array(3)
        .concat(
          'e5f5e0a1d99b31a354',
          'edf8e9bae4b374c476238b45',
          'edf8e9bae4b374c47631a354006d2c',
          'edf8e9c7e9c0a1d99b74c47631a354006d2c',
          'edf8e9c7e9c0a1d99b74c47641ab5d238b45005a32',
          'f7fcf5e5f5e0c7e9c0a1d99b74c47641ab5d238b45005a32',
          'f7fcf5e5f5e0c7e9c0a1d99b74c47641ab5d238b45006d2c00441b'
        )
        .map(r),
      ut = p(ot),
      at = new Array(3)
        .concat(
          'f0f0f0bdbdbd636363',
          'f7f7f7cccccc969696525252',
          'f7f7f7cccccc969696636363252525',
          'f7f7f7d9d9d9bdbdbd969696636363252525',
          'f7f7f7d9d9d9bdbdbd969696737373525252252525',
          'fffffff0f0f0d9d9d9bdbdbd969696737373525252252525',
          'fffffff0f0f0d9d9d9bdbdbd969696737373525252252525000000'
        )
        .map(r),
      ct = p(at),
      ft = new Array(3)
        .concat(
          'efedf5bcbddc756bb1',
          'f2f0f7cbc9e29e9ac86a51a3',
          'f2f0f7cbc9e29e9ac8756bb154278f',
          'f2f0f7dadaebbcbddc9e9ac8756bb154278f',
          'f2f0f7dadaebbcbddc9e9ac8807dba6a51a34a1486',
          'fcfbfdefedf5dadaebbcbddc9e9ac8807dba6a51a34a1486',
          'fcfbfdefedf5dadaebbcbddc9e9ac8807dba6a51a354278f3f007d'
        )
        .map(r),
      st = p(ft),
      lt = new Array(3)
        .concat(
          'fee0d2fc9272de2d26',
          'fee5d9fcae91fb6a4acb181d',
          'fee5d9fcae91fb6a4ade2d26a50f15',
          'fee5d9fcbba1fc9272fb6a4ade2d26a50f15',
          'fee5d9fcbba1fc9272fb6a4aef3b2ccb181d99000d',
          'fff5f0fee0d2fcbba1fc9272fb6a4aef3b2ccb181d99000d',
          'fff5f0fee0d2fcbba1fc9272fb6a4aef3b2ccb181da50f1567000d'
        )
        .map(r),
      ht = p(lt),
      dt = new Array(3)
        .concat(
          'fee6cefdae6be6550d',
          'feeddefdbe85fd8d3cd94701',
          'feeddefdbe85fd8d3ce6550da63603',
          'feeddefdd0a2fdae6bfd8d3ce6550da63603',
          'feeddefdd0a2fdae6bfd8d3cf16913d948018c2d04',
          'fff5ebfee6cefdd0a2fdae6bfd8d3cf16913d948018c2d04',
          'fff5ebfee6cefdd0a2fdae6bfd8d3cf16913d94801a636037f2704'
        )
        .map(r),
      pt = p(dt),
      _t = e(0),
      vt = Object(d.interpolateCubehelixLong)(
        Object(_t.b)(300, 0.5, 0),
        Object(_t.b)(-240, 0.5, 1)
      ),
      gt = Object(d.interpolateCubehelixLong)(
        Object(_t.b)(-100, 0.75, 0.35),
        Object(_t.b)(80, 1.5, 0.8)
      ),
      bt = Object(d.interpolateCubehelixLong)(
        Object(_t.b)(260, 0.75, 0.35),
        Object(_t.b)(80, 1.5, 0.8)
      ),
      yt = Object(_t.b)(),
      mt = function(t) {
        (t < 0 || t > 1) && (t -= Math.floor(t));
        var n = Math.abs(t - 0.5);
        return (
          (yt.h = 360 * t - 100),
          (yt.s = 1.5 - 1.5 * n),
          (yt.l = 0.8 - 0.9 * n),
          yt + ''
        );
      },
      xt = Object(_t.f)(),
      wt = Math.PI / 3,
      Ct = (2 * Math.PI) / 3,
      Mt = function(t) {
        var n;
        return (
          (t = (0.5 - t) * Math.PI),
          (xt.r = 255 * (n = Math.sin(t)) * n),
          (xt.g = 255 * (n = Math.sin(t + wt)) * n),
          (xt.b = 255 * (n = Math.sin(t + Ct)) * n),
          xt + ''
        );
      };
    function Rt(t) {
      var n = t.length;
      return function(e) {
        return t[Math.max(0, Math.min(n - 1, Math.floor(e * n)))];
      };
    }
    var Et = Rt(
        r(
          '44015444025645045745055946075a46085c460a5d460b5e470d60470e6147106347116447136548146748166848176948186a481a6c481b6d481c6e481d6f481f70482071482173482374482475482576482677482878482979472a7a472c7a472d7b472e7c472f7d46307e46327e46337f463480453581453781453882443983443a83443b84433d84433e85423f854240864241864142874144874045884046883f47883f48893e49893e4a893e4c8a3d4d8a3d4e8a3c4f8a3c508b3b518b3b528b3a538b3a548c39558c39568c38588c38598c375a8c375b8d365c8d365d8d355e8d355f8d34608d34618d33628d33638d32648e32658e31668e31678e31688e30698e306a8e2f6b8e2f6c8e2e6d8e2e6e8e2e6f8e2d708e2d718e2c718e2c728e2c738e2b748e2b758e2a768e2a778e2a788e29798e297a8e297b8e287c8e287d8e277e8e277f8e27808e26818e26828e26828e25838e25848e25858e24868e24878e23888e23898e238a8d228b8d228c8d228d8d218e8d218f8d21908d21918c20928c20928c20938c1f948c1f958b1f968b1f978b1f988b1f998a1f9a8a1e9b8a1e9c891e9d891f9e891f9f881fa0881fa1881fa1871fa28720a38620a48621a58521a68522a78522a88423a98324aa8325ab8225ac8226ad8127ad8128ae8029af7f2ab07f2cb17e2db27d2eb37c2fb47c31b57b32b67a34b67935b77937b87838b9773aba763bbb753dbc743fbc7340bd7242be7144bf7046c06f48c16e4ac16d4cc26c4ec36b50c46a52c56954c56856c66758c7655ac8645cc8635ec96260ca6063cb5f65cb5e67cc5c69cd5b6ccd5a6ece5870cf5773d05675d05477d1537ad1517cd2507fd34e81d34d84d44b86d54989d5488bd6468ed64590d74393d74195d84098d83e9bd93c9dd93ba0da39a2da37a5db36a8db34aadc32addc30b0dd2fb2dd2db5de2bb8de29bade28bddf26c0df25c2df23c5e021c8e020cae11fcde11dd0e11cd2e21bd5e21ad8e219dae319dde318dfe318e2e418e5e419e7e419eae51aece51befe51cf1e51df4e61ef6e620f8e621fbe723fde725'
        )
      ),
      Nt = Rt(
        r(
          '00000401000501010601010802010902020b02020d03030f03031204041405041606051806051a07061c08071e0907200a08220b09240c09260d0a290e0b2b100b2d110c2f120d31130d34140e36150e38160f3b180f3d19103f1a10421c10441d11471e114920114b21114e22115024125325125527125829115a2a115c2c115f2d11612f116331116533106734106936106b38106c390f6e3b0f703d0f713f0f72400f74420f75440f764510774710784910784a10794c117a4e117b4f127b51127c52137c54137d56147d57157e59157e5a167e5c167f5d177f5f187f601880621980641a80651a80671b80681c816a1c816b1d816d1d816e1e81701f81721f817320817521817621817822817922827b23827c23827e24828025828125818326818426818627818827818928818b29818c29818e2a81902a81912b81932b80942c80962c80982d80992d809b2e7f9c2e7f9e2f7fa02f7fa1307ea3307ea5317ea6317da8327daa337dab337cad347cae347bb0357bb2357bb3367ab5367ab73779b83779ba3878bc3978bd3977bf3a77c03a76c23b75c43c75c53c74c73d73c83e73ca3e72cc3f71cd4071cf4070d0416fd2426fd3436ed5446dd6456cd8456cd9466bdb476adc4869de4968df4a68e04c67e24d66e34e65e44f64e55064e75263e85362e95462ea5661eb5760ec5860ed5a5fee5b5eef5d5ef05f5ef1605df2625df2645cf3655cf4675cf4695cf56b5cf66c5cf66e5cf7705cf7725cf8745cf8765cf9785df9795df97b5dfa7d5efa7f5efa815ffb835ffb8560fb8761fc8961fc8a62fc8c63fc8e64fc9065fd9266fd9467fd9668fd9869fd9a6afd9b6bfe9d6cfe9f6dfea16efea36ffea571fea772fea973feaa74feac76feae77feb078feb27afeb47bfeb67cfeb77efeb97ffebb81febd82febf84fec185fec287fec488fec68afec88cfeca8dfecc8ffecd90fecf92fed194fed395fed597fed799fed89afdda9cfddc9efddea0fde0a1fde2a3fde3a5fde5a7fde7a9fde9aafdebacfcecaefceeb0fcf0b2fcf2b4fcf4b6fcf6b8fcf7b9fcf9bbfcfbbdfcfdbf'
        )
      ),
      Tt = Rt(
        r(
          '00000401000501010601010802010a02020c02020e03021004031204031405041706041907051b08051d09061f0a07220b07240c08260d08290e092b10092d110a30120a32140b34150b37160b39180c3c190c3e1b0c411c0c431e0c451f0c48210c4a230c4c240c4f260c51280b53290b552b0b572d0b592f0a5b310a5c320a5e340a5f3609613809623909633b09643d09653e0966400a67420a68440a68450a69470b6a490b6a4a0c6b4c0c6b4d0d6c4f0d6c510e6c520e6d540f6d550f6d57106e59106e5a116e5c126e5d126e5f136e61136e62146e64156e65156e67166e69166e6a176e6c186e6d186e6f196e71196e721a6e741a6e751b6e771c6d781c6d7a1d6d7c1d6d7d1e6d7f1e6c801f6c82206c84206b85216b87216b88226a8a226a8c23698d23698f24699025689225689326679526679727669827669a28659b29649d29649f2a63a02a63a22b62a32c61a52c60a62d60a82e5fa92e5eab2f5ead305dae305cb0315bb1325ab3325ab43359b63458b73557b93556ba3655bc3754bd3853bf3952c03a51c13a50c33b4fc43c4ec63d4dc73e4cc83f4bca404acb4149cc4248ce4347cf4446d04545d24644d34743d44842d54a41d74b3fd84c3ed94d3dda4e3cdb503bdd513ade5238df5337e05536e15635e25734e35933e45a31e55c30e65d2fe75e2ee8602de9612bea632aeb6429eb6628ec6726ed6925ee6a24ef6c23ef6e21f06f20f1711ff1731df2741cf3761bf37819f47918f57b17f57d15f67e14f68013f78212f78410f8850ff8870ef8890cf98b0bf98c0af98e09fa9008fa9207fa9407fb9606fb9706fb9906fb9b06fb9d07fc9f07fca108fca309fca50afca60cfca80dfcaa0ffcac11fcae12fcb014fcb216fcb418fbb61afbb81dfbba1ffbbc21fbbe23fac026fac228fac42afac62df9c72ff9c932f9cb35f8cd37f8cf3af7d13df7d340f6d543f6d746f5d949f5db4cf4dd4ff4df53f4e156f3e35af3e55df2e661f2e865f2ea69f1ec6df1ed71f1ef75f1f179f2f27df2f482f3f586f3f68af4f88ef5f992f6fa96f8fb9af9fc9dfafda1fcffa4'
        )
      ),
      At = Rt(
        r(
          '0d088710078813078916078a19068c1b068d1d068e20068f2206902406912605912805922a05932c05942e05952f059631059733059735049837049938049a3a049a3c049b3e049c3f049c41049d43039e44039e46039f48039f4903a04b03a14c02a14e02a25002a25102a35302a35502a45601a45801a45901a55b01a55c01a65e01a66001a66100a76300a76400a76600a76700a86900a86a00a86c00a86e00a86f00a87100a87201a87401a87501a87701a87801a87a02a87b02a87d03a87e03a88004a88104a78305a78405a78606a68707a68808a68a09a58b0aa58d0ba58e0ca48f0da4910ea3920fa39410a29511a19613a19814a099159f9a169f9c179e9d189d9e199da01a9ca11b9ba21d9aa31e9aa51f99a62098a72197a82296aa2395ab2494ac2694ad2793ae2892b02991b12a90b22b8fb32c8eb42e8db52f8cb6308bb7318ab83289ba3388bb3488bc3587bd3786be3885bf3984c03a83c13b82c23c81c33d80c43e7fc5407ec6417dc7427cc8437bc9447aca457acb4679cc4778cc4977cd4a76ce4b75cf4c74d04d73d14e72d24f71d35171d45270d5536fd5546ed6556dd7566cd8576bd9586ada5a6ada5b69db5c68dc5d67dd5e66de5f65de6164df6263e06363e16462e26561e26660e3685fe4695ee56a5de56b5de66c5ce76e5be76f5ae87059e97158e97257ea7457eb7556eb7655ec7754ed7953ed7a52ee7b51ef7c51ef7e50f07f4ff0804ef1814df1834cf2844bf3854bf3874af48849f48948f58b47f58c46f68d45f68f44f79044f79143f79342f89441f89540f9973ff9983ef99a3efa9b3dfa9c3cfa9e3bfb9f3afba139fba238fca338fca537fca636fca835fca934fdab33fdac33fdae32fdaf31fdb130fdb22ffdb42ffdb52efeb72dfeb82cfeba2cfebb2bfebd2afebe2afec029fdc229fdc328fdc527fdc627fdc827fdca26fdcb26fccd25fcce25fcd025fcd225fbd324fbd524fbd724fad824fada24f9dc24f9dd25f8df25f8e125f7e225f7e425f6e626f6e826f5e926f5eb27f4ed27f3ee27f3f027f2f227f1f426f1f525f0f724f0f921'
        )
      );
    e.d(n, 'schemeCategory10', function() {
      return i;
    }),
      e.d(n, 'schemeAccent', function() {
        return o;
      }),
      e.d(n, 'schemeDark2', function() {
        return u;
      }),
      e.d(n, 'schemePaired', function() {
        return a;
      }),
      e.d(n, 'schemePastel1', function() {
        return c;
      }),
      e.d(n, 'schemePastel2', function() {
        return f;
      }),
      e.d(n, 'schemeSet1', function() {
        return s;
      }),
      e.d(n, 'schemeSet2', function() {
        return l;
      }),
      e.d(n, 'schemeSet3', function() {
        return h;
      }),
      e.d(n, 'interpolateBrBG', function() {
        return v;
      }),
      e.d(n, 'schemeBrBG', function() {
        return _;
      }),
      e.d(n, 'interpolatePRGn', function() {
        return b;
      }),
      e.d(n, 'schemePRGn', function() {
        return g;
      }),
      e.d(n, 'interpolatePiYG', function() {
        return m;
      }),
      e.d(n, 'schemePiYG', function() {
        return y;
      }),
      e.d(n, 'interpolatePuOr', function() {
        return w;
      }),
      e.d(n, 'schemePuOr', function() {
        return x;
      }),
      e.d(n, 'interpolateRdBu', function() {
        return M;
      }),
      e.d(n, 'schemeRdBu', function() {
        return C;
      }),
      e.d(n, 'interpolateRdGy', function() {
        return E;
      }),
      e.d(n, 'schemeRdGy', function() {
        return R;
      }),
      e.d(n, 'interpolateRdYlBu', function() {
        return T;
      }),
      e.d(n, 'schemeRdYlBu', function() {
        return N;
      }),
      e.d(n, 'interpolateRdYlGn', function() {
        return S;
      }),
      e.d(n, 'schemeRdYlGn', function() {
        return A;
      }),
      e.d(n, 'interpolateSpectral', function() {
        return U;
      }),
      e.d(n, 'schemeSpectral', function() {
        return O;
      }),
      e.d(n, 'interpolateBuGn', function() {
        return D;
      }),
      e.d(n, 'schemeBuGn', function() {
        return k;
      }),
      e.d(n, 'interpolateBuPu', function() {
        return Y;
      }),
      e.d(n, 'schemeBuPu', function() {
        return I;
      }),
      e.d(n, 'interpolateGnBu', function() {
        return L;
      }),
      e.d(n, 'schemeGnBu', function() {
        return j;
      }),
      e.d(n, 'interpolateOrRd', function() {
        return B;
      }),
      e.d(n, 'schemeOrRd', function() {
        return P;
      }),
      e.d(n, 'interpolatePuBuGn', function() {
        return z;
      }),
      e.d(n, 'schemePuBuGn', function() {
        return F;
      }),
      e.d(n, 'interpolatePuBu', function() {
        return q;
      }),
      e.d(n, 'schemePuBu', function() {
        return H;
      }),
      e.d(n, 'interpolatePuRd', function() {
        return W;
      }),
      e.d(n, 'schemePuRd', function() {
        return $;
      }),
      e.d(n, 'interpolateRdPu', function() {
        return V;
      }),
      e.d(n, 'schemeRdPu', function() {
        return G;
      }),
      e.d(n, 'interpolateYlGnBu', function() {
        return X;
      }),
      e.d(n, 'schemeYlGnBu', function() {
        return Z;
      }),
      e.d(n, 'interpolateYlGn', function() {
        return J;
      }),
      e.d(n, 'schemeYlGn', function() {
        return K;
      }),
      e.d(n, 'interpolateYlOrBr', function() {
        return tt;
      }),
      e.d(n, 'schemeYlOrBr', function() {
        return Q;
      }),
      e.d(n, 'interpolateYlOrRd', function() {
        return et;
      }),
      e.d(n, 'schemeYlOrRd', function() {
        return nt;
      }),
      e.d(n, 'interpolateBlues', function() {
        return it;
      }),
      e.d(n, 'schemeBlues', function() {
        return rt;
      }),
      e.d(n, 'interpolateGreens', function() {
        return ut;
      }),
      e.d(n, 'schemeGreens', function() {
        return ot;
      }),
      e.d(n, 'interpolateGreys', function() {
        return ct;
      }),
      e.d(n, 'schemeGreys', function() {
        return at;
      }),
      e.d(n, 'interpolatePurples', function() {
        return st;
      }),
      e.d(n, 'schemePurples', function() {
        return ft;
      }),
      e.d(n, 'interpolateReds', function() {
        return ht;
      }),
      e.d(n, 'schemeReds', function() {
        return lt;
      }),
      e.d(n, 'interpolateOranges', function() {
        return pt;
      }),
      e.d(n, 'schemeOranges', function() {
        return dt;
      }),
      e.d(n, 'interpolateCubehelixDefault', function() {
        return vt;
      }),
      e.d(n, 'interpolateRainbow', function() {
        return mt;
      }),
      e.d(n, 'interpolateWarm', function() {
        return gt;
      }),
      e.d(n, 'interpolateCool', function() {
        return bt;
      }),
      e.d(n, 'interpolateSinebow', function() {
        return Mt;
      }),
      e.d(n, 'interpolateViridis', function() {
        return Et;
      }),
      e.d(n, 'interpolateMagma', function() {
        return Nt;
      }),
      e.d(n, 'interpolateInferno', function() {
        return Tt;
      }),
      e.d(n, 'interpolatePlasma', function() {
        return At;
      });
  },
  function(t, n, e) {
    'use strict';
    function r(t, n) {
      return t.parent === n.parent ? 1 : 2;
    }
    function i(t, n) {
      return t + n.x;
    }
    function o(t, n) {
      return Math.max(t, n.y);
    }
    e.r(n);
    var u = function() {
      var t = r,
        n = 1,
        e = 1,
        u = !1;
      function a(r) {
        var a,
          c = 0;
        r.eachAfter(function(n) {
          var e = n.children;
          e
            ? ((n.x = (function(t) {
                return t.reduce(i, 0) / t.length;
              })(e)),
              (n.y = (function(t) {
                return 1 + t.reduce(o, 0);
              })(e)))
            : ((n.x = a ? (c += t(n, a)) : 0), (n.y = 0), (a = n));
        });
        var f = (function(t) {
            for (var n; (n = t.children); ) t = n[0];
            return t;
          })(r),
          s = (function(t) {
            for (var n; (n = t.children); ) t = n[n.length - 1];
            return t;
          })(r),
          l = f.x - t(f, s) / 2,
          h = s.x + t(s, f) / 2;
        return r.eachAfter(
          u
            ? function(t) {
                (t.x = (t.x - r.x) * n), (t.y = (r.y - t.y) * e);
              }
            : function(t) {
                (t.x = ((t.x - l) / (h - l)) * n),
                  (t.y = (1 - (r.y ? t.y / r.y : 1)) * e);
              }
        );
      }
      return (
        (a.separation = function(n) {
          return arguments.length ? ((t = n), a) : t;
        }),
        (a.size = function(t) {
          return arguments.length
            ? ((u = !1), (n = +t[0]), (e = +t[1]), a)
            : u
            ? null
            : [n, e];
        }),
        (a.nodeSize = function(t) {
          return arguments.length
            ? ((u = !0), (n = +t[0]), (e = +t[1]), a)
            : u
            ? [n, e]
            : null;
        }),
        a
      );
    };
    function a(t) {
      var n = 0,
        e = t.children,
        r = e && e.length;
      if (r) for (; --r >= 0; ) n += e[r].value;
      else n = 1;
      t.value = n;
    }
    function c(t, n) {
      var e,
        r,
        i,
        o,
        u,
        a = new h(t),
        c = +t.value && (a.value = t.value),
        s = [a];
      for (null == n && (n = f); (e = s.pop()); )
        if ((c && (e.value = +e.data.value), (i = n(e.data)) && (u = i.length)))
          for (e.children = new Array(u), o = u - 1; o >= 0; --o)
            s.push((r = e.children[o] = new h(i[o]))),
              (r.parent = e),
              (r.depth = e.depth + 1);
      return a.eachBefore(l);
    }
    function f(t) {
      return t.children;
    }
    function s(t) {
      t.data = t.data.data;
    }
    function l(t) {
      var n = 0;
      do {
        t.height = n;
      } while ((t = t.parent) && t.height < ++n);
    }
    function h(t) {
      (this.data = t), (this.depth = this.height = 0), (this.parent = null);
    }
    h.prototype = c.prototype = {
      constructor: h,
      count: function() {
        return this.eachAfter(a);
      },
      each: function(t) {
        var n,
          e,
          r,
          i,
          o = this,
          u = [o];
        do {
          for (n = u.reverse(), u = []; (o = n.pop()); )
            if ((t(o), (e = o.children)))
              for (r = 0, i = e.length; r < i; ++r) u.push(e[r]);
        } while (u.length);
        return this;
      },
      eachAfter: function(t) {
        for (var n, e, r, i = this, o = [i], u = []; (i = o.pop()); )
          if ((u.push(i), (n = i.children)))
            for (e = 0, r = n.length; e < r; ++e) o.push(n[e]);
        for (; (i = u.pop()); ) t(i);
        return this;
      },
      eachBefore: function(t) {
        for (var n, e, r = this, i = [r]; (r = i.pop()); )
          if ((t(r), (n = r.children)))
            for (e = n.length - 1; e >= 0; --e) i.push(n[e]);
        return this;
      },
      sum: function(t) {
        return this.eachAfter(function(n) {
          for (
            var e = +t(n.data) || 0, r = n.children, i = r && r.length;
            --i >= 0;

          )
            e += r[i].value;
          n.value = e;
        });
      },
      sort: function(t) {
        return this.eachBefore(function(n) {
          n.children && n.children.sort(t);
        });
      },
      path: function(t) {
        for (
          var n = this,
            e = (function(t, n) {
              if (t === n) return t;
              var e = t.ancestors(),
                r = n.ancestors(),
                i = null;
              for (t = e.pop(), n = r.pop(); t === n; )
                (i = t), (t = e.pop()), (n = r.pop());
              return i;
            })(n, t),
            r = [n];
          n !== e;

        )
          (n = n.parent), r.push(n);
        for (var i = r.length; t !== e; ) r.splice(i, 0, t), (t = t.parent);
        return r;
      },
      ancestors: function() {
        for (var t = this, n = [t]; (t = t.parent); ) n.push(t);
        return n;
      },
      descendants: function() {
        var t = [];
        return (
          this.each(function(n) {
            t.push(n);
          }),
          t
        );
      },
      leaves: function() {
        var t = [];
        return (
          this.eachBefore(function(n) {
            n.children || t.push(n);
          }),
          t
        );
      },
      links: function() {
        var t = this,
          n = [];
        return (
          t.each(function(e) {
            e !== t && n.push({source: e.parent, target: e});
          }),
          n
        );
      },
      copy: function() {
        return c(this).eachBefore(s);
      },
    };
    var d = Array.prototype.slice;
    var p = function(t) {
      for (
        var n,
          e,
          r = 0,
          i = (t = (function(t) {
            for (var n, e, r = t.length; r; )
              (e = (Math.random() * r--) | 0),
                (n = t[r]),
                (t[r] = t[e]),
                (t[e] = n);
            return t;
          })(d.call(t))).length,
          o = [];
        r < i;

      )
        (n = t[r]), e && g(e, n) ? ++r : ((e = y((o = _(o, n)))), (r = 0));
      return e;
    };
    function _(t, n) {
      var e, r;
      if (b(n, t)) return [n];
      for (e = 0; e < t.length; ++e)
        if (v(n, t[e]) && b(m(t[e], n), t)) return [t[e], n];
      for (e = 0; e < t.length - 1; ++e)
        for (r = e + 1; r < t.length; ++r)
          if (
            v(m(t[e], t[r]), n) &&
            v(m(t[e], n), t[r]) &&
            v(m(t[r], n), t[e]) &&
            b(x(t[e], t[r], n), t)
          )
            return [t[e], t[r], n];
      throw new Error();
    }
    function v(t, n) {
      var e = t.r - n.r,
        r = n.x - t.x,
        i = n.y - t.y;
      return e < 0 || e * e < r * r + i * i;
    }
    function g(t, n) {
      var e = t.r - n.r + 1e-6,
        r = n.x - t.x,
        i = n.y - t.y;
      return e > 0 && e * e > r * r + i * i;
    }
    function b(t, n) {
      for (var e = 0; e < n.length; ++e) if (!g(t, n[e])) return !1;
      return !0;
    }
    function y(t) {
      switch (t.length) {
        case 1:
          return {x: (n = t[0]).x, y: n.y, r: n.r};
        case 2:
          return m(t[0], t[1]);
        case 3:
          return x(t[0], t[1], t[2]);
      }
      var n;
    }
    function m(t, n) {
      var e = t.x,
        r = t.y,
        i = t.r,
        o = n.x,
        u = n.y,
        a = n.r,
        c = o - e,
        f = u - r,
        s = a - i,
        l = Math.sqrt(c * c + f * f);
      return {
        x: (e + o + (c / l) * s) / 2,
        y: (r + u + (f / l) * s) / 2,
        r: (l + i + a) / 2,
      };
    }
    function x(t, n, e) {
      var r = t.x,
        i = t.y,
        o = t.r,
        u = n.x,
        a = n.y,
        c = n.r,
        f = e.x,
        s = e.y,
        l = e.r,
        h = r - u,
        d = r - f,
        p = i - a,
        _ = i - s,
        v = c - o,
        g = l - o,
        b = r * r + i * i - o * o,
        y = b - u * u - a * a + c * c,
        m = b - f * f - s * s + l * l,
        x = d * p - h * _,
        w = (p * m - _ * y) / (2 * x) - r,
        C = (_ * v - p * g) / x,
        M = (d * y - h * m) / (2 * x) - i,
        R = (h * g - d * v) / x,
        E = C * C + R * R - 1,
        N = 2 * (o + w * C + M * R),
        T = w * w + M * M - o * o,
        A = -(E ? (N + Math.sqrt(N * N - 4 * E * T)) / (2 * E) : T / N);
      return {x: r + w + C * A, y: i + M + R * A, r: A};
    }
    function w(t, n, e) {
      var r,
        i,
        o,
        u,
        a = t.x - n.x,
        c = t.y - n.y,
        f = a * a + c * c;
      f
        ? ((i = n.r + e.r),
          (i *= i),
          (u = t.r + e.r),
          i > (u *= u)
            ? ((r = (f + u - i) / (2 * f)),
              (o = Math.sqrt(Math.max(0, u / f - r * r))),
              (e.x = t.x - r * a - o * c),
              (e.y = t.y - r * c + o * a))
            : ((r = (f + i - u) / (2 * f)),
              (o = Math.sqrt(Math.max(0, i / f - r * r))),
              (e.x = n.x + r * a - o * c),
              (e.y = n.y + r * c + o * a)))
        : ((e.x = n.x + e.r), (e.y = n.y));
    }
    function C(t, n) {
      var e = t.r + n.r - 1e-6,
        r = n.x - t.x,
        i = n.y - t.y;
      return e > 0 && e * e > r * r + i * i;
    }
    function M(t) {
      var n = t._,
        e = t.next._,
        r = n.r + e.r,
        i = (n.x * e.r + e.x * n.r) / r,
        o = (n.y * e.r + e.y * n.r) / r;
      return i * i + o * o;
    }
    function R(t) {
      (this._ = t), (this.next = null), (this.previous = null);
    }
    function E(t) {
      if (!(i = t.length)) return 0;
      var n, e, r, i, o, u, a, c, f, s, l;
      if ((((n = t[0]).x = 0), (n.y = 0), !(i > 1))) return n.r;
      if (((e = t[1]), (n.x = -e.r), (e.x = n.r), (e.y = 0), !(i > 2)))
        return n.r + e.r;
      w(e, n, (r = t[2])),
        (n = new R(n)),
        (e = new R(e)),
        (r = new R(r)),
        (n.next = r.previous = e),
        (e.next = n.previous = r),
        (r.next = e.previous = n);
      t: for (a = 3; a < i; ++a) {
        w(n._, e._, (r = t[a])),
          (r = new R(r)),
          (c = e.next),
          (f = n.previous),
          (s = e._.r),
          (l = n._.r);
        do {
          if (s <= l) {
            if (C(c._, r._)) {
              (e = c), (n.next = e), (e.previous = n), --a;
              continue t;
            }
            (s += c._.r), (c = c.next);
          } else {
            if (C(f._, r._)) {
              ((n = f).next = e), (e.previous = n), --a;
              continue t;
            }
            (l += f._.r), (f = f.previous);
          }
        } while (c !== f.next);
        for (
          r.previous = n, r.next = e, n.next = e.previous = e = r, o = M(n);
          (r = r.next) !== e;

        )
          (u = M(r)) < o && ((n = r), (o = u));
        e = n.next;
      }
      for (n = [e._], r = e; (r = r.next) !== e; ) n.push(r._);
      for (r = p(n), a = 0; a < i; ++a) ((n = t[a]).x -= r.x), (n.y -= r.y);
      return r.r;
    }
    var N = function(t) {
      return E(t), t;
    };
    function T(t) {
      return null == t ? null : A(t);
    }
    function A(t) {
      if ('function' != typeof t) throw new Error();
      return t;
    }
    function S() {
      return 0;
    }
    var O = function(t) {
      return function() {
        return t;
      };
    };
    function U(t) {
      return Math.sqrt(t.value);
    }
    var k = function() {
      var t = null,
        n = 1,
        e = 1,
        r = S;
      function i(i) {
        return (
          (i.x = n / 2),
          (i.y = e / 2),
          t
            ? i
                .eachBefore(D(t))
                .eachAfter(I(r, 0.5))
                .eachBefore(Y(1))
            : i
                .eachBefore(D(U))
                .eachAfter(I(S, 1))
                .eachAfter(I(r, i.r / Math.min(n, e)))
                .eachBefore(Y(Math.min(n, e) / (2 * i.r))),
          i
        );
      }
      return (
        (i.radius = function(n) {
          return arguments.length ? ((t = T(n)), i) : t;
        }),
        (i.size = function(t) {
          return arguments.length ? ((n = +t[0]), (e = +t[1]), i) : [n, e];
        }),
        (i.padding = function(t) {
          return arguments.length
            ? ((r = 'function' == typeof t ? t : O(+t)), i)
            : r;
        }),
        i
      );
    };
    function D(t) {
      return function(n) {
        n.children || (n.r = Math.max(0, +t(n) || 0));
      };
    }
    function I(t, n) {
      return function(e) {
        if ((r = e.children)) {
          var r,
            i,
            o,
            u = r.length,
            a = t(e) * n || 0;
          if (a) for (i = 0; i < u; ++i) r[i].r += a;
          if (((o = E(r)), a)) for (i = 0; i < u; ++i) r[i].r -= a;
          e.r = o + a;
        }
      };
    }
    function Y(t) {
      return function(n) {
        var e = n.parent;
        (n.r *= t), e && ((n.x = e.x + t * n.x), (n.y = e.y + t * n.y));
      };
    }
    var j = function(t) {
        (t.x0 = Math.round(t.x0)),
          (t.y0 = Math.round(t.y0)),
          (t.x1 = Math.round(t.x1)),
          (t.y1 = Math.round(t.y1));
      },
      L = function(t, n, e, r, i) {
        for (
          var o,
            u = t.children,
            a = -1,
            c = u.length,
            f = t.value && (r - n) / t.value;
          ++a < c;

        )
          ((o = u[a]).y0 = e),
            (o.y1 = i),
            (o.x0 = n),
            (o.x1 = n += o.value * f);
      },
      P = function() {
        var t = 1,
          n = 1,
          e = 0,
          r = !1;
        function i(i) {
          var o = i.height + 1;
          return (
            (i.x0 = i.y0 = e),
            (i.x1 = t),
            (i.y1 = n / o),
            i.eachBefore(
              (function(t, n) {
                return function(r) {
                  r.children &&
                    L(
                      r,
                      r.x0,
                      (t * (r.depth + 1)) / n,
                      r.x1,
                      (t * (r.depth + 2)) / n
                    );
                  var i = r.x0,
                    o = r.y0,
                    u = r.x1 - e,
                    a = r.y1 - e;
                  u < i && (i = u = (i + u) / 2),
                    a < o && (o = a = (o + a) / 2),
                    (r.x0 = i),
                    (r.y0 = o),
                    (r.x1 = u),
                    (r.y1 = a);
                };
              })(n, o)
            ),
            r && i.eachBefore(j),
            i
          );
        }
        return (
          (i.round = function(t) {
            return arguments.length ? ((r = !!t), i) : r;
          }),
          (i.size = function(e) {
            return arguments.length ? ((t = +e[0]), (n = +e[1]), i) : [t, n];
          }),
          (i.padding = function(t) {
            return arguments.length ? ((e = +t), i) : e;
          }),
          i
        );
      },
      B = '$',
      F = {depth: -1},
      z = {};
    function H(t) {
      return t.id;
    }
    function q(t) {
      return t.parentId;
    }
    var $ = function() {
      var t = H,
        n = q;
      function e(e) {
        var r,
          i,
          o,
          u,
          a,
          c,
          f,
          s = e.length,
          d = new Array(s),
          p = {};
        for (i = 0; i < s; ++i)
          (r = e[i]),
            (a = d[i] = new h(r)),
            null != (c = t(r, i, e)) &&
              (c += '') &&
              (p[(f = B + (a.id = c))] = f in p ? z : a);
        for (i = 0; i < s; ++i)
          if (((a = d[i]), null != (c = n(e[i], i, e)) && (c += ''))) {
            if (!(u = p[B + c])) throw new Error('missing: ' + c);
            if (u === z) throw new Error('ambiguous: ' + c);
            u.children ? u.children.push(a) : (u.children = [a]),
              (a.parent = u);
          } else {
            if (o) throw new Error('multiple roots');
            o = a;
          }
        if (!o) throw new Error('no root');
        if (
          ((o.parent = F),
          o
            .eachBefore(function(t) {
              (t.depth = t.parent.depth + 1), --s;
            })
            .eachBefore(l),
          (o.parent = null),
          s > 0)
        )
          throw new Error('cycle');
        return o;
      }
      return (
        (e.id = function(n) {
          return arguments.length ? ((t = A(n)), e) : t;
        }),
        (e.parentId = function(t) {
          return arguments.length ? ((n = A(t)), e) : n;
        }),
        e
      );
    };
    function W(t, n) {
      return t.parent === n.parent ? 1 : 2;
    }
    function G(t) {
      var n = t.children;
      return n ? n[0] : t.t;
    }
    function V(t) {
      var n = t.children;
      return n ? n[n.length - 1] : t.t;
    }
    function Z(t, n, e) {
      var r = e / (n.i - t.i);
      (n.c -= r), (n.s += e), (t.c += r), (n.z += e), (n.m += e);
    }
    function X(t, n, e) {
      return t.a.parent === n.parent ? t.a : e;
    }
    function K(t, n) {
      (this._ = t),
        (this.parent = null),
        (this.children = null),
        (this.A = null),
        (this.a = this),
        (this.z = 0),
        (this.m = 0),
        (this.c = 0),
        (this.s = 0),
        (this.t = null),
        (this.i = n);
    }
    K.prototype = Object.create(h.prototype);
    var J = function() {
        var t = W,
          n = 1,
          e = 1,
          r = null;
        function i(i) {
          var c = (function(t) {
            for (var n, e, r, i, o, u = new K(t, 0), a = [u]; (n = a.pop()); )
              if ((r = n._.children))
                for (
                  n.children = new Array((o = r.length)), i = o - 1;
                  i >= 0;
                  --i
                )
                  a.push((e = n.children[i] = new K(r[i], i))), (e.parent = n);
            return ((u.parent = new K(null, 0)).children = [u]), u;
          })(i);
          if ((c.eachAfter(o), (c.parent.m = -c.z), c.eachBefore(u), r))
            i.eachBefore(a);
          else {
            var f = i,
              s = i,
              l = i;
            i.eachBefore(function(t) {
              t.x < f.x && (f = t),
                t.x > s.x && (s = t),
                t.depth > l.depth && (l = t);
            });
            var h = f === s ? 1 : t(f, s) / 2,
              d = h - f.x,
              p = n / (s.x + h + d),
              _ = e / (l.depth || 1);
            i.eachBefore(function(t) {
              (t.x = (t.x + d) * p), (t.y = t.depth * _);
            });
          }
          return i;
        }
        function o(n) {
          var e = n.children,
            r = n.parent.children,
            i = n.i ? r[n.i - 1] : null;
          if (e) {
            !(function(t) {
              for (
                var n, e = 0, r = 0, i = t.children, o = i.length;
                --o >= 0;

              )
                ((n = i[o]).z += e), (n.m += e), (e += n.s + (r += n.c));
            })(n);
            var o = (e[0].z + e[e.length - 1].z) / 2;
            i ? ((n.z = i.z + t(n._, i._)), (n.m = n.z - o)) : (n.z = o);
          } else i && (n.z = i.z + t(n._, i._));
          n.parent.A = (function(n, e, r) {
            if (e) {
              for (
                var i,
                  o = n,
                  u = n,
                  a = e,
                  c = o.parent.children[0],
                  f = o.m,
                  s = u.m,
                  l = a.m,
                  h = c.m;
                (a = V(a)), (o = G(o)), a && o;

              )
                (c = G(c)),
                  ((u = V(u)).a = n),
                  (i = a.z + l - o.z - f + t(a._, o._)) > 0 &&
                    (Z(X(a, n, r), n, i), (f += i), (s += i)),
                  (l += a.m),
                  (f += o.m),
                  (h += c.m),
                  (s += u.m);
              a && !V(u) && ((u.t = a), (u.m += l - s)),
                o && !G(c) && ((c.t = o), (c.m += f - h), (r = n));
            }
            return r;
          })(n, i, n.parent.A || r[0]);
        }
        function u(t) {
          (t._.x = t.z + t.parent.m), (t.m += t.parent.m);
        }
        function a(t) {
          (t.x *= n), (t.y = t.depth * e);
        }
        return (
          (i.separation = function(n) {
            return arguments.length ? ((t = n), i) : t;
          }),
          (i.size = function(t) {
            return arguments.length
              ? ((r = !1), (n = +t[0]), (e = +t[1]), i)
              : r
              ? null
              : [n, e];
          }),
          (i.nodeSize = function(t) {
            return arguments.length
              ? ((r = !0), (n = +t[0]), (e = +t[1]), i)
              : r
              ? [n, e]
              : null;
          }),
          i
        );
      },
      Q = function(t, n, e, r, i) {
        for (
          var o,
            u = t.children,
            a = -1,
            c = u.length,
            f = t.value && (i - e) / t.value;
          ++a < c;

        )
          ((o = u[a]).x0 = n),
            (o.x1 = r),
            (o.y0 = e),
            (o.y1 = e += o.value * f);
      },
      tt = (1 + Math.sqrt(5)) / 2;
    function nt(t, n, e, r, i, o) {
      for (
        var u,
          a,
          c,
          f,
          s,
          l,
          h,
          d,
          p,
          _,
          v,
          g = [],
          b = n.children,
          y = 0,
          m = 0,
          x = b.length,
          w = n.value;
        y < x;

      ) {
        (c = i - e), (f = o - r);
        do {
          s = b[m++].value;
        } while (!s && m < x);
        for (
          l = h = s,
            v = s * s * (_ = Math.max(f / c, c / f) / (w * t)),
            p = Math.max(h / v, v / l);
          m < x;
          ++m
        ) {
          if (
            ((s += a = b[m].value),
            a < l && (l = a),
            a > h && (h = a),
            (v = s * s * _),
            (d = Math.max(h / v, v / l)) > p)
          ) {
            s -= a;
            break;
          }
          p = d;
        }
        g.push((u = {value: s, dice: c < f, children: b.slice(y, m)})),
          u.dice
            ? L(u, e, r, i, w ? (r += (f * s) / w) : o)
            : Q(u, e, r, w ? (e += (c * s) / w) : i, o),
          (w -= s),
          (y = m);
      }
      return g;
    }
    var et = (function t(n) {
        function e(t, e, r, i, o) {
          nt(n, t, e, r, i, o);
        }
        return (
          (e.ratio = function(n) {
            return t((n = +n) > 1 ? n : 1);
          }),
          e
        );
      })(tt),
      rt = function() {
        var t = et,
          n = !1,
          e = 1,
          r = 1,
          i = [0],
          o = S,
          u = S,
          a = S,
          c = S,
          f = S;
        function s(t) {
          return (
            (t.x0 = t.y0 = 0),
            (t.x1 = e),
            (t.y1 = r),
            t.eachBefore(l),
            (i = [0]),
            n && t.eachBefore(j),
            t
          );
        }
        function l(n) {
          var e = i[n.depth],
            r = n.x0 + e,
            s = n.y0 + e,
            l = n.x1 - e,
            h = n.y1 - e;
          l < r && (r = l = (r + l) / 2),
            h < s && (s = h = (s + h) / 2),
            (n.x0 = r),
            (n.y0 = s),
            (n.x1 = l),
            (n.y1 = h),
            n.children &&
              ((e = i[n.depth + 1] = o(n) / 2),
              (r += f(n) - e),
              (s += u(n) - e),
              (l -= a(n) - e) < r && (r = l = (r + l) / 2),
              (h -= c(n) - e) < s && (s = h = (s + h) / 2),
              t(n, r, s, l, h));
        }
        return (
          (s.round = function(t) {
            return arguments.length ? ((n = !!t), s) : n;
          }),
          (s.size = function(t) {
            return arguments.length ? ((e = +t[0]), (r = +t[1]), s) : [e, r];
          }),
          (s.tile = function(n) {
            return arguments.length ? ((t = A(n)), s) : t;
          }),
          (s.padding = function(t) {
            return arguments.length
              ? s.paddingInner(t).paddingOuter(t)
              : s.paddingInner();
          }),
          (s.paddingInner = function(t) {
            return arguments.length
              ? ((o = 'function' == typeof t ? t : O(+t)), s)
              : o;
          }),
          (s.paddingOuter = function(t) {
            return arguments.length
              ? s
                  .paddingTop(t)
                  .paddingRight(t)
                  .paddingBottom(t)
                  .paddingLeft(t)
              : s.paddingTop();
          }),
          (s.paddingTop = function(t) {
            return arguments.length
              ? ((u = 'function' == typeof t ? t : O(+t)), s)
              : u;
          }),
          (s.paddingRight = function(t) {
            return arguments.length
              ? ((a = 'function' == typeof t ? t : O(+t)), s)
              : a;
          }),
          (s.paddingBottom = function(t) {
            return arguments.length
              ? ((c = 'function' == typeof t ? t : O(+t)), s)
              : c;
          }),
          (s.paddingLeft = function(t) {
            return arguments.length
              ? ((f = 'function' == typeof t ? t : O(+t)), s)
              : f;
          }),
          s
        );
      },
      it = function(t, n, e, r, i) {
        var o,
          u,
          a = t.children,
          c = a.length,
          f = new Array(c + 1);
        for (f[0] = u = o = 0; o < c; ++o) f[o + 1] = u += a[o].value;
        !(function t(n, e, r, i, o, u, c) {
          if (n >= e - 1) {
            var s = a[n];
            return (s.x0 = i), (s.y0 = o), (s.x1 = u), void (s.y1 = c);
          }
          var l = f[n],
            h = r / 2 + l,
            d = n + 1,
            p = e - 1;
          for (; d < p; ) {
            var _ = (d + p) >>> 1;
            f[_] < h ? (d = _ + 1) : (p = _);
          }
          h - f[d - 1] < f[d] - h && n + 1 < d && --d;
          var v = f[d] - l,
            g = r - v;
          if (u - i > c - o) {
            var b = (i * g + u * v) / r;
            t(n, d, v, i, o, b, c), t(d, e, g, b, o, u, c);
          } else {
            var y = (o * g + c * v) / r;
            t(n, d, v, i, o, u, y), t(d, e, g, i, y, u, c);
          }
        })(0, c, t.value, n, e, r, i);
      },
      ot = function(t, n, e, r, i) {
        (1 & t.depth ? Q : L)(t, n, e, r, i);
      },
      ut = (function t(n) {
        function e(t, e, r, i, o) {
          if ((u = t._squarify) && u.ratio === n)
            for (
              var u, a, c, f, s, l = -1, h = u.length, d = t.value;
              ++l < h;

            ) {
              for (
                c = (a = u[l]).children, f = a.value = 0, s = c.length;
                f < s;
                ++f
              )
                a.value += c[f].value;
              a.dice
                ? L(a, e, r, i, (r += ((o - r) * a.value) / d))
                : Q(a, e, r, (e += ((i - e) * a.value) / d), o),
                (d -= a.value);
            }
          else (t._squarify = u = nt(n, t, e, r, i, o)), (u.ratio = n);
        }
        return (
          (e.ratio = function(n) {
            return t((n = +n) > 1 ? n : 1);
          }),
          e
        );
      })(tt);
    e.d(n, 'cluster', function() {
      return u;
    }),
      e.d(n, 'hierarchy', function() {
        return c;
      }),
      e.d(n, 'pack', function() {
        return k;
      }),
      e.d(n, 'packSiblings', function() {
        return N;
      }),
      e.d(n, 'packEnclose', function() {
        return p;
      }),
      e.d(n, 'partition', function() {
        return P;
      }),
      e.d(n, 'stratify', function() {
        return $;
      }),
      e.d(n, 'tree', function() {
        return J;
      }),
      e.d(n, 'treemap', function() {
        return rt;
      }),
      e.d(n, 'treemapBinary', function() {
        return it;
      }),
      e.d(n, 'treemapDice', function() {
        return L;
      }),
      e.d(n, 'treemapSlice', function() {
        return Q;
      }),
      e.d(n, 'treemapSliceDice', function() {
        return ot;
      }),
      e.d(n, 'treemapSquarify', function() {
        return et;
      }),
      e.d(n, 'treemapResquarify', function() {
        return ut;
      });
  },
  function(t, n, e) {
    'use strict';
    e.r(n);
    var r = e(5),
      i = e(3),
      o = e(4);
    const u = Object.assign({}, e(9), e(1), e(23));
    function a() {
      this.totalMetric = u.sum(this.dataset, t => t[this.metricAccessor]);
      let t = [];
      this.dimensionsAccessor.forEach(n => {
        t.push(t => t[n]);
      });
      const n = u.rollup(
          this.dataset,
          t => u.sum(t, t => t[this.metricAccessor]),
          ...t
        ),
        e = [],
        r = ['root'];
      let i = 0,
        o = 0,
        a = [0];
      return (
        (function t(n) {
          i++;
          const u = Array.from(n);
          u.forEach((n, c) => {
            const f = {};
            o++,
              (f.id = o),
              (f.parentID = a[i - 1]),
              (f.parent = r[i - 1]),
              (f.key = n[0]),
              (f.level = i),
              n.forEach((e, u) => {
                1 == u &&
                  (e instanceof Map
                    ? ((r[i] = n[0]), (a[i] = o), t(e))
                    : (f.value = e));
              }),
              e.push(f),
              c == u.length - 1 && i--;
          });
        })(n),
        e.unshift({id: 0}),
        u
          .stratify()
          .id(t => t.id)
          .parentId(t => t.parentID)(e)
      );
    }
    const c = Object.assign({}, e(1));
    const f = Object.assign({}, e(9), e(1), e(6), e(21), e(2), e(14));
    function s() {
      const t = this,
        n = this.partitionData(this.treeData);
      n.each(t => {
        (t.current = t),
          (t.angle = t.x1 - (t.x1 - t.x0) / 2),
          (t.radius = t.y1 - (t.y1 - t.y0) / 2);
      });
      const e = this.g
        .append('g')
        .attr('fill-opacity', 0.8)
        .selectAll('path')
        .data(n.descendants())
        .enter()
        .append('path')
        .attr('fill', t => {
          for (; t.depth > 1; ) t = t.parent;
          return t.depth ? this.colorScale(t.data.id) : 'none';
        })
        .attr('fill-opacity', t => (t.children ? 0.6 : 0.4))
        .attr('d', this.arc)
        .attr('data-test', t => t.data.id)
        .attr('id', (t, n) => `cp-${n}`)
        .on('mouseover', (n, e, r) => {
          !(function(n, e, r) {
            let i = n.angle,
              o = n.radius;
            t.locStorage.state.clickHistory.length > 0 &&
              ((i = n.newAngle), (o = n.newRadius));
            const u = f
                .select('#tooltip')
                .style('max-width', `${t.dimensions.boundedRadius}px`),
              a =
                0 == Math.round((100 * n.value) / n.parent.value)
                  ? '< 1%'
                  : f.format('.0%')(n.value / n.parent.value),
              c =
                0 == Math.round((100 * n.value) / t.totalMetric)
                  ? '< 1%'
                  : f.format('.0%')(n.value / t.totalMetric);
            let s = `${t.metricAccessor}: ${n.value} `;
            (s += `(${a}`), n.data.depth > 1 && (s += ` | ${c}`);
            (s += ')'),
              u
                .select('#title')
                .text(
                  `${t.dimensionsAccessor[n.depth - 1]}: ${n.data.data.key}`
                ),
              u.select('#count').text(s);
            const l = u.node().offsetWidth,
              h = u.node().offsetHeight,
              d =
                Math.cos(i + Math.PI / 2) * t.dimensions.tooltipRadius +
                t.dimensions.width / 2,
              p =
                Math.sin(i + Math.PI / 2) * t.dimensions.tooltipRadius +
                t.dimensions.height / 2;
            u.style('opacity', 0.8).style(
              'transform',
              `translate(${d - t.horizontalOffset - l / 2}px, ${p - h - 10}px)`
            );
            const _ =
                Math.cos(i - Math.PI / 2) * o +
                t.dimensions.width / 2 -
                t.dimensions.width / 2,
              v =
                Math.sin(i - Math.PI / 2) * o +
                t.dimensions.height / 2 -
                t.dimensions.height / 2;
            t.g
              .append('circle')
              .attr('class', 'tooltip-dot')
              .attr('cx', _)
              .attr('cy', v)
              .attr('r', 3)
              .style('fill', 'black')
              .style('opacity', 0.7);
            const g = d - t.dimensions.width / 2,
              b = p - t.dimensions.height / 2 - 10;
            t.wrapper
              .append('line')
              .attr('class', 'tooltip-line')
              .attr('x1', g)
              .attr('y1', b)
              .attr('x2', _)
              .attr('y2', v)
              .attr('stroke-width', 1)
              .attr('stroke', 'black')
              .style('opacity', 0.7);
          })(n);
        })
        .on('mouseout', l);
      e
        .filter(t => t.children)
        .style('cursor', 'pointer')
        .on('click', n => {
          if (
            ((function(n) {
              const e = t.getParentArray(n);
              let r = 1;
              t.clickHistory.forEach(t => {
                const n = t.toString(),
                  i = e.toString();
                n == i && (r = -1);
              }),
                1 == r ? t.clickHistory.push(e) : t.clickHistory.pop(),
                i.a.saveLocStorage(t, 'clickHistory', t.clickHistory);
            })(n),
            0 == t.filterEnabled)
          )
            u(n, 0);
          else {
            const e = o(t, n);
            !(function(n, e) {
              const r = t.dimensionsAccessorId.slice(0, e),
                i = t.getParentArray(n, 'key'),
                o = [];
              o.push(i.slice(0, e)), t.filterDashbord(r, o);
            })(e, e.depth);
          }
        }),
        (this.clickHistory = this.locStorage.state.clickHistory);
      const r = this.clickHistory.length;
      function o(t, e) {
        if (t.clickHistory.length > 0) {
          const n = t.clickHistory[t.clickHistory.length - 1];
          return t.getNodeFromFunnel(n);
        }
        return n;
      }
      function u(r, i) {
        const u = o(t);
        n.each(t => {
          (t.target = {
            x0:
              2 *
              Math.max(0, Math.min(1, (t.x0 - u.x0) / (u.x1 - u.x0))) *
              Math.PI,
            x1:
              2 *
              Math.max(0, Math.min(1, (t.x1 - u.x0) / (u.x1 - u.x0))) *
              Math.PI,
            y0: Math.max(0, t.y0 - u.y0),
            y1: Math.max(0, t.y1 - u.y0),
          }),
            (t.newAngle = t.target.x1 - (t.target.x1 - t.target.x0) / 2),
            (t.newRadius = t.target.y1 - (t.target.y1 - t.target.y0) / 2);
        });
        t.g.transition().duration(10);
        e
          .transition()
          .duration(t.AnimDuration)
          .tween('data', t => {
            const n = f.interpolate(t.current, t.target);
            return e => (t.current = n(e));
          })
          .attrTween('d', n => () => t.arc(n.current)),
          t.buildLegend(u, u.depth);
      }
      r > 0 ? u(this.clickHistory[r - 1], 1) : this.buildLegend(n, 0);
    }
    function l() {
      f
        .select('#tooltip')
        .style('opacity', 0)
        .style('transform', 'translate(-10000px, -10000px)'),
        f.select('.tooltip-line').remove(),
        f.selectAll('.tooltip-dot').remove();
    }
    const h = Object.assign({}, e(9), e(1));
    var d = function(t, n) {
      if (
        (h.select('#legend').remove(),
        h.select('#breadcrumb').remove(),
        this.legend)
      ) {
        const e = 20,
          r = Math.floor((2 * this.dimensions.boundedRadius) / e);
        let i = t.children.length;
        i > r && (i = r);
        const o = i * e - this.dimensions.boundedRadius,
          u = this.wrapper
            .append('g')
            .attr('id', 'breadcrumb')
            .selectAll('g')
            .data(this.dimensionsAccessor.filter((t, e) => e <= n))
            .enter()
            .append('g')
            .attr('id', (t, n) => `breadcrumb-${n}`)
            .style(
              'transform',
              (t, r) =>
                `translate(${this.dimensions.boundedRadius + 50}px, ${r * e -
                  o -
                  (n + 1.5) * e}px)`
            ),
          a = this.getParentArray(t, 'key');
        a.push(''),
          u
            .append('text')
            .attr('class', 'breadcrumb-text')
            .attr('x', 21)
            .attr('y', 13)
            .attr('fill', this.fontColor)
            .attr('fill-opacity', this.fontOpacity)
            .text((t, n) => `${t}: ${a[n]}`);
        const c = this.wrapper
          .append('g')
          .attr('id', 'legend')
          .selectAll('g')
          .data(
            t.descendants().filter((t, e) => e < r && t.data.depth == n + 1)
          )
          .enter()
          .append('g')
          .attr('id', t => `legend-${t.data.id}`)
          .style(
            'transform',
            (t, n) =>
              `translate(${this.dimensions.boundedRadius + 50}px, ${n * e -
                o}px)`
          );
        c
          .append('rect')
          .attr('x', 0)
          .attr('y', 0)
          .attr('width', 15)
          .attr('height', 15)
          .attr('fill', 0 == n ? t => this.colorScale(t.data.id) : 'black')
          .attr('fill-opacity', 0 == n ? 0.6 : 0.1),
          c
            .append('text')
            .attr('class', 'legend-text')
            .attr('x', 21)
            .attr('y', 13)
            .attr('fill', this.fontColor)
            .attr('fill-opacity', this.fontOpacity)
            .text(t => t.data.data.key);
      }
    };
    const p = Object.assign({}, e(9), e(1), e(10), e(20), e(2), e(22), e(14));
    class _ {
      constructor(t, n) {
        (this.DOMtarget = t),
          (this.dataset = n),
          (this.treeData = null),
          (this.colorScheme = 'interpolateRainbow'),
          (this.colorScale = null),
          (this.arc = null),
          (this.dimensionsAccessor = ['dimension']),
          (this.metricAccessor = 'COUNT'),
          (this.totalMetric = null),
          (this.fontColor = 'slateGrey'),
          (this.fontOpacity = 1),
          (this.legend = !0),
          (this.colorSchemeReversed = !1),
          (this.horizontalOffset = 0),
          (this.interactionId = null),
          (this.isFilterData = !1),
          (this.filterEnabled = !1),
          (this.AnimDuration = 750),
          (this.localStorageId = 'd3_sunburst_v1.0'),
          (this.locStorage = null);
      }
      init() {
        (this.dimensions = this.getDimensions(this.DOMtarget)),
          null === localStorage.getItem(this.localStorageId)
            ? ((this.locStorage = {}),
              (this.locStorage.state = {}),
              (this.locStorage.state.clickHistory = []),
              window.localStorage.setItem(
                this.localStorageId,
                JSON.stringify(this.locStorage)
              ))
            : ((this.locStorage = JSON.parse(
                localStorage.getItem(this.localStorageId)
              )),
              0 == this.isFilterData &&
                i.a.saveLocStorage(this, 'clickHistory', [])),
          (this.treeData = this.prepareData()),
          this.initScales();
      }
      initScales() {
        let t;
        (t = this.colorSchemeReversed
          ? p
              .quantize(p[this.colorScheme], this.treeData.children.length + 1)
              .reverse()
          : p.quantize(p[this.colorScheme], this.treeData.children.length + 1)),
          (this.colorScale = p.scaleOrdinal().range(t)),
          (this.arc = p
            .arc()
            .startAngle(t => t.x0)
            .endAngle(t => t.x1)
            .padAngle(t => Math.min((t.x1 - t.x0) / 2, 0.005))
            .padRadius(this.dimensions.boundedRadius / 2)
            .innerRadius(t => t.y0)
            .outerRadius(t => t.y1 - 1));
      }
      draw() {
        this.init(), this.drawBase(), this.drawContent();
      }
    }
    Object.assign(_.prototype, {
      getDimensions: function(t) {
        const n = i.a.getMaxDimensions(t),
          e = {
            width: n.w,
            height: n.h,
            radius: n.max / 2,
            margin: {top: 15, right: 15, bottom: 15, left: 15},
          };
        return (
          1 == this.legend &&
            ((e.margin.right = e.width / 6),
            (this.horizontalOffset = e.margin.right - e.margin.left)),
          (e.boundedWidth = e.radius - e.margin.left / 2 - e.margin.right / 2),
          (e.boundedHeight = e.radius - e.margin.top - e.margin.bottom),
          (e.boundedRadius =
            e.boundedWidth > e.boundedHeight
              ? e.boundedHeight
              : e.boundedWidth),
          (e.tooltipRadius = 0.4 * e.boundedRadius),
          e
        );
      },
      prepareData: a,
      partitionData: function(t) {
        return u.partition().size([2 * Math.PI, this.dimensions.boundedRadius])(
          u
            .hierarchy(t)
            .sum(t => (t.children ? 0 : t.data.value))
            .sort((t, n) => n.value - t.value)
        );
      },
      getParentArray: function(t, n = 'id') {
        const e = [];
        return (
          (function t(r) {
            r.parent &&
              (r.data.data.id >= 0 && e.push(r.data.data[n]), t(r.parent));
          })(t),
          e.reverse()
        );
      },
      getNodeFromFunnel: function(t) {
        let n = this.partitionData(this.treeData);
        return (
          (function e(r) {
            const i = n.children;
            for (let o in i) {
              const u = i[o].data.data.id;
              if (t[r] === u) {
                if (((n = i[o]), !(r + 1 < t.length))) return n;
                e(r + 1);
                break;
              }
            }
          })(0),
          n
        );
      },
      drawBase: function() {
        (this.wrapper = c
          .select(`#${this.DOMtarget}`)
          .append('svg')
          .attr('width', this.dimensions.width)
          .attr('height', this.dimensions.height)
          .attr('x', 0)
          .attr('y', 0)
          .attr('class', 'wrapper')
          .attr('id', 'd3-root')
          .attr(
            'viewBox',
            `-${this.dimensions.width / 2 - this.horizontalOffset} -${this
              .dimensions.height / 2} ${this.dimensions.width} ${
              this.dimensions.height
            }`
          )),
          (this.g = this.wrapper.append('g'));
      },
      drawContent: s,
      hideToolTip: l,
      buildLegend: d,
      filterDashbord: function(t, n) {
        let e = {concepts: t, values: n};
        if (window.location.hostname == this.LOCAL)
          t.length > 0
            ? (console.log(
                'Following information is sent to filter in production'
              ),
              console.log(this.interactionId),
              console.log(e))
            : console.log('Clear Data Command will be sent to DS'),
            location.reload();
        else {
          const n = r.InteractionType.FILTER;
          t.length > 0
            ? r.sendInteraction(this.interactionId, n, e)
            : r.clearInteraction(this.interactionId, n);
        }
      },
    });
    e(16);
    var v = e(15);
    const g = Object.assign({}, e(10), e(1)),
      b = 'localhost',
      y = 450;
    function m(t) {
      if ((x(), i.a.getMaxDimensions('body').max < y)) return void M(o.f, o.g);
      const n = (function(t) {
        const n = t.tables.DEFAULT;
        if (
          (console.log(`Dataset contains ${n.length} records`), 0 == n.length)
        )
          return;
        const e = t.fields.dimension.concat(t.fields.metric),
          r = [];
        n.map(t => {
          const n = t.dimension.concat(t.metric),
            i = {};
          e.forEach((t, e) => {
            i[t.name] = n[e];
          }),
            r.push(i);
        });
        const i = {};
        return (
          (i.tables = r),
          (i.fields = e),
          (i.style = t.style),
          (i.theme = t.theme),
          (i.interactions = t.interactions),
          i
        );
      })(t);
      if (n) {
        !(function(t) {
          const n = t
            .append('div')
            .attr('id', 'tooltip')
            .attr('class', 'tooltip');
          n.append('span').attr('id', 'title'),
            n.append('span').attr('id', 'count');
        })(x());
        const e = new _('body', n.tables);
        (e.metricAccessor = t.fields.metric[0].name),
          (e.dimensionsAccessor = []),
          t.fields.dimension.forEach((t, n) => {
            e.dimensionsAccessor[n] = t.name;
          }),
          (e.colorScheme = i.a.getStyleValue(n.style, 'arcColors')),
          (e.colorSchemeReversed = i.a.getStyleValue(
            n.style,
            'colorSchemeReversed'
          )),
          (e.fontColor = i.a.getStyleValue(n.style, 'fontColor').color),
          (e.fontOpacity = i.a.getStyleValue(n.style, 'fontColor').opacity),
          (e.legend = i.a.getStyleValue(n.style, 'isLegend')),
          (e.dimensionsAccessorId = []),
          t.fields.dimension.forEach((t, n) => {
            e.dimensionsAccessorId[n] = t.id;
          });
        const r = 'sunburstFilter';
        (e.interactionId = r), (e.LOCAL = b);
        const o = n.interactions[r].value.data;
        e.isFilterData = 'undefined' !== o && void 0 !== o;
        const u = n.interactions[r].value.type;
        'undefined' === u || void 0 === u
          ? ((e.filterEnabled = !1), (e.AnimDuration = 750))
          : ((e.filterEnabled = !0), (e.AnimDuration = 0)),
          e.draw();
      } else M(o.d, o.a);
    }
    function x() {
      const t = g.select('body').attr('id', 'body');
      return (
        g
          .select('body')
          .selectAll('svg')
          .remove(),
        g.select('#error').remove(),
        g.select('#tooltip').remove(),
        t
      );
    }
    function w(t) {
      if (b) window.addEventListener('resize', v.debounce(C, 300)), m(t);
      else
        try {
          m(t);
        } catch (t) {
          M(o.b, `${o.c} ${t}`);
        }
    }
    async function C() {
      if (window.location.hostname == b) {
        w(await g.json('./data/DS-data-documentation.json'));
      } else r.subscribeToData(w, {transform: r.objectTransform});
    }
    function M(t, n) {
      const e = x();
      i.a.renderErrorMessage(e, t, n);
    }
    C();
  },
]);
