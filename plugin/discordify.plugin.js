/**
 * @name discordify 
 * @author PINPAL#5245 and chazzox#1001
 * @description Spotify but inside discord
 * @version 0.6.0
 * @donate https://www.paypal.me/chazzox
 * @website https://github.com/chazzox/discordify#readme
 * @source https://github.com/chazzox/discordify
 */
/*@cc_on
@if (@_jscript)
    // Offer to self-install for clueless users that try to run this directly.
    var shell = WScript.CreateObject("WScript.Shell")
    var fs = new ActiveXObject("Scripting.FileSystemObject")
    var pathPlugins = shell.ExpandEnvironmentStrings("%APPDATA%BetterDiscordplugins")
    var pathSelf = WScript.ScriptFullName
    // Put the user at ease by addressing them in the first person
    shell.Popup("It looks like you've mistakenly tried to run me directly. 
(Don't do that!)", 0, "I'm a plugin for BetterDiscord", 0x30)
    if (fs.GetParentFolderName(pathSelf) === fs.GetAbsolutePathName(pathPlugins)) {
        shell.Popup("I'm in the correct folder already.", 0, "I'm already installed", 0x40)
    } else if (!fs.FolderExists(pathPlugins)) {
        shell.Popup("I can't find the BetterDiscord plugins folder.
Are you sure it's even installed?", 0, "Can't install myself", 0x10)
    } else if (shell.Popup("Should I copy myself to BetterDiscord's plugins folder for you?", 0, "Do you need some help?", 0x34) === 6) {
        fs.CopyFile(pathSelf, fs.BuildPath(pathPlugins, fs.GetFileName(pathSelf)), true)
        // Show the user where to put plugins in the future
        shell.Exec("explorer " + pathPlugins)
        shell.Popup("I'm installed!", 0, "Successfully installed", 0x40)
    }
    WScript.Quit()
@else@*/
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, copyDefault, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && (copyDefault || key !== "default"))
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toESM = (module2, isNodeMode) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", !isNodeMode && module2 && module2.__esModule ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};
var __toCommonJS = /* @__PURE__ */ ((cache) => {
  return (module2, temp) => {
    return cache && cache.get(module2) || (temp = __reExport(__markAsModule({}), module2, 1), cache && cache.set(module2, temp), temp);
  };
})(typeof WeakMap !== "undefined" ? /* @__PURE__ */ new WeakMap() : 0);

// node_modules/.pnpm/classnames@2.3.1/node_modules/classnames/index.js
var require_classnames = __commonJS({
  "node_modules/.pnpm/classnames@2.3.1/node_modules/classnames/index.js"(exports, module2) {
    (function() {
      "use strict";
      var hasOwn = {}.hasOwnProperty;
      function classNames3() {
        var classes = [];
        for (var i = 0; i < arguments.length; i++) {
          var arg = arguments[i];
          if (!arg)
            continue;
          var argType = typeof arg;
          if (argType === "string" || argType === "number") {
            classes.push(arg);
          } else if (Array.isArray(arg)) {
            if (arg.length) {
              var inner = classNames3.apply(null, arg);
              if (inner) {
                classes.push(inner);
              }
            }
          } else if (argType === "object") {
            if (arg.toString === Object.prototype.toString) {
              for (var key in arg) {
                if (hasOwn.call(arg, key) && arg[key]) {
                  classes.push(key);
                }
              }
            } else {
              classes.push(arg.toString());
            }
          }
        }
        return classes.join(" ");
      }
      if (typeof module2 !== "undefined" && module2.exports) {
        classNames3.default = classNames3;
        module2.exports = classNames3;
      } else if (typeof define === "function" && typeof define.amd === "object" && define.amd) {
        define("classnames", [], function() {
          return classNames3;
        });
      } else {
        window.classNames = classNames3;
      }
    })();
  }
});

// src/discordify.tsx
var discordify_exports = {};
__export(discordify_exports, {
  default: () => Discordify
});

// ../utils/react.ts
var React = BdApi.React;
var react_default = React;
var {
  createContext,
  useRef,
  useState,
  useLayoutEffect,
  createElement,
  useContext,
  useEffect,
  useMemo,
  useCallback,
  Children,
  isValidElement,
  Fragment,
  forwardRef
} = React;

