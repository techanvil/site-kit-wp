/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./assets/src/amp-validation/counts/style.css":
/*!****************************************************!*\
  !*** ./assets/src/amp-validation/counts/style.css ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "@wordpress/api-fetch":
/*!**********************************!*\
  !*** external ["wp","apiFetch"] ***!
  \**********************************/
/***/ (function(module) {

module.exports = window["wp"]["apiFetch"];

/***/ }),

/***/ "@wordpress/dom-ready":
/*!**********************************!*\
  !*** external ["wp","domReady"] ***!
  \**********************************/
/***/ (function(module) {

module.exports = window["wp"]["domReady"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ (function(module) {

module.exports = window["wp"]["i18n"];

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
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
/*!***************************************************!*\
  !*** ./assets/src/amp-validation/counts/index.js ***!
  \***************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/api-fetch */ "@wordpress/api-fetch");
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_dom_ready__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/dom-ready */ "@wordpress/dom-ready");
/* harmony import */ var _wordpress_dom_ready__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_dom_ready__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.css */ "./assets/src/amp-validation/counts/style.css");
/**
 * WordPress dependencies
 */



/**
 * Internal dependencies
 */


/**
 * Get session storage key for storing the previously-fetched count.
 *
 * @param {string} itemId Menu item ID.
 * @return {string} Session storage key.
 */

function getSessionStorageKey(itemId) {
  return `${itemId}-last-count`;
}
/**
 * Sets the loading state on a menu item.
 *
 * @param {string} itemId Menu item ID.
 */


function setMenuItemIsLoading(itemId) {
  const itemEl = document.getElementById(itemId);

  if (!itemEl || itemEl.querySelector('.amp-count-loading')) {
    return;
  } // Add a loading spinner if we haven't obtained the count before or the last count was not zero.


  const lastCount = sessionStorage.getItem(getSessionStorageKey(itemId));

  if (!lastCount || '0' !== lastCount) {
    const loadingEl = document.createElement('span');
    loadingEl.classList.add('amp-count-loading');
    itemEl.append(loadingEl);
    itemEl.classList.add('awaiting-mod');
  }
}
/**
 * Sets a menu item count value.
 *
 * If the count is not a number or is `0`, the element that contains the count is instead removed (as it would be no
 * longer relevant).
 *
 * @param {string} itemId Menu item ID.
 * @param {number} count  Count to set.
 */


function setMenuItemCountValue(itemId, count) {
  const itemEl = document.getElementById(itemId);

  if (!itemEl) {
    return;
  }

  if (isNaN(count) || count === 0) {
    itemEl.parentNode.removeChild(itemEl);
    sessionStorage.setItem(getSessionStorageKey(itemId), '0');
  } else {
    const text = count.toLocaleString();
    itemEl.textContent = text;
    itemEl.classList.add('awaiting-mod'); // In case it wasn't set in setMenuItemIsLoading().

    sessionStorage.setItem(getSessionStorageKey(itemId), text);
  }
}
/**
 * Initializes the 'Validated URLs' and 'Error Index' menu items.
 */


function initializeMenuItemCounts() {
  setMenuItemIsLoading('amp-new-error-index-count');
  setMenuItemIsLoading('amp-new-validation-url-count');
}
/**
 * Updates the 'Validated URLs' and 'Error Index' menu items with their respective unreviewed count.
 *
 * @param {Object} counts                Counts for menu items.
 * @param {number} counts.validated_urls Unreviewed validated URLs count.
 * @param {number} counts.errors         Unreviewed validation errors count.
 */


function updateMenuItemCounts(counts) {
  const {
    validated_urls: newValidatedUrlCount,
    errors: newErrorCount
  } = counts;
  setMenuItemCountValue('amp-new-error-index-count', newErrorCount);
  setMenuItemCountValue('amp-new-validation-url-count', newValidatedUrlCount);
}
/**
 * Requests validation counts.
 */


function fetchValidationCounts() {
  _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_1___default()({
    path: '/amp/v1/unreviewed-validation-counts'
  }).then(counts => {
    updateMenuItemCounts(counts);
  }).catch(error => {
    updateMenuItemCounts({
      validated_urls: 0,
      errors: 0
    });

    const message = (error === null || error === void 0 ? void 0 : error.message) || (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('An unknown error occurred while retrieving the validation counts', 'amp'); // eslint-disable-next-line no-console


    console.error(`[AMP Plugin] ${message}`);
  });
}
/**
 * Fetches the validation counts only when the AMP submenu is open for the first time.
 *
 * @param {HTMLElement} root AMP submenu item.
 */


function createObserver(root) {
  // IntersectionObserver is not available in IE11, so just hide the counts entirely for that browser.
  if (!('IntersectionObserver' in window)) {
    updateMenuItemCounts({
      validated_urls: 0,
      errors: 0
    });
    return;
  }

  const target = root.querySelector('ul');
  const observer = new IntersectionObserver(_ref => {
    let [entry] = _ref;

    if (!entry || !entry.isIntersecting) {
      return;
    }

    observer.unobserve(target);
    fetchValidationCounts();
  }, {
    root
  });
  observer.observe(target);
}

_wordpress_dom_ready__WEBPACK_IMPORTED_MODULE_2___default()(() => {
  const ampMenuItem = document.getElementById('toplevel_page_amp-options'); // Bail if the AMP submenu is not in the DOM.

  if (!ampMenuItem) {
    return;
  }

  initializeMenuItemCounts(); // If the AMP submenu is opened, fetch validation counts as soon as possible. Thanks to the preload middleware for
  // `wp.apiFetch`, the validation count data should be available right away, so no actual HTTP request will be made.

  if (ampMenuItem.classList.contains('wp-menu-open')) {
    fetchValidationCounts();
  } else {
    createObserver(ampMenuItem);
  }
});
}();
/******/ })()
;
//# sourceMappingURL=amp-validation-counts.js.map