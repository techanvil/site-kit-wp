/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./assets/src/admin/paired-browsing/app.css":
/*!**************************************************!*\
  !*** ./assets/src/admin/paired-browsing/app.css ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "@wordpress/url":
/*!*****************************!*\
  !*** external ["wp","url"] ***!
  \*****************************/
/***/ (function(module) {

module.exports = window["wp"]["url"];

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/defineProperty.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

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
/*!*************************************************!*\
  !*** ./assets/src/admin/paired-browsing/app.js ***!
  \*************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _wordpress_url__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/url */ "@wordpress/url");
/* harmony import */ var _wordpress_url__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_url__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _app_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.css */ "./assets/src/admin/paired-browsing/app.css");


/**
 * WordPress dependencies
 */

/**
 * Internal dependencies
 */


const {
  ampPairedBrowsingAppData,
  history
} = window;
const {
  noampQueryVar,
  noampMobile,
  ampPairedBrowsingQueryVar,
  documentTitlePrefix
} = ampPairedBrowsingAppData;

class PairedBrowsingApp {
  /**
   * Disconnected client.
   *
   * @type {HTMLIFrameElement}
   */

  /**
   * AMP IFrame
   *
   * @type {HTMLIFrameElement}
   */

  /**
   * Timestamp when the AMP iframe last sent a heartbeat.
   *
   * @type {number}
   */

  /**
   * Non-AMP IFrame
   *
   * @type {HTMLIFrameElement}
   */

  /**
   * Timestamp when the non-AMP iframe last sent a heartbeat.
   *
   * @type {number}
   */

  /**
   * Current AMP URL.
   *
   * @type {string}
   */

  /**
   * Initial URL object for the AMP URL.
   *
   * @type {URL}
   */

  /**
   * The most recent URL that was being navigated to in the AMP window.
   *
   * @type {?string}
   */

  /**
   * Current non-AMP URL.
   *
   * @type {string}
   */

  /**
   * Initial URL object for the non-AMP URL.
   *
   * @type {URL}
   */

  /**
   * The most recent URL that was being navigated to in the non-AMP window.
   *
   * @type {?string}
   */

  /**
   * Non-AMP Link
   *
   * @type {HTMLAnchorElement}
   */

  /**
   * AMP Link
   *
   * @type {HTMLAnchorElement}
   */

  /**
   * Active iframe.
   *
   * @type {?HTMLIFrameElement}
   */

