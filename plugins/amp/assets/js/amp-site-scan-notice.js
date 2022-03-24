/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./assets/src/admin/site-scan-notice/notice.js":
/*!*****************************************************!*\
  !*** ./assets/src/admin/site-scan-notice/notice.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SiteScanNotice": function() { return /* binding */ SiteScanNotice; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var amp_site_scan_notice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! amp-site-scan-notice */ "amp-site-scan-notice");
/* harmony import */ var amp_site_scan_notice__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(amp_site_scan_notice__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_site_scan_context_provider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/site-scan-context-provider */ "./assets/src/components/site-scan-context-provider/index.js");
/* harmony import */ var _components_amp_admin_notice__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/amp-admin-notice */ "./assets/src/components/amp-admin-notice/index.js");
/* harmony import */ var _components_loading__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/loading */ "./assets/src/components/loading/index.js");
/* harmony import */ var _common_helpers_is_external_url__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../common/helpers/is-external-url */ "./assets/src/common/helpers/is-external-url.js");
/* harmony import */ var _plugins_with_amp_incompatibility__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./plugins-with-amp-incompatibility */ "./assets/src/admin/site-scan-notice/plugins-with-amp-incompatibility.js");



/**
 * External dependencies
 */
 // From WP inline script.

/**
 * WordPress dependencies
 */



/**
 * Internal dependencies
 */





 // Define Plugin Suppression link.

const PLUGIN_SUPPRESSION_LINK = new URL(amp_site_scan_notice__WEBPACK_IMPORTED_MODULE_2__.SETTINGS_LINK);
PLUGIN_SUPPRESSION_LINK.hash = 'plugin-suppression';
function SiteScanNotice() {
  const {
    cancelSiteScan,
    fetchScannableUrls,
    isCancelled,
    isCompleted,
    isFailed,
    isInitializing,
    isReady,
    pluginsWithAmpIncompatibility,
    startSiteScan
  } = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useContext)(_components_site_scan_context_provider__WEBPACK_IMPORTED_MODULE_4__.SiteScan); // Cancel scan on component unmount.

  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => cancelSiteScan, [cancelSiteScan]); // Fetch scannable URLs on mount. Start site scan right after the component is mounted and the scanner is ready.

  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (isInitializing) {
      fetchScannableUrls();
    } else if (isReady) {
      startSiteScan();
    }
  }, [fetchScannableUrls, isInitializing, isReady, startSiteScan]);
  const commonNoticeProps = {
    className: 'amp-site-scan-notice',
    isDismissible: true,
    onDismiss: cancelSiteScan
  };

  if (isFailed || isCancelled) {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_components_amp_admin_notice__WEBPACK_IMPORTED_MODULE_5__.AmpAdminNotice, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      type: _components_amp_admin_notice__WEBPACK_IMPORTED_MODULE_5__.AMP_ADMIN_NOTICE_TYPE_ERROR
    }, commonNoticeProps), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("p", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('AMP could not check your site for compatibility issues.', 'amp')));
  }

  if (isCompleted && pluginsWithAmpIncompatibility.length === 0) {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_components_amp_admin_notice__WEBPACK_IMPORTED_MODULE_5__.AmpAdminNotice, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      type: _components_amp_admin_notice__WEBPACK_IMPORTED_MODULE_5__.AMP_ADMIN_NOTICE_TYPE_SUCCESS
    }, commonNoticeProps), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("p", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('No AMP compatibility issues detected.', 'amp')));
  }

  if (isCompleted && pluginsWithAmpIncompatibility.length > 0) {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_components_amp_admin_notice__WEBPACK_IMPORTED_MODULE_5__.AmpAdminNotice, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      type: _components_amp_admin_notice__WEBPACK_IMPORTED_MODULE_5__.AMP_ADMIN_NOTICE_TYPE_WARNING
    }, commonNoticeProps), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_plugins_with_amp_incompatibility__WEBPACK_IMPORTED_MODULE_8__.PluginsWithAmpIncompatibility, {
      pluginsWithAmpIncompatibility: pluginsWithAmpIncompatibility
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
      className: "amp-site-scan-notice__cta"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("a", {
      href: PLUGIN_SUPPRESSION_LINK,
      className: "button"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Review Plugin Suppression', 'amp')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("a", (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      href: amp_site_scan_notice__WEBPACK_IMPORTED_MODULE_2__.AMP_COMPATIBLE_PLUGINS_URL,
      className: "button"
    }, (0,_common_helpers_is_external_url__WEBPACK_IMPORTED_MODULE_7__.isExternalUrl)(amp_site_scan_notice__WEBPACK_IMPORTED_MODULE_2__.AMP_COMPATIBLE_PLUGINS_URL) ? {
      target: '_blank',
      rel: 'noopener noreferrer'
    } : {}), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('View AMP-Compatible Plugins', 'amp'))));
  }

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_components_amp_admin_notice__WEBPACK_IMPORTED_MODULE_5__.AmpAdminNotice, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    type: _components_amp_admin_notice__WEBPACK_IMPORTED_MODULE_5__.AMP_ADMIN_NOTICE_TYPE_INFO
  }, commonNoticeProps), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("p", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Checking your site for AMP compatibility issues…', 'amp'), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_components_loading__WEBPACK_IMPORTED_MODULE_6__.Loading, {
    inline: true
  })));
}

/***/ }),

/***/ "./assets/src/admin/site-scan-notice/plugins-with-amp-incompatibility.js":
/*!*******************************************************************************!*\
  !*** ./assets/src/admin/site-scan-notice/plugins-with-amp-incompatibility.js ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PluginsWithAmpIncompatibility": function() { return /* binding */ PluginsWithAmpIncompatibility; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_plugins_context_provider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/plugins-context-provider */ "./assets/src/components/plugins-context-provider/index.js");
/* harmony import */ var _common_helpers_get_plugin_slug_from_file__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common/helpers/get-plugin-slug-from-file */ "./assets/src/common/helpers/get-plugin-slug-from-file.js");


/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */



/**
 * Internal dependencies
 */



/**
 * Render a DETAILS element for each plugin causing AMP incompatibilities.
 *
 * @param {Object} props                               Component props.
 * @param {Array}  props.pluginsWithAmpIncompatibility Array of plugins with AMP incompatibilities.
 */

function PluginsWithAmpIncompatibility(_ref) {
  let {
    pluginsWithAmpIncompatibility
  } = _ref;
  const {
    fetchingPlugins,
    plugins
  } = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useContext)(_components_plugins_context_provider__WEBPACK_IMPORTED_MODULE_3__.Plugins);

  if (fetchingPlugins) {
    return null;
  }

  const pluginNames = Object.values(plugins).reduce((accumulatedPluginNames, plugin) => {
    return { ...accumulatedPluginNames,
      [(0,_common_helpers_get_plugin_slug_from_file__WEBPACK_IMPORTED_MODULE_4__.getPluginSlugFromFile)(plugin.plugin)]: plugin.name
    };
  }, {});
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__._n)('AMP compatibility issues discovered with the following plugin:', 'AMP compatibility issues discovered with the following plugins:', pluginsWithAmpIncompatibility.length, 'amp')), pluginsWithAmpIncompatibility.map(pluginWithAmpIncompatibility => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("details", {
    key: pluginWithAmpIncompatibility.slug,
    className: "amp-site-scan-notice__plugin-details"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("summary", {
    className: "amp-site-scan-notice__plugin-summary",
    dangerouslySetInnerHTML: {
      __html: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.sprintf)(
      /* translators: 1: plugin name; 2: number of URLs with AMP validation issues. */
      (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__._n)('<b>%1$s</b> on %2$d URL', '<b>%1$s</b> on %2$d URLs', pluginWithAmpIncompatibility.urls.length, 'amp'), pluginNames[pluginWithAmpIncompatibility.slug], pluginWithAmpIncompatibility.urls.length)
    }
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("ul", {
    className: "amp-site-scan-notice__urls-list"
  }, pluginWithAmpIncompatibility.urls.map(url => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", {
    key: url
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    href: url,
    target: "_blank",
    rel: "noopener noreferrer"
  }, url)))))));
}
PluginsWithAmpIncompatibility.propTypes = {
  pluginsWithAmpIncompatibility: prop_types__WEBPACK_IMPORTED_MODULE_1___default().arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default().shape({
    slug: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
    urls: prop_types__WEBPACK_IMPORTED_MODULE_1___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_1___default().string))
  }))
};

