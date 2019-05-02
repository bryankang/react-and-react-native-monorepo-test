'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

// import { ReactNode } from 'react';
// // don't use props in case angular
// export interface ButtonProps {
//     /** you know */
//     children?: ReactNode;
// }
function foo() {}

function boo() {
}

var ButtonCore = {
  foo: foo,
  boo: boo
};

var unicodes = {
  "add-notes": "\uE800",
  "arrow-down": "\uE801",
  "arrow-left": "\uE802",
  "arrow-right": "\uE803",
  "arrow-tail-down": "\uE804",
  "arrow-up": "\uE805",
  "bar-graph": "\uE806",
  "live-chat": "\uE807",
  "cadence": "\uE808",
  "calendar": "\uE809",
  "checklist": "\uE80A",
  "checkmark": "\uE80B",
  "close": "\uE80C",
  "electronic-trainer": "\uE80D",
  "error-filled": "\uE80E",
  "error": "\uE80F",
  "fast-forward": "\uE810",
  "filter": "\uE811",
  "heart-rate": "\uE812",
  "information": "\uE813",
  "line-graph": "\uE814",
  "locked": "\uE815",
  "notes": "\uE816",
  "notification": "\uE817",
  "paired": "\uE818",
  "pause": "\uE819",
  "personal-record": "\uE81A",
  "pin": "\uE81B",
  "play": "\uE81C",
  "power-meter": "\uE81D",
  "refresh": "\uE81E",
  "rewind": "\uE81F",
  "search": "\uE820",
  "settings": "\uE821",
  "sound-high": "\uE822",
  "sound-low": "\uE823",
  "sound-mid": "\uE824",
  "sound-off": "\uE825",
  "speed-cadence": "\uE826",
  "speed": "\uE827",
  "star-filled": "\uE828",
  "star": "\uE829",
  "stop": "\uE82A",
  "support-filled": "\uE82B",
  "support": "\uE82C",
  "team": "\uE82D",
  "thumbs-up": "\uE82E",
  "timer": "\uE82F",
  "toggles": "\uE830",
  "unlocked": "\uE831",
  "unpaired": "\uE832",
  "user": "\uE833",
  "video": "\uE834",
  "virtualpower": "\uE835",
  "workout-creator": "\uE836",
  "workout-instructions": "\uE837",
  "arrow-tail-left": "\uE838",
  "arrow-tail-right": "\uE839",
  "arrow-tail-up": "\uE83A",
  "podcast": "\uE83B",
  "live-data": "\uE83C",
  "email-series": "\uE83D",
  "cross-platform": "\uE83E",
  "blog": "\uE83F",
  "signal": "\uE840",
  "hamburger": "\uE841",
  "android": "\uE842",
  "apple": "\uE843",
  "windows": "\uE844",
  "ant": "\uE845",
  "bluetooth": "\uE846",
  "phase-one": "\uE847",
  "phase-two": "\uE848",
  "phase-three": "\uE849",
  "bicycle-indoor": "\uE84A",
  "bicycle": "\uE84B",
  "download": "\uE84C",
  "delete": "\uE84D",
  "share": "\uE84E",
  "edit": "\uE84F",
  "minus": "\uE850",
  "personal-record-filled": "\uE851",
  "plus": "\uE852",
  "pin-filled": "\uE853",
  "season-pr": "\uE854",
  "move": "\uE855",
  "tr": "\uE859",
  "copy": "\uE85C",
  "more": "\uE85E",
  "window-expand": "\uE85F",
  "window-reduce": "\uE860",
  "battery-25": "\uE865",
  "battery-50": "\uE866",
  "battery-75": "\uE867",
  "battery-100": "\uE868",
  "pull-thick": "\uE86A",
  "pull": "\uE86B",
  "push-thick": "\uE86C",
  "push": "\uE86D",
  "close-filled": "\uE86E",
  "web-link": "\uE8AE",
  "run": "\uE8AF",
  "cross-training": "\uE8B0",
  "swim": "\uE8B1",
  "checkmark-thick": "\uE8B4",
  "checkmark-circle-filled": "\uE8B5",
  "arrow-tail-thick-down": "\uE8C1",
  "arrow-tail-thick-left": "\uE8C2",
  "arrow-tail-thick-right": "\uE8C3",
  "arrow-tail-thick-up": "\uE8C4"
};