// node_modules/.pnpm/@babel+runtime@7.16.3/node_modules/@babel/runtime/helpers/esm/extends.js
function _extends() {
  _extends = Object.assign || function(target) {
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

// node_modules/.pnpm/history@5.2.0/node_modules/history/index.js
var r;
var B = r || (r = {});
B.Pop = "POP";
B.Push = "PUSH";
B.Replace = "REPLACE";
var C = true ? function(b) {
  return Object.freeze(b);
} : function(b) {
  return b;
};
function D(b, h) {
  if (!b) {
    typeof console !== "undefined" && console.warn(h);
    try {
      throw Error(h);
    } catch (e) {
    }
  }
}
function F() {
  var b = [];
  return { get length() {
    return b.length;
  }, push: function(h) {
    b.push(h);
    return function() {
      b = b.filter(function(e) {
        return e !== h;
      });
    };
  }, call: function(h) {
    b.forEach(function(e) {
      return e && e(h);
    });
  } };
}
function H() {
  return Math.random().toString(36).substr(2, 8);
}
function I(b) {
  var h = b.pathname;
  h = h === void 0 ? "/" : h;
  var e = b.search;
  e = e === void 0 ? "" : e;
  b = b.hash;
  b = b === void 0 ? "" : b;
  e && e !== "?" && (h += e.charAt(0) === "?" ? e : "?" + e);
  b && b !== "#" && (h += b.charAt(0) === "#" ? b : "#" + b);
  return h;
}
function J(b) {
  var h = {};
  if (b) {
    var e = b.indexOf("#");
    0 <= e && (h.hash = b.substr(e), b = b.substr(0, e));
    e = b.indexOf("?");
    0 <= e && (h.search = b.substr(e), b = b.substr(0, e));
    b && (h.pathname = b);
  }
  return h;
}
function createMemoryHistory(b) {
  function h(d, g) {
    g === void 0 && (g = null);
    return C(_extends({ pathname: t.pathname, search: "", hash: "" }, typeof d === "string" ? J(d) : d, { state: g, key: H() }));
  }
  function e(d, g, c) {
    return !q.length || (q.call({ action: d, location: g, retry: c }), false);
  }
  function x(d, g) {
    u = d;
    t = g;
    v.call({ action: u, location: t });
  }
  function z(d, g) {
    var c = r.Push, a = h(d, g);
    true ? D(t.pathname.charAt(0) === "/", "Relative pathnames are not supported in memory history.push(" + JSON.stringify(d) + ")") : void 0;
    e(c, a, function() {
      z(d, g);
    }) && (m += 1, p.splice(m, p.length, a), x(c, a));
  }
  function A(d, g) {
    var c = r.Replace, a = h(d, g);
    true ? D(t.pathname.charAt(0) === "/", "Relative pathnames are not supported in memory history.replace(" + JSON.stringify(d) + ")") : void 0;
    e(c, a, function() {
      A(d, g);
    }) && (p[m] = a, x(c, a));
  }
  function y(d) {
    var g = Math.min(Math.max(m + d, 0), p.length - 1), c = r.Pop, a = p[g];
    e(c, a, function() {
      y(d);
    }) && (m = g, x(c, a));
  }
  b === void 0 && (b = {});
  var w = b;
  b = w.initialEntries;
  w = w.initialIndex;
  var p = (b === void 0 ? ["/"] : b).map(function(d) {
    var g = C(_extends({ pathname: "/", search: "", hash: "", state: null, key: H() }, typeof d === "string" ? J(d) : d));
    true ? D(g.pathname.charAt(0) === "/", "Relative pathnames are not supported in createMemoryHistory({ initialEntries }) (invalid entry: " + JSON.stringify(d) + ")") : void 0;
    return g;
  }), m = Math.min(Math.max(w == null ? p.length - 1 : w, 0), p.length - 1), u = r.Pop, t = p[m], v = F(), q = F();
  return { get index() {
    return m;
  }, get action() {
    return u;
  }, get location() {
    return t;
  }, createHref: function(d) {
    return typeof d === "string" ? d : I(d);
  }, push: z, replace: A, go: y, back: function() {
    y(-1);
  }, forward: function() {
    y(1);
  }, listen: function(d) {
    return v.push(d);
  }, block: function(d) {
    return q.push(d);
  } };
}

// node_modules/.pnpm/react-router@6.2.1/node_modules/react-router/index.js
function invariant(cond, message) {
  if (!cond)
    throw new Error(message);
}
function warning(cond, message) {
  if (!cond) {
    if (typeof console !== "undefined")
      console.warn(message);
    try {
      throw new Error(message);
    } catch (e) {
    }
  }
}
var alreadyWarned = {};
function warningOnce(key, cond, message) {
  if (!cond && !alreadyWarned[key]) {
    alreadyWarned[key] = true;
    true ? warning(false, message) : void 0;
  }
}
var NavigationContext = /* @__PURE__ */ createContext(null);
if (true) {
  NavigationContext.displayName = "Navigation";
}
var LocationContext = /* @__PURE__ */ createContext(null);
if (true) {
  LocationContext.displayName = "Location";
}
var RouteContext = /* @__PURE__ */ createContext({
  outlet: null,
  matches: []
});
if (true) {
  RouteContext.displayName = "Route";
}
function MemoryRouter(_ref) {
  let {
    basename,
    children,
    initialEntries,
    initialIndex
  } = _ref;
  let historyRef = useRef();
  if (historyRef.current == null) {
    historyRef.current = createMemoryHistory({
      initialEntries,
      initialIndex
    });
  }
  let history = historyRef.current;
  let [state, setState] = useState({
    action: history.action,
    location: history.location
  });
  useLayoutEffect(() => history.listen(setState), [history]);
  return /* @__PURE__ */ createElement(Router, {
    basename,
    children,
    location: state.location,
    navigationType: state.action,
    navigator: history
  });
}
function Navigate(_ref2) {
  let {
    to,
    replace,
    state
  } = _ref2;
  !useInRouterContext() ? true ? invariant(false, "<Navigate> may be used only in the context of a <Router> component.") : invariant(false) : void 0;
  true ? warning(!useContext(NavigationContext).static, "<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.") : void 0;
  let navigate = useNavigate();
  useEffect(() => {
    navigate(to, {
      replace,
      state
    });
  });
  return null;
}
function Outlet(props) {
  return useOutlet(props.context);
}
function Route(_props) {
  true ? invariant(false, "A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.") : invariant(false);
}
function Router(_ref3) {
  let {
    basename: basenameProp = "/",
    children = null,
    location: locationProp,
    navigationType = r.Pop,
    navigator,
    static: staticProp = false
  } = _ref3;
  !!useInRouterContext() ? true ? invariant(false, "You cannot render a <Router> inside another <Router>. You should never have more than one in your app.") : invariant(false) : void 0;
  let basename = normalizePathname(basenameProp);
  let navigationContext = useMemo(() => ({
    basename,
    navigator,
    static: staticProp
  }), [basename, navigator, staticProp]);
  if (typeof locationProp === "string") {
    locationProp = J(locationProp);
  }
  let {
    pathname = "/",
    search = "",
    hash = "",
    state = null,
    key = "default"
  } = locationProp;
  let location = useMemo(() => {
    let trailingPathname = stripBasename(pathname, basename);
    if (trailingPathname == null) {
      return null;
    }
    return {
      pathname: trailingPathname,
      search,
      hash,
      state,
      key
    };
  }, [basename, pathname, search, hash, state, key]);
  true ? warning(location != null, '<Router basename="' + basename + '"> is not able to match the URL ' + ('"' + pathname + search + hash + '" because it does not start with the ') + "basename, so the <Router> won't render anything.") : void 0;
  if (location == null) {
    return null;
  }
  return /* @__PURE__ */ createElement(NavigationContext.Provider, {
    value: navigationContext
  }, /* @__PURE__ */ createElement(LocationContext.Provider, {
    children,
    value: {
      location,
      navigationType
    }
  }));
}
function Routes(_ref4) {
  let {
    children,
    location
  } = _ref4;
  return useRoutes(createRoutesFromChildren(children), location);
}
function useHref(to) {
  !useInRouterContext() ? true ? invariant(false, "useHref() may be used only in the context of a <Router> component.") : invariant(false) : void 0;
  let {
    basename,
    navigator
  } = useContext(NavigationContext);
  let {
    hash,
    pathname,
    search
  } = useResolvedPath(to);
  let joinedPathname = pathname;
  if (basename !== "/") {
    let toPathname = getToPathname(to);
    let endsWithSlash = toPathname != null && toPathname.endsWith("/");
    joinedPathname = pathname === "/" ? basename + (endsWithSlash ? "/" : "") : joinPaths([basename, pathname]);
  }
  return navigator.createHref({
    pathname: joinedPathname,
    search,
    hash
  });
}
function useInRouterContext() {
  return useContext(LocationContext) != null;
}
function useLocation() {
  !useInRouterContext() ? true ? invariant(false, "useLocation() may be used only in the context of a <Router> component.") : invariant(false) : void 0;
  return useContext(LocationContext).location;
}
function useMatch(pattern) {
  !useInRouterContext() ? true ? invariant(false, "useMatch() may be used only in the context of a <Router> component.") : invariant(false) : void 0;
  let {
    pathname
  } = useLocation();
  return useMemo(() => matchPath(pattern, pathname), [pathname, pattern]);
}
function useNavigate() {
  !useInRouterContext() ? true ? invariant(false, "useNavigate() may be used only in the context of a <Router> component.") : invariant(false) : void 0;
  let {
    basename,
    navigator
  } = useContext(NavigationContext);
  let {
    matches
  } = useContext(RouteContext);
  let {
    pathname: locationPathname
  } = useLocation();
  let routePathnamesJson = JSON.stringify(matches.map((match) => match.pathnameBase));
  let activeRef = useRef(false);
  useEffect(() => {
    activeRef.current = true;
  });
  let navigate = useCallback(function(to, options) {
    if (options === void 0) {
      options = {};
    }
    true ? warning(activeRef.current, "You should call navigate() in a React.useEffect(), not when your component is first rendered.") : void 0;
    if (!activeRef.current)
      return;
    if (typeof to === "number") {
      navigator.go(to);
      return;
    }
    let path = resolveTo(to, JSON.parse(routePathnamesJson), locationPathname);
    if (basename !== "/") {
      path.pathname = joinPaths([basename, path.pathname]);
    }
    (!!options.replace ? navigator.replace : navigator.push)(path, options.state);
  }, [basename, navigator, routePathnamesJson, locationPathname]);
  return navigate;
}
var OutletContext = /* @__PURE__ */ createContext(null);
function useOutlet(context) {
  let outlet = useContext(RouteContext).outlet;
  if (outlet) {
    return /* @__PURE__ */ createElement(OutletContext.Provider, {
      value: context
    }, outlet);
  }
  return outlet;
}
function useResolvedPath(to) {
  let {
    matches
  } = useContext(RouteContext);
  let {
    pathname: locationPathname
  } = useLocation();
  let routePathnamesJson = JSON.stringify(matches.map((match) => match.pathnameBase));
  return useMemo(() => resolveTo(to, JSON.parse(routePathnamesJson), locationPathname), [to, routePathnamesJson, locationPathname]);
}
function useRoutes(routes, locationArg) {
  !useInRouterContext() ? true ? invariant(false, "useRoutes() may be used only in the context of a <Router> component.") : invariant(false) : void 0;
  let {
    matches: parentMatches
  } = useContext(RouteContext);
  let routeMatch = parentMatches[parentMatches.length - 1];
  let parentParams = routeMatch ? routeMatch.params : {};
  let parentPathname = routeMatch ? routeMatch.pathname : "/";
  let parentPathnameBase = routeMatch ? routeMatch.pathnameBase : "/";
  let parentRoute = routeMatch && routeMatch.route;
  if (true) {
    let parentPath = parentRoute && parentRoute.path || "";
    warningOnce(parentPathname, !parentRoute || parentPath.endsWith("*"), "You rendered descendant <Routes> (or called `useRoutes()`) at " + ('"' + parentPathname + '" (under <Route path="' + parentPath + '">) but the ') + `parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

` + ('Please change the parent <Route path="' + parentPath + '"> to <Route ') + ('path="' + (parentPath === "/" ? "*" : parentPath + "/*") + '">.'));
  }
  let locationFromContext = useLocation();
  let location;
  if (locationArg) {
    var _parsedLocationArg$pa;
    let parsedLocationArg = typeof locationArg === "string" ? J(locationArg) : locationArg;
    !(parentPathnameBase === "/" || ((_parsedLocationArg$pa = parsedLocationArg.pathname) == null ? void 0 : _parsedLocationArg$pa.startsWith(parentPathnameBase))) ? true ? invariant(false, "When overriding the location using `<Routes location>` or `useRoutes(routes, location)`, the location pathname must begin with the portion of the URL pathname that was " + ('matched by all parent routes. The current pathname base is "' + parentPathnameBase + '" ') + ('but pathname "' + parsedLocationArg.pathname + '" was given in the `location` prop.')) : invariant(false) : void 0;
    location = parsedLocationArg;
  } else {
    location = locationFromContext;
  }
  let pathname = location.pathname || "/";
  let remainingPathname = parentPathnameBase === "/" ? pathname : pathname.slice(parentPathnameBase.length) || "/";
  let matches = matchRoutes(routes, {
    pathname: remainingPathname
  });
  if (true) {
    true ? warning(parentRoute || matches != null, 'No routes matched location "' + location.pathname + location.search + location.hash + '" ') : void 0;
    true ? warning(matches == null || matches[matches.length - 1].route.element !== void 0, 'Matched leaf route at location "' + location.pathname + location.search + location.hash + '" does not have an element. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.') : void 0;
  }
  return _renderMatches(matches && matches.map((match) => Object.assign({}, match, {
    params: Object.assign({}, parentParams, match.params),
    pathname: joinPaths([parentPathnameBase, match.pathname]),
    pathnameBase: match.pathnameBase === "/" ? parentPathnameBase : joinPaths([parentPathnameBase, match.pathnameBase])
  })), parentMatches);
}
function createRoutesFromChildren(children) {
  let routes = [];
  Children.forEach(children, (element) => {
    if (!/* @__PURE__ */ isValidElement(element)) {
      return;
    }
    if (element.type === Fragment) {
      routes.push.apply(routes, createRoutesFromChildren(element.props.children));
      return;
    }
    !(element.type === Route) ? true ? invariant(false, "[" + (typeof element.type === "string" ? element.type : element.type.name) + "] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>") : invariant(false) : void 0;
    let route = {
      caseSensitive: element.props.caseSensitive,
      element: element.props.element,
      index: element.props.index,
      path: element.props.path
    };
    if (element.props.children) {
      route.children = createRoutesFromChildren(element.props.children);
    }
    routes.push(route);
  });
  return routes;
}
function matchRoutes(routes, locationArg, basename) {
  if (basename === void 0) {
    basename = "/";
  }
  let location = typeof locationArg === "string" ? J(locationArg) : locationArg;
  let pathname = stripBasename(location.pathname || "/", basename);
  if (pathname == null) {
    return null;
  }
  let branches = flattenRoutes(routes);
  rankRouteBranches(branches);
  let matches = null;
  for (let i = 0; matches == null && i < branches.length; ++i) {
    matches = matchRouteBranch(branches[i], pathname);
  }
  return matches;
}
function flattenRoutes(routes, branches, parentsMeta, parentPath) {
  if (branches === void 0) {
    branches = [];
  }
  if (parentsMeta === void 0) {
    parentsMeta = [];
  }
  if (parentPath === void 0) {
    parentPath = "";
  }
  routes.forEach((route, index) => {
    let meta = {
      relativePath: route.path || "",
      caseSensitive: route.caseSensitive === true,
      childrenIndex: index,
      route
    };
    if (meta.relativePath.startsWith("/")) {
      !meta.relativePath.startsWith(parentPath) ? true ? invariant(false, 'Absolute route path "' + meta.relativePath + '" nested under path ' + ('"' + parentPath + '" is not valid. An absolute child route path ') + "must start with the combined path of all its parent routes.") : invariant(false) : void 0;
      meta.relativePath = meta.relativePath.slice(parentPath.length);
    }
    let path = joinPaths([parentPath, meta.relativePath]);
    let routesMeta = parentsMeta.concat(meta);
    if (route.children && route.children.length > 0) {
      !(route.index !== true) ? true ? invariant(false, "Index routes must not have child routes. Please remove " + ('all child routes from route path "' + path + '".')) : invariant(false) : void 0;
      flattenRoutes(route.children, branches, routesMeta, path);
    }
    if (route.path == null && !route.index) {
      return;
    }
    branches.push({
      path,
      score: computeScore(path, route.index),
      routesMeta
    });
  });
  return branches;
}
function rankRouteBranches(branches) {
  branches.sort((a, b) => a.score !== b.score ? b.score - a.score : compareIndexes(a.routesMeta.map((meta) => meta.childrenIndex), b.routesMeta.map((meta) => meta.childrenIndex)));
}
var paramRe = /^:\w+$/;
var dynamicSegmentValue = 3;
var indexRouteValue = 2;
var emptySegmentValue = 1;
var staticSegmentValue = 10;
var splatPenalty = -2;
var isSplat = (s) => s === "*";
function computeScore(path, index) {
  let segments = path.split("/");
  let initialScore = segments.length;
  if (segments.some(isSplat)) {
    initialScore += splatPenalty;
  }
  if (index) {
    initialScore += indexRouteValue;
  }
  return segments.filter((s) => !isSplat(s)).reduce((score, segment) => score + (paramRe.test(segment) ? dynamicSegmentValue : segment === "" ? emptySegmentValue : staticSegmentValue), initialScore);
}
function compareIndexes(a, b) {
  let siblings = a.length === b.length && a.slice(0, -1).every((n, i) => n === b[i]);
  return siblings ? a[a.length - 1] - b[b.length - 1] : 0;
}
function matchRouteBranch(branch, pathname) {
  let {
    routesMeta
  } = branch;
  let matchedParams = {};
  let matchedPathname = "/";
  let matches = [];
  for (let i = 0; i < routesMeta.length; ++i) {
    let meta = routesMeta[i];
    let end = i === routesMeta.length - 1;
    let remainingPathname = matchedPathname === "/" ? pathname : pathname.slice(matchedPathname.length) || "/";
    let match = matchPath({
      path: meta.relativePath,
      caseSensitive: meta.caseSensitive,
      end
    }, remainingPathname);
    if (!match)
      return null;
    Object.assign(matchedParams, match.params);
    let route = meta.route;
    matches.push({
      params: matchedParams,
      pathname: joinPaths([matchedPathname, match.pathname]),
      pathnameBase: joinPaths([matchedPathname, match.pathnameBase]),
      route
    });
    if (match.pathnameBase !== "/") {
      matchedPathname = joinPaths([matchedPathname, match.pathnameBase]);
    }
  }
  return matches;
}
function _renderMatches(matches, parentMatches) {
  if (parentMatches === void 0) {
    parentMatches = [];
  }
  if (matches == null)
    return null;
  return matches.reduceRight((outlet, match, index) => {
    return /* @__PURE__ */ createElement(RouteContext.Provider, {
      children: match.route.element !== void 0 ? match.route.element : /* @__PURE__ */ createElement(Outlet, null),
      value: {
        outlet,
        matches: parentMatches.concat(matches.slice(0, index + 1))
      }
    });
  }, null);
}
function matchPath(pattern, pathname) {
  if (typeof pattern === "string") {
    pattern = {
      path: pattern,
      caseSensitive: false,
      end: true
    };
  }
  let [matcher, paramNames] = compilePath(pattern.path, pattern.caseSensitive, pattern.end);
  let match = pathname.match(matcher);
  if (!match)
    return null;
  let matchedPathname = match[0];
  let pathnameBase = matchedPathname.replace(/(.)\/+$/, "$1");
  let captureGroups = match.slice(1);
  let params = paramNames.reduce((memo, paramName, index) => {
    if (paramName === "*") {
      let splatValue = captureGroups[index] || "";
      pathnameBase = matchedPathname.slice(0, matchedPathname.length - splatValue.length).replace(/(.)\/+$/, "$1");
    }
    memo[paramName] = safelyDecodeURIComponent(captureGroups[index] || "", paramName);
    return memo;
  }, {});
  return {
    params,
    pathname: matchedPathname,
    pathnameBase,
    pattern
  };
}
function compilePath(path, caseSensitive, end) {
  if (caseSensitive === void 0) {
    caseSensitive = false;
  }
  if (end === void 0) {
    end = true;
  }
  true ? warning(path === "*" || !path.endsWith("*") || path.endsWith("/*"), 'Route path "' + path + '" will be treated as if it were ' + ('"' + path.replace(/\*$/, "/*") + '" because the `*` character must ') + "always follow a `/` in the pattern. To get rid of this warning, " + ('please change the route path to "' + path.replace(/\*$/, "/*") + '".')) : void 0;
  let paramNames = [];
  let regexpSource = "^" + path.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^$?{}|()[\]]/g, "\\$&").replace(/:(\w+)/g, (_, paramName) => {
    paramNames.push(paramName);
    return "([^\\/]+)";
  });
  if (path.endsWith("*")) {
    paramNames.push("*");
    regexpSource += path === "*" || path === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$";
  } else {
    regexpSource += end ? "\\/*$" : "(?:\\b|\\/|$)";
  }
  let matcher = new RegExp(regexpSource, caseSensitive ? void 0 : "i");
  return [matcher, paramNames];
}
function safelyDecodeURIComponent(value, paramName) {
  try {
    return decodeURIComponent(value);
  } catch (error) {
    true ? warning(false, 'The value for the URL param "' + paramName + '" will not be decoded because' + (' the string "' + value + '" is a malformed URL segment. This is probably') + (" due to a bad percent encoding (" + error + ").")) : void 0;
    return value;
  }
}
function resolvePath(to, fromPathname) {
  if (fromPathname === void 0) {
    fromPathname = "/";
  }
  let {
    pathname: toPathname,
    search = "",
    hash = ""
  } = typeof to === "string" ? J(to) : to;
  let pathname = toPathname ? toPathname.startsWith("/") ? toPathname : resolvePathname(toPathname, fromPathname) : fromPathname;
  return {
    pathname,
    search: normalizeSearch(search),
    hash: normalizeHash(hash)
  };
}
function resolvePathname(relativePath, fromPathname) {
  let segments = fromPathname.replace(/\/+$/, "").split("/");
  let relativeSegments = relativePath.split("/");
  relativeSegments.forEach((segment) => {
    if (segment === "..") {
      if (segments.length > 1)
        segments.pop();
    } else if (segment !== ".") {
      segments.push(segment);
    }
  });
  return segments.length > 1 ? segments.join("/") : "/";
}
function resolveTo(toArg, routePathnames, locationPathname) {
  let to = typeof toArg === "string" ? J(toArg) : toArg;
  let toPathname = toArg === "" || to.pathname === "" ? "/" : to.pathname;
  let from;
  if (toPathname == null) {
    from = locationPathname;
  } else {
    let routePathnameIndex = routePathnames.length - 1;
    if (toPathname.startsWith("..")) {
      let toSegments = toPathname.split("/");
      while (toSegments[0] === "..") {
        toSegments.shift();
        routePathnameIndex -= 1;
      }
      to.pathname = toSegments.join("/");
    }
    from = routePathnameIndex >= 0 ? routePathnames[routePathnameIndex] : "/";
  }
  let path = resolvePath(to, from);
  if (toPathname && toPathname !== "/" && toPathname.endsWith("/") && !path.pathname.endsWith("/")) {
    path.pathname += "/";
  }
  return path;
}
function getToPathname(to) {
  return to === "" || to.pathname === "" ? "/" : typeof to === "string" ? J(to).pathname : to.pathname;
}
function stripBasename(pathname, basename) {
  if (basename === "/")
    return pathname;
  if (!pathname.toLowerCase().startsWith(basename.toLowerCase())) {
    return null;
  }
  let nextChar = pathname.charAt(basename.length);
  if (nextChar && nextChar !== "/") {
    return null;
  }
  return pathname.slice(basename.length) || "/";
}
var joinPaths = (paths) => paths.join("/").replace(/\/\/+/g, "/");
var normalizePathname = (pathname) => pathname.replace(/\/+$/, "").replace(/^\/*/, "/");
var normalizeSearch = (search) => !search || search === "?" ? "" : search.startsWith("?") ? search : "?" + search;
var normalizeHash = (hash) => !hash || hash === "#" ? "" : hash.startsWith("#") ? hash : "#" + hash;

// node_modules/.pnpm/react-router-dom@6.2.1/node_modules/react-router-dom/index.js
function _extends2() {
  _extends2 = Object.assign || function(target) {
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
  return _extends2.apply(this, arguments);
}
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var _excluded = ["onClick", "reloadDocument", "replace", "state", "target", "to"];
var _excluded2 = ["aria-current", "caseSensitive", "className", "end", "style", "to", "children"];
function HistoryRouter(_ref3) {
  let {
    basename,
    children,
    history
  } = _ref3;
  const [state, setState] = useState({
    action: history.action,
    location: history.location
  });
  useLayoutEffect(() => history.listen(setState), [history]);
  return /* @__PURE__ */ createElement(Router, {
    basename,
    children,
    location: state.location,
    navigationType: state.action,
    navigator: history
  });
}
if (true) {
  HistoryRouter.displayName = "unstable_HistoryRouter";
}
function isModifiedEvent(event) {
  return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
}
var Link = /* @__PURE__ */ forwardRef(function LinkWithRef(_ref4, ref) {
  let {
    onClick,
    reloadDocument,
    replace = false,
    state,
    target,
    to
  } = _ref4, rest = _objectWithoutPropertiesLoose(_ref4, _excluded);
  let href = useHref(to);
  let internalOnClick = useLinkClickHandler(to, {
    replace,
    state,
    target
  });
  function handleClick(event) {
    if (onClick)
      onClick(event);
    if (!event.defaultPrevented && !reloadDocument) {
      internalOnClick(event);
    }
  }
  return /* @__PURE__ */ createElement("a", _extends2({}, rest, {
    href,
    onClick: handleClick,
    ref,
    target
  }));
});
if (true) {
  Link.displayName = "Link";
}
var NavLink = /* @__PURE__ */ forwardRef(function NavLinkWithRef(_ref5, ref) {
  let {
    "aria-current": ariaCurrentProp = "page",
    caseSensitive = false,
    className: classNameProp = "",
    end = false,
    style: styleProp,
    to,
    children
  } = _ref5, rest = _objectWithoutPropertiesLoose(_ref5, _excluded2);
  let location = useLocation();
  let path = useResolvedPath(to);
  let locationPathname = location.pathname;
  let toPathname = path.pathname;
  if (!caseSensitive) {
    locationPathname = locationPathname.toLowerCase();
    toPathname = toPathname.toLowerCase();
  }
  let isActive = locationPathname === toPathname || !end && locationPathname.startsWith(toPathname) && locationPathname.charAt(toPathname.length) === "/";
  let ariaCurrent = isActive ? ariaCurrentProp : void 0;
  let className;
  if (typeof classNameProp === "function") {
    className = classNameProp({
      isActive
    });
  } else {
    className = [classNameProp, isActive ? "active" : null].filter(Boolean).join(" ");
  }
  let style = typeof styleProp === "function" ? styleProp({
    isActive
  }) : styleProp;
  return /* @__PURE__ */ createElement(Link, _extends2({}, rest, {
    "aria-current": ariaCurrent,
    className,
    ref,
    style,
    to
  }), typeof children === "function" ? children({
    isActive
  }) : children);
});
if (true) {
  NavLink.displayName = "NavLink";
}
function useLinkClickHandler(to, _temp) {
  let {
    target,
    replace: replaceProp,
    state
  } = _temp === void 0 ? {} : _temp;
  let navigate = useNavigate();
  let location = useLocation();
  let path = useResolvedPath(to);
  return useCallback((event) => {
    if (event.button === 0 && (!target || target === "_self") && !isModifiedEvent(event)) {
      event.preventDefault();
      let replace = !!replaceProp || I(location) === I(path);
      navigate(to, {
        replace,
        state
      });
    }
  }, [location, navigate, path, replaceProp, state, target, to]);
}

