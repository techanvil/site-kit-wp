/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./assets/src/block-editor/blocks sync recursive (?<%21test\\/)index\\.js$":
/*!**********************************************************************!*\
  !*** ./assets/src/block-editor/blocks/ sync (?<%21test\/)index\.js$ ***!
  \**********************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var map = {
	"./amp-brid-player/index.js": "./assets/src/block-editor/blocks/amp-brid-player/index.js",
	"./amp-ima-video/index.js": "./assets/src/block-editor/blocks/amp-ima-video/index.js",
	"./amp-jwplayer/index.js": "./assets/src/block-editor/blocks/amp-jwplayer/index.js",
	"./amp-mathml/index.js": "./assets/src/block-editor/blocks/amp-mathml/index.js",
	"./amp-o2-player/index.js": "./assets/src/block-editor/blocks/amp-o2-player/index.js",
	"./amp-ooyala-player/index.js": "./assets/src/block-editor/blocks/amp-ooyala-player/index.js",
	"./amp-reach-player/index.js": "./assets/src/block-editor/blocks/amp-reach-player/index.js",
	"./amp-springboard-player/index.js": "./assets/src/block-editor/blocks/amp-springboard-player/index.js",
	"./amp-timeago/index.js": "./assets/src/block-editor/blocks/amp-timeago/index.js"
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
webpackContext.id = "./assets/src/block-editor/blocks sync recursive (?<%21test\\/)index\\.js$";

/***/ }),

/***/ "./assets/src/block-editor/plugins sync recursive .*\\.js$":
/*!*******************************************************!*\
  !*** ./assets/src/block-editor/plugins/ sync .*\.js$ ***!
  \*******************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var map = {
	"./post-status-info.js": "./assets/src/block-editor/plugins/post-status-info.js",
	"./pre-publish-panel.js": "./assets/src/block-editor/plugins/pre-publish-panel.js",
	"./wrapped-amp-preview-button.js": "./assets/src/block-editor/plugins/wrapped-amp-preview-button.js"
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
webpackContext.id = "./assets/src/block-editor/plugins sync recursive .*\\.js$";

/***/ }),

/***/ "./assets/src/block-editor/blocks/amp-brid-player/edit.js":
/*!****************************************************************!*\
  !*** ./assets/src/block-editor/blocks/amp-brid-player/edit.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components */ "./assets/src/block-editor/components/index.js");



/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */




/**
 * Internal dependencies
 */



const BlockEdit = props => {
  const {
    attributes,
    setAttributes
  } = props;
  const {
    autoPlay,
    dataPartner,
    dataPlayer,
    dataVideo,
    dataPlaylist,
    dataOutstream
  } = attributes;
  const ampLayoutOptions = [{
    value: 'responsive',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Responsive', 'amp')
  }, {
    value: 'fixed-height',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Fixed Height', 'amp')
  }, {
    value: 'fixed',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Fixed', 'amp')
  }, {
    value: 'fill',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Fill', 'amp')
  }, {
    value: 'flex-item',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Flex-item', 'amp')
  }, {
    value: 'nodisplay',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('No Display', 'amp')
  }];
  let url = false;

  if (dataPartner && dataPlayer && (dataVideo || dataPlaylist || dataOutstream)) {
    url = `http://cdn.brid.tv/live/partners/${dataPartner}`;
  }

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Brid Player Settings', 'amp')
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Partner ID (required)', 'amp'),
    value: dataPartner,
    onChange: value => setAttributes({
      dataPartner: value
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Player ID (required)', 'amp'),
    value: dataPlayer,
    onChange: value => setAttributes({
      dataPlayer: value
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Video ID (one of video / playlist / outstream ID is required)', 'amp'),
    value: dataVideo,
    onChange: value => setAttributes({
      dataVideo: value
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Outstream unit ID (one of video / playlist / outstream ID is required)', 'amp'),
    value: dataOutstream,
    onChange: value => setAttributes({
      dataOutstream: value
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Playlist ID (one of video / playlist / outstream ID is required)', 'amp'),
    value: dataPlaylist,
    onChange: value => setAttributes({
      dataPlaylist: value
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Autoplay', 'amp'),
    checked: autoPlay,
    onChange: () => setAttributes({
      autoPlay: !autoPlay
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_components__WEBPACK_IMPORTED_MODULE_6__.LayoutControls, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    ampLayoutOptions: ampLayoutOptions
  })))), url && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_components__WEBPACK_IMPORTED_MODULE_6__.MediaPlaceholder, {
    name: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Brid Player', 'amp'),
    url: url
  }), !url && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.Placeholder, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Brid Player', 'amp')
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("p", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Add required data to use the block.', 'amp'))));
};

BlockEdit.propTypes = {
  attributes: prop_types__WEBPACK_IMPORTED_MODULE_2___default().shape({
    autoPlay: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool),
    dataPartner: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
    dataPlayer: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
    dataVideo: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
    dataPlaylist: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
    dataOutstream: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string)
  }),
  setAttributes: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func.isRequired)
};
/* harmony default export */ __webpack_exports__["default"] = (BlockEdit);

/***/ }),

/***/ "./assets/src/block-editor/blocks/amp-brid-player/index.js":
/*!*****************************************************************!*\
  !*** ./assets/src/block-editor/blocks/amp-brid-player/index.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "name": function() { return /* binding */ name; },
/* harmony export */   "settings": function() { return /* binding */ settings; }
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit */ "./assets/src/block-editor/blocks/amp-brid-player/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./save */ "./assets/src/block-editor/blocks/amp-brid-player/save.js");
/**
 * WordPress dependencies
 */

/**
 * Internal dependencies
 */



const name = 'amp/amp-brid-player';
const settings = {
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('AMP Brid Player', 'amp'),
  description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Displays the Brid Player used in Brid.tv Video Platform.', 'amp'),
  category: 'embed',
  icon: 'embed-generic',
  keywords: [(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Embed', 'amp')],
  attributes: {
    autoPlay: {
      type: 'boolean'
    },
    dataPartner: {
      source: 'attribute',
      selector: 'amp-brid-player',
      attribute: 'data-partner'
    },
    dataPlayer: {
      source: 'attribute',
      selector: 'amp-brid-player',
      attribute: 'data-player'
    },
    dataVideo: {
      source: 'attribute',
      selector: 'amp-brid-player',
      attribute: 'data-video'
    },
    dataPlaylist: {
      source: 'attribute',
      selector: 'amp-brid-player',
      attribute: 'data-playlist'
    },
    dataOutstream: {
      source: 'attribute',
      selector: 'amp-brid-player',
      attribute: 'data-outstream'
    },
    ampLayout: {
      default: 'responsive',
      source: 'attribute',
      selector: 'amp-brid-player',
      attribute: 'layout'
    },
    width: {
      type: 'number',
      default: 600
    },
    height: {
      default: 400,
      source: 'attribute',
      selector: 'amp-brid-player',
      attribute: 'height'
    }
  },
  edit: _edit__WEBPACK_IMPORTED_MODULE_1__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_2__["default"]
};

/***/ }),

/***/ "./assets/src/block-editor/blocks/amp-brid-player/save.js":
/*!****************************************************************!*\
  !*** ./assets/src/block-editor/blocks/amp-brid-player/save.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);


/**
 * External dependencies
 */


const BlockSave = _ref => {
  let {
    attributes
  } = _ref;
  const {
    dataPlayer,
    dataOutstream,
    dataPartner,
    ampLayout,
    width,
    height,
    dataVideo,
    autoPlay,
    dataPlaylist
  } = attributes;
  const bridProps = {
    layout: ampLayout,
    height,
    'data-player': dataPlayer,
    'data-partner': dataPartner
  };

  if ('fixed-height' !== ampLayout && width) {
    bridProps.width = width;
  }

  if (dataPlaylist) {
    bridProps['data-playlist'] = dataPlaylist;
  }

  if (dataVideo) {
    bridProps['data-video'] = dataVideo;
  }

  if (dataOutstream) {
    bridProps['data-outstream'] = dataOutstream;
  }

  if (autoPlay) {
    bridProps.autoplay = autoPlay;
  }

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("amp-brid-player", bridProps);
};

BlockSave.propTypes = {
  attributes: prop_types__WEBPACK_IMPORTED_MODULE_1___default().shape({
    autoPlay: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
    dataPartner: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
    dataPlayer: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
    dataVideo: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
    dataPlaylist: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
    dataOutstream: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
    ampLayout: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
    width: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number),
    height: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number)
  })
};
/* harmony default export */ __webpack_exports__["default"] = (BlockSave);

/***/ }),

/***/ "./assets/src/block-editor/blocks/amp-ima-video/edit.js":
/*!**************************************************************!*\
  !*** ./assets/src/block-editor/blocks/amp-ima-video/edit.js ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components */ "./assets/src/block-editor/components/index.js");



/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */




/**
 * Internal dependencies
 */



const BlockEdit = props => {
  const {
    attributes,
    setAttributes
  } = props;
  const {
    dataDelayAdRequest,
    dataTag,
    dataSrc,
    dataPoster
  } = attributes;
  const ampLayoutOptions = [{
    value: 'responsive',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Responsive', 'amp')
  }, {
    value: 'fixed',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Fixed', 'amp')
  }];
  let dataSet = false;

  if (dataTag && dataSrc) {
    dataSet = true;
  }

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('IMA Video Settings', 'amp')
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('HTTPS URL for your VAST ad document (required)', 'amp'),
    value: dataTag,
    onChange: value => setAttributes({
      dataTag: value
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('HTTPS URL of your video content (required)', 'amp'),
    value: dataSrc,
    onChange: value => setAttributes({
      dataSrc: value
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('HTTPS URL to preview image', 'amp'),
    value: dataPoster,
    onChange: value => setAttributes({
      dataPoster: value
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Delay Ad Request', 'amp'),
    checked: dataDelayAdRequest,
    onChange: () => setAttributes({
      dataDelayAdRequest: !dataDelayAdRequest
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_components__WEBPACK_IMPORTED_MODULE_6__.LayoutControls, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    ampLayoutOptions: ampLayoutOptions
  })))), dataSet && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_components__WEBPACK_IMPORTED_MODULE_6__.MediaPlaceholder, {
    name: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('IMA Video', 'amp'),
    url: dataSrc
  }), !dataSet && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.Placeholder, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('IMA Video', 'amp')
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("p", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Add required data to use the block.', 'amp'))));
};

BlockEdit.propTypes = {
  attributes: prop_types__WEBPACK_IMPORTED_MODULE_2___default().shape({
    dataSrc: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
    dataTag: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
    dataDelayAdRequest: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
    dataPoster: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string)
  }),
  setAttributes: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func.isRequired)
};
/* harmony default export */ __webpack_exports__["default"] = (BlockEdit);

/***/ }),

/***/ "./assets/src/block-editor/blocks/amp-ima-video/index.js":
/*!***************************************************************!*\
  !*** ./assets/src/block-editor/blocks/amp-ima-video/index.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "name": function() { return /* binding */ name; },
/* harmony export */   "settings": function() { return /* binding */ settings; }
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit */ "./assets/src/block-editor/blocks/amp-ima-video/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./save */ "./assets/src/block-editor/blocks/amp-ima-video/save.js");
/**
 * WordPress dependencies
 */

/**
 * Internal dependencies
 */



const name = 'amp/amp-ima-video';
const settings = {
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('AMP IMA Video', 'amp'),
  description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Embeds a video player for instream video ads that are integrated with the IMA SDK', 'amp'),
  category: 'embed',
  icon: 'embed-generic',
  keywords: [(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Embed', 'amp')],
  // @todo Perhaps later add subtitles option and additional source options?
  attributes: {
    dataDelayAdRequest: {
      default: false,
      source: 'attribute',
      selector: 'amp-ima-video',
      attribute: 'data-delay-ad-request'
    },
    dataTag: {
      source: 'attribute',
      selector: 'amp-ima-video',
      attribute: 'data-tag'
    },
    dataSrc: {
      source: 'attribute',
      selector: 'amp-ima-video',
      attribute: 'data-src'
    },
    dataPoster: {
      source: 'attribute',
      selector: 'amp-ima-video',
      attribute: 'data-poster'
    },
    ampLayout: {
      default: 'responsive',
      source: 'attribute',
      selector: 'amp-ima-video',
      attribute: 'layout'
    },
    width: {
      default: 600,
      source: 'attribute',
      selector: 'amp-ima-video',
      attribute: 'width'
    },
    height: {
      default: 400,
      source: 'attribute',
      selector: 'amp-ima-video',
      attribute: 'height'
    }
  },
  edit: _edit__WEBPACK_IMPORTED_MODULE_1__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_2__["default"]
};

/***/ }),

/***/ "./assets/src/block-editor/blocks/amp-ima-video/save.js":
/*!**************************************************************!*\
  !*** ./assets/src/block-editor/blocks/amp-ima-video/save.js ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);


/**
 * External dependencies
 */


const BlockSave = _ref => {
  let {
    attributes
  } = _ref;
  const {
    width,
    dataSrc,
    ampLayout,
    dataTag,
    dataDelayAdRequest,
    height,
    dataPoster
  } = attributes;
  const imaProps = {
    layout: ampLayout,
    height,
    width,
    'data-tag': dataTag,
    'data-src': dataSrc
  };

  if (dataPoster) {
    imaProps['data-poster'] = dataPoster;
  }

  if (dataDelayAdRequest) {
    imaProps['data-delay-ad-request'] = dataDelayAdRequest;
  }

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("amp-ima-video", imaProps);
};

BlockSave.propTypes = {
  attributes: prop_types__WEBPACK_IMPORTED_MODULE_1___default().shape({
    width: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number),
    height: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number),
    ampLayout: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
    dataSrc: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
    dataTag: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
    dataDelayAdRequest: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
    dataPoster: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string)
  })
};
/* harmony default export */ __webpack_exports__["default"] = (BlockSave);

/***/ }),

/***/ "./assets/src/block-editor/blocks/amp-jwplayer/edit.js":
/*!*************************************************************!*\
  !*** ./assets/src/block-editor/blocks/amp-jwplayer/edit.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components */ "./assets/src/block-editor/components/index.js");



/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */




/**
 * Internal dependencies
 */



