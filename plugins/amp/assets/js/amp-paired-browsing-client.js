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
/*!****************************************************!*\
  !*** ./assets/src/admin/paired-browsing/client.js ***!
  \****************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_dom_ready__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/dom-ready */ "@wordpress/dom-ready");
/* harmony import */ var _wordpress_dom_ready__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_dom_ready__WEBPACK_IMPORTED_MODULE_0__);
/**
 * WordPress dependencies
 */

const {
  parent,
  ampPairedBrowsingClientData
} = window;
const {
  ampUrl,
  nonAmpUrl,
  isAmpDocument
} = ampPairedBrowsingClientData;
const nonAmpUrlObject = new URL(nonAmpUrl);
/**
 * Modify document for paired browsing.
 */

function modifyDocumentForPairedBrowsing() {
  // Scrolling is not synchronized if `scroll-behavior` is set to `smooth`.
  document.documentElement.style.setProperty('scroll-behavior', 'auto', 'important');

  if (isAmpDocument) {
    // Hide the paired browsing menu item.
    const pairedBrowsingMenuItem = document.getElementById('wp-admin-bar-amp-paired-browsing');

    if (pairedBrowsingMenuItem) {
      pairedBrowsingMenuItem.remove();
    } // Hide menu item to view non-AMP version.


    const ampViewBrowsingItem = document.getElementById('wp-admin-bar-amp-view');

    if (ampViewBrowsingItem) {
      ampViewBrowsingItem.remove();
    }
  } else {
    // No need to show the AMP menu in the Non-AMP window.
    const ampMenuItem = document.getElementById('wp-admin-bar-amp');
    ampMenuItem.remove();
  }
}
/**
 * Send message to app.
 *
 * @param {Window} win  Window.
 * @param {string} type Type.
 * @param {Object} data Data.
 */


function sendMessage(win, type) {
  let data = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  win.postMessage({
    type,
    ...data,
    ampPairedBrowsing: true
  }, nonAmpUrlObject.origin // Because the paired browsing app is accessed via the canonical URL.
  );
}

let initialized = false;
/**
 * Receive message.
 *
 * @param {MessageEvent} event
 */

function receiveMessage(event) {
  if (!event.data || !event.data.ampPairedBrowsing || !event.data.type || !event.source || nonAmpUrlObject.origin !== event.origin) {
    return;
  }

  switch (event.data.type) {
    case 'init':
      if (!initialized) {
        initialized = true;
        receiveInit();
      }

      break;

    case 'scroll':
      receiveScroll(event.data);
      break;

    case 'replaceLocation':
      receiveReplaceLocation(event.data);
      break;

    default:
  }
}
/**
 * Send scroll.
 */


function sendScroll() {
  sendMessage(parent, 'scroll', {
    x: window.scrollX,
    y: window.scrollY
  });
}
/**
 * Receive scroll.
 *
 * @param {Object} data
 * @param {number} data.x
 * @param {number} data.y
 */


function receiveScroll(_ref) {
  let {
    x,
    y
  } = _ref;
  window.scrollTo(x, y);
}
/**
 * Handle click event.
 *
 * @param {MouseEvent} event
 */


function handleClick(event) {
  const element = event.target;
  const link = element.matches('[href]') ? element : element.closest('[href]');

  if (link) {
    sendMessage(parent, 'navigate', {
      href: link.href
    });
  }
}
/**
 * Receive replace location.
 *
 * @param {string} href
 */


function receiveReplaceLocation(_ref2) {
  let {
    href
  } = _ref2;
  window.location.replace(href);
}
/**
 * Send loaded.
 */


function sendLoaded() {
  sendMessage(parent, 'loaded', {
    isAmpDocument,
    ampUrl,
    nonAmpUrl,
    documentTitle: document.title
  });
}
/**
 * Send heartbeat.
 */


function sendHeartbeat() {
  sendMessage(parent, 'heartbeat');
}
/**
 * Receive init.
 */


function receiveInit() {
  sendHeartbeat();
  setInterval(sendHeartbeat, 500);
  __webpack_require__.g.document.addEventListener('click', handleClick, {
    passive: true
  });
  __webpack_require__.g.addEventListener('scroll', sendScroll, {
    passive: true
  });
  _wordpress_dom_ready__WEBPACK_IMPORTED_MODULE_0___default()(modifyDocumentForPairedBrowsing);
  sendLoaded();
}

__webpack_require__.g.addEventListener('message', receiveMessage);
}();
/******/ })()
;
//# sourceMappingURL=amp-paired-browsing-client.js.map