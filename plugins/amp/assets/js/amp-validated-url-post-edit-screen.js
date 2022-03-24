/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./assets/src/amp-validation/copy-to-clipboard-buttons.js":
/*!****************************************************************!*\
  !*** ./assets/src/amp-validation/copy-to-clipboard-buttons.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "handleCopyToClipboardButtons": function() { return /* binding */ handleCopyToClipboardButtons; }
/* harmony export */ });
/* harmony import */ var clipboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! clipboard */ "./node_modules/clipboard/dist/clipboard.js");
/* harmony import */ var clipboard__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(clipboard__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _get_url_validation_table_rows__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./get-url-validation-table-rows */ "./assets/src/amp-validation/get-url-validation-table-rows.js");
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
 * Success handler, called when data is copied to the clipboard.
 *
 * @param {Object}      event
 * @param {HTMLElement} event.trigger The element triggering the event.
 */

function onSuccess(_ref) {
  let {
    trigger
  } = _ref;
  trigger.focus();

  const newInnerText = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Copied to clipboard', 'amp'); // Exit if the user has already clicked the button and we are still within the
  // 4000ms before the setTimeout callback runs.


  if (trigger.innerText === newInnerText) {
    return;
  }

  const originalText = trigger.innerText;
  trigger.innerText = newInnerText;
  setTimeout(() => {
    if (document.body.contains(trigger)) {
      trigger.innerText = originalText;
    }
  }, 4000);
}
/**
 * Sets up the "Copy to clipboard" buttons on the URL validation screen.
 */


function handleCopyToClipboardButtons() {
  const clipboards = []; // eslint-disable-next-line no-new

  clipboards.push(new (clipboard__WEBPACK_IMPORTED_MODULE_0___default())('button.single-url-detail-copy', {
    text: btn => {
      return JSON.stringify(JSON.parse(btn.getAttribute('data-error-json')), null, '\t');
    }
  })); // eslint-disable-next-line no-new

  clipboards.push(new (clipboard__WEBPACK_IMPORTED_MODULE_0___default())('button.copy-all', {
    text: () => {
      const value = (0,_get_url_validation_table_rows__WEBPACK_IMPORTED_MODULE_2__.getURLValidationTableRows)({
        checkedOnly: true
      }).map(row => {
        const copyButton = row.querySelector('.single-url-detail-copy');

        if (!copyButton) {
          return null;
        }

        return JSON.parse(copyButton.getAttribute('data-error-json'));
      }).filter(item => item);
      return JSON.stringify(value, null, '\t');
    }
  }));
  clipboards.forEach(clipboard => {
    clipboard.on('success', onSuccess);
  });
}

/***/ }),

/***/ "./assets/src/amp-validation/get-url-validation-table-rows.js":
/*!********************************************************************!*\
  !*** ./assets/src/amp-validation/get-url-validation-table-rows.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getURLValidationTableRows": function() { return /* binding */ getURLValidationTableRows; }
/* harmony export */ });
/**
 * Gets the table rows on a single URL validation screen.
 *
 * @param {Object}  options
 * @param {boolean} options.checkedOnly Whether to return only checked rows.
 */
function getURLValidationTableRows() {
  let options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  const rows = [...document.querySelectorAll('select.amp-validation-error-status')].map(select => select.closest('tr'));

  if (true !== options.checkedOnly) {
    return rows;
  }

  return rows.filter(row => row.querySelector('.check-column input[type=checkbox]').checked);
}

/***/ }),

/***/ "./node_modules/clipboard/dist/clipboard.js":
/*!**************************************************!*\
  !*** ./node_modules/clipboard/dist/clipboard.js ***!
  \**************************************************/