const BlockEdit = props => {
  const {
    attributes,
    setAttributes
  } = props;
  const {
    dataPlayerId,
    dataMediaId,
    dataPlaylistId
  } = attributes;
  const ampLayoutOptions = [{
    value: 'responsive',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Responsive', 'amp')
  }, {
    value: 'fixed-height',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Fixed Height', 'amp')
  }, {
    value: 'fixed',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Fixed', 'amp')
  }, {
    value: 'fill',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Fill', 'amp')
  }, {
    value: 'flex-item',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Flex-item', 'amp')
  }, {
    value: 'nodisplay',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('No Display', 'amp')
  }];
  let url = false;

  if (dataPlayerId && (dataMediaId || dataPlaylistId)) {
    if (dataPlaylistId) {
      url = `https://content.jwplatform.com/players/${dataPlaylistId}-${dataPlayerId}`;
    } else {
      url = `https://content.jwplatform.com/players/${dataMediaId}-${dataPlayerId}`;
    }
  }

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('JW Player Settings', 'amp')
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Player ID (required)', 'amp'),
    value: dataPlayerId,
    onChange: value => setAttributes({
      dataPlayerId: value
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Media ID (required if playlist ID not set)', 'amp'),
    value: dataMediaId,
    onChange: value => setAttributes({
      dataMediaId: value
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Playlist ID (required if media ID not set)', 'amp'),
    value: dataPlaylistId,
    onChange: value => setAttributes({
      dataPlaylistId: value
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_components__WEBPACK_IMPORTED_MODULE_6__.LayoutControls, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    ampLayoutOptions: ampLayoutOptions
  })))), url && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_components__WEBPACK_IMPORTED_MODULE_6__.MediaPlaceholder, {
    name: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('JW Player', 'amp'),
    url: url
  }), !url && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.Placeholder, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('JW Player', 'amp')
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("p", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Add required data to use the block.', 'amp'))));
};

BlockEdit.propTypes = {
  attributes: prop_types__WEBPACK_IMPORTED_MODULE_2___default().shape({
    dataPlayerId: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
    dataMediaId: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
    dataPlaylistId: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string)
  }),
  setAttributes: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func.isRequired)
};
/* harmony default export */ __webpack_exports__["default"] = (BlockEdit);

/***/ }),

/***/ "./assets/src/block-editor/blocks/amp-jwplayer/index.js":
/*!**************************************************************!*\
  !*** ./assets/src/block-editor/blocks/amp-jwplayer/index.js ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "name": function() { return /* binding */ name; },
/* harmony export */   "settings": function() { return /* binding */ settings; }
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit */ "./assets/src/block-editor/blocks/amp-jwplayer/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./save */ "./assets/src/block-editor/blocks/amp-jwplayer/save.js");
/**
 * WordPress dependencies
 */

/**
 * Internal dependencies
 */



const name = 'amp/amp-jwplayer';
const settings = {
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('AMP JW Player', 'amp'),
  description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Displays a cloud-hosted JW Player.', 'amp'),
  category: 'embed',
  icon: 'embed-generic',
  keywords: [(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Embed', 'amp')],
  attributes: {
    dataPlayerId: {
      source: 'attribute',
      selector: 'amp-jwplayer',
      attribute: 'data-player-id'
    },
    dataMediaId: {
      source: 'attribute',
      selector: 'amp-jwplayer',
      attribute: 'data-media-id'
    },
    dataPlaylistId: {
      source: 'attribute',
      selector: 'amp-jwplayer',
      attribute: 'data-playlist-id'
    },
    ampLayout: {
      default: 'responsive',
      source: 'attribute',
      selector: 'amp-jwplayer',
      attribute: 'layout'
    },
    width: {
      default: 600,
      source: 'attribute',
      selector: 'amp-jwplayer',
      attribute: 'width'
    },
    height: {
      default: 400,
      source: 'attribute',
      selector: 'amp-jwplayer',
      attribute: 'height'
    }
  },
  edit: _edit__WEBPACK_IMPORTED_MODULE_1__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_2__["default"]
};

/***/ }),

/***/ "./assets/src/block-editor/blocks/amp-jwplayer/save.js":
/*!*************************************************************!*\
  !*** ./assets/src/block-editor/blocks/amp-jwplayer/save.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);


/**
 * External dependencies
 */


const BlockSave = _ref => {
  let {
    attributes
  } = _ref;
  const {
    width,
    height,
    ampLayout,
    dataPlaylistId,
    dataPlayerId,
    dataMediaId
  } = attributes;
  const jwProps = {
    layout: ampLayout,
    height,
    'data-player-id': dataPlayerId
  };

  if ('fixed-height' !== ampLayout && width) {
    jwProps.width = width;
  }

  if (dataPlaylistId) {
    jwProps['data-playlist-id'] = dataPlaylistId;
  }

  if (dataMediaId) {
    jwProps['data-media-id'] = dataMediaId;
  }

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("amp-jwplayer", jwProps);
};

BlockSave.propTypes = {
  attributes: prop_types__WEBPACK_IMPORTED_MODULE_1___default().shape({
    dataPlayerId: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
    dataMediaId: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
    dataPlaylistId: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
    ampLayout: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
    height: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number),
    width: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number)
  })
};
/* harmony default export */ __webpack_exports__["default"] = (BlockSave);

/***/ }),

/***/ "./assets/src/block-editor/blocks/amp-mathml/edit.js":
/*!***********************************************************!*\
  !*** ./assets/src/block-editor/blocks/amp-mathml/edit.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);


/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */




const BlockEdit = _ref => {
  let {
    attributes,
    setAttributes
  } = _ref;
  const {
    dataFormula
  } = attributes;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.PlainText, {
    value: dataFormula,
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Insert formula', 'amp'),
    onChange: value => setAttributes({
      dataFormula: value
    })
  });
};

BlockEdit.propTypes = {
  attributes: prop_types__WEBPACK_IMPORTED_MODULE_1___default().shape({
    dataFormula: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string)
  }),
  setAttributes: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func.isRequired)
};
/* harmony default export */ __webpack_exports__["default"] = (BlockEdit);

/***/ }),

/***/ "./assets/src/block-editor/blocks/amp-mathml/index.js":
/*!************************************************************!*\
  !*** ./assets/src/block-editor/blocks/amp-mathml/index.js ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "name": function() { return /* binding */ name; },
/* harmony export */   "settings": function() { return /* binding */ settings; }
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit */ "./assets/src/block-editor/blocks/amp-mathml/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./save */ "./assets/src/block-editor/blocks/amp-mathml/save.js");
/**
 * WordPress dependencies
 */

/**
 * Internal dependencies
 */



const name = 'amp/amp-mathml';
const settings = {
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('AMP MathML', 'amp'),
  category: 'common',
  icon: 'welcome-learn-more',
  keywords: [(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Mathematical formula', 'amp'), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Scientific content ', 'amp')],
  attributes: {
    dataFormula: {
      source: 'attribute',
      selector: 'amp-mathml',
      attribute: 'data-formula'
    }
  },
  edit: _edit__WEBPACK_IMPORTED_MODULE_1__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_2__["default"]
};

/***/ }),

/***/ "./assets/src/block-editor/blocks/amp-mathml/save.js":
/*!***********************************************************!*\
  !*** ./assets/src/block-editor/blocks/amp-mathml/save.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);


/**
 * External dependencies
 */


const BlockSave = _ref => {
  let {
    attributes
  } = _ref;
  const {
    dataFormula
  } = attributes;
  const mathmlProps = {
    'data-formula': dataFormula,
    layout: 'container'
  };
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("amp-mathml", mathmlProps);
};

BlockSave.propTypes = {
  attributes: prop_types__WEBPACK_IMPORTED_MODULE_1___default().shape({
    dataFormula: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string)
  })
};
/* harmony default export */ __webpack_exports__["default"] = (BlockSave);

/***/ }),

/***/ "./assets/src/block-editor/blocks/amp-o2-player/edit.js":
/*!**************************************************************!*\
  !*** ./assets/src/block-editor/blocks/amp-o2-player/edit.js ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components */ "./assets/src/block-editor/components/index.js");



/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */




/**
 * Internal dependencies
 */



const BlockEdit = props => {
  const {
    attributes,
    setAttributes
  } = props;
  const {
    autoPlay,
    dataPid,
    dataVid,
    dataBcid,
    dataBid
  } = attributes;
  const ampLayoutOptions = [{
    value: 'responsive',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Responsive', 'amp')
  }, {
    value: 'fixed-height',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Fixed Height', 'amp')
  }, {
    value: 'fixed',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Fixed', 'amp')
  }, {
    value: 'fill',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Fill', 'amp')
  }, {
    value: 'flex-item',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Flex-item', 'amp')
  }, {
    value: 'nodisplay',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('No Display', 'amp')
  }];
  let url = false;

  if (dataPid && (dataBcid || dataVid)) {
    url = `https://delivery.vidible.tv/htmlembed/pid=${dataPid}/`;
  }

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('O2 Player Settings', 'amp')
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Player ID (required)', 'amp'),
    value: dataPid,
    onChange: value => setAttributes({
      dataPid: value
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Buyer Company ID (either buyer or video ID is required)', 'amp'),
    value: dataBcid,
    onChange: value => setAttributes({
      dataBcid: value
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Video ID (either buyer or video ID is required)', 'amp'),
    value: dataVid,
    onChange: value => setAttributes({
      dataVid: value
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Playlist ID', 'amp'),
    value: dataBid,
    onChange: value => setAttributes({
      dataBid: value
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Autoplay', 'amp'),
    checked: autoPlay,
    onChange: () => setAttributes({
      autoPlay: !autoPlay
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_components__WEBPACK_IMPORTED_MODULE_6__.LayoutControls, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    ampLayoutOptions: ampLayoutOptions
  })))), url && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_components__WEBPACK_IMPORTED_MODULE_6__.MediaPlaceholder, {
    name: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('O2 Player', 'amp'),
    url: url
  }), !url && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.Placeholder, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('O2 Player', 'amp')
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("p", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Add required data to use the block.', 'amp'))));
};

BlockEdit.propTypes = {
  attributes: prop_types__WEBPACK_IMPORTED_MODULE_2___default().shape({
    autoPlay: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool),
    dataPid: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
    dataVid: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
    dataBcid: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
    dataBid: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string)
  }),
  setAttributes: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func.isRequired)
};
/* harmony default export */ __webpack_exports__["default"] = (BlockEdit);

/***/ }),

/***/ "./assets/src/block-editor/blocks/amp-o2-player/index.js":
/*!***************************************************************!*\
  !*** ./assets/src/block-editor/blocks/amp-o2-player/index.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "name": function() { return /* binding */ name; },
/* harmony export */   "settings": function() { return /* binding */ settings; }
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit */ "./assets/src/block-editor/blocks/amp-o2-player/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./save */ "./assets/src/block-editor/blocks/amp-o2-player/save.js");
/**
 * WordPress dependencies
 */

/**
 * Internal dependencies
 */



const name = 'amp/amp-o2-player';
const settings = {
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('AMP O2 Player', 'amp'),
  category: 'embed',
  icon: 'embed-generic',
  keywords: [(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Embed', 'amp'), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('AOL O2Player', 'amp')],
  // @todo Add other useful macro toggles, e.g. showing relevant content.
  attributes: {
    dataPid: {
      source: 'attribute',
      selector: 'amp-o2-player',
      attribute: 'data-pid'
    },
    dataVid: {
      source: 'attribute',
      selector: 'amp-o2-player',
      attribute: 'data-vid'
    },
    dataBcid: {
      source: 'attribute',
      selector: 'amp-o2-player',
      attribute: 'data-bcid'
    },
    dataBid: {
      source: 'attribute',
      selector: 'amp-o2-player',
      attribute: 'data-bid'
    },
    autoPlay: {
      default: false
    },
    ampLayout: {
      default: 'responsive',
      source: 'attribute',
      selector: 'amp-o2-player',
      attribute: 'layout'
    },
    width: {
      default: 600,
      source: 'attribute',
      selector: 'amp-o2-player',
      attribute: 'width'
    },
    height: {
      default: 400,
      source: 'attribute',
      selector: 'amp-o2-player',
      attribute: 'height'
    }
  },
  edit: _edit__WEBPACK_IMPORTED_MODULE_1__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_2__["default"]
};

/***/ }),

/***/ "./assets/src/block-editor/blocks/amp-o2-player/save.js":
/*!**************************************************************!*\
  !*** ./assets/src/block-editor/blocks/amp-o2-player/save.js ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);


/**
 * External dependencies
 */


const BlockSave = _ref => {
  let {
    attributes
  } = _ref;
  const {
    dataPid,
    width,
    height,
    ampLayout,
    dataBid,
    autoPlay,
    dataBcid,
    dataVid
  } = attributes;
  const o2Props = {
    layout: ampLayout,
    height,
    'data-pid': dataPid
  };

  if ('fixed-height' !== ampLayout && width) {
    o2Props.width = width;
  }

  if (!autoPlay) {
    o2Props['data-macros'] = 'm.playback=click';
  }

  if (dataVid) {
    o2Props['data-vid'] = dataVid;
  } else if (dataBcid) {
    o2Props['data-bcid'] = dataBcid;
  }

  if (dataBid) {
    o2Props['data-bid'] = dataBid;
  }

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("amp-o2-player", o2Props);
};

BlockSave.propTypes = {
  attributes: prop_types__WEBPACK_IMPORTED_MODULE_1___default().shape({
    autoPlay: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
    dataPid: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
    dataPidL: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
    dataVid: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
    dataBcid: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
    dataBid: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
    width: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number),
    height: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number),
    ampLayout: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string)
  })
};
/* harmony default export */ __webpack_exports__["default"] = (BlockSave);

/***/ }),

/***/ "./assets/src/block-editor/blocks/amp-ooyala-player/edit.js":
/*!******************************************************************!*\
  !*** ./assets/src/block-editor/blocks/amp-ooyala-player/edit.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components */ "./assets/src/block-editor/components/index.js");



/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */




/**
 * Internal dependencies
 */



