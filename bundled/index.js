// node_modules/workers-og/dist/index.js
import ly from "./ef4866ecae192fd87727067cf2c0c0cf9fb8b020-yoga-ZMNYPE6Z.wasm";
import fy from "./8b09a8aa3d916dc11b1a9d60545210c131c1ae36-resvg-LFIOYO65.wasm";
var Xl = Object.create;
var Ka = Object.defineProperty;
var ql = Object.getOwnPropertyDescriptor;
var Yl = Object.getOwnPropertyNames;
var Zl = Object.getPrototypeOf;
var Jl = Object.prototype.hasOwnProperty;
var et = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports);
var Kl = (e, t, r, n) => {
  if (t && typeof t == "object" || typeof t == "function")
    for (let i of Yl(t))
      !Jl.call(e, i) && i !== r && Ka(e, i, { get: () => t[i], enumerable: !(n = ql(t, i)) || n.enumerable });
  return e;
};
var St = (e, t, r) => (r = e != null ? Xl(Zl(e)) : {}, Kl(t || !e || !e.__esModule ? Ka(r, "default", { value: e, enumerable: true }) : r, e));
var lo = et((dy, uo) => {
  var di = 0, ro = -3;
  function Ir() {
    this.table = new Uint16Array(16), this.trans = new Uint16Array(288);
  }
  function Ql(e, t) {
    this.source = e, this.sourceIndex = 0, this.tag = 0, this.bitcount = 0, this.dest = t, this.destLen = 0, this.ltree = new Ir(), this.dtree = new Ir();
  }
  var no = new Ir(), io = new Ir(), vi = new Uint8Array(30), gi = new Uint16Array(30), ao = new Uint8Array(30), oo = new Uint16Array(30), ef = new Uint8Array([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]), Qa = new Ir(), Mt = new Uint8Array(320);
  function so(e, t, r, n) {
    var i, a;
    for (i = 0; i < r; ++i)
      e[i] = 0;
    for (i = 0; i < 30 - r; ++i)
      e[i + r] = i / r | 0;
    for (a = n, i = 0; i < 30; ++i)
      t[i] = a, a += 1 << e[i];
  }
  function tf(e, t) {
    var r;
    for (r = 0; r < 7; ++r)
      e.table[r] = 0;
    for (e.table[7] = 24, e.table[8] = 152, e.table[9] = 112, r = 0; r < 24; ++r)
      e.trans[r] = 256 + r;
    for (r = 0; r < 144; ++r)
      e.trans[24 + r] = r;
    for (r = 0; r < 8; ++r)
      e.trans[168 + r] = 280 + r;
    for (r = 0; r < 112; ++r)
      e.trans[176 + r] = 144 + r;
    for (r = 0; r < 5; ++r)
      t.table[r] = 0;
    for (t.table[5] = 32, r = 0; r < 32; ++r)
      t.trans[r] = r;
  }
  var eo = new Uint16Array(16);
  function pi(e, t, r, n) {
    var i, a;
    for (i = 0; i < 16; ++i)
      e.table[i] = 0;
    for (i = 0; i < n; ++i)
      e.table[t[r + i]]++;
    for (e.table[0] = 0, a = 0, i = 0; i < 16; ++i)
      eo[i] = a, a += e.table[i];
    for (i = 0; i < n; ++i)
      t[r + i] && (e.trans[eo[t[r + i]]++] = i);
  }
  function rf(e) {
    e.bitcount-- || (e.tag = e.source[e.sourceIndex++], e.bitcount = 7);
    var t = e.tag & 1;
    return e.tag >>>= 1, t;
  }
  function Gt(e, t, r) {
    if (!t)
      return r;
    for (; e.bitcount < 24; )
      e.tag |= e.source[e.sourceIndex++] << e.bitcount, e.bitcount += 8;
    var n = e.tag & 65535 >>> 16 - t;
    return e.tag >>>= t, e.bitcount -= t, n + r;
  }
  function hi(e, t) {
    for (; e.bitcount < 24; )
      e.tag |= e.source[e.sourceIndex++] << e.bitcount, e.bitcount += 8;
    var r = 0, n = 0, i = 0, a = e.tag;
    do
      n = 2 * n + (a & 1), a >>>= 1, ++i, r += t.table[i], n -= t.table[i];
    while (n >= 0);
    return e.tag = a, e.bitcount -= i, t.trans[r + n];
  }
  function nf(e, t, r) {
    var n, i, a, o, u, s;
    for (n = Gt(e, 5, 257), i = Gt(e, 5, 1), a = Gt(e, 4, 4), o = 0; o < 19; ++o)
      Mt[o] = 0;
    for (o = 0; o < a; ++o) {
      var l = Gt(e, 3, 0);
      Mt[ef[o]] = l;
    }
    for (pi(Qa, Mt, 0, 19), u = 0; u < n + i; ) {
      var f = hi(e, Qa);
      switch (f) {
        case 16:
          var c = Mt[u - 1];
          for (s = Gt(e, 2, 3); s; --s)
            Mt[u++] = c;
          break;
        case 17:
          for (s = Gt(e, 3, 3); s; --s)
            Mt[u++] = 0;
          break;
        case 18:
          for (s = Gt(e, 7, 11); s; --s)
            Mt[u++] = 0;
          break;
        default:
          Mt[u++] = f;
          break;
      }
    }
    pi(t, Mt, 0, n), pi(r, Mt, n, i);
  }
  function to(e, t, r) {
    for (; ; ) {
      var n = hi(e, t);
      if (n === 256)
        return di;
      if (n < 256)
        e.dest[e.destLen++] = n;
      else {
        var i, a, o, u;
        for (n -= 257, i = Gt(e, vi[n], gi[n]), a = hi(e, r), o = e.destLen - Gt(e, ao[a], oo[a]), u = o; u < o + i; ++u)
          e.dest[e.destLen++] = e.dest[u];
      }
    }
  }
  function af(e) {
    for (var t, r, n; e.bitcount > 8; )
      e.sourceIndex--, e.bitcount -= 8;
    if (t = e.source[e.sourceIndex + 1], t = 256 * t + e.source[e.sourceIndex], r = e.source[e.sourceIndex + 3], r = 256 * r + e.source[e.sourceIndex + 2], t !== (~r & 65535))
      return ro;
    for (e.sourceIndex += 4, n = t; n; --n)
      e.dest[e.destLen++] = e.source[e.sourceIndex++];
    return e.bitcount = 0, di;
  }
  function of(e, t) {
    var r = new Ql(e, t), n, i, a;
    do {
      switch (n = rf(r), i = Gt(r, 2, 0), i) {
        case 0:
          a = af(r);
          break;
        case 1:
          a = to(r, no, io);
          break;
        case 2:
          nf(r, r.ltree, r.dtree), a = to(r, r.ltree, r.dtree);
          break;
        default:
          a = ro;
      }
      if (a !== di)
        throw new Error("Data error");
    } while (!n);
    return r.destLen < r.dest.length ? typeof r.dest.slice == "function" ? r.dest.slice(0, r.destLen) : r.dest.subarray(0, r.destLen) : r.dest;
  }
  tf(no, io);
  so(vi, gi, 4, 3);
  so(ao, oo, 2, 1);
  vi[28] = 0;
  gi[28] = 258;
  uo.exports = of;
});
var po = et((vy, co) => {
  var sf = new Uint8Array(new Uint32Array([305419896]).buffer)[0] === 18, fo = (e, t, r) => {
    let n = e[t];
    e[t] = e[r], e[r] = n;
  }, uf = (e) => {
    let t = e.length;
    for (let r = 0; r < t; r += 4)
      fo(e, r, r + 3), fo(e, r + 1, r + 2);
  }, lf = (e) => {
    sf && uf(e);
  };
  co.exports = { swap32LE: lf };
});
var mo = et((gy, go) => {
  var ho = lo(), { swap32LE: ff } = po(), yi = 11, vr = 5, cf = yi - vr, pf = 65536 >> yi, hf = 1 << cf, df = hf - 1, dn = 2, vf = 1 << vr, mi = vf - 1, vo = 65536 >> vr, gf = 1024 >> vr, mf = vo + gf, Df = mf, yf = 32, bf = Df + yf, xf = 1 << dn, Di = class {
    constructor(t) {
      let r = typeof t.readUInt32BE == "function" && typeof t.slice == "function";
      if (r || t instanceof Uint8Array) {
        let n;
        if (r)
          this.highStart = t.readUInt32LE(0), this.errorValue = t.readUInt32LE(4), n = t.readUInt32LE(8), t = t.slice(12);
        else {
          let i = new DataView(t.buffer);
          this.highStart = i.getUint32(0, true), this.errorValue = i.getUint32(4, true), n = i.getUint32(8, true), t = t.subarray(12);
        }
        t = ho(t, new Uint8Array(n)), t = ho(t, new Uint8Array(n)), ff(t), this.data = new Uint32Array(t.buffer);
      } else
        ({ data: this.data, highStart: this.highStart, errorValue: this.errorValue } = t);
    }
    get(t) {
      let r;
      return t < 0 || t > 1114111 ? this.errorValue : t < 55296 || t > 56319 && t <= 65535 ? (r = (this.data[t >> vr] << dn) + (t & mi), this.data[r]) : t <= 65535 ? (r = (this.data[vo + (t - 55296 >> vr)] << dn) + (t & mi), this.data[r]) : t < this.highStart ? (r = this.data[bf - pf + (t >> yi)], r = this.data[r + (t >> vr & df)], r = (r << dn) + (t & mi), this.data[r]) : this.data[this.data.length - xf];
    }
  };
  go.exports = Di;
});
var Do = et((vn) => {
  var wf = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
  (function(e) {
    "use strict";
    var t = typeof Uint8Array < "u" ? Uint8Array : Array, r = 43, n = 47, i = 48, a = 97, o = 65, u = 45, s = 95;
    function l(p) {
      var d = p.charCodeAt(0);
      if (d === r || d === u)
        return 62;
      if (d === n || d === s)
        return 63;
      if (d < i)
        return -1;
      if (d < i + 10)
        return d - i + 26 + 26;
      if (d < o + 26)
        return d - o;
      if (d < a + 26)
        return d - a + 26;
    }
    function f(p) {
      var d, D, v, g, y, b;
      if (p.length % 4 > 0)
        throw new Error("Invalid string. Length must be a multiple of 4");
      var C = p.length;
      y = p.charAt(C - 2) === "=" ? 2 : p.charAt(C - 1) === "=" ? 1 : 0, b = new t(p.length * 3 / 4 - y), v = y > 0 ? p.length - 4 : p.length;
      var k = 0;
      function S(E) {
        b[k++] = E;
      }
      for (d = 0, D = 0; d < v; d += 4, D += 3)
        g = l(p.charAt(d)) << 18 | l(p.charAt(d + 1)) << 12 | l(p.charAt(d + 2)) << 6 | l(p.charAt(d + 3)), S((g & 16711680) >> 16), S((g & 65280) >> 8), S(g & 255);
      return y === 2 ? (g = l(p.charAt(d)) << 2 | l(p.charAt(d + 1)) >> 4, S(g & 255)) : y === 1 && (g = l(p.charAt(d)) << 10 | l(p.charAt(d + 1)) << 4 | l(p.charAt(d + 2)) >> 2, S(g >> 8 & 255), S(g & 255)), b;
    }
    function c(p) {
      var d, D = p.length % 3, v = "", g, y;
      function b(k) {
        return wf.charAt(k);
      }
      function C(k) {
        return b(k >> 18 & 63) + b(k >> 12 & 63) + b(k >> 6 & 63) + b(k & 63);
      }
      for (d = 0, y = p.length - D; d < y; d += 3)
        g = (p[d] << 16) + (p[d + 1] << 8) + p[d + 2], v += C(g);
      switch (D) {
        case 1:
          g = p[p.length - 1], v += b(g >> 2), v += b(g << 4 & 63), v += "==";
          break;
        case 2:
          g = (p[p.length - 2] << 8) + p[p.length - 1], v += b(g >> 10), v += b(g >> 4 & 63), v += b(g << 2 & 63), v += "=";
          break;
      }
      return v;
    }
    e.toByteArray = f, e.fromByteArray = c;
  })(typeof vn > "u" ? vn.base64js = {} : vn);
});
var _o = et((yy, To) => {
  var Fi = 40, Ci = 41, mn = 39, Si = 34, ki = 92, Cr = 47, Ti = 44, _i = 58, Dn = 42, Uf = 117, Bf = 85, Nf = 43, Mf = /^[a-f0-9?-]+$/i;
  To.exports = function(e) {
    for (var t = [], r = e, n, i, a, o, u, s, l, f, c = 0, p = r.charCodeAt(c), d = r.length, D = [{ nodes: t }], v = 0, g, y = "", b = "", C = ""; c < d; )
      if (p <= 32) {
        n = c;
        do
          n += 1, p = r.charCodeAt(n);
        while (p <= 32);
        o = r.slice(c, n), a = t[t.length - 1], p === Ci && v ? C = o : a && a.type === "div" ? (a.after = o, a.sourceEndIndex += o.length) : p === Ti || p === _i || p === Cr && r.charCodeAt(n + 1) !== Dn && (!g || g && g.type === "function" && g.value !== "calc") ? b = o : t.push({ type: "space", sourceIndex: c, sourceEndIndex: n, value: o }), c = n;
      } else if (p === mn || p === Si) {
        n = c, i = p === mn ? "'" : '"', o = { type: "string", sourceIndex: c, quote: i };
        do
          if (u = false, n = r.indexOf(i, n + 1), ~n)
            for (s = n; r.charCodeAt(s - 1) === ki; )
              s -= 1, u = !u;
          else
            r += i, n = r.length - 1, o.unclosed = true;
        while (u);
        o.value = r.slice(c + 1, n), o.sourceEndIndex = o.unclosed ? n : n + 1, t.push(o), c = n + 1, p = r.charCodeAt(c);
      } else if (p === Cr && r.charCodeAt(c + 1) === Dn)
        n = r.indexOf("*/", c), o = { type: "comment", sourceIndex: c, sourceEndIndex: n + 2 }, n === -1 && (o.unclosed = true, n = r.length, o.sourceEndIndex = n), o.value = r.slice(c + 2, n), t.push(o), c = n + 2, p = r.charCodeAt(c);
      else if ((p === Cr || p === Dn) && g && g.type === "function" && g.value === "calc")
        o = r[c], t.push({ type: "word", sourceIndex: c - b.length, sourceEndIndex: c + o.length, value: o }), c += 1, p = r.charCodeAt(c);
      else if (p === Cr || p === Ti || p === _i)
        o = r[c], t.push({ type: "div", sourceIndex: c - b.length, sourceEndIndex: c + o.length, value: o, before: b, after: "" }), b = "", c += 1, p = r.charCodeAt(c);
      else if (Fi === p) {
        n = c;
        do
          n += 1, p = r.charCodeAt(n);
        while (p <= 32);
        if (f = c, o = { type: "function", sourceIndex: c - y.length, value: y, before: r.slice(f + 1, n) }, c = n, y === "url" && p !== mn && p !== Si) {
          n -= 1;
          do
            if (u = false, n = r.indexOf(")", n + 1), ~n)
              for (s = n; r.charCodeAt(s - 1) === ki; )
                s -= 1, u = !u;
            else
              r += ")", n = r.length - 1, o.unclosed = true;
          while (u);
          l = n;
          do
            l -= 1, p = r.charCodeAt(l);
          while (p <= 32);
          f < l ? (c !== l + 1 ? o.nodes = [{ type: "word", sourceIndex: c, sourceEndIndex: l + 1, value: r.slice(c, l + 1) }] : o.nodes = [], o.unclosed && l + 1 !== n ? (o.after = "", o.nodes.push({ type: "space", sourceIndex: l + 1, sourceEndIndex: n, value: r.slice(l + 1, n) })) : (o.after = r.slice(l + 1, n), o.sourceEndIndex = n)) : (o.after = "", o.nodes = []), c = n + 1, o.sourceEndIndex = o.unclosed ? n : c, p = r.charCodeAt(c), t.push(o);
        } else
          v += 1, o.after = "", o.sourceEndIndex = c + 1, t.push(o), D.push(o), t = o.nodes = [], g = o;
        y = "";
      } else if (Ci === p && v)
        c += 1, p = r.charCodeAt(c), g.after = C, g.sourceEndIndex += C.length, C = "", v -= 1, D[D.length - 1].sourceEndIndex = c, D.pop(), g = D[v], t = g.nodes;
      else {
        n = c;
        do
          p === ki && (n += 1), n += 1, p = r.charCodeAt(n);
        while (n < d && !(p <= 32 || p === mn || p === Si || p === Ti || p === _i || p === Cr || p === Fi || p === Dn && g && g.type === "function" && g.value === "calc" || p === Cr && g.type === "function" && g.value === "calc" || p === Ci && v));
        o = r.slice(c, n), Fi === p ? y = o : (Uf === o.charCodeAt(0) || Bf === o.charCodeAt(0)) && Nf === o.charCodeAt(1) && Mf.test(o.slice(2)) ? t.push({ type: "unicode-range", sourceIndex: c, sourceEndIndex: n, value: o }) : t.push({ type: "word", sourceIndex: c, sourceEndIndex: n, value: o }), c = n;
      }
    for (c = D.length - 1; c; c -= 1)
      D[c].unclosed = true, D[c].sourceEndIndex = r.length;
    return D[0].nodes;
  };
});
var Oo = et((by, Ao) => {
  Ao.exports = function e(t, r, n) {
    var i, a, o, u;
    for (i = 0, a = t.length; i < a; i += 1)
      o = t[i], n || (u = r(o, i, t)), u !== false && o.type === "function" && Array.isArray(o.nodes) && e(o.nodes, r, n), n && r(o, i, t);
  };
});
var Ro = et((xy, Po) => {
  function Lo(e, t) {
    var r = e.type, n = e.value, i, a;
    return t && (a = t(e)) !== void 0 ? a : r === "word" || r === "space" ? n : r === "string" ? (i = e.quote || "", i + n + (e.unclosed ? "" : i)) : r === "comment" ? "/*" + n + (e.unclosed ? "" : "*/") : r === "div" ? (e.before || "") + n + (e.after || "") : Array.isArray(e.nodes) ? (i = Io(e.nodes, t), r !== "function" ? i : n + "(" + (e.before || "") + i + (e.after || "") + (e.unclosed ? "" : ")")) : n;
  }
  function Io(e, t) {
    var r, n;
    if (Array.isArray(e)) {
      for (r = "", n = e.length - 1; ~n; n -= 1)
        r = Lo(e[n], t) + r;
      return r;
    }
    return Lo(e, t);
  }
  Po.exports = Io;
});
var Bo = et((wy, Uo) => {
  var yn = 45, bn = 43, Ai = 46, Gf = 101, Wf = 69;
  function $f(e) {
    var t = e.charCodeAt(0), r;
    if (t === bn || t === yn) {
      if (r = e.charCodeAt(1), r >= 48 && r <= 57)
        return true;
      var n = e.charCodeAt(2);
      return r === Ai && n >= 48 && n <= 57;
    }
    return t === Ai ? (r = e.charCodeAt(1), r >= 48 && r <= 57) : t >= 48 && t <= 57;
  }
  Uo.exports = function(e) {
    var t = 0, r = e.length, n, i, a;
    if (r === 0 || !$f(e))
      return false;
    for (n = e.charCodeAt(t), (n === bn || n === yn) && t++; t < r && (n = e.charCodeAt(t), !(n < 48 || n > 57)); )
      t += 1;
    if (n = e.charCodeAt(t), i = e.charCodeAt(t + 1), n === Ai && i >= 48 && i <= 57)
      for (t += 2; t < r && (n = e.charCodeAt(t), !(n < 48 || n > 57)); )
        t += 1;
    if (n = e.charCodeAt(t), i = e.charCodeAt(t + 1), a = e.charCodeAt(t + 2), (n === Gf || n === Wf) && (i >= 48 && i <= 57 || (i === bn || i === yn) && a >= 48 && a <= 57))
      for (t += i === bn || i === yn ? 3 : 2; t < r && (n = e.charCodeAt(t), !(n < 48 || n > 57)); )
        t += 1;
    return { number: e.slice(0, t), unit: e.slice(t) };
  };
});
var Oi = et((Ey, Go) => {
  var jf = _o(), No = Oo(), Mo = Ro();
  function nr(e) {
    return this instanceof nr ? (this.nodes = jf(e), this) : new nr(e);
  }
  nr.prototype.toString = function() {
    return Array.isArray(this.nodes) ? Mo(this.nodes) : "";
  };
  nr.prototype.walk = function(e, t) {
    return No(this.nodes, e, t), this;
  };
  nr.unit = Bo();
  nr.walk = No;
  nr.stringify = Mo;
  Go.exports = nr;
});
var jo = et((Fy, $o) => {
  "use strict";
  $o.exports = function(e) {
    return typeof e == "string" ? Wo(e) : Li(e);
  };
  function Li(e) {
    return !e || typeof e != "object" || Vf(e) || Hf(e) ? e : zf(e) ? Yf(e, Li) : Zf(qf(e), function(t, r) {
      var n = Wo(r);
      return t[n] = Li(e[r]), t;
    }, {});
  }
  function Wo(e) {
    return e.replace(/[_.-](\w|$)/g, function(t, r) {
      return r.toUpperCase();
    });
  }
  var zf = Array.isArray || function(e) {
    return Object.prototype.toString.call(e) === "[object Array]";
  }, Vf = function(e) {
    return Object.prototype.toString.call(e) === "[object Date]";
  }, Hf = function(e) {
    return Object.prototype.toString.call(e) === "[object RegExp]";
  }, Xf = Object.prototype.hasOwnProperty, qf = Object.keys || function(e) {
    var t = [];
    for (var r in e)
      Xf.call(e, r) && t.push(r);
    return t;
  };
  function Yf(e, t) {
    if (e.map)
      return e.map(t);
    for (var r = [], n = 0; n < e.length; n++)
      r.push(t(e[n], n));
    return r;
  }
  function Zf(e, t, r) {
    if (e.reduce)
      return e.reduce(t, r);
    for (var n = 0; n < e.length; n++)
      r = t(r, e[n], n);
    return r;
  }
});
var zo = et((Cy, Jf) => {
  Jf.exports = { black: "#000000", silver: "#c0c0c0", gray: "#808080", white: "#ffffff", maroon: "#800000", red: "#ff0000", purple: "#800080", fuchsia: "#ff00ff", green: "#008000", lime: "#00ff00", olive: "#808000", yellow: "#ffff00", navy: "#000080", blue: "#0000ff", teal: "#008080", aqua: "#00ffff", orange: "#ffa500", aliceblue: "#f0f8ff", antiquewhite: "#faebd7", aquamarine: "#7fffd4", azure: "#f0ffff", beige: "#f5f5dc", bisque: "#ffe4c4", blanchedalmond: "#ffebcd", blueviolet: "#8a2be2", brown: "#a52a2a", burlywood: "#deb887", cadetblue: "#5f9ea0", chartreuse: "#7fff00", chocolate: "#d2691e", coral: "#ff7f50", cornflowerblue: "#6495ed", cornsilk: "#fff8dc", crimson: "#dc143c", darkblue: "#00008b", darkcyan: "#008b8b", darkgoldenrod: "#b8860b", darkgray: "#a9a9a9", darkgreen: "#006400", darkgrey: "#a9a9a9", darkkhaki: "#bdb76b", darkmagenta: "#8b008b", darkolivegreen: "#556b2f", darkorange: "#ff8c00", darkorchid: "#9932cc", darkred: "#8b0000", darksalmon: "#e9967a", darkseagreen: "#8fbc8f", darkslateblue: "#483d8b", darkslategray: "#2f4f4f", darkslategrey: "#2f4f4f", darkturquoise: "#00ced1", darkviolet: "#9400d3", deeppink: "#ff1493", deepskyblue: "#00bfff", dimgray: "#696969", dimgrey: "#696969", dodgerblue: "#1e90ff", firebrick: "#b22222", floralwhite: "#fffaf0", forestgreen: "#228b22", gainsboro: "#dcdcdc", ghostwhite: "#f8f8ff", gold: "#ffd700", goldenrod: "#daa520", greenyellow: "#adff2f", grey: "#808080", honeydew: "#f0fff0", hotpink: "#ff69b4", indianred: "#cd5c5c", indigo: "#4b0082", ivory: "#fffff0", khaki: "#f0e68c", lavender: "#e6e6fa", lavenderblush: "#fff0f5", lawngreen: "#7cfc00", lemonchiffon: "#fffacd", lightblue: "#add8e6", lightcoral: "#f08080", lightcyan: "#e0ffff", lightgoldenrodyellow: "#fafad2", lightgray: "#d3d3d3", lightgreen: "#90ee90", lightgrey: "#d3d3d3", lightpink: "#ffb6c1", lightsalmon: "#ffa07a", lightseagreen: "#20b2aa", lightskyblue: "#87cefa", lightslategray: "#778899", lightslategrey: "#778899", lightsteelblue: "#b0c4de", lightyellow: "#ffffe0", limegreen: "#32cd32", linen: "#faf0e6", mediumaquamarine: "#66cdaa", mediumblue: "#0000cd", mediumorchid: "#ba55d3", mediumpurple: "#9370db", mediumseagreen: "#3cb371", mediumslateblue: "#7b68ee", mediumspringgreen: "#00fa9a", mediumturquoise: "#48d1cc", mediumvioletred: "#c71585", midnightblue: "#191970", mintcream: "#f5fffa", mistyrose: "#ffe4e1", moccasin: "#ffe4b5", navajowhite: "#ffdead", oldlace: "#fdf5e6", olivedrab: "#6b8e23", orangered: "#ff4500", orchid: "#da70d6", palegoldenrod: "#eee8aa", palegreen: "#98fb98", paleturquoise: "#afeeee", palevioletred: "#db7093", papayawhip: "#ffefd5", peachpuff: "#ffdab9", peru: "#cd853f", pink: "#ffc0cb", plum: "#dda0dd", powderblue: "#b0e0e6", rosybrown: "#bc8f8f", royalblue: "#4169e1", saddlebrown: "#8b4513", salmon: "#fa8072", sandybrown: "#f4a460", seagreen: "#2e8b57", seashell: "#fff5ee", sienna: "#a0522d", skyblue: "#87ceeb", slateblue: "#6a5acd", slategray: "#708090", slategrey: "#708090", snow: "#fffafa", springgreen: "#00ff7f", steelblue: "#4682b4", tan: "#d2b48c", thistle: "#d8bfd8", tomato: "#ff6347", turquoise: "#40e0d0", violet: "#ee82ee", wheat: "#f5deb3", whitesmoke: "#f5f5f5", yellowgreen: "#9acd32", rebeccapurple: "#663399" };
});
var Ho = et((Sy, Vo) => {
  "use strict";
  Vo.exports = zo();
});
var wn = et((Tr) => {
  "use strict";
  Object.defineProperty(Tr, "__esModule", { value: true });
  function Bi(e) {
    return e && typeof e == "object" && "default" in e ? e.default : e;
  }
  var Yo = Oi(), Kf = Bi(Yo), Qf = Bi(jo()), ec = Bi(Ho()), tc = function(t) {
    return t.type !== "string" ? null : t.value.replace(/\\([0-9a-f]{1,6})(?:\s|$)/gi, function(r, n) {
      return String.fromCharCode(parseInt(n, 16));
    }).replace(/\\/g, "");
  }, rc = /^(#(?:[0-9a-f]{3,4}){1,2})$/i, nc = /^(rgba?|hsla?|hwb|lab|lch|gray|color)$/, ic = function(t) {
    return t.type === "word" && (rc.test(t.value) || t.value in ec || t.value === "transparent") ? t.value : t.type === "function" && nc.test(t.value) ? Yo.stringify(t) : null;
  }, ac = /^(none)$/i, oc = /^(auto)$/i, sc = /(^-?[_a-z][_a-z0-9-]*$)/i, uc = /^([+-]?(?:\d*\.)?\d+(?:e[+-]?\d+)?)$/i, lc = /^(0$|(?:[+-]?(?:\d*\.)?\d+(?:e[+-]?\d+)?)(?=px$))/i, fc = /^([+-]?(?:\d*\.)?\d+(?:e[+-]?\d+)?(ch|em|ex|rem|vh|vw|vmin|vmax|cm|mm|in|pc|pt))$/i, cc = /^([+-]?(?:\d*\.)?\d+(?:e[+-]?\d+)?(?:deg|rad))$/i, pc = /^([+-]?(?:\d*\.)?\d+(?:e[+-]?\d+)?%)$/i, Ni = function(t) {
    return function(r) {
      return t(r) ? "<token>" : null;
    };
  }, hc = function(t) {
    return function(r) {
      return r.type === t ? r.value : null;
    };
  }, Ve = function(t, r) {
    return r === void 0 && (r = String), function(n) {
      if (n.type !== "word")
        return null;
      var i = n.value.match(t);
      if (i === null)
        return null;
      var a = r(i[1]);
      return a;
    };
  }, Ze = Ni(function(e) {
    return e.type === "space";
  }), Zo = Ni(function(e) {
    return e.type === "div" && e.value === "/";
  }), dc = Ni(function(e) {
    return e.type === "div" && e.value === ",";
  }), vc = hc("word"), Mi = Ve(ac), Ri = Ve(oc), kr = Ve(uc, Number), vt = Ve(lc, Number), Xt = Ve(fc), Jo = Ve(cc, function(e) {
    return e.toLowerCase();
  }), Gi = Ve(pc), xn = Ve(sc), gc = tc, Ur = ic, Ui = Ve(/^(none|underline|line-through)$/i), mc = function(t) {
    var r = t.expect(kr);
    return t.hasTokens() && (t.expect(Zo), r /= t.expect(kr)), { aspectRatio: r };
  }, Dc = Ve(/^(solid|dashed|dotted)$/), yc = 1, bc = "black", xc = "solid", wc = function(t) {
    var r, n, i;
    if (t.matches(Mi))
      return t.expectEmpty(), { borderWidth: 0, borderColor: "black", borderStyle: "solid" };
    for (var a = 0; a < 3 && t.hasTokens(); )
      a !== 0 && t.expect(Ze), r === void 0 && t.matches(vt, Xt) ? r = t.lastValue : n === void 0 && t.matches(Ur) ? n = t.lastValue : i === void 0 && t.matches(Dc) ? i = t.lastValue : t.throw(), a += 1;
    return t.expectEmpty(), r === void 0 && (r = yc), n === void 0 && (n = bc), i === void 0 && (i = xc), { borderWidth: r, borderColor: n, borderStyle: i };
  }, Br = function(t) {
    var r = t.types, n = r === void 0 ? [vt, Xt, Gi] : r, i = t.directions, a = i === void 0 ? ["Top", "Right", "Bottom", "Left"] : i, o = t.prefix, u = o === void 0 ? "" : o, s = t.suffix, l = s === void 0 ? "" : s;
    return function(f) {
      var c, p = [];
      for (p.push(f.expect.apply(f, n)); p.length < 4 && f.hasTokens(); )
        f.expect(Ze), p.push(f.expect.apply(f, n));
      f.expectEmpty();
      var d = p[0], D = p[1], v = D === void 0 ? d : D, g = p[2], y = g === void 0 ? d : g, b = p[3], C = b === void 0 ? v : b, k = function(E) {
        return "" + u + a[E] + l;
      };
      return c = {}, c[k(0)] = d, c[k(1)] = v, c[k(2)] = y, c[k(3)] = C, c;
    };
  }, Ko = function(t) {
    var r = t.expect(vt), n = t.matches(Ze) ? t.expect(vt) : r;
    return t.expectEmpty(), { width: r, height: n };
  }, Qo = function(t) {
    var r, n, i, a;
    if (t.matches(Mi))
      return t.expectEmpty(), { offset: { width: 0, height: 0 }, radius: 0, color: "black" };
    for (var o = false; t.hasTokens(); )
      o && t.expect(Ze), r === void 0 && t.matches(vt, Xt) ? (r = t.lastValue, t.expect(Ze), n = t.expect(vt, Xt), t.saveRewindPoint(), t.matches(Ze) && t.matches(vt, Xt) ? i = t.lastValue : t.rewind()) : a === void 0 && t.matches(Ur) ? a = t.lastValue : t.throw(), o = true;
    return r === void 0 && t.throw(), { offset: { width: r, height: n }, radius: i !== void 0 ? i : 0, color: a !== void 0 ? a : "black" };
  }, Ec = function(t) {
    var r = Qo(t), n = r.offset, i = r.radius, a = r.color;
    return { shadowOffset: n, shadowRadius: i, shadowColor: a, shadowOpacity: 1 };
  }, Fc = 1, Cc = 1, Sc = 0, kc = function(t) {
    var r, n, i;
    if (t.matches(Mi))
      return t.expectEmpty(), { flexGrow: 0, flexShrink: 0, flexBasis: "auto" };
    if (t.saveRewindPoint(), t.matches(Ri) && !t.hasTokens())
      return { flexGrow: 1, flexShrink: 1, flexBasis: "auto" };
    t.rewind();
    for (var a = 0; a < 2 && t.hasTokens(); )
      a !== 0 && t.expect(Ze), r === void 0 && t.matches(kr) ? (r = t.lastValue, t.saveRewindPoint(), t.matches(Ze) && t.matches(kr) ? n = t.lastValue : t.rewind()) : i === void 0 && t.matches(vt, Xt, Gi) ? i = t.lastValue : i === void 0 && t.matches(Ri) ? i = "auto" : t.throw(), a += 1;
    return t.expectEmpty(), r === void 0 && (r = Fc), n === void 0 && (n = Cc), i === void 0 && (i = Sc), { flexGrow: r, flexShrink: n, flexBasis: i };
  }, Tc = Ve(/(nowrap|wrap|wrap-reverse)/), _c = Ve(/(row|row-reverse|column|column-reverse)/), Ac = "nowrap", Oc = "row", Lc = function(t) {
    for (var r, n, i = 0; i < 2 && t.hasTokens(); )
      i !== 0 && t.expect(Ze), r === void 0 && t.matches(Tc) ? r = t.lastValue : n === void 0 && t.matches(_c) ? n = t.lastValue : t.throw(), i += 1;
    return t.expectEmpty(), r === void 0 && (r = Ac), n === void 0 && (n = Oc), { flexWrap: r, flexDirection: n };
  }, es = function(t) {
    var r;
    if (t.matches(gc))
      r = t.lastValue;
    else
      for (r = t.expect(xn); t.hasTokens(); ) {
        t.expect(Ze);
        var n = t.expect(xn);
        r += " " + n;
      }
    return t.expectEmpty(), { fontFamily: r };
  }, Ic = Ve(/^(normal)$/), Pc = Ve(/^(italic)$/), Rc = Ve(/^([1-9]00|bold)$/), Uc = Ve(/^(small-caps)$/), Bc = "normal", Nc = "normal", Mc = [], Gc = function(t) {
    for (var r, n, i, a, o = 0; o < 3 && t.hasTokens(); ) {
      if (!t.matches(Ic))
        if (r === void 0 && t.matches(Pc))
          r = t.lastValue;
        else if (n === void 0 && t.matches(Rc))
          n = t.lastValue;
        else if (i === void 0 && t.matches(Uc))
          i = [t.lastValue];
        else
          break;
      t.expect(Ze), o += 1;
    }
    var u = t.expect(vt, Xt);
    t.matches(Zo) && (a = t.expect(vt, Xt)), t.expect(Ze);
    var s = es(t), l = s.fontFamily;
    r === void 0 && (r = Bc), n === void 0 && (n = Nc), i === void 0 && (i = Mc);
    var f = { fontStyle: r, fontWeight: n, fontVariant: i, fontSize: u, fontFamily: l };
    return a !== void 0 && (f.lineHeight = a), f;
  }, Wc = function(t) {
    for (var r = [t.expect(xn)]; t.hasTokens(); )
      t.expect(Ze), r.push(t.expect(xn));
    return { fontVariant: r };
  }, $c = Ve(/(flex-(?:start|end)|center|stretch|space-(?:between|around))/), jc = Ve(/(flex-(?:start|end)|center|space-(?:between|around|evenly))/), zc = function(t) {
    var r = t.expect($c), n;
    return t.hasTokens() ? (t.expect(Ze), n = t.expect(jc)) : n = "stretch", t.expectEmpty(), { alignContent: r, justifyContent: n };
  }, Vc = Ve(/^(solid|double|dotted|dashed)$/), Hc = "none", Xc = "solid", qc = "black", Yc = function(t) {
    for (var r, n, i, a = false; t.hasTokens(); ) {
      if (a && t.expect(Ze), r === void 0 && t.matches(Ui)) {
        var o = [t.lastValue.toLowerCase()];
        t.saveRewindPoint(), o[0] !== "none" && t.matches(Ze) && t.matches(Ui) ? (o.push(t.lastValue.toLowerCase()), o.sort().reverse()) : t.rewind(), r = o.join(" ");
      } else
        n === void 0 && t.matches(Vc) ? n = t.lastValue : i === void 0 && t.matches(Ur) ? i = t.lastValue : t.throw();
      a = true;
    }
    return { textDecorationLine: r !== void 0 ? r : Hc, textDecorationColor: i !== void 0 ? i : qc, textDecorationStyle: n !== void 0 ? n : Xc };
  }, Zc = function(t) {
    for (var r = [], n = false; t.hasTokens(); )
      n && t.expect(Ze), r.push(t.expect(Ui).toLowerCase()), n = true;
    return r.sort().reverse(), { textDecorationLine: r.join(" ") };
  }, Jc = function(t) {
    var r = Qo(t), n = r.offset, i = r.radius, a = r.color;
    return { textShadowOffset: n, textShadowRadius: i, textShadowColor: a };
  }, Wi = function(t) {
    return function(r) {
      var n = r.expect(t);
      return r.expectEmpty(), n;
    };
  }, Ii = Wi(kr), Xo = Wi(vt), Sr = Wi(Jo), $i = function(t) {
    return function(r, n) {
      return function(i) {
        var a, o, u = i.expect(t), s;
        if (i.hasTokens())
          i.expect(dc), s = i.expect(t);
        else if (n !== void 0)
          s = n;
        else
          return u;
        return i.expectEmpty(), [(a = {}, a[r + "Y"] = s, a), (o = {}, o[r + "X"] = u, o)];
      };
    };
  }, Kc = $i(kr), Qc = $i(vt), ep = $i(Jo), tp = { perspective: Ii, scale: Kc("scale"), scaleX: Ii, scaleY: Ii, translate: Qc("translate", 0), translateX: Xo, translateY: Xo, rotate: Sr, rotateX: Sr, rotateY: Sr, rotateZ: Sr, skewX: Sr, skewY: Sr, skew: ep("skew", "0deg") }, rp = function(t) {
    for (var r = [], n = false; t.hasTokens(); ) {
      n && t.expect(Ze);
      var i = t.expectFunction(), a = i.functionName, o = tp[a](i);
      if (!Array.isArray(o)) {
        var u;
        o = [(u = {}, u[a] = o, u)];
      }
      r = o.concat(r), n = true;
    }
    return { transform: r };
  }, np = function(t) {
    return { backgroundColor: t.expect(Ur) };
  }, ip = Br({ types: [Ur], prefix: "border", suffix: "Color" }), ap = Br({ directions: ["TopLeft", "TopRight", "BottomRight", "BottomLeft"], prefix: "border", suffix: "Radius" }), op = Br({ prefix: "border", suffix: "Width" }), sp = Br({ types: [vt, Xt, Gi, Ri], prefix: "margin" }), up = Br({ prefix: "padding" }), lp = function(t) {
    return { fontWeight: t.expect(vc) };
  }, fp = function(t) {
    return { shadowOffset: Ko(t) };
  }, cp = function(t) {
    return { textShadowOffset: Ko(t) };
  }, ts = { aspectRatio: mc, background: np, border: wc, borderColor: ip, borderRadius: ap, borderWidth: op, boxShadow: Ec, flex: kc, flexFlow: Lc, font: Gc, fontFamily: es, fontVariant: Wc, fontWeight: lp, margin: sp, padding: up, placeContent: zc, shadowOffset: fp, textShadow: Jc, textShadowOffset: cp, textDecoration: Yc, textDecorationLine: Zc, transform: rp }, qo, ky = qo != null ? new RegExp(qo.join("|")) : null, Pi = "SYMBOL_MATCH", pp = function() {
    function e(r, n) {
      this.index = 0, this.nodes = r, this.functionName = n != null ? n.value : null, this.lastValue = null, this.rewindIndex = -1;
    }
    var t = e.prototype;
    return t.hasTokens = function() {
      return this.index <= this.nodes.length - 1;
    }, t[Pi] = function() {
      if (!this.hasTokens())
        return null;
      for (var r = this.nodes[this.index], n = 0; n < arguments.length; n += 1) {
        var i = n < 0 || arguments.length <= n ? void 0 : arguments[n], a = i(r);
        if (a !== null)
          return this.index += 1, this.lastValue = a, a;
      }
      return null;
    }, t.matches = function() {
      return this[Pi].apply(this, arguments) !== null;
    }, t.expect = function() {
      var n = this[Pi].apply(this, arguments);
      return n !== null ? n : this.throw();
    }, t.matchesFunction = function() {
      var n = this.nodes[this.index];
      if (n.type !== "function")
        return null;
      var i = new e(n.nodes, n);
      return this.index += 1, this.lastValue = null, i;
    }, t.expectFunction = function() {
      var n = this.matchesFunction();
      return n !== null ? n : this.throw();
    }, t.expectEmpty = function() {
      this.hasTokens() && this.throw();
    }, t.throw = function() {
      throw new Error("Unexpected token type: " + this.nodes[this.index].type);
    }, t.saveRewindPoint = function() {
      this.rewindIndex = this.index;
    }, t.rewind = function() {
      if (this.rewindIndex === -1)
        throw new Error("Internal error");
      this.index = this.rewindIndex, this.lastValue = null;
    }, e;
  }(), hp = /^([+-]?(?:\d*\.)?\d+(?:e[+-]?\d+)?)(?:px)?$/i, dp = /^true|false$/i, vp = /^null$/i, gp = /^undefined$/i, rs = function(t, r) {
    if (0)
      var n, i;
    var a = r.match(hp);
    if (a !== null)
      return Number(a[1]);
    var o = r.match(dp);
    if (o !== null)
      return o[0].toLowerCase() === "true";
    var u = r.match(vp);
    if (u !== null)
      return null;
    var s = r.match(gp);
    if (s === null)
      return r;
  }, mp = function(t, r) {
    var n = Kf(r), i = new pp(n.nodes);
    return ts[t](i);
  }, Dp = mp, ns = function(t, r, n) {
    var i, a = n === false || !(t in ts), o = r.trim(), u = a ? (i = {}, i[t] = rs(t, o), i) : Dp(t, o);
    return u;
  }, is = function(t) {
    var r = /^--\w+/.test(t);
    return r ? t : Qf(t);
  }, yp = function(t, r) {
    return r === void 0 && (r = []), t.reduce(function(n, i) {
      var a = is(i[0]), o = i[1], u = r.indexOf(a) === -1;
      return Object.assign(n, ns(a, o, u));
    }, {});
  };
  Tr.default = yp;
  Tr.getPropertyName = is;
  Tr.getStylesForProperty = ns;
  Tr.transformRawValue = rs;
});
var os = et((as, En) => {
  (function(e) {
    function t(o) {
      if (!(this instanceof t))
        return new t();
      this.backgrounds = o || [];
    }
    t.prototype.toString = function() {
      return this.backgrounds.join(", ");
    };
    function r(o) {
      if (!(this instanceof r))
        return new r(o);
      o = o || {};
      var u = this;
      function s(l, f) {
        u[l] = l in o ? o[l] : f;
      }
      s("color", ""), s("image", "none"), s("attachment", "scroll"), s("clip", "border-box"), s("origin", "padding-box"), s("position", "0% 0%"), s("repeat", "repeat"), s("size", "auto");
    }
    r.prototype.toString = function() {
      var o = [this.image, this.repeat, this.attachment, this.position + " / " + this.size, this.origin, this.clip];
      return this.color && o.unshift(this.color), o.join(" ");
    }, e.BackgroundList = t, e.Background = r;
    function n(o) {
      var u = [], s = /[,\(\)]/, l = 0, f = "";
      if (o == null)
        return u;
      for (; o.length; ) {
        var c = s.exec(o);
        if (!c)
          break;
        var p = c[0], d = false;
        switch (p) {
          case ",":
            l || (u.push(f.trim()), f = "", d = true);
            break;
          case "(":
            l++;
            break;
          case ")":
            l--;
            break;
        }
        var D = c.index + 1;
        f += o.slice(0, d ? D - 1 : D), o = o.slice(D);
      }
      return (f.length || o.length) && u.push((f + o).trim()), u;
    }
    function i(o) {
      return o.trim();
    }
    function a(o) {
      return (o || "").split(",").map(i);
    }
    e.parseElementStyle = function(o) {
      var u = new t();
      if (o == null)
        return u;
      for (var s = n(o.backgroundImage), l = o.backgroundColor, f = a(o.backgroundAttachment), c = a(o.backgroundClip), p = a(o.backgroundOrigin), d = a(o.backgroundPosition), D = a(o.backgroundRepeat), v = a(o.backgroundSize), g, y = 0, b = s.length; y < b; y++)
        g = new r({ image: s[y], attachment: f[y % f.length], clip: c[y % c.length], origin: p[y % p.length], position: d[y % d.length], repeat: D[y % D.length], size: v[y % v.length] }), y === b - 1 && (g.color = l), u.backgrounds.push(g);
      return u;
    };
  })(function(e) {
    return typeof En < "u" && En.exports !== void 0 ? En.exports : e.cssBgParser = {};
  }(as));
});
var us = et((_y, ss) => {
  var bp = /,(?![^\(]*\))/, xp = /\s(?![^(]*\))/, wp = /^[0-9]+[a-zA-Z%]+?$/, Ep = (e) => {
    let t = e.split(xp), r = t.includes("inset"), n = t.slice(-1)[0], i = Cp(n) ? void 0 : n, a = t.filter((f) => f !== "inset").filter((f) => f !== i).map(Sp), [o, u, s, l] = a;
    return { inset: r, offsetX: o, offsetY: u, blurRadius: s, spreadRadius: l, color: i };
  }, Fp = (e) => {
    let { inset: t, offsetX: r = 0, offsetY: n = 0, blurRadius: i = 0, spreadRadius: a, color: o } = e || {};
    return [t ? "inset" : null, r, n, i, a, o].filter((u) => u != null).map(kp).map((u) => ("" + u).trim()).join(" ");
  }, Cp = (e) => e === "0" || wp.test(e), Sp = (e) => {
    if (!/px$/.test(e) && e !== "0")
      return e;
    let t = parseFloat(e);
    return isNaN(t) ? e : t;
  }, kp = (e) => typeof e == "number" && e !== 0 ? e + "px" : e, Tp = (e) => e.split(bp).map((t) => t.trim()).map(Ep), _p = (e) => e.map(Fp).join(", ");
  ss.exports = { parse: Tp, stringify: _p };
});
var Vi = et((ji, zi) => {
  (function(e, t) {
    typeof ji == "object" && typeof zi < "u" ? zi.exports = t() : typeof define == "function" && define.amd ? define(t) : (e = e || self).parseCssColor = t();
  })(ji, function() {
    "use strict";
    var e = { aliceblue: [240, 248, 255], antiquewhite: [250, 235, 215], aqua: [0, 255, 255], aquamarine: [127, 255, 212], azure: [240, 255, 255], beige: [245, 245, 220], bisque: [255, 228, 196], black: [0, 0, 0], blanchedalmond: [255, 235, 205], blue: [0, 0, 255], blueviolet: [138, 43, 226], brown: [165, 42, 42], burlywood: [222, 184, 135], cadetblue: [95, 158, 160], chartreuse: [127, 255, 0], chocolate: [210, 105, 30], coral: [255, 127, 80], cornflowerblue: [100, 149, 237], cornsilk: [255, 248, 220], crimson: [220, 20, 60], cyan: [0, 255, 255], darkblue: [0, 0, 139], darkcyan: [0, 139, 139], darkgoldenrod: [184, 134, 11], darkgray: [169, 169, 169], darkgreen: [0, 100, 0], darkgrey: [169, 169, 169], darkkhaki: [189, 183, 107], darkmagenta: [139, 0, 139], darkolivegreen: [85, 107, 47], darkorange: [255, 140, 0], darkorchid: [153, 50, 204], darkred: [139, 0, 0], darksalmon: [233, 150, 122], darkseagreen: [143, 188, 143], darkslateblue: [72, 61, 139], darkslategray: [47, 79, 79], darkslategrey: [47, 79, 79], darkturquoise: [0, 206, 209], darkviolet: [148, 0, 211], deeppink: [255, 20, 147], deepskyblue: [0, 191, 255], dimgray: [105, 105, 105], dimgrey: [105, 105, 105], dodgerblue: [30, 144, 255], firebrick: [178, 34, 34], floralwhite: [255, 250, 240], forestgreen: [34, 139, 34], fuchsia: [255, 0, 255], gainsboro: [220, 220, 220], ghostwhite: [248, 248, 255], gold: [255, 215, 0], goldenrod: [218, 165, 32], gray: [128, 128, 128], green: [0, 128, 0], greenyellow: [173, 255, 47], grey: [128, 128, 128], honeydew: [240, 255, 240], hotpink: [255, 105, 180], indianred: [205, 92, 92], indigo: [75, 0, 130], ivory: [255, 255, 240], khaki: [240, 230, 140], lavender: [230, 230, 250], lavenderblush: [255, 240, 245], lawngreen: [124, 252, 0], lemonchiffon: [255, 250, 205], lightblue: [173, 216, 230], lightcoral: [240, 128, 128], lightcyan: [224, 255, 255], lightgoldenrodyellow: [250, 250, 210], lightgray: [211, 211, 211], lightgreen: [144, 238, 144], lightgrey: [211, 211, 211], lightpink: [255, 182, 193], lightsalmon: [255, 160, 122], lightseagreen: [32, 178, 170], lightskyblue: [135, 206, 250], lightslategray: [119, 136, 153], lightslategrey: [119, 136, 153], lightsteelblue: [176, 196, 222], lightyellow: [255, 255, 224], lime: [0, 255, 0], limegreen: [50, 205, 50], linen: [250, 240, 230], magenta: [255, 0, 255], maroon: [128, 0, 0], mediumaquamarine: [102, 205, 170], mediumblue: [0, 0, 205], mediumorchid: [186, 85, 211], mediumpurple: [147, 112, 219], mediumseagreen: [60, 179, 113], mediumslateblue: [123, 104, 238], mediumspringgreen: [0, 250, 154], mediumturquoise: [72, 209, 204], mediumvioletred: [199, 21, 133], midnightblue: [25, 25, 112], mintcream: [245, 255, 250], mistyrose: [255, 228, 225], moccasin: [255, 228, 181], navajowhite: [255, 222, 173], navy: [0, 0, 128], oldlace: [253, 245, 230], olive: [128, 128, 0], olivedrab: [107, 142, 35], orange: [255, 165, 0], orangered: [255, 69, 0], orchid: [218, 112, 214], palegoldenrod: [238, 232, 170], palegreen: [152, 251, 152], paleturquoise: [175, 238, 238], palevioletred: [219, 112, 147], papayawhip: [255, 239, 213], peachpuff: [255, 218, 185], peru: [205, 133, 63], pink: [255, 192, 203], plum: [221, 160, 221], powderblue: [176, 224, 230], purple: [128, 0, 128], rebeccapurple: [102, 51, 153], red: [255, 0, 0], rosybrown: [188, 143, 143], royalblue: [65, 105, 225], saddlebrown: [139, 69, 19], salmon: [250, 128, 114], sandybrown: [244, 164, 96], seagreen: [46, 139, 87], seashell: [255, 245, 238], sienna: [160, 82, 45], silver: [192, 192, 192], skyblue: [135, 206, 235], slateblue: [106, 90, 205], slategray: [112, 128, 144], slategrey: [112, 128, 144], snow: [255, 250, 250], springgreen: [0, 255, 127], steelblue: [70, 130, 180], tan: [210, 180, 140], teal: [0, 128, 128], thistle: [216, 191, 216], tomato: [255, 99, 71], turquoise: [64, 224, 208], violet: [238, 130, 238], wheat: [245, 222, 179], white: [255, 255, 255], whitesmoke: [245, 245, 245], yellow: [255, 255, 0], yellowgreen: [154, 205, 50] }, t = new RegExp(/^#([a-f0-9]{3,4}|[a-f0-9]{4}(?:[a-f0-9]{2}){1,2})\b$/, "i"), r = "-?\\d*(?:\\.\\d+)", n = "(" + r + "?)", i = "(" + r + "?%)", a = (`^
  hsla?\\(
    \\s*(-?\\d*(?:\\.\\d+)?(?:deg|rad|turn)?)\\s*,
    \\s*` + i + `\\s*,
    \\s*` + i + `\\s*
    (?:,\\s*(-?\\d*(?:\\.\\d+)?%?)\\s*)?
  \\)
  $
`).replace(/\n|\s/g, ""), o = new RegExp(a), u = (`^
  hsla?\\(
    \\s*(-?\\d*(?:\\.\\d+)?(?:deg|rad|turn)?)\\s*
    \\s+` + i + `
    \\s+` + i + `
    \\s*(?:\\s*\\/\\s*(-?\\d*(?:\\.\\d+)?%?)\\s*)?
  \\)
  $
`).replace(/\n|\s/g, ""), s = new RegExp(u), l = (`^
  rgba?\\(
    \\s*` + n + `\\s*,
    \\s*` + n + `\\s*,
    \\s*` + n + `\\s*
    (?:,\\s*(-?\\d*(?:\\.\\d+)?%?)\\s*)?
  \\)
  $
`).replace(/\n|\s/g, ""), f = new RegExp(l), c = (`^
  rgba?\\(
    \\s*` + i + `\\s*,
    \\s*` + i + `\\s*,
    \\s*` + i + `\\s*
    (?:,\\s*(-?\\d*(?:\\.\\d+)?%?)\\s*)?
  \\)
  $
`).replace(/\n|\s/g, ""), p = new RegExp(c), d = (`^
  rgba?\\(
    \\s*` + n + `
    \\s+` + n + `
    \\s+` + n + `
    \\s*(?:\\s*\\/\\s*(-?\\d*(?:\\.\\d+)?%?)\\s*)?
  \\)
$
`).replace(/\n|\s/g, ""), D = new RegExp(d), v = (`^
  rgba?\\(
    \\s*` + i + `
    \\s+` + i + `
    \\s+` + i + `
    \\s*(?:\\s*\\/\\s*(-?\\d*(?:\\.\\d+)?%?)\\s*)?
  \\)
$
`).replace(/\n|\s/g, ""), g = new RegExp(v), y = new RegExp(/^transparent$/, "i"), b = new RegExp("[^#a-f\\d]", "gi"), C = new RegExp("^#?[a-f\\d]{3}[a-f\\d]?$|^#?[a-f\\d]{6}([a-f\\d]{2})?$", "i"), k = function(M, H, q) {
      return Math.min(Math.max(H, M), q);
    }, S = function(M) {
      var H = M;
      return typeof H != "number" && (H = H.endsWith("%") ? 255 * parseFloat(H) / 100 : parseFloat(H)), k(Math.round(H), 0, 255);
    }, E = function(M) {
      return k(parseFloat(M), 0, 100);
    };
    function L(M) {
      var H = M;
      return typeof H != "number" && (H = H.endsWith("%") ? parseFloat(H) / 100 : parseFloat(H)), k(H, 0, 1);
    }
    function T(M) {
      var H = function(q, ee) {
        if (ee === void 0 && (ee = {}), typeof q != "string" || b.test(q) || !C.test(q))
          throw new TypeError("Expected a valid hex string");
        var A = 1;
        (q = q.replace(/^#/, "")).length === 8 && (A = Number.parseInt(q.slice(6, 8), 16) / 255, q = q.slice(0, 6)), q.length === 4 && (A = Number.parseInt(q.slice(3, 4).repeat(2), 16) / 255, q = q.slice(0, 3)), q.length === 3 && (q = q[0] + q[0] + q[1] + q[1] + q[2] + q[2]);
        var R = Number.parseInt(q, 16), O = R >> 16, Y = R >> 8 & 255, Z = 255 & R, te = typeof ee.alpha == "number" ? ee.alpha : A;
        return ee.format === "array" ? [O, Y, Z, te] : ee.format === "css" ? "rgb(" + O + " " + Y + " " + Z + (te === 1 ? "" : " / " + Number((100 * te).toFixed(2)) + "%") + ")" : { red: O, green: Y, blue: Z, alpha: te };
      }(M, { format: "array" });
      return U([null, H[0], H[1], H[2], H[3]]);
    }
    function U(M) {
      var H = M[1], q = M[2], ee = M[3], A = M[4];
      return A === void 0 && (A = 1), { type: "rgb", values: [H, q, ee].map(S), alpha: L(A === null ? 1 : A) };
    }
    return function(M) {
      if (typeof M != "string")
        return null;
      var H = t.exec(M);
      if (H)
        return T(H[0]);
      var q = s.exec(M) || o.exec(M);
      if (q)
        return function(R) {
          var O = R[1], Y = R[2], Z = R[3], te = R[4];
          te === void 0 && (te = 1);
          var ie = O;
          return { type: "hsl", values: [ie = ie.endsWith("turn") ? 360 * parseFloat(ie) / 1 : ie.endsWith("rad") ? Math.round(180 * parseFloat(ie) / Math.PI) : parseFloat(ie), E(Y), E(Z)], alpha: L(te === null ? 1 : te) };
        }(q);
      var ee = D.exec(M) || g.exec(M) || f.exec(M) || p.exec(M);
      if (ee)
        return U(ee);
      if (y.exec(M))
        return U([null, 0, 0, 0, 0]);
      var A = e[M.toLowerCase()];
      return A ? U([null, A[0], A[1], A[2], 1]) : null;
    };
  });
});
var fs = et((Ay, ls) => {
  "use strict";
  var Ap = /["'&<>]/;
  ls.exports = Op;
  function Op(e) {
    var t = "" + e, r = Ap.exec(t);
    if (!r)
      return t;
    var n, i = "", a = 0, o = 0;
    for (a = r.index; a < t.length; a++) {
      switch (t.charCodeAt(a)) {
        case 34:
          n = "&quot;";
          break;
        case 38:
          n = "&amp;";
          break;
        case 39:
          n = "&#39;";
          break;
        case 60:
          n = "&lt;";
          break;
        case 62:
          n = "&gt;";
          break;
        default:
          continue;
      }
      o !== a && (i += t.substring(o, a)), o = a + 1, i += n;
    }
    return o !== a ? i + t.substring(o, a) : i;
  }
});
var Fo = St(mo(), 1);
var Co = St(Do(), 1);
var Ei = {};
var Ef = 5;
var yo = 12;
var Ff = 13;
var Cf = 16;
var Sf = 17;
var kf = 22;
var bo = 28;
var xo = 31;
var Tf = 33;
var gn = 34;
var _f = 35;
var bi = 36;
var xi = 37;
var So = 38;
var Af = 39;
var Of = 40;
var Pr = 41;
var Lf = 42;
var h = 0;
var m = 1;
var Ee = 2;
var ko = 3;
var F = 4;
var If = [[F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, ko, F, F, F, F, F, F, F, F, F, F, F], [h, F, F, m, m, F, F, F, F, m, m, h, h, h, h, m, m, m, h, h, F, Ee, F, h, h, h, h, h, h, h, h, m, h], [h, F, F, m, m, F, F, F, F, m, m, m, m, m, h, m, m, m, h, h, F, Ee, F, h, h, h, h, h, h, h, h, m, h], [F, F, F, m, m, m, F, F, F, m, m, m, m, m, m, m, m, m, m, m, F, Ee, F, m, m, m, m, m, m, m, m, m, m], [m, F, F, m, m, m, F, F, F, m, m, m, m, m, m, m, m, m, m, m, F, Ee, F, m, m, m, m, m, m, m, m, m, m], [h, F, F, m, m, m, F, F, F, h, h, h, h, h, h, m, m, m, h, h, F, Ee, F, h, h, h, h, h, h, h, h, m, h], [h, F, F, m, m, m, F, F, F, h, h, h, h, h, h, m, m, m, h, h, F, Ee, F, h, h, h, h, h, h, h, h, m, h], [h, F, F, m, m, m, F, F, F, h, h, m, h, m, h, m, m, m, h, h, F, Ee, F, h, h, h, h, h, h, h, h, m, h], [h, F, F, m, m, m, F, F, F, h, h, m, m, m, h, m, m, m, h, h, F, Ee, F, h, h, h, h, h, h, h, h, m, h], [m, F, F, m, m, m, F, F, F, h, h, m, m, m, m, m, m, m, h, h, F, Ee, F, m, m, m, m, m, h, m, m, m, h], [m, F, F, m, m, m, F, F, F, h, h, m, m, m, h, m, m, m, h, h, F, Ee, F, h, h, h, h, h, h, h, h, m, h], [m, F, F, m, m, m, F, F, F, m, m, m, m, m, h, m, m, m, h, h, F, Ee, F, h, h, h, h, h, h, h, h, m, h], [m, F, F, m, m, m, F, F, F, m, m, m, m, m, h, m, m, m, h, h, F, Ee, F, h, h, h, h, h, h, h, h, m, h], [m, F, F, m, m, m, F, F, F, m, m, m, m, m, h, m, m, m, h, h, F, Ee, F, h, h, h, h, h, h, h, h, m, h], [h, F, F, m, m, m, F, F, F, h, m, h, h, h, h, m, m, m, h, h, F, Ee, F, h, h, h, h, h, h, h, h, m, h], [h, F, F, m, m, m, F, F, F, h, h, h, h, h, h, m, m, m, h, h, F, Ee, F, h, h, h, h, h, h, h, h, m, h], [h, F, F, m, h, m, F, F, F, h, h, m, h, h, h, m, m, m, h, h, F, Ee, F, h, h, h, h, h, h, h, h, m, h], [h, F, F, m, h, m, F, F, F, h, h, h, h, h, h, m, m, m, h, h, F, Ee, F, h, h, h, h, h, h, h, h, m, h], [m, F, F, m, m, m, F, F, F, m, m, m, m, m, m, m, m, m, m, m, F, Ee, F, m, m, m, m, m, m, m, m, m, h], [h, F, F, m, m, m, F, F, F, h, h, h, h, h, h, m, m, m, h, F, F, Ee, F, h, h, h, h, h, h, h, h, m, h], [h, h, h, h, h, h, h, h, h, h, h, h, h, h, h, h, h, h, h, h, F, h, h, h, h, h, h, h, h, h, h, h, h], [m, F, F, m, m, m, F, F, F, m, m, m, m, m, h, m, m, m, h, h, F, Ee, F, h, h, h, h, h, h, h, h, m, h], [m, F, F, m, m, m, F, F, F, m, m, m, m, m, m, m, m, m, m, m, F, Ee, F, m, m, m, m, m, m, m, m, m, m], [h, F, F, m, m, m, F, F, F, h, m, h, h, h, h, m, m, m, h, h, F, Ee, F, h, h, h, m, m, h, h, h, m, h], [h, F, F, m, m, m, F, F, F, h, m, h, h, h, h, m, m, m, h, h, F, Ee, F, h, h, h, h, m, h, h, h, m, h], [h, F, F, m, m, m, F, F, F, h, m, h, h, h, h, m, m, m, h, h, F, Ee, F, m, m, m, m, h, h, h, h, m, h], [h, F, F, m, m, m, F, F, F, h, m, h, h, h, h, m, m, m, h, h, F, Ee, F, h, h, h, m, m, h, h, h, m, h], [h, F, F, m, m, m, F, F, F, h, m, h, h, h, h, m, m, m, h, h, F, Ee, F, h, h, h, h, m, h, h, h, m, h], [h, F, F, m, m, m, F, F, F, h, h, h, h, h, h, m, m, m, h, h, F, Ee, F, h, h, h, h, h, m, h, h, m, h], [h, F, F, m, m, m, F, F, F, h, m, h, h, h, h, m, m, m, h, h, F, Ee, F, h, h, h, h, h, h, h, m, m, h], [h, F, F, m, m, m, F, F, F, h, m, h, h, h, h, m, m, m, h, h, F, Ee, F, h, h, h, h, h, h, h, h, m, h], [m, F, F, m, m, m, F, F, F, m, m, m, m, m, h, m, m, m, h, h, F, Ee, F, h, h, h, h, h, h, h, h, m, h], [h, F, F, m, m, h, F, F, F, h, h, h, h, h, h, h, h, h, h, h, F, Ee, F, h, h, h, h, h, h, h, h, m, h]];
var Pf = Co.default.toByteArray("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");
var Rf = new Fo.default(Pf);
var wo = function(e) {
  switch (e) {
    case Tf:
      return yo;
    case Af:
    case Of:
    case Lf:
      return yo;
    case _f:
      return Ef;
    default:
      return e;
  }
};
var Eo = function(e) {
  switch (e) {
    case xi:
    case So:
      return gn;
    case Pr:
      return kf;
    default:
      return e;
  }
};
var Rr = class {
  constructor(t, r = false) {
    this.position = t, this.required = r;
  }
};
var wi = class {
  nextCodePoint() {
    let t = this.string.charCodeAt(this.pos++), r = this.string.charCodeAt(this.pos);
    return 55296 <= t && t <= 56319 && 56320 <= r && r <= 57343 ? (this.pos++, (t - 55296) * 1024 + (r - 56320) + 65536) : t;
  }
  nextCharClass() {
    return wo(Rf.get(this.nextCodePoint()));
  }
  getSimpleBreak() {
    switch (this.nextClass) {
      case Pr:
        return false;
      case gn:
      case xi:
      case So:
        return this.curClass = gn, false;
      case bi:
        return this.curClass = bi, false;
    }
    return null;
  }
  getPairTableBreak(t) {
    let r = false;
    switch (If[this.curClass][this.nextClass]) {
      case h:
        r = true;
        break;
      case m:
        r = t === Pr;
        break;
      case Ee:
        if (r = t === Pr, !r)
          return r = false, r;
        break;
      case ko:
        if (t !== Pr)
          return r;
        break;
      case F:
        break;
    }
    return this.LB8a && (r = false), this.LB21a && (this.curClass === Cf || this.curClass === Sf) ? (r = false, this.LB21a = false) : this.LB21a = this.curClass === Ff, this.curClass === bo ? (this.LB30a++, this.LB30a == 2 && this.nextClass === bo && (r = true, this.LB30a = 0)) : this.LB30a = 0, this.curClass = this.nextClass, r;
  }
  nextBreak() {
    if (this.curClass == null) {
      let t = this.nextCharClass();
      this.curClass = Eo(t), this.nextClass = t, this.LB8a = t === xo, this.LB30a = 0;
    }
    for (; this.pos < this.string.length; ) {
      this.lastPos = this.pos;
      let t = this.nextClass;
      if (this.nextClass = this.nextCharClass(), this.curClass === gn || this.curClass === bi && this.nextClass !== xi)
        return this.curClass = Eo(wo(this.nextClass)), new Rr(this.lastPos, true);
      let r = this.getSimpleBreak();
      if (r === null && (r = this.getPairTableBreak(t)), this.LB8a = this.nextClass === xo, r)
        return new Rr(this.lastPos);
    }
    return this.lastPos < this.string.length ? (this.lastPos = this.string.length, new Rr(this.string.length)) : null;
  }
  constructor(t) {
    this.string = t, this.pos = 0, this.lastPos = 0, this.curClass = null, this.nextClass = null, this.LB8a = false, this.LB21a = false, this.LB30a = 0;
  }
};
Ei = wi;
var It = St(wn(), 1);
var gl = St(os(), 1);
var ml = St(us(), 1);
var Dl = St(Vi(), 1);
var yl = St(Oi(), 1);
var bl = St(wn(), 1);
var Fa = St(fs(), 1);
var Fl = St(Vi(), 1);
var Ca = St(wn(), 1);
var wt = Uint8Array;
var mr = Uint16Array;
var Ns = Uint32Array;
var Ms = new wt([0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0, 0, 0, 0]);
var Gs = new wt([0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13, 0, 0]);
var Lp = new wt([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]);
var Ws = function(e, t) {
  for (var r = new mr(31), n = 0; n < 31; ++n)
    r[n] = t += 1 << e[n - 1];
  for (var i = new Ns(r[30]), n = 1; n < 30; ++n)
    for (var a = r[n]; a < r[n + 1]; ++a)
      i[a] = a - r[n] << 5 | n;
  return [r, i];
};
var $s = Ws(Ms, 2);
var js = $s[0];
var Ip = $s[1];
js[28] = 258, Ip[258] = 28;
var Pp = Ws(Gs, 0);
var Rp = Pp[0];
var ta = new mr(32768);
for (ke = 0; ke < 32768; ++ke)
  qt = (ke & 43690) >>> 1 | (ke & 21845) << 1, qt = (qt & 52428) >>> 2 | (qt & 13107) << 2, qt = (qt & 61680) >>> 4 | (qt & 3855) << 4, ta[ke] = ((qt & 65280) >>> 8 | (qt & 255) << 8) >>> 1;
var qt;
var ke;
var Mr = function(e, t, r) {
  for (var n = e.length, i = 0, a = new mr(t); i < n; ++i)
    e[i] && ++a[e[i] - 1];
  var o = new mr(t);
  for (i = 0; i < t; ++i)
    o[i] = o[i - 1] + a[i - 1] << 1;
  var u;
  if (r) {
    u = new mr(1 << t);
    var s = 15 - t;
    for (i = 0; i < n; ++i)
      if (e[i])
        for (var l = i << 4 | e[i], f = t - e[i], c = o[e[i] - 1]++ << f, p = c | (1 << f) - 1; c <= p; ++c)
          u[ta[c] >>> s] = l;
  } else
    for (u = new mr(n), i = 0; i < n; ++i)
      e[i] && (u[i] = ta[o[e[i] - 1]++] >>> 15 - e[i]);
  return u;
};
var $r = new wt(288);
for (ke = 0; ke < 144; ++ke)
  $r[ke] = 8;
var ke;
for (ke = 144; ke < 256; ++ke)
  $r[ke] = 9;
var ke;
for (ke = 256; ke < 280; ++ke)
  $r[ke] = 7;
var ke;
for (ke = 280; ke < 288; ++ke)
  $r[ke] = 8;
var ke;
var zs = new wt(32);
for (ke = 0; ke < 32; ++ke)
  zs[ke] = 5;
var ke;
var Up = Mr($r, 9, 1);
var Bp = Mr(zs, 5, 1);
var Hi = function(e) {
  for (var t = e[0], r = 1; r < e.length; ++r)
    e[r] > t && (t = e[r]);
  return t;
};
var kt = function(e, t, r) {
  var n = t / 8 | 0;
  return (e[n] | e[n + 1] << 8) >> (t & 7) & r;
};
var Xi = function(e, t) {
  var r = t / 8 | 0;
  return (e[r] | e[r + 1] << 8 | e[r + 2] << 16) >> (t & 7);
};
var Np = function(e) {
  return (e + 7) / 8 | 0;
};
var Mp = function(e, t, r) {
  (t == null || t < 0) && (t = 0), (r == null || r > e.length) && (r = e.length);
  var n = new (e.BYTES_PER_ELEMENT == 2 ? mr : e.BYTES_PER_ELEMENT == 4 ? Ns : wt)(r - t);
  return n.set(e.subarray(t, r)), n;
};
var Gp = ["unexpected EOF", "invalid block type", "invalid length/literal", "invalid distance", "stream finished", "no stream handler", , "no callback", "invalid UTF-8 data", "extra field too long", "date not in range 1980-2099", "filename too long", "stream finishing", "invalid zip data"];
var or = function(e, t, r) {
  var n = new Error(t || Gp[e]);
  if (n.code = e, Error.captureStackTrace && Error.captureStackTrace(n, or), !r)
    throw n;
  return n;
};
var Wp = function(e, t, r) {
  var n = e.length;
  if (!n || r && r.f && !r.l)
    return t || new wt(0);
  var i = !t || r, a = !r || r.i;
  r || (r = {}), t || (t = new wt(n * 3));
  var o = function(W) {
    var fe = t.length;
    if (W > fe) {
      var ce = new wt(Math.max(fe * 2, W));
      ce.set(t), t = ce;
    }
  }, u = r.f || 0, s = r.p || 0, l = r.b || 0, f = r.l, c = r.d, p = r.m, d = r.n, D = n * 8;
  do {
    if (!f) {
      u = kt(e, s, 1);
      var v = kt(e, s + 1, 3);
      if (s += 3, v)
        if (v == 1)
          f = Up, c = Bp, p = 9, d = 5;
        else if (v == 2) {
          var C = kt(e, s, 31) + 257, k = kt(e, s + 10, 15) + 4, S = C + kt(e, s + 5, 31) + 1;
          s += 14;
          for (var E = new wt(S), L = new wt(19), T = 0; T < k; ++T)
            L[Lp[T]] = kt(e, s + T * 3, 7);
          s += k * 3;
          for (var U = Hi(L), M = (1 << U) - 1, H = Mr(L, U, 1), T = 0; T < S; ) {
            var q = H[kt(e, s, M)];
            s += q & 15;
            var g = q >>> 4;
            if (g < 16)
              E[T++] = g;
            else {
              var ee = 0, A = 0;
              for (g == 16 ? (A = 3 + kt(e, s, 3), s += 2, ee = E[T - 1]) : g == 17 ? (A = 3 + kt(e, s, 7), s += 3) : g == 18 && (A = 11 + kt(e, s, 127), s += 7); A--; )
                E[T++] = ee;
            }
          }
          var R = E.subarray(0, C), O = E.subarray(C);
          p = Hi(R), d = Hi(O), f = Mr(R, p, 1), c = Mr(O, d, 1);
        } else
          or(1);
      else {
        var g = Np(s) + 4, y = e[g - 4] | e[g - 3] << 8, b = g + y;
        if (b > n) {
          a && or(0);
          break;
        }
        i && o(l + y), t.set(e.subarray(g, b), l), r.b = l += y, r.p = s = b * 8, r.f = u;
        continue;
      }
      if (s > D) {
        a && or(0);
        break;
      }
    }
    i && o(l + 131072);
    for (var Y = (1 << p) - 1, Z = (1 << d) - 1, te = s; ; te = s) {
      var ee = f[Xi(e, s) & Y], ie = ee >>> 4;
      if (s += ee & 15, s > D) {
        a && or(0);
        break;
      }
      if (ee || or(2), ie < 256)
        t[l++] = ie;
      else if (ie == 256) {
        te = s, f = null;
        break;
      } else {
        var B = ie - 254;
        if (ie > 264) {
          var T = ie - 257, z = Ms[T];
          B = kt(e, s, (1 << z) - 1) + js[T], s += z;
        }
        var _ = c[Xi(e, s) & Z], N = _ >>> 4;
        _ || or(3), s += _ & 15;
        var O = Rp[N];
        if (N > 3) {
          var z = Gs[N];
          O += Xi(e, s) & (1 << z) - 1, s += z;
        }
        if (s > D) {
          a && or(0);
          break;
        }
        i && o(l + 131072);
        for (var ae = l + B; l < ae; l += 4)
          t[l] = t[l - O], t[l + 1] = t[l + 1 - O], t[l + 2] = t[l + 2 - O], t[l + 3] = t[l + 3 - O];
        l = ae;
      }
    }
    r.l = f, r.p = te, r.b = l, r.f = u, f && (u = 1, r.m = p, r.d = c, r.n = d);
  } while (!u);
  return l == t.length ? t : Mp(t, 0, l);
};
var $p = new wt(0);
function jp(e, t) {
  return Wp(e, t);
}
var zp = typeof TextDecoder < "u" && new TextDecoder();
var Vp = 0;
try {
  zp.decode($p, { stream: true }), Vp = 1;
} catch {
}
function ot() {
  this.commands = [], this.fill = "black", this.stroke = null, this.strokeWidth = 1;
}
ot.prototype.moveTo = function(e, t) {
  this.commands.push({ type: "M", x: e, y: t });
};
ot.prototype.lineTo = function(e, t) {
  this.commands.push({ type: "L", x: e, y: t });
};
ot.prototype.curveTo = ot.prototype.bezierCurveTo = function(e, t, r, n, i, a) {
  this.commands.push({ type: "C", x1: e, y1: t, x2: r, y2: n, x: i, y: a });
};
ot.prototype.quadTo = ot.prototype.quadraticCurveTo = function(e, t, r, n) {
  this.commands.push({ type: "Q", x1: e, y1: t, x: r, y: n });
};
ot.prototype.close = ot.prototype.closePath = function() {
  this.commands.push({ type: "Z" });
};
ot.prototype.extend = function(e) {
  e.commands && (e = e.commands), Array.prototype.push.apply(this.commands, e);
};
ot.prototype.toPathData = function(e) {
  e = e !== void 0 ? e : 2;
  function t(o) {
    return Math.round(o) === o ? "" + Math.round(o) : o.toFixed(e);
  }
  function r() {
    for (var o = arguments, u = "", s = 0; s < arguments.length; s += 1) {
      var l = o[s];
      l >= 0 && s > 0 && (u += " "), u += t(l);
    }
    return u;
  }
  for (var n = "", i = 0; i < this.commands.length; i += 1) {
    var a = this.commands[i];
    a.type === "M" ? n += "M" + r(a.x, a.y) : a.type === "L" ? n += "L" + r(a.x, a.y) : a.type === "C" ? n += "C" + r(a.x1, a.y1, a.x2, a.y2, a.x, a.y) : a.type === "Q" ? n += "Q" + r(a.x1, a.y1, a.x, a.y) : a.type === "Z" && (n += "Z");
  }
  return n;
};
var Hp = [".notdef", "space", "exclam", "quotedbl", "numbersign", "dollar", "percent", "ampersand", "quoteright", "parenleft", "parenright", "asterisk", "plus", "comma", "hyphen", "period", "slash", "zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "colon", "semicolon", "less", "equal", "greater", "question", "at", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "bracketleft", "backslash", "bracketright", "asciicircum", "underscore", "quoteleft", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "braceleft", "bar", "braceright", "asciitilde", "exclamdown", "cent", "sterling", "fraction", "yen", "florin", "section", "currency", "quotesingle", "quotedblleft", "guillemotleft", "guilsinglleft", "guilsinglright", "fi", "fl", "endash", "dagger", "daggerdbl", "periodcentered", "paragraph", "bullet", "quotesinglbase", "quotedblbase", "quotedblright", "guillemotright", "ellipsis", "perthousand", "questiondown", "grave", "acute", "circumflex", "tilde", "macron", "breve", "dotaccent", "dieresis", "ring", "cedilla", "hungarumlaut", "ogonek", "caron", "emdash", "AE", "ordfeminine", "Lslash", "Oslash", "OE", "ordmasculine", "ae", "dotlessi", "lslash", "oslash", "oe", "germandbls", "onesuperior", "logicalnot", "mu", "trademark", "Eth", "onehalf", "plusminus", "Thorn", "onequarter", "divide", "brokenbar", "degree", "thorn", "threequarters", "twosuperior", "registered", "minus", "eth", "multiply", "threesuperior", "copyright", "Aacute", "Acircumflex", "Adieresis", "Agrave", "Aring", "Atilde", "Ccedilla", "Eacute", "Ecircumflex", "Edieresis", "Egrave", "Iacute", "Icircumflex", "Idieresis", "Igrave", "Ntilde", "Oacute", "Ocircumflex", "Odieresis", "Ograve", "Otilde", "Scaron", "Uacute", "Ucircumflex", "Udieresis", "Ugrave", "Yacute", "Ydieresis", "Zcaron", "aacute", "acircumflex", "adieresis", "agrave", "aring", "atilde", "ccedilla", "eacute", "ecircumflex", "edieresis", "egrave", "iacute", "icircumflex", "idieresis", "igrave", "ntilde", "oacute", "ocircumflex", "odieresis", "ograve", "otilde", "scaron", "uacute", "ucircumflex", "udieresis", "ugrave", "yacute", "ydieresis", "zcaron", "exclamsmall", "Hungarumlautsmall", "dollaroldstyle", "dollarsuperior", "ampersandsmall", "Acutesmall", "parenleftsuperior", "parenrightsuperior", "266 ff", "onedotenleader", "zerooldstyle", "oneoldstyle", "twooldstyle", "threeoldstyle", "fouroldstyle", "fiveoldstyle", "sixoldstyle", "sevenoldstyle", "eightoldstyle", "nineoldstyle", "commasuperior", "threequartersemdash", "periodsuperior", "questionsmall", "asuperior", "bsuperior", "centsuperior", "dsuperior", "esuperior", "isuperior", "lsuperior", "msuperior", "nsuperior", "osuperior", "rsuperior", "ssuperior", "tsuperior", "ff", "ffi", "ffl", "parenleftinferior", "parenrightinferior", "Circumflexsmall", "hyphensuperior", "Gravesmall", "Asmall", "Bsmall", "Csmall", "Dsmall", "Esmall", "Fsmall", "Gsmall", "Hsmall", "Ismall", "Jsmall", "Ksmall", "Lsmall", "Msmall", "Nsmall", "Osmall", "Psmall", "Qsmall", "Rsmall", "Ssmall", "Tsmall", "Usmall", "Vsmall", "Wsmall", "Xsmall", "Ysmall", "Zsmall", "colonmonetary", "onefitted", "rupiah", "Tildesmall", "exclamdownsmall", "centoldstyle", "Lslashsmall", "Scaronsmall", "Zcaronsmall", "Dieresissmall", "Brevesmall", "Caronsmall", "Dotaccentsmall", "Macronsmall", "figuredash", "hypheninferior", "Ogoneksmall", "Ringsmall", "Cedillasmall", "questiondownsmall", "oneeighth", "threeeighths", "fiveeighths", "seveneighths", "onethird", "twothirds", "zerosuperior", "foursuperior", "fivesuperior", "sixsuperior", "sevensuperior", "eightsuperior", "ninesuperior", "zeroinferior", "oneinferior", "twoinferior", "threeinferior", "fourinferior", "fiveinferior", "sixinferior", "seveninferior", "eightinferior", "nineinferior", "centinferior", "dollarinferior", "periodinferior", "commainferior", "Agravesmall", "Aacutesmall", "Acircumflexsmall", "Atildesmall", "Adieresissmall", "Aringsmall", "AEsmall", "Ccedillasmall", "Egravesmall", "Eacutesmall", "Ecircumflexsmall", "Edieresissmall", "Igravesmall", "Iacutesmall", "Icircumflexsmall", "Idieresissmall", "Ethsmall", "Ntildesmall", "Ogravesmall", "Oacutesmall", "Ocircumflexsmall", "Otildesmall", "Odieresissmall", "OEsmall", "Oslashsmall", "Ugravesmall", "Uacutesmall", "Ucircumflexsmall", "Udieresissmall", "Yacutesmall", "Thornsmall", "Ydieresissmall", "001.000", "001.001", "001.002", "001.003", "Black", "Bold", "Book", "Light", "Medium", "Regular", "Roman", "Semibold"];
var Xp = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "space", "exclam", "quotedbl", "numbersign", "dollar", "percent", "ampersand", "quoteright", "parenleft", "parenright", "asterisk", "plus", "comma", "hyphen", "period", "slash", "zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "colon", "semicolon", "less", "equal", "greater", "question", "at", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "bracketleft", "backslash", "bracketright", "asciicircum", "underscore", "quoteleft", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "braceleft", "bar", "braceright", "asciitilde", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "exclamdown", "cent", "sterling", "fraction", "yen", "florin", "section", "currency", "quotesingle", "quotedblleft", "guillemotleft", "guilsinglleft", "guilsinglright", "fi", "fl", "", "endash", "dagger", "daggerdbl", "periodcentered", "", "paragraph", "bullet", "quotesinglbase", "quotedblbase", "quotedblright", "guillemotright", "ellipsis", "perthousand", "", "questiondown", "", "grave", "acute", "circumflex", "tilde", "macron", "breve", "dotaccent", "dieresis", "", "ring", "cedilla", "", "hungarumlaut", "ogonek", "caron", "emdash", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "AE", "", "ordfeminine", "", "", "", "", "Lslash", "Oslash", "OE", "ordmasculine", "", "", "", "", "", "ae", "", "", "", "dotlessi", "", "", "lslash", "oslash", "oe", "germandbls"];
var qp = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "space", "exclamsmall", "Hungarumlautsmall", "", "dollaroldstyle", "dollarsuperior", "ampersandsmall", "Acutesmall", "parenleftsuperior", "parenrightsuperior", "twodotenleader", "onedotenleader", "comma", "hyphen", "period", "fraction", "zerooldstyle", "oneoldstyle", "twooldstyle", "threeoldstyle", "fouroldstyle", "fiveoldstyle", "sixoldstyle", "sevenoldstyle", "eightoldstyle", "nineoldstyle", "colon", "semicolon", "commasuperior", "threequartersemdash", "periodsuperior", "questionsmall", "", "asuperior", "bsuperior", "centsuperior", "dsuperior", "esuperior", "", "", "isuperior", "", "", "lsuperior", "msuperior", "nsuperior", "osuperior", "", "", "rsuperior", "ssuperior", "tsuperior", "", "ff", "fi", "fl", "ffi", "ffl", "parenleftinferior", "", "parenrightinferior", "Circumflexsmall", "hyphensuperior", "Gravesmall", "Asmall", "Bsmall", "Csmall", "Dsmall", "Esmall", "Fsmall", "Gsmall", "Hsmall", "Ismall", "Jsmall", "Ksmall", "Lsmall", "Msmall", "Nsmall", "Osmall", "Psmall", "Qsmall", "Rsmall", "Ssmall", "Tsmall", "Usmall", "Vsmall", "Wsmall", "Xsmall", "Ysmall", "Zsmall", "colonmonetary", "onefitted", "rupiah", "Tildesmall", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "exclamdownsmall", "centoldstyle", "Lslashsmall", "", "", "Scaronsmall", "Zcaronsmall", "Dieresissmall", "Brevesmall", "Caronsmall", "", "Dotaccentsmall", "", "", "Macronsmall", "", "", "figuredash", "hypheninferior", "", "", "Ogoneksmall", "Ringsmall", "Cedillasmall", "", "", "", "onequarter", "onehalf", "threequarters", "questiondownsmall", "oneeighth", "threeeighths", "fiveeighths", "seveneighths", "onethird", "twothirds", "", "", "zerosuperior", "onesuperior", "twosuperior", "threesuperior", "foursuperior", "fivesuperior", "sixsuperior", "sevensuperior", "eightsuperior", "ninesuperior", "zeroinferior", "oneinferior", "twoinferior", "threeinferior", "fourinferior", "fiveinferior", "sixinferior", "seveninferior", "eightinferior", "nineinferior", "centinferior", "dollarinferior", "periodinferior", "commainferior", "Agravesmall", "Aacutesmall", "Acircumflexsmall", "Atildesmall", "Adieresissmall", "Aringsmall", "AEsmall", "Ccedillasmall", "Egravesmall", "Eacutesmall", "Ecircumflexsmall", "Edieresissmall", "Igravesmall", "Iacutesmall", "Icircumflexsmall", "Idieresissmall", "Ethsmall", "Ntildesmall", "Ogravesmall", "Oacutesmall", "Ocircumflexsmall", "Otildesmall", "Odieresissmall", "OEsmall", "Oslashsmall", "Ugravesmall", "Uacutesmall", "Ucircumflexsmall", "Udieresissmall", "Yacutesmall", "Thornsmall", "Ydieresissmall"];
function Vs(e) {
  this.font = e;
}
Vs.prototype.charToGlyphIndex = function(e) {
  var t = e.codePointAt(0), r = this.font.glyphs;
  if (r) {
    for (var n = 0; n < r.length; n += 1)
      for (var i = r.get(n), a = 0; a < i.unicodes.length; a += 1)
        if (i.unicodes[a] === t)
          return n;
  }
  return null;
};
function Hs(e) {
  this.cmap = e;
}
Hs.prototype.charToGlyphIndex = function(e) {
  return this.cmap.glyphIndexMap[e.codePointAt(0)] || 0;
};
function kn(e, t) {
  this.encoding = e, this.charset = t;
}
kn.prototype.charToGlyphIndex = function(e) {
  var t = e.codePointAt(0), r = this.encoding[t];
  return this.charset.indexOf(r);
};
function Yp(e) {
  for (var t, r = e.tables.cmap.glyphIndexMap, n = Object.keys(r), i = 0; i < n.length; i += 1) {
    var a = n[i], o = r[a];
    t = e.glyphs.get(o), t.addUnicode(parseInt(a));
  }
}
function Zp(e) {
  e._IndexToUnicodeMap = {};
  for (var t = e.tables.cmap.glyphIndexMap, r = Object.keys(t), n = 0; n < r.length; n += 1) {
    var i = r[n], a = t[i];
    e._IndexToUnicodeMap[a] === void 0 ? e._IndexToUnicodeMap[a] = { unicodes: [parseInt(i)] } : e._IndexToUnicodeMap[a].unicodes.push(parseInt(i));
  }
}
function Jp(e, t) {
  t.lowMemory ? Zp(e) : Yp(e);
}
function Xs(e) {
  throw new Error(e);
}
function cs(e, t) {
  e || Xs(t);
}
var Te = { fail: Xs, argument: cs, assert: cs };
function Kp(e, t) {
  var r = t || new ot();
  return { configurable: true, get: function() {
    return typeof r == "function" && (r = r()), r;
  }, set: function(n) {
    r = n;
  } };
}
function Jt(e) {
  this.bindConstructorValues(e);
}
Jt.prototype.bindConstructorValues = function(e) {
  this.index = e.index || 0, this.name = e.name || null, this.unicode = e.unicode || void 0, this.unicodes = e.unicodes || e.unicode !== void 0 ? [e.unicode] : [], "xMin" in e && (this.xMin = e.xMin), "yMin" in e && (this.yMin = e.yMin), "xMax" in e && (this.xMax = e.xMax), "yMax" in e && (this.yMax = e.yMax), "advanceWidth" in e && (this.advanceWidth = e.advanceWidth), Object.defineProperty(this, "path", Kp(this, e.path));
};
Jt.prototype.addUnicode = function(e) {
  this.unicodes.length === 0 && (this.unicode = e), this.unicodes.push(e);
};
Jt.prototype.getPath = function(e, t, r, n, i) {
  e = e !== void 0 ? e : 0, t = t !== void 0 ? t : 0, r = r !== void 0 ? r : 72;
  var a, o;
  n || (n = {});
  var u = n.xScale, s = n.yScale;
  if (n.hinting && i && i.hinting && (o = this.path && i.hinting.exec(this, r)), o)
    a = i.hinting.getCommands(o), e = Math.round(e), t = Math.round(t), u = s = 1;
  else {
    a = this.path.commands;
    var l = 1 / (this.path.unitsPerEm || 1e3) * r;
    u === void 0 && (u = l), s === void 0 && (s = l);
  }
  for (var f = new ot(), c = 0; c < a.length; c += 1) {
    var p = a[c];
    p.type === "M" ? f.moveTo(e + p.x * u, t + -p.y * s) : p.type === "L" ? f.lineTo(e + p.x * u, t + -p.y * s) : p.type === "Q" ? f.quadraticCurveTo(e + p.x1 * u, t + -p.y1 * s, e + p.x * u, t + -p.y * s) : p.type === "C" ? f.curveTo(e + p.x1 * u, t + -p.y1 * s, e + p.x2 * u, t + -p.y2 * s, e + p.x * u, t + -p.y * s) : p.type === "Z" && f.closePath();
  }
  return f;
};
Jt.prototype.getContours = function() {
  if (this.points === void 0)
    return [];
  for (var e = [], t = [], r = 0; r < this.points.length; r += 1) {
    var n = this.points[r];
    t.push(n), n.lastPointOfContour && (e.push(t), t = []);
  }
  return Te.argument(t.length === 0, "There are still points left in the current contour."), e;
};
Jt.prototype.getMetrics = function() {
  for (var e = this.path.commands, t = [], r = [], n = 0; n < e.length; n += 1) {
    var i = e[n];
    i.type !== "Z" && (t.push(i.x), r.push(i.y)), (i.type === "Q" || i.type === "C") && (t.push(i.x1), r.push(i.y1)), i.type === "C" && (t.push(i.x2), r.push(i.y2));
  }
  var a = { xMin: Math.min.apply(null, t), yMin: Math.min.apply(null, r), xMax: Math.max.apply(null, t), yMax: Math.max.apply(null, r), leftSideBearing: this.leftSideBearing };
  return isFinite(a.xMin) || (a.xMin = 0), isFinite(a.xMax) || (a.xMax = this.advanceWidth), isFinite(a.yMin) || (a.yMin = 0), isFinite(a.yMax) || (a.yMax = 0), a.rightSideBearing = this.advanceWidth - a.leftSideBearing - (a.xMax - a.xMin), a;
};
function Fn(e, t, r) {
  Object.defineProperty(e, t, { get: function() {
    return e.path, e[r];
  }, set: function(n) {
    e[r] = n;
  }, enumerable: true, configurable: true });
}
function ia(e, t) {
  if (this.font = e, this.glyphs = {}, Array.isArray(t))
    for (var r = 0; r < t.length; r++) {
      var n = t[r];
      n.path.unitsPerEm = e.unitsPerEm, this.glyphs[r] = n;
    }
  this.length = t && t.length || 0;
}
ia.prototype.get = function(e) {
  if (this.glyphs[e] === void 0) {
    this.font._push(e), typeof this.glyphs[e] == "function" && (this.glyphs[e] = this.glyphs[e]());
    var t = this.glyphs[e], r = this.font._IndexToUnicodeMap[e];
    if (r)
      for (var n = 0; n < r.unicodes.length; n++)
        t.addUnicode(r.unicodes[n]);
    this.glyphs[e].advanceWidth = this.font._hmtxTableData[e].advanceWidth, this.glyphs[e].leftSideBearing = this.font._hmtxTableData[e].leftSideBearing;
  } else
    typeof this.glyphs[e] == "function" && (this.glyphs[e] = this.glyphs[e]());
  return this.glyphs[e];
};
ia.prototype.push = function(e, t) {
  this.glyphs[e] = t, this.length++;
};
function Qp(e, t) {
  return new Jt({ index: t, font: e });
}
function eh(e, t, r, n, i, a) {
  return function() {
    var o = new Jt({ index: t, font: e });
    return o.path = function() {
      r(o, n, i);
      var u = a(e.glyphs, o);
      return u.unitsPerEm = e.unitsPerEm, u;
    }, Fn(o, "xMin", "_xMin"), Fn(o, "xMax", "_xMax"), Fn(o, "yMin", "_yMin"), Fn(o, "yMax", "_yMax"), o;
  };
}
function th(e, t, r, n) {
  return function() {
    var i = new Jt({ index: t, font: e });
    return i.path = function() {
      var a = r(e, i, n);
      return a.unitsPerEm = e.unitsPerEm, a;
    }, i;
  };
}
var $t = { GlyphSet: ia, glyphLoader: Qp, ttfGlyphLoader: eh, cffGlyphLoader: th };
function qi(e, t) {
  for (var r = 0, n = e.length - 1; r <= n; ) {
    var i = r + n >>> 1, a = e[i].tag;
    if (a === t)
      return i;
    a < t ? r = i + 1 : n = i - 1;
  }
  return -r - 1;
}
function ps(e, t) {
  for (var r = 0, n = e.length - 1; r <= n; ) {
    var i = r + n >>> 1, a = e[i];
    if (a === t)
      return i;
    a < t ? r = i + 1 : n = i - 1;
  }
  return -r - 1;
}
function hs(e, t) {
  for (var r, n = 0, i = e.length - 1; n <= i; ) {
    var a = n + i >>> 1;
    r = e[a];
    var o = r.start;
    if (o === t)
      return r;
    o < t ? n = a + 1 : i = a - 1;
  }
  if (n > 0)
    return r = e[n - 1], t > r.end ? 0 : r;
}
function jr(e, t) {
  this.font = e, this.tableName = t;
}
jr.prototype = { searchTag: qi, binSearch: ps, getTable: function(e) {
  var t = this.font.tables[this.tableName];
  return !t && e && (t = this.font.tables[this.tableName] = this.createDefaultTable()), t;
}, getDefaultScriptName: function() {
  var e = this.getTable();
  if (e) {
    for (var t = false, r = 0; r < e.scripts.length; r++) {
      var n = e.scripts[r].tag;
      if (n === "DFLT")
        return n;
      n === "latn" && (t = true);
    }
    if (t)
      return "latn";
  }
}, getScriptTable: function(e, t) {
  var r = this.getTable(t);
  if (r) {
    e = e || "DFLT";
    var n = r.scripts, i = qi(r.scripts, e);
    if (i >= 0)
      return n[i].script;
    if (t) {
      var a = { tag: e, script: { defaultLangSys: { reserved: 0, reqFeatureIndex: 65535, featureIndexes: [] }, langSysRecords: [] } };
      return n.splice(-1 - i, 0, a), a.script;
    }
  }
}, getLangSysTable: function(e, t, r) {
  var n = this.getScriptTable(e, r);
  if (n) {
    if (!t || t === "dflt" || t === "DFLT")
      return n.defaultLangSys;
    var i = qi(n.langSysRecords, t);
    if (i >= 0)
      return n.langSysRecords[i].langSys;
    if (r) {
      var a = { tag: t, langSys: { reserved: 0, reqFeatureIndex: 65535, featureIndexes: [] } };
      return n.langSysRecords.splice(-1 - i, 0, a), a.langSys;
    }
  }
}, getFeatureTable: function(e, t, r, n) {
  var i = this.getLangSysTable(e, t, n);
  if (i) {
    for (var a, o = i.featureIndexes, u = this.font.tables[this.tableName].features, s = 0; s < o.length; s++)
      if (a = u[o[s]], a.tag === r)
        return a.feature;
    if (n) {
      var l = u.length;
      return Te.assert(l === 0 || r >= u[l - 1].tag, "Features must be added in alphabetical order."), a = { tag: r, feature: { params: 0, lookupListIndexes: [] } }, u.push(a), o.push(l), a.feature;
    }
  }
}, getLookupTables: function(e, t, r, n, i) {
  var a = this.getFeatureTable(e, t, r, i), o = [];
  if (a) {
    for (var u, s = a.lookupListIndexes, l = this.font.tables[this.tableName].lookups, f = 0; f < s.length; f++)
      u = l[s[f]], u.lookupType === n && o.push(u);
    if (o.length === 0 && i) {
      u = { lookupType: n, lookupFlag: 0, subtables: [], markFilteringSet: void 0 };
      var c = l.length;
      return l.push(u), s.push(c), [u];
    }
  }
  return o;
}, getGlyphClass: function(e, t) {
  switch (e.format) {
    case 1:
      return e.startGlyph <= t && t < e.startGlyph + e.classes.length ? e.classes[t - e.startGlyph] : 0;
    case 2:
      var r = hs(e.ranges, t);
      return r ? r.classId : 0;
  }
}, getCoverageIndex: function(e, t) {
  switch (e.format) {
    case 1:
      var r = ps(e.glyphs, t);
      return r >= 0 ? r : -1;
    case 2:
      var n = hs(e.ranges, t);
      return n ? n.index + t - n.start : -1;
  }
}, expandCoverage: function(e) {
  if (e.format === 1)
    return e.glyphs;
  for (var t = [], r = e.ranges, n = 0; n < r.length; n++)
    for (var i = r[n], a = i.start, o = i.end, u = a; u <= o; u++)
      t.push(u);
  return t;
} };
function zr(e) {
  jr.call(this, e, "gpos");
}
zr.prototype = jr.prototype;
zr.prototype.init = function() {
  var e = this.getDefaultScriptName();
  this.defaultKerningTables = this.getKerningTables(e);
};
zr.prototype.getKerningValue = function(e, t, r) {
  for (var n = 0; n < e.length; n++)
    for (var i = e[n].subtables, a = 0; a < i.length; a++) {
      var o = i[a], u = this.getCoverageIndex(o.coverage, t);
      if (!(u < 0))
        switch (o.posFormat) {
          case 1:
            for (var s = o.pairSets[u], l = 0; l < s.length; l++) {
              var f = s[l];
              if (f.secondGlyph === r)
                return f.value1 && f.value1.xAdvance || 0;
            }
            break;
          case 2:
            var c = this.getGlyphClass(o.classDef1, t), p = this.getGlyphClass(o.classDef2, r), d = o.classRecords[c][p];
            return d.value1 && d.value1.xAdvance || 0;
        }
    }
  return 0;
};
zr.prototype.getKerningTables = function(e, t) {
  if (this.font.tables.gpos)
    return this.getLookupTables(e, t, "kern", 2);
};
function gt(e) {
  jr.call(this, e, "gsub");
}
function rh(e, t) {
  var r = e.length;
  if (r !== t.length)
    return false;
  for (var n = 0; n < r; n++)
    if (e[n] !== t[n])
      return false;
  return true;
}
function aa(e, t, r) {
  for (var n = e.subtables, i = 0; i < n.length; i++) {
    var a = n[i];
    if (a.substFormat === t)
      return a;
  }
  if (r)
    return n.push(r), r;
}
gt.prototype = jr.prototype;
gt.prototype.createDefaultTable = function() {
  return { version: 1, scripts: [{ tag: "DFLT", script: { defaultLangSys: { reserved: 0, reqFeatureIndex: 65535, featureIndexes: [] }, langSysRecords: [] } }], features: [], lookups: [] };
};
gt.prototype.getSingle = function(e, t, r) {
  for (var n = [], i = this.getLookupTables(t, r, e, 1), a = 0; a < i.length; a++)
    for (var o = i[a].subtables, u = 0; u < o.length; u++) {
      var s = o[u], l = this.expandCoverage(s.coverage), f = void 0;
      if (s.substFormat === 1) {
        var c = s.deltaGlyphId;
        for (f = 0; f < l.length; f++) {
          var p = l[f];
          n.push({ sub: p, by: p + c });
        }
      } else {
        var d = s.substitute;
        for (f = 0; f < l.length; f++)
          n.push({ sub: l[f], by: d[f] });
      }
    }
  return n;
};
gt.prototype.getMultiple = function(e, t, r) {
  for (var n = [], i = this.getLookupTables(t, r, e, 2), a = 0; a < i.length; a++)
    for (var o = i[a].subtables, u = 0; u < o.length; u++) {
      var s = o[u], l = this.expandCoverage(s.coverage), f = void 0;
      for (f = 0; f < l.length; f++) {
        var c = l[f], p = s.sequences[f];
        n.push({ sub: c, by: p });
      }
    }
  return n;
};
gt.prototype.getAlternates = function(e, t, r) {
  for (var n = [], i = this.getLookupTables(t, r, e, 3), a = 0; a < i.length; a++)
    for (var o = i[a].subtables, u = 0; u < o.length; u++)
      for (var s = o[u], l = this.expandCoverage(s.coverage), f = s.alternateSets, c = 0; c < l.length; c++)
        n.push({ sub: l[c], by: f[c] });
  return n;
};
gt.prototype.getLigatures = function(e, t, r) {
  for (var n = [], i = this.getLookupTables(t, r, e, 4), a = 0; a < i.length; a++)
    for (var o = i[a].subtables, u = 0; u < o.length; u++)
      for (var s = o[u], l = this.expandCoverage(s.coverage), f = s.ligatureSets, c = 0; c < l.length; c++)
        for (var p = l[c], d = f[c], D = 0; D < d.length; D++) {
          var v = d[D];
          n.push({ sub: [p].concat(v.components), by: v.ligGlyph });
        }
  return n;
};
gt.prototype.addSingle = function(e, t, r, n) {
  var i = this.getLookupTables(r, n, e, 1, true)[0], a = aa(i, 2, { substFormat: 2, coverage: { format: 1, glyphs: [] }, substitute: [] });
  Te.assert(a.coverage.format === 1, "Single: unable to modify coverage table format " + a.coverage.format);
  var o = t.sub, u = this.binSearch(a.coverage.glyphs, o);
  u < 0 && (u = -1 - u, a.coverage.glyphs.splice(u, 0, o), a.substitute.splice(u, 0, 0)), a.substitute[u] = t.by;
};
gt.prototype.addMultiple = function(e, t, r, n) {
  Te.assert(t.by instanceof Array && t.by.length > 1, 'Multiple: "by" must be an array of two or more ids');
  var i = this.getLookupTables(r, n, e, 2, true)[0], a = aa(i, 1, { substFormat: 1, coverage: { format: 1, glyphs: [] }, sequences: [] });
  Te.assert(a.coverage.format === 1, "Multiple: unable to modify coverage table format " + a.coverage.format);
  var o = t.sub, u = this.binSearch(a.coverage.glyphs, o);
  u < 0 && (u = -1 - u, a.coverage.glyphs.splice(u, 0, o), a.sequences.splice(u, 0, 0)), a.sequences[u] = t.by;
};
gt.prototype.addAlternate = function(e, t, r, n) {
  var i = this.getLookupTables(r, n, e, 3, true)[0], a = aa(i, 1, { substFormat: 1, coverage: { format: 1, glyphs: [] }, alternateSets: [] });
  Te.assert(a.coverage.format === 1, "Alternate: unable to modify coverage table format " + a.coverage.format);
  var o = t.sub, u = this.binSearch(a.coverage.glyphs, o);
  u < 0 && (u = -1 - u, a.coverage.glyphs.splice(u, 0, o), a.alternateSets.splice(u, 0, 0)), a.alternateSets[u] = t.by;
};
gt.prototype.addLigature = function(e, t, r, n) {
  var i = this.getLookupTables(r, n, e, 4, true)[0], a = i.subtables[0];
  a || (a = { substFormat: 1, coverage: { format: 1, glyphs: [] }, ligatureSets: [] }, i.subtables[0] = a), Te.assert(a.coverage.format === 1, "Ligature: unable to modify coverage table format " + a.coverage.format);
  var o = t.sub[0], u = t.sub.slice(1), s = { ligGlyph: t.by, components: u }, l = this.binSearch(a.coverage.glyphs, o);
  if (l >= 0) {
    for (var f = a.ligatureSets[l], c = 0; c < f.length; c++)
      if (rh(f[c].components, u))
        return;
    f.push(s);
  } else
    l = -1 - l, a.coverage.glyphs.splice(l, 0, o), a.ligatureSets.splice(l, 0, [s]);
};
gt.prototype.getFeature = function(e, t, r) {
  if (/ss\d\d/.test(e))
    return this.getSingle(e, t, r);
  switch (e) {
    case "aalt":
    case "salt":
      return this.getSingle(e, t, r).concat(this.getAlternates(e, t, r));
    case "dlig":
    case "liga":
    case "rlig":
      return this.getLigatures(e, t, r);
    case "ccmp":
      return this.getMultiple(e, t, r).concat(this.getLigatures(e, t, r));
    case "stch":
      return this.getMultiple(e, t, r);
  }
};
gt.prototype.add = function(e, t, r, n) {
  if (/ss\d\d/.test(e))
    return this.addSingle(e, t, r, n);
  switch (e) {
    case "aalt":
    case "salt":
      return typeof t.by == "number" ? this.addSingle(e, t, r, n) : this.addAlternate(e, t, r, n);
    case "dlig":
    case "liga":
    case "rlig":
      return this.addLigature(e, t, r, n);
    case "ccmp":
      return t.by instanceof Array ? this.addMultiple(e, t, r, n) : this.addLigature(e, t, r, n);
  }
};
function Nr(e, t) {
  if (!e)
    throw t;
}
function ds(e, t) {
  return e.getUint8(t);
}
function Tn(e, t) {
  return e.getUint16(t, false);
}
function nh(e, t) {
  return e.getInt16(t, false);
}
function oa(e, t) {
  return e.getUint32(t, false);
}
function qs(e, t) {
  var r = e.getInt16(t, false), n = e.getUint16(t + 2, false);
  return r + n / 65535;
}
function ih(e, t) {
  for (var r = "", n = t; n < t + 4; n += 1)
    r += String.fromCharCode(e.getInt8(n));
  return r;
}
function ah(e, t, r) {
  for (var n = 0, i = 0; i < r; i += 1)
    n <<= 8, n += e.getUint8(t + i);
  return n;
}
function oh(e, t, r) {
  for (var n = [], i = t; i < r; i += 1)
    n.push(e.getUint8(i));
  return n;
}
function sh(e) {
  for (var t = "", r = 0; r < e.length; r += 1)
    t += String.fromCharCode(e[r]);
  return t;
}
var uh = { byte: 1, uShort: 2, short: 2, uLong: 4, fixed: 4, longDateTime: 8, tag: 4 };
function $(e, t) {
  this.data = e, this.offset = t, this.relativeOffset = 0;
}
$.prototype.parseByte = function() {
  var e = this.data.getUint8(this.offset + this.relativeOffset);
  return this.relativeOffset += 1, e;
};
$.prototype.parseChar = function() {
  var e = this.data.getInt8(this.offset + this.relativeOffset);
  return this.relativeOffset += 1, e;
};
$.prototype.parseCard8 = $.prototype.parseByte;
$.prototype.parseUShort = function() {
  var e = this.data.getUint16(this.offset + this.relativeOffset);
  return this.relativeOffset += 2, e;
};
$.prototype.parseCard16 = $.prototype.parseUShort;
$.prototype.parseSID = $.prototype.parseUShort;
$.prototype.parseOffset16 = $.prototype.parseUShort;
$.prototype.parseShort = function() {
  var e = this.data.getInt16(this.offset + this.relativeOffset);
  return this.relativeOffset += 2, e;
};
$.prototype.parseF2Dot14 = function() {
  var e = this.data.getInt16(this.offset + this.relativeOffset) / 16384;
  return this.relativeOffset += 2, e;
};
$.prototype.parseULong = function() {
  var e = oa(this.data, this.offset + this.relativeOffset);
  return this.relativeOffset += 4, e;
};
$.prototype.parseOffset32 = $.prototype.parseULong;
$.prototype.parseFixed = function() {
  var e = qs(this.data, this.offset + this.relativeOffset);
  return this.relativeOffset += 4, e;
};
$.prototype.parseString = function(e) {
  var t = this.data, r = this.offset + this.relativeOffset, n = "";
  this.relativeOffset += e;
  for (var i = 0; i < e; i++)
    n += String.fromCharCode(t.getUint8(r + i));
  return n;
};
$.prototype.parseTag = function() {
  return this.parseString(4);
};
$.prototype.parseLongDateTime = function() {
  var e = oa(this.data, this.offset + this.relativeOffset + 4);
  return e -= 2082844800, this.relativeOffset += 8, e;
};
$.prototype.parseVersion = function(e) {
  var t = Tn(this.data, this.offset + this.relativeOffset), r = Tn(this.data, this.offset + this.relativeOffset + 2);
  return this.relativeOffset += 4, e === void 0 && (e = 4096), t + r / e / 10;
};
$.prototype.skip = function(e, t) {
  t === void 0 && (t = 1), this.relativeOffset += uh[e] * t;
};
$.prototype.parseULongList = function(e) {
  e === void 0 && (e = this.parseULong());
  for (var t = new Array(e), r = this.data, n = this.offset + this.relativeOffset, i = 0; i < e; i++)
    t[i] = r.getUint32(n), n += 4;
  return this.relativeOffset += e * 4, t;
};
$.prototype.parseOffset16List = $.prototype.parseUShortList = function(e) {
  e === void 0 && (e = this.parseUShort());
  for (var t = new Array(e), r = this.data, n = this.offset + this.relativeOffset, i = 0; i < e; i++)
    t[i] = r.getUint16(n), n += 2;
  return this.relativeOffset += e * 2, t;
};
$.prototype.parseShortList = function(e) {
  for (var t = new Array(e), r = this.data, n = this.offset + this.relativeOffset, i = 0; i < e; i++)
    t[i] = r.getInt16(n), n += 2;
  return this.relativeOffset += e * 2, t;
};
$.prototype.parseByteList = function(e) {
  for (var t = new Array(e), r = this.data, n = this.offset + this.relativeOffset, i = 0; i < e; i++)
    t[i] = r.getUint8(n++);
  return this.relativeOffset += e, t;
};
$.prototype.parseList = function(e, t) {
  t || (t = e, e = this.parseUShort());
  for (var r = new Array(e), n = 0; n < e; n++)
    r[n] = t.call(this);
  return r;
};
$.prototype.parseList32 = function(e, t) {
  t || (t = e, e = this.parseULong());
  for (var r = new Array(e), n = 0; n < e; n++)
    r[n] = t.call(this);
  return r;
};
$.prototype.parseRecordList = function(e, t) {
  t || (t = e, e = this.parseUShort());
  for (var r = new Array(e), n = Object.keys(t), i = 0; i < e; i++) {
    for (var a = {}, o = 0; o < n.length; o++) {
      var u = n[o], s = t[u];
      a[u] = s.call(this);
    }
    r[i] = a;
  }
  return r;
};
$.prototype.parseRecordList32 = function(e, t) {
  t || (t = e, e = this.parseULong());
  for (var r = new Array(e), n = Object.keys(t), i = 0; i < e; i++) {
    for (var a = {}, o = 0; o < n.length; o++) {
      var u = n[o], s = t[u];
      a[u] = s.call(this);
    }
    r[i] = a;
  }
  return r;
};
$.prototype.parseStruct = function(e) {
  if (typeof e == "function")
    return e.call(this);
  for (var t = Object.keys(e), r = {}, n = 0; n < t.length; n++) {
    var i = t[n], a = e[i];
    r[i] = a.call(this);
  }
  return r;
};
$.prototype.parseValueRecord = function(e) {
  if (e === void 0 && (e = this.parseUShort()), e !== 0) {
    var t = {};
    return e & 1 && (t.xPlacement = this.parseShort()), e & 2 && (t.yPlacement = this.parseShort()), e & 4 && (t.xAdvance = this.parseShort()), e & 8 && (t.yAdvance = this.parseShort()), e & 16 && (t.xPlaDevice = void 0, this.parseShort()), e & 32 && (t.yPlaDevice = void 0, this.parseShort()), e & 64 && (t.xAdvDevice = void 0, this.parseShort()), e & 128 && (t.yAdvDevice = void 0, this.parseShort()), t;
  }
};
$.prototype.parseValueRecordList = function() {
  for (var e = this.parseUShort(), t = this.parseUShort(), r = new Array(t), n = 0; n < t; n++)
    r[n] = this.parseValueRecord(e);
  return r;
};
$.prototype.parsePointer = function(e) {
  var t = this.parseOffset16();
  if (t > 0)
    return new $(this.data, this.offset + t).parseStruct(e);
};
$.prototype.parsePointer32 = function(e) {
  var t = this.parseOffset32();
  if (t > 0)
    return new $(this.data, this.offset + t).parseStruct(e);
};
$.prototype.parseListOfLists = function(e) {
  for (var t = this.parseOffset16List(), r = t.length, n = this.relativeOffset, i = new Array(r), a = 0; a < r; a++) {
    var o = t[a];
    if (o === 0) {
      i[a] = void 0;
      continue;
    }
    if (this.relativeOffset = o, e) {
      for (var u = this.parseOffset16List(), s = new Array(u.length), l = 0; l < u.length; l++)
        this.relativeOffset = o + u[l], s[l] = e.call(this);
      i[a] = s;
    } else
      i[a] = this.parseUShortList();
  }
  return this.relativeOffset = n, i;
};
$.prototype.parseCoverage = function() {
  var e = this.offset + this.relativeOffset, t = this.parseUShort(), r = this.parseUShort();
  if (t === 1)
    return { format: 1, glyphs: this.parseUShortList(r) };
  if (t === 2) {
    for (var n = new Array(r), i = 0; i < r; i++)
      n[i] = { start: this.parseUShort(), end: this.parseUShort(), index: this.parseUShort() };
    return { format: 2, ranges: n };
  }
  throw new Error("0x" + e.toString(16) + ": Coverage format must be 1 or 2.");
};
$.prototype.parseClassDef = function() {
  var e = this.offset + this.relativeOffset, t = this.parseUShort();
  if (t === 1)
    return { format: 1, startGlyph: this.parseUShort(), classes: this.parseUShortList() };
  if (t === 2)
    return { format: 2, ranges: this.parseRecordList({ start: $.uShort, end: $.uShort, classId: $.uShort }) };
  throw new Error("0x" + e.toString(16) + ": ClassDef format must be 1 or 2.");
};
$.list = function(e, t) {
  return function() {
    return this.parseList(e, t);
  };
};
$.list32 = function(e, t) {
  return function() {
    return this.parseList32(e, t);
  };
};
$.recordList = function(e, t) {
  return function() {
    return this.parseRecordList(e, t);
  };
};
$.recordList32 = function(e, t) {
  return function() {
    return this.parseRecordList32(e, t);
  };
};
$.pointer = function(e) {
  return function() {
    return this.parsePointer(e);
  };
};
$.pointer32 = function(e) {
  return function() {
    return this.parsePointer32(e);
  };
};
$.tag = $.prototype.parseTag;
$.byte = $.prototype.parseByte;
$.uShort = $.offset16 = $.prototype.parseUShort;
$.uShortList = $.prototype.parseUShortList;
$.uLong = $.offset32 = $.prototype.parseULong;
$.uLongList = $.prototype.parseULongList;
$.struct = $.prototype.parseStruct;
$.coverage = $.prototype.parseCoverage;
$.classDef = $.prototype.parseClassDef;
var vs = { reserved: $.uShort, reqFeatureIndex: $.uShort, featureIndexes: $.uShortList };
$.prototype.parseScriptList = function() {
  return this.parsePointer($.recordList({ tag: $.tag, script: $.pointer({ defaultLangSys: $.pointer(vs), langSysRecords: $.recordList({ tag: $.tag, langSys: $.pointer(vs) }) }) })) || [];
};
$.prototype.parseFeatureList = function() {
  return this.parsePointer($.recordList({ tag: $.tag, feature: $.pointer({ featureParams: $.offset16, lookupListIndexes: $.uShortList }) })) || [];
};
$.prototype.parseLookupList = function(e) {
  return this.parsePointer($.list($.pointer(function() {
    var t = this.parseUShort();
    Te.argument(1 <= t && t <= 9, "GPOS/GSUB lookup type " + t + " unknown.");
    var r = this.parseUShort(), n = r & 16;
    return { lookupType: t, lookupFlag: r, subtables: this.parseList($.pointer(e[t])), markFilteringSet: n ? this.parseUShort() : void 0 };
  }))) || [];
};
$.prototype.parseFeatureVariationsList = function() {
  return this.parsePointer32(function() {
    var e = this.parseUShort(), t = this.parseUShort();
    Te.argument(e === 1 && t < 1, "GPOS/GSUB feature variations table unknown.");
    var r = this.parseRecordList32({ conditionSetOffset: $.offset32, featureTableSubstitutionOffset: $.offset32 });
    return r;
  }) || [];
};
var se = { getByte: ds, getCard8: ds, getUShort: Tn, getCard16: Tn, getShort: nh, getULong: oa, getFixed: qs, getTag: ih, getOffset: ah, getBytes: oh, bytesToString: sh, Parser: $ };
function gs(e, t, r, n, i) {
  var a;
  return (t & n) > 0 ? (a = e.parseByte(), t & i || (a = -a), a = r + a) : (t & i) > 0 ? a = r : a = r + e.parseShort(), a;
}
function Ys(e, t, r) {
  var n = new se.Parser(t, r);
  e.numberOfContours = n.parseShort(), e._xMin = n.parseShort(), e._yMin = n.parseShort(), e._xMax = n.parseShort(), e._yMax = n.parseShort();
  var i, a;
  if (e.numberOfContours > 0) {
    for (var o = e.endPointIndices = [], u = 0; u < e.numberOfContours; u += 1)
      o.push(n.parseUShort());
    e.instructionLength = n.parseUShort(), e.instructions = [];
    for (var s = 0; s < e.instructionLength; s += 1)
      e.instructions.push(n.parseByte());
    var l = o[o.length - 1] + 1;
    i = [];
    for (var f = 0; f < l; f += 1)
      if (a = n.parseByte(), i.push(a), (a & 8) > 0)
        for (var c = n.parseByte(), p = 0; p < c; p += 1)
          i.push(a), f += 1;
    if (Te.argument(i.length === l, "Bad flags."), o.length > 0) {
      var d = [], D;
      if (l > 0) {
        for (var v = 0; v < l; v += 1)
          a = i[v], D = {}, D.onCurve = !!(a & 1), D.lastPointOfContour = o.indexOf(v) >= 0, d.push(D);
        for (var g = 0, y = 0; y < l; y += 1)
          a = i[y], D = d[y], D.x = gs(n, a, g, 2, 16), g = D.x;
        for (var b = 0, C = 0; C < l; C += 1)
          a = i[C], D = d[C], D.y = gs(n, a, b, 4, 32), b = D.y;
      }
      e.points = d;
    } else
      e.points = [];
  } else if (e.numberOfContours === 0)
    e.points = [];
  else {
    e.isComposite = true, e.points = [], e.components = [];
    for (var k = true; k; ) {
      i = n.parseUShort();
      var S = { glyphIndex: n.parseUShort(), xScale: 1, scale01: 0, scale10: 0, yScale: 1, dx: 0, dy: 0 };
      (i & 1) > 0 ? (i & 2) > 0 ? (S.dx = n.parseShort(), S.dy = n.parseShort()) : S.matchedPoints = [n.parseUShort(), n.parseUShort()] : (i & 2) > 0 ? (S.dx = n.parseChar(), S.dy = n.parseChar()) : S.matchedPoints = [n.parseByte(), n.parseByte()], (i & 8) > 0 ? S.xScale = S.yScale = n.parseF2Dot14() : (i & 64) > 0 ? (S.xScale = n.parseF2Dot14(), S.yScale = n.parseF2Dot14()) : (i & 128) > 0 && (S.xScale = n.parseF2Dot14(), S.scale01 = n.parseF2Dot14(), S.scale10 = n.parseF2Dot14(), S.yScale = n.parseF2Dot14()), e.components.push(S), k = !!(i & 32);
    }
    if (i & 256) {
      e.instructionLength = n.parseUShort(), e.instructions = [];
      for (var E = 0; E < e.instructionLength; E += 1)
        e.instructions.push(n.parseByte());
    }
  }
}
function Yi(e, t) {
  for (var r = [], n = 0; n < e.length; n += 1) {
    var i = e[n], a = { x: t.xScale * i.x + t.scale01 * i.y + t.dx, y: t.scale10 * i.x + t.yScale * i.y + t.dy, onCurve: i.onCurve, lastPointOfContour: i.lastPointOfContour };
    r.push(a);
  }
  return r;
}
function lh(e) {
  for (var t = [], r = [], n = 0; n < e.length; n += 1) {
    var i = e[n];
    r.push(i), i.lastPointOfContour && (t.push(r), r = []);
  }
  return Te.argument(r.length === 0, "There are still points left in the current contour."), t;
}
function Zs(e) {
  var t = new ot();
  if (!e)
    return t;
  for (var r = lh(e), n = 0; n < r.length; ++n) {
    var i = r[n], a = null, o = i[i.length - 1], u = i[0];
    if (o.onCurve)
      t.moveTo(o.x, o.y);
    else if (u.onCurve)
      t.moveTo(u.x, u.y);
    else {
      var s = { x: (o.x + u.x) * 0.5, y: (o.y + u.y) * 0.5 };
      t.moveTo(s.x, s.y);
    }
    for (var l = 0; l < i.length; ++l)
      if (a = o, o = u, u = i[(l + 1) % i.length], o.onCurve)
        t.lineTo(o.x, o.y);
      else {
        var f = a, c = u;
        a.onCurve || (f = { x: (o.x + a.x) * 0.5, y: (o.y + a.y) * 0.5 }), u.onCurve || (c = { x: (o.x + u.x) * 0.5, y: (o.y + u.y) * 0.5 }), t.quadraticCurveTo(o.x, o.y, c.x, c.y);
      }
    t.closePath();
  }
  return t;
}
function Js(e, t) {
  if (t.isComposite)
    for (var r = 0; r < t.components.length; r += 1) {
      var n = t.components[r], i = e.get(n.glyphIndex);
      if (i.getPath(), i.points) {
        var a = void 0;
        if (n.matchedPoints === void 0)
          a = Yi(i.points, n);
        else {
          if (n.matchedPoints[0] > t.points.length - 1 || n.matchedPoints[1] > i.points.length - 1)
            throw Error("Matched points out of range in " + t.name);
          var o = t.points[n.matchedPoints[0]], u = i.points[n.matchedPoints[1]], s = { xScale: n.xScale, scale01: n.scale01, scale10: n.scale10, yScale: n.yScale, dx: 0, dy: 0 };
          u = Yi([u], s)[0], s.dx = o.x - u.x, s.dy = o.y - u.y, a = Yi(i.points, s);
        }
        t.points = t.points.concat(a);
      }
    }
  return Zs(t.points);
}
function fh(e, t, r, n) {
  for (var i = new $t.GlyphSet(n), a = 0; a < r.length - 1; a += 1) {
    var o = r[a], u = r[a + 1];
    o !== u ? i.push(a, $t.ttfGlyphLoader(n, a, Ys, e, t + o, Js)) : i.push(a, $t.glyphLoader(n, a));
  }
  return i;
}
function ch(e, t, r, n) {
  var i = new $t.GlyphSet(n);
  return n._push = function(a) {
    var o = r[a], u = r[a + 1];
    o !== u ? i.push(a, $t.ttfGlyphLoader(n, a, Ys, e, t + o, Js)) : i.push(a, $t.glyphLoader(n, a));
  }, i;
}
function ph(e, t, r, n, i) {
  return i.lowMemory ? ch(e, t, r, n) : fh(e, t, r, n);
}
var Ks = { getPath: Zs, parse: ph };
var Qs;
var Dr;
var eu;
var ra;
function tu(e) {
  this.font = e, this.getCommands = function(t) {
    return Ks.getPath(t).commands;
  }, this._fpgmState = this._prepState = void 0, this._errorState = 0;
}
function hh(e) {
  return e;
}
function ru(e) {
  return Math.sign(e) * Math.round(Math.abs(e));
}
function dh(e) {
  return Math.sign(e) * Math.round(Math.abs(e * 2)) / 2;
}
function vh(e) {
  return Math.sign(e) * (Math.round(Math.abs(e) + 0.5) - 0.5);
}
function gh(e) {
  return Math.sign(e) * Math.ceil(Math.abs(e));
}
function mh(e) {
  return Math.sign(e) * Math.floor(Math.abs(e));
}
var nu = function(e) {
  var t = this.srPeriod, r = this.srPhase, n = this.srThreshold, i = 1;
  return e < 0 && (e = -e, i = -1), e += n - r, e = Math.trunc(e / t) * t, e += r, e < 0 ? r * i : e * i;
};
var Wt = { x: 1, y: 0, axis: "x", distance: function(e, t, r, n) {
  return (r ? e.xo : e.x) - (n ? t.xo : t.x);
}, interpolate: function(e, t, r, n) {
  var i, a, o, u, s, l, f;
  if (!n || n === this) {
    if (i = e.xo - t.xo, a = e.xo - r.xo, s = t.x - t.xo, l = r.x - r.xo, o = Math.abs(i), u = Math.abs(a), f = o + u, f === 0) {
      e.x = e.xo + (s + l) / 2;
      return;
    }
    e.x = e.xo + (s * u + l * o) / f;
    return;
  }
  if (i = n.distance(e, t, true, true), a = n.distance(e, r, true, true), s = n.distance(t, t, false, true), l = n.distance(r, r, false, true), o = Math.abs(i), u = Math.abs(a), f = o + u, f === 0) {
    Wt.setRelative(e, e, (s + l) / 2, n, true);
    return;
  }
  Wt.setRelative(e, e, (s * u + l * o) / f, n, true);
}, normalSlope: Number.NEGATIVE_INFINITY, setRelative: function(e, t, r, n, i) {
  if (!n || n === this) {
    e.x = (i ? t.xo : t.x) + r;
    return;
  }
  var a = i ? t.xo : t.x, o = i ? t.yo : t.y, u = a + r * n.x, s = o + r * n.y;
  e.x = u + (e.y - s) / n.normalSlope;
}, slope: 0, touch: function(e) {
  e.xTouched = true;
}, touched: function(e) {
  return e.xTouched;
}, untouch: function(e) {
  e.xTouched = false;
} };
var Yt = { x: 0, y: 1, axis: "y", distance: function(e, t, r, n) {
  return (r ? e.yo : e.y) - (n ? t.yo : t.y);
}, interpolate: function(e, t, r, n) {
  var i, a, o, u, s, l, f;
  if (!n || n === this) {
    if (i = e.yo - t.yo, a = e.yo - r.yo, s = t.y - t.yo, l = r.y - r.yo, o = Math.abs(i), u = Math.abs(a), f = o + u, f === 0) {
      e.y = e.yo + (s + l) / 2;
      return;
    }
    e.y = e.yo + (s * u + l * o) / f;
    return;
  }
  if (i = n.distance(e, t, true, true), a = n.distance(e, r, true, true), s = n.distance(t, t, false, true), l = n.distance(r, r, false, true), o = Math.abs(i), u = Math.abs(a), f = o + u, f === 0) {
    Yt.setRelative(e, e, (s + l) / 2, n, true);
    return;
  }
  Yt.setRelative(e, e, (s * u + l * o) / f, n, true);
}, normalSlope: 0, setRelative: function(e, t, r, n, i) {
  if (!n || n === this) {
    e.y = (i ? t.yo : t.y) + r;
    return;
  }
  var a = i ? t.xo : t.x, o = i ? t.yo : t.y, u = a + r * n.x, s = o + r * n.y;
  e.y = s + n.normalSlope * (e.x - u);
}, slope: Number.POSITIVE_INFINITY, touch: function(e) {
  e.yTouched = true;
}, touched: function(e) {
  return e.yTouched;
}, untouch: function(e) {
  e.yTouched = false;
} };
Object.freeze(Wt);
Object.freeze(Yt);
function Vr(e, t) {
  this.x = e, this.y = t, this.axis = void 0, this.slope = t / e, this.normalSlope = -e / t, Object.freeze(this);
}
Vr.prototype.distance = function(e, t, r, n) {
  return this.x * Wt.distance(e, t, r, n) + this.y * Yt.distance(e, t, r, n);
};
Vr.prototype.interpolate = function(e, t, r, n) {
  var i, a, o, u, s, l, f;
  if (o = n.distance(e, t, true, true), u = n.distance(e, r, true, true), i = n.distance(t, t, false, true), a = n.distance(r, r, false, true), s = Math.abs(o), l = Math.abs(u), f = s + l, f === 0) {
    this.setRelative(e, e, (i + a) / 2, n, true);
    return;
  }
  this.setRelative(e, e, (i * l + a * s) / f, n, true);
};
Vr.prototype.setRelative = function(e, t, r, n, i) {
  n = n || this;
  var a = i ? t.xo : t.x, o = i ? t.yo : t.y, u = a + r * n.x, s = o + r * n.y, l = n.normalSlope, f = this.slope, c = e.x, p = e.y;
  e.x = (f * c - l * u + s - p) / (f - l), e.y = f * (e.x - c) + p;
};
Vr.prototype.touch = function(e) {
  e.xTouched = true, e.yTouched = true;
};
function Hr(e, t) {
  var r = Math.sqrt(e * e + t * t);
  return e /= r, t /= r, e === 1 && t === 0 ? Wt : e === 0 && t === 1 ? Yt : new Vr(e, t);
}
function Zt(e, t, r, n) {
  this.x = this.xo = Math.round(e * 64) / 64, this.y = this.yo = Math.round(t * 64) / 64, this.lastPointOfContour = r, this.onCurve = n, this.prevPointOnContour = void 0, this.nextPointOnContour = void 0, this.xTouched = false, this.yTouched = false, Object.preventExtensions(this);
}
Zt.prototype.nextTouched = function(e) {
  for (var t = this.nextPointOnContour; !e.touched(t) && t !== this; )
    t = t.nextPointOnContour;
  return t;
};
Zt.prototype.prevTouched = function(e) {
  for (var t = this.prevPointOnContour; !e.touched(t) && t !== this; )
    t = t.prevPointOnContour;
  return t;
};
var Wr = Object.freeze(new Zt(0, 0));
var Dh = { cvCutIn: 17 / 16, deltaBase: 9, deltaShift: 0.125, loop: 1, minDis: 1, autoFlip: true };
function ur(e, t) {
  switch (this.env = e, this.stack = [], this.prog = t, e) {
    case "glyf":
      this.zp0 = this.zp1 = this.zp2 = 1, this.rp0 = this.rp1 = this.rp2 = 0;
    case "prep":
      this.fv = this.pv = this.dpv = Wt, this.round = ru;
  }
}
tu.prototype.exec = function(e, t) {
  if (typeof t != "number")
    throw new Error("Point size is not a number!");
  if (!(this._errorState > 2)) {
    var r = this.font, n = this._prepState;
    if (!n || n.ppem !== t) {
      var i = this._fpgmState;
      if (!i) {
        ur.prototype = Dh, i = this._fpgmState = new ur("fpgm", r.tables.fpgm), i.funcs = [], i.font = r, exports.DEBUG && (console.log("---EXEC FPGM---"), i.step = -1);
        try {
          Dr(i);
        } catch (l) {
          console.log("Hinting error in FPGM:" + l), this._errorState = 3;
          return;
        }
      }
      ur.prototype = i, n = this._prepState = new ur("prep", r.tables.prep), n.ppem = t;
      var a = r.tables.cvt;
      if (a)
        for (var o = n.cvt = new Array(a.length), u = t / r.unitsPerEm, s = 0; s < a.length; s++)
          o[s] = a[s] * u;
      else
        n.cvt = [];
      exports.DEBUG && (console.log("---EXEC PREP---"), n.step = -1);
      try {
        Dr(n);
      } catch (l) {
        this._errorState < 2 && console.log("Hinting error in PREP:" + l), this._errorState = 2;
      }
    }
    if (!(this._errorState > 1))
      try {
        return eu(e, n);
      } catch (l) {
        this._errorState < 1 && (console.log("Hinting error:" + l), console.log("Note: further hinting errors are silenced")), this._errorState = 1;
        return;
      }
  }
};
eu = function(e, t) {
  var r = t.ppem / t.font.unitsPerEm, n = r, i = e.components, a, o, u;
  if (ur.prototype = t, !i)
    u = new ur("glyf", e.instructions), exports.DEBUG && (console.log("---EXEC GLYPH---"), u.step = -1), ra(e, u, r, n), o = u.gZone;
  else {
    var s = t.font;
    o = [], a = [];
    for (var l = 0; l < i.length; l++) {
      var f = i[l], c = s.glyphs.get(f.glyphIndex);
      u = new ur("glyf", c.instructions), exports.DEBUG && (console.log("---EXEC COMP " + l + "---"), u.step = -1), ra(c, u, r, n);
      for (var p = Math.round(f.dx * r), d = Math.round(f.dy * n), D = u.gZone, v = u.contours, g = 0; g < D.length; g++) {
        var y = D[g];
        y.xTouched = y.yTouched = false, y.xo = y.x = y.x + p, y.yo = y.y = y.y + d;
      }
      var b = o.length;
      o.push.apply(o, D);
      for (var C = 0; C < v.length; C++)
        a.push(v[C] + b);
    }
    e.instructions && !u.inhibitGridFit && (u = new ur("glyf", e.instructions), u.gZone = u.z0 = u.z1 = u.z2 = o, u.contours = a, o.push(new Zt(0, 0), new Zt(Math.round(e.advanceWidth * r), 0)), exports.DEBUG && (console.log("---EXEC COMPOSITE---"), u.step = -1), Dr(u), o.length -= 2);
  }
  return o;
};
ra = function(e, t, r, n) {
  for (var i = e.points || [], a = i.length, o = t.gZone = t.z0 = t.z1 = t.z2 = [], u = t.contours = [], s, l = 0; l < a; l++)
    s = i[l], o[l] = new Zt(s.x * r, s.y * n, s.lastPointOfContour, s.onCurve);
  for (var f, c, p = 0; p < a; p++)
    s = o[p], f || (f = s, u.push(p)), s.lastPointOfContour ? (s.nextPointOnContour = f, f.prevPointOnContour = s, f = void 0) : (c = o[p + 1], s.nextPointOnContour = c, c.prevPointOnContour = s);
  if (!t.inhibitGridFit) {
    if (exports.DEBUG) {
      console.log("PROCESSING GLYPH", t.stack);
      for (var d = 0; d < a; d++)
        console.log(d, o[d].x, o[d].y);
    }
    if (o.push(new Zt(0, 0), new Zt(Math.round(e.advanceWidth * r), 0)), Dr(t), o.length -= 2, exports.DEBUG) {
      console.log("FINISHED GLYPH", t.stack);
      for (var D = 0; D < a; D++)
        console.log(D, o[D].x, o[D].y);
    }
  }
};
Dr = function(e) {
  var t = e.prog;
  if (t) {
    var r = t.length, n;
    for (e.ip = 0; e.ip < r; e.ip++) {
      if (exports.DEBUG && e.step++, n = Qs[t[e.ip]], !n)
        throw new Error("unknown instruction: 0x" + Number(t[e.ip]).toString(16));
      n(e);
    }
  }
};
function _n(e) {
  for (var t = e.tZone = new Array(e.gZone.length), r = 0; r < t.length; r++)
    t[r] = new Zt(0, 0);
}
function iu(e, t) {
  var r = e.prog, n = e.ip, i = 1, a;
  do
    if (a = r[++n], a === 88)
      i++;
    else if (a === 89)
      i--;
    else if (a === 64)
      n += r[n + 1] + 1;
    else if (a === 65)
      n += 2 * r[n + 1] + 1;
    else if (a >= 176 && a <= 183)
      n += a - 176 + 1;
    else if (a >= 184 && a <= 191)
      n += (a - 184 + 1) * 2;
    else if (t && i === 1 && a === 27)
      break;
  while (i > 0);
  e.ip = n;
}
function ms(e, t) {
  exports.DEBUG && console.log(t.step, "SVTCA[" + e.axis + "]"), t.fv = t.pv = t.dpv = e;
}
function Ds(e, t) {
  exports.DEBUG && console.log(t.step, "SPVTCA[" + e.axis + "]"), t.pv = t.dpv = e;
}
function ys(e, t) {
  exports.DEBUG && console.log(t.step, "SFVTCA[" + e.axis + "]"), t.fv = e;
}
function bs(e, t) {
  var r = t.stack, n = r.pop(), i = r.pop(), a = t.z2[n], o = t.z1[i];
  exports.DEBUG && console.log("SPVTL[" + e + "]", n, i);
  var u, s;
  e ? (u = a.y - o.y, s = o.x - a.x) : (u = o.x - a.x, s = o.y - a.y), t.pv = t.dpv = Hr(u, s);
}
function xs(e, t) {
  var r = t.stack, n = r.pop(), i = r.pop(), a = t.z2[n], o = t.z1[i];
  exports.DEBUG && console.log("SFVTL[" + e + "]", n, i);
  var u, s;
  e ? (u = a.y - o.y, s = o.x - a.x) : (u = o.x - a.x, s = o.y - a.y), t.fv = Hr(u, s);
}
function yh(e) {
  var t = e.stack, r = t.pop(), n = t.pop();
  exports.DEBUG && console.log(e.step, "SPVFS[]", r, n), e.pv = e.dpv = Hr(n, r);
}
function bh(e) {
  var t = e.stack, r = t.pop(), n = t.pop();
  exports.DEBUG && console.log(e.step, "SPVFS[]", r, n), e.fv = Hr(n, r);
}
function xh(e) {
  var t = e.stack, r = e.pv;
  exports.DEBUG && console.log(e.step, "GPV[]"), t.push(r.x * 16384), t.push(r.y * 16384);
}
function wh(e) {
  var t = e.stack, r = e.fv;
  exports.DEBUG && console.log(e.step, "GFV[]"), t.push(r.x * 16384), t.push(r.y * 16384);
}
function Eh(e) {
  e.fv = e.pv, exports.DEBUG && console.log(e.step, "SFVTPV[]");
}
function Fh(e) {
  var t = e.stack, r = t.pop(), n = t.pop(), i = t.pop(), a = t.pop(), o = t.pop(), u = e.z0, s = e.z1, l = u[r], f = u[n], c = s[i], p = s[a], d = e.z2[o];
  exports.DEBUG && console.log("ISECT[], ", r, n, i, a, o);
  var D = l.x, v = l.y, g = f.x, y = f.y, b = c.x, C = c.y, k = p.x, S = p.y, E = (D - g) * (C - S) - (v - y) * (b - k), L = D * y - v * g, T = b * S - C * k;
  d.x = (L * (b - k) - T * (D - g)) / E, d.y = (L * (C - S) - T * (v - y)) / E;
}
function Ch(e) {
  e.rp0 = e.stack.pop(), exports.DEBUG && console.log(e.step, "SRP0[]", e.rp0);
}
function Sh(e) {
  e.rp1 = e.stack.pop(), exports.DEBUG && console.log(e.step, "SRP1[]", e.rp1);
}
function kh(e) {
  e.rp2 = e.stack.pop(), exports.DEBUG && console.log(e.step, "SRP2[]", e.rp2);
}
function Th(e) {
  var t = e.stack.pop();
  switch (exports.DEBUG && console.log(e.step, "SZP0[]", t), e.zp0 = t, t) {
    case 0:
      e.tZone || _n(e), e.z0 = e.tZone;
      break;
    case 1:
      e.z0 = e.gZone;
      break;
    default:
      throw new Error("Invalid zone pointer");
  }
}
function _h(e) {
  var t = e.stack.pop();
  switch (exports.DEBUG && console.log(e.step, "SZP1[]", t), e.zp1 = t, t) {
    case 0:
      e.tZone || _n(e), e.z1 = e.tZone;
      break;
    case 1:
      e.z1 = e.gZone;
      break;
    default:
      throw new Error("Invalid zone pointer");
  }
}
function Ah(e) {
  var t = e.stack.pop();
  switch (exports.DEBUG && console.log(e.step, "SZP2[]", t), e.zp2 = t, t) {
    case 0:
      e.tZone || _n(e), e.z2 = e.tZone;
      break;
    case 1:
      e.z2 = e.gZone;
      break;
    default:
      throw new Error("Invalid zone pointer");
  }
}
function Oh(e) {
  var t = e.stack.pop();
  switch (exports.DEBUG && console.log(e.step, "SZPS[]", t), e.zp0 = e.zp1 = e.zp2 = t, t) {
    case 0:
      e.tZone || _n(e), e.z0 = e.z1 = e.z2 = e.tZone;
      break;
    case 1:
      e.z0 = e.z1 = e.z2 = e.gZone;
      break;
    default:
      throw new Error("Invalid zone pointer");
  }
}
function Lh(e) {
  e.loop = e.stack.pop(), exports.DEBUG && console.log(e.step, "SLOOP[]", e.loop);
}
function Ih(e) {
  exports.DEBUG && console.log(e.step, "RTG[]"), e.round = ru;
}
function Ph(e) {
  exports.DEBUG && console.log(e.step, "RTHG[]"), e.round = vh;
}
function Rh(e) {
  var t = e.stack.pop();
  exports.DEBUG && console.log(e.step, "SMD[]", t), e.minDis = t / 64;
}
function Uh(e) {
  exports.DEBUG && console.log(e.step, "ELSE[]"), iu(e, false);
}
function Bh(e) {
  var t = e.stack.pop();
  exports.DEBUG && console.log(e.step, "JMPR[]", t), e.ip += t - 1;
}
function Nh(e) {
  var t = e.stack.pop();
  exports.DEBUG && console.log(e.step, "SCVTCI[]", t), e.cvCutIn = t / 64;
}
function Mh(e) {
  var t = e.stack;
  exports.DEBUG && console.log(e.step, "DUP[]"), t.push(t[t.length - 1]);
}
function Zi(e) {
  exports.DEBUG && console.log(e.step, "POP[]"), e.stack.pop();
}
function Gh(e) {
  exports.DEBUG && console.log(e.step, "CLEAR[]"), e.stack.length = 0;
}
function Wh(e) {
  var t = e.stack, r = t.pop(), n = t.pop();
  exports.DEBUG && console.log(e.step, "SWAP[]"), t.push(r), t.push(n);
}
function $h(e) {
  var t = e.stack;
  exports.DEBUG && console.log(e.step, "DEPTH[]"), t.push(t.length);
}
function jh(e) {
  var t = e.stack, r = t.pop(), n = t.pop();
  exports.DEBUG && console.log(e.step, "LOOPCALL[]", r, n);
  var i = e.ip, a = e.prog;
  e.prog = e.funcs[r];
  for (var o = 0; o < n; o++)
    Dr(e), exports.DEBUG && console.log(++e.step, o + 1 < n ? "next loopcall" : "done loopcall", o);
  e.ip = i, e.prog = a;
}
function zh(e) {
  var t = e.stack.pop();
  exports.DEBUG && console.log(e.step, "CALL[]", t);
  var r = e.ip, n = e.prog;
  e.prog = e.funcs[t], Dr(e), e.ip = r, e.prog = n, exports.DEBUG && console.log(++e.step, "returning from", t);
}
function Vh(e) {
  var t = e.stack, r = t.pop();
  exports.DEBUG && console.log(e.step, "CINDEX[]", r), t.push(t[t.length - r]);
}
function Hh(e) {
  var t = e.stack, r = t.pop();
  exports.DEBUG && console.log(e.step, "MINDEX[]", r), t.push(t.splice(t.length - r, 1)[0]);
}
function Xh(e) {
  if (e.env !== "fpgm")
    throw new Error("FDEF not allowed here");
  var t = e.stack, r = e.prog, n = e.ip, i = t.pop(), a = n;
  for (exports.DEBUG && console.log(e.step, "FDEF[]", i); r[++n] !== 45; )
    ;
  e.ip = n, e.funcs[i] = r.slice(a + 1, n);
}
function ws(e, t) {
  var r = t.stack.pop(), n = t.z0[r], i = t.fv, a = t.pv;
  exports.DEBUG && console.log(t.step, "MDAP[" + e + "]", r);
  var o = a.distance(n, Wr);
  e && (o = t.round(o)), i.setRelative(n, Wr, o, a), i.touch(n), t.rp0 = t.rp1 = r;
}
function Es(e, t) {
  var r = t.z2, n = r.length - 2, i, a, o;
  exports.DEBUG && console.log(t.step, "IUP[" + e.axis + "]");
  for (var u = 0; u < n; u++)
    i = r[u], !e.touched(i) && (a = i.prevTouched(e), a !== i && (o = i.nextTouched(e), a === o && e.setRelative(i, i, e.distance(a, a, false, true), e, true), e.interpolate(i, a, o, e)));
}
function Fs(e, t) {
  for (var r = t.stack, n = e ? t.rp1 : t.rp2, i = (e ? t.z0 : t.z1)[n], a = t.fv, o = t.pv, u = t.loop, s = t.z2; u--; ) {
    var l = r.pop(), f = s[l], c = o.distance(i, i, false, true);
    a.setRelative(f, f, c, o), a.touch(f), exports.DEBUG && console.log(t.step, (t.loop > 1 ? "loop " + (t.loop - u) + ": " : "") + "SHP[" + (e ? "rp1" : "rp2") + "]", l);
  }
  t.loop = 1;
}
function Cs(e, t) {
  var r = t.stack, n = e ? t.rp1 : t.rp2, i = (e ? t.z0 : t.z1)[n], a = t.fv, o = t.pv, u = r.pop(), s = t.z2[t.contours[u]], l = s;
  exports.DEBUG && console.log(t.step, "SHC[" + e + "]", u);
  var f = o.distance(i, i, false, true);
  do
    l !== i && a.setRelative(l, l, f, o), l = l.nextPointOnContour;
  while (l !== s);
}
function Ss(e, t) {
  var r = t.stack, n = e ? t.rp1 : t.rp2, i = (e ? t.z0 : t.z1)[n], a = t.fv, o = t.pv, u = r.pop();
  exports.DEBUG && console.log(t.step, "SHZ[" + e + "]", u);
  var s;
  switch (u) {
    case 0:
      s = t.tZone;
      break;
    case 1:
      s = t.gZone;
      break;
    default:
      throw new Error("Invalid zone");
  }
  for (var l, f = o.distance(i, i, false, true), c = s.length - 2, p = 0; p < c; p++)
    l = s[p], a.setRelative(l, l, f, o);
}
function qh(e) {
  for (var t = e.stack, r = e.loop, n = e.fv, i = t.pop() / 64, a = e.z2; r--; ) {
    var o = t.pop(), u = a[o];
    exports.DEBUG && console.log(e.step, (e.loop > 1 ? "loop " + (e.loop - r) + ": " : "") + "SHPIX[]", o, i), n.setRelative(u, u, i), n.touch(u);
  }
  e.loop = 1;
}
function Yh(e) {
  for (var t = e.stack, r = e.rp1, n = e.rp2, i = e.loop, a = e.z0[r], o = e.z1[n], u = e.fv, s = e.dpv, l = e.z2; i--; ) {
    var f = t.pop(), c = l[f];
    exports.DEBUG && console.log(e.step, (e.loop > 1 ? "loop " + (e.loop - i) + ": " : "") + "IP[]", f, r, "<->", n), u.interpolate(c, a, o, s), u.touch(c);
  }
  e.loop = 1;
}
function ks(e, t) {
  var r = t.stack, n = r.pop() / 64, i = r.pop(), a = t.z1[i], o = t.z0[t.rp0], u = t.fv, s = t.pv;
  u.setRelative(a, o, n, s), u.touch(a), exports.DEBUG && console.log(t.step, "MSIRP[" + e + "]", n, i), t.rp1 = t.rp0, t.rp2 = i, e && (t.rp0 = i);
}
function Zh(e) {
  for (var t = e.stack, r = e.rp0, n = e.z0[r], i = e.loop, a = e.fv, o = e.pv, u = e.z1; i--; ) {
    var s = t.pop(), l = u[s];
    exports.DEBUG && console.log(e.step, (e.loop > 1 ? "loop " + (e.loop - i) + ": " : "") + "ALIGNRP[]", s), a.setRelative(l, n, 0, o), a.touch(l);
  }
  e.loop = 1;
}
function Jh(e) {
  exports.DEBUG && console.log(e.step, "RTDG[]"), e.round = dh;
}
function Ts(e, t) {
  var r = t.stack, n = r.pop(), i = r.pop(), a = t.z0[i], o = t.fv, u = t.pv, s = t.cvt[n];
  exports.DEBUG && console.log(t.step, "MIAP[" + e + "]", n, "(", s, ")", i);
  var l = u.distance(a, Wr);
  e && (Math.abs(l - s) < t.cvCutIn && (l = s), l = t.round(l)), o.setRelative(a, Wr, l, u), t.zp0 === 0 && (a.xo = a.x, a.yo = a.y), o.touch(a), t.rp0 = t.rp1 = i;
}
function Kh(e) {
  var t = e.prog, r = e.ip, n = e.stack, i = t[++r];
  exports.DEBUG && console.log(e.step, "NPUSHB[]", i);
  for (var a = 0; a < i; a++)
    n.push(t[++r]);
  e.ip = r;
}
function Qh(e) {
  var t = e.ip, r = e.prog, n = e.stack, i = r[++t];
  exports.DEBUG && console.log(e.step, "NPUSHW[]", i);
  for (var a = 0; a < i; a++) {
    var o = r[++t] << 8 | r[++t];
    o & 32768 && (o = -((o ^ 65535) + 1)), n.push(o);
  }
  e.ip = t;
}
function ed(e) {
  var t = e.stack, r = e.store;
  r || (r = e.store = []);
  var n = t.pop(), i = t.pop();
  exports.DEBUG && console.log(e.step, "WS", n, i), r[i] = n;
}
function td(e) {
  var t = e.stack, r = e.store, n = t.pop();
  exports.DEBUG && console.log(e.step, "RS", n);
  var i = r && r[n] || 0;
  t.push(i);
}
function rd(e) {
  var t = e.stack, r = t.pop(), n = t.pop();
  exports.DEBUG && console.log(e.step, "WCVTP", r, n), e.cvt[n] = r / 64;
}
function nd(e) {
  var t = e.stack, r = t.pop();
  exports.DEBUG && console.log(e.step, "RCVT", r), t.push(e.cvt[r] * 64);
}
function _s(e, t) {
  var r = t.stack, n = r.pop(), i = t.z2[n];
  exports.DEBUG && console.log(t.step, "GC[" + e + "]", n), r.push(t.dpv.distance(i, Wr, e, false) * 64);
}
function As(e, t) {
  var r = t.stack, n = r.pop(), i = r.pop(), a = t.z1[n], o = t.z0[i], u = t.dpv.distance(o, a, e, e);
  exports.DEBUG && console.log(t.step, "MD[" + e + "]", n, i, "->", u), t.stack.push(Math.round(u * 64));
}
function id(e) {
  exports.DEBUG && console.log(e.step, "MPPEM[]"), e.stack.push(e.ppem);
}
function ad(e) {
  exports.DEBUG && console.log(e.step, "FLIPON[]"), e.autoFlip = true;
}
function od(e) {
  var t = e.stack, r = t.pop(), n = t.pop();
  exports.DEBUG && console.log(e.step, "LT[]", r, n), t.push(n < r ? 1 : 0);
}
function sd(e) {
  var t = e.stack, r = t.pop(), n = t.pop();
  exports.DEBUG && console.log(e.step, "LTEQ[]", r, n), t.push(n <= r ? 1 : 0);
}
function ud(e) {
  var t = e.stack, r = t.pop(), n = t.pop();
  exports.DEBUG && console.log(e.step, "GT[]", r, n), t.push(n > r ? 1 : 0);
}
function ld(e) {
  var t = e.stack, r = t.pop(), n = t.pop();
  exports.DEBUG && console.log(e.step, "GTEQ[]", r, n), t.push(n >= r ? 1 : 0);
}
function fd(e) {
  var t = e.stack, r = t.pop(), n = t.pop();
  exports.DEBUG && console.log(e.step, "EQ[]", r, n), t.push(r === n ? 1 : 0);
}
function cd(e) {
  var t = e.stack, r = t.pop(), n = t.pop();
  exports.DEBUG && console.log(e.step, "NEQ[]", r, n), t.push(r !== n ? 1 : 0);
}
function pd(e) {
  var t = e.stack, r = t.pop();
  exports.DEBUG && console.log(e.step, "ODD[]", r), t.push(Math.trunc(r) % 2 ? 1 : 0);
}
function hd(e) {
  var t = e.stack, r = t.pop();
  exports.DEBUG && console.log(e.step, "EVEN[]", r), t.push(Math.trunc(r) % 2 ? 0 : 1);
}
function dd(e) {
  var t = e.stack.pop();
  exports.DEBUG && console.log(e.step, "IF[]", t), t || (iu(e, true), exports.DEBUG && console.log(e.step, "EIF[]"));
}
function vd(e) {
  exports.DEBUG && console.log(e.step, "EIF[]");
}
function gd(e) {
  var t = e.stack, r = t.pop(), n = t.pop();
  exports.DEBUG && console.log(e.step, "AND[]", r, n), t.push(r && n ? 1 : 0);
}
function md(e) {
  var t = e.stack, r = t.pop(), n = t.pop();
  exports.DEBUG && console.log(e.step, "OR[]", r, n), t.push(r || n ? 1 : 0);
}
function Dd(e) {
  var t = e.stack, r = t.pop();
  exports.DEBUG && console.log(e.step, "NOT[]", r), t.push(r ? 0 : 1);
}
function Ji(e, t) {
  var r = t.stack, n = r.pop(), i = t.fv, a = t.pv, o = t.ppem, u = t.deltaBase + (e - 1) * 16, s = t.deltaShift, l = t.z0;
  exports.DEBUG && console.log(t.step, "DELTAP[" + e + "]", n, r);
  for (var f = 0; f < n; f++) {
    var c = r.pop(), p = r.pop(), d = u + ((p & 240) >> 4);
    if (d === o) {
      var D = (p & 15) - 8;
      D >= 0 && D++, exports.DEBUG && console.log(t.step, "DELTAPFIX", c, "by", D * s);
      var v = l[c];
      i.setRelative(v, v, D * s, a);
    }
  }
}
function yd(e) {
  var t = e.stack, r = t.pop();
  exports.DEBUG && console.log(e.step, "SDB[]", r), e.deltaBase = r;
}
function bd(e) {
  var t = e.stack, r = t.pop();
  exports.DEBUG && console.log(e.step, "SDS[]", r), e.deltaShift = Math.pow(0.5, r);
}
function xd(e) {
  var t = e.stack, r = t.pop(), n = t.pop();
  exports.DEBUG && console.log(e.step, "ADD[]", r, n), t.push(n + r);
}
function wd(e) {
  var t = e.stack, r = t.pop(), n = t.pop();
  exports.DEBUG && console.log(e.step, "SUB[]", r, n), t.push(n - r);
}
function Ed(e) {
  var t = e.stack, r = t.pop(), n = t.pop();
  exports.DEBUG && console.log(e.step, "DIV[]", r, n), t.push(n * 64 / r);
}
function Fd(e) {
  var t = e.stack, r = t.pop(), n = t.pop();
  exports.DEBUG && console.log(e.step, "MUL[]", r, n), t.push(n * r / 64);
}
function Cd(e) {
  var t = e.stack, r = t.pop();
  exports.DEBUG && console.log(e.step, "ABS[]", r), t.push(Math.abs(r));
}
function Sd(e) {
  var t = e.stack, r = t.pop();
  exports.DEBUG && console.log(e.step, "NEG[]", r), t.push(-r);
}
function kd(e) {
  var t = e.stack, r = t.pop();
  exports.DEBUG && console.log(e.step, "FLOOR[]", r), t.push(Math.floor(r / 64) * 64);
}
function Td(e) {
  var t = e.stack, r = t.pop();
  exports.DEBUG && console.log(e.step, "CEILING[]", r), t.push(Math.ceil(r / 64) * 64);
}
function Cn(e, t) {
  var r = t.stack, n = r.pop();
  exports.DEBUG && console.log(t.step, "ROUND[]"), r.push(t.round(n / 64) * 64);
}
function _d(e) {
  var t = e.stack, r = t.pop(), n = t.pop();
  exports.DEBUG && console.log(e.step, "WCVTF[]", r, n), e.cvt[n] = r * e.ppem / e.font.unitsPerEm;
}
function Ki(e, t) {
  var r = t.stack, n = r.pop(), i = t.ppem, a = t.deltaBase + (e - 1) * 16, o = t.deltaShift;
  exports.DEBUG && console.log(t.step, "DELTAC[" + e + "]", n, r);
  for (var u = 0; u < n; u++) {
    var s = r.pop(), l = r.pop(), f = a + ((l & 240) >> 4);
    if (f === i) {
      var c = (l & 15) - 8;
      c >= 0 && c++;
      var p = c * o;
      exports.DEBUG && console.log(t.step, "DELTACFIX", s, "by", p), t.cvt[s] += p;
    }
  }
}
function Ad(e) {
  var t = e.stack.pop();
  exports.DEBUG && console.log(e.step, "SROUND[]", t), e.round = nu;
  var r;
  switch (t & 192) {
    case 0:
      r = 0.5;
      break;
    case 64:
      r = 1;
      break;
    case 128:
      r = 2;
      break;
    default:
      throw new Error("invalid SROUND value");
  }
  switch (e.srPeriod = r, t & 48) {
    case 0:
      e.srPhase = 0;
      break;
    case 16:
      e.srPhase = 0.25 * r;
      break;
    case 32:
      e.srPhase = 0.5 * r;
      break;
    case 48:
      e.srPhase = 0.75 * r;
      break;
    default:
      throw new Error("invalid SROUND value");
  }
  t &= 15, t === 0 ? e.srThreshold = 0 : e.srThreshold = (t / 8 - 0.5) * r;
}
function Od(e) {
  var t = e.stack.pop();
  exports.DEBUG && console.log(e.step, "S45ROUND[]", t), e.round = nu;
  var r;
  switch (t & 192) {
    case 0:
      r = Math.sqrt(2) / 2;
      break;
    case 64:
      r = Math.sqrt(2);
      break;
    case 128:
      r = 2 * Math.sqrt(2);
      break;
    default:
      throw new Error("invalid S45ROUND value");
  }
  switch (e.srPeriod = r, t & 48) {
    case 0:
      e.srPhase = 0;
      break;
    case 16:
      e.srPhase = 0.25 * r;
      break;
    case 32:
      e.srPhase = 0.5 * r;
      break;
    case 48:
      e.srPhase = 0.75 * r;
      break;
    default:
      throw new Error("invalid S45ROUND value");
  }
  t &= 15, t === 0 ? e.srThreshold = 0 : e.srThreshold = (t / 8 - 0.5) * r;
}
function Ld(e) {
  exports.DEBUG && console.log(e.step, "ROFF[]"), e.round = hh;
}
function Id(e) {
  exports.DEBUG && console.log(e.step, "RUTG[]"), e.round = gh;
}
function Pd(e) {
  exports.DEBUG && console.log(e.step, "RDTG[]"), e.round = mh;
}
function Rd(e) {
  var t = e.stack.pop();
  exports.DEBUG && console.log(e.step, "SCANCTRL[]", t);
}
function Os(e, t) {
  var r = t.stack, n = r.pop(), i = r.pop(), a = t.z2[n], o = t.z1[i];
  exports.DEBUG && console.log(t.step, "SDPVTL[" + e + "]", n, i);
  var u, s;
  e ? (u = a.y - o.y, s = o.x - a.x) : (u = o.x - a.x, s = o.y - a.y), t.dpv = Hr(u, s);
}
function Ud(e) {
  var t = e.stack, r = t.pop(), n = 0;
  exports.DEBUG && console.log(e.step, "GETINFO[]", r), r & 1 && (n = 35), r & 32 && (n |= 4096), t.push(n);
}
function Bd(e) {
  var t = e.stack, r = t.pop(), n = t.pop(), i = t.pop();
  exports.DEBUG && console.log(e.step, "ROLL[]"), t.push(n), t.push(r), t.push(i);
}
function Nd(e) {
  var t = e.stack, r = t.pop(), n = t.pop();
  exports.DEBUG && console.log(e.step, "MAX[]", r, n), t.push(Math.max(n, r));
}
function Md(e) {
  var t = e.stack, r = t.pop(), n = t.pop();
  exports.DEBUG && console.log(e.step, "MIN[]", r, n), t.push(Math.min(n, r));
}
function Gd(e) {
  var t = e.stack.pop();
  exports.DEBUG && console.log(e.step, "SCANTYPE[]", t);
}
function Wd(e) {
  var t = e.stack.pop(), r = e.stack.pop();
  switch (exports.DEBUG && console.log(e.step, "INSTCTRL[]", t, r), t) {
    case 1:
      e.inhibitGridFit = !!r;
      return;
    case 2:
      e.ignoreCvt = !!r;
      return;
    default:
      throw new Error("invalid INSTCTRL[] selector");
  }
}
function ir(e, t) {
  var r = t.stack, n = t.prog, i = t.ip;
  exports.DEBUG && console.log(t.step, "PUSHB[" + e + "]");
  for (var a = 0; a < e; a++)
    r.push(n[++i]);
  t.ip = i;
}
function ar(e, t) {
  var r = t.ip, n = t.prog, i = t.stack;
  exports.DEBUG && console.log(t.ip, "PUSHW[" + e + "]");
  for (var a = 0; a < e; a++) {
    var o = n[++r] << 8 | n[++r];
    o & 32768 && (o = -((o ^ 65535) + 1)), i.push(o);
  }
  t.ip = r;
}
function oe(e, t, r, n, i, a) {
  var o = a.stack, u = e && o.pop(), s = o.pop(), l = a.rp0, f = a.z0[l], c = a.z1[s], p = a.minDis, d = a.fv, D = a.dpv, v, g, y, b;
  g = v = D.distance(c, f, true, true), y = g >= 0 ? 1 : -1, g = Math.abs(g), e && (b = a.cvt[u], n && Math.abs(g - b) < a.cvCutIn && (g = b)), r && g < p && (g = p), n && (g = a.round(g)), d.setRelative(c, f, y * g, D), d.touch(c), exports.DEBUG && console.log(a.step, (e ? "MIRP[" : "MDRP[") + (t ? "M" : "m") + (r ? ">" : "_") + (n ? "R" : "_") + (i === 0 ? "Gr" : i === 1 ? "Bl" : i === 2 ? "Wh" : "") + "]", e ? u + "(" + a.cvt[u] + "," + b + ")" : "", s, "(d =", v, "->", y * g, ")"), a.rp1 = a.rp0, a.rp2 = s, t && (a.rp0 = s);
}
Qs = [ms.bind(void 0, Yt), ms.bind(void 0, Wt), Ds.bind(void 0, Yt), Ds.bind(void 0, Wt), ys.bind(void 0, Yt), ys.bind(void 0, Wt), bs.bind(void 0, 0), bs.bind(void 0, 1), xs.bind(void 0, 0), xs.bind(void 0, 1), yh, bh, xh, wh, Eh, Fh, Ch, Sh, kh, Th, _h, Ah, Oh, Lh, Ih, Ph, Rh, Uh, Bh, Nh, void 0, void 0, Mh, Zi, Gh, Wh, $h, Vh, Hh, void 0, void 0, void 0, jh, zh, Xh, void 0, ws.bind(void 0, 0), ws.bind(void 0, 1), Es.bind(void 0, Yt), Es.bind(void 0, Wt), Fs.bind(void 0, 0), Fs.bind(void 0, 1), Cs.bind(void 0, 0), Cs.bind(void 0, 1), Ss.bind(void 0, 0), Ss.bind(void 0, 1), qh, Yh, ks.bind(void 0, 0), ks.bind(void 0, 1), Zh, Jh, Ts.bind(void 0, 0), Ts.bind(void 0, 1), Kh, Qh, ed, td, rd, nd, _s.bind(void 0, 0), _s.bind(void 0, 1), void 0, As.bind(void 0, 0), As.bind(void 0, 1), id, void 0, ad, void 0, void 0, od, sd, ud, ld, fd, cd, pd, hd, dd, vd, gd, md, Dd, Ji.bind(void 0, 1), yd, bd, xd, wd, Ed, Fd, Cd, Sd, kd, Td, Cn.bind(void 0, 0), Cn.bind(void 0, 1), Cn.bind(void 0, 2), Cn.bind(void 0, 3), void 0, void 0, void 0, void 0, _d, Ji.bind(void 0, 2), Ji.bind(void 0, 3), Ki.bind(void 0, 1), Ki.bind(void 0, 2), Ki.bind(void 0, 3), Ad, Od, void 0, void 0, Ld, void 0, Id, Pd, Zi, Zi, void 0, void 0, void 0, void 0, void 0, Rd, Os.bind(void 0, 0), Os.bind(void 0, 1), Ud, void 0, Bd, Nd, Md, Gd, Wd, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, ir.bind(void 0, 1), ir.bind(void 0, 2), ir.bind(void 0, 3), ir.bind(void 0, 4), ir.bind(void 0, 5), ir.bind(void 0, 6), ir.bind(void 0, 7), ir.bind(void 0, 8), ar.bind(void 0, 1), ar.bind(void 0, 2), ar.bind(void 0, 3), ar.bind(void 0, 4), ar.bind(void 0, 5), ar.bind(void 0, 6), ar.bind(void 0, 7), ar.bind(void 0, 8), oe.bind(void 0, 0, 0, 0, 0, 0), oe.bind(void 0, 0, 0, 0, 0, 1), oe.bind(void 0, 0, 0, 0, 0, 2), oe.bind(void 0, 0, 0, 0, 0, 3), oe.bind(void 0, 0, 0, 0, 1, 0), oe.bind(void 0, 0, 0, 0, 1, 1), oe.bind(void 0, 0, 0, 0, 1, 2), oe.bind(void 0, 0, 0, 0, 1, 3), oe.bind(void 0, 0, 0, 1, 0, 0), oe.bind(void 0, 0, 0, 1, 0, 1), oe.bind(void 0, 0, 0, 1, 0, 2), oe.bind(void 0, 0, 0, 1, 0, 3), oe.bind(void 0, 0, 0, 1, 1, 0), oe.bind(void 0, 0, 0, 1, 1, 1), oe.bind(void 0, 0, 0, 1, 1, 2), oe.bind(void 0, 0, 0, 1, 1, 3), oe.bind(void 0, 0, 1, 0, 0, 0), oe.bind(void 0, 0, 1, 0, 0, 1), oe.bind(void 0, 0, 1, 0, 0, 2), oe.bind(void 0, 0, 1, 0, 0, 3), oe.bind(void 0, 0, 1, 0, 1, 0), oe.bind(void 0, 0, 1, 0, 1, 1), oe.bind(void 0, 0, 1, 0, 1, 2), oe.bind(void 0, 0, 1, 0, 1, 3), oe.bind(void 0, 0, 1, 1, 0, 0), oe.bind(void 0, 0, 1, 1, 0, 1), oe.bind(void 0, 0, 1, 1, 0, 2), oe.bind(void 0, 0, 1, 1, 0, 3), oe.bind(void 0, 0, 1, 1, 1, 0), oe.bind(void 0, 0, 1, 1, 1, 1), oe.bind(void 0, 0, 1, 1, 1, 2), oe.bind(void 0, 0, 1, 1, 1, 3), oe.bind(void 0, 1, 0, 0, 0, 0), oe.bind(void 0, 1, 0, 0, 0, 1), oe.bind(void 0, 1, 0, 0, 0, 2), oe.bind(void 0, 1, 0, 0, 0, 3), oe.bind(void 0, 1, 0, 0, 1, 0), oe.bind(void 0, 1, 0, 0, 1, 1), oe.bind(void 0, 1, 0, 0, 1, 2), oe.bind(void 0, 1, 0, 0, 1, 3), oe.bind(void 0, 1, 0, 1, 0, 0), oe.bind(void 0, 1, 0, 1, 0, 1), oe.bind(void 0, 1, 0, 1, 0, 2), oe.bind(void 0, 1, 0, 1, 0, 3), oe.bind(void 0, 1, 0, 1, 1, 0), oe.bind(void 0, 1, 0, 1, 1, 1), oe.bind(void 0, 1, 0, 1, 1, 2), oe.bind(void 0, 1, 0, 1, 1, 3), oe.bind(void 0, 1, 1, 0, 0, 0), oe.bind(void 0, 1, 1, 0, 0, 1), oe.bind(void 0, 1, 1, 0, 0, 2), oe.bind(void 0, 1, 1, 0, 0, 3), oe.bind(void 0, 1, 1, 0, 1, 0), oe.bind(void 0, 1, 1, 0, 1, 1), oe.bind(void 0, 1, 1, 0, 1, 2), oe.bind(void 0, 1, 1, 0, 1, 3), oe.bind(void 0, 1, 1, 1, 0, 0), oe.bind(void 0, 1, 1, 1, 0, 1), oe.bind(void 0, 1, 1, 1, 0, 2), oe.bind(void 0, 1, 1, 1, 0, 3), oe.bind(void 0, 1, 1, 1, 1, 0), oe.bind(void 0, 1, 1, 1, 1, 1), oe.bind(void 0, 1, 1, 1, 1, 2), oe.bind(void 0, 1, 1, 1, 1, 3)];
function Ar(e) {
  this.char = e, this.state = {}, this.activeState = null;
}
function sa(e, t, r) {
  this.contextName = r, this.startIndex = e, this.endOffset = t;
}
function $d(e, t, r) {
  this.contextName = e, this.openRange = null, this.ranges = [], this.checkStart = t, this.checkEnd = r;
}
function Tt(e, t) {
  this.context = e, this.index = t, this.length = e.length, this.current = e[t], this.backtrack = e.slice(0, t), this.lookahead = e.slice(t + 1);
}
function An(e) {
  this.eventId = e, this.subscribers = [];
}
function jd(e) {
  var t = this, r = ["start", "end", "next", "newToken", "contextStart", "contextEnd", "insertToken", "removeToken", "removeRange", "replaceToken", "replaceRange", "composeRUD", "updateContextsRanges"];
  r.forEach(function(i) {
    Object.defineProperty(t.events, i, { value: new An(i) });
  }), e && r.forEach(function(i) {
    var a = e[i];
    typeof a == "function" && t.events[i].subscribe(a);
  });
  var n = ["insertToken", "removeToken", "removeRange", "replaceToken", "replaceRange", "composeRUD"];
  n.forEach(function(i) {
    t.events[i].subscribe(t.updateContextsRanges);
  });
}
function Me(e) {
  this.tokens = [], this.registeredContexts = {}, this.contextCheckers = [], this.events = {}, this.registeredModifiers = [], jd.call(this, e);
}
Ar.prototype.setState = function(e, t) {
  return this.state[e] = t, this.activeState = { key: e, value: this.state[e] }, this.activeState;
};
Ar.prototype.getState = function(e) {
  return this.state[e] || null;
};
Me.prototype.inboundIndex = function(e) {
  return e >= 0 && e < this.tokens.length;
};
Me.prototype.composeRUD = function(e) {
  var t = this, r = true, n = e.map(function(a) {
    return t[a[0]].apply(t, a.slice(1).concat(r));
  }), i = function(a) {
    return typeof a == "object" && a.hasOwnProperty("FAIL");
  };
  if (n.every(i))
    return { FAIL: "composeRUD: one or more operations hasn't completed successfully", report: n.filter(i) };
  this.dispatch("composeRUD", [n.filter(function(a) {
    return !i(a);
  })]);
};
Me.prototype.replaceRange = function(e, t, r, n) {
  t = t !== null ? t : this.tokens.length;
  var i = r.every(function(o) {
    return o instanceof Ar;
  });
  if (!isNaN(e) && this.inboundIndex(e) && i) {
    var a = this.tokens.splice.apply(this.tokens, [e, t].concat(r));
    return n || this.dispatch("replaceToken", [e, t, r]), [a, r];
  } else
    return { FAIL: "replaceRange: invalid tokens or startIndex." };
};
Me.prototype.replaceToken = function(e, t, r) {
  if (!isNaN(e) && this.inboundIndex(e) && t instanceof Ar) {
    var n = this.tokens.splice(e, 1, t);
    return r || this.dispatch("replaceToken", [e, t]), [n[0], t];
  } else
    return { FAIL: "replaceToken: invalid token or index." };
};
Me.prototype.removeRange = function(e, t, r) {
  t = isNaN(t) ? this.tokens.length : t;
  var n = this.tokens.splice(e, t);
  return r || this.dispatch("removeRange", [n, e, t]), n;
};
Me.prototype.removeToken = function(e, t) {
  if (!isNaN(e) && this.inboundIndex(e)) {
    var r = this.tokens.splice(e, 1);
    return t || this.dispatch("removeToken", [r, e]), r;
  } else
    return { FAIL: "removeToken: invalid token index." };
};
Me.prototype.insertToken = function(e, t, r) {
  var n = e.every(function(i) {
    return i instanceof Ar;
  });
  return n ? (this.tokens.splice.apply(this.tokens, [t, 0].concat(e)), r || this.dispatch("insertToken", [e, t]), e) : { FAIL: "insertToken: invalid token(s)." };
};
Me.prototype.registerModifier = function(e, t, r) {
  this.events.newToken.subscribe(function(n, i) {
    var a = [n, i], o = t === null || t.apply(this, a) === true, u = [n, i];
    if (o) {
      var s = r.apply(this, u);
      n.setState(e, s);
    }
  }), this.registeredModifiers.push(e);
};
An.prototype.subscribe = function(e) {
  return typeof e == "function" ? this.subscribers.push(e) - 1 : { FAIL: "invalid '" + this.eventId + "' event handler" };
};
An.prototype.unsubscribe = function(e) {
  this.subscribers.splice(e, 1);
};
Tt.prototype.setCurrentIndex = function(e) {
  this.index = e, this.current = this.context[e], this.backtrack = this.context.slice(0, e), this.lookahead = this.context.slice(e + 1);
};
Tt.prototype.get = function(e) {
  switch (true) {
    case e === 0:
      return this.current;
    case (e < 0 && Math.abs(e) <= this.backtrack.length):
      return this.backtrack.slice(e)[0];
    case (e > 0 && e <= this.lookahead.length):
      return this.lookahead[e - 1];
    default:
      return null;
  }
};
Me.prototype.rangeToText = function(e) {
  if (e instanceof sa)
    return this.getRangeTokens(e).map(function(t) {
      return t.char;
    }).join("");
};
Me.prototype.getText = function() {
  return this.tokens.map(function(e) {
    return e.char;
  }).join("");
};
Me.prototype.getContext = function(e) {
  var t = this.registeredContexts[e];
  return t || null;
};
Me.prototype.on = function(e, t) {
  var r = this.events[e];
  return r ? r.subscribe(t) : null;
};
Me.prototype.dispatch = function(e, t) {
  var r = this, n = this.events[e];
  n instanceof An && n.subscribers.forEach(function(i) {
    i.apply(r, t || []);
  });
};
Me.prototype.registerContextChecker = function(e, t, r) {
  if (this.getContext(e))
    return { FAIL: "context name '" + e + "' is already registered." };
  if (typeof t != "function")
    return { FAIL: "missing context start check." };
  if (typeof r != "function")
    return { FAIL: "missing context end check." };
  var n = new $d(e, t, r);
  return this.registeredContexts[e] = n, this.contextCheckers.push(n), n;
};
Me.prototype.getRangeTokens = function(e) {
  var t = e.startIndex + e.endOffset;
  return [].concat(this.tokens.slice(e.startIndex, t));
};
Me.prototype.getContextRanges = function(e) {
  var t = this.getContext(e);
  return t ? t.ranges : { FAIL: "context checker '" + e + "' is not registered." };
};
Me.prototype.resetContextsRanges = function() {
  var e = this.registeredContexts;
  for (var t in e)
    if (e.hasOwnProperty(t)) {
      var r = e[t];
      r.ranges = [];
    }
};
Me.prototype.updateContextsRanges = function() {
  this.resetContextsRanges();
  for (var e = this.tokens.map(function(n) {
    return n.char;
  }), t = 0; t < e.length; t++) {
    var r = new Tt(e, t);
    this.runContextCheck(r);
  }
  this.dispatch("updateContextsRanges", [this.registeredContexts]);
};
Me.prototype.setEndOffset = function(e, t) {
  var r = this.getContext(t).openRange.startIndex, n = new sa(r, e, t), i = this.getContext(t).ranges;
  return n.rangeId = t + "." + i.length, i.push(n), this.getContext(t).openRange = null, n;
};
Me.prototype.runContextCheck = function(e) {
  var t = this, r = e.index;
  this.contextCheckers.forEach(function(n) {
    var i = n.contextName, a = t.getContext(i).openRange;
    if (!a && n.checkStart(e) && (a = new sa(r, null, i), t.getContext(i).openRange = a, t.dispatch("contextStart", [i, r])), a && n.checkEnd(e)) {
      var o = r - a.startIndex + 1, u = t.setEndOffset(o, i);
      t.dispatch("contextEnd", [i, u]);
    }
  });
};
Me.prototype.tokenize = function(e) {
  this.tokens = [], this.resetContextsRanges();
  var t = Array.from(e);
  this.dispatch("start");
  for (var r = 0; r < t.length; r++) {
    var n = t[r], i = new Tt(t, r);
    this.dispatch("next", [i]), this.runContextCheck(i);
    var a = new Ar(n);
    this.tokens.push(a), this.dispatch("newToken", [a, i]);
  }
  return this.dispatch("end", [this.tokens]), this.tokens;
};
function lr(e) {
  return /[\u0600-\u065F\u066A-\u06D2\u06FA-\u06FF]/.test(e);
}
function au(e) {
  return /[\u0630\u0690\u0621\u0631\u0661\u0671\u0622\u0632\u0672\u0692\u06C2\u0623\u0673\u0693\u06C3\u0624\u0694\u06C4\u0625\u0675\u0695\u06C5\u06E5\u0676\u0696\u06C6\u0627\u0677\u0697\u06C7\u0648\u0688\u0698\u06C8\u0689\u0699\u06C9\u068A\u06CA\u066B\u068B\u06CB\u068C\u068D\u06CD\u06FD\u068E\u06EE\u06FE\u062F\u068F\u06CF\u06EF]/.test(e);
}
function fr(e) {
  return /[\u0600-\u0605\u060C-\u060E\u0610-\u061B\u061E\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED]/.test(e);
}
function Sn(e) {
  return /[A-z]/.test(e);
}
function zd(e) {
  return /\s/.test(e);
}
function mt(e) {
  this.font = e, this.features = {};
}
function gr(e) {
  this.id = e.id, this.tag = e.tag, this.substitution = e.substitution;
}
function Xr(e, t) {
  if (!e)
    return -1;
  switch (t.format) {
    case 1:
      return t.glyphs.indexOf(e);
    case 2:
      for (var r = t.ranges, n = 0; n < r.length; n++) {
        var i = r[n];
        if (e >= i.start && e <= i.end) {
          var a = e - i.start;
          return i.index + a;
        }
      }
      break;
    default:
      return -1;
  }
  return -1;
}
function Vd(e, t) {
  var r = Xr(e, t.coverage);
  return r === -1 ? null : e + t.deltaGlyphId;
}
function Hd(e, t) {
  var r = Xr(e, t.coverage);
  return r === -1 ? null : t.substitute[r];
}
function Qi(e, t) {
  for (var r = [], n = 0; n < e.length; n++) {
    var i = e[n], a = t.current;
    a = Array.isArray(a) ? a[0] : a;
    var o = Xr(a, i);
    o !== -1 && r.push(o);
  }
  return r.length !== e.length ? -1 : r;
}
function Xd(e, t) {
  var r = t.inputCoverage.length + t.lookaheadCoverage.length + t.backtrackCoverage.length;
  if (e.context.length < r)
    return [];
  var n = Qi(t.inputCoverage, e);
  if (n === -1)
    return [];
  var i = t.inputCoverage.length - 1;
  if (e.lookahead.length < t.lookaheadCoverage.length)
    return [];
  for (var a = e.lookahead.slice(i); a.length && fr(a[0].char); )
    a.shift();
  var o = new Tt(a, 0), u = Qi(t.lookaheadCoverage, o), s = [].concat(e.backtrack);
  for (s.reverse(); s.length && fr(s[0].char); )
    s.shift();
  if (s.length < t.backtrackCoverage.length)
    return [];
  var l = new Tt(s, 0), f = Qi(t.backtrackCoverage, l), c = n.length === t.inputCoverage.length && u.length === t.lookaheadCoverage.length && f.length === t.backtrackCoverage.length, p = [];
  if (c)
    for (var d = 0; d < t.lookupRecords.length; d++)
      for (var D = t.lookupRecords[d], v = D.lookupListIndex, g = this.getLookupByIndex(v), y = 0; y < g.subtables.length; y++) {
        var b = g.subtables[y], C = this.getLookupMethod(g, b), k = this.getSubstitutionType(g, b);
        if (k === "12")
          for (var S = 0; S < n.length; S++) {
            var E = e.get(S), L = C(E);
            L && p.push(L);
          }
      }
  return p;
}
function qd(e, t) {
  var r = e.current, n = Xr(r, t.coverage);
  if (n === -1)
    return null;
  for (var i, a = t.ligatureSets[n], o = 0; o < a.length; o++) {
    i = a[o];
    for (var u = 0; u < i.components.length; u++) {
      var s = e.lookahead[u], l = i.components[u];
      if (s !== l)
        break;
      if (u === i.components.length - 1)
        return i;
    }
  }
  return null;
}
function Yd(e, t) {
  var r = Xr(e, t.coverage);
  return r === -1 ? null : t.sequences[r];
}
mt.prototype.getDefaultScriptFeaturesIndexes = function() {
  for (var e = this.font.tables.gsub.scripts, t = 0; t < e.length; t++) {
    var r = e[t];
    if (r.tag === "DFLT")
      return r.script.defaultLangSys.featureIndexes;
  }
  return [];
};
mt.prototype.getScriptFeaturesIndexes = function(e) {
  var t = this.font.tables;
  if (!t.gsub)
    return [];
  if (!e)
    return this.getDefaultScriptFeaturesIndexes();
  for (var r = this.font.tables.gsub.scripts, n = 0; n < r.length; n++) {
    var i = r[n];
    if (i.tag === e && i.script.defaultLangSys)
      return i.script.defaultLangSys.featureIndexes;
    var a = i.langSysRecords;
    if (a)
      for (var o = 0; o < a.length; o++) {
        var u = a[o];
        if (u.tag === e) {
          var s = u.langSys;
          return s.featureIndexes;
        }
      }
  }
  return this.getDefaultScriptFeaturesIndexes();
};
mt.prototype.mapTagsToFeatures = function(e, t) {
  for (var r = {}, n = 0; n < e.length; n++) {
    var i = e[n].tag, a = e[n].feature;
    r[i] = a;
  }
  this.features[t].tags = r;
};
mt.prototype.getScriptFeatures = function(e) {
  var t = this.features[e];
  if (this.features.hasOwnProperty(e))
    return t;
  var r = this.getScriptFeaturesIndexes(e);
  if (!r)
    return null;
  var n = this.font.tables.gsub;
  return t = r.map(function(i) {
    return n.features[i];
  }), this.features[e] = t, this.mapTagsToFeatures(t, e), t;
};
mt.prototype.getSubstitutionType = function(e, t) {
  var r = e.lookupType.toString(), n = t.substFormat.toString();
  return r + n;
};
mt.prototype.getLookupMethod = function(e, t) {
  var r = this, n = this.getSubstitutionType(e, t);
  switch (n) {
    case "11":
      return function(i) {
        return Vd.apply(r, [i, t]);
      };
    case "12":
      return function(i) {
        return Hd.apply(r, [i, t]);
      };
    case "63":
      return function(i) {
        return Xd.apply(r, [i, t]);
      };
    case "41":
      return function(i) {
        return qd.apply(r, [i, t]);
      };
    case "21":
      return function(i) {
        return Yd.apply(r, [i, t]);
      };
    default:
      throw new Error("lookupType: " + e.lookupType + " - substFormat: " + t.substFormat + " is not yet supported");
  }
};
mt.prototype.lookupFeature = function(e) {
  var t = e.contextParams, r = t.index, n = this.getFeature({ tag: e.tag, script: e.script });
  if (!n)
    return new Error("font '" + this.font.names.fullName.en + "' doesn't support feature '" + e.tag + "' for script '" + e.script + "'.");
  for (var i = this.getFeatureLookups(n), a = [].concat(t.context), o = 0; o < i.length; o++)
    for (var u = i[o], s = this.getLookupSubtables(u), l = 0; l < s.length; l++) {
      var f = s[l], c = this.getSubstitutionType(u, f), p = this.getLookupMethod(u, f), d = void 0;
      switch (c) {
        case "11":
          d = p(t.current), d && a.splice(r, 1, new gr({ id: 11, tag: e.tag, substitution: d }));
          break;
        case "12":
          d = p(t.current), d && a.splice(r, 1, new gr({ id: 12, tag: e.tag, substitution: d }));
          break;
        case "63":
          d = p(t), Array.isArray(d) && d.length && a.splice(r, 1, new gr({ id: 63, tag: e.tag, substitution: d }));
          break;
        case "41":
          d = p(t), d && a.splice(r, 1, new gr({ id: 41, tag: e.tag, substitution: d }));
          break;
        case "21":
          d = p(t.current), d && a.splice(r, 1, new gr({ id: 21, tag: e.tag, substitution: d }));
          break;
      }
      t = new Tt(a, r), !(Array.isArray(d) && !d.length) && (d = null);
    }
  return a.length ? a : null;
};
mt.prototype.supports = function(e) {
  if (!e.script)
    return false;
  this.getScriptFeatures(e.script);
  var t = this.features.hasOwnProperty(e.script);
  if (!e.tag)
    return t;
  var r = this.features[e.script].some(function(n) {
    return n.tag === e.tag;
  });
  return t && r;
};
mt.prototype.getLookupSubtables = function(e) {
  return e.subtables || null;
};
mt.prototype.getLookupByIndex = function(e) {
  var t = this.font.tables.gsub.lookups;
  return t[e] || null;
};
mt.prototype.getFeatureLookups = function(e) {
  return e.lookupListIndexes.map(this.getLookupByIndex.bind(this));
};
mt.prototype.getFeature = function(t) {
  if (!this.font)
    return { FAIL: "No font was found" };
  this.features.hasOwnProperty(t.script) || this.getScriptFeatures(t.script);
  var r = this.features[t.script];
  return r ? r.tags[t.tag] ? this.features[t.script].tags[t.tag] : null : { FAIL: "No feature for script " + t.script };
};
function Zd(e) {
  var t = e.current, r = e.get(-1);
  return r === null && lr(t) || !lr(r) && lr(t);
}
function Jd(e) {
  var t = e.get(1);
  return t === null || !lr(t);
}
var Kd = { startCheck: Zd, endCheck: Jd };
function Qd(e) {
  var t = e.current, r = e.get(-1);
  return (lr(t) || fr(t)) && !lr(r);
}
function e0(e) {
  var t = e.get(1);
  switch (true) {
    case t === null:
      return true;
    case (!lr(t) && !fr(t)):
      var r = zd(t);
      if (!r)
        return true;
      if (r) {
        var n = false;
        if (n = e.lookahead.some(function(i) {
          return lr(i) || fr(i);
        }), !n)
          return true;
      }
      break;
    default:
      return false;
  }
}
var t0 = { startCheck: Qd, endCheck: e0 };
function r0(e, t, r) {
  t[r].setState(e.tag, e.substitution);
}
function n0(e, t, r) {
  t[r].setState(e.tag, e.substitution);
}
function i0(e, t, r) {
  e.substitution.forEach(function(n, i) {
    var a = t[r + i];
    a.setState(e.tag, n);
  });
}
function a0(e, t, r) {
  var n = t[r];
  n.setState(e.tag, e.substitution.ligGlyph);
  for (var i = e.substitution.components.length, a = 0; a < i; a++)
    n = t[r + a + 1], n.setState("deleted", true);
}
var Ls = { 11: r0, 12: n0, 63: i0, 41: a0 };
function ua(e, t, r) {
  e instanceof gr && Ls[e.id] && Ls[e.id](e, t, r);
}
function o0(e) {
  for (var t = [].concat(e.backtrack), r = t.length - 1; r >= 0; r--) {
    var n = t[r], i = au(n), a = fr(n);
    if (!i && !a)
      return true;
    if (i)
      return false;
  }
  return false;
}
function s0(e) {
  if (au(e.current))
    return false;
  for (var t = 0; t < e.lookahead.length; t++) {
    var r = e.lookahead[t], n = fr(r);
    if (!n)
      return true;
  }
  return false;
}
function u0(e) {
  var t = this, r = "arab", n = this.featuresTags[r], i = this.tokenizer.getRangeTokens(e);
  if (i.length !== 1) {
    var a = new Tt(i.map(function(u) {
      return u.getState("glyphIndex");
    }), 0), o = new Tt(i.map(function(u) {
      return u.char;
    }), 0);
    i.forEach(function(u, s) {
      if (!fr(u.char)) {
        a.setCurrentIndex(s), o.setCurrentIndex(s);
        var l = 0;
        o0(o) && (l |= 1), s0(o) && (l |= 2);
        var f;
        switch (l) {
          case 1:
            f = "fina";
            break;
          case 2:
            f = "init";
            break;
          case 3:
            f = "medi";
            break;
        }
        if (n.indexOf(f) !== -1) {
          var c = t.query.lookupFeature({ tag: f, script: r, contextParams: a });
          if (c instanceof Error)
            return console.info(c.message);
          c.forEach(function(p, d) {
            p instanceof gr && (ua(p, i, d), a.context[d] = p.substitution);
          });
        }
      }
    });
  }
}
function Is(e, t) {
  var r = e.map(function(n) {
    return n.activeState.value;
  });
  return new Tt(r, t || 0);
}
function l0(e) {
  var t = this, r = "arab", n = this.tokenizer.getRangeTokens(e), i = Is(n);
  i.context.forEach(function(a, o) {
    i.setCurrentIndex(o);
    var u = t.query.lookupFeature({ tag: "rlig", script: r, contextParams: i });
    u.length && (u.forEach(function(s) {
      return ua(s, n, o);
    }), i = Is(n));
  });
}
function f0(e) {
  var t = e.current, r = e.get(-1);
  return r === null && Sn(t) || !Sn(r) && Sn(t);
}
function c0(e) {
  var t = e.get(1);
  return t === null || !Sn(t);
}
var p0 = { startCheck: f0, endCheck: c0 };
function Ps(e, t) {
  var r = e.map(function(n) {
    return n.activeState.value;
  });
  return new Tt(r, t || 0);
}
function h0(e) {
  var t = this, r = "latn", n = this.tokenizer.getRangeTokens(e), i = Ps(n);
  i.context.forEach(function(a, o) {
    i.setCurrentIndex(o);
    var u = t.query.lookupFeature({ tag: "liga", script: r, contextParams: i });
    u.length && (u.forEach(function(s) {
      return ua(s, n, o);
    }), i = Ps(n));
  });
}
function Ot(e) {
  this.baseDir = e || "ltr", this.tokenizer = new Me(), this.featuresTags = {};
}
Ot.prototype.setText = function(e) {
  this.text = e;
};
Ot.prototype.contextChecks = { latinWordCheck: p0, arabicWordCheck: Kd, arabicSentenceCheck: t0 };
function ea(e) {
  var t = this.contextChecks[e + "Check"];
  return this.tokenizer.registerContextChecker(e, t.startCheck, t.endCheck);
}
function d0() {
  return ea.call(this, "latinWord"), ea.call(this, "arabicWord"), ea.call(this, "arabicSentence"), this.tokenizer.tokenize(this.text);
}
function v0() {
  var e = this, t = this.tokenizer.getContextRanges("arabicSentence");
  t.forEach(function(r) {
    var n = e.tokenizer.getRangeTokens(r);
    e.tokenizer.replaceRange(r.startIndex, r.endOffset, n.reverse());
  });
}
Ot.prototype.registerFeatures = function(e, t) {
  var r = this, n = t.filter(function(i) {
    return r.query.supports({ script: e, tag: i });
  });
  this.featuresTags.hasOwnProperty(e) ? this.featuresTags[e] = this.featuresTags[e].concat(n) : this.featuresTags[e] = n;
};
Ot.prototype.applyFeatures = function(e, t) {
  if (!e)
    throw new Error("No valid font was provided to apply features");
  this.query || (this.query = new mt(e));
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    this.query.supports({ script: n.script }) && this.registerFeatures(n.script, n.tags);
  }
};
Ot.prototype.registerModifier = function(e, t, r) {
  this.tokenizer.registerModifier(e, t, r);
};
function la() {
  if (this.tokenizer.registeredModifiers.indexOf("glyphIndex") === -1)
    throw new Error("glyphIndex modifier is required to apply arabic presentation features.");
}
function g0() {
  var e = this, t = "arab";
  if (this.featuresTags.hasOwnProperty(t)) {
    la.call(this);
    var r = this.tokenizer.getContextRanges("arabicWord");
    r.forEach(function(n) {
      u0.call(e, n);
    });
  }
}
function m0() {
  var e = this, t = "arab";
  if (this.featuresTags.hasOwnProperty(t)) {
    var r = this.featuresTags[t];
    if (r.indexOf("rlig") !== -1) {
      la.call(this);
      var n = this.tokenizer.getContextRanges("arabicWord");
      n.forEach(function(i) {
        l0.call(e, i);
      });
    }
  }
}
function D0() {
  var e = this, t = "latn";
  if (this.featuresTags.hasOwnProperty(t)) {
    var r = this.featuresTags[t];
    if (r.indexOf("liga") !== -1) {
      la.call(this);
      var n = this.tokenizer.getContextRanges("latinWord");
      n.forEach(function(i) {
        h0.call(e, i);
      });
    }
  }
}
Ot.prototype.checkContextReady = function(e) {
  return !!this.tokenizer.getContext(e);
};
Ot.prototype.applyFeaturesToContexts = function() {
  this.checkContextReady("arabicWord") && (g0.call(this), m0.call(this)), this.checkContextReady("latinWord") && D0.call(this), this.checkContextReady("arabicSentence") && v0.call(this);
};
Ot.prototype.processText = function(e) {
  (!this.text || this.text !== e) && (this.setText(e), d0.call(this), this.applyFeaturesToContexts());
};
Ot.prototype.getBidiText = function(e) {
  return this.processText(e), this.tokenizer.getText();
};
Ot.prototype.getTextGlyphs = function(e) {
  this.processText(e);
  for (var t = [], r = 0; r < this.tokenizer.tokens.length; r++) {
    var n = this.tokenizer.tokens[r];
    if (!n.state.deleted) {
      var i = n.activeState.value;
      t.push(Array.isArray(i) ? i[0] : i);
    }
  }
  return t;
};
function st(e) {
  e = e || {}, e.tables = e.tables || {}, e.empty || (Nr(e.familyName, "When creating a new Font object, familyName is required."), Nr(e.styleName, "When creating a new Font object, styleName is required."), Nr(e.unitsPerEm, "When creating a new Font object, unitsPerEm is required."), Nr(e.ascender, "When creating a new Font object, ascender is required."), Nr(e.descender <= 0, "When creating a new Font object, negative descender value is required."), this.unitsPerEm = e.unitsPerEm || 1e3, this.ascender = e.ascender, this.descender = e.descender, this.createdTimestamp = e.createdTimestamp, this.tables = Object.assign(e.tables, { os2: Object.assign({ usWeightClass: e.weightClass || this.usWeightClasses.MEDIUM, usWidthClass: e.widthClass || this.usWidthClasses.MEDIUM, fsSelection: e.fsSelection || this.fsSelectionValues.REGULAR }, e.tables.os2) })), this.supported = true, this.glyphs = new $t.GlyphSet(this, e.glyphs || []), this.encoding = new Vs(this), this.position = new zr(this), this.substitution = new gt(this), this.tables = this.tables || {}, this._push = null, this._hmtxTableData = {}, Object.defineProperty(this, "hinting", { get: function() {
    if (this._hinting)
      return this._hinting;
    if (this.outlinesFormat === "truetype")
      return this._hinting = new tu(this);
  } });
}
st.prototype.hasChar = function(e) {
  return this.encoding.charToGlyphIndex(e) !== null;
};
st.prototype.charToGlyphIndex = function(e) {
  return this.encoding.charToGlyphIndex(e);
};
st.prototype.charToGlyph = function(e) {
  var t = this.charToGlyphIndex(e), r = this.glyphs.get(t);
  return r || (r = this.glyphs.get(0)), r;
};
st.prototype.updateFeatures = function(e) {
  return this.defaultRenderOptions.features.map(function(t) {
    return t.script === "latn" ? { script: "latn", tags: t.tags.filter(function(r) {
      return e[r];
    }) } : t;
  });
};
st.prototype.stringToGlyphs = function(e, t) {
  var r = this, n = new Ot(), i = function(c) {
    return r.charToGlyphIndex(c.char);
  };
  n.registerModifier("glyphIndex", null, i);
  var a = t ? this.updateFeatures(t.features) : this.defaultRenderOptions.features;
  n.applyFeatures(this, a);
  for (var o = n.getTextGlyphs(e), u = o.length, s = new Array(u), l = this.glyphs.get(0), f = 0; f < u; f += 1)
    s[f] = this.glyphs.get(o[f]) || l;
  return s;
};
st.prototype.getKerningValue = function(e, t) {
  e = e.index || e, t = t.index || t;
  var r = this.position.defaultKerningTables;
  return r ? this.position.getKerningValue(r, e, t) : this.kerningPairs[e + "," + t] || 0;
};
st.prototype.defaultRenderOptions = { kerning: true, features: [{ script: "arab", tags: ["init", "medi", "fina", "rlig"] }, { script: "latn", tags: ["liga", "rlig"] }] };
st.prototype.forEachGlyph = function(e, t, r, n, i, a) {
  t = t !== void 0 ? t : 0, r = r !== void 0 ? r : 0, n = n !== void 0 ? n : 72, i = Object.assign({}, this.defaultRenderOptions, i);
  var o = 1 / this.unitsPerEm * n, u = this.stringToGlyphs(e, i), s;
  if (i.kerning) {
    var l = i.script || this.position.getDefaultScriptName();
    s = this.position.getKerningTables(l, i.language);
  }
  for (var f = 0; f < u.length; f += 1) {
    var c = u[f];
    if (a.call(this, c, t, r, n, i), c.advanceWidth && (t += c.advanceWidth * o), i.kerning && f < u.length - 1) {
      var p = s ? this.position.getKerningValue(s, c.index, u[f + 1].index) : this.getKerningValue(c, u[f + 1]);
      t += p * o;
    }
    i.letterSpacing ? t += i.letterSpacing * n : i.tracking && (t += i.tracking / 1e3 * n);
  }
  return t;
};
st.prototype.getPath = function(e, t, r, n, i) {
  var a = new ot();
  return this.forEachGlyph(e, t, r, n, i, function(o, u, s, l) {
    var f = o.getPath(u, s, l, i, this);
    a.extend(f);
  }), a;
};
st.prototype.getPaths = function(e, t, r, n, i) {
  var a = [];
  return this.forEachGlyph(e, t, r, n, i, function(o, u, s, l) {
    var f = o.getPath(u, s, l, i, this);
    a.push(f);
  }), a;
};
st.prototype.getAdvanceWidth = function(e, t, r) {
  return this.forEachGlyph(e, 0, 0, t, r, function() {
  });
};
st.prototype.fsSelectionValues = { ITALIC: 1, UNDERSCORE: 2, NEGATIVE: 4, OUTLINED: 8, STRIKEOUT: 16, BOLD: 32, REGULAR: 64, USER_TYPO_METRICS: 128, WWS: 256, OBLIQUE: 512 };
st.prototype.usWidthClasses = { ULTRA_CONDENSED: 1, EXTRA_CONDENSED: 2, CONDENSED: 3, SEMI_CONDENSED: 4, MEDIUM: 5, SEMI_EXPANDED: 6, EXPANDED: 7, EXTRA_EXPANDED: 8, ULTRA_EXPANDED: 9 };
st.prototype.usWeightClasses = { THIN: 100, EXTRA_LIGHT: 200, LIGHT: 300, NORMAL: 400, MEDIUM: 500, SEMI_BOLD: 600, BOLD: 700, EXTRA_BOLD: 800, BLACK: 900 };
function y0(e, t) {
  t.parseUShort(), e.length = t.parseULong(), e.language = t.parseULong();
  var r;
  e.groupCount = r = t.parseULong(), e.glyphIndexMap = {};
  for (var n = 0; n < r; n += 1)
    for (var i = t.parseULong(), a = t.parseULong(), o = t.parseULong(), u = i; u <= a; u += 1)
      e.glyphIndexMap[u] = o, o++;
}
function b0(e, t, r, n, i) {
  e.length = t.parseUShort(), e.language = t.parseUShort();
  var a;
  e.segCount = a = t.parseUShort() >> 1, t.skip("uShort", 3), e.glyphIndexMap = {};
  for (var o = new se.Parser(r, n + i + 14), u = new se.Parser(r, n + i + 16 + a * 2), s = new se.Parser(r, n + i + 16 + a * 4), l = new se.Parser(r, n + i + 16 + a * 6), f = n + i + 16 + a * 8, c = 0; c < a - 1; c += 1)
    for (var p = void 0, d = o.parseUShort(), D = u.parseUShort(), v = s.parseShort(), g = l.parseUShort(), y = D; y <= d; y += 1)
      g !== 0 ? (f = l.offset + l.relativeOffset - 2, f += g, f += (y - D) * 2, p = se.getUShort(r, f), p !== 0 && (p = p + v & 65535)) : p = y + v & 65535, e.glyphIndexMap[y] = p;
}
function x0(e, t) {
  var r = {};
  r.version = se.getUShort(e, t), Te.argument(r.version === 0, "cmap table version should be 0."), r.numTables = se.getUShort(e, t + 2);
  for (var n = -1, i = r.numTables - 1; i >= 0; i -= 1) {
    var a = se.getUShort(e, t + 4 + i * 8), o = se.getUShort(e, t + 4 + i * 8 + 2);
    if (a === 3 && (o === 0 || o === 1 || o === 10) || a === 0 && (o === 0 || o === 1 || o === 2 || o === 3 || o === 4)) {
      n = se.getULong(e, t + 4 + i * 8 + 4);
      break;
    }
  }
  if (n === -1)
    throw new Error("No valid cmap sub-tables found.");
  var u = new se.Parser(e, t + n);
  if (r.format = u.parseUShort(), r.format === 12)
    y0(r, u);
  else if (r.format === 4)
    b0(r, u, e, t, n);
  else
    throw new Error("Only format 4 and 12 cmap tables are supported (found format " + r.format + ").");
  return r;
}
var w0 = { parse: x0 };
function na(e) {
  var t;
  return e.length < 1240 ? t = 107 : e.length < 33900 ? t = 1131 : t = 32768, t;
}
function sr(e, t, r) {
  var n = [], i = [], a = se.getCard16(e, t), o, u;
  if (a !== 0) {
    var s = se.getByte(e, t + 2);
    o = t + (a + 1) * s + 2;
    for (var l = t + 3, f = 0; f < a + 1; f += 1)
      n.push(se.getOffset(e, l, s)), l += s;
    u = o + n[a];
  } else
    u = t + 2;
  for (var c = 0; c < n.length - 1; c += 1) {
    var p = se.getBytes(e, o + n[c], o + n[c + 1]);
    r && (p = r(p)), i.push(p);
  }
  return { objects: i, startOffset: t, endOffset: u };
}
function E0(e, t) {
  var r = [], n = se.getCard16(e, t), i, a;
  if (n !== 0) {
    var o = se.getByte(e, t + 2);
    i = t + (n + 1) * o + 2;
    for (var u = t + 3, s = 0; s < n + 1; s += 1)
      r.push(se.getOffset(e, u, o)), u += o;
    a = i + r[n];
  } else
    a = t + 2;
  return { offsets: r, startOffset: t, endOffset: a };
}
function F0(e, t, r, n, i) {
  var a = se.getCard16(r, n), o = 0;
  if (a !== 0) {
    var u = se.getByte(r, n + 2);
    o = n + (a + 1) * u + 2;
  }
  var s = se.getBytes(r, o + t[e], o + t[e + 1]);
  return i && (s = i(s)), s;
}
function C0(e) {
  for (var t = "", r = 15, n = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", ".", "E", "E-", null, "-"]; ; ) {
    var i = e.parseByte(), a = i >> 4, o = i & 15;
    if (a === r || (t += n[a], o === r))
      break;
    t += n[o];
  }
  return parseFloat(t);
}
function S0(e, t) {
  var r, n, i, a;
  if (t === 28)
    return r = e.parseByte(), n = e.parseByte(), r << 8 | n;
  if (t === 29)
    return r = e.parseByte(), n = e.parseByte(), i = e.parseByte(), a = e.parseByte(), r << 24 | n << 16 | i << 8 | a;
  if (t === 30)
    return C0(e);
  if (t >= 32 && t <= 246)
    return t - 139;
  if (t >= 247 && t <= 250)
    return r = e.parseByte(), (t - 247) * 256 + r + 108;
  if (t >= 251 && t <= 254)
    return r = e.parseByte(), -(t - 251) * 256 - r - 108;
  throw new Error("Invalid b0 " + t);
}
function k0(e) {
  for (var t = {}, r = 0; r < e.length; r += 1) {
    var n = e[r][0], i = e[r][1], a = void 0;
    if (i.length === 1 ? a = i[0] : a = i, t.hasOwnProperty(n) && !isNaN(t[n]))
      throw new Error("Object " + t + " already has key " + n);
    t[n] = a;
  }
  return t;
}
function ou(e, t, r) {
  t = t !== void 0 ? t : 0;
  var n = new se.Parser(e, t), i = [], a = [];
  for (r = r !== void 0 ? r : e.length; n.relativeOffset < r; ) {
    var o = n.parseByte();
    o <= 21 ? (o === 12 && (o = 1200 + n.parseByte()), i.push([o, a]), a = []) : a.push(S0(n, o));
  }
  return k0(i);
}
function Gr(e, t) {
  return t <= 390 ? t = Hp[t] : t = e[t - 391], t;
}
function su(e, t, r) {
  for (var n = {}, i, a = 0; a < t.length; a += 1) {
    var o = t[a];
    if (Array.isArray(o.type)) {
      var u = [];
      u.length = o.type.length;
      for (var s = 0; s < o.type.length; s++)
        i = e[o.op] !== void 0 ? e[o.op][s] : void 0, i === void 0 && (i = o.value !== void 0 && o.value[s] !== void 0 ? o.value[s] : null), o.type[s] === "SID" && (i = Gr(r, i)), u[s] = i;
      n[o.name] = u;
    } else
      i = e[o.op], i === void 0 && (i = o.value !== void 0 ? o.value : null), o.type === "SID" && (i = Gr(r, i)), n[o.name] = i;
  }
  return n;
}
function T0(e, t) {
  var r = {};
  return r.formatMajor = se.getCard8(e, t), r.formatMinor = se.getCard8(e, t + 1), r.size = se.getCard8(e, t + 2), r.offsetSize = se.getCard8(e, t + 3), r.startOffset = t, r.endOffset = t + 4, r;
}
var _0 = [{ name: "version", op: 0, type: "SID" }, { name: "notice", op: 1, type: "SID" }, { name: "copyright", op: 1200, type: "SID" }, { name: "fullName", op: 2, type: "SID" }, { name: "familyName", op: 3, type: "SID" }, { name: "weight", op: 4, type: "SID" }, { name: "isFixedPitch", op: 1201, type: "number", value: 0 }, { name: "italicAngle", op: 1202, type: "number", value: 0 }, { name: "underlinePosition", op: 1203, type: "number", value: -100 }, { name: "underlineThickness", op: 1204, type: "number", value: 50 }, { name: "paintType", op: 1205, type: "number", value: 0 }, { name: "charstringType", op: 1206, type: "number", value: 2 }, { name: "fontMatrix", op: 1207, type: ["real", "real", "real", "real", "real", "real"], value: [1e-3, 0, 0, 1e-3, 0, 0] }, { name: "uniqueId", op: 13, type: "number" }, { name: "fontBBox", op: 5, type: ["number", "number", "number", "number"], value: [0, 0, 0, 0] }, { name: "strokeWidth", op: 1208, type: "number", value: 0 }, { name: "xuid", op: 14, type: [], value: null }, { name: "charset", op: 15, type: "offset", value: 0 }, { name: "encoding", op: 16, type: "offset", value: 0 }, { name: "charStrings", op: 17, type: "offset", value: 0 }, { name: "private", op: 18, type: ["number", "offset"], value: [0, 0] }, { name: "ros", op: 1230, type: ["SID", "SID", "number"] }, { name: "cidFontVersion", op: 1231, type: "number", value: 0 }, { name: "cidFontRevision", op: 1232, type: "number", value: 0 }, { name: "cidFontType", op: 1233, type: "number", value: 0 }, { name: "cidCount", op: 1234, type: "number", value: 8720 }, { name: "uidBase", op: 1235, type: "number" }, { name: "fdArray", op: 1236, type: "offset" }, { name: "fdSelect", op: 1237, type: "offset" }, { name: "fontName", op: 1238, type: "SID" }];
var A0 = [{ name: "subrs", op: 19, type: "offset", value: 0 }, { name: "defaultWidthX", op: 20, type: "number", value: 0 }, { name: "nominalWidthX", op: 21, type: "number", value: 0 }];
function O0(e, t) {
  var r = ou(e, 0, e.byteLength);
  return su(r, _0, t);
}
function uu(e, t, r, n) {
  var i = ou(e, t, r);
  return su(i, A0, n);
}
function Rs(e, t, r, n) {
  for (var i = [], a = 0; a < r.length; a += 1) {
    var o = new DataView(new Uint8Array(r[a]).buffer), u = O0(o, n);
    u._subrs = [], u._subrsBias = 0, u._defaultWidthX = 0, u._nominalWidthX = 0;
    var s = u.private[0], l = u.private[1];
    if (s !== 0 && l !== 0) {
      var f = uu(e, l + t, s, n);
      if (u._defaultWidthX = f.defaultWidthX, u._nominalWidthX = f.nominalWidthX, f.subrs !== 0) {
        var c = l + f.subrs, p = sr(e, c + t);
        u._subrs = p.objects, u._subrsBias = na(u._subrs);
      }
      u._privateDict = f;
    }
    i.push(u);
  }
  return i;
}
function L0(e, t, r, n) {
  var i, a, o = new se.Parser(e, t);
  r -= 1;
  var u = [".notdef"], s = o.parseCard8();
  if (s === 0)
    for (var l = 0; l < r; l += 1)
      i = o.parseSID(), u.push(Gr(n, i));
  else if (s === 1)
    for (; u.length <= r; ) {
      i = o.parseSID(), a = o.parseCard8();
      for (var f = 0; f <= a; f += 1)
        u.push(Gr(n, i)), i += 1;
    }
  else if (s === 2)
    for (; u.length <= r; ) {
      i = o.parseSID(), a = o.parseCard16();
      for (var c = 0; c <= a; c += 1)
        u.push(Gr(n, i)), i += 1;
    }
  else
    throw new Error("Unknown charset format " + s);
  return u;
}
function I0(e, t, r) {
  var n, i = {}, a = new se.Parser(e, t), o = a.parseCard8();
  if (o === 0)
    for (var u = a.parseCard8(), s = 0; s < u; s += 1)
      n = a.parseCard8(), i[n] = s;
  else if (o === 1) {
    var l = a.parseCard8();
    n = 1;
    for (var f = 0; f < l; f += 1)
      for (var c = a.parseCard8(), p = a.parseCard8(), d = c; d <= c + p; d += 1)
        i[d] = n, n += 1;
  } else
    throw new Error("Unknown encoding format " + o);
  return new kn(i, r);
}
function Us(e, t, r) {
  var n, i, a, o, u = new ot(), s = [], l = 0, f = false, c = false, p = 0, d = 0, D, v, g, y;
  if (e.isCIDFont) {
    var b = e.tables.cff.topDict._fdSelect[t.index], C = e.tables.cff.topDict._fdArray[b];
    D = C._subrs, v = C._subrsBias, g = C._defaultWidthX, y = C._nominalWidthX;
  } else
    D = e.tables.cff.topDict._subrs, v = e.tables.cff.topDict._subrsBias, g = e.tables.cff.topDict._defaultWidthX, y = e.tables.cff.topDict._nominalWidthX;
  var k = g;
  function S(T, U) {
    c && u.closePath(), u.moveTo(T, U), c = true;
  }
  function E() {
    var T;
    T = s.length % 2 !== 0, T && !f && (k = s.shift() + y), l += s.length >> 1, s.length = 0, f = true;
  }
  function L(T) {
    for (var U, M, H, q, ee, A, R, O, Y, Z, te, ie, B = 0; B < T.length; ) {
      var z = T[B];
      switch (B += 1, z) {
        case 1:
          E();
          break;
        case 3:
          E();
          break;
        case 4:
          s.length > 1 && !f && (k = s.shift() + y, f = true), d += s.pop(), S(p, d);
          break;
        case 5:
          for (; s.length > 0; )
            p += s.shift(), d += s.shift(), u.lineTo(p, d);
          break;
        case 6:
          for (; s.length > 0 && (p += s.shift(), u.lineTo(p, d), s.length !== 0); )
            d += s.shift(), u.lineTo(p, d);
          break;
        case 7:
          for (; s.length > 0 && (d += s.shift(), u.lineTo(p, d), s.length !== 0); )
            p += s.shift(), u.lineTo(p, d);
          break;
        case 8:
          for (; s.length > 0; )
            n = p + s.shift(), i = d + s.shift(), a = n + s.shift(), o = i + s.shift(), p = a + s.shift(), d = o + s.shift(), u.curveTo(n, i, a, o, p, d);
          break;
        case 10:
          ee = s.pop() + v, A = D[ee], A && L(A);
          break;
        case 11:
          return;
        case 12:
          switch (z = T[B], B += 1, z) {
            case 35:
              n = p + s.shift(), i = d + s.shift(), a = n + s.shift(), o = i + s.shift(), R = a + s.shift(), O = o + s.shift(), Y = R + s.shift(), Z = O + s.shift(), te = Y + s.shift(), ie = Z + s.shift(), p = te + s.shift(), d = ie + s.shift(), s.shift(), u.curveTo(n, i, a, o, R, O), u.curveTo(Y, Z, te, ie, p, d);
              break;
            case 34:
              n = p + s.shift(), i = d, a = n + s.shift(), o = i + s.shift(), R = a + s.shift(), O = o, Y = R + s.shift(), Z = o, te = Y + s.shift(), ie = d, p = te + s.shift(), u.curveTo(n, i, a, o, R, O), u.curveTo(Y, Z, te, ie, p, d);
              break;
            case 36:
              n = p + s.shift(), i = d + s.shift(), a = n + s.shift(), o = i + s.shift(), R = a + s.shift(), O = o, Y = R + s.shift(), Z = o, te = Y + s.shift(), ie = Z + s.shift(), p = te + s.shift(), u.curveTo(n, i, a, o, R, O), u.curveTo(Y, Z, te, ie, p, d);
              break;
            case 37:
              n = p + s.shift(), i = d + s.shift(), a = n + s.shift(), o = i + s.shift(), R = a + s.shift(), O = o + s.shift(), Y = R + s.shift(), Z = O + s.shift(), te = Y + s.shift(), ie = Z + s.shift(), Math.abs(te - p) > Math.abs(ie - d) ? p = te + s.shift() : d = ie + s.shift(), u.curveTo(n, i, a, o, R, O), u.curveTo(Y, Z, te, ie, p, d);
              break;
            default:
              console.log("Glyph " + t.index + ": unknown operator 1200" + z), s.length = 0;
          }
          break;
        case 14:
          s.length > 0 && !f && (k = s.shift() + y, f = true), c && (u.closePath(), c = false);
          break;
        case 18:
          E();
          break;
        case 19:
        case 20:
          E(), B += l + 7 >> 3;
          break;
        case 21:
          s.length > 2 && !f && (k = s.shift() + y, f = true), d += s.pop(), p += s.pop(), S(p, d);
          break;
        case 22:
          s.length > 1 && !f && (k = s.shift() + y, f = true), p += s.pop(), S(p, d);
          break;
        case 23:
          E();
          break;
        case 24:
          for (; s.length > 2; )
            n = p + s.shift(), i = d + s.shift(), a = n + s.shift(), o = i + s.shift(), p = a + s.shift(), d = o + s.shift(), u.curveTo(n, i, a, o, p, d);
          p += s.shift(), d += s.shift(), u.lineTo(p, d);
          break;
        case 25:
          for (; s.length > 6; )
            p += s.shift(), d += s.shift(), u.lineTo(p, d);
          n = p + s.shift(), i = d + s.shift(), a = n + s.shift(), o = i + s.shift(), p = a + s.shift(), d = o + s.shift(), u.curveTo(n, i, a, o, p, d);
          break;
        case 26:
          for (s.length % 2 && (p += s.shift()); s.length > 0; )
            n = p, i = d + s.shift(), a = n + s.shift(), o = i + s.shift(), p = a, d = o + s.shift(), u.curveTo(n, i, a, o, p, d);
          break;
        case 27:
          for (s.length % 2 && (d += s.shift()); s.length > 0; )
            n = p + s.shift(), i = d, a = n + s.shift(), o = i + s.shift(), p = a + s.shift(), d = o, u.curveTo(n, i, a, o, p, d);
          break;
        case 28:
          U = T[B], M = T[B + 1], s.push((U << 24 | M << 16) >> 16), B += 2;
          break;
        case 29:
          ee = s.pop() + e.gsubrsBias, A = e.gsubrs[ee], A && L(A);
          break;
        case 30:
          for (; s.length > 0 && (n = p, i = d + s.shift(), a = n + s.shift(), o = i + s.shift(), p = a + s.shift(), d = o + (s.length === 1 ? s.shift() : 0), u.curveTo(n, i, a, o, p, d), s.length !== 0); )
            n = p + s.shift(), i = d, a = n + s.shift(), o = i + s.shift(), d = o + s.shift(), p = a + (s.length === 1 ? s.shift() : 0), u.curveTo(n, i, a, o, p, d);
          break;
        case 31:
          for (; s.length > 0 && (n = p + s.shift(), i = d, a = n + s.shift(), o = i + s.shift(), d = o + s.shift(), p = a + (s.length === 1 ? s.shift() : 0), u.curveTo(n, i, a, o, p, d), s.length !== 0); )
            n = p, i = d + s.shift(), a = n + s.shift(), o = i + s.shift(), p = a + s.shift(), d = o + (s.length === 1 ? s.shift() : 0), u.curveTo(n, i, a, o, p, d);
          break;
        default:
          z < 32 ? console.log("Glyph " + t.index + ": unknown operator " + z) : z < 247 ? s.push(z - 139) : z < 251 ? (U = T[B], B += 1, s.push((z - 247) * 256 + U + 108)) : z < 255 ? (U = T[B], B += 1, s.push(-(z - 251) * 256 - U - 108)) : (U = T[B], M = T[B + 1], H = T[B + 2], q = T[B + 3], B += 4, s.push((U << 24 | M << 16 | H << 8 | q) / 65536));
      }
    }
  }
  return L(r), t.advanceWidth = k, u;
}
function P0(e, t, r, n) {
  var i = [], a, o = new se.Parser(e, t), u = o.parseCard8();
  if (u === 0)
    for (var s = 0; s < r; s++) {
      if (a = o.parseCard8(), a >= n)
        throw new Error("CFF table CID Font FDSelect has bad FD index value " + a + " (FD count " + n + ")");
      i.push(a);
    }
  else if (u === 3) {
    var l = o.parseCard16(), f = o.parseCard16();
    if (f !== 0)
      throw new Error("CFF Table CID Font FDSelect format 3 range has bad initial GID " + f);
    for (var c, p = 0; p < l; p++) {
      if (a = o.parseCard8(), c = o.parseCard16(), a >= n)
        throw new Error("CFF table CID Font FDSelect has bad FD index value " + a + " (FD count " + n + ")");
      if (c > r)
        throw new Error("CFF Table CID Font FDSelect format 3 range has bad GID " + c);
      for (; f < c; f++)
        i.push(a);
      f = c;
    }
    if (c !== r)
      throw new Error("CFF Table CID Font FDSelect format 3 range has bad final GID " + c);
  } else
    throw new Error("CFF Table CID Font FDSelect table has unsupported format " + u);
  return i;
}
function R0(e, t, r, n) {
  r.tables.cff = {};
  var i = T0(e, t), a = sr(e, i.endOffset, se.bytesToString), o = sr(e, a.endOffset), u = sr(e, o.endOffset, se.bytesToString), s = sr(e, u.endOffset);
  r.gsubrs = s.objects, r.gsubrsBias = na(r.gsubrs);
  var l = Rs(e, t, o.objects, u.objects);
  if (l.length !== 1)
    throw new Error("CFF table has too many fonts in 'FontSet' - count of fonts NameIndex.length = " + l.length);
  var f = l[0];
  if (r.tables.cff.topDict = f, f._privateDict && (r.defaultWidthX = f._privateDict.defaultWidthX, r.nominalWidthX = f._privateDict.nominalWidthX), f.ros[0] !== void 0 && f.ros[1] !== void 0 && (r.isCIDFont = true), r.isCIDFont) {
    var c = f.fdArray, p = f.fdSelect;
    if (c === 0 || p === 0)
      throw new Error("Font is marked as a CID font, but FDArray and/or FDSelect information is missing");
    c += t;
    var d = sr(e, c), D = Rs(e, t, d.objects, u.objects);
    f._fdArray = D, p += t, f._fdSelect = P0(e, p, r.numGlyphs, D.length);
  }
  var v = t + f.private[1], g = uu(e, v, f.private[0], u.objects);
  if (r.defaultWidthX = g.defaultWidthX, r.nominalWidthX = g.nominalWidthX, g.subrs !== 0) {
    var y = v + g.subrs, b = sr(e, y);
    r.subrs = b.objects, r.subrsBias = na(r.subrs);
  } else
    r.subrs = [], r.subrsBias = 0;
  var C;
  n.lowMemory ? (C = E0(e, t + f.charStrings), r.nGlyphs = C.offsets.length) : (C = sr(e, t + f.charStrings), r.nGlyphs = C.objects.length);
  var k = L0(e, t + f.charset, r.nGlyphs, u.objects);
  if (f.encoding === 0 ? r.cffEncoding = new kn(Xp, k) : f.encoding === 1 ? r.cffEncoding = new kn(qp, k) : r.cffEncoding = I0(e, t + f.encoding, k), r.encoding = r.encoding || r.cffEncoding, r.glyphs = new $t.GlyphSet(r), n.lowMemory)
    r._push = function(L) {
      var T = F0(L, C.offsets, e, t + f.charStrings);
      r.glyphs.push(L, $t.cffGlyphLoader(r, L, Us, T));
    };
  else
    for (var S = 0; S < r.nGlyphs; S += 1) {
      var E = C.objects[S];
      r.glyphs.push(S, $t.cffGlyphLoader(r, S, Us, E));
    }
}
var U0 = { parse: R0 };
function B0(e, t, r) {
  var n = {}, i = new se.Parser(e, t);
  return n.tag = i.parseTag(), n.minValue = i.parseFixed(), n.defaultValue = i.parseFixed(), n.maxValue = i.parseFixed(), i.skip("uShort", 1), n.name = r[i.parseUShort()] || {}, n;
}
function N0(e, t, r, n) {
  var i = {}, a = new se.Parser(e, t);
  i.name = n[a.parseUShort()] || {}, a.skip("uShort", 1), i.coordinates = {};
  for (var o = 0; o < r.length; ++o)
    i.coordinates[r[o].tag] = a.parseFixed();
  return i;
}
function M0(e, t, r) {
  var n = new se.Parser(e, t), i = n.parseULong();
  Te.argument(i === 65536, "Unsupported fvar table version.");
  var a = n.parseOffset16();
  n.skip("uShort", 1);
  for (var o = n.parseUShort(), u = n.parseUShort(), s = n.parseUShort(), l = n.parseUShort(), f = [], c = 0; c < o; c++)
    f.push(B0(e, t + a + c * u, r));
  for (var p = [], d = t + a + o * u, D = 0; D < s; D++)
    p.push(N0(e, d + D * l, f, r));
  return { axes: f, instances: p };
}
var G0 = { parse: M0 };
var W0 = function() {
  return { coverage: this.parsePointer($.coverage), attachPoints: this.parseList($.pointer($.uShortList)) };
};
var $0 = function() {
  var e = this.parseUShort();
  if (Te.argument(e === 1 || e === 2 || e === 3, "Unsupported CaretValue table version."), e === 1)
    return { coordinate: this.parseShort() };
  if (e === 2)
    return { pointindex: this.parseShort() };
  if (e === 3)
    return { coordinate: this.parseShort() };
};
var j0 = function() {
  return this.parseList($.pointer($0));
};
var z0 = function() {
  return { coverage: this.parsePointer($.coverage), ligGlyphs: this.parseList($.pointer(j0)) };
};
var V0 = function() {
  return this.parseUShort(), this.parseList($.pointer($.coverage));
};
function H0(e, t) {
  t = t || 0;
  var r = new $(e, t), n = r.parseVersion(1);
  Te.argument(n === 1 || n === 1.2 || n === 1.3, "Unsupported GDEF table version.");
  var i = { version: n, classDef: r.parsePointer($.classDef), attachList: r.parsePointer(W0), ligCaretList: r.parsePointer(z0), markAttachClassDef: r.parsePointer($.classDef) };
  return n >= 1.2 && (i.markGlyphSets = r.parsePointer(V0)), i;
}
var X0 = { parse: H0 };
var _t = new Array(10);
_t[1] = function() {
  var t = this.offset + this.relativeOffset, r = this.parseUShort();
  if (r === 1)
    return { posFormat: 1, coverage: this.parsePointer($.coverage), value: this.parseValueRecord() };
  if (r === 2)
    return { posFormat: 2, coverage: this.parsePointer($.coverage), values: this.parseValueRecordList() };
  Te.assert(false, "0x" + t.toString(16) + ": GPOS lookup type 1 format must be 1 or 2.");
};
_t[2] = function() {
  var t = this.offset + this.relativeOffset, r = this.parseUShort();
  Te.assert(r === 1 || r === 2, "0x" + t.toString(16) + ": GPOS lookup type 2 format must be 1 or 2.");
  var n = this.parsePointer($.coverage), i = this.parseUShort(), a = this.parseUShort();
  if (r === 1)
    return { posFormat: r, coverage: n, valueFormat1: i, valueFormat2: a, pairSets: this.parseList($.pointer($.list(function() {
      return { secondGlyph: this.parseUShort(), value1: this.parseValueRecord(i), value2: this.parseValueRecord(a) };
    }))) };
  if (r === 2) {
    var o = this.parsePointer($.classDef), u = this.parsePointer($.classDef), s = this.parseUShort(), l = this.parseUShort();
    return { posFormat: r, coverage: n, valueFormat1: i, valueFormat2: a, classDef1: o, classDef2: u, class1Count: s, class2Count: l, classRecords: this.parseList(s, $.list(l, function() {
      return { value1: this.parseValueRecord(i), value2: this.parseValueRecord(a) };
    })) };
  }
};
_t[3] = function() {
  return { error: "GPOS Lookup 3 not supported" };
};
_t[4] = function() {
  return { error: "GPOS Lookup 4 not supported" };
};
_t[5] = function() {
  return { error: "GPOS Lookup 5 not supported" };
};
_t[6] = function() {
  return { error: "GPOS Lookup 6 not supported" };
};
_t[7] = function() {
  return { error: "GPOS Lookup 7 not supported" };
};
_t[8] = function() {
  return { error: "GPOS Lookup 8 not supported" };
};
_t[9] = function() {
  return { error: "GPOS Lookup 9 not supported" };
};
function q0(e, t) {
  t = t || 0;
  var r = new $(e, t), n = r.parseVersion(1);
  return Te.argument(n === 1 || n === 1.1, "Unsupported GPOS table version " + n), n === 1 ? { version: n, scripts: r.parseScriptList(), features: r.parseFeatureList(), lookups: r.parseLookupList(_t) } : { version: n, scripts: r.parseScriptList(), features: r.parseFeatureList(), lookups: r.parseLookupList(_t), variations: r.parseFeatureVariationsList() };
}
var Y0 = { parse: q0 };
var At = new Array(9);
At[1] = function() {
  var t = this.offset + this.relativeOffset, r = this.parseUShort();
  if (r === 1)
    return { substFormat: 1, coverage: this.parsePointer($.coverage), deltaGlyphId: this.parseUShort() };
  if (r === 2)
    return { substFormat: 2, coverage: this.parsePointer($.coverage), substitute: this.parseOffset16List() };
  Te.assert(false, "0x" + t.toString(16) + ": lookup type 1 format must be 1 or 2.");
};
At[2] = function() {
  var t = this.parseUShort();
  return Te.argument(t === 1, "GSUB Multiple Substitution Subtable identifier-format must be 1"), { substFormat: t, coverage: this.parsePointer($.coverage), sequences: this.parseListOfLists() };
};
At[3] = function() {
  var t = this.parseUShort();
  return Te.argument(t === 1, "GSUB Alternate Substitution Subtable identifier-format must be 1"), { substFormat: t, coverage: this.parsePointer($.coverage), alternateSets: this.parseListOfLists() };
};
At[4] = function() {
  var t = this.parseUShort();
  return Te.argument(t === 1, "GSUB ligature table identifier-format must be 1"), { substFormat: t, coverage: this.parsePointer($.coverage), ligatureSets: this.parseListOfLists(function() {
    return { ligGlyph: this.parseUShort(), components: this.parseUShortList(this.parseUShort() - 1) };
  }) };
};
var _r = { sequenceIndex: $.uShort, lookupListIndex: $.uShort };
At[5] = function() {
  var t = this.offset + this.relativeOffset, r = this.parseUShort();
  if (r === 1)
    return { substFormat: r, coverage: this.parsePointer($.coverage), ruleSets: this.parseListOfLists(function() {
      var a = this.parseUShort(), o = this.parseUShort();
      return { input: this.parseUShortList(a - 1), lookupRecords: this.parseRecordList(o, _r) };
    }) };
  if (r === 2)
    return { substFormat: r, coverage: this.parsePointer($.coverage), classDef: this.parsePointer($.classDef), classSets: this.parseListOfLists(function() {
      var a = this.parseUShort(), o = this.parseUShort();
      return { classes: this.parseUShortList(a - 1), lookupRecords: this.parseRecordList(o, _r) };
    }) };
  if (r === 3) {
    var n = this.parseUShort(), i = this.parseUShort();
    return { substFormat: r, coverages: this.parseList(n, $.pointer($.coverage)), lookupRecords: this.parseRecordList(i, _r) };
  }
  Te.assert(false, "0x" + t.toString(16) + ": lookup type 5 format must be 1, 2 or 3.");
};
At[6] = function() {
  var t = this.offset + this.relativeOffset, r = this.parseUShort();
  if (r === 1)
    return { substFormat: 1, coverage: this.parsePointer($.coverage), chainRuleSets: this.parseListOfLists(function() {
      return { backtrack: this.parseUShortList(), input: this.parseUShortList(this.parseShort() - 1), lookahead: this.parseUShortList(), lookupRecords: this.parseRecordList(_r) };
    }) };
  if (r === 2)
    return { substFormat: 2, coverage: this.parsePointer($.coverage), backtrackClassDef: this.parsePointer($.classDef), inputClassDef: this.parsePointer($.classDef), lookaheadClassDef: this.parsePointer($.classDef), chainClassSet: this.parseListOfLists(function() {
      return { backtrack: this.parseUShortList(), input: this.parseUShortList(this.parseShort() - 1), lookahead: this.parseUShortList(), lookupRecords: this.parseRecordList(_r) };
    }) };
  if (r === 3)
    return { substFormat: 3, backtrackCoverage: this.parseList($.pointer($.coverage)), inputCoverage: this.parseList($.pointer($.coverage)), lookaheadCoverage: this.parseList($.pointer($.coverage)), lookupRecords: this.parseRecordList(_r) };
  Te.assert(false, "0x" + t.toString(16) + ": lookup type 6 format must be 1, 2 or 3.");
};
At[7] = function() {
  var t = this.parseUShort();
  Te.argument(t === 1, "GSUB Extension Substitution subtable identifier-format must be 1");
  var r = this.parseUShort(), n = new $(this.data, this.offset + this.parseULong());
  return { substFormat: 1, lookupType: r, extension: At[r].call(n) };
};
At[8] = function() {
  var t = this.parseUShort();
  return Te.argument(t === 1, "GSUB Reverse Chaining Contextual Single Substitution Subtable identifier-format must be 1"), { substFormat: t, coverage: this.parsePointer($.coverage), backtrackCoverage: this.parseList($.pointer($.coverage)), lookaheadCoverage: this.parseList($.pointer($.coverage)), substitutes: this.parseUShortList() };
};
function Z0(e, t) {
  t = t || 0;
  var r = new $(e, t), n = r.parseVersion(1);
  return Te.argument(n === 1 || n === 1.1, "Unsupported GSUB table version."), n === 1 ? { version: n, scripts: r.parseScriptList(), features: r.parseFeatureList(), lookups: r.parseLookupList(At) } : { version: n, scripts: r.parseScriptList(), features: r.parseFeatureList(), lookups: r.parseLookupList(At), variations: r.parseFeatureVariationsList() };
}
var J0 = { parse: Z0 };
function K0(e, t) {
  var r = {}, n = new se.Parser(e, t);
  return r.version = n.parseVersion(), r.fontRevision = Math.round(n.parseFixed() * 1e3) / 1e3, r.checkSumAdjustment = n.parseULong(), r.magicNumber = n.parseULong(), Te.argument(r.magicNumber === 1594834165, "Font header has wrong magic number."), r.flags = n.parseUShort(), r.unitsPerEm = n.parseUShort(), r.created = n.parseLongDateTime(), r.modified = n.parseLongDateTime(), r.xMin = n.parseShort(), r.yMin = n.parseShort(), r.xMax = n.parseShort(), r.yMax = n.parseShort(), r.macStyle = n.parseUShort(), r.lowestRecPPEM = n.parseUShort(), r.fontDirectionHint = n.parseShort(), r.indexToLocFormat = n.parseShort(), r.glyphDataFormat = n.parseShort(), r;
}
var Q0 = { parse: K0 };
function ev(e, t) {
  var r = {}, n = new se.Parser(e, t);
  return r.version = n.parseVersion(), r.ascender = n.parseShort(), r.descender = n.parseShort(), r.lineGap = n.parseShort(), r.advanceWidthMax = n.parseUShort(), r.minLeftSideBearing = n.parseShort(), r.minRightSideBearing = n.parseShort(), r.xMaxExtent = n.parseShort(), r.caretSlopeRise = n.parseShort(), r.caretSlopeRun = n.parseShort(), r.caretOffset = n.parseShort(), n.relativeOffset += 8, r.metricDataFormat = n.parseShort(), r.numberOfHMetrics = n.parseUShort(), r;
}
var tv = { parse: ev };
function rv(e, t, r, n, i) {
  for (var a, o, u = new se.Parser(e, t), s = 0; s < n; s += 1) {
    s < r && (a = u.parseUShort(), o = u.parseShort());
    var l = i.get(s);
    l.advanceWidth = a, l.leftSideBearing = o;
  }
}
function nv(e, t, r, n, i) {
  e._hmtxTableData = {};
  for (var a, o, u = new se.Parser(t, r), s = 0; s < i; s += 1)
    s < n && (a = u.parseUShort(), o = u.parseShort()), e._hmtxTableData[s] = { advanceWidth: a, leftSideBearing: o };
}
function iv(e, t, r, n, i, a, o) {
  o.lowMemory ? nv(e, t, r, n, i) : rv(t, r, n, i, a);
}
var av = { parse: iv };
function ov(e) {
  var t = {};
  e.skip("uShort");
  var r = e.parseUShort();
  Te.argument(r === 0, "Unsupported kern sub-table version."), e.skip("uShort", 2);
  var n = e.parseUShort();
  e.skip("uShort", 3);
  for (var i = 0; i < n; i += 1) {
    var a = e.parseUShort(), o = e.parseUShort(), u = e.parseShort();
    t[a + "," + o] = u;
  }
  return t;
}
function sv(e) {
  var t = {};
  e.skip("uShort");
  var r = e.parseULong();
  r > 1 && console.warn("Only the first kern subtable is supported."), e.skip("uLong");
  var n = e.parseUShort(), i = n & 255;
  if (e.skip("uShort"), i === 0) {
    var a = e.parseUShort();
    e.skip("uShort", 3);
    for (var o = 0; o < a; o += 1) {
      var u = e.parseUShort(), s = e.parseUShort(), l = e.parseShort();
      t[u + "," + s] = l;
    }
  }
  return t;
}
function uv(e, t) {
  var r = new se.Parser(e, t), n = r.parseUShort();
  if (n === 0)
    return ov(r);
  if (n === 1)
    return sv(r);
  throw new Error("Unsupported kern table version (" + n + ").");
}
var lv = { parse: uv };
function fv(e, t) {
  var r = new se.Parser(e, t), n = r.parseULong();
  Te.argument(n === 1, "Unsupported ltag table version."), r.skip("uLong", 1);
  for (var i = r.parseULong(), a = [], o = 0; o < i; o++) {
    for (var u = "", s = t + r.parseUShort(), l = r.parseUShort(), f = s; f < s + l; ++f)
      u += String.fromCharCode(e.getInt8(f));
    a.push(u);
  }
  return a;
}
var cv = { parse: fv };
function pv(e, t, r, n) {
  for (var i = new se.Parser(e, t), a = n ? i.parseUShort : i.parseULong, o = [], u = 0; u < r + 1; u += 1) {
    var s = a.call(i);
    n && (s *= 2), o.push(s);
  }
  return o;
}
var hv = { parse: pv };
function dv(e, t) {
  var r = {}, n = new se.Parser(e, t);
  return r.version = n.parseVersion(), r.numGlyphs = n.parseUShort(), r.version === 1 && (r.maxPoints = n.parseUShort(), r.maxContours = n.parseUShort(), r.maxCompositePoints = n.parseUShort(), r.maxCompositeContours = n.parseUShort(), r.maxZones = n.parseUShort(), r.maxTwilightPoints = n.parseUShort(), r.maxStorage = n.parseUShort(), r.maxFunctionDefs = n.parseUShort(), r.maxInstructionDefs = n.parseUShort(), r.maxStackElements = n.parseUShort(), r.maxSizeOfInstructions = n.parseUShort(), r.maxComponentElements = n.parseUShort(), r.maxComponentDepth = n.parseUShort()), r;
}
var vv = { parse: dv };
function gv(e, t) {
  var r = {}, n = new se.Parser(e, t);
  r.version = n.parseUShort(), r.xAvgCharWidth = n.parseShort(), r.usWeightClass = n.parseUShort(), r.usWidthClass = n.parseUShort(), r.fsType = n.parseUShort(), r.ySubscriptXSize = n.parseShort(), r.ySubscriptYSize = n.parseShort(), r.ySubscriptXOffset = n.parseShort(), r.ySubscriptYOffset = n.parseShort(), r.ySuperscriptXSize = n.parseShort(), r.ySuperscriptYSize = n.parseShort(), r.ySuperscriptXOffset = n.parseShort(), r.ySuperscriptYOffset = n.parseShort(), r.yStrikeoutSize = n.parseShort(), r.yStrikeoutPosition = n.parseShort(), r.sFamilyClass = n.parseShort(), r.panose = [];
  for (var i = 0; i < 10; i++)
    r.panose[i] = n.parseByte();
  return r.ulUnicodeRange1 = n.parseULong(), r.ulUnicodeRange2 = n.parseULong(), r.ulUnicodeRange3 = n.parseULong(), r.ulUnicodeRange4 = n.parseULong(), r.achVendID = String.fromCharCode(n.parseByte(), n.parseByte(), n.parseByte(), n.parseByte()), r.fsSelection = n.parseUShort(), r.usFirstCharIndex = n.parseUShort(), r.usLastCharIndex = n.parseUShort(), r.sTypoAscender = n.parseShort(), r.sTypoDescender = n.parseShort(), r.sTypoLineGap = n.parseShort(), r.usWinAscent = n.parseUShort(), r.usWinDescent = n.parseUShort(), r.version >= 1 && (r.ulCodePageRange1 = n.parseULong(), r.ulCodePageRange2 = n.parseULong()), r.version >= 2 && (r.sxHeight = n.parseShort(), r.sCapHeight = n.parseShort(), r.usDefaultChar = n.parseUShort(), r.usBreakChar = n.parseUShort(), r.usMaxContent = n.parseUShort()), r;
}
var mv = { parse: gv };
function Dv(e, t) {
  var r = {}, n = new se.Parser(e, t);
  switch (r.version = n.parseVersion(), r.italicAngle = n.parseFixed(), r.underlinePosition = n.parseShort(), r.underlineThickness = n.parseShort(), r.isFixedPitch = n.parseULong(), r.minMemType42 = n.parseULong(), r.maxMemType42 = n.parseULong(), r.minMemType1 = n.parseULong(), r.maxMemType1 = n.parseULong(), r.names = [], r.version) {
    case 1:
      break;
    case 2:
      r.numberOfGlyphs = n.parseUShort(), r.glyphNameIndex = new Array(r.numberOfGlyphs);
      for (var i = 0; i < r.numberOfGlyphs; i++)
        r.glyphNameIndex[i] = n.parseUShort();
      break;
    case 2.5:
      r.numberOfGlyphs = n.parseUShort(), r.offset = new Array(r.numberOfGlyphs);
      for (var a = 0; a < r.numberOfGlyphs; a++)
        r.offset[a] = n.parseChar();
      break;
  }
  return r;
}
var yv = { parse: Dv };
var On = {};
On.UTF8 = function(e, t, r) {
  for (var n = [], i = r, a = 0; a < i; a++, t += 1)
    n[a] = e.getUint8(t);
  return String.fromCharCode.apply(null, n);
};
On.UTF16 = function(e, t, r) {
  for (var n = [], i = r / 2, a = 0; a < i; a++, t += 2)
    n[a] = e.getUint16(t);
  return String.fromCharCode.apply(null, n);
};
var bv = { "x-mac-croatian": "\xC4\xC5\xC7\xC9\xD1\xD6\xDC\xE1\xE0\xE2\xE4\xE3\xE5\xE7\xE9\xE8\xEA\xEB\xED\xEC\xEE\xEF\xF1\xF3\xF2\xF4\xF6\xF5\xFA\xF9\xFB\xFC\u2020\xB0\xA2\xA3\xA7\u2022\xB6\xDF\xAE\u0160\u2122\xB4\xA8\u2260\u017D\xD8\u221E\xB1\u2264\u2265\u2206\xB5\u2202\u2211\u220F\u0161\u222B\xAA\xBA\u03A9\u017E\xF8\xBF\xA1\xAC\u221A\u0192\u2248\u0106\xAB\u010C\u2026\xA0\xC0\xC3\xD5\u0152\u0153\u0110\u2014\u201C\u201D\u2018\u2019\xF7\u25CA\uF8FF\xA9\u2044\u20AC\u2039\u203A\xC6\xBB\u2013\xB7\u201A\u201E\u2030\xC2\u0107\xC1\u010D\xC8\xCD\xCE\xCF\xCC\xD3\xD4\u0111\xD2\xDA\xDB\xD9\u0131\u02C6\u02DC\xAF\u03C0\xCB\u02DA\xB8\xCA\xE6\u02C7", "x-mac-cyrillic": "\u0410\u0411\u0412\u0413\u0414\u0415\u0416\u0417\u0418\u0419\u041A\u041B\u041C\u041D\u041E\u041F\u0420\u0421\u0422\u0423\u0424\u0425\u0426\u0427\u0428\u0429\u042A\u042B\u042C\u042D\u042E\u042F\u2020\xB0\u0490\xA3\xA7\u2022\xB6\u0406\xAE\xA9\u2122\u0402\u0452\u2260\u0403\u0453\u221E\xB1\u2264\u2265\u0456\xB5\u0491\u0408\u0404\u0454\u0407\u0457\u0409\u0459\u040A\u045A\u0458\u0405\xAC\u221A\u0192\u2248\u2206\xAB\xBB\u2026\xA0\u040B\u045B\u040C\u045C\u0455\u2013\u2014\u201C\u201D\u2018\u2019\xF7\u201E\u040E\u045E\u040F\u045F\u2116\u0401\u0451\u044F\u0430\u0431\u0432\u0433\u0434\u0435\u0436\u0437\u0438\u0439\u043A\u043B\u043C\u043D\u043E\u043F\u0440\u0441\u0442\u0443\u0444\u0445\u0446\u0447\u0448\u0449\u044A\u044B\u044C\u044D\u044E", "x-mac-gaelic": "\xC4\xC5\xC7\xC9\xD1\xD6\xDC\xE1\xE0\xE2\xE4\xE3\xE5\xE7\xE9\xE8\xEA\xEB\xED\xEC\xEE\xEF\xF1\xF3\xF2\xF4\xF6\xF5\xFA\xF9\xFB\xFC\u2020\xB0\xA2\xA3\xA7\u2022\xB6\xDF\xAE\xA9\u2122\xB4\xA8\u2260\xC6\xD8\u1E02\xB1\u2264\u2265\u1E03\u010A\u010B\u1E0A\u1E0B\u1E1E\u1E1F\u0120\u0121\u1E40\xE6\xF8\u1E41\u1E56\u1E57\u027C\u0192\u017F\u1E60\xAB\xBB\u2026\xA0\xC0\xC3\xD5\u0152\u0153\u2013\u2014\u201C\u201D\u2018\u2019\u1E61\u1E9B\xFF\u0178\u1E6A\u20AC\u2039\u203A\u0176\u0177\u1E6B\xB7\u1EF2\u1EF3\u204A\xC2\xCA\xC1\xCB\xC8\xCD\xCE\xCF\xCC\xD3\xD4\u2663\xD2\xDA\xDB\xD9\u0131\xDD\xFD\u0174\u0175\u1E84\u1E85\u1E80\u1E81\u1E82\u1E83", "x-mac-greek": "\xC4\xB9\xB2\xC9\xB3\xD6\xDC\u0385\xE0\xE2\xE4\u0384\xA8\xE7\xE9\xE8\xEA\xEB\xA3\u2122\xEE\xEF\u2022\xBD\u2030\xF4\xF6\xA6\u20AC\xF9\xFB\xFC\u2020\u0393\u0394\u0398\u039B\u039E\u03A0\xDF\xAE\xA9\u03A3\u03AA\xA7\u2260\xB0\xB7\u0391\xB1\u2264\u2265\xA5\u0392\u0395\u0396\u0397\u0399\u039A\u039C\u03A6\u03AB\u03A8\u03A9\u03AC\u039D\xAC\u039F\u03A1\u2248\u03A4\xAB\xBB\u2026\xA0\u03A5\u03A7\u0386\u0388\u0153\u2013\u2015\u201C\u201D\u2018\u2019\xF7\u0389\u038A\u038C\u038E\u03AD\u03AE\u03AF\u03CC\u038F\u03CD\u03B1\u03B2\u03C8\u03B4\u03B5\u03C6\u03B3\u03B7\u03B9\u03BE\u03BA\u03BB\u03BC\u03BD\u03BF\u03C0\u03CE\u03C1\u03C3\u03C4\u03B8\u03C9\u03C2\u03C7\u03C5\u03B6\u03CA\u03CB\u0390\u03B0\xAD", "x-mac-icelandic": "\xC4\xC5\xC7\xC9\xD1\xD6\xDC\xE1\xE0\xE2\xE4\xE3\xE5\xE7\xE9\xE8\xEA\xEB\xED\xEC\xEE\xEF\xF1\xF3\xF2\xF4\xF6\xF5\xFA\xF9\xFB\xFC\xDD\xB0\xA2\xA3\xA7\u2022\xB6\xDF\xAE\xA9\u2122\xB4\xA8\u2260\xC6\xD8\u221E\xB1\u2264\u2265\xA5\xB5\u2202\u2211\u220F\u03C0\u222B\xAA\xBA\u03A9\xE6\xF8\xBF\xA1\xAC\u221A\u0192\u2248\u2206\xAB\xBB\u2026\xA0\xC0\xC3\xD5\u0152\u0153\u2013\u2014\u201C\u201D\u2018\u2019\xF7\u25CA\xFF\u0178\u2044\u20AC\xD0\xF0\xDE\xFE\xFD\xB7\u201A\u201E\u2030\xC2\xCA\xC1\xCB\xC8\xCD\xCE\xCF\xCC\xD3\xD4\uF8FF\xD2\xDA\xDB\xD9\u0131\u02C6\u02DC\xAF\u02D8\u02D9\u02DA\xB8\u02DD\u02DB\u02C7", "x-mac-inuit": "\u1403\u1404\u1405\u1406\u140A\u140B\u1431\u1432\u1433\u1434\u1438\u1439\u1449\u144E\u144F\u1450\u1451\u1455\u1456\u1466\u146D\u146E\u146F\u1470\u1472\u1473\u1483\u148B\u148C\u148D\u148E\u1490\u1491\xB0\u14A1\u14A5\u14A6\u2022\xB6\u14A7\xAE\xA9\u2122\u14A8\u14AA\u14AB\u14BB\u14C2\u14C3\u14C4\u14C5\u14C7\u14C8\u14D0\u14EF\u14F0\u14F1\u14F2\u14F4\u14F5\u1505\u14D5\u14D6\u14D7\u14D8\u14DA\u14DB\u14EA\u1528\u1529\u152A\u152B\u152D\u2026\xA0\u152E\u153E\u1555\u1556\u1557\u2013\u2014\u201C\u201D\u2018\u2019\u1558\u1559\u155A\u155D\u1546\u1547\u1548\u1549\u154B\u154C\u1550\u157F\u1580\u1581\u1582\u1583\u1584\u1585\u158F\u1590\u1591\u1592\u1593\u1594\u1595\u1671\u1672\u1673\u1674\u1675\u1676\u1596\u15A0\u15A1\u15A2\u15A3\u15A4\u15A5\u15A6\u157C\u0141\u0142", "x-mac-ce": "\xC4\u0100\u0101\xC9\u0104\xD6\xDC\xE1\u0105\u010C\xE4\u010D\u0106\u0107\xE9\u0179\u017A\u010E\xED\u010F\u0112\u0113\u0116\xF3\u0117\xF4\xF6\xF5\xFA\u011A\u011B\xFC\u2020\xB0\u0118\xA3\xA7\u2022\xB6\xDF\xAE\xA9\u2122\u0119\xA8\u2260\u0123\u012E\u012F\u012A\u2264\u2265\u012B\u0136\u2202\u2211\u0142\u013B\u013C\u013D\u013E\u0139\u013A\u0145\u0146\u0143\xAC\u221A\u0144\u0147\u2206\xAB\xBB\u2026\xA0\u0148\u0150\xD5\u0151\u014C\u2013\u2014\u201C\u201D\u2018\u2019\xF7\u25CA\u014D\u0154\u0155\u0158\u2039\u203A\u0159\u0156\u0157\u0160\u201A\u201E\u0161\u015A\u015B\xC1\u0164\u0165\xCD\u017D\u017E\u016A\xD3\xD4\u016B\u016E\xDA\u016F\u0170\u0171\u0172\u0173\xDD\xFD\u0137\u017B\u0141\u017C\u0122\u02C7", macintosh: "\xC4\xC5\xC7\xC9\xD1\xD6\xDC\xE1\xE0\xE2\xE4\xE3\xE5\xE7\xE9\xE8\xEA\xEB\xED\xEC\xEE\xEF\xF1\xF3\xF2\xF4\xF6\xF5\xFA\xF9\xFB\xFC\u2020\xB0\xA2\xA3\xA7\u2022\xB6\xDF\xAE\xA9\u2122\xB4\xA8\u2260\xC6\xD8\u221E\xB1\u2264\u2265\xA5\xB5\u2202\u2211\u220F\u03C0\u222B\xAA\xBA\u03A9\xE6\xF8\xBF\xA1\xAC\u221A\u0192\u2248\u2206\xAB\xBB\u2026\xA0\xC0\xC3\xD5\u0152\u0153\u2013\u2014\u201C\u201D\u2018\u2019\xF7\u25CA\xFF\u0178\u2044\u20AC\u2039\u203A\uFB01\uFB02\u2021\xB7\u201A\u201E\u2030\xC2\xCA\xC1\xCB\xC8\xCD\xCE\xCF\xCC\xD3\xD4\uF8FF\xD2\xDA\xDB\xD9\u0131\u02C6\u02DC\xAF\u02D8\u02D9\u02DA\xB8\u02DD\u02DB\u02C7", "x-mac-romanian": "\xC4\xC5\xC7\xC9\xD1\xD6\xDC\xE1\xE0\xE2\xE4\xE3\xE5\xE7\xE9\xE8\xEA\xEB\xED\xEC\xEE\xEF\xF1\xF3\xF2\xF4\xF6\xF5\xFA\xF9\xFB\xFC\u2020\xB0\xA2\xA3\xA7\u2022\xB6\xDF\xAE\xA9\u2122\xB4\xA8\u2260\u0102\u0218\u221E\xB1\u2264\u2265\xA5\xB5\u2202\u2211\u220F\u03C0\u222B\xAA\xBA\u03A9\u0103\u0219\xBF\xA1\xAC\u221A\u0192\u2248\u2206\xAB\xBB\u2026\xA0\xC0\xC3\xD5\u0152\u0153\u2013\u2014\u201C\u201D\u2018\u2019\xF7\u25CA\xFF\u0178\u2044\u20AC\u2039\u203A\u021A\u021B\u2021\xB7\u201A\u201E\u2030\xC2\xCA\xC1\xCB\xC8\xCD\xCE\xCF\xCC\xD3\xD4\uF8FF\xD2\xDA\xDB\xD9\u0131\u02C6\u02DC\xAF\u02D8\u02D9\u02DA\xB8\u02DD\u02DB\u02C7", "x-mac-turkish": "\xC4\xC5\xC7\xC9\xD1\xD6\xDC\xE1\xE0\xE2\xE4\xE3\xE5\xE7\xE9\xE8\xEA\xEB\xED\xEC\xEE\xEF\xF1\xF3\xF2\xF4\xF6\xF5\xFA\xF9\xFB\xFC\u2020\xB0\xA2\xA3\xA7\u2022\xB6\xDF\xAE\xA9\u2122\xB4\xA8\u2260\xC6\xD8\u221E\xB1\u2264\u2265\xA5\xB5\u2202\u2211\u220F\u03C0\u222B\xAA\xBA\u03A9\xE6\xF8\xBF\xA1\xAC\u221A\u0192\u2248\u2206\xAB\xBB\u2026\xA0\xC0\xC3\xD5\u0152\u0153\u2013\u2014\u201C\u201D\u2018\u2019\xF7\u25CA\xFF\u0178\u011E\u011F\u0130\u0131\u015E\u015F\u2021\xB7\u201A\u201E\u2030\xC2\xCA\xC1\xCB\xC8\xCD\xCE\xCF\xCC\xD3\xD4\uF8FF\xD2\xDA\xDB\xD9\uF8A0\u02C6\u02DC\xAF\u02D8\u02D9\u02DA\xB8\u02DD\u02DB\u02C7" };
On.MACSTRING = function(e, t, r, n) {
  var i = bv[n];
  if (i !== void 0) {
    for (var a = "", o = 0; o < r; o++) {
      var u = e.getUint8(t + o);
      u <= 127 ? a += String.fromCharCode(u) : a += i[u & 127];
    }
    return a;
  }
};
function xv(e, t) {
  var r = new se.Parser(e, t), n = r.parseULong();
  Te.argument(n === 1, "Unsupported META table version."), r.parseULong(), r.parseULong();
  for (var i = r.parseULong(), a = {}, o = 0; o < i; o++) {
    var u = r.parseTag(), s = r.parseULong(), l = r.parseULong(), f = On.UTF8(e, t + s, l);
    a[u] = f;
  }
  return a;
}
var wv = { parse: xv };
function Bs(e, t) {
  for (var r = [], n = 12, i = 0; i < t; i += 1) {
    var a = se.getTag(e, n), o = se.getULong(e, n + 4), u = se.getULong(e, n + 8), s = se.getULong(e, n + 12);
    r.push({ tag: a, checksum: o, offset: u, length: s, compression: false }), n += 16;
  }
  return r;
}
function Ev(e, t) {
  for (var r = [], n = 44, i = 0; i < t; i += 1) {
    var a = se.getTag(e, n), o = se.getULong(e, n + 4), u = se.getULong(e, n + 8), s = se.getULong(e, n + 12), l = void 0;
    u < s ? l = "WOFF" : l = false, r.push({ tag: a, offset: o, compression: l, compressedLength: u, length: s }), n += 20;
  }
  return r;
}
function je(e, t) {
  if (t.compression === "WOFF") {
    var r = new Uint8Array(e.buffer, t.offset + 2, t.compressedLength - 2), n = new Uint8Array(t.length);
    if (jp(r, n), n.byteLength !== t.length)
      throw new Error("Decompression error: " + t.tag + " decompressed length doesn't match recorded length");
    var i = new DataView(n.buffer, 0);
    return { data: i, offset: 0 };
  } else
    return { data: e, offset: t.offset };
}
function Fv(e, t) {
  t = t ?? {};
  var r, n = new st({ empty: true }), i = new DataView(e, 0), a, o = [], u = se.getTag(i, 0);
  if (u === "\0\0\0" || u === "true" || u === "typ1")
    n.outlinesFormat = "truetype", a = se.getUShort(i, 4), o = Bs(i, a);
  else if (u === "OTTO")
    n.outlinesFormat = "cff", a = se.getUShort(i, 4), o = Bs(i, a);
  else if (u === "wOFF") {
    var s = se.getTag(i, 4);
    if (s === "\0\0\0")
      n.outlinesFormat = "truetype";
    else if (s === "OTTO")
      n.outlinesFormat = "cff";
    else
      throw new Error("Unsupported OpenType flavor " + u);
    a = se.getUShort(i, 12), o = Ev(i, a);
  } else
    throw new Error("Unsupported OpenType signature " + u);
  for (var l, f, c, p, d, D, v, g, y, b, C, k = 0; k < a; k += 1) {
    var S = o[k], E = void 0;
    switch (S.tag) {
      case "cmap":
        E = je(i, S), n.tables.cmap = w0.parse(E.data, E.offset), n.encoding = new Hs(n.tables.cmap);
        break;
      case "cvt ":
        E = je(i, S), C = new se.Parser(E.data, E.offset), n.tables.cvt = C.parseShortList(S.length / 2);
        break;
      case "fvar":
        f = S;
        break;
      case "fpgm":
        E = je(i, S), C = new se.Parser(E.data, E.offset), n.tables.fpgm = C.parseByteList(S.length);
        break;
      case "head":
        E = je(i, S), n.tables.head = Q0.parse(E.data, E.offset), n.unitsPerEm = n.tables.head.unitsPerEm, r = n.tables.head.indexToLocFormat;
        break;
      case "hhea":
        E = je(i, S), n.tables.hhea = tv.parse(E.data, E.offset), n.ascender = n.tables.hhea.ascender, n.descender = n.tables.hhea.descender, n.numberOfHMetrics = n.tables.hhea.numberOfHMetrics;
        break;
      case "hmtx":
        v = S;
        break;
      case "ltag":
        E = je(i, S), ltagTable = cv.parse(E.data, E.offset);
        break;
      case "maxp":
        E = je(i, S), n.tables.maxp = vv.parse(E.data, E.offset), n.numGlyphs = n.tables.maxp.numGlyphs;
        break;
      case "OS/2":
        E = je(i, S), n.tables.os2 = mv.parse(E.data, E.offset);
        break;
      case "post":
        E = je(i, S), n.tables.post = yv.parse(E.data, E.offset);
        break;
      case "prep":
        E = je(i, S), C = new se.Parser(E.data, E.offset), n.tables.prep = C.parseByteList(S.length);
        break;
      case "glyf":
        c = S;
        break;
      case "loca":
        y = S;
        break;
      case "CFF ":
        l = S;
        break;
      case "kern":
        g = S;
        break;
      case "GDEF":
        p = S;
        break;
      case "GPOS":
        d = S;
        break;
      case "GSUB":
        D = S;
        break;
      case "meta":
        b = S;
        break;
    }
  }
  if (c && y) {
    var L = r === 0, T = je(i, y), U = hv.parse(T.data, T.offset, n.numGlyphs, L), M = je(i, c);
    n.glyphs = Ks.parse(M.data, M.offset, U, n, t);
  } else if (l) {
    var H = je(i, l);
    U0.parse(H.data, H.offset, n, t);
  } else
    throw new Error("Font doesn't contain TrueType or CFF outlines.");
  var q = je(i, v);
  if (av.parse(n, q.data, q.offset, n.numberOfHMetrics, n.numGlyphs, n.glyphs, t), Jp(n, t), g) {
    var ee = je(i, g);
    n.kerningPairs = lv.parse(ee.data, ee.offset);
  } else
    n.kerningPairs = {};
  if (p) {
    var A = je(i, p);
    n.tables.gdef = X0.parse(A.data, A.offset);
  }
  if (d) {
    var R = je(i, d);
    n.tables.gpos = Y0.parse(R.data, R.offset), n.position.init();
  }
  if (D) {
    var O = je(i, D);
    n.tables.gsub = J0.parse(O.data, O.offset);
  }
  if (f) {
    var Y = je(i, f);
    n.tables.fvar = G0.parse(Y.data, Y.offset, n.names);
  }
  if (b) {
    var Z = je(i, b);
    n.tables.meta = wv.parse(Z.data, Z.offset), n.metas = n.tables.meta;
  }
  return n;
}
function Cv() {
}
function Sv() {
}
var kv = Object.freeze({ __proto__: null, Font: st, Glyph: Jt, Path: ot, _parse: se, parse: Fv, load: Cv, loadSync: Sv });
var Ln = kv;
var Tv = Object.create;
var Yn = Object.defineProperty;
var _v = Object.getOwnPropertyDescriptor;
var Av = Object.getOwnPropertyNames;
var Ov = Object.getPrototypeOf;
var Lv = Object.prototype.hasOwnProperty;
var _a = (e, t) => () => (e && (t = e(e = 0)), t);
var le = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports);
var Aa = (e, t) => {
  for (var r in t)
    Yn(e, r, { get: t[r], enumerable: true });
};
var Bu = (e, t, r, n) => {
  if (t && typeof t == "object" || typeof t == "function")
    for (let i of Av(t))
      !Lv.call(e, i) && i !== r && Yn(e, i, { get: () => t[i], enumerable: !(n = _v(t, i)) || n.enumerable });
  return e;
};
var Iv = (e, t, r) => (r = e != null ? Tv(Ov(e)) : {}, Bu(t || !e || !e.__esModule ? Yn(r, "default", { value: e, enumerable: true }) : r, e));
var Xn = (e) => Bu(Yn({}, "__esModule", { value: true }), e);
var Nu = {};
Aa(Nu, { getYogaModule: () => Pv });
async function Pv() {
  return {};
}
var Rv = _a(() => {
});
var Mu = le((e) => {
  "use strict";
  Object.defineProperty(e, "__esModule", { value: true }), Object.defineProperty(e, "default", { enumerable: true, get: () => t });
  function t(r) {
    if (r = `${r}`, r === "0")
      return "0";
    if (/^[+-]?(\d+|\d*\.\d+)(e[+-]?\d+)?(%|\w+)?$/.test(r))
      return r.replace(/^[+-]?/, (n) => n === "-" ? "" : "-");
    if (r.includes("var(") || r.includes("calc("))
      return `calc(${r} * -1)`;
  }
});
var Uv = le((e) => {
  "use strict";
  Object.defineProperty(e, "__esModule", { value: true }), Object.defineProperty(e, "default", { enumerable: true, get: () => t });
  var t = ["preflight", "container", "accessibility", "pointerEvents", "visibility", "position", "inset", "isolation", "zIndex", "order", "gridColumn", "gridColumnStart", "gridColumnEnd", "gridRow", "gridRowStart", "gridRowEnd", "float", "clear", "margin", "boxSizing", "display", "aspectRatio", "height", "maxHeight", "minHeight", "width", "minWidth", "maxWidth", "flex", "flexShrink", "flexGrow", "flexBasis", "tableLayout", "borderCollapse", "borderSpacing", "transformOrigin", "translate", "rotate", "skew", "scale", "transform", "animation", "cursor", "touchAction", "userSelect", "resize", "scrollSnapType", "scrollSnapAlign", "scrollSnapStop", "scrollMargin", "scrollPadding", "listStylePosition", "listStyleType", "appearance", "columns", "breakBefore", "breakInside", "breakAfter", "gridAutoColumns", "gridAutoFlow", "gridAutoRows", "gridTemplateColumns", "gridTemplateRows", "flexDirection", "flexWrap", "placeContent", "placeItems", "alignContent", "alignItems", "justifyContent", "justifyItems", "gap", "space", "divideWidth", "divideStyle", "divideColor", "divideOpacity", "placeSelf", "alignSelf", "justifySelf", "overflow", "overscrollBehavior", "scrollBehavior", "textOverflow", "whitespace", "wordBreak", "borderRadius", "borderWidth", "borderStyle", "borderColor", "borderOpacity", "backgroundColor", "backgroundOpacity", "backgroundImage", "gradientColorStops", "boxDecorationBreak", "backgroundSize", "backgroundAttachment", "backgroundClip", "backgroundPosition", "backgroundRepeat", "backgroundOrigin", "fill", "stroke", "strokeWidth", "objectFit", "objectPosition", "padding", "textAlign", "textIndent", "verticalAlign", "fontFamily", "fontSize", "fontWeight", "textTransform", "fontStyle", "fontVariantNumeric", "lineHeight", "letterSpacing", "textColor", "textOpacity", "textDecoration", "textDecorationColor", "textDecorationStyle", "textDecorationThickness", "textUnderlineOffset", "fontSmoothing", "placeholderColor", "placeholderOpacity", "caretColor", "accentColor", "opacity", "backgroundBlendMode", "mixBlendMode", "boxShadow", "boxShadowColor", "outlineStyle", "outlineWidth", "outlineOffset", "outlineColor", "ringWidth", "ringColor", "ringOpacity", "ringOffsetWidth", "ringOffsetColor", "blur", "brightness", "contrast", "dropShadow", "grayscale", "hueRotate", "invert", "saturate", "sepia", "filter", "backdropBlur", "backdropBrightness", "backdropContrast", "backdropGrayscale", "backdropHueRotate", "backdropInvert", "backdropOpacity", "backdropSaturate", "backdropSepia", "backdropFilter", "transitionProperty", "transitionDelay", "transitionDuration", "transitionTimingFunction", "willChange", "content"];
});
var Bv = le((e) => {
  "use strict";
  Object.defineProperty(e, "__esModule", { value: true }), Object.defineProperty(e, "default", { enumerable: true, get: () => t });
  function t(r, n) {
    return r === void 0 ? n : Array.isArray(r) ? r : [...new Set(n.filter((i) => r !== false && r[i] !== false).concat(Object.keys(r).filter((i) => r[i] !== false)))];
  }
});
var Gu = le((e, t) => {
  t.exports = { content: [], presets: [], darkMode: "media", theme: { screens: { sm: "640px", md: "768px", lg: "1024px", xl: "1280px", "2xl": "1536px" }, colors: ({ colors: r }) => ({ inherit: r.inherit, current: r.current, transparent: r.transparent, black: r.black, white: r.white, slate: r.slate, gray: r.gray, zinc: r.zinc, neutral: r.neutral, stone: r.stone, red: r.red, orange: r.orange, amber: r.amber, yellow: r.yellow, lime: r.lime, green: r.green, emerald: r.emerald, teal: r.teal, cyan: r.cyan, sky: r.sky, blue: r.blue, indigo: r.indigo, violet: r.violet, purple: r.purple, fuchsia: r.fuchsia, pink: r.pink, rose: r.rose }), columns: { auto: "auto", 1: "1", 2: "2", 3: "3", 4: "4", 5: "5", 6: "6", 7: "7", 8: "8", 9: "9", 10: "10", 11: "11", 12: "12", "3xs": "16rem", "2xs": "18rem", xs: "20rem", sm: "24rem", md: "28rem", lg: "32rem", xl: "36rem", "2xl": "42rem", "3xl": "48rem", "4xl": "56rem", "5xl": "64rem", "6xl": "72rem", "7xl": "80rem" }, spacing: { px: "1px", 0: "0px", 0.5: "0.125rem", 1: "0.25rem", 1.5: "0.375rem", 2: "0.5rem", 2.5: "0.625rem", 3: "0.75rem", 3.5: "0.875rem", 4: "1rem", 5: "1.25rem", 6: "1.5rem", 7: "1.75rem", 8: "2rem", 9: "2.25rem", 10: "2.5rem", 11: "2.75rem", 12: "3rem", 14: "3.5rem", 16: "4rem", 20: "5rem", 24: "6rem", 28: "7rem", 32: "8rem", 36: "9rem", 40: "10rem", 44: "11rem", 48: "12rem", 52: "13rem", 56: "14rem", 60: "15rem", 64: "16rem", 72: "18rem", 80: "20rem", 96: "24rem" }, animation: { none: "none", spin: "spin 1s linear infinite", ping: "ping 1s cubic-bezier(0, 0, 0.2, 1) infinite", pulse: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite", bounce: "bounce 1s infinite" }, aspectRatio: { auto: "auto", square: "1 / 1", video: "16 / 9" }, backdropBlur: ({ theme: r }) => r("blur"), backdropBrightness: ({ theme: r }) => r("brightness"), backdropContrast: ({ theme: r }) => r("contrast"), backdropGrayscale: ({ theme: r }) => r("grayscale"), backdropHueRotate: ({ theme: r }) => r("hueRotate"), backdropInvert: ({ theme: r }) => r("invert"), backdropOpacity: ({ theme: r }) => r("opacity"), backdropSaturate: ({ theme: r }) => r("saturate"), backdropSepia: ({ theme: r }) => r("sepia"), backgroundColor: ({ theme: r }) => r("colors"), backgroundImage: { none: "none", "gradient-to-t": "linear-gradient(to top, var(--tw-gradient-stops))", "gradient-to-tr": "linear-gradient(to top right, var(--tw-gradient-stops))", "gradient-to-r": "linear-gradient(to right, var(--tw-gradient-stops))", "gradient-to-br": "linear-gradient(to bottom right, var(--tw-gradient-stops))", "gradient-to-b": "linear-gradient(to bottom, var(--tw-gradient-stops))", "gradient-to-bl": "linear-gradient(to bottom left, var(--tw-gradient-stops))", "gradient-to-l": "linear-gradient(to left, var(--tw-gradient-stops))", "gradient-to-tl": "linear-gradient(to top left, var(--tw-gradient-stops))" }, backgroundOpacity: ({ theme: r }) => r("opacity"), backgroundPosition: { bottom: "bottom", center: "center", left: "left", "left-bottom": "left bottom", "left-top": "left top", right: "right", "right-bottom": "right bottom", "right-top": "right top", top: "top" }, backgroundSize: { auto: "auto", cover: "cover", contain: "contain" }, blur: { 0: "0", none: "0", sm: "4px", DEFAULT: "8px", md: "12px", lg: "16px", xl: "24px", "2xl": "40px", "3xl": "64px" }, brightness: { 0: "0", 50: ".5", 75: ".75", 90: ".9", 95: ".95", 100: "1", 105: "1.05", 110: "1.1", 125: "1.25", 150: "1.5", 200: "2" }, borderColor: ({ theme: r }) => ({ ...r("colors"), DEFAULT: r("colors.gray.200", "currentColor") }), borderOpacity: ({ theme: r }) => r("opacity"), borderRadius: { none: "0px", sm: "0.125rem", DEFAULT: "0.25rem", md: "0.375rem", lg: "0.5rem", xl: "0.75rem", "2xl": "1rem", "3xl": "1.5rem", full: "9999px" }, borderSpacing: ({ theme: r }) => ({ ...r("spacing") }), borderWidth: { DEFAULT: "1px", 0: "0px", 2: "2px", 4: "4px", 8: "8px" }, boxShadow: { sm: "0 1px 2px 0 rgb(0 0 0 / 0.05)", DEFAULT: "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)", md: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)", lg: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)", xl: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)", "2xl": "0 25px 50px -12px rgb(0 0 0 / 0.25)", inner: "inset 0 2px 4px 0 rgb(0 0 0 / 0.05)", none: "none" }, boxShadowColor: ({ theme: r }) => r("colors"), caretColor: ({ theme: r }) => r("colors"), accentColor: ({ theme: r }) => ({ ...r("colors"), auto: "auto" }), contrast: { 0: "0", 50: ".5", 75: ".75", 100: "1", 125: "1.25", 150: "1.5", 200: "2" }, container: {}, content: { none: "none" }, cursor: { auto: "auto", default: "default", pointer: "pointer", wait: "wait", text: "text", move: "move", help: "help", "not-allowed": "not-allowed", none: "none", "context-menu": "context-menu", progress: "progress", cell: "cell", crosshair: "crosshair", "vertical-text": "vertical-text", alias: "alias", copy: "copy", "no-drop": "no-drop", grab: "grab", grabbing: "grabbing", "all-scroll": "all-scroll", "col-resize": "col-resize", "row-resize": "row-resize", "n-resize": "n-resize", "e-resize": "e-resize", "s-resize": "s-resize", "w-resize": "w-resize", "ne-resize": "ne-resize", "nw-resize": "nw-resize", "se-resize": "se-resize", "sw-resize": "sw-resize", "ew-resize": "ew-resize", "ns-resize": "ns-resize", "nesw-resize": "nesw-resize", "nwse-resize": "nwse-resize", "zoom-in": "zoom-in", "zoom-out": "zoom-out" }, divideColor: ({ theme: r }) => r("borderColor"), divideOpacity: ({ theme: r }) => r("borderOpacity"), divideWidth: ({ theme: r }) => r("borderWidth"), dropShadow: { sm: "0 1px 1px rgb(0 0 0 / 0.05)", DEFAULT: ["0 1px 2px rgb(0 0 0 / 0.1)", "0 1px 1px rgb(0 0 0 / 0.06)"], md: ["0 4px 3px rgb(0 0 0 / 0.07)", "0 2px 2px rgb(0 0 0 / 0.06)"], lg: ["0 10px 8px rgb(0 0 0 / 0.04)", "0 4px 3px rgb(0 0 0 / 0.1)"], xl: ["0 20px 13px rgb(0 0 0 / 0.03)", "0 8px 5px rgb(0 0 0 / 0.08)"], "2xl": "0 25px 25px rgb(0 0 0 / 0.15)", none: "0 0 #0000" }, fill: ({ theme: r }) => r("colors"), grayscale: { 0: "0", DEFAULT: "100%" }, hueRotate: { 0: "0deg", 15: "15deg", 30: "30deg", 60: "60deg", 90: "90deg", 180: "180deg" }, invert: { 0: "0", DEFAULT: "100%" }, flex: { 1: "1 1 0%", auto: "1 1 auto", initial: "0 1 auto", none: "none" }, flexBasis: ({ theme: r }) => ({ auto: "auto", ...r("spacing"), "1/2": "50%", "1/3": "33.333333%", "2/3": "66.666667%", "1/4": "25%", "2/4": "50%", "3/4": "75%", "1/5": "20%", "2/5": "40%", "3/5": "60%", "4/5": "80%", "1/6": "16.666667%", "2/6": "33.333333%", "3/6": "50%", "4/6": "66.666667%", "5/6": "83.333333%", "1/12": "8.333333%", "2/12": "16.666667%", "3/12": "25%", "4/12": "33.333333%", "5/12": "41.666667%", "6/12": "50%", "7/12": "58.333333%", "8/12": "66.666667%", "9/12": "75%", "10/12": "83.333333%", "11/12": "91.666667%", full: "100%" }), flexGrow: { 0: "0", DEFAULT: "1" }, flexShrink: { 0: "0", DEFAULT: "1" }, fontFamily: { sans: ["ui-sans-serif", "system-ui", "-apple-system", "BlinkMacSystemFont", '"Segoe UI"', "Roboto", '"Helvetica Neue"', "Arial", '"Noto Sans"', "sans-serif", '"Apple Color Emoji"', '"Segoe UI Emoji"', '"Segoe UI Symbol"', '"Noto Color Emoji"'], serif: ["ui-serif", "Georgia", "Cambria", '"Times New Roman"', "Times", "serif"], mono: ["ui-monospace", "SFMono-Regular", "Menlo", "Monaco", "Consolas", '"Liberation Mono"', '"Courier New"', "monospace"] }, fontSize: { xs: ["0.75rem", { lineHeight: "1rem" }], sm: ["0.875rem", { lineHeight: "1.25rem" }], base: ["1rem", { lineHeight: "1.5rem" }], lg: ["1.125rem", { lineHeight: "1.75rem" }], xl: ["1.25rem", { lineHeight: "1.75rem" }], "2xl": ["1.5rem", { lineHeight: "2rem" }], "3xl": ["1.875rem", { lineHeight: "2.25rem" }], "4xl": ["2.25rem", { lineHeight: "2.5rem" }], "5xl": ["3rem", { lineHeight: "1" }], "6xl": ["3.75rem", { lineHeight: "1" }], "7xl": ["4.5rem", { lineHeight: "1" }], "8xl": ["6rem", { lineHeight: "1" }], "9xl": ["8rem", { lineHeight: "1" }] }, fontWeight: { thin: "100", extralight: "200", light: "300", normal: "400", medium: "500", semibold: "600", bold: "700", extrabold: "800", black: "900" }, gap: ({ theme: r }) => r("spacing"), gradientColorStops: ({ theme: r }) => r("colors"), gridAutoColumns: { auto: "auto", min: "min-content", max: "max-content", fr: "minmax(0, 1fr)" }, gridAutoRows: { auto: "auto", min: "min-content", max: "max-content", fr: "minmax(0, 1fr)" }, gridColumn: { auto: "auto", "span-1": "span 1 / span 1", "span-2": "span 2 / span 2", "span-3": "span 3 / span 3", "span-4": "span 4 / span 4", "span-5": "span 5 / span 5", "span-6": "span 6 / span 6", "span-7": "span 7 / span 7", "span-8": "span 8 / span 8", "span-9": "span 9 / span 9", "span-10": "span 10 / span 10", "span-11": "span 11 / span 11", "span-12": "span 12 / span 12", "span-full": "1 / -1" }, gridColumnEnd: { auto: "auto", 1: "1", 2: "2", 3: "3", 4: "4", 5: "5", 6: "6", 7: "7", 8: "8", 9: "9", 10: "10", 11: "11", 12: "12", 13: "13" }, gridColumnStart: { auto: "auto", 1: "1", 2: "2", 3: "3", 4: "4", 5: "5", 6: "6", 7: "7", 8: "8", 9: "9", 10: "10", 11: "11", 12: "12", 13: "13" }, gridRow: { auto: "auto", "span-1": "span 1 / span 1", "span-2": "span 2 / span 2", "span-3": "span 3 / span 3", "span-4": "span 4 / span 4", "span-5": "span 5 / span 5", "span-6": "span 6 / span 6", "span-full": "1 / -1" }, gridRowStart: { auto: "auto", 1: "1", 2: "2", 3: "3", 4: "4", 5: "5", 6: "6", 7: "7" }, gridRowEnd: { auto: "auto", 1: "1", 2: "2", 3: "3", 4: "4", 5: "5", 6: "6", 7: "7" }, gridTemplateColumns: { none: "none", 1: "repeat(1, minmax(0, 1fr))", 2: "repeat(2, minmax(0, 1fr))", 3: "repeat(3, minmax(0, 1fr))", 4: "repeat(4, minmax(0, 1fr))", 5: "repeat(5, minmax(0, 1fr))", 6: "repeat(6, minmax(0, 1fr))", 7: "repeat(7, minmax(0, 1fr))", 8: "repeat(8, minmax(0, 1fr))", 9: "repeat(9, minmax(0, 1fr))", 10: "repeat(10, minmax(0, 1fr))", 11: "repeat(11, minmax(0, 1fr))", 12: "repeat(12, minmax(0, 1fr))" }, gridTemplateRows: { none: "none", 1: "repeat(1, minmax(0, 1fr))", 2: "repeat(2, minmax(0, 1fr))", 3: "repeat(3, minmax(0, 1fr))", 4: "repeat(4, minmax(0, 1fr))", 5: "repeat(5, minmax(0, 1fr))", 6: "repeat(6, minmax(0, 1fr))" }, height: ({ theme: r }) => ({ auto: "auto", ...r("spacing"), "1/2": "50%", "1/3": "33.333333%", "2/3": "66.666667%", "1/4": "25%", "2/4": "50%", "3/4": "75%", "1/5": "20%", "2/5": "40%", "3/5": "60%", "4/5": "80%", "1/6": "16.666667%", "2/6": "33.333333%", "3/6": "50%", "4/6": "66.666667%", "5/6": "83.333333%", full: "100%", screen: "100vh", min: "min-content", max: "max-content", fit: "fit-content" }), inset: ({ theme: r }) => ({ auto: "auto", ...r("spacing"), "1/2": "50%", "1/3": "33.333333%", "2/3": "66.666667%", "1/4": "25%", "2/4": "50%", "3/4": "75%", full: "100%" }), keyframes: { spin: { to: { transform: "rotate(360deg)" } }, ping: { "75%, 100%": { transform: "scale(2)", opacity: "0" } }, pulse: { "50%": { opacity: ".5" } }, bounce: { "0%, 100%": { transform: "translateY(-25%)", animationTimingFunction: "cubic-bezier(0.8,0,1,1)" }, "50%": { transform: "none", animationTimingFunction: "cubic-bezier(0,0,0.2,1)" } } }, letterSpacing: { tighter: "-0.05em", tight: "-0.025em", normal: "0em", wide: "0.025em", wider: "0.05em", widest: "0.1em" }, lineHeight: { none: "1", tight: "1.25", snug: "1.375", normal: "1.5", relaxed: "1.625", loose: "2", 3: ".75rem", 4: "1rem", 5: "1.25rem", 6: "1.5rem", 7: "1.75rem", 8: "2rem", 9: "2.25rem", 10: "2.5rem" }, listStyleType: { none: "none", disc: "disc", decimal: "decimal" }, margin: ({ theme: r }) => ({ auto: "auto", ...r("spacing") }), maxHeight: ({ theme: r }) => ({ ...r("spacing"), full: "100%", screen: "100vh", min: "min-content", max: "max-content", fit: "fit-content" }), maxWidth: ({ theme: r, breakpoints: n }) => ({ none: "none", 0: "0rem", xs: "20rem", sm: "24rem", md: "28rem", lg: "32rem", xl: "36rem", "2xl": "42rem", "3xl": "48rem", "4xl": "56rem", "5xl": "64rem", "6xl": "72rem", "7xl": "80rem", full: "100%", min: "min-content", max: "max-content", fit: "fit-content", prose: "65ch", ...n(r("screens")) }), minHeight: { 0: "0px", full: "100%", screen: "100vh", min: "min-content", max: "max-content", fit: "fit-content" }, minWidth: { 0: "0px", full: "100%", min: "min-content", max: "max-content", fit: "fit-content" }, objectPosition: { bottom: "bottom", center: "center", left: "left", "left-bottom": "left bottom", "left-top": "left top", right: "right", "right-bottom": "right bottom", "right-top": "right top", top: "top" }, opacity: { 0: "0", 5: "0.05", 10: "0.1", 20: "0.2", 25: "0.25", 30: "0.3", 40: "0.4", 50: "0.5", 60: "0.6", 70: "0.7", 75: "0.75", 80: "0.8", 90: "0.9", 95: "0.95", 100: "1" }, order: { first: "-9999", last: "9999", none: "0", 1: "1", 2: "2", 3: "3", 4: "4", 5: "5", 6: "6", 7: "7", 8: "8", 9: "9", 10: "10", 11: "11", 12: "12" }, padding: ({ theme: r }) => r("spacing"), placeholderColor: ({ theme: r }) => r("colors"), placeholderOpacity: ({ theme: r }) => r("opacity"), outlineColor: ({ theme: r }) => r("colors"), outlineOffset: { 0: "0px", 1: "1px", 2: "2px", 4: "4px", 8: "8px" }, outlineWidth: { 0: "0px", 1: "1px", 2: "2px", 4: "4px", 8: "8px" }, ringColor: ({ theme: r }) => ({ DEFAULT: r("colors.blue.500", "#3b82f6"), ...r("colors") }), ringOffsetColor: ({ theme: r }) => r("colors"), ringOffsetWidth: { 0: "0px", 1: "1px", 2: "2px", 4: "4px", 8: "8px" }, ringOpacity: ({ theme: r }) => ({ DEFAULT: "0.5", ...r("opacity") }), ringWidth: { DEFAULT: "3px", 0: "0px", 1: "1px", 2: "2px", 4: "4px", 8: "8px" }, rotate: { 0: "0deg", 1: "1deg", 2: "2deg", 3: "3deg", 6: "6deg", 12: "12deg", 45: "45deg", 90: "90deg", 180: "180deg" }, saturate: { 0: "0", 50: ".5", 100: "1", 150: "1.5", 200: "2" }, scale: { 0: "0", 50: ".5", 75: ".75", 90: ".9", 95: ".95", 100: "1", 105: "1.05", 110: "1.1", 125: "1.25", 150: "1.5" }, scrollMargin: ({ theme: r }) => ({ ...r("spacing") }), scrollPadding: ({ theme: r }) => r("spacing"), sepia: { 0: "0", DEFAULT: "100%" }, skew: { 0: "0deg", 1: "1deg", 2: "2deg", 3: "3deg", 6: "6deg", 12: "12deg" }, space: ({ theme: r }) => ({ ...r("spacing") }), stroke: ({ theme: r }) => r("colors"), strokeWidth: { 0: "0", 1: "1", 2: "2" }, textColor: ({ theme: r }) => r("colors"), textDecorationColor: ({ theme: r }) => r("colors"), textDecorationThickness: { auto: "auto", "from-font": "from-font", 0: "0px", 1: "1px", 2: "2px", 4: "4px", 8: "8px" }, textUnderlineOffset: { auto: "auto", 0: "0px", 1: "1px", 2: "2px", 4: "4px", 8: "8px" }, textIndent: ({ theme: r }) => ({ ...r("spacing") }), textOpacity: ({ theme: r }) => r("opacity"), transformOrigin: { center: "center", top: "top", "top-right": "top right", right: "right", "bottom-right": "bottom right", bottom: "bottom", "bottom-left": "bottom left", left: "left", "top-left": "top left" }, transitionDelay: { 75: "75ms", 100: "100ms", 150: "150ms", 200: "200ms", 300: "300ms", 500: "500ms", 700: "700ms", 1e3: "1000ms" }, transitionDuration: { DEFAULT: "150ms", 75: "75ms", 100: "100ms", 150: "150ms", 200: "200ms", 300: "300ms", 500: "500ms", 700: "700ms", 1e3: "1000ms" }, transitionProperty: { none: "none", all: "all", DEFAULT: "color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter", colors: "color, background-color, border-color, text-decoration-color, fill, stroke", opacity: "opacity", shadow: "box-shadow", transform: "transform" }, transitionTimingFunction: { DEFAULT: "cubic-bezier(0.4, 0, 0.2, 1)", linear: "linear", in: "cubic-bezier(0.4, 0, 1, 1)", out: "cubic-bezier(0, 0, 0.2, 1)", "in-out": "cubic-bezier(0.4, 0, 0.2, 1)" }, translate: ({ theme: r }) => ({ ...r("spacing"), "1/2": "50%", "1/3": "33.333333%", "2/3": "66.666667%", "1/4": "25%", "2/4": "50%", "3/4": "75%", full: "100%" }), width: ({ theme: r }) => ({ auto: "auto", ...r("spacing"), "1/2": "50%", "1/3": "33.333333%", "2/3": "66.666667%", "1/4": "25%", "2/4": "50%", "3/4": "75%", "1/5": "20%", "2/5": "40%", "3/5": "60%", "4/5": "80%", "1/6": "16.666667%", "2/6": "33.333333%", "3/6": "50%", "4/6": "66.666667%", "5/6": "83.333333%", "1/12": "8.333333%", "2/12": "16.666667%", "3/12": "25%", "4/12": "33.333333%", "5/12": "41.666667%", "6/12": "50%", "7/12": "58.333333%", "8/12": "66.666667%", "9/12": "75%", "10/12": "83.333333%", "11/12": "91.666667%", full: "100%", screen: "100vw", min: "min-content", max: "max-content", fit: "fit-content" }), willChange: { auto: "auto", scroll: "scroll-position", contents: "contents", transform: "transform" }, zIndex: { auto: "auto", 0: "0", 10: "10", 20: "20", 30: "30", 40: "40", 50: "50" } }, variantOrder: ["first", "last", "odd", "even", "visited", "checked", "empty", "read-only", "group-hover", "group-focus", "focus-within", "hover", "focus", "focus-visible", "active", "disabled"], plugins: [] };
});
var Zn = {};
Aa(Zn, { default: () => Wu });
var Wu;
var Oa = _a(() => {
  Wu = { info(e, t) {
    console.info(...Array.isArray(e) ? [e] : [t, e]);
  }, warn(e, t) {
    console.warn(...Array.isArray(e) ? [e] : [t, e]);
  }, risk(e, t) {
    console.error(...Array.isArray(e) ? [e] : [t, e]);
  } };
});
var Nv = le((e) => {
  "use strict";
  Object.defineProperty(e, "__esModule", { value: true }), Object.defineProperty(e, "default", { enumerable: true, get: () => i });
  var t = r((Oa(), Xn(Zn)));
  function r(a) {
    return a && a.__esModule ? a : { default: a };
  }
  function n({ version: a, from: o, to: u }) {
    t.default.warn(`${o}-color-renamed`, [`As of Tailwind CSS ${a}, \`${o}\` has been renamed to \`${u}\`.`, "Update your configuration file to silence this warning."]);
  }
  var i = { inherit: "inherit", current: "currentColor", transparent: "transparent", black: "#000", white: "#fff", slate: { 50: "#f8fafc", 100: "#f1f5f9", 200: "#e2e8f0", 300: "#cbd5e1", 400: "#94a3b8", 500: "#64748b", 600: "#475569", 700: "#334155", 800: "#1e293b", 900: "#0f172a" }, gray: { 50: "#f9fafb", 100: "#f3f4f6", 200: "#e5e7eb", 300: "#d1d5db", 400: "#9ca3af", 500: "#6b7280", 600: "#4b5563", 700: "#374151", 800: "#1f2937", 900: "#111827" }, zinc: { 50: "#fafafa", 100: "#f4f4f5", 200: "#e4e4e7", 300: "#d4d4d8", 400: "#a1a1aa", 500: "#71717a", 600: "#52525b", 700: "#3f3f46", 800: "#27272a", 900: "#18181b" }, neutral: { 50: "#fafafa", 100: "#f5f5f5", 200: "#e5e5e5", 300: "#d4d4d4", 400: "#a3a3a3", 500: "#737373", 600: "#525252", 700: "#404040", 800: "#262626", 900: "#171717" }, stone: { 50: "#fafaf9", 100: "#f5f5f4", 200: "#e7e5e4", 300: "#d6d3d1", 400: "#a8a29e", 500: "#78716c", 600: "#57534e", 700: "#44403c", 800: "#292524", 900: "#1c1917" }, red: { 50: "#fef2f2", 100: "#fee2e2", 200: "#fecaca", 300: "#fca5a5", 400: "#f87171", 500: "#ef4444", 600: "#dc2626", 700: "#b91c1c", 800: "#991b1b", 900: "#7f1d1d" }, orange: { 50: "#fff7ed", 100: "#ffedd5", 200: "#fed7aa", 300: "#fdba74", 400: "#fb923c", 500: "#f97316", 600: "#ea580c", 700: "#c2410c", 800: "#9a3412", 900: "#7c2d12" }, amber: { 50: "#fffbeb", 100: "#fef3c7", 200: "#fde68a", 300: "#fcd34d", 400: "#fbbf24", 500: "#f59e0b", 600: "#d97706", 700: "#b45309", 800: "#92400e", 900: "#78350f" }, yellow: { 50: "#fefce8", 100: "#fef9c3", 200: "#fef08a", 300: "#fde047", 400: "#facc15", 500: "#eab308", 600: "#ca8a04", 700: "#a16207", 800: "#854d0e", 900: "#713f12" }, lime: { 50: "#f7fee7", 100: "#ecfccb", 200: "#d9f99d", 300: "#bef264", 400: "#a3e635", 500: "#84cc16", 600: "#65a30d", 700: "#4d7c0f", 800: "#3f6212", 900: "#365314" }, green: { 50: "#f0fdf4", 100: "#dcfce7", 200: "#bbf7d0", 300: "#86efac", 400: "#4ade80", 500: "#22c55e", 600: "#16a34a", 700: "#15803d", 800: "#166534", 900: "#14532d" }, emerald: { 50: "#ecfdf5", 100: "#d1fae5", 200: "#a7f3d0", 300: "#6ee7b7", 400: "#34d399", 500: "#10b981", 600: "#059669", 700: "#047857", 800: "#065f46", 900: "#064e3b" }, teal: { 50: "#f0fdfa", 100: "#ccfbf1", 200: "#99f6e4", 300: "#5eead4", 400: "#2dd4bf", 500: "#14b8a6", 600: "#0d9488", 700: "#0f766e", 800: "#115e59", 900: "#134e4a" }, cyan: { 50: "#ecfeff", 100: "#cffafe", 200: "#a5f3fc", 300: "#67e8f9", 400: "#22d3ee", 500: "#06b6d4", 600: "#0891b2", 700: "#0e7490", 800: "#155e75", 900: "#164e63" }, sky: { 50: "#f0f9ff", 100: "#e0f2fe", 200: "#bae6fd", 300: "#7dd3fc", 400: "#38bdf8", 500: "#0ea5e9", 600: "#0284c7", 700: "#0369a1", 800: "#075985", 900: "#0c4a6e" }, blue: { 50: "#eff6ff", 100: "#dbeafe", 200: "#bfdbfe", 300: "#93c5fd", 400: "#60a5fa", 500: "#3b82f6", 600: "#2563eb", 700: "#1d4ed8", 800: "#1e40af", 900: "#1e3a8a" }, indigo: { 50: "#eef2ff", 100: "#e0e7ff", 200: "#c7d2fe", 300: "#a5b4fc", 400: "#818cf8", 500: "#6366f1", 600: "#4f46e5", 700: "#4338ca", 800: "#3730a3", 900: "#312e81" }, violet: { 50: "#f5f3ff", 100: "#ede9fe", 200: "#ddd6fe", 300: "#c4b5fd", 400: "#a78bfa", 500: "#8b5cf6", 600: "#7c3aed", 700: "#6d28d9", 800: "#5b21b6", 900: "#4c1d95" }, purple: { 50: "#faf5ff", 100: "#f3e8ff", 200: "#e9d5ff", 300: "#d8b4fe", 400: "#c084fc", 500: "#a855f7", 600: "#9333ea", 700: "#7e22ce", 800: "#6b21a8", 900: "#581c87" }, fuchsia: { 50: "#fdf4ff", 100: "#fae8ff", 200: "#f5d0fe", 300: "#f0abfc", 400: "#e879f9", 500: "#d946ef", 600: "#c026d3", 700: "#a21caf", 800: "#86198f", 900: "#701a75" }, pink: { 50: "#fdf2f8", 100: "#fce7f3", 200: "#fbcfe8", 300: "#f9a8d4", 400: "#f472b6", 500: "#ec4899", 600: "#db2777", 700: "#be185d", 800: "#9d174d", 900: "#831843" }, rose: { 50: "#fff1f2", 100: "#ffe4e6", 200: "#fecdd3", 300: "#fda4af", 400: "#fb7185", 500: "#f43f5e", 600: "#e11d48", 700: "#be123c", 800: "#9f1239", 900: "#881337" }, get lightBlue() {
    return n({ version: "v2.2", from: "lightBlue", to: "sky" }), this.sky;
  }, get warmGray() {
    return n({ version: "v3.0", from: "warmGray", to: "stone" }), this.stone;
  }, get trueGray() {
    return n({ version: "v3.0", from: "trueGray", to: "neutral" }), this.neutral;
  }, get coolGray() {
    return n({ version: "v3.0", from: "coolGray", to: "gray" }), this.gray;
  }, get blueGray() {
    return n({ version: "v3.0", from: "blueGray", to: "slate" }), this.slate;
  } };
});
var Mv = le((e) => {
  "use strict";
  Object.defineProperty(e, "__esModule", { value: true }), Object.defineProperty(e, "defaults", { enumerable: true, get: () => t });
  function t(r, ...n) {
    for (let o of n) {
      for (let u in o) {
        var i;
        !(r == null || (i = r.hasOwnProperty) === null || i === void 0) && i.call(r, u) || (r[u] = o[u]);
      }
      for (let u of Object.getOwnPropertySymbols(o)) {
        var a;
        !(r == null || (a = r.hasOwnProperty) === null || a === void 0) && a.call(r, u) || (r[u] = o[u]);
      }
    }
    return r;
  }
});
var Gv = le((e) => {
  "use strict";
  Object.defineProperty(e, "__esModule", { value: true }), Object.defineProperty(e, "toPath", { enumerable: true, get: () => t });
  function t(r) {
    if (Array.isArray(r))
      return r;
    let n = r.split("[").length - 1, i = r.split("]").length - 1;
    if (n !== i)
      throw new Error(`Path is invalid. Has unbalanced brackets: ${r}`);
    return r.split(/\.(?![^\[]*\])|[\[\]]/g).filter(Boolean);
  }
});
var Wv = le((e) => {
  "use strict";
  Object.defineProperty(e, "__esModule", { value: true }), Object.defineProperty(e, "normalizeConfig", { enumerable: true, get: () => i });
  var t = n((Oa(), Xn(Zn)));
  function r(a) {
    if (typeof WeakMap != "function")
      return null;
    var o = /* @__PURE__ */ new WeakMap(), u = /* @__PURE__ */ new WeakMap();
    return (r = function(s) {
      return s ? u : o;
    })(a);
  }
  function n(a, o) {
    if (!o && a && a.__esModule)
      return a;
    if (a === null || typeof a != "object" && typeof a != "function")
      return { default: a };
    var u = r(o);
    if (u && u.has(a))
      return u.get(a);
    var s = {}, l = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var f in a)
      if (f !== "default" && Object.prototype.hasOwnProperty.call(a, f)) {
        var c = l ? Object.getOwnPropertyDescriptor(a, f) : null;
        c && (c.get || c.set) ? Object.defineProperty(s, f, c) : s[f] = a[f];
      }
    return s.default = a, u && u.set(a, s), s;
  }
  function i(a) {
    if ((() => {
      if (a.purge || !a.content || !Array.isArray(a.content) && !(typeof a.content == "object" && a.content !== null))
        return false;
      if (Array.isArray(a.content))
        return a.content.every((u) => typeof u == "string" ? true : !(typeof u?.raw != "string" || u != null && u.extension && typeof u?.extension != "string"));
      if (typeof a.content == "object" && a.content !== null) {
        if (Object.keys(a.content).some((u) => !["files", "extract", "transform"].includes(u)))
          return false;
        if (Array.isArray(a.content.files)) {
          if (!a.content.files.every((u) => typeof u == "string" ? true : !(typeof u?.raw != "string" || u != null && u.extension && typeof u?.extension != "string")))
            return false;
          if (typeof a.content.extract == "object") {
            for (let u of Object.values(a.content.extract))
              if (typeof u != "function")
                return false;
          } else if (!(a.content.extract === void 0 || typeof a.content.extract == "function"))
            return false;
          if (typeof a.content.transform == "object") {
            for (let u of Object.values(a.content.transform))
              if (typeof u != "function")
                return false;
          } else if (!(a.content.transform === void 0 || typeof a.content.transform == "function"))
            return false;
        }
        return true;
      }
      return false;
    })() || t.default.warn("purge-deprecation", ["The `purge`/`content` options have changed in Tailwind CSS v3.0.", "Update your configuration file to eliminate this warning.", "https://tailwindcss.com/docs/upgrade-guide#configure-content-sources"]), a.safelist = (() => {
      var u;
      let { content: s, purge: l, safelist: f } = a;
      return Array.isArray(f) ? f : Array.isArray(s?.safelist) ? s.safelist : Array.isArray(l?.safelist) ? l.safelist : Array.isArray(l == null || (u = l.options) === null || u === void 0 ? void 0 : u.safelist) ? l.options.safelist : [];
    })(), typeof a.prefix == "function")
      t.default.warn("prefix-function", ["As of Tailwind CSS v3.0, `prefix` cannot be a function.", "Update `prefix` in your configuration to be a string to eliminate this warning.", "https://tailwindcss.com/docs/upgrade-guide#prefix-cannot-be-a-function"]), a.prefix = "";
    else {
      var o;
      a.prefix = (o = a.prefix) !== null && o !== void 0 ? o : "";
    }
    a.content = { files: (() => {
      let { content: u, purge: s } = a;
      return Array.isArray(s) ? s : Array.isArray(s?.content) ? s.content : Array.isArray(u) ? u : Array.isArray(u?.content) ? u.content : Array.isArray(u?.files) ? u.files : [];
    })(), extract: (() => {
      let u = (() => {
        var f, c, p, d, D, v, g, y, b, C;
        return !((f = a.purge) === null || f === void 0) && f.extract ? a.purge.extract : !((c = a.content) === null || c === void 0) && c.extract ? a.content.extract : !((p = a.purge) === null || p === void 0 || (d = p.extract) === null || d === void 0) && d.DEFAULT ? a.purge.extract.DEFAULT : !((D = a.content) === null || D === void 0 || (v = D.extract) === null || v === void 0) && v.DEFAULT ? a.content.extract.DEFAULT : !((g = a.purge) === null || g === void 0 || (y = g.options) === null || y === void 0) && y.extractors ? a.purge.options.extractors : !((b = a.content) === null || b === void 0 || (C = b.options) === null || C === void 0) && C.extractors ? a.content.options.extractors : {};
      })(), s = {}, l = (() => {
        var f, c, p, d;
        if (!((f = a.purge) === null || f === void 0 || (c = f.options) === null || c === void 0) && c.defaultExtractor)
          return a.purge.options.defaultExtractor;
        if (!((p = a.content) === null || p === void 0 || (d = p.options) === null || d === void 0) && d.defaultExtractor)
          return a.content.options.defaultExtractor;
      })();
      if (l !== void 0 && (s.DEFAULT = l), typeof u == "function")
        s.DEFAULT = u;
      else if (Array.isArray(u))
        for (let { extensions: f, extractor: c } of u ?? [])
          for (let p of f)
            s[p] = c;
      else
        typeof u == "object" && u !== null && Object.assign(s, u);
      return s;
    })(), transform: (() => {
      let u = (() => {
        var l, f, c, p, d, D;
        return !((l = a.purge) === null || l === void 0) && l.transform ? a.purge.transform : !((f = a.content) === null || f === void 0) && f.transform ? a.content.transform : !((c = a.purge) === null || c === void 0 || (p = c.transform) === null || p === void 0) && p.DEFAULT ? a.purge.transform.DEFAULT : !((d = a.content) === null || d === void 0 || (D = d.transform) === null || D === void 0) && D.DEFAULT ? a.content.transform.DEFAULT : {};
      })(), s = {};
      return typeof u == "function" && (s.DEFAULT = u), typeof u == "object" && u !== null && Object.assign(s, u), s;
    })() };
    for (let u of a.content.files)
      if (typeof u == "string" && /{([^,]*?)}/g.test(u)) {
        t.default.warn("invalid-glob-braces", [`The glob pattern ${(0, t.dim)(u)} in your Tailwind CSS configuration is invalid.`, `Update it to ${(0, t.dim)(u.replace(/{([^,]*?)}/g, "$1"))} to silence this warning.`]);
        break;
      }
    return a;
  }
});
var $v = le((e) => {
  "use strict";
  Object.defineProperty(e, "__esModule", { value: true }), Object.defineProperty(e, "default", { enumerable: true, get: () => t });
  function t(r) {
    if (Object.prototype.toString.call(r) !== "[object Object]")
      return false;
    let n = Object.getPrototypeOf(r);
    return n === null || n === Object.prototype;
  }
});
var jv = le((e) => {
  "use strict";
  Object.defineProperty(e, "__esModule", { value: true }), Object.defineProperty(e, "cloneDeep", { enumerable: true, get: () => t });
  function t(r) {
    return Array.isArray(r) ? r.map((n) => t(n)) : typeof r == "object" && r !== null ? Object.fromEntries(Object.entries(r).map(([n, i]) => [n, t(i)])) : r;
  }
});
var $u = le((e, t) => {
  "use strict";
  e.__esModule = true, e.default = i;
  function r(a) {
    for (var o = a.toLowerCase(), u = "", s = false, l = 0; l < 6 && o[l] !== void 0; l++) {
      var f = o.charCodeAt(l), c = f >= 97 && f <= 102 || f >= 48 && f <= 57;
      if (s = f === 32, !c)
        break;
      u += o[l];
    }
    if (u.length !== 0) {
      var p = parseInt(u, 16), d = p >= 55296 && p <= 57343;
      return d || p === 0 || p > 1114111 ? ["\uFFFD", u.length + (s ? 1 : 0)] : [String.fromCodePoint(p), u.length + (s ? 1 : 0)];
    }
  }
  var n = /\\/;
  function i(a) {
    var o = n.test(a);
    if (!o)
      return a;
    for (var u = "", s = 0; s < a.length; s++) {
      if (a[s] === "\\") {
        var l = r(a.slice(s + 1, s + 7));
        if (l !== void 0) {
          u += l[0], s += l[1];
          continue;
        }
        if (a[s + 1] === "\\") {
          u += "\\", s++;
          continue;
        }
        a.length === s + 1 && (u += a[s]);
        continue;
      }
      u += a[s];
    }
    return u;
  }
  t.exports = e.default;
});
var zv = le((e, t) => {
  "use strict";
  e.__esModule = true, e.default = r;
  function r(n) {
    for (var i = arguments.length, a = new Array(i > 1 ? i - 1 : 0), o = 1; o < i; o++)
      a[o - 1] = arguments[o];
    for (; a.length > 0; ) {
      var u = a.shift();
      if (!n[u])
        return;
      n = n[u];
    }
    return n;
  }
  t.exports = e.default;
});
var Vv = le((e, t) => {
  "use strict";
  e.__esModule = true, e.default = r;
  function r(n) {
    for (var i = arguments.length, a = new Array(i > 1 ? i - 1 : 0), o = 1; o < i; o++)
      a[o - 1] = arguments[o];
    for (; a.length > 0; ) {
      var u = a.shift();
      n[u] || (n[u] = {}), n = n[u];
    }
  }
  t.exports = e.default;
});
var Hv = le((e, t) => {
  "use strict";
  e.__esModule = true, e.default = r;
  function r(n) {
    for (var i = "", a = n.indexOf("/*"), o = 0; a >= 0; ) {
      i = i + n.slice(o, a);
      var u = n.indexOf("*/", a + 2);
      if (u < 0)
        return i;
      o = u + 2, a = n.indexOf("/*", o);
    }
    return i = i + n.slice(o), i;
  }
  t.exports = e.default;
});
var Jn = le((e) => {
  "use strict";
  e.__esModule = true, e.stripComments = e.ensureObject = e.getProp = e.unesc = void 0;
  var t = a($u());
  e.unesc = t.default;
  var r = a(zv());
  e.getProp = r.default;
  var n = a(Vv());
  e.ensureObject = n.default;
  var i = a(Hv());
  e.stripComments = i.default;
  function a(o) {
    return o && o.__esModule ? o : { default: o };
  }
});
var pr = le((e, t) => {
  "use strict";
  e.__esModule = true, e.default = void 0;
  var r = Jn();
  function n(u, s) {
    for (var l = 0; l < s.length; l++) {
      var f = s[l];
      f.enumerable = f.enumerable || false, f.configurable = true, "value" in f && (f.writable = true), Object.defineProperty(u, f.key, f);
    }
  }
  function i(u, s, l) {
    return s && n(u.prototype, s), l && n(u, l), u;
  }
  var a = function u(s, l) {
    if (typeof s != "object" || s === null)
      return s;
    var f = new s.constructor();
    for (var c in s)
      if (s.hasOwnProperty(c)) {
        var p = s[c], d = typeof p;
        c === "parent" && d === "object" ? l && (f[c] = l) : p instanceof Array ? f[c] = p.map(function(D) {
          return u(D, f);
        }) : f[c] = u(p, f);
      }
    return f;
  }, o = function() {
    function u(l) {
      l === void 0 && (l = {}), Object.assign(this, l), this.spaces = this.spaces || {}, this.spaces.before = this.spaces.before || "", this.spaces.after = this.spaces.after || "";
    }
    var s = u.prototype;
    return s.remove = function() {
      return this.parent && this.parent.removeChild(this), this.parent = void 0, this;
    }, s.replaceWith = function() {
      if (this.parent) {
        for (var l in arguments)
          this.parent.insertBefore(this, arguments[l]);
        this.remove();
      }
      return this;
    }, s.next = function() {
      return this.parent.at(this.parent.index(this) + 1);
    }, s.prev = function() {
      return this.parent.at(this.parent.index(this) - 1);
    }, s.clone = function(l) {
      l === void 0 && (l = {});
      var f = a(this);
      for (var c in l)
        f[c] = l[c];
      return f;
    }, s.appendToPropertyAndEscape = function(l, f, c) {
      this.raws || (this.raws = {});
      var p = this[l], d = this.raws[l];
      this[l] = p + f, d || c !== f ? this.raws[l] = (d || p) + c : delete this.raws[l];
    }, s.setPropertyAndEscape = function(l, f, c) {
      this.raws || (this.raws = {}), this[l] = f, this.raws[l] = c;
    }, s.setPropertyWithoutEscape = function(l, f) {
      this[l] = f, this.raws && delete this.raws[l];
    }, s.isAtPosition = function(l, f) {
      if (this.source && this.source.start && this.source.end)
        return !(this.source.start.line > l || this.source.end.line < l || this.source.start.line === l && this.source.start.column > f || this.source.end.line === l && this.source.end.column < f);
    }, s.stringifyProperty = function(l) {
      return this.raws && this.raws[l] || this[l];
    }, s.valueToString = function() {
      return String(this.stringifyProperty("value"));
    }, s.toString = function() {
      return [this.rawSpaceBefore, this.valueToString(), this.rawSpaceAfter].join("");
    }, i(u, [{ key: "rawSpaceBefore", get: function() {
      var l = this.raws && this.raws.spaces && this.raws.spaces.before;
      return l === void 0 && (l = this.spaces && this.spaces.before), l || "";
    }, set: function(l) {
      (0, r.ensureObject)(this, "raws", "spaces"), this.raws.spaces.before = l;
    } }, { key: "rawSpaceAfter", get: function() {
      var l = this.raws && this.raws.spaces && this.raws.spaces.after;
      return l === void 0 && (l = this.spaces.after), l || "";
    }, set: function(l) {
      (0, r.ensureObject)(this, "raws", "spaces"), this.raws.spaces.after = l;
    } }]), u;
  }();
  e.default = o, t.exports = e.default;
});
var ut = le((e) => {
  "use strict";
  e.__esModule = true, e.UNIVERSAL = e.ATTRIBUTE = e.CLASS = e.COMBINATOR = e.COMMENT = e.ID = e.NESTING = e.PSEUDO = e.ROOT = e.SELECTOR = e.STRING = e.TAG = void 0;
  var t = "tag";
  e.TAG = t;
  var r = "string";
  e.STRING = r;
  var n = "selector";
  e.SELECTOR = n;
  var i = "root";
  e.ROOT = i;
  var a = "pseudo";
  e.PSEUDO = a;
  var o = "nesting";
  e.NESTING = o;
  var u = "id";
  e.ID = u;
  var s = "comment";
  e.COMMENT = s;
  var l = "combinator";
  e.COMBINATOR = l;
  var f = "class";
  e.CLASS = f;
  var c = "attribute";
  e.ATTRIBUTE = c;
  var p = "universal";
  e.UNIVERSAL = p;
});
var La = le((e, t) => {
  "use strict";
  e.__esModule = true, e.default = void 0;
  var r = o(pr()), n = a(ut());
  function i() {
    if (typeof WeakMap != "function")
      return null;
    var v = /* @__PURE__ */ new WeakMap();
    return i = function() {
      return v;
    }, v;
  }
  function a(v) {
    if (v && v.__esModule)
      return v;
    if (v === null || typeof v != "object" && typeof v != "function")
      return { default: v };
    var g = i();
    if (g && g.has(v))
      return g.get(v);
    var y = {}, b = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var C in v)
      if (Object.prototype.hasOwnProperty.call(v, C)) {
        var k = b ? Object.getOwnPropertyDescriptor(v, C) : null;
        k && (k.get || k.set) ? Object.defineProperty(y, C, k) : y[C] = v[C];
      }
    return y.default = v, g && g.set(v, y), y;
  }
  function o(v) {
    return v && v.__esModule ? v : { default: v };
  }
  function u(v, g) {
    var y;
    if (typeof Symbol > "u" || v[Symbol.iterator] == null) {
      if (Array.isArray(v) || (y = s(v)) || g && v && typeof v.length == "number") {
        y && (v = y);
        var b = 0;
        return function() {
          return b >= v.length ? { done: true } : { done: false, value: v[b++] };
        };
      }
      throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
    }
    return y = v[Symbol.iterator](), y.next.bind(y);
  }
  function s(v, g) {
    if (v) {
      if (typeof v == "string")
        return l(v, g);
      var y = Object.prototype.toString.call(v).slice(8, -1);
      if (y === "Object" && v.constructor && (y = v.constructor.name), y === "Map" || y === "Set")
        return Array.from(v);
      if (y === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(y))
        return l(v, g);
    }
  }
  function l(v, g) {
    (g == null || g > v.length) && (g = v.length);
    for (var y = 0, b = new Array(g); y < g; y++)
      b[y] = v[y];
    return b;
  }
  function f(v, g) {
    for (var y = 0; y < g.length; y++) {
      var b = g[y];
      b.enumerable = b.enumerable || false, b.configurable = true, "value" in b && (b.writable = true), Object.defineProperty(v, b.key, b);
    }
  }
  function c(v, g, y) {
    return g && f(v.prototype, g), y && f(v, y), v;
  }
  function p(v, g) {
    v.prototype = Object.create(g.prototype), v.prototype.constructor = v, d(v, g);
  }
  function d(v, g) {
    return d = Object.setPrototypeOf || function(y, b) {
      return y.__proto__ = b, y;
    }, d(v, g);
  }
  var D = function(v) {
    p(g, v);
    function g(b) {
      var C;
      return C = v.call(this, b) || this, C.nodes || (C.nodes = []), C;
    }
    var y = g.prototype;
    return y.append = function(b) {
      return b.parent = this, this.nodes.push(b), this;
    }, y.prepend = function(b) {
      return b.parent = this, this.nodes.unshift(b), this;
    }, y.at = function(b) {
      return this.nodes[b];
    }, y.index = function(b) {
      return typeof b == "number" ? b : this.nodes.indexOf(b);
    }, y.removeChild = function(b) {
      b = this.index(b), this.at(b).parent = void 0, this.nodes.splice(b, 1);
      var C;
      for (var k in this.indexes)
        C = this.indexes[k], C >= b && (this.indexes[k] = C - 1);
      return this;
    }, y.removeAll = function() {
      for (var b = u(this.nodes), C; !(C = b()).done; ) {
        var k = C.value;
        k.parent = void 0;
      }
      return this.nodes = [], this;
    }, y.empty = function() {
      return this.removeAll();
    }, y.insertAfter = function(b, C) {
      C.parent = this;
      var k = this.index(b);
      this.nodes.splice(k + 1, 0, C), C.parent = this;
      var S;
      for (var E in this.indexes)
        S = this.indexes[E], k <= S && (this.indexes[E] = S + 1);
      return this;
    }, y.insertBefore = function(b, C) {
      C.parent = this;
      var k = this.index(b);
      this.nodes.splice(k, 0, C), C.parent = this;
      var S;
      for (var E in this.indexes)
        S = this.indexes[E], S <= k && (this.indexes[E] = S + 1);
      return this;
    }, y._findChildAtPosition = function(b, C) {
      var k = void 0;
      return this.each(function(S) {
        if (S.atPosition) {
          var E = S.atPosition(b, C);
          if (E)
            return k = E, false;
        } else if (S.isAtPosition(b, C))
          return k = S, false;
      }), k;
    }, y.atPosition = function(b, C) {
      if (this.isAtPosition(b, C))
        return this._findChildAtPosition(b, C) || this;
    }, y._inferEndPosition = function() {
      this.last && this.last.source && this.last.source.end && (this.source = this.source || {}, this.source.end = this.source.end || {}, Object.assign(this.source.end, this.last.source.end));
    }, y.each = function(b) {
      this.lastEach || (this.lastEach = 0), this.indexes || (this.indexes = {}), this.lastEach++;
      var C = this.lastEach;
      if (this.indexes[C] = 0, !!this.length) {
        for (var k, S; this.indexes[C] < this.length && (k = this.indexes[C], S = b(this.at(k), k), S !== false); )
          this.indexes[C] += 1;
        if (delete this.indexes[C], S === false)
          return false;
      }
    }, y.walk = function(b) {
      return this.each(function(C, k) {
        var S = b(C, k);
        if (S !== false && C.length && (S = C.walk(b)), S === false)
          return false;
      });
    }, y.walkAttributes = function(b) {
      var C = this;
      return this.walk(function(k) {
        if (k.type === n.ATTRIBUTE)
          return b.call(C, k);
      });
    }, y.walkClasses = function(b) {
      var C = this;
      return this.walk(function(k) {
        if (k.type === n.CLASS)
          return b.call(C, k);
      });
    }, y.walkCombinators = function(b) {
      var C = this;
      return this.walk(function(k) {
        if (k.type === n.COMBINATOR)
          return b.call(C, k);
      });
    }, y.walkComments = function(b) {
      var C = this;
      return this.walk(function(k) {
        if (k.type === n.COMMENT)
          return b.call(C, k);
      });
    }, y.walkIds = function(b) {
      var C = this;
      return this.walk(function(k) {
        if (k.type === n.ID)
          return b.call(C, k);
      });
    }, y.walkNesting = function(b) {
      var C = this;
      return this.walk(function(k) {
        if (k.type === n.NESTING)
          return b.call(C, k);
      });
    }, y.walkPseudos = function(b) {
      var C = this;
      return this.walk(function(k) {
        if (k.type === n.PSEUDO)
          return b.call(C, k);
      });
    }, y.walkTags = function(b) {
      var C = this;
      return this.walk(function(k) {
        if (k.type === n.TAG)
          return b.call(C, k);
      });
    }, y.walkUniversals = function(b) {
      var C = this;
      return this.walk(function(k) {
        if (k.type === n.UNIVERSAL)
          return b.call(C, k);
      });
    }, y.split = function(b) {
      var C = this, k = [];
      return this.reduce(function(S, E, L) {
        var T = b.call(C, E);
        return k.push(E), T ? (S.push(k), k = []) : L === C.length - 1 && S.push(k), S;
      }, []);
    }, y.map = function(b) {
      return this.nodes.map(b);
    }, y.reduce = function(b, C) {
      return this.nodes.reduce(b, C);
    }, y.every = function(b) {
      return this.nodes.every(b);
    }, y.some = function(b) {
      return this.nodes.some(b);
    }, y.filter = function(b) {
      return this.nodes.filter(b);
    }, y.sort = function(b) {
      return this.nodes.sort(b);
    }, y.toString = function() {
      return this.map(String).join("");
    }, c(g, [{ key: "first", get: function() {
      return this.at(0);
    } }, { key: "last", get: function() {
      return this.at(this.length - 1);
    } }, { key: "length", get: function() {
      return this.nodes.length;
    } }]), g;
  }(r.default);
  e.default = D, t.exports = e.default;
});
var ju = le((e, t) => {
  "use strict";
  e.__esModule = true, e.default = void 0;
  var r = i(La()), n = ut();
  function i(f) {
    return f && f.__esModule ? f : { default: f };
  }
  function a(f, c) {
    for (var p = 0; p < c.length; p++) {
      var d = c[p];
      d.enumerable = d.enumerable || false, d.configurable = true, "value" in d && (d.writable = true), Object.defineProperty(f, d.key, d);
    }
  }
  function o(f, c, p) {
    return c && a(f.prototype, c), p && a(f, p), f;
  }
  function u(f, c) {
    f.prototype = Object.create(c.prototype), f.prototype.constructor = f, s(f, c);
  }
  function s(f, c) {
    return s = Object.setPrototypeOf || function(p, d) {
      return p.__proto__ = d, p;
    }, s(f, c);
  }
  var l = function(f) {
    u(c, f);
    function c(d) {
      var D;
      return D = f.call(this, d) || this, D.type = n.ROOT, D;
    }
    var p = c.prototype;
    return p.toString = function() {
      var d = this.reduce(function(D, v) {
        return D.push(String(v)), D;
      }, []).join(",");
      return this.trailingComma ? d + "," : d;
    }, p.error = function(d, D) {
      return this._error ? this._error(d, D) : new Error(d);
    }, o(c, [{ key: "errorGenerator", set: function(d) {
      this._error = d;
    } }]), c;
  }(r.default);
  e.default = l, t.exports = e.default;
});
var zu = le((e, t) => {
  "use strict";
  e.__esModule = true, e.default = void 0;
  var r = i(La()), n = ut();
  function i(s) {
    return s && s.__esModule ? s : { default: s };
  }
  function a(s, l) {
    s.prototype = Object.create(l.prototype), s.prototype.constructor = s, o(s, l);
  }
  function o(s, l) {
    return o = Object.setPrototypeOf || function(f, c) {
      return f.__proto__ = c, f;
    }, o(s, l);
  }
  var u = function(s) {
    a(l, s);
    function l(f) {
      var c;
      return c = s.call(this, f) || this, c.type = n.SELECTOR, c;
    }
    return l;
  }(r.default);
  e.default = u, t.exports = e.default;
});
var Ia = le((e, t) => {
  "use strict";
  var r = {}, n = r.hasOwnProperty, i = function(l, f) {
    if (!l)
      return f;
    var c = {};
    for (var p in f)
      c[p] = n.call(l, p) ? l[p] : f[p];
    return c;
  }, a = /[ -,\.\/:-@\[-\^`\{-~]/, o = /[ -,\.\/:-@\[\]\^`\{-~]/, u = /(^|\\+)?(\\[A-F0-9]{1,6})\x20(?![a-fA-F0-9\x20])/g, s = function l(f, c) {
    c = i(c, l.options), c.quotes != "single" && c.quotes != "double" && (c.quotes = "single");
    for (var p = c.quotes == "double" ? '"' : "'", d = c.isIdentifier, D = f.charAt(0), v = "", g = 0, y = f.length; g < y; ) {
      var b = f.charAt(g++), C = b.charCodeAt(), k = void 0;
      if (C < 32 || C > 126) {
        if (C >= 55296 && C <= 56319 && g < y) {
          var S = f.charCodeAt(g++);
          (S & 64512) == 56320 ? C = ((C & 1023) << 10) + (S & 1023) + 65536 : g--;
        }
        k = "\\" + C.toString(16).toUpperCase() + " ";
      } else
        c.escapeEverything ? a.test(b) ? k = "\\" + b : k = "\\" + C.toString(16).toUpperCase() + " " : /[\t\n\f\r\x0B]/.test(b) ? k = "\\" + C.toString(16).toUpperCase() + " " : b == "\\" || !d && (b == '"' && p == b || b == "'" && p == b) || d && o.test(b) ? k = "\\" + b : k = b;
      v += k;
    }
    return d && (/^-[-\d]/.test(v) ? v = "\\-" + v.slice(1) : /\d/.test(D) && (v = "\\3" + D + " " + v.slice(1))), v = v.replace(u, function(E, L, T) {
      return L && L.length % 2 ? E : (L || "") + T;
    }), !d && c.wrap ? p + v + p : v;
  };
  s.options = { escapeEverything: false, isIdentifier: false, quotes: "single", wrap: false }, s.version = "3.0.0", t.exports = s;
});
var Vu = le((e, t) => {
  "use strict";
  e.__esModule = true, e.default = void 0;
  var r = o(Ia()), n = Jn(), i = o(pr()), a = ut();
  function o(p) {
    return p && p.__esModule ? p : { default: p };
  }
  function u(p, d) {
    for (var D = 0; D < d.length; D++) {
      var v = d[D];
      v.enumerable = v.enumerable || false, v.configurable = true, "value" in v && (v.writable = true), Object.defineProperty(p, v.key, v);
    }
  }
  function s(p, d, D) {
    return d && u(p.prototype, d), D && u(p, D), p;
  }
  function l(p, d) {
    p.prototype = Object.create(d.prototype), p.prototype.constructor = p, f(p, d);
  }
  function f(p, d) {
    return f = Object.setPrototypeOf || function(D, v) {
      return D.__proto__ = v, D;
    }, f(p, d);
  }
  var c = function(p) {
    l(d, p);
    function d(v) {
      var g;
      return g = p.call(this, v) || this, g.type = a.CLASS, g._constructed = true, g;
    }
    var D = d.prototype;
    return D.valueToString = function() {
      return "." + p.prototype.valueToString.call(this);
    }, s(d, [{ key: "value", get: function() {
      return this._value;
    }, set: function(v) {
      if (this._constructed) {
        var g = (0, r.default)(v, { isIdentifier: true });
        g !== v ? ((0, n.ensureObject)(this, "raws"), this.raws.value = g) : this.raws && delete this.raws.value;
      }
      this._value = v;
    } }]), d;
  }(i.default);
  e.default = c, t.exports = e.default;
});
var Hu = le((e, t) => {
  "use strict";
  e.__esModule = true, e.default = void 0;
  var r = i(pr()), n = ut();
  function i(s) {
    return s && s.__esModule ? s : { default: s };
  }
  function a(s, l) {
    s.prototype = Object.create(l.prototype), s.prototype.constructor = s, o(s, l);
  }
  function o(s, l) {
    return o = Object.setPrototypeOf || function(f, c) {
      return f.__proto__ = c, f;
    }, o(s, l);
  }
  var u = function(s) {
    a(l, s);
    function l(f) {
      var c;
      return c = s.call(this, f) || this, c.type = n.COMMENT, c;
    }
    return l;
  }(r.default);
  e.default = u, t.exports = e.default;
});
var Xu = le((e, t) => {
  "use strict";
  e.__esModule = true, e.default = void 0;
  var r = i(pr()), n = ut();
  function i(s) {
    return s && s.__esModule ? s : { default: s };
  }
  function a(s, l) {
    s.prototype = Object.create(l.prototype), s.prototype.constructor = s, o(s, l);
  }
  function o(s, l) {
    return o = Object.setPrototypeOf || function(f, c) {
      return f.__proto__ = c, f;
    }, o(s, l);
  }
  var u = function(s) {
    a(l, s);
    function l(c) {
      var p;
      return p = s.call(this, c) || this, p.type = n.ID, p;
    }
    var f = l.prototype;
    return f.valueToString = function() {
      return "#" + s.prototype.valueToString.call(this);
    }, l;
  }(r.default);
  e.default = u, t.exports = e.default;
});
var Pa = le((e, t) => {
  "use strict";
  e.__esModule = true, e.default = void 0;
  var r = a(Ia()), n = Jn(), i = a(pr());
  function a(c) {
    return c && c.__esModule ? c : { default: c };
  }
  function o(c, p) {
    for (var d = 0; d < p.length; d++) {
      var D = p[d];
      D.enumerable = D.enumerable || false, D.configurable = true, "value" in D && (D.writable = true), Object.defineProperty(c, D.key, D);
    }
  }
  function u(c, p, d) {
    return p && o(c.prototype, p), d && o(c, d), c;
  }
  function s(c, p) {
    c.prototype = Object.create(p.prototype), c.prototype.constructor = c, l(c, p);
  }
  function l(c, p) {
    return l = Object.setPrototypeOf || function(d, D) {
      return d.__proto__ = D, d;
    }, l(c, p);
  }
  var f = function(c) {
    s(p, c);
    function p() {
      return c.apply(this, arguments) || this;
    }
    var d = p.prototype;
    return d.qualifiedName = function(D) {
      return this.namespace ? this.namespaceString + "|" + D : D;
    }, d.valueToString = function() {
      return this.qualifiedName(c.prototype.valueToString.call(this));
    }, u(p, [{ key: "namespace", get: function() {
      return this._namespace;
    }, set: function(D) {
      if (D === true || D === "*" || D === "&") {
        this._namespace = D, this.raws && delete this.raws.namespace;
        return;
      }
      var v = (0, r.default)(D, { isIdentifier: true });
      this._namespace = D, v !== D ? ((0, n.ensureObject)(this, "raws"), this.raws.namespace = v) : this.raws && delete this.raws.namespace;
    } }, { key: "ns", get: function() {
      return this._namespace;
    }, set: function(D) {
      this.namespace = D;
    } }, { key: "namespaceString", get: function() {
      if (this.namespace) {
        var D = this.stringifyProperty("namespace");
        return D === true ? "" : D;
      } else
        return "";
    } }]), p;
  }(i.default);
  e.default = f, t.exports = e.default;
});
var qu = le((e, t) => {
  "use strict";
  e.__esModule = true, e.default = void 0;
  var r = i(Pa()), n = ut();
  function i(s) {
    return s && s.__esModule ? s : { default: s };
  }
  function a(s, l) {
    s.prototype = Object.create(l.prototype), s.prototype.constructor = s, o(s, l);
  }
  function o(s, l) {
    return o = Object.setPrototypeOf || function(f, c) {
      return f.__proto__ = c, f;
    }, o(s, l);
  }
  var u = function(s) {
    a(l, s);
    function l(f) {
      var c;
      return c = s.call(this, f) || this, c.type = n.TAG, c;
    }
    return l;
  }(r.default);
  e.default = u, t.exports = e.default;
});
var Yu = le((e, t) => {
  "use strict";
  e.__esModule = true, e.default = void 0;
  var r = i(pr()), n = ut();
  function i(s) {
    return s && s.__esModule ? s : { default: s };
  }
  function a(s, l) {
    s.prototype = Object.create(l.prototype), s.prototype.constructor = s, o(s, l);
  }
  function o(s, l) {
    return o = Object.setPrototypeOf || function(f, c) {
      return f.__proto__ = c, f;
    }, o(s, l);
  }
  var u = function(s) {
    a(l, s);
    function l(f) {
      var c;
      return c = s.call(this, f) || this, c.type = n.STRING, c;
    }
    return l;
  }(r.default);
  e.default = u, t.exports = e.default;
});
var Zu = le((e, t) => {
  "use strict";
  e.__esModule = true, e.default = void 0;
  var r = i(La()), n = ut();
  function i(s) {
    return s && s.__esModule ? s : { default: s };
  }
  function a(s, l) {
    s.prototype = Object.create(l.prototype), s.prototype.constructor = s, o(s, l);
  }
  function o(s, l) {
    return o = Object.setPrototypeOf || function(f, c) {
      return f.__proto__ = c, f;
    }, o(s, l);
  }
  var u = function(s) {
    a(l, s);
    function l(c) {
      var p;
      return p = s.call(this, c) || this, p.type = n.PSEUDO, p;
    }
    var f = l.prototype;
    return f.toString = function() {
      var c = this.length ? "(" + this.map(String).join(",") + ")" : "";
      return [this.rawSpaceBefore, this.stringifyProperty("value"), c, this.rawSpaceAfter].join("");
    }, l;
  }(r.default);
  e.default = u, t.exports = e.default;
});
var Xv = le((e, t) => {
  t.exports = function(r, n) {
    return function(...i) {
      return console.warn(n), r(...i);
    };
  };
});
var Ju = le((e) => {
  "use strict";
  e.__esModule = true, e.unescapeValue = g, e.default = void 0;
  var t = o(Ia()), r = o($u()), n = o(Pa()), i = ut(), a;
  function o(S) {
    return S && S.__esModule ? S : { default: S };
  }
  function u(S, E) {
    for (var L = 0; L < E.length; L++) {
      var T = E[L];
      T.enumerable = T.enumerable || false, T.configurable = true, "value" in T && (T.writable = true), Object.defineProperty(S, T.key, T);
    }
  }
  function s(S, E, L) {
    return E && u(S.prototype, E), L && u(S, L), S;
  }
  function l(S, E) {
    S.prototype = Object.create(E.prototype), S.prototype.constructor = S, f(S, E);
  }
  function f(S, E) {
    return f = Object.setPrototypeOf || function(L, T) {
      return L.__proto__ = T, L;
    }, f(S, E);
  }
  var c = Xv(), p = /^('|")([^]*)\1$/, d = c(function() {
  }, "Assigning an attribute a value containing characters that might need to be escaped is deprecated. Call attribute.setValue() instead."), D = c(function() {
  }, "Assigning attr.quoted is deprecated and has no effect. Assign to attr.quoteMark instead."), v = c(function() {
  }, "Constructing an Attribute selector with a value without specifying quoteMark is deprecated. Note: The value should be unescaped now.");
  function g(S) {
    var E = false, L = null, T = S, U = T.match(p);
    return U && (L = U[1], T = U[2]), T = (0, r.default)(T), T !== S && (E = true), { deprecatedUsage: E, unescaped: T, quoteMark: L };
  }
  function y(S) {
    if (S.quoteMark !== void 0 || S.value === void 0)
      return S;
    v();
    var E = g(S.value), L = E.quoteMark, T = E.unescaped;
    return S.raws || (S.raws = {}), S.raws.value === void 0 && (S.raws.value = S.value), S.value = T, S.quoteMark = L, S;
  }
  var b = function(S) {
    l(E, S);
    function E(T) {
      var U;
      return T === void 0 && (T = {}), U = S.call(this, y(T)) || this, U.type = i.ATTRIBUTE, U.raws = U.raws || {}, Object.defineProperty(U.raws, "unquoted", { get: c(function() {
        return U.value;
      }, "attr.raws.unquoted is deprecated. Call attr.value instead."), set: c(function() {
        return U.value;
      }, "Setting attr.raws.unquoted is deprecated and has no effect. attr.value is unescaped by default now.") }), U._constructed = true, U;
    }
    var L = E.prototype;
    return L.getQuotedValue = function(T) {
      T === void 0 && (T = {});
      var U = this._determineQuoteMark(T), M = C[U], H = (0, t.default)(this._value, M);
      return H;
    }, L._determineQuoteMark = function(T) {
      return T.smart ? this.smartQuoteMark(T) : this.preferredQuoteMark(T);
    }, L.setValue = function(T, U) {
      U === void 0 && (U = {}), this._value = T, this._quoteMark = this._determineQuoteMark(U), this._syncRawValue();
    }, L.smartQuoteMark = function(T) {
      var U = this.value, M = U.replace(/[^']/g, "").length, H = U.replace(/[^"]/g, "").length;
      if (M + H === 0) {
        var q = (0, t.default)(U, { isIdentifier: true });
        if (q === U)
          return E.NO_QUOTE;
        var ee = this.preferredQuoteMark(T);
        if (ee === E.NO_QUOTE) {
          var A = this.quoteMark || T.quoteMark || E.DOUBLE_QUOTE, R = C[A], O = (0, t.default)(U, R);
          if (O.length < q.length)
            return A;
        }
        return ee;
      } else
        return H === M ? this.preferredQuoteMark(T) : H < M ? E.DOUBLE_QUOTE : E.SINGLE_QUOTE;
    }, L.preferredQuoteMark = function(T) {
      var U = T.preferCurrentQuoteMark ? this.quoteMark : T.quoteMark;
      return U === void 0 && (U = T.preferCurrentQuoteMark ? T.quoteMark : this.quoteMark), U === void 0 && (U = E.DOUBLE_QUOTE), U;
    }, L._syncRawValue = function() {
      var T = (0, t.default)(this._value, C[this.quoteMark]);
      T === this._value ? this.raws && delete this.raws.value : this.raws.value = T;
    }, L._handleEscapes = function(T, U) {
      if (this._constructed) {
        var M = (0, t.default)(U, { isIdentifier: true });
        M !== U ? this.raws[T] = M : delete this.raws[T];
      }
    }, L._spacesFor = function(T) {
      var U = { before: "", after: "" }, M = this.spaces[T] || {}, H = this.raws.spaces && this.raws.spaces[T] || {};
      return Object.assign(U, M, H);
    }, L._stringFor = function(T, U, M) {
      U === void 0 && (U = T), M === void 0 && (M = k);
      var H = this._spacesFor(U);
      return M(this.stringifyProperty(T), H);
    }, L.offsetOf = function(T) {
      var U = 1, M = this._spacesFor("attribute");
      if (U += M.before.length, T === "namespace" || T === "ns")
        return this.namespace ? U : -1;
      if (T === "attributeNS" || (U += this.namespaceString.length, this.namespace && (U += 1), T === "attribute"))
        return U;
      U += this.stringifyProperty("attribute").length, U += M.after.length;
      var H = this._spacesFor("operator");
      U += H.before.length;
      var q = this.stringifyProperty("operator");
      if (T === "operator")
        return q ? U : -1;
      U += q.length, U += H.after.length;
      var ee = this._spacesFor("value");
      U += ee.before.length;
      var A = this.stringifyProperty("value");
      if (T === "value")
        return A ? U : -1;
      U += A.length, U += ee.after.length;
      var R = this._spacesFor("insensitive");
      return U += R.before.length, T === "insensitive" && this.insensitive ? U : -1;
    }, L.toString = function() {
      var T = this, U = [this.rawSpaceBefore, "["];
      return U.push(this._stringFor("qualifiedAttribute", "attribute")), this.operator && (this.value || this.value === "") && (U.push(this._stringFor("operator")), U.push(this._stringFor("value")), U.push(this._stringFor("insensitiveFlag", "insensitive", function(M, H) {
        return M.length > 0 && !T.quoted && H.before.length === 0 && !(T.spaces.value && T.spaces.value.after) && (H.before = " "), k(M, H);
      }))), U.push("]"), U.push(this.rawSpaceAfter), U.join("");
    }, s(E, [{ key: "quoted", get: function() {
      var T = this.quoteMark;
      return T === "'" || T === '"';
    }, set: function(T) {
      D();
    } }, { key: "quoteMark", get: function() {
      return this._quoteMark;
    }, set: function(T) {
      if (!this._constructed) {
        this._quoteMark = T;
        return;
      }
      this._quoteMark !== T && (this._quoteMark = T, this._syncRawValue());
    } }, { key: "qualifiedAttribute", get: function() {
      return this.qualifiedName(this.raws.attribute || this.attribute);
    } }, { key: "insensitiveFlag", get: function() {
      return this.insensitive ? "i" : "";
    } }, { key: "value", get: function() {
      return this._value;
    }, set: function(T) {
      if (this._constructed) {
        var U = g(T), M = U.deprecatedUsage, H = U.unescaped, q = U.quoteMark;
        if (M && d(), H === this._value && q === this._quoteMark)
          return;
        this._value = H, this._quoteMark = q, this._syncRawValue();
      } else
        this._value = T;
    } }, { key: "attribute", get: function() {
      return this._attribute;
    }, set: function(T) {
      this._handleEscapes("attribute", T), this._attribute = T;
    } }]), E;
  }(n.default);
  e.default = b, b.NO_QUOTE = null, b.SINGLE_QUOTE = "'", b.DOUBLE_QUOTE = '"';
  var C = (a = { "'": { quotes: "single", wrap: true }, '"': { quotes: "double", wrap: true } }, a[null] = { isIdentifier: true }, a);
  function k(S, E) {
    return "" + E.before + S + E.after;
  }
});
var Ku = le((e, t) => {
  "use strict";
  e.__esModule = true, e.default = void 0;
  var r = i(Pa()), n = ut();
  function i(s) {
    return s && s.__esModule ? s : { default: s };
  }
  function a(s, l) {
    s.prototype = Object.create(l.prototype), s.prototype.constructor = s, o(s, l);
  }
  function o(s, l) {
    return o = Object.setPrototypeOf || function(f, c) {
      return f.__proto__ = c, f;
    }, o(s, l);
  }
  var u = function(s) {
    a(l, s);
    function l(f) {
      var c;
      return c = s.call(this, f) || this, c.type = n.UNIVERSAL, c.value = "*", c;
    }
    return l;
  }(r.default);
  e.default = u, t.exports = e.default;
});
var Qu = le((e, t) => {
  "use strict";
  e.__esModule = true, e.default = void 0;
  var r = i(pr()), n = ut();
  function i(s) {
    return s && s.__esModule ? s : { default: s };
  }
  function a(s, l) {
    s.prototype = Object.create(l.prototype), s.prototype.constructor = s, o(s, l);
  }
  function o(s, l) {
    return o = Object.setPrototypeOf || function(f, c) {
      return f.__proto__ = c, f;
    }, o(s, l);
  }
  var u = function(s) {
    a(l, s);
    function l(f) {
      var c;
      return c = s.call(this, f) || this, c.type = n.COMBINATOR, c;
    }
    return l;
  }(r.default);
  e.default = u, t.exports = e.default;
});
var el = le((e, t) => {
  "use strict";
  e.__esModule = true, e.default = void 0;
  var r = i(pr()), n = ut();
  function i(s) {
    return s && s.__esModule ? s : { default: s };
  }
  function a(s, l) {
    s.prototype = Object.create(l.prototype), s.prototype.constructor = s, o(s, l);
  }
  function o(s, l) {
    return o = Object.setPrototypeOf || function(f, c) {
      return f.__proto__ = c, f;
    }, o(s, l);
  }
  var u = function(s) {
    a(l, s);
    function l(f) {
      var c;
      return c = s.call(this, f) || this, c.type = n.NESTING, c.value = "&", c;
    }
    return l;
  }(r.default);
  e.default = u, t.exports = e.default;
});
var qv = le((e, t) => {
  "use strict";
  e.__esModule = true, e.default = r;
  function r(n) {
    return n.sort(function(i, a) {
      return i - a;
    });
  }
  t.exports = e.default;
});
var tl = le((e) => {
  "use strict";
  e.__esModule = true, e.combinator = e.word = e.comment = e.str = e.tab = e.newline = e.feed = e.cr = e.backslash = e.bang = e.slash = e.doubleQuote = e.singleQuote = e.space = e.greaterThan = e.pipe = e.equals = e.plus = e.caret = e.tilde = e.dollar = e.closeSquare = e.openSquare = e.closeParenthesis = e.openParenthesis = e.semicolon = e.colon = e.comma = e.at = e.asterisk = e.ampersand = void 0;
  var t = 38;
  e.ampersand = t;
  var r = 42;
  e.asterisk = r;
  var n = 64;
  e.at = n;
  var i = 44;
  e.comma = i;
  var a = 58;
  e.colon = a;
  var o = 59;
  e.semicolon = o;
  var u = 40;
  e.openParenthesis = u;
  var s = 41;
  e.closeParenthesis = s;
  var l = 91;
  e.openSquare = l;
  var f = 93;
  e.closeSquare = f;
  var c = 36;
  e.dollar = c;
  var p = 126;
  e.tilde = p;
  var d = 94;
  e.caret = d;
  var D = 43;
  e.plus = D;
  var v = 61;
  e.equals = v;
  var g = 124;
  e.pipe = g;
  var y = 62;
  e.greaterThan = y;
  var b = 32;
  e.space = b;
  var C = 39;
  e.singleQuote = C;
  var k = 34;
  e.doubleQuote = k;
  var S = 47;
  e.slash = S;
  var E = 33;
  e.bang = E;
  var L = 92;
  e.backslash = L;
  var T = 13;
  e.cr = T;
  var U = 12;
  e.feed = U;
  var M = 10;
  e.newline = M;
  var H = 9;
  e.tab = H;
  var q = C;
  e.str = q;
  var ee = -1;
  e.comment = ee;
  var A = -2;
  e.word = A;
  var R = -3;
  e.combinator = R;
});
var Yv = le((e) => {
  "use strict";
  e.__esModule = true, e.default = D, e.FIELDS = void 0;
  var t = a(tl()), r, n;
  function i() {
    if (typeof WeakMap != "function")
      return null;
    var v = /* @__PURE__ */ new WeakMap();
    return i = function() {
      return v;
    }, v;
  }
  function a(v) {
    if (v && v.__esModule)
      return v;
    if (v === null || typeof v != "object" && typeof v != "function")
      return { default: v };
    var g = i();
    if (g && g.has(v))
      return g.get(v);
    var y = {}, b = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var C in v)
      if (Object.prototype.hasOwnProperty.call(v, C)) {
        var k = b ? Object.getOwnPropertyDescriptor(v, C) : null;
        k && (k.get || k.set) ? Object.defineProperty(y, C, k) : y[C] = v[C];
      }
    return y.default = v, g && g.set(v, y), y;
  }
  var o = (r = {}, r[t.tab] = true, r[t.newline] = true, r[t.cr] = true, r[t.feed] = true, r), u = (n = {}, n[t.space] = true, n[t.tab] = true, n[t.newline] = true, n[t.cr] = true, n[t.feed] = true, n[t.ampersand] = true, n[t.asterisk] = true, n[t.bang] = true, n[t.comma] = true, n[t.colon] = true, n[t.semicolon] = true, n[t.openParenthesis] = true, n[t.closeParenthesis] = true, n[t.openSquare] = true, n[t.closeSquare] = true, n[t.singleQuote] = true, n[t.doubleQuote] = true, n[t.plus] = true, n[t.pipe] = true, n[t.tilde] = true, n[t.greaterThan] = true, n[t.equals] = true, n[t.dollar] = true, n[t.caret] = true, n[t.slash] = true, n), s = {}, l = "0123456789abcdefABCDEF";
  for (f = 0; f < l.length; f++)
    s[l.charCodeAt(f)] = true;
  var f;
  function c(v, g) {
    var y = g, b;
    do {
      if (b = v.charCodeAt(y), u[b])
        return y - 1;
      b === t.backslash ? y = p(v, y) + 1 : y++;
    } while (y < v.length);
    return y - 1;
  }
  function p(v, g) {
    var y = g, b = v.charCodeAt(y + 1);
    if (!o[b])
      if (s[b]) {
        var C = 0;
        do
          y++, C++, b = v.charCodeAt(y + 1);
        while (s[b] && C < 6);
        C < 6 && b === t.space && y++;
      } else
        y++;
    return y;
  }
  var d = { TYPE: 0, START_LINE: 1, START_COL: 2, END_LINE: 3, END_COL: 4, START_POS: 5, END_POS: 6 };
  e.FIELDS = d;
  function D(v) {
    var g = [], y = v.css.valueOf(), b = y, C = b.length, k = -1, S = 1, E = 0, L = 0, T, U, M, H, q, ee, A, R, O, Y, Z, te, ie;
    function B(z, _) {
      if (v.safe)
        y += _, O = y.length - 1;
      else
        throw v.error("Unclosed " + z, S, E - k, E);
    }
    for (; E < C; ) {
      switch (T = y.charCodeAt(E), T === t.newline && (k = E, S += 1), T) {
        case t.space:
        case t.tab:
        case t.newline:
        case t.cr:
        case t.feed:
          O = E;
          do
            O += 1, T = y.charCodeAt(O), T === t.newline && (k = O, S += 1);
          while (T === t.space || T === t.newline || T === t.tab || T === t.cr || T === t.feed);
          ie = t.space, H = S, M = O - k - 1, L = O;
          break;
        case t.plus:
        case t.greaterThan:
        case t.tilde:
        case t.pipe:
          O = E;
          do
            O += 1, T = y.charCodeAt(O);
          while (T === t.plus || T === t.greaterThan || T === t.tilde || T === t.pipe);
          ie = t.combinator, H = S, M = E - k, L = O;
          break;
        case t.asterisk:
        case t.ampersand:
        case t.bang:
        case t.comma:
        case t.equals:
        case t.dollar:
        case t.caret:
        case t.openSquare:
        case t.closeSquare:
        case t.colon:
        case t.semicolon:
        case t.openParenthesis:
        case t.closeParenthesis:
          O = E, ie = T, H = S, M = E - k, L = O + 1;
          break;
        case t.singleQuote:
        case t.doubleQuote:
          te = T === t.singleQuote ? "'" : '"', O = E;
          do
            for (q = false, O = y.indexOf(te, O + 1), O === -1 && B("quote", te), ee = O; y.charCodeAt(ee - 1) === t.backslash; )
              ee -= 1, q = !q;
          while (q);
          ie = t.str, H = S, M = E - k, L = O + 1;
          break;
        default:
          T === t.slash && y.charCodeAt(E + 1) === t.asterisk ? (O = y.indexOf("*/", E + 2) + 1, O === 0 && B("comment", "*/"), U = y.slice(E, O + 1), R = U.split(`
`), A = R.length - 1, A > 0 ? (Y = S + A, Z = O - R[A].length) : (Y = S, Z = k), ie = t.comment, S = Y, H = Y, M = O - Z) : T === t.slash ? (O = E, ie = T, H = S, M = E - k, L = O + 1) : (O = c(y, E), ie = t.word, H = S, M = O - k), L = O + 1;
          break;
      }
      g.push([ie, S, E - k, H, M, E, L]), Z && (k = Z, Z = null), E = L;
    }
    return g;
  }
});
var Zv = le((e, t) => {
  "use strict";
  e.__esModule = true, e.default = void 0;
  var r = L(ju()), n = L(zu()), i = L(Vu()), a = L(Hu()), o = L(Xu()), u = L(qu()), s = L(Yu()), l = L(Zu()), f = E(Ju()), c = L(Ku()), p = L(Qu()), d = L(el()), D = L(qv()), v = E(Yv()), g = E(tl()), y = E(ut()), b = Jn(), C, k;
  function S() {
    if (typeof WeakMap != "function")
      return null;
    var B = /* @__PURE__ */ new WeakMap();
    return S = function() {
      return B;
    }, B;
  }
  function E(B) {
    if (B && B.__esModule)
      return B;
    if (B === null || typeof B != "object" && typeof B != "function")
      return { default: B };
    var z = S();
    if (z && z.has(B))
      return z.get(B);
    var _ = {}, N = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var ae in B)
      if (Object.prototype.hasOwnProperty.call(B, ae)) {
        var W = N ? Object.getOwnPropertyDescriptor(B, ae) : null;
        W && (W.get || W.set) ? Object.defineProperty(_, ae, W) : _[ae] = B[ae];
      }
    return _.default = B, z && z.set(B, _), _;
  }
  function L(B) {
    return B && B.__esModule ? B : { default: B };
  }
  function T(B, z) {
    for (var _ = 0; _ < z.length; _++) {
      var N = z[_];
      N.enumerable = N.enumerable || false, N.configurable = true, "value" in N && (N.writable = true), Object.defineProperty(B, N.key, N);
    }
  }
  function U(B, z, _) {
    return z && T(B.prototype, z), _ && T(B, _), B;
  }
  var M = (C = {}, C[g.space] = true, C[g.cr] = true, C[g.feed] = true, C[g.newline] = true, C[g.tab] = true, C), H = Object.assign({}, M, (k = {}, k[g.comment] = true, k));
  function q(B) {
    return { line: B[v.FIELDS.START_LINE], column: B[v.FIELDS.START_COL] };
  }
  function ee(B) {
    return { line: B[v.FIELDS.END_LINE], column: B[v.FIELDS.END_COL] };
  }
  function A(B, z, _, N) {
    return { start: { line: B, column: z }, end: { line: _, column: N } };
  }
  function R(B) {
    return A(B[v.FIELDS.START_LINE], B[v.FIELDS.START_COL], B[v.FIELDS.END_LINE], B[v.FIELDS.END_COL]);
  }
  function O(B, z) {
    if (B)
      return A(B[v.FIELDS.START_LINE], B[v.FIELDS.START_COL], z[v.FIELDS.END_LINE], z[v.FIELDS.END_COL]);
  }
  function Y(B, z) {
    var _ = B[z];
    if (typeof _ == "string")
      return _.indexOf("\\") !== -1 && ((0, b.ensureObject)(B, "raws"), B[z] = (0, b.unesc)(_), B.raws[z] === void 0 && (B.raws[z] = _)), B;
  }
  function Z(B, z) {
    for (var _ = -1, N = []; (_ = B.indexOf(z, _ + 1)) !== -1; )
      N.push(_);
    return N;
  }
  function te() {
    var B = Array.prototype.concat.apply([], arguments);
    return B.filter(function(z, _) {
      return _ === B.indexOf(z);
    });
  }
  var ie = function() {
    function B(_, N) {
      N === void 0 && (N = {}), this.rule = _, this.options = Object.assign({ lossy: false, safe: false }, N), this.position = 0, this.css = typeof this.rule == "string" ? this.rule : this.rule.selector, this.tokens = (0, v.default)({ css: this.css, error: this._errorGenerator(), safe: this.options.safe });
      var ae = O(this.tokens[0], this.tokens[this.tokens.length - 1]);
      this.root = new r.default({ source: ae }), this.root.errorGenerator = this._errorGenerator();
      var W = new n.default({ source: { start: { line: 1, column: 1 } } });
      this.root.append(W), this.current = W, this.loop();
    }
    var z = B.prototype;
    return z._errorGenerator = function() {
      var _ = this;
      return function(N, ae) {
        return typeof _.rule == "string" ? new Error(N) : _.rule.error(N, ae);
      };
    }, z.attribute = function() {
      var _ = [], N = this.currToken;
      for (this.position++; this.position < this.tokens.length && this.currToken[v.FIELDS.TYPE] !== g.closeSquare; )
        _.push(this.currToken), this.position++;
      if (this.currToken[v.FIELDS.TYPE] !== g.closeSquare)
        return this.expected("closing square bracket", this.currToken[v.FIELDS.START_POS]);
      var ae = _.length, W = { source: A(N[1], N[2], this.currToken[3], this.currToken[4]), sourceIndex: N[v.FIELDS.START_POS] };
      if (ae === 1 && !~[g.word].indexOf(_[0][v.FIELDS.TYPE]))
        return this.expected("attribute", _[0][v.FIELDS.START_POS]);
      for (var fe = 0, ce = "", ge = "", pe = null, xe = false; fe < ae; ) {
        var _e = _[fe], he = this.content(_e), ye = _[fe + 1];
        switch (_e[v.FIELDS.TYPE]) {
          case g.space:
            if (xe = true, this.options.lossy)
              break;
            if (pe) {
              (0, b.ensureObject)(W, "spaces", pe);
              var Ge = W.spaces[pe].after || "";
              W.spaces[pe].after = Ge + he;
              var tt = (0, b.getProp)(W, "raws", "spaces", pe, "after") || null;
              tt && (W.raws.spaces[pe].after = tt + he);
            } else
              ce = ce + he, ge = ge + he;
            break;
          case g.asterisk:
            if (ye[v.FIELDS.TYPE] === g.equals)
              W.operator = he, pe = "operator";
            else if ((!W.namespace || pe === "namespace" && !xe) && ye) {
              ce && ((0, b.ensureObject)(W, "spaces", "attribute"), W.spaces.attribute.before = ce, ce = ""), ge && ((0, b.ensureObject)(W, "raws", "spaces", "attribute"), W.raws.spaces.attribute.before = ce, ge = ""), W.namespace = (W.namespace || "") + he;
              var We = (0, b.getProp)(W, "raws", "namespace") || null;
              We && (W.raws.namespace += he), pe = "namespace";
            }
            xe = false;
            break;
          case g.dollar:
            if (pe === "value") {
              var Be = (0, b.getProp)(W, "raws", "value");
              W.value += "$", Be && (W.raws.value = Be + "$");
              break;
            }
          case g.caret:
            ye[v.FIELDS.TYPE] === g.equals && (W.operator = he, pe = "operator"), xe = false;
            break;
          case g.combinator:
            if (he === "~" && ye[v.FIELDS.TYPE] === g.equals && (W.operator = he, pe = "operator"), he !== "|") {
              xe = false;
              break;
            }
            ye[v.FIELDS.TYPE] === g.equals ? (W.operator = he, pe = "operator") : !W.namespace && !W.attribute && (W.namespace = true), xe = false;
            break;
          case g.word:
            if (ye && this.content(ye) === "|" && _[fe + 2] && _[fe + 2][v.FIELDS.TYPE] !== g.equals && !W.operator && !W.namespace)
              W.namespace = he, pe = "namespace";
            else if (!W.attribute || pe === "attribute" && !xe) {
              ce && ((0, b.ensureObject)(W, "spaces", "attribute"), W.spaces.attribute.before = ce, ce = ""), ge && ((0, b.ensureObject)(W, "raws", "spaces", "attribute"), W.raws.spaces.attribute.before = ge, ge = ""), W.attribute = (W.attribute || "") + he;
              var He = (0, b.getProp)(W, "raws", "attribute") || null;
              He && (W.raws.attribute += he), pe = "attribute";
            } else if (!W.value && W.value !== "" || pe === "value" && !xe) {
              var rt = (0, b.unesc)(he), nt = (0, b.getProp)(W, "raws", "value") || "", it = W.value || "";
              W.value = it + rt, W.quoteMark = null, (rt !== he || nt) && ((0, b.ensureObject)(W, "raws"), W.raws.value = (nt || it) + he), pe = "value";
            } else {
              var at = he === "i" || he === "I";
              (W.value || W.value === "") && (W.quoteMark || xe) ? (W.insensitive = at, (!at || he === "I") && ((0, b.ensureObject)(W, "raws"), W.raws.insensitiveFlag = he), pe = "insensitive", ce && ((0, b.ensureObject)(W, "spaces", "insensitive"), W.spaces.insensitive.before = ce, ce = ""), ge && ((0, b.ensureObject)(W, "raws", "spaces", "insensitive"), W.raws.spaces.insensitive.before = ge, ge = "")) : (W.value || W.value === "") && (pe = "value", W.value += he, W.raws.value && (W.raws.value += he));
            }
            xe = false;
            break;
          case g.str:
            if (!W.attribute || !W.operator)
              return this.error("Expected an attribute followed by an operator preceding the string.", { index: _e[v.FIELDS.START_POS] });
            var Xe = (0, f.unescapeValue)(he), Ct = Xe.unescaped, Dt = Xe.quoteMark;
            W.value = Ct, W.quoteMark = Dt, pe = "value", (0, b.ensureObject)(W, "raws"), W.raws.value = he, xe = false;
            break;
          case g.equals:
            if (!W.attribute)
              return this.expected("attribute", _e[v.FIELDS.START_POS], he);
            if (W.value)
              return this.error('Unexpected "=" found; an operator was already defined.', { index: _e[v.FIELDS.START_POS] });
            W.operator = W.operator ? W.operator + he : he, pe = "operator", xe = false;
            break;
          case g.comment:
            if (pe)
              if (xe || ye && ye[v.FIELDS.TYPE] === g.space || pe === "insensitive") {
                var ft = (0, b.getProp)(W, "spaces", pe, "after") || "", ct = (0, b.getProp)(W, "raws", "spaces", pe, "after") || ft;
                (0, b.ensureObject)(W, "raws", "spaces", pe), W.raws.spaces[pe].after = ct + he;
              } else {
                var zt = W[pe] || "", lt = (0, b.getProp)(W, "raws", pe) || zt;
                (0, b.ensureObject)(W, "raws"), W.raws[pe] = lt + he;
              }
            else
              ge = ge + he;
            break;
          default:
            return this.error('Unexpected "' + he + '" found.', { index: _e[v.FIELDS.START_POS] });
        }
        fe++;
      }
      Y(W, "attribute"), Y(W, "namespace"), this.newNode(new f.default(W)), this.position++;
    }, z.parseWhitespaceEquivalentTokens = function(_) {
      _ < 0 && (_ = this.tokens.length);
      var N = this.position, ae = [], W = "", fe = void 0;
      do
        if (M[this.currToken[v.FIELDS.TYPE]])
          this.options.lossy || (W += this.content());
        else if (this.currToken[v.FIELDS.TYPE] === g.comment) {
          var ce = {};
          W && (ce.before = W, W = ""), fe = new a.default({ value: this.content(), source: R(this.currToken), sourceIndex: this.currToken[v.FIELDS.START_POS], spaces: ce }), ae.push(fe);
        }
      while (++this.position < _);
      if (W) {
        if (fe)
          fe.spaces.after = W;
        else if (!this.options.lossy) {
          var ge = this.tokens[N], pe = this.tokens[this.position - 1];
          ae.push(new s.default({ value: "", source: A(ge[v.FIELDS.START_LINE], ge[v.FIELDS.START_COL], pe[v.FIELDS.END_LINE], pe[v.FIELDS.END_COL]), sourceIndex: ge[v.FIELDS.START_POS], spaces: { before: W, after: "" } }));
        }
      }
      return ae;
    }, z.convertWhitespaceNodesToSpace = function(_, N) {
      var ae = this;
      N === void 0 && (N = false);
      var W = "", fe = "";
      _.forEach(function(ge) {
        var pe = ae.lossySpace(ge.spaces.before, N), xe = ae.lossySpace(ge.rawSpaceBefore, N);
        W += pe + ae.lossySpace(ge.spaces.after, N && pe.length === 0), fe += pe + ge.value + ae.lossySpace(ge.rawSpaceAfter, N && xe.length === 0);
      }), fe === W && (fe = void 0);
      var ce = { space: W, rawSpace: fe };
      return ce;
    }, z.isNamedCombinator = function(_) {
      return _ === void 0 && (_ = this.position), this.tokens[_ + 0] && this.tokens[_ + 0][v.FIELDS.TYPE] === g.slash && this.tokens[_ + 1] && this.tokens[_ + 1][v.FIELDS.TYPE] === g.word && this.tokens[_ + 2] && this.tokens[_ + 2][v.FIELDS.TYPE] === g.slash;
    }, z.namedCombinator = function() {
      if (this.isNamedCombinator()) {
        var _ = this.content(this.tokens[this.position + 1]), N = (0, b.unesc)(_).toLowerCase(), ae = {};
        N !== _ && (ae.value = "/" + _ + "/");
        var W = new p.default({ value: "/" + N + "/", source: A(this.currToken[v.FIELDS.START_LINE], this.currToken[v.FIELDS.START_COL], this.tokens[this.position + 2][v.FIELDS.END_LINE], this.tokens[this.position + 2][v.FIELDS.END_COL]), sourceIndex: this.currToken[v.FIELDS.START_POS], raws: ae });
        return this.position = this.position + 3, W;
      } else
        this.unexpected();
    }, z.combinator = function() {
      var _ = this;
      if (this.content() === "|")
        return this.namespace();
      var N = this.locateNextMeaningfulToken(this.position);
      if (N < 0 || this.tokens[N][v.FIELDS.TYPE] === g.comma) {
        var ae = this.parseWhitespaceEquivalentTokens(N);
        if (ae.length > 0) {
          var W = this.current.last;
          if (W) {
            var fe = this.convertWhitespaceNodesToSpace(ae), ce = fe.space, ge = fe.rawSpace;
            ge !== void 0 && (W.rawSpaceAfter += ge), W.spaces.after += ce;
          } else
            ae.forEach(function(nt) {
              return _.newNode(nt);
            });
        }
        return;
      }
      var pe = this.currToken, xe = void 0;
      N > this.position && (xe = this.parseWhitespaceEquivalentTokens(N));
      var _e;
      if (this.isNamedCombinator() ? _e = this.namedCombinator() : this.currToken[v.FIELDS.TYPE] === g.combinator ? (_e = new p.default({ value: this.content(), source: R(this.currToken), sourceIndex: this.currToken[v.FIELDS.START_POS] }), this.position++) : M[this.currToken[v.FIELDS.TYPE]] || xe || this.unexpected(), _e) {
        if (xe) {
          var he = this.convertWhitespaceNodesToSpace(xe), ye = he.space, Ge = he.rawSpace;
          _e.spaces.before = ye, _e.rawSpaceBefore = Ge;
        }
      } else {
        var tt = this.convertWhitespaceNodesToSpace(xe, true), We = tt.space, Be = tt.rawSpace;
        Be || (Be = We);
        var He = {}, rt = { spaces: {} };
        We.endsWith(" ") && Be.endsWith(" ") ? (He.before = We.slice(0, We.length - 1), rt.spaces.before = Be.slice(0, Be.length - 1)) : We.startsWith(" ") && Be.startsWith(" ") ? (He.after = We.slice(1), rt.spaces.after = Be.slice(1)) : rt.value = Be, _e = new p.default({ value: " ", source: O(pe, this.tokens[this.position - 1]), sourceIndex: pe[v.FIELDS.START_POS], spaces: He, raws: rt });
      }
      return this.currToken && this.currToken[v.FIELDS.TYPE] === g.space && (_e.spaces.after = this.optionalSpace(this.content()), this.position++), this.newNode(_e);
    }, z.comma = function() {
      if (this.position === this.tokens.length - 1) {
        this.root.trailingComma = true, this.position++;
        return;
      }
      this.current._inferEndPosition();
      var _ = new n.default({ source: { start: q(this.tokens[this.position + 1]) } });
      this.current.parent.append(_), this.current = _, this.position++;
    }, z.comment = function() {
      var _ = this.currToken;
      this.newNode(new a.default({ value: this.content(), source: R(_), sourceIndex: _[v.FIELDS.START_POS] })), this.position++;
    }, z.error = function(_, N) {
      throw this.root.error(_, N);
    }, z.missingBackslash = function() {
      return this.error("Expected a backslash preceding the semicolon.", { index: this.currToken[v.FIELDS.START_POS] });
    }, z.missingParenthesis = function() {
      return this.expected("opening parenthesis", this.currToken[v.FIELDS.START_POS]);
    }, z.missingSquareBracket = function() {
      return this.expected("opening square bracket", this.currToken[v.FIELDS.START_POS]);
    }, z.unexpected = function() {
      return this.error("Unexpected '" + this.content() + "'. Escaping special characters with \\ may help.", this.currToken[v.FIELDS.START_POS]);
    }, z.namespace = function() {
      var _ = this.prevToken && this.content(this.prevToken) || true;
      if (this.nextToken[v.FIELDS.TYPE] === g.word)
        return this.position++, this.word(_);
      if (this.nextToken[v.FIELDS.TYPE] === g.asterisk)
        return this.position++, this.universal(_);
    }, z.nesting = function() {
      if (this.nextToken) {
        var _ = this.content(this.nextToken);
        if (_ === "|") {
          this.position++;
          return;
        }
      }
      var N = this.currToken;
      this.newNode(new d.default({ value: this.content(), source: R(N), sourceIndex: N[v.FIELDS.START_POS] })), this.position++;
    }, z.parentheses = function() {
      var _ = this.current.last, N = 1;
      if (this.position++, _ && _.type === y.PSEUDO) {
        var ae = new n.default({ source: { start: q(this.tokens[this.position - 1]) } }), W = this.current;
        for (_.append(ae), this.current = ae; this.position < this.tokens.length && N; )
          this.currToken[v.FIELDS.TYPE] === g.openParenthesis && N++, this.currToken[v.FIELDS.TYPE] === g.closeParenthesis && N--, N ? this.parse() : (this.current.source.end = ee(this.currToken), this.current.parent.source.end = ee(this.currToken), this.position++);
        this.current = W;
      } else {
        for (var fe = this.currToken, ce = "(", ge; this.position < this.tokens.length && N; )
          this.currToken[v.FIELDS.TYPE] === g.openParenthesis && N++, this.currToken[v.FIELDS.TYPE] === g.closeParenthesis && N--, ge = this.currToken, ce += this.parseParenthesisToken(this.currToken), this.position++;
        _ ? _.appendToPropertyAndEscape("value", ce, ce) : this.newNode(new s.default({ value: ce, source: A(fe[v.FIELDS.START_LINE], fe[v.FIELDS.START_COL], ge[v.FIELDS.END_LINE], ge[v.FIELDS.END_COL]), sourceIndex: fe[v.FIELDS.START_POS] }));
      }
      if (N)
        return this.expected("closing parenthesis", this.currToken[v.FIELDS.START_POS]);
    }, z.pseudo = function() {
      for (var _ = this, N = "", ae = this.currToken; this.currToken && this.currToken[v.FIELDS.TYPE] === g.colon; )
        N += this.content(), this.position++;
      if (!this.currToken)
        return this.expected(["pseudo-class", "pseudo-element"], this.position - 1);
      if (this.currToken[v.FIELDS.TYPE] === g.word)
        this.splitWord(false, function(W, fe) {
          N += W, _.newNode(new l.default({ value: N, source: O(ae, _.currToken), sourceIndex: ae[v.FIELDS.START_POS] })), fe > 1 && _.nextToken && _.nextToken[v.FIELDS.TYPE] === g.openParenthesis && _.error("Misplaced parenthesis.", { index: _.nextToken[v.FIELDS.START_POS] });
        });
      else
        return this.expected(["pseudo-class", "pseudo-element"], this.currToken[v.FIELDS.START_POS]);
    }, z.space = function() {
      var _ = this.content();
      this.position === 0 || this.prevToken[v.FIELDS.TYPE] === g.comma || this.prevToken[v.FIELDS.TYPE] === g.openParenthesis || this.current.nodes.every(function(N) {
        return N.type === "comment";
      }) ? (this.spaces = this.optionalSpace(_), this.position++) : this.position === this.tokens.length - 1 || this.nextToken[v.FIELDS.TYPE] === g.comma || this.nextToken[v.FIELDS.TYPE] === g.closeParenthesis ? (this.current.last.spaces.after = this.optionalSpace(_), this.position++) : this.combinator();
    }, z.string = function() {
      var _ = this.currToken;
      this.newNode(new s.default({ value: this.content(), source: R(_), sourceIndex: _[v.FIELDS.START_POS] })), this.position++;
    }, z.universal = function(_) {
      var N = this.nextToken;
      if (N && this.content(N) === "|")
        return this.position++, this.namespace();
      var ae = this.currToken;
      this.newNode(new c.default({ value: this.content(), source: R(ae), sourceIndex: ae[v.FIELDS.START_POS] }), _), this.position++;
    }, z.splitWord = function(_, N) {
      for (var ae = this, W = this.nextToken, fe = this.content(); W && ~[g.dollar, g.caret, g.equals, g.word].indexOf(W[v.FIELDS.TYPE]); ) {
        this.position++;
        var ce = this.content();
        if (fe += ce, ce.lastIndexOf("\\") === ce.length - 1) {
          var ge = this.nextToken;
          ge && ge[v.FIELDS.TYPE] === g.space && (fe += this.requiredSpace(this.content(ge)), this.position++);
        }
        W = this.nextToken;
      }
      var pe = Z(fe, ".").filter(function(ye) {
        var Ge = fe[ye - 1] === "\\", tt = /^\d+\.\d+%$/.test(fe);
        return !Ge && !tt;
      }), xe = Z(fe, "#").filter(function(ye) {
        return fe[ye - 1] !== "\\";
      }), _e = Z(fe, "#{");
      _e.length && (xe = xe.filter(function(ye) {
        return !~_e.indexOf(ye);
      }));
      var he = (0, D.default)(te([0].concat(pe, xe)));
      he.forEach(function(ye, Ge) {
        var tt = he[Ge + 1] || fe.length, We = fe.slice(ye, tt);
        if (Ge === 0 && N)
          return N.call(ae, We, he.length);
        var Be, He = ae.currToken, rt = He[v.FIELDS.START_POS] + he[Ge], nt = A(He[1], He[2] + ye, He[3], He[2] + (tt - 1));
        if (~pe.indexOf(ye)) {
          var it = { value: We.slice(1), source: nt, sourceIndex: rt };
          Be = new i.default(Y(it, "value"));
        } else if (~xe.indexOf(ye)) {
          var at = { value: We.slice(1), source: nt, sourceIndex: rt };
          Be = new o.default(Y(at, "value"));
        } else {
          var Xe = { value: We, source: nt, sourceIndex: rt };
          Y(Xe, "value"), Be = new u.default(Xe);
        }
        ae.newNode(Be, _), _ = null;
      }), this.position++;
    }, z.word = function(_) {
      var N = this.nextToken;
      return N && this.content(N) === "|" ? (this.position++, this.namespace()) : this.splitWord(_);
    }, z.loop = function() {
      for (; this.position < this.tokens.length; )
        this.parse(true);
      return this.current._inferEndPosition(), this.root;
    }, z.parse = function(_) {
      switch (this.currToken[v.FIELDS.TYPE]) {
        case g.space:
          this.space();
          break;
        case g.comment:
          this.comment();
          break;
        case g.openParenthesis:
          this.parentheses();
          break;
        case g.closeParenthesis:
          _ && this.missingParenthesis();
          break;
        case g.openSquare:
          this.attribute();
          break;
        case g.dollar:
        case g.caret:
        case g.equals:
        case g.word:
          this.word();
          break;
        case g.colon:
          this.pseudo();
          break;
        case g.comma:
          this.comma();
          break;
        case g.asterisk:
          this.universal();
          break;
        case g.ampersand:
          this.nesting();
          break;
        case g.slash:
        case g.combinator:
          this.combinator();
          break;
        case g.str:
          this.string();
          break;
        case g.closeSquare:
          this.missingSquareBracket();
        case g.semicolon:
          this.missingBackslash();
        default:
          this.unexpected();
      }
    }, z.expected = function(_, N, ae) {
      if (Array.isArray(_)) {
        var W = _.pop();
        _ = _.join(", ") + " or " + W;
      }
      var fe = /^[aeiou]/.test(_[0]) ? "an" : "a";
      return ae ? this.error("Expected " + fe + " " + _ + ', found "' + ae + '" instead.', { index: N }) : this.error("Expected " + fe + " " + _ + ".", { index: N });
    }, z.requiredSpace = function(_) {
      return this.options.lossy ? " " : _;
    }, z.optionalSpace = function(_) {
      return this.options.lossy ? "" : _;
    }, z.lossySpace = function(_, N) {
      return this.options.lossy ? N ? " " : "" : _;
    }, z.parseParenthesisToken = function(_) {
      var N = this.content(_);
      return _[v.FIELDS.TYPE] === g.space ? this.requiredSpace(N) : N;
    }, z.newNode = function(_, N) {
      return N && (/^ +$/.test(N) && (this.options.lossy || (this.spaces = (this.spaces || "") + N), N = true), _.namespace = N, Y(_, "namespace")), this.spaces && (_.spaces.before = this.spaces, this.spaces = ""), this.current.append(_);
    }, z.content = function(_) {
      return _ === void 0 && (_ = this.currToken), this.css.slice(_[v.FIELDS.START_POS], _[v.FIELDS.END_POS]);
    }, z.locateNextMeaningfulToken = function(_) {
      _ === void 0 && (_ = this.position + 1);
      for (var N = _; N < this.tokens.length; )
        if (H[this.tokens[N][v.FIELDS.TYPE]]) {
          N++;
          continue;
        } else
          return N;
      return -1;
    }, U(B, [{ key: "currToken", get: function() {
      return this.tokens[this.position];
    } }, { key: "nextToken", get: function() {
      return this.tokens[this.position + 1];
    } }, { key: "prevToken", get: function() {
      return this.tokens[this.position - 1];
    } }]), B;
  }();
  e.default = ie, t.exports = e.default;
});
var Jv = le((e, t) => {
  "use strict";
  e.__esModule = true, e.default = void 0;
  var r = n(Zv());
  function n(a) {
    return a && a.__esModule ? a : { default: a };
  }
  var i = function() {
    function a(u, s) {
      this.func = u || function() {
      }, this.funcRes = null, this.options = s;
    }
    var o = a.prototype;
    return o._shouldUpdateSelector = function(u, s) {
      s === void 0 && (s = {});
      var l = Object.assign({}, this.options, s);
      return l.updateSelector === false ? false : typeof u != "string";
    }, o._isLossy = function(u) {
      u === void 0 && (u = {});
      var s = Object.assign({}, this.options, u);
      return s.lossless === false;
    }, o._root = function(u, s) {
      s === void 0 && (s = {});
      var l = new r.default(u, this._parseOptions(s));
      return l.root;
    }, o._parseOptions = function(u) {
      return { lossy: this._isLossy(u) };
    }, o._run = function(u, s) {
      var l = this;
      return s === void 0 && (s = {}), new Promise(function(f, c) {
        try {
          var p = l._root(u, s);
          Promise.resolve(l.func(p)).then(function(d) {
            var D = void 0;
            return l._shouldUpdateSelector(u, s) && (D = p.toString(), u.selector = D), { transform: d, root: p, string: D };
          }).then(f, c);
        } catch (d) {
          c(d);
          return;
        }
      });
    }, o._runSync = function(u, s) {
      s === void 0 && (s = {});
      var l = this._root(u, s), f = this.func(l);
      if (f && typeof f.then == "function")
        throw new Error("Selector processor returned a promise to a synchronous call.");
      var c = void 0;
      return s.updateSelector && typeof u != "string" && (c = l.toString(), u.selector = c), { transform: f, root: l, string: c };
    }, o.ast = function(u, s) {
      return this._run(u, s).then(function(l) {
        return l.root;
      });
    }, o.astSync = function(u, s) {
      return this._runSync(u, s).root;
    }, o.transform = function(u, s) {
      return this._run(u, s).then(function(l) {
        return l.transform;
      });
    }, o.transformSync = function(u, s) {
      return this._runSync(u, s).transform;
    }, o.process = function(u, s) {
      return this._run(u, s).then(function(l) {
        return l.string || l.root.toString();
      });
    }, o.processSync = function(u, s) {
      var l = this._runSync(u, s);
      return l.string || l.root.toString();
    }, a;
  }();
  e.default = i, t.exports = e.default;
});
var Kv = le((e) => {
  "use strict";
  e.__esModule = true, e.universal = e.tag = e.string = e.selector = e.root = e.pseudo = e.nesting = e.id = e.comment = e.combinator = e.className = e.attribute = void 0;
  var t = d(Ju()), r = d(Vu()), n = d(Qu()), i = d(Hu()), a = d(Xu()), o = d(el()), u = d(Zu()), s = d(ju()), l = d(zu()), f = d(Yu()), c = d(qu()), p = d(Ku());
  function d(M) {
    return M && M.__esModule ? M : { default: M };
  }
  var D = function(M) {
    return new t.default(M);
  };
  e.attribute = D;
  var v = function(M) {
    return new r.default(M);
  };
  e.className = v;
  var g = function(M) {
    return new n.default(M);
  };
  e.combinator = g;
  var y = function(M) {
    return new i.default(M);
  };
  e.comment = y;
  var b = function(M) {
    return new a.default(M);
  };
  e.id = b;
  var C = function(M) {
    return new o.default(M);
  };
  e.nesting = C;
  var k = function(M) {
    return new u.default(M);
  };
  e.pseudo = k;
  var S = function(M) {
    return new s.default(M);
  };
  e.root = S;
  var E = function(M) {
    return new l.default(M);
  };
  e.selector = E;
  var L = function(M) {
    return new f.default(M);
  };
  e.string = L;
  var T = function(M) {
    return new c.default(M);
  };
  e.tag = T;
  var U = function(M) {
    return new p.default(M);
  };
  e.universal = U;
});
var Qv = le((e) => {
  "use strict";
  e.__esModule = true, e.isNode = i, e.isPseudoElement = b, e.isPseudoClass = C, e.isContainer = k, e.isNamespace = S, e.isUniversal = e.isTag = e.isString = e.isSelector = e.isRoot = e.isPseudo = e.isNesting = e.isIdentifier = e.isComment = e.isCombinator = e.isClassName = e.isAttribute = void 0;
  var t = ut(), r, n = (r = {}, r[t.ATTRIBUTE] = true, r[t.CLASS] = true, r[t.COMBINATOR] = true, r[t.COMMENT] = true, r[t.ID] = true, r[t.NESTING] = true, r[t.PSEUDO] = true, r[t.ROOT] = true, r[t.SELECTOR] = true, r[t.STRING] = true, r[t.TAG] = true, r[t.UNIVERSAL] = true, r);
  function i(E) {
    return typeof E == "object" && n[E.type];
  }
  function a(E, L) {
    return i(L) && L.type === E;
  }
  var o = a.bind(null, t.ATTRIBUTE);
  e.isAttribute = o;
  var u = a.bind(null, t.CLASS);
  e.isClassName = u;
  var s = a.bind(null, t.COMBINATOR);
  e.isCombinator = s;
  var l = a.bind(null, t.COMMENT);
  e.isComment = l;
  var f = a.bind(null, t.ID);
  e.isIdentifier = f;
  var c = a.bind(null, t.NESTING);
  e.isNesting = c;
  var p = a.bind(null, t.PSEUDO);
  e.isPseudo = p;
  var d = a.bind(null, t.ROOT);
  e.isRoot = d;
  var D = a.bind(null, t.SELECTOR);
  e.isSelector = D;
  var v = a.bind(null, t.STRING);
  e.isString = v;
  var g = a.bind(null, t.TAG);
  e.isTag = g;
  var y = a.bind(null, t.UNIVERSAL);
  e.isUniversal = y;
  function b(E) {
    return p(E) && E.value && (E.value.startsWith("::") || E.value.toLowerCase() === ":before" || E.value.toLowerCase() === ":after" || E.value.toLowerCase() === ":first-letter" || E.value.toLowerCase() === ":first-line");
  }
  function C(E) {
    return p(E) && !b(E);
  }
  function k(E) {
    return !!(i(E) && E.walk);
  }
  function S(E) {
    return o(E) || g(E);
  }
});
var eg = le((e) => {
  "use strict";
  e.__esModule = true;
  var t = ut();
  Object.keys(t).forEach(function(i) {
    i === "default" || i === "__esModule" || i in e && e[i] === t[i] || (e[i] = t[i]);
  });
  var r = Kv();
  Object.keys(r).forEach(function(i) {
    i === "default" || i === "__esModule" || i in e && e[i] === r[i] || (e[i] = r[i]);
  });
  var n = Qv();
  Object.keys(n).forEach(function(i) {
    i === "default" || i === "__esModule" || i in e && e[i] === n[i] || (e[i] = n[i]);
  });
});
var tg = le((e, t) => {
  "use strict";
  e.__esModule = true, e.default = void 0;
  var r = o(Jv()), n = a(eg());
  function i() {
    if (typeof WeakMap != "function")
      return null;
    var l = /* @__PURE__ */ new WeakMap();
    return i = function() {
      return l;
    }, l;
  }
  function a(l) {
    if (l && l.__esModule)
      return l;
    if (l === null || typeof l != "object" && typeof l != "function")
      return { default: l };
    var f = i();
    if (f && f.has(l))
      return f.get(l);
    var c = {}, p = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var d in l)
      if (Object.prototype.hasOwnProperty.call(l, d)) {
        var D = p ? Object.getOwnPropertyDescriptor(l, d) : null;
        D && (D.get || D.set) ? Object.defineProperty(c, d, D) : c[d] = l[d];
      }
    return c.default = l, f && f.set(l, c), c;
  }
  function o(l) {
    return l && l.__esModule ? l : { default: l };
  }
  var u = function(l) {
    return new r.default(l);
  };
  Object.assign(u, n), delete u.__esModule;
  var s = u;
  e.default = s, t.exports = e.default;
});
var rg = le((e) => {
  "use strict";
  Object.defineProperty(e, "__esModule", { value: true }), Object.defineProperty(e, "default", { enumerable: true, get: () => t });
  function t(r) {
    return r.replace(/\\,/g, "\\2c ");
  }
});
var ng = le((e, t) => {
  "use strict";
  t.exports = { aliceblue: [240, 248, 255], antiquewhite: [250, 235, 215], aqua: [0, 255, 255], aquamarine: [127, 255, 212], azure: [240, 255, 255], beige: [245, 245, 220], bisque: [255, 228, 196], black: [0, 0, 0], blanchedalmond: [255, 235, 205], blue: [0, 0, 255], blueviolet: [138, 43, 226], brown: [165, 42, 42], burlywood: [222, 184, 135], cadetblue: [95, 158, 160], chartreuse: [127, 255, 0], chocolate: [210, 105, 30], coral: [255, 127, 80], cornflowerblue: [100, 149, 237], cornsilk: [255, 248, 220], crimson: [220, 20, 60], cyan: [0, 255, 255], darkblue: [0, 0, 139], darkcyan: [0, 139, 139], darkgoldenrod: [184, 134, 11], darkgray: [169, 169, 169], darkgreen: [0, 100, 0], darkgrey: [169, 169, 169], darkkhaki: [189, 183, 107], darkmagenta: [139, 0, 139], darkolivegreen: [85, 107, 47], darkorange: [255, 140, 0], darkorchid: [153, 50, 204], darkred: [139, 0, 0], darksalmon: [233, 150, 122], darkseagreen: [143, 188, 143], darkslateblue: [72, 61, 139], darkslategray: [47, 79, 79], darkslategrey: [47, 79, 79], darkturquoise: [0, 206, 209], darkviolet: [148, 0, 211], deeppink: [255, 20, 147], deepskyblue: [0, 191, 255], dimgray: [105, 105, 105], dimgrey: [105, 105, 105], dodgerblue: [30, 144, 255], firebrick: [178, 34, 34], floralwhite: [255, 250, 240], forestgreen: [34, 139, 34], fuchsia: [255, 0, 255], gainsboro: [220, 220, 220], ghostwhite: [248, 248, 255], gold: [255, 215, 0], goldenrod: [218, 165, 32], gray: [128, 128, 128], green: [0, 128, 0], greenyellow: [173, 255, 47], grey: [128, 128, 128], honeydew: [240, 255, 240], hotpink: [255, 105, 180], indianred: [205, 92, 92], indigo: [75, 0, 130], ivory: [255, 255, 240], khaki: [240, 230, 140], lavender: [230, 230, 250], lavenderblush: [255, 240, 245], lawngreen: [124, 252, 0], lemonchiffon: [255, 250, 205], lightblue: [173, 216, 230], lightcoral: [240, 128, 128], lightcyan: [224, 255, 255], lightgoldenrodyellow: [250, 250, 210], lightgray: [211, 211, 211], lightgreen: [144, 238, 144], lightgrey: [211, 211, 211], lightpink: [255, 182, 193], lightsalmon: [255, 160, 122], lightseagreen: [32, 178, 170], lightskyblue: [135, 206, 250], lightslategray: [119, 136, 153], lightslategrey: [119, 136, 153], lightsteelblue: [176, 196, 222], lightyellow: [255, 255, 224], lime: [0, 255, 0], limegreen: [50, 205, 50], linen: [250, 240, 230], magenta: [255, 0, 255], maroon: [128, 0, 0], mediumaquamarine: [102, 205, 170], mediumblue: [0, 0, 205], mediumorchid: [186, 85, 211], mediumpurple: [147, 112, 219], mediumseagreen: [60, 179, 113], mediumslateblue: [123, 104, 238], mediumspringgreen: [0, 250, 154], mediumturquoise: [72, 209, 204], mediumvioletred: [199, 21, 133], midnightblue: [25, 25, 112], mintcream: [245, 255, 250], mistyrose: [255, 228, 225], moccasin: [255, 228, 181], navajowhite: [255, 222, 173], navy: [0, 0, 128], oldlace: [253, 245, 230], olive: [128, 128, 0], olivedrab: [107, 142, 35], orange: [255, 165, 0], orangered: [255, 69, 0], orchid: [218, 112, 214], palegoldenrod: [238, 232, 170], palegreen: [152, 251, 152], paleturquoise: [175, 238, 238], palevioletred: [219, 112, 147], papayawhip: [255, 239, 213], peachpuff: [255, 218, 185], peru: [205, 133, 63], pink: [255, 192, 203], plum: [221, 160, 221], powderblue: [176, 224, 230], purple: [128, 0, 128], rebeccapurple: [102, 51, 153], red: [255, 0, 0], rosybrown: [188, 143, 143], royalblue: [65, 105, 225], saddlebrown: [139, 69, 19], salmon: [250, 128, 114], sandybrown: [244, 164, 96], seagreen: [46, 139, 87], seashell: [255, 245, 238], sienna: [160, 82, 45], silver: [192, 192, 192], skyblue: [135, 206, 235], slateblue: [106, 90, 205], slategray: [112, 128, 144], slategrey: [112, 128, 144], snow: [255, 250, 250], springgreen: [0, 255, 127], steelblue: [70, 130, 180], tan: [210, 180, 140], teal: [0, 128, 128], thistle: [216, 191, 216], tomato: [255, 99, 71], turquoise: [64, 224, 208], violet: [238, 130, 238], wheat: [245, 222, 179], white: [255, 255, 255], whitesmoke: [245, 245, 245], yellow: [255, 255, 0], yellowgreen: [154, 205, 50] };
});
var rl = le((e) => {
  "use strict";
  Object.defineProperty(e, "__esModule", { value: true });
  function t(D, v) {
    for (var g in v)
      Object.defineProperty(D, g, { enumerable: true, get: v[g] });
  }
  t(e, { parseColor: () => p, formatColor: () => d });
  var r = n(ng());
  function n(D) {
    return D && D.__esModule ? D : { default: D };
  }
  var i = /^#([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})?$/i, a = /^#([a-f\d])([a-f\d])([a-f\d])([a-f\d])?$/i, o = /(?:\d+|\d*\.\d+)%?/, u = /(?:\s*,\s*|\s+)/, s = /\s*[,/]\s*/, l = /var\(--(?:[^ )]*?)\)/, f = new RegExp(`^(rgb)a?\\(\\s*(${o.source}|${l.source})(?:${u.source}(${o.source}|${l.source}))?(?:${u.source}(${o.source}|${l.source}))?(?:${s.source}(${o.source}|${l.source}))?\\s*\\)$`), c = new RegExp(`^(hsl)a?\\(\\s*((?:${o.source})(?:deg|rad|grad|turn)?|${l.source})(?:${u.source}(${o.source}|${l.source}))?(?:${u.source}(${o.source}|${l.source}))?(?:${s.source}(${o.source}|${l.source}))?\\s*\\)$`);
  function p(D, { loose: v = false } = {}) {
    var g, y;
    if (typeof D != "string")
      return null;
    if (D = D.trim(), D === "transparent")
      return { mode: "rgb", color: ["0", "0", "0"], alpha: "0" };
    if (D in r.default)
      return { mode: "rgb", color: r.default[D].map((E) => E.toString()) };
    let b = D.replace(a, (E, L, T, U, M) => ["#", L, L, T, T, U, U, M ? M + M : ""].join("")).match(i);
    if (b !== null)
      return { mode: "rgb", color: [parseInt(b[1], 16), parseInt(b[2], 16), parseInt(b[3], 16)].map((E) => E.toString()), alpha: b[4] ? (parseInt(b[4], 16) / 255).toString() : void 0 };
    var C;
    let k = (C = D.match(f)) !== null && C !== void 0 ? C : D.match(c);
    if (k === null)
      return null;
    let S = [k[2], k[3], k[4]].filter(Boolean).map((E) => E.toString());
    return !v && S.length !== 3 || S.length < 3 && !S.some((E) => /^var\(.*?\)$/.test(E)) ? null : { mode: k[1], color: S, alpha: (g = k[5]) === null || g === void 0 || (y = g.toString) === null || y === void 0 ? void 0 : y.call(g) };
  }
  function d({ mode: D, color: v, alpha: g }) {
    let y = g !== void 0;
    return `${D}(${v.join(" ")}${y ? ` / ${g}` : ""})`;
  }
});
var nl = le((e) => {
  "use strict";
  Object.defineProperty(e, "__esModule", { value: true });
  function t(a, o) {
    for (var u in o)
      Object.defineProperty(a, u, { enumerable: true, get: o[u] });
  }
  t(e, { withAlphaValue: () => n, default: () => i });
  var r = rl();
  function n(a, o, u) {
    if (typeof a == "function")
      return a({ opacityValue: o });
    let s = (0, r.parseColor)(a, { loose: true });
    return s === null ? u : (0, r.formatColor)({ ...s, alpha: o });
  }
  function i({ color: a, property: o, variable: u }) {
    let s = [].concat(o);
    if (typeof a == "function")
      return { [u]: "1", ...Object.fromEntries(s.map((f) => [f, a({ opacityVariable: u, opacityValue: `var(${u})` })])) };
    let l = (0, r.parseColor)(a);
    return l === null ? Object.fromEntries(s.map((f) => [f, a])) : l.alpha !== void 0 ? Object.fromEntries(s.map((f) => [f, a])) : { [u]: "1", ...Object.fromEntries(s.map((f) => [f, (0, r.formatColor)({ ...l, alpha: `var(${u})` })])) };
  }
});
var ig = le((e) => {
  "use strict";
  Object.defineProperty(e, "__esModule", { value: true });
  function t(p, d) {
    for (var D in d)
      Object.defineProperty(p, D, { enumerable: true, get: d[D] });
  }
  t(e, { pattern: () => a, withoutCapturing: () => o, any: () => u, optional: () => s, zeroOrMore: () => l, nestedBrackets: () => f, escape: () => c });
  var r = /[\\^$.*+?()[\]{}|]/g, n = RegExp(r.source);
  function i(p) {
    return p = Array.isArray(p) ? p : [p], p = p.map((d) => d instanceof RegExp ? d.source : d), p.join("");
  }
  function a(p) {
    return new RegExp(i(p), "g");
  }
  function o(p) {
    return new RegExp(`(?:${i(p)})`, "g");
  }
  function u(p) {
    return `(?:${p.map(i).join("|")})`;
  }
  function s(p) {
    return `(?:${i(p)})?`;
  }
  function l(p) {
    return `(?:${i(p)})*`;
  }
  function f(p, d, D = 1) {
    return o([c(p), /[^\s]*/, D === 1 ? `[^${c(p)}${c(d)}s]*` : u([`[^${c(p)}${c(d)}s]*`, f(p, d, D - 1)]), /[^\s]*/, c(d)]);
  }
  function c(p) {
    return p && n.test(p) ? p.replace(r, "\\$&") : p || "";
  }
});
var ag = le((e) => {
  "use strict";
  Object.defineProperty(e, "__esModule", { value: true }), Object.defineProperty(e, "splitAtTopLevelOnly", { enumerable: true, get: () => i });
  var t = n(ig());
  function r(a) {
    if (typeof WeakMap != "function")
      return null;
    var o = /* @__PURE__ */ new WeakMap(), u = /* @__PURE__ */ new WeakMap();
    return (r = function(s) {
      return s ? u : o;
    })(a);
  }
  function n(a, o) {
    if (!o && a && a.__esModule)
      return a;
    if (a === null || typeof a != "object" && typeof a != "function")
      return { default: a };
    var u = r(o);
    if (u && u.has(a))
      return u.get(a);
    var s = {}, l = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var f in a)
      if (f !== "default" && Object.prototype.hasOwnProperty.call(a, f)) {
        var c = l ? Object.getOwnPropertyDescriptor(a, f) : null;
        c && (c.get || c.set) ? Object.defineProperty(s, f, c) : s[f] = a[f];
      }
    return s.default = a, u && u.set(a, s), s;
  }
  function* i(a, o) {
    let u = new RegExp(`[(){}\\[\\]${t.escape(o)}]`, "g"), s = 0, l = 0, f = false, c = 0, p = 0, d = o.length;
    for (let D of a.matchAll(u)) {
      let v = D[0] === o[c], g = c === d - 1, y = v && g;
      D[0] === "(" && s++, D[0] === ")" && s--, D[0] === "[" && s++, D[0] === "]" && s--, D[0] === "{" && s++, D[0] === "}" && s--, v && s === 0 && (p === 0 && (p = D.index), c++), y && s === 0 && (f = true, yield a.substring(l, p), l = p + d), c === d && (c = 0, p = 0);
    }
    f ? yield a.substring(l) : yield a;
  }
});
var og = le((e) => {
  "use strict";
  Object.defineProperty(e, "__esModule", { value: true });
  function t(s, l) {
    for (var f in l)
      Object.defineProperty(s, f, { enumerable: true, get: l[f] });
  }
  t(e, { parseBoxShadowValue: () => o, formatBoxShadowValue: () => u });
  var r = ag(), n = /* @__PURE__ */ new Set(["inset", "inherit", "initial", "revert", "unset"]), i = /\ +(?![^(]*\))/g, a = /^-?(\d+|\.\d+)(.*?)$/g;
  function o(s) {
    return Array.from((0, r.splitAtTopLevelOnly)(s, ",")).map((l) => {
      let f = l.trim(), c = { raw: f }, p = f.split(i), d = /* @__PURE__ */ new Set();
      for (let D of p)
        a.lastIndex = 0, !d.has("KEYWORD") && n.has(D) ? (c.keyword = D, d.add("KEYWORD")) : a.test(D) ? d.has("X") ? d.has("Y") ? d.has("BLUR") ? d.has("SPREAD") || (c.spread = D, d.add("SPREAD")) : (c.blur = D, d.add("BLUR")) : (c.y = D, d.add("Y")) : (c.x = D, d.add("X")) : c.color ? (c.unknown || (c.unknown = []), c.unknown.push(D)) : c.color = D;
      return c.valid = c.x !== void 0 && c.y !== void 0, c;
    });
  }
  function u(s) {
    return s.map((l) => l.valid ? [l.keyword, l.x, l.y, l.blur, l.spread, l.color].filter(Boolean).join(" ") : l.raw).join(", ");
  }
});
var sg = le((e) => {
  "use strict";
  Object.defineProperty(e, "__esModule", { value: true });
  function t(A, R) {
    for (var O in R)
      Object.defineProperty(A, O, { enumerable: true, get: R[O] });
  }
  t(e, { normalize: () => u, url: () => s, number: () => l, percentage: () => f, length: () => d, lineWidth: () => v, shadow: () => g, color: () => y, image: () => b, gradient: () => k, position: () => E, familyName: () => L, genericName: () => U, absoluteSize: () => H, relativeSize: () => ee });
  var r = rl(), n = og(), i = ["min", "max", "clamp", "calc"], a = /,(?![^(]*\))/g, o = /_(?![^(]*\))/g;
  function u(A, R = true) {
    return A.includes("url(") ? A.split(/(url\(.*?\))/g).filter(Boolean).map((O) => /^url\(.*?\)$/.test(O) ? O : u(O, false)).join("") : (A = A.replace(/([^\\])_+/g, (O, Y) => Y + " ".repeat(O.length - 1)).replace(/^_/g, " ").replace(/\\_/g, "_"), R && (A = A.trim()), A = A.replace(/(calc|min|max|clamp)\(.+\)/g, (O) => O.replace(/(-?\d*\.?\d(?!\b-.+[,)](?![^+\-/*])\D)(?:%|[a-z]+)?|\))([+\-/*])/g, "$1 $2 ")), A);
  }
  function s(A) {
    return A.startsWith("url(");
  }
  function l(A) {
    return !isNaN(Number(A)) || i.some((R) => new RegExp(`^${R}\\(.+?`).test(A));
  }
  function f(A) {
    return A.split(o).every((R) => /%$/g.test(R) || i.some((O) => new RegExp(`^${O}\\(.+?%`).test(R)));
  }
  var c = ["cm", "mm", "Q", "in", "pc", "pt", "px", "em", "ex", "ch", "rem", "lh", "vw", "vh", "vmin", "vmax"], p = `(?:${c.join("|")})`;
  function d(A) {
    return A.split(o).every((R) => R === "0" || new RegExp(`${p}$`).test(R) || i.some((O) => new RegExp(`^${O}\\(.+?${p}`).test(R)));
  }
  var D = /* @__PURE__ */ new Set(["thin", "medium", "thick"]);
  function v(A) {
    return D.has(A);
  }
  function g(A) {
    let R = (0, n.parseBoxShadowValue)(u(A));
    for (let O of R)
      if (!O.valid)
        return false;
    return true;
  }
  function y(A) {
    let R = 0;
    return A.split(o).every((O) => (O = u(O), O.startsWith("var(") ? true : (0, r.parseColor)(O, { loose: true }) !== null ? (R++, true) : false)) ? R > 0 : false;
  }
  function b(A) {
    let R = 0;
    return A.split(a).every((O) => (O = u(O), O.startsWith("var(") ? true : s(O) || k(O) || ["element(", "image(", "cross-fade(", "image-set("].some((Y) => O.startsWith(Y)) ? (R++, true) : false)) ? R > 0 : false;
  }
  var C = /* @__PURE__ */ new Set(["linear-gradient", "radial-gradient", "repeating-linear-gradient", "repeating-radial-gradient", "conic-gradient"]);
  function k(A) {
    A = u(A);
    for (let R of C)
      if (A.startsWith(`${R}(`))
        return true;
    return false;
  }
  var S = /* @__PURE__ */ new Set(["center", "top", "right", "bottom", "left"]);
  function E(A) {
    let R = 0;
    return A.split(o).every((O) => (O = u(O), O.startsWith("var(") ? true : S.has(O) || d(O) || f(O) ? (R++, true) : false)) ? R > 0 : false;
  }
  function L(A) {
    let R = 0;
    return A.split(a).every((O) => (O = u(O), O.startsWith("var(") ? true : O.includes(" ") && !/(['"])([^"']+)\1/g.test(O) || /^\d/g.test(O) ? false : (R++, true))) ? R > 0 : false;
  }
  var T = /* @__PURE__ */ new Set(["serif", "sans-serif", "monospace", "cursive", "fantasy", "system-ui", "ui-serif", "ui-sans-serif", "ui-monospace", "ui-rounded", "math", "emoji", "fangsong"]);
  function U(A) {
    return T.has(A);
  }
  var M = /* @__PURE__ */ new Set(["xx-small", "x-small", "small", "medium", "large", "x-large", "x-large", "xxx-large"]);
  function H(A) {
    return M.has(A);
  }
  var q = /* @__PURE__ */ new Set(["larger", "smaller"]);
  function ee(A) {
    return q.has(A);
  }
});
var ug = le((e) => {
  "use strict";
  Object.defineProperty(e, "__esModule", { value: true });
  function t(E, L) {
    for (var T in L)
      Object.defineProperty(E, T, { enumerable: true, get: L[T] });
  }
  t(e, { updateAllClasses: () => s, asValue: () => c, parseColorFormat: () => D, asColor: () => v, asLookupValue: () => g, coerceValue: () => S });
  var r = u(tg()), n = u(rg()), i = nl(), a = sg(), o = u(Mu());
  function u(E) {
    return E && E.__esModule ? E : { default: E };
  }
  function s(E, L) {
    return (0, r.default)((T) => {
      T.walkClasses((U) => {
        let M = L(U.value);
        U.value = M, U.raws && U.raws.value && (U.raws.value = (0, n.default)(U.raws.value));
      });
    }).processSync(E);
  }
  function l(E, L) {
    if (!p(E))
      return;
    let T = E.slice(1, -1);
    if (L(T))
      return (0, a.normalize)(T);
  }
  function f(E, L = {}, T) {
    let U = L[E];
    if (U !== void 0)
      return (0, o.default)(U);
    if (p(E)) {
      let M = l(E, T);
      return M === void 0 ? void 0 : (0, o.default)(M);
    }
  }
  function c(E, L = {}, { validate: T = () => true } = {}) {
    var U;
    let M = (U = L.values) === null || U === void 0 ? void 0 : U[E];
    return M !== void 0 ? M : L.supportsNegativeValues && E.startsWith("-") ? f(E.slice(1), L.values, T) : l(E, T);
  }
  function p(E) {
    return E.startsWith("[") && E.endsWith("]");
  }
  function d(E) {
    let L = E.lastIndexOf("/");
    return L === -1 || L === E.length - 1 ? [E] : [E.slice(0, L), E.slice(L + 1)];
  }
  function D(E) {
    if (typeof E == "string" && E.includes("<alpha-value>")) {
      let L = E;
      return ({ opacityValue: T = 1 }) => L.replace("<alpha-value>", T);
    }
    return E;
  }
  function v(E, L = {}, { tailwindConfig: T = {} } = {}) {
    var U;
    if (((U = L.values) === null || U === void 0 ? void 0 : U[E]) !== void 0) {
      var M;
      return D((M = L.values) === null || M === void 0 ? void 0 : M[E]);
    }
    let [H, q] = d(E);
    if (q !== void 0) {
      var ee, A, R, O;
      let Y = (O = (ee = L.values) === null || ee === void 0 ? void 0 : ee[H]) !== null && O !== void 0 ? O : p(H) ? H.slice(1, -1) : void 0;
      return Y === void 0 ? void 0 : (Y = D(Y), p(q) ? (0, i.withAlphaValue)(Y, q.slice(1, -1)) : ((A = T.theme) === null || A === void 0 || (R = A.opacity) === null || R === void 0 ? void 0 : R[q]) === void 0 ? void 0 : (0, i.withAlphaValue)(Y, T.theme.opacity[q]));
    }
    return c(E, L, { validate: a.color });
  }
  function g(E, L = {}) {
    var T;
    return (T = L.values) === null || T === void 0 ? void 0 : T[E];
  }
  function y(E) {
    return (L, T) => c(L, T, { validate: E });
  }
  var b = { any: c, color: v, url: y(a.url), image: y(a.image), length: y(a.length), percentage: y(a.percentage), position: y(a.position), lookup: g, "generic-name": y(a.genericName), "family-name": y(a.familyName), number: y(a.number), "line-width": y(a.lineWidth), "absolute-size": y(a.absoluteSize), "relative-size": y(a.relativeSize), shadow: y(a.shadow) }, C = Object.keys(b);
  function k(E, L) {
    let T = E.indexOf(L);
    return T === -1 ? [void 0, E] : [E.slice(0, T), E.slice(T + 1)];
  }
  function S(E, L, T, U) {
    if (p(L)) {
      let M = L.slice(1, -1), [H, q] = k(M, ":");
      if (!/^[\w-_]+$/g.test(H))
        q = M;
      else if (H !== void 0 && !C.includes(H))
        return [];
      if (q.length > 0 && C.includes(H))
        return [c(`[${q}]`, T), H];
    }
    for (let M of [].concat(E)) {
      let H = b[M](L, T, { tailwindConfig: U });
      if (H !== void 0)
        return [H, M];
    }
    return [];
  }
});
var lg = le((e) => {
  "use strict";
  Object.defineProperty(e, "__esModule", { value: true }), Object.defineProperty(e, "default", { enumerable: true, get: () => t });
  function t(r) {
    return typeof r == "function" ? r({}) : r;
  }
});
var fg = le((e) => {
  "use strict";
  Object.defineProperty(e, "__esModule", { value: true }), Object.defineProperty(e, "default", { enumerable: true, get: () => ee });
  var t = D(Mu()), r = D(Uv()), n = D(Bv()), i = D(Gu()), a = D(Nv()), o = Mv(), u = Gv(), s = Wv(), l = D($v()), f = jv(), c = ug(), p = nl(), d = D(lg());
  function D(A) {
    return A && A.__esModule ? A : { default: A };
  }
  function v(A) {
    return typeof A == "function";
  }
  function g(A) {
    return typeof A == "object" && A !== null;
  }
  function y(A, ...R) {
    let O = R.pop();
    for (let Y of R)
      for (let Z in Y) {
        let te = O(A[Z], Y[Z]);
        te === void 0 ? g(A[Z]) && g(Y[Z]) ? A[Z] = y(A[Z], Y[Z], O) : A[Z] = Y[Z] : A[Z] = te;
      }
    return A;
  }
  var b = { colors: a.default, negative(A) {
    return Object.keys(A).filter((R) => A[R] !== "0").reduce((R, O) => {
      let Y = (0, t.default)(A[O]);
      return Y !== void 0 && (R[`-${O}`] = Y), R;
    }, {});
  }, breakpoints(A) {
    return Object.keys(A).filter((R) => typeof A[R] == "string").reduce((R, O) => ({ ...R, [`screen-${O}`]: A[O] }), {});
  } };
  function C(A, ...R) {
    return v(A) ? A(...R) : A;
  }
  function k(A) {
    return A.reduce((R, { extend: O }) => y(R, O, (Y, Z) => Y === void 0 ? [Z] : Array.isArray(Y) ? [Z, ...Y] : [Z, Y]), {});
  }
  function S(A) {
    return { ...A.reduce((R, O) => (0, o.defaults)(R, O), {}), extend: k(A) };
  }
  function E(A, R) {
    if (Array.isArray(A) && g(A[0]))
      return A.concat(R);
    if (Array.isArray(R) && g(R[0]) && g(A))
      return [A, ...R];
    if (Array.isArray(R))
      return R;
  }
  function L({ extend: A, ...R }) {
    return y(R, A, (O, Y) => !v(O) && !Y.some(v) ? y({}, O, ...Y, E) : (Z, te) => y({}, ...[O, ...Y].map((ie) => C(ie, Z, te)), E));
  }
  function* T(A) {
    let R = (0, u.toPath)(A);
    if (R.length === 0 || (yield R, Array.isArray(A)))
      return;
    let O = /^(.*?)\s*\/\s*([^/]+)$/, Y = A.match(O);
    if (Y !== null) {
      let [, Z, te] = Y, ie = (0, u.toPath)(Z);
      ie.alpha = te, yield ie;
    }
  }
  function U(A) {
    let R = (O, Y) => {
      for (let Z of T(O)) {
        let te = 0, ie = A;
        for (; ie != null && te < Z.length; )
          ie = ie[Z[te++]], ie = v(ie) && (Z.alpha === void 0 || te <= Z.length - 1) ? ie(R, b) : ie;
        if (ie !== void 0) {
          if (Z.alpha !== void 0) {
            let B = (0, c.parseColorFormat)(ie);
            return (0, p.withAlphaValue)(B, Z.alpha, (0, d.default)(B));
          }
          return (0, l.default)(ie) ? (0, f.cloneDeep)(ie) : ie;
        }
      }
      return Y;
    };
    return Object.assign(R, { theme: R, ...b }), Object.keys(A).reduce((O, Y) => (O[Y] = v(A[Y]) ? A[Y](R, b) : A[Y], O), {});
  }
  function M(A) {
    let R = [];
    return A.forEach((O) => {
      R = [...R, O];
      var Y;
      let Z = (Y = O?.plugins) !== null && Y !== void 0 ? Y : [];
      Z.length !== 0 && Z.forEach((te) => {
        te.__isOptionsFunction && (te = te());
        var ie;
        R = [...R, ...M([(ie = te?.config) !== null && ie !== void 0 ? ie : {}])];
      });
    }), R;
  }
  function H(A) {
    return [...A].reduceRight((R, O) => v(O) ? O({ corePlugins: R }) : (0, n.default)(O, R), r.default);
  }
  function q(A) {
    return [...A].reduceRight((R, O) => [...R, ...O], []);
  }
  function ee(A) {
    let R = [...M(A), { prefix: "", important: false, separator: ":", variantOrder: i.default.variantOrder }];
    var O, Y;
    return (0, s.normalizeConfig)((0, o.defaults)({ theme: U(L(S(R.map((Z) => (O = Z?.theme) !== null && O !== void 0 ? O : {})))), corePlugins: H(R.map((Z) => Z.corePlugins)), plugins: q(A.map((Z) => (Y = Z?.plugins) !== null && Y !== void 0 ? Y : [])) }, ...R));
  }
});
var il = {};
Aa(il, { default: () => al });
var al;
var cg = _a(() => {
  al = { yellow: (e) => e };
});
var pg = le((e) => {
  "use strict";
  Object.defineProperty(e, "__esModule", { value: true });
  function t(c, p) {
    for (var d in p)
      Object.defineProperty(c, d, { enumerable: true, get: p[d] });
  }
  t(e, { flagEnabled: () => u, issueFlagNotices: () => l, default: () => f });
  var r = i((cg(), Xn(il))), n = i((Oa(), Xn(Zn)));
  function i(c) {
    return c && c.__esModule ? c : { default: c };
  }
  var a = { optimizeUniversalDefaults: false }, o = { future: ["hoverOnlyWhenSupported", "respectDefaultRingColorOpacity"], experimental: ["optimizeUniversalDefaults", "matchVariant"] };
  function u(c, p) {
    if (o.future.includes(p)) {
      var d, D, v;
      return c.future === "all" || ((v = (D = c == null || (d = c.future) === null || d === void 0 ? void 0 : d[p]) !== null && D !== void 0 ? D : a[p]) !== null && v !== void 0 ? v : false);
    }
    if (o.experimental.includes(p)) {
      var g, y, b;
      return c.experimental === "all" || ((b = (y = c == null || (g = c.experimental) === null || g === void 0 ? void 0 : g[p]) !== null && y !== void 0 ? y : a[p]) !== null && b !== void 0 ? b : false);
    }
    return false;
  }
  function s(c) {
    if (c.experimental === "all")
      return o.experimental;
    var p;
    return Object.keys((p = c?.experimental) !== null && p !== void 0 ? p : {}).filter((d) => o.experimental.includes(d) && c.experimental[d]);
  }
  function l(c) {
    if (process.env.JEST_WORKER_ID === void 0 && s(c).length > 0) {
      let p = s(c).map((d) => r.default.yellow(d)).join(", ");
      n.default.warn("experimental-flags-enabled", [`You have enabled experimental features: ${p}`, "Experimental features in Tailwind CSS are not covered by semver, may introduce breaking changes, and can change at any time."]);
    }
  }
  var f = o;
});
var hg = le((e) => {
  "use strict";
  Object.defineProperty(e, "__esModule", { value: true }), Object.defineProperty(e, "default", { enumerable: true, get: () => i });
  var t = n(Gu()), r = pg();
  function n(a) {
    return a && a.__esModule ? a : { default: a };
  }
  function i(a) {
    var o;
    let u = ((o = a?.presets) !== null && o !== void 0 ? o : [t.default]).slice().reverse().flatMap((f) => i(typeof f == "function" ? f() : f)), s = { respectDefaultRingColorOpacity: { theme: { ringColor: { DEFAULT: "#3b82f67f" } } } }, l = Object.keys(s).filter((f) => (0, r.flagEnabled)(a, f)).map((f) => s[f]);
    return [a, ...l, ...u];
  }
});
var dg = le((e) => {
  "use strict";
  Object.defineProperty(e, "__esModule", { value: true }), Object.defineProperty(e, "default", { enumerable: true, get: () => i });
  var t = n(fg()), r = n(hg());
  function n(a) {
    return a && a.__esModule ? a : { default: a };
  }
  function i(...a) {
    let [, ...o] = (0, r.default)(a[0]);
    return (0, t.default)([...a, ...o]);
  }
});
var vg = le((e, t) => {
  var r = dg();
  t.exports = (r.__esModule ? r : { default: r }).default;
});
var Qr;
function ol(e) {
  Qr = e;
}
var qr = null;
async function Kn() {
  return Qr || (qr ? (await qr, Qr) : (qr = Promise.resolve().then(() => (Rv(), Nu)).then((e) => e.getYogaModule()).then((e) => Qr = e), await qr, qr = null, Qr));
}
var nn = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports);
var gg = nn((e, t) => {
  t.exports = ["em", "ex", "ch", "rem", "vh", "vw", "vmin", "vmax", "px", "mm", "cm", "in", "pt", "pc", "mozmm"];
});
var mg = nn((e, t) => {
  t.exports = ["deg", "grad", "rad", "turn"];
});
var Dg = nn((e, t) => {
  t.exports = ["dpi", "dpcm", "dppx"];
});
var yg = nn((e, t) => {
  t.exports = ["Hz", "kHz"];
});
var bg = nn((e, t) => {
  t.exports = ["s", "ms"];
});
var xg = gg();
var sl = mg();
var ul = Dg();
var ll = yg();
var fl = bg();
function Ra(e) {
  if (/\.\D?$/.test(e))
    throw new Error("The dot should be followed by a number");
  if (/^[+-]{2}/.test(e))
    throw new Error("Only one leading +/- is allowed");
  if (wg(e) > 1)
    throw new Error("Only one dot is allowed");
  if (/%$/.test(e)) {
    this.type = "percentage", this.value = fa(e), this.unit = "%";
    return;
  }
  var t = Fg(e);
  if (!t) {
    this.type = "number", this.value = fa(e);
    return;
  }
  this.type = Sg(t), this.value = fa(e.substr(0, e.length - t.length)), this.unit = t;
}
Ra.prototype.valueOf = function() {
  return this.value;
};
Ra.prototype.toString = function() {
  return this.value + (this.unit || "");
};
function Qn(e) {
  return new Ra(e);
}
function wg(e) {
  var t = e.match(/\./g);
  return t ? t.length : 0;
}
function fa(e) {
  var t = parseFloat(e);
  if (isNaN(t))
    throw new Error("Invalid number: " + e);
  return t;
}
var Eg = [].concat(sl, ll, xg, ul, fl);
function Fg(e) {
  var t = e.match(/\D+$/), r = t && t[0];
  if (r && Eg.indexOf(r) === -1)
    throw new Error("Invalid unit: " + r);
  return r;
}
var Cg = Object.assign(In(sl, "angle"), In(ll, "frequency"), In(ul, "resolution"), In(fl, "time"));
function In(e, t) {
  return Object.fromEntries(e.map((r) => [r, t]));
}
function Sg(e) {
  return Cg[e] || "length";
}
function jn(e) {
  let t = typeof e;
  return !(t === "number" || t === "bigint" || t === "string" || t === "boolean");
}
function kg(e) {
  return /^class\s/.test(e.toString());
}
function Tg(e) {
  return "dangerouslySetInnerHTML" in e;
}
function _g(e) {
  let t = typeof e > "u" ? [] : [].concat(e).flat(1 / 0), r = [];
  for (let n = 0; n < t.length; n++) {
    let i = t[n];
    typeof i > "u" || typeof i == "boolean" || i === null || (typeof i == "number" && (i = String(i)), typeof i == "string" && r.length && typeof r[r.length - 1] == "string" ? r[r.length - 1] += i : r.push(i));
  }
  return r;
}
function Ie(e, t, r, n, i = false) {
  if (typeof e == "number")
    return e;
  try {
    if (e = e.trim(), /[ /\(,]/.test(e))
      return;
    if (e === String(+e))
      return +e;
    let a = new Qn(e);
    if (a.type === "length")
      switch (a.unit) {
        case "em":
          return a.value * t;
        case "rem":
          return a.value * 16;
        case "vw":
          return ~~(a.value * n._viewportWidth / 100);
        case "vh":
          return ~~(a.value * n._viewportHeight / 100);
        default:
          return a.value;
      }
    else if (a.type === "angle")
      switch (a.unit) {
        case "deg":
          return a.value;
        case "rad":
          return a.value * 180 / Math.PI;
        default:
          return a.value;
      }
    else if (a.type === "percentage" && i)
      return a.value / 100 * r;
  } catch {
  }
}
function zn(e, t) {
  return [e[0] * t[0] + e[2] * t[1], e[1] * t[0] + e[3] * t[1], e[0] * t[2] + e[2] * t[3], e[1] * t[2] + e[3] * t[3], e[0] * t[4] + e[2] * t[5] + e[4], e[1] * t[4] + e[3] * t[5] + e[5]];
}
function Lt(e, t, r, n) {
  let i = t[e];
  if (typeof i > "u") {
    if (n && typeof e < "u")
      throw new Error(`Invalid value for CSS property "${n}". Allowed values: ${Object.keys(t).map((a) => `"${a}"`).join(" | ")}. Received: "${e}".`);
    i = r;
  }
  return i;
}
var ca;
var pa;
var Ag = [32, 160, 4961, 65792, 65793, 4153, 4241, 10].map((e) => String.fromCodePoint(e));
function Pt(e, t, r) {
  if (!ca || !pa) {
    if (!(typeof Intl < "u" && "Segmenter" in Intl))
      throw new Error("Intl.Segmenter does not exist, please use import a polyfill.");
    ca = new Intl.Segmenter(r, { granularity: "word" }), pa = new Intl.Segmenter(r, { granularity: "grapheme" });
  }
  if (t === "grapheme")
    return [...pa.segment(e)].map((n) => n.segment);
  {
    let n = [...ca.segment(e)].map((o) => o.segment), i = [], a = 0;
    for (; a < n.length; ) {
      let o = n[a];
      if (o == "\xA0") {
        let u = a === 0 ? "" : i.pop(), s = a === n.length - 1 ? "" : n[a + 1];
        i.push(u + "\xA0" + s), a += 2;
      } else
        i.push(o), a++;
    }
    return i;
  }
}
function ue(e, t, r) {
  let n = "";
  for (let [i, a] of Object.entries(t))
    typeof a < "u" && (n += ` ${i}="${a}"`);
  return r ? `<${e}${n}>${r}</${e}>` : `<${e}${n}/>`;
}
function Og(e = 20) {
  let t = /* @__PURE__ */ new Map();
  function r(a, o) {
    if (t.size >= e) {
      let u = t.keys().next().value;
      t.delete(u);
    }
    t.set(a, o);
  }
  function n(a) {
    if (!t.has(a))
      return;
    let o = t.get(a);
    return t.delete(a), t.set(a, o), o;
  }
  function i() {
    t.clear();
  }
  return { set: r, get: n, clear: i };
}
function Ua(e) {
  return e ? e.split(/[, ]/).filter(Boolean).map(Number) : null;
}
function Lg(e) {
  return Object.prototype.toString.call(e);
}
function cl(e) {
  return typeof e == "string";
}
function Ig(e) {
  return typeof e == "number";
}
function Pg(e) {
  return Lg(e) === "[object Undefined]";
}
function Rg(e, t) {
  if (t === "break-all")
    return { words: Pt(e, "grapheme"), requiredBreaks: [] };
  if (t === "keep-all")
    return { words: Pt(e, "word"), requiredBreaks: [] };
  let r = new Ei(e), n = 0, i = r.nextBreak(), a = [], o = [false];
  for (; i; ) {
    let u = e.slice(n, i.position);
    a.push(u), i.required ? o.push(true) : o.push(false), n = i.position, i = r.nextBreak();
  }
  return { words: a, requiredBreaks: o };
}
var Ug = (e) => e.replaceAll(/([A-Z])/g, (t, r) => `-${r.toLowerCase()}`);
function pl(e, t = ",") {
  let r = [], n = 0, i = 0;
  t = new RegExp(t);
  for (let a = 0; a < e.length; a++)
    e[a] === "(" ? i++ : e[a] === ")" && i--, i === 0 && t.test(e[a]) && (r.push(e.slice(n, a).trim()), n = a + 1);
  return r.push(e.slice(n).trim()), r;
}
var Bg = "image/avif";
var Ng = "image/webp";
var ei = "image/apng";
var ti = "image/png";
var ri = "image/jpeg";
var ni = "image/gif";
var Ba = "image/svg+xml";
function hl(e) {
  let t = new DataView(e), r = 4, n = t.byteLength;
  for (; r < n; ) {
    let i = t.getUint16(r, false);
    if (i > n)
      throw new TypeError("Invalid JPEG");
    let a = t.getUint8(i + 1 + r);
    if (a === 192 || a === 193 || a === 194)
      return [t.getUint16(i + 7 + r, false), t.getUint16(i + 5 + r, false)];
    r += i + 2;
  }
  throw new TypeError("Invalid JPEG");
}
function dl(e) {
  let t = new Uint8Array(e.slice(6, 10));
  return [t[0] | t[1] << 8, t[2] | t[3] << 8];
}
function vl(e) {
  let t = new DataView(e);
  return [t.getUint16(18, false), t.getUint16(22, false)];
}
var cr = Og(100);
var ha = /* @__PURE__ */ new Map();
var Mg = [ti, ei, ri, ni, Ba];
function Gg(e) {
  let t = "", r = new Uint8Array(e);
  for (let n = 0; n < r.byteLength; n++)
    t += String.fromCharCode(r[n]);
  return btoa(t);
}
function Wg(e) {
  let t = atob(e), r = t.length, n = new Uint8Array(r);
  for (let i = 0; i < r; i++)
    n[i] = t.charCodeAt(i);
  return n.buffer;
}
function lu(e, t) {
  let r = t.match(/<svg[^>]*>/)[0], n = r.match(/viewBox=['"](.+)['"]/), i = n ? Ua(n[1]) : null, a = r.match(/width=['"](\d*\.\d+|\d+)['"]/), o = r.match(/height=['"](\d*\.\d+|\d+)['"]/);
  if (!i && (!a || !o))
    throw new Error(`Failed to parse SVG from ${e}: missing "viewBox"`);
  let u = i ? [i[2], i[3]] : [+a[1], +o[1]], s = u[0] / u[1];
  return a && o ? [+a[1], +o[1]] : a ? [+a[1], +a[1] / s] : o ? [+o[1] * s, +o[1]] : [u[0], u[1]];
}
function fu(e) {
  let t, r = $g(new Uint8Array(e));
  switch (r) {
    case ti:
    case ei:
      t = vl(e);
      break;
    case ni:
      t = dl(e);
      break;
    case ri:
      t = hl(e);
      break;
  }
  if (!Mg.includes(r))
    throw new Error(`Unsupported image type: ${r || "unknown"}`);
  return [`data:${r};base64,${Gg(e)}`, t];
}
async function Na(e) {
  if (!e)
    throw new Error("Image source is not provided.");
  if (typeof e == "object") {
    let [i, a] = fu(e);
    return [i, ...a];
  }
  if ((e.startsWith('"') && e.endsWith('"') || e.startsWith("'") && e.endsWith("'")) && (e = e.slice(1, -1)), typeof window > "u" && !e.startsWith("http") && !e.startsWith("data:"))
    throw new Error(`Image source must be an absolute URL: ${e}`);
  if (e.startsWith("data:")) {
    let i;
    try {
      i = /data:(?<imageType>[a-z/+]+)(;(charset=)?(?<encodingType>.*))?,(?<dataString>.*)/g.exec(e).groups;
    } catch {
      return console.warn("Image data URI resolved without size:" + e), [e];
    }
    let { imageType: a, encodingType: o, dataString: u } = i;
    if (a === Ba) {
      let s = o === "base64" ? atob(u) : decodeURIComponent(u.replace(/ /g, "%20")), l = o === "base64" ? e : `data:image/svg+xml;base64,${btoa(s)}`, f = lu(e, s);
      return cr.set(e, [l, ...f]), [l, ...f];
    } else if (o === "base64") {
      let s, l = Wg(u);
      switch (a) {
        case ti:
        case ei:
          s = vl(l);
          break;
        case ni:
          s = dl(l);
          break;
        case ri:
          s = hl(l);
          break;
      }
      return cr.set(e, [e, ...s]), [e, ...s];
    } else
      return console.warn("Image data URI resolved without size:" + e), cr.set(e, [e]), [e];
  }
  if (!globalThis.fetch)
    throw new Error("`fetch` is required to be polyfilled to load images.");
  if (ha.has(e))
    return ha.get(e);
  let t = cr.get(e);
  if (t)
    return t;
  let r = e, n = fetch(r).then((i) => {
    let a = i.headers.get("content-type");
    return a === "image/svg+xml" || a === "application/svg+xml" ? i.text() : i.arrayBuffer();
  }).then((i) => {
    if (typeof i == "string")
      try {
        let u = `data:image/svg+xml;base64,${btoa(i)}`, s = lu(r, i);
        return [u, ...s];
      } catch (u) {
        throw new Error(`Failed to parse SVG image: ${u.message}`);
      }
    let [a, o] = fu(i);
    return [a, ...o];
  }).then((i) => (cr.set(r, i), i)).catch((i) => (console.error(`Can't load image ${r}: ` + i.message), cr.set(r, []), []));
  return ha.set(r, n), n;
}
function $g(e) {
  return [255, 216, 255].every((t, r) => e[r] === t) ? ri : [137, 80, 78, 71, 13, 10, 26, 10].every((t, r) => e[r] === t) ? jg(e) ? ei : ti : [71, 73, 70, 56].every((t, r) => e[r] === t) ? ni : [82, 73, 70, 70, 0, 0, 0, 0, 87, 69, 66, 80].every((t, r) => !t || e[r] === t) ? Ng : [60, 63, 120, 109, 108].every((t, r) => e[r] === t) ? Ba : [0, 0, 0, 0, 102, 116, 121, 112, 97, 118, 105, 102].every((t, r) => !t || e[r] === t) ? Bg : null;
}
function jg(e) {
  let t = new DataView(e.buffer), r, n, i = 8, a = false;
  for (; !a && r !== "IEND" && i < e.length; ) {
    n = t.getUint32(i);
    let o = e.subarray(i + 4, i + 8);
    r = String.fromCharCode(...o), a = r === "acTL", i += 12 + n;
  }
  return a;
}
var wa = { accentHeight: "accent-height", alignmentBaseline: "alignment-baseline", arabicForm: "arabic-form", baselineShift: "baseline-shift", capHeight: "cap-height", clipPath: "clip-path", clipRule: "clip-rule", colorInterpolation: "color-interpolation", colorInterpolationFilters: "color-interpolation-filters", colorProfile: "color-profile", colorRendering: "color-rendering", dominantBaseline: "dominant-baseline", enableBackground: "enable-background", fillOpacity: "fill-opacity", fillRule: "fill-rule", floodColor: "flood-color", floodOpacity: "flood-opacity", fontFamily: "font-family", fontSize: "font-size", fontSizeAdjust: "font-size-adjust", fontStretch: "font-stretch", fontStyle: "font-style", fontVariant: "font-variant", fontWeight: "font-weight", glyphName: "glyph-name", glyphOrientationHorizontal: "glyph-orientation-horizontal", glyphOrientationVertical: "glyph-orientation-vertical", horizAdvX: "horiz-adv-x", horizOriginX: "horiz-origin-x", href: "href", imageRendering: "image-rendering", letterSpacing: "letter-spacing", lightingColor: "lighting-color", markerEnd: "marker-end", markerMid: "marker-mid", markerStart: "marker-start", overlinePosition: "overline-position", overlineThickness: "overline-thickness", paintOrder: "paint-order", panose1: "panose-1", pointerEvents: "pointer-events", renderingIntent: "rendering-intent", shapeRendering: "shape-rendering", stopColor: "stop-color", stopOpacity: "stop-opacity", strikethroughPosition: "strikethrough-position", strikethroughThickness: "strikethrough-thickness", strokeDasharray: "stroke-dasharray", strokeDashoffset: "stroke-dashoffset", strokeLinecap: "stroke-linecap", strokeLinejoin: "stroke-linejoin", strokeMiterlimit: "stroke-miterlimit", strokeOpacity: "stroke-opacity", strokeWidth: "stroke-width", textAnchor: "text-anchor", textDecoration: "text-decoration", textRendering: "text-rendering", underlinePosition: "underline-position", underlineThickness: "underline-thickness", unicodeBidi: "unicode-bidi", unicodeRange: "unicode-range", unitsPerEm: "units-per-em", vAlphabetic: "v-alphabetic", vHanging: "v-hanging", vIdeographic: "v-ideographic", vMathematical: "v-mathematical", vectorEffect: "vector-effect", vertAdvY: "vert-adv-y", vertOriginX: "vert-origin-x", vertOriginY: "vert-origin-y", wordSpacing: "word-spacing", writingMode: "writing-mode", xHeight: "x-height", xlinkActuate: "xlink:actuate", xlinkArcrole: "xlink:arcrole", xlinkHref: "xlink:href", xlinkRole: "xlink:role", xlinkShow: "xlink:show", xlinkTitle: "xlink:title", xlinkType: "xlink:type", xmlBase: "xml:base", xmlLang: "xml:lang", xmlSpace: "xml:space", xmlnsXlink: "xmlns:xlink" };
var zg = /[\r\n%#()<>?[\\\]^`{|}"']/g;
function Ea(e, t) {
  if (!e)
    return "";
  if (Array.isArray(e))
    return e.map((l) => Ea(l, t)).join("");
  if (typeof e != "object")
    return String(e);
  let r = e.type;
  if (r === "text")
    throw new Error("<text> nodes are not currently supported, please convert them to <path>");
  let { children: n, style: i, ...a } = e.props || {}, o = i?.color || t, u = `${Object.entries(a).map(([l, f]) => (typeof f == "string" && f.toLowerCase() === "currentcolor" && (f = o), l === "href" && r === "image" ? ` ${wa[l] || l}="${cr.get(f)[0]}"` : ` ${wa[l] || l}="${f}"`)).join("")}`, s = i ? ` style="${Object.entries(i).map(([l, f]) => `${Ug(l)}:${f}`).join(";")}"` : "";
  return `<${r}${u}${s}>${Ea(n, o)}</${r}>`;
}
async function Vg(e) {
  let t = /* @__PURE__ */ new Set(), r = (n) => {
    if (n && jn(n)) {
      if (Array.isArray(n)) {
        n.forEach((i) => r(i));
        return;
      } else
        typeof n == "object" && (n.type === "image" ? t.has(n.props.href) || t.add(n.props.href) : n.type === "img" && (t.has(n.props.src) || t.add(n.props.src)));
      Array.isArray(n.props.children) ? n.props.children.map((i) => r(i)) : r(n.props.children);
    }
  };
  return r(e), Promise.all(Array.from(t).map((n) => Na(n)));
}
async function Hg(e, t) {
  let { viewBox: r, viewbox: n, width: i, height: a, className: o, style: u, children: s, ...l } = e.props || {};
  r ||= n, l.xmlns = "http://www.w3.org/2000/svg";
  let f = u?.color || t, c = Ua(r), p = c ? c[3] / c[2] : null;
  return i = i || p && a ? a / p : null, a = a || p && i ? i * p : null, l.width = i, l.height = a, r && (l.viewBox = r), `data:image/svg+xml;utf8,${`<svg ${Object.entries(l).map(([d, D]) => (typeof D == "string" && D.toLowerCase() === "currentcolor" && (D = f), ` ${wa[d] || d}="${D}"`)).join("")}>${Ea(s, f)}</svg>`.replace(zg, encodeURIComponent)}`;
}
var Et = "flex";
var Xg = { p: { display: Et, marginTop: "1em", marginBottom: "1em" }, div: { display: Et }, blockquote: { display: Et, marginTop: "1em", marginBottom: "1em", marginLeft: 40, marginRight: 40 }, center: { display: Et, textAlign: "center" }, hr: { display: Et, marginTop: "0.5em", marginBottom: "0.5em", marginLeft: "auto", marginRight: "auto", borderWidth: 1, borderStyle: "solid" }, h1: { display: Et, fontSize: "2em", marginTop: "0.67em", marginBottom: "0.67em", marginLeft: 0, marginRight: 0, fontWeight: "bold" }, h2: { display: Et, fontSize: "1.5em", marginTop: "0.83em", marginBottom: "0.83em", marginLeft: 0, marginRight: 0, fontWeight: "bold" }, h3: { display: Et, fontSize: "1.17em", marginTop: "1em", marginBottom: "1em", marginLeft: 0, marginRight: 0, fontWeight: "bold" }, h4: { display: Et, marginTop: "1.33em", marginBottom: "1.33em", marginLeft: 0, marginRight: 0, fontWeight: "bold" }, h5: { display: Et, fontSize: "0.83em", marginTop: "1.67em", marginBottom: "1.67em", marginLeft: 0, marginRight: 0, fontWeight: "bold" }, h6: { display: Et, fontSize: "0.67em", marginTop: "2.33em", marginBottom: "2.33em", marginLeft: 0, marginRight: 0, fontWeight: "bold" }, u: { textDecoration: "underline" }, strong: { fontWeight: "bold" }, b: { fontWeight: "bold" }, i: { fontStyle: "italic" }, em: { fontStyle: "italic" }, code: { fontFamily: "monospace" }, kbd: { fontFamily: "monospace" }, pre: { display: Et, fontFamily: "monospace", whiteSpace: "pre", marginTop: "1em", marginBottom: "1em" }, mark: { backgroundColor: "yellow", color: "black" }, big: { fontSize: "larger" }, small: { fontSize: "smaller" }, s: { textDecoration: "line-through" } };
var qg = /* @__PURE__ */ new Set(["color", "font", "fontFamily", "fontSize", "fontStyle", "fontWeight", "letterSpacing", "lineHeight", "textAlign", "textTransform", "textShadowOffset", "textShadowColor", "textShadowRadius", "textDecorationLine", "textDecorationStyle", "textDecorationColor", "whiteSpace", "transform", "wordBreak", "tabSize", "opacity", "filter", "_viewportWidth", "_viewportHeight", "_inheritedClipPathId", "_inheritedMaskId", "_inheritedBackgroundClipTextPath"]);
function Yg(e) {
  let t = {};
  for (let r in e)
    qg.has(r) && (t[r] = e[r]);
  return t;
}
function Zg(e, t) {
  try {
    let r = new Qn(e);
    switch (r.unit) {
      case "px":
        return { absolute: r.value };
      case "em":
        return { absolute: r.value * t };
      case "rem":
        return { absolute: r.value * 16 };
      case "%":
        return { relative: r.value };
      default:
        return {};
    }
  } catch {
    return {};
  }
}
function da(e, t, r) {
  switch (e) {
    case "top":
      return { yRelative: 0 };
    case "left":
      return { xRelative: 0 };
    case "right":
      return { xRelative: 100 };
    case "bottom":
      return { yRelative: 100 };
    case "center":
      return {};
    default: {
      let n = Zg(e, t);
      return n.absolute ? { [r ? "xAbsolute" : "yAbsolute"]: n.absolute } : n.relative ? { [r ? "xRelative" : "yRelative"]: n.relative } : {};
    }
  }
}
function Jg(e, t) {
  if (typeof e == "number")
    return { xAbsolute: e };
  let r;
  try {
    r = (0, yl.default)(e).nodes.filter((n) => n.type === "word").map((n) => n.value);
  } catch {
    return {};
  }
  return r.length === 1 ? da(r[0], t, true) : r.length === 2 ? ((r[0] === "top" || r[0] === "bottom" || r[1] === "left" || r[1] === "right") && r.reverse(), { ...da(r[0], t, true), ...da(r[1], t, false) }) : {};
}
function Yr(e, t) {
  let r = (0, bl.getPropertyName)(`mask-${t}`);
  return e[r] || e[`WebkitM${r.substring(1)}`];
}
function Kg(e) {
  let t = e.maskImage || e.WebkitMaskImage, r = { position: Yr(e, "position") || "0% 0%", size: Yr(e, "size") || "100% 100%", repeat: Yr(e, "repeat") || "repeat", origin: Yr(e, "origin") || "border-box", clip: Yr(e, "origin") || "border-box" };
  return pl(t).filter((n) => n && n !== "none").reverse().map((n) => ({ image: n, ...r }));
}
var Qg = /* @__PURE__ */ new Set(["flex", "flexGrow", "flexShrink", "flexBasis", "fontWeight", "lineHeight", "opacity", "scale", "scaleX", "scaleY"]);
var e1 = /* @__PURE__ */ new Set(["lineHeight"]);
function t1(e, t, r, n) {
  return e === "textDecoration" && !r.includes(t.textDecorationColor) && (t.textDecorationColor = n), t;
}
function en(e, t) {
  let r = Number(t);
  return isNaN(r) ? t : Qg.has(e) ? e1.has(e) ? r : String(t) : r + "px";
}
function r1(e, t, r) {
  if (e === "lineHeight")
    return { lineHeight: en(e, t) };
  if (e === "fontFamily")
    return { fontFamily: t.split(",").map((n) => n.trim().replace(/(^['"])|(['"]$)/g, "").toLocaleLowerCase()) };
  if (e === "borderRadius") {
    if (typeof t != "string" || !t.includes("/"))
      return;
    let [n, i] = t.split("/"), a = (0, It.getStylesForProperty)(e, n, true), o = (0, It.getStylesForProperty)(e, i, true);
    for (let u in a)
      o[u] = en(e, a[u]) + " " + en(e, o[u]);
    return o;
  }
  if (/^border(Top|Right|Bottom|Left)?$/.test(e)) {
    let n = (0, It.getStylesForProperty)("border", t, true);
    n.borderWidth === 1 && !String(t).includes("1px") && (n.borderWidth = 3), n.borderColor === "black" && !String(t).includes("black") && (n.borderColor = r);
    let i = { Width: en(e + "Width", n.borderWidth), Style: Lt(n.borderStyle, { solid: "solid", dashed: "dashed" }, "solid", e + "Style"), Color: n.borderColor }, a = {};
    for (let o of e === "border" ? ["Top", "Right", "Bottom", "Left"] : [e.slice(6)])
      for (let u in i)
        a["border" + o + u] = i[u];
    return a;
  }
  if (e === "boxShadow") {
    if (!t)
      throw new Error('Invalid `boxShadow` value: "' + t + '".');
    return { [e]: typeof t == "string" ? (0, ml.parse)(t) : t };
  }
  if (e === "transform") {
    if (typeof t != "string")
      throw new Error("Invalid `transform` value.");
    let n = {}, i = t.replace(/(-?[\d.]+%)/g, (o, u) => {
      let s = ~~(Math.random() * 1e9);
      return n[s] = u, s + "px";
    }), a = (0, It.getStylesForProperty)("transform", i, true);
    for (let o of a.transform)
      for (let u in o)
        n[o[u]] && (o[u] = n[o[u]]);
    return a;
  }
  if (e === "background")
    return t = t.toString().trim(), /^(linear-gradient|radial-gradient|url)\(/.test(t) ? (0, It.getStylesForProperty)("backgroundImage", t, true) : (0, It.getStylesForProperty)("background", t, true);
  if (e === "textShadow") {
    t = t.toString().trim();
    let n = {}, i = pl(t);
    for (let a of i) {
      let o = (0, It.getStylesForProperty)("textShadow", a, true);
      for (let u in o)
        n[u] ? n[u].push(o[u]) : n[u] = [o[u]];
    }
    return n;
  }
}
function cu(e) {
  return e === "transform" ? " Only absolute lengths such as `10px` are supported." : "";
}
var pu = /rgb\((\d+)\s+(\d+)\s+(\d+)\s*\/\s*([\.\d]+)\)/;
function xl(e) {
  if (typeof e == "string" && pu.test(e.trim()))
    return e.trim().replace(pu, (t, r, n, i, a) => `rgba(${r}, ${n}, ${i}, ${a})`);
  if (typeof e == "object" && e !== null) {
    for (let t in e)
      e[t] = xl(e[t]);
    return e;
  }
  return e;
}
function hu(e, t) {
  let r = {};
  if (e) {
    let i = i1(e.color, t.color);
    r.color = i;
    for (let a in e) {
      if (a.startsWith("_")) {
        r[a] = e[a];
        continue;
      }
      if (a === "color")
        continue;
      let o = (0, It.getPropertyName)(a), u = o1(e[a], i);
      try {
        let s = r1(o, u, i) || t1(o, (0, It.getStylesForProperty)(o, en(o, u), true), u, i);
        Object.assign(r, s);
      } catch (s) {
        throw new Error(s.message + (s.message.includes(u) ? `
  ` + cu(o) : `
  in CSS rule \`${o}: ${u}\`.${cu(o)}`));
      }
    }
  }
  if (r.backgroundImage) {
    let { backgrounds: i } = (0, gl.parseElementStyle)(r);
    r.backgroundImage = i;
  }
  (r.maskImage || r.WebkitMaskImage) && (r.maskImage = Kg(r));
  let n = n1(r.fontSize, t.fontSize);
  typeof r.fontSize < "u" && (r.fontSize = n), r.transformOrigin && (r.transformOrigin = Jg(r.transformOrigin, n));
  for (let i in r) {
    let a = r[i];
    if (i === "lineHeight")
      typeof a == "string" && (a = r[i] = Ie(a, n, n, t, true) / n);
    else {
      if (typeof a == "string") {
        let o = Ie(a, n, n, t);
        typeof o < "u" && (r[i] = o), a = r[i];
      }
      if (typeof a == "string" || typeof a == "object") {
        let o = xl(a);
        o && (r[i] = o), a = r[i];
      }
    }
    if (i === "opacity" && typeof a == "number" && (r.opacity = a * t.opacity), i === "transform") {
      let o = a;
      for (let u of o) {
        let s = Object.keys(u)[0], l = u[s], f = typeof l == "string" ? Ie(l, n, n, t) ?? l : l;
        u[s] = f;
      }
    }
    if (i === "textShadowRadius") {
      let o = a;
      r.textShadowRadius = o.map((u) => Ie(u, n, 0, t, false));
    }
    if (i === "textShadowOffset") {
      let o = a;
      r.textShadowOffset = o.map(({ height: u, width: s }) => ({ height: Ie(u, n, 0, t, false), width: Ie(s, n, 0, t, false) }));
    }
  }
  return r;
}
function n1(e, t) {
  if (typeof e == "number")
    return e;
  try {
    let r = new Qn(e);
    switch (r.unit) {
      case "em":
        return r.value * t;
      case "rem":
        return r.value * 16;
    }
  } catch {
    return t;
  }
}
function du(e) {
  if (e.startsWith("hsl")) {
    let t = (0, Dl.default)(e), [r, n, i] = t.values;
    return `hsl(${[r, `${n}%`, `${i}%`].concat(t.alpha === 1 ? [] : [t.alpha]).join(",")})`;
  }
  return e;
}
function i1(e, t) {
  return e && e.toLowerCase() !== "currentcolor" ? du(e) : du(t);
}
function a1(e, t) {
  return e.replace(/currentcolor/gi, t);
}
function o1(e, t) {
  return cl(e) && (e = a1(e, t)), e;
}
async function s1(e, t, r, n, i) {
  let a = await Kn(), o = { ...r, ...hu(Xg[t], r), ...hu(n, r) };
  if (t === "img") {
    let [u, s, l] = await Na(i.src);
    if (s === void 0 && l === void 0) {
      if (i.width === void 0 || i.height === void 0)
        throw new Error("Image size cannot be determined. Please provide the width and height of the image.");
      s = parseInt(i.width), l = parseInt(i.height);
    }
    let f = l / s, c = (o.borderLeftWidth || 0) + (o.borderRightWidth || 0) + (o.paddingLeft || 0) + (o.paddingRight || 0), p = (o.borderTopWidth || 0) + (o.borderBottomWidth || 0) + (o.paddingTop || 0) + (o.paddingBottom || 0), d = o.width || i.width, D = o.height || i.height, v = typeof d == "number" && typeof D == "number";
    v && (d -= c, D -= p), d === void 0 && D === void 0 ? (d = "100%", e.setAspectRatio(1 / f)) : d === void 0 ? typeof D == "number" ? d = D / f : e.setAspectRatio(1 / f) : D === void 0 && (typeof d == "number" ? D = d * f : e.setAspectRatio(1 / f)), o.width = v ? d + c : d, o.height = v ? D + p : D, o.__src = u;
  }
  if (t === "svg") {
    let u = i.viewBox || i.viewbox, s = Ua(u), l = s ? s[3] / s[2] : null, { width: f, height: c } = i;
    typeof f > "u" && c ? l == null ? f = 0 : typeof c == "string" && c.endsWith("%") ? f = parseInt(c) / l + "%" : (c = Ie(c, r.fontSize, 1, r), f = c / l) : typeof c > "u" && f ? l == null ? f = 0 : typeof f == "string" && f.endsWith("%") ? c = parseInt(f) * l + "%" : (f = Ie(f, r.fontSize, 1, r), c = f * l) : (typeof f < "u" && (f = Ie(f, r.fontSize, 1, r) || f), typeof c < "u" && (c = Ie(c, r.fontSize, 1, r) || c), f ||= s?.[2], c ||= s?.[3]), !o.width && f && (o.width = f), !o.height && c && (o.height = c);
  }
  return e.setDisplay(Lt(o.display, { flex: a.DISPLAY_FLEX, block: a.DISPLAY_FLEX, none: a.DISPLAY_NONE, "-webkit-box": a.DISPLAY_FLEX }, a.DISPLAY_FLEX, "display")), e.setAlignContent(Lt(o.alignContent, { stretch: a.ALIGN_STRETCH, center: a.ALIGN_CENTER, "flex-start": a.ALIGN_FLEX_START, "flex-end": a.ALIGN_FLEX_END, "space-between": a.ALIGN_SPACE_BETWEEN, "space-around": a.ALIGN_SPACE_AROUND, baseline: a.ALIGN_BASELINE, normal: a.ALIGN_AUTO }, a.ALIGN_AUTO, "alignContent")), e.setAlignItems(Lt(o.alignItems, { stretch: a.ALIGN_STRETCH, center: a.ALIGN_CENTER, "flex-start": a.ALIGN_FLEX_START, "flex-end": a.ALIGN_FLEX_END, baseline: a.ALIGN_BASELINE, normal: a.ALIGN_AUTO }, a.ALIGN_STRETCH, "alignItems")), e.setAlignSelf(Lt(o.alignSelf, { stretch: a.ALIGN_STRETCH, center: a.ALIGN_CENTER, "flex-start": a.ALIGN_FLEX_START, "flex-end": a.ALIGN_FLEX_END, baseline: a.ALIGN_BASELINE, normal: a.ALIGN_AUTO }, a.ALIGN_AUTO, "alignSelf")), e.setJustifyContent(Lt(o.justifyContent, { center: a.JUSTIFY_CENTER, "flex-start": a.JUSTIFY_FLEX_START, "flex-end": a.JUSTIFY_FLEX_END, "space-between": a.JUSTIFY_SPACE_BETWEEN, "space-around": a.JUSTIFY_SPACE_AROUND }, a.JUSTIFY_FLEX_START, "justifyContent")), e.setFlexDirection(Lt(o.flexDirection, { row: a.FLEX_DIRECTION_ROW, column: a.FLEX_DIRECTION_COLUMN, "row-reverse": a.FLEX_DIRECTION_ROW_REVERSE, "column-reverse": a.FLEX_DIRECTION_COLUMN_REVERSE }, a.FLEX_DIRECTION_ROW, "flexDirection")), e.setFlexWrap(Lt(o.flexWrap, { wrap: a.WRAP_WRAP, nowrap: a.WRAP_NO_WRAP, "wrap-reverse": a.WRAP_WRAP_REVERSE }, a.WRAP_NO_WRAP, "flexWrap")), typeof o.gap < "u" && e.setGap(a.GUTTER_ALL, o.gap), typeof o.rowGap < "u" && e.setGap(a.GUTTER_ROW, o.rowGap), typeof o.columnGap < "u" && e.setGap(a.GUTTER_COLUMN, o.columnGap), typeof o.flexBasis < "u" && e.setFlexBasis(o.flexBasis), e.setFlexGrow(typeof o.flexGrow > "u" ? 0 : o.flexGrow), e.setFlexShrink(typeof o.flexShrink > "u" ? 0 : o.flexShrink), typeof o.maxHeight < "u" && e.setMaxHeight(o.maxHeight), typeof o.maxWidth < "u" && e.setMaxWidth(o.maxWidth), typeof o.minHeight < "u" && e.setMinHeight(o.minHeight), typeof o.minWidth < "u" && e.setMinWidth(o.minWidth), e.setOverflow(Lt(o.overflow, { visible: a.OVERFLOW_VISIBLE, hidden: a.OVERFLOW_HIDDEN }, a.OVERFLOW_VISIBLE, "overflow")), e.setMargin(a.EDGE_TOP, o.marginTop || 0), e.setMargin(a.EDGE_BOTTOM, o.marginBottom || 0), e.setMargin(a.EDGE_LEFT, o.marginLeft || 0), e.setMargin(a.EDGE_RIGHT, o.marginRight || 0), e.setBorder(a.EDGE_TOP, o.borderTopWidth || 0), e.setBorder(a.EDGE_BOTTOM, o.borderBottomWidth || 0), e.setBorder(a.EDGE_LEFT, o.borderLeftWidth || 0), e.setBorder(a.EDGE_RIGHT, o.borderRightWidth || 0), e.setPadding(a.EDGE_TOP, o.paddingTop || 0), e.setPadding(a.EDGE_BOTTOM, o.paddingBottom || 0), e.setPadding(a.EDGE_LEFT, o.paddingLeft || 0), e.setPadding(a.EDGE_RIGHT, o.paddingRight || 0), e.setPositionType(Lt(o.position, { absolute: a.POSITION_TYPE_ABSOLUTE, relative: a.POSITION_TYPE_RELATIVE }, a.POSITION_TYPE_RELATIVE, "position")), typeof o.top < "u" && e.setPosition(a.EDGE_TOP, o.top), typeof o.bottom < "u" && e.setPosition(a.EDGE_BOTTOM, o.bottom), typeof o.left < "u" && e.setPosition(a.EDGE_LEFT, o.left), typeof o.right < "u" && e.setPosition(a.EDGE_RIGHT, o.right), typeof o.height < "u" ? e.setHeight(o.height) : e.setHeightAuto(), typeof o.width < "u" ? e.setWidth(o.width) : e.setWidthAuto(), [o, Yg(o)];
}
var vu = [1, 0, 0, 1, 0, 0];
function u1(e, t, r) {
  let n = [...vu];
  for (let i of e) {
    let a = Object.keys(i)[0], o = i[a];
    if (typeof o == "string")
      if (a === "translateX")
        o = parseFloat(o) / 100 * t, i[a] = o;
      else if (a === "translateY")
        o = parseFloat(o) / 100 * r, i[a] = o;
      else
        throw new Error(`Invalid transform: "${a}: ${o}".`);
    let u = o, s = [...vu];
    switch (a) {
      case "translateX":
        s[4] = u;
        break;
      case "translateY":
        s[5] = u;
        break;
      case "scale":
        s[0] = u, s[3] = u;
        break;
      case "scaleX":
        s[0] = u;
        break;
      case "scaleY":
        s[3] = u;
        break;
      case "rotate": {
        let l = u * Math.PI / 180, f = Math.cos(l), c = Math.sin(l);
        s[0] = f, s[1] = c, s[2] = -c, s[3] = f;
        break;
      }
      case "skewX":
        s[2] = Math.tan(u * Math.PI / 180);
        break;
      case "skewY":
        s[1] = Math.tan(u * Math.PI / 180);
        break;
    }
    n = zn(s, n);
  }
  e.splice(0, e.length), e.push(...n), e.__resolved = true;
}
function wl({ left: e, top: t, width: r, height: n }, i, a, o) {
  let u;
  i.__resolved || u1(i, r, n);
  let s = i;
  if (a)
    u = s;
  else {
    let l = o?.xAbsolute ?? (o?.xRelative ?? 50) * r / 100, f = o?.yAbsolute ?? (o?.yRelative ?? 50) * n / 100, c = e + l, p = t + f;
    u = zn([1, 0, 0, 1, c, p], zn(s, [1, 0, 0, 1, -c, -p])), s.__parent && (u = zn(s.__parent, u)), s.splice(0, 6, ...u);
  }
  return `matrix(${u.map((l) => l.toFixed(2)).join(",")})`;
}
function l1({ left: e, top: t, width: r, height: n, isInheritingTransform: i }, a) {
  let o = "", u = 1;
  return a.transform && (o = wl({ left: e, top: t, width: r, height: n }, a.transform, i, a.transformOrigin)), a.opacity !== void 0 && (u = +a.opacity), { matrix: o, opacity: u };
}
function f1({ id: e, content: t, filter: r, left: n, top: i, width: a, height: o, matrix: u, opacity: s, image: l, clipPathId: f, debug: c, shape: p, decorationShape: d }, D) {
  let v = "";
  if (c && (v = ue("rect", { x: n, y: i - o, width: a, height: o, fill: "transparent", stroke: "#575eff", "stroke-width": 1, transform: u || void 0, "clip-path": f ? `url(#${f})` : void 0 })), l) {
    let y = { href: l, x: n, y: i, width: a, height: o, transform: u || void 0, "clip-path": f ? `url(#${f})` : void 0, style: D.filter ? `filter:${D.filter}` : void 0 };
    return [(r ? `${r}<g filter="url(#satori_s-${e})">` : "") + ue("image", { ...y, opacity: s !== 1 ? s : void 0 }) + (d || "") + (r ? "</g>" : "") + v, ""];
  }
  let g = { x: n, y: i, width: a, height: o, "font-weight": D.fontWeight, "font-style": D.fontStyle, "font-size": D.fontSize, "font-family": D.fontFamily, "letter-spacing": D.letterSpacing || void 0, transform: u || void 0, "clip-path": f ? `url(#${f})` : void 0, style: D.filter ? `filter:${D.filter}` : void 0 };
  return [(r ? `${r}<g filter="url(#satori_s-${e})">` : "") + ue("text", { ...g, fill: D.color, opacity: s !== 1 ? s : void 0 }, (0, Fa.default)(t)) + (d || "") + (r ? "</g>" : "") + v, p ? ue("text", g, (0, Fa.default)(t)) : ""];
}
function c1(e, t, r) {
  return e.replace(/([MA])([0-9.-]+),([0-9.-]+)/g, function(n, i, a, o) {
    return i + (parseFloat(a) + t) + "," + (parseFloat(o) + r);
  });
}
var Pn = 1.1;
function p1({ id: e, width: t, height: r }, n) {
  if (!n.shadowColor || !n.shadowOffset || typeof n.shadowRadius > "u")
    return "";
  let i = n.shadowColor.length, a = "", o = "", u = 0, s = t, l = 0, f = r;
  for (let c = 0; c < i; c++) {
    let p = n.shadowRadius[c] * n.shadowRadius[c] / 4;
    u = Math.min(n.shadowOffset[c].width - p, u), s = Math.max(n.shadowOffset[c].width + p + t, s), l = Math.min(n.shadowOffset[c].height - p, l), f = Math.max(n.shadowOffset[c].height + p + r, f), a += ue("feDropShadow", { dx: n.shadowOffset[c].width, dy: n.shadowOffset[c].height, stdDeviation: n.shadowRadius[c] / 2, "flood-color": n.shadowColor[c], "flood-opacity": 1, ...i > 1 ? { in: "SourceGraphic", result: `satori_s-${e}-result-${c}` } : {} }), i > 1 && (o = ue("feMergeNode", { in: `satori_s-${e}-result-${c}` }) + o);
  }
  return ue("filter", { id: `satori_s-${e}`, x: (u / t * 100 * Pn).toFixed(2) + "%", y: (l / r * 100 * Pn).toFixed(2) + "%", width: ((s - u) / t * 100 * Pn).toFixed(2) + "%", height: ((f - l) / r * 100 * Pn).toFixed(2) + "%" }, a + (o ? ue("feMerge", {}, o) : ""));
}
function h1({ width: e, height: t, shape: r, opacity: n, id: i }, a) {
  if (!a.boxShadow)
    return null;
  let o = "", u = "";
  for (let s = a.boxShadow.length - 1; s >= 0; s--) {
    let l = "", f = a.boxShadow[s];
    f.spreadRadius && f.inset && (f.spreadRadius = -f.spreadRadius);
    let c = f.blurRadius * f.blurRadius / 4 + (f.spreadRadius || 0), p = Math.min(-c - (f.inset ? f.offsetX : 0), 0), d = Math.max(c + e - (f.inset ? f.offsetX : 0), e), D = Math.min(-c - (f.inset ? f.offsetY : 0), 0), v = Math.max(c + t - (f.inset ? f.offsetY : 0), t), g = `satori_s-${i}-${s}`, y = `satori_ms-${i}-${s}`, b = f.spreadRadius ? r.replace('stroke-width="0"', `stroke-width="${f.spreadRadius * 2}"`) : r;
    l += ue("mask", { id: y, maskUnits: "userSpaceOnUse" }, ue("rect", { x: 0, y: 0, width: a._viewportWidth || "100%", height: a._viewportHeight || "100%", fill: f.inset ? "#000" : "#fff" }) + b.replace('fill="#fff"', f.inset ? 'fill="#fff"' : 'fill="#000"').replace('stroke="#fff"', ""));
    let C = b.replace(/d="([^"]+)"/, (k, S) => 'd="' + c1(S, f.offsetX, f.offsetY) + '"').replace(/x="([^"]+)"/, (k, S) => 'x="' + (parseFloat(S) + f.offsetX) + '"').replace(/y="([^"]+)"/, (k, S) => 'y="' + (parseFloat(S) + f.offsetY) + '"');
    f.spreadRadius && f.spreadRadius < 0 && (l += ue("mask", { id: y + "-neg", maskUnits: "userSpaceOnUse" }, C.replace('stroke="#fff"', 'stroke="#000"').replace(/stroke-width="[^"]+"/, `stroke-width="${-f.spreadRadius * 2}"`))), f.spreadRadius && f.spreadRadius < 0 && (C = ue("g", { mask: `url(#${y}-neg)` }, C)), l += ue("defs", {}, ue("filter", { id: g, x: `${p / e * 100}%`, y: `${D / t * 100}%`, width: `${(d - p) / e * 100}%`, height: `${(v - D) / t * 100}%` }, ue("feGaussianBlur", { stdDeviation: f.blurRadius / 2, result: "b" }) + ue("feFlood", { "flood-color": f.color, in: "SourceGraphic", result: "f" }) + ue("feComposite", { in: "f", in2: "b", operator: f.inset ? "out" : "in" }))) + ue("g", { mask: `url(#${y})`, filter: `url(#${g})`, opacity: n }, C), f.inset ? u += l : o += l;
  }
  return [o, u];
}
function d1({ width: e, left: t, top: r, ascender: n, clipPathId: i }, a) {
  let { textDecorationColor: o, textDecorationStyle: u, textDecorationLine: s, fontSize: l, color: f } = a;
  if (!s || s === "none")
    return "";
  let c = Math.max(1, l * 0.1), p = s === "line-through" ? r + n * 0.7 : s === "underline" ? r + n * 1.1 : r, d = u === "dashed" ? `${c * 1.2} ${c * 2}` : u === "dotted" ? `0 ${c * 2}` : void 0;
  return ue("line", { x1: t, y1: p, x2: t + e, y2: p, stroke: o || f, "stroke-width": c, "stroke-dasharray": d, "stroke-linecap": u === "dotted" ? "round" : "square", "clip-path": i ? `url(#${i})` : void 0 });
}
function Ma(e) {
  return e = e.replace("U+", "0x"), String.fromCodePoint(Number(e));
}
var rn = Ma("U+0020");
var El = Ma("U+0009");
var Vn = Ma("U+2026");
function v1(e, t, r) {
  let { fontSize: n, letterSpacing: i } = r, a = /* @__PURE__ */ new Map();
  function o(l) {
    if (a.has(l))
      return a.get(l);
    let f = e.measure(l, { fontSize: n, letterSpacing: i });
    return a.set(l, f), f;
  }
  function u(l) {
    let f = 0;
    for (let c of l)
      t(c) ? f += n : f += o(c);
    return f;
  }
  function s(l) {
    return u(Pt(l, "grapheme"));
  }
  return { measureGrapheme: o, measureGraphemeArray: u, measureText: s };
}
function g1(e, t, r) {
  let { textTransform: n, whiteSpace: i, wordBreak: a } = t;
  e = m1(e, n, r);
  let { content: o, shouldCollapseTabsAndSpaces: u, allowSoftWrap: s } = b1(e, i), { words: l, requiredBreaks: f, allowBreakWord: c } = y1(o, a), [p, d] = D1(t, s);
  return { words: l, requiredBreaks: f, allowSoftWrap: s, allowBreakWord: c, processedContent: o, shouldCollapseTabsAndSpaces: u, lineLimit: p, blockEllipsis: d };
}
function m1(e, t, r) {
  return t === "uppercase" ? e = e.toLocaleUpperCase(r) : t === "lowercase" ? e = e.toLocaleLowerCase(r) : t === "capitalize" && (e = Pt(e, "word", r).map((n) => Pt(n, "grapheme", r).map((i, a) => a === 0 ? i.toLocaleUpperCase(r) : i).join("")).join("")), e;
}
function D1(e, t) {
  let { textOverflow: r, lineClamp: n, WebkitLineClamp: i, WebkitBoxOrient: a, overflow: o, display: u } = e;
  if (u === "block" && n) {
    let [s, l = Vn] = x1(n);
    if (s)
      return [s, l];
  }
  return r === "ellipsis" && u === "-webkit-box" && a === "vertical" && Ig(i) && i > 0 ? [i, Vn] : r === "ellipsis" && o === "hidden" && !t ? [1, Vn] : [1 / 0];
}
function y1(e, t) {
  let r = ["break-all", "break-word"].includes(t), { words: n, requiredBreaks: i } = Rg(e, t);
  return { words: n, requiredBreaks: i, allowBreakWord: r };
}
function b1(e, t) {
  let r = ["pre", "pre-wrap", "pre-line"].includes(t), n = ["normal", "nowrap", "pre-line"].includes(t), i = !["pre", "nowrap"].includes(t);
  return r || (e = e.replace(/\n/g, rn)), n && (e = e.replace(/([ ]|\t)+/g, rn).replace(/^[ ]|[ ]$/g, "")), { content: e, shouldCollapseTabsAndSpaces: n, allowSoftWrap: i };
}
function x1(e) {
  if (typeof e == "number")
    return [e];
  let t = /^(\d+)\s*"(.*)"$/, r = /^(\d+)\s*'(.*)'$/, n = t.exec(e), i = r.exec(e);
  if (n) {
    let a = +n[1], o = n[2];
    return [a, o];
  } else if (i) {
    let a = +i[1], o = i[2];
    return [a, o];
  }
  return [];
}
var w1 = /* @__PURE__ */ new Set([El]);
function E1(e) {
  return w1.has(e);
}
async function* F1(e, t) {
  let r = await Kn(), { parentStyle: n, inheritedStyle: i, parent: a, font: o, id: u, isInheritingTransform: s, debug: l, embedFont: f, graphemeImages: c, locale: p, canLoadAdditionalAssets: d } = t, { textAlign: D, lineHeight: v, textWrap: g, fontSize: y, filter: b, tabSize: C = 8, letterSpacing: k, _inheritedBackgroundClipTextPath: S, flexShrink: E } = n, { words: L, requiredBreaks: T, allowSoftWrap: U, allowBreakWord: M, processedContent: H, shouldCollapseTabsAndSpaces: q, lineLimit: ee, blockEllipsis: A } = g1(e, n, p), R = C1(r, D);
  a.insertChild(R, a.getChildCount()), Pg(E) && a.setFlexShrink(1);
  let O = o.getEngine(y, v, n, p), Y = d ? Pt(H, "grapheme").filter((ve) => !E1(ve) && !O.has(ve)) : [];
  yield Y.map((ve) => ({ word: ve, locale: p })), Y.length && (O = o.getEngine(y, v, n, p));
  function Z(ve) {
    return !!(c && c[ve]);
  }
  let { measureGrapheme: te, measureGraphemeArray: ie, measureText: B } = v1(O, Z, { fontSize: y, letterSpacing: k }), z = cl(C) ? Ie(C, y, 1, n) : te(rn) * C, _ = (ve, Le) => {
    if (ve.length === 0)
      return { originWidth: 0, endingSpacesWidth: 0, text: ve };
    let { index: Ue, tabCount: we } = S1(ve), Ne = 0;
    if (we > 0) {
      let $e = ve.slice(0, Ue), Fe = ve.slice(Ue + we), Ce = B($e), pt = Ce + Le;
      Ne = (z === 0 ? Ce : (Math.floor(pt / z) + we) * z) + B(Fe);
    } else
      Ne = B(ve);
    let Ae = ve.trimEnd() === ve ? Ne : B(ve.trimEnd());
    return { originWidth: Ne, endingSpacesWidth: Ne - Ae, text: ve };
  }, N = [], ae = [], W = [], fe = [], ce = [];
  function ge(ve) {
    let Le = 0, Ue = 0, we = -1, Ne = 0, Ae = 0, $e = 0, Fe = 0;
    N = [], W = [0], fe = [], ce = [];
    let Ce = 0, pt = 0;
    for (; Ce < L.length && Le < ee; ) {
      let me = L[Ce], Bt = T[Ce], Ke = 0, { originWidth: yt, endingSpacesWidth: rr, text: bt } = _(me, Ae);
      me = bt, Ke = yt;
      let Pe = rr;
      Bt && $e === 0 && ($e = O.height(me));
      let Ye = ",.!?:-@)>]}%#".indexOf(me[0]) < 0, ht = !Ae, wr = Ce && Ye && Ae + Ke > ve + Pe && U;
      if (M && Ke > ve && (!Ae || wr || Bt)) {
        let Qe = Pt(me, "grapheme");
        L.splice(Ce, 1, ...Qe), Ae > 0 && (N.push(Ae - pt), ae.push(Fe), Le++, Ne += $e, Ae = 0, $e = 0, Fe = 0, W.push(1), we = -1), pt = Pe;
        continue;
      }
      if (Bt || wr)
        q && me === rn && (Ke = 0), N.push(Ae - pt), ae.push(Fe), Le++, Ne += $e, Ae = Ke, $e = Ke ? O.height(me) : 0, Fe = Ke ? O.baseline(me) : 0, W.push(1), we = -1, Bt || (Ue = Math.max(Ue, ve));
      else {
        Ae += Ke;
        let Qe = O.height(me);
        Qe > $e && ($e = Qe, Fe = O.baseline(me)), ht && W[W.length - 1]++;
      }
      ht && we++, Ue = Math.max(Ue, Ae);
      let hr = Ae - Ke;
      if (Ke === 0)
        ce.push({ y: Ne, x: hr, width: 0, line: Le, lineIndex: we, isImage: false });
      else {
        let Qe = Pt(me, "word");
        for (let dt = 0; dt < Qe.length; dt++) {
          let Vt = Qe[dt], xt = 0, Nt = false;
          Z(Vt) ? (xt = y, Nt = true) : xt = te(Vt), fe.push(Vt), ce.push({ y: Ne, x: hr, width: xt, line: Le, lineIndex: we, isImage: Nt }), hr += xt;
        }
      }
      Ce++, pt = Pe;
    }
    return Ae && (Le < ee && (Ne += $e), Le++, N.push(Ae), ae.push(Fe)), { width: Ue, height: Ne };
  }
  let pe = { width: 0, height: 0 };
  R.setMeasureFunc((ve) => {
    let { width: Le, height: Ue } = ge(ve);
    if (g === "balance") {
      let Ne = Le / 2, Ae = Le, $e = Le;
      for (; Ne + 1 < Ae; ) {
        $e = (Ne + Ae) / 2;
        let { height: Ce } = ge($e);
        Ce > Ue ? Ne = $e : Ae = $e;
      }
      ge(Ae);
      let Fe = Math.ceil(Ae);
      return pe = { width: Fe, height: Ue }, { width: Fe, height: Ue };
    }
    let we = Math.ceil(Le);
    return pe = { width: we, height: Ue }, { width: we, height: Ue };
  });
  let [xe, _e] = yield, he = "", ye = "", Ge = i._inheritedClipPathId, tt = i._inheritedMaskId, { left: We, top: Be, width: He, height: rt } = R.getComputedLayout(), nt = a.getComputedWidth() - a.getComputedPadding(r.EDGE_LEFT) - a.getComputedPadding(r.EDGE_RIGHT) - a.getComputedBorder(r.EDGE_LEFT) - a.getComputedBorder(r.EDGE_RIGHT), it = xe + We, at = _e + Be, { matrix: Xe, opacity: Ct } = l1({ left: We, top: Be, width: He, height: rt, isInheritingTransform: s }, n), Dt = "";
  if (n.textShadowOffset) {
    let { textShadowColor: ve, textShadowOffset: Le, textShadowRadius: Ue } = n;
    Dt = p1({ width: pe.width, height: pe.height, id: u }, { shadowColor: ve, shadowOffset: Le, shadowRadius: Ue }), Dt = ue("defs", {}, Dt);
  }
  let ft = "", ct = "", zt = "", lt = -1, Ut = {}, qe = null, xr = 0;
  for (let ve = 0; ve < fe.length; ve++) {
    let Le = ce[ve], Ue = ce[ve + 1];
    if (!Le)
      continue;
    let we = fe[ve], Ne = null, Ae = false, $e = c ? c[we] : null, Fe = Le.y, Ce = Le.x, pt = Le.width, me = Le.line;
    if (me === lt)
      continue;
    let Bt = false;
    if (N.length > 1) {
      let Pe = He - N[me];
      if (D === "right" || D === "end")
        Ce += Pe;
      else if (D === "center")
        Ce += Pe / 2;
      else if (D === "justify" && me < N.length - 1) {
        let Ye = W[me], ht = Ye > 1 ? Pe / (Ye - 1) : 0;
        Ce += ht * Le.lineIndex, Bt = true;
      }
    }
    let Ke = ae[me], yt = O.baseline(we), rr = O.height(we), bt = Ke - yt;
    if (Ut[me] || (Ut[me] = [Ce, at + Fe + bt, yt, Bt ? He : N[me]]), ee !== 1 / 0) {
      let Pe = function(Qe, dt) {
        let Vt = Pt(dt, "grapheme", p), xt = "", Nt = 0;
        for (let Or of Vt) {
          let pn = Qe + ie([xt + Or]);
          if (xt && pn + ht > nt)
            break;
          xt += Or, Nt = pn;
        }
        return { subset: xt, resolvedWidth: Nt };
      }, Ye = A, ht = te(A);
      ht > nt && (Ye = Vn, ht = te(Ye));
      let wr = te(rn), hr = me < N.length - 1;
      if (me + 1 === ee && (hr || N[me] > nt)) {
        if (Ce + pt + ht + wr > nt) {
          let { subset: Qe, resolvedWidth: dt } = Pe(Ce, we);
          we = Qe + Ye, lt = me, Ut[me][2] = dt, Ae = true;
        } else if (Ue && Ue.line !== me)
          if (D === "center") {
            let { subset: Qe, resolvedWidth: dt } = Pe(Ce, we);
            we = Qe + Ye, lt = me, Ut[me][2] = dt, Ae = true;
          } else {
            let Qe = fe[ve + 1], { subset: dt, resolvedWidth: Vt } = Pe(pt + Ce, Qe);
            we = we + dt + Ye, lt = me, Ut[me][2] = Vt, Ae = true;
          }
      }
    }
    if ($e)
      Fe += 0;
    else if (f) {
      if (!we.includes(El) && !Ag.includes(we) && fe[ve + 1] && Ue && !Ue.isImage && Fe === Ue.y && !Ae) {
        qe === null && (xr = Ce), qe = qe === null ? we : qe + we;
        continue;
      }
      let Pe = qe === null ? we : qe + we, Ye = qe === null ? Ce : xr, ht = Le.width + Ce - Ye;
      Ne = O.getSVG(Pe.replace(/(\t)+/g, ""), { fontSize: y, left: it + Ye, top: at + Fe + yt + bt, letterSpacing: k }), qe = null, l && (zt += ue("rect", { x: it + Ye, y: at + Fe + bt, width: ht, height: rr, fill: "transparent", stroke: "#575eff", "stroke-width": 1, transform: Xe || void 0, "clip-path": Ge ? `url(#${Ge})` : void 0 }) + ue("line", { x1: it + Ce, x2: it + Ce + Le.width, y1: at + Fe + bt + yt, y2: at + Fe + bt + yt, stroke: "#14c000", "stroke-width": 1, transform: Xe || void 0, "clip-path": Ge ? `url(#${Ge})` : void 0 }));
    } else
      Fe += yt + bt;
    if (n.textDecorationLine) {
      let Pe = Ut[me];
      Pe && !Pe[4] && (ft += d1({ left: it + Pe[0], top: Pe[1], width: Pe[3], ascender: Pe[2], clipPathId: Ge }, n), Pe[4] = 1);
    }
    if (Ne !== null)
      ct += Ne + " ";
    else {
      let [Pe, Ye] = f1({ content: we, filter: Dt, id: u, left: it + Ce, top: at + Fe, width: pt, height: rr, matrix: Xe, opacity: Ct, image: $e, clipPathId: Ge, debug: l, shape: !!S, decorationShape: ft }, n);
      he += Pe, ye += Ye, ft = "";
    }
    if (Ae)
      break;
  }
  if (ct) {
    let ve = n.color !== "transparent" && Ct !== 0 ? ue("path", { fill: n.color, d: ct, transform: Xe || void 0, opacity: Ct !== 1 ? Ct : void 0, "clip-path": Ge ? `url(#${Ge})` : void 0, mask: tt ? `url(#${tt})` : void 0, style: b ? `filter:${b}` : void 0 }) : "";
    S && (ye = ue("path", { d: ct, transform: Xe || void 0 })), he += (Dt ? Dt + ue("g", { filter: `url(#satori_s-${u})` }, ve + ft) : ve + ft) + zt;
  }
  return ye && (n._inheritedBackgroundClipTextPath.value += ye), he;
}
function C1(e, t) {
  let r = e.Node.create();
  return r.setAlignItems(e.ALIGN_BASELINE), r.setJustifyContent(Lt(t, { left: e.JUSTIFY_FLEX_START, right: e.JUSTIFY_FLEX_END, center: e.JUSTIFY_CENTER, justify: e.JUSTIFY_SPACE_BETWEEN, start: e.JUSTIFY_FLEX_START, end: e.JUSTIFY_FLEX_END }, e.JUSTIFY_FLEX_START, "textAlign")), r;
}
function S1(e) {
  let t = /(\t)+/.exec(e);
  return t ? { index: t.index, tabCount: t[0].length } : { index: null, tabCount: 0 };
}
var Ga = Ga || {};
var gu = { type: "directional", value: "bottom" };
Ga.parse = function() {
  var e = { linearGradient: /^(\-(webkit|o|ms|moz)\-)?(linear\-gradient)/i, repeatingLinearGradient: /^(\-(webkit|o|ms|moz)\-)?(repeating\-linear\-gradient)/i, radialGradient: /^(\-(webkit|o|ms|moz)\-)?(radial\-gradient)/i, repeatingRadialGradient: /^(\-(webkit|o|ms|moz)\-)?(repeating\-radial\-gradient)/i, sideOrCorner: /^to (left (top|bottom)|right (top|bottom)|top (left|right)|bottom (left|right)|left|right|top|bottom)/i, extentKeywords: /^(closest\-side|closest\-corner|farthest\-side|farthest\-corner|contain|cover)/, positionKeywords: /^(left|center|right|top|bottom)/i, pixelValue: /^(-?(([0-9]*\.[0-9]+)|([0-9]+\.?)))px/, percentageValue: /^(-?(([0-9]*\.[0-9]+)|([0-9]+\.?)))\%/, emLikeValue: /^(-?(([0-9]*\.[0-9]+)|([0-9]+\.?)))(r?em|vw|vh)/, angleValue: /^(-?(([0-9]*\.[0-9]+)|([0-9]+\.?)))deg/, zeroValue: /[0]/, startCall: /^\(/, endCall: /^\)/, comma: /^,/, hexColor: /^\#([0-9a-fA-F]+)/, literalColor: /^([a-zA-Z]+)/, rgbColor: /^rgb/i, rgbaColor: /^rgba/i, number: /^(([0-9]*\.[0-9]+)|([0-9]+\.?))/ }, t = "";
  function r(B) {
    var z = new Error(t + ": " + B);
    throw z.source = t, z;
  }
  function n() {
    var B = i();
    return t.length > 0 && r("Invalid input not EOF"), B;
  }
  function i() {
    return E(a);
  }
  function a() {
    return u("linear-gradient", e.linearGradient, l, gu) || u("repeating-linear-gradient", e.repeatingLinearGradient, l, gu) || u("radial-gradient", e.radialGradient, d) || u("repeating-radial-gradient", e.repeatingRadialGradient, d);
  }
  function o(B = {}) {
    var z, _, N, ae;
    let W = { ...B };
    return Object.assign(W, { style: (W.style || []).length > 0 ? W.style : [{ type: "extent-keyword", value: "farthest-corner" }], at: { type: "position", value: { x: { type: "position-keyword", value: "center", ...((_ = (z = W.at) == null ? void 0 : z.value) == null ? void 0 : _.x) || {} }, y: { type: "position-keyword", value: "center", ...((ae = (N = W.at) == null ? void 0 : N.value) == null ? void 0 : ae.y) || {} } } } }), B.value || Object.assign(W, { type: "shape", value: W.style.some((fe) => ["%", "extent-keyword"].includes(fe.type)) ? "ellipse" : "circle" }), W;
  }
  function u(B, z, _, N) {
    return s(z, function(ae) {
      var W = _();
      return W ? te(e.comma) || r("Missing comma before color stops") : W = N, { type: B, orientation: B.endsWith("radial-gradient") ? W?.map((fe) => o(fe)) ?? [o()] : W, colorStops: E(L) };
    });
  }
  function s(B, z) {
    var _ = te(B);
    if (_) {
      te(e.startCall) || r("Missing (");
      var N = z(_);
      return te(e.endCall) || r("Missing )"), N;
    }
  }
  function l() {
    return f() || c() || p();
  }
  function f() {
    return Z("directional", e.sideOrCorner, 1);
  }
  function c() {
    return Z("angular", e.angleValue, 1);
  }
  function p() {
    return Z("directional", e.zeroValue, 0);
  }
  function d() {
    var B, z = D(), _;
    return z && (B = [], B.push(z), _ = t, te(e.comma) && (z = D(), z ? B.push(z) : t = _)), B;
  }
  function D() {
    let B = v(), z = C();
    if (!(!B && !z))
      return { ...B, at: z };
  }
  function v() {
    let B = g() || y(), z = b() || O() || A(), _ = Z("%", e.percentageValue, 1);
    if (B)
      return { ...B, style: [z, _].filter((N) => N) };
    if (z)
      return { style: [z, _].filter((N) => N), ...g() || y() };
  }
  function g() {
    return Z("shape", /^(circle)/i, 0);
  }
  function y() {
    return Z("shape", /^(ellipse)/i, 0);
  }
  function b() {
    return Z("extent-keyword", e.extentKeywords, 1);
  }
  function C() {
    if (Z("position", /^at/, 0)) {
      var B = k();
      return B || r("Missing positioning value"), B;
    }
  }
  function k() {
    var B = S();
    if (B.x || B.y)
      return { type: "position", value: B };
  }
  function S() {
    return { x: A(), y: A() };
  }
  function E(B) {
    var z = B(), _ = [];
    if (z)
      for (_.push(z); te(e.comma); )
        z = B(), z ? _.push(z) : r("One extra comma");
    return _;
  }
  function L() {
    var B = T();
    return B || r("Expected color definition"), B.length = A(), B;
  }
  function T() {
    return M() || q() || H() || U();
  }
  function U() {
    return Z("literal", e.literalColor, 0);
  }
  function M() {
    return Z("hex", e.hexColor, 1);
  }
  function H() {
    return s(e.rgbColor, function() {
      return { type: "rgb", value: E(ee) };
    });
  }
  function q() {
    return s(e.rgbaColor, function() {
      return { type: "rgba", value: E(ee) };
    });
  }
  function ee() {
    return te(e.number)[1];
  }
  function A() {
    return Z("%", e.percentageValue, 1) || R() || O();
  }
  function R() {
    return Z("position-keyword", e.positionKeywords, 1);
  }
  function O() {
    return Z("px", e.pixelValue, 1) || Y(e.emLikeValue, 1);
  }
  function Y(B, z) {
    var _ = te(B);
    if (_)
      return { type: _[5], value: _[z] };
  }
  function Z(B, z, _) {
    var N = te(z);
    if (N)
      return { type: B, value: N[_] };
  }
  function te(B) {
    var z, _;
    return _ = /^[\n\r\t\s]+/.exec(t), _ && ie(_[0].length), z = B.exec(t), z && ie(z[0].length), z;
  }
  function ie(B) {
    t = t.substr(B);
  }
  return function(B) {
    return t = B.toString(), n();
  };
}();
var mu = Ga;
function k1(e) {
  return e.type === "literal" ? e.value : e.type === "hex" ? `#${e.value}` : e.type === "rgb" ? `rgb(${e.value.join(",")})` : e.type === "rgba" ? `rgba(${e.value.join(",")})` : "transparent";
}
function T1(e) {
  let t = 0, r = 0, n = 0, i = 0;
  return e.includes("top") ? r = 1 : e.includes("bottom") && (i = 1), e.includes("left") ? t = 1 : e.includes("right") && (n = 1), !t && !n && !r && !i && (r = 1), [t, r, n, i];
}
function _1(e, t) {
  return typeof e == "string" && e.endsWith("%") ? t * parseFloat(e) / 100 : +e;
}
function va(e, { x: t, y: r, defaultX: n, defaultY: i }) {
  return (e ? e.split(" ").map((a) => {
    try {
      let o = new Qn(a);
      return o.type === "length" || o.type === "number" ? o.value : o.value + o.unit;
    } catch {
      return null;
    }
  }).filter((a) => a !== null) : [n, i]).map((a, o) => _1(a, [t, r][o]));
}
function Du(e, t, r) {
  let n = [];
  for (let u of t) {
    let s = k1(u);
    if (!n.length && (n.push({ offset: 0, color: s }), typeof u.length > "u" || u.length.value === "0"))
      continue;
    let l = typeof u.length > "u" ? void 0 : u.length.type === "%" ? u.length.value / 100 : u.length.value / e;
    n.push({ offset: l, color: s });
  }
  n.length || n.push({ offset: 0, color: "transparent" });
  let i = n[n.length - 1];
  i.offset !== 1 && (typeof i.offset > "u" ? i.offset = 1 : n.push({ offset: 1, color: i.color }));
  let a = 0, o = 1;
  for (let u = 0; u < n.length; u++)
    if (typeof n[u].offset > "u") {
      for (o < u && (o = u); typeof n[o].offset > "u"; )
        o++;
      n[u].offset = (n[o].offset - n[a].offset) / (o - a) * (u - a) + n[a].offset;
    } else
      a = u;
  return r === "mask" ? n.map((u) => {
    let s = (0, Fl.default)(u.color);
    return s.alpha === 0 ? { ...u, color: "rgba(0, 0, 0, 1)" } : { ...u, color: `rgba(255, 255, 255, ${s.alpha})` };
  }) : n;
}
async function Cl({ id: e, width: t, height: r, left: n, top: i }, { image: a, size: o, position: u, repeat: s }, l, f) {
  s = s || "repeat", f = f || "background";
  let c = s === "repeat-x" || s === "repeat", p = s === "repeat-y" || s === "repeat", d = va(o, { x: t, y: r, defaultX: t, defaultY: r }), D = va(u, { x: t, y: r, defaultX: 0, defaultY: 0 });
  if (a.startsWith("linear-gradient(")) {
    let v = mu.parse(a)[0], [g, y] = d, b, C, k, S, E;
    if (v.orientation.type === "directional")
      [b, C, k, S] = T1(v.orientation.value), E = Math.sqrt(Math.pow((k - b) * g, 2) + Math.pow((S - C) * y, 2));
    else if (v.orientation.type === "angular") {
      let H = function(ee) {
        if (ee = (ee % (Math.PI * 2) + Math.PI * 2) % (Math.PI * 2), Math.abs(ee - Math.PI / 2) < 1e-6) {
          b = 0, C = 0, k = 1, S = 0, E = g;
          return;
        } else if (Math.abs(ee) < 1e-6) {
          b = 0, C = 1, k = 0, S = 0, E = y;
          return;
        }
        if (ee >= Math.PI / 2 && ee < Math.PI) {
          H(Math.PI - ee), C = 1 - C, S = 1 - S;
          return;
        } else if (ee >= Math.PI) {
          H(ee - Math.PI);
          let B = b;
          b = k, k = B, B = C, C = S, S = B;
          return;
        }
        let A = Math.tan(ee), R = A * q, O = Math.atan(R), Y = Math.sqrt(2) * Math.cos(Math.PI / 4 - O);
        b = 0, C = 1, k = Math.sin(O) * Y, S = 1 - Math.cos(O) * Y;
        let Z = 1, te = 1 / A, ie = Math.abs((Z * q + te) / Math.sqrt(Z * Z + te * te) / Math.sqrt(q * q + 1));
        E = Math.sqrt(g * g + y * y) * ie;
      }, q = g / y;
      H(+v.orientation.value / 180 * Math.PI);
    }
    let L = Du(E, v.colorStops, f), T = `satori_bi${e}`, U = `satori_pattern_${e}`, M = ue("pattern", { id: U, x: D[0] / t, y: D[1] / r, width: c ? g / t : "1", height: p ? y / r : "1", patternUnits: "objectBoundingBox" }, ue("linearGradient", { id: T, x1: b, y1: C, x2: k, y2: S }, L.map((H) => ue("stop", { offset: H.offset * 100 + "%", "stop-color": H.color })).join("")) + ue("rect", { x: 0, y: 0, width: g, height: y, fill: `url(#${T})` }));
    return [U, M];
  }
  if (a.startsWith("radial-gradient(")) {
    let v = mu.parse(a)[0], g = v.orientation[0], [y, b] = d, C = "circle", k = y / 2, S = b / 2;
    if (g.type === "shape") {
      if (C = g.value, g.at)
        if (g.at.type === "position") {
          let q = A1(g.at.value.x, g.at.value.y, y, b, l.fontSize, l);
          k = q.x, S = q.y;
        } else
          throw new Error("orientation.at.type not implemented: " + g.at.type);
    } else
      throw new Error("orientation.type not implemented: " + g.type);
    let E = Du(t, v.colorStops, f), L = `satori_radial_${e}`, T = `satori_pattern_${e}`, U = `satori_mask_${e}`, M = O1(C, g.style, l.fontSize, { x: k, y: S }, [y, b], l), H = ue("pattern", { id: T, x: D[0] / t, y: D[1] / r, width: c ? y / t : "1", height: p ? b / r : "1", patternUnits: "objectBoundingBox" }, ue("radialGradient", { id: L }, E.map((q) => ue("stop", { offset: q.offset, "stop-color": q.color })).join("")) + ue("mask", { id: U }, ue("rect", { x: 0, y: 0, width: y, height: b, fill: "#fff" })) + ue("rect", { x: 0, y: 0, width: y, height: b, fill: E.at(-1).color }) + ue(C, { cx: k, cy: S, width: y, height: b, ...M, fill: `url(#${L})`, mask: `url(#${U})` }));
    return [T, H];
  }
  if (a.startsWith("url(")) {
    let v = va(o, { x: t, y: r, defaultX: 0, defaultY: 0 }), [g, y, b] = await Na(a.slice(4, -1)), C = f === "mask" ? y || v[0] : v[0] || y, k = f === "mask" ? b || v[1] : v[1] || b;
    return [`satori_bi${e}`, ue("pattern", { id: `satori_bi${e}`, patternContentUnits: "userSpaceOnUse", patternUnits: "userSpaceOnUse", x: D[0] + n, y: D[1] + i, width: c ? C : "100%", height: p ? k : "100%" }, ue("image", { x: 0, y: 0, width: C, height: k, preserveAspectRatio: "none", href: g }))];
  }
  throw new Error(`Invalid background image: "${a}"`);
}
function A1(e, t, r, n, i, a) {
  let o = { x: r / 2, y: n / 2 };
  return e.type === "position-keyword" ? Object.assign(o, yu(e.value, r, n, "x")) : o.x = Ie(`${e.value}${e.type}`, i, r, a, true), t.type === "position-keyword" ? Object.assign(o, yu(t.value, r, n, "y")) : o.y = Ie(`${t.value}${t.type}`, i, n, a, true), o;
}
function yu(e, t, r, n) {
  switch (e) {
    case "center":
      return { [n]: n === "x" ? t / 2 : r / 2 };
    case "left":
      return { x: 0 };
    case "top":
      return { y: 0 };
    case "right":
      return { x: t };
    case "bottom":
      return { y: r };
  }
}
function O1(e, t, r, n, i, a) {
  let [o, u] = i, { x: s, y: l } = n, f = {}, c = 0, p = 0;
  if (!t.some((d) => d.type === "extent-keyword")) {
    if (t.some((d) => d.value.startsWith("-")))
      throw new Error("disallow setting negative values to the size of the shape. Check https://w3c.github.io/csswg-drafts/css-images/#valdef-rg-size-length-0");
    return e === "circle" ? { r: Ie(`${t[0].value}${t[0].type}`, r, o, a, true) } : { rx: Ie(`${t[0].value}${t[0].type}`, r, o, a, true), ry: Ie(`${t[1].value}${t[1].type}`, r, u, a, true) };
  }
  switch (t[0].value) {
    case "farthest-corner":
      c = Math.max(Math.abs(o - s), Math.abs(s)), p = Math.max(Math.abs(u - l), Math.abs(l));
      break;
    case "closest-corner":
      c = Math.min(Math.abs(o - s), Math.abs(s)), p = Math.min(Math.abs(u - l), Math.abs(l));
      break;
    case "farthest-side":
      return e === "circle" ? f.r = Math.max(Math.abs(o - s), Math.abs(s), Math.abs(u - l), Math.abs(l)) : (f.rx = Math.max(Math.abs(o - s), Math.abs(s)), f.ry = Math.max(Math.abs(u - l), Math.abs(l))), f;
    case "closest-side":
      return e === "circle" ? f.r = Math.min(Math.abs(o - s), Math.abs(s), Math.abs(u - l), Math.abs(l)) : (f.rx = Math.min(Math.abs(o - s), Math.abs(s)), f.ry = Math.min(Math.abs(u - l), Math.abs(l))), f;
  }
  if (e === "circle")
    f.r = Math.sqrt(c * c + p * p);
  else {
    let d = p !== 0 ? c / p : 1;
    c === 0 ? (f.rx = 0, f.ry = 0) : (f.ry = Math.sqrt(c * c + p * p * d * d) / d, f.rx = f.ry * d);
  }
  return f;
}
function L1([e, t]) {
  return Math.round(e * 1e3) === 0 && Math.round(t * 1e3) === 0 ? 0 : Math.round(e * t / Math.sqrt(e * e + t * t) * 1e3) / 1e3;
}
function Rn(e, t, r) {
  return r < e + t && (r / 2 < e && r / 2 < t ? e = t = r / 2 : r / 2 < e ? e = r - t : r / 2 < t && (t = r - e)), [e, t];
}
function Un(e) {
  e[0] = e[1] = Math.min(e[0], e[1]);
}
function Bn(e, t, r, n, i) {
  if (typeof e == "string") {
    let a = e.split(" ").map((u) => u.trim()), o = !a[1] && !a[0].endsWith("%");
    return a[1] = a[1] || a[0], [o, [Math.min(Ie(a[0], n, t, i, true), t), Math.min(Ie(a[1], n, r, i, true), r)]];
  }
  return typeof e == "number" ? [true, [Math.min(e, t), Math.min(e, r)]] : [true, void 0];
}
var Nn = (e) => e && e[0] !== 0 && e[1] !== 0;
function qn({ left: e, top: t, width: r, height: n }, i, a) {
  let { borderTopLeftRadius: o, borderTopRightRadius: u, borderBottomLeftRadius: s, borderBottomRightRadius: l, fontSize: f } = i, c, p, d, D;
  if ([c, o] = Bn(o, r, n, f, i), [p, u] = Bn(u, r, n, f, i), [d, s] = Bn(s, r, n, f, i), [D, l] = Bn(l, r, n, f, i), !a && !Nn(o) && !Nn(u) && !Nn(s) && !Nn(l))
    return "";
  o ||= [0, 0], u ||= [0, 0], s ||= [0, 0], l ||= [0, 0], [o[0], u[0]] = Rn(o[0], u[0], r), [s[0], l[0]] = Rn(s[0], l[0], r), [o[1], s[1]] = Rn(o[1], s[1], n), [u[1], l[1]] = Rn(u[1], l[1], n), c && Un(o), p && Un(u), d && Un(s), D && Un(l);
  let v = [];
  v[0] = [u, u], v[1] = [l, [-l[0], l[1]]], v[2] = [s, [-s[0], -s[1]]], v[3] = [o, [o[0], -o[1]]];
  let g = `h${r - o[0] - u[0]} a${v[0][0]} 0 0 1 ${v[0][1]}`, y = `v${n - u[1] - l[1]} a${v[1][0]} 0 0 1 ${v[1][1]}`, b = `h${l[0] + s[0] - r} a${v[2][0]} 0 0 1 ${v[2][1]}`, C = `v${s[1] + o[1] - n} a${v[3][0]} 0 0 1 ${v[3][1]}`;
  if (a) {
    let k = function(q) {
      let ee = L1([o, u, l, s][q]);
      return q === 0 ? [[e + o[0] - ee, t + o[1] - ee], [e + o[0], t]] : q === 1 ? [[e + r - u[0] + ee, t + u[1] - ee], [e + r, t + u[1]]] : q === 2 ? [[e + r - l[0] + ee, t + n - l[1] + ee], [e + r - l[0], t + n]] : [[e + s[0] - ee, t + n - s[1] + ee], [e, t + n - s[1]]];
    }, S = a.indexOf(false);
    if (!a.includes(true))
      throw new Error("Invalid `partialSides`.");
    if (S === -1)
      S = 0;
    else
      for (; !a[S]; )
        S = (S + 1) % 4;
    let E = "", L = k(S), T = `M${L[0]} A${v[(S + 3) % 4][0]} 0 0 1 ${L[1]}`, U = 0;
    for (; U < 4 && a[(S + U) % 4]; U++)
      E += T + " ", T = [g, y, b, C][(S + U) % 4];
    let M = (S + U) % 4;
    E += T.split(" ")[0];
    let H = k(M);
    return E += ` A${v[(M + 3) % 4][0]} 0 0 1 ${H[0]}`, E;
  }
  return `M${e + o[0]},${t} ${g} ${y} ${b} ${C}`;
}
function bu(e, t, r) {
  return r[e + "Width"] === r[t + "Width"] && r[e + "Style"] === r[t + "Style"] && r[e + "Color"] === r[t + "Color"];
}
function I1({ id: e, currentClipPathId: t, borderPath: r, borderType: n, left: i, top: a, width: o, height: u }, s) {
  if (!(s.borderTopWidth || s.borderRightWidth || s.borderBottomWidth || s.borderLeftWidth))
    return null;
  let l = `satori_bc-${e}`;
  return [ue("clipPath", { id: l, "clip-path": t ? `url(#${t})` : void 0 }, ue(n, { x: i, y: a, width: o, height: u, d: r || void 0 })), l];
}
function Sl({ left: e, top: t, width: r, height: n, props: i, asContentMask: a, maskBorderOnly: o }, u) {
  let s = ["borderTop", "borderRight", "borderBottom", "borderLeft"];
  if (!a && !s.some((d) => u[d + "Width"]))
    return "";
  let l = "", f = 0;
  for (; f > 0 && bu(s[f], s[(f + 3) % 4], u); )
    f = (f + 3) % 4;
  let c = [false, false, false, false], p = [];
  for (let d = 0; d < 4; d++) {
    let D = (f + d) % 4, v = (f + d + 1) % 4, g = s[D], y = s[v];
    if (c[D] = true, p = [u[g + "Width"], u[g + "Style"], u[g + "Color"], g], !bu(g, y, u)) {
      let b = (p[0] || 0) + (a && !o && u[g.replace("border", "padding")] || 0);
      b && (l += ue("path", { width: r, height: n, ...i, fill: "none", stroke: a ? "#000" : p[2], "stroke-width": b * 2, "stroke-dasharray": !a && p[1] === "dashed" ? b * 2 + " " + b : void 0, d: qn({ left: e, top: t, width: r, height: n }, u, c) })), c = [false, false, false, false];
    }
  }
  if (c.some(Boolean)) {
    let d = (p[0] || 0) + (a && !o && u[p[3].replace("border", "padding")] || 0);
    d && (l += ue("path", { width: r, height: n, ...i, fill: "none", stroke: a ? "#000" : p[2], "stroke-width": d * 2, "stroke-dasharray": !a && p[1] === "dashed" ? d * 2 + " " + d : void 0, d: qn({ left: e, top: t, width: r, height: n }, u, c) }));
  }
  return l;
}
function P1({ id: e, left: t, top: r, width: n, height: i, matrix: a, borderOnly: o }, u) {
  let s = (u.borderLeftWidth || 0) + (o ? 0 : u.paddingLeft || 0), l = (u.borderTopWidth || 0) + (o ? 0 : u.paddingTop || 0), f = (u.borderRightWidth || 0) + (o ? 0 : u.paddingRight || 0), c = (u.borderBottomWidth || 0) + (o ? 0 : u.paddingBottom || 0), p = { x: t + s, y: r + l, width: n - s - f, height: i - l - c };
  return ue("mask", { id: e }, ue("rect", { ...p, fill: "#fff", mask: u._inheritedMaskId ? `url(#${u._inheritedMaskId})` : void 0 }) + Sl({ left: t, top: r, width: n, height: i, props: { transform: a || void 0 }, asContentMask: true, maskBorderOnly: o }, u));
}
var Zr = { circle: /circle\((.+)\)/, ellipse: /ellipse\((.+)\)/, path: /path\((.+)\)/, polygon: /polygon\((.+)\)/, inset: /inset\((.+)\)/ };
function R1({ width: e, height: t }, r, n) {
  function i(l) {
    let f = l.match(Zr.circle);
    if (!f)
      return null;
    let [, c] = f, [p, d = ""] = c.split("at").map((g) => g.trim()), { x: D, y: v } = wu(d, e, t);
    return { type: "circle", r: Ie(p, n.fontSize, Math.sqrt(Math.pow(e, 2) + Math.pow(t, 2)) / Math.sqrt(2), n, true), cx: Ie(D, n.fontSize, e, n, true), cy: Ie(v, n.fontSize, t, n, true) };
  }
  function a(l) {
    let f = l.match(Zr.ellipse);
    if (!f)
      return null;
    let [, c] = f, [p, d = ""] = c.split("at").map((b) => b.trim()), [D, v] = p.split(" "), { x: g, y } = wu(d, e, t);
    return { type: "ellipse", rx: Ie(D || "50%", n.fontSize, e, n, true), ry: Ie(v || "50%", n.fontSize, t, n, true), cx: Ie(g, n.fontSize, e, n, true), cy: Ie(y, n.fontSize, t, n, true) };
  }
  function o(l) {
    let f = l.match(Zr.path);
    if (!f)
      return null;
    let [c, p] = xu(f[1]);
    return { type: "path", d: p, "fill-rule": c };
  }
  function u(l) {
    let f = l.match(Zr.polygon);
    if (!f)
      return null;
    let [c, p] = xu(f[1]);
    return { type: "polygon", "fill-rule": c, points: p.split(",").map((d) => d.split(" ").map((D, v) => Ie(D, n.fontSize, v === 0 ? e : t, n, true)).join(" ")).join(",") };
  }
  function s(l) {
    let f = l.match(Zr.inset);
    if (!f)
      return null;
    let [c, p] = (f[1].includes("round") ? f[1] : `${f[1].trim()} round 0`).split("round"), d = (0, Ca.getStylesForProperty)("borderRadius", p, true), D = Object.values(d).map((k) => String(k)).map((k, S) => Ie(k, n.fontSize, S === 0 || S === 2 ? t : e, n, true) || 0), v = Object.values((0, Ca.getStylesForProperty)("margin", c, true)).map((k) => String(k)).map((k, S) => Ie(k, n.fontSize, S === 0 || S === 2 ? t : e, n, true) || 0), g = v[3], y = v[0], b = e - (v[1] + v[3]), C = t - (v[0] + v[2]);
    return D.some((k) => k > 0) ? { type: "path", d: qn({ left: g, top: y, width: b, height: C }, { ...r, ...d }) } : { type: "rect", x: g, y, width: b, height: C };
  }
  return { parseCircle: i, parseEllipse: a, parsePath: o, parsePolygon: u, parseInset: s };
}
function xu(e) {
  let [, t = "nonzero", r] = e.replace(/('|")/g, "").match(/^(nonzero|evenodd)?,?(.+)/) || [];
  return [t, r];
}
function wu(e, t, r) {
  let n = e.split(" "), i = { x: n[0] || "50%", y: n[1] || "50%" };
  return n.forEach((a) => {
    a === "top" ? i.y = 0 : a === "bottom" ? i.y = r : a === "left" ? i.x = 0 : a === "right" ? i.x = t : a === "center" && (i.x = t / 2, i.y = r / 2);
  }), i;
}
function Wa(e) {
  return `satori_cp-${e}`;
}
function U1(e) {
  return `url(#${Wa(e)})`;
}
function B1(e, t, r) {
  if (t.clipPath === "none")
    return "";
  let n = R1(e, t, r), i = t.clipPath, a = { type: "" };
  for (let o of Object.keys(n))
    if (a = n[o](i), a)
      break;
  if (a) {
    let { type: o, ...u } = a;
    return ue("clipPath", { id: Wa(e.id), "clip-path": e.currentClipPath, transform: `translate(${e.left}, ${e.top})` }, ue(o, u));
  }
  return "";
}
function N1({ left: e, top: t, width: r, height: n, path: i, matrix: a, id: o, currentClipPath: u, src: s }, l, f) {
  let c = "", p = l.clipPath && l.clipPath !== "none" ? B1({ left: e, top: t, width: r, height: n, path: i, id: o, matrix: a, currentClipPath: u, src: s }, l, f) : "";
  if (l.overflow !== "hidden" && !s)
    c = "";
  else {
    let D = p ? `satori_ocp-${o}` : Wa(o);
    c = ue("clipPath", { id: D, "clip-path": u }, ue(i ? "path" : "rect", { x: e, y: t, width: r, height: n, d: i || void 0 }));
  }
  let d = P1({ id: `satori_om-${o}`, left: e, top: t, width: r, height: n, matrix: a, borderOnly: !s }, l);
  return p + c + d;
}
var M1 = (e) => `satori_mi-${e}`;
async function G1(e, t, r) {
  if (!t.maskImage)
    return ["", ""];
  let { left: n, top: i, width: a, height: o, id: u } = e, s = t.maskImage, l = s.length;
  if (!l)
    return ["", ""];
  let f = M1(u), c = "";
  for (let p = 0; p < l; p++) {
    let d = s[p], [D, v] = await Cl({ id: `${f}-${p}`, left: n, top: i, width: a, height: o }, d, r, "mask");
    c += v + ue("rect", { x: 0, y: 0, width: a, height: o, fill: `url(#${D})` });
  }
  return c = ue("mask", { id: f }, c), [f, c];
}
async function ga({ id: e, left: t, top: r, width: n, height: i, isInheritingTransform: a, src: o, debug: u }, s, l) {
  if (s.display === "none")
    return "";
  let f = !!o, c = "rect", p = "", d = "", D = [], v = 1, g = "";
  s.backgroundColor && D.push(s.backgroundColor), s.opacity !== void 0 && (v = +s.opacity), s.transform && (p = wl({ left: t, top: r, width: n, height: i }, s.transform, a, s.transformOrigin));
  let y = "";
  if (s.backgroundImage) {
    let A = [];
    for (let R = 0; R < s.backgroundImage.length; R++) {
      let O = s.backgroundImage[R], Y = await Cl({ id: e + "_" + R, width: n, height: i, left: t, top: r }, O, l);
      Y && A.unshift(Y);
    }
    for (let R of A)
      D.push(`url(#${R[0]})`), d += R[1], R[2] && (y += R[2]);
  }
  let [b, C] = await G1({ id: e, left: t, top: r, width: n, height: i }, s, l);
  d += C;
  let k = b ? `url(#${b})` : s._inheritedMaskId ? `url(#${s._inheritedMaskId})` : void 0, S = qn({ left: t, top: r, width: n, height: i }, s);
  S && (c = "path");
  let E = s._inheritedClipPathId;
  u && (g = ue("rect", { x: t, y: r, width: n, height: i, fill: "transparent", stroke: "#ff5757", "stroke-width": 1, transform: p || void 0, "clip-path": E ? `url(#${E})` : void 0 }));
  let { backgroundClip: L, filter: T } = s, U = L === "text" ? `url(#satori_bct-${e})` : E ? `url(#${E})` : s.clipPath ? U1(e) : void 0, M = N1({ left: t, top: r, width: n, height: i, path: S, id: e, matrix: p, currentClipPath: U, src: o }, s, l), H = D.map((A) => ue(c, { x: t, y: r, width: n, height: i, fill: A, d: S || void 0, transform: p || void 0, "clip-path": U, style: T ? `filter:${T}` : void 0, mask: k })).join(""), q = I1({ id: e, left: t, top: r, width: n, height: i, currentClipPathId: E, borderPath: S, borderType: c }, s);
  if (f) {
    let A = (s.borderLeftWidth || 0) + (s.paddingLeft || 0), R = (s.borderTopWidth || 0) + (s.paddingTop || 0), O = (s.borderRightWidth || 0) + (s.paddingRight || 0), Y = (s.borderBottomWidth || 0) + (s.paddingBottom || 0), Z = s.objectFit === "contain" ? "xMidYMid" : s.objectFit === "cover" ? "xMidYMid slice" : "none";
    H += ue("image", { x: t + A, y: r + R, width: n - A - O, height: i - R - Y, href: o, preserveAspectRatio: Z, transform: p || void 0, style: T ? `filter:${T}` : void 0, "clip-path": `url(#satori_cp-${e})`, mask: b ? `url(#${b})` : `url(#satori_om-${e})` });
  }
  if (q) {
    d += q[0];
    let A = q[1];
    H += Sl({ left: t, top: r, width: n, height: i, props: { transform: p || void 0, "clip-path": `url(#${A})` } }, s);
  }
  let ee = h1({ width: n, height: i, id: e, opacity: v, shape: ue(c, { x: t, y: r, width: n, height: i, fill: "#fff", stroke: "#fff", "stroke-width": 0, d: S || void 0, transform: p || void 0, "clip-path": U, mask: k }) }, s);
  return (d ? ue("defs", {}, d) : "") + (ee ? ee[0] : "") + M + (v !== 1 ? `<g opacity="${v}">` : "") + (y || H) + (v !== 1 ? "</g>" : "") + (ee ? ee[1] : "") + g;
}
var W1 = () => /[#*0-9]\uFE0F?\u20E3|[\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23ED-\u23EF\u23F1\u23F2\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB\u25FC\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u265F\u2660\u2663\u2665\u2666\u2668\u267B\u267E\u267F\u2692\u2694-\u2697\u2699\u269B\u269C\u26A0\u26A7\u26AA\u26B0\u26B1\u26BD\u26BE\u26C4\u26C8\u26CF\u26D1\u26D3\u26E9\u26F0-\u26F5\u26F7\u26F8\u26FA\u2702\u2708\u2709\u270F\u2712\u2714\u2716\u271D\u2721\u2733\u2734\u2744\u2747\u2757\u2763\u27A1\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B55\u3030\u303D\u3297\u3299]\uFE0F?|[\u261D\u270C\u270D](?:\uFE0F|\uD83C[\uDFFB-\uDFFF])?|[\u270A\u270B](?:\uD83C[\uDFFB-\uDFFF])?|[\u23E9-\u23EC\u23F0\u23F3\u25FD\u2693\u26A1\u26AB\u26C5\u26CE\u26D4\u26EA\u26FD\u2705\u2728\u274C\u274E\u2753-\u2755\u2795-\u2797\u27B0\u27BF\u2B50]|\u26F9(?:\uFE0F|\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|\u2764\uFE0F?(?:\u200D(?:\uD83D\uDD25|\uD83E\uDE79))?|\uD83C(?:[\uDC04\uDD70\uDD71\uDD7E\uDD7F\uDE02\uDE37\uDF21\uDF24-\uDF2C\uDF36\uDF7D\uDF96\uDF97\uDF99-\uDF9B\uDF9E\uDF9F\uDFCD\uDFCE\uDFD4-\uDFDF\uDFF5\uDFF7]\uFE0F?|[\uDF85\uDFC2\uDFC7](?:\uD83C[\uDFFB-\uDFFF])?|[\uDFC3\uDFC4\uDFCA](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDFCB\uDFCC](?:\uFE0F|\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDCCF\uDD8E\uDD91-\uDD9A\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF84\uDF86-\uDF93\uDFA0-\uDFC1\uDFC5\uDFC6\uDFC8\uDFC9\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF8-\uDFFF]|\uDDE6\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF]|\uDDE7\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF]|\uDDE8\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF]|\uDDE9\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF]|\uDDEA\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA]|\uDDEB\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7]|\uDDEC\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE]|\uDDED\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA]|\uDDEE\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9]|\uDDEF\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5]|\uDDF0\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF]|\uDDF1\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE]|\uDDF2\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF]|\uDDF3\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF]|\uDDF4\uD83C\uDDF2|\uDDF5\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE]|\uDDF6\uD83C\uDDE6|\uDDF7\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC]|\uDDF8\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF]|\uDDF9\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF]|\uDDFA\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF]|\uDDFB\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA]|\uDDFC\uD83C[\uDDEB\uDDF8]|\uDDFD\uD83C\uDDF0|\uDDFE\uD83C[\uDDEA\uDDF9]|\uDDFF\uD83C[\uDDE6\uDDF2\uDDFC]|\uDFF3\uFE0F?(?:\u200D(?:\u26A7\uFE0F?|\uD83C\uDF08))?|\uDFF4(?:\u200D\u2620\uFE0F?|\uDB40\uDC67\uDB40\uDC62\uDB40(?:\uDC65\uDB40\uDC6E\uDB40\uDC67|\uDC73\uDB40\uDC63\uDB40\uDC74|\uDC77\uDB40\uDC6C\uDB40\uDC73)\uDB40\uDC7F)?)|\uD83D(?:[\uDC08\uDC26](?:\u200D\u2B1B)?|[\uDC3F\uDCFD\uDD49\uDD4A\uDD6F\uDD70\uDD73\uDD76-\uDD79\uDD87\uDD8A-\uDD8D\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA\uDECB\uDECD-\uDECF\uDEE0-\uDEE5\uDEE9\uDEF0\uDEF3]\uFE0F?|[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC6B-\uDC6D\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDC8F\uDC91\uDCAA\uDD7A\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC](?:\uD83C[\uDFFB-\uDFFF])?|[\uDC6E\uDC70\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDD74\uDD90](?:\uFE0F|\uD83C[\uDFFB-\uDFFF])?|[\uDC00-\uDC07\uDC09-\uDC14\uDC16-\uDC25\uDC27-\uDC3A\uDC3C-\uDC3E\uDC40\uDC44\uDC45\uDC51-\uDC65\uDC6A\uDC79-\uDC7B\uDC7D-\uDC80\uDC84\uDC88-\uDC8E\uDC90\uDC92-\uDCA9\uDCAB-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDDA4\uDDFB-\uDE2D\uDE2F-\uDE34\uDE37-\uDE44\uDE48-\uDE4A\uDE80-\uDEA2\uDEA4-\uDEB3\uDEB7-\uDEBF\uDEC1-\uDEC5\uDED0-\uDED2\uDED5-\uDED7\uDEDC-\uDEDF\uDEEB\uDEEC\uDEF4-\uDEFC\uDFE0-\uDFEB\uDFF0]|\uDC15(?:\u200D\uD83E\uDDBA)?|\uDC3B(?:\u200D\u2744\uFE0F?)?|\uDC41\uFE0F?(?:\u200D\uD83D\uDDE8\uFE0F?)?|\uDC68(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDC68\uDC69]\u200D\uD83D(?:\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?)|[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?)|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFC-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB\uDFFD-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB-\uDFFD\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB-\uDFFE])))?))?|\uDC69(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?[\uDC68\uDC69]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?|\uDC69\u200D\uD83D(?:\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?))|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFC-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB\uDFFD-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB-\uDFFD\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB-\uDFFE])))?))?|\uDC6F(?:\u200D[\u2640\u2642]\uFE0F?)?|\uDD75(?:\uFE0F|\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|\uDE2E(?:\u200D\uD83D\uDCA8)?|\uDE35(?:\u200D\uD83D\uDCAB)?|\uDE36(?:\u200D\uD83C\uDF2B\uFE0F?)?)|\uD83E(?:[\uDD0C\uDD0F\uDD18-\uDD1F\uDD30-\uDD34\uDD36\uDD77\uDDB5\uDDB6\uDDBB\uDDD2\uDDD3\uDDD5\uDEC3-\uDEC5\uDEF0\uDEF2-\uDEF8](?:\uD83C[\uDFFB-\uDFFF])?|[\uDD26\uDD35\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD4\uDDD6-\uDDDD](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDDDE\uDDDF](?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDD0D\uDD0E\uDD10-\uDD17\uDD20-\uDD25\uDD27-\uDD2F\uDD3A\uDD3F-\uDD45\uDD47-\uDD76\uDD78-\uDDB4\uDDB7\uDDBA\uDDBC-\uDDCC\uDDD0\uDDE0-\uDDFF\uDE70-\uDE7C\uDE80-\uDE88\uDE90-\uDEBD\uDEBF-\uDEC2\uDECE-\uDEDB\uDEE0-\uDEE8]|\uDD3C(?:\u200D[\u2640\u2642]\uFE0F?|\uD83C[\uDFFB-\uDFFF])?|\uDDD1(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83E\uDDD1))|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFC-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB\uDFFD-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB-\uDFFD\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB-\uDFFE]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?))?|\uDEF1(?:\uD83C(?:\uDFFB(?:\u200D\uD83E\uDEF2\uD83C[\uDFFC-\uDFFF])?|\uDFFC(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB\uDFFD-\uDFFF])?|\uDFFD(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])?|\uDFFE(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB-\uDFFD\uDFFF])?|\uDFFF(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB-\uDFFE])?))?)/g;
var $1 = new RegExp(W1(), "");
var Sa = { emoji: $1, symbol: /\p{Symbol}/u, math: /\p{Math}/u };
var ka = { "ja-JP": /\p{scx=Hira}|\p{scx=Kana}|\p{scx=Han}|[\u3000]|[\uFF00-\uFFEF]/u, "ko-KR": /\p{scx=Hangul}/u, "zh-CN": /\p{scx=Han}/u, "zh-TW": /\p{scx=Han}/u, "zh-HK": /\p{scx=Han}/u, "th-TH": /\p{scx=Thai}/u, "bn-IN": /\p{scx=Bengali}/u, "ar-AR": /\p{scx=Arabic}/u, "ta-IN": /\p{scx=Tamil}/u, "ml-IN": /\p{scx=Malayalam}/u, "he-IL": /\p{scx=Hebrew}/u, "te-IN": /\p{scx=Telugu}/u, devanagari: /\p{scx=Devanagari}/u, kannada: /\p{scx=Kannada}/u };
var $a = Object.keys({ ...ka, ...Sa });
function j1(e) {
  return $a.includes(e);
}
function z1(e, t) {
  for (let n of Object.keys(Sa))
    if (Sa[n].test(e))
      return [n];
  let r = Object.keys(ka).filter((n) => ka[n].test(e));
  if (r.length === 0)
    return ["unknown"];
  if (t) {
    let n = r.findIndex((i) => i === t);
    n !== -1 && (r.splice(n, 1), r.unshift(t));
  }
  return r;
}
function V1(e) {
  if (e)
    return $a.find((t) => t.toLowerCase().startsWith(e.toLowerCase()));
}
async function* Ta(e, t) {
  var r;
  let n = await Kn(), { id: i, inheritedStyle: a, parent: o, font: u, debug: s, locale: l, embedFont: f = true, graphemeImages: c, canLoadAdditionalAssets: p, getTwStyles: d } = t;
  if (e === null || typeof e > "u")
    return yield, yield, "";
  if (!jn(e) || typeof e.type == "function") {
    let N;
    if (!jn(e))
      N = F1(String(e), t), yield (await N.next()).value;
    else {
      if (kg(e.type))
        throw new Error("Class component is not supported.");
      N = Ta(e.type(e.props), t), yield (await N.next()).value;
    }
    await N.next();
    let ae = yield;
    return (await N.next(ae)).value;
  }
  let { type: D, props: v } = e;
  if (v && Tg(v))
    throw new Error("dangerouslySetInnerHTML property is not supported. See documentation for more information https://github.com/vercel/satori#jsx.");
  let { style: g, children: y, tw: b, lang: C = l } = v || {}, k = V1(C);
  if (b) {
    let N = d(b, g);
    g = Object.assign(N, g);
  }
  let S = n.Node.create();
  o.insertChild(S, o.getChildCount());
  let [E, L] = await s1(S, D, a, g, v), T = E.transform === a.transform;
  if (T || (E.transform.__parent = a.transform), (E.overflow === "hidden" || E.clipPath && E.clipPath !== "none") && (L._inheritedClipPathId = `satori_cp-${i}`, L._inheritedMaskId = `satori_om-${i}`), E.maskImage && (L._inheritedMaskId = `satori_mi-${i}`), E.backgroundClip === "text") {
    let N = { value: "" };
    L._inheritedBackgroundClipTextPath = N, E._inheritedBackgroundClipTextPath = N;
  }
  let U = _g(y), M = [], H = 0, q = [];
  for (let N of U) {
    let ae = Ta(N, { id: i + "-" + H++, parentStyle: E, inheritedStyle: L, isInheritingTransform: true, parent: S, font: u, embedFont: f, debug: s, graphemeImages: c, canLoadAdditionalAssets: p, locale: k, getTwStyles: d, onNodeDetected: t.onNodeDetected });
    p ? q.push(...(await ae.next()).value || []) : await ae.next(), M.push(ae);
  }
  yield q;
  for (let N of M)
    await N.next();
  let [ee, A] = yield, { left: R, top: O, width: Y, height: Z } = S.getComputedLayout();
  R += ee, O += A;
  let te = "", ie = "", B = "", { children: z, ..._ } = v;
  if ((r = t.onNodeDetected) == null || r.call(t, { left: R, top: O, width: Y, height: Z, type: D, props: _, key: e.key, textContent: jn(z) ? void 0 : z }), D === "img") {
    let N = E.__src;
    ie = await ga({ id: i, left: R, top: O, width: Y, height: Z, src: N, isInheritingTransform: T, debug: s }, E, L);
  } else if (D === "svg") {
    let N = E.color, ae = await Hg(e, N);
    ie = await ga({ id: i, left: R, top: O, width: Y, height: Z, src: ae, isInheritingTransform: T, debug: s }, E, L);
  } else {
    let N = g?.display;
    if (D === "div" && y && typeof y != "string" && N !== "flex" && N !== "none")
      throw new Error('Expected <div> to have explicit "display: flex" or "display: none" if it has more than one child node.');
    ie = await ga({ id: i, left: R, top: O, width: Y, height: Z, isInheritingTransform: T, debug: s }, E, L);
  }
  for (let N of M)
    te += (await N.next([R, O])).value;
  return E._inheritedBackgroundClipTextPath && (B += ue("clipPath", { id: `satori_bct-${i}`, "clip-path": E._inheritedClipPathId ? `url(#${E._inheritedClipPathId})` : void 0 }, E._inheritedBackgroundClipTextPath.value)), B + ie + te;
}
var kl = "unknown";
function H1(e, t, [r, n], [i, a]) {
  if (r !== i)
    return r ? !i || r === e ? -1 : i === e ? 1 : e === 400 && r === 500 || e === 500 && r === 400 ? -1 : e === 400 && i === 500 || e === 500 && i === 400 ? 1 : e < 400 ? r < e && i < e ? i - r : r < e ? -1 : i < e ? 1 : r - i : e < r && e < i ? r - i : e < r ? -1 : e < i ? 1 : i - r : 1;
  if (n !== a) {
    if (n === t)
      return -1;
    if (a === t)
      return 1;
  }
  return -1;
}
var X1 = class {
  defaultFont;
  fonts = /* @__PURE__ */ new Map();
  constructor(e) {
    this.addFonts(e);
  }
  get({ name: e, weight: t, style: r }) {
    if (!this.fonts.has(e))
      return null;
    t === "normal" && (t = 400), t === "bold" && (t = 700), typeof t == "string" && (t = Number.parseInt(t, 10));
    let n = [...this.fonts.get(e)], i = n[0];
    for (let a = 1; a < n.length; a++) {
      let [, o, u] = i, [, s, l] = n[a];
      H1(t, r, [o, u], [s, l]) > 0 && (i = n[a]);
    }
    return i[0];
  }
  addFonts(e) {
    for (let t of e) {
      let { name: r, data: n, lang: i } = t;
      if (i && !j1(i))
        throw new Error(`Invalid value for props \`lang\`: "${i}". The value must be one of the following: ${$a.join(", ")}.`);
      let a = i ?? kl, o = Ln.parse("buffer" in n ? n.buffer.slice(n.byteOffset, n.byteOffset + n.byteLength) : n, { lowMemory: true }), u = o.charToGlyphIndex;
      o.charToGlyphIndex = (l) => {
        let f = u.call(o, l);
        return f === 0 && o._trackBrokenChars && o._trackBrokenChars.push(l), f;
      }, this.defaultFont || (this.defaultFont = o);
      let s = `${r.toLowerCase()}_${a}`;
      this.fonts.has(s) || this.fonts.set(s, []), this.fonts.get(s).push([o, t.weight, t.style]);
    }
  }
  getEngine(e = 16, t = 1.2, { fontFamily: r = "sans-serif", fontWeight: n = 400, fontStyle: i = "normal" }, a) {
    if (!this.fonts.size)
      throw new Error("No fonts are loaded. At least one font is required to calculate the layout.");
    r = (Array.isArray(r) ? r : [r]).map((y) => y.toLowerCase());
    let o = [];
    r.forEach((y) => {
      let b = this.get({ name: y, weight: n, style: i });
      if (b) {
        o.push(b);
        return;
      }
      let C = this.get({ name: y + "_unknown", weight: n, style: i });
      if (C) {
        o.push(C);
        return;
      }
    });
    let u = Array.from(this.fonts.keys()), s = [], l = [], f = [];
    for (let y of u)
      if (!r.includes(y))
        if (a) {
          let b = q1(y);
          b ? b === a ? s.push(this.get({ name: y, weight: n, style: i })) : l.push(this.get({ name: y, weight: n, style: i })) : f.push(this.get({ name: y, weight: n, style: i }));
        } else
          f.push(this.get({ name: y, weight: n, style: i }));
    let c = /* @__PURE__ */ new Map(), p = (y, b = true) => {
      let C = [...o, ...f, ...s, ...b ? l : []];
      if (typeof y > "u")
        return b ? C[C.length - 1] : void 0;
      let k = y.charCodeAt(0);
      if (c.has(k))
        return c.get(k);
      let S = C.find((E, L) => !!E.charToGlyphIndex(y) || b && L === C.length - 1);
      return S && c.set(k, S), S;
    }, d = (y, b = false) => {
      var C, k;
      return ((b ? (k = (C = y.tables) == null ? void 0 : C.os2) == null ? void 0 : k.sTypoAscender : 0) || y.ascender) / y.unitsPerEm * e;
    }, D = (y, b = false) => {
      var C, k;
      return ((b ? (k = (C = y.tables) == null ? void 0 : C.os2) == null ? void 0 : k.sTypoDescender : 0) || y.descender) / y.unitsPerEm * e;
    }, v = (y) => p(y, false), g = { has: (y) => {
      if (y === `
`)
        return true;
      let b = v(y);
      return b ? (b._trackBrokenChars = [], b.stringToGlyphs(y), b._trackBrokenChars.length ? (b._trackBrokenChars = void 0, false) : true) : false;
    }, baseline: (y, b = typeof y > "u" ? o[0] : p(y)) => {
      let C = d(b, true), k = D(b, true), S = g.height(y, b), { yMax: E, yMin: L } = b.tables.head, T = C - k, U = (E / (E - L) - 1) * T;
      return S * ((1.2 / t + 1) / 2) + U;
    }, height: (y, b = typeof y > "u" ? o[0] : p(y)) => (d(b) - D(b)) * (t / 1.2), measure: (y, b) => this.measure(p, y, b), getSVG: (y, b) => this.getSVG(p, y, b) };
    return g;
  }
  patchFontFallbackResolver(e, t) {
    let r = [];
    e._trackBrokenChars = r;
    let n = e.stringToGlyphs;
    return e.stringToGlyphs = (i, ...a) => {
      let o = n.call(e, i, ...a);
      for (let u = 0; u < o.length; u++)
        if (o[u].unicode === void 0) {
          let s = r.shift(), l = t(s);
          if (l !== e) {
            let f = l.charToGlyph(s), c = e.unitsPerEm / l.unitsPerEm, p = new Ln.Path();
            p.unitsPerEm = e.unitsPerEm, p.commands = f.path.commands.map((D) => {
              let v = { ...D };
              for (let g in v)
                typeof v[g] == "number" && (v[g] *= c);
              return v;
            });
            let d = new Ln.Glyph({ ...f, advanceWidth: f.advanceWidth * c, xMin: f.xMin * c, xMax: f.xMax * c, yMin: f.yMin * c, yMax: f.yMax * c, path: p });
            o[u] = d;
          }
        }
      return o;
    }, () => {
      e.stringToGlyphs = n, e._trackBrokenChars = void 0;
    };
  }
  measure(e, t, { fontSize: r, letterSpacing: n = 0 }) {
    let i = e(t), a = this.patchFontFallbackResolver(i, e);
    try {
      return i.getAdvanceWidth(t, r, { letterSpacing: n / r });
    } finally {
      a();
    }
  }
  getSVG(e, t, { fontSize: r, top: n, left: i, letterSpacing: a = 0 }) {
    let o = e(t), u = this.patchFontFallbackResolver(o, e);
    try {
      return r === 0 ? "" : o.getPath(t.replace(/\n/g, ""), i, n, r, { letterSpacing: a / r }).toPathData(1);
    } finally {
      u();
    }
  }
};
function q1(e) {
  let t = e.split("_"), r = t[t.length - 1];
  return r === kl ? void 0 : r;
}
function Y1({ width: e, height: t, content: r }) {
  return ue("svg", { width: e, height: t, viewBox: `0 0 ${e} ${t}`, xmlns: "http://www.w3.org/2000/svg" }, r);
}
var Z1 = Iv(vg());
var J1 = ["ios", "android", "windows", "macos", "web"];
function K1(e) {
  return J1.includes(e);
}
var Q1 = ["portrait", "landscape"];
function em(e) {
  return Q1.includes(e);
}
var Eu;
(function(e) {
  e.fontSize = "fontSize", e.lineHeight = "lineHeight";
})(Eu || (Eu = {}));
var Re;
(function(e) {
  e.rem = "rem", e.em = "em", e.px = "px", e.percent = "%", e.vw = "vw", e.vh = "vh", e.none = "<no-css-unit>";
})(Re || (Re = {}));
function Fu(e) {
  return typeof e == "string";
}
function Cu(e) {
  return typeof e == "object";
}
var ma;
function V(e) {
  return { kind: "complete", style: e };
}
function Ft(e, t = {}) {
  let { fractions: r } = t;
  if (r && e.includes("/")) {
    let [a = "", o = ""] = e.split("/", 2), u = Ft(a), s = Ft(o);
    return !u || !s ? null : [u[0] / s[0], s[1]];
  }
  let n = parseFloat(e);
  if (Number.isNaN(n))
    return null;
  let i = e.match(/(([a-z]{2,}|%))$/);
  if (!i)
    return [n, Re.none];
  switch (i?.[1]) {
    case "rem":
      return [n, Re.rem];
    case "px":
      return [n, Re.px];
    case "em":
      return [n, Re.em];
    case "%":
      return [n, Re.percent];
    case "vw":
      return [n, Re.vw];
    case "vh":
      return [n, Re.vh];
    default:
      return null;
  }
}
function an(e, t, r = {}) {
  let n = yr(t, r);
  return n === null ? null : V({ [e]: n });
}
function Da(e, t, r) {
  let n = yr(t);
  return n !== null && (r[e] = n), r;
}
function tm(e, t) {
  let r = yr(t);
  return r === null ? null : { [e]: r };
}
function yr(e, t = {}) {
  if (e === void 0)
    return null;
  let r = Ft(String(e), t);
  return r ? on(...r, t) : null;
}
function on(e, t, r = {}) {
  let { isNegative: n, device: i } = r;
  switch (t) {
    case Re.rem:
      return e * 16 * (n ? -1 : 1);
    case Re.px:
      return e * (n ? -1 : 1);
    case Re.percent:
      return `${n ? "-" : ""}${e}%`;
    case Re.none:
      return e * (n ? -1 : 1);
    case Re.vw:
      return i != null && i.windowDimensions ? i.windowDimensions.width * (e / 100) : (Kt("`vw` CSS unit requires configuration with `useDeviceContext()`"), null);
    case Re.vh:
      return i != null && i.windowDimensions ? i.windowDimensions.height * (e / 100) : (Kt("`vh` CSS unit requires configuration with `useDeviceContext()`"), null);
    default:
      return null;
  }
}
function Su(e) {
  let t = Ft(e);
  if (!t)
    return null;
  let [r, n] = t;
  switch (n) {
    case Re.rem:
      return r * 16;
    case Re.px:
      return r;
    default:
      return null;
  }
}
var rm = { t: "Top", tr: "TopRight", tl: "TopLeft", b: "Bottom", br: "BottomRight", bl: "BottomLeft", l: "Left", r: "Right", x: "Horizontal", y: "Vertical" };
function Tl(e) {
  return rm[e ?? ""] || "All";
}
function _l(e) {
  let t = "All";
  return [e.replace(/^-(t|b|r|l|tr|tl|br|bl)(-|$)/, (r, n) => (t = Tl(n), "")), t];
}
function ii(e, t = {}) {
  if (e.includes("/")) {
    let r = ku(e, { ...t, fractions: true });
    if (r)
      return r;
  }
  return e[0] === "[" && (e = e.slice(1, -1)), ku(e, t);
}
function br(e, t, r = {}) {
  let n = ii(t, r);
  return n === null ? null : V({ [e]: n });
}
function ku(e, t = {}) {
  if (e === "px")
    return 1;
  let r = Ft(e, t);
  if (!r)
    return null;
  let [n, i] = r;
  return t.fractions && (i = Re.percent, n *= 100), i === Re.none && (n = n / 4, i = Re.rem), on(n, i, t);
}
function nm(...e) {
  console.warn(...e);
}
function im(...e) {
}
var Kt = typeof process > "u" || ((ma = process == null ? void 0 : process.env) === null || ma === void 0 ? void 0 : ma.JEST_WORKER_ID) === void 0 ? nm : im;
var am = [["aspect-square", V({ aspectRatio: 1 })], ["aspect-video", V({ aspectRatio: 16 / 9 })], ["items-center", V({ alignItems: "center" })], ["items-start", V({ alignItems: "flex-start" })], ["items-end", V({ alignItems: "flex-end" })], ["items-baseline", V({ alignItems: "baseline" })], ["items-stretch", V({ alignItems: "stretch" })], ["justify-start", V({ justifyContent: "flex-start" })], ["justify-end", V({ justifyContent: "flex-end" })], ["justify-center", V({ justifyContent: "center" })], ["justify-between", V({ justifyContent: "space-between" })], ["justify-around", V({ justifyContent: "space-around" })], ["justify-evenly", V({ justifyContent: "space-evenly" })], ["content-start", V({ alignContent: "flex-start" })], ["content-end", V({ alignContent: "flex-end" })], ["content-between", V({ alignContent: "space-between" })], ["content-around", V({ alignContent: "space-around" })], ["content-stretch", V({ alignContent: "stretch" })], ["content-center", V({ alignContent: "center" })], ["self-auto", V({ alignSelf: "auto" })], ["self-start", V({ alignSelf: "flex-start" })], ["self-end", V({ alignSelf: "flex-end" })], ["self-center", V({ alignSelf: "center" })], ["self-stretch", V({ alignSelf: "stretch" })], ["self-baseline", V({ alignSelf: "baseline" })], ["direction-inherit", V({ direction: "inherit" })], ["direction-ltr", V({ direction: "ltr" })], ["direction-rtl", V({ direction: "rtl" })], ["hidden", V({ display: "none" })], ["flex", V({ display: "flex" })], ["flex-row", V({ flexDirection: "row" })], ["flex-row-reverse", V({ flexDirection: "row-reverse" })], ["flex-col", V({ flexDirection: "column" })], ["flex-col-reverse", V({ flexDirection: "column-reverse" })], ["flex-wrap", V({ flexWrap: "wrap" })], ["flex-wrap-reverse", V({ flexWrap: "wrap-reverse" })], ["flex-nowrap", V({ flexWrap: "nowrap" })], ["flex-auto", V({ flexGrow: 1, flexShrink: 1, flexBasis: "auto" })], ["flex-initial", V({ flexGrow: 0, flexShrink: 1, flexBasis: "auto" })], ["flex-none", V({ flexGrow: 0, flexShrink: 0, flexBasis: "auto" })], ["overflow-hidden", V({ overflow: "hidden" })], ["overflow-visible", V({ overflow: "visible" })], ["overflow-scroll", V({ overflow: "scroll" })], ["absolute", V({ position: "absolute" })], ["relative", V({ position: "relative" })], ["italic", V({ fontStyle: "italic" })], ["not-italic", V({ fontStyle: "normal" })], ["oldstyle-nums", Jr("oldstyle-nums")], ["small-caps", Jr("small-caps")], ["lining-nums", Jr("lining-nums")], ["tabular-nums", Jr("tabular-nums")], ["proportional-nums", Jr("proportional-nums")], ["font-thin", V({ fontWeight: "100" })], ["font-100", V({ fontWeight: "100" })], ["font-extralight", V({ fontWeight: "200" })], ["font-200", V({ fontWeight: "200" })], ["font-light", V({ fontWeight: "300" })], ["font-300", V({ fontWeight: "300" })], ["font-normal", V({ fontWeight: "normal" })], ["font-400", V({ fontWeight: "400" })], ["font-medium", V({ fontWeight: "500" })], ["font-500", V({ fontWeight: "500" })], ["font-semibold", V({ fontWeight: "600" })], ["font-600", V({ fontWeight: "600" })], ["font-bold", V({ fontWeight: "bold" })], ["font-700", V({ fontWeight: "700" })], ["font-extrabold", V({ fontWeight: "800" })], ["font-800", V({ fontWeight: "800" })], ["font-black", V({ fontWeight: "900" })], ["font-900", V({ fontWeight: "900" })], ["include-font-padding", V({ includeFontPadding: true })], ["remove-font-padding", V({ includeFontPadding: false })], ["max-w-none", V({ maxWidth: "99999%" })], ["text-left", V({ textAlign: "left" })], ["text-center", V({ textAlign: "center" })], ["text-right", V({ textAlign: "right" })], ["text-justify", V({ textAlign: "justify" })], ["text-auto", V({ textAlign: "auto" })], ["underline", V({ textDecorationLine: "underline" })], ["line-through", V({ textDecorationLine: "line-through" })], ["no-underline", V({ textDecorationLine: "none" })], ["uppercase", V({ textTransform: "uppercase" })], ["lowercase", V({ textTransform: "lowercase" })], ["capitalize", V({ textTransform: "capitalize" })], ["normal-case", V({ textTransform: "none" })], ["w-auto", V({ width: "auto" })], ["h-auto", V({ height: "auto" })], ["shadow-sm", V({ shadowOffset: { width: 1, height: 1 }, shadowColor: "#000", shadowRadius: 1, shadowOpacity: 0.025, elevation: 1 })], ["shadow", V({ shadowOffset: { width: 1, height: 1 }, shadowColor: "#000", shadowRadius: 1, shadowOpacity: 0.075, elevation: 2 })], ["shadow-md", V({ shadowOffset: { width: 1, height: 1 }, shadowColor: "#000", shadowRadius: 3, shadowOpacity: 0.125, elevation: 3 })], ["shadow-lg", V({ shadowOffset: { width: 1, height: 1 }, shadowColor: "#000", shadowOpacity: 0.15, shadowRadius: 8, elevation: 8 })], ["shadow-xl", V({ shadowOffset: { width: 1, height: 1 }, shadowColor: "#000", shadowOpacity: 0.19, shadowRadius: 20, elevation: 12 })], ["shadow-2xl", V({ shadowOffset: { width: 1, height: 1 }, shadowColor: "#000", shadowOpacity: 0.25, shadowRadius: 30, elevation: 16 })], ["shadow-none", V({ shadowOffset: { width: 0, height: 0 }, shadowColor: "#000", shadowRadius: 0, shadowOpacity: 0, elevation: 0 })]];
var Tu = am;
function Jr(e) {
  return { kind: "dependent", complete(t) {
    (!t.fontVariant || !Array.isArray(t.fontVariant)) && (t.fontVariant = []), t.fontVariant.push(e);
  } };
}
var om = class {
  constructor(e) {
    this.ir = new Map(Tu), this.styles = /* @__PURE__ */ new Map(), this.prefixes = /* @__PURE__ */ new Map(), this.ir = new Map([...Tu, ...e ?? []]);
  }
  getStyle(e) {
    return this.styles.get(e);
  }
  setStyle(e, t) {
    this.styles.set(e, t);
  }
  getIr(e) {
    return this.ir.get(e);
  }
  setIr(e, t) {
    this.ir.set(e, t);
  }
  getPrefixMatch(e) {
    return this.prefixes.get(e);
  }
  setPrefixMatch(e, t) {
    this.prefixes.set(e, t);
  }
};
function sm(e, t, r = {}) {
  let n = t?.[e];
  if (!n)
    return br("fontSize", e, r);
  if (typeof n == "string")
    return an("fontSize", n);
  let i = {}, [a, o] = n, u = tm("fontSize", a);
  if (u && (i = u), typeof o == "string")
    return V(Da("lineHeight", _u(o, i), i));
  let { lineHeight: s, letterSpacing: l } = o;
  return s && Da("lineHeight", _u(s, i), i), l && Da("letterSpacing", l, i), V(i);
}
function _u(e, t) {
  let r = Ft(e);
  if (r) {
    let [n, i] = r;
    if ((i === Re.none || i === Re.em) && typeof t.fontSize == "number")
      return t.fontSize * n;
  }
  return e;
}
function um(e, t) {
  var r;
  let n = (r = t?.[e]) !== null && r !== void 0 ? r : e.startsWith("[") ? e.slice(1, -1) : e, i = Ft(n);
  if (!i)
    return null;
  let [a, o] = i;
  if (o === Re.none)
    return { kind: "dependent", complete(s) {
      if (typeof s.fontSize != "number")
        return "relative line-height utilities require that font-size be set";
      s.lineHeight = s.fontSize * a;
    } };
  let u = on(a, o);
  return u !== null ? V({ lineHeight: u }) : null;
}
function lm(e, t, r, n, i) {
  let a = "";
  if (n[0] === "[")
    a = n.slice(1, -1);
  else {
    let l = i?.[n];
    if (l)
      a = l;
    else {
      let f = ii(n);
      return f && typeof f == "number" ? Au(f, Re.px, t, e) : null;
    }
  }
  if (a === "auto")
    return Al(t, e, "auto");
  let o = Ft(a);
  if (!o)
    return null;
  let [u, s] = o;
  return r && (u = -u), Au(u, s, t, e);
}
function Au(e, t, r, n) {
  let i = on(e, t);
  return i === null ? null : Al(r, n, i);
}
function Al(e, t, r) {
  switch (e) {
    case "All":
      return { kind: "complete", style: { [`${t}Top`]: r, [`${t}Right`]: r, [`${t}Bottom`]: r, [`${t}Left`]: r } };
    case "Bottom":
    case "Top":
    case "Left":
    case "Right":
      return { kind: "complete", style: { [`${t}${e}`]: r } };
    case "Vertical":
      return { kind: "complete", style: { [`${t}Top`]: r, [`${t}Bottom`]: r } };
    case "Horizontal":
      return { kind: "complete", style: { [`${t}Left`]: r, [`${t}Right`]: r } };
    default:
      return null;
  }
}
function fm(e) {
  if (!e)
    return {};
  let t = Object.entries(e).reduce((i, [a, o]) => {
    let u = [0, 1 / 0, 0], s = typeof o == "string" ? { min: o } : o, l = s.min ? Su(s.min) : 0;
    l === null ? Kt(`invalid screen config value: ${a}->min: ${s.min}`) : u[0] = l;
    let f = s.max ? Su(s.max) : 1 / 0;
    return f === null ? Kt(`invalid screen config value: ${a}->max: ${s.max}`) : u[1] = f, i[a] = u, i;
  }, {}), r = Object.values(t);
  r.sort((i, a) => {
    let [o, u] = i, [s, l] = a;
    return u === 1 / 0 || l === 1 / 0 ? o - s : u - l;
  });
  let n = 0;
  return r.forEach((i) => i[2] = n++), t;
}
function cm(e, t) {
  let r = t?.[e];
  if (!r)
    return null;
  if (typeof r == "string")
    return V({ fontFamily: r });
  let n = r[0];
  return n ? V({ fontFamily: n }) : null;
}
function tn(e, t, r) {
  if (!r)
    return null;
  let n;
  t.includes("/") && ([t = "", n] = t.split("/", 2));
  let i = "";
  if (t.startsWith("[#") || t.startsWith("[rgb") ? i = t.slice(1, -1) : i = Ol(t, r), !i)
    return null;
  if (n) {
    let a = Number(n);
    if (!Number.isNaN(a))
      return i = Ou(i, a / 100), V({ [Hn[e].color]: i });
  }
  return { kind: "dependent", complete(a) {
    let o = Hn[e].opacity, u = a[o];
    typeof u == "number" && (i = Ou(i, u)), a[Hn[e].color] = i;
  } };
}
function Mn(e, t) {
  let r = parseInt(t, 10);
  if (Number.isNaN(r))
    return null;
  let n = r / 100;
  return { kind: "complete", style: { [Hn[e].opacity]: n } };
}
function Ou(e, t) {
  return e.startsWith("#") ? e = hm(e) : e.startsWith("rgb(") && (e = e.replace(/^rgb\(/, "rgba(").replace(/\)$/, ", 1)")), e.replace(/, ?\d*\.?(\d+)\)$/, `, ${t})`);
}
function pm(e) {
  for (let t in e)
    t.startsWith("__opacity_") && delete e[t];
}
var Hn = { bg: { opacity: "__opacity_bg", color: "backgroundColor" }, text: { opacity: "__opacity_text", color: "color" }, border: { opacity: "__opacity_border", color: "borderColor" }, borderTop: { opacity: "__opacity_border", color: "borderTopColor" }, borderBottom: { opacity: "__opacity_border", color: "borderBottomColor" }, borderLeft: { opacity: "__opacity_border", color: "borderLeftColor" }, borderRight: { opacity: "__opacity_border", color: "borderRightColor" }, shadow: { opacity: "__opacity_shadow", color: "shadowColor" }, tint: { opacity: "__opacity_tint", color: "tintColor" } };
function hm(e) {
  let t = e;
  e = e.replace(dm, (o, u, s, l) => u + u + s + s + l + l);
  let r = vm.exec(e);
  if (!r)
    return Kt(`invalid config hex color value: ${t}`), "rgba(0, 0, 0, 1)";
  let n = parseInt(r[1], 16), i = parseInt(r[2], 16), a = parseInt(r[3], 16);
  return `rgba(${n}, ${i}, ${a}, 1)`;
}
function Ol(e, t) {
  let r = t[e];
  if (Fu(r))
    return r;
  if (Cu(r) && Fu(r.DEFAULT))
    return r.DEFAULT;
  let [n = "", ...i] = e.split("-");
  for (; n !== e; ) {
    let a = t[n];
    if (Cu(a))
      return Ol(i.join("-"), a);
    if (i.length === 0)
      return "";
    n = `${n}-${i.shift()}`;
  }
  return "";
}
var dm = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
var vm = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i;
function gm(e, t) {
  let [r, n] = _l(e);
  if (r.match(/^(-?(\d)+)?$/))
    return mm(r, n, t?.borderWidth);
  if (r = r.replace(/^-/, ""), ["dashed", "solid", "dotted"].includes(r))
    return V({ borderStyle: r });
  let i = "border";
  switch (n) {
    case "Bottom":
      i = "borderBottom";
      break;
    case "Top":
      i = "borderTop";
      break;
    case "Left":
      i = "borderLeft";
      break;
    case "Right":
      i = "borderRight";
      break;
  }
  let a = tn(i, r, t?.borderColor);
  if (a)
    return a;
  let o = `border${n === "All" ? "" : n}Width`;
  r = r.replace(/^-/, "");
  let u = r.slice(1, -1), s = br(o, u);
  return typeof s?.style[o] != "number" ? null : s;
}
function mm(e, t, r) {
  if (!r)
    return null;
  e = e.replace(/^-/, "");
  let n = r[e === "" ? "DEFAULT" : e];
  if (n === void 0)
    return null;
  let i = `border${t === "All" ? "" : t}Width`;
  return an(i, n);
}
function Dm(e, t) {
  if (!t)
    return null;
  let [r, n] = _l(e);
  r = r.replace(/^-/, ""), r === "" && (r = "DEFAULT");
  let i = `border${n === "All" ? "" : n}Radius`, a = t[r];
  if (a)
    return Lu(an(i, a));
  let o = br(i, r);
  return typeof o?.style[i] != "number" ? null : Lu(o);
}
function Lu(e) {
  if (e?.kind !== "complete")
    return e;
  let t = e.style.borderTopRadius;
  t !== void 0 && (e.style.borderTopLeftRadius = t, e.style.borderTopRightRadius = t, delete e.style.borderTopRadius);
  let r = e.style.borderBottomRadius;
  r !== void 0 && (e.style.borderBottomLeftRadius = r, e.style.borderBottomRightRadius = r, delete e.style.borderBottomRadius);
  let n = e.style.borderLeftRadius;
  n !== void 0 && (e.style.borderBottomLeftRadius = n, e.style.borderTopLeftRadius = n, delete e.style.borderLeftRadius);
  let i = e.style.borderRightRadius;
  return i !== void 0 && (e.style.borderBottomRightRadius = i, e.style.borderTopRightRadius = i, delete e.style.borderRightRadius), e;
}
function Kr(e, t, r, n) {
  let i = null;
  e === "inset" && (t = t.replace(/^(x|y)-/, (u, s) => (i = s === "x" ? "x" : "y", "")));
  let a = n?.[t];
  if (a) {
    let u = yr(a, { isNegative: r });
    if (u !== null)
      return Iu(e, i, u);
  }
  let o = ii(t, { isNegative: r });
  return o !== null ? Iu(e, i, o) : null;
}
function Iu(e, t, r) {
  if (e !== "inset")
    return V({ [e]: r });
  switch (t) {
    case null:
      return V({ top: r, left: r, right: r, bottom: r });
    case "y":
      return V({ top: r, bottom: r });
    case "x":
      return V({ left: r, right: r });
  }
}
function Gn(e, t, r) {
  var n;
  t = t.replace(/^-/, "");
  let i = t === "" ? "DEFAULT" : t, a = Number((n = r?.[i]) !== null && n !== void 0 ? n : t);
  return Number.isNaN(a) ? null : V({ [`flex${e}`]: a });
}
function ym(e, t) {
  var r, n;
  if (e = t?.[e] || e, ["min-content", "revert", "unset"].includes(e))
    return null;
  if (e.match(/^\d+(\.\d+)?$/))
    return V({ flexGrow: Number(e), flexBasis: "0%" });
  let i = e.match(/^(\d+)\s+(\d+)$/);
  if (i)
    return V({ flexGrow: Number(i[1]), flexShrink: Number(i[2]) });
  if (i = e.match(/^(\d+)\s+([^ ]+)$/), i) {
    let a = yr((r = i[2]) !== null && r !== void 0 ? r : "");
    return a ? V({ flexGrow: Number(i[1]), flexBasis: a }) : null;
  }
  if (i = e.match(/^(\d+)\s+(\d+)\s+(.+)$/), i) {
    let a = yr((n = i[3]) !== null && n !== void 0 ? n : "");
    return a ? V({ flexGrow: Number(i[1]), flexShrink: Number(i[2]), flexBasis: a }) : null;
  }
  return null;
}
function Pu(e, t, r = {}, n) {
  let i = n?.[t];
  return i !== void 0 ? an(e, i, r) : br(e, t, r);
}
function Wn(e, t, r = {}, n) {
  let i = yr(n?.[t], r);
  return i ? V({ [e]: i }) : (t === "screen" && (t = e.includes("Width") ? "100vw" : "100vh"), br(e, t, r));
}
function bm(e, t, r) {
  let n = r?.[e];
  if (n) {
    let i = Ft(n, { isNegative: t });
    if (!i)
      return null;
    let [a, o] = i;
    if (o === Re.em)
      return xm(a);
    if (o === Re.percent)
      return Kt("percentage-based letter-spacing configuration currently unsupported, switch to `em`s, or open an issue if you'd like to see support added."), null;
    let u = on(a, o, { isNegative: t });
    return u !== null ? V({ letterSpacing: u }) : null;
  }
  return br("letterSpacing", e, { isNegative: t });
}
function xm(e) {
  return { kind: "dependent", complete(t) {
    let r = t.fontSize;
    if (typeof r != "number" || Number.isNaN(r))
      return "tracking-X relative letter spacing classes require font-size to be set";
    t.letterSpacing = Math.round((e * r + Number.EPSILON) * 100) / 100;
  } };
}
function wm(e, t) {
  let r = t?.[e];
  if (r) {
    let i = Ft(String(r));
    if (i)
      return V({ opacity: i[0] });
  }
  let n = Ft(e);
  return n ? V({ opacity: n[0] / 100 }) : null;
}
function Em(e) {
  let t = parseInt(e, 10);
  return Number.isNaN(t) ? null : { kind: "complete", style: { shadowOpacity: t / 100 } };
}
function Fm(e) {
  if (e.includes("/")) {
    let [r = "", n = ""] = e.split("/", 2), i = ya(r), a = ya(n);
    return i === null || a === null ? null : { kind: "complete", style: { shadowOffset: { width: i, height: a } } };
  }
  let t = ya(e);
  return t === null ? null : { kind: "complete", style: { shadowOffset: { width: t, height: t } } };
}
function ya(e) {
  let t = ii(e);
  return typeof t == "number" ? t : null;
}
var Ru = class {
  constructor(e, t = {}, r, n, i) {
    var a, o, u, s, l, f;
    this.config = t, this.cache = r, this.position = 0, this.isNull = false, this.isNegative = false, this.context = {}, this.context.device = n;
    let c = e.trim().split(":"), p = [];
    c.length === 1 ? this.string = e : (this.string = (a = c.pop()) !== null && a !== void 0 ? a : "", p = c), this.char = this.string[0];
    let d = fm((o = this.config.theme) === null || o === void 0 ? void 0 : o.screens);
    for (let D of p)
      if (d[D]) {
        let v = (u = d[D]) === null || u === void 0 ? void 0 : u[2];
        v !== void 0 && (this.order = ((s = this.order) !== null && s !== void 0 ? s : 0) + v);
        let g = (l = n.windowDimensions) === null || l === void 0 ? void 0 : l.width;
        if (g) {
          let [y, b] = (f = d[D]) !== null && f !== void 0 ? f : [0, 0];
          (g <= y || g > b) && (this.isNull = true);
        } else
          this.isNull = true;
      } else
        K1(D) ? this.isNull = D !== i : em(D) ? n.windowDimensions ? (n.windowDimensions.width > n.windowDimensions.height ? "landscape" : "portrait") !== D ? this.isNull = true : this.incrementOrder() : this.isNull = true : D === "retina" ? n.pixelDensity === 2 ? this.incrementOrder() : this.isNull = true : D === "dark" ? n.colorScheme !== "dark" ? this.isNull = true : this.incrementOrder() : this.handlePossibleArbitraryBreakpointPrefix(D) || (this.isNull = true);
  }
  parse() {
    if (this.isNull)
      return { kind: "null" };
    let e = this.cache.getIr(this.rest);
    if (e)
      return e;
    this.parseIsNegative();
    let t = this.parseUtility();
    return t ? this.order !== void 0 ? { kind: "ordered", order: this.order, styleIr: t } : t : { kind: "null" };
  }
  parseUtility() {
    var e, t, r, n, i;
    let a = this.config.theme, o = null;
    switch (this.char) {
      case "m":
      case "p": {
        let u = this.peekSlice(1, 3).match(/^(t|b|r|l|x|y)?-/);
        if (u) {
          let s = this.char === "m" ? "margin" : "padding";
          this.advance(((t = (e = u[0]) === null || e === void 0 ? void 0 : e.length) !== null && t !== void 0 ? t : 0) + 1);
          let l = Tl(u[1]), f = lm(s, l, this.isNegative, this.rest, (r = this.config.theme) === null || r === void 0 ? void 0 : r[s]);
          if (f)
            return f;
        }
      }
    }
    if (this.consumePeeked("h-") && (o = Pu("height", this.rest, this.context, a?.height), o) || this.consumePeeked("w-") && (o = Pu("width", this.rest, this.context, a?.width), o) || this.consumePeeked("min-w-") && (o = Wn("minWidth", this.rest, this.context, a?.minWidth), o) || this.consumePeeked("min-h-") && (o = Wn("minHeight", this.rest, this.context, a?.minHeight), o) || this.consumePeeked("max-w-") && (o = Wn("maxWidth", this.rest, this.context, a?.maxWidth), o) || this.consumePeeked("max-h-") && (o = Wn("maxHeight", this.rest, this.context, a?.maxHeight), o) || this.consumePeeked("leading-") && (o = um(this.rest, a?.lineHeight), o) || this.consumePeeked("text-") && (o = sm(this.rest, a?.fontSize, this.context), o || (o = tn("text", this.rest, a?.textColor), o) || this.consumePeeked("opacity-") && (o = Mn("text", this.rest), o)) || this.consumePeeked("font-") && (o = cm(this.rest, a?.fontFamily), o) || this.consumePeeked("aspect-") && (this.consumePeeked("ratio-") && Kt("`aspect-ratio-{ratio}` is deprecated, use `aspect-{ratio}` instead"), o = an("aspectRatio", this.rest, { fractions: true }), o) || this.consumePeeked("tint-") && (o = tn("tint", this.rest, a?.colors), o) || this.consumePeeked("bg-") && (o = tn("bg", this.rest, a?.backgroundColor), o || this.consumePeeked("opacity-") && (o = Mn("bg", this.rest), o)) || this.consumePeeked("border") && (o = gm(this.rest, a), o || this.consumePeeked("-opacity-") && (o = Mn("border", this.rest), o)) || this.consumePeeked("rounded") && (o = Dm(this.rest, a?.borderRadius), o) || this.consumePeeked("bottom-") && (o = Kr("bottom", this.rest, this.isNegative, a?.inset), o) || this.consumePeeked("top-") && (o = Kr("top", this.rest, this.isNegative, a?.inset), o) || this.consumePeeked("left-") && (o = Kr("left", this.rest, this.isNegative, a?.inset), o) || this.consumePeeked("right-") && (o = Kr("right", this.rest, this.isNegative, a?.inset), o) || this.consumePeeked("inset-") && (o = Kr("inset", this.rest, this.isNegative, a?.inset), o) || this.consumePeeked("flex-") && (this.consumePeeked("grow") ? o = Gn("Grow", this.rest, a?.flexGrow) : this.consumePeeked("shrink") ? o = Gn("Shrink", this.rest, a?.flexShrink) : o = ym(this.rest, a?.flex), o) || this.consumePeeked("grow") && (o = Gn("Grow", this.rest, a?.flexGrow), o) || this.consumePeeked("shrink") && (o = Gn("Shrink", this.rest, a?.flexShrink), o) || this.consumePeeked("shadow-color-opacity-") && (o = Mn("shadow", this.rest), o) || this.consumePeeked("shadow-opacity-") && (o = Em(this.rest), o) || this.consumePeeked("shadow-offset-") && (o = Fm(this.rest), o) || this.consumePeeked("shadow-radius-") && (o = br("shadowRadius", this.rest), o) || this.consumePeeked("shadow-") && (o = tn("shadow", this.rest, a?.colors), o))
      return o;
    if (this.consumePeeked("elevation-")) {
      let u = parseInt(this.rest, 10);
      if (!Number.isNaN(u))
        return V({ elevation: u });
    }
    if (this.consumePeeked("opacity-") && (o = wm(this.rest, a?.opacity), o) || this.consumePeeked("tracking-") && (o = bm(this.rest, this.isNegative, a?.letterSpacing), o))
      return o;
    if (this.consumePeeked("z-")) {
      let u = Number((i = (n = a?.zIndex) === null || n === void 0 ? void 0 : n[this.rest]) !== null && i !== void 0 ? i : this.rest);
      if (!Number.isNaN(u))
        return V({ zIndex: u });
    }
    return Kt(`\`${this.rest}\` unknown or invalid utility`), null;
  }
  handlePossibleArbitraryBreakpointPrefix(e) {
    var t;
    if (e[0] !== "m")
      return false;
    let r = e.match(/^(min|max)-(w|h)-\[([^\]]+)\]$/);
    if (!r)
      return false;
    if (!(!((t = this.context.device) === null || t === void 0) && t.windowDimensions))
      return this.isNull = true, true;
    let n = this.context.device.windowDimensions, [, i = "", a = "", o = ""] = r, u = a === "w" ? n.width : n.height, s = Ft(o, this.context);
    if (s === null)
      return this.isNull = true, true;
    let [l, f] = s;
    return f !== "px" && (this.isNull = true), (i === "min" ? u >= l : u <= l) ? this.incrementOrder() : this.isNull = true, true;
  }
  advance(e = 1) {
    this.position += e, this.char = this.string[this.position];
  }
  get rest() {
    return this.peekSlice(0, this.string.length);
  }
  peekSlice(e, t) {
    return this.string.slice(this.position + e, this.position + t);
  }
  consumePeeked(e) {
    return this.peekSlice(0, e.length) === e ? (this.advance(e.length), true) : false;
  }
  parseIsNegative() {
    this.char === "-" && (this.advance(), this.isNegative = true, this.context.isNegative = true);
  }
  incrementOrder() {
    var e;
    this.order = ((e = this.order) !== null && e !== void 0 ? e : 0) + 1;
  }
};
function Cm(e) {
  let t = [], r = null;
  return e.forEach((n) => {
    if (typeof n == "string")
      t = [...t, ...ba(n)];
    else if (Array.isArray(n))
      t = [...t, ...n.flatMap(ba)];
    else if (typeof n == "object" && n !== null)
      for (let [i, a] of Object.entries(n))
        typeof a == "boolean" ? t = [...t, ...a ? ba(i) : []] : r ? r[i] = a : r = { [i]: a };
  }), [t.filter(Boolean).filter(Sm), r];
}
function ba(e) {
  return e.trim().split(/\s+/);
}
function Sm(e, t, r) {
  return r.indexOf(e) === t;
}
function km(e) {
  var t;
  return (t = e?.reduce((r, n) => ({ ...r, ...Tm(n.handler) }), {})) !== null && t !== void 0 ? t : {};
}
function Tm(e) {
  let t = {};
  return e({ addUtilities: (r) => {
    t = r;
  }, ..._m }), t;
}
function jt(e) {
  throw new Error(`tailwindcss plugin function argument object prop "${e}" not implemented`);
}
var _m = { addComponents: jt, addBase: jt, addVariant: jt, e: jt, prefix: jt, theme: jt, variants: jt, config: jt, corePlugins: jt, matchUtilities: jt, postcss: null };
function Am(e, t) {
  let r = (0, Z1.default)(Om(e)), n = {}, i = km(r.plugins), a = {}, o = Object.entries(i).map(([D, v]) => typeof v == "string" ? (a[D] = v, [D, { kind: "null" }]) : [D, V(v)]).filter(([, D]) => D.kind !== "null");
  function u() {
    return [n.windowDimensions ? `w${n.windowDimensions.width}` : false, n.windowDimensions ? `h${n.windowDimensions.height}` : false, n.fontScale ? `fs${n.fontScale}` : false, n.colorScheme === "dark" ? "dark" : false, n.pixelDensity === 2 ? "retina" : false].filter(Boolean).join("--") || "default";
  }
  let s = u(), l = {};
  function f() {
    let D = l[s];
    if (D)
      return D;
    let v = new om(o);
    return l[s] = v, v;
  }
  function c(...D) {
    let v = f(), g = {}, y = [], b = [], [C, k] = Cm(D), S = C.join(" "), E = v.getStyle(S);
    if (E)
      return { ...E, ...k || {} };
    for (let L of C) {
      let T = v.getIr(L);
      if (!T && L in a) {
        let U = c(a[L]);
        v.setIr(L, V(U)), g = { ...g, ...U };
        continue;
      }
      switch (T = new Ru(L, r, v, n, t).parse(), T.kind) {
        case "complete":
          g = { ...g, ...T.style }, v.setIr(L, T);
          break;
        case "dependent":
          y.push(T);
          break;
        case "ordered":
          b.push(T);
          break;
        case "null":
          v.setIr(L, T);
          break;
      }
    }
    if (b.length > 0) {
      b.sort((L, T) => L.order - T.order);
      for (let L of b)
        switch (L.styleIr.kind) {
          case "complete":
            g = { ...g, ...L.styleIr.style };
            break;
          case "dependent":
            y.push(L.styleIr);
            break;
        }
    }
    if (y.length > 0) {
      for (let L of y) {
        let T = L.complete(g);
        T && Kt(T);
      }
      pm(g);
    }
    return S !== "" && v.setStyle(S, g), k && (g = { ...g, ...k }), g;
  }
  function p(D) {
    let v = c(D.split(/\s+/g).map((g) => g.replace(/^(bg|text|border)-/, "")).map((g) => `bg-${g}`).join(" "));
    return typeof v.backgroundColor == "string" ? v.backgroundColor : void 0;
  }
  let d = (D, ...v) => {
    let g = "";
    return D.forEach((y, b) => {
      var C;
      g += y + ((C = v[b]) !== null && C !== void 0 ? C : "");
    }), c(g);
  };
  return d.style = c, d.color = p, d.prefixMatch = (...D) => {
    let v = D.sort().join(":"), g = f(), y = g.getPrefixMatch(v);
    if (y !== void 0)
      return y;
    let b = new Ru(`${v}:flex`, r, g, n, t).parse().kind !== "null";
    return g.setPrefixMatch(v, b), b;
  }, d.setWindowDimensions = (D) => {
    n.windowDimensions = D, s = u();
  }, d.setFontScale = (D) => {
    n.fontScale = D, s = u();
  }, d.setPixelDensity = (D) => {
    n.pixelDensity = D, s = u();
  }, d.setColorScheme = (D) => {
    n.colorScheme = D, s = u();
  }, d;
}
function Om(e) {
  return { ...e, content: ["_no_warnings_please"] };
}
var Lm = { handler: ({ addUtilities: e }) => {
  e({ "shadow-sm": { boxShadow: "0 1px 2px 0 rgb(0 0 0 / 0.05)" }, shadow: { boxShadow: "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)" }, "shadow-md": { boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)" }, "shadow-lg": { boxShadow: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)" }, "shadow-xl": { boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)" }, "shadow-2xl": { boxShadow: "0 25px 50px -12px rgb(0 0 0 / 0.25)" }, "shadow-inner": { boxShadow: "inset 0 2px 4px 0 rgb(0 0 0 / 0.05)" }, "shadow-none": { boxShadow: "0 0 #0000" } });
} };
function Im(e) {
  return Am({ ...e, plugins: [...e?.plugins ?? [], Lm] }, "web");
}
var $n;
function Pm({ width: e, height: t, config: r }) {
  return $n || ($n = Im(r)), $n.setWindowDimensions({ width: +e, height: +t }), $n;
}
var xa = /* @__PURE__ */ new WeakMap();
async function Ll(e, t) {
  let r = await Kn();
  if (!r || !r.Node)
    throw new Error("Satori is not initialized: expect `yoga` to be loaded, got " + r);
  t.fonts = t.fonts || [];
  let n;
  xa.has(t.fonts) ? n = xa.get(t.fonts) : xa.set(t.fonts, n = new X1(t.fonts));
  let i = "width" in t ? t.width : void 0, a = "height" in t ? t.height : void 0, o = r.Node.create();
  i && o.setWidth(i), a && o.setHeight(a), o.setFlexDirection(r.FLEX_DIRECTION_ROW), o.setFlexWrap(r.WRAP_WRAP), o.setAlignContent(r.ALIGN_AUTO), o.setAlignItems(r.ALIGN_FLEX_START), o.setJustifyContent(r.JUSTIFY_FLEX_START), o.setOverflow(r.OVERFLOW_HIDDEN);
  let u = { ...t.graphemeImages }, s = /* @__PURE__ */ new Set();
  cr.clear(), await Vg(e);
  let l = Ta(e, { id: "id", parentStyle: {}, inheritedStyle: { fontSize: 16, fontWeight: "normal", fontFamily: "serif", fontStyle: "normal", lineHeight: 1.2, color: "black", opacity: 1, whiteSpace: "normal", _viewportWidth: i, _viewportHeight: a }, parent: o, font: n, embedFont: t.embedFont, debug: t.debug, graphemeImages: u, canLoadAdditionalAssets: !!t.loadAdditionalAsset, onNodeDetected: t.onNodeDetected, getTwStyles: (D, v) => {
    let g = { ...Pm({ width: i, height: a, config: t.tailwindConfig })([D]) };
    return typeof g.lineHeight == "number" && (g.lineHeight = g.lineHeight / (+g.fontSize || v.fontSize || 16)), g.shadowColor && g.boxShadow && (g.boxShadow = g.boxShadow.replace(/rgba?\([^)]+\)/, g.shadowColor)), g;
  } }), f = (await l.next()).value;
  if (t.loadAdditionalAsset && f.length) {
    let D = Rm(f), v = [], g = {};
    await Promise.all(Object.entries(D).flatMap(([y, b]) => b.map((C) => {
      let k = `${y}_${C}`;
      return s.has(k) ? null : (s.add(k), t.loadAdditionalAsset(y, C).then((S) => {
        typeof S == "string" ? g[C] = S : S && (Array.isArray(S) ? v.push(...S) : v.push(S));
      }));
    }))), n.addFonts(v), Object.assign(u, g);
  }
  await l.next(), o.calculateLayout(i, a, r.DIRECTION_LTR);
  let c = (await l.next([0, 0])).value, p = o.getComputedWidth(), d = o.getComputedHeight();
  return o.freeRecursive(), Y1({ width: p, height: d, content: c });
}
function Rm(e) {
  let t = {}, r = {};
  for (let { word: n, locale: i } of e) {
    let a = z1(n, i).join("|");
    r[a] = r[a] || "", r[a] += n;
  }
  return Object.keys(r).forEach((n) => {
    t[n] = t[n] || [], n === "emoji" ? t[n].push(...Uu(Pt(r[n], "grapheme"))) : (t[n][0] = t[n][0] || "", t[n][0] += Uu(Pt(r[n], "grapheme", n === "unknown" ? void 0 : n)).join(""));
  }), t;
}
function Uu(e) {
  return Array.from(new Set(e));
}
var ne = {};
var Um = ne.ALIGN_AUTO = 0;
var Bm = ne.ALIGN_FLEX_START = 1;
var Nm = ne.ALIGN_CENTER = 2;
var Mm = ne.ALIGN_FLEX_END = 3;
var Gm = ne.ALIGN_STRETCH = 4;
var Wm = ne.ALIGN_BASELINE = 5;
var $m = ne.ALIGN_SPACE_BETWEEN = 6;
var jm = ne.ALIGN_SPACE_AROUND = 7;
var zm = ne.DIMENSION_WIDTH = 0;
var Vm = ne.DIMENSION_HEIGHT = 1;
var Hm = ne.DIRECTION_INHERIT = 0;
var Xm = ne.DIRECTION_LTR = 1;
var qm = ne.DIRECTION_RTL = 2;
var Ym = ne.DISPLAY_FLEX = 0;
var Zm = ne.DISPLAY_NONE = 1;
var Jm = ne.EDGE_LEFT = 0;
var Km = ne.EDGE_TOP = 1;
var Qm = ne.EDGE_RIGHT = 2;
var eD = ne.EDGE_BOTTOM = 3;
var tD = ne.EDGE_START = 4;
var rD = ne.EDGE_END = 5;
var nD = ne.EDGE_HORIZONTAL = 6;
var iD = ne.EDGE_VERTICAL = 7;
var aD = ne.EDGE_ALL = 8;
var oD = ne.EXPERIMENTAL_FEATURE_WEB_FLEX_BASIS = 0;
var sD = ne.EXPERIMENTAL_FEATURE_ABSOLUTE_PERCENTAGE_AGAINST_PADDING_EDGE = 1;
var uD = ne.EXPERIMENTAL_FEATURE_FIX_ABSOLUTE_TRAILING_COLUMN_MARGIN = 2;
var lD = ne.FLEX_DIRECTION_COLUMN = 0;
var fD = ne.FLEX_DIRECTION_COLUMN_REVERSE = 1;
var cD = ne.FLEX_DIRECTION_ROW = 2;
var pD = ne.FLEX_DIRECTION_ROW_REVERSE = 3;
var hD = ne.GUTTER_COLUMN = 0;
var dD = ne.GUTTER_ROW = 1;
var vD = ne.GUTTER_ALL = 2;
var gD = ne.JUSTIFY_FLEX_START = 0;
var mD = ne.JUSTIFY_CENTER = 1;
var DD = ne.JUSTIFY_FLEX_END = 2;
var yD = ne.JUSTIFY_SPACE_BETWEEN = 3;
var bD = ne.JUSTIFY_SPACE_AROUND = 4;
var xD = ne.JUSTIFY_SPACE_EVENLY = 5;
var wD = ne.LOG_LEVEL_ERROR = 0;
var ED = ne.LOG_LEVEL_WARN = 1;
var FD = ne.LOG_LEVEL_INFO = 2;
var CD = ne.LOG_LEVEL_DEBUG = 3;
var SD = ne.LOG_LEVEL_VERBOSE = 4;
var kD = ne.LOG_LEVEL_FATAL = 5;
var TD = ne.MEASURE_MODE_UNDEFINED = 0;
var _D = ne.MEASURE_MODE_EXACTLY = 1;
var AD = ne.MEASURE_MODE_AT_MOST = 2;
var OD = ne.NODE_TYPE_DEFAULT = 0;
var LD = ne.NODE_TYPE_TEXT = 1;
var ID = ne.OVERFLOW_VISIBLE = 0;
var PD = ne.OVERFLOW_HIDDEN = 1;
var RD = ne.OVERFLOW_SCROLL = 2;
var UD = ne.POSITION_TYPE_STATIC = 0;
var BD = ne.POSITION_TYPE_RELATIVE = 1;
var ND = ne.POSITION_TYPE_ABSOLUTE = 2;
var MD = ne.PRINT_OPTIONS_LAYOUT = 1;
var GD = ne.PRINT_OPTIONS_STYLE = 2;
var WD = ne.PRINT_OPTIONS_CHILDREN = 4;
var $D = ne.UNIT_UNDEFINED = 0;
var jD = ne.UNIT_POINT = 1;
var zD = ne.UNIT_PERCENT = 2;
var VD = ne.UNIT_AUTO = 3;
var HD = ne.WRAP_NO_WRAP = 0;
var XD = ne.WRAP_WRAP = 1;
var qD = ne.WRAP_WRAP_REVERSE = 2;
var Il = (e) => {
  function t(i, a, o) {
    let u = i[a];
    i[a] = function(...s) {
      return o.call(this, u, ...s);
    };
  }
  for (let i of ["setPosition", "setMargin", "setFlexBasis", "setWidth", "setHeight", "setMinWidth", "setMinHeight", "setMaxWidth", "setMaxHeight", "setPadding"]) {
    let a = { [ne.UNIT_POINT]: e.Node.prototype[i], [ne.UNIT_PERCENT]: e.Node.prototype[`${i}Percent`], [ne.UNIT_AUTO]: e.Node.prototype[`${i}Auto`] };
    t(e.Node.prototype, i, function(o, ...u) {
      let s, l, f = u.pop();
      if (f === "auto")
        s = ne.UNIT_AUTO, l = void 0;
      else if (typeof f == "object")
        s = f.unit, l = f.valueOf();
      else if (s = typeof f == "string" && f.endsWith("%") ? ne.UNIT_PERCENT : ne.UNIT_POINT, l = parseFloat(f), !Number.isNaN(f) && Number.isNaN(l))
        throw Error(`Invalid value ${f} for ${i}`);
      if (!a[s])
        throw Error(`Failed to execute "${i}": Unsupported unit '${f}'`);
      return l !== void 0 ? a[s].call(this, ...u, l) : a[s].call(this, ...u);
    });
  }
  function r(i) {
    return e.MeasureCallback.implement({ measure: (...a) => {
      let { width: o, height: u } = i(...a);
      return { width: o ?? NaN, height: u ?? NaN };
    } });
  }
  function n(i) {
    return e.DirtiedCallback.implement({ dirtied: i });
  }
  return t(e.Node.prototype, "setMeasureFunc", function(i, a) {
    return a ? i.call(this, r(a)) : this.unsetMeasureFunc();
  }), t(e.Node.prototype, "setDirtiedFunc", function(i, a) {
    i.call(this, n(a));
  }), t(e.Config.prototype, "free", function() {
    e.Config.destroy(this);
  }), t(e.Node, "create", (i, a) => a ? e.Node.createWithConfig(a) : e.Node.createDefault()), t(e.Node.prototype, "free", function() {
    e.Node.destroy(this);
  }), t(e.Node.prototype, "freeRecursive", function() {
    for (let i = 0, a = this.getChildCount(); i < a; ++i)
      this.getChild(0).freeRecursive();
    this.free();
  }), t(e.Node.prototype, "calculateLayout", function(i, a = NaN, o = NaN, u = ne.DIRECTION_LTR) {
    return i.call(this, a, o, u);
  }), { Config: e.Config, Node: e.Node, ...ne };
};
var YD = (() => {
  var e = typeof document < "u" && document.currentScript ? document.currentScript.src : void 0;
  return function(t = {}) {
    s || (s = t !== void 0 ? t : {}), s.ready = new Promise(function(w, x) {
      l = w, f = x;
    });
    var r, n, i = Object.assign({}, s), a = "";
    typeof document < "u" && document.currentScript && (a = document.currentScript.src), e && (a = e), a = a.indexOf("blob:") !== 0 ? a.substr(0, a.replace(/[?#].*/, "").lastIndexOf("/") + 1) : "";
    var o = console.log.bind(console), u = console.warn.bind(console);
    Object.assign(s, i), i = null, typeof WebAssembly != "object" && ee("no native wasm support detected");
    var s, l, f, c, p = false;
    function d(w, x, I) {
      I = x + I;
      for (var G = ""; !(x >= I); ) {
        var P = w[x++];
        if (!P)
          break;
        if (128 & P) {
          var j = 63 & w[x++];
          if ((224 & P) == 192)
            G += String.fromCharCode((31 & P) << 6 | j);
          else {
            var K = 63 & w[x++];
            65536 > (P = (240 & P) == 224 ? (15 & P) << 12 | j << 6 | K : (7 & P) << 18 | j << 12 | K << 6 | 63 & w[x++]) ? G += String.fromCharCode(P) : (P -= 65536, G += String.fromCharCode(55296 | P >> 10, 56320 | 1023 & P));
          }
        } else
          G += String.fromCharCode(P);
      }
      return G;
    }
    function D() {
      var w = c.buffer;
      s.HEAP8 = v = new Int8Array(w), s.HEAP16 = y = new Int16Array(w), s.HEAP32 = C = new Int32Array(w), s.HEAPU8 = g = new Uint8Array(w), s.HEAPU16 = b = new Uint16Array(w), s.HEAPU32 = k = new Uint32Array(w), s.HEAPF32 = S = new Float32Array(w), s.HEAPF64 = E = new Float64Array(w);
    }
    var v, g, y, b, C, k, S, E, L, T = [], U = [], M = [], H = 0, q = null;
    function ee(w) {
      throw u(w = "Aborted(" + w + ")"), p = true, f(w = new WebAssembly.RuntimeError(w + ". Build with -sASSERTIONS for more info.")), w;
    }
    function A() {
      return r.startsWith("data:application/octet-stream;base64,");
    }
    function R() {
      try {
        throw "both async and sync fetching of the wasm failed";
      } catch (w) {
        ee(w);
      }
    }
    function O(w) {
      for (; 0 < w.length; )
        w.shift()(s);
    }
    function Y(w) {
      if (w === void 0)
        return "_unknown";
      var x = (w = w.replace(/[^a-zA-Z0-9_]/g, "$")).charCodeAt(0);
      return 48 <= x && 57 >= x ? "_" + w : w;
    }
    function Z(w, x) {
      return w = Y(w), function() {
        return x.apply(this, arguments);
      };
    }
    r = "yoga.wasm", A() || (r = a + r);
    var te = [{}, { value: void 0 }, { value: null }, { value: true }, { value: false }], ie = [];
    function B(w) {
      var x = Error, I = Z(w, function(G) {
        this.name = w, this.message = G, (G = Error(G).stack) !== void 0 && (this.stack = this.toString() + `
` + G.replace(/^Error(:[^\n]*)?\n/, ""));
      });
      return I.prototype = Object.create(x.prototype), I.prototype.constructor = I, I.prototype.toString = function() {
        return this.message === void 0 ? this.name : this.name + ": " + this.message;
      }, I;
    }
    var z = void 0;
    function _(w) {
      throw new z(w);
    }
    var N = (w) => (w || _("Cannot use deleted val. handle = " + w), te[w].value), ae = (w) => {
      switch (w) {
        case void 0:
          return 1;
        case null:
          return 2;
        case true:
          return 3;
        case false:
          return 4;
        default:
          var x = ie.length ? ie.pop() : te.length;
          return te[x] = { fa: 1, value: w }, x;
      }
    }, W = void 0, fe = void 0;
    function ce(w) {
      for (var x = ""; g[w]; )
        x += fe[g[w++]];
      return x;
    }
    var ge = [];
    function pe() {
      for (; ge.length; ) {
        var w = ge.pop();
        w.L.Z = false, w.delete();
      }
    }
    var xe = void 0, _e = {};
    function he(w, x) {
      for (x === void 0 && _("ptr should not be undefined"); w.P; )
        x = w.aa(x), w = w.P;
      return x;
    }
    var ye = {};
    function Ge(w) {
      var x = ce(w = qa(w));
      return Ht(w), x;
    }
    function tt(w, x) {
      var I = ye[w];
      return I === void 0 && _(x + " has unknown type " + Ge(w)), I;
    }
    function We() {
    }
    var Be = false;
    function He(w) {
      --w.count.value, w.count.value === 0 && (w.S ? w.T.V(w.S) : w.O.M.V(w.N));
    }
    var rt = {}, nt = void 0;
    function it(w) {
      throw new nt(w);
    }
    function at(w, x) {
      return x.O && x.N || it("makeClassHandle requires ptr and ptrType"), !!x.T != !!x.S && it("Both smartPtrType and smartPtr must be specified"), x.count = { value: 1 }, Xe(Object.create(w, { L: { value: x } }));
    }
    function Xe(w) {
      return typeof FinalizationRegistry > "u" ? (Xe = (x) => x, w) : (Be = new FinalizationRegistry((x) => {
        He(x.L);
      }), Xe = (x) => {
        var I = x.L;
        return I.S && Be.register(x, { L: I }, x), x;
      }, We = (x) => {
        Be.unregister(x);
      }, Xe(w));
    }
    var Ct = {};
    function Dt(w) {
      for (; w.length; ) {
        var x = w.pop();
        w.pop()(x);
      }
    }
    function ft(w) {
      return this.fromWireType(C[w >> 2]);
    }
    var ct = {}, zt = {};
    function lt(w, x, I) {
      function G(X) {
        (X = I(X)).length !== w.length && it("Mismatched type converter count");
        for (var Q = 0; Q < w.length; ++Q)
          qe(w[Q], X[Q]);
      }
      w.forEach(function(X) {
        zt[X] = x;
      });
      var P = Array(x.length), j = [], K = 0;
      x.forEach((X, Q) => {
        ye.hasOwnProperty(X) ? P[Q] = ye[X] : (j.push(X), ct.hasOwnProperty(X) || (ct[X] = []), ct[X].push(() => {
          P[Q] = ye[X], ++K === j.length && G(P);
        }));
      }), j.length === 0 && G(P);
    }
    function Ut(w) {
      switch (w) {
        case 1:
          return 0;
        case 2:
          return 1;
        case 4:
          return 2;
        case 8:
          return 3;
        default:
          throw TypeError("Unknown type size: " + w);
      }
    }
    function qe(w, x, I = {}) {
      if (!("argPackAdvance" in x))
        throw TypeError("registerType registeredInstance requires argPackAdvance");
      var G = x.name;
      if (w || _('type "' + G + '" must have a positive integer typeid pointer'), ye.hasOwnProperty(w)) {
        if (I.ta)
          return;
        _("Cannot register type '" + G + "' twice");
      }
      ye[w] = x, delete zt[w], ct.hasOwnProperty(w) && (x = ct[w], delete ct[w], x.forEach((P) => P()));
    }
    function xr(w) {
      _(w.L.O.M.name + " instance already deleted");
    }
    function ve() {
    }
    function Le(w, x, I) {
      if (w[x].R === void 0) {
        var G = w[x];
        w[x] = function() {
          return w[x].R.hasOwnProperty(arguments.length) || _("Function '" + I + "' called with an invalid number of arguments (" + arguments.length + ") - expects one of (" + w[x].R + ")!"), w[x].R[arguments.length].apply(this, arguments);
        }, w[x].R = [], w[x].R[G.Y] = G;
      }
    }
    function Ue(w, x, I, G, P, j, K, X) {
      this.name = w, this.constructor = x, this.W = I, this.V = G, this.P = P, this.oa = j, this.aa = K, this.ma = X, this.ia = [];
    }
    function we(w, x, I) {
      for (; x !== I; )
        x.aa || _("Expected null or instance of " + I.name + ", got an instance of " + x.name), w = x.aa(w), x = x.P;
      return w;
    }
    function Ne(w, x) {
      return x === null ? (this.da && _("null is not a valid " + this.name), 0) : (x.L || _('Cannot pass "' + Pe(x) + '" as a ' + this.name), x.L.N || _("Cannot pass deleted object as a pointer of type " + this.name), we(x.L.N, x.L.O.M, this.M));
    }
    function Ae(w, x) {
      if (x === null) {
        if (this.da && _("null is not a valid " + this.name), this.ca) {
          var I = this.ea();
          return w !== null && w.push(this.V, I), I;
        }
        return 0;
      }
      if (x.L || _('Cannot pass "' + Pe(x) + '" as a ' + this.name), x.L.N || _("Cannot pass deleted object as a pointer of type " + this.name), !this.ba && x.L.O.ba && _("Cannot convert argument of type " + (x.L.T ? x.L.T.name : x.L.O.name) + " to parameter type " + this.name), I = we(x.L.N, x.L.O.M, this.M), this.ca)
        switch (x.L.S === void 0 && _("Passing raw pointer to smart pointer is illegal"), this.Aa) {
          case 0:
            x.L.T === this ? I = x.L.S : _("Cannot convert argument of type " + (x.L.T ? x.L.T.name : x.L.O.name) + " to parameter type " + this.name);
            break;
          case 1:
            I = x.L.S;
            break;
          case 2:
            if (x.L.T === this)
              I = x.L.S;
            else {
              var G = x.clone();
              I = this.wa(I, ae(function() {
                G.delete();
              })), w !== null && w.push(this.V, I);
            }
            break;
          default:
            _("Unsupporting sharing policy");
        }
      return I;
    }
    function $e(w, x) {
      return x === null ? (this.da && _("null is not a valid " + this.name), 0) : (x.L || _('Cannot pass "' + Pe(x) + '" as a ' + this.name), x.L.N || _("Cannot pass deleted object as a pointer of type " + this.name), x.L.O.ba && _("Cannot convert argument of type " + x.L.O.name + " to parameter type " + this.name), we(x.L.N, x.L.O.M, this.M));
    }
    function Fe(w, x, I, G) {
      this.name = w, this.M = x, this.da = I, this.ba = G, this.ca = false, this.V = this.wa = this.ea = this.ja = this.Aa = this.va = void 0, x.P !== void 0 ? this.toWireType = Ae : (this.toWireType = G ? Ne : $e, this.U = null);
    }
    var Ce = [];
    function pt(w) {
      var x = Ce[w];
      return x || (w >= Ce.length && (Ce.length = w + 1), Ce[w] = x = L.get(w)), x;
    }
    function me(w, x) {
      var I, G, P = (w = ce(w)).includes("j") ? (I = w, G = [], function() {
        if (G.length = 0, Object.assign(G, arguments), I.includes("j")) {
          var j = s["dynCall_" + I];
          j = G && G.length ? j.apply(null, [x].concat(G)) : j.call(null, x);
        } else
          j = pt(x).apply(null, G);
        return j;
      }) : pt(x);
      return typeof P != "function" && _("unknown function pointer with signature " + w + ": " + x), P;
    }
    var Bt = void 0;
    function Ke(w, x) {
      var I = [], G = {};
      throw x.forEach(function P(j) {
        G[j] || ye[j] || (zt[j] ? zt[j].forEach(P) : (I.push(j), G[j] = true));
      }), new Bt(w + ": " + I.map(Ge).join([", "]));
    }
    function yt(w, x, I, G, P) {
      var j = x.length;
      2 > j && _("argTypes array size mismatch! Must at least get return value and 'this' types!");
      var K = x[1] !== null && I !== null, X = false;
      for (I = 1; I < x.length; ++I)
        if (x[I] !== null && x[I].U === void 0) {
          X = true;
          break;
        }
      var Q = x[0].name !== "void", J = j - 2, re = Array(J), De = [], be = [];
      return function() {
        if (arguments.length !== J && _("function " + w + " called with " + arguments.length + " arguments, expected " + J + " args!"), be.length = 0, De.length = K ? 2 : 1, De[0] = P, K) {
          var Oe = x[1].toWireType(be, this);
          De[1] = Oe;
        }
        for (var Se = 0; Se < J; ++Se)
          re[Se] = x[Se + 2].toWireType(be, arguments[Se]), De.push(re[Se]);
        if (Se = G.apply(null, De), X)
          Dt(be);
        else
          for (var ze = K ? 1 : 2; ze < x.length; ze++) {
            var Er = ze === 1 ? Oe : re[ze - 2];
            x[ze].U !== null && x[ze].U(Er);
          }
        return Q ? x[0].fromWireType(Se) : void 0;
      };
    }
    function rr(w, x) {
      for (var I = [], G = 0; G < w; G++)
        I.push(k[x + 4 * G >> 2]);
      return I;
    }
    function bt(w) {
      4 < w && --te[w].fa == 0 && (te[w] = void 0, ie.push(w));
    }
    function Pe(w) {
      if (w === null)
        return "null";
      var x = typeof w;
      return x === "object" || x === "array" || x === "function" ? w.toString() : "" + w;
    }
    function Ye(w, x) {
      for (var I = "", G = 0; !(G >= x / 2); ++G) {
        var P = y[w + 2 * G >> 1];
        if (P == 0)
          break;
        I += String.fromCharCode(P);
      }
      return I;
    }
    function ht(w, x, I) {
      if (I === void 0 && (I = 2147483647), 2 > I)
        return 0;
      I -= 2;
      var G = x;
      I = I < 2 * w.length ? I / 2 : w.length;
      for (var P = 0; P < I; ++P)
        y[x >> 1] = w.charCodeAt(P), x += 2;
      return y[x >> 1] = 0, x - G;
    }
    function wr(w) {
      return 2 * w.length;
    }
    function hr(w, x) {
      for (var I = 0, G = ""; !(I >= x / 4); ) {
        var P = C[w + 4 * I >> 2];
        if (P == 0)
          break;
        ++I, 65536 <= P ? (P -= 65536, G += String.fromCharCode(55296 | P >> 10, 56320 | 1023 & P)) : G += String.fromCharCode(P);
      }
      return G;
    }
    function Qe(w, x, I) {
      if (I === void 0 && (I = 2147483647), 4 > I)
        return 0;
      var G = x;
      I = G + I - 4;
      for (var P = 0; P < w.length; ++P) {
        var j = w.charCodeAt(P);
        if (55296 <= j && 57343 >= j && (j = 65536 + ((1023 & j) << 10) | 1023 & w.charCodeAt(++P)), C[x >> 2] = j, (x += 4) + 4 > I)
          break;
      }
      return C[x >> 2] = 0, x - G;
    }
    function dt(w) {
      for (var x = 0, I = 0; I < w.length; ++I) {
        var G = w.charCodeAt(I);
        55296 <= G && 57343 >= G && ++I, x += 4;
      }
      return x;
    }
    var Vt = {};
    function xt(w) {
      var x = Vt[w];
      return x === void 0 ? ce(w) : x;
    }
    var Nt = [], Or = [], pn = [null, [], []];
    z = s.BindingError = B("BindingError"), s.count_emval_handles = function() {
      for (var w = 0, x = 5; x < te.length; ++x)
        te[x] !== void 0 && ++w;
      return w;
    }, s.get_first_emval = function() {
      for (var w = 5; w < te.length; ++w)
        if (te[w] !== void 0)
          return te[w];
      return null;
    }, W = s.PureVirtualError = B("PureVirtualError");
    for (var Xa = Array(256), hn = 0; 256 > hn; ++hn)
      Xa[hn] = String.fromCharCode(hn);
    fe = Xa, s.getInheritedInstanceCount = function() {
      return Object.keys(_e).length;
    }, s.getLiveInheritedInstances = function() {
      var w, x = [];
      for (w in _e)
        _e.hasOwnProperty(w) && x.push(_e[w]);
      return x;
    }, s.flushPendingDeletes = pe, s.setDelayFunction = function(w) {
      xe = w, ge.length && xe && xe(pe);
    }, nt = s.InternalError = B("InternalError"), ve.prototype.isAliasOf = function(w) {
      if (!(this instanceof ve && w instanceof ve))
        return false;
      var x = this.L.O.M, I = this.L.N, G = w.L.O.M;
      for (w = w.L.N; x.P; )
        I = x.aa(I), x = x.P;
      for (; G.P; )
        w = G.aa(w), G = G.P;
      return x === G && I === w;
    }, ve.prototype.clone = function() {
      if (this.L.N || xr(this), this.L.$)
        return this.L.count.value += 1, this;
      var w = Xe, x = Object, I = x.create, G = Object.getPrototypeOf(this), P = this.L;
      return w = w(I.call(x, G, { L: { value: { count: P.count, Z: P.Z, $: P.$, N: P.N, O: P.O, S: P.S, T: P.T } } })), w.L.count.value += 1, w.L.Z = false, w;
    }, ve.prototype.delete = function() {
      this.L.N || xr(this), this.L.Z && !this.L.$ && _("Object already scheduled for deletion"), We(this), He(this.L), this.L.$ || (this.L.S = void 0, this.L.N = void 0);
    }, ve.prototype.isDeleted = function() {
      return !this.L.N;
    }, ve.prototype.deleteLater = function() {
      return this.L.N || xr(this), this.L.Z && !this.L.$ && _("Object already scheduled for deletion"), ge.push(this), ge.length === 1 && xe && xe(pe), this.L.Z = true, this;
    }, Fe.prototype.pa = function(w) {
      return this.ja && (w = this.ja(w)), w;
    }, Fe.prototype.ga = function(w) {
      this.V && this.V(w);
    }, Fe.prototype.argPackAdvance = 8, Fe.prototype.readValueFromPointer = ft, Fe.prototype.deleteObject = function(w) {
      w !== null && w.delete();
    }, Fe.prototype.fromWireType = function(w) {
      function x() {
        return this.ca ? at(this.M.W, { O: this.va, N: G, T: this, S: w }) : at(this.M.W, { O: this, N: w });
      }
      var I, G = this.pa(w);
      if (!G)
        return this.ga(w), null;
      var P = _e[he(this.M, G)];
      if (P !== void 0)
        return P.L.count.value === 0 ? (P.L.N = G, P.L.S = w, P.clone()) : (P = P.clone(), this.ga(w), P);
      if (!(P = rt[P = this.M.oa(G)]))
        return x.call(this);
      P = this.ba ? P.ka : P.pointerType;
      var j = function K(X, Q, J) {
        return Q === J ? X : J.P === void 0 || (X = K(X, Q, J.P)) === null ? null : J.ma(X);
      }(G, this.M, P.M);
      return j === null ? x.call(this) : this.ca ? at(P.M.W, { O: P, N: j, T: this, S: w }) : at(P.M.W, { O: P, N: j });
    }, Bt = s.UnboundTypeError = B("UnboundTypeError");
    var Hl = { q: function(w, x, I) {
      w = ce(w), x = tt(x, "wrapper"), I = N(I);
      var G = [].slice, P = x.M, j = P.W, K = P.P.W, X = P.P.constructor;
      for (var Q in w = Z(w, function() {
        P.P.ia.forEach(function(J) {
          if (this[J] === K[J])
            throw new W("Pure virtual function " + J + " must be implemented in JavaScript");
        }.bind(this)), Object.defineProperty(this, "__parent", { value: j }), this.__construct.apply(this, G.call(arguments));
      }), j.__construct = function() {
        this === j && _("Pass correct 'this' to __construct");
        var J = X.implement.apply(void 0, [this].concat(G.call(arguments)));
        We(J);
        var re = J.L;
        J.notifyOnDestruction(), re.$ = true, Object.defineProperties(this, { L: { value: re } }), Xe(this), J = he(P, J = re.N), _e.hasOwnProperty(J) ? _("Tried to register registered instance: " + J) : _e[J] = this;
      }, j.__destruct = function() {
        this === j && _("Pass correct 'this' to __destruct"), We(this);
        var J = this.L.N;
        J = he(P, J), _e.hasOwnProperty(J) ? delete _e[J] : _("Tried to unregister unregistered instance: " + J);
      }, w.prototype = Object.create(j), I)
        w.prototype[Q] = I[Q];
      return ae(w);
    }, l: function(w) {
      var x = Ct[w];
      delete Ct[w];
      var I = x.ea, G = x.V, P = x.ha;
      lt([w], P.map((j) => j.sa).concat(P.map((j) => j.ya)), (j) => {
        var K = {};
        return P.forEach((X, Q) => {
          var J = j[Q], re = X.qa, De = X.ra, be = j[Q + P.length], Oe = X.xa, Se = X.za;
          K[X.na] = { read: (ze) => J.fromWireType(re(De, ze)), write: (ze, Er) => {
            var dr = [];
            Oe(Se, ze, be.toWireType(dr, Er)), Dt(dr);
          } };
        }), [{ name: x.name, fromWireType: function(X) {
          var Q, J = {};
          for (Q in K)
            J[Q] = K[Q].read(X);
          return G(X), J;
        }, toWireType: function(X, Q) {
          for (var J in K)
            if (!(J in Q))
              throw TypeError('Missing field:  "' + J + '"');
          var re = I();
          for (J in K)
            K[J].write(re, Q[J]);
          return X !== null && X.push(G, re), re;
        }, argPackAdvance: 8, readValueFromPointer: ft, U: G }];
      });
    }, v: function() {
    }, B: function(w, x, I, G, P) {
      var j = Ut(I);
      qe(w, { name: x = ce(x), fromWireType: function(K) {
        return !!K;
      }, toWireType: function(K, X) {
        return X ? G : P;
      }, argPackAdvance: 8, readValueFromPointer: function(K) {
        if (I === 1)
          var X = v;
        else if (I === 2)
          X = y;
        else if (I === 4)
          X = C;
        else
          throw TypeError("Unknown boolean type size: " + x);
        return this.fromWireType(X[K >> j]);
      }, U: null });
    }, h: function(w, x, I, G, P, j, K, X, Q, J, re, De, be) {
      re = ce(re), j = me(P, j), X && (X = me(K, X)), J && (J = me(Q, J)), be = me(De, be);
      var Oe, Se = Y(re);
      Oe = function() {
        Ke("Cannot construct " + re + " due to unbound types", [G]);
      }, s.hasOwnProperty(Se) ? (_("Cannot register public name '" + Se + "' twice"), Le(s, Se, Se), s.hasOwnProperty(void 0) && _("Cannot register multiple overloads of a function with the same number of arguments (undefined)!"), s[Se].R[void 0] = Oe) : s[Se] = Oe, lt([w, x, I], G ? [G] : [], function(ze) {
        if (ze = ze[0], G)
          var Er, dr = ze.M, Lr = dr.W;
        else
          Lr = ve.prototype;
        ze = Z(Se, function() {
          if (Object.getPrototypeOf(this) !== ci)
            throw new z("Use 'new' to construct " + re);
          if (Fr.X === void 0)
            throw new z(re + " has no accessible constructor");
          var Ja = Fr.X[arguments.length];
          if (Ja === void 0)
            throw new z("Tried to invoke ctor of " + re + " with invalid number of parameters (" + arguments.length + ") - expected (" + Object.keys(Fr.X).toString() + ") parameters instead!");
          return Ja.apply(this, arguments);
        });
        var ci = Object.create(Lr, { constructor: { value: ze } });
        ze.prototype = ci;
        var Fr = new Ue(re, ze, ci, be, dr, j, X, J);
        dr = new Fe(re, Fr, true, false), Lr = new Fe(re + "*", Fr, false, false);
        var Za = new Fe(re + " const*", Fr, false, true);
        return rt[w] = { pointerType: Lr, ka: Za }, Er = ze, s.hasOwnProperty(Se) || it("Replacing nonexistant public symbol"), s[Se] = Er, s[Se].Y = void 0, [dr, Lr, Za];
      });
    }, d: function(w, x, I, G, P, j, K) {
      var X = rr(I, G);
      x = ce(x), j = me(P, j), lt([], [w], function(Q) {
        function J() {
          Ke("Cannot call " + re + " due to unbound types", X);
        }
        var re = (Q = Q[0]).name + "." + x;
        x.startsWith("@@") && (x = Symbol[x.substring(2)]);
        var De = Q.M.constructor;
        return De[x] === void 0 ? (J.Y = I - 1, De[x] = J) : (Le(De, x, re), De[x].R[I - 1] = J), lt([], X, function(be) {
          return be = yt(re, [be[0], null].concat(be.slice(1)), null, j, K), De[x].R === void 0 ? (be.Y = I - 1, De[x] = be) : De[x].R[I - 1] = be, [];
        }), [];
      });
    }, p: function(w, x, I, G, P, j) {
      0 < x || ee();
      var K = rr(x, I);
      P = me(G, P), lt([], [w], function(X) {
        var Q = "constructor " + (X = X[0]).name;
        if (X.M.X === void 0 && (X.M.X = []), X.M.X[x - 1] !== void 0)
          throw new z("Cannot register multiple constructors with identical number of parameters (" + (x - 1) + ") for class '" + X.name + "'! Overload resolution is currently only performed using the parameter count, not actual type info!");
        return X.M.X[x - 1] = () => {
          Ke("Cannot construct " + X.name + " due to unbound types", K);
        }, lt([], K, function(J) {
          return J.splice(1, 0, null), X.M.X[x - 1] = yt(Q, J, null, P, j), [];
        }), [];
      });
    }, a: function(w, x, I, G, P, j, K, X) {
      var Q = rr(I, G);
      x = ce(x), j = me(P, j), lt([], [w], function(J) {
        function re() {
          Ke("Cannot call " + De + " due to unbound types", Q);
        }
        var De = (J = J[0]).name + "." + x;
        x.startsWith("@@") && (x = Symbol[x.substring(2)]), X && J.M.ia.push(x);
        var be = J.M.W, Oe = be[x];
        return Oe === void 0 || Oe.R === void 0 && Oe.className !== J.name && Oe.Y === I - 2 ? (re.Y = I - 2, re.className = J.name, be[x] = re) : (Le(be, x, De), be[x].R[I - 2] = re), lt([], Q, function(Se) {
          return Se = yt(De, Se, J, j, K), be[x].R === void 0 ? (Se.Y = I - 2, be[x] = Se) : be[x].R[I - 2] = Se, [];
        }), [];
      });
    }, A: function(w, x) {
      qe(w, { name: x = ce(x), fromWireType: function(I) {
        var G = N(I);
        return bt(I), G;
      }, toWireType: function(I, G) {
        return ae(G);
      }, argPackAdvance: 8, readValueFromPointer: ft, U: null });
    }, n: function(w, x, I) {
      I = Ut(I), qe(w, { name: x = ce(x), fromWireType: function(G) {
        return G;
      }, toWireType: function(G, P) {
        return P;
      }, argPackAdvance: 8, readValueFromPointer: function(G, P) {
        switch (P) {
          case 2:
            return function(j) {
              return this.fromWireType(S[j >> 2]);
            };
          case 3:
            return function(j) {
              return this.fromWireType(E[j >> 3]);
            };
          default:
            throw TypeError("Unknown float type: " + G);
        }
      }(x, I), U: null });
    }, e: function(w, x, I, G, P) {
      x = ce(x), P === -1 && (P = 4294967295), P = Ut(I);
      var j = (X) => X;
      if (G === 0) {
        var K = 32 - 8 * I;
        j = (X) => X << K >>> K;
      }
      I = x.includes("unsigned") ? function(X, Q) {
        return Q >>> 0;
      } : function(X, Q) {
        return Q;
      }, qe(w, { name: x, fromWireType: j, toWireType: I, argPackAdvance: 8, readValueFromPointer: function(X, Q, J) {
        switch (Q) {
          case 0:
            return J ? function(re) {
              return v[re];
            } : function(re) {
              return g[re];
            };
          case 1:
            return J ? function(re) {
              return y[re >> 1];
            } : function(re) {
              return b[re >> 1];
            };
          case 2:
            return J ? function(re) {
              return C[re >> 2];
            } : function(re) {
              return k[re >> 2];
            };
          default:
            throw TypeError("Unknown integer type: " + X);
        }
      }(x, P, G !== 0), U: null });
    }, b: function(w, x, I) {
      function G(j) {
        j >>= 2;
        var K = k;
        return new P(K.buffer, K[j + 1], K[j]);
      }
      var P = [Int8Array, Uint8Array, Int16Array, Uint16Array, Int32Array, Uint32Array, Float32Array, Float64Array][x];
      qe(w, { name: I = ce(I), fromWireType: G, argPackAdvance: 8, readValueFromPointer: G }, { ta: true });
    }, o: function(w, x) {
      var I = (x = ce(x)) === "std::string";
      qe(w, { name: x, fromWireType: function(G) {
        var P = k[G >> 2], j = G + 4;
        if (I)
          for (var K = j, X = 0; X <= P; ++X) {
            var Q = j + X;
            if (X == P || g[Q] == 0) {
              if (K = K ? d(g, K, Q - K) : "", J === void 0)
                var J = K;
              else
                J += "\0" + K;
              K = Q + 1;
            }
          }
        else {
          for (X = 0, J = Array(P); X < P; ++X)
            J[X] = String.fromCharCode(g[j + X]);
          J = J.join("");
        }
        return Ht(G), J;
      }, toWireType: function(G, P) {
        P instanceof ArrayBuffer && (P = new Uint8Array(P));
        var j, K = typeof P == "string";
        if (K || P instanceof Uint8Array || P instanceof Uint8ClampedArray || P instanceof Int8Array || _("Cannot pass non-string to std::string"), I && K) {
          var X = 0;
          for (j = 0; j < P.length; ++j) {
            var Q = P.charCodeAt(j);
            127 >= Q ? X++ : 2047 >= Q ? X += 2 : 55296 <= Q && 57343 >= Q ? (X += 4, ++j) : X += 3;
          }
          j = X;
        } else
          j = P.length;
        if (Q = (X = fi(4 + j + 1)) + 4, k[X >> 2] = j, I && K) {
          if (K = Q, Q = j + 1, j = g, 0 < Q) {
            Q = K + Q - 1;
            for (var J = 0; J < P.length; ++J) {
              var re = P.charCodeAt(J);
              if (55296 <= re && 57343 >= re && (re = 65536 + ((1023 & re) << 10) | 1023 & P.charCodeAt(++J)), 127 >= re) {
                if (K >= Q)
                  break;
                j[K++] = re;
              } else {
                if (2047 >= re) {
                  if (K + 1 >= Q)
                    break;
                  j[K++] = 192 | re >> 6;
                } else {
                  if (65535 >= re) {
                    if (K + 2 >= Q)
                      break;
                    j[K++] = 224 | re >> 12;
                  } else {
                    if (K + 3 >= Q)
                      break;
                    j[K++] = 240 | re >> 18, j[K++] = 128 | re >> 12 & 63;
                  }
                  j[K++] = 128 | re >> 6 & 63;
                }
                j[K++] = 128 | 63 & re;
              }
            }
            j[K] = 0;
          }
        } else if (K)
          for (K = 0; K < j; ++K)
            255 < (J = P.charCodeAt(K)) && (Ht(Q), _("String has UTF-16 code units that do not fit in 8 bits")), g[Q + K] = J;
        else
          for (K = 0; K < j; ++K)
            g[Q + K] = P[K];
        return G !== null && G.push(Ht, X), X;
      }, argPackAdvance: 8, readValueFromPointer: ft, U: function(G) {
        Ht(G);
      } });
    }, k: function(w, x, I) {
      if (I = ce(I), x === 2)
        var G = Ye, P = ht, j = wr, K = () => b, X = 1;
      else
        x === 4 && (G = hr, P = Qe, j = dt, K = () => k, X = 2);
      qe(w, { name: I, fromWireType: function(Q) {
        for (var J, re = k[Q >> 2], De = K(), be = Q + 4, Oe = 0; Oe <= re; ++Oe) {
          var Se = Q + 4 + Oe * x;
          (Oe == re || De[Se >> X] == 0) && (be = G(be, Se - be), J === void 0 ? J = be : J += "\0" + be, be = Se + x);
        }
        return Ht(Q), J;
      }, toWireType: function(Q, J) {
        typeof J != "string" && _("Cannot pass non-string to C++ string type " + I);
        var re = j(J), De = fi(4 + re + x);
        return k[De >> 2] = re >> X, P(J, De + 4, re + x), Q !== null && Q.push(Ht, De), De;
      }, argPackAdvance: 8, readValueFromPointer: ft, U: function(Q) {
        Ht(Q);
      } });
    }, m: function(w, x, I, G, P, j) {
      Ct[w] = { name: ce(x), ea: me(I, G), V: me(P, j), ha: [] };
    }, c: function(w, x, I, G, P, j, K, X, Q, J) {
      Ct[w].ha.push({ na: ce(x), sa: I, qa: me(G, P), ra: j, ya: K, xa: me(X, Q), za: J });
    }, C: function(w, x) {
      qe(w, { ua: true, name: x = ce(x), argPackAdvance: 0, fromWireType: function() {
      }, toWireType: function() {
      } });
    }, t: function(w, x, I, G, P) {
      w = Nt[w], x = N(x), I = xt(I);
      var j = [];
      return k[G >> 2] = ae(j), w(x, I, j, P);
    }, j: function(w, x, I, G) {
      w = Nt[w], w(x = N(x), I = xt(I), null, G);
    }, f: bt, g: function(w, x) {
      var I, G, P = function(Q, J) {
        for (var re = Array(Q), De = 0; De < Q; ++De)
          re[De] = tt(k[J + 4 * De >> 2], "parameter " + De);
        return re;
      }(w, x), j = P[0], K = Or[x = j.name + "_$" + P.slice(1).map(function(Q) {
        return Q.name;
      }).join("_") + "$"];
      if (K !== void 0)
        return K;
      var X = Array(w - 1);
      return I = (Q, J, re, De) => {
        for (var be = 0, Oe = 0; Oe < w - 1; ++Oe)
          X[Oe] = P[Oe + 1].readValueFromPointer(De + be), be += P[Oe + 1].argPackAdvance;
        for (Oe = 0, Q = Q[J].apply(Q, X); Oe < w - 1; ++Oe)
          P[Oe + 1].la && P[Oe + 1].la(X[Oe]);
        if (!j.ua)
          return j.toWireType(re, Q);
      }, G = Nt.length, Nt.push(I), K = G, Or[x] = K;
    }, r: function(w) {
      4 < w && (te[w].fa += 1);
    }, s: function(w) {
      Dt(N(w)), bt(w);
    }, i: function() {
      ee("");
    }, x: function(w, x, I) {
      g.copyWithin(w, x, x + I);
    }, w: function(w) {
      var x = g.length;
      if (2147483648 < (w >>>= 0))
        return false;
      for (var I = 1; 4 >= I; I *= 2) {
        var G = x * (1 + 0.2 / I);
        G = Math.min(G, w + 100663296);
        var P = Math, j = P.min;
        G = Math.max(w, G), G += (65536 - G % 65536) % 65536;
        e: {
          var K = c.buffer;
          try {
            c.grow(j.call(P, 2147483648, G) - K.byteLength + 65535 >>> 16), D();
            var X = 1;
            break e;
          } catch {
          }
          X = void 0;
        }
        if (X)
          return true;
      }
      return false;
    }, z: function() {
      return 52;
    }, u: function() {
      return 70;
    }, y: function(w, x, I, G) {
      for (var P = 0, j = 0; j < I; j++) {
        var K = k[x >> 2], X = k[x + 4 >> 2];
        x += 8;
        for (var Q = 0; Q < X; Q++) {
          var J = g[K + Q], re = pn[w];
          J === 0 || J === 10 ? ((w === 1 ? o : u)(d(re, 0)), re.length = 0) : re.push(J);
        }
        P += X;
      }
      return k[G >> 2] = P, 0;
    } };
    (function() {
      function w(P) {
        s.asm = P.exports, c = s.asm.D, D(), L = s.asm.I, U.unshift(s.asm.E), --H == 0 && q && (P = q, q = null, P());
      }
      function x(P) {
        w(P.instance);
      }
      function I(P) {
        return (typeof fetch == "function" ? fetch(r, { credentials: "same-origin" }).then(function(j) {
          if (!j.ok)
            throw "failed to load wasm binary file at '" + r + "'";
          return j.arrayBuffer();
        }).catch(function() {
          return R();
        }) : Promise.resolve().then(function() {
          return R();
        })).then(function(j) {
          return WebAssembly.instantiate(j, G);
        }).then(function(j) {
          return j;
        }).then(P, function(j) {
          u("failed to asynchronously prepare wasm: " + j), ee(j);
        });
      }
      var G = { a: Hl };
      if (H++, s.instantiateWasm)
        try {
          return s.instantiateWasm(G, w);
        } catch (P) {
          u("Module.instantiateWasm callback failed with error: " + P), f(P);
        }
      (typeof WebAssembly.instantiateStreaming != "function" || A() || typeof fetch != "function" ? I(x) : fetch(r, { credentials: "same-origin" }).then(function(P) {
        return WebAssembly.instantiateStreaming(P, G).then(x, function(j) {
          return u("wasm streaming compile failed: " + j), u("falling back to ArrayBuffer instantiation"), I(x);
        });
      })).catch(f);
    })();
    var qa = s.___getTypeName = function() {
      return (qa = s.___getTypeName = s.asm.F).apply(null, arguments);
    };
    function fi() {
      return (fi = s.asm.H).apply(null, arguments);
    }
    function Ht() {
      return (Ht = s.asm.J).apply(null, arguments);
    }
    function Ya() {
      0 < H || (O(T), 0 < H || n || (n = true, s.calledRun = true, p || (O(U), l(s), O(M))));
    }
    return s.__embind_initialize_bindings = function() {
      return (s.__embind_initialize_bindings = s.asm.G).apply(null, arguments);
    }, s.dynCall_jiji = function() {
      return (s.dynCall_jiji = s.asm.K).apply(null, arguments);
    }, q = function w() {
      n || Ya(), n || (q = w);
    }, Ya(), t.ready;
  };
})();
async function Pl(e) {
  let t = await YD({ instantiateWasm(r, n) {
    WebAssembly.instantiate(e, r).then((i) => {
      i instanceof WebAssembly.Instance ? n(i) : n(i.instance);
    });
  } });
  return Il(t);
}
var de;
var er = new Array(128).fill(void 0);
er.push(void 0, null, true, false);
var ln = er.length;
function Qt(e) {
  ln === er.length && er.push(er.length + 1);
  let t = ln;
  return ln = er[t], er[t] = e, t;
}
function Rt(e) {
  return er[e];
}
function ZD(e) {
  e < 132 || (er[e] = ln, ln = e);
}
function tr(e) {
  let t = Rt(e);
  return ZD(e), t;
}
var fn = 0;
var sn = null;
function ai() {
  return (sn === null || sn.byteLength === 0) && (sn = new Uint8Array(de.memory.buffer)), sn;
}
var oi = new TextEncoder("utf-8");
var JD = typeof oi.encodeInto == "function" ? function(e, t) {
  return oi.encodeInto(e, t);
} : function(e, t) {
  let r = oi.encode(e);
  return t.set(r), { read: e.length, written: r.length };
};
function ja(e, t, r) {
  if (r === void 0) {
    let u = oi.encode(e), s = t(u.length);
    return ai().subarray(s, s + u.length).set(u), fn = u.length, s;
  }
  let n = e.length, i = t(n), a = ai(), o = 0;
  for (; o < n; o++) {
    let u = e.charCodeAt(o);
    if (u > 127)
      break;
    a[i + o] = u;
  }
  if (o !== n) {
    o !== 0 && (e = e.slice(o)), i = r(i, n, n = o + e.length * 3);
    let u = ai().subarray(i + o, i + n), s = JD(e, u);
    o += s.written;
  }
  return fn = o, i;
}
function Rl(e) {
  return e == null;
}
var un = null;
function Je() {
  return (un === null || un.byteLength === 0) && (un = new Int32Array(de.memory.buffer)), un;
}
var Ul = new TextDecoder("utf-8", { ignoreBOM: true, fatal: true });
Ul.decode();
function si(e, t) {
  return Ul.decode(ai().subarray(e, e + t));
}
function KD(e, t) {
  if (!(e instanceof t))
    throw new Error(`expected instance of ${t.name}`);
  return e.ptr;
}
var ui = class {
  static __wrap(e) {
    let t = Object.create(ui.prototype);
    return t.ptr = e, t;
  }
  __destroy_into_raw() {
    let e = this.ptr;
    return this.ptr = 0, e;
  }
  free() {
    let e = this.__destroy_into_raw();
    de.__wbg_bbox_free(e);
  }
  get x() {
    return de.__wbg_get_bbox_x(this.ptr);
  }
  set x(e) {
    de.__wbg_set_bbox_x(this.ptr, e);
  }
  get y() {
    return de.__wbg_get_bbox_y(this.ptr);
  }
  set y(e) {
    de.__wbg_set_bbox_y(this.ptr, e);
  }
  get width() {
    return de.__wbg_get_bbox_width(this.ptr);
  }
  set width(e) {
    de.__wbg_set_bbox_width(this.ptr, e);
  }
  get height() {
    return de.__wbg_get_bbox_height(this.ptr);
  }
  set height(e) {
    de.__wbg_set_bbox_height(this.ptr, e);
  }
};
var Bl = class {
  static __wrap(e) {
    let t = Object.create(Bl.prototype);
    return t.ptr = e, t;
  }
  __destroy_into_raw() {
    let e = this.ptr;
    return this.ptr = 0, e;
  }
  free() {
    let e = this.__destroy_into_raw();
    de.__wbg_renderedimage_free(e);
  }
  get width() {
    return de.renderedimage_width(this.ptr) >>> 0;
  }
  get height() {
    return de.renderedimage_height(this.ptr) >>> 0;
  }
  asPng() {
    try {
      let n = de.__wbindgen_add_to_stack_pointer(-16);
      de.renderedimage_asPng(n, this.ptr);
      var e = Je()[n / 4 + 0], t = Je()[n / 4 + 1], r = Je()[n / 4 + 2];
      if (r)
        throw tr(t);
      return tr(e);
    } finally {
      de.__wbindgen_add_to_stack_pointer(16);
    }
  }
  get pixels() {
    let e = de.renderedimage_pixels(this.ptr);
    return tr(e);
  }
};
var za = class {
  static __wrap(e) {
    let t = Object.create(za.prototype);
    return t.ptr = e, t;
  }
  __destroy_into_raw() {
    let e = this.ptr;
    return this.ptr = 0, e;
  }
  free() {
    let e = this.__destroy_into_raw();
    de.__wbg_resvg_free(e);
  }
  constructor(e, t) {
    try {
      let u = de.__wbindgen_add_to_stack_pointer(-16);
      var r = Rl(t) ? 0 : ja(t, de.__wbindgen_malloc, de.__wbindgen_realloc), n = fn;
      de.resvg_new(u, Qt(e), r, n);
      var i = Je()[u / 4 + 0], a = Je()[u / 4 + 1], o = Je()[u / 4 + 2];
      if (o)
        throw tr(a);
      return za.__wrap(i);
    } finally {
      de.__wbindgen_add_to_stack_pointer(16);
    }
  }
  get width() {
    return de.resvg_width(this.ptr);
  }
  get height() {
    return de.resvg_height(this.ptr);
  }
  render() {
    try {
      let n = de.__wbindgen_add_to_stack_pointer(-16);
      de.resvg_render(n, this.ptr);
      var e = Je()[n / 4 + 0], t = Je()[n / 4 + 1], r = Je()[n / 4 + 2];
      if (r)
        throw tr(t);
      return Bl.__wrap(e);
    } finally {
      de.__wbindgen_add_to_stack_pointer(16);
    }
  }
  toString() {
    try {
      let r = de.__wbindgen_add_to_stack_pointer(-16);
      de.resvg_toString(r, this.ptr);
      var e = Je()[r / 4 + 0], t = Je()[r / 4 + 1];
      return si(e, t);
    } finally {
      de.__wbindgen_add_to_stack_pointer(16), de.__wbindgen_free(e, t);
    }
  }
  innerBBox() {
    let e = de.resvg_innerBBox(this.ptr);
    return e === 0 ? void 0 : ui.__wrap(e);
  }
  getBBox() {
    let e = de.resvg_getBBox(this.ptr);
    return e === 0 ? void 0 : ui.__wrap(e);
  }
  cropByBBox(e) {
    KD(e, ui), de.resvg_cropByBBox(this.ptr, e.ptr);
  }
  imagesToResolve() {
    try {
      let n = de.__wbindgen_add_to_stack_pointer(-16);
      de.resvg_imagesToResolve(n, this.ptr);
      var e = Je()[n / 4 + 0], t = Je()[n / 4 + 1], r = Je()[n / 4 + 2];
      if (r)
        throw tr(t);
      return tr(e);
    } finally {
      de.__wbindgen_add_to_stack_pointer(16);
    }
  }
  resolveImage(e, t) {
    try {
      let i = de.__wbindgen_add_to_stack_pointer(-16), a = ja(e, de.__wbindgen_malloc, de.__wbindgen_realloc), o = fn;
      de.resvg_resolveImage(i, this.ptr, a, o, Qt(t));
      var r = Je()[i / 4 + 0], n = Je()[i / 4 + 1];
      if (n)
        throw tr(r);
    } finally {
      de.__wbindgen_add_to_stack_pointer(16);
    }
  }
};
async function QD(e, t) {
  if (typeof Response == "function" && e instanceof Response) {
    if (typeof WebAssembly.instantiateStreaming == "function")
      try {
        return await WebAssembly.instantiateStreaming(e, t);
      } catch (n) {
        if (e.headers.get("Content-Type") != "application/wasm")
          console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", n);
        else
          throw n;
      }
    let r = await e.arrayBuffer();
    return await WebAssembly.instantiate(r, t);
  } else {
    let r = await WebAssembly.instantiate(e, t);
    return r instanceof WebAssembly.Instance ? { instance: r, module: e } : r;
  }
}
function ey() {
  let e = {};
  return e.wbg = {}, e.wbg.__wbg_new_15d3966e9981a196 = function(t, r) {
    let n = new Error(si(t, r));
    return Qt(n);
  }, e.wbg.__wbindgen_memory = function() {
    let t = de.memory;
    return Qt(t);
  }, e.wbg.__wbg_buffer_cf65c07de34b9a08 = function(t) {
    let r = Rt(t).buffer;
    return Qt(r);
  }, e.wbg.__wbg_newwithbyteoffsetandlength_9fb2f11355ecadf5 = function(t, r, n) {
    let i = new Uint8Array(Rt(t), r >>> 0, n >>> 0);
    return Qt(i);
  }, e.wbg.__wbindgen_object_drop_ref = function(t) {
    tr(t);
  }, e.wbg.__wbg_new_537b7341ce90bb31 = function(t) {
    let r = new Uint8Array(Rt(t));
    return Qt(r);
  }, e.wbg.__wbg_instanceof_Uint8Array_01cebe79ca606cca = function(t) {
    let r;
    try {
      r = Rt(t) instanceof Uint8Array;
    } catch {
      r = false;
    }
    return r;
  }, e.wbg.__wbindgen_string_get = function(t, r) {
    let n = Rt(r), i = typeof n == "string" ? n : void 0;
    var a = Rl(i) ? 0 : ja(i, de.__wbindgen_malloc, de.__wbindgen_realloc), o = fn;
    Je()[t / 4 + 1] = o, Je()[t / 4 + 0] = a;
  }, e.wbg.__wbg_new_b525de17f44a8943 = function() {
    let t = new Array();
    return Qt(t);
  }, e.wbg.__wbindgen_string_new = function(t, r) {
    let n = si(t, r);
    return Qt(n);
  }, e.wbg.__wbg_push_49c286f04dd3bf59 = function(t, r) {
    return Rt(t).push(Rt(r));
  }, e.wbg.__wbg_length_27a2afe8ab42b09f = function(t) {
    return Rt(t).length;
  }, e.wbg.__wbg_set_17499e8aa4003ebd = function(t, r, n) {
    Rt(t).set(Rt(r), n >>> 0);
  }, e.wbg.__wbindgen_throw = function(t, r) {
    throw new Error(si(t, r));
  }, e;
}
function ty(e, t) {
  return de = e.exports, Nl.__wbindgen_wasm_module = t, un = null, sn = null, de;
}
async function Nl(e) {
  typeof e > "u" && (e = new URL("index_bg.wasm", void 0));
  let t = ey();
  (typeof e == "string" || typeof Request == "function" && e instanceof Request || typeof URL == "function" && e instanceof URL) && (e = fetch(e));
  let { instance: r, module: n } = await QD(await e, t);
  return ty(r, n);
}
var ry = Nl;
var Va = false;
var Ml = async (e) => {
  if (Va)
    throw new Error("Already initialized. The `initWasm()` function can be used only once.");
  await ry(await e), Va = true;
};
var Gl = class extends za {
  constructor(e, t) {
    if (!Va)
      throw new Error("Wasm has not been initialized. Call `initWasm()` function.");
    super(e, JSON.stringify(t));
  }
};
var Wl = sy;
var ny = /[\s\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,\-.\/:;<=>?@\[\]^_`{|}~]+/;
var iy = /^[a-z\u00E0-\u00FCA-Z\u00C0-\u00DC][\d|a-z\u00E0-\u00FCA-Z\u00C0-\u00DC]*$/;
var ay = /([A-Z\u00C0-\u00DC]{4,})/g;
var oy = /^[A-Z\u00C0-\u00DC]+$/;
function sy(e) {
  for (var t = e.split(ny), r = t.length, n = new Array(r), i = 0; i < r; i++) {
    var a = t[i];
    if (a !== "") {
      var o = iy.test(a) && !oy.test(a);
      o && (a = a.replace(ay, function(s, l, f) {
        return uy(s, a.length - f - s.length == 0);
      }));
      var u = a[0];
      u = i > 0 ? u.toUpperCase() : u.toLowerCase(), n[i] = u + (o ? a.slice(1) : a.slice(1).toLowerCase());
    }
  }
  return n.join("");
}
function uy(e, t) {
  var r = e.split(""), n = r.shift().toUpperCase(), i = t ? r.pop().toLowerCase() : r.pop();
  return n + r.join("").toLowerCase() + i;
}
var cn = (e) => e.replace(/\\/g, "\\\\").replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/\t/g, "\\t").replace(/\f/g, "\\f").replace(/"/g, '\\"');
var $l = (e) => {
  let t = "", r = e.getAttribute("style");
  if (r) {
    let a = r.replace(/\n/g, "").replace(/\s\s+/g, " ").split(/;(?![^(]*\))/).reduce((o, u) => {
      let [s, l] = u.split(/:(.+)/);
      return s && l && (o += `"${Wl(s.trim())}": "${cn(l.trim())}",`), o;
    }, "");
    a.endsWith(",") && (a = a.slice(0, -1)), a && (t += `"style":{${a}},`);
  }
  let n = e.getAttribute("src");
  if (n) {
    let i = e.getAttribute("width"), a = e.getAttribute("height");
    i && a ? t += `"src":"${cn(n)}", "width":"${i}", "height":"${a}",` : (console.warn("Image missing width or height attribute as required by Satori"), t += `"src":"${cn(n)}",`);
  }
  return t;
};
var li = (e) => e.endsWith(",") ? e.slice(0, -1) : e;
async function jl(e) {
  let t = "";
  await new HTMLRewriter().on("*", { element(n) {
    let i = $l(n);
    t += `{"type":"${n.tagName}", "props":{${i}"children": [`;
    try {
      n.onEndTag(() => {
        t = li(t), t += "]}},";
      });
    } catch {
      t = li(t), t += "]}},";
    }
  }, text(n) {
    if (n.text) {
      let i = cn(n.text);
      i && (t += `"${i}",`);
    }
  } }).transform(new Response(`<div style="display: flex; flex-direction: column;">${e}</div>`)).text(), t = li(t);
  try {
    return JSON.parse(t);
  } catch (n) {
    return console.error(n), null;
  }
}
async function zl({ family: e, weight: t, text: r }) {
  let n = { family: `${encodeURIComponent(e)}${t ? `:wght@${t}` : ""}` };
  r ? n.text = r : n.subset = "latin";
  let i = `https://fonts.googleapis.com/css2?${Object.keys(n).map((f) => `${f}=${n[f]}`).join("&")}`, a = caches.default, o = i, u = await a.match(o);
  u || (u = await fetch(`${i}`, { headers: { "User-Agent": "Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_6_8; de-at) AppleWebKit/533.21.1 (KHTML, like Gecko) Version/5.0.5 Safari/533.21.1" } }), u = new Response(u.body, u), u.headers.append("Cache-Control", "s-maxage=3600"), await a.put(o, u.clone()));
  let l = (await u.text()).match(/src: url\((.+)\) format\('(opentype|truetype)'\)/)?.[1];
  if (!l)
    throw new Error("Could not find font URL");
  return fetch(l).then((f) => f.arrayBuffer());
}
var cy = async () => {
  try {
    await Ml(fy);
  } catch (e) {
    if (e instanceof Error && e.message.includes("Already initialized"))
      return;
    throw e;
  }
};
var py = async () => {
  try {
    let e = await Pl(ly);
    await ol(e);
  } catch (e) {
    throw e;
  }
};
var Vl = async ({ element: e, options: t }) => {
  await Promise.allSettled([cy(), py()]);
  let r = typeof e == "string" ? await jl(e) : e, n = t.width, i = t.height, a = { width: 1200, height: 630 };
  n && i ? a = { width: n, height: i } : n ? a = { width: n } : i && (a = { height: i });
  let o = await Ll(r, { ...a, fonts: t?.fonts?.length ? t.fonts : [{ name: "Bitter", data: await zl({ family: "Bitter", weight: 600 }), weight: 500, style: "normal" }] });
  return (t?.format || "png") === "svg" ? o : new Gl(o, { fitTo: "width" in a ? { mode: "width", value: a.width } : { mode: "height", value: a.height } }).render().asPng();
};
var Ha = class extends Response {
  constructor(t, r) {
    if (super(), r.format === "svg")
      return (async () => {
        let n = await Vl({ element: t, options: r });
        return new Response(n, { headers: { "Content-Type": "image/svg+xml", "Cache-Control": r.debug ? "no-cache, no-store" : "public, immutable, no-transform, max-age=31536000", ...r.headers }, status: r.status || 200, statusText: r.statusText });
      })();
    {
      let n = new ReadableStream({ async start(i) {
        let a = await Vl({ element: t, options: r });
        i.enqueue(a), i.close();
      } });
      return new Response(n, { headers: { "Content-Type": "image/png", "Cache-Control": r.debug ? "no-cache, no-store" : "public, immutable, no-transform, max-age=31536000", ...r.headers }, status: r.status || 200, statusText: r.statusText });
    }
  }
};

// src/index.js
import { randomUUID } from "node:crypto";
import { Buffer } from "node:buffer";

// src/fontdata.js
var FONTDATA = "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Ao4D6AAHAAAlITUhETMRIQKO/TwBLGwBLMDYAlD9sAAAAf/KAPYCjgPoAAcAACUhNTMRMxEzAo79PPbY9vZsAob9egAAAf/KAMACjgPoAAkAACc1MxEzETMVIxU29tj29sDYAlD9emw2AAAB/8oAwAKOA+gACQAANzUjNTMRMxEzFcD29tj2wDZsAob9sNgAAAH/ygDAAo4D6AAHAAAlITUzETMRMwKO/Tz22PbA2AJQ/bAAAAH/yv5wAo4D6AALAAAlIREjESE1IREzESECjv7UbP7UASxsASz2/XoChmwChv16AAH/yv5wAo4D6AALAAAlIREjESE1IREzESECjv7UbP7UASxsASz2/XoCUNgCUP16AAH/yv5wAo4D6AALAAAlIREjESE1IREzESECjv7UbP7UASxsASzA/bAChmwChv2wAAH/yv5wAo4D6AALAAAlIREjESE1IREzESECjv7UbP7UASxsASzA/bACUNgCUP2wAAH/yv5wAo4D6AALAAAlIREjESE1MxEzETMCjv7UbP7U9tj29v16AoZsAob9egAB/8r+cAKOA+gACwAAJSMRIxEjNSERMxEhAo722PYBLGwBLPb9egKGbAKG/XoAAf/K/nACjgPoAAsAACUjESMRIzUzETMRMwKO9tj29tj29v16AoZsAob9egAB/8r+cAKOA+gADQAAJSMRIxEhNTMRMxEzFSMBmDZs/tT22Pb2wP2wAlDYAlD9emwAAAH/yv5wAo4D6AANAAAlIREjESM1IzUzETMRMwKO/tRsNvb22PbA/bACUDZsAob9sAAAAf/K/nACjgPoAA0AAAEjESM1IREzETMVMxUjAZjY9gEsbDb29v5wAlDYAlD9sDZsAAAB/8r+cAKOA+gADQAAJSMRIxEjNTM1MxEzESECjvbY9vY2bAEswP2wAoZsNgJQ/bAAAAH/yv5wAo4D6AALAAAlIREjESE1MxEzETMCjv7UbP7U9tj2wP2wAlDYAlD9sAAB/8r+cAKOA+gACwAAJSMRIxEjNSERMxEhAo722PYBLGwBLMD9sAJQ2AJQ/bAAAf/K/nACjgPoAAsAACUjESMRIzUzETMRMwKO9tj29tj29v16AlDYAlD9egAB/8r+cAKOA+gACwAAJSMRIxEjNTMRMxEzAo722Pb22PbA/bAChmwChv2wAAH/yv5wAo4D6AAL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cAV4+ogAAAEAAP5wAJYD6AADAAARETMRlv5wBXj6iAAAAQAA/nAASwPoAAMAABERMxFL/nAFePqIAAABASz+cAJYA+gAAwAAAREhEQEsASz+cAV4+ogAKv/o/lgCGAOoAAsAFwAjAC8AOwBHAFMAXwBrAHcAgwCPAJsApwCzAL8AywDXAOMA7wD7AQcBEwEfASsBNwFDAU8BWwFnAXMBfwGLAZcBowGvAbsBxwHTAd8B6wH3AAABNDYzMhYVFAYjIiYnNDYzMhYVFAYjIiYnNDYzMhYVFAYjIiYFNDYzMhYVFAYjIiYnNDYzMhYVFAYjIiYnNDYzMhYVFAYjIiYFNDYzMhYVFAYjIiYnNDYzMhYVFAYjIiYnNDYzMhYVFAYjIiYFNDYzMhYVFAYjIiYnNDYzMhYVFAYjIiYnNDYzMhYVFAYjIiYFNDYzMhYVFAYjIiYnNDYzMhYVFAYjIiYnNDYzMhYVFAYjIiYFNDYzMhYVFAYjIiYnNDYzMhYVFAYjIiYnNDYzMhYVFAYjIiYFNDYzMhYVFAYjIiYnNDYzMhYVFAYjIiYnNDYzMhYVFAYjIiYFNDYzMhYVFAYjIiYnNDYzMhYVFAYjIiYnNDYzMhYVFAYjIiYFNDYzMhYVFAYjIiYnNDYzMhYVFAYjIiYnNDYzMhYVFAYjIiYFNDYzMhYVFAYjIiYnNDYzMhYVFAYjIiYnNDYzMhYVFAYjIiYFNDYzMhYVFAYjIiYnNDYzMhYVFAYjIiYnNDYzMhYVFAYjIiYFNDYzMhYVFAYjIiYnNDYzMhYVFAYjIiYnNDYzMhYVFAYjIiYFNDYzMhYVFAYjIiYnNDYzMhYVFAYjIiYnNDYzMhYVFAYjIiYFNDYzMhYVFAYjIiYnNDYzMhYVFAYjIiYnNDYzMhYVFAYjIiYB0BUPDxUVDw8VyBUPDxUVDw8VyBUPDxUVDw8VATgOCgoODgoKDsgOCgoODgoKDsgOCgoODgoKDgHoFQ8PFRUPDxXIFQ8PFRUPDxXIFQ8PFRUPDxUBOA4KCg4OCgoOyA4KCg4OCgoOyA4KCg4OCgoOAegVDw8VFQ8PFcgVDw8VFQ8PFcgVDw8VFQ8PFQE4DgoKDg4KCg7IDgoKDg4KCg7IDgoKDg4KCg4B6BUPDxUVDw8VyBUPDxUVDw8VyBUPDxUVDw8VATgOCgoODgoKDsgOCgoODgoKDsgOCgoODgoKDgHoFQ8PFRUPDxXIFQ8PFRUPDxXIFQ8PFRUPDxUBOA4KCg4OCgoOyA4KCg4OCgoOyA4KCg4OCgoOAegVDw8VFQ8PFcgVDw8VFQ8PFcgVDw8VFQ8PFQE4DgoKDg4KCg7IDgoKDg4KCg7IDgoKDg4KCg4B6BUPDxUVDw8VyBUPDxUVDw8VyBUPDxUVDw8VATgOCgoODgoKDsgOCgoODgoKDsgOCgoODgoKDgOEDxUVDw8VFQ8PFRUPDxUVDw8VFQ8PFRVVCg4OCgoODgoKDg4KCg4OCgoODgoKDg5aDxUVDw8VFQ8PFRUPDxUVDw8VFQ8PFRVVCg4OCgoODgoKDg4KCg4OCgoODgoKDg5aDxUVDw8VFQ8PFRUPDxUVDw8VFQ8PFRVVCg4OCgoODgoKDg4KCg4OCgoODgoKDg5aDxUVDw8VFQ8PFRUPDxUVDw8VFQ8PFRVVCg4OCgoODgoKDg4KCg4OCgoODgoKDg5aDxUVDw8VFQ8PFRUPDxUVDw8VFQ8PFRVVCg4OCgoODgoKDg4KCg4OCgoODgoKDg5aDxUVDw8VFQ8PFRUPDxUVDw8VFQ8PFRVVCg4OCgoODgoKDg4KCg4OCgoODgoKDg5aDxUVDw8VFQ8PFRUPDxUVDw8VFQ8PFRVVCg4OCgoODgoKDg4KCg4OCgoODgoKDg4AACr/3P5MAioDugALABcAIwAvADsARwBTAF8AawB3AIMAjwCbAKcAswC/AMsA1wDjAO8A+wEHARMBHwErATcBQwFPAVsBZwFzAX8BiwGXAaMBrwG7AccB0wHfAesB9wAAATQ2MzIWFRQGIyImJzQ2MzIWFRQGIyImJzQ2MzIWFRQGIyImBTQ2MzIWFRQGIyImJzQ2MzIWFRQGIyImJzQ2MzIWFRQGIyImBTQ2MzIWFRQGIyImJzQ2MzIWFRQGIyImJzQ2MzIWFRQGIyImBTQ2MzIWFRQGIyImJzQ2MzIWFRQGIyImJzQ2MzIWFRQGIyImBTQ2MzIWFRQGIyImJzQ2MzIWFRQGIyImJzQ2MzIWFRQGIyImBTQ2MzIWFRQGIyImJzQ2MzIWFRQGIyImJzQ2MzIWFRQGIyImBTQ2MzIWFRQGIyImJzQ2MzIWFRQGIyImJzQ2MzIWFRQGIyImBTQ2MzIWFRQGIyImJzQ2MzIWFRQGIyImJzQ2MzIWFRQGIyImBTQ2MzIWFRQGIyImJzQ2MzIWFRQGIyImJzQ2MzIWFRQGIyImBTQ2MzIWFRQGIyImJzQ2MzIWFRQGIyImJzQ2MzIWFRQGIyImBTQ2MzIWFRQGIyImJzQ2MzIWFRQGIyImJzQ2MzIWFRQGIyImBTQ2MzIWFRQGIyImJzQ2MzIWFRQGIyImJzQ2MzIWFRQGIyImBTQ2MzIWFRQGIyImJzQ2MzIWFRQGIyImJzQ2MzIWFRQGIyImBTQ2MzIWFRQGIyImJzQ2MzIWFRQGIyImJzQ2MzIWFRQGIyImAb4gFhcfHxcWIMggFhcfHxcWIMggFhcfHxcWIAE+FQ8PFRUPDxXIFQ8PFRUPDxXIFQ8PFRUPDxUB4iAWFx8fFxYgyCAWFx8fFxYgyCAWFx8fFxYgAT4VDw8VFQ8PFcgVDw8VFQ8PFcgVDw8VFQ8PFQHiIBYXHx8XFiDIIBYXHx8XFiDIIBYXHx8XFiABPhUPDxUVDw8VyBUPDxUVDw8VyBUPDxUVDw8VAeIgFhcfHxcWIMggFhcfHxcWIMggFhcfHxcWIAE+FQ8PFRUPDxXIFQ8PFRUPDxXIFQ8PFRUPDxUB4iAWFx8fFxYgyCAWFx8fFxYgyCAWFx8fFxYgAT4VDw8VFQ8PFcgVDw8VFQ8PFcgVDw8VFQ8PFQHiIBYXHx8XFiDIIBYXHx8XFiDIIBYXHx8XFiABPhUPDxUVDw8VyBUPDxUVDw8VyBUPDxUVDw8VAeIgFhcfHxcWIMggFhcfHxcWIMggFhcfHxcWIAE+FQ8PFRUPDxXIFQ8PFRUPDxXIFQ8PFRUPDxUDhBcfHxcWICAWFx8fFxYgIBYXHx8XFiAgTg8VFQ8PFRUPDxUVDw8VFQ8PFRUPDxUVVRcfHxcWICAWFx8fFxYgIBYXHx8XFiAgTg8VFQ8PFRUPDxUVDw8VFQ8PFRUPDxUVVRcfHxcWICAWFx8fFxYgIBYXHx8XFiAgTg8VFQ8PFRUPDxUVDw8VFQ8PFRUPDxUVVRcfHxcWICAWFx8fFxYgIBYXHx8XFiAgTg8VFQ8PFRUPDxUVDw8VFQ8PFRUPDxUVVRcfHxcWICAWFx8fFxYgIBYXHx8XFiAgTg8VFQ8PFRUPDxUVDw8VFQ8PFRUPDxUVVRcfHxcWICAWFx8fFxYgIBYXHx8XFiAgTg8VFQ8PFRUPDxUVDw8VFQ8PFRUPDxUVVRcfHxcWICAWFx8fFxYgIBYXHx8XFiAgTg8VFQ8PFRUPDxUVDw8VFQ8PFRUPDxUVAAAq/8r+OgJFA9UACwAXACMALwA7AEcAUwBfAGsAdwCDAI8AmwCnALMAvwDLANcA4wDvAPsBBwETAR8BKwE3AUMBTwFbAWcBcwF/AYsBlwGjAa8BuwHHAdMB3wHrAfcAAAE0NjMyFhUUBiMiJic0NjMyFhUUBiMiJic0NjMyFhUUBiMiJgU0NjMyFhUUBiMiJic0NjMyFhUUBiMiJic0NjMyFhUUBiMiJgU0NjMyFhUUBiMiJic0NjMyFhUUBiMiJic0NjMyFhUUBiMiJgU0NjMyFhUUBiMiJic0NjMyFhUUBiMiJic0NjMyFhUUBiMiJgU0NjMyFhUUBiMiJic0NjMyFhUUBiMiJic0NjMyFhUUBiMiJgU0NjMyFhUUBiMiJic0NjMyFhUUBiMiJic0NjMyFhUUBiMiJgU0NjMyFhUUBiMiJic0NjMyFhUUBiMiJic0NjMyFhUUBiMiJgU0NjMyFhUUBiMiJic0NjMyFhUUBiMiJic0NjMyFhUUBiMiJgU0NjMyFhUUBiMiJic0NjMyFhUUBiMiJic0NjMyFhUUBiMiJgU0NjMyFhUUBiMiJic0NjMyFhUUBiMiJic0NjMyFhUUBiMiJgU0NjMyFhUUBiMiJic0NjMyFhUUBiMiJic0NjMyFhUUBiMiJgU0NjMyFhUUBiMiJic0NjMyFhUUBiMiJic0NjMyFhUUBiMiJgU0NjMyFhUUBiMiJic0NjMyFhUUBiMiJic0NjMyFhUUBiMiJgU0NjMyFhUUBiMiJic0NjMyFhUUBiMiJic0NjMyFhUUBiMiJgGjLyIiLy8iIi/ILyIiLy8iIi/ILyIiLy8iIi8BRyAWFx8fFxYgyCAWFx8fFxYgyCAWFx8fFxYgAdkvIiIvLyIiL8gvIiIvLyIiL8gvIiIvLyIiLwFHIBYXHx8XFiDIIBYXHx8XFiDIIBYXHx8XFiAB2S8iIi8vIiIvyC8iIi8vIiIvyC8iIi8vIiIvAUcgFhcfHxcWIMggFhcfHxcWIMggFhcfHxcWIAHZLyIiLy8iIi/ILyIiLy8iIi/ILyIiLy8iIi8BRyAWFx8fFxYgyCAWFx8fFxYgyCAWFx8fFxYgAdkvIiIvLyIiL8gvIiIvLyIiL8gvIiIvLyIiLwFHIBYXHx8XFiDIIBYXHx8XFiDIIBYXHx8XFiAB2S8iIi8vIiIvyC8iIi8vIiIvyC8iIi8vIiIvAUcgFhcfHxcWIMggFhcfHxcWIMggFhcfHxcWIAHZLyIiLy8iIi/ILyIiLy8iIi/ILyIiLy8iIi8BRyAWFx8fFxYgyCAWFx8fFxYgyCAWFx8fFxYgA4QiLy8iIi8vIiIvLyIiLy8iIi8vIiIvL0IXHx8XFiAgFhcfHxcWICAWFx8fFxYgIE4iLy8iIi8vIiIvLyIiLy8iIi8vIiIvL0IXHx8XFiAgFhcfHxcWICAWFx8fFxYgIE4iLy8iIi8vIiIvLyIiLy8iIi8vIiIvL0IXHx8XFiAgFhcfHxcWICAWFx8fFxYgIE4iLy8iIi8vIiIvLyIiLy8iIi8vIiIvL0IXHx8XFiAgFhcfHxcWICAWFx8fFxYgIE4iLy8iIi8vIiIvLyIiLy8iIi8vIiIvL0IXHx8XFiAgFhcfHxcWICAWFx8fFxYgIE4iLy8iIi8vIiIvLyIiLy8iIi8vIiIvL0IXHx8XFiAgFhcfHxcWICAWFx8fFxYgIE4iLy8iIi8vIiIvLyIiLy8iIi8vIiIvL0IXHx8XFiAgFhcfHxcWICAWFx8fFxYgIAAAAQAAAzkCWAPoAAMAABE1IRUCWAM5r68AAQIN/nACWAPoAAMAAAERMxECDUv+cAV4+ogAAAEAAP5wASwBLAADAAARESERASz+cAK8/UQAAQEs/nACWAEsAAMAAAERIREBLAEs/nACvP1EAAEAAAEsASwD6AADAAARESERASwBLAK8/UQAAQAA/nACWAPoAAUAABERIREhEQEsASz+cAV4/UT9RAACAAD+cAJYA+gAAwAHAAARESEZAiERASwBLAEsArz9RP1EArz9RAAAAQAA/nACWAPoAAUAAAEhESERIQJY/tT+1AJYASz9RAV4AAEAAP5wAlgD6AAFAAABIREhESECWP7U/tQCWP5wArwCvAABASwBLAJYA+gAAwAAAREhEQEsASwBLAK8/UQAAgAA/nACWAPoAAMABwAAAREhESERIREBLP7UASwBLAEs/UQCvAK8/UQAAQAA/nACWAPoAAUAAAEhESERIQJY/agBLAEs/nACvAK8//8AQf/mAh8CtgIGBE0AAP////3/5gJeAt4CBgROAAAAAwAdAAACJgLgABgAHAAmAAAzESM1NzU0NjYzMhYXByYmIyIGFRUzFSMRMxEzEQMiJjQ2MzIWFAZfQkIhSDobLxAWDRsNHyBgYMh0OiMvLyMkLi4BkFYFMzNQLQoHVgYGKCs1W/5wAev+FQJFKkYrK0YqAAACACL/9AI5As4AGAApAAAzESM1NzU0NjYzMhYXByYmIyIGFRUzFSMRBSImJjURMxEUFjMyNzcXBgZkQkIhRzobLxAWDRsNHiBgYAElKDEWcxAJBAQKDgoeAZBWBTMzUC0KB1YGBigrNVv+cAwhPyoCRP22FREBAVYEBgAAAgBQ/ugCbwQkABgAHAAAEyMRND4FNTUjNxcjFRQOBRURBxEzwnIiOENDOSJyrKpyIjlDQzgicnL+6AEaRl08LCk0TjzV09PxR149LCkzTTsBpkQC3AACAEr/WgIOA5gABQATAAATETMRMxUDETMTMyc1MxEjAyMXFUpm1tZznQQcZnScBBwBuAHg/nNT/aIB3v6O2Zn+IgFw0KD//wAk/7oCNANYAgYEWQAAAAEAAP7oAlgEEAACAAAREQECWP7oBSj9bAAAAf/0/yQCagPUAAUAABcnAQE3ATZCAf7+AkICNNxAAhgCGED9qAABAAD+6AJgBBAAAgAACQICYP2gAmD+6AKUApQAAf/u/yQCZAPUAAUAAAUBARcBAQIi/cwCNEL+AgH+3AJYAlhA/ej96AAAAAABAAAFngH4ACoAbgAGAAEAAAAAAAAAAAAAAAAAAwACAAAAKgAqAEwAgQCxANQA6gD+ATEBRwFcAX0BlgGlAdMB9QInAkkCkwK8AwADEQM3A1MDjwO8A9kD7wQvBGcElgTLBQgFLgWjBcYF0QXcBfQGEwZHBmkGmwbTBwkHKQdpB5EHswfOCAUIMAhfCHUIgAiLCJYIoQisCLcIwgjNCRYJIQleCWkJdAl/CYoJlQmgCa4JuQnECc8J2gnoCg0KGAojCmAKawqyCr0KyArTCt4K6Qr0Cv8LOQtBC3oLhQuQC5sLpguxC7wLxwvSDAYMEQwcDCcMMgw9DEgMUwxhDGwMdwyCDI0MmAyjDK4MuQzEDQ0NGA0jDS4NWg1lDYkNlA2fDaoNtQ3ADcsN1g3hDhIOHQ4oDjMOPg5JDlQOXw5qDnUOgA6LDpkOpA6+DsoO1Q7gDusO9g8BDwwPFw8iDy0POA9DD04PWQ9kD28Peg+FD5APmw+mD/AP+xAGEBEQHBAnEDIQQBCIEJMQnhCpELQQvxDKERgRIxFQEVsRZhFxEXwRhxGVEaARqxG2EcERzBIoEjMSPhJJEooSlRK7EsYS0RLcEvcTAhMNExgTIxMuEzkTRBNPE1oTZROlE7ATuxPGE9ET3BPnFCAUKxQ2FEEUTBRXFGIUbRR4FIMUjhSZFKQUrxS6FMUU0BTbFOYU8RT8FQcVEhUdFSgVVBV4FbYV7BYQFjcWRxZSFl0WaBZzFn4WiRaUFp8XBxcSF2wXdxeCF40XmBejF64XvBfHF9IX3RfoF/YYaxh2GIEYwhjNGRMZHhkpGTQZPxl9GYgZkxngGh4aKRo0Gj8aShpVGmAaaxrEGs8a2hrlGvAa+xsGGxEbHBsqGzUbQBtLG1YbYRtsG3cbghuNG5kbpRuwG7sb8xv+HCkcNBw/HEocVRxgHGscdhyBHIwclxyiHLEcvBzHHNIc3Rz1HQAdDB0XHSIdMB07HWMdbx16HYUdkB2bHaYdsR28Hccd0h3dHegeJB4vHjoeRR5QHlseZh5xHnwexx7SHt0e6B7zHv4fCR8XHyIfLR91H4Afix+WH6EfrB/7IAYgZyByIH0giCCTIJ4grCC3IMIgzSDYIOMhOiFFIVAhWyGmIcgh1CIUIh8iKiI1IkEicSJ8IocikiKdIqgisyK+Iski1CLfIxsjJiMxIzwjRyNSI10jlSOgI6sjtiPBI8wj1yPiI+0j+CQDJA4kGSQkJC8kOiRGJFEkXCRnJHIkfSSIJJMkniT3JTAlZCWHJcsmEiZFJoYmvScGJzUnhyfQKBYoUyiJKJEoySkdKVwpZCmlKc8qJipsKqAq4isqK00rgCvFK80r2CvtK/gsESxRLI8srSzkLPMs/S0zLXktrC3gLgYuQy57LsIuzC7tLyAvUy9yL5kvpC/3MCkwYjBsMJUwxDD9MS8xOTFDMXExjjG4MfcyLjKOMtgzIzNMM3YzpDPTM/I0MzRoNJA0pzTjNOs08zUCNSE1KTUxNTk1cDV4NYA1nDWkNaw1xjXONeA16DX/Ngc2DzZaNmI2jDbGNvA3DTcrN0g3UDeKN7A3uDf4OEM4kji+ORA5VzmWOcM6ATolOmE6iTrGOuk7QDtyO6o74TwaPEA8djy9PNo9HT1rPac9/D5PPlc+Yj5tPng+gz6OPpk+pD6vPro+xT7QPxk/Vj+LP6M/2j/iP+s/+kAIQBBAGEAgQEJASkBSQFpAYkBqQHJAekCCQIpAkkCaQKJAqkCyQLpAwkDnQO9A90ErQTNBfkG/QeFB7EIYQkNCS0JTQltCY0JrQnNCe0KjQuJC6kMBQyRDOkNWQ3tDpUPHQ/pEMURbRGNEa0SiRK1E4kTqRPJE+kUCRUVFcUWVRaBFq0W2RcxF9kYvRltGbkaGRtdHHkdQR35HmkfRR9lH/kgxSFpIfEiESI9ImkiiSK1ItUjASMtI00jeSOlI8UlCSXhJh0mySbpJ/Uo8SmJKbUqUSr1K9EsISxBLIksqSzJLQ0tLS6hLsEvHS+lL/0wbTEBMaUyLTL9M9E0cTSRNLE1sTXdNq02zTbtNw03LTgpONE48TkdOUk5dTnNOnU6lTtFO4076T0NPik+3T99P+VAvUE1QclCkUMtQ01DeUOZQ8VD5UQRRDFEXUSJRKlE1UUBRmlIGUoVSw1LbUwdTS1NvU6dT8VQLVGJUrVTDVORU8FT8VTBVUVVyVaxV5lX3VgJWI1ZDVk5WWVZiVm9WkFaiVrNWvlbJVtFW2VbhVu1W+VcFVw1XFlcyV15Xa1d+V45Xo1ezV8lX2lfwWAFYF1g6WEZYUlhlWHJYkFirWMVY1ljnWStZb1l+WYtZmlmuWctZ5FoKWnpal1qiWq9bHVtzW8hcCFwSXCFcMFw/XE5cZlx9XI1cnVysXLtdEl1gXa9d2V4xXoZetV6+Xsde0F7ZXuJe6170Xv1fBl8PXxhfIV9NX2Rfi1/HX+BgEmBUYGxgu2D9YRthOWFiYXVhm2HWYe5iHWJfYnZiv2MBYxxjN2NNY2tjdGN9Y4Zjj2OYY6FjqmOzY7xjxWPOY9dj4GPpY/Fj+WQyZGRkkWTEZQBlJmWTZbRl1GYDZhxmO2ZsZo1muWbsZw1nSmdvZ5FnrWfTZ/9oLmhCaHpouWjfaSlpdGmxadxqK2pzarJrGGtja6Fr12wYbFxsqGzpbUJti23BbfduHW42bmRuf26Tbptuo26zbyBvMG9Ab1BvYG9wb4BvkG+gb7BvwG/Qb+Bv8HAAcBBwIHAwcHZwhnCacKdwwHDtcPZxAXERcSVxOHFTcW5xiXGfcb9x6XH0cgRyE3IyckFylHLAcs9y2nLqcvJzPnN2c5RzsnPTc9tz43PtdAN0EHQrdD50mnTidSd1P3VXdW51hnWgdbh10nXrdgt2KnZJdml2iHandst253cZdyZ3O3dTd2N3c3eJd5l3sHfBd9h36XgAeBB4IXhZeKB4uHj1eRh5T3mHeax5/3oUekx6w3sxe1p72nxGfNp9Gn1ZfZl9/X4efjt+Q35LflN+b36MfrJ+xX7TfvJ++n8Cfwp/En8hfyl/MX85f0d/T39Xf19/Z39vf3d/f3+Hf4+AUYBfgG2Ae4CJgJeApYC4gMuA9YEdgSqBN4E/gUeBaIGJgaeBxYHcgfOCGII9gluCeYKpgs+C9YMKgx+DMoNFg1SDaYN+g56Du4Pbg/mEGoQihDKEQoRRhG6EiISYhKiEvITIhNGE2oTjhP2FGIU1hVKFdYWYhaWFtYW+hceF0IXZheKGC4YkhjSGRYZyhoyGlIazhr+G3IcIhzSHYYeNh7mH5ogsiFiIhIi2iOiJAokciTaJUIl4iaCJ0YoGii6KU4p7iqCK1osJi0aLh4uxi9uL74wDjCaMSYxsjI+MyIzrjQ6NSI1IjUiNSI1IjVSNYI1tjXqNkY2ojcON3o37jhiONo5UjmSOdI6EjpSOpI60jsSO1I7kjvSPA48SjyKPMo9Bj1CPY492j4uPoI+yj8eP3I/ukAGQFJApkD6QUJBlkHqQjJCfkLSQyZDckO6RApEWkSiRO5FQkWWReJGKkZ2RsJHCkdqR8pIKkiKSOZJQkmaSf5KYkrGSypLhkviTDpMkkzqTTJNek3KThpOZk62TwpPXk/GUBpQblDSUSJRclHWUipSelLeUz5TolQeVH5U3lVaVbpWFlaSVvpXVlfSWFpY3lmOWfpaZlrWW0JbglvGXEpcelyuXN5dEl1CXXZdpl3aXiJeal6yXvpfLl9eX5Jfxl/6YC5gYmCWYMpg/mEyYWZhmmHOYgJiNmJubNJ3NoGagcqCAoI2gm6CooLigzKDdoO6g/KERoSKhIqEioSqhMqFsoaqh1aH4ogCiDaIgoi6iQwAAAAEAAAABBJx4b2uoXw889QADA+gAAAAA3BxzpAAAAADdlx6g/zj+OgMgBCQAAAAGAAIAAAAAAAACWAAwAAAAFABWADwATgBnAHcAMABHAFQARgBSAHgAQQBKACsAWAArAFQAOgAkAEgAHAAHACQAGwA9AEcAUgBJADUAPQBcAD4AUgBUADAAWgBCAC4AUgA1AFIANQCCAD4AOwBGACkABgAzACgARwAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABT//v/+//4AEQBWADwAPAA8ADwAPABOAE4ATgBOAAYADABnAGcAZwBnAGcAZwBnAGcAaABnAGcAZwBnAF8AZwBnAGcAZwAwADAAMAAwADAAMAAwADAAMABHAEcARwAbAEcABgBUAFQAVABUAFQAVABUAFQAVABUAFQAVABGAFIAUgBSAGsAeAB4AHgAMAB4AAEAeABBAEEAQQBKAEoASgBKAEoASgBKAEoAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAGwAbABoAVABUAFQAVABUAFQAVAA6ADoAOgA6ADoAOgA6ADoARwAkACQAJAAkACQAJABIAEgASABIAEgASABIAEgASABIAEgASABIAEgASABIAEgASABIAEgASABIAEgAHAAHAAcABwAHABsAGwAbABsAGwAbABsAGwA9AD0APQA9AD0APQAGAFcANgBLAF0ANQBDAEcARwBHAEcARwBHAEcARwBHAEcARwBHAEcARwA4AEcARwBHAEcARwBHAEcARwARABEAEQANAFIASQBJAEkASQBJACwANQA1ADUANQA9AD0APQA9AD0APQA9AD0APQA9AD0APQA9ADIAPQA9AD0APQA+AD4APgA+AD4APgA+AD7/6//nAFIAUgAkAFIADQBUAFQAVABUAFQAVABUAFQAVABUAFQAVAAwAFoAWgBaAFoAQgBCAEIAQgBCAEIAPgAWAC4ALgAuAFIAUgBSAFIAUgBSAFIAUv/eADUANQA1ADUANQA1ADUANQA1ADUANQA1ACQANQA1ADUANQA1ADUANQA1ADUANQA1ADUANQALAIIAXACCAIIAcgByADcAPgA+AD4APgA+AD4APgA+AEoAXAA7ADsAOwA7ADsAOwA7AEYARgBGAEYARgBGAEYARgBGAEYARgBGAEYARgBGAEYARgBGAEYARgBGAEYARgApAAYABgAGAAYAKAAoACgAKAAoACgAKAAoAEcARwBHAEcARwBHADUAUgBSADAAT//uAEkAUwBSAFIAOABJADUANQA6ADUAcAA+AAwAUAA3ADYAMAA2ADUARwApAC4ARABSAFIAUgBUAFIAKAAVAEIAOgA+ADwAhgAiACIALv/2AFIAVQA1ABoAIgA6ADoAOgCCAIIAVgBWAD4AMQAxADQAO//7ACwARgApAAYAJwAtAEcARwA4//wAEAAbADwATwA8AEYASwA1AEoAVABUACgAFABWAHkAJQBnAD0ARwArAFQAUgAcAEEASgBEACsASABYAEUAJAAbABUAJAAgACIAFAAMAAwADABUAAwAGgAbAAwAMgBSACIAOwBQAGQATwA/AEcAVwAtAEoAJABLADkAEgBSADUAOgBGACIAMQAkABwAUQBSAEQAIgAyAFAATwBHAEcAOQBGAEYAHABHAEYAVwA3AFIAggA3AL0AyQD0AN0A/wB5AP8A6ADdAN0A0wDBAP8AfQB5AH0AgwCYAJgAdgCAAHkAkAAUAFYAVgB5ABEAZwABADYARwBHAFX//gBBAEcAKwBIAFgAPAAkACMAFQAkAEcANwAjACIAFgAsAFYAJwAlABEAZwBnAA4AeQA9ADoAVABUAEb/9AAiAA0AVQBHACMARQATACsAFgB5ADcAAQA2AFUAFgBIADwAGwAbACQANgBMAFQAAQAU//4AZwA2AEcAKwArACMAIwBHAEQAXgCCAB4APQAEADcAVgBWAF0AFgAyAFIANQBSAFIASQA6ACgAGwAzAFMATAAuAC4AIAA2AGcAOQAlACwAPQA9AA0AggBJAD4AVABUADD/9gAvAA0AXQBWACgAWAAkADUANQCMADwABAA3AF0AHwBSAEkAKQApADMATABSAAQAQgBHABEAPQA+AFYANQA1ACgAKABM//MAIABAAFgAPAAyACUAMwBEAEIAQAA8AMkAvQDJAL0ADwDVANUAaABwAOYAagDEANIASABWANIAVgDGALoAyQA+AE0ATgBOAE4AUAAAAFAAAADJAJAAgACdAI4AggBnAJ0AjgCCAGcAgwBnAJMAAAA8ADwAPv9kAMIAfADUAGUAcQBmAFYA+QBWAPkASgBsAGwAUQA8AIkATQALAEkACwBOAGgA1ABlANQAZQCnAGUA1QBlANQAZQAYABgAav/3AAMAKABOAIYAqgCJAIcAjgCHAJAAmgCSAI0A4wDJAIYAqgCJAIcAjgCHAJAAmgCSAI0A4wDJAJwAygCkAKgApgCoAKkAtACqAKgA4QDOAPQA6wCcAMoApACoAKYAqACpALQAqgCoAOEAzgD0AOsAmgCJAJoAowCvAIUAjAC+AI0ApQCsAIgArgC8ADsApQCJAKMA5QCZAJ0AlwB/AC0AjQCGAJUAiwCKAJkALwBKAEkAKgAzAGgAMABXAEkAJAAfABIAZAAfAEsAOQBXAGIAHwAtAC0AHwA8ABYAFgAWABcAJwAWABYAGgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYARAAWAE4ATgBdAE4AxwBOAE4AdgBmAE4ATgBOAGIATgBAAEAATgBOAFQATv/3AKUA8wCMAN0ASgBEAKYA+wCLADAAJQAiABQARAA9AEAAJgAXAF8AGgAPACAAHgAgAF8ARwBPAGcADwAgAB4AIP/0AFAAPABBADIAUAA/AD8AHABAAEAAQQBBAEAAQAAtAC0AEf/lADgANf/l/+X/9QBB//0ABAAEAAAABAACABb/wP/e//b/3wAkADX/7//4AFUAKgDzAMQA0gDgALgAmQC3ALcAbQCQAOUAgwCDAOwAoADlAJAA7AB2AIAAoACJALMAtwDaAMQAywAyAJAApQDBAOUA2AD/AIMAjQB2AHAAoACdAKAAnQCJAIgAkQCHANoA4QCAAIkA3QDdAIEAswDCALcArQCDAI0A9QBWAFEAiQCRAOwA0wDtAN0A2gDFANoBIwDVALIAsgCyALIA2gCAALMAxADVAMQAxADLAMwA/QCtAIMAiQCJAHYAoABcAOsArQCtAHYAxAB2AP//OP9kAJAAjAB5AJAAjACAAJAAkACMAJAAjACdAJ8AJABEAJ0AnwCdAJcAiQCRAIkAkQCJAJEAlwCWAKYAmgCgAJ0AgwCHAIMAeQCYAH0AfQCYAAAAAAAAAAD/yv/KAPYAwAAhACEA9gDAABMAEwD2AMAA9gD2AMAAwP/K/8r/yv/KAPYA9gDAAMD/yv/K/8r/ygD2APYAwADAAMAAwADAAMD/yv/K/8r/yv/K/8r/yv/K/8r/yv/K/8r/yv/K/8r/yv/K/8r/yv/K/8r/yv/K/8r/yv/K/8r/yv/K/8r/yv/K/8r/yv/K/8r/yv/K/8r/ygBLAEsA9gDA/8oAigD2AIoAiv/K/8r/ygD2AIoAiv/K/8r/ygD2AIoAiv/K/8r/yv/K/8r/yv/K/8r/yv/K/8r/ygD2/8r/ygD2AAAAAAAA/8oA9gD2APb/ygDAAPYAwP/KAMD/ygDAAAAAAAAAAAAAAAAA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BLYEgATCBKIEyATDAnICcwI5Am8COgI7AjwCPwJBAmcCPQJAAl4CXwJgAmECaAJaAlMCVAJVAlYCVwJYAlkCYgJlAmMCZAJmArUDAAK2AwECtwMCArgDAwK5AwQCugMFArsDBgK8AwcCvQMIAr4DCQK/AwoCwAMLAsEDDALCAw0CwwMOAsQDDwLFAsYDEAMRAscDEgLIAxMCyQMUAsoDFQLLAxYCzAMXAs0DGALOAxkCzwMaA7YDuAO5A78DwQPEA8cDyABRAR4AWAElAFkBJgBaAScAbgE6AHUBQQB6AUUAeQFEAHsBRwB8AUgAjAFYAI0BWQCRAV4AkgFfAJMBYACWAWMAlwFkAJgBZQCeAWsAnwFsAKABbQC4AYAAvgGNAMABjgDBAY8AwgGQAMkBlwDKAZgAxgGUAM8BngDQAZ8A6QG5AOoBugDrAbsA7QG9APIBwgD5AckA+gHKAPsBywFGAaAAQQEOAEIBDwBDARAARAERAEUBEgBGARMARwEUAEgBFQBJARYASgEXAEsBGABMARkAZgEyAGcBMwBoATQAaQE1AGoBNgBrATcAbAE4AG0BOQCHAVIAiAFTAKsBeACsAXkArQF6AK4BewCvAXwAsAF9ALEBfgCzAYIAtAGDALUBhAC2AYUAtwGGAOEBsQDiAbIA5AG0AOUBtQDmAbYA5wG3AOgBuADuAb4A8wHDAPQBxAD1AcUCdgJ1AncCgQKEAnsCfQJ/AnwCfgKAAoICgwJ5AnoCeANDA0EDQgNEA2cDVQMzAzQDNwM5AzUDNgM4A2MDZANGBZED7ANoA2wDVgNXA2kDawNqA38DvQOJA4oDwgPnA9kD3QPVA+UD4gPjAxwDeQP4A/0D/gPwA/ED8gPzA/QD9QP2A/cD+QP6A/sD/AQpBCoEKwQsBDUENgQtBC4ELwQwBBoEIgQkBAEEBAQeBBQEEwQNBAYDbgNvA3ADcQQcBB0DSANJA1MEPgQ/A0oDSwRABEEDTANNBEYEQgRDA04DTwREBEUDUANRBEcESQRdBDkEegNSBEgEUwRUBFwETwRRAAwAAAAAJHwAAAAAAAADCQAAACAAAAAgAAAAAQAAACEAAAAhAAADLQAAACIAAAAiAAADMgAAACMAAAAjAAADfgAAACQAAAAkAAAD0gAAACUAAAAlAAAD6wAAACYAAAAmAAADHQAAACcAAAAnAAADMQAAACgAAAApAAADWAAAACoAAAAqAAADYgAAACsAAAArAAAEAAAAACwAAAAsAAADKQAAAC0AAAAtAAADPgAAAC4AAAAuAAADKAAAAC8AAAAvAAADXgAAADAAAAA5AAADHgAAADoAAAA7AAADKgAAADwAAAA8AAAEBwAAAD0AAAA9AAAEBQAAAD4AAAA+AAAECAAAAD8AAAA/AAADLwAAAEAAAABAAAADfQAAAEEAAABaAAAAAgAAAFsAAABbAAADWgAAAFwAAABcAAADYAAAAF0AAABdAAADWwAAAF4AAABeAAAEDAAAAF8AAABfAAADVAAAAGAAAABgAAAEaAAAAGEAAAB6AAAAHAAAAHsAAAB7AAADXAAAAHwAAAB8AAADXwAAAH0AAAB9AAADXQAAAH4AAAB+AAAEDgAAAKAAAACgAAAE7QAAAKEAAAChAAADLgAAAKIAAACiAAAD1gAAAKMAAACjAAAD0wAAAKQAAACkAAAD0QAAAKUAAAClAAAD1AAAAKYAAACmAAADYQAAAKcAAACnAAADZQAAAKgAAACoAAAEcgAAAKkAAACpAAADeAAAAKoAAACqAAADswAAAKsAAACrAAADPAAAAKwAAACsAAAEEAAAAK0AAACtAAADPwAAAK4AAACuAAADegAAAK8AAACvAAAEcwAAALAAAACwAAAEFQAAALEAAACxAAAECwAAALIAAACzAAADgQAAALQAAAC0AAAEaQAAALUAAAC1AAAEGQAAALYAAAC2AAADZgAAALcAAAC3AAADRQAAALgAAAC4AAAEeAAAALkAAAC5AAADgAAAALoAAAC6AAADtAAAALsAAAC7AAADPQAAALwAAAC+AAAD7QAAAL8AAAC/AAADMAAAAMAAAADEAAAANgAAAMUAAADFAAAAPQAAAMYAAADGAAAATQAAAMcAAADHAAAAUgAAAMgAAADKAAAAXQAAAMsAAADLAAAAYQAAAMwAAADOAAAAfgAAAM8AAADPAAAAggAAANAAAADQAAAA/AAAANEAAADRAAAAnAAAANIAAADWAAAAoQAAANcAAADXAAAEAgAAANgAAADYAAAAuQAAANkAAADbAAAA0gAAANwAAADcAAAA1gAAAN0AAADdAAAA7wAAAN4AAADeAAAA/QAAAN8AAADfAAABmQAAAOAAAADkAAABAwAAAOUAAADl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AAACawAAA90AAAPdAAACbAAAA+EAAAPhAAACbQAABAAAAAQPAAACpQAABBAAAAQvAAAChQAABDAAAARfAAAC0AAABGIAAARiAAACtQAABGMAAARjAAADAAAABHIAAARyAAACtgAABHMAAARzAAADAQAABHQAAAR0AAACtwAABHUAAAR1AAADAgAABJAAAASQAAACuAAABJEAAASRAAADAwAABJIAAASSAAACuQAABJMAAASTAAADBAAABJYAAASWAAACugAABJcAAASXAAADBQAABJgAAASYAAACuwAABJkAAASZAAADBgAABJoAAASaAAACvAAABJsAAASbAAADBwAABKAAAASgAAACvQAABKEAAAShAAADCAAABKIAAASiAAACvgAABKMAAASjAAADCQAABKoAAASqAAACvwAABKsAAASrAAADCgAABK4AAASuAAACwAAABK8AAASvAAADCwAABLAAAASwAAACwQAABLEAAASxAAADDAAABLIAAASyAAACwgAABLMAAASzAAADDQAABLYAAAS2AAACwwAABLcAAAS3AAADDgAABLoAAAS6AAACxAAABLsAAAS7AAADDwAABMAAAATBAAACxQAABMIAAATCAAADEAAABM8AAATPAAADEQAABNAAAATQAAACxwAABNEAAATRAAADEgAABNQAAATUAAACyAAABNUAAATVAAADEwAABNYAAATWAAACyQAABNcAAATXAAADFAAABNgAAATYAAACygAABNkAAATZAAADFQAABOIAAATiAAACywAABOMAAATjAAADFgAABOYAAATmAAACzAAABOcAAATnAAADFwAABOgAAAToAAACzQAABOkAAATpAAADGAAABO4AAATuAAACzgAABO8AAATvAAADGQAABPIAAATyAAACzwAABPMAAATzAAADGgAAHUMAAB1DAAADtQAAHUcAAB1HAAADtgAAHUgAAB1JAAADuAAAHU0AAB1NAAADuwAAHU8AAB1PAAADvwAAHVAAAB1QAAADwQAAHVIAAB1SAAADwwAAHVYAAB1WAAADxAAAHVcAAB1YAAADxwAAHVsAAB1bAAADyQAAHZwAAB2cAAADtwAAHaAAAB2gAAADugAAHbsAAB27AAADzQAAHgYAAB4GAAAAUQAAHgcAAB4HAAABHgAAHgwAAB4MAAAAWAAAHg0AAB4N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AAAA5AAAHukAAB7pAAABtAAAHuoAAB7qAAAA5QAAHusAAB7rAAABtQAAHuwAAB7sAAAA5gAAHu0AAB7tAAABtgAAHu4AAB7uAAAA5wAAHu8AAB7vAAABtwAAHvAAAB7wAAAA6AAAHvEAAB7xAAABuAAAHvIAAB7yAAAA7gAAHvMAAB7zAAABvgAAHvQAAB70AAAA8wAAHvUAAB71AAABwwAAHvYAAB72AAAA9AAAHvcAAB73AAABxAAAHvgAAB74AAAA9QAAHvkAAB75AAABxQAAH70AAB+9AAACdgAAH74AAB++AAACdQAAH78AAB+/AAACdwAAH8AAAB/AAAACgQAAH8EAAB/BAAAChAAAH80AAB/NAAACewAAH84AAB/OAAACfQAAH88AAB/PAAACfwAAH90AAB/dAAACfAAAH94AAB/eAAACfgAAH98AAB/fAAACgAAAH+0AAB/uAAACggAAH+8AAB/vAAACeQAAH/0AAB/9AAACegAAH/4AAB/+AAACeAAAIAcAACAHAAAE7gAAIBAAACAQAAADQAAAIBIAACASAAADQwAAIBMAACAUAAADQQAAIBUAACAVAAADRAAAIBYAACAWAAADZwAAIBcAACAXAAADVQAAIBgAACAZAAADMwAAIBoAACAaAAADNwAAIBsAACAbAAADOQAAIBwAACAdAAADNQAAIB4AACAeAAADOAAAICAAACAhAAADYwAAICIAACAiAAADRgAAICYAACAmAAADLAAAIC8AACAvAAAFkQAAIDAAACAwAAAD7AAAIDIAACAzAAAEFgAAIDUAACA1AAAEGAAAIDkAACA6AAADOgAAIDwAACA8AAADaAAAID0AACA9AAADbAAAID4AACA/AAADVgAAIEQAACBEAAAD6AAAIEcAACBHAAADaQAAIEgAACBIAAADawAAIEkAACBJAAADagAAIHAAACBwAAADfwAAIHEAACBxAAADvQAAIHQAACB5AAADgwAAIH0AACB+AAADiQAAIH8AACB/AAADwgAAIIAAACCJAAADiwAAII0AACCOAAADlQAAIJQAACCUAAADzgAAIKEAACChAAAD2AAAIKMAACCjAAAD5wAAIKQAACCkAAAD2QAAIKYAACCnAAAD2gAAIKkAACCpAAAD3AAAIKsAACCrAAAD3QAAIKwAACCsAAAD1QAAIK4AACCuAAAD5AAAILEAACCyAAAD3gAAILQAACC1AAAD4AAAILgAACC4AAAD5QAAILkAACC6AAAD4gAAIL0AACC9AAAD5gAAIQUAACEFAAAEJgAAIRMAACETAAAEJwAAIRYAACEWAAADHAAAIRcAACEXAAADeQAAISAAACEgAAADfAAAISIAACEiAAADewAAISYAACEmAAAEIAAAIS4AACEuAAAEKAAAIVAAACFQAAAD+AAAIVEAACFSAAAD/QAAIVMAACFaAAAD8AAAIVsAACFeAAAD+QAAIYkAACGJAAAD/wAAIZAAACGTAAAEKQAAIZQAACGVAAAENQAAIZYAACGZAAAELQAAIagAACGoAAAENwAAIdAAACHTAAAEMQAAIgAAACIAAAAEIQAAIgIAACICAAAEGgAAIgMAACIDAAAEIgAAIgYAACIGAAAEHwAAIg8AACIPAAAEJQAAIhEAACIRAAAEJAAAIhIAACISAAAEAQAAIhUAACIVAAAD6QAAIhkAACIZAAAEBAAAIhoAACIaAAAEHgAAIh4AACIeAAAEFAAAIh8AACIfAAAEEwAAIikAACIpAAAEEgAAIisAACIrAAAEGwAAIjcAACI3AAAEIwAAIkgAACJIAAAEDwAAImAAACJgAAAEDQAAImEAACJhAAAEBgAAImQAACJlAAAECQAAIwIAACMCAAAEXgAAIxAAACMQAAAEEQAAIxwAACMfAAADbgAAIyAAACMhAAAEHAAAJQAAACWfAAAE8QAAJaAAACWhAAAEOgAAJaoAACWrAAADSAAAJawAACWsAAADUwAAJbIAACWzAAAEPgAAJbQAACW1AAADSgAAJbYAACW3AAAEQAAAJbgAACW5AAADTAAAJboAACW6AAAERgAAJbwAACW9AAAEQgAAJb4AACW/AAADTgAAJcAAACXBAAAERAAAJcIAACXDAAADUAAAJcQAACXEAAAERwAAJcYAACXGAAAEPQAAJckAACXJAAAESQAAJcoAACXKAAAEXQAAJcsAACXLAAAEOQAAJcwAACXMAAAEegAAJc8AACXPAAAEOAAAJdgAACXYAAADUgAAJdkAACXZAAAESAAAJeYAACXmAAADRwAAJhAAACYRAAAESgAAJhUAACYVAAAEVgAAJjoAACY7AAAEUwAAJjwAACY8AAAEXAAAJkAAACZAAAAEWgAAJkIAACZC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B4oGpgasBzwGsga4B0gGvga+BsQGygVQBtAG1gbcBVAHkAVQB5YG4gboBugG7gb0BvoHAAcGByoHDAcSB2YFUAcYBx4HJAckByoHMAc2BzwHZgdCB0gHSAdOB1QHWgVQB2AFUAVQB2YFUAdsB3IHeAd+B4QHigeEB4oHkAeWBVAFUAVQB5wHogVQBVAAAgBCAAIANQAAAEAAQAA0AE0ATQA1AFsAXAA2AGUAZQA4AIYAhgA5AJQAlAA6AKoAqgA7ALIAsgA8ALkAuQA9ALsAuwA+ANEA0QA/ANwA3ABAAOMA4wBBAPwA/ABCAP4A/wBDAQ0BDQBFARoBGgBGASgBKABHATABMABIAVEBUQBJAVUBVQBKAWEBYQBLAXcBdwBMAYEBgQBNAYcBhwBOAYkBiQBPAaEBoQBQAawBrABRAbMBswBSAcwBzwBTAdMB7QBXAe8CGgByAh0CIQCeAiUCJQCjAicCJwCkAikCKQClAi8CLwCmAjECMQCnAjQCNACoAjgCOACpAkICQgCqAkYCRgCrAkgCSACsAkoCSgCtAlACUACuAlICUgCvAlUCVQCwAlkCWQCxAoUChQCyAooCjQCzAo8CjwC3ApMCkwC4ApgCmAC5AqACoAC6AqICpAC7ArYCtwC+AsACwQDAAsgCyADCAs0CzQDDAtAC0ADEAtIC2ADFAtoC4wDMAuYC7wDWAwEDAgDgBHoEegDiAOMDTAZkBOQDTAZSBSAE6gNMA0wFJgTwBSwDTAYoA0wGLgT2BPwFPgNMA0wDTANMA0wDTAU+BpQFXAagBUQGjgUCBqwFCAWkBaQFDgWwBRQFYgHaBsoGrAXgBogFUAXyAdoB2gHaBqwFGgNMBnYFOAUgBSYDTAUsA0wDTANMBTIDTANMA0wFOAU+Bi4GlAVKBUQFSgWkBpoFsAHaAdoB2gViBVAF8gXyBVYFXAViBpoGNAVoBW4FqgV0BXoFgAWGBqwGlAbQBYwFkgaIBpQGmgasBtAFmAHaAdoGxAWeBZ4B2gWkAdoFqgWwBbAFsAW2BbwFwgHaBqwFyAY0BogB2gXOBhwF1AXaBnwF4AXgBo4GlAaIBf4F/gXmBewF8gHaBfgB2gHaBf4B2gbKBgQB2gYKBhAGFgYcBiIGHAYiBigGmgaaBpoDTAZSA0wDTANMBi4DTANMBjQGRgY6BkAB2gZGBkwB2gNMBlIDTAZqBmQGWANMBnADTAZeBmQGagNMBnADTANMBnYDTAaUBpQGfAaCBo4B2gaIBo4GlAaaAdoB2gHaAdoGygagAdoGrAamBqwB2gHaBrIB2ga4Br4GxAbKAdoG0AHaAAEB3wIAAAEBLAHrAAEBLAD2AAEBLAIAAAEAsgFWAAEBGwF4AAEBpgKEAAEB/AKYAAEBnAHrAAEBoAHrAAEBLAAAAAEAAQABAAAAAQAAAAAAAAABAAEAAQABAAAAAAABASwCtAABASwC3wABASwCbAABASwChAABASwC3AABASwCRgABASwCnAABASwCkAABAagAAAABART/oAABAfMAAAABAa4AAAABAbIAAAABAZIAAAABATYAAAABASYAAAABAWIAAAABASz/7AABAgYAAAABAVoAAAABARwAAAABAUQAAAABAK4AAAABAIMAAAABAVYAAAABAeMAAAABAdQAAAABAe8AAAABAdgAAAABAVgAAAABAR4AAAABASgAAAABAIwAAAABAVQAAAABAf8AAAABAdsAAAABALsAAAABATgAAAABAX4AAAABAc4AAAABAdwAAAABAUAAAAABAbgAAAABAboAAAABAb4AAAABARgAAAABAdIAAAABAToAAAABAb8AAAABASwCogABAUj/7AABALT/7AABAUb/7AABAUz/7AABAIz/7AABAS3/7AABAVT/7AABATf/7AABAUr/7AABATb/7AABAcf/LAABATT/7AABAQv/LAABATj/7AABAU7/7AABAXL/7AABAVb/7AABATX/7AABAXb/7AABAI7/LAABARj/7AABAWj/7AABATj/LAABATL/7AABASb/7AABANj/7AABAST/7AABAS7/7AABASj/LAABAUT/7AABASz/IQABAYP/dQABATn/7AABAVb/LAABAcL/LAABAXj/7AABAXj/LAABAWr/LAABAVL/7AABASj/7AABAe7/IQABANz/LAABAYL/LAABAV7/7AABASz/LAABARb/7AABATL/LAABATr/LAABAMD/7AABATr/7AABATb/LAABAPL/LAABAVv/mAABAXb/LAABATP/7AABATH/7AABATD/7AABARz/IQABAUr/LAABAVD/7AABAUv/LAABARf/7AABAUD/7AABAVr/7AABANr/LAABASL/7AABAIr/7AABAV4CogABAUoCogABAUQCogABATACqAABAS4CogABAaAC3gABAIoC3gABAKsC3gABAT4CAgABAUUCAAABAVICogABAUYCogABAL8CogABAXoCogABASoCogABAT4CogABAcQC3gABATkCAAABAQQCigABAUoC3gABAI4C3gABATwCAAABAT8CAAABASAC3gABAVQCAAABAYAC3gABAZgC3gABATgCAAABAN4CAAABAUoCAAABAVACAAABARYC3gABAVoC7gABASICAAABARgC3gABAHYC3gABAMACAAABASgCAgABAUwCAAABAWQCAAABAZoCAAABAZoC3gABAWICAAABAPICAAABAP8CigABAScCAAABATECAAABAXgC3gABATMCAAABARgC2gABAUoCigABARcC2gABASwC3gABATAC3gABATYCogABAUACogABAUYCAAABAUQCAAABARgCAAABAU4CAAABASYCAAABAUcCogABAUICogABARYCogABATACogABATwCogABATICogABAZYCogABAVYCAAABAUgCAAABATQCAAABAToCAAABAUACAAABAVoCAAABAVgCAAABASoCAAABATICAAABAPACAAABAKICAAABASgCAAABASQCAAABAUICAAABATYCAAAAAAEAAAAKAFIAJAAEREZMVAB6Y3lybACCZ3JlawB+bGF0bgCMABYAggCKAJIAmgCiAT4BAgCqALIAugDCAQwAygDKANIA2gDiAOoA8gEWAPoA+gAIY2NtcAEwZG5vbQDyZnJhYwEkbG9jbAD4bG9jbAEcbG9jbAD+bG9jbAEEbnVtcgEKAQwAAAEWAAABIgABU1JCIAEyAPoAAk5TTSABOFNLUyABOAABAAAAAQE4AAEAAAABAWAAAQAAAAEBLgABAAAAAQEsAAIAAAABAi4ABAAAAAEBLgABAAAAAQFGAAQAAAABAU4ABAAAAAECbAABAAAAAQKOAAEAAAABAhgAAQAAAAECMgABAAAAAQDqAAYAAAABAS4AAQAAAAEA7gABAAAAAQDYAAYAAAACAXABKAAGAAAAAgEwAUIABgAAAAIBSgFwAAAAAQAPAAAAAQAAAAAAAQACAAAAAQABAAAAAQAOAAYAAAADAVwBbgGAAAAAAgACAAMAAAAEAA4AEAARABMAAAAFAAUABgAJAAoACwAA//8ABAAAAAEAAgAHAAD//wAFAAAAAQACAAYABwAA//8ABQAAAAEAAgAFAAcAAP//AAUAAAABAAIABAAHAAD//wAFAAAAAQACAAMABwABAeQBHgABAfQAAQABAd4ASgABAd4AjAABAfD/8gABAeQAAQHYAAIB7AACBO8E8AACAeoABAR9BIAEoASiAAICOAAFAVUBzwIeAh8CIAABBQgABQHYAeQCjAIMAhoAAwABAeAAAQG0AAAAAQAAABIAAwAAAAECBgABAxgAAQAAAAgAAwABA84AAQOKAAAAAQAAAAwAAwABAzQAAQN4AAAAAQAAAA0AAwABAl4AAQFiAAAAAQAAABQAAwAAAAIBSgGQAAEC0AABAAAABwADAAIBuAHIAAEBPAAAAAEAAAAVAAMAAAABAgwAAQFuAAEAAAAEAAMAAAABAgYAAQFiAAEAAAAEAAMAAAABAYgAAQFQAAEAAAAEAAECSgAKAYgBjgGUAZoBoAGmAawBsgG4Ab4AAgJIAA4DpQOmA6cDqAOpA6oDqwOsA60DrgOxA7IDrwOwAAICJgAOA5cDmAOZA5oDmwOcA50DngOfA6ADowOkA6EDogABBGwAEgGgAaQBqAGsAbABtAG4AbwBwAHEAeAByAHmAcwB0AHUAdgB3AACAm4AIAR8BH8EggSEBIYEiASLBIwEjgSQBJIElQSXBJkEnASeBLIEtATCBMcEygTOBNAE0gTUBNYE2ATaBNwE3gTgBOIAAQABAP8AAQABAtEAAQABA14AAQKmAAEAAgSJBIsAAQABACQAAgABA6UDsgAAAAEAAgABBO0AAQAEBHsEfgSfBKEABQJ8AoICiAKOApQABQKOApQCmgKgAqYAAgABA6UDrgAAAAEAAQSzAAEAAQSJAAEAAQR+AAYChAKKApAClgKcAqIABgKaAqACpgKsArICuAABAAUAJAAlAVEB7AHuAAEAAgTvBPAAAQACAqwC9wACAAEDlwOgAAAAAgAGBIEAAgAGBIUAAgAQBIEAAgAQBIUAAgAgBIEAAgAgBIUAAgAqBIEAAgAqBIUAAgAKBI8AAgFVBI8ACAJMAlICWAJeAmQCagJwAnYAAQAEAF8AowErAXEAAQAEAGIApgEuAXQAAgACA5cDpAAAA+gD6gAOAAECUAABAlIAAQJUAAECVgABApoAAQJUAAECVgABAlgAAQJaAAECXAABAl4AAQJgAAECYgABAmQAAQJmAAECaAACAnICeAACAn4CeAABAAoAXwBiAKMApgErAS4BcQF0AqwC9wACAAIDHgMpAAADWANZAAwAAQAeBHsEfgSBBIMEhQSHBIkEigSNBI8EkQSUBJYEmASbBJ0EwgTGBMkEzQTPBNEE0wTVBNcE2QTbBN0E3wThAAEAIAR8BH8EggSEBIYEiASLBIwEjgSQBJIElQSXBJkEnASeBLIEtATCBMcEygTOBNAE0gTUBNYE2ATaBNwE3gTgBOIAAQAgBHsEfgSBBIMEhQSHBIkEigSNBI8EkQSUBJYEmASbBJ0EsQSzBMIExgTJBM0EzwTRBNME1QTXBNkE2wTdBN8E4QACAAwAAgAbAAAANgBZABoAWwBbAD4AXQB4AD8AegB6AFsAfADFAFwAxwDKAKYAzADoAKoA6gD4AMcA+gEAANYCIQJBAN0ChQLPAP4CHgACBLME0QACBH4E4QACBIkE0wACBHsE1QACBJEE1wACBIME2QACBH4E2wACBHsE3QACBJEE3wACBMIE3wACBIME5wACBH4E6AACBHsE6QACBMIE6QACBIME5wACBIAE6AACBH0E6gACBH4E6wACBHsE7AACBMIE7AACBIME6gACBIAE6wACBH0ExgACBH4EzwACBJgEyQACBHsEzQACBIUEzAACBMIEzAACBIMEyAACBIAEywACBH0AAQAFBIEEiQSPBKAEogBAAAIEswBlAAIEswB2AAIEgwCGAAIEswCqAAIEswDcAAIEswENAAIEswEkAAIEmAEwAAIEswFRAAIEswF3AAIEswGbAAIEmAGsAAIEswECAAIEfgHSAAIEfgEBAAMDRQANAT8AAgSxAUIAAgSDAVwAAgSYAdEAAwNFACcAAQASAAIABgAIAAoADQAQABYAHAAfACAAIgAkACcAKgAvADABAAHQAAAAAQABAAgAAgAAABQAAgAAACQAAndnaHQBJQAAaXRhbAFDAAEABAAQAAEAAAAAATcCWAAAAAMAAQACAUQAAAAAAAEAAA==";

// src/index.js
function toArrayBuffer(buffer) {
  const arrayBuffer = new ArrayBuffer(buffer.length);
  const view = new Uint8Array(arrayBuffer);
  for (let i = 0; i < buffer.length; ++i) {
    view[i] = buffer[i];
  }
  return arrayBuffer;
}
var CAPTCHA_WIDTH = 160;
var CAPTCHA_HEIGHT = 40;
var CAPTCHA_CHARS = "abcdefghijklmnopqrstuvwxyz1234567890";
var FONT = toArrayBuffer(Buffer.from(FONTDATA, "base64"));
function error400() {
  return new Response("400 Error", { status: 400 });
}
function error405() {
  return new Response("405 Invalid Method", { status: 405 });
}
function cors(res) {
  res.headers.set("Access-Control-Allow-Origin", "*");
  return res;
}
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function makeEffect(char) {
  let randItem = (arr) => arr[getRandomInt(0, arr.length - 1)];
  let colors = ["red", "blue", "green", "black"];
  let decoration = ["underline", "line-through"];
  return `<span style="color: ${randItem(colors)}; text-decoration: ${randItem(decoration)}; transform: rotate(${getRandomInt(-20, 20)}deg);">${char}</span>`;
}
var src_default = {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    if (request.method == "POST") {
      let origin = request.headers.get("origin");
      if (origin) {
        origin = new URL(origin);
        if (new RegExp(env.ALLOWED_URLS_REGEX, "m").test(origin.hostname + ":" + origin.port)) {
          return error400();
        }
      }
    }
    if (url.pathname == "/v1/create_captcha") {
      if (request.method != "POST") {
        return error405();
      }
      const captcha = Array(8).fill(0).map((x) => CAPTCHA_CHARS[Math.floor(Math.random() * CAPTCHA_CHARS.length)]).join("");
      const id2 = randomUUID();
      await env.KV.put(id2, captcha, { expirationTtl: 300 });
      let fmt = Array.from(captcha).map((x) => makeEffect(x));
      let image = new Ha(
        `<div style="display:flex; background: white; align-items: center; font-size: 32px; font-family: "Source Code Pro";>${fmt.join("")}</div>`,
        {
          width: CAPTCHA_WIDTH,
          height: CAPTCHA_HEIGHT,
          fonts: [
            {
              name: "Source Code Pro",
              data: FONT,
              // Since we load font using weight = 600, I think the font will appear sharper when we use a lower weight
              weight: 300,
              style: "normal"
            }
          ]
        }
      );
      let buf = await image.clone().arrayBuffer();
      return cors(Response.json({
        captchaURL: "data:image/png;base64," + Buffer.from(buf).toString("base64"),
        id: id2,
        width: CAPTCHA_WIDTH,
        height: CAPTCHA_HEIGHT
      }));
    } else if (url.pathname == "/v1/verify_captcha") {
      if (request.method != "POST") {
        return error405();
      }
      let json = await request.json();
      let response = json["response"];
      let id2 = json["id"];
      if (!response || !id2) {
        return error400();
      }
      let storedCaptcha = await env.KV.get(id2);
      if (storedCaptcha == response) {
        return cors(Response.json({ "success": true }));
      }
      return cors(Response.json({ "success": false }));
    }
    return cors(new Response("Hello World!"));
  }
};
export {
  src_default as default
};
/*! Bundled license information:

workers-og/dist/index.js:
  (*! Bundled license information:
  
  css-background-parser/index.js:
    (*!
     * https://github.com/gilmoreorless/css-background-parser
     * Copyright © 2015 Gilmore Davidson under the MIT license: http://gilmoreorless.mit-license.org/
     *)
  
  parse-css-color/dist/index.umd.js:
    (**
    	 * parse-css-color
    	 * @version v0.2.1
    	 * @link http://github.com/noeldelgado/parse-css-color/
    	 * @license MIT
    	 *)
  
  escape-html/index.js:
    (*!
     * escape-html
     * Copyright(c) 2012-2013 TJ Holowaychuk
     * Copyright(c) 2015 Andreas Lubbe
     * Copyright(c) 2015 Tiancheng "Timothy" Gu
     * MIT Licensed
     *)
  *)
*/
//# sourceMappingURL=index.js.map
