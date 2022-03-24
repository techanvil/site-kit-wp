/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./assets/src/block-validation/plugins sync recursive .*\\.js$":
/*!***********************************************************!*\
  !*** ./assets/src/block-validation/plugins/ sync .*\.js$ ***!
  \***********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var map = {
	"./amp-block-validation.js": "./assets/src/block-validation/plugins/amp-block-validation.js",
	"./amp-document-setting-panel.js": "./assets/src/block-validation/plugins/amp-document-setting-panel.js",
	"./amp-pre-publish-panel.js": "./assets/src/block-validation/plugins/amp-pre-publish-panel.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./assets/src/block-validation/plugins sync recursive .*\\.js$";

/***/ }),

/***/ "./assets/src/block-validation/components/amp-document-status/index.js":
/*!*****************************************************************************!*\
  !*** ./assets/src/block-validation/components/amp-document-status/index.js ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ AMPDocumentStatusNotification; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../store */ "./assets/src/block-validation/store/index.js");
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../icon */ "./assets/src/block-validation/components/icon/index.js");
/* harmony import */ var _sidebar_notification__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../sidebar-notification */ "./assets/src/block-validation/components/sidebar-notification/index.js");
/* harmony import */ var _hooks_use_amp_document_toggle__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../hooks/use-amp-document-toggle */ "./assets/src/block-validation/hooks/use-amp-document-toggle.js");
/* harmony import */ var _hooks_use_errors_fetching_state_changes__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../hooks/use-errors-fetching-state-changes */ "./assets/src/block-validation/hooks/use-errors-fetching-state-changes.js");
/* harmony import */ var _plugins_amp_block_validation__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../plugins/amp-block-validation */ "./assets/src/block-validation/plugins/amp-block-validation.js");
/* harmony import */ var _amp_toggle__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../amp-toggle */ "./assets/src/block-validation/components/amp-toggle/index.js");



/**
 * WordPress dependencies
 */



/**
 * Internal dependencies
 */

var AMPValidationErrorsKeptIcon = function AMPValidationErrorsKeptIcon(props) {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", props, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", {
    clipPath: "url(#clip-amp-validation-errors-kept)",
    fill: "#BB522E"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M10.762 2.541c4.4 0 8 3.6 8 8 0 1.6-.5 3-1.2 4.2l1.4 1.5c1.1-1.6 1.8-3.6 1.8-5.7 0-5.5-4.5-10-10-10-2 0-3.9.6-5.5 1.7l1.4 1.5c1.2-.8 2.6-1.2 4.1-1.2ZM.762 10.541c0 5.5 4.5 10 10 10 2.7 0 5.1-1.1 6.9-2.8l-14-14.2c-1.8 1.8-2.9 4.3-2.9 7Zm10 8c-4.4 0-8-3.6-8-8 0-1.5.4-2.8 1.1-4l10.9 10.9c-1.2.7-2.5 1.1-4 1.1Z"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M14.262 9.74c.1 0 .1-.1.1-.2 0-.2-.2-.4-.4-.4h-2l1.6 1.6.7-1ZM12.461 4.541h-.8l-1.6 2.6 1.7 1.7.7-4.3ZM7.462 11.541s-.1.1-.1.2c0 .2.2.4.4.4h2.3l-.8 4.5h.7l2.6-4.1-3.5-3.6-1.6 2.6Z"
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("defs", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("clipPath", {
    id: "clip-amp-validation-errors-kept"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    fill: "#fff",
    transform: "translate(.762 .541)",
    d: "M0 0h20v20H0z"
  }))));
};

AMPValidationErrorsKeptIcon.defaultProps = {
  width: "21",
  height: "21",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};

var BellIcon = function BellIcon(props) {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", props, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    fill: "#707070",
    d: "M8 20c1.1 0 2-.9 2-2H6c0 1.1.9 2 2 2zm6-6V9c0-3.07-1.63-5.64-4.5-6.32V2C9.5 1.17 8.83.5 8 .5S6.5 1.17 6.5 2v.68C3.64 3.36 2 5.92 2 9v5l-2 2v1h16v-1l-2-2zm-2 1H4V9c0-2.48 1.51-4.5 4-4.5s4 2.02 4 4.5v6z"
  }));
};

BellIcon.defaultProps = {
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 16 20"
};







/**
 * AMP document status notification component.
 */

function AMPDocumentStatusNotification() {
  const {
    isAMPEnabled
  } = (0,_hooks_use_amp_document_toggle__WEBPACK_IMPORTED_MODULE_8__.useAMPDocumentToggle)();
  const {
    isFetchingErrors,
    fetchingErrorsMessage
  } = (0,_hooks_use_errors_fetching_state_changes__WEBPACK_IMPORTED_MODULE_9__.useErrorsFetchingStateChanges)();
  const {
    openGeneralSidebar,
    closePublishSidebar
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_4__.useDispatch)('core/edit-post');
  const {
    isPostDirty,
    maybeIsPostDirty,
    keptMarkupValidationErrorCount,
    reviewedValidationErrorCount,
    unreviewedValidationErrorCount
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_4__.useSelect)(select => ({
    isPostDirty: select(_store__WEBPACK_IMPORTED_MODULE_5__.BLOCK_VALIDATION_STORE_KEY).getIsPostDirty(),
    maybeIsPostDirty: select(_store__WEBPACK_IMPORTED_MODULE_5__.BLOCK_VALIDATION_STORE_KEY).getMaybeIsPostDirty(),
    keptMarkupValidationErrorCount: select(_store__WEBPACK_IMPORTED_MODULE_5__.BLOCK_VALIDATION_STORE_KEY).getKeptMarkupValidationErrors().length,
    reviewedValidationErrorCount: select(_store__WEBPACK_IMPORTED_MODULE_5__.BLOCK_VALIDATION_STORE_KEY).getReviewedValidationErrors().length,
    unreviewedValidationErrorCount: select(_store__WEBPACK_IMPORTED_MODULE_5__.BLOCK_VALIDATION_STORE_KEY).getUnreviewedValidationErrors().length
  }), []);

  if (!isAMPEnabled) {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_amp_toggle__WEBPACK_IMPORTED_MODULE_11__["default"], null));
  }

  if (isFetchingErrors) {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_amp_toggle__WEBPACK_IMPORTED_MODULE_11__["default"], null)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_sidebar_notification__WEBPACK_IMPORTED_MODULE_7__.SidebarNotification, {
      message: fetchingErrorsMessage,
      isLoading: true,
      isSmall: true
    }));
  }

  const openBlockValidationSidebar = () => {
    closePublishSidebar();
    openGeneralSidebar(`${_plugins_amp_block_validation__WEBPACK_IMPORTED_MODULE_10__.PLUGIN_NAME}/${_plugins_amp_block_validation__WEBPACK_IMPORTED_MODULE_10__.SIDEBAR_NAME}`);
  };

  if (isPostDirty || maybeIsPostDirty) {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_amp_toggle__WEBPACK_IMPORTED_MODULE_11__["default"], null)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_sidebar_notification__WEBPACK_IMPORTED_MODULE_7__.SidebarNotification, {
      icon: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(BellIcon, null),
      message: maybeIsPostDirty ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Content may have changed. Trigger validation in the AMP Validation sidebar.', 'amp') : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Content has changed. Trigger validation in the AMP Validation sidebar.', 'amp'),
      isSmall: true
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
      onClick: openBlockValidationSidebar,
      isSecondary: true,
      isSmall: true
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Open AMP Validation', 'amp'))));
  }

  if (keptMarkupValidationErrorCount > 0) {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_amp_toggle__WEBPACK_IMPORTED_MODULE_11__["default"], null)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_sidebar_notification__WEBPACK_IMPORTED_MODULE_7__.SidebarNotification, {
      icon: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(AMPValidationErrorsKeptIcon, null),
      message: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.sprintf)(
      /* translators: %d is count of validation errors whose invalid markup is kept */
      (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__._n)('AMP is blocked due to %d validation issue marked as kept.', 'AMP is blocked due to %d validation issues marked as kept.', keptMarkupValidationErrorCount, 'amp'), keptMarkupValidationErrorCount),
      isSmall: true
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
      onClick: openBlockValidationSidebar,
      isSecondary: true,
      isSmall: true
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__._n)('Review issue', 'Review issues', keptMarkupValidationErrorCount, 'amp'))));
  }

  if (unreviewedValidationErrorCount > 0) {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_amp_toggle__WEBPACK_IMPORTED_MODULE_11__["default"], null)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_sidebar_notification__WEBPACK_IMPORTED_MODULE_7__.SidebarNotification, {
      icon: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_icon__WEBPACK_IMPORTED_MODULE_6__.StatusIcon, {
        broken: true
      }),
      message: // @todo De-duplicate with what is in AMPValidationStatusNotification.
      (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.sprintf)(
      /* translators: %d is count of unreviewed validation error */
      (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__._n)('AMP is valid, but %d issue needs review.', 'AMP is valid, but %d issues need review.', unreviewedValidationErrorCount, 'amp'), unreviewedValidationErrorCount),
      isSmall: true
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
      onClick: openBlockValidationSidebar,
      isSecondary: true,
      isSmall: true
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__._n)('Review issue', 'Review issues', unreviewedValidationErrorCount, 'amp'))));
  }

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_amp_toggle__WEBPACK_IMPORTED_MODULE_11__["default"], null)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_sidebar_notification__WEBPACK_IMPORTED_MODULE_7__.SidebarNotification, {
    icon: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_icon__WEBPACK_IMPORTED_MODULE_6__.StatusIcon, null),
    message: // @todo De-duplicate with what is in AMPValidationStatusNotification.
    reviewedValidationErrorCount > 0 ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.sprintf)(
    /* translators: %d is count of unreviewed validation error */
    (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__._n)('AMP is valid. %d issue was reviewed.', 'AMP is valid. %d issues were reviewed.', reviewedValidationErrorCount, 'amp'), reviewedValidationErrorCount) : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('No AMP validation issues detected.', 'amp'),
    isSmall: true
  }), reviewedValidationErrorCount > 0 && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
    onClick: openBlockValidationSidebar,
    isSecondary: true,
    isSmall: true
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Open AMP Validation', 'amp'))));
}

/***/ }),

/***/ "./assets/src/block-validation/components/amp-toggle/index.js":
/*!********************************************************************!*\
  !*** ./assets/src/block-validation/components/amp-toggle/index.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ AMPToggle; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _hooks_use_amp_document_toggle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../hooks/use-amp-document-toggle */ "./assets/src/block-validation/hooks/use-amp-document-toggle.js");


/**
 * WordPress dependencies
 */



/**
 * Internal dependencies
 */


/**
 * AMP toggle component.
 */

function AMPToggle() {
  const {
    isAMPEnabled,
    toggleAMP
  } = (0,_hooks_use_amp_document_toggle__WEBPACK_IMPORTED_MODULE_3__.useAMPDocumentToggle)();
  /**
   * Use a random ID for the HTML input since the AMP toggle may be used
   * more than once on the same page.
   */

  const htmlId = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useRef)(`amp-toggle-${Math.random().toString(32).substr(-4)}`);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    htmlFor: htmlId.current
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Enable AMP', 'amp')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.FormToggle, {
    checked: isAMPEnabled,
    onChange: toggleAMP,
    id: htmlId.current
  }));
}

/***/ }),

/***/ "./assets/src/block-validation/components/amp-validation-status/index.js":
/*!*******************************************************************************!*\
  !*** ./assets/src/block-validation/components/amp-validation-status/index.js ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ AMPValidationStatus; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _sidebar_notification__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../sidebar-notification */ "./assets/src/block-validation/components/sidebar-notification/index.js");
/* harmony import */ var _revalidate_notification__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./revalidate-notification */ "./assets/src/block-validation/components/amp-validation-status/revalidate-notification.js");
/* harmony import */ var _status_notification__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./status-notification */ "./assets/src/block-validation/components/amp-validation-status/status-notification.js");


/**
 * Internal dependencies
 */



