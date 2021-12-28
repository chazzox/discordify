/**
 * @name discordify
 * @author PINPAL#5245 and chazzox#1001
 * @description Spotify but inside discord
 * @version 0.5.0
 * @donate https://www.paypal.me/chazzox
 * @website https://github.com/chazzox/discordify#readme
 * @source https://github.com/chazzox/discordify
 */
// There is 100% a better way to do this, i just couldn't figure out how.
// So here is a very ugly hack :)
var react = BdApi.React;
var createContext = react.createContext, useRef = react.useRef, useState = react.useState, useLayoutEffect = react.useLayoutEffect, createElement = react.createElement, useContext = react.useContext, useEffect = react.useEffect, useMemo = react.useMemo, useCallback = react.useCallback, Children = react.Children, isValidElement = react.isValidElement, Fragment = react.Fragment, forwardRef = react.forwardRef;

function _extends$1() {
  _extends$1 = Object.assign || function (target) {
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

  return _extends$1.apply(this, arguments);
}

var r,B=r||(r={});B.Pop="POP";B.Push="PUSH";B.Replace="REPLACE";var C="production"!==process.env.NODE_ENV?function(b){return Object.freeze(b)}:function(b){return b};function D(b,h){if(!b){"undefined"!==typeof console&&console.warn(h);try{throw Error(h);}catch(e){}}}function F(){var b=[];return {get length(){return b.length},push:function(h){b.push(h);return function(){b=b.filter(function(e){return e!==h});}},call:function(h){b.forEach(function(e){return e&&e(h)});}}}function H(){return Math.random().toString(36).substr(2,8)}function I(b){var h=b.pathname;h=void 0===h?"/":h;var e=b.search;e=void 0===e?"":e;b=b.hash;b=void 0===b?"":b;e&&"?"!==e&&(h+="?"===e.charAt(0)?e:"?"+e);b&&"#"!==b&&(h+="#"===b.charAt(0)?b:"#"+b);return h}
function J(b){var h={};if(b){var e=b.indexOf("#");0<=e&&(h.hash=b.substr(e),b=b.substr(0,e));e=b.indexOf("?");0<=e&&(h.search=b.substr(e),b=b.substr(0,e));b&&(h.pathname=b);}return h}
function createMemoryHistory(b){function h(d,g){void 0===g&&(g=null);return C(_extends$1({pathname:t.pathname,search:"",hash:""},"string"===typeof d?J(d):d,{state:g,key:H()}))}function e(d,g,c){return !q.length||(q.call({action:d,location:g,retry:c}),!1)}function x(d,g){u=d;t=g;v.call({action:u,location:t});}function z(d,g){var c=r.Push,a=h(d,g);"production"!==process.env.NODE_ENV?D("/"===t.pathname.charAt(0),"Relative pathnames are not supported in memory history.push("+JSON.stringify(d)+")"):
void 0;e(c,a,function(){z(d,g);})&&(m+=1,p.splice(m,p.length,a),x(c,a));}function A(d,g){var c=r.Replace,a=h(d,g);"production"!==process.env.NODE_ENV?D("/"===t.pathname.charAt(0),"Relative pathnames are not supported in memory history.replace("+JSON.stringify(d)+")"):void 0;e(c,a,function(){A(d,g);})&&(p[m]=a,x(c,a));}function y(d){var g=Math.min(Math.max(m+d,0),p.length-1),c=r.Pop,a=p[g];e(c,a,function(){y(d);})&&(m=g,x(c,a));}void 0===b&&(b={});var w=b;b=w.initialEntries;w=w.initialIndex;var p=(void 0===
b?["/"]:b).map(function(d){var g=C(_extends$1({pathname:"/",search:"",hash:"",state:null,key:H()},"string"===typeof d?J(d):d));"production"!==process.env.NODE_ENV?D("/"===g.pathname.charAt(0),"Relative pathnames are not supported in createMemoryHistory({ initialEntries }) (invalid entry: "+JSON.stringify(d)+")"):void 0;return g}),m=Math.min(Math.max(null==w?p.length-1:w,0),p.length-1),u=r.Pop,t=p[m],v=F(),q=F();return {get index(){return m},get action(){return u},get location(){return t},createHref:function(d){return "string"===
typeof d?d:I(d)},push:z,replace:A,go:y,back:function(){y(-1);},forward:function(){y(1);},listen:function(d){return v.push(d)},block:function(d){return q.push(d)}}}

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

function invariant(cond, message) {
  if (!cond) throw new Error(message);
}

function warning(cond, message) {
  if (!cond) {
    // eslint-disable-next-line no-console
    if (typeof console !== "undefined") console.warn(message);

    try {
      // Welcome to debugging React Router!
      //
      // This error is thrown as a convenience so you can more easily
      // find the source for a warning that appears in the console by
      // enabling "pause on exceptions" in your JavaScript debugger.
      throw new Error(message); // eslint-disable-next-line no-empty
    } catch (e) {}
  }
}

const alreadyWarned = {};

function warningOnce(key, cond, message) {
  if (!cond && !alreadyWarned[key]) {
    alreadyWarned[key] = true;
    process.env.NODE_ENV !== "production" ? warning(false, message) : void 0;
  }
} ///////////////////////////////////////////////////////////////////////////////
// CONTEXT
///////////////////////////////////////////////////////////////////////////////

/**
 * A Navigator is a "location changer"; it's how you get to different locations.
 *
 * Every history instance conforms to the Navigator interface, but the
 * distinction is useful primarily when it comes to the low-level <Router> API
 * where both the location and a navigator must be provided separately in order
 * to avoid "tearing" that may occur in a suspense-enabled app if the action
 * and/or location were to be read directly from the history instance.
 */


const NavigationContext = /*#__PURE__*/createContext(null);

if (process.env.NODE_ENV !== "production") {
  NavigationContext.displayName = "Navigation";
}

const LocationContext = /*#__PURE__*/createContext(null);

if (process.env.NODE_ENV !== "production") {
  LocationContext.displayName = "Location";
}

const RouteContext = /*#__PURE__*/createContext({
  outlet: null,
  matches: []
});

if (process.env.NODE_ENV !== "production") {
  RouteContext.displayName = "Route";
} ///////////////////////////////////////////////////////////////////////////////
// COMPONENTS
///////////////////////////////////////////////////////////////////////////////


/**
 * A <Router> that stores all entries in memory.
 *
 * @see https://reactrouter.com/docs/en/v6/api#memoryrouter
 */
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
  return /*#__PURE__*/createElement(Router, {
    basename: basename,
    children: children,
    location: state.location,
    navigationType: state.action,
    navigator: history
  });
}

/**
 * Renders the child route's element, if there is one.
 *
 * @see https://reactrouter.com/docs/en/v6/api#outlet
 */
function Outlet(props) {
  return useOutlet(props.context);
}

/**
 * Declares an element that should be rendered at a certain URL path.
 *
 * @see https://reactrouter.com/docs/en/v6/api#route
 */
function Route(_props) {
   process.env.NODE_ENV !== "production" ? invariant(false, "A <Route> is only ever to be used as the child of <Routes> element, " + "never rendered directly. Please wrap your <Route> in a <Routes>.") : invariant(false) ;
}

/**
 * Provides location context for the rest of the app.
 *
 * Note: You usually won't render a <Router> directly. Instead, you'll render a
 * router that is more specific to your environment such as a <BrowserRouter>
 * in web browsers or a <StaticRouter> for server rendering.
 *
 * @see https://reactrouter.com/docs/en/v6/api#router
 */
function Router(_ref3) {
  let {
    basename: basenameProp = "/",
    children = null,
    location: locationProp,
    navigationType = r.Pop,
    navigator,
    static: staticProp = false
  } = _ref3;
  !!useInRouterContext() ? process.env.NODE_ENV !== "production" ? invariant(false, "You cannot render a <Router> inside another <Router>." + " You should never have more than one in your app.") : invariant(false) : void 0;
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
  process.env.NODE_ENV !== "production" ? warning(location != null, "<Router basename=\"" + basename + "\"> is not able to match the URL " + ("\"" + pathname + search + hash + "\" because it does not start with the ") + "basename, so the <Router> won't render anything.") : void 0;

  if (location == null) {
    return null;
  }

  return /*#__PURE__*/createElement(NavigationContext.Provider, {
    value: navigationContext
  }, /*#__PURE__*/createElement(LocationContext.Provider, {
    children: children,
    value: {
      location,
      navigationType
    }
  }));
}

/**
 * A container for a nested tree of <Route> elements that renders the branch
 * that best matches the current location.
 *
 * @see https://reactrouter.com/docs/en/v6/api#routes
 */
function Routes(_ref4) {
  let {
    children,
    location
  } = _ref4;
  return useRoutes(createRoutesFromChildren(children), location);
} ///////////////////////////////////////////////////////////////////////////////
// HOOKS
///////////////////////////////////////////////////////////////////////////////

/**
 * Returns the full href for the given "to" value. This is useful for building
 * custom links that are also accessible and preserve right-click behavior.
 *
 * @see https://reactrouter.com/docs/en/v6/api#usehref
 */

