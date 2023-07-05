(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-sf-reports-sf-reports-module"], {
    /***/
    "NJnQ":
    /*!************************************************************!*\
      !*** ./src/app/pages/sf-reports/sf-reports.component.scss ***!
      \************************************************************/

    /*! exports provided: default */

    /***/
    function NJnQ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NmLXJlcG9ydHMvc2YtcmVwb3J0cy5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "noME":
    /*!*******************************************************!*\
      !*** ./src/app/pages/sf-reports/sf-reports.module.ts ***!
      \*******************************************************/

    /*! exports provided: SfReportsModule */

    /***/
    function noME(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SfReportsModule", function () {
        return SfReportsModule;
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


      var _sf_reports_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./sf-reports.component */
      "zbuj");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var routes = [{
        path: "",
        component: _sf_reports_component__WEBPACK_IMPORTED_MODULE_3__["SfReportsComponent"]
      }];

      var SfReportsModule = /*#__PURE__*/_createClass(function SfReportsModule() {
        _classCallCheck(this, SfReportsModule);
      });

      SfReportsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_sf_reports_component__WEBPACK_IMPORTED_MODULE_3__["SfReportsComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)]
      })], SfReportsModule);
      /***/
    },

    /***/
    "zbuj":
    /*!**********************************************************!*\
      !*** ./src/app/pages/sf-reports/sf-reports.component.ts ***!
      \**********************************************************/

    /*! exports provided: SfReportsComponent */

    /***/
    function zbuj(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SfReportsComponent", function () {
        return SfReportsComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_sf_reports_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./sf-reports.component.html */
      "zxsF");
      /* harmony import */


      var _sf_reports_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./sf-reports.component.scss */
      "NJnQ");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var SfReportsComponent = /*#__PURE__*/function () {
        function SfReportsComponent() {
          _classCallCheck(this, SfReportsComponent);
        }

        _createClass(SfReportsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return SfReportsComponent;
      }();

      SfReportsComponent.ctorParameters = function () {
        return [];
      };

      SfReportsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-sf-reports',
        template: _raw_loader_sf_reports_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_sf_reports_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], SfReportsComponent);
      /***/
    },

    /***/
    "zxsF":
    /*!**************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/sf-reports/sf-reports.component.html ***!
      \**************************************************************************************************/

    /*! exports provided: default */

    /***/
    function zxsF(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<p>sf-reports works!</p>\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-sf-reports-sf-reports-module-es5.js.map