var iconCore = {
  unicodes: unicodes
};

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var chroma = createCommonjsModule(function (module, exports) {
/**
 * chroma.js - JavaScript library for color conversions
 *
 * Copyright (c) 2011-2018, Gregor Aisch
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * 1. Redistributions of source code must retain the above copyright notice, this
 * list of conditions and the following disclaimer.
 *
 * 2. Redistributions in binary form must reproduce the above copyright notice,
 * this list of conditions and the following disclaimer in the documentation
 * and/or other materials provided with the distribution.
 *
 * 3. The name Gregor Aisch may not be used to endorse or promote products
 * derived from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL GREGOR AISCH OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT,
 * INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING,
 * BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
 * DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY
 * OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 * NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
 * EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 *
 * -------------------------------------------------------
 *
 * chroma.js includes colors from colorbrewer2.org, which are released under
 * the following license:
 *
 * Copyright (c) 2002 Cynthia Brewer, Mark Harrower,
 * and The Pennsylvania State University.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND,
 * either express or implied. See the License for the specific
 * language governing permissions and limitations under the License.
 *
 * ------------------------------------------------------
 *
 * Named colors are taken from X11 Color Names.
 * http://www.w3.org/TR/css3-color/#svg-color
 *
 * @preserve
 */
(function (global, factory) {
  module.exports = factory();
})(commonjsGlobal, function () {

  var limit = function (x, min, max) {
    if (min === void 0) min = 0;
    if (max === void 0) max = 1;
    return x < min ? min : x > max ? max : x;
  };

  var clip_rgb = function (rgb) {
    rgb._clipped = false;
    rgb._unclipped = rgb.slice(0);

    for (var i = 0; i <= 3; i++) {
      if (i < 3) {
        if (rgb[i] < 0 || rgb[i] > 255) {
          rgb._clipped = true;
        }

        rgb[i] = limit(rgb[i], 0, 255);
      } else if (i === 3) {
        rgb[i] = limit(rgb[i], 0, 1);
      }
    }

    return rgb;
  }; // ported from jQuery's $.type


  var classToType = {};

  for (var i = 0, list = ['Boolean', 'Number', 'String', 'Function', 'Array', 'Date', 'RegExp', 'Undefined', 'Null']; i < list.length; i += 1) {
    var name = list[i];
    classToType["[object " + name + "]"] = name.toLowerCase();
  }

  var type = function (obj) {
    return classToType[Object.prototype.toString.call(obj)] || "object";
  };

  var unpack = function (args, keyOrder) {
    if (keyOrder === void 0) keyOrder = null; // if called with more than 3 arguments, we return the arguments

    if (args.length >= 3) {
      return Array.prototype.slice.call(args);
    } // with less than 3 args we check if first arg is object
    // and use the keyOrder string to extract and sort properties


    if (type(args[0]) == 'object' && keyOrder) {
      return keyOrder.split('').filter(function (k) {
        return args[0][k] !== undefined;
      }).map(function (k) {
        return args[0][k];
      });
    } // otherwise we just return the first argument
    // (which we suppose is an array of args)


    return args[0];
  };

  var last = function (args) {
    if (args.length < 2) {
      return null;
    }

    var l = args.length - 1;

    if (type(args[l]) == 'string') {
      return args[l].toLowerCase();
    }

    return null;
  };

  var PI = Math.PI;
  var utils = {
    clip_rgb: clip_rgb,
    limit: limit,
    type: type,
    unpack: unpack,
    last: last,
    PI: PI,
    TWOPI: PI * 2,
    PITHIRD: PI / 3,
    DEG2RAD: PI / 180,
    RAD2DEG: 180 / PI
  };
  var input = {
    format: {},
    autodetect: []
  };
  var last$1 = utils.last;
  var clip_rgb$1 = utils.clip_rgb;
  var type$1 = utils.type;

  var Color = function Color() {
    var args = [],
        len = arguments.length;

    while (len--) args[len] = arguments[len];

    var me = this;

    if (type$1(args[0]) === 'object' && args[0].constructor && args[0].constructor === this.constructor) {
      // the argument is already a Color instance
      return args[0];
    } // last argument could be the mode


    var mode = last$1(args);
    var autodetect = false;

    if (!mode) {
      autodetect = true;

      if (!input.sorted) {
        input.autodetect = input.autodetect.sort(function (a, b) {
          return b.p - a.p;
        });
        input.sorted = true;
      } // auto-detect format


      for (var i = 0, list = input.autodetect; i < list.length; i += 1) {
        var chk = list[i];
        mode = chk.test.apply(chk, args);

        if (mode) {
          break;
        }
      }
    }

    if (input.format[mode]) {
      var rgb = input.format[mode].apply(null, autodetect ? args : args.slice(0, -1));
      me._rgb = clip_rgb$1(rgb);
    } else {
      throw new Error('unknown format: ' + args);
    } // add alpha channel


    if (me._rgb.length === 3) {
      me._rgb.push(1);
    }
  };

  Color.prototype.toString = function toString() {
    if (type$1(this.hex) == 'function') {
      return this.hex();
    }

    return "[" + this._rgb.join(',') + "]";
  };

  var Color_1 = Color;

  var chroma = function () {
    var args = [],
        len = arguments.length;

    while (len--) args[len] = arguments[len];

    return new (Function.prototype.bind.apply(chroma.Color, [null].concat(args)))();
  };

  chroma.Color = Color_1;
  chroma.version = '2.0.3';
  var chroma_1 = chroma;
  var unpack$1 = utils.unpack;
  var max = Math.max;

  var rgb2cmyk = function () {
    var args = [],
        len = arguments.length;

    while (len--) args[len] = arguments[len];

    var ref = unpack$1(args, 'rgb');
    var r = ref[0];
    var g = ref[1];
    var b = ref[2];
    r = r / 255;
    g = g / 255;
    b = b / 255;
    var k = 1 - max(r, max(g, b));
    var f = k < 1 ? 1 / (1 - k) : 0;
    var c = (1 - r - k) * f;
    var m = (1 - g - k) * f;
    var y = (1 - b - k) * f;
    return [c, m, y, k];
  };

  var rgb2cmyk_1 = rgb2cmyk;
  var unpack$2 = utils.unpack;

  var cmyk2rgb = function () {
    var args = [],
        len = arguments.length;

    while (len--) args[len] = arguments[len];

    args = unpack$2(args, 'cmyk');
    var c = args[0];
    var m = args[1];
    var y = args[2];
    var k = args[3];
    var alpha = args.length > 4 ? args[4] : 1;

    if (k === 1) {
      return [0, 0, 0, alpha];
    }

    return [c >= 1 ? 0 : 255 * (1 - c) * (1 - k), // r
    m >= 1 ? 0 : 255 * (1 - m) * (1 - k), // g
    y >= 1 ? 0 : 255 * (1 - y) * (1 - k), // b
    alpha];
  };

  var cmyk2rgb_1 = cmyk2rgb;
  var unpack$3 = utils.unpack;
  var type$2 = utils.type;

  Color_1.prototype.cmyk = function () {
    return rgb2cmyk_1(this._rgb);
  };

  chroma_1.cmyk = function () {
    var args = [],
        len = arguments.length;

    while (len--) args[len] = arguments[len];

    return new (Function.prototype.bind.apply(Color_1, [null].concat(args, ['cmyk'])))();
  };

  input.format.cmyk = cmyk2rgb_1;
  input.autodetect.push({
    p: 2,
    test: function () {
      var args = [],
          len = arguments.length;

      while (len--) args[len] = arguments[len];

      args = unpack$3(args, 'cmyk');

      if (type$2(args) === 'array' && args.length === 4) {
        return 'cmyk';
      }
    }
  });
  var unpack$4 = utils.unpack;
  var last$2 = utils.last;

  var rnd = function (a) {
    return Math.round(a * 100) / 100;
  };
  /*
   * supported arguments:
   * - hsl2css(h,s,l)
   * - hsl2css(h,s,l,a)
   * - hsl2css([h,s,l], mode)
   * - hsl2css([h,s,l,a], mode)
   * - hsl2css({h,s,l,a}, mode)
   */


  var hsl2css = function () {
    var args = [],
        len = arguments.length;

    while (len--) args[len] = arguments[len];

    var hsla = unpack$4(args, 'hsla');
    var mode = last$2(args) || 'lsa';
    hsla[0] = rnd(hsla[0] || 0);
    hsla[1] = rnd(hsla[1] * 100) + '%';
    hsla[2] = rnd(hsla[2] * 100) + '%';

    if (mode === 'hsla' || hsla.length > 3 && hsla[3] < 1) {
      hsla[3] = hsla.length > 3 ? hsla[3] : 1;
      mode = 'hsla';
    } else {
      hsla.length = 3;
    }

    return mode + "(" + hsla.join(',') + ")";
  };

  var hsl2css_1 = hsl2css;
  var unpack$5 = utils.unpack;
  /*
   * supported arguments:
   * - rgb2hsl(r,g,b)
   * - rgb2hsl(r,g,b,a)
   * - rgb2hsl([r,g,b])
   * - rgb2hsl([r,g,b,a])
   * - rgb2hsl({r,g,b,a})
   */

  var rgb2hsl = function () {
    var args = [],
        len = arguments.length;

    while (len--) args[len] = arguments[len];

    args = unpack$5(args, 'rgba');
    var r = args[0];
    var g = args[1];
    var b = args[2];
    r /= 255;
    g /= 255;
    b /= 255;
    var min = Math.min(r, g, b);
    var max = Math.max(r, g, b);
    var l = (max + min) / 2;
    var s, h;

    if (max === min) {
      s = 0;
      h = Number.NaN;
    } else {
      s = l < 0.5 ? (max - min) / (max + min) : (max - min) / (2 - max - min);
    }

    if (r == max) {
      h = (g - b) / (max - min);
    } else if (g == max) {
      h = 2 + (b - r) / (max - min);
    } else if (b == max) {
      h = 4 + (r - g) / (max - min);
    }

    h *= 60;

    if (h < 0) {
      h += 360;
    }

    if (args.length > 3 && args[3] !== undefined) {
      return [h, s, l, args[3]];
    }

    return [h, s, l];
  };

  var rgb2hsl_1 = rgb2hsl;
  var unpack$6 = utils.unpack;
  var last$3 = utils.last;
  var round = Math.round;
  /*
   * supported arguments:
   * - rgb2css(r,g,b)
   * - rgb2css(r,g,b,a)
   * - rgb2css([r,g,b], mode)
   * - rgb2css([r,g,b,a], mode)
   * - rgb2css({r,g,b,a}, mode)
   */

  var rgb2css = function () {
    var args = [],
        len = arguments.length;

    while (len--) args[len] = arguments[len];

    var rgba = unpack$6(args, 'rgba');
    var mode = last$3(args) || 'rgb';

    if (mode.substr(0, 3) == 'hsl') {
      return hsl2css_1(rgb2hsl_1(rgba), mode);
    }

    rgba[0] = round(rgba[0]);
    rgba[1] = round(rgba[1]);
    rgba[2] = round(rgba[2]);

    if (mode === 'rgba' || rgba.length > 3 && rgba[3] < 1) {
      rgba[3] = rgba.length > 3 ? rgba[3] : 1;
      mode = 'rgba';
    }

    return mode + "(" + rgba.slice(0, mode === 'rgb' ? 3 : 4).join(',') + ")";
  };

  var rgb2css_1 = rgb2css;
  var RE_HEX = /^#?([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
  var RE_HEXA = /^#?([A-Fa-f0-9]{8})$/;

  var hex2rgb = function (hex) {
    if (hex.match(RE_HEX)) {
      // remove optional leading #
      if (hex.length === 4 || hex.length === 7) {
        hex = hex.substr(1);
      } // expand short-notation to full six-digit


      if (hex.length === 3) {
        hex = hex.split('');
        hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
      }

      var u = parseInt(hex, 16);
      var r = u >> 16;
      var g = u >> 8 & 0xFF;
      var b = u & 0xFF;
      return [r, g, b, 1];
    } // match rgba hex format, eg #FF000077


    if (hex.match(RE_HEXA)) {
      if (hex.length === 9) {
        // remove optional leading #
        hex = hex.substr(1);
      }

      var u$1 = parseInt(hex, 16);
      var r$1 = u$1 >> 24 & 0xFF;
      var g$1 = u$1 >> 16 & 0xFF;
      var b$1 = u$1 >> 8 & 0xFF;
      var a = Math.round((u$1 & 0xFF) / 0xFF * 100) / 100;
      return [r$1, g$1, b$1, a];
    } // we used to check for css colors here
    // if _input.css? and rgb = _input.css hex
    //     return rgb


    throw new Error("unknown hex color: " + hex);
  };

  var hex2rgb_1 = hex2rgb;
  var unpack$7 = utils.unpack;
  var round$1 = Math.round;

  var hsl2rgb = function () {
    var assign;
    var args = [],
        len = arguments.length;

    while (len--) args[len] = arguments[len];

    args = unpack$7(args, 'hsl');
    var h = args[0];
    var s = args[1];
    var l = args[2];
    var r, g, b;

    if (s === 0) {
      r = g = b = l * 255;
    } else {
      var t3 = [0, 0, 0];
      var c = [0, 0, 0];
      var t2 = l < 0.5 ? l * (1 + s) : l + s - l * s;
      var t1 = 2 * l - t2;
      var h_ = h / 360;
      t3[0] = h_ + 1 / 3;
      t3[1] = h_;
      t3[2] = h_ - 1 / 3;

      for (var i = 0; i < 3; i++) {
        if (t3[i] < 0) {
          t3[i] += 1;
        }

        if (t3[i] > 1) {
          t3[i] -= 1;
        }

        if (6 * t3[i] < 1) {
          c[i] = t1 + (t2 - t1) * 6 * t3[i];
        } else if (2 * t3[i] < 1) {
          c[i] = t2;
        } else if (3 * t3[i] < 2) {
          c[i] = t1 + (t2 - t1) * (2 / 3 - t3[i]) * 6;
        } else {
          c[i] = t1;
        }
      }

      assign = [round$1(c[0] * 255), round$1(c[1] * 255), round$1(c[2] * 255)], r = assign[0], g = assign[1], b = assign[2];
    }

    if (args.length > 3) {
      // keep alpha channel
      return [r, g, b, args[3]];
    }

    return [r, g, b, 1];
  };

  var hsl2rgb_1 = hsl2rgb;
  /**
  	X11 color names
   	http://www.w3.org/TR/css3-color/#svg-color
  */

  var w3cx11 = {
    aliceblue: '#f0f8ff',
    antiquewhite: '#faebd7',
    aqua: '#00ffff',
    aquamarine: '#7fffd4',
    azure: '#f0ffff',
    beige: '#f5f5dc',
    bisque: '#ffe4c4',
    black: '#000000',
    blanchedalmond: '#ffebcd',
    blue: '#0000ff',
    blueviolet: '#8a2be2',
    brown: '#a52a2a',
    burlywood: '#deb887',
    cadetblue: '#5f9ea0',
    chartreuse: '#7fff00',
    chocolate: '#d2691e',
    coral: '#ff7f50',
    cornflower: '#6495ed',
    cornflowerblue: '#6495ed',
    cornsilk: '#fff8dc',
    crimson: '#dc143c',
    cyan: '#00ffff',
    darkblue: '#00008b',
    darkcyan: '#008b8b',
    darkgoldenrod: '#b8860b',
    darkgray: '#a9a9a9',
    darkgreen: '#006400',
    darkgrey: '#a9a9a9',
    darkkhaki: '#bdb76b',
    darkmagenta: '#8b008b',
    darkolivegreen: '#556b2f',
    darkorange: '#ff8c00',
    darkorchid: '#9932cc',
    darkred: '#8b0000',
    darksalmon: '#e9967a',
    darkseagreen: '#8fbc8f',
    darkslateblue: '#483d8b',
    darkslategray: '#2f4f4f',
    darkslategrey: '#2f4f4f',
    darkturquoise: '#00ced1',
    darkviolet: '#9400d3',
    deeppink: '#ff1493',
    deepskyblue: '#00bfff',
    dimgray: '#696969',
    dimgrey: '#696969',
    dodgerblue: '#1e90ff',
    firebrick: '#b22222',
    floralwhite: '#fffaf0',
    forestgreen: '#228b22',
    fuchsia: '#ff00ff',
    gainsboro: '#dcdcdc',
    ghostwhite: '#f8f8ff',
    gold: '#ffd700',
    goldenrod: '#daa520',
    gray: '#808080',
    green: '#008000',
    greenyellow: '#adff2f',
    grey: '#808080',
    honeydew: '#f0fff0',
    hotpink: '#ff69b4',
    indianred: '#cd5c5c',
    indigo: '#4b0082',
    ivory: '#fffff0',
    khaki: '#f0e68c',
    laserlemon: '#ffff54',
    lavender: '#e6e6fa',
    lavenderblush: '#fff0f5',
    lawngreen: '#7cfc00',
    lemonchiffon: '#fffacd',
    lightblue: '#add8e6',
    lightcoral: '#f08080',
    lightcyan: '#e0ffff',
    lightgoldenrod: '#fafad2',
    lightgoldenrodyellow: '#fafad2',
    lightgray: '#d3d3d3',
    lightgreen: '#90ee90',
    lightgrey: '#d3d3d3',
    lightpink: '#ffb6c1',
    lightsalmon: '#ffa07a',
    lightseagreen: '#20b2aa',
    lightskyblue: '#87cefa',
    lightslategray: '#778899',
    lightslategrey: '#778899',
    lightsteelblue: '#b0c4de',
    lightyellow: '#ffffe0',
    lime: '#00ff00',
    limegreen: '#32cd32',
    linen: '#faf0e6',
    magenta: '#ff00ff',
    maroon: '#800000',
    maroon2: '#7f0000',
    maroon3: '#b03060',
    mediumaquamarine: '#66cdaa',
    mediumblue: '#0000cd',
    mediumorchid: '#ba55d3',
    mediumpurple: '#9370db',
    mediumseagreen: '#3cb371',
    mediumslateblue: '#7b68ee',
    mediumspringgreen: '#00fa9a',
    mediumturquoise: '#48d1cc',
    mediumvioletred: '#c71585',
    midnightblue: '#191970',
    mintcream: '#f5fffa',
    mistyrose: '#ffe4e1',
    moccasin: '#ffe4b5',
    navajowhite: '#ffdead',
    navy: '#000080',
    oldlace: '#fdf5e6',
    olive: '#808000',
    olivedrab: '#6b8e23',
    orange: '#ffa500',
    orangered: '#ff4500',
    orchid: '#da70d6',
    palegoldenrod: '#eee8aa',
    palegreen: '#98fb98',
    paleturquoise: '#afeeee',
    palevioletred: '#db7093',
    papayawhip: '#ffefd5',
    peachpuff: '#ffdab9',
    peru: '#cd853f',
    pink: '#ffc0cb',
    plum: '#dda0dd',
    powderblue: '#b0e0e6',
    purple: '#800080',
    purple2: '#7f007f',
    purple3: '#a020f0',
    rebeccapurple: '#663399',
    red: '#ff0000',
    rosybrown: '#bc8f8f',
    royalblue: '#4169e1',
    saddlebrown: '#8b4513',
    salmon: '#fa8072',
    sandybrown: '#f4a460',
    seagreen: '#2e8b57',
    seashell: '#fff5ee',
    sienna: '#a0522d',
    silver: '#c0c0c0',
    skyblue: '#87ceeb',
    slateblue: '#6a5acd',
    slategray: '#708090',
    slategrey: '#708090',
    snow: '#fffafa',
    springgreen: '#00ff7f',
    steelblue: '#4682b4',
    tan: '#d2b48c',
    teal: '#008080',
    thistle: '#d8bfd8',
    tomato: '#ff6347',
    turquoise: '#40e0d0',
    violet: '#ee82ee',
    wheat: '#f5deb3',
    white: '#ffffff',
    whitesmoke: '#f5f5f5',
    yellow: '#ffff00',
    yellowgreen: '#9acd32'
  };
  var w3cx11_1 = w3cx11;
  var RE_RGB = /^rgb\(\s*(-?\d+),\s*(-?\d+)\s*,\s*(-?\d+)\s*\)$/;
  var RE_RGBA = /^rgba\(\s*(-?\d+),\s*(-?\d+)\s*,\s*(-?\d+)\s*,\s*([01]|[01]?\.\d+)\)$/;
  var RE_RGB_PCT = /^rgb\(\s*(-?\d+(?:\.\d+)?)%,\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*\)$/;
  var RE_RGBA_PCT = /^rgba\(\s*(-?\d+(?:\.\d+)?)%,\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*,\s*([01]|[01]?\.\d+)\)$/;
  var RE_HSL = /^hsl\(\s*(-?\d+(?:\.\d+)?),\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*\)$/;
  var RE_HSLA = /^hsla\(\s*(-?\d+(?:\.\d+)?),\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*,\s*([01]|[01]?\.\d+)\)$/;
  var round$2 = Math.round;

  var css2rgb = function (css) {
    css = css.toLowerCase().trim(); // named X11 colors

    if (w3cx11_1[css]) {
      return hex2rgb_1(w3cx11_1[css]);
    }

    var m; // rgb(250,20,0)

    if (m = css.match(RE_RGB)) {
      var rgb = m.slice(1, 4);

      for (var i = 0; i < 3; i++) {
        rgb[i] = +rgb[i];
      }

      rgb[3] = 1; // default alpha

      return rgb;
    } // rgba(250,20,0,0.4)


    if (m = css.match(RE_RGBA)) {
      var rgb$1 = m.slice(1, 5);

      for (var i$1 = 0; i$1 < 4; i$1++) {
        rgb$1[i$1] = +rgb$1[i$1];
      }

      return rgb$1;
    } // rgb(100%,0%,0%)


    if (m = css.match(RE_RGB_PCT)) {
      var rgb$2 = m.slice(1, 4);

      for (var i$2 = 0; i$2 < 3; i$2++) {
        rgb$2[i$2] = round$2(rgb$2[i$2] * 2.55);
      }

      rgb$2[3] = 1; // default alpha

      return rgb$2;
    } // rgba(100%,0%,0%,0.4)


    if (m = css.match(RE_RGBA_PCT)) {
      var rgb$3 = m.slice(1, 5);

      for (var i$3 = 0; i$3 < 3; i$3++) {
        rgb$3[i$3] = round$2(rgb$3[i$3] * 2.55);
      }

      rgb$3[3] = +rgb$3[3];
      return rgb$3;
    } // hsl(0,100%,50%)


    if (m = css.match(RE_HSL)) {
      var hsl = m.slice(1, 4);
      hsl[1] *= 0.01;
      hsl[2] *= 0.01;
      var rgb$4 = hsl2rgb_1(hsl);
      rgb$4[3] = 1;
      return rgb$4;
    } // hsla(0,100%,50%,0.5)


    if (m = css.match(RE_HSLA)) {
      var hsl$1 = m.slice(1, 4);
      hsl$1[1] *= 0.01;
      hsl$1[2] *= 0.01;
      var rgb$5 = hsl2rgb_1(hsl$1);
      rgb$5[3] = +m[4]; // default alpha = 1

      return rgb$5;
    }
  };

  css2rgb.test = function (s) {
    return RE_RGB.test(s) || RE_RGBA.test(s) || RE_RGB_PCT.test(s) || RE_RGBA_PCT.test(s) || RE_HSL.test(s) || RE_HSLA.test(s);
  };

  var css2rgb_1 = css2rgb;
  var type$3 = utils.type;

  Color_1.prototype.css = function (mode) {
    return rgb2css_1(this._rgb, mode);
  };

  chroma_1.css = function () {
    var args = [],
        len = arguments.length;

    while (len--) args[len] = arguments[len];

    return new (Function.prototype.bind.apply(Color_1, [null].concat(args, ['css'])))();
  };

  input.format.css = css2rgb_1;
  input.autodetect.push({
    p: 5,
    test: function (h) {
      var rest = [],
          len = arguments.length - 1;

      while (len-- > 0) rest[len] = arguments[len + 1];

      if (!rest.length && type$3(h) === 'string' && css2rgb_1.test(h)) {
        return 'css';
      }
    }
  });
  var unpack$8 = utils.unpack;

  input.format.gl = function () {
    var args = [],
        len = arguments.length;

    while (len--) args[len] = arguments[len];

    var rgb = unpack$8(args, 'rgba');
    rgb[0] *= 255;
    rgb[1] *= 255;
    rgb[2] *= 255;
    return rgb;
  };

  chroma_1.gl = function () {
    var args = [],
        len = arguments.length;

    while (len--) args[len] = arguments[len];

    return new (Function.prototype.bind.apply(Color_1, [null].concat(args, ['gl'])))();
  };

  Color_1.prototype.gl = function () {
    var rgb = this._rgb;
    return [rgb[0] / 255, rgb[1] / 255, rgb[2] / 255, rgb[3]];
  };

  var unpack$9 = utils.unpack;

  var rgb2hcg = function () {
    var args = [],
        len = arguments.length;

    while (len--) args[len] = arguments[len];

    var ref = unpack$9(args, 'rgb');
    var r = ref[0];
    var g = ref[1];
    var b = ref[2];
    var min = Math.min(r, g, b);
    var max = Math.max(r, g, b);
    var delta = max - min;
    var c = delta * 100 / 255;

    var _g = min / (255 - delta) * 100;

    var h;

    if (delta === 0) {
      h = Number.NaN;
    } else {
      if (r === max) {
        h = (g - b) / delta;
      }

      if (g === max) {
        h = 2 + (b - r) / delta;
      }

      if (b === max) {
        h = 4 + (r - g) / delta;
      }

      h *= 60;

      if (h < 0) {
        h += 360;
      }
    }

    return [h, c, _g];
  };

  var rgb2hcg_1 = rgb2hcg;
  var unpack$a = utils.unpack;
  var floor = Math.floor;
  /*
   * this is basically just HSV with some minor tweaks
   *
   * hue.. [0..360]
   * chroma .. [0..1]
   * grayness .. [0..1]
   */

  var hcg2rgb = function () {
    var assign, assign$1, assign$2, assign$3, assign$4, assign$5;
    var args = [],
        len = arguments.length;

    while (len--) args[len] = arguments[len];

    args = unpack$a(args, 'hcg');
    var h = args[0];
    var c = args[1];
    var _g = args[2];
    var r, g, b;
    _g = _g * 255;

    var _c = c * 255;

    if (c === 0) {
      r = g = b = _g;
    } else {
      if (h === 360) {
        h = 0;
      }

      if (h > 360) {
        h -= 360;
      }

      if (h < 0) {
        h += 360;
      }

      h /= 60;
      var i = floor(h);
      var f = h - i;
      var p = _g * (1 - c);
      var q = p + _c * (1 - f);
      var t = p + _c * f;
      var v = p + _c;

      switch (i) {
        case 0:
          assign = [v, t, p], r = assign[0], g = assign[1], b = assign[2];
          break;

        case 1:
          assign$1 = [q, v, p], r = assign$1[0], g = assign$1[1], b = assign$1[2];
          break;

        case 2:
          assign$2 = [p, v, t], r = assign$2[0], g = assign$2[1], b = assign$2[2];
          break;

        case 3:
          assign$3 = [p, q, v], r = assign$3[0], g = assign$3[1], b = assign$3[2];
          break;

        case 4:
          assign$4 = [t, p, v], r = assign$4[0], g = assign$4[1], b = assign$4[2];
          break;

        case 5:
          assign$5 = [v, p, q], r = assign$5[0], g = assign$5[1], b = assign$5[2];
          break;
      }
    }

    return [r, g, b, args.length > 3 ? args[3] : 1];
  };

  var hcg2rgb_1 = hcg2rgb;
  var unpack$b = utils.unpack;
  var type$4 = utils.type;

  Color_1.prototype.hcg = function () {
    return rgb2hcg_1(this._rgb);
  };

  chroma_1.hcg = function () {
    var args = [],
        len = arguments.length;

    while (len--) args[len] = arguments[len];

    return new (Function.prototype.bind.apply(Color_1, [null].concat(args, ['hcg'])))();
  };

  input.format.hcg = hcg2rgb_1;
  input.autodetect.push({
    p: 1,
    test: function () {
      var args = [],
          len = arguments.length;

      while (len--) args[len] = arguments[len];

      args = unpack$b(args, 'hcg');

      if (type$4(args) === 'array' && args.length === 3) {
        return 'hcg';
      }
    }
  });
  var unpack$c = utils.unpack;
  var last$4 = utils.last;
  var round$3 = Math.round;

  var rgb2hex = function () {
    var args = [],
        len = arguments.length;

    while (len--) args[len] = arguments[len];

    var ref = unpack$c(args, 'rgba');
    var r = ref[0];
    var g = ref[1];
    var b = ref[2];
    var a = ref[3];
    var mode = last$4(args) || 'auto';

    if (a === undefined) {
      a = 1;
    }

    if (mode === 'auto') {
      mode = a < 1 ? 'rgba' : 'rgb';
    }

    r = round$3(r);
    g = round$3(g);
    b = round$3(b);
    var u = r << 16 | g << 8 | b;
    var str = "000000" + u.toString(16); //#.toUpperCase();

    str = str.substr(str.length - 6);
    var hxa = '0' + round$3(a * 255).toString(16);
    hxa = hxa.substr(hxa.length - 2);

    switch (mode.toLowerCase()) {
      case 'rgba':
        return "#" + str + hxa;

      case 'argb':
        return "#" + hxa + str;

      default:
        return "#" + str;
    }
  };

  var rgb2hex_1 = rgb2hex;
  var type$5 = utils.type;

  Color_1.prototype.hex = function (mode) {
    return rgb2hex_1(this._rgb, mode);
  };

  chroma_1.hex = function () {
    var args = [],
        len = arguments.length;

    while (len--) args[len] = arguments[len];

    return new (Function.prototype.bind.apply(Color_1, [null].concat(args, ['hex'])))();
  };

  input.format.hex = hex2rgb_1;
  input.autodetect.push({
    p: 4,
    test: function (h) {
      var rest = [],
          len = arguments.length - 1;

      while (len-- > 0) rest[len] = arguments[len + 1];

      if (!rest.length && type$5(h) === 'string' && [3, 4, 6, 7, 8, 9].includes(h.length)) {
        return 'hex';
      }
    }
  });
  var unpack$d = utils.unpack;
  var TWOPI = utils.TWOPI;
  var min = Math.min;
  var sqrt = Math.sqrt;
  var acos = Math.acos;

  var rgb2hsi = function () {
    var args = [],
        len = arguments.length;

    while (len--) args[len] = arguments[len];
    /*
    borrowed from here:
    http://hummer.stanford.edu/museinfo/doc/examples/humdrum/keyscape2/rgb2hsi.cpp
    */


    var ref = unpack$d(args, 'rgb');
    var r = ref[0];
    var g = ref[1];
    var b = ref[2];
    r /= 255;
    g /= 255;
    b /= 255;
    var h;
    var min_ = min(r, g, b);
    var i = (r + g + b) / 3;
    var s = i > 0 ? 1 - min_ / i : 0;

    if (s === 0) {
      h = NaN;
    } else {
      h = (r - g + (r - b)) / 2;
      h /= sqrt((r - g) * (r - g) + (r - b) * (g - b));
      h = acos(h);

      if (b > g) {
        h = TWOPI - h;
      }

      h /= TWOPI;
    }

    return [h * 360, s, i];
  };

  var rgb2hsi_1 = rgb2hsi;
  var unpack$e = utils.unpack;
  var limit$1 = utils.limit;
  var TWOPI$1 = utils.TWOPI;
  var PITHIRD = utils.PITHIRD;
  var cos = Math.cos;
  /*
   * hue [0..360]
   * saturation [0..1]
   * intensity [0..1]
   */

  var hsi2rgb = function () {
    var args = [],
        len = arguments.length;

    while (len--) args[len] = arguments[len];
    /*
    borrowed from here:
    http://hummer.stanford.edu/museinfo/doc/examples/humdrum/keyscape2/hsi2rgb.cpp
    */


    args = unpack$e(args, 'hsi');
    var h = args[0];
    var s = args[1];
    var i = args[2];
    var r, g, b;

    if (isNaN(h)) {
      h = 0;
    }

    if (isNaN(s)) {
      s = 0;
    } // normalize hue


    if (h > 360) {
      h -= 360;
    }

    if (h < 0) {
      h += 360;
    }

    h /= 360;

    if (h < 1 / 3) {
      b = (1 - s) / 3;
      r = (1 + s * cos(TWOPI$1 * h) / cos(PITHIRD - TWOPI$1 * h)) / 3;
      g = 1 - (b + r);
    } else if (h < 2 / 3) {
      h -= 1 / 3;
      r = (1 - s) / 3;
      g = (1 + s * cos(TWOPI$1 * h) / cos(PITHIRD - TWOPI$1 * h)) / 3;
      b = 1 - (r + g);
    } else {
      h -= 2 / 3;
      g = (1 - s) / 3;
      b = (1 + s * cos(TWOPI$1 * h) / cos(PITHIRD - TWOPI$1 * h)) / 3;
      r = 1 - (g + b);
    }

    r = limit$1(i * r * 3);
    g = limit$1(i * g * 3);
    b = limit$1(i * b * 3);
    return [r * 255, g * 255, b * 255, args.length > 3 ? args[3] : 1];
  };

  var hsi2rgb_1 = hsi2rgb;
  var unpack$f = utils.unpack;
  var type$6 = utils.type;

  Color_1.prototype.hsi = function () {
    return rgb2hsi_1(this._rgb);
  };

  chroma_1.hsi = function () {
    var args = [],
        len = arguments.length;

    while (len--) args[len] = arguments[len];

    return new (Function.prototype.bind.apply(Color_1, [null].concat(args, ['hsi'])))();
  };

  input.format.hsi = hsi2rgb_1;
  input.autodetect.push({
    p: 2,
    test: function () {
      var args = [],
          len = arguments.length;

      while (len--) args[len] = arguments[len];

      args = unpack$f(args, 'hsi');

      if (type$6(args) === 'array' && args.length === 3) {
        return 'hsi';
      }
    }
  });
  var unpack$g = utils.unpack;
  var type$7 = utils.type;

  Color_1.prototype.hsl = function () {
    return rgb2hsl_1(this._rgb);
  };

  chroma_1.hsl = function () {
    var args = [],
        len = arguments.length;

    while (len--) args[len] = arguments[len];

    return new (Function.prototype.bind.apply(Color_1, [null].concat(args, ['hsl'])))();
  };

  input.format.hsl = hsl2rgb_1;
  input.autodetect.push({
    p: 2,
    test: function () {
      var args = [],
          len = arguments.length;

      while (len--) args[len] = arguments[len];

      args = unpack$g(args, 'hsl');

      if (type$7(args) === 'array' && args.length === 3) {
        return 'hsl';
      }
    }
  });
  var unpack$h = utils.unpack;
  var min$1 = Math.min;
  var max$1 = Math.max;
  /*
   * supported arguments:
   * - rgb2hsv(r,g,b)
   * - rgb2hsv([r,g,b])
   * - rgb2hsv({r,g,b})
   */

  var rgb2hsl$1 = function () {
    var args = [],
        len = arguments.length;

    while (len--) args[len] = arguments[len];

    args = unpack$h(args, 'rgb');
    var r = args[0];
    var g = args[1];
    var b = args[2];
    var min_ = min$1(r, g, b);
    var max_ = max$1(r, g, b);
    var delta = max_ - min_;
    var h, s, v;
    v = max_ / 255.0;

    if (max_ === 0) {
      h = Number.NaN;
      s = 0;
    } else {
      s = delta / max_;

      if (r === max_) {
        h = (g - b) / delta;
      }

      if (g === max_) {
        h = 2 + (b - r) / delta;
      }

      if (b === max_) {
        h = 4 + (r - g) / delta;
      }

      h *= 60;

      if (h < 0) {
        h += 360;
      }
    }

    return [h, s, v];
  };

  var rgb2hsv = rgb2hsl$1;
  var unpack$i = utils.unpack;
  var floor$1 = Math.floor;

  var hsv2rgb = function () {
    var assign, assign$1, assign$2, assign$3, assign$4, assign$5;
    var args = [],
        len = arguments.length;

    while (len--) args[len] = arguments[len];

    args = unpack$i(args, 'hsv');
    var h = args[0];
    var s = args[1];
    var v = args[2];
    var r, g, b;
    v *= 255;

    if (s === 0) {
      r = g = b = v;
    } else {
      if (h === 360) {
        h = 0;
      }

      if (h > 360) {
        h -= 360;
      }

      if (h < 0) {
        h += 360;
      }

      h /= 60;
      var i = floor$1(h);
      var f = h - i;
      var p = v * (1 - s);
      var q = v * (1 - s * f);
      var t = v * (1 - s * (1 - f));

      switch (i) {
        case 0:
          assign = [v, t, p], r = assign[0], g = assign[1], b = assign[2];
          break;

        case 1:
          assign$1 = [q, v, p], r = assign$1[0], g = assign$1[1], b = assign$1[2];
          break;

        case 2:
          assign$2 = [p, v, t], r = assign$2[0], g = assign$2[1], b = assign$2[2];
          break;

        case 3:
          assign$3 = [p, q, v], r = assign$3[0], g = assign$3[1], b = assign$3[2];
          break;

        case 4:
          assign$4 = [t, p, v], r = assign$4[0], g = assign$4[1], b = assign$4[2];
          break;

        case 5:
          assign$5 = [v, p, q], r = assign$5[0], g = assign$5[1], b = assign$5[2];
          break;
      }
    }

    return [r, g, b, args.length > 3 ? args[3] : 1];
  };

  var hsv2rgb_1 = hsv2rgb;
  var unpack$j = utils.unpack;
  var type$8 = utils.type;

  Color_1.prototype.hsv = function () {
    return rgb2hsv(this._rgb);
  };

  chroma_1.hsv = function () {
    var args = [],
        len = arguments.length;

    while (len--) args[len] = arguments[len];

    return new (Function.prototype.bind.apply(Color_1, [null].concat(args, ['hsv'])))();
  };

  input.format.hsv = hsv2rgb_1;
  input.autodetect.push({
    p: 2,
    test: function () {
      var args = [],
          len = arguments.length;

      while (len--) args[len] = arguments[len];

      args = unpack$j(args, 'hsv');

      if (type$8(args) === 'array' && args.length === 3) {
        return 'hsv';
      }
    }
  });
  var labConstants = {
    // Corresponds roughly to RGB brighter/darker
    Kn: 18,
    // D65 standard referent
    Xn: 0.950470,
    Yn: 1,
    Zn: 1.088830,
    t0: 0.137931034,
    // 4 / 29
    t1: 0.206896552,
    // 6 / 29
    t2: 0.12841855,
    // 3 * t1 * t1
    t3: 0.008856452 // t1 * t1 * t1

  };
  var unpack$k = utils.unpack;
  var pow = Math.pow;

  var rgb2lab = function () {
    var args = [],
        len = arguments.length;

    while (len--) args[len] = arguments[len];

    var ref = unpack$k(args, 'rgb');
    var r = ref[0];
    var g = ref[1];
    var b = ref[2];
    var ref$1 = rgb2xyz(r, g, b);
    var x = ref$1[0];
    var y = ref$1[1];
    var z = ref$1[2];
    var l = 116 * y - 16;
    return [l < 0 ? 0 : l, 500 * (x - y), 200 * (y - z)];
  };

  var rgb_xyz = function (r) {
    if ((r /= 255) <= 0.04045) {
      return r / 12.92;
    }

    return pow((r + 0.055) / 1.055, 2.4);
  };

  var xyz_lab = function (t) {
    if (t > labConstants.t3) {
      return pow(t, 1 / 3);
    }

    return t / labConstants.t2 + labConstants.t0;
  };

  var rgb2xyz = function (r, g, b) {
    r = rgb_xyz(r);
    g = rgb_xyz(g);
    b = rgb_xyz(b);
    var x = xyz_lab((0.4124564 * r + 0.3575761 * g + 0.1804375 * b) / labConstants.Xn);
    var y = xyz_lab((0.2126729 * r + 0.7151522 * g + 0.0721750 * b) / labConstants.Yn);
    var z = xyz_lab((0.0193339 * r + 0.1191920 * g + 0.9503041 * b) / labConstants.Zn);
    return [x, y, z];
  };

  var rgb2lab_1 = rgb2lab;
  var unpack$l = utils.unpack;
  var pow$1 = Math.pow;
  /*
   * L* [0..100]
   * a [-100..100]
   * b [-100..100]
   */

  var lab2rgb = function () {
    var args = [],
        len = arguments.length;

    while (len--) args[len] = arguments[len];

    args = unpack$l(args, 'lab');
    var l = args[0];
    var a = args[1];
    var b = args[2];
    var x, y, z, r, g, b_;
    y = (l + 16) / 116;
    x = isNaN(a) ? y : y + a / 500;
    z = isNaN(b) ? y : y - b / 200;
    y = labConstants.Yn * lab_xyz(y);
    x = labConstants.Xn * lab_xyz(x);
    z = labConstants.Zn * lab_xyz(z);
    r = xyz_rgb(3.2404542 * x - 1.5371385 * y - 0.4985314 * z); // D65 -> sRGB

    g = xyz_rgb(-0.9692660 * x + 1.8760108 * y + 0.0415560 * z);
    b_ = xyz_rgb(0.0556434 * x - 0.2040259 * y + 1.0572252 * z);
    return [r, g, b_, args.length > 3 ? args[3] : 1];
  };

  var xyz_rgb = function (r) {
    return 255 * (r <= 0.00304 ? 12.92 * r : 1.055 * pow$1(r, 1 / 2.4) - 0.055);
  };

  var lab_xyz = function (t) {
    return t > labConstants.t1 ? t * t * t : labConstants.t2 * (t - labConstants.t0);
  };

  var lab2rgb_1 = lab2rgb;
  var unpack$m = utils.unpack;
  var type$9 = utils.type;

  Color_1.prototype.lab = function () {
    return rgb2lab_1(this._rgb);
  };

  chroma_1.lab = function () {
    var args = [],
        len = arguments.length;

    while (len--) args[len] = arguments[len];

    return new (Function.prototype.bind.apply(Color_1, [null].concat(args, ['lab'])))();
  };

  input.format.lab = lab2rgb_1;
  input.autodetect.push({
    p: 2,
    test: function () {
      var args = [],
          len = arguments.length;

      while (len--) args[len] = arguments[len];

      args = unpack$m(args, 'lab');

      if (type$9(args) === 'array' && args.length === 3) {
        return 'lab';
      }
    }
  });
  var unpack$n = utils.unpack;
  var RAD2DEG = utils.RAD2DEG;
  var sqrt$1 = Math.sqrt;
  var atan2 = Math.atan2;
  var round$4 = Math.round;

  var lab2lch = function () {
    var args = [],
        len = arguments.length;

    while (len--) args[len] = arguments[len];

    var ref = unpack$n(args, 'lab');
    var l = ref[0];
    var a = ref[1];
    var b = ref[2];
    var c = sqrt$1(a * a + b * b);
    var h = (atan2(b, a) * RAD2DEG + 360) % 360;

    if (round$4(c * 10000) === 0) {
      h = Number.NaN;
    }

    return [l, c, h];
  };

  var lab2lch_1 = lab2lch;
  var unpack$o = utils.unpack;

  var rgb2lch = function () {
    var args = [],
        len = arguments.length;

    while (len--) args[len] = arguments[len];

    var ref = unpack$o(args, 'rgb');
    var r = ref[0];
    var g = ref[1];
    var b = ref[2];
    var ref$1 = rgb2lab_1(r, g, b);
    var l = ref$1[0];
    var a = ref$1[1];
    var b_ = ref$1[2];
    return lab2lch_1(l, a, b_);
  };

  var rgb2lch_1 = rgb2lch;
  var unpack$p = utils.unpack;
  var DEG2RAD = utils.DEG2RAD;
  var sin = Math.sin;
  var cos$1 = Math.cos;

  var lch2lab = function () {
    var args = [],
        len = arguments.length;

    while (len--) args[len] = arguments[len];
    /*
    Convert from a qualitative parameter h and a quantitative parameter l to a 24-bit pixel.
    These formulas were invented by David Dalrymple to obtain maximum contrast without going
    out of gamut if the parameters are in the range 0-1.
     A saturation multiplier was added by Gregor Aisch
    */


    var ref = unpack$p(args, 'lch');
    var l = ref[0];
    var c = ref[1];
    var h = ref[2];

    if (isNaN(h)) {
      h = 0;
    }

    h = h * DEG2RAD;
    return [l, cos$1(h) * c, sin(h) * c];
  };

  var lch2lab_1 = lch2lab;
  var unpack$q = utils.unpack;

  var lch2rgb = function () {
    var args = [],
        len = arguments.length;

    while (len--) args[len] = arguments[len];

    args = unpack$q(args, 'lch');
    var l = args[0];
    var c = args[1];
    var h = args[2];
    var ref = lch2lab_1(l, c, h);
    var L = ref[0];
    var a = ref[1];
    var b_ = ref[2];
    var ref$1 = lab2rgb_1(L, a, b_);
    var r = ref$1[0];
    var g = ref$1[1];
    var b = ref$1[2];
    return [r, g, b, args.length > 3 ? args[3] : 1];
  };

  var lch2rgb_1 = lch2rgb;
  var unpack$r = utils.unpack;

  var hcl2rgb = function () {
    var args = [],
        len = arguments.length;

    while (len--) args[len] = arguments[len];

    var hcl = unpack$r(args, 'hcl').reverse();
    return lch2rgb_1.apply(void 0, hcl);
  };

  var hcl2rgb_1 = hcl2rgb;
  var unpack$s = utils.unpack;
  var type$a = utils.type;

  Color_1.prototype.lch = function () {
    return rgb2lch_1(this._rgb);
  };

  Color_1.prototype.hcl = function () {
    return rgb2lch_1(this._rgb).reverse();
  };

  chroma_1.lch = function () {
    var args = [],
        len = arguments.length;

    while (len--) args[len] = arguments[len];

    return new (Function.prototype.bind.apply(Color_1, [null].concat(args, ['lch'])))();
  };

  chroma_1.hcl = function () {
    var args = [],
        len = arguments.length;

    while (len--) args[len] = arguments[len];

    return new (Function.prototype.bind.apply(Color_1, [null].concat(args, ['hcl'])))();
  };

  input.format.lch = lch2rgb_1;
  input.format.hcl = hcl2rgb_1;
  ['lch', 'hcl'].forEach(function (m) {
    return input.autodetect.push({
      p: 2,
      test: function () {
        var args = [],
            len = arguments.length;

        while (len--) args[len] = arguments[len];

        args = unpack$s(args, m);

        if (type$a(args) === 'array' && args.length === 3) {
          return m;
        }
      }
    });
  });
  var type$b = utils.type;

  Color_1.prototype.name = function () {
    var hex = rgb2hex_1(this._rgb, 'rgb');

    for (var i = 0, list = Object.keys(w3cx11_1); i < list.length; i += 1) {
      var n = list[i];

      if (w3cx11_1[n] === hex) {
        return n.toLowerCase();
      }
    }

    return hex;
  };

  input.format.named = function (name) {
    name = name.toLowerCase();

    if (w3cx11_1[name]) {
      return hex2rgb_1(w3cx11_1[name]);
    }

    throw new Error('unknown color name: ' + name);
  };

  input.autodetect.push({
    p: 5,
    test: function (h) {
      var rest = [],
          len = arguments.length - 1;

      while (len-- > 0) rest[len] = arguments[len + 1];

      if (!rest.length && type$b(h) === 'string' && w3cx11_1[h.toLowerCase()]) {
        return 'named';
      }
    }
  });
  var unpack$t = utils.unpack;

  var rgb2num = function () {
    var args = [],
        len = arguments.length;

    while (len--) args[len] = arguments[len];

    var ref = unpack$t(args, 'rgb');
    var r = ref[0];
    var g = ref[1];
    var b = ref[2];
    return (r << 16) + (g << 8) + b;
  };

  var rgb2num_1 = rgb2num;
  var type$c = utils.type;

  var num2rgb = function (num) {
    if (type$c(num) == "number" && num >= 0 && num <= 0xFFFFFF) {
      var r = num >> 16;
      var g = num >> 8 & 0xFF;
      var b = num & 0xFF;
      return [r, g, b, 1];
    }

    throw new Error("unknown num color: " + num);
  };

  var num2rgb_1 = num2rgb;
  var type$d = utils.type;

  Color_1.prototype.num = function () {
    return rgb2num_1(this._rgb);
  };

  chroma_1.num = function () {
    var args = [],
        len = arguments.length;

    while (len--) args[len] = arguments[len];

    return new (Function.prototype.bind.apply(Color_1, [null].concat(args, ['num'])))();
  };

  input.format.num = num2rgb_1;
  input.autodetect.push({
    p: 5,
    test: function () {
      var args = [],
          len = arguments.length;

      while (len--) args[len] = arguments[len];

      if (args.length === 1 && type$d(args[0]) === 'number' && args[0] >= 0 && args[0] <= 0xFFFFFF) {
        return 'num';
      }
    }
  });
  var unpack$u = utils.unpack;
  var type$e = utils.type;
  var round$5 = Math.round;

  Color_1.prototype.rgb = function (rnd) {
    if (rnd === void 0) rnd = true;

    if (rnd === false) {
      return this._rgb.slice(0, 3);
    }

    return this._rgb.slice(0, 3).map(round$5);
  };

  Color_1.prototype.rgba = function (rnd) {
    if (rnd === void 0) rnd = true;
    return this._rgb.slice(0, 4).map(function (v, i) {
      return i < 3 ? rnd === false ? v : round$5(v) : v;
    });
  };

  chroma_1.rgb = function () {
    var args = [],
        len = arguments.length;

    while (len--) args[len] = arguments[len];

    return new (Function.prototype.bind.apply(Color_1, [null].concat(args, ['rgb'])))();
  };

  input.format.rgb = function () {
    var args = [],
        len = arguments.length;

    while (len--) args[len] = arguments[len];

    var rgba = unpack$u(args, 'rgba');

    if (rgba[3] === undefined) {
      rgba[3] = 1;
    }

    return rgba;
  };

  input.autodetect.push({
    p: 3,
    test: function () {
      var args = [],
          len = arguments.length;

      while (len--) args[len] = arguments[len];

      args = unpack$u(args, 'rgba');

      if (type$e(args) === 'array' && (args.length === 3 || args.length === 4 && type$e(args[3]) == 'number' && args[3] >= 0 && args[3] <= 1)) {
        return 'rgb';
      }
    }
  });
  /*
   * Based on implementation by Neil Bartlett
   * https://github.com/neilbartlett/color-temperature
   */

  var log = Math.log;

  var temperature2rgb = function (kelvin) {
    var temp = kelvin / 100;
    var r, g, b;

    if (temp < 66) {
      r = 255;
      g = -155.25485562709179 - 0.44596950469579133 * (g = temp - 2) + 104.49216199393888 * log(g);
      b = temp < 20 ? 0 : -254.76935184120902 + 0.8274096064007395 * (b = temp - 10) + 115.67994401066147 * log(b);
    } else {
      r = 351.97690566805693 + 0.114206453784165 * (r = temp - 55) - 40.25366309332127 * log(r);
      g = 325.4494125711974 + 0.07943456536662342 * (g = temp - 50) - 28.0852963507957 * log(g);
      b = 255;
    }

    return [r, g, b, 1];
  };

  var temperature2rgb_1 = temperature2rgb;
  /*
   * Based on implementation by Neil Bartlett
   * https://github.com/neilbartlett/color-temperature
   **/

  var unpack$v = utils.unpack;
  var round$6 = Math.round;

  var rgb2temperature = function () {
    var args = [],
        len = arguments.length;

    while (len--) args[len] = arguments[len];

    var rgb = unpack$v(args, 'rgb');
    var r = rgb[0],
        b = rgb[2];
    var minTemp = 1000;
    var maxTemp = 40000;
    var eps = 0.4;
    var temp;

    while (maxTemp - minTemp > eps) {
      temp = (maxTemp + minTemp) * 0.5;
      var rgb$1 = temperature2rgb_1(temp);

      if (rgb$1[2] / rgb$1[0] >= b / r) {
        maxTemp = temp;
      } else {
        minTemp = temp;
      }
    }

    return round$6(temp);
  };

  var rgb2temperature_1 = rgb2temperature;

  Color_1.prototype.temp = Color_1.prototype.kelvin = Color_1.prototype.temperature = function () {
    return rgb2temperature_1(this._rgb);
  };

  chroma_1.temp = chroma_1.kelvin = chroma_1.temperature = function () {
    var args = [],
        len = arguments.length;

    while (len--) args[len] = arguments[len];

    return new (Function.prototype.bind.apply(Color_1, [null].concat(args, ['temp'])))();
  };

  input.format.temp = input.format.kelvin = input.format.temperature = temperature2rgb_1;
  var type$f = utils.type;

  Color_1.prototype.alpha = function (a, mutate) {
    if (mutate === void 0) mutate = false;

    if (a !== undefined && type$f(a) === 'number') {
      if (mutate) {
        this._rgb[3] = a;
        return this;
      }

      return new Color_1([this._rgb[0], this._rgb[1], this._rgb[2], a], 'rgb');
    }

    return this._rgb[3];
  };

  Color_1.prototype.clipped = function () {
    return this._rgb._clipped || false;
  };

  Color_1.prototype.darken = function (amount) {
    if (amount === void 0) amount = 1;
    var me = this;
    var lab = me.lab();
    lab[0] -= labConstants.Kn * amount;
    return new Color_1(lab, 'lab').alpha(me.alpha(), true);
  };

  Color_1.prototype.brighten = function (amount) {
    if (amount === void 0) amount = 1;
    return this.darken(-amount);
  };

  Color_1.prototype.darker = Color_1.prototype.darken;
  Color_1.prototype.brighter = Color_1.prototype.brighten;

  Color_1.prototype.get = function (mc) {
    var ref = mc.split('.');
    var mode = ref[0];
    var channel = ref[1];
    var src = this[mode]();

    if (channel) {
      var i = mode.indexOf(channel);

      if (i > -1) {
        return src[i];
      }

      throw new Error("unknown channel " + channel + " in mode " + mode);
    } else {
      return src;
    }
  };

  var type$g = utils.type;
  var pow$2 = Math.pow;
  var EPS = 1e-7;
  var MAX_ITER = 20;

  Color_1.prototype.luminance = function (lum) {
    if (lum !== undefined && type$g(lum) === 'number') {
      if (lum === 0) {
        // return pure black
        return new Color_1([0, 0, 0, this._rgb[3]], 'rgb');
      }

      if (lum === 1) {
        // return pure white
        return new Color_1([255, 255, 255, this._rgb[3]], 'rgb');
      } // compute new color using...


      var cur_lum = this.luminance();
      var mode = 'rgb';
      var max_iter = MAX_ITER;

      var test = function (low, high) {
        var mid = low.interpolate(high, 0.5, mode);
        var lm = mid.luminance();

        if (Math.abs(lum - lm) < EPS || !max_iter--) {
          // close enough
          return mid;
        }

        return lm > lum ? test(low, mid) : test(mid, high);
      };

      var rgb = (cur_lum > lum ? test(new Color_1([0, 0, 0]), this) : test(this, new Color_1([255, 255, 255]))).rgb();
      return new Color_1(rgb.concat([this._rgb[3]]));
    }

    return rgb2luminance.apply(void 0, this._rgb.slice(0, 3));
  };

  var rgb2luminance = function (r, g, b) {
    // relative luminance
    // see http://www.w3.org/TR/2008/REC-WCAG20-20081211/#relativeluminancedef
    r = luminance_x(r);
    g = luminance_x(g);
    b = luminance_x(b);
    return 0.2126 * r + 0.7152 * g + 0.0722 * b;
  };

  var luminance_x = function (x) {
    x /= 255;
    return x <= 0.03928 ? x / 12.92 : pow$2((x + 0.055) / 1.055, 2.4);
  };

  var interpolator = {};
  var type$h = utils.type;

  var mix = function (col1, col2, f) {
    if (f === void 0) f = 0.5;
    var rest = [],
        len = arguments.length - 3;

    while (len-- > 0) rest[len] = arguments[len + 3];

    var mode = rest[0] || 'lrgb';

    if (!interpolator[mode] && !rest.length) {
      // fall back to the first supported mode
      mode = Object.keys(interpolator)[0];
    }

    if (!interpolator[mode]) {
      throw new Error("interpolation mode " + mode + " is not defined");
    }

    if (type$h(col1) !== 'object') {
      col1 = new Color_1(col1);
    }

    if (type$h(col2) !== 'object') {
      col2 = new Color_1(col2);
    }

    return interpolator[mode](col1, col2, f).alpha(col1.alpha() + f * (col2.alpha() - col1.alpha()));
  };

  Color_1.prototype.mix = Color_1.prototype.interpolate = function (col2, f) {
    if (f === void 0) f = 0.5;
    var rest = [],
        len = arguments.length - 2;

    while (len-- > 0) rest[len] = arguments[len + 2];

    return mix.apply(void 0, [this, col2, f].concat(rest));
  };

  Color_1.prototype.premultiply = function (mutate) {
    if (mutate === void 0) mutate = false;
    var rgb = this._rgb;
    var a = rgb[3];

    if (mutate) {
      this._rgb = [rgb[0] * a, rgb[1] * a, rgb[2] * a, a];
      return this;
    } else {
      return new Color_1([rgb[0] * a, rgb[1] * a, rgb[2] * a, a], 'rgb');
    }
  };

  Color_1.prototype.saturate = function (amount) {
    if (amount === void 0) amount = 1;
    var me = this;
    var lch = me.lch();
    lch[1] += labConstants.Kn * amount;

    if (lch[1] < 0) {
      lch[1] = 0;
    }

    return new Color_1(lch, 'lch').alpha(me.alpha(), true);
  };

  Color_1.prototype.desaturate = function (amount) {
    if (amount === void 0) amount = 1;
    return this.saturate(-amount);
  };

  var type$i = utils.type;

  Color_1.prototype.set = function (mc, value, mutate) {
    if (mutate === void 0) mutate = false;
    var ref = mc.split('.');
    var mode = ref[0];
    var channel = ref[1];
    var src = this[mode]();

    if (channel) {
      var i = mode.indexOf(channel);

      if (i > -1) {
        if (type$i(value) == 'string') {
          switch (value.charAt(0)) {
            case '+':
              src[i] += +value;
              break;

            case '-':
              src[i] += +value;
              break;

            case '*':
              src[i] *= +value.substr(1);
              break;

            case '/':
              src[i] /= +value.substr(1);
              break;

            default:
              src[i] = +value;
          }
        } else if (type$i(value) === 'number') {
          src[i] = value;
        } else {
          throw new Error("unsupported value for Color.set");
        }

        var out = new Color_1(src, mode);

        if (mutate) {
          this._rgb = out._rgb;
          return this;
        }

        return out;
      }

      throw new Error("unknown channel " + channel + " in mode " + mode);
    } else {
      return src;
    }
  };

  var rgb$1 = function (col1, col2, f) {
    var xyz0 = col1._rgb;
    var xyz1 = col2._rgb;
    return new Color_1(xyz0[0] + f * (xyz1[0] - xyz0[0]), xyz0[1] + f * (xyz1[1] - xyz0[1]), xyz0[2] + f * (xyz1[2] - xyz0[2]), 'rgb');
  }; // register interpolator


  interpolator.rgb = rgb$1;
  var sqrt$2 = Math.sqrt;
  var pow$3 = Math.pow;

  var lrgb = function (col1, col2, f) {
    var ref = col1._rgb;
    var x1 = ref[0];
    var y1 = ref[1];
    var z1 = ref[2];
    var ref$1 = col2._rgb;
    var x2 = ref$1[0];
    var y2 = ref$1[1];
    var z2 = ref$1[2];
    return new Color_1(sqrt$2(pow$3(x1, 2) * (1 - f) + pow$3(x2, 2) * f), sqrt$2(pow$3(y1, 2) * (1 - f) + pow$3(y2, 2) * f), sqrt$2(pow$3(z1, 2) * (1 - f) + pow$3(z2, 2) * f), 'rgb');
  }; // register interpolator


  interpolator.lrgb = lrgb;

  var lab$1 = function (col1, col2, f) {
    var xyz0 = col1.lab();
    var xyz1 = col2.lab();
    return new Color_1(xyz0[0] + f * (xyz1[0] - xyz0[0]), xyz0[1] + f * (xyz1[1] - xyz0[1]), xyz0[2] + f * (xyz1[2] - xyz0[2]), 'lab');
  }; // register interpolator


  interpolator.lab = lab$1;

  var _hsx = function (col1, col2, f, m) {
    var assign, assign$1;
    var xyz0, xyz1;

    if (m === 'hsl') {
      xyz0 = col1.hsl();
      xyz1 = col2.hsl();
    } else if (m === 'hsv') {
      xyz0 = col1.hsv();
      xyz1 = col2.hsv();
    } else if (m === 'hcg') {
      xyz0 = col1.hcg();
      xyz1 = col2.hcg();
    } else if (m === 'hsi') {
      xyz0 = col1.hsi();
      xyz1 = col2.hsi();
    } else if (m === 'lch' || m === 'hcl') {
      m = 'hcl';
      xyz0 = col1.hcl();
      xyz1 = col2.hcl();
    }

    var hue0, hue1, sat0, sat1, lbv0, lbv1;

    if (m.substr(0, 1) === 'h') {
      assign = xyz0, hue0 = assign[0], sat0 = assign[1], lbv0 = assign[2];
      assign$1 = xyz1, hue1 = assign$1[0], sat1 = assign$1[1], lbv1 = assign$1[2];
    }

    var sat, hue, lbv, dh;

    if (!isNaN(hue0) && !isNaN(hue1)) {
      // both colors have hue
      if (hue1 > hue0 && hue1 - hue0 > 180) {
        dh = hue1 - (hue0 + 360);
      } else if (hue1 < hue0 && hue0 - hue1 > 180) {
        dh = hue1 + 360 - hue0;
      } else {
        dh = hue1 - hue0;
      }

      hue = hue0 + f * dh;
    } else if (!isNaN(hue0)) {
      hue = hue0;

      if ((lbv1 == 1 || lbv1 == 0) && m != 'hsv') {
        sat = sat0;
      }
    } else if (!isNaN(hue1)) {
      hue = hue1;

      if ((lbv0 == 1 || lbv0 == 0) && m != 'hsv') {
        sat = sat1;
      }
    } else {
      hue = Number.NaN;
    }

    if (sat === undefined) {
      sat = sat0 + f * (sat1 - sat0);
    }

    lbv = lbv0 + f * (lbv1 - lbv0);
    return new Color_1([hue, sat, lbv], m);
  };

  var lch$1 = function (col1, col2, f) {
    return _hsx(col1, col2, f, 'lch');
  }; // register interpolator


  interpolator.lch = lch$1;
  interpolator.hcl = lch$1;

  var num$1 = function (col1, col2, f) {
    var c1 = col1.num();
    var c2 = col2.num();
    return new Color_1(c1 + f * (c2 - c1), 'num');
  }; // register interpolator


  interpolator.num = num$1;

  var hcg$1 = function (col1, col2, f) {
    return _hsx(col1, col2, f, 'hcg');
  }; // register interpolator


  interpolator.hcg = hcg$1;

  var hsi$1 = function (col1, col2, f) {
    return _hsx(col1, col2, f, 'hsi');
  }; // register interpolator


  interpolator.hsi = hsi$1;

  var hsl$1 = function (col1, col2, f) {
    return _hsx(col1, col2, f, 'hsl');
  }; // register interpolator


  interpolator.hsl = hsl$1;

  var hsv$1 = function (col1, col2, f) {
    return _hsx(col1, col2, f, 'hsv');
  }; // register interpolator


  interpolator.hsv = hsv$1;
  var clip_rgb$2 = utils.clip_rgb;
  var pow$4 = Math.pow;
  var sqrt$3 = Math.sqrt;
  var PI$1 = Math.PI;
  var cos$2 = Math.cos;
  var sin$1 = Math.sin;
  var atan2$1 = Math.atan2;

  var average = function (colors, mode) {
    if (mode === void 0) mode = 'lrgb';
    var l = colors.length; // convert colors to Color objects

    colors = colors.map(function (c) {
      return new Color_1(c);
    });

    if (mode === 'lrgb') {
      return _average_lrgb(colors);
    }

    var first = colors.shift();
    var xyz = first.get(mode);
    var cnt = [];
    var dx = 0;
    var dy = 0; // initial color

    for (var i = 0; i < xyz.length; i++) {
      xyz[i] = xyz[i] || 0;
      cnt.push(isNaN(xyz[i]) ? 0 : 1);

      if (mode.charAt(i) === 'h' && !isNaN(xyz[i])) {
        var A = xyz[i] / 180 * PI$1;
        dx += cos$2(A);
        dy += sin$1(A);
      }
    }

    var alpha = first.alpha();
    colors.forEach(function (c) {
      var xyz2 = c.get(mode);
      alpha += c.alpha();

      for (var i = 0; i < xyz.length; i++) {
        if (!isNaN(xyz2[i])) {
          cnt[i]++;

          if (mode.charAt(i) === 'h') {
            var A = xyz2[i] / 180 * PI$1;
            dx += cos$2(A);
            dy += sin$1(A);
          } else {
            xyz[i] += xyz2[i];
          }
        }
      }
    });

    for (var i$1 = 0; i$1 < xyz.length; i$1++) {
      if (mode.charAt(i$1) === 'h') {
        var A$1 = atan2$1(dy / cnt[i$1], dx / cnt[i$1]) / PI$1 * 180;

        while (A$1 < 0) {
          A$1 += 360;
        }

        while (A$1 >= 360) {
          A$1 -= 360;
        }

        xyz[i$1] = A$1;
      } else {
        xyz[i$1] = xyz[i$1] / cnt[i$1];
      }
    }

    alpha /= l;
    return new Color_1(xyz, mode).alpha(alpha > 0.99999 ? 1 : alpha, true);
  };

  var _average_lrgb = function (colors) {
    var l = colors.length;
    var f = 1 / l;
    var xyz = [0, 0, 0, 0];

    for (var i = 0, list = colors; i < list.length; i += 1) {
      var col = list[i];
      var rgb = col._rgb;
      xyz[0] += pow$4(rgb[0], 2) * f;
      xyz[1] += pow$4(rgb[1], 2) * f;
      xyz[2] += pow$4(rgb[2], 2) * f;
      xyz[3] += rgb[3] * f;
    }

    xyz[0] = sqrt$3(xyz[0]);
    xyz[1] = sqrt$3(xyz[1]);
    xyz[2] = sqrt$3(xyz[2]);

    if (xyz[3] > 0.9999999) {
      xyz[3] = 1;
    }

    return new Color_1(clip_rgb$2(xyz));
  }; // minimal multi-purpose interface
  // @requires utils color analyze


  var type$j = utils.type;
  var pow$5 = Math.pow;

  var scale = function (colors) {
    // constructor
    var _mode = 'rgb';

    var _nacol = chroma_1('#ccc');

    var _spread = 0; // const _fixed = false;

    var _domain = [0, 1];
    var _pos = [];
    var _padding = [0, 0];
    var _classes = false;
    var _colors = [];
    var _out = false;
    var _min = 0;
    var _max = 1;
    var _correctLightness = false;
    var _colorCache = {};
    var _useCache = true;
    var _gamma = 1; // private methods

    var setColors = function (colors) {
      colors = colors || ['#fff', '#000'];

      if (colors && type$j(colors) === 'string' && chroma_1.brewer && chroma_1.brewer[colors.toLowerCase()]) {
        colors = chroma_1.brewer[colors.toLowerCase()];
      }

      if (type$j(colors) === 'array') {
        // handle single color
        if (colors.length === 1) {
          colors = [colors[0], colors[0]];
        } // make a copy of the colors


        colors = colors.slice(0); // convert to chroma classes

        for (var c = 0; c < colors.length; c++) {
          colors[c] = chroma_1(colors[c]);
        } // auto-fill color position


        _pos.length = 0;

        for (var c$1 = 0; c$1 < colors.length; c$1++) {
          _pos.push(c$1 / (colors.length - 1));
        }
      }

      resetCache();
      return _colors = colors;
    };

    var getClass = function (value) {
      if (_classes != null) {
        var n = _classes.length - 1;
        var i = 0;

        while (i < n && value >= _classes[i]) {
          i++;
        }

        return i - 1;
      }

      return 0;
    };

    var tmap = function (t) {
      return t;
    }; // const classifyValue = function(value) {
    //     let val = value;
    //     if (_classes.length > 2) {
    //         const n = _classes.length-1;
    //         const i = getClass(value);
    //         const minc = _classes[0] + ((_classes[1]-_classes[0]) * (0 + (_spread * 0.5)));  // center of 1st class
    //         const maxc = _classes[n-1] + ((_classes[n]-_classes[n-1]) * (1 - (_spread * 0.5)));  // center of last class
    //         val = _min + ((((_classes[i] + ((_classes[i+1] - _classes[i]) * 0.5)) - minc) / (maxc-minc)) * (_max - _min));
    //     }
    //     return val;
    // };


    var getColor = function (val, bypassMap) {
      var col, t;

      if (bypassMap == null) {
        bypassMap = false;
      }

      if (isNaN(val) || val === null) {
        return _nacol;
      }

      if (!bypassMap) {
        if (_classes && _classes.length > 2) {
          // find the class
          var c = getClass(val);
          t = c / (_classes.length - 2);
        } else if (_max !== _min) {
          // just interpolate between min/max
          t = (val - _min) / (_max - _min);
        } else {
          t = 1;
        }
      } else {
        t = val;
      }

      if (!bypassMap) {
        t = tmap(t); // lightness correction
      }

      if (_gamma !== 1) {
        t = pow$5(t, _gamma);
      }

      t = _padding[0] + t * (1 - _padding[0] - _padding[1]);
      t = Math.min(1, Math.max(0, t));
      var k = Math.floor(t * 10000);

      if (_useCache && _colorCache[k]) {
        col = _colorCache[k];
      } else {
        if (type$j(_colors) === 'array') {
          //for i in [0.._pos.length-1]
          for (var i = 0; i < _pos.length; i++) {
            var p = _pos[i];

            if (t <= p) {
              col = _colors[i];
              break;
            }

            if (t >= p && i === _pos.length - 1) {
              col = _colors[i];
              break;
            }

            if (t > p && t < _pos[i + 1]) {
              t = (t - p) / (_pos[i + 1] - p);
              col = chroma_1.interpolate(_colors[i], _colors[i + 1], t, _mode);
              break;
            }
          }
        } else if (type$j(_colors) === 'function') {
          col = _colors(t);
        }

        if (_useCache) {
          _colorCache[k] = col;
        }
      }

      return col;
    };

    var resetCache = function () {
      return _colorCache = {};
    };

    setColors(colors); // public interface

    var f = function (v) {
      var c = chroma_1(getColor(v));

      if (_out && c[_out]) {
        return c[_out]();
      } else {
        return c;
      }
    };

    f.classes = function (classes) {
      if (classes != null) {
        if (type$j(classes) === 'array') {
          _classes = classes;
          _domain = [classes[0], classes[classes.length - 1]];
        } else {
          var d = chroma_1.analyze(_domain);

          if (classes === 0) {
            _classes = [d.min, d.max];
          } else {
            _classes = chroma_1.limits(d, 'e', classes);
          }
        }

        return f;
      }

      return _classes;
    };

    f.domain = function (domain) {
      if (!arguments.length) {
        return _domain;
      }

      _min = domain[0];
      _max = domain[domain.length - 1];
      _pos = [];
      var k = _colors.length;

      if (domain.length === k && _min !== _max) {
        // update positions
        for (var i = 0, list = Array.from(domain); i < list.length; i += 1) {
          var d = list[i];

          _pos.push((d - _min) / (_max - _min));
        }
      } else {
        for (var c = 0; c < k; c++) {
          _pos.push(c / (k - 1));
        }
      }

      _domain = [_min, _max];
      return f;
    };

    f.mode = function (_m) {
      if (!arguments.length) {
        return _mode;
      }

      _mode = _m;
      resetCache();
      return f;
    };

    f.range = function (colors, _pos) {
      setColors(colors, _pos);
      return f;
    };

    f.out = function (_o) {
      _out = _o;
      return f;
    };

    f.spread = function (val) {
      if (!arguments.length) {
        return _spread;
      }

      _spread = val;
      return f;
    };

    f.correctLightness = function (v) {
      if (v == null) {
        v = true;
      }

      _correctLightness = v;
      resetCache();

      if (_correctLightness) {
        tmap = function (t) {
          var L0 = getColor(0, true).lab()[0];
          var L1 = getColor(1, true).lab()[0];
          var pol = L0 > L1;
          var L_actual = getColor(t, true).lab()[0];
          var L_ideal = L0 + (L1 - L0) * t;
          var L_diff = L_actual - L_ideal;
          var t0 = 0;
          var t1 = 1;
          var max_iter = 20;

          while (Math.abs(L_diff) > 1e-2 && max_iter-- > 0) {
            (function () {
              if (pol) {
                L_diff *= -1;
              }

              if (L_diff < 0) {
                t0 = t;
                t += (t1 - t) * 0.5;
              } else {
                t1 = t;
                t += (t0 - t) * 0.5;
              }

              L_actual = getColor(t, true).lab()[0];
              return L_diff = L_actual - L_ideal;
            })();
          }

          return t;
        };
      } else {
        tmap = function (t) {
          return t;
        };
      }

      return f;
    };

    f.padding = function (p) {
      if (p != null) {
        if (type$j(p) === 'number') {
          p = [p, p];
        }

        _padding = p;
        return f;
      } else {
        return _padding;
      }
    };

    f.colors = function (numColors, out) {
      // If no arguments are given, return the original colors that were provided
      if (arguments.length < 2) {
        out = 'hex';
      }

      var result = [];

      if (arguments.length === 0) {
        result = _colors.slice(0);
      } else if (numColors === 1) {
        result = [f(0.5)];
      } else if (numColors > 1) {
        var dm = _domain[0];
        var dd = _domain[1] - dm;
        result = __range__(0, numColors, false).map(function (i) {
          return f(dm + i / (numColors - 1) * dd);
        });
      } else {
        // returns all colors based on the defined classes
        colors = [];
        var samples = [];

        if (_classes && _classes.length > 2) {
          for (var i = 1, end = _classes.length, asc = 1 <= end; asc ? i < end : i > end; asc ? i++ : i--) {
            samples.push((_classes[i - 1] + _classes[i]) * 0.5);
          }
        } else {
          samples = _domain;
        }

        result = samples.map(function (v) {
          return f(v);
        });
      }

      if (chroma_1[out]) {
        result = result.map(function (c) {
          return c[out]();
        });
      }

      return result;
    };

    f.cache = function (c) {
      if (c != null) {
        _useCache = c;
        return f;
      } else {
        return _useCache;
      }
    };

    f.gamma = function (g) {
      if (g != null) {
        _gamma = g;
        return f;
      } else {
        return _gamma;
      }
    };

    f.nodata = function (d) {
      if (d != null) {
        _nacol = chroma_1(d);
        return f;
      } else {
        return _nacol;
      }
    };

    return f;
  };

  function __range__(left, right, inclusive) {
    var range = [];
    var ascending = left < right;
    var end = !inclusive ? right : ascending ? right + 1 : right - 1;

    for (var i = left; ascending ? i < end : i > end; ascending ? i++ : i--) {
      range.push(i);
    }

    return range;
  } //
  // interpolates between a set of colors uzing a bezier spline
  //
  // @requires utils lab


  var bezier = function (colors) {
    var assign, assign$1, assign$2;
    var I, lab0, lab1, lab2;
    colors = colors.map(function (c) {
      return new Color_1(c);
    });

    if (colors.length === 2) {
      // linear interpolation
      assign = colors.map(function (c) {
        return c.lab();
      }), lab0 = assign[0], lab1 = assign[1];

      I = function (t) {
        var lab = [0, 1, 2].map(function (i) {
          return lab0[i] + t * (lab1[i] - lab0[i]);
        });
        return new Color_1(lab, 'lab');
      };
    } else if (colors.length === 3) {
      // quadratic bezier interpolation
      assign$1 = colors.map(function (c) {
        return c.lab();
      }), lab0 = assign$1[0], lab1 = assign$1[1], lab2 = assign$1[2];

      I = function (t) {
        var lab = [0, 1, 2].map(function (i) {
          return (1 - t) * (1 - t) * lab0[i] + 2 * (1 - t) * t * lab1[i] + t * t * lab2[i];
        });
        return new Color_1(lab, 'lab');
      };
    } else if (colors.length === 4) {
      // cubic bezier interpolation
      var lab3;
      assign$2 = colors.map(function (c) {
        return c.lab();
      }), lab0 = assign$2[0], lab1 = assign$2[1], lab2 = assign$2[2], lab3 = assign$2[3];

      I = function (t) {
        var lab = [0, 1, 2].map(function (i) {
          return (1 - t) * (1 - t) * (1 - t) * lab0[i] + 3 * (1 - t) * (1 - t) * t * lab1[i] + 3 * (1 - t) * t * t * lab2[i] + t * t * t * lab3[i];
        });
        return new Color_1(lab, 'lab');
      };
    } else if (colors.length === 5) {
      var I0 = bezier(colors.slice(0, 3));
      var I1 = bezier(colors.slice(2, 5));

      I = function (t) {
        if (t < 0.5) {
          return I0(t * 2);
        } else {
          return I1((t - 0.5) * 2);
        }
      };
    }

    return I;
  };

  var bezier_1 = function (colors) {
    var f = bezier(colors);

    f.scale = function () {
      return scale(f);
    };

    return f;
  };
  /*
   * interpolates between a set of colors uzing a bezier spline
   * blend mode formulas taken from http://www.venture-ware.com/kevin/coding/lets-learn-math-photoshop-blend-modes/
   */


  var blend = function (bottom, top, mode) {
    if (!blend[mode]) {
      throw new Error('unknown blend mode ' + mode);
    }

    return blend[mode](bottom, top);
  };

  var blend_f = function (f) {
    return function (bottom, top) {
      var c0 = chroma_1(top).rgb();
      var c1 = chroma_1(bottom).rgb();
      return chroma_1.rgb(f(c0, c1));
    };
  };

  var each = function (f) {
    return function (c0, c1) {
      var out = [];
      out[0] = f(c0[0], c1[0]);
      out[1] = f(c0[1], c1[1]);
      out[2] = f(c0[2], c1[2]);
      return out;
    };
  };

  var normal = function (a) {
    return a;
  };

  var multiply = function (a, b) {
    return a * b / 255;
  };

  var darken$1 = function (a, b) {
    return a > b ? b : a;
  };

  var lighten = function (a, b) {
    return a > b ? a : b;
  };

  var screen = function (a, b) {
    return 255 * (1 - (1 - a / 255) * (1 - b / 255));
  };

  var overlay = function (a, b) {
    return b < 128 ? 2 * a * b / 255 : 255 * (1 - 2 * (1 - a / 255) * (1 - b / 255));
  };

  var burn = function (a, b) {
    return 255 * (1 - (1 - b / 255) / (a / 255));
  };

  var dodge = function (a, b) {
    if (a === 255) {
      return 255;
    }

    a = 255 * (b / 255) / (1 - a / 255);
    return a > 255 ? 255 : a;
  }; // # add = (a,b) ->
  // #     if (a + b > 255) then 255 else a + b


  blend.normal = blend_f(each(normal));
  blend.multiply = blend_f(each(multiply));
  blend.screen = blend_f(each(screen));
  blend.overlay = blend_f(each(overlay));
  blend.darken = blend_f(each(darken$1));
  blend.lighten = blend_f(each(lighten));
  blend.dodge = blend_f(each(dodge));
  blend.burn = blend_f(each(burn)); // blend.add = blend_f(each(add));

  var blend_1 = blend; // cubehelix interpolation
  // based on D.A. Green "A colour scheme for the display of astronomical intensity images"
  // http://astron-soc.in/bulletin/11June/289392011.pdf

  var type$k = utils.type;
  var clip_rgb$3 = utils.clip_rgb;
  var TWOPI$2 = utils.TWOPI;
  var pow$6 = Math.pow;
  var sin$2 = Math.sin;
  var cos$3 = Math.cos;

  var cubehelix = function (start, rotations, hue, gamma, lightness) {
    if (start === void 0) start = 300;
    if (rotations === void 0) rotations = -1.5;
    if (hue === void 0) hue = 1;
    if (gamma === void 0) gamma = 1;
    if (lightness === void 0) lightness = [0, 1];
    var dh = 0,
        dl;

    if (type$k(lightness) === 'array') {
      dl = lightness[1] - lightness[0];
    } else {
      dl = 0;
      lightness = [lightness, lightness];
    }

    var f = function (fract) {
      var a = TWOPI$2 * ((start + 120) / 360 + rotations * fract);
      var l = pow$6(lightness[0] + dl * fract, gamma);
      var h = dh !== 0 ? hue[0] + fract * dh : hue;
      var amp = h * l * (1 - l) / 2;
      var cos_a = cos$3(a);
      var sin_a = sin$2(a);
      var r = l + amp * (-0.14861 * cos_a + 1.78277 * sin_a);
      var g = l + amp * (-0.29227 * cos_a - 0.90649 * sin_a);
      var b = l + amp * (+1.97294 * cos_a);
      return chroma_1(clip_rgb$3([r * 255, g * 255, b * 255, 1]));
    };

    f.start = function (s) {
      if (s == null) {
        return start;
      }

      start = s;
      return f;
    };

    f.rotations = function (r) {
      if (r == null) {
        return rotations;
      }

      rotations = r;
      return f;
    };

    f.gamma = function (g) {
      if (g == null) {
        return gamma;
      }

      gamma = g;
      return f;
    };

    f.hue = function (h) {
      if (h == null) {
        return hue;
      }

      hue = h;

      if (type$k(hue) === 'array') {
        dh = hue[1] - hue[0];

        if (dh === 0) {
          hue = hue[1];
        }
      } else {
        dh = 0;
      }

      return f;
    };

    f.lightness = function (h) {
      if (h == null) {
        return lightness;
      }

      if (type$k(h) === 'array') {
        lightness = h;
        dl = h[1] - h[0];
      } else {
        lightness = [h, h];
        dl = 0;
      }

      return f;
    };

    f.scale = function () {
      return chroma_1.scale(f);
    };

    f.hue(hue);
    return f;
  };

  var digits = '0123456789abcdef';
  var floor$2 = Math.floor;
  var random = Math.random;

  var random_1 = function () {
    var code = '#';

    for (var i = 0; i < 6; i++) {
      code += digits.charAt(floor$2(random() * 16));
    }

    return new Color_1(code, 'hex');
  };

  var log$1 = Math.log;
  var pow$7 = Math.pow;
  var floor$3 = Math.floor;
  var abs = Math.abs;

  var analyze = function (data, key) {
    if (key === void 0) key = null;
    var r = {
      min: Number.MAX_VALUE,
      max: Number.MAX_VALUE * -1,
      sum: 0,
      values: [],
      count: 0
    };

    if (type(data) === 'object') {
      data = Object.values(data);
    }

    data.forEach(function (val) {
      if (key && type(val) === 'object') {
        val = val[key];
      }

      if (val !== undefined && val !== null && !isNaN(val)) {
        r.values.push(val);
        r.sum += val;

        if (val < r.min) {
          r.min = val;
        }

        if (val > r.max) {
          r.max = val;
        }

        r.count += 1;
      }
    });
    r.domain = [r.min, r.max];

    r.limits = function (mode, num) {
      return limits(r, mode, num);
    };

    return r;
  };

  var limits = function (data, mode, num) {
    if (mode === void 0) mode = 'equal';
    if (num === void 0) num = 7;

    if (type(data) == 'array') {
      data = analyze(data);
    }

    var min = data.min;
    var max = data.max;
    var values = data.values.sort(function (a, b) {
      return a - b;
    });

    if (num === 1) {
      return [min, max];
    }

    var limits = [];

    if (mode.substr(0, 1) === 'c') {
      // continuous
      limits.push(min);
      limits.push(max);
    }

    if (mode.substr(0, 1) === 'e') {
      // equal interval
      limits.push(min);

      for (var i = 1; i < num; i++) {
        limits.push(min + i / num * (max - min));
      }

      limits.push(max);
    } else if (mode.substr(0, 1) === 'l') {
      // log scale
      if (min <= 0) {
        throw new Error('Logarithmic scales are only possible for values > 0');
      }

      var min_log = Math.LOG10E * log$1(min);
      var max_log = Math.LOG10E * log$1(max);
      limits.push(min);

      for (var i$1 = 1; i$1 < num; i$1++) {
        limits.push(pow$7(10, min_log + i$1 / num * (max_log - min_log)));
      }

      limits.push(max);
    } else if (mode.substr(0, 1) === 'q') {
      // quantile scale
      limits.push(min);

      for (var i$2 = 1; i$2 < num; i$2++) {
        var p = (values.length - 1) * i$2 / num;
        var pb = floor$3(p);

        if (pb === p) {
          limits.push(values[pb]);
        } else {
          // p > pb
          var pr = p - pb;
          limits.push(values[pb] * (1 - pr) + values[pb + 1] * pr);
        }
      }

      limits.push(max);
    } else if (mode.substr(0, 1) === 'k') {
      // k-means clustering

      /*
      implementation based on
      http://code.google.com/p/figue/source/browse/trunk/figue.js#336
      simplified for 1-d input values
      */
      var cluster;
      var n = values.length;
      var assignments = new Array(n);
      var clusterSizes = new Array(num);
      var repeat = true;
      var nb_iters = 0;
      var centroids = null; // get seed values

      centroids = [];
      centroids.push(min);

      for (var i$3 = 1; i$3 < num; i$3++) {
        centroids.push(min + i$3 / num * (max - min));
      }

      centroids.push(max);

      while (repeat) {
        // assignment step
        for (var j = 0; j < num; j++) {
          clusterSizes[j] = 0;
        }

        for (var i$4 = 0; i$4 < n; i$4++) {
          var value = values[i$4];
          var mindist = Number.MAX_VALUE;
          var best = void 0;

          for (var j$1 = 0; j$1 < num; j$1++) {
            var dist = abs(centroids[j$1] - value);

            if (dist < mindist) {
              mindist = dist;
              best = j$1;
            }

            clusterSizes[best]++;
            assignments[i$4] = best;
          }
        } // update centroids step


        var newCentroids = new Array(num);

        for (var j$2 = 0; j$2 < num; j$2++) {
          newCentroids[j$2] = null;
        }

        for (var i$5 = 0; i$5 < n; i$5++) {
          cluster = assignments[i$5];

          if (newCentroids[cluster] === null) {
            newCentroids[cluster] = values[i$5];
          } else {
            newCentroids[cluster] += values[i$5];
          }
        }

        for (var j$3 = 0; j$3 < num; j$3++) {
          newCentroids[j$3] *= 1 / clusterSizes[j$3];
        } // check convergence


        repeat = false;

        for (var j$4 = 0; j$4 < num; j$4++) {
          if (newCentroids[j$4] !== centroids[j$4]) {
            repeat = true;
            break;
          }
        }

        centroids = newCentroids;
        nb_iters++;

        if (nb_iters > 200) {
          repeat = false;
        }
      } // finished k-means clustering
      // the next part is borrowed from gabrielflor.it


      var kClusters = {};

      for (var j$5 = 0; j$5 < num; j$5++) {
        kClusters[j$5] = [];
      }

      for (var i$6 = 0; i$6 < n; i$6++) {
        cluster = assignments[i$6];
        kClusters[cluster].push(values[i$6]);
      }

      var tmpKMeansBreaks = [];

      for (var j$6 = 0; j$6 < num; j$6++) {
        tmpKMeansBreaks.push(kClusters[j$6][0]);
        tmpKMeansBreaks.push(kClusters[j$6][kClusters[j$6].length - 1]);
      }

      tmpKMeansBreaks = tmpKMeansBreaks.sort(function (a, b) {
        return a - b;
      });
      limits.push(tmpKMeansBreaks[0]);

      for (var i$7 = 1; i$7 < tmpKMeansBreaks.length; i$7 += 2) {
        var v = tmpKMeansBreaks[i$7];

        if (!isNaN(v) && limits.indexOf(v) === -1) {
          limits.push(v);
        }
      }
    }

    return limits;
  };

  var analyze_1 = {
    analyze: analyze,
    limits: limits
  };

  var contrast = function (a, b) {
    // WCAG contrast ratio
    // see http://www.w3.org/TR/2008/REC-WCAG20-20081211/#contrast-ratiodef
    a = new Color_1(a);
    b = new Color_1(b);
    var l1 = a.luminance();
    var l2 = b.luminance();
    return l1 > l2 ? (l1 + 0.05) / (l2 + 0.05) : (l2 + 0.05) / (l1 + 0.05);
  };

  var sqrt$4 = Math.sqrt;
  var atan2$2 = Math.atan2;
  var abs$1 = Math.abs;
  var cos$4 = Math.cos;
  var PI$2 = Math.PI;

  var deltaE = function (a, b, L, C) {
    if (L === void 0) L = 1;
    if (C === void 0) C = 1; // Delta E (CMC)
    // see http://www.brucelindbloom.com/index.html?Eqn_DeltaE_CMC.html

    a = new Color_1(a);
    b = new Color_1(b);
    var ref = Array.from(a.lab());
    var L1 = ref[0];
    var a1 = ref[1];
    var b1 = ref[2];
    var ref$1 = Array.from(b.lab());
    var L2 = ref$1[0];
    var a2 = ref$1[1];
    var b2 = ref$1[2];
    var c1 = sqrt$4(a1 * a1 + b1 * b1);
    var c2 = sqrt$4(a2 * a2 + b2 * b2);
    var sl = L1 < 16.0 ? 0.511 : 0.040975 * L1 / (1.0 + 0.01765 * L1);
    var sc = 0.0638 * c1 / (1.0 + 0.0131 * c1) + 0.638;
    var h1 = c1 < 0.000001 ? 0.0 : atan2$2(b1, a1) * 180.0 / PI$2;

    while (h1 < 0) {
      h1 += 360;
    }

    while (h1 >= 360) {
      h1 -= 360;
    }

    var t = h1 >= 164.0 && h1 <= 345.0 ? 0.56 + abs$1(0.2 * cos$4(PI$2 * (h1 + 168.0) / 180.0)) : 0.36 + abs$1(0.4 * cos$4(PI$2 * (h1 + 35.0) / 180.0));
    var c4 = c1 * c1 * c1 * c1;
    var f = sqrt$4(c4 / (c4 + 1900.0));
    var sh = sc * (f * t + 1.0 - f);
    var delL = L1 - L2;
    var delC = c1 - c2;
    var delA = a1 - a2;
    var delB = b1 - b2;
    var dH2 = delA * delA + delB * delB - delC * delC;
    var v1 = delL / (L * sl);
    var v2 = delC / (C * sc);
    var v3 = sh;
    return sqrt$4(v1 * v1 + v2 * v2 + dH2 / (v3 * v3));
  }; // simple Euclidean distance


  var distance = function (a, b, mode) {
    if (mode === void 0) mode = 'lab'; // Delta E (CIE 1976)
    // see http://www.brucelindbloom.com/index.html?Equations.html

    a = new Color_1(a);
    b = new Color_1(b);
    var l1 = a.get(mode);
    var l2 = b.get(mode);
    var sum_sq = 0;

    for (var i in l1) {
      var d = (l1[i] || 0) - (l2[i] || 0);
      sum_sq += d * d;
    }

    return Math.sqrt(sum_sq);
  };

  var valid = function () {
    var args = [],
        len = arguments.length;

    while (len--) args[len] = arguments[len];

    try {
      new (Function.prototype.bind.apply(Color_1, [null].concat(args)))();
      return true;
    } catch (e) {
      return false;
    }
  }; // some pre-defined color scales:


  var scales = {
    cool: function cool() {
      return scale([chroma_1.hsl(180, 1, .9), chroma_1.hsl(250, .7, .4)]);
    },
    hot: function hot() {
      return scale(['#000', '#f00', '#ff0', '#fff'], [0, .25, .75, 1]).mode('rgb');
    }
  };
  /**
      ColorBrewer colors for chroma.js
       Copyright (c) 2002 Cynthia Brewer, Mark Harrower, and The
      Pennsylvania State University.
       Licensed under the Apache License, Version 2.0 (the "License");
      you may not use this file except in compliance with the License.
      You may obtain a copy of the License at
      http://www.apache.org/licenses/LICENSE-2.0
       Unless required by applicable law or agreed to in writing, software distributed
      under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR
      CONDITIONS OF ANY KIND, either express or implied. See the License for the
      specific language governing permissions and limitations under the License.
  */

  var colorbrewer = {
    // sequential
    OrRd: ['#fff7ec', '#fee8c8', '#fdd49e', '#fdbb84', '#fc8d59', '#ef6548', '#d7301f', '#b30000', '#7f0000'],
    PuBu: ['#fff7fb', '#ece7f2', '#d0d1e6', '#a6bddb', '#74a9cf', '#3690c0', '#0570b0', '#045a8d', '#023858'],
    BuPu: ['#f7fcfd', '#e0ecf4', '#bfd3e6', '#9ebcda', '#8c96c6', '#8c6bb1', '#88419d', '#810f7c', '#4d004b'],
    Oranges: ['#fff5eb', '#fee6ce', '#fdd0a2', '#fdae6b', '#fd8d3c', '#f16913', '#d94801', '#a63603', '#7f2704'],
    BuGn: ['#f7fcfd', '#e5f5f9', '#ccece6', '#99d8c9', '#66c2a4', '#41ae76', '#238b45', '#006d2c', '#00441b'],
    YlOrBr: ['#ffffe5', '#fff7bc', '#fee391', '#fec44f', '#fe9929', '#ec7014', '#cc4c02', '#993404', '#662506'],
    YlGn: ['#ffffe5', '#f7fcb9', '#d9f0a3', '#addd8e', '#78c679', '#41ab5d', '#238443', '#006837', '#004529'],
    Reds: ['#fff5f0', '#fee0d2', '#fcbba1', '#fc9272', '#fb6a4a', '#ef3b2c', '#cb181d', '#a50f15', '#67000d'],
    RdPu: ['#fff7f3', '#fde0dd', '#fcc5c0', '#fa9fb5', '#f768a1', '#dd3497', '#ae017e', '#7a0177', '#49006a'],
    Greens: ['#f7fcf5', '#e5f5e0', '#c7e9c0', '#a1d99b', '#74c476', '#41ab5d', '#238b45', '#006d2c', '#00441b'],
    YlGnBu: ['#ffffd9', '#edf8b1', '#c7e9b4', '#7fcdbb', '#41b6c4', '#1d91c0', '#225ea8', '#253494', '#081d58'],
    Purples: ['#fcfbfd', '#efedf5', '#dadaeb', '#bcbddc', '#9e9ac8', '#807dba', '#6a51a3', '#54278f', '#3f007d'],
    GnBu: ['#f7fcf0', '#e0f3db', '#ccebc5', '#a8ddb5', '#7bccc4', '#4eb3d3', '#2b8cbe', '#0868ac', '#084081'],
    Greys: ['#ffffff', '#f0f0f0', '#d9d9d9', '#bdbdbd', '#969696', '#737373', '#525252', '#252525', '#000000'],
    YlOrRd: ['#ffffcc', '#ffeda0', '#fed976', '#feb24c', '#fd8d3c', '#fc4e2a', '#e31a1c', '#bd0026', '#800026'],
    PuRd: ['#f7f4f9', '#e7e1ef', '#d4b9da', '#c994c7', '#df65b0', '#e7298a', '#ce1256', '#980043', '#67001f'],
    Blues: ['#f7fbff', '#deebf7', '#c6dbef', '#9ecae1', '#6baed6', '#4292c6', '#2171b5', '#08519c', '#08306b'],
    PuBuGn: ['#fff7fb', '#ece2f0', '#d0d1e6', '#a6bddb', '#67a9cf', '#3690c0', '#02818a', '#016c59', '#014636'],
    Viridis: ['#440154', '#482777', '#3f4a8a', '#31678e', '#26838f', '#1f9d8a', '#6cce5a', '#b6de2b', '#fee825'],
    // diverging
    Spectral: ['#9e0142', '#d53e4f', '#f46d43', '#fdae61', '#fee08b', '#ffffbf', '#e6f598', '#abdda4', '#66c2a5', '#3288bd', '#5e4fa2'],
    RdYlGn: ['#a50026', '#d73027', '#f46d43', '#fdae61', '#fee08b', '#ffffbf', '#d9ef8b', '#a6d96a', '#66bd63', '#1a9850', '#006837'],
    RdBu: ['#67001f', '#b2182b', '#d6604d', '#f4a582', '#fddbc7', '#f7f7f7', '#d1e5f0', '#92c5de', '#4393c3', '#2166ac', '#053061'],
    PiYG: ['#8e0152', '#c51b7d', '#de77ae', '#f1b6da', '#fde0ef', '#f7f7f7', '#e6f5d0', '#b8e186', '#7fbc41', '#4d9221', '#276419'],
    PRGn: ['#40004b', '#762a83', '#9970ab', '#c2a5cf', '#e7d4e8', '#f7f7f7', '#d9f0d3', '#a6dba0', '#5aae61', '#1b7837', '#00441b'],
    RdYlBu: ['#a50026', '#d73027', '#f46d43', '#fdae61', '#fee090', '#ffffbf', '#e0f3f8', '#abd9e9', '#74add1', '#4575b4', '#313695'],
    BrBG: ['#543005', '#8c510a', '#bf812d', '#dfc27d', '#f6e8c3', '#f5f5f5', '#c7eae5', '#80cdc1', '#35978f', '#01665e', '#003c30'],
    RdGy: ['#67001f', '#b2182b', '#d6604d', '#f4a582', '#fddbc7', '#ffffff', '#e0e0e0', '#bababa', '#878787', '#4d4d4d', '#1a1a1a'],
    PuOr: ['#7f3b08', '#b35806', '#e08214', '#fdb863', '#fee0b6', '#f7f7f7', '#d8daeb', '#b2abd2', '#8073ac', '#542788', '#2d004b'],
    // qualitative
    Set2: ['#66c2a5', '#fc8d62', '#8da0cb', '#e78ac3', '#a6d854', '#ffd92f', '#e5c494', '#b3b3b3'],
    Accent: ['#7fc97f', '#beaed4', '#fdc086', '#ffff99', '#386cb0', '#f0027f', '#bf5b17', '#666666'],
    Set1: ['#e41a1c', '#377eb8', '#4daf4a', '#984ea3', '#ff7f00', '#ffff33', '#a65628', '#f781bf', '#999999'],
    Set3: ['#8dd3c7', '#ffffb3', '#bebada', '#fb8072', '#80b1d3', '#fdb462', '#b3de69', '#fccde5', '#d9d9d9', '#bc80bd', '#ccebc5', '#ffed6f'],
    Dark2: ['#1b9e77', '#d95f02', '#7570b3', '#e7298a', '#66a61e', '#e6ab02', '#a6761d', '#666666'],
    Paired: ['#a6cee3', '#1f78b4', '#b2df8a', '#33a02c', '#fb9a99', '#e31a1c', '#fdbf6f', '#ff7f00', '#cab2d6', '#6a3d9a', '#ffff99', '#b15928'],
    Pastel2: ['#b3e2cd', '#fdcdac', '#cbd5e8', '#f4cae4', '#e6f5c9', '#fff2ae', '#f1e2cc', '#cccccc'],
    Pastel1: ['#fbb4ae', '#b3cde3', '#ccebc5', '#decbe4', '#fed9a6', '#ffffcc', '#e5d8bd', '#fddaec', '#f2f2f2']
  }; // add lowercase aliases for case-insensitive matches

  for (var i$1 = 0, list$1 = Object.keys(colorbrewer); i$1 < list$1.length; i$1 += 1) {
    var key = list$1[i$1];
    colorbrewer[key.toLowerCase()] = colorbrewer[key];
  }

  var colorbrewer_1 = colorbrewer; // feel free to comment out anything to rollup
  // a smaller chroma.js built
  // io --> convert colors
  // operators --> modify existing Colors
  // interpolators
  // generators -- > create new colors

  chroma_1.average = average;
  chroma_1.bezier = bezier_1;
  chroma_1.blend = blend_1;
  chroma_1.cubehelix = cubehelix;
  chroma_1.mix = chroma_1.interpolate = mix;
  chroma_1.random = random_1;
  chroma_1.scale = scale; // other utility methods

  chroma_1.analyze = analyze_1.analyze;
  chroma_1.contrast = contrast;
  chroma_1.deltaE = deltaE;
  chroma_1.distance = distance;
  chroma_1.limits = analyze_1.limits;
  chroma_1.valid = valid; // scale

  chroma_1.scales = scales; // colors

  chroma_1.colors = w3cx11_1;
  chroma_1.brewer = colorbrewer_1;
  var chroma_js = chroma_1;
  return chroma_js;
});
});