/***/ }),

/***/ "./assets/src/common/constants.js":
/*!****************************************!*\
  !*** ./assets/src/common/constants.js ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MIN_FONT_SIZE": function() { return /* binding */ MIN_FONT_SIZE; },
/* harmony export */   "MAX_FONT_SIZE": function() { return /* binding */ MAX_FONT_SIZE; },
/* harmony export */   "FILE_TYPE_ERROR_VIEW": function() { return /* binding */ FILE_TYPE_ERROR_VIEW; },
/* harmony export */   "READER": function() { return /* binding */ READER; },
/* harmony export */   "STANDARD": function() { return /* binding */ STANDARD; },
/* harmony export */   "TRANSITIONAL": function() { return /* binding */ TRANSITIONAL; },
/* harmony export */   "DEFAULT_MOBILE_BREAKPOINT": function() { return /* binding */ DEFAULT_MOBILE_BREAKPOINT; }
/* harmony export */ });
// See https://github.com/ampproject/amphtml/blob/e7a1b3ff97645ec0ec482192205134bd0735943c/extensions/amp-fit-text/0.1/amp-fit-text.js#L81-L85
const MIN_FONT_SIZE = 6;
const MAX_FONT_SIZE = 72;
const FILE_TYPE_ERROR_VIEW = 'select-file-type-error';
const READER = 'reader';
const STANDARD = 'standard';
const TRANSITIONAL = 'transitional';
const DEFAULT_MOBILE_BREAKPOINT = 783;

/***/ }),

/***/ "./assets/src/common/helpers/get-plugin-slug-from-file.js":
/*!****************************************************************!*\
  !*** ./assets/src/common/helpers/get-plugin-slug-from-file.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getPluginSlugFromFile": function() { return /* binding */ getPluginSlugFromFile; }
/* harmony export */ });
/**
 * Get plugin slug from file path.
 *
 * If the plugin file is in a directory, then the slug is just the directory name. Otherwise, if the file is not
 * inside of a directory and is just a single-file plugin, then the slug is the filename of the PHP file.
 *
 * If the file path contains a file extension, it will be stripped as well.
 *
 * See the corresponding PHP logic in `\AmpProject\AmpWP\get_plugin_slug_from_file()`.
 *
 * @param {string} path Plugin file path.
 * @return {string} Plugin slug.
 */
function getPluginSlugFromFile() {
  let path = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  return path.replace(/\/.*$/, '').replace(/\.php$/, '');
}

/***/ }),

/***/ "./assets/src/common/helpers/is-external-url.js":
/*!******************************************************!*\
  !*** ./assets/src/common/helpers/is-external-url.js ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isExternalUrl": function() { return /* binding */ isExternalUrl; }
/* harmony export */ });
/**
 * Check if the provided URL is external.
 *
 * @param {string} url URL to be checked.
 * @return {boolean} True if the URL is external, false otherwise.
 */
const isExternalUrl = url => {
  var _global, _global$location;

  return ((_global = __webpack_require__.g) === null || _global === void 0 ? void 0 : (_global$location = _global.location) === null || _global$location === void 0 ? void 0 : _global$location.host) !== new URL(url).host;
};

/***/ }),

/***/ "./assets/src/components/amp-admin-notice/index.js":
/*!*********************************************************!*\
  !*** ./assets/src/components/amp-admin-notice/index.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AMP_ADMIN_NOTICE_TYPE_INFO": function() { return /* binding */ AMP_ADMIN_NOTICE_TYPE_INFO; },
/* harmony export */   "AMP_ADMIN_NOTICE_TYPE_SUCCESS": function() { return /* binding */ AMP_ADMIN_NOTICE_TYPE_SUCCESS; },
/* harmony export */   "AMP_ADMIN_NOTICE_TYPE_WARNING": function() { return /* binding */ AMP_ADMIN_NOTICE_TYPE_WARNING; },
/* harmony export */   "AMP_ADMIN_NOTICE_TYPE_ERROR": function() { return /* binding */ AMP_ADMIN_NOTICE_TYPE_ERROR; },
/* harmony export */   "AmpAdminNotice": function() { return /* binding */ AmpAdminNotice; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./style.scss */ "./assets/src/components/amp-admin-notice/style.scss");


/**
 * External dependencies
 */


/**
 * WordPress dependencies
 */




/**
 * Internal dependencies
 */


const AMP_ADMIN_NOTICE_TYPE_INFO = 'info';
const AMP_ADMIN_NOTICE_TYPE_SUCCESS = 'success';
const AMP_ADMIN_NOTICE_TYPE_WARNING = 'warning';
const AMP_ADMIN_NOTICE_TYPE_ERROR = 'error';
/**
 * WordPress admin notice.
 *
 * @param {Object}   props               Component props.
 * @param {Element}  props.children      Component children.
 * @param {string}   props.className     Additional class names.
 * @param {boolean}  props.isDismissible Indicates whether the notice should be dismissible.
 * @param {Function} props.onDismiss     Function to be called whenever the notice gets dismissed.
 * @param {string}   props.type          Specifies type of the notice.
 */

function AmpAdminNotice(_ref) {
  let {
    children,
    className,
    isDismissible = false,
    onDismiss,
    type = AMP_ADMIN_NOTICE_TYPE_INFO
  } = _ref;
  const [dismissed, setDismissed] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const dismissHandler = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {
    setDismissed(true);

    if (typeof onDismiss === 'function') {
      onDismiss();
    }
  }, [onDismiss]);

  if (isDismissible && dismissed) {
    return null;
  }

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('amp-admin-notice', className, {
      'amp-admin-notice--dismissible': isDismissible,
      'amp-admin-notice--info': type === AMP_ADMIN_NOTICE_TYPE_INFO,
      'amp-admin-notice--success': type === AMP_ADMIN_NOTICE_TYPE_SUCCESS,
      'amp-admin-notice--warning': type === AMP_ADMIN_NOTICE_TYPE_WARNING,
      'amp-admin-notice--error': type === AMP_ADMIN_NOTICE_TYPE_ERROR
    })
  }, children, isDismissible && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    type: "button",
    onClick: dismissHandler,
    className: "amp-admin-notice__dismiss"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.VisuallyHidden, {
    as: "span"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Dismiss', 'amp'))));
}
AmpAdminNotice.propTypes = {
  children: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().any),
  className: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
  isDismissible: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool),
  onDismiss: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func),
  type: prop_types__WEBPACK_IMPORTED_MODULE_2___default().oneOf([AMP_ADMIN_NOTICE_TYPE_INFO, AMP_ADMIN_NOTICE_TYPE_SUCCESS, AMP_ADMIN_NOTICE_TYPE_WARNING, AMP_ADMIN_NOTICE_TYPE_ERROR])
};

/***/ }),

/***/ "./assets/src/components/clipboard-button/index.js":
/*!*********************************************************!*\
  !*** ./assets/src/components/clipboard-button/index.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ ClipboardButton; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);



/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */




const TIMEOUT = 4000; // Adapted from @wordpress/components: <https://github.com/WordPress/gutenberg/blob/3c00d85b12ee45365e3ab329301a07312d99ffdf/packages/components/src/clipboard-button/index.js#L18-L69>.

function ClipboardButton(_ref) {
  let {
    children,
    onCopy,
    onFinishCopy,
    text,
    ...buttonProps
  } = _ref;
  const timeoutId = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useRef)();
  const ref = (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_3__.useCopyToClipboard)(text, () => {
    if (onCopy) {
      onCopy();
    }

    clearTimeout(timeoutId.current);

    if (onFinishCopy) {
      timeoutId.current = setTimeout(() => onFinishCopy(), TIMEOUT);
    }
  });
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    clearTimeout(timeoutId.current);
  }, []); // Workaround for inconsistent behavior in Safari, where <textarea> is not
  // the document.activeElement at the moment when the copy event fires.
  // This causes documentHasSelection() in the copy-handler component to
  // mistakenly override the ClipboardButton, and copy a serialized string
  // of the current block instead.

  const focusOnCopyEventTarget = event => {
    event.target.focus();
  };

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Button, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, buttonProps, {
    className: "components-clipboard-button",
    ref: ref,
    onCopy: focusOnCopyEventTarget
  }), children);
}
ClipboardButton.propTypes = {
  children: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().any),
  onCopy: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func),
  onFinishCopy: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func),
  text: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string.isRequired)
};