function AMPValidationStatus() {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_sidebar_notification__WEBPACK_IMPORTED_MODULE_1__.SidebarNotificationsContainer, {
    isShady: true
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_revalidate_notification__WEBPACK_IMPORTED_MODULE_2__["default"], null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_status_notification__WEBPACK_IMPORTED_MODULE_3__["default"], null));
}

/***/ }),

/***/ "./assets/src/block-validation/components/amp-validation-status/revalidate-notification.js":
/*!*************************************************************************************************!*\
  !*** ./assets/src/block-validation/components/amp-validation-status/revalidate-notification.js ***!
  \*************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ AMPRevalidateNotification; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../store */ "./assets/src/block-validation/store/index.js");
/* harmony import */ var _sidebar_notification__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../sidebar-notification */ "./assets/src/block-validation/components/sidebar-notification/index.js");
/* harmony import */ var _hooks_use_errors_fetching_state_changes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../hooks/use-errors-fetching-state-changes */ "./assets/src/block-validation/hooks/use-errors-fetching-state-changes.js");



/**
 * WordPress dependencies
 */



/**
 * Internal dependencies
 */



var BellIcon = function BellIcon(props) {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", props, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    fill: "#707070",
    d: "M8 20c1.1 0 2-.9 2-2H6c0 1.1.9 2 2 2zm6-6V9c0-3.07-1.63-5.64-4.5-6.32V2C9.5 1.17 8.83.5 8 .5S6.5 1.17 6.5 2v.68C3.64 3.36 2 5.92 2 9v5l-2 2v1h16v-1l-2-2zm-2 1H4V9c0-2.48 1.51-4.5 4-4.5s4 2.02 4 4.5v6z"
  }));
};

BellIcon.defaultProps = {
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 16 20"
};


/**
 * AMP re-validate status message.
 */

function AMPRevalidateNotification() {
  const {
    autosave,
    savePost
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_4__.useDispatch)('core/editor');
  const {
    isFetchingErrors,
    fetchingErrorsMessage
  } = (0,_hooks_use_errors_fetching_state_changes__WEBPACK_IMPORTED_MODULE_7__.useErrorsFetchingStateChanges)();
  const {
    isDraft,
    isPostDirty,
    maybeIsPostDirty
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_4__.useSelect)(select => ({
    isDraft: ['draft', 'auto-draft'].indexOf(select('core/editor').getEditedPostAttribute('status')) !== -1,
    isPostDirty: select(_store__WEBPACK_IMPORTED_MODULE_5__.BLOCK_VALIDATION_STORE_KEY).getIsPostDirty(),
    maybeIsPostDirty: select(_store__WEBPACK_IMPORTED_MODULE_5__.BLOCK_VALIDATION_STORE_KEY).getMaybeIsPostDirty()
  }), []);

  if (isFetchingErrors) {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_sidebar_notification__WEBPACK_IMPORTED_MODULE_6__.SidebarNotification, {
      message: fetchingErrorsMessage,
      isLoading: true
    });
  }

  if (!isPostDirty && !maybeIsPostDirty) {
    return null;
  }

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_sidebar_notification__WEBPACK_IMPORTED_MODULE_6__.SidebarNotification, {
    icon: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(BellIcon, null),
    message: maybeIsPostDirty ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Content may have changed.', 'amp') : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Content has changed.', 'amp'),
    action: isDraft ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
      isLink: true,
      onClick: () => savePost({
        isPreview: true
      })
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Save draft and validate', 'amp')) : (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
      isLink: true,
      onClick: () => autosave({
        isPreview: true
      })
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Re-validate', 'amp'))
  });
}

/***/ }),

/***/ "./assets/src/block-validation/components/amp-validation-status/status-notification.js":
/*!*********************************************************************************************!*\
  !*** ./assets/src/block-validation/components/amp-validation-status/status-notification.js ***!
  \*********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ AMPValidationStatusNotification; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../store */ "./assets/src/block-validation/store/index.js");
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../icon */ "./assets/src/block-validation/components/icon/index.js");
/* harmony import */ var _sidebar_notification__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../sidebar-notification */ "./assets/src/block-validation/components/sidebar-notification/index.js");
/* harmony import */ var _hooks_use_errors_fetching_state_changes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../hooks/use-errors-fetching-state-changes */ "./assets/src/block-validation/hooks/use-errors-fetching-state-changes.js");



/**
 * WordPress dependencies
 */



/**
 * Internal dependencies
 */

var AMPValidationErrorsKeptIcon = function AMPValidationErrorsKeptIcon(props) {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", props, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", {
    clipPath: "url(#clip-amp-validation-errors-kept)",
    fill: "#BB522E"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M10.762 2.541c4.4 0 8 3.6 8 8 0 1.6-.5 3-1.2 4.2l1.4 1.5c1.1-1.6 1.8-3.6 1.8-5.7 0-5.5-4.5-10-10-10-2 0-3.9.6-5.5 1.7l1.4 1.5c1.2-.8 2.6-1.2 4.1-1.2ZM.762 10.541c0 5.5 4.5 10 10 10 2.7 0 5.1-1.1 6.9-2.8l-14-14.2c-1.8 1.8-2.9 4.3-2.9 7Zm10 8c-4.4 0-8-3.6-8-8 0-1.5.4-2.8 1.1-4l10.9 10.9c-1.2.7-2.5 1.1-4 1.1Z"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M14.262 9.74c.1 0 .1-.1.1-.2 0-.2-.2-.4-.4-.4h-2l1.6 1.6.7-1ZM12.461 4.541h-.8l-1.6 2.6 1.7 1.7.7-4.3ZM7.462 11.541s-.1.1-.1.2c0 .2.2.4.4.4h2.3l-.8 4.5h.7l2.6-4.1-3.5-3.6-1.6 2.6Z"
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("defs", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("clipPath", {
    id: "clip-amp-validation-errors-kept"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    fill: "#fff",
    transform: "translate(.762 .541)",
    d: "M0 0h20v20H0z"
  }))));
};

AMPValidationErrorsKeptIcon.defaultProps = {
  width: "21",
  height: "21",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};




/**
 * AMP validation status notification component.
 */

function AMPValidationStatusNotification() {
  const {
    autosave,
    savePost
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_4__.useDispatch)('core/editor');
  const {
    isFetchingErrors
  } = (0,_hooks_use_errors_fetching_state_changes__WEBPACK_IMPORTED_MODULE_8__.useErrorsFetchingStateChanges)();
  const {
    fetchingErrorsRequestErrorMessage,
    isDraft,
    isEditedPostNew,
    keptMarkupValidationErrorCount,
    reviewLink,
    supportLink,
    unreviewedValidationErrorCount,
    validationErrorCount
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_4__.useSelect)(select => ({
    fetchingErrorsRequestErrorMessage: select(_store__WEBPACK_IMPORTED_MODULE_5__.BLOCK_VALIDATION_STORE_KEY).getFetchingErrorsRequestErrorMessage(),
    isDraft: ['draft', 'auto-draft'].indexOf(select('core/editor').getEditedPostAttribute('status')) !== -1,
    isEditedPostNew: select('core/editor').isEditedPostNew(),
    keptMarkupValidationErrorCount: select(_store__WEBPACK_IMPORTED_MODULE_5__.BLOCK_VALIDATION_STORE_KEY).getKeptMarkupValidationErrors().length,
    reviewLink: select(_store__WEBPACK_IMPORTED_MODULE_5__.BLOCK_VALIDATION_STORE_KEY).getReviewLink(),
    supportLink: select(_store__WEBPACK_IMPORTED_MODULE_5__.BLOCK_VALIDATION_STORE_KEY).getSupportLink(),
    unreviewedValidationErrorCount: select(_store__WEBPACK_IMPORTED_MODULE_5__.BLOCK_VALIDATION_STORE_KEY).getUnreviewedValidationErrors().length,
    validationErrorCount: select(_store__WEBPACK_IMPORTED_MODULE_5__.BLOCK_VALIDATION_STORE_KEY).getValidationErrors().length
  }), []);

  if (isFetchingErrors) {
    return null;
  }

  if (isEditedPostNew) {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_sidebar_notification__WEBPACK_IMPORTED_MODULE_7__.SidebarNotification, {
      icon: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_icon__WEBPACK_IMPORTED_MODULE_6__.StatusIcon, null),
      message: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Validation will be checked upon saving.', 'amp')
    });
  }

  const sidebarNotificationAction = reviewLink && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ExternalLink, {
    href: reviewLink
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('View technical details', 'amp')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("br", null), supportLink && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ExternalLink, {
    href: supportLink
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Get Support', 'amp')));

  if (fetchingErrorsRequestErrorMessage) {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_sidebar_notification__WEBPACK_IMPORTED_MODULE_7__.SidebarNotification, {
      icon: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(AMPValidationErrorsKeptIcon, null),
      message: fetchingErrorsRequestErrorMessage,
      action: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
        isLink: true,
        onClick: isDraft ? () => savePost({
          isPreview: true
        }) : () => autosave({
          isPreview: true
        })
      }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Try again', 'amp'))
    });
  }

  if (keptMarkupValidationErrorCount > 0) {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_sidebar_notification__WEBPACK_IMPORTED_MODULE_7__.SidebarNotification, {
      icon: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(AMPValidationErrorsKeptIcon, null),
      message: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.sprintf)(
      /* translators: %d is count of validation errors whose invalid markup is kept */
      (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__._n)('AMP is disabled due to invalid markup being kept for %d issue.', 'AMP is disabled due to invalid markup being kept for %d issues.', keptMarkupValidationErrorCount, 'amp'), keptMarkupValidationErrorCount),
      action: sidebarNotificationAction
    });
  }

  if (unreviewedValidationErrorCount > 0) {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_sidebar_notification__WEBPACK_IMPORTED_MODULE_7__.SidebarNotification, {
      icon: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_icon__WEBPACK_IMPORTED_MODULE_6__.StatusIcon, {
        broken: true
      }),
      message: // @todo De-duplicate with what is in AMPDocumentStatusNotification.
      (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.sprintf)(
      /* translators: %d is count of unreviewed validation error */
      (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__._n)('AMP is valid, but %d issue needs review.', 'AMP is valid, but %d issues need review.', unreviewedValidationErrorCount, 'amp'), unreviewedValidationErrorCount),
      action: sidebarNotificationAction
    });
  }

  if (validationErrorCount > 0) {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_sidebar_notification__WEBPACK_IMPORTED_MODULE_7__.SidebarNotification, {
      icon: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_icon__WEBPACK_IMPORTED_MODULE_6__.StatusIcon, null),
      message: // @todo De-duplicate with what is in AMPDocumentStatusNotification.
      (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.sprintf)(
      /* translators: %d is count of unreviewed validation error */
      (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__._n)('AMP is valid. %d issue was reviewed.', 'AMP is valid. %d issues were reviewed.', validationErrorCount, 'amp'), validationErrorCount),
      action: sidebarNotificationAction
    });
  } // @todo De-duplicate with what is in AMPDocumentStatusNotification.


  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_sidebar_notification__WEBPACK_IMPORTED_MODULE_7__.SidebarNotification, {
    icon: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_icon__WEBPACK_IMPORTED_MODULE_6__.StatusIcon, null),
    message: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('No AMP validation issues detected.', 'amp')
  });
}

/***/ }),

/***/ "./assets/src/block-validation/components/error/error-content.js":
/*!***********************************************************************!*\
  !*** ./assets/src/block-validation/components/error/error-content.js ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ErrorContent": function() { return /* binding */ ErrorContent; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var amp_block_validation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! amp-block-validation */ "amp-block-validation");
/* harmony import */ var amp_block_validation__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(amp_block_validation__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _get_error_source_title__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./get-error-source-title */ "./assets/src/block-validation/components/error/get-error-source-title.js");



/**
 * External dependencies
 */


/**
 * WordPress dependencies
 */



/**
 * Internal dependencies
 */

var AMPAlert = function AMPAlert(props) {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", props, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "m10.075 4.055 6.275 10.842H3.8l6.275-10.842Zm0-3.325L.908 16.564h18.333L10.075.73Zm.833 11.667H9.242v1.667h1.666v-1.667Zm0-5H9.242v3.333h1.666V7.397Z",
    fill: "#BE2C23"
  }));
};