/***/ (function(module) {

/*!
 * clipboard.js v2.0.8
 * https://clipboardjs.com/
 *
 * Licensed MIT © Zeno Rocha
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else {}
})(this, function() {
return /******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 134:
/***/ (function(__unused_webpack_module, __webpack_exports__, __nested_webpack_require_622__) {

"use strict";

// EXPORTS
__nested_webpack_require_622__.d(__webpack_exports__, {
  "default": function() { return /* binding */ clipboard; }
});

// EXTERNAL MODULE: ./node_modules/tiny-emitter/index.js
var tiny_emitter = __nested_webpack_require_622__(279);
var tiny_emitter_default = /*#__PURE__*/__nested_webpack_require_622__.n(tiny_emitter);
// EXTERNAL MODULE: ./node_modules/good-listener/src/listen.js
var listen = __nested_webpack_require_622__(370);
var listen_default = /*#__PURE__*/__nested_webpack_require_622__.n(listen);
// EXTERNAL MODULE: ./node_modules/select/src/select.js
var src_select = __nested_webpack_require_622__(817);
var select_default = /*#__PURE__*/__nested_webpack_require_622__.n(src_select);
;// CONCATENATED MODULE: ./src/clipboard-action.js
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


/**
 * Inner class which performs selection from either `text` or `target`
 * properties and then executes copy or cut operations.
 */

var ClipboardAction = /*#__PURE__*/function () {
  /**
   * @param {Object} options
   */
  function ClipboardAction(options) {
    _classCallCheck(this, ClipboardAction);

    this.resolveOptions(options);
    this.initSelection();
  }
  /**
   * Defines base properties passed from constructor.
   * @param {Object} options
   */


  _createClass(ClipboardAction, [{
    key: "resolveOptions",
    value: function resolveOptions() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      this.action = options.action;
      this.container = options.container;
      this.emitter = options.emitter;
      this.target = options.target;
      this.text = options.text;
      this.trigger = options.trigger;
      this.selectedText = '';
    }
    /**
     * Decides which selection strategy is going to be applied based
     * on the existence of `text` and `target` properties.
     */

  }, {
    key: "initSelection",
    value: function initSelection() {
      if (this.text) {
        this.selectFake();
      } else if (this.target) {
        this.selectTarget();
      }
    }
    /**
     * Creates a fake textarea element, sets its value from `text` property,
     */

  }, {
    key: "createFakeElement",
    value: function createFakeElement() {
      var isRTL = document.documentElement.getAttribute('dir') === 'rtl';
      this.fakeElem = document.createElement('textarea'); // Prevent zooming on iOS

      this.fakeElem.style.fontSize = '12pt'; // Reset box model

      this.fakeElem.style.border = '0';
      this.fakeElem.style.padding = '0';
      this.fakeElem.style.margin = '0'; // Move element out of screen horizontally

      this.fakeElem.style.position = 'absolute';
      this.fakeElem.style[isRTL ? 'right' : 'left'] = '-9999px'; // Move element to the same position vertically

      var yPosition = window.pageYOffset || document.documentElement.scrollTop;
      this.fakeElem.style.top = "".concat(yPosition, "px");
      this.fakeElem.setAttribute('readonly', '');
      this.fakeElem.value = this.text;
      return this.fakeElem;
    }
    /**
     * Get's the value of fakeElem,
     * and makes a selection on it.
     */

  }, {
    key: "selectFake",
    value: function selectFake() {
      var _this = this;

      var fakeElem = this.createFakeElement();

      this.fakeHandlerCallback = function () {
        return _this.removeFake();
      };

      this.fakeHandler = this.container.addEventListener('click', this.fakeHandlerCallback) || true;
      this.container.appendChild(fakeElem);
      this.selectedText = select_default()(fakeElem);
      this.copyText();
      this.removeFake();
    }
    /**
     * Only removes the fake element after another click event, that way
     * a user can hit `Ctrl+C` to copy because selection still exists.
     */

  }, {
    key: "removeFake",
    value: function removeFake() {
      if (this.fakeHandler) {
        this.container.removeEventListener('click', this.fakeHandlerCallback);
        this.fakeHandler = null;
        this.fakeHandlerCallback = null;
      }

      if (this.fakeElem) {
        this.container.removeChild(this.fakeElem);
        this.fakeElem = null;
      }
    }
    /**
     * Selects the content from element passed on `target` property.
     */

  }, {
    key: "selectTarget",
    value: function selectTarget() {
      this.selectedText = select_default()(this.target);
      this.copyText();
    }
    /**
     * Executes the copy operation based on the current selection.
     */

  }, {
    key: "copyText",
    value: function copyText() {
      var succeeded;

      try {
        succeeded = document.execCommand(this.action);
      } catch (err) {
        succeeded = false;
      }

      this.handleResult(succeeded);
    }
    /**
     * Fires an event based on the copy operation result.
     * @param {Boolean} succeeded
     */

  }, {
    key: "handleResult",
    value: function handleResult(succeeded) {
      this.emitter.emit(succeeded ? 'success' : 'error', {
        action: this.action,
        text: this.selectedText,
        trigger: this.trigger,
        clearSelection: this.clearSelection.bind(this)
      });
    }
    /**
     * Moves focus away from `target` and back to the trigger, removes current selection.
     */

  }, {
    key: "clearSelection",
    value: function clearSelection() {
      if (this.trigger) {
        this.trigger.focus();
      }

      document.activeElement.blur();
      window.getSelection().removeAllRanges();
    }
    /**
     * Sets the `action` to be performed which can be either 'copy' or 'cut'.
     * @param {String} action
     */

  }, {
    key: "destroy",

    /**
     * Destroy lifecycle.
     */
    value: function destroy() {
      this.removeFake();
    }
  }, {
    key: "action",
    set: function set() {
      var action = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'copy';
      this._action = action;

      if (this._action !== 'copy' && this._action !== 'cut') {
        throw new Error('Invalid "action" value, use either "copy" or "cut"');
      }
    }
    /**
     * Gets the `action` property.
     * @return {String}
     */
    ,
    get: function get() {
      return this._action;
    }
    /**
     * Sets the `target` property using an element
     * that will be have its content copied.
     * @param {Element} target
     */

  }, {
    key: "target",
    set: function set(target) {
      if (target !== undefined) {
        if (target && _typeof(target) === 'object' && target.nodeType === 1) {
          if (this.action === 'copy' && target.hasAttribute('disabled')) {
            throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');
          }

          if (this.action === 'cut' && (target.hasAttribute('readonly') || target.hasAttribute('disabled'))) {
            throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');
          }

          this._target = target;
        } else {
          throw new Error('Invalid "target" value, use a valid Element');
        }
      }
    }
    /**
     * Gets the `target` property.
     * @return {String|HTMLElement}
     */
    ,
    get: function get() {
      return this._target;
    }
  }]);

  return ClipboardAction;
}();

/* harmony default export */ var clipboard_action = (ClipboardAction);
;// CONCATENATED MODULE: ./src/clipboard.js
function clipboard_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { clipboard_typeof = function _typeof(obj) { return typeof obj; }; } else { clipboard_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return clipboard_typeof(obj); }

function clipboard_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function clipboard_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function clipboard_createClass(Constructor, protoProps, staticProps) { if (protoProps) clipboard_defineProperties(Constructor.prototype, protoProps); if (staticProps) clipboard_defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (clipboard_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }




/**
 * Helper function to retrieve attribute value.
 * @param {String} suffix
 * @param {Element} element
 */

function getAttributeValue(suffix, element) {
  var attribute = "data-clipboard-".concat(suffix);

  if (!element.hasAttribute(attribute)) {
    return;
  }

  return element.getAttribute(attribute);
}
/**
 * Base class which takes one or more elements, adds event listeners to them,
 * and instantiates a new `ClipboardAction` on each click.
 */


var Clipboard = /*#__PURE__*/function (_Emitter) {
  _inherits(Clipboard, _Emitter);

  var _super = _createSuper(Clipboard);

  /**
   * @param {String|HTMLElement|HTMLCollection|NodeList} trigger
   * @param {Object} options
   */
  function Clipboard(trigger, options) {
    var _this;

    clipboard_classCallCheck(this, Clipboard);

    _this = _super.call(this);

    _this.resolveOptions(options);

    _this.listenClick(trigger);

    return _this;
  }
  /**
   * Defines if attributes would be resolved using internal setter functions
   * or custom functions that were passed in the constructor.
   * @param {Object} options
   */


  clipboard_createClass(Clipboard, [{
    key: "resolveOptions",
    value: function resolveOptions() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      this.action = typeof options.action === 'function' ? options.action : this.defaultAction;
      this.target = typeof options.target === 'function' ? options.target : this.defaultTarget;
      this.text = typeof options.text === 'function' ? options.text : this.defaultText;
      this.container = clipboard_typeof(options.container) === 'object' ? options.container : document.body;
    }
    /**
     * Adds a click event listener to the passed trigger.
     * @param {String|HTMLElement|HTMLCollection|NodeList} trigger
     */

  }, {
    key: "listenClick",
    value: function listenClick(trigger) {
      var _this2 = this;

      this.listener = listen_default()(trigger, 'click', function (e) {
        return _this2.onClick(e);
      });
    }
    /**
     * Defines a new `ClipboardAction` on each click event.
     * @param {Event} e
     */

  }, {
    key: "onClick",
    value: function onClick(e) {
      var trigger = e.delegateTarget || e.currentTarget;

      if (this.clipboardAction) {
        this.clipboardAction = null;
      }

      this.clipboardAction = new clipboard_action({
        action: this.action(trigger),
        target: this.target(trigger),
        text: this.text(trigger),
        container: this.container,
        trigger: trigger,
        emitter: this
      });
    }
    /**
     * Default `action` lookup function.
     * @param {Element} trigger
     */

  }, {
    key: "defaultAction",
    value: function defaultAction(trigger) {
      return getAttributeValue('action', trigger);
    }
    /**
     * Default `target` lookup function.
     * @param {Element} trigger
     */

  }, {
    key: "defaultTarget",
    value: function defaultTarget(trigger) {
      var selector = getAttributeValue('target', trigger);

      if (selector) {
        return document.querySelector(selector);
      }
    }
    /**
     * Returns the support of the given action, or all actions if no action is
     * given.
     * @param {String} [action]
     */

  }, {
    key: "defaultText",

    /**
     * Default `text` lookup function.
     * @param {Element} trigger
     */
    value: function defaultText(trigger) {
      return getAttributeValue('text', trigger);
    }
    /**
     * Destroy lifecycle.
     */

  }, {
    key: "destroy",
    value: function destroy() {
      this.listener.destroy();

      if (this.clipboardAction) {
        this.clipboardAction.destroy();
        this.clipboardAction = null;
      }
    }
  }], [{
    key: "isSupported",
    value: function isSupported() {
      var action = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : ['copy', 'cut'];
      var actions = typeof action === 'string' ? [action] : action;
      var support = !!document.queryCommandSupported;
      actions.forEach(function (action) {
        support = support && !!document.queryCommandSupported(action);
      });
      return support;
    }
  }]);

  return Clipboard;
}((tiny_emitter_default()));

/* harmony default export */ var clipboard = (Clipboard);

/***/ }),

/***/ 828:
/***/ (function(module) {

var DOCUMENT_NODE_TYPE = 9;

/**
 * A polyfill for Element.matches()
 */
if (typeof Element !== 'undefined' && !Element.prototype.matches) {
    var proto = Element.prototype;

    proto.matches = proto.matchesSelector ||
                    proto.mozMatchesSelector ||
                    proto.msMatchesSelector ||
                    proto.oMatchesSelector ||
                    proto.webkitMatchesSelector;
}

/**
 * Finds the closest parent that matches a selector.
 *
 * @param {Element} element
 * @param {String} selector
 * @return {Function}
 */
function closest (element, selector) {
    while (element && element.nodeType !== DOCUMENT_NODE_TYPE) {
        if (typeof element.matches === 'function' &&
            element.matches(selector)) {
          return element;
        }
        element = element.parentNode;
    }
}

module.exports = closest;


/***/ }),

/***/ 438:
/***/ (function(module, __unused_webpack_exports, __nested_webpack_require_17417__) {

var closest = __nested_webpack_require_17417__(828);

/**
 * Delegates event to a selector.
 *
 * @param {Element} element
 * @param {String} selector
 * @param {String} type
 * @param {Function} callback
 * @param {Boolean} useCapture
 * @return {Object}
 */
function _delegate(element, selector, type, callback, useCapture) {
    var listenerFn = listener.apply(this, arguments);

    element.addEventListener(type, listenerFn, useCapture);

    return {
        destroy: function() {
            element.removeEventListener(type, listenerFn, useCapture);
        }
    }
}

/**
 * Delegates event to a selector.
 *
 * @param {Element|String|Array} [elements]
 * @param {String} selector
 * @param {String} type
 * @param {Function} callback
 * @param {Boolean} useCapture
 * @return {Object}
 */
function delegate(elements, selector, type, callback, useCapture) {
    // Handle the regular Element usage
    if (typeof elements.addEventListener === 'function') {
        return _delegate.apply(null, arguments);
    }

    // Handle Element-less usage, it defaults to global delegation
    if (typeof type === 'function') {
        // Use `document` as the first parameter, then apply arguments
        // This is a short way to .unshift `arguments` without running into deoptimizations
        return _delegate.bind(null, document).apply(null, arguments);
    }

    // Handle Selector-based usage
    if (typeof elements === 'string') {
        elements = document.querySelectorAll(elements);
    }

    // Handle Array-like based usage
    return Array.prototype.map.call(elements, function (element) {
        return _delegate(element, selector, type, callback, useCapture);
    });
}

/**
 * Finds closest match and invokes callback.
 *
 * @param {Element} element
 * @param {String} selector
 * @param {String} type
 * @param {Function} callback
 * @return {Function}
 */
function listener(element, selector, type, callback) {
    return function(e) {
        e.delegateTarget = closest(e.target, selector);

        if (e.delegateTarget) {
            callback.call(element, e);
        }
    }
}

module.exports = delegate;


/***/ }),

/***/ 879:
/***/ (function(__unused_webpack_module, exports) {

/**
 * Check if argument is a HTML element.
 *
 * @param {Object} value
 * @return {Boolean}
 */
exports.node = function(value) {
    return value !== undefined
        && value instanceof HTMLElement
        && value.nodeType === 1;
};

/**
 * Check if argument is a list of HTML elements.
 *
 * @param {Object} value
 * @return {Boolean}
 */
exports.nodeList = function(value) {
    var type = Object.prototype.toString.call(value);

    return value !== undefined
        && (type === '[object NodeList]' || type === '[object HTMLCollection]')
        && ('length' in value)
        && (value.length === 0 || exports.node(value[0]));
};

/**
 * Check if argument is a string.
 *
 * @param {Object} value
 * @return {Boolean}
 */
exports.string = function(value) {
    return typeof value === 'string'
        || value instanceof String;
};

/**
 * Check if argument is a function.
 *
 * @param {Object} value
 * @return {Boolean}
 */
exports.fn = function(value) {
    var type = Object.prototype.toString.call(value);

    return type === '[object Function]';
};


/***/ }),

/***/ 370:
/***/ (function(module, __unused_webpack_exports, __nested_webpack_require_20781__) {

var is = __nested_webpack_require_20781__(879);
var delegate = __nested_webpack_require_20781__(438);

/**
 * Validates all params and calls the right
 * listener function based on its target type.
 *
 * @param {String|HTMLElement|HTMLCollection|NodeList} target
 * @param {String} type
 * @param {Function} callback
 * @return {Object}
 */
function listen(target, type, callback) {
    if (!target && !type && !callback) {
        throw new Error('Missing required arguments');
    }

    if (!is.string(type)) {
        throw new TypeError('Second argument must be a String');
    }

    if (!is.fn(callback)) {
        throw new TypeError('Third argument must be a Function');
    }

    if (is.node(target)) {
        return listenNode(target, type, callback);
    }
    else if (is.nodeList(target)) {
        return listenNodeList(target, type, callback);
    }
    else if (is.string(target)) {
        return listenSelector(target, type, callback);
    }
    else {
        throw new TypeError('First argument must be a String, HTMLElement, HTMLCollection, or NodeList');
    }
}

/**
 * Adds an event listener to a HTML element
 * and returns a remove listener function.
 *
 * @param {HTMLElement} node
 * @param {String} type
 * @param {Function} callback
 * @return {Object}
 */
function listenNode(node, type, callback) {
    node.addEventListener(type, callback);

    return {
        destroy: function() {
            node.removeEventListener(type, callback);
        }
    }
}

/**
 * Add an event listener to a list of HTML elements
 * and returns a remove listener function.
 *
 * @param {NodeList|HTMLCollection} nodeList
 * @param {String} type
 * @param {Function} callback
 * @return {Object}
 */
function listenNodeList(nodeList, type, callback) {
    Array.prototype.forEach.call(nodeList, function(node) {
        node.addEventListener(type, callback);
    });

    return {
        destroy: function() {
            Array.prototype.forEach.call(nodeList, function(node) {
                node.removeEventListener(type, callback);
            });
        }
    }
}

/**
 * Add an event listener to a selector
 * and returns a remove listener function.
 *
 * @param {String} selector
 * @param {String} type
 * @param {Function} callback
 * @return {Object}
 */
function listenSelector(selector, type, callback) {
    return delegate(document.body, selector, type, callback);
}

module.exports = listen;


/***/ }),

/***/ 817:
/***/ (function(module) {

function select(element) {
    var selectedText;

    if (element.nodeName === 'SELECT') {
        element.focus();

        selectedText = element.value;
    }
    else if (element.nodeName === 'INPUT' || element.nodeName === 'TEXTAREA') {
        var isReadOnly = element.hasAttribute('readonly');

        if (!isReadOnly) {
            element.setAttribute('readonly', '');
        }

        element.select();
        element.setSelectionRange(0, element.value.length);

        if (!isReadOnly) {
            element.removeAttribute('readonly');
        }

        selectedText = element.value;
    }
    else {
        if (element.hasAttribute('contenteditable')) {
            element.focus();
        }

        var selection = window.getSelection();
        var range = document.createRange();

        range.selectNodeContents(element);
        selection.removeAllRanges();
        selection.addRange(range);

        selectedText = selection.toString();
    }

    return selectedText;
}

module.exports = select;


/***/ }),

/***/ 279:
/***/ (function(module) {

function E () {
  // Keep this empty so it's easier to inherit from
  // (via https://github.com/lipsmack from https://github.com/scottcorgan/tiny-emitter/issues/3)
}

E.prototype = {
  on: function (name, callback, ctx) {
    var e = this.e || (this.e = {});

    (e[name] || (e[name] = [])).push({
      fn: callback,
      ctx: ctx
    });

    return this;
  },

  once: function (name, callback, ctx) {
    var self = this;
    function listener () {
      self.off(name, listener);
      callback.apply(ctx, arguments);
    };

    listener._ = callback
    return this.on(name, listener, ctx);
  },

  emit: function (name) {
    var data = [].slice.call(arguments, 1);
    var evtArr = ((this.e || (this.e = {}))[name] || []).slice();
    var i = 0;
    var len = evtArr.length;

    for (i; i < len; i++) {
      evtArr[i].fn.apply(evtArr[i].ctx, data);
    }

    return this;
  },

  off: function (name, callback) {
    var e = this.e || (this.e = {});
    var evts = e[name];
    var liveEvents = [];

    if (evts && callback) {
      for (var i = 0, len = evts.length; i < len; i++) {
        if (evts[i].fn !== callback && evts[i].fn._ !== callback)
          liveEvents.push(evts[i]);
      }
    }

    // Remove event from queue to prevent memory leak
    // Suggested by https://github.com/lazd
    // Ref: https://github.com/scottcorgan/tiny-emitter/commit/c6ebfaa9bc973b33d110a84a307742b7cf94c953#commitcomment-5024910

    (liveEvents.length)
      ? e[name] = liveEvents
      : delete e[name];

    return this;
  }
};

module.exports = E;
module.exports.TinyEmitter = E;


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __nested_webpack_require_26163__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __nested_webpack_require_26163__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__nested_webpack_require_26163__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__nested_webpack_require_26163__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__nested_webpack_require_26163__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__nested_webpack_require_26163__.o(definition, key) && !__nested_webpack_require_26163__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__nested_webpack_require_26163__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	// module exports must be returned from runtime so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	return __nested_webpack_require_26163__(134);
/******/ })()
.default;
});

