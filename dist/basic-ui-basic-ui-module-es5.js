(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["basic-ui-basic-ui-module"], {
    /***/
    "+8r0":
    /*!*************************************************!*\
      !*** ./src/app/basic-ui/tabs/tabs.component.ts ***!
      \*************************************************/

    /*! exports provided: TabsComponent */

    /***/
    function r0(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TabsComponent", function () {
        return TabsComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_tabs_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./tabs.component.html */
      "kh8E");
      /* harmony import */


      var _tabs_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./tabs.component.scss */
      "p1E0");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var TabsComponent = /*#__PURE__*/function () {
        function TabsComponent() {
          _classCallCheck(this, TabsComponent);
        }

        _createClass(TabsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return TabsComponent;
      }();

      TabsComponent.ctorParameters = function () {
        return [];
      };

      TabsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-tabs',
        template: _raw_loader_tabs_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_tabs_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], TabsComponent);
      /***/
    },

    /***/
    "+MWJ":
    /*!*********************************************!*\
      !*** ./src/app/basic-ui/basic-ui.module.ts ***!
      \*********************************************/

    /*! exports provided: BasicUiModule */

    /***/
    function MWJ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BasicUiModule", function () {
        return BasicUiModule;
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


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "1kSV");
      /* harmony import */


      var _accordions_accordions_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./accordions/accordions.component */
      "Z5ml");
      /* harmony import */


      var _badges_badges_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./badges/badges.component */
      "zERb");
      /* harmony import */


      var _breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./breadcrumbs/breadcrumbs.component */
      "7un6");
      /* harmony import */


      var _buttons_buttons_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./buttons/buttons.component */
      "QtbF");
      /* harmony import */


      var _dropdowns_dropdowns_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./dropdowns/dropdowns.component */
      "9Jma");
      /* harmony import */


      var _modals_modals_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./modals/modals.component */
      "tF/J");
      /* harmony import */


      var _pagination_pagination_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./pagination/pagination.component */
      "261z");
      /* harmony import */


      var _progressbar_progressbar_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./progressbar/progressbar.component */
      "wnvy");
      /* harmony import */


      var _tabs_tabs_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./tabs/tabs.component */
      "+8r0");
      /* harmony import */


      var _tooltips_tooltips_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./tooltips/tooltips.component */
      "5leg");
      /* harmony import */


      var _typography_typography_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./typography/typography.component */
      "HGrU");
      /* harmony import */


      var _notifications_notifications_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./notifications/notifications.component */
      "6lsg");

      var routes = [{
        path: 'accordions',
        component: _accordions_accordions_component__WEBPACK_IMPORTED_MODULE_5__["AccordionsComponent"]
      }, {
        path: 'buttons',
        component: _buttons_buttons_component__WEBPACK_IMPORTED_MODULE_8__["ButtonsComponent"]
      }, {
        path: 'badges',
        component: _badges_badges_component__WEBPACK_IMPORTED_MODULE_6__["BadgesComponent"]
      }, {
        path: 'breadcrumbs',
        component: _breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_7__["BreadcrumbsComponent"]
      }, {
        path: 'dropdowns',
        component: _dropdowns_dropdowns_component__WEBPACK_IMPORTED_MODULE_9__["DropdownsComponent"]
      }, {
        path: 'dropdowns',
        component: _dropdowns_dropdowns_component__WEBPACK_IMPORTED_MODULE_9__["DropdownsComponent"]
      }, {
        path: 'modals',
        component: _modals_modals_component__WEBPACK_IMPORTED_MODULE_10__["ModalsComponent"]
      }, {
        path: 'progressbar',
        component: _progressbar_progressbar_component__WEBPACK_IMPORTED_MODULE_12__["ProgressbarComponent"]
      }, {
        path: 'pagination',
        component: _pagination_pagination_component__WEBPACK_IMPORTED_MODULE_11__["PaginationComponent"]
      }, {
        path: 'tabs',
        component: _tabs_tabs_component__WEBPACK_IMPORTED_MODULE_13__["TabsComponent"]
      }, {
        path: 'tooltips',
        component: _tooltips_tooltips_component__WEBPACK_IMPORTED_MODULE_14__["TooltipsComponent"]
      }, {
        path: 'typography',
        component: _typography_typography_component__WEBPACK_IMPORTED_MODULE_15__["TypographyComponent"]
      }, {
        path: 'notifications',
        component: _notifications_notifications_component__WEBPACK_IMPORTED_MODULE_16__["NotificationsComponent"]
      }];

      var BasicUiModule = /*#__PURE__*/_createClass(function BasicUiModule() {
        _classCallCheck(this, BasicUiModule);
      });

      BasicUiModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_accordions_accordions_component__WEBPACK_IMPORTED_MODULE_5__["AccordionsComponent"], _badges_badges_component__WEBPACK_IMPORTED_MODULE_6__["BadgesComponent"], _breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_7__["BreadcrumbsComponent"], _buttons_buttons_component__WEBPACK_IMPORTED_MODULE_8__["ButtonsComponent"], _dropdowns_dropdowns_component__WEBPACK_IMPORTED_MODULE_9__["DropdownsComponent"], _modals_modals_component__WEBPACK_IMPORTED_MODULE_10__["ModalsComponent"], _pagination_pagination_component__WEBPACK_IMPORTED_MODULE_11__["PaginationComponent"], _progressbar_progressbar_component__WEBPACK_IMPORTED_MODULE_12__["ProgressbarComponent"], _tabs_tabs_component__WEBPACK_IMPORTED_MODULE_13__["TabsComponent"], _tooltips_tooltips_component__WEBPACK_IMPORTED_MODULE_14__["TooltipsComponent"], _typography_typography_component__WEBPACK_IMPORTED_MODULE_15__["TypographyComponent"], _notifications_notifications_component__WEBPACK_IMPORTED_MODULE_16__["NotificationsComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)]
      })], BasicUiModule);
      /***/
    },

    /***/
    "261z":
    /*!*************************************************************!*\
      !*** ./src/app/basic-ui/pagination/pagination.component.ts ***!
      \*************************************************************/

    /*! exports provided: PaginationComponent */

    /***/
    function z(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PaginationComponent", function () {
        return PaginationComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_pagination_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./pagination.component.html */
      "f3Dm");
      /* harmony import */


      var _pagination_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./pagination.component.scss */
      "SMZr");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var PaginationComponent = /*#__PURE__*/function () {
        function PaginationComponent() {
          _classCallCheck(this, PaginationComponent);
        }

        _createClass(PaginationComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return PaginationComponent;
      }();

      PaginationComponent.ctorParameters = function () {
        return [];
      };

      PaginationComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-pagination',
        template: _raw_loader_pagination_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_pagination_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], PaginationComponent);
      /***/
    },

    /***/
    "2pzN":
    /*!*****************************************************************!*\
      !*** ./src/app/basic-ui/progressbar/progressbar.component.scss ***!
      \*****************************************************************/

    /*! exports provided: default */

    /***/
    function pzN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Jhc2ljLXVpL3Byb2dyZXNzYmFyL3Byb2dyZXNzYmFyLmNvbXBvbmVudC5zY3NzIn0= */";
      /***/
    },

    /***/
    "5leg":
    /*!*********************************************************!*\
      !*** ./src/app/basic-ui/tooltips/tooltips.component.ts ***!
      \*********************************************************/

    /*! exports provided: TooltipsComponent */

    /***/
    function leg(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TooltipsComponent", function () {
        return TooltipsComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_tooltips_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./tooltips.component.html */
      "j6vV");
      /* harmony import */


      var _tooltips_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./tooltips.component.scss */
      "SSUv");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var TooltipsComponent = /*#__PURE__*/function () {
        function TooltipsComponent() {
          _classCallCheck(this, TooltipsComponent);
        }

        _createClass(TooltipsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return TooltipsComponent;
      }();

      TooltipsComponent.ctorParameters = function () {
        return [];
      };

      TooltipsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-tooltips',
        template: _raw_loader_tooltips_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_tooltips_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], TooltipsComponent);
      /***/
    },

    /***/
    "6lsg":
    /*!*******************************************************************!*\
      !*** ./src/app/basic-ui/notifications/notifications.component.ts ***!
      \*******************************************************************/

    /*! exports provided: NotificationsComponent */

    /***/
    function lsg(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NotificationsComponent", function () {
        return NotificationsComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_notifications_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./notifications.component.html */
      "cpEX");
      /* harmony import */


      var _notifications_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./notifications.component.scss */
      "Co3K");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var NotificationsComponent = /*#__PURE__*/function () {
        function NotificationsComponent() {
          _classCallCheck(this, NotificationsComponent);
        }

        _createClass(NotificationsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return NotificationsComponent;
      }();

      NotificationsComponent.ctorParameters = function () {
        return [];
      };

      NotificationsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-notifications',
        template: _raw_loader_notifications_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_notifications_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], NotificationsComponent);
      /***/
    },

    /***/
    "7un6":
    /*!***************************************************************!*\
      !*** ./src/app/basic-ui/breadcrumbs/breadcrumbs.component.ts ***!
      \***************************************************************/

    /*! exports provided: BreadcrumbsComponent */

    /***/
    function un6(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BreadcrumbsComponent", function () {
        return BreadcrumbsComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_breadcrumbs_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./breadcrumbs.component.html */
      "mAyY");
      /* harmony import */


      var _breadcrumbs_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./breadcrumbs.component.scss */
      "rPUJ");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var BreadcrumbsComponent = /*#__PURE__*/function () {
        function BreadcrumbsComponent() {
          _classCallCheck(this, BreadcrumbsComponent);
        }

        _createClass(BreadcrumbsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return BreadcrumbsComponent;
      }();

      BreadcrumbsComponent.ctorParameters = function () {
        return [];
      };

      BreadcrumbsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-breadcrumbs',
        template: _raw_loader_breadcrumbs_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_breadcrumbs_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], BreadcrumbsComponent);
      /***/
    },

    /***/
    "9Jma":
    /*!***********************************************************!*\
      !*** ./src/app/basic-ui/dropdowns/dropdowns.component.ts ***!
      \***********************************************************/

    /*! exports provided: DropdownsComponent */

    /***/
    function Jma(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DropdownsComponent", function () {
        return DropdownsComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_dropdowns_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./dropdowns.component.html */
      "sVxx");
      /* harmony import */


      var _dropdowns_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./dropdowns.component.scss */
      "bAkf");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var DropdownsComponent = /*#__PURE__*/function () {
        function DropdownsComponent() {
          _classCallCheck(this, DropdownsComponent);
        }

        _createClass(DropdownsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return DropdownsComponent;
      }();

      DropdownsComponent.ctorParameters = function () {
        return [];
      };

      DropdownsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-dropdowns',
        template: _raw_loader_dropdowns_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_dropdowns_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], DropdownsComponent);
      /***/
    },

    /***/
    "BKxu":
    /*!*******************************************************!*\
      !*** ./src/app/basic-ui/modals/modals.component.scss ***!
      \*******************************************************/

    /*! exports provided: default */

    /***/
    function BKxu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Jhc2ljLXVpL21vZGFscy9tb2RhbHMuY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    "Co3K":
    /*!*********************************************************************!*\
      !*** ./src/app/basic-ui/notifications/notifications.component.scss ***!
      \*********************************************************************/

    /*! exports provided: default */

    /***/
    function Co3K(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Jhc2ljLXVpL25vdGlmaWNhdGlvbnMvbm90aWZpY2F0aW9ucy5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "DNsD":
    /*!*****************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/basic-ui/typography/typography.component.html ***!
      \*****************************************************************************************************/

    /*! exports provided: default */

    /***/
    function DNsD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"page-header\">\n  <h3 class=\"page-title\">\n    Typography\n  </h3>\n  <nav aria-label=\"breadcrumb\">\n    <ol class=\"breadcrumb\">\n      <li class=\"breadcrumb-item\"><a href=\"javascript:;\">UI Elements</a></li>\n      <li class=\"breadcrumb-item active\" aria-current=\"page\">Typography</li>\n    </ol>\n  </nav>\n</div>\n<div class=\"row\">\n  <div class=\"col-md-6 grid-margin stretch-card\">\n    <div class=\"card\">\n      <div class=\"card-body\">\n        <h4 class=\"card-title\">Headings</h4>\n        <p class=\"card-description\">\n          Add tags <code>&lt;h1&gt;</code> to <code>&lt;h6&gt;</code> or class <code>.h1</code> to <code>.h6</code>\n        </p>\n        <div class=\"template-demo\">\n          <h1>h1. Heading</h1>\n          <h2>h2. Heading</h2>\n          <h3>h3. Heading</h3>\n          <h4>h4. Heading</h4>\n          <h5>h5. Heading</h5>\n          <h6>h6. Heading</h6>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-md-6 grid-margin stretch-card\">\n    <div class=\"card\">\n      <div class=\"card-body\">\n        <h4 class=\"card-title\">Headings with secondary text</h4>\n        <p class=\"card-description\">\n          Add faded secondary text to headings\n        </p>\n        <div class=\"template-demo\">\n          <h1>\n            h1. Heading\n            <small class=\"text-muted\">\n              Secondary text\n            </small>\n          </h1>\n          <h2>\n            h2. Heading\n            <small class=\"text-muted\">\n              Secondary text\n            </small>\n          </h2>\n          <h3>\n            h3. Heading\n            <small class=\"text-muted\">\n              Secondary text\n            </small>\n          </h3>\n          <h4>\n            h4. Heading\n            <small class=\"text-muted\">\n              Secondary text\n            </small>\n          </h4>\n          <h5>\n            h5. Heading\n            <small class=\"text-muted\">\n              Secondary text\n            </small>\n          </h5>\n          <h6>\n            h6. Heading\n            <small class=\"text-muted\">\n              Secondary text\n            </small>\n          </h6>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-md-6 grid-margin stretch-card\">\n    <div class=\"card\">\n      <div class=\"card-body\">\n        <h4 class=\"card-title\">Display headings</h4>\n        <p class=\"card-description\">\n          Add class <code>.display1</code> to <code>.display-4</code>\n        </p>\n        <div class=\"template-demo\">\n          <h1 class=\"display-1\">Display 1</h1>\n          <h1 class=\"display-2\">Display 2</h1>\n          <h1 class=\"display-3\">Display 3</h1>\n          <h1 class=\"display-4\">Display 4</h1>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-md-6 d-flex align-items-stretch\">\n    <div class=\"row\">\n      <div class=\"col-md-12 grid-margin stretch-card\">\n        <div class=\"card\">\n          <div class=\"card-body\">\n            <h4 class=\"card-title\">Paragraph</h4>\n            <p class=\"card-description\">\n              Write text in <code>&lt;p&gt;</code> tag\n            </p>\n            <p>\n              Lorem Ipsum is simply dummy text of the printing and typesetting industry.\n              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,\n              when an unknown printer took a galley not only five centuries,\n            </p>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-md-12 grid-margin stretch-card\">\n        <div class=\"card\">\n          <div class=\"card-body\">\n            <h4 class=\"card-title\">Icon size</h4>\n            <p class=\"card-description\">\n              Add class <code>.icon-lg</code>, <code>.icon-md</code>, <code>.icon-sm</code>\n            </p>\n            <div class=\"row\">\n              <div class=\"col-md-4 d-flex align-items-center\">\n                <div class=\"d-flex flex-row align-items-center\">\n                  <i class=\"mdi mdi-compass icon-lg text-warning\"></i>\n                  <p class=\"mb-0 ml-1\">\n                    Icon-lg\n                  </p>\n                </div>\n              </div>\n              <div class=\"col-md-4 d-flex align-items-center\">\n                <div class=\"d-flex flex-row align-items-center\">\n                  <i class=\"mdi mdi-compass icon-md text-success\"></i>\n                  <p class=\"mb-0 ml-1\">\n                    Icon-md\n                  </p>\n                </div>\n              </div>\n              <div class=\"col-md-4 d-flex align-items-center\">\n                <div class=\"d-flex flex-row align-items-center\">\n                  <i class=\"mdi mdi-compass icon-sm text-danger\"></i>\n                  <p class=\"mb-0 ml-1\">\n                    Icon-sm\n                  </p>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-md-6 grid-margin stretch-card\">\n    <div class=\"card\">\n      <div class=\"card-body\">\n        <h4 class=\"card-title\">Blockquotes</h4>\n        <p class=\"card-description\">\n          Wrap content inside<code>&lt;blockquote class=\"blockquote\"&gt;</code>\n        </p>\n        <blockquote class=\"blockquote\">\n          <p class=\"mb-0\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>\n        </blockquote>\n      </div>\n      <div class=\"card-body\">\n        <blockquote class=\"blockquote blockquote-primary\">\n          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>\n          <footer class=\"blockquote-footer\">Someone famous in <cite title=\"Source Title\">Source Title</cite></footer>\n        </blockquote>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-md-6 grid-margin stretch-card\">\n    <div class=\"card\">\n      <div class=\"card-body\">\n        <h4 class=\"card-title\">Address</h4>\n        <p class=\"card-description\">\n          Use <code>&lt;address&gt;</code> tag\n        </p>\n        <div class=\"row\">\n          <div class=\"col-md-6\">\n            <address>\n              <p class=\"font-weight-bold\">Adore imc</p>\n              <p>\n                695 lsom Ave,\n              </p>\n              <p>\n                  Suite 00\n              </p>\n              <p>\n                San Francisco, CA 94107\n              </p>\n            </address>\n          </div>\n          <div class=\"col-md-6\">\n            <address class=\"text-primary\">\n              <p class=\"font-weight-bold\">\n                E-mail\n              </p>\n              <p class=\"mb-2\">\n                johndoe@examplemeail.com\n              </p>\n              <p class=\"font-weight-bold\">\n                Web Address\n              </p>\n              <p>\n                www.Adore.com\n              </p>\n            </address>\n          </div>\n        </div>\n      </div>\n      <div class=\"card-body\">\n        <h4 class=\"card-title\">Lead</h4>\n        <p class=\"card-description\">\n          Use class <code>.lead</code>\n        </p>\n        <p class=\"lead\">\n            Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.\n        </p>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-md-12 grid-margin\">\n    <div class=\"card\">\n      <div class=\"card-body\">\n        <h4 class=\"card-title\">Text colors</h4>\n        <p class=\"card-description\">\n          Use class <code>.text-primary</code>, <code>.text-secondary</code> etc. for text in theme colors\n        </p>\n        <div class=\"row\">\n          <div class=\"col-md-6\">\n            <p class=\"text-primary\">.text-primary</p>\n            <p class=\"text-success\">.text-success</p>\n            <p class=\"text-danger\">.text-danger</p>\n            <p class=\"text-warning\">.text-warning</p>\n            <p class=\"text-info\">.text-info</p>\n          </div>\n          <div class=\"col-md-6\">\n            <p class=\"text-light bg-dark pl-1\">.text-light</p>\n            <p class=\"text-secondary\">.text-secondary</p>\n            <p class=\"text-dark\">.text-dark</p>\n            <p class=\"text-muted\">.text-muted</p>\n            <p class=\"text-white bg-dark pl-1\">.text-white</p>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-md-4 grid-margin stretch-card\">\n    <div class=\"card\">\n      <div class=\"card-body\">\n        <h4 class=\"card-title\">Top aligned media</h4>\n        <div class=\"media\">\n          <i class=\"mdi mdi-earth icon-md text-info d-flex align-self-start mr-3\"></i>\n          <div class=\"media-body\">\n            <p class=\"card-text\">Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque.</p>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-md-4 grid-margin stretch-card\">\n    <div class=\"card\">\n      <div class=\"card-body\">\n        <h4 class=\"card-title\">Center aligned media</h4>\n        <div class=\"media\">\n          <i class=\"mdi mdi-earth icon-md text-info d-flex align-self-center mr-3\"></i>\n          <div class=\"media-body\">\n            <p class=\"card-text\">Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque.</p>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-md-4 grid-margin stretch-card\">\n    <div class=\"card\">\n      <div class=\"card-body\">\n        <h4 class=\"card-title\">Bottom aligned media</h4>\n        <div class=\"media\">\n          <i class=\"mdi mdi-earth icon-md text-info d-flex align-self-end mr-3\"></i>\n          <div class=\"media-body\">\n            <p class=\"card-text\">Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque.</p>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-md-6 grid-margin stretch-card\">\n    <div class=\"card\">\n      <div class=\"card-body\">\n        <h4 class=\"card-title\">Highlighted Text</h4>\n        <p class=\"card-description\">\n          Wrap the text in <code>&lt;mark&gt;</code> to highlight text\n        </p>\n        <p>\n          It is a long <mark class=\"bg-warning text-white\">established</mark> fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution\n        </p>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-md-6 grid-margin stretch-card\">\n    <div class=\"card\">\n      <div class=\"card-body\">\n        <h4 class=\"card-title\">List Unordered</h4>\n        <ul>\n          <li>Lorem ipsum dolor sit amet</li>\n          <li>Consectetur adipiscing elit</li>\n          <li>Integer molestie lorem at massa</li>\n          <li>Facilisis in pretium nisl aliquet</li>\n          <li>Nulla volutpat aliquam velit</li>\n        </ul>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-md-6 grid-margin stretch-card\">\n    <div class=\"card\">\n      <div class=\"card-body\">\n        <h4 class=\"card-title\">Bold text</h4>\n        <p class=\"card-description\">\n          Use class<code>.font-weight-bold</code>\n        </p>\n        <p>\n          It is a long <span class=\"font-weight-bold\">established fact</span> that a reader will be distracted by the readable content\n          of a page when looking at its layout. The point of using Lorem Ipsum is that it has a\n          more-or-less normal distribution\n        </p>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-md-6 grid-margin stretch-card\">\n    <div class=\"card\">\n      <div class=\"card-body\">\n        <h4 class=\"card-title\">List Ordered</h4>\n        <ol>\n          <li>Lorem ipsum dolor sit amet</li>\n          <li>Consectetur adipiscing elit</li>\n          <li>Integer molestie lorem at massa</li>\n          <li>Facilisis in pretium nisl aliquet</li>\n          <li>Nulla volutpat aliquam velit></li>\n        </ol>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-md-6 grid-margin stretch-card\">\n    <div class=\"card\">\n      <div class=\"card-body\">\n        <h4 class=\"card-title text-primary\">Underline</h4>\n        <p class=\"card-description\">\n          Wrap in <code>&lt;u&gt;</code> tag for underline\n        </p>\n        <p>\n          <u>lorem ipsum dolor sit amet, consectetur\n            mod tempor incididunt ut labore et dolore\n            magna aliqua.</u>\n        </p>\n      </div>\n      <div class=\"card-body\">\n        <h4 class=\"card-title text-danger\">Lowercase</h4>\n        <p class=\"card-description\">\n          Use class <code>.text-lowercase</code>\n        </p>\n        <p class=\"text-lowercase\">\n          lorem ipsum dolor sit amet, consectetur\n            mod tempor incididunt ut labore et dolore\n            magna aliqua.\n        </p>\n      </div>\n      <div class=\"card-body\">\n        <h4 class=\"card-title text-warning\">Uppercase</h4>\n        <p class=\"card-description\">\n          Use class <code>.text-uppercase</code>\n        </p>\n        <p class=\"text-uppercase\">\n          lorem ipsum dolor sit amet, consectetur\n            mod tempor incididunt ut labore et dolore\n            magna aliqua.\n        </p>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-md-6 grid-margin stretch-card\">\n    <div class=\"card\">\n      <div class=\"card-body\">\n        <h4 class=\"card-title\">Mute</h4>\n        <p class=\"card-description\">\n          Use class <code>.text-muted</code>\n        </p>\n        <p class=\"text-muted\">\n          lorem ipsum dolor sit amet, consectetur\n            mod tempor incididunt ut labore et dolore\n            magna aliqua.\n        </p>\n      </div>\n      <div class=\"card-body\">\n        <h4 class=\"card-title text-success\">Strike</h4>\n        <p class=\"card-description\">\n          Wrap content in <code>&lt;del&gt;</code> tag\n        </p>\n        <p>\n          <del>\n            lorem ipsum dolor sit amet, consectetur\n            mod tempor incididunt ut labore et dolore\n            magna aliqua.\n          </del>\n        </p>\n      </div>\n      <div class=\"card-body\">\n        <h4 class=\"card-title text-info\">Capitalized</h4>\n        <p class=\"card-description\">\n          Use class <code>.text-capitalize</code>\n        </p>\n        <p class=\"text-capitalize\">\n          lorem ipsum dolor sit amet, consectetur\n            mod tempor incididunt ut labore et dolore\n            magna aliqua.\n        </p>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-md-4 grid-margin stretch-card\">\n    <div class=\"card\">\n      <div class=\"card-body\">\n        <h4 class=\"card-title\">List with icon</h4>\n        <p class=\"card-description\">Add class <code>.list-ticked</code> to <code>&lt;ul&gt;</code></p>\n        <ul class=\"list-ticked\">\n          <li>Lorem ipsum dolor sit amet</li>\n          <li>Consectetur adipiscing elit</li>\n          <li>Integer molestie lorem at massa</li>\n          <li>Facilisis in pretium nisl aliquet</li>\n          <li>Nulla volutpat aliquam velit></li>\n        </ul>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-md-4 grid-margin stretch-card\">\n    <div class=\"card\">\n      <div class=\"card-body\">\n        <h4 class=\"card-title\">List with icon</h4>\n        <p class=\"card-description\">Add class <code>.list-arrow</code> to <code>&lt;ul&gt;</code></p>\n        <ul class=\"list-arrow\">\n          <li>Lorem ipsum dolor sit amet</li>\n          <li>Consectetur adipiscing elit</li>\n          <li>Integer molestie lorem at massa</li>\n          <li>Facilisis in pretium nisl aliquet</li>\n          <li>Nulla volutpat aliquam velit></li>\n        </ul>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-md-4 grid-margin stretch-card\">\n    <div class=\"card\">\n      <div class=\"card-body\">\n        <h4 class=\"card-title\">List with icon</h4>\n        <p class=\"card-description\">Add class <code>.list-star</code> to <code>&lt;ul&gt;</code></p>\n        <ul class=\"list-star\">\n          <li>Lorem ipsum dolor sit amet</li>\n          <li>Consectetur adipiscing elit</li>\n          <li>Integer molestie lorem at massa</li>\n          <li>Facilisis in pretium nisl aliquet</li>\n          <li>Nulla volutpat aliquam velit></li>\n        </ul>\n      </div>\n    </div>\n  </div>\n</div>";
      /***/
    },

    /***/
    "HGrU":
    /*!*************************************************************!*\
      !*** ./src/app/basic-ui/typography/typography.component.ts ***!
      \*************************************************************/

    /*! exports provided: TypographyComponent */

    /***/
    function HGrU(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TypographyComponent", function () {
        return TypographyComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_typography_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./typography.component.html */
      "DNsD");
      /* harmony import */


      var _typography_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./typography.component.scss */
      "Na62");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var TypographyComponent = /*#__PURE__*/function () {
        function TypographyComponent() {
          _classCallCheck(this, TypographyComponent);
        }

        _createClass(TypographyComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return TypographyComponent;
      }();

      TypographyComponent.ctorParameters = function () {
        return [];
      };

      TypographyComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-typography',
        template: _raw_loader_typography_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_typography_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], TypographyComponent);
      /***/
    },

    /***/
    "L4Xv":
    /*!*********************************************************!*\
      !*** ./src/app/basic-ui/buttons/buttons.component.scss ***!
      \*********************************************************/

    /*! exports provided: default */

    /***/
    function L4Xv(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Jhc2ljLXVpL2J1dHRvbnMvYnV0dG9ucy5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "NMYH":
    /*!*****************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/basic-ui/accordions/accordions.component.html ***!
      \*****************************************************************************************************/

    /*! exports provided: default */

    /***/
    function NMYH(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"page-header\">\n  <h3 class=\"page-title\">\n    Accordions\n  </h3>\n  <nav aria-label=\"breadcrumb\">\n    <ol class=\"breadcrumb\">\n      <li class=\"breadcrumb-item\"><a href=\"javascript:;\">UI Elements</a></li>\n      <li class=\"breadcrumb-item active\" aria-current=\"page\">Accordions</li>\n    </ol>\n  </nav>\n</div>\n<div class=\"row\">\n  <div class=\"col-lg-6 grid-margin stretch-card\">\n    <div class=\"card\">\n      <div class=\"card-body\">\n        <h4 class=\"card-title\">Default accordion</h4>\n        <p class=\"card-description\">Use class <code>.accordion</code> for basic accordion</p>\n        <div class=\"mt-4\">\n          <ngb-accordion [closeOthers]=\"true\" activeIds=\"collapse-1\">\n            <ngb-panel id=\"collapse-1\" title=\"How can I pay for an order I placed?\">\n              <ng-template ngbPanelContent>\n                <div class=\"row\">\n                  <div class=\"col-3\">\n                    <img src=\"assets/images/samples/300x300/10.jpg\" class=\"mw-100\"/>                              \n                  </div>\n                  <div class=\"col-9\">\n                    You can pay for the product you have purchased using credit cards, debit cards, or via online banking. \n                    We also provide cash-on-delivery services.                             \n                  </div>\n                </div>\n              </ng-template>\n            </ngb-panel>\n            <ngb-panel id=\"collapse-2\" title=\"I can’t sign in to my account\">\n              <ng-template ngbPanelContent>\n                If while signing in to your account you see an error message, you can do the following\n                <ol class=\"pl-3 mt-4\">\n                  <li>Check your network connection and try again</li>\n                  <li>Make sure your account credentials are correct while signing in</li>\n                  <li>Check whether your account is accessible in your region</li>\n                </ol>\n                <br>\n                <p class=\"text-success\">\n                  <i class=\"mdi mdi-alert-octagon mr-2\"></i>If the problem persists, you can contact our support.\n                </p>\n              </ng-template>\n            </ngb-panel>\n            <ngb-panel id=\"collapse-3\" title=\"Can I add money to the wallet?\">\n              <ng-template ngbPanelContent>\n                You can add money to the wallet for any future transaction from your bank account using net-banking, or credit/debit card transaction. The money in the wallet can be used for an easier and faster transaction.                \n              </ng-template>\n            </ngb-panel>\n          </ngb-accordion>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-lg-6 grid-margin stretch-card\">\n    <div class=\"card\">\n      <div class=\"card-body\">\n        <h4 class=\"card-title\">Bordered accordions</h4>\n        <p class=\"card-description\">Use class <code>.accordion-bordered</code> for bordered accordions</p>\n        <div class=\"mt-4\">\n          <ngb-accordion [closeOthers]=\"true\" activeIds=\"collapse-5\" class=\"accordion-bordered\">\n            <ngb-panel id=\"collapse-4\" title=\"How can I pay for an order I placed?\">\n                <ng-template ngbPanelContent>\n                  You can pay for the product you have purchased using credit cards, debit cards, or via online banking. We also provide cash-on-delivery services for most of our products. You can also use your account wallet for payment.\n                </ng-template>\n            </ngb-panel>\n            <ngb-panel id=\"collapse-5\" title=\"I can’t sign in to my account\">\n              <ng-template ngbPanelContent>\n                <p>\n                  If while signing in to your account you see an error message, you can do the following\n                </p>\n                <ol class=\"pl-3\">\n                  <li>Check your network connection and try again</li>\n                  <li>Make sure your account credentials are correct while signing in</li>\n                  <li>Check whether your account is accessible in your region</li>\n                </ol>\n                <br>\n                <i class=\"mdi mdi-alert-octagon mr-2\"></i>If the problem persists, you can contact our support.\n              </ng-template>\n            </ngb-panel>\n            <ngb-panel id=\"collapse-6\" title=\"How can I deactivate my account?\">\n                <ng-template ngbPanelContent>\n                  If you wish to deactivate your account, you can go to the Settings page of your account. Click on Account Settings and then click on Deactivate.\n                  You can join again as and when you wish.\n                </ng-template>\n            </ngb-panel>\n          </ngb-accordion>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-lg-6 grid-margin stretch-card\">\n    <div class=\"card\">\n      <div class=\"card-body\">\n        <h4 class=\"card-title\">Filled accordions</h4>\n        <p class=\"card-description\">Use class <code>.accordion-filled</code> for Basic Accordion</p>\n        <ngb-accordion [closeOthers]=\"true\" activeIds=\"collapse-8\" class=\"accordion-filled\">\n          <ngb-panel id=\"collapse-7\" title=\"How can I deactivate my account?\">\n            <ng-template ngbPanelContent>\n              You can at any time reclaim your money to your bank account that you have registered with us. If there are no registered account, then you can add an account in the ‘Register Bank Account’ page.\n            </ng-template>\n          </ngb-panel>\n          <ngb-panel id=\"collapse-8\" title=\"How can I deactivate my account?\">\n            <ng-template ngbPanelContent>\n              <ol class=\"pl-3\">\n                <li>Click on the ‘forgot password’ link.</li>\n                <li>Enter your email address registered with us</li>\n                <li>Click on the link sent you in the email</li>\n                <li>Reset your password</li>\n              </ol>\n            </ng-template>\n          </ngb-panel>\n          <ngb-panel id=\"collapse-9\" title=\"What should I do if I need any assistance using my account\">\n            <ng-template ngbPanelContent>\n              If you need any assistance while using your account, you can contact our customer support via email at support@abc.com. Or you can live chat with our support team. Our support team is available 24*7\n            </ng-template>\n          </ngb-panel>\n        </ngb-accordion>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-lg-6 grid-margin stretch-card\">\n    <div class=\"card\">\n      <div class=\"card-body\">\n        <h4 class=\"card-title\">Solid header accordion</h4>\n        <p class=\"card-description\">Use class <code>.accordion-solid-header</code> for basic accordion</p>\n        <div class=\"mt-4\">\n          <ngb-accordion [closeOthers]=\"true\" activeIds=\"collapse-12\" class=\"accordion-solid-header\">\n            <ngb-panel id=\"collapse-10\" title=\"How can I pay for an order I placed?\">\n              <ng-template ngbPanelContent>\n                <div class=\"row\">\n                  <div class=\"col-3\">\n                    <img src=\"assets/images/samples/300x300/10.jpg\" class=\"mw-100\"/>                              \n                  </div>\n                  <div class=\"col-9\">\n                    You can pay for the product you have purchased using credit cards, debit cards, or via online banking. \n                    We also provide cash-on-delivery services.                             \n                  </div>\n                </div>\n              </ng-template>\n            </ngb-panel>\n            <ngb-panel id=\"collapse-11\" title=\"I can’t sign in to my account\">\n              <ng-template ngbPanelContent>\n                If while signing in to your account you see an error message, you can do the following\n                <ol class=\"pl-3 mt-4\">\n                  <li>Check your network connection and try again</li>\n                  <li>Make sure your account credentials are correct while signing in</li>\n                  <li>Check whether your account is accessible in your region</li>\n                </ol>\n                <br>\n                <p class=\"text-success\">\n                  <i class=\"mdi mdi-alert-octagon mr-2\"></i>If the problem persists, you can contact our support.\n                </p>\n              </ng-template>\n            </ngb-panel>\n            <ngb-panel id=\"collapse-12\" title=\"Can I add money to the wallet?\">\n              <ng-template ngbPanelContent>\n                  You can add money to the wallet for any future transaction from your bank account using net-banking, or credit/debit card transaction. The money in the wallet can be used for an easier and faster transaction.                \n              </ng-template>\n            </ngb-panel>\n          </ngb-accordion>          \n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-lg-6 grid-margin stretch-card\">\n    <div class=\"card\">\n      <div class=\"card-body\">\n        <h4 class=\"card-title\">Solid content accordion</h4>\n        <p class=\"card-description\">Use class <code>.accordion-solid-content</code> for basic accordion</p>\n        <div class=\"mt-4\">\n          <ngb-accordion [closeOthers]=\"true\" activeIds=\"collapse-13\" class=\"accordion-solid-content\">\n            <ngb-panel id=\"collapse-13\" title=\"How can I pay for an order I placed?\">\n              <ng-template ngbPanelContent>\n                <div class=\"row\">\n                  <div class=\"col-3\">\n                    <img src=\"assets/images/samples/300x300/10.jpg\" class=\"mw-100\"/>                              \n                  </div>\n                  <div class=\"col-9\">\n                    You can pay for the product you have purchased using credit cards, debit cards, or via online banking. \n                    We also provide cash-on-delivery services.                             \n                  </div>\n                </div>\n              </ng-template>\n            </ngb-panel>\n            <ngb-panel id=\"collapse-14\" title=\"I can’t sign in to my account\">\n              <ng-template ngbPanelContent>\n                If while signing in to your account you see an error message, you can do the following\n                <ol class=\"pl-3 mt-4\">\n                  <li>Check your network connection and try again</li>\n                  <li>Make sure your account credentials are correct while signing in</li>\n                  <li>Check whether your account is accessible in your region</li>\n                </ol>\n                <br>\n                <p class=\"text-danger\">\n                  <i class=\"mdi mdi-alert-octagon mr-2\"></i>If the problem persists, you can contact our support.\n                </p>\n              </ng-template>\n            </ngb-panel>\n            <ngb-panel id=\"collapse-15\" title=\"Can I add money to the wallet?\">\n              <ng-template ngbPanelContent>\n                You can add money to the wallet for any future transaction from your bank account using net-banking, or credit/debit card transaction. The money in the wallet can be used for an easier and faster transaction.                \n              </ng-template>\n            </ngb-panel>\n          </ngb-accordion>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-lg-6 grid-margin stretch-card\">\n    <div class=\"card\">\n      <div class=\"card-body\">\n        <h4 class=\"card-title\">Multi colored accordion</h4>\n        <p class=\"card-description\">Use class <code>.accordion-multi-colored</code> for basic accordion</p>\n        <div class=\"mt-4\">\n          <ngb-accordion [closeOthers]=\"true\" activeIds=\"collapse-17\" class=\"accordion-multi-colored\">\n            <ngb-panel id=\"collapse-16\" title=\"How can I pay for an order I placed?\">\n              <ng-template ngbPanelContent>\n                <div class=\"row\">\n                  <div class=\"col-3\">\n                    <img src=\"assets/images/samples/300x300/10.jpg\" class=\"mw-100\"/>                              \n                  </div>\n                  <div class=\"col-9\">\n                    You can pay for the product you have purchased using credit cards, debit cards, or via online banking. \n                    We also provide cash-on-delivery services.                             \n                  </div>\n                </div>\n              </ng-template>\n            </ngb-panel>\n            <ngb-panel id=\"collapse-17\" title=\"I can’t sign in to my account\">\n              <ng-template ngbPanelContent>\n                If while signing in to your account you see an error message, you can do the following\n                <ol class=\"pl-3 mt-4\">\n                  <li>Check your network connection and try again</li>\n                  <li>Make sure your account credentials are correct while signing in</li>\n                  <li>Check whether your account is accessible in your region</li>\n                </ol>\n                <br>\n                <p class=\"text-danger\">\n                  <i class=\"mdi mdi-alert-octagon mr-2\"></i>If the problem persists, you can contact our support.\n                </p>\n              </ng-template>\n            </ngb-panel>\n            <ngb-panel id=\"collapse-18\" title=\"Can I add money to the wallet?\">\n              <ng-template ngbPanelContent>\n                You can add money to the wallet for any future transaction from your bank account using net-banking, or credit/debit card transaction. The money in the wallet can be used for an easier and faster transaction.                \n              </ng-template>\n            </ngb-panel>\n          </ngb-accordion>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>";
      /***/
    },

    /***/
    "Na62":
    /*!***************************************************************!*\
      !*** ./src/app/basic-ui/typography/typography.component.scss ***!
      \***************************************************************/

    /*! exports provided: default */

    /***/
    function Na62(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Jhc2ljLXVpL3R5cG9ncmFwaHkvdHlwb2dyYXBoeS5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "QtbF":
    /*!*******************************************************!*\
      !*** ./src/app/basic-ui/buttons/buttons.component.ts ***!
      \*******************************************************/

    /*! exports provided: ButtonsComponent */

    /***/
    function QtbF(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ButtonsComponent", function () {
        return ButtonsComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_buttons_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./buttons.component.html */
      "mX4L");
      /* harmony import */


      var _buttons_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./buttons.component.scss */
      "L4Xv");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var ButtonsComponent = /*#__PURE__*/function () {
        function ButtonsComponent() {
          _classCallCheck(this, ButtonsComponent);
        }

        _createClass(ButtonsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return ButtonsComponent;
      }();

      ButtonsComponent.ctorParameters = function () {
        return [];
      };

      ButtonsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-buttons',
        template: _raw_loader_buttons_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_buttons_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], ButtonsComponent);
      /***/
    },

    /***/
    "SMZr":
    /*!***************************************************************!*\
      !*** ./src/app/basic-ui/pagination/pagination.component.scss ***!
      \***************************************************************/

    /*! exports provided: default */

    /***/
    function SMZr(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Jhc2ljLXVpL3BhZ2luYXRpb24vcGFnaW5hdGlvbi5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "SSUv":
    /*!***********************************************************!*\
      !*** ./src/app/basic-ui/tooltips/tooltips.component.scss ***!
      \***********************************************************/

    /*! exports provided: default */

    /***/
    function SSUv(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Jhc2ljLXVpL3Rvb2x0aXBzL3Rvb2x0aXBzLmNvbXBvbmVudC5zY3NzIn0= */";
      /***/
    },

    /***/
    "VDWU":
    /*!*********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/basic-ui/modals/modals.component.html ***!
      \*********************************************************************************************/

    /*! exports provided: default */

    /***/
    function VDWU(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"row\">\n  <div class=\"col-12 grid-margin\">\n    <div class=\"card\">\n      <div class=\"card-body\">\n        <h4 class=\"card-title\">Large Modal</h4>\n        <p class=\"card-description\">Large sized modal with max-width set to <code>90%</code></p>\n        <!-- Dummy Modal Starts -->\n        <div class=\"modal demo-modal\">\n          <div class=\"modal-dialog modal-lg\">\n            <div class=\"modal-content\">\n              <div class=\"modal-header\">\n                <h5 class=\"modal-title\">Modal title</h5>\n                <button type=\"button\" class=\"close\">\n                  <span aria-hidden=\"true\">&times;</span>\n                </button>\n              </div>\n              <div class=\"modal-body\">\n                <p>Modal body text goes here.</p>\n              </div>\n              <div class=\"modal-footer\">\n                <button type=\"button\" class=\"btn btn-success\">Submit</button>\n                <button type=\"button\" class=\"btn btn-light\">Cancel</button>\n              </div>\n            </div>\n          </div>\n        </div>\n        <!-- Dummy Modal Ends -->\n        <!-- Modal starts -->\n        <div class=\"text-center\">\n          <button type=\"button\" class=\"btn btn-primary btn-sm\" (click)=\"openModal(exampleModalContent)\">Click for demo<i class=\"mdi mdi-arrow-right-circle-outline ml-1\"></i></button>\n        </div>\n        <ng-template class=\"modal fade\" #exampleModalContent let-modal>\n          <div class=\"modal-content\">\n            <div class=\"modal-header\">\n              <h5 class=\"modal-title\" id=\"exampleModalLabel\">Modal title</h5>\n              <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" (click)=\"modal.dismiss()\">\n                <span aria-hidden=\"true\">&times;</span>\n              </button>\n            </div>\n            <div class=\"modal-body\">\n              <p>Modal body text goes here.</p>\n            </div>\n            <div class=\"modal-footer\">\n              <button type=\"button\" class=\"btn btn-success\" (click)=\"modal.close()\">Submit</button>\n              <button type=\"button\" class=\"btn btn-light\" data-dismiss=\"modal\" (click)=\"modal.close()\">Cancel</button>\n            </div>\n          </div>\n        </ng-template>\n        <!-- Modal Ends -->\n      </div>\n    </div>\n  </div>\n  <div class=\"col-md-6 grid-margin stretch-card\">\n    <div class=\"card\">\n      <div class=\"card-body\">\n        <h4 class=\"card-title\">Medium Modal</h4>\n        <p class=\"card-description\">Normal modal with default bootstrap settings</p>\n        <!-- Dummy Modal Starts -->\n        <div class=\"modal demo-modal\">\n          <div class=\"modal-dialog\">\n            <div class=\"modal-content\">\n              <div class=\"modal-header\">\n                <h5 class=\"modal-title\">Modal title</h5>\n                <button type=\"button\" class=\"close\">\n                  <span aria-hidden=\"true\">&times;</span>\n                </button>\n              </div>\n              <div class=\"modal-body\">\n                <p>Modal body text goes here.</p>\n              </div>\n              <div class=\"modal-footer\">\n                <button type=\"button\" class=\"btn btn-success\">Submit</button>\n                <button type=\"button\" class=\"btn btn-light\">Cancel</button>\n              </div>\n            </div>\n          </div>\n        </div>\n        <!-- Dummy Modal Ends -->\n        <!-- Modal starts -->\n        <div class=\"text-center\">\n          <button type=\"button\" class=\"btn btn-primary btn-sm\" (click)=\"openMediumModal(mediumModalContent)\">Click for demo<i class=\"mdi mdi-arrow-right-circle-outline ml-1\"></i></button>\n        </div>\n        <ng-template #mediumModalContent let-modal class=\"modal fade\" id=\"exampleModal-2\" aria-labelledby=\"exampleModalLabel-2\">\n          <div class=\"modal-content\">\n            <div class=\"modal-header\">\n              <h5 class=\"modal-title\" id=\"exampleModalLabel-2\">Modal title</h5>\n              <button type=\"button\" class=\"close\" (click)=\"modal.dismiss()\" aria-label=\"Close\">\n                <span aria-hidden=\"true\">&times;</span>\n              </button>\n            </div>\n            <div class=\"modal-body\">\n              <p>Modal body text goes here.</p>\n            </div>\n            <div class=\"modal-footer\">\n              <button type=\"button\" class=\"btn btn-success\" (click)=\"modal.close()\">Submit</button>\n              <button type=\"button\" class=\"btn btn-light\" (click)=\"modal.close()\">Cancel</button>\n            </div>\n          </div>\n        </ng-template>\n        <!-- Modal Ends -->\n      </div>\n    </div>\n  </div>\n  <div class=\"col-md-6 grid-margin stretch-card\">\n    <div class=\"card\">\n      <div class=\"card-body\">\n        <h4 class=\"card-title\">Small Modal</h4>\n        <p class=\"card-description\">Small modal with max-width set to <code>300px</code></p>\n        <!-- Dummy Modal Starts -->\n        <div class=\"modal demo-modal\">\n          <div class=\"modal-dialog modal-sm\">\n            <div class=\"modal-content\">\n              <div class=\"modal-header\">\n                <h5 class=\"modal-title\">Modal title</h5>\n                <button type=\"button\" class=\"close\">\n                  <span aria-hidden=\"true\">&times;</span>\n                </button>\n              </div>\n              <div class=\"modal-body\">\n                <p>Modal body text goes here.</p>\n              </div>\n              <div class=\"modal-footer\">\n                <button type=\"button\" class=\"btn btn-success\">Submit</button>\n                <button type=\"button\" class=\"btn btn-light\">Cancel</button>\n              </div>\n            </div>\n          </div>\n        </div>\n        <!-- Dummy Modal Ends -->\n        <!-- Modal starts -->\n        <div class=\"text-center\">\n          <button type=\"button\" class=\"btn btn-primary btn-sm\" (click)=\"openSmallModal(smallModalContent)\">Click for demo<i class=\"mdi mdi-arrow-right-circle-outline ml-1\"></i></button>\n        </div>\n        <ng-template #smallModalContent let-modal class=\"modal fade\" aria-labelledby=\"exampleModalLabel-3\">\n          <div class=\"modal-content\">\n            <div class=\"modal-header\">\n              <h5 class=\"modal-title\" id=\"exampleModalLabel-3\">Modal title</h5>\n              <button type=\"button\" class=\"close\" (click)=\"modal.dismiss()\" aria-label=\"Close\">\n                <span aria-hidden=\"true\">&times;</span>\n              </button>\n            </div>\n            <div class=\"modal-body\">\n              <p>Modal body text goes here.</p>\n            </div>\n            <div class=\"modal-footer\">\n              <button type=\"button\" class=\"btn btn-success\" (click)=\"modal.close()\">Submit</button>\n              <button type=\"button\" class=\"btn btn-light\" (click)=\"modal.close()\">Cancel</button>\n            </div>\n          </div>\n        </ng-template>\n        <!-- Modal Ends -->\n      </div>\n    </div>\n  </div>\n</div>";
      /***/
    },

    /***/
    "Z5ml":
    /*!*************************************************************!*\
      !*** ./src/app/basic-ui/accordions/accordions.component.ts ***!
      \*************************************************************/

    /*! exports provided: AccordionsComponent */

    /***/
    function Z5ml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AccordionsComponent", function () {
        return AccordionsComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_accordions_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./accordions.component.html */
      "NMYH");
      /* harmony import */


      var _accordions_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./accordions.component.scss */
      "vmD5");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var AccordionsComponent = /*#__PURE__*/function () {
        function AccordionsComponent() {
          _classCallCheck(this, AccordionsComponent);
        }

        _createClass(AccordionsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return AccordionsComponent;
      }();

      AccordionsComponent.ctorParameters = function () {
        return [];
      };

      AccordionsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-accordions',
        template: _raw_loader_accordions_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_accordions_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], AccordionsComponent);
      /***/
    },

    /***/
    "bAkf":
    /*!*************************************************************!*\
      !*** ./src/app/basic-ui/dropdowns/dropdowns.component.scss ***!
      \*************************************************************/

    /*! exports provided: default */

    /***/
    function bAkf(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Jhc2ljLXVpL2Ryb3Bkb3ducy9kcm9wZG93bnMuY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    "bsiT":
    /*!*******************************************************!*\
      !*** ./src/app/basic-ui/badges/badges.component.scss ***!
      \*******************************************************/

    /*! exports provided: default */

    /***/
    function bsiT(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Jhc2ljLXVpL2JhZGdlcy9iYWRnZXMuY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    "cpEX":
    /*!***********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/basic-ui/notifications/notifications.component.html ***!
      \***********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function cpEX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"page-header\">\n  <h3 class=\"page-title\">\n    Notifications\n  </h3>\n  <nav aria-label=\"breadcrumb\">\n    <ol class=\"breadcrumb\">\n      <li class=\"breadcrumb-item\"><a href=\"javascript:;\">Dialogs</a></li>\n      <li class=\"breadcrumb-item active\" aria-current=\"page\">Notifications</li>\n    </ol>\n  </nav>\n</div>\n<div class=\"row\">\n  <div class=\"col-md-6 grid-margin stretch-card\">\n    <div class=\"card\">\n      <div class=\"card-body\">\n        <h4 class=\"card-title\">Bootstrap alert</h4>\n        <p class=\"card-description\">Add class <code>.alert .alert-*</code></p>\n        <div class=\"alert alert-success\" role=\"alert\">\n          You successfully read this important alert message.\n        </div>\n        <div class=\"alert alert-info\" role=\"alert\">\n          This alert needs your attention, but it's not that important.\n        </div>\n        <div class=\"alert alert-warning\" role=\"alert\">\n          Better check yourself, you're not looking too good.\n        </div>\n        <div class=\"alert alert-danger\" role=\"alert\">\n          Change a few things up and try submitting again.\n        </div>\n        <div class=\"alert alert-primary\" role=\"alert\">\n            This is a primary alert\n        </div>\n        <div class=\"alert alert-secondary\" role=\"alert\">\n          This alert is not so important.\n          </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-md-6 grid-margin stretch-card\">\n    <div class=\"card\">\n      <div class=\"card-body\">\n        <h4 class=\"card-title\">Custom alerts</h4>\n        <p class=\"card-description\">\n          Custom HTML inside alert\n        </p>\n        <div class=\"card card-inverse-secondary mb-5\">\n          <div class=\"card-body\">\n            <p class=\"mb-4\">\n              Well done! You successfully read this important alert message.\n            </p>\n            <button class=\"btn btn-secondary d-block d-sm-inline mx-auto\">Ok</button>\n            <button class=\"btn btn-light d-block d-sm-inline mx-auto mt-2 mt-sm-0 ml-sm-1\">Cancel</button>\n          </div>\n        </div>\n        <div class=\"card card-inverse-info\">\n          <div class=\"card-body\">\n            <p class=\"mb-4\">\n              Heads up! This alert needs your attention, but it's not super important.\n            </p>\n            <button class=\"btn btn-info d-block d-sm-inline mx-auto\">Ok</button>\n            <button class=\"btn btn-light d-block d-sm-inline mx-auto mt-2 mt-sm-0 ml-sm-1\">Cancel</button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-12 grid-margin\">\n    <div class=\"card\">\n      <div class=\"card-body\">\n        <h4 class=\"card-title\">Bootstrap alerts in fill colors</h4>\n        <p class=\"card-description\">\n          Add class <code>.alert-fill-*</code> with <code>.alert</code>\n        </p>\n        <div class=\"alert alert-fill-primary\" role=\"alert\">\n          <i class=\"mdi mdi-information-outline\"></i>\n          There! This is a primary alert.\n        </div>\n        <div class=\"alert alert-fill-success\" role=\"alert\">\n          <i class=\"mdi mdi-information-outline\"></i>\n          Well done! You successfully read this important alert message.\n        </div>\n        <div class=\"alert alert-fill-info\" role=\"alert\">\n          <i class=\"mdi mdi-information-outline\"></i>\n          Heads up! This alert needs your attention, but it's not super important.\n        </div>\n        <div class=\"alert alert-fill-warning\" role=\"alert\">\n          <i class=\"mdi mdi-information-outline\"></i>\n          Warning! Better check yourself, you're not looking too good.\n        </div>\n        <div class=\"alert alert-fill-danger\" role=\"alert\">\n          <i class=\"mdi mdi-information-outline\"></i>\n          Oh snap! Change a few things up and try submitting again.\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-lg-6 stretch-card\">\n    <div class=\"card\">\n      <div class=\"card-body\">\n        <h4 class=\"card-title\">Desktop notification</h4>\n        <p class=\"card-description\">Create simple desktop notifications</p>\n        <form>\n          <div class=\"form-group\">\n            <label for=\"title\">Title</label>\n            <input type=\"text\" class=\"form-control\" id=\"title\" placeholder=\"Write some title here\" value=\"Sample title\" required>\n            <label class=\"mt-4\" for=\"message\">Message</label>\n            <textarea placeholder=\"Write some message here\" id=\"message\" class=\"form-control\" required>Sample content</textarea>\n          </div>\n          <button type=\"submit\" class=\"btn btn-success\"> <span class=\"glyphicon glyphicon-ok\" aria-hidden=\"true\"></span> Notify</button>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>";
      /***/
    },

    /***/
    "f3Dm":
    /*!*****************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/basic-ui/pagination/pagination.component.html ***!
      \*****************************************************************************************************/

    /*! exports provided: default */

    /***/
    function f3Dm(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"page-header\">\n  <h3 class=\"page-title\">\n    Pagination\n  </h3>\n  <nav aria-label=\"breadcrumb\">\n    <ol class=\"breadcrumb\">\n      <li class=\"breadcrumb-item\"><a href=\"javascript:;\">UI Elements</a></li>\n      <li class=\"breadcrumb-item active\" aria-current=\"page\">Pagination</li>\n    </ol>\n  </nav>\n</div>\n<div class=\"row\">\n  <div class=\"col-md-4 col-sm-6 grid-margin stretch-card\">\n    <div class=\"card\">\n      <div class=\"card-body\">\n        <h4 class=\"card-title\">Basic Paginations</h4>\n        <p class=\"card-description\">Default bordered pagination</p>\n        <ngb-pagination [collectionSize]=\"40\" [pageSize]=\"10\" [page]=\"1\" aria-label=\"Default pagination\"></ngb-pagination>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-md-4 col-sm-6 grid-margin stretch-card\">\n    <div class=\"card\">\n      <div class=\"card-body\">\n        <h4 class=\"card-title\">Flat Pagination</h4>\n        <p class=\"card-description\">Add class <code>.pagination-flat</code></p>\n        <ngb-pagination [collectionSize]=\"40\" [pageSize]=\"10\" [page]=\"1\" aria-label=\"Default pagination\" class=\"pagination-flat pagination-success\"></ngb-pagination>        \n      </div>\n    </div>\n  </div>\n  <div class=\"col-md-4 col-sm-6 grid-margin stretch-card\">\n    <div class=\"card\">\n      <div class=\"card-body\">\n        <h4 class=\"card-title\">Separated  Pagination</h4>\n        <p class=\"card-description\">Add class <code>.pagination-separated</code></p>\n        <ngb-pagination [collectionSize]=\"40\" [pageSize]=\"10\" [page]=\"1\" aria-label=\"Default pagination\" class=\"pagination-separated pagination-danger\"></ngb-pagination>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-md-4 col-sm-6 grid-margin stretch-card\">\n    <div class=\"card\">\n      <div class=\"card-body\">\n        <h4 class=\"card-title\">Bordered Rounded</h4>\n        <p class=\"card-description\">Add class <code>.pagination-rounded</code></p>\n        <ngb-pagination [collectionSize]=\"40\" [pageSize]=\"10\" [page]=\"1\" aria-label=\"Default pagination\" class=\"pagination-rounded\"></ngb-pagination>        \n      </div>\n    </div>\n  </div>\n  <div class=\"col-md-4 col-sm-6 grid-margin stretch-card\">\n    <div class=\"card\">\n      <div class=\"card-body\">\n        <h4 class=\"card-title\">Flat Rounded Pagination</h4>\n        <p class=\"card-description\">Add class <code>.pagination-rounded-flat</code></p>\n        <ngb-pagination [collectionSize]=\"40\" [pageSize]=\"10\" [page]=\"1\" aria-label=\"Default pagination\" class=\"pagination-rounded-flat pagination-success\"></ngb-pagination>        \n      </div>\n    </div>\n  </div>\n  <div class=\"col-md-4 col-sm-6 grid-margin stretch-card\">\n    <div class=\"card\">\n      <div class=\"card-body\">\n        <h4 class=\"card-title\">Separated Rounded</h4>\n        <p class=\"card-description\">Add class <code>.pagination-rounded-separated</code></p>\n        <ngb-pagination [collectionSize]=\"40\" [pageSize]=\"10\" [page]=\"1\" aria-label=\"Default pagination\" class=\"pagination-rounded-separated pagination-danger\"></ngb-pagination>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-md-4 col-sm-6 grid-margin stretch-card\">\n    <div class=\"card\">\n      <div class=\"card-body\">\n        <h4 class=\"card-title\">Left Position</h4>\n        <p class=\"card-description\">Left Pagination</p>\n        <ngb-pagination [collectionSize]=\"40\" [pageSize]=\"10\" [page]=\"1\" aria-label=\"Default pagination\" class=\"d-flex justify-content-start\"></ngb-pagination>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-md-4 col-sm-6 grid-margin stretch-card\">\n    <div class=\"card\">\n      <div class=\"card-body\">\n        <h4 class=\"card-title\">Center Position</h4>\n        <p class=\"card-description\">Centered Pagination</p>\n        <ngb-pagination [collectionSize]=\"40\" [pageSize]=\"10\" [page]=\"1\" aria-label=\"Default pagination\" class=\"d-flex justify-content-center pagination-success\"></ngb-pagination>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-md-4 col-sm-6 grid-margin stretch-card\">\n    <div class=\"card\">\n      <div class=\"card-body\">\n        <h4 class=\"card-title\">Right Position</h4>\n        <p class=\"card-description\">Right Pagination</p>\n        <ngb-pagination [collectionSize]=\"40\" [pageSize]=\"10\" [page]=\"1\" aria-label=\"Default pagination\" class=\"d-flex justify-content-end pagination-danger\"></ngb-pagination>\n      </div>\n    </div>\n  </div>\n</div>";
      /***/
    },

    /***/
    "j6vV":
    /*!*************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/basic-ui/tooltips/tooltips.component.html ***!
      \*************************************************************************************************/

    /*! exports provided: default */

    /***/
    function j6vV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"page-header\">\n  <h3 class=\"page-title\">\n    Tooltips\n  </h3>\n  <nav aria-label=\"breadcrumb\">\n    <ol class=\"breadcrumb\">\n      <li class=\"breadcrumb-item\"><a href=\"javascript:;\">UI Elements</a></li>\n      <li class=\"breadcrumb-item active\" aria-current=\"page\">Tooltips</li>\n    </ol>\n  </nav>\n</div>\n<div class=\"row\">\n  <div class=\"col-md-6 grid-margin stretch-card\">\n    <div class=\"card\">\n      <div class=\"card-body\">\n        <h4 class=\"card-title\">Basic tooltip</h4>\n        <p class=\"card-description\">Basic tooltip demo that appears on hover</p>\n        <p>Hover the below button for interactive demo</p>\n        <button class=\"btn btn-warning\" placement=\"bottom\" ngbTooltip=\"Basic tooltip\">Hover me</button>\n      </div>\n      <div class=\"card-body\">\n        <h4 class=\"card-title\">Tooltip positions</h4>\n        <p class=\"card-description\">Add attribute <code>placement=position</code> to the element</p>\n        <div class=\"tooltip-static-demo\">\n          <div class=\"tooltip bs-tooltip-top bs-tooltip-top-demo\" role=\"tooltip\">\n            <div class=\"arrow\"></div>\n            <div class=\"tooltip-inner\">\n              Top Tooltip\n            </div>\n          </div>\n          <div class=\"tooltip bs-tooltip-right bs-tooltip-right-demo\" role=\"tooltip\">\n            <div class=\"arrow\"></div>\n            <div class=\"tooltip-inner\">\n              Right Tooltip\n            </div>\n          </div>\n          <div class=\"tooltip bs-tooltip-bottom bs-tooltip-bottom-demo\" role=\"tooltip\">\n            <div class=\"arrow\"></div>\n            <div class=\"tooltip-inner\">\n              Bottom Tooltip\n            </div>\n          </div>\n          <div class=\"tooltip bs-tooltip-left bs-tooltip-left-demo\" role=\"tooltip\">\n            <div class=\"arrow\"></div>\n            <div class=\"tooltip-inner\">\n              Left Tooltip\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-md-6 grid-margin stretch-card\">\n    <div class=\"card\">\n      <div class=\"card-body\">\n        <h4 class=\"card-title\">Basic popover</h4>\n        <p class=\"card-description\">Basic popover demo that appears on click</p>\n        <p>Click the below button for interactive demo</p>\n        <button type=\"button\" class=\"btn btn-success\" placement=\"bottom\" popoverTitle=\"Popover title\" \n        ngbPopover=\"Sed posuere consectetur est at lobortis. Aenean eu leo quam.\">Click me</button>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-12\">\n    <div class=\"card\">\n      <div class=\"card-body\">\n        <h4 class=\"card-title\">Popover positions</h4>\n        <p class=\"card-description\">Add attribute <code>data-placement=\"{{'{'}}position{{'}'}}\"</code> to the element</p>\n        <div class=\"popover-static-demo\">\n          <div class=\"popover bs-popover-top bs-popover-top-demo\">\n            <div class=\"arrow\"></div>\n            <h3 class=\"popover-header\">Popover top</h3>\n            <div class=\"popover-body\">\n              <p>Sed posuere consectetur est at lobortis. Aenean eu leo quam.</p>\n            </div>\n          </div>\n          <div class=\"popover bs-popover-right bs-popover-right-demo\">\n            <div class=\"arrow\"></div>\n            <h3 class=\"popover-header\">Popover right</h3>\n            <div class=\"popover-body\">\n              <p>Sed posuere consectetur est at lobortis. Aenean eu leo quam.</p>\n            </div>\n          </div>\n          <div class=\"popover bs-popover-bottom bs-popover-bottom-demo\">\n            <div class=\"arrow\"></div>\n            <h3 class=\"popover-header\">Popover bottom</h3>\n            <div class=\"popover-body\">\n              <p>Sed posuere consectetur est at lobortis. Aenean eu leo quam.</p>\n            </div>\n          </div>\n          <div class=\"popover bs-popover-left bs-popover-left-demo\">\n            <div class=\"arrow\"></div>\n            <h3 class=\"popover-header\">Popover left</h3>\n            <div class=\"popover-body\">\n              <p>Sed posuere consectetur est at lobortis. Aenean eu leo quam.</p>\n            </div>\n          </div>\n          <div class=\"clearfix\"></div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>";
      /***/
    },

    /***/
    "kh8E":
    /*!*****************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/basic-ui/tabs/tabs.component.html ***!
      \*****************************************************************************************/

    /*! exports provided: default */

    /***/
    function kh8E(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"page-header\">\n  <h3 class=\"page-title\">\n    Tabs\n  </h3>\n  <nav aria-label=\"breadcrumb\">\n    <ol class=\"breadcrumb\">\n      <li class=\"breadcrumb-item\">\n        <a href=\"javascript:;\">UI Elements</a>\n      </li>\n      <li class=\"breadcrumb-item active\" aria-current=\"page\">Tabs</li>\n    </ol>\n  </nav>\n</div>\n<div class=\"row\">\n  <div class=\"col-md-6 grid-margin stretch-card\">\n    <div class=\"card\">\n      <div class=\"card-body\">\n        <h4 class=\"card-title\">Basic Tab</h4>\n        <p class=\"card-description\">Horizontal bootstrap tab</p>\n        <ngb-tabset>\n          <ngb-tab title=\"Home\">\n            <ng-template ngbTabContent>\n              <div class=\"media\">\n                <img class=\"mr-3 w-25 rounded\" src=\"assets/images/samples/300x300/13.jpg\" alt=\"sample image\">\n                <div class=\"media-body\">\n                  <h4 class=\"mt-0\">Why choose us?</h4>\n                  <p>\n                    Far curiosity incommode now led smallness allowance. Favour bed assure son things yet. She consisted consulted elsewhere\n                    happiness disposing household any old the. Widow downs you new shade drift hopes small. So otherwise\n                    commanded sweetness we improving. Instantly by daughters resembled unwilling principle so middleton.\n                  </p>\n                </div>\n              </div>\n            </ng-template>\n          </ngb-tab>\n          <ngb-tab title=\"Profile\">\n            <ng-template ngbTabContent>\n              <div class=\"media\">\n                <img class=\"mr-3 w-25 rounded\" src=\"assets/images/faces/face12.jpg\" alt=\"sample image\">\n                <div class=\"media-body\">\n                  <h4 class=\"mt-0\">John Doe</h4>\n                  <p>\n                    Fail most room even gone her end like. Comparison dissimilar unpleasant six compliment two unpleasing any add. Ashamed my\n                    company thought wishing colonel it prevent he in. Pretended residence are something far engrossed old\n                    off.\n                  </p>\n                </div>\n              </div>\n            </ng-template>\n          </ngb-tab>\n          <ngb-tab title=\"Contact\">\n            <ng-template ngbTabContent>\n              <h4>Contact us </h4>\n              <p>\n                Feel free to contact us if you have any questions!\n              </p>\n              <p>\n                <i class=\"mdi mdi-phone text-info\"></i>\n                +123456789\n              </p>\n              <p>\n                <i class=\"mdi mdi-email-outline text-success\"></i>\n                contactus@example.com\n              </p>\n            </ng-template>\n          </ngb-tab>\n        </ngb-tabset>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-md-6 grid-margin stretch-card\">\n    <div class=\"card\">\n      <div class=\"card-body\">\n        <h4 class=\"card-title\">Vertical Tabs</h4>\n        <p class=\"card-description\">Add class\n          <code>.tab-vertical</code> for vertical tabs\n        </p>\n        <ngb-tabset class=\"tab-vertical\">\n          <ngb-tab>\n            <ng-template ngbTabTitle>\n              Home\n              <i class=\"mdi mdi-home-outline text-info ml-2\"></i>\n            </ng-template>\n            <ng-template ngbTabContent>\n              <div class=\"text-center\">\n                <img class=\"mr-3 w-25 mb-4\" src=\"assets/images/samples/300x300/12.jpg\" alt=\"sample image\">\n              </div>\n              <p>\n                Inhabiting discretion the her dispatched decisively boisterous joy. So form were wish open is able of mile of. Waiting express\n                if prevent it we an musical. Especially reasonable travelling\n              </p>\n            </ng-template>\n          </ngb-tab>\n          <ngb-tab>\n            <ng-template ngbTabTitle>\n              Profile\n              <i class=\"mdi mdi-account-outline text-danger ml-2\"></i>\n            </ng-template>\n            <ng-template ngbTabContent>\n              <div class=\"text-center\">\n                <img class=\"mb-3 w-25 rounded\" src=\"assets/images/faces/face1.jpg\" alt=\"sample image\">\n                <h5 class=\"mt-0\">Adam John</h5>\n                <p class=\"mb-0\">UX specialist</p>\n                <p class=\"mb-0\">Florida</p>\n              </div>\n            </ng-template>\n          </ngb-tab>\n          <ngb-tab>\n            <ng-template ngbTabTitle>\n              Reach\n              <i class=\"mdi mdi-email-outline text-success ml-2\"></i>\n            </ng-template>\n            <ng-template ngbTabContent>\n              <h4>Contact us </h4>\n              <p>\n                Feel free to contact us if you have any questions!\n              </p>\n              <p>\n                <i class=\"mdi mdi-phone text-info\"></i>\n                +123456789\n              </p>\n              <p>\n                <i class=\"mdi mdi-email-outline text-success\"></i>\n                contactus@example.com\n              </p>\n            </ng-template>\n          </ngb-tab>\n        </ngb-tabset>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-md-6 grid-margin stretch-card\">\n    <div class=\"card\">\n      <div class=\"card-body\">\n        <h4 class=\"card-title\">Pills</h4>\n        <p class=\"card-description\">Basic nav pills</p>\n        <ngb-tabset type=\"pills\" class=\"pills-success\">\n          <ngb-tab title=\"Home\">\n            <ng-template ngbTabContent>\n              <div class=\"media\">\n                <img class=\"mr-3 w-25 rounded\" src=\"assets/images/samples/300x300/12.jpg\" alt=\"sample image\">\n                <div class=\"media-body\">\n                  <h5 class=\"mt-0\">I'm doing mental jumping jacks.</h5>\n                  <p>Only you could make those words cute. Oh I beg to differ, I think we have a lot to discuss. After all,\n                    you are a client. I am not a killer. I feel like a jigsaw puzzle missing a piece. And I'm not even sure\n                    what the picture should be.</p>\n                </div>\n              </div>\n            </ng-template>\n          </ngb-tab>\n          <ngb-tab title=\"Profile\">\n            <ng-template ngbTabContent>\n              <div class=\"media\">\n                <img class=\"mr-3 w-25 rounded\" src=\"assets/images/samples/300x300/11.jpg\" alt=\"sample image\">\n                <div class=\"media-body\">\n                  <p>I'm thinking two circus clowns dancing. You? Finding a needle in a haystack isn't hard when every straw\n                    is computerized. Tell him time is of the essence. Somehow, I doubt that. You have a good heart, Dexter.</p>\n                </div>\n              </div>\n            </ng-template>\n          </ngb-tab>\n          <ngb-tab title=\"Contact\">\n            <ng-template ngbTabContent>\n              <div class=\"media\">\n                <img class=\"mr-3 w-25 rounded\" src=\"assets/images/samples/300x300/14.jpg\" alt=\"sample image\">\n                <div class=\"media-body\">\n                  <p>\n                    I'm really more an apartment person. This man is a knight in shining armor. Oh I beg to differ, I think we have a lot to\n                    discuss. After all, you are a client. You all right, Dexter?\n                  </p>\n                  <p>\n                    I'm generally confused most of the time. Cops, another community I'm not part of. You're a killer. I catch killers. Hello,\n                    Dexter Morgan.\n                  </p>\n                </div>\n              </div>\n            </ng-template>\n          </ngb-tab>\n        </ngb-tabset>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-md-6 grid-margin stretch-card\">\n    <div class=\"card\">\n      <div class=\"card-body\">\n        <h4 class=\"card-title\">Vertical Pills</h4>\n        <p class=\"card-description\">Add class\n          <code>.pills-vertical</code> for vertical pills\n        </p>\n        <ngb-tabset type=\"pills\" class=\"pills-vertical pills-info\">\n          <ngb-tab>\n            <ng-template ngbTabTitle>\n              <i class=\"mdi mdi-home-outline\"></i>\n              Home\n            </ng-template>\n            <ng-template ngbTabContent>\n              <div class=\"media\">\n                <img class=\"mr-3 w-25 rounded\" src=\"assets/images/samples/300x300/11.jpg\" alt=\"sample image\">\n                <div class=\"media-body\">\n                  <h5 class=\"mt-0\">I'm doing mental jumping jacks.</h5>\n                  <p>\n                    Only you could make those words cute. Oh I beg to differ, I think we have a lot to discuss. After all, you are a client.\n                    I am not a killer.\n                  </p>\n                </div>\n              </div>\n            </ng-template>\n          </ngb-tab>\n          <ngb-tab>\n            <ng-template ngbTabTitle>\n              <i class=\"mdi mdi-account-outline\"></i>\n              Profile\n            </ng-template>\n            <ng-template ngbTabContent>\n              <div class=\"media\">\n                <img class=\"mr-3 w-25 rounded\" src=\"assets/images/samples/300x300/11.jpg\" alt=\"sample image\">\n                <div class=\"media-body\">\n                  <p>I'm thinking two circus clowns dancing. You? Finding a needle in a haystack isn't hard when every straw\n                    is computerized. Tell him time is of the essence. Somehow, I doubt that. You have a good heart, Dexter.</p>\n                </div>\n              </div>\n            </ng-template>\n          </ngb-tab>\n          <ngb-tab>\n            <ng-template ngbTabTitle>\n              <i class=\"mdi mdi-email-open-outline\"></i>\n              Mail\n            </ng-template>\n            <ng-template ngbTabContent>\n              <div class=\"media\">\n                <img class=\"mr-3 w-25 rounded\" src=\"assets/images/samples/300x300/14.jpg\" alt=\"sample image\">\n                <div class=\"media-body\">\n                  <p>\n                    I'm really more an apartment person. This man is a knight in shining armor. Oh I beg to differ, I think we have a lot to\n                    discuss. After all, you are a client. You all right, Dexter?\n                  </p>\n                  <p>\n                    I'm generally confused most of the time. Cops, another community I'm not part of. You're a killer. I catch killers. Hello,\n                    Dexter Morgan.\n                  </p>\n                </div>\n              </div>\n            </ng-template>\n          </ngb-tab>\n        </ngb-tabset>\n      </div>\n    </div>\n  </div>\n</div>\n";
      /***/
    },

    /***/
    "mAyY":
    /*!*******************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/basic-ui/breadcrumbs/breadcrumbs.component.html ***!
      \*******************************************************************************************************/

    /*! exports provided: default */

    /***/
    function mAyY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"page-header\">\n  <h3 class=\"page-title\">\n    Breadcrumbs\n  </h3>\n  <nav aria-label=\"breadcrumb\">\n    <ol class=\"breadcrumb\">\n      <li class=\"breadcrumb-item\"><a href=\"javascript:;\">UI Elements</a></li>\n      <li class=\"breadcrumb-item active\" aria-current=\"page\">Breadcrumbs</li>\n    </ol>\n  </nav>\n</div>\n<div class=\"row\">\n  <div class=\"col-md-6 grid-margin stretch-card\">\n    <div class=\"card\">\n      <div class=\"card-body\">\n        <h4 class=\"card-title\">Breadcrumbs</h4>\n        <p class=\"card-description\">Add class <code>.breadcrumbs</code></p>\n        <div class=\"template-demo\">\n          <nav aria-label=\"breadcrumb\" role=\"navigation\">\n            <ol class=\"breadcrumb\">\n              <li class=\"breadcrumb-item\"><a href=\"javascript:;\">Home</a></li>\n              <li class=\"breadcrumb-item active\" aria-current=\"page\">Library</li>\n            </ol>\n          </nav>\n          <nav aria-label=\"breadcrumb\" role=\"navigation\">\n            <ol class=\"breadcrumb\">\n              <li class=\"breadcrumb-item\"><a href=\"javascript:;\">Home</a></li>\n              <li class=\"breadcrumb-item\"><a href=\"javascript:;\">Library</a></li>\n              <li class=\"breadcrumb-item active\" aria-current=\"page\">Data</li>\n            </ol>\n          </nav>\n          <nav aria-label=\"breadcrumb\" role=\"navigation\">\n            <ol class=\"breadcrumb\">\n              <li class=\"breadcrumb-item\"><a href=\"javascript:;\">Home</a></li>\n              <li class=\"breadcrumb-item\"><a href=\"javascript:;\">Library</a></li>\n              <li class=\"breadcrumb-item\"><a href=\"javascript:;\">Data</a></li>\n              <li class=\"breadcrumb-item active\" aria-current=\"page\">Files</li>\n            </ol>\n          </nav>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-md-6 grid-margin stretch-card\">\n    <div class=\"card\">\n      <div class=\"card-body\">\n        <h4 class=\"card-title\">Custom Breadcrumbs</h4>\n        <p class=\"card-description\">Add class <code>.breadcrumb-custom</code> for custom styling</p>\n        <div class=\"template-demo\">\n          <nav aria-label=\"breadcrumb\" role=\"navigation\">\n            <ol class=\"breadcrumb breadcrumb-custom\">\n              <li class=\"breadcrumb-item\"><a href=\"javascript:;\">Home</a></li>\n              <li class=\"breadcrumb-item active\" aria-current=\"page\"><span>Library</span></li>\n            </ol>\n          </nav>\n          <nav aria-label=\"breadcrumb\" role=\"navigation\">\n            <ol class=\"breadcrumb breadcrumb-custom\">\n              <li class=\"breadcrumb-item\"><a href=\"javascript:;\">Home</a></li>\n              <li class=\"breadcrumb-item\"><a href=\"javascript:;\">Library</a></li>\n              <li class=\"breadcrumb-item active\" aria-current=\"page\"><span>Data</span></li>\n            </ol>\n          </nav>\n          <nav aria-label=\"breadcrumb\" role=\"navigation\">\n            <ol class=\"breadcrumb breadcrumb-custom\">\n              <li class=\"breadcrumb-item\"><a href=\"javascript:;\">Home</a></li>\n              <li class=\"breadcrumb-item\"><a href=\"javascript:;\">Library</a></li>\n              <li class=\"breadcrumb-item\"><a href=\"javascript:;\">Data</a></li>\n              <li class=\"breadcrumb-item active\" aria-current=\"page\"><span>Files</span></li>\n            </ol>\n          </nav>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-md-6 grid-margin stretch-card\">\n    <div class=\"card\">\n      <div class=\"card-body\">\n        <h4 class=\"card-title\">Inverse Breadcrumbs</h4>\n        <p class=\"card-description\">Add class <code>.bg-inverse-*</code> for inverse skin</p>\n        <div class=\"template-demo\">\n          <nav aria-label=\"breadcrumb\" role=\"navigation\">\n            <ol class=\"breadcrumb bg-inverse-primary\">\n              <li class=\"breadcrumb-item\"><a href=\"javascript:;\">Home</a></li>\n              <li class=\"breadcrumb-item\"><a href=\"javascript:;\">Library</a></li>\n              <li class=\"breadcrumb-item active\" aria-current=\"page\">Data</li>\n            </ol>\n          </nav>\n          <nav aria-label=\"breadcrumb\" role=\"navigation\">\n            <ol class=\"breadcrumb bg-inverse-info\">\n              <li class=\"breadcrumb-item\"><a href=\"javascript:;\">Home</a></li>\n              <li class=\"breadcrumb-item\"><a href=\"javascript:;\">Library</a></li>\n              <li class=\"breadcrumb-item active\" aria-current=\"page\">Data</li>\n            </ol>\n          </nav>\n          <nav aria-label=\"breadcrumb\" role=\"navigation\">\n            <ol class=\"breadcrumb bg-inverse-danger\">\n              <li class=\"breadcrumb-item\"><a href=\"javascript:;\">Home</a></li>\n              <li class=\"breadcrumb-item\"><a href=\"javascript:;\">Library</a></li>\n              <li class=\"breadcrumb-item active\" aria-current=\"page\">Data</li>\n            </ol>\n          </nav>\n          <nav aria-label=\"breadcrumb\" role=\"navigation\">\n            <ol class=\"breadcrumb bg-inverse-success\">\n              <li class=\"breadcrumb-item\"><a href=\"javascript:;\">Home</a></li>\n              <li class=\"breadcrumb-item\"><a href=\"javascript:;\">Library</a></li>\n              <li class=\"breadcrumb-item active\" aria-current=\"page\">Data</li>\n            </ol>\n          </nav>\n          <nav aria-label=\"breadcrumb\" role=\"navigation\">\n            <ol class=\"breadcrumb bg-inverse-warning\">\n              <li class=\"breadcrumb-item\"><a href=\"javascript:;\">Home</a></li>\n              <li class=\"breadcrumb-item\"><a href=\"javascript:;\">Library</a></li>\n              <li class=\"breadcrumb-item active\" aria-current=\"page\">Data</li>\n            </ol>\n          </nav>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-md-6 grid-margin stretch-card\">\n    <div class=\"card\">\n      <div class=\"card-body\">\n        <h4 class=\"card-title\">Inverse Custom Breadcrumbs</h4>\n        <p class=\"card-description\">Add class <code>.bg-inverse-*</code> for inverse skin</p>\n        <div class=\"template-demo\">\n          <nav aria-label=\"breadcrumb\" role=\"navigation\">\n            <ol class=\"breadcrumb breadcrumb-custom bg-inverse-primary\">\n              <li class=\"breadcrumb-item\"><a href=\"javascript:;\">Home</a></li>\n              <li class=\"breadcrumb-item\"><a href=\"javascript:;\">Library</a></li>\n              <li class=\"breadcrumb-item active\" aria-current=\"page\"><span>Data</span></li>\n            </ol>\n          </nav>\n          <nav aria-label=\"breadcrumb\" role=\"navigation\">\n            <ol class=\"breadcrumb breadcrumb-custom bg-inverse-info\">\n              <li class=\"breadcrumb-item\"><a href=\"javascript:;\">Home</a></li>\n              <li class=\"breadcrumb-item\"><a href=\"javascript:;\">Library</a></li>\n              <li class=\"breadcrumb-item active\" aria-current=\"page\"><span>Data</span></li>\n            </ol>\n          </nav>\n          <nav aria-label=\"breadcrumb\" role=\"navigation\">\n            <ol class=\"breadcrumb breadcrumb-custom bg-inverse-danger\">\n              <li class=\"breadcrumb-item\"><a href=\"javascript:;\">Home</a></li>\n              <li class=\"breadcrumb-item\"><a href=\"javascript:;\">Library</a></li>\n              <li class=\"breadcrumb-item active\" aria-current=\"page\"><span>Data</span></li>\n            </ol>\n          </nav>\n          <nav aria-label=\"breadcrumb\" role=\"navigation\">\n            <ol class=\"breadcrumb breadcrumb-custom bg-inverse-success\">\n              <li class=\"breadcrumb-item\"><a href=\"javascript:;\">Home</a></li>\n              <li class=\"breadcrumb-item\"><a href=\"javascript:;\">Library</a></li>\n              <li class=\"breadcrumb-item active\" aria-current=\"page\"><span>Data</span></li>\n            </ol>\n          </nav>\n          <nav aria-label=\"breadcrumb\" role=\"navigation\">\n            <ol class=\"breadcrumb breadcrumb-custom bg-inverse-warning\">\n              <li class=\"breadcrumb-item\"><a href=\"javascript:;\">Home</a></li>\n              <li class=\"breadcrumb-item\"><a href=\"javascript:;\">Library</a></li>\n              <li class=\"breadcrumb-item active\" aria-current=\"page\"><span>Data</span></li>\n            </ol>\n          </nav>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-md-12 grid-margin\">\n    <div class=\"card\">\n      <div class=\"card-body\">\n        <h4 class=\"card-title\">Colored Breadcrumb Variations</h4>\n        <p class=\"card-description\">Add class <code>.bg-*</code> for solid colored breadcrumb</p>\n        <div class=\"template-demo\">\n          <nav aria-label=\"breadcrumb\" role=\"navigation\">\n            <ol class=\"breadcrumb bg-primary\">\n              <li class=\"breadcrumb-item\"><a href=\"javascript:;\">Home</a></li>\n              <li class=\"breadcrumb-item\"><a href=\"javascript:;\">Library</a></li>\n              <li class=\"breadcrumb-item active\" aria-current=\"page\">Data</li>\n            </ol>\n          </nav>\n          <nav aria-label=\"breadcrumb\" role=\"navigation\">\n            <ol class=\"breadcrumb bg-info\">\n              <li class=\"breadcrumb-item\"><a href=\"javascript:;\">Home</a></li>\n              <li class=\"breadcrumb-item\"><a href=\"javascript:;\">Library</a></li>\n              <li class=\"breadcrumb-item active\" aria-current=\"page\">Data</li>\n            </ol>\n          </nav>\n          <nav aria-label=\"breadcrumb\" role=\"navigation\">\n            <ol class=\"breadcrumb bg-danger\">\n              <li class=\"breadcrumb-item\"><a href=\"javascript:;\">Home</a></li>\n              <li class=\"breadcrumb-item\"><a href=\"javascript:;\">Library</a></li>\n              <li class=\"breadcrumb-item active\" aria-current=\"page\">Data</li>\n            </ol>\n          </nav>\n          <nav aria-label=\"breadcrumb\" role=\"navigation\">\n            <ol class=\"breadcrumb bg-success\">\n              <li class=\"breadcrumb-item\"><a href=\"javascript:;\">Home</a></li>\n              <li class=\"breadcrumb-item\"><a href=\"javascript:;\">Library</a></li>\n              <li class=\"breadcrumb-item active\" aria-current=\"page\">Data</li>\n            </ol>\n          </nav>\n          <nav aria-label=\"breadcrumb\" role=\"navigation\">\n            <ol class=\"breadcrumb bg-warning\">\n              <li class=\"breadcrumb-item\"><a href=\"javascript:;\">Home</a></li>\n              <li class=\"breadcrumb-item\"><a href=\"javascript:;\">Library</a></li>\n              <li class=\"breadcrumb-item active\" aria-current=\"page\">Data</li>\n            </ol>\n          </nav>\n          <nav aria-label=\"breadcrumb\" role=\"navigation\">\n            <ol class=\"breadcrumb bg-light\">\n              <li class=\"breadcrumb-item\"><a href=\"javascript:;\">Home</a></li>\n              <li class=\"breadcrumb-item\"><a href=\"javascript:;\">Library</a></li>\n              <li class=\"breadcrumb-item active\" aria-current=\"page\">Data</li>\n            </ol>\n          </nav>\n          <nav aria-label=\"breadcrumb\" role=\"navigation\">\n            <ol class=\"breadcrumb bg-dark\">\n              <li class=\"breadcrumb-item\"><a href=\"javascript:;\">Home</a></li>\n              <li class=\"breadcrumb-item\"><a href=\"javascript:;\">Library</a></li>\n              <li class=\"breadcrumb-item active\" aria-current=\"page\">Data</li>\n            </ol>\n          </nav>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>";
      /***/
    },

    /***/
    "mX4L":
    /*!***********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/basic-ui/buttons/buttons.component.html ***!
      \***********************************************************************************************/

    /*! exports provided: default */

    /***/
    function mX4L(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"page-header\">\n  <h3 class=\"page-title\">\n    Buttons\n  </h3>\n  <nav aria-label=\"breadcrumb\">\n    <ol class=\"breadcrumb\">\n      <li class=\"breadcrumb-item\"><a href=\"javascript:;\">UI Elements</a></li>\n      <li class=\"breadcrumb-item active\" aria-current=\"page\">Buttons</li>\n    </ol>\n  </nav>\n</div>\n<div class=\"row\">\n  <div class=\"col-12 grid-margin stretch-card\">\n    <div class=\"card\">\n      <div class=\"card-body\">\n        <h4 class=\"card-title\">Gradient buttons</h4>\n        <p class=\"card-description\">Add class <code>.btn-gradient-{{ '{' }}color{{ '}' }}</code> for gradient buttons</p>\n        <div class=\"template-demo\">\n          <button type=\"button\" class=\"btn btn-gradient-primary btn-fw\">Primary</button>\n          <button type=\"button\" class=\"btn btn-gradient-secondary btn-fw\">Secondary</button>\n          <button type=\"button\" class=\"btn btn-gradient-success btn-fw\">Success</button>\n          <button type=\"button\" class=\"btn btn-gradient-danger btn-fw\">Danger</button>\n          <button type=\"button\" class=\"btn btn-gradient-warning btn-fw\">Warning</button>\n          <button type=\"button\" class=\"btn btn-gradient-info btn-fw\">Info</button>\n          <button type=\"button\" class=\"btn btn-gradient-light btn-fw\">Light</button>\n          <button type=\"button\" class=\"btn btn-gradient-dark btn-fw\">Dark</button>\n          <button type=\"button\" class=\"btn btn-link btn-fw\">Link</button>\n        </div>\n      </div>\n      <div class=\"card-body\">\n        <h4 class=\"card-title\">Rounded buttons</h4>\n        <p class=\"card-description\">Add class <code>.btn-rounded</code></p>\n        <div class=\"template-demo\">\n          <button type=\"button\" class=\"btn btn-gradient-primary btn-rounded btn-fw\">Primary</button>\n          <button type=\"button\" class=\"btn btn-gradient-secondary btn-rounded btn-fw\">Secondary</button>\n          <button type=\"button\" class=\"btn btn-gradient-success btn-rounded btn-fw\">Success</button>\n          <button type=\"button\" class=\"btn btn-gradient-danger btn-rounded btn-fw\">Danger</button>\n          <button type=\"button\" class=\"btn btn-gradient-warning btn-rounded btn-fw\">Warning</button>\n          <button type=\"button\" class=\"btn btn-gradient-info btn-rounded btn-fw\">Info</button>\n          <button type=\"button\" class=\"btn btn-gradient-light btn-rounded btn-fw\">Light</button>\n          <button type=\"button\" class=\"btn btn-gradient-dark btn-rounded btn-fw\">Dark</button>\n          <button type=\"button\" class=\"btn btn-link btn-rounded btn-fw\">Link</button>\n        </div>\n      </div>\n      <div class=\"card-body\">\n        <h4 class=\"card-title\">Outlined buttons</h4>\n        <p class=\"card-description\">Add class <code>.btn-outline-{{ '{' }}color{{ '}' }}</code> for outline buttons</p>\n        <div class=\"template-demo\">\n          <button type=\"button\" class=\"btn btn-outline-primary btn-fw\">Primary</button>\n          <button type=\"button\" class=\"btn btn-outline-secondary btn-fw\">Secondary</button>\n          <button type=\"button\" class=\"btn btn-outline-success btn-fw\">Success</button>\n          <button type=\"button\" class=\"btn btn-outline-danger btn-fw\">Danger</button>\n          <button type=\"button\" class=\"btn btn-outline-warning btn-fw\">Warning</button>\n          <button type=\"button\" class=\"btn btn-outline-info btn-fw\">Info</button>\n          <button type=\"button\" class=\"btn btn-outline-light btn-fw\">Light</button>\n          <button type=\"button\" class=\"btn btn-outline-dark btn-fw\">Dark</button>\n          <button type=\"button\" class=\"btn btn-link btn-fw\">Link</button>\n        </div>\n      </div>\n      <div class=\"card-body\">\n        <h4 class=\"card-title\">Single color buttons</h4>\n        <p class=\"card-description\">Add class <code>.btn-{{ '{' }}color{{ '}' }}</code> for buttons in theme colors</p>\n        <div class=\"template-demo\">\n          <button type=\"button\" class=\"btn btn-primary btn-fw\">Primary</button>\n          <button type=\"button\" class=\"btn btn-secondary btn-fw\">Secondary</button>\n          <button type=\"button\" class=\"btn btn-success btn-fw\">Success</button>\n          <button type=\"button\" class=\"btn btn-danger btn-fw\">Danger</button>\n          <button type=\"button\" class=\"btn btn-warning btn-fw\">Warning</button>\n          <button type=\"button\" class=\"btn btn-info btn-fw\">Info</button>\n          <button type=\"button\" class=\"btn btn-light btn-fw\">Light</button>\n          <button type=\"button\" class=\"btn btn-dark btn-fw\">Dark</button>\n          <button type=\"button\" class=\"btn btn-link btn-fw\">Link</button>\n        </div>\n      </div>\n      <div class=\"card-body\">\n        <h4 class=\"card-title\">Inverse buttons</h4>\n        <p class=\"card-description\">Add class <code>.btn-inverse-{{ '{' }}color{{ '}' }} for inverse buttons</code></p>\n        <div class=\"template-demo\">\n          <button type=\"button\" class=\"btn btn-inverse-primary btn-fw\">Primary</button>\n          <button type=\"button\" class=\"btn btn-inverse-secondary btn-fw\">Secondary</button>\n          <button type=\"button\" class=\"btn btn-inverse-success btn-fw\">Success</button>\n          <button type=\"button\" class=\"btn btn-inverse-danger btn-fw\">Danger</button>\n          <button type=\"button\" class=\"btn btn-inverse-warning btn-fw\">Warning</button>\n          <button type=\"button\" class=\"btn btn-inverse-info btn-fw\">Info</button>\n          <button type=\"button\" class=\"btn btn-inverse-light btn-fw\">Light</button>\n          <button type=\"button\" class=\"btn btn-inverse-dark btn-fw\">Dark</button>\n          <button type=\"button\" class=\"btn btn-link btn-fw\">Link</button>\n        </div>\n      </div>\n      <div class=\"card-body\">\n        <h4 class=\"card-title\">Normal buttons</h4>\n        <p class=\"card-description\">Use any of the available button classes to quickly create a styled button.</p>\n        <div class=\"template-demo\">\n          <button type=\"button\" class=\"btn btn-gradient-primary\">Primary</button>\n          <button type=\"button\" class=\"btn btn-gradient-secondary\">Secondary</button>\n          <button type=\"button\" class=\"btn btn-gradient-success\">Success</button>\n          <button type=\"button\" class=\"btn btn-gradient-danger\">Danger</button>\n          <button type=\"button\" class=\"btn btn-gradient-warning\">Warning</button>\n          <button type=\"button\" class=\"btn btn-gradient-info\">Info</button>\n          <button type=\"button\" class=\"btn btn-gradient-light\">Light</button>\n          <button type=\"button\" class=\"btn btn-gradient-dark\">Dark</button>\n          <button type=\"button\" class=\"btn btn-link\">Link</button>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-md-8 grid-margin stretch-card\">\n    <div class=\"card\">\n      <div class=\"card-body\">\n        <div class=\"row\">\n          <div class=\"col-md-7\">\n            <h4 class=\"card-title\">Icon Buttons</h4>\n            <p class=\"card-description\">Add class <code>.btn-icon</code> for buttons with only icons</p>\n            <div class=\"template-demo d-flex justify-content-between flex-nowrap\">\n              <button type=\"button\" class=\"btn btn-gradient-primary btn-rounded btn-icon\">\n                <i class=\"mdi mdi-home-outline\"></i>\n              </button>\n              <button type=\"button\" class=\"btn btn-gradient-dark btn-rounded btn-icon\">\n                <i class=\"mdi mdi-internet-explorer\"></i>\n              </button>\n              <button type=\"button\" class=\"btn btn-gradient-danger btn-rounded btn-icon\">\n                <i class=\"mdi mdi-email-open\"></i>\n              </button>\n              <button type=\"button\" class=\"btn btn-gradient-info btn-rounded btn-icon\">\n                <i class=\"mdi mdi-star\"></i>\n              </button>\n              <button type=\"button\" class=\"btn btn-gradient-success btn-rounded btn-icon\">\n                <i class=\"mdi mdi-map-marker\"></i>\n              </button>\n            </div>\n            <div class=\"template-demo d-flex justify-content-between flex-nowrap\">\n              <button type=\"button\" class=\"btn btn-inverse-primary btn-rounded btn-icon\">\n                <i class=\"mdi mdi-home-outline\"></i>\n              </button>\n              <button type=\"button\" class=\"btn btn-inverse-dark btn-icon\">\n                <i class=\"mdi mdi-internet-explorer\"></i>\n              </button>\n              <button type=\"button\" class=\"btn btn-inverse-danger btn-icon\">\n                <i class=\"mdi mdi-email-open\"></i>\n              </button>\n              <button type=\"button\" class=\"btn btn-inverse-info btn-icon\">\n                <i class=\"mdi mdi-star\"></i>\n              </button>\n              <button type=\"button\" class=\"btn btn-inverse-success btn-icon\">\n                <i class=\"mdi mdi-map-marker\"></i>\n              </button>\n            </div>\n            <div class=\"template-demo d-flex justify-content-between flex-nowrap mt-4\">\n              <button type=\"button\" class=\"btn btn-outline-secondary btn-rounded btn-icon\">\n                <i class=\"mdi mdi-heart-outline text-danger\"></i>\n              </button>\n              <button type=\"button\" class=\"btn btn-outline-secondary btn-rounded btn-icon\">\n                <i class=\"mdi mdi-music text-dark\"></i>\n              </button>\n              <button type=\"button\" class=\"btn btn-outline-secondary btn-rounded btn-icon\">\n                <i class=\"mdi mdi-star text-primary\"></i>\n              </button>\n              <button type=\"button\" class=\"btn btn-outline-secondary btn-rounded btn-icon\">\n                <i class=\"mdi mdi-signal text-info\"></i>                          \n              </button>\n              <button type=\"button\" class=\"btn btn-outline-secondary btn-rounded btn-icon\">\n                <i class=\"mdi mdi-trending-up text-success\"></i>                          \n              </button>\n            </div>\n            <div class=\"template-demo d-flex justify-content-between flex-nowrap\">\n              <button type=\"button\" class=\"btn btn-outline-secondary btn-rounded btn-icon\">\n                <i class=\"mdi mdi-heart-outline\"></i>\n              </button>\n              <button type=\"button\" class=\"btn btn-outline-secondary btn-rounded btn-icon\">\n                <i class=\"mdi mdi-music\"></i>\n              </button>\n              <button type=\"button\" class=\"btn btn-outline-secondary btn-rounded btn-icon\">\n                <i class=\"mdi mdi-star\"></i>\n              </button>\n              <button type=\"button\" class=\"btn btn-outline-secondary btn-rounded btn-icon\">\n                <i class=\"mdi mdi-signal\"></i>                          \n              </button>\n              <button type=\"button\" class=\"btn btn-outline-secondary btn-rounded btn-icon\">\n                <i class=\"mdi mdi-trending-up\"></i>                          \n              </button>\n            </div>\n          </div>\n          <div class=\"col-md-5\">\n            <h4 class=\"card-title\">Button Size</h4>\n            <p class=\"card-description\">Use class <code>.btn-{{ '{' }}size{{ '}' }}</code></p>\n            <div class=\"template-demo\">\n              <button type=\"button\" class=\"btn btn-outline-secondary btn-lg\">btn-lg</button>\n              <button type=\"button\" class=\"btn btn-outline-secondary btn-md\">btn-md</button>\n              <button type=\"button\" class=\"btn btn-outline-secondary btn-sm\">btn-sm</button>\n            </div>\n            <div class=\"template-demo mt-4\">\n              <button type=\"button\" class=\"btn btn-gradient-danger btn-lg\">btn-lg</button>\n              <button type=\"button\" class=\"btn btn-gradient-success btn-md\">btn-md</button>\n              <button type=\"button\" class=\"btn btn-gradient-primary btn-sm\">btn-sm</button>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-md-4 grid-margin stretch-card\">\n    <div class=\"card\">\n      <div class=\"card-body\">\n        <h4 class=\"card-title\">Block buttons</h4>\n        <p class=\"card-description\">Add class <code>.btn-block</code></p>\n        <div class=\"template-demo\">\n          <button type=\"button\" class=\"btn btn-gradient-info btn-lg btn-block\">Block buttons\n            <i class=\"mdi mdi-menu float-right\"></i>\n          </button>\n          <button type=\"button\" class=\"btn btn-dark btn-lg btn-block\">Block buttons</button>\n          <button type=\"button\" class=\"btn btn-gradient-primary btn-lg btn-block\">\n            <i class=\"mdi mdi-account\"></i>                      \n            Block buttons\n          </button>\n          <button type=\"button\" class=\"btn btn-outline-secondary btn-lg btn-block\">Block buttons</button>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-12 grid-margin\">\n    <div class=\"card\">\n      <div class=\"card-body\">\n        <div class=\"row\">\n          <div class=\"col-md-6\">\n            <h4 class=\"card-title\">Button groups</h4>\n            <p class=\"card-description\">Wrap a series of buttons with <code>.btn</code> \n              in <code>.btn-group</code></p>\n            <div class=\"template-demo\">\n              <div class=\"btn-group\" role=\"group\" aria-label=\"Basic example\">\n                <button type=\"button\" class=\"btn btn-outline-secondary\">1</button>\n                <button type=\"button\" class=\"btn btn-outline-secondary\">2</button>\n                <button type=\"button\" class=\"btn btn-outline-secondary\">3</button>\n              </div>\n              <div class=\"btn-group\" role=\"group\" aria-label=\"Basic example\">\n                <button type=\"button\" class=\"btn btn-outline-secondary\">\n                  <i class=\"mdi mdi-heart-outline\"></i>\n                </button>\n                <button type=\"button\" class=\"btn btn-outline-secondary\">\n                  <i class=\"mdi mdi-calendar\"></i>\n                </button>\n                <button type=\"button\" class=\"btn btn-outline-secondary\">\n                  <i class=\"mdi mdi-clock\"></i>\n                </button>\n              </div>\n            </div>\n            <div class=\"template-demo\">\n              <div class=\"btn-group\" role=\"group\" aria-label=\"Basic example\">\n                <button type=\"button\" class=\"btn btn-primary\">1</button>\n                <button type=\"button\" class=\"btn btn-primary\">2</button>\n                <button type=\"button\" class=\"btn btn-primary\">3</button>\n              </div>\n              <div class=\"btn-group\" role=\"group\" aria-label=\"Basic example\">\n                <button type=\"button\" class=\"btn btn-primary\">\n                  <i class=\"mdi mdi-heart-outline\"></i>\n                </button>\n                <button type=\"button\" class=\"btn btn-primary\">\n                  <i class=\"mdi mdi-calendar\"></i>\n                </button>\n                <button type=\"button\" class=\"btn btn-primary\">\n                  <i class=\"mdi mdi-clock\"></i>\n                </button>\n              </div>\n            </div>\n            <div class=\"template-demo mt-4\">\n              <div class=\"btn-group-vertical\" role=\"group\" aria-label=\"Basic example\">\n                <button type=\"button\" class=\"btn btn-outline-secondary\">\n                  <i class=\"mdi mdi-format-vertical-align-top\"></i>\n                </button>\n                <button type=\"button\" class=\"btn btn-outline-secondary\">\n                  <i class=\"mdi mdi-format-vertical-align-center\"></i>\n                </button>\n                <button type=\"button\" class=\"btn btn-outline-secondary\">\n                  <i class=\"mdi mdi-format-vertical-align-bottom\"></i>\n                </button>\n              </div>\n              <div class=\"btn-group-vertical\" role=\"group\" aria-label=\"Basic example\">\n                <button type=\"button\" class=\"btn btn-outline-secondary\">Default</button>\n                <div class=\"btn-group\">\n                  <button type=\"button\" class=\"btn btn-outline-secondary dropdown-toggle\" data-toggle=\"dropdown\">Dropdown</button>\n                  <div class=\"dropdown-menu\">\n                    <a class=\"dropdown-item\">Go back</a>\n                    <a class=\"dropdown-item\">Delete</a>\n                    <a class=\"dropdown-item\">Swap</a>\n                  </div>                          \n                </div>\n                <button type=\"button\" class=\"btn btn-outline-secondary\">Default</button>\n              </div>\n              <div class=\"btn-group-vertical\" role=\"group\" aria-label=\"Basic example\">\n                <button type=\"button\" class=\"btn btn-outline-secondary\">Top</button>\n                <button type=\"button\" class=\"btn btn-outline-secondary\">Middle</button>                          \n                <button type=\"button\" class=\"btn btn-outline-secondary\">Bottom</button>\n              </div>\n            </div>\n            <div class=\"template-demo mt-4\">\n              <div class=\"btn-group\" role=\"group\" aria-label=\"Basic example\">\n                <button type=\"button\" class=\"btn btn-outline-secondary\">\n                  <i class=\"mdi mdi-star d-block mb-1\"></i>\n                  Favourites\n                </button>\n                <button type=\"button\" class=\"btn btn-outline-secondary\">\n                  <i class=\"mdi mdi-reload d-block mb-1\"></i>\n                  Reload\n                </button>\n                <button type=\"button\" class=\"btn btn-outline-secondary\">\n                  <i class=\"mdi mdi-account d-block mb-1\"></i>\n                  Users\n                </button>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-md-6\">\n            <h4 class=\"card-title\">Button with text and icon</h4>\n            <p class=\"card-description\">Wrap icon and text inside <code>.btn-icon-text</code> and use <code>.btn-icon-prepend</code> \n              or <code>.btn-icon-append</code> for icon tags</p>\n            <div class=\"template-demo\">\n              <button type=\"button\" class=\"btn btn-gradient-primary btn-icon-text\">\n                <i class=\"mdi mdi-file-check btn-icon-prepend\"></i>\n                Submit\n              </button>\n              <button type=\"button\" class=\"btn btn-gradient-dark btn-icon-text\">\n                Edit\n                <i class=\"mdi mdi-file-check btn-icon-append\"></i>                          \n              </button>\n              <button type=\"button\" class=\"btn btn-gradient-success btn-icon-text\">\n                <i class=\"mdi mdi-alert btn-icon-prepend\"></i>                                                    \n                Warning\n              </button>\n            </div>\n            <div class=\"template-demo\">\n              <button type=\"button\" class=\"btn btn-gradient-danger btn-icon-text\">\n                <i class=\"mdi mdi-upload btn-icon-prepend\"></i>                                                    \n                Upload\n              </button>\n              <button type=\"button\" class=\"btn btn-gradient-info btn-icon-text\">\n                Print\n                <i class=\"mdi mdi-printer btn-icon-append\"></i>                                                                              \n              </button>\n              <button type=\"button\" class=\"btn btn-gradient-warning btn-icon-text\">\n                <i class=\"mdi mdi-reload btn-icon-prepend\"></i>                                                    \n                Reset\n              </button>\n            </div>\n            <div class=\"template-demo mt-2\">\n              <button type=\"button\" class=\"btn btn-outline-primary btn-icon-text\">\n                <i class=\"mdi mdi-file-check btn-icon-prepend\"></i>\n                Submit\n              </button>\n              <button type=\"button\" class=\"btn btn-outline-secondary btn-icon-text\">\n                Edit\n                <i class=\"mdi mdi-file-check btn-icon-append\"></i>                          \n              </button>\n              <button type=\"button\" class=\"btn btn-outline-success btn-icon-text\">\n                <i class=\"mdi mdi-alert btn-icon-prepend\"></i>                                                    \n                Warning\n              </button>\n            </div>\n            <div class=\"template-demo\">\n              <button type=\"button\" class=\"btn btn-outline-danger btn-icon-text\">\n                <i class=\"mdi mdi-upload btn-icon-prepend\"></i>                                                    \n                Upload\n              </button>\n              <button type=\"button\" class=\"btn btn-outline-info btn-icon-text\">\n                Print\n                <i class=\"mdi mdi-printer btn-icon-append\"></i>                                                                              \n              </button>\n              <button type=\"button\" class=\"btn btn-outline-warning btn-icon-text\">\n                <i class=\"mdi mdi-reload btn-icon-prepend\"></i>                                                    \n                Reset\n              </button>\n            </div>\n            <div class=\"template-demo mt-2\">\n              <button class=\"btn btn-outline-dark btn-icon-text\">\n                <i class=\"mdi mdi-apple btn-icon-prepend mdi-36px\"></i>\n                <span class=\"d-inline-block text-left\">\n                  <small class=\"font-weight-light d-block\">Available on the</small>\n                  App Store\n                </span>\n              </button>\n              <button class=\"btn btn-outline-dark btn-icon-text\">\n                <i class=\"mdi mdi-android-debug-bridge btn-icon-prepend mdi-36px\"></i>\n                <span class=\"d-inline-block text-left\">\n                  <small class=\"font-weight-light d-block\">Get it on the</small>\n                  Google Play\n                </span>\n              </button>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-md-6 grid-margin stretch-card\">\n    <div class=\"card\">\n      <div class=\"card-body\">\n        <h4 class=\"card-title\">Social Icon Buttons</h4>\n        <p class=\"card-description\">Add class <code>.btn-social-icon</code></p>\n        <div class=\"template-demo\">\n          <button type=\"button\" class=\"btn btn-social-icon btn-outline-facebook\"><i class=\"mdi mdi-facebook\"></i></button>\n          <button type=\"button\" class=\"btn btn-social-icon btn-outline-youtube\"><i class=\"mdi mdi-youtube\"></i></button>                                        \n          <button type=\"button\" class=\"btn btn-social-icon btn-outline-twitter\"><i class=\"mdi mdi-twitter\"></i></button>\n          <button type=\"button\" class=\"btn btn-social-icon btn-outline-linkedin\"><i class=\"mdi mdi-linkedin\"></i></button>\n          <button type=\"button\" class=\"btn btn-social-icon btn-outline-google\"><i class=\"mdi mdi-google-plus\"></i></button>\n        </div>\n        <div class=\"template-demo\">\n          <button type=\"button\" class=\"btn btn-social-icon btn-facebook\"><i class=\"mdi mdi-facebook\"></i></button>\n          <button type=\"button\" class=\"btn btn-social-icon btn-youtube\"><i class=\"mdi mdi-youtube\"></i></button>                                        \n          <button type=\"button\" class=\"btn btn-social-icon btn-twitter\"><i class=\"mdi mdi-twitter\"></i></button>\n          <button type=\"button\" class=\"btn btn-social-icon btn-linkedin\"><i class=\"mdi mdi-linkedin\"></i></button>\n          <button type=\"button\" class=\"btn btn-social-icon btn-google\"><i class=\"mdi mdi-google-plus\"></i></button>\n        </div>\n        <div class=\"template-demo\">\n          <button type=\"button\" class=\"btn btn-social-icon btn-facebook btn-rounded\"><i class=\"mdi mdi-facebook\"></i></button>\n          <button type=\"button\" class=\"btn btn-social-icon btn-youtube btn-rounded\"><i class=\"mdi mdi-youtube\"></i></button>                                        \n          <button type=\"button\" class=\"btn btn-social-icon btn-twitter btn-rounded\"><i class=\"mdi mdi-twitter\"></i></button>\n          <button type=\"button\" class=\"btn btn-social-icon btn-linkedin btn-rounded\"><i class=\"mdi mdi-linkedin\"></i></button>\n          <button type=\"button\" class=\"btn btn-social-icon btn-google btn-rounded\"><i class=\"mdi mdi-google-plus\"></i></button>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-md-6 grid-margin stretch-card\">\n    <div class=\"card\">\n      <div class=\"card-body\">\n        <h4 class=\"card-title\">Social button with text</h4>\n        <p class=\"card-description\">Add class <code>.btn-social-icon-text</code></p>\n        <div class=\"template-demo\">\n          <button type=\"button\" class=\"btn btn-social-icon-text btn-facebook\"><i class=\"mdi mdi-facebook\"></i>Facebook</button>\n          <button type=\"button\" class=\"btn btn-social-icon-text btn-youtube\"><i class=\"mdi mdi-youtube\"></i>Youtube</button>                                        \n          <button type=\"button\" class=\"btn btn-social-icon-text btn-twitter\"><i class=\"mdi mdi-twitter\"></i>Twitter</button>\n          <button type=\"button\" class=\"btn btn-social-icon-text btn-linkedin\"><i class=\"mdi mdi-linkedin\"></i>Linkedin</button>\n          <button type=\"button\" class=\"btn btn-social-icon-text btn-google\"><i class=\"mdi mdi-google-plus\"></i>Google</button>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>";
      /***/
    },

    /***/
    "p1E0":
    /*!***************************************************!*\
      !*** ./src/app/basic-ui/tabs/tabs.component.scss ***!
      \***************************************************/

    /*! exports provided: default */

    /***/
    function p1E0(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Jhc2ljLXVpL3RhYnMvdGFicy5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "rPUJ":
    /*!*****************************************************************!*\
      !*** ./src/app/basic-ui/breadcrumbs/breadcrumbs.component.scss ***!
      \*****************************************************************/

    /*! exports provided: default */

    /***/
    function rPUJ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Jhc2ljLXVpL2JyZWFkY3J1bWJzL2JyZWFkY3J1bWJzLmNvbXBvbmVudC5zY3NzIn0= */";
      /***/
    },

    /***/
    "sVxx":
    /*!***************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/basic-ui/dropdowns/dropdowns.component.html ***!
      \***************************************************************************************************/

    /*! exports provided: default */

    /***/
    function sVxx(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"page-header\">\n  <h3 class=\"page-title\">\n    Dropdowns\n  </h3>\n  <nav aria-label=\"breadcrumb\">\n    <ol class=\"breadcrumb\">\n      <li class=\"breadcrumb-item\"><a href=\"javascript:;\">UI Elements</a></li>\n      <li class=\"breadcrumb-item active\" aria-current=\"page\">Dropdowns</li>\n    </ol>\n  </nav>\n</div>\n<div class=\"row\">\n  <div class=\"col-lg-12 grid-margin\">\n    <div class=\"card\">\n      <div class=\"card-body\">\n        <h4 class=\"card-title\">Gradient Dropdown</h4>\n        <p class=\"card-description\">\n          Add class <code>.btn-gradient-{{ '{' }}color{{ '}' }}</code> to the button inside <code>.dropdown</code>\n        </p>\n        <div class=\"template-demo\">\n          <div ngbDropdown>\n            <button class=\"btn btn-gradient-primary\" type=\"button\" id=\"dropdownMenuOutlineButton1\" ngbDropdownToggle>\n              Dropdown\n            </button>\n            <div ngbDropdownMenu aria-labelledby=\"dropdownMenuOutlineButton1\">\n              <h6 class=\"dropdown-header\">Settings</h6>\n              <a class=\"dropdown-item\">Action</a>\n              <a class=\"dropdown-item\">Another action</a>\n              <a class=\"dropdown-item\">Something else here</a>\n              <div class=\"dropdown-divider\"></div>\n              <a class=\"dropdown-item\">Separated link</a>\n            </div>\n          </div>\n          <div ngbDropdown>\n            <button class=\"btn btn-gradient-secondary\" type=\"button\" id=\"dropdownMenuOutlineButton2\" ngbDropdownToggle>\n              Dropdown\n            </button>\n            <div ngbDropdownMenu aria-labelledby=\"dropdownMenuOutlineButton2\">\n              <h6 class=\"dropdown-header\">Settings</h6>\n              <a class=\"dropdown-item\">Action</a>\n              <a class=\"dropdown-item\">Another action</a>\n              <a class=\"dropdown-item\">Something else here</a>\n              <div class=\"dropdown-divider\"></div>\n              <a class=\"dropdown-item\">Separated link</a>\n            </div>\n          </div>\n          <div ngbDropdown>\n            <button class=\"btn btn-gradient-danger\" type=\"button\" id=\"dropdownMenuOutlineButton3\" ngbDropdownToggle>\n              Dropdown\n            </button>\n            <div ngbDropdownMenu aria-labelledby=\"dropdownMenuOutlineButton3\">\n              <h6 class=\"dropdown-header\">Settings</h6>\n              <a class=\"dropdown-item\">Action</a>\n              <a class=\"dropdown-item\">Another action</a>\n              <a class=\"dropdown-item\">Something else here</a>\n              <div class=\"dropdown-divider\"></div>\n              <a class=\"dropdown-item\">Separated link</a>\n            </div>\n          </div>\n          <div ngbDropdown>\n            <button class=\"btn btn-gradient-warning\" type=\"button\" id=\"dropdownMenuOutlineButton4\" ngbDropdownToggle>\n              Dropdown\n            </button>\n            <div ngbDropdownMenu aria-labelledby=\"dropdownMenuOutlineButton4\">\n              <h6 class=\"dropdown-header\">Settings</h6>\n              <a class=\"dropdown-item\">Action</a>\n              <a class=\"dropdown-item\">Another action</a>\n              <a class=\"dropdown-item\">Something else here</a>\n              <div class=\"dropdown-divider\"></div>\n              <a class=\"dropdown-item\">Separated link</a>\n            </div>\n          </div>\n          <div ngbDropdown>\n            <button class=\"btn btn-gradient-success\" type=\"button\" id=\"dropdownMenuOutlineButton5\" ngbDropdownToggle>\n              Dropdown\n            </button>\n            <div ngbDropdownMenu aria-labelledby=\"dropdownMenuOutlineButton5\">\n              <h6 class=\"dropdown-header\">Settings</h6>\n              <a class=\"dropdown-item\">Action</a>\n              <a class=\"dropdown-item\">Another action</a>\n              <a class=\"dropdown-item\">Something else here</a>\n              <div class=\"dropdown-divider\"></div>\n              <a class=\"dropdown-item\">Separated link</a>\n            </div>\n          </div>\n          <div ngbDropdown>\n            <button class=\"btn btn-gradient-info\" type=\"button\" id=\"dropdownMenuOutlineButton6\" ngbDropdownToggle>\n              Dropdown\n            </button>\n            <div ngbDropdownMenu aria-labelledby=\"dropdownMenuOutlineButton6\">\n              <h6 class=\"dropdown-header\">Settings</h6>\n              <a class=\"dropdown-item\">Action</a>\n              <a class=\"dropdown-item\">Another action</a>\n              <a class=\"dropdown-item\">Something else here</a>\n              <div class=\"dropdown-divider\"></div>\n              <a class=\"dropdown-item\">Separated link</a>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"card-body\">\n        <h4 class=\"card-title\">Basic dropdown</h4>\n        <p class=\"card-description\">\n          Wrap the dropdown’s toggle (your button or link) and the dropdown menu within <code>.dropdown</code>\n        </p>\n        <div class=\"template-demo\">\n          <div ngbDropdown>\n            <button class=\"btn btn-primary\" type=\"button\" id=\"dropdownMenuButton1\" ngbDropdownToggle>\n              Dropdown\n            </button>\n            <div ngbDropdownMenu aria-labelledby=\"dropdownMenuButton1\">\n              <h6 class=\"dropdown-header\">Settings</h6>\n              <a class=\"dropdown-item\">Action</a>\n              <a class=\"dropdown-item\">Another action</a>\n              <a class=\"dropdown-item\">Something else here</a>\n              <div class=\"dropdown-divider\"></div>\n              <a class=\"dropdown-item\">Separated link</a>\n            </div>\n          </div>\n          <div ngbDropdown>\n            <button class=\"btn btn-secondary\" type=\"button\" id=\"dropdownMenuButton2\" ngbDropdownToggle>\n              Dropdown\n            </button>\n            <div ngbDropdownMenu aria-labelledby=\"dropdownMenuButton2\">\n              <h6 class=\"dropdown-header\">Settings</h6>\n              <a class=\"dropdown-item\">Action</a>\n              <a class=\"dropdown-item\">Another action</a>\n              <a class=\"dropdown-item\">Something else here</a>\n              <div class=\"dropdown-divider\"></div>\n              <a class=\"dropdown-item\">Separated link</a>\n            </div>\n          </div>\n          <div ngbDropdown>\n            <button class=\"btn btn-danger\" type=\"button\" id=\"dropdownMenuButton3\" ngbDropdownToggle>\n              Dropdown\n            </button>\n            <div ngbDropdownMenu aria-labelledby=\"dropdownMenuButton3\">\n              <h6 class=\"dropdown-header\">Settings</h6>\n              <a class=\"dropdown-item\">Action</a>\n              <a class=\"dropdown-item\">Another action</a>\n              <a class=\"dropdown-item\">Something else here</a>\n              <div class=\"dropdown-divider\"></div>\n              <a class=\"dropdown-item\">Separated link</a>\n            </div>\n          </div>\n          <div ngbDropdown>\n            <button class=\"btn btn-warning\" type=\"button\" id=\"dropdownMenuButton4\" ngbDropdownToggle>\n              Dropdown\n            </button>\n            <div ngbDropdownMenu aria-labelledby=\"dropdownMenuButton4\">\n              <h6 class=\"dropdown-header\">Settings</h6>\n              <a class=\"dropdown-item\">Action</a>\n              <a class=\"dropdown-item\">Another action</a>\n              <a class=\"dropdown-item\">Something else here</a>\n              <div class=\"dropdown-divider\"></div>\n              <a class=\"dropdown-item\">Separated link</a>\n            </div>\n          </div>\n          <div ngbDropdown>\n            <button class=\"btn btn-success\" type=\"button\" id=\"dropdownMenuButton5\" ngbDropdownToggle>\n              Dropdown\n            </button>\n            <div ngbDropdownMenu aria-labelledby=\"dropdownMenuButton5\">\n              <h6 class=\"dropdown-header\">Settings</h6>\n              <a class=\"dropdown-item\">Action</a>\n              <a class=\"dropdown-item\">Another action</a>\n              <a class=\"dropdown-item\">Something else here</a>\n              <div class=\"dropdown-divider\"></div>\n              <a class=\"dropdown-item\">Separated link</a>\n            </div>\n          </div>\n          <div ngbDropdown>\n            <button class=\"btn btn-info\" type=\"button\" id=\"dropdownMenuButton6\" ngbDropdownToggle>\n              Dropdown\n            </button>\n            <div ngbDropdownMenu aria-labelledby=\"dropdownMenuButton6\">\n              <h6 class=\"dropdown-header\">Settings</h6>\n              <a class=\"dropdown-item\">Action</a>\n              <a class=\"dropdown-item\">Another action</a>\n              <a class=\"dropdown-item\">Something else here</a>\n              <div class=\"dropdown-divider\"></div>\n              <a class=\"dropdown-item\">Separated link</a>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"card-body\">\n        <h4 class=\"card-title\">Dropdown outline</h4>\n        <p class=\"card-description\">\n          Add class <code>.btn-outline-{{ '{' }}color{{ '}' }}</code> to the button inside <code>.dropdown</code>\n        </p>\n        <div class=\"template-demo\">\n          <div ngbDropdown>\n            <button class=\"btn btn-outline-primary\" type=\"button\" id=\"dropdownMenuOutlineButton1\" ngbDropdownToggle>\n              Dropdown\n            </button>\n            <div ngbDropdownMenu aria-labelledby=\"dropdownMenuOutlineButton1\">\n              <h6 class=\"dropdown-header\">Settings</h6>\n              <a class=\"dropdown-item\">Action</a>\n              <a class=\"dropdown-item\">Another action</a>\n              <a class=\"dropdown-item\">Something else here</a>\n              <div class=\"dropdown-divider\"></div>\n              <a class=\"dropdown-item\">Separated link</a>\n            </div>\n          </div>\n          <div ngbDropdown>\n            <button class=\"btn btn-outline-secondary\" type=\"button\" id=\"dropdownMenuOutlineButton2\" ngbDropdownToggle>\n              Dropdown\n            </button>\n            <div ngbDropdownMenu aria-labelledby=\"dropdownMenuOutlineButton2\">\n              <h6 class=\"dropdown-header\">Settings</h6>\n              <a class=\"dropdown-item\">Action</a>\n              <a class=\"dropdown-item\">Another action</a>\n              <a class=\"dropdown-item\">Something else here</a>\n              <div class=\"dropdown-divider\"></div>\n              <a class=\"dropdown-item\">Separated link</a>\n            </div>\n          </div>\n          <div ngbDropdown>\n            <button class=\"btn btn-outline-danger\" type=\"button\" id=\"dropdownMenuOutlineButton3\" ngbDropdownToggle>\n              Dropdown\n            </button>\n            <div ngbDropdownMenu aria-labelledby=\"dropdownMenuOutlineButton3\">\n              <h6 class=\"dropdown-header\">Settings</h6>\n              <a class=\"dropdown-item\">Action</a>\n              <a class=\"dropdown-item\">Another action</a>\n              <a class=\"dropdown-item\">Something else here</a>\n              <div class=\"dropdown-divider\"></div>\n              <a class=\"dropdown-item\">Separated link</a>\n            </div>\n          </div>\n          <div ngbDropdown>\n            <button class=\"btn btn-outline-warning\" type=\"button\" id=\"dropdownMenuOutlineButton4\" ngbDropdownToggle>\n              Dropdown\n            </button>\n            <div ngbDropdownMenu aria-labelledby=\"dropdownMenuOutlineButton4\">\n              <h6 class=\"dropdown-header\">Settings</h6>\n              <a class=\"dropdown-item\">Action</a>\n              <a class=\"dropdown-item\">Another action</a>\n              <a class=\"dropdown-item\">Something else here</a>\n              <div class=\"dropdown-divider\"></div>\n              <a class=\"dropdown-item\">Separated link</a>\n            </div>\n          </div>\n          <div ngbDropdown>\n            <button class=\"btn btn-outline-success\" type=\"button\" id=\"dropdownMenuOutlineButton5\" ngbDropdownToggle>\n              Dropdown\n            </button>\n            <div ngbDropdownMenu aria-labelledby=\"dropdownMenuOutlineButton5\">\n              <h6 class=\"dropdown-header\">Settings</h6>\n              <a class=\"dropdown-item\">Action</a>\n              <a class=\"dropdown-item\">Another action</a>\n              <a class=\"dropdown-item\">Something else here</a>\n              <div class=\"dropdown-divider\"></div>\n              <a class=\"dropdown-item\">Separated link</a>\n            </div>\n          </div>\n          <div ngbDropdown>\n            <button class=\"btn btn-outline-info\" type=\"button\" id=\"dropdownMenuOutlineButton6\" ngbDropdownToggle>\n              Dropdown\n            </button>\n            <div ngbDropdownMenu aria-labelledby=\"dropdownMenuOutlineButton6\">\n              <h6 class=\"dropdown-header\">Settings</h6>\n              <a class=\"dropdown-item\">Action</a>\n              <a class=\"dropdown-item\">Another action</a>\n              <a class=\"dropdown-item\">Something else here</a>\n              <div class=\"dropdown-divider\"></div>\n              <a class=\"dropdown-item\">Separated link</a>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-lg-12 grid-margin\">\n    <div class=\"card\">\n      <div class=\"card-body\">\n        <h4 class=\"card-title\">Dropdown menu</h4>\n        <div class=\"row\">\n          <div class=\"col-md-3 dropdown-menu-static-demo\">\n            <div ngbDropdown class=\"dropdown\">\n              <button class=\"btn btn-gradient-primary\" type=\"button\" id=\"dropdownMenuOutlineButton1\" ngbDropdownToggle aria-haspopup=\"true\" aria-expanded=\"true\">\n                Dropdown\n              </button>\n              <div class=\"dropdown-menu show\" aria-labelledby=\"dropdownMenuOutlineButton1\">\n                <h6 class=\"dropdown-header\">Settings</h6>\n                <a class=\"dropdown-item\">Action</a>\n                <a class=\"dropdown-item\">Another action</a>\n                <a class=\"dropdown-item\">Something else here</a>\n                <div class=\"dropdown-divider\"></div>\n                <a class=\"dropdown-item\">Separated link</a>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-md-3 dropdown-menu-static-demo\">\n            <div ngbDropdown class=\"dropdown\">\n              <button class=\"btn btn-gradient-secondary\" type=\"button\" id=\"dropdownMenuOutlineButton2\" ngbDropdownToggle aria-haspopup=\"true\" aria-expanded=\"true\">\n                Dropdown\n              </button>\n              <div class=\"dropdown-menu show\" aria-labelledby=\"dropdownMenuOutlineButton2\">\n                <h6 class=\"dropdown-header\">Settings</h6>\n                <a class=\"dropdown-item\">Action</a>\n                <a class=\"dropdown-item\">Another action</a>\n                <a class=\"dropdown-item\">Something else here</a>\n                <div class=\"dropdown-divider\"></div>\n                <a class=\"dropdown-item\">Separated link</a>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-md-3 dropdown-menu-static-demo\">\n            <div ngbDropdown class=\"dropdown\">\n              <button class=\"btn btn-gradient-danger\" type=\"button\" id=\"dropdownMenuOutlineButton3\" ngbDropdownToggle aria-haspopup=\"true\" aria-expanded=\"true\">\n                Dropdown\n              </button>\n              <div class=\"dropdown-menu show\" aria-labelledby=\"dropdownMenuOutlineButton3\">\n                <h6 class=\"dropdown-header\">Settings</h6>\n                <a class=\"dropdown-item\">Action</a>\n                <a class=\"dropdown-item\">Another action</a>\n                <a class=\"dropdown-item\">Something else here</a>\n                <div class=\"dropdown-divider\"></div>\n                <a class=\"dropdown-item\">Separated link</a>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-md-3 dropdown-menu-static-demo\">\n            <div ngbDropdown class=\"dropdown\">\n              <button class=\"btn btn-gradient-warning\" type=\"button\" id=\"dropdownMenuOutlineButton4\" ngbDropdownToggle aria-haspopup=\"true\" aria-expanded=\"true\">\n                Dropdown\n              </button>\n              <div class=\"dropdown-menu show\" aria-labelledby=\"dropdownMenuOutlineButton4\">\n                <h6 class=\"dropdown-header\">Settings</h6>\n                <a class=\"dropdown-item\">Action</a>\n                <a class=\"dropdown-item\">Another action</a>\n                <a class=\"dropdown-item\">Something else here</a>\n                <div class=\"dropdown-divider\"></div>\n                <a class=\"dropdown-item\">Separated link</a>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-md-3 dropdown-menu-static-demo\">\n            <div ngbDropdown class=\"dropdown\">\n              <button class=\"btn btn-gradient-light\" type=\"button\" id=\"dropdownMenuOutlineButton8\" ngbDropdownToggle aria-haspopup=\"true\" aria-expanded=\"true\">\n                Dropdown\n              </button>\n              <div class=\"dropdown-menu show\" aria-labelledby=\"dropdownMenuOutlineButton8\">\n                <h6 class=\"dropdown-header\">Settings</h6>\n                <a class=\"dropdown-item\">Action</a>\n                <a class=\"dropdown-item\">Another action</a>\n                <a class=\"dropdown-item\">Something else here</a>\n                <div class=\"dropdown-divider\"></div>\n                <a class=\"dropdown-item\">Separated link</a>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-md-3 dropdown-menu-static-demo\">\n            <div ngbDropdown class=\"dropdown\">\n              <button class=\"btn btn-gradient-success\" type=\"button\" id=\"dropdownMenuOutlineButton5\" ngbDropdownToggle aria-haspopup=\"true\" aria-expanded=\"true\">\n                Dropdown\n              </button>\n              <div class=\"dropdown-menu show\" aria-labelledby=\"dropdownMenuOutlineButton5\">\n                <h6 class=\"dropdown-header\">Settings</h6>\n                <a class=\"dropdown-item\">Action</a>\n                <a class=\"dropdown-item\">Another action</a>\n                <a class=\"dropdown-item\">Something else here</a>\n                <div class=\"dropdown-divider\"></div>\n                <a class=\"dropdown-item\">Separated link</a>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-md-3 dropdown-menu-static-demo\">\n            <div ngbDropdown class=\"dropdown\">\n              <button class=\"btn btn-gradient-info\" type=\"button\" id=\"dropdownMenuOutlineButton6\" ngbDropdownToggle aria-haspopup=\"true\" aria-expanded=\"true\">\n                Dropdown\n              </button>\n              <div class=\"dropdown-menu show\" aria-labelledby=\"dropdownMenuOutlineButton6\">\n                <h6 class=\"dropdown-header\">Settings</h6>\n                <a class=\"dropdown-item\">Action</a>\n                <a class=\"dropdown-item\">Another action</a>\n                <a class=\"dropdown-item\">Something else here</a>\n                <div class=\"dropdown-divider\"></div>\n                <a class=\"dropdown-item\">Separated link</a>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-md-3 dropdown-menu-static-demo\">\n            <div ngbDropdown class=\"dropdown\">\n              <button class=\"btn btn-gradient-dark\" type=\"button\" id=\"dropdownMenuOutlineButton7\" ngbDropdownToggle aria-haspopup=\"true\" aria-expanded=\"true\">\n                Dropdown\n              </button>\n              <div class=\"dropdown-menu show\" aria-labelledby=\"dropdownMenuOutlineButton7\">\n                <h6 class=\"dropdown-header\">Settings</h6>\n                <a class=\"dropdown-item\">Action</a>\n                <a class=\"dropdown-item\">Another action</a>\n                <a class=\"dropdown-item\">Something else here</a>\n                <div class=\"dropdown-divider\"></div>\n                <a class=\"dropdown-item\">Separated link</a>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-md-6 grid-margin stretch-card\">\n    <div class=\"card\">\n      <div class=\"card-body\">\n        <h4 class=\"card-title\">Split button dropdowns</h4>\n        <p class=\"card-description\">\n          Wrap two buttons in <code>.btn-group</code> and add <code>.dropdown-toggle-split</code> to the toggling button\n        </p>\n        <div class=\"template-demo\">\n          <div class=\"btn-group\">\n            <button type=\"button\" class=\"btn btn-primary\">Dropdown</button>\n            <div class=\"btn-group\" ngbDropdown>\n              <button type=\"button\" class=\"btn btn-primary dropdown-toggle-split\" id=\"dropdownMenuSplitButton1\" ngbDropdownToggle>\n                <span class=\"sr-only\">Toggle Dropdown</span>\n              </button>\n              <div ngbDropdownMenu aria-labelledby=\"dropdownMenuSplitButton1\">\n                <h6 class=\"dropdown-header\">Settings</h6>\n                <a class=\"dropdown-item\">Action</a>\n                <a class=\"dropdown-item\">Another action</a>\n                <a class=\"dropdown-item\">Something else here</a>\n                <div class=\"dropdown-divider\"></div>\n                <a class=\"dropdown-item\">Separated link</a>\n              </div>\n            </div>\n          </div>\n          <div class=\"btn-group\">\n            <button type=\"button\" class=\"btn btn-danger\">Dropdown</button>\n            <div class=\"btn-group\" ngbDropdown>\n              <button type=\"button\" class=\"btn btn-danger dropdown-toggle dropdown-toggle-split\" id=\"dropdownMenuSplitButton2\" ngbDropdownToggle>\n                <span class=\"sr-only\">Toggle Dropdown</span>\n              </button>\n              <div ngbDropdownMenu aria-labelledby=\"dropdownMenuSplitButton2\">\n                <h6 class=\"dropdown-header\">Settings</h6>\n                <a class=\"dropdown-item\">Action</a>\n                <a class=\"dropdown-item\">Another action</a>\n                <a class=\"dropdown-item\">Something else here</a>\n                <div class=\"dropdown-divider\"></div>\n                <a class=\"dropdown-item\">Separated link</a>\n              </div>\n            </div>\n          </div>\n          <div class=\"btn-group\">\n            <button type=\"button\" class=\"btn btn-success\">Dropdown</button>\n            <div class=\"btn-group\" ngbDropdown>\n              <button type=\"button\" class=\"btn btn-success dropdown-toggle dropdown-toggle-split\" id=\"dropdownMenuSplitButton3\" ngbDropdownToggle>\n                <span class=\"sr-only\">Toggle Dropdown</span>\n              </button>\n              <div ngbDropdownMenu aria-labelledby=\"dropdownMenuSplitButton3\">\n                <h6 class=\"dropdown-header\">Settings</h6>\n                <a class=\"dropdown-item\">Action</a>\n                <a class=\"dropdown-item\">Another action</a>\n                <a class=\"dropdown-item\">Something else here</a>\n                <div class=\"dropdown-divider\"></div>\n                <a class=\"dropdown-item\">Separated link</a>\n              </div>\n            </div>\n          </div>\n          <div class=\"btn-group\">\n            <button type=\"button\" class=\"btn btn-secondary\">Dropdown</button>\n            <div class=\"btn-group\" ngbDropdown>\n              <button type=\"button\" class=\"btn btn-secondary dropdown-toggle dropdown-toggle-split\" id=\"dropdownMenuSplitButton4\" ngbDropdownToggle>\n                <span class=\"sr-only\">Toggle Dropdown</span>\n              </button>\n              <div ngbDropdownMenu aria-labelledby=\"dropdownMenuSplitButton4\">\n                <h6 class=\"dropdown-header\">Settings</h6>\n                <a class=\"dropdown-item\">Action</a>\n                <a class=\"dropdown-item\">Another action</a>\n                <a class=\"dropdown-item\">Something else here</a>\n                <div class=\"dropdown-divider\"></div>\n                <a class=\"dropdown-item\">Separated link</a>\n              </div>\n            </div>\n          </div>\n          <div class=\"btn-group\">\n            <button type=\"button\" class=\"btn btn-info\">Dropdown</button>\n            <div class=\"btn-group\" ngbDropdown>\n              <button type=\"button\" class=\"btn btn-info dropdown-toggle dropdown-toggle-split\" id=\"dropdownMenuSplitButton5\" ngbDropdownToggle>\n                <span class=\"sr-only\">Toggle Dropdown</span>\n              </button>\n              <div ngbDropdownMenu aria-labelledby=\"dropdownMenuSplitButton5\">\n                <h6 class=\"dropdown-header\">Settings</h6>\n                <a class=\"dropdown-item\">Action</a>\n                <a class=\"dropdown-item\">Another action</a>\n                <a class=\"dropdown-item\">Something else here</a>\n                <div class=\"dropdown-divider\"></div>\n                <a class=\"dropdown-item\">Separated link</a>\n              </div>\n            </div>\n          </div>\n          <div class=\"btn-group\">\n            <button type=\"button\" class=\"btn btn-warning\">Dropdown</button>\n            <div class=\"btn-group\" ngbDropdown>\n              <button type=\"button\" class=\"btn btn-warning dropdown-toggle dropdown-toggle-split\" id=\"dropdownMenuSplitButton6\" ngbDropdownToggle>\n                <span class=\"sr-only\">Toggle Dropdown</span>\n              </button>\n              <div ngbDropdownMenu aria-labelledby=\"dropdownMenuSplitButton6\">\n                <h6 class=\"dropdown-header\">Settings</h6>\n                <a class=\"dropdown-item\">Action</a>\n                <a class=\"dropdown-item\">Another action</a>\n                <a class=\"dropdown-item\">Something else here</a>\n                <div class=\"dropdown-divider\"></div>\n                <a class=\"dropdown-item\">Separated link</a>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-md-6 grid-margin stretch-card\">\n    <div class=\"card\">\n      <div class=\"card-body\">\n        <h4 class=\"card-title\">Icon dropdowns</h4>\n        <p class=\"card-description\">\n          Add icon tags instead of text\n        </p>\n        <div class=\"row\">\n          <div class=\"col-12\">\n            <div class=\"template-demo d-flex justify-content-between\">\n              <div ngbDropdown>\n                <button class=\"btn btn-gradient-warning\" type=\"button\" id=\"dropdownMenuIconButton1\" ngbDropdownToggle>\n                  <i class=\"mdi mdi-earth\"></i>\n                </button>\n                <div ngbDropdownMenu aria-labelledby=\"dropdownMenuIconButton1\">\n                  <h6 class=\"dropdown-header\">Settings</h6>\n                  <a class=\"dropdown-item\">Action</a>\n                  <a class=\"dropdown-item\">Another action</a>\n                  <a class=\"dropdown-item\">Something else here</a>\n                  <div class=\"dropdown-divider\"></div>\n                  <a class=\"dropdown-item\">Separated link</a>\n                </div>\n              </div>\n              <div ngbDropdown>\n                <button class=\"btn btn-gradient-danger\" type=\"button\" id=\"dropdownMenuIconButton2\" ngbDropdownToggle>\n                  <i class=\"mdi mdi-trophy-outline\"></i>\n                </button>\n                <div ngbDropdownMenu aria-labelledby=\"dropdownMenuIconButton2\">\n                  <h6 class=\"dropdown-header\">Settings</h6>\n                  <a class=\"dropdown-item\">Action</a>\n                  <a class=\"dropdown-item\">Another action</a>\n                  <a class=\"dropdown-item\">Something else here</a>\n                  <div class=\"dropdown-divider\"></div>\n                  <a class=\"dropdown-item\">Separated link</a>\n                </div>\n              </div>\n              <div ngbDropdown>\n                <button type=\"button\" class=\"btn btn-outline-info\" id=\"dropdownMenuIconButton3\" ngbDropdownToggle>\n                  <i class=\"mdi mdi-clock\"></i>\n                </button>\n                <div ngbDropdownMenu aria-labelledby=\"dropdownMenuIconButton3\">\n                  <h6 class=\"dropdown-header\">Settings</h6>\n                  <a class=\"dropdown-item\">Action</a>\n                  <a class=\"dropdown-item\">Another action</a>\n                  <a class=\"dropdown-item\">Something else here</a>\n                  <div class=\"dropdown-divider\"></div>\n                  <a class=\"dropdown-item\">Separated link</a>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-12\">\n            <div class=\"template-demo d-flex justify-content-between\">\n              <div ngbDropdown>\n                <button type=\"button\" class=\"btn btn-gradient-success\" id=\"dropdownMenuIconButton4\" ngbDropdownToggle>\n                  <i class=\"mdi mdi-heart\"></i>\n                </button>\n                <div ngbDropdownMenu aria-labelledby=\"dropdownMenuIconButton4\">\n                  <h6 class=\"dropdown-header\">Settings</h6>\n                  <a class=\"dropdown-item\">Action</a>\n                  <a class=\"dropdown-item\">Another action</a>\n                  <a class=\"dropdown-item\">Something else here</a>\n                  <div class=\"dropdown-divider\"></div>\n                  <a class=\"dropdown-item\">Separated link</a>\n                </div>\n              </div>\n              <div ngbDropdown>\n                <button type=\"button\" class=\"btn btn-gradient-warning\" id=\"dropdownMenuIconButton5\" ngbDropdownToggle>\n                  <i class=\"mdi mdi-logout\"></i>\n                </button>\n                <div ngbDropdownMenu aria-labelledby=\"dropdownMenuIconButton5\">\n                  <h6 class=\"dropdown-header\">Settings</h6>\n                  <a class=\"dropdown-item\">Action</a>\n                  <a class=\"dropdown-item\">Another action</a>\n                  <a class=\"dropdown-item\">Something else here</a>\n                  <div class=\"dropdown-divider\"></div>\n                  <a class=\"dropdown-item\">Separated link</a>\n                </div>\n              </div>\n              <div ngbDropdown>\n                <button class=\"btn btn-gradient-primary\" type=\"button\" id=\"dropdownMenuIconButton6\" ngbDropdownToggle>\n                  <i class=\"mdi mdi-security\"></i>\n                </button>\n                <div ngbDropdownMenu aria-labelledby=\"dropdownMenuIconButton6\">\n                  <h6 class=\"dropdown-header\">Settings</h6>\n                  <a class=\"dropdown-item\">Action</a>\n                  <a class=\"dropdown-item\">Another action</a>\n                  <a class=\"dropdown-item\">Something else here</a>\n                  <div class=\"dropdown-divider\"></div>\n                  <a class=\"dropdown-item\">Separated link</a>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-12\">\n            <div class=\"template-demo d-flex justify-content-between\">\n              <div ngbDropdown>\n                <button type=\"button\" class=\"btn btn-gradient-dark\" id=\"dropdownMenuIconButton7\" ngbDropdownToggle>\n                  <i class=\"mdi mdi-account\"></i>\n                </button>\n                <div ngbDropdownMenu aria-labelledby=\"dropdownMenuIconButton7\">\n                  <h6 class=\"dropdown-header\">Settings</h6>\n                  <a class=\"dropdown-item\">Action</a>\n                  <a class=\"dropdown-item\">Another action</a>\n                  <a class=\"dropdown-item\">Something else here</a>\n                  <div class=\"dropdown-divider\"></div>\n                  <a class=\"dropdown-item\">Separated link</a>\n                </div>\n              </div>\n              <div ngbDropdown>\n                <button type=\"button\" class=\"btn btn-gradient-info\" id=\"dropdownMenuIconButton8\" ngbDropdownToggle>\n                  <i class=\"mdi mdi-bell\"></i>\n                </button>\n                <div ngbDropdownMenu aria-labelledby=\"dropdownMenuIconButton8\">\n                  <h6 class=\"dropdown-header\">Settings</h6>\n                  <a class=\"dropdown-item\">Action</a>\n                  <a class=\"dropdown-item\">Another action</a>\n                  <a class=\"dropdown-item\">Something else here</a>\n                  <div class=\"dropdown-divider\"></div>\n                  <a class=\"dropdown-item\">Separated link</a>\n                </div>\n              </div>\n              <div ngbDropdown>\n                <button type=\"button\" class=\"btn btn-gradient-success\" id=\"dropdownMenuIconButton7\" ngbDropdownToggle>\n                  <i class=\"mdi mdi-account\"></i>\n                </button>\n                <div ngbDropdownMenu aria-labelledby=\"dropdownMenuIconButton9\">\n                  <h6 class=\"dropdown-header\">Settings</h6>\n                  <a class=\"dropdown-item\">Action</a>\n                  <a class=\"dropdown-item\">Another action</a>\n                  <a class=\"dropdown-item\">Something else here</a>\n                  <div class=\"dropdown-divider\"></div>\n                  <a class=\"dropdown-item\">Separated link</a>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-lg-6 grid-margin stretch-card\">\n    <div class=\"card\">\n      <div class=\"card-body\">\n        <h4 class=\"card-title\">Dropup variation</h4>\n        <p class=\"card-description\">\n          Add class <code>.dropup</code>\n        </p>\n        <div class=\"template-demo\">\n          <div class=\"btn-group dropup\">\n            <button type=\"button\" class=\"btn btn-primary\">Dropdown</button>\n            <div class=\"btn-group\" ngbDropdown placement=\"top-right\">\n              <button type=\"button\" class=\"btn btn-primary dropdown-toggle dropdown-toggle-split\" id=\"dropupMenuSplitButton1\" ngbDropdownToggle>\n                <span class=\"sr-only\">Toggle Dropdown</span>\n              </button>\n              <div ngbDropdownMenu aria-labelledby=\"dropupMenuSplitButton1\">\n                <h6 class=\"dropdown-header\">Settings</h6>\n                <a class=\"dropdown-item\">Action</a>\n                <a class=\"dropdown-item\">Another action</a>\n                <a class=\"dropdown-item\">Something else here</a>\n                <div class=\"dropdown-divider\"></div>\n                <a class=\"dropdown-item\">Separated link</a>\n              </div>\n            </div>\n          </div>\n          <div class=\"btn-group dropup\">\n            <button type=\"button\" class=\"btn btn-danger\">Dropdown</button>\n            <div class=\"btn-group\" ngbDropdown placement=\"top-right\">\n              <button type=\"button\" class=\"btn btn-danger dropdown-toggle dropdown-toggle-split\" id=\"dropupMenuSplitButton2\" ngbDropdownToggle>\n                <span class=\"sr-only\">Toggle Dropdown</span>\n              </button>\n              <div ngbDropdownMenu aria-labelledby=\"dropupMenuSplitButton2\">\n                <h6 class=\"dropdown-header\">Settings</h6>\n                <a class=\"dropdown-item\">Action</a>\n                <a class=\"dropdown-item\">Another action</a>\n                <a class=\"dropdown-item\">Something else here</a>\n                <div class=\"dropdown-divider\"></div>\n                <a class=\"dropdown-item\">Separated link</a>\n              </div>\n            </div>\n          </div>\n          <div class=\"btn-group dropup\">\n            <button type=\"button\" class=\"btn btn-success\">Dropdown</button>\n            <div class=\"btn-group\" ngbDropdown placement=\"top-right\">\n              <button type=\"button\" class=\"btn btn-success dropdown-toggle dropdown-toggle-split\" id=\"dropupMenuSplitButton3\" ngbDropdownToggle>\n                <span class=\"sr-only\">Toggle Dropdown</span>\n              </button>\n              <div ngbDropdownMenu aria-labelledby=\"dropupMenuSplitButton3\">\n                <h6 class=\"dropdown-header\">Settings</h6>\n                <a class=\"dropdown-item\">Action</a>\n                <a class=\"dropdown-item\">Another action</a>\n                <a class=\"dropdown-item\">Something else here</a>\n                <div class=\"dropdown-divider\"></div>\n                <a class=\"dropdown-item\">Separated link</a>\n              </div>\n            </div>\n          </div>\n          <div class=\"btn-group dropup\">\n            <button type=\"button\" class=\"btn btn-secondary\">Dropdown</button>\n            <div class=\"btn-group\" ngbDropdown placement=\"top-right\">\n              <button type=\"button\" class=\"btn btn-secondary dropdown-toggle dropdown-toggle-split\" id=\"dropupMenuSplitButton4\" ngbDropdownToggle>\n                <span class=\"sr-only\">Toggle Dropdown</span>\n              </button>\n              <div ngbDropdownMenu aria-labelledby=\"dropupMenuSplitButton4\">\n                <h6 class=\"dropdown-header\">Settings</h6>\n                <a class=\"dropdown-item\">Action</a>\n                <a class=\"dropdown-item\">Another action</a>\n                <a class=\"dropdown-item\">Something else here</a>\n                <div class=\"dropdown-divider\"></div>\n                <a class=\"dropdown-item\">Separated link</a>\n              </div>\n            </div>\n          </div>\n          <div class=\"btn-group dropup\">\n            <button type=\"button\" class=\"btn btn-info\">Dropdown</button>\n            <div class=\"btn-group\" ngbDropdown placement=\"top-right\">\n              <button type=\"button\" class=\"btn btn-info dropdown-toggle dropdown-toggle-split\" id=\"dropupMenuSplitButton5\" ngbDropdownToggle>\n                <span class=\"sr-only\">Toggle Dropdown</span>\n              </button>\n              <div ngbDropdownMenu aria-labelledby=\"dropupMenuSplitButton5\">\n                <h6 class=\"dropdown-header\">Settings</h6>\n                <a class=\"dropdown-item\">Action</a>\n                <a class=\"dropdown-item\">Another action</a>\n                <a class=\"dropdown-item\">Something else here</a>\n                <div class=\"dropdown-divider\"></div>\n                <a class=\"dropdown-item\">Separated link</a>\n              </div>\n            </div>\n          </div>\n          <div class=\"btn-group dropup\">\n            <button type=\"button\" class=\"btn btn-warning\">Dropdown</button>\n            <div class=\"btn-group\" ngbDropdown placement=\"top-right\">\n              <button type=\"button\" class=\"btn btn-warning dropdown-toggle dropdown-toggle-split\" id=\"dropupMenuSplitButton6\" ngbDropdownToggle>\n                <span class=\"sr-only\">Toggle Dropdown</span>\n              </button>\n              <div ngbDropdownMenu aria-labelledby=\"dropupMenuSplitButton6\">\n                <h6 class=\"dropdown-header\">Settings</h6>\n                <a class=\"dropdown-item\">Action</a>\n                <a class=\"dropdown-item\">Another action</a>\n                <a class=\"dropdown-item\">Something else here</a>\n                <div class=\"dropdown-divider\"></div>\n                <a class=\"dropdown-item\">Separated link</a>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-lg-6 grid-margin stretch-card\">\n    <div class=\"card\">\n      <div class=\"card-body\">\n        <h4 class=\"card-title\">Dropdown sizes</h4>\n        <p class=\"card-description\">\n          Add class <code>.btn-{{ '{' }}size{{ '}' }}</code> to dropdown buttons\n        </p>\n        <div class=\"template-demo mt-5\">\n          <div ngbDropdown>\n            <button class=\"btn btn-danger btn-lg\" type=\"button\" id=\"dropdownMenuSizeButton1\" ngbDropdownToggle>\n              Dropdown\n            </button>\n            <div ngbDropdownMenu aria-labelledby=\"dropdownMenuSizeButton1\">\n              <h6 class=\"dropdown-header\">Settings</h6>\n              <a class=\"dropdown-item\">Action</a>\n              <a class=\"dropdown-item\">Another action</a>\n              <a class=\"dropdown-item\">Something else here</a>\n              <div class=\"dropdown-divider\"></div>\n              <a class=\"dropdown-item\">Separated link</a>\n            </div>\n          </div>\n          <div ngbDropdown>\n            <button class=\"btn btn-danger\" type=\"button\" id=\"dropdownMenuSizeButton2\" ngbDropdownToggle>\n              Dropdown\n            </button>\n            <div ngbDropdownMenu aria-labelledby=\"dropdownMenuSizeButton2\">\n              <h6 class=\"dropdown-header\">Settings</h6>\n              <a class=\"dropdown-item\">Action</a>\n              <a class=\"dropdown-item\">Another action</a>\n              <a class=\"dropdown-item\">Something else here</a>\n              <div class=\"dropdown-divider\"></div>\n              <a class=\"dropdown-item\">Separated link</a>\n            </div>\n          </div>\n          <div ngbDropdown>\n            <button class=\"btn btn-danger btn-sm\" type=\"button\" id=\"dropdownMenuSizeButton3\" ngbDropdownToggle>\n              Dropdown\n            </button>\n            <div ngbDropdownMenu aria-labelledby=\"dropdownMenuSizeButton3\">\n              <h6 class=\"dropdown-header\">Settings</h6>\n              <a class=\"dropdown-item\">Action</a>\n              <a class=\"dropdown-item\">Another action</a>\n              <a class=\"dropdown-item\">Something else here</a>\n              <div class=\"dropdown-divider\"></div>\n              <a class=\"dropdown-item\">Separated link</a>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>";
      /***/
    },

    /***/
    "tF/J":
    /*!*****************************************************!*\
      !*** ./src/app/basic-ui/modals/modals.component.ts ***!
      \*****************************************************/

    /*! exports provided: ModalsComponent */

    /***/
    function tFJ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ModalsComponent", function () {
        return ModalsComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_modals_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./modals.component.html */
      "VDWU");
      /* harmony import */


      var _modals_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./modals.component.scss */
      "BKxu");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "1kSV");

      var ModalsComponent = /*#__PURE__*/function () {
        function ModalsComponent(modalService) {
          _classCallCheck(this, ModalsComponent);

          this.modalService = modalService;
        }

        _createClass(ModalsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "openModal",
          value: function openModal(exampleModalContent) {
            this.modalService.open(exampleModalContent, {
              size: 'lg'
            });
          }
        }, {
          key: "openMediumModal",
          value: function openMediumModal(mediumModalContent) {
            this.modalService.open(mediumModalContent);
          }
        }, {
          key: "openSmallModal",
          value: function openSmallModal(smallModalContent) {
            this.modalService.open(smallModalContent, {
              size: 'sm'
            });
          }
        }]);

        return ModalsComponent;
      }();

      ModalsComponent.ctorParameters = function () {
        return [{
          type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"]
        }];
      };

      ModalsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-modals',
        template: _raw_loader_modals_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_modals_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], ModalsComponent);
      /***/
    },

    /***/
    "vWyM":
    /*!*******************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/basic-ui/progressbar/progressbar.component.html ***!
      \*******************************************************************************************************/

    /*! exports provided: default */

    /***/
    function vWyM(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"page-header\">\n  <h3 class=\"page-title\">\n    Progress\n  </h3>\n  <nav aria-label=\"breadcrumb\">\n    <ol class=\"breadcrumb\">\n      <li class=\"breadcrumb-item\"><a href=\"javascript:;\">UI Elements</a></li>\n      <li class=\"breadcrumb-item active\" aria-current=\"page\">Progress</li>\n    </ol>\n  </nav>\n</div>\n<div class=\"row\">\n  <div class=\"col-md-6 grid-margin stretch-card\">\n    <div class=\"card\">\n      <div class=\"card-body\">\n        <h4 class=\"card-title\">Colored Progressbar</h4>\n        <p class=\"page-description\">Add class <code>type=context-type</code> for theme colors</p>\n        <div class=\"template-demo\">\n          <ngb-progressbar type=\"success\" [value]=\"10\"></ngb-progressbar>\n          <ngb-progressbar type=\"primary\" [value]=\"25\"></ngb-progressbar>\n          <ngb-progressbar type=\"info\" [value]=\"50\"></ngb-progressbar>\n          <ngb-progressbar type=\"warning\" [value]=\"75\"></ngb-progressbar>\n          <ngb-progressbar type=\"danger\" [value]=\"100\"></ngb-progressbar>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-md-6 grid-margin stretch-card\">\n    <div class=\"card\">\n      <div class=\"card-body\">\n        <h4 class=\"card-title\">Gradient Progressbar</h4>\n        <p class=\"page-description\">Add class <code>.bg-gradient-{{'{'}}color{{'}'}}</code> with <code>.progress-bar</code></p>\n        <div class=\"template-demo\">\n          <div class=\"progress progress-md\">\n            <div class=\"progress-bar bg-gradient-primary\" role=\"progressbar\" aria-valuenow=\"5\" style=\"width: 5%\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n          </div>\n          <div class=\"progress progress-md\">\n            <div class=\"progress-bar bg-gradient-success\" role=\"progressbar\" style=\"width: 25%\" aria-valuenow=\"25\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n          </div>\n          <div class=\"progress progress-md\">\n            <div class=\"progress-bar bg-gradient-info\" role=\"progressbar\" style=\"width: 50%\" aria-valuenow=\"50\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n          </div>\n          <div class=\"progress progress-md\">\n            <div class=\"progress-bar bg-gradient-warning\" role=\"progressbar\" style=\"width: 75%\" aria-valuenow=\"75\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n          </div>\n          <div class=\"progress progress-md\">\n            <div class=\"progress-bar bg-gradient-danger\" role=\"progressbar\" style=\"width: 100%\" aria-valuenow=\"100\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-md-6 grid-margin stretch-card\">\n    <div class=\"card\">\n      <div class=\"card-body\">\n        <h4 class=\"card-title\">Progressbar Striped</h4>\n        <p class=\"page-description\">Add class <code>.progress-bar-striped</code> with <code>.progress-bar</code></p>\n        <div class=\"template-demo\">\n          <ngb-progressbar type=\"success\" [value]=\"10\" striped=\"true\"></ngb-progressbar>\n          <ngb-progressbar type=\"primary\" [value]=\"25\" striped=\"true\"></ngb-progressbar>\n          <ngb-progressbar type=\"info\" [value]=\"50\" striped=\"true\"></ngb-progressbar>\n          <ngb-progressbar type=\"warning\" [value]=\"75\" striped=\"true\"></ngb-progressbar>\n          <ngb-progressbar type=\"danger\" [value]=\"100\" striped=\"true\"></ngb-progressbar>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-md-6 grid-margin stretch-card\">\n    <div class=\"card\">\n      <div class=\"card-body\">\n        <h4 class=\"card-title\">Striped Animated</h4>\n        <p class=\"page-description\">Add class <code>.progress-bar-animated</code> with <code>.progress-bar</code></p>\n        <div class=\"template-demo\">\n          <ngb-progressbar type=\"success\" [value]=\"10\" striped=\"true\" animated=\"true\"></ngb-progressbar>\n          <ngb-progressbar type=\"primary\" [value]=\"25\" striped=\"true\" animated=\"true\"></ngb-progressbar>\n          <ngb-progressbar type=\"info\" [value]=\"50\" striped=\"true\" animated=\"true\"></ngb-progressbar>\n          <ngb-progressbar type=\"warning\" [value]=\"75\" striped=\"true\" animated=\"true\"></ngb-progressbar>\n          <ngb-progressbar type=\"danger\" [value]=\"100\" striped=\"true\" animated=\"true\"></ngb-progressbar>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-md-6 grid-margin stretch-card\">\n    <div class=\"card\">\n      <div class=\"card-body\">\n        <h4 class=\"card-title\">With Label</h4>\n        <p class=\"page-description\">Progress bar with labels</p>\n        <div class=\"template-demo\">\n          <div class=\"d-flex justify-content-between\">\n            <small>Filled percentage</small>\n            <small>60%</small>\n          </div>\n          <ngb-progressbar type=\"danger\" [value]=\"60\">60%</ngb-progressbar>\n          <div class=\"d-flex justify-content-between mt-2\">\n            <small>Photoshop</small>\n          </div>\n          <ngb-progressbar type=\"success\" [value]=\"90\">90%</ngb-progressbar>          \n          <ngb-progressbar type=\"warning\" [value]=\"60\">60% completed</ngb-progressbar>          \n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-md-6 grid-margin stretch-card\">\n    <div class=\"card\">\n      <div class=\"card-body\">\n        <h4 class=\"card-title\">Progressbar Sizes</h4>\n        <p class=\"page-description\">Add height=\"height\" for progress bar in different heights</p>\n        <div class=\"template-demo\">\n          <ngb-progressbar type=\"info\" [value]=\"25\" height=\".25rem\"></ngb-progressbar>\n          <ngb-progressbar type=\"info\" [value]=\"50\" height=\".5rem\"></ngb-progressbar>          \n          <ngb-progressbar type=\"info\" [value]=\"75\" height=\"1rem\"></ngb-progressbar>          \n          <ngb-progressbar type=\"info\" [value]=\"100\" height=\"1.5rem\"></ngb-progressbar>          \n        </div>\n      </div>\n    </div>\n  </div>\n</div>";
      /***/
    },

    /***/
    "vmD5":
    /*!***************************************************************!*\
      !*** ./src/app/basic-ui/accordions/accordions.component.scss ***!
      \***************************************************************/

    /*! exports provided: default */

    /***/
    function vmD5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Jhc2ljLXVpL2FjY29yZGlvbnMvYWNjb3JkaW9ucy5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "wLbs":
    /*!*********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/basic-ui/badges/badges.component.html ***!
      \*********************************************************************************************/

    /*! exports provided: default */

    /***/
    function wLbs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"page-header\">\n  <h3 class=\"page-title\">\n    Badges\n  </h3>\n  <nav aria-label=\"breadcrumb\">\n    <ol class=\"breadcrumb\">\n      <li class=\"breadcrumb-item\"><a href=\"javascript:;\">UI Elements</a></li>\n      <li class=\"breadcrumb-item active\" aria-current=\"page\">Badges</li>\n    </ol>\n  </nav>\n</div>\n<div class=\"row\">\n  <div class=\"col-md-4 grid-margin stretch-card\">\n    <div class=\"card\">\n      <div class=\"card-body\">\n        <h4 class=\"card-title\">Normal Badges</h4>\n        <p class=\"card-description\">Add class <code>.badge-{{ '{' }}color{{ '}' }}</code> with <code>.badge</code></p>\n        <div class=\"template-demo\">\n          <table class=\"table mb-0\">\n            <thead>\n              <tr>\n                <th class=\"pl-0\">Item</th>\n                <th class=\"text-right\">Label</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr>\n                <td class=\"pl-0\">Primary label</td>\n                <td class=\"pr-0 text-right\"><div class=\"badge badge-primary\">Primary</div></td>\n              </tr>\n              <tr>\n                <td class=\"pl-0\">Info label</td>\n                <td class=\"pr-0 text-right\"><div class=\"badge badge-info\">Info</div></td>\n              </tr>\n              <tr>\n                <td class=\"pl-0\">Danger label</td>\n                <td class=\"pr-0 text-right\"><div class=\"badge badge-danger\">Danger</div></td>\n              </tr>\n              <tr>\n                <td class=\"pl-0\">Success label</td>\n                <td class=\"pr-0 text-right\"><div class=\"badge badge-success\">Success</div></td>\n              </tr>\n              <tr>\n                <td class=\"pl-0\">Warning label</td>\n                <td class=\"pr-0 text-right\"><div class=\"badge badge-warning\">Warning</div></td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-md-4 grid-margin stretch-card\">\n    <div class=\"card\">\n      <div class=\"card-body\">\n        <h4 class=\"card-title\">Badge Pills</h4>\n        <p class=\"card-description\">Add class <code>.badge-pill</code></p>\n        <div class=\"template-demo\">\n          <table class=\"table mb-0\">\n            <thead>\n              <tr>\n                <th class=\"pl-0\">Item</th>\n                <th class=\"text-right\">Label</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr>\n                <td class=\"pl-0\">Primary label</td>\n                <td class=\"pr-0 text-right\"><div class=\"badge badge-primary badge-pill\">Primary</div></td>\n              </tr>\n              <tr>\n                <td class=\"pl-0\">Info label</td>\n                <td class=\"pr-0 text-right\"><div class=\"badge badge-info badge-pill\">Info</div></td>\n              </tr>\n              <tr>\n                <td class=\"pl-0\">Danger label</td>\n                <td class=\"pr-0 text-right\"><div class=\"badge badge-danger badge-pill\">Danger</div></td>\n              </tr>\n              <tr>\n                <td class=\"pl-0\">Success label</td>\n                <td class=\"pr-0 text-right\"><div class=\"badge badge-success badge-pill\">Success</div></td>\n              </tr>\n              <tr>\n                <td class=\"pl-0\">Warning label</td>\n                <td class=\"pr-0 text-right\"><div class=\"badge badge-warning badge-pill\">Warning</div></td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-md-4 grid-margin stretch-card\">\n    <div class=\"card\">\n      <div class=\"card-body\">\n        <h4 class=\"card-title\">Badge Outlined Variations</h4>\n        <p class=\"card-description\">Add class <code>.badge-outline-*</code></p>\n        <div class=\"template-demo\">\n          <table class=\"table mb-0\">\n            <thead>\n              <tr>\n                <th class=\"pl-0\">Normal</th>\n                <th class=\"text-right\">Rounded</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr>\n                <td class=\"pl-0\"><div class=\"badge badge-outline-primary badge-pill\">Primary</div></td>\n                <td class=\"pr-0 text-right\"><div class=\"badge badge-outline-primary\">Primary</div></td>\n              </tr>\n              <tr>\n                <td class=\"pl-0\"><div class=\"badge badge-outline-info badge-pill\">Info</div></td>\n                <td class=\"pr-0 text-right\"><div class=\"badge badge-outline-info\">Info</div></td>\n              </tr>\n              <tr>\n                <td class=\"pl-0\"><div class=\"badge badge-outline-danger badge-pill\">Danger</div></td>\n                <td class=\"pr-0 text-right\"><div class=\"badge badge-outline-danger\">Danger</div></td>\n              </tr>\n              <tr>\n                <td class=\"pl-0\"><div class=\"badge badge-outline-success badge-pill\">Success</div></td>\n                <td class=\"pr-0 text-right\"><div class=\"badge badge-outline-success\">Success</div></td>\n              </tr>\n              <tr>\n                <td class=\"pl-0\"><div class=\"badge badge-outline-warning badge-pill\">Warning</div></td>\n                <td class=\"pr-0 text-right\"><div class=\"badge badge-outline-warning\">Warning</div></td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-md-4 grid-margin stretch-card\">\n    <div class=\"card\">\n      <div class=\"card-body\">\n        <h4 class=\"card-title\">Badge Outlined Variations</h4>\n        <div class=\"template-demo\">\n          <table class=\"table mb-0\">\n            <thead>\n              <tr>\n                <th class=\"pl-0\">Item</th>\n                <th class=\"text-right\">Label</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr>\n                <td class=\"pl-0\">Rounded Primary</td>\n                <td class=\"pr-0 text-right\"><div class=\"badge badge-pill badge-outline-primary\">2</div></td>\n              </tr>\n              <tr>\n                <td class=\"pl-0\">Rounded Info</td>\n                <td class=\"pr-0 text-right\"><div class=\"badge badge-pill badge-outline-info\">5</div></td>\n              </tr>\n              <tr>\n                <td class=\"pl-0\">Rounded Danger</td>\n                <td class=\"pr-0 text-right\"><div class=\"badge badge-pill badge-outline-danger\">1</div></td>\n              </tr>\n              <tr>\n                <td class=\"pl-0\">Rounded Success</td>\n                <td class=\"pr-0 text-right\"><div class=\"badge badge-pill badge-outline-success\">9</div></td>\n              </tr>\n              <tr>\n                <td class=\"pl-0\">Rounded Warning</td>\n                <td class=\"pr-0 text-right\"><div class=\"badge badge-pill badge-outline-warning\">4</div></td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-md-4 grid-margin stretch-card\">\n    <div class=\"card\">\n      <div class=\"card-body\">\n        <h4 class=\"card-title\">Badge Variations</h4>\n        <div class=\"template-demo\">\n          <table class=\"table mb-0\">\n            <thead>\n              <tr>\n                <th class=\"pl-0\">Item</th>\n                <th class=\"text-right\">Label</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr>\n                <td class=\"pl-0\">Rounded Primary</td>\n                <td class=\"pr-0 text-right\"><div class=\"badge badge-pill badge-primary\">2</div></td>\n              </tr>\n              <tr>\n                <td class=\"pl-0\">Rounded Info</td>\n                <td class=\"pr-0 text-right\"><div class=\"badge badge-pill badge-info\">5</div></td>\n              </tr>\n              <tr>\n                <td class=\"pl-0\">Rounded Danger</td>\n                <td class=\"pr-0 text-right\"><div class=\"badge badge-pill badge-danger\">1</div></td>\n              </tr>\n              <tr>\n                <td class=\"pl-0\">Rounded Success</td>\n                <td class=\"pr-0 text-right\"><div class=\"badge badge-pill badge-success\">9</div></td>\n              </tr>\n              <tr>\n                <td class=\"pl-0\">Rounded Warning</td>\n                <td class=\"pr-0 text-right\"><div class=\"badge badge-pill badge-warning\">4</div></td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-md-4 grid-margin stretch-card\">\n    <div class=\"card\">\n      <div class=\"card-body\">\n        <h4 class=\"card-title\">Badge With Icons</h4>\n        <div class=\"template-demo\">\n          <table class=\"table mb-0\">\n            <thead>\n              <tr>\n                <th class=\"pl-0\">Item</th>\n                <th class=\"text-right\">Label</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr>\n                <td class=\"pl-0\">Icon Badge</td>\n                <td class=\"pr-0 text-right\"><div class=\"badge badge-pill badge-primary\"><i class=\"mdi mdi-account\"></i></div></td>\n              </tr>\n              <tr>\n                <td class=\"pl-0\">Outlined Icons</td>\n                <td class=\"pr-0 text-right\"><div class=\"badge badge-pill badge-outline-info\"><i class=\"mdi mdi-cloud-outline\"></i></div></td>\n              </tr>\n              <tr>\n                <td class=\"pl-0\">Icon With Text</td>\n                <td class=\"pr-0 text-right\"><div class=\"badge badge-pill badge-danger\"><i class=\"mdi mdi-email mr-2\"></i>12</div></td>\n              </tr>\n              <tr>\n                <td class=\"pl-0\">Icon With Text</td>\n                <td class=\"pr-0 text-right\"><div class=\"badge badge-pill badge-success\">12<i class=\"mdi mdi-email ml-2\"></i></div></td>\n              </tr>\n              <tr>\n                <td class=\"pl-0\">Icon Badge</td>\n                <td class=\"pr-0 text-right\"><div class=\"badge badge-pill badge-warning\"><i class=\"mdi mdi-comment\"></i></div></td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-md-6 grid-margin stretch-card\">\n    <div class=\"card\">\n      <div class=\"card-body\">\n        <h4 class=\"card-title\">Gradient Badges</h4>\n        <p class=\"card-description\">Add class <code>.badge-gradient-{{ '{' }}color{{ '}' }}</code></p>\n        <div class=\"template-demo\">\n          <table class=\"table mb-0\">\n            <thead>\n              <tr>\n                <th class=\"pl-0\">Item</th>\n                <th class=\"text-right\">Label</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr>\n                <td class=\"pl-0\">Primary label</td>\n                <td class=\"pr-0 text-right\"><div class=\"badge badge-gradient-primary\">Primary</div></td>\n              </tr>\n              <tr>\n                <td class=\"pl-0\">Secondary label</td>\n                <td class=\"pr-0 text-right\"><div class=\"badge badge-gradient-secondary\">Secondary</div></td>\n              </tr>\n              <tr>\n                <td class=\"pl-0\">Info label</td>\n                <td class=\"pr-0 text-right\"><div class=\"badge badge-gradient-info\">Info</div></td>\n              </tr>\n              <tr>\n                <td class=\"pl-0\">Danger label</td>\n                <td class=\"pr-0 text-right\"><div class=\"badge badge-gradient-danger\">Danger</div></td>\n              </tr>\n              <tr>\n                <td class=\"pl-0\">Success label</td>\n                <td class=\"pr-0 text-right\"><div class=\"badge badge-gradient-success\">Success</div></td>\n              </tr>\n              <tr>\n                <td class=\"pl-0\">Warning label</td>\n                <td class=\"pr-0 text-right\"><div class=\"badge badge-gradient-warning\">Warning</div></td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-md-6 grid-margin stretch-card\">\n    <div class=\"card\">\n      <div class=\"card-body\">\n        <h4 class=\"card-title\">Gradient Rounded Badges</h4>\n        <p class=\"card-description\">Add class <code>.badge-pill</code></p>\n        <div class=\"template-demo\">\n          <table class=\"table mb-0\">\n            <thead>\n              <tr>\n                <th class=\"pl-0\">Item</th>\n                <th class=\"text-right\">Label</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr>\n                <td class=\"pl-0\">Primary label</td>\n                <td class=\"pr-0 text-right\"><div class=\"badge badge-gradient-primary badge-pill\">Primary</div></td>\n              </tr>\n              <tr>\n                <td class=\"pl-0\">Secondary label</td>\n                <td class=\"pr-0 text-right\"><div class=\"badge badge-gradient-secondary badge-pill\">Secondary</div></td>\n              </tr>\n              <tr>\n                <td class=\"pl-0\">Info label</td>\n                <td class=\"pr-0 text-right\"><div class=\"badge badge-gradient-info badge-pill\">Info</div></td>\n              </tr>\n              <tr>\n                <td class=\"pl-0\">Danger label</td>\n                <td class=\"pr-0 text-right\"><div class=\"badge badge-gradient-danger badge-pill\">Danger</div></td>\n              </tr>\n              <tr>\n                <td class=\"pl-0\">Success label</td>\n                <td class=\"pr-0 text-right\"><div class=\"badge badge-gradient-success badge-pill\">Success</div></td>\n              </tr>\n              <tr>\n                <td class=\"pl-0\">Warning label</td>\n                <td class=\"pr-0 text-right\"><div class=\"badge badge-gradient-warning badge-pill\">Warning</div></td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>";
      /***/
    },

    /***/
    "wnvy":
    /*!***************************************************************!*\
      !*** ./src/app/basic-ui/progressbar/progressbar.component.ts ***!
      \***************************************************************/

    /*! exports provided: ProgressbarComponent */

    /***/
    function wnvy(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProgressbarComponent", function () {
        return ProgressbarComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_progressbar_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./progressbar.component.html */
      "vWyM");
      /* harmony import */


      var _progressbar_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./progressbar.component.scss */
      "2pzN");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var ProgressbarComponent = /*#__PURE__*/function () {
        function ProgressbarComponent() {
          _classCallCheck(this, ProgressbarComponent);
        }

        _createClass(ProgressbarComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return ProgressbarComponent;
      }();

      ProgressbarComponent.ctorParameters = function () {
        return [];
      };

      ProgressbarComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-progressbar',
        template: _raw_loader_progressbar_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_progressbar_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], ProgressbarComponent);
      /***/
    },

    /***/
    "zERb":
    /*!*****************************************************!*\
      !*** ./src/app/basic-ui/badges/badges.component.ts ***!
      \*****************************************************/

    /*! exports provided: BadgesComponent */

    /***/
    function zERb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BadgesComponent", function () {
        return BadgesComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_badges_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./badges.component.html */
      "wLbs");
      /* harmony import */


      var _badges_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./badges.component.scss */
      "bsiT");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var BadgesComponent = /*#__PURE__*/function () {
        function BadgesComponent() {
          _classCallCheck(this, BadgesComponent);
        }

        _createClass(BadgesComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return BadgesComponent;
      }();

      BadgesComponent.ctorParameters = function () {
        return [];
      };

      BadgesComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-badges',
        template: _raw_loader_badges_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_badges_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], BadgesComponent);
      /***/
    }
  }]);
})();
//# sourceMappingURL=basic-ui-basic-ui-module-es5.js.map