function isDark(color) {
  var lum = chroma(color).luminance();
  return lum < .5;
}

var statusBarCore = {
  isDark: isDark
};

var hookCallback;

function hooks() {
  return hookCallback.apply(null, arguments);
} // This is done to register the method called with moment()
// without creating circular dependencies.


function setHookCallback(callback) {
  hookCallback = callback;
}

function isArray(input) {
  return input instanceof Array || Object.prototype.toString.call(input) === '[object Array]';
}

function isObject(input) {
  // IE8 will treat undefined and null as object if it wasn't for
  // input != null
  return input != null && Object.prototype.toString.call(input) === '[object Object]';
}

function isObjectEmpty(obj) {
  if (Object.getOwnPropertyNames) {
    return Object.getOwnPropertyNames(obj).length === 0;
  } else {
    var k;

    for (k in obj) {
      if (obj.hasOwnProperty(k)) {
        return false;
      }
    }

    return true;
  }
}

function isUndefined(input) {
  return input === void 0;
}

function isNumber(input) {
  return typeof input === 'number' || Object.prototype.toString.call(input) === '[object Number]';
}

function isDate(input) {
  return input instanceof Date || Object.prototype.toString.call(input) === '[object Date]';
}

function map(arr, fn) {
  var res = [],
      i;

  for (i = 0; i < arr.length; ++i) {
    res.push(fn(arr[i], i));
  }

  return res;
}