/***/ }),

/***/ "./assets/src/components/error-boundary/index.js":
/*!*******************************************************!*\
  !*** ./assets/src/components/error-boundary/index.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ErrorBoundary": function() { return /* binding */ ErrorBoundary; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _error_screen__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../error-screen */ "./assets/src/components/error-screen/index.js");



/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */


/**
 * Catches errors in the application and displays a fallback screen.
 *
 * @see https://reactjs.org/docs/error-boundaries.html
 */

class ErrorBoundary extends _wordpress_element__WEBPACK_IMPORTED_MODULE_1__.Component {
  constructor(props) {
    super(props);
    this.timeout = null;
    this.state = {
      error: null
    };
  }

  componentDidMount() {
    this.mounted = true;
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  componentDidCatch(error) {
    this.setState({
      error
    });
  }

  render() {
    const {
      error
    } = this.state;
    const {
      children,
      exitLinkLabel,
      exitLinkUrl,
      title
    } = this.props;

    if (error) {
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_error_screen__WEBPACK_IMPORTED_MODULE_3__.ErrorScreen, {
        error: error,
        finishLinkLabel: exitLinkLabel,
        finishLinkUrl: exitLinkUrl,
        title: title
      });
    }

    return children;
  }

}

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(ErrorBoundary, "propTypes", {
  children: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().any),
  exitLinkLabel: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
  exitLinkUrl: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
  title: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string)
});

/***/ }),

/***/ "./assets/src/components/error-context-provider/index.js":
/*!***************************************************************!*\
  !*** ./assets/src/components/error-context-provider/index.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ErrorContext": function() { return /* binding */ ErrorContext; },
/* harmony export */   "ErrorContextProvider": function() { return /* binding */ ErrorContextProvider; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);


/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */


const ErrorContext = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createContext)();
/**
 * Error context provider.
 *
 * @param {Object} props          Component props.
 * @param {any}    props.children Component children.
 */

function ErrorContextProvider(_ref) {
  let {
    children
  } = _ref;
  const [error, setError] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ErrorContext.Provider, {
    value: {
      error,
      setError
    }
  }, children);
}
ErrorContextProvider.propTypes = {
  children: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().any)
};

/***/ }),

/***/ "./assets/src/components/error-screen/index.js":
/*!*****************************************************!*\
  !*** ./assets/src/components/error-screen/index.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ErrorScreen": function() { return /* binding */ ErrorScreen; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _clipboard_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../clipboard-button */ "./assets/src/components/clipboard-button/index.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./style.css */ "./assets/src/components/error-screen/style.css");


/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */




/**
 * Internal dependencies
 */



/**
 * Screen that shows when an error has broken the application.
 *
 * @param {Object} props                 Component props.
 * @param {Object} props.error           Error object containing a message string.
 * @param {string} props.finishLinkLabel Label of a link to return to the admin.
 * @param {string} props.finishLinkUrl   Url of a link to return to the admin.
 * @param {string} props.title           Custom message title.
 */

function ErrorScreen(_ref) {
  let {
    error,
    finishLinkLabel,
    finishLinkUrl,
    title
  } = _ref;
  const [hasCopied, setHasCopied] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const {
    message,
    stack
  } = error;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "error-screen-container"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Panel, {
    className: "error-screen"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h1", null, title || (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Something went wrong.', 'amp')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    dangerouslySetInnerHTML: {
      __html: message || (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('There was an error loading the page.', 'amp')
    }
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    dangerouslySetInnerHTML: {
      __html: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.sprintf)( // translators: %s is the AMP support forum URL.
      (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Please submit details to our <a href="%s" target="_blank" rel="noreferrer noopener">support forum</a>.', 'amp'), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('https://wordpress.org/support/plugin/amp/', 'amp'))
    }
  }), stack && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("details", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("summary", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Details', 'amp')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("pre", null, stack), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_clipboard_button__WEBPACK_IMPORTED_MODULE_4__["default"], {
    isSmall: true,
    isSecondary: true,
    text: JSON.stringify({
      message,
      stack
    }, null, 2),
    onCopy: () => setHasCopied(true),
    onFinishCopy: () => setHasCopied(false)
  }, hasCopied ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Copied!', 'amp') : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Copy Error', 'amp'))), finishLinkUrl && finishLinkLabel && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    href: finishLinkUrl
  }, finishLinkLabel))));
}
ErrorScreen.propTypes = {
  error: prop_types__WEBPACK_IMPORTED_MODULE_1___default().shape({
    message: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
    stack: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string)
  }).isRequired,
  finishLinkLabel: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  finishLinkUrl: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  title: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string)
};

/***/ }),

/***/ "./assets/src/components/loading/index.js":
/*!************************************************!*\
  !*** ./assets/src/components/loading/index.js ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Loading": function() { return /* binding */ Loading; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style.css */ "./assets/src/components/loading/style.css");


/**
 * External dependencies
 */


/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */


/**
 * Loading indicator.
 *
 * @param {Object}  props        Component props.
 * @param {boolean} props.inline Display indicator as an inline element.
 */
// @todo WIP: Updated design needed.

function Loading(_ref) {
  let {
    inline = false
  } = _ref;
  const Tag = inline ? 'span' : 'div';
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Tag, {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('amp-spinner-container', {
      'amp-spinner-container--inline': inline
    })
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Spinner, null));
}
Loading.propTypes = {
  inline: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool)
};

/***/ }),

/***/ "./assets/src/components/options-context-provider/index.js":
/*!*****************************************************************!*\
  !*** ./assets/src/components/options-context-provider/index.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Options": function() { return /* binding */ Options; },
/* harmony export */   "OptionsContextProvider": function() { return /* binding */ OptionsContextProvider; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/api-fetch */ "@wordpress/api-fetch");
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_url__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/url */ "@wordpress/url");
/* harmony import */ var _wordpress_url__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_url__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_use_async_error__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/use-async-error */ "./assets/src/utils/use-async-error.js");
/* harmony import */ var _error_context_provider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../error-context-provider */ "./assets/src/components/error-context-provider/index.js");


/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */




/**
 * Internal dependencies
 */



const Options = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createContext)();
/**
 * Returns a promise that resolves after one second.
 */

function waitASecond() {
  return new Promise(resolve => {
    setTimeout(resolve, 1000);
  });
}
/**
 * Context provider for options retrieval and updating.
 *
 * @param {Object}  props                       Component props.
 * @param {?any}    props.children              Component children.
 * @param {string}  props.optionsRestPath       REST endpoint to retrieve options.
 * @param {boolean} props.populateDefaultValues Whether default values should be populated.
 * @param {boolean} props.hasErrorBoundary      Whether the component is wrapped in an error boundary.
 * @param {boolean} props.delaySave             Whether to delay updating state when saving data.
 */


