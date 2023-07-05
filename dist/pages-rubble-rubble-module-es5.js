(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-rubble-rubble-module"], {
    /***/
    "NbmP":
    /*!******************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/rubble/rubble.component.html ***!
      \******************************************************************************************/

    /*! exports provided: default */

    /***/
    function NbmP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<p>rubble works!</p>\n";
      /***/
    },

    /***/
    "Q3mq":
    /*!**************************************************!*\
      !*** ./src/app/pages/rubble/rubble.component.ts ***!
      \**************************************************/

    /*! exports provided: RubbleComponent */

    /***/
    function Q3mq(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RubbleComponent", function () {
        return RubbleComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_rubble_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./rubble.component.html */
      "NbmP");
      /* harmony import */


      var _rubble_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./rubble.component.scss */
      "gxv0");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var RubbleComponent = /*#__PURE__*/function () {
        function RubbleComponent() {
          _classCallCheck(this, RubbleComponent);
        }

        _createClass(RubbleComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return RubbleComponent;
      }();

      RubbleComponent.ctorParameters = function () {
        return [];
      };

      RubbleComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-rubble',
        template: _raw_loader_rubble_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_rubble_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], RubbleComponent);
      /***/
    },

    /***/
    "b1Lx":
    /*!***********************************************!*\
      !*** ./src/app/pages/rubble/rubble.module.ts ***!
      \***********************************************/

    /*! exports provided: RubbleModule */

    /***/
    function b1Lx(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RubbleModule", function () {
        return RubbleModule;
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


      var _rubble_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./rubble.component */
      "Q3mq");

      var routes = [{
        path: "",
        component: _rubble_component__WEBPACK_IMPORTED_MODULE_4__["RubbleComponent"]
      }];

      var RubbleModule = /*#__PURE__*/_createClass(function RubbleModule() {
        _classCallCheck(this, RubbleModule);
      });

      RubbleModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_rubble_component__WEBPACK_IMPORTED_MODULE_4__["RubbleComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)]
      })], RubbleModule);
      /***/
    },

    /***/
    "gxv0":
    /*!****************************************************!*\
      !*** ./src/app/pages/rubble/rubble.component.scss ***!
      \****************************************************/

    /*! exports provided: default */

    /***/
    function gxv0(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3J1YmJsZS9ydWJibGUuY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-rubble-rubble-module-es5.js.map