function hasOwnProp(a, b) {
  return Object.prototype.hasOwnProperty.call(a, b);
}

function extend(a, b) {
  for (var i in b) {
    if (hasOwnProp(b, i)) {
      a[i] = b[i];
    }
  }

  if (hasOwnProp(b, 'toString')) {
    a.toString = b.toString;
  }

  if (hasOwnProp(b, 'valueOf')) {
    a.valueOf = b.valueOf;
  }

  return a;
}

function createUTC(input, format, locale, strict) {
  return createLocalOrUTC(input, format, locale, strict, true).utc();
}

function defaultParsingFlags() {
  // We need to deep clone this object.
  return {
    empty: false,
    unusedTokens: [],
    unusedInput: [],
    overflow: -2,
    charsLeftOver: 0,
    nullInput: false,
    invalidMonth: null,
    invalidFormat: false,
    userInvalidated: false,
    iso: false,
    parsedDateParts: [],
    meridiem: null,
    rfc2822: false,
    weekdayMismatch: false
  };
}

function getParsingFlags(m) {
  if (m._pf == null) {
    m._pf = defaultParsingFlags();
  }

  return m._pf;
}

var some;

if (Array.prototype.some) {
  some = Array.prototype.some;
} else {
  some = function (fun) {
    var t = Object(this);
    var len = t.length >>> 0;

    for (var i = 0; i < len; i++) {
      if (i in t && fun.call(this, t[i], i, t)) {
        return true;
      }
    }

    return false;
  };
}

function isValid(m) {
  if (m._isValid == null) {
    var flags = getParsingFlags(m);
    var parsedParts = some.call(flags.parsedDateParts, function (i) {
      return i != null;
    });
    var isNowValid = !isNaN(m._d.getTime()) && flags.overflow < 0 && !flags.empty && !flags.invalidMonth && !flags.invalidWeekday && !flags.weekdayMismatch && !flags.nullInput && !flags.invalidFormat && !flags.userInvalidated && (!flags.meridiem || flags.meridiem && parsedParts);

    if (m._strict) {
      isNowValid = isNowValid && flags.charsLeftOver === 0 && flags.unusedTokens.length === 0 && flags.bigHour === undefined;
    }

    if (Object.isFrozen == null || !Object.isFrozen(m)) {
      m._isValid = isNowValid;
    } else {
      return isNowValid;
    }
  }

  return m._isValid;
}
function createInvalid(flags) {
  var m = createUTC(NaN);

  if (flags != null) {
    extend(getParsingFlags(m), flags);
  } else {
    getParsingFlags(m).userInvalidated = true;
  }

  return m;
}

// so we can properly clone ourselves.

var momentProperties = hooks.momentProperties = [];
function copyConfig(to, from) {
  var i, prop, val;

  if (!isUndefined(from._isAMomentObject)) {
    to._isAMomentObject = from._isAMomentObject;
  }

  if (!isUndefined(from._i)) {
    to._i = from._i;
  }

  if (!isUndefined(from._f)) {
    to._f = from._f;
  }

  if (!isUndefined(from._l)) {
    to._l = from._l;
  }

  if (!isUndefined(from._strict)) {
    to._strict = from._strict;
  }

  if (!isUndefined(from._tzm)) {
    to._tzm = from._tzm;
  }

  if (!isUndefined(from._isUTC)) {
    to._isUTC = from._isUTC;
  }

  if (!isUndefined(from._offset)) {
    to._offset = from._offset;
  }

  if (!isUndefined(from._pf)) {
    to._pf = getParsingFlags(from);
  }

  if (!isUndefined(from._locale)) {
    to._locale = from._locale;
  }

  if (momentProperties.length > 0) {
    for (i = 0; i < momentProperties.length; i++) {
      prop = momentProperties[i];
      val = from[prop];

      if (!isUndefined(val)) {
        to[prop] = val;
      }
    }
  }

  return to;
}
var updateInProgress = false; // Moment prototype object

function Moment(config) {
  copyConfig(this, config);
  this._d = new Date(config._d != null ? config._d.getTime() : NaN);

  if (!this.isValid()) {
    this._d = new Date(NaN);
  } // Prevent infinite loop in case updateOffset creates new moment
  // objects.


  if (updateInProgress === false) {
    updateInProgress = true;
    hooks.updateOffset(this);
    updateInProgress = false;
  }
}
function isMoment(obj) {
  return obj instanceof Moment || obj != null && obj._isAMomentObject != null;
}

function absFloor(number) {
  if (number < 0) {
    // -0 -> 0
    return Math.ceil(number) || 0;
  } else {
    return Math.floor(number);
  }
}

function toInt(argumentForCoercion) {
  var coercedNumber = +argumentForCoercion,
      value = 0;

  if (coercedNumber !== 0 && isFinite(coercedNumber)) {
    value = absFloor(coercedNumber);
  }

  return value;
}

function compareArrays(array1, array2, dontConvert) {
  var len = Math.min(array1.length, array2.length),
      lengthDiff = Math.abs(array1.length - array2.length),
      diffs = 0,
      i;

  for (i = 0; i < len; i++) {
    if (dontConvert && array1[i] !== array2[i] || !dontConvert && toInt(array1[i]) !== toInt(array2[i])) {
      diffs++;
    }
  }

  return diffs + lengthDiff;
}

function warn(msg) {
  if (hooks.suppressDeprecationWarnings === false && typeof console !== 'undefined' && console.warn) {
    console.warn('Deprecation warning: ' + msg);
  }
}

function deprecate(msg, fn) {
  var firstTime = true;
  return extend(function () {
    if (hooks.deprecationHandler != null) {
      hooks.deprecationHandler(null, msg);
    }

    if (firstTime) {
      var args = [];
      var arg;

      for (var i = 0; i < arguments.length; i++) {
        arg = '';

        if (typeof arguments[i] === 'object') {
          arg += '\n[' + i + '] ';

          for (var key in arguments[0]) {
            arg += key + ': ' + arguments[0][key] + ', ';
          }

          arg = arg.slice(0, -2); // Remove trailing comma and space
        } else {
          arg = arguments[i];
        }

        args.push(arg);
      }

      warn(msg + '\nArguments: ' + Array.prototype.slice.call(args).join('') + '\n' + new Error().stack);
      firstTime = false;
    }

    return fn.apply(this, arguments);
  }, fn);
}
var deprecations = {};
function deprecateSimple(name, msg) {
  if (hooks.deprecationHandler != null) {
    hooks.deprecationHandler(name, msg);
  }

  if (!deprecations[name]) {
    warn(msg);
    deprecations[name] = true;
  }
}
hooks.suppressDeprecationWarnings = false;
hooks.deprecationHandler = null;

function isFunction(input) {
  return input instanceof Function || Object.prototype.toString.call(input) === '[object Function]';
}