/***/ }),

/***/ "@wordpress/dom-ready":
/*!**********************************!*\
  !*** external ["wp","domReady"] ***!
  \**********************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["domReady"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ (function(module) {

"use strict";
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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/*!*************************************************************************!*\
  !*** ./assets/src/amp-validation/amp-validated-url-post-edit-screen.js ***!
  \*************************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_dom_ready__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/dom-ready */ "@wordpress/dom-ready");
/* harmony import */ var _wordpress_dom_ready__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_dom_ready__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _copy_to_clipboard_buttons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./copy-to-clipboard-buttons */ "./assets/src/amp-validation/copy-to-clipboard-buttons.js");
/* harmony import */ var _get_url_validation_table_rows__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./get-url-validation-table-rows */ "./assets/src/amp-validation/get-url-validation-table-rows.js");
/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */



/**
 * The id for the 'Showing x of y errors' notice.
 *
 * @member {string}
 */

const idNumberErrors = 'number-errors';
/**
 * The id for the 'Show all' button.
 *
 * @member {string}
 */

const showAllId = 'show-all-errors';
_wordpress_dom_ready__WEBPACK_IMPORTED_MODULE_0___default()(() => {
  handleShowAll();
  handleFiltering();
  handleSearching();
  handleRowEvents();
  handleBulkActions();
  watchForUnsavedChanges();
  setupStylesheetsMetabox();
  (0,_copy_to_clipboard_buttons__WEBPACK_IMPORTED_MODULE_2__.handleCopyToClipboardButtons)();
});
let beforeUnloadPromptAdded = false;
/**
 * Add prompt when leaving page due to unsaved changes.
 */