function OptionsContextProvider(_ref) {
  let {
    children,
    optionsRestPath,
    populateDefaultValues,
    hasErrorBoundary = false,
    delaySave = false
  } = _ref;
  const [updates, setUpdates] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)({});
  const [fetchingPluginSuppression, setFetchingPluginSuppression] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [fetchingOptions, setFetchingOptions] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const [savedOptions, setSavedOptions] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)({});
  const [savingOptions, setSavingOptions] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [didSaveOptions, setDidSaveOptions] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [originalOptions, setOriginalOptions] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)({});
  const [modifiedOptions, setModifiedOptions] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)({});
  const {
    error,
    setError
  } = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useContext)(_error_context_provider__WEBPACK_IMPORTED_MODULE_5__.ErrorContext);
  const {
    setAsyncError
  } = (0,_utils_use_async_error__WEBPACK_IMPORTED_MODULE_4__.useAsyncError)();
  const [readerModeWasOverridden, setReaderModeWasOverridden] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(false); // This component sets state inside async functions. Use this ref to prevent state updates after unmount.

  const hasUnmounted = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => () => {
    hasUnmounted.current = true;
  }, []);
  /**
   * Fetches plugin suppression data.
   */

  const refetchPluginSuppression = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {
    if (error || fetchingPluginSuppression) {
      return;
    }
    /**
     * Fetches suppression data from the REST endpoint.
     */


    (async () => {
      setFetchingPluginSuppression(true);

      try {
        const fetchedPluginSuppression = await _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_2___default()({
          path: (0,_wordpress_url__WEBPACK_IMPORTED_MODULE_3__.addQueryArgs)(optionsRestPath, {
            _fields: ['suppressed_plugins', 'suppressible_plugins']
          })
        });

        if (true === hasUnmounted.current) {
          return;
        }

        setOriginalOptions({ ...originalOptions,
          ...fetchedPluginSuppression
        });
      } catch (e) {
        if (true === hasUnmounted.current) {
          return;
        }

        setError(e);

        if (hasErrorBoundary) {
          setAsyncError(e);
        }

        return;
      }

      setFetchingPluginSuppression(false);
    })();
  }, [error, fetchingPluginSuppression, hasErrorBoundary, optionsRestPath, originalOptions, setAsyncError, setError]);
  /**
   * Fetches options.
   */

  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (error || Object.keys(originalOptions).length || fetchingOptions) {
      return;
    }
    /**
     * Fetches plugin options from the REST endpoint.
     */


    (async () => {
      setFetchingOptions(true);

      try {
        const fetchedOptions = await _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_2___default()({
          path: optionsRestPath
        });

        if (true === hasUnmounted.current) {
          return;
        }

        if (!populateDefaultValues && fetchedOptions.plugin_configured === false) {
          fetchedOptions.mobile_redirect = true;
          fetchedOptions.reader_theme = null;
          fetchedOptions.theme_support = null;
        }

        setOriginalOptions(fetchedOptions);
      } catch (e) {
        if (true === hasUnmounted.current) {
          return;
        }

        setError(e);

        if (hasErrorBoundary) {
          setAsyncError(e);
        }

        return;
      }

      setFetchingOptions(false);
    })();
  }, [error, fetchingOptions, hasErrorBoundary, originalOptions, optionsRestPath, populateDefaultValues, setAsyncError, setError]);
  /**
   * Sends options to the REST endpoint to be saved.
   *
   * @param {Object} data Plugin options to update.
   */

  const saveOptions = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useCallback)(async () => {
    setSavingOptions(true);

    try {
      const updatesToSave = { ...updates
      }; // If the reader theme was set to null on initialization (i.e., this is the first time through the wizard
      // and reader mode was selected), remove it from the updates.

      if (null === updatesToSave.reader_theme) {
        delete updatesToSave.reader_theme;
      } // If this is the first time running the wizard and mobile_redirect is not in updates, set mobile_redirect to true.
      // We do this here instead of in the fetch effect to prevent the exit confirmation before the user has interacted.


      if (!originalOptions.plugin_configured && !('mobile_redirect' in updatesToSave)) {
        updatesToSave.mobile_redirect = originalOptions.mobile_redirect;
      }

      if (!originalOptions.plugin_configured) {
        updatesToSave.plugin_configured = true;
      } // Ensure this promise lasts at least a second so that the "Saving Options" load screen is
      // visible long enough for the user to see it is happening.


      const [retrievedOptions] = await Promise.all([_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_2___default()({
        method: 'post',
        path: optionsRestPath,
        data: updatesToSave
      }), delaySave ? waitASecond() : () => undefined]);

      if (true === hasUnmounted.current) {
        return;
      }

      setOriginalOptions(retrievedOptions);
      setError(null);
    } catch (e) {
      if (true === hasUnmounted.current) {
        return;
      }

      setSavingOptions(false);
      setError(e);

      if (hasErrorBoundary) {
        setAsyncError(e);
      }

      return;
    }

    setModifiedOptions({ ...modifiedOptions,
      ...updates
    });
    setSavedOptions(updates);
    setUpdates({});
    setDidSaveOptions(true);
    setSavingOptions(false);
  }, [delaySave, hasErrorBoundary, optionsRestPath, setAsyncError, originalOptions, setError, updates, modifiedOptions]);
  /**
   * Updates options in state.
   *
   * @param {Object} newOptions Updated options values.
   */

  const updateOptions = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useCallback)(newOptions => {
    setUpdates({ ...updates,
      ...newOptions
    });
    setDidSaveOptions(false);
  }, [updates]); // Allows an item in the updates object to be removed.

  const unsetOption = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useCallback)(option => {
    const newOptions = { ...updates
    };
    delete newOptions[option];
    setUpdates(newOptions);
  }, [updates]);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Options.Provider, {
    value: {
      editedOptions: { ...originalOptions,
        ...updates
      },
      fetchingOptions,
      hasOptionsChanges: Boolean(Object.keys(updates).length),
      didSaveOptions,
      updates,
      originalOptions,
      saveOptions,
      savedOptions,
      savingOptions,
      unsetOption,
      updateOptions,
      readerModeWasOverridden,
      refetchPluginSuppression,
      setReaderModeWasOverridden,
      modifiedOptions
    }
  }, children);
}
OptionsContextProvider.propTypes = {
  children: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().any),
  delaySave: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  hasErrorBoundary: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  optionsRestPath: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string.isRequired),
  populateDefaultValues: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool.isRequired)
};

/***/ }),

/***/ "./assets/src/components/plugins-context-provider/index.js":
/*!*****************************************************************!*\
  !*** ./assets/src/components/plugins-context-provider/index.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Plugins": function() { return /* binding */ Plugins; },
/* harmony export */   "PluginsContextProvider": function() { return /* binding */ PluginsContextProvider; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/api-fetch */ "@wordpress/api-fetch");
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_url__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/url */ "@wordpress/url");
/* harmony import */ var _wordpress_url__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_url__WEBPACK_IMPORTED_MODULE_3__);


/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */




const Plugins = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createContext)();
/**
 * Plugins context provider.
 *
 * @param {Object} props          Component props.
 * @param {any}    props.children Component children.
 */

function PluginsContextProvider(_ref) {
  let {
    children
  } = _ref;
  const [plugins, setPlugins] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const [fetchingPlugins, setFetchingPlugins] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const [error, setError] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)();
  /**
   * This component sets state inside async functions.
   * Use this ref to prevent state updates after unmount.
   */

  const hasUnmounted = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => () => {
    hasUnmounted.current = true;
  }, []);
  /**
   * Fetches validated URL data.
   */

  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (error || plugins.length > 0 || fetchingPlugins) {
      return;
    }

    (async () => {
      setFetchingPlugins(true);

      try {
        const fetchedPlugins = await _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_2___default()({
          path: (0,_wordpress_url__WEBPACK_IMPORTED_MODULE_3__.addQueryArgs)('/wp/v2/plugins', {
            _fields: ['author', 'name', 'plugin', 'status', 'version']
          })
        });

        if (hasUnmounted.current === true) {
          return;
        }

        setPlugins(fetchedPlugins);
      } catch (e) {
        if (hasUnmounted.current === true) {
          return;
        }

        setError(e);
      }

      setFetchingPlugins(false);
    })();
  }, [error, fetchingPlugins, plugins]);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Plugins.Provider, {
    value: {
      fetchingPlugins,
      plugins
    }
  }, children);
}
PluginsContextProvider.propTypes = {
  children: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().any)
};

/***/ }),

/***/ "./assets/src/components/site-scan-context-provider/get-sources-from-scannable-urls.js":
/*!*********************************************************************************************!*\
  !*** ./assets/src/components/site-scan-context-provider/get-sources-from-scannable-urls.js ***!
  \*********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getSourcesFromScannableUrls": function() { return /* binding */ getSourcesFromScannableUrls; }
/* harmony export */ });
/* harmony import */ var _common_helpers_get_plugin_slug_from_file__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common/helpers/get-plugin-slug-from-file */ "./assets/src/common/helpers/get-plugin-slug-from-file.js");
/**
 * Internal dependencies
 */

/**
 * From an array of scannable URLs, get plugin and theme slugs along with URLs for which AMP validation errors occur.
 *
 * See the corresponding PHP logic in `\AMP_Validated_URL_Post_Type::render_sources_column()`.
 *
 * @param {Array}   scannableUrls      Array of scannable URLs.
 * @param {Object}  options            Additional options object.
 * @param {boolean} options.useAmpUrls Whether to return `amp_url` instead of the regular URL in the lists of sources.
 * @return {Object} An object consisting of `plugins` and `themes` arrays.
 */