AMPAlert.defaultProps = {
  width: "20",
  height: "17",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};

var AMPDelete = function AMPDelete(props) {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", props, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M12.258 9.043 10.49 10.81 8.716 9.043l-1.175 1.175 1.775 1.767-1.767 1.767 1.175 1.175 1.767-1.767 1.767 1.767 1.175-1.175-1.767-1.767 1.767-1.767-1.175-1.175Zm1.15-5.391-.834-.834H8.408l-.834.834H4.658v1.666h11.666V3.652h-2.916Zm-7.917 12.5c0 .916.75 1.666 1.667 1.666h6.666c.917 0 1.667-.75 1.667-1.666v-10h-10v10Zm1.667-8.334h6.666v8.334H7.158V7.818Z",
    fill: "#479696"
  }));
};

AMPDelete.defaultProps = {
  width: "21",
  height: "21",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};

/**
 * Display error source title.
 *
 * Error title not directly related to the post content are determined by the `getErrorSourceTitle` helper function.
 * For errors that are generated by blocks in the post content (`clientId` is defined), use the `blockSources` object.
 * The exception is `core/shortcode` block that may be mistakenly attributed to WordPress core while in fact it is
 * generated by a plugin or theme.
 *
 * @param {Object}   props
 * @param {string}   props.clientId      Error client ID.
 * @param {string}   props.blockTypeName Block type name.
 * @param {Object[]} props.sources       List of source objects from the PHP backtrace.
 */

function ErrorSource(_ref) {
  let {
    clientId,
    blockTypeName,
    sources
  } = _ref;
  let source;
  const blockSource = amp_block_validation__WEBPACK_IMPORTED_MODULE_3__.blockSources === null || amp_block_validation__WEBPACK_IMPORTED_MODULE_3__.blockSources === void 0 ? void 0 : amp_block_validation__WEBPACK_IMPORTED_MODULE_3__.blockSources[blockTypeName];

  if (clientId && 'core/shortcode' !== blockTypeName) {
    switch (blockSource === null || blockSource === void 0 ? void 0 : blockSource.type) {
      case 'plugin':
        source = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.sprintf)(
        /* translators: %s: plugin name. */
        (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)(`%s (plugin)`, 'amp'), blockSource.title);
        break;

      case 'mu-plugin':
        source = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.sprintf)(
        /* translators: %s: plugin name. */
        (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)(`%s (must-use plugin)`, 'amp'), blockSource.title);
        break;

      case 'theme':
        source = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.sprintf)(
        /* translators: %s: theme name. */
        (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)(`%s (theme)`, 'amp'), blockSource.title);
        break;

      default:
        source = blockSource === null || blockSource === void 0 ? void 0 : blockSource.title;
        break;
    }
  }

  if (!source) {
    source = (0,_get_error_source_title__WEBPACK_IMPORTED_MODULE_6__.getErrorSourceTitle)(sources);
  }

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("dt", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Source', 'amp')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("dd", null, source));
}

ErrorSource.propTypes = {
  blockTypeName: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
  clientId: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
  sources: prop_types__WEBPACK_IMPORTED_MODULE_2___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_2___default().object)).isRequired
};
/**
 * @param {Object} props
 * @param {number} props.status Error status.
 */

function MarkupStatus(_ref2) {
  let {
    status
  } = _ref2;
  let keptRemoved;

  if ([amp_block_validation__WEBPACK_IMPORTED_MODULE_3__.VALIDATION_ERROR_NEW_ACCEPTED_STATUS, amp_block_validation__WEBPACK_IMPORTED_MODULE_3__.VALIDATION_ERROR_ACK_ACCEPTED_STATUS].includes(status)) {
    keptRemoved = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "amp-error__kept-removed amp-error__kept-removed--removed"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Removed', 'amp'), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(AMPDelete, null)));
  } else {
    keptRemoved = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "amp-error__kept-removed amp-error__kept-removed--kept"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Kept', 'amp'), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(AMPAlert, null)));
  }

  let reviewed;

  if ([amp_block_validation__WEBPACK_IMPORTED_MODULE_3__.VALIDATION_ERROR_ACK_ACCEPTED_STATUS, amp_block_validation__WEBPACK_IMPORTED_MODULE_3__.VALIDATION_ERROR_ACK_REJECTED_STATUS].includes(status)) {
    reviewed = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Yes', 'amp');
  } else {
    reviewed = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('No', 'amp');
  }

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("dt", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Markup status', 'amp')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("dd", null, keptRemoved), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("dt", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Reviewed', 'amp')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("dd", null, reviewed));
}

MarkupStatus.propTypes = {
  status: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().number.isRequired)
};
/**
 * @param {Object} props
 * @param {Object} props.blockTypeIcon  Block type icon.
 * @param {string} props.blockTypeTitle Title of the block type.
 */

function BlockType(_ref3) {
  let {
    blockTypeIcon,
    blockTypeTitle
  } = _ref3;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("dt", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Block type', 'amp')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("dd", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "amp-error__block-type-description"
  }, blockTypeTitle || (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('unknown', 'amp'), blockTypeIcon && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "amp-error__block-type-icon"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__.BlockIcon, {
    icon: blockTypeIcon
  })))));
}

BlockType.propTypes = {
  blockTypeIcon: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().object),
  blockTypeTitle: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string)
};
/**
 * Content inside an error panel.
 *
 * @param {Object}   props               Component props.
 * @param {Object}   props.blockType     Block type details.
 * @param {boolean}  props.isExternal    Flag indicating if the error comes from outside of post content.
 * @param {boolean}  props.removed       Flag indicating if the block has been removed.
 * @param {string}   props.clientId      Block client ID
 * @param {number}   props.status        Number indicating the error status.
 * @param {Object}   props.error         Error details.
 * @param {Object[]} props.error.sources Sources from the PHP backtrace for the error.
 */

function ErrorContent(_ref4) {
  let {
    blockType,
    clientId,
    error: {
      sources
    },
    isExternal,
    removed,
    status
  } = _ref4;
  const blockTypeTitle = blockType === null || blockType === void 0 ? void 0 : blockType.title;
  const blockTypeName = blockType === null || blockType === void 0 ? void 0 : blockType.name;
  const blockTypeIcon = blockType === null || blockType === void 0 ? void 0 : blockType.icon;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, removed && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('This error is no longer detected, either because the block was removed or the editor mode was switched.', 'amp')), isExternal && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('This error comes from outside the content (e.g. header or footer).', 'amp')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("dl", {
    className: "amp-error__details"
  }, !(removed || isExternal) && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(BlockType, {
    blockTypeIcon: blockTypeIcon,
    blockTypeTitle: blockTypeTitle
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ErrorSource, {
    blockTypeName: blockTypeName,
    clientId: clientId,
    sources: sources
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(MarkupStatus, {
    status: status
  })));
}
ErrorContent.propTypes = {
  blockType: prop_types__WEBPACK_IMPORTED_MODULE_2___default().shape({
    icon: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().object),
    name: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
    title: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string)
  }),
  clientId: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
  error: prop_types__WEBPACK_IMPORTED_MODULE_2___default().shape({
    sources: prop_types__WEBPACK_IMPORTED_MODULE_2___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_2___default().object))
  }).isRequired,
  isExternal: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool),
  removed: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool),
  status: prop_types__WEBPACK_IMPORTED_MODULE_2___default().oneOf([amp_block_validation__WEBPACK_IMPORTED_MODULE_3__.VALIDATION_ERROR_ACK_ACCEPTED_STATUS, amp_block_validation__WEBPACK_IMPORTED_MODULE_3__.VALIDATION_ERROR_ACK_REJECTED_STATUS, amp_block_validation__WEBPACK_IMPORTED_MODULE_3__.VALIDATION_ERROR_NEW_REJECTED_STATUS, amp_block_validation__WEBPACK_IMPORTED_MODULE_3__.VALIDATION_ERROR_NEW_ACCEPTED_STATUS]).isRequired
};

/***/ }),

/***/ "./assets/src/block-validation/components/error/error-panel-title.js":
/*!***************************************************************************!*\
  !*** ./assets/src/block-validation/components/error/error-panel-title.js ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ErrorPanelTitle": function() { return /* binding */ ErrorPanelTitle; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _error_type_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./error-type-icon */ "./assets/src/block-validation/components/error/error-type-icon.js");


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
 * Panel title component for an individual error.
 *
 * @param {Object}  props            Component props.
 * @param {boolean} props.kept
 * @param {string}  props.title      Title string from error data.
 * @param {Object}  props.error      Error details.
 * @param {string}  props.error.type Error type.
 */

function ErrorPanelTitle(_ref) {
  let {
    kept,
    title,
    error: {
      type
    }
  } = _ref;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "amp-error__panel-title",
    title: kept ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('This error has been kept, making this URL not AMP-compatible.', 'amp') : ''
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "amp-error__icons"
  }, type && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `amp-error__error-type-icon amp-error__error-type-icon--${type === null || type === void 0 ? void 0 : type.replace(/_/g, '-')}`
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_error_type_icon__WEBPACK_IMPORTED_MODULE_3__.ErrorTypeIcon, {
    type: type
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "amp-error__title",
    dangerouslySetInnerHTML: {
      /* dangerouslySetInnerHTML reason: WordPress sometimes sends back HTML in error messages. */
      __html: title
    }
  }));
}
ErrorPanelTitle.propTypes = {
  kept: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  title: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string.isRequired),
  error: prop_types__WEBPACK_IMPORTED_MODULE_1___default().shape({
    type: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string)
  }).isRequired
};

/***/ }),

/***/ "./assets/src/block-validation/components/error/error-type-icon.js":
/*!*************************************************************************!*\
  !*** ./assets/src/block-validation/components/error/error-type-icon.js ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ErrorTypeIcon": function() { return /* binding */ ErrorTypeIcon; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var amp_block_validation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! amp-block-validation */ "amp-block-validation");
/* harmony import */ var amp_block_validation__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(amp_block_validation__WEBPACK_IMPORTED_MODULE_3__);



/**
 * External dependencies
 */


/**
 * Internal dependencies
 */

var HTMLErrorIcon = function HTMLErrorIcon(props) {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", props, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "m2.45 3.068 3.34 1.178v1.64L.743 3.749V2.365L5.79.227v1.64L2.45 3.068Zm8.19-.017L7.237 1.86V.232l5.104 2.14v1.376L7.236 5.893V4.258l3.405-1.207Z",
    fill: "#fff"
  }));
};

HTMLErrorIcon.defaultProps = {
  width: "13",
  height: "6",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};

var JSErrorIcon = function JSErrorIcon(props) {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", props, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M3.675.959h1.5v4.9c0 .5-.1.9-.3 1.2-.2.3-.5.6-.8.8-.4.2-.8.3-1.2.3-.8 0-1.3-.2-1.8-.6-.4-.4-.6-.9-.6-1.6h1.5c0 .3.1.6.2.8.1.2.4.2.7.2.3 0 .5-.1.7-.3.2-.2.2-.5.2-.8v-4.9h-.1ZM10.075 6.26c0-.3-.1-.5-.3-.6-.2-.1-.5-.3-1.1-.5-.5-.2-.9-.3-1.2-.5-.8-.4-1.2-1-1.2-1.8 0-.4.1-.7.3-1 .2-.3.5-.5.9-.7.5-.2 1-.3 1.5-.3s1 .1 1.4.3c.4.2.7.4.9.8.2.3.3.7.3 1.1h-1.5c0-.3-.1-.6-.3-.8-.2-.2-.5-.3-.9-.3s-.6.1-.8.2c-.2.2-.3.3-.3.6 0 .2.1.4.3.6.2.2.6.3 1 .4.8.3 1.4.6 1.8.9.4.3.6.8.6 1.4 0 .6-.2 1.1-.7 1.4-.5.4-1.1.5-1.9.5-.5 0-1-.1-1.5-.3-.4-.2-.8-.5-1-.8-.2-.3-.4-.8-.4-1.2h1.5c0 .8.5 1.2 1.4 1.2.3 0 .6-.1.8-.2.3 0 .4-.2.4-.4Z",
    fill: "#fff"
  }));
};

