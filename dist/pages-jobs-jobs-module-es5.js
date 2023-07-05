(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-jobs-jobs-module"], {
    /***/
    "A8Ph":
    /*!*******************************************!*\
      !*** ./src/app/pages/jobs/jobs.module.ts ***!
      \*******************************************/

    /*! exports provided: JobsModule */

    /***/
    function A8Ph(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "JobsModule", function () {
        return JobsModule;
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


      var _jobs_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./jobs.component */
      "aYVQ");

      var routes = [{
        path: '',
        component: _jobs_component__WEBPACK_IMPORTED_MODULE_4__["JobsComponent"]
      }];

      var JobsModule = /*#__PURE__*/_createClass(function JobsModule() {
        _classCallCheck(this, JobsModule);
      });

      JobsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_jobs_component__WEBPACK_IMPORTED_MODULE_4__["JobsComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)]
      })], JobsModule);
      /***/
    },

    /***/
    "SnYT":
    /*!**************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/jobs/jobs.component.html ***!
      \**************************************************************************************/

    /*! exports provided: default */

    /***/
    function SnYT(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!-- header -->\n<div class=\"page-header\">\n    <h3 class=\"page-title\">\n        Jobs\n    </h3>\n</div>\n\n<!-- cards -->\n<div class=\"row\">\n    <div class=\"col-md-3 stretch-card grid-margin\">\n        <div class=\"card bg-gradient-dark card-img-holder text-white\">\n            <div class=\"card-body \">\n                <i class=\"mdi mdi-bullhorn\n                mdi-24px float-left\"></i>\n            </div>\n            <div class=\"card-body \">\n                <h6 class=\"card-text\">Add job\n                </h6>\n            </div>\n        </div>\n    </div>\n</div>\n\n<!-- table header -->\n<div class=\"row\">\n    <div class=\"col-3\"></div>\n    <div class=\"col-6 \">\n        <div class=\"page-header p-0\">\n            <div class=\"search-field d-none d-md-block\">\n                <form class=\"d-flex align-items-center h-100\" action=\"#\">\n                    <div class=\"input-group\">\n                        <div class=\"input-group-prepend bg-transparent\">\n                            <i class=\"input-group-text border-0 mdi mdi-magnify\"></i>\n                        </div>\n                        <input type=\"text\" class=\"form-control bg-transparent border-0\" placeholder=\"Search projects\">\n                    </div>\n                </form>\n            </div>\n            <nav aria-label=\"breadcrumb\">\n                <ul class=\"breadcrumb\">\n                    <li class=\"breadcrumb-item active\" aria-current=\"page\">\n                        <span></span>results (09)\n                    </li>\n                </ul>\n            </nav>\n        </div>\n    </div>\n    <div class=\"col-3 \">\n        <a style=\"width: 100%;\" class=\" btn btn-info ml-auto\">Export</a>\n    </div>\n</div>\n\n<!-- table -->\n<div class=\"row\">\n    <div class=\"col-3 grid-margin\">\n        <div class=\"card\">\n            <div class=\"card-body\">\n                <a style=\"width: 100%;\" class=\"mb-2 btn btn-info ml-auto\">Send Qoutation</a>\n                <a style=\"width: 100%;\" class=\"mb-2 btn btn-info ml-auto\">Support</a>\n            </div>\n        </div>\n    </div>\n    <div class=\"col-9 grid-margin\">\n        <div class=\"card\">\n            <div class=\"card-body\">\n                <h4 class=\"card-title\">Recent Tickets</h4>\n                <div class=\"table-responsive\">\n                    <table class=\"table\">\n                        <thead>\n                            <tr>\n                                <th>\n                                    Assignee\n                                </th>\n                                <th>\n                                    Subject\n                                </th>\n                                <th>\n                                    Status\n                                </th>\n                                <th>\n                                    Last Update\n                                </th>\n                                <th>\n                                    Tracking ID\n                                </th>\n                            </tr>\n                        </thead>\n                        <tbody>\n                            <tr>\n                                <td>\n                                    <img src=\"assets/images/faces/face1.jpg\" class=\"mr-2\" alt=\"image\">\n                                    David Grey\n                                </td>\n                                <td>\n                                    Fund is not recieved\n                                </td>\n                                <td>\n                                    <label class=\"badge badge-gradient-success\">DONE</label>\n                                </td>\n                                <td>\n                                    Dec 5, 2017\n                                </td>\n                                <td>\n                                    WD-12345\n                                </td>\n                            </tr>\n                            <tr>\n                                <td>\n                                    <img src=\"assets/images/faces/face2.jpg\" class=\"mr-2\" alt=\"image\">\n                                    Stella Johnson\n                                </td>\n                                <td>\n                                    High loading time\n                                </td>\n                                <td>\n                                    <label class=\"badge badge-gradient-warning\">PROGRESS</label>\n                                </td>\n                                <td>\n                                    Dec 12, 2017\n                                </td>\n                                <td>\n                                    WD-12346\n                                </td>\n                            </tr>\n                            <tr>\n                                <td>\n                                    <img src=\"assets/images/faces/face3.jpg\" class=\"mr-2\" alt=\"image\">\n                                    Marina Michel\n                                </td>\n                                <td>\n                                    Website down for one week\n                                </td>\n                                <td>\n                                    <label class=\"badge badge-gradient-info\">ON HOLD</label>\n                                </td>\n                                <td>\n                                    Dec 16, 2017\n                                </td>\n                                <td>\n                                    WD-12347\n                                </td>\n                            </tr>\n                            <tr>\n                                <td>\n                                    <img src=\"assets/images/faces/face4.jpg\" class=\"mr-2\" alt=\"image\">\n                                    John Doe\n                                </td>\n                                <td>\n                                    Loosing control on server\n                                </td>\n                                <td>\n                                    <label class=\"badge badge-gradient-danger\">REJECTED</label>\n                                </td>\n                                <td>\n                                    Dec 3, 2017\n                                </td>\n                                <td>\n                                    WD-12348\n                                </td>\n                            </tr>\n                        </tbody>\n                    </table>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>";
      /***/
    },

    /***/
    "aYVQ":
    /*!**********************************************!*\
      !*** ./src/app/pages/jobs/jobs.component.ts ***!
      \**********************************************/

    /*! exports provided: JobsComponent */

    /***/
    function aYVQ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "JobsComponent", function () {
        return JobsComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_jobs_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./jobs.component.html */
      "SnYT");
      /* harmony import */


      var _jobs_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./jobs.component.scss */
      "b6Hf");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var JobsComponent = /*#__PURE__*/function () {
        function JobsComponent() {
          _classCallCheck(this, JobsComponent);
        }

        _createClass(JobsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return JobsComponent;
      }();

      JobsComponent.ctorParameters = function () {
        return [];
      };

      JobsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-jobs',
        template: _raw_loader_jobs_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_jobs_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], JobsComponent);
      /***/
    },

    /***/
    "b6Hf":
    /*!************************************************!*\
      !*** ./src/app/pages/jobs/jobs.component.scss ***!
      \************************************************/

    /*! exports provided: default */

    /***/
    function b6Hf(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2pvYnMvam9icy5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-jobs-jobs-module-es5.js.map