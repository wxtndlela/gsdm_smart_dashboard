(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-cd-reports-cd-reports-module"], {
    /***/
    "4ZZX":
    /*!*******************************************************!*\
      !*** ./src/app/pages/cd-reports/cd-reports.module.ts ***!
      \*******************************************************/

    /*! exports provided: CdReportsModule */

    /***/
    function ZZX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CdReportsModule", function () {
        return CdReportsModule;
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


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _cd_reports_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./cd-reports.component */
      "JK+o");

      var routes = [{
        path: "",
        component: _cd_reports_component__WEBPACK_IMPORTED_MODULE_4__["CdReportsComponent"]
      }];

      var CdReportsModule = /*#__PURE__*/_createClass(function CdReportsModule() {
        _classCallCheck(this, CdReportsModule);
      });

      CdReportsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_cd_reports_component__WEBPACK_IMPORTED_MODULE_4__["CdReportsComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)]
      })], CdReportsModule);
      /***/
    },

    /***/
    "JK+o":
    /*!**********************************************************!*\
      !*** ./src/app/pages/cd-reports/cd-reports.component.ts ***!
      \**********************************************************/

    /*! exports provided: CdReportsComponent */

    /***/
    function JKO(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CdReportsComponent", function () {
        return CdReportsComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_cd_reports_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./cd-reports.component.html */
      "oDWw");
      /* harmony import */


      var _cd_reports_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./cd-reports.component.scss */
      "ZOpF");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var CdReportsComponent = /*#__PURE__*/function () {
        function CdReportsComponent() {
          _classCallCheck(this, CdReportsComponent);
        }

        _createClass(CdReportsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return CdReportsComponent;
      }();

      CdReportsComponent.ctorParameters = function () {
        return [];
      };

      CdReportsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-cd-reports',
        template: _raw_loader_cd_reports_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_cd_reports_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], CdReportsComponent);
      /***/
    },

    /***/
    "ZOpF":
    /*!************************************************************!*\
      !*** ./src/app/pages/cd-reports/cd-reports.component.scss ***!
      \************************************************************/

    /*! exports provided: default */

    /***/
    function ZOpF(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NkLXJlcG9ydHMvY2QtcmVwb3J0cy5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "oDWw":
    /*!**************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/cd-reports/cd-reports.component.html ***!
      \**************************************************************************************************/

    /*! exports provided: default */

    /***/
    function oDWw(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<p>cd-reports works!</p>\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-cd-reports-cd-reports-module-es5.js.map