JSErrorIcon.defaultProps = {
  width: "12",
  height: "9",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};

var CSSErrorIcon = function CSSErrorIcon(props) {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", props, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M4.13 6.46h-1.2l-.4 2.4h-1.1l.4-2.4H.53v-1h1.5l.3-1.7h-1.3v-1h1.5l.4-2.4h1.1l-.4 2.4h1.1l.4-2.4h1.1l-.4 2.4h1.3v1h-1.5l-.3 1.7h1.3v1h-1.5l-.4 2.4h-1.1l.5-2.4Zm-1-1h1.1l.3-1.7h-1.1l-.3 1.7Z",
    fill: "#fff"
  }));
};

CSSErrorIcon.defaultProps = {
  width: "8",
  height: "9",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
/**
 * Component rendering an icon representing JS, CSS, or HTML.
 *
 * @param {Object} props
 * @param {string} props.type The error type.
 */

function ErrorTypeIcon(_ref) {
  let {
    type
  } = _ref;

  switch (type) {
    case amp_block_validation__WEBPACK_IMPORTED_MODULE_3__.HTML_ATTRIBUTE_ERROR_TYPE:
    case amp_block_validation__WEBPACK_IMPORTED_MODULE_3__.HTML_ELEMENT_ERROR_TYPE:
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(HTMLErrorIcon, null);

    case amp_block_validation__WEBPACK_IMPORTED_MODULE_3__.JS_ERROR_TYPE:
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(JSErrorIcon, null);

    case amp_block_validation__WEBPACK_IMPORTED_MODULE_3__.CSS_ERROR_TYPE:
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(CSSErrorIcon, null);

    default:
      return null;
  }
}
ErrorTypeIcon.propTypes = {
  type: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string.isRequired)
};

/***/ }),

/***/ "./assets/src/block-validation/components/error/get-error-source-title.js":
/*!********************************************************************************!*\
  !*** ./assets/src/block-validation/components/error/get-error-source-title.js ***!
  \********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getErrorSourceTitle": function() { return /* binding */ getErrorSourceTitle; }
/* harmony export */ });
/* harmony import */ var amp_block_validation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! amp-block-validation */ "amp-block-validation");
/* harmony import */ var amp_block_validation__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(amp_block_validation__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */


/**
 * Retrieve sources keyed by type.
 *
 * @param {Object[]} sources Error source details from the PHP backtrace.
 * @return {{core: *[], plugin: *[], 'mu-plugin': *[], blocks: *[], theme: *[], embed: *[]}} Keyed sources.
 */

function getKeyedSources(sources) {
  const keyedSources = {
    theme: [],
    plugin: [],
    'mu-plugin': [],
    embed: [],
    core: [],
    blocks: []
  };

  if (!(sources !== null && sources !== void 0 && sources.length)) {
    return keyedSources;
  }

  for (const source of sources) {
    if (source.type && source.type in keyedSources) {
      keyedSources[source.type].push(source);
    } else if ('block_name' in source) {
      keyedSources.blocks.push(source);
    }
  }

  return keyedSources;
}
/**
 * Attempts to get the title of the plugin or theme responsible for an error.
 *
 * Adapted from AMP_Validated_URL_Post_Type::render_sources_column PHP method.
 *
 * @param {Object[]} sources Error source details from the PHP backtrace.
 */


function getErrorSourceTitle() {
  let sources = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  const keyedSources = getKeyedSources(sources);
  const output = [];
  const uniquePluginNames = new Set(keyedSources.plugin.map(_ref => {
    let {
      name
    } = _ref;
    return name;
  }));
  const muPluginNames = new Set(keyedSources['mu-plugin'].map(_ref2 => {
    let {
      name
    } = _ref2;
    return name;
  }));
  let combinedPluginNames = [...uniquePluginNames, ...muPluginNames];

  if (combinedPluginNames.length > 1) {
    combinedPluginNames = combinedPluginNames.filter(slug => slug !== 'gutenberg');
  }

  if (1 === combinedPluginNames.length) {
    output.push(amp_block_validation__WEBPACK_IMPORTED_MODULE_0__.pluginNames[combinedPluginNames[0]] || combinedPluginNames[0]);
  } else {
    const pluginCount = uniquePluginNames.size;
    const muPluginCount = muPluginNames.size;

    if (0 < pluginCount) {
      output.push((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.sprintf)('%1$s (%2$d)', (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Plugins', 'amp'), pluginCount));
    }

    if (0 < muPluginCount) {
      output.push((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.sprintf)('%1$s (%2$d)', (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Must-use plugins', 'amp'), muPluginCount));
    }
  }

  if (0 === keyedSources.embed.length) {
    const activeThemeSources = keyedSources.theme.filter(_ref3 => {
      let {
        name
      } = _ref3;
      return amp_block_validation__WEBPACK_IMPORTED_MODULE_0__.themeSlug === name;
    });
    const inactiveThemeSources = keyedSources.theme.filter(_ref4 => {
      let {
        name
      } = _ref4;
      return amp_block_validation__WEBPACK_IMPORTED_MODULE_0__.themeSlug !== name;
    });

    if (0 < activeThemeSources.length) {
      output.push(amp_block_validation__WEBPACK_IMPORTED_MODULE_0__.themeName);
    }

    if (0 < inactiveThemeSources.length) {
      /* translators: placeholder is the slug of an inactive WordPress theme. */
      output.push((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Inactive theme(s)', 'amp'));
    }
  }

  if (0 === output.length && 0 < keyedSources.blocks.length) {
    output.push(keyedSources.blocks[0].block_name);
  }

  if (0 === output.length && 0 < keyedSources.embed.length) {
    output.push((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Embed', 'amp'));
  }

  if (0 === output.length && 0 < keyedSources.core.length) {
    output.push((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Core', 'amp'));
  }

  if (!output.length && sources !== null && sources !== void 0 && sources.length) {
    output.push((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Unknown', 'amp'));
  }

  return output.join(', ');
}

/***/ }),

/***/ "./assets/src/block-validation/components/error/index.js":
/*!***************************************************************!*\
  !*** ./assets/src/block-validation/components/error/index.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Error": function() { return /* binding */ Error; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var amp_block_validation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! amp-block-validation */ "amp-block-validation");
/* harmony import */ var amp_block_validation__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(amp_block_validation__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./style.css */ "./assets/src/block-validation/components/error/style.css");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../store */ "./assets/src/block-validation/store/index.js");
/* harmony import */ var _error_panel_title__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./error-panel-title */ "./assets/src/block-validation/components/error/error-panel-title.js");
/* harmony import */ var _error_content__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./error-content */ "./assets/src/block-validation/components/error/error-content.js");


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
 * Component rendering an individual error. Parent component is a <ul>.
 *
 * @param {Object} args          Component props.
 * @param {string} args.clientId
 * @param {number} args.error
 * @param {number} args.status
 * @param {number} args.term_id
 * @param {number} args.title
 */

function Error(_ref) {
  let {
    clientId,
    error,
    status,
    term_id: termId,
    title
  } = _ref;
  const {
    selectBlock
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_4__.useDispatch)('core/block-editor');
  const reviewLink = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_4__.useSelect)(select => select(_store__WEBPACK_IMPORTED_MODULE_8__.BLOCK_VALIDATION_STORE_KEY).getReviewLink(), []);
  const reviewed = status === amp_block_validation__WEBPACK_IMPORTED_MODULE_3__.VALIDATION_ERROR_ACK_ACCEPTED_STATUS || status === amp_block_validation__WEBPACK_IMPORTED_MODULE_3__.VALIDATION_ERROR_ACK_REJECTED_STATUS;
  const kept = status === amp_block_validation__WEBPACK_IMPORTED_MODULE_3__.VALIDATION_ERROR_ACK_REJECTED_STATUS || status === amp_block_validation__WEBPACK_IMPORTED_MODULE_3__.VALIDATION_ERROR_NEW_REJECTED_STATUS;
  const isExternal = !Boolean(clientId);
  const {
    blockType,
    removed
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_4__.useSelect)(select => {
    const blockName = select('core/block-editor').getBlockName(clientId);
    return {
      removed: clientId && !blockName,
      blockType: select('core/blocks').getBlockType(blockName)
    };
  }, [clientId]);
  let detailsUrl = null;

  if (reviewLink) {
    detailsUrl = new URL(reviewLink);
    detailsUrl.hash = `#tag-${termId}`;
  }

  const panelClassNames = classnames__WEBPACK_IMPORTED_MODULE_1___default()('amp-error', {
    'amp-error--reviewed': reviewed,
    'amp-error--new': !reviewed,
    'amp-error--removed': removed,
    'amp-error--kept': kept,
    [`error-${clientId}`]: clientId
  });
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelBody, {
    className: panelClassNames,
    title: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_error_panel_title__WEBPACK_IMPORTED_MODULE_9__.ErrorPanelTitle, {
      error: error,
      kept: kept,
      title: title
    }),
    initialOpen: false
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_error_content__WEBPACK_IMPORTED_MODULE_10__.ErrorContent, {
    blockType: blockType,
    clientId: clientId,
    error: error,
    isExternal: isExternal,
    removed: removed,
    status: status
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "amp-error__actions"
  }, !(removed || isExternal) && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.Button, {
    className: "amp-error__select-block",
    isSecondary: true,
    onClick: () => {
      selectBlock(clientId);
    }
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('Select block', 'amp')), detailsUrl && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.ExternalLink, {
    href: detailsUrl.href,
    className: "amp-error__details-link"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('View details', 'amp'))));
}
Error.propTypes = {
  clientId: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
  error: prop_types__WEBPACK_IMPORTED_MODULE_2___default().shape({
    sources: prop_types__WEBPACK_IMPORTED_MODULE_2___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_2___default().object)).isRequired,
    type: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string)
  }).isRequired,
  status: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().number.isRequired),
  term_id: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().number.isRequired),
  title: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string.isRequired)
};

/***/ }),

/***/ "./assets/src/block-validation/components/icon/index.js":
/*!**************************************************************!*\
  !*** ./assets/src/block-validation/components/icon/index.js ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ToolbarIcon": function() { return /* binding */ ToolbarIcon; },
/* harmony export */   "MoreMenuIcon": function() { return /* binding */ MoreMenuIcon; },
/* harmony export */   "StatusIcon": function() { return /* binding */ StatusIcon; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.css */ "./assets/src/block-validation/components/icon/style.css");



/**
 * External dependencies
 */

/**
 * Internal dependencies
 */



var AMPLogoIcon = function AMPLogoIcon(props) {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", props, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    fill: "#0075C2",
    d: "m13.3 9.1-4 6.6h-.8l.7-4.3H7c-.2 0-.4-.2-.4-.4 0-.1.1-.2.1-.2l4-6.6h.7l-.7 4.3h2.2c.2 0 .4.2.4.4.1.1 0 .2 0 .2zM10 .5C4.7.5.4 4.8.4 10c0 5.3 4.3 9.5 9.6 9.5s9.6-4.3 9.6-9.5c0-5.3-4.3-9.5-9.6-9.5z"
  }));
};

AMPLogoIcon.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20"
};

var AMPToolbarIcon = function AMPToolbarIcon(props) {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", props, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M9.863 16.815h-.7l.8-4.5h-2.3c-.2 0-.4-.2-.4-.4 0-.1.1-.2.1-.2l4.2-7h.8l-.8 4.6h2.3c.2 0 .4.2.4.4 0 .1 0 .2-.1.2l-4.3 6.9Zm.8-16.1c-5.5 0-10 4.5-10 10s4.5 10 10 10 10-4.5 10-10-4.5-10-10-10Z"
  }));
};

AMPToolbarIcon.defaultProps = {
  width: "21",
  height: "21",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};

