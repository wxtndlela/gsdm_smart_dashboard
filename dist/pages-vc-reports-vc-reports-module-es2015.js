(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-vc-reports-vc-reports-module"],{

/***/ "MxPi":
/*!************************************************************!*\
  !*** ./src/app/pages/vc-reports/vc-reports.component.scss ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3ZjLXJlcG9ydHMvdmMtcmVwb3J0cy5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "Z46p":
/*!**********************************************************!*\
  !*** ./src/app/pages/vc-reports/vc-reports.component.ts ***!
  \**********************************************************/
/*! exports provided: VcReportsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VcReportsComponent", function() { return VcReportsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_vc_reports_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./vc-reports.component.html */ "gZjF");
/* harmony import */ var _vc_reports_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./vc-reports.component.scss */ "MxPi");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let VcReportsComponent = class VcReportsComponent {
    constructor() { }
    ngOnInit() {
    }
};
VcReportsComponent.ctorParameters = () => [];
VcReportsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-vc-reports',
        template: _raw_loader_vc_reports_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_vc_reports_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], VcReportsComponent);



/***/ }),

/***/ "gZjF":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/vc-reports/vc-reports.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>vc-reports works!</p>\n");

/***/ }),

/***/ "ztdR":
/*!*******************************************************!*\
  !*** ./src/app/pages/vc-reports/vc-reports.module.ts ***!
  \*******************************************************/
/*! exports provided: VcReportsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VcReportsModule", function() { return VcReportsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _vc_reports_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./vc-reports.component */ "Z46p");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");





const routes = [{ path: "", component: _vc_reports_component__WEBPACK_IMPORTED_MODULE_3__["VcReportsComponent"] }];
let VcReportsModule = class VcReportsModule {
};
VcReportsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_vc_reports_component__WEBPACK_IMPORTED_MODULE_3__["VcReportsComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
    })
], VcReportsModule);



/***/ })

}]);
//# sourceMappingURL=pages-vc-reports-vc-reports-module-es2015.js.map