(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-site-man-site-man-module"], {
    /***/
    "Dcrt":
    /*!***************************************************!*\
      !*** ./src/app/pages/site-man/site-man.module.ts ***!
      \***************************************************/

    /*! exports provided: SiteManModule */

    /***/
    function Dcrt(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SiteManModule", function () {
        return SiteManModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _site_man_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./site-man.component */
      "M2nB");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var routes = [{
        path: "",
        component: _site_man_component__WEBPACK_IMPORTED_MODULE_3__["SiteManComponent"]
      }];

      var SiteManModule = /*#__PURE__*/_createClass(function SiteManModule() {
        _classCallCheck(this, SiteManModule);
      });

      SiteManModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_site_man_component__WEBPACK_IMPORTED_MODULE_3__["SiteManComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)]
      })], SiteManModule);
      /***/
    },

    /***/
    "M2nB":
    /*!******************************************************!*\
      !*** ./src/app/pages/site-man/site-man.component.ts ***!
      \******************************************************/

    /*! exports provided: SiteManComponent */

    /***/
    function M2nB(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SiteManComponent", function () {
        return SiteManComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_site_man_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./site-man.component.html */
      "ZvDc");
      /* harmony import */


      var _site_man_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./site-man.component.scss */
      "rZ1P");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var SiteManComponent = /*#__PURE__*/function () {
        function SiteManComponent() {
          _classCallCheck(this, SiteManComponent);
        }

        _createClass(SiteManComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return SiteManComponent;
      }();

      SiteManComponent.ctorParameters = function () {
        return [];
      };

      SiteManComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-site-man',
        template: _raw_loader_site_man_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_site_man_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], SiteManComponent);
      /***/
    },

    /***/
    "ZvDc":
    /*!**********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/site-man/site-man.component.html ***!
      \**********************************************************************************************/

    /*! exports provided: default */

    /***/
    function ZvDc(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<p>site-man works!</p>\n";
      /***/
    },

    /***/
    "rZ1P":
    /*!********************************************************!*\
      !*** ./src/app/pages/site-man/site-man.component.scss ***!
      \********************************************************/

    /*! exports provided: default */

    /***/
    function rZ1P(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NpdGUtbWFuL3NpdGUtbWFuLmNvbXBvbmVudC5zY3NzIn0= */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-site-man-site-man-module-es5.js.map