const BlockEdit = props => {
  const {
    attributes,
    setAttributes
  } = props;
  const {
    dataEmbedCode,
    dataPlayerId,
    dataPcode,
    dataPlayerVersion
  } = attributes;
  const ampLayoutOptions = [{
    value: 'responsive',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Responsive', 'amp')
  }, {
    value: 'fixed',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Fixed', 'amp')
  }, {
    value: 'fill',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Fill', 'amp')
  }, {
    value: 'flex-item',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Flex-item', 'amp')
  }];
  let url = false;

  if (dataEmbedCode && dataPlayerId && dataPcode) {
    url = `http://cf.c.ooyala.com/${dataEmbedCode}`;
  }

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Ooyala Settings', 'amp')
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Video embed code (required)', 'amp'),
    value: dataEmbedCode,
    onChange: value => setAttributes({
      dataEmbedCode: value
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Player ID (required)', 'amp'),
    value: dataPlayerId,
    onChange: value => setAttributes({
      dataPlayerId: value
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Provider code for the account (required)', 'amp'),
    value: dataPcode,
    onChange: value => setAttributes({
      dataPcode: value
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Player version', 'amp'),
    value: dataPlayerVersion,
    options: [{
      value: 'v3',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('V3', 'amp')
    }, {
      value: 'v4',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('V4', 'amp')
    }],
    onChange: value => setAttributes({
      dataPlayerVersion: value
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_components__WEBPACK_IMPORTED_MODULE_6__.LayoutControls, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    ampLayoutOptions: ampLayoutOptions
  })))), url && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_components__WEBPACK_IMPORTED_MODULE_6__.MediaPlaceholder, {
    name: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Ooyala Player', 'amp'),
    url: url
  }), !url && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.Placeholder, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Ooyala Player', 'amp')
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("p", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Add required data to use the block.', 'amp'))));
};

BlockEdit.propTypes = {
  attributes: prop_types__WEBPACK_IMPORTED_MODULE_2___default().shape({
    dataEmbedCode: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
    dataPlayerId: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
    dataPcode: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
    dataPlayerVersion: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string)
  }),
  setAttributes: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func.isRequired)
};
/* harmony default export */ __webpack_exports__["default"] = (BlockEdit);

/***/ }),

/***/ "./assets/src/block-editor/blocks/amp-ooyala-player/index.js":
/*!*******************************************************************!*\
  !*** ./assets/src/block-editor/blocks/amp-ooyala-player/index.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "name": function() { return /* binding */ name; },
/* harmony export */   "settings": function() { return /* binding */ settings; }
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit */ "./assets/src/block-editor/blocks/amp-ooyala-player/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./save */ "./assets/src/block-editor/blocks/amp-ooyala-player/save.js");
/**
 * WordPress dependencies
 */

/**
 * Internal dependencies
 */



const name = 'amp/amp-ooyala-player';
const settings = {
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('AMP Ooyala Player', 'amp'),
  description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Displays an Ooyala video.', 'amp'),
  category: 'embed',
  icon: 'embed-generic',
  keywords: [(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Embed', 'amp'), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Ooyala video', 'amp')],
  // @todo Add data-config attribute?
  attributes: {
    dataEmbedCode: {
      source: 'attribute',
      selector: 'amp-ooyala-player',
      attribute: 'data-embedcode'
    },
    dataPlayerId: {
      source: 'attribute',
      selector: 'amp-ooyala-player',
      attribute: 'data-playerid'
    },
    dataPcode: {
      source: 'attribute',
      selector: 'amp-ooyala-player',
      attribute: 'data-pcode'
    },
    dataPlayerVersion: {
      default: 'v3',
      source: 'attribute',
      selector: 'amp-ooyala-player',
      attribute: 'data-playerversion'
    },
    ampLayout: {
      default: 'responsive',
      source: 'attribute',
      selector: 'amp-ooyala-player',
      attribute: 'layout'
    },
    width: {
      default: 600,
      source: 'attribute',
      selector: 'amp-ooyala-player',
      attribute: 'width'
    },
    height: {
      default: 400,
      source: 'attribute',
      selector: 'amp-ooyala-player',
      attribute: 'height'
    }
  },
  edit: _edit__WEBPACK_IMPORTED_MODULE_1__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_2__["default"]
};

/***/ }),

/***/ "./assets/src/block-editor/blocks/amp-ooyala-player/save.js":
/*!******************************************************************!*\
  !*** ./assets/src/block-editor/blocks/amp-ooyala-player/save.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);


/**
 * External dependencies
 */


const BlockSave = _ref => {
  let {
    attributes
  } = _ref;
  const {
    dataEmbedCode,
    dataPlayerId,
    dataPcode,
    dataPlayerVersion,
    ampLayout,
    height,
    width
  } = attributes;
  const ooyalaProps = {
    layout: ampLayout,
    height,
    'data-embedcode': dataEmbedCode,
    'data-playerid': dataPlayerId,
    'data-pcode': dataPcode,
    'data-playerversion': dataPlayerVersion
  };

  if ('fixed-height' !== ampLayout && width) {
    ooyalaProps.width = width;
  }

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("amp-ooyala-player", ooyalaProps);
};

BlockSave.propTypes = {
  attributes: prop_types__WEBPACK_IMPORTED_MODULE_1___default().shape({
    ampLayout: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
    height: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number),
    width: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number),
    dataEmbedCode: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
    dataPlayerId: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
    dataPcode: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
    dataPlayerVersion: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string)
  })
};
/* harmony default export */ __webpack_exports__["default"] = (BlockSave);

/***/ }),

/***/ "./assets/src/block-editor/blocks/amp-reach-player/edit.js":
/*!*****************************************************************!*\
  !*** ./assets/src/block-editor/blocks/amp-reach-player/edit.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components */ "./assets/src/block-editor/components/index.js");



/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */




/**
 * Internal dependencies
 */



const BlockEdit = props => {
  const {
    attributes,
    setAttributes
  } = props;
  const {
    dataEmbedId
  } = attributes;
  const ampLayoutOptions = [{
    value: 'responsive',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Responsive', 'amp')
  }, {
    value: 'fixed-height',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Fixed Height', 'amp')
  }, {
    value: 'fixed',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Fixed', 'amp')
  }, {
    value: 'fill',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Fill', 'amp')
  }, {
    value: 'flex-item',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Flex-item', 'amp')
  }];
  let url = false;

  if (dataEmbedId) {
    url = 'https://media-cdn.beachfrontreach.com/acct_1/video/';
  }

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Reach Settings', 'amp')
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Embed ID (required)', 'amp'),
    value: dataEmbedId,
    onChange: value => setAttributes({
      dataEmbedId: value
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_components__WEBPACK_IMPORTED_MODULE_6__.LayoutControls, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    ampLayoutOptions: ampLayoutOptions
  })))), url && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_components__WEBPACK_IMPORTED_MODULE_6__.MediaPlaceholder, {
    name: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Reach Player', 'amp'),
    url: url
  }), !url && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.Placeholder, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Reach Player', 'amp')
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("p", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Add Reach player embed ID to use the block.', 'amp'))));
};

BlockEdit.propTypes = {
  attributes: prop_types__WEBPACK_IMPORTED_MODULE_2___default().shape({
    dataEmbedId: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string)
  }),
  setAttributes: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func.isRequired)
};
/* harmony default export */ __webpack_exports__["default"] = (BlockEdit);

/***/ }),

/***/ "./assets/src/block-editor/blocks/amp-reach-player/index.js":
/*!******************************************************************!*\
  !*** ./assets/src/block-editor/blocks/amp-reach-player/index.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "name": function() { return /* binding */ name; },
/* harmony export */   "settings": function() { return /* binding */ settings; }
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit */ "./assets/src/block-editor/blocks/amp-reach-player/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./save */ "./assets/src/block-editor/blocks/amp-reach-player/save.js");
/**
 * WordPress dependencies
 */

/**
 * Internal dependencies
 */



const name = 'amp/amp-reach-player';
const settings = {
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('AMP Reach Player', 'amp'),
  description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Displays the Reach Player configured in the Beachfront Reach platform.', 'amp'),
  category: 'embed',
  icon: 'embed-generic',
  keywords: [(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Embed', 'amp'), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Beachfront Reach video', 'amp')],
  attributes: {
    dataEmbedId: {
      source: 'attribute',
      selector: 'amp-reach-player',
      attribute: 'data-embed-id'
    },
    ampLayout: {
      default: 'fixed-height',
      source: 'attribute',
      selector: 'amp-reach-player',
      attribute: 'layout'
    },
    width: {
      default: 600,
      source: 'attribute',
      selector: 'amp-reach-player',
      attribute: 'width'
    },
    height: {
      default: 400,
      source: 'attribute',
      selector: 'amp-reach-player',
      attribute: 'height'
    }
  },
  edit: _edit__WEBPACK_IMPORTED_MODULE_1__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_2__["default"]
};

/***/ }),

/***/ "./assets/src/block-editor/blocks/amp-reach-player/save.js":
/*!*****************************************************************!*\
  !*** ./assets/src/block-editor/blocks/amp-reach-player/save.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);


/**
 * External dependencies
 */


const BlockSave = _ref => {
  let {
    attributes
  } = _ref;
  const {
    dataEmbedId,
    ampLayout,
    height,
    width
  } = attributes;
  const reachProps = {
    layout: ampLayout,
    height,
    'data-embed-id': dataEmbedId
  };

  if ('fixed-height' !== ampLayout && width) {
    reachProps.width = width;
  }

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("amp-reach-player", reachProps);
};

BlockSave.propTypes = {
  attributes: prop_types__WEBPACK_IMPORTED_MODULE_1___default().shape({
    dataEmbedId: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
    ampLayout: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
    height: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number),
    width: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number)
  })
};
/* harmony default export */ __webpack_exports__["default"] = (BlockSave);

/***/ }),

/***/ "./assets/src/block-editor/blocks/amp-springboard-player/edit.js":
/*!***********************************************************************!*\
  !*** ./assets/src/block-editor/blocks/amp-springboard-player/edit.js ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components */ "./assets/src/block-editor/components/index.js");



/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */




/**
 * Internal dependencies
 */



const BlockEdit = props => {
  const {
    attributes,
    setAttributes
  } = props;
  const {
    dataSiteId,
    dataPlayerId,
    dataContentId,
    dataDomain,
    dataMode,
    dataItems
  } = attributes;
  const ampLayoutOptions = [{
    value: 'responsive',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Responsive', 'amp')
  }, {
    value: 'fixed',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Fixed', 'amp')
  }, {
    value: 'fill',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Fill', 'amp')
  }, {
    value: 'flex-item',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Flex-item', 'amp')
  }];
  let url = false;

  if (dataSiteId && dataContentId && dataDomain && dataMode && dataItems) {
    url = 'https://cms.springboardplatform.com/embed_iframe/';
  }

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Springboard Player Settings', 'amp')
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Site ID (required)', 'amp'),
    value: dataSiteId,
    onChange: value => setAttributes({
      dataSiteId: value
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Content ID (required)', 'amp'),
    value: dataContentId,
    onChange: value => setAttributes({
      dataContentId: value
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Player ID', 'amp'),
    value: dataPlayerId,
    onChange: value => setAttributes({
      dataPlayerId: value
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Springboard partner domain', 'amp'),
    value: dataDomain,
    onChange: value => setAttributes({
      dataDomain: value
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Mode (required)', 'amp'),
    value: dataMode,
    options: [{
      value: 'video',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Video', 'amp')
    }, {
      value: 'playlist',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Playlist', 'amp')
    }],
    onChange: value => setAttributes({
      dataMode: value
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.TextControl, {
    type: "number",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Number of video is playlist (required)', 'amp'),
    value: dataItems,
    onChange: value => setAttributes({
      dataItems: value
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_components__WEBPACK_IMPORTED_MODULE_6__.LayoutControls, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    ampLayoutOptions: ampLayoutOptions
  })))), url && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_components__WEBPACK_IMPORTED_MODULE_6__.MediaPlaceholder, {
    name: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Springboard Player', 'amp'),
    url: url
  }), !url && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.Placeholder, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Springboard Player', 'amp')
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("p", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Add required data to use the block.', 'amp'))));
};

BlockEdit.propTypes = {
  attributes: prop_types__WEBPACK_IMPORTED_MODULE_2___default().shape({
    dataSiteId: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
    dataPlayerId: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
    dataContentId: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
    dataDomain: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
    dataMode: prop_types__WEBPACK_IMPORTED_MODULE_2___default().oneOf(['video', 'playlist']),
    dataItems: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().number)
  }),
  setAttributes: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func.isRequired)
};
/* harmony default export */ __webpack_exports__["default"] = (BlockEdit);

/***/ }),

/***/ "./assets/src/block-editor/blocks/amp-springboard-player/index.js":
/*!************************************************************************!*\
  !*** ./assets/src/block-editor/blocks/amp-springboard-player/index.js ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "name": function() { return /* binding */ name; },
/* harmony export */   "settings": function() { return /* binding */ settings; }
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit */ "./assets/src/block-editor/blocks/amp-springboard-player/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./save */ "./assets/src/block-editor/blocks/amp-springboard-player/save.js");
/**
 * WordPress dependencies
 */

/**
 * Internal dependencies
 */



const name = 'amp/amp-springboard-player';
const settings = {
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('AMP Springboard Player', 'amp'),
  description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Displays the Springboard Player used in the Springboard Video Platform', 'amp'),
  category: 'embed',
  icon: 'embed-generic',
  keywords: [(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Embed', 'amp')],
  attributes: {
    dataSiteId: {
      source: 'attribute',
      selector: 'amp-springboard-player',
      attribute: 'data-site-id'
    },
    dataContentId: {
      source: 'attribute',
      selector: 'amp-springboard-player',
      attribute: 'data-content-id'
    },
    dataPlayerId: {
      source: 'attribute',
      selector: 'amp-springboard-player',
      attribute: 'data-player-id'
    },
    dataDomain: {
      source: 'attribute',
      selector: 'amp-springboard-player',
      attribute: 'data-domain'
    },
    dataMode: {
      default: 'video',
      source: 'attribute',
      selector: 'amp-springboard-player',
      attribute: 'data-mode'
    },
    dataItems: {
      default: 1,
      source: 'attribute',
      selector: 'amp-springboard-player',
      attribute: 'data-items'
    },
    ampLayout: {
      default: 'responsive',
      source: 'attribute',
      selector: 'amp-springboard-player',
      attribute: 'layout'
    },
    width: {
      default: 600,
      source: 'attribute',
      selector: 'amp-springboard-player',
      attribute: 'width'
    },
    height: {
      default: 400,
      source: 'attribute',
      selector: 'amp-springboard-player',
      attribute: 'height'
    }
  },
  edit: _edit__WEBPACK_IMPORTED_MODULE_1__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_2__["default"]
};

/***/ }),

/***/ "./assets/src/block-editor/blocks/amp-springboard-player/save.js":
/*!***********************************************************************!*\
  !*** ./assets/src/block-editor/blocks/amp-springboard-player/save.js ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);


/**
 * External dependencies
 */


const BlockSave = _ref => {
  let {
    attributes
  } = _ref;
  const {
    dataSiteId,
    dataPlayerId,
    dataContentId,
    dataDomain,
    dataMode,
    dataItems,
    ampLayout,
    height,
    width
  } = attributes;
  const springboardProps = {
    layout: ampLayout,
    height,
    'data-site-id': dataSiteId,
    'data-mode': dataMode,
    'data-content-id': dataContentId,
    'data-player-id': dataPlayerId,
    'data-domain': dataDomain,
    'data-items': dataItems
  };

  if ('fixed-height' !== ampLayout && width) {
    springboardProps.width = attributes.width;
  }

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("amp-springboard-player", springboardProps);
};

BlockSave.propTypes = {
  attributes: prop_types__WEBPACK_IMPORTED_MODULE_1___default().shape({
    dataSiteId: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
    dataPlayerId: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
    dataContentId: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
    dataDomain: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
    dataMode: prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOf(['video', 'playlist']),
    dataItems: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number),
    ampLayout: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
    height: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number),
    width: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number)
  })
};
/* harmony default export */ __webpack_exports__["default"] = (BlockSave);