  /**
   * Constructor.
   */
  constructor() {
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "disconnectedClient", void 0);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "ampIframe", void 0);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "ampHeartbeatTimestamp", Date.now());

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "nonAmpIframe", void 0);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "nonAmpHeartbeatTimestamp", Date.now());

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "currentAmpUrl", void 0);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "initialAmpUrlObject", void 0);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "navigateAmpUrl", void 0);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "currentNonAmpUrl", void 0);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "initialNonAmpUrlObject", void 0);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "navigateNonAmpUrl", void 0);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "nonAmpLink", void 0);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "ampLink", void 0);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "activeIframe", void 0);

    this.nonAmpIframe = document.querySelector('#non-amp iframe');
    this.ampIframe = document.querySelector('#amp iframe');
    this.currentNonAmpUrl = this.nonAmpIframe.src;
    this.initialNonAmpUrlObject = new URL(this.currentNonAmpUrl);
    this.currentAmpUrl = this.ampIframe.src;
    this.initialAmpUrlObject = new URL(this.currentNonAmpUrl); // Link to exit paired browsing.

    this.nonAmpLink =
    /** @type {HTMLAnchorElement} */
    document.getElementById('non-amp-link');
    this.ampLink =
    /** @type {HTMLAnchorElement} */
    document.getElementById('amp-link'); // Overlay that is displayed on the client that becomes disconnected.

    this.disconnectOverlay = document.querySelector('.disconnect-overlay');
    this.disconnectButtons = {
      exit: document.querySelector('.disconnect-overlay .button.exit'),
      goBack: document.querySelector('.disconnect-overlay .button.go-back')
    };
    this.addDisconnectButtonListeners();
    __webpack_require__.g.addEventListener('message', event => {
      this.receiveMessage(event);
    }); // Set the active iframe based on which got the last mouseenter.
    // Note that setting activeIframe may get set by receiveScroll if the user starts scrolling
    // before moving the mouse.

    document.getElementById('non-amp').addEventListener('mouseenter', () => {
      this.activeIframe = this.nonAmpIframe;
    });
    document.getElementById('amp').addEventListener('mouseenter', () => {
      this.activeIframe = this.ampIframe;
    }); // Load clients.

    Promise.all(this.getIframeLoadedPromises()).then(() => {
      setInterval(() => {
        this.checkConnectedClients();
      }, 100);
    });
  }
  /**
   * Return whether the window is for the AMP page.
   *
   * @param {Window} win Window.
   * @return {boolean} Whether AMP window.
   */


  isAmpWindow(win) {
    return win === this.ampIframe.contentWindow;
  }
  /**
   * Return whether the window is for the non-AMP page.
   *
   * @param {Window} win Window.
   * @return {boolean} Whether non-AMP window.
   */


  isNonAmpWindow(win) {
    return win === this.nonAmpIframe.contentWindow;
  }
  /**
   * Send message to app.
   *
   * @param {Window} win  Window.
   * @param {string} type Type.
   * @param {Object} data Data.
   */


  sendMessage(win, type) {
    let data = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    win.postMessage({
      type,
      ...data,
      ampPairedBrowsing: true
    }, this.isAmpWindow(win) ? this.currentAmpUrl : this.currentNonAmpUrl);
  }
  /**
   * Receive message.
   *
   * @param {MessageEvent} event
   */


  receiveMessage(event) {
    if (!event.data || !event.data.type || !event.data.ampPairedBrowsing || !event.source) {
      return;
    }

    if (![this.initialNonAmpUrlObject.origin, this.initialAmpUrlObject.origin].includes(event.origin)) {
      return;
    }

    if (!this.isAmpWindow(event.source) && !this.isNonAmpWindow(event.source)) {
      return;
    }

    switch (event.data.type) {
      case 'loaded':
        this.receiveLoaded(event.data, event.source);
        break;

      case 'scroll':
        this.receiveScroll(event.data, event.source);
        break;

      case 'heartbeat':
        this.receiveHeartbeat(event.source);
        break;

      case 'navigate':
        this.receiveNavigate(event.data, event.source);
        break;

      default:
    }
  }
  /**
   * Return promises to load iframes asynchronously.
   *
   * @return {Promise<void>[]} Promises that determine if the iframes are loaded.
   */


  getIframeLoadedPromises() {
    return [new Promise(resolve => {
      this.nonAmpIframe.addEventListener('load', resolve);
    }), new Promise(resolve => {
      this.ampIframe.addEventListener('load', resolve);
    })];
  }
  /**
   * Receive heartbeat.
   *
   * @param {Window} sourceWindow The source window.
   */


  receiveHeartbeat(sourceWindow) {
    if (this.isAmpWindow(sourceWindow)) {
      this.ampHeartbeatTimestamp = Date.now();
    } else {
      this.nonAmpHeartbeatTimestamp = Date.now();
    }
  }
  /**
   * Receive navigate.
   *
   * @param {Object} data         Data.
   * @param {string} data.href    Href.
   * @param {Window} sourceWindow The source window.
   */


  receiveNavigate(_ref, sourceWindow) {
    let {
      href
    } = _ref;

    if (this.isAmpWindow(sourceWindow)) {
      this.navigateAmpUrl = href;
    } else {
      this.navigateNonAmpUrl = href;
    }
  }
  /**
   * Check connected clients.
   */


  checkConnectedClients() {
    this.sendMessage(this.ampIframe.contentWindow, 'init');
    this.sendMessage(this.nonAmpIframe.contentWindow, 'init');

    if (!this.isClientConnected(this.ampIframe)) {
      this.showDisconnectOverlay(this.ampIframe);
    } else if (!this.isClientConnected(this.nonAmpIframe)) {
      this.showDisconnectOverlay(this.nonAmpIframe);
    } else {
      this.disconnectOverlay.classList.remove('disconnected');
    }
  }
  /**
   * Add event listeners for buttons on disconnect overlay.
   */


  addDisconnectButtonListeners() {
    // The 'Go back' button goes back to the previous page of the parent window.
    this.disconnectButtons.goBack.addEventListener('click', () => {
      window.history.back();
    });
  }
  /**
   * Shows the 'disconnected' overlay for the supplied iframe.
   *
   * @param {HTMLIFrameElement} iframe The iframe that hosts the paired browsing client.
   */


  showDisconnectOverlay(iframe) {
    // Show the exit link if we know the URL that the user was last trying to go to.
    const navigateUrl = this.ampIframe === iframe ? this.navigateAmpUrl : this.navigateNonAmpUrl;

    if (navigateUrl) {
      this.disconnectButtons.exit.hidden = false;
      this.disconnectButtons.exit.href = navigateUrl;
    } else {
      this.disconnectButtons.exit.hidden = true;
    } // Show the 'Go Back' button if the parent window has history.


    this.disconnectButtons.goBack.hidden = 0 >= window.history.length; // Applying the 'amp' class will overlay it on the AMP iframe.

    this.disconnectOverlay.classList.toggle('amp', this.ampIframe === iframe);
    this.disconnectOverlay.classList.add('disconnected');
  }
  /**
   * Determines the status of the paired browsing client in an iframe.
   *
   * @param {HTMLIFrameElement} iframe The iframe.
   * @return {boolean} Whether the client is connected.
   */


  isClientConnected(iframe) {
    const threshold = 2000;

    if (iframe === this.ampIframe) {
      return Date.now() - this.ampHeartbeatTimestamp < threshold;
    }

    return Date.now() - this.nonAmpHeartbeatTimestamp < threshold;
  }
  /**
   * Purge removable query vars from the supplied URL.
   *
   * @param {string} url URL string.
   * @return {string} Modified URL without any AMP related query variables.
   */


  purgeRemovableQueryVars(url) {
    return (0,_wordpress_url__WEBPACK_IMPORTED_MODULE_1__.removeQueryArgs)(url, noampQueryVar, ampPairedBrowsingQueryVar);
  }
  /**
   * Adds the AMP paired browsing query variable to the supplied URL.
   *
   * @param {string} url URL string.
   * @return {string} Modified URL with the AMP paired browsing query variable.
   */


  addPairedBrowsingQueryVar(url) {
    return (0,_wordpress_url__WEBPACK_IMPORTED_MODULE_1__.addQueryArgs)(url, {
      [ampPairedBrowsingQueryVar]: '1'
    });
  }
  /**
   * Removes the URL hash from the supplied URL.
   *
   * @param {string} url URL string.
   * @return {string} Modified URL without the hash.
   */


  removeUrlHash(url) {
    const parsedUrl = new URL(url);
    parsedUrl.hash = '';
    return parsedUrl.href;
  }
  /**
   * Replace location.
   *
   * @param {HTMLIFrameElement} iframe IFrame Element.
   * @param {string}            url    URL.
   */


  replaceLocation(iframe, url) {
    this.sendMessage(iframe.contentWindow, 'replaceLocation', {
      href: url
    });
  }
  /**
   * Receive scroll.
   *
   * @param {Object} data         Data.
   * @param {number} data.x       X position.
   * @param {number} data.y       Y position.
   * @param {Window} sourceWindow The source window.
   */


  receiveScroll(_ref2, sourceWindow) {
    let {
      x,
      y
    } = _ref2;

    // Rely on scroll event to determine initially-active iframe before mouse first moves.
    if (!this.activeIframe) {
      this.activeIframe = this.isAmpWindow(sourceWindow) ? this.ampIframe : this.nonAmpIframe;
    } // Ignore scroll events from the non-active iframe.


    if (!this.activeIframe || sourceWindow !== this.activeIframe.contentWindow) {
      return;
    }

    const otherWindow = this.isAmpWindow(sourceWindow) ? this.nonAmpIframe.contentWindow : this.ampIframe.contentWindow;
    this.sendMessage(otherWindow, 'scroll', {
      x,
      y
    });
  }
  /**
   * Receive loaded.
   *
   * @param {Object}  data               Data.
   * @param {boolean} data.isAmpDocument Whether the document is actually an AMP page.
   * @param {string}  data.ampUrl        The AMP URL.
   * @param {string}  data.nonAmpUrl     The non-AMP URL.
   * @param {string}  data.documentTitle The title of the document.
   * @param {Window}  sourceWindow       The source window.
   */


  receiveLoaded(_ref3, sourceWindow) {
    let {
      isAmpDocument,
      ampUrl,
      nonAmpUrl,
      documentTitle
    } = _ref3;
    const isAmpSource = this.isAmpWindow(sourceWindow);
    const sourceIframe = isAmpSource ? this.ampIframe : this.nonAmpIframe;

    if (isAmpSource) {
      // Force the AMP iframe to always have an AMP URL.
      if (!isAmpDocument) {
        this.replaceLocation(sourceIframe, ampUrl);
        return;
      }

      this.currentAmpUrl = ampUrl; // Update the AMP link above the iframe used for exiting paired browsing.

      this.ampLink.href = (0,_wordpress_url__WEBPACK_IMPORTED_MODULE_1__.removeQueryArgs)(ampUrl, noampQueryVar);
    } else {
      // Force the non-AMP iframe to always have a non-AMP URL.
      if (isAmpDocument) {
        this.replaceLocation(sourceIframe, nonAmpUrl);
        return;
      }

      this.currentNonAmpUrl = nonAmpUrl; // Update the non-AMP link above the iframe used for exiting paired browsing.

      this.nonAmpLink.href = (0,_wordpress_url__WEBPACK_IMPORTED_MODULE_1__.addQueryArgs)(nonAmpUrl, {
        [noampQueryVar]: noampMobile
      });
    } // Make sure the opposite iframe is set to match.


    const thisCurrentUrl = isAmpSource ? nonAmpUrl : ampUrl;
    const otherCurrentUrl = isAmpSource ? this.currentNonAmpUrl : this.currentAmpUrl;

    if (this.purgeRemovableQueryVars(this.removeUrlHash(thisCurrentUrl)) !== this.purgeRemovableQueryVars(this.removeUrlHash(otherCurrentUrl))) {
      const url = isAmpSource ? nonAmpUrl : ampUrl;
      this.replaceLocation(isAmpSource ? this.nonAmpIframe : this.ampIframe, this.purgeRemovableQueryVars(url));
      return;
    }

    document.title = documentTitlePrefix + ' ' + documentTitle;
    history.replaceState({}, '', this.addPairedBrowsingQueryVar(this.purgeRemovableQueryVars(nonAmpUrl)));
  }

}

window.pairedBrowsingApp = new PairedBrowsingApp();
}();
/******/ })()
;
//# sourceMappingURL=amp-paired-browsing-app.js.map