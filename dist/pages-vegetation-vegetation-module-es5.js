(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-vegetation-vegetation-module"], {
    /***/
    "47ot":
    /*!**********************************************************!*\
      !*** ./src/app/pages/vegetation/vegetation.component.ts ***!
      \**********************************************************/

    /*! exports provided: VegetationComponent */

    /***/
    function ot(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VegetationComponent", function () {
        return VegetationComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_vegetation_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./vegetation.component.html */
      "MY57");
      /* harmony import */


      var _vegetation_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./vegetation.component.scss */
      "kY4b");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var VegetationComponent = /*#__PURE__*/function () {
        function VegetationComponent() {
          _classCallCheck(this, VegetationComponent);
        }

        _createClass(VegetationComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return VegetationComponent;
      }();

      VegetationComponent.ctorParameters = function () {
        return [];
      };

      VegetationComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-vegetation',
        template: _raw_loader_vegetation_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_vegetation_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], VegetationComponent);
      /***/
    },

    /***/
    "MY57":
    /*!**************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/vegetation/vegetation.component.html ***!
      \**************************************************************************************************/

    /*! exports provided: default */

    /***/
    function MY57(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<p>vegetation works!</p>\n";
      /***/
    },

    /***/
    "kY4b":
    /*!************************************************************!*\
      !*** ./src/app/pages/vegetation/vegetation.component.scss ***!
      \************************************************************/

    /*! exports provided: default */

    /***/
    function kY4b(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3ZlZ2V0YXRpb24vdmVnZXRhdGlvbi5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "ko6g":
    /*!*******************************************************!*\
      !*** ./src/app/pages/vegetation/vegetation.module.ts ***!
      \*******************************************************/

    /*! exports provided: VegetationModule */

    /***/
    function ko6g(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VegetationModule", function () {
        return VegetationModule;
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


      var _vegetation_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./vegetation.component */
      "47ot");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var routes = [{
        path: "",
        component: _vegetation_component__WEBPACK_IMPORTED_MODULE_3__["VegetationComponent"]
      }];

      var VegetationModule = /*#__PURE__*/_createClass(function VegetationModule() {
        _classCallCheck(this, VegetationModule);
      });

      VegetationModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_vegetation_component__WEBPACK_IMPORTED_MODULE_3__["VegetationComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)]
      })], VegetationModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-vegetation-vegetation-module-es5.js.map