var AMPToolbarIconBroken = function AMPToolbarIconBroken(props) {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", props, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M.913 10.283c0 5.5 4.5 10 10 10s10-4.5 10-10-4.5-10-10-10-10 4.5-10 10Z",
    fill: "#fff"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M10.113 16.383h-.7l.8-4.5h-2.3c-.2 0-.4-.2-.4-.4 0-.1.1-.2.1-.2l4.2-7h.8l-.8 4.6h2.3c.2 0 .4.2.4.4 0 .1 0 .2-.1.2l-4.3 6.9Zm.8-16.1c-5.5 0-10 4.5-10 10s4.5 10 10 10 10-4.5 10-10-4.5-10-10-10Z",
    fill: "#37414B"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("circle", {
    cx: "10.913",
    cy: "10.283",
    r: "9",
    stroke: "#BB522E",
    strokeWidth: "2"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    stroke: "#BB522E",
    strokeWidth: "2",
    d: "M16.518 17.346 3.791 4.618"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    stroke: "#fff",
    strokeWidth: "2",
    d: "M19.805 18.118 3.282 1.249"
  }));
};

AMPToolbarIconBroken.defaultProps = {
  width: "21",
  height: "21",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
/**
 * Plugin icon.
 *
 * @param {Object}  props
 * @param {boolean} props.hasBadge Whether the icon is showing a number.
 */

function IconSVG(_ref) {
  let {
    hasBadge
  } = _ref;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: `amp-toolbar-icon components-menu-items__item-icon${hasBadge ? ' amp-toolbar-icon--has-badge' : ''}`
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(AMPToolbarIcon, null));
}

IconSVG.propTypes = {
  hasBadge: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool.isRequired)
};
/**
 * Plugin icon when AMP is broken at the URL.
 *
 * @param {Object}  props
 * @param {boolean} props.hasBadge Whether the icon is showing a number.
 */

function BrokenIconSVG(_ref2) {
  let {
    hasBadge
  } = _ref2;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: `amp-toolbar-broken-icon${hasBadge ? ' amp-toolbar-broken-icon--has-badge' : ''}`
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(AMPToolbarIconBroken, null));
}

BrokenIconSVG.propTypes = {
  hasBadge: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool.isRequired)
};
/**
 * The icon to display in the editor toolbar to toggle the editor sidebar.
 *
 * @param {Object}  props
 * @param {boolean} props.broken Whether AMP is broken at the URL.
 * @param {number}  props.count  The number of new errors at the URL.
 */

function ToolbarIcon(_ref3) {
  let {
    broken = false,
    count
  } = _ref3;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `amp-plugin-icon ${broken ? 'amp-plugin-icon--broken' : ''}`
  }, broken ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(BrokenIconSVG, {
    hasBadge: Boolean(count)
  }) : (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(IconSVG, {
    hasBadge: Boolean(count)
  }), 0 < count && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "amp-error-count-badge"
  }, count));
}
ToolbarIcon.propTypes = {
  broken: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool),
  count: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().number.isRequired)
};
/**
 * The icon to display in the editor more menu.
 */

function MoreMenuIcon() {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(IconSVG, {
    hasBadge: false
  });
}
/**
 * The status icon to display in the editor sidebar area.
 *
 * @param {Object}  props
 * @param {boolean} props.broken Whether AMP is broken at the URL.
 */

function StatusIcon(_ref4) {
  let {
    broken = false
  } = _ref4;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `amp-status-icon ${broken ? 'amp-status-icon--broken' : ''}`
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(AMPLogoIcon, null));
}
StatusIcon.propTypes = {
  broken: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool)
};

/***/ }),

/***/ "./assets/src/block-validation/components/invalid-block-outline/index.js":
/*!*******************************************************************************!*\
  !*** ./assets/src/block-validation/components/invalid-block-outline/index.js ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InvalidBlockOutline": function() { return /* binding */ InvalidBlockOutline; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../store */ "./assets/src/block-validation/store/index.js");


/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */


/**
 * Adds a style rule for all blocks with validation errors.
 */

function InvalidBlockOutline() {
  const validationErrors = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.useSelect)(select => select(_store__WEBPACK_IMPORTED_MODULE_2__.BLOCK_VALIDATION_STORE_KEY).getUnreviewedValidationErrors(), []);
  const selectors = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    const clientIds = validationErrors.map(_ref => {
      let {
        clientId
      } = _ref;
      return clientId;
    }).filter(clientId => clientId);
    return clientIds.map(clientId => `#block-${clientId}::before`);
  }, [validationErrors]);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("style", null, `${selectors.join(',')} {
					border-radius: 9px;
					bottom: -3px;
					box-shadow: 0 0 0 2px #bb522e;
					content: '';
					left: -3px;
					pointer-events: none;
					position: absolute;
					right: -3px;
					top: -3px;
				}`);
}

/***/ }),

/***/ "./assets/src/block-validation/components/sidebar-notification/index.js":
/*!******************************************************************************!*\
  !*** ./assets/src/block-validation/components/sidebar-notification/index.js ***!
  \******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SidebarNotification": function() { return /* binding */ SidebarNotification; },
/* harmony export */   "SidebarNotificationsContainer": function() { return /* binding */ SidebarNotificationsContainer; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.css */ "./assets/src/block-validation/components/sidebar-notification/style.css");
/* harmony import */ var _components_loading__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/loading */ "./assets/src/components/loading/index.js");


/**
 * External dependencies
 */


/**
 * Internal dependencies
 */



/**
 * Notification component used in the block editor sidebar.
 *
 * @param {Object}      props
 * @param {JSX.Element} props.action    Call to action element.
 * @param {JSX.Element} props.icon      Status icon element.
 * @param {boolean}     props.isLoading Flag indicating if it's a loading message.
 * @param {boolean}     props.isSmall   Flag indicating if the notification is small.
 * @param {string}      props.message   Message text.
 */

function SidebarNotification(_ref) {
  let {
    action,
    icon,
    isLoading = false,
    isSmall = false,
    message
  } = _ref;
  const iconElement = isLoading ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_loading__WEBPACK_IMPORTED_MODULE_4__.Loading, null) : icon;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('sidebar-notification', {
      'is-loading': isLoading,
      'is-small': isSmall
    })
  }, iconElement && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "sidebar-notification__icon"
  }, iconElement), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "sidebar-notification__content"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, message), action && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "sidebar-notification__action"
  }, action)));
}
SidebarNotification.propTypes = {
  action: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().node),
  icon: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().node),
  isLoading: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool),
  isSmall: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool),
  message: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string.isRequired)
};
/**
 * Sidebar notifications container component.
 *
 * @param {Object}  props
 * @param {Object}  props.children Component children.
 * @param {boolean} props.isShady  Flag indicating if the component should have a background.
 */

function SidebarNotificationsContainer(_ref2) {
  let {
    children,
    isShady
  } = _ref2;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('sidebar-notifications-container', {
      'is-shady': isShady
    })
  }, children);
}
SidebarNotificationsContainer.propTypes = {
  children: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().any),
  isShady: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool)
};

/***/ }),

/***/ "./assets/src/block-validation/components/sidebar/index.js":
/*!*****************************************************************!*\
  !*** ./assets/src/block-validation/components/sidebar/index.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Sidebar": function() { return /* binding */ Sidebar; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style.css */ "./assets/src/block-validation/components/sidebar/style.css");
/* harmony import */ var _amp_validation_status__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../amp-validation-status */ "./assets/src/block-validation/components/amp-validation-status/index.js");
/* harmony import */ var _error__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../error */ "./assets/src/block-validation/components/error/index.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../store */ "./assets/src/block-validation/store/index.js");


/**
 * WordPress dependencies
 */




/**
 * Internal dependencies
 */





/**
 * Editor sidebar.
 */

function Sidebar() {
  const {
    setIsShowingReviewed
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.useDispatch)(_store__WEBPACK_IMPORTED_MODULE_7__.BLOCK_VALIDATION_STORE_KEY);
  const {
    displayedErrors,
    hasReviewedValidationErrors,
    isShowingReviewed
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.useSelect)(select => {
    var _select$getReviewedVa;

    const _isShowingReviewed = select(_store__WEBPACK_IMPORTED_MODULE_7__.BLOCK_VALIDATION_STORE_KEY).getIsShowingReviewed();

    return {
      displayedErrors: _isShowingReviewed ? select(_store__WEBPACK_IMPORTED_MODULE_7__.BLOCK_VALIDATION_STORE_KEY).getValidationErrors() : select(_store__WEBPACK_IMPORTED_MODULE_7__.BLOCK_VALIDATION_STORE_KEY).getUnreviewedValidationErrors(),
      hasReviewedValidationErrors: ((_select$getReviewedVa = select(_store__WEBPACK_IMPORTED_MODULE_7__.BLOCK_VALIDATION_STORE_KEY).getReviewedValidationErrors()) === null || _select$getReviewedVa === void 0 ? void 0 : _select$getReviewedVa.length) > 0,
      isShowingReviewed: _isShowingReviewed
    };
  }, []);
  /**
   * Focus the first focusable element when the sidebar opens.
   */

  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const element = document.querySelector('.amp-sidebar a, .amp-sidebar button, .amp-sidebar input');

    if (element) {
      element.focus();
    }
  }, []);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "amp-sidebar"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_amp_validation_status__WEBPACK_IMPORTED_MODULE_5__["default"], null), 0 < displayedErrors.length && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("ul", {
    className: "amp-sidebar__errors-list"
  }, displayedErrors.map((validationError, index) => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", {
    // Add `index` to key since not all errors have `clientId`.
    key: `${validationError.clientId}${index}`,
    className: "amp-sidebar__errors-list-item"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_error__WEBPACK_IMPORTED_MODULE_6__.Error, validationError)))), hasReviewedValidationErrors && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "amp-sidebar__options"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
    isLink: true,
    onClick: () => setIsShowingReviewed(!isShowingReviewed)
  }, isShowingReviewed ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Hide reviewed issues', 'amp') : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Show reviewed issues', 'amp'))));
}

/***/ }),

/***/ "./assets/src/block-validation/components/with-amp-toolbar-button/amp-toolbar-button.js":
/*!**********************************************************************************************!*\
  !*** ./assets/src/block-validation/components/with-amp-toolbar-button/amp-toolbar-button.js ***!
  \**********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AMPToolbarButton": function() { return /* binding */ AMPToolbarButton; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../icon */ "./assets/src/block-validation/components/icon/index.js");
/* harmony import */ var _plugins_amp_block_validation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../plugins/amp-block-validation */ "./assets/src/block-validation/plugins/amp-block-validation.js");
/* harmony import */ var _hooks_use_amp_document_toggle__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../hooks/use-amp-document-toggle */ "./assets/src/block-validation/hooks/use-amp-document-toggle.js");


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
 * AMP button displaying in the block toolbar.
 *
 * @param {Object} props          Component props.
 * @param {string} props.clientId Block Client ID.
 * @param {number} props.count    The number of errors associated with the block.
 */

function AMPToolbarButton(_ref) {
  let {
    clientId,
    count
  } = _ref;
  const {
    openGeneralSidebar
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_4__.useDispatch)('core/edit-post');
  const {
    isAMPEnabled
  } = (0,_hooks_use_amp_document_toggle__WEBPACK_IMPORTED_MODULE_7__.useAMPDocumentToggle)();

  if (!isAMPEnabled) {
    return null;
  }

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.BlockControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToolbarButton, {
    onClick: () => {
      openGeneralSidebar(`${_plugins_amp_block_validation__WEBPACK_IMPORTED_MODULE_6__.PLUGIN_NAME}/${_plugins_amp_block_validation__WEBPACK_IMPORTED_MODULE_6__.SIDEBAR_NAME}`); // eslint-disable-next-line @wordpress/react-no-unsafe-timeout

      setTimeout(() => {
        const buttons = Array.from(document.querySelectorAll(`.error-${clientId} button`));
        const firstButton = buttons[0]; // Ensure all errors are expanded.
        // @todo This would be more elegant if this state were captured in the store?

        buttons.reverse(); // Reverse so that the first one is focused first.

        for (const button of buttons) {
          if ('false' === button.getAttribute('aria-expanded')) {
            button.click();
          }
        } // Make sure the first is scrolled into view.


        if (firstButton) {
          firstButton.scrollIntoView({
            block: 'start',
            inline: 'nearest',
            behavior: 'smooth'
          });
        }
      });
    }
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_icon__WEBPACK_IMPORTED_MODULE_5__.ToolbarIcon, {
    count: count
  })));
}
AMPToolbarButton.propTypes = {
  clientId: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string.isRequired),
  count: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number.isRequired)
};