const addBeforeUnloadPrompt = () => {
  if (beforeUnloadPromptAdded) {
    return;
  }

  __webpack_require__.g.addEventListener('beforeunload', onBeforeUnload); // Remove prompt when clicking trash or update.

  document.querySelector('#major-publishing-actions').addEventListener('click', () => {
    __webpack_require__.g.removeEventListener('beforeunload', onBeforeUnload);
  });
  beforeUnloadPromptAdded = true;
};
/**
 * Watch for unsaved changes.
 *
 * Add an beforeunload warning when there are unsaved changes for the markup or review status.
 */


const watchForUnsavedChanges = () => {
  const onChange = event => {
    if (event.target.matches('.amp-validation-error-status') || event.target.matches('.amp-validation-error-status-review')) {
      document.getElementById('post').removeEventListener('change', onChange);
      addBeforeUnloadPrompt();
    }
  };

  document.getElementById('post').addEventListener('change', onChange);
};
/**
 * Show message at beforeunload.
 *
 * @param {Event} event - The beforeunload event.
 * @return {string} Message.
 */


const onBeforeUnload = event => {
  event.preventDefault();
  event.returnValue = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('You have unsaved changes. Are you sure you want to leave?', 'amp');
  return (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('You have unsaved changes. Are you sure you want to leave?', 'amp');
};
/**
 * Updates the <tr> with 'Showing x of y validation errors' at the top of the list table with the current count.
 * If this does not exist yet, it creates the element.
 *
 * @param {number} numberErrorsDisplaying - The number of errors displaying.
 * @param {number} totalErrors            - The total number of errors, displaying or not.
 */


const updateShowingErrorsRow = (numberErrorsDisplaying, totalErrors) => {
  const showAllButton = document.getElementById(showAllId);
  let thead,
      th,
      tr = document.getElementById(idNumberErrors);
  const theadQuery = document.getElementsByTagName('thead'); // Only create the <tr> if it does not exist yet.

  if (theadQuery[0] && !tr) {
    thead = theadQuery[0];
    tr = document.createElement('tr');
    th = document.createElement('th');
    th.setAttribute('id', idNumberErrors);
    th.setAttribute('colspan', '6');
    tr.appendChild(th);
    thead.appendChild(tr);
  } // If all of the errors are displaying, hide the 'Show all' button and the count notice.


  if (numberErrorsDisplaying === totalErrors) {
    if (showAllButton) {
      showAllButton.classList.add('hidden');
    }

    tr.classList.add('hidden');
  } else if (null !== numberErrorsDisplaying) {
    // Update the number of errors displaying and create a 'Show all' button if it does not exist yet.
    document.getElementById(idNumberErrors).innerText = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.sprintf)(
    /* translators: 1: number of errors being displayed. 2: total number of errors found. */
    (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__._n)('Showing %1$s of %2$s validation error', 'Showing %1$s of %2$s validation errors', totalErrors, 'amp'), numberErrorsDisplaying, totalErrors);
    document.getElementById(idNumberErrors).classList.remove('hidden');
    conditionallyCreateShowAllButton();

    if (document.getElementById(showAllId)) {
      document.getElementById(showAllId).classList.remove('hidden');
    }
  }
};
/**
 * Conditionally creates and appends a 'Show all' button.
 */