function set(config) {
  var prop, i;

  for (i in config) {
    prop = config[i];

    if (isFunction(prop)) {
      this[i] = prop;
    } else {
      this['_' + i] = prop;
    }
  }

  this._config = config; // Lenient ordinal parsing accepts just a number in addition to
  // number + (possibly) stuff coming from _dayOfMonthOrdinalParse.
  // TODO: Remove "ordinalParse" fallback in next major release.

  this._dayOfMonthOrdinalParseLenient = new RegExp((this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + '|' + /\d{1,2}/.source);
}
function mergeConfigs(parentConfig, childConfig) {
  var res = extend({}, parentConfig),
      prop;

  for (prop in childConfig) {
    if (hasOwnProp(childConfig, prop)) {
      if (isObject(parentConfig[prop]) && isObject(childConfig[prop])) {
        res[prop] = {};
        extend(res[prop], parentConfig[prop]);
        extend(res[prop], childConfig[prop]);
      } else if (childConfig[prop] != null) {
        res[prop] = childConfig[prop];
      } else {
        delete res[prop];
      }
    }
  }

  for (prop in parentConfig) {
    if (hasOwnProp(parentConfig, prop) && !hasOwnProp(childConfig, prop) && isObject(parentConfig[prop])) {
      // make sure changes to properties don't modify parent config
      res[prop] = extend({}, res[prop]);
    }
  }

  return res;
}

function Locale(config) {
  if (config != null) {
    this.set(config);
  }
}

var keys;

if (Object.keys) {
  keys = Object.keys;
} else {
  keys = function (obj) {
    var i,
        res = [];

    for (i in obj) {
      if (hasOwnProp(obj, i)) {
        res.push(i);
      }
    }

    return res;
  };
}

var defaultCalendar = {
  sameDay: '[Today at] LT',
  nextDay: '[Tomorrow at] LT',
  nextWeek: 'dddd [at] LT',
  lastDay: '[Yesterday at] LT',
  lastWeek: '[Last] dddd [at] LT',
  sameElse: 'L'
};
function calendar(key, mom, now) {
  var output = this._calendar[key] || this._calendar['sameElse'];
  return isFunction(output) ? output.call(mom, now) : output;
}

var defaultLongDateFormat = {
  LTS: 'h:mm:ss A',
  LT: 'h:mm A',
  L: 'MM/DD/YYYY',
  LL: 'MMMM D, YYYY',
  LLL: 'MMMM D, YYYY h:mm A',
  LLLL: 'dddd, MMMM D, YYYY h:mm A'
};
function longDateFormat(key) {
  var format = this._longDateFormat[key],
      formatUpper = this._longDateFormat[key.toUpperCase()];

  if (format || !formatUpper) {
    return format;
  }

  this._longDateFormat[key] = formatUpper.replace(/MMMM|MM|DD|dddd/g, function (val) {
    return val.slice(1);
  });
  return this._longDateFormat[key];
}

var defaultInvalidDate = 'Invalid date';
function invalidDate() {
  return this._invalidDate;
}

var defaultOrdinal = '%d';
var defaultDayOfMonthOrdinalParse = /\d{1,2}/;
function ordinal(number) {
  return this._ordinal.replace('%d', number);
}

var defaultRelativeTime = {
  future: 'in %s',
  past: '%s ago',
  s: 'a few seconds',
  ss: '%d seconds',
  m: 'a minute',
  mm: '%d minutes',
  h: 'an hour',
  hh: '%d hours',
  d: 'a day',
  dd: '%d days',
  M: 'a month',
  MM: '%d months',
  y: 'a year',
  yy: '%d years'
};
function relativeTime(number, withoutSuffix, string, isFuture) {
  var output = this._relativeTime[string];
  return isFunction(output) ? output(number, withoutSuffix, string, isFuture) : output.replace(/%d/i, number);
}
function pastFuture(diff, output) {
  var format = this._relativeTime[diff > 0 ? 'future' : 'past'];
  return isFunction(format) ? format(output) : format.replace(/%s/i, output);
}

var aliases = {};
function addUnitAlias(unit, shorthand) {
  var lowerCase = unit.toLowerCase();
  aliases[lowerCase] = aliases[lowerCase + 's'] = aliases[shorthand] = unit;
}
function normalizeUnits(units) {
  return typeof units === 'string' ? aliases[units] || aliases[units.toLowerCase()] : undefined;
}
function normalizeObjectUnits(inputObject) {
  var normalizedInput = {},
      normalizedProp,
      prop;

  for (prop in inputObject) {
    if (hasOwnProp(inputObject, prop)) {
      normalizedProp = normalizeUnits(prop);

      if (normalizedProp) {
        normalizedInput[normalizedProp] = inputObject[prop];
      }
    }
  }

  return normalizedInput;
}

var priorities = {};
function addUnitPriority(unit, priority) {
  priorities[unit] = priority;
}
function getPrioritizedUnits(unitsObj) {
  var units = [];

  for (var u in unitsObj) {
    units.push({
      unit: u,
      priority: priorities[u]
    });
  }

  units.sort(function (a, b) {
    return a.priority - b.priority;
  });
  return units;
}

function zeroFill(number, targetLength, forceSign) {
  var absNumber = '' + Math.abs(number),
      zerosToFill = targetLength - absNumber.length,
      sign = number >= 0;
  return (sign ? forceSign ? '+' : '' : '-') + Math.pow(10, Math.max(0, zerosToFill)).toString().substr(1) + absNumber;
}

var formattingTokens = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g;
var localFormattingTokens = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g;
var formatFunctions = {};
var formatTokenFunctions = {}; // token:    'M'
// padded:   ['MM', 2]
// ordinal:  'Mo'
// callback: function () { this.month() + 1 }

function addFormatToken(token, padded, ordinal, callback) {
  var func = callback;

  if (typeof callback === 'string') {
    func = function () {
      return this[callback]();
    };
  }

  if (token) {
    formatTokenFunctions[token] = func;
  }

  if (padded) {
    formatTokenFunctions[padded[0]] = function () {
      return zeroFill(func.apply(this, arguments), padded[1], padded[2]);
    };
  }

  if (ordinal) {
    formatTokenFunctions[ordinal] = function () {
      return this.localeData().ordinal(func.apply(this, arguments), token);
    };
  }
}

function removeFormattingTokens(input) {
  if (input.match(/\[[\s\S]/)) {
    return input.replace(/^\[|\]$/g, '');
  }

  return input.replace(/\\/g, '');
}

function makeFormatFunction(format) {
  var array = format.match(formattingTokens),
      i,
      length;

  for (i = 0, length = array.length; i < length; i++) {
    if (formatTokenFunctions[array[i]]) {
      array[i] = formatTokenFunctions[array[i]];
    } else {
      array[i] = removeFormattingTokens(array[i]);
    }
  }

  return function (mom) {
    var output = '',
        i;

    for (i = 0; i < length; i++) {
      output += isFunction(array[i]) ? array[i].call(mom, format) : array[i];
    }

    return output;
  };
} // format date using native date object


function formatMoment(m, format) {
  if (!m.isValid()) {
    return m.localeData().invalidDate();
  }

  format = expandFormat(format, m.localeData());
  formatFunctions[format] = formatFunctions[format] || makeFormatFunction(format);
  return formatFunctions[format](m);
}
function expandFormat(format, locale) {
  var i = 5;

  function replaceLongDateFormatTokens(input) {
    return locale.longDateFormat(input) || input;
  }

  localFormattingTokens.lastIndex = 0;

  while (i >= 0 && localFormattingTokens.test(format)) {
    format = format.replace(localFormattingTokens, replaceLongDateFormatTokens);
    localFormattingTokens.lastIndex = 0;
    i -= 1;
  }

  return format;
}

var match1 = /\d/; //       0 - 9

var match2 = /\d\d/; //      00 - 99

var match3 = /\d{3}/; //     000 - 999

var match4 = /\d{4}/; //    0000 - 9999

var match6 = /[+-]?\d{6}/; // -999999 - 999999

var match1to2 = /\d\d?/; //       0 - 99

var match3to4 = /\d\d\d\d?/; //     999 - 9999

var match5to6 = /\d\d\d\d\d\d?/; //   99999 - 999999

var match1to3 = /\d{1,3}/; //       0 - 999

var match1to4 = /\d{1,4}/; //       0 - 9999

var match1to6 = /[+-]?\d{1,6}/; // -999999 - 999999

var matchUnsigned = /\d+/; //       0 - inf

var matchSigned = /[+-]?\d+/; //    -inf - inf

var matchOffset = /Z|[+-]\d\d:?\d\d/gi; // +00:00 -00:00 +0000 -0000 or Z

var matchShortOffset = /Z|[+-]\d\d(?::?\d\d)?/gi; // +00 -00 +00:00 -00:00 +0000 -0000 or Z

var matchTimestamp = /[+-]?\d+(\.\d{1,3})?/; // 123456789 123456789.123
// any word (or two) characters or numbers including two/three word month in arabic.
// includes scottish gaelic two word and hyphenated months

var matchWord = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i;
var regexes = {};
function addRegexToken(token, regex, strictRegex) {
  regexes[token] = isFunction(regex) ? regex : function (isStrict, localeData) {
    return isStrict && strictRegex ? strictRegex : regex;
  };
}
function getParseRegexForToken(token, config) {
  if (!hasOwnProp(regexes, token)) {
    return new RegExp(unescapeFormat(token));
  }

  return regexes[token](config._strict, config._locale);
} // Code from http://stackoverflow.com/questions/3561493/is-there-a-regexp-escape-function-in-javascript

function unescapeFormat(s) {
  return regexEscape(s.replace('\\', '').replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function (matched, p1, p2, p3, p4) {
    return p1 || p2 || p3 || p4;
  }));
}

function regexEscape(s) {
  return s.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
}

var tokens = {};
function addParseToken(token, callback) {
  var i,
      func = callback;

  if (typeof token === 'string') {
    token = [token];
  }

  if (isNumber(callback)) {
    func = function (input, array) {
      array[callback] = toInt(input);
    };
  }

  for (i = 0; i < token.length; i++) {
    tokens[token[i]] = func;
  }
}
function addWeekParseToken(token, callback) {
  addParseToken(token, function (input, array, config, token) {
    config._w = config._w || {};
    callback(input, config._w, config, token);
  });
}
function addTimeToArrayFromToken(token, input, config) {
  if (input != null && hasOwnProp(tokens, token)) {
    tokens[token](input, config._a, config, token);
  }
}

var YEAR = 0;
var MONTH = 1;
var DATE = 2;
var HOUR = 3;
var MINUTE = 4;
var SECOND = 5;
var MILLISECOND = 6;
var WEEK = 7;
var WEEKDAY = 8;

addFormatToken('Y', 0, 0, function () {
  var y = this.year();
  return y <= 9999 ? '' + y : '+' + y;
});
addFormatToken(0, ['YY', 2], 0, function () {
  return this.year() % 100;
});
addFormatToken(0, ['YYYY', 4], 0, 'year');
addFormatToken(0, ['YYYYY', 5], 0, 'year');
addFormatToken(0, ['YYYYYY', 6, true], 0, 'year'); // ALIASES

addUnitAlias('year', 'y'); // PRIORITIES

addUnitPriority('year', 1); // PARSING

addRegexToken('Y', matchSigned);
addRegexToken('YY', match1to2, match2);
addRegexToken('YYYY', match1to4, match4);
addRegexToken('YYYYY', match1to6, match6);
addRegexToken('YYYYYY', match1to6, match6);
addParseToken(['YYYYY', 'YYYYYY'], YEAR);
addParseToken('YYYY', function (input, array) {
  array[YEAR] = input.length === 2 ? hooks.parseTwoDigitYear(input) : toInt(input);
});
addParseToken('YY', function (input, array) {
  array[YEAR] = hooks.parseTwoDigitYear(input);
});
addParseToken('Y', function (input, array) {
  array[YEAR] = parseInt(input, 10);
}); // HELPERS

function daysInYear(year) {
  return isLeapYear(year) ? 366 : 365;
}
function isLeapYear(year) {
  return year % 4 === 0 && year % 100 !== 0 || year % 400 === 0;
} // HOOKS

hooks.parseTwoDigitYear = function (input) {
  return toInt(input) + (toInt(input) > 68 ? 1900 : 2000);
}; // MOMENTS


var getSetYear = makeGetSet('FullYear', true);
function getIsLeapYear() {
  return isLeapYear(this.year());
}

function makeGetSet(unit, keepTime) {
  return function (value) {
    if (value != null) {
      set$1(this, unit, value);
      hooks.updateOffset(this, keepTime);
      return this;
    } else {
      return get(this, unit);
    }
  };
}
function get(mom, unit) {
  return mom.isValid() ? mom._d['get' + (mom._isUTC ? 'UTC' : '') + unit]() : NaN;
}
function set$1(mom, unit, value) {
  if (mom.isValid() && !isNaN(value)) {
    if (unit === 'FullYear' && isLeapYear(mom.year()) && mom.month() === 1 && mom.date() === 29) {
      mom._d['set' + (mom._isUTC ? 'UTC' : '') + unit](value, mom.month(), daysInMonth(value, mom.month()));
    } else {
      mom._d['set' + (mom._isUTC ? 'UTC' : '') + unit](value);
    }
  }
} // MOMENTS

function stringGet(units) {
  units = normalizeUnits(units);

  if (isFunction(this[units])) {
    return this[units]();
  }

  return this;
}
function stringSet(units, value) {
  if (typeof units === 'object') {
    units = normalizeObjectUnits(units);
    var prioritized = getPrioritizedUnits(units);

    for (var i = 0; i < prioritized.length; i++) {
      this[prioritized[i].unit](units[prioritized[i].unit]);
    }
  } else {
    units = normalizeUnits(units);

    if (isFunction(this[units])) {
      return this[units](value);
    }
  }

  return this;
}

function mod(n, x) {
  return (n % x + x) % x;
}

var indexOf;

if (Array.prototype.indexOf) {
  indexOf = Array.prototype.indexOf;
} else {
  indexOf = function (o) {
    // I know
    var i;

    for (i = 0; i < this.length; ++i) {
      if (this[i] === o) {
        return i;
      }
    }

    return -1;
  };
}

function daysInMonth(year, month) {
  if (isNaN(year) || isNaN(month)) {
    return NaN;
  }

  var modMonth = mod(month, 12);
  year += (month - modMonth) / 12;
  return modMonth === 1 ? isLeapYear(year) ? 29 : 28 : 31 - modMonth % 7 % 2;
} // FORMATTING

addFormatToken('M', ['MM', 2], 'Mo', function () {
  return this.month() + 1;
});
addFormatToken('MMM', 0, 0, function (format) {
  return this.localeData().monthsShort(this, format);
});
addFormatToken('MMMM', 0, 0, function (format) {
  return this.localeData().months(this, format);
}); // ALIASES

addUnitAlias('month', 'M'); // PRIORITY

addUnitPriority('month', 8); // PARSING

addRegexToken('M', match1to2);
addRegexToken('MM', match1to2, match2);
addRegexToken('MMM', function (isStrict, locale) {
  return locale.monthsShortRegex(isStrict);
});
addRegexToken('MMMM', function (isStrict, locale) {
  return locale.monthsRegex(isStrict);
});
addParseToken(['M', 'MM'], function (input, array) {
  array[MONTH] = toInt(input) - 1;
});
addParseToken(['MMM', 'MMMM'], function (input, array, config, token) {
  var month = config._locale.monthsParse(input, token, config._strict); // if we didn't find a month name, mark the date as invalid.


  if (month != null) {
    array[MONTH] = month;
  } else {
    getParsingFlags(config).invalidMonth = input;
  }
}); // LOCALES

var MONTHS_IN_FORMAT = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/;
var defaultLocaleMonths = 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_');
function localeMonths(m, format) {
  if (!m) {
    return isArray(this._months) ? this._months : this._months['standalone'];
  }

  return isArray(this._months) ? this._months[m.month()] : this._months[(this._months.isFormat || MONTHS_IN_FORMAT).test(format) ? 'format' : 'standalone'][m.month()];
}
var defaultLocaleMonthsShort = 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_');
function localeMonthsShort(m, format) {
  if (!m) {
    return isArray(this._monthsShort) ? this._monthsShort : this._monthsShort['standalone'];
  }

  return isArray(this._monthsShort) ? this._monthsShort[m.month()] : this._monthsShort[MONTHS_IN_FORMAT.test(format) ? 'format' : 'standalone'][m.month()];
}

function handleStrictParse(monthName, format, strict) {
  var i,
      ii,
      mom,
      llc = monthName.toLocaleLowerCase();

  if (!this._monthsParse) {
    // this is not used
    this._monthsParse = [];
    this._longMonthsParse = [];
    this._shortMonthsParse = [];

    for (i = 0; i < 12; ++i) {
      mom = createUTC([2000, i]);
      this._shortMonthsParse[i] = this.monthsShort(mom, '').toLocaleLowerCase();
      this._longMonthsParse[i] = this.months(mom, '').toLocaleLowerCase();
    }
  }

  if (strict) {
    if (format === 'MMM') {
      ii = indexOf.call(this._shortMonthsParse, llc);
      return ii !== -1 ? ii : null;
    } else {
      ii = indexOf.call(this._longMonthsParse, llc);
      return ii !== -1 ? ii : null;
    }
  } else {
    if (format === 'MMM') {
      ii = indexOf.call(this._shortMonthsParse, llc);

      if (ii !== -1) {
        return ii;
      }

      ii = indexOf.call(this._longMonthsParse, llc);
      return ii !== -1 ? ii : null;
    } else {
      ii = indexOf.call(this._longMonthsParse, llc);

      if (ii !== -1) {
        return ii;
      }

      ii = indexOf.call(this._shortMonthsParse, llc);
      return ii !== -1 ? ii : null;
    }
  }
}

function localeMonthsParse(monthName, format, strict) {
  var i, mom, regex;

  if (this._monthsParseExact) {
    return handleStrictParse.call(this, monthName, format, strict);
  }

  if (!this._monthsParse) {
    this._monthsParse = [];
    this._longMonthsParse = [];
    this._shortMonthsParse = [];
  } // TODO: add sorting
  // Sorting makes sure if one month (or abbr) is a prefix of another
  // see sorting in computeMonthsParse


  for (i = 0; i < 12; i++) {
    // make the regex if we don't have it already
    mom = createUTC([2000, i]);

    if (strict && !this._longMonthsParse[i]) {
      this._longMonthsParse[i] = new RegExp('^' + this.months(mom, '').replace('.', '') + '$', 'i');
      this._shortMonthsParse[i] = new RegExp('^' + this.monthsShort(mom, '').replace('.', '') + '$', 'i');
    }

    if (!strict && !this._monthsParse[i]) {
      regex = '^' + this.months(mom, '') + '|^' + this.monthsShort(mom, '');
      this._monthsParse[i] = new RegExp(regex.replace('.', ''), 'i');
    } // test the regex


    if (strict && format === 'MMMM' && this._longMonthsParse[i].test(monthName)) {
      return i;
    } else if (strict && format === 'MMM' && this._shortMonthsParse[i].test(monthName)) {
      return i;
    } else if (!strict && this._monthsParse[i].test(monthName)) {
      return i;
    }
  }
} // MOMENTS

function setMonth(mom, value) {
  var dayOfMonth;

  if (!mom.isValid()) {
    // No op
    return mom;
  }

  if (typeof value === 'string') {
    if (/^\d+$/.test(value)) {
      value = toInt(value);
    } else {
      value = mom.localeData().monthsParse(value); // TODO: Another silent failure?

      if (!isNumber(value)) {
        return mom;
      }
    }
  }

  dayOfMonth = Math.min(mom.date(), daysInMonth(mom.year(), value));

  mom._d['set' + (mom._isUTC ? 'UTC' : '') + 'Month'](value, dayOfMonth);

  return mom;
}
function getSetMonth(value) {
  if (value != null) {
    setMonth(this, value);
    hooks.updateOffset(this, true);
    return this;
  } else {
    return get(this, 'Month');
  }
}
function getDaysInMonth() {
  return daysInMonth(this.year(), this.month());
}
var defaultMonthsShortRegex = matchWord;
function monthsShortRegex(isStrict) {
  if (this._monthsParseExact) {
    if (!hasOwnProp(this, '_monthsRegex')) {
      computeMonthsParse.call(this);
    }

    if (isStrict) {
      return this._monthsShortStrictRegex;
    } else {
      return this._monthsShortRegex;
    }
  } else {
    if (!hasOwnProp(this, '_monthsShortRegex')) {
      this._monthsShortRegex = defaultMonthsShortRegex;
    }

    return this._monthsShortStrictRegex && isStrict ? this._monthsShortStrictRegex : this._monthsShortRegex;
  }
}
var defaultMonthsRegex = matchWord;
function monthsRegex(isStrict) {
  if (this._monthsParseExact) {
    if (!hasOwnProp(this, '_monthsRegex')) {
      computeMonthsParse.call(this);
    }

    if (isStrict) {
      return this._monthsStrictRegex;
    } else {
      return this._monthsRegex;
    }
  } else {
    if (!hasOwnProp(this, '_monthsRegex')) {
      this._monthsRegex = defaultMonthsRegex;
    }

    return this._monthsStrictRegex && isStrict ? this._monthsStrictRegex : this._monthsRegex;
  }
}

function computeMonthsParse() {
  function cmpLenRev(a, b) {
    return b.length - a.length;
  }

  var shortPieces = [],
      longPieces = [],
      mixedPieces = [],
      i,
      mom;

  for (i = 0; i < 12; i++) {
    // make the regex if we don't have it already
    mom = createUTC([2000, i]);
    shortPieces.push(this.monthsShort(mom, ''));
    longPieces.push(this.months(mom, ''));
    mixedPieces.push(this.months(mom, ''));
    mixedPieces.push(this.monthsShort(mom, ''));
  } // Sorting makes sure if one month (or abbr) is a prefix of another it
  // will match the longer piece.


  shortPieces.sort(cmpLenRev);
  longPieces.sort(cmpLenRev);
  mixedPieces.sort(cmpLenRev);

  for (i = 0; i < 12; i++) {
    shortPieces[i] = regexEscape(shortPieces[i]);
    longPieces[i] = regexEscape(longPieces[i]);
  }

  for (i = 0; i < 24; i++) {
    mixedPieces[i] = regexEscape(mixedPieces[i]);
  }

  this._monthsRegex = new RegExp('^(' + mixedPieces.join('|') + ')', 'i');
  this._monthsShortRegex = this._monthsRegex;
  this._monthsStrictRegex = new RegExp('^(' + longPieces.join('|') + ')', 'i');
  this._monthsShortStrictRegex = new RegExp('^(' + shortPieces.join('|') + ')', 'i');
}

function createDate(y, m, d, h, M, s, ms) {
  // can't just apply() to create a date:
  // https://stackoverflow.com/q/181348
  var date; // the date constructor remaps years 0-99 to 1900-1999

  if (y < 100 && y >= 0) {
    // preserve leap years using a full 400 year cycle, then reset
    date = new Date(y + 400, m, d, h, M, s, ms);

    if (isFinite(date.getFullYear())) {
      date.setFullYear(y);
    }
  } else {
    date = new Date(y, m, d, h, M, s, ms);
  }

  return date;
}
function createUTCDate(y) {
  var date; // the Date.UTC function remaps years 0-99 to 1900-1999

  if (y < 100 && y >= 0) {
    var args = Array.prototype.slice.call(arguments); // preserve leap years using a full 400 year cycle, then reset

    args[0] = y + 400;
    date = new Date(Date.UTC.apply(null, args));

    if (isFinite(date.getUTCFullYear())) {
      date.setUTCFullYear(y);
    }
  } else {
    date = new Date(Date.UTC.apply(null, arguments));
  }

  return date;
}

function firstWeekOffset(year, dow, doy) {
  var // first-week day -- which january is always in the first week (4 for iso, 1 for other)
  fwd = 7 + dow - doy,
      // first-week day local weekday -- which local weekday is fwd
  fwdlw = (7 + createUTCDate(year, 0, fwd).getUTCDay() - dow) % 7;
  return -fwdlw + fwd - 1;
} // https://en.wikipedia.org/wiki/ISO_week_date#Calculating_a_date_given_the_year.2C_week_number_and_weekday


function dayOfYearFromWeeks(year, week, weekday, dow, doy) {
  var localWeekday = (7 + weekday - dow) % 7,
      weekOffset = firstWeekOffset(year, dow, doy),
      dayOfYear = 1 + 7 * (week - 1) + localWeekday + weekOffset,
      resYear,
      resDayOfYear;

  if (dayOfYear <= 0) {
    resYear = year - 1;
    resDayOfYear = daysInYear(resYear) + dayOfYear;
  } else if (dayOfYear > daysInYear(year)) {
    resYear = year + 1;
    resDayOfYear = dayOfYear - daysInYear(year);
  } else {
    resYear = year;
    resDayOfYear = dayOfYear;
  }

  return {
    year: resYear,
    dayOfYear: resDayOfYear
  };
}
function weekOfYear(mom, dow, doy) {
  var weekOffset = firstWeekOffset(mom.year(), dow, doy),
      week = Math.floor((mom.dayOfYear() - weekOffset - 1) / 7) + 1,
      resWeek,
      resYear;

  if (week < 1) {
    resYear = mom.year() - 1;
    resWeek = week + weeksInYear(resYear, dow, doy);
  } else if (week > weeksInYear(mom.year(), dow, doy)) {
    resWeek = week - weeksInYear(mom.year(), dow, doy);
    resYear = mom.year() + 1;
  } else {
    resYear = mom.year();
    resWeek = week;
  }

  return {
    week: resWeek,
    year: resYear
  };
}
function weeksInYear(year, dow, doy) {
  var weekOffset = firstWeekOffset(year, dow, doy),
      weekOffsetNext = firstWeekOffset(year + 1, dow, doy);
  return (daysInYear(year) - weekOffset + weekOffsetNext) / 7;
}

addFormatToken('w', ['ww', 2], 'wo', 'week');
addFormatToken('W', ['WW', 2], 'Wo', 'isoWeek'); // ALIASES

addUnitAlias('week', 'w');
addUnitAlias('isoWeek', 'W'); // PRIORITIES

addUnitPriority('week', 5);
addUnitPriority('isoWeek', 5); // PARSING

addRegexToken('w', match1to2);
addRegexToken('ww', match1to2, match2);
addRegexToken('W', match1to2);
addRegexToken('WW', match1to2, match2);
addWeekParseToken(['w', 'ww', 'W', 'WW'], function (input, week, config, token) {
  week[token.substr(0, 1)] = toInt(input);
}); // HELPERS
// LOCALES

function localeWeek(mom) {
  return weekOfYear(mom, this._week.dow, this._week.doy).week;
}
var defaultLocaleWeek = {
  dow: 0,
  // Sunday is the first day of the week.
  doy: 6 // The week that contains Jan 6th is the first week of the year.

};
function localeFirstDayOfWeek() {
  return this._week.dow;
}
function localeFirstDayOfYear() {
  return this._week.doy;
} // MOMENTS

function getSetWeek(input) {
  var week = this.localeData().week(this);
  return input == null ? week : this.add((input - week) * 7, 'd');
}
function getSetISOWeek(input) {
  var week = weekOfYear(this, 1, 4).week;
  return input == null ? week : this.add((input - week) * 7, 'd');
}

addFormatToken('d', 0, 'do', 'day');
addFormatToken('dd', 0, 0, function (format) {
  return this.localeData().weekdaysMin(this, format);
});
addFormatToken('ddd', 0, 0, function (format) {
  return this.localeData().weekdaysShort(this, format);
});
addFormatToken('dddd', 0, 0, function (format) {
  return this.localeData().weekdays(this, format);
});
addFormatToken('e', 0, 0, 'weekday');
addFormatToken('E', 0, 0, 'isoWeekday'); // ALIASES

addUnitAlias('day', 'd');
addUnitAlias('weekday', 'e');
addUnitAlias('isoWeekday', 'E'); // PRIORITY

addUnitPriority('day', 11);
addUnitPriority('weekday', 11);
addUnitPriority('isoWeekday', 11); // PARSING

addRegexToken('d', match1to2);
addRegexToken('e', match1to2);
addRegexToken('E', match1to2);
addRegexToken('dd', function (isStrict, locale) {
  return locale.weekdaysMinRegex(isStrict);
});
addRegexToken('ddd', function (isStrict, locale) {
  return locale.weekdaysShortRegex(isStrict);
});
addRegexToken('dddd', function (isStrict, locale) {
  return locale.weekdaysRegex(isStrict);
});
addWeekParseToken(['dd', 'ddd', 'dddd'], function (input, week, config, token) {
  var weekday = config._locale.weekdaysParse(input, token, config._strict); // if we didn't get a weekday name, mark the date as invalid


  if (weekday != null) {
    week.d = weekday;
  } else {
    getParsingFlags(config).invalidWeekday = input;
  }
});
addWeekParseToken(['d', 'e', 'E'], function (input, week, config, token) {
  week[token] = toInt(input);
}); // HELPERS

function parseWeekday(input, locale) {
  if (typeof input !== 'string') {
    return input;
  }

  if (!isNaN(input)) {
    return parseInt(input, 10);
  }

  input = locale.weekdaysParse(input);

  if (typeof input === 'number') {
    return input;
  }

  return null;
}

function parseIsoWeekday(input, locale) {
  if (typeof input === 'string') {
    return locale.weekdaysParse(input) % 7 || 7;
  }

  return isNaN(input) ? null : input;
} // LOCALES


function shiftWeekdays(ws, n) {
  return ws.slice(n, 7).concat(ws.slice(0, n));
}

var defaultLocaleWeekdays = 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_');
function localeWeekdays(m, format) {
  var weekdays = isArray(this._weekdays) ? this._weekdays : this._weekdays[m && m !== true && this._weekdays.isFormat.test(format) ? 'format' : 'standalone'];
  return m === true ? shiftWeekdays(weekdays, this._week.dow) : m ? weekdays[m.day()] : weekdays;
}
var defaultLocaleWeekdaysShort = 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_');
function localeWeekdaysShort(m) {
  return m === true ? shiftWeekdays(this._weekdaysShort, this._week.dow) : m ? this._weekdaysShort[m.day()] : this._weekdaysShort;
}
var defaultLocaleWeekdaysMin = 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_');
function localeWeekdaysMin(m) {
  return m === true ? shiftWeekdays(this._weekdaysMin, this._week.dow) : m ? this._weekdaysMin[m.day()] : this._weekdaysMin;
}

function handleStrictParse$1(weekdayName, format, strict) {
  var i,
      ii,
      mom,
      llc = weekdayName.toLocaleLowerCase();

  if (!this._weekdaysParse) {
    this._weekdaysParse = [];
    this._shortWeekdaysParse = [];
    this._minWeekdaysParse = [];

    for (i = 0; i < 7; ++i) {
      mom = createUTC([2000, 1]).day(i);
      this._minWeekdaysParse[i] = this.weekdaysMin(mom, '').toLocaleLowerCase();
      this._shortWeekdaysParse[i] = this.weekdaysShort(mom, '').toLocaleLowerCase();
      this._weekdaysParse[i] = this.weekdays(mom, '').toLocaleLowerCase();
    }
  }

  if (strict) {
    if (format === 'dddd') {
      ii = indexOf.call(this._weekdaysParse, llc);
      return ii !== -1 ? ii : null;
    } else if (format === 'ddd') {
      ii = indexOf.call(this._shortWeekdaysParse, llc);
      return ii !== -1 ? ii : null;
    } else {
      ii = indexOf.call(this._minWeekdaysParse, llc);
      return ii !== -1 ? ii : null;
    }
  } else {
    if (format === 'dddd') {
      ii = indexOf.call(this._weekdaysParse, llc);

      if (ii !== -1) {
        return ii;
      }

      ii = indexOf.call(this._shortWeekdaysParse, llc);

      if (ii !== -1) {
        return ii;
      }

      ii = indexOf.call(this._minWeekdaysParse, llc);
      return ii !== -1 ? ii : null;
    } else if (format === 'ddd') {
      ii = indexOf.call(this._shortWeekdaysParse, llc);

      if (ii !== -1) {
        return ii;
      }

      ii = indexOf.call(this._weekdaysParse, llc);

      if (ii !== -1) {
        return ii;
      }

      ii = indexOf.call(this._minWeekdaysParse, llc);
      return ii !== -1 ? ii : null;
    } else {
      ii = indexOf.call(this._minWeekdaysParse, llc);

      if (ii !== -1) {
        return ii;
      }

      ii = indexOf.call(this._weekdaysParse, llc);

      if (ii !== -1) {
        return ii;
      }

      ii = indexOf.call(this._shortWeekdaysParse, llc);
      return ii !== -1 ? ii : null;
    }
  }
}

function localeWeekdaysParse(weekdayName, format, strict) {
  var i, mom, regex;

  if (this._weekdaysParseExact) {
    return handleStrictParse$1.call(this, weekdayName, format, strict);
  }

  if (!this._weekdaysParse) {
    this._weekdaysParse = [];
    this._minWeekdaysParse = [];
    this._shortWeekdaysParse = [];
    this._fullWeekdaysParse = [];
  }

  for (i = 0; i < 7; i++) {
    // make the regex if we don't have it already
    mom = createUTC([2000, 1]).day(i);

    if (strict && !this._fullWeekdaysParse[i]) {
      this._fullWeekdaysParse[i] = new RegExp('^' + this.weekdays(mom, '').replace('.', '\\.?') + '$', 'i');
      this._shortWeekdaysParse[i] = new RegExp('^' + this.weekdaysShort(mom, '').replace('.', '\\.?') + '$', 'i');
      this._minWeekdaysParse[i] = new RegExp('^' + this.weekdaysMin(mom, '').replace('.', '\\.?') + '$', 'i');
    }

    if (!this._weekdaysParse[i]) {
      regex = '^' + this.weekdays(mom, '') + '|^' + this.weekdaysShort(mom, '') + '|^' + this.weekdaysMin(mom, '');
      this._weekdaysParse[i] = new RegExp(regex.replace('.', ''), 'i');
    } // test the regex


    if (strict && format === 'dddd' && this._fullWeekdaysParse[i].test(weekdayName)) {
      return i;
    } else if (strict && format === 'ddd' && this._shortWeekdaysParse[i].test(weekdayName)) {
      return i;
    } else if (strict && format === 'dd' && this._minWeekdaysParse[i].test(weekdayName)) {
      return i;
    } else if (!strict && this._weekdaysParse[i].test(weekdayName)) {
      return i;
    }
  }
} // MOMENTS

function getSetDayOfWeek(input) {
  if (!this.isValid()) {
    return input != null ? this : NaN;
  }

  var day = this._isUTC ? this._d.getUTCDay() : this._d.getDay();

  if (input != null) {
    input = parseWeekday(input, this.localeData());
    return this.add(input - day, 'd');
  } else {
    return day;
  }
}
function getSetLocaleDayOfWeek(input) {
  if (!this.isValid()) {
    return input != null ? this : NaN;
  }

  var weekday = (this.day() + 7 - this.localeData()._week.dow) % 7;
  return input == null ? weekday : this.add(input - weekday, 'd');
}
function getSetISODayOfWeek(input) {
  if (!this.isValid()) {
    return input != null ? this : NaN;
  } // behaves the same as moment#day except
  // as a getter, returns 7 instead of 0 (1-7 range instead of 0-6)
  // as a setter, sunday should belong to the previous week.


  if (input != null) {
    var weekday = parseIsoWeekday(input, this.localeData());
    return this.day(this.day() % 7 ? weekday : weekday - 7);
  } else {
    return this.day() || 7;
  }
}
var defaultWeekdaysRegex = matchWord;
function weekdaysRegex(isStrict) {
  if (this._weekdaysParseExact) {
    if (!hasOwnProp(this, '_weekdaysRegex')) {
      computeWeekdaysParse.call(this);
    }

    if (isStrict) {
      return this._weekdaysStrictRegex;
    } else {
      return this._weekdaysRegex;
    }
  } else {
    if (!hasOwnProp(this, '_weekdaysRegex')) {
      this._weekdaysRegex = defaultWeekdaysRegex;
    }

    return this._weekdaysStrictRegex && isStrict ? this._weekdaysStrictRegex : this._weekdaysRegex;
  }
}
var defaultWeekdaysShortRegex = matchWord;
function weekdaysShortRegex(isStrict) {
  if (this._weekdaysParseExact) {
    if (!hasOwnProp(this, '_weekdaysRegex')) {
      computeWeekdaysParse.call(this);
    }

    if (isStrict) {
      return this._weekdaysShortStrictRegex;
    } else {
      return this._weekdaysShortRegex;
    }
  } else {
    if (!hasOwnProp(this, '_weekdaysShortRegex')) {
      this._weekdaysShortRegex = defaultWeekdaysShortRegex;
    }

    return this._weekdaysShortStrictRegex && isStrict ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex;
  }
}
var defaultWeekdaysMinRegex = matchWord;
function weekdaysMinRegex(isStrict) {
  if (this._weekdaysParseExact) {
    if (!hasOwnProp(this, '_weekdaysRegex')) {
      computeWeekdaysParse.call(this);
    }

    if (isStrict) {
      return this._weekdaysMinStrictRegex;
    } else {
      return this._weekdaysMinRegex;
    }
  } else {
    if (!hasOwnProp(this, '_weekdaysMinRegex')) {
      this._weekdaysMinRegex = defaultWeekdaysMinRegex;
    }

    return this._weekdaysMinStrictRegex && isStrict ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex;
  }
}

function computeWeekdaysParse() {
  function cmpLenRev(a, b) {
    return b.length - a.length;
  }

  var minPieces = [],
      shortPieces = [],
      longPieces = [],
      mixedPieces = [],
      i,
      mom,
      minp,
      shortp,
      longp;

  for (i = 0; i < 7; i++) {
    // make the regex if we don't have it already
    mom = createUTC([2000, 1]).day(i);
    minp = this.weekdaysMin(mom, '');
    shortp = this.weekdaysShort(mom, '');
    longp = this.weekdays(mom, '');
    minPieces.push(minp);
    shortPieces.push(shortp);
    longPieces.push(longp);
    mixedPieces.push(minp);
    mixedPieces.push(shortp);
    mixedPieces.push(longp);
  } // Sorting makes sure if one weekday (or abbr) is a prefix of another it
  // will match the longer piece.


  minPieces.sort(cmpLenRev);
  shortPieces.sort(cmpLenRev);
  longPieces.sort(cmpLenRev);
  mixedPieces.sort(cmpLenRev);

  for (i = 0; i < 7; i++) {
    shortPieces[i] = regexEscape(shortPieces[i]);
    longPieces[i] = regexEscape(longPieces[i]);
    mixedPieces[i] = regexEscape(mixedPieces[i]);
  }

  this._weekdaysRegex = new RegExp('^(' + mixedPieces.join('|') + ')', 'i');
  this._weekdaysShortRegex = this._weekdaysRegex;
  this._weekdaysMinRegex = this._weekdaysRegex;
  this._weekdaysStrictRegex = new RegExp('^(' + longPieces.join('|') + ')', 'i');
  this._weekdaysShortStrictRegex = new RegExp('^(' + shortPieces.join('|') + ')', 'i');
  this._weekdaysMinStrictRegex = new RegExp('^(' + minPieces.join('|') + ')', 'i');
}

function hFormat() {
  return this.hours() % 12 || 12;
}

function kFormat() {
  return this.hours() || 24;
}

addFormatToken('H', ['HH', 2], 0, 'hour');
addFormatToken('h', ['hh', 2], 0, hFormat);
addFormatToken('k', ['kk', 2], 0, kFormat);
addFormatToken('hmm', 0, 0, function () {
  return '' + hFormat.apply(this) + zeroFill(this.minutes(), 2);
});
addFormatToken('hmmss', 0, 0, function () {
  return '' + hFormat.apply(this) + zeroFill(this.minutes(), 2) + zeroFill(this.seconds(), 2);
});
addFormatToken('Hmm', 0, 0, function () {
  return '' + this.hours() + zeroFill(this.minutes(), 2);
});
addFormatToken('Hmmss', 0, 0, function () {
  return '' + this.hours() + zeroFill(this.minutes(), 2) + zeroFill(this.seconds(), 2);
});

function meridiem(token, lowercase) {
  addFormatToken(token, 0, 0, function () {
    return this.localeData().meridiem(this.hours(), this.minutes(), lowercase);
  });
}

meridiem('a', true);
meridiem('A', false); // ALIASES

addUnitAlias('hour', 'h'); // PRIORITY

addUnitPriority('hour', 13); // PARSING

function matchMeridiem(isStrict, locale) {
  return locale._meridiemParse;
}

addRegexToken('a', matchMeridiem);
addRegexToken('A', matchMeridiem);
addRegexToken('H', match1to2);
addRegexToken('h', match1to2);
addRegexToken('k', match1to2);
addRegexToken('HH', match1to2, match2);
addRegexToken('hh', match1to2, match2);
addRegexToken('kk', match1to2, match2);
addRegexToken('hmm', match3to4);
addRegexToken('hmmss', match5to6);
addRegexToken('Hmm', match3to4);
addRegexToken('Hmmss', match5to6);
addParseToken(['H', 'HH'], HOUR);
addParseToken(['k', 'kk'], function (input, array, config) {
  var kInput = toInt(input);
  array[HOUR] = kInput === 24 ? 0 : kInput;
});
addParseToken(['a', 'A'], function (input, array, config) {
  config._isPm = config._locale.isPM(input);
  config._meridiem = input;
});
addParseToken(['h', 'hh'], function (input, array, config) {
  array[HOUR] = toInt(input);
  getParsingFlags(config).bigHour = true;
});
addParseToken('hmm', function (input, array, config) {
  var pos = input.length - 2;
  array[HOUR] = toInt(input.substr(0, pos));
  array[MINUTE] = toInt(input.substr(pos));
  getParsingFlags(config).bigHour = true;
});
addParseToken('hmmss', function (input, array, config) {
  var pos1 = input.length - 4;
  var pos2 = input.length - 2;
  array[HOUR] = toInt(input.substr(0, pos1));
  array[MINUTE] = toInt(input.substr(pos1, 2));
  array[SECOND] = toInt(input.substr(pos2));
  getParsingFlags(config).bigHour = true;
});
addParseToken('Hmm', function (input, array, config) {
  var pos = input.length - 2;
  array[HOUR] = toInt(input.substr(0, pos));
  array[MINUTE] = toInt(input.substr(pos));
});
addParseToken('Hmmss', function (input, array, config) {
  var pos1 = input.length - 4;
  var pos2 = input.length - 2;
  array[HOUR] = toInt(input.substr(0, pos1));
  array[MINUTE] = toInt(input.substr(pos1, 2));
  array[SECOND] = toInt(input.substr(pos2));
}); // LOCALES

function localeIsPM(input) {
  // IE8 Quirks Mode & IE7 Standards Mode do not allow accessing strings like arrays
  // Using charAt should be more compatible.
  return (input + '').toLowerCase().charAt(0) === 'p';
}
var defaultLocaleMeridiemParse = /[ap]\.?m?\.?/i;
function localeMeridiem(hours, minutes, isLower) {
  if (hours > 11) {
    return isLower ? 'pm' : 'PM';
  } else {
    return isLower ? 'am' : 'AM';
  }
} // MOMENTS
// Setting the hour should keep the time, because the user explicitly
// specified which hour they want. So trying to maintain the same hour (in
// a new timezone) makes sense. Adding/subtracting hours does not follow
// this rule.

var getSetHour = makeGetSet('Hours', true);

var baseConfig = {
  calendar: defaultCalendar,
  longDateFormat: defaultLongDateFormat,
  invalidDate: defaultInvalidDate,
  ordinal: defaultOrdinal,
  dayOfMonthOrdinalParse: defaultDayOfMonthOrdinalParse,
  relativeTime: defaultRelativeTime,
  months: defaultLocaleMonths,
  monthsShort: defaultLocaleMonthsShort,
  week: defaultLocaleWeek,
  weekdays: defaultLocaleWeekdays,
  weekdaysMin: defaultLocaleWeekdaysMin,
  weekdaysShort: defaultLocaleWeekdaysShort,
  meridiemParse: defaultLocaleMeridiemParse
};

var locales = {};
var localeFamilies = {};
var globalLocale;

function normalizeLocale(key) {
  return key ? key.toLowerCase().replace('_', '-') : key;
} // pick the locale from the array
// try ['en-au', 'en-gb'] as 'en-au', 'en-gb', 'en', as in move through the list trying each
// substring from most specific to least, but move to the next array item if it's a more specific variant than the current root


function chooseLocale(names) {
  var i = 0,
      j,
      next,
      locale,
      split;

  while (i < names.length) {
    split = normalizeLocale(names[i]).split('-');
    j = split.length;
    next = normalizeLocale(names[i + 1]);
    next = next ? next.split('-') : null;

    while (j > 0) {
      locale = loadLocale(split.slice(0, j).join('-'));

      if (locale) {
        return locale;
      }

      if (next && next.length >= j && compareArrays(split, next, true) >= j - 1) {
        //the next array item is better than a shallower substring of this one
        break;
      }

      j--;
    }

    i++;
  }

  return globalLocale;
}

function loadLocale(name) {
  var oldLocale = null; // TODO: Find a better way to register and load all the locales in Node

  if (!locales[name] && typeof module !== 'undefined' && module && module.exports) {
    try {
      oldLocale = globalLocale._abbr;
      var aliasedRequire = require;
      aliasedRequire('./locale/' + name);
      getSetGlobalLocale(oldLocale);
    } catch (e) {}
  }

  return locales[name];
} // This function will load locale and then set the global locale.  If
// no arguments are passed in, it will simply return the current global
// locale key.


function getSetGlobalLocale(key, values) {
  var data;

  if (key) {
    if (isUndefined(values)) {
      data = getLocale(key);
    } else {
      data = defineLocale(key, values);
    }

    if (data) {
      // moment.duration._locale = moment._locale = data;
      globalLocale = data;
    } else {
      if (typeof console !== 'undefined' && console.warn) {
        //warn user if arguments are passed but the locale could not be set
        console.warn('Locale ' + key + ' not found. Did you forget to load it?');
      }
    }
  }

  return globalLocale._abbr;
}
function defineLocale(name, config) {
  if (config !== null) {
    var locale,
        parentConfig = baseConfig;
    config.abbr = name;

    if (locales[name] != null) {
      deprecateSimple('defineLocaleOverride', 'use moment.updateLocale(localeName, config) to change ' + 'an existing locale. moment.defineLocale(localeName, ' + 'config) should only be used for creating a new locale ' + 'See http://momentjs.com/guides/#/warnings/define-locale/ for more info.');
      parentConfig = locales[name]._config;
    } else if (config.parentLocale != null) {
      if (locales[config.parentLocale] != null) {
        parentConfig = locales[config.parentLocale]._config;
      } else {
        locale = loadLocale(config.parentLocale);

        if (locale != null) {
          parentConfig = locale._config;
        } else {
          if (!localeFamilies[config.parentLocale]) {
            localeFamilies[config.parentLocale] = [];
          }

          localeFamilies[config.parentLocale].push({
            name: name,
            config: config
          });
          return null;
        }
      }
    }

    locales[name] = new Locale(mergeConfigs(parentConfig, config));

    if (localeFamilies[name]) {
      localeFamilies[name].forEach(function (x) {
        defineLocale(x.name, x.config);
      });
    } // backwards compat for now: also set the locale
    // make sure we set the locale AFTER all child locales have been
    // created, so we won't end up with the child locale set.


    getSetGlobalLocale(name);
    return locales[name];
  } else {
    // useful for testing
    delete locales[name];
    return null;
  }
}
function updateLocale(name, config) {
  if (config != null) {
    var locale,
        tmpLocale,
        parentConfig = baseConfig; // MERGE

    tmpLocale = loadLocale(name);

    if (tmpLocale != null) {
      parentConfig = tmpLocale._config;
    }

    config = mergeConfigs(parentConfig, config);
    locale = new Locale(config);
    locale.parentLocale = locales[name];
    locales[name] = locale; // backwards compat for now: also set the locale

    getSetGlobalLocale(name);
  } else {
    // pass null for config to unupdate, useful for tests
    if (locales[name] != null) {
      if (locales[name].parentLocale != null) {
        locales[name] = locales[name].parentLocale;
      } else if (locales[name] != null) {
        delete locales[name];
      }
    }
  }

  return locales[name];
} // returns locale data

function getLocale(key) {
  var locale;

  if (key && key._locale && key._locale._abbr) {
    key = key._locale._abbr;
  }

  if (!key) {
    return globalLocale;
  }

  if (!isArray(key)) {
    //short-circuit everything else
    locale = loadLocale(key);

    if (locale) {
      return locale;
    }

    key = [key];
  }

  return chooseLocale(key);
}
function listLocales() {
  return keys(locales);
}

function checkOverflow(m) {
  var overflow;
  var a = m._a;

  if (a && getParsingFlags(m).overflow === -2) {
    overflow = a[MONTH] < 0 || a[MONTH] > 11 ? MONTH : a[DATE] < 1 || a[DATE] > daysInMonth(a[YEAR], a[MONTH]) ? DATE : a[HOUR] < 0 || a[HOUR] > 24 || a[HOUR] === 24 && (a[MINUTE] !== 0 || a[SECOND] !== 0 || a[MILLISECOND] !== 0) ? HOUR : a[MINUTE] < 0 || a[MINUTE] > 59 ? MINUTE : a[SECOND] < 0 || a[SECOND] > 59 ? SECOND : a[MILLISECOND] < 0 || a[MILLISECOND] > 999 ? MILLISECOND : -1;

    if (getParsingFlags(m)._overflowDayOfYear && (overflow < YEAR || overflow > DATE)) {
      overflow = DATE;
    }

    if (getParsingFlags(m)._overflowWeeks && overflow === -1) {
      overflow = WEEK;
    }

    if (getParsingFlags(m)._overflowWeekday && overflow === -1) {
      overflow = WEEKDAY;
    }

    getParsingFlags(m).overflow = overflow;
  }

  return m;
}

// Pick the first defined of two or three arguments.
function defaults(a, b, c) {
  if (a != null) {
    return a;
  }

  if (b != null) {
    return b;
  }

  return c;
}

function currentDateArray(config) {
  // hooks is actually the exported moment object
  var nowValue = new Date(hooks.now());

  if (config._useUTC) {
    return [nowValue.getUTCFullYear(), nowValue.getUTCMonth(), nowValue.getUTCDate()];
  }

  return [nowValue.getFullYear(), nowValue.getMonth(), nowValue.getDate()];
} // convert an array to a date.
// the array should mirror the parameters below
// note: all values past the year are optional and will default to the lowest possible value.
// [year, month, day , hour, minute, second, millisecond]


function configFromArray(config) {
  var i,
      date,
      input = [],
      currentDate,
      expectedWeekday,
      yearToUse;

  if (config._d) {
    return;
  }

  currentDate = currentDateArray(config); //compute day of the year from weeks and weekdays

  if (config._w && config._a[DATE] == null && config._a[MONTH] == null) {
    dayOfYearFromWeekInfo(config);
  } //if the day of the year is set, figure out what it is


  if (config._dayOfYear != null) {
    yearToUse = defaults(config._a[YEAR], currentDate[YEAR]);

    if (config._dayOfYear > daysInYear(yearToUse) || config._dayOfYear === 0) {
      getParsingFlags(config)._overflowDayOfYear = true;
    }

    date = createUTCDate(yearToUse, 0, config._dayOfYear);
    config._a[MONTH] = date.getUTCMonth();
    config._a[DATE] = date.getUTCDate();
  } // Default to current date.
  // * if no year, month, day of month are given, default to today
  // * if day of month is given, default month and year
  // * if month is given, default only year
  // * if year is given, don't default anything


  for (i = 0; i < 3 && config._a[i] == null; ++i) {
    config._a[i] = input[i] = currentDate[i];
  } // Zero out whatever was not defaulted, including time


  for (; i < 7; i++) {
    config._a[i] = input[i] = config._a[i] == null ? i === 2 ? 1 : 0 : config._a[i];
  } // Check for 24:00:00.000


  if (config._a[HOUR] === 24 && config._a[MINUTE] === 0 && config._a[SECOND] === 0 && config._a[MILLISECOND] === 0) {
    config._nextDay = true;
    config._a[HOUR] = 0;
  }

  config._d = (config._useUTC ? createUTCDate : createDate).apply(null, input);
  expectedWeekday = config._useUTC ? config._d.getUTCDay() : config._d.getDay(); // Apply timezone offset from input. The actual utcOffset can be changed
  // with parseZone.

  if (config._tzm != null) {
    config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm);
  }

  if (config._nextDay) {
    config._a[HOUR] = 24;
  } // check for mismatching day of week


  if (config._w && typeof config._w.d !== 'undefined' && config._w.d !== expectedWeekday) {
    getParsingFlags(config).weekdayMismatch = true;
  }
}

