/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "amp-plugins":
/*!*****************************!*\
  !*** external "ampPlugins" ***!
  \*****************************/
/***/ (function(module) {

module.exports = ampPlugins;

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/***/ (function(module) {

module.exports = window["lodash"];

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
/*!************************************************!*\
  !*** ./assets/src/admin/amp-plugin-install.js ***!
  \************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var amp_plugins__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! amp-plugins */ "amp-plugins");
/* harmony import */ var amp_plugins__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(amp_plugins__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_dom_ready__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/dom-ready */ "@wordpress/dom-ready");
/* harmony import */ var _wordpress_dom_ready__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_dom_ready__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);
/**
 * External dependencies
 */
 // From WP inline script.


/**
 * WordPress dependencies
 */



const ampPluginInstall = {
  /**
   * Init function.
   */
  init() {
    if (this.isAmpCompatibleTab()) {
      this.removeAdditionalInfo();
    } else {
      this.addAmpMessage();
    }

    this.addAmpMessageInSearchResult();
  },

  /**
   * Check if "AMP Compatible" tab is open or not.
   *
   * @return {boolean} Is AMP-compatible tab.
   */
  isAmpCompatibleTab() {
    const queryParams = new URLSearchParams(window.location.search.substr(1));
    return queryParams.get('tab') === amp_plugins__WEBPACK_IMPORTED_MODULE_0__.AMP_COMPATIBLE;
  },

  /**
   * Add message for AMP Compatibility in AMP-compatible plugins card after search result comes in.
   */
  addAmpMessageInSearchResult() {
    const pluginFilterForm = document.getElementById('plugin-filter');
    const pluginInstallSearch = document.querySelector('.plugin-install-php .wp-filter-search');

    if (!pluginFilterForm || !pluginInstallSearch) {
      return;
    }

    const startSearchResults = (0,lodash__WEBPACK_IMPORTED_MODULE_1__.debounce)(() => {
      pluginInstallSearch.removeEventListener('input', startSearchResults, {
        once: true
      }); // For IE 11 which doesn't support once events.
      // Replace the class for our custom AMP-compatible tab once doing a search.

      const wrap = document.querySelector('.plugin-install-tab-amp-compatible');

      if (wrap) {
        wrap.classList.remove('plugin-install-tab-amp-compatible');
        wrap.classList.add('plugin-install-tab-search-result');
      } // Start watching for changes the first time a search is being made.


      const mutationObserver = new MutationObserver(() => {
        this.addAmpMessage();
      });
      mutationObserver.observe(pluginFilterForm, {
        childList: true
      });
    }, 1000); // See timeout in core: <https://github.com/WordPress/WordPress/blob/b87617e2719d114d123a88ed7e489170f0204735/wp-admin/js/updates.js#L2578>

    pluginInstallSearch.addEventListener('input', startSearchResults, {
      once: true
    });
  },

  /**
   * Add message for AMP Compatibility in AMP-compatible plugins card.
   */
  addAmpMessage() {
    for (const pluginSlug of amp_plugins__WEBPACK_IMPORTED_MODULE_0__.AMP_PLUGINS) {
      const pluginCardElement = document.querySelector(`.plugin-card.plugin-card-${pluginSlug}`);

      if (!pluginCardElement) {
        continue;
      } // Skip cards that have already been processed.


      if (pluginCardElement.classList.contains('amp-extension-card-message')) {
        continue;
      }

      const messageElement = document.createElement('div');
      const iconElement = document.createElement('span');
      const tooltipElement = document.createElement('span');
      messageElement.classList.add('amp-extension-card-message');
      iconElement.classList.add('amp-logo-icon');
      tooltipElement.classList.add('tooltiptext');
      tooltipElement.append((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('This is known to work well with the AMP plugin.', 'amp'));
      messageElement.append(iconElement);
      messageElement.append(tooltipElement);
      pluginCardElement.appendChild(messageElement);
    }
  },

  /**
   * Remove the additional info from the plugin card in the "AMP Compatible" tab.
   */
  removeAdditionalInfo() {
    const pluginCardBottom = document.querySelectorAll('.plugin-install-tab-amp-compatible .plugin-card-bottom');

    for (const elementNode of pluginCardBottom) {
      elementNode.remove();
    }
  }

};
_wordpress_dom_ready__WEBPACK_IMPORTED_MODULE_2___default()(() => {
  ampPluginInstall.init();
});
}();
/******/ })()
;
//# sourceMappingURL=amp-plugin-install.js.map