const conditionallyCreateShowAllButton = () => {
  const buttonContainer = document.getElementById('url-post-filter');
  let showAllButton = document.getElementById(showAllId); // There is no 'Show all' <button> yet, but there is a container element for it, create the <button>

  if (!showAllButton && buttonContainer) {
    showAllButton = document.createElement('button');
    showAllButton.id = showAllId;
    showAllButton.classList.add('button');
    showAllButton.innerText = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Show all', 'amp');
    buttonContainer.appendChild(showAllButton);
  }
};
/**
 * On clicking the 'Show all' <button>, this displays all of the validation errors.
 * Then, it hides this 'Show all' <button> and the notice for the number of errors showing.
 */


const handleShowAll = () => {
  const onClick = event => {
    if (!event.target.matches('#' + showAllId)) {
      return;
    }

    event.preventDefault();
    const validationErrors = document.querySelectorAll('[data-error-type]'); // Iterate through all of the errors, and remove the 'hidden' class.

    validationErrors.forEach(element => {
      element.parentElement.parentElement.classList.remove('hidden');
    });
    /*
     * Update the notice to indicate that all of the errors are displaying.
     * Like 'Showing 5 of 5 validation errors'.
     */

    updateShowingErrorsRow(validationErrors.length, validationErrors.length); // Hide this 'Show all' button.

    event.target.classList.add('hidden'); // Change the value of the error type <select> element to 'All Error Types'.

    document.getElementById('amp_validation_error_type').selectedIndex = 0;
  };

  document.getElementById('url-post-filter').addEventListener('click', onClick);
};
/**
 * Handles filtering by error type, triggered by clicking 'Apply Filter'.
 *
 * Gets the value of the error type <select> element.
 * And hides all <tr> elements that do not have the same type of this value.
 * If 'All Error Types' is selected, this displays all errors.
 */


