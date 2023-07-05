(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-furniture-man-furniture-man-module"], {
    /***/
    "KQmv":
    /*!****************************************************************!*\
      !*** ./src/app/pages/furniture-man/furniture-man.component.ts ***!
      \****************************************************************/

    /*! exports provided: FurnitureManComponent */

    /***/
    function KQmv(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FurnitureManComponent", function () {
        return FurnitureManComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_furniture_man_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./furniture-man.component.html */
      "PBhC");
      /* harmony import */


      var _furniture_man_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./furniture-man.component.scss */
      "SecD");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var FurnitureManComponent = /*#__PURE__*/function () {
        function FurnitureManComponent() {
          _classCallCheck(this, FurnitureManComponent);
        }

        _createClass(FurnitureManComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return FurnitureManComponent;
      }();

      FurnitureManComponent.ctorParameters = function () {
        return [];
      };

      FurnitureManComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-furniture-man',
        template: _raw_loader_furniture_man_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_furniture_man_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], FurnitureManComponent);
      /***/
    },

    /***/
    "PBhC":
    /*!********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/furniture-man/furniture-man.component.html ***!
      \********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function PBhC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<p>furniture-man works!</p>\n";
      /***/
    },

    /***/
    "SecD":
    /*!******************************************************************!*\
      !*** ./src/app/pages/furniture-man/furniture-man.component.scss ***!
      \******************************************************************/

    /*! exports provided: default */

    /***/
    function SecD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Z1cm5pdHVyZS1tYW4vZnVybml0dXJlLW1hbi5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "xk1+":
    /*!*************************************************************!*\
      !*** ./src/app/pages/furniture-man/furniture-man.module.ts ***!
      \*************************************************************/

    /*! exports provided: FurnitureManModule */

    /***/
    function xk1(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FurnitureManModule", function () {
        return FurnitureManModule;
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


      var _furniture_man_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./furniture-man.component */
      "KQmv");

      var routes = [{
        path: "",
        component: _furniture_man_component__WEBPACK_IMPORTED_MODULE_4__["FurnitureManComponent"]
      }];

      var FurnitureManModule = /*#__PURE__*/_createClass(function FurnitureManModule() {
        _classCallCheck(this, FurnitureManModule);
      });

      FurnitureManModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_furniture_man_component__WEBPACK_IMPORTED_MODULE_4__["FurnitureManComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)]
      })], FurnitureManModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-furniture-man-furniture-man-module-es5.js.map