function dayOfYearFromWeekInfo(config) {
  var w, weekYear, week, weekday, dow, doy, temp, weekdayOverflow;
  w = config._w;

  if (w.GG != null || w.W != null || w.E != null) {
    dow = 1;
    doy = 4; // TODO: We need to take the current isoWeekYear, but that depends on
    // how we interpret now (local, utc, fixed offset). So create
    // a now version of current config (take local/utc/offset flags, and
    // create now).

    weekYear = defaults(w.GG, config._a[YEAR], weekOfYear(createLocal(), 1, 4).year);
    week = defaults(w.W, 1);
    weekday = defaults(w.E, 1);

    if (weekday < 1 || weekday > 7) {
      weekdayOverflow = true;
    }
  } else {
    dow = config._locale._week.dow;
    doy = config._locale._week.doy;
    var curWeek = weekOfYear(createLocal(), dow, doy);
    weekYear = defaults(w.gg, config._a[YEAR], curWeek.year); // Default to current week.

    week = defaults(w.w, curWeek.week);

    if (w.d != null) {
      // weekday -- low day numbers are considered next week
      weekday = w.d;

      if (weekday < 0 || weekday > 6) {
        weekdayOverflow = true;
      }
    } else if (w.e != null) {
      // local weekday -- counting starts from beginning of week
      weekday = w.e + dow;

      if (w.e < 0 || w.e > 6) {
        weekdayOverflow = true;
      }
    } else {
      // default to beginning of week
      weekday = dow;
    }
  }

  if (week < 1 || week > weeksInYear(weekYear, dow, doy)) {
    getParsingFlags(config)._overflowWeeks = true;
  } else if (weekdayOverflow != null) {
    getParsingFlags(config)._overflowWeekday = true;
  } else {
    temp = dayOfYearFromWeeks(weekYear, week, weekday, dow, doy);
    config._a[YEAR] = temp.year;
    config._dayOfYear = temp.dayOfYear;
  }
}

// 0000-00-00 0000-W00 or 0000-W00-0 + T + 00 or 00:00 or 00:00:00 or 00:00:00.000 + +00:00 or +0000 or +00)

var extendedIsoRegex = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/;
var basicIsoRegex = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/;
var tzRegex = /Z|[+-]\d\d(?::?\d\d)?/;
var isoDates = [['YYYYYY-MM-DD', /[+-]\d{6}-\d\d-\d\d/], ['YYYY-MM-DD', /\d{4}-\d\d-\d\d/], ['GGGG-[W]WW-E', /\d{4}-W\d\d-\d/], ['GGGG-[W]WW', /\d{4}-W\d\d/, false], ['YYYY-DDD', /\d{4}-\d{3}/], ['YYYY-MM', /\d{4}-\d\d/, false], ['YYYYYYMMDD', /[+-]\d{10}/], ['YYYYMMDD', /\d{8}/], // YYYYMM is NOT allowed by the standard
['GGGG[W]WWE', /\d{4}W\d{3}/], ['GGGG[W]WW', /\d{4}W\d{2}/, false], ['YYYYDDD', /\d{7}/]]; // iso time formats and regexes

var isoTimes = [['HH:mm:ss.SSSS', /\d\d:\d\d:\d\d\.\d+/], ['HH:mm:ss,SSSS', /\d\d:\d\d:\d\d,\d+/], ['HH:mm:ss', /\d\d:\d\d:\d\d/], ['HH:mm', /\d\d:\d\d/], ['HHmmss.SSSS', /\d\d\d\d\d\d\.\d+/], ['HHmmss,SSSS', /\d\d\d\d\d\d,\d+/], ['HHmmss', /\d\d\d\d\d\d/], ['HHmm', /\d\d\d\d/], ['HH', /\d\d/]];
var aspNetJsonRegex = /^\/?Date\((\-?\d+)/i; // date from iso format

function configFromISO(config) {
  var i,
      l,
      string = config._i,
      match = extendedIsoRegex.exec(string) || basicIsoRegex.exec(string),
      allowTime,
      dateFormat,
      timeFormat,
      tzFormat;

  if (match) {
    getParsingFlags(config).iso = true;

    for (i = 0, l = isoDates.length; i < l; i++) {
      if (isoDates[i][1].exec(match[1])) {
        dateFormat = isoDates[i][0];
        allowTime = isoDates[i][2] !== false;
        break;
      }
    }

    if (dateFormat == null) {
      config._isValid = false;
      return;
    }

    if (match[3]) {
      for (i = 0, l = isoTimes.length; i < l; i++) {
        if (isoTimes[i][1].exec(match[3])) {
          // match[2] should be 'T' or space
          timeFormat = (match[2] || ' ') + isoTimes[i][0];
          break;
        }
      }

      if (timeFormat == null) {
        config._isValid = false;
        return;
      }
    }

    if (!allowTime && timeFormat != null) {
      config._isValid = false;
      return;
    }

    if (match[4]) {
      if (tzRegex.exec(match[4])) {
        tzFormat = 'Z';
      } else {
        config._isValid = false;
        return;
      }
    }

    config._f = dateFormat + (timeFormat || '') + (tzFormat || '');
    configFromStringAndFormat(config);
  } else {
    config._isValid = false;
  }
} // RFC 2822 regex: For details see https://tools.ietf.org/html/rfc2822#section-3.3

var rfc2822 = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/;

function extractFromRFC2822Strings(yearStr, monthStr, dayStr, hourStr, minuteStr, secondStr) {
  var result = [untruncateYear(yearStr), defaultLocaleMonthsShort.indexOf(monthStr), parseInt(dayStr, 10), parseInt(hourStr, 10), parseInt(minuteStr, 10)];

  if (secondStr) {
    result.push(parseInt(secondStr, 10));
  }

  return result;
}

function untruncateYear(yearStr) {
  var year = parseInt(yearStr, 10);

  if (year <= 49) {
    return 2000 + year;
  } else if (year <= 999) {
    return 1900 + year;
  }

  return year;
}

function preprocessRFC2822(s) {
  // Remove comments and folding whitespace and replace multiple-spaces with a single space
  return s.replace(/\([^)]*\)|[\n\t]/g, ' ').replace(/(\s\s+)/g, ' ').replace(/^\s\s*/, '').replace(/\s\s*$/, '');
}

function checkWeekday(weekdayStr, parsedInput, config) {
  if (weekdayStr) {
    // TODO: Replace the vanilla JS Date object with an indepentent day-of-week check.
    var weekdayProvided = defaultLocaleWeekdaysShort.indexOf(weekdayStr),
        weekdayActual = new Date(parsedInput[0], parsedInput[1], parsedInput[2]).getDay();

    if (weekdayProvided !== weekdayActual) {
      getParsingFlags(config).weekdayMismatch = true;
      config._isValid = false;
      return false;
    }
  }

  return true;
}

var obsOffsets = {
  UT: 0,
  GMT: 0,
  EDT: -4 * 60,
  EST: -5 * 60,
  CDT: -5 * 60,
  CST: -6 * 60,
  MDT: -6 * 60,
  MST: -7 * 60,
  PDT: -7 * 60,
  PST: -8 * 60
};

function calculateOffset(obsOffset, militaryOffset, numOffset) {
  if (obsOffset) {
    return obsOffsets[obsOffset];
  } else if (militaryOffset) {
    // the only allowed military tz is Z
    return 0;
  } else {
    var hm = parseInt(numOffset, 10);
    var m = hm % 100,
        h = (hm - m) / 100;
    return h * 60 + m;
  }
} // date and time from ref 2822 format


function configFromRFC2822(config) {
  var match = rfc2822.exec(preprocessRFC2822(config._i));

  if (match) {
    var parsedArray = extractFromRFC2822Strings(match[4], match[3], match[2], match[5], match[6], match[7]);

    if (!checkWeekday(match[1], parsedArray, config)) {
      return;
    }

    config._a = parsedArray;
    config._tzm = calculateOffset(match[8], match[9], match[10]);
    config._d = createUTCDate.apply(null, config._a);

    config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm);

    getParsingFlags(config).rfc2822 = true;
  } else {
    config._isValid = false;
  }
} // date from iso format or fallback

function configFromString(config) {
  var matched = aspNetJsonRegex.exec(config._i);

  if (matched !== null) {
    config._d = new Date(+matched[1]);
    return;
  }

  configFromISO(config);

  if (config._isValid === false) {
    delete config._isValid;
  } else {
    return;
  }

  configFromRFC2822(config);

  if (config._isValid === false) {
    delete config._isValid;
  } else {
    return;
  } // Final attempt, use Input Fallback


  hooks.createFromInputFallback(config);
}
hooks.createFromInputFallback = deprecate('value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), ' + 'which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are ' + 'discouraged and will be removed in an upcoming major release. Please refer to ' + 'http://momentjs.com/guides/#/warnings/js-date/ for more info.', function (config) {
  config._d = new Date(config._i + (config._useUTC ? ' UTC' : ''));
});

hooks.ISO_8601 = function () {}; // constant that refers to the RFC 2822 form


hooks.RFC_2822 = function () {}; // date from string and format string


function configFromStringAndFormat(config) {
  // TODO: Move this to another part of the creation flow to prevent circular deps
  if (config._f === hooks.ISO_8601) {
    configFromISO(config);
    return;
  }

  if (config._f === hooks.RFC_2822) {
    configFromRFC2822(config);
    return;
  }

  config._a = [];
  getParsingFlags(config).empty = true; // This array is used to make a Date, either with `new Date` or `Date.UTC`

  var string = '' + config._i,
      i,
      parsedInput,
      tokens,
      token,
      skipped,
      stringLength = string.length,
      totalParsedInputLength = 0;
  tokens = expandFormat(config._f, config._locale).match(formattingTokens) || [];

  for (i = 0; i < tokens.length; i++) {
    token = tokens[i];
    parsedInput = (string.match(getParseRegexForToken(token, config)) || [])[0]; // console.log('token', token, 'parsedInput', parsedInput,
    //         'regex', getParseRegexForToken(token, config));

    if (parsedInput) {
      skipped = string.substr(0, string.indexOf(parsedInput));

      if (skipped.length > 0) {
        getParsingFlags(config).unusedInput.push(skipped);
      }

      string = string.slice(string.indexOf(parsedInput) + parsedInput.length);
      totalParsedInputLength += parsedInput.length;
    } // don't parse if it's not a known token


    if (formatTokenFunctions[token]) {
      if (parsedInput) {
        getParsingFlags(config).empty = false;
      } else {
        getParsingFlags(config).unusedTokens.push(token);
      }

      addTimeToArrayFromToken(token, parsedInput, config);
    } else if (config._strict && !parsedInput) {
      getParsingFlags(config).unusedTokens.push(token);
    }
  } // add remaining unparsed input length to the string


  getParsingFlags(config).charsLeftOver = stringLength - totalParsedInputLength;

  if (string.length > 0) {
    getParsingFlags(config).unusedInput.push(string);
  } // clear _12h flag if hour is <= 12


  if (config._a[HOUR] <= 12 && getParsingFlags(config).bigHour === true && config._a[HOUR] > 0) {
    getParsingFlags(config).bigHour = undefined;
  }

  getParsingFlags(config).parsedDateParts = config._a.slice(0);
  getParsingFlags(config).meridiem = config._meridiem; // handle meridiem

  config._a[HOUR] = meridiemFixWrap(config._locale, config._a[HOUR], config._meridiem);
  configFromArray(config);
  checkOverflow(config);
}

function meridiemFixWrap(locale, hour, meridiem) {
  var isPm;

  if (meridiem == null) {
    // nothing to do
    return hour;
  }

  if (locale.meridiemHour != null) {
    return locale.meridiemHour(hour, meridiem);
  } else if (locale.isPM != null) {
    // Fallback
    isPm = locale.isPM(meridiem);

    if (isPm && hour < 12) {
      hour += 12;
    }

    if (!isPm && hour === 12) {
      hour = 0;
    }

    return hour;
  } else {
    // this is not supposed to happen
    return hour;
  }
}

function configFromStringAndArray(config) {
  var tempConfig, bestMoment, scoreToBeat, i, currentScore;

  if (config._f.length === 0) {
    getParsingFlags(config).invalidFormat = true;
    config._d = new Date(NaN);
    return;
  }

  for (i = 0; i < config._f.length; i++) {
    currentScore = 0;
    tempConfig = copyConfig({}, config);

    if (config._useUTC != null) {
      tempConfig._useUTC = config._useUTC;
    }

    tempConfig._f = config._f[i];
    configFromStringAndFormat(tempConfig);

    if (!isValid(tempConfig)) {
      continue;
    } // if there is any input that was not parsed add a penalty for that format


    currentScore += getParsingFlags(tempConfig).charsLeftOver; //or tokens

    currentScore += getParsingFlags(tempConfig).unusedTokens.length * 10;
    getParsingFlags(tempConfig).score = currentScore;

    if (scoreToBeat == null || currentScore < scoreToBeat) {
      scoreToBeat = currentScore;
      bestMoment = tempConfig;
    }
  }

  extend(config, bestMoment || tempConfig);
}

function configFromObject(config) {
  if (config._d) {
    return;
  }

  var i = normalizeObjectUnits(config._i);
  config._a = map([i.year, i.month, i.day || i.date, i.hour, i.minute, i.second, i.millisecond], function (obj) {
    return obj && parseInt(obj, 10);
  });
  configFromArray(config);
}

function createFromConfig(config) {
  var res = new Moment(checkOverflow(prepareConfig(config)));

  if (res._nextDay) {
    // Adding is smart enough around DST
    res.add(1, 'd');
    res._nextDay = undefined;
  }

  return res;
}

function prepareConfig(config) {
  var input = config._i,
      format = config._f;
  config._locale = config._locale || getLocale(config._l);

  if (input === null || format === undefined && input === '') {
    return createInvalid({
      nullInput: true
    });
  }

  if (typeof input === 'string') {
    config._i = input = config._locale.preparse(input);
  }

  if (isMoment(input)) {
    return new Moment(checkOverflow(input));
  } else if (isDate(input)) {
    config._d = input;
  } else if (isArray(format)) {
    configFromStringAndArray(config);
  } else if (format) {
    configFromStringAndFormat(config);
  } else {
    configFromInput(config);
  }

  if (!isValid(config)) {
    config._d = null;
  }

  return config;
}

function configFromInput(config) {
  var input = config._i;

  if (isUndefined(input)) {
    config._d = new Date(hooks.now());
  } else if (isDate(input)) {
    config._d = new Date(input.valueOf());
  } else if (typeof input === 'string') {
    configFromString(config);
  } else if (isArray(input)) {
    config._a = map(input.slice(0), function (obj) {
      return parseInt(obj, 10);
    });
    configFromArray(config);
  } else if (isObject(input)) {
    configFromObject(config);
  } else if (isNumber(input)) {
    // from milliseconds
    config._d = new Date(input);
  } else {
    hooks.createFromInputFallback(config);
  }
}

function createLocalOrUTC(input, format, locale, strict, isUTC) {
  var c = {};

  if (locale === true || locale === false) {
    strict = locale;
    locale = undefined;
  }

  if (isObject(input) && isObjectEmpty(input) || isArray(input) && input.length === 0) {
    input = undefined;
  } // object construction must be done this way.
  // https://github.com/moment/moment/issues/1423


  c._isAMomentObject = true;
  c._useUTC = c._isUTC = isUTC;
  c._l = locale;
  c._i = input;
  c._f = format;
  c._strict = strict;
  return createFromConfig(c);
}

function createLocal(input, format, locale, strict) {
  return createLocalOrUTC(input, format, locale, strict, false);
}

var prototypeMin = deprecate('moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/', function () {
  var other = createLocal.apply(null, arguments);

  if (this.isValid() && other.isValid()) {
    return other < this ? this : other;
  } else {
    return createInvalid();
  }
});
var prototypeMax = deprecate('moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/', function () {
  var other = createLocal.apply(null, arguments);

  if (this.isValid() && other.isValid()) {
    return other > this ? this : other;
  } else {
    return createInvalid();
  }
}); // Pick a moment m from moments so that m[fn](other) is true for all
// other. This relies on the function fn to be transitive.
//
// moments should either be an array of moment objects or an array, whose
// first element is an array of moment objects.

function pickBy(fn, moments) {
  var res, i;

  if (moments.length === 1 && isArray(moments[0])) {
    moments = moments[0];
  }

  if (!moments.length) {
    return createLocal();
  }

  res = moments[0];

  for (i = 1; i < moments.length; ++i) {
    if (!moments[i].isValid() || moments[i][fn](res)) {
      res = moments[i];
    }
  }

  return res;
} // TODO: Use [].sort instead?


function min() {
  var args = [].slice.call(arguments, 0);
  return pickBy('isBefore', args);
}
function max() {
  var args = [].slice.call(arguments, 0);
  return pickBy('isAfter', args);
}

var now = function () {
  return Date.now ? Date.now() : +new Date();
};

var ordering = ['year', 'quarter', 'month', 'week', 'day', 'hour', 'minute', 'second', 'millisecond'];
function isDurationValid(m) {
  for (var key in m) {
    if (!(indexOf.call(ordering, key) !== -1 && (m[key] == null || !isNaN(m[key])))) {
      return false;
    }
  }

  var unitHasDecimal = false;

  for (var i = 0; i < ordering.length; ++i) {
    if (m[ordering[i]]) {
      if (unitHasDecimal) {
        return false; // only allow non-integers for smallest unit
      }

      if (parseFloat(m[ordering[i]]) !== toInt(m[ordering[i]])) {
        unitHasDecimal = true;
      }
    }
  }

  return true;
}
function isValid$1() {
  return this._isValid;
}
function createInvalid$1() {
  return createDuration(NaN);
}

function Duration(duration) {
  var normalizedInput = normalizeObjectUnits(duration),
      years = normalizedInput.year || 0,
      quarters = normalizedInput.quarter || 0,
      months = normalizedInput.month || 0,
      weeks = normalizedInput.week || normalizedInput.isoWeek || 0,
      days = normalizedInput.day || 0,
      hours = normalizedInput.hour || 0,
      minutes = normalizedInput.minute || 0,
      seconds = normalizedInput.second || 0,
      milliseconds = normalizedInput.millisecond || 0;
  this._isValid = isDurationValid(normalizedInput); // representation for dateAddRemove

  this._milliseconds = +milliseconds + seconds * 1e3 + // 1000
  minutes * 6e4 + // 1000 * 60
  hours * 1000 * 60 * 60; //using 1000 * 60 * 60 instead of 36e5 to avoid floating point rounding errors https://github.com/moment/moment/issues/2978
  // Because of dateAddRemove treats 24 hours as different from a
  // day when working around DST, we need to store them separately

  this._days = +days + weeks * 7; // It is impossible to translate months into days without knowing
  // which months you are are talking about, so we have to store
  // it separately.

  this._months = +months + quarters * 3 + years * 12;
  this._data = {};
  this._locale = getLocale();

  this._bubble();
}
function isDuration(obj) {
  return obj instanceof Duration;
}

function absRound(number) {
  if (number < 0) {
    return Math.round(-1 * number) * -1;
  } else {
    return Math.round(number);
  }
}

function offset(token, separator) {
  addFormatToken(token, 0, 0, function () {
    var offset = this.utcOffset();
    var sign = '+';

    if (offset < 0) {
      offset = -offset;
      sign = '-';
    }

    return sign + zeroFill(~~(offset / 60), 2) + separator + zeroFill(~~offset % 60, 2);
  });
}

offset('Z', ':');
offset('ZZ', ''); // PARSING

addRegexToken('Z', matchShortOffset);
addRegexToken('ZZ', matchShortOffset);
addParseToken(['Z', 'ZZ'], function (input, array, config) {
  config._useUTC = true;
  config._tzm = offsetFromString(matchShortOffset, input);
}); // HELPERS
// timezone chunker
// '+10:00' > ['10',  '00']
// '-1530'  > ['-15', '30']

var chunkOffset = /([\+\-]|\d\d)/gi;

function offsetFromString(matcher, string) {
  var matches = (string || '').match(matcher);

  if (matches === null) {
    return null;
  }

  var chunk = matches[matches.length - 1] || [];
  var parts = (chunk + '').match(chunkOffset) || ['-', 0, 0];
  var minutes = +(parts[1] * 60) + toInt(parts[2]);
  return minutes === 0 ? 0 : parts[0] === '+' ? minutes : -minutes;
} // Return a moment from input, that is local/utc/zone equivalent to model.


function cloneWithOffset(input, model) {
  var res, diff;

  if (model._isUTC) {
    res = model.clone();
    diff = (isMoment(input) || isDate(input) ? input.valueOf() : createLocal(input).valueOf()) - res.valueOf(); // Use low-level api, because this fn is low-level api.

    res._d.setTime(res._d.valueOf() + diff);

    hooks.updateOffset(res, false);
    return res;
  } else {
    return createLocal(input).local();
  }
}

function getDateOffset(m) {
  // On Firefox.24 Date#getTimezoneOffset returns a floating point.
  // https://github.com/moment/moment/pull/1871
  return -Math.round(m._d.getTimezoneOffset() / 15) * 15;
} // HOOKS
// This function will be called whenever a moment is mutated.
// It is intended to keep the offset in sync with the timezone.


hooks.updateOffset = function () {}; // MOMENTS
// keepLocalTime = true means only change the timezone, without
// affecting the local hour. So 5:31:26 +0300 --[utcOffset(2, true)]-->
// 5:31:26 +0200 It is possible that 5:31:26 doesn't exist with offset
// +0200, so we adjust the time as needed, to be valid.
//
// Keeping the time actually adds/subtracts (one hour)
// from the actual represented time. That is why we call updateOffset
// a second time. In case it wants us to change the offset again
// _changeInProgress == true case, then we have to adjust, because
// there is no such time in the given timezone.


function getSetOffset(input, keepLocalTime, keepMinutes) {
  var offset = this._offset || 0,
      localAdjust;

  if (!this.isValid()) {
    return input != null ? this : NaN;
  }

  if (input != null) {
    if (typeof input === 'string') {
      input = offsetFromString(matchShortOffset, input);

      if (input === null) {
        return this;
      }
    } else if (Math.abs(input) < 16 && !keepMinutes) {
      input = input * 60;
    }

    if (!this._isUTC && keepLocalTime) {
      localAdjust = getDateOffset(this);
    }

    this._offset = input;
    this._isUTC = true;

    if (localAdjust != null) {
      this.add(localAdjust, 'm');
    }

    if (offset !== input) {
      if (!keepLocalTime || this._changeInProgress) {
        addSubtract(this, createDuration(input - offset, 'm'), 1, false);
      } else if (!this._changeInProgress) {
        this._changeInProgress = true;
        hooks.updateOffset(this, true);
        this._changeInProgress = null;
      }
    }

    return this;
  } else {
    return this._isUTC ? offset : getDateOffset(this);
  }
}
function getSetZone(input, keepLocalTime) {
  if (input != null) {
    if (typeof input !== 'string') {
      input = -input;
    }

    this.utcOffset(input, keepLocalTime);
    return this;
  } else {
    return -this.utcOffset();
  }
}
function setOffsetToUTC(keepLocalTime) {
  return this.utcOffset(0, keepLocalTime);
}
function setOffsetToLocal(keepLocalTime) {
  if (this._isUTC) {
    this.utcOffset(0, keepLocalTime);
    this._isUTC = false;

    if (keepLocalTime) {
      this.subtract(getDateOffset(this), 'm');
    }
  }

  return this;
}
function setOffsetToParsedOffset() {
  if (this._tzm != null) {
    this.utcOffset(this._tzm, false, true);
  } else if (typeof this._i === 'string') {
    var tZone = offsetFromString(matchOffset, this._i);

    if (tZone != null) {
      this.utcOffset(tZone);
    } else {
      this.utcOffset(0, true);
    }
  }

  return this;
}
function hasAlignedHourOffset(input) {
  if (!this.isValid()) {
    return false;
  }

  input = input ? createLocal(input).utcOffset() : 0;
  return (this.utcOffset() - input) % 60 === 0;
}
function isDaylightSavingTime() {
  return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset();
}
function isDaylightSavingTimeShifted() {
  if (!isUndefined(this._isDSTShifted)) {
    return this._isDSTShifted;
  }

  var c = {};
  copyConfig(c, this);
  c = prepareConfig(c);

  if (c._a) {
    var other = c._isUTC ? createUTC(c._a) : createLocal(c._a);
    this._isDSTShifted = this.isValid() && compareArrays(c._a, other.toArray()) > 0;
  } else {
    this._isDSTShifted = false;
  }

  return this._isDSTShifted;
}
function isLocal() {
  return this.isValid() ? !this._isUTC : false;
}
function isUtcOffset() {
  return this.isValid() ? this._isUTC : false;
}
function isUtc() {
  return this.isValid() ? this._isUTC && this._offset === 0 : false;
}

var aspNetRegex = /^(\-|\+)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/; // from http://docs.closure-library.googlecode.com/git/closure_goog_date_date.js.source.html
// somewhat more in line with 4.4.3.2 2004 spec, but allows decimal anywhere
// and further modified to allow for strings containing both week and day

var isoRegex = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;
function createDuration(input, key) {
  var duration = input,
      // matching against regexp is expensive, do it on demand
  match = null,
      sign,
      ret,
      diffRes;

  if (isDuration(input)) {
    duration = {
      ms: input._milliseconds,
      d: input._days,
      M: input._months
    };
  } else if (isNumber(input)) {
    duration = {};

    if (key) {
      duration[key] = input;
    } else {
      duration.milliseconds = input;
    }
  } else if (!!(match = aspNetRegex.exec(input))) {
    sign = match[1] === '-' ? -1 : 1;
    duration = {
      y: 0,
      d: toInt(match[DATE]) * sign,
      h: toInt(match[HOUR]) * sign,
      m: toInt(match[MINUTE]) * sign,
      s: toInt(match[SECOND]) * sign,
      ms: toInt(absRound(match[MILLISECOND] * 1000)) * sign // the millisecond decimal point is included in the match

    };
  } else if (!!(match = isoRegex.exec(input))) {
    sign = match[1] === '-' ? -1 : 1;
    duration = {
      y: parseIso(match[2], sign),
      M: parseIso(match[3], sign),
      w: parseIso(match[4], sign),
      d: parseIso(match[5], sign),
      h: parseIso(match[6], sign),
      m: parseIso(match[7], sign),
      s: parseIso(match[8], sign)
    };
  } else if (duration == null) {
    // checks for null or undefined
    duration = {};
  } else if (typeof duration === 'object' && ('from' in duration || 'to' in duration)) {
    diffRes = momentsDifference(createLocal(duration.from), createLocal(duration.to));
    duration = {};
    duration.ms = diffRes.milliseconds;
    duration.M = diffRes.months;
  }

  ret = new Duration(duration);

  if (isDuration(input) && hasOwnProp(input, '_locale')) {
    ret._locale = input._locale;
  }

  return ret;
}
createDuration.fn = Duration.prototype;
createDuration.invalid = createInvalid$1;