const handleFiltering = () => {
  const onChange = event => {
    if (!event.target.matches('select')) {
      return;
    }

    event.preventDefault();
    const showAllButton = document.getElementById(showAllId);
    const isAllErrorTypesSelected = '-1' === event.target.value;
    const errorTypeQuery = document.querySelectorAll('[data-error-type]'); // If the user has chosen 'All Error Types' from the <select>, hide the 'Show all' button.

    if (isAllErrorTypesSelected && showAllButton) {
      showAllButton.classList.add('hidden');
    }
    /*
     * Iterate through all of the <tr> elements in the list table.
     * If the error type does not match the value (selected error type), hide them.
     */


    let numberErrorsDisplaying = 0;
    errorTypeQuery.forEach(element => {
      const errorType = element.getAttribute('data-error-type'); // If 'All Error Types' was selected, this should display all errors.

      if (isAllErrorTypesSelected || !event.target.value || event.target.value === errorType) {
        element.parentElement.parentElement.classList.remove('hidden');
        numberErrorsDisplaying++;
      } else {
        element.parentElement.parentElement.classList.add('hidden');
      }
    });
    updateShowingErrorsRow(numberErrorsDisplaying, errorTypeQuery.length);
  };

  document.getElementById('amp_validation_error_type').addEventListener('change', onChange);
};
/**
 * Handles searching for errors via the <input> and the 'Search Errors' <button>.
 */