// ../utils/bd-utils.ts
var LOG_STYLES = {
  color: "#c3c6fc",
  background: "#2c2c2c",
  padding: "2px 0.5em",
  "border-radius": "0.5em",
  "font-weight": "bold"
};
function log(style = LOG_STYLES, prefix, ...output) {
  console.log(`%c${prefix}`, Object.entries(style).map(([a, b]) => `${a}:${b};`).join(""), ...output);
}

// src/utils/index.ts
var Dispatcher = BdApi.findModuleByProps("dirtyDispatch");
var SpotifyTrackUtils = BdApi.findModuleByProps("getActiveSocketAndDevice");
var SpotifyUtils = BdApi.findModuleByProps("SpotifyAPI");
var SIDEBAR_CONTAINER_CLASS = ".container-1eFtFS";
var { ActionTypes: ACTION_TYPES } = BdApi.findModuleByProps("ActionTypes", "API_HOST");
var LOG_STYLES2 = {
  color: "white",
  background: "#1db954",
  padding: "2px 0.5em",
  "border-radius": "0.5em",
  "font-weight": "bold"
};
function log2(...output) {
  log(LOG_STYLES2, "discordify", output);
}
async function getAuthHeader(accountId) {
  const accessToken = SpotifyTrackUtils.getActiveSocketAndDevice()?.socket?.accessToken;
  if (!accessToken && accountId) {
    const req = await SpotifyUtils.getAccessToken(accountId);
    return req?.body?.access_token;
  }
  return `Bearer ${accessToken}`;
}
async function getPlaying(token) {
  const req = await fetch("https://api.spotify.com/v1/me/player/currently-playing" /* CURRENTLY_PLAYING */, {
    method: "GET" /* GET */,
    headers: { Authorization: token }
  });
  return await req.json();
}
var SpotifyContext = createContext(null);
var useSpotify = () => {
  return useContext(SpotifyContext);
};
var initialState = {
  accessToken: null,
  currentlyPlaying: { album: null, song: null, artist: null, image: null },
  playerState: { isPlaying: false, isShuffle: false, isLooping: 0, volume: 100 }
};
function spotifyReducer(state, action) {
  switch (action.type) {
    case "SET_ACCESS" /* SET_ACCESS */:
      return { ...state, accessToken: action.payload };
    case "SET_IS_PLAYING" /* SET_IS_PLAYING */:
      return { playerState: { isPlaying: action.payload }, ...state };
    case "SET_IS_SHUFFLE" /* SET_IS_SHUFFLE */:
      return { playerState: { isShuffle: action.payload }, ...state };
    case "SET_IS_LOOPING" /* SET_IS_LOOPING */:
      return { playerState: { isLooping: action.payload }, ...state };
    case "UPDATE_PLAYER" /* UPDATE_PLAYER */:
      return { playerState: action.payload, ...state };
    default:
      throw new Error("No Action with signature" + action);
  }
}