function getSourcesFromScannableUrls() {
  let scannableUrls = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  let {
    useAmpUrls = false
  } = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  const plugins = new Map();
  const themes = new Map();

  for (const scannableUrl of scannableUrls) {
    const {
      amp_url: ampUrl,
      url,
      validation_errors: validationErrors
    } = scannableUrl;

    if (!(validationErrors !== null && validationErrors !== void 0 && validationErrors.length)) {
      continue;
    }

    for (const validationError of validationErrors) {
      var _validationError$sour;

      if (!(validationError !== null && validationError !== void 0 && (_validationError$sour = validationError.sources) !== null && _validationError$sour !== void 0 && _validationError$sour.length)) {
        continue;
      }

      for (const source of validationError.sources) {
        if (source.type === 'plugin') {
          const pluginSlug = (0,_common_helpers_get_plugin_slug_from_file__WEBPACK_IMPORTED_MODULE_0__.getPluginSlugFromFile)(source.name);

          if ('gutenberg' === pluginSlug && validationError.sources.length > 1) {
            continue;
          }

          plugins.set(pluginSlug, new Set([...(plugins.get(pluginSlug) || []), useAmpUrls ? ampUrl : url]));
        } else if (source.type === 'theme') {
          themes.set(source.name, new Set([...(themes.get(source.name) || []), useAmpUrls ? ampUrl : url]));
        }
      }
    }
  } // Skip including AMP in the summary, since AMP is like core.


  plugins.delete('amp');
  return {
    plugins: [...plugins].map(_ref => {
      let [slug, urls] = _ref;
      return {
        slug,
        urls: [...urls]
      };
    }),
    themes: [...themes].map(_ref2 => {
      let [slug, urls] = _ref2;
      return {
        slug,
        urls: [...urls]
      };
    })
  };
}

/***/ }),

/***/ "./assets/src/components/site-scan-context-provider/index.js":
/*!*******************************************************************!*\
  !*** ./assets/src/components/site-scan-context-provider/index.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SiteScan": function() { return /* binding */ SiteScan; },
/* harmony export */   "ACTION_SET_STATUS": function() { return /* binding */ ACTION_SET_STATUS; },
/* harmony export */   "ACTION_SCANNABLE_URLS_REQUEST": function() { return /* binding */ ACTION_SCANNABLE_URLS_REQUEST; },
/* harmony export */   "ACTION_SCANNABLE_URLS_RECEIVE": function() { return /* binding */ ACTION_SCANNABLE_URLS_RECEIVE; },
/* harmony export */   "ACTION_SCAN_INITIALIZE": function() { return /* binding */ ACTION_SCAN_INITIALIZE; },
/* harmony export */   "ACTION_SCAN_URL": function() { return /* binding */ ACTION_SCAN_URL; },
/* harmony export */   "ACTION_SCAN_RECEIVE_RESULTS": function() { return /* binding */ ACTION_SCAN_RECEIVE_RESULTS; },
/* harmony export */   "ACTION_SCAN_COMPLETE": function() { return /* binding */ ACTION_SCAN_COMPLETE; },
/* harmony export */   "ACTION_SCAN_CANCEL": function() { return /* binding */ ACTION_SCAN_CANCEL; },
/* harmony export */   "STATUS_REQUEST_SCANNABLE_URLS": function() { return /* binding */ STATUS_REQUEST_SCANNABLE_URLS; },
/* harmony export */   "STATUS_FETCHING_SCANNABLE_URLS": function() { return /* binding */ STATUS_FETCHING_SCANNABLE_URLS; },
/* harmony export */   "STATUS_REFETCHING_PLUGIN_SUPPRESSION": function() { return /* binding */ STATUS_REFETCHING_PLUGIN_SUPPRESSION; },
/* harmony export */   "STATUS_READY": function() { return /* binding */ STATUS_READY; },
/* harmony export */   "STATUS_IDLE": function() { return /* binding */ STATUS_IDLE; },
/* harmony export */   "STATUS_IN_PROGRESS": function() { return /* binding */ STATUS_IN_PROGRESS; },
/* harmony export */   "STATUS_COMPLETED": function() { return /* binding */ STATUS_COMPLETED; },
/* harmony export */   "STATUS_FAILED": function() { return /* binding */ STATUS_FAILED; },
/* harmony export */   "STATUS_CANCELLED": function() { return /* binding */ STATUS_CANCELLED; },
/* harmony export */   "STATUS_SKIPPED": function() { return /* binding */ STATUS_SKIPPED; },
/* harmony export */   "siteScanReducer": function() { return /* binding */ siteScanReducer; },
/* harmony export */   "SiteScanContextProvider": function() { return /* binding */ SiteScanContextProvider; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/api-fetch */ "@wordpress/api-fetch");
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_url__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/url */ "@wordpress/url");
/* harmony import */ var _wordpress_url__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_url__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _common_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common/constants */ "./assets/src/common/constants.js");
/* harmony import */ var _utils_use_async_error__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/use-async-error */ "./assets/src/utils/use-async-error.js");
/* harmony import */ var _options_context_provider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../options-context-provider */ "./assets/src/components/options-context-provider/index.js");
/* harmony import */ var _get_sources_from_scannable_urls__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./get-sources-from-scannable-urls */ "./assets/src/components/site-scan-context-provider/get-sources-from-scannable-urls.js");


/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */




/**
 * Internal dependencies
 */





const SiteScan = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createContext)();
/**
 * Site Scan Actions.
 */

const ACTION_SET_STATUS = 'ACTION_SET_STATUS';
const ACTION_SCANNABLE_URLS_REQUEST = 'ACTION_SCANNABLE_URLS_REQUEST';
const ACTION_SCANNABLE_URLS_RECEIVE = 'ACTION_SCANNABLE_URLS_RECEIVE';
const ACTION_SCAN_INITIALIZE = 'ACTION_SCAN_INITIALIZE';
const ACTION_SCAN_URL = 'ACTION_SCAN_URL';
const ACTION_SCAN_RECEIVE_RESULTS = 'ACTION_SCAN_RECEIVE_RESULTS';
const ACTION_SCAN_COMPLETE = 'ACTION_SCAN_COMPLETE';
const ACTION_SCAN_CANCEL = 'ACTION_SCAN_CANCEL';
/**
 * Site Scan Statuses.
 */

const STATUS_REQUEST_SCANNABLE_URLS = 'STATUS_REQUEST_SCANNABLE_URLS';
const STATUS_FETCHING_SCANNABLE_URLS = 'STATUS_FETCHING_SCANNABLE_URLS';
const STATUS_REFETCHING_PLUGIN_SUPPRESSION = 'STATUS_REFETCHING_PLUGIN_SUPPRESSION';
const STATUS_READY = 'STATUS_READY';
const STATUS_IDLE = 'STATUS_IDLE';
const STATUS_IN_PROGRESS = 'STATUS_IN_PROGRESS';
const STATUS_COMPLETED = 'STATUS_COMPLETED';
const STATUS_FAILED = 'STATUS_FAILED';
const STATUS_CANCELLED = 'STATUS_CANCELLED';
const STATUS_SKIPPED = 'STATUS_SKIPPED';
/**
 * Initial Site Scan state.
 *
 * @type {Object}
 */

const INITIAL_STATE = {
  currentlyScannedUrlIndexes: [],
  forceStandardMode: false,
  scannableUrls: [],
  scanOnce: false,
  status: '',
  scansCount: 0,
  urlIndexesPendingScan: []
};
/**
 * The maximum number of validation requests that can be issued concurrently.
 *
 * @type {number}
 */

const CONCURRENT_VALIDATION_REQUESTS_MAX_COUNT = 3;
/**
 * The number of milliseconds to wait between subsequent validation requests.
 *
 * @type {number}
 */

const CONCURRENT_VALIDATION_REQUESTS_WAIT_MS = 500;
/**
 * Site Scan Reducer.
 *
 * @param {Object} state  Current state.
 * @param {Object} action Action to call.
 * @return {Object} New state.
 */
//eslint-disable-next-line complexity