/***/ }),

/***/ "./assets/src/block-editor/blocks/amp-timeago/edit.js":
/*!************************************************************!*\
  !*** ./assets/src/block-editor/blocks/amp-timeago/edit.js ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components */ "./assets/src/block-editor/components/index.js");



/**
 * External dependencies
 */


/**
 * WordPress dependencies
 */




/**
 * Internal dependencies
 */



const BlockEdit = props => {
  const {
    attributes,
    setAttributes
  } = props;
  const {
    align,
    cutoff,
    dateTime
  } = attributes;
  let timeAgo;

  if (dateTime) {
    if (cutoff && parseInt(cutoff) < Math.abs(moment__WEBPACK_IMPORTED_MODULE_2___default()(dateTime).diff(moment__WEBPACK_IMPORTED_MODULE_2___default()(), 'seconds'))) {
      timeAgo = moment__WEBPACK_IMPORTED_MODULE_2___default()(dateTime).format('dddd D MMMM HH:mm');
    } else {
      timeAgo = moment__WEBPACK_IMPORTED_MODULE_2___default()(dateTime).fromNow();
    }
  } else {
    timeAgo = moment__WEBPACK_IMPORTED_MODULE_2___default()(Date.now()).fromNow();
    setAttributes({
      dateTime: moment__WEBPACK_IMPORTED_MODULE_2___default()(moment__WEBPACK_IMPORTED_MODULE_2___default()(), (moment__WEBPACK_IMPORTED_MODULE_2___default().ISO_8601), true).format()
    });
  }

  const ampLayoutOptions = [{
    value: '',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Responsive', 'amp')
  }, {
    value: 'fixed',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Fixed', 'amp')
  }, {
    value: 'fixed-height',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Fixed Height', 'amp')
  }];
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__.InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('AMP Timeago Settings', 'amp')
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.DateTimePicker, {
    locale: "en",
    currentDate: dateTime || moment__WEBPACK_IMPORTED_MODULE_2___default()(),
    onChange: value => setAttributes({
      dateTime: moment__WEBPACK_IMPORTED_MODULE_2___default()(value, (moment__WEBPACK_IMPORTED_MODULE_2___default().ISO_8601), true).format()
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_components__WEBPACK_IMPORTED_MODULE_7__.LayoutControls, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    ampLayoutOptions: ampLayoutOptions
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.TextControl, {
    type: "number",
    className: "blocks-amp-timeout__cutoff",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Cutoff (seconds)', 'amp'),
    value: cutoff !== undefined ? cutoff : '',
    onChange: value => setAttributes({
      cutoff: value
    })
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__.BlockControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__.BlockAlignmentToolbar, {
    value: align,
    onChange: nextAlign => {
      setAttributes({
        align: nextAlign
      });
    },
    controls: ['left', 'center', 'right']
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("time", {
    dateTime: dateTime
  }, timeAgo));
};

BlockEdit.propTypes = {
  attributes: prop_types__WEBPACK_IMPORTED_MODULE_3___default().shape({
    align: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),
    cutoff: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().number),
    dateTime: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string)
  }),
  setAttributes: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func.isRequired)
};
/* harmony default export */ __webpack_exports__["default"] = (BlockEdit);

/***/ }),

/***/ "./assets/src/block-editor/blocks/amp-timeago/index.js":
/*!*************************************************************!*\
  !*** ./assets/src/block-editor/blocks/amp-timeago/index.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "name": function() { return /* binding */ name; },
/* harmony export */   "settings": function() { return /* binding */ settings; }
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit */ "./assets/src/block-editor/blocks/amp-timeago/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./save */ "./assets/src/block-editor/blocks/amp-timeago/save.js");
/**
 * WordPress dependencies
 */

/**
 * Internal dependencies
 */



const name = 'amp/amp-timeago';
const settings = {
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('AMP Timeago', 'amp'),
  category: 'common',
  icon: 'backup',
  keywords: [(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Time difference', 'amp'), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Time ago', 'amp'), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Date', 'amp')],
  attributes: {
    align: {
      type: 'string'
    },
    cutoff: {
      source: 'attribute',
      selector: 'amp-timeago',
      attribute: 'cutoff'
    },
    dateTime: {
      source: 'attribute',
      selector: 'amp-timeago',
      attribute: 'datetime'
    },
    ampLayout: {
      default: 'fixed-height',
      source: 'attribute',
      selector: 'amp-timeago',
      attribute: 'layout'
    },
    width: {
      source: 'attribute',
      selector: 'amp-timeago',
      attribute: 'width'
    },
    height: {
      default: 20,
      source: 'attribute',
      selector: 'amp-timeago',
      attribute: 'height'
    }
  },

  getEditWrapperProps(attributes) {
    const {
      align
    } = attributes;

    if ('left' === align || 'right' === align || 'center' === align) {
      return {
        'data-align': align
      };
    }

    return undefined;
  },

  edit: _edit__WEBPACK_IMPORTED_MODULE_1__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_2__["default"]
};

/***/ }),

/***/ "./assets/src/block-editor/blocks/amp-timeago/save.js":
/*!************************************************************!*\
  !*** ./assets/src/block-editor/blocks/amp-timeago/save.js ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);


/**
 * External dependencies
 */



const BlockSave = _ref => {
  let {
    attributes
  } = _ref;
  const {
    ampLayout,
    width,
    height,
    align,
    cutoff,
    dateTime
  } = attributes;
  const timeagoProps = {
    layout: 'responsive',
    className: 'align' + (align || 'none'),
    datetime: dateTime,
    locale: 'en'
  };

  if (cutoff) {
    timeagoProps.cutoff = cutoff;
  }

  if (ampLayout) {
    switch (ampLayout) {
      case 'fixed-height':
        if (height) {
          timeagoProps.height = height;
          timeagoProps.layout = ampLayout;
        }

        break;

      case 'fixed':
        if (height && width) {
          timeagoProps.height = height;
          timeagoProps.width = width;
          timeagoProps.layout = ampLayout;
        }

        break;

      default:
        break;
    }
  }

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("amp-timeago", timeagoProps, moment__WEBPACK_IMPORTED_MODULE_1___default()(attributes.dateTime).format('dddd D MMMM HH:mm'));
};

BlockSave.propTypes = {
  attributes: prop_types__WEBPACK_IMPORTED_MODULE_2___default().shape({
    width: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().number),
    height: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().number),
    ampLayout: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
    align: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
    cutoff: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().number),
    dateTime: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string)
  })
};
/* harmony default export */ __webpack_exports__["default"] = (BlockSave);

/***/ }),

/***/ "./assets/src/block-editor/components/amp-preview-button.js":
/*!******************************************************************!*\
  !*** ./assets/src/block-editor/components/amp-preview-button.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../helpers */ "./assets/src/block-editor/helpers/index.js");



/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */






/**
 * Internal dependencies
 */



var ampFilledIcon = function ampFilledIcon(props) {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", props, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M41.629 28.161 28.624 49.804h-2.356l2.33-14.102-7.214.009-.1.002c-.65 0-1.176-.526-1.176-1.176 0-.279.259-.751.259-.751L33.329 12.17l2.395.01-2.388 14.123 7.251-.009h.115c.65 0 1.176.525 1.176 1.175 0 .264-.103.495-.25.691v.001ZM31 0C13.879 0 0 13.88 0 31c0 17.121 13.879 31 31 31 17.12 0 31-13.879 31-31C62 13.88 48.12 0 31 0Z",
    fill: "#82878c"
  }));
};

ampFilledIcon.defaultProps = {
  width: "62",
  height: "62",
  xmlns: "http://www.w3.org/2000/svg"
};

var ampBlackIcon = function ampBlackIcon(props) {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", props, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    className: "outer",
    d: "M48 12c19.9 0 36 16.1 36 36S67.9 84 48 84 12 67.9 12 48s16.1-36 36-36",
    fill: "none"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    className: "inner",
    d: "M48 33c8.285 0 15 6.716 15 15 0 8.284-6.715 15-15 15-8.284 0-15-6.716-15-15 0-8.284 6.716-15 15-15Zm-1.15 24.098 6.293-10.472a.555.555 0 0 0 .12-.335.569.569 0 0 0-.624-.568l-3.508.004 1.155-6.834-1.159-.005-6.272 10.46s-.125.228-.125.363a.57.57 0 0 0 .617.569l3.49-.005-1.126 6.823h1.14Z",
    fill: "none"
  }));
};

ampBlackIcon.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg"
};
/**
 * Writes the message and graphic in the new preview window that was opened.
 *
 * Forked from the Core component <PostPreviewButton>.
 *
 * @see https://github.com/WordPress/gutenberg/blob/95e769df1f82f6b0ef587d81af65dd2f48cd1c38/packages/editor/src/components/post-preview-button/index.js#L17-L93
 * @param {Document} targetDocument The target document.
 */

function writeInterstitialMessage(targetDocument) {
  let markup = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.renderToString)((0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "editor-post-preview-button__interstitial-message"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Icon, {
    icon: ampBlackIcon({
      viewBox: '0 0 98 98'
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('Generating AMP preview…', 'amp'))));
  markup += `
		<style>
			body {
				margin: 0;
			}
			.editor-post-preview-button__interstitial-message {
				display: flex;
				flex-direction: column;
				align-items: center;
				justify-content: center;
				height: 100vh;
				width: 100vw;
			}
			@-webkit-keyframes paint {
				0% {
					stroke-dashoffset: 0;
				}
			}
			@-moz-keyframes paint {
				0% {
					stroke-dashoffset: 0;
				}
			}
			@-o-keyframes paint {
				0% {
					stroke-dashoffset: 0;
				}
			}
			@keyframes paint {
				0% {
					stroke-dashoffset: 0;
				}
			}
			.editor-post-preview-button__interstitial-message svg {
				width: 198px;
				height: 198px;
				stroke: #555d66;
				stroke-width: 0.75;
			}
			.editor-post-preview-button__interstitial-message svg .outer,
			.editor-post-preview-button__interstitial-message svg .inner {
				stroke-dasharray: 280;
				stroke-dashoffset: 280;
				-webkit-animation: paint 1.5s ease infinite alternate;
				-moz-animation: paint 1.5s ease infinite alternate;
				-o-animation: paint 1.5s ease infinite alternate;
				animation: paint 1.5s ease infinite alternate;
			}
			p {
				text-align: center;
				font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
			}
		</style>
	`;
  targetDocument.write(markup);
  targetDocument.title = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('Generating AMP preview…', 'amp');
  targetDocument.close();
}
/**
 * A 'Preview AMP' button, forked from the Core 'Preview' button: <PostPreviewButton>.
 *
 * @see https://github.com/WordPress/gutenberg/blob/95e769df1f82f6b0ef587d81af65dd2f48cd1c38/packages/editor/src/components/post-preview-button/index.js#L95-L200
 */


class AmpPreviewButton extends _wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Component {
  /**
   * Constructs the class.
   *
   * @param {*} args Constructor arguments.
   */
  constructor() {
    super(...arguments);
    this.buttonRef = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createRef)();
    this.openPreviewWindow = this.openPreviewWindow.bind(this);
  }
  /**
   * Called after the component is updated.
   *
   * @param {Object} prevProps The previous props.
   */


  componentDidUpdate(prevProps) {
    const {
      previewLink
    } = this.props; // This relies on the window being responsible to unset itself when
    // navigation occurs or a new preview window is opened, to avoid
    // unintentional forceful redirects.

    if (previewLink && !prevProps.previewLink) {
      this.setPreviewWindowLink(previewLink);
    }
  }
  /**
   * Sets the preview window's location to the given URL, if a preview window
   * exists and is not closed.
   *
   * @param {string} url URL to assign as preview window location.
   */


  setPreviewWindowLink(url) {
    const {
      previewWindow
    } = this;

    if (previewWindow && !previewWindow.closed) {
      previewWindow.location = url;

      if (this.buttonRef.current) {
        this.buttonRef.current.focus();
      }
    }
  }
  /**
   * Gets the window target.
   */


  getWindowTarget() {
    const {
      postId
    } = this.props;
    return `amp-preview-${postId}`;
  }
  /**
   * Opens the preview window.
   *
   * @param {Event} event The DOM event.
   */


  openPreviewWindow(event) {
    // Our Preview button has its 'href' and 'target' set correctly for a11y
    // purposes. Unfortunately, though, we can't rely on the default 'click'
    // handler since sometimes it incorrectly opens a new tab instead of reusing
    // the existing one.
    // https://github.com/WordPress/gutenberg/pull/8330
    event.preventDefault();
    /** @type {HTMLAnchorElement} target */

    const {
      target
    } = event; // Open up a Preview tab if needed. This is where we'll show the preview.

    if (!this.previewWindow || this.previewWindow.closed) {
      this.previewWindow = window.open('', this.getWindowTarget());
    } // Focus the Preview tab. This might not do anything, depending on the browser's
    // and user's preferences.
    // https://html.spec.whatwg.org/multipage/interaction.html#dom-window-focus


    this.previewWindow.focus(); // If we don't need to autosave the post before previewing, then we simply
    // load the Preview URL in the Preview tab.

    if (!this.props.isAutosaveable) {
      this.setPreviewWindowLink(target.href);
      return;
    } // Request an autosave. This happens asynchronously and causes the component
    // to update when finished.


    if (this.props.isDraft) {
      this.props.savePost({
        isPreview: true
      });
    } else {
      this.props.autosave({
        isPreview: true
      });
    } // Display a 'Generating preview' message in the Preview tab while we wait for the
    // autosave to finish.


    writeInterstitialMessage(this.previewWindow.document);
  }
  /**
   * Renders the component.
   */


  render() {
    const {
      previewLink,
      currentPostLink,
      errorMessages,
      isEnabled,
      isSaveable,
      isStandardMode
    } = this.props; // Link to the `?preview=true` URL if we have it, since this lets us see
    // changes that were autosaved since the post was last published. Otherwise,
    // just link to the post's URL.

    const href = previewLink || currentPostLink;
    return isEnabled && !errorMessages.length && !isStandardMode && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
      className: "amp-editor-post-preview",
      href: href,
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('Preview AMP', 'amp'),
      isSecondary: true,
      disabled: !isSaveable,
      onClick: this.openPreviewWindow,
      ref: this.buttonRef
    }, ampFilledIcon({
      viewBox: '0 0 62 62',
      width: 18,
      height: 18
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.VisuallyHidden, {
      as: "span"
    },
    /* translators: accessibility text */
    (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('(opens in a new tab)', 'amp')));
  }

}