const handleSearching = () => {
  const searchButton = document.getElementById('search-submit');

  if (!searchButton) {
    return;
  }

  const onClick = event => {
    event.preventDefault();

    if (!event.target.matches('input')) {
      return;
    }

    const searchQuery = document.getElementById('invalid-url-search-search-input').value;
    const detailsQuery = document.querySelectorAll('tbody .column-details');
    /*
     * Iterate through the 'Context' (formerly 'Details') column of each row.
     * If the search query is not present, hide the row.
     */

    let numberErrorsDisplaying = 0;
    detailsQuery.forEach(element => {
      let isSearchQueryPresent = false;
      element.querySelectorAll('.detailed').forEach(detailed => {
        if (-1 !== detailed.innerText.indexOf(searchQuery)) {
          isSearchQueryPresent = true;
        }
      });

      if (isSearchQueryPresent) {
        element.parentElement.classList.remove('hidden');
        numberErrorsDisplaying++;
      } else {
        element.parentElement.classList.add('hidden');
      }
    });
    updateShowingErrorsRow(numberErrorsDisplaying, detailsQuery.length);
  };

  searchButton.addEventListener('click', onClick);
};
/**
 * Handles events that may occur for a row.
 */


const handleRowEvents = () => {
  document.querySelectorAll('tr[id^="tag-"]').forEach(row => {
    const statusSelect = row.querySelector('.amp-validation-error-status');
    const reviewCheckbox = row.querySelector('.amp-validation-error-status-review');

    if (statusSelect) {
      // Toggle the 'kept' state for the row depending on the error status.
      statusSelect.addEventListener('change', () => row.classList.toggle('kept'));
    }

    if (reviewCheckbox) {
      // Toggle the 'new' state for the row depending on the state of approval for the validation error.
      reviewCheckbox.addEventListener('change', () => row.classList.toggle('new'));
    }
  });
};
/**
 * On checking a bulk action checkbox, this ensures that the 'Accept' and 'Reject' buttons are present. Handle clicking on buttons.
 *
 * They're hidden until one of these boxes is checked.
 * Also, on unchecking the last checked box, this hides these buttons.
 */


