/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/***/ (function(module) {

module.exports = window["lodash"];

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
/*!*********************************************************!*\
  !*** ./assets/src/customizer/amp-customize-controls.js ***!
  \*********************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* global jQuery */

/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */



window.ampCustomizeControls = function (api, $) {
  'use strict';

  const component = {
    nonAmpCustomizerLink: null,
    data: {
      queryVar: '',
      l10n: {
        ampVersionNotice: '',
        rootPanelDescription: ''
      },
      optionSettings: [],
      activeThemeSettingImports: {},
      mimeTypeIcons: {
        image: '',
        document: ''
      }
    }
  };
  /**
   * Boot using data sent inline.
   *
   * @param {Object} data Object data.
   * @return {void}
   */

  component.boot = function boot(data) {
    component.data = data;
    component.updatePreviewNotice();
    component.extendRootDescription();
    $.ajaxPrefilter(component.injectAmpIntoAjaxRequests);
    api.bind('ready', component.updateNonAmpCustomizeLink);
    api.bind('ready', component.forceAmpPreviewUrl);
    api.bind('ready', component.addOptionSettingNotices);
    api.bind('ready', component.addNavMenuPanelNotice);
    api.bind('ready', component.addActiveThemeSettingsImporting);
  };
  /**
   * Update preview notice.
   */


  component.updatePreviewNotice = function updatePreviewNotice() {
    const previewNotice = $('#customize-info .preview-notice');
    previewNotice.html(component.data.l10n.ampVersionNotice); // Contents have been sanitized with wp_kses_post().

    component.nonAmpCustomizerLink = previewNotice.find('a[href]')[0];
  };
  /**
   * Make sure the non-AMP Customizer link keeps referencing to the currently-previewed URL.
   */


  component.updateNonAmpCustomizeLink = function updateNonAmpCustomizeLink() {
    if (!(component.nonAmpCustomizerLink instanceof HTMLAnchorElement)) {
      return;
    }

    const update = () => {
      const previewUrl = new URL(api.previewer.previewUrl());
      previewUrl.searchParams.delete(component.data.queryVar);
      const customizeUrl = new URL(component.nonAmpCustomizerLink.href);
      customizeUrl.searchParams.set('url', previewUrl);
      component.nonAmpCustomizerLink.href = customizeUrl.href;
    };

    update();
    api.previewer.previewUrl.bind(update);
  };
  /**
   * Add AMP-specific info to the root panel description.
   */


  component.extendRootDescription = function extendRootDescription() {
    const panelDescription = $('#customize-info .customize-panel-description'); // Ensure the original description is in a paragraph (where normally it is not).

    if (panelDescription.find('p').length === 0) {
      const originalParagraph = $('<p></p>');
      originalParagraph.html(panelDescription.html());
      panelDescription.html('');
      panelDescription.append(originalParagraph);
    }

    const ampDescription = $('<p>' + component.data.l10n.rootPanelDescription + '</p>'); // lgtm[js/html-constructed-from-input], Contents have been sanitized with wp_kses_post().

    panelDescription.append(ampDescription);
  };
  /**
   * i18n friendly version of basename()
   *
   * This is a port of wp_basename() in PHP.
   *
   * @param {string} path Path.
   * @return {string} Basename.
   */


  function wpBasename(path) {
    return decodeURIComponent(encodeURIComponent(path).replace(/%(2F|5C)/g, '/').replace(/^.*\//, ''));
  }
  /**
   * Ensure UploadControl is updated when underlying setting is programmatically updated (not using media library).
   *
   * The newer MediaControl does update programmatically when the setting changes, so the control for the newer
   * Custom Logo will update their UI to show the image. Older controls like the Background Image will not however.
   *
   * @param {wp.customize.UploadControl} control
   * @param {Function}                   control.extended
   */


  function populateUploadControl(control) {
    const value = control.setting();

    if (!value || control.params.attachment && control.params.attachment.url === value) {
      return;
    }

    const url = new URL(value); // The following replicates PHP logic in WP_Customize_Media_Control::to_json().

    const type = ['jpg', 'png', 'gif', 'bmp'].includes(url.pathname.substr(-3)) ? 'image' : 'document';
    const attachment = {
      id: 1,
      url: url.href,
      type,
      icon: component.data.mimeTypeIcons[type],
      title: wpBasename(url.pathname)
    };

    if ('image' === type) {
      attachment.sizes = {
        full: {
          url: url.href
        }
      };
    } // Make sure that the media frame is populated with the attachment.


    if (!control.frame) {
      control.initFrame();
    }

    if (!control.frame.state()) {
      control.frame.setState('library');
    }

    control.frame.state().get('selection').set([attachment]); // Call the select method so that the attachment param is updated.

    if (control.extended(api.BackgroundControl)) {
      // Explicitly do not call BackgroundControl#select() because it sends an unnecessary custom-background-add ajax request.
      api.UploadControl.prototype.select.call(control);
    } else {
      control.select();
    } // Finally, render the control.


    control.renderContent();
  }
  /**
   * Ensure HeaderControl is updated when underlying setting is programmatically updated (not using media library).
   *
   * The newer MediaControl does update programmatically when the setting changes, so the control for the newer
   * Custom Logo will update their UI to show the image. Older controls like the Header Image will not however.
   *
   * @param {wp.customize.HeaderControl} control
   */


  function populateHeaderControl(control) {
    const headerImagedData = api('header_image_data').get();

    if (headerImagedData) {
      control.setImageFromURL(headerImagedData.url, headerImagedData.attachment_id, headerImagedData.width, headerImagedData.height);
    }
  }
  /**
   * Controls which are dependent on the background_image being set.
   *
   * @type {string[]}
   */


  const backgroundImageDependentControls = ['background_position', 'background_size', 'background_repeat', 'background_attachment'];
  /**
   * Mapping of control ID to the setting value which indicates the checkbox should be unchecked.
   *
   * @type {Object}
   */

  const checkboxControlElementValueMapping = {
    display_header_text: 'blank',
    background_attachment: 'fixed',
    background_repeat: 'no-repeat'
  };
  /**
   * Handle special case of updating certain checkbox controls.
   *
   * Because of some "juggling" in WordPress core, programmatically updating the value (probably related to double
   * data binding of Element and Setting values) is not feasible. It is instead updated by directly manipulating the Element instance
   * as opposed to the underlying Setting that it syncs with.
   *
   * @param {wp.customize.Control} control Control.
   * @see https://github.com/WordPress/wordpress-develop/blob/5.4.2/src/js/_enqueues/wp/customize/controls.js#L8943-L9050
   */

  function populateCheckboxControlWithSyncedElement(control) {
    if (control.id in checkboxControlElementValueMapping && 'element' in control && control.setting.id in component.data.activeThemeSettingImports) {
      control.element.set(checkboxControlElementValueMapping[control.id] !== component.data.activeThemeSettingImports[control.setting.id]);
    }
  }
  /**
   * Mapping of control ID to additional related settings.
   *
   * @type {Object}
   */


  const controlRelatedSettings = {
    accent_hue_active: ['accent_hue']
  };
  /**
   * Populate settings which are related to controls but not directly link.
   *
   * A good example of such a control is the accent_hue setting which is linked to a hue control. The hue control
   * lacks a label so it is not listed among the importable settings. However, when the Primary Color control is set
   * to "Custom" then the hue control is displayed.
   *
   * @param {wp.customize.Control} control
   */

  function populateRelatedSettings(control) {
    if (control.id in controlRelatedSettings) {
      const settings = [];

      for (const settingId of controlRelatedSettings[control.id]) {
        const setting = api(settingId);

        if (setting) {
          settings.push(setting);
        }
      }

      importSettings(settings);
    }
  }
  /**
   * Import settings if available.
   *
   * @param {wp.customize.Setting[]} settings Settings collection.
   */


  function importSettings(settings) {
    for (const setting of settings) {
      if (setting.id in component.data.activeThemeSettingImports) {
        setting.set(component.data.activeThemeSettingImports[setting.id]);
      }
    }
  }
  /**
   * Import settings for a control.
   *
   * @param {wp.customize.Control} control          Control.
   * @param {Function}             control.extended Control.
   */


  function importControlSettings(control) {
    // Ensure all background settings are shown by ensuring custom preset is selected.
    if (backgroundImageDependentControls.includes(control.id)) {
      const backgroundPreset = api('background_preset');

      if (backgroundPreset) {
        backgroundPreset.set('custom');
      }
    }

    if (control.id in checkboxControlElementValueMapping) {
      populateCheckboxControlWithSyncedElement(control);
    } else {
      importSettings(Object.values(control.settings));
    }

    populateRelatedSettings(control); // Manually update the UI for controls that don't react to programmatic setting updates.

    if (control.extended(api.UploadControl)) {
      populateUploadControl(
      /** @type {wp.customize.UploadControl} */
      control);
    } else if (control.extended(api.HeaderControl)) {
      populateHeaderControl(
      /** @type {wp.customize.HeaderControl} */
      control);
    }
  }
  /**
   * Section to contain the active theme settings import functionality.
   *
   * This section is somewhat of a hack in that it has contentContainer and it cannot expand. It has no controls.
   * It is implemented as a section so that it will be rendered in the root Customizer panel in the same way that
   * the Themes panel is.
   *
   * @class    AmpActiveThemeSettingsImportSection
   * @augments wp.customize.Section
   */


  const AmpActiveThemeSettingsImportSection = api.Section.extend({
    /**
     * Force section to be contextually active.
     *
     * This overrides the section's normal method to force the section to be active since normally the section
     * becomes deactivated if it has no controls or none of the controls are active.
     *
     * @return {boolean} Active.
     */
    isContextuallyActive() {
      return true;
    },

    /**
     * Override the expand method to prevent the section from being erroneously expanded.
     */
    expand() {},

    /**
     * Get all sections other than this one, sorted by priority.
     *
     * @return {wp.customize.Section[]} Other sections.
     */
    otherSections() {
      const sections = [];
      api.section.each(otherSection => {
        if (otherSection.id !== this.id) {
          sections.push(otherSection);
        }
      });
      sections.sort((a, b) => {
        return a.priority() - b.priority();
      });
      return sections;
    },

    /**
     * Render details.
     */
    renderDetails() {
      const dl = this.headContainer.find('dl');

      for (const otherSection of this.otherSections()) {
        const sectionControls = [];

        for (const control of otherSection.controls()) {
          if (this.params.controls.has(control)) {
            sectionControls.push(control);
          }
        }

        if (!sectionControls.length) {
          continue;
        }

        let title;

        switch (otherSection.id) {
          case 'menu_locations':
            title = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Menu Locations', 'amp');
            break;

          default:
            title = otherSection.params.title;
        }

        const dt = $('<dt></dt>');
        dt.text(title);
        dl.append(dt);

        for (const control of sectionControls) {
          const dd = $('<dd></dd>');
          const id = `amp-import-${control.id}`;
          const checkbox = $('<input type=checkbox checked>');
          checkbox.attr('id', id);
          checkbox.val(control.id);
          const label = $('<label></label>');
          label.attr('for', id);
          label.html(control.params.label);
          dd.append(checkbox);
          dd.append(label);
          dl.append(dd);
        }
      }
    },

    /**
     * Attach events.
     *
     * Override the parent class's normal events from being added to instead add the relevant event for the special section.
     */
    attachEvents() {
      this.headContainer.find('button').on('click', () => {
        this.importSelectedSettings();
      });
    },

    /**
     * Import the selected settings.
     */
    importSelectedSettings() {
      const importSection = this;
      let remainingCheckboxes = 0;
      importSection.headContainer.find('input[type=checkbox]').each(function () {
        const checkbox = $(this);

        if (!checkbox.prop('checked')) {
          remainingCheckboxes++;
          return;
        }

        const control = api.control(checkbox.val());
        importControlSettings(control);
        checkbox.closest('dd').remove();
      }); // Remove any childless dt's.

      importSection.headContainer.find('dt').each(function () {
        const dt = $(this);

        if (!dt.next('dd').length) {
          dt.remove();
        }
      });

      if (0 === remainingCheckboxes) {
        importSection.active(false);
      }
    },

    /**
     * Set up the UI for the section.
     */
    ready() {
      api.Section.prototype.ready.call(this);
      this.renderDetails();
    }

  });
  api.sectionConstructor.amp_active_theme_settings_import = AmpActiveThemeSettingsImportSection;
  /**
   * Add ability to import settings from the active theme.
   */

  component.addActiveThemeSettingsImporting = function addActiveThemeSettingsImporting() {
    const differingSettings = new Set();

    for (const [settingId, settingValue] of Object.entries(component.data.activeThemeSettingImports)) {
      const setting = api(settingId);

      if (setting && !(0,lodash__WEBPACK_IMPORTED_MODULE_0__.isEqual)(setting(), settingValue)) {
        differingSettings.add(settingId);
      }
    } // Abort adding any UI if there are no settings to import.


    if (differingSettings.size === 0) {
      return;
    }

    const controlsWithSettings = new Set();
    api.control.each(control => {
      for (const setting of Object.values(control.settings)) {
        if (!control.params.label) {
          continue;
        }

        if (differingSettings.has(setting.id) || control.id in controlRelatedSettings && controlRelatedSettings[control.id].find(settingId => differingSettings.has(settingId))) {
          controlsWithSettings.add(control);
        }
      }
    }); // In the very rare chance that there are settings without controls, abort.

    if (controlsWithSettings.size === 0) {
      return;
    }

    const section = new AmpActiveThemeSettingsImportSection('amp_settings_import', {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Primary Theme Settings', 'amp'),
      priority: -1,
      controls: controlsWithSettings
    });
    api.section.add(section);
  };
  /**
   * Rewrite Ajax requests to inject AMP query var.
   *
   * @param {Object} options      Options.
   * @param {string} options.type Type.
   * @param {string} options.url  URL.
   * @return {void}
   */


  component.injectAmpIntoAjaxRequests = function injectAmpIntoAjaxRequests(options) {
    const url = new URL(options.url, window.location.href);

    if (!url.searchParams.has(component.data.queryVar)) {
      url.searchParams.append(component.data.queryVar, '1');
      options.url = url.href;
    }
  };
  /**
   * Persist the presence the amp=1 param when navigating in the preview, even if current page is not yet supported.
   */


  component.forceAmpPreviewUrl = function forceAmpPreviewUrl() {
    api.previewer.previewUrl.validate = function (prevValidate) {
      return function (value) {
        let val = prevValidate.call(this, value);

        if (val) {
          const url = new URL(val);

          if (!url.searchParams.has(component.data.queryVar)) {
            url.searchParams.append(component.data.queryVar, '1');
            val = url.href;
          }
        }

        return val;
      };
    }(api.previewer.previewUrl.validate);
  };
  /**
   * Add notice to all settings for options.
   */


  component.addOptionSettingNotices = function addOptionSettingNotices() {
    for (const settingId of component.data.optionSettings) {
      api(settingId, setting => {
        const notification = new api.Notification('amp_option_setting', {
          type: 'info',
          message: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Also applies to non-AMP version of your site.', 'amp')
        });
        setting.notifications.add(notification.code, notification);
      });
    }
  };
  /**
   * Add notice to the nav menus panel.
   */


  component.addNavMenuPanelNotice = function addNavMenuPanelNotice() {
    api.panel('nav_menus', panel => {
      // Fix bug in WP where the Nav Menus panel lacks a notifications container.
      if (!panel.notifications.container.length) {
        panel.notifications.container = $('<div class="customize-control-notifications-container"></div>');
        panel.container.find('.panel-meta:first').append(panel.notifications.container);
      }

      const notification = new api.Notification('amp_version', {
        type: 'info',
        message: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('The menus here are shared with the non-AMP version of your site. Assign existing menus to menu locations in the Reader theme or create new AMP-specific menus.', 'amp')
      });
      panel.notifications.add(notification.code, notification);
    });
  };

  return component;
}(wp.customize, jQuery);
}();
/******/ })()
;
//# sourceMappingURL=amp-customize-controls.js.map