AmpPreviewButton.propTypes = {
  autosave: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func.isRequired),
  currentPostLink: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string.isRequired),
  postId: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().number.isRequired),
  previewLink: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
  isAutosaveable: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool.isRequired),
  isDraft: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool.isRequired),
  isEnabled: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool.isRequired),
  isSaveable: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool.isRequired),
  savePost: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func.isRequired),
  errorMessages: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().array),
  isStandardMode: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool)
};
/* harmony default export */ __webpack_exports__["default"] = ((0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_4__.compose)([(0,_wordpress_data__WEBPACK_IMPORTED_MODULE_5__.withSelect)((select, _ref) => {
  let {
    forcePreviewLink,
    forceIsAutosaveable
  } = _ref;
  const {
    getCurrentPostId,
    getEditedPostAttribute,
    isEditedPostSaveable,
    isEditedPostAutosaveable,
    getEditedPostPreviewLink
  } = select('core/editor');
  const {
    getAmpUrl,
    getAmpPreviewLink,
    getErrorMessages,
    isStandardMode
  } = select('amp/block-editor');

  const copyQueryArgs = (source, destination) => {
    const sourceUrl = new URL(source);
    const destinationUrl = new URL(destination);

    for (const [key, value] of sourceUrl.searchParams.entries()) {
      destinationUrl.searchParams.set(key, value);
    }

    return destinationUrl.href;
  };

  const initialPreviewLink = getEditedPostPreviewLink();
  const previewLink = initialPreviewLink ? copyQueryArgs(initialPreviewLink, getAmpPreviewLink()) : undefined;
  return {
    postId: getCurrentPostId(),
    currentPostLink: getAmpUrl(),
    previewLink: forcePreviewLink !== undefined ? forcePreviewLink : previewLink,
    isSaveable: isEditedPostSaveable(),
    isAutosaveable: forceIsAutosaveable || isEditedPostAutosaveable(),
    isDraft: ['draft', 'auto-draft'].indexOf(getEditedPostAttribute('status')) !== -1,
    isEnabled: (0,_helpers__WEBPACK_IMPORTED_MODULE_7__.isAMPEnabled)(),
    errorMessages: getErrorMessages(),
    isStandardMode: isStandardMode()
  };
}), (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_5__.withDispatch)(dispatch => ({
  autosave: dispatch('core/editor').autosave,
  savePost: dispatch('core/editor').savePost
}))])(AmpPreviewButton));

/***/ }),

/***/ "./assets/src/block-editor/components/index.js":
/*!*****************************************************!*\
  !*** ./assets/src/block-editor/components/index.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MediaPlaceholder": function() { return /* reexport safe */ _media_placeholder__WEBPACK_IMPORTED_MODULE_0__["default"]; },
/* harmony export */   "LayoutControls": function() { return /* reexport safe */ _layout_controls__WEBPACK_IMPORTED_MODULE_1__["default"]; },
/* harmony export */   "withMediaLibraryNotice": function() { return /* reexport safe */ _with_media_library_notice__WEBPACK_IMPORTED_MODULE_2__["default"]; }
/* harmony export */ });
/* harmony import */ var _media_placeholder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./media-placeholder */ "./assets/src/block-editor/components/media-placeholder.js");
/* harmony import */ var _layout_controls__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./layout-controls */ "./assets/src/block-editor/components/layout-controls.js");
/* harmony import */ var _with_media_library_notice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./with-media-library-notice */ "./assets/src/block-editor/components/with-media-library-notice.js");




/***/ }),

/***/ "./assets/src/block-editor/components/layout-controls.js":
/*!***************************************************************!*\
  !*** ./assets/src/block-editor/components/layout-controls.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);


/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */



/**
 * Layout controls for AMP blocks' attributes: layout, width, height.
 *
 * @param {Object}   props                  Component props.
 * @param {Object}   props.attributes       Block attributes.
 * @param {Function} props.setAttributes    Callback to update block attributes.
 * @param {Array}    props.ampLayoutOptions Layout options.
 * @return {JSX.Element} Controls.
 */

const LayoutControls = _ref => {
  let {
    attributes,
    setAttributes,
    ampLayoutOptions
  } = _ref;
  const {
    ampLayout,
    height,
    width
  } = attributes;
  const showHeightNotice = !height && ('fixed' === ampLayout || 'fixed-height' === ampLayout);
  const showWidthNotice = !width && 'fixed' === ampLayout;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Layout', 'amp'),
    value: ampLayout,
    options: ampLayoutOptions,
    onChange: value => setAttributes({
      ampLayout: value
    })
  }), showWidthNotice && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Notice, {
    status: "error",
    isDismissible: false
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.sprintf)(
  /* translators: %s is the layout name */
  (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Width is required for %s layout', 'amp'), ampLayout)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
    type: "number",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Width (px)', 'amp'),
    value: width !== undefined ? width : '',
    onChange: value => setAttributes({
      width: value
    })
  }), showHeightNotice && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Notice, {
    status: "error",
    isDismissible: false
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.sprintf)(
  /* translators: %s is the layout name */
  (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Height is required for %s layout', 'amp'), ampLayout)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
    type: "number",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Height (px)', 'amp'),
    value: height,
    onChange: value => setAttributes({
      height: value
    })
  }));
};

LayoutControls.propTypes = {
  attributes: prop_types__WEBPACK_IMPORTED_MODULE_1___default().shape({
    ampLayout: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
    width: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number),
    height: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number)
  }).isRequired,
  setAttributes: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func.isRequired),
  ampLayoutOptions: prop_types__WEBPACK_IMPORTED_MODULE_1___default().arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default().shape({
    value: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string.isRequired),
    label: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string.isRequired)
  })).isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (LayoutControls);

/***/ }),

/***/ "./assets/src/block-editor/components/media-placeholder.js":
/*!*****************************************************************!*\
  !*** ./assets/src/block-editor/components/media-placeholder.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);


/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */



/**
 * Display media placeholder.
 *
 * @param {Object} props      Component props.
 * @param {string} props.name Block's name.
 * @param {string} props.url  URL.
 * @return {JSX.Element} Placeholder.
 */

const MediaPlaceholder = _ref => {
  let {
    name,
    url
  } = _ref;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Placeholder, {
    label: name
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "components-placeholder__error"
  }, url), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "components-placeholder__error"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Previews for this are unavailable in the editor, sorry!', 'amp')));
};

MediaPlaceholder.propTypes = {
  name: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string.isRequired),
  url: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string)
};
/* harmony default export */ __webpack_exports__["default"] = (MediaPlaceholder);

/***/ }),

/***/ "./assets/src/block-editor/components/with-media-library-notice.js":
/*!*************************************************************************!*\
  !*** ./assets/src/block-editor/components/with-media-library-notice.js ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _common_components_select_media_frame__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/components/select-media-frame */ "./assets/src/common/components/select-media-frame.js");
/* harmony import */ var _common_helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/helpers */ "./assets/src/common/helpers/index.js");
/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */



const {
  wp
} = window;
/**
 * Gets a wrapped version of MediaUpload to display a notice for small images.
 *
 * Only applies to the MediaUpload in the Featured Image component, PostFeaturedImage.
 *
 * @param {Function} InitialMediaUpload The MediaUpload component, passed from the filter.
 * @param {Object}   minImageDimensions Minimum required image dimensions.
 * @return {Function} The wrapped component.
 */

/* harmony default export */ __webpack_exports__["default"] = ((InitialMediaUpload, minImageDimensions) => {
  if (!(0,lodash__WEBPACK_IMPORTED_MODULE_0__.isFunction)(InitialMediaUpload)) {
    return InitialMediaUpload;
  }

  const {
    width: EXPECTED_WIDTH,
    height: EXPECTED_HEIGHT
  } = minImageDimensions;
  /**
   * Mostly copied from customize-controls.js, with slight changes.
   *
   * @see https://github.com/WordPress/wordpress-develop/blob/c80325658f85d24ff82295dd2d55bfdf789f4163/src/js/_enqueues/wp/customize/controls.js#L4695
   * @see wp.media.HeaderControl
   */

  return class FeaturedImageMediaUpload extends InitialMediaUpload {
    /**
     * Constructs the class.
     *
     * @param {*} args Constructor arguments.
     */
    constructor() {
      super(...arguments); // @todo This should be a different event.
      // This class should only be present in the MediaUpload for the Featured Image.

      if ('editor-post-featured-image__media-modal' === this.props.modalClass) {
        this.initFeaturedImage = this.initFeaturedImage.bind(this);
        this.initFeaturedImage();
      } else {
        // Restore the original`onOpen` callback as it will be overridden by the parent class.
        this.frame.off('open', this.onOpen);
        this.frame.on('open', super.onOpen.bind(this));
      }
    }
    /**
     * Initialize.
     *
     * Mainly copied from customize-controls.js, like most of this class.
     *
     * Overwrites the Media Library frame, this.frame.
     * Adds a suggested width and height.
     */


    initFeaturedImage() {
      const FeaturedImageSelectMediaFrame = (0,_common_components_select_media_frame__WEBPACK_IMPORTED_MODULE_2__.getSelectMediaFrame)(_common_components_select_media_frame__WEBPACK_IMPORTED_MODULE_2__.FeaturedImageToolbarSelect);
      const FeaturedImageLibrary = wp.media.controller.FeaturedImage.extend({
        defaults: { ...wp.media.controller.FeaturedImage.prototype.defaults,
          date: false,
          filterable: false,
          // Note: These suggestions are shown in the media library image browser.
          suggestedWidth: EXPECTED_WIDTH,
          suggestedHeight: EXPECTED_HEIGHT
        }
      });
      this.frame = new FeaturedImageSelectMediaFrame({
        allowedTypes: this.props.allowedTypes,
        state: 'featured-image',
        states: [new FeaturedImageLibrary(), new wp.media.controller.EditImage()]
      });
      this.frame.on('toolbar:create:featured-image', function (toolbar) {
        /**
         * @this wp.media.view.MediaFrame.Select
         */
        this.createSelectToolbar(toolbar, {
          text: wp.media.view.l10n.setFeaturedImage,
          state: this.options.state
        });
      }, this.frame);
      this.frame.on('open', this.onOpen);
      this.frame.state('featured-image').on('select', this.onSelectImage, this); // See wp.media() for this.

      wp.media.frame = this.frame;
    }
    /**
     * Ensure the selected image is the first item in the collection.
     *
     * @see https://github.com/WordPress/gutenberg/blob/c58b32266f8c950c5b9927d286608343078aee02/packages/media-utils/src/components/media-upload/index.js#L401-L417
     */


    onOpen() {
      const frameContent = this.frame.content.get();

      if (frameContent && frameContent.collection) {
        const collection = frameContent.collection; // Clean all attachments we have in memory.

        collection.toArray().forEach(model => model.trigger('destroy', model)); // Reset has more flag, if library had small amount of items all items may have been loaded before.

        collection.mirroring._hasMore = true; // Request items.

        collection.more();
      }
    }
    /**
     * Handles image selection.
     */


    onSelectImage() {
      const attachment = this.frame.state('featured-image').get('selection').first().toJSON();

      const dispatchImage = attachmentId => {
        (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.dispatch)('core/editor').editPost({
          featured_media: attachmentId
        });
      };

      const {
        onSelect
      } = this.props;
      const {
        url,
        id,
        width,
        height
      } = attachment;
      (0,_common_helpers__WEBPACK_IMPORTED_MODULE_3__.setImageFromURL)({
        url,
        id,
        width,
        height,
        onSelect,
        dispatchImage
      });

      if (!wp.media.view.settings.post.featuredImageId) {
        return;
      }

      wp.media.featuredImage.set(attachment ? attachment.id : -1);
    }

  };
});

/***/ }),

/***/ "./assets/src/block-editor/constants.js":
/*!**********************************************!*\
  !*** ./assets/src/block-editor/constants.js ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TEXT_BLOCKS": function() { return /* binding */ TEXT_BLOCKS; }
/* harmony export */ });
const TEXT_BLOCKS = ['core/paragraph', 'core/heading', 'core/code', 'core/quote', 'core/subhead'];

/***/ }),

/***/ "./assets/src/block-editor/helpers/index.js":
/*!**************************************************!*\
  !*** ./assets/src/block-editor/helpers/index.js ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addAMPAttributes": function() { return /* binding */ addAMPAttributes; },
/* harmony export */   "removeAmpFitTextFromBlocks": function() { return /* binding */ removeAmpFitTextFromBlocks; },
/* harmony export */   "removeClassFromAmpFitTextBlocks": function() { return /* binding */ removeClassFromAmpFitTextBlocks; },
/* harmony export */   "filterBlocksEdit": function() { return /* binding */ filterBlocksEdit; },
/* harmony export */   "isAMPEnabled": function() { return /* binding */ isAMPEnabled; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../constants */ "./assets/src/block-editor/constants.js");
/* harmony import */ var _common_constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../common/constants */ "./assets/src/common/constants.js");


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
 * Add AMP attributes to every core block.
 *
 * @param {Object} settings Block settings.
 * @param {string} name     Block name.
 * @return {Object} Modified block settings.
 */

