/******/ (function() { // webpackBootstrap
var __webpack_exports__ = {};
/*!***************************************************************!*\
  !*** ./assets/src/customizer/amp-customize-preview-legacy.js ***!
  \***************************************************************/
// Note: This is only used in Legacy Reader mode.
window.ampCustomizePreview = function (api) {
  'use strict';

  const component = {};
  /**
   * Boot using data sent inline.
   *
   * @param {Object}  data           - PHP exports.
   * @param {boolean} data.available - Whether AMP is available.
   * @param {boolean} data.enabled   - Whether AMP is enabled.
   * @return {void}
   */

  component.boot = function boot(data) {
    api.bind('preview-ready', function () {
      api.preview.bind('active', function () {
        api.preview.send('amp-status', data);
      });
    });
  };

  return component;
}(wp.customize);
/******/ })()
;
//# sourceMappingURL=amp-customize-preview-legacy.js.map