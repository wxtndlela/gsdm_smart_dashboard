(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-service-accounts-service-accounts-module"],{

/***/ "AoNp":
/*!**********************************************************************!*\
  !*** ./src/app/pages/service-accounts/service-accounts.component.ts ***!
  \**********************************************************************/
/*! exports provided: ServiceAccountsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceAccountsComponent", function() { return ServiceAccountsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_service_accounts_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./service-accounts.component.html */ "BjaI");
/* harmony import */ var _service_accounts_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./service-accounts.component.scss */ "BWEj");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let ServiceAccountsComponent = class ServiceAccountsComponent {
    constructor() { }
    ngOnInit() {
    }
};
ServiceAccountsComponent.ctorParameters = () => [];
ServiceAccountsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-service-accounts',
        template: _raw_loader_service_accounts_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_service_accounts_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ServiceAccountsComponent);



/***/ }),

/***/ "BWEj":
/*!************************************************************************!*\
  !*** ./src/app/pages/service-accounts/service-accounts.component.scss ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NlcnZpY2UtYWNjb3VudHMvc2VydmljZS1hY2NvdW50cy5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "BjaI":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/service-accounts/service-accounts.component.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- header -->\n<div class=\"page-header\">\n    <h3 class=\"page-title\">\n        Service Accounts\n    </h3>\n</div>\n\n<!-- cards -->\n<div class=\"row\">\n\n    <div class=\"col-md-3 stretch-card grid-margin\">\n        <div class=\"card bg-gradient-dark card-img-holder text-white\">\n            <div class=\"card-body \">\n                <i class=\"mdi mdi-account-plus\n                mdi-24px float-left\"></i>\n            </div>\n            <div class=\"card-body \">\n                <h6 class=\"card-text\">Add customers\n                </h6>\n            </div>\n        </div>\n    </div>\n    <div class=\"col-md-3 stretch-card grid-margin\">\n        <div class=\"card bg-gradient-dark card-img-holder text-white\">\n            <div class=\"card-body \">\n                <i class=\"mdi mdi-deskphone\n                mdi-24px float-left\"></i>\n            </div>\n            <div class=\"card-body \">\n                <h6 class=\"card-text\">Address book\n                </h6>\n            </div>\n        </div>\n    </div>\n    <div class=\"col-md-3 stretch-card grid-margin\">\n        <div class=\"card bg-gradient-dark card-img-holder text-white\">\n            <div class=\"card-body \">\n                <i class=\"mdi mdi-bullhorn\n                mdi-24px float-left\"></i>\n            </div>\n            <div class=\"card-body \">\n                <h6 class=\"card-text\">Send mass communications\n                </h6>\n            </div>\n        </div>\n    </div>\n</div>\n\n<!-- table header -->\n<div class=\"row\">\n    <div class=\"col-3 \"></div>\n    <div class=\"col-6 \">\n        <div class=\"page-header p-0\">\n            <div class=\"search-field d-none d-md-block\">\n                <form class=\"d-flex align-items-center h-100\" action=\"#\">\n                    <div class=\"input-group\">\n                        <div class=\"input-group-prepend bg-transparent\">\n                            <i class=\"input-group-text border-0 mdi mdi-magnify\"></i>\n                        </div>\n                        <input type=\"text\" class=\"form-control bg-transparent border-0\" placeholder=\"Search projects\">\n                    </div>\n                </form>\n            </div>\n            <nav aria-label=\"breadcrumb\">\n                <ul class=\"breadcrumb\">\n                    <li class=\"breadcrumb-item active\" aria-current=\"page\">\n                        <span></span>results (09)\n                    </li>\n                </ul>\n            </nav>\n        </div>\n    </div>\n    <div class=\"col-3 \">\n        <a style=\"width: 100%;\" class=\" btn btn-info ml-auto\">Export</a>\n    </div>\n</div>\n\n<!-- table -->\n<div class=\"row\">\n    <div class=\"col-3 grid-margin\">\n        <div class=\"card\">\n            <div class=\"card-body\">\n                <a style=\"width: 100%;\" class=\"mb-2 btn btn-info ml-auto\">Customers</a>\n                <a style=\"width: 100%;\" class=\"mb-2 btn btn-info ml-auto\">Daily billing</a>\n                <a style=\"width: 100%;\" class=\"mb-2 btn btn-info ml-auto\">Monthly Billing</a>\n                <a style=\"width: 100%;\" class=\"mb-2 btn btn-info ml-auto\">Yearly billing</a>\n            </div>\n        </div>\n    </div>\n    <div class=\"col-9 grid-margin\">\n        <div class=\"card\">\n            <div class=\"card-body\">\n                <h4 class=\"card-title\">Recent Tickets</h4>\n                <div class=\"table-responsive\">\n                    <table class=\"table\">\n                        <thead>\n                            <tr>\n                                <th>\n                                    Assignee\n                                </th>\n                                <th>\n                                    Subject\n                                </th>\n                                <th>\n                                    Status\n                                </th>\n                                <th>\n                                    Last Update\n                                </th>\n                                <th>\n                                    Tracking ID\n                                </th>\n                            </tr>\n                        </thead>\n                        <tbody>\n                            <tr>\n                                <td>\n                                    <img src=\"assets/images/faces/face1.jpg\" class=\"mr-2\" alt=\"image\">\n                                    David Grey\n                                </td>\n                                <td>\n                                    Fund is not recieved\n                                </td>\n                                <td>\n                                    <label class=\"badge badge-gradient-success\">DONE</label>\n                                </td>\n                                <td>\n                                    Dec 5, 2017\n                                </td>\n                                <td>\n                                    WD-12345\n                                </td>\n                            </tr>\n                            <tr>\n                                <td>\n                                    <img src=\"assets/images/faces/face2.jpg\" class=\"mr-2\" alt=\"image\">\n                                    Stella Johnson\n                                </td>\n                                <td>\n                                    High loading time\n                                </td>\n                                <td>\n                                    <label class=\"badge badge-gradient-warning\">PROGRESS</label>\n                                </td>\n                                <td>\n                                    Dec 12, 2017\n                                </td>\n                                <td>\n                                    WD-12346\n                                </td>\n                            </tr>\n                            <tr>\n                                <td>\n                                    <img src=\"assets/images/faces/face3.jpg\" class=\"mr-2\" alt=\"image\">\n                                    Marina Michel\n                                </td>\n                                <td>\n                                    Website down for one week\n                                </td>\n                                <td>\n                                    <label class=\"badge badge-gradient-info\">ON HOLD</label>\n                                </td>\n                                <td>\n                                    Dec 16, 2017\n                                </td>\n                                <td>\n                                    WD-12347\n                                </td>\n                            </tr>\n                            <tr>\n                                <td>\n                                    <img src=\"assets/images/faces/face4.jpg\" class=\"mr-2\" alt=\"image\">\n                                    John Doe\n                                </td>\n                                <td>\n                                    Loosing control on server\n                                </td>\n                                <td>\n                                    <label class=\"badge badge-gradient-danger\">REJECTED</label>\n                                </td>\n                                <td>\n                                    Dec 3, 2017\n                                </td>\n                                <td>\n                                    WD-12348\n                                </td>\n                            </tr>\n                        </tbody>\n                    </table>\n                </div>\n            </div>\n        </div>\n    </div>\n\n</div>");

/***/ }),

/***/ "kmDn":
/*!*******************************************************************!*\
  !*** ./src/app/pages/service-accounts/service-accounts.module.ts ***!
  \*******************************************************************/
/*! exports provided: ServiceAccountModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceAccountModule", function() { return ServiceAccountModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _service_accounts_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./service-accounts.component */ "AoNp");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");





const routes = [
    { path: '', component: _service_accounts_component__WEBPACK_IMPORTED_MODULE_3__["ServiceAccountsComponent"] }
];
let ServiceAccountModule = class ServiceAccountModule {
};
ServiceAccountModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_service_accounts_component__WEBPACK_IMPORTED_MODULE_3__["ServiceAccountsComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
        ]
    })
], ServiceAccountModule);



/***/ })

}]);
//# sourceMappingURL=pages-service-accounts-service-accounts-module-es2015.js.map