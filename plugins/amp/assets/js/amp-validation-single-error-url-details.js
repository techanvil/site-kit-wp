/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "@wordpress/dom-ready":
/*!**********************************!*\
  !*** external ["wp","domReady"] ***!
  \**********************************/
/***/ (function(module) {

module.exports = window["wp"]["domReady"];

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
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
/*!******************************************************************************!*\
  !*** ./assets/src/amp-validation/amp-validation-single-error-url-details.js ***!
  \******************************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_dom_ready__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/dom-ready */ "@wordpress/dom-ready");
/* harmony import */ var _wordpress_dom_ready__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_dom_ready__WEBPACK_IMPORTED_MODULE_0__);
/**
 * WordPress dependencies
 */

/**
 * Toggles the contents of a details element as an additional table tr.
 */

class RowToggler {
  constructor(tr, index, activeTermId) {
    this.tr = tr;
    this.index = index;
    this.activeTermId = activeTermId;
  }
  /**
   * Sets up the new tr and adds an event listener to toggle details.
   */


  init() {
    this.details = this.tr.querySelector('.column-details details');

    if (this.details) {
      this.createNewTr();
      const togglers = [...this.tr.querySelectorAll('.single-url-detail-toggle'), this.details.querySelector('summary')];
      togglers.forEach(el => {
        el.addEventListener('click', () => {
          this.toggle(el);
        });
      });
    }

    this.maybeInitiallyOpenRow();
  }
  /**
   * If the term ID retrieved from the URL query param matches this row's term ID, expand the row on load.
   */


  maybeInitiallyOpenRow() {
    if (!this.activeTermId || this.tr.id !== `tag-${this.activeTermId}`) {
      return;
    }

    this.toggle(this.tr.querySelector('.single-url-detail-toggle'));
  }
  /**
   * Creates the details table row from the original row's <details> element content, minus the summary.
   */


  createNewTr() {
    this.newTr = document.createElement('tr');
    this.newTr.classList.add('details');
    const newCell = document.createElement('td');
    newCell.setAttribute('colspan', this.getRowColspan());

    for (const childNode of this.details.childNodes) {
      if ('SUMMARY' !== childNode.tagName) {
        newCell.appendChild(childNode.cloneNode(true));
      }
    }

    this.newTr.appendChild(newCell);
  }
  /**
   * Gets the number of cells within the original row.
   *
   * @return {number} The number of cells.
   */


  getRowColspan() {
    return [...this.tr.childNodes].filter(childNode => ['TD', 'TH'].includes(childNode.tagName)).length;
  }
  /**
   * Toggles the additional row.
   *
   * @param {Object} target The click event target.
   */


  toggle(target) {
    if (this.tr.classList.contains('expanded')) {
      this.onClose(target);
    } else {
      this.onOpen(target);
    }
  }
  /**
   * Adds the additional row.
   *
   * @param {Object} target The click event target.
   */


  onOpen(target) {
    this.tr.parentNode.insertBefore(this.newTr, this.tr.nextSibling);
    this.tr.classList.add('expanded');

    if ('SUMMARY' !== target.tagName) {
      // This browser will do this if the summary was clicked.
      this.details.setAttribute('open', true);
    }
  }
  /**
   * Removes the additional row.
   *
   * @param {Object} target The click event target.
   */


  onClose(target) {
    this.tr.parentNode.removeChild(this.newTr);
    this.tr.classList.remove('expanded');

    if ('SUMMARY' !== target.tagName) {
      this.details.removeAttribute('open');
    }
  }

}
/**
 * Sets up expandable details for errors when viewing a single URL error list.
 */


class ErrorRows {
  constructor(activeTermId) {
    this.rows = [...document.querySelectorAll('.wp-list-table tr[id^="tag-"]')].map((tr, index) => {
      const rowHandler = new RowToggler(tr, index, activeTermId);
      rowHandler.init();
      return rowHandler;
    }).filter(row => row.details);
  }

  init() {
    this.addToggleAllListener();
  }
  /**
   * Handle 'toggle all' buttons on the page.
   */


  addToggleAllListener() {
    let open = false;
    const toggleButtons = [...document.querySelectorAll('.column-details button.error-details-toggle')];

    const onButtonClick = target => {
      open = !open;
      this.rows.forEach(row => {
        if (open) {
          row.onOpen(target);
        } else {
          row.onClose(target);
        }
      });
    };

    __webpack_require__.g.addEventListener('click', event => {
      if (toggleButtons.includes(event.target)) {
        onButtonClick(event.target);
      }
    });
  }

}

_wordpress_dom_ready__WEBPACK_IMPORTED_MODULE_0___default()(() => {
  let activeTermId = null;
  const matches = window.location.hash.match(/^#tag-(\d+)/);

  if (matches) {
    activeTermId = parseInt(matches[1]);
  }

  new ErrorRows(activeTermId).init();
});
}();
/******/ })()
;
//# sourceMappingURL=amp-validation-single-error-url-details.js.map