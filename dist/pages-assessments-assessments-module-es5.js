(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-assessments-assessments-module"], {
    /***/
    "2EPy":
    /*!****************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/assessments/assessments.component.html ***!
      \****************************************************************************************************/

    /*! exports provided: default */

    /***/
    function EPy(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<p>assessments works!</p>\n";
      /***/
    },

    /***/
    "gLm5":
    /*!************************************************************!*\
      !*** ./src/app/pages/assessments/assessments.component.ts ***!
      \************************************************************/

    /*! exports provided: AssessmentsComponent */

    /***/
    function gLm5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AssessmentsComponent", function () {
        return AssessmentsComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_assessments_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./assessments.component.html */
      "2EPy");
      /* harmony import */


      var _assessments_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./assessments.component.scss */
      "kiSZ");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var AssessmentsComponent = /*#__PURE__*/function () {
        function AssessmentsComponent() {
          _classCallCheck(this, AssessmentsComponent);
        }

        _createClass(AssessmentsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return AssessmentsComponent;
      }();

      AssessmentsComponent.ctorParameters = function () {
        return [];
      };

      AssessmentsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-assessments',
        template: _raw_loader_assessments_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_assessments_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], AssessmentsComponent);
      /***/
    },

    /***/
    "kiSZ":
    /*!**************************************************************!*\
      !*** ./src/app/pages/assessments/assessments.component.scss ***!
      \**************************************************************/

    /*! exports provided: default */

    /***/
    function kiSZ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Fzc2Vzc21lbnRzL2Fzc2Vzc21lbnRzLmNvbXBvbmVudC5zY3NzIn0= */";
      /***/
    },

    /***/
    "v5/u":
    /*!*********************************************************!*\
      !*** ./src/app/pages/assessments/assessments.module.ts ***!
      \*********************************************************/

    /*! exports provided: AssessmentsModule */

    /***/
    function v5U(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AssessmentsModule", function () {
        return AssessmentsModule;
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


      var _assessments_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./assessments.component */
      "gLm5");

      var routes = [{
        path: "",
        component: _assessments_component__WEBPACK_IMPORTED_MODULE_4__["AssessmentsComponent"]
      }];

      var AssessmentsModule = /*#__PURE__*/_createClass(function AssessmentsModule() {
        _classCallCheck(this, AssessmentsModule);
      });

      AssessmentsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_assessments_component__WEBPACK_IMPORTED_MODULE_4__["AssessmentsComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)]
      })], AssessmentsModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-assessments-assessments-module-es5.js.map