const addAMPAttributes = (settings, name) => {
  if (!(0,lodash__WEBPACK_IMPORTED_MODULE_2__.isObject)(settings) || !(0,lodash__WEBPACK_IMPORTED_MODULE_2__.isString)(name)) {
    return settings;
  } // AMP Carousel and AMP Lightbox settings.


  if ('core/gallery' === name) {
    var _select2;

    if (!settings.attributes) {
      settings.attributes = {};
    }

    settings.attributes.ampCarousel = {
      type: 'boolean',
      default: !((_select2 = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_6__.select)('amp/block-editor')) !== null && _select2 !== void 0 && _select2.hasThemeSupport()) // @todo We could just default this to false now even in Reader mode since block styles are loaded.

    };
    settings.attributes.ampLightbox = {
      type: 'boolean',
      default: false
    };
  } // Add AMP Lightbox settings.


  if ('core/image' === name) {
    if (!settings.attributes) {
      settings.attributes = {};
    }

    settings.attributes.ampLightbox = {
      type: 'boolean',
      default: false
    };
  }

  return settings;
};
/**
 * Removes `amp-fit-text` related attributes on blocks via block deprecation.
 *
 * @param {Object} settings Block settings.
 * @param {string} name     Block name.
 * @return {Object} Modified block settings.
 */

const removeAmpFitTextFromBlocks = (settings, name) => {
  if (!(0,lodash__WEBPACK_IMPORTED_MODULE_2__.isObject)(settings) || !(0,lodash__WEBPACK_IMPORTED_MODULE_2__.isString)(name)) {
    return settings;
  }

  if (_constants__WEBPACK_IMPORTED_MODULE_7__.TEXT_BLOCKS.includes(name)) {
    if (!settings.deprecated) {
      settings.deprecated = [];
    } // Prevent adding deprecation a second time.


    for (const deprecated of settings.deprecated) {
      if (deprecated.attributes && deprecated.attributes.ampFitText) {
        return settings;
      }
    }

    settings.deprecated.push({
      supports: settings.supports,
      attributes: { ...(settings.attributes || {}),
        ampFitText: {
          type: 'boolean',
          default: false
        },
        minFont: {
          default: _common_constants__WEBPACK_IMPORTED_MODULE_8__.MIN_FONT_SIZE,
          source: 'attribute',
          selector: 'amp-fit-text',
          attribute: 'min-font-size'
        },
        maxFont: {
          default: _common_constants__WEBPACK_IMPORTED_MODULE_8__.MAX_FONT_SIZE,
          source: 'attribute',
          selector: 'amp-fit-text',
          attribute: 'max-font-size'
        },
        height: {
          // Needs to be higher than the maximum font size, which defaults to MAX_FONT_SIZE
          default: 'core/image' === name ? 200 : Math.ceil(_common_constants__WEBPACK_IMPORTED_MODULE_8__.MAX_FONT_SIZE / 10) * 10,
          source: 'attribute',
          selector: 'amp-fit-text',
          attribute: 'height'
        }
      },

      save(props) {
        /* eslint-disable react/prop-types */
        const {
          attributes
        } = props;
        const fitTextProps = {
          layout: 'fixed-height'
        };

        if (attributes.minFont) {
          fitTextProps['min-font-size'] = attributes.minFont;
        }

        if (attributes.maxFont) {
          fitTextProps['max-font-size'] = attributes.maxFont;
        }

        if (attributes.height) {
          fitTextProps.height = attributes.height;
        }
        /* eslint-enable react/prop-types */


        fitTextProps.children = settings.save(props);
        return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("amp-fit-text", fitTextProps);
      },

      isEligible(_ref) {
        let {
          ampFitText
        } = _ref;
        return undefined !== ampFitText;
      },

      migrate(attributes) {
        const deprecatedAttrs = ['ampFitText', 'minFont', 'maxFont', 'height'];
        deprecatedAttrs.forEach(attr => delete attributes[attr]);
        return attributes;
      }

    });
  }

  return settings;
};
/**
 * Remove the `class` attribute from `amp-fit-text` elements so that it can be deprecated successfully.
 *
 * The `class` attribute is added by the `core/generated-class-name/save-props` block editor filter; it is unwanted and
 * interferes with successful deprecation of the block. By filtering the saved element the `class` attribute can be
 * removed and the deprecation of the block and proceed without error.
 *
 * @see removeAmpFitTextFromBlocks
 * @param {JSX.Element} element Block save result.
 * @return {JSX.Element} Modified block if it is of `amp-fit-text` type, otherwise the  original element is returned.
 */

const removeClassFromAmpFitTextBlocks = element => {
  if ((0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.isValidElement)(element) && 'amp-fit-text' === element.type && undefined !== element.props.className) {
    const {
      className,
      ...props
    } = element.props;
    props.className = null;
    element = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.cloneElement)(element, props);
  }

  return element;
};
/**
 * Filters blocks edit function of all blocks.
 *
 * @param {Function} BlockEdit function.
 * @return {Function} Edit function.
 */

const filterBlocksEdit = BlockEdit => {
  if (!(0,lodash__WEBPACK_IMPORTED_MODULE_2__.isFunction)(BlockEdit)) {
    return BlockEdit;
  }

  const EnhancedBlockEdit = props => {
    const {
      isSelected,
      name
    } = props;

    if (isSelected && 'core/image' === name) {
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(BlockEdit, props), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ImageBlockLayoutAttributes, props));
    }

    if (isSelected && 'core/gallery' === name) {
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(BlockEdit, props), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(GalleryBlockLayoutAttributes, props));
    }

    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(BlockEdit, props);
  };

  EnhancedBlockEdit.propTypes = {
    attributes: prop_types__WEBPACK_IMPORTED_MODULE_1___default().shape({
      ampCarousel: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
      ampLightbox: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
      linkTo: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string)
    }),
    isSelected: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
    name: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
    setAttributes: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func.isRequired)
  };
  return EnhancedBlockEdit;
};
/**
 * Get AMP Lightbox toggle control.
 *
 * @param {Object} props Props.
 * @return {JSX.Element} Element.
 */

const AmpLightboxToggle = props => {
  const {
    attributes: {
      ampLightbox,
      linkTo
    },
    setAttributes
  } = props;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Add lightbox effect', 'amp'),
    checked: ampLightbox,
    onChange: nextValue => {
      setAttributes({
        ampLightbox: !ampLightbox
      }); // In case of lightbox set linking images to 'none'.

      if (nextValue && linkTo && 'none' !== linkTo) {
        setAttributes({
          linkTo: 'none'
        });
      }
    }
  });
};

AmpLightboxToggle.propTypes = {
  attributes: prop_types__WEBPACK_IMPORTED_MODULE_1___default().shape({
    ampLightbox: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
    linkTo: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string)
  }),
  setAttributes: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func.isRequired)
};
/**
 * Get AMP Carousel toggle control.
 *
 * @param {Object}   props                        Props.
 * @param {Object}   props.attributes             Block attributes.
 * @param {Object}   props.attributes.ampCarousel AMP Carousel toggle value.
 * @param {Function} props.setAttributes          Callback to update attributes.
 * @return {Object} Element.
 */

const AmpCarouselToggle = props => {
  const {
    attributes: {
      ampCarousel
    },
    setAttributes
  } = props;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Display as carousel', 'amp'),
    checked: ampCarousel,
    onChange: () => setAttributes({
      ampCarousel: !ampCarousel
    })
  });
};

AmpCarouselToggle.propTypes = {
  attributes: prop_types__WEBPACK_IMPORTED_MODULE_1___default().shape({
    ampCarousel: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool)
  }),
  setAttributes: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func.isRequired)
};
/**
 * Inspector controls for Image block.
 *
 * @param {Object} props          Props.
 * @param {string} props.clientId Block client ID.
 * @return {Object} Inspector Controls.
 */

const ImageBlockLayoutAttributes = props => {
  const {
    clientId
  } = props;
  const isGalleryBlockChild = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_6__.useSelect)(_select => {
    return _select('core/block-editor').getBlockParentsByBlockName(clientId, 'core/gallery').length > 0;
  }, [clientId]);

  if (isGalleryBlockChild) {
    return null;
  }

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__.InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('AMP Settings', 'amp')
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(AmpLightboxToggle, props)));
};

ImageBlockLayoutAttributes.propTypes = {
  clientId: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string)
};
/**
 * Inspector controls for Gallery block.
 *
 * @param {Object} props Props.
 * @return {Object} Inspector Controls.
 */

const GalleryBlockLayoutAttributes = props => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__.InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('AMP Settings', 'amp')
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(AmpLightboxToggle, props), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(AmpCarouselToggle, props)));
/**
 * Determines whether AMP is enabled for the current post or not.
 *
 * For regular posts, this is based on the AMP toggle control and also
 * the default status based on the template mode.
 *
 * @return {boolean} Whether AMP is enabled.
 */


const isAMPEnabled = () => {
  const {
    getEditedPostAttribute
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_6__.select)('core/editor');
  return getEditedPostAttribute('amp_enabled') || false;
};

/***/ }),

/***/ "./assets/src/block-editor/plugins/post-status-info.js":
/*!*************************************************************!*\
  !*** ./assets/src/block-editor/plugins/post-status-info.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "name": function() { return /* binding */ name; },
/* harmony export */   "render": function() { return /* binding */ render; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_edit_post__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/edit-post */ "@wordpress/edit-post");
/* harmony import */ var _wordpress_edit_post__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_edit_post__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _block_validation_components_amp_toggle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../block-validation/components/amp-toggle */ "./assets/src/block-validation/components/amp-toggle/index.js");


/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */


const name = 'amp-post-status-info';
/**
 * A wrapped AMP toggle component that is rendered for users with disabled Dev Tools.
 */

function WrappedAMPToggle() {
  const isDevToolsEnabled = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.useSelect)(select => select('amp/block-editor').isDevToolsEnabled(), []);
  /**
   * When Dev Tools are enabled the `block-validation` shows the entire AMP
   * sidebar and a notifications area.
   */

  if (isDevToolsEnabled) {
    return null;
  }

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_edit_post__WEBPACK_IMPORTED_MODULE_1__.PluginPostStatusInfo, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_block_validation_components_amp_toggle__WEBPACK_IMPORTED_MODULE_3__["default"], null));
}

const render = WrappedAMPToggle;

/***/ }),

/***/ "./assets/src/block-editor/plugins/pre-publish-panel.js":
/*!**************************************************************!*\
  !*** ./assets/src/block-editor/plugins/pre-publish-panel.js ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "name": function() { return /* binding */ name; },
/* harmony export */   "render": function() { return /* binding */ render; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _common_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/components */ "./assets/src/common/components/index.js");


/**
 * Internal dependencies
 */

const name = 'amp-post-featured-image-pre-publish-panel'; // Add the featured image selection component as a pre-publish check.

const render = () => {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_common_components__WEBPACK_IMPORTED_MODULE_1__.PrePublishPanel, null);
};

/***/ }),

/***/ "./assets/src/block-editor/plugins/wrapped-amp-preview-button.js":
/*!***********************************************************************!*\
  !*** ./assets/src/block-editor/plugins/wrapped-amp-preview-button.js ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "name": function() { return /* binding */ name; },
/* harmony export */   "onlyPaired": function() { return /* binding */ onlyPaired; },
/* harmony export */   "render": function() { return /* binding */ render; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_amp_preview_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/amp-preview-button */ "./assets/src/block-editor/components/amp-preview-button.js");


/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */


/**
 * A wrapper for the AMP preview button that renders it immediately after the 'Post' preview button, when present.
 */

function WrappedAmpPreviewButton() {
  const root = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const referenceNode = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const isViewable = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.useSelect)(select => {
    var _select$getPostType;

    return (_select$getPostType = select('core').getPostType(select('core/editor').getEditedPostAttribute('type'))) === null || _select$getPostType === void 0 ? void 0 : _select$getPostType.viewable;
  }, []);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!root.current && !referenceNode.current) {
      var _document$querySelect;

      // At first, we try finding the post preview button that is visible only on small screens.
      // If found, we will use its next sibling so that `insertBefore` gets us to the exact location
      // we are looking for.
      referenceNode.current = (_document$querySelect = document.querySelector('.editor-post-preview')) === null || _document$querySelect === void 0 ? void 0 : _document$querySelect.nextSibling; // Since the mobile post preview button is rendered with a delay, we are using the post publish/update
      // button as a fallback. Because it is rendered early, our AMP preview button will be visible immediately.

      if (!referenceNode.current) {
        referenceNode.current = document.querySelector('.editor-post-publish-button');
      }

      if (referenceNode.current) {
        root.current = document.createElement('div');
        root.current.className = 'amp-wrapper-post-preview';
        referenceNode.current.parentNode.insertBefore(root.current, referenceNode.current);
      }
    }

    return () => {
      if (referenceNode.current && root.current) {
        referenceNode.current.parentNode.removeChild(root.current);
        root.current = null;
        referenceNode.current = null;
      }
    }; // We use `isViewable` as a dependency in order to reposition the preview button once the block editor is fully loaded.
  }, [isViewable]); // It is unlikely that AMP would be enabled for a non-viewable post type. This is why the Preview button will
  // always be displayed initially (when `isViewable` is undefined), preventing horizontal layout shift.
  // Once the `isViewable` value is defined (which is after the initial block editor load) and it is `false`,
  // the Preview button will be hidden causing a minor layout shift.

  if (!root.current || isViewable === false) {
    return null;
  }

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createPortal)((0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_amp_preview_button__WEBPACK_IMPORTED_MODULE_2__["default"], null), root.current);
}

const name = 'amp-preview-button-wrapper';
const onlyPaired = true;
const render = WrappedAmpPreviewButton;

/***/ }),

/***/ "./assets/src/block-editor/store/index.js":
/*!************************************************!*\
  !*** ./assets/src/block-editor/store/index.js ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _selectors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./selectors */ "./assets/src/block-editor/store/selectors.js");
/**
 * WordPress dependencies
 */

/**
 * Internal dependencies
 */


/**
 * Module Constants
 */

const MODULE_KEY = 'amp/block-editor';
/* harmony default export */ __webpack_exports__["default"] = ((0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.registerStore)(MODULE_KEY, {
  reducer: state => state,
  selectors: _selectors__WEBPACK_IMPORTED_MODULE_1__,
  initialState: { ...window.ampBlockEditor
  }
}));

/***/ }),