/***/ }),

/***/ "./assets/src/block-validation/components/with-amp-toolbar-button/index.js":
/*!*********************************************************************************!*\
  !*** ./assets/src/block-validation/components/with-amp-toolbar-button/index.js ***!
  \*********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "withAMPToolbarButton": function() { return /* binding */ withAMPToolbarButton; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../store */ "./assets/src/block-validation/store/index.js");
/* harmony import */ var _amp_toolbar_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./amp-toolbar-button */ "./assets/src/block-validation/components/with-amp-toolbar-button/amp-toolbar-button.js");



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
 * Adds the AMPToolbarButton to blocks that have one or more unreviewed validation errors.
 *
 * @param {Object}   props
 * @param {Function} props.BlockEdit Block edit function.
 * @param {string}   props.clientId  Client ID.
 */

function BlockEditWithToolbar(props) {
  const {
    BlockEdit,
    clientId
  } = props;
  const count = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.useSelect)(select => (select(_store__WEBPACK_IMPORTED_MODULE_5__.BLOCK_VALIDATION_STORE_KEY).getUnreviewedValidationErrors() || []).filter(_ref => {
    let {
      clientId: validationErrorClientId
    } = _ref;
    return clientId === validationErrorClientId;
  }).length || 0, [clientId]);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, 0 < count && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_amp_toolbar_button__WEBPACK_IMPORTED_MODULE_6__.AMPToolbarButton, {
    clientId: clientId,
    count: count
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(BlockEdit, props));
}

BlockEditWithToolbar.propTypes = {
  BlockEdit: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func.isRequired),
  clientId: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string.isRequired)
};
/**
 * Filters the block edit function of all blocks.
 */

const withAMPToolbarButton = (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_4__.createHigherOrderComponent)(BlockEdit => props => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(BlockEditWithToolbar, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
  BlockEdit: BlockEdit
})), 'BlockEditWithAMPToolbar');

/***/ }),

/***/ "./assets/src/block-validation/hooks/use-amp-document-toggle.js":
/*!**********************************************************************!*\
  !*** ./assets/src/block-validation/hooks/use-amp-document-toggle.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useAMPDocumentToggle": function() { return /* binding */ useAMPDocumentToggle; }
/* harmony export */ });
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__);
/**
 * WordPress dependencies
 */

/**
 * Custom hook providing an easy way to toggle AMP and check if it is enabled.
 */

function useAMPDocumentToggle() {
  const isAMPEnabled = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.useSelect)(select => select('core/editor').getEditedPostAttribute('amp_enabled') || false, []);
  const {
    editPost
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.useDispatch)('core/editor');

  const toggleAMP = () => editPost({
    amp_enabled: !isAMPEnabled
  });

  return {
    isAMPEnabled,
    toggleAMP
  };
}

/***/ }),

/***/ "./assets/src/block-validation/hooks/use-errors-fetching-state-changes.js":
/*!********************************************************************************!*\
  !*** ./assets/src/block-validation/hooks/use-errors-fetching-state-changes.js ***!
  \********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useErrorsFetchingStateChanges": function() { return /* binding */ useErrorsFetchingStateChanges; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../store */ "./assets/src/block-validation/store/index.js");
/**
 * WordPress dependencies
 */




/**
 * Internal dependencies
 */


/**
 * Custom hook providing loading message when validation errors are fetched.
 */

function useErrorsFetchingStateChanges() {
  const [didFetchErrors, setDidFetchErrors] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [fetchingErrorsMessage, setFetchingErrorsMessage] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const {
    isEditedPostNew,
    isFetchingErrors
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.useSelect)(select => ({
    isEditedPostNew: select('core/editor').isEditedPostNew(),
    isFetchingErrors: select(_store__WEBPACK_IMPORTED_MODULE_4__.BLOCK_VALIDATION_STORE_KEY).getIsFetchingErrors()
  }), []);
  const wasEditedPostNew = (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_2__.usePrevious)(isEditedPostNew);
  const wasFetchingErrors = (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_2__.usePrevious)(isFetchingErrors);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (didFetchErrors) {
      return;
    } // Set up the state right after errors fetching has finished.


    if (!isFetchingErrors && wasFetchingErrors) {
      setDidFetchErrors(true);
    }
  }, [didFetchErrors, isFetchingErrors, wasFetchingErrors]);
  /**
   * Display best-suited loading message depending if the post has been
   * already validated or not, or the editor has just been opened.
   */

  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (didFetchErrors) {
      setFetchingErrorsMessage((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Re-validating content.', 'amp'));
    } else if (isEditedPostNew || wasEditedPostNew) {
      setFetchingErrorsMessage((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Validating content.', 'amp'));
    } else if (isFetchingErrors) {
      setFetchingErrorsMessage((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Loading…', 'amp'));
    } else {
      setFetchingErrorsMessage('');
    }
  }, [didFetchErrors, isEditedPostNew, isFetchingErrors, wasEditedPostNew]);
  return {
    isFetchingErrors,
    fetchingErrorsMessage
  };
}

/***/ }),

/***/ "./assets/src/block-validation/hooks/use-post-dirty-state-changes.js":
/*!***************************************************************************!*\
  !*** ./assets/src/block-validation/hooks/use-post-dirty-state-changes.js ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "usePostDirtyStateChanges": function() { return /* binding */ usePostDirtyStateChanges; }
/* harmony export */ });
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../store */ "./assets/src/block-validation/store/index.js");
/**
 * WordPress dependencies
 */



/**
 * Internal dependencies
 */


const DELAY_MS = 500;
function usePostDirtyStateChanges() {
  const [content, setContent] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  const [updatedContent, setUpdatedContent] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)();
  const subscription = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
  const {
    setIsPostDirty,
    setMaybeIsPostDirty
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.useDispatch)(_store__WEBPACK_IMPORTED_MODULE_3__.BLOCK_VALIDATION_STORE_KEY);
  const {
    getEditedPostContent,
    hasErrorsFromRemovedBlocks,
    hasActiveMetaboxes,
    isPostDirty,
    isSavingOrPreviewingPost
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.useSelect)(select => ({
    getEditedPostContent: select('core/editor').getEditedPostContent,
    hasErrorsFromRemovedBlocks: Boolean(select(_store__WEBPACK_IMPORTED_MODULE_3__.BLOCK_VALIDATION_STORE_KEY).getValidationErrors().find(_ref => {
      let {
        clientId
      } = _ref;
      return clientId && !select('core/block-editor').getBlockName(clientId);
    })),
    hasActiveMetaboxes: select('core/edit-post').hasMetaBoxes(),
    isPostDirty: select(_store__WEBPACK_IMPORTED_MODULE_3__.BLOCK_VALIDATION_STORE_KEY).getIsPostDirty(),
    isSavingOrPreviewingPost: select('core/editor').isSavingPost() && !select('core/editor').isAutosavingPost() || select('core/editor').isPreviewingPost()
  }), []);
  /**
   * Remove subscription when component is unmounted.
   */

  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => () => {
    if (subscription.current) {
      subscription.current();
    }
  }, []);
  /**
   * Post is no longer in a dirty state after save.
   *
   * We're using a separate effect for resetting the flag since the listener
   * gets unsubscribed from the store changes whenever post gets into a dirty
   * state.
   */

  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (isPostDirty && isSavingOrPreviewingPost) {
      setIsPostDirty(false);
      setContent(null);
    }
  }, [isPostDirty, isSavingOrPreviewingPost, setIsPostDirty]);
  /**
   * Whenever a fresh post content differs from the one that is stored in the
   * state, it's safe to assume that the post is in a dirty state.
   *
   * When the content is null, we're resetting both the `content` and the
   * `updatedContent`.
   */

  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (content === null) {
      const initialContent = getEditedPostContent();
      setContent(initialContent);
      setUpdatedContent(initialContent);
      return;
    }

    if (updatedContent !== content) {
      setIsPostDirty(true);
    }
  }, [content, getEditedPostContent, setIsPostDirty, updatedContent]);
  /**
   * Post may have changed.
   *
   * In some cases it's hard to tell if a post content has changed or not.
   * Examples are meta box content changes or presence of validation errors
   * which used to be in the content but are no longer found, potentially
   * due to switching from the visual editor to the code editor.
   */

  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    setMaybeIsPostDirty(!isPostDirty && (hasActiveMetaboxes || hasErrorsFromRemovedBlocks));
  }, [hasActiveMetaboxes, hasErrorsFromRemovedBlocks, isPostDirty, setMaybeIsPostDirty]);
  /**
   * Keep internal content state in sync with editor state.
   */

  const listener = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useCallback)(() => {
    setUpdatedContent(getEditedPostContent());
  }, [getEditedPostContent]);
  /**
   * Debounce calls to the store listener for performance reasons.
   */

  const debouncedListener = (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_0__.useDebounce)(listener, DELAY_MS);
  /**
   * Only subscribe to the store changes if the post is not in a dirty state.
   */

  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (isPostDirty && subscription.current) {
      subscription.current();
      subscription.current = null;
    } else if (!isSavingOrPreviewingPost && !isPostDirty && !subscription.current) {
      subscription.current = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.subscribe)(debouncedListener);
    }
  }, [debouncedListener, isPostDirty, isSavingOrPreviewingPost]);
}

/***/ }),

/***/ "./assets/src/block-validation/hooks/use-validation-error-state-updates.js":
/*!*********************************************************************************!*\
  !*** ./assets/src/block-validation/hooks/use-validation-error-state-updates.js ***!
  \*********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "maybeAddClientIdToValidationError": function() { return /* binding */ maybeAddClientIdToValidationError; },
/* harmony export */   "useValidationErrorStateUpdates": function() { return /* binding */ useValidationErrorStateUpdates; }
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/api-fetch */ "@wordpress/api-fetch");
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_url__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/url */ "@wordpress/url");
/* harmony import */ var _wordpress_url__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_url__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../store */ "./assets/src/block-validation/store/index.js");
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
 * Attempts to associate a validation error with a block current in the editor.
 *
 * @param {Object}   args
 * @param {Object}   args.validationError Validation error object.
 * @param {Object}   args.source          A single validation error source.
 * @param {number}   args.currentPostId   The ID of the current post.
 * @param {string[]} args.blockOrder      Block client IDs in order.
 * @param {Function} args.getBlock        Store selector to get a block in the current editor by client ID.
 */

function maybeAddClientIdToValidationError(_ref) {
  let {
    validationError,
    source,
    currentPostId,
    blockOrder,
    getBlock
  } = _ref;

  if (!source.block_name || undefined === source.block_content_index) {
    return;
  }

  if (currentPostId !== source.post_id) {
    return;
  } // Look up the block ID by index, assuming the blocks of content in the editor are the same as blocks rendered on frontend.


  const clientId = blockOrder[source.block_content_index];

  if (!clientId) {
    return;
  } // Sanity check that block exists for clientId.


  const block = getBlock(clientId);

  if (!block) {
    return;
  } // Check the block type in case a block is dynamically added/removed via the_content filter to cause alignment error.


  if (block.name !== source.block_name) {
    return;
  }

  validationError.clientId = clientId;
}
/**
 * Custom hook managing state updates through effect hooks.
 *
 * Handling state through a context provider might be preferable in other
 * circumstances, but in this case using a store is necessary because React
 * context is not passed down over slotfills, and we need multiple components
 * within multiple slotfills to have access to the same state.
 */

