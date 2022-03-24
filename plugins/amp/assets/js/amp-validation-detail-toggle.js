/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./assets/src/amp-validation/set-validation-error-rows-classes.js":
/*!************************************************************************!*\
  !*** ./assets/src/amp-validation/set-validation-error-rows-classes.js ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* export default binding */ __WEBPACK_DEFAULT_EXPORT__; }
/* harmony export */ });
/**
 * Set the initial class names on the errors rows.
 *
 * This is needed because \WP_Terms_List_Table::single_row() does not allow for additional
 * attributes to be added to the <tr> element.
 */
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  document.querySelectorAll('tr[id]').forEach(row => {
    setStatusNew(row);
    setStatusKept(row);
  });
}
/**
 * Set the initial 'new' (aka 'unseen') class names on the rows based on the presence of a hidden input value.
 *
 * @param {HTMLTableRowElement} row HTML row element.
 */

function setStatusNew(row) {
  const input = row.querySelector('.amp-validation-error-new');

  if (!input) {
    return;
  }

  row.classList.toggle('new', Boolean(parseInt(input.value)));
}
/**
 * Set the 'kept' class names based on the select input field state.
 *
 * @param {HTMLTableRowElement} row HTML row element.
 */


function setStatusKept(row) {
  const input = row.querySelector('.amp-validation-error-status');

  if (!input) {
    return;
  }

  const {
    tagName,
    value
  } = input;
  const hasClass = tagName === 'SELECT' ? value === '2' // See AMP_Validation_Error_Taxonomy::VALIDATION_ERROR_ACK_REJECTED_STATUS.
  : value === '0'; // '0' -> kept; '1' -> removed

  row.classList.toggle('kept', hasClass);
}

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
/*!*******************************************************************!*\
  !*** ./assets/src/amp-validation/amp-validation-detail-toggle.js ***!
  \*******************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_dom_ready__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/dom-ready */ "@wordpress/dom-ready");
/* harmony import */ var _wordpress_dom_ready__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_dom_ready__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _set_validation_error_rows_classes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./set-validation-error-rows-classes */ "./assets/src/amp-validation/set-validation-error-rows-classes.js");
/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */


const OPEN_CLASS = 'is-open';
/**
 * Adds detail toggle buttons to the header and footer rows of the validation error "details" column.
 * The buttons are added via JS because there's no easy way to append them to the heading of a sortable
 * table column via backend code.
 *
 * @param {string} containerSelector Selector for elements that will have the button added.
 * @param {string} ariaLabel         Screen reader label for the button.
 * @return {Array} Array of added buttons.
 */

function addToggleButtons(containerSelector, ariaLabel) {
  const addButton = container => {
    const button = document.createElement('button');
    button.setAttribute('aria-label', ariaLabel);
    button.setAttribute('type', 'button');
    button.setAttribute('class', 'error-details-toggle');
    container.appendChild(button);
    return button;
  };

  return [...document.querySelectorAll(containerSelector)].map(container => addButton(container));
}

function addToggleAllListener(_ref) {
  let {
    btn,
    toggleAllButtonSelector = null,
    targetDetailsSelector
  } = _ref;
  let open = false;
  const targetDetails = [...document.querySelectorAll(targetDetailsSelector)];
  let toggleAllButtons = [];

  if (toggleAllButtonSelector) {
    toggleAllButtons = [...document.querySelectorAll(toggleAllButtonSelector)];
  }

  const onButtonClick = () => {
    open = !open;
    toggleAllButtons.forEach(toggleAllButton => {
      toggleAllButton.classList.toggle(OPEN_CLASS);
    });
    targetDetails.forEach(detail => {
      if (open) {
        detail.setAttribute('open', true);
      } else {
        detail.removeAttribute('open');
      }
    });
  };

  btn.addEventListener('click', onButtonClick);
}

_wordpress_dom_ready__WEBPACK_IMPORTED_MODULE_0___default()(() => {
  addToggleButtons('th.column-details.manage-column', (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Toggle all details', 'amp')).forEach(btn => {
    addToggleAllListener({
      btn,
      toggleAllButtonSelector: '.column-details button.error-details-toggle',
      targetDetailsSelector: '.column-details details'
    });
  });
  addToggleButtons('th.manage-column.column-sources_with_invalid_output', (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Toggle all sources', 'amp')).forEach(btn => {
    addToggleAllListener({
      btn,
      toggleAllButtonSelector: '.column-sources_with_invalid_output button.error-details-toggle',
      targetDetailsSelector: 'details.source'
    });
  });
  (0,_set_validation_error_rows_classes__WEBPACK_IMPORTED_MODULE_2__["default"])();
});
}();
/******/ })()
;
//# sourceMappingURL=amp-validation-detail-toggle.js.map