function siteScanReducer(state, action) {
  // Bail out early if Site Scan is skipped, i.e. if there is no validation nonce provided meaning the current user
  // does not have capabilities for running AMP validation.
  if (state.status === STATUS_SKIPPED) {
    return state;
  }

  switch (action.type) {
    case ACTION_SET_STATUS:
      {
        return { ...state,
          status: action.status
        };
      }

    case ACTION_SCANNABLE_URLS_REQUEST:
      {
        var _action$forceStandard;

        return { ...state,
          status: STATUS_REQUEST_SCANNABLE_URLS,
          forceStandardMode: (_action$forceStandard = action === null || action === void 0 ? void 0 : action.forceStandardMode) !== null && _action$forceStandard !== void 0 ? _action$forceStandard : false,
          currentlyScannedUrlIndexes: [],
          urlIndexesPendingScan: []
        };
      }

    case ACTION_SCANNABLE_URLS_RECEIVE:
      {
        const hasScannableUrls = Array.isArray(action.scannableUrls) && action.scannableUrls.length > 0;
        return { ...state,
          status: state.scanOnce && state.scansCount > 0 || !hasScannableUrls ? STATUS_COMPLETED : STATUS_READY,
          scannableUrls: hasScannableUrls ? action.scannableUrls : []
        };
      }

    case ACTION_SCAN_INITIALIZE:
      {
        if (![STATUS_READY, STATUS_COMPLETED, STATUS_FAILED, STATUS_CANCELLED].includes(state.status)) {
          return state;
        }

        if (state.scanOnce && state.scansCount > 0) {
          return { ...state,
            status: STATUS_COMPLETED
          };
        }

        return { ...state,
          status: STATUS_IDLE,
          currentlyScannedUrlIndexes: [],
          scansCount: state.scansCount + 1,
          urlIndexesPendingScan: state.scannableUrls.map((url, index) => index)
        };
      }

    case ACTION_SCAN_URL:
      {
        if (![STATUS_IDLE, STATUS_IN_PROGRESS].includes(state.status)) {
          return state;
        }

        return { ...state,
          status: STATUS_IN_PROGRESS,
          currentlyScannedUrlIndexes: [...state.currentlyScannedUrlIndexes, action.currentlyScannedUrlIndex],
          urlIndexesPendingScan: state.urlIndexesPendingScan.filter(index => index !== action.currentlyScannedUrlIndex)
        };
      }

    case ACTION_SCAN_RECEIVE_RESULTS:
      {
        var _action$error;

        if (![STATUS_IDLE, STATUS_IN_PROGRESS].includes(state.status)) {
          return state;
        }

        return { ...state,
          status: STATUS_IDLE,
          currentlyScannedUrlIndexes: state.currentlyScannedUrlIndexes.filter(index => index !== action.currentlyScannedUrlIndex),
          scannableUrls: [...state.scannableUrls.slice(0, action.currentlyScannedUrlIndex), { ...state.scannableUrls[action.currentlyScannedUrlIndex],
            stale: false,
            error: (_action$error = action.error) !== null && _action$error !== void 0 ? _action$error : false,
            validated_url_post: action.error ? {} : action.validatedUrlPost,
            validation_errors: action.error ? [] : action.validationErrors
          }, ...state.scannableUrls.slice(action.currentlyScannedUrlIndex + 1)]
        };
      }

    case ACTION_SCAN_COMPLETE:
      {
        const hasFailed = state.scannableUrls.every(scannableUrl => Boolean(scannableUrl.error));
        return { ...state,
          status: hasFailed ? STATUS_FAILED : STATUS_REFETCHING_PLUGIN_SUPPRESSION
        };
      }

    case ACTION_SCAN_CANCEL:
      {
        if (![STATUS_IDLE, STATUS_IN_PROGRESS].includes(state.status)) {
          return state;
        }

        return { ...state,
          status: STATUS_CANCELLED,
          currentlyScannedUrlIndexes: [],
          urlIndexesPendingScan: []
        };
      }

    default:
      {
        throw new Error(`Unhandled action type: ${action.type}`);
      }
  }
}
/**
 * Context provider for site scanning.
 *
 * @param {Object}  props                                        Component props.
 * @param {?any}    props.children                               Component children.
 * @param {boolean} props.fetchCachedValidationErrors            Whether to fetch cached validation errors on mount.
 * @param {boolean} props.refetchPluginSuppressionOnScanComplete Whether to refetch plugin suppression data when site scan is complete.
 * @param {boolean} props.resetOnOptionsChange                   Whether to reset scanner and refetch scannable URLs whenever AMP options are changed.
 * @param {string}  props.scannableUrlsRestPath                  The REST path for interacting with the scannable URL resources.
 * @param {boolean} props.scanOnce                               Whether to scan only once.
 * @param {string}  props.validateNonce                          The AMP validate nonce.
 */

