(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-construction-construction-module"], {
    /***/
    "+0wf":
    /*!******************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/construction/construction.component.html ***!
      \******************************************************************************************************/

    /*! exports provided: default */

    /***/
    function wf(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<p>construction works!</p>\n";
      /***/
    },

    /***/
    "8Upv":
    /*!***********************************************************!*\
      !*** ./src/app/pages/construction/construction.module.ts ***!
      \***********************************************************/

    /*! exports provided: ConstructionModule */

    /***/
    function Upv(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ConstructionModule", function () {
        return ConstructionModule;
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


      var _construction_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./construction.component */
      "9HQC");

      var routes = [{
        path: "",
        component: _construction_component__WEBPACK_IMPORTED_MODULE_4__["ConstructionComponent"]
      }];

      var ConstructionModule = /*#__PURE__*/_createClass(function ConstructionModule() {
        _classCallCheck(this, ConstructionModule);
      });

      ConstructionModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_construction_component__WEBPACK_IMPORTED_MODULE_4__["ConstructionComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)]
      })], ConstructionModule);
      /***/
    },

    /***/
    "9HQC":
    /*!**************************************************************!*\
      !*** ./src/app/pages/construction/construction.component.ts ***!
      \**************************************************************/

    /*! exports provided: ConstructionComponent */

    /***/
    function HQC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ConstructionComponent", function () {
        return ConstructionComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_construction_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./construction.component.html */
      "+0wf");
      /* harmony import */


      var _construction_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./construction.component.scss */
      "SMg/");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var ConstructionComponent = /*#__PURE__*/function () {
        function ConstructionComponent() {
          _classCallCheck(this, ConstructionComponent);
        }

        _createClass(ConstructionComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return ConstructionComponent;
      }();

      ConstructionComponent.ctorParameters = function () {
        return [];
      };

      ConstructionComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-construction',
        template: _raw_loader_construction_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_construction_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], ConstructionComponent);
      /***/
    },

    /***/
    "SMg/":
    /*!****************************************************************!*\
      !*** ./src/app/pages/construction/construction.component.scss ***!
      \****************************************************************/

    /*! exports provided: default */

    /***/
    function SMg(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbnN0cnVjdGlvbi9jb25zdHJ1Y3Rpb24uY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-construction-construction-module-es5.js.map