function parseIso(inp, sign) {
  // We'd normally use ~~inp for this, but unfortunately it also
  // converts floats to ints.
  // inp may be undefined, so careful calling replace on it.
  var res = inp && parseFloat(inp.replace(',', '.')); // apply sign while we're at it

  return (isNaN(res) ? 0 : res) * sign;
}

function positiveMomentsDifference(base, other) {
  var res = {};
  res.months = other.month() - base.month() + (other.year() - base.year()) * 12;

  if (base.clone().add(res.months, 'M').isAfter(other)) {
    --res.months;
  }

  res.milliseconds = +other - +base.clone().add(res.months, 'M');
  return res;
}

function momentsDifference(base, other) {
  var res;

  if (!(base.isValid() && other.isValid())) {
    return {
      milliseconds: 0,
      months: 0
    };
  }

  other = cloneWithOffset(other, base);

  if (base.isBefore(other)) {
    res = positiveMomentsDifference(base, other);
  } else {
    res = positiveMomentsDifference(other, base);
    res.milliseconds = -res.milliseconds;
    res.months = -res.months;
  }

  return res;
}

function createAdder(direction, name) {
  return function (val, period) {
    var dur, tmp; //invert the arguments, but complain about it

    if (period !== null && !isNaN(+period)) {
      deprecateSimple(name, 'moment().' + name + '(period, number) is deprecated. Please use moment().' + name + '(number, period). ' + 'See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info.');
      tmp = val;
      val = period;
      period = tmp;
    }

    val = typeof val === 'string' ? +val : val;
    dur = createDuration(val, period);
    addSubtract(this, dur, direction);
    return this;
  };
}

function addSubtract(mom, duration, isAdding, updateOffset) {
  var milliseconds = duration._milliseconds,
      days = absRound(duration._days),
      months = absRound(duration._months);

  if (!mom.isValid()) {
    // No op
    return;
  }

  updateOffset = updateOffset == null ? true : updateOffset;

  if (months) {
    setMonth(mom, get(mom, 'Month') + months * isAdding);
  }

  if (days) {
    set$1(mom, 'Date', get(mom, 'Date') + days * isAdding);
  }

  if (milliseconds) {
    mom._d.setTime(mom._d.valueOf() + milliseconds * isAdding);
  }

  if (updateOffset) {
    hooks.updateOffset(mom, days || months);
  }
}
var add = createAdder(1, 'add');
var subtract = createAdder(-1, 'subtract');

function getCalendarFormat(myMoment, now) {
  var diff = myMoment.diff(now, 'days', true);
  return diff < -6 ? 'sameElse' : diff < -1 ? 'lastWeek' : diff < 0 ? 'lastDay' : diff < 1 ? 'sameDay' : diff < 2 ? 'nextDay' : diff < 7 ? 'nextWeek' : 'sameElse';
}
function calendar$1(time, formats) {
  // We want to compare the start of today, vs this.
  // Getting start-of-today depends on whether we're local/utc/offset or not.
  var now = time || createLocal(),
      sod = cloneWithOffset(now, this).startOf('day'),
      format = hooks.calendarFormat(this, sod) || 'sameElse';
  var output = formats && (isFunction(formats[format]) ? formats[format].call(this, now) : formats[format]);
  return this.format(output || this.localeData().calendar(format, this, createLocal(now)));
}

function clone() {
  return new Moment(this);
}

function isAfter(input, units) {
  var localInput = isMoment(input) ? input : createLocal(input);

  if (!(this.isValid() && localInput.isValid())) {
    return false;
  }

  units = normalizeUnits(units) || 'millisecond';

  if (units === 'millisecond') {
    return this.valueOf() > localInput.valueOf();
  } else {
    return localInput.valueOf() < this.clone().startOf(units).valueOf();
  }
}
function isBefore(input, units) {
  var localInput = isMoment(input) ? input : createLocal(input);

  if (!(this.isValid() && localInput.isValid())) {
    return false;
  }

  units = normalizeUnits(units) || 'millisecond';

  if (units === 'millisecond') {
    return this.valueOf() < localInput.valueOf();
  } else {
    return this.clone().endOf(units).valueOf() < localInput.valueOf();
  }
}
function isBetween(from, to, units, inclusivity) {
  var localFrom = isMoment(from) ? from : createLocal(from),
      localTo = isMoment(to) ? to : createLocal(to);

  if (!(this.isValid() && localFrom.isValid() && localTo.isValid())) {
    return false;
  }

  inclusivity = inclusivity || '()';
  return (inclusivity[0] === '(' ? this.isAfter(localFrom, units) : !this.isBefore(localFrom, units)) && (inclusivity[1] === ')' ? this.isBefore(localTo, units) : !this.isAfter(localTo, units));
}
function isSame(input, units) {
  var localInput = isMoment(input) ? input : createLocal(input),
      inputMs;

  if (!(this.isValid() && localInput.isValid())) {
    return false;
  }

  units = normalizeUnits(units) || 'millisecond';

  if (units === 'millisecond') {
    return this.valueOf() === localInput.valueOf();
  } else {
    inputMs = localInput.valueOf();
    return this.clone().startOf(units).valueOf() <= inputMs && inputMs <= this.clone().endOf(units).valueOf();
  }
}
function isSameOrAfter(input, units) {
  return this.isSame(input, units) || this.isAfter(input, units);
}
function isSameOrBefore(input, units) {
  return this.isSame(input, units) || this.isBefore(input, units);
}

function diff(input, units, asFloat) {
  var that, zoneDelta, output;

  if (!this.isValid()) {
    return NaN;
  }

  that = cloneWithOffset(input, this);

  if (!that.isValid()) {
    return NaN;
  }

  zoneDelta = (that.utcOffset() - this.utcOffset()) * 6e4;
  units = normalizeUnits(units);

  switch (units) {
    case 'year':
      output = monthDiff(this, that) / 12;
      break;

    case 'month':
      output = monthDiff(this, that);
      break;

    case 'quarter':
      output = monthDiff(this, that) / 3;
      break;

    case 'second':
      output = (this - that) / 1e3;
      break;
    // 1000

    case 'minute':
      output = (this - that) / 6e4;
      break;
    // 1000 * 60

    case 'hour':
      output = (this - that) / 36e5;
      break;
    // 1000 * 60 * 60

    case 'day':
      output = (this - that - zoneDelta) / 864e5;
      break;
    // 1000 * 60 * 60 * 24, negate dst

    case 'week':
      output = (this - that - zoneDelta) / 6048e5;
      break;
    // 1000 * 60 * 60 * 24 * 7, negate dst

    default:
      output = this - that;
  }

  return asFloat ? output : absFloor(output);
}

function monthDiff(a, b) {
  // difference in months
  var wholeMonthDiff = (b.year() - a.year()) * 12 + (b.month() - a.month()),
      // b is in (anchor - 1 month, anchor + 1 month)
  anchor = a.clone().add(wholeMonthDiff, 'months'),
      anchor2,
      adjust;

  if (b - anchor < 0) {
    anchor2 = a.clone().add(wholeMonthDiff - 1, 'months'); // linear across the month

    adjust = (b - anchor) / (anchor - anchor2);
  } else {
    anchor2 = a.clone().add(wholeMonthDiff + 1, 'months'); // linear across the month

    adjust = (b - anchor) / (anchor2 - anchor);
  } //check for negative zero, return zero if negative zero


  return -(wholeMonthDiff + adjust) || 0;
}

hooks.defaultFormat = 'YYYY-MM-DDTHH:mm:ssZ';
hooks.defaultFormatUtc = 'YYYY-MM-DDTHH:mm:ss[Z]';
function toString() {
  return this.clone().locale('en').format('ddd MMM DD YYYY HH:mm:ss [GMT]ZZ');
}
function toISOString(keepOffset) {
  if (!this.isValid()) {
    return null;
  }

  var utc = keepOffset !== true;
  var m = utc ? this.clone().utc() : this;

  if (m.year() < 0 || m.year() > 9999) {
    return formatMoment(m, utc ? 'YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]' : 'YYYYYY-MM-DD[T]HH:mm:ss.SSSZ');
  }

  if (isFunction(Date.prototype.toISOString)) {
    // native implementation is ~50x faster, use it when we can
    if (utc) {
      return this.toDate().toISOString();
    } else {
      return new Date(this.valueOf() + this.utcOffset() * 60 * 1000).toISOString().replace('Z', formatMoment(m, 'Z'));
    }
  }

  return formatMoment(m, utc ? 'YYYY-MM-DD[T]HH:mm:ss.SSS[Z]' : 'YYYY-MM-DD[T]HH:mm:ss.SSSZ');
}
/**
 * Return a human readable representation of a moment that can
 * also be evaluated to get a new moment which is the same
 *
 * @link https://nodejs.org/dist/latest/docs/api/util.html#util_custom_inspect_function_on_objects
 */

function inspect() {
  if (!this.isValid()) {
    return 'moment.invalid(/* ' + this._i + ' */)';
  }

  var func = 'moment';
  var zone = '';

  if (!this.isLocal()) {
    func = this.utcOffset() === 0 ? 'moment.utc' : 'moment.parseZone';
    zone = 'Z';
  }

  var prefix = '[' + func + '("]';
  var year = 0 <= this.year() && this.year() <= 9999 ? 'YYYY' : 'YYYYYY';
  var datetime = '-MM-DD[T]HH:mm:ss.SSS';
  var suffix = zone + '[")]';
  return this.format(prefix + year + datetime + suffix);
}
function format(inputString) {
  if (!inputString) {
    inputString = this.isUtc() ? hooks.defaultFormatUtc : hooks.defaultFormat;
  }

  var output = formatMoment(this, inputString);
  return this.localeData().postformat(output);
}

function from(time, withoutSuffix) {
  if (this.isValid() && (isMoment(time) && time.isValid() || createLocal(time).isValid())) {
    return createDuration({
      to: this,
      from: time
    }).locale(this.locale()).humanize(!withoutSuffix);
  } else {
    return this.localeData().invalidDate();
  }
}
function fromNow(withoutSuffix) {
  return this.from(createLocal(), withoutSuffix);
}

function to(time, withoutSuffix) {
  if (this.isValid() && (isMoment(time) && time.isValid() || createLocal(time).isValid())) {
    return createDuration({
      from: this,
      to: time
    }).locale(this.locale()).humanize(!withoutSuffix);
  } else {
    return this.localeData().invalidDate();
  }
}
function toNow(withoutSuffix) {
  return this.to(createLocal(), withoutSuffix);
}

// instance.  Otherwise, it will return the locale configuration
// variables for this instance.

function locale(key) {
  var newLocaleData;

  if (key === undefined) {
    return this._locale._abbr;
  } else {
    newLocaleData = getLocale(key);

    if (newLocaleData != null) {
      this._locale = newLocaleData;
    }

    return this;
  }
}
var lang = deprecate('moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.', function (key) {
  if (key === undefined) {
    return this.localeData();
  } else {
    return this.locale(key);
  }
});
function localeData() {
  return this._locale;
}

var MS_PER_SECOND = 1000;
var MS_PER_MINUTE = 60 * MS_PER_SECOND;
var MS_PER_HOUR = 60 * MS_PER_MINUTE;
var MS_PER_400_YEARS = (365 * 400 + 97) * 24 * MS_PER_HOUR; // actual modulo - handles negative numbers (for dates before 1970):

function mod$1(dividend, divisor) {
  return (dividend % divisor + divisor) % divisor;
}

function localStartOfDate(y, m, d) {
  // the date constructor remaps years 0-99 to 1900-1999
  if (y < 100 && y >= 0) {
    // preserve leap years using a full 400 year cycle, then reset
    return new Date(y + 400, m, d) - MS_PER_400_YEARS;
  } else {
    return new Date(y, m, d).valueOf();
  }
}

function utcStartOfDate(y, m, d) {
  // Date.UTC remaps years 0-99 to 1900-1999
  if (y < 100 && y >= 0) {
    // preserve leap years using a full 400 year cycle, then reset
    return Date.UTC(y + 400, m, d) - MS_PER_400_YEARS;
  } else {
    return Date.UTC(y, m, d);
  }
}

function startOf(units) {
  var time;
  units = normalizeUnits(units);

  if (units === undefined || units === 'millisecond' || !this.isValid()) {
    return this;
  }

  var startOfDate = this._isUTC ? utcStartOfDate : localStartOfDate;

  switch (units) {
    case 'year':
      time = startOfDate(this.year(), 0, 1);
      break;

    case 'quarter':
      time = startOfDate(this.year(), this.month() - this.month() % 3, 1);
      break;

    case 'month':
      time = startOfDate(this.year(), this.month(), 1);
      break;

    case 'week':
      time = startOfDate(this.year(), this.month(), this.date() - this.weekday());
      break;

    case 'isoWeek':
      time = startOfDate(this.year(), this.month(), this.date() - (this.isoWeekday() - 1));
      break;

    case 'day':
    case 'date':
      time = startOfDate(this.year(), this.month(), this.date());
      break;

    case 'hour':
      time = this._d.valueOf();
      time -= mod$1(time + (this._isUTC ? 0 : this.utcOffset() * MS_PER_MINUTE), MS_PER_HOUR);
      break;

    case 'minute':
      time = this._d.valueOf();
      time -= mod$1(time, MS_PER_MINUTE);
      break;

    case 'second':
      time = this._d.valueOf();
      time -= mod$1(time, MS_PER_SECOND);
      break;
  }

  this._d.setTime(time);

  hooks.updateOffset(this, true);
  return this;
}
function endOf(units) {
  var time;
  units = normalizeUnits(units);

  if (units === undefined || units === 'millisecond' || !this.isValid()) {
    return this;
  }

  var startOfDate = this._isUTC ? utcStartOfDate : localStartOfDate;

  switch (units) {
    case 'year':
      time = startOfDate(this.year() + 1, 0, 1) - 1;
      break;

    case 'quarter':
      time = startOfDate(this.year(), this.month() - this.month() % 3 + 3, 1) - 1;
      break;

    case 'month':
      time = startOfDate(this.year(), this.month() + 1, 1) - 1;
      break;

    case 'week':
      time = startOfDate(this.year(), this.month(), this.date() - this.weekday() + 7) - 1;
      break;

    case 'isoWeek':
      time = startOfDate(this.year(), this.month(), this.date() - (this.isoWeekday() - 1) + 7) - 1;
      break;

    case 'day':
    case 'date':
      time = startOfDate(this.year(), this.month(), this.date() + 1) - 1;
      break;

    case 'hour':
      time = this._d.valueOf();
      time += MS_PER_HOUR - mod$1(time + (this._isUTC ? 0 : this.utcOffset() * MS_PER_MINUTE), MS_PER_HOUR) - 1;
      break;

    case 'minute':
      time = this._d.valueOf();
      time += MS_PER_MINUTE - mod$1(time, MS_PER_MINUTE) - 1;
      break;

    case 'second':
      time = this._d.valueOf();
      time += MS_PER_SECOND - mod$1(time, MS_PER_SECOND) - 1;
      break;
  }

  this._d.setTime(time);

  hooks.updateOffset(this, true);
  return this;
}

function valueOf() {
  return this._d.valueOf() - (this._offset || 0) * 60000;
}
function unix() {
  return Math.floor(this.valueOf() / 1000);
}
function toDate() {
  return new Date(this.valueOf());
}
function toArray() {
  var m = this;
  return [m.year(), m.month(), m.date(), m.hour(), m.minute(), m.second(), m.millisecond()];
}
function toObject() {
  var m = this;
  return {
    years: m.year(),
    months: m.month(),
    date: m.date(),
    hours: m.hours(),
    minutes: m.minutes(),
    seconds: m.seconds(),
    milliseconds: m.milliseconds()
  };
}
function toJSON() {
  // new Date(NaN).toJSON() === null
  return this.isValid() ? this.toISOString() : null;
}

function isValid$2() {
  return isValid(this);
}
function parsingFlags() {
  return extend({}, getParsingFlags(this));
}
function invalidAt() {
  return getParsingFlags(this).overflow;
}

function creationData() {
  return {
    input: this._i,
    format: this._f,
    locale: this._locale,
    isUTC: this._isUTC,
    strict: this._strict
  };
}

addFormatToken(0, ['gg', 2], 0, function () {
  return this.weekYear() % 100;
});
addFormatToken(0, ['GG', 2], 0, function () {
  return this.isoWeekYear() % 100;
});

function addWeekYearFormatToken(token, getter) {
  addFormatToken(0, [token, token.length], 0, getter);
}

addWeekYearFormatToken('gggg', 'weekYear');
addWeekYearFormatToken('ggggg', 'weekYear');
addWeekYearFormatToken('GGGG', 'isoWeekYear');
addWeekYearFormatToken('GGGGG', 'isoWeekYear'); // ALIASES

addUnitAlias('weekYear', 'gg');
addUnitAlias('isoWeekYear', 'GG'); // PRIORITY

addUnitPriority('weekYear', 1);
addUnitPriority('isoWeekYear', 1); // PARSING

addRegexToken('G', matchSigned);
addRegexToken('g', matchSigned);
addRegexToken('GG', match1to2, match2);
addRegexToken('gg', match1to2, match2);
addRegexToken('GGGG', match1to4, match4);
addRegexToken('gggg', match1to4, match4);
addRegexToken('GGGGG', match1to6, match6);
addRegexToken('ggggg', match1to6, match6);
addWeekParseToken(['gggg', 'ggggg', 'GGGG', 'GGGGG'], function (input, week, config, token) {
  week[token.substr(0, 2)] = toInt(input);
});
addWeekParseToken(['gg', 'GG'], function (input, week, config, token) {
  week[token] = hooks.parseTwoDigitYear(input);
}); // MOMENTS

function getSetWeekYear(input) {
  return getSetWeekYearHelper.call(this, input, this.week(), this.weekday(), this.localeData()._week.dow, this.localeData()._week.doy);
}
function getSetISOWeekYear(input) {
  return getSetWeekYearHelper.call(this, input, this.isoWeek(), this.isoWeekday(), 1, 4);
}
function getISOWeeksInYear() {
  return weeksInYear(this.year(), 1, 4);
}
function getWeeksInYear() {
  var weekInfo = this.localeData()._week;

  return weeksInYear(this.year(), weekInfo.dow, weekInfo.doy);
}

function getSetWeekYearHelper(input, week, weekday, dow, doy) {
  var weeksTarget;

  if (input == null) {
    return weekOfYear(this, dow, doy).year;
  } else {
    weeksTarget = weeksInYear(input, dow, doy);

    if (week > weeksTarget) {
      week = weeksTarget;
    }

    return setWeekAll.call(this, input, week, weekday, dow, doy);
  }
}

function setWeekAll(weekYear, week, weekday, dow, doy) {
  var dayOfYearData = dayOfYearFromWeeks(weekYear, week, weekday, dow, doy),
      date = createUTCDate(dayOfYearData.year, 0, dayOfYearData.dayOfYear);
  this.year(date.getUTCFullYear());
  this.month(date.getUTCMonth());
  this.date(date.getUTCDate());
  return this;
}

addFormatToken('Q', 0, 'Qo', 'quarter'); // ALIASES

addUnitAlias('quarter', 'Q'); // PRIORITY

addUnitPriority('quarter', 7); // PARSING

addRegexToken('Q', match1);
addParseToken('Q', function (input, array) {
  array[MONTH] = (toInt(input) - 1) * 3;
}); // MOMENTS

function getSetQuarter(input) {
  return input == null ? Math.ceil((this.month() + 1) / 3) : this.month((input - 1) * 3 + this.month() % 3);
}

addFormatToken('D', ['DD', 2], 'Do', 'date'); // ALIASES

addUnitAlias('date', 'D'); // PRIORITY

addUnitPriority('date', 9); // PARSING

addRegexToken('D', match1to2);
addRegexToken('DD', match1to2, match2);
addRegexToken('Do', function (isStrict, locale) {
  // TODO: Remove "ordinalParse" fallback in next major release.
  return isStrict ? locale._dayOfMonthOrdinalParse || locale._ordinalParse : locale._dayOfMonthOrdinalParseLenient;
});
addParseToken(['D', 'DD'], DATE);
addParseToken('Do', function (input, array) {
  array[DATE] = toInt(input.match(match1to2)[0]);
}); // MOMENTS

var getSetDayOfMonth = makeGetSet('Date', true);

addFormatToken('DDD', ['DDDD', 3], 'DDDo', 'dayOfYear'); // ALIASES

addUnitAlias('dayOfYear', 'DDD'); // PRIORITY

addUnitPriority('dayOfYear', 4); // PARSING

addRegexToken('DDD', match1to3);
addRegexToken('DDDD', match3);
addParseToken(['DDD', 'DDDD'], function (input, array, config) {
  config._dayOfYear = toInt(input);
}); // HELPERS
// MOMENTS

function getSetDayOfYear(input) {
  var dayOfYear = Math.round((this.clone().startOf('day') - this.clone().startOf('year')) / 864e5) + 1;
  return input == null ? dayOfYear : this.add(input - dayOfYear, 'd');
}

addFormatToken('m', ['mm', 2], 0, 'minute'); // ALIASES

addUnitAlias('minute', 'm'); // PRIORITY

addUnitPriority('minute', 14); // PARSING

addRegexToken('m', match1to2);
addRegexToken('mm', match1to2, match2);
addParseToken(['m', 'mm'], MINUTE); // MOMENTS

var getSetMinute = makeGetSet('Minutes', false);

addFormatToken('s', ['ss', 2], 0, 'second'); // ALIASES

addUnitAlias('second', 's'); // PRIORITY

addUnitPriority('second', 15); // PARSING

addRegexToken('s', match1to2);
addRegexToken('ss', match1to2, match2);
addParseToken(['s', 'ss'], SECOND); // MOMENTS

var getSetSecond = makeGetSet('Seconds', false);

addFormatToken('S', 0, 0, function () {
  return ~~(this.millisecond() / 100);
});
addFormatToken(0, ['SS', 2], 0, function () {
  return ~~(this.millisecond() / 10);
});
addFormatToken(0, ['SSS', 3], 0, 'millisecond');
addFormatToken(0, ['SSSS', 4], 0, function () {
  return this.millisecond() * 10;
});
addFormatToken(0, ['SSSSS', 5], 0, function () {
  return this.millisecond() * 100;
});
addFormatToken(0, ['SSSSSS', 6], 0, function () {
  return this.millisecond() * 1000;
});
addFormatToken(0, ['SSSSSSS', 7], 0, function () {
  return this.millisecond() * 10000;
});
addFormatToken(0, ['SSSSSSSS', 8], 0, function () {
  return this.millisecond() * 100000;
});
addFormatToken(0, ['SSSSSSSSS', 9], 0, function () {
  return this.millisecond() * 1000000;
}); // ALIASES

addUnitAlias('millisecond', 'ms'); // PRIORITY

addUnitPriority('millisecond', 16); // PARSING

addRegexToken('S', match1to3, match1);
addRegexToken('SS', match1to3, match2);
addRegexToken('SSS', match1to3, match3);
var token;

for (token = 'SSSS'; token.length <= 9; token += 'S') {
  addRegexToken(token, matchUnsigned);
}

function parseMs(input, array) {
  array[MILLISECOND] = toInt(('0.' + input) * 1000);
}

for (token = 'S'; token.length <= 9; token += 'S') {
  addParseToken(token, parseMs);
} // MOMENTS


var getSetMillisecond = makeGetSet('Milliseconds', false);

addFormatToken('z', 0, 0, 'zoneAbbr');
addFormatToken('zz', 0, 0, 'zoneName'); // MOMENTS

function getZoneAbbr() {
  return this._isUTC ? 'UTC' : '';
}
function getZoneName() {
  return this._isUTC ? 'Coordinated Universal Time' : '';
}

var proto = Moment.prototype;
proto.add = add;
proto.calendar = calendar$1;
proto.clone = clone;
proto.diff = diff;
proto.endOf = endOf;
proto.format = format;
proto.from = from;
proto.fromNow = fromNow;
proto.to = to;
proto.toNow = toNow;
proto.get = stringGet;
proto.invalidAt = invalidAt;
proto.isAfter = isAfter;
proto.isBefore = isBefore;
proto.isBetween = isBetween;
proto.isSame = isSame;
proto.isSameOrAfter = isSameOrAfter;
proto.isSameOrBefore = isSameOrBefore;
proto.isValid = isValid$2;
proto.lang = lang;
proto.locale = locale;
proto.localeData = localeData;
proto.max = prototypeMax;
proto.min = prototypeMin;
proto.parsingFlags = parsingFlags;
proto.set = stringSet;
proto.startOf = startOf;
proto.subtract = subtract;
proto.toArray = toArray;
proto.toObject = toObject;
proto.toDate = toDate;
proto.toISOString = toISOString;
proto.inspect = inspect;
proto.toJSON = toJSON;
proto.toString = toString;
proto.unix = unix;
proto.valueOf = valueOf;
proto.creationData = creationData; // Year
proto.year = getSetYear;
proto.isLeapYear = getIsLeapYear; // Week Year
proto.weekYear = getSetWeekYear;
proto.isoWeekYear = getSetISOWeekYear; // Quarter
proto.quarter = proto.quarters = getSetQuarter; // Month
proto.month = getSetMonth;
proto.daysInMonth = getDaysInMonth; // Week
proto.week = proto.weeks = getSetWeek;
proto.isoWeek = proto.isoWeeks = getSetISOWeek;
proto.weeksInYear = getWeeksInYear;
proto.isoWeeksInYear = getISOWeeksInYear; // Day
proto.date = getSetDayOfMonth;
proto.day = proto.days = getSetDayOfWeek;
proto.weekday = getSetLocaleDayOfWeek;
proto.isoWeekday = getSetISODayOfWeek;
proto.dayOfYear = getSetDayOfYear; // Hour
proto.hour = proto.hours = getSetHour; // Minute
proto.minute = proto.minutes = getSetMinute; // Second
proto.second = proto.seconds = getSetSecond; // Millisecond
proto.millisecond = proto.milliseconds = getSetMillisecond; // Offset
proto.utcOffset = getSetOffset;
proto.utc = setOffsetToUTC;
proto.local = setOffsetToLocal;
proto.parseZone = setOffsetToParsedOffset;
proto.hasAlignedHourOffset = hasAlignedHourOffset;
proto.isDST = isDaylightSavingTime;
proto.isLocal = isLocal;
proto.isUtcOffset = isUtcOffset;
proto.isUtc = isUtc;
proto.isUTC = isUtc; // Timezone
proto.zoneAbbr = getZoneAbbr;
proto.zoneName = getZoneName; // Deprecations
proto.dates = deprecate('dates accessor is deprecated. Use date instead.', getSetDayOfMonth);
proto.months = deprecate('months accessor is deprecated. Use month instead', getSetMonth);
proto.years = deprecate('years accessor is deprecated. Use year instead', getSetYear);
proto.zone = deprecate('moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/', getSetZone);
proto.isDSTShifted = deprecate('isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information', isDaylightSavingTimeShifted);

function createUnix(input) {
  return createLocal(input * 1000);
}

function createInZone() {
  return createLocal.apply(null, arguments).parseZone();
}

function preParsePostFormat(string) {
  return string;
}

var proto$1 = Locale.prototype;
proto$1.calendar = calendar;
proto$1.longDateFormat = longDateFormat;
proto$1.invalidDate = invalidDate;
proto$1.ordinal = ordinal;
proto$1.preparse = preParsePostFormat;
proto$1.postformat = preParsePostFormat;
proto$1.relativeTime = relativeTime;
proto$1.pastFuture = pastFuture;
proto$1.set = set; // Month
proto$1.months = localeMonths;
proto$1.monthsShort = localeMonthsShort;
proto$1.monthsParse = localeMonthsParse;
proto$1.monthsRegex = monthsRegex;
proto$1.monthsShortRegex = monthsShortRegex; // Week
proto$1.week = localeWeek;
proto$1.firstDayOfYear = localeFirstDayOfYear;
proto$1.firstDayOfWeek = localeFirstDayOfWeek; // Day of Week
proto$1.weekdays = localeWeekdays;
proto$1.weekdaysMin = localeWeekdaysMin;
proto$1.weekdaysShort = localeWeekdaysShort;
proto$1.weekdaysParse = localeWeekdaysParse;
proto$1.weekdaysRegex = weekdaysRegex;
proto$1.weekdaysShortRegex = weekdaysShortRegex;
proto$1.weekdaysMinRegex = weekdaysMinRegex; // Hours
proto$1.isPM = localeIsPM;
proto$1.meridiem = localeMeridiem;

function get$1(format, index, field, setter) {
  var locale = getLocale();
  var utc = createUTC().set(setter, index);
  return locale[field](utc, format);
}

function listMonthsImpl(format, index, field) {
  if (isNumber(format)) {
    index = format;
    format = undefined;
  }

  format = format || '';

  if (index != null) {
    return get$1(format, index, field, 'month');
  }

  var i;
  var out = [];

  for (i = 0; i < 12; i++) {
    out[i] = get$1(format, i, field, 'month');
  }

  return out;
} // ()
// (5)
// (fmt, 5)
// (fmt)
// (true)
// (true, 5)
// (true, fmt, 5)
// (true, fmt)


function listWeekdaysImpl(localeSorted, format, index, field) {
  if (typeof localeSorted === 'boolean') {
    if (isNumber(format)) {
      index = format;
      format = undefined;
    }

    format = format || '';
  } else {
    format = localeSorted;
    index = format;
    localeSorted = false;

    if (isNumber(format)) {
      index = format;
      format = undefined;
    }

    format = format || '';
  }

  var locale = getLocale(),
      shift = localeSorted ? locale._week.dow : 0;

  if (index != null) {
    return get$1(format, (index + shift) % 7, field, 'day');
  }

  var i;
  var out = [];

  for (i = 0; i < 7; i++) {
    out[i] = get$1(format, (i + shift) % 7, field, 'day');
  }

  return out;
}

function listMonths(format, index) {
  return listMonthsImpl(format, index, 'months');
}
function listMonthsShort(format, index) {
  return listMonthsImpl(format, index, 'monthsShort');
}
function listWeekdays(localeSorted, format, index) {
  return listWeekdaysImpl(localeSorted, format, index, 'weekdays');
}
function listWeekdaysShort(localeSorted, format, index) {
  return listWeekdaysImpl(localeSorted, format, index, 'weekdaysShort');
}
function listWeekdaysMin(localeSorted, format, index) {
  return listWeekdaysImpl(localeSorted, format, index, 'weekdaysMin');
}

getSetGlobalLocale('en', {
  dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
  ordinal: function (number) {
    var b = number % 10,
        output = toInt(number % 100 / 10) === 1 ? 'th' : b === 1 ? 'st' : b === 2 ? 'nd' : b === 3 ? 'rd' : 'th';
    return number + output;
  }
});

// Side effect imports
hooks.lang = deprecate('moment.lang is deprecated. Use moment.locale instead.', getSetGlobalLocale);
hooks.langData = deprecate('moment.langData is deprecated. Use moment.localeData instead.', getLocale);

var mathAbs = Math.abs;
function abs() {
  var data = this._data;
  this._milliseconds = mathAbs(this._milliseconds);
  this._days = mathAbs(this._days);
  this._months = mathAbs(this._months);
  data.milliseconds = mathAbs(data.milliseconds);
  data.seconds = mathAbs(data.seconds);
  data.minutes = mathAbs(data.minutes);
  data.hours = mathAbs(data.hours);
  data.months = mathAbs(data.months);
  data.years = mathAbs(data.years);
  return this;
}

function addSubtract$1(duration, input, value, direction) {
  var other = createDuration(input, value);
  duration._milliseconds += direction * other._milliseconds;
  duration._days += direction * other._days;
  duration._months += direction * other._months;
  return duration._bubble();
} // supports only 2.0-style add(1, 's') or add(duration)