const handleBulkActions = () => {
  const removeButton = document.querySelector('button.action.remove');
  const keepButton = document.querySelector('button.action.keep');
  const removeAndKeepContainer = document.getElementById('remove-keep-buttons');

  const onChange = event => {
    let areThereCheckedBoxes;

    if (!event.target.matches('[type=checkbox]')) {
      return;
    }

    if (event.target.checked) {
      // This checkbox was checked, so ensure the buttons display.
      removeAndKeepContainer.classList.remove('hidden');
    } else {
      /*
       * This checkbox was unchecked.
       * So find if there are any other checkboxes that are checked.
       * If not, hide the 'Accept' and 'Reject' buttons.
       */
      areThereCheckedBoxes = false;
      document.querySelectorAll('.check-column [type=checkbox]').forEach(element => {
        if (element.checked) {
          areThereCheckedBoxes = true;
        }
      });

      if (!areThereCheckedBoxes) {
        removeAndKeepContainer.classList.add('hidden');
      }
    }
  };

  document.querySelectorAll('.check-column [type=checkbox]').forEach(element => {
    element.addEventListener('change', onChange);
  }); // Handle click on bulk "Remove" button.

  removeButton.addEventListener('click', () => {
    Array.prototype.forEach.call(document.querySelectorAll('select.amp-validation-error-status'), select => {
      const row = select.closest('tr');

      if (row.querySelector('.check-column input[type=checkbox]').checked) {
        select.value = '3'; // See AMP_Validation_Error_Taxonomy::VALIDATION_ERROR_ACK_ACCEPTED_STATUS.

        row.classList.remove('kept');
        addBeforeUnloadPrompt();
      }
    });
  }); // Handle click on bulk "Keep" button.

  keepButton.addEventListener('click', () => {
    Array.prototype.forEach.call(document.querySelectorAll('select.amp-validation-error-status'), select => {
      const row = select.closest('tr');

      if (row.querySelector('.check-column input[type=checkbox]').checked) {
        select.value = '2'; // See AMP_Validation_Error_Taxonomy::VALIDATION_ERROR_ACK_REJECTED_STATUS.

        row.classList.add('kept');
        addBeforeUnloadPrompt();
      }
    });
  }); // Handle click on bulk "Mark reviewed" and "Mark unreviewed" buttons.

  __webpack_require__.g.addEventListener('click', _ref => {
    let {
      target
    } = _ref;

    if (!target.classList.contains('reviewed-toggle')) {
      return;
    }

    const markingAsReviewed = target.classList.contains('reviewed');
    (0,_get_url_validation_table_rows__WEBPACK_IMPORTED_MODULE_3__.getURLValidationTableRows)({
      checkedOnly: true
    }).forEach(row => {
      row.querySelector('input[type=checkbox].amp-validation-error-status-review').checked = markingAsReviewed;
      row.classList.toggle('new', !markingAsReviewed);
      addBeforeUnloadPrompt();
    });
  });
};
/**
 * Set up stylesheet metabox.
 */


const setupStylesheetsMetabox = () => {
  const metabox = document.getElementById('amp_stylesheets');

  for (const toggleStylesheetDetailsButton of metabox.querySelectorAll('.toggle-stylesheet-details')) {
    const row = toggleStylesheetDetailsButton.closest('tr');
    toggleStylesheetDetailsButton.addEventListener('click', () => {
      row.classList.toggle('expanded');
    });
  }

  for (const stylesheetDetailsElements of metabox.querySelectorAll('.stylesheet-details')) {
    const shakenStylesheetContainer = stylesheetDetailsElements.querySelector('.shaken-stylesheet');
    const showRemovedStylesCheckbox = stylesheetDetailsElements.querySelector('.show-removed-styles');

    if (showRemovedStylesCheckbox) {
      showRemovedStylesCheckbox.addEventListener('click', () => {
        shakenStylesheetContainer.classList.toggle('removed-styles-shown', showRemovedStylesCheckbox.checked);
      });
    }
  }
};
}();
/******/ })()
;
//# sourceMappingURL=amp-validated-url-post-edit-screen.js.map