function useHref(to) {
  !useInRouterContext() ? process.env.NODE_ENV !== "production" ? invariant(false, // TODO: This error is probably because they somehow have 2 versions of the
  // router loaded. We can help them understand how to avoid that.
  "useHref() may be used only in the context of a <Router> component.") : invariant(false) : void 0;
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
/**
 * Returns true if this component is a descendant of a <Router>.
 *
 * @see https://reactrouter.com/docs/en/v6/api#useinroutercontext
 */

function useInRouterContext() {
  return useContext(LocationContext) != null;
}
/**
 * Returns the current location object, which represents the current URL in web
 * browsers.
 *
 * Note: If you're using this it may mean you're doing some of your own
 * "routing" in your app, and we'd like to know what your use case is. We may
 * be able to provide something higher-level to better suit your needs.
 *
 * @see https://reactrouter.com/docs/en/v6/api#uselocation
 */

function useLocation() {
  !useInRouterContext() ? process.env.NODE_ENV !== "production" ? invariant(false, // TODO: This error is probably because they somehow have 2 versions of the
  // router loaded. We can help them understand how to avoid that.
  "useLocation() may be used only in the context of a <Router> component.") : invariant(false) : void 0;
  return useContext(LocationContext).location;
}
/**
 * Returns true if the URL for the given "to" value matches the current URL.
 * This is useful for components that need to know "active" state, e.g.
 * <NavLink>.
 *
 * @see https://reactrouter.com/docs/en/v6/api#usematch
 */

function useMatch(pattern) {
  !useInRouterContext() ? process.env.NODE_ENV !== "production" ? invariant(false, // TODO: This error is probably because they somehow have 2 versions of the
  // router loaded. We can help them understand how to avoid that.
  "useMatch() may be used only in the context of a <Router> component.") : invariant(false) : void 0;
  let {
    pathname
  } = useLocation();
  return useMemo(() => matchPath(pattern, pathname), [pathname, pattern]);
}
/**
 * The interface for the navigate() function returned from useNavigate().
 */

/**
 * Returns an imperative method for changing the location. Used by <Link>s, but
 * may also be used by other elements to change the location.
 *
 * @see https://reactrouter.com/docs/en/v6/api#usenavigate
 */
function useNavigate() {
  !useInRouterContext() ? process.env.NODE_ENV !== "production" ? invariant(false, // TODO: This error is probably because they somehow have 2 versions of the
  // router loaded. We can help them understand how to avoid that.
  "useNavigate() may be used only in the context of a <Router> component.") : invariant(false) : void 0;
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
  let routePathnamesJson = JSON.stringify(matches.map(match => match.pathnameBase));
  let activeRef = useRef(false);
  useEffect(() => {
    activeRef.current = true;
  });
  let navigate = useCallback(function (to, options) {
    if (options === void 0) {
      options = {};
    }

    process.env.NODE_ENV !== "production" ? warning(activeRef.current, "You should call navigate() in a React.useEffect(), not when " + "your component is first rendered.") : void 0;
    if (!activeRef.current) return;

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
const OutletContext = /*#__PURE__*/createContext(null);
/**
 * Returns the element for the child route at this level of the route
 * hierarchy. Used internally by <Outlet> to render child routes.
 *
 * @see https://reactrouter.com/docs/en/v6/api#useoutlet
 */

function useOutlet(context) {
  let outlet = useContext(RouteContext).outlet;

  if (outlet) {
    return /*#__PURE__*/createElement(OutletContext.Provider, {
      value: context
    }, outlet);
  }

  return outlet;
}
/**
 * Resolves the pathname of the given `to` value against the current location.
 *
 * @see https://reactrouter.com/docs/en/v6/api#useresolvedpath
 */

function useResolvedPath(to) {
  let {
    matches
  } = useContext(RouteContext);
  let {
    pathname: locationPathname
  } = useLocation();
  let routePathnamesJson = JSON.stringify(matches.map(match => match.pathnameBase));
  return useMemo(() => resolveTo(to, JSON.parse(routePathnamesJson), locationPathname), [to, routePathnamesJson, locationPathname]);
}
/**
 * Returns the element of the route that matched the current location, prepared
 * with the correct context to render the remainder of the route tree. Route
 * elements in the tree must render an <Outlet> to render their child route's
 * element.
 *
 * @see https://reactrouter.com/docs/en/v6/api#useroutes
 */

function useRoutes(routes, locationArg) {
  !useInRouterContext() ? process.env.NODE_ENV !== "production" ? invariant(false, // TODO: This error is probably because they somehow have 2 versions of the
  // router loaded. We can help them understand how to avoid that.
  "useRoutes() may be used only in the context of a <Router> component.") : invariant(false) : void 0;
  let {
    matches: parentMatches
  } = useContext(RouteContext);
  let routeMatch = parentMatches[parentMatches.length - 1];
  let parentParams = routeMatch ? routeMatch.params : {};
  let parentPathname = routeMatch ? routeMatch.pathname : "/";
  let parentPathnameBase = routeMatch ? routeMatch.pathnameBase : "/";
  let parentRoute = routeMatch && routeMatch.route;

  if (process.env.NODE_ENV !== "production") {
    // You won't get a warning about 2 different <Routes> under a <Route>
    // without a trailing *, but this is a best-effort warning anyway since we
    // cannot even give the warning unless they land at the parent route.
    //
    // Example:
    //
    // <Routes>
    //   {/* This route path MUST end with /* because otherwise
    //       it will never match /blog/post/123 */}
    //   <Route path="blog" element={<Blog />} />
    //   <Route path="blog/feed" element={<BlogFeed />} />
    // </Routes>
    //
    // function Blog() {
    //   return (
    //     <Routes>
    //       <Route path="post/:id" element={<Post />} />
    //     </Routes>
    //   );
    // }
    let parentPath = parentRoute && parentRoute.path || "";
    warningOnce(parentPathname, !parentRoute || parentPath.endsWith("*"), "You rendered descendant <Routes> (or called `useRoutes()`) at " + ("\"" + parentPathname + "\" (under <Route path=\"" + parentPath + "\">) but the ") + "parent route path has no trailing \"*\". This means if you navigate " + "deeper, the parent won't match anymore and therefore the child " + "routes will never render.\n\n" + ("Please change the parent <Route path=\"" + parentPath + "\"> to <Route ") + ("path=\"" + (parentPath === "/" ? "*" : parentPath + "/*") + "\">."));
  }

  let locationFromContext = useLocation();
  let location;

  if (locationArg) {
    var _parsedLocationArg$pa;

    let parsedLocationArg = typeof locationArg === "string" ? J(locationArg) : locationArg;
    !(parentPathnameBase === "/" || ((_parsedLocationArg$pa = parsedLocationArg.pathname) == null ? void 0 : _parsedLocationArg$pa.startsWith(parentPathnameBase))) ? process.env.NODE_ENV !== "production" ? invariant(false, "When overriding the location using `<Routes location>` or `useRoutes(routes, location)`, " + "the location pathname must begin with the portion of the URL pathname that was " + ("matched by all parent routes. The current pathname base is \"" + parentPathnameBase + "\" ") + ("but pathname \"" + parsedLocationArg.pathname + "\" was given in the `location` prop.")) : invariant(false) : void 0;
    location = parsedLocationArg;
  } else {
    location = locationFromContext;
  }

  let pathname = location.pathname || "/";
  let remainingPathname = parentPathnameBase === "/" ? pathname : pathname.slice(parentPathnameBase.length) || "/";
  let matches = matchRoutes(routes, {
    pathname: remainingPathname
  });

  if (process.env.NODE_ENV !== "production") {
    process.env.NODE_ENV !== "production" ? warning(parentRoute || matches != null, "No routes matched location \"" + location.pathname + location.search + location.hash + "\" ") : void 0;
    process.env.NODE_ENV !== "production" ? warning(matches == null || matches[matches.length - 1].route.element !== undefined, "Matched leaf route at location \"" + location.pathname + location.search + location.hash + "\" does not have an element. " + "This means it will render an <Outlet /> with a null value by default resulting in an \"empty\" page.") : void 0;
  }

  return _renderMatches(matches && matches.map(match => Object.assign({}, match, {
    params: Object.assign({}, parentParams, match.params),
    pathname: joinPaths([parentPathnameBase, match.pathname]),
    pathnameBase: match.pathnameBase === "/" ? parentPathnameBase : joinPaths([parentPathnameBase, match.pathnameBase])
  })), parentMatches);
} ///////////////////////////////////////////////////////////////////////////////
// UTILS
///////////////////////////////////////////////////////////////////////////////

/**
 * Creates a route config from a React "children" object, which is usually
 * either a `<Route>` element or an array of them. Used internally by
 * `<Routes>` to create a route config from its children.
 *
 * @see https://reactrouter.com/docs/en/v6/api#createroutesfromchildren
 */

function createRoutesFromChildren(children) {
  let routes = [];
  Children.forEach(children, element => {
    if (! /*#__PURE__*/isValidElement(element)) {
      // Ignore non-elements. This allows people to more easily inline
      // conditionals in their route config.
      return;
    }

    if (element.type === Fragment) {
      // Transparently support React.Fragment and its children.
      routes.push.apply(routes, createRoutesFromChildren(element.props.children));
      return;
    }

    !(element.type === Route) ? process.env.NODE_ENV !== "production" ? invariant(false, "[" + (typeof element.type === "string" ? element.type : element.type.name) + "] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>") : invariant(false) : void 0;
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
/**
 * A RouteMatch contains info about how a route matched a URL.
 */

/**
 * Matches the given routes to a location and returns the match data.
 *
 * @see https://reactrouter.com/docs/en/v6/api#matchroutes
 */
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
      !meta.relativePath.startsWith(parentPath) ? process.env.NODE_ENV !== "production" ? invariant(false, "Absolute route path \"" + meta.relativePath + "\" nested under path " + ("\"" + parentPath + "\" is not valid. An absolute child route path ") + "must start with the combined path of all its parent routes.") : invariant(false) : void 0;
      meta.relativePath = meta.relativePath.slice(parentPath.length);
    }

    let path = joinPaths([parentPath, meta.relativePath]);
    let routesMeta = parentsMeta.concat(meta); // Add the children before adding this route to the array so we traverse the
    // route tree depth-first and child routes appear before their parents in
    // the "flattened" version.

    if (route.children && route.children.length > 0) {
      !(route.index !== true) ? process.env.NODE_ENV !== "production" ? invariant(false, "Index routes must not have child routes. Please remove " + ("all child routes from route path \"" + path + "\".")) : invariant(false) : void 0;
      flattenRoutes(route.children, branches, routesMeta, path);
    } // Routes without a path shouldn't ever match by themselves unless they are
    // index routes, so don't add them to the list of possible branches.


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
  branches.sort((a, b) => a.score !== b.score ? b.score - a.score // Higher score first
  : compareIndexes(a.routesMeta.map(meta => meta.childrenIndex), b.routesMeta.map(meta => meta.childrenIndex)));
}

const paramRe = /^:\w+$/;
const dynamicSegmentValue = 3;
const indexRouteValue = 2;
const emptySegmentValue = 1;
const staticSegmentValue = 10;
const splatPenalty = -2;

const isSplat = s => s === "*";

function computeScore(path, index) {
  let segments = path.split("/");
  let initialScore = segments.length;

  if (segments.some(isSplat)) {
    initialScore += splatPenalty;
  }

  if (index) {
    initialScore += indexRouteValue;
  }

  return segments.filter(s => !isSplat(s)).reduce((score, segment) => score + (paramRe.test(segment) ? dynamicSegmentValue : segment === "" ? emptySegmentValue : staticSegmentValue), initialScore);
}

function compareIndexes(a, b) {
  let siblings = a.length === b.length && a.slice(0, -1).every((n, i) => n === b[i]);
  return siblings ? // If two routes are siblings, we should try to match the earlier sibling
  // first. This allows people to have fine-grained control over the matching
  // behavior by simply putting routes with identical paths in the order they
  // want them tried.
  a[a.length - 1] - b[b.length - 1] : // Otherwise, it doesn't really make sense to rank non-siblings by index,
  // so they sort equally.
  0;
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
    if (!match) return null;
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

  if (matches == null) return null;
  return matches.reduceRight((outlet, match, index) => {
    return /*#__PURE__*/createElement(RouteContext.Provider, {
      children: match.route.element !== undefined ? match.route.element : /*#__PURE__*/createElement(Outlet, null),
      value: {
        outlet,
        matches: parentMatches.concat(matches.slice(0, index + 1))
      }
    });
  }, null);
}
/**
 * A PathPattern is used to match on some portion of a URL pathname.
 */


/**
 * Performs pattern matching on a URL pathname and returns information about
 * the match.
 *
 * @see https://reactrouter.com/docs/en/v6/api#matchpath
 */
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
  if (!match) return null;
  let matchedPathname = match[0];
  let pathnameBase = matchedPathname.replace(/(.)\/+$/, "$1");
  let captureGroups = match.slice(1);
  let params = paramNames.reduce((memo, paramName, index) => {
    // We need to compute the pathnameBase here using the raw splat value
    // instead of using params["*"] later because it will be decoded then
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

  process.env.NODE_ENV !== "production" ? warning(path === "*" || !path.endsWith("*") || path.endsWith("/*"), "Route path \"" + path + "\" will be treated as if it were " + ("\"" + path.replace(/\*$/, "/*") + "\" because the `*` character must ") + "always follow a `/` in the pattern. To get rid of this warning, " + ("please change the route path to \"" + path.replace(/\*$/, "/*") + "\".")) : void 0;
  let paramNames = [];
  let regexpSource = "^" + path.replace(/\/*\*?$/, "") // Ignore trailing / and /*, we'll handle it below
  .replace(/^\/*/, "/") // Make sure it has a leading /
  .replace(/[\\.*+^$?{}|()[\]]/g, "\\$&") // Escape special regex chars
  .replace(/:(\w+)/g, (_, paramName) => {
    paramNames.push(paramName);
    return "([^\\/]+)";
  });

  if (path.endsWith("*")) {
    paramNames.push("*");
    regexpSource += path === "*" || path === "/*" ? "(.*)$" // Already matched the initial /, just match the rest
    : "(?:\\/(.+)|\\/*)$"; // Don't include the / in params["*"]
  } else {
    regexpSource += end ? "\\/*$" // When matching to the end, ignore trailing slashes
    : // Otherwise, match a word boundary or a proceeding /. The word boundary restricts
    // parent routes to matching only their own words and nothing more, e.g. parent
    // route "/home" should not match "/home2".
    "(?:\\b|\\/|$)";
  }

  let matcher = new RegExp(regexpSource, caseSensitive ? undefined : "i");
  return [matcher, paramNames];
}

function safelyDecodeURIComponent(value, paramName) {
  try {
    return decodeURIComponent(value);
  } catch (error) {
    process.env.NODE_ENV !== "production" ? warning(false, "The value for the URL param \"" + paramName + "\" will not be decoded because" + (" the string \"" + value + "\" is a malformed URL segment. This is probably") + (" due to a bad percent encoding (" + error + ").")) : void 0;
    return value;
  }
}
/**
 * Returns a resolved path object relative to the given pathname.
 *
 * @see https://reactrouter.com/docs/en/v6/api#resolvepath
 */


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
  relativeSegments.forEach(segment => {
    if (segment === "..") {
      // Keep the root "" segment so the pathname starts at /
      if (segments.length > 1) segments.pop();
    } else if (segment !== ".") {
      segments.push(segment);
    }
  });
  return segments.length > 1 ? segments.join("/") : "/";
}

function resolveTo(toArg, routePathnames, locationPathname) {
  let to = typeof toArg === "string" ? J(toArg) : toArg;
  let toPathname = toArg === "" || to.pathname === "" ? "/" : to.pathname; // If a pathname is explicitly provided in `to`, it should be relative to the
  // route context. This is explained in `Note on `<Link to>` values` in our
  // migration guide from v5 as a means of disambiguation between `to` values
  // that begin with `/` and those that do not. However, this is problematic for
  // `to` values that do not provide a pathname. `to` can simply be a search or
  // hash string, in which case we should assume that the navigation is relative
  // to the current location's pathname and *not* the route pathname.

  let from;

  if (toPathname == null) {
    from = locationPathname;
  } else {
    let routePathnameIndex = routePathnames.length - 1;

    if (toPathname.startsWith("..")) {
      let toSegments = toPathname.split("/"); // Each leading .. segment means "go up one route" instead of "go up one
      // URL segment".  This is a key difference from how <a href> works and a
      // major reason we call this a "to" value instead of a "href".

      while (toSegments[0] === "..") {
        toSegments.shift();
        routePathnameIndex -= 1;
      }

      to.pathname = toSegments.join("/");
    } // If there are more ".." segments than parent routes, resolve relative to
    // the root / URL.


    from = routePathnameIndex >= 0 ? routePathnames[routePathnameIndex] : "/";
  }

  let path = resolvePath(to, from); // Ensure the pathname has a trailing slash if the original to value had one.

  if (toPathname && toPathname !== "/" && toPathname.endsWith("/") && !path.pathname.endsWith("/")) {
    path.pathname += "/";
  }

  return path;
}

function getToPathname(to) {
  // Empty strings should be treated the same as / paths
  return to === "" || to.pathname === "" ? "/" : typeof to === "string" ? J(to).pathname : to.pathname;
}

function stripBasename(pathname, basename) {
  if (basename === "/") return pathname;

  if (!pathname.toLowerCase().startsWith(basename.toLowerCase())) {
    return null;
  }

  let nextChar = pathname.charAt(basename.length);

  if (nextChar && nextChar !== "/") {
    // pathname does not start with basename/
    return null;
  }

  return pathname.slice(basename.length) || "/";
}

const joinPaths = paths => paths.join("/").replace(/\/\/+/g, "/");

const normalizePathname = pathname => pathname.replace(/\/+$/, "").replace(/^\/*/, "/");

const normalizeSearch = search => !search || search === "?" ? "" : search.startsWith("?") ? search : "?" + search;

const normalizeHash = hash => !hash || hash === "#" ? "" : hash.startsWith("#") ? hash : "#" + hash; ///////////////////////////////////////////////////////////////////////////////

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

const _excluded = ["onClick", "reloadDocument", "replace", "state", "target", "to"],
      _excluded2 = ["aria-current", "caseSensitive", "className", "end", "style", "to", "children"];

if (process.env.NODE_ENV !== "production") ;

function isModifiedEvent(event) {
  return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
}

/**
 * The public API for rendering a history-aware <a>.
 */
const Link = /*#__PURE__*/forwardRef(function LinkWithRef(_ref4, ref) {
  let {
    onClick,
    reloadDocument,
    replace = false,
    state,
    target,
    to
  } = _ref4,
      rest = _objectWithoutPropertiesLoose(_ref4, _excluded);

  let href = useHref(to);
  let internalOnClick = useLinkClickHandler(to, {
    replace,
    state,
    target
  });

  function handleClick(event) {
    if (onClick) onClick(event);

    if (!event.defaultPrevented && !reloadDocument) {
      internalOnClick(event);
    }
  }

  return (
    /*#__PURE__*/
    // eslint-disable-next-line jsx-a11y/anchor-has-content
    createElement("a", _extends({}, rest, {
      href: href,
      onClick: handleClick,
      ref: ref,
      target: target
    }))
  );
});

if (process.env.NODE_ENV !== "production") {
  Link.displayName = "Link";
}

/**
 * A <Link> wrapper that knows if it's "active" or not.
 */
const NavLink$1 = /*#__PURE__*/forwardRef(function NavLinkWithRef(_ref5, ref) {
  let {
    "aria-current": ariaCurrentProp = "page",
    caseSensitive = false,
    className: classNameProp = "",
    end = false,
    style: styleProp,
    to,
    children
  } = _ref5,
      rest = _objectWithoutPropertiesLoose(_ref5, _excluded2);

  let location = useLocation();
  let path = useResolvedPath(to);
  let locationPathname = location.pathname;
  let toPathname = path.pathname;

  if (!caseSensitive) {
    locationPathname = locationPathname.toLowerCase();
    toPathname = toPathname.toLowerCase();
  }

  let isActive = locationPathname === toPathname || !end && locationPathname.startsWith(toPathname) && locationPathname.charAt(toPathname.length) === "/";
  let ariaCurrent = isActive ? ariaCurrentProp : undefined;
  let className;

  if (typeof classNameProp === "function") {
    className = classNameProp({
      isActive
    });
  } else {
    // If the className prop is not a function, we use a default `active`
    // class for <NavLink />s that are active. In v5 `active` was the default
    // value for `activeClassName`, but we are removing that API and can still
    // use the old default behavior for a cleaner upgrade path and keep the
    // simple styling rules working as they currently do.
    className = [classNameProp, isActive ? "active" : null].filter(Boolean).join(" ");
  }

  let style = typeof styleProp === "function" ? styleProp({
    isActive
  }) : styleProp;
  return /*#__PURE__*/createElement(Link, _extends({}, rest, {
    "aria-current": ariaCurrent,
    className: className,
    ref: ref,
    style: style,
    to: to
  }), typeof children === "function" ? children({
    isActive
  }) : children);
});

if (process.env.NODE_ENV !== "production") {
  NavLink$1.displayName = "NavLink";
} ////////////////////////////////////////////////////////////////////////////////
// HOOKS
////////////////////////////////////////////////////////////////////////////////

/**
 * Handles the click behavior for router `<Link>` components. This is useful if
 * you need to create custom `<Link>` components with the same click behavior we
 * use in our exported `<Link>`.
 */


function useLinkClickHandler(to, _temp) {
  let {
    target,
    replace: replaceProp,
    state
  } = _temp === void 0 ? {} : _temp;
  let navigate = useNavigate();
  let location = useLocation();
  let path = useResolvedPath(to);
  return useCallback(event => {
    if (event.button === 0 && ( // Ignore everything but left clicks
    !target || target === "_self") && // Let browser handle "target=_blank" etc.
    !isModifiedEvent(event) // Ignore clicks with modifier keys
    ) {
      event.preventDefault(); // If the URL hasn't changed, a regular <a> will do a replace instead of
      // a push, so do the same here.

      let replace = !!replaceProp || I(location) === I(path);
      navigate(to, {
        replace,
        state
      });
    }
  }, [location, navigate, path, replaceProp, state, target, to]);
}

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
}

// -----------------  MODULES  -----------------
// Subscribe to internal discord events
var Dispatcher = BdApi.findModuleByProps('dirtyDispatch');
// Spotify discord internals
var SpotifyTrackUtils = BdApi.findModuleByProps('getActiveSocketAndDevice');
BdApi.findModuleByProps('SpotifyAPI');
var SIDEBAR_CONTAINER_CLASS = '.container-2lgZY8';
var ACTION_TYPES = BdApi.findModuleByProps('ActionTypes', 'API_HOST').ActionTypes;
/**
 * @description Enum that contains all the spotify endpoints
 */
var SPOTIFY_URLS;
(function (SPOTIFY_URLS) {
    SPOTIFY_URLS["CURRENTLY_PLAYING"] = "https://api.spotify.com/v1/me/player/currently-playing";
    SPOTIFY_URLS["PAUSE"] = "https://api.spotify.com/v1/me/player/pause";
    SPOTIFY_URLS["PLAY"] = "https://api.spotify.com/v1/me/player/play";
    SPOTIFY_URLS["NEXT"] = "https://api.spotify.com/v1/me/player/next";
    SPOTIFY_URLS["PREVIOUS"] = "https://api.spotify.com/v1/me/player/previous";
    SPOTIFY_URLS["PLAYLISTS"] = "https://api.spotify.com/v1/me/playlists";
})(SPOTIFY_URLS || (SPOTIFY_URLS = {}));
/**
 * @description Enum for http methods
 */
var METHODS;
(function (METHODS) {
    METHODS["PUT"] = "PUT";
    METHODS["POST"] = "POST";
    METHODS["GET"] = "GET";
})(METHODS || (METHODS = {}));
/**
 * @description The object used to generate the log styles
 */
var LOG_STYLES = {
    color: 'white',
    background: '#1db954',
    padding: '2px 0.5em',
    'border-radius': '0.5em',
    'font-weight': 'bold'
};
/**
 * @description print with the 'discordify' prefix
 * @param output any object you want to print
 */
function debug_log() {
    var output = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        output[_i] = arguments[_i];
    }
    console.log.apply(console, __spreadArray(['%cdiscordify',
        Object.entries(LOG_STYLES)
            .map(function (_a) {
            var a = _a[0], b = _a[1];
            return "".concat(a, ":").concat(b, ";");
        })
            .join('')], output, false));
}
var SpotifyActions;
(function (SpotifyActions) {
    SpotifyActions["SET_ACCESS"] = "SET_ACCESS";
    SpotifyActions["SET_IS_PLAYING"] = "SET_IS_PLAYING";
    SpotifyActions["SET_IS_SHUFFLE"] = "SET_IS_SHUFFLE";
    SpotifyActions["SET_IS_LOOPING"] = "SET_IS_LOOPING";
})(SpotifyActions || (SpotifyActions = {}));
// ---------------  SPOTIFY API FUNCTIONS  ---------------
/**
 * @todo if first access token does not exist try fetching from user id
 * @description Retrieves access token to spotify song
 * @returns Authorization header
 */
function getAuthHeader() {
    var _a, _b;
    return __awaiter(this, void 0, void 0, function () {
        var accessToken;
        return __generator(this, function (_c) {
            accessToken = (_b = (_a = SpotifyTrackUtils.getActiveSocketAndDevice()) === null || _a === void 0 ? void 0 : _a.socket) === null || _b === void 0 ? void 0 : _b.accessToken;
            if (!accessToken)
                debug_log('i should try to fetch token through other methods :)');
            return [2 /*return*/, accessToken];
        });
    });
}
// --------- SPOTIFY CONTEXT ---------
var SpotifyContext = createContext(null);
var useSpotify = function () {
    return useContext(SpotifyContext);
};
var initialState = {
    accessToken: null,
    currentlyPlaying: { album: null, song: null, artist: null, image: null },
    playerState: { isPlaying: false, isShuffle: false, isLooping: 0 }
};
function spotifyReducer(state, action) {
    switch (action.type) {
        case SpotifyActions.SET_ACCESS:
            return __assign(__assign({}, state), { accessToken: action.payload });
        case SpotifyActions.SET_IS_PLAYING:
            return __assign({ playerState: { isPlaying: action.payload } }, state);
        case SpotifyActions.SET_IS_SHUFFLE:
            return __assign({ playerState: { isShuffle: action.payload } }, state);
        case SpotifyActions.SET_IS_LOOPING:
            return __assign({ playerState: { isLooping: action.payload } }, state);
        default:
            throw new Error('No Action with signature' + action);
    }
}

var ReactDOM = BdApi.ReactDOM;

var Albums = function () {
    return (react.createElement(react.Fragment, null,
        react.createElement("div", { className: "gridBox" },
            react.createElement("div", { className: "playlistArtwork" }),
            react.createElement("h1", null, "Album Name"),
            react.createElement("h2", null, "Artist Name")),
        react.createElement("div", { className: "gridBox" },
            react.createElement("div", { className: "playlistArtwork" }),
            react.createElement("h1", null, "Album Name"),
            react.createElement("h2", null, "Super long Artist Name and stuff.")),
        react.createElement("div", { className: "gridBox" },
            react.createElement("div", { className: "playlistArtwork" }),
            react.createElement("h1", null, "Album Name"),
            react.createElement("h2", null, "Artist Name"))));
};

var Artists = function () {
    return (react.createElement(react.Fragment, null,
        react.createElement("div", { className: "gridBox" },
            react.createElement("div", { className: "playlistArtwork round" }),
            react.createElement("h1", null, "Artist Name"),
            react.createElement("h2", null, "Artist")),
        react.createElement("div", { className: "gridBox" },
            react.createElement("div", { className: "playlistArtwork round" }),
            react.createElement("h1", null, "Artist Name"),
            react.createElement("h2", null, "Artist")),
        react.createElement("div", { className: "gridBox" },
            react.createElement("div", { className: "playlistArtwork round" }),
            react.createElement("h1", null, "Artist Name"),
            react.createElement("h2", null, "Artist"))));
};

var Playlists = function () {
    return (react.createElement(react.Fragment, null,
        react.createElement("div", { className: "gridBox wideBox" },
            react.createElement("div", { className: "playlistArtwork" }),
            react.createElement("h1", null, "Liked Songs"),
            react.createElement("h2", null, "56 liked songs")),
        react.createElement("div", { className: "gridBox" },
            react.createElement("div", { className: "playlistArtwork" }),
            react.createElement("h1", null, "Playlist Name"),
            react.createElement("h2", null, "Description of Playlist")),
        react.createElement("div", { className: "gridBox" },
            react.createElement("div", { className: "playlistArtwork" }),
            react.createElement("h1", null, "Playlist Name"),
            react.createElement("h2", null, "Super long description of the playlist.")),
        react.createElement("div", { className: "gridBox" },
            react.createElement("div", { className: "playlistArtwork" }),
            react.createElement("h1", null, "Playlist Name"),
            react.createElement("h2", null, "Description of Playlist"))));
};

var Queue = function () {
    return (react.createElement(react.Fragment, null,
        react.createElement("h1", { className: "titleText" }, "Queue"),
        react.createElement("h1", { className: "headerText" }, "Now playing"),
        react.createElement("div", { className: "gridBox queueBox" },
            react.createElement("h1", null, "1"),
            react.createElement("div", { className: "songInfo" },
                react.createElement("div", { className: "playlistArtwork" }),
                react.createElement("div", { className: "songExtraInfo" },
                    react.createElement("h1", null, "Song Name"),
                    react.createElement("h2", null, "Artist"))),
            react.createElement("h3", null, "Album"),
            react.createElement("h4", null, "2:36")),
        react.createElement("h1", { className: "headerText" }, "Next up"),
        react.createElement("div", { className: "gridBox queueBox" },
            react.createElement("h1", null, "2"),
            react.createElement("div", { className: "songInfo" },
                react.createElement("div", { className: "playlistArtwork" }),
                react.createElement("div", { className: "songExtraInfo" },
                    react.createElement("h1", null, "Song Name"),
                    react.createElement("h2", null, "Very very long artist name"))),
            react.createElement("h3", null, "Extremely long and unnecesary album name"),
            react.createElement("h4", null, "1:47")),
        react.createElement("div", { className: "gridBox queueBox" },
            react.createElement("h1", null, "3"),
            react.createElement("div", { className: "songInfo" },
                react.createElement("div", { className: "playlistArtwork" }),
                react.createElement("div", { className: "songExtraInfo" },
                    react.createElement("h1", null, "Song Name"),
                    react.createElement("h2", null, "Artist"))),
            react.createElement("h3", null, "Album"),
            react.createElement("h4", null, "3:06")),
        react.createElement("div", { className: "gridBox queueBox" },
            react.createElement("h1", null, "4"),
            react.createElement("div", { className: "songInfo" },
                react.createElement("div", { className: "playlistArtwork" }),
                react.createElement("div", { className: "songExtraInfo" },
                    react.createElement("h1", null, "Song Name"),
                    react.createElement("h2", null, "Artist"))),
            react.createElement("h3", null, "Album"),
            react.createElement("h4", null, "3:06"))));
};

var classnames = {exports: {}};

/*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/

(function (module) {
/* global define */

(function () {

	var hasOwn = {}.hasOwnProperty;

	function classNames() {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg)) {
				if (arg.length) {
					var inner = classNames.apply(null, arg);
					if (inner) {
						classes.push(inner);
					}
				}
			} else if (argType === 'object') {
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

		return classes.join(' ');
	}

	if (module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else {
		window.classNames = classNames;
	}
}());
}(classnames));

var classNames = classnames.exports;

function Loop() {
    return (react.createElement("svg", { viewBox: "0 0 512.43 483.62" },
        react.createElement("path", { d: "M234.86,126.9q-39.72,0-79.45,0C79.49,127,30.33,199.21,58.18,270c5.1,12.95,3.71,24.31-7.81,32.72-9.87,\r\n                7.19-20.28,6.51-30.08-.92-4.18-3.16-6.31-7.7-8.25-12.36C-30.11,188.46,43.57,77.09,153.09,76.51c54.77-.29,\r\n                109.55-.5,164.31.26,13.26.18,17.44-3.8,16.21-16.64-1-10.33-.24-20.85.07-31.27.17-5.8,1.65-11.31,7.76-13.85,\r\n                6-2.48,10.8-.07,15.47,3.68q43.88,35.24,87.85,70.36c11.26,9,11.26,16.2,0,25.24Q400.66,149.72,356.44,185c-4.52,\r\n                3.63-9.31,5.7-15,3.3C335.92,186,334,181,333.84,175.6c-.43-12.83-.64-25.68-.35-38.51.18-7.49-2.54-10.37-10.15-10.3C293.85,127.06,\r\n                264.35,126.9,234.86,126.9Z", transform: "translate(0 -14)" }),
        react.createElement("path", { d: "M277,384.71q40,0,80,0c75.91-.06,125.07-72.32,97.23-143-5.21-13.23-3.64-24.74,8.28-33.07,10-7,20.43-6,\r\n                30.06,1.63,4.09,3.25,6.09,7.87,8,12.53,41.61,100.9-32,211.75-141.24,212.34q-84,.45-167.91-.14c-9.91-.07-13.12,\r\n                3.2-12.58,12.85.64,11.6.22,23.27-.15,34.9C178.58,488.46,177,494,171,496.6s-10.79,0-15.45-3.71q-43.64-35.06-87.38-70c-11.86-9.51-11.84-16.47,\r\n                0-26q43.44-34.83,86.91-69.6c4.8-3.86,9.73-6.71,15.93-4s7.64,8.58,7.8,14.52c.32,12.23.49,24.48.14,36.71-.21,\r\n                7.52,2.59,10.35,10.18,10.28C218.43,384.55,247.72,384.71,277,384.71Z", transform: "translate(0 -14)" })));
}
function Play() {
    return (react.createElement("svg", { viewBox: "0 0 297.19 389.08" },
        react.createElement("path", { d: "M394.15,236.19,145,65.69A24,24,0,0,0,107.4,85.5v341A24,24,0,0,0,145,446.31l249.19-170.5A24,24,0,0,0,394.15,236.19Z", transform: "translate(-107.4 -61.46)" })));
}
function Pause() {
    return (react.createElement("svg", { viewBox: "0 0 195.69 393.78" },
        react.createElement("rect", { x: "158.16", y: "59.29", width: "51.63", height: "393.78", rx: "25.82", transform: "translate(209.79 453.08) rotate(-180)" }),
        react.createElement("rect", { x: "302.21", y: "59.29", width: "51.63", height: "393.78", rx: "25.82", transform: "translate(497.9 453.08) rotate(-180)" })));
}
function Previous() {
    return (react.createElement("svg", { viewBox: "0 0 374.3 393.78" },
        react.createElement("path", { d: "M156.31,276.18,405.5,446.68a24,24,0,0,0,37.55-19.81v-341a24,24,0,0,0-37.55-19.8L156.31,236.56A24,24,0,0,0,156.31,276.18Z", transform: "translate(-68.76 -59.29)" }),
        react.createElement("rect", { x: "68.76", y: "59.29", width: "51.63", height: "393.78", rx: "25.82", transform: "translate(120.39 453.08) rotate(-180)" })));
}
function Next() {
    return (react.createElement("svg", { viewBox: "0 0 374.3 393.78" },
        react.createElement("path", { d: "M355.5,236.19,106.31,65.69A24,24,0,0,0,68.76,85.5v341a24,24,0,0,0,37.55,19.81L355.5,275.81A24,24,0,0,0,355.5,236.19Z", transform: "translate(-68.76 -59.29)" }),
        react.createElement("rect", { x: "322.66", width: "51.63", height: "393.78", rx: "25.82" })));
}
function Shuffle() {
    return (react.createElement("svg", { viewBox: "0 0 512.77 401.95" },
        react.createElement("path", { d: "M39,384.21c8,0,16.15.83,24-.18,15.06-1.94,27-9.78,36.57-21.58Q195.4,244.78,291.32,127.18c19.78-24.34,45.1-36.37,76.32-36.34,\r\n                16.26,0,32.51-.13,48.77.08,4.3.06,5.79-1.36,5.48-5.58a93,93,0,0,1,0-12c.78-15,16-23.2,28.6-15.08q27,17.43,53.44,35.65c11.24,7.72,\r\n                11.31,22.16.1,29.89Q477.11,142.3,449.62,160c-12.23,7.85-26.41.4-27.73-14-.05-.57,0-1.15-.05-1.72-.55-17.39-.55-17.39-18.21-17.39-11.67,\r\n                0-23.34.24-35-.06-19.81-.5-35.41,7.32-47.83,22.57Q225.19,266.85,129.45,384.2C109.52,408.72,84,420.74,52.59,420.65c-11.1,0-22.19.08-33.28,\r\n                0C7.94,420.49-.47,412.68-.38,402.52S8,384.77,19.48,384.63c6.5-.07,13,0,19.51,0Z", transform: "translate(0.39 -55.03)" }),
        react.createElement("path", { d: "M512,402.4a16.71,16.71,0,0,1-7.77,15.06c-18.08,12.18-36.09,24.45-54.41,36.25-12.69,8.16-27.08.21-28-14.9-.35-5.85,\r\n                2.67-13.94-1.37-16.93s-11.69-1.05-17.77-1.23c-18.5-.58-37.1,1.54-55.5-1.91-21.93-4.11-39.88-15.07-53.95-32.26-16.59-20.27-33-40.7-49.4-61.12-7.72-9.6-7.18-20.15,\r\n                1.18-26.91,8.09-6.55,19.15-4.74,26.67,4.47q24.49,30,48.92,60c11.7,14.33,26.66,21.84,45.36,21.68,16.64-.13,33.28-.2,\r\n                49.91.08,4.89.08,6.26-1.54,6.06-6.22-.23-5.31-.37-10.8.7-16,2.56-12.28,15.77-18.33,26.31-11.64,18.72,11.88,\r\n                37,24.41,55.37,36.87C509.47,391.28,512.38,396.39,512,402.4Z", transform: "translate(0.39 -55.03)" }),
        react.createElement("path", { d: "M42.25,90.85C52,90.7,65,90.4,77.78,93.55A91.46,91.46,0,0,1,128,125.63q24.41,30,48.84,60c7.92,\r\n                9.75,7.56,20.6-.82,27.39s-19.16,4.75-27-4.86Q124.94,178.65,100.94,\r\n                149c-12.07-14.91-27.45-22.58-46.8-22.22-11.65.23-23.31.14-35,0C7.87,126.71-.55,118.77-.38,108.65S7.89,\r\n                91.06,19,90.87C25.67,90.75,32.35,90.85,42.25,90.85Z", transform: "translate(0.39 -55.03)" })));
}
var Mute = function (_a) {
    var onClick = _a.onClick;
    return (react.createElement("svg", { viewBox: "0 0 510.65 434.66", onClick: onClick },
        react.createElement("path", { d: "M511.91,256.54c-.65,7.76-1.19,15.53-2,23.27-5.36,52.65-26.94,97.85-62.62,136.67-21.37,23.25-46.64,40.87-75.39,\r\n                53.67-12.32,5.49-23.3,2.1-28-8.44-4.47-10,.47-20.87,12.37-26.27,40.07-18.2,70.65-46.51,92.43-84.8,38.44-67.56,\r\n                31.14-155.91-18.86-218.33a193.24,193.24,0,0,0-72.67-56.25c-16.11-7.22-19.88-23.66-7.76-33.67,6.51-5.38,\r\n                13.74-5.27,21.11-2.07,43.33,18.84,77.57,48.41,103.11,88,23.6,36.6,36.58,76.58,37.26,120.33a38.33,38.33,0,0,0,1,5.86Z", transform: "translate(-1.26 -38.1)" }),
        react.createElement("path", { d: "M236.39,255.8q0,81.51,0,163c0,11.07-4.94,19-13.43,21.64-8,2.51-14.52,0-20.32-5.83-31.67-31.79-63.51-63.42-95.09-95.3a19.14,19.14,0,0,\r\n                0-15-6.13c-22.94.25-45.88.14-68.81.08-14-.05-21.94-6.62-22.13-20.67q-.75-57.08,0-114.16c.19-14.05,8.1-20.62,\r\n                22.13-20.66,23.1-.07,46.22.29,69.3-.29a22.32,22.32,0,0,0,13.86-5.68q47.17-46.26,93.56-93.31c6.85-6.91,\r\n                14.09-11.61,23.84-7.31s12.17,12.56,12.14,22.55C236.31,147.77,236.4,201.78,236.39,255.8Z", transform: "translate(-1.26 -38.1)" }),
        react.createElement("path", { d: "M432.9,263.43c-3.57,57.53-32.81,106.14-92.41,135-10.84,5.25-22.24,1.69-27.15-7.88-4.82-9.4-1.46-19.9,9.18-25.69,\r\n                18.56-10.08,35.74-21.44,48.67-38.78,43-57.65,24.5-140.77-39.1-174.45-3.68-2-7.34-3.92-10.87-6.1-9.14-5.64-12.35-15.52-8.1-24.52s15.49-14,\r\n                25-9.11c13.22,6.82,26.62,14,38.16,23.24C411.72,163.59,433,210.28,432.9,263.43Z", transform: "translate(-1.26 -38.1)" }),
        react.createElement("path", { d: "M315.68,255.71c.59-13.58-5.07-24-16.28-31.59a103.72,103.72,0,0,1-12.23-9.38c-7.38-6.82-8.59-15.77-3.65-23.3,5.25-8,\r\n                15.08-10.86,24.16-7,44.83,19.18,60.46,76.29,32,116.18a75.17,75.17,0,0,1-31.13,25.61c-9.41,4.19-19.26,\r\n                1.8-24.77-6.24-5.33-7.77-4.06-16.88,3.79-24.06a104.85,104.85,0,0,1,11.88-9C310.47,279.42,316.16,269.21,315.68,255.71Z", transform: "translate(-1.26 -38.1)" })));
};
function Spotify() {
    return (react.createElement("svg", { viewBox: "0 0 24 24", width: "24", height: "24", className: "icon-22AiRD" },
        react.createElement("path", { d: "M12,2A10,10,0,1,0,22,12h0A10,10,0,0,0,12,2Zm4.59,14.42a.62.62,0,0,1-.86.21h0c-2.35-1.43-5.31-1.76-8.79-1a.62.62,0,0,1-.27-1.22c3.81-.87,7.07-.5,\r\n            9.71,1.12a.62.62,0,0,1,.21.85Zm1.22-2.72a.78.78,0,0,1-1.07.26h0a13.1,13.1,0,0,0-10-1.17.78.78,0,1,\r\n            1-.5-1.48h.05a14.58,14.58,0,0,1,11.23,1.33.78.78,0,0,1,.26,1.07Zm.1-2.84C14.69,9,9.37,\r\n            8.77,6.3,9.71a.94.94,0,0,1-.55-1.79c3.54-1.08,9.41-.87,13.12,1.33a1,1,0,0,1,.33,1.29.94.94,0,0,1-1.29.32Z" })));
}
function Search() {
    return (react.createElement("svg", { viewBox: "0 0 24 24" },
        react.createElement("path", { d: "M23.69,21.29l-6.35-6.35a1.13,1.13,0,0,0-.45-.26,9.33,9.33,0,1,0-2.21,2.21,1.2,1.2,0,0,0,\r\n            .26.45l6.36,6.35a1.54,1.54,0,0,0,2.11-.28A1.55,1.55,0,0,0,23.69,21.29ZM9.3,15.22A5.92,5.92,0,1,1,15.22,9.3,5.93,5.93,0,0,1,9.3,15.22Z" })));
}

var Volume = function () {
    var _a = react.useState(['65']), volume = _a[0], setVolume = _a[1];
    return (react.createElement("div", { id: "volumeLevel", className: "progressBarRow row" },
        react.createElement("button", { id: "muteBtn" },
            react.createElement(Mute, { onClick: function () {
                    return setVolume(function (prev) {
                        // @Notice This is fucking rank please refactor soon.
                        return prev[0] == '0' ? [prev[1]] : ['0', prev[0]];
                    });
                } })),
        react.createElement("input", { type: "range", className: "progress", min: "0", max: "100", value: volume[0], onChange: function (e) { return setVolume([e.target.value, volume[0]]); } })));
};

var PlayBackControls = function (_a) {
    _a.token;
    var state = useSpotify().state;
    var playerState = state.playerState, currentlyPlaying = state.currentlyPlaying, accessToken = state.accessToken;
    react.useEffect(function () { }, []);
    return (accessToken && (react.createElement("div", { id: "playbackControls" },
        react.createElement("div", { id: "songInformation" },
            react.createElement("div", { className: "row" },
                react.createElement("div", { id: "currentArtwork", style: { backgroundImage: "url('".concat(currentlyPlaying.image, "')") } })),
            react.createElement("div", { className: "row" },
                react.createElement("p", { id: "currentSong" },
                    currentlyPlaying.song,
                    " - ",
                    currentlyPlaying.album)),
            react.createElement("div", { className: "row" },
                react.createElement("p", { id: "currentArtist" }, currentlyPlaying.artist))),
        react.createElement(Volume, null),
        react.createElement("div", { className: "row" },
            react.createElement("button", { id: "shuffle", className: playerState.isShuffle && 'active' },
                react.createElement(Shuffle, null)),
            react.createElement("button", { id: "previous" },
                react.createElement(Previous, null)),
            react.createElement("button", { id: "playPause" }, playerState.isPlaying ? react.createElement(Play, null) : react.createElement(Pause, null)),
            react.createElement("button", { id: "next" },
                react.createElement(Next, null)),
            react.createElement("button", { id: "loop", className: classNames({ active: playerState.isLooping != 0 }, "mode".concat(playerState.isLooping)) },
                react.createElement(Loop, null))),
        react.createElement("div", { id: "songProgress", className: "progressBarRow row" },
            react.createElement("p", null, "1:43"),
            react.createElement("div", { className: "progressBar" },
                react.createElement("div", { className: "progressBarInner" }),
                react.createElement("div", { className: "progressKnob" })),
            react.createElement("p", null, "2:38")))));
};

/**
 * @param children any children of the component
 * @param to url that the link is to
 * @param defaultClassName default class name used by component
 * @param isActive The class name appended when the url matches the 'to' argument
 */
function NavLink(_a) {
    var _b;
    var children = _a.children, to = _a.to, defaultClassName = _a.defaultClassName, isActive = _a.isActive;
    var resolved = useResolvedPath(to);
    var match = useMatch({ path: resolved.pathname, end: true });
    return (react.createElement(Link, { to: to, className: classNames(defaultClassName, (_b = {}, _b[isActive] = match, _b)) }, children));
}

var Dashboard = function (_a) {
    var children = _a.children;
    return (react.createElement(react.Fragment, null,
        react.createElement("div", { id: "navbar" },
            react.createElement("div", { className: "pillRow" },
                react.createElement(NavLink, { to: "/", defaultClassName: "pill", isActive: "select" }, "Playlists"),
                react.createElement(NavLink, { to: "/artists", defaultClassName: "pill", isActive: "select" }, "Artists"),
                react.createElement(NavLink, { to: "/albums", defaultClassName: "pill", isActive: "select" }, "Albums"),
                react.createElement(NavLink, { to: "/queue", defaultClassName: "pill", isActive: "select" }, "Queue"),
                react.createElement("div", { id: "discordifySearch" },
                    react.createElement(Search, null)))),
        react.createElement("div", { className: "grid" }, children),
        react.createElement(PlayBackControls, { token: 'accessToken' })));
};

var Login = function () {
    var dispatch = useSpotify().dispatch;
    react.useEffect(function () {
        getAuthHeader().then(function (token) {
            if (token)
                dispatch({ type: SpotifyActions.SET_ACCESS, payload: token });
        });
    }, []);
    return react.createElement("h1", null, "Please get open a spotify device to use this plugin");
};

var Sidebar = function () {
    var state = useSpotify().state;
    var navigate = useNavigate();
    react.useEffect(function () {
        if (!state.accessToken)
            navigate('/login');
        else
            navigate('/');
    }, [state.accessToken]);
    return (react.createElement("div", { id: "discordSpotifySidebar" },
        react.createElement("div", { id: "discordSpotifyInner" },
            react.createElement(Routes, null,
                react.createElement(Route, { path: "/", element: react.createElement(Dashboard, null) },
                    react.createElement(Route, { index: true, element: react.createElement(Playlists, null) }),
                    react.createElement(Route, { path: "artists", element: react.createElement(Artists, null) }),
                    react.createElement(Route, { path: "albums", element: react.createElement(Albums, null) }),
                    react.createElement(Route, { path: "queue", element: react.createElement(Queue, null) })),
                react.createElement(Route, { path: "/login", element: react.createElement(Login, null) })))));
};

var LOGS = [
    ACTION_TYPES.SPOTIFY_PLAYER_PLAY,
    ACTION_TYPES.SPOTIFY_PLAYER_PAUSE,
    ACTION_TYPES.SPOTIFY_ACCOUNT_ACCESS_TOKEN_REVOKE
];
function App() {
    var _a = react.useState(BdApi.loadData('discordify', 'isHidden')), isHidden = _a[0], setIsHidden = _a[1];
    var _b = useSpotify(), state = _b.state, dispatch = _b.dispatch;
    var container = document.querySelector(SIDEBAR_CONTAINER_CLASS);
    var handleTokenUpdate = function (e) {
        if (state.accessToken !== e.accessToken)
            dispatch({ type: SpotifyActions.SET_ACCESS, payload: e.accessToken });
    };
    var handleStateUpdate = function (e) {
        debug_log('state update', e);
        // if the spotify state has changed and we still dont have an access token
        if (!state.accessToken) {
            getAuthHeader().then(function (token) {
                if (token)
                    dispatch({ type: SpotifyActions.SET_ACCESS, payload: token });
            });
        }
    };
    var handleDeviceUpdate = function (e) {
        debug_log(ACTION_TYPES.SPOTIFY_SET_DEVICES, e);
        // if there are no devices clear the token
        if (e.devices.length === 0)
            dispatch({ type: SpotifyActions.SET_ACCESS, payload: null });
        // try to fetch token when a new device is detected and the accessToken is null
        if (!state.accessToken && e.devices.length > 0)
            getAuthHeader().then(function (token) {
                debug_log('token from devices', token);
                if (token)
                    dispatch({ type: SpotifyActions.SET_ACCESS, payload: token });
            });
    };
    react.useEffect(function () {
        // if the access token is ever updated by discord internals, update the components value
        Dispatcher.subscribe(ACTION_TYPES.SPOTIFY_ACCOUNT_ACCESS_TOKEN, handleTokenUpdate);
        Dispatcher.subscribe(ACTION_TYPES.SPOTIFY_PLAYER_STATE, handleStateUpdate);
        Dispatcher.subscribe(ACTION_TYPES.SPOTIFY_SET_DEVICES, handleDeviceUpdate);
        LOGS.forEach(function (l) { return Dispatcher.subscribe(l, function (e) { return debug_log(l, e); }); });
        return function () {
            Dispatcher.unsubscribe(ACTION_TYPES.SPOTIFY_ACCOUNT_ACCESS_TOKEN, handleTokenUpdate);
            Dispatcher.unsubscribe(ACTION_TYPES.SPOTIFY_PLAYER_STATE, handleStateUpdate);
            Dispatcher.subscribe(ACTION_TYPES.SPOTIFY_SET_DEVICES, handleDeviceUpdate);
            LOGS.forEach(function (l) { return Dispatcher.unsubscribe(l, function (e) { return debug_log(l, e); }); });
        };
    }, []);
    return (react.createElement(react.Fragment, null,
        react.createElement("button", { id: "discordifyBtn", onClick: function () {
                return setIsHidden(function (prev) {
                    BdApi.saveData('discordify', 'isHidden', !prev);
                    return !prev;
                });
            } },
            react.createElement("div", { className: "iconWrapper-2OrFZ1 clickable-3rdHwn" },
                react.createElement(Spotify, null),
                react.createElement("div", { id: "discordifyBtnTooltip", className: "tooltip-2QfLtc tooltipBottom-3ARrEK tooltipPrimary-1d1ph4" },
                    react.createElement("div", { className: "tooltipPointer-3ZfirK" }),
                    react.createElement("div", { className: "tooltipContent-bqVLWK" },
                        isHidden ? 'Open' : 'Close',
                        " Spotify")))),
        ReactDOM.createPortal(!isHidden && react.createElement(Sidebar, null), container)));
}

var css = ":root {\n  --discordify-width: 400px;\n  --discordify-font-color: #ffffff;\n  --discordify-font-color-alt: #ababab;\n  --discordify-bg: #212121;\n  --discordify-bg-alt: #111111;\n  --discordify-navbar-bg: #181818;\n  --discordify-navbar-bg-alt: #282828;\n  --discordify-highlight: #2a2a2a;\n  --discordify-playbackBar-bg: #535353;\n  --discordify-btn-color: #b3b3b3;\n  --discordify-btn-color-alt: #333333;\n  --discordify-btn-color-hover: #ffffff;\n  --discordify-btn-color-active: #1db954;\n}\n\n#discordifyBtn {\n  background: none;\n  padding: 0;\n  margin: 0;\n  outline: none;\n  position: relative;\n  margin-right: 6px;\n}\n#discordifyBtn #discordifyBtnTooltip {\n  visibility: hidden;\n  position: absolute;\n  left: 50%;\n  bottom: -8px;\n  transform: translate(-50%, 100%);\n}\n#discordifyBtn svg * {\n  fill: var(--interactive-normal);\n}\n#discordifyBtn:hover svg * {\n  fill: var(--interactive-hover);\n}\n#discordifyBtn:hover #discordifyBtnTooltip {\n  visibility: visible;\n}\n\n#discordSpotifySidebar {\n  width: var(--discordify-width);\n  min-width: var(--discordify-width);\n  height: 100%;\n  box-sizing: border-box;\n  color: var(--discordify-btn-color);\n  position: relative;\n}\n#discordSpotifySidebar #discordSpotifyInner {\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  height: 100%;\n}\n#discordSpotifySidebar * {\n  box-sizing: border-box;\n}\n#discordSpotifySidebar .titleText {\n  color: var(--discordify-font-color);\n  font-size: 24px;\n  font-weight: 700;\n  letter-spacing: -0.04em;\n  line-height: 28px;\n  text-transform: none;\n  text-align: left;\n  width: 100%;\n  height: fit-content;\n}\n#discordSpotifySidebar .headerText {\n  color: var(--discordify-font-color-alt);\n  font-weight: 600;\n  display: block;\n  width: 100%;\n}\n#discordSpotifySidebar .round {\n  border-radius: 50% !important;\n}\n#discordSpotifySidebar .grid {\n  background: linear-gradient(110deg, var(--discordify-bg-alt), var(--discordify-bg) 75%);\n  align-items: flex-start;\n  padding: 12px;\n  display: flex;\n  flex-shrink: 1;\n  flex-grow: 1;\n  flex-basis: 0;\n  flex-wrap: wrap;\n  gap: 8px;\n  overflow-y: auto;\n}\n#discordSpotifySidebar .grid .gridBox {\n  background-color: var(--discordify-navbar-bg);\n  border-radius: 6px;\n  padding: 12px;\n  flex-shrink: 1;\n  flex-grow: 1;\n  max-width: calc(50% - 4px);\n  height: fit-content;\n}\n#discordSpotifySidebar .grid .gridBox:hover {\n  background-color: var(--discordify-highlight);\n}\n#discordSpotifySidebar .grid .gridBox:hover .playlistArtwork:before {\n  visibility: visible;\n}\n#discordSpotifySidebar .grid .gridBox:last-of-type {\n  margin-right: auto;\n}\n#discordSpotifySidebar .grid .gridBox.queueBox {\n  width: 100%;\n  max-width: 100%;\n  background: none;\n  display: grid;\n  grid-template-columns: [index] 16px [first] 3fr [var1] 2fr [last];\n  align-items: center;\n}\n#discordSpotifySidebar .grid .gridBox.queueBox:hover {\n  background-color: var(--discordify-highlight);\n}\n#discordSpotifySidebar .grid .gridBox.queueBox h1,\n#discordSpotifySidebar .grid .gridBox.queueBox h2,\n#discordSpotifySidebar .grid .gridBox.queueBox h3,\n#discordSpotifySidebar .grid .gridBox.queueBox h4 {\n  max-width: calc(var(--discordify-width) / 4);\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n#discordSpotifySidebar .grid .gridBox.queueBox h4 {\n  grid-column: last;\n}\n#discordSpotifySidebar .grid .gridBox.queueBox .songInfo {\n  display: flex;\n  flex-wrap: nowrap;\n  flex-direction: row;\n  line-height: 21px;\n  align-items: center;\n  gap: 12px;\n}\n#discordSpotifySidebar .grid .gridBox.queueBox .songInfo .songExtraInfo {\n  flex-direction: column;\n}\n#discordSpotifySidebar .grid .gridBox.queueBox .playlistArtwork {\n  width: 42px;\n  border-radius: 2px;\n  margin-bottom: 0;\n}\n#discordSpotifySidebar .grid .gridBox.queueBox .playlistArtwork::before {\n  visibility: hidden !important;\n}\n#discordSpotifySidebar .grid .gridBox.wideBox {\n  max-width: 100%;\n  flex-basis: 100%;\n  background: linear-gradient(135deg, #470cf5, #8d8ce5);\n}\n#discordSpotifySidebar .grid .gridBox.wideBox h1 {\n  font-size: 16pt;\n  font-weight: 600;\n  margin-bottom: 12px;\n}\n#discordSpotifySidebar .grid .gridBox.wideBox h2 {\n  color: var(--discordify-font-color);\n}\n#discordSpotifySidebar .grid .gridBox.wideBox .playlistArtwork {\n  max-width: 100%;\n  max-height: 100px;\n  visibility: hidden;\n}\n#discordSpotifySidebar .grid .gridBox.wideBox .playlistArtwork:after {\n  padding-bottom: 50%;\n}\n#discordSpotifySidebar .grid .gridBox .playlistArtwork {\n  position: relative;\n  width: 100%;\n  border-radius: 4px;\n  max-width: 180px;\n  max-height: 180px;\n  background: var(--discordify-btn-color);\n  margin-bottom: 16px;\n}\n#discordSpotifySidebar .grid .gridBox .playlistArtwork:before {\n  visibility: hidden;\n  border-radius: 50%;\n  content: \"\";\n  display: block;\n  position: absolute;\n  width: 25%;\n  height: 25%;\n  min-width: 30px;\n  min-height: 30px;\n  max-width: 45px;\n  max-width: 45px;\n  bottom: 6px;\n  right: 6px;\n  background-color: var(--discordify-btn-color-active);\n  box-shadow: rgba(0, 0, 0, 0.25) 3px 3px 8px, rgba(0, 0, 0, 0.15) 2px 2px 4px;\n}\n#discordSpotifySidebar .grid .gridBox .playlistArtwork:after {\n  content: \"\";\n  display: block;\n  padding-bottom: 100%;\n}\n#discordSpotifySidebar .grid .gridBox h1 {\n  color: var(--discordify-font-color);\n  margin-bottom: 8px;\n}\n#discordSpotifySidebar .grid .gridBox h2 {\n  color: var(--discordify-font-color-alt);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n#discordSpotifySidebar #navbar {\n  padding: 12px;\n  background-color: var(--discordify-bg-alt);\n}\n#discordSpotifySidebar #navbar .pillRow {\n  display: flex;\n  flex-direction: row;\n  align-items: flex-start;\n  gap: 8px;\n  width: 100%;\n}\n#discordSpotifySidebar #navbar .pillRow .pill {\n  padding: 12px;\n  border-radius: 8px;\n  color: var(--discordify-font-color);\n  font-weight: 500;\n}\n#discordSpotifySidebar #navbar .pillRow .pill.select, #discordSpotifySidebar #navbar .pillRow .pill:hover {\n  cursor: pointer;\n  background-color: var(--discordify-btn-color-alt);\n}\n#discordSpotifySidebar #navbar .pillRow #discordifySearch {\n  width: 40px;\n  height: 40px;\n  align-self: center;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-left: auto;\n}\n#discordSpotifySidebar #navbar .pillRow #discordifySearch svg {\n  width: 17px;\n  height: 17px;\n}\n#discordSpotifySidebar #navbar .pillRow #discordifySearch svg * {\n  fill: var(--discordify-font-color-alt);\n}\n#discordSpotifySidebar #navbar .pillRow #discordifySearch:hover {\n  cursor: pointer;\n  background-color: var(--discordify-btn-color-alt);\n}\n#discordSpotifySidebar #navbar .pillRow #discordifySearch:hover svg * {\n  fill: var(--discordify-font-color);\n}\n#discordSpotifySidebar #playbackControls {\n  text-align: center;\n  border-top: solid 1px #404040;\n  background-color: var(--discordify-navbar-bg);\n  width: var(--discordify-width);\n  height: fit-content;\n  padding-top: 25px;\n  padding-bottom: 25px;\n  padding-left: 12px;\n  padding-right: 12px;\n}\n#discordSpotifySidebar #playbackControls .row {\n  margin-bottom: 12px;\n  margin-left: 30px;\n  margin-right: 30px;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-evenly;\n  align-items: center;\n  gap: 8px;\n}\n#discordSpotifySidebar #playbackControls .row:last-of-type {\n  margin-bottom: 0;\n}\n#discordSpotifySidebar #playbackControls #songInformation #currentArtwork {\n  width: calc(var(--discordify-width) - var(--discordify-width) * 0.45);\n  height: calc(var(--discordify-width) - var(--discordify-width) * 0.45);\n  max-width: 300px;\n  max-height: 300px;\n  background-color: var(--discordify-btn-color);\n  margin-bottom: 8px;\n  border-radius: 8px;\n  background-size: 100%;\n}\n#discordSpotifySidebar #playbackControls #songInformation #compactBtn {\n  background-color: var(--discordify-btn-color);\n  border-radius: 50%;\n  display: none;\n}\n#discordSpotifySidebar #playbackControls #songInformation #compactBtn svg * {\n  fill: var(--discordify-navbar-bg);\n}\n#discordSpotifySidebar #playbackControls #songInformation #compactBtn:hover {\n  background-color: var(--discordify-btn-color-hover);\n}\n#discordSpotifySidebar #playbackControls #songInformation #currentArtist,\n#discordSpotifySidebar #playbackControls #songInformation #currentSong {\n  margin: 0;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  max-width: calc(var(--discordify-width) - 48px);\n}\n#discordSpotifySidebar #playbackControls #songInformation #currentSong {\n  color: var(--discordify-btn-color-hover);\n}\n#discordSpotifySidebar #playbackControls #songInformation #currentArtist {\n  margin-bottom: 12px;\n}\n#discordSpotifySidebar #playbackControls.compact #songInformation {\n  display: flex;\n  margin-left: auto;\n  margin-right: auto;\n  width: 85%;\n  margin-bottom: 24px;\n  border-bottom: solid 1px #404040;\n}\n#discordSpotifySidebar #playbackControls.compact #songInformation #compactBtn {\n  margin-left: auto;\n  margin-right: 8px;\n  display: block;\n}\n#discordSpotifySidebar #playbackControls.compact #songInformation #compactBtn svg {\n  transform: rotate(180deg);\n}\n#discordSpotifySidebar #playbackControls.compact #songInformation .row {\n  margin-left: 0;\n  margin-right: 0;\n}\n#discordSpotifySidebar #playbackControls.compact #songInformation #currentArtwork {\n  width: 40px;\n  height: 40px;\n  margin-right: 18px;\n  margin-left: 8px;\n  border-radius: 2px;\n}\n#discordSpotifySidebar #playbackControls.compact #songInformation #songDetails p {\n  max-width: calc(var(--discordify-width) / 2 - 48px);\n}\n#discordSpotifySidebar #playbackControls.compact #songInformation #songDetails .row {\n  display: block;\n  text-align: left;\n}\n#discordSpotifySidebar #playbackControls.compact #volumeLevel {\n  display: none;\n}\n#discordSpotifySidebar #playbackControls button {\n  position: relative;\n  width: 35px;\n  max-width: 35px;\n  height: 35px;\n  max-height: 35px;\n  font-size: 0;\n  background: none;\n}\n#discordSpotifySidebar #playbackControls button svg {\n  width: 15px;\n  height: 15px;\n}\n#discordSpotifySidebar #playbackControls button svg * {\n  fill: #b3b3b3;\n}\n#discordSpotifySidebar #playbackControls button:hover svg * {\n  fill: var(--discordify-btn-color-hover);\n}\n#discordSpotifySidebar #playbackControls button.active svg * {\n  fill: var(--discordify-btn-color-active);\n}\n#discordSpotifySidebar #playbackControls button#shuffle.active::after, #discordSpotifySidebar #playbackControls button#loop.active::after {\n  content: \"\";\n  min-width: 4px;\n  min-height: 4px;\n  border-radius: 50%;\n  position: absolute;\n  bottom: 0;\n  left: 50%;\n  transform: translateX(-50%);\n  background: var(--discordify-btn-color-active);\n}\n#discordSpotifySidebar #playbackControls button#shuffle.active.mode2::before, #discordSpotifySidebar #playbackControls button#loop.active.mode2::before {\n  font-size: 8pt;\n  font-weight: 600;\n  color: var(--discordify-navbar-bg);\n  border: 2px solid var(--discordify-navbar-bg);\n  content: \"1\";\n  min-width: 14px;\n  min-height: 14px;\n  border-radius: 50%;\n  position: absolute;\n  top: 0;\n  right: -5px;\n  transform: translateX(-50%);\n  background: var(--discordify-btn-color-active);\n}\n#discordSpotifySidebar #playbackControls button#muteBtn svg {\n  width: 19px;\n  height: 19px;\n}\n#discordSpotifySidebar #playbackControls button#playPause {\n  width: 45px;\n  max-width: 45px;\n  height: 45px;\n  max-height: 45px;\n  border-radius: 50%;\n  transition: transform 0.05s ease;\n  background: var(--discordify-btn-color);\n}\n#discordSpotifySidebar #playbackControls button#playPause svg * {\n  fill: var(--discordify-navbar-bg);\n}\n#discordSpotifySidebar #playbackControls button#playPause:hover {\n  background-color: var(--discordify-btn-color-hover);\n  transform: scale(1.1);\n}";
BdApi.injectCSS("discordify-styles",css);

module.exports = /** @class */ (function () {
    function SpotifyDiscord() {
    }
    SpotifyDiscord.prototype.load = function () { };
    SpotifyDiscord.prototype.start = function () {
        var _a;
        debug_log('started!');
        var HeaderBarContainer = (_a = BdApi.findModuleByDisplayName('HeaderBarContainer')) === null || _a === void 0 ? void 0 : _a.prototype;
        // @ts-expect-error
        BdApi.Patcher.after('discordify', HeaderBarContainer, 'renderLoggedIn', function (_, __, returnValue) {
            var _a, _b, _c;
            (_c = (_b = (_a = returnValue === null || returnValue === void 0 ? void 0 : returnValue.props) === null || _a === void 0 ? void 0 : _a.toolbar) === null || _b === void 0 ? void 0 : _b.props) === null || _c === void 0 ? void 0 : _c.children.push(react.createElement(MainComponent, null));
        });
    };
    SpotifyDiscord.prototype.stop = function () {
        // @ts-expect-error
        BdApi.Patcher.unpatchAll('discordify');
    };
    return SpotifyDiscord;
}());
var MainComponent = function () {
    var _a = react.useReducer(spotifyReducer, initialState), state = _a[0], dispatch = _a[1];
    return (react.createElement(SpotifyContext.Provider, { value: { state: state, dispatch: dispatch } },
        react.createElement(MemoryRouter, null,
            react.createElement(App, null))));
};
