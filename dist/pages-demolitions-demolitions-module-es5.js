(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-demolitions-demolitions-module"], {
    /***/
    "151U":
    /*!**************************************************************!*\
      !*** ./src/app/pages/demolitions/demolitions.component.scss ***!
      \**************************************************************/

    /*! exports provided: default */

    /***/
    function U(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2RlbW9saXRpb25zL2RlbW9saXRpb25zLmNvbXBvbmVudC5zY3NzIn0= */";
      /***/
    },

    /***/
    "FBI8":
    /*!*********************************************************!*\
      !*** ./src/app/pages/demolitions/demolitions.module.ts ***!
      \*********************************************************/

    /*! exports provided: DemolitionsModule */

    /***/
    function FBI8(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DemolitionsModule", function () {
        return DemolitionsModule;
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


      var _demolitions_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./demolitions.component */
      "MnYn");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var routes = [{
        path: "",
        component: _demolitions_component__WEBPACK_IMPORTED_MODULE_3__["DemolitionsComponent"]
      }];

      var DemolitionsModule = /*#__PURE__*/_createClass(function DemolitionsModule() {
        _classCallCheck(this, DemolitionsModule);
      });

      DemolitionsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_demolitions_component__WEBPACK_IMPORTED_MODULE_3__["DemolitionsComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)]
      })], DemolitionsModule);
      /***/
    },

    /***/
    "K8CE":
    /*!****************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/demolitions/demolitions.component.html ***!
      \****************************************************************************************************/

    /*! exports provided: default */

    /***/
    function K8CE(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<p>demolitions works!</p>\n";
      /***/
    },

    /***/
    "MnYn":
    /*!************************************************************!*\
      !*** ./src/app/pages/demolitions/demolitions.component.ts ***!
      \************************************************************/

    /*! exports provided: DemolitionsComponent */

    /***/
    function MnYn(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DemolitionsComponent", function () {
        return DemolitionsComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_demolitions_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./demolitions.component.html */
      "K8CE");
      /* harmony import */


      var _demolitions_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./demolitions.component.scss */
      "151U");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var DemolitionsComponent = /*#__PURE__*/function () {
        function DemolitionsComponent() {
          _classCallCheck(this, DemolitionsComponent);
        }

        _createClass(DemolitionsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return DemolitionsComponent;
      }();

      DemolitionsComponent.ctorParameters = function () {
        return [];
      };

      DemolitionsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-demolitions',
        template: _raw_loader_demolitions_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_demolitions_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], DemolitionsComponent);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-demolitions-demolitions-module-es5.js.map