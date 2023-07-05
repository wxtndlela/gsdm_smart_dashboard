(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-vcount-man-vcount-man-module"], {
    /***/
    "+0lJ":
    /*!**************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/vcount-man/vcount-man.component.html ***!
      \**************************************************************************************************/

    /*! exports provided: default */

    /***/
    function lJ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<p>vcount-man works!</p>\n";
      /***/
    },

    /***/
    "lg93":
    /*!*******************************************************!*\
      !*** ./src/app/pages/vcount-man/vcount-man.module.ts ***!
      \*******************************************************/

    /*! exports provided: VcountManModule */

    /***/
    function lg93(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VcountManModule", function () {
        return VcountManModule;
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


      var _vcount_man_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./vcount-man.component */
      "uUdn");

      var routes = [{
        path: "",
        component: _vcount_man_component__WEBPACK_IMPORTED_MODULE_4__["VcountManComponent"]
      }];

      var VcountManModule = /*#__PURE__*/_createClass(function VcountManModule() {
        _classCallCheck(this, VcountManModule);
      });

      VcountManModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_vcount_man_component__WEBPACK_IMPORTED_MODULE_4__["VcountManComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)]
      })], VcountManModule);
      /***/
    },

    /***/
    "mE0G":
    /*!************************************************************!*\
      !*** ./src/app/pages/vcount-man/vcount-man.component.scss ***!
      \************************************************************/

    /*! exports provided: default */

    /***/
    function mE0G(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Zjb3VudC1tYW4vdmNvdW50LW1hbi5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "uUdn":
    /*!**********************************************************!*\
      !*** ./src/app/pages/vcount-man/vcount-man.component.ts ***!
      \**********************************************************/

    /*! exports provided: VcountManComponent */

    /***/
    function uUdn(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VcountManComponent", function () {
        return VcountManComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_vcount_man_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./vcount-man.component.html */
      "+0lJ");
      /* harmony import */


      var _vcount_man_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./vcount-man.component.scss */
      "mE0G");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var VcountManComponent = /*#__PURE__*/function () {
        function VcountManComponent() {
          _classCallCheck(this, VcountManComponent);
        }

        _createClass(VcountManComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return VcountManComponent;
      }();

      VcountManComponent.ctorParameters = function () {
        return [];
      };

      VcountManComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-vcount-man',
        template: _raw_loader_vcount_man_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_vcount_man_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], VcountManComponent);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-vcount-man-vcount-man-module-es5.js.map