function SiteScanContextProvider(_ref) {
  var _scannableUrls$0$urlT, _scannableUrls$;

  let {
    children,
    fetchCachedValidationErrors = false,
    refetchPluginSuppressionOnScanComplete = false,
    resetOnOptionsChange = false,
    scannableUrlsRestPath,
    scanOnce = false,
    validateNonce
  } = _ref;
  const {
    originalOptions: {
      theme_support: themeSupport
    },
    savedOptions,
    refetchPluginSuppression
  } = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useContext)(_options_context_provider__WEBPACK_IMPORTED_MODULE_6__.Options);
  const {
    setAsyncError
  } = (0,_utils_use_async_error__WEBPACK_IMPORTED_MODULE_5__.useAsyncError)();
  const [state, dispatch] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useReducer)(siteScanReducer, { ...INITIAL_STATE,
    scanOnce
  });
  const {
    currentlyScannedUrlIndexes,
    forceStandardMode,
    scannableUrls,
    urlIndexesPendingScan,
    status
  } = state;
  const urlType = forceStandardMode || themeSupport === _common_constants__WEBPACK_IMPORTED_MODULE_4__.STANDARD ? 'url' : 'amp_url';
  const previewPermalink = (_scannableUrls$0$urlT = scannableUrls === null || scannableUrls === void 0 ? void 0 : (_scannableUrls$ = scannableUrls[0]) === null || _scannableUrls$ === void 0 ? void 0 : _scannableUrls$[urlType]) !== null && _scannableUrls$0$urlT !== void 0 ? _scannableUrls$0$urlT : '';
  /**
   * Memoize properties.
   */

  const {
    hasSiteScanResults,
    pluginsWithAmpIncompatibility,
    stale,
    themesWithAmpIncompatibility
  } = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    // Skip if the scan is in progress.
    if (![STATUS_READY, STATUS_COMPLETED, STATUS_SKIPPED].includes(status)) {
      return {
        hasSiteScanResults: false,
        pluginsWithAmpIncompatibility: [],
        stale: false,
        themesWithAmpIncompatibility: []
      };
    }

    const slugs = (0,_get_sources_from_scannable_urls__WEBPACK_IMPORTED_MODULE_7__.getSourcesFromScannableUrls)(scannableUrls, {
      useAmpUrls: urlType === 'amp_url'
    });
    return {
      hasSiteScanResults: scannableUrls.some(scannableUrl => Boolean(scannableUrl === null || scannableUrl === void 0 ? void 0 : scannableUrl.validation_errors)),
      pluginsWithAmpIncompatibility: slugs.plugins,
      stale: scannableUrls.some(scannableUrl => (scannableUrl === null || scannableUrl === void 0 ? void 0 : scannableUrl.stale) === true),
      themesWithAmpIncompatibility: slugs.themes
    };
  }, [scannableUrls, status, urlType]);
  /**
   * Preflight check.
   */

  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!validateNonce && status !== STATUS_SKIPPED) {
      dispatch({
        type: ACTION_SET_STATUS,
        status: STATUS_SKIPPED
      });
    }
  }, [status, validateNonce]);
  /**
   * This component sets state inside async functions. Use this ref to prevent
   * state updates after unmount.
   */

  const hasUnmounted = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => () => {
    hasUnmounted.current = true;
  }, []);
  const fetchScannableUrls = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {
    let args = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    dispatch({
      type: ACTION_SCANNABLE_URLS_REQUEST,
      forceStandardMode: args === null || args === void 0 ? void 0 : args.forceStandardMode
    });
  }, []);
  const startSiteScan = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {
    dispatch({
      type: ACTION_SCAN_INITIALIZE
    });
  }, []);
  const cancelSiteScan = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {
    dispatch({
      type: ACTION_SCAN_CANCEL
    });
  }, []);
  /**
   * Whenever options change, cancel the current scan (if in progress) and
   * refetch the scannable URLs.
   */

  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (resetOnOptionsChange && Object.keys(savedOptions).length > 0) {
      dispatch({
        type: ACTION_SCANNABLE_URLS_REQUEST
      });
    }
  }, [resetOnOptionsChange, savedOptions]);
  /**
   * Trigger site scan if the suppressed plugins list has changed and the
   * scanner is ready to start a scan.
   */

  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (status === STATUS_READY && Object.keys(savedOptions.suppressed_plugins || {}).length > 0) {
      dispatch({
        type: ACTION_SCAN_INITIALIZE
      });
    }
  }, [savedOptions === null || savedOptions === void 0 ? void 0 : savedOptions.suppressed_plugins, status]);
  /**
   * Once the site scan is complete, refetch the plugin suppression data so
   * that the suppressed table is updated with the latest validation errors.
   */

  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (status !== STATUS_REFETCHING_PLUGIN_SUPPRESSION) {
      return;
    }

    if (refetchPluginSuppressionOnScanComplete) {
      refetchPluginSuppression();
    }

    dispatch({
      type: ACTION_SET_STATUS,
      status: STATUS_COMPLETED
    });
  }, [refetchPluginSuppression, refetchPluginSuppressionOnScanComplete, status]);
  /**
   * Delay concurrent validation requests.
   */

  const [shouldDelayValidationRequest, setShouldDelayValidationRequest] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    let timeoutId;

    if (shouldDelayValidationRequest) {
      (async () => {
        await new Promise(resolve => {
          timeoutId = setTimeout(resolve, CONCURRENT_VALIDATION_REQUESTS_WAIT_MS);
        });

        if (true === hasUnmounted.current) {
          return;
        }

        setShouldDelayValidationRequest(false);
      })();
    }

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [shouldDelayValidationRequest]);
  /**
   * Fetch scannable URLs from the REST endpoint.
   */

  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    (async () => {
      if (status !== STATUS_REQUEST_SCANNABLE_URLS) {
        return;
      }

      dispatch({
        type: ACTION_SET_STATUS,
        status: STATUS_FETCHING_SCANNABLE_URLS
      });

      try {
        const fields = ['url', 'amp_url', 'type', 'label'];
        const response = await _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_2___default()({
          path: (0,_wordpress_url__WEBPACK_IMPORTED_MODULE_3__.addQueryArgs)(scannableUrlsRestPath, {
            _fields: fetchCachedValidationErrors ? [...fields, 'validation_errors', 'stale'] : fields,
            force_standard_mode: forceStandardMode ? 1 : undefined
          })
        });

        if (true === hasUnmounted.current) {
          return;
        }

        dispatch({
          type: ACTION_SCANNABLE_URLS_RECEIVE,
          scannableUrls: response
        });
      } catch (e) {
        if (true === hasUnmounted.current) {
          return;
        }

        setAsyncError(e);
      }
    })();
  }, [fetchCachedValidationErrors, forceStandardMode, scannableUrlsRestPath, setAsyncError, status]);
  /**
   * Scan site URLs sequentially.
   */

  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (![STATUS_IDLE, STATUS_IN_PROGRESS].includes(status)) {
      return;
    }
    /**
     * If there are no more URLs to scan and no URLs are scanned at the
     * moment, finish the site scan.
     */


    if (urlIndexesPendingScan.length === 0) {
      if (currentlyScannedUrlIndexes.length === 0) {
        dispatch({
          type: ACTION_SCAN_COMPLETE
        });
      }

      return;
    }

    if (shouldDelayValidationRequest || currentlyScannedUrlIndexes.length >= CONCURRENT_VALIDATION_REQUESTS_MAX_COUNT) {
      return;
    }

    setShouldDelayValidationRequest(true);
    const currentlyScannedUrlIndex = urlIndexesPendingScan[0];
    dispatch({
      type: ACTION_SCAN_URL,
      currentlyScannedUrlIndex
    });

    (async () => {
      const results = {};

      try {
        const scannableUrl = scannableUrls[currentlyScannedUrlIndex];
        const url = scannableUrl[urlType];
        const args = {
          amp_validate: {
            cache: true,
            cache_bust: Math.random(),
            force_standard_mode: forceStandardMode || undefined,
            nonce: validateNonce,
            omit_stylesheets: true
          }
        };
        const response = await fetch((0,_wordpress_url__WEBPACK_IMPORTED_MODULE_3__.addQueryArgs)(url, args));
        const data = await response.json();

        if (true === hasUnmounted.current) {
          return;
        }

        if (response.ok) {
          results.validatedUrlPost = data.validated_url_post;
          results.validationErrors = data.results.map(_ref2 => {
            let {
              error
            } = _ref2;
            return error;
          });
        } else {
          results.error = (data === null || data === void 0 ? void 0 : data.code) || true;
        }
      } catch (e) {
        if (true === hasUnmounted.current) {
          return;
        }

        results.error = true;
      }

      dispatch({
        type: ACTION_SCAN_RECEIVE_RESULTS,
        currentlyScannedUrlIndex,
        ...results
      });
      setShouldDelayValidationRequest(false);
    })();
  }, [currentlyScannedUrlIndexes.length, forceStandardMode, scannableUrls, shouldDelayValidationRequest, status, urlIndexesPendingScan, urlType, validateNonce]);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(SiteScan.Provider, {
    value: {
      cancelSiteScan,
      fetchScannableUrls,
      forceStandardMode,
      hasSiteScanResults,
      isBusy: [STATUS_IDLE, STATUS_IN_PROGRESS].includes(status),
      isCancelled: status === STATUS_CANCELLED,
      isCompleted: [STATUS_REFETCHING_PLUGIN_SUPPRESSION, STATUS_COMPLETED].includes(status),
      isFailed: status === STATUS_FAILED,
      isFetchingScannableUrls: [STATUS_REQUEST_SCANNABLE_URLS, STATUS_FETCHING_SCANNABLE_URLS].includes(status),
      isInitializing: !Boolean(status),
      isReady: status === STATUS_READY,
      isSiteScannable: scannableUrls.length > 0,
      isSkipped: status === STATUS_SKIPPED,
      pluginsWithAmpIncompatibility,
      previewPermalink,
      scannableUrls,
      scannedUrlsMaxIndex: ([STATUS_IN_PROGRESS, STATUS_IDLE].includes(status) ? Math.min(scannableUrls.length, ...urlIndexesPendingScan) : 0) - 1,
      stale,
      startSiteScan,
      themesWithAmpIncompatibility
    }
  }, children);
}
SiteScanContextProvider.propTypes = {
  children: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().any),
  fetchCachedValidationErrors: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  refetchPluginSuppressionOnScanComplete: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  resetOnOptionsChange: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  scannableUrlsRestPath: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  scanOnce: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  validateNonce: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string)
};

/***/ }),

/***/ "./assets/src/utils/use-async-error.js":
/*!*********************************************!*\
  !*** ./assets/src/utils/use-async-error.js ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useAsyncError": function() { return /* binding */ useAsyncError; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/**
 * WordPress dependencies
 */

/**
 * The error boundary component doesn't automatically catch errors in async functions.
 * This allows errors to be explicitly thrown.
 */

function useAsyncError() {
  const [error, setAsyncError] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)();
  const memoizedSetError = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useCallback)(e => {
    setAsyncError(() => {
      throw e;
    });
  }, []);
  return {
    error,
    setAsyncError: memoizedSetError
  };
}

/***/ }),

/***/ "./node_modules/classnames/index.js":
/*!******************************************!*\
  !*** ./node_modules/classnames/index.js ***!
  \******************************************/
/***/ (function(module, exports) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

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

	if ( true && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


/***/ }),

/***/ "./assets/src/components/error-screen/style.css":
/*!******************************************************!*\
  !*** ./assets/src/components/error-screen/style.css ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/src/components/loading/style.css":
/*!*************************************************!*\
  !*** ./assets/src/components/loading/style.css ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/src/admin/site-scan-notice/style.scss":
/*!******************************************************!*\
  !*** ./assets/src/admin/site-scan-notice/style.scss ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/src/components/amp-admin-notice/style.scss":
/*!***********************************************************!*\
  !*** ./assets/src/components/amp-admin-notice/style.scss ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./node_modules/object-assign/index.js":
/*!*********************************************!*\
  !*** ./node_modules/object-assign/index.js ***!
  \*********************************************/
/***/ (function(module) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),