// ../utils/react-dom.ts
var react_dom_default = BdApi.ReactDOM;

// src/routes/albums.tsx
var Albums = () => {
  return /* @__PURE__ */ react_default.createElement(react_default.Fragment, null, /* @__PURE__ */ react_default.createElement("div", {
    className: "gridBox"
  }, /* @__PURE__ */ react_default.createElement("div", {
    className: "playlistArtwork"
  }), /* @__PURE__ */ react_default.createElement("h1", null, "Album Name"), /* @__PURE__ */ react_default.createElement("h2", null, "Artist Name")), /* @__PURE__ */ react_default.createElement("div", {
    className: "gridBox"
  }, /* @__PURE__ */ react_default.createElement("div", {
    className: "playlistArtwork"
  }), /* @__PURE__ */ react_default.createElement("h1", null, "Album Name"), /* @__PURE__ */ react_default.createElement("h2", null, "Super long Artist Name and stuff.")), /* @__PURE__ */ react_default.createElement("div", {
    className: "gridBox"
  }, /* @__PURE__ */ react_default.createElement("div", {
    className: "playlistArtwork"
  }), /* @__PURE__ */ react_default.createElement("h1", null, "Album Name"), /* @__PURE__ */ react_default.createElement("h2", null, "Artist Name")));
};
var albums_default = Albums;

// src/routes/artists.tsx
var Artists = () => {
  return /* @__PURE__ */ react_default.createElement(react_default.Fragment, null, /* @__PURE__ */ react_default.createElement("div", {
    className: "gridBox"
  }, /* @__PURE__ */ react_default.createElement("div", {
    className: "playlistArtwork round"
  }), /* @__PURE__ */ react_default.createElement("h1", null, "Artist Name"), /* @__PURE__ */ react_default.createElement("h2", null, "Artist")), /* @__PURE__ */ react_default.createElement("div", {
    className: "gridBox"
  }, /* @__PURE__ */ react_default.createElement("div", {
    className: "playlistArtwork round"
  }), /* @__PURE__ */ react_default.createElement("h1", null, "Artist Name"), /* @__PURE__ */ react_default.createElement("h2", null, "Artist")), /* @__PURE__ */ react_default.createElement("div", {
    className: "gridBox"
  }, /* @__PURE__ */ react_default.createElement("div", {
    className: "playlistArtwork round"
  }), /* @__PURE__ */ react_default.createElement("h1", null, "Artist Name"), /* @__PURE__ */ react_default.createElement("h2", null, "Artist")));
};
var artists_default = Artists;

// src/routes/playlists.tsx
var Playlists = () => {
  return /* @__PURE__ */ react_default.createElement(react_default.Fragment, null, /* @__PURE__ */ react_default.createElement("div", {
    className: "gridBox wideBox"
  }, /* @__PURE__ */ react_default.createElement("div", {
    className: "playlistArtwork"
  }), /* @__PURE__ */ react_default.createElement("h1", null, "Liked Songs"), /* @__PURE__ */ react_default.createElement("h2", null, "56 liked songs")), /* @__PURE__ */ react_default.createElement("div", {
    className: "gridBox"
  }, /* @__PURE__ */ react_default.createElement("div", {
    className: "playlistArtwork"
  }), /* @__PURE__ */ react_default.createElement("h1", null, "Playlist Name"), /* @__PURE__ */ react_default.createElement("h2", null, "Description of Playlist")), /* @__PURE__ */ react_default.createElement("div", {
    className: "gridBox"
  }, /* @__PURE__ */ react_default.createElement("div", {
    className: "playlistArtwork"
  }), /* @__PURE__ */ react_default.createElement("h1", null, "Playlist Name"), /* @__PURE__ */ react_default.createElement("h2", null, "Super long description of the playlist.")), /* @__PURE__ */ react_default.createElement("div", {
    className: "gridBox"
  }, /* @__PURE__ */ react_default.createElement("div", {
    className: "playlistArtwork"
  }), /* @__PURE__ */ react_default.createElement("h1", null, "Playlist Name"), /* @__PURE__ */ react_default.createElement("h2", null, "Description of Playlist")));
};
var playlists_default = Playlists;

