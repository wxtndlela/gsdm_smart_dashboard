(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["general-pages-general-pages-module"], {
    /***/
    "6oIl":
    /*!********************************************************************!*\
      !*** ./src/app/general-pages/blank-page/blank-page.component.scss ***!
      \********************************************************************/

    /*! exports provided: default */

    /***/
    function oIl(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dlbmVyYWwtcGFnZXMvYmxhbmstcGFnZS9ibGFuay1wYWdlLmNvbXBvbmVudC5zY3NzIn0= */";
      /***/
    },

    /***/
    "8anJ":
    /*!*******************************************************!*\
      !*** ./src/app/general-pages/general-pages.module.ts ***!
      \*******************************************************/

    /*! exports provided: GeneralPagesModule */

    /***/
    function anJ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GeneralPagesModule", function () {
        return GeneralPagesModule;
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


      var _blank_page_blank_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./blank-page/blank-page.component */
      "XPzs");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "1kSV");

      var routes = [{
        path: 'blank-page',
        component: _blank_page_blank_page_component__WEBPACK_IMPORTED_MODULE_3__["BlankPageComponent"]
      }];

      var GeneralPagesModule = /*#__PURE__*/_createClass(function GeneralPagesModule() {
        _classCallCheck(this, GeneralPagesModule);
      });

      GeneralPagesModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_blank_page_blank_page_component__WEBPACK_IMPORTED_MODULE_3__["BlankPageComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes), _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"]]
      })], GeneralPagesModule);
      /***/
    },

    /***/
    "N41j":
    /*!**********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/general-pages/blank-page/blank-page.component.html ***!
      \**********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function N41j(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "";
      /***/
    },

    /***/
    "XPzs":
    /*!******************************************************************!*\
      !*** ./src/app/general-pages/blank-page/blank-page.component.ts ***!
      \******************************************************************/

    /*! exports provided: BlankPageComponent */

    /***/
    function XPzs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BlankPageComponent", function () {
        return BlankPageComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_blank_page_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./blank-page.component.html */
      "N41j");
      /* harmony import */


      var _blank_page_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./blank-page.component.scss */
      "6oIl");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var BlankPageComponent = /*#__PURE__*/function () {
        function BlankPageComponent() {
          _classCallCheck(this, BlankPageComponent);
        }

        _createClass(BlankPageComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return BlankPageComponent;
      }();

      BlankPageComponent.ctorParameters = function () {
        return [];
      };

      BlankPageComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-blank-page',
        template: _raw_loader_blank_page_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_blank_page_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], BlankPageComponent);
      /***/
    }
  }]);
})();
//# sourceMappingURL=general-pages-general-pages-module-es5.js.map