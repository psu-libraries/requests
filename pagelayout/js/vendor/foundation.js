(function webpackUniversalModuleDefinition(root, factory) {
  if (typeof exports === 'object' && typeof module === 'object')
    module.exports = factory(require("jQuery"));
  else if (typeof define === 'function' && define.amd)
    define(["jQuery"], factory);
  else {
    var a = typeof exports === 'object' ? factory(require("jQuery")) : factory(root["jQuery"]);
    for (var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
  }
})(window, function (__WEBPACK_EXTERNAL_MODULE_jquery__) {
  return (function (modules) { // webpackBootstrap
    // The module cache
    var installedModules = {};

    // The require function
    function __webpack_require__(moduleId) {
      // Check if module is in cache
      if (installedModules[moduleId]) {
        return installedModules[moduleId].exports;
      }

      // Create a new module (and put it into the cache)
      var module = installedModules[moduleId] = {
        i: moduleId,
        l: false,
        exports: {}
      };

      // Execute the module function
      modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

      // Flag the module as loaded
      module.l = true;

      // Return the exports of the module
      return module.exports;
    }

    // expose the modules object (__webpack_modules__)
    __webpack_require__.m = modules;

    // expose the module cache
    __webpack_require__.c = installedModules;

    // define getter function for harmony exports
    __webpack_require__.d = function (exports, name, getter) {
      if (!__webpack_require__.o(exports, name)) {
        Object.defineProperty(exports, name, {
          enumerable: true, get: getter
        });
      }
    };

    // define __esModule on exports
    __webpack_require__.r = function (exports) {
      if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
        Object.defineProperty(exports, Symbol.toStringTag, {
          value: 'Module'
        });
      }
      Object.defineProperty(exports, '__esModule', { value: true });
    };

    // create a fake namespace object
    // mode & 1: value is a module id, require it
    // mode & 2: merge all properties of value into the ns
    // mode & 4: return value when already ns object
    // mode & 8|1: behave like require
    __webpack_require__.t = function (value, mode) {
      if (mode & 1) value = __webpack_require__(value);
      if (mode & 8) return value;
      if ((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
      var ns = Object.create(null);
      __webpack_require__.r(ns);
      Object.defineProperty(ns, 'default', {
        enumerable: true, value: value
      });
      if (mode & 2 && typeof value != 'string') for (var key in value) __webpack_require__.d(ns, key, function (key) {
        return value[key];
      }.bind(null, key));
      return ns;
    };

    // getDefaultExport function for compatibility with non-harmony modules
    __webpack_require__.n = function (module) {
      var getter = module && module.__esModule ?
        function getDefault() {
          return module['default'];
        } :
        function getModuleExports() {
          return module;
        };
      __webpack_require__.d(getter, 'a', getter);
      return getter;
    };

    // Object.prototype.hasOwnProperty.call
    __webpack_require__.o = function (object, property) {
      return Object.prototype.hasOwnProperty.call(object, property);
    };

    // __webpack_public_path__
    __webpack_require__.p = "";


    // Load entry module and return exports
    return __webpack_require__(__webpack_require__.s = "../../../../../../../tmp/tmp.6.6.3.79b7bc99270bc72212fdd37d5dac574a/js/vendor/foundation.js");
  })

    ({
      "../../../../../../../tmp/tmp.6.6.3.79b7bc99270bc72212fdd37d5dac574a/js/vendor/foundation.js":
        /*!*******************************************************************************!*\
          !*** /tmp/tmp.6.6.3.79b7bc99270bc72212fdd37d5dac574a/js/vendor/foundation.js ***!
        \*******************************************************************************/
        /*! no exports provided */
        (function (module, __webpack_exports__, __webpack_require__) {

          "use strict";
          eval("__webpack_require__.r(__webpack_exports__);
        /* harmony import */
        var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ \"jquery\");
        /* harmony import */
        var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
          /* harmony import */
          var _var_www_virtual_druf_html_foundation_customizer_daniel_ruf_de_foundation_sites_js_foundation_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/foundation.core */ \"./js/foundation.core.js\");
      /* harmony import */
      var _var_www_virtual_druf_html_foundation_customizer_daniel_ruf_de_foundation_sites_js_foundation_util_mediaQuery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/foundation.util.mediaQuery */ \"./js/foundation.util.mediaQuery.js\");
      /* harmony import */
      var _var_www_virtual_druf_html_foundation_customizer_daniel_ruf_de_foundation_sites_js_foundation_util_triggers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js/foundation.util.triggers */ \"./js/foundation.util.triggers.js\");
      /* harmony import */
      var _var_www_virtual_druf_html_foundation_customizer_daniel_ruf_de_foundation_sites_js_foundation_slider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./js/foundation.slider */ \"./js/foundation.slider.js\");
      /* harmony import */
      var _var_www_virtual_druf_html_foundation_customizer_daniel_ruf_de_foundation_sites_js_foundation_drilldown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./js/foundation.drilldown */ \"./js/foundation.drilldown.js\");
      /* harmony import */
      var _var_www_virtual_druf_html_foundation_customizer_daniel_ruf_de_foundation_sites_js_foundation_accordionMenu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./js/foundation.accordionMenu */ \"./js/foundation.accordionMenu.js\");
      /* harmony import */
      var _var_www_virtual_druf_html_foundation_customizer_daniel_ruf_de_foundation_sites_js_foundation_dropdownMenu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./js/foundation.dropdownMenu */ \"./js/foundation.dropdownMenu.js\");
      /* harmony import */
      var _var_www_virtual_druf_html_foundation_customizer_daniel_ruf_de_foundation_sites_js_foundation_magellan__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./js/foundation.magellan */ \"./js/foundation.magellan.js\");
      /* harmony import */
      var _var_www_virtual_druf_html_foundation_customizer_daniel_ruf_de_foundation_sites_js_foundation_responsiveMenu__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./js/foundation.responsiveMenu */ \"./js/foundation.responsiveMenu.js\");
      /* harmony import */
      var _var_www_virtual_druf_html_foundation_customizer_daniel_ruf_de_foundation_sites_js_foundation_accordion__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./js/foundation.accordion */ \"./js/foundation.accordion.js\");
      /* harmony import */
      var _var_www_virtual_druf_html_foundation_customizer_daniel_ruf_de_foundation_sites_js_foundation_dropdown__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./js/foundation.dropdown */ \"./js/foundation.dropdown.js\");
      /* harmony import */
      var _var_www_virtual_druf_html_foundation_customizer_daniel_ruf_de_foundation_sites_js_foundation_offcanvas__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./js/foundation.offcanvas */ \"./js/foundation.offcanvas.js\");
      /* harmony import */
      var _var_www_virtual_druf_html_foundation_customizer_daniel_ruf_de_foundation_sites_js_foundation_tabs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./js/foundation.tabs */ \"./js/foundation.tabs.js\");
      /* harmony import */
      var _var_www_virtual_druf_html_foundation_customizer_daniel_ruf_de_foundation_sites_js_foundation_reveal__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./js/foundation.reveal */ \"./js/foundation.reveal.js\");
      /* harmony import */
      var _var_www_virtual_druf_html_foundation_customizer_daniel_ruf_de_foundation_sites_js_foundation_responsiveAccordionTabs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./js/foundation.responsiveAccordionTabs */ \"./js/foundation.responsiveAccordionTabs.js\");
      /* harmony import */
      var _var_www_virtual_druf_html_foundation_customizer_daniel_ruf_de_foundation_sites_js_foundation_tooltip__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./js/foundation.tooltip */ \"./js/foundation.tooltip.js\");
      /* harmony import */
      var _var_www_virtual_druf_html_foundation_customizer_daniel_ruf_de_foundation_sites_js_foundation_orbit__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./js/foundation.orbit */ \"./js/foundation.orbit.js\");
      /* harmony import */
      var _var_www_virtual_druf_html_foundation_customizer_daniel_ruf_de_foundation_sites_js_foundation_sticky__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./js/foundation.sticky */ \"./js/foundation.sticky.js\");
      /* harmony import */
      var _var_www_virtual_druf_html_foundation_customizer_daniel_ruf_de_foundation_sites_js_foundation_interchange__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./js/foundation.interchange */ \"./js/foundation.interchange.js\");
      /* harmony import */
      var _var_www_virtual_druf_html_foundation_customizer_daniel_ruf_de_foundation_sites_js_foundation_responsiveToggle__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./js/foundation.responsiveToggle */ \"./js/foundation.responsiveToggle.js\");
      /* harmony import */
      var _var_www_virtual_druf_html_foundation_customizer_daniel_ruf_de_foundation_sites_js_foundation_toggler__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./js/foundation.toggler */ \"./js/foundation.toggler.js\");
      /* harmony import */
      var _var_www_virtual_druf_html_foundation_customizer_daniel_ruf_de_foundation_sites_js_foundation_abide__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./js/foundation.abide */ \"./js/foundation.abide.js\");
      /* harmony import */
      var _var_www_virtual_druf_html_foundation_customizer_daniel_ruf_de_foundation_sites_js_foundation_equalizer__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./js/foundation.equalizer */ \"./js/foundation.equalizer.js\");
      /* harmony import */
      var _var_www_virtual_druf_html_foundation_customizer_daniel_ruf_de_foundation_sites_js_foundation_smoothScroll__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./js/foundation.smoothScroll */ \"./js/foundation.smoothScroll.js\");


      _var_www_virtual_druf_html_foundation_customizer_daniel_ruf_de_foundation_sites_js_foundation_core__WEBPACK_IMPORTED_MODULE_1__[\"Foundation\"].addToJquery(jquery__WEBPACK_IMPORTED_MODULE_0___default.a);

      _var_www_virtual_druf_html_foundation_customizer_daniel_ruf_de_foundation_sites_js_foundation_core__WEBPACK_IMPORTED_MODULE_1__[\"Foundation\"].MediaQuery = _var_www_virtual_druf_html_foundation_customizer_daniel_ruf_de_foundation_sites_js_foundation_util_mediaQuery__WEBPACK_IMPORTED_MODULE_2__[\"MediaQuery\"];

      _var_www_virtual_druf_html_foundation_customizer_daniel_ruf_de_foundation_sites_js_foundation_util_triggers__WEBPACK_IMPORTED_MODULE_3__[\"Triggers\"].init(jquery__WEBPACK_IMPORTED_MODULE_0___default.a, _var_www_virtual_druf_html_foundation_customizer_daniel_ruf_de_foundation_sites_js_foundation_core__WEBPACK_IMPORTED_MODULE_1__[\"Foundation\"]);

      _var_www_virtual_druf_html_foundation_customizer_daniel_ruf_de_foundation_sites_js_foundation_core__WEBPACK_IMPORTED_MODULE_1__[\"Foundation\"].plugin(_var_www_virtual_druf_html_foundation_customizer_daniel_ruf_de_foundation_sites_js_foundation_slider__WEBPACK_IMPORTED_MODULE_4__[\"Slider\"], 'Slider');

      _var_www_virtual_druf_html_foundation_customizer_daniel_ruf_de_foundation_sites_js_foundation_core__WEBPACK_IMPORTED_MODULE_1__[\"Foundation\"].plugin(_var_www_virtual_druf_html_foundation_customizer_daniel_ruf_de_foundation_sites_js_foundation_drilldown__WEBPACK_IMPORTED_MODULE_5__[\"Drilldown\"], 'Drilldown');

      _var_www_virtual_druf_html_foundation_customizer_daniel_ruf_de_foundation_sites_js_foundation_core__WEBPACK_IMPORTED_MODULE_1__[\"Foundation\"].plugin(_var_www_virtual_druf_html_foundation_customizer_daniel_ruf_de_foundation_sites_js_foundation_accordionMenu__WEBPACK_IMPORTED_MODULE_6__[\"AccordionMenu\"], 'AccordionMenu');

      _var_www_virtual_druf_html_foundation_customizer_daniel_ruf_de_foundation_sites_js_foundation_core__WEBPACK_IMPORTED_MODULE_1__[\"Foundation\"].plugin(_var_www_virtual_druf_html_foundation_customizer_daniel_ruf_de_foundation_sites_js_foundation_dropdownMenu__WEBPACK_IMPORTED_MODULE_7__[\"DropdownMenu\"], 'DropdownMenu');

      _var_www_virtual_druf_html_foundation_customizer_daniel_ruf_de_foundation_sites_js_foundation_core__WEBPACK_IMPORTED_MODULE_1__[\"Foundation\"].plugin(_var_www_virtual_druf_html_foundation_customizer_daniel_ruf_de_foundation_sites_js_foundation_magellan__WEBPACK_IMPORTED_MODULE_8__[\"Magellan\"], 'Magellan');

      _var_www_virtual_druf_html_foundation_customizer_daniel_ruf_de_foundation_sites_js_foundation_core__WEBPACK_IMPORTED_MODULE_1__[\"Foundation\"].plugin(_var_www_virtual_druf_html_foundation_customizer_daniel_ruf_de_foundation_sites_js_foundation_responsiveMenu__WEBPACK_IMPORTED_MODULE_9__[\"ResponsiveMenu\"], 'ResponsiveMenu');

      _var_www_virtual_druf_html_foundation_customizer_daniel_ruf_de_foundation_sites_js_foundation_core__WEBPACK_IMPORTED_MODULE_1__[\"Foundation\"].plugin(_var_www_virtual_druf_html_foundation_customizer_daniel_ruf_de_foundation_sites_js_foundation_accordion__WEBPACK_IMPORTED_MODULE_10__[\"Accordion\"], 'Accordion');

      _var_www_virtual_druf_html_foundation_customizer_daniel_ruf_de_foundation_sites_js_foundation_core__WEBPACK_IMPORTED_MODULE_1__[\"Foundation\"].plugin(_var_www_virtual_druf_html_foundation_customizer_daniel_ruf_de_foundation_sites_js_foundation_dropdown__WEBPACK_IMPORTED_MODULE_11__[\"Dropdown\"], 'Dropdown');

      _var_www_virtual_druf_html_foundation_customizer_daniel_ruf_de_foundation_sites_js_foundation_core__WEBPACK_IMPORTED_MODULE_1__[\"Foundation\"].plugin(_var_www_virtual_druf_html_foundation_customizer_daniel_ruf_de_foundation_sites_js_foundation_offcanvas__WEBPACK_IMPORTED_MODULE_12__[\"OffCanvas\"], 'OffCanvas');

      _var_www_virtual_druf_html_foundation_customizer_daniel_ruf_de_foundation_sites_js_foundation_core__WEBPACK_IMPORTED_MODULE_1__[\"Foundation\"].plugin(_var_www_virtual_druf_html_foundation_customizer_daniel_ruf_de_foundation_sites_js_foundation_tabs__WEBPACK_IMPORTED_MODULE_13__[\"Tabs\"], 'Tabs');

      _var_www_virtual_druf_html_foundation_customizer_daniel_ruf_de_foundation_sites_js_foundation_core__WEBPACK_IMPORTED_MODULE_1__[\"Foundation\"].plugin(_var_www_virtual_druf_html_foundation_customizer_daniel_ruf_de_foundation_sites_js_foundation_reveal__WEBPACK_IMPORTED_MODULE_14__[\"Reveal\"], 'Reveal');

      _var_www_virtual_druf_html_foundation_customizer_daniel_ruf_de_foundation_sites_js_foundation_core__WEBPACK_IMPORTED_MODULE_1__[\"Foundation\"].plugin(_var_www_virtual_druf_html_foundation_customizer_daniel_ruf_de_foundation_sites_js_foundation_responsiveAccordionTabs__WEBPACK_IMPORTED_MODULE_15__[\"ResponsiveAccordionTabs\"], 'ResponsiveAccordionTabs');

      _var_www_virtual_druf_html_foundation_customizer_daniel_ruf_de_foundation_sites_js_foundation_core__WEBPACK_IMPORTED_MODULE_1__[\"Foundation\"].plugin(_var_www_virtual_druf_html_foundation_customizer_daniel_ruf_de_foundation_sites_js_foundation_tooltip__WEBPACK_IMPORTED_MODULE_16__[\"Tooltip\"], 'Tooltip');

      _var_www_virtual_druf_html_foundation_customizer_daniel_ruf_de_foundation_sites_js_foundation_core__WEBPACK_IMPORTED_MODULE_1__[\"Foundation\"].plugin(_var_www_virtual_druf_html_foundation_customizer_daniel_ruf_de_foundation_sites_js_foundation_orbit__WEBPACK_IMPORTED_MODULE_17__[\"Orbit\"], 'Orbit');

      _var_www_virtual_druf_html_foundation_customizer_daniel_ruf_de_foundation_sites_js_foundation_core__WEBPACK_IMPORTED_MODULE_1__[\"Foundation\"].plugin(_var_www_virtual_druf_html_foundation_customizer_daniel_ruf_de_foundation_sites_js_foundation_sticky__WEBPACK_IMPORTED_MODULE_18__[\"Sticky\"], 'Sticky');

      _var_www_virtual_druf_html_foundation_customizer_daniel_ruf_de_foundation_sites_js_foundation_core__WEBPACK_IMPORTED_MODULE_1__[\"Foundation\"].plugin(_var_www_virtual_druf_html_foundation_customizer_daniel_ruf_de_foundation_sites_js_foundation_interchange__WEBPACK_IMPORTED_MODULE_19__[\"Interchange\"], 'Interchange');

      _var_www_virtual_druf_html_foundation_customizer_daniel_ruf_de_foundation_sites_js_foundation_core__WEBPACK_IMPORTED_MODULE_1__[\"Foundation\"].plugin(_var_www_virtual_druf_html_foundation_customizer_daniel_ruf_de_foundation_sites_js_foundation_responsiveToggle__WEBPACK_IMPORTED_MODULE_20__[\"ResponsiveToggle\"], 'ResponsiveToggle');

      _var_www_virtual_druf_html_foundation_customizer_daniel_ruf_de_foundation_sites_js_foundation_core__WEBPACK_IMPORTED_MODULE_1__[\"Foundation\"].plugin(_var_www_virtual_druf_html_foundation_customizer_daniel_ruf_de_foundation_sites_js_foundation_toggler__WEBPACK_IMPORTED_MODULE_21__[\"Toggler\"], 'Toggler');

      _var_www_virtual_druf_html_foundation_customizer_daniel_ruf_de_foundation_sites_js_foundation_core__WEBPACK_IMPORTED_MODULE_1__[\"Foundation\"].plugin(_var_www_virtual_druf_html_foundation_customizer_daniel_ruf_de_foundation_sites_js_foundation_abide__WEBPACK_IMPORTED_MODULE_22__[\"Abide\"], 'Abide');

      _var_www_virtual_druf_html_foundation_customizer_daniel_ruf_de_foundation_sites_js_foundation_core__WEBPACK_IMPORTED_MODULE_1__[\"Foundation\"].plugin(_var_www_virtual_druf_html_foundation_customizer_daniel_ruf_de_foundation_sites_js_foundation_equalizer__WEBPACK_IMPORTED_MODULE_23__[\"Equalizer\"], 'Equalizer');

      _var_www_virtual_druf_html_foundation_customizer_daniel_ruf_de_foundation_sites_js_foundation_core__WEBPACK_IMPORTED_MODULE_1__[\"Foundation\"].plugin(_var_www_virtual_druf_html_foundation_customizer_daniel_ruf_de_foundation_sites_js_foundation_smoothScroll__WEBPACK_IMPORTED_MODULE_24__[\"SmoothScroll\"], 'SmoothScroll');

      //# sourceURL=webpack:////tmp/tmp.6.6.3.79b7bc99270bc72212fdd37d5dac574a/js/vendor/foundation.js?");

        /***/
      }),

/***/ "./js/foundation.abide.js":
/*!********************************!*\
  !*** ./js/foundation.abide.js ***!
  \********************************/
/*! exports provided: Abide */
/***/ (function (module, __webpack_exports__, __webpack_require__) {

          "use strict";
          eval("__webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Abide\", function() { return Abide; });
        /* harmony import */
        var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ \"jquery\");
        /* harmony import */
        var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
          /* harmony import */
          var _foundation_core_plugin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./foundation.core.plugin */ \"./js/foundation.core.plugin.js\");
    /* harmony import */
    var _foundation_core_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./foundation.core.utils */ \"./js/foundation.core.utils.js\");


    function _typeof(obj) {
              if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") {
              _typeof = function _typeof(obj) {
                return typeof obj;
              };
            } else {
              _typeof = function _typeof(obj) {
                return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj;
              };
            } return _typeof(obj);
    }

function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError(\"Cannot call a class as a function\");
        }
      }

  function _defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if (\"value\" in descriptor) descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }

  function _createClass(Constructor, protoProps, staticProps) {
        if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor;
      }

  function _possibleConstructorReturn(self, call) {
        if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) {
        return call;
      }
  return _assertThisInitialized(self);
}

function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");
}
    return self;
  }

  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== \"function\" && superClass !== null) {
    throw new TypeError(\"Super expression must either be null or a function\");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass, writable: true, configurable: true
      }
    });
if (superClass) _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p; return o;
  };
  return _setPrototypeOf(o, p);
}




/**\n * Abide module.\n
 * @module foundation.abide\n
 */
var Abide =
  /*#__PURE__*/
  function (_Plugin) {
    _inherits(Abide, _Plugin);

    function Abide() {
      _classCallCheck(this, Abide);

      return _possibleConstructorReturn(this, _getPrototypeOf(Abide).apply(this, arguments)); \n

    }

    _createClass(Abide, [{
      key: \"_setup\",

    /**
     * Creates a new instance of Abide.
     * @class
     * @name Abide
     * @fires Abide#init
     * @param {Object} element - jQuery object to add the trigger to.
     * @param {Object} options - Overrides to the default plugin settings.
     */
    value: function _setup(element) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      this.$element = element;
      this.options = jquery__WEBPACK_IMPORTED_MODULE_0___default.a.extend(true, {}, Abide.defaults, this.$element.data(), options);
      this.isEnabled = true;
      this.formnovalidate = null;
      this.className = 'Abide'; // ie9 back compat

      this._init();
    }
    /**
     * Initializes the Abide plugin and calls functions to get Abide functioning on load.
     * @private
     */

  }, {
    key: \"_init\",
  value: function _init() {
  var _this2 = this;

  this.$inputs = jquery__WEBPACK_IMPORTED_MODULE_0___default.a.merge( // Consider as input to validate:
    this.$element.find('input').not('[type=\"submit\"]'), // * all input fields expect submit
    this.$element.find('textarea, select') // * all textareas and select fields
  );
  this.$submits = this.$element.find('[type=\"submit\"]');
  var $globalErrors = this.$element.find('[data-abide-error]'); // Add a11y attributes to all fields

  if (this.options.a11yAttributes) {
    this.$inputs.each(function (i, input) {
      return _this2.addA11yAttributes(jquery__WEBPACK_IMPORTED_MODULE_0___default()(input));
    });
    $globalErrors.each(function (i, error) {
      return _this2.addGlobalErrorA11yAttributes(jquery__WEBPACK_IMPORTED_MODULE_0___default()(error));
    });
  }

  this._events();
}
/**
 * Initializes events for Abide.
 * @private
 */

}, {
  key: \"_events\",
  value: function _events() {
    var _this3 = this;

    this.$element.off('.abide').on('reset.zf.abide', function () {
      _this3.resetForm();
    }).on('submit.zf.abide', function () {
      return _this3.validateForm();
    });
    this.$submits.off('click.zf.abide keydown.zf.abide').on('click.zf.abide keydown.zf.abide', function (e) {
      if (!e.key || e.key === ' ' || e.key === 'Enter') {
        e.preventDefault();
        _this3.formnovalidate = e.target.getAttribute('formnovalidate') !== null;

        _this3.$element.submit();
      }
    });

    if (this.options.validateOn === 'fieldChange') {
      this.$inputs.off('change.zf.abide').on('change.zf.abide', function (e) {
        _this3.validateInput(jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target));
      });
    }

    if (this.options.liveValidate) {
      this.$inputs.off('input.zf.abide').on('input.zf.abide', function (e) {
        _this3.validateInput(jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target));
      });
    }

    if (this.options.validateOnBlur) {
      this.$inputs.off('blur.zf.abide').on('blur.zf.abide', function (e) {
        _this3.validateInput(jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target));
      });
    }
  }
  /**
   * Calls necessary functions to update Abide upon DOM change
   * @private
   */

}, {
  key: \"_reflow\",
  value: function _reflow() {
    this._init();
  }
  /**
   * Checks whether the submitted form should be validated or not, consodering formnovalidate and isEnabled
   * @returns {Boolean}
   * * @private
   */

}, {
  key: \"_validationIsDisabled\",
  value: function _validationIsDisabled() {
    if (this.isEnabled === false) {
      // whole validation disabled
      return true;
    } else if (typeof this.formnovalidate === 'boolean') {
      // triggered by $submit
      return this.formnovalidate;
    } // triggered by Enter in non-submit input


    return this.$submits.length ? this.$submits[0].getAttribute('formnovalidate') !== null : false;
  }
  /**
   * Enables the whole validation
   */

}, {
  key: \"enableValidation\",
  value: function enableValidation() {
    this.isEnabled = true;
  }
  /**
   * Disables the whole validation
   */

}, {
  key: \"disableValidation\",
  value: function disableValidation() {
    this.isEnabled = false;
  }
  /**
   * Checks whether or not a form element has the required attribute and if it's checked or not
   * @param {Object} element - jQuery object to check for required attribute
   * @returns {Boolean} Boolean value depends on whether or not attribute is checked or empty
   */

}, {
  key: \"requiredCheck\",
  value: function requiredCheck($el) {
    if (!$el.attr('required')) return true;
    var isGood = true;

    switch ($el[0].type) {
      case 'checkbox':
        isGood = $el[0].checked;
        break;

      case 'select':
      case 'select-one':
      case 'select-multiple':
        var opt = $el.find('option:selected');
        if (!opt.length || !opt.val()) isGood = false;
        break;

      default:
        if (!$el.val() || !$el.val().length) isGood = false;
    }

    return isGood;
  }
  /**
   * Get:
   * - Based on $el, the first element(s) corresponding to `formErrorSelector` in this order:
   *   1. The element's direct sibling('s).
   *   2. The element's parent's children.
   * - Element(s) with the attribute `[data-form-error-for]` set with the element's id.
   *
   * This allows for multiple form errors per input, though if none are found, no form errors will be shown.
   *
   * @param {Object} $el - jQuery object to use as reference to find the form error selector.
   * @param {String[]} [failedValidators] - List of failed validators.
   * @returns {Object} jQuery object with the selector.
   */

}, {
  key: \"findFormError\",
  value: function findFormError($el, failedValidators) {
    var _this4 = this;
    var id = $el.length ? $el[0].id : '';
    var $error = $el.siblings(this.options.formErrorSelector);

    if (!$error.length) {
      $error = $el.parent().find(this.options.formErrorSelector);
    }

    if (id) {
      $error = $error.add(this.$element.find(\"[data-form-error-for=\\\"\".concat(id, \"\\\"]\")));
    }
    if (!!failedValidators) {
      $error = $error.not('[data-form-error-on]');
      failedValidators.forEach(function (v) {
        $error = $error.add($el.siblings(\"[data-form-error-on=\\\"\".concat(v, \"\\\"]\")));
        $error = $error.add(_this4.$element.find(\"[data-form-error-for=\\\"\".concat(id, \"\\\"][data-form-error-on=\\\"\").concat(v, \"\\\"]\")));
      });
    }

    return $error;
  }
  /**
   * Get the first element in this order:
   * 2. The <label> with the attribute `[for=\"someInputId\"]`
   * 3. The `.closest()` <label>\
   *
   * @param {Object} $el - jQuery object to check for required attribute
   * @returns {Boolean} Boolean value depends on whether or not attribute is checked or empty
   */

}, {
  key: \"findLabel\",
  value: function findLabel($el) {
    var id = $el[0].id;
    var $label = this.$element.find(\"label[for=\\\"\".concat(id, \"\\\"]\"));

    if (!$label.length) {
      return $el.closest('label');
    }

    return $label;
  }
  /**
   * Get the set of labels associated with a set of radio els in this order
   * 2. The <label> with the attribute `[for=\"someInputId\"]`
   * 3. The `.closest()` <label>
   *
   * @param {Object} $el - jQuery object to check for required attribute
   * @returns {Boolean} Boolean value depends on whether or not attribute is checked or empty
   */

}, {
  key: \"findRadioLabels\",
  value: function findRadioLabels($els) {
    var _this5 = this;

    var labels = $els.map(function (i, el) {
      var id = el.id;

      var $label = _this5.$element.find(\"label[for=\\\"\".concat(id, \"\\\"]\"));

    if (!$label.length) {
        $label = jquery__WEBPACK_IMPORTED_MODULE_0___default()(el).closest('label');
      }

      return $label[0];
    });
    return jquery__WEBPACK_IMPORTED_MODULE_0___default()(labels);
  }
  /**
   * Get the set of labels associated with a set of checkbox els in this order
   * 2. The <label> with the attribute `[for=\"someInputId\"]`
   * 3. The `.closest()` <label>
   *
   * @param {Object} $el - jQuery object to check for required attribute
   * @returns {Boolean} Boolean value depends on whether or not attribute is checked or empty
   */

}, {
  key: \"findCheckboxLabels\",
  value: function findCheckboxLabels($els) {
    var _this6 = this;

    var labels = $els.map(function (i, el) {
      var id = el.id;

      var $label = _this6.$element.find(\"label[for=\\\"\".concat(id, \"\\\"]\"));

    if (!$label.length) {
        $label = jquery__WEBPACK_IMPORTED_MODULE_0___default()(el).closest('label');
      }

      return $label[0];
    });
    return jquery__WEBPACK_IMPORTED_MODULE_0___default()(labels);
  }
  /**
   * Adds the CSS error class as specified by the Abide settings to the label, input, and the form
   * @param {Object} $el - jQuery object to add the class to
   * @param {String[]} [failedValidators] - List of failed validators.
   */

}, {
  key: \"addErrorClasses\",
  value: function addErrorClasses($el, failedValidators) {
    var $label = this.findLabel($el);
    var $formError = this.findFormError($el, failedValidators);

    if ($label.length) {
      $label.addClass(this.options.labelErrorClass);
    }

    if ($formError.length) {
      $formError.addClass(this.options.formErrorClass);
    }

    $el.addClass(this.options.inputErrorClass).attr({
      'data-invalid': '',
      'aria-invalid': true
    });
  }
  /**
   * Adds [for] and [role=alert] attributes to all form error targetting $el,
   * and [aria-describedby] attribute to $el toward the first form error.
   * @param {Object} $el - jQuery object
   */

}, {
  key: \"addA11yAttributes\",
  value: function addA11yAttributes($el) {
    var $errors = this.findFormError($el);
    var $labels = $errors.filter('label');
    var $error = $errors.first();
    if (!$errors.length) return;
    // Set [aria-describedby] on the input toward the first form error if it is not set

    if (typeof $el.attr('aria-describedby') === 'undefined') {
      // Get the first error ID or create one
      var errorId = $error.attr('id');

      if (typeof errorId === 'undefined') {
        errorId = Object(_foundation_core_utils__WEBPACK_IMPORTED_MODULE_2__[\"GetYoDigits\"])(6, 'abide-error');
        $error.attr('id', errorId);
      }

      $el.attr('aria-describedby', errorId);
    }

    if ($labels.filter('[for]').length < $labels.length) {
      // Get the input ID or create one
      var elemId = $el.attr('id');

      if (typeof elemId === 'undefined') {
        elemId = Object(_foundation_core_utils__WEBPACK_IMPORTED_MODULE_2__[\"GetYoDigits\"])(6, 'abide-input');
        $el.attr('id', elemId);
      }
      // For each label targeting $el, set [for] if it is not set.


      $labels.each(function (i, label) {
        var $label = jquery__WEBPACK_IMPORTED_MODULE_0___default()(label);
        if (typeof $label.attr('for') === 'undefined') $label.attr('for', elemId);
      });
    }
    // For each error targeting $el, set [role=alert] if it is not set.


    $errors.each(function (i, label) {
      var $label = jquery__WEBPACK_IMPORTED_MODULE_0___default()(label);
      if (typeof $label.attr('role') === 'undefined') $label.attr('role', 'alert');
    }).end();
  }
  /**
   * Adds [aria-live] attribute to the given global form error $el.
   * @param {Object} $el - jQuery object to add the attribute to
   */

}, {
  key: \"addGlobalErrorA11yAttributes\",
  value: function addGlobalErrorA11yAttributes($el) {
    if (typeof $el.attr('aria-live') === 'undefined') $el.attr('aria-live', this.options.a11yErrorLevel);
  }
  /**
   * Remove CSS error classes etc from an entire radio button group
   * @param {String} groupName - A string that specifies the name of a radio button group
   *
   */

}, {
  key: \"removeRadioErrorClasses\",
  value: function removeRadioErrorClasses(groupName) {
    var $els = this.$element.find(\":radio[name=\\\"\".concat(groupName, \"\\\"]\"));
    var $labels = this.findRadioLabels($els);
    var $formErrors = this.findFormError($els);

    if ($labels.length) {
      $labels.removeClass(this.options.labelErrorClass);
    }

    if ($formErrors.length) {
      $formErrors.removeClass(this.options.formErrorClass);
    }

    $els.removeClass(this.options.inputErrorClass).attr({
      'data-invalid': null,
      'aria-invalid': null
    });
  }
  /**
   * Remove CSS error classes etc from an entire checkbox group
   * @param {String} groupName - A string that specifies the name of a checkbox group
   *
   */

}, {
  key: \"removeCheckboxErrorClasses\",
  value: function removeCheckboxErrorClasses(groupName) {
    var $els = this.$element.find(\":checkbox[name=\\\"\".concat(groupName, \"\\\"]\"));
    var $labels = this.findCheckboxLabels($els);
    var $formErrors = this.findFormError($els);

    if ($labels.length) {
      $labels.removeClass(this.options.labelErrorClass);
    }

    if ($formErrors.length) {
      $formErrors.removeClass(this.options.formErrorClass);
    }

    $els.removeClass(this.options.inputErrorClass).attr({
      'data-invalid': null,
      'aria-invalid': null
    });
  }
  /**
   * Removes CSS error class as specified by the Abide settings from the label, input, and the form
   * @param {Object} $el - jQuery object to remove the class from
   */

}, {
  key: \"removeErrorClasses\",
  value: function removeErrorClasses($el) {
    // radios need to clear all of the els
    if ($el[0].type == 'radio') {
      return this.removeRadioErrorClasses($el.attr('name'));
    } // checkboxes need to clear all of the els
    else if ($el[0].type == 'checkbox') {
      return this.removeCheckboxErrorClasses($el.attr('name'));
    }

    var $label = this.findLabel($el);
    var $formError = this.findFormError($el);

    if ($label.length) {
      $label.removeClass(this.options.labelErrorClass);
    }

    if ($formError.length) {
      $formError.removeClass(this.options.formErrorClass);
    }

    $el.removeClass(this.options.inputErrorClass).attr({
      'data-invalid': null,
      'aria-invalid': null
    });
  }
  /**
   * Goes through a form to find inputs and proceeds to validate them in ways specific to their type.
   * Ignores inputs with data-abide-ignore, type=\"hidden\" or disabled attributes set
   * @fires Abide#invalid
   * @fires Abide#valid
   * @param {Object} element - jQuery object to validate, should be an HTML input
   * @returns {Boolean} goodToGo - If the input is valid or not.
   */

}, {
  key: \"validateInput\",
  value: function validateInput($el) {
    var _this7 = this;

    var clearRequire = this.requiredCheck($el),
      validator = $el.attr('data-validator'),
      failedValidators = [],
      manageErrorClasses = true;
    // skip validation if disabled

    if (this._validationIsDisabled()) {
      return true;
    } // don't validate ignored inputs or hidden inputs or disabled inputs


    if ($el.is('[data-abide-ignore]') || $el.is('[type=\"hidden\"]') || $el.is('[disabled]')) {
      return true;
    }

    switch ($el[0].type) {
      case 'radio':
        this.validateRadio($el.attr('name')) || failedValidators.push('required');
        break;

      case 'checkbox':
        this.validateCheckbox($el.attr('name')) || failedValidators.push('required');
        // validateCheckbox() adds/removes error classes

        manageErrorClasses = false;
        break;

      case 'select':
      case 'select-one':
      case 'select-multiple':
        clearRequire || failedValidators.push('required');
        break;

      default:
        clearRequire || failedValidators.push('required');
        this.validateText($el) || failedValidators.push('pattern');
    }

    if (validator) {
      var required = $el.attr('required') ? true : false;
      validator.split(' ').forEach(function (v) {
        _this7.options.validators[v]($el, required, $el.parent()) || failedValidators.push(v);
      });
    }

    if ($el.attr('data-equalto')) {
      this.options.validators.equalTo($el) || failedValidators.push('equalTo');
    }

    var goodToGo = failedValidators.length === 0;
    var message = (goodToGo ? 'valid' : 'invalid') + '.zf.abide';

    if (goodToGo) {
      // Re-validate inputs that depend on this one with equalto
      var dependentElements = this.$element.find(\"[data-equalto=\\\"\".concat($el.attr('id'), \"\\\"]\"));

    if (dependentElements.length) {
        var _this = this;
        dependentElements.each(function () {
          if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).val()) {
            _this.validateInput(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this));
          }
        });
      }
    }

    if (manageErrorClasses) {
      this.removeErrorClasses($el);

      if (!goodToGo) {
        this.addErrorClasses($el, failedValidators);
      }
    }
    /**
     * Fires when the input is done checking for validation. Event trigger is either `valid.zf.abide` or `invalid.zf.
     * abide`
     * Trigger includes the DOM element of the input.
     * @event Abide#valid
     * @event Abide#invalid
     */


    $el.trigger(message, [$el]);
    return goodToGo;
  }
  /**
   * Goes through a form and if there are any invalid inputs, it will display the form error element
   * @returns {Boolean} noError - true if no errors were detected...
   * @fires Abide#formvalid
   * @fires Abide#forminvalid
   */

}, {
  key: \"validateForm\",
  value: function validateForm() {
    var _this8 = this;

    var acc = [];

    var _this = this;

    var checkboxGroupName;
    // Remember first form submission to prevent specific checkbox validation (more than one required) until form got initially submitted

    if (!this.initialized) {
      this.initialized = true;
    } // skip validation if disabled


    if (this._validationIsDisabled()) {
      this.formnovalidate = null;
      return true;
    }

    this.$inputs.each(function () {
      // Only use one checkbox per group since validateCheckbox() iterates over all associated checkboxes
      if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(this)[0].type === 'checkbox') {
        if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).attr('name') === checkboxGroupName) return true;
        checkboxGroupName = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).attr('name');
      }

      acc.push(_this.validateInput(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this)));
    });
    var noError = acc.indexOf(false) === -1;
    this.$element.find('[data-abide-error]').each(function (i, elem) {
      var $elem = jquery__WEBPACK_IMPORTED_MODULE_0___default()(elem);
      // Ensure a11y attributes are set


      if (_this8.options.a11yAttributes) _this8.addGlobalErrorA11yAttributes($elem);
      // Show or hide the error

      $elem.css('display', noError ? 'none' : 'block');
    });
    /**
     * Fires when the form is finished validating. Event trigger is either `formvalid.zf.abide` or `forminvalid.zf.
     * abide`.
     * Trigger includes the element of the form.
     * @event Abide#formvalid
     * @event Abide#forminvalid
     */

    this.$element.trigger((noError ? 'formvalid' : 'forminvalid') + '.zf.abide', [this.$element]);
    return noError;
  }
  /**
   * Determines whether or a not a text input is valid based on the pattern specified in the attribute. If no
   * matching pattern is found, returns true.
   * @param {Object} $el - jQuery object to validate, should be a text input HTML element
   * @param {String} pattern - string value of one of the RegEx patterns in Abide.options.patterns
   * @returns {Boolean} Boolean value depends on whether or not the input value matches the pattern specified
   */

}, {
  key: \"validateText\",
  value: function validateText($el, pattern) {
    // A pattern can be passed to this function, or it will be infered from the input's \"pattern\" attribute, or it's \"type\" attribute
    pattern = pattern || $el.attr('data-pattern') || $el.attr('pattern') || $el.attr('type');
    var inputText = $el.val();
    var valid = true;

    if (inputText.length) {
      // If the pattern attribute on the element is in Abide's list of patterns, then test that regexp
      if (this.options.patterns.hasOwnProperty(pattern)) {
        valid = this.options.patterns[pattern].test(inputText);
      } // If the pattern name isn't also the type attribute of the field, then test it as a regexp
      else if (pattern !== $el.attr('type')) {
        valid = new RegExp(pattern).test(inputText);
      }
    }

    return valid;
  }
  /**
   * Determines whether or a not a radio input is valid based on whether or not it is required and selected.
   * Although the function targets a single `<input>`, it validates by checking the `required` and `checked`
   * properties of all radio buttons in its group.
   * @param {String} groupName - A string that specifies the name of a radio button group
   * @returns {Boolean} Boolean value depends on whether or not at least one radio input has been selected (if
   * it's required)
   */

}, {
  key: \"validateRadio\",
  value: function validateRadio(groupName) {
    // If at least one radio in the group has the `required` attribute, the group is considered required
    // Per W3C spec, all radio buttons in a group should have `required`, but we're being nice
    var $group = this.$element.find(\":radio[name=\\\"\".concat(groupName, \"\\\"]\"));
    var valid = false,
      required = false;
    // For the group to be required, at least one radio needs to be required

    $group.each(function (i, e) {
      if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(e).attr('required')) {
        required = true;
      }
    });
    if (!required) valid = true;

    if (!valid) {
      // For the group to be valid, at least one radio needs to be checked
      $group.each(function (i, e) {
        if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(e).prop('checked')) {
          valid = true;
        }
      });
    }

    return valid;
  }
  /**
   * Determines whether or a not a checkbox input is valid based on whether or not it is required and checked.
   * Although the function targets a single `<input>`, it validates by checking the `required` and `checked`
   * properties of all checkboxes in its group.
   * @param {String} groupName - A string that specifies the name of a checkbox group
   * * @returns {Boolean} Boolean value depends on whether or not at least one checkbox input has been checked (if
   * it's required)
   */

}, {
  key: \"validateCheckbox\",
  value: function validateCheckbox(groupName) {
    var _this9 = this;

    // If at least one checkbox in the group has the `required` attribute, the group is considered required
    // Per W3C spec, all checkboxes in a group should have `required`, but we're being nice
    var $group = this.$element.find(\":checkbox[name=\\\"\".concat(groupName, \"\\\"]\"));
    var valid = false,
      required = false,
      minRequired = 1,
      checked = 0;
    // For the group to be required, at least one checkbox needs to be required

    $group.each(function (i, e) {
      if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(e).attr('required')) {
        required = true;
      }
    });
    if (!required) valid = true;

    if (!valid) {
      // Count checked checkboxes within the group
      // Use data-min-required if available (default: 1)
      $group.each(function (i, e) {
        if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(e).prop('checked')) {
          checked++;
        }

        if (typeof jquery__WEBPACK_IMPORTED_MODULE_0___default()(e).attr('data-min-required') !== 'undefined') {
          minRequired = parseInt(jquery__WEBPACK_IMPORTED_MODULE_0___default()(e).attr('data-min-required'));
        }
      });
      // For the group to be valid, the minRequired amount of checkboxes have to be checked

      if (checked >= minRequired) {
        valid = true;
      }
    }
    // Skip validation if more than 1 checkbox have to be checked AND if the form hasn't got submitted yet (otherwise it will already show an error during the first fill in)

    if (this.initialized !== true && minRequired > 1) {
      return true;
    }
    // Refresh error class for all input


    $group.each(function (i, e) {
      if (!valid) {
        _this9.addErrorClasses(jquery__WEBPACK_IMPORTED_MODULE_0___default()(e), ['required']);
      } else {
        _this9.removeErrorClasses(jquery__WEBPACK_IMPORTED_MODULE_0___default()(e));
      }
    });
    return valid;
  }
  /**
   * Determines if a selected input passes a custom validation function. Multiple validations can be used, if
   * passed to the element with `data-validator=\"foo bar baz\"` in a space separated listed.
   * @param {Object} $el - jQuery input element.
   * @param {String} validators - a string of function names matching functions in the Abide.options.validators
   * object.
   * @param {Boolean} required - self explanatory?
   * @returns {Boolean} - true if validations passed.
   */

}, {
  key: \"matchValidation\",
  value: function matchValidation($el, validators, required) {
    var _this10 = this;

    required = required ? true : false;
    var clear = validators.split(' ').map(function (v) {
      return _this10.options.validators[v]($el, required, $el.parent());
    });
    return clear.indexOf(false) === -1;
  }
  /**
   * Resets form inputs and styles
   * @fires Abide#formreset
   */

}, {
  key: \"resetForm\",
  value: function resetForm() {
    var $form = this.$element,
      opts = this.options;
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(\".\".concat(opts.labelErrorClass), $form).not('small').removeClass(opts.labelErrorClass);
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(\".\".concat(opts.inputErrorClass), $form).not('small').removeClass(opts.inputErrorClass);
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(\"\".concat(opts.formErrorSelector, \".\").concat(opts.formErrorClass)).removeClass(opts.formErrorClass);
    $form.find('[data-abide-error]').css('display', 'none');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(':input', $form).not(':button, :submit, :reset, :hidden, :radio, :checkbox, [data-abide-ignore]').val('').attr({
      'data-invalid': null,
      'aria-invalid': null
    });
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(':input:radio', $form).not('[data-abide-ignore]').prop('checked', false).attr({
      'data-invalid': null,
      'aria-invalid': null
    });
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(':input:checkbox', $form).not('[data-abide-ignore]').prop('checked', false).attr({
      'data-invalid': null,
      'aria-invalid': null
    });
    /**
     * Fires when the form has been reset.
     * @event Abide#formreset
     */

    $form.trigger('formreset.zf.abide', [$form]);
  }
  /**
   * Destroys an instance of Abide.
   * Removes error styles and classes from elements, without resetting their values.
   */

}, {
  key: \"_destroy\",
  value: function _destroy() {
    var _this = this;

    this.$element.off('.abide').find('[data-abide-error]').css('display', 'none');
    this.$inputs.off('.abide').each(function () {
      _this.removeErrorClasses(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this));
    });
    this.$submits.off('.abide');
  }
}]);

return Abide;
}(_foundation_core_plugin__WEBPACK_IMPORTED_MODULE_1__[\"Plugin\"]);\n/**\n * Default settings for plugin
  * /


Abide.defaults = {
  /**
   * The default event to validate inputs.Checkboxes and radios validate immediately.
   * Remove or change this value for manual validation.
   * @option\n * @type {?string }
   * @default 'fieldChange'
   */
  validateOn: 'fieldChange',

  /**
   * Class to be applied to input labels on failed validation.
   * @option
   * @type { string }
   * @default 'is-invalid-label'
   */
  labelErrorClass: 'is-invalid-label',

  /**
   * Class to be applied to inputs on failed validation.
   * @option\n * @type { string }
   * @default 'is-invalid-input'
   */
  inputErrorClass: 'is-invalid-input',

  /**
   * Class selector to use to target Form Errors for show / hide.
   * @option
   * @type { string }
   * @default '.form-error'
   */
  formErrorSelector: '.form-error',

  /**
   * Class added to Form Errors on failed validation.
   * @option\n * @type { string }
   * @default 'is-visible'
   */
  formErrorClass: 'is-visible',

  /**
   * If true, automatically insert when possible:
   * - `[aria-describedby]` on fields
   * - `[role=alert]` on form errors and`[for]` on form error labels
   * - `[aria-live]` on global errors`[data-abide-error]`(see option`a11yErrorLevel`).
   * @option\n * @type { boolean }
   * @default true
   */
  a11yAttributes: true,

  /**
   * [aria - live] attribute value to be applied on global errors`[data-abide-error]`.
   * Options are: 'assertive', 'polite' and 'off' / null
   * @option
   * @see https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Live_Regions
   * @type {string}
   * @default 'assertive'
   */
  a11yErrorLevel: 'assertive',

  /**
   * Set to true to validate text inputs on any value change.
   * @option
   * @type {boolean}
   * @default false
   */
  liveValidate: false,

  /**
   * Set to true to validate inputs on blur.
   * @option
   * @type {boolean}
   * @default false
   */
  validateOnBlur: false,
  patterns: {
    alpha: /^[a-zA-Z]+$/,
    alpha_numeric: /^[a-zA-Z0-9]+$/,
    integer: /^[-+]?\\d+$/,
    number: /^[-+]?\\d*(?:[\\.\\,]\\d+)?$/,
    // amex, visa, diners
    card: /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|(?:222[1-9]|2[3-6][0-9]{2}|27[0-1][0-9]|2720)[0-9]{12}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\\d{3})\\d{11})$/,
    cvv: /^([0-9]){3,4}$/,
    // http://www.whatwg.org/specs/web-apps/current-work/multipage/states-of-the-type-attribute.html#valid-e-mail-address
    email: /^[a-zA-Z0-9.!#$%&'*+\\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/,
    // From CommonRegexJS (@talyssonoc)
    // https://github.com/talyssonoc/CommonRegexJS/blob/e2901b9f57222bc14069dc8f0598d5f412555411/lib/commonregex.js#L76
    // For more restrictive URL Regexs, see https://mathiasbynens.be/demo/url-regex.
    url: /^((?:(https?|ftps?|file|ssh|sftp):\\/\\/| www\\d{ 0, 3 } [.] | [a - z0 - 9.\\-] + [.][a - z]{ 2, 4 } \\/)(?:[^\\s()<>]+|\\((?:[^\\s()<>]+|(?:\\([^\\s()<>]+\\)))*\\))+(?:\\((?:[^\\s()<>]+|(?:\\([^\\s()<>]+\\)))*\\)|[^\\s`!()\\[\\]{};:\\'\".,<>?\\xab\\xbb\\u201c\\u201d\\u2018\\u2019]))$/,
      // abc.de
      domain: /^([a-zA-Z0-9]([a-zA-Z0-9\\-]{0,61}[a-zA-Z0-9])?\\.)+[a-zA-Z]{2,8}$/,
        datetime: /^([0-2][0-9]{3})\\-([0-1][0-9])\\-([0-3][0-9])T([0-5][0-9])\\:([0-5][0-9])\\:([0-5][0-9])(Z|([\\-\\+]([0-1][0-9])\\:00))$/,
          // YYYY-MM-DD
          date: /(?:19|20)[0-9]{2}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-9])|(?:(?!02)(?:0[1-9]|1[0-2])-(?:30))|(?:(?:0[13578]|1[02])-31))$/,
            // HH:MM:SS
            time: /^(0[0-9]|1[0-9]|2[0-3])(:[0-5][0-9]){2}$/,
              dateISO: /^\\d{4}[\\/\\-]\\d{1,2}[\\/\\-]\\d{1,2}$/,
                // MM/DD/YYYY
                month_day_year: /^(0[1-9]|1[012])[- \\/.](0[1-9]|[12][0-9]|3[01])[- \\/.]\\d{4}$/,
                  // DD/MM/YYYY
                  day_month_year: /^(0[1-9]|[12][0-9]|3[01])[- \\/.](0[1-9]|1[012])[- \\/.]\\d{4}$/,
                    // #FFF or #FFFFFF
                    color: /^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/,
                      // Domain || URL
                      website: {
  test: function test(text) {
    return Abide.defaults.patterns['domain'].test(text) || Abide.defaults.patterns['url'].test(text);
  }
}
      },

/**
 * Optional validation functions to be used. `equalTo` being the only default included function.
 * Functions should return only a boolean if the input is valid or not. Functions are given the following
 * arguments:
 * el : The jQuery element to validate.
 * required : Boolean value of the required attribute be present or not.
 * parent : The direct parent of the input.
 * @option
 */
validators: {
  equalTo: function equalTo(el, required, parent) {
    return jquery__WEBPACK_IMPORTED_MODULE_0___default()(\"#\".concat(el.attr('data-equalto'))).val() === el.val();
       }
}
   };


   //# sourceURL=webpack:///./js/foundation.abide.js?");
}),

"./js/foundation.accordion.js":
/*!************************************!*\
  !*** ./js/foundation.accordion.js ***!
  \************************************/
/*! exports provided: Accordion */
(function (module, __webpack_exports__, __webpack_require__) {

  "use strict";
  eval("__webpack_require__.r(__webpack_exports__);
  /* harmony export (binding) */
  __webpack_require__.d(__webpack_exports__, \"Accordion\", function() { return Accordion; });
  /* harmony import */
  var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ \"jquery\");
  /* harmony import */
  var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
  /* harmony import */
  var _foundation_core_plugin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./foundation.core.plugin */ \"./js/foundation.core.plugin.js\");
  /* harmony import */
  var _foundation_core_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./foundation.core.utils */ \"./js/foundation.core.utils.js\");
  /* harmony import */
  var _foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./foundation.util.keyboard */ \"./js/foundation.util.keyboard.js\");


  function _typeof(obj) {
      if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") {
      _typeof = function _typeof(obj) {
        return typeof obj;
      };
    } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj;
    };
  } return _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError(\"Cannot call a class as a function\");
   }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true;
    if (\"value\" in descriptor)
    descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) {
  return call;
} return _assertThisInitialized(self);
 }

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");
   }
  return self;
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\");
}
subClass.prototype = Object.create(superClass && superClass.prototype, {
  constructor: {
    value: subClass, writable: true, configurable: true
  }
});
if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };
  return _setPrototypeOf(o, p);
}






/**
 * Accordion module.
 * @module foundation.accordion
 * @requires foundation.util.keyboard
 */
nvar Accordion =
  /*#__PURE__*/
  function (_Plugin) {
    _inherits(Accordion, _Plugin);

    function Accordion() {
      _classCallCheck(this, Accordion);

      return _possibleConstructorReturn(this, _getPrototypeOf(Accordion).apply(this, arguments));
    }

    _createClass(Accordion, [{
      key: \"_setup\",

    /**
     * Creates a new instance of an accordion.
     * @class
     * @name Accordion
     * @fires Accordion#init
     * @param {jQuery} element - jQuery object to make into an accordion.
     * @param {Object} options - a plain object with settings to override the default options.
     */
     value: function _setup(element, options) {
      this.$element = element;
      this.options = jquery__WEBPACK_IMPORTED_MODULE_0___default.a.extend({}, Accordion.defaults, this.$element.data(), options);
      this.className = 'Accordion';
      // ie9 back compat

      this._init();

      _foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_3__[\"Keyboard\"].register('Accordion', {
      'ENTER': 'toggle',
      'SPACE': 'toggle',
      'ARROW_DOWN': 'next',
      'ARROW_UP': 'previous'
    });
  }
/**
 * Initializes the accordion by animating the preset active pane(s).
 * @private\
 */

}, {
  key: \"_init\",
  value: function _init() {
    var _this2 = this;

    this._isInitializing = true;
    this.$element.attr('role', 'tablist');
    this.$tabs = this.$element.children('[data-accordion-item]');
    this.$tabs.attr({
      'role': 'presentation'
    });
    this.$tabs.each(function (idx, el) {
      var $el = jquery__WEBPACK_IMPORTED_MODULE_0___default()(el),
        $content = $el.children('[data-tab-content]'),
        id = $content[0].id || Object(_foundation_core_utils__WEBPACK_IMPORTED_MODULE_2__[\"GetYoDigits\"])(6, 'accordion'),
      linkId = el.id ?\"\".concat(el.id, \"-label\") : \"\".concat(id, \"-label\");
      $el.find('a:first').attr({
          'aria-controls': id,
          'role': 'tab',
          'id': linkId,
          'aria-expanded': false,
          'aria-selected': false
        });
      $content.attr({
        'role': 'tabpanel',
        'aria-labelledby': linkId,
        'aria-hidden': true,
        'id': id
      });
    });
    var $initActive = this.$element.find('.is-active').children('[data-tab-content]');

    if ($initActive.length) {
      // Save up the initial hash to return to it later when going back in history
      this._initialAnchor = $initActive.prev('a').attr('href');

      this._openSingleTab($initActive);
    }

    this._checkDeepLink = function () {
      var anchor = window.location.hash;

      if (!anchor.length) {
        // If we are still initializing and there is no anchor, then there is nothing to do
        if (_this2._isInitializing) return;
        // Otherwise, move to the initial anchor

        if (_this2._initialAnchor) anchor = _this2._initialAnchor;

      }

      var $anchor = anchor && jquery__WEBPACK_IMPORTED_MODULE_0___default()(anchor);

      var $link = anchor && _this2.$element.find(\"[href$=\\\"\".concat(anchor, \"\\\"]\"));
      // Whether the anchor element that has been found is part of this element


      var isOwnAnchor = !!($anchor.length && $link.length);

      if (isOwnAnchor) {
        // If there is an anchor for the hash, open it (if not already active)
        if ($anchor && $link && $link.length) {
          if (!$link.parent('[data-accordion-item]').hasClass('is-active')) {
            _this2._openSingleTab($anchor);
          }
        } // Otherwise, close everything
        else {
          _this2._closeAllTabs();
        }
        // Roll up a little to show the titles


        if (_this2.options.deepLinkSmudge) {
          Object(_foundation_core_utils__WEBPACK_IMPORTED_MODULE_2__[\"onLoad\"])(jquery__WEBPACK_IMPORTED_MODULE_0___default()(window), function () {
            var offset = _this2.$element.offset();

          jquery__WEBPACK_IMPORTED_MODULE_0___default()('html, body').animate({
            scrollTop: offset.top - _this2.options.deepLinkSmudgeOffset
          }, _this2.options.deepLinkSmudgeDelay);
        });
      }
      /**
       * Fires when the plugin has deeplinked at pageload
       * @event Accordion#deeplink
       */


      _this2.$element.trigger('deeplink.zf.accordion', [$link, $anchor]);
    }
  };
  //use browser to open a tab, if it exists in this tabset


  if (this.options.deepLink) {
    this._checkDeepLink();
  }

  this._events();

  this._isInitializing = false;
}
/**
 * Adds event handlers for items within the accordion.
 * @private
 */

}, {
  key: \"_events\",
  value: function _events() {
    var _this = this;
    this.$tabs.each(function () {
      var $elem = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this);
      var $tabContent = $elem.children('[data-tab-content]');

      if ($tabContent.length) {
        $elem.children('a').off('click.zf.accordion keydown.zf.accordion').on('click.zf.accordion', function (e) {
          e.preventDefault();

          _this.toggle($tabContent);
        }).on('keydown.zf.accordion', function (e) {
          _foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_3__[\"Keyboard\"].handleKey(e, 'Accordion', {
          toggle: function toggle() {
            _this.toggle($tabContent);
          },
          next: function next() {
            var $a = $elem.next().find('a').focus();

            if (!_this.options.multiExpand) {
              $a.trigger('click.zf.accordion');
            }
          },
          previous: function previous() {
            var $a = $elem.prev().find('a').focus();

            if (!_this.options.multiExpand) {
              $a.trigger('click.zf.accordion');
            }
          },
          handled: function handled() {
            e.preventDefault();
          }
        });
      });
  }
});

if (this.options.deepLink) {
  jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).on('hashchange', this._checkDeepLink);
}
}
/**
 * Toggles the selected content pane's open/close state.
 * @param {jQuery} $target - jQuery object of the pane to toggle (`.accordion-content`).
 * @function
 */

}, {
  key: \"toggle\",
  value: function toggle($target) {
    if ($target.closest('[data-accordion]').is('[disabled]')) {
      console.info('Cannot toggle an accordion that is disabled.');
      return;
    }

    if ($target.parent().hasClass('is-active')) {
      this.up($target);
    } else {
      this.down($target);
    }
    //either replace or update browser history


    if (this.options.deepLink) {
      var anchor = $target.prev('a').attr('href');

      if (this.options.updateHistory) {
        history.pushState({}, '', anchor);
      } else {
        history.replaceState({}, '', anchor);
      }
    }
  }
  /**
   * Opens the accordion tab defined by `$target`.
   * @param {jQuery} $target - Accordion pane to open (`.accordion-content`).
   * @fires Accordion#down
   * @function
   */

}, {
  key: \"down\",
  value: function down($target) {
    if ($target.closest('[data-accordion]').is('[disabled]')) {
      console.info('Cannot call down on an accordion that is disabled.');
      return;
    }

    if (this.options.multiExpand) this._openTab($target);
    else this._openSingleTab($target);
  }
  /**
   * Closes the tab defined by `$target`.
   * It may be ignored if the Accordion options don't allow it.
   *
   * @param {jQuery} $target - Accordion tab to close (`.accordion-content`).
   * @fires Accordion#up
   * @function
   */

}, {
  key: \"up\",
  value: function up($target) {
    if (this.$element.is('[disabled]')) {
      console.info('Cannot call up on an accordion that is disabled.');
      return;
    }
    // Don't close the item if it is already closed


    var $targetItem = $target.parent();
    if (!$targetItem.hasClass('is-active')) return;
    // Don't close the item if there is no other active item (unless with `allowAllClosed`)

    var $othersItems = $targetItem.siblings();
    if (!this.options.allowAllClosed && !$othersItems.hasClass('is-active')) return;

    this._closeTab($target);
  }
  /**
   * Make the tab defined by `$target` the only opened tab, closing all others tabs.
   * @param {jQuery} $target - Accordion tab to open (`.accordion-content`).
   * @function
   * @private
   */

}, {
  key: \"_openSingleTab\",
  value: function _openSingleTab($target) {
    // Close all the others active tabs.
    var $activeContents = this.$element.children('.is-active').children('[data-tab-content]');

    if ($activeContents.length) {
      this._closeTab($activeContents.not($target));
    }
    // Then open the target.


    this._openTab($target);
  }
  /**
   * Opens the tab defined by `$target`.
   * @param {jQuery} $target - Accordion tab to open (`.accordion-content`).
   * @fires Accordion#down
   * @function
   * @private
   */

}, {
  key: \"_openTab\",
  value: function _openTab($target) {
    var _this3 = this;

    var $targetItem = $target.parent();
    var targetContentId = $target.attr('aria-labelledby');
    $target.attr('aria-hidden', false);
    $targetItem.addClass('is-active');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(\"#\".concat(targetContentId)).attr({
      'aria-expanded': true,
      'aria-selected': true
    });
  $target.finish().slideDown(this.options.slideSpeed, function () {
    /**
     * Fires when the tab is done opening.
     * @event Accordion#down
     */
    _this3.$element.trigger('down.zf.accordion', [$target]);
  });
}
/**
 * Closes the tab defined by `$target`.
 * @param {jQuery} $target - Accordion tab to close (`.accordion-content`).
 * @fires Accordion#up
 * @function
 * @private
 */

}, {
  key: \"_closeTab\",
  value: function _closeTab($target) {
    var _this4 = this;

    var $targetItem = $target.parent();
    var targetContentId = $target.attr('aria-labelledby');
    $target.attr('aria-hidden', true);
    $targetItem.removeClass('is-active');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(\"#\".concat(targetContentId)).attr({
      'aria-expanded': false,
      'aria-selected': false
    });
  $target.finish().slideUp(this.options.slideSpeed, function () {
    /**
     * Fires when the tab is done collapsing up.
     * @event Accordion#up
     */
    _this4.$element.trigger('up.zf.accordion', [$target]);
  });
}
/**
 * Closes all active tabs
 * @fires Accordion#up
 * @function
 * @private
 */

}, {
  key: \"_closeAllTabs\",
  value: function _closeAllTabs() {
    var $activeTabs = this.$element.children('.is-active').children('[data-tab-content]');

    if ($activeTabs.length) {
      this._closeTab($activeTabs);
    }
  }
  /**
   * Destroys an instance of an accordion.
   * @fires Accordion#destroyed
   * @function
   */

}, {
  key: \"_destroy\",
  value: function _destroy() {
    this.$element.find('[data-tab-content]').stop(true).slideUp(0).css('display', '');
    this.$element.find('a').off('.zf.accordion');

    if (this.options.deepLink) {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).off('hashchange', this._checkDeepLink);
    }
  }
}]);

return Accordion;
}(_foundation_core_plugin__WEBPACK_IMPORTED_MODULE_1__[\"Plugin\"]);

Accordion.defaults = {
  /**
   * Amount of time to animate the opening of an accordion pane.
   * @option
   * * @type {number}
   * @default 250
   */
  slideSpeed: 250,

  /**
   * Allow the accordion to have multiple open panes.
   * @option
   * @type {boolean}
   * @default false
   */
  multiExpand: false,

  /**
   * Allow the accordion to close all panes.
   * @option
   * @type {boolean}
   * @default false
   */
  allowAllClosed: false,

  /**
   * Link the location hash to the open pane.
   * Set the location hash when the opened pane changes, and open and scroll to the corresponding pane when the
   * location changes.
   * @option
   * @type {boolean}
   * @default false
   */
  deepLink: false,

  /**
   * If `deepLink` is enabled, adjust the deep link scroll to make sure the top of the accordion panel is
   * visible
   * @option
   * @type {boolean}
   * @default false
   */
  deepLinkSmudge: false,

  /**
   * If `deepLinkSmudge` is enabled, animation time (ms) for the deep link adjustment
   * @option
   * @type {number}
   * @default 300
   */
  deepLinkSmudgeDelay: 300,

  /**
   * If `deepLinkSmudge` is enabled, the offset for scrollToTtop to prevent overlap by a sticky element at
   * the top of the page
   * @option
   * @type {number}
   * @default 0
   */
  deepLinkSmudgeOffset: 0,

  /**
   * If `deepLink` is enabled, update the browser history with the open accordion
   * @option
   * @type {boolean}
   * @default false
   */
  updateHistory: false
};


//# sourceURL=webpack:///./js/foundation.accordion.js?");

  /***/
}),

/***/ "./js/foundation.accordionMenu.js":
/*!****************************************!*\
  !*** ./js/foundation.accordionMenu.js ***!
  \****************************************/
/*! exports provided: AccordionMenu */
/***/ (function (module, __webpack_exports__, __webpack_require__) {

  "use strict";
  eval("__webpack_require__.r(__webpack_exports__);
  /* harmony export (binding) */
  __webpack_require__.d(__webpack_exports__, \"AccordionMenu\", function() {
    return AccordionMenu;
});
/* harmony import */
var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ \"jquery\");
/* harmony import */
var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */
var _foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./foundation.util.keyboard */ \"./js/foundation.util.keyboard.js\");
/* harmony import */
var _foundation_util_nest__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./foundation.util.nest */ \"./js/foundation.util.nest.js\");
/* harmony import */
var _foundation_core_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./foundation.core.utils */ \"./js/foundation.core.utils.js\");
/* harmony import */
var _foundation_core_plugin__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./foundation.core.plugin */ \"./js/foundation.core.plugin.js\");


function _typeof(obj) {
    if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
  _typeof = function _typeof(obj) {
    return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj;
  };
} return _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError(\"Cannot call a class as a function\");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true;
    if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) {
  return call;
} return _assertThisInitialized(self);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");
  } return self;
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== \"function\" && superClass !== null) {
  throw new TypeError(\"Super expression must either be null or a function\");
}
subClass.prototype = Object.create(superClass && superClass.prototype, {
  constructor: {
    value: subClass, writable: true, configurable: true
  }
});
if (superClass) _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };
  return _setPrototypeOf(o, p);
}






/**
 * AccordionMenu module.
 * @module foundation.accordionMenu
 * @requires foundation.util.keyboard
 * @requires foundation.util.nest
 */

var AccordionMenu =
/*#__PURE__*/\nfunction(_Plugin) {
  _inherits(AccordionMenu, _Plugin);

  function AccordionMenu() {
    _classCallCheck(this, AccordionMenu);

    return _possibleConstructorReturn(this, _getPrototypeOf(AccordionMenu).apply(this, arguments));
  }

  _createClass(AccordionMenu, [{
    key: \"_setup\",

    /**
     * Creates a new instance of an accordion menu.
     * @class
     * @name AccordionMenu
     * @fires AccordionMenu#init
     * @param {jQuery} element - jQuery object to make into an accordion menu.
     * @param {Object} options - Overrides to the default plugin settings.
     */
     value: function _setup(element, options) {
    this.$element = element;
    this.options = jquery__WEBPACK_IMPORTED_MODULE_0___default.a.extend({}, AccordionMenu.defaults, this.$element.data(), options);
    this.className = 'AccordionMenu';
    // ie9 back compat

    this._init();

    _foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_1__[\"Keyboard\"].register('AccordionMenu', {
      'ENTER': 'toggle',
    'SPACE': 'toggle',
    'ARROW_RIGHT': 'open',
    'ARROW_UP': 'up',
    'ARROW_DOWN': 'down',
    'ARROW_LEFT': 'close',
    'ESCAPE': 'closeAll'
  });
}
/**
 * Initializes the accordion menu by hiding all nested menus.
 * @private
 */

}, {
  key: \"_init\",
  value: function _init() {
    _foundation_util_nest__WEBPACK_IMPORTED_MODULE_2__[\"Nest\"].Feather(this.$element, 'accordion');

    var _this = this;

    this.$element.find('[data-submenu]').not('.is-active').slideUp(0);
    //.find('a').css('padding-left', '1rem');

    this.$element.attr({
      'role': 'tree',
      'aria-multiselectable': this.options.multiOpen
    });
    this.$menuLinks = this.$element.find('.is-accordion-submenu-parent');
    this.$menuLinks.each(function () {
      var linkId = this.id || Object(_foundation_core_utils__WEBPACK_IMPORTED_MODULE_3__[\"GetYoDigits\"])(6, 'acc-menu-link'),
      $elem = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this),
        $sub = $elem.children('[data-submenu]'),
        subId = $sub[0].id || Object(_foundation_core_utils__WEBPACK_IMPORTED_MODULE_3__[\"GetYoDigits\"])(6, 'acc-menu'),
      isActive = $sub.hasClass('is-active');

      if (_this.options.parentLink) {
        var $anchor = $elem.children('a');
        $anchor.clone().prependTo($sub).wrap('<li data-is-parent-link class=\"is-submenu-parent-item is-submenu-item is-accordion-submenu-item\"></li>');
      }

      if (_this.options.submenuToggle) {
        $elem.addClass('has-submenu-toggle');
        $elem.children('a').after('<button id=\"' + linkId + '\" class=\"submenu-toggle\" aria-controls=\"' + subId + '\" aria-expanded=\"' + isActive + '\" title=\"' + _this.options.submenuToggleText + '\"><span class=\"submenu-toggle-text\">' + _this.options.submenuToggleText + '</span></button>');
      } else {
        $elem.attr({
          'aria-controls': subId,
          'aria-expanded': isActive,
          'id': linkId
        });
      }

      $sub.attr({
        'aria-labelledby': linkId,
        'aria-hidden': !isActive,
        'role': 'group',
        'id': subId
      });
    });
    this.$element.find('li').attr({
      'role': 'treeitem'
    });
    var initPanes = this.$element.find('.is-active');

    if (initPanes.length) {
      initPanes.each(function () {
        _this.down(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this));
      });
    }

    this._events();
  }
  /**
   * Adds event handlers for items within the menu.
   * @private
   */

}, {
  key: \"_events\",
  value: function _events() {
    var _this = this;

    this.$element.find('li').each(function () {
      var $submenu = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).children('[data-submenu]');
      if ($submenu.length) {
        if (_this.options.submenuToggle) {
          jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).children('.submenu-toggle').off('click.zf.accordionMenu').on('click.zf.accordionMenu', function (e) {
            _this.toggle($submenu);
          });
        } else {
          jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).children('a').off('click.zf.accordionMenu').on('click.zf.accordionMenu', function (e) {
            e.preventDefault();

            _this.toggle($submenu);
          });
        }
      }
    }).on('keydown.zf.accordionMenu', function (e) {
      var $element = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this),
        $elements = $element.parent('ul').children('li'),
        $prevElement,
        $nextElement,
        $target = $element.children('[data-submenu]');
      $elements.each(function (i) {
        if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).is($element)) {
          $prevElement = $elements.eq(Math.max(0, i - 1)).find('a').first();
          $nextElement = $elements.eq(Math.min(i + 1, $elements.length - 1)).find('a').first();

          if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).children('[data-submenu]:visible').length) {
            // has open sub menu
            $nextElement = $element.find('li:first-child').find('a').first();
          }

          if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).is(':first-child')) {
            // is first element of sub menu
            $prevElement = $element.parents('li').first().find('a').first();
          } else if ($prevElement.parents('li').first().children('[data-submenu]:visible').length) {
            // if previous element has open sub menu
            $prevElement = $prevElement.parents('li').find('li:last-child').find('a').first();
          }

          if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).is(':last-child')) {
            // is last element of sub menu
            $nextElement = $element.parents('li').first().next('li').find('a').first();
          }

          return;
        }
      });
      _foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_1__[\"Keyboard\"].handleKey(e, 'AccordionMenu', {
      open: function open() {
        if ($target.is(':hidden')) {
          _this.down($target);

          $target.find('li').first().find('a').first().focus();
        }
      },
      close: function close() {
        if ($target.length && !$target.is(':hidden')) {
          // close active sub of this item
          _this.up($target);
        } else if ($element.parent('[data-submenu]').length) {
          // close currently open sub
          _this.up($element.parent('[data-submenu]'));

          $element.parents('li').first().find('a').first().focus();
        }
      },
      up: function up() {
        $prevElement.focus();
        return true;
      },
      down: function down() {
        $nextElement.focus();
        return true;
      },
      toggle: function toggle() {
        if (_this.options.submenuToggle) {
          return false;
        }

        if ($element.children('[data-submenu]').length) {
          _this.toggle($element.children('[data-submenu]'));

          return true;
        }
      },
      closeAll: function closeAll() {
        _this.hideAll();
      },
      handled: function handled(preventDefault) {
        if (preventDefault) {
          e.preventDefault();
        }
      }
    });
  });
  //.attr('tabindex', 0);
}
/**
 * Closes all panes of the menu.
 * @function
 */

}, {
  key: \"hideAll\",
  value: function hideAll() {
    this.up(this.$element.find('[data-submenu]'));
  }
  /**
   * Opens all panes of the menu.
   * @function
   */

}, {
  key: \"showAll\",
  value: function showAll() {
    this.down(this.$element.find('[data-submenu]'));
  }
  /**
   * Toggles the open/close state of a submenu.
   * @function
   * @param {jQuery} $target - the submenu to toggle
   */

}, {
  key: \"toggle\",
  value: function toggle($target) {
    if (!$target.is(':animated')) {
      if (!$target.is(':hidden')) {
        this.up($target);
      } else {
        this.down($target);
      }
    }
  }
  /**
   * Opens the sub-menu defined by `$target`.
   * @param {jQuery} $target - Sub-menu to open.
   * @fires AccordionMenu#down
   * */

}, {
  key: \"down\",
  value: function down($target) {
    var _this2 = this;

    // If having multiple submenus active is disabled, close all the submenus
    // that are not parents or children of the targeted submenu.
    if (!this.options.multiOpen) {
      // The \"branch\" of the targetted submenu, from the component root to
      // the active submenus nested in it.
      var $targetBranch = $target.parentsUntil(this.$element).add($target).add($target.find('.is-active'));
      // All the active submenus that are not in the branch.

      var $othersActiveSubmenus = this.$element.find('.is-active').not($targetBranch);
      this.up($othersActiveSubmenus);
    }

    $target.addClass('is-active').attr({
      'aria-hidden': false
    });

    if (this.options.submenuToggle) {
      $target.prev('.submenu-toggle').attr({
        'aria-expanded': true
      });
    } else {
      $target.parent('.is-accordion-submenu-parent').attr({
        'aria-expanded': true
      });
    }

    $target.slideDown(this.options.slideSpeed, function () {
      /**
       * Fires when the menu is done opening.
       * @event AccordionMenu#down
       */
      _this2.$element.trigger('down.zf.accordionMenu', [$target]);
    });
  }
  /**
   * Closes the sub-menu defined by `$target`. All sub-menus inside the target will be closed as well.
   * @param {jQuery} $target - Sub-menu to close.
   * @fires AccordionMenu#up
   */

}, {
  key: \"up\",
  value: function up($target) {
    var _this3 = this;

    var $submenus = $target.find('[data-submenu]');
    var $allmenus = $target.add($submenus);
    $submenus.slideUp(0);
    $allmenus.removeClass('is-active').attr('aria-hidden', true);

    if (this.options.submenuToggle) {
      $allmenus.prev('.submenu-toggle').attr('aria-expanded', false);
    } else {
      $allmenus.parent('.is-accordion-submenu-parent').attr('aria-expanded', false);
    }

    $target.slideUp(this.options.slideSpeed, function () {
      /**
       * Fires when the menu is done collapsing up.
       * @event AccordionMenu#up
       */
      _this3.$element.trigger('up.zf.accordionMenu', [$target]);
    });
  }
  /**
   * Destroys an instance of accordion menu.
   * @fires AccordionMenu#destroyed
   */

}, {
  key: \"_destroy\",
  value: function _destroy() {
    this.$element.find('[data-submenu]').slideDown(0).css('display', '');
    this.$element.find('a').off('click.zf.accordionMenu');
    this.$element.find('[data-is-parent-link]').detach();

    if (this.options.submenuToggle) {
      this.$element.find('.has-submenu-toggle').removeClass('has-submenu-toggle');
      this.$element.find('.submenu-toggle').remove();
    }

    _foundation_util_nest__WEBPACK_IMPORTED_MODULE_2__[\"Nest\"].Burn(this.$element, 'accordion');
  }
}]);

return AccordionMenu;
}(_foundation_core_plugin__WEBPACK_IMPORTED_MODULE_4__[\"Plugin\"]);

AccordionMenu.defaults = {
  /**
   * Adds the parent link to the submenu.
   * @option
   * @type {boolean}
   * @default false
   */
  parentLink: false,

  /**
   * Amount of time to animate the opening of a submenu in ms.
   * @option
   * @type {number}
   * @default 250
   */
  slideSpeed: 250,

  /**
   * Adds a separate submenu toggle button. This allows the parent item to have a link.
   * @option
   * @example true
   */
  submenuToggle: false,

  /**
   * The text used for the submenu toggle if enabled. This is used for screen readers only.
   * @option
   * @example true
   */
  submenuToggleText: 'Toggle menu',

  /**
   * Allow the menu to have multiple open panes.
   * @option
   * @type {boolean}
   * @default true
   */
  multiOpen: true
};


//# sourceURL=webpack:///./js/foundation.accordionMenu.js?");

  /***/
}),

/***/ "./js/foundation.core.js":
/*!*******************************!*\
  !*** ./js/foundation.core.js ***!
  \*******************************/
/*! exports provided: Foundation */
/***/ (function (module, __webpack_exports__, __webpack_require__) {

  "use strict";
  eval("__webpack_require__.r(__webpack_exports__);
  /* harmony export (binding) */
  __webpack_require__.d(__webpack_exports__, \"Foundation\", function() { return Foundation; });
  /* harmony import */
  var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ \"jquery\");
  /* harmony import */
  var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
  /* harmony import */
  var _foundation_core_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./foundation.core.utils */ \"./js/foundation.core.utils.js\");
  /* harmony import */ var _foundation_util_mediaQuery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./foundation.util.mediaQuery */ \"./js/foundation.util.mediaQuery.js\");


  function _typeof(obj) {
      if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") {
      _typeof = function _typeof(obj) {
        return typeof obj;
      };
    } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\n\n\n\nvar FOUNDATION_VERSION = '6.6.3'; // Global Foundation object
      // This is attached to the window, or used as a module for AMD/Browserify

      var Foundation = {
        version: FOUNDATION_VERSION,

        /**
         * Stores initialized plugins.
         */
        _plugins: {},

        /**
         * Stores generated unique ids for plugin instances
         */
        _uuids: [],

        /**
         * Defines a Foundation plugin, adding it to the `Foundation` namespace and the list of plugins to
         * initialize when reflowing.
         * @param {Object} plugin - The constructor of the plugin.
         */
        plugin: function plugin(_plugin, name) {
          // Object key to use when adding to global Foundation object
          // Examples: Foundation.Reveal, Foundation.OffCanvas
          var className = name || functionName(_plugin);
          // Object key to use when storing the plugin, also used to create the identifying data attribute for the plugin
          // Examples: data-reveal, data-off-canvas

          var attrName = hyphenate(className);
          // Add to the Foundation object and the plugins list (for reflowing)

          this._plugins[attrName] = this[className] = _plugin;
        },

        /**
         * @function
         * Populates the _uuids array with pointers to each individual plugin instance.
         * Adds the `zfPlugin` data-attribute to programmatically created plugins to allow use of $(selector).
         * foundation(method) calls.
         * Also fires the initialization event for each plugin, consolidating repetitive code.
         * @param {Object} plugin - an instance of a plugin, usually `this` in context.
         * @param {String} name - the name of the plugin, passed as a camelCased string.
         * @fires Plugin#init\n
         */
        registerPlugin: function registerPlugin(plugin, name) {
          var pluginName = name ? hyphenate(name) : functionName(plugin.constructor).toLowerCase();
          plugin.uuid = Object(_foundation_core_utils__WEBPACK_IMPORTED_MODULE_1__[\"GetYoDigits\"])(6, pluginName);

            if (!plugin.$element.attr(\"data-\".concat(pluginName))) {
              plugin.$element.attr(\"data-\".concat(pluginName), plugin.uuid);
            }

            if(!plugin.$element.data('zfPlugin')) {
      plugin.$element.data('zfPlugin', plugin);
}
/**
 * Fires when the plugin has initialized.
 * @event Plugin#init
 */


 plugin.$element.trigger(\"init.zf.\".concat(pluginName));

 this._uuids.push(plugin.uuid);

return;
},

/**
 * @function\n   * Removes the plugins uuid from the _uuids array.
 * Removes the zfPlugin data attribute, as well as the data-plugin-name attribute.
 * Also fires the destroyed event for the plugin, consolidating repetitive code.
 * @param {Object} plugin - an instance of a plugin, usually `this` in context.
 * * @fires Plugin#destroyed
 */
unregisterPlugin: function unregisterPlugin(plugin) {
  var pluginName = hyphenate(functionName(plugin.$element.data('zfPlugin').constructor));

  this._uuids.splice(this._uuids.indexOf(plugin.uuid), 1);

  plugin.$element.removeAttr(\"data-\".concat(pluginName)).removeData('zfPlugin')
    /**
     * Fires when the plugin has been destroyed.
     * @event Plugin#destroyed
     */
    .trigger(\"destroyed.zf.\".concat(pluginName));

    for (var prop in plugin) {
    plugin[prop] = null;
    //clean up script to prep for garbage collection.
  }

  return;
},

/**
 * @function
 * Causes one or more active plugins to re-initialize, resetting event listeners, recalculating positions, etc.
 * @param {String} plugins - optional string of an individual plugin key, attained by calling `$(element).data
 * ('pluginName')`, or string of a plugin class i.e. `'dropdown'`
 * @default If no argument is passed, reflow all currently active plugins.
 */
reInit: function reInit(plugins) {
  var isJQ = plugins instanceof jquery__WEBPACK_IMPORTED_MODULE_0___default.a;

  try {
    if (isJQ) {
      plugins.each(function () {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).data('zfPlugin')._init();
      });
    } else {
      var type = _typeof(plugins),
        _this = this,
        fns = {
          'object': function object(plgs) {
            plgs.forEach(function (p) {
              p = hyphenate(p);
              jquery__WEBPACK_IMPORTED_MODULE_0___default()('[data-' + p + ']').foundation('_init');
            });
          },
          'string': function string() {
            plugins = hyphenate(plugins);
            jquery__WEBPACK_IMPORTED_MODULE_0___default()('[data-' + plugins + ']').foundation('_init');
          },
          'undefined': function undefined() {
            this['object'](Object.keys(_this._plugins));
          }
        };

      fns[type](plugins);
    }
  } catch (err) {
    console.error(err);
  } finally {
    return plugins;
  }
},

/**
 * Initialize plugins on any elements within `elem` (and `elem` itself) that aren't already initialized.
 * @param {Object} elem - jQuery object containing the element to check inside. Also checks the element itself,
 * unless it's the `document` object.
 * @param {String|Array} plugins - A list of plugins to initialize. Leave this out to initialize everything.
 */
reflow: function reflow(elem, plugins) {
  // If plugins is undefined, just grab everything
  if (typeof plugins === 'undefined') {
    plugins = Object.keys(this._plugins);
  } // If plugins is a string, convert it to an array with one item
  else if (typeof plugins === 'string') {
    plugins = [plugins];
  }

  var _this = this;
  // Iterate through each plugin


  jquery__WEBPACK_IMPORTED_MODULE_0___default.a.each(plugins, function (i, name) {
    // Get the current plugin
    var plugin = _this._plugins[name];
    // Localize the search to all elements inside elem, as well as elem itself, unless elem === document
    var $elem = jquery__WEBPACK_IMPORTED_MODULE_0___default()(elem).find('[data-' + name + ']').addBack('[data-' + name + ']').filter(function () {
      return typeof jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).data(\"zfPlugin\") === 'undefined';
    });
    // For each plugin found, initialize it

    $elem.each(function () {
      var $el = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this),
        opts = {
          reflow: true
        };

      if ($el.attr('data-options')) {
        $el.attr('data-options').split(';').forEach(function (option, _index) {
          var opt = option.split(':').map(function (el) {
            return el.trim();
          });
          if (opt[0]) opts[opt[0]] = parseValue(opt[1]);
        });
      }

      try {
        $el.data('zfPlugin', new plugin(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this), opts));
      } catch (er) {
        console.error(er);
      } finally {
        return;
      }
    });
  });
},
getFnName: functionName, \n  addToJquery: function addToJquery($) {
  // TODO: consider not making this a jQuery function
  // TODO: need way to reflow vs. re-initialize\

  /**
   * The Foundation jQuery method.
   * @param {String|Array} method - An action to perform on the current jQuery object.
  */
  var foundation = function foundation(method) {
    var type = _typeof(method),
      $noJS = $('.no-js');

    if ($noJS.length) {
      $noJS.removeClass('no-js');
    }

    if (type === 'undefined') {
      //needs to initialize the Foundation object, or an individual plugin.
      _foundation_util_mediaQuery__WEBPACK_IMPORTED_MODULE_2__[\"MediaQuery\"]._init();
      Foundation.reflow(this);
    } else if (type === 'string') {
      //an individual method to invoke on a plugin or group of plugins
      var args = Array.prototype.slice.call(arguments, 1);
      //collect all the arguments, if necessary
      var plugClass = this.data('zfPlugin');
      //determine the class of plugin

      if (typeof plugClass !== 'undefined' && typeof plugClass[method] !== 'undefined') {
        //make sure both the class and method exist
        if (this.length === 1) {
          //if there's only one, call it directly.
          plugClass[method].apply(plugClass, args);
        } else {
          this.each(function (i, el) {
            //otherwise loop through the jQuery collection and invoke the method on each
            plugClass[method].apply($(el).data('zfPlugin'), args);
          });
        }
      } else {
        //error for no class or no method
        throw new ReferenceError(\"We're sorry, '\" + method + \"' is not an available method for \" + (plugClass ? functionName(plugClass) : 'this element') + '.');
      }
    } else {
      //error for invalid argument type
      throw new TypeError(\"We're sorry, \".concat(type, \" is not a valid parameter. You must use a string representing the method you wish to invoke.\"));
    }

    return this;
  };

  $.fn.foundation = foundation;
  return $;
}
};
Foundation.util = {
  /**
   * Function for applying a debounce effect to a function call.
   * @function
   * @param {Function} func - Function to be called at end of timeout.
   * @param {Number} delay - Time in ms to delay the call of `func`.
   * @returns function
  */
  throttle: function throttle(func, delay) {
    var timer = null;
    return function () {
      var context = this,
        args = arguments;

      if (timer === null) {
        timer = setTimeout(function () {
          func.apply(context, args);
          timer = null;
        }, delay);
      }
    };
  }
};
window.Foundation = Foundation;
// Polyfill for requestAnimationFrame

(function () {
  if (!Date.now || !window.Date.now) window.Date.now = Date.now = function () {
    return new Date().getTime();
  };
  var vendors = ['webkit', 'moz'];

  for (var i = 0; i < vendors.length && !window.requestAnimationFrame; ++i) {
    var vp = vendors[i];
    window.requestAnimationFrame = window[vp + 'RequestAnimationFrame'];
    window.cancelAnimationFrame = window[vp + 'CancelAnimationFrame'] || window[vp + 'CancelRequestAnimationFrame'];
  }

  if (/iP(ad|hone|od).*OS 6/.test(window.navigator.userAgent) || !window.requestAnimationFrame || !window.cancelAnimationFrame) {
    var lastTime = 0;

    window.requestAnimationFrame = function (callback) {
      var now = Date.now();
      var nextTime = Math.max(lastTime + 16, now);
      return setTimeout(function () {
        callback(lastTime = nextTime);
      }, nextTime - now);
    };

    window.cancelAnimationFrame = clearTimeout;
  }
  /**
   * Polyfill for performance.now, required by rAF
   */


  if (!window.performance || !window.performance.now) {
    window.performance = {
      start: Date.now(),
      now: function now() {
        return Date.now() - this.start;
      }
    };
  }
})();

if (!Function.prototype.bind) {
  Function.prototype.bind = function (oThis) {
    if (typeof this !== 'function') {
      // closest thing possible to the ECMAScript 5
      // internal IsCallable function
      throw new TypeError('Function.prototype.bind - what is trying to be bound is not callable');
    }

    var aArgs = Array.prototype.slice.call(arguments, 1),
      fToBind = this,
      fNOP = function fNOP() { },
      fBound = function fBound() {
        return fToBind.apply(this instanceof fNOP ? this : oThis, aArgs.concat(Array.prototype.slice.call(arguments)));
      };

    if (this.prototype) {
      // native functions don't have a prototype
      fNOP.prototype = this.prototype;
    } \n\n    fBound.prototype = new fNOP();
    return fBound;
  };
}
// Polyfill to get the name of a function in IE9


function functionName(fn) {
  if (typeof Function.prototype.name === 'undefined') {
    var funcNameRegex = /function\\s([^(]{1,})\\(/;
    var results = funcNameRegex.exec(fn.toString());
    return results && results.length > 1 ? results[1].trim() : \"\";
  } else if (typeof fn.prototype === 'undefined') {
    return fn.constructor.name;
  } else {
    eturn fn.prototype.constructor.name;
  }
}

function parseValue(str) {
  if ('true' === str) return true;
  else if ('false' === str) return false;
  else if (!isNaN(str * 1)) return parseFloat(str);
  return str;
}
// Convert PascalCase to kebab-case
// Thank you: http://stackoverflow.com/a/8955580


function hyphenate(str) {
  return str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
}



//# sourceURL=webpack:///./js/foundation.core.js?");

  /***/
}),

/***/ "./js/foundation.core.plugin.js":
/*!**************************************!*\
  !*** ./js/foundation.core.plugin.js ***!
  \**************************************/
/*! exports provided: Plugin */
/***/ (function (module, __webpack_exports__, __webpack_require__) {

  "use strict";
  eval("__webpack_require__.r(__webpack_exports__);
  /* harmony export (binding) */
  __webpack_require__.d(__webpack_exports__, \"Plugin\", function() { return Plugin; });
  /* harmony import */
  var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ \"jquery\");
  /* harmony import */
  var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
  /* harmony import */
  var _foundation_core_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./foundation.core.utils */ \"./js/foundation.core.utils.js\");


  function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError(\"Cannot call a class as a function\"); } }

        function _defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
              var descriptor = props[i];
              descriptor.enumerable = descriptor.enumerable || false;
              descriptor.configurable = true;
              if (\"value\" in descriptor) descriptor.writable = true;
              Object.defineProperty(target, descriptor.key, descriptor);
            }
          }

          function _createClass(Constructor, protoProps, staticProps) {
            if (protoProps) _defineProperties(Constructor.prototype, protoProps);
            if (staticProps) _defineProperties(Constructor, staticProps);
            return Constructor;
          }


          // Abstract class for providing lifecycle hooks. Expect plugins to define AT LEAST
          // {function} _setup (replaces previous constructor),
          // {function} _destroy (replaces previous destroy)

          var Plugin =\n/*#__PURE__*/\nfunction () {
          function Plugin(element, options) {
            _classCallCheck(this, Plugin);

            this._setup(element, options);

            var pluginName = getPluginName(this);
            this.uuid = Object(_foundation_core_utils__WEBPACK_IMPORTED_MODULE_1__[\"GetYoDigits\"])(6, pluginName);

              if (!this.$element.attr(\"data-\".concat(pluginName))) {
                this.$element.attr(\"data-\".concat(pluginName), this.uuid);
              }

          if (!this.$element.data('zfPlugin')) {
            this.$element.data('zfPlugin', this);
          }
          /**
           * Fires when the plugin has initialized.
           * @event Plugin#init
           */


          this.$element.trigger(\"init.zf.\".concat(pluginName));
          }

        _createClass(Plugin, [{
          key: \"destroy\",
          value: function destroy() {
          this._destroy();

          var pluginName = getPluginName(this);
          this.$element.removeAttr(\"data-\".concat(pluginName)).removeData('zfPlugin')
            /**
             * Fires when the plugin has been destroyed.
             * @event Plugin#destroyed
             */
            .trigger(\"destroyed.zf.\".concat(pluginName));

              for(var prop in this) {
          this[prop] = null;
          //clean up script to prep for garbage collection.
        }
      }
    }]);

  return Plugin;
}();
// Convert PascalCase to kebab-case
// Thank you: http://stackoverflow.com/a/8955580\n\n\nfunction hyphenate(str) {
return str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase(); \n}\n\nfunction getPluginName(obj) {
  return hyphenate(obj.className);
}



//# sourceURL=webpack:///./js/foundation.core.plugin.js?");

  /***/
}),

/***/ "./js/foundation.core.utils.js":
/*!*************************************!*\
  !*** ./js/foundation.core.utils.js ***!
  \*************************************/
/*! exports provided: rtl, GetYoDigits, RegExpEscape, transitionend, onLoad, ignoreMousedisappear */
/***/ (function (module, __webpack_exports__, __webpack_require__) {

  "use strict";
  eval("__webpack_require__.r(__webpack_exports__);
  /* harmony export (binding) */
  __webpack_require__.d(__webpack_exports__, \"rtl\", function() { return rtl; });
  /* harmony export (binding) */
  __webpack_require__.d(__webpack_exports__, \"GetYoDigits\", function() { return GetYoDigits; });
  /* harmony export (binding) */
  __webpack_require__.d(__webpack_exports__, \"RegExpEscape\", function() { return RegExpEscape; });
  /* harmony export (binding) */
  __webpack_require__.d(__webpack_exports__, \"transitionend\", function() { return transitionend; });
  /* harmony export (binding) */
  __webpack_require__.d(__webpack_exports__, \"onLoad\", function() { return onLoad; });
  /* harmony export (binding) */
  __webpack_require__.d(__webpack_exports__, \"ignoreMousedisappear\", function() { return ignoreMousedisappear; });
  /* harmony import */
  var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ \"jquery\");
  /* harmony import */
  var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);


  // Core Foundation Utilities, utilized in a number of places.

  /**
   * Returns a boolean for RTL support
   */

  function rtl() {
    return jquery__WEBPACK_IMPORTED_MODULE_0___default()('html').attr('dir') === 'rtl'; \
  }
  /**
   * returns a random base-36 uid with namespacing
   * @function
   * @param {Number} length - number of random base-36 digits desired. Increase for more random strings.
   * @param {String} namespace - name of plugin to be incorporated in uid, optional.
   * @default {String} '' - if no plugin name is provided, nothing is appended to the uid.
   * @returns {String} - unique id
   */


  function GetYoDigits() {
    var length = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 6;
    var namespace = arguments.length > 1 ? arguments[1] : undefined;
    var str = '';
    var chars = '0123456789abcdefghijklmnopqrstuvwxyz';
    var charsLength = chars.length;

    for (var i = 0; i < length; i++) {
      str += chars[Math.floor(Math.random() * charsLength)];
    }

    return namespace ?\"\".concat(str, \"-\").concat(namespace) : str;
  }
  /**
   * Escape a string so it can be used as a regexp pattern
   * @function
   * @see https://stackoverflow.com/a/9310752/4317384
   *
   * @param {String} str - string to escape.
   * @returns {String} - escaped string
   */


  function RegExpEscape(str) {
    return str.replace(/[-[\\]{}()*+?.,\\\\^$|#\\s]/g, '\\\\$&');
  }

  function transitionend($elem) {
    var transitions = {
      'transition': 'transitionend',
      'WebkitTransition': 'webkitTransitionEnd',
      'MozTransition': 'transitionend',
      'OTransition': 'otransitionend'
    };
    var elem = document.createElement('div'),
      end;

    for (var transition in transitions) {
      if (typeof elem.style[transition] !== 'undefined') {
        end = transitions[transition];
      }
    }

    if (end) {
      return end; \n
    } else {
      setTimeout(function () {
        elem.triggerHandler('transitionend', [$elem]);
      }, 1);
      return 'transitionend';
    }
  }
  /**
   * Return an event type to listen for window load.
   *
   * If `$elem` is passed, an event will be triggered on `$elem`. If window is already loaded, the event will
   * still be triggered.
   * If `handler` is passed, attach it to the event on `$elem`.
   * Calling `onLoad` without handler allows you to get the event type that will be triggered before attaching the
   * handler by yourself.
   * @function
   *
   * @param {Object} [] $elem - jQuery element on which the event will be triggered if passed.
   * @param {Function} [] handler - function to attach to the event.
   * @returns {String} - event type that should or will be triggered.
   */


  function onLoad($elem, handler) {
    var didLoad = document.readyState === 'complete';
    var eventType = (didLoad ? '_didLoad' : 'load') + '.zf.util.onLoad';

    var cb = function cb() {
      return $elem.triggerHandler(eventType);
    };

    if ($elem) {
      if (handler) $elem.one(eventType, handler);
      if (didLoad) setTimeout(cb);
      else jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).one('load', cb);
    }
    return eventType;
  }
  /**
   * Retuns an handler for the `mouseleave` that ignore disappeared mouses.
   *
   * If the mouse \"disappeared\" from the document (like when going on a browser UI element, See https://git.io/
   zf-11410),
   * the event is ignored.
   * - If the `ignoreLeaveWindow` is `true`, the event is ignored when the user actually left the window
   *   (like by switching to an other window with [Alt]+[Tab]).
   * - If the `ignoreReappear` is `true`, the event will be ignored when the mouse will reappear later on the document
   *   outside of the element it left.
   *
   * @function
   *
   * @param {Function} [] handler - handler for the filtered `mouseleave` event to watch.
   * @param {Object} [] options - object of options:
   * - {Boolean} [false] ignoreLeaveWindow - also ignore when the user switched windows.
   * - {Boolean} [false] ignoreReappear - also ignore when the mouse reappeared outside of the element it left.
   * @returns {Function} - filtered handler to use to listen on the `mouseleave` event.
   */


  function ignoreMousedisappear(handler) {
    var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      _ref$ignoreLeaveWindo = _ref.ignoreLeaveWindow,
      ignoreLeaveWindow = _ref$ignoreLeaveWindo === void 0 ? false : _ref$ignoreLeaveWindo,
      _ref$ignoreReappear = _ref.ignoreReappear,
      ignoreReappear = _ref$ignoreReappear === void 0 ? false : _ref$ignoreReappear;

    return function leaveEventHandler(eLeave) {
      for (var _len = arguments.length, rest = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        rest[_key - 1] = arguments[_key];
      }

      var callback = handler.bind.apply(handler, [this, eLeave].concat(rest));
      // The mouse left: call the given callback if the mouse entered elsewhere

      if (eLeave.relatedTarget !== null) {
        return callback();
      }
      // Otherwise, check if the mouse actually left the window.
      // In firefox if the user switched between windows, the window sill have the focus by the time
      // the event is triggered. We have to debounce the event to test this case.


      setTimeout(function leaveEventDebouncer() {
        if (!ignoreLeaveWindow && document.hasFocus && !document.hasFocus()) {
          return callback();
        }
        // Otherwise, wait for the mouse to reeapear outside of the element,


        if (!ignoreReappear) {
          jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).one('mouseenter', function reenterEventHandler(eReenter) {
            if (!jquery__WEBPACK_IMPORTED_MODULE_0___default()(eLeave.currentTarget).has(eReenter.target).length) {
              // Fill where the mouse finally entered.
              eLeave.relatedTarget = eReenter.target;
              callback();
            }
          });
        }
      }, 0);
    };
  }



  //# sourceURL=webpack:///./js/foundation.core.utils.js?");

  /***/
}),

/***/ "./js/foundation.drilldown.js":
/*!************************************!*\
  !*** ./js/foundation.drilldown.js ***!
  \************************************/
/*! exports provided: Drilldown */
/***/ (function (module, __webpack_exports__, __webpack_require__) {

  "use strict";
  eval("__webpack_require__.r(__webpack_exports__);
  /* harmony export (binding) */
  __webpack_require__.d(__webpack_exports__, \"Drilldown\", function() { return Drilldown; });
  /* harmony import */
  var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ \"jquery\");
  /* harmony import */
  var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
  /* harmony import */
  var _foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./foundation.util.keyboard */ \"./js/foundation.util.keyboard.js\");
  /* harmony import */
  var _foundation_util_nest__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./foundation.util.nest */ \"./js/foundation.util.nest.js\");
  /* harmony import */
  var _foundation_core_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./foundation.core.utils */ \"./js/foundation.core.utils.js\");
  /* harmony import */
  var _foundation_util_box__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./foundation.util.box */ \"./js/foundation.util.box.js\");
  /* harmony import */
  var _foundation_core_plugin__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./foundation.core.plugin */ \"./js/foundation.core.plugin.js\");


  function _typeof(obj) {
      if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") {
      _typeof = function _typeof(obj) {
        return typeof obj;
      };
    } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj;
    };
  } return _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError(\"Cannot call a class as a function\");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if (\"value\" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) {
  return call;
}
return _assertThisInitialized(self);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");
  }
  return self;
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== \"function\" && superClass !== null) {
  throw new TypeError(\"Super expression must either be null or a function\");
}
subClass.prototype = Object.create(superClass && superClass.prototype, {
  constructor: {
    value: subClass, writable: true, configurable: true
  }
});
if (superClass) _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };
  return _setPrototypeOf(o, p);
}







/**
 * Drilldown module.
 * @module foundation.drilldown
 * @requires foundation.util.keyboard
 * @requires foundation.util.nest
 * @requires foundation.util.box
 */

var Drilldown =\n/*#__PURE__*/\nfunction(_Plugin) {
  _inherits(Drilldown, _Plugin);

  function Drilldown() {
    _classCallCheck(this, Drilldown);

    return _possibleConstructorReturn(this, _getPrototypeOf(Drilldown).apply(this, arguments));
  }

  _createClass(Drilldown, [{
    key: \"_setup\",

    /**
     * Creates a new instance of a drilldown menu.
     * @class
     * @name Drilldown
     * @param {jQuery} element - jQuery object to make into an accordion menu.
     * @param {Object} options - Overrides to the default plugin settings.
     */
    value: function _setup(element, options) {
    this.$element = element;
    this.options = jquery__WEBPACK_IMPORTED_MODULE_0___default.a.extend({}, Drilldown.defaults, this.$element.data(), options);
    this.className = 'Drilldown';
    // ie9 back compat

    this._init();

    _foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_1__[\"Keyboard\"].register('Drilldown', {
        'ENTER': 'open',
    'SPACE': 'open',
    'ARROW_RIGHT': 'next',
    'ARROW_UP': 'up',
    'ARROW_DOWN': 'down',
    'ARROW_LEFT': 'previous',
    'ESCAPE': 'close',
    'TAB': 'down',
    'SHIFT_TAB': 'up'
  });
}
/**
 * Initializes the drilldown by creating jQuery collections of elements
 * @private
 */

}, {
  key: \"_init\",
  value: function _init() {
    _foundation_util_nest__WEBPACK_IMPORTED_MODULE_2__[\"Nest\"].Feather(this.$element, 'drilldown');

    if (this.options.autoApplyClass) {
      this.$element.addClass('drilldown');
    }

    this.$element.attr({
      'role': 'tree',
      'aria-multiselectable': false
    });
    this.$submenuAnchors = this.$element.find('li.is-drilldown-submenu-parent').children('a');
    this.$submenus = this.$submenuAnchors.parent('li').children('[data-submenu]').attr('role', 'group');
    this.$menuItems = this.$element.find('li').not('.js-drilldown-back').attr('role', 'treeitem').find('a');
    // Set the main menu as current by default (unless a submenu is selected)
    // Used to set the wrapper height when the drilldown is closed/reopened from any (sub)menu

    this.$currentMenu = this.$element;
    this.$element.attr('data-mutate', this.$element.attr('data-drilldown') || Object(_foundation_core_utils__WEBPACK_IMPORTED_MODULE_3__[\"GetYoDigits\"])(6, 'drilldown'));

    this._prepareMenu();

    this._registerEvents();

    this._keyboardEvents();
  }
  /**
   * prepares drilldown menu by setting attributes to links and elements
   * sets a min height to prevent content jumping
   * wraps the element if not already wrapped
   * @private
   * @function
   */

}, {
  key: \"_prepareMenu\",
  value: function _prepareMenu() {
    var _this = this;
    // if(!this.options.holdOpen){
    //   this._menuLinkEvents();
    // }


    this.$submenuAnchors.each(function () {
      var $link = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this);
      var $sub = $link.parent();

      if (_this.options.parentLink) {
        $link.clone().prependTo($sub.children('[data-submenu]')).wrap('<li data-is-parent-link class=\"is-submenu-parent-item is-submenu-item is-drilldown-submenu-item\" role=\"none\"></li>');
      }
      $link.data('savedHref', $link.attr('href')).removeAttr('href').attr('tabindex', 0);
      $link.children('[data-submenu]').attr({
        'aria-hidden': true,
        'tabindex': 0,
        'role': 'group'
      });
      _this._events($link);
    });
    this.$submenus.each(function () {
      var $menu = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this),
        $back = $menu.find('.js-drilldown-back');

      if (!$back.length) {
        switch (_this.options.backButtonPosition) {
          case \"bottom\":
            $menu.append(_this.options.backButton);
            break;
          case \"top\":
            $menu.prepend(_this.options.backButton);
            break;
          default:
            console.error(\"Unsupported backButtonPosition value '\" + _this.options.backButtonPosition + \"'\");
          }
      }

      _this._back($menu); \n
    });
    this.$submenus.addClass('invisible');
    if (!this.options.autoHeight) {
      this.$submenus.addClass('drilldown-submenu-cover-previous');
    }
    // create a wrapper on element if it doesn't exist.


    if (!this.$element.parent().hasClass('is-drilldown')) {
      this.$wrapper = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this.options.wrapper).addClass('is-drilldown');
      if (this.options.animateHeight) this.$wrapper.addClass('animate-height');
      this.$element.wrap(this.$wrapper);
    }
    // set wrapper


    this.$wrapper = this.$element.parent();
    this.$wrapper.css(this._getMaxDims());
  }
}, {
  key: \"_resize\",
  value: function _resize() {
    this.$wrapper.css({
      'max-width': 'none',
      'min-height': 'none'
    });
    // _getMaxDims has side effects (boo) but calling it should update all other necessary heights & widths

    this.$wrapper.css(this._getMaxDims());
  }
  /**
   * Adds event handlers to elements in the menu.
   * @function
   * @private
   * @param {jQuery} $elem - the current menu item to add handlers to.
   */

}, {
  key: \"_events\",
  value: function _events($elem) {
    var _this = this;
    $elem.off('click.zf.drilldown').on('click.zf.drilldown', function (e) {
      if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target).parentsUntil('ul', 'li').hasClass('is-drilldown-submenu-parent')) {
        e.preventDefault();
      }
      // if(e.target !== e.currentTarget.firstElementChild){
      //   return false;
      // }


      _this._show($elem.parent('li'));

      if (_this.options.closeOnClick) {
        var $body = jquery__WEBPACK_IMPORTED_MODULE_0___default()('body');
        $body.off('.zf.drilldown').on('click.zf.drilldown', function (e) {
          if (e.target === _this.$element[0] || jquery__WEBPACK_IMPORTED_MODULE_0___default.a.contains(_this.$element[0], e.target)) {
            return;
          }

          e.preventDefault();

          _this._hideAll();

          $body.off('.zf.drilldown');
        });
      }
    });
  }
  /**
   * Adds event handlers to the menu element.
   * @function
   * @private
   */

}, {
  key: \"_registerEvents\",
  value: function _registerEvents() {
    if (this.options.scrollTop) {
      this._bindHandler = this._scrollTop.bind(this);
      this.$element.on('open.zf.drilldown hide.zf.drilldown close.zf.drilldown closed.zf.drilldown', this._bindHandler);
    }

    this.$element.on('mutateme.zf.trigger', this._resize.bind(this));
  }
  /**
   * Scroll to Top of Element or data-scroll-top-element
   * @function
   * @fires Drilldown#scrollme
   */

}, {
  key: \"_scrollTop\",
  value: function _scrollTop() {
    var _this = this;

    var $scrollTopElement = _this.options.scrollTopElement != '' ? jquery__WEBPACK_IMPORTED_MODULE_0___default()(_this.options.scrollTopElement) : _this.$element,
      scrollPos = parseInt($scrollTopElement.offset().top + _this.options.scrollTopOffset, 10);
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('html, body').stop(true).animate({
      scrollTop: scrollPos
    }, _this.options.animationDuration, _this.options.animationEasing, function () {
      /**
       * Fires after the menu has scrolled
       * @event Drilldown#scrollme
       */
      if (this === jquery__WEBPACK_IMPORTED_MODULE_0___default()('html')[0]) _this.$element.trigger('scrollme.zf.drilldown');
    });
  }
  /**
   * Adds keydown event listener to `li`'s in the menu.
   * @private
   */

}, {
  key: \"_keyboardEvents\",
  value: function _keyboardEvents() {
    var _this = this;

    this.$menuItems.add(this.$element.find('.js-drilldown-back > a, .is-submenu-parent-item > a')).on('keydown.zf.drilldown', function (e) {
      var $element = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this),
        $elements = $element.parent('li').parent('ul').children('li').children('a'),
        $prevElement,
        $nextElement;
      $elements.each(function (i) {
        if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).is($element)) {
          $prevElement = $elements.eq(Math.max(0, i - 1));
          $nextElement = $elements.eq(Math.min(i + 1, $elements.length - 1));
          return;
        }
      });
      _foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_1__[\"Keyboard\"].handleKey(e, 'Drilldown', {
      next: function next() {
        if ($element.is(_this.$submenuAnchors)) {
          _this._show($element.parent('li'));

          $element.parent('li').one(Object(_foundation_core_utils__WEBPACK_IMPORTED_MODULE_3__[\"transitionend\"])($element), function () {
            $element.parent('li').find('ul li a').not('.js-drilldown-back a').first().focus();
        });
    return true;
  }
},
previous: function previous() {
  _this._hide($element.parent('li').parent('ul'));

  $element.parent('li').parent('ul').one(Object(_foundation_core_utils__WEBPACK_IMPORTED_MODULE_3__[\"transitionend\"])($element), function () {
    setTimeout(function () {
    $element.parent('li').parent('ul').parent('li').children('a').first().focus();
  }, 1);
});
return true;
},
up: function up() {
  $prevElement.focus();
  // Don't tap focus on first element in root ul
  return !$element.is(_this.$element.find('> li:first-child > a'));
},
down: function down() {
  $nextElement.focus();
  // Don't tap focus on last element in root ul
  return !$element.is(_this.$element.find('> li:last-child > a'));
},
close: function close() {
  // Don't close on element in root ul
  if (!$element.is(_this.$element.find('> li > a'))) {
    _this._hide($element.parent().parent());

    $element.parent().parent().siblings('a').focus();
  }
},
open: function open() {
  if (_this.options.parentLink && $element.attr('href')) {
    // Link with href
    return false;
  } else if (!$element.is(_this.$menuItems)) {
    // not menu item means back button
    _this._hide($element.parent('li').parent('ul'));

    $element.parent('li').parent('ul').one(Object(_foundation_core_utils__WEBPACK_IMPORTED_MODULE_3__[\"transitionend\"])($element), function () {
      setTimeout(function () {
      first().focus();
    }, 1);
  });
  return true; \n
} else if ($element.is(_this.$submenuAnchors)) {
  // Sub menu item
  _this._show($element.parent('li'));

  $element.parent('li').one(Object(_foundation_core_utils__WEBPACK_IMPORTED_MODULE_3__[\"transitionend\"])($element), function () {
    $element.parent('li').find('ul li a').not('.js-drilldown-back a').first().focus();
});
return true;
}
},
handled: function handled(preventDefault) {
  if (preventDefault) {
    e.preventDefault();
  }
}
});
});
// end keyboardAccess
.}
/**
 * Closes all open elements, and returns to root menu.
 * @function
 * @fires Drilldown#close
 * @fires Drilldown#closed
 */

}, {
  key: \"_hideAll\",
  value: function _hideAll() {
    var _this2 = this;

    var $elem = this.$element.find('.is-drilldown-submenu.is-active');
    $elem.addClass('is-closing');

    if (this.options.autoHeight) {
      var calcHeight = $elem.parent().closest('ul').data('calcHeight');
      this.$wrapper.css({
        height: calcHeight
      });
    }
    /**
     * Fires when the menu is closing.
     * @event Drilldown#close
     */


    this.$element.trigger('close.zf.drilldown');
    $elem.one(Object(_foundation_core_utils__WEBPACK_IMPORTED_MODULE_3__[\"transitionend\"])($elem), function () {
      $elem.removeClass('is-active is-closing');
    /**
     * Fires when the menu is fully closed.
     * @event Drilldown#closed
     */

    _this2.$element.trigger('closed.zf.drilldown');
  });
}
/**
 * Adds event listener for each `back` button, and closes open menus.
 * @function
 * @fires Drilldown#back
 * @param {jQuery} $elem - the current sub-menu to add `back` event.
 */

}, {
  key: \"_back\",
  value: function _back($elem) {
    var _this = this;

    $elem.off('click.zf.drilldown');
    $elem.children('.js-drilldown-back').on('click.zf.drilldown', function (e) {
      // console.log('mouseup on back');
      _this._hide($elem);
      // If there is a parent submenu, call show


      var parentSubMenu = $elem.parent('li').parent('ul').parent('li');

      if (parentSubMenu.length) {
        _this._show(parentSubMenu);
      }
    });
  }
  /**
   * Adds event listener to menu items w/o submenus to close open menus on click.
   * @function
   * @private
   */

}, {
  key: \"_menuLinkEvents\",
  value: function _menuLinkEvents() {
    var _this = this;
    this.$menuItems.not('.is-drilldown-submenu-parent').off('click.zf.drilldown').on('click.zf.drilldown', function (e) {
      setTimeout(function () {
        _this._hideAll();
      }, 0);
    });
  }
  /**
   * Sets the CSS classes for submenu to show it.
   * @function
   * @private
   * @param {jQuery} $elem - the target submenu (`ul` tag)
   * @param {boolean} trigger - trigger drilldown event
   */

}, {
  key: \"_setShowSubMenuClasses\",
  value: function _setShowSubMenuClasses($elem, trigger) {
    $elem.addClass('is-active').removeClass('invisible').attr('aria-hidden', false);
    $elem.parent('li').attr('aria-expanded', true);
    if (trigger === true) {
      this.$element.trigger('open.zf.drilldown', [$elem]);
    }
  }
  /**
   * Sets the CSS classes for submenu to hide it.
   * @function
   * @private
   * @param {jQuery} $elem - the target submenu (`ul` tag)
   * @param {boolean} trigger - trigger drilldown event
   */

}, {
  key: \"_setHideSubMenuClasses\",
  value: function _setHideSubMenuClasses($elem, trigger) {
    $elem.removeClass('is-active').addClass('invisible').attr('aria-hidden', true);
    $elem.parent('li').attr('aria-expanded', false);
    if (trigger === true) {
      $elem.trigger('hide.zf.drilldown', [$elem]);
    }
  }
  /**
   * Opens a specific drilldown (sub)menu no matter which (sub)menu in it is currently visible.
   * Compared to _show() this lets you jump into any submenu without clicking through every submenu on the way to
   * it.
   * @function
   * @fires Drilldown#open
   * @param {jQuery} $elem - the target (sub)menu (`ul` tag)
   * @param {boolean} autoFocus - if true the first link in the target (sub)menu gets auto focused
   */
}, {
  key: \"_showMenu\",
  value: function _showMenu($elem, autoFocus) {
    var _this = this;
    // Reset drilldown


    var $expandedSubmenus = this.$element.find('li[aria-expanded=\"true\"] > ul[data-submenu]');
    $expandedSubmenus.each(function (index) {
      _this._setHideSubMenuClasses(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this));
    });
    // Save the menu as the currently displayed one.
    this.$currentMenu = $elem;
    // If target menu is root, focus first link & exit

    if ($elem.is('[data-drilldown]')) {
      if (autoFocus === true) $elem.find('li[role=\"treeitem\"] > a').first().focus();
      if (this.options.autoHeight) this.$wrapper.css('height', $elem.data('calcHeight'));
      return;
    }
    // Find all submenus on way to root incl. the element itself


    var $submenus = $elem.children().first().parentsUntil('[data-drilldown]', '[data-submenu]');
    // Open target menu and all submenus on its way to root

    $submenus.each(function (index) {
      // Update height of first child (target menu) if autoHeight option true
      if (index === 0 && _this.options.autoHeight) {
        _this.$wrapper.css('height', jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).data('calcHeight'));
      }
      var isLastChild = index == $submenus.length - 1;
      // Add transitionsend listener to last child (root due to reverse order) to open target menu's first link
      // Last child makes sure the event gets always triggered even if going through several menus

      if (isLastChild === true) {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).one(Object(_foundation_core_utils__WEBPACK_IMPORTED_MODULE_3__[\"transitionend\"])(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this)), function () {
          if (autoFocus === true) {
          $elem.find('li[role=\"treeitem\"] > a').first().focus();
        }
      });
  }

  _this._setShowSubMenuClasses(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this), isLastChild);
});
}
/**
 * Opens a submenu.
 * @function
 * @fires Drilldown#open
 * @param {jQuery} $elem - the current element with a submenu to open, i.e. the `li` tag.
 */

}, {
  key: \"_show\",
  value: function _show($elem) {
    var $submenu = $elem.children('[data-submenu]');
    $elem.attr('aria-expanded', true);
    this.$currentMenu = $submenu;
    $submenu.addClass('is-active').removeClass('invisible').attr('aria-hidden', false);

    if (this.options.autoHeight) {
      this.$wrapper.css({
        height: $submenu.data('calcHeight')
      });
    }
    /**
     * Fires when the submenu has opened.
     * @event Drilldown#open
     */


    this.$element.trigger('open.zf.drilldown', [$elem]);
  }
  /**
   * Hides a submenu
   * @function
   * @fires Drilldown#hide
   * @param {jQuery} $elem - the current sub-menu to hide, i.e. the `ul` tag.
   */

}, {
  key: \"_hide\",
  value: function _hide($elem) {
    if (this.options.autoHeight) this.$wrapper.css({
      height: $elem.parent().closest('ul').data('calcHeight')
    });

    var _this = this;

    $elem.parent('li').attr('aria-expanded', false);
    $elem.attr('aria-hidden', true);
    $elem.addClass('is-closing').one(Object(_foundation_core_utils__WEBPACK_IMPORTED_MODULE_3__[\"transitionend\"])($elem), function () {
      $elem.removeClass('is-active is-closing');
    $elem.blur().addClass('invisible');
  });
  /**
   * Fires when the submenu has closed.
   * @event Drilldown#hide
   */

  $elem.trigger('hide.zf.drilldown', [$elem]);
}
/**
 * Iterates through the nested menus to calculate the min-height, and max-width for the menu.
 * Prevents content jumping.
 * @function
 * @private
 */

}, {
  key: \"_getMaxDims\",
  value: function _getMaxDims() {
    var maxHeight = 0,
      result = {},
      _this = this;
    // Recalculate menu heights and total max height


    this.$submenus.add(this.$element).each(function () {
      var numOfElems = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).children('li').length;
      var height = _foundation_util_box__WEBPACK_IMPORTED_MODULE_4__[\"Box\"].GetDimensions(this).height;
      maxHeight = height > maxHeight ? height : maxHeight;

      if (_this.options.autoHeight) {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).data('calcHeight', height);
      }
    });
    if (this.options.autoHeight) result['height'] = this.$currentMenu.data('calcHeight');
    else result['min-height'] = \"\".concat(maxHeight, \"px\");
    result['max-width'] = \"\".concat(this.$element[0].getBoundingClientRect().width, \"px\");
    return result;
  }
  /**
   * Destroys the Drilldown Menu
   * @function
   */

}, {
  key: \"_destroy\",
  value: function _destroy() {
    if (this.options.scrollTop) this.$element.off('.zf.drilldown', this._bindHandler);

    this._hideAll();

    this.$element.off('mutateme.zf.trigger');
    _foundation_util_nest__WEBPACK_IMPORTED_MODULE_2__[\"Nest\"].Burn(this.$element, 'drilldown');
    this.$element.unwrap().find('.js-drilldown-back, .is-submenu-parent-item').remove().end().find('.is-active, .is-closing, .is-drilldown-submenu').removeClass('is-active is-closing is-drilldown-submenu').end().find('[data-submenu]').removeAttr('aria-hidden tabindex role');
    this.$submenuAnchors.each(function () {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).off('.zf.drilldown');
    });
    this.$element.find('[data-is-parent-link]').detach();
    this.$submenus.removeClass('drilldown-submenu-cover-previous invisible');
    this.$element.find('a').each(function () {
      var $link = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this);
      $link.removeAttr('tabindex');

      if ($link.data('savedHref')) {
        $link.attr('href', $link.data('savedHref')).removeData('savedHref');
      } else {
        return;
      }
    });
  }
}]);

return Drilldown;
}(_foundation_core_plugin__WEBPACK_IMPORTED_MODULE_5__[\"Plugin\"]);

Drilldown.defaults = {
  /**
   * Drilldowns depend on styles in order to function properly; in the default build of Foundation these are
   * on the `drilldown` class. This option auto-applies this class to the drilldown upon initialization.
   * @option
   * @type {boolean}
   * @default true
  */
  autoApplyClass: true,

  /**
   * Markup used for JS generated back button. Prepended  or appended (see backButtonPosition) to submenu lists
   * and deleted on `destroy` method, 'js-drilldown-back' class required. Remove the backslash (`\\`) if copy and
   * pasting.
   * @option
   * @type {string}
   * @default '<li class=\"js-drilldown-back\"><a tabindex=\"0\">Back</a></li>'
   */
  backButton: '<li class=\"js-drilldown-back\"><a tabindex=\"0\">Back</a></li>',
  /**
   * Position the back button either at the top or bottom of drilldown submenus. Can be `'left'` or `'bottom'`.
   * @option
   * @type {string}
   * @default top
   */
  backButtonPosition: 'top',

  /**\
   * Markup used to wrap drilldown menu. Use a class name for independent styling; the JS applied class: `is-drilldown` is required. Remove the backslash (`\\`) if copy and pasting.
   * @option
   * @type {string}
   * @default '<div></div>'
   */
  wrapper: '<div></div>',

  /**
   * Adds the parent link to the submenu.
   * @option
   * @type {boolean}
   * @default false
   */
  parentLink: false,

  /**
   * Allow the menu to return to root list on body click.
   * @option
   * @type {boolean}
   * @default false
   */
  closeOnClick: false,

  /**
   * Allow the menu to auto adjust height.
   * @option
   * @type {boolean}
   * @default false
   */
  autoHeight: false,

  /**
   * Animate the auto adjust height.
   * @option
   * @type {boolean}
   * @default false\
   */\
  animateHeight: false,

  /**
   * Scroll to the top of the menu after opening a submenu or navigating back using the menu back button
   * @option
   * @type {boolean}
   * @default false
   */
  scrollTop: false,

  /**
   * String jquery selector (for example 'body') of element to take offset().top from, if empty string the
   * drilldown menu offset().top is taken
   * @option
   * @type {string}
   * @default ''
   */
  scrollTopElement: '',

  /**
   * ScrollTop offset
   * @option
   * @type {number}
   * @default 0
   */
  scrollTopOffset: 0,

  /**
   * Scroll animation duration
   * @option
   * @type {number}
   * @default 500
   */
  animationDuration: 500,

  /**
   * Scroll animation easing. Can be `'swing'` or `'linear'`.
   * @option
   * @type {string}
   * @see {@link https://api.jquery.com/animate|JQuery animate}
   * @default 'swing'
   */
  animationEasing: 'swing' // holdOpen: false\n\n};\n\n\n//# sourceURL=webpack:///./js/foundation.drilldown.js?");

  /***/
}),

/***/ "./js/foundation.dropdown.js":
/*!***********************************!*\
  !*** ./js/foundation.dropdown.js ***!
  \***********************************/
/*! exports provided: Dropdown */
/***/ (function (module, __webpack_exports__, __webpack_require__) {

  "use strict";
  eval("__webpack_require__.r(__webpack_exports__);
  /* harmony export (binding) */
  __webpack_require__.d(__webpack_exports__, \"Dropdown\", function() { return Dropdown; });
  /* harmony import */
  var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ \"jquery\");
  /* harmony import */
  var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
  /* harmony import */
  var _foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./foundation.util.keyboard */ \"./js/foundation.util.keyboard.js\");
  /* harmony import */
  var _foundation_core_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./foundation.core.utils */ \"./js/foundation.core.utils.js\");
  /* harmony import */
  var _foundation_positionable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./foundation.positionable */ \"./js/foundation.positionable.js\");
  /* harmony import */
  var _foundation_util_triggers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./foundation.util.triggers */ \"./js/foundation.util.triggers.js\");
  /* harmony import */ var _foundation_util_touch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./foundation.util.touch */ \"./js/foundation.util.touch.js\");


  function _typeof(obj) {
      if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") {
      _typeof = function _typeof(obj) {
        return typeof obj;
      };
    } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj);
    }

    function _classCallCheck(instance, Constructor) {
    if(!(instance instanceof Constructor)) {
      throw new TypeError(\"Cannot call a class as a function\");
}
    }

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true;
    if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) {
  return call;
}
return _assertThisInitialized(self);
    }

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");
      }
  return self;
}

function _get(target, property, receiver) {
  if (typeof Reflect !== \"undefined\" && Reflect.get) {
  _get = Reflect.get;
} else {
  _get = function _get(target, property, receiver) {
    var base = _superPropBase(target, property);
    if (!base) return;
    var desc = Object.getOwnPropertyDescriptor(base, property);
    if (desc.get) {
      return desc.get.call(receiver);
    }
    return desc.value;
  };
}
return _get(target, property, receiver || target);
    }

function _superPropBase(object, property) {
  while (!Object.prototype.hasOwnProperty.call(object, property)) {
    object = _getPrototypeOf(object);
    if (object === null) break;
  }
  return object;
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== \"function\" && superClass !== null) {
  throw new TypeError(\"Super expression must either be null or a function\");
      }
subClass.prototype = Object.create(superClass && superClass.prototype, {
  constructor: {
    value: subClass, writable: true, configurable: true
  }
});
if (superClass) _setPrototypeOf(subClass, superClass);
    }

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p; return o;
  };
  return _setPrototypeOf(o, p);
}







/**
 * Dropdown module.
 * @module foundation.dropdown
 * @requires foundation.util.keyboard
 * @requires foundation.util.box
 * @requires foundation.util.touch
 * @requires foundation.util.triggers
 */

var Dropdown =
       /*#__PURE__*/\nfunction(_Positionable) {
  _inherits(Dropdown, _Positionable);

  function Dropdown() {
    _classCallCheck(this, Dropdown);

    return _possibleConstructorReturn(this, _getPrototypeOf(Dropdown).apply(this, arguments));
  }

  _createClass(Dropdown, [{
    key: \"_setup\",

            /**
             * Creates a new instance of a dropdown.
             * @class
             * @name Dropdown
             * @param {jQuery} element - jQuery object to make into a dropdown.
             *        Object should be of the dropdown panel, rather than its anchor.
             * @param {Object} options - Overrides to the default plugin settings.
             */
            value: function _setup(element, options) {
    this.$element = element;
    this.options = jquery__WEBPACK_IMPORTED_MODULE_0___default.a.extend({}, Dropdown.defaults, this.$element.data(), options);
    this.className = 'Dropdown';
    // ie9 back compat
    // Touch and Triggers init are idempotent, just need to make sure they are initialized

    _foundation_util_touch__WEBPACK_IMPORTED_MODULE_5__[\"Touch\"].init(jquery__WEBPACK_IMPORTED_MODULE_0___default.a);
              _foundation_util_triggers__WEBPACK_IMPORTED_MODULE_4__[\"Triggers\"].init(jquery__WEBPACK_IMPORTED_MODULE_0___default.a);

              this._init();

    _foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_1__[\"Keyboard\"].register('Dropdown', {
                'ENTER': 'toggle',
    'SPACE': 'toggle',
    'ESCAPE': 'close'
  });
}
            /**
             * Initializes the plugin by setting/checking options and attributes, adding helper variables, and saving the anchor.
             * @function
             * @private
             */

            }, {
  key: \"_init\",
  value: function _init() {
    var $id = this.$element.attr('id');
    this.$anchors = jquery__WEBPACK_IMPORTED_MODULE_0___default()(\"[data-toggle=\\\"\".concat($id, \"\\\"]\")).length ? jquery__WEBPACK_IMPORTED_MODULE_0___default()(\"[data-toggle=\\\"\".concat($id, \"\\\"]\")) : jquery__WEBPACK_IMPORTED_MODULE_0___default()(\"[data-open=\\\"\".concat($id, \"\\\"]\"));
                this.$anchors.attr({
      'aria-controls': $id,
      'data-is-focus': false,
      'data-yeti-box': $id,
      'aria-haspopup': true,
      'aria-expanded': false
    });
    this._setCurrentAnchor(this.$anchors.first());
    if (this.options.parentClass) {
      this.$parent = this.$element.parents('.' + this.options.parentClass);
    } else {
      this.$parent = null;
    }
    // Set [aria-labelledby] on the Dropdown if it is not set


    if (typeof this.$element.attr('aria-labelledby') === 'undefined') {
      // Get the anchor ID or create one
      if (typeof this.$currentAnchor.attr('id') === 'undefined') {
        this.$currentAnchor.attr('id', Object(_foundation_core_utils__WEBPACK_IMPORTED_MODULE_2__[\"GetYoDigits\"])(6, 'dd-anchor'));
                    }
      this.$element.attr('aria-labelledby', this.$currentAnchor.attr('id'));
    }

    this.$element.attr({
      'aria-hidden': 'true',
      'data-yeti-box': $id,
      'data-resize': $id
    });
    _get(_getPrototypeOf(Dropdown.prototype), \"_init\", this).call(this);

                   this._events();
  }
}, {
  key: \"_getDefaultPosition\",
  value: function _getDefaultPosition() {
    // handle legacy classnames
    var position = this.$element[0].className.match(/(top|left|right|bottom)/g);

    if (position) {
      return position[0];
    } else {
      return 'bottom';
    }
  }
}, {
  key: \"_getDefaultAlignment\",
  value: function _getDefaultAlignment() {
    // handle legacy float approach
    var horizontalPosition = /float-(\\S+)/.exec(this.$currentAnchor.attr('class'));

    if (horizontalPosition) {
      return horizontalPosition[1];
    }

    return _get(_getPrototypeOf(Dropdown.prototype), \"_getDefaultAlignment\", this).call(this);
                  }
  /**
   * Sets the position and orientation of the dropdown pane, checks for collisions if
   * allow-overlap is not true.
   * Recursively calls itself if a collision is detected, with a new position class.
   * @function
   * @private
   */

}, {
  key: \"_setPosition\",
  value: function _setPosition() {
    this.$element.removeClass(\"has-position-\".concat(this.position, \" has-alignment-\").concat(this.alignment));

                      _get(_getPrototypeOf(Dropdown.prototype), \"_setPosition\", this).call(this, this.$currentAnchor, this.$element, this.$parent);

                      this.$element.addClass(\"has-position-\".concat(this.position, \" has-alignment-\").concat(this.alignment));
                    }
  /**
   * Make it a current anchor.
   * Current anchor as the reference for the position of Dropdown panes.
   * @param {HTML} el - DOM element of the anchor.
   * @function
   * @private
   */

}, {
  key: \"_setCurrentAnchor\",
  value: function _setCurrentAnchor(el) {
    this.$currentAnchor = jquery__WEBPACK_IMPORTED_MODULE_0___default()(el);
  }
  /**
   * Adds event listeners to the element utilizing the triggers utility library.
   * @function
   * @private
   */

}, {
  key: \"_events\",
  value: function _events() {
    var _this = this,
      hasTouch = 'ontouchstart' in window || typeof window.ontouchstart !== 'undefined';

    this.$element.on({
      'open.zf.trigger': this.open.bind(this),
      'close.zf.trigger': this.close.bind(this),
      'toggle.zf.trigger': this.toggle.bind(this),
      'resizeme.zf.trigger': this._setPosition.bind(this)
    });
    this.$anchors.off('click.zf.trigger').on('click.zf.trigger', function (e) {
      _this._setCurrentAnchor(this);

      if ( // if forceFollow false, always prevent default action
        _this.options.forceFollow === false || // if forceFollow true and hover option true, only prevent default action on 1st click
        // on 2nd click (dropown opened) the default action (e.g. follow a href) gets executed
        hasTouch && _this.options.hover && _this.$element.hasClass('is-open') === false) {
        e.preventDefault();
      } \n
    });

    if (this.options.hover) {
      this.$anchors.off('mouseenter.zf.dropdown mouseleave.zf.dropdown').on('mouseenter.zf.dropdown', function () {
        _this._setCurrentAnchor(this);

        var bodyData = jquery__WEBPACK_IMPORTED_MODULE_0___default()('body').data();

        if (typeof bodyData.whatinput === 'undefined' || bodyData.whatinput === 'mouse') {
          clearTimeout(_this.timeout);
          _this.timeout = setTimeout(function () {
            _this.open();

            _this.$anchors.data('hover', true);
          }, _this.options.hoverDelay);
        }
      }).on('mouseleave.zf.dropdown', Object(_foundation_core_utils__WEBPACK_IMPORTED_MODULE_2__[\"ignoreMousedisappear\"])(function () {
                                clearTimeout(_this.timeout);
      _this.timeout = setTimeout(function () {
        _this.close();

        _this.$anchors.data('hover', false);
      }, _this.options.hoverDelay);
    }));

    if (this.options.hoverPane) {
      this.$element.off('mouseenter.zf.dropdown mouseleave.zf.dropdown').on('mouseenter.zf.dropdown', function () {
        clearTimeout(_this.timeout);
      }).on('mouseleave.zf.dropdown', Object(_foundation_core_utils__WEBPACK_IMPORTED_MODULE_2__[\"ignoreMousedisappear\"])(function () {
                                  clearTimeout(_this.timeout);
      _this.timeout = setTimeout(function () {
        _this.close();

        _this.$anchors.data('hover', false);
      }, _this.options.hoverDelay);
    }));
  }
}

this.$anchors.add(this.$element).on('keydown.zf.dropdown', function (e) {
  var $target = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this),
    visibleFocusableElements = _foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_1__[\"Keyboard\"].findFocusable(_this.$element);
  _foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_1__[\"Keyboard\"].handleKey(e, 'Dropdown', {
  open: function open() {
    if ($target.is(_this.$anchors) && !$target.is('input, textarea')) {
      _this.open();

      _this.$element.attr('tabindex', -1).focus();

      e.preventDefault();
    }
  },
  close: function close() {
    _this.close();

    _this.$anchors.focus();
  }
});
                            });
                          }
                          /**
                           * Adds an event handler to the body to close any dropdowns on a click.
                           * @function
                           * @private
                           */

                          }, {
  key: \"_addBodyHandler\",
  value: function _addBodyHandler() {
    var $body = jquery__WEBPACK_IMPORTED_MODULE_0___default()(document.body).not(this.$element),
      _this = this;

    $body.off('click.zf.dropdown tap.zf.dropdown').on('click.zf.dropdown tap.zf.dropdown', function (e) {
      if (_this.$anchors.is(e.target) || _this.$anchors.find(e.target).length) {
        return;
      }

      if (_this.$element.is(e.target) || _this.$element.find(e.target).length) {
        return;
      }
      _this.close();

      $body.off('click.zf.dropdown tap.zf.dropdown');
    });
  }
  /**
   * Opens the dropdown pane, and fires a bubbling event to close other dropdowns.
   * @function
   * @fires Dropdown#closeme
   * @fires Dropdown#show
   */

}, {
  key: \"open\",
  value: function open() {
    // var _this = this;

    /**
     * Fires to close other open dropdowns, typically when dropdown is opening
     * @event Dropdown#closeme
     */
    this.$element.trigger('closeme.zf.dropdown', this.$element.attr('id'));
    this.$anchors.addClass('hover').attr({
      'aria-expanded': true
    });
    // this.$element/*.show()*/;

    this.$element.addClass('is-opening');

    this._setPosition();

    this.$element.removeClass('is-opening').addClass('is-open').attr({
      'aria-hidden': false
    });

    if (this.options.autoFocus) {
      var $focusable = _foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_1__[\"Keyboard\"].findFocusable(this.$element);

      if ($focusable.length) {
        $focusable.eq(0).focus();
      }
    }
    if (this.options.closeOnClick) {
      this._addBodyHandler();
    }

    if (this.options.trapFocus) {
      _foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_1__[\"Keyboard\"].trapFocus(this.$element);
    }
    /**
     * Fires once the dropdown is visible.
     * @event Dropdown#show
     */


    this.$element.trigger('show.zf.dropdown', [this.$element]);
  }
  /**
   * Closes the open dropdown pane.
   * @function
   * @fires Dropdown#hide
   */

}, {
  key: \"close\",
  value: function close() {
    if (!this.$element.hasClass('is-open')) {
      return false;
    }

    this.$element.removeClass('is-open').attr({
      'aria-hidden': true
    });
    this.$anchors.removeClass('hover').attr('aria-expanded', false);
    /**
     * Fires once the dropdown is no longer visible.
     * @event Dropdown#hide
     */

    this.$element.trigger('hide.zf.dropdown', [this.$element]);

    if (this.options.trapFocus) {
      _foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_1__[\"Keyboard\"].releaseFocus(this.$element);
    }
  }
  /**
   * Toggles the dropdown pane's visibility.
   * @function
   */
}, {
  key: \"toggle\",
  value: function toggle() {
    if (this.$element.hasClass('is-open')) {
      if (this.$anchors.data('hover')) return;
      this.close();
    } else {
      this.open();
    }
  }
  /**
   * Destroys the dropdown.
   * @function
   */

}, {
  key: \"_destroy\",
  value: function _destroy() {
    this.$element.off('.zf.trigger').hide();
    this.$anchors.off('.zf.dropdown');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(document.body).off('click.zf.dropdown tap.zf.dropdown');
  }
}]);

return Dropdown;
                                    }(_foundation_positionable__WEBPACK_IMPORTED_MODULE_3__[\"Positionable\"]);

Dropdown.defaults = {
  /**
   * Class that designates bounding container of Dropdown (default: window)
   * @option
   * @type {?string}
   * @default null
   */
  parentClass: null,

  /**
   * Amount of time to delay opening a submenu on hover event.
   * @option
   * @type {number}
   * @default 250
   */
  hoverDelay: 250,

  /**
   * Allow submenus to open on hover events
   * @option
   * @type {boolean}
   * @default false
   */
  hover: false,

  /**
   * Don't close dropdown when hovering over dropdown pane
   * @option
   * @type {boolean}
   * @default false
   */
  hoverPane: false,

  /**
   * Number of pixels between the dropdown pane and the triggering element on
   * open.
   * @option
   * @type {number}
   * @default 0
   */
  vOffset: 0,

  /**
   * Number of pixels between the dropdown pane and the triggering element on open.
   * @option
   * @type {number}
   * @default 0
   */
  hOffset: 0,

  /**
   * Position of dropdown. Can be left, right, bottom, top, or auto.
   * @option
   * @type {string}
   * @default 'auto'
   */
  position: 'auto',

  /**
   * Alignment of dropdown relative to anchor. Can be left, right, bottom, top, center, or auto.
   * @option
   * @type {string}
   * @default 'auto'
   */
  alignment: 'auto',

  /**
   * Allow overlap of container/window. If false, dropdown will first try to position as defined by
   * data-position and data-alignment, but reposition if it would cause an overflow.
   * @option
   * @type {boolean}
   * @default false
   */
  allowOverlap: false,

  /**
   * Allow overlap of only the bottom of the container. This is the most common
   * behavior for dropdowns, allowing the dropdown to extend the bottom of the
   * screen but not otherwise influence or break out of the container.
   * @option
   * @type {boolean}
   * @default true
   */
  allowBottomOverlap: true,

  /**
   * Allow the plugin to trap focus to the dropdown pane if opened with keyboard commands.
   * @option
   * @type {boolean}
   * @default false
   */
  trapFocus: false,

  /**
   * Allow the plugin to set focus to the first focusable element within the pane, regardless of method of
   * opening.
   * @option
   * @type {boolean}
   *  @default false
   */
  autoFocus: false,

  /**
   * Allows a click on the body to close the dropdown.
   * @option
   * @type {boolean}
   * * @default false
   */
  closeOnClick: false,

  /**
   * If true the default action of the toggle (e.g. follow a link with href) gets executed on click. If hover
   * option is also true the default action gets prevented on first click for mobile / touch devices and
   * executed on second click.
   * @option
   * @type {boolean}
   *  @default true
   */
  forceFollow: true
};


  //# sourceURL=webpack:///./js/foundation.dropdown.js?");

  /***/
}),

/***/ "./js/foundation.dropdownMenu.js":
/*!***************************************!*\
  !*** ./js/foundation.dropdownMenu.js ***!
  \***************************************/
/*! exports provided: DropdownMenu */
/***/ (function (module, __webpack_exports__, __webpack_require__) {

  "use strict";
  eval("__webpack_require__.r(__webpack_exports__);
  /* harmony export (binding) */
  __webpack_require__.d(__webpack_exports__, \"DropdownMenu\", function() {
    return DropdownMenu;
});
/* harmony import */
var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ \"jquery\");
  /* harmony import */
  var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */
var _foundation_core_plugin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./foundation.core.plugin */ \"./js/foundation.core.plugin.js\");
  /* harmony import */
  var _foundation_core_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./foundation.core.utils */ \"./js/foundation.core.utils.js\");
  /* harmony import */
  var _foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./foundation.util.keyboard */ \"./js/foundation.util.keyboard.js\");
  /* harmony import */
  var _foundation_util_nest__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./foundation.util.nest */ \"./js/foundation.util.nest.js\");
  /* harmony import */
  var _foundation_util_box__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./foundation.util.box */ \"./js/foundation.util.box.js\");
  /* harmony import */
  var _foundation_util_touch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./foundation.util.touch */ \"./js/foundation.util.touch.js\");


  function _typeof(obj) {
    if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
  _typeof = function _typeof(obj) {
    return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj;
  };
}
    return _typeof(obj);
  }

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError(\"Cannot call a class as a function\");
    }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if (\"value\" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) {
  return call;
}
return _assertThisInitialized(self);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");
  }
  return self;
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== \"function\" && superClass !== null) {
  throw new TypeError(\"Super expression must either be null or a function\");
  }
subClass.prototype = Object.create(superClass && superClass.prototype, {
  constructor: {
    value: subClass, writable: true, configurable: true
  }
});
if (superClass) _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };
  return _setPrototypeOf(o, p);
}







/**
 * DropdownMenu module.
 * @module foundation.dropdownMenu
 * @requires foundation.util.keyboard
 * @requires foundation.util.box
 * @requires foundation.util.nest
 * @requires foundation.util.touch
 */

var DropdownMenu =
 /*#__PURE__*/\nfunction(_Plugin) {
  _inherits(DropdownMenu, _Plugin);

  function DropdownMenu() {
    _classCallCheck(this, DropdownMenu);

    return _possibleConstructorReturn(this, _getPrototypeOf(DropdownMenu).apply(this, arguments));
  }

  _createClass(DropdownMenu, [{
    key: \"_setup\",

      /**
       * Creates a new instance of DropdownMenu.
       * @class
       * @name DropdownMenu
       * @fires DropdownMenu#init
       * @param {jQuery} element - jQuery object to make into a dropdown menu.
       * @param {Object} options - Overrides to the default plugin settings.
       */
      value: function _setup(element, options) {
    this.$element = element;
    this.options = jquery__WEBPACK_IMPORTED_MODULE_0___default.a.extend({}, DropdownMenu.defaults, this.$element.data(), options);
    this.className = 'DropdownMenu';
    // ie9 back compat

    _foundation_util_touch__WEBPACK_IMPORTED_MODULE_6__[\"Touch\"].init(jquery__WEBPACK_IMPORTED_MODULE_0___default.a);
        // Touch init is idempotent, we just need to make sure it's initialied.

        this._init();

    _foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_3__[\"Keyboard\"].register('DropdownMenu', {
          'ENTER': 'open',
    'SPACE': 'open',
    'ARROW_RIGHT': 'next',
    'ARROW_UP': 'up',
    'ARROW_DOWN': 'down',
    'ARROW_LEFT': 'previous',
    'ESCAPE': 'close'
  });
}
      /**
       * Initializes the plugin, and calls _prepareMenu
       * @private
       * @function
       */

      }, {
  key: \"_init\",
  value: function _init() {
    _foundation_util_nest__WEBPACK_IMPORTED_MODULE_4__[\"Nest\"].Feather(this.$element, 'dropdown');
    var subs = this.$element.find('li.is-dropdown-submenu-parent');
    this.$element.children('.is-dropdown-submenu-parent').children('.is-dropdown-submenu').addClass('first-sub');
    this.$menuItems = this.$element.find('li[role=\"none\"]');
    this.$tabs = this.$element.children('li[role=\"none\"]');
    this.$tabs.find('ul.is-dropdown-submenu').addClass(this.options.verticalClass);

    if (this.options.alignment === 'auto') {
      if (this.$element.hasClass(this.options.rightClass) || Object(_foundation_core_utils__WEBPACK_IMPORTED_MODULE_2__[\"rtl\"])() || this.$element.parents('.top-bar-right').is('*')) {
              this.options.alignment = 'right';
      subs.addClass('opens-left');
    } else {
      this.options.alignment = 'left';
      subs.addClass('opens-right');
    }
  } else {
    if (this.options.alignment === 'right') {
      subs.addClass('opens-left');
    } else {
      subs.addClass('opens-right');
    }
  }

  this.changed = false;

  this._events();
}
      }, {
  key: \"_isVertical\",
  value: function _isVertical() {
    return this.$tabs.css('display') === 'block' || this.$element.css('flex-direction') === 'column';

  }, {
    key: \"_isRtl\",
    value: function _isRtl() {
      return this.$element.hasClass('align-right') || Object(_foundation_core_utils__WEBPACK_IMPORTED_MODULE_2__[\"rtl\"])() && !this.$element.hasClass('align-left');
          }
    /**
     * Adds event listeners to elements within the menu
     * @private
     * @function
     */

  }, {
    key: \"_events\",
    value: function _events() {
      var _this = this,
        hasTouch = 'ontouchstart' in window || typeof window.ontouchstart !== 'undefined',
        parClass = 'is-dropdown-submenu-parent';
      // used for onClick and in the keyboard handlers


      var handleClickFn = function handleClickFn(e) {
        var $elem = jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target).parentsUntil('ul', \".\".concat(parClass)),
                hasSub = $elem.hasClass(parClass),
          hasClicked = $elem.attr('data-is-click') === 'true',
          $sub = $elem.children('.is-dropdown-submenu');

        if (hasSub) {
          if (hasClicked) {
            if (!_this.options.closeOnClick || !_this.options.clickOpen && !hasTouch || _this.options.forceFollow && hasTouch) {
              return;
            }

            e.stopImmediatePropagation();
            e.preventDefault();

            _this._hide($elem);
          } else {
            e.stopImmediatePropagation();
            e.preventDefault();

            _this._show($sub);

            $elem.add($elem.parentsUntil(_this.$element, \".\".concat(parClass))).attr('data-is-click', true);
                  }
        }
      };

      if (this.options.clickOpen || hasTouch) {
        this.$menuItems.on('click.zf.dropdownMenu touchstart.zf.dropdownMenu', handleClickFn);
      }
      // Handle Leaf element Clicks


      if (_this.options.closeOnClickInside) {
        this.$menuItems.on('click.zf.dropdownMenu', function (e) {
          var $elem = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this),
            hasSub = $elem.hasClass(parClass);

          if (!hasSub) {
            _this._hide();
          }
        });
      }

      if (!this.options.disableHover) {
        this.$menuItems.on('mouseenter.zf.dropdownMenu', function (e) {
          var $elem = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this),
            hasSub = $elem.hasClass(parClass);

          if (hasSub) {
            clearTimeout($elem.data('_delay'));
            $elem.data('_delay', setTimeout(function () {
              _this._show($elem.children('.is-dropdown-submenu'));
            }, _this.options.hoverDelay));
          }
        }).on('mouseleave.zf.dropdownMenu', Object(_foundation_core_utils__WEBPACK_IMPORTED_MODULE_2__[\"ignoreMousedisappear\"])(function (e) {
          var $elem = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this),
          hasSub = $elem.hasClass(parClass);

        if (hasSub && _this.options.autoclose) {
          if ($elem.attr('data-is-click') === 'true' && _this.options.clickOpen) {
            return false;
          }

          clearTimeout($elem.data('_delay'));
          $elem.data('_delay', setTimeout(function () {
            _this._hide($elem);
          }, _this.options.closingTime));
        }
      }));
    }

    this.$menuItems.on('keydown.zf.dropdownMenu', function (e) {
      var $element = jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target).parentsUntil('ul', '[role=\"none\"]'),
        isTab = _this.$tabs.index($element) > -1,
        $elements = isTab ? _this.$tabs : $element.siblings('li').add($element),
        $prevElement,
        $nextElement;
      $elements.each(function (i) {
        if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).is($element)) {
          $prevElement = $elements.eq(i - 1);
          $nextElement = $elements.eq(i + 1);
          return;
        }
      });

      var nextSibling = function nextSibling() {
        $nextElement.children('a:first').focus();
        e.preventDefault();
      },
        prevSibling = function prevSibling() {
          $prevElement.children('a:first').focus();
          e.preventDefault();
        },
        openSub = function openSub() {
          var $sub = $element.children('ul.is-dropdown-submenu');

          if ($sub.length) {
            _this._show($sub);

            $element.find('li > a:first').focus();
            e.preventDefault();
          } else {
            return;
          }
        },
        closeSub = function closeSub() {
          //if ($element.is(':first-child')) {
          var close = $element.parent('ul').parent('li');
          close.children('a:first').focus();

          _this._hide(close);

          e.preventDefault();
          //}
        };
      var functions = {
        open: openSub,
        close: function close() {
          _this._hide(_this.$element);

          _this.$menuItems.eq(0).children('a').focus();
          // focus to first element


          e.preventDefault();
        }
      };

      if (isTab) {
        if (_this._isVertical()) {
          // vertical menu
          if (_this._isRtl()) {
            // right aligned
            jquery__WEBPACK_IMPORTED_MODULE_0___default.a.extend(functions, {
              down: nextSibling,
              up: prevSibling,
              next: closeSub,
              previous: openSub
            });
          } else {
            // left aligned
            jquery__WEBPACK_IMPORTED_MODULE_0___default.a.extend(functions, {
              down: nextSibling,
              up: prevSibling,
              next: openSub,
              previous: closeSub
            });
          }
        } else {
          // horizontal menu
          if (_this._isRtl()) {
            // right aligned
            jquery__WEBPACK_IMPORTED_MODULE_0___default.a.extend(functions, {
              next: prevSibling,
              previous: nextSibling,
              down: openSub,
              up: closeSub
            });
          } else {
            // left aligned
            jquery__WEBPACK_IMPORTED_MODULE_0___default.a.extend(functions, {
              next: nextSibling,
              previous: prevSibling,
              down: openSub,
              up: closeSub
            });
          }
        }
      } else {
        // not tabs -> one sub
        if (_this._isRtl()) {
          // right aligned
          jquery__WEBPACK_IMPORTED_MODULE_0___default.a.extend(functions, {
            next: closeSub,
            previous: openSub,
            down: nextSibling,
            up: prevSibling
          });
        } else {
          // left aligned
          jquery__WEBPACK_IMPORTED_MODULE_0___default.a.extend(functions, {
            next: openSub,
            previous: closeSub,
            down: nextSibling,
            up: prevSibling
          }); \
        }
      }

      _foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_3__[\"Keyboard\"].handleKey(e, 'DropdownMenu', functions);
    });
  }
  /**
   * Adds an event handler to the body to close any dropdowns on a click.
   * @function
   * @private
   */

}, {
  key: \"_addBodyHandler\",
  value: function _addBodyHandler() {
    var _this2 = this;

    var $body = jquery__WEBPACK_IMPORTED_MODULE_0___default()(document.body);

    this._removeBodyHandler();

    $body.on('click.zf.dropdownMenu tap.zf.dropdownMenu', function (e) {
      var isItself = !!jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target).closest(_this2.$element).length;
      if (isItself) return;
      _this2._hide();

      _this2._removeBodyHandler(); \
    });
  }
  /**
   * Remove the body event handler. See `_addBodyHandler`.
   * @function\
   * @private\
   */

}, {
  key: \"_removeBodyHandler\",
  value: function _removeBodyHandler() {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(document.body).off('click.zf.dropdownMenu tap.zf.dropdownMenu');
  }
  /**
   * Opens a dropdown pane, and checks for collisions first.
   * @param {jQuery} $sub - ul element that is a submenu to show
   * @function
   * @private
   * @fires DropdownMenu#show
   */

}, {
  key: \"_show\",
  value: function _show($sub) {
    var idx = this.$tabs.index(this.$tabs.filter(function (i, el) {
      return jquery__WEBPACK_IMPORTED_MODULE_0___default()(el).find($sub).length > 0;
    }));
    var $sibs = $sub.parent('li.is-dropdown-submenu-parent').siblings('li.is-dropdown-submenu-parent');

    this._hide($sibs, idx);

    $sub.css('visibility', 'hidden').addClass('js-dropdown-active').parent('li.is-dropdown-submenu-parent').addClass('is-active');
    var clear = _foundation_util_box__WEBPACK_IMPORTED_MODULE_5__[\"Box\"].ImNotTouchingYou($sub, null, true);

    if (!clear) {
      var oldClass = this.options.alignment === 'left' ? '-right' : '-left',
        $parentLi = $sub.parent('.is-dropdown-submenu-parent');
      $parentLi.removeClass(\"opens\".concat(oldClass)).addClass(\"opens-\".concat(this.options.alignment));
              clear = _foundation_util_box__WEBPACK_IMPORTED_MODULE_5__[\"Box\"].ImNotTouchingYou($sub, null, true);

              if (!clear) {
        $parentLi.removeClass(\"opens-\".concat(this.options.alignment)).addClass('opens-inner');
              }

      this.changed = true;
    }

    $sub.css('visibility', '');

    if (this.options.closeOnClick) {
      this._addBodyHandler();
    }
    /**
     * Fires when the new dropdown pane is visible.
     * @event DropdownMenu#show
     */


    this.$element.trigger('show.zf.dropdownMenu', [$sub]);
  }
  /**
   * Hides a single, currently open dropdown pane, if passed a parameter, otherwise, hides everything.
   * @function
   * @param {jQuery} $elem - element with a submenu to hide
   * @param {Number} idx - index of the $tabs collection to hide
   * @fires DropdownMenu#hide
   * @private
   */

}, {
  key: \"_hide\",
  value: function _hide($elem, idx) {
    var $toClose;

    if ($elem && $elem.length) {
      $toClose = $elem;
    } else if (typeof idx !== 'undefined') {
      $toClose = this.$tabs.not(function (i, el) {
        return i === idx;
      });
    } else {
      $toClose = this.$element;
    }

    var somethingToClose = $toClose.hasClass('is-active') || $toClose.find('.is-active').length > 0;

    if (somethingToClose) {
      var $activeItem = $toClose.find('li.is-active');
      $activeItem.add($toClose).attr({
        'data-is-click': false
      }).removeClass('is-active');
      $toClose.find('ul.js-dropdown-active').removeClass('js-dropdown-active');

      if (this.changed || $toClose.find('opens-inner').length) {
        var oldClass = this.options.alignment === 'left' ? 'right' : 'left';
        $toClose.find('li.is-dropdown-submenu-parent').add($toClose).removeClass(\"opens-inner opens-\".concat(this.options.alignment)).addClass(\"opens-\".concat(oldClass));
        this.changed = false;
      }

      clearTimeout($activeItem.data('_delay'));

      this._removeBodyHandler();
      /**
       * Fires when the open menus are closed.
       * @event DropdownMenu#hide
       */


      this.$element.trigger('hide.zf.dropdownMenu', [$toClose]);
    }
  }
  /**
   * Destroys the plugin.
   * @function
   */

}, {
  key: \"_destroy\",
  value: function _destroy() {
    this.$menuItems.off('.zf.dropdownMenu').removeAttr('data-is-click').removeClass('is-right-arrow is-left-arrow is-down-arrow opens-right opens-left opens-inner');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(document.body).off('.zf.dropdownMenu');
    _foundation_util_nest__WEBPACK_IMPORTED_MODULE_4__[\"Nest\"].Burn(this.$element, 'dropdown');
  }
}]);

return DropdownMenu;
}(_foundation_core_plugin__WEBPACK_IMPORTED_MODULE_1__[\"Plugin\"]);
/**
 * Default settings for plugin
 */


DropdownMenu.defaults = {
  /**
   * Disallows hover events from opening submenus
   * @option
   * @type {boolean}
   * @default false
   */
  disableHover: false,

  /**
   * Allow a submenu to automatically close on a mouseleave event, if not clicked open.
   * @option
   * @type {boolean}
   * @default true
   */
  autoclose: true,

  /**
   * Amount of time to delay opening a submenu on hover event.
   * @option
   * @type {number}
   * @default 50
   */
  hoverDelay: 50,

  /**
   * Allow a submenu to open/remain open on parent click event. Allows cursor to move away from menu.
   * @option
   * @type {boolean}
   * @default false
   */
  clickOpen: false,

  /**
   * Amount of time to delay closing a submenu on a mouseleave event.
   * @option
   * @type {number}
   * @default 500
   */
  closingTime: 500,

  /**
   * Position of the menu relative to what direction the submenus should open. Handled by JS. Can be `'auto'`, `
   * 'left'` or `'right'`.
   * @option
   * @type {string}
   * @default 'auto'
   */
  alignment: 'auto',

  /**
   * Allow clicks on the body to close any open submenus.
   * @option
   * @type {boolean}
   * @default true
   */
  closeOnClick: true,

  /**
   * Allow clicks on leaf anchor links to close any open submenus.
   * @option
   * @type {boolean}
   * @default true
   */
  closeOnClickInside: true,

  /**
   * Class applied to vertical oriented menus, Foundation default is `vertical`. Update this if using your own
   * class.
   * @option
   * @type {string}
   * @default 'vertical'
   */
  verticalClass: 'vertical',

  /**
   * Class applied to right-side oriented menus, Foundation default is `align-right`. Update this if using your
   * own class.
   * @option
   * @type {string}
   * @default 'align-right'
   */
  rightClass: 'align-right',

  /**
   * Boolean to force overide the clicking of links to perform default action, on second touch event for mobile.
   * @option
   * @type {boolean}
   * @default true
   */
  forceFollow: true
};


//# sourceURL=webpack:///./js/foundation.dropdownMenu.js?");

  /***/
}),

/***/ "./js/foundation.equalizer.js":
/*!************************************!*\
  !*** ./js/foundation.equalizer.js ***!
  \************************************/
/*! exports provided: Equalizer */
/***/ (function (module, __webpack_exports__, __webpack_require__) {

  "use strict";
  eval("__webpack_require__.r(__webpack_exports__);
  /* harmony export (binding) */
  __webpack_require__.d(__webpack_exports__, \"Equalizer\", function() { return Equalizer; });
  /* harmony import */
  var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ \"jquery\");
  /* harmony import */
  var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
  /* harmony import */
  var _foundation_util_mediaQuery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./foundation.util.mediaQuery */ \"./js/foundation.util.mediaQuery.js\");
  /* harmony import */
  var _foundation_util_imageLoader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./foundation.util.imageLoader */ \"./js/foundation.util.imageLoader.js\");
  /* harmony import */
  var _foundation_core_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./foundation.core.utils */ \"./js/foundation.core.utils.js\");
  /* harmony import */
  var _foundation_core_plugin__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./foundation.core.plugin */ \"./js/foundation.core.plugin.js\");


  function _typeof(obj) {
      if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") {
      _typeof = function _typeof(obj) {
        return typeof obj;
      };
    } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj;
    };
  } return _typeof(obj);
}

  function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError(\"Cannot call a class as a function\");
    }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true;
    if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) {
  return call;
}
return _assertThisInitialized(self); }

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");
      }
  return self;
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== \"function\" && superClass !== null) {
  throw new TypeError(\"Super expression must either be null or a function\");
      }

subClass.prototype = Object.create(superClass && superClass.prototype, {
  constructor: {
    value: subClass, writable: true, configurable: true
  }
});
if (superClass) _setPrototypeOf(subClass, superClass);
    }

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };
  return _setPrototypeOf(o, p);
}






/**
 * Equalizer module.
 * @module foundation.equalizer
 * @requires foundation.util.mediaQuery
 * @requires foundation.util.imageLoader if equalizer contains images
 */

var Equalizer =
 /*#__PURE__*/\nfunction(_Plugin) {
  _inherits(Equalizer, _Plugin);

  unction Equalizer() {
    _classCallCheck(this, Equalizer);

    return _possibleConstructorReturn(this, _getPrototypeOf(Equalizer).apply(this, arguments));
  }

  _createClass(Equalizer, [{
    key: \"_setup\",
      /**
       * Creates a new instance of Equalizer.
       * @class
       * @name Equalizer
       * @fires Equalizer#init
       * @param {Object} element - jQuery object to add the trigger to.
       * @param {Object} options - Overrides to the default plugin settings.
       */
      value: function _setup(element, options) {
    this.$element = element;
    this.options = jquery__WEBPACK_IMPORTED_MODULE_0___default.a.extend({}, Equalizer.defaults, this.$element.data(), options);
    this.className = 'Equalizer';
    // ie9 back compat

    this._init();
  }
      /**
       * Initializes the Equalizer plugin and calls functions to get equalizer functioning on load.
       * @private
       */
      }, {
  key: \"_init\",
  value: function _init() {
    ar eqId = this.$element.attr('data-equalizer') || '';
    var $watched = this.$element.find(\"[data-equalizer-watch=\\\"\".concat(eqId, \"\\\"]\"));

          _foundation_util_mediaQuery__WEBPACK_IMPORTED_MODULE_1__[\"MediaQuery\"]._init();

          this.$watched = $watched.length ? $watched : this.$element.find('[data-equalizer-watch]');
    this.$element.attr('data-resize', eqId || Object(_foundation_core_utils__WEBPACK_IMPORTED_MODULE_3__[\"GetYoDigits\"])(6, 'eq'));
          this.$element.attr('data-mutate', eqId || Object(_foundation_core_utils__WEBPACK_IMPORTED_MODULE_3__[\"GetYoDigits\"])(6, 'eq'));
          this.hasNested = this.$element.find('[data-equalizer]').length > 0;
    this.isNested = this.$element.parentsUntil(document.body, '[data-equalizer]').length > 0;
    this.isOn = false;
    this._bindHandler = {
      onResizeMeBound: this._onResizeMe.bind(this),
      onPostEqualizedBound: this._onPostEqualized.bind(this)
    };
    var imgs = this.$element.find('img');
    var tooSmall;

    if (this.options.equalizeOn) {
      tooSmall = this._checkMQ();
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).on('changed.zf.mediaquery', this._checkMQ.bind(this));
    } else {
      this._events();
    }

    if (typeof tooSmall !== 'undefined' && tooSmall === false || typeof tooSmall === 'undefined') {
      if (imgs.length) {
        Object(_foundation_util_imageLoader__WEBPACK_IMPORTED_MODULE_2__[\"onImagesLoaded\"])(imgs, this._reflow.bind(this));
      } else {
        this._reflow();
      }
    }
  }
  /**
   * Removes event listeners if the breakpoint is too small.
   * @private
   */
}, {
  key: \"_pauseEvents\",
  value: function _pauseEvents() {
    this.isOn = false;
    this.$element.off({
      '.zf.equalizer': this._bindHandler.onPostEqualizedBound,
      'resizeme.zf.trigger': this._bindHandler.onResizeMeBound,
      'mutateme.zf.trigger': this._bindHandler.onResizeMeBound
    });
  }
  /**
   * function to handle $elements resizeme.zf.trigger, with bound this on _bindHandler.onResizeMeBound
   * @private
   */

}, {
  key: \"_onResizeMe\",
  value: function _onResizeMe(e) {
    this._reflow();
  }
  /**
   * function to handle $elements postequalized.zf.equalizer, with bound this on _bindHandler.onPostEqualizedBound
   * @private
   */
}, {
  key: \"_onPostEqualized\",
  value: function _onPostEqualized(e) {
    if (e.target !== this.$element[0]) {
      this._reflow();
    }
  }
  /**
   * Initializes events for Equalizer.
   * @private
   */

}, {
  key: \"_events\",
  value: function _events() {
    var _this = this;

    this._pauseEvents();

    if (this.hasNested) {
      this.$element.on('postequalized.zf.equalizer', this._bindHandler.onPostEqualizedBound);
    } else {
      this.$element.on('resizeme.zf.trigger', this._bindHandler.onResizeMeBound);
      this.$element.on('mutateme.zf.trigger', this._bindHandler.onResizeMeBound);
    }

    this.isOn = true;
  }
  /**
   * Checks the current breakpoint to the minimum required size.
   * @private
   */

}, {
  key: \"_checkMQ\",
  value: function _checkMQ() {
    var tooSmall = !_foundation_util_mediaQuery__WEBPACK_IMPORTED_MODULE_1__[\"MediaQuery\"].is(this.options.equalizeOn);

    if (tooSmall) {
      if (this.isOn) {
        this._pauseEvents();
        this.$watched.css('height', 'auto');
      }
    } else {
      if (!this.isOn) {
        this._events();
      }
    }

    return tooSmall;
  }
  /**
   * A noop version for the plugin
   * @private
   */

}, {
  key: \"_killswitch\",
  value: function _killswitch() {
    return;
  }
  /**
   * Calls necessary functions to update Equalizer upon DOM change
   * @private
   */

}, {
  key: \"_reflow\",
  value: function _reflow() {
    if (!this.options.equalizeOnStack) {
      if (this._isStacked()) {
        this.$watched.css('height', 'auto');
        return false;
      }
    }

    if (this.options.equalizeByRow) {
      this.getHeightsByRow(this.applyHeightByRow.bind(this));
    } else {
      this.getHeights(this.applyHeight.bind(this));
    }
  }
  /**
   * Manually determines if the first 2 elements are *NOT* stacked.
   * @private
   */

}, {
  key: \"_isStacked\",
  value: function _isStacked() {
    if (!this.$watched[0] || !this.$watched[1]) {
      return true;
    }

    return this.$watched[0].getBoundingClientRect().top !== this.$watched[1].getBoundingClientRect().top;
  }
  /**
    * Finds the outer heights of children contained within an Equalizer parent and returns them in an array\
    * @param {Function} cb - A non-optional callback to return the heights array to.
    * @returns {Array} heights - An array of heights of children within Equalizer container
    */

}, {
  key: \"getHeights\",
  value: function getHeights(cb) {
    var heights = [];

    for (var i = 0, len = this.$watched.length; i < len; i++) {
      this.$watched[i].style.height = 'auto';
      heights.push(this.$watched[i].offsetHeight);
    }

    cb(heights);
  }
  /**
   * Finds the outer heights of children contained within an Equalizer parent and returns them in an array
   * @param {Function} cb - A non-optional callback to return the heights array to.
   * @returns {Array} groups - An array of heights of children within Equalizer container grouped by row with
   * element,height and max as last child
   */

}, {
  key: \"getHeightsByRow\",
  value: function getHeightsByRow(cb) {
    var lastElTopOffset = this.$watched.length ? this.$watched.first().offset().top : 0, groups = [], group = 0;
    //group by Row

    groups[group] = [];

    for (var i = 0, len = this.$watched.length; i < len; i++) {
      this.$watched[i].style.height = 'auto';
      //maybe could use this.$watched[i].offsetTop


      if (elOffsetTop != lastElTopOffset) {
        group++;
        groups[group] = [];
        lastElTopOffset = elOffsetTop;
      }

      groups[group].push([this.$watched[i], this.$watched[i].offsetHeight]);
    }

    for (var j = 0, ln = groups.length; j < ln; j++) {
      var heights = jquery__WEBPACK_IMPORTED_MODULE_0___default()(groups[j]).map(function () {
        return this[1];
      }).get();
      var max = Math.max.apply(null, heights);
      groups[j].push(max);
    }

    cb(groups);
  }
  /**
   * Changes the CSS height property of each child in an Equalizer parent to match the tallest
   * @param {array} heights - An array of heights of children within Equalizer container
   * @fires Equalizer#preequalized
   * @fires Equalizer#postequalized
   */

}, {
  key: \"applyHeight\",
  value: function applyHeight(heights) {
    var max = Math.max.apply(null, heights);
    /**
     * Fires before the heights are applied
     * @event Equalizer#preequalized
     */

    this.$element.trigger('preequalized.zf.equalizer');
    this.$watched.css('height', max);
    /**
     * Fires when the heights have been applied
     * @event Equalizer#postequalized
     */

    this.$element.trigger('postequalized.zf.equalizer');
  }
  /**
   * Changes the CSS height property of each child in an Equalizer parent to match the tallest by row
   * @param {array} groups - An array of heights of children within Equalizer container grouped by row with
   * element,height and max as last child
   * @fires Equalizer#preequalized
   * @fires Equalizer#preequalizedrow
   * @fires Equalizer#postequalizedrow
   * @fires Equalizer#postequalized
   */

}, {
  key: \"applyHeightByRow\",
  value: function applyHeightByRow(groups) {
    /**
     * Fires before the heights are applied
     */
    this.$element.trigger('preequalized.zf.equalizer');

    for (var i = 0, len = groups.length; i < len; i++) {
      var groupsILength = groups[i].length,
        max = groups[i][groupsILength - 1];

      if (groupsILength <= 2) {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(groups[i][0][0]).css({
          'height': 'auto'
        });
        continue;
      }
      /**
       * Fires before the heights per row are applied
       * @event Equalizer#preequalizedrow
       */


      this.$element.trigger('preequalizedrow.zf.equalizer');

      for (var j = 0, lenJ = groupsILength - 1; j < lenJ; j++) {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(groups[i][j][0]).css({
          'height': max
        });
      }
      /**
       * Fires when the heights per row have been applied
       * @event Equalizer#postequalizedrow
       */


      this.$element.trigger('postequalizedrow.zf.equalizer');
    }
    /**
     * Fires when the heights have been applied
     * */


    this.$element.trigger('postequalized.zf.equalizer');
  }
  /**
   * Destroys an instance of Equalizer.
   * @function
   */

}, {
  key: \"_destroy\",
  value: function _destroy() {
    this._pauseEvents();

    this.$watched.css('height', 'auto');
  }
}]);

return Equalizer;
      }(_foundation_core_plugin__WEBPACK_IMPORTED_MODULE_4__[\"Plugin\"]);
/**
 * Default settings for plugin
 */


Equalizer.defaults = {
  /**
   * Enable height equalization when stacked on smaller screens.
   * @option
   * @type {boolean}
   * @default false
   */
  equalizeOnStack: false,

  /**
   * Enable height equalization row by row.
   * @option
   * @type {boolean}
   * @default false
   */
  equalizeByRow: false,

  /**
   * String representing the minimum breakpoint size the plugin should equalize heights on.
   * @option
   * @type {string}
   * @default ''
   */
  equalizeOn: ''
};
        //# sourceURL=webpack:///./js/foundation.equalizer.js?");

  /***/
}),

/***/ "./js/foundation.interchange.js":
/*!**************************************!*\
  !*** ./js/foundation.interchange.js ***!
  \**************************************/
/*! exports provided: Interchange */
/***/ (function (module, __webpack_exports__, __webpack_require__) {

  "use strict";
  eval("__webpack_require__.r(__webpack_exports__);
  /* harmony export (binding) */
  __webpack_require__.d(__webpack_exports__, \"Interchange\", function() { return Interchange; });
  /* harmony import */
  var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ \"jquery\");
  /* harmony import */
  var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
  /* harmony import */
  var _foundation_util_mediaQuery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./foundation.util.mediaQuery */ \"./js/foundation.util.mediaQuery.js\");
  /* harmony import */
  var _foundation_core_plugin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./foundation.core.plugin */ \"./js/foundation.core.plugin.js\");
  /* harmony import */
  var _foundation_core_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./foundation.core.utils */ \"./js/foundation.core.utils.js\");
  /* harmony import */
  var _foundation_util_triggers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./foundation.util.triggers */ \"./js/foundation.util.triggers.js\");


  function _typeof(obj) {
      if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") {
      _typeof = function _typeof(obj) {
        return typeof obj;
      };
    } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj;
    };
  }
    return _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError(\"Cannot call a class as a function\");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true;
    if (\"value\" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) {
  return call;
}
return _assertThisInitialized(self);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");
  } return self;
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}
function _inherits(subClass, superClass) {
  if (typeof superClass !== \"function\" && superClass !== null) {
  throw new TypeError(\"Super expression must either be null or a function\");
  }
subClass.prototype = Object.create(superClass && superClass.prototype, {
  constructor: {
    value: subClass, writable: true, configurable: true
  }
});
if (superClass) _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };
  return _setPrototypeOf(o, p);
}


/**
 * Interchange module.
 * @module foundation.interchange
 * @requires foundation.util.mediaQuery
 */

var Interchange =
   /*#__PURE__*/\nfunction(_Plugin) {
  _inherits(Interchange, _Plugin);
  function Interchange() {
    _classCallCheck(this, Interchange);
    return _possibleConstructorReturn(this, _getPrototypeOf(Interchange).apply(this, arguments));
  }

  _createClass(Interchange, [{
    key: \"_setup\",

        /**
         * Creates a new instance of Interchange.
         * @class
         * @name Interchange
         * @fires Interchange#init
         * @param {Object} element - jQuery object to add the trigger to.
         * @param {Object} options - Overrides to the default plugin settings.
         */
        value: function _setup(element, options) {
    this.$element = element;
    this.options = jquery__WEBPACK_IMPORTED_MODULE_0___default.a.extend({}, Interchange.defaults, this.$element.data(), options);
    this.rules = [];
    this.currentPath = '';
    this.className = 'Interchange';
    // ie9 back compat
    // Triggers init is idempotent, just need to make sure it is initialized

    _foundation_util_triggers__WEBPACK_IMPORTED_MODULE_4__[\"Triggers\"].init(jquery__WEBPACK_IMPORTED_MODULE_0___default.a);

          this._init();

    this._events();
  }
        /**
         * Initializes the Interchange plugin and calls functions to get interchange functioning on load.
         * @function
         * @private
         */

        }, {
  key: \"_init\",
  value: function _init() {
    _foundation_util_mediaQuery__WEBPACK_IMPORTED_MODULE_1__[\"MediaQuery\"]._init();

    var id = this.$element[0].id || Object(_foundation_core_utils__WEBPACK_IMPORTED_MODULE_3__[\"GetYoDigits\"])(6, 'interchange');
            this.$element.attr({
      'data-resize': id,
      'id': id
    });

    this._parseOptions();

    this._addBreakpoints();

    this._generateRules();

    this._reflow();
  }
  /**
   * Initializes events for Interchange.
   * @function
   * @private
   */

}, {
  key: \"_events\",
  value: function _events() {
    var _this = this;

    this.$element.off('resizeme.zf.trigger').on('resizeme.zf.trigger', function () {
      return _this._reflow();
    });
  }
  /**
   * Calls necessary functions to update Interchange upon DOM change
   * @function
   * @private
   */

}, {
  key: \"_reflow\",
  value: function _reflow() {
    var match;
    // Iterate through each rule, but only save the last match

    for (var i in this.rules) {
      if (this.rules.hasOwnProperty(i)) {
        var rule = this.rules[i];

        if (window.matchMedia(rule.query).matches) {
          match = rule;
        }
      }
    }

    if (match) {
      this.replace(match.path);
    }
  }
  /**
   * Check options valifity and set defaults for:
   * - `data-interchange-type`: if set, enforce the type of replacement (auto, src, background or html)
   * @function
   * @private
   */

}, {
  key: \"_parseOptions\",
  value: function _parseOptions() {
    var types = ['auto', 'src', 'background', 'html'];
    if (typeof this.options.type === 'undefined') this.options.type = 'auto';
    else if (types.indexOf(this.options.type) === -1) {
      console.log(\"Warning: invalid value \\\"\".concat(this.options.type, \"\\\" for Interchange option \\\"type\\\"\"));
        this.options.type = 'auto';
    }
  }
  /**
   * Gets the Foundation breakpoints and adds them to the Interchange.SPECIAL_QUERIES object.
   * @function
   * @private
   */
}, {
  key: \"_addBreakpoints\",
  value: function _addBreakpoints() {
    for (var i in _foundation_util_mediaQuery__WEBPACK_IMPORTED_MODULE_1__[\"MediaQuery\"].queries) {
    if (_foundation_util_mediaQuery__WEBPACK_IMPORTED_MODULE_1__[\"MediaQuery\"].queries.hasOwnProperty(i)) {
    var query = _foundation_util_mediaQuery__WEBPACK_IMPORTED_MODULE_1__[\"MediaQuery\"].queries[i];
    Interchange.SPECIAL_QUERIES[query.name] = query.value;
  }
}
}
    /**\
     * Checks the Interchange element for the provided media query + content pairings
     * @function
     * @private
     * @param {Object} element - jQuery object that is an Interchange instance
     * @returns {Array} scenarios - Array of objects that have 'mq' and 'path' keys with corresponding keys
     */

    }, {
  key: \"_generateRules\",
  value: function _generateRules(element) {
    var rulesList = [];
    var rules;

    if (this.options.rules) {
      rules = this.options.rules;
    } else {
      rules = this.$element.data('interchange');
    }

    rules = typeof rules === 'string' ? rules.match(/\\[.*?, .*?\\]/g) : rules;

    for (var i in rules) {
      if (rules.hasOwnProperty(i)) {
        var rule = rules[i].slice(1, -1).split(', ');
        var path = rule.slice(0, -1).join('');
        var query = rule[rule.length - 1];

        if (Interchange.SPECIAL_QUERIES[query]) {
          query = Interchange.SPECIAL_QUERIES[query];
        }

        rulesList.push({
          path: path,
          query: query
        });
      }
    }
    this.rules = rulesList;
  }
  /**
   * Update the `src` property of an image, or change the HTML of a container, to the specified path.
   * @function
   * @param {String} path - Path to the image or HTML partial.
   * @fires Interchange#replaced
   */

}, {
  key: \"replace\",
  value: function replace(path) {
    var _this2 = this;

    if (this.currentPath === path) return;
    var trigger = 'replaced.zf.interchange';
    var type = this.options.type;

    if (type === 'auto') {
      if (this.$element[0].nodeName === 'IMG') type = 'src';
      else if (path.match(/\\.(gif|jpe?g|png|svg|tiff)([?#].*)?/i)) type = 'background';
      else type = 'html';
    }
    // Replacing images


    if (type === 'src') {
      this.$element.attr('src', path).on('load', function () {
        _this2.currentPath = path;
      }).trigger(trigger);
    }
    // Replacing background images
    else if (type === 'background') {
      path = path.replace(/\\(/g, '%28').replace(/\\)/g, '%29');
      this.$element.css({
        'background-image': 'url(' + path + ')'
      }).trigger(trigger);
    }
    // Replacing HTML
    else if (type === 'html') {
      jquery__WEBPACK_IMPORTED_MODULE_0___default.a.get(path, function (response) {
        _this2.$element.html(response).trigger(trigger);
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(response).foundation();
        _this2.currentPath = path;
      });
    }
    /**
     * Fires when content in an Interchange element is done being loaded.
     * @event Interchange#replaced
     */
    // this.$element.trigger('replaced.zf.interchange');

  }
  /**
   * Destroys an instance of interchange.
   * @function
   */

}, {
  key: \"_destroy\",
  value: function _destroy() {
    this.$element.off('resizeme.zf.trigger');
  }
}]);

return Interchange;
}(_foundation_core_plugin__WEBPACK_IMPORTED_MODULE_2__[\"Plugin\"]);
/**
 * Default settings for plugin
 */


Interchange.defaults = {
  /**
   * Rules to be applied to Interchange elements. Set with the `data-interchange` array notation.
   * @option
   * @type {?array}
   * @default null
   */
  rules: null,

  /**
   * Type of the responsive ressource to replace. It can take the following options:
   * - `auto` (default): choose the type according to the element tag or the ressource extension,
   * - `src`: replace the `[src]` attribute, recommended for images `<img>`.
   * - `background`: replace the `background-image` CSS property.
   * - `html`: replace the element content.
   * @option
   * @type {string}
   * @default 'auto'
   */
  type: 'auto'
};
Interchange.SPECIAL_QUERIES = {
  'landscape': 'screen and (orientation: landscape)',
  'portrait': 'screen and (orientation: portrait)',
  'retina': 'only screen and (-webkit-min-device-pixel-ratio: 2), only screen and (min--moz-device-pixel-ratio: 2), only screen and (-o-min-device-pixel-ratio: 2/1), only screen and (min-device-pixel-ratio: 2), only screen and (min-resolution: 192dpi), only screen and (min-resolution: 2dppx)'
};


  //# sourceURL=webpack:///./js/foundation.interchange.js?");

    /***/
  }),

/***/ "./js/foundation.magellan.js":
/*!***********************************!*\
  !*** ./js/foundation.magellan.js ***!
  \***********************************/
/*! exports provided: Magellan */
/***/ (function (module, __webpack_exports__, __webpack_require__) {

  "use strict";
  eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Magellan\", function() { return Magellan; });\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ \"jquery\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _foundation_core_plugin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./foundation.core.plugin */ \"./js/foundation.core.plugin.js\");\n/* harmony import */ var _foundation_core_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./foundation.core.utils */ \"./js/foundation.core.utils.js\");\n/* harmony import */ var _foundation_smoothScroll__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./foundation.smoothScroll */ \"./js/foundation.smoothScroll.js\");\n/* harmony import */ var _foundation_util_triggers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./foundation.util.triggers */ \"./js/foundation.util.triggers.js\");\n\n\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\n\n\n\n/**\n * Magellan module.\n * @module foundation.magellan\n * @requires foundation.smoothScroll\n * @requires foundation.util.triggers\n */\n\nvar Magellan =\n/*#__PURE__*/\nfunction (_Plugin) {\n  _inherits(Magellan, _Plugin);\n\n  function Magellan() {\n    _classCallCheck(this, Magellan);\n\n    return _possibleConstructorReturn(this, _getPrototypeOf(Magellan).apply(this, arguments));\n  }\n\n  _createClass(Magellan, [{\n    key: \"_setup\",\n\n    /**\n     * Creates a new instance of Magellan.\n     * @class\n     * @name Magellan\n     * @fires Magellan#init\n     * @param {Object} element - jQuery object to add the trigger to.\n     * @param {Object} options - Overrides to the default plugin settings.\n     */\n    value: function _setup(element, options) {\n      this.$element = element;\n      this.options = jquery__WEBPACK_IMPORTED_MODULE_0___default.a.extend({}, Magellan.defaults, this.$element.data(), options);\n      this.className = 'Magellan'; // ie9 back compat\n      // Triggers init is idempotent, just need to make sure it is initialized\n\n      _foundation_util_triggers__WEBPACK_IMPORTED_MODULE_4__[\"Triggers\"].init(jquery__WEBPACK_IMPORTED_MODULE_0___default.a);\n\n      this._init();\n\n      this.calcPoints();\n    }\n    /**\n     * Initializes the Magellan plugin and calls functions to get equalizer functioning on load.\n     * @private\n     */\n\n  }, {\n    key: \"_init\",\n    value: function _init() {\n      var id = this.$element[0].id || Object(_foundation_core_utils__WEBPACK_IMPORTED_MODULE_2__[\"GetYoDigits\"])(6, 'magellan');\n\n      var _this = this;\n\n      this.$targets = jquery__WEBPACK_IMPORTED_MODULE_0___default()('[data-magellan-target]');\n      this.$links = this.$element.find('a');\n      this.$element.attr({\n        'data-resize': id,\n        'data-scroll': id,\n        'id': id\n      });\n      this.$active = jquery__WEBPACK_IMPORTED_MODULE_0___default()();\n      this.scrollPos = parseInt(window.pageYOffset, 10);\n\n      this._events();\n    }\n    /**\n     * Calculates an array of pixel values that are the demarcation lines between locations on the page.\n     * Can be invoked if new elements are added or the size of a location changes.\n     * @function\n     */\n\n  }, {\n    key: \"calcPoints\",\n    value: function calcPoints() {\n      var _this = this,\n          body = document.body,\n          html = document.documentElement;\n\n      this.points = [];\n      this.winHeight = Math.round(Math.max(window.innerHeight, html.clientHeight));\n      this.docHeight = Math.round(Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight));\n      this.$targets.each(function () {\n        var $tar = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this),\n            pt = Math.round($tar.offset().top - _this.options.threshold);\n        $tar.targetPoint = pt;\n\n        _this.points.push(pt);\n      });\n    }\n    /**\n     * Initializes events for Magellan.\n     * @private\n     */\n\n  }, {\n    key: \"_events\",\n    value: function _events() {\n      var _this = this;\n\n      jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).one('load', function () {\n        if (_this.options.deepLinking) {\n          if (location.hash) {\n            _this.scrollToLoc(location.hash);\n          }\n        }\n\n        _this.calcPoints();\n\n        _this._updateActive();\n      });\n      _this.onLoadListener = Object(_foundation_core_utils__WEBPACK_IMPORTED_MODULE_2__[\"onLoad\"])(jquery__WEBPACK_IMPORTED_MODULE_0___default()(window), function () {\n        _this.$element.on({\n          'resizeme.zf.trigger': _this.reflow.bind(_this),\n          'scrollme.zf.trigger': _this._updateActive.bind(_this)\n        }).on('click.zf.magellan', 'a[href^=\"#\"]', function (e) {\n          e.preventDefault();\n          var arrival = this.getAttribute('href');\n\n          _this.scrollToLoc(arrival);\n        });\n      });\n\n      this._deepLinkScroll = function (e) {\n        if (_this.options.deepLinking) {\n          _this.scrollToLoc(window.location.hash);\n        }\n      };\n\n      jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).on('hashchange', this._deepLinkScroll);\n    }\n    /**\n     * Function to scroll to a given location on the page.\n     * @param {String} loc - a properly formatted jQuery id selector. Example: '#foo'\n     * @function\n     */\n\n  }, {\n    key: \"scrollToLoc\",\n    value: function scrollToLoc(loc) {\n      this._inTransition = true;\n\n      var _this = this;\n\n      var options = {\n        animationEasing: this.options.animationEasing,\n        animationDuration: this.options.animationDuration,\n        threshold: this.options.threshold,\n        offset: this.options.offset\n      };\n      _foundation_smoothScroll__WEBPACK_IMPORTED_MODULE_3__[\"SmoothScroll\"].scrollToLoc(loc, options, function () {\n        _this._inTransition = false;\n      });\n    }\n    /**\n     * Calls necessary functions to update Magellan upon DOM change\n     * @function\n     */\n\n  }, {\n    key: \"reflow\",\n    value: function reflow() {\n      this.calcPoints();\n\n      this._updateActive();\n    }\n    /**\n     * Updates the visibility of an active location link, and updates the url hash for the page, if deepLinking enabled.\n     * @private\n     * @function\n     * @fires Magellan#update\n     */\n\n  }, {\n    key: \"_updateActive\",\n    value: function _updateActive()\n    /*evt, elem, scrollPos*/\n    {\n      var _this2 = this;\n\n      if (this._inTransition) return;\n      var newScrollPos = parseInt(window.pageYOffset, 10);\n      var isScrollingUp = this.scrollPos > newScrollPos;\n      this.scrollPos = newScrollPos;\n      var activeIdx; // Before the first point: no link\n\n      if (newScrollPos < this.points[0]) {}\n      /* do nothing */\n      // At the bottom of the page: last link\n      else if (newScrollPos + this.winHeight === this.docHeight) {\n          activeIdx = this.points.length - 1;\n        } // Otherwhise, use the last visible link\n        else {\n            var visibleLinks = this.points.filter(function (p, i) {\n              return p - _this2.options.offset - (isScrollingUp ? _this2.options.threshold : 0) <= newScrollPos;\n            });\n            activeIdx = visibleLinks.length ? visibleLinks.length - 1 : 0;\n          } // Get the new active link\n\n\n      var $oldActive = this.$active;\n      var activeHash = '';\n\n      if (typeof activeIdx !== 'undefined') {\n        this.$active = this.$links.filter('[href=\"#' + this.$targets.eq(activeIdx).data('magellan-target') + '\"]');\n        if (this.$active.length) activeHash = this.$active[0].getAttribute('href');\n      } else {\n        this.$active = jquery__WEBPACK_IMPORTED_MODULE_0___default()();\n      }\n\n      var isNewActive = !(!this.$active.length && !$oldActive.length) && !this.$active.is($oldActive);\n      var isNewHash = activeHash !== window.location.hash; // Update the active link element\n\n      if (isNewActive) {\n        $oldActive.removeClass(this.options.activeClass);\n        this.$active.addClass(this.options.activeClass);\n      } // Update the hash (it may have changed with the same active link)\n\n\n      if (this.options.deepLinking && isNewHash) {\n        if (window.history.pushState) {\n          // Set or remove the hash (see: https://stackoverflow.com/a/5298684/4317384\n          var url = activeHash ? activeHash : window.location.pathname + window.location.search;\n\n          if (this.options.updateHistory) {\n            window.history.pushState({}, '', url);\n          } else {\n            window.history.replaceState({}, '', url);\n          }\n        } else {\n          window.location.hash = activeHash;\n        }\n      }\n\n      if (isNewActive) {\n        /**\n         * Fires when magellan is finished updating to the new active element.\n         * @event Magellan#update\n         */\n        this.$element.trigger('update.zf.magellan', [this.$active]);\n      }\n    }\n    /**\n     * Destroys an instance of Magellan and resets the url of the window.\n     * @function\n     */\n\n  }, {\n    key: \"_destroy\",\n    value: function _destroy() {\n      this.$element.off('.zf.trigger .zf.magellan').find(\".\".concat(this.options.activeClass)).removeClass(this.options.activeClass);\n\n      if (this.options.deepLinking) {\n        var hash = this.$active[0].getAttribute('href');\n        window.location.hash.replace(hash, '');\n      }\n\n      jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).off('hashchange', this._deepLinkScroll);\n      if (this.onLoadListener) jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).off(this.onLoadListener);\n    }\n  }]);\n\n  return Magellan;\n}(_foundation_core_plugin__WEBPACK_IMPORTED_MODULE_1__[\"Plugin\"]);\n/**\n * Default settings for plugin\n */\n\n\nMagellan.defaults = {\n  /**\n   * Amount of time, in ms, the animated scrolling should take between locations.\n   * @option\n   * @type {number}\n   * @default 500\n   */\n  animationDuration: 500,\n\n  /**\n   * Animation style to use when scrolling between locations. Can be `'swing'` or `'linear'`.\n   * @option\n   * @type {string}\n   * @default 'linear'\n   * @see {@link https://api.jquery.com/animate|Jquery animate}\n   */\n  animationEasing: 'linear',\n\n  /**\n   * Number of pixels to use as a marker for location changes.\n   * @option\n   * @type {number}\n   * @default 50\n   */\n  threshold: 50,\n\n  /**\n   * Class applied to the active locations link on the magellan container.\n   * @option\n   * @type {string}\n   * @default 'is-active'\n   */\n  activeClass: 'is-active',\n\n  /**\n   * Allows the script to manipulate the url of the current page, and if supported, alter the history.\n   * @option\n   * @type {boolean}\n   * @default false\n   */\n  deepLinking: false,\n\n  /**\n   * Update the browser history with the active link, if deep linking is enabled.\n   * @option\n   * @type {boolean}\n   * @default false\n   */\n  updateHistory: false,\n\n  /**\n   * Number of pixels to offset the scroll of the page on item click if using a sticky nav bar.\n   * @option\n   * @type {number}\n   * @default 0\n   */\n  offset: 0\n};\n\n\n//# sourceURL=webpack:///./js/foundation.magellan.js?");

  /***/
}),

/***/ "./js/foundation.offcanvas.js":
/*!************************************!*\
  !*** ./js/foundation.offcanvas.js ***!
  \************************************/
/*! exports provided: OffCanvas */
/***/ (function (module, __webpack_exports__, __webpack_require__) {

  "use strict";
  eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"OffCanvas\", function() { return OffCanvas; });\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ \"jquery\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _foundation_core_plugin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./foundation.core.plugin */ \"./js/foundation.core.plugin.js\");\n/* harmony import */ var _foundation_core_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./foundation.core.utils */ \"./js/foundation.core.utils.js\");\n/* harmony import */ var _foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./foundation.util.keyboard */ \"./js/foundation.util.keyboard.js\");\n/* harmony import */ var _foundation_util_mediaQuery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./foundation.util.mediaQuery */ \"./js/foundation.util.mediaQuery.js\");\n/* harmony import */ var _foundation_util_triggers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./foundation.util.triggers */ \"./js/foundation.util.triggers.js\");\n\n\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\n\n\n\n\n/**\n * OffCanvas module.\n * @module foundation.offCanvas\n * @requires foundation.util.keyboard\n * @requires foundation.util.mediaQuery\n * @requires foundation.util.triggers\n */\n\nvar OffCanvas =\n/*#__PURE__*/\nfunction (_Plugin) {\n  _inherits(OffCanvas, _Plugin);\n\n  function OffCanvas() {\n    _classCallCheck(this, OffCanvas);\n\n    return _possibleConstructorReturn(this, _getPrototypeOf(OffCanvas).apply(this, arguments));\n  }\n\n  _createClass(OffCanvas, [{\n    key: \"_setup\",\n\n    /**\n     * Creates a new instance of an off-canvas wrapper.\n     * @class\n     * @name OffCanvas\n     * @fires OffCanvas#init\n     * @param {Object} element - jQuery object to initialize.\n     * @param {Object} options - Overrides to the default plugin settings.\n     */\n    value: function _setup(element, options) {\n      var _this2 = this;\n\n      this.className = 'OffCanvas'; // ie9 back compat\n\n      this.$element = element;\n      this.options = jquery__WEBPACK_IMPORTED_MODULE_0___default.a.extend({}, OffCanvas.defaults, this.$element.data(), options);\n      this.contentClasses = {\n        base: [],\n        reveal: []\n      };\n      this.$lastTrigger = jquery__WEBPACK_IMPORTED_MODULE_0___default()();\n      this.$triggers = jquery__WEBPACK_IMPORTED_MODULE_0___default()();\n      this.position = 'left';\n      this.$content = jquery__WEBPACK_IMPORTED_MODULE_0___default()();\n      this.nested = !!this.options.nested;\n      this.$sticky = jquery__WEBPACK_IMPORTED_MODULE_0___default()();\n      this.isInCanvas = false; // Defines the CSS transition/position classes of the off-canvas content container.\n\n      jquery__WEBPACK_IMPORTED_MODULE_0___default()(['push', 'overlap']).each(function (index, val) {\n        _this2.contentClasses.base.push('has-transition-' + val);\n      });\n      jquery__WEBPACK_IMPORTED_MODULE_0___default()(['left', 'right', 'top', 'bottom']).each(function (index, val) {\n        _this2.contentClasses.base.push('has-position-' + val);\n\n        _this2.contentClasses.reveal.push('has-reveal-' + val);\n      }); // Triggers init is idempotent, just need to make sure it is initialized\n\n      _foundation_util_triggers__WEBPACK_IMPORTED_MODULE_5__[\"Triggers\"].init(jquery__WEBPACK_IMPORTED_MODULE_0___default.a);\n\n      _foundation_util_mediaQuery__WEBPACK_IMPORTED_MODULE_4__[\"MediaQuery\"]._init();\n\n      this._init();\n\n      this._events();\n\n      _foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_3__[\"Keyboard\"].register('OffCanvas', {\n        'ESCAPE': 'close'\n      });\n    }\n    /**\n     * Initializes the off-canvas wrapper by adding the exit overlay (if needed).\n     * @function\n     * @private\n     */\n\n  }, {\n    key: \"_init\",\n    value: function _init() {\n      var id = this.$element.attr('id');\n      this.$element.attr('aria-hidden', 'true'); // Find off-canvas content, either by ID (if specified), by siblings or by closest selector (fallback)\n\n      if (this.options.contentId) {\n        this.$content = jquery__WEBPACK_IMPORTED_MODULE_0___default()('#' + this.options.contentId);\n      } else if (this.$element.siblings('[data-off-canvas-content]').length) {\n        this.$content = this.$element.siblings('[data-off-canvas-content]').first();\n      } else {\n        this.$content = this.$element.closest('[data-off-canvas-content]').first();\n      }\n\n      if (!this.options.contentId) {\n        // Assume that the off-canvas element is nested if it isn't a sibling of the content\n        this.nested = this.$element.siblings('[data-off-canvas-content]').length === 0;\n      } else if (this.options.contentId && this.options.nested === null) {\n        // Warning if using content ID without setting the nested option\n        // Once the element is nested it is required to work properly in this case\n        console.warn('Remember to use the nested option if using the content ID option!');\n      }\n\n      if (this.nested === true) {\n        // Force transition overlap if nested\n        this.options.transition = 'overlap'; // Remove appropriate classes if already assigned in markup\n\n        this.$element.removeClass('is-transition-push');\n      }\n\n      this.$element.addClass(\"is-transition-\".concat(this.options.transition, \" is-closed\")); // Find triggers that affect this element and add aria-expanded to them\n\n      this.$triggers = jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).find('[data-open=\"' + id + '\"], [data-close=\"' + id + '\"], [data-toggle=\"' + id + '\"]').attr('aria-expanded', 'false').attr('aria-controls', id); // Get position by checking for related CSS class\n\n      this.position = this.$element.is('.position-left, .position-top, .position-right, .position-bottom') ? this.$element.attr('class').match(/position\\-(left|top|right|bottom)/)[1] : this.position; // Add an overlay over the content if necessary\n\n      if (this.options.contentOverlay === true) {\n        var overlay = document.createElement('div');\n        var overlayPosition = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this.$element).css(\"position\") === 'fixed' ? 'is-overlay-fixed' : 'is-overlay-absolute';\n        overlay.setAttribute('class', 'js-off-canvas-overlay ' + overlayPosition);\n        this.$overlay = jquery__WEBPACK_IMPORTED_MODULE_0___default()(overlay);\n\n        if (overlayPosition === 'is-overlay-fixed') {\n          jquery__WEBPACK_IMPORTED_MODULE_0___default()(this.$overlay).insertAfter(this.$element);\n        } else {\n          this.$content.append(this.$overlay);\n        }\n      } // Get the revealOn option from the class.\n\n\n      var revealOnRegExp = new RegExp(Object(_foundation_core_utils__WEBPACK_IMPORTED_MODULE_2__[\"RegExpEscape\"])(this.options.revealClass) + '([^\\\\s]+)', 'g');\n      var revealOnClass = revealOnRegExp.exec(this.$element[0].className);\n\n      if (revealOnClass) {\n        this.options.isRevealed = true;\n        this.options.revealOn = this.options.revealOn || revealOnClass[1];\n      } // Ensure the `reveal-on-*` class is set.\n\n\n      if (this.options.isRevealed === true && this.options.revealOn) {\n        this.$element.first().addClass(\"\".concat(this.options.revealClass).concat(this.options.revealOn));\n\n        this._setMQChecker();\n      }\n\n      if (this.options.transitionTime) {\n        this.$element.css('transition-duration', this.options.transitionTime);\n      } // Find fixed elements that should stay fixed while off-canvas is opened\n\n\n      this.$sticky = this.$content.find('[data-off-canvas-sticky]');\n\n      if (this.$sticky.length > 0 && this.options.transition === 'push') {\n        // If there's at least one match force contentScroll:false because the absolute top value doesn't get recalculated on scroll\n        // Limit to push transition since there's no transform scope for overlap\n        this.options.contentScroll = false;\n      }\n\n      var inCanvasFor = this.$element.attr('class').match(/\\bin-canvas-for-(\\w+)/);\n\n      if (inCanvasFor && inCanvasFor.length === 2) {\n        // Set `inCanvasOn` option if found in-canvas-for-[BREAKPONT] CSS class\n        this.options.inCanvasOn = inCanvasFor[1];\n      } else if (this.options.inCanvasOn) {\n        // Ensure the CSS class is set\n        this.$element.addClass(\"in-canvas-for-\".concat(this.options.inCanvasOn));\n      }\n\n      if (this.options.inCanvasOn) {\n        this._checkInCanvas();\n      } // Initally remove all transition/position CSS classes from off-canvas content container.\n\n\n      this._removeContentClasses();\n    }\n    /**\n     * Adds event handlers to the off-canvas wrapper and the exit overlay.\n     * @function\n     * @private\n     */\n\n  }, {\n    key: \"_events\",\n    value: function _events() {\n      var _this3 = this;\n\n      this.$element.off('.zf.trigger .zf.offCanvas').on({\n        'open.zf.trigger': this.open.bind(this),\n        'close.zf.trigger': this.close.bind(this),\n        'toggle.zf.trigger': this.toggle.bind(this),\n        'keydown.zf.offCanvas': this._handleKeyboard.bind(this)\n      });\n\n      if (this.options.closeOnClick === true) {\n        var $target = this.options.contentOverlay ? this.$overlay : this.$content;\n        $target.on({\n          'click.zf.offCanvas': this.close.bind(this)\n        });\n      }\n\n      if (this.options.inCanvasOn) {\n        jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).on('changed.zf.mediaquery', function () {\n          _this3._checkInCanvas();\n        });\n      }\n    }\n    /**\n     * Applies event listener for elements that will reveal at certain breakpoints.\n     * @private\n     */\n\n  }, {\n    key: \"_setMQChecker\",\n    value: function _setMQChecker() {\n      var _this = this;\n\n      this.onLoadListener = Object(_foundation_core_utils__WEBPACK_IMPORTED_MODULE_2__[\"onLoad\"])(jquery__WEBPACK_IMPORTED_MODULE_0___default()(window), function () {\n        if (_foundation_util_mediaQuery__WEBPACK_IMPORTED_MODULE_4__[\"MediaQuery\"].atLeast(_this.options.revealOn)) {\n          _this.reveal(true);\n        }\n      });\n      jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).on('changed.zf.mediaquery', function () {\n        if (_foundation_util_mediaQuery__WEBPACK_IMPORTED_MODULE_4__[\"MediaQuery\"].atLeast(_this.options.revealOn)) {\n          _this.reveal(true);\n        } else {\n          _this.reveal(false);\n        }\n      });\n    }\n    /**\n     * Checks if InCanvas on current breakpoint and adjust off-canvas accordingly\n     * @private\n     */\n\n  }, {\n    key: \"_checkInCanvas\",\n    value: function _checkInCanvas() {\n      this.isInCanvas = _foundation_util_mediaQuery__WEBPACK_IMPORTED_MODULE_4__[\"MediaQuery\"].atLeast(this.options.inCanvasOn);\n\n      if (this.isInCanvas === true) {\n        this.close();\n      }\n    }\n    /**\n     * Removes the CSS transition/position classes of the off-canvas content container.\n     * Removing the classes is important when another off-canvas gets opened that uses the same content container.\n     * @param {Boolean} hasReveal - true if related off-canvas element is revealed.\n     * @private\n     */\n\n  }, {\n    key: \"_removeContentClasses\",\n    value: function _removeContentClasses(hasReveal) {\n      if (typeof hasReveal !== 'boolean') {\n        this.$content.removeClass(this.contentClasses.base.join(' '));\n      } else if (hasReveal === false) {\n        this.$content.removeClass(\"has-reveal-\".concat(this.position));\n      }\n    }\n    /**\n     * Adds the CSS transition/position classes of the off-canvas content container, based on the opening off-canvas element.\n     * Beforehand any transition/position class gets removed.\n     * @param {Boolean} hasReveal - true if related off-canvas element is revealed.\n     * @private\n     */\n\n  }, {\n    key: \"_addContentClasses\",\n    value: function _addContentClasses(hasReveal) {\n      this._removeContentClasses(hasReveal);\n\n      if (typeof hasReveal !== 'boolean') {\n        this.$content.addClass(\"has-transition-\".concat(this.options.transition, \" has-position-\").concat(this.position));\n      } else if (hasReveal === true) {\n        this.$content.addClass(\"has-reveal-\".concat(this.position));\n      }\n    }\n    /**\n     * Preserves the fixed behavior of sticky elements on opening an off-canvas with push transition.\n     * Since the off-canvas container has got a transform scope in such a case, it is done by calculating position absolute values.\n     * @private\n     */\n\n  }, {\n    key: \"_fixStickyElements\",\n    value: function _fixStickyElements() {\n      this.$sticky.each(function (_, el) {\n        var $el = jquery__WEBPACK_IMPORTED_MODULE_0___default()(el); // If sticky element is currently fixed, adjust its top value to match absolute position due to transform scope\n        // Limit to push transition because postion:fixed works without problems for overlap (no transform scope)\n\n        if ($el.css('position') === 'fixed') {\n          // Save current inline styling to restore it if undoing the absolute fixing\n          var topVal = parseInt($el.css('top'), 10);\n          $el.data('offCanvasSticky', {\n            top: topVal\n          });\n          var absoluteTopVal = jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).scrollTop() + topVal;\n          $el.css({\n            top: \"\".concat(absoluteTopVal, \"px\"),\n            width: '100%',\n            transition: 'none'\n          });\n        }\n      });\n    }\n    /**\n     * Restores the original fixed styling of sticky elements after having closed an off-canvas that got pseudo fixed beforehand.\n     * This reverts the changes of _fixStickyElements()\n     * @private\n     */\n\n  }, {\n    key: \"_unfixStickyElements\",\n    value: function _unfixStickyElements() {\n      this.$sticky.each(function (_, el) {\n        var $el = jquery__WEBPACK_IMPORTED_MODULE_0___default()(el);\n        var stickyData = $el.data('offCanvasSticky'); // If sticky element has got data object with prior values (meaning it was originally fixed) restore these values once off-canvas is closed\n\n        if (_typeof(stickyData) === 'object') {\n          $el.css({\n            top: \"\".concat(stickyData.top, \"px\"),\n            width: '',\n            transition: ''\n          });\n          $el.data('offCanvasSticky', '');\n        }\n      });\n    }\n    /**\n     * Handles the revealing/hiding the off-canvas at breakpoints, not the same as open.\n     * @param {Boolean} isRevealed - true if element should be revealed.\n     * @function\n     */\n\n  }, {\n    key: \"reveal\",\n    value: function reveal(isRevealed) {\n      if (isRevealed) {\n        this.close();\n        this.isRevealed = true;\n        this.$element.attr('aria-hidden', 'false');\n        this.$element.off('open.zf.trigger toggle.zf.trigger');\n        this.$element.removeClass('is-closed');\n      } else {\n        this.isRevealed = false;\n        this.$element.attr('aria-hidden', 'true');\n        this.$element.off('open.zf.trigger toggle.zf.trigger').on({\n          'open.zf.trigger': this.open.bind(this),\n          'toggle.zf.trigger': this.toggle.bind(this)\n        });\n        this.$element.addClass('is-closed');\n      }\n\n      this._addContentClasses(isRevealed);\n    }\n    /**\n     * Stops scrolling of the body when OffCanvas is open on mobile Safari and other troublesome browsers.\n     * @function\n     * @private\n     */\n\n  }, {\n    key: \"_stopScrolling\",\n    value: function _stopScrolling(event) {\n      return false;\n    }\n    /**\n     * Tag the element given as context whether it can be scrolled up and down.\n     * Used to allow or prevent it to scroll. See `_stopScrollPropagation`.\n     *\n     * Taken and adapted from http://stackoverflow.com/questions/16889447/prevent-full-page-scrolling-ios\n     * Only really works for y, not sure how to extend to x or if we need to.\n     *\n     * @function\n     * @private\n     */\n\n  }, {\n    key: \"_recordScrollable\",\n    value: function _recordScrollable(event) {\n      var elem = this; // called from event handler context with this as elem\n      // If the element is scrollable (content overflows), then...\n\n      if (elem.scrollHeight !== elem.clientHeight) {\n        // If we're at the top, scroll down one pixel to allow scrolling up\n        if (elem.scrollTop === 0) {\n          elem.scrollTop = 1;\n        } // If we're at the bottom, scroll up one pixel to allow scrolling down\n\n\n        if (elem.scrollTop === elem.scrollHeight - elem.clientHeight) {\n          elem.scrollTop = elem.scrollHeight - elem.clientHeight - 1;\n        }\n      }\n\n      elem.allowUp = elem.scrollTop > 0;\n      elem.allowDown = elem.scrollTop < elem.scrollHeight - elem.clientHeight;\n      elem.lastY = event.originalEvent.pageY;\n    }\n    /**\n     * Prevent the given event propagation if the element given as context can scroll.\n     * Used to preserve the element scrolling on mobile (`touchmove`) when the document\n     * scrolling is prevented. See https://git.io/zf-9707.\n     * @function\n     * @private\n     */\n\n  }, {\n    key: \"_stopScrollPropagation\",\n    value: function _stopScrollPropagation(event) {\n      var elem = this; // called from event handler context with this as elem\n\n      var parent; // off-canvas elem if called from inner scrollbox\n\n      var up = event.pageY < elem.lastY;\n      var down = !up;\n      elem.lastY = event.pageY;\n\n      if (up && elem.allowUp || down && elem.allowDown) {\n        // It is not recommended to stop event propagation (the user cannot watch it),\n        // but in this case this is the only solution we have.\n        event.stopPropagation(); // If elem is inner scrollbox we are scrolling the outer off-canvas down/up once the box end has been reached\n        // This lets the user continue to touch move the off-canvas without the need to place the finger outside the scrollbox\n\n        if (elem.hasAttribute('data-off-canvas-scrollbox')) {\n          parent = elem.closest('[data-off-canvas], [data-off-canvas-scrollbox-outer]');\n\n          if (elem.scrollTop <= 1 && parent.scrollTop > 0) {\n            parent.scrollTop--;\n          } else if (elem.scrollTop >= elem.scrollHeight - elem.clientHeight - 1 && parent.scrollTop < parent.scrollHeight - parent.clientHeight) {\n            parent.scrollTop++;\n          }\n        }\n      } else {\n        event.preventDefault();\n      }\n    }\n    /**\n     * Opens the off-canvas menu.\n     * @function\n     * @param {Object} event - Event object passed from listener.\n     * @param {jQuery} trigger - element that triggered the off-canvas to open.\n     * @fires OffCanvas#opened\n     * @todo also trigger 'open' event?\n     */\n\n  }, {\n    key: \"open\",\n    value: function open(event, trigger) {\n      var _this4 = this;\n\n      if (this.$element.hasClass('is-open') || this.isRevealed || this.isInCanvas) {\n        return;\n      }\n\n      var _this = this;\n\n      if (trigger) {\n        this.$lastTrigger = trigger;\n      }\n\n      if (this.options.forceTo === 'top') {\n        window.scrollTo(0, 0);\n      } else if (this.options.forceTo === 'bottom') {\n        window.scrollTo(0, document.body.scrollHeight);\n      }\n\n      if (this.options.transitionTime && this.options.transition !== 'overlap') {\n        this.$element.siblings('[data-off-canvas-content]').css('transition-duration', this.options.transitionTime);\n      } else {\n        this.$element.siblings('[data-off-canvas-content]').css('transition-duration', '');\n      }\n\n      this.$element.addClass('is-open').removeClass('is-closed');\n      this.$triggers.attr('aria-expanded', 'true');\n      this.$element.attr('aria-hidden', 'false');\n      this.$content.addClass('is-open-' + this.position); // If `contentScroll` is set to false, add class and disable scrolling on touch devices.\n\n      if (this.options.contentScroll === false) {\n        jquery__WEBPACK_IMPORTED_MODULE_0___default()('body').addClass('is-off-canvas-open').on('touchmove', this._stopScrolling);\n        this.$element.on('touchstart', this._recordScrollable);\n        this.$element.on('touchmove', this._stopScrollPropagation);\n        this.$element.on('touchstart', '[data-off-canvas-scrollbox]', this._recordScrollable);\n        this.$element.on('touchmove', '[data-off-canvas-scrollbox]', this._stopScrollPropagation);\n      }\n\n      if (this.options.contentOverlay === true) {\n        this.$overlay.addClass('is-visible');\n      }\n\n      if (this.options.closeOnClick === true && this.options.contentOverlay === true) {\n        this.$overlay.addClass('is-closable');\n      }\n\n      if (this.options.autoFocus === true) {\n        this.$element.one(Object(_foundation_core_utils__WEBPACK_IMPORTED_MODULE_2__[\"transitionend\"])(this.$element), function () {\n          if (!_this.$element.hasClass('is-open')) {\n            return; // exit if prematurely closed\n          }\n\n          var canvasFocus = _this.$element.find('[data-autofocus]');\n\n          if (canvasFocus.length) {\n            canvasFocus.eq(0).focus();\n          } else {\n            _this.$element.find('a, button').eq(0).focus();\n          }\n        });\n      }\n\n      if (this.options.trapFocus === true) {\n        this.$content.attr('tabindex', '-1');\n        _foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_3__[\"Keyboard\"].trapFocus(this.$element);\n      }\n\n      if (this.options.transition === 'push') {\n        this._fixStickyElements();\n      }\n\n      this._addContentClasses();\n      /**\n       * Fires when the off-canvas menu opens.\n       * @event OffCanvas#opened\n       */\n\n\n      this.$element.trigger('opened.zf.offCanvas');\n      /**\n       * Fires when the off-canvas menu open transition is done.\n       * @event OffCanvas#openedEnd\n       */\n\n      this.$element.one(Object(_foundation_core_utils__WEBPACK_IMPORTED_MODULE_2__[\"transitionend\"])(this.$element), function () {\n        _this4.$element.trigger('openedEnd.zf.offCanvas');\n      });\n    }\n    /**\n     * Closes the off-canvas menu.\n     * @function\n     * @param {Function} cb - optional cb to fire after closure.\n     * @fires OffCanvas#close\n     * @fires OffCanvas#closed\n     */\n\n  }, {\n    key: \"close\",\n    value: function close(cb) {\n      var _this5 = this;\n\n      if (!this.$element.hasClass('is-open') || this.isRevealed) {\n        return;\n      }\n      /**\n       * Fires when the off-canvas menu closes.\n       * @event OffCanvas#close\n       */\n\n\n      this.$element.trigger('close.zf.offCanvas');\n\n      var _this = this;\n\n      this.$element.removeClass('is-open');\n      this.$element.attr('aria-hidden', 'true');\n      this.$content.removeClass('is-open-left is-open-top is-open-right is-open-bottom');\n\n      if (this.options.contentOverlay === true) {\n        this.$overlay.removeClass('is-visible');\n      }\n\n      if (this.options.closeOnClick === true && this.options.contentOverlay === true) {\n        this.$overlay.removeClass('is-closable');\n      }\n\n      this.$triggers.attr('aria-expanded', 'false'); // Listen to transitionEnd: add class, re-enable scrolling and release focus when done.\n\n      this.$element.one(Object(_foundation_core_utils__WEBPACK_IMPORTED_MODULE_2__[\"transitionend\"])(this.$element), function (e) {\n        _this5.$element.addClass('is-closed');\n\n        _this5._removeContentClasses();\n\n        if (_this5.options.transition === 'push') {\n          _this5._unfixStickyElements();\n        } // If `contentScroll` is set to false, remove class and re-enable scrolling on touch devices.\n\n\n        if (_this5.options.contentScroll === false) {\n          jquery__WEBPACK_IMPORTED_MODULE_0___default()('body').removeClass('is-off-canvas-open').off('touchmove', _this5._stopScrolling);\n\n          _this5.$element.off('touchstart', _this5._recordScrollable);\n\n          _this5.$element.off('touchmove', _this5._stopScrollPropagation);\n\n          _this5.$element.off('touchstart', '[data-off-canvas-scrollbox]', _this5._recordScrollable);\n\n          _this5.$element.off('touchmove', '[data-off-canvas-scrollbox]', _this5._stopScrollPropagation);\n        }\n\n        if (_this5.options.trapFocus === true) {\n          _this5.$content.removeAttr('tabindex');\n\n          _foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_3__[\"Keyboard\"].releaseFocus(_this5.$element);\n        }\n        /**\n         * Fires when the off-canvas menu close transition is done.\n         * @event OffCanvas#closed\n         */\n\n\n        _this5.$element.trigger('closed.zf.offCanvas');\n      });\n    }\n    /**\n     * Toggles the off-canvas menu open or closed.\n     * @function\n     * @param {Object} event - Event object passed from listener.\n     * @param {jQuery} trigger - element that triggered the off-canvas to open.\n     */\n\n  }, {\n    key: \"toggle\",\n    value: function toggle(event, trigger) {\n      if (this.$element.hasClass('is-open')) {\n        this.close(event, trigger);\n      } else {\n        this.open(event, trigger);\n      }\n    }\n    /**\n     * Handles keyboard input when detected. When the escape key is pressed, the off-canvas menu closes, and focus is restored to the element that opened the menu.\n     * @function\n     * @private\n     */\n\n  }, {\n    key: \"_handleKeyboard\",\n    value: function _handleKeyboard(e) {\n      var _this6 = this;\n\n      _foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_3__[\"Keyboard\"].handleKey(e, 'OffCanvas', {\n        close: function close() {\n          _this6.close();\n\n          _this6.$lastTrigger.focus();\n\n          return true;\n        },\n        handled: function handled() {\n          e.preventDefault();\n        }\n      });\n    }\n    /**\n     * Destroys the OffCanvas plugin.\n     * @function\n     */\n\n  }, {\n    key: \"_destroy\",\n    value: function _destroy() {\n      this.close();\n      this.$element.off('.zf.trigger .zf.offCanvas');\n      this.$overlay.off('.zf.offCanvas');\n      if (this.onLoadListener) jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).off(this.onLoadListener);\n    }\n  }]);\n\n  return OffCanvas;\n}(_foundation_core_plugin__WEBPACK_IMPORTED_MODULE_1__[\"Plugin\"]);\n\nOffCanvas.defaults = {\n  /**\n   * Allow the user to click outside of the menu to close it.\n   * @option\n   * @type {boolean}\n   * @default true\n   */\n  closeOnClick: true,\n\n  /**\n   * Adds an overlay on top of `[data-off-canvas-content]`.\n   * @option\n   * @type {boolean}\n   * @default true\n   */\n  contentOverlay: true,\n\n  /**\n   * Target an off-canvas content container by ID that may be placed anywhere. If null the closest content container will be taken.\n   * @option\n   * @type {?string}\n   * @default null\n   */\n  contentId: null,\n\n  /**\n   * Define the off-canvas element is nested in an off-canvas content. This is required when using the contentId option for a nested element.\n   * @option\n   * @type {boolean}\n   * @default null\n   */\n  nested: null,\n\n  /**\n   * Enable/disable scrolling of the main content when an off canvas panel is open.\n   * @option\n   * @type {boolean}\n   * @default true\n   */\n  contentScroll: true,\n\n  /**\n   * Amount of time the open and close transition requires, including the appropriate milliseconds (`ms`) or seconds (`s`) unit (e.g. `500ms`, `.75s`) If none selected, pulls from body style.\n   * @option\n   * @type {string}\n   * @default null\n   */\n  transitionTime: null,\n\n  /**\n   * Type of transition for the OffCanvas menu. Options are 'push', 'detached' or 'slide'.\n   * @option\n   * @type {string}\n   * @default push\n   */\n  transition: 'push',\n\n  /**\n   * Force the page to scroll to top or bottom on open.\n   * @option\n   * @type {?string}\n   * @default null\n   */\n  forceTo: null,\n\n  /**\n   * Allow the OffCanvas to remain open for certain breakpoints.\n   * @option\n   * @type {boolean}\n   * @default false\n   */\n  isRevealed: false,\n\n  /**\n   * Breakpoint at which to reveal. JS will use a RegExp to target standard classes, if changing classnames, pass your class with the `revealClass` option.\n   * @option\n   * @type {?string}\n   * @default null\n   */\n  revealOn: null,\n\n  /**\n   * Breakpoint at which the off-canvas gets moved into canvas content and acts as regular page element.\n   * @option\n   * @type {?string}\n   * @default null\n   */\n  inCanvasOn: null,\n\n  /**\n   * Force focus to the offcanvas on open. If true, will focus the opening trigger on close.\n   * @option\n   * @type {boolean}\n   * @default true\n   */\n  autoFocus: true,\n\n  /**\n   * Class used to force an OffCanvas to remain open. Foundation defaults for this are `reveal-for-large` & `reveal-for-medium`.\n   * @option\n   * @type {string}\n   * @default reveal-for-\n   * @todo improve the regex testing for this.\n   */\n  revealClass: 'reveal-for-',\n\n  /**\n   * Triggers optional focus trapping when opening an OffCanvas. Sets tabindex of [data-off-canvas-content] to -1 for accessibility purposes.\n   * @option\n   * @type {boolean}\n   * @default false\n   */\n  trapFocus: false\n};\n\n\n//# sourceURL=webpack:///./js/foundation.offcanvas.js?");

  /***/
}),

/***/ "./js/foundation.orbit.js":
/*!********************************!*\
  !*** ./js/foundation.orbit.js ***!
  \********************************/
/*! exports provided: Orbit */
/***/ (function (module, __webpack_exports__, __webpack_require__) {

  "use strict";
  eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Orbit\", function() { return Orbit; });\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ \"jquery\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./foundation.util.keyboard */ \"./js/foundation.util.keyboard.js\");\n/* harmony import */ var _foundation_util_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./foundation.util.motion */ \"./js/foundation.util.motion.js\");\n/* harmony import */ var _foundation_util_timer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./foundation.util.timer */ \"./js/foundation.util.timer.js\");\n/* harmony import */ var _foundation_util_imageLoader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./foundation.util.imageLoader */ \"./js/foundation.util.imageLoader.js\");\n/* harmony import */ var _foundation_core_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./foundation.core.utils */ \"./js/foundation.core.utils.js\");\n/* harmony import */ var _foundation_core_plugin__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./foundation.core.plugin */ \"./js/foundation.core.plugin.js\");\n/* harmony import */ var _foundation_util_touch__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./foundation.util.touch */ \"./js/foundation.util.touch.js\");\n\n\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\n\n\n\n\n\n\n/**\n * Orbit module.\n * @module foundation.orbit\n * @requires foundation.util.keyboard\n * @requires foundation.util.motion\n * @requires foundation.util.timer\n * @requires foundation.util.imageLoader\n * @requires foundation.util.touch\n */\n\nvar Orbit =\n/*#__PURE__*/\nfunction (_Plugin) {\n  _inherits(Orbit, _Plugin);\n\n  function Orbit() {\n    _classCallCheck(this, Orbit);\n\n    return _possibleConstructorReturn(this, _getPrototypeOf(Orbit).apply(this, arguments));\n  }\n\n  _createClass(Orbit, [{\n    key: \"_setup\",\n\n    /**\n    * Creates a new instance of an orbit carousel.\n    * @class\n    * @name Orbit\n    * @param {jQuery} element - jQuery object to make into an Orbit Carousel.\n    * @param {Object} options - Overrides to the default plugin settings.\n    */\n    value: function _setup(element, options) {\n      this.$element = element;\n      this.options = jquery__WEBPACK_IMPORTED_MODULE_0___default.a.extend({}, Orbit.defaults, this.$element.data(), options);\n      this.className = 'Orbit'; // ie9 back compat\n\n      _foundation_util_touch__WEBPACK_IMPORTED_MODULE_7__[\"Touch\"].init(jquery__WEBPACK_IMPORTED_MODULE_0___default.a); // Touch init is idempotent, we just need to make sure it's initialied.\n\n      this._init();\n\n      _foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_1__[\"Keyboard\"].register('Orbit', {\n        'ltr': {\n          'ARROW_RIGHT': 'next',\n          'ARROW_LEFT': 'previous'\n        },\n        'rtl': {\n          'ARROW_LEFT': 'next',\n          'ARROW_RIGHT': 'previous'\n        }\n      });\n    }\n    /**\n    * Initializes the plugin by creating jQuery collections, setting attributes, and starting the animation.\n    * @function\n    * @private\n    */\n\n  }, {\n    key: \"_init\",\n    value: function _init() {\n      // @TODO: consider discussion on PR #9278 about DOM pollution by changeSlide\n      this._reset();\n\n      this.$wrapper = this.$element.find(\".\".concat(this.options.containerClass));\n      this.$slides = this.$element.find(\".\".concat(this.options.slideClass));\n      var $images = this.$element.find('img'),\n          initActive = this.$slides.filter('.is-active'),\n          id = this.$element[0].id || Object(_foundation_core_utils__WEBPACK_IMPORTED_MODULE_5__[\"GetYoDigits\"])(6, 'orbit');\n      this.$element.attr({\n        'data-resize': id,\n        'id': id\n      });\n\n      if (!initActive.length) {\n        this.$slides.eq(0).addClass('is-active');\n      }\n\n      if (!this.options.useMUI) {\n        this.$slides.addClass('no-motionui');\n      }\n\n      if ($images.length) {\n        Object(_foundation_util_imageLoader__WEBPACK_IMPORTED_MODULE_4__[\"onImagesLoaded\"])($images, this._prepareForOrbit.bind(this));\n      } else {\n        this._prepareForOrbit(); //hehe\n\n      }\n\n      if (this.options.bullets) {\n        this._loadBullets();\n      }\n\n      this._events();\n\n      if (this.options.autoPlay && this.$slides.length > 1) {\n        this.geoSync();\n      }\n\n      if (this.options.accessible) {\n        // allow wrapper to be focusable to enable arrow navigation\n        this.$wrapper.attr('tabindex', 0);\n      }\n    }\n    /**\n    * Creates a jQuery collection of bullets, if they are being used.\n    * @function\n    * @private\n    */\n\n  }, {\n    key: \"_loadBullets\",\n    value: function _loadBullets() {\n      this.$bullets = this.$element.find(\".\".concat(this.options.boxOfBullets)).find('button');\n    }\n    /**\n    * Sets a `timer` object on the orbit, and starts the counter for the next slide.\n    * @function\n    */\n\n  }, {\n    key: \"geoSync\",\n    value: function geoSync() {\n      var _this = this;\n\n      this.timer = new _foundation_util_timer__WEBPACK_IMPORTED_MODULE_3__[\"Timer\"](this.$element, {\n        duration: this.options.timerDelay,\n        infinite: false\n      }, function () {\n        _this.changeSlide(true);\n      });\n      this.timer.start();\n    }\n    /**\n    * Sets wrapper and slide heights for the orbit.\n    * @function\n    * @private\n    */\n\n  }, {\n    key: \"_prepareForOrbit\",\n    value: function _prepareForOrbit() {\n      var _this = this;\n\n      this._setWrapperHeight();\n    }\n    /**\n    * Calulates the height of each slide in the collection, and uses the tallest one for the wrapper height.\n    * @function\n    * @private\n    * @param {Function} cb - a callback function to fire when complete.\n    */\n\n  }, {\n    key: \"_setWrapperHeight\",\n    value: function _setWrapperHeight(cb) {\n      //rewrite this to `for` loop\n      var max = 0,\n          temp,\n          counter = 0,\n          _this = this;\n\n      this.$slides.each(function () {\n        temp = this.getBoundingClientRect().height;\n        jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).attr('data-slide', counter); // hide all slides but the active one\n\n        if (!/mui/g.test(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this)[0].className) && _this.$slides.filter('.is-active')[0] !== _this.$slides.eq(counter)[0]) {\n          jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).css({\n            'display': 'none'\n          });\n        }\n\n        max = temp > max ? temp : max;\n        counter++;\n      });\n\n      if (counter === this.$slides.length) {\n        this.$wrapper.css({\n          'height': max\n        }); //only change the wrapper height property once.\n\n        if (cb) {\n          cb(max);\n        } //fire callback with max height dimension.\n\n      }\n    }\n    /**\n    * Sets the max-height of each slide.\n    * @function\n    * @private\n    */\n\n  }, {\n    key: \"_setSlideHeight\",\n    value: function _setSlideHeight(height) {\n      this.$slides.each(function () {\n        jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).css('max-height', height);\n      });\n    }\n    /**\n    * Adds event listeners to basically everything within the element.\n    * @function\n    * @private\n    */\n\n  }, {\n    key: \"_events\",\n    value: function _events() {\n      var _this = this; //***************************************\n      //**Now using custom event - thanks to:**\n      //**      Yohai Ararat of Toronto      **\n      //***************************************\n      //\n\n\n      this.$element.off('.resizeme.zf.trigger').on({\n        'resizeme.zf.trigger': this._prepareForOrbit.bind(this)\n      });\n\n      if (this.$slides.length > 1) {\n        if (this.options.swipe) {\n          this.$slides.off('swipeleft.zf.orbit swiperight.zf.orbit').on('swipeleft.zf.orbit', function (e) {\n            e.preventDefault();\n\n            _this.changeSlide(true);\n          }).on('swiperight.zf.orbit', function (e) {\n            e.preventDefault();\n\n            _this.changeSlide(false);\n          });\n        } //***************************************\n\n\n        if (this.options.autoPlay) {\n          this.$slides.on('click.zf.orbit', function () {\n            _this.$element.data('clickedOn', _this.$element.data('clickedOn') ? false : true);\n\n            _this.timer[_this.$element.data('clickedOn') ? 'pause' : 'start']();\n          });\n\n          if (this.options.pauseOnHover) {\n            this.$element.on('mouseenter.zf.orbit', function () {\n              _this.timer.pause();\n            }).on('mouseleave.zf.orbit', function () {\n              if (!_this.$element.data('clickedOn')) {\n                _this.timer.start();\n              }\n            });\n          }\n        }\n\n        if (this.options.navButtons) {\n          var $controls = this.$element.find(\".\".concat(this.options.nextClass, \", .\").concat(this.options.prevClass));\n          $controls.attr('tabindex', 0) //also need to handle enter/return and spacebar key presses\n          .on('click.zf.orbit touchend.zf.orbit', function (e) {\n            e.preventDefault();\n\n            _this.changeSlide(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).hasClass(_this.options.nextClass));\n          });\n        }\n\n        if (this.options.bullets) {\n          this.$bullets.on('click.zf.orbit touchend.zf.orbit', function () {\n            if (/is-active/g.test(this.className)) {\n              return false;\n            } //if this is active, kick out of function.\n\n\n            var idx = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).data('slide'),\n                ltr = idx > _this.$slides.filter('.is-active').data('slide'),\n                $slide = _this.$slides.eq(idx);\n\n            _this.changeSlide(ltr, $slide, idx);\n          });\n        }\n\n        if (this.options.accessible) {\n          this.$wrapper.add(this.$bullets).on('keydown.zf.orbit', function (e) {\n            // handle keyboard event with keyboard util\n            _foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_1__[\"Keyboard\"].handleKey(e, 'Orbit', {\n              next: function next() {\n                _this.changeSlide(true);\n              },\n              previous: function previous() {\n                _this.changeSlide(false);\n              },\n              handled: function handled() {\n                // if bullet is focused, make sure focus moves\n                if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target).is(_this.$bullets)) {\n                  _this.$bullets.filter('.is-active').focus();\n                }\n              }\n            });\n          });\n        }\n      }\n    }\n    /**\n     * Resets Orbit so it can be reinitialized\n     */\n\n  }, {\n    key: \"_reset\",\n    value: function _reset() {\n      // Don't do anything if there are no slides (first run)\n      if (typeof this.$slides == 'undefined') {\n        return;\n      }\n\n      if (this.$slides.length > 1) {\n        // Remove old events\n        this.$element.off('.zf.orbit').find('*').off('.zf.orbit'); // Restart timer if autoPlay is enabled\n\n        if (this.options.autoPlay) {\n          this.timer.restart();\n        } // Reset all sliddes\n\n\n        this.$slides.each(function (el) {\n          jquery__WEBPACK_IMPORTED_MODULE_0___default()(el).removeClass('is-active is-active is-in').removeAttr('aria-live').hide();\n        }); // Show the first slide\n\n        this.$slides.first().addClass('is-active').show(); // Triggers when the slide has finished animating\n\n        this.$element.trigger('slidechange.zf.orbit', [this.$slides.first()]); // Select first bullet if bullets are present\n\n        if (this.options.bullets) {\n          this._updateBullets(0);\n        }\n      }\n    }\n    /**\n    * Changes the current slide to a new one.\n    * @function\n    * @param {Boolean} isLTR - if true the slide moves from right to left, if false the slide moves from left to right.\n    * @param {jQuery} chosenSlide - the jQuery element of the slide to show next, if one is selected.\n    * @param {Number} idx - the index of the new slide in its collection, if one chosen.\n    * @fires Orbit#slidechange\n    */\n\n  }, {\n    key: \"changeSlide\",\n    value: function changeSlide(isLTR, chosenSlide, idx) {\n      if (!this.$slides) {\n        return;\n      } // Don't freak out if we're in the middle of cleanup\n\n\n      var $curSlide = this.$slides.filter('.is-active').eq(0);\n\n      if (/mui/g.test($curSlide[0].className)) {\n        return false;\n      } //if the slide is currently animating, kick out of the function\n\n\n      var $firstSlide = this.$slides.first(),\n          $lastSlide = this.$slides.last(),\n          dirIn = isLTR ? 'Right' : 'Left',\n          dirOut = isLTR ? 'Left' : 'Right',\n          _this = this,\n          $newSlide;\n\n      if (!chosenSlide) {\n        //most of the time, this will be auto played or clicked from the navButtons.\n        $newSlide = isLTR ? //if wrapping enabled, check to see if there is a `next` or `prev` sibling, if not, select the first or last slide to fill in. if wrapping not enabled, attempt to select `next` or `prev`, if there's nothing there, the function will kick out on next step. CRAZY NESTED TERNARIES!!!!!\n        this.options.infiniteWrap ? $curSlide.next(\".\".concat(this.options.slideClass)).length ? $curSlide.next(\".\".concat(this.options.slideClass)) : $firstSlide : $curSlide.next(\".\".concat(this.options.slideClass)) : //pick next slide if moving left to right\n        this.options.infiniteWrap ? $curSlide.prev(\".\".concat(this.options.slideClass)).length ? $curSlide.prev(\".\".concat(this.options.slideClass)) : $lastSlide : $curSlide.prev(\".\".concat(this.options.slideClass)); //pick prev slide if moving right to left\n      } else {\n        $newSlide = chosenSlide;\n      }\n\n      if ($newSlide.length) {\n        /**\n        * Triggers before the next slide starts animating in and only if a next slide has been found.\n        * @event Orbit#beforeslidechange\n        */\n        this.$element.trigger('beforeslidechange.zf.orbit', [$curSlide, $newSlide]);\n\n        if (this.options.bullets) {\n          idx = idx || this.$slides.index($newSlide); //grab index to update bullets\n\n          this._updateBullets(idx);\n        }\n\n        if (this.options.useMUI && !this.$element.is(':hidden')) {\n          _foundation_util_motion__WEBPACK_IMPORTED_MODULE_2__[\"Motion\"].animateIn($newSlide.addClass('is-active'), this.options[\"animInFrom\".concat(dirIn)], function () {\n            $newSlide.css({\n              'display': 'block'\n            }).attr('aria-live', 'polite');\n          });\n          _foundation_util_motion__WEBPACK_IMPORTED_MODULE_2__[\"Motion\"].animateOut($curSlide.removeClass('is-active'), this.options[\"animOutTo\".concat(dirOut)], function () {\n            $curSlide.removeAttr('aria-live');\n\n            if (_this.options.autoPlay && !_this.timer.isPaused) {\n              _this.timer.restart();\n            } //do stuff?\n\n          });\n        } else {\n          $curSlide.removeClass('is-active is-in').removeAttr('aria-live').hide();\n          $newSlide.addClass('is-active is-in').attr('aria-live', 'polite').show();\n\n          if (this.options.autoPlay && !this.timer.isPaused) {\n            this.timer.restart();\n          }\n        }\n        /**\n        * Triggers when the slide has finished animating in.\n        * @event Orbit#slidechange\n        */\n\n\n        this.$element.trigger('slidechange.zf.orbit', [$newSlide]);\n      }\n    }\n    /**\n    * Updates the active state of the bullets, if displayed.\n    * Move the descriptor of the current slide `[data-slide-active-label]` to the newly active bullet.\n    * If no `[data-slide-active-label]` is set, will move the exceeding `span` element.\n    *\n    * @function\n    * @private\n    * @param {Number} idx - the index of the current slide.\n    */\n\n  }, {\n    key: \"_updateBullets\",\n    value: function _updateBullets(idx) {\n      var $oldBullet = this.$bullets.filter('.is-active');\n      var $othersBullets = this.$bullets.not('.is-active');\n      var $newBullet = this.$bullets.eq(idx);\n      $oldBullet.removeClass('is-active').blur();\n      $newBullet.addClass('is-active'); // Find the descriptor for the current slide to move it to the new slide button\n\n      var activeStateDescriptor = $oldBullet.children('[data-slide-active-label]').last(); // If not explicitely given, search for the last \"exceeding\" span element (compared to others bullets).\n\n      if (!activeStateDescriptor.length) {\n        var spans = $oldBullet.children('span');\n        var spanCountInOthersBullets = $othersBullets.toArray().map(function (b) {\n          return jquery__WEBPACK_IMPORTED_MODULE_0___default()(b).children('span').length;\n        }); // If there is an exceeding span element, use it as current slide descriptor\n\n        if (spanCountInOthersBullets.every(function (count) {\n          return count < spans.length;\n        })) {\n          activeStateDescriptor = spans.last();\n          activeStateDescriptor.attr('data-slide-active-label', '');\n        }\n      } // Move the current slide descriptor to the new slide button\n\n\n      if (activeStateDescriptor.length) {\n        activeStateDescriptor.detach();\n        $newBullet.append(activeStateDescriptor);\n      }\n    }\n    /**\n    * Destroys the carousel and hides the element.\n    * @function\n    */\n\n  }, {\n    key: \"_destroy\",\n    value: function _destroy() {\n      this.$element.off('.zf.orbit').find('*').off('.zf.orbit').end().hide();\n    }\n  }]);\n\n  return Orbit;\n}(_foundation_core_plugin__WEBPACK_IMPORTED_MODULE_6__[\"Plugin\"]);\n\nOrbit.defaults = {\n  /**\n  * Tells the JS to look for and loadBullets.\n  * @option\n   * @type {boolean}\n  * @default true\n  */\n  bullets: true,\n\n  /**\n  * Tells the JS to apply event listeners to nav buttons\n  * @option\n   * @type {boolean}\n  * @default true\n  */\n  navButtons: true,\n\n  /**\n  * motion-ui animation class to apply\n  * @option\n   * @type {string}\n  * @default 'slide-in-right'\n  */\n  animInFromRight: 'slide-in-right',\n\n  /**\n  * motion-ui animation class to apply\n  * @option\n   * @type {string}\n  * @default 'slide-out-right'\n  */\n  animOutToRight: 'slide-out-right',\n\n  /**\n  * motion-ui animation class to apply\n  * @option\n   * @type {string}\n  * @default 'slide-in-left'\n  *\n  */\n  animInFromLeft: 'slide-in-left',\n\n  /**\n  * motion-ui animation class to apply\n  * @option\n   * @type {string}\n  * @default 'slide-out-left'\n  */\n  animOutToLeft: 'slide-out-left',\n\n  /**\n  * Allows Orbit to automatically animate on page load.\n  * @option\n   * @type {boolean}\n  * @default true\n  */\n  autoPlay: true,\n\n  /**\n  * Amount of time, in ms, between slide transitions\n  * @option\n   * @type {number}\n  * @default 5000\n  */\n  timerDelay: 5000,\n\n  /**\n  * Allows Orbit to infinitely loop through the slides\n  * @option\n   * @type {boolean}\n  * @default true\n  */\n  infiniteWrap: true,\n\n  /**\n  * Allows the Orbit slides to bind to swipe events for mobile, requires an additional util library\n  * @option\n   * @type {boolean}\n  * @default true\n  */\n  swipe: true,\n\n  /**\n  * Allows the timing function to pause animation on hover.\n  * @option\n   * @type {boolean}\n  * @default true\n  */\n  pauseOnHover: true,\n\n  /**\n  * Allows Orbit to bind keyboard events to the slider, to animate frames with arrow keys\n  * @option\n   * @type {boolean}\n  * @default true\n  */\n  accessible: true,\n\n  /**\n  * Class applied to the container of Orbit\n  * @option\n   * @type {string}\n  * @default 'orbit-container'\n  */\n  containerClass: 'orbit-container',\n\n  /**\n  * Class applied to individual slides.\n  * @option\n   * @type {string}\n  * @default 'orbit-slide'\n  */\n  slideClass: 'orbit-slide',\n\n  /**\n  * Class applied to the bullet container. You're welcome.\n  * @option\n   * @type {string}\n  * @default 'orbit-bullets'\n  */\n  boxOfBullets: 'orbit-bullets',\n\n  /**\n  * Class applied to the `next` navigation button.\n  * @option\n   * @type {string}\n  * @default 'orbit-next'\n  */\n  nextClass: 'orbit-next',\n\n  /**\n  * Class applied to the `previous` navigation button.\n  * @option\n   * @type {string}\n  * @default 'orbit-previous'\n  */\n  prevClass: 'orbit-previous',\n\n  /**\n  * Boolean to flag the js to use motion ui classes or not. Default to true for backwards compatibility.\n  * @option\n   * @type {boolean}\n  * @default true\n  */\n  useMUI: true\n};\n\n\n//# sourceURL=webpack:///./js/foundation.orbit.js?");

  /***/
}),

/***/ "./js/foundation.positionable.js":
/*!***************************************!*\
  !*** ./js/foundation.positionable.js ***!
  \***************************************/
/*! exports provided: Positionable */
/***/ (function (module, __webpack_exports__, __webpack_require__) {

  "use strict";
  eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Positionable\", function() { return Positionable; });\n/* harmony import */ var _foundation_util_box__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./foundation.util.box */ \"./js/foundation.util.box.js\");\n/* harmony import */ var _foundation_core_plugin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./foundation.core.plugin */ \"./js/foundation.core.plugin.js\");\n/* harmony import */ var _foundation_core_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./foundation.core.utils */ \"./js/foundation.core.utils.js\");\n\n\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\n\nvar POSITIONS = ['left', 'right', 'top', 'bottom'];\nvar VERTICAL_ALIGNMENTS = ['top', 'bottom', 'center'];\nvar HORIZONTAL_ALIGNMENTS = ['left', 'right', 'center'];\nvar ALIGNMENTS = {\n  'left': VERTICAL_ALIGNMENTS,\n  'right': VERTICAL_ALIGNMENTS,\n  'top': HORIZONTAL_ALIGNMENTS,\n  'bottom': HORIZONTAL_ALIGNMENTS\n};\n\nfunction nextItem(item, array) {\n  var currentIdx = array.indexOf(item);\n\n  if (currentIdx === array.length - 1) {\n    return array[0];\n  } else {\n    return array[currentIdx + 1];\n  }\n}\n\nvar Positionable =\n/*#__PURE__*/\nfunction (_Plugin) {\n  _inherits(Positionable, _Plugin);\n\n  function Positionable() {\n    _classCallCheck(this, Positionable);\n\n    return _possibleConstructorReturn(this, _getPrototypeOf(Positionable).apply(this, arguments));\n  }\n\n  _createClass(Positionable, [{\n    key: \"_init\",\n\n    /**\n     * Abstract class encapsulating the tether-like explicit positioning logic\n     * including repositioning based on overlap.\n     * Expects classes to define defaults for vOffset, hOffset, position,\n     * alignment, allowOverlap, and allowBottomOverlap. They can do this by\n     * extending the defaults, or (for now recommended due to the way docs are\n     * generated) by explicitly declaring them.\n     *\n     **/\n    value: function _init() {\n      this.triedPositions = {};\n      this.position = this.options.position === 'auto' ? this._getDefaultPosition() : this.options.position;\n      this.alignment = this.options.alignment === 'auto' ? this._getDefaultAlignment() : this.options.alignment;\n      this.originalPosition = this.position;\n      this.originalAlignment = this.alignment;\n    }\n  }, {\n    key: \"_getDefaultPosition\",\n    value: function _getDefaultPosition() {\n      return 'bottom';\n    }\n  }, {\n    key: \"_getDefaultAlignment\",\n    value: function _getDefaultAlignment() {\n      switch (this.position) {\n        case 'bottom':\n        case 'top':\n          return Object(_foundation_core_utils__WEBPACK_IMPORTED_MODULE_2__[\"rtl\"])() ? 'right' : 'left';\n\n        case 'left':\n        case 'right':\n          return 'bottom';\n      }\n    }\n    /**\n     * Adjusts the positionable possible positions by iterating through alignments\n     * and positions.\n     * @function\n     * @private\n     */\n\n  }, {\n    key: \"_reposition\",\n    value: function _reposition() {\n      if (this._alignmentsExhausted(this.position)) {\n        this.position = nextItem(this.position, POSITIONS);\n        this.alignment = ALIGNMENTS[this.position][0];\n      } else {\n        this._realign();\n      }\n    }\n    /**\n     * Adjusts the dropdown pane possible positions by iterating through alignments\n     * on the current position.\n     * @function\n     * @private\n     */\n\n  }, {\n    key: \"_realign\",\n    value: function _realign() {\n      this._addTriedPosition(this.position, this.alignment);\n\n      this.alignment = nextItem(this.alignment, ALIGNMENTS[this.position]);\n    }\n  }, {\n    key: \"_addTriedPosition\",\n    value: function _addTriedPosition(position, alignment) {\n      this.triedPositions[position] = this.triedPositions[position] || [];\n      this.triedPositions[position].push(alignment);\n    }\n  }, {\n    key: \"_positionsExhausted\",\n    value: function _positionsExhausted() {\n      var isExhausted = true;\n\n      for (var i = 0; i < POSITIONS.length; i++) {\n        isExhausted = isExhausted && this._alignmentsExhausted(POSITIONS[i]);\n      }\n\n      return isExhausted;\n    }\n  }, {\n    key: \"_alignmentsExhausted\",\n    value: function _alignmentsExhausted(position) {\n      return this.triedPositions[position] && this.triedPositions[position].length == ALIGNMENTS[position].length;\n    } // When we're trying to center, we don't want to apply offset that's going to\n    // take us just off center, so wrap around to return 0 for the appropriate\n    // offset in those alignments.  TODO: Figure out if we want to make this\n    // configurable behavior... it feels more intuitive, especially for tooltips, but\n    // it's possible someone might actually want to start from center and then nudge\n    // slightly off.\n\n  }, {\n    key: \"_getVOffset\",\n    value: function _getVOffset() {\n      return this.options.vOffset;\n    }\n  }, {\n    key: \"_getHOffset\",\n    value: function _getHOffset() {\n      return this.options.hOffset;\n    }\n  }, {\n    key: \"_setPosition\",\n    value: function _setPosition($anchor, $element, $parent) {\n      if ($anchor.attr('aria-expanded') === 'false') {\n        return false;\n      }\n\n      if (!this.options.allowOverlap) {\n        // restore original position & alignment before checking overlap\n        this.position = this.originalPosition;\n        this.alignment = this.originalAlignment;\n      }\n\n      $element.offset(_foundation_util_box__WEBPACK_IMPORTED_MODULE_0__[\"Box\"].GetExplicitOffsets($element, $anchor, this.position, this.alignment, this._getVOffset(), this._getHOffset()));\n\n      if (!this.options.allowOverlap) {\n        var minOverlap = 100000000; // default coordinates to how we start, in case we can't figure out better\n\n        var minCoordinates = {\n          position: this.position,\n          alignment: this.alignment\n        };\n\n        while (!this._positionsExhausted()) {\n          var overlap = _foundation_util_box__WEBPACK_IMPORTED_MODULE_0__[\"Box\"].OverlapArea($element, $parent, false, false, this.options.allowBottomOverlap);\n\n          if (overlap === 0) {\n            return;\n          }\n\n          if (overlap < minOverlap) {\n            minOverlap = overlap;\n            minCoordinates = {\n              position: this.position,\n              alignment: this.alignment\n            };\n          }\n\n          this._reposition();\n\n          $element.offset(_foundation_util_box__WEBPACK_IMPORTED_MODULE_0__[\"Box\"].GetExplicitOffsets($element, $anchor, this.position, this.alignment, this._getVOffset(), this._getHOffset()));\n        } // If we get through the entire loop, there was no non-overlapping\n        // position available. Pick the version with least overlap.\n\n\n        this.position = minCoordinates.position;\n        this.alignment = minCoordinates.alignment;\n        $element.offset(_foundation_util_box__WEBPACK_IMPORTED_MODULE_0__[\"Box\"].GetExplicitOffsets($element, $anchor, this.position, this.alignment, this._getVOffset(), this._getHOffset()));\n      }\n    }\n  }]);\n\n  return Positionable;\n}(_foundation_core_plugin__WEBPACK_IMPORTED_MODULE_1__[\"Plugin\"]);\n\nPositionable.defaults = {\n  /**\n   * Position of positionable relative to anchor. Can be left, right, bottom, top, or auto.\n   * @option\n   * @type {string}\n   * @default 'auto'\n   */\n  position: 'auto',\n\n  /**\n   * Alignment of positionable relative to anchor. Can be left, right, bottom, top, center, or auto.\n   * @option\n   * @type {string}\n   * @default 'auto'\n   */\n  alignment: 'auto',\n\n  /**\n   * Allow overlap of container/window. If false, dropdown positionable first\n   * try to position as defined by data-position and data-alignment, but\n   * reposition if it would cause an overflow.\n   * @option\n   * @type {boolean}\n   * @default false\n   */\n  allowOverlap: false,\n\n  /**\n   * Allow overlap of only the bottom of the container. This is the most common\n   * behavior for dropdowns, allowing the dropdown to extend the bottom of the\n   * screen but not otherwise influence or break out of the container.\n   * @option\n   * @type {boolean}\n   * @default true\n   */\n  allowBottomOverlap: true,\n\n  /**\n   * Number of pixels the positionable should be separated vertically from anchor\n   * @option\n   * @type {number}\n   * @default 0\n   */\n  vOffset: 0,\n\n  /**\n   * Number of pixels the positionable should be separated horizontally from anchor\n   * @option\n   * @type {number}\n   * @default 0\n   */\n  hOffset: 0\n};\n\n\n//# sourceURL=webpack:///./js/foundation.positionable.js?");

  /***/
}),

/***/ "./js/foundation.responsiveAccordionTabs.js":
/*!**************************************************!*\
  !*** ./js/foundation.responsiveAccordionTabs.js ***!
  \**************************************************/
/*! exports provided: ResponsiveAccordionTabs */
/***/ (function (module, __webpack_exports__, __webpack_require__) {

  "use strict";
  eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ResponsiveAccordionTabs\", function() { return ResponsiveAccordionTabs; });\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ \"jquery\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _foundation_util_mediaQuery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./foundation.util.mediaQuery */ \"./js/foundation.util.mediaQuery.js\");\n/* harmony import */ var _foundation_core_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./foundation.core.utils */ \"./js/foundation.core.utils.js\");\n/* harmony import */ var _foundation_core_plugin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./foundation.core.plugin */ \"./js/foundation.core.plugin.js\");\n/* harmony import */ var _foundation_accordion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./foundation.accordion */ \"./js/foundation.accordion.js\");\n/* harmony import */ var _foundation_tabs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./foundation.tabs */ \"./js/foundation.tabs.js\");\n\n\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\n\n\n\n // The plugin matches the plugin classes with these plugin instances.\n\nvar MenuPlugins = {\n  tabs: {\n    cssClass: 'tabs',\n    plugin: _foundation_tabs__WEBPACK_IMPORTED_MODULE_5__[\"Tabs\"],\n    open: function open(plugin, target) {\n      return plugin.selectTab(target);\n    },\n    close: null\n    /* not supported */\n    ,\n    toggle: null\n    /* not supported */\n\n  },\n  accordion: {\n    cssClass: 'accordion',\n    plugin: _foundation_accordion__WEBPACK_IMPORTED_MODULE_4__[\"Accordion\"],\n    open: function open(plugin, target) {\n      return plugin.down(jquery__WEBPACK_IMPORTED_MODULE_0___default()(target));\n    },\n    close: function close(plugin, target) {\n      return plugin.up(jquery__WEBPACK_IMPORTED_MODULE_0___default()(target));\n    },\n    toggle: function toggle(plugin, target) {\n      return plugin.toggle(jquery__WEBPACK_IMPORTED_MODULE_0___default()(target));\n    }\n  }\n};\n/**\n * ResponsiveAccordionTabs module.\n * @module foundation.responsiveAccordionTabs\n * @requires foundation.util.motion\n * @requires foundation.accordion\n * @requires foundation.tabs\n */\n\nvar ResponsiveAccordionTabs =\n/*#__PURE__*/\nfunction (_Plugin) {\n  _inherits(ResponsiveAccordionTabs, _Plugin);\n\n  function ResponsiveAccordionTabs(element, options) {\n    var _this2;\n\n    _classCallCheck(this, ResponsiveAccordionTabs);\n\n    _this2 = _possibleConstructorReturn(this, _getPrototypeOf(ResponsiveAccordionTabs).call(this, element, options));\n    return _possibleConstructorReturn(_this2, _this2.options.reflow && _this2.storezfData || _assertThisInitialized(_this2));\n  }\n  /**\n   * Creates a new instance of a responsive accordion tabs.\n   * @class\n   * @name ResponsiveAccordionTabs\n   * @fires ResponsiveAccordionTabs#init\n   * @param {jQuery} element - jQuery object to make into Responsive Accordion Tabs.\n   * @param {Object} options - Overrides to the default plugin settings.\n   */\n\n\n  _createClass(ResponsiveAccordionTabs, [{\n    key: \"_setup\",\n    value: function _setup(element, options) {\n      this.$element = jquery__WEBPACK_IMPORTED_MODULE_0___default()(element);\n      this.$element.data('zfPluginBase', this);\n      this.options = jquery__WEBPACK_IMPORTED_MODULE_0___default.a.extend({}, ResponsiveAccordionTabs.defaults, this.$element.data(), options);\n      this.rules = this.$element.data('responsive-accordion-tabs');\n      this.currentMq = null;\n      this.currentRule = null;\n      this.currentPlugin = null;\n      this.className = 'ResponsiveAccordionTabs'; // ie9 back compat\n\n      if (!this.$element.attr('id')) {\n        this.$element.attr('id', Object(_foundation_core_utils__WEBPACK_IMPORTED_MODULE_2__[\"GetYoDigits\"])(6, 'responsiveaccordiontabs'));\n      }\n\n      this._init();\n\n      this._events();\n    }\n    /**\n     * Initializes the Menu by parsing the classes from the 'data-responsive-accordion-tabs' attribute on the element.\n     * @function\n     * @private\n     */\n\n  }, {\n    key: \"_init\",\n    value: function _init() {\n      _foundation_util_mediaQuery__WEBPACK_IMPORTED_MODULE_1__[\"MediaQuery\"]._init(); // The first time an Interchange plugin is initialized, this.rules is converted from a string of \"classes\" to an object of rules\n\n\n      if (typeof this.rules === 'string') {\n        var rulesTree = {}; // Parse rules from \"classes\" pulled from data attribute\n\n        var rules = this.rules.split(' '); // Iterate through every rule found\n\n        for (var i = 0; i < rules.length; i++) {\n          var rule = rules[i].split('-');\n          var ruleSize = rule.length > 1 ? rule[0] : 'small';\n          var rulePlugin = rule.length > 1 ? rule[1] : rule[0];\n\n          if (MenuPlugins[rulePlugin] !== null) {\n            rulesTree[ruleSize] = MenuPlugins[rulePlugin];\n          }\n        }\n\n        this.rules = rulesTree;\n      }\n\n      this._getAllOptions();\n\n      if (!jquery__WEBPACK_IMPORTED_MODULE_0___default.a.isEmptyObject(this.rules)) {\n        this._checkMediaQueries();\n      }\n    }\n  }, {\n    key: \"_getAllOptions\",\n    value: function _getAllOptions() {\n      //get all defaults and options\n      var _this = this;\n\n      _this.allOptions = {};\n\n      for (var key in MenuPlugins) {\n        if (MenuPlugins.hasOwnProperty(key)) {\n          var obj = MenuPlugins[key];\n\n          try {\n            var dummyPlugin = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<ul></ul>');\n            var tmpPlugin = new obj.plugin(dummyPlugin, _this.options);\n\n            for (var keyKey in tmpPlugin.options) {\n              if (tmpPlugin.options.hasOwnProperty(keyKey) && keyKey !== 'zfPlugin') {\n                var objObj = tmpPlugin.options[keyKey];\n                _this.allOptions[keyKey] = objObj;\n              }\n            }\n\n            tmpPlugin.destroy();\n          } catch (e) {}\n        }\n      }\n    }\n    /**\n     * Initializes events for the Menu.\n     * @function\n     * @private\n     */\n\n  }, {\n    key: \"_events\",\n    value: function _events() {\n      this._changedZfMediaQueryHandler = this._checkMediaQueries.bind(this);\n      jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).on('changed.zf.mediaquery', this._changedZfMediaQueryHandler);\n    }\n    /**\n     * Checks the current screen width against available media queries. If the media query has changed, and the plugin needed has changed, the plugins will swap out.\n     * @function\n     * @private\n     */\n\n  }, {\n    key: \"_checkMediaQueries\",\n    value: function _checkMediaQueries() {\n      var matchedMq,\n          _this = this; // Iterate through each rule and find the last matching rule\n\n\n      jquery__WEBPACK_IMPORTED_MODULE_0___default.a.each(this.rules, function (key) {\n        if (_foundation_util_mediaQuery__WEBPACK_IMPORTED_MODULE_1__[\"MediaQuery\"].atLeast(key)) {\n          matchedMq = key;\n        }\n      }); // No match? No dice\n\n      if (!matchedMq) return; // Plugin already initialized? We good\n\n      if (this.currentPlugin instanceof this.rules[matchedMq].plugin) return; // Remove existing plugin-specific CSS classes\n\n      jquery__WEBPACK_IMPORTED_MODULE_0___default.a.each(MenuPlugins, function (key, value) {\n        _this.$element.removeClass(value.cssClass);\n      }); // Add the CSS class for the new plugin\n\n      this.$element.addClass(this.rules[matchedMq].cssClass); // Create an instance of the new plugin\n\n      if (this.currentPlugin) {\n        //don't know why but on nested elements data zfPlugin get's lost\n        if (!this.currentPlugin.$element.data('zfPlugin') && this.storezfData) this.currentPlugin.$element.data('zfPlugin', this.storezfData);\n        this.currentPlugin.destroy();\n      }\n\n      this._handleMarkup(this.rules[matchedMq].cssClass);\n\n      this.currentRule = this.rules[matchedMq];\n      this.currentPlugin = new this.currentRule.plugin(this.$element, this.options);\n      this.storezfData = this.currentPlugin.$element.data('zfPlugin');\n    }\n  }, {\n    key: \"_handleMarkup\",\n    value: function _handleMarkup(toSet) {\n      var _this = this,\n          fromString = 'accordion';\n\n      var $panels = jquery__WEBPACK_IMPORTED_MODULE_0___default()('[data-tabs-content=' + this.$element.attr('id') + ']');\n      if ($panels.length) fromString = 'tabs';\n\n      if (fromString === toSet) {\n        return;\n      }\n\n      var tabsTitle = _this.allOptions.linkClass ? _this.allOptions.linkClass : 'tabs-title';\n      var tabsPanel = _this.allOptions.panelClass ? _this.allOptions.panelClass : 'tabs-panel';\n      this.$element.removeAttr('role');\n      var $liHeads = this.$element.children('.' + tabsTitle + ',[data-accordion-item]').removeClass(tabsTitle).removeClass('accordion-item').removeAttr('data-accordion-item');\n      var $liHeadsA = $liHeads.children('a').removeClass('accordion-title');\n\n      if (fromString === 'tabs') {\n        $panels = $panels.children('.' + tabsPanel).removeClass(tabsPanel).removeAttr('role').removeAttr('aria-hidden').removeAttr('aria-labelledby');\n        $panels.children('a').removeAttr('role').removeAttr('aria-controls').removeAttr('aria-selected');\n      } else {\n        $panels = $liHeads.children('[data-tab-content]').removeClass('accordion-content');\n      }\n\n      $panels.css({\n        display: '',\n        visibility: ''\n      });\n      $liHeads.css({\n        display: '',\n        visibility: ''\n      });\n\n      if (toSet === 'accordion') {\n        $panels.each(function (key, value) {\n          jquery__WEBPACK_IMPORTED_MODULE_0___default()(value).appendTo($liHeads.get(key)).addClass('accordion-content').attr('data-tab-content', '').removeClass('is-active').css({\n            height: ''\n          });\n          jquery__WEBPACK_IMPORTED_MODULE_0___default()('[data-tabs-content=' + _this.$element.attr('id') + ']').after('<div id=\"tabs-placeholder-' + _this.$element.attr('id') + '\"></div>').detach();\n          $liHeads.addClass('accordion-item').attr('data-accordion-item', '');\n          $liHeadsA.addClass('accordion-title');\n        });\n      } else if (toSet === 'tabs') {\n        var $tabsContent = jquery__WEBPACK_IMPORTED_MODULE_0___default()('[data-tabs-content=' + _this.$element.attr('id') + ']');\n        var $placeholder = jquery__WEBPACK_IMPORTED_MODULE_0___default()('#tabs-placeholder-' + _this.$element.attr('id'));\n\n        if ($placeholder.length) {\n          $tabsContent = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<div class=\"tabs-content\"></div>').insertAfter($placeholder).attr('data-tabs-content', _this.$element.attr('id'));\n          $placeholder.remove();\n        } else {\n          $tabsContent = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<div class=\"tabs-content\"></div>').insertAfter(_this.$element).attr('data-tabs-content', _this.$element.attr('id'));\n        }\n\n        $panels.each(function (key, value) {\n          var tempValue = jquery__WEBPACK_IMPORTED_MODULE_0___default()(value).appendTo($tabsContent).addClass(tabsPanel);\n          var hash = $liHeadsA.get(key).hash.slice(1);\n          var id = jquery__WEBPACK_IMPORTED_MODULE_0___default()(value).attr('id') || Object(_foundation_core_utils__WEBPACK_IMPORTED_MODULE_2__[\"GetYoDigits\"])(6, 'accordion');\n\n          if (hash !== id) {\n            if (hash !== '') {\n              jquery__WEBPACK_IMPORTED_MODULE_0___default()(value).attr('id', hash);\n            } else {\n              hash = id;\n              jquery__WEBPACK_IMPORTED_MODULE_0___default()(value).attr('id', hash);\n              jquery__WEBPACK_IMPORTED_MODULE_0___default()($liHeadsA.get(key)).attr('href', jquery__WEBPACK_IMPORTED_MODULE_0___default()($liHeadsA.get(key)).attr('href').replace('#', '') + '#' + hash);\n            }\n          }\n\n          var isActive = jquery__WEBPACK_IMPORTED_MODULE_0___default()($liHeads.get(key)).hasClass('is-active');\n\n          if (isActive) {\n            tempValue.addClass('is-active');\n          }\n        });\n        $liHeads.addClass(tabsTitle);\n      }\n\n      ;\n    }\n    /**\n     * Opens the plugin pane defined by `target`.\n     * @param {jQuery | String} target - jQuery object or string of the id of the pane to open.\n     * @see Accordion.down\n     * @see Tabs.selectTab\n     * @function\n     */\n\n  }, {\n    key: \"open\",\n    value: function open(_target) {\n      if (this.currentRule && typeof this.currentRule.open === 'function') {\n        var _this$currentRule;\n\n        return (_this$currentRule = this.currentRule).open.apply(_this$currentRule, [this.currentPlugin].concat(Array.prototype.slice.call(arguments)));\n      }\n    }\n    /**\n     * Closes the plugin pane defined by `target`. Not availaible for Tabs.\n     * @param {jQuery | String} target - jQuery object or string of the id of the pane to close.\n     * @see Accordion.up\n     * @function\n     */\n\n  }, {\n    key: \"close\",\n    value: function close(_target) {\n      if (this.currentRule && typeof this.currentRule.close === 'function') {\n        var _this$currentRule2;\n\n        return (_this$currentRule2 = this.currentRule).close.apply(_this$currentRule2, [this.currentPlugin].concat(Array.prototype.slice.call(arguments)));\n      }\n    }\n    /**\n     * Toggles the plugin pane defined by `target`. Not availaible for Tabs.\n     * @param {jQuery | String} target - jQuery object or string of the id of the pane to toggle.\n     * @see Accordion.toggle\n     * @function\n     */\n\n  }, {\n    key: \"toggle\",\n    value: function toggle(_target) {\n      if (this.currentRule && typeof this.currentRule.toggle === 'function') {\n        var _this$currentRule3;\n\n        return (_this$currentRule3 = this.currentRule).toggle.apply(_this$currentRule3, [this.currentPlugin].concat(Array.prototype.slice.call(arguments)));\n      }\n    }\n    /**\n     * Destroys the instance of the current plugin on this element, as well as the window resize handler that switches the plugins out.\n     * @function\n     */\n\n  }, {\n    key: \"_destroy\",\n    value: function _destroy() {\n      if (this.currentPlugin) this.currentPlugin.destroy();\n      jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).off('changed.zf.mediaquery', this._changedZfMediaQueryHandler);\n    }\n  }]);\n\n  return ResponsiveAccordionTabs;\n}(_foundation_core_plugin__WEBPACK_IMPORTED_MODULE_3__[\"Plugin\"]);\n\nResponsiveAccordionTabs.defaults = {};\n\n\n//# sourceURL=webpack:///./js/foundation.responsiveAccordionTabs.js?");

  /***/
}),

/***/ "./js/foundation.responsiveMenu.js":
/*!*****************************************!*\
  !*** ./js/foundation.responsiveMenu.js ***!
  \*****************************************/
/*! exports provided: ResponsiveMenu */
/***/ (function (module, __webpack_exports__, __webpack_require__) {

  "use strict";
  eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ResponsiveMenu\", function() { return ResponsiveMenu; });\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ \"jquery\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _foundation_util_mediaQuery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./foundation.util.mediaQuery */ \"./js/foundation.util.mediaQuery.js\");\n/* harmony import */ var _foundation_core_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./foundation.core.utils */ \"./js/foundation.core.utils.js\");\n/* harmony import */ var _foundation_core_plugin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./foundation.core.plugin */ \"./js/foundation.core.plugin.js\");\n/* harmony import */ var _foundation_dropdownMenu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./foundation.dropdownMenu */ \"./js/foundation.dropdownMenu.js\");\n/* harmony import */ var _foundation_drilldown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./foundation.drilldown */ \"./js/foundation.drilldown.js\");\n/* harmony import */ var _foundation_accordionMenu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./foundation.accordionMenu */ \"./js/foundation.accordionMenu.js\");\n\n\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\n\n\n\n\n\nvar MenuPlugins = {\n  dropdown: {\n    cssClass: 'dropdown',\n    plugin: _foundation_dropdownMenu__WEBPACK_IMPORTED_MODULE_4__[\"DropdownMenu\"]\n  },\n  drilldown: {\n    cssClass: 'drilldown',\n    plugin: _foundation_drilldown__WEBPACK_IMPORTED_MODULE_5__[\"Drilldown\"]\n  },\n  accordion: {\n    cssClass: 'accordion-menu',\n    plugin: _foundation_accordionMenu__WEBPACK_IMPORTED_MODULE_6__[\"AccordionMenu\"]\n  }\n}; // import \"foundation.util.triggers.js\";\n\n/**\n * ResponsiveMenu module.\n * @module foundation.responsiveMenu\n * @requires foundation.util.triggers\n * @requires foundation.util.mediaQuery\n */\n\nvar ResponsiveMenu =\n/*#__PURE__*/\nfunction (_Plugin) {\n  _inherits(ResponsiveMenu, _Plugin);\n\n  function ResponsiveMenu() {\n    _classCallCheck(this, ResponsiveMenu);\n\n    return _possibleConstructorReturn(this, _getPrototypeOf(ResponsiveMenu).apply(this, arguments));\n  }\n\n  _createClass(ResponsiveMenu, [{\n    key: \"_setup\",\n\n    /**\n     * Creates a new instance of a responsive menu.\n     * @class\n     * @name ResponsiveMenu\n     * @fires ResponsiveMenu#init\n     * @param {jQuery} element - jQuery object to make into a dropdown menu.\n     * @param {Object} options - Overrides to the default plugin settings.\n     */\n    value: function _setup(element, options) {\n      this.$element = jquery__WEBPACK_IMPORTED_MODULE_0___default()(element);\n      this.rules = this.$element.data('responsive-menu');\n      this.currentMq = null;\n      this.currentPlugin = null;\n      this.className = 'ResponsiveMenu'; // ie9 back compat\n\n      this._init();\n\n      this._events();\n    }\n    /**\n     * Initializes the Menu by parsing the classes from the 'data-ResponsiveMenu' attribute on the element.\n     * @function\n     * @private\n     */\n\n  }, {\n    key: \"_init\",\n    value: function _init() {\n      _foundation_util_mediaQuery__WEBPACK_IMPORTED_MODULE_1__[\"MediaQuery\"]._init(); // The first time an Interchange plugin is initialized, this.rules is converted from a string of \"classes\" to an object of rules\n\n\n      if (typeof this.rules === 'string') {\n        var rulesTree = {}; // Parse rules from \"classes\" pulled from data attribute\n\n        var rules = this.rules.split(' '); // Iterate through every rule found\n\n        for (var i = 0; i < rules.length; i++) {\n          var rule = rules[i].split('-');\n          var ruleSize = rule.length > 1 ? rule[0] : 'small';\n          var rulePlugin = rule.length > 1 ? rule[1] : rule[0];\n\n          if (MenuPlugins[rulePlugin] !== null) {\n            rulesTree[ruleSize] = MenuPlugins[rulePlugin];\n          }\n        }\n\n        this.rules = rulesTree;\n      }\n\n      if (!jquery__WEBPACK_IMPORTED_MODULE_0___default.a.isEmptyObject(this.rules)) {\n        this._checkMediaQueries();\n      } // Add data-mutate since children may need it.\n\n\n      this.$element.attr('data-mutate', this.$element.attr('data-mutate') || Object(_foundation_core_utils__WEBPACK_IMPORTED_MODULE_2__[\"GetYoDigits\"])(6, 'responsive-menu'));\n    }\n    /**\n     * Initializes events for the Menu.\n     * @function\n     * @private\n     */\n\n  }, {\n    key: \"_events\",\n    value: function _events() {\n      var _this = this;\n\n      jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).on('changed.zf.mediaquery', function () {\n        _this._checkMediaQueries();\n      }); // $(window).on('resize.zf.ResponsiveMenu', function() {\n      //   _this._checkMediaQueries();\n      // });\n    }\n    /**\n     * Checks the current screen width against available media queries. If the media query has changed, and the plugin needed has changed, the plugins will swap out.\n     * @function\n     * @private\n     */\n\n  }, {\n    key: \"_checkMediaQueries\",\n    value: function _checkMediaQueries() {\n      var matchedMq,\n          _this = this; // Iterate through each rule and find the last matching rule\n\n\n      jquery__WEBPACK_IMPORTED_MODULE_0___default.a.each(this.rules, function (key) {\n        if (_foundation_util_mediaQuery__WEBPACK_IMPORTED_MODULE_1__[\"MediaQuery\"].atLeast(key)) {\n          matchedMq = key;\n        }\n      }); // No match? No dice\n\n      if (!matchedMq) return; // Plugin already initialized? We good\n\n      if (this.currentPlugin instanceof this.rules[matchedMq].plugin) return; // Remove existing plugin-specific CSS classes\n\n      jquery__WEBPACK_IMPORTED_MODULE_0___default.a.each(MenuPlugins, function (key, value) {\n        _this.$element.removeClass(value.cssClass);\n      }); // Add the CSS class for the new plugin\n\n      this.$element.addClass(this.rules[matchedMq].cssClass); // Create an instance of the new plugin\n\n      if (this.currentPlugin) this.currentPlugin.destroy();\n      this.currentPlugin = new this.rules[matchedMq].plugin(this.$element, {});\n    }\n    /**\n     * Destroys the instance of the current plugin on this element, as well as the window resize handler that switches the plugins out.\n     * @function\n     */\n\n  }, {\n    key: \"_destroy\",\n    value: function _destroy() {\n      this.currentPlugin.destroy();\n      jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).off('.zf.ResponsiveMenu');\n    }\n  }]);\n\n  return ResponsiveMenu;\n}(_foundation_core_plugin__WEBPACK_IMPORTED_MODULE_3__[\"Plugin\"]);\n\nResponsiveMenu.defaults = {};\n\n\n//# sourceURL=webpack:///./js/foundation.responsiveMenu.js?");

  /***/
}),

/***/ "./js/foundation.responsiveToggle.js":
/*!*******************************************!*\
  !*** ./js/foundation.responsiveToggle.js ***!
  \*******************************************/
/*! exports provided: ResponsiveToggle */
/***/ (function (module, __webpack_exports__, __webpack_require__) {

  "use strict";
  eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ResponsiveToggle\", function() { return ResponsiveToggle; });\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ \"jquery\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _foundation_util_mediaQuery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./foundation.util.mediaQuery */ \"./js/foundation.util.mediaQuery.js\");\n/* harmony import */ var _foundation_util_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./foundation.util.motion */ \"./js/foundation.util.motion.js\");\n/* harmony import */ var _foundation_core_plugin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./foundation.core.plugin */ \"./js/foundation.core.plugin.js\");\n\n\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\n\n\n/**\n * ResponsiveToggle module.\n * @module foundation.responsiveToggle\n * @requires foundation.util.mediaQuery\n * @requires foundation.util.motion\n */\n\nvar ResponsiveToggle =\n/*#__PURE__*/\nfunction (_Plugin) {\n  _inherits(ResponsiveToggle, _Plugin);\n\n  function ResponsiveToggle() {\n    _classCallCheck(this, ResponsiveToggle);\n\n    return _possibleConstructorReturn(this, _getPrototypeOf(ResponsiveToggle).apply(this, arguments));\n  }\n\n  _createClass(ResponsiveToggle, [{\n    key: \"_setup\",\n\n    /**\n     * Creates a new instance of Tab Bar.\n     * @class\n     * @name ResponsiveToggle\n     * @fires ResponsiveToggle#init\n     * @param {jQuery} element - jQuery object to attach tab bar functionality to.\n     * @param {Object} options - Overrides to the default plugin settings.\n     */\n    value: function _setup(element, options) {\n      this.$element = jquery__WEBPACK_IMPORTED_MODULE_0___default()(element);\n      this.options = jquery__WEBPACK_IMPORTED_MODULE_0___default.a.extend({}, ResponsiveToggle.defaults, this.$element.data(), options);\n      this.className = 'ResponsiveToggle'; // ie9 back compat\n\n      this._init();\n\n      this._events();\n    }\n    /**\n     * Initializes the tab bar by finding the target element, toggling element, and running update().\n     * @function\n     * @private\n     */\n\n  }, {\n    key: \"_init\",\n    value: function _init() {\n      _foundation_util_mediaQuery__WEBPACK_IMPORTED_MODULE_1__[\"MediaQuery\"]._init();\n\n      var targetID = this.$element.data('responsive-toggle');\n\n      if (!targetID) {\n        console.error('Your tab bar needs an ID of a Menu as the value of data-tab-bar.');\n      }\n\n      this.$targetMenu = jquery__WEBPACK_IMPORTED_MODULE_0___default()(\"#\".concat(targetID));\n      this.$toggler = this.$element.find('[data-toggle]').filter(function () {\n        var target = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).data('toggle');\n        return target === targetID || target === \"\";\n      });\n      this.options = jquery__WEBPACK_IMPORTED_MODULE_0___default.a.extend({}, this.options, this.$targetMenu.data()); // If they were set, parse the animation classes\n\n      if (this.options.animate) {\n        var input = this.options.animate.split(' ');\n        this.animationIn = input[0];\n        this.animationOut = input[1] || null;\n      }\n\n      this._update();\n    }\n    /**\n     * Adds necessary event handlers for the tab bar to work.\n     * @function\n     * @private\n     */\n\n  }, {\n    key: \"_events\",\n    value: function _events() {\n      var _this = this;\n\n      this._updateMqHandler = this._update.bind(this);\n      jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).on('changed.zf.mediaquery', this._updateMqHandler);\n      this.$toggler.on('click.zf.responsiveToggle', this.toggleMenu.bind(this));\n    }\n    /**\n     * Checks the current media query to determine if the tab bar should be visible or hidden.\n     * @function\n     * @private\n     */\n\n  }, {\n    key: \"_update\",\n    value: function _update() {\n      // Mobile\n      if (!_foundation_util_mediaQuery__WEBPACK_IMPORTED_MODULE_1__[\"MediaQuery\"].atLeast(this.options.hideFor)) {\n        this.$element.show();\n        this.$targetMenu.hide();\n      } // Desktop\n      else {\n          this.$element.hide();\n          this.$targetMenu.show();\n        }\n    }\n    /**\n     * Toggles the element attached to the tab bar. The toggle only happens if the screen is small enough to allow it.\n     * @function\n     * @fires ResponsiveToggle#toggled\n     */\n\n  }, {\n    key: \"toggleMenu\",\n    value: function toggleMenu() {\n      var _this2 = this;\n\n      if (!_foundation_util_mediaQuery__WEBPACK_IMPORTED_MODULE_1__[\"MediaQuery\"].atLeast(this.options.hideFor)) {\n        /**\n         * Fires when the element attached to the tab bar toggles.\n         * @event ResponsiveToggle#toggled\n         */\n        if (this.options.animate) {\n          if (this.$targetMenu.is(':hidden')) {\n            _foundation_util_motion__WEBPACK_IMPORTED_MODULE_2__[\"Motion\"].animateIn(this.$targetMenu, this.animationIn, function () {\n              _this2.$element.trigger('toggled.zf.responsiveToggle');\n\n              _this2.$targetMenu.find('[data-mutate]').triggerHandler('mutateme.zf.trigger');\n            });\n          } else {\n            _foundation_util_motion__WEBPACK_IMPORTED_MODULE_2__[\"Motion\"].animateOut(this.$targetMenu, this.animationOut, function () {\n              _this2.$element.trigger('toggled.zf.responsiveToggle');\n            });\n          }\n        } else {\n          this.$targetMenu.toggle(0);\n          this.$targetMenu.find('[data-mutate]').trigger('mutateme.zf.trigger');\n          this.$element.trigger('toggled.zf.responsiveToggle');\n        }\n      }\n    }\n  }, {\n    key: \"_destroy\",\n    value: function _destroy() {\n      this.$element.off('.zf.responsiveToggle');\n      this.$toggler.off('.zf.responsiveToggle');\n      jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).off('changed.zf.mediaquery', this._updateMqHandler);\n    }\n  }]);\n\n  return ResponsiveToggle;\n}(_foundation_core_plugin__WEBPACK_IMPORTED_MODULE_3__[\"Plugin\"]);\n\nResponsiveToggle.defaults = {\n  /**\n   * The breakpoint after which the menu is always shown, and the tab bar is hidden.\n   * @option\n   * @type {string}\n   * @default 'medium'\n   */\n  hideFor: 'medium',\n\n  /**\n   * To decide if the toggle should be animated or not.\n   * @option\n   * @type {boolean}\n   * @default false\n   */\n  animate: false\n};\n\n\n//# sourceURL=webpack:///./js/foundation.responsiveToggle.js?");

  /***/
}),

/***/ "./js/foundation.reveal.js":
/*!*********************************!*\
  !*** ./js/foundation.reveal.js ***!
  \*********************************/
/*! exports provided: Reveal */
/***/ (function (module, __webpack_exports__, __webpack_require__) {

  "use strict";
  eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Reveal\", function() { return Reveal; });\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ \"jquery\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _foundation_core_plugin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./foundation.core.plugin */ \"./js/foundation.core.plugin.js\");\n/* harmony import */ var _foundation_core_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./foundation.core.utils */ \"./js/foundation.core.utils.js\");\n/* harmony import */ var _foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./foundation.util.keyboard */ \"./js/foundation.util.keyboard.js\");\n/* harmony import */ var _foundation_util_mediaQuery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./foundation.util.mediaQuery */ \"./js/foundation.util.mediaQuery.js\");\n/* harmony import */ var _foundation_util_motion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./foundation.util.motion */ \"./js/foundation.util.motion.js\");\n/* harmony import */ var _foundation_util_triggers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./foundation.util.triggers */ \"./js/foundation.util.triggers.js\");\n/* harmony import */ var _foundation_util_touch__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./foundation.util.touch */ \"./js/foundation.util.touch.js\");\n\n\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\n\n\n\n\n\n\n/**\n * Reveal module.\n * @module foundation.reveal\n * @requires foundation.util.keyboard\n * @requires foundation.util.touch\n * @requires foundation.util.triggers\n * @requires foundation.util.mediaQuery\n * @requires foundation.util.motion if using animations\n */\n\nvar Reveal =\n/*#__PURE__*/\nfunction (_Plugin) {\n  _inherits(Reveal, _Plugin);\n\n  function Reveal() {\n    _classCallCheck(this, Reveal);\n\n    return _possibleConstructorReturn(this, _getPrototypeOf(Reveal).apply(this, arguments));\n  }\n\n  _createClass(Reveal, [{\n    key: \"_setup\",\n\n    /**\n     * Creates a new instance of Reveal.\n     * @class\n     * @name Reveal\n     * @param {jQuery} element - jQuery object to use for the modal.\n     * @param {Object} options - optional parameters.\n     */\n    value: function _setup(element, options) {\n      this.$element = element;\n      this.options = jquery__WEBPACK_IMPORTED_MODULE_0___default.a.extend({}, Reveal.defaults, this.$element.data(), options);\n      this.className = 'Reveal'; // ie9 back compat\n\n      this._init(); // Touch and Triggers init are idempotent, just need to make sure they are initialized\n\n\n      _foundation_util_touch__WEBPACK_IMPORTED_MODULE_7__[\"Touch\"].init(jquery__WEBPACK_IMPORTED_MODULE_0___default.a);\n      _foundation_util_triggers__WEBPACK_IMPORTED_MODULE_6__[\"Triggers\"].init(jquery__WEBPACK_IMPORTED_MODULE_0___default.a);\n      _foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_3__[\"Keyboard\"].register('Reveal', {\n        'ESCAPE': 'close'\n      });\n    }\n    /**\n     * Initializes the modal by adding the overlay and close buttons, (if selected).\n     * @private\n     */\n\n  }, {\n    key: \"_init\",\n    value: function _init() {\n      var _this2 = this;\n\n      _foundation_util_mediaQuery__WEBPACK_IMPORTED_MODULE_4__[\"MediaQuery\"]._init();\n\n      this.id = this.$element.attr('id');\n      this.isActive = false;\n      this.cached = {\n        mq: _foundation_util_mediaQuery__WEBPACK_IMPORTED_MODULE_4__[\"MediaQuery\"].current\n      };\n      this.$anchor = jquery__WEBPACK_IMPORTED_MODULE_0___default()(\"[data-open=\\\"\".concat(this.id, \"\\\"]\")).length ? jquery__WEBPACK_IMPORTED_MODULE_0___default()(\"[data-open=\\\"\".concat(this.id, \"\\\"]\")) : jquery__WEBPACK_IMPORTED_MODULE_0___default()(\"[data-toggle=\\\"\".concat(this.id, \"\\\"]\"));\n      this.$anchor.attr({\n        'aria-controls': this.id,\n        'aria-haspopup': true,\n        'tabindex': 0\n      });\n\n      if (this.options.fullScreen || this.$element.hasClass('full')) {\n        this.options.fullScreen = true;\n        this.options.overlay = false;\n      }\n\n      if (this.options.overlay && !this.$overlay) {\n        this.$overlay = this._makeOverlay(this.id);\n      }\n\n      this.$element.attr({\n        'role': 'dialog',\n        'aria-hidden': true,\n        'data-yeti-box': this.id,\n        'data-resize': this.id\n      });\n\n      if (this.$overlay) {\n        this.$element.detach().appendTo(this.$overlay);\n      } else {\n        this.$element.detach().appendTo(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this.options.appendTo));\n        this.$element.addClass('without-overlay');\n      }\n\n      this._events();\n\n      if (this.options.deepLink && window.location.hash === \"#\".concat(this.id)) {\n        this.onLoadListener = Object(_foundation_core_utils__WEBPACK_IMPORTED_MODULE_2__[\"onLoad\"])(jquery__WEBPACK_IMPORTED_MODULE_0___default()(window), function () {\n          return _this2.open();\n        });\n      }\n    }\n    /**\n     * Creates an overlay div to display behind the modal.\n     * @private\n     */\n\n  }, {\n    key: \"_makeOverlay\",\n    value: function _makeOverlay() {\n      var additionalOverlayClasses = '';\n\n      if (this.options.additionalOverlayClasses) {\n        additionalOverlayClasses = ' ' + this.options.additionalOverlayClasses;\n      }\n\n      return jquery__WEBPACK_IMPORTED_MODULE_0___default()('<div></div>').addClass('reveal-overlay' + additionalOverlayClasses).appendTo(this.options.appendTo);\n    }\n    /**\n     * Updates position of modal\n     * TODO:  Figure out if we actually need to cache these values or if it doesn't matter\n     * @private\n     */\n\n  }, {\n    key: \"_updatePosition\",\n    value: function _updatePosition() {\n      var width = this.$element.outerWidth();\n      var outerWidth = jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).width();\n      var height = this.$element.outerHeight();\n      var outerHeight = jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).height();\n      var left,\n          top = null;\n\n      if (this.options.hOffset === 'auto') {\n        left = parseInt((outerWidth - width) / 2, 10);\n      } else {\n        left = parseInt(this.options.hOffset, 10);\n      }\n\n      if (this.options.vOffset === 'auto') {\n        if (height > outerHeight) {\n          top = parseInt(Math.min(100, outerHeight / 10), 10);\n        } else {\n          top = parseInt((outerHeight - height) / 4, 10);\n        }\n      } else if (this.options.vOffset !== null) {\n        top = parseInt(this.options.vOffset, 10);\n      }\n\n      if (top !== null) {\n        this.$element.css({\n          top: top + 'px'\n        });\n      } // only worry about left if we don't have an overlay or we have a horizontal offset,\n      // otherwise we're perfectly in the middle\n\n\n      if (!this.$overlay || this.options.hOffset !== 'auto') {\n        this.$element.css({\n          left: left + 'px'\n        });\n        this.$element.css({\n          margin: '0px'\n        });\n      }\n    }\n    /**\n     * Adds event handlers for the modal.\n     * @private\n     */\n\n  }, {\n    key: \"_events\",\n    value: function _events() {\n      var _this3 = this;\n\n      var _this = this;\n\n      this.$element.on({\n        'open.zf.trigger': this.open.bind(this),\n        'close.zf.trigger': function closeZfTrigger(event, $element) {\n          if (event.target === _this.$element[0] || jquery__WEBPACK_IMPORTED_MODULE_0___default()(event.target).parents('[data-closable]')[0] === $element) {\n            // only close reveal when it's explicitly called\n            return _this3.close.apply(_this3);\n          }\n        },\n        'toggle.zf.trigger': this.toggle.bind(this),\n        'resizeme.zf.trigger': function resizemeZfTrigger() {\n          _this._updatePosition();\n        }\n      });\n\n      if (this.options.closeOnClick && this.options.overlay) {\n        this.$overlay.off('.zf.reveal').on('click.zf.dropdown tap.zf.dropdown', function (e) {\n          if (e.target === _this.$element[0] || jquery__WEBPACK_IMPORTED_MODULE_0___default.a.contains(_this.$element[0], e.target) || !jquery__WEBPACK_IMPORTED_MODULE_0___default.a.contains(document, e.target)) {\n            return;\n          }\n\n          _this.close();\n        });\n      }\n\n      if (this.options.deepLink) {\n        jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).on(\"hashchange.zf.reveal:\".concat(this.id), this._handleState.bind(this));\n      }\n    }\n    /**\n     * Handles modal methods on back/forward button clicks or any other event that triggers hashchange.\n     * @private\n     */\n\n  }, {\n    key: \"_handleState\",\n    value: function _handleState(e) {\n      if (window.location.hash === '#' + this.id && !this.isActive) {\n        this.open();\n      } else {\n        this.close();\n      }\n    }\n    /**\n    * Disables the scroll when Reveal is shown to prevent the background from shifting\n    * @param {number} scrollTop - Scroll to visually apply, window current scroll by default\n    */\n\n  }, {\n    key: \"_disableScroll\",\n    value: function _disableScroll(scrollTop) {\n      scrollTop = scrollTop || jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).scrollTop();\n\n      if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).height() > jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).height()) {\n        jquery__WEBPACK_IMPORTED_MODULE_0___default()(\"html\").css(\"top\", -scrollTop);\n      }\n    }\n    /**\n    * Reenables the scroll when Reveal closes\n    * @param {number} scrollTop - Scroll to restore, html \"top\" property by default (as set by `_disableScroll`)\n    */\n\n  }, {\n    key: \"_enableScroll\",\n    value: function _enableScroll(scrollTop) {\n      scrollTop = scrollTop || parseInt(jquery__WEBPACK_IMPORTED_MODULE_0___default()(\"html\").css(\"top\"));\n\n      if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).height() > jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).height()) {\n        jquery__WEBPACK_IMPORTED_MODULE_0___default()(\"html\").css(\"top\", \"\");\n        jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).scrollTop(-scrollTop);\n      }\n    }\n    /**\n     * Opens the modal controlled by `this.$anchor`, and closes all others by default.\n     * @function\n     * @fires Reveal#closeme\n     * @fires Reveal#open\n     */\n\n  }, {\n    key: \"open\",\n    value: function open() {\n      var _this4 = this;\n\n      // either update or replace browser history\n      var hash = \"#\".concat(this.id);\n\n      if (this.options.deepLink && window.location.hash !== hash) {\n        if (window.history.pushState) {\n          if (this.options.updateHistory) {\n            window.history.pushState({}, '', hash);\n          } else {\n            window.history.replaceState({}, '', hash);\n          }\n        } else {\n          window.location.hash = hash;\n        }\n      } // Remember anchor that opened it to set focus back later, have general anchors as fallback\n\n\n      this.$activeAnchor = jquery__WEBPACK_IMPORTED_MODULE_0___default()(document.activeElement).is(this.$anchor) ? jquery__WEBPACK_IMPORTED_MODULE_0___default()(document.activeElement) : this.$anchor;\n      this.isActive = true; // Make elements invisible, but remove display: none so we can get size and positioning\n\n      this.$element.css({\n        'visibility': 'hidden'\n      }).show().scrollTop(0);\n\n      if (this.options.overlay) {\n        this.$overlay.css({\n          'visibility': 'hidden'\n        }).show();\n      }\n\n      this._updatePosition();\n\n      this.$element.hide().css({\n        'visibility': ''\n      });\n\n      if (this.$overlay) {\n        this.$overlay.css({\n          'visibility': ''\n        }).hide();\n\n        if (this.$element.hasClass('fast')) {\n          this.$overlay.addClass('fast');\n        } else if (this.$element.hasClass('slow')) {\n          this.$overlay.addClass('slow');\n        }\n      }\n\n      if (!this.options.multipleOpened) {\n        /**\n         * Fires immediately before the modal opens.\n         * Closes any other modals that are currently open\n         * @event Reveal#closeme\n         */\n        this.$element.trigger('closeme.zf.reveal', this.id);\n      }\n\n      if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('.reveal:visible').length === 0) {\n        this._disableScroll();\n      }\n\n      var _this = this; // Motion UI method of reveal\n\n\n      if (this.options.animationIn) {\n        var afterAnimation = function afterAnimation() {\n          _this.$element.attr({\n            'aria-hidden': false,\n            'tabindex': -1\n          }).focus();\n\n          _this._addGlobalClasses();\n\n          _foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_3__[\"Keyboard\"].trapFocus(_this.$element);\n        };\n\n        if (this.options.overlay) {\n          _foundation_util_motion__WEBPACK_IMPORTED_MODULE_5__[\"Motion\"].animateIn(this.$overlay, 'fade-in');\n        }\n\n        _foundation_util_motion__WEBPACK_IMPORTED_MODULE_5__[\"Motion\"].animateIn(this.$element, this.options.animationIn, function () {\n          if (_this4.$element) {\n            // protect against object having been removed\n            _this4.focusableElements = _foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_3__[\"Keyboard\"].findFocusable(_this4.$element);\n            afterAnimation();\n          }\n        });\n      } // jQuery method of reveal\n      else {\n          if (this.options.overlay) {\n            this.$overlay.show(0);\n          }\n\n          this.$element.show(this.options.showDelay);\n        } // handle accessibility\n\n\n      this.$element.attr({\n        'aria-hidden': false,\n        'tabindex': -1\n      }).focus();\n      _foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_3__[\"Keyboard\"].trapFocus(this.$element);\n\n      this._addGlobalClasses();\n\n      this._addGlobalListeners();\n      /**\n       * Fires when the modal has successfully opened.\n       * @event Reveal#open\n       */\n\n\n      this.$element.trigger('open.zf.reveal');\n    }\n    /**\n     * Adds classes and listeners on document required by open modals.\n     *\n     * The following classes are added and updated:\n     * - `.is-reveal-open` - Prevents the scroll on document\n     * - `.zf-has-scroll`  - Displays a disabled scrollbar on document if required like if the\n     *                       scroll was not disabled. This prevent a \"shift\" of the page content due\n     *                       the scrollbar disappearing when the modal opens.\n     *\n     * @private\n     */\n\n  }, {\n    key: \"_addGlobalClasses\",\n    value: function _addGlobalClasses() {\n      var updateScrollbarClass = function updateScrollbarClass() {\n        jquery__WEBPACK_IMPORTED_MODULE_0___default()('html').toggleClass('zf-has-scroll', !!(jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).height() > jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).height()));\n      };\n\n      this.$element.on('resizeme.zf.trigger.revealScrollbarListener', function () {\n        return updateScrollbarClass();\n      });\n      updateScrollbarClass();\n      jquery__WEBPACK_IMPORTED_MODULE_0___default()('html').addClass('is-reveal-open');\n    }\n    /**\n     * Removes classes and listeners on document that were required by open modals.\n     * @private\n     */\n\n  }, {\n    key: \"_removeGlobalClasses\",\n    value: function _removeGlobalClasses() {\n      this.$element.off('resizeme.zf.trigger.revealScrollbarListener');\n      jquery__WEBPACK_IMPORTED_MODULE_0___default()('html').removeClass('is-reveal-open');\n      jquery__WEBPACK_IMPORTED_MODULE_0___default()('html').removeClass('zf-has-scroll');\n    }\n    /**\n     * Adds extra event handlers for the body and window if necessary.\n     * @private\n     */\n\n  }, {\n    key: \"_addGlobalListeners\",\n    value: function _addGlobalListeners() {\n      var _this = this;\n\n      if (!this.$element) {\n        return;\n      } // If we're in the middle of cleanup, don't freak out\n\n\n      this.focusableElements = _foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_3__[\"Keyboard\"].findFocusable(this.$element);\n\n      if (!this.options.overlay && this.options.closeOnClick && !this.options.fullScreen) {\n        jquery__WEBPACK_IMPORTED_MODULE_0___default()('body').on('click.zf.dropdown tap.zf.dropdown', function (e) {\n          if (e.target === _this.$element[0] || jquery__WEBPACK_IMPORTED_MODULE_0___default.a.contains(_this.$element[0], e.target) || !jquery__WEBPACK_IMPORTED_MODULE_0___default.a.contains(document, e.target)) {\n            return;\n          }\n\n          _this.close();\n        });\n      }\n\n      if (this.options.closeOnEsc) {\n        jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).on('keydown.zf.reveal', function (e) {\n          _foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_3__[\"Keyboard\"].handleKey(e, 'Reveal', {\n            close: function close() {\n              if (_this.options.closeOnEsc) {\n                _this.close();\n              }\n            }\n          });\n        });\n      }\n    }\n    /**\n     * Closes the modal.\n     * @function\n     * @fires Reveal#closed\n     */\n\n  }, {\n    key: \"close\",\n    value: function close() {\n      if (!this.isActive || !this.$element.is(':visible')) {\n        return false;\n      }\n\n      var _this = this; // Motion UI method of hiding\n\n\n      if (this.options.animationOut) {\n        if (this.options.overlay) {\n          _foundation_util_motion__WEBPACK_IMPORTED_MODULE_5__[\"Motion\"].animateOut(this.$overlay, 'fade-out');\n        }\n\n        _foundation_util_motion__WEBPACK_IMPORTED_MODULE_5__[\"Motion\"].animateOut(this.$element, this.options.animationOut, finishUp);\n      } // jQuery method of hiding\n      else {\n          this.$element.hide(this.options.hideDelay);\n\n          if (this.options.overlay) {\n            this.$overlay.hide(0, finishUp);\n          } else {\n            finishUp();\n          }\n        } // Conditionals to remove extra event listeners added on open\n\n\n      if (this.options.closeOnEsc) {\n        jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).off('keydown.zf.reveal');\n      }\n\n      if (!this.options.overlay && this.options.closeOnClick) {\n        jquery__WEBPACK_IMPORTED_MODULE_0___default()('body').off('click.zf.dropdown tap.zf.dropdown');\n      }\n\n      this.$element.off('keydown.zf.reveal');\n\n      function finishUp() {\n        // Get the current top before the modal is closed and restore the scroll after.\n        // TODO: use component properties instead of HTML properties\n        // See https://github.com/foundation/foundation-sites/pull/10786\n        var scrollTop = parseInt(jquery__WEBPACK_IMPORTED_MODULE_0___default()(\"html\").css(\"top\"));\n\n        if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('.reveal:visible').length === 0) {\n          _this._removeGlobalClasses(); // also remove .is-reveal-open from the html element when there is no opened reveal\n\n        }\n\n        _foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_3__[\"Keyboard\"].releaseFocus(_this.$element);\n\n        _this.$element.attr('aria-hidden', true);\n\n        if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('.reveal:visible').length === 0) {\n          _this._enableScroll(scrollTop);\n        }\n        /**\n        * Fires when the modal is done closing.\n        * @event Reveal#closed\n        */\n\n\n        _this.$element.trigger('closed.zf.reveal');\n      }\n      /**\n      * Resets the modal content\n      * This prevents a running video to keep going in the background\n      */\n\n\n      if (this.options.resetOnClose) {\n        this.$element.html(this.$element.html());\n      }\n\n      this.isActive = false; // If deepLink and we did not switched to an other modal...\n\n      if (_this.options.deepLink && window.location.hash === \"#\".concat(this.id)) {\n        // Remove the history hash\n        if (window.history.replaceState) {\n          var urlWithoutHash = window.location.pathname + window.location.search;\n\n          if (this.options.updateHistory) {\n            window.history.pushState({}, '', urlWithoutHash); // remove the hash\n          } else {\n            window.history.replaceState('', document.title, urlWithoutHash);\n          }\n        } else {\n          window.location.hash = '';\n        }\n      }\n\n      this.$activeAnchor.focus();\n    }\n    /**\n     * Toggles the open/closed state of a modal.\n     * @function\n     */\n\n  }, {\n    key: \"toggle\",\n    value: function toggle() {\n      if (this.isActive) {\n        this.close();\n      } else {\n        this.open();\n      }\n    }\n  }, {\n    key: \"_destroy\",\n\n    /**\n     * Destroys an instance of a modal.\n     * @function\n     */\n    value: function _destroy() {\n      if (this.options.overlay) {\n        this.$element.appendTo(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this.options.appendTo)); // move $element outside of $overlay to prevent error unregisterPlugin()\n\n        this.$overlay.hide().off().remove();\n      }\n\n      this.$element.hide().off();\n      this.$anchor.off('.zf');\n      jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).off(\".zf.reveal:\".concat(this.id));\n      if (this.onLoadListener) jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).off(this.onLoadListener);\n\n      if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('.reveal:visible').length === 0) {\n        this._removeGlobalClasses(); // also remove .is-reveal-open from the html element when there is no opened reveal\n\n      }\n    }\n  }]);\n\n  return Reveal;\n}(_foundation_core_plugin__WEBPACK_IMPORTED_MODULE_1__[\"Plugin\"]);\n\nReveal.defaults = {\n  /**\n   * Motion-UI class to use for animated elements. If none used, defaults to simple show/hide.\n   * @option\n   * @type {string}\n   * @default ''\n   */\n  animationIn: '',\n\n  /**\n   * Motion-UI class to use for animated elements. If none used, defaults to simple show/hide.\n   * @option\n   * @type {string}\n   * @default ''\n   */\n  animationOut: '',\n\n  /**\n   * Time, in ms, to delay the opening of a modal after a click if no animation used.\n   * @option\n   * @type {number}\n   * @default 0\n   */\n  showDelay: 0,\n\n  /**\n   * Time, in ms, to delay the closing of a modal after a click if no animation used.\n   * @option\n   * @type {number}\n   * @default 0\n   */\n  hideDelay: 0,\n\n  /**\n   * Allows a click on the body/overlay to close the modal.\n   * @option\n   * @type {boolean}\n   * @default true\n   */\n  closeOnClick: true,\n\n  /**\n   * Allows the modal to close if the user presses the `ESCAPE` key.\n   * @option\n   * @type {boolean}\n   * @default true\n   */\n  closeOnEsc: true,\n\n  /**\n   * If true, allows multiple modals to be displayed at once.\n   * @option\n   * @type {boolean}\n   * @default false\n   */\n  multipleOpened: false,\n\n  /**\n   * Distance, in pixels, the modal should push down from the top of the screen.\n   * @option\n   * @type {number|string}\n   * @default auto\n   */\n  vOffset: 'auto',\n\n  /**\n   * Distance, in pixels, the modal should push in from the side of the screen.\n   * @option\n   * @type {number|string}\n   * @default auto\n   */\n  hOffset: 'auto',\n\n  /**\n   * Allows the modal to be fullscreen, completely blocking out the rest of the view. JS checks for this as well.\n   * @option\n   * @type {boolean}\n   * @default false\n   */\n  fullScreen: false,\n\n  /**\n   * Allows the modal to generate an overlay div, which will cover the view when modal opens.\n   * @option\n   * @type {boolean}\n   * @default true\n   */\n  overlay: true,\n\n  /**\n   * Allows the modal to remove and reinject markup on close. Should be true if using video elements w/o using provider's api, otherwise, videos will continue to play in the background.\n   * @option\n   * @type {boolean}\n   * @default false\n   */\n  resetOnClose: false,\n\n  /**\n   * Link the location hash to the modal.\n   * Set the location hash when the modal is opened/closed, and open/close the modal when the location changes.\n   * @option\n   * @type {boolean}\n   * @default false\n   */\n  deepLink: false,\n\n  /**\n   * If `deepLink` is enabled, update the browser history with the open modal\n   * @option\n   * @default false\n   */\n  updateHistory: false,\n\n  /**\n  * Allows the modal to append to custom div.\n  * @option\n  * @type {string}\n  * @default \"body\"\n  */\n  appendTo: \"body\",\n\n  /**\n   * Allows adding additional class names to the reveal overlay.\n   * @option\n   * @type {string}\n   * @default ''\n   */\n  additionalOverlayClasses: ''\n};\n\n\n//# sourceURL=webpack:///./js/foundation.reveal.js?");

  /***/
}),

/***/ "./js/foundation.slider.js":
/*!*********************************!*\
  !*** ./js/foundation.slider.js ***!
  \*********************************/
/*! exports provided: Slider */
/***/ (function (module, __webpack_exports__, __webpack_require__) {

  "use strict";
  eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Slider\", function() { return Slider; });\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ \"jquery\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./foundation.util.keyboard */ \"./js/foundation.util.keyboard.js\");\n/* harmony import */ var _foundation_util_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./foundation.util.motion */ \"./js/foundation.util.motion.js\");\n/* harmony import */ var _foundation_core_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./foundation.core.utils */ \"./js/foundation.core.utils.js\");\n/* harmony import */ var _foundation_core_plugin__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./foundation.core.plugin */ \"./js/foundation.core.plugin.js\");\n/* harmony import */ var _foundation_util_touch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./foundation.util.touch */ \"./js/foundation.util.touch.js\");\n/* harmony import */ var _foundation_util_triggers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./foundation.util.triggers */ \"./js/foundation.util.triggers.js\");\n\n\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\n\n\n\n\n\n/**\n * Slider module.\n * @module foundation.slider\n * @requires foundation.util.motion\n * @requires foundation.util.triggers\n * @requires foundation.util.keyboard\n * @requires foundation.util.touch\n */\n\nvar Slider =\n/*#__PURE__*/\nfunction (_Plugin) {\n  _inherits(Slider, _Plugin);\n\n  function Slider() {\n    _classCallCheck(this, Slider);\n\n    return _possibleConstructorReturn(this, _getPrototypeOf(Slider).apply(this, arguments));\n  }\n\n  _createClass(Slider, [{\n    key: \"_setup\",\n\n    /**\n     * Creates a new instance of a slider control.\n     * @class\n     * @name Slider\n     * @param {jQuery} element - jQuery object to make into a slider control.\n     * @param {Object} options - Overrides to the default plugin settings.\n     */\n    value: function _setup(element, options) {\n      this.$element = element;\n      this.options = jquery__WEBPACK_IMPORTED_MODULE_0___default.a.extend({}, Slider.defaults, this.$element.data(), options);\n      this.className = 'Slider'; // ie9 back compat\n      // Touch and Triggers inits are idempotent, we just need to make sure it's initialied.\n\n      _foundation_util_touch__WEBPACK_IMPORTED_MODULE_5__[\"Touch\"].init(jquery__WEBPACK_IMPORTED_MODULE_0___default.a);\n      _foundation_util_triggers__WEBPACK_IMPORTED_MODULE_6__[\"Triggers\"].init(jquery__WEBPACK_IMPORTED_MODULE_0___default.a);\n\n      this._init();\n\n      _foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_1__[\"Keyboard\"].register('Slider', {\n        'ltr': {\n          'ARROW_RIGHT': 'increase',\n          'ARROW_UP': 'increase',\n          'ARROW_DOWN': 'decrease',\n          'ARROW_LEFT': 'decrease',\n          'SHIFT_ARROW_RIGHT': 'increase_fast',\n          'SHIFT_ARROW_UP': 'increase_fast',\n          'SHIFT_ARROW_DOWN': 'decrease_fast',\n          'SHIFT_ARROW_LEFT': 'decrease_fast',\n          'HOME': 'min',\n          'END': 'max'\n        },\n        'rtl': {\n          'ARROW_LEFT': 'increase',\n          'ARROW_RIGHT': 'decrease',\n          'SHIFT_ARROW_LEFT': 'increase_fast',\n          'SHIFT_ARROW_RIGHT': 'decrease_fast'\n        }\n      });\n    }\n    /**\n     * Initilizes the plugin by reading/setting attributes, creating collections and setting the initial position of the handle(s).\n     * @function\n     * @private\n     */\n\n  }, {\n    key: \"_init\",\n    value: function _init() {\n      this.inputs = this.$element.find('input');\n      this.handles = this.$element.find('[data-slider-handle]');\n      this.$handle = this.handles.eq(0);\n      this.$input = this.inputs.length ? this.inputs.eq(0) : jquery__WEBPACK_IMPORTED_MODULE_0___default()(\"#\".concat(this.$handle.attr('aria-controls')));\n      this.$fill = this.$element.find('[data-slider-fill]').css(this.options.vertical ? 'height' : 'width', 0);\n\n      var _this = this;\n\n      if (this.options.disabled || this.$element.hasClass(this.options.disabledClass)) {\n        this.options.disabled = true;\n        this.$element.addClass(this.options.disabledClass);\n      }\n\n      if (!this.inputs.length) {\n        this.inputs = jquery__WEBPACK_IMPORTED_MODULE_0___default()().add(this.$input);\n        this.options.binding = true;\n      }\n\n      this._setInitAttr(0);\n\n      if (this.handles[1]) {\n        this.options.doubleSided = true;\n        this.$handle2 = this.handles.eq(1);\n        this.$input2 = this.inputs.length > 1 ? this.inputs.eq(1) : jquery__WEBPACK_IMPORTED_MODULE_0___default()(\"#\".concat(this.$handle2.attr('aria-controls')));\n\n        if (!this.inputs[1]) {\n          this.inputs = this.inputs.add(this.$input2);\n        } // this.$handle.triggerHandler('click.zf.slider');\n\n\n        this._setInitAttr(1);\n      } // Set handle positions\n\n\n      this.setHandles();\n\n      this._events();\n    }\n  }, {\n    key: \"setHandles\",\n    value: function setHandles() {\n      var _this2 = this;\n\n      if (this.handles[1]) {\n        this._setHandlePos(this.$handle, this.inputs.eq(0).val(), function () {\n          _this2._setHandlePos(_this2.$handle2, _this2.inputs.eq(1).val());\n        });\n      } else {\n        this._setHandlePos(this.$handle, this.inputs.eq(0).val());\n      }\n    }\n  }, {\n    key: \"_reflow\",\n    value: function _reflow() {\n      this.setHandles();\n    }\n    /**\n    * @function\n    * @private\n    * @param {Number} value - floating point (the value) to be transformed using to a relative position on the slider (the inverse of _value)\n    */\n\n  }, {\n    key: \"_pctOfBar\",\n    value: function _pctOfBar(value) {\n      var pctOfBar = percent(value - this.options.start, this.options.end - this.options.start);\n\n      switch (this.options.positionValueFunction) {\n        case \"pow\":\n          pctOfBar = this._logTransform(pctOfBar);\n          break;\n\n        case \"log\":\n          pctOfBar = this._powTransform(pctOfBar);\n          break;\n      }\n\n      return pctOfBar.toFixed(2);\n    }\n    /**\n    * @function\n    * @private\n    * @param {Number} pctOfBar - floating point, the relative position of the slider (typically between 0-1) to be transformed to a value\n    */\n\n  }, {\n    key: \"_value\",\n    value: function _value(pctOfBar) {\n      switch (this.options.positionValueFunction) {\n        case \"pow\":\n          pctOfBar = this._powTransform(pctOfBar);\n          break;\n\n        case \"log\":\n          pctOfBar = this._logTransform(pctOfBar);\n          break;\n      }\n\n      var value;\n\n      if (this.options.vertical) {\n        // linear interpolation which is working with negative values for start\n        // https://math.stackexchange.com/a/1019084\n        value = parseFloat(this.options.end) + pctOfBar * (this.options.start - this.options.end);\n      } else {\n        value = (this.options.end - this.options.start) * pctOfBar + parseFloat(this.options.start);\n      }\n\n      return value;\n    }\n    /**\n    * @function\n    * @private\n    * @param {Number} value - floating point (typically between 0-1) to be transformed using the log function\n    */\n\n  }, {\n    key: \"_logTransform\",\n    value: function _logTransform(value) {\n      return baseLog(this.options.nonLinearBase, value * (this.options.nonLinearBase - 1) + 1);\n    }\n    /**\n    * @function\n    * @private\n    * @param {Number} value - floating point (typically between 0-1) to be transformed using the power function\n    */\n\n  }, {\n    key: \"_powTransform\",\n    value: function _powTransform(value) {\n      return (Math.pow(this.options.nonLinearBase, value) - 1) / (this.options.nonLinearBase - 1);\n    }\n    /**\n     * Sets the position of the selected handle and fill bar.\n     * @function\n     * @private\n     * @param {jQuery} $hndl - the selected handle to move.\n     * @param {Number} location - floating point between the start and end values of the slider bar.\n     * @param {Function} cb - callback function to fire on completion.\n     * @fires Slider#moved\n     * @fires Slider#changed\n     */\n\n  }, {\n    key: \"_setHandlePos\",\n    value: function _setHandlePos($hndl, location, cb) {\n      // don't move if the slider has been disabled since its initialization\n      if (this.$element.hasClass(this.options.disabledClass)) {\n        return;\n      } //might need to alter that slightly for bars that will have odd number selections.\n\n\n      location = parseFloat(location); //on input change events, convert string to number...grumble.\n      // prevent slider from running out of bounds, if value exceeds the limits set through options, override the value to min/max\n\n      if (location < this.options.start) {\n        location = this.options.start;\n      } else if (location > this.options.end) {\n        location = this.options.end;\n      }\n\n      var isDbl = this.options.doubleSided;\n\n      if (isDbl) {\n        //this block is to prevent 2 handles from crossing eachother. Could/should be improved.\n        if (this.handles.index($hndl) === 0) {\n          var h2Val = parseFloat(this.$handle2.attr('aria-valuenow'));\n          location = location >= h2Val ? h2Val - this.options.step : location;\n        } else {\n          var h1Val = parseFloat(this.$handle.attr('aria-valuenow'));\n          location = location <= h1Val ? h1Val + this.options.step : location;\n        }\n      }\n\n      var _this = this,\n          vert = this.options.vertical,\n          hOrW = vert ? 'height' : 'width',\n          lOrT = vert ? 'top' : 'left',\n          handleDim = $hndl[0].getBoundingClientRect()[hOrW],\n          elemDim = this.$element[0].getBoundingClientRect()[hOrW],\n          //percentage of bar min/max value based on click or drag point\n      pctOfBar = this._pctOfBar(location),\n          //number of actual pixels to shift the handle, based on the percentage obtained above\n      pxToMove = (elemDim - handleDim) * pctOfBar,\n          //percentage of bar to shift the handle\n      movement = (percent(pxToMove, elemDim) * 100).toFixed(this.options.decimal); //fixing the decimal value for the location number, is passed to other methods as a fixed floating-point value\n\n\n      location = parseFloat(location.toFixed(this.options.decimal)); // declare empty object for css adjustments, only used with 2 handled-sliders\n\n      var css = {};\n\n      this._setValues($hndl, location); // TODO update to calculate based on values set to respective inputs??\n\n\n      if (isDbl) {\n        var isLeftHndl = this.handles.index($hndl) === 0,\n            //empty variable, will be used for min-height/width for fill bar\n        dim,\n            //percentage w/h of the handle compared to the slider bar\n        handlePct = ~~(percent(handleDim, elemDim) * 100); //if left handle, the math is slightly different than if it's the right handle, and the left/top property needs to be changed for the fill bar\n\n        if (isLeftHndl) {\n          //left or top percentage value to apply to the fill bar.\n          css[lOrT] = \"\".concat(movement, \"%\"); //calculate the new min-height/width for the fill bar.\n\n          dim = parseFloat(this.$handle2[0].style[lOrT]) - movement + handlePct; //this callback is necessary to prevent errors and allow the proper placement and initialization of a 2-handled slider\n          //plus, it means we don't care if 'dim' isNaN on init, it won't be in the future.\n\n          if (cb && typeof cb === 'function') {\n            cb();\n          } //this is only needed for the initialization of 2 handled sliders\n\n        } else {\n          //just caching the value of the left/bottom handle's left/top property\n          var handlePos = parseFloat(this.$handle[0].style[lOrT]); //calculate the new min-height/width for the fill bar. Use isNaN to prevent false positives for numbers <= 0\n          //based on the percentage of movement of the handle being manipulated, less the opposing handle's left/top position, plus the percentage w/h of the handle itself\n\n          dim = movement - (isNaN(handlePos) ? (this.options.initialStart - this.options.start) / ((this.options.end - this.options.start) / 100) : handlePos) + handlePct;\n        } // assign the min-height/width to our css object\n\n\n        css[\"min-\".concat(hOrW)] = \"\".concat(dim, \"%\");\n      }\n\n      this.$element.one('finished.zf.animate', function () {\n        /**\n         * Fires when the handle is done moving.\n         * @event Slider#moved\n         */\n        _this.$element.trigger('moved.zf.slider', [$hndl]);\n      }); //because we don't know exactly how the handle will be moved, check the amount of time it should take to move.\n\n      var moveTime = this.$element.data('dragging') ? 1000 / 60 : this.options.moveTime;\n      Object(_foundation_util_motion__WEBPACK_IMPORTED_MODULE_2__[\"Move\"])(moveTime, $hndl, function () {\n        // adjusting the left/top property of the handle, based on the percentage calculated above\n        // if movement isNaN, that is because the slider is hidden and we cannot determine handle width,\n        // fall back to next best guess.\n        if (isNaN(movement)) {\n          $hndl.css(lOrT, \"\".concat(pctOfBar * 100, \"%\"));\n        } else {\n          $hndl.css(lOrT, \"\".concat(movement, \"%\"));\n        }\n\n        if (!_this.options.doubleSided) {\n          //if single-handled, a simple method to expand the fill bar\n          _this.$fill.css(hOrW, \"\".concat(pctOfBar * 100, \"%\"));\n        } else {\n          //otherwise, use the css object we created above\n          _this.$fill.css(css);\n        }\n      });\n      /**\n       * Fires when the value has not been change for a given time.\n       * @event Slider#changed\n       */\n\n      clearTimeout(_this.timeout);\n      _this.timeout = setTimeout(function () {\n        _this.$element.trigger('changed.zf.slider', [$hndl]);\n      }, _this.options.changedDelay);\n    }\n    /**\n     * Sets the initial attribute for the slider element.\n     * @function\n     * @private\n     * @param {Number} idx - index of the current handle/input to use.\n     */\n\n  }, {\n    key: \"_setInitAttr\",\n    value: function _setInitAttr(idx) {\n      var initVal = idx === 0 ? this.options.initialStart : this.options.initialEnd;\n      var id = this.inputs.eq(idx).attr('id') || Object(_foundation_core_utils__WEBPACK_IMPORTED_MODULE_3__[\"GetYoDigits\"])(6, 'slider');\n      this.inputs.eq(idx).attr({\n        'id': id,\n        'max': this.options.end,\n        'min': this.options.start,\n        'step': this.options.step\n      });\n      this.inputs.eq(idx).val(initVal);\n      this.handles.eq(idx).attr({\n        'role': 'slider',\n        'aria-controls': id,\n        'aria-valuemax': this.options.end,\n        'aria-valuemin': this.options.start,\n        'aria-valuenow': initVal,\n        'aria-orientation': this.options.vertical ? 'vertical' : 'horizontal',\n        'tabindex': 0\n      });\n    }\n    /**\n     * Sets the input and `aria-valuenow` values for the slider element.\n     * @function\n     * @private\n     * @param {jQuery} $handle - the currently selected handle.\n     * @param {Number} val - floating point of the new value.\n     */\n\n  }, {\n    key: \"_setValues\",\n    value: function _setValues($handle, val) {\n      var idx = this.options.doubleSided ? this.handles.index($handle) : 0;\n      this.inputs.eq(idx).val(val);\n      $handle.attr('aria-valuenow', val);\n    }\n    /**\n     * Handles events on the slider element.\n     * Calculates the new location of the current handle.\n     * If there are two handles and the bar was clicked, it determines which handle to move.\n     * @function\n     * @private\n     * @param {Object} e - the `event` object passed from the listener.\n     * @param {jQuery} $handle - the current handle to calculate for, if selected.\n     * @param {Number} val - floating point number for the new value of the slider.\n     * TODO clean this up, there's a lot of repeated code between this and the _setHandlePos fn.\n     */\n\n  }, {\n    key: \"_handleEvent\",\n    value: function _handleEvent(e, $handle, val) {\n      var value, hasVal;\n\n      if (!val) {\n        //click or drag events\n        e.preventDefault();\n\n        var _this = this,\n            vertical = this.options.vertical,\n            param = vertical ? 'height' : 'width',\n            direction = vertical ? 'top' : 'left',\n            eventOffset = vertical ? e.pageY : e.pageX,\n            barDim = this.$element[0].getBoundingClientRect()[param],\n            windowScroll = vertical ? jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).scrollTop() : jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).scrollLeft();\n\n        var elemOffset = this.$element.offset()[direction]; // touch events emulated by the touch util give position relative to screen, add window.scroll to event coordinates...\n        // best way to guess this is simulated is if clientY == pageY\n\n        if (e.clientY === e.pageY) {\n          eventOffset = eventOffset + windowScroll;\n        }\n\n        var eventFromBar = eventOffset - elemOffset;\n        var barXY;\n\n        if (eventFromBar < 0) {\n          barXY = 0;\n        } else if (eventFromBar > barDim) {\n          barXY = barDim;\n        } else {\n          barXY = eventFromBar;\n        }\n\n        var offsetPct = percent(barXY, barDim);\n        value = this._value(offsetPct); // turn everything around for RTL, yay math!\n\n        if (Object(_foundation_core_utils__WEBPACK_IMPORTED_MODULE_3__[\"rtl\"])() && !this.options.vertical) {\n          value = this.options.end - value;\n        }\n\n        value = _this._adjustValue(null, value); //boolean flag for the setHandlePos fn, specifically for vertical sliders\n\n        hasVal = false;\n\n        if (!$handle) {\n          //figure out which handle it is, pass it to the next function.\n          var firstHndlPos = absPosition(this.$handle, direction, barXY, param),\n              secndHndlPos = absPosition(this.$handle2, direction, barXY, param);\n          $handle = firstHndlPos <= secndHndlPos ? this.$handle : this.$handle2;\n        }\n      } else {\n        //change event on input\n        value = this._adjustValue(null, val);\n        hasVal = true;\n      }\n\n      this._setHandlePos($handle, value);\n    }\n    /**\n     * Adjustes value for handle in regard to step value. returns adjusted value\n     * @function\n     * @private\n     * @param {jQuery} $handle - the selected handle.\n     * @param {Number} value - value to adjust. used if $handle is falsy\n     */\n\n  }, {\n    key: \"_adjustValue\",\n    value: function _adjustValue($handle, value) {\n      var val,\n          step = this.options.step,\n          div = parseFloat(step / 2),\n          left,\n          prev_val,\n          next_val;\n\n      if (!!$handle) {\n        val = parseFloat($handle.attr('aria-valuenow'));\n      } else {\n        val = value;\n      }\n\n      if (val >= 0) {\n        left = val % step;\n      } else {\n        left = step + val % step;\n      }\n\n      prev_val = val - left;\n      next_val = prev_val + step;\n\n      if (left === 0) {\n        return val;\n      }\n\n      val = val >= prev_val + div ? next_val : prev_val;\n      return val;\n    }\n    /**\n     * Adds event listeners to the slider elements.\n     * @function\n     * @private\n     */\n\n  }, {\n    key: \"_events\",\n    value: function _events() {\n      this._eventsForHandle(this.$handle);\n\n      if (this.handles[1]) {\n        this._eventsForHandle(this.$handle2);\n      }\n    }\n    /**\n     * Adds event listeners a particular handle\n     * @function\n     * @private\n     * @param {jQuery} $handle - the current handle to apply listeners to.\n     */\n\n  }, {\n    key: \"_eventsForHandle\",\n    value: function _eventsForHandle($handle) {\n      var _this = this,\n          curHandle;\n\n      var handleChangeEvent = function handleChangeEvent(e) {\n        var idx = _this.inputs.index(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this));\n\n        _this._handleEvent(e, _this.handles.eq(idx), jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).val());\n      }; // IE only triggers the change event when the input loses focus which strictly follows the HTML specification\n      // listen for the enter key and trigger a change\n      // @see https://html.spec.whatwg.org/multipage/input.html#common-input-element-events\n\n\n      this.inputs.off('keyup.zf.slider').on('keyup.zf.slider', function (e) {\n        if (e.keyCode == 13) handleChangeEvent.call(this, e);\n      });\n      this.inputs.off('change.zf.slider').on('change.zf.slider', handleChangeEvent);\n\n      if (this.options.clickSelect) {\n        this.$element.off('click.zf.slider').on('click.zf.slider', function (e) {\n          if (_this.$element.data('dragging')) {\n            return false;\n          }\n\n          if (!jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target).is('[data-slider-handle]')) {\n            if (_this.options.doubleSided) {\n              _this._handleEvent(e);\n            } else {\n              _this._handleEvent(e, _this.$handle);\n            }\n          }\n        });\n      }\n\n      if (this.options.draggable) {\n        this.handles.addTouch();\n        var $body = jquery__WEBPACK_IMPORTED_MODULE_0___default()('body');\n        $handle.off('mousedown.zf.slider').on('mousedown.zf.slider', function (e) {\n          $handle.addClass('is-dragging');\n\n          _this.$fill.addClass('is-dragging'); //\n\n\n          _this.$element.data('dragging', true);\n\n          curHandle = jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.currentTarget);\n          $body.on('mousemove.zf.slider', function (e) {\n            e.preventDefault();\n\n            _this._handleEvent(e, curHandle);\n          }).on('mouseup.zf.slider', function (e) {\n            _this._handleEvent(e, curHandle);\n\n            $handle.removeClass('is-dragging');\n\n            _this.$fill.removeClass('is-dragging');\n\n            _this.$element.data('dragging', false);\n\n            $body.off('mousemove.zf.slider mouseup.zf.slider');\n          });\n        }) // prevent events triggered by touch\n        .on('selectstart.zf.slider touchmove.zf.slider', function (e) {\n          e.preventDefault();\n        });\n      }\n\n      $handle.off('keydown.zf.slider').on('keydown.zf.slider', function (e) {\n        var _$handle = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this),\n            idx = _this.options.doubleSided ? _this.handles.index(_$handle) : 0,\n            oldValue = parseFloat(_this.inputs.eq(idx).val()),\n            newValue; // handle keyboard event with keyboard util\n\n\n        _foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_1__[\"Keyboard\"].handleKey(e, 'Slider', {\n          decrease: function decrease() {\n            newValue = oldValue - _this.options.step;\n          },\n          increase: function increase() {\n            newValue = oldValue + _this.options.step;\n          },\n          decrease_fast: function decrease_fast() {\n            newValue = oldValue - _this.options.step * 10;\n          },\n          increase_fast: function increase_fast() {\n            newValue = oldValue + _this.options.step * 10;\n          },\n          min: function min() {\n            newValue = _this.options.start;\n          },\n          max: function max() {\n            newValue = _this.options.end;\n          },\n          handled: function handled() {\n            // only set handle pos when event was handled specially\n            e.preventDefault();\n\n            _this._setHandlePos(_$handle, newValue);\n          }\n        });\n        /*if (newValue) { // if pressed key has special function, update value\n          e.preventDefault();\n          _this._setHandlePos(_$handle, newValue);\n        }*/\n      });\n    }\n    /**\n     * Destroys the slider plugin.\n     */\n\n  }, {\n    key: \"_destroy\",\n    value: function _destroy() {\n      this.handles.off('.zf.slider');\n      this.inputs.off('.zf.slider');\n      this.$element.off('.zf.slider');\n      clearTimeout(this.timeout);\n    }\n  }]);\n\n  return Slider;\n}(_foundation_core_plugin__WEBPACK_IMPORTED_MODULE_4__[\"Plugin\"]);\n\nSlider.defaults = {\n  /**\n   * Minimum value for the slider scale.\n   * @option\n   * @type {number}\n   * @default 0\n   */\n  start: 0,\n\n  /**\n   * Maximum value for the slider scale.\n   * @option\n   * @type {number}\n   * @default 100\n   */\n  end: 100,\n\n  /**\n   * Minimum value change per change event.\n   * @option\n   * @type {number}\n   * @default 1\n   */\n  step: 1,\n\n  /**\n   * Value at which the handle/input *(left handle/first input)* should be set to on initialization.\n   * @option\n   * @type {number}\n   * @default 0\n   */\n  initialStart: 0,\n\n  /**\n   * Value at which the right handle/second input should be set to on initialization.\n   * @option\n   * @type {number}\n   * @default 100\n   */\n  initialEnd: 100,\n\n  /**\n   * Allows the input to be located outside the container and visible. Set to by the JS\n   * @option\n   * @type {boolean}\n   * @default false\n   */\n  binding: false,\n\n  /**\n   * Allows the user to click/tap on the slider bar to select a value.\n   * @option\n   * @type {boolean}\n   * @default true\n   */\n  clickSelect: true,\n\n  /**\n   * Set to true and use the `vertical` class to change alignment to vertical.\n   * @option\n   * @type {boolean}\n   * @default false\n   */\n  vertical: false,\n\n  /**\n   * Allows the user to drag the slider handle(s) to select a value.\n   * @option\n   * @type {boolean}\n   * @default true\n   */\n  draggable: true,\n\n  /**\n   * Disables the slider and prevents event listeners from being applied. Double checked by JS with `disabledClass`.\n   * @option\n   * @type {boolean}\n   * @default false\n   */\n  disabled: false,\n\n  /**\n   * Allows the use of two handles. Double checked by the JS. Changes some logic handling.\n   * @option\n   * @type {boolean}\n   * @default false\n   */\n  doubleSided: false,\n\n  /**\n   * Potential future feature.\n   */\n  // steps: 100,\n\n  /**\n   * Number of decimal places the plugin should go to for floating point precision.\n   * @option\n   * @type {number}\n   * @default 2\n   */\n  decimal: 2,\n\n  /**\n   * Time delay for dragged elements.\n   */\n  // dragDelay: 0,\n\n  /**\n   * Time, in ms, to animate the movement of a slider handle if user clicks/taps on the bar. Needs to be manually set if updating the transition time in the Sass settings.\n   * @option\n   * @type {number}\n   * @default 200\n   */\n  moveTime: 200,\n  //update this if changing the transition time in the sass\n\n  /**\n   * Class applied to disabled sliders.\n   * @option\n   * @type {string}\n   * @default 'disabled'\n   */\n  disabledClass: 'disabled',\n\n  /**\n   * Will invert the default layout for a vertical<span data-tooltip title=\"who would do this???\"> </span>slider.\n   * @option\n   * @type {boolean}\n   * @default false\n   */\n  invertVertical: false,\n\n  /**\n   * Milliseconds before the `changed.zf-slider` event is triggered after value change.\n   * @option\n   * @type {number}\n   * @default 500\n   */\n  changedDelay: 500,\n\n  /**\n  * Basevalue for non-linear sliders\n  * @option\n  * @type {number}\n  * @default 5\n  */\n  nonLinearBase: 5,\n\n  /**\n  * Basevalue for non-linear sliders, possible values are: `'linear'`, `'pow'` & `'log'`. Pow and Log use the nonLinearBase setting.\n  * @option\n  * @type {string}\n  * @default 'linear'\n  */\n  positionValueFunction: 'linear'\n};\n\nfunction percent(frac, num) {\n  return frac / num;\n}\n\nfunction absPosition($handle, dir, clickPos, param) {\n  return Math.abs($handle.position()[dir] + $handle[param]() / 2 - clickPos);\n}\n\nfunction baseLog(base, value) {\n  return Math.log(value) / Math.log(base);\n}\n\n\n\n//# sourceURL=webpack:///./js/foundation.slider.js?");

  /***/
}),

/***/ "./js/foundation.smoothScroll.js":
/*!***************************************!*\
  !*** ./js/foundation.smoothScroll.js ***!
  \***************************************/
/*! exports provided: SmoothScroll */
/***/ (function (module, __webpack_exports__, __webpack_require__) {

  "use strict";
  eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SmoothScroll\", function() { return SmoothScroll; });\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ \"jquery\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _foundation_core_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./foundation.core.utils */ \"./js/foundation.core.utils.js\");\n/* harmony import */ var _foundation_core_plugin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./foundation.core.plugin */ \"./js/foundation.core.plugin.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\n\n/**\n * SmoothScroll module.\n * @module foundation.smoothScroll\n */\n\nvar SmoothScroll =\n/*#__PURE__*/\nfunction (_Plugin) {\n  _inherits(SmoothScroll, _Plugin);\n\n  function SmoothScroll() {\n    _classCallCheck(this, SmoothScroll);\n\n    return _possibleConstructorReturn(this, _getPrototypeOf(SmoothScroll).apply(this, arguments));\n  }\n\n  _createClass(SmoothScroll, [{\n    key: \"_setup\",\n\n    /**\n     * Creates a new instance of SmoothScroll.\n     * @class\n     * @name SmoothScroll\n     * @fires SmoothScroll#init\n     * @param {Object} element - jQuery object to add the trigger to.\n     * @param {Object} options - Overrides to the default plugin settings.\n     */\n    value: function _setup(element, options) {\n      this.$element = element;\n      this.options = jquery__WEBPACK_IMPORTED_MODULE_0___default.a.extend({}, SmoothScroll.defaults, this.$element.data(), options);\n      this.className = 'SmoothScroll'; // ie9 back compat\n\n      this._init();\n    }\n    /**\n     * Initialize the SmoothScroll plugin\n     * @private\n     */\n\n  }, {\n    key: \"_init\",\n    value: function _init() {\n      var id = this.$element[0].id || Object(_foundation_core_utils__WEBPACK_IMPORTED_MODULE_1__[\"GetYoDigits\"])(6, 'smooth-scroll');\n      this.$element.attr({\n        id: id\n      });\n\n      this._events();\n    }\n    /**\n     * Initializes events for SmoothScroll.\n     * @private\n     */\n\n  }, {\n    key: \"_events\",\n    value: function _events() {\n      this._linkClickListener = this._handleLinkClick.bind(this);\n      this.$element.on('click.zf.smoothScroll', this._linkClickListener);\n      this.$element.on('click.zf.smoothScroll', 'a[href^=\"#\"]', this._linkClickListener);\n    }\n    /**\n     * Handle the given event to smoothly scroll to the anchor pointed by the event target.\n     * @param {*} e - event\n     * @function\n     * @private\n     */\n\n  }, {\n    key: \"_handleLinkClick\",\n    value: function _handleLinkClick(e) {\n      var _this = this;\n\n      // Follow the link if it does not point to an anchor.\n      if (!jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.currentTarget).is('a[href^=\"#\"]')) return;\n      var arrival = e.currentTarget.getAttribute('href');\n      this._inTransition = true;\n      SmoothScroll.scrollToLoc(arrival, this.options, function () {\n        _this._inTransition = false;\n      });\n      e.preventDefault();\n    }\n  }, {\n    key: \"_destroy\",\n\n    /**\n     * Destroys the SmoothScroll instance.\n     * @function\n     */\n    value: function _destroy() {\n      this.$element.off('click.zf.smoothScroll', this._linkClickListener);\n      this.$element.off('click.zf.smoothScroll', 'a[href^=\"#\"]', this._linkClickListener);\n    }\n  }], [{\n    key: \"scrollToLoc\",\n\n    /**\n     * Function to scroll to a given location on the page.\n     * @param {String} loc - A properly formatted jQuery id selector. Example: '#foo'\n     * @param {Object} options - The options to use.\n     * @param {Function} callback - The callback function.\n     * @static\n     * @function\n     */\n    value: function scrollToLoc(loc) {\n      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : SmoothScroll.defaults;\n      var callback = arguments.length > 2 ? arguments[2] : undefined;\n      var $loc = jquery__WEBPACK_IMPORTED_MODULE_0___default()(loc); // Do nothing if target does not exist to prevent errors\n\n      if (!$loc.length) return false;\n      var scrollPos = Math.round($loc.offset().top - options.threshold / 2 - options.offset);\n      jquery__WEBPACK_IMPORTED_MODULE_0___default()('html, body').stop(true).animate({\n        scrollTop: scrollPos\n      }, options.animationDuration, options.animationEasing, function () {\n        if (typeof callback === 'function') {\n          callback();\n        }\n      });\n    }\n  }]);\n\n  return SmoothScroll;\n}(_foundation_core_plugin__WEBPACK_IMPORTED_MODULE_2__[\"Plugin\"]);\n/**\n * Default settings for plugin.\n */\n\n\nSmoothScroll.defaults = {\n  /**\n   * Amount of time, in ms, the animated scrolling should take between locations.\n   * @option\n   * @type {number}\n   * @default 500\n   */\n  animationDuration: 500,\n\n  /**\n   * Animation style to use when scrolling between locations. Can be `'swing'` or `'linear'`.\n   * @option\n   * @type {string}\n   * @default 'linear'\n   * @see {@link https://api.jquery.com/animate|Jquery animate}\n   */\n  animationEasing: 'linear',\n\n  /**\n   * Number of pixels to use as a marker for location changes.\n   * @option\n   * @type {number}\n   * @default 50\n   */\n  threshold: 50,\n\n  /**\n   * Number of pixels to offset the scroll of the page on item click if using a sticky nav bar.\n   * @option\n   * @type {number}\n   * @default 0\n   */\n  offset: 0\n};\n\n\n//# sourceURL=webpack:///./js/foundation.smoothScroll.js?");

  /***/
}),

/***/ "./js/foundation.sticky.js":
/*!*********************************!*\
  !*** ./js/foundation.sticky.js ***!
  \*********************************/
/*! exports provided: Sticky */
/***/ (function (module, __webpack_exports__, __webpack_require__) {

  "use strict";
  eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Sticky\", function() { return Sticky; });\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ \"jquery\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _foundation_core_plugin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./foundation.core.plugin */ \"./js/foundation.core.plugin.js\");\n/* harmony import */ var _foundation_core_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./foundation.core.utils */ \"./js/foundation.core.utils.js\");\n/* harmony import */ var _foundation_util_mediaQuery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./foundation.util.mediaQuery */ \"./js/foundation.util.mediaQuery.js\");\n/* harmony import */ var _foundation_util_triggers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./foundation.util.triggers */ \"./js/foundation.util.triggers.js\");\n\n\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\n\n\n\n/**\n * Sticky module.\n * @module foundation.sticky\n * @requires foundation.util.triggers\n * @requires foundation.util.mediaQuery\n */\n\nvar Sticky =\n/*#__PURE__*/\nfunction (_Plugin) {\n  _inherits(Sticky, _Plugin);\n\n  function Sticky() {\n    _classCallCheck(this, Sticky);\n\n    return _possibleConstructorReturn(this, _getPrototypeOf(Sticky).apply(this, arguments));\n  }\n\n  _createClass(Sticky, [{\n    key: \"_setup\",\n\n    /**\n     * Creates a new instance of a sticky thing.\n     * @class\n     * @name Sticky\n     * @param {jQuery} element - jQuery object to make sticky.\n     * @param {Object} options - options object passed when creating the element programmatically.\n     */\n    value: function _setup(element, options) {\n      this.$element = element;\n      this.options = jquery__WEBPACK_IMPORTED_MODULE_0___default.a.extend({}, Sticky.defaults, this.$element.data(), options);\n      this.className = 'Sticky'; // ie9 back compat\n      // Triggers init is idempotent, just need to make sure it is initialized\n\n      _foundation_util_triggers__WEBPACK_IMPORTED_MODULE_4__[\"Triggers\"].init(jquery__WEBPACK_IMPORTED_MODULE_0___default.a);\n\n      this._init();\n    }\n    /**\n     * Initializes the sticky element by adding classes, getting/setting dimensions, breakpoints and attributes\n     * @function\n     * @private\n     */\n\n  }, {\n    key: \"_init\",\n    value: function _init() {\n      _foundation_util_mediaQuery__WEBPACK_IMPORTED_MODULE_3__[\"MediaQuery\"]._init();\n\n      var $parent = this.$element.parent('[data-sticky-container]'),\n          id = this.$element[0].id || Object(_foundation_core_utils__WEBPACK_IMPORTED_MODULE_2__[\"GetYoDigits\"])(6, 'sticky'),\n          _this = this;\n\n      if ($parent.length) {\n        this.$container = $parent;\n      } else {\n        this.wasWrapped = true;\n        this.$element.wrap(this.options.container);\n        this.$container = this.$element.parent();\n      }\n\n      this.$container.addClass(this.options.containerClass);\n      this.$element.addClass(this.options.stickyClass).attr({\n        'data-resize': id,\n        'data-mutate': id\n      });\n\n      if (this.options.anchor !== '') {\n        jquery__WEBPACK_IMPORTED_MODULE_0___default()('#' + _this.options.anchor).attr({\n          'data-mutate': id\n        });\n      }\n\n      this.scrollCount = this.options.checkEvery;\n      this.isStuck = false;\n      this.onLoadListener = Object(_foundation_core_utils__WEBPACK_IMPORTED_MODULE_2__[\"onLoad\"])(jquery__WEBPACK_IMPORTED_MODULE_0___default()(window), function () {\n        //We calculate the container height to have correct values for anchor points offset calculation.\n        _this.containerHeight = _this.$element.css(\"display\") == \"none\" ? 0 : _this.$element[0].getBoundingClientRect().height;\n\n        _this.$container.css('height', _this.containerHeight);\n\n        _this.elemHeight = _this.containerHeight;\n\n        if (_this.options.anchor !== '') {\n          _this.$anchor = jquery__WEBPACK_IMPORTED_MODULE_0___default()('#' + _this.options.anchor);\n        } else {\n          _this._parsePoints();\n        }\n\n        _this._setSizes(function () {\n          var scroll = window.pageYOffset;\n\n          _this._calc(false, scroll); //Unstick the element will ensure that proper classes are set.\n\n\n          if (!_this.isStuck) {\n            _this._removeSticky(scroll >= _this.topPoint ? false : true);\n          }\n        });\n\n        _this._events(id.split('-').reverse().join('-'));\n      });\n    }\n    /**\n     * If using multiple elements as anchors, calculates the top and bottom pixel values the sticky thing should stick and unstick on.\n     * @function\n     * @private\n     */\n\n  }, {\n    key: \"_parsePoints\",\n    value: function _parsePoints() {\n      var top = this.options.topAnchor == \"\" ? 1 : this.options.topAnchor,\n          btm = this.options.btmAnchor == \"\" ? document.documentElement.scrollHeight : this.options.btmAnchor,\n          pts = [top, btm],\n          breaks = {};\n\n      for (var i = 0, len = pts.length; i < len && pts[i]; i++) {\n        var pt;\n\n        if (typeof pts[i] === 'number') {\n          pt = pts[i];\n        } else {\n          var place = pts[i].split(':'),\n              anchor = jquery__WEBPACK_IMPORTED_MODULE_0___default()(\"#\".concat(place[0]));\n          pt = anchor.offset().top;\n\n          if (place[1] && place[1].toLowerCase() === 'bottom') {\n            pt += anchor[0].getBoundingClientRect().height;\n          }\n        }\n\n        breaks[i] = pt;\n      }\n\n      this.points = breaks;\n      return;\n    }\n    /**\n     * Adds event handlers for the scrolling element.\n     * @private\n     * @param {String} id - pseudo-random id for unique scroll event listener.\n     */\n\n  }, {\n    key: \"_events\",\n    value: function _events(id) {\n      var _this = this,\n          scrollListener = this.scrollListener = \"scroll.zf.\".concat(id);\n\n      if (this.isOn) {\n        return;\n      }\n\n      if (this.canStick) {\n        this.isOn = true;\n        jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).off(scrollListener).on(scrollListener, function (e) {\n          if (_this.scrollCount === 0) {\n            _this.scrollCount = _this.options.checkEvery;\n\n            _this._setSizes(function () {\n              _this._calc(false, window.pageYOffset);\n            });\n          } else {\n            _this.scrollCount--;\n\n            _this._calc(false, window.pageYOffset);\n          }\n        });\n      }\n\n      this.$element.off('resizeme.zf.trigger').on('resizeme.zf.trigger', function (e, el) {\n        _this._eventsHandler(id);\n      });\n      this.$element.on('mutateme.zf.trigger', function (e, el) {\n        _this._eventsHandler(id);\n      });\n\n      if (this.$anchor) {\n        this.$anchor.on('mutateme.zf.trigger', function (e, el) {\n          _this._eventsHandler(id);\n        });\n      }\n    }\n    /**\n     * Handler for events.\n     * @private\n     * @param {String} id - pseudo-random id for unique scroll event listener.\n     */\n\n  }, {\n    key: \"_eventsHandler\",\n    value: function _eventsHandler(id) {\n      var _this = this,\n          scrollListener = this.scrollListener = \"scroll.zf.\".concat(id);\n\n      _this._setSizes(function () {\n        _this._calc(false);\n\n        if (_this.canStick) {\n          if (!_this.isOn) {\n            _this._events(id);\n          }\n        } else if (_this.isOn) {\n          _this._pauseListeners(scrollListener);\n        }\n      });\n    }\n    /**\n     * Removes event handlers for scroll and change events on anchor.\n     * @fires Sticky#pause\n     * @param {String} scrollListener - unique, namespaced scroll listener attached to `window`\n     */\n\n  }, {\n    key: \"_pauseListeners\",\n    value: function _pauseListeners(scrollListener) {\n      this.isOn = false;\n      jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).off(scrollListener);\n      /**\n       * Fires when the plugin is paused due to resize event shrinking the view.\n       * @event Sticky#pause\n       * @private\n       */\n\n      this.$element.trigger('pause.zf.sticky');\n    }\n    /**\n     * Called on every `scroll` event and on `_init`\n     * fires functions based on booleans and cached values\n     * @param {Boolean} checkSizes - true if plugin should recalculate sizes and breakpoints.\n     * @param {Number} scroll - current scroll position passed from scroll event cb function. If not passed, defaults to `window.pageYOffset`.\n     */\n\n  }, {\n    key: \"_calc\",\n    value: function _calc(checkSizes, scroll) {\n      if (checkSizes) {\n        this._setSizes();\n      }\n\n      if (!this.canStick) {\n        if (this.isStuck) {\n          this._removeSticky(true);\n        }\n\n        return false;\n      }\n\n      if (!scroll) {\n        scroll = window.pageYOffset;\n      }\n\n      if (scroll >= this.topPoint) {\n        if (scroll <= this.bottomPoint) {\n          if (!this.isStuck) {\n            this._setSticky();\n          }\n        } else {\n          if (this.isStuck) {\n            this._removeSticky(false);\n          }\n        }\n      } else {\n        if (this.isStuck) {\n          this._removeSticky(true);\n        }\n      }\n    }\n    /**\n     * Causes the $element to become stuck.\n     * Adds `position: fixed;`, and helper classes.\n     * @fires Sticky#stuckto\n     * @function\n     * @private\n     */\n\n  }, {\n    key: \"_setSticky\",\n    value: function _setSticky() {\n      var _this = this,\n          stickTo = this.options.stickTo,\n          mrgn = stickTo === 'top' ? 'marginTop' : 'marginBottom',\n          notStuckTo = stickTo === 'top' ? 'bottom' : 'top',\n          css = {};\n\n      css[mrgn] = \"\".concat(this.options[mrgn], \"em\");\n      css[stickTo] = 0;\n      css[notStuckTo] = 'auto';\n      this.isStuck = true;\n      this.$element.removeClass(\"is-anchored is-at-\".concat(notStuckTo)).addClass(\"is-stuck is-at-\".concat(stickTo)).css(css)\n      /**\n       * Fires when the $element has become `position: fixed;`\n       * Namespaced to `top` or `bottom`, e.g. `sticky.zf.stuckto:top`\n       * @event Sticky#stuckto\n       */\n      .trigger(\"sticky.zf.stuckto:\".concat(stickTo));\n      this.$element.on(\"transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd\", function () {\n        _this._setSizes();\n      });\n    }\n    /**\n     * Causes the $element to become unstuck.\n     * Removes `position: fixed;`, and helper classes.\n     * Adds other helper classes.\n     * @param {Boolean} isTop - tells the function if the $element should anchor to the top or bottom of its $anchor element.\n     * @fires Sticky#unstuckfrom\n     * @private\n     */\n\n  }, {\n    key: \"_removeSticky\",\n    value: function _removeSticky(isTop) {\n      var stickTo = this.options.stickTo,\n          stickToTop = stickTo === 'top',\n          css = {},\n          anchorPt = (this.points ? this.points[1] - this.points[0] : this.anchorHeight) - this.elemHeight,\n          mrgn = stickToTop ? 'marginTop' : 'marginBottom',\n          topOrBottom = isTop ? 'top' : 'bottom';\n      css[mrgn] = 0;\n      css['bottom'] = 'auto';\n\n      if (isTop) {\n        css['top'] = 0;\n      } else {\n        css['top'] = anchorPt;\n      }\n\n      this.isStuck = false;\n      this.$element.removeClass(\"is-stuck is-at-\".concat(stickTo)).addClass(\"is-anchored is-at-\".concat(topOrBottom)).css(css)\n      /**\n       * Fires when the $element has become anchored.\n       * Namespaced to `top` or `bottom`, e.g. `sticky.zf.unstuckfrom:bottom`\n       * @event Sticky#unstuckfrom\n       */\n      .trigger(\"sticky.zf.unstuckfrom:\".concat(topOrBottom));\n    }\n    /**\n     * Sets the $element and $container sizes for plugin.\n     * Calls `_setBreakPoints`.\n     * @param {Function} cb - optional callback function to fire on completion of `_setBreakPoints`.\n     * @private\n     */\n\n  }, {\n    key: \"_setSizes\",\n    value: function _setSizes(cb) {\n      this.canStick = _foundation_util_mediaQuery__WEBPACK_IMPORTED_MODULE_3__[\"MediaQuery\"].is(this.options.stickyOn);\n\n      if (!this.canStick) {\n        if (cb && typeof cb === 'function') {\n          cb();\n        }\n      }\n\n      var _this = this,\n          newElemWidth = this.$container[0].getBoundingClientRect().width,\n          comp = window.getComputedStyle(this.$container[0]),\n          pdngl = parseInt(comp['padding-left'], 10),\n          pdngr = parseInt(comp['padding-right'], 10);\n\n      if (this.$anchor && this.$anchor.length) {\n        this.anchorHeight = this.$anchor[0].getBoundingClientRect().height;\n      } else {\n        this._parsePoints();\n      }\n\n      this.$element.css({\n        'max-width': \"\".concat(newElemWidth - pdngl - pdngr, \"px\")\n      }); // Recalculate the height only if it is \"dynamic\"\n\n      if (this.options.dynamicHeight || !this.containerHeight) {\n        // Get the sticked element height and apply it to the container to \"hold the place\"\n        var newContainerHeight = this.$element[0].getBoundingClientRect().height || this.containerHeight;\n        newContainerHeight = this.$element.css(\"display\") == \"none\" ? 0 : newContainerHeight;\n        this.$container.css('height', newContainerHeight);\n        this.containerHeight = newContainerHeight;\n      }\n\n      this.elemHeight = this.containerHeight;\n\n      if (!this.isStuck) {\n        if (this.$element.hasClass('is-at-bottom')) {\n          var anchorPt = (this.points ? this.points[1] - this.$container.offset().top : this.anchorHeight) - this.elemHeight;\n          this.$element.css('top', anchorPt);\n        }\n      }\n\n      this._setBreakPoints(this.containerHeight, function () {\n        if (cb && typeof cb === 'function') {\n          cb();\n        }\n      });\n    }\n    /**\n     * Sets the upper and lower breakpoints for the element to become sticky/unsticky.\n     * @param {Number} elemHeight - px value for sticky.$element height, calculated by `_setSizes`.\n     * @param {Function} cb - optional callback function to be called on completion.\n     * @private\n     */\n\n  }, {\n    key: \"_setBreakPoints\",\n    value: function _setBreakPoints(elemHeight, cb) {\n      if (!this.canStick) {\n        if (cb && typeof cb === 'function') {\n          cb();\n        } else {\n          return false;\n        }\n      }\n\n      var mTop = emCalc(this.options.marginTop),\n          mBtm = emCalc(this.options.marginBottom),\n          topPoint = this.points ? this.points[0] : this.$anchor.offset().top,\n          bottomPoint = this.points ? this.points[1] : topPoint + this.anchorHeight,\n          // topPoint = this.$anchor.offset().top || this.points[0],\n      // bottomPoint = topPoint + this.anchorHeight || this.points[1],\n      winHeight = window.innerHeight;\n\n      if (this.options.stickTo === 'top') {\n        topPoint -= mTop;\n        bottomPoint -= elemHeight + mTop;\n      } else if (this.options.stickTo === 'bottom') {\n        topPoint -= winHeight - (elemHeight + mBtm);\n        bottomPoint -= winHeight - mBtm;\n      } else {//this would be the stickTo: both option... tricky\n      }\n\n      this.topPoint = topPoint;\n      this.bottomPoint = bottomPoint;\n\n      if (cb && typeof cb === 'function') {\n        cb();\n      }\n    }\n    /**\n     * Destroys the current sticky element.\n     * Resets the element to the top position first.\n     * Removes event listeners, JS-added css properties and classes, and unwraps the $element if the JS added the $container.\n     * @function\n     */\n\n  }, {\n    key: \"_destroy\",\n    value: function _destroy() {\n      this._removeSticky(true);\n\n      this.$element.removeClass(\"\".concat(this.options.stickyClass, \" is-anchored is-at-top\")).css({\n        height: '',\n        top: '',\n        bottom: '',\n        'max-width': ''\n      }).off('resizeme.zf.trigger').off('mutateme.zf.trigger');\n\n      if (this.$anchor && this.$anchor.length) {\n        this.$anchor.off('change.zf.sticky');\n      }\n\n      if (this.scrollListener) jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).off(this.scrollListener);\n      if (this.onLoadListener) jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).off(this.onLoadListener);\n\n      if (this.wasWrapped) {\n        this.$element.unwrap();\n      } else {\n        this.$container.removeClass(this.options.containerClass).css({\n          height: ''\n        });\n      }\n    }\n  }]);\n\n  return Sticky;\n}(_foundation_core_plugin__WEBPACK_IMPORTED_MODULE_1__[\"Plugin\"]);\n\nSticky.defaults = {\n  /**\n   * Customizable container template. Add your own classes for styling and sizing.\n   * @option\n   * @type {string}\n   * @default '&lt;div data-sticky-container&gt;&lt;/div&gt;'\n   */\n  container: '<div data-sticky-container></div>',\n\n  /**\n   * Location in the view the element sticks to. Can be `'top'` or `'bottom'`.\n   * @option\n   * @type {string}\n   * @default 'top'\n   */\n  stickTo: 'top',\n\n  /**\n   * If anchored to a single element, the id of that element.\n   * @option\n   * @type {string}\n   * @default ''\n   */\n  anchor: '',\n\n  /**\n   * If using more than one element as anchor points, the id of the top anchor.\n   * @option\n   * @type {string}\n   * @default ''\n   */\n  topAnchor: '',\n\n  /**\n   * If using more than one element as anchor points, the id of the bottom anchor.\n   * @option\n   * @type {string}\n   * @default ''\n   */\n  btmAnchor: '',\n\n  /**\n   * Margin, in `em`'s to apply to the top of the element when it becomes sticky.\n   * @option\n   * @type {number}\n   * @default 1\n   */\n  marginTop: 1,\n\n  /**\n   * Margin, in `em`'s to apply to the bottom of the element when it becomes sticky.\n   * @option\n   * @type {number}\n   * @default 1\n   */\n  marginBottom: 1,\n\n  /**\n   * Breakpoint string that is the minimum screen size an element should become sticky.\n   * @option\n   * @type {string}\n   * @default 'medium'\n   */\n  stickyOn: 'medium',\n\n  /**\n   * Class applied to sticky element, and removed on destruction. Foundation defaults to `sticky`.\n   * @option\n   * @type {string}\n   * @default 'sticky'\n   */\n  stickyClass: 'sticky',\n\n  /**\n   * Class applied to sticky container. Foundation defaults to `sticky-container`.\n   * @option\n   * @type {string}\n   * @default 'sticky-container'\n   */\n  containerClass: 'sticky-container',\n\n  /**\n   * If true (by default), keep the sticky container the same height as the element. Otherwise, the container height is set once and does not change.\n   * @option\n   * @type {boolean}\n   * @default true\n   */\n  dynamicHeight: true,\n\n  /**\n   * Number of scroll events between the plugin's recalculating sticky points. Setting it to `0` will cause it to recalc every scroll event, setting it to `-1` will prevent recalc on scroll.\n   * @option\n   * @type {number}\n   * @default -1\n   */\n  checkEvery: -1\n};\n/**\n * Helper function to calculate em values\n * @param Number {em} - number of em's to calculate into pixels\n */\n\nfunction emCalc(em) {\n  return parseInt(window.getComputedStyle(document.body, null).fontSize, 10) * em;\n}\n\n\n\n//# sourceURL=webpack:///./js/foundation.sticky.js?");

  /***/
}),

/***/ "./js/foundation.tabs.js":
/*!*******************************!*\
  !*** ./js/foundation.tabs.js ***!
  \*******************************/
/*! exports provided: Tabs */
/***/ (function (module, __webpack_exports__, __webpack_require__) {

  "use strict";
  eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Tabs\", function() { return Tabs; });\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ \"jquery\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _foundation_core_plugin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./foundation.core.plugin */ \"./js/foundation.core.plugin.js\");\n/* harmony import */ var _foundation_core_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./foundation.core.utils */ \"./js/foundation.core.utils.js\");\n/* harmony import */ var _foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./foundation.util.keyboard */ \"./js/foundation.util.keyboard.js\");\n/* harmony import */ var _foundation_util_imageLoader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./foundation.util.imageLoader */ \"./js/foundation.util.imageLoader.js\");\n\n\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\n\n\n\n/**\n * Tabs module.\n * @module foundation.tabs\n * @requires foundation.util.keyboard\n * @requires foundation.util.imageLoader if tabs contain images\n */\n\nvar Tabs =\n/*#__PURE__*/\nfunction (_Plugin) {\n  _inherits(Tabs, _Plugin);\n\n  function Tabs() {\n    _classCallCheck(this, Tabs);\n\n    return _possibleConstructorReturn(this, _getPrototypeOf(Tabs).apply(this, arguments));\n  }\n\n  _createClass(Tabs, [{\n    key: \"_setup\",\n\n    /**\n     * Creates a new instance of tabs.\n     * @class\n     * @name Tabs\n     * @fires Tabs#init\n     * @param {jQuery} element - jQuery object to make into tabs.\n     * @param {Object} options - Overrides to the default plugin settings.\n     */\n    value: function _setup(element, options) {\n      this.$element = element;\n      this.options = jquery__WEBPACK_IMPORTED_MODULE_0___default.a.extend({}, Tabs.defaults, this.$element.data(), options);\n      this.className = 'Tabs'; // ie9 back compat\n\n      this._init();\n\n      _foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_3__[\"Keyboard\"].register('Tabs', {\n        'ENTER': 'open',\n        'SPACE': 'open',\n        'ARROW_RIGHT': 'next',\n        'ARROW_UP': 'previous',\n        'ARROW_DOWN': 'next',\n        'ARROW_LEFT': 'previous' // 'TAB': 'next',\n        // 'SHIFT_TAB': 'previous'\n\n      });\n    }\n    /**\n     * Initializes the tabs by showing and focusing (if autoFocus=true) the preset active tab.\n     * @private\n     */\n\n  }, {\n    key: \"_init\",\n    value: function _init() {\n      var _this2 = this;\n\n      var _this = this;\n\n      this._isInitializing = true;\n      this.$element.attr({\n        'role': 'tablist'\n      });\n      this.$tabTitles = this.$element.find(\".\".concat(this.options.linkClass));\n      this.$tabContent = jquery__WEBPACK_IMPORTED_MODULE_0___default()(\"[data-tabs-content=\\\"\".concat(this.$element[0].id, \"\\\"]\"));\n      this.$tabTitles.each(function () {\n        var $elem = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this),\n            $link = $elem.find('a'),\n            isActive = $elem.hasClass(\"\".concat(_this.options.linkActiveClass)),\n            hash = $link.attr('data-tabs-target') || $link[0].hash.slice(1),\n            linkId = $link[0].id ? $link[0].id : \"\".concat(hash, \"-label\"),\n            $tabContent = jquery__WEBPACK_IMPORTED_MODULE_0___default()(\"#\".concat(hash));\n        $elem.attr({\n          'role': 'presentation'\n        });\n        $link.attr({\n          'role': 'tab',\n          'aria-controls': hash,\n          'aria-selected': isActive,\n          'id': linkId,\n          'tabindex': isActive ? '0' : '-1'\n        });\n        $tabContent.attr({\n          'role': 'tabpanel',\n          'aria-labelledby': linkId\n        }); // Save up the initial hash to return to it later when going back in history\n\n        if (isActive) {\n          _this._initialAnchor = \"#\".concat(hash);\n        }\n\n        if (!isActive) {\n          $tabContent.attr('aria-hidden', 'true');\n        }\n\n        if (isActive && _this.options.autoFocus) {\n          _this.onLoadListener = Object(_foundation_core_utils__WEBPACK_IMPORTED_MODULE_2__[\"onLoad\"])(jquery__WEBPACK_IMPORTED_MODULE_0___default()(window), function () {\n            jquery__WEBPACK_IMPORTED_MODULE_0___default()('html, body').animate({\n              scrollTop: $elem.offset().top\n            }, _this.options.deepLinkSmudgeDelay, function () {\n              $link.focus();\n            });\n          });\n        }\n      });\n\n      if (this.options.matchHeight) {\n        var $images = this.$tabContent.find('img');\n\n        if ($images.length) {\n          Object(_foundation_util_imageLoader__WEBPACK_IMPORTED_MODULE_4__[\"onImagesLoaded\"])($images, this._setHeight.bind(this));\n        } else {\n          this._setHeight();\n        }\n      } // Current context-bound function to open tabs on page load or history hashchange\n\n\n      this._checkDeepLink = function () {\n        var anchor = window.location.hash;\n\n        if (!anchor.length) {\n          // If we are still initializing and there is no anchor, then there is nothing to do\n          if (_this2._isInitializing) return; // Otherwise, move to the initial anchor\n\n          if (_this2._initialAnchor) anchor = _this2._initialAnchor;\n        }\n\n        var anchorNoHash = anchor.indexOf('#') >= 0 ? anchor.slice(1) : anchor;\n        var $anchor = anchorNoHash && jquery__WEBPACK_IMPORTED_MODULE_0___default()(\"#\".concat(anchorNoHash));\n\n        var $link = anchor && _this2.$element.find(\"[href$=\\\"\".concat(anchor, \"\\\"],[data-tabs-target=\\\"\").concat(anchorNoHash, \"\\\"]\")).first(); // Whether the anchor element that has been found is part of this element\n\n\n        var isOwnAnchor = !!($anchor.length && $link.length);\n\n        if (isOwnAnchor) {\n          // If there is an anchor for the hash, select it\n          if ($anchor && $anchor.length && $link && $link.length) {\n            _this2.selectTab($anchor, true);\n          } // Otherwise, collapse everything\n          else {\n              _this2._collapse();\n            } // Roll up a little to show the titles\n\n\n          if (_this2.options.deepLinkSmudge) {\n            var offset = _this2.$element.offset();\n\n            jquery__WEBPACK_IMPORTED_MODULE_0___default()('html, body').animate({\n              scrollTop: offset.top\n            }, _this2.options.deepLinkSmudgeDelay);\n          }\n          /**\n           * Fires when the plugin has deeplinked at pageload\n           * @event Tabs#deeplink\n           */\n\n\n          _this2.$element.trigger('deeplink.zf.tabs', [$link, $anchor]);\n        }\n      }; //use browser to open a tab, if it exists in this tabset\n\n\n      if (this.options.deepLink) {\n        this._checkDeepLink();\n      }\n\n      this._events();\n\n      this._isInitializing = false;\n    }\n    /**\n     * Adds event handlers for items within the tabs.\n     * @private\n     */\n\n  }, {\n    key: \"_events\",\n    value: function _events() {\n      this._addKeyHandler();\n\n      this._addClickHandler();\n\n      this._setHeightMqHandler = null;\n\n      if (this.options.matchHeight) {\n        this._setHeightMqHandler = this._setHeight.bind(this);\n        jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).on('changed.zf.mediaquery', this._setHeightMqHandler);\n      }\n\n      if (this.options.deepLink) {\n        jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).on('hashchange', this._checkDeepLink);\n      }\n    }\n    /**\n     * Adds click handlers for items within the tabs.\n     * @private\n     */\n\n  }, {\n    key: \"_addClickHandler\",\n    value: function _addClickHandler() {\n      var _this = this;\n\n      this.$element.off('click.zf.tabs').on('click.zf.tabs', \".\".concat(this.options.linkClass), function (e) {\n        e.preventDefault();\n\n        _this._handleTabChange(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this));\n      });\n    }\n    /**\n     * Adds keyboard event handlers for items within the tabs.\n     * @private\n     */\n\n  }, {\n    key: \"_addKeyHandler\",\n    value: function _addKeyHandler() {\n      var _this = this;\n\n      this.$tabTitles.off('keydown.zf.tabs').on('keydown.zf.tabs', function (e) {\n        if (e.which === 9) return;\n        var $element = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this),\n            $elements = $element.parent('ul').children('li'),\n            $prevElement,\n            $nextElement;\n        $elements.each(function (i) {\n          if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).is($element)) {\n            if (_this.options.wrapOnKeys) {\n              $prevElement = i === 0 ? $elements.last() : $elements.eq(i - 1);\n              $nextElement = i === $elements.length - 1 ? $elements.first() : $elements.eq(i + 1);\n            } else {\n              $prevElement = $elements.eq(Math.max(0, i - 1));\n              $nextElement = $elements.eq(Math.min(i + 1, $elements.length - 1));\n            }\n\n            return;\n          }\n        }); // handle keyboard event with keyboard util\n\n        _foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_3__[\"Keyboard\"].handleKey(e, 'Tabs', {\n          open: function open() {\n            $element.find('[role=\"tab\"]').focus();\n\n            _this._handleTabChange($element);\n          },\n          previous: function previous() {\n            $prevElement.find('[role=\"tab\"]').focus();\n\n            _this._handleTabChange($prevElement);\n          },\n          next: function next() {\n            $nextElement.find('[role=\"tab\"]').focus();\n\n            _this._handleTabChange($nextElement);\n          },\n          handled: function handled() {\n            e.preventDefault();\n          }\n        });\n      });\n    }\n    /**\n     * Opens the tab `$targetContent` defined by `$target`. Collapses active tab.\n     * @param {jQuery} $target - Tab to open.\n     * @param {boolean} historyHandled - browser has already handled a history update\n     * @fires Tabs#change\n     * @function\n     */\n\n  }, {\n    key: \"_handleTabChange\",\n    value: function _handleTabChange($target, historyHandled) {\n      // With `activeCollapse`, if the target is the active Tab, collapse it.\n      if ($target.hasClass(\"\".concat(this.options.linkActiveClass))) {\n        if (this.options.activeCollapse) {\n          this._collapse();\n        }\n\n        return;\n      }\n\n      var $oldTab = this.$element.find(\".\".concat(this.options.linkClass, \".\").concat(this.options.linkActiveClass)),\n          $tabLink = $target.find('[role=\"tab\"]'),\n          target = $tabLink.attr('data-tabs-target'),\n          anchor = target && target.length ? \"#\".concat(target) : $tabLink[0].hash,\n          $targetContent = this.$tabContent.find(anchor); //close old tab\n\n      this._collapseTab($oldTab); //open new tab\n\n\n      this._openTab($target); //either replace or update browser history\n\n\n      if (this.options.deepLink && !historyHandled) {\n        if (this.options.updateHistory) {\n          history.pushState({}, '', anchor);\n        } else {\n          history.replaceState({}, '', anchor);\n        }\n      }\n      /**\n       * Fires when the plugin has successfully changed tabs.\n       * @event Tabs#change\n       */\n\n\n      this.$element.trigger('change.zf.tabs', [$target, $targetContent]); //fire to children a mutation event\n\n      $targetContent.find(\"[data-mutate]\").trigger(\"mutateme.zf.trigger\");\n    }\n    /**\n     * Opens the tab `$targetContent` defined by `$target`.\n     * @param {jQuery} $target - Tab to open.\n     * @function\n     */\n\n  }, {\n    key: \"_openTab\",\n    value: function _openTab($target) {\n      var $tabLink = $target.find('[role=\"tab\"]'),\n          hash = $tabLink.attr('data-tabs-target') || $tabLink[0].hash.slice(1),\n          $targetContent = this.$tabContent.find(\"#\".concat(hash));\n      $target.addClass(\"\".concat(this.options.linkActiveClass));\n      $tabLink.attr({\n        'aria-selected': 'true',\n        'tabindex': '0'\n      });\n      $targetContent.addClass(\"\".concat(this.options.panelActiveClass)).removeAttr('aria-hidden');\n    }\n    /**\n     * Collapses `$targetContent` defined by `$target`.\n     * @param {jQuery} $target - Tab to collapse.\n     * @function\n     */\n\n  }, {\n    key: \"_collapseTab\",\n    value: function _collapseTab($target) {\n      var $target_anchor = $target.removeClass(\"\".concat(this.options.linkActiveClass)).find('[role=\"tab\"]').attr({\n        'aria-selected': 'false',\n        'tabindex': -1\n      });\n      jquery__WEBPACK_IMPORTED_MODULE_0___default()(\"#\".concat($target_anchor.attr('aria-controls'))).removeClass(\"\".concat(this.options.panelActiveClass)).attr({\n        'aria-hidden': 'true'\n      });\n    }\n    /**\n     * Collapses the active Tab.\n     * @fires Tabs#collapse\n     * @function\n     */\n\n  }, {\n    key: \"_collapse\",\n    value: function _collapse() {\n      var $activeTab = this.$element.find(\".\".concat(this.options.linkClass, \".\").concat(this.options.linkActiveClass));\n\n      if ($activeTab.length) {\n        this._collapseTab($activeTab);\n        /**\n        * Fires when the plugin has successfully collapsed tabs.\n        * @event Tabs#collapse\n        */\n\n\n        this.$element.trigger('collapse.zf.tabs', [$activeTab]);\n      }\n    }\n    /**\n     * Public method for selecting a content pane to display.\n     * @param {jQuery | String} elem - jQuery object or string of the id of the pane to display.\n     * @param {boolean} historyHandled - browser has already handled a history update\n     * @function\n     */\n\n  }, {\n    key: \"selectTab\",\n    value: function selectTab(elem, historyHandled) {\n      var idStr, hashIdStr;\n\n      if (_typeof(elem) === 'object') {\n        idStr = elem[0].id;\n      } else {\n        idStr = elem;\n      }\n\n      if (idStr.indexOf('#') < 0) {\n        hashIdStr = \"#\".concat(idStr);\n      } else {\n        hashIdStr = idStr;\n        idStr = idStr.slice(1);\n      }\n\n      var $target = this.$tabTitles.has(\"[href$=\\\"\".concat(hashIdStr, \"\\\"],[data-tabs-target=\\\"\").concat(idStr, \"\\\"]\")).first();\n\n      this._handleTabChange($target, historyHandled);\n    }\n  }, {\n    key: \"_setHeight\",\n\n    /**\n     * Sets the height of each panel to the height of the tallest panel.\n     * If enabled in options, gets called on media query change.\n     * If loading content via external source, can be called directly or with _reflow.\n     * If enabled with `data-match-height=\"true\"`, tabs sets to equal height\n     * @function\n     * @private\n     */\n    value: function _setHeight() {\n      var max = 0,\n          _this = this; // Lock down the `this` value for the root tabs object\n\n\n      this.$tabContent.find(\".\".concat(this.options.panelClass)).css('height', '').each(function () {\n        var panel = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this),\n            isActive = panel.hasClass(\"\".concat(_this.options.panelActiveClass)); // get the options from the parent instead of trying to get them from the child\n\n        if (!isActive) {\n          panel.css({\n            'visibility': 'hidden',\n            'display': 'block'\n          });\n        }\n\n        var temp = this.getBoundingClientRect().height;\n\n        if (!isActive) {\n          panel.css({\n            'visibility': '',\n            'display': ''\n          });\n        }\n\n        max = temp > max ? temp : max;\n      }).css('height', \"\".concat(max, \"px\"));\n    }\n    /**\n     * Destroys an instance of tabs.\n     * @fires Tabs#destroyed\n     */\n\n  }, {\n    key: \"_destroy\",\n    value: function _destroy() {\n      this.$element.find(\".\".concat(this.options.linkClass)).off('.zf.tabs').hide().end().find(\".\".concat(this.options.panelClass)).hide();\n\n      if (this.options.matchHeight) {\n        if (this._setHeightMqHandler != null) {\n          jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).off('changed.zf.mediaquery', this._setHeightMqHandler);\n        }\n      }\n\n      if (this.options.deepLink) {\n        jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).off('hashchange', this._checkDeepLink);\n      }\n\n      if (this.onLoadListener) {\n        jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).off(this.onLoadListener);\n      }\n    }\n  }]);\n\n  return Tabs;\n}(_foundation_core_plugin__WEBPACK_IMPORTED_MODULE_1__[\"Plugin\"]);\n\nTabs.defaults = {\n  /**\n   * Link the location hash to the active pane.\n   * Set the location hash when the active pane changes, and open the corresponding pane when the location changes.\n   * @option\n   * @type {boolean}\n   * @default false\n   */\n  deepLink: false,\n\n  /**\n   * If `deepLink` is enabled, adjust the deep link scroll to make sure the top of the tab panel is visible\n   * @option\n   * @type {boolean}\n   * @default false\n   */\n  deepLinkSmudge: false,\n\n  /**\n   * If `deepLinkSmudge` is enabled, animation time (ms) for the deep link adjustment\n   * @option\n   * @type {number}\n   * @default 300\n   */\n  deepLinkSmudgeDelay: 300,\n\n  /**\n   * If `deepLink` is enabled, update the browser history with the open tab\n   * @option\n   * @type {boolean}\n   * @default false\n   */\n  updateHistory: false,\n\n  /**\n   * Allows the window to scroll to content of active pane on load.\n   * Not recommended if more than one tab panel per page.\n   * @option\n   * @type {boolean}\n   * @default false\n   */\n  autoFocus: false,\n\n  /**\n   * Allows keyboard input to 'wrap' around the tab links.\n   * @option\n   * @type {boolean}\n   * @default true\n   */\n  wrapOnKeys: true,\n\n  /**\n   * Allows the tab content panes to match heights if set to true.\n   * @option\n   * @type {boolean}\n   * @default false\n   */\n  matchHeight: false,\n\n  /**\n   * Allows active tabs to collapse when clicked.\n   * @option\n   * @type {boolean}\n   * @default false\n   */\n  activeCollapse: false,\n\n  /**\n   * Class applied to `li`'s in tab link list.\n   * @option\n   * @type {string}\n   * @default 'tabs-title'\n   */\n  linkClass: 'tabs-title',\n\n  /**\n   * Class applied to the active `li` in tab link list.\n   * @option\n   * @type {string}\n   * @default 'is-active'\n   */\n  linkActiveClass: 'is-active',\n\n  /**\n   * Class applied to the content containers.\n   * @option\n   * @type {string}\n   * @default 'tabs-panel'\n   */\n  panelClass: 'tabs-panel',\n\n  /**\n   * Class applied to the active content container.\n   * @option\n   * @type {string}\n   * @default 'is-active'\n   */\n  panelActiveClass: 'is-active'\n};\n\n\n//# sourceURL=webpack:///./js/foundation.tabs.js?");

  /***/
}),

/***/ "./js/foundation.toggler.js":
/*!**********************************!*\
  !*** ./js/foundation.toggler.js ***!
  \**********************************/
/*! exports provided: Toggler */
/***/ (function (module, __webpack_exports__, __webpack_require__) {

  "use strict";
  eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Toggler\", function() { return Toggler; });\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ \"jquery\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _foundation_util_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./foundation.util.motion */ \"./js/foundation.util.motion.js\");\n/* harmony import */ var _foundation_core_plugin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./foundation.core.plugin */ \"./js/foundation.core.plugin.js\");\n/* harmony import */ var _foundation_core_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./foundation.core.utils */ \"./js/foundation.core.utils.js\");\n/* harmony import */ var _foundation_util_triggers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./foundation.util.triggers */ \"./js/foundation.util.triggers.js\");\n\n\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\n\n\n\n/**\n * Toggler module.\n * @module foundation.toggler\n * @requires foundation.util.motion\n * @requires foundation.util.triggers\n */\n\nvar Toggler =\n/*#__PURE__*/\nfunction (_Plugin) {\n  _inherits(Toggler, _Plugin);\n\n  function Toggler() {\n    _classCallCheck(this, Toggler);\n\n    return _possibleConstructorReturn(this, _getPrototypeOf(Toggler).apply(this, arguments));\n  }\n\n  _createClass(Toggler, [{\n    key: \"_setup\",\n\n    /**\n     * Creates a new instance of Toggler.\n     * @class\n     * @name Toggler\n     * @fires Toggler#init\n     * @param {Object} element - jQuery object to add the trigger to.\n     * @param {Object} options - Overrides to the default plugin settings.\n     */\n    value: function _setup(element, options) {\n      this.$element = element;\n      this.options = jquery__WEBPACK_IMPORTED_MODULE_0___default.a.extend({}, Toggler.defaults, element.data(), options);\n      this.className = '';\n      this.className = 'Toggler'; // ie9 back compat\n      // Triggers init is idempotent, just need to make sure it is initialized\n\n      _foundation_util_triggers__WEBPACK_IMPORTED_MODULE_4__[\"Triggers\"].init(jquery__WEBPACK_IMPORTED_MODULE_0___default.a);\n\n      this._init();\n\n      this._events();\n    }\n    /**\n     * Initializes the Toggler plugin by parsing the toggle class from data-toggler, or animation classes from data-animate.\n     * @function\n     * @private\n     */\n\n  }, {\n    key: \"_init\",\n    value: function _init() {\n      // Collect triggers to set ARIA attributes to\n      var id = this.$element[0].id,\n          $triggers = jquery__WEBPACK_IMPORTED_MODULE_0___default()(\"[data-open~=\\\"\".concat(id, \"\\\"], [data-close~=\\\"\").concat(id, \"\\\"], [data-toggle~=\\\"\").concat(id, \"\\\"]\"));\n      var input; // Parse animation classes if they were set\n\n      if (this.options.animate) {\n        input = this.options.animate.split(' ');\n        this.animationIn = input[0];\n        this.animationOut = input[1] || null; // - aria-expanded: according to the element visibility.\n\n        $triggers.attr('aria-expanded', !this.$element.is(':hidden'));\n      } // Otherwise, parse toggle class\n      else {\n          input = this.options.toggler;\n\n          if (typeof input !== 'string' || !input.length) {\n            throw new Error(\"The 'toogler' option containing the target class is required, got \\\"\".concat(input, \"\\\"\"));\n          } // Allow for a . at the beginning of the string\n\n\n          this.className = input[0] === '.' ? input.slice(1) : input; // - aria-expanded: according to the elements class set.\n\n          $triggers.attr('aria-expanded', this.$element.hasClass(this.className));\n        } // - aria-controls: adding the element id to it if not already in it.\n\n\n      $triggers.each(function (index, trigger) {\n        var $trigger = jquery__WEBPACK_IMPORTED_MODULE_0___default()(trigger);\n        var controls = $trigger.attr('aria-controls') || '';\n        var containsId = new RegExp(\"\\\\b\".concat(Object(_foundation_core_utils__WEBPACK_IMPORTED_MODULE_3__[\"RegExpEscape\"])(id), \"\\\\b\")).test(controls);\n        if (!containsId) $trigger.attr('aria-controls', controls ? \"\".concat(controls, \" \").concat(id) : id);\n      });\n    }\n    /**\n     * Initializes events for the toggle trigger.\n     * @function\n     * @private\n     */\n\n  }, {\n    key: \"_events\",\n    value: function _events() {\n      this.$element.off('toggle.zf.trigger').on('toggle.zf.trigger', this.toggle.bind(this));\n    }\n    /**\n     * Toggles the target class on the target element. An event is fired from the original trigger depending on if the resultant state was \"on\" or \"off\".\n     * @function\n     * @fires Toggler#on\n     * @fires Toggler#off\n     */\n\n  }, {\n    key: \"toggle\",\n    value: function toggle() {\n      this[this.options.animate ? '_toggleAnimate' : '_toggleClass']();\n    }\n  }, {\n    key: \"_toggleClass\",\n    value: function _toggleClass() {\n      this.$element.toggleClass(this.className);\n      var isOn = this.$element.hasClass(this.className);\n\n      if (isOn) {\n        /**\n         * Fires if the target element has the class after a toggle.\n         * @event Toggler#on\n         */\n        this.$element.trigger('on.zf.toggler');\n      } else {\n        /**\n         * Fires if the target element does not have the class after a toggle.\n         * @event Toggler#off\n         */\n        this.$element.trigger('off.zf.toggler');\n      }\n\n      this._updateARIA(isOn);\n\n      this.$element.find('[data-mutate]').trigger('mutateme.zf.trigger');\n    }\n  }, {\n    key: \"_toggleAnimate\",\n    value: function _toggleAnimate() {\n      var _this = this;\n\n      if (this.$element.is(':hidden')) {\n        _foundation_util_motion__WEBPACK_IMPORTED_MODULE_1__[\"Motion\"].animateIn(this.$element, this.animationIn, function () {\n          _this._updateARIA(true);\n\n          this.trigger('on.zf.toggler');\n          this.find('[data-mutate]').trigger('mutateme.zf.trigger');\n        });\n      } else {\n        _foundation_util_motion__WEBPACK_IMPORTED_MODULE_1__[\"Motion\"].animateOut(this.$element, this.animationOut, function () {\n          _this._updateARIA(false);\n\n          this.trigger('off.zf.toggler');\n          this.find('[data-mutate]').trigger('mutateme.zf.trigger');\n        });\n      }\n    }\n  }, {\n    key: \"_updateARIA\",\n    value: function _updateARIA(isOn) {\n      var id = this.$element[0].id;\n      jquery__WEBPACK_IMPORTED_MODULE_0___default()(\"[data-open=\\\"\".concat(id, \"\\\"], [data-close=\\\"\").concat(id, \"\\\"], [data-toggle=\\\"\").concat(id, \"\\\"]\")).attr({\n        'aria-expanded': isOn ? true : false\n      });\n    }\n    /**\n     * Destroys the instance of Toggler on the element.\n     * @function\n     */\n\n  }, {\n    key: \"_destroy\",\n    value: function _destroy() {\n      this.$element.off('.zf.toggler');\n    }\n  }]);\n\n  return Toggler;\n}(_foundation_core_plugin__WEBPACK_IMPORTED_MODULE_2__[\"Plugin\"]);\n\nToggler.defaults = {\n  /**\n   * Class of the element to toggle. It can be provided with or without \".\"\n   * @option\n   * @type {string}\n   */\n  toggler: undefined,\n\n  /**\n   * Tells the plugin if the element should animated when toggled.\n   * @option\n   * @type {boolean}\n   * @default false\n   */\n  animate: false\n};\n\n\n//# sourceURL=webpack:///./js/foundation.toggler.js?");

  /***/
}),

/***/ "./js/foundation.tooltip.js":
/*!**********************************!*\
  !*** ./js/foundation.tooltip.js ***!
  \**********************************/
/*! exports provided: Tooltip */
/***/ (function (module, __webpack_exports__, __webpack_require__) {

  "use strict";
  eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Tooltip\", function() { return Tooltip; });\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ \"jquery\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _foundation_core_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./foundation.core.utils */ \"./js/foundation.core.utils.js\");\n/* harmony import */ var _foundation_util_mediaQuery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./foundation.util.mediaQuery */ \"./js/foundation.util.mediaQuery.js\");\n/* harmony import */ var _foundation_util_triggers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./foundation.util.triggers */ \"./js/foundation.util.triggers.js\");\n/* harmony import */ var _foundation_positionable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./foundation.positionable */ \"./js/foundation.positionable.js\");\n\n\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _get(target, property, receiver) { if (typeof Reflect !== \"undefined\" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }\n\nfunction _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\n\n\n\n/**\n * Tooltip module.\n * @module foundation.tooltip\n * @requires foundation.util.box\n * @requires foundation.util.mediaQuery\n * @requires foundation.util.triggers\n */\n\nvar Tooltip =\n/*#__PURE__*/\nfunction (_Positionable) {\n  _inherits(Tooltip, _Positionable);\n\n  function Tooltip() {\n    _classCallCheck(this, Tooltip);\n\n    return _possibleConstructorReturn(this, _getPrototypeOf(Tooltip).apply(this, arguments));\n  }\n\n  _createClass(Tooltip, [{\n    key: \"_setup\",\n\n    /**\n     * Creates a new instance of a Tooltip.\n     * @class\n     * @name Tooltip\n     * @fires Tooltip#init\n     * @param {jQuery} element - jQuery object to attach a tooltip to.\n     * @param {Object} options - object to extend the default configuration.\n     */\n    value: function _setup(element, options) {\n      this.$element = element;\n      this.options = jquery__WEBPACK_IMPORTED_MODULE_0___default.a.extend({}, Tooltip.defaults, this.$element.data(), options);\n      this.className = 'Tooltip'; // ie9 back compat\n\n      this.isActive = false;\n      this.isClick = false; // Triggers init is idempotent, just need to make sure it is initialized\n\n      _foundation_util_triggers__WEBPACK_IMPORTED_MODULE_3__[\"Triggers\"].init(jquery__WEBPACK_IMPORTED_MODULE_0___default.a);\n\n      this._init();\n    }\n    /**\n     * Initializes the tooltip by setting the creating the tip element, adding it's text, setting private variables and setting attributes on the anchor.\n     * @private\n     */\n\n  }, {\n    key: \"_init\",\n    value: function _init() {\n      _foundation_util_mediaQuery__WEBPACK_IMPORTED_MODULE_2__[\"MediaQuery\"]._init();\n\n      var elemId = this.$element.attr('aria-describedby') || Object(_foundation_core_utils__WEBPACK_IMPORTED_MODULE_1__[\"GetYoDigits\"])(6, 'tooltip');\n      this.options.tipText = this.options.tipText || this.$element.attr('title');\n      this.template = this.options.template ? jquery__WEBPACK_IMPORTED_MODULE_0___default()(this.options.template) : this._buildTemplate(elemId);\n\n      if (this.options.allowHtml) {\n        this.template.appendTo(document.body).html(this.options.tipText).hide();\n      } else {\n        this.template.appendTo(document.body).text(this.options.tipText).hide();\n      }\n\n      this.$element.attr({\n        'title': '',\n        'aria-describedby': elemId,\n        'data-yeti-box': elemId,\n        'data-toggle': elemId,\n        'data-resize': elemId\n      }).addClass(this.options.triggerClass);\n\n      _get(_getPrototypeOf(Tooltip.prototype), \"_init\", this).call(this);\n\n      this._events();\n    }\n  }, {\n    key: \"_getDefaultPosition\",\n    value: function _getDefaultPosition() {\n      // handle legacy classnames\n      var elementClassName = this.$element[0].className;\n\n      if (this.$element[0] instanceof SVGElement) {\n        elementClassName = elementClassName.baseVal;\n      }\n\n      var position = elementClassName.match(/\\b(top|left|right|bottom)\\b/g);\n      return position ? position[0] : 'top';\n    }\n  }, {\n    key: \"_getDefaultAlignment\",\n    value: function _getDefaultAlignment() {\n      return 'center';\n    }\n  }, {\n    key: \"_getHOffset\",\n    value: function _getHOffset() {\n      if (this.position === 'left' || this.position === 'right') {\n        return this.options.hOffset + this.options.tooltipWidth;\n      } else {\n        return this.options.hOffset;\n      }\n    }\n  }, {\n    key: \"_getVOffset\",\n    value: function _getVOffset() {\n      if (this.position === 'top' || this.position === 'bottom') {\n        return this.options.vOffset + this.options.tooltipHeight;\n      } else {\n        return this.options.vOffset;\n      }\n    }\n    /**\n     * builds the tooltip element, adds attributes, and returns the template.\n     * @private\n     */\n\n  }, {\n    key: \"_buildTemplate\",\n    value: function _buildTemplate(id) {\n      var templateClasses = \"\".concat(this.options.tooltipClass, \" \").concat(this.options.templateClasses).trim();\n      var $template = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<div></div>').addClass(templateClasses).attr({\n        'role': 'tooltip',\n        'aria-hidden': true,\n        'data-is-active': false,\n        'data-is-focus': false,\n        'id': id\n      });\n      return $template;\n    }\n    /**\n     * sets the position class of an element and recursively calls itself until there are no more possible positions to attempt, or the tooltip element is no longer colliding.\n     * if the tooltip is larger than the screen width, default to full width - any user selected margin\n     * @private\n     */\n\n  }, {\n    key: \"_setPosition\",\n    value: function _setPosition() {\n      _get(_getPrototypeOf(Tooltip.prototype), \"_setPosition\", this).call(this, this.$element, this.template);\n    }\n    /**\n     * reveals the tooltip, and fires an event to close any other open tooltips on the page\n     * @fires Tooltip#closeme\n     * @fires Tooltip#show\n     * @function\n     */\n\n  }, {\n    key: \"show\",\n    value: function show() {\n      if (this.options.showOn !== 'all' && !_foundation_util_mediaQuery__WEBPACK_IMPORTED_MODULE_2__[\"MediaQuery\"].is(this.options.showOn)) {\n        // console.error('The screen is too small to display this tooltip');\n        return false;\n      }\n\n      var _this = this;\n\n      this.template.css('visibility', 'hidden').show();\n\n      this._setPosition();\n\n      this.template.removeClass('top bottom left right').addClass(this.position);\n      this.template.removeClass('align-top align-bottom align-left align-right align-center').addClass('align-' + this.alignment);\n      /**\n       * Fires to close all other open tooltips on the page\n       * @event Closeme#tooltip\n       */\n\n      this.$element.trigger('closeme.zf.tooltip', this.template.attr('id'));\n      this.template.attr({\n        'data-is-active': true,\n        'aria-hidden': false\n      });\n      _this.isActive = true; // console.log(this.template);\n\n      this.template.stop().hide().css('visibility', '').fadeIn(this.options.fadeInDuration, function () {//maybe do stuff?\n      });\n      /**\n       * Fires when the tooltip is shown\n       * @event Tooltip#show\n       */\n\n      this.$element.trigger('show.zf.tooltip');\n    }\n    /**\n     * Hides the current tooltip, and resets the positioning class if it was changed due to collision\n     * @fires Tooltip#hide\n     * @function\n     */\n\n  }, {\n    key: \"hide\",\n    value: function hide() {\n      // console.log('hiding', this.$element.data('yeti-box'));\n      var _this = this;\n\n      this.template.stop().attr({\n        'aria-hidden': true,\n        'data-is-active': false\n      }).fadeOut(this.options.fadeOutDuration, function () {\n        _this.isActive = false;\n        _this.isClick = false;\n      });\n      /**\n       * fires when the tooltip is hidden\n       * @event Tooltip#hide\n       */\n\n      this.$element.trigger('hide.zf.tooltip');\n    }\n    /**\n     * adds event listeners for the tooltip and its anchor\n     * TODO combine some of the listeners like focus and mouseenter, etc.\n     * @private\n     */\n\n  }, {\n    key: \"_events\",\n    value: function _events() {\n      var _this = this;\n\n      var hasTouch = 'ontouchstart' in window || typeof window.ontouchstart !== 'undefined';\n      var $template = this.template;\n      var isFocus = false; // `disableForTouch: Fully disable the tooltip on touch devices\n\n      if (hasTouch && this.options.disableForTouch) return;\n\n      if (!this.options.disableHover) {\n        this.$element.on('mouseenter.zf.tooltip', function (e) {\n          if (!_this.isActive) {\n            _this.timeout = setTimeout(function () {\n              _this.show();\n            }, _this.options.hoverDelay);\n          }\n        }).on('mouseleave.zf.tooltip', Object(_foundation_core_utils__WEBPACK_IMPORTED_MODULE_1__[\"ignoreMousedisappear\"])(function (e) {\n          clearTimeout(_this.timeout);\n\n          if (!isFocus || _this.isClick && !_this.options.clickOpen) {\n            _this.hide();\n          }\n        }));\n      }\n\n      if (hasTouch) {\n        this.$element.on('tap.zf.tooltip touchend.zf.tooltip', function (e) {\n          _this.isActive ? _this.hide() : _this.show();\n        });\n      }\n\n      if (this.options.clickOpen) {\n        this.$element.on('mousedown.zf.tooltip', function (e) {\n          if (_this.isClick) {//_this.hide();\n            // _this.isClick = false;\n          } else {\n            _this.isClick = true;\n\n            if ((_this.options.disableHover || !_this.$element.attr('tabindex')) && !_this.isActive) {\n              _this.show();\n            }\n          }\n        });\n      } else {\n        this.$element.on('mousedown.zf.tooltip', function (e) {\n          _this.isClick = true;\n        });\n      }\n\n      this.$element.on({\n        // 'toggle.zf.trigger': this.toggle.bind(this),\n        // 'close.zf.trigger': this.hide.bind(this)\n        'close.zf.trigger': this.hide.bind(this)\n      });\n      this.$element.on('focus.zf.tooltip', function (e) {\n        isFocus = true;\n\n        if (_this.isClick) {\n          // If we're not showing open on clicks, we need to pretend a click-launched focus isn't\n          // a real focus, otherwise on hover and come back we get bad behavior\n          if (!_this.options.clickOpen) {\n            isFocus = false;\n          }\n\n          return false;\n        } else {\n          _this.show();\n        }\n      }).on('focusout.zf.tooltip', function (e) {\n        isFocus = false;\n        _this.isClick = false;\n\n        _this.hide();\n      }).on('resizeme.zf.trigger', function () {\n        if (_this.isActive) {\n          _this._setPosition();\n        }\n      });\n    }\n    /**\n     * adds a toggle method, in addition to the static show() & hide() functions\n     * @function\n     */\n\n  }, {\n    key: \"toggle\",\n    value: function toggle() {\n      if (this.isActive) {\n        this.hide();\n      } else {\n        this.show();\n      }\n    }\n    /**\n     * Destroys an instance of tooltip, removes template element from the view.\n     * @function\n     */\n\n  }, {\n    key: \"_destroy\",\n    value: function _destroy() {\n      this.$element.attr('title', this.template.text()).off('.zf.trigger .zf.tooltip').removeClass(this.options.triggerClass).removeClass('top right left bottom').removeAttr('aria-describedby data-disable-hover data-resize data-toggle data-tooltip data-yeti-box');\n      this.template.remove();\n    }\n  }]);\n\n  return Tooltip;\n}(_foundation_positionable__WEBPACK_IMPORTED_MODULE_4__[\"Positionable\"]);\n\nTooltip.defaults = {\n  /**\n   * Time, in ms, before a tooltip should open on hover.\n   * @option\n   * @type {number}\n   * @default 200\n   */\n  hoverDelay: 200,\n\n  /**\n   * Time, in ms, a tooltip should take to fade into view.\n   * @option\n   * @type {number}\n   * @default 150\n   */\n  fadeInDuration: 150,\n\n  /**\n   * Time, in ms, a tooltip should take to fade out of view.\n   * @option\n   * @type {number}\n   * @default 150\n   */\n  fadeOutDuration: 150,\n\n  /**\n   * Disables hover events from opening the tooltip if set to true\n   * @option\n   * @type {boolean}\n   * @default false\n   */\n  disableHover: false,\n\n  /**\n   * Disable the tooltip for touch devices.\n   * This can be useful to make elements with a tooltip on it trigger their\n   * action on the first tap instead of displaying the tooltip.\n   * @option\n   * @type {booelan}\n   * @default false\n   */\n  disableForTouch: false,\n\n  /**\n   * Optional addtional classes to apply to the tooltip template on init.\n   * @option\n   * @type {string}\n   * @default ''\n   */\n  templateClasses: '',\n\n  /**\n   * Non-optional class added to tooltip templates. Foundation default is 'tooltip'.\n   * @option\n   * @type {string}\n   * @default 'tooltip'\n   */\n  tooltipClass: 'tooltip',\n\n  /**\n   * Class applied to the tooltip anchor element.\n   * @option\n   * @type {string}\n   * @default 'has-tip'\n   */\n  triggerClass: 'has-tip',\n\n  /**\n   * Minimum breakpoint size at which to open the tooltip.\n   * @option\n   * @type {string}\n   * @default 'small'\n   */\n  showOn: 'small',\n\n  /**\n   * Custom template to be used to generate markup for tooltip.\n   * @option\n   * @type {string}\n   * @default ''\n   */\n  template: '',\n\n  /**\n   * Text displayed in the tooltip template on open.\n   * @option\n   * @type {string}\n   * @default ''\n   */\n  tipText: '',\n  touchCloseText: 'Tap to close.',\n\n  /**\n   * Allows the tooltip to remain open if triggered with a click or touch event.\n   * @option\n   * @type {boolean}\n   * @default true\n   */\n  clickOpen: true,\n\n  /**\n   * Position of tooltip. Can be left, right, bottom, top, or auto.\n   * @option\n   * @type {string}\n   * @default 'auto'\n   */\n  position: 'auto',\n\n  /**\n   * Alignment of tooltip relative to anchor. Can be left, right, bottom, top, center, or auto.\n   * @option\n   * @type {string}\n   * @default 'auto'\n   */\n  alignment: 'auto',\n\n  /**\n   * Allow overlap of container/window. If false, tooltip will first try to\n   * position as defined by data-position and data-alignment, but reposition if\n   * it would cause an overflow.  @option\n   * @type {boolean}\n   * @default false\n   */\n  allowOverlap: false,\n\n  /**\n   * Allow overlap of only the bottom of the container. This is the most common\n   * behavior for dropdowns, allowing the dropdown to extend the bottom of the\n   * screen but not otherwise influence or break out of the container.\n   * Less common for tooltips.\n   * @option\n   * @type {boolean}\n   * @default false\n   */\n  allowBottomOverlap: false,\n\n  /**\n   * Distance, in pixels, the template should push away from the anchor on the Y axis.\n   * @option\n   * @type {number}\n   * @default 0\n   */\n  vOffset: 0,\n\n  /**\n   * Distance, in pixels, the template should push away from the anchor on the X axis\n   * @option\n   * @type {number}\n   * @default 0\n   */\n  hOffset: 0,\n\n  /**\n   * Distance, in pixels, the template spacing auto-adjust for a vertical tooltip\n   * @option\n   * @type {number}\n   * @default 14\n   */\n  tooltipHeight: 14,\n\n  /**\n   * Distance, in pixels, the template spacing auto-adjust for a horizontal tooltip\n   * @option\n   * @type {number}\n   * @default 12\n   */\n  tooltipWidth: 12,\n\n  /**\n  * Allow HTML in tooltip. Warning: If you are loading user-generated content into tooltips,\n  * allowing HTML may open yourself up to XSS attacks.\n  * @option\n  * @type {boolean}\n  * @default false\n  */\n  allowHtml: false\n};\n/**\n * TODO utilize resize event trigger\n */\n\n\n\n//# sourceURL=webpack:///./js/foundation.tooltip.js?");

  /***/
}),

/***/ "./js/foundation.util.box.js":
/*!***********************************!*\
  !*** ./js/foundation.util.box.js ***!
  \***********************************/
/*! exports provided: Box */
/***/ (function (module, __webpack_exports__, __webpack_require__) {

  "use strict";
  eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Box\", function() { return Box; });\n\n\nvar Box = {\n  ImNotTouchingYou: ImNotTouchingYou,\n  OverlapArea: OverlapArea,\n  GetDimensions: GetDimensions,\n  GetExplicitOffsets: GetExplicitOffsets\n  /**\n   * Compares the dimensions of an element to a container and determines collision events with container.\n   * @function\n   * @param {jQuery} element - jQuery object to test for collisions.\n   * @param {jQuery} parent - jQuery object to use as bounding container.\n   * @param {Boolean} lrOnly - set to true to check left and right values only.\n   * @param {Boolean} tbOnly - set to true to check top and bottom values only.\n   * @default if no parent object passed, detects collisions with `window`.\n   * @returns {Boolean} - true if collision free, false if a collision in any direction.\n   */\n\n};\n\nfunction ImNotTouchingYou(element, parent, lrOnly, tbOnly, ignoreBottom) {\n  return OverlapArea(element, parent, lrOnly, tbOnly, ignoreBottom) === 0;\n}\n\nfunction OverlapArea(element, parent, lrOnly, tbOnly, ignoreBottom) {\n  var eleDims = GetDimensions(element),\n      topOver,\n      bottomOver,\n      leftOver,\n      rightOver;\n\n  if (parent) {\n    var parDims = GetDimensions(parent);\n    bottomOver = parDims.height + parDims.offset.top - (eleDims.offset.top + eleDims.height);\n    topOver = eleDims.offset.top - parDims.offset.top;\n    leftOver = eleDims.offset.left - parDims.offset.left;\n    rightOver = parDims.width + parDims.offset.left - (eleDims.offset.left + eleDims.width);\n  } else {\n    bottomOver = eleDims.windowDims.height + eleDims.windowDims.offset.top - (eleDims.offset.top + eleDims.height);\n    topOver = eleDims.offset.top - eleDims.windowDims.offset.top;\n    leftOver = eleDims.offset.left - eleDims.windowDims.offset.left;\n    rightOver = eleDims.windowDims.width - (eleDims.offset.left + eleDims.width);\n  }\n\n  bottomOver = ignoreBottom ? 0 : Math.min(bottomOver, 0);\n  topOver = Math.min(topOver, 0);\n  leftOver = Math.min(leftOver, 0);\n  rightOver = Math.min(rightOver, 0);\n\n  if (lrOnly) {\n    return leftOver + rightOver;\n  }\n\n  if (tbOnly) {\n    return topOver + bottomOver;\n  } // use sum of squares b/c we care about overlap area.\n\n\n  return Math.sqrt(topOver * topOver + bottomOver * bottomOver + leftOver * leftOver + rightOver * rightOver);\n}\n/**\n * Uses native methods to return an object of dimension values.\n * @function\n * @param {jQuery || HTML} element - jQuery object or DOM element for which to get the dimensions. Can be any element other that document or window.\n * @returns {Object} - nested object of integer pixel values\n * TODO - if element is window, return only those values.\n */\n\n\nfunction GetDimensions(elem) {\n  elem = elem.length ? elem[0] : elem;\n\n  if (elem === window || elem === document) {\n    throw new Error(\"I'm sorry, Dave. I'm afraid I can't do that.\");\n  }\n\n  var rect = elem.getBoundingClientRect(),\n      parRect = elem.parentNode.getBoundingClientRect(),\n      winRect = document.body.getBoundingClientRect(),\n      winY = window.pageYOffset,\n      winX = window.pageXOffset;\n  return {\n    width: rect.width,\n    height: rect.height,\n    offset: {\n      top: rect.top + winY,\n      left: rect.left + winX\n    },\n    parentDims: {\n      width: parRect.width,\n      height: parRect.height,\n      offset: {\n        top: parRect.top + winY,\n        left: parRect.left + winX\n      }\n    },\n    windowDims: {\n      width: winRect.width,\n      height: winRect.height,\n      offset: {\n        top: winY,\n        left: winX\n      }\n    }\n  };\n}\n/**\n * Returns an object of top and left integer pixel values for dynamically rendered elements,\n * such as: Tooltip, Reveal, and Dropdown. Maintained for backwards compatibility, and where\n * you don't know alignment, but generally from\n * 6.4 forward you should use GetExplicitOffsets, as GetOffsets conflates position and alignment.\n * @function\n * @param {jQuery} element - jQuery object for the element being positioned.\n * @param {jQuery} anchor - jQuery object for the element's anchor point.\n * @param {String} position - a string relating to the desired position of the element, relative to it's anchor\n * @param {Number} vOffset - integer pixel value of desired vertical separation between anchor and element.\n * @param {Number} hOffset - integer pixel value of desired horizontal separation between anchor and element.\n * @param {Boolean} isOverflow - if a collision event is detected, sets to true to default the element to full width - any desired offset.\n * TODO alter/rewrite to work with `em` values as well/instead of pixels\n */\n\n\nfunction GetExplicitOffsets(element, anchor, position, alignment, vOffset, hOffset, isOverflow) {\n  var $eleDims = GetDimensions(element),\n      $anchorDims = anchor ? GetDimensions(anchor) : null;\n  var topVal, leftVal;\n\n  if ($anchorDims !== null) {\n    // set position related attribute\n    switch (position) {\n      case 'top':\n        topVal = $anchorDims.offset.top - ($eleDims.height + vOffset);\n        break;\n\n      case 'bottom':\n        topVal = $anchorDims.offset.top + $anchorDims.height + vOffset;\n        break;\n\n      case 'left':\n        leftVal = $anchorDims.offset.left - ($eleDims.width + hOffset);\n        break;\n\n      case 'right':\n        leftVal = $anchorDims.offset.left + $anchorDims.width + hOffset;\n        break;\n    } // set alignment related attribute\n\n\n    switch (position) {\n      case 'top':\n      case 'bottom':\n        switch (alignment) {\n          case 'left':\n            leftVal = $anchorDims.offset.left + hOffset;\n            break;\n\n          case 'right':\n            leftVal = $anchorDims.offset.left - $eleDims.width + $anchorDims.width - hOffset;\n            break;\n\n          case 'center':\n            leftVal = isOverflow ? hOffset : $anchorDims.offset.left + $anchorDims.width / 2 - $eleDims.width / 2 + hOffset;\n            break;\n        }\n\n        break;\n\n      case 'right':\n      case 'left':\n        switch (alignment) {\n          case 'bottom':\n            topVal = $anchorDims.offset.top - vOffset + $anchorDims.height - $eleDims.height;\n            break;\n\n          case 'top':\n            topVal = $anchorDims.offset.top + vOffset;\n            break;\n\n          case 'center':\n            topVal = $anchorDims.offset.top + vOffset + $anchorDims.height / 2 - $eleDims.height / 2;\n            break;\n        }\n\n        break;\n    }\n  }\n\n  return {\n    top: topVal,\n    left: leftVal\n  };\n}\n\n\n\n//# sourceURL=webpack:///./js/foundation.util.box.js?");

  /***/
}),

/***/ "./js/foundation.util.imageLoader.js":
/*!*******************************************!*\
  !*** ./js/foundation.util.imageLoader.js ***!
  \*******************************************/
/*! exports provided: onImagesLoaded */
/***/ (function (module, __webpack_exports__, __webpack_require__) {

  "use strict";
  eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"onImagesLoaded\", function() { return onImagesLoaded; });\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ \"jquery\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);\n\n\n\n/**\n * Runs a callback function when images are fully loaded.\n * @param {Object} images - Image(s) to check if loaded.\n * @param {Func} callback - Function to execute when image is fully loaded.\n */\n\nfunction onImagesLoaded(images, callback) {\n  var self = this,\n      unloaded = images.length;\n\n  if (unloaded === 0) {\n    callback();\n  }\n\n  images.each(function () {\n    // Check if image is loaded\n    if (this.complete && typeof this.naturalWidth !== 'undefined') {\n      singleImageLoaded();\n    } else {\n      // If the above check failed, simulate loading on detached element.\n      var image = new Image(); // Still count image as loaded if it finalizes with an error.\n\n      var events = \"load.zf.images error.zf.images\";\n      jquery__WEBPACK_IMPORTED_MODULE_0___default()(image).one(events, function me(event) {\n        // Unbind the event listeners. We're using 'one' but only one of the two events will have fired.\n        jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).off(events, me);\n        singleImageLoaded();\n      });\n      image.src = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).attr('src');\n    }\n  });\n\n  function singleImageLoaded() {\n    unloaded--;\n\n    if (unloaded === 0) {\n      callback();\n    }\n  }\n}\n\n\n\n//# sourceURL=webpack:///./js/foundation.util.imageLoader.js?");

  /***/
}),

/***/ "./js/foundation.util.keyboard.js":
/*!****************************************!*\
  !*** ./js/foundation.util.keyboard.js ***!
  \****************************************/
/*! exports provided: Keyboard */
/***/ (function (module, __webpack_exports__, __webpack_require__) {

  "use strict";
  eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Keyboard\", function() { return Keyboard; });\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ \"jquery\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _foundation_core_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./foundation.core.utils */ \"./js/foundation.core.utils.js\");\n/*******************************************\n *                                         *\n * This util was created by Marius Olbertz *\n * Please thank Marius on GitHub /owlbertz *\n * or the web http://www.mariusolbertz.de/ *\n *                                         *\n ******************************************/\n\n\n\n\nvar keyCodes = {\n  9: 'TAB',\n  13: 'ENTER',\n  27: 'ESCAPE',\n  32: 'SPACE',\n  35: 'END',\n  36: 'HOME',\n  37: 'ARROW_LEFT',\n  38: 'ARROW_UP',\n  39: 'ARROW_RIGHT',\n  40: 'ARROW_DOWN'\n};\nvar commands = {}; // Functions pulled out to be referenceable from internals\n\nfunction findFocusable($element) {\n  if (!$element) {\n    return false;\n  }\n\n  return $element.find('a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, *[tabindex], *[contenteditable]').filter(function () {\n    if (!jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).is(':visible') || jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).attr('tabindex') < 0) {\n      return false;\n    } //only have visible elements and those that have a tabindex greater or equal 0\n\n\n    return true;\n  });\n}\n\nfunction parseKey(event) {\n  var key = keyCodes[event.which || event.keyCode] || String.fromCharCode(event.which).toUpperCase(); // Remove un-printable characters, e.g. for `fromCharCode` calls for CTRL only events\n\n  key = key.replace(/\\W+/, '');\n  if (event.shiftKey) key = \"SHIFT_\".concat(key);\n  if (event.ctrlKey) key = \"CTRL_\".concat(key);\n  if (event.altKey) key = \"ALT_\".concat(key); // Remove trailing underscore, in case only modifiers were used (e.g. only `CTRL_ALT`)\n\n  key = key.replace(/_$/, '');\n  return key;\n}\n\nvar Keyboard = {\n  keys: getKeyCodes(keyCodes),\n\n  /**\n   * Parses the (keyboard) event and returns a String that represents its key\n   * Can be used like Foundation.parseKey(event) === Foundation.keys.SPACE\n   * @param {Event} event - the event generated by the event handler\n   * @return String key - String that represents the key pressed\n   */\n  parseKey: parseKey,\n\n  /**\n   * Handles the given (keyboard) event\n   * @param {Event} event - the event generated by the event handler\n   * @param {String} component - Foundation component's name, e.g. Slider or Reveal\n   * @param {Objects} functions - collection of functions that are to be executed\n   */\n  handleKey: function handleKey(event, component, functions) {\n    var commandList = commands[component],\n        keyCode = this.parseKey(event),\n        cmds,\n        command,\n        fn;\n    if (!commandList) return console.warn('Component not defined!'); // Ignore the event if it was already handled\n\n    if (event.zfIsKeyHandled === true) return; // This component does not differentiate between ltr and rtl\n\n    if (typeof commandList.ltr === 'undefined') {\n      cmds = commandList; // use plain list\n    } else {\n      // merge ltr and rtl: if document is rtl, rtl overwrites ltr and vice versa\n      if (Object(_foundation_core_utils__WEBPACK_IMPORTED_MODULE_1__[\"rtl\"])()) cmds = jquery__WEBPACK_IMPORTED_MODULE_0___default.a.extend({}, commandList.ltr, commandList.rtl);else cmds = jquery__WEBPACK_IMPORTED_MODULE_0___default.a.extend({}, commandList.rtl, commandList.ltr);\n    }\n\n    command = cmds[keyCode];\n    fn = functions[command]; // Execute the handler if found\n\n    if (fn && typeof fn === 'function') {\n      var returnValue = fn.apply(); // Mark the event as \"handled\" to prevent future handlings\n\n      event.zfIsKeyHandled = true; // Execute function when event was handled\n\n      if (functions.handled || typeof functions.handled === 'function') {\n        functions.handled(returnValue);\n      }\n    } else {\n      // Execute function when event was not handled\n      if (functions.unhandled || typeof functions.unhandled === 'function') {\n        functions.unhandled();\n      }\n    }\n  },\n\n  /**\n   * Finds all focusable elements within the given `$element`\n   * @param {jQuery} $element - jQuery object to search within\n   * @return {jQuery} $focusable - all focusable elements within `$element`\n   */\n  findFocusable: findFocusable,\n\n  /**\n   * Returns the component name name\n   * @param {Object} component - Foundation component, e.g. Slider or Reveal\n   * @return String componentName\n   */\n  register: function register(componentName, cmds) {\n    commands[componentName] = cmds;\n  },\n  // TODO9438: These references to Keyboard need to not require global. Will 'this' work in this context?\n  //\n\n  /**\n   * Traps the focus in the given element.\n   * @param  {jQuery} $element  jQuery object to trap the foucs into.\n   */\n  trapFocus: function trapFocus($element) {\n    var $focusable = findFocusable($element),\n        $firstFocusable = $focusable.eq(0),\n        $lastFocusable = $focusable.eq(-1);\n    $element.on('keydown.zf.trapfocus', function (event) {\n      if (event.target === $lastFocusable[0] && parseKey(event) === 'TAB') {\n        event.preventDefault();\n        $firstFocusable.focus();\n      } else if (event.target === $firstFocusable[0] && parseKey(event) === 'SHIFT_TAB') {\n        event.preventDefault();\n        $lastFocusable.focus();\n      }\n    });\n  },\n\n  /**\n   * Releases the trapped focus from the given element.\n   * @param  {jQuery} $element  jQuery object to release the focus for.\n   */\n  releaseFocus: function releaseFocus($element) {\n    $element.off('keydown.zf.trapfocus');\n  }\n};\n/*\n * Constants for easier comparing.\n * Can be used like Foundation.parseKey(event) === Foundation.keys.SPACE\n */\n\nfunction getKeyCodes(kcs) {\n  var k = {};\n\n  for (var kc in kcs) {\n    k[kcs[kc]] = kcs[kc];\n  }\n\n  return k;\n}\n\n\n\n//# sourceURL=webpack:///./js/foundation.util.keyboard.js?");

  /***/
}),

/***/ "./js/foundation.util.mediaQuery.js":
/*!******************************************!*\
  !*** ./js/foundation.util.mediaQuery.js ***!
  \******************************************/
/*! exports provided: MediaQuery */
/***/ (function (module, __webpack_exports__, __webpack_require__) {

  "use strict";
  eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MediaQuery\", function() { return MediaQuery; });\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ \"jquery\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);\n\n\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance\"); }\n\nfunction _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n // Default set of media queries\n\nvar defaultQueries = {\n  'default': 'only screen',\n  landscape: 'only screen and (orientation: landscape)',\n  portrait: 'only screen and (orientation: portrait)',\n  retina: 'only screen and (-webkit-min-device-pixel-ratio: 2),' + 'only screen and (min--moz-device-pixel-ratio: 2),' + 'only screen and (-o-min-device-pixel-ratio: 2/1),' + 'only screen and (min-device-pixel-ratio: 2),' + 'only screen and (min-resolution: 192dpi),' + 'only screen and (min-resolution: 2dppx)'\n}; // matchMedia() polyfill - Test a CSS media type/query in JS.\n// Authors & copyright © 2012: Scott Jehl, Paul Irish, Nicholas Zakas, David Knight. MIT license\n\n/* eslint-disable */\n\nwindow.matchMedia || (window.matchMedia = function () {\n  \"use strict\"; // For browsers that support matchMedium api such as IE 9 and webkit\n\n  var styleMedia = window.styleMedia || window.media; // For those that don't support matchMedium\n\n  if (!styleMedia) {\n    var style = document.createElement('style'),\n        script = document.getElementsByTagName('script')[0],\n        info = null;\n    style.type = 'text/css';\n    style.id = 'matchmediajs-test';\n\n    if (!script) {\n      document.head.appendChild(style);\n    } else {\n      script.parentNode.insertBefore(style, script);\n    } // 'style.currentStyle' is used by IE <= 8 and 'window.getComputedStyle' for all other browsers\n\n\n    info = 'getComputedStyle' in window && window.getComputedStyle(style, null) || style.currentStyle;\n    styleMedia = {\n      matchMedium: function matchMedium(media) {\n        var text = '@media ' + media + '{ #matchmediajs-test { width: 1px; } }'; // 'style.styleSheet' is used by IE <= 8 and 'style.textContent' for all other browsers\n\n        if (style.styleSheet) {\n          style.styleSheet.cssText = text;\n        } else {\n          style.textContent = text;\n        } // Test if media query is true or false\n\n\n        return info.width === '1px';\n      }\n    };\n  }\n\n  return function (media) {\n    return {\n      matches: styleMedia.matchMedium(media || 'all'),\n      media: media || 'all'\n    };\n  };\n}());\n/* eslint-enable */\n\nvar MediaQuery = {\n  queries: [],\n  current: '',\n\n  /**\n   * Initializes the media query helper, by extracting the breakpoint list from the CSS and activating the breakpoint watcher.\n   * @function\n   * @private\n   */\n  _init: function _init() {\n    // make sure the initialization is only done once when calling _init() several times\n    if (this.isInitialized === true) {\n      return;\n    } else {\n      this.isInitialized = true;\n    }\n\n    var self = this;\n    var $meta = jquery__WEBPACK_IMPORTED_MODULE_0___default()('meta.foundation-mq');\n\n    if (!$meta.length) {\n      jquery__WEBPACK_IMPORTED_MODULE_0___default()('<meta class=\"foundation-mq\">').appendTo(document.head);\n    }\n\n    var extractedStyles = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.foundation-mq').css('font-family');\n    var namedQueries;\n    namedQueries = parseStyleToObject(extractedStyles);\n    self.queries = []; // reset\n\n    for (var key in namedQueries) {\n      if (namedQueries.hasOwnProperty(key)) {\n        self.queries.push({\n          name: key,\n          value: \"only screen and (min-width: \".concat(namedQueries[key], \")\")\n        });\n      }\n    }\n\n    this.current = this._getCurrentSize();\n\n    this._watcher();\n  },\n\n  /**\n   * Reinitializes the media query helper.\n   * Useful if your CSS breakpoint configuration has just been loaded or has changed since the initialization.\n   * @function\n   * @private\n   */\n  _reInit: function _reInit() {\n    this.isInitialized = false;\n\n    this._init();\n  },\n\n  /**\n   * Checks if the screen is at least as wide as a breakpoint.\n   * @function\n   * @param {String} size - Name of the breakpoint to check.\n   * @returns {Boolean} `true` if the breakpoint matches, `false` if it's smaller.\n   */\n  atLeast: function atLeast(size) {\n    var query = this.get(size);\n\n    if (query) {\n      return window.matchMedia(query).matches;\n    }\n\n    return false;\n  },\n\n  /**\n   * Checks if the screen is within the given breakpoint.\n   * If smaller than the breakpoint of larger than its upper limit it returns false.\n   * @function\n   * @param {String} size - Name of the breakpoint to check.\n   * @returns {Boolean} `true` if the breakpoint matches, `false` otherwise.\n   */\n  only: function only(size) {\n    return size === this._getCurrentSize();\n  },\n\n  /**\n   * Checks if the screen is within a breakpoint or smaller.\n   * @function\n   * @param {String} size - Name of the breakpoint to check.\n   * @returns {Boolean} `true` if the breakpoint matches, `false` if it's larger.\n   */\n  upTo: function upTo(size) {\n    var nextSize = this.next(size); // If the next breakpoint does not match, the screen is smaller than\n    // the upper limit of this breakpoint.\n\n    if (nextSize) {\n      return !this.atLeast(nextSize);\n    } // If there is no next breakpoint, the \"size\" breakpoint does not have\n    // an upper limit and the screen will always be within it or smaller.\n\n\n    return true;\n  },\n\n  /**\n   * Checks if the screen matches to a breakpoint.\n   * @function\n   * @param {String} size - Name of the breakpoint to check, either 'small only' or 'small'. Omitting 'only' falls back to using atLeast() method.\n   * @returns {Boolean} `true` if the breakpoint matches, `false` if it does not.\n   */\n  is: function is(size) {\n    var parts = size.trim().split(' ').filter(function (p) {\n      return !!p.length;\n    });\n\n    var _parts = _slicedToArray(parts, 2),\n        bpSize = _parts[0],\n        _parts$ = _parts[1],\n        bpModifier = _parts$ === void 0 ? '' : _parts$; // Only the breakpont\n\n\n    if (bpModifier === 'only') {\n      return this.only(bpSize);\n    } // At least the breakpoint (included)\n\n\n    if (!bpModifier || bpModifier === 'up') {\n      return this.atLeast(bpSize);\n    } // Up to the breakpoint (included)\n\n\n    if (bpModifier === 'down') {\n      return this.upTo(bpSize);\n    }\n\n    throw new Error(\"\\n      Invalid breakpoint passed to MediaQuery.is().\\n      Expected a breakpoint name formatted like \\\"<size> <modifier>\\\", got \\\"\".concat(size, \"\\\".\\n    \"));\n  },\n\n  /**\n   * Gets the media query of a breakpoint.\n   * @function\n   * @param {String} size - Name of the breakpoint to get.\n   * @returns {String|null} - The media query of the breakpoint, or `null` if the breakpoint doesn't exist.\n   */\n  get: function get(size) {\n    for (var i in this.queries) {\n      if (this.queries.hasOwnProperty(i)) {\n        var query = this.queries[i];\n        if (size === query.name) return query.value;\n      }\n    }\n\n    return null;\n  },\n\n  /**\n   * Get the breakpoint following the given breakpoint.\n   * @function\n   * @param {String} size - Name of the breakpoint.\n   * @returns {String|null} - The name of the following breakpoint, or `null` if the passed breakpoint was the last one.\n   */\n  next: function next(size) {\n    var _this = this;\n\n    var queryIndex = this.queries.findIndex(function (q) {\n      return _this._getQueryName(q) === size;\n    });\n\n    if (queryIndex === -1) {\n      throw new Error(\"\\n        Unknown breakpoint \\\"\".concat(size, \"\\\" passed to MediaQuery.next().\\n        Ensure it is present in your Sass \\\"$breakpoints\\\" setting.\\n      \"));\n    }\n\n    var nextQuery = this.queries[queryIndex + 1];\n    return nextQuery ? nextQuery.name : null;\n  },\n\n  /**\n   * Returns the name of the breakpoint related to the given value.\n   * @function\n   * @private\n   * @param {String|Object} value - Breakpoint name or query object.\n   * @returns {String} Name of the breakpoint.\n   */\n  _getQueryName: function _getQueryName(value) {\n    if (typeof value === 'string') return value;\n    if (_typeof(value) === 'object') return value.name;\n    throw new TypeError(\"\\n      Invalid value passed to MediaQuery._getQueryName().\\n      Expected a breakpoint name (String) or a breakpoint query (Object), got \\\"\".concat(value, \"\\\" (\").concat(_typeof(value), \")\\n    \"));\n  },\n\n  /**\n   * Gets the current breakpoint name by testing every breakpoint and returning the last one to match (the biggest one).\n   * @function\n   * @private\n   * @returns {String} Name of the current breakpoint.\n   */\n  _getCurrentSize: function _getCurrentSize() {\n    var matched;\n\n    for (var i = 0; i < this.queries.length; i++) {\n      var query = this.queries[i];\n\n      if (window.matchMedia(query.value).matches) {\n        matched = query;\n      }\n    }\n\n    return matched && this._getQueryName(matched);\n  },\n\n  /**\n   * Activates the breakpoint watcher, which fires an event on the window whenever the breakpoint changes.\n   * @function\n   * @private\n   */\n  _watcher: function _watcher() {\n    var _this2 = this;\n\n    jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).off('resize.zf.mediaquery').on('resize.zf.mediaquery', function () {\n      var newSize = _this2._getCurrentSize(),\n          currentSize = _this2.current;\n\n      if (newSize !== currentSize) {\n        // Change the current media query\n        _this2.current = newSize; // Broadcast the media query change on the window\n\n        jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).trigger('changed.zf.mediaquery', [newSize, currentSize]);\n      }\n    });\n  }\n}; // Thank you: https://github.com/sindresorhus/query-string\n\nfunction parseStyleToObject(str) {\n  var styleObject = {};\n\n  if (typeof str !== 'string') {\n    return styleObject;\n  }\n\n  str = str.trim().slice(1, -1); // browsers re-quote string style values\n\n  if (!str) {\n    return styleObject;\n  }\n\n  styleObject = str.split('&').reduce(function (ret, param) {\n    var parts = param.replace(/\\+/g, ' ').split('=');\n    var key = parts[0];\n    var val = parts[1];\n    key = decodeURIComponent(key); // missing `=` should be `null`:\n    // http://w3.org/TR/2012/WD-url-20120524/#collect-url-parameters\n\n    val = typeof val === 'undefined' ? null : decodeURIComponent(val);\n\n    if (!ret.hasOwnProperty(key)) {\n      ret[key] = val;\n    } else if (Array.isArray(ret[key])) {\n      ret[key].push(val);\n    } else {\n      ret[key] = [ret[key], val];\n    }\n\n    return ret;\n  }, {});\n  return styleObject;\n}\n\n\n\n//# sourceURL=webpack:///./js/foundation.util.mediaQuery.js?");

  /***/
}),

/***/ "./js/foundation.util.motion.js":
/*!**************************************!*\
  !*** ./js/foundation.util.motion.js ***!
  \**************************************/
/*! exports provided: Move, Motion */
/***/ (function (module, __webpack_exports__, __webpack_require__) {

  "use strict";
  eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Move\", function() { return Move; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Motion\", function() { return Motion; });\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ \"jquery\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _foundation_core_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./foundation.core.utils */ \"./js/foundation.core.utils.js\");\n\n\n\n\n/**\n * Motion module.\n * @module foundation.motion\n */\n\nvar initClasses = ['mui-enter', 'mui-leave'];\nvar activeClasses = ['mui-enter-active', 'mui-leave-active'];\nvar Motion = {\n  animateIn: function animateIn(element, animation, cb) {\n    animate(true, element, animation, cb);\n  },\n  animateOut: function animateOut(element, animation, cb) {\n    animate(false, element, animation, cb);\n  }\n};\n\nfunction Move(duration, elem, fn) {\n  var anim,\n      prog,\n      start = null; // console.log('called');\n\n  if (duration === 0) {\n    fn.apply(elem);\n    elem.trigger('finished.zf.animate', [elem]).triggerHandler('finished.zf.animate', [elem]);\n    return;\n  }\n\n  function move(ts) {\n    if (!start) start = ts; // console.log(start, ts);\n\n    prog = ts - start;\n    fn.apply(elem);\n\n    if (prog < duration) {\n      anim = window.requestAnimationFrame(move, elem);\n    } else {\n      window.cancelAnimationFrame(anim);\n      elem.trigger('finished.zf.animate', [elem]).triggerHandler('finished.zf.animate', [elem]);\n    }\n  }\n\n  anim = window.requestAnimationFrame(move);\n}\n/**\n * Animates an element in or out using a CSS transition class.\n * @function\n * @private\n * @param {Boolean} isIn - Defines if the animation is in or out.\n * @param {Object} element - jQuery or HTML object to animate.\n * @param {String} animation - CSS class to use.\n * @param {Function} cb - Callback to run when animation is finished.\n */\n\n\nfunction animate(isIn, element, animation, cb) {\n  element = jquery__WEBPACK_IMPORTED_MODULE_0___default()(element).eq(0);\n  if (!element.length) return;\n  var initClass = isIn ? initClasses[0] : initClasses[1];\n  var activeClass = isIn ? activeClasses[0] : activeClasses[1]; // Set up the animation\n\n  reset();\n  element.addClass(animation).css('transition', 'none');\n  requestAnimationFrame(function () {\n    element.addClass(initClass);\n    if (isIn) element.show();\n  }); // Start the animation\n\n  requestAnimationFrame(function () {\n    // will trigger the browser to synchronously calculate the style and layout\n    // also called reflow or layout thrashing\n    // see https://gist.github.com/paulirish/5d52fb081b3570c81e3a\n    element[0].offsetWidth;\n    element.css('transition', '').addClass(activeClass);\n  }); // Clean up the animation when it finishes\n\n  element.one(Object(_foundation_core_utils__WEBPACK_IMPORTED_MODULE_1__[\"transitionend\"])(element), finish); // Hides the element (for out animations), resets the element, and runs a callback\n\n  function finish() {\n    if (!isIn) element.hide();\n    reset();\n    if (cb) cb.apply(element);\n  } // Resets transitions and removes motion-specific classes\n\n\n  function reset() {\n    element[0].style.transitionDuration = 0;\n    element.removeClass(\"\".concat(initClass, \" \").concat(activeClass, \" \").concat(animation));\n  }\n}\n\n\n\n//# sourceURL=webpack:///./js/foundation.util.motion.js?");

  /***/
}),

/***/ "./js/foundation.util.nest.js":
/*!************************************!*\
  !*** ./js/foundation.util.nest.js ***!
  \************************************/
/*! exports provided: Nest */
/***/ (function (module, __webpack_exports__, __webpack_require__) {

  "use strict";
  eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Nest\", function() { return Nest; });\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ \"jquery\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);\n\n\n\nvar Nest = {\n  Feather: function Feather(menu) {\n    var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'zf';\n    menu.attr('role', 'menubar');\n    menu.find('a').attr({\n      'role': 'menuitem'\n    });\n    var items = menu.find('li').attr({\n      'role': 'none'\n    }),\n        subMenuClass = \"is-\".concat(type, \"-submenu\"),\n        subItemClass = \"\".concat(subMenuClass, \"-item\"),\n        hasSubClass = \"is-\".concat(type, \"-submenu-parent\"),\n        applyAria = type !== 'accordion'; // Accordions handle their own ARIA attriutes.\n\n    items.each(function () {\n      var $item = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this),\n          $sub = $item.children('ul');\n\n      if ($sub.length) {\n        $item.addClass(hasSubClass);\n\n        if (applyAria) {\n          $item.attr({\n            'aria-haspopup': true,\n            'aria-label': $item.children('a:first').text()\n          }); // Note:  Drilldowns behave differently in how they hide, and so need\n          // additional attributes.  We should look if this possibly over-generalized\n          // utility (Nest) is appropriate when we rework menus in 6.4\n\n          if (type === 'drilldown') {\n            $item.attr({\n              'aria-expanded': false\n            });\n          }\n        }\n\n        $sub.addClass(\"submenu \".concat(subMenuClass)).attr({\n          'data-submenu': '',\n          'role': 'menubar'\n        });\n\n        if (type === 'drilldown') {\n          $sub.attr({\n            'aria-hidden': true\n          });\n        }\n      }\n\n      if ($item.parent('[data-submenu]').length) {\n        $item.addClass(\"is-submenu-item \".concat(subItemClass));\n      }\n    });\n    return;\n  },\n  Burn: function Burn(menu, type) {\n    var //items = menu.find('li'),\n    subMenuClass = \"is-\".concat(type, \"-submenu\"),\n        subItemClass = \"\".concat(subMenuClass, \"-item\"),\n        hasSubClass = \"is-\".concat(type, \"-submenu-parent\");\n    menu.find('>li, > li > ul, .menu, .menu > li, [data-submenu] > li').removeClass(\"\".concat(subMenuClass, \" \").concat(subItemClass, \" \").concat(hasSubClass, \" is-submenu-item submenu is-active\")).removeAttr('data-submenu').css('display', '');\n  }\n};\n\n\n//# sourceURL=webpack:///./js/foundation.util.nest.js?");

  /***/
}),

/***/ "./js/foundation.util.timer.js":
/*!*************************************!*\
  !*** ./js/foundation.util.timer.js ***!
  \*************************************/
/*! exports provided: Timer */
/***/ (function (module, __webpack_exports__, __webpack_require__) {

  "use strict";
  eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Timer\", function() { return Timer; });\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ \"jquery\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);\n\n\n\n\nfunction Timer(elem, options, cb) {\n  var _this = this,\n      duration = options.duration,\n      //options is an object for easily adding features later.\n  nameSpace = Object.keys(elem.data())[0] || 'timer',\n      remain = -1,\n      start,\n      timer;\n\n  this.isPaused = false;\n\n  this.restart = function () {\n    remain = -1;\n    clearTimeout(timer);\n    this.start();\n  };\n\n  this.start = function () {\n    this.isPaused = false; // if(!elem.data('paused')){ return false; }//maybe implement this sanity check if used for other things.\n\n    clearTimeout(timer);\n    remain = remain <= 0 ? duration : remain;\n    elem.data('paused', false);\n    start = Date.now();\n    timer = setTimeout(function () {\n      if (options.infinite) {\n        _this.restart(); //rerun the timer.\n\n      }\n\n      if (cb && typeof cb === 'function') {\n        cb();\n      }\n    }, remain);\n    elem.trigger(\"timerstart.zf.\".concat(nameSpace));\n  };\n\n  this.pause = function () {\n    this.isPaused = true; //if(elem.data('paused')){ return false; }//maybe implement this sanity check if used for other things.\n\n    clearTimeout(timer);\n    elem.data('paused', true);\n    var end = Date.now();\n    remain = remain - (end - start);\n    elem.trigger(\"timerpaused.zf.\".concat(nameSpace));\n  };\n}\n\n\n\n//# sourceURL=webpack:///./js/foundation.util.timer.js?");

  /***/
}),

/***/ "./js/foundation.util.touch.js":
/*!*************************************!*\
  !*** ./js/foundation.util.touch.js ***!
  \*************************************/
/*! exports provided: Touch */
/***/ (function (module, __webpack_exports__, __webpack_require__) {

  "use strict";
  eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Touch\", function() { return Touch; });\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ \"jquery\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n//**************************************************\n//**Work inspired by multiple jquery swipe plugins**\n//**Done by Yohai Ararat ***************************\n//**************************************************\n\nvar Touch = {};\nvar startPosX,\n    startPosY,\n    startTime,\n    elapsedTime,\n    startEvent,\n    isMoving = false,\n    didMoved = false;\n\nfunction onTouchEnd(e) {\n  this.removeEventListener('touchmove', onTouchMove);\n  this.removeEventListener('touchend', onTouchEnd); // If the touch did not move, consider it as a \"tap\"\n\n  if (!didMoved) {\n    var tapEvent = jquery__WEBPACK_IMPORTED_MODULE_0___default.a.Event('tap', startEvent || e);\n    jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).trigger(tapEvent);\n  }\n\n  startEvent = null;\n  isMoving = false;\n  didMoved = false;\n}\n\nfunction onTouchMove(e) {\n  if (jquery__WEBPACK_IMPORTED_MODULE_0___default.a.spotSwipe.preventDefault) {\n    e.preventDefault();\n  }\n\n  if (isMoving) {\n    var x = e.touches[0].pageX;\n    var y = e.touches[0].pageY;\n    var dx = startPosX - x;\n    var dy = startPosY - y;\n    var dir;\n    didMoved = true;\n    elapsedTime = new Date().getTime() - startTime;\n\n    if (Math.abs(dx) >= jquery__WEBPACK_IMPORTED_MODULE_0___default.a.spotSwipe.moveThreshold && elapsedTime <= jquery__WEBPACK_IMPORTED_MODULE_0___default.a.spotSwipe.timeThreshold) {\n      dir = dx > 0 ? 'left' : 'right';\n    } // else if(Math.abs(dy) >= $.spotSwipe.moveThreshold && elapsedTime <= $.spotSwipe.timeThreshold) {\n    //   dir = dy > 0 ? 'down' : 'up';\n    // }\n\n\n    if (dir) {\n      e.preventDefault();\n      onTouchEnd.apply(this, arguments);\n      jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).trigger(jquery__WEBPACK_IMPORTED_MODULE_0___default.a.Event('swipe', Object.assign({}, e)), dir).trigger(jquery__WEBPACK_IMPORTED_MODULE_0___default.a.Event(\"swipe\".concat(dir), Object.assign({}, e)));\n    }\n  }\n}\n\nfunction onTouchStart(e) {\n  if (e.touches.length == 1) {\n    startPosX = e.touches[0].pageX;\n    startPosY = e.touches[0].pageY;\n    startEvent = e;\n    isMoving = true;\n    didMoved = false;\n    startTime = new Date().getTime();\n    this.addEventListener('touchmove', onTouchMove, false);\n    this.addEventListener('touchend', onTouchEnd, false);\n  }\n}\n\nfunction init() {\n  this.addEventListener && this.addEventListener('touchstart', onTouchStart, false);\n}\n\nfunction teardown() {\n  this.removeEventListener('touchstart', onTouchStart);\n}\n\nvar SpotSwipe =\n/*#__PURE__*/\nfunction () {\n  function SpotSwipe($) {\n    _classCallCheck(this, SpotSwipe);\n\n    this.version = '1.0.0';\n    this.enabled = 'ontouchstart' in document.documentElement;\n    this.preventDefault = false;\n    this.moveThreshold = 75;\n    this.timeThreshold = 200;\n    this.$ = $;\n\n    this._init();\n  }\n\n  _createClass(SpotSwipe, [{\n    key: \"_init\",\n    value: function _init() {\n      var $ = this.$;\n      $.event.special.swipe = {\n        setup: init\n      };\n      $.event.special.tap = {\n        setup: init\n      };\n      $.each(['left', 'up', 'down', 'right'], function () {\n        $.event.special[\"swipe\".concat(this)] = {\n          setup: function setup() {\n            $(this).on('swipe', $.noop);\n          }\n        };\n      });\n    }\n  }]);\n\n  return SpotSwipe;\n}();\n/****************************************************\n * As far as I can tell, both setupSpotSwipe and    *\n * setupTouchHandler should be idempotent,          *\n * because they directly replace functions &        *\n * values, and do not add event handlers directly.  *\n ****************************************************/\n\n\nTouch.setupSpotSwipe = function ($) {\n  $.spotSwipe = new SpotSwipe($);\n};\n/****************************************************\n * Method for adding pseudo drag events to elements *\n ***************************************************/\n\n\nTouch.setupTouchHandler = function ($) {\n  $.fn.addTouch = function () {\n    this.each(function (i, el) {\n      $(el).bind('touchstart touchmove touchend touchcancel', function (event) {\n        //we pass the original event object because the jQuery event\n        //object is normalized to w3c specs and does not provide the TouchList\n        handleTouch(event);\n      });\n    });\n\n    var handleTouch = function handleTouch(event) {\n      var touches = event.changedTouches,\n          first = touches[0],\n          eventTypes = {\n        touchstart: 'mousedown',\n        touchmove: 'mousemove',\n        touchend: 'mouseup'\n      },\n          type = eventTypes[event.type],\n          simulatedEvent;\n\n      if ('MouseEvent' in window && typeof window.MouseEvent === 'function') {\n        simulatedEvent = new window.MouseEvent(type, {\n          'bubbles': true,\n          'cancelable': true,\n          'screenX': first.screenX,\n          'screenY': first.screenY,\n          'clientX': first.clientX,\n          'clientY': first.clientY\n        });\n      } else {\n        simulatedEvent = document.createEvent('MouseEvent');\n        simulatedEvent.initMouseEvent(type, true, true, window, 1, first.screenX, first.screenY, first.clientX, first.clientY, false, false, false, false, 0\n        /*left*/\n        , null);\n      }\n\n      first.target.dispatchEvent(simulatedEvent);\n    };\n  };\n};\n\nTouch.init = function ($) {\n  if (typeof $.spotSwipe === 'undefined') {\n    Touch.setupSpotSwipe($);\n    Touch.setupTouchHandler($);\n  }\n};\n\n\n\n//# sourceURL=webpack:///./js/foundation.util.touch.js?");

  /***/
}),

/***/ "./js/foundation.util.triggers.js":
/*!****************************************!*\
  !*** ./js/foundation.util.triggers.js ***!
  \****************************************/
/*! exports provided: Triggers */
/***/ (function (module, __webpack_exports__, __webpack_require__) {

  "use strict";
  eval("__webpack_require__.r(__webpack_exports__);\n
      /* harmony export (binding) */
      __webpack_require__.d(__webpack_exports__, \"Triggers\", function() { return Triggers; });\n
      /* harmony import */
      var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ \"jquery\");\n
      /* harmony import */
      var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__); \n/* harmony import */ var _foundation_core_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./foundation.core.utils */ \"./js/foundation.core.utils.js\");\n
      /* harmony import */
      var _foundation_util_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./foundation.util.motion */ \"./js/foundation.util.motion.js\");\n\n\n
      function _typeof(obj) {
      if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") {
      _typeof = function _typeof(obj) { return typeof obj; };
    } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj;
    };
  } return _typeof(obj);
}\n\n\n\n\n\n
var MutationObserver = function () {
\n
var prefixes = ['WebKit', 'Moz', 'O', 'Ms', '']; \n\n
for (var i = 0; i < prefixes.length; i++) {
  \n
  if (\"\".concat(prefixes[i], \"MutationObserver\") in window) {\n
  return window[\"\".concat(prefixes[i], \"MutationObserver\")];\n
} \n
} \n\n  return false; \n
  } (); \n\nvar triggers = function triggers(el, type) {
  \n  el.data(type).split(' ').forEach(function (id) {
    \n    jquery__WEBPACK_IMPORTED_MODULE_0___default()(\"#\".concat(id))[type === 'close' ? 'trigger' : 'triggerHandler'](\"\".concat(type, \".zf.trigger\"), [el]);\n  });\n};\n\nvar Triggers = {\n  Listeners: {\n    Basic: {},\n    Global: {}\n  },\n  Initializers: {}\n};\nTriggers.Listeners.Basic = {\n  openListener: function openListener() {\n    triggers(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this), 'open');\n  },\n  closeListener: function closeListener() {\n    var id = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).data('close');\n\n    if (id) {\n      triggers(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this), 'close');\n    } else {\n      jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).trigger('close.zf.trigger');\n    }\n  },\n  toggleListener: function toggleListener() {\n    var id = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).data('toggle');\n\n    if (id) {\n      triggers(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this), 'toggle');\n    } else {\n      jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).trigger('toggle.zf.trigger');\n    }\n  },\n  closeableListener: function closeableListener(e) {\n    var animation = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).data('closable'); // Only close the first closable element. See https://git.io/zf-7833\n\n    e.stopPropagation();\n\n    if (animation !== '') {\n      _foundation_util_motion__WEBPACK_IMPORTED_MODULE_2__[\"Motion\"].animateOut(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this), animation, function () {\n        jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).trigger('closed.zf');\n      });\n    } else {\n      jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).fadeOut().trigger('closed.zf');\n    }\n  },\n  toggleFocusListener: function toggleFocusListener() {\n    var id = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).data('toggle-focus');\n    jquery__WEBPACK_IMPORTED_MODULE_0___default()(\"#\".concat(id)).triggerHandler('toggle.zf.trigger', [jquery__WEBPACK_IMPORTED_MODULE_0___default()(this)]);\n  }\n}; // Elements with [data-open] will reveal a plugin that supports it when clicked.\n\nTriggers.Initializers.addOpenListener = function ($elem) {\n  $elem.off('click.zf.trigger', Triggers.Listeners.Basic.openListener);\n  $elem.on('click.zf.trigger', '[data-open]', Triggers.Listeners.Basic.openListener);\n}; // Elements with [data-close] will close a plugin that supports it when clicked.\n// If used without a value on [data-close], the event will bubble, allowing it to close a parent component.\n\n\nTriggers.Initializers.addCloseListener = function ($elem) {\n  $elem.off('click.zf.trigger', Triggers.Listeners.Basic.closeListener);\n  $elem.on('click.zf.trigger', '[data-close]', Triggers.Listeners.Basic.closeListener);\n}; // Elements with [data-toggle] will toggle a plugin that supports it when clicked.\n\n\nTriggers.Initializers.addToggleListener = function ($elem) {\n  $elem.off('click.zf.trigger', Triggers.Listeners.Basic.toggleListener);\n  $elem.on('click.zf.trigger', '[data-toggle]', Triggers.Listeners.Basic.toggleListener);\n}; // Elements with [data-closable] will respond to close.zf.trigger events.\n\n\nTriggers.Initializers.addCloseableListener = function ($elem) {\n  $elem.off('close.zf.trigger', Triggers.Listeners.Basic.closeableListener);\n  $elem.on('close.zf.trigger', '[data-closeable], [data-closable]', Triggers.Listeners.Basic.closeableListener);\n}; // Elements with [data-toggle-focus] will respond to coming in and out of focus\n\n\nTriggers.Initializers.addToggleFocusListener = function ($elem) {\n  $elem.off('focus.zf.trigger blur.zf.trigger', Triggers.Listeners.Basic.toggleFocusListener);\n  $elem.on('focus.zf.trigger blur.zf.trigger', '[data-toggle-focus]', Triggers.Listeners.Basic.toggleFocusListener);\n}; // More Global/complex listeners and triggers\n\n\nTriggers.Listeners.Global = {\n  resizeListener: function resizeListener($nodes) {\n    if (!MutationObserver) {\n      //fallback for IE 9\n      $nodes.each(function () {\n        jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).triggerHandler('resizeme.zf.trigger');\n      });\n    } //trigger all listening elements and signal a resize event\n\n\n    $nodes.attr('data-events', \"resize\");\n  },\n  scrollListener: function scrollListener($nodes) {\n    if (!MutationObserver) {\n      //fallback for IE 9\n      $nodes.each(function () {\n        jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).triggerHandler('scrollme.zf.trigger');\n      });\n    } //trigger all listening elements and signal a scroll event\n\n\n    $nodes.attr('data-events', \"scroll\");\n  },\n  closeMeListener: function closeMeListener(e, pluginId) {\n    var plugin = e.namespace.split('.')[0];\n    var plugins = jquery__WEBPACK_IMPORTED_MODULE_0___default()(\"[data-\".concat(plugin, \"]\")).not(\"[data-yeti-box=\\\"\".concat(pluginId, \"\\\"]\"));\n    plugins.each(function () {\n      var _this = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this);\n\n      _this.triggerHandler('close.zf.trigger', [_this]);\n    });\n  } // Global, parses whole document.\n\n};\n\nTriggers.Initializers.addClosemeListener = function (pluginName) {\n  var yetiBoxes = jquery__WEBPACK_IMPORTED_MODULE_0___default()('[data-yeti-box]'),\n      plugNames = ['dropdown', 'tooltip', 'reveal'];\n\n  if (pluginName) {\n    if (typeof pluginName === 'string') {\n      plugNames.push(pluginName);\n    } else if (_typeof(pluginName) === 'object' && typeof pluginName[0] === 'string') {\n      plugNames = plugNames.concat(pluginName);\n    } else {\n      console.error('Plugin names must be strings');\n    }\n  }\n\n  if (yetiBoxes.length) {\n    var listeners = plugNames.map(function (name) {\n      return \"closeme.zf.\".concat(name);\n    }).join(' ');\n    jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).off(listeners).on(listeners, Triggers.Listeners.Global.closeMeListener);\n  }\n};\n\nfunction debounceGlobalListener(debounce, trigger, listener) {\n  var timer,\n      args = Array.prototype.slice.call(arguments, 3);\n  jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).off(trigger).on(trigger, function (e) {\n    if (timer) {\n      clearTimeout(timer);\n    }\n\n    timer = setTimeout(function () {\n      listener.apply(null, args);\n    }, debounce || 10); //default time to emit scroll event\n  });\n}\n\nTriggers.Initializers.addResizeListener = function (debounce) {\n  var $nodes = jquery__WEBPACK_IMPORTED_MODULE_0___default()('[data-resize]');\n\n  if ($nodes.length) {\n    debounceGlobalListener(debounce, 'resize.zf.trigger', Triggers.Listeners.Global.resizeListener, $nodes);\n  }\n};\n\nTriggers.Initializers.addScrollListener = function (debounce) {\n  var $nodes = jquery__WEBPACK_IMPORTED_MODULE_0___default()('[data-scroll]');\n\n  if ($nodes.length) {\n    debounceGlobalListener(debounce, 'scroll.zf.trigger', Triggers.Listeners.Global.scrollListener, $nodes);\n  }\n};\n\nTriggers.Initializers.addMutationEventsListener = function ($elem) {\n  if (!MutationObserver) {\n    return false;\n  }\n\n  var $nodes = $elem.find('[data-resize], [data-scroll], [data-mutate]'); //element callback\n\n  var listeningElementsMutation = function listeningElementsMutation(mutationRecordsList) {\n    var $target = jquery__WEBPACK_IMPORTED_MODULE_0___default()(mutationRecordsList[0].target); //trigger the event handler for the element depending on type\n\n    switch (mutationRecordsList[0].type) {\n      case \"attributes\":\n        if ($target.attr(\"data-events\") === \"scroll\" && mutationRecordsList[0].attributeName === \"data-events\") {\n          $target.triggerHandler('scrollme.zf.trigger', [$target, window.pageYOffset]);\n        }\n\n        if ($target.attr(\"data-events\") === \"resize\" && mutationRecordsList[0].attributeName === \"data-events\") {\n          $target.triggerHandler('resizeme.zf.trigger', [$target]);\n        }\n\n        if (mutationRecordsList[0].attributeName === \"style\") {\n          $target.closest(\"[data-mutate]\").attr(\"data-events\", \"mutate\");\n          $target.closest(\"[data-mutate]\").triggerHandler('mutateme.zf.trigger', [$target.closest(\"[data-mutate]\")]);\n        }\n\n        break;\n\n      case \"childList\":\n        $target.closest(\"[data-mutate]\").attr(\"data-events\", \"mutate\");\n        $target.closest(\"[data-mutate]\").triggerHandler('mutateme.zf.trigger', [$target.closest(\"[data-mutate]\")]);\n        break;\n\n      default:\n        return false;\n      //nothing\n    }\n  };\n\n  if ($nodes.length) {\n    //for each element that needs to listen for resizing, scrolling, or mutation add a single observer\n    for (var i = 0; i <= $nodes.length - 1; i++) {\n      var elementObserver = new MutationObserver(listeningElementsMutation);\n      elementObserver.observe($nodes[i], {\n        attributes: true,\n        childList: true,\n        characterData: false,\n        subtree: true,\n        attributeFilter: [\"data-events\", \"style\"]\n      });\n    }\n  }\n};\n\nTriggers.Initializers.addSimpleListeners = function () {\n  var $document = jquery__WEBPACK_IMPORTED_MODULE_0___default()(document);\n  Triggers.Initializers.addOpenListener($document);\n  Triggers.Initializers.addCloseListener($document);\n  Triggers.Initializers.addToggleListener($document);\n  Triggers.Initializers.addCloseableListener($document);\n  Triggers.Initializers.addToggleFocusListener($document);\n};\n\nTriggers.Initializers.addGlobalListeners = function () {\n  var $document = jquery__WEBPACK_IMPORTED_MODULE_0___default()(document);\n  Triggers.Initializers.addMutationEventsListener($document);\n  Triggers.Initializers.addResizeListener();\n  Triggers.Initializers.addScrollListener();\n  Triggers.Initializers.addClosemeListener();\n};\n\nTriggers.init = function ($, Foundation) {\n  Object(_foundation_core_utils__WEBPACK_IMPORTED_MODULE_1__[\"onLoad\"])($(window), function () {\n    if ($.triggersInitialized !== true) {\n      Triggers.Initializers.addSimpleListeners();\n      Triggers.Initializers.addGlobalListeners();\n      $.triggersInitialized = true;\n    }\n  });\n\n  if (Foundation) {\n    Foundation.Triggers = Triggers; // Legacy included to be backwards compatible for now.\n\n    Foundation.IHearYou = Triggers.Initializers.addGlobalListeners;\n  }\n};\n\n\n\n//# sourceURL=webpack:///./js/foundation.util.triggers.js?");

    /***/
  }),

/***/ "jquery":
/*!********************************************************************************************!*\
  !*** external {"root":["jQuery"],"amd":"jQuery","commonjs":"jQuery","commonjs2":"jQuery"} ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function (module, exports) {

    eval("module.exports = __WEBPACK_EXTERNAL_MODULE_jquery__;\n\n//# sourceURL=webpack:///external_%7B%22root%22:%5B%22jQuery%22%5D,%22amd%22:%22jQuery%22,%22commonjs%22:%22jQuery%22,%22commonjs2%22:%22jQuery%22%7D?");

    /***/
  })

  /******/
});
});