function add$1(input, value) {
  return addSubtract$1(this, input, value, 1);
} // supports only 2.0-style subtract(1, 's') or subtract(duration)

function subtract$1(input, value) {
  return addSubtract$1(this, input, value, -1);
}

function absCeil(number) {
  if (number < 0) {
    return Math.floor(number);
  } else {
    return Math.ceil(number);
  }
}

function bubble() {
  var milliseconds = this._milliseconds;
  var days = this._days;
  var months = this._months;
  var data = this._data;
  var seconds, minutes, hours, years, monthsFromDays; // if we have a mix of positive and negative values, bubble down first
  // check: https://github.com/moment/moment/issues/2166

  if (!(milliseconds >= 0 && days >= 0 && months >= 0 || milliseconds <= 0 && days <= 0 && months <= 0)) {
    milliseconds += absCeil(monthsToDays(months) + days) * 864e5;
    days = 0;
    months = 0;
  } // The following code bubbles up values, see the tests for
  // examples of what that means.


  data.milliseconds = milliseconds % 1000;
  seconds = absFloor(milliseconds / 1000);
  data.seconds = seconds % 60;
  minutes = absFloor(seconds / 60);
  data.minutes = minutes % 60;
  hours = absFloor(minutes / 60);
  data.hours = hours % 24;
  days += absFloor(hours / 24); // convert days to months

  monthsFromDays = absFloor(daysToMonths(days));
  months += monthsFromDays;
  days -= absCeil(monthsToDays(monthsFromDays)); // 12 months -> 1 year

  years = absFloor(months / 12);
  months %= 12;
  data.days = days;
  data.months = months;
  data.years = years;
  return this;
}
function daysToMonths(days) {
  // 400 years have 146097 days (taking into account leap year rules)
  // 400 years have 12 months === 4800
  return days * 4800 / 146097;
}
function monthsToDays(months) {
  // the reverse of daysToMonths
  return months * 146097 / 4800;
}

function as(units) {
  if (!this.isValid()) {
    return NaN;
  }

  var days;
  var months;
  var milliseconds = this._milliseconds;
  units = normalizeUnits(units);

  if (units === 'month' || units === 'quarter' || units === 'year') {
    days = this._days + milliseconds / 864e5;
    months = this._months + daysToMonths(days);

    switch (units) {
      case 'month':
        return months;

      case 'quarter':
        return months / 3;

      case 'year':
        return months / 12;
    }
  } else {
    // handle milliseconds separately because of floating point math errors (issue #1867)
    days = this._days + Math.round(monthsToDays(this._months));

    switch (units) {
      case 'week':
        return days / 7 + milliseconds / 6048e5;

      case 'day':
        return days + milliseconds / 864e5;

      case 'hour':
        return days * 24 + milliseconds / 36e5;

      case 'minute':
        return days * 1440 + milliseconds / 6e4;

      case 'second':
        return days * 86400 + milliseconds / 1000;
      // Math.floor prevents floating point math errors here

      case 'millisecond':
        return Math.floor(days * 864e5) + milliseconds;

      default:
        throw new Error('Unknown unit ' + units);
    }
  }
} // TODO: Use this.as('ms')?

function valueOf$1() {
  if (!this.isValid()) {
    return NaN;
  }

  return this._milliseconds + this._days * 864e5 + this._months % 12 * 2592e6 + toInt(this._months / 12) * 31536e6;
}

function makeAs(alias) {
  return function () {
    return this.as(alias);
  };
}

var asMilliseconds = makeAs('ms');
var asSeconds = makeAs('s');
var asMinutes = makeAs('m');
var asHours = makeAs('h');
var asDays = makeAs('d');
var asWeeks = makeAs('w');
var asMonths = makeAs('M');
var asQuarters = makeAs('Q');
var asYears = makeAs('y');

function clone$1() {
  return createDuration(this);
}

function get$2(units) {
  units = normalizeUnits(units);
  return this.isValid() ? this[units + 's']() : NaN;
}

function makeGetter(name) {
  return function () {
    return this.isValid() ? this._data[name] : NaN;
  };
}

var milliseconds = makeGetter('milliseconds');
var seconds = makeGetter('seconds');
var minutes = makeGetter('minutes');
var hours = makeGetter('hours');
var days = makeGetter('days');
var months = makeGetter('months');
var years = makeGetter('years');
function weeks() {
  return absFloor(this.days() / 7);
}

var round = Math.round;
var thresholds = {
  ss: 44,
  // a few seconds to seconds
  s: 45,
  // seconds to minute
  m: 45,
  // minutes to hour
  h: 22,
  // hours to day
  d: 26,
  // days to month
  M: 11 // months to year

}; // helper function for moment.fn.from, moment.fn.fromNow, and moment.duration.fn.humanize

function substituteTimeAgo(string, number, withoutSuffix, isFuture, locale) {
  return locale.relativeTime(number || 1, !!withoutSuffix, string, isFuture);
}

function relativeTime$1(posNegDuration, withoutSuffix, locale) {
  var duration = createDuration(posNegDuration).abs();
  var seconds = round(duration.as('s'));
  var minutes = round(duration.as('m'));
  var hours = round(duration.as('h'));
  var days = round(duration.as('d'));
  var months = round(duration.as('M'));
  var years = round(duration.as('y'));
  var a = seconds <= thresholds.ss && ['s', seconds] || seconds < thresholds.s && ['ss', seconds] || minutes <= 1 && ['m'] || minutes < thresholds.m && ['mm', minutes] || hours <= 1 && ['h'] || hours < thresholds.h && ['hh', hours] || days <= 1 && ['d'] || days < thresholds.d && ['dd', days] || months <= 1 && ['M'] || months < thresholds.M && ['MM', months] || years <= 1 && ['y'] || ['yy', years];
  a[2] = withoutSuffix;
  a[3] = +posNegDuration > 0;
  a[4] = locale;
  return substituteTimeAgo.apply(null, a);
} // This function allows you to set the rounding function for relative time strings


function getSetRelativeTimeRounding(roundingFunction) {
  if (roundingFunction === undefined) {
    return round;
  }

  if (typeof roundingFunction === 'function') {
    round = roundingFunction;
    return true;
  }

  return false;
} // This function allows you to set a threshold for relative time strings

function getSetRelativeTimeThreshold(threshold, limit) {
  if (thresholds[threshold] === undefined) {
    return false;
  }

  if (limit === undefined) {
    return thresholds[threshold];
  }

  thresholds[threshold] = limit;

  if (threshold === 's') {
    thresholds.ss = limit - 1;
  }

  return true;
}
function humanize(withSuffix) {
  if (!this.isValid()) {
    return this.localeData().invalidDate();
  }

  var locale = this.localeData();
  var output = relativeTime$1(this, !withSuffix, locale);

  if (withSuffix) {
    output = locale.pastFuture(+this, output);
  }

  return locale.postformat(output);
}

var abs$1 = Math.abs;

function sign(x) {
  return (x > 0) - (x < 0) || +x;
}

function toISOString$1() {
  // for ISO strings we do not use the normal bubbling rules:
  //  * milliseconds bubble up until they become hours
  //  * days do not bubble at all
  //  * months bubble up until they become years
  // This is because there is no context-free conversion between hours and days
  // (think of clock changes)
  // and also not between days and months (28-31 days per month)
  if (!this.isValid()) {
    return this.localeData().invalidDate();
  }

  var seconds = abs$1(this._milliseconds) / 1000;
  var days = abs$1(this._days);
  var months = abs$1(this._months);
  var minutes, hours, years; // 3600 seconds -> 60 minutes -> 1 hour

  minutes = absFloor(seconds / 60);
  hours = absFloor(minutes / 60);
  seconds %= 60;
  minutes %= 60; // 12 months -> 1 year

  years = absFloor(months / 12);
  months %= 12; // inspired by https://github.com/dordille/moment-isoduration/blob/master/moment.isoduration.js

  var Y = years;
  var M = months;
  var D = days;
  var h = hours;
  var m = minutes;
  var s = seconds ? seconds.toFixed(3).replace(/\.?0+$/, '') : '';
  var total = this.asSeconds();

  if (!total) {
    // this is the same as C#'s (Noda) and python (isodate)...
    // but not other JS (goog.date)
    return 'P0D';
  }

  var totalSign = total < 0 ? '-' : '';
  var ymSign = sign(this._months) !== sign(total) ? '-' : '';
  var daysSign = sign(this._days) !== sign(total) ? '-' : '';
  var hmsSign = sign(this._milliseconds) !== sign(total) ? '-' : '';
  return totalSign + 'P' + (Y ? ymSign + Y + 'Y' : '') + (M ? ymSign + M + 'M' : '') + (D ? daysSign + D + 'D' : '') + (h || m || s ? 'T' : '') + (h ? hmsSign + h + 'H' : '') + (m ? hmsSign + m + 'M' : '') + (s ? hmsSign + s + 'S' : '');
}

var proto$2 = Duration.prototype;
proto$2.isValid = isValid$1;
proto$2.abs = abs;
proto$2.add = add$1;
proto$2.subtract = subtract$1;
proto$2.as = as;
proto$2.asMilliseconds = asMilliseconds;
proto$2.asSeconds = asSeconds;
proto$2.asMinutes = asMinutes;
proto$2.asHours = asHours;
proto$2.asDays = asDays;
proto$2.asWeeks = asWeeks;
proto$2.asMonths = asMonths;
proto$2.asQuarters = asQuarters;
proto$2.asYears = asYears;
proto$2.valueOf = valueOf$1;
proto$2._bubble = bubble;
proto$2.clone = clone$1;
proto$2.get = get$2;
proto$2.milliseconds = milliseconds;
proto$2.seconds = seconds;
proto$2.minutes = minutes;
proto$2.hours = hours;
proto$2.days = days;
proto$2.weeks = weeks;
proto$2.months = months;
proto$2.years = years;
proto$2.humanize = humanize;
proto$2.toISOString = toISOString$1;
proto$2.toString = toISOString$1;
proto$2.toJSON = toISOString$1;
proto$2.locale = locale;
proto$2.localeData = localeData; // Deprecations
proto$2.toIsoString = deprecate('toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)', toISOString$1);
proto$2.lang = lang;

// Side effect imports

addFormatToken('X', 0, 0, 'unix');
addFormatToken('x', 0, 0, 'valueOf'); // PARSING

addRegexToken('x', matchSigned);
addRegexToken('X', matchTimestamp);
addParseToken('X', function (input, array, config) {
  config._d = new Date(parseFloat(input, 10) * 1000);
});
addParseToken('x', function (input, array, config) {
  config._d = new Date(toInt(input));
});

// Side effect imports

//! moment.js
hooks.version = '2.24.0';
setHookCallback(createLocal);
hooks.fn = proto;
hooks.min = min;
hooks.max = max;
hooks.now = now;
hooks.utc = createUTC;
hooks.unix = createUnix;
hooks.months = listMonths;
hooks.isDate = isDate;
hooks.locale = getSetGlobalLocale;
hooks.invalid = createInvalid;
hooks.duration = createDuration;
hooks.isMoment = isMoment;
hooks.weekdays = listWeekdays;
hooks.parseZone = createInZone;
hooks.localeData = getLocale;
hooks.isDuration = isDuration;
hooks.monthsShort = listMonthsShort;
hooks.weekdaysMin = listWeekdaysMin;
hooks.defineLocale = defineLocale;
hooks.updateLocale = updateLocale;
hooks.locales = listLocales;
hooks.weekdaysShort = listWeekdaysShort;
hooks.normalizeUnits = normalizeUnits;
hooks.relativeTimeRounding = getSetRelativeTimeRounding;
hooks.relativeTimeThreshold = getSetRelativeTimeThreshold;
hooks.calendarFormat = getCalendarFormat;
hooks.prototype = proto; // currently HTML5 input type only supports 24-hour formats

hooks.HTML5_FMT = {
  DATETIME_LOCAL: 'YYYY-MM-DDTHH:mm',
  // <input type="datetime-local" />
  DATETIME_LOCAL_SECONDS: 'YYYY-MM-DDTHH:mm:ss',
  // <input type="datetime-local" step="1" />
  DATETIME_LOCAL_MS: 'YYYY-MM-DDTHH:mm:ss.SSS',
  // <input type="datetime-local" step="0.001" />
  DATE: 'YYYY-MM-DD',
  // <input type="date" />
  TIME: 'HH:mm',
  // <input type="time" />
  TIME_SECONDS: 'HH:mm:ss',
  // <input type="time" step="1" />
  TIME_MS: 'HH:mm:ss.SSS',
  // <input type="time" step="0.001" />
  WEEK: 'GGGG-[W]WW',
  // <input type="week" />
  MONTH: 'YYYY-MM' // <input type="month" />

};

function formatHoursAndMinutes(ms) {
  var duration = hooks.duration(ms);
  return hooks.utc(duration.as('milliseconds')).format('HH:mm');
}

function formatSeconds(ms) {
  var duration = hooks.duration(ms);
  return hooks.utc(duration.as('milliseconds')).format('ss');
}

var exampleCardCore = {
  formatHoursAndMinutes: formatHoursAndMinutes,
  formatSeconds: formatSeconds
};

var colorPalette = {
  black: "#151515",
  grey1: "#1d1d1d",
  grey2: "#252525",
  grey3: "#2e2e2e",
  grey4: "#373737",
  grey5: "#3f3f3f",
  grey6: "#505050",
  grey7: "#6a6a6a",
  grey8: "#838383",
  grey9: "#9d9d9d",
  grey10: "#b6b6b6",
  grey11: "#d0d0d0",
  grey12: "#e0e0e0",
  grey13: "#e9e9e9",
  grey14: "#f1f1f1",
  grey15: "#fafafa",
  white: "#ffffff",
  red1: "#801810",
  red2: "#da291c",
  red3: "#e53f33",
  red: "#da291c",
  redHover: "#e53f33",
  green1: "#377c1c",
  green2: "#439f1f",
  green3: "#5bb836",
  green4: "#7acd59",
  green5: "#bae1a2",
  green: "#439f1f",
  greenHover: "#5bb836",
  blue1: "#004062",
  blue2: "#1271b4",
  blue3: "#1482c8",
  blue4: "#1795dc",
  blue5: "#19a2eb",
  blue6: "#51bef1",
  blue: "blue3",
  blueHover: "blue4",
  yellow1: "#fbb000",
  yellow2: "#fac800",
  yellow3: "#fad342",
  yellow4: "#fdebaf",
  yellow: "yellow2",
  brown1: "#bd7019",
  brown2: "#e28a27",
  brown: "brown1",
  // Links
  link: "blue3",
  linkHover: "blue4",
  // Activities
  activityComplete: "green3",
  activityOther: "green5",
  activitySkipped: "grey4",
  $planColorRemaining: "white",
  // Rider Types
  roadRacer: "yellow1",
  road: "roadRacer",
  triathlete: "blue2",
  offRoad: "brown1",
  enthusiast: "green1",
  roadRacerHover: "yellow2",
  roadHover: "roadRacerHover",
  triathleteHover: "blue3",
  offRoadHover: "brown2",
  enthusiastHover: "green2",
  // PRs
  pr1: "blue1",
  pr2: "blue2",
  pr3: "blue6",
  // TSS
  tssIndoor: "green3",
  tssOutdoor: "green5",
  tssPlannedTr: "#bebebe",
  tssPlannedOther: "#dbdbdb",
  tssIndoorHover: "yellow3",
  tssOutdoorHover: "yellow4",
  tssFtp: "#777",
  tssAverage: "#a9a9a9",
  // Vendors
  strava: "#f74d00",
  garmin: "#0071c3",
  trainingPeaks: "#2b5882",
  dropbox: "#0061ff",
  // Misc
  primary: "red",
  success: "green",
  error: "red1",
  warning: "error",
  danger: "error",
  favorite: "yellow2",
  temp: "#da1ccd"
};

var primarySansSerifFontFamily = ["Proxima Nova", "Helvetica Neue", "Helvetica", "Arial", "sans-serif"];
var dark = {
  name: "dark",
  backgroundColor: colorPalette.grey2,
  emphases: {
    active: "rgba(255, 255, 255, 1)",
    "default": "rgba(255, 255, 255, .78)",
    muted: "rgba(255, 255, 255, .6)",
    disabled: "rgba(255, 255, 255, .32)",
    divider: "rgba(255, 255, 255 .1)"
  },
  colors: {
    background1: colorPalette.grey1,
    background2: colorPalette.grey2,
    background3: colorPalette.grey3,
    background4: colorPalette.grey4,
    primary: colorPalette.red2,
    secondary: colorPalette.grey3,
    danger: colorPalette.danger,
    success: colorPalette.green2,
    info: colorPalette.blue3,
    warning: colorPalette.warning,
    grey: "#dbdbdb",
    red: "#ff4147",
    orange: "#ff8449",
    yellow: "#f4d255",
    green: "#9ac977",
    blue: "#1890d1",
    lightblue: "#58cbf1",
    purple: "#ad04df",
    placeholder: '#da1ccd',
    strava: colorPalette.strava,
    garmin: colorPalette.garmin,
    trainingPeaks: colorPalette.trainingPeaks,
    dropbox: colorPalette.dropbox
  },
  typography: {
    heading1: {
      fontFamily: primarySansSerifFontFamily,
      fontSize: 40,
      lineHeight: 40 * 1.2,
      fontWeight: 700,
      letterSpacing: 0,
      textDecoration: "none",
      textTransform: "capitalize"
    },
    heading2: {
      fontFamily: primarySansSerifFontFamily,
      fontSize: 34,
      lineHeight: 34 * 1.2,
      fontWeight: 700,
      letterSpacing: 0,
      textDecoration: "none",
      textTransform: "capitalize"
    },
    heading3: {
      fontFamily: primarySansSerifFontFamily,
      fontSize: 27,
      lineHeight: 27 * 1.2,
      fontWeight: 700,
      letterSpacing: .2,
      textDecoration: "none",
      textTransform: "capitalize"
    },
    heading4: {
      fontFamily: primarySansSerifFontFamily,
      fontSize: 24,
      lineHeight: 24 * 1.2,
      fontWeight: 700,
      letterSpacing: 0.2,
      textDecoration: "none",
      textTransform: "capitalize"
    },
    heading5: {
      fontFamily: primarySansSerifFontFamily,
      fontSize: 18,
      lineHeight: 18 * 1.2,
      fontWeight: 700,
      letterSpacing: .2,
      textDecoration: "none",
      textTransform: "capitalize"
    },
    heading6: {
      fontFamily: primarySansSerifFontFamily,
      fontSize: 14,
      lineHeight: 14 * 1.2,
      fontWeight: 700,
      letterSpacing: 0.2,
      textDecoration: "none",
      textTransform: "capitalize"
    },
    heading7: {
      fontFamily: primarySansSerifFontFamily,
      fontSize: 12,
      lineHeight: 12 * 1.2,
      fontWeight: 700,
      letterSpacing: 0.2,
      textDecoration: "none",
      textTransform: "capitalize"
    },
    "paragraph-lead": {
      fontFamily: primarySansSerifFontFamily,
      fontSize: 24,
      lineHeight: 24 * 1.5,
      fontWeight: 600,
      letterSpacing: 0,
      textDecoration: "none",
      textTransform: "none"
    },
    paragraph: {
      fontFamily: primarySansSerifFontFamily,
      fontSize: 18,
      lineHeight: 18 * 1.5,
      fontWeight: 400,
      letterSpacing: 0,
      textDecoration: "none",
      textTransform: "none"
    },
    "paragraph--semibold": {
      fontFamily: primarySansSerifFontFamily,
      fontSize: 18,
      lineHeight: 18 * 1.5,
      fontWeight: 600,
      letterSpacing: 0,
      textDecoration: "none",
      textTransform: "none"
    },
    "paragraph-s": {
      fontFamily: primarySansSerifFontFamily,
      fontSize: 14,
      lineHeight: 14 * 1.5,
      fontWeight: 400,
      letterSpacing: 0,
      textDecoration: "none",
      textTransform: "none"
    },
    "paragraph-s--semibold": {
      fontFamily: primarySansSerifFontFamily,
      fontSize: 14,
      lineHeight: 14 * 1.5,
      fontWeight: 600,
      letterSpacing: 0,
      textDecoration: "none",
      textTransform: "none"
    },
    "paragraph-xs": {
      fontFamily: primarySansSerifFontFamily,
      fontSize: 12,
      lineHeight: 12 * 1.5,
      fontWeight: 400,
      letterSpacing: 0.2,
      textDecoration: "none",
      textTransform: "none"
    },
    "paragraph-xs--semibold": {
      fontFamily: primarySansSerifFontFamily,
      fontSize: 12,
      lineHeight: 12 * 1.5,
      fontWeight: 600,
      letterSpacing: 0.2,
      textDecoration: "none",
      textTransform: "none"
    },
    label: {
      fontFamily: primarySansSerifFontFamily,
      fontSize: 12,
      lineHeight: 12 * 1.2,
      fontWeight: 700,
      letterSpacing: 0.2,
      textDecoration: "none",
      textTransform: "uppercase"
    },
    "label-s": {
      fontFamily: primarySansSerifFontFamily,
      fontSize: 10,
      lineHeight: 10 * 1.2,
      fontWeight: 700,
      letterSpacing: 0.4,
      textDecoration: "none",
      textTransform: "uppercase"
    }
  },
  button: {
    contained: {
      primary: {
        backgroundColor: colorPalette.red,
        backgroundHoverColor: colorPalette.redHover,
        foregroundColor: colorPalette.white
      },
      secondary: {
        backgroundColor: colorPalette.grey3,
        backgroundHoverColor: colorPalette.grey5,
        foregroundColor: colorPalette.white
      },
      success: {
        backgroundColor: colorPalette.green2,
        backgroundHoverColor: colorPalette.green3,
        foregroundColor: colorPalette.white
      },
      info: {
        backgroundColor: colorPalette.blue3,
        backgroundHoverColor: colorPalette.blue4,
        foregroundColor: colorPalette.white
      },
      warning: {
        backgroundColor: colorPalette.yellow2,
        backgroundHoverColor: colorPalette.yellow3,
        foregroundColor: colorPalette.white
      },
      danger: {
        backgroundColor: colorPalette.red1,
        backgroundHoverColor: chroma(colorPalette.red1).brighten(.3).rgba().toString(),
        foregroundColor: colorPalette.white
      }
    },
    outlined: {
      primary: {
        backgroundColor: colorPalette.grey4,
        iconForegroundColor: colorPalette.red,
        textForegroundColor: colorPalette.red,
        borderColor: colorPalette.grey6,
        borderHoverColor: colorPalette.red
      },
      secondary: {
        backgroundColor: colorPalette.grey4,
        iconForegroundColor: colorPalette.grey12,
        textForegroundColor: colorPalette.grey12,
        borderColor: colorPalette.grey6,
        borderHoverColor: colorPalette.grey12
      },
      success: {
        backgroundColor: colorPalette.grey4,
        iconForegroundColor: colorPalette.green2,
        textForegroundColor: colorPalette.green2,
        borderColor: colorPalette.grey6,
        borderHoverColor: colorPalette.green2
      },
      info: {
        backgroundColor: colorPalette.grey4,
        iconForegroundColor: colorPalette.blue3,
        textForegroundColor: colorPalette.blue3,
        borderColor: colorPalette.grey6,
        borderHoverColor: colorPalette.blue3
      },
      warning: {
        backgroundColor: colorPalette.grey4,
        iconForegroundColor: colorPalette.yellow3,
        textForegroundColor: colorPalette.yellow3,
        borderColor: colorPalette.grey6,
        borderHoverColor: colorPalette.yellow3
      },
      danger: {
        backgroundColor: colorPalette.grey4,
        iconForegroundColor: colorPalette.red2,
        textForegroundColor: colorPalette.white,
        borderColor: colorPalette.grey6,
        borderHoverColor: colorPalette.red1
      }
    }
  }
};

var primarySansSerifFontFamily$1 = ["Proxima Nova", "Helvetica Neue", "Helvetica", "Arial", "sans-serif"];
var light = {
  name: "light",
  backgroundColor: colorPalette.white,
  emphases: {
    active: "rgba(0, 0, 0, .9)",
    "default": "rgba(0, 0, 0, .78)",
    muted: "rgba(0, 0, 0, .6)",
    disabled: "rgba(0, 0, 0, .36)",
    divider: "rgba(0, 0, 0 .1)"
  },
  colors: {
    background1: colorPalette.grey1,
    background2: colorPalette.grey2,
    background3: colorPalette.grey3,
    background4: colorPalette.grey4,
    primary: colorPalette.red2,
    secondary: colorPalette.grey3,
    danger: colorPalette.danger,
    success: colorPalette.green2,
    info: colorPalette.blue3,
    warning: colorPalette.warning,
    grey: "#dbdbdb",
    red: "#ff4147",
    orange: "#ff8449",
    yellow: "#f4d255",
    green: "#9ac977",
    blue: "#1890d1",
    lightblue: "#58cbf1",
    purple: "#ad04df",
    placeholder: '#da1ccd',
    strava: colorPalette.strava,
    garmin: colorPalette.garmin,
    trainingPeaks: colorPalette.trainingPeaks,
    dropbox: colorPalette.dropbox
  },
  typography: {
    heading1: {
      fontFamily: primarySansSerifFontFamily$1,
      fontSize: 40,
      lineHeight: 40 * 1.2,
      fontWeight: 700,
      letterSpacing: 0,
      textDecoration: "none",
      textTransform: "capitalize"
    },
    heading2: {
      fontFamily: primarySansSerifFontFamily$1,
      fontSize: 34,
      lineHeight: 34 * 1.2,
      fontWeight: 700,
      letterSpacing: 0,
      textDecoration: "none",
      textTransform: "capitalize"
    },
    heading3: {
      fontFamily: primarySansSerifFontFamily$1,
      fontSize: 27,
      lineHeight: 27 * 1.2,
      fontWeight: 700,
      letterSpacing: .2,
      textDecoration: "none",
      textTransform: "capitalize"
    },
    heading4: {
      fontFamily: primarySansSerifFontFamily$1,
      fontSize: 24,
      lineHeight: 24 * 1.2,
      fontWeight: 700,
      letterSpacing: 0.2,
      textDecoration: "none",
      textTransform: "capitalize"
    },
    heading5: {
      fontFamily: primarySansSerifFontFamily$1,
      fontSize: 18,
      lineHeight: 18 * 1.2,
      fontWeight: 700,
      letterSpacing: .2,
      textDecoration: "none",
      textTransform: "capitalize"
    },
    heading6: {
      fontFamily: primarySansSerifFontFamily$1,
      fontSize: 14,
      lineHeight: 14 * 1.2,
      fontWeight: 700,
      letterSpacing: 0.2,
      textDecoration: "none",
      textTransform: "capitalize"
    },
    heading7: {
      fontFamily: primarySansSerifFontFamily$1,
      fontSize: 12,
      lineHeight: 12 * 1.2,
      fontWeight: 700,
      letterSpacing: 0.2,
      textDecoration: "none",
      textTransform: "capitalize"
    },
    "paragraph-lead": {
      fontFamily: primarySansSerifFontFamily$1,
      fontSize: 24,
      lineHeight: 24 * 1.5,
      fontWeight: 600,
      letterSpacing: 0,
      textDecoration: "none",
      textTransform: "none"
    },
    paragraph: {
      fontFamily: primarySansSerifFontFamily$1,
      fontSize: 18,
      lineHeight: 18 * 1.5,
      fontWeight: 400,
      letterSpacing: 0,
      textDecoration: "none",
      textTransform: "none"
    },
    "paragraph--semibold": {
      fontFamily: primarySansSerifFontFamily$1,
      fontSize: 18,
      lineHeight: 18 * 1.5,
      fontWeight: 600,
      letterSpacing: 0,
      textDecoration: "none",
      textTransform: "none"
    },
    "paragraph-s": {
      fontFamily: primarySansSerifFontFamily$1,
      fontSize: 14,
      lineHeight: 14 * 1.5,
      fontWeight: 400,
      letterSpacing: 0,
      textDecoration: "none",
      textTransform: "none"
    },
    "paragraph-s--semibold": {
      fontFamily: primarySansSerifFontFamily$1,
      fontSize: 14,
      lineHeight: 14 * 1.5,
      fontWeight: 600,
      letterSpacing: 0,
      textDecoration: "none",
      textTransform: "none"
    },
    "paragraph-xs": {
      fontFamily: primarySansSerifFontFamily$1,
      fontSize: 12,
      lineHeight: 12 * 1.5,
      fontWeight: 400,
      letterSpacing: 0.2,
      textDecoration: "none",
      textTransform: "none"
    },
    "paragraph-xs--semibold": {
      fontFamily: primarySansSerifFontFamily$1,
      fontSize: 12,
      lineHeight: 12 * 1.5,
      fontWeight: 600,
      letterSpacing: 0.2,
      textDecoration: "none",
      textTransform: "none"
    },
    label: {
      fontFamily: primarySansSerifFontFamily$1,
      fontSize: 12,
      lineHeight: 12 * 1.2,
      fontWeight: 700,
      letterSpacing: 0.2,
      textDecoration: "none",
      textTransform: "uppercase"
    },
    "label-s": {
      fontFamily: primarySansSerifFontFamily$1,
      fontSize: 10,
      lineHeight: 10 * 1.2,
      fontWeight: 700,
      letterSpacing: 0.4,
      textDecoration: "none",
      textTransform: "uppercase"
    }
  },
  button: {
    contained: {
      primary: {
        backgroundColor: colorPalette.red,
        backgroundHoverColor: colorPalette.redHover,
        foregroundColor: colorPalette.white
      },
      secondary: {
        backgroundColor: colorPalette.grey3,
        backgroundHoverColor: colorPalette.grey6,
        foregroundColor: colorPalette.white
      },
      success: {
        backgroundColor: colorPalette.green2,
        backgroundHoverColor: colorPalette.green3,
        foregroundColor: colorPalette.white
      },
      info: {
        backgroundColor: colorPalette.blue3,
        backgroundHoverColor: colorPalette.blue4,
        foregroundColor: colorPalette.white
      },
      warning: {
        backgroundColor: colorPalette.yellow2,
        backgroundHoverColor: colorPalette.yellow3,
        foregroundColor: colorPalette.white
      },
      danger: {
        backgroundColor: colorPalette.red1,
        backgroundHoverColor: chroma(colorPalette.red1).brighten(.3).rgba().toString(),
        foregroundColor: colorPalette.white
      }
    },
    outlined: {
      primary: {
        backgroundColor: "rgba(0,0,0,0)",
        iconForegroundColor: colorPalette.red,
        textForegroundColor: colorPalette.red,
        borderColor: colorPalette.grey11,
        borderHoverColor: colorPalette.red
      },
      secondary: {
        backgroundColor: "rgba(0,0,0,0)",
        iconForegroundColor: colorPalette.grey12,
        textForegroundColor: colorPalette.grey12,
        borderColor: colorPalette.grey11,
        borderHoverColor: colorPalette.grey12
      },
      success: {
        backgroundColor: "rgba(0,0,0,0)",
        iconForegroundColor: colorPalette.green2,
        textForegroundColor: colorPalette.green2,
        borderColor: colorPalette.grey11,
        borderHoverColor: colorPalette.green2
      },
      info: {
        backgroundColor: "rgba(0,0,0,0)",
        iconForegroundColor: colorPalette.blue3,
        textForegroundColor: colorPalette.blue3,
        borderColor: colorPalette.grey11,
        borderHoverColor: colorPalette.blue3
      },
      warning: {
        backgroundColor: "rgba(0,0,0,0)",
        iconForegroundColor: colorPalette.yellow3,
        textForegroundColor: colorPalette.yellow3,
        borderColor: colorPalette.grey11,
        borderHoverColor: colorPalette.yellow3
      },
      danger: {
        backgroundColor: "rgba(0,0,0,0)",
        iconForegroundColor: colorPalette.red1,
        textForegroundColor: colorPalette.grey7,
        borderColor: colorPalette.grey11,
        borderHoverColor: colorPalette.red1
      }
    }
  }
};

exports.ButtonCore = ButtonCore;
exports.dark = dark;
exports.exampleCardCore = exampleCardCore;
exports.iconCore = iconCore;
exports.light = light;
exports.statusBarCore = statusBarCore;
