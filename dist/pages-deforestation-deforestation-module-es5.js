(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-deforestation-deforestation-module"], {
    /***/
    "Gofy":
    /*!****************************************************************!*\
      !*** ./src/app/pages/deforestation/deforestation.component.ts ***!
      \****************************************************************/

    /*! exports provided: DeforestationComponent */

    /***/
    function Gofy(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DeforestationComponent", function () {
        return DeforestationComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_deforestation_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./deforestation.component.html */
      "Gz0v");
      /* harmony import */


      var _deforestation_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./deforestation.component.scss */
      "ivoX");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var DeforestationComponent = /*#__PURE__*/function () {
        function DeforestationComponent() {
          _classCallCheck(this, DeforestationComponent);
        }

        _createClass(DeforestationComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return DeforestationComponent;
      }();

      DeforestationComponent.ctorParameters = function () {
        return [];
      };

      DeforestationComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-deforestation',
        template: _raw_loader_deforestation_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_deforestation_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], DeforestationComponent);
      /***/
    },

    /***/
    "Gz0v":
    /*!********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/deforestation/deforestation.component.html ***!
      \********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function Gz0v(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<p>deforestation works!</p>\n";
      /***/
    },

    /***/
    "ayvO":
    /*!*************************************************************!*\
      !*** ./src/app/pages/deforestation/deforestation.module.ts ***!
      \*************************************************************/

    /*! exports provided: DeforestationModule */

    /***/
    function ayvO(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DeforestationModule", function () {
        return DeforestationModule;
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


      var _deforestation_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./deforestation.component */
      "Gofy");

      var routes = [{
        path: "",
        component: _deforestation_component__WEBPACK_IMPORTED_MODULE_4__["DeforestationComponent"]
      }];

      var DeforestationModule = /*#__PURE__*/_createClass(function DeforestationModule() {
        _classCallCheck(this, DeforestationModule);
      });

      DeforestationModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_deforestation_component__WEBPACK_IMPORTED_MODULE_4__["DeforestationComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)]
      })], DeforestationModule);
      /***/
    },

    /***/
    "ivoX":
    /*!******************************************************************!*\
      !*** ./src/app/pages/deforestation/deforestation.component.scss ***!
      \******************************************************************/

    /*! exports provided: default */

    /***/
    function ivoX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2RlZm9yZXN0YXRpb24vZGVmb3Jlc3RhdGlvbi5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-deforestation-deforestation-module-es5.js.map