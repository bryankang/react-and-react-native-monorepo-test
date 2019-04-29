'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var reactNative = require('react-native');
var trcCore = require('@trainerroad/trc-core');

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

var ThemeContext = React__default.createContext({});
var defaultProps = {
  children: null,
  theme: trcCore.lightTheme
};

var _ThemeProvider = function _ThemeProvider(props) {
  return React__default.createElement(ThemeContext.Provider, {
    value: props.theme
  }, props.children);
};

_ThemeProvider.defaultProps = defaultProps;
var ThemeProvider = _ThemeProvider;
var useTheme = function useTheme() {
  return React.useContext(ThemeContext);
};

function _isPlaceholder(a) {
  return a != null && typeof a === 'object' && a['@@functional/placeholder'] === true;
}

var _isPlaceholder_1 = _isPlaceholder;

/**
 * Optimized internal one-arity curry function.
 *
 * @private
 * @category Function
 * @param {Function} fn The function to curry.
 * @return {Function} The curried function.
 */

function _curry1(fn) {
  return function f1(a) {
    if (arguments.length === 0 || _isPlaceholder_1(a)) {
      return f1;
    } else {
      return fn.apply(this, arguments);
    }
  };
}

var _curry1_1 = _curry1;

/**
 * Optimized internal two-arity curry function.
 *
 * @private
 * @category Function
 * @param {Function} fn The function to curry.
 * @return {Function} The curried function.
 */

function _curry2(fn) {
  return function f2(a, b) {
    switch (arguments.length) {
      case 0:
        return f2;

      case 1:
        return _isPlaceholder_1(a) ? f2 : _curry1_1(function (_b) {
          return fn(a, _b);
        });

      default:
        return _isPlaceholder_1(a) && _isPlaceholder_1(b) ? f2 : _isPlaceholder_1(a) ? _curry1_1(function (_a) {
          return fn(_a, b);
        }) : _isPlaceholder_1(b) ? _curry1_1(function (_b) {
          return fn(a, _b);
        }) : fn(a, b);
    }
  };
}

var _curry2_1 = _curry2;

/**
 * Optimized internal three-arity curry function.
 *
 * @private
 * @category Function
 * @param {Function} fn The function to curry.
 * @return {Function} The curried function.
 */

function _curry3(fn) {
  return function f3(a, b, c) {
    switch (arguments.length) {
      case 0:
        return f3;

      case 1:
        return _isPlaceholder_1(a) ? f3 : _curry2_1(function (_b, _c) {
          return fn(a, _b, _c);
        });

      case 2:
        return _isPlaceholder_1(a) && _isPlaceholder_1(b) ? f3 : _isPlaceholder_1(a) ? _curry2_1(function (_a, _c) {
          return fn(_a, b, _c);
        }) : _isPlaceholder_1(b) ? _curry2_1(function (_b, _c) {
          return fn(a, _b, _c);
        }) : _curry1_1(function (_c) {
          return fn(a, b, _c);
        });

      default:
        return _isPlaceholder_1(a) && _isPlaceholder_1(b) && _isPlaceholder_1(c) ? f3 : _isPlaceholder_1(a) && _isPlaceholder_1(b) ? _curry2_1(function (_a, _b) {
          return fn(_a, _b, c);
        }) : _isPlaceholder_1(a) && _isPlaceholder_1(c) ? _curry2_1(function (_a, _c) {
          return fn(_a, b, _c);
        }) : _isPlaceholder_1(b) && _isPlaceholder_1(c) ? _curry2_1(function (_b, _c) {
          return fn(a, _b, _c);
        }) : _isPlaceholder_1(a) ? _curry1_1(function (_a) {
          return fn(_a, b, c);
        }) : _isPlaceholder_1(b) ? _curry1_1(function (_b) {
          return fn(a, _b, c);
        }) : _isPlaceholder_1(c) ? _curry1_1(function (_c) {
          return fn(a, b, _c);
        }) : fn(a, b, c);
    }
  };
}

var _curry3_1 = _curry3;

/**
 * Returns the second argument if it is not `null`, `undefined` or `NaN`;
 * otherwise the first argument is returned.
 *
 * @func
 * @memberOf R
 * @since v0.10.0
 * @category Logic
 * @sig a -> b -> a | b
 * @param {a} default The default value.
 * @param {b} val `val` will be returned instead of `default` unless `val` is `null`, `undefined` or `NaN`.
 * @return {*} The second value if it is not `null`, `undefined` or `NaN`, otherwise the default value
 * @example
 *
 *      const defaultTo42 = R.defaultTo(42);
 *
 *      defaultTo42(null);  //=> 42
 *      defaultTo42(undefined);  //=> 42
 *      defaultTo42(false);  //=> false
 *      defaultTo42('Ramda');  //=> 'Ramda'
 *      // parseInt('string') results in NaN
 *      defaultTo42(parseInt('string')); //=> 42
 */

var defaultTo =
/*#__PURE__*/
_curry2_1(function defaultTo(d, v) {
  return v == null || v !== v ? d : v;
});

var defaultTo_1 = defaultTo;