// src/routes/queue.tsx
var Queue = () => {
  return /* @__PURE__ */ react_default.createElement(react_default.Fragment, null, /* @__PURE__ */ react_default.createElement("h1", {
    className: "titleText"
  }, "Queue"), /* @__PURE__ */ react_default.createElement("h1", {
    className: "headerText"
  }, "Now playing"), /* @__PURE__ */ react_default.createElement("div", {
    className: "gridBox queueBox"
  }, /* @__PURE__ */ react_default.createElement("h1", null, "1"), /* @__PURE__ */ react_default.createElement("div", {
    className: "songInfo"
  }, /* @__PURE__ */ react_default.createElement("div", {
    className: "playlistArtwork"
  }), /* @__PURE__ */ react_default.createElement("div", {
    className: "songExtraInfo"
  }, /* @__PURE__ */ react_default.createElement("h1", null, "Song Name"), /* @__PURE__ */ react_default.createElement("h2", null, "Artist"))), /* @__PURE__ */ react_default.createElement("h3", null, "Album"), /* @__PURE__ */ react_default.createElement("h4", null, "2:36")), /* @__PURE__ */ react_default.createElement("h1", {
    className: "headerText"
  }, "Next up"), /* @__PURE__ */ react_default.createElement("div", {
    className: "gridBox queueBox"
  }, /* @__PURE__ */ react_default.createElement("h1", null, "2"), /* @__PURE__ */ react_default.createElement("div", {
    className: "songInfo"
  }, /* @__PURE__ */ react_default.createElement("div", {
    className: "playlistArtwork"
  }), /* @__PURE__ */ react_default.createElement("div", {
    className: "songExtraInfo"
  }, /* @__PURE__ */ react_default.createElement("h1", null, "Song Name"), /* @__PURE__ */ react_default.createElement("h2", null, "Very very long artist name"))), /* @__PURE__ */ react_default.createElement("h3", null, "Extremely long and unnecesary album name"), /* @__PURE__ */ react_default.createElement("h4", null, "1:47")), /* @__PURE__ */ react_default.createElement("div", {
    className: "gridBox queueBox"
  }, /* @__PURE__ */ react_default.createElement("h1", null, "3"), /* @__PURE__ */ react_default.createElement("div", {
    className: "songInfo"
  }, /* @__PURE__ */ react_default.createElement("div", {
    className: "playlistArtwork"
  }), /* @__PURE__ */ react_default.createElement("div", {
    className: "songExtraInfo"
  }, /* @__PURE__ */ react_default.createElement("h1", null, "Song Name"), /* @__PURE__ */ react_default.createElement("h2", null, "Artist"))), /* @__PURE__ */ react_default.createElement("h3", null, "Album"), /* @__PURE__ */ react_default.createElement("h4", null, "3:06")), /* @__PURE__ */ react_default.createElement("div", {
    className: "gridBox queueBox"
  }, /* @__PURE__ */ react_default.createElement("h1", null, "4"), /* @__PURE__ */ react_default.createElement("div", {
    className: "songInfo"
  }, /* @__PURE__ */ react_default.createElement("div", {
    className: "playlistArtwork"
  }), /* @__PURE__ */ react_default.createElement("div", {
    className: "songExtraInfo"
  }, /* @__PURE__ */ react_default.createElement("h1", null, "Song Name"), /* @__PURE__ */ react_default.createElement("h2", null, "Artist"))), /* @__PURE__ */ react_default.createElement("h3", null, "Album"), /* @__PURE__ */ react_default.createElement("h4", null, "3:06")));
};
var queue_default = Queue;

// src/components/playbackControls.tsx
var import_classnames = __toESM(require_classnames());

// src/components/icons.tsx
function Loop() {
  return /* @__PURE__ */ react_default.createElement("svg", {
    viewBox: "0 0 512.43 483.62"
  }, /* @__PURE__ */ react_default.createElement("path", {
    d: "M234.86,126.9q-39.72,0-79.45,0C79.49,127,30.33,199.21,58.18,270c5.1,12.95,3.71,24.31-7.81,32.72-9.87,\n                7.19-20.28,6.51-30.08-.92-4.18-3.16-6.31-7.7-8.25-12.36C-30.11,188.46,43.57,77.09,153.09,76.51c54.77-.29,\n                109.55-.5,164.31.26,13.26.18,17.44-3.8,16.21-16.64-1-10.33-.24-20.85.07-31.27.17-5.8,1.65-11.31,7.76-13.85,\n                6-2.48,10.8-.07,15.47,3.68q43.88,35.24,87.85,70.36c11.26,9,11.26,16.2,0,25.24Q400.66,149.72,356.44,185c-4.52,\n                3.63-9.31,5.7-15,3.3C335.92,186,334,181,333.84,175.6c-.43-12.83-.64-25.68-.35-38.51.18-7.49-2.54-10.37-10.15-10.3C293.85,127.06,\n                264.35,126.9,234.86,126.9Z",
    transform: "translate(0 -14)"
  }), /* @__PURE__ */ react_default.createElement("path", {
    d: "M277,384.71q40,0,80,0c75.91-.06,125.07-72.32,97.23-143-5.21-13.23-3.64-24.74,8.28-33.07,10-7,20.43-6,\n                30.06,1.63,4.09,3.25,6.09,7.87,8,12.53,41.61,100.9-32,211.75-141.24,212.34q-84,.45-167.91-.14c-9.91-.07-13.12,\n                3.2-12.58,12.85.64,11.6.22,23.27-.15,34.9C178.58,488.46,177,494,171,496.6s-10.79,0-15.45-3.71q-43.64-35.06-87.38-70c-11.86-9.51-11.84-16.47,\n                0-26q43.44-34.83,86.91-69.6c4.8-3.86,9.73-6.71,15.93-4s7.64,8.58,7.8,14.52c.32,12.23.49,24.48.14,36.71-.21,\n                7.52,2.59,10.35,10.18,10.28C218.43,384.55,247.72,384.71,277,384.71Z",
    transform: "translate(0 -14)"
  }));
}
function Play() {
  return /* @__PURE__ */ react_default.createElement("svg", {
    viewBox: "0 0 297.19 389.08"
  }, /* @__PURE__ */ react_default.createElement("path", {
    d: "M394.15,236.19,145,65.69A24,24,0,0,0,107.4,85.5v341A24,24,0,0,0,145,446.31l249.19-170.5A24,24,0,0,0,394.15,236.19Z",
    transform: "translate(-107.4 -61.46)"
  }));
}
function Pause() {
  return /* @__PURE__ */ react_default.createElement("svg", {
    viewBox: "0 0 195.69 393.78"
  }, /* @__PURE__ */ react_default.createElement("rect", {
    x: "158.16",
    y: "59.29",
    width: "51.63",
    height: "393.78",
    rx: "25.82",
    transform: "translate(209.79 453.08) rotate(-180)"
  }), /* @__PURE__ */ react_default.createElement("rect", {
    x: "302.21",
    y: "59.29",
    width: "51.63",
    height: "393.78",
    rx: "25.82",
    transform: "translate(497.9 453.08) rotate(-180)"
  }));
}
function Previous() {
  return /* @__PURE__ */ react_default.createElement("svg", {
    viewBox: "0 0 374.3 393.78"
  }, /* @__PURE__ */ react_default.createElement("path", {
    d: "M156.31,276.18,405.5,446.68a24,24,0,0,0,37.55-19.81v-341a24,24,0,0,0-37.55-19.8L156.31,236.56A24,24,0,0,0,156.31,276.18Z",
    transform: "translate(-68.76 -59.29)"
  }), /* @__PURE__ */ react_default.createElement("rect", {
    x: "68.76",
    y: "59.29",
    width: "51.63",
    height: "393.78",
    rx: "25.82",
    transform: "translate(120.39 453.08) rotate(-180)"
  }));
}
function Next() {
  return /* @__PURE__ */ react_default.createElement("svg", {
    viewBox: "0 0 374.3 393.78"
  }, /* @__PURE__ */ react_default.createElement("path", {
    d: "M355.5,236.19,106.31,65.69A24,24,0,0,0,68.76,85.5v341a24,24,0,0,0,37.55,19.81L355.5,275.81A24,24,0,0,0,355.5,236.19Z",
    transform: "translate(-68.76 -59.29)"
  }), /* @__PURE__ */ react_default.createElement("rect", {
    x: "322.66",
    width: "51.63",
    height: "393.78",
    rx: "25.82"
  }));
}
function Shuffle() {
  return /* @__PURE__ */ react_default.createElement("svg", {
    viewBox: "0 0 512.77 401.95"
  }, /* @__PURE__ */ react_default.createElement("path", {
    d: "M39,384.21c8,0,16.15.83,24-.18,15.06-1.94,27-9.78,36.57-21.58Q195.4,244.78,291.32,127.18c19.78-24.34,45.1-36.37,76.32-36.34,\n                16.26,0,32.51-.13,48.77.08,4.3.06,5.79-1.36,5.48-5.58a93,93,0,0,1,0-12c.78-15,16-23.2,28.6-15.08q27,17.43,53.44,35.65c11.24,7.72,\n                11.31,22.16.1,29.89Q477.11,142.3,449.62,160c-12.23,7.85-26.41.4-27.73-14-.05-.57,0-1.15-.05-1.72-.55-17.39-.55-17.39-18.21-17.39-11.67,\n                0-23.34.24-35-.06-19.81-.5-35.41,7.32-47.83,22.57Q225.19,266.85,129.45,384.2C109.52,408.72,84,420.74,52.59,420.65c-11.1,0-22.19.08-33.28,\n                0C7.94,420.49-.47,412.68-.38,402.52S8,384.77,19.48,384.63c6.5-.07,13,0,19.51,0Z",
    transform: "translate(0.39 -55.03)"
  }), /* @__PURE__ */ react_default.createElement("path", {
    d: "M512,402.4a16.71,16.71,0,0,1-7.77,15.06c-18.08,12.18-36.09,24.45-54.41,36.25-12.69,8.16-27.08.21-28-14.9-.35-5.85,\n                2.67-13.94-1.37-16.93s-11.69-1.05-17.77-1.23c-18.5-.58-37.1,1.54-55.5-1.91-21.93-4.11-39.88-15.07-53.95-32.26-16.59-20.27-33-40.7-49.4-61.12-7.72-9.6-7.18-20.15,\n                1.18-26.91,8.09-6.55,19.15-4.74,26.67,4.47q24.49,30,48.92,60c11.7,14.33,26.66,21.84,45.36,21.68,16.64-.13,33.28-.2,\n                49.91.08,4.89.08,6.26-1.54,6.06-6.22-.23-5.31-.37-10.8.7-16,2.56-12.28,15.77-18.33,26.31-11.64,18.72,11.88,\n                37,24.41,55.37,36.87C509.47,391.28,512.38,396.39,512,402.4Z",
    transform: "translate(0.39 -55.03)"
  }), /* @__PURE__ */ react_default.createElement("path", {
    d: "M42.25,90.85C52,90.7,65,90.4,77.78,93.55A91.46,91.46,0,0,1,128,125.63q24.41,30,48.84,60c7.92,\n                9.75,7.56,20.6-.82,27.39s-19.16,4.75-27-4.86Q124.94,178.65,100.94,\n                149c-12.07-14.91-27.45-22.58-46.8-22.22-11.65.23-23.31.14-35,0C7.87,126.71-.55,118.77-.38,108.65S7.89,\n                91.06,19,90.87C25.67,90.75,32.35,90.85,42.25,90.85Z",
    transform: "translate(0.39 -55.03)"
  }));
}
var Mute = ({ onClick, volume }) => {
  return /* @__PURE__ */ react_default.createElement("svg", {
    viewBox: "0 0 510.65 434.66",
    onClick
  }, /* @__PURE__ */ react_default.createElement("path", {
    d: "M236.39,255.8q0,81.51,0,163c0,11.07-4.94,19-13.43,21.64-8,2.51-14.52,0-20.32-5.83-31.67-31.79-63.51-63.42-95.09-95.3a19.14,19.14,0,0,\n                0-15-6.13c-22.94.25-45.88.14-68.81.08-14-.05-21.94-6.62-22.13-20.67q-.75-57.08,0-114.16c.19-14.05,8.1-20.62,\n                22.13-20.66,23.1-.07,46.22.29,69.3-.29a22.32,22.32,0,0,0,13.86-5.68q47.17-46.26,93.56-93.31c6.85-6.91,\n                14.09-11.61,23.84-7.31s12.17,12.56,12.14,22.55C236.31,147.77,236.4,201.78,236.39,255.8Z",
    transform: "translate(-1.26 -38.1)"
  }), volume > 0 && /* @__PURE__ */ react_default.createElement("path", {
    d: "M315.68,255.71c.59-13.58-5.07-24-16.28-31.59a103.72,103.72,0,0,1-12.23-9.38c-7.38-6.82-8.59-15.77-3.65-23.3,5.25-8,\n                15.08-10.86,24.16-7,44.83,19.18,60.46,76.29,32,116.18a75.17,75.17,0,0,1-31.13,25.61c-9.41,4.19-19.26,\n                1.8-24.77-6.24-5.33-7.77-4.06-16.88,3.79-24.06a104.85,104.85,0,0,1,11.88-9C310.47,279.42,316.16,269.21,315.68,255.71Z",
    transform: "translate(-1.26 -38.1)"
  }), volume > 33 && /* @__PURE__ */ react_default.createElement("path", {
    d: "M432.9,263.43c-3.57,57.53-32.81,106.14-92.41,135-10.84,5.25-22.24,1.69-27.15-7.88-4.82-9.4-1.46-19.9,9.18-25.69,\n                18.56-10.08,35.74-21.44,48.67-38.78,43-57.65,24.5-140.77-39.1-174.45-3.68-2-7.34-3.92-10.87-6.1-9.14-5.64-12.35-15.52-8.1-24.52s15.49-14,\n                25-9.11c13.22,6.82,26.62,14,38.16,23.24C411.72,163.59,433,210.28,432.9,263.43Z",
    transform: "translate(-1.26 -38.1)"
  }), volume > 66 && /* @__PURE__ */ react_default.createElement("path", {
    d: "M511.91,256.54c-.65,7.76-1.19,15.53-2,23.27-5.36,52.65-26.94,97.85-62.62,136.67-21.37,23.25-46.64,40.87-75.39,\n                53.67-12.32,5.49-23.3,2.1-28-8.44-4.47-10,.47-20.87,12.37-26.27,40.07-18.2,70.65-46.51,92.43-84.8,38.44-67.56,\n                31.14-155.91-18.86-218.33a193.24,193.24,0,0,0-72.67-56.25c-16.11-7.22-19.88-23.66-7.76-33.67,6.51-5.38,\n                13.74-5.27,21.11-2.07,43.33,18.84,77.57,48.41,103.11,88,23.6,36.6,36.58,76.58,37.26,120.33a38.33,38.33,0,0,0,1,5.86Z",
    transform: "translate(-1.26 -38.1)"
  }));
};
function Spotify() {
  return /* @__PURE__ */ react_default.createElement("svg", {
    viewBox: "0 0 24 24",
    width: "24",
    height: "24",
    className: "icon-22AiRD"
  }, /* @__PURE__ */ react_default.createElement("path", {
    d: "M12,2A10,10,0,1,0,22,12h0A10,10,0,0,0,12,2Zm4.59,14.42a.62.62,0,0,1-.86.21h0c-2.35-1.43-5.31-1.76-8.79-1a.62.62,0,0,1-.27-1.22c3.81-.87,7.07-.5,\n            9.71,1.12a.62.62,0,0,1,.21.85Zm1.22-2.72a.78.78,0,0,1-1.07.26h0a13.1,13.1,0,0,0-10-1.17.78.78,0,1,\n            1-.5-1.48h.05a14.58,14.58,0,0,1,11.23,1.33.78.78,0,0,1,.26,1.07Zm.1-2.84C14.69,9,9.37,\n            8.77,6.3,9.71a.94.94,0,0,1-.55-1.79c3.54-1.08,9.41-.87,13.12,1.33a1,1,0,0,1,.33,1.29.94.94,0,0,1-1.29.32Z"
  }));
}
function Search() {
  return /* @__PURE__ */ react_default.createElement("svg", {
    viewBox: "0 0 24 24"
  }, /* @__PURE__ */ react_default.createElement("path", {
    d: "M23.69,21.29l-6.35-6.35a1.13,1.13,0,0,0-.45-.26,9.33,9.33,0,1,0-2.21,2.21,1.2,1.2,0,0,0,\n            .26.45l6.36,6.35a1.54,1.54,0,0,0,2.11-.28A1.55,1.55,0,0,0,23.69,21.29ZM9.3,15.22A5.92,5.92,0,1,1,15.22,9.3,5.93,5.93,0,0,1,9.3,15.22Z"
  }));
}