function useValidationErrorStateUpdates() {
  const [blockOrderBeforeSave, setBlockOrderBeforeSave] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useState)([]);
  const [hasRequestedPreview, setHasRequestedPreview] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
  const [previousValidationErrors, setPreviousValidationErrors] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useState)([]);
  const [shouldValidate, setShouldValidate] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
  const {
    setIsFetchingErrors,
    setFetchingErrorsRequestErrorMessage,
    setReviewLink,
    setSupportLink,
    setValidationErrors
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_4__.useDispatch)(_store__WEBPACK_IMPORTED_MODULE_7__.BLOCK_VALIDATION_STORE_KEY);
  const {
    currentPostId,
    getBlock,
    getClientIdsWithDescendants,
    isAutosavingPost,
    isEditedPostNew,
    isPreviewingPost,
    isSavingPost,
    previewLink,
    validationErrors
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_4__.useSelect)(select => ({
    currentPostId: select('core/editor').getCurrentPostId(),
    getBlock: select('core/block-editor').getBlock,
    getClientIdsWithDescendants: select('core/block-editor').getClientIdsWithDescendants,
    isAutosavingPost: select('core/editor').isAutosavingPost(),
    isEditedPostNew: select('core/editor').isEditedPostNew(),
    isPreviewingPost: select('core/editor').isPreviewingPost(),
    isSavingPost: select('core/editor').isSavingPost(),
    previewLink: select('core/editor').getEditedPostPreviewLink(),
    validationErrors: select(_store__WEBPACK_IMPORTED_MODULE_7__.BLOCK_VALIDATION_STORE_KEY).getValidationErrors()
  }), []);
  const wasEditedPostNew = (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_2__.usePrevious)(isEditedPostNew);
  /**
   * Trigger validation whens editor loads only for existing posts.
   */

  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useEffect)(() => {
    if (!isEditedPostNew && !wasEditedPostNew) {
      setShouldValidate(true);
    }
  }, [isEditedPostNew, wasEditedPostNew]);
  /**
   * Set flags when a post is being saved.
   *
   * Validation should not be triggered on autosaves with an exception of an
   * autosave initiated by a post preview request (note that "Re-validate now"
   * button in the sidebar issues a post preview request).
   */

  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useEffect)(() => {
    if (!isSavingPost) {
      return;
    }

    if (isPreviewingPost) {
      setShouldValidate(true);
      setHasRequestedPreview(true);
      return;
    }

    if (isAutosavingPost) {
      return;
    }

    setShouldValidate(true);
  }, [isAutosavingPost, isPreviewingPost, isSavingPost]);
  /**
   * Fetches validation errors for the current post's URL after the editor has
   * loaded and following subsequent saves.
   */

  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useEffect)(() => {
    if (!shouldValidate) {
      return;
    } // Indicate loading state as soon as post is started to be saved.


    if (isSavingPost) {
      setIsFetchingErrors(true);
      return;
    } // A preview link may not be available right after saving a post.


    if (hasRequestedPreview && !(0,_wordpress_url__WEBPACK_IMPORTED_MODULE_6__.isURL)(previewLink)) {
      return;
    }

    const data = {
      id: currentPostId
    };

    if (hasRequestedPreview) {
      data.preview_nonce = (0,_wordpress_url__WEBPACK_IMPORTED_MODULE_6__.getQueryArg)(previewLink, 'preview_nonce');
    } // The initial render is not related to `isSavingPost` flag change.
    // Still, we're fetching the errors, so the `isFetchingErrors`
    // flag should be set.


    setIsFetchingErrors(true);
    setShouldValidate(false);
    setHasRequestedPreview(false);
    setFetchingErrorsRequestErrorMessage('');
    setBlockOrderBeforeSave(getClientIdsWithDescendants());
    _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_5___default()({
      path: '/amp/v1/validate-post-url/',
      method: 'POST',
      data
    }).then(newValidation => {
      setValidationErrors(newValidation.results);
      setReviewLink(newValidation.review_link);
      setSupportLink(newValidation.support_link);
    }).catch(error => {
      setFetchingErrorsRequestErrorMessage((error === null || error === void 0 ? void 0 : error.message) || (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Whoops! Something went wrong.', 'amp'));
    }).finally(() => {
      setIsFetchingErrors(false);
    });
  }, [currentPostId, getClientIdsWithDescendants, hasRequestedPreview, isSavingPost, previewLink, setFetchingErrorsRequestErrorMessage, setIsFetchingErrors, setReviewLink, setSupportLink, setValidationErrors, shouldValidate]);
  /**
   * Runs an equality check when validation errors are received before running
   * the heavier effect.
   */

  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useEffect)(() => {
    if (validationErrors && !(0,lodash__WEBPACK_IMPORTED_MODULE_0__.isEqual)(previousValidationErrors, validationErrors)) {
      setPreviousValidationErrors(validationErrors);
    }
  }, [previousValidationErrors, validationErrors]);
  /**
   * Adds clientIds to the validation errors that are associated with blocks.
   */

  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useEffect)(() => {
    const newValidationErrors = previousValidationErrors.map(validationError => {
      var _validationError$erro;

      if (!((_validationError$erro = validationError.error.sources) !== null && _validationError$erro !== void 0 && _validationError$erro.length)) {
        return validationError;
      }

      for (const source of validationError.error.sources) {
        /**
         * The loop can finish if the validation error (which is passed
         * by reference below) has obtained a clientId.
         */
        if ('clientId' in validationError) {
          break;
        }

        maybeAddClientIdToValidationError({
          validationError,
          source,
          getBlock,
          blockOrder: 0 < blockOrderBeforeSave.length ? blockOrderBeforeSave : getClientIdsWithDescendants(),
          // blockOrderBeforeSave may be empty on initial load.
          currentPostId
        });
      }

      return validationError;
    });
    setValidationErrors(newValidationErrors);
  }, [blockOrderBeforeSave, currentPostId, getBlock, getClientIdsWithDescendants, setValidationErrors, previousValidationErrors]);
}

/***/ }),

/***/ "./assets/src/block-validation/plugins/amp-block-validation.js":
/*!*********************************************************************!*\
  !*** ./assets/src/block-validation/plugins/amp-block-validation.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PLUGIN_NAME": function() { return /* binding */ PLUGIN_NAME; },
/* harmony export */   "SIDEBAR_NAME": function() { return /* binding */ SIDEBAR_NAME; },
/* harmony export */   "PLUGIN_TITLE": function() { return /* binding */ PLUGIN_TITLE; },
/* harmony export */   "PLUGIN_ICON": function() { return /* binding */ PLUGIN_ICON; },
/* harmony export */   "default": function() { return /* binding */ AMPBlockValidation; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_edit_post__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/edit-post */ "@wordpress/edit-post");
/* harmony import */ var _wordpress_edit_post__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_edit_post__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../store */ "./assets/src/block-validation/store/index.js");
/* harmony import */ var _components_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/icon */ "./assets/src/block-validation/components/icon/index.js");
/* harmony import */ var _components_sidebar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/sidebar */ "./assets/src/block-validation/components/sidebar/index.js");
/* harmony import */ var _components_invalid_block_outline__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/invalid-block-outline */ "./assets/src/block-validation/components/invalid-block-outline/index.js");
/* harmony import */ var _hooks_use_post_dirty_state_changes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../hooks/use-post-dirty-state-changes */ "./assets/src/block-validation/hooks/use-post-dirty-state-changes.js");
/* harmony import */ var _hooks_use_validation_error_state_updates__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../hooks/use-validation-error-state-updates */ "./assets/src/block-validation/hooks/use-validation-error-state-updates.js");
/* harmony import */ var _hooks_use_amp_document_toggle__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../hooks/use-amp-document-toggle */ "./assets/src/block-validation/hooks/use-amp-document-toggle.js");


/**
 * WordPress dependencies
 */



/**
 * Internal dependencies
 */








const PLUGIN_NAME = 'amp-block-validation';
const SIDEBAR_NAME = 'amp-editor-sidebar';
const PLUGIN_TITLE = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('AMP Validation', 'amp');
const PLUGIN_ICON = _components_icon__WEBPACK_IMPORTED_MODULE_5__.MoreMenuIcon;
/**
 * Provides a dedicated sidebar for the plugin, with toggle buttons in the editor toolbar and more menu.
 */

function AMPBlockValidation() {
  const {
    broken,
    errorCount
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.useSelect)(select => {
    var _select$getUnreviewed;

    return {
      broken: select(_store__WEBPACK_IMPORTED_MODULE_4__.BLOCK_VALIDATION_STORE_KEY).getAMPCompatibilityBroken(),
      errorCount: ((_select$getUnreviewed = select(_store__WEBPACK_IMPORTED_MODULE_4__.BLOCK_VALIDATION_STORE_KEY).getUnreviewedValidationErrors()) === null || _select$getUnreviewed === void 0 ? void 0 : _select$getUnreviewed.length) || 0
    };
  }, []);
  const {
    isAMPEnabled
  } = (0,_hooks_use_amp_document_toggle__WEBPACK_IMPORTED_MODULE_10__.useAMPDocumentToggle)();
  (0,_hooks_use_validation_error_state_updates__WEBPACK_IMPORTED_MODULE_9__.useValidationErrorStateUpdates)();
  (0,_hooks_use_post_dirty_state_changes__WEBPACK_IMPORTED_MODULE_8__.usePostDirtyStateChanges)();

  if (!isAMPEnabled) {
    return null;
  }

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_edit_post__WEBPACK_IMPORTED_MODULE_2__.PluginSidebarMoreMenuItem, {
    icon: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(PLUGIN_ICON, null),
    target: SIDEBAR_NAME
  }, PLUGIN_TITLE), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_edit_post__WEBPACK_IMPORTED_MODULE_2__.PluginSidebar, {
    className: `${PLUGIN_NAME}-sidebar`,
    icon: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_icon__WEBPACK_IMPORTED_MODULE_5__.ToolbarIcon, {
      count: errorCount,
      broken: broken
    }),
    name: SIDEBAR_NAME,
    title: PLUGIN_TITLE
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_sidebar__WEBPACK_IMPORTED_MODULE_6__.Sidebar, null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_invalid_block_outline__WEBPACK_IMPORTED_MODULE_7__.InvalidBlockOutline, null)));
}

/***/ }),

/***/ "./assets/src/block-validation/plugins/amp-document-setting-panel.js":
/*!***************************************************************************!*\
  !*** ./assets/src/block-validation/plugins/amp-document-setting-panel.js ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PLUGIN_NAME": function() { return /* binding */ PLUGIN_NAME; },
/* harmony export */   "PLUGIN_ICON": function() { return /* binding */ PLUGIN_ICON; },
/* harmony export */   "default": function() { return /* binding */ AMPDocumentSettingPanel; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_edit_post__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/edit-post */ "@wordpress/edit-post");
/* harmony import */ var _wordpress_edit_post__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_edit_post__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_amp_document_status__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/amp-document-status */ "./assets/src/block-validation/components/amp-document-status/index.js");


/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */


const PLUGIN_NAME = 'amp-block-validation-document-setting-panel';
const PLUGIN_ICON = '';
/**
 * AMP block validation document settings panel.
 */

function AMPDocumentSettingPanel() {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_edit_post__WEBPACK_IMPORTED_MODULE_2__.PluginDocumentSettingPanel, {
    name: PLUGIN_NAME,
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('AMP', 'amp'),
    initialOpen: true
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_amp_document_status__WEBPACK_IMPORTED_MODULE_3__["default"], null));
}

/***/ }),

/***/ "./assets/src/block-validation/plugins/amp-pre-publish-panel.js":
/*!**********************************************************************!*\
  !*** ./assets/src/block-validation/plugins/amp-pre-publish-panel.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PLUGIN_NAME": function() { return /* binding */ PLUGIN_NAME; },
/* harmony export */   "PLUGIN_ICON": function() { return /* binding */ PLUGIN_ICON; },
/* harmony export */   "default": function() { return /* binding */ AMPPrePublishPanel; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_edit_post__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/edit-post */ "@wordpress/edit-post");
/* harmony import */ var _wordpress_edit_post__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_edit_post__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_amp_document_status__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/amp-document-status */ "./assets/src/block-validation/components/amp-document-status/index.js");


/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */


const PLUGIN_NAME = 'amp-block-validation-pre-publish-panel';
const PLUGIN_ICON = '';
/**
 * AMP block validation pre-publish panel.
 */