/**
 * Retrieve the value at a given path.
 *
 * @func
 * @memberOf R
 * @since v0.2.0
 * @category Object
 * @typedefn Idx = String | Int
 * @sig [Idx] -> {a} -> a | Undefined
 * @param {Array} path The path to use.
 * @param {Object} obj The object to retrieve the nested property from.
 * @return {*} The data at `path`.
 * @see R.prop
 * @example
 *
 *      R.path(['a', 'b'], {a: {b: 2}}); //=> 2
 *      R.path(['a', 'b'], {c: {b: 2}}); //=> undefined
 */

var path =
/*#__PURE__*/
_curry2_1(function path(paths, obj) {
  var val = obj;
  var idx = 0;

  while (idx < paths.length) {
    if (val == null) {
      return;
    }

    val = val[paths[idx]];
    idx += 1;
  }

  return val;
});

var path_1 = path;

/**
 * If the given, non-null object has a value at the given path, returns the
 * value at that path. Otherwise returns the provided default value.
 *
 * @func
 * @memberOf R
 * @since v0.18.0
 * @category Object
 * @typedefn Idx = String | Int
 * @sig a -> [Idx] -> {a} -> a
 * @param {*} d The default value.
 * @param {Array} p The path to use.
 * @param {Object} obj The object to retrieve the nested property from.
 * @return {*} The data at `path` of the supplied object or the default value.
 * @example
 *
 *      R.pathOr('N/A', ['a', 'b'], {a: {b: 2}}); //=> 2
 *      R.pathOr('N/A', ['a', 'b'], {c: {b: 2}}); //=> "N/A"
 */

var pathOr =
/*#__PURE__*/
_curry3_1(function pathOr(d, p, obj) {
  return defaultTo_1(d, path_1(p, obj));
});

var pathOr_1 = pathOr;

function getCardStyles(args) {
  var defaultCardStyles = pathOr_1({}, ["card"], trcCore.lightTheme);

  var cardStyles = pathOr_1(defaultCardStyles, ["theme", "card"], args);

  var root = // @css
  {
    flexGrow: 1,
    width: "100%",
    height: "100%",
    borderRadius: cardStyles.borderRadius,
    backgroundColor: cardStyles.backgroundColor,
    shadowColor: "black",
    shadowOpacity: 0.24,
    shadowOffset: {
      width: 4,
      height: cardStyles.shadowOffsetY
    },
    shadowRadius: cardStyles.shadowBlurRadius,
    elevation: 4
  };
  var content = {
    width: "100%",
    height: "100%",
    overflow: "hidden"
  };
  return {
    root: root,
    content: content
  };
}

var defaultProps$1 = {
  children: null
};

var _Card = function _Card(props) {
  var theme = useTheme();

  var children = props.children,
      rest = _objectWithoutProperties(props, ["children"]);

  var cardStyles = getCardStyles({
    theme: theme
  });
  return React__default.createElement(reactNative.View, _extends({
    style: cardStyles.root
  }, rest), React__default.createElement(reactNative.View, {
    style: cardStyles.content
  }, children));
};

_Card.defaultProps = defaultProps$1;
var Card = _Card;

/**
 * DO NOT USE THIS INSIDE COMPONENTS!
 *
 * Only use this in stories which portray how clients will
 * use it.
 *
 * The reason is that react native does not support android
 * safe areas yet, so the client may need to depend on native
 * modules.
 */

var SafeAreaView = reactNative.Platform.OS === "android" ? require("./safe-area-view.android").SafeAreaView : require("./safe-area-view.ios").SafeAreaView;

function isScreenPortrait() {
  var width = reactNative.Dimensions.get("screen").width;
  var height = reactNative.Dimensions.get("screen").height;
  var isScreenPortrait = height >= width;
  return isScreenPortrait;
} // android only

function useScreenOrientation() {
  var isPortrait = isScreenPortrait();
  var initialStatusBarHeight = isPortrait ? reactNative.StatusBar.currentHeight : 0;

  var _useState = React.useState(initialStatusBarHeight),
      _useState2 = _slicedToArray(_useState, 2),
      statusBarHeight = _useState2[0],
      setStatusBarHeight = _useState2[1];

  React.useEffect(function () {
    setStatusBarHeight(reactNative.StatusBar.currentHeight);
  }, [isPortrait]);
  return statusBarHeight || 0;
}

function getStatusBarStyles(args) {
  var backgroundColor = pathOr_1(trcCore.lightTheme.backgroundColor, ["theme", "backgroundColor"], args);

  var isBackgroundDark = trcCore.statusBarCore.isDark(backgroundColor);
  var color = isBackgroundDark ? "light-content" : "dark-content";
  return {
    color: color
  };
}

var StatusBar = function StatusBar() {
  var theme = useTheme();
  var styles = getStatusBarStyles({
    theme: theme,
    statusBarCore: trcCore.statusBarCore
  });
  return React__default.createElement(reactNative.StatusBar, {
    backgroundColor: "transparent",
    barStyle: styles.color,
    hidden: !isScreenPortrait(),
    translucent: true
  });
};

exports.Card = Card;
exports.SafeAreaView = SafeAreaView;
exports.StatusBar = StatusBar;
exports.ThemeProvider = ThemeProvider;
exports.isScreenPortrait = isScreenPortrait;
exports.useScreenOrientation = useScreenOrientation;
exports.useTheme = useTheme;