/***/ "./node_modules/prop-types/checkPropTypes.js":
/*!***************************************************!*\
  !*** ./node_modules/prop-types/checkPropTypes.js ***!
  \***************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var printWarning = function() {};

if (true) {
  var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
  var loggedTypeFailures = {};
  var has = Function.call.bind(Object.prototype.hasOwnProperty);

  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (true) {
    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error(
              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.'
            );
            err.name = 'Invariant Violation';
            throw err;
          }
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        if (error && !(error instanceof Error)) {
          printWarning(
            (componentName || 'React class') + ': type specification of ' +
            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
            'You may have forgotten to pass an argument to the type checker ' +
            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
            'shape all require an argument).'
          );
        }
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          printWarning(
            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
          );
        }
      }
    }
  }
}

/**
 * Resets warning cache when testing.
 *
 * @private
 */
checkPropTypes.resetWarningCache = function() {
  if (true) {
    loggedTypeFailures = {};
  }
}

module.exports = checkPropTypes;


/***/ }),

/***/ "./node_modules/prop-types/factoryWithTypeCheckers.js":
/*!************************************************************!*\
  !*** ./node_modules/prop-types/factoryWithTypeCheckers.js ***!
  \************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");
var assign = __webpack_require__(/*! object-assign */ "./node_modules/object-assign/index.js");

var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
var checkPropTypes = __webpack_require__(/*! ./checkPropTypes */ "./node_modules/prop-types/checkPropTypes.js");

var has = Function.call.bind(Object.prototype.hasOwnProperty);
var printWarning = function() {};

if (true) {
  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

module.exports = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    elementType: createElementTypeTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (true) {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
          err.name = 'Invariant Violation';
          throw err;
        } else if ( true && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            printWarning(
              'You are manually calling a React.PropTypes validation ' +
              'function for the `' + propFullName + '` prop on `' + componentName  + '`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!ReactIs.isValidElementType(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      if (true) {
        if (arguments.length > 1) {
          printWarning(
            'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
            'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
          );
        } else {
          printWarning('Invalid argument supplied to oneOf, expected an array.');
        }
      }
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
        var type = getPreciseType(value);
        if (type === 'symbol') {
          return String(value);
        }
        return value;
      });
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (has(propValue, key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
       true ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : 0;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning(
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
        );
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // falsy value can't be a Symbol
    if (!propValue) {
      return false;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),

/***/ "./node_modules/prop-types/index.js":
/*!******************************************!*\
  !*** ./node_modules/prop-types/index.js ***!
  \******************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (true) {
  var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(/*! ./factoryWithTypeCheckers */ "./node_modules/prop-types/factoryWithTypeCheckers.js")(ReactIs.isElement, throwOnDirectAccess);
} else {}


/***/ }),

/***/ "./node_modules/prop-types/lib/ReactPropTypesSecret.js":
/*!*************************************************************!*\
  !*** ./node_modules/prop-types/lib/ReactPropTypesSecret.js ***!
  \*************************************************************/
/***/ (function(module) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),

/***/ "./node_modules/react-is/cjs/react-is.development.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-is/cjs/react-is.development.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
// (unstable) APIs that have been removed. Can we remove the symbols?

var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
}

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;

    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;

          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_LAZY_TYPE:
              case REACT_MEMO_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;

              default:
                return $$typeof;
            }

        }

      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
} // AsyncMode is deprecated along with isAsyncMode

var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;
var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }

  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
exports.isValidElementType = isValidElementType;
exports.typeOf = typeOf;
  })();
}


/***/ }),

/***/ "./node_modules/react-is/index.js":
/*!****************************************!*\
  !*** ./node_modules/react-is/index.js ***!
  \****************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "amp-site-scan-notice":
/*!************************************!*\
  !*** external "ampSiteScanNotice" ***!
  \************************************/
/***/ (function(module) {

"use strict";
module.exports = ampSiteScanNotice;

/***/ }),

/***/ "@wordpress/api-fetch":
/*!**********************************!*\
  !*** external ["wp","apiFetch"] ***!
  \**********************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["apiFetch"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/compose":
/*!*********************************!*\
  !*** external ["wp","compose"] ***!
  \*********************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["compose"];

/***/ }),

/***/ "@wordpress/dom-ready":
/*!**********************************!*\
  !*** external ["wp","domReady"] ***!
  \**********************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["domReady"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "@wordpress/url":
/*!*****************************!*\
  !*** external ["wp","url"] ***!
  \*****************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["url"];

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/defineProperty.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _defineProperty; }
/* harmony export */ });
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/extends.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/extends.js ***!
  \************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _extends; }
/* harmony export */ });
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

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	!function() {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
!function() {
"use strict";
/*!****************************************************!*\
  !*** ./assets/src/admin/site-scan-notice/index.js ***!
  \****************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var amp_site_scan_notice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! amp-site-scan-notice */ "amp-site-scan-notice");
/* harmony import */ var amp_site_scan_notice__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(amp_site_scan_notice__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_dom_ready__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/dom-ready */ "@wordpress/dom-ready");
/* harmony import */ var _wordpress_dom_ready__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_dom_ready__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./style.scss */ "./assets/src/admin/site-scan-notice/style.scss");
/* harmony import */ var _components_error_context_provider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/error-context-provider */ "./assets/src/components/error-context-provider/index.js");
/* harmony import */ var _components_options_context_provider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/options-context-provider */ "./assets/src/components/options-context-provider/index.js");
/* harmony import */ var _components_plugins_context_provider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/plugins-context-provider */ "./assets/src/components/plugins-context-provider/index.js");
/* harmony import */ var _components_site_scan_context_provider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/site-scan-context-provider */ "./assets/src/components/site-scan-context-provider/index.js");
/* harmony import */ var _components_error_screen__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/error-screen */ "./assets/src/components/error-screen/index.js");
/* harmony import */ var _components_error_boundary__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/error-boundary */ "./assets/src/components/error-boundary/index.js");
/* harmony import */ var _notice__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./notice */ "./assets/src/admin/site-scan-notice/notice.js");


/**
 * External dependencies
 */

 // From WP inline script.

/**
 * WordPress dependencies
 */




/**
 * Internal dependencies
 */









let errorHandler;
/**
 * Context providers for the application.
 *
 * @param {Object} props          Component props.
 * @param {any}    props.children Component children.
 */

function Providers(_ref) {
  let {
    children
  } = _ref;
  __webpack_require__.g.removeEventListener('error', errorHandler);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_error_context_provider__WEBPACK_IMPORTED_MODULE_6__.ErrorContextProvider, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_error_boundary__WEBPACK_IMPORTED_MODULE_11__.ErrorBoundary, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('The AMP Site Scanner has experienced an error.', 'amp')
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_options_context_provider__WEBPACK_IMPORTED_MODULE_7__.OptionsContextProvider, {
    hasErrorBoundary: true,
    optionsRestPath: amp_site_scan_notice__WEBPACK_IMPORTED_MODULE_2__.OPTIONS_REST_PATH,
    populateDefaultValues: false
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_plugins_context_provider__WEBPACK_IMPORTED_MODULE_8__.PluginsContextProvider, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_site_scan_context_provider__WEBPACK_IMPORTED_MODULE_9__.SiteScanContextProvider, {
    scannableUrlsRestPath: amp_site_scan_notice__WEBPACK_IMPORTED_MODULE_2__.SCANNABLE_URLS_REST_PATH,
    validateNonce: amp_site_scan_notice__WEBPACK_IMPORTED_MODULE_2__.VALIDATE_NONCE
  }, children)))));
}

Providers.propTypes = {
  children: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().any)
};
_wordpress_dom_ready__WEBPACK_IMPORTED_MODULE_3___default()(() => {
  const root = document.getElementById(amp_site_scan_notice__WEBPACK_IMPORTED_MODULE_2__.APP_ROOT_ID);

  if (!root) {
    return;
  }

  errorHandler = event => {
    // Handle only own errors.
    if (event.filename && /amp-site-scan-notice(\.min)?\.js/.test(event.filename)) {
      (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.render)((0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_error_screen__WEBPACK_IMPORTED_MODULE_10__.ErrorScreen, {
        error: event.error
      }), root);
    }
  };

  __webpack_require__.g.addEventListener('error', errorHandler);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.render)((0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Providers, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_notice__WEBPACK_IMPORTED_MODULE_12__.SiteScanNotice, null)), root);
});
}();
/******/ })()
;
//# sourceMappingURL=amp-site-scan-notice.js.map