// src/components/volume.tsx
var Volume = () => {
  const [volume, setVolume] = react_default.useState(["65"]);
  var widthStyle = {
    "--progress-bar-percentage": `${Number.parseInt(volume[0])}%`
  };
  return /* @__PURE__ */ react_default.createElement("div", {
    id: "volumeLevel",
    className: "progressBarRow row"
  }, /* @__PURE__ */ react_default.createElement("button", {
    id: "muteBtn"
  }, /* @__PURE__ */ react_default.createElement(Mute, {
    volume: Number.parseInt(volume[0]),
    onClick: () => setVolume((prev) => {
      return prev[0] == "0" ? [prev[1]] : ["0", prev[0]];
    })
  })), /* @__PURE__ */ react_default.createElement("input", {
    type: "range",
    className: "progress",
    min: "0",
    max: "100",
    value: volume[0],
    onChange: (e) => setVolume([e.target.value, volume[0]]),
    style: widthStyle
  }));
};
var volume_default = Volume;

// src/components/playbackControls.tsx
var PlayBackControls = () => {
  const { state } = useSpotify();
  const { playerState, currentlyPlaying, accessToken } = state;
  return accessToken && /* @__PURE__ */ react_default.createElement("div", {
    id: "playbackControls"
  }, /* @__PURE__ */ react_default.createElement("div", {
    id: "songInformation"
  }, /* @__PURE__ */ react_default.createElement("div", {
    className: "row"
  }, /* @__PURE__ */ react_default.createElement("div", {
    id: "currentArtwork",
    style: { backgroundImage: `url('${currentlyPlaying.image}')` }
  })), /* @__PURE__ */ react_default.createElement("div", {
    className: "row"
  }, /* @__PURE__ */ react_default.createElement("p", {
    id: "currentSong"
  }, currentlyPlaying.song, " - ", currentlyPlaying.album)), /* @__PURE__ */ react_default.createElement("div", {
    className: "row"
  }, /* @__PURE__ */ react_default.createElement("p", {
    id: "currentArtist"
  }, currentlyPlaying.artist))), /* @__PURE__ */ react_default.createElement(volume_default, null), /* @__PURE__ */ react_default.createElement("div", {
    className: "row"
  }, /* @__PURE__ */ react_default.createElement("button", {
    id: "shuffle",
    className: (0, import_classnames.default)({ active: playerState.isShuffle })
  }, /* @__PURE__ */ react_default.createElement(Shuffle, null)), /* @__PURE__ */ react_default.createElement("button", {
    id: "previous"
  }, /* @__PURE__ */ react_default.createElement(Previous, null)), /* @__PURE__ */ react_default.createElement("button", {
    id: "playPause"
  }, playerState.isPlaying ? /* @__PURE__ */ react_default.createElement(Play, null) : /* @__PURE__ */ react_default.createElement(Pause, null)), /* @__PURE__ */ react_default.createElement("button", {
    id: "next"
  }, /* @__PURE__ */ react_default.createElement(Next, null)), /* @__PURE__ */ react_default.createElement("button", {
    id: "loop",
    className: (0, import_classnames.default)({ active: playerState.isLooping != 0 }, `mode${playerState.isLooping}`)
  }, /* @__PURE__ */ react_default.createElement(Loop, null))), /* @__PURE__ */ react_default.createElement("div", {
    id: "songProgress",
    className: "progressBarRow row"
  }, /* @__PURE__ */ react_default.createElement("p", null, "1:43"), /* @__PURE__ */ react_default.createElement("div", {
    className: "progressBar"
  }, /* @__PURE__ */ react_default.createElement("div", {
    className: "progressBarInner"
  }), /* @__PURE__ */ react_default.createElement("div", {
    className: "progressKnob"
  })), /* @__PURE__ */ react_default.createElement("p", null, "2:38")));
};
var playbackControls_default = PlayBackControls;

// src/components/navLink.tsx
var import_classnames2 = __toESM(require_classnames());
function NavLink2({ children, to, defaultClassName, isActive }) {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });
  return /* @__PURE__ */ react_default.createElement(Link, {
    to,
    className: (0, import_classnames2.default)(defaultClassName, { [isActive]: match })
  }, children);
}

// src/components/dashboard.tsx
var Dashboard = () => {
  return /* @__PURE__ */ react_default.createElement(react_default.Fragment, null, /* @__PURE__ */ react_default.createElement("div", {
    id: "navbar"
  }, /* @__PURE__ */ react_default.createElement("div", {
    className: "pillRow"
  }, /* @__PURE__ */ react_default.createElement(NavLink2, {
    to: "/",
    defaultClassName: "pill",
    isActive: "select"
  }, "Playlists"), /* @__PURE__ */ react_default.createElement(NavLink2, {
    to: "/artists",
    defaultClassName: "pill",
    isActive: "select"
  }, "Artists"), /* @__PURE__ */ react_default.createElement(NavLink2, {
    to: "/albums",
    defaultClassName: "pill",
    isActive: "select"
  }, "Albums"), /* @__PURE__ */ react_default.createElement(NavLink2, {
    to: "/queue",
    defaultClassName: "pill",
    isActive: "select"
  }, "Queue"), /* @__PURE__ */ react_default.createElement("div", {
    id: "discordifySearch"
  }, /* @__PURE__ */ react_default.createElement(Search, null)))), /* @__PURE__ */ react_default.createElement("div", {
    className: "grid"
  }, /* @__PURE__ */ react_default.createElement(Outlet, null)), /* @__PURE__ */ react_default.createElement(playbackControls_default, null));
};
var dashboard_default = Dashboard;