/***/ "./assets/src/block-editor/store/selectors.js":
/*!****************************************************!*\
  !*** ./assets/src/block-editor/store/selectors.js ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "hasThemeSupport": function() { return /* binding */ hasThemeSupport; },
/* harmony export */   "isDevToolsEnabled": function() { return /* binding */ isDevToolsEnabled; },
/* harmony export */   "isStandardMode": function() { return /* binding */ isStandardMode; },
/* harmony export */   "getErrorMessages": function() { return /* binding */ getErrorMessages; },
/* harmony export */   "getAmpPreviewLink": function() { return /* binding */ getAmpPreviewLink; },
/* harmony export */   "getAmpUrl": function() { return /* binding */ getAmpUrl; },
/* harmony export */   "getAmpBlocksInUse": function() { return /* binding */ getAmpBlocksInUse; }
/* harmony export */ });
/**
 * Returns whether the current theme has AMP support.
 *
 * @param {Object} state Editor state.
 * @return {boolean} Whether the current theme has AMP support.
 */
function hasThemeSupport(state) {
  return Boolean(state.hasThemeSupport);
}
/**
 * Returns whether the current user has the AMP DevTools enabled.
 *
 * @param {Object} state The editor state.
 * @return {boolean} Whether the DevTools are enabled.
 */

function isDevToolsEnabled(state) {
  return state.isDevToolsEnabled;
}
/**
 * Returns whether the current site is in Standard mode (AMP-first) as opposed to Transitional (paired).
 *
 * @param {Object} state Editor state.
 * @return {boolean} Whether the current site is AMP-first.
 */

function isStandardMode(state) {
  return Boolean(state.isStandardMode);
}
/**
 * Returns the AMP validation error messages.
 *
 * @param {Object} state The editor state.
 * @return {string[]} The validation error messages.
 */

function getErrorMessages(state) {
  return state.errorMessages;
}
/**
 * Returns the AMP preview link (URL).
 *
 * @param {Object} state The editor state.
 * @return {string} The AMP preview link URL.
 */

function getAmpPreviewLink(state) {
  return state.ampPreviewLink;
}
/**
 * Returns the AMP URL.
 *
 * @param {Object} state The editor state.
 * @return {string} The AMP URL.
 */

function getAmpUrl(state) {
  return state.ampUrl;
}
/**
 * Returns the list of AMP blocks found in the post.
 *
 * @param {Object} state The editor state.
 * @return {string[]} The list of AMP blocks in post.
 */

function getAmpBlocksInUse(state) {
  return state.ampBlocksInUse;
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

/***/ "./assets/src/common/components/higher-order/with-featured-image-notice.js":
/*!*********************************************************************************!*\
  !*** ./assets/src/common/components/higher-order/with-featured-image-notice.js ***!
  \*********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../helpers */ "./assets/src/common/helpers/index.js");



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
 * Create notice UI for featured image component.
 *
 * @param {string[]} messages Notices.
 * @param {string}   status   Status type of notice.
 * @return {JSX.Element} Notice component.
 */

const createNoticeUI = (messages, status) => {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.Notice, {
    status: status,
    isDismissible: false
  }, messages.map((message, index) => {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("p", {
      key: `message-${index}`
    }, message);
  }));
};
/**
 * Higher-order component that is used for filtering the PostFeaturedImage component.
 *
 * Used to display notices in case the image does not meet minimum requirements.
 *
 * @return {Function} Higher-order component.
 */


/* harmony default export */ __webpack_exports__["default"] = ((0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_4__.createHigherOrderComponent)(PostFeaturedImage => {
  if (!(0,lodash__WEBPACK_IMPORTED_MODULE_3__.isFunction)(PostFeaturedImage)) {
    return PostFeaturedImage;
  }

  const withFeaturedImageNotice = props => {
    const {
      media
    } = props;
    let noticeUI;

    if (!media) {
      const message = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('Selecting a featured image is recommended for an optimal user experience.', 'amp');

      noticeUI = createNoticeUI([message], 'notice');
    } else {
      const errorMessages = (0,_helpers__WEBPACK_IMPORTED_MODULE_7__.validateFeaturedImage)(media, (0,_helpers__WEBPACK_IMPORTED_MODULE_7__.getMinimumFeaturedImageDimensions)());
      noticeUI = errorMessages ? createNoticeUI(errorMessages, 'warning') : null;
    }

    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(PostFeaturedImage, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
      noticeUI: noticeUI
    }));
  };

  withFeaturedImageNotice.propTypes = {
    media: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().object)
  };
  return withFeaturedImageNotice;
}, 'withFeaturedImageNotice'));

/***/ }),

/***/ "./assets/src/common/components/index.js":
/*!***********************************************!*\
  !*** ./assets/src/common/components/index.js ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PrePublishPanel": function() { return /* reexport safe */ _pre_publish_panel__WEBPACK_IMPORTED_MODULE_0__["default"]; },
/* harmony export */   "withFeaturedImageNotice": function() { return /* reexport safe */ _higher_order_with_featured_image_notice__WEBPACK_IMPORTED_MODULE_1__["default"]; },
/* harmony export */   "withEnforcedFileType": function() { return /* reexport safe */ _with_enforced_file_type__WEBPACK_IMPORTED_MODULE_2__["default"]; }
/* harmony export */ });
/* harmony import */ var _pre_publish_panel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pre-publish-panel */ "./assets/src/common/components/pre-publish-panel.js");
/* harmony import */ var _higher_order_with_featured_image_notice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./higher-order/with-featured-image-notice */ "./assets/src/common/components/higher-order/with-featured-image-notice.js");
/* harmony import */ var _with_enforced_file_type__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./with-enforced-file-type */ "./assets/src/common/components/with-enforced-file-type.js");




/***/ }),

/***/ "./assets/src/common/components/pre-publish-panel.js":
/*!***********************************************************!*\
  !*** ./assets/src/common/components/pre-publish-panel.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/editor */ "@wordpress/editor");
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_edit_post__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/edit-post */ "@wordpress/edit-post");
/* harmony import */ var _wordpress_edit_post__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_edit_post__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);


/**
 * WordPress dependencies
 */



/**
 * Adds a pre-publish panel containing the featured image selection component.
 *
 * Note: The `PostFeaturedImage` component would have already been filtered to include
 * any notices for the featured image so there is no need to recreate them here.
 *
 * @return {Function} A pre-publish panel containing the featured image selection component.
 */

const PrePublishPanel = () => {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_edit_post__WEBPACK_IMPORTED_MODULE_2__.PluginPrePublishPanel, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Featured Image', 'amp'),
    initialOpen: "true"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_editor__WEBPACK_IMPORTED_MODULE_1__.PostFeaturedImage, null));
};

/* harmony default export */ __webpack_exports__["default"] = (PrePublishPanel);

/***/ }),

/***/ "./assets/src/common/components/select-media-frame.js":
/*!************************************************************!*\
  !*** ./assets/src/common/components/select-media-frame.js ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SelectionFileTypeError": function() { return /* binding */ SelectionFileTypeError; },
/* harmony export */   "SelectionFileSizeError": function() { return /* binding */ SelectionFileSizeError; },
/* harmony export */   "FeaturedImageToolbarSelect": function() { return /* binding */ FeaturedImageToolbarSelect; },
/* harmony export */   "EnforcedFileToolbarSelect": function() { return /* binding */ EnforcedFileToolbarSelect; },
/* harmony export */   "getSelectMediaFrame": function() { return /* binding */ getSelectMediaFrame; }
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers */ "./assets/src/common/helpers/index.js");
/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */


const {
  wp
} = window;
const NOTICE_CLASSNAME = 'notice notice-warning notice-alt inline';
/**
 * FeaturedImageSelectionError
 *
 * @augments wp.media.View
 * @augments wp.Backbone.View
 * @augments Backbone.View
 */

const FeaturedImageSelectionError = wp.media.View.extend({
  className: NOTICE_CLASSNAME,
  template: (() => {
    let message = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.sprintf)(
    /* translators: 1: image width in pixels. 2: image height in pixels. */
    (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('The selected image is too small (%1$s by %2$s pixels).', 'amp'), '{{width}}', '{{height}}');
    message += ' <# if ( minWidth && minHeight ) { #>';
    message += (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.sprintf)(
    /* translators: 1: required minimum width in pixels. 2: required minimum height in pixels. */
    (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('It should have a size of at least %1$s by %2$s pixels.', 'amp'), '{{minWidth}}', '{{minHeight}}');
    message += '<# } else if ( minWidth ) { #>';
    message += (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.sprintf)(
    /* translators: placeholder is required minimum width in pixels. */
    (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('It should have a width of at least %s pixels.', 'amp'), '{{minWidth}}');
    message += '<# } else if ( minHeight ) { #>';
    message += (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.sprintf)(
    /* translators: placeholder is required minimum height in pixels. */
    (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('It should have a height of at least %s pixels.', 'amp'), '{{minHeight}}');
    message += '<# } #>';
    return (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.getNoticeTemplate)(message);
  })()
});
/**
 * SelectionFileTypeError
 *
 * Applies if the featured image has the wrong file type, like .mov or .txt.
 * Very similar to the FeaturedImageSelectionError class.
 *
 * @augments wp.media.View
 * @augments wp.Backbone.View
 * @augments Backbone.View
 */

const SelectionFileTypeError = wp.media.View.extend({
  className: 'notice notice-warning notice-alt inline',
  template: (() => {
    const message = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.sprintf)(
    /* translators: 1: the selected file type. */
    (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('The selected file mime type, %1$s, is not allowed.', 'amp'), '{{mimeType}}');
    return (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.getNoticeTemplate)(message);
  })()
});
/**
 * SelectionFileSizeError
 *
 * Applies when the video size is more than a certain amount of MB per second.
 * Very similar to the FeaturedImageSelectionError class.
 *
 * @augments wp.media.View
 * @augments wp.Backbone.View
 * @augments Backbone.View
 */

const SelectionFileSizeError = wp.media.View.extend({
  className: NOTICE_CLASSNAME,
  template: (() => {
    const message = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.sprintf)(
    /* translators: 1: the recommended max MB per second for videos. 2: the actual MB per second of the video. */
    (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('A video size of less than %1$s MB per second is recommended. The selected video is %2$s MB per second.', 'amp'), '{{maxVideoMegabytesPerSecond}}', '{{actualVideoMegabytesPerSecond}}');
    return (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.getNoticeTemplate)(message);
  })()
});
/**
 * FeaturedImageToolbarSelect
 *
 * Prevent selection of an image that does not meet the minimum requirements.
 * Also enforces the file type, ensuring that it was in the allowedTypes prop.
 *
 * @augments wp.media.view.Toolbar.Select
 * @augments wp.media.view.Toolbar
 * @augments wp.media.View
 * @augments wp.Backbone.View
 * @augments Backbone.View
 */

const FeaturedImageToolbarSelect = wp.media.view.Toolbar.Select.extend({
  /**
   * Refresh the view.
   */
  refresh() {
    wp.media.view.Toolbar.Select.prototype.refresh.call(this);
    const state = this.controller.state();
    const selection = state.get('selection');
    const attachment = selection.models[0];
    const minWidth = state.collection.get('featured-image').get('suggestedWidth');
    const minHeight = state.collection.get('featured-image').get('suggestedHeight');

    if (!attachment || 'image' !== attachment.get('type') || !attachment.get('width') || (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.hasMinimumDimensions)({
      width: attachment.get('width'),
      height: attachment.get('height')
    }, {
      width: minWidth,
      height: minHeight
    })) {
      this.secondary.unset('select-error');
    } else {
      this.secondary.set('select-error', new FeaturedImageSelectionError({
        minWidth,
        minHeight,
        width: attachment.get('width'),
        height: attachment.get('height')
      }));
    }

    _helpers__WEBPACK_IMPORTED_MODULE_2__.enforceFileType.call(this, attachment, SelectionFileTypeError);
  }

});
/**
 * EnforcedFileToolbarSelect
 *
 * Prevents selecting an attachment that has the wrong file type, like .mov or .txt.
 *
 * @augments wp.media.view.Toolbar.Select
 * @augments wp.media.view.Toolbar
 * @augments wp.media.View
 * @augments wp.Backbone.View
 * @augments Backbone.View
 */

const EnforcedFileToolbarSelect = wp.media.view.Toolbar.Select.extend({
  /**
   * Refresh the view.
   */
  refresh() {
    wp.media.view.Toolbar.Select.prototype.refresh.call(this);
    const state = this.controller.state();
    const selection = state.get('selection');
    const attachment = selection.models[0];
    _helpers__WEBPACK_IMPORTED_MODULE_2__.enforceFileType.call(this, attachment, SelectionFileTypeError);
  }

});
/**
 * Gets the select media frame, which displays in the bottom of the Media Library.
 *
 * @param {Object} ToolbarSelect The select toolbar that display at the bottom of the Media Library.
 * @return {Object} ToolbarSelect A wp.media Class that creates a Media Library toolbar.
 */

const getSelectMediaFrame = ToolbarSelect => {
  /**
   * Selects a featured image from the media library.
   *
   * @augments wp.media.view.MediaFrame.Select
   * @augments wp.media.view.MediaFrame
   * @augments wp.media.view.Frame
   * @augments wp.media.View
   * @augments wp.Backbone.View
   * @augments Backbone.View
   * @mixes wp.media.controller.StateMachine
   */
  return wp.media.view.MediaFrame.Select.extend({
    /**
     * Create select toolbar.
     *
     * The only reason for this method is to override the select toolbar view class.
     *
     * @param {Object} toolbar
     * @param {Object} [options={}]
     * @this wp.media.controller.Region
     */
    createSelectToolbar(toolbar, options) {
      options = options || this.options.button || {};
      options.controller = this;
      options = { ...options,
        allowedTypes: (0,lodash__WEBPACK_IMPORTED_MODULE_0__.get)(this, ['options', 'allowedTypes'], null)
      };
      toolbar.view = new ToolbarSelect(options);
    }

  });
};

/***/ }),

/***/ "./assets/src/common/components/with-enforced-file-type.js":
/*!*****************************************************************!*\
  !*** ./assets/src/common/components/with-enforced-file-type.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _select_media_frame__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./select-media-frame */ "./assets/src/common/components/select-media-frame.js");


/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */


const {
  wp
} = window;
/**
 * Gets a wrapped version of MediaUpload, to enforce that it has the correct file type.
 *
 * Only intended for the MediaUpload in the Core Video block.
 * Though this will also apply to any other MediaUpload with allowedTypes of [ 'video' ].
 * Partly copied from customize-controls.js.
 *
 * @param {Function} InitialMediaUpload The MediaUpload component, passed from the filter.
 * @return {Function} The wrapped component.
 */

