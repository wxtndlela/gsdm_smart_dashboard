(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-intr-reports-intr-reports-module"], {
    /***/
    "MWlZ":
    /*!**************************************************************!*\
      !*** ./src/app/pages/intr-reports/intr-reports.component.ts ***!
      \**************************************************************/

    /*! exports provided: IntrReportsComponent */

    /***/
    function MWlZ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "IntrReportsComponent", function () {
        return IntrReportsComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_intr_reports_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./intr-reports.component.html */
      "YVjT");
      /* harmony import */


      var _intr_reports_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./intr-reports.component.scss */
      "MX2n");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var IntrReportsComponent = /*#__PURE__*/function () {
        function IntrReportsComponent() {
          _classCallCheck(this, IntrReportsComponent);
        }

        _createClass(IntrReportsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return IntrReportsComponent;
      }();

      IntrReportsComponent.ctorParameters = function () {
        return [];
      };

      IntrReportsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-intr-reports',
        template: _raw_loader_intr_reports_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_intr_reports_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], IntrReportsComponent);
      /***/
    },

    /***/
    "MX2n":
    /*!****************************************************************!*\
      !*** ./src/app/pages/intr-reports/intr-reports.component.scss ***!
      \****************************************************************/

    /*! exports provided: default */

    /***/
    function MX2n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2ludHItcmVwb3J0cy9pbnRyLXJlcG9ydHMuY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    "YVjT":
    /*!******************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/intr-reports/intr-reports.component.html ***!
      \******************************************************************************************************/

    /*! exports provided: default */

    /***/
    function YVjT(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<p>intr-reports works!</p>\n";
      /***/
    },

    /***/
    "x9i1":
    /*!***********************************************************!*\
      !*** ./src/app/pages/intr-reports/intr-reports.module.ts ***!
      \***********************************************************/

    /*! exports provided: IntrReportsModule */

    /***/
    function x9i1(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "IntrReportsModule", function () {
        return IntrReportsModule;
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


      var _intr_reports_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./intr-reports.component */
      "MWlZ");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var routes = [{
        path: "",
        component: _intr_reports_component__WEBPACK_IMPORTED_MODULE_3__["IntrReportsComponent"]
      }];

      var IntrReportsModule = /*#__PURE__*/_createClass(function IntrReportsModule() {
        _classCallCheck(this, IntrReportsModule);
      });

      IntrReportsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_intr_reports_component__WEBPACK_IMPORTED_MODULE_3__["IntrReportsComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)]
      })], IntrReportsModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-intr-reports-intr-reports-module-es5.js.map