// src/components/login.tsx
var Login = () => {
  let navigate = useNavigate();
  let location = useLocation();
  const { dispatch } = useSpotify();
  react_default.useEffect(() => {
    getAuthHeader().then((header) => {
      if (header) {
        dispatch({ type: "SET_ACCESS" /* SET_ACCESS */, payload: header });
        navigate(location.state?.from?.pathname || "/", { replace: true });
      }
    });
  }, []);
  return /* @__PURE__ */ react_default.createElement("h1", null, "Please get open a spotify device to use this plugin");
};
var login_default = Login;

// src/components/sidebar.tsx
var Sidebar = () => {
  const navigate = useNavigate();
  const { state, dispatch } = useSpotify();
  const { accessToken } = state;
  react_default.useEffect(() => {
    if (accessToken) {
      getPlaying(accessToken).then((e) => {
        log2(e);
        dispatch({ type: "UPDATE_PLAYER" /* UPDATE_PLAYER */, payload: { isPlaying: e.is_playing } });
      });
    }
    navigate(BdApi.loadData("discordify", "pathname") || "/");
  }, []);
  return /* @__PURE__ */ react_default.createElement("div", {
    id: "discordSpotifySidebar"
  }, /* @__PURE__ */ react_default.createElement("div", {
    id: "discordSpotifyInner"
  }, /* @__PURE__ */ react_default.createElement(Routes, null, /* @__PURE__ */ react_default.createElement(Route, {
    path: "/",
    element: /* @__PURE__ */ react_default.createElement(Protect, null, /* @__PURE__ */ react_default.createElement(dashboard_default, null))
  }, /* @__PURE__ */ react_default.createElement(Route, {
    index: true,
    element: /* @__PURE__ */ react_default.createElement(playlists_default, null)
  }), /* @__PURE__ */ react_default.createElement(Route, {
    path: "artists",
    element: /* @__PURE__ */ react_default.createElement(artists_default, null)
  }), /* @__PURE__ */ react_default.createElement(Route, {
    path: "albums",
    element: /* @__PURE__ */ react_default.createElement(albums_default, null)
  }), /* @__PURE__ */ react_default.createElement(Route, {
    path: "queue",
    element: /* @__PURE__ */ react_default.createElement(queue_default, null)
  })), /* @__PURE__ */ react_default.createElement(Route, {
    path: "/login",
    element: /* @__PURE__ */ react_default.createElement(login_default, null)
  }))));
};
var Protect = ({ children }) => {
  const { state } = useSpotify();
  let location = useLocation();
  if (!state.accessToken) {
    return /* @__PURE__ */ react_default.createElement(Navigate, {
      to: "/login",
      state: { from: location },
      replace: true
    });
  }
  return children;
};
var sidebar_default = Sidebar;

// src/app.tsx
function App() {
  const [isHidden, setIsHidden] = react_default.useState(BdApi.loadData("discordify", "isHidden"));
  const { state, dispatch } = useSpotify();
  const location = useLocation();
  const { accessToken } = state;
  react_default.useEffect(() => {
    BdApi.setData("discordify", "pathname", location.pathname);
  }, [location]);
  react_default.useEffect(() => {
    const handleTokenUpdate = (e) => {
      if (accessToken !== e.accessToken)
        dispatch({ type: "SET_ACCESS" /* SET_ACCESS */, payload: e.accessToken });
    };
    const handleStateUpdate = (e) => {
      if (!accessToken) {
        log2(accessToken, state);
        getAuthHeader().then((token) => {
          if (token)
            dispatch({ type: "SET_ACCESS" /* SET_ACCESS */, payload: token });
        });
      }
    };
    const handleDeviceUpdate = (e) => {
      const filteredDevices = e.devices.filter((d) => d.type === "Computer");
      if (filteredDevices.length === 0)
        dispatch({ type: "SET_ACCESS" /* SET_ACCESS */, payload: null });
      if (!accessToken && filteredDevices.length > 0)
        getAuthHeader(e.accountId).then((token) => {
          if (token)
            dispatch({ type: "SET_ACCESS" /* SET_ACCESS */, payload: token });
        });
    };
    const log_pairs = [
      [ACTION_TYPES.SPOTIFY_ACCOUNT_ACCESS_TOKEN, handleTokenUpdate],
      [ACTION_TYPES.SPOTIFY_PLAYER_STATE, handleStateUpdate],
      [ACTION_TYPES.SPOTIFY_SET_DEVICES, handleDeviceUpdate]
    ];
    log_pairs.forEach(([action, func]) => Dispatcher.subscribe(action, func));
    return () => {
      log_pairs.forEach(([action, func]) => Dispatcher.unsubscribe(action, func));
    };
  }, [accessToken]);
  return /* @__PURE__ */ react_default.createElement(react_default.Fragment, null, /* @__PURE__ */ react_default.createElement("button", {
    id: "discordifyBtn",
    onClick: () => setIsHidden((prev) => {
      BdApi.saveData("discordify", "isHidden", !prev);
      return !prev;
    })
  }, /* @__PURE__ */ react_default.createElement("div", {
    className: "iconWrapper-2awDjA clickable-ZD7xvu"
  }, /* @__PURE__ */ react_default.createElement(Spotify, null), /* @__PURE__ */ react_default.createElement("div", {
    id: "discordifyBtnTooltip",
    className: "tooltip-14MtrL tooltipBottom-2WzfVx tooltipPrimary-3qLMbS"
  }, /* @__PURE__ */ react_default.createElement("div", {
    className: "tooltipPointer-3L49xb"
  }), /* @__PURE__ */ react_default.createElement("div", {
    className: "tooltipContent-Nejnvh"
  }, isHidden ? "Open" : "Close", " Spotify")))), react_dom_default.createPortal(!isHidden && /* @__PURE__ */ react_default.createElement(sidebar_default, null), document.querySelector(SIDEBAR_CONTAINER_CLASS)));
}

