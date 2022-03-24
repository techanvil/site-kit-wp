/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./assets/src/admin/theme-install/view/theme.js":
/*!******************************************************!*\
  !*** ./assets/src/admin/theme-install/view/theme.js ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var amp_themes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! amp-themes */ "amp-themes");
/* harmony import */ var amp_themes__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(amp_themes__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/**
 * External dependencies
 */
 // From WP inline script.

/**
 * WordPress dependencies
 */


const wpThemeView = wp.themes.view.Theme;
/* harmony default export */ __webpack_exports__["default"] = (wpThemeView.extend({
  /**
   * Check if "AMP Compatible" tab is open or not.
   */
  isAmpCompatibleTab() {
    const queryParams = new URLSearchParams(window.location.search.substr(1));
    return queryParams.get('browse') === amp_themes__WEBPACK_IMPORTED_MODULE_0__.AMP_COMPATIBLE;
  },

  /**
   * Render theme card.
   *
   * @param {...any} args Render arguments.
   */
  render() {
    var _this$$el;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    wpThemeView.prototype.render.apply(this, args);

    if (0 >= ((_this$$el = this.$el) === null || _this$$el === void 0 ? void 0 : _this$$el.length) || !this.$el[0]) {
      return;
    }

    const element = this.$el[0];
    const data = this.model.toJSON();
    let slug = data === null || data === void 0 ? void 0 : data.slug;

    if (!slug) {
      slug = data === null || data === void 0 ? void 0 : data.id;
    }

    if (slug && this.isAmpTheme(slug)) {
      /*
       * Note: the setTimeout is needed because when the user taps on the AMP Compatible tab, the UI will render
       * before history.pushState() is called, meaning isAmpCompatibleTab cannot be called yet to inspect the
       * current location. By waiting for the next tick, we can safely read it.
       */
      setTimeout(() => {
        if (this.isAmpCompatibleTab()) {
          return;
        }

        const messageElement = document.createElement('div');
        const iconElement = document.createElement('span');
        const tooltipElement = document.createElement('span');
        messageElement.classList.add('amp-extension-card-message');
        iconElement.classList.add('amp-logo-icon');
        tooltipElement.classList.add('tooltiptext');
        tooltipElement.append((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('This is known to work well with the AMP plugin.', 'amp'));
        messageElement.append(iconElement, tooltipElement);
        element.appendChild(messageElement);
      });
    }

    if (slug && !this.isWPORGTheme(slug)) {
      const externalLinkIcon = document.createElement('span');
      externalLinkIcon.classList.add('dashicons', 'dashicons-external');
      externalLinkIcon.setAttribute('aria-hidden', 'true');
      const screenReaderText = document.createElement('span');
      screenReaderText.classList.add('screen-reader-text');
      screenReaderText.append((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('(opens in a new tab)', 'amp'));
      const siteLinkButton = document.createElement('a');
      siteLinkButton.classList.add('button', 'button-primary');
      siteLinkButton.append((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Visit Site', 'amp'), screenReaderText, externalLinkIcon);

      if (data !== null && data !== void 0 && data.preview_url) {
        siteLinkButton.href = data.preview_url;
      } else {
        siteLinkButton.href = data.homepage;
      }

      siteLinkButton.target = '_blank';
      siteLinkButton.rel = 'noopener noreferrer';
      siteLinkButton.setAttribute('aria-label', (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.sprintf)(
      /* translators: %s: theme name. */
      (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Visit site of %s theme', 'amp'), data.name));
      const themeActions = element.querySelector('.theme-actions');

      if (themeActions) {
        themeActions.textContent = ''; // Remove children.

        themeActions.append(siteLinkButton);
      }

      const moreDetail = element.querySelector('.more-details');

      if (moreDetail) {
        moreDetail.textContent = ''; // Remove children.

        moreDetail.append((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Visit Site', 'amp'), externalLinkIcon.cloneNode(true));
      }
    }
  },

  /**
   * Prevent the preview of none WordPress org theme and redirect to theme site.
   *
   * @param {...any} args Preview arguments.
   */
  preview() {
    const data = this.model.toJSON();

    if (this.isWPORGTheme(data.slug)) {
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      wpThemeView.prototype.preview.apply(this, args);
    } else if (data !== null && data !== void 0 && data.preview_url) {
      window.open(data.preview_url, '_blank', 'noopener,noreferrer');
    }
  },

  /**
   * Check if a theme is AMP compatible or not.
   *
   * @param {string} slug Theme slug.
   * @return {boolean} True if theme is AMP compatible, Otherwise False.
   */
  isAmpTheme(slug) {
    return amp_themes__WEBPACK_IMPORTED_MODULE_0__.AMP_THEMES.includes(slug);
  },

  /**
   * Check if a theme is from WordPress org or not.
   *
   * @param {string} slug Theme slug.
   * @return {boolean} True if theme is listed in WordPress org, Otherwise False.
   */
  isWPORGTheme(slug) {
    return !amp_themes__WEBPACK_IMPORTED_MODULE_0__.NONE_WPORG_THEMES.includes(slug);
  }

}));

/***/ }),

/***/ "amp-themes":
/*!****************************!*\
  !*** external "ampThemes" ***!
  \****************************/
/***/ (function(module) {

module.exports = ampThemes;

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
/*!***********************************************!*\
  !*** ./assets/src/admin/amp-theme-install.js ***!
  \***********************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var amp_themes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! amp-themes */ "amp-themes");
/* harmony import */ var amp_themes__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(amp_themes__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_dom_ready__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/dom-ready */ "@wordpress/dom-ready");
/* harmony import */ var _wordpress_dom_ready__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_dom_ready__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _theme_install_view_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./theme-install/view/theme */ "./assets/src/admin/theme-install/view/theme.js");
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


const ampThemeInstall = {
  /**
   * Init function.
   */
  init() {
    this.addTab();
    this.overrideViews();
  },

  /**
   * Add a new tab for AMP-compatible themes on theme install page.
   */
  addTab() {
    const filterLinks = document.querySelector('.filter-links');

    if (!filterLinks) {
      return;
    }

    const listItem = document.createElement('li');
    const anchorElement = document.createElement('a');
    anchorElement.setAttribute('href', '#');
    anchorElement.setAttribute('data-sort', amp_themes__WEBPACK_IMPORTED_MODULE_0__.AMP_COMPATIBLE);
    anchorElement.append((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('AMP Compatible', 'amp'));
    listItem.appendChild(anchorElement);
    filterLinks.appendChild(listItem);
  },

  /**
   * Override theme view.
   */
  overrideViews() {
    wp.themes.view.Theme = _theme_install_view_theme__WEBPACK_IMPORTED_MODULE_3__["default"];
  }

};
_wordpress_dom_ready__WEBPACK_IMPORTED_MODULE_2___default()(() => {
  ampThemeInstall.init();
});
}();
/******/ })()
;
//# sourceMappingURL=amp-theme-install.js.map