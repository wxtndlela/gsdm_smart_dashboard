(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tables-tables-module"], {
    /***/
    "B7JA":
    /*!*****************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tables/basic-table/basic-table.component.html ***!
      \*****************************************************************************************************/

    /*! exports provided: default */

    /***/
    function B7JA(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"page-header\">\n  <h3 class=\"page-title\">\n    Basic tables\n  </h3>\n  <nav aria-label=\"breadcrumb\">\n    <ol class=\"breadcrumb\">\n      <li class=\"breadcrumb-item\"><a href=\"javascript:;\">Tables</a></li>\n      <li class=\"breadcrumb-item active\" aria-current=\"page\">Basic tables</li>\n    </ol>\n  </nav>\n</div>\n<div class=\"row\">\n  <div class=\"col-lg-6 grid-margin stretch-card\">\n    <div class=\"card\">\n      <div class=\"card-body\">\n        <h4 class=\"card-title\">Basic Table</h4>\n        <p class=\"card-description\">\n          Add class <code>.table</code>\n        </p>\n        <div class=\"table-responsive\">\n          <table class=\"table\">\n            <thead>\n              <tr>\n                <th>Profile</th>\n                <th>VatNo.</th>\n                <th>Created</th>\n                <th>Status</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr>\n                <td>Jacob</td>\n                <td>53275531</td>\n                <td>12 May 2017</td>\n                <td><label class=\"badge badge-danger\">Pending</label></td>\n              </tr>\n              <tr>\n                <td>Messsy</td>\n                <td>53275532</td>\n                <td>15 May 2017</td>\n                <td><label class=\"badge badge-warning\">In progress</label></td>\n              </tr>\n              <tr>\n                <td>John</td>\n                <td>53275533</td>\n                <td>14 May 2017</td>\n                <td><label class=\"badge badge-info\">Fixed</label></td>\n              </tr>\n              <tr>\n                <td>Peter</td>\n                <td>53275534</td>\n                <td>16 May 2017</td>\n                <td><label class=\"badge badge-success\">Completed</label></td>\n              </tr>\n              <tr>\n                <td>Dave</td>\n                <td>53275535</td>\n                <td>20 May 2017</td>\n                <td><label class=\"badge badge-warning\">In progress</label></td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-lg-6 grid-margin stretch-card\">\n    <div class=\"card\">\n      <div class=\"card-body\">\n        <h4 class=\"card-title\">Hoverable Table</h4>\n        <p class=\"card-description\">\n          Add class <code>.table-hover</code>\n        </p>\n        <div class=\"table-responsive\">\n          <table class=\"table table-hover\">\n            <thead>\n              <tr>\n                <th>User</th>\n                <th>Product</th>\n                <th>Sale</th>\n                <th>Status</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr>\n                <td>Jacob</td>\n                <td>Photoshop</td>\n                <td class=\"text-danger\"> 28.76% <i class=\"mdi mdi-arrow-down\"></i></td>\n                <td><label class=\"badge badge-danger\">Pending</label></td>\n              </tr>\n              <tr>\n                <td>Messsy</td>\n                <td>Flash</td>\n                <td class=\"text-danger\"> 21.06% <i class=\"mdi mdi-arrow-down\"></i></td>\n                <td><label class=\"badge badge-warning\">In progress</label></td>\n              </tr>\n              <tr>\n                <td>John</td>\n                <td>Premier</td>\n                <td class=\"text-danger\"> 35.00% <i class=\"mdi mdi-arrow-down\"></i></td>\n                <td><label class=\"badge badge-info\">Fixed</label></td>\n              </tr>\n              <tr>\n                <td>Peter</td>\n                <td>After effects</td>\n                <td class=\"text-success\"> 82.00% <i class=\"mdi mdi-arrow-up\"></i></td>\n                <td><label class=\"badge badge-success\">Completed</label></td>\n              </tr>\n              <tr>\n                <td>Dave</td>\n                <td>53275535</td>\n                <td class=\"text-success\"> 98.05% <i class=\"mdi mdi-arrow-up\"></i></td>\n                <td><label class=\"badge badge-warning\">In progress</label></td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-lg-12 grid-margin stretch-card\">\n    <div class=\"card\">\n      <div class=\"card-body\">\n        <h4 class=\"card-title\">Striped Table</h4>\n        <p class=\"card-description\">\n          Add class <code>.table-striped</code>\n        </p>\n        <div class=\"table-responsive\">\n          <table class=\"table table-striped\">\n            <thead>\n              <tr>\n                <th>\n                  User\n                </th>\n                <th>\n                  First name\n                </th>\n                <th>\n                  Progress\n                </th>\n                <th>\n                  Amount\n                </th>\n                <th>\n                  Deadline\n                </th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr>\n                <td class=\"py-1\">\n                  <img src=\"assets/images/faces/face1.jpg\" alt=\"image\"/>\n                </td>\n                <td>\n                  Herman Beck\n                </td>\n                <td>\n                  <div class=\"progress\">\n                    <div class=\"progress-bar bg-success\" role=\"progressbar\" style=\"width: 25%\" aria-valuenow=\"25\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n                  </div>\n                </td>\n                <td>\n                  $ 77.99\n                </td>\n                <td>\n                  May 15, 2015\n                </td>\n              </tr>\n              <tr>\n                <td class=\"py-1\">\n                  <img src=\"assets/images/faces/face2.jpg\" alt=\"image\"/>\n                </td>\n                <td>\n                  Messsy Adam\n                </td>\n                <td>\n                  <div class=\"progress\">\n                    <div class=\"progress-bar bg-danger\" role=\"progressbar\" style=\"width: 75%\" aria-valuenow=\"75\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n                  </div>\n                </td>\n                <td>\n                  $245.30\n                </td>\n                <td>\n                  July 1, 2015\n                </td>\n              </tr>\n              <tr>\n                <td class=\"py-1\">\n                  <img src=\"assets/images/faces/face3.jpg\" alt=\"image\"/>\n                </td>\n                <td>\n                  John Richards\n                </td>\n                <td>\n                  <div class=\"progress\">\n                    <div class=\"progress-bar bg-warning\" role=\"progressbar\" style=\"width: 90%\" aria-valuenow=\"90\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n                  </div>\n                </td>\n                <td>\n                  $138.00\n                </td>\n                <td>\n                  Apr 12, 2015\n                </td>\n              </tr>\n              <tr>\n                <td class=\"py-1\">\n                  <img src=\"assets/images/faces/face4.jpg\" alt=\"image\"/>\n                </td>\n                <td>\n                  Peter Meggik\n                </td>\n                <td>\n                  <div class=\"progress\">\n                    <div class=\"progress-bar bg-primary\" role=\"progressbar\" style=\"width: 50%\" aria-valuenow=\"50\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n                  </div>\n                </td>\n                <td>\n                  $ 77.99\n                </td>\n                <td>\n                  May 15, 2015\n                </td>\n              </tr>\n              <tr>\n                <td class=\"py-1\">\n                  <img src=\"assets/images/faces/face5.jpg\" alt=\"image\"/>\n                </td>\n                <td>\n                  Edward\n                </td>\n                <td>\n                  <div class=\"progress\">\n                    <div class=\"progress-bar bg-danger\" role=\"progressbar\" style=\"width: 35%\" aria-valuenow=\"35\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n                  </div>\n                </td>\n                <td>\n                  $ 160.25\n                </td>\n                <td>\n                  May 03, 2015\n                </td>\n              </tr>\n              <tr>\n                <td class=\"py-1\">\n                  <img src=\"assets/images/faces/face6.jpg\" alt=\"image\"/>\n                </td>\n                <td>\n                  John Doe\n                </td>\n                <td>\n                  <div class=\"progress\">\n                    <div class=\"progress-bar bg-info\" role=\"progressbar\" style=\"width: 65%\" aria-valuenow=\"65\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n                  </div>\n                </td>\n                <td>\n                  $ 123.21\n                </td>\n                <td>\n                  April 05, 2015\n                </td>\n              </tr>\n              <tr>\n                <td class=\"py-1\">\n                  <img src=\"assets/images/faces/face7.jpg\" alt=\"image\"/>\n                </td>\n                <td>\n                  Henry Tom\n                </td>\n                <td>\n                  <div class=\"progress\">\n                    <div class=\"progress-bar bg-warning\" role=\"progressbar\" style=\"width: 20%\" aria-valuenow=\"20\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n                  </div>\n                </td>\n                <td>\n                  $ 150.00\n                </td>\n                <td>\n                  June 16, 2015\n                </td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-lg-12 grid-margin stretch-card\">\n    <div class=\"card\">\n      <div class=\"card-body\">\n        <h4 class=\"card-title\">Bordered table</h4>\n        <p class=\"card-description\">\n          Add class <code>.table-bordered</code>\n        </p>\n        <div class=\"table-responsive pt-3\">\n          <table class=\"table table-bordered\">\n            <thead>\n              <tr>\n                <th>\n                  #\n                </th>\n                <th>\n                  First name\n                </th>\n                <th>\n                  Progress\n                </th>\n                <th>\n                  Amount\n                </th>\n                <th>\n                  Deadline\n                </th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr>\n                <td>\n                  1\n                </td>\n                <td>\n                  Herman Beck\n                </td>\n                <td>\n                  <div class=\"progress\">\n                    <div class=\"progress-bar bg-success\" role=\"progressbar\" style=\"width: 25%\" aria-valuenow=\"25\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n                  </div>\n                </td>\n                <td>\n                  $ 77.99\n                </td>\n                <td>\n                  May 15, 2015\n                </td>\n              </tr>\n              <tr>\n                <td>\n                  2\n                </td>\n                <td>\n                  Messsy Adam\n                </td>\n                <td>\n                  <div class=\"progress\">\n                    <div class=\"progress-bar bg-danger\" role=\"progressbar\" style=\"width: 75%\" aria-valuenow=\"75\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n                  </div>\n                </td>\n                <td>\n                  $245.30\n                </td>\n                <td>\n                  July 1, 2015\n                </td>\n              </tr>\n              <tr>\n                <td>\n                  3\n                </td>\n                <td>\n                  John Richards\n                </td>\n                <td>\n                  <div class=\"progress\">\n                    <div class=\"progress-bar bg-warning\" role=\"progressbar\" style=\"width: 90%\" aria-valuenow=\"90\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n                  </div>\n                </td>\n                <td>\n                  $138.00\n                </td>\n                <td>\n                  Apr 12, 2015\n                </td>\n              </tr>\n              <tr>\n                <td>\n                  4\n                </td>\n                <td>\n                  Peter Meggik\n                </td>\n                <td>\n                  <div class=\"progress\">\n                    <div class=\"progress-bar bg-primary\" role=\"progressbar\" style=\"width: 50%\" aria-valuenow=\"50\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n                  </div>\n                </td>\n                <td>\n                  $ 77.99\n                </td>\n                <td>\n                  May 15, 2015\n                </td>\n              </tr>\n              <tr>\n                <td>\n                  5\n                </td>\n                <td>\n                  Edward\n                </td>\n                <td>\n                  <div class=\"progress\">\n                    <div class=\"progress-bar bg-danger\" role=\"progressbar\" style=\"width: 35%\" aria-valuenow=\"35\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n                  </div>\n                </td>\n                <td>\n                  $ 160.25\n                </td>\n                <td>\n                  May 03, 2015\n                </td>\n              </tr>\n              <tr>\n                <td>\n                  6\n                </td>\n                <td>\n                  John Doe\n                </td>\n                <td>\n                  <div class=\"progress\">\n                    <div class=\"progress-bar bg-info\" role=\"progressbar\" style=\"width: 65%\" aria-valuenow=\"65\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n                  </div>\n                </td>\n                <td>\n                  $ 123.21\n                </td>\n                <td>\n                  April 05, 2015\n                </td>\n              </tr>\n              <tr>\n                <td>\n                  7\n                </td>\n                <td>\n                  Henry Tom\n                </td>\n                <td>\n                  <div class=\"progress\">\n                    <div class=\"progress-bar bg-warning\" role=\"progressbar\" style=\"width: 20%\" aria-valuenow=\"20\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n                  </div>\n                </td>\n                <td>\n                  $ 150.00\n                </td>\n                <td>\n                  June 16, 2015\n                </td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-lg-12 grid-margin stretch-card\">\n    <div class=\"card\">\n      <div class=\"card-body\">\n        <h4 class=\"card-title\">Inverse table</h4>\n        <p class=\"card-description\">\n          Add class <code>.table-dark</code>\n        </p>\n        <div class=\"table-responsive pt-3\">\n          <table class=\"table table-dark\">\n            <thead>\n              <tr>\n                <th>\n                  #\n                </th>\n                <th>\n                  First name\n                </th>\n                <th>\n                  Amount\n                </th>\n                <th>\n                  Deadline\n                </th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr>\n                <td>\n                  1\n                </td>\n                <td>\n                  Herman Beck\n                </td>\n                <td>\n                  $ 77.99\n                </td>\n                <td>\n                  May 15, 2015\n                </td>\n              </tr>\n              <tr>\n                <td>\n                  2\n                </td>\n                <td>\n                  Messsy Adam\n                </td>\n                <td>\n                  $245.30\n                </td>\n                <td>\n                  July 1, 2015\n                </td>\n              </tr>\n              <tr>\n                <td>\n                  3\n                </td>\n                <td>\n                  John Richards\n                </td>\n                <td>\n                  $138.00\n                </td>\n                <td>\n                  Apr 12, 2015\n                </td>\n              </tr>\n              <tr>\n                <td>\n                  4\n                </td>\n                <td>\n                  Peter Meggik\n                </td>\n                <td>\n                  $ 77.99\n                </td>\n                <td>\n                  May 15, 2015\n                </td>\n              </tr>\n              <tr>\n                <td>\n                  5\n                </td>\n                <td>\n                  Edward\n                </td>\n                <td>\n                  $ 160.25\n                </td>\n                <td>\n                  May 03, 2015\n                </td>\n              </tr>\n              <tr>\n                <td>\n                  6\n                </td>\n                <td>\n                  John Doe\n                </td>\n                <td>\n                  $ 123.21\n                </td>\n                <td>\n                  April 05, 2015\n                </td>\n              </tr>\n              <tr>\n                <td>\n                  7\n                </td>\n                <td>\n                  Henry Tom\n                </td>\n                <td>\n                  $ 150.00\n                </td>\n                <td>\n                  June 16, 2015\n                </td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-lg-12 stretch-card\">\n    <div class=\"card\">\n      <div class=\"card-body\">\n        <h4 class=\"card-title\">Table with contextual classes</h4>\n        <p class=\"card-description\">\n          Add class <code>.table-{{ '{' }}color{{ '}' }}</code>\n        </p>\n        <div class=\"table-responsive pt-3\">\n          <table class=\"table table-bordered\">\n            <thead>\n              <tr>\n                <th>\n                  #\n                </th>\n                <th>\n                  First name\n                </th>\n                <th>\n                  Product\n                </th>\n                <th>\n                  Amount\n                </th>\n                <th>\n                  Deadline\n                </th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr class=\"table-info\">\n                <td>\n                  1\n                </td>\n                <td>\n                  Herman Beck\n                </td>\n                <td>\n                  Photoshop\n                </td>\n                <td>\n                  $ 77.99\n                </td>\n                <td>\n                  May 15, 2015\n                </td>\n              </tr>\n              <tr class=\"table-warning\">\n                <td>\n                  2\n                </td>\n                <td>\n                  Messsy Adam\n                </td>\n                <td>\n                  Flash\n                </td>\n                <td>\n                  $245.30\n                </td>\n                <td>\n                  July 1, 2015\n                </td>\n              </tr>\n              <tr class=\"table-danger\">\n                <td>\n                  3\n                </td>\n                <td>\n                  John Richards\n                </td>\n                <td>\n                  Premeire\n                </td>\n                <td>\n                  $138.00\n                </td>\n                <td>\n                  Apr 12, 2015\n                </td>\n              </tr>\n              <tr class=\"table-success\">\n                <td>\n                  4\n                </td>\n                <td>\n                  Peter Meggik\n                </td>\n                <td>\n                  After effects\n                </td>\n                <td>\n                  $ 77.99\n                </td>\n                <td>\n                  May 15, 2015\n                </td>\n              </tr>\n              <tr class=\"table-primary\">\n                <td>\n                  5\n                </td>\n                <td>\n                  Edward\n                </td>\n                <td>\n                  Illustrator\n                </td>\n                <td>\n                  $ 160.25\n                </td>\n                <td>\n                  May 03, 2015\n                </td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>";
      /***/
    },

    /***/
    "NSNg":
    /*!***************************************************************!*\
      !*** ./src/app/tables/basic-table/basic-table.component.scss ***!
      \***************************************************************/

    /*! exports provided: default */

    /***/
    function NSNg(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RhYmxlcy9iYXNpYy10YWJsZS9iYXNpYy10YWJsZS5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "us77":
    /*!*************************************************************!*\
      !*** ./src/app/tables/basic-table/basic-table.component.ts ***!
      \*************************************************************/

    /*! exports provided: BasicTableComponent */

    /***/
    function us77(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BasicTableComponent", function () {
        return BasicTableComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_basic_table_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./basic-table.component.html */
      "B7JA");
      /* harmony import */


      var _basic_table_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./basic-table.component.scss */
      "NSNg");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var BasicTableComponent = /*#__PURE__*/function () {
        function BasicTableComponent() {
          _classCallCheck(this, BasicTableComponent);
        }

        _createClass(BasicTableComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return BasicTableComponent;
      }();

      BasicTableComponent.ctorParameters = function () {
        return [];
      };

      BasicTableComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-basic-table',
        template: _raw_loader_basic_table_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_basic_table_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], BasicTableComponent);
      /***/
    },

    /***/
    "w7GV":
    /*!*****************************************!*\
      !*** ./src/app/tables/tables.module.ts ***!
      \*****************************************/

    /*! exports provided: TablesModule */

    /***/
    function w7GV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TablesModule", function () {
        return TablesModule;
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


      var _basic_table_basic_table_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./basic-table/basic-table.component */
      "us77");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var routes = [{
        path: 'basic-table',
        component: _basic_table_basic_table_component__WEBPACK_IMPORTED_MODULE_3__["BasicTableComponent"]
      }];

      var TablesModule = /*#__PURE__*/_createClass(function TablesModule() {
        _classCallCheck(this, TablesModule);
      });

      TablesModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_basic_table_basic_table_component__WEBPACK_IMPORTED_MODULE_3__["BasicTableComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)]
      })], TablesModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=tables-tables-module-es5.js.map