// src/discordify.scss
BdApi.injectCSS("discordify-styles", ':root{--discordify-width: 400px;--discordify-font-color: #ffffff;--discordify-font-color-alt: #ababab;--discordify-bg: #212121;--discordify-bg-alt: #111111;--discordify-navbar-bg: #181818;--discordify-navbar-bg-alt: #282828;--discordify-highlight: #2a2a2a;--discordify-playbackBar-bg: #535353;--discordify-btn-color: #b3b3b3;--discordify-btn-color-alt: #333333;--discordify-btn-color-hover: #ffffff;--discordify-btn-color-active: #1db954}#discordifyBtn{background:none;padding:0;margin:0;outline:none;position:relative;margin-right:6px}#discordifyBtn #discordifyBtnTooltip{visibility:hidden;position:absolute;left:50%;bottom:-8px;transform:translate(-50%, 100%)}#discordifyBtn svg *{fill:var(--interactive-normal)}#discordifyBtn:hover svg *{fill:var(--interactive-hover)}#discordifyBtn:hover #discordifyBtnTooltip{visibility:visible}#discordSpotifySidebar{width:var(--discordify-width);min-width:var(--discordify-width);height:100%;box-sizing:border-box;color:var(--discordify-btn-color);position:relative}#discordSpotifySidebar #discordSpotifyInner{display:flex;justify-content:center;flex-direction:column;height:100%}#discordSpotifySidebar *{box-sizing:border-box}#discordSpotifySidebar .titleText{color:var(--discordify-font-color);font-size:24px;font-weight:700;letter-spacing:-0.04em;line-height:28px;text-transform:none;text-align:left;width:100%;height:fit-content}#discordSpotifySidebar .headerText{color:var(--discordify-font-color-alt);font-weight:600;display:block;width:100%}#discordSpotifySidebar .round{border-radius:50% !important}#discordSpotifySidebar .grid{background:linear-gradient(110deg, var(--discordify-bg-alt), var(--discordify-bg) 75%);align-items:flex-start;padding:12px;display:flex;flex-shrink:1;flex-grow:1;flex-basis:0;flex-wrap:wrap;gap:8px;overflow-y:auto}#discordSpotifySidebar .grid .gridBox{background-color:var(--discordify-navbar-bg);border-radius:6px;padding:12px;flex-shrink:1;flex-grow:1;max-width:calc(50% - 4px);height:fit-content}#discordSpotifySidebar .grid .gridBox:hover{background-color:var(--discordify-highlight)}#discordSpotifySidebar .grid .gridBox:hover .playlistArtwork:before{visibility:visible}#discordSpotifySidebar .grid .gridBox:last-of-type{margin-right:auto}#discordSpotifySidebar .grid .gridBox.queueBox{width:100%;max-width:100%;background:none;display:grid;grid-template-columns:[index] 16px [first] 3fr [var1] 2fr [last];align-items:center}#discordSpotifySidebar .grid .gridBox.queueBox:hover{background-color:var(--discordify-highlight)}#discordSpotifySidebar .grid .gridBox.queueBox h1,#discordSpotifySidebar .grid .gridBox.queueBox h2,#discordSpotifySidebar .grid .gridBox.queueBox h3,#discordSpotifySidebar .grid .gridBox.queueBox h4{max-width:calc(var(--discordify-width)/4);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}#discordSpotifySidebar .grid .gridBox.queueBox h4{grid-column:last}#discordSpotifySidebar .grid .gridBox.queueBox .songInfo{display:flex;flex-wrap:nowrap;flex-direction:row;line-height:21px;align-items:center;gap:12px}#discordSpotifySidebar .grid .gridBox.queueBox .songInfo .songExtraInfo{flex-direction:column}#discordSpotifySidebar .grid .gridBox.queueBox .playlistArtwork{width:42px;border-radius:2px;margin-bottom:0}#discordSpotifySidebar .grid .gridBox.queueBox .playlistArtwork::before{visibility:hidden !important}#discordSpotifySidebar .grid .gridBox.wideBox{max-width:100%;flex-basis:100%;background:linear-gradient(135deg, #470cf5, #8d8ce5)}#discordSpotifySidebar .grid .gridBox.wideBox h1{font-size:16pt;font-weight:600;margin-bottom:12px}#discordSpotifySidebar .grid .gridBox.wideBox h2{color:var(--discordify-font-color)}#discordSpotifySidebar .grid .gridBox.wideBox .playlistArtwork{max-width:100%;max-height:100px;visibility:hidden}#discordSpotifySidebar .grid .gridBox.wideBox .playlistArtwork:after{padding-bottom:50%}#discordSpotifySidebar .grid .gridBox .playlistArtwork{position:relative;width:100%;border-radius:4px;max-width:180px;max-height:180px;background:var(--discordify-btn-color);margin-bottom:16px}#discordSpotifySidebar .grid .gridBox .playlistArtwork:before{visibility:hidden;border-radius:50%;content:"";display:block;position:absolute;width:25%;height:25%;min-width:30px;min-height:30px;max-width:45px;max-width:45px;bottom:6px;right:6px;background-color:var(--discordify-btn-color-active);box-shadow:rgba(0,0,0,.25) 3px 3px 8px,rgba(0,0,0,.15) 2px 2px 4px}#discordSpotifySidebar .grid .gridBox .playlistArtwork:after{content:"";display:block;padding-bottom:100%}#discordSpotifySidebar .grid .gridBox h1{color:var(--discordify-font-color);margin-bottom:8px}#discordSpotifySidebar .grid .gridBox h2{color:var(--discordify-font-color-alt);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}#discordSpotifySidebar #navbar{padding:12px;background-color:var(--discordify-bg-alt)}#discordSpotifySidebar #navbar .pillRow{display:flex;flex-direction:row;align-items:flex-start;gap:8px;width:100%}#discordSpotifySidebar #navbar .pillRow .pill{padding:12px;border-radius:8px;color:var(--discordify-font-color);font-weight:500}#discordSpotifySidebar #navbar .pillRow .pill.select,#discordSpotifySidebar #navbar .pillRow .pill:hover{cursor:pointer;background-color:var(--discordify-btn-color-alt)}#discordSpotifySidebar #navbar .pillRow #discordifySearch{width:40px;height:40px;align-self:center;border-radius:50%;display:flex;align-items:center;justify-content:center;margin-left:auto}#discordSpotifySidebar #navbar .pillRow #discordifySearch svg{width:17px;height:17px}#discordSpotifySidebar #navbar .pillRow #discordifySearch svg *{fill:var(--discordify-font-color-alt)}#discordSpotifySidebar #navbar .pillRow #discordifySearch:hover{cursor:pointer;background-color:var(--discordify-btn-color-alt)}#discordSpotifySidebar #navbar .pillRow #discordifySearch:hover svg *{fill:var(--discordify-font-color)}#discordSpotifySidebar #playbackControls{text-align:center;border-top:solid 1px #404040;background-color:var(--discordify-navbar-bg);width:var(--discordify-width);height:fit-content;padding-top:25px;padding-bottom:25px;padding-left:12px;padding-right:12px}#discordSpotifySidebar #playbackControls .row{margin-bottom:12px;margin-left:30px;margin-right:30px;display:flex;flex-direction:row;justify-content:space-evenly;align-items:center;gap:8px}#discordSpotifySidebar #playbackControls .row:last-of-type{margin-bottom:0}#discordSpotifySidebar #playbackControls .progressBarRow{padding-top:8px;padding-bottom:8px}#discordSpotifySidebar #playbackControls .progressBarRow p{margin:0}#discordSpotifySidebar #playbackControls .progressBarRow input[type=range]{--progress-bar-inner: var(--discordify-btn-color);-webkit-appearance:none;width:100%;height:15px;overflow:hidden;background:transparent}#discordSpotifySidebar #playbackControls .progressBarRow input[type=range]:focus{outline:none}#discordSpotifySidebar #playbackControls .progressBarRow input[type=range]::-webkit-slider-thumb{-webkit-appearance:none;visibility:hidden;border-radius:50%;background-color:var(--discordify-btn-color-hover);box-shadow:5px 5px 5px rgba(0,0,0,.5);width:15px;height:15px;cursor:pointer;margin-top:-5px}#discordSpotifySidebar #playbackControls .progressBarRow input[type=range]::-webkit-slider-runnable-track{border-radius:100px;width:100%;height:5px;background:linear-gradient(to right, var(--progress-bar-inner) var(--progress-bar-percentage), var(--discordify-playbackBar-bg) var(--progress-bar-percentage))}#discordSpotifySidebar #playbackControls .progressBarRow:hover input[type=range]{--progress-bar-inner: var(--discordify-btn-color-active)}#discordSpotifySidebar #playbackControls .progressBarRow:hover input[type=range]::-webkit-slider-thumb{visibility:visible}#discordSpotifySidebar #playbackControls #volumeLevel .progressBar{width:70%}#discordSpotifySidebar #playbackControls #songInformation #currentArtwork{width:calc(var(--discordify-width) - var(--discordify-width)*.45);height:calc(var(--discordify-width) - var(--discordify-width)*.45);max-width:300px;max-height:300px;background-color:var(--discordify-btn-color);margin-bottom:8px;border-radius:8px;background-size:100%}#discordSpotifySidebar #playbackControls #songInformation #compactBtn{background-color:var(--discordify-btn-color);border-radius:50%;display:none}#discordSpotifySidebar #playbackControls #songInformation #compactBtn svg *{fill:var(--discordify-navbar-bg)}#discordSpotifySidebar #playbackControls #songInformation #compactBtn:hover{background-color:var(--discordify-btn-color-hover)}#discordSpotifySidebar #playbackControls #songInformation #currentArtist,#discordSpotifySidebar #playbackControls #songInformation #currentSong{margin:0;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:calc(var(--discordify-width) - 48px)}#discordSpotifySidebar #playbackControls #songInformation #currentSong{color:var(--discordify-btn-color-hover)}#discordSpotifySidebar #playbackControls #songInformation #currentArtist{margin-bottom:12px}#discordSpotifySidebar #playbackControls.compact #songInformation{display:flex;margin-left:auto;margin-right:auto;width:85%;margin-bottom:24px;border-bottom:solid 1px #404040}#discordSpotifySidebar #playbackControls.compact #songInformation #compactBtn{margin-left:auto;margin-right:8px;display:block}#discordSpotifySidebar #playbackControls.compact #songInformation #compactBtn svg{transform:rotate(180deg)}#discordSpotifySidebar #playbackControls.compact #songInformation .row{margin-left:0;margin-right:0}#discordSpotifySidebar #playbackControls.compact #songInformation #currentArtwork{width:40px;height:40px;margin-right:18px;margin-left:8px;border-radius:2px}#discordSpotifySidebar #playbackControls.compact #songInformation #songDetails p{max-width:calc(var(--discordify-width)/2 - 48px)}#discordSpotifySidebar #playbackControls.compact #songInformation #songDetails .row{display:block;text-align:left}#discordSpotifySidebar #playbackControls.compact #volumeLevel{display:none}#discordSpotifySidebar #playbackControls button{position:relative;width:35px;max-width:35px;height:35px;max-height:35px;font-size:0;background:none}#discordSpotifySidebar #playbackControls button svg{width:15px;height:15px}#discordSpotifySidebar #playbackControls button svg *{fill:#b3b3b3}#discordSpotifySidebar #playbackControls button:hover svg *{fill:var(--discordify-btn-color-hover)}#discordSpotifySidebar #playbackControls button.active svg *{fill:var(--discordify-btn-color-active)}#discordSpotifySidebar #playbackControls button#shuffle.active::after,#discordSpotifySidebar #playbackControls button#loop.active::after{content:"";min-width:4px;min-height:4px;border-radius:50%;position:absolute;bottom:0;left:50%;transform:translateX(-50%);background:var(--discordify-btn-color-active)}#discordSpotifySidebar #playbackControls button#shuffle.active.mode2::before,#discordSpotifySidebar #playbackControls button#loop.active.mode2::before{font-size:8pt;font-weight:600;color:var(--discordify-navbar-bg);border:2px solid var(--discordify-navbar-bg);content:"1";min-width:14px;min-height:14px;border-radius:50%;position:absolute;top:0;right:-5px;transform:translateX(-50%);background:var(--discordify-btn-color-active)}#discordSpotifySidebar #playbackControls button#muteBtn svg{width:19px;height:19px}#discordSpotifySidebar #playbackControls button#playPause{width:45px;max-width:45px;height:45px;max-height:45px;border-radius:50%;transition:transform .05s ease;background:var(--discordify-btn-color)}#discordSpotifySidebar #playbackControls button#playPause svg *{fill:var(--discordify-navbar-bg)}#discordSpotifySidebar #playbackControls button#playPause:hover{background-color:var(--discordify-btn-color-hover);transform:scale(1.1)}');

// src/discordify.tsx
var LOGS = [
  ACTION_TYPES.SPOTIFY_PLAYER_PLAY,
  ACTION_TYPES.SPOTIFY_PLAYER_PAUSE,
  ACTION_TYPES.SPOTIFY_ACCOUNT_ACCESS_TOKEN_REVOKE
];
var Discordify = class {
  load() {
    BdApi.setData("discordify", "isHidden", true);
  }
  start() {
    log2("started test!");
    const HeaderBarContainer = BdApi.findModuleByDisplayName("HeaderBarContainer")?.prototype;
    BdApi.Patcher.after("discordify", HeaderBarContainer, "renderLoggedIn", (_, __, returnValue) => {
      returnValue?.props?.toolbar?.props?.children.push(/* @__PURE__ */ react_default.createElement(MainComponent, null));
    });
    LOGS.forEach((l) => Dispatcher.subscribe(l, (e) => log2(l, e)));
  }
  stop() {
    BdApi.Patcher.unpatchAll("discordify");
    LOGS.forEach((l) => Dispatcher.unsubscribe(l, (e) => log2(l, e)));
  }
};
var MainComponent = () => {
  const [state, dispatch] = react_default.useReducer(spotifyReducer, initialState);
  return /* @__PURE__ */ react_default.createElement(SpotifyContext.Provider, {
    value: { state, dispatch }
  }, /* @__PURE__ */ react_default.createElement(MemoryRouter, null, /* @__PURE__ */ react_default.createElement(App, null)));
};
module.exports = __toCommonJS(discordify_exports);
/*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/**
 * React Router DOM v6.2.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * React Router v6.2.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/*@end@*/
