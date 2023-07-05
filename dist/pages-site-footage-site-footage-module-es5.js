(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-site-footage-site-footage-module"], {
    /***/
    "KtoQ":
    /*!**************************************************************!*\
      !*** ./src/app/pages/site-footage/site-footage.component.ts ***!
      \**************************************************************/

    /*! exports provided: SiteFootageComponent */

    /***/
    function KtoQ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SiteFootageComponent", function () {
        return SiteFootageComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_site_footage_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./site-footage.component.html */
      "RmSW");
      /* harmony import */


      var _site_footage_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./site-footage.component.scss */
      "ea/R");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var SiteFootageComponent = /*#__PURE__*/function () {
        function SiteFootageComponent() {
          _classCallCheck(this, SiteFootageComponent);
        }

        _createClass(SiteFootageComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return SiteFootageComponent;
      }();

      SiteFootageComponent.ctorParameters = function () {
        return [];
      };

      SiteFootageComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-site-footage',
        template: _raw_loader_site_footage_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_site_footage_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], SiteFootageComponent);
      /***/
    },

    /***/
    "RmSW":
    /*!******************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/site-footage/site-footage.component.html ***!
      \******************************************************************************************************/

    /*! exports provided: default */

    /***/
    function RmSW(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<p>site-footage works!</p>\n";
      /***/
    },

    /***/
    "ea/R":
    /*!****************************************************************!*\
      !*** ./src/app/pages/site-footage/site-footage.component.scss ***!
      \****************************************************************/

    /*! exports provided: default */

    /***/
    function eaR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NpdGUtZm9vdGFnZS9zaXRlLWZvb3RhZ2UuY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    "yXF/":
    /*!***********************************************************!*\
      !*** ./src/app/pages/site-footage/site-footage.module.ts ***!
      \***********************************************************/

    /*! exports provided: SiteFootageModule */

    /***/
    function yXF(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SiteFootageModule", function () {
        return SiteFootageModule;
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


      var _site_footage_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./site-footage.component */
      "KtoQ");

      var routes = [{
        path: "",
        component: _site_footage_component__WEBPACK_IMPORTED_MODULE_4__["SiteFootageComponent"]
      }];

      var SiteFootageModule = /*#__PURE__*/_createClass(function SiteFootageModule() {
        _classCallCheck(this, SiteFootageModule);
      });

      SiteFootageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_site_footage_component__WEBPACK_IMPORTED_MODULE_4__["SiteFootageComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)]
      })], SiteFootageModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-site-footage-site-footage-module-es5.js.map