/* harmony default export */ __webpack_exports__["default"] = (InitialMediaUpload => {
  /**
   * Partly copied from customize-controls.js.
   *
   * @see wp.media.HeaderControl
   */
  return class EnforcedFileTypeMediaUpload extends InitialMediaUpload {
    /**
     * Constructs the class.
     *
     * @param {*} args Constructor arguments.
     */
    constructor() {
      super(...arguments); // This class should only be present when only 'video' types are allowed, like in the Core Video block.

      (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "initFileTypeMedia", () => {
        const SelectMediaFrame = (0,_select_media_frame__WEBPACK_IMPORTED_MODULE_3__.getSelectMediaFrame)(_select_media_frame__WEBPACK_IMPORTED_MODULE_3__.EnforcedFileToolbarSelect);
        const previousOnSelect = this.onSelect;
        const isVideo = (0,lodash__WEBPACK_IMPORTED_MODULE_1__.isEqual)(['video'], this.props.allowedTypes);
        const queryType = isVideo ? 'video/mp4' : this.props.allowedTypes; // For the Video block, only display .mp4 files.

        this.frame = new SelectMediaFrame({
          allowedTypes: this.props.allowedTypes,
          button: {
            text: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Select', 'amp'),
            close: false
          },
          states: [new wp.media.controller.Library({
            title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Select or Upload Media', 'amp'),
            library: wp.media.query({
              type: queryType
            }),
            multiple: false,
            date: false,
            priority: 20
          })]
        });
        wp.media.frame = this.frame;
        this.frame.on('close', () => {
          this.initFileTypeMedia();
        }, this);
        this.frame.on('select', () => {
          if (previousOnSelect) {
            previousOnSelect();
          }

          this.frame.close();
        }, this);
      });

      if ((0,lodash__WEBPACK_IMPORTED_MODULE_1__.isEqual)(['video/mp4'], this.props.allowedTypes)) {
        this.initFileTypeMedia();
      }
    }
    /**
     * Initialize.
     *
     * Mainly copied from customize-controls.js.
     * Overwrites the Media Library frame, this.frame.
     * And checks that the file type is correct.
     *
     * @see wp.media.CroppedImageControl.initFrame
     */


  };
});

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

/***/ "./assets/src/common/helpers/index.js":
/*!********************************************!*\
  !*** ./assets/src/common/helpers/index.js ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "hasMinimumDimensions": function() { return /* binding */ hasMinimumDimensions; },
/* harmony export */   "getMinimumFeaturedImageDimensions": function() { return /* binding */ getMinimumFeaturedImageDimensions; },
/* harmony export */   "validateFeaturedImage": function() { return /* binding */ validateFeaturedImage; },
/* harmony export */   "getNoticeTemplate": function() { return /* binding */ getNoticeTemplate; },
/* harmony export */   "isFileTypeAllowed": function() { return /* binding */ isFileTypeAllowed; },
/* harmony export */   "enforceFileType": function() { return /* binding */ enforceFileType; },
/* harmony export */   "setImageFromURL": function() { return /* binding */ setImageFromURL; }
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var amp_block_editor_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! amp-block-editor-data */ "amp-block-editor-data");
/* harmony import */ var amp_block_editor_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(amp_block_editor_data__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constants */ "./assets/src/common/constants.js");
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
 * Determines whether whether the image has the minimum required dimensions.
 *
 * The image should have a width of at least 1200 pixels to satisfy the requirements of Google Search for Schema.org metadata.
 *
 * @param {Object} media             A media object with width and height values.
 * @param {number} media.width       Media width in pixels.
 * @param {number} media.height      Media height in pixels.
 * @param {Object} dimensions        An object with minimum required width and height values.
 * @param {number} dimensions.width  Required media width in pixels.
 * @param {number} dimensions.height Required media height in pixels.
 * @return {boolean} Whether the media has the minimum dimensions.
 */

const hasMinimumDimensions = (media, dimensions) => {
  if (!media || !media.width || !media.height) {
    return false;
  }

  const {
    width,
    height
  } = dimensions;
  return (!width || media.width >= width) && (!height || media.height >= height);
};
/**
 * Get minimum dimensions for a featured image.
 *
 * "Images should be at least 1200 pixels wide.
 * For best results, provide multiple high-resolution images (minimum of 800,000 pixels when multiplying width and height)
 * with the following aspect ratios: 16x9, 4x3, and 1x1."
 *
 * Given this requirement, this function ensures the right aspect ratio.
 * The 16/9 aspect ratio is chosen because it has the smallest height for the given width.
 *
 * @see https://developers.google.com/search/docs/data-types/article#article_types
 * @return {Object} Minimum dimensions including width and height.
 */

const getMinimumFeaturedImageDimensions = () => {
  return {
    width: amp_block_editor_data__WEBPACK_IMPORTED_MODULE_1__.featuredImageMinimumWidth,
    height: amp_block_editor_data__WEBPACK_IMPORTED_MODULE_1__.featuredImageMinimumHeight
  };
};
/**
 * Validates the an image based on requirements.
 *
 * @param {Object|null} media                      A media object.
 * @param {string}      media.mime_type            The media item's mime type.
 * @param {Object}      media.media_details        A media details object with width and height values.
 * @param {number}      media.media_details.width  Media width in pixels.
 * @param {number}      media.media_details.height Media height in pixels.
 * @param {Object}      dimensions                 An object with minimum required width and height values.
 * @param {number}      dimensions.width           Minimum required width value.
 * @param {number}      dimensions.height          Minimum required height value.
 * @return {string[]|null} Validation errors, or null if there were no errors.
 */

const validateFeaturedImage = (media, dimensions) => {
  if (!media) {
    return [(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Selecting a featured image is required.', 'amp')];
  }

  const errors = [];

  if (!['image/png', 'image/gif', 'image/jpeg', 'image/webp', 'image/svg+xml'].includes(media.mime_type)) {
    errors.push(
    /* translators: List of image formats */
    (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.sprintf)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('The featured image must be of either %1$s, %2$s, %3$s, %4$s, or %5$s format.', 'amp'), 'JPEG', 'PNG', 'GIF', 'WebP', 'SVG'));
  }

  if (!hasMinimumDimensions(media.media_details, dimensions)) {
    const {
      width,
      height
    } = dimensions;

    if (width && height) {
      errors.push(
      /* translators: 1: minimum width, 2: minimum height. */
      (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.sprintf)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('The featured image should have a size of at least %1$s by %2$s pixels.', 'amp'), Math.ceil(width), Math.ceil(height)));
    } else if (dimensions.width) {
      errors.push(
      /* translators: placeholder is minimum width. */
      (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.sprintf)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('The featured image should have a width of at least %s pixels.', 'amp'), Math.ceil(width)));
    } else if (dimensions.height) {
      errors.push(
      /* translators: placeholder is minimum height. */
      (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.sprintf)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('The featured image should have a height of at least %s pixels.', 'amp'), Math.ceil(height)));
    }
  }

  return 0 === errors.length ? null : errors;
};
/**
 * Gets the compiled template for a given notice message.
 *
 * @param {string} message The message to display in the template.
 * @return {Function} compiledTemplate A function accepting the data, which creates a compiled template.
 */

const getNoticeTemplate = message => {
  const errorTemplate = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.template)(`<p>${message}</p>`, {
    evaluate: /<#([\s\S]+?)#>/g,
    interpolate: /\{\{\{([\s\S]+?)\}\}\}/g,
    escape: /\{\{([^\}]+?)\}\}(?!\})/g
  });
  return data => {
    return errorTemplate(data);
  };
};
/**
 * Gets whether the file type is allowed.
 *
 * For videos, only supported mime types as defined by the editor settings should be allowed.
 * But the allowedTypes property only has 'video', and it can accidentally allow mime types that are not supported.
 * So this returns false for videos with mime types other than the ones in the editor settings.
 *
 * @param {Object} attachment   The file to evaluate.
 * @param {Array}  allowedTypes The allowed file types.
 * @return {boolean} Whether the file type is allowed.
 */

const isFileTypeAllowed = (attachment, allowedTypes) => {
  const fileType = attachment.get('type');
  const mimeType = attachment.get('mime');

  if (!allowedTypes.includes(fileType) && !allowedTypes.includes(mimeType)) {
    return false;
  }

  return 'video' !== fileType;
};
/**
 * If the attachment has the wrong file type, this displays a notice in the Media Library and disables the 'Select' button.
 *
 * This is not an arrow function so that it can be called with enforceFileType.call( this, foo, bar ).
 *
 * @param {Object} attachment     The selected attachment.
 * @param {Object} SelectionError The error to display.
 */

const enforceFileType = function (attachment, SelectionError) {
  if (!attachment) {
    return;
  }

  const allowedTypes = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.get)(this, ['options', 'allowedTypes'], null);
  const selectButton = this.get('select'); // If the file type isn't allowed, display a notice and disable the 'Select' button.

  if (allowedTypes && attachment.get('type') && !isFileTypeAllowed(attachment, allowedTypes)) {
    this.secondary.set(_constants__WEBPACK_IMPORTED_MODULE_3__.FILE_TYPE_ERROR_VIEW, new SelectionError({
      mimeType: attachment.get('mime')
    }));

    if (selectButton && selectButton.model) {
      selectButton.model.set('disabled', true); // Disable the button to select the file.
    }
  } else {
    this.secondary.unset(_constants__WEBPACK_IMPORTED_MODULE_3__.FILE_TYPE_ERROR_VIEW);

    if (selectButton && selectButton.model) {
      selectButton.model.set('disabled', false); // Enable the button to select the file.
    }
  }
};
/**
 * Sets the featured image, on selecting it in the Media Library.
 *
 * @param {Object}   args               Arguments.
 * @param {string}   args.url           Image URL.
 * @param {number}   args.id            Attachment ID.
 * @param {number}   args.width         Image width.
 * @param {number}   args.height        Image height.
 * @param {Function} args.onSelect      A function in the MediaUpload component called on selecting the image.
 * @param {Function} args.dispatchImage A function to dispatch the change in image to the store.
 */

const setImageFromURL = _ref => {
  let {
    url,
    id,
    width,
    height,
    onSelect,
    dispatchImage
  } = _ref;
  const data = {};
  data.url = url;
  data.thumbnail_url = url;
  data.timestamp = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.now)();

  if (id) {
    data.attachment_id = id;
  }

  if (width) {
    data.width = width;
  }

  if (height) {
    data.height = height;
  }

  onSelect(data); // @todo Does this do anything?

  dispatchImage(id);
};

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

/***/ "amp-block-editor-data":
/*!*********************************!*\
  !*** external "ampBlockEditor" ***!
  \*********************************/
/***/ (function(module) {

"use strict";
module.exports = ampBlockEditor;

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

/***/ "moment":
/*!*************************!*\
  !*** external "moment" ***!
  \*************************/
/***/ (function(module) {

"use strict";
module.exports = window["moment"];

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["blocks"];

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

/***/ "@wordpress/editor":
/*!********************************!*\
  !*** external ["wp","editor"] ***!
  \********************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["editor"];

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
/*!******************************************!*\
  !*** ./assets/src/block-editor/index.js ***!
  \******************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/hooks */ "@wordpress/hooks");
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_plugins__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/plugins */ "@wordpress/plugins");
/* harmony import */ var _wordpress_plugins__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_plugins__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _common_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/components */ "./assets/src/common/components/index.js");
/* harmony import */ var _common_helpers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/helpers */ "./assets/src/common/helpers/index.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components */ "./assets/src/block-editor/components/index.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./helpers */ "./assets/src/block-editor/helpers/index.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./store */ "./assets/src/block-editor/store/index.js");
/**
 * WordPress dependencies
 */




/**
 * Internal dependencies
 */






const {
  isStandardMode,
  getAmpBlocksInUse
} = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.select)('amp/block-editor');

const plugins = __webpack_require__("./assets/src/block-editor/plugins sync recursive .*\\.js$");

plugins.keys().forEach(modulePath => {
  const {
    name,
    render,
    icon,
    onlyPaired = false
  } = plugins(modulePath);

  if (onlyPaired && isStandardMode()) {
    return;
  }

  (0,_wordpress_plugins__WEBPACK_IMPORTED_MODULE_1__.registerPlugin)(name, {
    icon,
    render
  });
});
(0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__.addFilter)('blocks.registerBlockType', 'ampEditorBlocks/addAttributes', _helpers__WEBPACK_IMPORTED_MODULE_7__.addAMPAttributes);
(0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__.addFilter)('blocks.registerBlockType', 'ampEditorBlocks/deprecateAmpFitText', _helpers__WEBPACK_IMPORTED_MODULE_7__.removeAmpFitTextFromBlocks);
(0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__.addFilter)('blocks.getSaveElement', 'ampEditorBlocks/deprecateAmpFitText/removeMiscAttrs', _helpers__WEBPACK_IMPORTED_MODULE_7__.removeClassFromAmpFitTextBlocks);
(0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__.addFilter)('editor.BlockEdit', 'ampEditorBlocks/filterEdit', _helpers__WEBPACK_IMPORTED_MODULE_7__.filterBlocksEdit, 20);
(0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__.addFilter)('editor.PostFeaturedImage', 'ampEditorBlocks/withFeaturedImageNotice', _common_components__WEBPACK_IMPORTED_MODULE_4__.withFeaturedImageNotice);
(0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__.addFilter)('editor.MediaUpload', 'ampEditorBlocks/withMediaLibraryNotice', InitialMediaUpload => (0,_components__WEBPACK_IMPORTED_MODULE_6__.withMediaLibraryNotice)(InitialMediaUpload, (0,_common_helpers__WEBPACK_IMPORTED_MODULE_5__.getMinimumFeaturedImageDimensions)()));
const ampBlocksInUse = getAmpBlocksInUse();

const blocks = __webpack_require__("./assets/src/block-editor/blocks sync recursive (?<%21test\\/)index\\.js$");

blocks.keys().forEach(modulePath => {
  const {
    name,
    settings
  } = blocks(modulePath);
  const shouldRegister = isStandardMode() && ampBlocksInUse.includes(name);

  if (shouldRegister) {
    (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__.registerBlockType)(name, settings);
  }
});
}();
/******/ })()
;
//# sourceMappingURL=amp-block-editor.js.map