function AMPPrePublishPanel() {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_edit_post__WEBPACK_IMPORTED_MODULE_2__.PluginPrePublishPanel, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('AMP', 'amp'),
    initialOpen: true
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_amp_document_status__WEBPACK_IMPORTED_MODULE_3__["default"], null));
}

/***/ }),

/***/ "./assets/src/block-validation/store/index.js":
/*!****************************************************!*\
  !*** ./assets/src/block-validation/store/index.js ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BLOCK_VALIDATION_STORE_KEY": function() { return /* binding */ BLOCK_VALIDATION_STORE_KEY; },
/* harmony export */   "INITIAL_STATE": function() { return /* binding */ INITIAL_STATE; },
/* harmony export */   "getStore": function() { return /* binding */ getStore; },
/* harmony export */   "createStore": function() { return /* binding */ createStore; }
/* harmony export */ });
/* harmony import */ var amp_block_validation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! amp-block-validation */ "amp-block-validation");
/* harmony import */ var amp_block_validation__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(amp_block_validation__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__);
/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */


const BLOCK_VALIDATION_STORE_KEY = 'amp/block-validation';
const SET_FETCHING_ERRORS_REQUEST_ERROR_MESSAGE = 'SET_FETCHING_ERRORS_REQUEST_ERROR_MESSAGE';
const SET_IS_FETCHING_ERRORS = 'SET_IS_FETCHING_ERRORS';
const SET_IS_POST_DIRTY = 'SET_IS_POST_DIRTY';
const SET_IS_SHOWING_REVIEWED = 'SET_IS_SHOWING_REVIEWED';
const SET_MAYBE_IS_POST_DIRTY = 'SET_MAYBE_IS_POST_DIRTY';
const SET_REVIEW_LINK = 'SET_REVIEW_LINK';
const SET_SUPPORT_LINK = 'SET_SUPPORT_LINK';
const SET_VALIDATION_ERRORS = 'SET_VALIDATION_ERRORS';
const INITIAL_STATE = {
  ampCompatibilityBroken: false,
  fetchingErrorsRequestErrorMessage: '',
  isPostDirty: false,
  isFetchingErrors: false,
  isShowingReviewed: false,
  keptMarkupValidationErrors: [],
  maybeIsPostDirty: false,
  rawValidationErrors: [],
  reviewLink: null,
  supportLink: null,
  reviewedValidationErrors: [],
  unreviewedValidationErrors: [],
  validationErrors: []
};
function getStore(initialState) {
  return {
    reducer: function () {
      var _action$validationErr;

      let state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
      let action = arguments.length > 1 ? arguments[1] : undefined;

      switch (action.type) {
        case SET_FETCHING_ERRORS_REQUEST_ERROR_MESSAGE:
          return { ...state,
            fetchingErrorsRequestErrorMessage: action.fetchingErrorsRequestErrorMessage
          };

        case SET_IS_FETCHING_ERRORS:
          return { ...state,
            isFetchingErrors: action.isFetchingErrors
          };

        case SET_IS_POST_DIRTY:
          return { ...state,
            isPostDirty: action.isPostDirty
          };

        case SET_IS_SHOWING_REVIEWED:
          return { ...state,
            isShowingReviewed: action.isShowingReviewed
          };

        case SET_MAYBE_IS_POST_DIRTY:
          return { ...state,
            maybeIsPostDirty: action.maybeIsPostDirty
          };

        case SET_REVIEW_LINK:
          return { ...state,
            reviewLink: action.reviewLink
          };

        case SET_SUPPORT_LINK:
          return { ...state,
            supportLink: action.supportLink
          };

        case SET_VALIDATION_ERRORS:
          return { ...state,
            ampCompatibilityBroken: Boolean((_action$validationErr = action.validationErrors.filter(_ref => {
              let {
                status
              } = _ref;
              return status === amp_block_validation__WEBPACK_IMPORTED_MODULE_0__.VALIDATION_ERROR_NEW_REJECTED_STATUS || status === amp_block_validation__WEBPACK_IMPORTED_MODULE_0__.VALIDATION_ERROR_ACK_REJECTED_STATUS;
            })) === null || _action$validationErr === void 0 ? void 0 : _action$validationErr.length),
            reviewedValidationErrors: action.validationErrors.filter(_ref2 => {
              let {
                status
              } = _ref2;
              return status === amp_block_validation__WEBPACK_IMPORTED_MODULE_0__.VALIDATION_ERROR_ACK_ACCEPTED_STATUS || status === amp_block_validation__WEBPACK_IMPORTED_MODULE_0__.VALIDATION_ERROR_ACK_REJECTED_STATUS;
            }),
            unreviewedValidationErrors: action.validationErrors.filter(_ref3 => {
              let {
                status
              } = _ref3;
              return status === amp_block_validation__WEBPACK_IMPORTED_MODULE_0__.VALIDATION_ERROR_NEW_ACCEPTED_STATUS || status === amp_block_validation__WEBPACK_IMPORTED_MODULE_0__.VALIDATION_ERROR_NEW_REJECTED_STATUS;
            }),
            keptMarkupValidationErrors: action.validationErrors.filter(_ref4 => {
              let {
                status
              } = _ref4;
              return status === amp_block_validation__WEBPACK_IMPORTED_MODULE_0__.VALIDATION_ERROR_NEW_REJECTED_STATUS || status === amp_block_validation__WEBPACK_IMPORTED_MODULE_0__.VALIDATION_ERROR_ACK_REJECTED_STATUS;
            }),
            validationErrors: action.validationErrors
          };

        default:
          return state;
      }
    },
    actions: {
      setFetchingErrorsRequestErrorMessage: fetchingErrorsRequestErrorMessage => ({
        type: SET_FETCHING_ERRORS_REQUEST_ERROR_MESSAGE,
        fetchingErrorsRequestErrorMessage
      }),
      setIsFetchingErrors: isFetchingErrors => ({
        type: SET_IS_FETCHING_ERRORS,
        isFetchingErrors
      }),
      setIsPostDirty: isPostDirty => ({
        type: SET_IS_POST_DIRTY,
        isPostDirty
      }),
      setIsShowingReviewed: isShowingReviewed => ({
        type: SET_IS_SHOWING_REVIEWED,
        isShowingReviewed
      }),
      setMaybeIsPostDirty: maybeIsPostDirty => ({
        type: SET_MAYBE_IS_POST_DIRTY,
        maybeIsPostDirty
      }),
      setReviewLink: reviewLink => ({
        type: SET_REVIEW_LINK,
        reviewLink
      }),
      setSupportLink: supportLink => ({
        type: SET_SUPPORT_LINK,
        supportLink
      }),
      setValidationErrors: validationErrors => ({
        type: SET_VALIDATION_ERRORS,
        validationErrors
      })
    },
    selectors: {
      getAMPCompatibilityBroken: _ref5 => {
        let {
          ampCompatibilityBroken
        } = _ref5;
        return ampCompatibilityBroken;
      },
      getFetchingErrorsRequestErrorMessage: _ref6 => {
        let {
          fetchingErrorsRequestErrorMessage
        } = _ref6;
        return fetchingErrorsRequestErrorMessage;
      },
      getIsFetchingErrors: _ref7 => {
        let {
          isFetchingErrors
        } = _ref7;
        return isFetchingErrors;
      },
      getIsPostDirty: _ref8 => {
        let {
          isPostDirty
        } = _ref8;
        return isPostDirty;
      },
      getIsShowingReviewed: _ref9 => {
        let {
          isShowingReviewed
        } = _ref9;
        return isShowingReviewed;
      },
      getMaybeIsPostDirty: _ref10 => {
        let {
          maybeIsPostDirty
        } = _ref10;
        return maybeIsPostDirty;
      },
      getReviewLink: _ref11 => {
        let {
          reviewLink
        } = _ref11;
        return reviewLink;
      },
      getSupportLink: _ref12 => {
        let {
          supportLink
        } = _ref12;
        return supportLink;
      },
      getReviewedValidationErrors: _ref13 => {
        let {
          reviewedValidationErrors
        } = _ref13;
        return reviewedValidationErrors;
      },
      getUnreviewedValidationErrors: _ref14 => {
        let {
          unreviewedValidationErrors
        } = _ref14;
        return unreviewedValidationErrors;
      },
      getKeptMarkupValidationErrors: _ref15 => {
        let {
          keptMarkupValidationErrors
        } = _ref15;
        return keptMarkupValidationErrors;
      },
      getValidationErrors: _ref16 => {
        let {
          validationErrors
        } = _ref16;
        return validationErrors;
      }
    },
    initialState
  };
}
/**
 * Register the store for block validation.
 *
 * @param {Object} initialState Initial store state.
 */

function createStore(initialState) {
  (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.registerStore)(BLOCK_VALIDATION_STORE_KEY, getStore(initialState));
}

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

/***/ "./assets/src/block-validation/components/error/style.css":
/*!****************************************************************!*\
  !*** ./assets/src/block-validation/components/error/style.css ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/src/block-validation/components/icon/style.css":
/*!***************************************************************!*\
  !*** ./assets/src/block-validation/components/icon/style.css ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/src/block-validation/components/sidebar-notification/style.css":
/*!*******************************************************************************!*\
  !*** ./assets/src/block-validation/components/sidebar-notification/style.css ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/src/block-validation/components/sidebar/style.css":
/*!******************************************************************!*\
  !*** ./assets/src/block-validation/components/sidebar/style.css ***!
  \******************************************************************/
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

/***/ "amp-block-validation":
/*!*************************************!*\
  !*** external "ampBlockValidation" ***!
  \*************************************/
/***/ (function(module) {

"use strict";
module.exports = ampBlockValidation;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = window["React"];

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/***/ (function(module) {

"use strict";
module.exports = window["lodash"];

/***/ }),

/***/ "@wordpress/api-fetch":
/*!**********************************!*\
  !*** external ["wp","apiFetch"] ***!
  \**********************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["apiFetch"];

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["blockEditor"];

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

/***/ "@wordpress/data":
/*!******************************!*\
  !*** external ["wp","data"] ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["data"];

/***/ }),

/***/ "@wordpress/edit-post":
/*!**********************************!*\
  !*** external ["wp","editPost"] ***!
  \**********************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["editPost"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/hooks":
/*!*******************************!*\
  !*** external ["wp","hooks"] ***!
  \*******************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["hooks"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "@wordpress/plugins":
/*!*********************************!*\
  !*** external ["wp","plugins"] ***!
  \*********************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["plugins"];

/***/ }),

/***/ "@wordpress/url":
/*!*****************************!*\
  !*** external ["wp","url"] ***!
  \*****************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["url"];

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
/*!**********************************************!*\
  !*** ./assets/src/block-validation/index.js ***!
  \**********************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/hooks */ "@wordpress/hooks");
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_plugins__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/plugins */ "@wordpress/plugins");
/* harmony import */ var _wordpress_plugins__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_plugins__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./store */ "./assets/src/block-validation/store/index.js");
/* harmony import */ var _components_with_amp_toolbar_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/with-amp-toolbar-button */ "./assets/src/block-validation/components/with-amp-toolbar-button/index.js");
/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */



(0,_store__WEBPACK_IMPORTED_MODULE_2__.createStore)(_store__WEBPACK_IMPORTED_MODULE_2__.INITIAL_STATE);

const plugins = __webpack_require__("./assets/src/block-validation/plugins sync recursive .*\\.js$");

plugins.keys().forEach(modulePath => {
  const {
    default: render,
    PLUGIN_NAME,
    PLUGIN_ICON
  } = plugins(modulePath);
  (0,_wordpress_plugins__WEBPACK_IMPORTED_MODULE_1__.registerPlugin)(PLUGIN_NAME, {
    icon: PLUGIN_ICON,
    render
  });
});
(0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__.addFilter)('editor.BlockEdit', 'ampBlockValidation/filterEdit', _components_with_amp_toolbar_button__WEBPACK_IMPORTED_MODULE_3__.withAMPToolbarButton, -99);
}();
/******/ })()
;
//# sourceMappingURL=amp-block-validation.js.map